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
        "word": "wai-util"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Wai.Util",
          "name": "Util",
          "package": "wai-util",
          "source": "src/Network-Wai-Util.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Network Wai Util",
          "module": "Network.Wai.Util",
          "name": "Util",
          "package": "wai-util",
          "partial": "Util",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/wai-util/docs/Network-Wai-Util.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSmart constructor to build a \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e from a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Network.Wai.Util",
          "name": "bytestring",
          "package": "wai-util",
          "signature": "Status -\u003e ResponseHeaders -\u003e bs -\u003e m Response",
          "source": "src/Network-Wai-Util.html#bytestring",
          "type": "function"
        },
        "index": {
          "description": "Smart constructor to build Response from ByteString",
          "hierarchy": "Network Wai Util",
          "module": "Network.Wai.Util",
          "name": "bytestring",
          "normalized": "Status-\u003eResponseHeaders-\u003ea-\u003eb Response",
          "package": "wai-util",
          "signature": "Status-\u003eResponseHeaders-\u003ebs-\u003em Response",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wai-util/docs/Network-Wai-Util.html#v:bytestring"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet a default value for a header in a \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Network.Wai.Util",
          "name": "defHeader",
          "package": "wai-util",
          "signature": "Header -\u003e Response -\u003e Response",
          "source": "src/Network-Wai-Util.html#defHeader",
          "type": "function"
        },
        "index": {
          "description": "Set default value for header in Response",
          "hierarchy": "Network Wai Util",
          "module": "Network.Wai.Util",
          "name": "defHeader",
          "normalized": "Header-\u003eResponse-\u003eResponse",
          "package": "wai-util",
          "partial": "Header",
          "signature": "Header-\u003eResponse-\u003eResponse",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wai-util/docs/Network-Wai-Util.html#v:defHeader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet a default value for a header in \u003ccode\u003e\u003ca\u003eResponseHeaders\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Network.Wai.Util",
          "name": "defHeader'",
          "package": "wai-util",
          "signature": "Header -\u003e ResponseHeaders -\u003e ResponseHeaders",
          "source": "src/Network-Wai-Util.html#defHeader%27",
          "type": "function"
        },
        "index": {
          "description": "Set default value for header in ResponseHeaders",
          "hierarchy": "Network Wai Util",
          "module": "Network.Wai.Util",
          "name": "defHeader'",
          "normalized": "Header-\u003eResponseHeaders-\u003eResponseHeaders",
          "package": "wai-util",
          "partial": "Header'",
          "signature": "Header-\u003eResponseHeaders-\u003eResponseHeaders",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wai-util/docs/Network-Wai-Util.html#v:defHeader-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBuild an Application that supports multiple Accept types (Content Negotiation)\n\u003c/p\u003e",
          "module": "Network.Wai.Util",
          "name": "handleAcceptTypes",
          "package": "wai-util",
          "signature": "[(String, m Response)] -\u003e Request -\u003e m Response",
          "source": "src/Network-Wai-Util.html#handleAcceptTypes",
          "type": "function"
        },
        "index": {
          "description": "Build an Application that supports multiple Accept types Content Negotiation",
          "hierarchy": "Network Wai Util",
          "module": "Network.Wai.Util",
          "name": "handleAcceptTypes",
          "normalized": "[(String,a Response)]-\u003eRequest-\u003ea Response",
          "package": "wai-util",
          "partial": "Accept Types",
          "signature": "[(String,m Response)]-\u003eRequest-\u003em Response",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wai-util/docs/Network-Wai-Util.html#v:handleAcceptTypes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSmart constructor to build a JSON \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e using Aeson\n\u003c/p\u003e",
          "module": "Network.Wai.Util",
          "name": "json",
          "package": "wai-util",
          "signature": "Status -\u003e ResponseHeaders -\u003e a -\u003e m Response",
          "source": "src/Network-Wai-Util.html#json",
          "type": "function"
        },
        "index": {
          "description": "Smart constructor to build JSON Response using Aeson",
          "hierarchy": "Network Wai Util",
          "module": "Network.Wai.Util",
          "name": "json",
          "normalized": "Status-\u003eResponseHeaders-\u003ea-\u003eb Response",
          "package": "wai-util",
          "signature": "Status-\u003eResponseHeaders-\u003ea-\u003em Response",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wai-util/docs/Network-Wai-Util.html#v:json"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a function over the headers in a \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Network.Wai.Util",
          "name": "mapHeaders",
          "package": "wai-util",
          "signature": "(ResponseHeaders -\u003e ResponseHeaders) -\u003e Response -\u003e Response",
          "source": "src/Network-Wai-Util.html#mapHeaders",
          "type": "function"
        },
        "index": {
          "description": "Run function over the headers in Response",
          "hierarchy": "Network Wai Util",
          "module": "Network.Wai.Util",
          "name": "mapHeaders",
          "normalized": "(ResponseHeaders-\u003eResponseHeaders)-\u003eResponse-\u003eResponse",
          "package": "wai-util",
          "partial": "Headers",
          "signature": "(ResponseHeaders-\u003eResponseHeaders)-\u003eResponse-\u003eResponse",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wai-util/docs/Network-Wai-Util.html#v:mapHeaders"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eBackeEnd\u003c/code\u003e for \u003ccode\u003eparseRequestBody\u003c/code\u003e that throws out any file uploads\n\u003c/p\u003e",
          "module": "Network.Wai.Util",
          "name": "noStoreFileUploads",
          "package": "wai-util",
          "signature": "BackEnd ()",
          "source": "src/Network-Wai-Util.html#noStoreFileUploads",
          "type": "function"
        },
        "index": {
          "description": "BackeEnd for parseRequestBody that throws out any file uploads",
          "hierarchy": "Network Wai Util",
          "module": "Network.Wai.Util",
          "name": "noStoreFileUploads",
          "normalized": "BackEnd()",
          "package": "wai-util",
          "partial": "Store File Uploads",
          "signature": "BackEnd()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wai-util/docs/Network-Wai-Util.html#v:noStoreFileUploads"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLookup a given key in something that acts like a query\n\u003c/p\u003e",
          "module": "Network.Wai.Util",
          "name": "queryLookup",
          "package": "wai-util",
          "signature": "k -\u003e q -\u003e Maybe Text",
          "source": "src/Network-Wai-Util.html#queryLookup",
          "type": "function"
        },
        "index": {
          "description": "Lookup given key in something that acts like query",
          "hierarchy": "Network Wai Util",
          "module": "Network.Wai.Util",
          "name": "queryLookup",
          "normalized": "a-\u003eb-\u003eMaybe Text",
          "package": "wai-util",
          "partial": "Lookup",
          "signature": "k-\u003eq-\u003eMaybe Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wai-util/docs/Network-Wai-Util.html#v:queryLookup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet all matches for a given key in something that acts like a query\n\u003c/p\u003e",
          "module": "Network.Wai.Util",
          "name": "queryLookupAll",
          "package": "wai-util",
          "signature": "k -\u003e q -\u003e [Text]",
          "source": "src/Network-Wai-Util.html#queryLookupAll",
          "type": "function"
        },
        "index": {
          "description": "Get all matches for given key in something that acts like query",
          "hierarchy": "Network Wai Util",
          "module": "Network.Wai.Util",
          "name": "queryLookupAll",
          "normalized": "a-\u003eb-\u003e[Text]",
          "package": "wai-util",
          "partial": "Lookup All",
          "signature": "k-\u003eq-\u003e[Text]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wai-util/docs/Network-Wai-Util.html#v:queryLookupAll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSmart constructor to build a redirect\n\u003c/p\u003e\u003cp\u003eChecks if the \u003ccode\u003e\u003ca\u003eStatus\u003c/a\u003e\u003c/code\u003e is a redirection and the \u003ccode\u003e\u003ca\u003eURI\u003c/a\u003e\u003c/code\u003e is absolute\n\u003c/p\u003e",
          "module": "Network.Wai.Util",
          "name": "redirect",
          "package": "wai-util",
          "signature": "Status -\u003e ResponseHeaders -\u003e URI -\u003e Maybe Response",
          "source": "src/Network-Wai-Util.html#redirect",
          "type": "function"
        },
        "index": {
          "description": "Smart constructor to build redirect Checks if the Status is redirection and the URI is absolute",
          "hierarchy": "Network Wai Util",
          "module": "Network.Wai.Util",
          "name": "redirect",
          "normalized": "Status-\u003eResponseHeaders-\u003eURI-\u003eMaybe Response",
          "package": "wai-util",
          "signature": "Status-\u003eResponseHeaders-\u003eURI-\u003eMaybe Response",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wai-util/docs/Network-Wai-Util.html#v:redirect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSmart constructor to build a redirect\n\u003c/p\u003e\u003cp\u003eAsserts redirect conditions with an irrefutable pattern match, only use\n on hard-coded values.\n\u003c/p\u003e",
          "module": "Network.Wai.Util",
          "name": "redirect'",
          "package": "wai-util",
          "signature": "Status -\u003e ResponseHeaders -\u003e URI -\u003e m Response",
          "source": "src/Network-Wai-Util.html#redirect%27",
          "type": "function"
        },
        "index": {
          "description": "Smart constructor to build redirect Asserts redirect conditions with an irrefutable pattern match only use on hard-coded values",
          "hierarchy": "Network Wai Util",
          "module": "Network.Wai.Util",
          "name": "redirect'",
          "normalized": "Status-\u003eResponseHeaders-\u003eURI-\u003ea Response",
          "package": "wai-util",
          "signature": "Status-\u003eResponseHeaders-\u003eURI-\u003em Response",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wai-util/docs/Network-Wai-Util.html#v:redirect-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the matching header name to this in a \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Network.Wai.Util",
          "name": "replaceHeader",
          "package": "wai-util",
          "signature": "Header -\u003e Response -\u003e Response",
          "source": "src/Network-Wai-Util.html#replaceHeader",
          "type": "function"
        },
        "index": {
          "description": "Set the matching header name to this in Response",
          "hierarchy": "Network Wai Util",
          "module": "Network.Wai.Util",
          "name": "replaceHeader",
          "normalized": "Header-\u003eResponse-\u003eResponse",
          "package": "wai-util",
          "partial": "Header",
          "signature": "Header-\u003eResponse-\u003eResponse",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wai-util/docs/Network-Wai-Util.html#v:replaceHeader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the matching header name to this in \u003ccode\u003e\u003ca\u003eResponseHeaders\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Network.Wai.Util",
          "name": "replaceHeader'",
          "package": "wai-util",
          "signature": "Header -\u003e ResponseHeaders -\u003e ResponseHeaders",
          "source": "src/Network-Wai-Util.html#replaceHeader%27",
          "type": "function"
        },
        "index": {
          "description": "Set the matching header name to this in ResponseHeaders",
          "hierarchy": "Network Wai Util",
          "module": "Network.Wai.Util",
          "name": "replaceHeader'",
          "normalized": "Header-\u003eResponseHeaders-\u003eResponseHeaders",
          "package": "wai-util",
          "partial": "Header'",
          "signature": "Header-\u003eResponseHeaders-\u003eResponseHeaders",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wai-util/docs/Network-Wai-Util.html#v:replaceHeader-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a WAI \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e to an email \u003ccode\u003e\u003ca\u003ePart\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eUseful for re-using \u003ccode\u003eApplication\u003c/code\u003e code/smart constructors to send emails\n\u003c/p\u003e",
          "module": "Network.Wai.Util",
          "name": "responseToMailPart",
          "package": "wai-util",
          "signature": "Bool -\u003e Response -\u003e m Part",
          "source": "src/Network-Wai-Util.html#responseToMailPart",
          "type": "function"
        },
        "index": {
          "description": "Convert WAI Response to an email Part Useful for re-using Application code smart constructors to send emails",
          "hierarchy": "Network Wai Util",
          "module": "Network.Wai.Util",
          "name": "responseToMailPart",
          "normalized": "Bool-\u003eResponse-\u003ea Part",
          "package": "wai-util",
          "partial": "To Mail Part",
          "signature": "Bool-\u003eResponse-\u003em Part",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wai-util/docs/Network-Wai-Util.html#v:responseToMailPart"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSmart constructor to build a \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e from a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Network.Wai.Util",
          "name": "string",
          "package": "wai-util",
          "signature": "Status -\u003e ResponseHeaders -\u003e String -\u003e m Response",
          "source": "src/Network-Wai-Util.html#string",
          "type": "function"
        },
        "index": {
          "description": "Smart constructor to build Response from String",
          "hierarchy": "Network Wai Util",
          "module": "Network.Wai.Util",
          "name": "string",
          "normalized": "Status-\u003eResponseHeaders-\u003eString-\u003ea Response",
          "package": "wai-util",
          "signature": "Status-\u003eResponseHeaders-\u003eString-\u003em Response",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wai-util/docs/Network-Wai-Util.html#v:string"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSafely convert a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e to types that can only encode ASCII\n\u003c/p\u003e",
          "module": "Network.Wai.Util",
          "name": "stringAscii",
          "package": "wai-util",
          "signature": "String -\u003e Maybe s",
          "source": "src/Network-Wai-Util.html#stringAscii",
          "type": "function"
        },
        "index": {
          "description": "Safely convert String to types that can only encode ASCII",
          "hierarchy": "Network Wai Util",
          "module": "Network.Wai.Util",
          "name": "stringAscii",
          "normalized": "String-\u003eMaybe a",
          "package": "wai-util",
          "partial": "Ascii",
          "signature": "String-\u003eMaybe s",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wai-util/docs/Network-Wai-Util.html#v:stringAscii"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSafely convert a pair of \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e to a pair suitable for use as a\n \u003ccode\u003e\u003ca\u003eHeader\u003c/a\u003e\u003c/code\u003e, ensuring only ASCII characters are present.\n\u003c/p\u003e",
          "module": "Network.Wai.Util",
          "name": "stringHeader",
          "package": "wai-util",
          "signature": "(String, String) -\u003e Maybe (s1, s2)",
          "source": "src/Network-Wai-Util.html#stringHeader",
          "type": "function"
        },
        "index": {
          "description": "Safely convert pair of String to pair suitable for use as Header ensuring only ASCII characters are present",
          "hierarchy": "Network Wai Util",
          "module": "Network.Wai.Util",
          "name": "stringHeader",
          "normalized": "(String,String)-\u003eMaybe(a,a)",
          "package": "wai-util",
          "partial": "Header",
          "signature": "(String,String)-\u003eMaybe(s,s)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wai-util/docs/Network-Wai-Util.html#v:stringHeader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSafely convert a list of pairs of \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e to a pair suitable for\n use as a \u003ccode\u003e\u003ca\u003eHeader\u003c/a\u003e\u003c/code\u003e, ensuring only ASCII characters are present.\n\u003c/p\u003e",
          "module": "Network.Wai.Util",
          "name": "stringHeaders",
          "package": "wai-util",
          "signature": "[(String, String)] -\u003e Maybe [(s1, s2)]",
          "source": "src/Network-Wai-Util.html#stringHeaders",
          "type": "function"
        },
        "index": {
          "description": "Safely convert list of pairs of String to pair suitable for use as Header ensuring only ASCII characters are present",
          "hierarchy": "Network Wai Util",
          "module": "Network.Wai.Util",
          "name": "stringHeaders",
          "normalized": "[(String,String)]-\u003eMaybe[(a,a)]",
          "package": "wai-util",
          "partial": "Headers",
          "signature": "[(String,String)]-\u003eMaybe[(s,s)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wai-util/docs/Network-Wai-Util.html#v:stringHeaders"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnsafely convert a list of pairs of \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e to a pair suitable for\n use as a \u003ccode\u003e\u003ca\u003eHeader\u003c/a\u003e\u003c/code\u003e, ensuring only ASCII characters are present.\n\u003c/p\u003e\u003cp\u003eAsserts success with an irrefutable pattern match, only use on\n hard-coded values.\n\u003c/p\u003e",
          "module": "Network.Wai.Util",
          "name": "stringHeaders'",
          "package": "wai-util",
          "signature": "[(String, String)] -\u003e [(s1, s2)]",
          "source": "src/Network-Wai-Util.html#stringHeaders%27",
          "type": "function"
        },
        "index": {
          "description": "Unsafely convert list of pairs of String to pair suitable for use as Header ensuring only ASCII characters are present Asserts success with an irrefutable pattern match only use on hard-coded values",
          "hierarchy": "Network Wai Util",
          "module": "Network.Wai.Util",
          "name": "stringHeaders'",
          "normalized": "[(String,String)]-\u003e[(a,a)]",
          "package": "wai-util",
          "partial": "Headers'",
          "signature": "[(String,String)]-\u003e[(s,s)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wai-util/docs/Network-Wai-Util.html#v:stringHeaders-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSmart constructor to build a \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e from a \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Network.Wai.Util",
          "name": "text",
          "package": "wai-util",
          "signature": "Status -\u003e ResponseHeaders -\u003e Text -\u003e m Response",
          "source": "src/Network-Wai-Util.html#text",
          "type": "function"
        },
        "index": {
          "description": "Smart constructor to build Response from Text",
          "hierarchy": "Network Wai Util",
          "module": "Network.Wai.Util",
          "name": "text",
          "normalized": "Status-\u003eResponseHeaders-\u003eText-\u003ea Response",
          "package": "wai-util",
          "signature": "Status-\u003eResponseHeaders-\u003eText-\u003em Response",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wai-util/docs/Network-Wai-Util.html#v:text"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSmart constructor to build a \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e from a \u003ccode\u003e\u003ca\u003eBuilder\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Network.Wai.Util",
          "name": "textBuilder",
          "package": "wai-util",
          "signature": "Status -\u003e ResponseHeaders -\u003e Builder -\u003e m Response",
          "source": "src/Network-Wai-Util.html#textBuilder",
          "type": "function"
        },
        "index": {
          "description": "Smart constructor to build Response from Builder",
          "hierarchy": "Network Wai Util",
          "module": "Network.Wai.Util",
          "name": "textBuilder",
          "normalized": "Status-\u003eResponseHeaders-\u003eBuilder-\u003ea Response",
          "package": "wai-util",
          "partial": "Builder",
          "signature": "Status-\u003eResponseHeaders-\u003eBuilder-\u003em Response",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wai-util/docs/Network-Wai-Util.html#v:textBuilder"
      }
    }
  ]
]