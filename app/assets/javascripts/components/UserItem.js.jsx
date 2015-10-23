var UserItem = React.createClass({
  mixins: [ReactRouter.History],
  _showUser: function(){
    this.history.pushState(null,"users/" + this.props.user.id);
  },
  render :function() {
    return (
      <div className="UserItem">
        <img onClick={this._showUser} className="image hoverable Left" src={this.props.user.img_url} alt="avatar" height="100" width="100"/>
        <a>{this.props.user.username}</a>
        <FollowUnfollow user={this.props.user}/>
        <SongItem song={this.props.user.uploaded_songs[0]}/>
      </div>
    );
  }
});
