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
  // Dns Lookup Function
  // Resolves a host name (e.g. 'nodejs.org') into the first found A (IPv4) or AAAA (IPv6) record.
  // All option properties are optional. If options is an integer, then it must be 4 or 6 – if options is not provided, then IPv4 and IPv6 addresses are both returned if found.
  async lookUp(data = {}) {
    try {
      const lookUpData = await dnsPromise.lookup(data.domain);
      // console.log('Lookup Data from Dns Module:', lookUpData);
      return lookUpData;
    } catch (error) {
      // On error, err is an Error object, where err.code is the error code. Keep in mind that err.
      // code will be set to 'ENOTFOUND' not only when the host name does not exist but also when the lookup fails in other ways such as no available file descriptors.
      // console.log(error);
      return error;
    }
  },

  // Dns Reslove Function
  // Details Check on Readme.MD File
  async resolve(data = {}) {
    try {
      return await dnsPromise.resolve(
        data.domain,
        data.rrtype !== 'undefined' ? data.rrtype : 'A'
      );
    } catch (error) {
      // console.log(error);
      return error;
    }
  },

  // Dns Lookup by Ip Function
  // Resolves the given address and port into a host name and service using the operating system's underlying getnameinfo implementation.
  async lookUpIP(data = {}) {
    try {
      const lookUpIPData = await dnsPromise.lookupService(data.ip, data.port);
      return lookUpIPData;
    } catch (error) {
      // On an error, err is an Error object, where err.code is the error code.
      // console.log(error);
      return error;
    }
  },

  // Dns Reslove IPV4 Function
  // Uses the DNS protocol to resolve a IPv4 addresses (A records) for the hostname.
  // The addresses argument passed to the callback function will contain an array of IPv4 addresses (e.g. ['74.125.79.104', '74.125.79.105', '74.125.79.106']).
  async resolveIPV4(data = {}) {
    try {
      return await dnsPromise.resolve4(data.domain, data.ttl);
    } catch (error) {
      // console.log(error);
      return error;
    }
  },

  // Dns Reslove IPV6 Function
  // Uses the DNS protocol to resolve a IPv6 addresses (AAAA records) for the hostname.
  // The addresses argument passed to the callback function will contain an array of IPv6 addresses.
  async resolveIPV6(data = {}) {
    try {
      return await dnsPromise.resolve6(data.domain, data.ttl);
    } catch (error) {
      // console.log(error);
      return error;
    }
  },

  // Dns Reslove Any or With All the records Function
  // Uses the DNS protocol to resolve all records (also known as ANY or * query).
  async resolveANY(data = {}) {
    try {
      return await dnsPromise.resolveAny(data.domain);
    } catch (error) {
      // console.log(error);
      return error;
    }
  },

  // Dns Reslove CNAME records Function
  //Uses the DNS protocol to resolve CNAME records for the hostname.
  // The addresses argument passed to the callback function will contain an array of canonical name records available for the hostname (e.g. ['bar.example.com']).
  async resolveCNAME(data = {}) {
    try {
      return await dnsPromise.resolveCname(data.domain);
    } catch (error) {
      // console.log(error);
      return error;
    }
  },

  // Dns Reslove CAA records Function
  // Uses the DNS protocol to resolve CAA records for the hostname.
  // The addresses argument passed to the callback function will contain an array of certification authority authorization records available for the hostname (e.g. [{critical: 0, iodef: 'mailto:pki@example.com'}, {critical: 128, issue: 'pki.example.com'}]).
  async resolveCAA(data = {}) {
    try {
      return await dnsPromise.resolveCaa(data.domain);
    } catch (error) {
      // console.log(error);
      return error;
    }
  },

  // Dns Reslove MX records Function
  // Uses the DNS protocol to resolve mail exchange records (MX records) for the hostname.
  // The addresses argument passed to the callback function will contain an array of objects containing both a priority and exchange property (e.g. [{priority: 10, exchange: 'mx.example.com'}, ...]).
  async resolveMX(data = {}) {
    try {
      return await dnsPromise.resolveMx(data.domain);
    } catch (error) {
      // console.log(error);
      return error;
    }
  },

  // Dns Reslove NAPTR records Function
  // Uses the DNS protocol to resolve regular expression based records (NAPTR records) for the hostname.
  // The addresses argument passed to the callback function will contain an array of objects with the following properties:
  // flags
  // service
  // regexp
  // replacement
  // order
  // preference
  async resolveNAPTR(data = {}) {
    try {
      return await dnsPromise.resolveNaptr(data.domain);
    } catch (error) {
      // console.log(error);
      return error;
    }
  },

  // Dns Reslove NS records Function
  // Uses the DNS protocol to resolve name server records (NS records) for the hostname.
  // The addresses argument passed to the callback function will contain an array of name server records available for hostname (e.g. ['ns1.example.com', 'ns2.example.com']).
  async resolveNS(data = {}) {
    try {
      return await dnsPromise.resolveNs(data.domain);
    } catch (error) {
      // console.log(error);
      return error;
    }
  },

  // Dns Reslove PTR records Function
  // Uses the DNS protocol to resolve pointer records (PTR records) for the hostname.
  // The addresses argument passed to the callback function will be an array of strings containing the reply records.
  async resolvePTR(data = {}) {
    try {
      return await dnsPromise.resolvePtr(data.domain);
    } catch (error) {
      // console.log(error);
      return error;
    }
  },

  // Dns Reslove SOA records Function
  // Uses the DNS protocol to resolve a start of authority record (SOA record) for the hostname.
  // The address argument passed to the callback function will be an object with the following properties:
  // nsname
  // hostmaster
  // serial
  // refresh
  // retry
  // expire
  // minttl
  async resolveSOA(data = {}) {
    try {
      return await dnsPromise.resolveSoa(data.domain);
    } catch (error) {
      // console.log(error);
      return error;
    }
  },

  // Dns Reslove SRV records Function
  // Uses the DNS protocol to resolve service records (SRV records) for the hostname.
  // The addresses argument passed to the callback function will be an array of objects with the following properties:
  // priority
  // weight
  // port
  // name
  async resolveSRV(data = {}) {
    try {
      return await dnsPromise.resolveSrv(data.domain);
    } catch (error) {
      // console.log(error);
      return error;
    }
  },

  // Dns Reslove TXT records Function
  // Uses the DNS protocol to resolve text queries (TXT records) for the hostname.
  // The records argument passed to the callback function is a two-dimensional array of the text records available for hostname (e.g. [ ['v=spf1 ip4:0.0.0.0 ', '~all' ] ]). Each sub-array contains TXT chunks of one record.
  // Depending on the use case, these could be either joined together or treated separately.
  async resolveTXT(data = {}) {
    try {
      return await dnsPromise.resolveTxt(data.domain);
    } catch (error) {
      // console.log(error);
      return error;
    }
  },

  // Dns Reslove IP to Name records Function
  // Performs a reverse DNS query that resolves an IPv4 or IPv6 address to an array of host names.
  async reverseIP(data = {}) {
    try {
      return await dnsPromise.reverse(data.ip);
    } catch (error) {
      // On error, err is an Error object, where err.code is one of the DNS error codes.
      // console.log(error);
      return error;
    }
  },
};

module.exports = Dns;
