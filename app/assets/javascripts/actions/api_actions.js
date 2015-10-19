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
  updateSong: function(song){
    AppDispatcher.dispatch({
      actionType:SongConstants.SONG_UPDATE,
      song: song,
    });
  },
  likeSong: function(likeResponse){
    AppDispatcher.dispatch({
      actionType:SongConstants.SONG_LIKE_CHANGE,
      songId:likeResponse.song_id
    });
  },
  changeWindowSong: function(song){
    AppDispatcher.dispatch({
      actionType: SongConstants.WINDOW_SONG_CHANGE,
      song:song
    });
  },
  addRandomUser: function(user){
    AppDispatcher.dispatch({
      actionType: UserConstants.RANDOM_USER,
      user: user
    });
  },
  receiveUser: function(user){
    AppDispatcher.dispatch({
      actionType: UserConstants.USER_RECEIVED,
      user: user
    });
  },
  updatePlayingStatus: function(status){
    AppDispatcher.dispatch({
      actionType: SongConstants.SONG_STATUS_CHANGE,
      status:status
    });
  },
  updateCurrentSong: function(song){
    AppDispatcher.dispatch({
      actionType: SongConstants.CURRENT_SONG_CHANGE,
      song: song
    });
  },
  updateUser: function(user){
    AppDispatcher.dispatch({
      actionType: UserConstants.UPDATE_USER_FOLLOW,
      user: user
    });
  }
};
