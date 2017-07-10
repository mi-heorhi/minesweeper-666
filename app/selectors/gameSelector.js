import {createSelector} from 'reselect'

export const gameSelector = createSelector(state => state.game, (game) => {
  return {game}
})