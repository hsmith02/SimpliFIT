import React, { Component } from "react";
import Cookies from 'universal-cookie';
import {Tab, Tabs} from 'react-toolbox/lib/tabs';
import ExerciseDayList from './shared/ExerciseDayList';
import AppStyles from './styles/AppStyles.css';

export default class Workouts extends Component {
    constructor() {
        super();
        this.cookies = new Cookies();
        this.workouts = this.cookies.get('fitxworkouts');
        this.state = {
            index: 0
        };

        if (this.workouts === undefined) {
            this.workouts = {
                monday: [],
                tuesday: [],
                wednesday: [],
                thursday: [],
                friday: [],
                saturday: [],
                sunday: []
            }
        }
    }

    handleTabChange = (index) => {
        this.setState({index});
    };

    render() {
        return (
            <div className={AppStyles.workoutList}>
                <Tabs index={this.state.index} onChange={this.handleTabChange} fixed>
                    <Tab label='Monday'>
                        <ExerciseDayList name="Monday" exercises={this.workouts.monday}/>
                    </Tab>
                    <Tab label='Tuesday'>
                        <ExerciseDayList name="Monday" exercises={this.workouts.tuesday}/>
                    </Tab>
                    <Tab label='Wednesday'>
                        <ExerciseDayList name="Wednesday" exercises={this.workouts.wednesday}/>
                    </Tab>
                    <Tab label='Thursday'>
                        <ExerciseDayList name="Thursday" exercises={this.workouts.thursday}/>
                    </Tab>
                    <Tab label='Friday'>
                        <ExerciseDayList name="Friday" exercises={this.workouts.friday}/>
                    </Tab>
                    <Tab label='Saturday'>
                        <ExerciseDayList name="Saturday" exercises={this.workouts.saturday}/>
                    </Tab>
                    <Tab label='Sunday'>
                        <ExerciseDayList name="Sunday" exercises={this.workouts.sunday}/>
                    </Tab>
                </Tabs>
            </div>
        );
    }
}
