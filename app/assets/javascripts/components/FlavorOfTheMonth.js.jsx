var FlavorOfTheMonth = React.createClass({
  mixins: [ReactRouter.History],
  getInitialState: function(){
    return {user: UserStore.find(Math.floor(Math.random() * UserStore.all().length + 1))};
  },

  componentDidMount: function(){
    UserStore.addChangeListener(this._onChange);
    if (UserStore.all().length === 0){
      ApiUtil.fetchUsers();
    }
  },
  // componentWillUnmount: function(){
  //   UserStore.removeChangeListener(this.onChange);
  // },
  _showUser: function(){
    this.history.pushState(null,"users/" + this.state.user.id);
  },
  _onChange: function(){
    this.setState({user: UserStore.find(Math.floor(Math.random() * UserStore.all().length + 1))});
  },
  render:function(){
    if (this.state.user){
      return(
        <div className="Flavor">
          <div className="FlavorUser">
            <img className="image" onClick={this._showUser} src={this.state.user.img_url} alt="avatar" height="300" width="300"/>
            <a onClick={this._showUser}>{this.state.user.username}</a>
          </div>
          <div className="FlavorSongs">
            <SongItem song={this.state.user.uploaded_songs[0]} key ={this.state.user.uploaded_songs[0].id}/>
            <SongItem song={this.state.user.uploaded_songs[1]} key ={this.state.user.uploaded_songs[1].id}/>
          </div>
        </div>
      );
    } else {
      return <div/>;
    }
  }
});
