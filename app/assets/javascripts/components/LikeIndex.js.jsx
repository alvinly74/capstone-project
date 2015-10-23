var LikeIndex = React.createClass({
  getInitialState: function(){
    return { songs: SongStore.likedSongs()};
  },

  componentDidMount: function(){
    SongStore.addSongListChangeListener(this._onChange);
    ApiUtil.fetchLikedSongs();
  },
  componentWillUnmount: function(){
    SongStore.removeSongListChangeListener(this._onChange);
  },
  _onChange: function(){
    this.setState({songs: SongStore.likedSongs()});
  },
  render:function(){
    if (this.state.songs) {
      return(
        <div className="LikeIndex under">
          <h1>Songs You've liked:</h1>
          <ul>
            {this.state.songs.map(function(song){
              return (
                <div className='SongContainer' key={song.id}>
                  <SongItem song={song} submitted="true"/>
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
