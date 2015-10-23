var SearchIndex = React.createClass({
  getInitialState:function(){
    return {songs:SongStore.searchResult()};
  },
  componentDidMount: function(){
    SongStore.addSongListChangeListener(this._onChange);

  },

  _onChange: function(){
    this.setState({songs:SongStore.searchResult()});
  },
  _songs: function(){
    if (this.state.songs[0]){
      return this.state.songs.map(function(song){
        return (
          <div className="SongContainer" key={song.id}>
            <SongItem song={song}/>;
          </div>
        );
      });
    } else {
      return <p>No results. Please try searching again.</p>;
    }
  },

  render: function(){
    return (
      <div className="under">
        <h1>Search Results:</h1>
        <ul>
          {this._songs()}
        </ul>
      </div>
    );

  }
});
