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
        "word": "openpgp-Crypto"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis is a wrapper around \u003ca\u003ehttp://hackage.haskell.org/package/Crypto\u003c/a\u003e\n that currently does fingerprint generation and signature verification.\n\u003c/p\u003e\u003cp\u003eThe recommended way to import this module is:\n\u003c/p\u003e\u003cpre\u003e import qualified Data.OpenPGP.Crypto as OpenPGP\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Data.OpenPGP.Crypto",
          "name": "Crypto",
          "package": "openpgp-Crypto",
          "source": "src/Data-OpenPGP-Crypto.html",
          "type": "module"
        },
        "index": {
          "description": "This is wrapper around http hackage.haskell.org package Crypto that currently does fingerprint generation and signature verification The recommended way to import this module is import qualified Data.OpenPGP.Crypto as OpenPGP",
          "hierarchy": "Data OpenPGP Crypto",
          "module": "Data.OpenPGP.Crypto",
          "name": "Crypto",
          "package": "openpgp-Crypto",
          "partial": "Crypto",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/openpgp-Crypto/docs/Data-OpenPGP-Crypto.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate a key fingerprint from a PublicKeyPacket or SecretKeyPacket\n \u003ca\u003ehttp://tools.ietf.org/html/rfc4880#section-12.2\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Data.OpenPGP.Crypto",
          "name": "fingerprint",
          "package": "openpgp-Crypto",
          "signature": "Packet -\u003e String",
          "source": "src/Data-OpenPGP-Crypto.html#fingerprint",
          "type": "function"
        },
        "index": {
          "description": "Generate key fingerprint from PublicKeyPacket or SecretKeyPacket http tools.ietf.org html rfc4880 section-12.2",
          "hierarchy": "Data OpenPGP Crypto",
          "module": "Data.OpenPGP.Crypto",
          "name": "fingerprint",
          "normalized": "Packet-\u003eString",
          "package": "openpgp-Crypto",
          "signature": "Packet-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/openpgp-Crypto/docs/Data-OpenPGP-Crypto.html#v:fingerprint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSign data or key/userID pair.  Only supports RSA keys for now.\n\u003c/p\u003e",
          "module": "Data.OpenPGP.Crypto",
          "name": "sign",
          "package": "openpgp-Crypto",
          "signature": "Message-\u003e Message-\u003e HashAlgorithm-\u003e String-\u003e Integer-\u003e Packet",
          "type": "function"
        },
        "index": {
          "description": "Sign data or key userID pair Only supports RSA keys for now",
          "hierarchy": "Data OpenPGP Crypto",
          "module": "Data.OpenPGP.Crypto",
          "name": "sign",
          "normalized": "Message-\u003eMessage-\u003eHashAlgorithm-\u003eString-\u003eInteger-\u003ePacket",
          "package": "openpgp-Crypto",
          "signature": "Message-\u003eMessage-\u003eHashAlgorithm-\u003eString-\u003eInteger-\u003ePacket",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/openpgp-Crypto/docs/Data-OpenPGP-Crypto.html#v:sign"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVerify a message signature.  Only supports RSA keys for now.\n\u003c/p\u003e",
          "module": "Data.OpenPGP.Crypto",
          "name": "verify",
          "package": "openpgp-Crypto",
          "signature": "Message-\u003e Message-\u003e Int-\u003e Bool",
          "type": "function"
        },
        "index": {
          "description": "Verify message signature Only supports RSA keys for now",
          "hierarchy": "Data OpenPGP Crypto",
          "module": "Data.OpenPGP.Crypto",
          "name": "verify",
          "normalized": "Message-\u003eMessage-\u003eInt-\u003eBool",
          "package": "openpgp-Crypto",
          "signature": "Message-\u003eMessage-\u003eInt-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/openpgp-Crypto/docs/Data-OpenPGP-Crypto.html#v:verify"
      }
    }
  ]
]