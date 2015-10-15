(function(root) {
  'use strict';

  var _users = [];
  var USER_CHANGE = "USERCHANGED";

  var resetUser = function(user){
  _users = user;
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
      switch(payload.actionType){
        case UserConstant.USER_RECEIVED:
          var result = resetUser(payload.users);
          UserStore.emit(USER_CHANGE);
          break;
      }
    })
  });
})(this);
