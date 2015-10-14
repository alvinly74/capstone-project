var SongItem = React.createClass({
  mixins: [ReactRouter.History],
  showUser: function() {
    this.history.pushState(null, '/users/' + this.props.song.user_id, {});
  },
  likeSong: function(){
    if(window.CURRENT_USER_ID){
      ApiUtil.likeSong(this.props.song);
    } else {
      alert("In order to like songs please log in.");
    }
  },
  render: function(){
      return (
        <li className="SongItem">
          <a>{this.props.song.title}</a>
          <div>{this.props.song.description}</div>
          <p>submitted by: <a onClick={this.showUser}>{this.props.song.username}</a></p>
          <button onClick={this.likeSong}>Like</button>
          <button onClick={this.showUser}>play</button>
          </li>
      )
  }
});
