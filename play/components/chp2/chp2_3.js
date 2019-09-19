import React, { Component } from "react";
import * as d3 from "d3";

class Chp2_3 extends Component {
  state = {
  };
  componentDidMount() {
    const yScale = d3.scaleLinear().domain([0, 24500]).range([0, 100]);

    d3.select("svg")
      .selectAll("rect")
      .data([14, 68, 24500, 430, 19, 1000, 5555])
      .enter()
      .append("rect")
      .attr("width", 10)
      .attr("height", function (d) { return yScale(d) })
      .style("fill", "blue")
      .style("stroke", "red")
      .style("stroke-width", "1px")
      .style("opacity", .25)
      .attr("x", function (d, i) { return i * 10 })
      .attr("y", function (d) { return 100 - yScale(d) });
  }

  render() {
    console.log(this.state);
    return (
      <React.Fragment>
        <svg style={{
          height: "500px",
          width: "500px",
          border: "1px solid gray"
        }} />
      </React.Fragment>
    );
  }
}

export default Chp2_3;
