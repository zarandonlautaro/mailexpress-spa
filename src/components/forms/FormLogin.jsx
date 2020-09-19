import React, { Component } from 'react';
import {
  Container, Row, Col, Form,
  FormGroup, Label, Input,
  Button, UncontrolledAlert, Card, CardBody, CardHeader
} from 'reactstrap';
import * as axios from '../../utils/axios';

export default class FormLogin extends Component {
  state = {
    email: '',
    password: '',
  }

  handleChangeInputForm = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleLogin = async (e) => {
    e.preventDefault();
    const {
      email,
      password,
    } = this.state;
    const res = await axios.axiosPost('/user/login', {
      email,
      password,
    });
    const { message } = res.data
    console.log(message)
  }

  render() {
    return (
      <Container>
        <Row className="pt-5">
          <Col lg={6} sm={12} className="mx-auto">
            <Card>
              <CardHeader>
                Login
              </CardHeader>
              <CardBody>
                <Form className="form" onSubmit={this.handleLogin}>
                  <Col>
                    <FormGroup>
                      <Label>Email</Label>
                      <Input
                        type="email"
                        name="email"
                        id="exampleEmail"
                        placeholder="myemail@email.com"
                        onChange={this.handleChangeInputForm}
                      />
                    </FormGroup>
                  </Col>
                  <Col>
                    <FormGroup>
                      <Label for="examplePassword">Password</Label>
                      <Input
                        type="password"
                        name="password"
                        id="examplePassword"
                        placeholder="********"
                        onChange={this.handleChangeInputForm}
                      />
                    </FormGroup>
                  </Col>
                  <Col>
                    <UncontrolledAlert color="dark">
                      You'v not yet registered? <a href="/register" className="UncontrolledAlert-link">Go to form register</a>
                    </UncontrolledAlert>
                  </Col>
                  <Col className="text-center">
                    <Button color="primary" type="submit">Login</Button>
                  </Col>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    )
  }
}
