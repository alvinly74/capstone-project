(function(root) {
  'use strict';

  var _users = {};
  var _randomUser = 0;
  var USER_CHANGE = "USERCHANGED";

  var addUser = function(user){
      _users[user.id] = user;
  };
  var addRandomUser = function(user){
    _users[user.id] = user;
    _randomUser = user.id;
  };

  var updateUser = function(user){
    delete _users[user.id];
    _users[user.id] = user;
  };

  var UserStore = root.UserStore = $.extend({}, EventEmitter.prototype, {
    all: function(){
      return Object.keys(_users).map(function(id) { return _users[id];});
    },
    flavorUser: function(){
      return _users[_randomUser];
    },
    find: function(userId){
      return _users[userId];
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
        case UserConstants.USER_RECEIVED:
          result = addUser(payload.user);
          UserStore.emit(USER_CHANGE);
          break;
        case UserConstants.UPDATE_USER_FOLLOW:
          result = updateUser(payload.user);
          UserStore.emit(USER_CHANGE);
          break;
        case UserConstants.RANDOM_USER:
          result = addRandomUser(payload.user);
          UserStore.emit(USER_CHANGE);
          break;
      }
    })
  });
})(this);
