import React, { useRef, useState, useEffect } from "react";
import swal from "sweetalert";
import * as handpose from "@tensorflow-models/handpose";
import Webcam from "react-webcam";
import { drawHand } from "../utilities";
import * as fp from "fingerpose";
import Handsigns from '../pages/handsigns'
import {Signimage,Signpass} from '../pages/handimage'

const Talk=()=>{
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  const [emoji, setEmoji] = useState(null);
  const[inputval, setInput]= useState([]);

  const images = { A: Signimage.A, 
    B: Signimage.B, 
    C: Signimage.C,
    D: Signimage.D,
    E:Signimage.E,
    F:Signimage.F,
    G:Signimage.G,
    H:Signimage.H,
    I:Signimage.I,
    J:Signimage.J,
    K:Signimage.K,
    L:Signimage.L,
    M: Signimage.M, 
    N: Signimage.N,
    O: Signimage.O,
    P:Signimage.P,
    Q:Signimage.Q,
    R:Signimage.R,
    S:Signimage.S,
    T:Signimage.T,
    U:Signimage.U,
    V:Signimage.V,
    W:Signimage.W,
    X:Signimage.X,
    Y:Signimage.Y,
    Z:Signimage.Z,
  };
  
  const letters= ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  const display=()=>{
      console.log(inputval);
  }
  
  const runHandpose = async () => {
  
    const net = await handpose.load();
    
 
    console.log("Handpose model loaded.");
    //  Loop and detect hands
    setInterval(() => {
      detect(net);
    },1000);
  };



  const detect = async (net) => {
    // Check data is available
    if (
      typeof webcamRef.current !== "undefined" &&
      webcamRef.current !== null &&
      webcamRef.current.video.readyState === 4
    ) {
      // Get Video Properties
      const video = webcamRef.current.video;
      const videoWidth = webcamRef.current.video.videoWidth;
      const videoHeight = webcamRef.current.video.videoHeight;

      // Set video width
      webcamRef.current.video.width = videoWidth;
      webcamRef.current.video.height = videoHeight;

      // Set canvas height and width
      canvasRef.current.width = videoWidth;
      canvasRef.current.height = videoHeight;

      // Make Detections
      const hand = await net.estimateHands(video);
      // console.log(hand);

      if (hand.length > 0) {
        const GE = new fp.GestureEstimator([
         
          Handsigns.aSign,
          Handsigns.bSign,Handsigns.cSign, Handsigns.dSign, Handsigns.eSign, Handsigns.fSign, Handsigns.gSign,
          Handsigns.hSign, Handsigns.iSign, Handsigns.jSign, Handsigns.kSign, Handsigns.lSign, Handsigns.mSign, Handsigns.nSign,
          Handsigns.oSign, Handsigns.pSign, Handsigns.qSign, Handsigns.rSign, Handsigns.sSign, Handsigns.tSign, Handsigns.uSign,
          Handsigns.vSign, Handsigns.wSign, Handsigns.xSign, Handsigns.ySign, Handsigns.zSign
        ]);
        const gesture = await GE.estimate(hand[0].landmarks, 4);
        if (gesture.gestures !== undefined && gesture.gestures.length > 0) {
        

          const confidence = gesture.gestures.map(
            (prediction) => prediction.confidence
          );
          const maxConfidence = confidence.indexOf(
            Math.max.apply(null, confidence)
          );
     //      console.log(gesture.gestures[maxConfidence].name);
            
           //console.log(Signpass[current].alt && Signpass[current]);
          setEmoji(gesture.gestures[maxConfidence].name);
          //setInput(inputval.push(gesture.gestures[maxConfidence].name));

         
            setInput(inputval => [...inputval, gesture.gestures[maxConfidence].name]);
            
          
         //console.log(inputval);
     
       //   console.log(emoji);
        }
      }
      const ctx = canvasRef.current.getContext("2d");
      drawHand(hand, ctx);
    }
  };

  useEffect(()=>{runHandpose()},[]);

  return (
    <div className="App">
      <header className="App-header">
     
        <Webcam
          ref={webcamRef}
          style={{
            position: "absolute",
            marginLeft: "auto",
            marginRight: "auto",
         
            right: 0,
            textAlign: "center",
            zindex: 9,
            width: 600,
            height: 480,
          }}
        />

        <canvas
          ref={canvasRef}
          style={{
            position: "absolute",
            marginLeft: "auto",
            marginRight: "auto",
      
            right: 0,
            textAlign: "center",
            zindex: 9,
           
          }}
        />
       
        {emoji !== null ? (
          <img
            src={images[emoji]}
            style={{
              position: "absolute",
              marginLeft: "auto",
              marginRight: "auto",
           
              bottom: 500,
              right: 0,
              textAlign: "center",
              height: 100,
            }}
          />
        ) : (
          ""
        )}
    

      <textarea style={{zIndex:"9",marginTop:"600px", color:"black"}} value={inputval.join("")}></textarea>
       
      </header>
    </div>
  );
}

export default Talk;