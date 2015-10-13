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
  LogOut: function(){
    $.ajax({
      url:"/session",
      method:'delete',
      success: function(){

        // debugger;
      }
    });
  }
};
