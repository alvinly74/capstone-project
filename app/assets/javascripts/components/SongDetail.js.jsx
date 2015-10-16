var SongDetail = React.createClass({
  mixins: [ReactRouter.History],
  getInitialState: function(){
    return {windowSong: SongStore.window()};
  },
  componentDidMount: function(){
    SongStore.addWindowSongChangeListener(this._onChange);
    ApiUtil.changeWindowSong(this.props.params.songId);
  },
  componentWillReceiveProps: function(newprops){
    ApiUtil.changeWindowSong(newprops.params.songId);
  },

  _onChange: function(){
    this.setState({windowSong: SongStore.window()});
  },

  playSong: function(){
    window.CURRENT_PLAYING=true;
      ApiUtil.updateCurrent(this.state.windowSong);
  },

  _pause:function(){
    window.CURRENT_PLAYING = false;
    document.getElementById('musicPlayer').pause();
  },
  _username: function(){
    if(this.state.windowSong.user.username){
      return <h2>By {this.state.windowSong.user.username}</h2>
    }
  },

  render:function(){
      return(
        <div className="under">
          <div className="SongTop">
            <img src={this.state.windowSong.img_url} alt="songIcon" height="250" width="250"/>
            <h1>{this.state.windowSong.title}</h1>
            <p>{this.state.windowSong.description}</p>
            <button onClick={this.playSong}>play</button>
            <button onClick={this._pause}>pause</button>
          </div>
        </div>
      )
  }
});
