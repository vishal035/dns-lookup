/*
 * Main App File
 *
 */

// Core Dependencies
const hello = require('./Utils/Hello');
const resData = require('./Dns/DNS');

// 3rd Party Dependencies
const express = require('express');

// Global Constants
const app = express();

// Express App Settings
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// Global ENV Variables
const port = 3000;

// Main Server init Code
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// DNS Main Lookup Route
app.get('/dns', async (req, res) => {
  console.log(req.body);
  const data = await resData.lookUp(req.body);
  console.log(data);
  res.setHeader('Content-Type', 'application/json');
  res.status(200).send(resData.lookUp(req.body));
});

// Hello Route
app.get('/hello', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.status(200).send(hello);
});

// Server Starting
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
