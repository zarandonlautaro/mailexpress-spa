import React, { Component } from 'react';
import { withRouter, Link } from "react-router-dom";
import { Container, Row, Col, Form, Button, Card, CardBody, CardHeader, } from 'reactstrap';
import { validateEmail } from '../../utils/formHelpers';
import { toast } from 'react-toastify';
import * as axios from '../../utils/axios';

import OurInput from '../Inputs/OurInput';

class FormLogin extends Component {
  state = {
    email: '',
    password: '',
    loading: false,
    errors: {
      email: '',
      password: '',
    },
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

  handleKeyPress = (e) => {
    if (e.key === 'Enter') return this.handleLogin;
    return 0;
  }

  handleLogin = async (e) => {
    e.preventDefault();
    this.setState({ loading: true });
    const { email, password } = this.state;
    const res = await axios.axiosPost('/user/login', {
      email,
      password,
    });
    const {
      success, body, message
    } = res.data;
    if (success) this.validLogin(body)
    return this.invalidLogin(message);
  }

  validLogin = (token) => {
    const { history } = this.props;
    return history.push(`/auth/${token}`);
  }

  invalidLogin = (message) => {
    this.setState({ loading: false });
    return toast.error(message)
  }

  render() {
    const { loading, errors: { email, password } } = this.state;
    const disabledButton = loading;
    return (
      <Container>
        <Row className="pt-5">
          <Col lg={6} sm={12} className="mx-auto">
            <Card>
              <CardHeader>
                Login to database of users
              </CardHeader>
              <CardBody>
                <Form className="form" onSubmit={this.handleLogin}>
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
                      <Button disabled={disabledButton} color="primary" type="submit">
                        Log In
                    </Button>
                    </Col>
                    <Col className="text-center">
                      <Button to="/register" color="secondary" outline tag={Link} className="UncontrolledAlert-link">
                        Sign Up
                    </Button>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container >
    )
  }
}

export default withRouter(FormLogin);