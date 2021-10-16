import React from "react";
import '../components/css/login.css'


class Volunteer extends React.Component{
	constructor(props) {
		super(props)
		this.state = {
		  full_name : '',
		  email: '',
		  reason:'',
		  image:'',
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
		const { full_name,email,reason,image } = this.state;
		const data= {full_name,email,reason,image}
		console.log(JSON.stringify(data))
        fetch('http://localhost:3001/volunteer', { 
            method:'POST',
            headers:{'Accept': 'application/json',"Content-Type":"application/json"},
            body:JSON.stringify(data),
            credentials: 'include'
            }).then(response => response.json())
            .then(json => console.log(json))
            .catch(error => console.log('Authorization failed : ' + error.message));
        }


	render(){
    return(
      <div className="login" style={{backgroundImage:"url('https://i.pinimg.com/736x/e1/0b/57/e10b57588da98b075f3280d8ec38dd7c--helping-hands-beautiful-hands.jpg')"}}>
            <div className="container fadeInDown">
                <h1>Volunteer!</h1>
	  <div id="formContent">
	
	    <h2 className="active"> Volunteer </h2>
	
	  
	    <form onSubmit={this.onSubmit}>
	      <input type="text" className="fadeIn second" placeholder="Full Name" name="full_name"  onChange={this.handleInputChange}/>
	      <input type="text" className="fadeIn third" placeholder="Email" name="email"  onChange={this.handleInputChange}/>
		  <input type="text" className="fadeIn third" placeholder="Add an image url!" name="image"  onChange={this.handleInputChange}/>
		  <textarea className="fadeIn third" placeholder="Why do you want to volunteer" name="reason"  onChange={this.handleInputChange}></textarea>
		  
	      <input type="submit" className="fadeIn fourth" value="Add my Info!"/>
	    </form>   
	  
	   
	  </div>
	</div>
	</div>
    
    );
	}
}
export default Volunteer