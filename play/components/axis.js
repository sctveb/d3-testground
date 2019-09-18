// import React, { Component } from 'react';
// import * as d3 from 'd3';

// class Axis extends Component {
// }

// export default Axis;        

const Axis = D3blackbox(function () {
    const scale = d3.scaleLinear().domain([0,10]).range([0,200]);
    const axis = d3.axisBottom(scale);
    d3.select(this.refs.anchor).call(axis);
})