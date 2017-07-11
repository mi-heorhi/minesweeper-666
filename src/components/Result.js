import React, {Component} from 'react';
import {connect} from 'react-redux';
import {gameSelector} from '../selectors';
import {showResult} from '../actions';
import Row from './Row.js';
import {Link} from 'react-router';

const mapDispatchToProps = dispatch => {
    return {
        actions: {
            showResult: () => dispatch(showResult())
        }
    }
}

@connect(gameSelector, mapDispatchToProps)
export default class Result extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        const {actions} = this.props;
        actions.showResult();
    }
    render() {
        const {actions, game} = this.props;
        let rows = []
        if (game.board) {
            rows = game
                .board
                .map((row, index) => {
                    return <Row
                        cells={row}
                        lineNumber={index}
                        onOpen={(x, y) => actions.openCell(x, y)}
                        boom={() => actions.boom()}/>
                })
        }
        return (
            <div>
                <div class="alert alert-success" role="alert">
                    <Link to={`/start`} class="alert-link">
                        You Result is: {this.props.params.result}! Try again?
                    </Link>
                </div>
                <table style={{
                    border: '3px'
                }}>
                    {rows}
                </table>
            </div>
        );
    }
}