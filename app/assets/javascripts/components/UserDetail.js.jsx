var UserDetail = React.createClass({
  getInitialState: function(){
    return {current: {}, followed: false};
  },
  componentDidMount: function(){
    UserStore.addChangeListener(this._onChange);
    ApiUtil.fetchUsers();
  },
  componentWillReceiveProps: function(newProps) {
    this.setState({current: UserStore.find(newProps.params.userId),
                   followed: this._isFollowed()
                 });
    debugger;
  },
  _isFollowed:function(){
    var followed = false;
    if(window.CURRENT_USER_ID){
      if(this.state.current.followers){
        this.state.current.followers.forEach(function(follower){
          if(follower.id === window.CURRENT_USER_ID){
            followed = true;
          }
        });
      }
    }
    return followed;
  },
  _onChange: function(){
    this.setState({current: UserStore.find(this.props.params.userId),
                   followed: this._isFollowed()
                  });
  },
  followUser:function(){
    if(window.CURRENT_USER_ID){
      ApiUtil.followUser(this.props.params.userId);
    } else {
      alert("In order to follow users please log in.");
    }
  },
  unfollowUser:function(){
    if(window.CURRENT_USER_ID){
      ApiUtil.unfollowUser(this.props.params.userId);
    }
  },
  render: function(){
    // debugger;
      return(
        <div>
          <h1>{this.state.current.username}</h1>
          <button onClick={this.followUser}>Follow User</button>
          <button onClick={this.unfollowUser}>Unfollow User</button>

          <div>
            <h3>Uploaded Songs</h3>
            <ul>Uploaded songs go here
            </ul>
          </div>
        </div>
      );
  }
})
