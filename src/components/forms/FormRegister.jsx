import React, { Component } from 'react';
import {
  Container, Row, Col, Form,
  FormGroup, Label, Input,
  Button, UncontrolledAlert, Card, CardBody, CardHeader
} from 'reactstrap';
import * as axios from '../../utils/axios';

export default class FormRegister extends Component {
  state = {
    name: '',
    lastname: '',
    dni: '',
    ages: '',
    email: '',
    password: '',
  }

  handleChangeInputForm = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleRegister = async (e) => {
    e.preventDefault();
    const {
      name,
      lastname,
      dni,
      ages,
      email,
      password,
    } = this.state;
    const res = await axios.axiosPost('/user/register', {
      name,
      lastname,
      dni,
      ages,
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
                Register
              </CardHeader>
              <CardBody>
                <Col>
                  <UncontrolledAlert color="dark">
                    You've not yet registered?<a href="/" className="UncontrolledAlert-link"> Go to login</a>
                  </UncontrolledAlert>
                </Col>
                <Form className="form" onSubmit={this.handleRegister}>
                  <Col>
                    <FormGroup>
                      <Label>Name</Label>
                      <Input
                        type="name"
                        name="name"
                        placeholder="Jhon"
                        onChange={this.handleChangeInputForm}
                      />
                    </FormGroup>
                  </Col>
                  <Col>
                    <FormGroup>
                      <Label>Lastname</Label>
                      <Input
                        type="lastname"
                        name="name"
                        placeholder="Smith"
                        onChange={this.handleChangeInputForm}
                      />
                    </FormGroup>
                  </Col>
                  <Col>
                    <FormGroup>
                      <Label>DNI</Label>
                      <Input
                        type="number"
                        name="dni"
                        placeholder="30020134"
                        onChange={this.handleChangeInputForm}
                      />
                    </FormGroup>
                  </Col>
                  <Col>
                    <FormGroup>
                      <Label>Ages</Label>
                      <Input
                        type="number"
                        name="ages"
                        placeholder="23"
                        onChange={this.handleChangeInputForm}
                      />
                    </FormGroup>
                  </Col>
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
                  <Col className="text-center">
                    <Button color="primary" type="submit">Register</Button>
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
