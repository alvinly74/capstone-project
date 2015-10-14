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

    render: function(){
      return(
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed"
                      data-toggle="collapse"
                      data-target="#collapse-menu"
                      aria-expanded="false">
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
            </div>

            <div className="collapse navbar-collapse" id="collapse-menu">
              <ul className="nav navbar-nav pull-right">


                <li ><a>Upload</a></li>
                {this.state.logOutOrIn}
              </ul>
            </div>

          </div>
          </nav>
      );
    }
  });
}(this));
