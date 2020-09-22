import React, { useState, useEffect } from 'react';
import TableUsers from '../components/Tables/TableUsers';
import { axiosGet } from '../utils/axios';
import { Link } from 'react-router-dom'
import { getUserDataToken } from '../utils/authHelpers';
import { Button, FormGroup, InputGroup, InputGroupAddon, InputGroupText, Input, Row, Col, Container } from 'reactstrap';
import { IoIosAdd, IoIosPerson, IoIosSearch } from 'react-icons/io';
const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    setLoading(true);
    getUsers();
  }, []);

  useEffect(() => {
    return setFilteredUsers(
      users.filter((user) =>
        user.name.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, users]);

  const getUsers = async () => {
    const res = await axiosGet('/user');
    setLoading(false);
    return setUsers(res.data.body);
  }

  const handleKeyDown = (e) => {
    if (e.keyCode === 27) return setSearch('');
    return false;
  }

  const userData = getUserDataToken();
  if (loading) {
    return <p>Loading users...</p>;
  }
  return (
    <section>
      <Container>
        <Row>
          <Col lg={12} className="my-2">
            <h3>Welcome back {userData.name}</h3>
          </Col>
          <Col>
            <FormGroup>
              <InputGroup className="input-group-alternative">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <IoIosSearch />
                  </InputGroupText>
                </InputGroupAddon>
                <Input
                  placeholder="Find user by name"
                  type="text"
                  autoFocus
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  onKeyDown={handleKeyDown}
                  name="search"
                />
              </InputGroup>
            </FormGroup>
          </Col>
          <Col lg={3}>
            <Button block color="success" to='/register' tag={Link}><IoIosAdd /><IoIosPerson /> Add user </Button>
          </Col>
        </Row>
        <Row>
          <Col lg={12} className="mx-auto">
            <TableUsers
              users={filteredUsers}
              getUsers={getUsers}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Dashboard;
