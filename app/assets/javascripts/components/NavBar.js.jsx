(function(root) {
  'use strict';

  var signUp = function(){
    window.location = "/users/new";
    };
  var signIn = function(){
    window.location = "session/new";
  };
  var logOut = function(){
    ApiUtil.LogOut();
    window.location = "session/new";
  };
  var guestLog = function(){
    ApiUtil.guestLog();
  };

  var LogOutOrIn;
  var SignInOrOut;
  var status;
  var logOutButtons = (
    <ul className="NavBarRight">
      <li><a onClick={logOut}>Log Out</a></li>
    </ul>
  );
  var SignInOrUpButtons = (
    <ul className="NavBarRight">
      <li ><a onClick={guestLog}>Log In as Guest User</a></li>
      <li><a onClick={signUp}>Sign Up</a></li>
      <li><a onClick={signIn}> Log In</a></li>
    </ul>
  );

  root.NavBar = React.createClass({
    mixins: [ReactRouter.History],
    getInitialState: function(){
      return({ LogOutOrIn: status});
    },
    determineLogin: function () {
      if(window.CURRENT_USER_ID){
        status = logOutButtons;
      } else {
        status = SignInOrUpButtons;
      }
    },

    componentDidMount: function(){
      this.determineLogin();
      this.setState({ logOutOrIn: status});
    },
    userShow: function(){
      this.history.pushState(null,"users/" + window.CURRENT_USER_ID);
    },
    goHome: function(){
      // if (window.location.pathname === "/"){
        // ApiUtil.fetchRandomUser();
      // } else {
      this.history.pushState(null,"/");
      // }
    },
    goFollowing: function(){
      this.history.pushState(null,"/following");
    },
    _showUsername: function(){
      if (window.CURRENT_USERNAME){
        return <li><a onClick={this.userShow}>{window.CURRENT_USERNAME}</a></li>;
      }
    },
    render: function(){
      return(
        <nav className="NavBar group">
          <ul className="NavBarLeft Left">
            <li><a onClick={this.goHome}>Discover a Fellow User(currently half working. click elsewhere then click back)</a></li>
            {this._showUsername()}
            <li><a onClick={this.goFollowing}>Manage Following (CSS on this navbar are Work in progress, they ugly I know)</a></li>
        </ul>
            {this.state.logOutOrIn}
        </nav>
      );
    }
  });
}(this));
