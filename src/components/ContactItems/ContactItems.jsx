import { useDispatch } from 'react-redux';
import { Button, Items } from './ContactItems.styled';
import PropTypes from 'prop-types';
import { deleteContact } from 'redux/contactsSlice';

export const ContactItems = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const handleDelete = idEvt => {
    dispatch(deleteContact(idEvt));
  };

  return (
    <Items>
      <p>
        {name}:{number}
      </p>
      <Button type="button" onClick={() => handleDelete(id)}>
        Delete
      </Button>
    </Items>
  );
};

ContactItems.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
