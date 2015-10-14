var UserDetail = React.createClass({
  getInitialState: function(){
    return {current: UserStore.find(this.props.params.userId)};
  },

  componentDidMount: function(){
    UserStore.addChangeListener(this._onChange);
    ApiUtil.fetchUsers();
  },

  _onChange: function(){
    this.setState({current: UserStore.find(this.props.params.userId)});
  },

  followUser:function(){
    debugger;
      apiUtil.FollowUser(this.props.params.userId)
  },
  render: function(){
    // debugger;
    if(typeof this.state.current !== "undefined"){
      return(
        <div>
          <h1>{this.state.current.username}</h1>
          <button onClick={this.followUser}>Follow User</button>


          <div>
          <h3>Uploaded Songs</h3>
          <ul>
          </ul>
          </div>



        </div>
      );
    }else {
      return <div/>
    }
  }
})
