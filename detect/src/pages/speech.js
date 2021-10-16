import React from "react";
import NavBar from "../components/navbar";

const Speech=()=>{
    React.useEffect(() => {
        fetch("http://localhost:3001/")
          .then((res) => res.json())
          .then((data) => {
             
          });
      }, []);
      return (<div style={{backgroundColor:"black"}}>
          <NavBar/>
      </div>)
}
export default Speech;