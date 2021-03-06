import React, { Component } from "react";
import * as d3 from "d3";
import Chp2_1 from '../components/chp2/chp2_1';
import Chp2_2 from '../components/chp2/chp2_2';
import Chp2_3 from '../components/chp2/chp2_3';

class Chapter2 extends Component { 
  render() {
    return (
      <React.Fragment>
        <Chp2_1 />  
        <Chp2_2 />   
        <Chp2_3 />           
      </React.Fragment>
    );
  }
}

export default Chapter2;
