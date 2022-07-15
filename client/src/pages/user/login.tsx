import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Form, Input, Button, Checkbox } from 'antd';
import 'antd/lib/style/index.css';
import './login.less';

const Login: React.FC = () => {
  const [rememberStatus, setRememberStatus] = useState(false);
  const [isRequire] = useState(true);
  const history = useHistory();

  const onFinish = (values: any) => {
    const params = {
      ...values,
      rememberStatus
    };
    console.log('用户登录信息::::', params);
    if (params?.account === 'admin' && params?.password === 'admin') {
      history.push('/edit');
    }
  };

  const toggleRememberStatus = (e: { target: { checked: boolean } }) => {
    console.log(e);
    setRememberStatus(e.target.checked);
  };

  return (
    <main className="login">
      <div className="login-dialog">
        <Form
          className="login-form"
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 20 }}
          onFinish={onFinish}
          autoComplete="off"
        >
          <Form.Item
            label="账号"
            name="account"
            rules={[{ required: isRequire, message: '请输入账号!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="密码"
            name="password"
            rules={[{ required: isRequire, message: '请输入密码!' }]}
          >
            <Input.Password />
          </Form.Item>
          <article className="login-form-remember">
            <span className="remember-me">
              <Form.Item>
                <Checkbox checked={rememberStatus} onChange={toggleRememberStatus}>
                  记住我的登录信息
                </Checkbox>
              </Form.Item>
            </span>
            <a className="login-form-forgot" href="">
              忘记密码
            </a>
          </article>
          <Form.Item wrapperCol={{ span: 24 }}>
            <Button type="primary" htmlType="submit" className="login-form-button login-btn">
              登录
            </Button>
          </Form.Item>
        </Form>
      </div>
    </main>
  );
};

export default Login;
