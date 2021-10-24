import React, { useState } from "react";
import '../components/css/post.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useParams} from "react-router-dom";
import { Exp } from "@tensorflow/tfjs-core";
import { Redirect } from 'react-router-dom'
import NavBar from "../components/navbar";
const Explore =()=>{
    const {spaceid, postid}=useParams();
    const [post,setPost]= useState(null);
    const [reload, setReload]= useState(false);
  //  console.log(id);
    React.useEffect(() => {
      fetch("/getpost/"+postid)
        .then((res) => res.json())
        .then((data) => {
            setPost(data.post)
        });
    }, []);

    const [comment, setComment]=useState(null);
    const handleInputChange = (event) => {
       const { value} = event.target;
       setComment(value);
     }
    const onSubmit = (event) => {
		event.preventDefault();

		const data= {comment}
		console.log(JSON.stringify(data))
    
       fetch(`http://localhost:3001/${postid}/addcomment`, { 
		   method:'POST',
		   headers:{'Accept': 'application/json',"Content-Type":"application/json"},
		   body:JSON.stringify(data),
		   credentials: 'include'
		   })   .then(response => response.json())
		   .then(json =>{
          
             console.log(json)
           }
           )
		   .catch(error => console.log('Authorization failed : ' + error.message));

           fetch("/getpost/"+postid)
           .then((res) => res.json())
           .then((data) => {
               setPost(data.post)
           });
          
	  }
    
    console.log(post)
    return(
        <div className="post" >
          <NavBar/>
            <div className="row nextRow">
                <div className="col-lg-8 post">
            
                    <div className="space-posts">
                    <form onSubmit={onSubmit}>
                 
	            <textarea className="fadeIn second" placeholder="Add Question" name="question"  onChange={handleInputChange}/>
	            <input type="submit" className="fadeIn fourth" value="Add Comment"/>
	    </form>   
                        <a href={`/addcomment/${postid}`}><button className="btn btn-light rounded-pill">Add Comments</button></a>
                        {!post?"loading":
                        post.comments.map((comment)=>{
                       return( <div className="single-post">
                          
                            <div className="card">
                                <div className="card-header">
                                   Featured
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title" style={{color:"black"}}>{comment.commentor}</h5>
                                    <p className="card-text">{comment.content}</p>
                                 
                                </div>
                            </div>

                      
                    </div>);
                    })
                    }
                    </div>
                    

                </div>
                <div className="col-lg-4">
                    <div className="share">
                        SHARE 
                        <span className="btn-group" role="group" aria-label="Basic example">
                        <button type="button" className="btn btn-secondary">Left</button>
                        <button type="button" className="btn btn-secondary">Middle</button>
                        <button type="button" className="btn btn-secondary">Right</button>

                        </span>
                       
                    </div>
                    <div className="info">
                            <p>Created On</p>
                            <div className="date">
                                December 31, 2020
                            </div>

                            <p>Last Updated</p>
                            <div className="date">
                                December 31, 2020
                            </div>
                        </div>
                        <div className="image">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a className="btn btn-light card-link rounded-pill">Volunteer</a>
                                <a href="#" className="btn btn-light card-link rounded-pill">Get Support</a>
                            </div>
                            </div>
                        </div>
                        <div className="views">
                            <div>54 <span>Views</span></div>
                        </div>
                </div>

            </div>
        </div>
    )

}
export default Explore;