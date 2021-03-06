import React from "react";
import '../components/css/jobs.css'
import NavBar from "../components/navbar";


const Jobs =()=>{
    const [data, setData] = React.useState(null);

    React.useEffect(() => {
        fetch("/results")
          .then((res) => res.json())
          .then((data) => setData(data.result));
      }, []);
      const arr=[];
      console.log(data);
    if(data){
     data.map(job=>{
         arr.push(job);
     })
    }
    return(
        <div style={{backgroundColor:"black"} } >
            <NavBar/>
            <h1>Jobs</h1>
            <div className="all-jobs">
            {arr.length==0 ? <p>"Loading..."</p> : 
              
            arr.map(job => {
                 return(<div style={{color:"black"}} key={job.title} className="note">
                     
                     <h1 style={{color:"black"}}>{job.title}</h1>
                     <h4 style={{color:"black"}}>{job.company_name}</h4>
                     <p style={{color:"black"}}>{job.description}</p>
                    
                     </div>)
                })
             }
             </div>
        </div>
    )
}
export default Jobs