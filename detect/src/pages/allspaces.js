import React from "react";
import '../components/css/post.css';

const Spaces=()=>{
    const [spaces, setSpaces] = React.useState([]);

    React.useEffect(() => {
      fetch("/getspaces")
        .then((res) => res.json())
        .then((data) => setSpaces(data.spaces));
    }, []);
    console.log(spaces);
    return(
        <div style={{backgroundColor:"black"}}>
           {
               spaces.map(space=>{
                   return(<div key={space._id}>
                       <div className="post-header" style={{backgroundImage:`url(${space.image})`, width:"60%", marginLeft:"20%", marginBottom:"7%"}}>
                        <i>{space.name}</i>
                        <div className="space-desc">
                            <i>
                            {space.content}
                            </i>
                            <br/>
                            <a href={"/space/"+space._id}><button className="btn btn-light rounded-pill">Explore Space</button></a>
                        </div>
                    </div>
                   </div>);
               })
           } 
        </div>
    )
   
}
export default Spaces;