import { connect } from 'react-redux';
import Grid from '../components/Grid';
import Contact from './Contact';

const mapStateToProps = store => ({
  items: store.contactsState.contacts,
  ItemComponent: Contact,
  emptyText: 'Contact List is Empty!'
});

export default connect(mapStateToProps)(Grid);
