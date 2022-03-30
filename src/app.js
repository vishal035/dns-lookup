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

// Dns Main/ResolveIP Route
app.get('/dns/ip', async (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.status(200).send(await Dns.reverseIP(req.body));
});

// Dns Main/ResolveIPV4 Route
app.get('/dns/ipv4', async (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.status(200).send(await Dns.resolveIPV4(req.body));
});

// Dns Main/ResolveIPV6 Route
app.get('/dns/ipv6', async (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.status(200).send(await Dns.resolveIPV6(req.body));
});

// Dns Main/ResolveANY Route
app.get('/dns/any', async (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.status(200).send(await Dns.resolveANY(req.body));
});

// Dns Main/ResolveCNAME Route
app.get('/dns/cname', async (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.status(200).send(await Dns.resolveCNAME(req.body));
});

// Dns Main/ResolveCAA Route
app.get('/dns/caa', async (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.status(200).send(await Dns.resolveCAA(req.body));
});

// Dns Main/ResolveMX Route
app.get('/dns/mx', async (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.status(200).send(await Dns.resolveMX(req.body));
});

// Dns Main/ResolveNAPTR Route
app.get('/dns/naptr', async (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.status(200).send(await Dns.resolveNAPTR(req.body));
});

// Dns Main/ResolveNS Route
app.get('/dns/ns', async (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.status(200).send(await Dns.resolveNS(req.body));
});

// Dns Main/ResolvePTR Route
app.get('/dns/ptr', async (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.status(200).send(await Dns.resolvePTR(req.body));
});

// Dns Main/ResolveOA Route
app.get('/dns/soa', async (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.status(200).send(await Dns.resolveSOA(req.body));
});

// Dns Main/ResolveSRV Route
app.get('/dns/srv', async (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.status(200).send(await Dns.resolveSRV(req.body));
});

// Dns Main/ResolveTXT Route
app.get('/dns/txt', async (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.status(200).send(await Dns.resolveTXT(req.body));
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
