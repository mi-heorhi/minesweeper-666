import React, {Component} from 'react';

export default class Cell extends Component {
    constructor(props) {
        super(props);
        this.setFlag = this
            .setFlag
            .bind(this)

    }
    setFlag(event) {
        const {x, y, setFlag} = this.props;
        event.preventDefault()
        setFlag(x, y)
    }
    render() {
        const {cell, x, y, onOpen, boom} = this.props;
        const cellStype = {
            textAlign: 'center'
        }
        const buttonStyle = {
            width: '3em',
            height: '3em'
        }
        if (cell.hasFlag) {
            return <td style={cellStype}>
                <button style={buttonStyle} onContextMenu={this.setFlag}>F</button>
            </td>
        } else if (cell.isOpened) {
            return <td style={cellStype}>{cell.count}</td>
        } else if (cell.hasMine) {
            return <td style={cellStype}>
                <button style={buttonStyle} onClick={() => boom()} onContextMenu={this.setFlag}></button>
            </td>
        } else {
            return <td style={cellStype}>
                <button
                    style={buttonStyle}
                    onClick={() => onOpen(x, y)}
                    onContextMenu={this.setFlag}></button>
            </td>
        }
    }
}