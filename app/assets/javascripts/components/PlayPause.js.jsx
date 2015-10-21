var PlayPause = React.createClass({
  getInitialState: function(){
    return{ waveSurfer: SongStore.waveSurfer(),
            currentSong: SongStore.current(),
            currentPlaying: SongStore.playing()};
  },
  componentDidMount: function(){
    SongStore.addCurrentSongChangeListener(this._onChange);
  },
  componentWillUnmount: function(){
    SongStore.removeCurrentSongChangeListener(this._onChange);
  },
  _onChange: function(){
    this.setState({waveSurfer:SongStore.waveSurfer(),
                   currentSong: SongStore.current(),
                   currentPlaying: SongStore.playing()});
  },
  _play:function(){
    ApiUtil.updatePlayingStatus(true);
    ApiUtil.updateCurrentSong(this.props.song);
  },
  _pause:function(){
    ApiUtil.updatePlayingStatus(false);
    this.state.waveSurfer.pause();
  },

  _determineButton: function(){
    if (this.state.currentSong
      && (this.state.currentSong.id === this.props.song.id)
      && this.state.currentPlaying === true
    ){
      return <button className='Botton' onClick={this._pause}>pause</button>;
    }
      return <button className='Batton' onClick={this._play}>Play</button>;
    },

  render: function(){
    if (this.state){
    return this._determineButton();
    }
      return <div/>;
  }
});
