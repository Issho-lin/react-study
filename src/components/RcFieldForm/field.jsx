import React from 'react'
import FormContext from './context'

class Field extends React.Component {
    static contextType = FormContext

    componentDidMount() {
        console.log(this.context);
        if (!this.props.name) {
            return
        }
        this.unRegisterField = this.context.registerField({
            [this.props.name]: this
        })
    }

    componentWillUnmount() {
        if (this.unRegisterField) {
            this.unRegisterField()
        }
    }

    render() {
        const { children, label, name } = this.props
        return (
            <div style={{ display: 'flex', margin: 10 }}>
                {
                    !!label && <span>{ label }：</span>
                }
                {
                    React.isValidElement(children) && React.cloneElement(children, {
                        value: this.context.getFieldValue(name),
                        onChange: ({ target }) => {
                            this.context.setFieldsValue({
                                [name]: target.value
                            })
                        }
                    })
                }
            </div>
        )
    }
}
export default Field