var LikeIndex = React.createClass({
  getInitialState: function(){
    return { songs: SongStore.likedSongs()};
  },

  componentDidMount: function(){
    SongStore.addSongListChangeListener(this._onChange);
    ApiUtil.fetchLikedSongs();
  },

  _onChange: function(){
    this.setState({songs: SongStore.likedSongs()});
    // SongStore.removeSongListChangeListener(this._onChange);
  },
  render:function(){
    if (this.state.songs) {
      return(
        <div className="LikeIndex under">
          <h1>Songs You've liked:</h1>
          <ul>
            {this.state.songs.map(function(song){
              return (
                <div className='SongContainer'>
                <SongItem song={song} key={song.id} submitted="true"/>
                </div>
              );
            })}
          </ul>
        </div>
      );
    } else {
      return <div/>;
    }
  }
});
