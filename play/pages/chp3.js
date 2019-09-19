import React, { Component } from "react";
import * as d3 from "d3";
import Head from 'next/head';

class Chapter3 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      loadError: false,
    }
    this.testRef = React.createRef();
  }

  overallTeamViz = (incomeData) => {
    d3.select("svg")
    .append("g")
    .attr("id", "teamsG")
    .attr("transform", "translate(50,300)")
    .selectAll("g")
    .data(incomeData)
    .enter()
    .append("g")
    .attr("class", "overallG")
    .attr("transform", (d,i) => { return `translate(${i * 50}, 0)`});

    const teamG = d3.selectAll("g.overallG");
    teamG.append("circle")
    .attr("r", 0).transition().delay((d,i) => { return i * 100}).duration(300)
    .attr("r", 40).transition().duration(300)
    .attr("r", 20)
    .style("fill", "pink")
    .style("stroke", "black")
    .style("stroke-width", "1px")
    teamG.append("text")
    .style("text-anchor", "middle")
    .attr("y", 30)
    .style("font-size", "10px")
    .text((d) => { return d.team})

    const dataKeys = d3.keys(incomeData[0]).filter((el) => { return el != "team" && el != "region"});
    d3.select("#controls").selectAll("button.teams")
    .data(dataKeys).enter().append("button")
    .on("click", buttonClick)
    .html((d) => {return d})

    function buttonClick (datapoint) {
      const maxValue = d3.max(incomeData, (d) => {
        return parseFloat(d[datapoint]);
      });
      const radiusScale = d3.scaleLinear().domain([0, maxValue]).range([2,20]);
      d3.selectAll("g.overallG").select("circle").transition().duration(300).attr("r", (d) => {
        return radiusScale(d[datapoint]);
      })
    }

    teamG.on("mouseover", highlightRegion);
    function highlightRegion(d) {
      d3.selectAll("g.overallG").select("circle")
      .style('fill', (p) => {return p.region == d.region ? "red" : "gray"});
    } 
    teamG.on("mouseout", function() {
      d3.selectAll("g.overallG").select("circle").style("fill", "pink");
    })   
  }
  

  componentDidMount() {
      d3.csv('../static/csv/worldcup.csv').then(data => {
          this.setState({data})
          this.overallTeamViz(this.state.data);
      })
          
  }
  render() {
      console.log(this.state)
    return (
      <React.Fragment>
        <Head>
          <link rel="stylesheet" href="/static/css/3-1.css" />
        </Head>
        <svg ref={this.testRef}/>
        <div id="controls"></div>
      </React.Fragment>
    );
  }
}

export default Chapter3;
