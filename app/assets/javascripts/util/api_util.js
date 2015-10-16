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
        url:"/api/song_likes",
        method:'post',
        data:{like: {song_id:song.id, user_id:window.CURRENT_USER_ID}},
        success: function(response){
          if(response.success=== true){
            ApiActions.updateSongLike(song, 1);
            console.log("Like success");
          } else{
            alert(response.message);
          }
        }
      });
    } else {
      $.ajax({
        url:"/api/song_likes/" + song.id,
        method:'delete',
        data:{like: {song_id:song.id, user_id:window.CURRENT_USER_ID}},
        success: function(response){
          if(response[0]=== "Unlike Success"){
            ApiActions.updateSongLike(song, -1);
          } else {
            alert("You weren't liking to begin with");
          }
        }
      });
    }
  },
  updateUserFollow: function(followToId, followUnfollow){
    if (followUnfollow === 1){
      $.ajax({
        url:"/api/follows",
        method:'post',
        data: {follow: {follower_id:followToId, followee_id:window.CURRENT_USER_ID}},
        success: function(response){
          if(response.success === true){
            ApiActions.updateUserFollow(followToId, 1);
            console.log("userFollowed");
          } else{
            alert(response.message);
          }
        }
      });
    } else {
      $.ajax({
        url:"/api/follows/" + followToId,
        method:'delete',
        data: {follow: {follower_id:followToId, followee_id:window.CURRENT_USER_ID}},
        success: function(response){
          if(response[0]=== "Unfollow Success"){
            ApiActions.updateUserFollow(followToId, -1);
          } else {
            alert("You weren't following to begin with");
          }
        }
      });
    }
  },
  updateCurrent: function(song){
    ApiActions.receiveUpdateSong(song);
  },
  fetchUsers: function(){
  $.ajax({
    url:"/api/users/",
    method:"get",
    success: function(users){
      ApiActions.receiveUser(users);
    }
  });
  }


};
