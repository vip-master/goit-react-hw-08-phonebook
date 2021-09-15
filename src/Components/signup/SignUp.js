import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getSignUp } from '../../utils/redux/selectors';
import { signUpContacts } from '../../utils/redux/operations';
import { changeSignUp } from '../../utils/redux/actions';
import Section from '../section/Section';
import Form from '../form/Form';
import { StyledSection } from './styles';

const skeleton = {
  items: [
    {
      id: 'email',
      name: 'Email',
      type: 'text',
    },
    {
      id: 'password',
      name: 'Password',
      type: 'password',
    },
  ],
  button: 'Sign Up',
};

const SingUp = () => {
  const data = useSelector(getSignUp);
  const dispatch = useDispatch();

  const submit = () => {
    dispatch(signUpContacts(data));
  };

  const change = ({ target: { name, value } }) => {
    dispatch(changeSignUp({ [name]: value }));
  };

  return (
    <Section StyledSection={StyledSection} title="Sign Up">
      <Form skeleton={skeleton} data={data} submit={submit} change={change} />
    </Section>
  );
};

export default SingUp;
