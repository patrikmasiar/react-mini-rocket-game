import React from 'react';
import PropTypes from 'prop-types';
import KeyboardListener from '../../components/KeyboardListener';

const Game = ({appData}) => {

    const onKeyDown = keyCode => {
        console.log(keyCode)
    };

    return (
        <KeyboardListener onKeyDown={onKeyDown}>
            <div style={{margin: 100}}>
                NICKNAME: {appData.username}
            </div>
        </KeyboardListener>
    );
};

Game.propTypes = {
    appData: PropTypes.object.isRequired,
};

export default Game;