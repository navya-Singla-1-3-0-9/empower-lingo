import React,{Component} from "react";
import './css/nav.css'
import { Route, Switch, Link, BrowserRouter } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';


import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Dropdown } from 'react-bootstrap';

const actions = [
  { label: "Add", value: 1 },
  { label: "Edit", value: 2 },
  { label: "Delete", value: 3 }
];

class NavBar extends Component {
  constructor(){
    super();
    this.state={
      isOpen:false
    }
  }
// when the component is updated (which also occurs as the new routes are included)
// consider the text of the main header and alter the CSS custom property to style the background of the header in the navigation bar and the color of the header according to which route is included


/* render 
- a nav with a header and three anchor links elements
in the nav, include Links from the routing library, directing toward differents paths
- a header displaying the path of the application
through a switch, include routes which exclude one another 
render a simple element in the route to visualize the change in the URL path
*/
render() {
 const toggle=()=>{
   this.setState({isOpen:!this.state.isOpen});
 }
return (
<div className="App">

  <Navbar className="Navbar" expand="md">
  <NavbarToggler onClick={toggle} />
        <Collapse isOpen={this.state.isOpen} navbar >
    <h2>btf</h2>
    <ul>
      <div className="row">
      <div className="col-md-3">
      <li>
        <Link to="/spaces">Spaces</Link>
      </li>
      </div>
      <div className="col-md-3">
      <li>
        <Link to="/signs">Signs</Link>
      </li>
      </div>
      <div className="col-md-3">
      <li><Dropdown>
        <Dropdown.Toggle 
        variant="secondary btn-sm" 
        id="dropdown-basic">
            TRANSLATE
        </Dropdown.Toggle>

        <Dropdown.Menu >
            <Dropdown.Item href="/translate" >ASL TO ENGLISH</Dropdown.Item>
            <Dropdown.Item href="/translate1">ENGLISH TO ASL</Dropdown.Item>
            
        </Dropdown.Menu>
        </Dropdown>
        </li>
      </div>
      <div className="col-md-3">
      <li>
        <Link to="/jobs">Jobs</Link>
      </li>
      </div>
      <div className="col-md-3">
      <li>
        <Link to="/volunteer">Volunteer</Link>
      </li>
      </div>
      <div className="col-md-3">
      <li>
        <Link to="/newspace">News</Link>
      </li>
      </div>
      <div className="col-md-3">
        <li><Dropdown>
        <Dropdown.Toggle 
        variant="secondary btn-sm" 
        id="dropdown-basic">
            Practice
        </Dropdown.Toggle>

        <Dropdown.Menu >
            <Dropdown.Item href="/practice" >Practice ASL Letters</Dropdown.Item>
            <Dropdown.Item href="/talk">Talk</Dropdown.Item>
            <Dropdown.Item href="/quiz">Quiz</Dropdown.Item>
            <Dropdown.Item href="/signs">Signs</Dropdown.Item>
        </Dropdown.Menu>
        </Dropdown>
        </li>
</div>
      </div>
    </ul>
    </Collapse>
  </Navbar>

  

</div>
);
}

}

export default NavBar;