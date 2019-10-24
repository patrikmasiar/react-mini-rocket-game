import React from 'react';
import PropTypes from 'prop-types';
import TopBarInfo from '../../components/TopBarInfo';
import PlayGround from '../../components/PlayGround';

const Game = ({appData}) => {

    return (
        <div style={{height: '100%'}}>
            <TopBarInfo
                username={appData.username}
                spaceshipId={appData.spaceshipId}
                onEndGame={() => appData.setScreenMenu()}
                score={appData.score}
            />
            <PlayGround
                spaceshipId={appData.spaceshipId}
                increaseScore={() => appData.increaseScore()}
            /> 
        </div>
    );
};

Game.propTypes = {
    appData: PropTypes.object.isRequired,
};

export default Game;