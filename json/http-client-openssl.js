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
        "word": "http-client-openssl"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSupport for making connections via the OpenSSL library.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.HTTP.Client.OpenSSL",
          "name": "OpenSSL",
          "package": "http-client-openssl",
          "source": "src/Network-HTTP-Client-OpenSSL.html",
          "type": "module"
        },
        "index": {
          "description": "Support for making connections via the OpenSSL library",
          "hierarchy": "Network HTTP Client OpenSSL",
          "module": "Network.HTTP.Client.OpenSSL",
          "name": "OpenSSL",
          "package": "http-client-openssl",
          "partial": "Open SSL",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/http-client-openssl/docs/Network-HTTP-Client-OpenSSL.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNote that it is the caller's responsibility to pass in an appropriate\n context. Future versions of http-client-openssl will hopefully include a\n sane, safe default.\n\u003c/p\u003e",
          "module": "Network.HTTP.Client.OpenSSL",
          "name": "opensslManagerSettings",
          "package": "http-client-openssl",
          "signature": "IO SSLContext -\u003e ManagerSettings",
          "source": "src/Network-HTTP-Client-OpenSSL.html#opensslManagerSettings",
          "type": "function"
        },
        "index": {
          "description": "Note that it is the caller responsibility to pass in an appropriate context Future versions of http-client-openssl will hopefully include sane safe default",
          "hierarchy": "Network HTTP Client OpenSSL",
          "module": "Network.HTTP.Client.OpenSSL",
          "name": "opensslManagerSettings",
          "normalized": "IO SSLContext-\u003eManagerSettings",
          "package": "http-client-openssl",
          "partial": "Manager Settings",
          "signature": "IO SSLContext-\u003eManagerSettings",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-client-openssl/docs/Network-HTTP-Client-OpenSSL.html#v:opensslManagerSettings"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComputation of \u003ccode\u003e\u003ccode\u003e\u003ca\u003ewithOpenSSL\u003c/a\u003e\u003c/code\u003e action\u003c/code\u003e initializes the OpenSSL\n library as necessary, and computes \u003ccode\u003eaction\u003c/code\u003e. Every application that\n uses HsOpenSSL must wrap any operations involving OpenSSL with\n \u003ccode\u003e\u003ca\u003ewithOpenSSL\u003c/a\u003e\u003c/code\u003e, or they might crash:\n\u003c/p\u003e\u003cpre\u003e module Main where\n import OpenSSL\n\n main :: IO ()\n main = withOpenSSL $\n        do ...\n\u003c/pre\u003e\u003cp\u003eSince 0.10.3.5, \u003ccode\u003e\u003ca\u003ewithOpenSSL\u003c/a\u003e\u003c/code\u003e is safe to be applied\n redundantly. Library authors may wish to wrap their functions not\n to force their users to think about initialization:\n\u003c/p\u003e\u003cpre\u003e get :: URI -\u003e IO Response\n get uri = withOpenSSL $ internalImplementationOfGet uri\n\u003c/pre\u003e",
          "module": "Network.HTTP.Client.OpenSSL",
          "name": "withOpenSSL",
          "package": "http-client-openssl",
          "signature": "IO a -\u003e IO a",
          "type": "function"
        },
        "index": {
          "description": "Computation of withOpenSSL action initializes the OpenSSL library as necessary and computes action Every application that uses HsOpenSSL must wrap any operations involving OpenSSL with withOpenSSL or they might crash module Main where import OpenSSL main IO main withOpenSSL do Since withOpenSSL is safe to be applied redundantly Library authors may wish to wrap their functions not to force their users to think about initialization get URI IO Response get uri withOpenSSL internalImplementationOfGet uri",
          "hierarchy": "Network HTTP Client OpenSSL",
          "module": "Network.HTTP.Client.OpenSSL",
          "name": "withOpenSSL",
          "normalized": "IO a-\u003eIO a",
          "package": "http-client-openssl",
          "partial": "Open SSL",
          "signature": "IO a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-client-openssl/docs/Network-HTTP-Client-OpenSSL.html#v:withOpenSSL"
      }
    }
  ]
]