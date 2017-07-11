const initialState = {
    value: 0,
    status: 'STARTED'
};

export default function (state = initialState, action) {
    switch (action.type) {
        case 'RECEIVE_TIME':
            const {time} = action;
            return Object.assign({}, state, {
                value: time
            });
        case 'STOP':
            return Object.assign(state, {status: 'STOPED'});
        default:
            return state;
    }
};
