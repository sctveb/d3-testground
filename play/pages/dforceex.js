import React, { Component } from "react";
import * as d3 from "d3";
import Head from 'next/head';

class D3ForceExample extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      loadError: false,
    }
    this.testRef = React.createRef();
  }
  

  componentDidMount() {
    const svg = d3.select("svg"),
      width = +svg.attr("width"),
      height = +svg.attr("height");

    const simulation = d3.forceSimulation()
      .force("link", d3.forceLink().id(function (d) { return d.id; }))
      .force("charge", d3.forceManyBody())
      .force("center", d3.forceCenter(width / 2, height / 2));

    d3.json("../../static/json/dforceex.json", function (error, graph) {
      if (error) throw error;

      const link = svg.append("g")
        .attr("class", "links")
        .selectAll("line")
        .data(graph.links)
        .enter().append("line");

      const node = svg.append("g")
        .attr("class", "nodes")
        .selectAll("circle")
        .data(graph.nodes)
        .enter().append("circle")
        .attr("r", 2.5)
        .call(d3.drag()
          .on("start", dragstarted)
          .on("drag", dragged)
          .on("end", dragended));

      node.append("title")
        .text(function (d) { return d.id; });

      simulation
        .nodes(graph.nodes)
        .on("tick", ticked);

      simulation.force("link")
        .links(graph.links);

      function ticked() {
        link
          .attr("x1", function (d) { return d.source.x; })
          .attr("y1", function (d) { return d.source.y; })
          .attr("x2", function (d) { return d.target.x; })
          .attr("y2", function (d) { return d.target.y; });

        node
          .attr("cx", function (d) { return d.x; })
          .attr("cy", function (d) { return d.y; });
      }
    });

    function dragstarted(d) {
      if (!d3.event.active) simulation.alphaTarget(0.3).restart();
      d.fx = d.x;
      d.fy = d.y;
    }

    function dragged(d) {
      d.fx = d3.event.x;
      d.fy = d3.event.y;
    }

    function dragended(d) {
      if (!d3.event.active) simulation.alphaTarget(0);
      d.fx = null;
      d.fy = null;
    }

  }
  render() {
    console.log(this.state)
    return (
      <React.Fragment>
        <Head>
          <link rel="stylesheet" href="/static/css/d-force.css" />
        </Head>
        <svg width="960" height="600"></svg>
        <a href="https://bl.ocks.org/steveharoz/8c3e2524079a8c440df60c1ab72b5d03">source link</a>
      </React.Fragment>
    );
  }
}

export default D3ForceExample;
