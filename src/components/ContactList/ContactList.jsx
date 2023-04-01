import { ContactItems } from 'components/ContactItems/ContactItems';
import { List } from './ContactList.styled';
import { getContacts, getFilter } from 'redux/selectors';
import { useSelector } from 'react-redux';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const makeFiltredContacts = () => {
    return contacts.filter(({ name }) => {
      return name.toLowerCase().includes(filter.toLowerCase());
    });
  };

  const makeList = array => {
    return array.map(({ id, name, number }) => {
      return <ContactItems key={id} id={id} name={name} number={number} />;
    });
  };

  return <List>{makeList(makeFiltredContacts())}</List>;
};
