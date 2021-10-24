import React from "react";
import { render } from "react-dom";

// Import react-circular-progressbar module and styles
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";



import ProgressProvider from "./progressBar";

const App = (props) => {
  const [valueEnd, setValueEnd] = React.useState(props.value);
  console.log(props,props.value);
  return (
    <div style={{ padding: "30px 30px 30px 30px" }}>
      <Example label="Initial animation upon mount with ProgressProvider wrapper">
        <ProgressProvider valueStart={0} valueEnd={valueEnd}>
          {value => <CircularProgressbar value={value} text={`${value}%`}    styles={{
    // Customize the root svg element
    root: {},
    // Customize the path, i.e. the "completed progress"
    path: {
      // Path color
      stroke: `rgba(255, 102, 179, ${value})`,
      // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
      strokeLinecap: 'butt',
      // Customize transition animation
      transition: 'stroke-dashoffset 0.5s ease 0s',
    },
    // Customize the circle behind the path, i.e. the "total progress"
    trail: {
      // Trail color
      stroke: '#d6d6d6',
    },
    // Customize the text
    text: {
      // Text color
      fill: '#ff99cc',
      // Text size
      fontSize: '30px',
    },
    // Customize background - only used when the `background` prop is true
    background: {
      fill: '#ff66b3',
    },
  }} />}
        </ProgressProvider>
      </Example>
      
    </div>
  );
};

function Example(props) {
  return (
  
      <div style={{ marginTop:"3px"}}>
        <h1 style={{color:"#ff66b3"}}>My Progress</h1>
        <br/>
        <br/>
        <div style={{  marginLeft:100 ,width: 250 }}>{props.children}</div>
        
        <div style={{ marginLeft:20 }}>
          <br/>
          
        </div>
      </div>
    
  );
}
export default App;


