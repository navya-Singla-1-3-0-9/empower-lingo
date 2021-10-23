import { CallbackConstructorRegistry } from '@tensorflow/tfjs-layers/dist/base_callbacks';
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Card from './components/card';
import Practice from './pages/practice';
import Alphabet from './components/alphabets';

class App extends Component {
  constructor(){
    super();
    this.state= {
      letter:0,
    }
  }
  

  render() {
   
 
    const App = () => (
     
      <div>
        <Switch>
          <Route exact path='/practice/:letter'   render={() => (
            <Practice
            />
          )}
          exact={true}/>

  <Route exact path='/practice'   render={() => (
           <Alphabet/>
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