import { connect } from 'react-redux';
import Form from '../components/Form';

const mapStateToProps = store => ({
  buttonText: 'Save Contact'
});

const mapDispatchToProps = dispatch => ({
  onSubmit: (e, contact) => {
    e.preventDefault();

    dispatch({ type: 'EDIT_CONTACT', contact });
    dispatch({ type: 'CLOSE_MODAL' });
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
