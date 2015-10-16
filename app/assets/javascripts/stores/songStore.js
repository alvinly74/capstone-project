(function(root) {
  'use strict';

  var _songs = [];
  var _windowSong = {};
  var _currentSong = {};
  var _currentplaying = false;
  var LIST_CHANGE = "list change";
  var WINDOW_CHANGE = "SONG SHOW PAGE CHANGE";
  var UPDATE_CURRENT = "update current";
  var LIKE_CHANGE = "CHANGE IN LIKES";


  var resetSongs = function(songs){
  _songs = songs.slice();
  };
  var changeWindowSong = function(song){
    _windowSong = song;
  };
  var updateCurrentSong = function(song){
    _currentSong = song;
  };
  var likeUnlikeSong = function(songId, likeUnlike){
    SongStore.find(songId).likeCount += likeUnlike;
  };

  var SongStore = root.SongStore = $.extend({}, EventEmitter.prototype, {
    all: function(){
      return _songs.slice();
    },
    window: function(){
      return _windowSong;
    },
    current: function(){
      return _currentSong;
    },
    find: function(songId){
      var song;
      _songs.forEach(function(s){
        if(s.id === parseInt(songId)) { song = s; }
      });
      return song;
    },
    addSongListChangeListener: function(callback){
      this.on(LIST_CHANGE, callback);
    },
    removeSongListChangeListener: function(callback){
      this.removeListener(LIST_CHANGE, callback);
    },

    addWindowSongChangeListener: function(callback){
      this.on(WINDOW_CHANGE, callback);
    },
    removeWindowSongChangeListener: function(callback){
      this.removeListener(WINDOW_CHANGE, callback);
    },

    addCurrentSongChangeListener: function(callback){
      this.on(UPDATE_CURRENT, callback);
    },
    removeCurrentSongChangeListener: function(callback){
      this.removeListener(UPDATE_CURRENT, callback);
    },

    dispatcherID: AppDispatcher.register(function(payload){
      var result;
      switch(payload.actionType){
        case SongConstants.ALL_SONGS_RECEIVED:
          result = resetSongs(payload.songs);
          SongStore.emit(LIST_CHANGE);
          break;
        case SongConstants.WINDOW_SONG_CHANGE:
          result = changeWindowSong(payload.song);
          SongStore.emit(WINDOW_CHANGE);
          break;
          case SongConstants.CURRENT_SONG_CHANGE:
            result = updateCurrentSong(payload.song);
            SongStore.emit(UPDATE_CURRENT);
            break;
          case SongConstants.SONG_LIKE_CHANGE:
            result = likeUnlikeSong(payload.songId, payload.likeUnlike);
            SongStore.emit(LIST_CHANGE);
            break;
      }
    })
  });
})(this);
