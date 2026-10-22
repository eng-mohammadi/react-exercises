import React, { Component } from "react";
import Foods from "./Foods";
import {
  MainBox,
  HeaderBox,
  IconDiv,
  I1,
  I2,
  Span,
} from "./styled_components/StyledAccordion";

class AccordionBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      $flag: false,
    };
  }

  changeFontIconState = () => {
    this.setState({ $flag: !this.state.$flag });
  };

  render() {
    const { $flag } = this.state;
    return (
      <React.Fragment>
        <MainBox>
          <HeaderBox $flag={$flag}>
            <Span $flag={$flag}>Foods Products</Span>
            <IconDiv onClick={this.changeFontIconState}>
              <I1 className="fa-solid fa-angle-up" $flag={$flag}></I1>
              <I2 className="fa-solid fa-chevron-down" $flag={$flag}></I2>
            </IconDiv>
          </HeaderBox>
          {$flag && (
            <div className="food-box">
              <Foods />
            </div>
          )}
        </MainBox>
      </React.Fragment>
    );
  }
}

export default AccordionBox;
