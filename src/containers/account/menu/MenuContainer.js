import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createSelector } from 'reselect';

import Menu from '../../../components/account/menu'
import {getCurrentAccountMenu} from '../../../selectors/menu'
import {accountActions} from '../../../actions/account'

class MenuContainer extends Component {

  constructor (props) {
    super(props);
  }

  componentWillMount () {
    //this.props.testSaga('aluba');
  }

  render () {
    return (
      <Menu {...this.props}/>
    )
  }
}

const mapStateToProps = createSelector(
  getCurrentAccountMenu,
  currentAccountMenu => ({currentAccountMenu})
);

const mapDispatchToProps = {
  changeMenu: accountActions.changeAccountMenu,
  testSaga:accountActions.testSaga
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MenuContainer);