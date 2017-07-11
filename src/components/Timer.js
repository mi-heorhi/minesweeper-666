import React, {Component} from 'react';
import {connect} from 'react-redux';
import {timerSelector} from '../selectors';
import {startTimer} from '../actions';
import Row from './Row.js';

const mapDispatchToProps = dispatch => {
    return {
        actions: {
            startTimer: () => dispatch(startTimer())
        }
    }
}

@connect(timerSelector, mapDispatchToProps)
export default class Timer extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        const {actions} = this.props;
        actions.startTimer(startTimer);
    }
    render() {
        const {actions, timer} = this.props
        return (
            <div class="alert alert-success" role="alert">
                Time: {timer ? timer.value : 0}
            </div>
        );
    }
}
