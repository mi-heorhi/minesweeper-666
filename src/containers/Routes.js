import React from 'react';
import {Route, IndexRedirect} from 'react-router';
import StartGame from '../components/StartGame.js';
import MineSwipper from '../components/MineSwipper.js';
import Result from '../components/Result.js';
import Layout from '../components/Layout.js';

const Routes = (
  <Route path='/' component={Layout}>
    <IndexRedirect to='/start'/>
    <Route path='/start' component={StartGame}/>
    <Route path='/game/:level' component={MineSwipper}/>
    <Route path='/end/:result' component={Result}/>
  </Route>
)

export default Routes