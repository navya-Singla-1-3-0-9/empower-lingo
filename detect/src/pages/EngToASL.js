import React from "react";
import '../components/css/translated.css'
import 'bootstrap/dist/css/bootstrap.min.css';
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
    render(){
        
        return(
            <div>
            <div className="main text-center">
                <div className="text-center ">
                    <textarea onChange={this.addText} placeholder="Enter Text to be translated" style={{color:"black", border:"3px solid gray", height:"300px"}}></textarea>
                </div>
                <button onClick={this.translate}>Translate</button>
             
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