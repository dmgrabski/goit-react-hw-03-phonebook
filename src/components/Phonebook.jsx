import React from "react";
import Section from "./Section";
import ContactForm from "./ContactForm";
import Contacts from "./ContactList";
import Filter from "./Filter";

const Phonebook = ({ filter, filteredContacts, onFilterChange, onSubmit, setContacts, onDelete }) => {
  
  return (
    <>
      <Section title="Phonebook">
        <ContactForm onSubmit={onSubmit} />
      </Section>
      <Section title="Contacts">
        <Filter filter={filter} setFilter={onFilterChange} />
        <Contacts contacts={filteredContacts} onDelete={onDelete} />
      </Section>
    </>
  );
};

export default Phonebook;
