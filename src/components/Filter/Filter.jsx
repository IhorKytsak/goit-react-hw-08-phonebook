import { useDispatch } from 'react-redux';

import { setFilterValue } from 'redux/contacts/contactsSlice';

const Filter = () => {
  const dispatch = useDispatch();

  const setFilterValueHandler = event => {
    const value = event.currentTarget.value.toUpperCase();

    dispatch(setFilterValue(value));
  };

  return (
    <div>
      <p>Find contacts by name</p>
      <input onChange={setFilterValueHandler}></input>
    </div>
  );
};

export default Filter;
