import { useDispatch } from 'react-redux';
import { Label, Input } from './Filter.styled';
import { setFilter } from 'redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleFilter = ({ target: { value } }) => {
    dispatch(setFilter(value));
  };
  return (
    <Label>
      Find contacts by name
      <Input name="filter" type="text" onChange={handleFilter}></Input>
    </Label>
  );
};
