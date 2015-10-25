$(function () {

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
          <div>
            {this.props.children}
          </div>
          <BotBar/>
        </div>
      );
    }
  });
  var routes = (
    <Route path="/" component={App}>
      <IndexRoute component={HomePage}/>
      <Route path="songs/:songId" component={SongDetail}/>
      <Route path="users/:userId" component={UserDetail}/>
      <Route path="following" component={FollowIndex}/>
      <Route path="liking" component={LikeIndex}/>
      <Route path="Search" component={SearchIndex}/>
    </Route>
  );
    React.render(<Router>{routes}</Router>, root);

});
