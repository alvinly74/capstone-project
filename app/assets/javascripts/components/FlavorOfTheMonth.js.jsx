var FlavorOfTheMonth = React.createClass({
  mixins: [ReactRouter.History],
  getInitialState: function(){
    return {user: UserStore.flavorUser(), songs: {}};
  },

  componentDidMount: function(){
    UserStore.addChangeListener(this._onChange);
    SongStore.addSongListChangeListener(this._onChange);
    ApiUtil.fetchRandomUser();
  },
  componentWillUnmount: function(){
    UserStore.removeChangeListener(this._onChange);
    SongStore.removeSongListChangeListener(this._onChange);
    ApiUtil.removeRandomUser();
  },
  _onChange: function(){
    if (UserStore.flavorUser()){
      this.setState({user: UserStore.flavorUser(), songs:SongStore.userUploaded(UserStore.flavorUser().id)});
    }
  },
  _showUser: function(){
    this.history.pushState(null,"users/" + this.state.user.id);
  },
  _flavorSongs: function(){
    var idx = 0;
    var flavorSongs = [];
    while (idx < 4 && idx < this.state.songs.length){
      flavorSongs.push(this.state.songs[idx]);
      idx +=1;
    }
    if (flavorSongs.length === 0) {
      return <div/>;
    } else {
      return flavorSongs.map(function(song){
        return(
          <div className="SongContainer" key={song.id}>
            <SongItem song={song}/>;
          </div>
        );
      });
    }
  },
  render:function(){
    if (this.state.user){
      return(
        <div className="Flavor">
          <div className="FlavorUser">
            <img className="image hoverable" onClick={this._showUser} src={this.state.user.img_url} alt="avatar" height="300" width="300"/>
            <a id="FlavorName" onClick={this._showUser}>{this.state.user.username}</a>
          </div>
          <div className="FlavorSongs">
          {this._flavorSongs()}
          </div>
          <a onClick={this._showUser}>More from {this.state.user.username}...</a>
        </div>
      );
    } else {
      return <div/>;
    }
  }
});
