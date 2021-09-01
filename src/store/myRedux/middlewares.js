export function thunk({getState, dispatch}) {
    // 接收一个dispatch
    return next => {
        // 返回一个新的dispatch
        return action => {
            console.log('thunk');
            if (typeof action === 'function') {
                // 提交异步操作时，dispatch一个接收getStats和初始dispatch方法的函数
                return action(dispatch, getState)
            }
            return next(action)
        }
    }
}

export function logger({ getState, dispatch }) {
    return next => {
        return action => {
            console.log('logger', action.type);
            return next(action)
        }
    }
}