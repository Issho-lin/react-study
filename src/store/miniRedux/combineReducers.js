export default function combineReducers(reducers) {
    return (state = {}, action) => {
        let nextState = {}
        let hasChange = false
        for (const key in reducers) {
            const reducer = reducers[key]
            nextState[key] = reducer(state[key], action)
            hasChange = hasChange || nextState[key] !== state[key]
        }
        hasChange = hasChange || Object.keys(reducers).length !== Object.keys(state).length
        return hasChange ? nextState : state
    }
}