import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from '../../utils/redux/selectors';
import { changeFilter } from '../../utils/redux/actions';

function Filter() {
  const value = useSelector(getFilter);

  const dispatch = useDispatch();

  const onChange = (e) => dispatch(changeFilter(e.target.value.trim()));

  return (
    <>
      <input value={value} name="filter" type="text" onChange={onChange} />
    </>
  );
}

export default Filter;
