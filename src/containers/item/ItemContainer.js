import React,{Component} from 'react'
import { connect } from 'react-redux'

import Item from '../../components/item'

class ItemContainer extends Component{


  render(){

    const {match} = this.props

    let itemId = match.params.id


    const items = [
      {
        name: 'FIIL Diva 智能蓝牙无线降噪耳机',
        describe: '手势触控、智能启停',
        price: 998,
        params: [
          {
            name: '颜色',
            color: true,
            values: [
              '/src/images/color/gray.jpg',
              '/src/images/color/green.jpg',
              '/src/images/color/orange.jpg',
              '/src/images/color/purple.jpg'
            ]
          }
        ],
        catagory: 'headset',
        images: [
          '/src/images/pic/1.jpg',
          '/src/images/pic/2.jpg',
          '/src/images/pic/3.jpg',
          '/src/images/pic/4.jpg',
          '/src/images/pic/5.jpg'
        ],
        detailImages: [
          '/src/images/pic/d1.jpg',
          '/src/images/pic/d2.jpg',
          '/src/images/pic/d3.jpg',
          '/src/images/pic/d4.jpg',
          '/src/images/pic/d5.jpg',
          '/src/images/pic/d6.jpg',
          '/src/images/pic/d7.jpg',
          '/src/images/pic/d8.jpg',
          '/src/images/pic/d9.jpg',
          '/src/images/pic/d10.jpg',
          '/src/images/pic/d11.jpg',
          '/src/images/pic/d12.jpg',
          '/src/images/pic/d13.jpg',
          '/src/images/pic/d14.jpg',
          '/src/images/pic/d15.jpg',
          '/src/images/pic/d16.jpg',
          '/src/images/pic/d17.jpg',
          '/src/images/pic/d18.jpg',
          '/src/images/pic/d19.jpg',
          '/src/images/pic/d20.jpg',
          '/src/images/pic/d21.jpg',
          '/src/images/pic/d22.jpg',

        ]
      },
      {
        name: '《深泽直人》',
        describe: '首次面向中国读者介绍其作品',
        price: 999,
        params: [
          {
            name: '版本',
            values: [
              '平装版',
              '精装版'
            ]
          }
        ],
        catagory: 'book',
        images: [
          '/src/images/pic/book.jpg'
        ],
        detailImages: [
          '/src/images/pic/book1.jpg',
          '/src/images/pic/book1_1.jpg',
          '/src/images/pic/book2.jpg',
          '/src/images/pic/book3.jpg',
          '/src/images/pic/book4.jpg',
          '/src/images/pic/book5.jpg',
          '/src/images/pic/book6.jpg',
          '/src/images/pic/book7.jpg',
          '/src/images/pic/book8.jpg',
          '/src/images/pic/book9.jpg'
        ]
      }
    ]

    return(
      <Item item={items[itemId]}/>
    )
  }
}

export default connect(
  null,
  null
)(ItemContainer);

