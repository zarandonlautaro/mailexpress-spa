import React, { useState, useEffect } from 'react';
import { Table, Container, Row, Col, Card } from 'reactstrap';
import { getUserDataToken } from '../../utils/authHelpers';
import * as axios from '../../utils/axios';
const TableUser = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const res = await axios.axiosGet('/user');
    setUsers(res.data.body);
  }
  const userData = getUserDataToken();
  return (
    <Container>
      <Row>
        <Col lg={12} className="my-3">
          <h1>Welcome {userData.name}</h1>
          <h2>List of users</h2>
        </Col>
        <Col>
          <Card>
            <Table>
              <thead>
                <tr>
                  <th>#</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>DNI</th>
                  <th>Edad</th>
                  <th>Register</th>
                </tr>
              </thead>
              <tbody>
                {
                  users.map((user, i) => (
                    <tr key={user._id}>
                      <th scope="row">{i + 1}</th>
                      <td>{user.name}</td>
                      <td>{user.lastname}</td>
                      <td>{user.dni}</td>
                      <td>{user.age}</td>
                      <td>{user.date}</td>
                    </tr>
                  ))
                }
              </tbody>
            </Table>
          </Card>
        </Col>
      </Row>


    </Container>
  );
}

export default TableUser;