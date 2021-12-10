import React from "react";
import {Route, Switch} from 'react-router-dom';
import Home from './pages/Home';
import {PPE1, PPE2, PPE3} from './pages/PPE';
import About from './pages/About';



const App = () => {
  return (
    <Switch> 
      <Route exact path="/" component={Home} />
      <Route exact path="/ppe1" component={PPE1} />
      <Route exact path="/ppe2" component={PPE2} />
      <Route exact path="/ppe3" component={PPE3} />
      <Route exact path="/about" component={About} />
      <Redirect to="/" />
    </Switch>
  );
};

export default App;
