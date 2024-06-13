import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../shared/Store/store';
import { login, logout } from '../shared/Store/signInSlice';
import "./style.css";
import type { FormProps } from 'antd';
import { Button, Card, Checkbox, Form, Input, Space } from 'antd';
import background from '../../public/labs-medical-lab.jpg';
import { url } from 'inspector';

type FieldType = {
    username?: string;
    AccessToken?: string;
    remember?: string;
};

const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
    
    console.log('Success:', values);
};

const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
    console.log('Failed:', errorInfo);
};

interface ISignin{
    clickLogin:any
}
export default function SignIn({clickLogin}:ISignin) {
    const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);
  const username = useSelector((state: RootState) => state.auth.username);
  const dispatch: AppDispatch = useDispatch();


    const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
        clickLogin();
        let username="sample.com"
        dispatch(login(username));
        console.log('Success:', values);
    };
    const handleLogout = () => {
        dispatch(logout());
      };
    return (
        <>
            <div style={{width:"100%",height:"100vh", display: 'flex', justifyContent: 'center', alignItems: 'center',  backgroundImage: `url('/labs-medical-lab.jpg')`, backgroundSize: 'cover',
        backgroundPosition: 'center',}}>
                <Card className='card-blur' style={{ width: 400, }}>
                    <Form
                        name="basic"
                        labelCol={{ span: 8 }}
                        wrapperCol={{ span: 16 }}
                        style={{ maxWidth: 600 }}
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                    >
                        <Form.Item<FieldType>
                            label="Username"
                            name="username"
                            rules={[{ required: true, message: 'Please input your username!' }]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item<FieldType>
                            label="Access Token"
                            name="AccessToken"
                            rules={[{ required: true, message: 'Please input your Access Token!' }]}
                        >
                            <Input.Password />
                        </Form.Item>

                        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                            <Button type="primary" htmlType="submit">
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>
                </Card>

            </div>
            

            

        </>
    );
}