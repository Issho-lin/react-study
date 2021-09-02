import React, { useEffect, useReducer, useRef } from 'react'
import store from '@/store'

const ReduxPage = () => {
    const [, forceUpdate] = useReducer(x => x + 1, 0)
    const letterCase = useRef(1)
    useEffect(() => {
        console.log(store.getState());
        store.subscribe(() => {
            forceUpdate()
        })
    }, [])
    return (
        <div>
            <button onClick={() => store.dispatch({ type: 'ADD' })}>ADD: { store.getState().countReducer }</button>
            <button onClick={() => store.dispatch({ type: 'MINUS' })}>MINUS: { store.getState().countReducer }</button>
            <button
                onClick={() => {
                    debugger;
                    store.dispatch((dispatch) => {
                        setTimeout(() => {
                            dispatch({ type: !!letterCase.current ? 'LOWERCASE' : 'UPPERCASE' })
                            letterCase.current = !letterCase.current
                        }, 1000);
                    })
                    // setTimeout(() => {
                    //     store.dispatch({ type: 'ADD' })
                    // }, 1000);
                }}
            >
                asyADD：{ store.getState().caseReducer }
            </button>
        </div>
    )
}
export default ReduxPage