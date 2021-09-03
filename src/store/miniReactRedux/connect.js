import React, { useContext, useEffect, useReducer } from 'react'
import StoreContext from './context'
import { bindActionCreators } from '../miniRedux'

export default function connect (mapStateToProps, mapDispatchToProps) {
    return WrapComponent => props => {
        const [, forceUpdate] = useReducer(x => x + 1,  0)
        const store = useContext(StoreContext)
        const { getState, dispatch, subscribe } = store
        const state = getState()
        let mapStates = {}
        if (typeof mapStateToProps === 'function') {
            mapStates = mapStateToProps(state)
        }
        let mapDispatch = { dispatch }
        if (typeof mapDispatchToProps === 'function') {
            mapDispatch = mapDispatchToProps(dispatch)
        } else if (typeof mapDispatchToProps === 'object') {
            mapDispatch = bindActionCreators(mapDispatchToProps, dispatch)
        }

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

        return <WrapComponent {...props} {...mapStates} {...mapDispatch}/>
    }
}