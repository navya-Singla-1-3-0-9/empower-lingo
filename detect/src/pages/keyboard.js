import React from "react";
import Card from "../components/card";
import '../components/css/keyboard.css'
import Key from "../components/key";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "../components/navbar";
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
    render(){
    const letters= ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    let i=0;
    return (
        <div style={{backgroundColor:"black"}}>
              <NavBar/>
        <div className="container">
<<<<<<< HEAD
          
            <textarea value={this.state.inputVal} style={{ marginBottom:"10%"}}></textarea>
=======
            <textarea value={this.state.inputVal} style={{color:"black" ,height:"200px", marginBottom:"14%" ,background: "white", /* fallback for old browsers */

}}></textarea>
>>>>>>> 73ec6679 (styled asl to eng)
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