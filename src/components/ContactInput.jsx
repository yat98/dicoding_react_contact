/* eslint-disable react/prop-types */
import React from 'react';

class ContactInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      tag: '',
    };

    this.onNameChangeHandler = this.onNameChangeHandler.bind(this);
    this.onTagChangeHandler = this.onTagChangeHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onNameChangeHandler(e) {
    this.setState(() => ({
      name: e.target.value,
    }));
  }

  onTagChangeHandler(e) {
    this.setState(() => ({
      tag: e.target.value,
    }));
  }

  onSubmitEventHandler(e) {
    e.preventDefault();
    this.props.addContact(this.state);
  }

  render() {
    return (
      <form className='contact-input' onSubmit={this.onSubmitEventHandler}>
        <input type="text" placeholder="Nama" onChange={this.onNameChangeHandler} />
        <input type="text" placeholder="Tag" onChange={this.onTagChangeHandler} />
        <button type="submit">Tambah</button>
      </form>
    );
  }
}

export default ContactInput;