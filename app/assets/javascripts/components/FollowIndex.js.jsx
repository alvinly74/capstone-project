var FollowIndex = React.createClass({
  getInitialState: function(){
    return { users: UserStore.followedUsers()};
  },
  componentDidMount: function(){
    UserStore.addChangeListener(this._onChange);
    ApiUtil.fetchFollowingUsers();
  },
  _onChange: function(){
    this.setState({users: UserStore.followedUsers()});
    UserStore.removeChangeListener(this._onChange);
  },

  _userItem: function(){
    if (this.state.users.length === 0 ){
      return (
        <div>
          <h1>Looks like you need to get to following</h1>
        </div>
      );
    } else {
        return(
          this.state.users.map(function(user){
            return <UserItem user={user}/>;
          }));
      }
  },
  render: function(){
    return (
      <div className="under" >
        <h1>Folks You're Following:</h1>
        <ul>
          {this._userItem()}
        </ul>
        </div>
    );
  }

});
