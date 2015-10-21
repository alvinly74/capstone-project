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
      this.history.pushState(null,"/");
    },
    goFollowing: function(){
      this.history.pushState(null,"/following")
    },
    render: function(){
      return(
        <nav className="NavBar group">
          <ul className="NavBarLeft">
            <li><a onClick={this.goHome}>AwWDI</a></li>
            <li><a onClick={this.userShow}>{window.CURRENT_USERNAME}</a></li>
            <li><a onClick={this.goFollowing}>Manage Following</a></li>
        </ul>
          <div>
              {this.state.logOutOrIn}
          </div>
        </nav>
      );
    }
  });
}(this));
