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

  var LogOutOrIn;
  var SignInOrOut;
  var status;
  var logOutButtons = (
    <li><a onClick={logOut}>Log Out</a></li>
  );
  var SignInOrUpButtons = (
    <div>
      <li><a onClick={signUp}>Sign Up</a></li>
      <li><a onClick={signIn}> Log In</a></li>
    </div>
  );

  root.NavBar = React.createClass({
    mixins: [ReactRouter.History],
    getInitialState: function(){
      return({ LogOutOrIn: status})
    },
    determineLogin: function () {
      if(window.CURRENT_USER_ID){
        status = logOutButtons
      } else {
        status = SignInOrUpButtons
      }
    },

    componentDidMount: function(){
      this.determineLogin();
      this.setState({ logOutOrIn: status})
    },
    userShow: function(){
      this.history.pushState(null,"users/" + window.CURRENT_USER_ID);
    },
    goHome: function(){
      this.history.pushState(null,"/");
    },
    render: function(){
      return(
        <nav className="NavBar group">
          <div className="NavBarLeft">
            <p onClick={this.goHome}>AwWDiIo</p>
            <p onClick={this.userShow}>
            {window.CURRENT_USERNAME}
            </p>
          </div>
          <div className="NavBarRight">
            <ul className="NavBarRight">
              <li ><a>Upload</a></li>
              {this.state.logOutOrIn}
            </ul>
          </div>
        </nav>
      );
    }
  });
}(this));
