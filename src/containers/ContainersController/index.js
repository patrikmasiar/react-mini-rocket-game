import React from 'react';
import PropTypes from 'prop-types';
import Menu from '../Menu';

const ContainersController = ({appData}) => {
    if (appData.screen === 'game') {
        return (
            <div>
                game
            </div>
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