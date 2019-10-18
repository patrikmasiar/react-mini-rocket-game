import React from 'react';
import PropTypes from 'prop-types';
import Menu from '../Menu';
import Game from '../Game';

const ContainersController = ({appData}) => {
    if (appData.screen === 'game') {
        return (
            <Game appData={appData} />
        );
    }
    
    return (
        <Menu appData={appData} />
    )
};

ContainersController.propTypes = {
    appData: PropTypes.object.isRequired,
};

export default ContainersController;