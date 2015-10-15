var SongItem = React.createClass({
  mixins: [ReactRouter.History],
  likeSong: function(){
    if(window.CURRENT_USER_ID){
      ApiUtil.likeSong(this.props.song);
    } else {
      alert("In order to like songs please log in.");
    }
  },
  unlikeSong: function(){
    if(window.CURRENT_USER_ID){
      ApiUtil.unlikeSong(this.props.song);
    }
  },
  render: function(){
      return (
        <li className="SongItem">
          <a>{this.props.song.title}</a>
          <div>{this.props.song.description}</div>
          <p>submitted by: <a onClick={this.showUser}>{this.props.song.username}</a></p>
          <button onClick={this.likeSong}>Like</button>
          <button onClick={this.unlikeSong}>Unlike</button>
          <button>play</button>
        </li>
      )
  }
});
