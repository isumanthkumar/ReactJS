import React, { Component } from "react";
import myImage from '../../assests/images/me.png'

class FeelingProud extends Component {
  render() {
    return (
      <img tyle = {{ width : 10, height : 10, marginBottom : 370 }} src={myImage}  alt="" />
    );
  }
}
export default FeelingProud;
