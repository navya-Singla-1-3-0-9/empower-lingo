import React from "react";
import Card from "../components/card";
import '../components/css/keyboard.css'
import Key from "../components/key";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "../components/navbar";

import Particles from "react-tsparticles";
import { Main } from "tsparticles-engine";
import { loadBubblesPreset } from "tsparticles-preset-bubbles";

class Keys extends React.Component{
    constructor(props){
        super(props);
        this.state={
            inputVal:""
        }
    }
    displayLetter=(event)=>{
        console.log(event.target)
        this.setState({inputVal:this.state.inputVal+event.target.alt})
        console.log(this.state.inputVal)
    }
    space=()=>{
        this.setState({inputVal:this.state.inputVal+" "})
    }
    customInit(main: Main) {
        // this adds the preset to tsParticles, you can safely use the
        loadBubblesPreset(main);
      }
    render(){
        const options = {
            backgroundMask: {
                enable: true,
                cover: {
                  value: {
                    r: 0,
                    g: 0,
                    b: 0
                  }
                }
              },
              background: {
                image: "url('https://particles.js.org/images/background.jpg')",
                size: "100% 100%",
                repeat: "no-repeat"
              },
              fullScreen: {
                enable: true,
                zIndex: -1
              },
              particles: {
                color: {
                  value: ["#1E00FF", "#FF0061", "#E1FF00", "#00FF9E"],
                  animation: {
                    enable: true,
                    speed: 30
                  }
                },
                move: {
                  direction: "bottom",
                  enable: true,
                  outModes: {
                    default: "out"
                  },
                  size: true,
                  speed: {
                    min: 1,
                    max: 3
                  }
                },
                number: {
                  value: 200,
                  density: {
                    enable: true,
                    area: 800
                  }
                },
                opacity: {
                  value: 1,
                  animation: {
                    enable: false,
                    startValue: "max",
                    destroy: "min",
                    speed: 0.3,
                    sync: true
                  }
                },
                rotate: {
                  value: {
                    min: 0,
                    max: 360
                  },
                  direction: "random",
                  move: true,
                  animation: {
                    enable: true,
                    speed: 60
                  }
                },
                tilt: {
                  direction: "random",
                  enable: true,
                  move: true,
                  value: {
                    min: 0,
                    max: 360
                  },
                  animation: {
                    enable: true,
                    speed: 60
                  }
                },
                shape: {
                  type: ["circle", "square", "polygon"],
                  options: {
                    polygon: [
                      {
                        sides: 5
                      },
                      {
                        sides: 6
                      }
                    ]
                  }
                },
                size: {
                  value: {
                    min: 1,
                    max: 3
                  }
                },
                roll: {
                  darken: {
                    enable: true,
                    value: 30
                  },
                  enlighten: {
                    enable: true,
                    value: 30
                  },
                  enable: true,
                  speed: {
                    min: 15,
                    max: 25
                  }
                },
                wobble: {
                  distance: 30,
                  enable: true,
                  move: true,
                  speed: {
                    min: -15,
                    max: 15
                  }
                }
              }
          };

    const letters= ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    let i=0;
    return (
        <div>
              <NavBar/>
              <Particles options={options} init={this.customInit} />
        <div className="container">
<<<<<<< HEAD
          
<<<<<<< HEAD
            <textarea value={this.state.inputVal} style={{ marginBottom:"10%"}}></textarea>
=======
            <textarea value={this.state.inputVal} style={{color:"black" ,height:"200px", marginBottom:"14%" ,background: "white", /* fallback for old browsers */

}}></textarea>
>>>>>>> 73ec6679 (styled asl to eng)
=======
            <textarea value={this.state.inputVal} style={{ marginBottom:"10%"}} placeholder="Type here by using ASL keys"></textarea>
>>>>>>> c6cbb32b (added start backgrounds)
        <div className="keys">

            {   
                letters.map((letter,index)=>{
                   return  ( <Key key={letter} letter={letter} displayLetter={this.displayLetter}/>)
                })
            }
        </div>
        <br></br>
        <div>
        <button className= "btn btn-warning" onClick={this.space}>Space</button>
        </div>
        
        </div>
        </div>
    );
        }
 }
 export default Keys