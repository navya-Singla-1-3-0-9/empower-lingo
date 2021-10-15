import React, { useRef, useState, useEffect } from "react";
import swal from "sweetalert";
import {useParams} from "react-router-dom";

import * as tf from "@tensorflow/tfjs";
import * as handpose from "@tensorflow-models/handpose";
import Webcam from "react-webcam";
import Cam from "../components/webcam";
import { drawHand } from "../utilities";

import * as fp from "fingerpose";
import Handsigns from './handsigns'
import {Signimage,Signpass} from './handimage'
import NavBar from "../components/navbar";
import '../components/css/practice.css'

function App(props) {
 
  const letters= ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  const {letter}=useParams() 
  
  const importAll=(r)=> {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
  }
  
  const images = importAll(require.context('../components/images/keys', false, /\.(png|jpe?g|svg)$/));

 console.log(images);
 
  return (
    <div className="Appx" style={{backgroundColor:"black"}}>
      <NavBar/>
      <h1>Practice Letter {letters[letter]}</h1>
      <header className="App-header">
     
      <Cam letter={letter}/>
   
          {letter!=null ? (<img
          className="prac"
            src={images[`${letters[letter]}.jpg`].default}
            style={{
              position: "absolute",
              marginLeft: "auto",
              marginRight: "auto",
              width:500,
              backgroundColor:"white",
              left:50,
              textAlign: "center",
              height: 400,
              zIndex:9,
              top:230
            
            }}
          />):(
            ""
          )
}

       
      </header>
    </div>
  );
}

export default App;