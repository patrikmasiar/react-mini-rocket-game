import React from 'react';
import style from './style.module.css';
import SpaceShipSelectorItem from '../SpaceShipSelectorItem';
import { SPACESHIPS } from '../../constants/objects';

const SpaceShipSelector = () => {

    return (
        <div className={style.wrapper}>
            {SPACESHIPS.map(spaceShip => (
                <SpaceShipSelectorItem
                    key={spaceShip.id}
                    id={spaceShip.id}
                    url={spaceShip.url}
                    name={spaceShip.name}
                />
            ))}
        </div>
    );
};

export default SpaceShipSelector;