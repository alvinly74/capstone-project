var FollowUnfollow = React.createClass({
  getInitialState: function(){
    return {user: UserStore.find(this.props.user.id)};
  },
  componentDidMount: function(){
    UserStore.addChangeListener(this._onChange);
  },
  componentWillUnmount: function(){
    UserStore.removeChangeListener(this._onChange);
  },
  _onChange: function(){
    this.setState({user: UserStore.find(this.props.user.id)});
  },
  _followUser: function(){
    if(window.CURRENT_USER_ID){
      ApiUtil.updateUserFollow(this.props.user.id, 1);
    } else {
      alert("In order to follow users please log in.");
    }
  },

  _unfollowUser: function(){
    if(window.CURRENT_USER_ID){
      ApiUtil.updateUserFollow(this.props.user.id, -1);
    }
  },

  _determineButton: function(){
    if (this.state.user.id === window.CURRENT_USER_ID) {
      return;
    }

    if (this.state.user.current_user_follow){
      return <button className="Botton" onClick={this._unfollowUser}>Unfollow</button>;
    } else {
      return <button className="Batton" onClick={this._followUser}>Follow</button>;
    }
  },
  render: function(){
    return(
          <div className="followUnfollow">
            <h3>Following: {this.state.user.following_count}</h3>
            {this._determineButton()}
          </div>
          );
  }
});
