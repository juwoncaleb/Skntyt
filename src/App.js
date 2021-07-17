import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { useMediaQuery } from 'react-responsive'

import Home from "./pages/Home/home";
import Workout from './pages/workout/workout';
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path="/workout" component={Workout}/>
      </Switch>

    </Router>
  );
}

export default App;
