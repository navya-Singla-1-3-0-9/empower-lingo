import React from "react";
import '../components/css/blog.css'
import NavBar from "../components/navbar";
import { MDBCard, MDBCardHeader, MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn } from 'mdb-react-ui-kit';


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
                 return(<MDBCard style={{backgroundColor:"#e9ffdb"}}>
                    {/* <MDBCardHeader>Featured</MDBCardHeader> */}
                    <MDBCardBody>
                      <MDBCardTitle style={{color:"black"}}>{blog.title}</MDBCardTitle>
                      <MDBCardText>{blog.snippet}</MDBCardText>
                      <MDBBtn href={blog.link}>Read More..</MDBBtn>
                    </MDBCardBody>
                  </MDBCard>)
                })
             }
             </div>
        </div>
    )
}
export default Blogs