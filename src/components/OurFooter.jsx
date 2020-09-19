import React, { Component } from 'react'
import IconGitHub from '../assets/img/github.svg';
import IconLinkedin from '../assets/img/linkedin.svg';
import { Container, Row, Col } from 'reactstrap';

export default class OurFooter extends Component {
  render() {
    return (
      <footer color="dark">
        <Container>
          <Row>
            <Col className="text-center">
              Created with 💌 by Lautaro Zarandón
        <a style={{ padding: '0rem 1rem' }} target="_blank" href="https://github.com/zarandonlautaro"><img src={IconGitHub} alt="Git Hub" /></a>
              <a style={{ padding: '0rem 1rem' }} target="_blank" href="https://www.linkedin.com/in/zarandonlautaro/"><img src={IconLinkedin} alt="Linkedin" /></a>
            </Col>
          </Row>
        </Container>
      </footer>
    )
  }
}
