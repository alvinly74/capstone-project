var SearchBar = React.createClass({
  mixins: [ReactRouter.History],
  getInitialState:function(){
    return {songs: SongStore.all(), input: ""};
  },
  compontentDidMount:function(){
    SongStore.addSongListChangeListener(this._onChange);
    ApiUtil.fetchAllSongs();
  },
  _onChange:function(){
    this.setState({songs: SongStore.all()});
  },

  _handleTyping:function(e){
    this.setState({input: e.target.value});
  },
  _goSearch:function(e){
    e.preventDefault();
    this.history.pushState(null,"search");
    ApiUtil.searchSongs(this.state.input);
    this.setState({input: ""});
  },
  render: function(){
    return (
      <div className="SearchBar">

        <form onSubmit={this._goSearch}>
          <input onChange={this._handleTyping}
                 onSubmit={this._goSearch}
                 value={this.state.input}
                 placeholder="Search" type="search"/>


               <input className="searchbutton" type="submit" name="name" value="search"/>
        </form>
      </div>
    );
  }
});
