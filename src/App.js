import React from 'react';
import AppBar from './components/AppBar';
import HomeScreen from './screens/HomeScreen';
import ContributeScreen from './screens/ContributeScreen';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './bootstrap.min.css';
import './App.css';

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path='/contribute'>
            <ContributeScreen />
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
