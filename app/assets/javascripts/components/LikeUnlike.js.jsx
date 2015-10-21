var LikeUnlike = React.createClass({
  getInitialState: function(){
    return {song: SongStore.find(this.props.song.id)};
  },
  componentDidMount: function(){
    SongStore.addSongListChangeListener(this._onChange);
  },
  componentWillUnmount: function(){
    SongStore.removeSongListChangeListener(this._onChange);
  },
  _onChange: function(){
    this.setState({song: SongStore.find(this.props.song.id)});
  },
  componentWillReceiveProps: function(newprops){
    this.setState({liked: newprops.song.current_user_likes});
  },
  _likeSong: function(){
    if(window.CURRENT_USER_ID){
      ApiUtil.updateSongLike(this.props.song, 1);
    } else {
      alert("In order to like songs please log in.");
    }
  },

  _unlikeSong: function(){
    if(window.CURRENT_USER_ID){
      ApiUtil.updateSongLike(this.props.song, -1);
    }
  },

  _determineButton: function(){
    if (this.state.song.current_user_likes){
      return <button className= "Botton" onClick={this._unlikeSong}>Unlike</button>;
    } else {
      return <button className= "Batton" onClick={this._likeSong}>Like</button>;
    }
  },

  render: function(){
    if (this.state.song){
      return(
          <div className="likeUnlike">
            <p>Likes: {this.props.song.likeCount}</p>
            {this._determineButton()}
          </div>
          );
    } else {
      return <div/>;
    }
  }
});
