import React, { createContext, Component } from 'react';

const AppContext = createContext({
  spaceshipId: null,
  username: '',
  screen: 'menu',
  setSpaceshipId: () => {},
  setUsername: () => {},
  setScreenGame: () => {},
  setScreenMenu: () => {},
});

export class AppProvider extends Component {
  setUsername = username => {
    this.setState({username});
  };

  setSpaceshipId = spaceshipId => {
    this.setState({spaceshipId});
  };
  
  setScreenGame = () => {
    this.setState({screen: 'game'});
  };

  setScreenMenu = () => {
    this.setState({screen: 'menu'});
  };

  state = {
    spaceshipId: null,
    username: '',
    screen: 'menu',
    setSpaceshipId: this.setSpaceshipId,
    setUsername: this.setUsername,
    setScreenGame: this.setScreenGame,
    setScreenMenu: this.setScreenMenu,
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