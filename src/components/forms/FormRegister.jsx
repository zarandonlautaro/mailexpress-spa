import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { Container, Row, Col, Form, Button, Card, CardBody, CardHeader } from 'reactstrap';
import { validateEmail } from '../../utils/formHelpers';
import { toast } from 'react-toastify';
import * as axios from '../../utils/axios';

import OurInput from '../Inputs/OurInput';

class FormRegister extends Component {
  state = {
    name: '',
    lastname: '',
    dni: '',
    age: '',
    email: '',
    password: '',
    errors: {
      name: '',
      lastname: '',
      dni: '',
      age: '',
      email: '',
      password: '',
    }
  }

  handleChangeInputForm = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleValidateInputForm = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    const { errors } = this.state;
    if (name === 'email') {
      const validEmail = validateEmail(value);
      if (validEmail) return this.setState({
        errors: {
          email: '',
        }
      });
      errors[name] = `enter a valid email`;
    } else {
      errors[name] = (value.length < 6 && value.length !== 0) ? `${name} must be longer than 6 characters` : '';
    }
    return this.setState({ errors, [name]: value });
  }

  handleRegister = async (e) => {
    e.preventDefault();
    this.setState({ loading: true });
    const { name, lastname, dni, age, email, password, } = this.state;
    const res = await axios.axiosPost('/user/register', {
      name,
      lastname,
      dni,
      age,
      email,
      password,
    });
    const {
      success, body, message
    } = res.data;
    if (success) this.validRegister(body)
    return this.invalidRegister(message);
  }

  validRegister = (user) => {
    console.log(user)
    const { history } = this.props;
    return history.push(`/`);
  }

  invalidRegister = (message) => {
    this.setState({ loading: false });
    return toast.error(message)
  }

  render() {
    const { errors: {
      name,
      lastname,
      dni,
      age,
      email,
      password,
    } } = this.state;
    return (
      <Container>
        <Row className="pt-5">
          <Col lg={6} sm={12} className="mx-auto">
            <Card>
              <CardHeader>
                Register
              </CardHeader>
              <CardBody>
                <Form className="form" onSubmit={this.handleRegister}>
                  <OurInput
                    label="Name"
                    type="name"
                    name="name"
                    error={name}
                    placeholder="Enter your name"
                    onChange={this.handleChangeInputForm}
                    onBlur={this.handleValidateInputForm}
                  />
                  <OurInput
                    label="Lastname"
                    type="lastname"
                    name="lastname"
                    error={lastname}
                    placeholder="Enter your lastname"
                    onChange={this.handleChangeInputForm}
                    onBlur={this.handleValidateInputForm}
                  />
                  <OurInput
                    label="DNI"
                    type="number"
                    name="dni"
                    error={dni}
                    placeholder="Enter your dni"
                    onChange={this.handleChangeInputForm}
                    onBlur={this.handleValidateInputForm}
                  />
                  <OurInput
                    label="Birthday"
                    type="date"
                    name="age"
                    error={dni}
                    placeholder="Enter your birthday"
                    onChange={this.handleChangeInputForm}
                    onBlur={this.handleValidateInputForm}
                  />
                  <OurInput
                    label="Email"
                    type="email"
                    name="email"
                    error={email}
                    placeholder="myemail@email.com"
                    onChange={this.handleChangeInputForm}
                    onBlur={this.handleValidateInputForm}
                  />
                  <OurInput
                    label="Password"
                    type="password"
                    name="password"
                    error={password}
                    placeholder="********"
                    onKeyPress={this.handleKeyPress}
                    onBlur={this.handleValidateInputForm}
                    onChange={this.handleChangeInputForm}
                  />
                  <Row>
                    <Col className="text-center">
                      <Button color="secondary" outline to="/" tag={Link} className="UncontrolledAlert-link">
                        Log In
                    </Button>
                    </Col>
                    <Col className="text-center">
                      <Button color="primary" type="submit">Sign In</Button>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default withRouter(FormRegister);
