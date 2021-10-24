import React, { Component, useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
const PrivateRoute=({ component: Component, ...restOfProps })=>{
    const isAuth = localStorage.getItem("user");

    //console.log(props.component);
   return( 
    <Route
    {...restOfProps}
    render={(props) =>
      isAuth ? <Component {...props} /> : <Redirect to="/login" />
    }
  />
   );
  }
  export default PrivateRoute;