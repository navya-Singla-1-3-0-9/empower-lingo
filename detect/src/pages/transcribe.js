import React, { useState } from "react";
import '../components/css/login.css'
import {useParams} from "react-router-dom";
import { Redirect } from 'react-router-dom'
import NavBar from "../components/navbar";


const Audio_link=()=>{
    const [audio_url,setAudio]=useState(null);
	const [redirect,setRedirect]= useState(false);
    const [id,setID]= useState(null);
	 const handleInputChange = (event) => {
		const { value} = event.target;
		setAudio(value)
	  }
    
	  const onSubmit = (event) => {
		event.preventDefault();
		
		const data= {audio_url}
		console.log(JSON.stringify(data))
		setRedirect(true)
       fetch(`http://localhost:3001/transcribe`, { 
		   method:'POST',
		   
		   headers:{'Accept': 'application/json',"Content-Type":"application/json"},
		   body:JSON.stringify(data),
		   credentials: 'include'
		   })   .then(response => response.json())
		   .then(json => setID(json.result.id))
		   .catch(error => console.log('Authorization failed : ' + error.message));

          
	  }
	const  renderRedirect = () => {
	  if (redirect && id) {
		return <Redirect to={`/transcript/${id}`} />
	  }
	}

    return(
      <div className="login">
		  <NavBar/>
		  {renderRedirect()}
            <div className="container fadeInDown">
	  <div id="formContent">
	
	    <h2 className="active"> Transcribe Audios!! </h2>
	 
	    <form onSubmit={onSubmit}>
	      <input type="text" className="fadeIn second" placeholder="Add Audio URL" name="audio_url"  onChange={handleInputChange}/>
	      <input type="submit" className="fadeIn fourth" value="Transcribe this!"/>
	    </form>   
	  
	  
	  </div>
	</div>
	</div>
    
    );
}
export default Audio_link