import React from "react";

const Speech=()=>{
    React.useEffect(() => {
        fetch("http://localhost:3001/")
          .then((res) => res.json())
          .then((data) => {
             
          });
      }, []);
      return (<div>

      </div>)
}
export default Speech;