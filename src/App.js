import React, { Component } from "react";
import { connect } from "react-redux";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import Filter from "./components/Filter/Filter";
import { fetchContacts } from "./redux/phoneBook/contacts-operations";
import { getContacts, getLoading } from "./redux/phoneBook/contacts-selectors";

class App extends Component {
  state = {};
  componentDidMount() {
    this.props.fetchContacts();
  }
  render() {
    return (
      <div className="App">
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
        {this.props.isLoadingContacts && <h2>Loading...</h2>}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  contacts: getContacts(state),
  isLoadingContacts: getLoading(state),
});

const mapDispatchToProps = {
  fetchContacts: fetchContacts,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
