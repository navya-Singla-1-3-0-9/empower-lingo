import React, { Component, useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
const PrivateRoute=(props)=>{
    const isAuth = localStorage.getItem("user");

    //console.log(props.component);
   return( 

    (isAuth!=null?<Route exact path='/practice' component={props.component}/>:<Redirect
    to={{
    pathname: "/"
    }}
    />)
   );
  }
  export default PrivateRoute;