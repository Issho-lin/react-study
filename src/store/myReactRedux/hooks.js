import { useContext, useEffect, useReducer } from 'react'
import StoreContext from './context'

export const useStore = () => {
    const store = useContext(StoreContext)
    return store
}

export const useSelector = (selector) => {
    const [, forceUpdate] = useReducer(x => x + 1, 0)
    const { getState, subscribe } = useStore()
    const state = selector(getState())
    useEffect(() => {
        const unSubscribe = subscribe(() => {
            forceUpdate()
        })
        return () => {
            if (unSubscribe) {
                unSubscribe()
            }
        }
    }, [subscribe])
    return state
}

export const useDispatch = () => {
    const { dispatch } = useStore()
    return dispatch
}