import { useRef } from "react"

class FormStore {
    constructor() {
        this.store = {}
        this.callbacks = {}
        this.fields = {}
    }

    registerField = (field) => {
        this.fields = {
            ...this.fields,
            ...field
        }
        return () => {
            const name = Object.keys(field)[0]
            if (name) {
                delete this.fields[name]
                delete this.store[name]
            }
        }
    }

    getFieldsValue = () => {
        return this.store
    }

    getFieldValue = (name) => {
        return this.store[name]
    }

    setFieldsValue = (store) => {
        this.store = {
            ...this.store,
            ...store
        }
        Object.keys(store).forEach(name => {
            this.fields[name].forceUpdate()
        })
    }

    setCallbacks = (cbs) => {
        this.callbacks = {
            ...this.callbacks,
            ...cbs
        }
    }

    validate = () => {
        let errors = []

        return errors
    }

    submit = () => {
        const { onFinish, onFinishFailed } = this.callbacks
        const errors = this.validate()
        if (errors.length) {
            onFinishFailed(errors)
        } else {
            onFinish(this.store)
        }
    }

    resetFields = () => {
        this.store = {}
        this.callbacks.onFinish(this.store)
        Object.keys(this.fields).forEach(key => {
            this.fields[key].forceUpdate()
        })
    }

    getForm = () => {
        return {
            getFieldValue: this.getFieldValue,
            getFieldsValue: this.getFieldsValue,
            setFieldsValue: this.setFieldsValue,
            submit: this.submit,
            setCallbacks: this.setCallbacks,
            registerField: this.registerField,
            resetFields: this.resetFields
        }
    }
}

function useForm(form) {
    const formRef = useRef(null)
    if (!formRef.current) {
        if (form) {
            formRef.current = form
        } else {
            const formInstance = new FormStore()
            formRef.current = formInstance.getForm()
        }
    }
    return [formRef.current]
}

export default useForm