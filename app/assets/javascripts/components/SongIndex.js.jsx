var SongIndex = React.createClass({
    mixins: [ReactRouter.History],
  getInitialState: function(){
    return {songs: SongStore.followedUserSongs()};
  },

  componentDidMount: function(){
    SongStore.addSongListChangeListener(this._onChange);
    UserStore.addChangeListener(this._onChange);
    ApiUtil.fetchfollowingSongs();
  },
  componentWillUnmount: function(){
    SongStore.removeSongListChangeListener(this._onChange);
    UserStore.removeChangeListener(this._onChange);
  },
  _onChange: function(){
      this.setState({songs: SongStore.followedUserSongs()});
  },
  goLogin: function(){
    window.location = "session/new";
  },
  _feed: function(){
    if(this.state.songs.length === 0) {
      return(
        <div>
      <h1>It looks like you haven't</h1>
      <h1>followed anyone</h1>
      <a onClick={this.goLogin}>Log in to start your follower feed!</a>
        </div>
      );
    } else {
      return(
        this.state.songs.map(function(song){
          return <SongItem song={song} key={song.id} submitted="true" />;
        })
      );
    }
  },
  render:function(){
    return(
      <div className="SongIndex">
        <p>Recently uploaded by those you're Following:</p>
        <ul>
          {this._feed()}
        </ul>
      </div>
    );
  }
});
