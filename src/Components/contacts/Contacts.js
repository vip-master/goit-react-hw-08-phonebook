import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { isExist, getContactForm } from '../../utils/redux/selectors';
import { changeContactForm } from '../../utils/redux/actions';
import { addContacts } from '../../utils/redux/operations';
import Form from '../form/Form';
import Filter from '../filter/Filter';
import List from '../list/List';
import Section from '../section/Section';
import { Container } from './styles';
import { v4 as uuidv4 } from 'uuid';

const skeleton = {
  items: [
    {
      id: 'name',
      name: 'Name',
      type: 'text',
    },
    {
      id: 'number',
      name: 'Number',
      type: 'tel',
    },
  ],
  button: 'Add Contact',
};

const Contacts = () => {
  const data = useSelector(getContactForm);
  const exist = useSelector(isExist);
  const dispatch = useDispatch();

  if (exist) alert('This contact is already exist!');

  const submit = () => {
    dispatch(addContacts({ ...data, id: uuidv4() }));
  };

  const change = ({ target: { name, value } }) => {
    dispatch(changeContactForm({ [name]: value }));
  };

  return (
    <Section title="Contacts">
      <Container>
        <Form skeleton={skeleton} data={data} submit={submit} change={change} />
        <div>
          <Filter />
          <List />
        </div>
      </Container>
    </Section>
  );
};

export default Contacts;
