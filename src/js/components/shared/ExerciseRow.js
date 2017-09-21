import React, { Component } from "react";
import ExerciseRowStyles from '../styles/ExerciseRow.css';
import Avatar from 'react-toolbox/lib/avatar';

export default class ExerciseRow extends Component {
    constructor() {
        super();
    }

    render() {
        console.log(this.props);
        return (
            <div className={ExerciseRowStyles.exerciseRow}>
                <div className={ExerciseRowStyles.exerciseAvatar}>
                    <Avatar className={ExerciseRowStyles.avatar}><img src={this.props.avatar}/></Avatar>
                </div>

                <div className={ExerciseRowStyles.exerciseDataBlock}>
                    <div className={ExerciseRowStyles.exerciseDataBlockTitle}>
                        <h3 className={ExerciseRowStyles.exerciseName}>{this.props.name}</h3>
                        <p className={ExerciseRowStyles.exerciseType}>{this.props.type}</p>
                    </div>

                    {
                        (this.props.data.isCardio)
                        ?
                            <div className={ExerciseRowStyles.exerciseDataBlockSection}>
                                <p>{this.props.data.time} mins</p>
                            </div>
                        :
                            <div className={ExerciseRowStyles.exerciseDataBlockSection}>
                                <p>{this.props.data.weight} lbs</p>
                                <p>{this.props.data.reps} reps</p>
                            </div>
                    }
                </div>

            </div>
        );
    }
}
