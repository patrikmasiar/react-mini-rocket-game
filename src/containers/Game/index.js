import React from 'react';
import PropTypes from 'prop-types';
import style from './style.module.css';
import KeyboardListener from '../../components/KeyboardListener';
import TopBarInfo from '../../components/TopBarInfo';

const Game = ({appData}) => {

    const onKeyDown = keyCode => {
        console.log(keyCode)
    };

    return (
        <KeyboardListener onKeyDown={onKeyDown}>
            <TopBarInfo username={appData.username} spaceshipId={appData.spaceshipId} />
            <div>

            </div>
        </KeyboardListener>
    );
};

Game.propTypes = {
    appData: PropTypes.object.isRequired,
};

export default Game;