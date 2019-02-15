import {
  GET_CONTACTS,
  DELETE_CONTACT,
  ADD_CONTACT,
  GET_CONTACT,
  UPDATE_CONTACT,
  CLEAR_CONTACT
} from './types';

export const getContacts = () => dispatch => {
  dispatch(clearContact());
  return {
    type: GET_CONTACTS
  };
};

export const deleteContact = id => {
  // console.log('delete', id);
  return {
    type: DELETE_CONTACT,
    payload: id
  };
};

export const addContact = contact => {
  return {
    type: ADD_CONTACT,
    payload: contact
  };
};

export const getContact = id => {
  return {
    type: GET_CONTACT,
    payload: id
  };
};

export const updateContact = contact => {
  console.log(contact);
  return {
    type: UPDATE_CONTACT,
    payload: contact
  };
};

export const clearContact = () => {
  return {
    type: CLEAR_CONTACT
  };
};
