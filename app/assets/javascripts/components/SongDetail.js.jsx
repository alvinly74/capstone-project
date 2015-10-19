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
      ApiUtil.updateCurrentSong(this.state.windowSong);
  },

  _pause:function(){
    document.getElementById('wave').pause();
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
      return(
        <div className="under">
          <div className="SongTop">
            <img className="image" src={this.state.windowSong.img_url} alt="songIcon" height="250" width="250"/>
            <h1>{this.state.windowSong.title}</h1>
            <p>{this.state.windowSong.description}</p>
            {this._username()}
            <button onClick={this.playSong}>play</button>
            <button onClick={this._pause}>pause</button>
          </div>
        </div>
      );
  }
});
