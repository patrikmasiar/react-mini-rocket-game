import React from 'react';
import PropTypes from 'prop-types';
import KeyboardListener from '../../components/KeyboardListener';

const Game = ({appData}) => {

    return (
        <KeyboardListener>
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