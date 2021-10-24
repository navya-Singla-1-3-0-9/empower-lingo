import React from "react";
import '../components/css/login.css'
const Login=()=>{
    return(
      
            <div className="container fadeInDown">
	  <div id="formContent">
	
	    <h2 className="active"> Sign In </h2>
	    <h2 className="inactive underlineHover">Sign Up</h2>
	  
	    <form>
	      <input type="text" className="fadeIn second" placeholder="Username"/>
	      <input type="password" className="fadeIn third" placeholder="Password"/>
	      <input type="submit" className="fadeIn fourth" value="Log In"/>
	    </form>   
	  
	    <div id="formFooter">
	      <a className="underlineHover" href="#">Forgot Password?</a>
	    </div>
	  </div>
	</div>
 
    
    );

}
export default Login