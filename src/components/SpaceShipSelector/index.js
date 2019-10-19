import React from 'react';
import style from './style.module.css';
import SpaceShipSelectorItem from '../SpaceShipSelectorItem';
import { SPACESHIPS } from '../../constants/objects';

const SpaceShipSelector = () => {

    return (
        <div className={style.wrapper}>
            <span className={style.title}>Select your spaceship</span>
            <div className={style.list}>
                {SPACESHIPS.map((spaceShip, index) => (
                    <SpaceShipSelectorItem
                        key={spaceShip.id}
                        id={spaceShip.id}
                        url={spaceShip.url}
                        name={spaceShip.name}
                        index={index}
                    />
                ))}
            </div>
        </div>
    );
};

export default SpaceShipSelector;