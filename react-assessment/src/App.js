import React, { Component } from 'react';
import './App.css';
import AddTask from './components/AddTask/AddTask';
import TaskDisplay from './components/TaskDisplay/TaskDisplay';
import {Switch, Route} from 'react-router-dom';
import Home from './components/Home/Home';
import TaskDetails from './components/TaskDetails/TaskDetails';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/taskdetails/:id" component={TaskDetails} />
        </Switch>
      </div>
    );
  }
}

export default App;
