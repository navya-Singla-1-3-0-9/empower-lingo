import { CallbackConstructorRegistry } from '@tensorflow/tfjs-layers/dist/base_callbacks';
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Practice from './pages/practice';

class App extends Component {
  constructor(){
    super();
    this.state= {
      letter:0,
    }
  }
  render() {
   
    const change=()=>{
   
      this.setState({letter:3},function(){
      //  console.log(this.state.letter);
      });
      
     
    }
    const App = () => (
     
      <div>
        <Switch>
          <Route exact path='/practice/:letter'   render={() => (
            <Practice
            />
          )}
          exact={true}/>

<Route exact path='/'   render={() => (
    <div>
           <button onClick={change}>Change Letter</button>
           {console.log(this.state.letter)}
           </div>
          )}
          exact={true}/>
        </Switch>
      </div>
    )
    return (
      <Switch>
        <App/>
      </Switch>
    );
  }
}

export default App;