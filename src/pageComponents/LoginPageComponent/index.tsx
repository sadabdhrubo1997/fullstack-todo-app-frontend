import { FC } from 'react';
import { Button, Form, Input } from 'antd';

import { MainWrapper, Heading, FormWrapper, Error } from './Styles';

const LoginPageComponent: FC = () => {
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <>
      <MainWrapper>
        <FormWrapper>
          <Heading>Login</Heading>{' '}
          <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 18 }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label="Email"
              name="Email"
              rules={[{ required: true, message: 'Please input your email!' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                { required: true, message: 'Please input your password!' },
              ]}
            >
              <Input.Password />
            </Form.Item>
            {/* <Error>something</Error> */}

            <Form.Item wrapperCol={{ offset: 8, span: 8 }}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </FormWrapper>
      </MainWrapper>
    </>
  );
};

export default LoginPageComponent;
