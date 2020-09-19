import React, { Component } from 'react';
import '../assets/css/index.css';
import OurNavbar from '../components/OurNavbar';
import OurFooter from '../components/OurFooter';
import FormLogin from '../components/forms/FormLogin';


class Login extends Component {
  render() {
    return (
      <>
        <OurNavbar />
        <main>
          <section>
            <FormLogin />
          </section>
        </main>
        <OurFooter />
      </>
    );
  }
}

export default Login;
