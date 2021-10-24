import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom';
import $ from 'jquery';

for (var i = 0; i < 100; i++) {
  var star = '<div class="star" style="animation: twinkle '+((Math.random()*5) + 5)+'s linear '+((Math.random()*5) + 5)+'s infinite; top: '+Math.random()*$(window).height()+'px; left: '+Math.random()*$(window).width()+'px;"></div>';
  $('body').append(star);
}

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