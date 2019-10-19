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
        leftAlienPosition: 150,
        bottomAlienPosition: 150,
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

    componentDidUpdate(prevProps, prevState) {
        this.isColision();
    }

    getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

    isColision() {
        const {rocketLeftPosition, rocketBottomPosition, leftAlienPosition, bottomAlienPosition} = this.state;

        const spaceship = {x: rocketLeftPosition, y: rocketBottomPosition, width: 90, height: 175};
        const enemy = {x: leftAlienPosition, y: bottomAlienPosition, width: 100, height: 100};

        if (this.isCollide(spaceship, enemy)) {
            this.setColision();
        }
    }

    isCollide(a, b) {
        return !(
            ((a.y + a.height) < (b.y)) ||
            (a.y > (b.y + b.height)) ||
            ((a.x + a.width) < b.x) ||
            (a.x > (b.x + b.width))
        );
    }

    setColision = () => {
        this.setAlienPosition(this.playGroundRef.offsetWidth, this.playGroundRef.offsetHeight);
        this.props.setScore();
    }

    setAlienPosition = (maxX, maxY) => {
        this.setState({
            leftAlienPosition:this.getRandomInt(maxX - 100),
            bottomAlienPosition: this.getRandomInt(maxY - 100),
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
                    <div className={style.bg} />
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