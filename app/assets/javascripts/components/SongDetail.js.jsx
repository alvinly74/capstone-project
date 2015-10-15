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

  render:function(){
    debugger;
      return(
        <div>

          <br/>text
          <br/>text
          <br/>text
          <br/>text
          <br/>text
          <div>
            <h1>{this.state.windowSong.title}</h1>
            <p>{this.state.windowSong.description}</p>
            <button onClick={this.playSong}>play</button>
            <button onClick={this._pause}>pause</button>
          </div>
        </div>
      )
  }
});
