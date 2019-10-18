import React from 'react';
import PropTypes from 'prop-types';
import Menu from '../Menu';

const ContainersController = ({appData}) => {
    
    return (
        <Menu />
    )
};

ContainersController.propTypes = {
    appData: PropTypes.object.isRequired,
};

export default ContainersController;