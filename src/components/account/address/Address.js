import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { Dropdown, Button, Form, Icon, Modal } from 'semantic-ui-react'

import 'semantic-ui-css/components/icon.css'
import 'semantic-ui-css/components/dropdown.css'
import 'semantic-ui-css/components/checkbox.css'
import 'semantic-ui-css/components/button.css'
import 'semantic-ui-css/components/form.css'
import 'semantic-ui-css/components/transition.css'
import 'semantic-ui-css/components/reset.css'
import 'semantic-ui-css/components/input.css'
import 'semantic-ui-css/components/modal.css'

import style from './address.scss'

class Address extends Component {

  constructor (props) {
    super(props)
  }

  render () {
    const test = [
      {key: 'zm', value: 'zm', flag: 'zm', text: 'Zambia'},
      {key: 'zw', value: 'zw', flag: 'zw', text: 'Zimbabwe'}
    ]

    const {addresses} = this.props

    return (
      <div className={style.main}>
        <div className={style.wrapper}>
          <div className={style.title}>
            <h2>收货信息</h2>
            <span className={style.addAddress}>
              <Modal size='tiny'
                     style={{width: '450px', borderRadius: '15px'}}
                     closeIcon={
                       <div className={style.closeIcon}>
                         <Icon name='close' color='grey' size='large'/>
                       </div>}
                     trigger={<Button fluid animated='vertical'>
                       <Button.Content hidden className={style.addAddressContent}>Add address</Button.Content>
                       <Button.Content visible>
                         <Icon name='add square' color='grey' size='large'/>
                       </Button.Content>
                     </Button>}>
              {/*<Modal.Header>Select a Photo</Modal.Header>*/}
                <div className={style.modalHeader}>
                    <h4>Add your address</h4>
                </div>
              <Modal.Content>
                <div className={style.modalInner}>
                  <div className={style.modalFormArea}>
                    <Form>
                      <Form.Field >
                        <Form.Input placeholder='Full number'/>
                      </Form.Field>
                      <Form.Field >
                        <Form.Input placeholder='Phone number'/>
                      </Form.Field>
                      <Form.Field >
                        <Dropdown placeholder='Select Address' fluid selection options={test}/>
                      </Form.Field>
                      <Form.Field >
                        <Form.Input placeholder='Detail address'/>
                      </Form.Field>
                      <Form.Field >
                        <Form.Checkbox label='Set default'/>
                      </Form.Field>
                      <Form.Field >
                        <Button fluid type="button">submit</Button>
                      </Form.Field>
                    </Form>
                  </div>
                </div>
              </Modal.Content>
            </Modal>
            </span>
          </div>
          {
            addresses.length > 0
              ? <div className={style.addressInner}>
              <div className={style.addressTitle}>
                <span className={style.nameTitle}>姓名</span>
                <span className={style.detailTitle}>详细地址</span>
                <span className={style.phoneTitle}>电话</span>
              </div>
              {
                addresses.map((address, index) => (
                  <div key={index} className={style.addressItem}>
                    <div className={style.nameItem}>
                      <span>{address.fullName}</span>
                    </div>
                    <div className={style.detailItem}>
                      <span>{address.address}&nbsp;{address.detailAddress}</span>
                    </div>
                    <div className={style.phoneItem}>
                      <span>{address.phoneNumber}</span>
                    </div>
                    {
                      address.default ? <div className={style.defaultItem}>
                        <span>（默认地址）</span>
                      </div>
                        : null
                    }
                    <div className={style.control}>
                      <div className={style.controlPanel}>
                          <span>

                            <Modal size='tiny'
                                   style={{width: '450px', borderRadius: '15px'}}
                                   closeIcon={
                                     <div className={style.closeIcon}>
                                       <Icon name='close' color='grey' size='large'/>
                                     </div>}
                                   trigger={<Icon name='edit' color='grey' size='big' className={style.editIcon}/>}>
                                            <div className={style.modalHeader}>
                                  <h4>Add your address</h4>
                              </div>
                            <Modal.Content>
                              <div className={style.modalInner}>
                                <div className={style.modalFormArea}>
                                  <Form>
                                    <Form.Field >
                                      <Form.Input placeholder='Full name' value={address.fullName}/>
                                    </Form.Field>
                                    <Form.Field >
                                      <Form.Input placeholder='Phone number' value={address.phoneNumber}/>
                                    </Form.Field>
                                    <Form.Field >
                                      <Dropdown placeholder='Select Address' fluid selection options={test}/>
                                    </Form.Field>
                                    <Form.Field >
                                      <Form.Input placeholder='Detail address' value={address.detailAddress}/>
                                    </Form.Field>
                                    <Form.Field >
                                      <Form.Checkbox label='Set default' checked={address.default}/>
                                    </Form.Field>
                                    <Form.Field >
                                      <Button fluid type="button">submit</Button>
                                    </Form.Field>
                                  </Form>
                                </div>
                              </div>
                            </Modal.Content>
                          </Modal>


                          </span>
                        <span>
                            <Icon name='delete' size='big' className={style.deleteIcon}/>
                          </span>
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>
              : <div className={style.emptyInner}>
              <div className={style.orderEmpty}>
                <h2>您目前还没有收货地址</h2>
                <div className={style.emptyBtn}>
                  <Link to="/">
                    返回首页
                  </Link>
                </div>
              </div>
            </div>
          }
        </div>
      </div>
    )
  }
}

export default withRouter(Address)
