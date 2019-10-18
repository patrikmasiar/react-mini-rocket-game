import { Component } from 'react';
import PropTypes from 'prop-types';
import { KeyCodes } from '../../constants';

export default class KeyboardListener extends Component {

    static propTypes = {
        onKeyDown: PropTypes.func.isRequired,
    };

    componentDidMount() {
        document.addEventListener('keydown', this.handleKeyDown);
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKeyDown);
    }

    handleKeyDown = event => {
        const {keyCode} = event;
        const allowedKeyCodes = Object.values(KeyCodes);

        if (allowedKeyCodes.includes(keyCode)) {
            this.props.onKeyDown(keyCode);
        }
        
        return;
    };

    render() {
        return this.props.children;
    }

}