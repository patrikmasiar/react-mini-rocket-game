import React, { Component } from 'react';
import style from './style.module.css';

export default class Alien extends Component {

    render() {
        const {bottomPosition, leftPosition} = this.props;

        return (
            <div
                className={style.alien}
                style={{
                    backgroundImage: `url(${require('../../images/alien.png')})`,
                    bottom: bottomPosition,
                    left: leftPosition,
                }}
            />
        )
    }
};