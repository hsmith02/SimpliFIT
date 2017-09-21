import React, { Component, PropTypes } from 'react';
import { AppBar } from 'react-toolbox/lib/app_bar';
import { Navigation } from 'react-toolbox/lib/navigation';
import { Link } from 'react-toolbox/lib/link';
import theme from '../styles/PurpleAppBar.css';
import linkStyles from '../styles/Link.css';

export default class PurpleAppBar extends Component {
  constructor() {
    super();
    this.state = {
      workoutActive: false,
      exercisesActive: false
    };
  }

  render() {
    if (this.props.active === '/workouts') {
      this.state.workoutActive = true;
    }

    if (this.props.active === '/exercises') {
      this.state.exercisesActive = true;
    }

    return (
      <AppBar title={this.props.title} theme={theme}>
        <Navigation type='horizontal'>
          <Link href="/workouts" active={this.state.workoutActive} className={linkStyles.link} label="Workouts" icon='list' /> {/*ICONS FOUND HERE: https://material.io/icons/ */}
          <Link href="/exercises" active={this.state.exercisesActive} className={linkStyles.link} label="Create New" icon='assignment' />
        </Navigation>
      </AppBar>
    );
  }
}