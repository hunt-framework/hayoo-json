[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/URLb/docs/Network-URLb.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eURL parser, following RFC 3986 (\u003ca\u003ehttp://tools.ietf.org/html/rfc3986\u003c/a\u003e).\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Network.URLb",
        "fct-package": "URLb",
        "fct-signature": "module",
        "fct-source": "src/Network-URLb.html",
        "fct-type": "module",
        "title": "URLb"
      },
      "index": {
        "description": "URL parser following RFC http tools.ietf.org html rfc3986",
        "hierarchy": "Network URLb",
        "module": "Network.URLb",
        "name": "URLb",
        "normalized": "",
        "package": "URLb",
        "partial": "URLb",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/URLb/docs/Network-URLb.html#t:Authority",
      "description": {
        "fct-module": "Network.URLb",
        "fct-package": "URLb",
        "fct-signature": "data",
        "fct-source": "src/Network-URLb.html#Authority",
        "fct-type": "data",
        "title": "Authority"
      },
      "index": {
        "description": "",
        "hierarchy": "Network URLb",
        "module": "Network.URLb",
        "name": "Authority",
        "normalized": "",
        "package": "URLb",
        "partial": "Authority",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/URLb/docs/Network-URLb.html#t:Encode",
      "description": {
        "fct-descr": "\u003cp\u003eClass for encoding items from this module as URLs.\n\u003c/p\u003e",
        "fct-module": "Network.URLb",
        "fct-package": "URLb",
        "fct-signature": "class",
        "fct-source": "src/Network-URLb.html#Encode",
        "fct-type": "class",
        "title": "Encode"
      },
      "index": {
        "description": "Class for encoding items from this module as URLs",
        "hierarchy": "Network URLb",
        "module": "Network.URLb",
        "name": "Encode",
        "normalized": "",
        "package": "URLb",
        "partial": "Encode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/URLb/docs/Network-URLb.html#t:Parse",
      "description": {
        "fct-descr": "\u003cp\u003eClass for parsing URL-related datatypes.\n\u003c/p\u003e",
        "fct-module": "Network.URLb",
        "fct-package": "URLb",
        "fct-signature": "class",
        "fct-source": "src/Network-URLb.html#Parse",
        "fct-type": "class",
        "title": "Parse"
      },
      "index": {
        "description": "Class for parsing URL-related datatypes",
        "hierarchy": "Network URLb",
        "module": "Network.URLb",
        "name": "Parse",
        "normalized": "",
        "package": "URLb",
        "partial": "Parse",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/URLb/docs/Network-URLb.html#t:Scheme",
      "description": {
        "fct-module": "Network.URLb",
        "fct-package": "URLb",
        "fct-signature": "newtype",
        "fct-source": "src/Network-URLb.html#Scheme",
        "fct-type": "newtype",
        "title": "Scheme"
      },
      "index": {
        "description": "",
        "hierarchy": "Network URLb",
        "module": "Network.URLb",
        "name": "Scheme",
        "normalized": "",
        "package": "URLb",
        "partial": "Scheme",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/URLb/docs/Network-URLb.html#t:URL",
      "description": {
        "fct-descr": "\u003cp\u003eURL \"...refers to the subset of URIs that, in addition to identifying a\n         resource, provide a means of locating the resource by describing its\n         primary access mechanism\".\n\u003c/p\u003e\u003cp\u003eA breakdown of URLs, per the diagram from RFC 3986:\n\u003c/p\u003e\u003cpre\u003e     foo://example.com:8042/over/there?name=ferret#nose\n     \\_/   \\______________/\\_________/ \\_________/ \\__/\n      |           |            |            |        |\n   scheme     authority       path        query   fragment\n      |   _____________________|__\n     / \\ /                        \\\n     urn:example:animal:ferret:nose\n\u003c/pre\u003e\u003cp\u003eFor the most part, URL parts are made of strings with percent encoding\n   required of certain characters. The scheme is especially limited in the\n   allowable data:\n\u003c/p\u003e\u003cpre\u003e  scheme      = ALPHA *( ALPHA / DIGIT / \"+\" / \"-\" / \".\" )\n\u003c/pre\u003e\u003cp\u003eNote well that no percent encoding is allowed.\n\u003c/p\u003e\u003cp\u003eThe authority section, nominally denoting \u003ccode\u003euserinfo@host:port\u003c/code\u003e, is in\n   fact quite flexible, allowing percent encoding for the hostname and\n   userinfo section; only the port has a byte range restriction, to digits.\n\u003c/p\u003e\u003cp\u003eSince this datatype represents the \u003cem\u003edata\u003c/em\u003e in a URL and not its particular\n   encoded form, we use \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e liberally.\n\u003c/p\u003e",
        "fct-module": "Network.URLb",
        "fct-package": "URLb",
        "fct-signature": "data",
        "fct-source": "src/Network-URLb.html#URL",
        "fct-type": "data",
        "title": "URL"
      },
      "index": {
        "description": "URL refers to the subset of URIs that in addition to identifying resource provide means of locating the resource by describing its primary access mechanism breakdown of URLs per the diagram from RFC foo example.com over there name ferret nose scheme authority path query fragment urn example animal ferret nose For the most part URL parts are made of strings with percent encoding required of certain characters The scheme is especially limited in the allowable data scheme ALPHA ALPHA DIGIT Note well that no percent encoding is allowed The authority section nominally denoting userinfo@host port is in fact quite flexible allowing percent encoding for the hostname and userinfo section only the port has byte range restriction to digits Since this datatype represents the data in URL and not its particular encoded form we use ByteString liberally",
        "hierarchy": "Network URLb",
        "module": "Network.URLb",
        "name": "URL",
        "normalized": "",
        "package": "URLb",
        "partial": "URL",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/URLb/docs/Network-URLb.html#v:Authority",
      "description": {
        "fct-module": "Network.URLb",
        "fct-package": "URLb",
        "fct-signature": "Authority",
        "fct-source": "src/Network-URLb.html#Authority",
        "fct-type": "function",
        "title": "Authority"
      },
      "index": {
        "description": "",
        "hierarchy": "Network URLb",
        "module": "Network.URLb",
        "name": "Authority",
        "normalized": "",
        "package": "URLb",
        "partial": "Authority",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/URLb/docs/Network-URLb.html#v:Scheme",
      "description": {
        "fct-module": "Network.URLb",
        "fct-package": "URLb",
        "fct-signature": "Scheme ByteString",
        "fct-source": "src/Network-URLb.html#Scheme",
        "fct-type": "function",
        "title": "Scheme"
      },
      "index": {
        "description": "",
        "hierarchy": "Network URLb",
        "module": "Network.URLb",
        "name": "Scheme",
        "normalized": "",
        "package": "URLb",
        "partial": "Scheme",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/URLb/docs/Network-URLb.html#v:URL",
      "description": {
        "fct-module": "Network.URLb",
        "fct-package": "URLb",
        "fct-signature": "URL",
        "fct-source": "src/Network-URLb.html#URL",
        "fct-type": "function",
        "title": "URL"
      },
      "index": {
        "description": "",
        "hierarchy": "Network URLb",
        "module": "Network.URLb",
        "name": "URL",
        "normalized": "",
        "package": "URLb",
        "partial": "URL",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/URLb/docs/Network-URLb.html#v:authority",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.URLb",
        "fct-package": "URLb",
        "fct-signature": "Maybe Authority",
        "fct-source": "src/Network-URLb.html#URL",
        "fct-type": "function",
        "title": "authority"
      },
      "index": {
        "description": "",
        "hierarchy": "Network URLb",
        "module": "Network.URLb",
        "name": "authority",
        "normalized": "",
        "package": "URLb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/URLb/docs/Network-URLb.html#v:authorityPath",
      "description": {
        "fct-module": "Network.URLb",
        "fct-package": "URLb",
        "fct-signature": "Parser (Maybe Authority, ByteString)",
        "fct-source": "src/Network-URLb.html#authorityPath",
        "fct-type": "function",
        "title": "authorityPath"
      },
      "index": {
        "description": "",
        "hierarchy": "Network URLb",
        "module": "Network.URLb",
        "name": "authorityPath",
        "normalized": "Parser(Maybe Authority,ByteString)",
        "package": "URLb",
        "partial": "Path",
        "signature": "Parser(Maybe Authority,ByteString)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/URLb/docs/Network-URLb.html#v:concatNonEmpty",
      "description": {
        "fct-module": "Network.URLb",
        "fct-package": "URLb",
        "fct-signature": "ByteString -\u003e ByteString -\u003e ByteString",
        "fct-source": "src/Network-URLb.html#concatNonEmpty",
        "fct-type": "function",
        "title": "concatNonEmpty"
      },
      "index": {
        "description": "",
        "hierarchy": "Network URLb",
        "module": "Network.URLb",
        "name": "concatNonEmpty",
        "normalized": "ByteString-\u003eByteString-\u003eByteString",
        "package": "URLb",
        "partial": "Non Empty",
        "signature": "ByteString-\u003eByteString-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/URLb/docs/Network-URLb.html#v:encode",
      "description": {
        "fct-module": "Network.URLb",
        "fct-package": "URLb",
        "fct-signature": "t -\u003e ByteString",
        "fct-source": "src/Network-URLb.html#encode",
        "fct-type": "method",
        "title": "encode"
      },
      "index": {
        "description": "",
        "hierarchy": "Network URLb",
        "module": "Network.URLb",
        "name": "encode",
        "normalized": "a-\u003eByteString",
        "package": "URLb",
        "partial": "",
        "signature": "t-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/URLb/docs/Network-URLb.html#v:fragment",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.URLb",
        "fct-package": "URLb",
        "fct-signature": "ByteString",
        "fct-source": "src/Network-URLb.html#URL",
        "fct-type": "function",
        "title": "fragment"
      },
      "index": {
        "description": "",
        "hierarchy": "Network URLb",
        "module": "Network.URLb",
        "name": "fragment",
        "normalized": "",
        "package": "URLb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/URLb/docs/Network-URLb.html#v:fromRight",
      "description": {
        "fct-module": "Network.URLb",
        "fct-package": "URLb",
        "fct-signature": "Either [Char] t -\u003e t",
        "fct-source": "src/Network-URLb.html#fromRight",
        "fct-type": "function",
        "title": "fromRight"
      },
      "index": {
        "description": "",
        "hierarchy": "Network URLb",
        "module": "Network.URLb",
        "name": "fromRight",
        "normalized": "Either[Char]a-\u003ea",
        "package": "URLb",
        "partial": "Right",
        "signature": "Either[Char]t-\u003et"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/URLb/docs/Network-URLb.html#v:fromString-39-",
      "description": {
        "fct-module": "Network.URLb",
        "fct-package": "URLb",
        "fct-signature": "String -\u003e Either String a",
        "fct-source": "src/Network-URLb.html#fromString%27",
        "fct-type": "function",
        "title": "fromString'"
      },
      "index": {
        "description": "",
        "hierarchy": "Network URLb",
        "module": "Network.URLb",
        "name": "fromString'",
        "normalized": "String-\u003eEither String a",
        "package": "URLb",
        "partial": "String'",
        "signature": "String-\u003eEither String a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/URLb/docs/Network-URLb.html#v:host",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.URLb",
        "fct-package": "URLb",
        "fct-signature": "ByteString",
        "fct-source": "src/Network-URLb.html#Authority",
        "fct-type": "function",
        "title": "host"
      },
      "index": {
        "description": "",
        "hierarchy": "Network URLb",
        "module": "Network.URLb",
        "name": "host",
        "normalized": "",
        "package": "URLb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/URLb/docs/Network-URLb.html#v:parser",
      "description": {
        "fct-module": "Network.URLb",
        "fct-package": "URLb",
        "fct-signature": "Parser t",
        "fct-source": "src/Network-URLb.html#parser",
        "fct-type": "method",
        "title": "parser"
      },
      "index": {
        "description": "",
        "hierarchy": "Network URLb",
        "module": "Network.URLb",
        "name": "parser",
        "normalized": "",
        "package": "URLb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/URLb/docs/Network-URLb.html#v:path",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.URLb",
        "fct-package": "URLb",
        "fct-signature": "ByteString",
        "fct-source": "src/Network-URLb.html#URL",
        "fct-type": "function",
        "title": "path"
      },
      "index": {
        "description": "",
        "hierarchy": "Network URLb",
        "module": "Network.URLb",
        "name": "path",
        "normalized": "",
        "package": "URLb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/URLb/docs/Network-URLb.html#v:pathEncode",
      "description": {
        "fct-descr": "\u003cp\u003eSlash runs are not allowed in encoded paths. Here, this is interpreted to\n   mean that the first slash in path data, which would come after the slash\n   separating the path and the scheme or authority, should be escaped.\n\u003c/p\u003e",
        "fct-module": "Network.URLb",
        "fct-package": "URLb",
        "fct-signature": "ByteString -\u003e ByteString",
        "fct-source": "src/Network-URLb.html#pathEncode",
        "fct-type": "function",
        "title": "pathEncode"
      },
      "index": {
        "description": "Slash runs are not allowed in encoded paths Here this is interpreted to mean that the first slash in path data which would come after the slash separating the path and the scheme or authority should be escaped",
        "hierarchy": "Network URLb",
        "module": "Network.URLb",
        "name": "pathEncode",
        "normalized": "ByteString-\u003eByteString",
        "package": "URLb",
        "partial": "Encode",
        "signature": "ByteString-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/URLb/docs/Network-URLb.html#v:pathRootlessP",
      "description": {
        "fct-descr": "\u003cp\u003ePaths are quite sophisticated, with 5 productions to handle the different\n   URI contexts in which they appear. However, for the purpose of URL\n   parsing, we can assume that paths are always separated from the authority\n   (even the empty authority) with a \u003ccode\u003e/\u003c/code\u003e and thus can work with a relatively\n   simple subset of the productions in the RFC.\n\u003c/p\u003e\u003cpre\u003e  path-rootless = segment-nz *( \"/\" segment )\n\n  ...\n\n  segment-nz    = 1*pchar\n\n  ...\n\n  pchar         = unreserved / pct-encoded / sub-delims / \":\" / \"@\"\n\u003c/pre\u003e\u003cp\u003eAlthough literal slash runs are not permitted by the RFC, equivalent\n content can be encoded with percent encoding.\n\u003c/p\u003e",
        "fct-module": "Network.URLb",
        "fct-package": "URLb",
        "fct-signature": "Parser ByteString",
        "fct-source": "src/Network-URLb.html#pathRootlessP",
        "fct-type": "function",
        "title": "pathRootlessP"
      },
      "index": {
        "description": "Paths are quite sophisticated with productions to handle the different URI contexts in which they appear However for the purpose of URL parsing we can assume that paths are always separated from the authority even the empty authority with and thus can work with relatively simple subset of the productions in the RFC path-rootless segment-nz segment segment-nz pchar pchar unreserved pct-encoded sub-delims Although literal slash runs are not permitted by the RFC equivalent content can be encoded with percent encoding",
        "hierarchy": "Network URLb",
        "module": "Network.URLb",
        "name": "pathRootlessP",
        "normalized": "",
        "package": "URLb",
        "partial": "Rootless",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/URLb/docs/Network-URLb.html#v:percent",
      "description": {
        "fct-module": "Network.URLb",
        "fct-package": "URLb",
        "fct-signature": "Parser Word8",
        "fct-source": "src/Network-URLb.html#percent",
        "fct-type": "function",
        "title": "percent"
      },
      "index": {
        "description": "",
        "hierarchy": "Network URLb",
        "module": "Network.URLb",
        "name": "percent",
        "normalized": "",
        "package": "URLb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/URLb/docs/Network-URLb.html#v:percentEncode",
      "description": {
        "fct-descr": "\u003cp\u003eTransform any octet to its percent encoded form.\n\u003c/p\u003e",
        "fct-module": "Network.URLb",
        "fct-package": "URLb",
        "fct-signature": "Word8 -\u003e ByteString",
        "fct-source": "src/Network-URLb.html#percentEncode",
        "fct-type": "function",
        "title": "percentEncode"
      },
      "index": {
        "description": "Transform any octet to its percent encoded form",
        "hierarchy": "Network URLb",
        "module": "Network.URLb",
        "name": "percentEncode",
        "normalized": "Word-\u003eByteString",
        "package": "URLb",
        "partial": "Encode",
        "signature": "Word-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/URLb/docs/Network-URLb.html#v:port",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.URLb",
        "fct-package": "URLb",
        "fct-signature": "Maybe Word16",
        "fct-source": "src/Network-URLb.html#Authority",
        "fct-type": "function",
        "title": "port"
      },
      "index": {
        "description": "",
        "hierarchy": "Network URLb",
        "module": "Network.URLb",
        "name": "port",
        "normalized": "",
        "package": "URLb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/URLb/docs/Network-URLb.html#v:query",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.URLb",
        "fct-package": "URLb",
        "fct-signature": "ByteString",
        "fct-source": "src/Network-URLb.html#URL",
        "fct-type": "function",
        "title": "query"
      },
      "index": {
        "description": "",
        "hierarchy": "Network URLb",
        "module": "Network.URLb",
        "name": "query",
        "normalized": "",
        "package": "URLb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/URLb/docs/Network-URLb.html#v:queryFragmentOctet",
      "description": {
        "fct-module": "Network.URLb",
        "fct-package": "URLb",
        "fct-signature": "Word8 -\u003e Bool",
        "fct-source": "src/Network-URLb.html#queryFragmentOctet",
        "fct-type": "function",
        "title": "queryFragmentOctet"
      },
      "index": {
        "description": "",
        "hierarchy": "Network URLb",
        "module": "Network.URLb",
        "name": "queryFragmentOctet",
        "normalized": "Word-\u003eBool",
        "package": "URLb",
        "partial": "Fragment Octet",
        "signature": "Word-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/URLb/docs/Network-URLb.html#v:queryFragmentP",
      "description": {
        "fct-module": "Network.URLb",
        "fct-package": "URLb",
        "fct-signature": "Parser ByteString",
        "fct-source": "src/Network-URLb.html#queryFragmentP",
        "fct-type": "function",
        "title": "queryFragmentP"
      },
      "index": {
        "description": "",
        "hierarchy": "Network URLb",
        "module": "Network.URLb",
        "name": "queryFragmentP",
        "normalized": "",
        "package": "URLb",
        "partial": "Fragment",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/URLb/docs/Network-URLb.html#v:regNameOctet",
      "description": {
        "fct-descr": "\u003cpre\u003e *( unreserved / pct-encoded / sub-delims )\n\u003c/pre\u003e",
        "fct-module": "Network.URLb",
        "fct-package": "URLb",
        "fct-signature": "Word8 -\u003e Bool",
        "fct-source": "src/Network-URLb.html#regNameOctet",
        "fct-type": "function",
        "title": "regNameOctet"
      },
      "index": {
        "description": "unreserved pct-encoded sub-delims",
        "hierarchy": "Network URLb",
        "module": "Network.URLb",
        "name": "regNameOctet",
        "normalized": "Word-\u003eBool",
        "package": "URLb",
        "partial": "Name Octet",
        "signature": "Word-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/URLb/docs/Network-URLb.html#v:regNameP",
      "description": {
        "fct-module": "Network.URLb",
        "fct-package": "URLb",
        "fct-signature": "Parser ByteString",
        "fct-source": "src/Network-URLb.html#regNameP",
        "fct-type": "function",
        "title": "regNameP"
      },
      "index": {
        "description": "",
        "hierarchy": "Network URLb",
        "module": "Network.URLb",
        "name": "regNameP",
        "normalized": "",
        "package": "URLb",
        "partial": "Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/URLb/docs/Network-URLb.html#v:scheme",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.URLb",
        "fct-package": "URLb",
        "fct-signature": "Scheme",
        "fct-source": "src/Network-URLb.html#URL",
        "fct-type": "function",
        "title": "scheme"
      },
      "index": {
        "description": "",
        "hierarchy": "Network URLb",
        "module": "Network.URLb",
        "name": "scheme",
        "normalized": "",
        "package": "URLb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/URLb/docs/Network-URLb.html#v:segmentOctet",
      "description": {
        "fct-descr": "\u003cp\u003eTo parse the authority and path:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e we parse an authority and then optionally a slash and a path or\n\u003c/li\u003e\u003cli\u003e we parse a single slash and then optionally a path.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Network.URLb",
        "fct-package": "URLb",
        "fct-signature": "Word8 -\u003e Bool",
        "fct-source": "src/Network-URLb.html#segmentOctet",
        "fct-type": "function",
        "title": "segmentOctet"
      },
      "index": {
        "description": "To parse the authority and path we parse an authority and then optionally slash and path or we parse single slash and then optionally path",
        "hierarchy": "Network URLb",
        "module": "Network.URLb",
        "name": "segmentOctet",
        "normalized": "Word-\u003eBool",
        "package": "URLb",
        "partial": "Octet",
        "signature": "Word-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/URLb/docs/Network-URLb.html#v:selectiveEncode",
      "description": {
        "fct-descr": "\u003cp\u003ePercent encode a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e, ignoring octets that match the predicate.\n\u003c/p\u003e",
        "fct-module": "Network.URLb",
        "fct-package": "URLb",
        "fct-signature": "(Word8 -\u003e Bool) -\u003e ByteString -\u003e ByteString",
        "fct-source": "src/Network-URLb.html#selectiveEncode",
        "fct-type": "function",
        "title": "selectiveEncode"
      },
      "index": {
        "description": "Percent encode ByteString ignoring octets that match the predicate",
        "hierarchy": "Network URLb",
        "module": "Network.URLb",
        "name": "selectiveEncode",
        "normalized": "(Word-\u003eBool)-\u003eByteString-\u003eByteString",
        "package": "URLb",
        "partial": "Encode",
        "signature": "(Word-\u003eBool)-\u003eByteString-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/URLb/docs/Network-URLb.html#v:userinfo",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.URLb",
        "fct-package": "URLb",
        "fct-signature": "ByteString",
        "fct-source": "src/Network-URLb.html#Authority",
        "fct-type": "function",
        "title": "userinfo"
      },
      "index": {
        "description": "",
        "hierarchy": "Network URLb",
        "module": "Network.URLb",
        "name": "userinfo",
        "normalized": "",
        "package": "URLb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/URLb/docs/Network-URLb.html#v:userinfoOctet",
      "description": {
        "fct-descr": "\u003cpre\u003e *( unreserved / pct-encoded / sub-delims / \":\" )\n\u003c/pre\u003e",
        "fct-module": "Network.URLb",
        "fct-package": "URLb",
        "fct-signature": "Word8 -\u003e Bool",
        "fct-source": "src/Network-URLb.html#userinfoOctet",
        "fct-type": "function",
        "title": "userinfoOctet"
      },
      "index": {
        "description": "unreserved pct-encoded sub-delims",
        "hierarchy": "Network URLb",
        "module": "Network.URLb",
        "name": "userinfoOctet",
        "normalized": "Word-\u003eBool",
        "package": "URLb",
        "partial": "Octet",
        "signature": "Word-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/URLb/docs/Network-URLb.html#v:userinfoP",
      "description": {
        "fct-module": "Network.URLb",
        "fct-package": "URLb",
        "fct-signature": "Parser ByteString",
        "fct-source": "src/Network-URLb.html#userinfoP",
        "fct-type": "function",
        "title": "userinfoP"
      },
      "index": {
        "description": "",
        "hierarchy": "Network URLb",
        "module": "Network.URLb",
        "name": "userinfoP",
        "normalized": "",
        "package": "URLb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/URLb/docs/Network-URLb.html#v:usingOnly",
      "description": {
        "fct-module": "Network.URLb",
        "fct-package": "URLb",
        "fct-signature": "Int -\u003e Parser t -\u003e Parser t",
        "fct-source": "src/Network-URLb.html#usingOnly",
        "fct-type": "function",
        "title": "usingOnly"
      },
      "index": {
        "description": "",
        "hierarchy": "Network URLb",
        "module": "Network.URLb",
        "name": "usingOnly",
        "normalized": "Int-\u003eParser a-\u003eParser a",
        "package": "URLb",
        "partial": "Only",
        "signature": "Int-\u003eParser t-\u003eParser t"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/URLb/docs/Network-URLb.html#v:withPercents",
      "description": {
        "fct-descr": "\u003cp\u003eParse a bytestream, accepting either literal bytes matching the predicate\n   or any percent encoded characters.\n\u003c/p\u003e",
        "fct-module": "Network.URLb",
        "fct-package": "URLb",
        "fct-signature": "(Word8 -\u003e Bool) -\u003e Parser ByteString",
        "fct-source": "src/Network-URLb.html#withPercents",
        "fct-type": "function",
        "title": "withPercents"
      },
      "index": {
        "description": "Parse bytestream accepting either literal bytes matching the predicate or any percent encoded characters",
        "hierarchy": "Network URLb",
        "module": "Network.URLb",
        "name": "withPercents",
        "normalized": "(Word-\u003eBool)-\u003eParser ByteString",
        "package": "URLb",
        "partial": "Percents",
        "signature": "(Word-\u003eBool)-\u003eParser ByteString"
      }
    }
  }
]