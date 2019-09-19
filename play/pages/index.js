import React, { Component } from 'react';
import Link from 'next/link';

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <h1>d3.js in Action (with React)</h1>
        <Link href="/chp2"><a>chp2</a></Link>
        <Link href="/chp3"><a>chp3</a></Link>
      </React.Fragment>
    )
  }
}

export default Home;