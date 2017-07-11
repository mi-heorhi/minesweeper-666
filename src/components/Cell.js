import React, {Component} from 'react';
import {Glyphicon, Button} from 'react-bootstrap';

const colors = ['#deeaee', '#b1cbbb', '#eea29a', '#c94c4c', '#c94c4c', '#c94c4c', '#c94c4c'];

export default class Cell extends Component {
    constructor(props) {
        super(props);
        this.setFlag = this
            .setFlag
            .bind(this);

    }
    setFlag(event) {
        const {x, y, setFlag} = this.props;
        event.preventDefault();
        setFlag(x, y);
    }
    render() {
        const {cell, x, y, onOpen, boom} = this.props;
        const cellStype = {
            textAlign: 'center'
        };
        const buttonStyle = {
            width: '3em',
            height: '3em'
        };
        if (cell.isOpened) {
            if (!cell.hasMine) {
                return <td style={cellStype}>
                    <Button style={buttonStyle}><span style={{color: colors[cell.count]}}>{cell.count}</span></Button>
                </td>
            } else {
                return <td style={cellStype}>
                    <Button style={buttonStyle}><Glyphicon glyph="asterisk" /></Button>
                </td>
            }
        } else {
            if (!cell.hasMine && !cell.hasFlag) {
                return <td style={cellStype}>
                    <Button
                        style={buttonStyle}
                        onClick={() => onOpen(x, y)}
                        onContextMenu={this.setFlag}></Button>
                </td>
            } else if (cell.hasMine && !cell.hasFlag) {
                return <td style={cellStype}>
                    <Button style={buttonStyle} onClick={() => boom()} onContextMenu={this.setFlag}></Button>
                </td>
            } else {
                return <td style={cellStype}>
                    <Button style={buttonStyle} onContextMenu={this.setFlag}><Glyphicon glyph="flag" /></Button>
                </td>
            }
        }
    }
}