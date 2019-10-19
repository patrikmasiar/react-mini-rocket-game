import React, { Component } from 'react';
import style from './style.module.css';
import KeyboardListener from '../KeyboardListener';
import PlayerShip from '../PlayerShip';
import { SPACESHIPS } from '../../constants/objects';
import { KeyCodes } from '../../constants';
import Alien from '../Enemy';

export default class PlayGround extends Component {

    spaceShipRef = null;
    playGroundRef = null;

    playgroundWidth = 0;
    playgroundHeight = 0;

    state = {
        rocketBottomPosition: 0,
        rocketLeftPosition: 0,
        leftAlienPosition: 0,
        bottomAlienPosition: 0,
    };

    componentDidMount() {
        if (this.playGroundRef !== null) {
            this.playgroundWidth = this.playGroundRef.offsetWidth;
            this.playgroundHeight = this.playGroundRef.offsetHeight;
            this.setState({
                rocketBottomPosition: 10,
                rocketLeftPosition: this.playgroundWidth / 2 - 45,
            });
            this.setAlienPosition(this.playGroundRef.offsetWidth, this.playGroundRef.offsetHeight);
        }
    }

    getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

    isColision() {
    }

    setColision() {

    }

    setAlienPosition = (maxX, maxY) => {
        this.setState({
            leftAlienPosition:this.getRandomInt(maxX),
            bottomAlienPosition: this.getRandomInt(maxY),
        })
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
        this.setState(prevState => {
            if (prevState.rocketBottomPosition + 180 > this.playgroundHeight) {
                return;
            }

            return {rocketBottomPosition: prevState.rocketBottomPosition + 15};
        });
    };

    handleGoDown = () => {
        this.spaceShipRef.goDown();
        this.setState(prevState => {
            if (prevState.rocketBottomPosition <= 0) {
                return;
            }

            return {rocketBottomPosition: prevState.rocketBottomPosition - 15};
        });
    };

    handleGoLeft = () => {
        this.spaceShipRef.goLeft();
        this.setState(prevState => {
            if (prevState.rocketLeftPosition <= 20) {
                return;
            }

            return {rocketLeftPosition: prevState.rocketLeftPosition - 15};
        });
    };

    handleGoRight = () => {
        this.spaceShipRef.goRight();        
        this.setState(prevState => {
            if (prevState.rocketLeftPosition + 160 > this.playgroundWidth) {
                return;
            }

            return {rocketLeftPosition: prevState.rocketLeftPosition + 15};
        });
    };

    render() {
        const {spaceshipId} = this.props;
        const {rocketLeftPosition, rocketBottomPosition, leftAlienPosition, bottomAlienPosition} = this.state;

        return (
            <KeyboardListener
                onKeyDown={this.handleKeyDown}
            >
                <div className={style.wrapper} ref={ref => this.playGroundRef = ref}>
                    <Alien
                        leftPosition={leftAlienPosition}
                        bottomPosition={bottomAlienPosition}
                    />
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