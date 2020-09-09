const Model = require('../models/user');

module.exports = (req, res) => {
  const data = new Model({
    username: req.body.username,
    password: req.body.password,
  });

  data.save().then((doc) => {
    res.status(201).json({ message: 'Novo usuário', data: doc });
  }).catch(err => {
    res.status(500).send('Erro ao salvar o usuário no banco', err);
  });
};
