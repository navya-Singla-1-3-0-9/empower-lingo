import React,{useState} from "react";
import {useParams} from "react-router-dom";
import NavBar from "../components/navbar";

const Transcript=()=>{
    const {trans_id}= useParams();
    const [ttext,setText]= useState(null);
   // let text="";
   const importAll=(r)=> {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
  }
  
  const images = importAll(require.context('../components/images/keys', false, /\.(png|jpe?g|svg)$/));
React.useEffect(() => {
    fetch(`/transcript/${trans_id}`)
      .then((res) => res.json())
      .then((data) => {
          //console.log(text);
          setText(data.transcript);
      });
  }, []);
  console.log(ttext);
  const arr=[]
  
      if(ttext!=null){
   ttext.toUpperCase().split("").forEach(ch=>{
         arr.push(ch>='A' && ch<='Z'?(images[`${ch}.jpg`].default):(" "))
      })
      console.log(arr);
    }
 
  return (
      <div>
          <NavBar/>
          <h1>TRANSCRIPT</h1>
            
        {arr.map((char)=>{
            return (char!=' '?<img src={char}/>:<br/>)
        })}
                
           
                
      </div>
  )
}
export default Transcript