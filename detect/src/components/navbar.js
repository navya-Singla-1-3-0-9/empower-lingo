import React,{Component} from "react";
import './css/nav.css'
import { Route, Switch, Link, BrowserRouter } from 'react-router-dom';

class Navbar extends Component {
  componentDidUpdate() {
    let header = document.querySelector("h1");
    let text = header.textContent.toLowerCase();
    let color;
    switch(text) {
      case 'about':
        color = "#16A085";
        break;
      case 'projects':
        color = "#E74C3C";
        break;
      case 'contacts':
        color = "#2980B9";
        break;
      default:
        color = "#F1C40F";
        break;
    }
    // update the custom property for the root element and have it cascade on the header as well
    let root = document.querySelector(":root");
    root.style.setProperty("--color-home", color);
  }

 
  render() {
    return (
      <div className="App">

        <nav className="Navbar">
          <h2>ASL</h2>
          <ul>
            <li>
              <Link to="/about">about</Link>
            </li>
            <li>
              <Link to="/projects">projects</Link>
            </li>
            <li>
              <Link to="/contacts">contacts</Link>
            </li>
          </ul>
        </nav>

    

      </div>
    );
  }
	
}


export default Navbar;