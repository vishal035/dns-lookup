/*
 * DNS File
 *
 */

// Core Dependencies
const dnsPromise = require('node:dns/promises'); // Async Versio
// const dns = require('node:dns'); // Syn version

// 3rd Party Dependencies

// Main Code
const Dns = {
  async resolve(data) {
    try {
      return await dnsPromise.resolve(
        data.domain,
        data.rrtype !== 'undefined' ? data.rrtype : 'A'
      );
    } catch (error) {
      console.log(error);
    }
  },
};

// Dns Lookup Function
Dns.lookUp = async function (data) {
  const lookUpData = await dnsPromise.lookup(data.domain);
  console.log('Lookup Data from Dns Module:', lookUpData);
  return lookUpData;
};



module.exports = Dns;
