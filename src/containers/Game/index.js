import React from 'react';
import PropTypes from 'prop-types';

const Game = ({appData}) => {

    return (
        <div style={{margin: 100}}>
            NICKNAME: {appData.username}
        </div>
    )
}

Game.propTypes = {
    appData: PropTypes.object.isRequired,
};

export default Game;