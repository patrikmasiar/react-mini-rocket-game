import React, { Component } from 'react';
import style from './style.module.css';
import KeyboardListener from '../KeyboardListener';

export default class PlayGround extends Component {

    handleKeyDown = keyCode => {
        console.log(keyCode);
    };

    render() {
        return (
            <KeyboardListener
                onKeyDown={this.handleKeyDown}
            >
                <div className={style.wrapper}>
                    
                </div>
            </KeyboardListener>
        )
    }
}