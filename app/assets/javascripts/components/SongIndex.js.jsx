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
    return(
      <div className="SongIndex under">
        <p>Songs by Folks you Followed</p>
        <ul>
          {this.state.songs.map(function(song){
            return <SongItem song={song} key={song.id} submitted="true" />;
        })}
        </ul>
      </div>
    );
  }
});
