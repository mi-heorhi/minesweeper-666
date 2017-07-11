import React, {Component} from 'react';
import {ButtonGroup, Button} from 'react-bootstrap';
import {Link} from 'react-router';

export default class StartGame extends Component {

    constructor(props) {
        super(props);
    }
    render() {
        const wellStyles = {
            maxWidth: 400,
            margin: '0 auto 10px'
        };
        return (
            <div class="btn-group-vertical" style={wellStyles}>
                <Link to={`/game/easy`} class="btn btn-default">
                    Easy
                </Link>
                <Link to={`/game/normal`} class="btn btn-default">
                    Normal
                </Link>
                <Link to={`/game/hard`} class="btn btn-default">
                    Hard
                </Link>
                <Link to={`/game/lucky`} class="btn btn-default">
                    You're lucky?
                </Link>
            </div>
        );
    }
}
