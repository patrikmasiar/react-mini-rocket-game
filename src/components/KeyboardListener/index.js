import { Component } from 'react';
import PropTypes from 'prop-types';

export default class KeyboardListener extends Component {

    static propTypes = {
    };

    static defaultProps = {
    };

    componentDidMount() {
        document.addEventListener('keydown', this.handleKeyDown);
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKeyDown);
    }

    handleKeyDown = event => {
        const {keyCode} = event;

        console.log(keyCode);
        
        return;
    };

    render() {
        return this.props.children;
    }

}