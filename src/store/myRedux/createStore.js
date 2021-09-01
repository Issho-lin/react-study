export default function createStore(reducer) {
    let state = reducer(undefined, {type: 'xxxxxxx'})
    let callbacks = []
    return {
        getState: () => {
            return state
        },
        dispatch: (action) => {
            state = reducer(state, action)
            callbacks.forEach(cb => cb())
        },
        subscribe: (cb) => {
            callbacks.push(cb)
        }
    }
}