import React, { Component } from "react";
import {Tab, Tabs} from 'react-toolbox/lib/tabs';
import Strength from './Strength';
import Cardio from './Cardio';
import AppButton from './shared/AppButton.js'
import Dialog from 'react-toolbox/lib/dialog';
import Chip from 'react-toolbox/lib/chip';
import Checkbox from 'react-toolbox/lib/checkbox';
import Cookies from 'universal-cookie';
import { withRouter } from 'react-router';

class Exercises extends Component {
  constructor() {
    super();
    this.cookies = new Cookies();
    this.state = {
      index: 0,
      exercises: [],
      active: false,
      monday: false,
      tuesday: false,
      wednesday: false,
      thursday: false,
      friday: false,
      saturday: false,
      sunday: false
    };
  }

  handleToggle () {
    this.setState({active: !this.state.active});
  }

  openDialog () {
    this.setState({active: true});
  }

  saveWorkout () {
    this.buildWorkout();
    this.handleToggle();
  }

  actions = [
    { label: "Cancel", onClick: this.handleToggle.bind(this) },
    { label: "Save", onClick: this.saveWorkout.bind(this) }
  ];

  handleChange (name) {
    this.setState({[name]: !this.state[name]});
  }

  buildWorkout () {
    let workouts = this.cookies.get('fitxworkouts');

    if (workouts === null || workouts === undefined) {
      workouts = {
        monday: [],
        tuesday: [],
        wednesday: [],
        thursday: [],
        friday: [],
        saturday: [],
        sunday: []
      };
    }

    const workout = [];
    const cardioExercises = ['Run', 'Bike', 'Swim', 'Row', 'Stairs', 'Walk'];
    this.state.exercises.map((exercise, i) => {
      let exerciseObj = {
        name: exercise
      };

      if (cardioExercises.indexOf(exercise) >= 0 ) {
        exerciseObj.type = 'cardio';
        exerciseObj.time = 30;
      } else {
        exerciseObj.type = 'strength';
        exerciseObj.weight = 10;
        exerciseObj.reps = 8;
      }

      workout.push(exerciseObj);
    });

    if (this.state.monday) {
      workouts.monday = workout;
    }

    if (this.state.tuesday) {
        workouts.tuesday = workout;
    }

    if (this.state.wednesday) {
        workouts.wednesday = workout;
    }

    if (this.state.thursday) {
        workouts.thursday = workout;
    }

    if (this.state.friday) {
        workouts.friday = workout;
    }

    if (this.state.saturday) {
        workouts.saturday = workout;
    }

    if (this.state.sunday) {
        workouts.sunday = workout;
    }

    this.cookies.remove('fitxworkouts');

    const today = new Date();
    const nextweek = new Date(today.getFullYear(), today.getMonth(), today.getDate()+7);

    this.cookies.set('fitxworkouts', workouts, {
        path: '/',
        expires: nextweek
    });

    this.props.router.push('/workouts');
  }

  handleTabChange = (index) => {
     this.setState({index});
  };

  render() {
    return (
      <div>
        <Tabs index={this.state.index} onChange={this.handleTabChange} fixed>
          <Tab label='Cardio'>
            <Cardio exercises={this.state.exercises}/>
          </Tab>
          <Tab label='Strength'>
            <Strength exercises={this.state.exercises}/>
          </Tab>
        </Tabs>

        <AppButton style={{marginTop: '20px', marginBottom: '100px', marginRight: '310px'}} label='Save Workout' raised primary onClick={this.openDialog.bind(this)}/>

        <Dialog
            actions={this.actions}
            active={this.state.active}
            onEscKeyDown={this.handleToggle}
            onOverlayClick={this.handleToggle}
        >

          <h3>Selected Exercises</h3>
          {
              this.state.exercises.map(function (exercise) {
                  return <Chip>{exercise}</Chip>
              })
          }

          <h3>Select Day(s)</h3>
          <div>
            <Checkbox
              checked={this.state.monday}
              label="Monday"
              onChange={this.handleChange.bind(this, 'monday')}
            />
            <Checkbox
              checked={this.state.tuesday}
              label="Tuesday"
              onChange={this.handleChange.bind(this, 'tuesday')}
            />
            <Checkbox
              checked={this.state.wednesday}
              label="Wednesday"
              onChange={this.handleChange.bind(this, 'wednesday')}
            />
            <Checkbox
              checked={this.state.thursday}
              label="Thursday"
              onChange={this.handleChange.bind(this, 'thursday')}
            />
            <Checkbox
              checked={this.state.friday}
              label="Friday"
              onChange={this.handleChange.bind(this, 'friday')}
            />
            <Checkbox
              checked={this.state.saturday}
              label="Saturday"
              onChange={this.handleChange.bind(this, 'saturday')}
            />
            <Checkbox
              checked={this.state.sunday}
              label="Sunday"
              onChange={this.handleChange.bind(this, 'sunday')}
            />

          </div>
        </Dialog>
      </div>
    );
  }
}

export default withRouter(Exercises);