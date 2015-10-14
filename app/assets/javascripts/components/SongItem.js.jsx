var SongItem = React.createClass({
  mixins: [ReactRouter.History],
  showUser: function() {
    this.history.pushState(null, '/users/' + this.props.song.user_id, {});
  },
  render: function(){
      return (
        <li className="SongItem">
          <a>{this.props.song.title}</a>
          <div>{this.props.song.description}</div>
          <p>submitted by: <a onClick={this.showUser}>{this.props.song.username}</a></p>
          <button>Like</button>
          <button onClick={this.showUser}>play</button>
          </li>
      )
  }
});
