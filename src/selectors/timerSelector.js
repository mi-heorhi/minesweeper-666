import { createSelector } from 'reselect';

export const timerSelector = createSelector(state => state.timer, (timer) => {
  return { timer };
});
