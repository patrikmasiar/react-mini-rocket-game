import React from 'react';
import PropTypes from 'prop-types';
import style from './style.module.css';
import { AppConsumer } from '../../store';

import * as classes from 'react-style-classes';

const SpaceShipSelectorItem = ({...props}) => (
    <AppConsumer>
        {value => {
            const isSelected = props.id === value.spaceshipId;
            const isEven =  props.index % 2 === 0;
            
            return (
                <div
                    onClick={() => value.setSpaceshipId(props.id)}
                    className={classes(style.wrapper, isSelected && style.selected)}
                >
                    <div
                        className={classes(style.image, isEven && style.even)}
                        style={{backgroundImage: `url(${props.url})`}}
                    />
                    <span className={style.name}>
                        {props.name}
                    </span>
                </div>
            );
        }}
    </AppConsumer>
    
);

SpaceShipSelectorItem.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
};

export default SpaceShipSelectorItem;