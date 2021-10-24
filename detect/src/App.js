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
import Volunteer from './pages/volunteer';
import Talk from './pages/talk';
import Signs from './pages/commonsigns';
import NewPostForm from './pages/newPost';
import Space from './pages/space';
import Spaces from './pages/allspaces';
import Addpost from './pages/addpost';
import Explore from './pages/explorepost';
import Volunteers from './pages/volunteerlist';
import Speech from './pages/speech';


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
          <Route exact path='/speech'   render={() => (
          <Speech/>
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
<Route exact path='/volunteer'   render={() => (
          <Volunteer/>
          )}
          exact={true}/>

<Route exact path='/talk'   render={() => (
          <Talk/>
          )}
          exact={true}/>

<Route exact path='/signs'   render={() => (
          <Signs/>
          )}
          exact={true}/>

<Route exact path='/newspace'   render={() => (
          <NewPostForm/>
          )}
          exact={true}/>

<Route exact path='/space/:id'   render={() => (
          <Space/>
          )}
          exact={true}/>

<Route exact path='/spaces'   render={() => (
          <Spaces/>
          )}
          exact={true}/>
          <Route exact path='/getvolunteers'   render={() => (
          <Volunteers/>
          )}
          exact={true}/>
          <Route exact path='/addpost/:id'   render={() => (
          <Addpost/>
          )}
          exact={true}/>
              <Route exact path='/:spaceid/:postid'   render={() => (
          <Explore/>
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