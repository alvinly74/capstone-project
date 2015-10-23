(function(root) {
  'use strict';

  var _songs = {};
  var _windowSongId = 0;
  var _currentSong = 0;
  var _searchResults = [];
  var _currentplaying = false;
  var _waveSurfer = Object.create(WaveSurfer);
  var _waveSurfSong = parseInt(Object.keys(_songs)[0]);

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

  var changeWindowSongId = function(id){
    _windowSongId = id;
  };

  var updateCurrentSong = function(song){
    if (_currentSong === song.id){
      _waveSurfer.play();
    }
    _currentSong = song.id;
  };
  var updateSearch = function(songIds){
    _searchResults = songIds;
  };
  var randomSongPlay = function(){
    var song = _songs[Math.floor(Math.random()*Object.keys(_songs).length)];
    updatePlayingStatus(true);
    updateCurrentSong(song);
    SongStore.emit(UPDATE_CURRENT);
  };
  var updateSong = function(song){
    delete _songs[song.id];
    _songs[song.id] = song;
    if (song.id === _windowSongId) {
      SongStore.emit(WINDOW_CHANGE);
    }
    if (song.id === _currentSong){
      SongStore.emit(UPDATE_CURRENT);
    }
  };

  var addSongsToStore = function(songs){
    songs.forEach(function(song){
      _songs[song.id] = song;
    });
  };
  var updatePlayingStatus = function(playingstatus){
    _currentplaying = playingstatus;
  };

  var SongStore = root.SongStore = $.extend({}, EventEmitter.prototype, {

    searchResult: function(){
      var songList = [];
      _searchResults.forEach(function(id){
        songList.push(_songs[id]);
      });
      return songList;
    },
    followedUserSongs:function(){
      var songList = [];
      var limitOne = [];
      Object.keys(_songs).forEach(function(id){
        if (_songs[id].current_user_follow && limitOne.indexOf(_songs[id].user_id) === -1){
          songList.push(_songs[id]);
          limitOne.push(_songs[id].user_id);
        }
      });
      return songList.reverse();
    },
    likedSongs:function(){
      var songList = [];
      Object.keys(_songs).forEach(function(id){
        if (_songs[id].current_user_likes){
          songList.push(_songs[id]);
        }
      });
      return songList;
    },
    userUploaded: function(userId){
      var songList = [];
      Object.keys(_songs).forEach(function(id){
        if (_songs[id].user_id === parseInt(userId))
        songList.push(_songs[id]);
      });
      return songList;
    },
    all: function(){
      return Object.keys(_songs).map(function(id) { return _songs[id]; });
    },
    window: function(){
      return _songs[_windowSongId];
    },
    current: function(){
      return _songs[_currentSong];
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
      return _songs[_waveSurfSong];
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
          result = changeWindowSongId(payload.songId);
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
          case SongConstants.ADD_SONGS_TO_STORE:
            result = addSongsToStore(payload.songs);
            SongStore.emit(LIST_CHANGE);
            break;
          case SongConstants.SEARCHING_SONGS:
            result = updateSearch(payload.songIds);
            SongStore.emit(LIST_CHANGE);
            break;
          case SongConstants.NEXT_SONG_PLAY:
            result = randomSongPlay();
            SongStore.emit(LIST_CHANGE);
            break;
      }
    })
  });
})(this);
