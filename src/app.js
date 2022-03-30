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
/*
Postmain Raw Json Input
{
    "domain": "google.com"
}
*/

app.get('/dns', async (req, res) => {
  // console.log(req.body);
  // console.log('Data from App.js: ', data);
  res.setHeader('Content-Type', 'application/json');
  res.status(200).send(await Dns.lookUp(req.body));
});

// Dns Main/Resolve Route
/*
Postmain Raw Json Input
{
    "domain": "dorkyclicks.com",
    "rrtype": "TXT"
}
    ///////////////////////////////////
    rrtype can be vary from A, AAAA, CAA, MX,etc
*/
app.get('/dns/resolve', async (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.status(200).send(await Dns.resolve(req.body));
});

// Hello Route
app.get('/Hello', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.status(200).send(Hello);
});

// 404 Error Page
app.get('*', (req, res) => {
  res.status(404).send({ Error: 'Wrong Path bro 😅👋' });
});

// Server Starting
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
