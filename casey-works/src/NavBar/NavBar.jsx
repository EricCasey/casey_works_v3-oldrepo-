import React, { Component } from 'react';
import './NavBar.scss';
import SVGlogo from './logo.svg';

class NavBar extends Component {
  render() {
    return (
      <div className="NavBar" id="NavBar">
        <nav>
          <div id="leftNav">
            <li><a href="#">Works</a></li>
            <li><a href="#">About</a></li>
          </div>
          <img id="navlogo" src={SVGlogo} alt="logo"/>
          <div id="rightNav">
            <li><a href="#">Tools</a></li>
            <li><a href="#">Connect</a></li>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;
