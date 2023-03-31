import { Label, Input } from './Filter.styled';
import PropTypes from 'prop-types';

export const Filter = ({ onChange }) => {
  return (
    <Label>
      Find contacts by name
      <Input name="filter" type="text" onChange={onChange}></Input>
    </Label>
  );
};

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
};
