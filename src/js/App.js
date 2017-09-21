import React, { Component } from "react";
import PurpleAppBar from './components/shared/PurpleAppBar';
import AppStyles from './components/styles/AppStyles.css';

export default class App extends Component {
  render() {
    return (
      <div>
        <PurpleAppBar title="SimpliFIT" active={this.props.location.pathname} />
        <div className={AppStyles.container}>
          { this.props.children }
        </div>
         <div className={AppStyles.footer}>
             <p>&copy; Heather Smith 2017</p>
         </div>
      </div>
    );
  }
}
