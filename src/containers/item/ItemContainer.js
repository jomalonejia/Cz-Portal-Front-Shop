import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'

import Item from '../../components/item'

class ItemContainer extends Component {

  constructor (props) {
    super(props);
    this.state = {
      item:{},
    };
  }

  componentWillMount () {

    const {match} = this.props;
    let itemId = match.params.id;
    axios.get(
      `/api/item/get/${itemId}`
    )
      .then(res => {
        this.setState({item: res.data});
      })
      .catch(err => {
        console.log(err);
      })
  }

  render () {
    return (
      <Item item={this.state.item}/>
    )
  }
}

export default connect(
  null,
  null
)(ItemContainer)

