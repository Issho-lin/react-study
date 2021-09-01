import React, { useEffect, useReducer } from 'react'
import store from '@/store'

const ReduxPage = () => {
    const [, forceUpdate] = useReducer(x => x + 1, 0)
    useEffect(() => {
        console.log(store);
        store.subscribe(() => {
            forceUpdate()
        })
    }, [])
    return (
        <div>
            <button onClick={() => store.dispatch({ type: 'ADD' })}>ADD: { store.getState() }</button>
            <button onClick={() => store.dispatch({ type: 'MINUS' })}>MINUS: { store.getState() }</button>
        </div>
    )
}
export default ReduxPage