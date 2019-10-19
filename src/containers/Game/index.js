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
                score={appData.score}
            />
            <PlayGround
                spaceshipId={appData.spaceshipId}
                setScore={() => appData.setScore()}
            /> 
        </div>
    );
};

Game.propTypes = {
    appData: PropTypes.object.isRequired,
};

export default Game;