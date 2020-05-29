import React from 'react'
import Carousel from 'nuka-carousel';
import "../css/Slideshow.css";

export default class extends React.Component {
  state = {
    slideIndex: 0
  };

  render() {
    return (
    <div className="Slideshow">
      <Carousel
        slideIndex={this.state.slideIndex}
        afterSlide={slideIndex => this.setState({ slideIndex })}
      >
        <img src="https://www.ahstatic.com/photos/b3g8_rsr001_00_p_1024x768.jpg"alt="Food" />
        <img src="https://images.unsplash.com/photo-1470341223622-1019832be824?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2288&q=80" alt="Food" />
        <img src="https://images.unsplash.com/photo-1448630360428-65456885c650?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2094&q=80" alt="Food" />
        <img src="https://images.unsplash.com/photo-1534161308652-fdfcf10f62c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2174&q=80" alt="Food"  />
      
      </Carousel>
      </div>
    );
  }
}