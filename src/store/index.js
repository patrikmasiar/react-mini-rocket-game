import React, { createContext, Component } from 'react';

const AppContext = createContext({
  spaceshipId: null,
  username: '',
  screen: 'menu',
  score: 0,
  isGameOver: false,
  setSpaceshipId: () => {},
  setUsername: () => {},
  setScreenGame: () => {},
  setScreenMenu: () => {},
  increaseScore: () => {},
  decreaseScore: () => {},
  setGameOver: () => {},
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

  increaseScore = () => {
    this.setState(prevState => ({
      score: prevState.score + 1
    }));
  };

  decreaseScore = () => {
    this.setState(prevState => ({
      score: prevState.score - 1
    }));
  };

  setGameOver = () => {
    this.setState({isGameOver: true});
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
    increaseScore: this.increaseScore,
    decreaseScore: this.decreaseScore,
    setGameOver: this.setGameOver,
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