/*
 * Main App File
 *
 */

// Core Dependencies
const Routes = require('./Routes/Routes');

// 3rd Party Dependencies
const express = require('express');

// Global Constants
const app = express();

// Express App Settings
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(Routes);

// Global ENV Variables
const port = process.env.PORT || 3000;

// Hello Route
app.get('/hello', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.status(200).send('Hello');
});

// 404 Error Page
app.get('*', (req, res) => {
  res.status(404).send({ Error: 'Wrong Path bro 😅👋' });
});

// Server Starting
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
