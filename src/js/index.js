import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Router, browserHistory } from 'react-router';
import { overrideComponentTypeChecker } from 'react-toolbox';
import routes from './routes';

overrideComponentTypeChecker((classType, reactElement) => (
    reactElement && (
      reactElement.type === classType
      || reactElement.type.name === classType.displayName
    )
));

ReactDOM.render(
  <AppContainer>
    <Router history={browserHistory} routes={routes} />
  </AppContainer>,
  document.querySelector('#app')
);
