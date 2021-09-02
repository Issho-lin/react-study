import React, { useContext, useEffect, useReducer } from 'react'
import StoreContext from "./context"
import { bindActionCreators } from '../myRedux'

export default function connect(mapStateToProps, mapDispatchToProps) {
    return WrapComponent => props => {
        const [, forceUpdate] = useReducer(x => x + 1, 0)

        const store = useContext(StoreContext)

        const { getState, dispatch, subscribe } = store

        const mapStates = mapStateToProps && mapStateToProps(getState())

        let mapDispatch = { dispatch }

        if (typeof mapDispatchToProps === 'object') {
            mapDispatch = bindActionCreators(mapDispatchToProps, dispatch)
        } else if (typeof mapDispatchToProps === 'function') {
            mapDispatch = mapDispatchToProps(dispatch)
        }

        useEffect(() => {
            const unSubscribe = subscribe(() => {
                forceUpdate()
                console.log(123);
            })
            return () => {
                unSubscribe && unSubscribe()
            }
        }, [subscribe])

        return <WrapComponent {...props} {...mapStates} {...mapDispatch}/>
    }
}