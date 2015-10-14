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
      url:"apiSongs",
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
  followUser: function(followToId){
    $ajax({

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
