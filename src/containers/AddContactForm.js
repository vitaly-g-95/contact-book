import { connect } from 'react-redux';
import Form from '../components/Form';

const mapStateToProps = store => ({
  fields: store.contactsState.fields,
  buttonText: 'Add Contact'
});

const mapDispatchToProps = dispatch => ({
  onSubmit: (e, contact) => {
    e.preventDefault();

    dispatch({ type: 'ADD_CONTACT', contact });
    dispatch({ type: 'CLOSE_MODAL' });
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
