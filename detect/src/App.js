import { CallbackConstructorRegistry } from '@tensorflow/tfjs-layers/dist/base_callbacks';
import React, { Component, useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
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
import PrivateRoute from './components/privateroute';
import Audio_link from './pages/transcribe';
import Transcript from './pages/transcript';
import Blogs from './pages/blog';


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
      
          <Route exact path='/practice/:letter' component={Practice}/>
          <PrivateRoute exact path='/practice' component={Alphabet}/>

{/*<Route exact path='/practice'   render={() => (
            <Alphabet/>
          )}
          exact={true}
/>*/}

  
  <Route exact path='/translate'  component={Keys}/>
<Route exact path='/translate1'  component={Translate}/>

<Route exact path='/quiz' component={Quiz}/>
          <Route exact path='/speech'  component={Speech}/>

<Route exact path='/login'  component={Login}/>
<Route exact path='/register' component={Register}/>

<Route exact path='/jobs' component={Jobs}/>
<Route exact path='/volunteer'  component={Volunteer}/>

<Route exact path='/talk'  component={Talk}/>

<Route exact path='/signs' component={Signs}/>

<Route exact path='/newspace'  component={NewPostForm}/>

<Route exact path='/space/:id'  component={Space}/>

<Route exact path='/spaces' component={Spaces}/>
<Route exact path='/getvolunteers'  component={Volunteers}/>
<Route exact path='/transcript/:trans_id' component={Transcript}/>
<Route exact path='/addpost/:id' component={Addpost}/>
<Route exact path='/:spaceid/:postid' component={Explore}/>
<Route exact path='/transcribe' component={Audio_link}/>
<Route exact path='/blogs' component={Blogs}/>


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