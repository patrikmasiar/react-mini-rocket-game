import React, { Component } from 'react';
import style from './style.module.css';

export default class PlayerShip extends Component {

    state = {
        bottomPosition: 0,
        leftPosition: 0,
    }

    spaceShipRef = null;

    goUp() {
        this.setState(prevState => ({
            bottomPosition: prevState.bottomPosition + 5,
        }));
    };

    goDown() {
        this.setState(prevState => ({
            bottomPosition: prevState.bottomPosition - 5,
        }));
    };

    goLeft() {
        this.setState(prevState => ({
            leftPosition: prevState.leftPosition - 5,
        }));
    };

    goRight() {
        this.setState(prevState => ({
            leftPosition: prevState.leftPosition + 5,
        }));
    };

    render() {
        const {rocketUrl} = this.props;
        const {bottomPosition, leftPosition} = this.state;

        return (
            <div
                ref={ref => this.spaceShipRef = ref}
                className={style.spaceship}
                style={{
                    backgroundImage: `url(${rocketUrl})`,
                    bottom: bottomPosition,
                    left: leftPosition,
                }}
            />
        )
    }
};