import React, { Component } from 'react';
import style from './style.module.css';
import KeyboardListener from '../KeyboardListener';
import PlayerShip from '../PlayerShip';
import { SPACESHIPS } from '../../constants/objects';
import { KeyCodes } from '../../constants';

export default class PlayGround extends Component {

    spaceShipRef = null;

    state = {
        rocketBottomPosition: 0,
        rocketLeftPosition: 0,
    };

    handleKeyDown = keyCode => {
        // eslint-disable-next-line default-case
        switch(keyCode) {
            case KeyCodes.ARROW_UP:
                this.handleGoUp();
                break;
            case KeyCodes.ARROW_DOWN:
                this.handleGoDown();
                break;
            case KeyCodes.ARROW_LEFT:
                this.handleGoLeft();
                break;
            case KeyCodes.ARROW_RIGHT:
                this.handleGoRight();
                break;
        }
    };

    handleGoUp = () => {
        this.spaceShipRef.goUp();
        this.setState(prevState => ({
            rocketBottomPosition: prevState.rocketBottomPosition + 10,
        }));
    };

    handleGoDown = () => {
        this.spaceShipRef.goDown();
        this.setState(prevState => ({
            rocketBottomPosition: prevState.rocketBottomPosition - 10,
        }));
    };

    handleGoLeft = () => {
        this.spaceShipRef.goLeft();
        this.setState(prevState => ({
            rocketLeftPosition: prevState.rocketLeftPosition - 10,
        }));
    };

    handleGoRight = () => {
        this.spaceShipRef.goRight();        
        this.setState(prevState => ({
            rocketLeftPosition: prevState.rocketLeftPosition + 10,
        }));
    };

    render() {
        const {spaceshipId} = this.props;
        const {rocketLeftPosition, rocketBottomPosition} = this.state;

        return (
            <KeyboardListener
                onKeyDown={this.handleKeyDown}
            >
                <div className={style.wrapper}>
                    <PlayerShip
                        ref={ref => this.spaceShipRef = ref}
                        bottomPosition={rocketBottomPosition}
                        leftPosition={rocketLeftPosition}
                        rocketUrl={SPACESHIPS.find(spaceship => spaceship.id === spaceshipId).url}
                    />
                </div>
            </KeyboardListener>
        )
    }
}