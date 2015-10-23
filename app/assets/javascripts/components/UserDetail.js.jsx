var UserDetail = React.createClass({
  getInitialState: function(){
    return {current: UserStore.find(this.props.params.userId), currentSongs: SongStore.userUploaded(this.props.params.userId)};
  },
  componentDidMount: function(){
    UserStore.addChangeListener(this._onChange);
    ApiUtil.fetchUser(this.props.params.userId);
  },
  componentWillUnmount: function(){
    UserStore.removeChangeListener(this._onChange);
  },
  componentWillReceiveProps: function(newProps) {
      ApiUtil.fetchUser(newProps.params.userId);
    this.setState({current: UserStore.find(newProps.params.userId),
                   currentSongs: SongStore.userUploaded(newProps.params.userId)});
  },
  _onChange: function(){
    this.setState({current: UserStore.find(this.props.params.userId),
                   currentSongs: SongStore.userUploaded(this.props.params.userId)});
  },

  _songs: function(){
    if (this.state.currentSongs){
      return this.state.currentSongs.map(function(song){
        return (
          <div className="SongContainer" key={song.id}>
            <SongItem song={song}/>;
          </div>
        );
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
          <div className="userDetailLeft pull-left">
            <img className="image None" src={this.state.current.img_url} alt="avatar" height="400" width="400"/>
          </div>
          <div className="userDetailRight pull-left">
            <h1>{this.state.current.username}</h1>
            <FollowUnfollow user={this.state.current}/>
            <div>
              <h2>Uploaded Songs</h2>
              <ul>
              {this._songs()}
              </ul>
            </div>
          </div>
        </div>
      );
    } else {
      return <div/>;
    }
  }
});
