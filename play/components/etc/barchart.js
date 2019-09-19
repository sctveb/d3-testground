import React, { Component } from 'react';
import * as d3 from 'd3';


class BarChart extends Component {
    xScale = d3.scaleBand().paddingInner(0.1);
    yScale = d3.scaleLinear();
    updateD3(props) {
        const { data } = props;
        this.xScale.domain(data.map( d => d.tag)).range([0, props.width]);
        this.yScale.domain([0, d3.max(_data, d => d.mount)]).range([0, props.height]);
    }
    componentWillMount() {
        this.updateD3(this.props)
    }
    componentWillUpdate(nextProps) {
        this.updateD3(nextProps)
    }
    render() {
        const { x, y, data } = this.props;
        return (
            <>
            <g transform={`translate(${x}, ${y})`}>
                {data.map((d,i) => {
                    <Bar key={d.tag} d={d} x={this.xScale(d.tag)} y={-this.yScale(d.mount)} width={this.xScale.bandwidth()} height={this.yScale(d.mount)} />
                })}
            </g>
            
            </>
        )
    }
}

export default BarChart;    