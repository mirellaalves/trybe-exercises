const mysqlx = require('@mysql/xdevapi');

const connection = () => {
  return mysqlx.getSession({
    user: 'root',
    password: '9730',
    host: 'localhost',
    port: 33060,
    schema: 'mvc_example',
  })
  .then((session) => {
    return session.getSchema('mvc_example');
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
};

module.exports = connection;
