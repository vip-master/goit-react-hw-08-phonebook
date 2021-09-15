import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getSignIn } from '../../utils/redux/selectors';
import { signInContacts } from '../../utils/redux/operations';
import { changeSignIn } from '../../utils/redux/actions';
import Section from '../section/Section';
import Form from '../form/Form';
import { StyledSection } from './styles';

const skeleton = {
  items: [
    {
      id: 'email',
      name: 'Login',
      type: 'text',
    },
    {
      id: 'password',
      name: 'Password',
      type: 'password',
    },
  ],
  button: 'Sign In',
};

const SingIn = () => {
  const data = useSelector(getSignIn);
  const dispatch = useDispatch();

  const submit = () => {
    dispatch(signInContacts(data));
  };

  const change = ({ target: { name, value } }) => {
    dispatch(changeSignIn({ [name]: value }));
  };

  return (
    <Section StyledSection={StyledSection} title="Sing In">
      <Form skeleton={skeleton} data={data} submit={submit} change={change} />
    </Section>
  );
};

export default SingIn;
