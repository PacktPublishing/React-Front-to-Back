import React, { Component } from 'react';
import TextInputGroup from '../layout/TextInputGroup';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getContact, updateContact } from '../../actions/contactActions';

class EditContact extends Component {
  constructor(props) {
    super(props);
    this.nameInput = React.createRef();
    this.emailInput = React.createRef();
    this.phoneInput = React.createRef();
    this.state = {
      errors: {}
    };
  }

  componentDidMount() {
    console.log(123);
    const { id } = this.props.match.params;
    this.props.getContact(id);
  }

  onSubmit = e => {
    e.preventDefault();

    if (this.nameInput.current.value === '') {
      this.setState({ errors: { name: 'Name is required' } });
      return;
    }

    if (this.emailInput.current.value === '') {
      this.setState({ errors: { email: 'Email is required' } });
      return;
    }

    const { id } = this.props.match.params;

    const updContact = {
      id,
      name: this.nameInput.current.value,
      email: this.emailInput.current.value,
      phone: this.phoneInput.current.value
    };

    // Clear State
    this.setState({
      errors: ''
    });

    this.props.updateContact(updContact);

    // Redirect using history object
    this.props.history.push('/');
  };

  render() {
    const { errors } = this.state;
    const { contact } = this.props;

    if (contact) {
      const { name, email, phone } = contact;
      return (
        <div className="card mb-3">
          <div className="card-header bg-dark text-white">Edit Contact</div>
          <div className="card-body">
            <form onSubmit={this.onSubmit}>
              <TextInputGroup
                label="Name"
                name="name"
                placeholder="Enter Name..."
                value={name}
                controlled={false}
                reff={this.nameInput}
                error={errors.name}
              />
              <TextInputGroup
                label="Email"
                name="email"
                type="email"
                placeholder="Enter Email..."
                value={email}
                controlled={false}
                reff={this.emailInput}
                error={errors.email}
              />
              <TextInputGroup
                label="Phone"
                name="phone"
                placeholder="Enter Phone..."
                value={phone}
                controlled={false}
                reff={this.phoneInput}
              />
              <input
                type="submit"
                value="Edit Contact"
                className="btn btn-block"
              />
            </form>
          </div>
        </div>
      );
    } else {
      return <h3>Loading...</h3>;
    }
  }
}

EditContact.propTypes = {
  getContact: PropTypes.func.isRequired,
  updateContact: PropTypes.func.isRequired,
  contact: PropTypes.object
};

const mapStateToProps = state => ({
  contact: state.contact.current
});

export default connect(
  mapStateToProps,
  { getContact, updateContact }
)(EditContact);
