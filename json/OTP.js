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
        "word": "OTP"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eImplements HMAC-Based One-Time Password Algorithm as defined in RFC 4226 and\n Time-Based One-Time Password Algorithm as defined in RFC 6238.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.OTP",
          "name": "OTP",
          "package": "OTP",
          "source": "src/Data-OTP.html",
          "type": "module"
        },
        "index": {
          "description": "Implements HMAC-Based One-Time Password Algorithm as defined in RFC and Time-Based One-Time Password Algorithm as defined in RFC",
          "hierarchy": "Data OTP",
          "module": "Data.OTP",
          "name": "OTP",
          "package": "OTP",
          "partial": "OTP",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/OTP/docs/Data-OTP.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute an HOTP using secret key and counter value.\n\u003c/p\u003e",
          "module": "Data.OTP",
          "name": "hotp",
          "package": "OTP",
          "signature": "[Octet]-\u003e Int-\u003e Int-\u003e Int",
          "type": "function"
        },
        "index": {
          "description": "Compute an HOTP using secret key and counter value",
          "hierarchy": "Data OTP",
          "module": "Data.OTP",
          "name": "hotp",
          "normalized": "[Octet]-\u003eInt-\u003eInt-\u003eInt",
          "package": "OTP",
          "signature": "[Octet]-\u003eInt-\u003eInt-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OTP/docs/Data-OTP.html#v:hotp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute an TOTP using secret key and time.\n\u003c/p\u003e",
          "module": "Data.OTP",
          "name": "totp",
          "package": "OTP",
          "signature": "[Octet]-\u003e UTCTime-\u003e Int-\u003e Int-\u003e Int",
          "type": "function"
        },
        "index": {
          "description": "Compute an TOTP using secret key and time",
          "hierarchy": "Data OTP",
          "module": "Data.OTP",
          "name": "totp",
          "normalized": "[Octet]-\u003eUTCTime-\u003eInt-\u003eInt-\u003eInt",
          "package": "OTP",
          "signature": "[Octet]-\u003eUTCTime-\u003eInt-\u003eInt-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OTP/docs/Data-OTP.html#v:totp"
      }
    }
  ]
]