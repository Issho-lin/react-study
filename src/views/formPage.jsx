// import { Input, Button } from 'antd'
// import { useCallback, useEffect } from 'react'
// // import Form from '@/components/myForm'
// import Form from '@/components/myRcForm'

// const FormPage = () => {
//     const [form] = Form.useForm()
//     const onFinish = useCallback(values => {
//         console.log(values);
//     }, [])
//     const onFinishFailed = useCallback(errs => {
//         console.log(errs);
//     }, [])
//     useEffect(() => {
//         form.setFieldsValue({
//             username: 'lin'
//         })
//     }, [form])
//     return (
//         <Form form={form} onFinish={onFinish} onFinishFailed={onFinishFailed}>
//             <Form.Item label="usename" name="username" rules={[{ required: true, message: 'Please input your username!' }]}>
//                 <Input/>
//             </Form.Item>
//             <Form.Item label="password" name="password" rules={[{ required: true, message: 'Please input your password!' }]}>
//                 <Input/>
//             </Form.Item>
//             <Form.Item>
//                 <>
//                     <Button htmlType="reset">Reset</Button>
//                     <Button type="primary" htmlType="submit">Submit</Button>
//                 </>
//             </Form.Item>
//         </Form>
//     )
// }
// export default FormPage

import { Component } from 'react'
import { Input, Button } from 'antd'
// import Form from '@/components/myForm'
// import Form from '@/components/myRcForm'
import Form from '@/components/RcFieldForm'
class FormPage extends Component {

    componentDidMount() {
        this.form.setFieldsValue({
            username: 'lin'
        })
    }
    
    onFinish = (values) => {
        console.log(values);
    }
    onFinishFailed = (errors) => {
        console.log(errors);
    }
    render() {
        return (
            <Form ref={el => this.form = el} onFinish={this.onFinish} onFinishFailed={this.onFinishFailed}>
                <Form.Item label="usename" name="username" rules={[{ required: true, message: 'Please input your username!' }]}>
                    <Input/>
                </Form.Item>
                <Form.Item label="password" name="password" rules={[{ required: true, message: 'Please input your password!' }]}>
                    <Input/>
                </Form.Item>
                <Form.Item>
                    <>
                        <Button htmlType="reset">Reset</Button>
                        <Button type="primary" htmlType="submit">Submit</Button>
                    </>
                </Form.Item>
            </Form>
        )
    }
}

export default FormPage