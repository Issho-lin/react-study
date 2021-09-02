export default function createStore(reducer, enhancer) {
    if (enhancer) {
        return enhancer(createStore)(reducer)
    }
    let state = reducer(undefined, {type: 'xxxxxxx'})
    let callbacks = []
    return {
        getState: () => {
            return state
        },
        dispatch: (action) => {
            console.log('dispatch');
            state = reducer(state, action)
            callbacks.forEach(cb => cb())
            return action
        },
        subscribe: (cb) => {
            callbacks.push(cb)
            return () => {
                callbacks = []
            }
        }
    }
}