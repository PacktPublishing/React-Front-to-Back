import React, { Component } from 'react';

class AddContact extends Component {
  state = {
    name: '',
    email: '',
    phone: ''
  };

  render() {
    const { name, email, phone } = this.state;

    return (
      <div className="card mb-3">
        <div className="card-header">Add Contact</div>
        <div className="card-body">
          <form>
            <div className="form-group">
              <label htmlFor="name">Name: </label>
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Enter name..."
                value={name}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email: </label>
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="Enter email..."
                value={email}
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone: </label>
              <input
                type="text"
                name="phone"
                className="form-control"
                placeholder="Enter phone..."
                value={phone}
              />
            </div>
            <input
              type="submit"
              value="Add Contact"
              className="btn btn-block"
            />
          </form>
        </div>
      </div>
    );
  }
}

export default AddContact;
