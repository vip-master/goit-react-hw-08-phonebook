import React from 'react';
import ContactItem from './item/Item';
import Loader from '../loader/Loader';
import { useSelector, useDispatch } from 'react-redux';
import { delContacts } from '../../utils/redux/operations';
import { getFContacts, isLoading } from '../../utils/redux/selectors';

function List() {
  const contacts = useSelector(getFContacts);
  const loader = useSelector(isLoading);
  const dispatch = useDispatch();

  const onDelete = (e) => dispatch(delContacts(e.target.id));

  return (
    <>
      {loader && <Loader />}
      <ul>
        {contacts.map((contact) => (
          <ContactItem key={contact.id} contact={contact} onDelete={onDelete} />
        ))}
      </ul>
    </>
  );
}

export default List;
