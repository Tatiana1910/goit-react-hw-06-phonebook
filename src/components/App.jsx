import { GlobalStyle } from './GlobalStyle';

import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';

import {
  Container,
  Title,
  SectionStyle,
  Section,
  SectionTitle,
} from './App.styled';
import { Filter } from './Filter/Filter';

export const App = () => {
  return (
    <Container>
      <GlobalStyle />
      <Title>Phonebook</Title>
      <SectionStyle>
        <Section>
          <SectionTitle>Add contacts</SectionTitle>
          <ContactForm />
        </Section>
        <Section>
          <SectionTitle>Contacts</SectionTitle>
          <Filter />
          <ContactList />
        </Section>
      </SectionStyle>
    </Container>
  );
};
