import { GlobalStyle } from './GlobalStyle';
import { useEffect, useState } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { nanoid } from 'nanoid';
import {
  Container,
  Title,
  SectionStyle,
  Section,
  SectionTitle,
} from './App.styled';
import { Filter } from './Filter/Filter';

export const App = () => {
  const [filter, setFilter] = useState('');
  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem('contacts');

    if (savedContacts !== null) {
      const parsedContacts = JSON.parse(savedContacts);
      return parsedContacts;
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (values, { resetForm }) => {
    let newContact = values;

    const check = contacts.filter(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );

    if (check.length) {
      alert(`${newContact.name} is already in contacts`);
    } else {
      newContact.id = nanoid();

      setContacts(prevState => [...prevState, newContact]);

      resetForm({
        name: '',
        number: '',
      });
    }
  };

  const deleteContact = contactId => {
    setContacts(contacts.filter(contact => contact.id !== contactId));
  };

  const filterContacts = event => {
    setFilter(event.currentTarget.value);
  };

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  return (
    <Container>
      <GlobalStyle />
      <Title>Phonebook</Title>
      <SectionStyle>
        <Section>
          <SectionTitle>Add contacts</SectionTitle>
          <ContactForm onSubmit={addContact} />
        </Section>
        <Section>
          <SectionTitle>Contacts</SectionTitle>
          <Filter onChange={filterContacts} />
          <ContactList
            filteredContacts={getFilteredContacts()}
            onDeleteContact={deleteContact}
          />
        </Section>
      </SectionStyle>
    </Container>
  );
};
