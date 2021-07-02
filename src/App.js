import React from 'react';
import HomeScreen from './screens/HomeScreen';
import ContributeScreen from './screens/ContributeScreen';
import SignScreen from './screens/SignScreen';
import TestScreen from './screens/TestScreen';
import FacebookPayScreen from './screens/FacebookPayScreen';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './bootstrap.min.css';
import './App.css';

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path='/pay' component={FacebookPayScreen} />
          <Route exact path='/test'>
            <TestScreen />
          </Route>
          <Route exact path='/contribute'>
            <ContributeScreen />
          </Route>
          <Route exact path='/sign'>
            <SignScreen />
          </Route>
          <Route exact path='/'>
            <HomeScreen />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
