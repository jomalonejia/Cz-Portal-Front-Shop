import React, { Component } from 'react'
import { Form, Icon, Input, Button, Checkbox } from 'antd'
import style from '../../styles/login.scss'

const FormItem = Form.Item

class NormalLoginForm extends React.Component {
  handleSubmit (e) {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values)
      }
    })
  }

  render () {
    const {getFieldDecorator} = this.props.form

    return (
      <div className={style.background}>
        <div className={style.dialog}>
          <div className={style.title}>
            <img src="src/images/img/smartisan_logo.png"/>
            <h4>
              使用Smartisan ID 登录在线商城
            </h4>
          </div>
          <div>
            <Form onSubmit={this.handleSubmit} className={style.loginForm}>
              <FormItem>
                {getFieldDecorator('userName', {
                  rules: [{required: true, message: 'Please input your username!'}],
                })(
                  <Input prefix={<Icon type="user" style={{fontSize: 13}}/>} placeholder="Username"/>
                )}
              </FormItem>
              <FormItem>
                {getFieldDecorator('password', {
                  rules: [{required: true, message: 'Please input your Password!'}],
                })(
                  <Input prefix={<Icon type="lock" style={{fontSize: 13}}/>} type="password" placeholder="Password"/>
                )}
              </FormItem>
              <FormItem>
                {getFieldDecorator('remember', {
                  valuePropName: 'checked',
                  initialValue: true,
                })(
                  <Checkbox>Remember me</Checkbox>
                )}
                <a className={style.loginFormForgot} href="">Forgot password</a>
                <Button type="primary" htmlType="submit" className={style.loginFormButton}>
                  Log in
                </Button>
                Or <a href="">register now!</a>
              </FormItem>
            </Form>
          </div>
        </div>
      </div>
    )
  }
}

const Login = Form.create()(NormalLoginForm)

export default Login