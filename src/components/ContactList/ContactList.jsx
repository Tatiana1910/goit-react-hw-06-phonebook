import { ContactItems } from 'components/ContactItems/ContactItems';
import { List } from './ContactList.styled';
import PropTypes from 'prop-types';

export const ContactList = ({ filteredContacts, onDeleteContact }) => {
  const makeList = array => {
    return array.map(({ name, number, id }) => {
      return (
        <ContactItems
          key={id}
          id={id}
          name={name}
          number={number}
          onClick={onDeleteContact}
        />
      );
    });
  };

  return <List>{makeList(filteredContacts)}</List>;
};

ContactList.propTypes = {
  filteredContacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
