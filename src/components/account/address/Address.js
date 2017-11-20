import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Link } from 'react-router-dom'
import update from 'immutability-helper'
import store from '../../../store'
import * as addressActions from '../../../actions/account/address'
import {authPost} from '../../../services/authHttp'
import { Dropdown, Button, Form, Icon, Modal, Input } from 'semantic-ui-react'

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
    this.state = {
      modalOpen: false,
      form: {
        country: '',
        fullName: '',
        address: '',
        city: '',
        province: '',
        zip: '',
        phoneNumber: ''
      },
      addresses: []
    }
  }

  componentWillReceiveProps (nextProps) {
    if (this.state.addresses.length <= 0) {
      if (nextProps.addresses) {
        this.setState({addresses: [...nextProps.addresses]})
      }
    }
  }

  handleChange = (event) => {
    const name = event.target.name
    const value = event.target.value
    this.setState(() => update(this.state, {
      form: {
        [name]: {$set: value}
      }
    }))
  }

  handleUpdateChange = (event, index) => {
    const name = event.target.name
    const value = event.target.value
    this.setState(() => update(this.state, {
      addresses: {
        [index]: {
          [name]: {$set: value}
        }
      }
    }))
  }

  updateAddress = (event,address,index) => {
    console.log(address)
    authPost(`/api/user/address/update`,address)
      .then(response => {
        store.dispatch(addressActions.updateAddressSuccess(address,index))
      })
  }


  render () {
    const test = [
      {key: 'zm', value: 'zm', flag: 'zm', text: 'Zambia'},
      {key: 'zw', value: 'zw', flag: 'zw', text: 'Zimbabwe'}
    ]

    const {addAddress} = this.props


    return (
      <div className={style.main}>
        <div className={style.wrapper}>
          <div className={style.title}>
            <h2>Your Address</h2>
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
                <Modal.Header >
                    <h4>Add your address</h4>
                </Modal.Header>
              <Modal.Content>
                 <Form>
                  <Form.Field>
                    <label>Country</label>
                    <input placeholder="Country" name="country" onChange={ this.handleChange}
                           value={this.state.form.country}/>
                  </Form.Field>
                  <Form.Field>
                    <label>Full name</label>
                    <input placeholder="Full name" name="fullName" onChange={this.handleChange}
                           value={this.state.form.fullName}/>
                  </Form.Field>
                   <Form.Field>
                    <label>Address</label>
                    <input placeholder="Address" name="address" onChange={this.handleChange}
                           value={this.state.form.address}/>
                  </Form.Field>
                   <Form.Field>
                    <label>City</label>
                    <input placeholder="City" name="city" onChange={this.handleChange} value={this.state.form.city}/>
                  </Form.Field>
                   <Form.Field>
                    <label>Province</label>
                    <input placeholder="Province" name="province" onChange={this.handleChange}
                           value={this.state.form.province}/>
                  </Form.Field>
                   <Form.Field>
                    <label>Zip</label>
                    <input placeholder="Zip" name="zip" onChange={this.handleChange} value={this.state.form.zip}/>
                  </Form.Field>
                   <Form.Field>
                    <label>Phone number</label>
                    <input placeholder="Phone number" name="phoneNumber" onChange={this.handleChange}
                           value={this.state.form.phoneNumber}/>
                  </Form.Field>
                </Form>
              </Modal.Content>
              <Modal.Actions>
                <Button color='green' onClick={() => addAddress(this.state.form)} inverted>
                  <Icon name='checkmark'/> Add address
                </Button>
              </Modal.Actions>
            </Modal>
            </span>
          </div>
          {
            this.state.addresses.length > 0
              ? <div className={style.addressInner}>
              <div className={style.addressTitle}>
                <span className={style.nameTitle}>Full Name</span>
                <span className={style.detailTitle}>Detail Address</span>
                <span className={style.phoneTitle}>Tel.</span>
              </div>
              {
                this.state.addresses.map((address, index) => (
                  <div key={index} className={style.addressItem}>
                    <div className={style.nameItem}>
                      <span>{address.fullName}</span>
                    </div>
                    <div className={style.detailItem}>
                      <span>{address.country}&nbsp;{address.province}&nbsp;{address.city}&nbsp;{address.address}&nbsp;{address.zip}</span>
                    </div>
                    <div className={style.phoneItem}>
                      <span>{address.phoneNumber}</span>
                    </div>
                    {
                      address.defaultAddress ? <div className={style.defaultItem}>
                        <span>(Default)</span>
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
                                  <Form onSubmit={e => this.updateAddress(e,this.state.addresses[index],index)}>
                                    <Form.Field>
                                      <label>Country</label>
                                      <input placeholder="Country" name="country"
                                             onChange={e => this.handleUpdateChange(e, index)} value={address.country}/>
                                    </Form.Field>
                                    <Form.Field>
                                      <label>Full name</label>
                                      <input placeholder="Full name" name="fullName"
                                             onChange={e => this.handleUpdateChange(e, index)}
                                             value={address.fullName}/>
                                    </Form.Field>
                                     <Form.Field>
                                      <label>Address</label>
                                      <input placeholder="Address" name="address"
                                             onChange={e => this.handleUpdateChange(e, index)} value={address.address}/>
                                    </Form.Field>
                                     <Form.Field>
                                      <label>City</label>
                                      <input placeholder="City" name="city"
                                             onChange={e => this.handleUpdateChange(e, index)} value={address.city}/>
                                    </Form.Field>
                                     <Form.Field>
                                      <label>Province</label>
                                      <input placeholder="Province" name="province"
                                             onChange={e => this.handleUpdateChange(e, index)}
                                             value={address.province}/>
                                    </Form.Field>
                                     <Form.Field>
                                      <label>Zip</label>
                                      <input placeholder="Zip" name="zip"
                                             onChange={e => this.handleUpdateChange(e, index)} value={address.zip}/>
                                    </Form.Field>
                                     <Form.Field>
                                      <label>Phone number</label>
                                      <input placeholder="Phone number" name="phoneNumber"
                                             onChange={e => this.handleUpdateChange(e, index)}
                                             value={address.phoneNumber}/>
                                    </Form.Field>
                                    <Form.Field >
                                      <Button fluid type="submit">submit</Button>
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
                <h2>You do not have any address</h2>
                <div className={style.emptyBtn}>
                  <Link to="/">
                    homepage
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
