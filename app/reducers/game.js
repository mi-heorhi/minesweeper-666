const initialState = {}

export default function (state = initialState, action) {
    switch (action.type) {
        case 'RECEIVE_BOARD':
            let {board} = action
            return Object.assign({}, state, {
                board: [...board]
            })
        case 'RECEIVE_CELL':
            const {cell, x, y} = action
            let boardState = state.board 
            boardState[y][x] = cell
            return Object.assign({}, state, {
                board: [...boardState]
            })
        default:
            return state
    }
}