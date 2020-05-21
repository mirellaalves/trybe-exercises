import React from 'react';

const verifyEmail = (email) => {
  const emailRegex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
  return emailRegex.test(email);
};

const ValidEmail = (props) => {
  const { email } = props;

  let inputCondition;
  if (email === '') {
    inputCondition = '';
  } else if (verifyEmail(email)) {
    inputCondition = 'Email Valido';
  } else {
    inputCondition = 'Email Inválido';
  }
  
  return (
    <div>
      <h2 data-testid="id-email-user">{`Valor: ${email}`}</h2>
      <h3 data-testid="id-valid-email">{inputCondition}</h3>
    </div>
  );
};

export default ValidEmail;
