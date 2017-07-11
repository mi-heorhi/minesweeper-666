import * as actions from './'
import {push} from 'react-router-redux'

export function openCell(x, y, cb) {
    return (dispatch, getState) => {
        const {game, timer} = getState();
        if (y + 1  > game.board.length || x + 1> game.board[0].length || x < 0 || y < 0) {
            return;
        }
        const cell = game.board[y][x];
        if(game.oppened + 1 + game.mines >= game.board.length * game.board[0].length) {
            const result = Math.round((game.board.length * game.board[0].length / game.mines) * timer.value * 100);
            dispatch(actions.stopTimer());
            debugger
            dispatch(push('/end/' + result));
        }
        if (!cell.isOpened) {
            let minesArrouned = 0;
            for (var row = -1; row <= 1; row++) {
                for (var col = -1; col <= 1; col++) {
                    if (y - 0 + row >= 0 && x - 0 + col >= 0 && y - 0 + row < game.board.length && x - 0 + col < game.board[0].length && game.board[y - 0 + row][x - 0 + col].hasMine && !(row === 0 && col === 0)) {
                        minesArrouned++;
                    }
                }
            }
            if (minesArrouned !== 0) {
                dispatch(actions.receiveCell({
                    count: minesArrouned,
                    isOpened: true,
                    hasMine: cell.hasMine,
                    hasFlag: false
                }, x, y));
            } else {
                dispatch(actions.receiveCell({
                    count: minesArrouned,
                    isOpened: true,
                    hasMine: cell.hasMine,
                    hasFlag: false
                }, x, y));
                dispatch(actions.openCell(x - 1, y));
                dispatch(actions.openCell(x - 1, y + 1));
                dispatch(actions.openCell(x, y - 1));
                dispatch(actions.openCell(x + 1, y - 1));
                dispatch(actions.openCell(x - 1, y - 1));
                dispatch(actions.openCell(x + 1, y));
                dispatch(actions.openCell(x, y + 1));
                dispatch(actions.openCell(x + 1, y + 1));
            }
        }
    };
};