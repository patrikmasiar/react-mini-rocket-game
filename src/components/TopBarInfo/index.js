import React from 'react';
import PropTypes from 'prop-types';
import style from './style.module.css';
import { SPACESHIPS } from '../../constants/objects';

const TopBarInfo = ({username, spaceshipId, onEndGame, score}) => (
    <div className={style.wrapper}>
        <div className={style.avatar} />
        <span className={style.label}>
            COSMONAUT:
            <span className={style.userName}>
                {username}
            </span>
        </span>
        <span className={style.label}>
            SPACESHIP:
            <span className={style.userName}>
                {SPACESHIPS.find(spaceship => spaceship.id === spaceshipId).name}
            </span>
        </span>
        <span className={style.label}>
            SCORE:
            <span className={style.userName}>
                {score}
            </span>
        </span>
        <button
            type="button"
            className={style.endGameButton}
            onClick={onEndGame}
        >
            END GAME!
        </button>
    </div>
);

TopBarInfo.propTypes = {
    username: PropTypes.string.isRequired,
    spaceshipId: PropTypes.number.isRequired,
    onEndGame: PropTypes.func.isRequired,
    score: PropTypes.number.isRequired,
};

export default TopBarInfo;