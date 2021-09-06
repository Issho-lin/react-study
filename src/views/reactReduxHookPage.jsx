// import React, { useEffect, useReducer } from 'react'
// // import { useSelector, useDispatch, useStore } from 'react-redux'
// // import { useStore } from '@/store/miniReactRedux'
// import { useStore } from '@/store/myReactRedux'

// const ReactReduxHookPage = () => {
//     const store = useStore()
//     const [, forceUpdate] = useReducer(x => x + 1, 0)
//     useEffect(() => {
//         const unSubscribe = store.subscribe(forceUpdate)
//         return () => {
//             unSubscribe()
//         }
//     }, [store])
//     return (
//         <button onClick={() =>store.dispatch({type: 'ADD'})}>HooksAdd: { store.getState().countReducer }</button>
//     )
// }
// export default ReactReduxHookPage

import React from 'react'
// import { useSelector, useDispatch } from 'react-redux'
// import { useSelector, useDispatch } from '@/store/miniReactRedux'
import { useSelector, useDispatch } from '@/store/myReactRedux'

const ReactReduxHookPage = (props) => {
    console.log(props);
    const store = useSelector((state) => state)
    const dispatch = useDispatch()
    return (
        <button onClick={() =>dispatch({type: 'ADD'})}>HooksAdd: { store.countReducer } - { props.match?.params?.id }</button>
    )
}
export default ReactReduxHookPage