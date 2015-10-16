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
  updateSongLike: function(song,likeUnlike){
    AppDispatcher.dispatch({
      actionType:SongConstants.SONG_LIKE_CHANGE,
      songId: song.id,
      likeUnlike:likeUnlike
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
  receiveUser: function(users){
    AppDispatcher.dispatch({
      actionType: UserConstant.USER_RECEIVED,
      users: users
    });
  },
  receiveUpdateSong: function(song){
    AppDispatcher.dispatch({
      actionType: SongConstants.CURRENT_SONG_CHANGE,
      song: song
    });
  },
  updateUserFollow: function(followId, upOrDown){
    AppDispatcher.dispatch({
      actionType: UserConstant.UPDATE_USER_FOLLOW,
      userId: followId,
      upOrDown: upOrDown
    });
  }
};
