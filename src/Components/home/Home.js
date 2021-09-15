import React from 'react';
import Section from '../section/Section';
import { Pasta } from './styles';

const pasta = 'We want present u beautiful app for storing contacts!';

const Home = () => {
  return (
    <Section title="Hello dear friend">
      <Pasta>{pasta}</Pasta>
    </Section>
  );
};

export default Home;
