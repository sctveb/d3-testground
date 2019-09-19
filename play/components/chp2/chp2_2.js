import React, { Component } from "react";
import * as d3 from "d3";

class Chp2_2 extends Component {
  state = {
      data: [],
      loadError: false,
      sampleArray: [423,124,666,424,58,10,900,44,1],
      tweetData: [],
  };   
  componentDidMount() {
    d3.json('../../static/json/tweets.json').then(data => {
      this.setState({tweetData: data.tweets})
  })
          
  }
  render() {
      const newRamp = d3.scaleLinear().domain([500000, 13000000]).range([0,500]);
      const newRamp1 = d3.scaleLinear().domain([500000, 13000000]).range(["blue", "red"]);
      const qScale = d3.scaleQuantile().domain(this.state.sampleArray).range([0,1,2]);
      const qScale1 = d3.scaleQuantile().domain(this.state.sampleArray).range(["small", "medium", "large"]);
      const nested = d3.nest().key((el) => {return el.user}).entries(this.state.tweetData);
      console.log(this.state);
    return (
      <React.Fragment>
        <div>
        newRamp: {newRamp(1000000)} & {newRamp(9000000)} & {newRamp.invert(313)} <br />
        newRamp1: {newRamp1(1000000)} & {newRamp1(9000000)} & {newRamp1.invert("#AD0052")} <br />
        qScale: {qScale(423)} & {qScale(20)} & {qScale(10000)} <br />
        qScale1: {qScale1(68)} & {qScale1(20)} & {qScale1(10000)} <br />
        </div>
        {nested.map((d,i) => {
          return <div key={i}>
            {d.key}
          </div>
        })}
        <div>
          {d3.max(this.state.sampleArray, (el) => {return el})} <br/>
          {d3.min(this.state.sampleArray, (el) => {return el})} <br/>
          {d3.mean(this.state.sampleArray, (el) => {return el})} <br/>
          {d3.extent(this.state.sampleArray, (el) => {return el})} <br/>
          </div>               
      </React.Fragment>
    );
  }
}

export default Chp2_2;
