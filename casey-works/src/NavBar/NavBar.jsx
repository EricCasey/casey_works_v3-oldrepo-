import React, { Component } from 'react';
import './NavBar.scss';
import SVGlogo from './logo.svg';

class NavBar extends Component {
  render() {
    return (
      <div className="NavBar" id="NavBar">
        <nav>
          <div id="leftNav">
            <li><a href="#"><div className="navGlitch" data-text="Works">Works</div></a></li>
            <li><a href="#"><div className="navGlitch" data-text="Ideas">Ideas</div></a></li>
          </div>
          <a href="#">
            <img id="navlogo" src={SVGlogo} alt="logo"/>
          </a>
          <div id="rightNav">
            <li><a href="#"><div className="navGlitch" data-text="Tools">Tools</div></a></li>
            <li><a href="#"><div className="navGlitch" data-text="Connect">Connect</div></a></li>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;
