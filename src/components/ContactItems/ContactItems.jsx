import { Button, Items } from './ContactItems.styled';
import PropTypes from 'prop-types';

export const ContactItems = ({ id, name, number, onClick }) => {
  return (
    <Items>
      <p>
        {name}: {number}
      </p>
      <Button
        type="button"
        onClick={() => {
          onClick(id);
        }}
      >
        Delete
      </Button>
    </Items>
  );
};

ContactItems.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
