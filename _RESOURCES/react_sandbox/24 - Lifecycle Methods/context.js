import React, { Component } from 'react';

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case 'DELETE_CONTACT':
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        )
      };
    case 'ADD_CONTACT':
      return {
        ...state,
        contacts: [action.payload, ...state.contacts]
      };
    default:
      return state;
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

  // Should be used when state is updated due to a change in props
  // Fired when component is rendered and updated - must return state values or null
  static getDerivedStateFromProps(props, state) {
    console.log('getDerivedStateFromProps');

    return null;
    // return {
    //   contacts: [
    //     {
    //       id: 1,
    //       name: 'John Doe',
    //       email: 'jdoe@gmail.com',
    //       phone: '444-444-4444'
    //     }
    //   ]
    // };
  }

  // Fires before mutations are made (eg. before the dom is updated)
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('getSnapshotBeforeUpdate');

    return null;
  }

  // Called when component mounts - Use for async requests
  componentDidMount() {
    console.log('componentDidMount');
  }

  // Calls when component is rendered and updated
  componentDidUpdate() {
    console.log('componentDidUpdate');
  }

  // Will be removed from React 17
  componentWillMount() {
    console.log('componentWillMount');
  }

  // Will be removed from React 17
  componentWillUpdate() {
    console.log('componentWillUpdate');
  }

  // Will be removed from React 17
  componentWillReceiveProps(nextState, nextProps) {
    console.log('componentWillRecieveProps');
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
