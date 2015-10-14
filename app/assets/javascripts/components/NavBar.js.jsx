(function(root) {
  'use strict';
  var signUp = function(){
    window.location = "/users/new";
    };

  var logOut = function(){
    ApiUtil.LogOut();
    window.location = "session/new";
  };

  var LogOutOrIn;
  var SignInOrOut;

  root.NavBar = React.createClass({
    determineLogin: function () {
      if(window.CURRENT_USER_ID){
        LogOutOrIn = logOut;
        SignInOrOut = "Log Out";
      } else {
        LogOutOrIn = signUp;
        SignInOrOut = "Sign Up";
      }
    },

    componentDidMount: function(){
    },

    render: function(){
      this.determineLogin();
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


                <li><a href="#">Upload</a></li>
                <li><a onClick={LogOutOrIn}>{SignInOrOut}</a></li>
              </ul>
            </div>

          </div>
          </nav>
      );
    }
  });
}(this));
