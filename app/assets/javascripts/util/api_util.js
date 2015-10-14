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
  fetchFollowedSongs:function(userID){
    $.ajax({
      url:"api/Songs",
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
        if(response[0]=== "like Failed"){
          alert("You have already liked this song");
        } else{
          alert("like Successful!");
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
        if(response[0]=== "Follow Failed"){
          alert("You have already followed this user");
        } else{
          alert("Follow Successful!");
        }
      }
    });
  },
  unfollowUser: function(followToId){
    $.ajax({
      url:"/api/follows/" + followToId,
      method:'delete',
      data: {follow: {follower_id:followToId, followee_id:window.CURRENT_USER_ID}},
      success: function(response){
        if(response[0]=== "Unfollow Success"){
          alert("Unfollow Successful");
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
