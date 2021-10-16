import React, { useState } from 'react';
import '../components/css/vols.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import doublequote from './style/doublequote.png'


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
    <div className="vols">
         <h1>Our Volunteers</h1>
    <div className="vol-grid">
   
        {
          
            vol.map((volunteer)=>{
              return( <div className="single-vol card">
                <h1 style={{color:"black"}}>{volunteer.full_name?volunteer.full_name:"Mark jefferson"}</h1>
                <img className="vol-img" src={volunteer.image}/>
                <br/>
                <img className="double-quote" src={doublequote}/>
                <h5 style={{color:"black"}}> {volunteer.reason}</h5>
                <button className="btn btn-dark rounded-pill"><a href={`mailto:${volunteer.email}`}>Connect over Mail!</a></button>
                </div>
              )
            })
        }
    </div>
    </div>
  );
}
export default Volunteers;