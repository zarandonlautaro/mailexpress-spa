import React, { Component } from 'react';
import {
  Container, Row, Col, Form,
  FormGroup, Label, Input,
  Button, Card, CardBody, CardHeader, FormText,
} from 'reactstrap';
import * as axios from '../../utils/axios';
import { validateEmail } from '../../utils/formHelpers';
import { withRouter, Link } from "react-router-dom";
import { toast } from 'react-toastify';
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
    const { history } = this.props;
    const {
      email,
      password,
    } = this.state;
    const res = await axios.axiosPost('/user/login', {
      email,
      password,
    });
    this.setState({ loading: true });
    const { success, body, message } = res.data;
    if (success) {
      const token = body;
      return history.push(`/auth/${token}`);
    }
    return this.handleError(message);
  }

  handleError = (message) => {
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
                  <Row>

                    <Col>
                      <FormGroup>
                        <Label>Email</Label>
                        <Input
                          type="email"
                          name="email"
                          id="exampleEmail"
                          placeholder="myemail@email.com"
                          onChange={this.handleChangeInputForm}
                          onBlur={this.handleValidateInputForm}
                        />
                        {
                          email
                          && (
                            <FormText color="danger">
                              {email}
                            </FormText>
                          )
                        }
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <FormGroup>
                        <Label for="examplePassword">Password</Label>
                        <Input
                          type="password"
                          name="password"
                          id="examplePassword"
                          placeholder="********"
                          onChange={this.handleChangeInputForm}
                          onBlur={this.handleValidateInputForm}
                          onKeyPress={this.handleKeyPress}
                        />
                        {
                          password
                          && (
                            <FormText color="danger">
                              {password}
                            </FormText>
                          )
                        }
                      </FormGroup>
                    </Col>
                  </Row>
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