import React, {Component} from 'react';
import Cell from './Cell.js'

export default class Row extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {cells, lineNumber, onOpen, boom, setFlag} = this.props;
        return (
            <tr>
                {cells.map((cell, index) => {
                    return <Cell cell={cell} x={index} y={lineNumber} onOpen={onOpen} boom={boom} setFlag={setFlag} key={'cell-' + index}/>
                })}
            </tr>
        );
    }
}