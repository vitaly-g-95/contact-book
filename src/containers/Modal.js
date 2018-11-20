import { connect } from 'react-redux';
import Modal from '../components/Modal';

const mapStateToProps = store => ({
  content: store.uiState.modalContent,
  style: store.uiState.modalStyle
});

const mapDispatchToProps = dispatch => ({
  onClick: ({ target, currentTarget }) => {
    if (target === currentTarget) {
      dispatch({ type: 'CLOSE_MODAL' });
    }
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
