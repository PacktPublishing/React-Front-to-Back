import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './contact.css';

class Contact extends Component {
  render() {
    const { name, email, phone } = this.props;
    // const { contacts } = this.state;

    return (
      <div>
        <h4>{name}</h4>
        <ul>
          <li>Email: {email}</li>
          <li>Phone: {phone}</li>
        </ul>
      </div>
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired
};

export default Contact;
