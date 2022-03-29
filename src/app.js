/*
 * Main App File
 *
 */

// Core Dependencies
// 3rd Party Dependencies
const express = require('express');

// Global Constants
const app = express();

// Global ENV Variables
const port = 3000;

// Main Server init Code
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Server Starting
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
