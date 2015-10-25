var HomePage = React.createClass({
  render:function(){
    var name;
    if (window.CURRENT_USERNAME){
      name = window.CURRENT_USERNAME;
    } else {
      name = "Stranger";
    }
    return(
      <div className="HomePage under">
        <h1>Welcome, {name}</h1>
        <div>
          <h2>Give this artist a listen:</h2>
          <FlavorOfTheMonth/>
        </div>
      </div>
    );
  }
});
