export default function createStore(reducer, enhancer) {
    if (enhancer) {
        return enhancer(createStore)(reducer)
    }
    let state = reducer(undefined, { type: `${new Date().getTime()}` })
    const listener = []
    return {
        getState: () => {
            return state
        },
        dispatch: (action) => {
            state = reducer(state, action)
            listener.forEach(cb => cb())
            return action
        },
        subscribe(cb) {
            listener.push(cb)
        }
    }
}