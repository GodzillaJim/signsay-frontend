import React from 'react';
import AppBar from './components/AppBar';
import HomeScreen from './screens/HomeScreen';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './bootstrap.min.css';
import './App.css';

const App = () => {
  return (
    <Router>
      <div>
        <Route path='/'>
          <HomeScreen />
        </Route>
      </div>
    </Router>
  );
};

export default App;
