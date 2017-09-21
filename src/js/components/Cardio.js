import React, { Component } from "react";
import Card from './shared/Card';

export default class Cardio extends Component {
    render() {
        return (
            <div style={{ width: '1120px', marginLeft: 'auto', marginRight: 'auto'}}>
                <section>
                    <h1>Cardio</h1>
                    <Card exercises={this.props.exercises} title="Run" image="http://dreamatico.com/data_images/run/run-6.jpg" />
                    <Card exercises={this.props.exercises} title="Bike" image="https://604now.com/wp-content/uploads/2014/05/biketour-300x194.png" />
                    <Card exercises={this.props.exercises} title="Swim" image="http://content.active.com/Assets/Active.com+Content+Site+Digital+Assets/Triathlon/580x370/4+Swim+Workouts/Swim+4.jpg" />
                    <Card exercises={this.props.exercises} title="Row" image="http://allsportspk.com/wp-content/uploads/2016/09/rowing.jpg" />
                    <Card exercises={this.props.exercises} title="Stairs" image="http://triathlonmagazine.ca/wp-content/uploads/2016/02/ThinkstockPhotos-517998297.jpg" />
                    <Card exercises={this.props.exercises} title="Walk" image="http://s.eatthis-cdn.com/media/images/ext/216268148/morning-walk-longer-life-in-20-minutes.jpg" />
                </section>
            </div>
        );
    }
}