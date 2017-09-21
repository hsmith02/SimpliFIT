import React, { Component } from "react";
import exercises from '../../../exercises.js';
import ExerciseRow from './ExerciseRow';

export default class ExerciseDayList extends Component {
    render () {
        return (
          <div>
            {
                (this.props.exercises.length === 0) ?
                    <p>No workout set for {this.props.name}.</p>
                    :
                      this.props.exercises.map((exercise, i) => {
                        const data = {
                            isCardio: true
                        };

                        if (exercise.time === undefined) {
                            data.reps = exercise.reps;
                            data.weight = exercise.weight;
                            data.isCardio = false
                        } else {
                            data.time = exercise.time;
                        }

                        return (
                            <ExerciseRow
                                key={i}
                                avatar={exercises[exercise.type.toLowerCase()][exercise.name.toLowerCase()]}
                                name={exercise.name}
                                type={exercise.type}
                                data={data}
                            />
                        )
                    })
            }
          </div>
        );
    }
}
