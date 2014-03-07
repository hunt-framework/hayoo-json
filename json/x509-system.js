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
        "word": "x509-system"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.X509.MacOS",
          "name": "MacOS",
          "package": "x509-system",
          "source": "src/System-X509-MacOS.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "System X509 MacOS",
          "module": "System.X509.MacOS",
          "name": "MacOS",
          "package": "x509-system",
          "partial": "Mac OS",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/x509-system/docs/System-X509-MacOS.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.X509.MacOS",
          "name": "getSystemCertificateStore",
          "package": "x509-system",
          "signature": "IO CertificateStore",
          "source": "src/System-X509-MacOS.html#getSystemCertificateStore",
          "type": "function"
        },
        "index": {
          "hierarchy": "System X509 MacOS",
          "module": "System.X509.MacOS",
          "name": "getSystemCertificateStore",
          "package": "x509-system",
          "partial": "System Certificate Store",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/x509-system/docs/System-X509-MacOS.html#v:getSystemCertificateStore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ethis module is portable to unix system where there is usually\n a \u003cem\u003eetc\u003c/em\u003essl/certs with system X509 certificates.\n\u003c/p\u003e\u003cp\u003ethe path can be dynamically override using the environment variable\n defined by envPathOverride in the module, which by\n default is SYSTEM_CERTIFICATE_PATH\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.X509.Unix",
          "name": "Unix",
          "package": "x509-system",
          "source": "src/System-X509-Unix.html",
          "type": "module"
        },
        "index": {
          "description": "this module is portable to unix system where there is usually etc ssl certs with system X509 certificates the path can be dynamically override using the environment variable defined by envPathOverride in the module which by default is SYSTEM CERTIFICATE PATH",
          "hierarchy": "System X509 Unix",
          "module": "System.X509.Unix",
          "name": "Unix",
          "package": "x509-system",
          "partial": "Unix",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/x509-system/docs/System-X509-Unix.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"System.X509.Unix\",\"System.X509\"]",
          "name": "getSystemCertificateStore",
          "package": "x509-system",
          "signature": "IO CertificateStore",
          "source": "src/System-X509-Unix.html#getSystemCertificateStore",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/x509-system/docs/System-X509-Unix.html#v:getSystemCertificateStore\",\"http://hackage.haskell.org/package/x509-system/docs/System-X509.html#v:getSystemCertificateStore\"]"
        },
        "index": {
          "hierarchy": "System X509 Unix",
          "module": "System.X509.Unix",
          "name": "getSystemCertificateStore",
          "package": "x509-system",
          "partial": "System Certificate Store",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/x509-system/docs/System-X509-Unix.html#v:getSystemCertificateStore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.X509",
          "name": "X509",
          "package": "x509-system",
          "source": "src/System-X509.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "System X509",
          "module": "System.X509",
          "name": "X509",
          "package": "x509-system",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/x509-system/docs/System-X509.html#"
      }
    }
  ]
]