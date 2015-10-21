var SongItem = React.createClass({
  mixins: [ReactRouter.History],
  showUser: function(){
    this.history.pushState(null,"users/" + this.props.song.user_id);
  },

  showSong: function(){
    this.history.pushState(null,"songs/" + this.props.song.id);
  },

  _submitted: function(){
    if(this.props.submitted){
      return<p >By:<a onClick={this.showUser}>{this.props.song.user_name}</a></p>;
    }
  },

  render: function(){
      return (
        <li className="SongItem">
          <img className="image" onClick={this.showSong} src={this.props.song.img_url} alt="songIcon" height="100" width="100"/>
          <a onClick={this.showSong}userId={this.props.song.user_id}>{this.props.song.title}</a>
          {this._submitted()}
          <LikeUnlike song={this.props.song}/>
          <PlayPause song={this.props.song}/>
        </li>
      );
  }
});
