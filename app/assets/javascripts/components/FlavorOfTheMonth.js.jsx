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
    // debugger;
      if (Object.keys(this.state.songs).length < 2) {
        return <div/>;
      } else {
        return (
          <div className="FlavorSongs">
            <SongItem song={this.state.songs[0]} key ={this.state.songs[0].id}/>
            <SongItem song={this.state.songs[1]} key ={this.state.songs[1].id}/>
          </div>
        );
      }
  },
  render:function(){
    if (this.state.user){
      return(
        <div className="Flavor">
          <div className="FlavorUser">
            <img className="image" onClick={this._showUser} src={this.state.user.img_url} alt="avatar" height="300" width="300"/>
            <a onClick={this._showUser}>{this.state.user.username}</a>
          </div>
          {this._flavorSongs()}
          <a onClick={this._showUser}>More from {this.state.user.username}...</a>
        </div>
      );
    } else {
      return <div/>;
    }
  }
});
