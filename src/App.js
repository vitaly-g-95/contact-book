import React, { Component, Fragment } from 'react';
import AddContactButton from './containers/AddContactButton';
import Modal from './containers/Modal';

class App extends Component {
  render() {
    return (
      <Fragment>
        <div className="container my-5">
          <AddContactButton
            className="d-table mx-auto"
            text="Add Contact"
          />
        </div>

        <Modal />
      </Fragment>
    );
  }
}

export default App;
