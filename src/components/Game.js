import React, {Component} from 'react';
import {connect} from 'react-redux';
import {gameSelector} from '../selectors';
import {initGame, openCell, boom, setFlag} from '../actions';
import Row from './Row.js';
import Timer from './Timer.js';

const mapDispatchToProps = dispatch => {
    return {
        actions: {
            initGame: (level) => dispatch(initGame(level)),
            openCell: (x, y) => dispatch(openCell(x, y)),
            boom: () => dispatch(boom()),
            setFlag: (x, y) => dispatch(setFlag(x, y))
        }
    }
}

@connect(gameSelector, mapDispatchToProps)
export default class Game extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        const {actions, level} = this.props;
        actions.initGame(level);
    }
    render() {
        const {actions, game} = this.props
        let rows = []
        if (game.board) {
            rows = game
                .board
                .map((row, index) => {
                    return <Row
                        cells={row}
                        lineNumber={index}
                        onOpen={(x, y) => actions.openCell(x, y)}
                        boom={() => actions.boom()}
                        setFlag={(x, y) => actions.setFlag(x, y)}
                        key={'row-' + index }/>
                })
        }
        return (
            <div>
                <Timer />
            <table style={{
                border: '3px'
            }}>
                {rows}
            </table>
            </div>
        )

    }
}