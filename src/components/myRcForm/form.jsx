import React, { useEffect, useImperativeHandle, forwardRef } from 'react'
import useForm from './useForm'
import FormContext from './context'

const Form = ({ children, onFinish, onFinishFailed, form }, ref) => {
    const [formInstance] = useForm(form)
    useImperativeHandle(ref, () => formInstance)
    useEffect(() => {
        formInstance.setCallbacks({
            onFinish,
            onFinishFailed
        })
    }, [formInstance, onFinish, onFinishFailed])
    return (
        <form
            onSubmit={e => {
                e.preventDefault()
                formInstance.submit()
            }}
            onReset={() => {
                formInstance.resetFields()
            }}
        >
            <FormContext.Provider value={formInstance}>
                { children }
            </FormContext.Provider>
        </form>
    )
}
export default forwardRef(Form)