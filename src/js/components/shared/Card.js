import React, { Component } from "react";
import { Card, CardMedia, CardTitle, CardText, CardActions } from 'react-toolbox/lib/card';
import {Button} from 'react-toolbox/lib/button';
import cardStyles from '../styles/Card.css';

export default class ExerciseCard extends Component {
    constructor() {
        super();
        this.state = {
            active: false,
            className: cardStyles.card
        };
    }

    selectActive (event) {
        if (this.state.active) {
            let index = this.props.exercises.indexOf(this.props.title);
            if (index > -1) {
                this.props.exercises.splice(index, 1);
            }

            this.setState({
                className: cardStyles.card,
                active: !this.state.active
            });
        } else {
            this.props.exercises.push(this.props.title);
            this.setState({
                className: cardStyles.cardActive,
                active: !this.state.active
            });
        }

        console.log(this.props.exercises);
    }
    
    render () {        
        return (
            <Card raised={true}  className={ this.state.className } onClick={this.selectActive.bind(this)}>
                <CardTitle
                    title={this.props.title}
                />
                <CardMedia
                    aspectRatio="wide"
                    image={this.props.image}
                />
                <CardText></CardText>
            </Card>
        );
    }
} 