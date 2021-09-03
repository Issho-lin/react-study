import React, { useEffect, useRef } from 'react'
import { Button } from 'antd'
// import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux'
import { connect } from '@/store/myReactRedux'
import { bindActionCreators } from '@/store/myRedux'
// import { connect } from '@/store/miniReactRedux'
// import { bindActionCreators } from '@/store/miniRedux'

const ReactReduxPage = (props) => {
    const letterCase = useRef(1)
    useEffect(() => {
        console.log(props);
    }, [props])
    return (
        <div>
            <Button onClick={props.add}>ADD: { props.countReducer }</Button>
            <Button onClick={props.minus}>MINUS: {props.countReducer }</Button>
            <Button
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
            </Button>
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