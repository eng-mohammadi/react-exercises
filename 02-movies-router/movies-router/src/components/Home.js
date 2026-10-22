import React, { Component } from "react";
import Image1 from "../images/movies/movie1.jpg";
import Image2 from "../images/movies/movie2.jpg";
import Image3 from "../images/movies/movie3.jpg";
import Image4 from "../images/movies/movie4.jpg";
import {
  SliderBox,
  SliderImage,
  SliderControls,
  Button,
} from "./styled-components/SliderImageBox";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        { id: 1, img: Image1 },
        { id: 2, img: Image2 },
        { id: 3, img: Image3 },
        { id: 4, img: Image4 },
      ],
      counter: 1,
    };
  }

  nextImage = () => {
    this.setState(({ counter, images }) => {
      if (counter < images.length) {
        return { counter: counter + 1 };
      }
      return null;
    });
  };

  previousImage = () => {
    this.setState(({ counter }) => {
      if (counter > 1) {
        return { counter: counter - 1 };
      }
      return null;
    });
  };

  render() {
    const { images, counter } = this.state;
    return (
      <React.Fragment>
        <SliderBox>
          {images.map((image) => (
            <SliderImage
              key={image.id}
              src={image.img}
              alt={`image${image.id}`}
              $isActive={counter === image.id}
            />
          ))}
          <SliderControls>
            <Button type="button" onClick={this.previousImage}>
              Previous
            </Button>
            <Button type="button" onClick={this.nextImage}>
              Next
            </Button>
          </SliderControls>
        </SliderBox>
      </React.Fragment>
    );
  }
}

export default Home;
