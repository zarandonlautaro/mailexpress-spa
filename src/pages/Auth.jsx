import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { setToken } from '../utils/authHelpers';

class Auth extends Component {

  componentDidMount() {
    const { token } = this.props.match.params;
    setToken(token);
    const { history } = this.props;
    history.push('/dashboard');
  }

  render() {
    return (
      <section>
        Logging...
      </section>
    );
  }
}

export default withRouter(Auth);
