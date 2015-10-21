var HomePage = React.createClass({
  render:function(){
      return(
        <div className="HomePage under">
          <h1>Welcome, {window.CURRENT_USERNAME}</h1>
          <div>
            <h2>Give this person a listen:</h2>
            <FlavorOfTheMonth/>
          </div>
        </div>
      );
  }
});
