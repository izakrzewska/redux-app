import React, { Component } from "react";
import ToDo from './containers/ToDo.jsx';
import './App.css';

class App extends Component {

render() {
  return (
    <div className='App'>
      <ToDo />
    </div>
  )
}
}

export default App;
