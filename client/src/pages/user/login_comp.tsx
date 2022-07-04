import React, { Component } from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import 'antd/lib/style/index.css';
import './login.less';

interface propsType {
  history: {
    push(url: string): void;
  };
}

interface stateType {
  [stateName: string]: any
}

class Login extends Component<propsType, stateType> {
  constructor(props: any) {
    super(props);
    this.state = {
      demo: 'demo',
      isRemember: false
    };
  }

  demo = 'demo';
  isRequire = false; // TODO: 方便调试,关闭必填项提示

  // 表单提交
  handleSubmit = (values) => {
    // console.log('callback >> ', values.remember);
    console.log(this.state.isRemember);
    // const { history } = this.props;
    // console.log(this, values);
    // console.log('Success:', values);
    // localStorage.token = 'login';
    // history.push('/table');
  };

  onFinishFailed = (errorInfo: any) => {
    console.log('failback >> ', errorInfo);
  };

  render() {
    console.log(this);
    return (
      <main className="login" ref="loginDialog">
        <Form
          onFinish={this.handleSubmit}
          onFinishFailed={this.onFinishFailed}
          className="login-form"
          initialValues={{ remember: true }}
          autoComplete="off"
        >
          <Form.Item
            name="account"
            rules={[
              {
                required: this.isRequire,
                message: '请输入账号'
              }
            ]}
          >
            <Input
              className="aaa"
              prefix={<UserOutlined className="site-form-item-icon" />}
              size="large"
              addonBefore="账号"
              placeholder="请输入账号"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: this.isRequire,
                message: '请输入密码'
              }
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              size="large"
              type="password"
              addonBefore="密码"
              placeholder="请输入密码"
            />
          </Form.Item>
          <article className="login-form-remember">
            <Form.Item name="remember" valuePropName="checked">
              <Checkbox checked={this.state.isRemember}>记住我的登录信息</Checkbox>
            </Form.Item>
            <a className="login-form-forgot" href="">
              忘记密码
            </a>
          </article>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button login-btn">
              登录
            </Button>
          </Form.Item>
        </Form>
      </main>
    );
  }
}

export default Login;
