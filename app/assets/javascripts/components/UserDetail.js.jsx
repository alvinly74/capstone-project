var UserDetail = React.createClass({
  getInitialState: function(){
    return {current: UserStore.find(this.props.params.userId), currentSongs: SongStore.userUploaded(this.props.params.userId)};
  },
  componentDidMount: function(){
    UserStore.addChangeListener(this._onChange);
    SongStore.addSongListChangeListener(this._onChange);
    ApiUtil.fetchUser(this.props.params.userId);
  },
  componentWillUnmount: function(){
    UserStore.removeChangeListener(this._onChange);
  },
  componentWillReceiveProps: function(newProps) {
    this.setState({current: UserStore.find(newProps.params.userId)});
  },
  _onChange: function(){
    this.setState({current: UserStore.find(this.props.params.userId),
                   currentSongs: SongStore.userUploaded(this.props.params.userId)});
  },

  _songs: function(){
    if (this.state.currentSongs){
      return this.state.currentSongs.map(function(song){
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
          <img className="image" src={this.state.current.img_url} alt="avatar" height="300" width="300"/>
          <h1>{this.state.current.username}</h1>
          <FollowUnfollow follow={this.state.current.current_user_follow} followCount={this._following()} user={this.state.current}/>
          <div>
            <h2>Uploaded Songs</h2>
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
