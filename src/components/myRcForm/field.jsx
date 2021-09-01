// import React, { useEffect, useReducer } from 'react'
// import FormContext from './context'

// const Field = ({ children, label, name, rules }) => {
//     const context = React.useContext(FormContext)
//     const [, forceUpdate] = useReducer(x => x + 1, 0)
//     useEffect(() => {
//         if (!name) {
//             return
//         }
//         const unRegisterField = context.registerField({
//             [name]: {
//                 forceUpdate
//             }
//         })
//         return () => {
//             unRegisterField()
//         }
//     }, [context, name])
//     return (
//         <div style={{ display: 'flex', margin: 10 }}>
//             {
//                 !!label && <span>{ label }：</span>
//             }
//             {
//                 React.isValidElement(children) && React.cloneElement(children, {
//                     value: context.getFieldValue(name),
//                     onChange: e => {
//                         context.setFieldsValue({
//                             [name]: e.target.value
//                         })
//                     }
//                 })
//             }
//         </div>
//     )
// }
// export default Field

import React from 'react'
import FormContext from './context'

class Field extends React.Component {
    static contextType = FormContext 
    componentDidMount() {
        const { name } = this.props
        if (!name) {
            return
        }
        this.unRegisterField = this.context.registerField({
            [name]: this
        })
    }
    componentWillUnmount() {
        if (this.unRegisterField) {
            this.unRegisterField()
        }
    }
    render() {
        const { label, children, name } = this.props
        return (
            <div style={{ display: 'flex', margin: 10 }}>
                {
                    !!label && <span>{ label }：</span>
                }
                {
                    React.isValidElement(children) && React.cloneElement(children, {
                        value: this.context.getFieldValue(name),
                        onChange: e => {
                            this.context.setFieldsValue({
                                [name]: e.target.value
                            })
                        }
                    })
                }
            </div>
        )
    }
}

export default Field