(function(root) {
  'use strict';

  var _songs = [];
  var SONG_CHANGE = "change";

  var resetSongs = function(songs){
  _songs = songs.slice();
  };

  var SongStore = root.SongStore = $.extend({}, EventEmitter.prototype, {
    all: function(){
      return _songs.slice();
    },
    addChangeListener: function(callback){
      this.on(SONG_CHANGE, callback);
    },

    removeChangeListener: function(callback){
      this.removeListener(SONG_CHANGE, callback);
    },

    dispatcherID: AppDispatcher.register(function(payload){
      switch(payload.actionType){
        case SongConstants.ALL_SONGS_RECEIVED:
          var result = resetSongs(payload.songs);
          SongStore.emit(SONG_CHANGE);
          break;
      }
    })
  });
})(this);
