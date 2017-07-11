import React, {Component} from 'react';
import Game from './Game.js';

export default class MineSwipper extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {level} = this.props.params;
        return (
            <div>
                <Game level={level}/>
            </div>
        );

    }
}
