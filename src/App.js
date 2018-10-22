import React, { Component } from "react";
import TasksList from './TasksList';
import './App.css';

class App extends Component {

render() {
  return (
    <div className='App'>
      <TasksList />
    </div>
  )
}
}

export default App;
