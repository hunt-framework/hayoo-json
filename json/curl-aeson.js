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
        "word": "curl-aeson"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFunctions for communicating with JSON over HTTP connection.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.Curl.Aeson",
          "name": "Aeson",
          "package": "curl-aeson",
          "source": "src/Network-Curl-Aeson.html",
          "type": "module"
        },
        "index": {
          "description": "Functions for communicating with JSON over HTTP connection",
          "hierarchy": "Network Curl Aeson",
          "module": "Network.Curl.Aeson",
          "name": "Aeson",
          "package": "curl-aeson",
          "partial": "Aeson",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/curl-aeson/docs/Network-Curl-Aeson.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis exception is is thrown when Curl doesn't finish cleanly or\n the parsing of JSON response fails.\n\u003c/p\u003e",
          "module": "Network.Curl.Aeson",
          "name": "CurlAesonException",
          "package": "curl-aeson",
          "source": "src/Network-Curl-Aeson.html#CurlAesonException",
          "type": "data"
        },
        "index": {
          "description": "This exception is is thrown when Curl doesn finish cleanly or the parsing of JSON response fails",
          "hierarchy": "Network Curl Aeson",
          "module": "Network.Curl.Aeson",
          "name": "CurlAesonException",
          "package": "curl-aeson",
          "partial": "Curl Aeson Exception",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/curl-aeson/docs/Network-Curl-Aeson.html#t:CurlAesonException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHelper function for writing parsers for JSON objects which are\n not needed to be parsed completely.\n\u003c/p\u003e\u003cp\u003eIn this example we are parsing JSON from\n \u003ca\u003ehttp://json.org/example.html\u003c/a\u003e.  Note the use of the\n \u003ccode\u003eOverloadedStrings\u003c/code\u003e language extension which enables \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e values\n to be written as string literals.\n\u003c/p\u003e\u003cpre\u003ep (\u003ccode\u003e\u003ca\u003eObject\u003c/a\u003e\u003c/code\u003e o) = \u003ccode\u003epure\u003c/code\u003e obj\u003ccode\u003e\u003ca\u003e...\u003c/a\u003e\u003c/code\u003e\"glossary\"\u003ccode\u003e\u003ca\u003e...\u003c/a\u003e\u003c/code\u003e\"title\"\np _ = \u003ccode\u003e\u003ca\u003emzero\u003c/a\u003e\u003c/code\u003e\n\u003c/pre\u003e",
          "module": "Network.Curl.Aeson",
          "name": "(...)",
          "package": "curl-aeson",
          "signature": "Parser Object-\u003e Text-\u003e Parser b",
          "type": "function"
        },
        "index": {
          "description": "Helper function for writing parsers for JSON objects which are not needed to be parsed completely In this example we are parsing JSON from http json.org example.html Note the use of the OverloadedStrings language extension which enables Text values to be written as string literals Object pure obj glossary title mzero",
          "hierarchy": "Network Curl Aeson",
          "module": "Network.Curl.Aeson",
          "name": "(...) ...",
          "normalized": "Parser Object-\u003eText-\u003eParser a",
          "package": "curl-aeson",
          "signature": "Parser Object-\u003eText-\u003eParser b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curl-aeson/docs/Network-Curl-Aeson.html#v:..."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curl.Aeson",
          "name": "CurlAesonException",
          "package": "curl-aeson",
          "signature": "CurlAesonException",
          "source": "src/Network-Curl-Aeson.html#CurlAesonException",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curl Aeson",
          "module": "Network.Curl.Aeson",
          "name": "CurlAesonException",
          "package": "curl-aeson",
          "partial": "Curl Aeson Exception",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curl-aeson/docs/Network-Curl-Aeson.html#v:CurlAesonException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSingle cookie of given key and value.\n\u003c/p\u003e",
          "module": "Network.Curl.Aeson",
          "name": "cookie",
          "package": "curl-aeson",
          "signature": "String -\u003e String -\u003e CurlOption",
          "source": "src/Network-Curl-Aeson.html#cookie",
          "type": "function"
        },
        "index": {
          "description": "Single cookie of given key and value",
          "hierarchy": "Network Curl Aeson",
          "module": "Network.Curl.Aeson",
          "name": "cookie",
          "normalized": "String-\u003eString-\u003eCurlOption",
          "package": "curl-aeson",
          "signature": "String-\u003eString-\u003eCurlOption",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curl-aeson/docs/Network-Curl-Aeson.html#v:cookie"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSend single HTTP request.\n\u003c/p\u003e\u003cp\u003eThe request automatically has \u003ccode\u003eContent-type: application/json\u003c/code\u003e\n header if you pass any data. This function is lenient on response\n content type: everything is accepted as long as it is parseable\n with \u003ccode\u003e\u003ca\u003edecode\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eIf you need authentication, you need to pass session cookie or\n other means of authentication tokens via \u003ccode\u003e\u003ca\u003eCurlOption\u003c/a\u003e\u003c/code\u003e list.\n\u003c/p\u003e",
          "module": "Network.Curl.Aeson",
          "name": "curlAeson",
          "package": "curl-aeson",
          "signature": "(Value -\u003e Parser b)-\u003e String-\u003e URLString-\u003e [CurlOption]-\u003e Maybe a-\u003e IO b",
          "type": "function"
        },
        "index": {
          "description": "Send single HTTP request The request automatically has Content-type application json header if you pass any data This function is lenient on response content type everything is accepted as long as it is parseable with decode If you need authentication you need to pass session cookie or other means of authentication tokens via CurlOption list",
          "hierarchy": "Network Curl Aeson",
          "module": "Network.Curl.Aeson",
          "name": "curlAeson",
          "normalized": "(Value-\u003eParser a)-\u003eString-\u003eURLString-\u003e[CurlOption]-\u003eMaybe b-\u003eIO a",
          "package": "curl-aeson",
          "partial": "Aeson",
          "signature": "(Value-\u003eParser b)-\u003eString-\u003eURLString-\u003e[CurlOption]-\u003eMaybe a-\u003eIO b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curl-aeson/docs/Network-Curl-Aeson.html#v:curlAeson"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShorthand for doing just a HTTP GET request and parsing the output to\n any FromJSON instance.\n\u003c/p\u003e",
          "module": "Network.Curl.Aeson",
          "name": "curlAesonGet",
          "package": "curl-aeson",
          "signature": "URLString -\u003e IO a",
          "source": "src/Network-Curl-Aeson.html#curlAesonGet",
          "type": "function"
        },
        "index": {
          "description": "Shorthand for doing just HTTP GET request and parsing the output to any FromJSON instance",
          "hierarchy": "Network Curl Aeson",
          "module": "Network.Curl.Aeson",
          "name": "curlAesonGet",
          "normalized": "URLString-\u003eIO a",
          "package": "curl-aeson",
          "partial": "Aeson Get",
          "signature": "URLString-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curl-aeson/docs/Network-Curl-Aeson.html#v:curlAesonGet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShorthand for doing just a HTTP GET request and parsing the\n output with given parser \u003cem\u003ep\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Network.Curl.Aeson",
          "name": "curlAesonGetWith",
          "package": "curl-aeson",
          "signature": "(Value -\u003e Parser a) -\u003e URLString -\u003e IO a",
          "source": "src/Network-Curl-Aeson.html#curlAesonGetWith",
          "type": "function"
        },
        "index": {
          "description": "Shorthand for doing just HTTP GET request and parsing the output with given parser",
          "hierarchy": "Network Curl Aeson",
          "module": "Network.Curl.Aeson",
          "name": "curlAesonGetWith",
          "normalized": "(Value-\u003eParser a)-\u003eURLString-\u003eIO a",
          "package": "curl-aeson",
          "partial": "Aeson Get With",
          "signature": "(Value-\u003eParser a)-\u003eURLString-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curl-aeson/docs/Network-Curl-Aeson.html#v:curlAesonGetWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curl.Aeson",
          "name": "curlCode",
          "package": "curl-aeson",
          "signature": "CurlCode",
          "source": "src/Network-Curl-Aeson.html#CurlAesonException",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curl Aeson",
          "module": "Network.Curl.Aeson",
          "name": "curlCode",
          "package": "curl-aeson",
          "partial": "Code",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curl-aeson/docs/Network-Curl-Aeson.html#v:curlCode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curl.Aeson",
          "name": "curlOpts",
          "package": "curl-aeson",
          "signature": "[CurlOption]",
          "source": "src/Network-Curl-Aeson.html#CurlAesonException",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curl Aeson",
          "module": "Network.Curl.Aeson",
          "name": "curlOpts",
          "normalized": "[CurlOption]",
          "package": "curl-aeson",
          "partial": "Opts",
          "signature": "[CurlOption]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curl-aeson/docs/Network-Curl-Aeson.html#v:curlOpts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curl.Aeson",
          "name": "errorMsg",
          "package": "curl-aeson",
          "signature": "String",
          "source": "src/Network-Curl-Aeson.html#CurlAesonException",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curl Aeson",
          "module": "Network.Curl.Aeson",
          "name": "errorMsg",
          "package": "curl-aeson",
          "partial": "Msg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curl-aeson/docs/Network-Curl-Aeson.html#v:errorMsg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTo avoid ambiguity in type checker you may pass this value instead\n of Nothing to \u003ccode\u003e\u003ca\u003ecurlAeson\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.Curl.Aeson",
          "name": "noData",
          "package": "curl-aeson",
          "signature": "Maybe Value",
          "source": "src/Network-Curl-Aeson.html#noData",
          "type": "function"
        },
        "index": {
          "description": "To avoid ambiguity in type checker you may pass this value instead of Nothing to curlAeson",
          "hierarchy": "Network Curl Aeson",
          "module": "Network.Curl.Aeson",
          "name": "noData",
          "package": "curl-aeson",
          "partial": "Data",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curl-aeson/docs/Network-Curl-Aeson.html#v:noData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUseful for just giving the JSON as string when it is static\n anyway and doesn't need to be programmatically crafted.\n\u003c/p\u003e",
          "module": "Network.Curl.Aeson",
          "name": "rawJson",
          "package": "curl-aeson",
          "signature": "String -\u003e Maybe Value",
          "source": "src/Network-Curl-Aeson.html#rawJson",
          "type": "function"
        },
        "index": {
          "description": "Useful for just giving the JSON as string when it is static anyway and doesn need to be programmatically crafted",
          "hierarchy": "Network Curl Aeson",
          "module": "Network.Curl.Aeson",
          "name": "rawJson",
          "normalized": "String-\u003eMaybe Value",
          "package": "curl-aeson",
          "partial": "Json",
          "signature": "String-\u003eMaybe Value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curl-aeson/docs/Network-Curl-Aeson.html#v:rawJson"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curl.Aeson",
          "name": "received",
          "package": "curl-aeson",
          "signature": "String",
          "source": "src/Network-Curl-Aeson.html#CurlAesonException",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curl Aeson",
          "module": "Network.Curl.Aeson",
          "name": "received",
          "package": "curl-aeson",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curl-aeson/docs/Network-Curl-Aeson.html#v:received"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Curl.Aeson",
          "name": "url",
          "package": "curl-aeson",
          "signature": "URLString",
          "source": "src/Network-Curl-Aeson.html#CurlAesonException",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Curl Aeson",
          "module": "Network.Curl.Aeson",
          "name": "url",
          "package": "curl-aeson",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curl-aeson/docs/Network-Curl-Aeson.html#v:url"
      }
    }
  ]
]