var FlavorOfTheMonth = React.createClass({
  getInitialState: function(){
    return {user: UserStore.find(Math.floor(Math.random() * UserStore.all().length + 1))};
  },

  componentDidMount: function(){
    UserStore.addChangeListener(this._onChange);
    if (UserStore.all().length === 0){
      ApiUtil.fetchUsers();
    }
  },

  _onChange: function(){
    this.setState({user: UserStore.find(Math.floor(Math.random() * UserStore.all().length + 1))});
  },
  render:function(){
    if (this.state.user){
      return(
        <div className="Flavor">
          <div className="FlavorUser">
            {this.state.user.username}
          </div>
          <div className="FlavorSongs">
            <div className="Flavor1">{this.state.user.uploaded_songs[0].title}</div>
            <div className="Flavor2">{this.state.user.uploaded_songs[1].title}</div>
          </div>
        </div>
      );
    } else {
      return <div/>;
    }
  }
});
