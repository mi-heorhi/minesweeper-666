import * as actions from './'

export function initGame(level, cb) {
    return (dispatch, getState) => {
        let mineNum = 0;
        let rowNum = 0;
        let colNum = 0;
        let board = [];
        if (level === 'easy') {
            mineNum = 10;
            rowNum = 10;
            colNum = 10;
        } else if (level === 'normal') {
            mineNum = 40;
            rowNum = 16;
            colNum = 16;
        } else if (level === 'hard') {
            mineNum = 100;
            rowNum = 16;
            colNum = 30;
        } else if(level === 'lucky') {
            mineNum = 1;
            rowNum = 2;
            colNum = 2;
        }
        for (let row = 0; row < rowNum; row++) {
            board.push([]);
            for (var col = 0; col < colNum; col++) {
                board[row].push({count: 0, isOpened: false, hasMine: false, hasFlag: false});
            }
        }
        for (let mine = 0; mine < mineNum; mine++) {
            let cell = board[Math.floor(Math.random() * rowNum)][Math.floor(Math.random() * colNum)];
            if (cell.hasMine) {
                mine--;
            } else {
                cell.hasMine = true;
            }
        }
        dispatch(actions.receiveBoard(board, mineNum));
    };
};