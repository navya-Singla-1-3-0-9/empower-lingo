import React from "react";
import '../components/css/jobs.css'

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
        <div>
            {arr.length==0 ? <p>"Loading..."</p> : 
              
            arr.map(job => {
                 return(<div style={{color:"black"}} key={job.title}>
                     <h1 style={{color:"black"}}>{job.title}</h1>
                     <h4 style={{color:"black"}}>{job.company_name}</h4>
                     <p style={{color:"black"}}>{job.description}</p>
                     <hr/>
                     </div>)
                })
             }
        </div>
    )
}
export default Jobs