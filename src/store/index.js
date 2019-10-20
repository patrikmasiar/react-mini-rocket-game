import React, { createContext, Component } from 'react';

const AppContext = createContext({
  spaceshipId: null,
  username: '',
  screen: 'menu',
  score: 0,
  setSpaceshipId: () => {},
  setUsername: () => {},
  setScreenGame: () => {},
  setScreenMenu: () => {},
  setScrote: () => {},
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
    this.setState({screen: 'menu', spaceshipId: null, username: ''});
  };

  setScore = () => {
    this.setState(prevState => ({
      score: prevState.score + 1
    }));
  };

  state = {
    spaceshipId: null,
    username: '',
    screen: 'menu',
    score: 0,
    setSpaceshipId: this.setSpaceshipId,
    setUsername: this.setUsername,
    setScreenGame: this.setScreenGame,
    setScreenMenu: this.setScreenMenu,
    setScore: this.setScore,
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