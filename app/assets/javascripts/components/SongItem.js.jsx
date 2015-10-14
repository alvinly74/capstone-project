var SongItem = React.createClass({
  render:function(){
    // figure out how to add song's uploadeder.
      return (
        <li className="SongItem">
          <a>{this.props.song.title}</a>
          <div>{this.props.song.description}</div>
          </li>
      )
  }
});
