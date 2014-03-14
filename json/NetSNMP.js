[
  {
    "cmd": "delete-by-query",
    "query": {
      "contexts": [
        "package"
      ],
      "query": {
        "op": "case",
        "type": "word",
        "word": "NetSNMP"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis is a binding to Net-SNMP version 5, \u003ca\u003ehttp://www.net-snmp.org/\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.Protocol.NetSNMP",
          "name": "NetSNMP",
          "package": "NetSNMP",
          "source": "src/Network-Protocol-NetSNMP.html",
          "type": "module"
        },
        "index": {
          "description": "This is binding to Net-SNMP version http www.net-snmp.org",
          "hierarchy": "Network Protocol NetSNMP",
          "module": "Network.Protocol.NetSNMP",
          "name": "NetSNMP",
          "package": "NetSNMP",
          "partial": "Net SNMP",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/NetSNMP/docs/Network-Protocol-NetSNMP.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTyped representation of atomic ASN.1 data types.  Some types are\n     returned in more than one format for different uses.  Some\n     include a descriptive string built by the underlying C library.\n\u003c/p\u003e",
          "module": "Network.Protocol.NetSNMP",
          "name": "ASNValue",
          "package": "NetSNMP",
          "source": "src/Network-Protocol-NetSNMP.html#ASNValue",
          "type": "data"
        },
        "index": {
          "description": "Typed representation of atomic ASN.1 data types Some types are returned in more than one format for different uses Some include descriptive string built by the underlying library",
          "hierarchy": "Network Protocol NetSNMP",
          "module": "Network.Protocol.NetSNMP",
          "name": "ASNValue",
          "package": "NetSNMP",
          "partial": "ASNValue",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/NetSNMP/docs/Network-Protocol-NetSNMP.html#t:ASNValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.NetSNMP",
          "name": "Community",
          "package": "NetSNMP",
          "source": "src/Network-Protocol-NetSNMP.html#Community",
          "type": "type"
        },
        "index": {
          "hierarchy": "Network Protocol NetSNMP",
          "module": "Network.Protocol.NetSNMP",
          "name": "Community",
          "package": "NetSNMP",
          "partial": "Community",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/NetSNMP/docs/Network-Protocol-NetSNMP.html#t:Community"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.NetSNMP",
          "name": "Hostname",
          "package": "NetSNMP",
          "source": "src/Network-Protocol-NetSNMP.html#Hostname",
          "type": "type"
        },
        "index": {
          "hierarchy": "Network Protocol NetSNMP",
          "module": "Network.Protocol.NetSNMP",
          "name": "Hostname",
          "package": "NetSNMP",
          "partial": "Hostname",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/NetSNMP/docs/Network-Protocol-NetSNMP.html#t:Hostname"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe net-snmp C library on 64-bit OS X systems still uses 32-bit oid parts in\n    the responses. Please make sure that the library produces sane\n    results on your system by cloning the source code and running `make test`.\n\u003c/p\u003e",
          "module": "Network.Protocol.NetSNMP",
          "name": "OIDpart",
          "package": "NetSNMP",
          "source": "src/Network-Protocol-NetSNMP.html#OIDpart",
          "type": "type"
        },
        "index": {
          "description": "The net-snmp library on bit OS systems still uses bit oid parts in the responses Please make sure that the library produces sane results on your system by cloning the source code and running make test",
          "hierarchy": "Network Protocol NetSNMP",
          "module": "Network.Protocol.NetSNMP",
          "name": "OIDpart",
          "package": "NetSNMP",
          "partial": "OIDpart",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/NetSNMP/docs/Network-Protocol-NetSNMP.html#t:OIDpart"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.NetSNMP",
          "name": "RawOID",
          "package": "NetSNMP",
          "source": "src/Network-Protocol-NetSNMP.html#RawOID",
          "type": "type"
        },
        "index": {
          "hierarchy": "Network Protocol NetSNMP",
          "module": "Network.Protocol.NetSNMP",
          "name": "RawOID",
          "package": "NetSNMP",
          "partial": "Raw OID",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/NetSNMP/docs/Network-Protocol-NetSNMP.html#t:RawOID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn SNMP value together with its OID.  Returned by the query\n     routines \u003ccode\u003e\u003ca\u003esnmpGet\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003esnmpNext\u003c/a\u003e\u003c/code\u003e, and \u003ccode\u003e\u003ca\u003esnmpWalk\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.Protocol.NetSNMP",
          "name": "SnmpResult",
          "package": "NetSNMP",
          "source": "src/Network-Protocol-NetSNMP.html#SnmpResult",
          "type": "data"
        },
        "index": {
          "description": "An SNMP value together with its OID Returned by the query routines snmpGet snmpNext and snmpWalk",
          "hierarchy": "Network Protocol NetSNMP",
          "module": "Network.Protocol.NetSNMP",
          "name": "SnmpResult",
          "package": "NetSNMP",
          "partial": "Snmp Result",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/NetSNMP/docs/Network-Protocol-NetSNMP.html#t:SnmpResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSNMP Protocol version.  It is recommended to use the constants\n \u003ccode\u003e\u003ca\u003esnmp_version_1\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003esnmp_version_2c\u003c/a\u003e\u003c/code\u003e, and \u003ccode\u003e\u003ca\u003esnmp_version_3\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.Protocol.NetSNMP",
          "name": "SnmpVersion",
          "package": "NetSNMP",
          "source": "src/Network-Protocol-NetSNMP.html#SnmpVersion",
          "type": "newtype"
        },
        "index": {
          "description": "SNMP Protocol version It is recommended to use the constants snmp version snmp version and snmp version",
          "hierarchy": "Network Protocol NetSNMP",
          "module": "Network.Protocol.NetSNMP",
          "name": "SnmpVersion",
          "package": "NetSNMP",
          "partial": "Snmp Version",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/NetSNMP/docs/Network-Protocol-NetSNMP.html#t:SnmpVersion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eASN_BOOLEAN\u003c/code\u003e Unimplemented.\n\u003c/p\u003e",
          "module": "Network.Protocol.NetSNMP",
          "name": "Boolean",
          "package": "NetSNMP",
          "signature": "Boolean Bool",
          "source": "src/Network-Protocol-NetSNMP.html#ASNValue",
          "type": "function"
        },
        "index": {
          "description": "ASN BOOLEAN Unimplemented",
          "hierarchy": "Network Protocol NetSNMP",
          "module": "Network.Protocol.NetSNMP",
          "name": "Boolean",
          "package": "NetSNMP",
          "partial": "Boolean",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NetSNMP/docs/Network-Protocol-NetSNMP.html#v:Boolean"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eASN_COUNTER\u003c/code\u003e 32bit nondecreasing\n\u003c/p\u003e",
          "module": "Network.Protocol.NetSNMP",
          "name": "Counter32",
          "package": "NetSNMP",
          "signature": "Counter32 Word32",
          "source": "src/Network-Protocol-NetSNMP.html#ASNValue",
          "type": "function"
        },
        "index": {
          "description": "ASN COUNTER bit nondecreasing",
          "hierarchy": "Network Protocol NetSNMP",
          "module": "Network.Protocol.NetSNMP",
          "name": "Counter32",
          "package": "NetSNMP",
          "partial": "Counter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NetSNMP/docs/Network-Protocol-NetSNMP.html#v:Counter32"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eASN_COUNTER64\u003c/code\u003e 64bit nondecreasing\n\u003c/p\u003e",
          "module": "Network.Protocol.NetSNMP",
          "name": "Counter64",
          "package": "NetSNMP",
          "signature": "Counter64 Word64",
          "source": "src/Network-Protocol-NetSNMP.html#ASNValue",
          "type": "function"
        },
        "index": {
          "description": "ASN COUNTER64 bit nondecreasing",
          "hierarchy": "Network Protocol NetSNMP",
          "module": "Network.Protocol.NetSNMP",
          "name": "Counter64",
          "package": "NetSNMP",
          "partial": "Counter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NetSNMP/docs/Network-Protocol-NetSNMP.html#v:Counter64"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eASN_GAUGE\u003c/code\u003e 32bit signed with min and max\n\u003c/p\u003e",
          "module": "Network.Protocol.NetSNMP",
          "name": "Gauge32",
          "package": "NetSNMP",
          "signature": "Gauge32 Word32",
          "source": "src/Network-Protocol-NetSNMP.html#ASNValue",
          "type": "function"
        },
        "index": {
          "description": "ASN GAUGE bit signed with min and max",
          "hierarchy": "Network Protocol NetSNMP",
          "module": "Network.Protocol.NetSNMP",
          "name": "Gauge32",
          "package": "NetSNMP",
          "partial": "Gauge",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NetSNMP/docs/Network-Protocol-NetSNMP.html#v:Gauge32"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eASN_DOUBLE\u003c/code\u003e IEEE double. Unimplemented.\n\u003c/p\u003e",
          "module": "Network.Protocol.NetSNMP",
          "name": "IEEEDouble",
          "package": "NetSNMP",
          "signature": "IEEEDouble Double",
          "source": "src/Network-Protocol-NetSNMP.html#ASNValue",
          "type": "function"
        },
        "index": {
          "description": "ASN DOUBLE IEEE double Unimplemented",
          "hierarchy": "Network Protocol NetSNMP",
          "module": "Network.Protocol.NetSNMP",
          "name": "IEEEDouble",
          "package": "NetSNMP",
          "partial": "IEEEDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NetSNMP/docs/Network-Protocol-NetSNMP.html#v:IEEEDouble"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eASN_FLOAT\u003c/code\u003e IEEE float. Unimplemented.\n\u003c/p\u003e",
          "module": "Network.Protocol.NetSNMP",
          "name": "IEEEFloat",
          "package": "NetSNMP",
          "signature": "IEEEFloat Float",
          "source": "src/Network-Protocol-NetSNMP.html#ASNValue",
          "type": "function"
        },
        "index": {
          "description": "ASN FLOAT IEEE float Unimplemented",
          "hierarchy": "Network Protocol NetSNMP",
          "module": "Network.Protocol.NetSNMP",
          "name": "IEEEFloat",
          "package": "NetSNMP",
          "partial": "IEEEFloat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NetSNMP/docs/Network-Protocol-NetSNMP.html#v:IEEEFloat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eASN_INTEGER\u003c/code\u003e  32bit signed\n\u003c/p\u003e",
          "module": "Network.Protocol.NetSNMP",
          "name": "Integer32",
          "package": "NetSNMP",
          "signature": "Integer32 Int32",
          "source": "src/Network-Protocol-NetSNMP.html#ASNValue",
          "type": "function"
        },
        "index": {
          "description": "ASN INTEGER bit signed",
          "hierarchy": "Network Protocol NetSNMP",
          "module": "Network.Protocol.NetSNMP",
          "name": "Integer32",
          "package": "NetSNMP",
          "partial": "Integer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NetSNMP/docs/Network-Protocol-NetSNMP.html#v:Integer32"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eASN_INTEGER64\u003c/code\u003e  64bit signed\n\u003c/p\u003e",
          "module": "Network.Protocol.NetSNMP",
          "name": "Integer64",
          "package": "NetSNMP",
          "signature": "Integer64 Int64",
          "source": "src/Network-Protocol-NetSNMP.html#ASNValue",
          "type": "function"
        },
        "index": {
          "description": "ASN INTEGER64 bit signed",
          "hierarchy": "Network Protocol NetSNMP",
          "module": "Network.Protocol.NetSNMP",
          "name": "Integer64",
          "package": "NetSNMP",
          "partial": "Integer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NetSNMP/docs/Network-Protocol-NetSNMP.html#v:Integer64"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eASN_IPADDRESS\u003c/code\u003e IP address in string\n     and numeric form. Example:\n     (IpAddress \"1.2.3.4\" [1,2,3,4])\n\u003c/p\u003e",
          "module": "Network.Protocol.NetSNMP",
          "name": "IpAddress",
          "package": "NetSNMP",
          "signature": "IpAddress ByteString [Word8]",
          "source": "src/Network-Protocol-NetSNMP.html#ASNValue",
          "type": "function"
        },
        "index": {
          "description": "ASN IPADDRESS IP address in string and numeric form Example IpAddress",
          "hierarchy": "Network Protocol NetSNMP",
          "module": "Network.Protocol.NetSNMP",
          "name": "IpAddress",
          "normalized": "IpAddress ByteString[Word]",
          "package": "NetSNMP",
          "partial": "Ip Address",
          "signature": "IpAddress ByteString[Word]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NetSNMP/docs/Network-Protocol-NetSNMP.html#v:IpAddress"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eASN_NULL\u003c/code\u003e Null value\n\u003c/p\u003e",
          "module": "Network.Protocol.NetSNMP",
          "name": "Null",
          "package": "NetSNMP",
          "signature": "Null",
          "source": "src/Network-Protocol-NetSNMP.html#ASNValue",
          "type": "function"
        },
        "index": {
          "description": "ASN NULL Null value",
          "hierarchy": "Network Protocol NetSNMP",
          "module": "Network.Protocol.NetSNMP",
          "name": "Null",
          "package": "NetSNMP",
          "partial": "Null",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NetSNMP/docs/Network-Protocol-NetSNMP.html#v:Null"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eASN_OBJECT_ID\u003c/code\u003e Returned as the C library's\n     description, a dotted-decimal string, and\n     a numeric list\n\u003c/p\u003e",
          "module": "Network.Protocol.NetSNMP",
          "name": "OID",
          "package": "NetSNMP",
          "signature": "OID ByteString ByteString [Word32]",
          "source": "src/Network-Protocol-NetSNMP.html#ASNValue",
          "type": "function"
        },
        "index": {
          "description": "ASN OBJECT ID Returned as the library description dotted-decimal string and numeric list",
          "hierarchy": "Network Protocol NetSNMP",
          "module": "Network.Protocol.NetSNMP",
          "name": "OID",
          "normalized": "OID ByteString ByteString[Word]",
          "package": "NetSNMP",
          "partial": "OID",
          "signature": "OID ByteString ByteString[Word]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NetSNMP/docs/Network-Protocol-NetSNMP.html#v:OID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eASN_OCTET_STR\u003c/code\u003e Returned as a character\n     string, and as opaque data.\n\u003c/p\u003e",
          "module": "Network.Protocol.NetSNMP",
          "name": "OctetString",
          "package": "NetSNMP",
          "signature": "OctetString ByteString [Word8]",
          "source": "src/Network-Protocol-NetSNMP.html#ASNValue",
          "type": "function"
        },
        "index": {
          "description": "ASN OCTET STR Returned as character string and as opaque data",
          "hierarchy": "Network Protocol NetSNMP",
          "module": "Network.Protocol.NetSNMP",
          "name": "OctetString",
          "normalized": "OctetString ByteString[Word]",
          "package": "NetSNMP",
          "partial": "Octet String",
          "signature": "OctetString ByteString[Word]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NetSNMP/docs/Network-Protocol-NetSNMP.html#v:OctetString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eASN_OPAQUE\u003c/code\u003e (Deprecated) application\n     specific data.  Use OctetString instead.\n\u003c/p\u003e",
          "module": "Network.Protocol.NetSNMP",
          "name": "Opaque",
          "package": "NetSNMP",
          "signature": "Opaque [Word8]",
          "source": "src/Network-Protocol-NetSNMP.html#ASNValue",
          "type": "function"
        },
        "index": {
          "description": "ASN OPAQUE Deprecated application specific data Use OctetString instead",
          "hierarchy": "Network Protocol NetSNMP",
          "module": "Network.Protocol.NetSNMP",
          "name": "Opaque",
          "normalized": "Opaque[Word]",
          "package": "NetSNMP",
          "partial": "Opaque",
          "signature": "Opaque[Word]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NetSNMP/docs/Network-Protocol-NetSNMP.html#v:Opaque"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.NetSNMP",
          "name": "SnmpResult",
          "package": "NetSNMP",
          "signature": "SnmpResult",
          "source": "src/Network-Protocol-NetSNMP.html#SnmpResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Protocol NetSNMP",
          "module": "Network.Protocol.NetSNMP",
          "name": "SnmpResult",
          "package": "NetSNMP",
          "partial": "Snmp Result",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NetSNMP/docs/Network-Protocol-NetSNMP.html#v:SnmpResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Protocol.NetSNMP",
          "name": "SnmpVersion",
          "package": "NetSNMP",
          "signature": "SnmpVersion",
          "source": "src/Network-Protocol-NetSNMP.html#SnmpVersion",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Protocol NetSNMP",
          "module": "Network.Protocol.NetSNMP",
          "name": "SnmpVersion",
          "package": "NetSNMP",
          "partial": "Snmp Version",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NetSNMP/docs/Network-Protocol-NetSNMP.html#v:SnmpVersion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eASN_TIMETICKS\u003c/code\u003e Time interval in 1/100 sec\n     ticks.  The C library's description is\n     returned along with the raw value.\n\u003c/p\u003e",
          "module": "Network.Protocol.NetSNMP",
          "name": "TimeTicks",
          "package": "NetSNMP",
          "signature": "TimeTicks ByteString Word32",
          "source": "src/Network-Protocol-NetSNMP.html#ASNValue",
          "type": "function"
        },
        "index": {
          "description": "ASN TIMETICKS Time interval in sec ticks The library description is returned along with the raw value",
          "hierarchy": "Network Protocol NetSNMP",
          "module": "Network.Protocol.NetSNMP",
          "name": "TimeTicks",
          "package": "NetSNMP",
          "partial": "Time Ticks",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NetSNMP/docs/Network-Protocol-NetSNMP.html#v:TimeTicks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eASN_UNSIGNED\u003c/code\u003e 32bit unsigned\n\u003c/p\u003e",
          "module": "Network.Protocol.NetSNMP",
          "name": "Unsigned32",
          "package": "NetSNMP",
          "signature": "Unsigned32 Word32",
          "source": "src/Network-Protocol-NetSNMP.html#ASNValue",
          "type": "function"
        },
        "index": {
          "description": "ASN UNSIGNED bit unsigned",
          "hierarchy": "Network Protocol NetSNMP",
          "module": "Network.Protocol.NetSNMP",
          "name": "Unsigned32",
          "package": "NetSNMP",
          "partial": "Unsigned",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NetSNMP/docs/Network-Protocol-NetSNMP.html#v:Unsigned32"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eASN_UNSIGNED64\u003c/code\u003e 64bit unsigned\n\u003c/p\u003e",
          "module": "Network.Protocol.NetSNMP",
          "name": "Unsigned64",
          "package": "NetSNMP",
          "signature": "Unsigned64 Word64",
          "source": "src/Network-Protocol-NetSNMP.html#ASNValue",
          "type": "function"
        },
        "index": {
          "description": "ASN UNSIGNED64 bit unsigned",
          "hierarchy": "Network Protocol NetSNMP",
          "module": "Network.Protocol.NetSNMP",
          "name": "Unsigned64",
          "package": "NetSNMP",
          "partial": "Unsigned",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NetSNMP/docs/Network-Protocol-NetSNMP.html#v:Unsigned64"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnsupported type from an agent.  Returns\n     the numeric type and the C library's\n     description of the value.\n\u003c/p\u003e",
          "module": "Network.Protocol.NetSNMP",
          "name": "Unsupported",
          "package": "NetSNMP",
          "signature": "Unsupported Int ByteString",
          "source": "src/Network-Protocol-NetSNMP.html#ASNValue",
          "type": "function"
        },
        "index": {
          "description": "Unsupported type from an agent Returns the numeric type and the library description of the value",
          "hierarchy": "Network Protocol NetSNMP",
          "module": "Network.Protocol.NetSNMP",
          "name": "Unsupported",
          "package": "NetSNMP",
          "partial": "Unsupported",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NetSNMP/docs/Network-Protocol-NetSNMP.html#v:Unsupported"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInitialize the Net-SNMP library.  This must be called before any\n other NetSNMP functions, and before starting extra threads, as the\n mib compiler is not thread-safe.\n\u003c/p\u003e",
          "module": "Network.Protocol.NetSNMP",
          "name": "initialize",
          "package": "NetSNMP",
          "signature": "IO ()",
          "source": "src/Network-Protocol-NetSNMP.html#initialize",
          "type": "function"
        },
        "index": {
          "description": "Initialize the Net-SNMP library This must be called before any other NetSNMP functions and before starting extra threads as the mib compiler is not thread-safe",
          "hierarchy": "Network Protocol NetSNMP",
          "module": "Network.Protocol.NetSNMP",
          "name": "initialize",
          "normalized": "IO()",
          "package": "NetSNMP",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NetSNMP/docs/Network-Protocol-NetSNMP.html#v:initialize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDotted-decimal ObjectId of the value\n\u003c/p\u003e",
          "module": "Network.Protocol.NetSNMP",
          "name": "oid",
          "package": "NetSNMP",
          "signature": "RawOID",
          "source": "src/Network-Protocol-NetSNMP.html#SnmpResult",
          "type": "function"
        },
        "index": {
          "description": "Dotted-decimal ObjectId of the value",
          "hierarchy": "Network Protocol NetSNMP",
          "module": "Network.Protocol.NetSNMP",
          "name": "oid",
          "package": "NetSNMP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NetSNMP/docs/Network-Protocol-NetSNMP.html#v:oid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShow ASNValue contents in a simple string, losing type differentiation.\n     Callers should not rely on the format of the message returned,\n     and this function may disappear in a future version.\n\u003c/p\u003e",
          "module": "Network.Protocol.NetSNMP",
          "name": "showASNValue",
          "package": "NetSNMP",
          "signature": "ASNValue -\u003e String",
          "source": "src/Network-Protocol-NetSNMP.html#showASNValue",
          "type": "function"
        },
        "index": {
          "description": "Show ASNValue contents in simple string losing type differentiation Callers should not rely on the format of the message returned and this function may disappear in future version",
          "hierarchy": "Network Protocol NetSNMP",
          "module": "Network.Protocol.NetSNMP",
          "name": "showASNValue",
          "normalized": "ASNValue-\u003eString",
          "package": "NetSNMP",
          "partial": "ASNValue",
          "signature": "ASNValue-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NetSNMP/docs/Network-Protocol-NetSNMP.html#v:showASNValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as snmpWalk but implemented with bulk requests\n\u003c/p\u003e\u003cp\u003eExamples:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e snmpBulkWalk \"localhost\" \"public\" [1,3,6,1,2,1,1]\n\u003c/li\u003e\u003cli\u003e snmpBulkWalk \"tcp:localhost:5161\" \"mypassword\" [1,3,6,1,2,1,1]\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Network.Protocol.NetSNMP",
          "name": "snmpBulkWalk",
          "package": "NetSNMP",
          "signature": "Hostname-\u003e Community-\u003e RawOID-\u003e IO (Either String [SnmpResult])",
          "type": "function"
        },
        "index": {
          "description": "Same as snmpWalk but implemented with bulk requests Examples snmpBulkWalk localhost public snmpBulkWalk tcp localhost mypassword",
          "hierarchy": "Network Protocol NetSNMP",
          "module": "Network.Protocol.NetSNMP",
          "name": "snmpBulkWalk",
          "normalized": "Hostname-\u003eCommunity-\u003eRawOID-\u003eIO(Either String[SnmpResult])",
          "package": "NetSNMP",
          "partial": "Bulk Walk",
          "signature": "Hostname-\u003eCommunity-\u003eRawOID-\u003eIO(Either String[SnmpResult])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NetSNMP/docs/Network-Protocol-NetSNMP.html#v:snmpBulkWalk"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimple community-authenticated SNMP get.  Returns the object\n     queried, or a descriptive error message.\n\u003c/p\u003e\u003cp\u003eExamples:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e snmpGet \"localhost\" \"public\" [1,3,6,1,2,1,1,1,0]\n\u003c/li\u003e\u003cli\u003e snmpGet \"tcp:localhost:5161\" \"mypassword\" [1,3,6,1,2,1,1,1,0]\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Network.Protocol.NetSNMP",
          "name": "snmpGet",
          "package": "NetSNMP",
          "signature": "SnmpVersion-\u003e Hostname-\u003e Community-\u003e RawOID-\u003e IO (Either String SnmpResult)",
          "type": "function"
        },
        "index": {
          "description": "Simple community-authenticated SNMP get Returns the object queried or descriptive error message Examples snmpGet localhost public snmpGet tcp localhost mypassword",
          "hierarchy": "Network Protocol NetSNMP",
          "module": "Network.Protocol.NetSNMP",
          "name": "snmpGet",
          "normalized": "SnmpVersion-\u003eHostname-\u003eCommunity-\u003eRawOID-\u003eIO(Either String SnmpResult)",
          "package": "NetSNMP",
          "partial": "Get",
          "signature": "SnmpVersion-\u003eHostname-\u003eCommunity-\u003eRawOID-\u003eIO(Either String SnmpResult)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NetSNMP/docs/Network-Protocol-NetSNMP.html#v:snmpGet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimple community-authenticated SNMP getnext.  Returns the first object\n     after the OID queried, or a descriptive error message.\n\u003c/p\u003e\u003cp\u003eExamples:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e snmpNext \"localhost\" \"public\" [1,3,6,1,2,1,1,1,0]\n\u003c/li\u003e\u003cli\u003e snmpNext \"tcp:localhost:5161\" \"mypassword\" [1,3,6,1,2,1,1,1,0]\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Network.Protocol.NetSNMP",
          "name": "snmpNext",
          "package": "NetSNMP",
          "signature": "SnmpVersion-\u003e Hostname-\u003e Community-\u003e RawOID-\u003e IO (Either String SnmpResult)",
          "type": "function"
        },
        "index": {
          "description": "Simple community-authenticated SNMP getnext Returns the first object after the OID queried or descriptive error message Examples snmpNext localhost public snmpNext tcp localhost mypassword",
          "hierarchy": "Network Protocol NetSNMP",
          "module": "Network.Protocol.NetSNMP",
          "name": "snmpNext",
          "normalized": "SnmpVersion-\u003eHostname-\u003eCommunity-\u003eRawOID-\u003eIO(Either String SnmpResult)",
          "package": "NetSNMP",
          "partial": "Next",
          "signature": "SnmpVersion-\u003eHostname-\u003eCommunity-\u003eRawOID-\u003eIO(Either String SnmpResult)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NetSNMP/docs/Network-Protocol-NetSNMP.html#v:snmpNext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimple community-authenticated SNMP walk.  Returns a list of objects,\n     starting with the object after the OID queried, and continuing\n     through all objects underneath that OID in the mib tree.\n     On failure, returns a descriptive error message.\n\u003c/p\u003e\u003cp\u003eThis implementation uses a series of next operations and is not very\n ressource friendly. Consider using snmpBulkWalk for better performance\n\u003c/p\u003e\u003cp\u003eExamples:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e snmpWalk snmp_version_2c \"localhost\" \"public\" [1,3,6,1,2,1,1]\n\u003c/li\u003e\u003cli\u003e snmpWalk snmp_version_2c \"tcp:localhost:5161\" \"mypassword\" [1,3,6,1,2,1,1]\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Network.Protocol.NetSNMP",
          "name": "snmpWalk",
          "package": "NetSNMP",
          "signature": "SnmpVersion-\u003e Hostname-\u003e Community-\u003e RawOID-\u003e IO (Either String [SnmpResult])",
          "type": "function"
        },
        "index": {
          "description": "Simple community-authenticated SNMP walk Returns list of objects starting with the object after the OID queried and continuing through all objects underneath that OID in the mib tree On failure returns descriptive error message This implementation uses series of next operations and is not very ressource friendly Consider using snmpBulkWalk for better performance Examples snmpWalk snmp version localhost public snmpWalk snmp version tcp localhost mypassword",
          "hierarchy": "Network Protocol NetSNMP",
          "module": "Network.Protocol.NetSNMP",
          "name": "snmpWalk",
          "normalized": "SnmpVersion-\u003eHostname-\u003eCommunity-\u003eRawOID-\u003eIO(Either String[SnmpResult])",
          "package": "NetSNMP",
          "partial": "Walk",
          "signature": "SnmpVersion-\u003eHostname-\u003eCommunity-\u003eRawOID-\u003eIO(Either String[SnmpResult])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NetSNMP/docs/Network-Protocol-NetSNMP.html#v:snmpWalk"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSNMPv1. The first SNMP standard, using cleartext passwords\n     (\"communities\")\n\u003c/p\u003e",
          "module": "Network.Protocol.NetSNMP",
          "name": "snmp_version_1",
          "package": "NetSNMP",
          "signature": "SnmpVersion",
          "source": "src/Network-Protocol-NetSNMP.html#snmp_version_1",
          "type": "function"
        },
        "index": {
          "description": "SNMPv1 The first SNMP standard using cleartext passwords communities",
          "hierarchy": "Network Protocol NetSNMP",
          "module": "Network.Protocol.NetSNMP",
          "name": "snmp_version_1",
          "package": "NetSNMP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NetSNMP/docs/Network-Protocol-NetSNMP.html#v:snmp_version_1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSNMPv2c. Updated SMI and wire protocol, but still uses communities.\n\u003c/p\u003e",
          "module": "Network.Protocol.NetSNMP",
          "name": "snmp_version_2c",
          "package": "NetSNMP",
          "signature": "SnmpVersion",
          "source": "src/Network-Protocol-NetSNMP.html#snmp_version_2c",
          "type": "function"
        },
        "index": {
          "description": "SNMPv2c Updated SMI and wire protocol but still uses communities",
          "hierarchy": "Network Protocol NetSNMP",
          "module": "Network.Protocol.NetSNMP",
          "name": "snmp_version_2c",
          "package": "NetSNMP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NetSNMP/docs/Network-Protocol-NetSNMP.html#v:snmp_version_2c"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSNMPv3. Same SMI and protocol as SNMPv2c; stronger authentication.\n     Unimplemented.\n\u003c/p\u003e",
          "module": "Network.Protocol.NetSNMP",
          "name": "snmp_version_3",
          "package": "NetSNMP",
          "signature": "SnmpVersion",
          "source": "src/Network-Protocol-NetSNMP.html#snmp_version_3",
          "type": "function"
        },
        "index": {
          "description": "SNMPv3 Same SMI and protocol as SNMPv2c stronger authentication Unimplemented",
          "hierarchy": "Network Protocol NetSNMP",
          "module": "Network.Protocol.NetSNMP",
          "name": "snmp_version_3",
          "package": "NetSNMP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NetSNMP/docs/Network-Protocol-NetSNMP.html#v:snmp_version_3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNumeric version.  Generally unneeded.\n\u003c/p\u003e",
          "module": "Network.Protocol.NetSNMP",
          "name": "unSnmpVersion",
          "package": "NetSNMP",
          "signature": "CLong",
          "source": "src/Network-Protocol-NetSNMP.html#SnmpVersion",
          "type": "function"
        },
        "index": {
          "description": "Numeric version Generally unneeded",
          "hierarchy": "Network Protocol NetSNMP",
          "module": "Network.Protocol.NetSNMP",
          "name": "unSnmpVersion",
          "package": "NetSNMP",
          "partial": "Snmp Version",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NetSNMP/docs/Network-Protocol-NetSNMP.html#v:unSnmpVersion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTyped representation of the value\n\u003c/p\u003e",
          "module": "Network.Protocol.NetSNMP",
          "name": "value",
          "package": "NetSNMP",
          "signature": "ASNValue",
          "source": "src/Network-Protocol-NetSNMP.html#SnmpResult",
          "type": "function"
        },
        "index": {
          "description": "Typed representation of the value",
          "hierarchy": "Network Protocol NetSNMP",
          "module": "Network.Protocol.NetSNMP",
          "name": "value",
          "package": "NetSNMP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NetSNMP/docs/Network-Protocol-NetSNMP.html#v:value"
      }
    }
  ]
]