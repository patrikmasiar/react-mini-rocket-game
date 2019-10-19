import React, { Component } from 'react';
import style from './style.module.css';
import KeyboardListener from '../KeyboardListener';
import PlayerShip from '../PlayerShip';
import { SPACESHIPS } from '../../constants/objects';
import { KeyCodes } from '../../constants';

export default class PlayGround extends Component {

    spaceShipRef = null;

    handleKeyDown = keyCode => {
        // eslint-disable-next-line default-case
        switch(keyCode) {
            case KeyCodes.ARROW_UP:
                this.spaceShipRef.goUp();
                break;
            case KeyCodes.ARROW_DOWN:
                this.spaceShipRef.goDown();
                break;
            case KeyCodes.ARROW_LEFT:
                this.spaceShipRef.goLeft();
                break;
            case KeyCodes.ARROW_RIGHT:
                this.spaceShipRef.goRight();
                break;
        }
    };

    render() {
        const {spaceshipId} = this.props;

        return (
            <KeyboardListener
                onKeyDown={this.handleKeyDown}
            >
                <div className={style.wrapper}>
                    <PlayerShip
                        ref={ref => this.spaceShipRef = ref}
                        rocketUrl={SPACESHIPS.find(spaceship => spaceship.id === spaceshipId).url}
                    />
                </div>
            </KeyboardListener>
        )
    }
}