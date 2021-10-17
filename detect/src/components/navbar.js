import React,{Component} from "react";
import './css/nav.css'
import { Route, Switch, Link, BrowserRouter } from 'react-router-dom';
import { MdArrowDropDown } from "react-icons/md";
import { GiHamburgerMenu} from "react-icons/gi";
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
      isOpen:false,
      showprac:false,
      showtran:false,
      showemp:false,
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
 const toggleprac=()=>{
  this.setState({showprac:!this.state.showprac});
}
const toggletran=()=>{
  this.setState({showtran:!this.state.showtran});
}

const toggleemp=()=>{
  this.setState({showemp:!this.state.showemp});
}
return (
<div className="App">

  <Navbar className="Navbar" expand="lg">
  <div className="toggler" onClick={toggle} ><GiHamburgerMenu size={50}/></div>
        <Collapse isOpen={this.state.isOpen} navbar >
    <h2>btf</h2>
    <ul>
      <div className="row">
      <div className="col-lg-2">
      <li>
        <Link to="/spaces">Spaces</Link>
      </li>
      </div>
      <div className="col-lg-2">
      <li>
        <Link to="/signs">Signs</Link>
      </li>
      </div>
      <div className="col-lg-2">
      <li>
       <Link to="#" onClick={toggleprac}>Practice<MdArrowDropDown/></Link>
        <div className={this.state.showprac==false?"hide dd-menu":"show dd-menu"}>
          <Link to="/practice">Practice</Link>
          <br/>
          <Link to="/quiz">Quiz</Link>
          <br/>
          <Link to="/talk">Talk with ASL</Link>
        </div>
      </li>
      </div>
      <div className="col-lg-2">
      <li>
       <Link to="#" onClick={toggletran}>Translate<MdArrowDropDown/></Link>
        <div className={this.state.showtran==false?"hide dd-menu":"show dd-menu"}>
          <Link to="/translate">English to ASL</Link>
          <br/>
          <Link to="/translate1">ASL to English</Link>
          <Link to="/transcribe">Trancribe an Audio</Link>
        </div>
      </li>
      </div>

      <div className="col-lg-2">
      <li>
       <Link to="#" onClick={toggleemp}>Empower<MdArrowDropDown/></Link>
        <div className={this.state.showemp==false?"hide dd-menu":"show dd-menu"}>
          <Link to="/Jobs">Jobs near me</Link>
          <br/>
          <Link to="/Blogs">BLOG</Link>
          <br/>
          <Link to="/volunteer">Volunteer</Link>
          <br/>
          <Link to="/getvolunteers">Connect with volunteers</Link>
        </div>
      </li>
      </div>
      
      <div className="col-lg-2">
        <li>
        <Link to="/profile">My Profile</Link>
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