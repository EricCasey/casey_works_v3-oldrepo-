import React, { Component } from 'react';
import Loader from './Loader/Loader.jsx';
import NavBar from './NavBar/NavBar.jsx';
import TopFold from './TopFold/TopFold.jsx';
import FoldTwo from './FoldTwo/FoldTwo.jsx'
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Loader />
        <NavBar />
        <TopFold />
        <FoldTwo />
      </div>
    );
  }
}

export default App;
