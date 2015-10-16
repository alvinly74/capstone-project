var UserDetail = React.createClass({
  getInitialState: function(){
    return {current: {}, followed: false};
  },
  componentDidMount: function(){
    UserStore.addChangeListener(this._onChange);
    ApiUtil.fetchUsers();
  },
  componentWillReceiveProps: function(newProps) {
    this.setState({current: UserStore.find(newProps.params.userId),
                   followed: this._isFollowed()
                 });
  },
  _isFollowed:function(){
    var followed = false;
    if(window.CURRENT_USER_ID){
      if(this.state.current.followers){
        this.state.current.followers.forEach(function(follower){
          if(follower.id === window.CURRENT_USER_ID){
            followed = true;
          }
        });
      }
    }
    return followed;
  },
  _onChange: function(){
    this.setState({current: UserStore.find(this.props.params.userId),
                   followed: this._isFollowed()
                  });
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

  determineFollowButton: function(){
    // placeholder. figure out the ternary shit
  },

  _songs: function(){
    if (this.state.current.uploaded_songs){
      return this.state.current.uploaded_songs.map(function(song){
        return <SongItem song={song} key={song.id}/>;
      })
    }
  },
  _following: function(){
    if(this.state.current.following_count){
      return this.state.current.following_count;
    }
  },
  render: function(){
    if (this.state.current){
      return(
        <div className="userDetail under group">
          <img src={this.state.current.img_url} alt="avatar" height="200" width="200"/>
          <h1>{this.state.current.username}</h1>
          <p>{this._following()}</p>
          <button onClick={this.followUser}>Follow User</button>
          <button onClick={this.unfollowUser}>Unfollow User</button>
          <div>
            <h3>Uploaded Songs</h3>
            <ul id="UploadedSongs">
            {this._songs()}
            </ul>
          </div>
        </div>
      );
    } else {
      return <div/>
    }
  }
})
