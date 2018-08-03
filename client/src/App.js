import React from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";
import Home from "./components/pages/Home/Home";
import Search from "./components/pages/Search/Search";
import Saved from "./components/pages/Saved/Saved";

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route exact path="/search" component={Search} />
      <Route exact path="/saved" component={Saved} />
    </div>
  </Router>
);

export default App;
