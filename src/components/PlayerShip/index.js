import React, { Component } from 'react';
import style from './style.module.css';

import * as classes from 'react-style-classes';

export default class PlayerShip extends Component {

    spaceShipRef = null;
    rotation = 'top';

    goUp() {
        this.rotation = 'top';
    };

    goDown() {
        this.rotation = 'down';
    };

    goLeft() {
        this.rotation = 'left';
    };

    goRight() {
        this.rotation = 'right';
    }

    getRotationStyle() {
        switch(this.rotation) {
            case 'top':
                return style.rotationTop;
            case 'down':
                return style.rotationDown;
            case 'left':
                return style.rotationLeft;
            case 'right':
                return style.rotationRight;
            default:
                return style.rotationTop;
        }
    }

    render() {
        const {rocketUrl, bottomPosition, leftPosition} = this.props;

        return (
            <div
                ref={ref => this.spaceShipRef = ref}
                className={classes(style.spaceship, this.getRotationStyle())}
                style={{
                    backgroundImage: `url(${rocketUrl})`,
                    bottom: bottomPosition,
                    left: leftPosition,
                }}
            />
        )
    }
};