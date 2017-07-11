import * as actions from './';

export function setFlag(x, y, cb) {
    return (dispatch, getState) => {
        const {game} = getState()
        if (y + 1 > game.board.length || x + 1 > game.board[0].length || x < 0 || y < 0) {
            return
        }
        const cell = game.board[y][x];
        dispatch(actions.receiveCell(Object.assign(cell, {
            hasFlag: !cell.hasFlag
        }), x, y));
    };
};
