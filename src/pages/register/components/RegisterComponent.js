import React, { Component } from 'react'
import { Button, Form} from 'semantic-ui-react'
import Ionicon  from 'react-ionicons'
import ErrorMessage from 'src/components/components/errorMessage'
import style from './register.scss'

class RegisterComponent extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      form: {
        firstName: '',
        lastName: '',
        username: '',
        password: '',
        email: ''
      },
      error: {
        firstNameError: false,
        lastNameError: false,
        usernameError: false,
        passwordError: false,
        emailError: false
      }
    }
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleInputChange (event) {
    const target = event.target
    const value = target.value
    const name = target.name
    if (name == 'firstName') {
      if (value.length < 2 || value.length > 10) {
        this.setState({error: {firstNameError: true}})
      } else {
        this.setState({error: {firstNameError: false}})
      }
    } else if (name == 'lastName') {
      if (value.length < 2 || value.length > 10) {
        this.setState({error: {lastNameError: true}})
      } else {
        this.setState({error: {lastNameError: false}})
      }
    } else if (name == 'username') {
      if (value.length < 5 || value.length > 20) {
        this.setState({error: {usernameError: true}})
      } else {
        this.setState({error: {usernameError: false}})
      }
    } else if (name == 'password') {
      if (value.length < 6 || value.length > 20) {
        this.setState({error: {passwordError: true}})
      } else {
        this.setState({error: {passwordError: false}})
      }
    }
    const form = this.state.form
    form[name] = value
    this.setState({form: form})
  }

  render () {

    const {register} = this.props

    return (
      <div className={style.background}>
        <div className={style.dialog}>
          <div className={style.title}>
            <img src="src/images/img/profile.jpg"/>
            <h4>
              赶紧注册吧~
            </h4>
          </div>
          <div>
            <Form className={style.loginForm}>
              <Form.Field>
                <label>First Name</label>
                <Form.Input placeholder="First Name"
                            name="firstName"
                            type="text"
                            value={this.state.form.firstName}
                            onChange={this.handleInputChange}
                            error={this.state.error.firstNameError}/>
                <ErrorMessage isError={this.state.error.firstNameError}
                              message="FirstName length must between 2 and 10"/>
              </Form.Field>
              <Form.Field>
                <label>Last Name</label>
                <Form.Input placeholder="Last Name"
                            name="lastName"
                            type="text"
                            value={this.state.form.lastName}
                            onChange={this.handleInputChange}
                            error={this.state.error.lastNameError}/>
                <ErrorMessage isError={this.state.error.lastNameError}
                              message="LastName length must between 2 and 10"/>
              </Form.Field>
              <Form.Field>
                <label>Username</label>
                <Form.Input placeholder="Username"
                            name="username"
                            type="text"
                            value={this.state.form.username}
                            onChange={this.handleInputChange}
                            error={this.state.error.usernameError}/>
                <ErrorMessage isError={this.state.error.usernameError}
                              message="Username length must between 5 and 20"/>
              </Form.Field>
              <Form.Field>
                <label>Password</label>
                <Form.Input placeholder="Password"
                            name="password"
                            type="password"
                            value={this.state.form.password}
                            onChange={this.handleInputChange}
                            error={this.state.error.passwordError}/>
                <ErrorMessage isError={this.state.error.passwordError}
                              message="Username length must between 6 and 20 and contains [.*?]"/>
              </Form.Field>
              <Form.Field>
                <label>Email</label>
                <Form.Input placeholder="Email"
                            name="email"
                            type="email"
                            value={this.state.form.email}
                            onChange={this.handleInputChange}/>
              </Form.Field>
              <Button className={style.submitButton}
                      size="big"
                      type="submit"
                      onClick={() => register(this.state.form)}>Sign Up</Button>
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

export default RegisterComponent