import { forwardRef } from 'react'
import _Form from './form'
import Field from './field'
import useForm from './useForm'

const Form = forwardRef(_Form)
Form.Item = Field
Form.useForm = useForm


export default Form