import React, { Component } from 'react';
import './App.css';
import AddTask from './components/AddTask/AddTask';
import TaskDisplay from './components/TaskDisplay/TaskDisplay';
import {Switch, Route} from 'react-router-dom';
import Home from './components/Home/Home';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/" component={Home}/>
        </Switch>
      </div>
    );
  }
}

export default App;
