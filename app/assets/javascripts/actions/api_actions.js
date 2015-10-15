ApiActions = {
  receiveAllSongs: function(songs){
    AppDispatcher.dispatch({
      actionType: SongConstants.ALL_SONGS_RECEIVED,
      songs: songs
    });
  },
  receiveFollowedSongs: function(songs){
    AppDispatcher.dispatch({
      actionType: SongConstants.FOLLOWED_SONGS_RECEIVED,
      songs: songs
    });
  },
  changeWindowSong: function(song){
    AppDispatcher.dispatch({
      actionType: SongConstants.WINDOW_SONG_CHANGE,
      song:song
    });
  },
  receiveUser: function(users){
    AppDispatcher.dispatch({
      actionType: UserConstant.USER_RECEIVED,
      users: users
    });
  },
  receiveUpdateSong:function(song){
    AppDispatcher.dispatch({
      actionType: SongConstants.CURRENT_SONG_CHANGE,
      song: song
    });
  }
};
