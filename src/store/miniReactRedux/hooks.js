import { useContext, useEffect, useReducer } from 'react'
import StoreContext from "./context"

export const useStore = () => {
    const store = useContext(StoreContext)
    return store
}

export const useSelector = (selector) => {
    const [, forceUpdate] = useReducer(x => x + 1, 0)
    const store = useStore()
    const state = selector(store.getState())
    useEffect(() => {
        return store.subscribe(forceUpdate)
    }, [store])
    return state
}

export const useDispatch = () => {
    const store = useStore()
    return store.dispatch
}