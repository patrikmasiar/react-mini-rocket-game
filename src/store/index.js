import React, { createContext, Component } from 'react';

const AppContext = createContext({
  spaceshipId: null,
  username: '',
  setSpaceshipId: () => {},
  setUsername: () => {},
});

export class AppProvider extends Component {
  setUsername = username => {
    this.setState({username});
  };

  setSpaceshipId = spaceshipId => {
    this.setState({spaceshipId});
  };

  state = {
    spaceshipId: null,
    username: '',
    setSpaceshipId: this.setSpaceshipId,
    setUsername: this.setUsername,
  };

  render() {
    return (
      <AppContext.Provider value={this.state}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

export const AppConsumer = AppContext.Consumer;