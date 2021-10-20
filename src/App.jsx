import React, { useState, useEffect } from "react";

import AddContactForm from "./components/AddContactForm/AddContactForm";
import Container from "./components/Container/Container";
import Filter from "./components/Filter/Filter";
import ContactList from "./components/ContactList/ContactList";

import s from "./App.module.css";

const localStorageContactsKey = "contacts";

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    const currentContacts = JSON.parse(
      localStorage.getItem(localStorageContactsKey)
    );

    if (currentContacts) {
      setContacts(currentContacts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(localStorageContactsKey, JSON.stringify(contacts));
  }, [contacts]);

  const handleAddContact = (newContact) =>
    setContacts([...contacts, newContact]);

  const handleFilter = (event) => setFilter(event.target.value);

  const handleDelete = (id) => {
    const filteredContacts = contacts.filter((contact) => contact.id !== id);

    setContacts(filteredContacts);
  };

  return (
    <Container>
      <div className={s.container}>
        <h1>Phonebook</h1>
        <AddContactForm handleAddContact={handleAddContact} contacts={contacts} />

        <h2>Contacts</h2>
        <Filter filterText={filter} handleFilter={handleFilter} />
        <ContactList
          contacts={contacts}
          filterText={filter}
          handleDelete={handleDelete}
        />
      </div>
    </Container>
  );
};

export default App;
