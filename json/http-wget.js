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
        "word": "http-wget"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eProvide a simple HTTP client interface by wrapping the wget command line tool.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.HTTP.Wget",
          "name": "Wget",
          "package": "http-wget",
          "source": "src/Network-HTTP-Wget.html",
          "type": "module"
        },
        "index": {
          "description": "Provide simple HTTP client interface by wrapping the wget command line tool",
          "hierarchy": "Network HTTP Wget",
          "module": "Network.HTTP.Wget",
          "name": "Wget",
          "package": "http-wget",
          "partial": "Wget",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/http-wget/docs/Network-HTTP-Wget.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Wget",
          "name": "WgetException",
          "package": "http-wget",
          "source": "src/Network-HTTP-Wget.html#WgetException",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Network HTTP Wget",
          "module": "Network.HTTP.Wget",
          "name": "WgetException",
          "package": "http-wget",
          "partial": "Wget Exception",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/http-wget/docs/Network-HTTP-Wget.html#t:WgetException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Wget",
          "name": "WgetException",
          "package": "http-wget",
          "signature": "WgetException String",
          "source": "src/Network-HTTP-Wget.html#WgetException",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Wget",
          "module": "Network.HTTP.Wget",
          "name": "WgetException",
          "package": "http-wget",
          "partial": "Wget Exception",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-wget/docs/Network-HTTP-Wget.html#v:WgetException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet a response from the given URL with the given parameters.\n\u003c/p\u003e",
          "module": "Network.HTTP.Wget",
          "name": "wget",
          "package": "http-wget",
          "signature": "String-\u003e [(String, String)]-\u003e [(String, String)]-\u003e m String",
          "type": "function"
        },
        "index": {
          "description": "Get response from the given URL with the given parameters",
          "hierarchy": "Network HTTP Wget",
          "module": "Network.HTTP.Wget",
          "name": "wget",
          "normalized": "String-\u003e[(String,String)]-\u003e[(String,String)]-\u003ea String",
          "package": "http-wget",
          "signature": "String-\u003e[(String,String)]-\u003e[(String,String)]-\u003em String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-wget/docs/Network-HTTP-Wget.html#v:wget"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet a response from the given URL with the given parameters, including headers.\n\u003c/p\u003e",
          "module": "Network.HTTP.Wget",
          "name": "wget'",
          "package": "http-wget",
          "signature": "String-\u003e [(String, String)]-\u003e [(String, String)]-\u003e m ([(String, String)], String)",
          "type": "function"
        },
        "index": {
          "description": "Get response from the given URL with the given parameters including headers",
          "hierarchy": "Network HTTP Wget",
          "module": "Network.HTTP.Wget",
          "name": "wget'",
          "normalized": "String-\u003e[(String,String)]-\u003e[(String,String)]-\u003ea([(String,String)],String)",
          "package": "http-wget",
          "signature": "String-\u003e[(String,String)]-\u003e[(String,String)]-\u003em([(String,String)],String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-wget/docs/Network-HTTP-Wget.html#v:wget-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003ewget\u003c/a\u003e\u003c/code\u003e, but easier to access the exception on failure.\n\u003c/p\u003e",
          "module": "Network.HTTP.Wget",
          "name": "wgetSplit",
          "package": "http-wget",
          "signature": "String-\u003e [(String, String)]-\u003e [(String, String)]-\u003e IO (m String)",
          "type": "function"
        },
        "index": {
          "description": "Same as wget but easier to access the exception on failure",
          "hierarchy": "Network HTTP Wget",
          "module": "Network.HTTP.Wget",
          "name": "wgetSplit",
          "normalized": "String-\u003e[(String,String)]-\u003e[(String,String)]-\u003eIO(a String)",
          "package": "http-wget",
          "partial": "Split",
          "signature": "String-\u003e[(String,String)]-\u003e[(String,String)]-\u003eIO(m String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-wget/docs/Network-HTTP-Wget.html#v:wgetSplit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as wget', but easier to access the exception on failure.\n\u003c/p\u003e",
          "module": "Network.HTTP.Wget",
          "name": "wgetSplit'",
          "package": "http-wget",
          "signature": "String-\u003e [(String, String)]-\u003e [(String, String)]-\u003e IO (m ([(String, String)], String))",
          "type": "function"
        },
        "index": {
          "description": "Same as wget but easier to access the exception on failure",
          "hierarchy": "Network HTTP Wget",
          "module": "Network.HTTP.Wget",
          "name": "wgetSplit'",
          "normalized": "String-\u003e[(String,String)]-\u003e[(String,String)]-\u003eIO(a([(String,String)],String))",
          "package": "http-wget",
          "partial": "Split'",
          "signature": "String-\u003e[(String,String)]-\u003e[(String,String)]-\u003eIO(m([(String,String)],String))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-wget/docs/Network-HTTP-Wget.html#v:wgetSplit-39-"
      }
    }
  ]
]