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
        "word": "hostname-validate"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eValidate hostnames.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.Hostname",
          "name": "Hostname",
          "package": "hostname-validate",
          "source": "src/Text-Hostname.html",
          "type": "module"
        },
        "index": {
          "description": "Validate hostnames",
          "hierarchy": "Text Hostname",
          "module": "Text.Hostname",
          "name": "Hostname",
          "package": "hostname-validate",
          "partial": "Hostname",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hostname-validate/docs/Text-Hostname.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIs the input a valid host name?\n\u003c/p\u003e",
          "module": "Text.Hostname",
          "name": "validHostname",
          "package": "hostname-validate",
          "signature": "ByteString -\u003e Bool",
          "source": "src/Text-Hostname.html#validHostname",
          "type": "function"
        },
        "index": {
          "description": "Is the input valid host name",
          "hierarchy": "Text Hostname",
          "module": "Text.Hostname",
          "name": "validHostname",
          "normalized": "ByteString-\u003eBool",
          "package": "hostname-validate",
          "partial": "Hostname",
          "signature": "ByteString-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hostname-validate/docs/Text-Hostname.html#v:validHostname"
      }
    }
  ]
]