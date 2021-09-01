export default function applyMiddleware(...middlewares) {
    return (createStore) => {
        return (reducer) => {
            const store = createStore(reducer)
            let { dispatch, getState } = store
            const midApi = {
                getState,
                dispatch: (action, ...args) => dispatch(action, ...args)
            }
            const middlewareChain = middlewares.map(middleware => middleware(midApi))
            dispatch = compose(...middlewareChain)(dispatch)
            return {
                ...store,
                dispatch
            }
        }
    }
}

function compose(...funcs) {
    if (funcs.length === 0) {
        return arg => arg
    }
    if (funcs.length === 1) {
        return funcs[0]
    }
    return funcs.reduce((a, b) => (...args) => a(b(...args)))
}