import React, { Component } from "react";
import * as d3 from "d3";
import Link from "next/link";
import csvData from "../static/csv/worldcup.csv";

class Chapter3 extends Component {
  state = {
      data: [],
      loadError: false,
  };
  // d3Test = () => {
  //     d3.csv(csvData, function(data) {
  //         overallTeamViz(data);
  //       })

  //     function overallTeamViz(incomingData) {
  //     d3.select("svg")
  //     .append("g")
  //     .attr("id", "teamsG")
  //     .attr("transform", "translate(50,300)")
  //     .selectAll("g")
  //     .data(incomingData)
  //     .enter()
  //     .append("g")
  //     .attr("class", "overallG")
  //     .attr("transform", function (d,i) {return "translate(" + (i * 50) + ", 0)"});

  //     var teamG = d3.selectAll("g.overallG");

  //     teamG
  //     .append("circle")
  //     .attr("r", 20)
  //     .style("fill", "pink")
  //     .style("stroke", "black")
  //     .style("stroke-width", "1px")

  //     teamG
  //     .append("text")
  //     .style("text-anchor", "middle")
  //     .attr("y", 30)
  //     .style("font-size", "10px")
  //     .text(function(d) {return d.team})
  //       }

  // }
  componentDidMount() {
      d3.csv('../static/csv/worldcup.csv').then(data => {
          this.setState({data})
      })
    
  }
  render() {
      console.log(this.state)
    return (
      <React.Fragment>
        <div id="viz">
          <svg></svg>
        </div>
        <div id="controls" />
        {this.state.data.map(d => {
            return (
                <div key={d.team}>
                    {d.team}
                </div>
            )
        })}        
      </React.Fragment>
    );
  }
}

export default Chapter3;
