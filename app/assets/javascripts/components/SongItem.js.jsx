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

  showUser: function(){
    this.history.pushState(null,"users/" + this.props.song.user_id);
  },

  showSong: function(){
    this.history.pushState(null,"songs/" + this.props.song.id);
  },

  playSong: function(){
    window.CURRENT_PLAYING=true;
      ApiUtil.updateCurrent(this.props.song);
  },

  _submitted: function(){
    if(this.props.submitted){
      return<p>submitted by:<a onClick={this.showUser}>{this.props.song.username}</a></p>;
    }
  },

  render: function(){
      return (
        <li className="SongItem">
          <img src={this.props.song.img_url} alt="songIcon" height="100" width="100"/>
          <a onClick={this.showSong} userId={this.props.song.user_id}>{this.props.song.title}</a>
          {this._submitted()}
          <br/>
          <p>{this.props.song.likeCount}</p>
          <button onClick={this.likeSong}>Like</button>
          <button onClick={this.unlikeSong}>Unlike</button>
          <button onClick={this.playSong}>play</button>
        </li>
      )
  }
});
