import React, { Component } from "react";
import Food from "./Food";
import barbecue from "../images/barbecue-7-310x260.png";
import burgers from "../images/burgers-1-310x260.png";
import pizzaChicken from "../images/pizza-chicken-large.jpg";
import sushi from "../images/sushi-7-310x260.png";

class Foods extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        {
          id: 1,
          name: "barbecue",
          img: barbecue,
          price: 230,
          description:
            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi molestias, esse accusantium reiciendis corrupti iusto.",
        },
        {
          id: 2,
          name: "burgers",
          img: burgers,
          price: 410,
          description:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod vel nisi harum molestiae quis ipsam placeat, suscipit porro! Aliquid, sapiente.",
        },
        {
          id: 3,
          name: "pizzaChicken",
          img: pizzaChicken,
          price: 32,
          description:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente dolorem aut inventore laudantium!",
        },
        {
          id: 4,
          name: "sushi",
          img: sushi,
          price: 75,
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, quaerat.",
        },
      ],
    };
  }

  render() {
    return (
      <React.Fragment>
        {this.state.products.map((product) => (
          <Food
            key={product.id}
            name={product.name}
            img={product.img}
            price={product.price}
            description={product.description}
            $flag={this.changeIconColor}
          />
        ))}
      </React.Fragment>
    );
  }
}

export default Foods;
