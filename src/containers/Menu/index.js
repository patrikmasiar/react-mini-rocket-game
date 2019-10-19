import React from 'react';
import PropTypes from 'prop-types';
import style from './style.module.css';
import SpaceShipSelector from '../../components/SpaceShipSelector';

const Menu = ({appData}) => {
    const onStart = () => {
        if (appData.spaceshipId === null) {
            alert("Please, select spaceship!");
            return;
        }

        if (appData.username.length === 0) {
            alert("Please, insert your nickname!");
            return;
        }

        appData.setScreenGame();
    }

    return (
        <div className={style.wrapper}>
            <div className={style.bg} />
            <span className={style.title}>
                Catch an Alien
                <img src={require("../../images/alien.png")} className={style.alien} alt="Alien" />
            </span>
            <SpaceShipSelector />
            <input
                className={style.input}
                placeholder="Your nickname"
                onChange={e => appData.setUsername(e.target.value)}
            />
            <button
                type="button"
                className={style.button}
                onClick={onStart}
            >
                START!
            </button>
        </div>
    );
};

Menu.propTypes = {
    appData: PropTypes.object.isRequired,
};

export default Menu;