export function receiveBoard(board, mines) {
    return {type: 'RECEIVE_BOARD', board, mines}
}