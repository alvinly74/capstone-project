var BotBar = React.createClass({
  mixins: [ReactRouter.History],
  getInitialState: function(){
    return {waveSurfer: SongStore.waveSurfer(), waveSurfSong: SongStore.current()};
  },

  componentDidMount: function(){
    SongStore.addCurrentSongChangeListener(this._onChange);
    this.state.waveSurfer.init({
        container: document.querySelector('#wave'),
        waveColor: 'deeppink',
        progressColor: 'deepskyblue',
        cursorColor: "darkviolet",
        backend: 'MediaElement',
        cursorWidth: 3,
        barWidth: 3
    });
    this.state.waveSurfer.load("");
  },

  _onChange:function(){
    currentSong = SongStore.current();
    if ( currentSong !== this.state.waveSurfSong) {
      this.setState({ waveSurfSong: currentSong });
      this.state.waveSurfer.load(currentSong.url);
      this.state.waveSurfer.play();
    }
  },
  _play:function(){
    ApiUtil.updatePlayingStatus(true);
    this.state.waveSurfer.play();
  },
  _pause:function(){
    ApiUtil.updatePlayingStatus(false);
    this.state.waveSurfer.pause();
  },

  componentDidUpdate: function () {
    if(SongStore.playing() === true){
      this.state.waveSurfer.play();
    }
  },

  _showUser: function(){
    this.history.pushState(null,"users/" + this.state.waveSurfSong.user.id);
  },

  showSong: function(){
    this.history.pushState(null,"songs/" + this.state.waveSurfSong.id);
  },

  _setVolume: function(e){
    this.state.waveSurfer.setVolume(parseFloat(e.target.value)/100);
  },
  _nowPlaying: function(){
    if(this.state.waveSurfSong.user){
      return(
        <p className="NowPlaying">
          Now Playing: <a onClick={this.showSong}>{this.state.waveSurfSong.title}</a>
        <br/>
          By: <a onClick={this._showUser}>{this.state.waveSurfSong.user.username}</a>
      </p>
      );
      } else {
        return <div/>;
      }
    },
  render: function(){
    return(
      <div className="BotBar">
        <div className="AudioPlayer">
          <PlayPause song={this.state.waveSurfSong}/>
          <input id="volume" onChange={this._setVolume} type="range" name="volume" min="0" max="100" defaultValue="100"/>
          <div id="wave"/>
        </div>
        <div className="BotBarRight">
          <p className="SocialMedia">
            FB and resume icons and junk go here
          </p>
          {this._nowPlaying()}
        </div>
      </div>
    );
  }
});
