import React, { Component } from 'react';
import Link from 'next/link';

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <Link href="/chp3"><a>chp3</a></Link>
      </React.Fragment>
    )
  }
}

export default Home;