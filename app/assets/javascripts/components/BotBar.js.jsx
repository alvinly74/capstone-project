var BotBar = React.createClass({
  getInitialState: function(){
    var wavesurfer = Object.create(WaveSurfer);
    return {wavesurfer: wavesurfer, waveSurfSong: SongStore.current(), song: SongStore.current()};
  },

  componentDidMount: function(){
    SongStore.addCurrentSongChangeListener(this._onChange);
    this.state.wavesurfer.init({
        container: document.querySelector('#wave'),
        waveColor: 'violet',
        progressColor: 'purple',
        backend: 'MediaElement'
    });
  },

  _onChange:function(){
    this.setState({song: SongStore.current()});
    this.state.wavesurfer.play();
  },
  _play:function(){
    window.CURRENT_PLAYING = true;
    this.state.wavesurfer.play();
  },
  _pause:function(){
    window.CURRENT_PLAYING = false;
    this.state.wavesurfer.pause();
  },

  componentDidUpdate: function () {

    if (this.state.waveSurfSong !== this.state.song) {
      this.state.waveSurfSong = this.state.song;
      this.state.wavesurfer.load(this.state.song.url);
    }
    if(window.CURRENT_PLAYING === true){
      this.state.wavesurfer.play();
    }
  },
  _setVolume: function(e){
    this.state.wavesurfer.setVolume(parseFloat(e.target.value)/100);
  },
  _nowPlaying: function(){
    if(this.state.song.user){
      return(
        <div className="NowPlaying">
          Now Playing:<a>{this.state.song.title}</a>
        <br/>
          By:<a>{this.state.song.user.username}</a>
        </div>
      );
      } else {
        return <div/>;
      }
    },
  render: function(){
    return(
      <div className="BotBar">
        <div className="AudioPlayer">
          <div id="wave"/>
          <button onClick={this._play}>play</button>
          <button onClick={this._pause}>pause</button>
          <input onChange={this._setVolume} type="range" name="volume" min="0" max="100"/>
        </div>
        <div className="BotBarRight">
          <div className="SocialMedia">
            FB and resume icons and junk go here
          </div>
          {this._nowPlaying()}
        </div>
      </div>
    );
  }
});
