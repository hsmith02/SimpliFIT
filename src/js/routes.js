import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './App';
import Exercises from './components/Exercises';
import Workouts from './components/Workouts';

export default (
  <Route path='/' component={App}>
    <IndexRoute component={Workouts} />
    <Route path='workouts' component={Workouts} />
    <Route path='exercises' component={Exercises} />
  </Route>
);