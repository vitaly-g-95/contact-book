import React from 'react';
import { connect } from 'react-redux';
import Button from '../components/Button';
import AddContactForm from './AddContactForm';

const mapStateToProps = store => ({});

const mapDispatchToProps = dispatch => ({
  onClick: ({ target }) => {
    dispatch({ type: 'OPEN_MODAL', content: <AddContactForm />, target });
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Button);
