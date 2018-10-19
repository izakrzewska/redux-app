import React, { Component } from "react";
import Counter from "./Counter";
import TasksList from './TasksList';


class App extends Component {

render() {
  return (
    <React.Fragment >
      <Counter />
      <TasksList />
    </React.Fragment >
  )
}
}

export default App;
