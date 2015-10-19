ApiUtil = {
  fetchAllSongs: function(){
    $.ajax({
      url:"/api/songs",
      method:"get",
      success: function(songs){
        ApiActions.receiveAllSongs(songs);
      }
    });
  },
  changeWindowSong: function(songId){
    $.ajax({
      url: "api/songs/"+ songId,
      method: 'get',
      data:{id:songId},
      success: function(song){
        ApiActions.changeWindowSong(song);
      }
    });
  },
  fetchFollowedSongs:function(userID){
    $.ajax({
      url:"api/songs",
      method:"get",
      success:function(songs){
        ApiActions.receiveFollowedSongs(songs);
      }
    });
  },
  LogOut: function(){
    $.ajax({
      url:"/session",
      method:'delete',
      success: function(){}
    });
  },
  updateSongLike:function(song, likeUnlike){
    if (likeUnlike ===1){
      $.ajax({
        url:"/api/songs/" + song.id + "/like",
        method:'post',
        success: function(response){
            ApiActions.updateSong(response);
          }
      });
    } else {
      $.ajax({
        url:"/api/songs/" + song.id + "/like",
        method:'delete',
        success: function(response){
            ApiActions.updateSong(response);
          }
      });
    }
  },
  updateUser: function(followToId, followUnfollow){
    if (followUnfollow === 1){
      $.ajax({
        url:"/api/users/" + followToId +"/follow",
        method:'post',
        success: function(response){
          ApiActions.updateUser(response);
          }
      });
    } else {
      $.ajax({
        url:"/api/users/" + followToId +"/follow",
        method:'delete',
        success: function(response){
          ApiActions.updateUser(response);
        }
      });
    }
  },
  fetchRandomUser: function(){
    $.ajax({
      url:"/api/users/rand",
      method:"get",
      success: function(response){
        ApiActions.addRandomUser(response);
      }
    });
  },
  fetchUser: function(userId){
    $.ajax({
      url:"/api/users/" + userId,
      method:"get",
      success: function(user){
        ApiActions.receiveUser(user);
      }
    });
  },
  updatePlayingStatus: function(status){
    ApiActions.updatePlayingStatus(status);
  },
  updateCurrentSong: function(song){
    ApiActions.updateCurrentSong(song);
  },


};
