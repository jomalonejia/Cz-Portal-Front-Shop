import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createSelector } from 'reselect';

import Account from '../../components/account'
import {getCurrentAccountMenu} from '../../selectors/account'
import {accountActions} from '../../actions/account'

class AccountContainer extends Component {

  constructor (props) {
    super(props);
  }

  componentWillMount () {
    //this.props.testSaga('aluba');
  }

  render () {
    return (
      <Account currentAccountMenu={this.props}/>
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
)(AccountContainer);