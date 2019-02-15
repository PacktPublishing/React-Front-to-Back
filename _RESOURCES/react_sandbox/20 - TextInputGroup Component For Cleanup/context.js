import React, { Component } from 'react';

const Context = React.createContext();

const reducer = (state, action) => {
  if (action.type === 'DELETE_CONTACT') {
    return {
      ...state,
      contacts: state.contacts.filter(contact => contact.id !== action.payload)
    };
  } else if (action.type === 'ADD_CONTACT') {
    return {
      ...state,
      contacts: [action.payload, ...state.contacts]
    };
  }
};

export class Provider extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: 'John Doe',
        email: 'john@gmail.com',
        phone: '555-555-5555'
      },
      {
        id: 2,
        name: 'Karen Williams',
        email: 'karen@gmail.com',
        phone: '444-444-4444'
      },
      {
        id: 3,
        name: 'Henry Johnson',
        email: 'henry@gmail.com',
        phone: '333-333-333'
      }
    ],
    dispatch: action => {
      this.setState(state => reducer(state, action));
    }
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
