/*
 * DNS File
 *
 */

// Core Dependencies
// const dns = require('node:dns/promises'); // We have to use this
const dns = require('node:dns'); // For starting only

// 3rd Party Dependencies

// Main Code
const resData = {};

// Dns Lookup Function
resData.lookp = function (data) {
  dns.lookup(data.domain, function (error, addres, family) {
    if (error) return { error: 'Somthing Went Wrong or Private Dns' };
    // console.log({ addres, family });
    return { addres, family };
  });
};

module.exports = resData;
