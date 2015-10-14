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
  receiveUser: function(users){
    AppDispatcher.dispatch({
      actionType:UserConstant.USER_RECEIVED,
      users: users
    });
  }
};
