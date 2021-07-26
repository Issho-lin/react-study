import useForm from './useForm'
import FormContext from './context'
import { useImperativeHandle } from 'react'

const Form = ({ children, form, onFinish, onFinishFailed }, ref) =>  {
    const [formInstance] = useForm(form)

    useImperativeHandle(ref, () => formInstance)

    formInstance.setCallbacks({
        onFinish,
        onFinishFailed
    })

    return (
        <form
            onSubmit={
                e => {
                    e.preventDefault()
                    formInstance.submit()
                }
            }
            onReset={
                () => {
                    formInstance.resetFields()
                }
            }
        >
            <FormContext.Provider value={formInstance}>
                { children }
            </FormContext.Provider>
        </form>
    )
}
export default Form