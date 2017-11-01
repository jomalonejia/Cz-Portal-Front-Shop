import React,{Component} from 'react';
import { connect } from 'react-redux';
import Item from '../../components/components/itemCard';

class TestContainer extends Component{


  render(){

  const item = {
      itemId: 0,
      name: 'FIIL Diva 智能蓝牙无线降噪耳机',
      describe: '手势触控、智能启停',
      price: 999,
      image: 'src/images/shangpin_a2.jpg'

    }

    return(
      <Item item={item}/>
    )
  }
}

export default TestContainer;

