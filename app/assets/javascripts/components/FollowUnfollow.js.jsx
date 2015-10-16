var FollowUnfollow = React.createClass({
  getInitialState: function(){
    return {followed: this.props.follow};
  },

  _followUser: function(){
    if(window.CURRENT_USER_ID){
      ApiUtil.updateUserFollow(this.props.user.id, 1);
      this.setState({followed: true});
    } else {
      alert("In order to follow users please log in.");
    }
  },

  _unfollowUser: function(){
    if(window.CURRENT_USER_ID){
      ApiUtil.updateUserFollow(this.props.user.id, -1);
      this.setState({followed: false});
    }
  },

  _followButton: function(){
    if (this.state.followed){
      return <button onClick={this._unfollowUser}>Unfollow</button>
    } else {
      return <button onClick={this._followUser}>Follow</button>
    }
  },
  render: function(){
    return(
          <div className="followUnfollow">
            {this.props.followCount}
            {this._followButton()}
          </div>
          );
  }
});
