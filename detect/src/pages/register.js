import React from "react";
import '../components/css/login.css'


class Login extends React.Component{
	constructor(props) {
		super(props)
		this.state = {
		  username : '',
		  password: '',
		  email:'',
		};
	  }
	  handleInputChange = (event) => {
		const { value, name } = event.target;
		this.setState({
		  [name]: value
		});
	  }
	  onSubmit = (event) => {
		event.preventDefault();
		const { username, email,password } = this.state;
		const data= {username, email,password}
		console.log(JSON.stringify(data))
       fetch('http://localhost:3001/register', { 
		   method:'POST',
		   
		   headers:{'Accept': 'application/json',"Content-Type":"application/json"},
		   body:JSON.stringify(data)
		   }).then(response => response.json())
		   .then(json => console.log(json))
		   .catch(error => console.log('Authorization failed : ' + error.message));
          
	  }
	


	render(){
    return(
      <div className="login">
            <div className="container fadeInDown">
	  <div id="formContent">
	
	    <h2 className="active"> Sign In </h2>
	    <h2 className="inactive underlineHover">Sign Up</h2>
	  
	    <form onSubmit={this.onSubmit}>
	      <input type="text" className="fadeIn second" placeholder="Username" name="username"  onChange={this.handleInputChange}/>
		  <input type="text" className="fadeIn second" placeholder="Email" name="email"  onChange={this.handleInputChange}/>
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