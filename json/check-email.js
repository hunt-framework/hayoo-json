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
        "word": "check-email"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Email.Check",
          "name": "Check",
          "package": "check-email",
          "source": "src/Network-Email-Check.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Network Email Check",
          "module": "Network.Email.Check",
          "name": "Check",
          "package": "check-email",
          "partial": "Check",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/check-email/docs/Network-Email-Check.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck to see whether an email is (1) RFC-valid and (2) has an\n existant MX record.\n\u003c/p\u003e",
          "module": "Network.Email.Check",
          "name": "check",
          "package": "check-email",
          "signature": "String -\u003e IO (Either String EmailAddress)",
          "source": "src/Network-Email-Check.html#check",
          "type": "function"
        },
        "index": {
          "description": "Check to see whether an email is RFC-valid and has an existant MX record",
          "hierarchy": "Network Email Check",
          "module": "Network.Email.Check",
          "name": "check",
          "normalized": "String-\u003eIO(Either String EmailAddress)",
          "package": "check-email",
          "signature": "String-\u003eIO(Either String EmailAddress)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/check-email/docs/Network-Email-Check.html#v:check"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Email.Check",
          "name": "checkMx",
          "package": "check-email",
          "signature": "CString -\u003e IO CInt",
          "source": "src/Network-Email-Check.html#checkMx",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Email Check",
          "module": "Network.Email.Check",
          "name": "checkMx",
          "normalized": "CString-\u003eIO CInt",
          "package": "check-email",
          "partial": "Mx",
          "signature": "CString-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/check-email/docs/Network-Email-Check.html#v:checkMx"
      }
    }
  ]
]