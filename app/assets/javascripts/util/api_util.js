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
  likeSong: function(song){
    $.ajax({
      url:"/api/song_likes",
      method:'post',
      data:{like: {song_id:song.id, user_id:window.CURRENT_USER_ID}},
      success: function(response){
        if(response.success=== true){
          ApiActions.likeSong(response);
          console.log("success");
        } else{
          console.log("failures");
        }
      }
    });
  },
  unlikeSong: function(song){
    $.ajax({
      url:"/api/song_likes/" + song.id,
      method:'delete',
      data:{like: {song_id:song.id, user_id:window.CURRENT_USER_ID}},
      success: function(response){
        if(response[0]=== "Unlike Success"){
          alert("You now hate this song =P");
        }
      }
    });
  },
  followUser: function(followToId){
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
  },
  updateCurrent: function(song){
    ApiActions.receiveUpdateSong(song);
  },
  unfollowUser: function(followToId){
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
