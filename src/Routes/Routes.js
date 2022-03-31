/*
 * Routes API File
 *
 */

// Core Dependencies
const Dns = require('../Dns/Main');

// 3rd Party Dependencies
const express = require('express');

// Global Constants
const router = express.Router({ caseSensitive: true });

// Main Server init Code
router.get('/', (req, res) => {
  res.send({ info: 'Dns Lookup API' });
});

// DNS Main Lookup Route
/*
  Postmain Raw Json Input
  {
      "domain": "google.com"
  }
  */

router.get('/dns', async (req, res) => {
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
router.get('/dns/resolve', async (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.status(200).send(await Dns.resolve(req.body));
});

// Dns Main/ResolveIP Route
router.get('/dns/ip', async (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.status(200).send(await Dns.reverseIP(req.body));
});

// Dns Main/ResolveIPV4 Route
router.get('/dns/ipv4', async (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.status(200).send(await Dns.resolveIPV4(req.body));
});

// Dns Main/ResolveIPV6 Route
router.get('/dns/ipv6', async (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.status(200).send(await Dns.resolveIPV6(req.body));
});

// Dns Main/ResolveANY Route
router.get('/dns/any', async (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.status(200).send(await Dns.resolveANY(req.body));
});

// Dns Main/ResolveCNAME Route
router.get('/dns/cname', async (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.status(200).send(await Dns.resolveCNAME(req.body));
});

// Dns Main/ResolveCAA Route
router.get('/dns/caa', async (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.status(200).send(await Dns.resolveCAA(req.body));
});

// Dns Main/ResolveMX Route
router.get('/dns/mx', async (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.status(200).send(await Dns.resolveMX(req.body));
});

// Dns Main/ResolveNAPTR Route
router.get('/dns/naptr', async (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.status(200).send(await Dns.resolveNAPTR(req.body));
});

// Dns Main/ResolveNS Route
router.get('/dns/ns', async (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.status(200).send(await Dns.resolveNS(req.body));
});

// Dns Main/ResolvePTR Route
router.get('/dns/ptr', async (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.status(200).send(await Dns.resolvePTR(req.body));
});

// Dns Main/ResolveOA Route
router.get('/dns/soa', async (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.status(200).send(await Dns.resolveSOA(req.body));
});

// Dns Main/ResolveSRV Route
router.get('/dns/srv', async (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.status(200).send(await Dns.resolveSRV(req.body));
});

// Dns Main/ResolveTXT Route
router.get('/dns/txt', async (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.status(200).send(await Dns.resolveTXT(req.body));
});

module.exports = router;
