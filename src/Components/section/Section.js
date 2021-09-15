import React from 'react';
import PropTypes from 'prop-types';
import { StyledTitle } from './styles';

function Section({ title = 'Title of Section', children }) {
  return (
    <section>
      <StyledTitle>{title}</StyledTitle>
      {children}
    </section>
  );
}

Section.propTypes = {
  title: PropTypes.string,
};

export default Section;
