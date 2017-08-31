import React,{Component} from 'react'
import {withRouter} from 'react-router-dom'
import {Link } from 'react-router-dom'
import { Dropdown,Checkbox,Button,Form} from 'semantic-ui-react'
//import 'semantic-ui-css/semantic.css'
import 'semantic-ui-css/components/dropdown.css'
import 'semantic-ui-css/components/search.css'
import 'semantic-ui-css/components/menu.css'
import 'semantic-ui-css/components/checkbox.css'
import 'semantic-ui-css/components/button.css'
import 'semantic-ui-css/components/form.css'
import style from './address.scss'



class Address extends Component{

  render () {
    const test = [
      { key: 'zm', value: 'zm', flag: 'zm', text: 'Zambia' },
      { key: 'zw', value: 'zw', flag: 'zw', text: 'Zimbabwe' }
    ]
    return (
      <div className={style.main}>
        <div className={style.wrapper}>
          <div className={style.title}>
            <h2>收货信息</h2>
          </div>
          <div className={style.inner}>
            <div className={style.formArea}>
              <Form>
                <Form.Group widths='equal'>
                  <Form.Input label='First name' placeholder='First name' error />
                  <Form.Input label='Last name' placeholder='Last name' />
                </Form.Group>
                <Form.Field>
                  <input placeholder='Phone number' />
                </Form.Field>
                <Form.Field>
                  <Checkbox label='I agree to the Terms and Conditions' />
                </Form.Field>
                <Button type='submit'>Submit</Button>
              </Form>
            </div>
            {/*<div className={style.orderEmpty}>
              <h2>您目前还没有此类订单</h2>
              <div className={style.emptyBtn}>
                <Link  to="/" >
                  返回首页
                </Link>
              </div>
            </div>*/}
          </div>

        </div>
      </div>
    )
  }
}

export default withRouter(Address)
