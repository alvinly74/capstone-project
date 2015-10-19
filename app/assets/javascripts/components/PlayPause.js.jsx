var PlayPause = React.createClass({
  getinitialState: function(){
    return{ waveSurfer: SongStore.waveSurfer(),
            currentSong: SongStore.current(),
            currentPlaying: SongStore.playing()};
  },
  componentDidMount: function(){
    SongStore.addCurrentSongChangeListener(this._onChange);
  },
  _play:function(){
    ApiUtil.updatePlayingStatus(true);
    ApiUtil.updateCurrentSong(this.props.song);
  },
  _pause:function(){
    ApiUtil.updatePlayingStatus(false);
    this.state.waveSurfer.pause();
  },
  _onChange: function(){
    this.setState({waveSurfer:SongStore.waveSurfer(),
                   currentSong: SongStore.current(),
                   currentPlaying: SongStore.playing()});
  },

  _determineButton: function(){
    if ((this.state.currentSong === this.props.song) && this.state.currentPlaying === true){
      return <button onClick={this._pause}>pause</button>;
    } else {
      return <button onClick={this._play}>Play</button>;
    }
  },
  render: function(){
    if (this.state){
    return this._determineButton();
    }
      return <div/>;
  }
});
