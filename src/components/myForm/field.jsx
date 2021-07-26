// import { useContext, cloneElement, useReducer, useEffect } from 'react'
// import FormContext from './context'

// const Field = ({ children, name, label }) => {
//     const context = useContext(FormContext)
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
//         console.log('2222');
//         return () => {
//             unRegisterField()
//         }
//     }, [context, name])

//     return (
//         <div style={{ display: 'flex' }}>
//             {
//                 label && <span style={{ width: 80 }}>{label}：</span>
//             }
//             {
//                 cloneElement(children, {
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

import { Component, cloneElement } from 'react'
import FormContext from './context'

class Field extends Component {
    static contextType = FormContext

    componentDidMount() {
        if (this.props.name) {
            this.unRegisterField = this.context.registerField({
                [this.props.name]: this
            })
        }
    }

    componentWillUnmount() {
        this.unRegisterField()
    }

    render() {
        const { label, children, name } = this.props
        return (
            <div style={{ display: 'flex' }}>
                {
                    label && <span style={{ width: 80 }}>{label}：</span>
                }
                {
                    cloneElement(children, {
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