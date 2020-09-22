import React, { Component } from 'react'
import OurNavbar from '../Navbars/OurNavbar';
import OurFooter from '../Footers/OurFooter';
import { Particles } from 'react-particles-js';

export default class Layout extends Component {
  render() {
    return (
      <>
        <OurNavbar />
        <Particles
          style={{ position: "fixed" }}
          params={{
            particles: {
              number: {
                value: 15
              },
              size: {
                value: 3
              },
              line_linked: {
                shadow: {
                  enable: true,
                  color: "#ffffff",
                  blur: 1
                }
              }
            },
          }}
        />
        {this.props.children}
        <OurFooter />
      </>
    )
  }
}
