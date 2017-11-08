import React, { Component } from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import Ionicon  from 'react-ionicons'
import style from './login.scss'

class Login extends React.Component {

  render () {

    return (
      <div className={style.background}>
        <div className={style.dialog}>
          <div className={style.title}>
            <img src="src/images/img/profile.jpg"/>
            <h4>
              使用Smartisan ID 登录在线商城
            </h4>
          </div>
          <div>
            <Form onSubmit={this.handleSubmit} className={style.loginForm}>
              <Form.Field>
                <label>First Name</label>
                <input placeholder="First Name"/>
              </Form.Field>
              <Form.Field>
                <label>Last Name</label>
                <input placeholder="Last Name"/>
              </Form.Field>
              <Form.Field>
                <Checkbox label="remember me"/>
                <span className={style.signUp}>
                New User? <Link to="/">Sign up now »</Link>
              </span>
              </Form.Field>
              <Button className={style.submitButton} size="big" type="submit">Submit</Button>
              {/*<label>
               Name:
               <input type="text" name="name" />
               </label>
               <input type="submit" value="Submit" />
               <label>
               Name:
               <input type="text" name="name" />
               </label>
               <input type="submit" value="Submit" />
               <label>
               Name:
               <input type="text" name="name" />
               </label>
               <input type="submit" value="Submit" />
               <FormItem>
               {getFieldDecorator('userName', {
               rules: [{required: true, message: 'Please input your username!'}],
               })(
               <Input size="large" prefix={<Icon type="user" style={{fontSize: 13}}/>} placeholder="Username"/>
               )}
               </FormItem>
               <FormItem>
               {getFieldDecorator('password', {
               rules: [{required: true, message: 'Please input your Password!'}],
               })(
               <Input size="large" prefix={<Icon type="lock" style={{fontSize: 13}}/>} type="password"
               placeholder="Password"/>
               )}
               </FormItem>
               <FormItem>
               <Button type="primary" size="large" htmlType="submit" className={style.loginFormButton}>
               Log in
               </Button>
               {getFieldDecorator('remember', {
               valuePropName: 'checked',
               initialValue: true,
               })(
               <Checkbox className={style.rememberMe}>Remember me</Checkbox>
               )}
               <Link to="/"><span className={style.label}>Forgot password?</span></Link>
               </FormItem>
               <div >
               New to Twitter? <Link to="/">Sign up now »</Link>
               </div>*/}
            </Form>
          </div>
          <div className={style.footer}>
            <div className={style.footerWrapper}>
              <ul>
                <li><a href="https://github.com/jomalonejia"><Ionicon icon="ion-social-github" color="#FEA794"/></a>
                </li>
                <li><a href="https://www.google.com"><Ionicon icon="ion-social-google" color="#FEA794"/></a></li>
                <li><a href="https://www.facebook.com"><Ionicon icon="ion-social-facebook" color="#FEA794"/></a></li>
                <li><a href="https://www.facebook.com"><Ionicon icon="ion-social-facebook" color="#FEA794"/></a></li>
                <li><a href="https://www.twitter.com"><Ionicon icon="ion-social-twitter" color="#FEA794"/></a></li>
                <li><a href="https://www.twitch.com"><Ionicon icon="ion-social-twitch" color="#FEA794"/></a></li>
                <li><a href="https://www.reddit.com"><Ionicon icon="ion-social-reddit" color="#FEA794"/></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Login