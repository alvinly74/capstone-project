var UserDetail = React.createClass({
  getInitialState: function(){
    return {current: {}};
  },
  componentDidMount: function(){
    UserStore.addChangeListener(this._onChange);
    SongStore.addSongListChangeListener(this._onChange);
    ApiUtil.fetchUsers();
  },
  componentWillReceiveProps: function(newProps) {
    this.setState({current: UserStore.find(newProps.params.userId)});
  },
  _onChange: function(){
    this.setState({current: UserStore.find(this.props.params.userId)});
  },
  followUser:function(){
    if(window.CURRENT_USER_ID){
      ApiUtil.updateUserFollow(this.props.params.userId, 1);
    } else {
      alert("In order to follow users please log in.");
    }
  },
  unfollowUser:function(){
    if(window.CURRENT_USER_ID){
      ApiUtil.updateUserFollow(this.props.params.userId, -1);
    }
  },

  _songs: function(){
    if (this.state.current.uploaded_songs){
      return this.state.current.uploaded_songs.map(function(song){
        return <SongItem song={song} key={song.id}/>;
      });
    }
  },
  _following: function(){
    if(this.state.current.following_count){
      return this.state.current.following_count;
    } else {
      return 0;
    }
  },
  render: function(){
    if (this.state.current){
      return(
        <div className="userDetail under group">
          <img src={this.state.current.img_url} alt="avatar" height="200" width="200"/>
          <h1>{this.state.current.username}</h1>
          <FollowUnfollow follow={this.state.current.current_user_follow} followCount={this._following()} user={this.state.current}/>
          <div>
            <h3>Uploaded Songs</h3>
            <ul id="UploadedSongs">
            {this._songs()}
            </ul>
          </div>
        </div>
      );
    } else {
      return <div/>;
    }
  }
});
