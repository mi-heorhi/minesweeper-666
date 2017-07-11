const initialState = {}

export default function (state = initialState, action) {
    switch (action.type) {
        case 'RECEIVE_BOARD':
            let {board, mines} = action;
            return Object.assign({}, state, {
                board: [...board],
                mines: mines,
                oppened: 0
            });
        case 'RECEIVE_CELL':
            const {cell, x, y} = action;
            let boardState = state.board; 
            boardState[y][x] = cell;
            return Object.assign({}, state, {
                board: [...boardState],
                oppened: ++state.oppened
            });
        default:
            return state;
    }
}