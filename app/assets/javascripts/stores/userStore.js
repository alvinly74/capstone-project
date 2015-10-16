(function(root) {
  'use strict';

  var _users = [];
  var USER_CHANGE = "USERCHANGED";

  var resetUser = function(user){
  _users = user;
  };
  var updateUserFollow = function(userId, upOrDown){
    UserStore.find(userId).following_count += upOrDown;
  };

  var UserStore = root.UserStore = $.extend({}, EventEmitter.prototype, {
    all: function(){
      return _users;
    },

    find: function(userId){
      var user;
      _users.forEach(function(u){
        if(u.id === parseInt(userId)) { user = u; }
      });
      return user;
    },

    addChangeListener: function(callback){
      this.on(USER_CHANGE, callback);
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
