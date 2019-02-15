import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Contact extends Component {
  // constructor(){
  //   this.onShowClick = this.onShowClick.bind(this);
  // }
  state = {
    showContactInfo: false
  };

  // explain why this doesnt work
  // onShowClick() {
  //   console.log('clicked...');
        console.log(this.state.showContactInfo]);
  // }

  // explain there are other events that well work with as we move along

  onShowClick = id => console.log(`${id} clicked`);

  render() {
    const { id, name, email, phone } = this.props.contact;
    const { showContactInfo } = this.state;

    return (
      <div className="card card-body mb-3">
        <h4>
          {name}{' '}
          <i
            onClick={this.onShowClick.bind(this, id)}
            className="fas fa-plus"
          />
        </h4>
        {showContactInfo ? (
          <ul className="list-group">
            <li className="list-group-item">Email: {email}</li>
            <li className="list-group-item">Phone: {phone}</li>
          </ul>
        ) : null}
      </div>
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired
};

export default Contact;
