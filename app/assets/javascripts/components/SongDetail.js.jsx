var SongDetail = React.createClass({
  mixins: [ReactRouter.History],
  getInitialState: function(){
    return {windowSong: SongStore.find(this.props.params.songId)};
  },
  componentDidMount: function(){
    SongStore.addSongListChangeListener(this._onChange);
    ApiUtil.fetchSong(this.props.params.songId);
  },
  componentWillUnmount: function(){
    SongStore.removeSongListChangeListener(this._onChange);

  },
  componentWillReceiveProps: function(newProps){
    if (!SongStore.find(newProps.params.songId)){
      ApiUtil.fetchSong(newProps.params.songId);
    }
    this.setState({windowSong: SongStore.find(newProps.params.songId)});
  },

  _onChange: function(){
    this.setState({windowSong: SongStore.find(this.props.params.songId)});
  },

  _showUser:function(){
    this.history.pushState(null,"users/" + this.state.windowSong.user_id);
  },
  _username: function(){
    if(this.state.windowSong.user_name){
      return(
        <div>
          <img className="image hoverable Left" onClick={this._showUser} src={this.state.windowSong.user_img} alt="songIcon" height="200" width="200"/>
          <h2>By: <a onClick={this._showUser}>{this.state.windowSong.user_name}</a></h2>;
        </div>
      );
    }
      return <div/>;
  },

  render:function(){
    if(this.state.windowSong){
      return(
        <div className="SongDetail under">
          <div>
            <img className="image" src={this.state.windowSong.img_url} alt="songIcon" height="400" width="400"/>
            <h1>{this.state.windowSong.title}</h1>
            {this._username()}
            <p>Description: {this.state.windowSong.description}</p>
            <LikeUnlike song={this.state.windowSong}/>
            <PlayPause song={this.state.windowSong}/>
          </div>
        </div>
      );
    } else {
      return <div/>;
    }
  }
});
