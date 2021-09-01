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
            ...state
        }
        const fieldsNames = Object.keys(state)
        fieldsNames.forEach(fieldName => {
            console.log(fieldName, this.fields);
            if (this.fields[fieldName]) {
                this.fields[fieldName].forceUpdate()
            }
        })
    }
    resetFields = () => {
        this.state = {}
        Object.keys(this.fields).forEach(fieldName => {
            this.fields[fieldName].forceUpdate()
        })
    }
    validate = () => {
        const errors = []

        return errors
    }
    submit = () => {
        // console.log(this.state);
        const { onFinish, onFinishFailed } = this.callbacks
        const errors = this.validate()
        if (errors.length > 0) {
            onFinishFailed(errors)
        } else {
            onFinish(this.state)
        }
    }
    setCallbacks = (cbs) => {
        this.callbacks = {
            ...this.callbacks,
            ...cbs
        }
    }
    registerField = (field) => {
        this.fields = {
            ...this.fields,
            ...field
        }
        console.log(field);
        return () => {
            const name = Object.keys(field)[0]
            if (name) {
                delete this.fields[name]
                delete this.state[name]
            }
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