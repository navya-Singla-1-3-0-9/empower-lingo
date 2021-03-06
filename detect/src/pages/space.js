import React from "react";
import '../components/css/post.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useParams} from "react-router-dom";
import NavBar from "../components/navbar";
const Space =()=>{
    const {id}=useParams();
    const [space, setSpace] = React.useState(null);
    const [posts,setPost] = React.useState([]);
    console.log(id);
    React.useEffect(() => {
      fetch("/getspace/"+id)
        .then((res) => res.json())
        .then((data) => {
            setSpace(data.space)
            setPost(data.posts)
        });
    }, []);
    

    console.log(posts)
    return(
        <div>
        <div className="post" >
            <NavBar/>
            <div className="row nextrow">
                <div className="col-lg-8 post">
                {!space ? "Loading..." :  <div className="post-header"style={{backgroundImage:`url(${space.image})`}}>
                        <i>{space.name}</i>
                        <div className="space-desc">
                            <i>
                            {space.content}
                            </i>
                        </div>
                    </div>
}
                    <div className="space-posts">
                        <a href={`/addpost/${id}`}><button className="btn btn-light rounded-pill">Create Post</button></a>
                        {!posts?"loading":
                        posts.map((post)=>{
                       return( <div className="single-post">
                          
                            <div className="card">
                                <div className="card-header">
                                   {post.comments.length} Comments
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title" style={{color:"black"}}>{post.creator}</h5>
                                    <p className="card-text">{post.question}</p>
                                    <a href={"/"+id+"/"+post._id} className="btn btn-dark">Explore post</a>
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
        </div>
    )

}
export default Space;