import React, { useEffect, useRef } from 'react'
// import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux'
import { connect } from '@/store/myReactRedux'
import { bindActionCreators } from '@/store/myRedux'

const ReactReduxPage = (props) => {
    const letterCase = useRef(1)
    useEffect(() => {
        console.log(props);
    }, [props])
    return (
        <div>
            <button onClick={props.add}>ADD: { props.countReducer }</button>
            <button onClick={props.minus}>MINUS: {props.countReducer }</button>
            <button
                onClick={() => {
                    props.dispatch((dispatch) => {
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
                asyADD：{ props.caseReducer }
            </button>
        </div>
    )
}
const mapStateToProps = state => {
    return state
}
// const mapDispatchToProps = {
//     add: () => ({ type: 'ADD' }),
//     minus: () => ({ type: 'MINUS' })
// }
// const mapDispatchToProps = dispatch => {
//     return {
//         add: () => dispatch({ type: 'ADD' }),
//         minus: () => dispatch({ type: 'MINUS' }),
//     }
// }
const mapDispatchToProps = dispatch => {
    let creators = bindActionCreators({
        add: () => ({ type: 'ADD' }),
        minus: () => ({ type: 'MINUS' })
    }, dispatch)
    return {
        ...creators,
        dispatch
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ReactReduxPage)