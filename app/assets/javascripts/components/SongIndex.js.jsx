var SongIndex = React.createClass({
  getInitialState: function(){
    return {songs: SongStore.all()};
  },

  componentDidMount: function(){
    SongStore.addChangeListener(this._onChange);
    ApiUtil.fetchAllSongs();
  },
  _onChange: function(){
      this.setState({songs: SongStore.all()});
  },

  render:function(){
    // debugger;
    return(
      <div className="SongIndex">
        <ul>
          {this.state.songs.map(function(song){
            return <SongItem song={song} key={song.id} />;
        })}
        </ul>
      </div>
    )
  }
});
