var BotBar = React.createClass({
  getInitialState: function(){
    return {song: SongStore.current()};
  },

  componentDidMount: function(){
    SongStore.addCurrentSongChangeListener(this._onChange);
  },

  _onChange:function(){
    this.setState({song: SongStore.current()});
  },
  _play:function(){
    window.CURRENT_PLAYING = true;
    document.getElementById('musicPlayer').play();
  },
  _pause:function(){
    window.CURRENT_PLAYING = false;
    document.getElementById('musicPlayer').pause();
  },

  componentDidUpdate: function () {
    if(window.CURRENT_PLAYING === true){
    document.getElementById('musicPlayer').play();
    }
  },

  render:function(){
    return(
      <div className="BotBar">
        <div className="AudioPlayer">
          <audio id="musicPlayer" controls src={this.state.song.url}></audio>
          <button onClick={this._play}>play</button>
          <button onClick={this._pause}>pause</button>
        </div>
        <div className="BotBarRight">
          <div className="SocialMedia">
            FB and resume icons and junk go here
          </div>
          <div className="NowPlaying">
            Now Playing:<a>{this.state.song.title}</a>
          <br/>
            By:<a>{this.state.song.username}</a>
          </div>
        </div>
      </div>
    );
  }
});
