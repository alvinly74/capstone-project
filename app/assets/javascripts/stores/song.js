(function(root) {
  'use strict';

  var _songs = [];
  var CHANGE_EVENT = "change";

  var resetSongs = function(songs){
  _songs = songs.slice();
  };

  var SongStore = root.SongStore = $.extend({}, EventEmitter.prototype, {
    all: function(){
      return _songs.slice();
    },
    addChangeListener: function(callback){
      this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function(callback){
      this.removeListener(CHANGE_EVENT, callback);
    },

    dispatcherID: AppDispatcher.register(function(payload){
      switch(payload.actionType){
        case SongConstants.ALL_SONGS_RECEIVED:
          var result = resetSongs(payload.songs);
          SongStore.emit(CHANGE_EVENT);
          break;
      }
    })
  });
})(this);
