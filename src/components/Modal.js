import React, { Component, Fragment } from 'react';

class Modal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      opened: false,
      addOpenedClassName: false,
      content: null
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.content === this.props.content) {
      return;
    }

    this.setState({ content: this.props.content });

    const opened = !prevState.opened;
    const addOpenedClassName = !prevState.addOpenedClassName;

    if (opened) {
      this.setState({ opened });

      setTimeout(() => this.setState({ addOpenedClassName }), 0);
    } else {
      this.setState({ addOpenedClassName, content: prevState.content });
      
      setTimeout(() => this.setState({ opened, content: null }), 400);
    }
  }

  render() {
    const { style, onClick } = this.props;
    const { opened, addOpenedClassName, content } = this.state;

    return (
      <Fragment>
        {opened && (
          <div className={`modal ${addOpenedClassName ? 'modal_opened' : ''}`} onClick={onClick}>
            <div className="modal__window" style={style}>
              {content}
            </div>
          </div>
        )}
      </Fragment>
    );
  }
}

export default Modal;
