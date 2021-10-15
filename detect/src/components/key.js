import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
const Key=(props)=>{
    function importAll(r) {
        let images = {};
        r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
        return images;
      }
      
      const images = importAll(require.context('./images/keys', false, /\.(png|jpe?g|svg)$/));
      const displayLetter=()=>{
          
      }
    return (
        
           
               <img src={images[`${props.letter}.jpg`].default} alt={props.letter} style={{width:"100%", border:"2px solid black", cursor:"pointer"}} onClick={props.displayLetter}/>
           
            
        
    );
}
export default Key;