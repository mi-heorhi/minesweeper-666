import * as actions from './';

export function showResult(level, cb) {
    return (dispatch, getState) => {
        const {game} = getState();
        const board = game.board.map((row, lineNum) => {
            return row.map((cell, cellNum) => {
                dispatch(actions.openCell(lineNum, cellNum));
            });
        });
    };
};
