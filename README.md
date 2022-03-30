# Dns Lookup Webtool

## Error codes#

```
Each DNS query can return one of the following error codes:

dns.NODATA: DNS server returned answer with no data.
dns.FORMERR: DNS server claims query was misformatted.
dns.SERVFAIL: DNS server returned general failure.
dns.NOTFOUND: Domain name not found.
dns.NOTIMP: DNS server does not implement requested operation.
dns.REFUSED: DNS server refused query.
dns.BADQUERY: Misformatted DNS query.
dns.BADNAME: Misformatted host name.
dns.BADFAMILY: Unsupported address family.
dns.BADRESP: Misformatted DNS reply.
dns.CONNREFUSED: Could not contact DNS servers.
dns.TIMEOUT: Timeout while contacting DNS servers.
dns.EOF: End of file.
dns.FILE: Error reading file.
dns.NOMEM: Out of memory.
dns.DESTRUCTION: Channel is being destroyed.
dns.BADSTR: Misformatted string.
dns.BADFLAGS: Illegal flags specified.
dns.NONAME: Given host name is not numeric.
dns.BADHINTS: Illegal hints flags specified.
dns.NOTINITIALIZED: c-ares library initialization not yet performed.
dns.LOADIPHLPAPI: Error loading iphlpapi.dll.
dns.ADDRGETNETWORKPARAMS: Could not find GetNetworkParams function.
dns.CANCELLED: DNS query cancelled.
```

---

## About the Resolve fun.

```
Uses the DNS protocol to resolve a host name (e.g. 'nodejs.org') into an array of the resource records. The callback function has arguments (err, records). When successful, records will be an array of resource records. The type and structure of individual results varies based on rrtype:

rrtype	    records contains	                    Result type
'A'	        IPv4 addresses (default)	              <string>
'AAAA'	    IPv6 addresses	                          <string>
'ANY'	    any records	                              <Object>
'CAA'	    CA authorization records	              <Object>
'CNAME'	    canonical name records	                  <string>
'MX'	    mail exchange records	                  <Object>
'NAPTR'	    name authority pointer records	          <Object>
'NS'	    name server records	                      <string>
'PTR'	    pointer records	                          <string>
'SOA'	    start of authority records	              <Object>
'SRV'	    service records	                          <Object>
'TXT'	    text records	                          <string[]>
On error, err is an Error object, where err.code is one of the DNS error codes.
```
