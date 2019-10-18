import React from 'react';
import style from './style.module.css';
import SpaceShipSelector from '../../components/SpaceShipSelector';

const Menu = () => {

    return (
        <div className={style.wrapper}>
            <span className={style.title}>Select your Spaceship</span>
            <SpaceShipSelector />
            <input
                className={style.input}
                placeholder="Your nickname"
                required
            />
            <button
                type="button"
                className={style.button}
            >
                START!
            </button>
        </div>
    );
};

export default Menu;