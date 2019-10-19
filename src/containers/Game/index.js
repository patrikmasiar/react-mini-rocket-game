import React from 'react';
import PropTypes from 'prop-types';
// import style from './style.module.css';
// import KeyboardListener from '../../components/KeyboardListener';
import TopBarInfo from '../../components/TopBarInfo';
import PlayGround from '../../components/PlayGround';

const Game = ({appData}) => {

    return (
        <div style={{height: '100%'}}>
            <TopBarInfo username={appData.username} spaceshipId={appData.spaceshipId} />
            <PlayGround /> 
        </div>
    );
};

Game.propTypes = {
    appData: PropTypes.object.isRequired,
};

export default Game;