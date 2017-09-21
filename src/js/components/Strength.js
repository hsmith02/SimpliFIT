import React, { Component } from "react";
import Card from './shared/Card';

export default class Strength extends Component {
  render() {
    return (
        <div style={{ width: '1120px', marginLeft: 'auto', marginRight: 'auto'}}>
          <section>
            <h1>Legs</h1>
            <Card exercises={this.props.exercises} title="Squats" image="http://multigymmtl.com/wp-content/uploads/2015/08/squats.jpg" />
            <Card exercises={this.props.exercises} title="Lunge" image="http://www.kingofthegym.com/wp-content/uploads/2012/11/benefits-of-lunges-woman-barbell-lunge.jpg" />
            <Card exercises={this.props.exercises} title="Leg Curl" image="https://fthmb.tqn.com/kX_WDyxCzgpYTAOBbgcocNdvyrg=/735x0/about/leg-curl-56ca64385f9b5879cc4cfa23.jpg" />
            <Card exercises={this.props.exercises} title="Leg Extension" image="https://www.bodybuilding.com/exercises/exerciseImages/sequences/53/Male/l/53_2.jpg" />
            <Card exercises={this.props.exercises} title="Leg Press" image="https://www.bodybuilding.com/exercises/exerciseImages/sequences/215/Male/l/215_2.jpg" />
            <Card exercises={this.props.exercises} title="Toe Raises" image="http://www.leehayward.com/exercises/calves/seated_calf1.jpg" />
            <h1>Arms</h1>
            <Card exercises={this.props.exercises} title="Pullup" image="http://cpi.studiod.com/www_livestrong_com/photos.demandstudios.com/getty/article/108/132/492198470_XS.jpg" />
            <Card exercises={this.props.exercises} title="Barbell Curl" image="https://www.bodybuilding.com/exercises/exerciseImages/sequences/210/Male/m/210_2.jpg" />
            <Card exercises={this.props.exercises} title="Dumbbell Curl" image="https://i.ytimg.com/vi/8d2we4UqOSs/maxresdefault.jpg" />
            <Card exercises={this.props.exercises} title="Tricep Extension" image="https://www.bodybuilding.com/exercises/exerciseImages/sequences/345/Female/l/345_1.jpg" />
            <Card exercises={this.props.exercises} title="Pulldown" image="https://www.bodybuilding.com/exercises/exerciseImages/sequences/143/Female/m/143_2.jpg" />
            <Card exercises={this.props.exercises} title="Dip" image="https://jfkbodyweightworkouts.files.wordpress.com/2012/09/bench-dips.jpg" />
            <h1>Back</h1>
            <Card exercises={this.props.exercises} title="Seated Row" image="https://i2.wp.com/www.bodybuildingestore.com/wp-content/uploads/2016/02/Seated-Row-Exercises.jpg" />
            <Card exercises={this.props.exercises} title="Single-Arm Dumbbell Row" image="https://www.bodybuilding.com/images/2016/june/10-best-muscle-building-back-exercises-v2-7-700xh.jpg" />
            <Card exercises={this.props.exercises} title="Close-Grip Pulldown" image="https://www.bodybuilding.com/images/2016/june/10-best-muscle-building-back-exercises-v2-6-700xh.jpg" />
            <Card exercises={this.props.exercises} title="Wide Grip Pullup" image="https://www.bodybuilding.com/images/2016/june/10-best-muscle-building-back-exercises-v2-3-700xh.jpg" />
            <Card exercises={this.props.exercises} title="Barbell Deadlift" image="https://www.bodybuilding.com/images/2016/june/10-best-muscle-building-back-exercises-v2-1-700xh.jpg" />
            <Card exercises={this.props.exercises} title="Bent-Over Barbell Deadlift" image="https://www.bodybuilding.com/images/2016/june/10-best-muscle-building-back-exercises-v2-2-700xh.jpg" />
            <h1>Shoulders</h1>
            <Card exercises={this.props.exercises} title="Shoulder Press" image="https://www.bodybuilding.com/exercises/exerciseImages/sequences/74/Female/m/74_2.jpg" />
            <Card exercises={this.props.exercises} title="Overhead Press" image="http://www.kingofthegym.com/wp-content/uploads/2012/11/overhead-press-benefits.jpg" />
            <Card exercises={this.props.exercises} title="Band Lateral Raise" image="https://www.trainonline.com/images/exercises/female_exercise-band-standing-lateral-raises_2.jpg" />
            <Card exercises={this.props.exercises} title="Shoulder Shrug" image="https://www.bodybuilding.com/exercises/exerciseImages/sequences/96/Female/l/96_1.jpg" />
            <Card exercises={this.props.exercises} title="Dumbbell Front Raise" image="http://worldonline.media.clients.ellingtoncms.com/img/photos/2010/10/11/G0_3_moves004_t640.JPG?a6ea3ebd4438a44b86d2e9c39ecf7613005fe067" />
            <Card exercises={this.props.exercises} title="Dumbbell Lateral Raise" image="https://www.oxygenmag.com/.image/t_share/MTQ1MzQ3MzE1NDIzODQ4MjA5/dumbbell-lateral-raise.jpg" />
            <h1>Chest</h1>
            <Card exercises={this.props.exercises} title="Chest Press" image="https://www.bodybuilding.com/exercises/exerciseImages/sequences/889/Female/l/889_2.jpg" />
            <Card exercises={this.props.exercises} title="Pushup" image="https://images.askmen.com/1080x540/sports/bodybuilding/askmen-push-up-challenge-1106349-TwoByOne.jpg" />
            <Card exercises={this.props.exercises} title="Bench Press" image="https://www.t-nation.com/system/publishing/articles/10003817/original/The-Sad-Truth-Anout-the-Bench-Press.jpg?1470075815" />
            <Card exercises={this.props.exercises} title="Incline Press" image="https://www.bodybuilding.com/exercises/exerciseImages/sequences/3311/Male/l/3311_2.jpg" />
            <Card exercises={this.props.exercises} title="Pec Deck" image="https://s-media-cache-ak0.pinimg.com/originals/69/8e/f6/698ef66504e418ce95a5c070f77c6bae.jpg" />
            <Card exercises={this.props.exercises} title="Chest Flies" image="https://www.bodybuilding.com/exercises/exerciseImages/sequences/214/Female/m/214_1.jpg" />
            <h1>Core</h1>
            <Card exercises={this.props.exercises} title="Sit Ups" image="https://www.bodybuilding.com/exercises/exerciseImages/sequences/202/Female/m/202_2.jpg" />
            <Card exercises={this.props.exercises} title="Bicycles" image="https://lovelifelupus.files.wordpress.com/2012/05/bicycles-exercise.jpg" />
            <Card exercises={this.props.exercises} title="Plank" image="https://i.ytimg.com/vi/pSHjTRCQxIw/maxresdefault.jpg" />
            <Card exercises={this.props.exercises} title="Leg Raises" image="https://www.t-nation.com/system/publishing/article_assets/4610/original/Leg-Raise.jpg?ts=1490647384" />
            <Card exercises={this.props.exercises} title="Crunches" image="http://img.aws.livestrongcdn.com/ls-article-image-673/cpi.studiod.com/www_livestrong_com/photos.demandstudios.com/getty/article/144/210/493541956_XS.jpg" />
            <Card exercises={this.props.exercises} title="Flutter Kick" image="https://www.bodybuilding.com/exercises/exerciseImages/sequences/267/Male/l/267_1.jpg" />
          </section>
        </div>
    );
  }
}