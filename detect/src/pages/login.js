import React from "react";
import '../components/css/login.css'
import { Redirect } from 'react-router-dom'
import NavBar from "../components/navbar";

class Login extends React.Component{
	constructor(props) {
		super(props)
		this.state = {
		  username : '',
		  password: '',
		  redirect: false
		};
	  }
	  handleInputChange = (event) => {
		const { value, name } = event.target;
		this.setState({
		  [name]: value
		});
	  }
	
		
	  renderRedirect = () => {
		if (this.state.redirect) {
		  return <Redirect to='/spaces' />
		}
	  }
	


	render(){

	
		const onSubmit = (event) => {
			event.preventDefault();
			const { username, password } = this.state;
			const data= {username, password}
			console.log(JSON.stringify(data))
		   fetch('http://localhost:3001/login', { 
			   method:'POST',
			   
			   headers:{'Accept': 'application/json',"Content-Type":"application/json"},
			   body:JSON.stringify(data),
			   credentials: 'include'
			   })   .then(response => response.json())
			   .then(json => {
				this.setState({redirect:true})
				console.log(json);
			
			})
			   .catch(error => console.log('Authorization failed : ' + error.message));
			  
		  }
		
		
    return(
      <div className="login">
		  <NavBar/>
		  {this.renderRedirect()}
            <div className="container fadeInDown">
	  <div id="formContent">
	
	    <h2 className="active"> Sign In </h2>
	    <h2 className="inactive underlineHover">Sign Up</h2>
	  
	    <form onSubmit={onSubmit}>
	      <input type="text" className="fadeIn second" placeholder="Username" name="username"  onChange={this.handleInputChange}/>
	      <input type="password" className="fadeIn third" placeholder="Password" name="password"  onChange={this.handleInputChange}/>
	      <input type="submit" className="fadeIn fourth" value="Log In"/>
	    </form>   
	  
	    <div id="formFooter">
	      <a className="underlineHover" href="#">Forgot Password?</a>
	    </div>
	  </div>
	</div>
	</div>
    
    );
	}
}
export default Login