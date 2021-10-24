import React,{useState} from "react";
import {useParams} from "react-router-dom";

const Transcript=()=>{
    const {trans_id}= useParams();
    const [ttext,setText]= useState(null);
    let text="";
React.useEffect(() => {
    fetch(`/transcript/${trans_id}`)
      .then((res) => res.json())
      .then((data) => {
          data.transcript.words.map((word)=>{
           // setText(ttext => [...ttext,word.text]);
           text= text+word.text+" "
           
          })
          //console.log(text);
          setText(text);

      });
  }, []);
  console.log(ttext);

  return (
      <div>
            {(!ttext?<p>LOADING...</p>:<p>{ttext}</p>)}
      </div>
  )
}
export default Transcript