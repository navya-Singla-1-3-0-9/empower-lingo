import React from "react";
import { render } from "react-dom";

// Import react-circular-progressbar module and styles
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import ProgressProvider from "./progressBar";

const App = (props) => {
  const [valueEnd, setValueEnd] = React.useState(props.value);
  console.log("props",props.value);
  return (
    <div style={{ padding: "40px 40px 40px 40px" }}>
      <Example label="Initial animation upon mount with ProgressProvider wrapper">
        <ProgressProvider valueStart={0} valueEnd={valueEnd}>
          {value => <CircularProgressbar value={value} text={`${value}%`} />}
        </ProgressProvider>
      </Example>
      
    </div>
  );
};

function Example(props) {
  return (
  
      <div style={{ marginTop:"3px", marginLeft:"40%"}}>
        <div style={{ width: 200 }}>{props.children}</div>
        <div style={{ marginLeft:60 }}>
        </div>
      </div>
    
  );
}

export default App;
