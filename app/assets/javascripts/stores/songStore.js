(function(root) {
  'use strict';

  var _songs = {};
  var _windowSong = {};
  var _currentSong = {};
  var _currentplaying = false;
  var _waveSurfer = Object.create(WaveSurfer);
  var _waveSurfSong = {};

  var LIST_CHANGE = "list change";
  var WINDOW_CHANGE = "SONG SHOW PAGE CHANGE";
  var UPDATE_CURRENT = "update current";
  var LIKE_CHANGE = "CHANGE IN LIKES";


  var resetSongs = function(songs){
    _songs = {};
    songs.forEach(function(song){
      _songs[song.id] = song;
    });
  };
  var changeWindowSong = function(song){
    _windowSong = song;
  };
  var updateCurrentSong = function(song){
    if (_currentSong === song){
      _waveSurfer.play();
    }
    _currentSong = song;
  };
  var updateSong = function(song){
    delete _songs[song.id];
    _songs[song.id] = song;
    
  };
  var updatePlayingStatus = function(playingstatus){
    _currentplaying = playingstatus;
  };

  var SongStore = root.SongStore = $.extend({}, EventEmitter.prototype, {
    all: function(){
      return Object.keys(_songs).map(function(id) { return _songs[id]; });
    },
    window: function(){
      return _windowSong;
    },
    current: function(){
      return _currentSong;
    },
    find: function(songId){
      return _songs[songId];
    },
    playing: function(){
      return _currentplaying;
    },
    waveSurfer: function(){
      return _waveSurfer;
    },
    waveSurfSong: function(){
      return _waveSurfSong;
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
          case SongConstants.SONG_UPDATE:
            result = updateSong(payload.song);
            SongStore.emit(LIST_CHANGE);
            break;
          case SongConstants.SONG_STATUS_CHANGE:
            result = updatePlayingStatus(payload.status);
            SongStore.emit(UPDATE_CURRENT);
            break;
      }
    })
  });
})(this);
