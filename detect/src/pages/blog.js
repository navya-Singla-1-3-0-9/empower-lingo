import React from "react";
import '../components/css/blogs.css'
import NavBar from "../components/navbar";


const Blogs =()=>{
    const [data, setData] = React.useState(null);

    React.useEffect(() => {
        fetch("/blogresult")
          .then((res) => res.json())
          .then((data) => setData(data.result));
      }, []);
      const arr=[];
      console.log(data);
    if(data){
     data.map(blog=>{
         arr.push(blog);
     })
    }
    return(
        <div style={{backgroundColor:"black"} } >
            <NavBar/>
            <h1>Blogs</h1>
            <div className="all-blogs">
            {arr.length==0 ? <p>"Loading..."</p> : 
              
            arr.map(blog => {
                 return(<div style={{color:"black"}} key={blog.title} className="note">
                     
                     <h1 style={{color:"black"}}>{blog.title}</h1>
                     <h4 style={{color:"black"}}>{blog.link}</h4>
                     <p style={{color:"black"}}>{blog.snippet}</p>
                    
                     </div>)
                })
             }
             </div>
        </div>
    )
}
export default Blogs