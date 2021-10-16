import { CallbackConstructorRegistry } from '@tensorflow/tfjs-layers/dist/base_callbacks';
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Practice from './pages/practice';
import Alphabet from './components/alphabets';
import Keys from './pages/keyboard';
import Translate from './pages/EngToASL';
import Quiz from './pages/quiz';
import Login from './pages/login';
import Register from './pages/register';
import Jobs from './pages/jobs';


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

<Route exact path='/quiz'   render={() => (
          <Quiz/>
          )}
          exact={true}/>

<Route exact path='/login'   render={() => (
          <Login/>
          )}
          exact={true}/>
<Route exact path='/register'   render={() => (
          <Register/>
          )}
          exact={true}/>

<Route exact path='/jobs'   render={() => (
          <Jobs/>
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