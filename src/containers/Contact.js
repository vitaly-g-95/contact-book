import React from 'react';
import { connect } from 'react-redux';
import store from '../store';
import Contact from '../components/Contact';
import EditContactForm from './EditContactForm';

const mapStateToProps = store => ({});

const mapDispatchToProps = dispatch => ({
  onClick: ({ target }, id) => {
    const { contacts, fields } = store.getState().contactsState;

    const contact = contacts.filter(contact => contact.id === id)[0];

    const contactFields = [{ type: 'hidden', name: 'id', value: id }, ...fields]
      .map(field => Object.assign(
        {},
        field,
        { value: contact[field.name] }
      ));

    dispatch({ type: 'OPEN_MODAL', content: <EditContactForm fields={contactFields} />, target });
  },
  onRemoveClick: (e, id) => {
    e.stopPropagation();

    dispatch({ type: 'REMOVE_CONTACT', id });
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Contact);
