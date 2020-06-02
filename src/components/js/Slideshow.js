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
        <img src="https://cdn.hipwallpaper.com/i/26/28/oFCSY3.jpg" alt="Food" />
        <img src="https://thewallpaper.co//wp-content/uploads/2016/03preview/tellers-restaurant-and-bar-lawrence-kansa-high-quality-wallpaper-download-restaurant-photos-free-hd-images-abstract-cool-images-2880x1800.jpg"alt="Food"  />
        <img src="https://images4.alphacoders.com/740/thumb-1920-740502.jpg" alt="Food" />
        <img src="https://cdn.hipwallpaper.com/i/51/54/NyG9d6.jpg" alt="Food" />
        <img src="https://www.corkandkeg.co.nz/wp-content/uploads/2019/08/bar-area-and-seating-at-Cork-and-Keg-English-Pub-and-Restaurant-in-renwick-marlborough-NZ.jpg" alt="Food" />
      
      </Carousel>
      </div>
    );
  }
}