import { connect } from 'react-redux';
import Button from '../components/Button';

const mapStateToProps = store => ({});

const mapDispatchToProps = dispatch => ({
  onClick: ({ target }) => {
    dispatch({ type: 'MODAL_OPEN', content: 'test', target });
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Button);
