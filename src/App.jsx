import { Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Switch } from "react-router-dom";
import Card from "./Card";
import Cards from "./Cards";
import Home from "./Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/images" component={Cards} />
          <Route path="/images/:id" component={Card} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
