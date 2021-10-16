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

function App(props) {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);
 
  const {letter}=useParams() 
  
 
 
 
  return (
    <div className="App">
      <header className="App-header">
      <p>{!data ? "Loading..." : data}</p>
      <Cam letter={letter}/>
   
          {letter!=null ? (<img
            src={Signpass[letter].src}
            style={{
              position: "absolute",
              marginLeft: "auto",
              marginRight: "auto",
              width:500,
              
            left: 0,
              textAlign: "center",
              height: 480,
              zIndex:9
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