import React, { Component } from 'react';
import Loader from './Loader/Loader.jsx';
import NavBar from './NavBar/NavBar.jsx';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Loader />
        <NavBar />
      </div>
    );
  }
}

export default App;
