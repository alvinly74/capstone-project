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
    return(
      <div className="SongIndex">
        <ul>
          {this.state.songs.map(function(song){
            return <SongItem song={song}/>;
        })}
        </ul>
      </div>
    )
  }
});
