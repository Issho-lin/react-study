export const thunk = ({ getState, dispatch }) => {
    return next => action => {
        console.log('thunk');
        if (typeof action === 'function') {
            return action(dispatch, getState)
        }
        return next(action)
    }
}

export const logger = () => {
    return next => action => {
        console.log('===', action.type);
        return next(action)
    }
}