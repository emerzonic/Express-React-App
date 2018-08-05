import React from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";
import Home from "./components/pages/Home/Home";
import User from "./components/pages/Home/User";
import Search from "./components/pages/Search/Search";
import Saved from "./components/pages/Saved/Saved";


const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route exact path="/search" component={Search}/>
      <Route exact path="/saved" component={Saved}/>
      <Route exact path="/signin" component={User}/>
      <Route exact path="/signup" component={User}/>
      <Route exact path="/signout" component={User}/>
    </div>
  </Router>
);

export default App;
