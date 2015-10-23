var SearchIndex = React.createClass({
  getInitialState:function(){
    return {songs:SongStore.searchResult()};
  },
  componentDidMount: function(){
    SongStore.addSongListChangeListener(this._onChange);

  },

  _onChange: function(){
    // debugger;
    this.setState({songs:SongStore.searchResult()});
  },
  _songs: function(){
    if (this.state.songs[0]){
      return this.state.songs.map(function(song){
        return (
          <div className="SongContainer">
            <SongItem song={song} key={song.id}/>;
          </div>
        );
      });
    }
  },

  render: function(){
    // debugger;
    return (
      <div className="under">
        <p>yehboi</p>
        <ul>
          {this._songs()}
        </ul>
      </div>
    );

  }
});
