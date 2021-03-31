const express = require('express');
const path = require('path');
const db = require('../database/index.js');

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, '../public')));
app.use(express.json());


app.get('/api/users/', (req, res) => {
  db.getUsers((err, data) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).send(data)
    }
  });
})

app.post('/api/users', (req, res) => {
  let username = req.body.username;
  let password = req.body.password;
  db.addUser(username, password, (err, data) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).send(`Added ${username}`);
    }
  })
});

app.listen(port, () => {
  console.log(`Server listening on port: ${port}`)
})