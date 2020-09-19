import React, { Component } from 'react'

import OurNavbar from '../Navbars/OurNavbar';
import OurFooter from '../Footers/OurFooter';

export default class Layout extends Component {
  render() {
    return (
      <>
        <OurNavbar />
        {this.props.children}
        <OurFooter />
      </>
    )
  }
}
