import React, { useState } from "react";
import '../components/css/login.css'
import {useParams} from "react-router-dom";
import { Redirect } from 'react-router-dom'
import NavBar from "../components/navbar";


const Addpost=()=>{
    const [question,setQuestion]=useState(null);
	const [redirect,setRedirect]= useState(false);
	 const handleInputChange = (event) => {
		const { value} = event.target;
		setQuestion(value)
	  }
      const {id}= useParams();
	  const onSubmit = (event) => {
		event.preventDefault();
		
		const data= {question}
		console.log(JSON.stringify(data))
		setRedirect(true)
       fetch(`http://localhost:3001/addpost/${id}`, { 
		   method:'POST',
		   
		   headers:{'Accept': 'application/json',"Content-Type":"application/json"},
		   body:JSON.stringify(data),
		   credentials: 'include'
		   })   .then(response => response.json())
		   .then(json => console.log(json))
		   .catch(error => console.log('Authorization failed : ' + error.message));

          
	  }
	const  renderRedirect = () => {
	  if (redirect) {
		return <Redirect to={`/space/${id}`} />
	  }
	}

    return(
      <div className="login">
		  <NavBar/>
		  {renderRedirect()}
            <div className="container fadeInDown">
	  <div id="formContent">
	
	    <h2 className="active"> Create a Post </h2>
	 
	    <form onSubmit={onSubmit}>
	      <input type="text" className="fadeIn second" placeholder="Add Question" name="question"  onChange={handleInputChange}/>

	      <input type="submit" className="fadeIn fourth" value="Add Post"/>
	    </form>   
	  
	  
	  </div>
	</div>
	</div>
    
    );
}
export default Addpost