import React from 'react';
import style from './style.module.css';
import SpaceShipSelector from '../../components/SpaceShipSelector';
import { AppConsumer } from '../../store';

const Menu = () => (
    <AppConsumer>
        {value => {
            const onStart = () => {
                if (value.spaceshipId === null) {
                    alert("Please, select spaceship!");
                    return;
                }

                if (value.username.length === 0) {
                    alert("Please, insert your nickname!");
                    return;
                }

                value.setScreenGame();
            }

            return (
                <div className={style.wrapper}>
                    <span className={style.title}>Select your Spaceship</span>
                    <SpaceShipSelector />
                    <input
                        className={style.input}
                        placeholder="Your nickname"
                        onChange={e => value.setUsername(e.target.value)}
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
        }}
    </AppConsumer>
);

export default Menu;