import React, { useState } from "react";
import PropTypes from "prop-types";

import shortid from "shortid";

import s from "./AddContactForm.module.css";

const initialState = {
  name: "",
  number: "",
};

const AddContactForm = ({ contacts, handleAddContact }) => {
  const [contact, setContact] = useState(initialState);

  const handleContactData = (e) =>
    setContact({
      ...contact,
      [e.target.name]: e.target.value,
    });

  const handleSubmit = (e) => {
    e.preventDefault();

    for (const { name } of contacts) {
      if (name === contact.name) {
        alert(`${name} is already in contacts`);

        return;
      }
    }

    const newContact = {
      id: shortid.generate(),
      name: contact.name,
      number: contact.number,
    };

    handleAddContact(newContact);

    setContact({ name: "", number: "" });
  };

  return (
    <form onSubmit={handleSubmit} className={s.form}>
      <label className={s.label}>
        Name
        <input
          className={s.input}
          value={contact.name}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          onChange={handleContactData}
        />
      </label>

      <label className={s.label}>
        Number
        <input
          className={s.input}
          value={contact.number}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          onChange={handleContactData}
        />
      </label>

      <button type="submit" className={s.btn}>
        Add contact
      </button>
    </form>
  );
};

AddContactForm.propTypes = {
  contacts: PropTypes.array.isRequired,
  handleAddContact: PropTypes.func.isRequired,
};

export default AddContactForm;
