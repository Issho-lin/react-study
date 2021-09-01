export default function applyMiddleware(...middlewares) {
    return createStore => reducer => {
        let store = createStore(reducer)
        let { dispatch, getState } = store
        const midApi = {
            getState,
            // 拷贝一个最初始的dispatch方法
            dispatch: (...arg) => dispatch(...arg)
        }
        const middlewareChain = middlewares.map(middleware => middleware(midApi))
        dispatch = compose(...middlewareChain)(dispatch)
        return {
            ...store,
            dispatch
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