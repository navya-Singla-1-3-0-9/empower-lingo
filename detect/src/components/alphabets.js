import React from "react";
import Card from "./card";
import './css/card.css'
 const Alpha = ()=>{
    const letters= ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    let i=0;
    return (
        <div className="card-grid">
            {
                
                letters.map((letter,index)=>{
                   return  (<a href={`/practice/${index}`}><Card letter={letter}/></a>)
                })
            }
        </div>
    );
 }
 export default Alpha