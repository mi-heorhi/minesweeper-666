export function receiveCell(cell, x, y) {
    return {type: 'RECEIVE_CELL', cell, x, y}
}