const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'student',
  password: 'student',
  database: 'ReactGoldberg'
});

connection.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Connected to MySQL!')
  }
});


const getUsers = (callback) => {
  connection.query('SELECT * FROM users', (err, result) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, result);
    }
  })
};

const addUser = (username, password, callback) => {
  connection.query(`INSERT INTO users (username, pass, wins) VALUES ('${username}', '${password}', ${0})`, (err, result) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, result);
    }
  })
};


module.exports = {
  getUsers,
  addUser,
}