var SongDetail = React.createClass({
  mixins: [ReactRouter.History],
  getInitialState: function(){
    return {windowSong: SongStore.window()};
  },
  componentDidMount: function(){
    SongStore.addWindowSongChangeListener(this._onChange);
    ApiUtil.changeWindowSong(this.props.params.songId);
  },
  componentWillUnmount: function(){
    SongStore.removeWindowSongChangeListener(this._onChange);
  },
  componentWillReceiveProps: function(newprops){
    ApiUtil.changeWindowSong(newprops.params.songId);
  },

  _onChange: function(){
    this.setState({windowSong: SongStore.window()});
  },

  _showUser:function(){
    this.history.pushState(null,"users/" + this.state.windowSong.user_id);
  },
  _username: function(){
    if(this.state.windowSong.user){
      return <h2>By: <a onClick={this._showUser}>{this.state.windowSong.user.username}</a></h2>;
    }
      return <div/>;
  },

  render:function(){
    if(this.state.windowSong){
      return(
        <div className="under">
          <div className="SongTop">
            <img className="image" src={this.state.windowSong.img_url} alt="songIcon" height="250" width="250"/>
            <h1>{this.state.windowSong.title}</h1>
            <p>{this.state.windowSong.description}</p>
            {this._username()}
            <LikeUnlike likeCount={this.state.windowSong.likeCount}
              song={this.state.windowSong}
              liked={this.state.windowSong.current_user_likes}/>
            <PlayPause song={this.state.windowSong}/>
          </div>
        </div>
      );
    } else {
      return <div/>;
    }
  }
});
