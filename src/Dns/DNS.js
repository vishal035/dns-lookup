/*
 * DNS File
 *
 */

// Core Dependencies
const dnsPromise = require('node:dns/promises'); // Async Versio
// const dns = require('node:dns'); // Syn version

// 3rd Party Dependencies

// Main Code
const resData = {};

// Dns Lookup Function
resData.lookUp = async function (data) {
  const lookUpData = await dnsPromise.lookup(data.domain);
  console.log('Lookup Data from Dns Module:', lookUpData);
  return lookUpData;
};

module.exports = resData;
