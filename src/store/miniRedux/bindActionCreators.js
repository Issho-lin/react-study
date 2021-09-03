export default function bindActionCreators (creators, dispatch) {
    const dispatchs = {}
    for (const key in creators) {
        const action = creators[key]()
        dispatchs[key] = (...args) => dispatch(action, ...args)
    }
    return dispatchs
}