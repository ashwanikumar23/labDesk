import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../shared/Store/store';
import { login, logout } from '../shared/Store/signInSlice';
import "./style.css";
import type { FormProps } from 'antd';
import { Button, Card, Checkbox, Form, Input, Space } from 'antd';
import background from './assets/medi.jpg';
import { url } from 'inspector';
import Cookies from 'js-cookie';

const userSign = [{
    username: 'admin',
    AccessToken: 'admin123'
},
{
    username: 'lab@Test',
    AccessToken: 'Test@AccessToken'
}];
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

interface ISignin {
    clickLogin: any
}
export default function SignIn({ clickLogin }: ISignin) {
    const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);
    const username = useSelector((state: RootState) => state.auth.username);
    const dispatch: AppDispatch = useDispatch();


    const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
        let username = values.username;
        const AccessToken = values.AccessToken;
        if(username && AccessToken && userValidation(username,AccessToken) ){
            clickLogin(true);
            const token = generateToken();
            const expireTime = new Date(new Date().getTime() + 5 * 60 * 60 * 1000); // Token expires in 5 hour
    
            Cookies.set('authToken', token + " " + username, { expires: expireTime });
    
            dispatch(login(username));
           
        }




    };
    const generateToken = () => {
        // Simple token generation. Replace with a more secure method in a real application.
        return Math.random().toString(36).substr(2);
    };
    const handleLogout = () => {
        dispatch(logout());
    };
    useEffect(() => {
        const token = Cookies.get('authToken');
        if (token) {
            const tokenExpiry = Cookies.get('authTokenExpiry');
            if (tokenExpiry) {
                if (new Date(tokenExpiry) > new Date()) {
                    // Token is valid
                    console.log('Token is valid');
                } else {
                    // Token is expired
                    dispatch(logout());
                }

            }
        } else {
            // No token found
            dispatch(logout());
        }
    }, []);

    const userValidation = (username: string, access: string): boolean => {
        const user = userSign.find(item => item.username.toLowerCase() == username.toLowerCase());
        return user?.AccessToken === access;

    }
    return (
        <>
            <div style={{
                width: "100%", height: "100vh", display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundImage: `url('${background}')`, backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}>
                <Card className='card-blur' style={{ width: 400, border: '1px solid #12346d' }}>
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
                            <Button type="primary" htmlType="submit" style={{ width: "100%" }}>
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>
                </Card>

            </div>




        </>
    );
}