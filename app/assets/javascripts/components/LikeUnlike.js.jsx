var LikeUnlike = React.createClass({
  getInitialState: function(){
    return {liked: this.props.liked};
  },

  componentDidMount: function(){
    SongStore.addSongListChangeListener(this._onChange);
  },
  componentWillUnmount: function(){
    SongStore.removeSongListChangeListener(this._onChange);
  },
  componentWillReceiveProps: function(newprops){
    this.setState({liked: newprops.liked});
  },

  _onChange:function(){
    this.setState({liked: this.props.liked});
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

  _likeButton: function(){
    if (this.state.liked){
      return <button onClick={this._unlikeSong}>Unlike</button>;
    } else {
      return <button onClick={this._likeSong}>Like</button>;
    }
  },
  render: function(){
    return(
          <div className="likeUnlike">
            <p>{this.props.likeCount}</p>
            {this._likeButton()}
          </div>
          );
  }
});
