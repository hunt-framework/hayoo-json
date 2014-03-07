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
        "word": "URLb"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eURL parser, following RFC 3986 (\u003ca\u003ehttp://tools.ietf.org/html/rfc3986\u003c/a\u003e).\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.URLb",
          "name": "URLb",
          "package": "URLb",
          "source": "src/Network-URLb.html",
          "type": "module"
        },
        "index": {
          "description": "URL parser following RFC http tools.ietf.org html rfc3986",
          "hierarchy": "Network URLb",
          "module": "Network.URLb",
          "name": "URLb",
          "package": "URLb",
          "partial": "URLb",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/URLb/docs/Network-URLb.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.URLb",
          "name": "Authority",
          "package": "URLb",
          "source": "src/Network-URLb.html#Authority",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network URLb",
          "module": "Network.URLb",
          "name": "Authority",
          "package": "URLb",
          "partial": "Authority",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/URLb/docs/Network-URLb.html#t:Authority"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClass for encoding items from this module as URLs.\n\u003c/p\u003e",
          "module": "Network.URLb",
          "name": "Encode",
          "package": "URLb",
          "source": "src/Network-URLb.html#Encode",
          "type": "class"
        },
        "index": {
          "description": "Class for encoding items from this module as URLs",
          "hierarchy": "Network URLb",
          "module": "Network.URLb",
          "name": "Encode",
          "package": "URLb",
          "partial": "Encode",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/URLb/docs/Network-URLb.html#t:Encode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClass for parsing URL-related datatypes.\n\u003c/p\u003e",
          "module": "Network.URLb",
          "name": "Parse",
          "package": "URLb",
          "source": "src/Network-URLb.html#Parse",
          "type": "class"
        },
        "index": {
          "description": "Class for parsing URL-related datatypes",
          "hierarchy": "Network URLb",
          "module": "Network.URLb",
          "name": "Parse",
          "package": "URLb",
          "partial": "Parse",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/URLb/docs/Network-URLb.html#t:Parse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.URLb",
          "name": "Scheme",
          "package": "URLb",
          "source": "src/Network-URLb.html#Scheme",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Network URLb",
          "module": "Network.URLb",
          "name": "Scheme",
          "package": "URLb",
          "partial": "Scheme",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/URLb/docs/Network-URLb.html#t:Scheme"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eURL \"...refers to the subset of URIs that, in addition to identifying a\n         resource, provide a means of locating the resource by describing its\n         primary access mechanism\".\n\u003c/p\u003e\u003cp\u003eA breakdown of URLs, per the diagram from RFC 3986:\n\u003c/p\u003e\u003cpre\u003e     foo://example.com:8042/over/there?name=ferret#nose\n     \\_/   \\______________/\\_________/ \\_________/ \\__/\n      |           |            |            |        |\n   scheme     authority       path        query   fragment\n      |   _____________________|__\n     / \\ /                        \\\n     urn:example:animal:ferret:nose\n\u003c/pre\u003e\u003cp\u003eFor the most part, URL parts are made of strings with percent encoding\n   required of certain characters. The scheme is especially limited in the\n   allowable data:\n\u003c/p\u003e\u003cpre\u003e  scheme      = ALPHA *( ALPHA / DIGIT / \"+\" / \"-\" / \".\" )\n\u003c/pre\u003e\u003cp\u003eNote well that no percent encoding is allowed.\n\u003c/p\u003e\u003cp\u003eThe authority section, nominally denoting \u003ccode\u003euserinfo@host:port\u003c/code\u003e, is in\n   fact quite flexible, allowing percent encoding for the hostname and\n   userinfo section; only the port has a byte range restriction, to digits.\n\u003c/p\u003e\u003cp\u003eSince this datatype represents the \u003cem\u003edata\u003c/em\u003e in a URL and not its particular\n   encoded form, we use \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e liberally.\n\u003c/p\u003e",
          "module": "Network.URLb",
          "name": "URL",
          "package": "URLb",
          "source": "src/Network-URLb.html#URL",
          "type": "data"
        },
        "index": {
          "description": "URL refers to the subset of URIs that in addition to identifying resource provide means of locating the resource by describing its primary access mechanism breakdown of URLs per the diagram from RFC foo example.com over there name ferret nose scheme authority path query fragment urn example animal ferret nose For the most part URL parts are made of strings with percent encoding required of certain characters The scheme is especially limited in the allowable data scheme ALPHA ALPHA DIGIT Note well that no percent encoding is allowed The authority section nominally denoting userinfo@host port is in fact quite flexible allowing percent encoding for the hostname and userinfo section only the port has byte range restriction to digits Since this datatype represents the data in URL and not its particular encoded form we use ByteString liberally",
          "hierarchy": "Network URLb",
          "module": "Network.URLb",
          "name": "URL",
          "package": "URLb",
          "partial": "URL",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/URLb/docs/Network-URLb.html#t:URL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.URLb",
          "name": "Authority",
          "package": "URLb",
          "signature": "Authority",
          "source": "src/Network-URLb.html#Authority",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network URLb",
          "module": "Network.URLb",
          "name": "Authority",
          "package": "URLb",
          "partial": "Authority",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/URLb/docs/Network-URLb.html#v:Authority"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.URLb",
          "name": "Scheme",
          "package": "URLb",
          "signature": "Scheme ByteString",
          "source": "src/Network-URLb.html#Scheme",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network URLb",
          "module": "Network.URLb",
          "name": "Scheme",
          "package": "URLb",
          "partial": "Scheme",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/URLb/docs/Network-URLb.html#v:Scheme"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.URLb",
          "name": "URL",
          "package": "URLb",
          "signature": "URL",
          "source": "src/Network-URLb.html#URL",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network URLb",
          "module": "Network.URLb",
          "name": "URL",
          "package": "URLb",
          "partial": "URL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/URLb/docs/Network-URLb.html#v:URL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.URLb",
          "name": "authority",
          "package": "URLb",
          "signature": "Maybe Authority",
          "source": "src/Network-URLb.html#URL",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network URLb",
          "module": "Network.URLb",
          "name": "authority",
          "package": "URLb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/URLb/docs/Network-URLb.html#v:authority"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.URLb",
          "name": "authorityPath",
          "package": "URLb",
          "signature": "Parser (Maybe Authority, ByteString)",
          "source": "src/Network-URLb.html#authorityPath",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network URLb",
          "module": "Network.URLb",
          "name": "authorityPath",
          "normalized": "Parser(Maybe Authority,ByteString)",
          "package": "URLb",
          "partial": "Path",
          "signature": "Parser(Maybe Authority,ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/URLb/docs/Network-URLb.html#v:authorityPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.URLb",
          "name": "concatNonEmpty",
          "package": "URLb",
          "signature": "ByteString -\u003e ByteString -\u003e ByteString",
          "source": "src/Network-URLb.html#concatNonEmpty",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network URLb",
          "module": "Network.URLb",
          "name": "concatNonEmpty",
          "normalized": "ByteString-\u003eByteString-\u003eByteString",
          "package": "URLb",
          "partial": "Non Empty",
          "signature": "ByteString-\u003eByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/URLb/docs/Network-URLb.html#v:concatNonEmpty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.URLb",
          "name": "encode",
          "package": "URLb",
          "signature": "t -\u003e ByteString",
          "source": "src/Network-URLb.html#encode",
          "type": "method"
        },
        "index": {
          "hierarchy": "Network URLb",
          "module": "Network.URLb",
          "name": "encode",
          "normalized": "a-\u003eByteString",
          "package": "URLb",
          "signature": "t-\u003eByteString",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/URLb/docs/Network-URLb.html#v:encode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.URLb",
          "name": "fragment",
          "package": "URLb",
          "signature": "ByteString",
          "source": "src/Network-URLb.html#URL",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network URLb",
          "module": "Network.URLb",
          "name": "fragment",
          "package": "URLb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/URLb/docs/Network-URLb.html#v:fragment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.URLb",
          "name": "fromRight",
          "package": "URLb",
          "signature": "Either [Char] t -\u003e t",
          "source": "src/Network-URLb.html#fromRight",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network URLb",
          "module": "Network.URLb",
          "name": "fromRight",
          "normalized": "Either[Char]a-\u003ea",
          "package": "URLb",
          "partial": "Right",
          "signature": "Either[Char]t-\u003et",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/URLb/docs/Network-URLb.html#v:fromRight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.URLb",
          "name": "fromString'",
          "package": "URLb",
          "signature": "String -\u003e Either String a",
          "source": "src/Network-URLb.html#fromString%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network URLb",
          "module": "Network.URLb",
          "name": "fromString'",
          "normalized": "String-\u003eEither String a",
          "package": "URLb",
          "partial": "String'",
          "signature": "String-\u003eEither String a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/URLb/docs/Network-URLb.html#v:fromString-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.URLb",
          "name": "host",
          "package": "URLb",
          "signature": "ByteString",
          "source": "src/Network-URLb.html#Authority",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network URLb",
          "module": "Network.URLb",
          "name": "host",
          "package": "URLb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/URLb/docs/Network-URLb.html#v:host"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.URLb",
          "name": "parser",
          "package": "URLb",
          "signature": "Parser t",
          "source": "src/Network-URLb.html#parser",
          "type": "method"
        },
        "index": {
          "hierarchy": "Network URLb",
          "module": "Network.URLb",
          "name": "parser",
          "package": "URLb",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/URLb/docs/Network-URLb.html#v:parser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.URLb",
          "name": "path",
          "package": "URLb",
          "signature": "ByteString",
          "source": "src/Network-URLb.html#URL",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network URLb",
          "module": "Network.URLb",
          "name": "path",
          "package": "URLb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/URLb/docs/Network-URLb.html#v:path"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSlash runs are not allowed in encoded paths. Here, this is interpreted to\n   mean that the first slash in path data, which would come after the slash\n   separating the path and the scheme or authority, should be escaped.\n\u003c/p\u003e",
          "module": "Network.URLb",
          "name": "pathEncode",
          "package": "URLb",
          "signature": "ByteString -\u003e ByteString",
          "source": "src/Network-URLb.html#pathEncode",
          "type": "function"
        },
        "index": {
          "description": "Slash runs are not allowed in encoded paths Here this is interpreted to mean that the first slash in path data which would come after the slash separating the path and the scheme or authority should be escaped",
          "hierarchy": "Network URLb",
          "module": "Network.URLb",
          "name": "pathEncode",
          "normalized": "ByteString-\u003eByteString",
          "package": "URLb",
          "partial": "Encode",
          "signature": "ByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/URLb/docs/Network-URLb.html#v:pathEncode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePaths are quite sophisticated, with 5 productions to handle the different\n   URI contexts in which they appear. However, for the purpose of URL\n   parsing, we can assume that paths are always separated from the authority\n   (even the empty authority) with a \u003ccode\u003e/\u003c/code\u003e and thus can work with a relatively\n   simple subset of the productions in the RFC.\n\u003c/p\u003e\u003cpre\u003e  path-rootless = segment-nz *( \"/\" segment )\n\n  ...\n\n  segment-nz    = 1*pchar\n\n  ...\n\n  pchar         = unreserved / pct-encoded / sub-delims / \":\" / \"@\"\n\u003c/pre\u003e\u003cp\u003eAlthough literal slash runs are not permitted by the RFC, equivalent\n content can be encoded with percent encoding.\n\u003c/p\u003e",
          "module": "Network.URLb",
          "name": "pathRootlessP",
          "package": "URLb",
          "signature": "Parser ByteString",
          "source": "src/Network-URLb.html#pathRootlessP",
          "type": "function"
        },
        "index": {
          "description": "Paths are quite sophisticated with productions to handle the different URI contexts in which they appear However for the purpose of URL parsing we can assume that paths are always separated from the authority even the empty authority with and thus can work with relatively simple subset of the productions in the RFC path-rootless segment-nz segment segment-nz pchar pchar unreserved pct-encoded sub-delims Although literal slash runs are not permitted by the RFC equivalent content can be encoded with percent encoding",
          "hierarchy": "Network URLb",
          "module": "Network.URLb",
          "name": "pathRootlessP",
          "package": "URLb",
          "partial": "Rootless",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/URLb/docs/Network-URLb.html#v:pathRootlessP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.URLb",
          "name": "percent",
          "package": "URLb",
          "signature": "Parser Word8",
          "source": "src/Network-URLb.html#percent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network URLb",
          "module": "Network.URLb",
          "name": "percent",
          "package": "URLb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/URLb/docs/Network-URLb.html#v:percent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTransform any octet to its percent encoded form.\n\u003c/p\u003e",
          "module": "Network.URLb",
          "name": "percentEncode",
          "package": "URLb",
          "signature": "Word8 -\u003e ByteString",
          "source": "src/Network-URLb.html#percentEncode",
          "type": "function"
        },
        "index": {
          "description": "Transform any octet to its percent encoded form",
          "hierarchy": "Network URLb",
          "module": "Network.URLb",
          "name": "percentEncode",
          "normalized": "Word-\u003eByteString",
          "package": "URLb",
          "partial": "Encode",
          "signature": "Word-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/URLb/docs/Network-URLb.html#v:percentEncode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.URLb",
          "name": "port",
          "package": "URLb",
          "signature": "Maybe Word16",
          "source": "src/Network-URLb.html#Authority",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network URLb",
          "module": "Network.URLb",
          "name": "port",
          "package": "URLb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/URLb/docs/Network-URLb.html#v:port"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.URLb",
          "name": "query",
          "package": "URLb",
          "signature": "ByteString",
          "source": "src/Network-URLb.html#URL",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network URLb",
          "module": "Network.URLb",
          "name": "query",
          "package": "URLb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/URLb/docs/Network-URLb.html#v:query"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.URLb",
          "name": "queryFragmentOctet",
          "package": "URLb",
          "signature": "Word8 -\u003e Bool",
          "source": "src/Network-URLb.html#queryFragmentOctet",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network URLb",
          "module": "Network.URLb",
          "name": "queryFragmentOctet",
          "normalized": "Word-\u003eBool",
          "package": "URLb",
          "partial": "Fragment Octet",
          "signature": "Word-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/URLb/docs/Network-URLb.html#v:queryFragmentOctet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.URLb",
          "name": "queryFragmentP",
          "package": "URLb",
          "signature": "Parser ByteString",
          "source": "src/Network-URLb.html#queryFragmentP",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network URLb",
          "module": "Network.URLb",
          "name": "queryFragmentP",
          "package": "URLb",
          "partial": "Fragment",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/URLb/docs/Network-URLb.html#v:queryFragmentP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e *( unreserved / pct-encoded / sub-delims )\n\u003c/pre\u003e",
          "module": "Network.URLb",
          "name": "regNameOctet",
          "package": "URLb",
          "signature": "Word8 -\u003e Bool",
          "source": "src/Network-URLb.html#regNameOctet",
          "type": "function"
        },
        "index": {
          "description": "unreserved pct-encoded sub-delims",
          "hierarchy": "Network URLb",
          "module": "Network.URLb",
          "name": "regNameOctet",
          "normalized": "Word-\u003eBool",
          "package": "URLb",
          "partial": "Name Octet",
          "signature": "Word-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/URLb/docs/Network-URLb.html#v:regNameOctet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.URLb",
          "name": "regNameP",
          "package": "URLb",
          "signature": "Parser ByteString",
          "source": "src/Network-URLb.html#regNameP",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network URLb",
          "module": "Network.URLb",
          "name": "regNameP",
          "package": "URLb",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/URLb/docs/Network-URLb.html#v:regNameP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.URLb",
          "name": "scheme",
          "package": "URLb",
          "signature": "Scheme",
          "source": "src/Network-URLb.html#URL",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network URLb",
          "module": "Network.URLb",
          "name": "scheme",
          "package": "URLb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/URLb/docs/Network-URLb.html#v:scheme"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTo parse the authority and path:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e we parse an authority and then optionally a slash and a path or\n\u003c/li\u003e\u003cli\u003e we parse a single slash and then optionally a path.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Network.URLb",
          "name": "segmentOctet",
          "package": "URLb",
          "signature": "Word8 -\u003e Bool",
          "source": "src/Network-URLb.html#segmentOctet",
          "type": "function"
        },
        "index": {
          "description": "To parse the authority and path we parse an authority and then optionally slash and path or we parse single slash and then optionally path",
          "hierarchy": "Network URLb",
          "module": "Network.URLb",
          "name": "segmentOctet",
          "normalized": "Word-\u003eBool",
          "package": "URLb",
          "partial": "Octet",
          "signature": "Word-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/URLb/docs/Network-URLb.html#v:segmentOctet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePercent encode a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e, ignoring octets that match the predicate.\n\u003c/p\u003e",
          "module": "Network.URLb",
          "name": "selectiveEncode",
          "package": "URLb",
          "signature": "(Word8 -\u003e Bool) -\u003e ByteString -\u003e ByteString",
          "source": "src/Network-URLb.html#selectiveEncode",
          "type": "function"
        },
        "index": {
          "description": "Percent encode ByteString ignoring octets that match the predicate",
          "hierarchy": "Network URLb",
          "module": "Network.URLb",
          "name": "selectiveEncode",
          "normalized": "(Word-\u003eBool)-\u003eByteString-\u003eByteString",
          "package": "URLb",
          "partial": "Encode",
          "signature": "(Word-\u003eBool)-\u003eByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/URLb/docs/Network-URLb.html#v:selectiveEncode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.URLb",
          "name": "userinfo",
          "package": "URLb",
          "signature": "ByteString",
          "source": "src/Network-URLb.html#Authority",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network URLb",
          "module": "Network.URLb",
          "name": "userinfo",
          "package": "URLb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/URLb/docs/Network-URLb.html#v:userinfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e *( unreserved / pct-encoded / sub-delims / \":\" )\n\u003c/pre\u003e",
          "module": "Network.URLb",
          "name": "userinfoOctet",
          "package": "URLb",
          "signature": "Word8 -\u003e Bool",
          "source": "src/Network-URLb.html#userinfoOctet",
          "type": "function"
        },
        "index": {
          "description": "unreserved pct-encoded sub-delims",
          "hierarchy": "Network URLb",
          "module": "Network.URLb",
          "name": "userinfoOctet",
          "normalized": "Word-\u003eBool",
          "package": "URLb",
          "partial": "Octet",
          "signature": "Word-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/URLb/docs/Network-URLb.html#v:userinfoOctet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.URLb",
          "name": "userinfoP",
          "package": "URLb",
          "signature": "Parser ByteString",
          "source": "src/Network-URLb.html#userinfoP",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network URLb",
          "module": "Network.URLb",
          "name": "userinfoP",
          "package": "URLb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/URLb/docs/Network-URLb.html#v:userinfoP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.URLb",
          "name": "usingOnly",
          "package": "URLb",
          "signature": "Int -\u003e Parser t -\u003e Parser t",
          "source": "src/Network-URLb.html#usingOnly",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network URLb",
          "module": "Network.URLb",
          "name": "usingOnly",
          "normalized": "Int-\u003eParser a-\u003eParser a",
          "package": "URLb",
          "partial": "Only",
          "signature": "Int-\u003eParser t-\u003eParser t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/URLb/docs/Network-URLb.html#v:usingOnly"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a bytestream, accepting either literal bytes matching the predicate\n   or any percent encoded characters.\n\u003c/p\u003e",
          "module": "Network.URLb",
          "name": "withPercents",
          "package": "URLb",
          "signature": "(Word8 -\u003e Bool) -\u003e Parser ByteString",
          "source": "src/Network-URLb.html#withPercents",
          "type": "function"
        },
        "index": {
          "description": "Parse bytestream accepting either literal bytes matching the predicate or any percent encoded characters",
          "hierarchy": "Network URLb",
          "module": "Network.URLb",
          "name": "withPercents",
          "normalized": "(Word-\u003eBool)-\u003eParser ByteString",
          "package": "URLb",
          "partial": "Percents",
          "signature": "(Word-\u003eBool)-\u003eParser ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/URLb/docs/Network-URLb.html#v:withPercents"
      }
    }
  ]
]