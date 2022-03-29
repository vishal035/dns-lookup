/*
 * Main App File
 *
 */

// Core Dependencies
const Hello = require('./Utils/Hello');
const Dns = require('./Dns/Main');

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
  const data = await Dns.lookUp(req.body);
  console.log('Data from App.js: ', data);
  res.setHeader('Content-Type', 'application/json');
  res.status(200).send(await Dns.lookUp(req.body));
});

// Dns Main/Resolve Route
app.get('/dns/resolve', async (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.status(200).send(await Dns.resolve(req.body));
});

// Hello Route
app.get('/Hello', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.status(200).send(Hello);
});

// Server Starting
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
