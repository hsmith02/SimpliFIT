import React, { Component } from "react";
import ExerciseRowStyles from '../styles/ExerciseRow.css';
import Cookies from 'universal-cookie';
import Avatar from 'react-toolbox/lib/avatar';
import Input from 'react-toolbox/lib/input';
import Dialog from 'react-toolbox/lib/dialog';

export default class ExerciseRow extends Component {
    constructor() {
        super();
        this.cookies = new Cookies();
        this.state = {
            active: false
        };
    }

    handleToggle () {
        this.setState({active: !this.state.active});
    }

    openDialog () {
        this.setState({active: true});
    }

    saveExercise () {
        let data = {
            name: this.props.name,
            type: this.props.data.isCardio ? 'cardio' : 'strength'
        };

        if (data.type === 'cardio') {
            data.time = this.props.data.time;
        } else {
            data.reps = this.props.data.reps;
            data.weight = this.props.data.weight;
        }

        this.props.exercises[this.props.index] = data;
        const weeklyExercises = this.cookies.get('fitxworkouts');
        weeklyExercises[this.props.day] = this.props.exercises;

        this.cookies.remove('fitxworkouts');

        const today = new Date();
        const nextweek = new Date(today.getFullYear(), today.getMonth(), today.getDate()+7);

        this.cookies.set('fitxworkouts', weeklyExercises, {
            path: '/',
            expires: nextweek
        });

        this.handleToggle();
    }

    actions = [
        { label: "Cancel", onClick: this.handleToggle.bind(this) },
        { label: "Save", onClick: this.saveExercise.bind(this) }
    ];

    handleChange(name, value) {
        this.props.data[name] = value;
    };

    render() {
        return (
            <div className={ExerciseRowStyles.exerciseRow} onClick={this.openDialog.bind(this)}>
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

                <Dialog
                    className={ExerciseRowStyles.dialog}
                    actions={this.actions}
                    active={this.state.active}
                    onEscKeyDown={this.handleToggle}
                    onOverlayClick={this.handleToggle}
                >

                    <h3>Edit Exercise:</h3>
                    {
                        (this.props.data.isCardio) ?
                            <section>
                                <Input type='email' label='Length of Exercise (secs)' icon='alarm' onChange={this.handleChange.bind(this, 'time')} />
                            </section>
                            :
                            <section>
                                <Input type='email' label='Exercise Weight (lbs)' icon='build' onChange={this.handleChange.bind(this, 'weight')} />
                                <Input type='tel' label='Number of Reps' name='phone' icon='favorite' onChange={this.handleChange.bind(this, 'reps')} />
                            </section>
                    }
                </Dialog>
            </div>
        );
    }
}
