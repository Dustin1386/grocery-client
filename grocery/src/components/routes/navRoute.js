import React, { Component } from 'react'
import Nav from '../nav/nav'

//instantiates the component for the nav bar
class NavRoute extends Component {
    render() {
    return (
      <section>
        <Nav />
      </section>
    );
  }
}

export default NavRoute