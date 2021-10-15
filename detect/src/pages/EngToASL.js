import React from "react";
import '../components/css/translated.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "../components/navbar";

import Particles from "react-tsparticles";
import { Main } from "tsparticles-engine";
import { loadBubblesPreset } from "tsparticles-preset-bubbles";

class Translate extends React.Component{
    constructor(){
        super();
        this.state={
            text:"",
            translated:[]
        }
    }
    importAll=(r)=> {
        let images = {};
        r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
        return images;
      }
      
      images = this.importAll(require.context('../components/images/keys', false, /\.(png|jpe?g|svg)$/));
    
  
    addText=(event)=>{
     //   console.log(event.target.value);
        this.setState({text:event.target.value});
    }
    translate=()=>{
        let a= this.state.text.toUpperCase().split("");
        console.log(this.images);
        let tt=[];
        a.map((letter)=>{
           {tt.push((letter>='A' && letter<='Z')?this.images[`${letter}.jpg`].default:"")};
        })
        console.log(tt);
        this.setState({translated:tt});
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

        return(
            <div style={{minHeight:"100vh"}}>
                <NavBar/>
                <Particles options={options} init={this.customInit} />
            <div className="main text-center">
                <div className="text-center ">
<<<<<<< HEAD
<<<<<<< HEAD
                    <textarea onChange={this.addText} placeholder="Enter Text to be translated" ></textarea>
=======
                    <textarea onChange={this.addText} placeholder="Enter Text to be translated" style={{color:"black", border:"3px solid gray", height:"20px"}}></textarea>
>>>>>>> 73ec6679 (styled asl to eng)
=======
                    <textarea onChange={this.addText} placeholder="Enter Text to be translated" style={{color:"white", border:"3px solid gray", height:"150px", width:"100%"}}></textarea>
>>>>>>> 53703f55 (fixed translate button)
                </div>
                <button className= "btn btn-warning" onClick={this.translate}>Translate</button>
             
            </div>
            <div className="translated">
                    {
                        this.state.translated.map(link=>{
                            return(
                                <span>{
                                
                                (link!="")?<img src={link}/>:<br/>
                            }
                            </span>)
                        })
                    }
                </div>
            </div>
        );
    }
}
export default Translate;