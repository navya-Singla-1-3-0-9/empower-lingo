import { CallbackConstructorRegistry } from '@tensorflow/tfjs-layers/dist/base_callbacks';
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Practice from './pages/practice';
import Alphabet from './components/alphabets';
import Keys from './pages/keyboard';
import Translate from './pages/EngToASL';


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
  <Route exact path='/translate'   render={() => (
           <Keys/>
          )}
          exact={true}/>
<Route exact path='/translate1'   render={() => (
           <Translate/>
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