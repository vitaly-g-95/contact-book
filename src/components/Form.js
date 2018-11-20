import React, { Component, Fragment } from 'react';
import Button from './Button';

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = this.props.fields.reduce(
      (accum, { name, value }) => Object.assign({}, accum, { [name]: value || '' }),
      {}
    );
  }

  render() {
    const { fields, buttonText, onSubmit } = this.props;

    return (
      <form onSubmit={e => onSubmit(e, this.state)}>
        {fields.map(({ type, name, value, label }) => (
          <Fragment key={name}>
            {type !== 'hidden' ? (
              <div className="form-group">
                <label htmlFor={name} className="form-group__label">
                  {label}:
                </label>

                <input
                  type={type || 'text'}
                  id={name}
                  className="input"
                  name={name}
                  value={this.state[name]}
                  autoComplete="off"
                  required
                  onChange={({ target }) => this.setState({ [target.name]: target.value })}
                />
              </div>
            ) : (
              <input type="hidden" name={name} value={this.state[name]} />
            )}
          </Fragment>
        ))}

        <Button
          type="submit"
          className="d-table mx-auto mt-4"
          text={buttonText}
        />
      </form>
    );
  }
}

export default Form;
