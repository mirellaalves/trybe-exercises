const User = require('../models/user');

module.exports = async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  if (!username || !password) return res.send(401);

  const user = await User.findOne({ username });

  if (!user) res.status(401).json(false);

  res.status(200).json(true);
};
