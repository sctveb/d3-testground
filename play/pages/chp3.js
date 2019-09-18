import React, { Component } from 'react';
import * as d3 from 'd3';
import Link from 'next/link';

class Chapter3 extends Component {
    d3Test = () => {
        d3.csv("/static/csv/worldcup.csv", function(data) {
            overallTeamViz(data);
          })
          
        function overallTeamViz(incomingData) {
        d3.select("svg")
        .append("g")
        .attr("id", "teamsG")
        .attr("transform", "translate(50,300)")
        .selectAll("g")
        .data(incomingData)
        .enter()
        .append("g")
        .attr("class", "overallG")
        .attr("transform", function (d,i) {return "translate(" + (i * 50) + ", 0)"});
            
        var teamG = d3.selectAll("g.overallG");
            
        teamG
        .append("circle")
        .attr("r", 20)
        .style("fill", "pink")
        .style("stroke", "black")
        .style("stroke-width", "1px")
        
        teamG
        .append("text")
        .style("text-anchor", "middle")
        .attr("y", 30)
        .style("font-size", "10px")
        .text(function(d) {return d.team})
          }
        
    }
    componentWillMount() {
        this.d3Test();
    }

    componentWillUpdate() {
        this.d3Test();
    }
    render() {
        return (
            <React.Fragment>
                <div id="viz">
                    <svg>
                    </svg>
                </div>
                <div id="controls" />
            </React.Fragment>
        )
    }
}

export default Chapter3;