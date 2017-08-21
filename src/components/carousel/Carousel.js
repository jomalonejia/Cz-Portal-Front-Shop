import React from 'react';
import PropTypes from 'prop-types';
import carouselStyle from '../../styles/carousel.css';

class Carousel extends React.Component {

  constructor (){
    super();
    this.state = {
      toggleActive:carouselStyle.toggleActive
    }
  }

  togglePicture(index,event){
    console.log(index);
  }

  render () {

    const element = [
      {src:'src/images/banner1.png',className:carouselStyle.active,toggleClassName:carouselStyle.toggleActive},
      {src:'src/images/banner1.png',className:'',toggleClassName:''},
      {src:'src/images/banner1.png',className:'',toggleClassName:''},
      {src:'src/images/banner1.png',className:'',toggleClassName:''}
    ];
    return (
      <div className={carouselStyle.carousel}>
        <ul className={carouselStyle.carouselToggle}>
          {
            element.map((ele,index) => (
              <li
                key={index} className={ele.toggleClassName}
                onClick={this.togglePicture.bind(this,index)}>
              </li>
            ))
          }
        </ul>
        <ul className={carouselStyle.carouselMask}>
          {
            element.map((ele,index) => (
              <li key={index} className={ele.className}>
                <img src={ele.src}/>
              </li>
            ))
          }
        </ul>
      </div>
    )
  }
}

export default Carousel