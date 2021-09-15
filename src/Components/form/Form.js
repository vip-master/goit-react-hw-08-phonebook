import React from 'react';
import styling from '../stylingHOC/StylingHOC';
import { Styled } from './styles';

const Form = ({ skeleton, data, submit, change }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    submit();
  };

  return (
    <form>
      {skeleton.items.map(({ id, name, type }) => (
        <label key={id}>
          <h3>{name}</h3>
          <input value={data[id]} type={type} name={id} onChange={change} />
        </label>
      ))}
      <button type="submit" onClick={handleSubmit}>
        {skeleton.button}
      </button>
    </form>
  );
};

export default styling(Styled)(Form);
