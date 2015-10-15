  window.createRouter = function () {
  var root = document.getElementById('content');
  var RouteHandler = ReactRouter.RouteHandler;
  var Router = ReactRouter.Router;
  var Route = ReactRouter.Route;
  var IndexRoute = ReactRouter.IndexRoute;
  var App = React.createClass({
    render: function(){
      return (
        <div className="Wandow group">
          <NavBar/>
          <SongIndex/>
          {this.props.children}
          <BotBar/>
        </div>
      )
    }
  });
  var routes = (
    <Route path="/" component={App}>
      <IndexRoute component={HomePage}/>
      <Route path="songs/:songId" component={SongDetail}></Route>
      <Route path="users/:userId" component={UserDetail}></Route>
    </Route>
  );
    React.render(<Router>{routes}</Router>, root);
}
