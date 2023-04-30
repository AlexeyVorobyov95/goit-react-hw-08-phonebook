import { FilterContainer, Input, Label, Span } from 'components/Filter/Filter.styled';
import { useDispatch } from 'react-redux';
import { setStatusFilter } from 'redux/contacts/filtersSlice';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleFilter = evt => {
    dispatch(setStatusFilter(evt.target.value));
  };
  return (
    <FilterContainer>
      {/* <Title>Finde contact</Title> */}
      <Label htmlFor="">
        <Span> Finde contact</Span>
        <Input type="text" onChange={handleFilter} />
      </Label>
    </FilterContainer>
  );
};
