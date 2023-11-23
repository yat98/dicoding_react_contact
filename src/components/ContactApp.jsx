import ContactList from "./ContactList";
import ContactInput from "./ContactInput";
import { getData } from "../utils/data";
import React from "react";

class ContactApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      contacts: getData(),
    };

    this.onDeleteEventHandler = this.onDeleteEventHandler.bind(this);
    this.onAddContactHandler = this.onAddContactHandler.bind(this);
  }

  onDeleteEventHandler(id) {
    const contacts = this.state.contacts.filter((contact) => contact.id !== id);
    this.setState(() => ({ contacts }));
  }

  onAddContactHandler({ name, tag }) {
    this.setState((previousState) => ({
      contacts: [
        {
          id: +new Date(),
          name,
          tag,
          imageUrl: '/images/default.jpg',
        },
        ...previousState.contacts,
      ],
    }))
  }

  render() {
    return (<div className="contact-app">
      <h1>Contact App</h1>
      <h2>Add Contact</h2>
      <ContactInput addContact={this.onAddContactHandler} />
      <h2>Contact List</h2>
      <ContactList contacts={this.state.contacts} onDelete={this.onDeleteEventHandler} />
    </div>);
  }
}

export default ContactApp;