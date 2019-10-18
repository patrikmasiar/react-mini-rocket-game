import React from 'react';
import {AppConsumer} from './store';
import ContainersController from './containers/ContainersController';

const App = () => (
  <div className="container">
    <AppConsumer>
      {value => (
        <ContainersController appData={value} />
      )}
    </AppConsumer>
  </div>
);

export default App;