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

  _title: function(){
    var title = this.props.song.title;
    if (title.length > 17){
      return <a className="SongItemTitle"onClick={this.showSong}userId={this.props.song.user_id}>{title.slice(0,17) + "..."}</a>;
    } else {
      return <a className="SongItemTitle"onClick={this.showSong}userId={this.props.song.user_id}>{title}</a>;
    }
  },

  render: function(){
      return (
        <li className="SongItem group">
          <img className="image hoverable" onClick={this.showSong} src={this.props.song.img_url} alt="songIcon" height="100" width="100"/>
          {this._title()}
          {this._submitted()}
          <LikeUnlike song={this.props.song}/>
          <PlayPause song={this.props.song}/>
        </li>
      );
  }
});
