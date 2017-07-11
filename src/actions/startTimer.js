import * as actions from './'

export function startTimer(cb) {
    return (dispatch, getState) => {
        const state = getState();
        let timer = () => {
            if (state.timer.status !== 'STOPED') {
                dispatch(actions.receiveTime(++state.timer.value));
                setTimeout(timer, 1000);
            }
        }
        timer();
    };
};