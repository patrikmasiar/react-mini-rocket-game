import React from 'react';
import PropTypes from 'prop-types';
import style from './style.module.css';

const SpaceShipSelectorItem = ({...props}) => {

    console.log(props)
    return (
        <div className={style.wrapper}>
            <div className={style.image} style={{backgroundImage: `url(${props.url})`}} />
            <span className={style.name}>{props.name}</span>
        </div>
    );
};

SpaceShipSelectorItem.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
};

export default SpaceShipSelectorItem;