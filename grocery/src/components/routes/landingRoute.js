import React, { Component } from 'react'
import Landing from '../landing/landing'

//instantiates the component for the landing page
class LandingRoute extends Component {
    render() {
    return (
      <section>
        <Landing />
      </section>
    );
  }
}

export default LandingRoute