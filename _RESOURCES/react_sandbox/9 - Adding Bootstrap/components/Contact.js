import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Contact extends Component {
  render() {
    const { name, email, phone } = this.props;
    // const { contacts } = this.state;

    return (
      <div className="card card-body mb-3">
        <h4>{name}</h4>
        <ul class="list-group">
          <li class="list-group-item">Email: {email}</li>
          <li class="list-group-item">Phone: {phone}</li>
        </ul>
      </div>
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired
};

export default Contact;
