import React from "react";
import '../components/css/login.css'
import { Redirect } from 'react-router-dom'


class Login extends React.Component{
	constructor(props) {
		super(props)
		this.state = {
		  space : '',
		  image: '',
          content:'',
		  redirect: false
		};
	  }

	  	
	  renderRedirect = () => {
		  console.log()
		if (this.state.redirect) {
		  return <Redirect to='/spaces' />
		}
	  }
	
	  handleInputChange = (event) => {
		const { value, name } = event.target;
		this.setState({
		  [name]: value
		});
	  }
	 
	


	render(){
		const onSubmit = (event) => {
			event.preventDefault();
			const { space,image,content } = this.state;
			const data= {space, image, content }
			console.log(JSON.stringify(data))
			this.setState({redirect:true})
		   fetch('http://localhost:3001/addspace', { 
			   method:'POST',
			   
			   headers:{'Accept': 'application/json',"Content-Type":"application/json"},
			   body:JSON.stringify(data),
			   credentials: 'include'
			   })   .then(response => response.json())
			   .then(json => {
			
				   console.log(json)
			   })
			   .catch(error => console.log('Addition failed : ' + error.message));
			  
		  }
    return(
      <div className="login">
		  {this.renderRedirect()}
            <div className="container fadeInDown">
	  <div id="formContent">
	
	    <h2 className="active"> Add Space</h2>
	
	  
	    <form onSubmit={onSubmit}>
	      <input type="text" className="fadeIn second" placeholder="Space Name" name="space"  onChange={this.handleInputChange}/>
          <input type="text" className="fadeIn second" placeholder="Space Image url" name="image"  onChange={this.handleInputChange}/>
	      <textarea className="fadeIn third" placeholder="Content" name="content"  onChange={this.handleInputChange}/>
	      <input type="submit" className="fadeIn fourth" value="Create Space"/>
	    </form>   
	  
	  
	  </div>
	</div>
	</div>
    
    );
	}
}
export default Login