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
    inputCondition = <h3>Email Valido</h3>;
  } else {
    inputCondition = <h3>Email Inválido</h3>;
  }
  
  return (
    <div>
      <h2 data-testid="id-email-user">{`Valor: ${email}`}</h2>
      {inputCondition}
    </div>
  );
};

export default ValidEmail;
