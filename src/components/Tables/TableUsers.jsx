import React from 'react';
import { withRouter } from 'react-router-dom';
import { Col, Row, Table, Button } from 'reactstrap';
import { getDayMonthYear } from '../../utils/formHelpers';
import { IoIosTrash, IoIosCreate } from 'react-icons/io';
import { confirmDelete } from '../UIHelpers/confirmAlert';

const TableUser = (props) => {
  const { users, getUsers } = props;

  const editUser = (idUser) => {
    const { history } = props;
    return history.push(`/edit/${idUser}`);
  }

  return (
    <Table dark className="rounded">
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>DNI</th>
          <th>Birthday</th>
          <th>Registered</th>
          <th className="text-center">Options</th>
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
              <td>{getDayMonthYear(user.age)}</td>
              <td>{getDayMonthYear(user.date)}</td>
              <td>
                <Row>
                  <Col className="text-center">
                    <Button block color="warning" className="text-white" onClick={() => editUser(user._id)}><IoIosCreate /></Button>
                  </Col>
                  <Col className="text-center">
                    <Button block color="danger" onClick={() => confirmDelete(user._id, user.name, user.lastname, getUsers)}><IoIosTrash /></Button>
                  </Col>
                </Row>
              </td>
            </tr>
          ))
        }
      </tbody>
    </Table>
  );
}

export default withRouter(TableUser);
