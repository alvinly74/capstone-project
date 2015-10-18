(function(root) {
  'use strict';

  var _users = {};
  var _flavorUser = {};
  var USER_CHANGE = "USERCHANGED";
  var FLAVOR_CHANGE = "FLAVOR USER CHANGE";

  var resetUser = function(user){
    _users = {};
    user.forEach(function(user){
      _users[user.id] = user;
    });
  };
  var updateFlavorUser = function(user){
    _flavorUser = user;
  };
  var updateUserFollow = function(userId, upOrDown){
    UserStore.find(userId).following_count += upOrDown;
  };

  var UserStore = root.UserStore = $.extend({}, EventEmitter.prototype, {
    all: function(){
      return Object.keys(_users).map(function(id) { return _users[id];});
    },
    flavorUser: function(){
      return _flavorUser;
    },
    find: function(userId){
      return _users[userId];
    },

    addChangeListener: function(callback){
      this.on(USER_CHANGE, callback);
    },

    addFlavorChangeListener: function(callback){
      this.on(FLAVOR_CHANGE, callback);
    },

    removeChangeListener: function(callback){
      this.removeListener(USER_CHANGE, callback);
    },

    dispatcherID: AppDispatcher.register(function(payload){
      var result;
      switch(payload.actionType){
        case UserConstant.USER_RECEIVED:
          result = resetUser(payload.users);
          UserStore.emit(USER_CHANGE);
          break;
        case UserConstant.UPDATE_USER_FOLLOW:
          result = updateUserFollow(payload.userId, payload.upOrDown);
          UserStore.emit(USER_CHANGE);
      }
    })
  });
})(this);
