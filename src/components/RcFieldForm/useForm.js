import { useRef } from "react"

class FormStore {
    constructor() {
        this.state = {}
        this.callbacks = {}
        this.fields = {}
    }
    getFieldValue = (name) => {
        return this.state[name]
    }
    getFieldsValue = () => {
        return this.state
    }
    setFieldsValue = (state) => {
        this.state = {
            ...this.state,
            ...state,
        }
        if (typeof state !== 'object' || state === null) {
            return
        }
        Object.keys(state).forEach(fieldName => {
            const field = this.fields[fieldName]
            if (field) {
                field.forceUpdate()
            }
        })
    }
    resetFields = () => {
        this.state = {}
        Object.keys(this.fields).forEach(fieldName => {
            const field = this.fields[fieldName]
            if (field) {
                field.forceUpdate()
            }
        })
    }
    valid = () => {
        const errors = []

        return errors
    }
    submit = () => {
        const { onFinish, onFinishFailed } = this.callbacks
        const errors = this.valid()
        if (errors && onFinish) {
            onFinish(this.state)
        } else if (onFinishFailed) {
            onFinishFailed(errors)
        }
    }
    setCallbacks = (cbs) => {
        this.callbacks = {
            ...this.callbacks,
            ...cbs
        }
    }
    registerField = (fields) => {
        this.fields = {
            ...this.fields,
            ...fields
        }
    }

    getForm = () => {
        return {
            getFieldValue: this.getFieldValue,
            getFieldsValue: this.getFieldsValue,
            setFieldsValue: this.setFieldsValue,
            resetFields: this.resetFields,
            submit: this.submit,
            setCallbacks: this.setCallbacks,
            registerField: this.registerField
        }
    }
}

export default function useForm(form) {
    const formInstance = useRef(null)
    if (!formInstance.current) {
        if (form) {
            formInstance.current = form
        } else {
            const store = new FormStore()
            formInstance.current = store.getForm()
        }
    }
    return [formInstance.current]
}