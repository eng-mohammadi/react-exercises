import React, { Component } from "react";
import myPic from "../images/personal-info/myPic.jpg";
import darsmanLogo from "../images/personal-info/OIP.webp";

class AboutUs extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="about-us__title">
          <h1>آکادمی آنلاین درسمن</h1>
          <img src={darsmanLogo} alt="darsman" />
        </div>
        <div className="about-me__info">
          <div className="about-me__card">
            <div className="img">
              <img src={myPic} alt="personal-info" />
            </div>
            <h3>نام : رضا</h3>
            <h3>نام خانوادگی : محمدی</h3>
            <p>رشته تحصیلی: فناوری اطلاعات</p>
            <p>مدرک: کارشناسی</p>
            <p>دانشجوی آکادمی درسمن</p>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default AboutUs;
