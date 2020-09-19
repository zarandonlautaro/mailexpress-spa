import React, { Component } from 'react';
import '../assets/css/index.css';
import OurNavbar from '../components/OurNavbar';
import OurFooter from '../components/OurFooter';
import FormRegister from '../components/forms/FormRegister';


class Register extends Component {
  render() {
    return (
      <>
        <OurNavbar />
        <main>
          <section>
            <FormRegister />
          </section>
        </main>
        <OurFooter />
      </>
    );
  }
}

export default Register;
