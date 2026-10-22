import React, { Component } from "react";
import { HeartIcon } from "./styled_components/StyledAccordion";
import "../styles/food_styles.scss";

class Food extends Component {
  constructor(props) {
    super(props);
    this.state = {
      $flag: false,
    };
  }

  changeIconColor = () => {
    this.setState({ $flag: !this.state.$flag });
  };

  render() {
    const { name, img, price, description } = this.props;
    return (
      <React.Fragment>
        <div className="food-container">
          <img src={img} alt={name} />
          <h3>{name}</h3>
          <h4>{price}$</h4>
          <p>{description}</p>
          <HeartIcon
            className="fa-solid fa-heart"
            $flag={this.state.$flag}
            onClick={this.changeIconColor}
          ></HeartIcon>
        </div>
      </React.Fragment>
    );
  }
}

export default Food;
