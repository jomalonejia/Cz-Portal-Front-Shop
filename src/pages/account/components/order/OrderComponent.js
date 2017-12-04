import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Pagination from 'src/components/components/pagination'
import { Button, Header, Icon, Modal, Step, Message } from 'semantic-ui-react'
import style from './order.scss'

class OrderComponent extends Component {

  constructor (props) {
    super(props)
    this.state = {
      modalOpenState: {}
    }
  }

  open = orderId => {
    let modalOpenState = this.state.modalOpenState
    modalOpenState[orderId] = true
    this.setState({modalOpenState: modalOpenState})
  }
  close = () => {
    this.setState({modalOpenState: {}})
  }

  goToPay = () => console.log('aa')

  render () {

    const {orders = {}, getOrders} = this.props

    return (
      <div className={style.main}>
        <div className={style.wrapper}>
          <div className={style.title}>
            <h2>My Orders</h2>
          </div>
          {
            orders.size > 0
              ? <div className={style.innerOrder}>
              <ul>
                {
                  orders.list.map((order, index) =>
                    <li key={order.id}>
                      <div className={style.order}>
                        <div className={style.orderTitle}>
                          <table className={style.orderTitleTable}>
                            <tbody>
                            <tr>
                              <td className={style.orderTd1}>
                                {
                                  new Date(order.createTime).toISOString().slice(0, 10)
                                }
                              </td>
                              <td className={style.orderTd2}>No.&nbsp;{order.orderNumber}</td>
                              <td className={style.orderTd3}>Price</td>
                              <td className={style.orderTd4}>Count</td>
                              <td className={style.orderTd5}>TotalPrice</td>
                              <td className={style.orderTd6}>Operation</td>
                            </tr>
                            </tbody>
                          </table>
                        </div>
                        <div className={style.orderDetail}>
                          <table className={style.orderDetailTable}>
                            <tbody>
                            {
                              /*order.detail.map((detail, detailIndex) => (*/
                              <tr >
                                <td className={style.orderTd1}>
                                  <Link to={`/item/${order.itemId}`}>
                                    <img src={order.image}/>
                                  </Link>
                                </td>
                                <td className={style.orderTd2}>
                                  <Link to={`/item/${order.itemId}`}>
                                    {order.itemName}
                                  </Link>
                                </td>
                                <td className={style.orderTd3}>
                                  <span className={style.prePrice}><Icon name="dollar"/>{order.price}</span>
                                  &nbsp;
                                  <span className={style.nowPrice}><Icon
                                    name="dollar"/>{Number(order.price * order.discount).toFixed(2)}</span>
                                </td>
                                <td className={style.orderTd4}>{order.count}</td>
                                <td className={style.orderTd5}><Icon name="dollar"/>{order.totalPrice}</td>
                                <td className={style.orderTd6}>

                                  {
                                    (() => {
                                      switch (order.status) {
                                        case "AWAITING_EXCHANGE":
                                          return <Button basic color="orange">Pay<Icon name="right chevron"/></Button>
                                        case "AWAITING_COMMENT":
                                          return <Link to={`/comment/${order.id}`} ><Button basic color="orange">Comment<Icon name="right chevron"/></Button></Link>
                                        default:
                                          return (
                                          <Modal
                                          dimmer={false}
                                          open={this.state.modalOpenState[order.id]}
                                          onOpen={() => this.open(order.id)}
                                          onClose={() => this.close}
                                          size="large"
                                          trigger={<Button basic color='teal'>Track<Icon
                                            name='right chevron'/></Button>}>
                                          <Modal.Header>Track</Modal.Header>
                                          <Modal.Content>
                                            <Step.Group>
                                              <Step active={order.status == 'AWAITING_SHIPPING'}
                                                    completed={order.status != 'AWAITING_SHIPPING' && order.orderTracks.findIndex(track => track.status == 'AWAITING_SHIPPING') != -1}
                                                    disabled={!order.orderTracks.find(track => track.status == 'AWAITING_SHIPPING')}>
                                                <Icon name="gift"/>
                                                <Step.Content>
                                                  <Step.Title>Packing</Step.Title>
                                                  <Step.Description>Your orders has been packed</Step.Description>
                                                </Step.Content>
                                              </Step>
                                              <Step active={order.status == 'SHIPPING'}
                                                    completed={order.status != 'SHIPPING' && order.orderTracks.findIndex(track => track.status == 'SHIPPING') != -1}
                                                    disabled={!order.orderTracks.find(track => track.status == 'SHIPPING')}>
                                                <Icon name="plane"/>
                                                <Step.Content>
                                                  <Step.Title>Airline</Step.Title>
                                                  <Step.Description>Your orders on plane</Step.Description>
                                                </Step.Content>
                                              </Step>
                                              <Step active={order.status == 'DELIVERING'}
                                                    completed={order.status != 'DELIVERING' && order.orderTracks.findIndex(track => track.status == 'DELIVERING') != -1}
                                                    disabled={!order.orderTracks.find(track => track.status == 'DELIVERING')}>
                                                <Icon name="truck"/>
                                                <Step.Content>
                                                  <Step.Title>Shipping</Step.Title>
                                                  <Step.Description>Delivering your order</Step.Description>
                                                </Step.Content>
                                              </Step>
                                              <Step completed={order.status == 'COMPLETED'}
                                                    disabled={order.status != 'COMPLETED'}>
                                                <Icon name="info circle"/>
                                                <Step.Content>
                                                  <Step.Title>Delivered</Step.Title>
                                                  <Step.Description>Your orders has been delivered</Step.Description>
                                                </Step.Content>
                                              </Step>
                                            </Step.Group>
                                          </Modal.Content>
                                          <Modal.Content>
                                            {
                                              order.orderTracks.map((track, index) => (
                                                <div key={track.id}>
                                                  <Message>
                                                    <Message.Header>Tracking Status</Message.Header>
                                                    <Message.List>
                                                      <Message.Item>{new Date(track.trackTime).toString()}</Message.Item>
                                                      <Message.Item>{track.trackInformation}</Message.Item>
                                                    </Message.List>
                                                  </Message>
                                                </div>
                                              ))
                                            }
                                          </Modal.Content>
                                          <Modal.Actions>
                                            <Button icon="check" content='Close' onClick={this.close}/>
                                          </Modal.Actions>
                                        </Modal>)
                                      }
                                    })()
                                    /*order.status == 'AWAITING_EXCHANGE'
                                      ? <Button basic color="orange">Pay<Icon name="right chevron"/></Button>
                                      : (order.status == 'AWATING_COMMENT'
                                      ? <Button basic color="orange">Comment<Icon name="right chevron"/></Button>
                                      :
                                      <Modal
                                        dimmer={false}
                                        open={this.state.modalOpenState[order.id]}
                                        onOpen={() => this.open(order.id)}
                                        onClose={() => this.close}
                                        size="large"
                                        trigger={<Button basic color='teal'>Track<Icon
                                          name='right chevron'/></Button>}>
                                        <Modal.Header>Track</Modal.Header>
                                        <Modal.Content>
                                          <Step.Group>
                                            <Step active={order.status == 'AWAITING_SHIPPING'}
                                                  completed={order.status != 'AWAITING_SHIPPING' && order.orderTracks.findIndex(track => track.status == 'AWAITING_SHIPPING') != -1}
                                                  disabled={!order.orderTracks.find(track => track.status == 'AWAITING_SHIPPING')}>
                                              <Icon name="gift"/>
                                              <Step.Content>
                                                <Step.Title>Packing</Step.Title>
                                                <Step.Description>Your orders has been packed</Step.Description>
                                              </Step.Content>
                                            </Step>
                                            <Step active={order.status == 'SHIPPING'}
                                                  completed={order.status != 'SHIPPING' && order.orderTracks.findIndex(track => track.status == 'SHIPPING') != -1}
                                                  disabled={!order.orderTracks.find(track => track.status == 'SHIPPING')}>
                                              <Icon name="plane"/>
                                              <Step.Content>
                                                <Step.Title>Airline</Step.Title>
                                                <Step.Description>Your orders on plane</Step.Description>
                                              </Step.Content>
                                            </Step>
                                            <Step active={order.status == 'DELIVERING'}
                                                  completed={order.status != 'DELIVERING' && order.orderTracks.findIndex(track => track.status == 'DELIVERING') != -1}
                                                  disabled={!order.orderTracks.find(track => track.status == 'DELIVERING')}>
                                              <Icon name="truck"/>
                                              <Step.Content>
                                                <Step.Title>Shipping</Step.Title>
                                                <Step.Description>Delivering your order</Step.Description>
                                              </Step.Content>
                                            </Step>
                                            <Step completed={order.status == 'COMPLETED'}
                                                  disabled={order.status != 'COMPLETED'}>
                                              <Icon name="info circle"/>
                                              <Step.Content>
                                                <Step.Title>Delivered</Step.Title>
                                                <Step.Description>Your orders has been delivered</Step.Description>
                                              </Step.Content>
                                            </Step>
                                          </Step.Group>
                                        </Modal.Content>
                                        <Modal.Content>
                                          {
                                            order.orderTracks.map((track, index) => (
                                              <div key={track.id}>
                                                <Message>
                                                  <Message.Header>Tracking Status</Message.Header>
                                                  <Message.List>
                                                    <Message.Item>{new Date(track.trackTime).toString()}</Message.Item>
                                                    <Message.Item>{track.trackInformation}</Message.Item>
                                                  </Message.List>
                                                </Message>
                                              </div>
                                            ))
                                          }
                                        </Modal.Content>
                                        <Modal.Actions>
                                          <Button icon="check" content='Close' onClick={this.close}/>
                                        </Modal.Actions>
                                      </Modal>)*/
                                  }
                                </td>
                              </tr>
                            }
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </li>
                  )
                }
              </ul>
              <div className={style.paginationArea}>
                <Pagination handlerChange={getOrders} data={orders}/>
              </div>
            </div>
              : <div className={style.innerEmpty}>
              <div className={style.orderEmpty}>
                <h2>You do not have any order</h2>
                <div className={style.emptyBtn}>
                  <Link to="/">
                    Homepage
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

export default OrderComponent