import { connect } from 'react-redux';
import Modal from '../components/Modal';

const mapStateToProps = store => ({
  content: store.uiState.modalContent,
  style: store.uiState.modalStyle
});

const mapDispatchToProps = dispatch => ({
  onClick: ({ target, currentTarget }) => {
    dispatch({ type: 'MODAL_CLOSE', target, currentTarget });
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
