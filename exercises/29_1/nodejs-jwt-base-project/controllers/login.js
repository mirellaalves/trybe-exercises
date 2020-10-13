const User = require('../models/user');
const jwt = require('jsonwebtoken');

const secret = 'seusecretdetoken';

module.exports = async (req, res) => {
  try {
  const username = req.body.username;
  const password = req.body.password;

  if (!username || !password) return res.status(401).json({ message: 'É necessário usuário e senha para fazer login' });

  const user = await User.findUser(username);

  if (!user || user.password !== password) return res.status(401).json({ message: 'Usuário não existe ou senha inválida' });

  const jwtConfig = {
    expiresIn: '7d',
    algorithm: 'HS256',
  };

  const token = jwt.sign({ data: user }, secret, jwtConfig);

  return res.status(200).json({
    token : token,
    expires: expires,
    message: 'Login efetuado com sucesso',
  });
  } catch (e) {
    return res.status(500).json({ message: 'Erro interno', error: e });
  }
};
