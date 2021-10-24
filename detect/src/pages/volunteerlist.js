import React, { useState } from 'react';
import '../components/css/vols.css'

const Volunteers=()=>{

const [vol,setVol]= useState([]);
React.useEffect(() => {
    fetch("/getvols")
      .then((res) => res.json())
      .then((data) => {
          setVol(data.volunteers)
      });
  }, []);
  return(
    <div className="vol-grid">
        {
            vol.map((volunteer)=>{
              return( <div className="single-vol"><h1 style={{color:"black"}}>{volunteer.full_name?volunteer.full_name:"Mark jefferson"}</h1>
                <button className="btn btn-primary rounded-pill"><a href={`mailto:${volunteer.email}`}>Connect over Mail!</a></button>
                </div>
              )
            })
        }
    </div>
  );
}
export default Volunteers;