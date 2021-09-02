export default function bindActionCreators(creators, dispatch) {
    const actionDispatcher = {}
    for (const key in creators) {
        // 执行creator获取action，包装成dispatch
        actionDispatcher[key] = (...args) => dispatch(creators[key](...args))
    }
    console.log(actionDispatcher);
    return actionDispatcher
}