var SongIndex = React.createClass({
  getInitialState: function(){
    return {songs: SongStore.all()};
  },

  componentDidMount: function(){
    SongStore.addSongListChangeListener(this._onChange);
    ApiUtil.fetchAllSongs();
  },
  _onChange: function(){
      this.setState({songs: SongStore.all()});
  },

  render:function(){
    // debugger;
    return(
      <div className="SongIndex">
        <h1>Songs by Folks you Followed</h1>
        <ul>
          {this.state.songs.map(function(song){
            return <SongItem song={song} key={song.id} submitted="true" />;
        })}
        </ul>
      </div>
    )
  }
});
