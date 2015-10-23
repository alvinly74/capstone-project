ApiActions = {
  receiveAllSongs: function(songs){
    AppDispatcher.dispatch({
      actionType: SongConstants.ALL_SONGS_RECEIVED,
      songs: songs
    });
  },
  addSongsToStore: function(songs){
    AppDispatcher.dispatch({
      actionType:SongConstants.ADD_SONGS_TO_STORE,
      songs:songs
    });
  },
  updateSong: function(song){
    AppDispatcher.dispatch({
      actionType:SongConstants.SONG_UPDATE,
      song: song,
    });
  },
  changeWindowSongId: function(songId){
    AppDispatcher.dispatch({
      actionType: SongConstants.WINDOW_SONG_CHANGE,
      songId:songId
    });
  },
  updateSearch: function(songIds){
    AppDispatcher.dispatch({
      actionType: SongConstants.SEARCHING_SONGS,
      songIds:songIds
    });
  },
  addRandomUser: function(user){
    AppDispatcher.dispatch({
      actionType: UserConstants.RANDOM_USER,
      user: user
    });
  },
  addUsersToStore: function(users){
    AppDispatcher.dispatch({
      actionType: UserConstants.USERS_RECEIVED,
      users: users
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
  updateUserFollow: function(user){
    AppDispatcher.dispatch({
      actionType: UserConstants.UPDATE_USER_FOLLOW,
      user: user
    });
  }
};
