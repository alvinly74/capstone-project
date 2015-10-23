var FollowIndex = React.createClass({
  getInitialState: function(){
    return { users: UserStore.followedUsers()};
  },
  componentDidMount: function(){
    UserStore.addChangeListener(this._onChange);
    ApiUtil.fetchFollowingUsers();
  },
  componentWillUnmount: function(){
    UserStore.removeChangeListener(this._onChange);
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
            return <UserItem user={user} key={user.id}/>;
          }));
      }
  },
  render: function(){
    return (
      <div className="UserIndex under group" >
        <h1>Folks You're Following:</h1>
        <ul className="UserList">
          {this._userItem()}
        </ul>
        </div>
    );
  }

});
