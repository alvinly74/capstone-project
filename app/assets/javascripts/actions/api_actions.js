ApiActions = {
  receiveAllSongs: function(songs){
    AppDispatcher.dispatch({
      actionType: SongConstants.ALL_SONGS_RECEIVED,
      songs: songs
    });
  }
};
