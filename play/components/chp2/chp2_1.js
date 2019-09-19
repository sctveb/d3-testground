import React, { Component } from "react";
import * as d3 from "d3";

class Chp2_1 extends Component {
  state = {
      data: [],
      loadError: false,
  };  
  componentDidMount() {
      d3.csv('../../static/csv/cities.csv').then(data => {
          this.setState({data})
      })
    
  }
  render() {
    return (
      <React.Fragment>
        {this.state.data.map(d => {
            return (
                <div key={d.label}>
                    {d.label} has {d.population}
                </div>
            )
        })}        
      </React.Fragment>
    );
  }
}

export default Chp2_1;
