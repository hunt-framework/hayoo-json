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
        "word": "certificate"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eRead/Write Private Key\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Certificate.KeyDSA",
          "name": "KeyDSA",
          "package": "certificate",
          "source": "src/Data-Certificate-KeyDSA.html",
          "type": "module"
        },
        "index": {
          "description": "Read Write Private Key",
          "hierarchy": "Data Certificate KeyDSA",
          "module": "Data.Certificate.KeyDSA",
          "name": "KeyDSA",
          "package": "certificate",
          "partial": "Key DSA",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/certificate/docs/Data-Certificate-KeyDSA.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Certificate.KeyDSA",
          "name": "decodePrivate",
          "package": "certificate",
          "signature": "ByteString -\u003e Either String (PublicKey, PrivateKey)",
          "source": "src/Data-Certificate-KeyDSA.html#decodePrivate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Certificate KeyDSA",
          "module": "Data.Certificate.KeyDSA",
          "name": "decodePrivate",
          "normalized": "ByteString-\u003eEither String(PublicKey,PrivateKey)",
          "package": "certificate",
          "partial": "Private",
          "signature": "ByteString-\u003eEither String(PublicKey,PrivateKey)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/certificate/docs/Data-Certificate-KeyDSA.html#v:decodePrivate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Certificate.KeyDSA",
          "name": "encodePrivate",
          "package": "certificate",
          "signature": "(PublicKey, PrivateKey) -\u003e ByteString",
          "source": "src/Data-Certificate-KeyDSA.html#encodePrivate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Certificate KeyDSA",
          "module": "Data.Certificate.KeyDSA",
          "name": "encodePrivate",
          "normalized": "(PublicKey,PrivateKey)-\u003eByteString",
          "package": "certificate",
          "partial": "Private",
          "signature": "(PublicKey,PrivateKey)-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/certificate/docs/Data-Certificate-KeyDSA.html#v:encodePrivate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eRead/Write Private/Public RSA Key\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Certificate.KeyRSA",
          "name": "KeyRSA",
          "package": "certificate",
          "source": "src/Data-Certificate-KeyRSA.html",
          "type": "module"
        },
        "index": {
          "description": "Read Write Private Public RSA Key",
          "hierarchy": "Data Certificate KeyRSA",
          "module": "Data.Certificate.KeyRSA",
          "name": "KeyRSA",
          "package": "certificate",
          "partial": "Key RSA",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/certificate/docs/Data-Certificate-KeyRSA.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Certificate.KeyRSA",
          "name": "decodePrivate",
          "package": "certificate",
          "signature": "ByteString -\u003e Either String (PublicKey, PrivateKey)",
          "source": "src/Data-Certificate-KeyRSA.html#decodePrivate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Certificate KeyRSA",
          "module": "Data.Certificate.KeyRSA",
          "name": "decodePrivate",
          "normalized": "ByteString-\u003eEither String(PublicKey,PrivateKey)",
          "package": "certificate",
          "partial": "Private",
          "signature": "ByteString-\u003eEither String(PublicKey,PrivateKey)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/certificate/docs/Data-Certificate-KeyRSA.html#v:decodePrivate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Certificate.KeyRSA",
          "name": "decodePublic",
          "package": "certificate",
          "signature": "ByteString -\u003e Either String PublicKey",
          "source": "src/Data-Certificate-KeyRSA.html#decodePublic",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Certificate KeyRSA",
          "module": "Data.Certificate.KeyRSA",
          "name": "decodePublic",
          "normalized": "ByteString-\u003eEither String PublicKey",
          "package": "certificate",
          "partial": "Public",
          "signature": "ByteString-\u003eEither String PublicKey",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/certificate/docs/Data-Certificate-KeyRSA.html#v:decodePublic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Certificate.KeyRSA",
          "name": "encodePrivate",
          "package": "certificate",
          "signature": "(PublicKey, PrivateKey) -\u003e ByteString",
          "source": "src/Data-Certificate-KeyRSA.html#encodePrivate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Certificate KeyRSA",
          "module": "Data.Certificate.KeyRSA",
          "name": "encodePrivate",
          "normalized": "(PublicKey,PrivateKey)-\u003eByteString",
          "package": "certificate",
          "partial": "Private",
          "signature": "(PublicKey,PrivateKey)-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/certificate/docs/Data-Certificate-KeyRSA.html#v:encodePrivate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Certificate.KeyRSA",
          "name": "encodePublic",
          "package": "certificate",
          "signature": "PublicKey -\u003e ByteString",
          "source": "src/Data-Certificate-KeyRSA.html#encodePublic",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Certificate KeyRSA",
          "module": "Data.Certificate.KeyRSA",
          "name": "encodePublic",
          "normalized": "PublicKey-\u003eByteString",
          "package": "certificate",
          "partial": "Public",
          "signature": "PublicKey-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/certificate/docs/Data-Certificate-KeyRSA.html#v:encodePublic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eparse a RSA pubkeys from ASN1 encoded bits.\n - return RSA.PublicKey (len-modulus, modulus, e) if successful \n\u003c/p\u003e",
          "module": "Data.Certificate.KeyRSA",
          "name": "parse_RSA",
          "package": "certificate",
          "signature": "ByteString -\u003e Either String PublicKey",
          "source": "src/Data-Certificate-KeyRSA.html#parse_RSA",
          "type": "function"
        },
        "index": {
          "description": "parse RSA pubkeys from ASN1 encoded bits return RSA.PublicKey len-modulus modulus if successful",
          "hierarchy": "Data Certificate KeyRSA",
          "module": "Data.Certificate.KeyRSA",
          "name": "parse_RSA",
          "normalized": "ByteString-\u003eEither String PublicKey",
          "package": "certificate",
          "partial": "RSA",
          "signature": "ByteString-\u003eEither String PublicKey",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/certificate/docs/Data-Certificate-KeyRSA.html#v:parse_RSA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Certificate.X509.Cert",
          "name": "Cert",
          "package": "certificate",
          "source": "src/Data-Certificate-X509-Cert.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Certificate X509 Cert",
          "module": "Data.Certificate.X509.Cert",
          "name": "Cert",
          "package": "certificate",
          "partial": "Cert",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/certificate/docs/Data-Certificate-X509-Cert.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Certificate.X509.Cert",
          "name": "ASN1String",
          "package": "certificate",
          "source": "src/Data-Certificate-X509-Cert.html#ASN1String",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Certificate X509 Cert",
          "module": "Data.Certificate.X509.Cert",
          "name": "ASN1String",
          "package": "certificate",
          "partial": "ASN String",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/certificate/docs/Data-Certificate-X509-Cert.html#t:ASN1String"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Certificate.X509.Cert",
          "name": "ASN1StringType",
          "package": "certificate",
          "source": "src/Data-Certificate-X509-Cert.html#ASN1StringType",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Certificate X509 Cert",
          "module": "Data.Certificate.X509.Cert",
          "name": "ASN1StringType",
          "package": "certificate",
          "partial": "ASN String Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/certificate/docs/Data-Certificate-X509-Cert.html#t:ASN1StringType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Certificate.X509.Cert",
          "name": "Certificate",
          "package": "certificate",
          "source": "src/Data-Certificate-X509-Cert.html#Certificate",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Certificate X509 Cert",
          "module": "Data.Certificate.X509.Cert",
          "name": "Certificate",
          "package": "certificate",
          "partial": "Certificate",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/certificate/docs/Data-Certificate-X509-Cert.html#t:Certificate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Certificate.X509.Cert",
          "name": "DistinguishedName",
          "package": "certificate",
          "source": "src/Data-Certificate-X509-Cert.html#DistinguishedName",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Data Certificate X509 Cert",
          "module": "Data.Certificate.X509.Cert",
          "name": "DistinguishedName",
          "package": "certificate",
          "partial": "Distinguished Name",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/certificate/docs/Data-Certificate-X509-Cert.html#t:DistinguishedName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Certificate.X509.Cert",
          "name": "ECDSA_Hash",
          "package": "certificate",
          "source": "src/Data-Certificate-X509-Cert.html#ECDSA_Hash",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Certificate X509 Cert",
          "module": "Data.Certificate.X509.Cert",
          "name": "ECDSA_Hash",
          "package": "certificate",
          "partial": "ECDSA Hash",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/certificate/docs/Data-Certificate-X509-Cert.html#t:ECDSA_Hash"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Certificate.X509.Cert",
          "name": "HashALG",
          "package": "certificate",
          "source": "src/Data-Certificate-X509-Cert.html#HashALG",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Certificate X509 Cert",
          "module": "Data.Certificate.X509.Cert",
          "name": "HashALG",
          "package": "certificate",
          "partial": "Hash ALG",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/certificate/docs/Data-Certificate-X509-Cert.html#t:HashALG"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Certificate.X509.Cert",
          "name": "OID",
          "package": "certificate",
          "source": "src/Data-Certificate-X509-Internal.html#OID",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Certificate X509 Cert",
          "module": "Data.Certificate.X509.Cert",
          "name": "OID",
          "package": "certificate",
          "partial": "OID",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/certificate/docs/Data-Certificate-X509-Cert.html#t:OID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Certificate.X509.Cert",
          "name": "PubKey",
          "package": "certificate",
          "source": "src/Data-Certificate-X509-Cert.html#PubKey",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Certificate X509 Cert",
          "module": "Data.Certificate.X509.Cert",
          "name": "PubKey",
          "package": "certificate",
          "partial": "Pub Key",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/certificate/docs/Data-Certificate-X509-Cert.html#t:PubKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Certificate.X509.Cert",
          "name": "PubKeyALG",
          "package": "certificate",
          "source": "src/Data-Certificate-X509-Cert.html#PubKeyALG",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Certificate X509 Cert",
          "module": "Data.Certificate.X509.Cert",
          "name": "PubKeyALG",
          "package": "certificate",
          "partial": "Pub Key ALG",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/certificate/docs/Data-Certificate-X509-Cert.html#t:PubKeyALG"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Certificate.X509.Cert",
          "name": "SignatureALG",
          "package": "certificate",
          "source": "src/Data-Certificate-X509-Cert.html#SignatureALG",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Certificate X509 Cert",
          "module": "Data.Certificate.X509.Cert",
          "name": "SignatureALG",
          "package": "certificate",
          "partial": "Signature ALG",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/certificate/docs/Data-Certificate-X509-Cert.html#t:SignatureALG"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Certificate.X509.Cert\",\"Data.Certificate.X509\"]",
          "name": "BMP",
          "package": "certificate",
          "signature": "BMP",
          "source": "src/Data-Certificate-X509-Cert.html#ASN1StringType",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/certificate/docs/Data-Certificate-X509-Cert.html#v:BMP\",\"http://hackage.haskell.org/package/certificate/docs/Data-Certificate-X509.html#v:BMP\"]"
        },
        "index": {
          "hierarchy": "Data Certificate X509 Cert",
          "module": "Data.Certificate.X509.Cert",
          "name": "BMP",
          "package": "certificate",
          "partial": "BMP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/certificate/docs/Data-Certificate-X509-Cert.html#v:BMP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Certificate.X509.Cert\",\"Data.Certificate.X509\"]",
          "name": "Certificate",
          "package": "certificate",
          "signature": "Certificate",
          "source": "src/Data-Certificate-X509-Cert.html#Certificate",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/certificate/docs/Data-Certificate-X509-Cert.html#v:Certificate\",\"http://hackage.haskell.org/package/certificate/docs/Data-Certificate-X509.html#v:Certificate\"]"
        },
        "index": {
          "hierarchy": "Data Certificate X509 Cert",
          "module": "Data.Certificate.X509.Cert",
          "name": "Certificate",
          "package": "certificate",
          "partial": "Certificate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/certificate/docs/Data-Certificate-X509-Cert.html#v:Certificate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Certificate.X509.Cert\",\"Data.Certificate.X509\"]",
          "name": "DistinguishedName",
          "package": "certificate",
          "signature": "DistinguishedName",
          "source": "src/Data-Certificate-X509-Cert.html#DistinguishedName",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/certificate/docs/Data-Certificate-X509-Cert.html#v:DistinguishedName\",\"http://hackage.haskell.org/package/certificate/docs/Data-Certificate-X509.html#v:DistinguishedName\"]"
        },
        "index": {
          "hierarchy": "Data Certificate X509 Cert",
          "module": "Data.Certificate.X509.Cert",
          "name": "DistinguishedName",
          "package": "certificate",
          "partial": "Distinguished Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/certificate/docs/Data-Certificate-X509-Cert.html#v:DistinguishedName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Certificate.X509.Cert",
          "name": "ECDSA_Hash_SHA384",
          "package": "certificate",
          "signature": "ECDSA_Hash_SHA384",
          "source": "src/Data-Certificate-X509-Cert.html#ECDSA_Hash",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Certificate X509 Cert",
          "module": "Data.Certificate.X509.Cert",
          "name": "ECDSA_Hash_SHA384",
          "package": "certificate",
          "partial": "ECDSA Hash SHA",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/certificate/docs/Data-Certificate-X509-Cert.html#v:ECDSA_Hash_SHA384"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Certificate.X509.Cert\",\"Data.Certificate.X509\"]",
          "name": "HashMD2",
          "package": "certificate",
          "signature": "HashMD2",
          "source": "src/Data-Certificate-X509-Cert.html#HashALG",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/certificate/docs/Data-Certificate-X509-Cert.html#v:HashMD2\",\"http://hackage.haskell.org/package/certificate/docs/Data-Certificate-X509.html#v:HashMD2\"]"
        },
        "index": {
          "hierarchy": "Data Certificate X509 Cert",
          "module": "Data.Certificate.X509.Cert",
          "name": "HashMD2",
          "package": "certificate",
          "partial": "Hash MD",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/certificate/docs/Data-Certificate-X509-Cert.html#v:HashMD2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Certificate.X509.Cert\",\"Data.Certificate.X509\"]",
          "name": "HashMD5",
          "package": "certificate",
          "signature": "HashMD5",
          "source": "src/Data-Certificate-X509-Cert.html#HashALG",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/certificate/docs/Data-Certificate-X509-Cert.html#v:HashMD5\",\"http://hackage.haskell.org/package/certificate/docs/Data-Certificate-X509.html#v:HashMD5\"]"
        },
        "index": {
          "hierarchy": "Data Certificate X509 Cert",
          "module": "Data.Certificate.X509.Cert",
          "name": "HashMD5",
          "package": "certificate",
          "partial": "Hash MD",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/certificate/docs/Data-Certificate-X509-Cert.html#v:HashMD5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Certificate.X509.Cert\",\"Data.Certificate.X509\"]",
          "name": "HashSHA1",
          "package": "certificate",
          "signature": "HashSHA1",
          "source": "src/Data-Certificate-X509-Cert.html#HashALG",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/certificate/docs/Data-Certificate-X509-Cert.html#v:HashSHA1\",\"http://hackage.haskell.org/package/certificate/docs/Data-Certificate-X509.html#v:HashSHA1\"]"
        },
        "index": {
          "hierarchy": "Data Certificate X509 Cert",
          "module": "Data.Certificate.X509.Cert",
          "name": "HashSHA1",
          "package": "certificate",
          "partial": "Hash SHA",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/certificate/docs/Data-Certificate-X509-Cert.html#v:HashSHA1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Certificate.X509.Cert\",\"Data.Certificate.X509\"]",
          "name": "HashSHA224",
          "package": "certificate",
          "signature": "HashSHA224",
          "source": "src/Data-Certificate-X509-Cert.html#HashALG",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/certificate/docs/Data-Certificate-X509-Cert.html#v:HashSHA224\",\"http://hackage.haskell.org/package/certificate/docs/Data-Certificate-X509.html#v:HashSHA224\"]"
        },
        "index": {
          "hierarchy": "Data Certificate X509 Cert",
          "module": "Data.Certificate.X509.Cert",
          "name": "HashSHA224",
          "package": "certificate",
          "partial": "Hash SHA",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/certificate/docs/Data-Certificate-X509-Cert.html#v:HashSHA224"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Certificate.X509.Cert\",\"Data.Certificate.X509\"]",
          "name": "HashSHA256",
          "package": "certificate",
          "signature": "HashSHA256",
          "source": "src/Data-Certificate-X509-Cert.html#HashALG",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/certificate/docs/Data-Certificate-X509-Cert.html#v:HashSHA256\",\"http://hackage.haskell.org/package/certificate/docs/Data-Certificate-X509.html#v:HashSHA256\"]"
        },
        "index": {
          "hierarchy": "Data Certificate X509 Cert",
          "module": "Data.Certificate.X509.Cert",
          "name": "HashSHA256",
          "package": "certificate",
          "partial": "Hash SHA",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/certificate/docs/Data-Certificate-X509-Cert.html#v:HashSHA256"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Certificate.X509.Cert\",\"Data.Certificate.X509\"]",
          "name": "HashSHA384",
          "package": "certificate",
          "signature": "HashSHA384",
          "source": "src/Data-Certificate-X509-Cert.html#HashALG",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/certificate/docs/Data-Certificate-X509-Cert.html#v:HashSHA384\",\"http://hackage.haskell.org/package/certificate/docs/Data-Certificate-X509.html#v:HashSHA384\"]"
        },
        "index": {
          "hierarchy": "Data Certificate X509 Cert",
          "module": "Data.Certificate.X509.Cert",
          "name": "HashSHA384",
          "package": "certificate",
          "partial": "Hash SHA",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/certificate/docs/Data-Certificate-X509-Cert.html#v:HashSHA384"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Certificate.X509.Cert\",\"Data.Certificate.X509\"]",
          "name": "HashSHA512",
          "package": "certificate",
          "signature": "HashSHA512",
          "source": "src/Data-Certificate-X509-Cert.html#HashALG",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/certificate/docs/Data-Certificate-X509-Cert.html#v:HashSHA512\",\"http://hackage.haskell.org/package/certificate/docs/Data-Certificate-X509.html#v:HashSHA512\"]"
        },
        "index": {
          "hierarchy": "Data Certificate X509 Cert",
          "module": "Data.Certificate.X509.Cert",
          "name": "HashSHA512",
          "package": "certificate",
          "partial": "Hash SHA",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/certificate/docs/Data-Certificate-X509-Cert.html#v:HashSHA512"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Certificate.X509.Cert\",\"Data.Certificate.X509\"]",
          "name": "IA5",
          "package": "certificate",
          "signature": "IA5",
          "source": "src/Data-Certificate-X509-Cert.html#ASN1StringType",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/certificate/docs/Data-Certificate-X509-Cert.html#v:IA5\",\"http://hackage.haskell.org/package/certificate/docs/Data-Certificate-X509.html#v:IA5\"]"
        },
        "index": {
          "hierarchy": "Data Certificate X509 Cert",
          "module": "Data.Certificate.X509.Cert",
          "name": "IA5",
          "package": "certificate",
          "partial": "IA",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/certificate/docs/Data-Certificate-X509-Cert.html#v:IA5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Certificate.X509.Cert\",\"Data.Certificate.X509\"]",
          "name": "Printable",
          "package": "certificate",
          "signature": "Printable",
          "source": "src/Data-Certificate-X509-Cert.html#ASN1StringType",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/certificate/docs/Data-Certificate-X509-Cert.html#v:Printable\",\"http://hackage.haskell.org/package/certificate/docs/Data-Certificate-X509.html#v:Printable\"]"
        },
        "index": {
          "hierarchy": "Data Certificate X509 Cert",
          "module": "Data.Certificate.X509.Cert",
          "name": "Printable",
          "package": "certificate",
          "partial": "Printable",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/certificate/docs/Data-Certificate-X509-Cert.html#v:Printable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Certificate.X509.Cert\",\"Data.Certificate.X509\"]",
          "name": "PubKeyALG_DH",
          "package": "certificate",
          "signature": "PubKeyALG_DH",
          "source": "src/Data-Certificate-X509-Cert.html#PubKeyALG",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/certificate/docs/Data-Certificate-X509-Cert.html#v:PubKeyALG_DH\",\"http://hackage.haskell.org/package/certificate/docs/Data-Certificate-X509.html#v:PubKeyALG_DH\"]"
        },
        "index": {
          "hierarchy": "Data Certificate X509 Cert",
          "module": "Data.Certificate.X509.Cert",
          "name": "PubKeyALG_DH",
          "package": "certificate",
          "partial": "Pub Key ALG DH",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/certificate/docs/Data-Certificate-X509-Cert.html#v:PubKeyALG_DH"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Certificate.X509.Cert\",\"Data.Certificate.X509\"]",
          "name": "PubKeyALG_DSA",
          "package": "certificate",
          "signature": "PubKeyALG_DSA",
          "source": "src/Data-Certificate-X509-Cert.html#PubKeyALG",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/certificate/docs/Data-Certificate-X509-Cert.html#v:PubKeyALG_DSA\",\"http://hackage.haskell.org/package/certificate/docs/Data-Certificate-X509.html#v:PubKeyALG_DSA\"]"
        },
        "index": {
          "hierarchy": "Data Certificate X509 Cert",
          "module": "Data.Certificate.X509.Cert",
          "name": "PubKeyALG_DSA",
          "package": "certificate",
          "partial": "Pub Key ALG DSA",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/certificate/docs/Data-Certificate-X509-Cert.html#v:PubKeyALG_DSA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Certificate.X509.Cert\",\"Data.Certificate.X509\"]",
          "name": "PubKeyALG_ECDSA",
          "package": "certificate",
          "signature": "PubKeyALG_ECDSA",
          "source": "src/Data-Certificate-X509-Cert.html#PubKeyALG",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/certificate/docs/Data-Certificate-X509-Cert.html#v:PubKeyALG_ECDSA\",\"http://hackage.haskell.org/package/certificate/docs/Data-Certificate-X509.html#v:PubKeyALG_ECDSA\"]"
        },
        "index": {
          "hierarchy": "Data Certificate X509 Cert",
          "module": "Data.Certificate.X509.Cert",
          "name": "PubKeyALG_ECDSA",
          "package": "certificate",
          "partial": "Pub Key ALG ECDSA",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/certificate/docs/Data-Certificate-X509-Cert.html#v:PubKeyALG_ECDSA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Certificate.X509.Cert\",\"Data.Certificate.X509\"]",
          "name": "PubKeyALG_RSA",
          "package": "certificate",
          "signature": "PubKeyALG_RSA",
          "source": "src/Data-Certificate-X509-Cert.html#PubKeyALG",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/certificate/docs/Data-Certificate-X509-Cert.html#v:PubKeyALG_RSA\",\"http://hackage.haskell.org/package/certificate/docs/Data-Certificate-X509.html#v:PubKeyALG_RSA\"]"
        },
        "index": {
          "hierarchy": "Data Certificate X509 Cert",
          "module": "Data.Certificate.X509.Cert",
          "name": "PubKeyALG_RSA",
          "package": "certificate",
          "partial": "Pub Key ALG RSA",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/certificate/docs/Data-Certificate-X509-Cert.html#v:PubKeyALG_RSA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Certificate.X509.Cert\",\"Data.Certificate.X509\"]",
          "name": "PubKeyALG_Unknown",
          "package": "certificate",
          "signature": "PubKeyALG_Unknown OID",
          "source": "src/Data-Certificate-X509-Cert.html#PubKeyALG",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/certificate/docs/Data-Certificate-X509-Cert.html#v:PubKeyALG_Unknown\",\"http://hackage.haskell.org/package/certificate/docs/Data-Certificate-X509.html#v:PubKeyALG_Unknown\"]"
        },
        "index": {
          "hierarchy": "Data Certificate X509 Cert",
          "module": "Data.Certificate.X509.Cert",
          "name": "PubKeyALG_Unknown",
          "package": "certificate",
          "partial": "Pub Key ALG Unknown",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/certificate/docs/Data-Certificate-X509-Cert.html#v:PubKeyALG_Unknown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDH format with (p,g,q,j,(seed,pgenCounter))\n\u003c/p\u003e",
          "module": "[\"Data.Certificate.X509.Cert\",\"Data.Certificate.X509\"]",
          "name": "PubKeyDH",
          "package": "certificate",
          "signature": "PubKeyDH (Integer, Integer, Integer, Maybe Integer, ([Word8], Integer))",
          "source": "src/Data-Certificate-X509-Cert.html#PubKey",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/certificate/docs/Data-Certificate-X509-Cert.html#v:PubKeyDH\",\"http://hackage.haskell.org/package/certificate/docs/Data-Certificate-X509.html#v:PubKeyDH\"]"
        },
        "index": {
          "description": "DH format with seed pgenCounter",
          "hierarchy": "Data Certificate X509 Cert",
          "module": "Data.Certificate.X509.Cert",
          "name": "PubKeyDH",
          "normalized": "PubKeyDH(Integer,Integer,Integer,Maybe Integer,([Word],Integer))",
          "package": "certificate",
          "partial": "Pub Key DH",
          "signature": "PubKeyDH(Integer,Integer,Integer,Maybe Integer,([Word],Integer))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/certificate/docs/Data-Certificate-X509-Cert.html#v:PubKeyDH"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDSA public key\n\u003c/p\u003e",
          "module": "[\"Data.Certificate.X509.Cert\",\"Data.Certificate.X509\"]",
          "name": "PubKeyDSA",
          "package": "certificate",
          "signature": "PubKeyDSA PublicKey",
          "source": "src/Data-Certificate-X509-Cert.html#PubKey",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/certificate/docs/Data-Certificate-X509-Cert.html#v:PubKeyDSA\",\"http://hackage.haskell.org/package/certificate/docs/Data-Certificate-X509.html#v:PubKeyDSA\"]"
        },
        "index": {
          "description": "DSA public key",
          "hierarchy": "Data Certificate X509 Cert",
          "module": "Data.Certificate.X509.Cert",
          "name": "PubKeyDSA",
          "package": "certificate",
          "partial": "Pub Key DSA",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/certificate/docs/Data-Certificate-X509-Cert.html#v:PubKeyDSA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eECDSA format not done yet FIXME\n\u003c/p\u003e",
          "module": "[\"Data.Certificate.X509.Cert\",\"Data.Certificate.X509\"]",
          "name": "PubKeyECDSA",
          "package": "certificate",
          "signature": "PubKeyECDSA ECDSA_Hash ByteString",
          "source": "src/Data-Certificate-X509-Cert.html#PubKey",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/certificate/docs/Data-Certificate-X509-Cert.html#v:PubKeyECDSA\",\"http://hackage.haskell.org/package/certificate/docs/Data-Certificate-X509.html#v:PubKeyECDSA\"]"
        },
        "index": {
          "description": "ECDSA format not done yet FIXME",
          "hierarchy": "Data Certificate X509 Cert",
          "module": "Data.Certificate.X509.Cert",
          "name": "PubKeyECDSA",
          "package": "certificate",
          "partial": "Pub Key ECDSA",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/certificate/docs/Data-Certificate-X509-Cert.html#v:PubKeyECDSA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRSA public key\n\u003c/p\u003e",
          "module": "[\"Data.Certificate.X509.Cert\",\"Data.Certificate.X509\"]",
          "name": "PubKeyRSA",
          "package": "certificate",
          "signature": "PubKeyRSA PublicKey",
          "source": "src/Data-Certificate-X509-Cert.html#PubKey",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/certificate/docs/Data-Certificate-X509-Cert.html#v:PubKeyRSA\",\"http://hackage.haskell.org/package/certificate/docs/Data-Certificate-X509.html#v:PubKeyRSA\"]"
        },
        "index": {
          "description": "RSA public key",
          "hierarchy": "Data Certificate X509 Cert",
          "module": "Data.Certificate.X509.Cert",
          "name": "PubKeyRSA",
          "package": "certificate",
          "partial": "Pub Key RSA",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/certificate/docs/Data-Certificate-X509-Cert.html#v:PubKeyRSA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eunrecognized format\n\u003c/p\u003e",
          "module": "[\"Data.Certificate.X509.Cert\",\"Data.Certificate.X509\"]",
          "name": "PubKeyUnknown",
          "package": "certificate",
          "signature": "PubKeyUnknown OID [Word8]",
          "source": "src/Data-Certificate-X509-Cert.html#PubKey",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/certificate/docs/Data-Certificate-X509-Cert.html#v:PubKeyUnknown\",\"http://hackage.haskell.org/package/certificate/docs/Data-Certificate-X509.html#v:PubKeyUnknown\"]"
        },
        "index": {
          "description": "unrecognized format",
          "hierarchy": "Data Certificate X509 Cert",
          "module": "Data.Certificate.X509.Cert",
          "name": "PubKeyUnknown",
          "normalized": "PubKeyUnknown OID[Word]",
          "package": "certificate",
          "partial": "Pub Key Unknown",
          "signature": "PubKeyUnknown OID[Word]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/certificate/docs/Data-Certificate-X509-Cert.html#v:PubKeyUnknown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Certificate.X509.Cert\",\"Data.Certificate.X509\"]",
          "name": "SignatureALG",
          "package": "certificate",
          "signature": "SignatureALG HashALG PubKeyALG",
          "source": "src/Data-Certificate-X509-Cert.html#SignatureALG",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/certificate/docs/Data-Certificate-X509-Cert.html#v:SignatureALG\",\"http://hackage.haskell.org/package/certificate/docs/Data-Certificate-X509.html#v:SignatureALG\"]"
        },
        "index": {
          "hierarchy": "Data Certificate X509 Cert",
          "module": "Data.Certificate.X509.Cert",
          "name": "SignatureALG",
          "package": "certificate",
          "partial": "Signature ALG",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/certificate/docs/Data-Certificate-X509-Cert.html#v:SignatureALG"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Certificate.X509.Cert\",\"Data.Certificate.X509\"]",
          "name": "SignatureALG_Unknown",
          "package": "certificate",
          "signature": "SignatureALG_Unknown OID",
          "source": "src/Data-Certificate-X509-Cert.html#SignatureALG",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/certificate/docs/Data-Certificate-X509-Cert.html#v:SignatureALG_Unknown\",\"http://hackage.haskell.org/package/certificate/docs/Data-Certificate-X509.html#v:SignatureALG_Unknown\"]"
        },
        "index": {
          "hierarchy": "Data Certificate X509 Cert",
          "module": "Data.Certificate.X509.Cert",
          "name": "SignatureALG_Unknown",
          "package": "certificate",
          "partial": "Signature ALG Unknown",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/certificate/docs/Data-Certificate-X509-Cert.html#v:SignatureALG_Unknown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Certificate.X509.Cert\",\"Data.Certificate.X509\"]",
          "name": "T61",
          "package": "certificate",
          "signature": "T61",
          "source": "src/Data-Certificate-X509-Cert.html#ASN1StringType",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/certificate/docs/Data-Certificate-X509-Cert.html#v:T61\",\"http://hackage.haskell.org/package/certificate/docs/Data-Certificate-X509.html#v:T61\"]"
        },
        "index": {
          "hierarchy": "Data Certificate X509 Cert",
          "module": "Data.Certificate.X509.Cert",
          "name": "T61",
          "package": "certificate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/certificate/docs/Data-Certificate-X509-Cert.html#v:T61"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Certificate.X509.Cert\",\"Data.Certificate.X509\"]",
          "name": "UTF8",
          "package": "certificate",
          "signature": "UTF8",
          "source": "src/Data-Certificate-X509-Cert.html#ASN1StringType",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/certificate/docs/Data-Certificate-X509-Cert.html#v:UTF8\",\"http://hackage.haskell.org/package/certificate/docs/Data-Certificate-X509.html#v:UTF8\"]"
        },
        "index": {
          "hierarchy": "Data Certificate X509 Cert",
          "module": "Data.Certificate.X509.Cert",
          "name": "UTF8",
          "package": "certificate",
          "partial": "UTF",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/certificate/docs/Data-Certificate-X509-Cert.html#v:UTF8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Certificate.X509.Cert\",\"Data.Certificate.X509\"]",
          "name": "Univ",
          "package": "certificate",
          "signature": "Univ",
          "source": "src/Data-Certificate-X509-Cert.html#ASN1StringType",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/certificate/docs/Data-Certificate-X509-Cert.html#v:Univ\",\"http://hackage.haskell.org/package/certificate/docs/Data-Certificate-X509.html#v:Univ\"]"
        },
        "index": {
          "hierarchy": "Data Certificate X509 Cert",
          "module": "Data.Certificate.X509.Cert",
          "name": "Univ",
          "package": "certificate",
          "partial": "Univ",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/certificate/docs/Data-Certificate-X509-Cert.html#v:Univ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCertificate Extensions\n\u003c/p\u003e",
          "module": "[\"Data.Certificate.X509.Cert\",\"Data.Certificate.X509\"]",
          "name": "certExtensions",
          "package": "certificate",
          "signature": "Maybe [ExtensionRaw]",
          "source": "src/Data-Certificate-X509-Cert.html#Certificate",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/certificate/docs/Data-Certificate-X509-Cert.html#v:certExtensions\",\"http://hackage.haskell.org/package/certificate/docs/Data-Certificate-X509.html#v:certExtensions\"]"
        },
        "index": {
          "description": "Certificate Extensions",
          "hierarchy": "Data Certificate X509 Cert",
          "module": "Data.Certificate.X509.Cert",
          "name": "certExtensions",
          "normalized": "Maybe[ExtensionRaw]",
          "package": "certificate",
          "partial": "Extensions",
          "signature": "Maybe[ExtensionRaw]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/certificate/docs/Data-Certificate-X509-Cert.html#v:certExtensions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCertificate Issuer DN\n\u003c/p\u003e",
          "module": "[\"Data.Certificate.X509.Cert\",\"Data.Certificate.X509\"]",
          "name": "certIssuerDN",
          "package": "certificate",
          "signature": "DistinguishedName",
          "source": "src/Data-Certificate-X509-Cert.html#Certificate",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/certificate/docs/Data-Certificate-X509-Cert.html#v:certIssuerDN\",\"http://hackage.haskell.org/package/certificate/docs/Data-Certificate-X509.html#v:certIssuerDN\"]"
        },
        "index": {
          "description": "Certificate Issuer DN",
          "hierarchy": "Data Certificate X509 Cert",
          "module": "Data.Certificate.X509.Cert",
          "name": "certIssuerDN",
          "package": "certificate",
          "partial": "Issuer DN",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/certificate/docs/Data-Certificate-X509-Cert.html#v:certIssuerDN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCertificate Public key\n\u003c/p\u003e",
          "module": "[\"Data.Certificate.X509.Cert\",\"Data.Certificate.X509\"]",
          "name": "certPubKey",
          "package": "certificate",
          "signature": "PubKey",
          "source": "src/Data-Certificate-X509-Cert.html#Certificate",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/certificate/docs/Data-Certificate-X509-Cert.html#v:certPubKey\",\"http://hackage.haskell.org/package/certificate/docs/Data-Certificate-X509.html#v:certPubKey\"]"
        },
        "index": {
          "description": "Certificate Public key",
          "hierarchy": "Data Certificate X509 Cert",
          "module": "Data.Certificate.X509.Cert",
          "name": "certPubKey",
          "package": "certificate",
          "partial": "Pub Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/certificate/docs/Data-Certificate-X509-Cert.html#v:certPubKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCertificate Serial number\n\u003c/p\u003e",
          "module": "[\"Data.Certificate.X509.Cert\",\"Data.Certificate.X509\"]",
          "name": "certSerial",
          "package": "certificate",
          "signature": "Integer",
          "source": "src/Data-Certificate-X509-Cert.html#Certificate",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/certificate/docs/Data-Certificate-X509-Cert.html#v:certSerial\",\"http://hackage.haskell.org/package/certificate/docs/Data-Certificate-X509.html#v:certSerial\"]"
        },
        "index": {
          "description": "Certificate Serial number",
          "hierarchy": "Data Certificate X509 Cert",
          "module": "Data.Certificate.X509.Cert",
          "name": "certSerial",
          "package": "certificate",
          "partial": "Serial",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/certificate/docs/Data-Certificate-X509-Cert.html#v:certSerial"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCertificate Signature algorithm\n\u003c/p\u003e",
          "module": "[\"Data.Certificate.X509.Cert\",\"Data.Certificate.X509\"]",
          "name": "certSignatureAlg",
          "package": "certificate",
          "signature": "SignatureALG",
          "source": "src/Data-Certificate-X509-Cert.html#Certificate",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/certificate/docs/Data-Certificate-X509-Cert.html#v:certSignatureAlg\",\"http://hackage.haskell.org/package/certificate/docs/Data-Certificate-X509.html#v:certSignatureAlg\"]"
        },
        "index": {
          "description": "Certificate Signature algorithm",
          "hierarchy": "Data Certificate X509 Cert",
          "module": "Data.Certificate.X509.Cert",
          "name": "certSignatureAlg",
          "package": "certificate",
          "partial": "Signature Alg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/certificate/docs/Data-Certificate-X509-Cert.html#v:certSignatureAlg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCertificate Subject DN\n\u003c/p\u003e",
          "module": "[\"Data.Certificate.X509.Cert\",\"Data.Certificate.X509\"]",
          "name": "certSubjectDN",
          "package": "certificate",
          "signature": "DistinguishedName",
          "source": "src/Data-Certificate-X509-Cert.html#Certificate",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/certificate/docs/Data-Certificate-X509-Cert.html#v:certSubjectDN\",\"http://hackage.haskell.org/package/certificate/docs/Data-Certificate-X509.html#v:certSubjectDN\"]"
        },
        "index": {
          "description": "Certificate Subject DN",
          "hierarchy": "Data Certificate X509 Cert",
          "module": "Data.Certificate.X509.Cert",
          "name": "certSubjectDN",
          "package": "certificate",
          "partial": "Subject DN",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/certificate/docs/Data-Certificate-X509-Cert.html#v:certSubjectDN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCertificate Validity period\n\u003c/p\u003e",
          "module": "[\"Data.Certificate.X509.Cert\",\"Data.Certificate.X509\"]",
          "name": "certValidity",
          "package": "certificate",
          "signature": "(Time, Time)",
          "source": "src/Data-Certificate-X509-Cert.html#Certificate",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/certificate/docs/Data-Certificate-X509-Cert.html#v:certValidity\",\"http://hackage.haskell.org/package/certificate/docs/Data-Certificate-X509.html#v:certValidity\"]"
        },
        "index": {
          "description": "Certificate Validity period",
          "hierarchy": "Data Certificate X509 Cert",
          "module": "Data.Certificate.X509.Cert",
          "name": "certValidity",
          "normalized": "(Time,Time)",
          "package": "certificate",
          "partial": "Validity",
          "signature": "(Time,Time)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/certificate/docs/Data-Certificate-X509-Cert.html#v:certValidity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCertificate Version\n\u003c/p\u003e",
          "module": "[\"Data.Certificate.X509.Cert\",\"Data.Certificate.X509\"]",
          "name": "certVersion",
          "package": "certificate",
          "signature": "Int",
          "source": "src/Data-Certificate-X509-Cert.html#Certificate",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/certificate/docs/Data-Certificate-X509-Cert.html#v:certVersion\",\"http://hackage.haskell.org/package/certificate/docs/Data-Certificate-X509.html#v:certVersion\"]"
        },
        "index": {
          "description": "Certificate Version",
          "hierarchy": "Data Certificate X509 Cert",
          "module": "Data.Certificate.X509.Cert",
          "name": "certVersion",
          "package": "certificate",
          "partial": "Version",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/certificate/docs/Data-Certificate-X509-Cert.html#v:certVersion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Certificate.X509.Cert",
          "name": "encodeDN",
          "package": "certificate",
          "signature": "DistinguishedName -\u003e [ASN1]",
          "source": "src/Data-Certificate-X509-Cert.html#encodeDN",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Certificate X509 Cert",
          "module": "Data.Certificate.X509.Cert",
          "name": "encodeDN",
          "normalized": "DistinguishedName-\u003e[ASN]",
          "package": "certificate",
          "partial": "DN",
          "signature": "DistinguishedName-\u003e[ASN]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/certificate/docs/Data-Certificate-X509-Cert.html#v:encodeDN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Certificate.X509.Cert",
          "name": "encodeDNinner",
          "package": "certificate",
          "signature": "(ASN1String -\u003e ASN1String) -\u003e DistinguishedName -\u003e [ASN1]",
          "source": "src/Data-Certificate-X509-Cert.html#encodeDNinner",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Certificate X509 Cert",
          "module": "Data.Certificate.X509.Cert",
          "name": "encodeDNinner",
          "normalized": "(ASN String-\u003eASN String)-\u003eDistinguishedName-\u003e[ASN]",
          "package": "certificate",
          "partial": "DNinner",
          "signature": "(ASN String-\u003eASN String)-\u003eDistinguishedName-\u003e[ASN]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/certificate/docs/Data-Certificate-X509-Cert.html#v:encodeDNinner"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Certificate.X509.Cert\",\"Data.Certificate.X509\"]",
          "name": "getDistinguishedElements",
          "package": "certificate",
          "signature": "[(OID, ASN1String)]",
          "source": "src/Data-Certificate-X509-Cert.html#DistinguishedName",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/certificate/docs/Data-Certificate-X509-Cert.html#v:getDistinguishedElements\",\"http://hackage.haskell.org/package/certificate/docs/Data-Certificate-X509.html#v:getDistinguishedElements\"]"
        },
        "index": {
          "hierarchy": "Data Certificate X509 Cert",
          "module": "Data.Certificate.X509.Cert",
          "name": "getDistinguishedElements",
          "normalized": "[(OID,ASN String)]",
          "package": "certificate",
          "partial": "Distinguished Elements",
          "signature": "[(OID,ASN String)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/certificate/docs/Data-Certificate-X509-Cert.html#v:getDistinguishedElements"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Certificate.X509.Cert",
          "name": "oidCommonName",
          "package": "certificate",
          "signature": "OID",
          "source": "src/Data-Certificate-X509-Cert.html#oidCommonName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Certificate X509 Cert",
          "module": "Data.Certificate.X509.Cert",
          "name": "oidCommonName",
          "package": "certificate",
          "partial": "Common Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/certificate/docs/Data-Certificate-X509-Cert.html#v:oidCommonName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Certificate.X509.Cert",
          "name": "oidCountry",
          "package": "certificate",
          "signature": "OID",
          "source": "src/Data-Certificate-X509-Cert.html#oidCountry",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Certificate X509 Cert",
          "module": "Data.Certificate.X509.Cert",
          "name": "oidCountry",
          "package": "certificate",
          "partial": "Country",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/certificate/docs/Data-Certificate-X509-Cert.html#v:oidCountry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Certificate.X509.Cert",
          "name": "oidOrganization",
          "package": "certificate",
          "signature": "OID",
          "source": "src/Data-Certificate-X509-Cert.html#oidOrganization",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Certificate X509 Cert",
          "module": "Data.Certificate.X509.Cert",
          "name": "oidOrganization",
          "package": "certificate",
          "partial": "Organization",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/certificate/docs/Data-Certificate-X509-Cert.html#v:oidOrganization"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Certificate.X509.Cert",
          "name": "oidOrganizationUnit",
          "package": "certificate",
          "signature": "OID",
          "source": "src/Data-Certificate-X509-Cert.html#oidOrganizationUnit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Certificate X509 Cert",
          "module": "Data.Certificate.X509.Cert",
          "name": "oidOrganizationUnit",
          "package": "certificate",
          "partial": "Organization Unit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/certificate/docs/Data-Certificate-X509-Cert.html#v:oidOrganizationUnit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Certificate.X509.Cert",
          "name": "oidSig",
          "package": "certificate",
          "signature": "OID -\u003e SignatureALG",
          "source": "src/Data-Certificate-X509-Cert.html#oidSig",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Certificate X509 Cert",
          "module": "Data.Certificate.X509.Cert",
          "name": "oidSig",
          "normalized": "OID-\u003eSignatureALG",
          "package": "certificate",
          "partial": "Sig",
          "signature": "OID-\u003eSignatureALG",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/certificate/docs/Data-Certificate-X509-Cert.html#v:oidSig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Certificate.X509.Cert",
          "name": "parseDN",
          "package": "certificate",
          "signature": "ParseASN1 DistinguishedName",
          "source": "src/Data-Certificate-X509-Cert.html#parseDN",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Certificate X509 Cert",
          "module": "Data.Certificate.X509.Cert",
          "name": "parseDN",
          "package": "certificate",
          "partial": "DN",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/certificate/docs/Data-Certificate-X509-Cert.html#v:parseDN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Certificate.X509.Cert",
          "name": "sigOID",
          "package": "certificate",
          "signature": "SignatureALG -\u003e OID",
          "source": "src/Data-Certificate-X509-Cert.html#sigOID",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Certificate X509 Cert",
          "module": "Data.Certificate.X509.Cert",
          "name": "sigOID",
          "normalized": "SignatureALG-\u003eOID",
          "package": "certificate",
          "partial": "OID",
          "signature": "SignatureALG-\u003eOID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/certificate/docs/Data-Certificate-X509-Cert.html#v:sigOID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eextension processing module.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Certificate.X509.Ext",
          "name": "Ext",
          "package": "certificate",
          "source": "src/Data-Certificate-X509-Ext.html",
          "type": "module"
        },
        "index": {
          "description": "extension processing module",
          "hierarchy": "Data Certificate X509 Ext",
          "module": "Data.Certificate.X509.Ext",
          "name": "Ext",
          "package": "certificate",
          "partial": "Ext",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/certificate/docs/Data-Certificate-X509-Ext.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Certificate.X509.Ext",
          "name": "ExtAuthorityKeyId",
          "package": "certificate",
          "source": "src/Data-Certificate-X509-Ext.html#ExtAuthorityKeyId",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Certificate X509 Ext",
          "module": "Data.Certificate.X509.Ext",
          "name": "ExtAuthorityKeyId",
          "package": "certificate",
          "partial": "Ext Authority Key Id",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/certificate/docs/Data-Certificate-X509-Ext.html#t:ExtAuthorityKeyId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Certificate.X509.Ext",
          "name": "ExtBasicConstraints",
          "package": "certificate",
          "source": "src/Data-Certificate-X509-Ext.html#ExtBasicConstraints",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Certificate X509 Ext",
          "module": "Data.Certificate.X509.Ext",
          "name": "ExtBasicConstraints",
          "package": "certificate",
          "partial": "Ext Basic Constraints",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/certificate/docs/Data-Certificate-X509-Ext.html#t:ExtBasicConstraints"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Certificate.X509.Ext",
          "name": "ExtKeyUsage",
          "package": "certificate",
          "source": "src/Data-Certificate-X509-Ext.html#ExtKeyUsage",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Certificate X509 Ext",
          "module": "Data.Certificate.X509.Ext",
          "name": "ExtKeyUsage",
          "package": "certificate",
          "partial": "Ext Key Usage",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/certificate/docs/Data-Certificate-X509-Ext.html#t:ExtKeyUsage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ekey usage flag that is found in the key usage extension field.\n\u003c/p\u003e",
          "module": "Data.Certificate.X509.Ext",
          "name": "ExtKeyUsageFlag",
          "package": "certificate",
          "source": "src/Data-Certificate-X509-Ext.html#ExtKeyUsageFlag",
          "type": "data"
        },
        "index": {
          "description": "key usage flag that is found in the key usage extension field",
          "hierarchy": "Data Certificate X509 Ext",
          "module": "Data.Certificate.X509.Ext",
          "name": "ExtKeyUsageFlag",
          "package": "certificate",
          "partial": "Ext Key Usage Flag",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/certificate/docs/Data-Certificate-X509-Ext.html#t:ExtKeyUsageFlag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Certificate.X509.Ext",
          "name": "ExtSubjectAltName",
          "package": "certificate",
          "source": "src/Data-Certificate-X509-Ext.html#ExtSubjectAltName",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Certificate X509 Ext",
          "module": "Data.Certificate.X509.Ext",
          "name": "ExtSubjectAltName",
          "package": "certificate",
          "partial": "Ext Subject Alt Name",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/certificate/docs/Data-Certificate-X509-Ext.html#t:ExtSubjectAltName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Certificate.X509.Ext",
          "name": "ExtSubjectKeyId",
          "package": "certificate",
          "source": "src/Data-Certificate-X509-Ext.html#ExtSubjectKeyId",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Certificate X509 Ext",
          "module": "Data.Certificate.X509.Ext",
          "name": "ExtSubjectKeyId",
          "package": "certificate",
          "partial": "Ext Subject Key Id",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/certificate/docs/Data-Certificate-X509-Ext.html#t:ExtSubjectKeyId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Certificate.X509.Ext",
          "name": "Extension",
          "package": "certificate",
          "source": "src/Data-Certificate-X509-Ext.html#Extension",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data Certificate X509 Ext",
          "module": "Data.Certificate.X509.Ext",
          "name": "Extension",
          "package": "certificate",
          "partial": "Extension",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/certificate/docs/Data-Certificate-X509-Ext.html#t:Extension"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Certificate.X509.Ext",
          "name": "ExtensionRaw",
          "package": "certificate",
          "source": "src/Data-Certificate-X509-Ext.html#ExtensionRaw",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Certificate X509 Ext",
          "module": "Data.Certificate.X509.Ext",
          "name": "ExtensionRaw",
          "package": "certificate",
          "partial": "Extension Raw",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/certificate/docs/Data-Certificate-X509-Ext.html#t:ExtensionRaw"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Certificate.X509.Ext",
          "name": "ExtAuthorityKeyId",
          "package": "certificate",
          "signature": "ExtAuthorityKeyId ByteString",
          "source": "src/Data-Certificate-X509-Ext.html#ExtAuthorityKeyId",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Certificate X509 Ext",
          "module": "Data.Certificate.X509.Ext",
          "name": "ExtAuthorityKeyId",
          "package": "certificate",
          "partial": "Ext Authority Key Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/certificate/docs/Data-Certificate-X509-Ext.html#v:ExtAuthorityKeyId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Certificate.X509.Ext",
          "name": "ExtBasicConstraints",
          "package": "certificate",
          "signature": "ExtBasicConstraints Bool (Maybe Integer)",
          "source": "src/Data-Certificate-X509-Ext.html#ExtBasicConstraints",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Certificate X509 Ext",
          "module": "Data.Certificate.X509.Ext",
          "name": "ExtBasicConstraints",
          "package": "certificate",
          "partial": "Ext Basic Constraints",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/certificate/docs/Data-Certificate-X509-Ext.html#v:ExtBasicConstraints"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Certificate.X509.Ext",
          "name": "ExtKeyUsage",
          "package": "certificate",
          "signature": "ExtKeyUsage [ExtKeyUsageFlag]",
          "source": "src/Data-Certificate-X509-Ext.html#ExtKeyUsage",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Certificate X509 Ext",
          "module": "Data.Certificate.X509.Ext",
          "name": "ExtKeyUsage",
          "normalized": "ExtKeyUsage[ExtKeyUsageFlag]",
          "package": "certificate",
          "partial": "Ext Key Usage",
          "signature": "ExtKeyUsage[ExtKeyUsageFlag]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/certificate/docs/Data-Certificate-X509-Ext.html#v:ExtKeyUsage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Certificate.X509.Ext",
          "name": "ExtSubjectAltName",
          "package": "certificate",
          "signature": "ExtSubjectAltName [String]",
          "source": "src/Data-Certificate-X509-Ext.html#ExtSubjectAltName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Certificate X509 Ext",
          "module": "Data.Certificate.X509.Ext",
          "name": "ExtSubjectAltName",
          "normalized": "ExtSubjectAltName[String]",
          "package": "certificate",
          "partial": "Ext Subject Alt Name",
          "signature": "ExtSubjectAltName[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/certificate/docs/Data-Certificate-X509-Ext.html#v:ExtSubjectAltName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Certificate.X509.Ext",
          "name": "ExtSubjectKeyId",
          "package": "certificate",
          "signature": "ExtSubjectKeyId ByteString",
          "source": "src/Data-Certificate-X509-Ext.html#ExtSubjectKeyId",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Certificate X509 Ext",
          "module": "Data.Certificate.X509.Ext",
          "name": "ExtSubjectKeyId",
          "package": "certificate",
          "partial": "Ext Subject Key Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/certificate/docs/Data-Certificate-X509-Ext.html#v:ExtSubjectKeyId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Certificate.X509.Ext",
          "name": "KeyUsage_cRLSign",
          "package": "certificate",
          "signature": "KeyUsage_cRLSign",
          "source": "src/Data-Certificate-X509-Ext.html#ExtKeyUsageFlag",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Certificate X509 Ext",
          "module": "Data.Certificate.X509.Ext",
          "name": "KeyUsage_cRLSign",
          "package": "certificate",
          "partial": "Key Usage RLSign",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/certificate/docs/Data-Certificate-X509-Ext.html#v:KeyUsage_cRLSign"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Certificate.X509.Ext",
          "name": "KeyUsage_dataEncipherment",
          "package": "certificate",
          "signature": "KeyUsage_dataEncipherment",
          "source": "src/Data-Certificate-X509-Ext.html#ExtKeyUsageFlag",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Certificate X509 Ext",
          "module": "Data.Certificate.X509.Ext",
          "name": "KeyUsage_dataEncipherment",
          "package": "certificate",
          "partial": "Key Usage Encipherment",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/certificate/docs/Data-Certificate-X509-Ext.html#v:KeyUsage_dataEncipherment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Certificate.X509.Ext",
          "name": "KeyUsage_decipherOnly",
          "package": "certificate",
          "signature": "KeyUsage_decipherOnly",
          "source": "src/Data-Certificate-X509-Ext.html#ExtKeyUsageFlag",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Certificate X509 Ext",
          "module": "Data.Certificate.X509.Ext",
          "name": "KeyUsage_decipherOnly",
          "package": "certificate",
          "partial": "Key Usage Only",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/certificate/docs/Data-Certificate-X509-Ext.html#v:KeyUsage_decipherOnly"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Certificate.X509.Ext",
          "name": "KeyUsage_digitalSignature",
          "package": "certificate",
          "signature": "KeyUsage_digitalSignature",
          "source": "src/Data-Certificate-X509-Ext.html#ExtKeyUsageFlag",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Certificate X509 Ext",
          "module": "Data.Certificate.X509.Ext",
          "name": "KeyUsage_digitalSignature",
          "package": "certificate",
          "partial": "Key Usage Signature",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/certificate/docs/Data-Certificate-X509-Ext.html#v:KeyUsage_digitalSignature"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Certificate.X509.Ext",
          "name": "KeyUsage_encipherOnly",
          "package": "certificate",
          "signature": "KeyUsage_encipherOnly",
          "source": "src/Data-Certificate-X509-Ext.html#ExtKeyUsageFlag",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Certificate X509 Ext",
          "module": "Data.Certificate.X509.Ext",
          "name": "KeyUsage_encipherOnly",
          "package": "certificate",
          "partial": "Key Usage Only",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/certificate/docs/Data-Certificate-X509-Ext.html#v:KeyUsage_encipherOnly"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Certificate.X509.Ext",
          "name": "KeyUsage_keyAgreement",
          "package": "certificate",
          "signature": "KeyUsage_keyAgreement",
          "source": "src/Data-Certificate-X509-Ext.html#ExtKeyUsageFlag",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Certificate X509 Ext",
          "module": "Data.Certificate.X509.Ext",
          "name": "KeyUsage_keyAgreement",
          "package": "certificate",
          "partial": "Key Usage Agreement",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/certificate/docs/Data-Certificate-X509-Ext.html#v:KeyUsage_keyAgreement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Certificate.X509.Ext",
          "name": "KeyUsage_keyCertSign",
          "package": "certificate",
          "signature": "KeyUsage_keyCertSign",
          "source": "src/Data-Certificate-X509-Ext.html#ExtKeyUsageFlag",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Certificate X509 Ext",
          "module": "Data.Certificate.X509.Ext",
          "name": "KeyUsage_keyCertSign",
          "package": "certificate",
          "partial": "Key Usage Cert Sign",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/certificate/docs/Data-Certificate-X509-Ext.html#v:KeyUsage_keyCertSign"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Certificate.X509.Ext",
          "name": "KeyUsage_keyEncipherment",
          "package": "certificate",
          "signature": "KeyUsage_keyEncipherment",
          "source": "src/Data-Certificate-X509-Ext.html#ExtKeyUsageFlag",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Certificate X509 Ext",
          "module": "Data.Certificate.X509.Ext",
          "name": "KeyUsage_keyEncipherment",
          "package": "certificate",
          "partial": "Key Usage Encipherment",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/certificate/docs/Data-Certificate-X509-Ext.html#v:KeyUsage_keyEncipherment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Certificate.X509.Ext",
          "name": "KeyUsage_nonRepudiation",
          "package": "certificate",
          "signature": "KeyUsage_nonRepudiation",
          "source": "src/Data-Certificate-X509-Ext.html#ExtKeyUsageFlag",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Certificate X509 Ext",
          "module": "Data.Certificate.X509.Ext",
          "name": "KeyUsage_nonRepudiation",
          "package": "certificate",
          "partial": "Key Usage Repudiation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/certificate/docs/Data-Certificate-X509-Ext.html#v:KeyUsage_nonRepudiation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Certificate.X509.Ext",
          "name": "extDecode",
          "package": "certificate",
          "signature": "[ASN1] -\u003e Either String a",
          "source": "src/Data-Certificate-X509-Ext.html#extDecode",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Certificate X509 Ext",
          "module": "Data.Certificate.X509.Ext",
          "name": "extDecode",
          "normalized": "[ASN]-\u003eEither String a",
          "package": "certificate",
          "partial": "Decode",
          "signature": "[ASN]-\u003eEither String a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/certificate/docs/Data-Certificate-X509-Ext.html#v:extDecode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Certificate.X509.Ext",
          "name": "extEncode",
          "package": "certificate",
          "signature": "a -\u003e [ASN1]",
          "source": "src/Data-Certificate-X509-Ext.html#extEncode",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Certificate X509 Ext",
          "module": "Data.Certificate.X509.Ext",
          "name": "extEncode",
          "normalized": "a-\u003e[ASN]",
          "package": "certificate",
          "partial": "Encode",
          "signature": "a-\u003e[ASN]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/certificate/docs/Data-Certificate-X509-Ext.html#v:extEncode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Certificate.X509.Ext",
          "name": "extOID",
          "package": "certificate",
          "signature": "a -\u003e OID",
          "source": "src/Data-Certificate-X509-Ext.html#extOID",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Certificate X509 Ext",
          "module": "Data.Certificate.X509.Ext",
          "name": "extOID",
          "normalized": "a-\u003eOID",
          "package": "certificate",
          "partial": "OID",
          "signature": "a-\u003eOID",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/certificate/docs/Data-Certificate-X509-Ext.html#v:extOID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Certificate.X509.Ext",
          "name": "extensionGet",
          "package": "certificate",
          "signature": "[ExtensionRaw] -\u003e Maybe a",
          "source": "src/Data-Certificate-X509-Ext.html#extensionGet",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Certificate X509 Ext",
          "module": "Data.Certificate.X509.Ext",
          "name": "extensionGet",
          "normalized": "[ExtensionRaw]-\u003eMaybe a",
          "package": "certificate",
          "partial": "Get",
          "signature": "[ExtensionRaw]-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/certificate/docs/Data-Certificate-X509-Ext.html#v:extensionGet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eRead/Write X509 certificate\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Certificate.X509",
          "name": "X509",
          "package": "certificate",
          "source": "src/Data-Certificate-X509.html",
          "type": "module"
        },
        "index": {
          "description": "Read Write X509 certificate",
          "hierarchy": "Data Certificate X509",
          "module": "Data.Certificate.X509",
          "name": "X509",
          "package": "certificate",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/certificate/docs/Data-Certificate-X509.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Certificate.X509",
          "name": "ASN1String",
          "package": "certificate",
          "source": "src/Data-Certificate-X509-Cert.html#ASN1String",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Certificate X509",
          "module": "Data.Certificate.X509",
          "name": "ASN1String",
          "package": "certificate",
          "partial": "ASN String",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/certificate/docs/Data-Certificate-X509.html#t:ASN1String"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Certificate.X509",
          "name": "ASN1StringType",
          "package": "certificate",
          "source": "src/Data-Certificate-X509-Cert.html#ASN1StringType",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Certificate X509",
          "module": "Data.Certificate.X509",
          "name": "ASN1StringType",
          "package": "certificate",
          "partial": "ASN String Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/certificate/docs/Data-Certificate-X509.html#t:ASN1StringType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Certificate.X509",
          "name": "Certificate",
          "package": "certificate",
          "source": "src/Data-Certificate-X509-Cert.html#Certificate",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Certificate X509",
          "module": "Data.Certificate.X509",
          "name": "Certificate",
          "package": "certificate",
          "partial": "Certificate",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/certificate/docs/Data-Certificate-X509.html#t:Certificate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Certificate.X509",
          "name": "DistinguishedName",
          "package": "certificate",
          "source": "src/Data-Certificate-X509-Cert.html#DistinguishedName",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Data Certificate X509",
          "module": "Data.Certificate.X509",
          "name": "DistinguishedName",
          "package": "certificate",
          "partial": "Distinguished Name",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/certificate/docs/Data-Certificate-X509.html#t:DistinguishedName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Certificate.X509",
          "name": "HashALG",
          "package": "certificate",
          "source": "src/Data-Certificate-X509-Cert.html#HashALG",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Certificate X509",
          "module": "Data.Certificate.X509",
          "name": "HashALG",
          "package": "certificate",
          "partial": "Hash ALG",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/certificate/docs/Data-Certificate-X509.html#t:HashALG"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Certificate.X509",
          "name": "OID",
          "package": "certificate",
          "source": "src/Data-Certificate-X509-Internal.html#OID",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Certificate X509",
          "module": "Data.Certificate.X509",
          "name": "OID",
          "package": "certificate",
          "partial": "OID",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/certificate/docs/Data-Certificate-X509.html#t:OID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Certificate.X509",
          "name": "PubKey",
          "package": "certificate",
          "source": "src/Data-Certificate-X509-Cert.html#PubKey",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Certificate X509",
          "module": "Data.Certificate.X509",
          "name": "PubKey",
          "package": "certificate",
          "partial": "Pub Key",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/certificate/docs/Data-Certificate-X509.html#t:PubKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Certificate.X509",
          "name": "PubKeyALG",
          "package": "certificate",
          "source": "src/Data-Certificate-X509-Cert.html#PubKeyALG",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Certificate X509",
          "module": "Data.Certificate.X509",
          "name": "PubKeyALG",
          "package": "certificate",
          "partial": "Pub Key ALG",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/certificate/docs/Data-Certificate-X509.html#t:PubKeyALG"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Certificate.X509",
          "name": "SignatureALG",
          "package": "certificate",
          "source": "src/Data-Certificate-X509-Cert.html#SignatureALG",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Certificate X509",
          "module": "Data.Certificate.X509",
          "name": "SignatureALG",
          "package": "certificate",
          "partial": "Signature ALG",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/certificate/docs/Data-Certificate-X509.html#t:SignatureALG"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Certificate.X509",
          "name": "X509",
          "package": "certificate",
          "source": "src/Data-Certificate-X509.html#X509",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Certificate X509",
          "module": "Data.Certificate.X509",
          "name": "X509",
          "package": "certificate",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/certificate/docs/Data-Certificate-X509.html#t:X509"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Certificate.X509",
          "name": "X509",
          "package": "certificate",
          "signature": "X509",
          "source": "src/Data-Certificate-X509.html#X509",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Certificate X509",
          "module": "Data.Certificate.X509",
          "name": "X509",
          "package": "certificate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/certificate/docs/Data-Certificate-X509.html#v:X509"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003edecode an X509 from a bytestring\n - the structure is the following:\n -   Certificate\n -   Certificate Signature Algorithm\n -   Certificate Signature\n\u003c/p\u003e",
          "module": "Data.Certificate.X509",
          "name": "decodeCertificate",
          "package": "certificate",
          "signature": "ByteString -\u003e Either String X509",
          "source": "src/Data-Certificate-X509.html#decodeCertificate",
          "type": "function"
        },
        "index": {
          "description": "decode an X509 from bytestring the structure is the following Certificate Certificate Signature Algorithm Certificate Signature",
          "hierarchy": "Data Certificate X509",
          "module": "Data.Certificate.X509",
          "name": "decodeCertificate",
          "normalized": "ByteString-\u003eEither String X",
          "package": "certificate",
          "partial": "Certificate",
          "signature": "ByteString-\u003eEither String X",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/certificate/docs/Data-Certificate-X509.html#v:decodeCertificate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Certificate.X509",
          "name": "decodeDN",
          "package": "certificate",
          "signature": "ByteString -\u003e Either String DistinguishedName",
          "source": "src/Data-Certificate-X509.html#decodeDN",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Certificate X509",
          "module": "Data.Certificate.X509",
          "name": "decodeDN",
          "normalized": "ByteString-\u003eEither String DistinguishedName",
          "package": "certificate",
          "partial": "DN",
          "signature": "ByteString-\u003eEither String DistinguishedName",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/certificate/docs/Data-Certificate-X509.html#v:decodeDN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eencode a X509 certificate to a bytestring \n\u003c/p\u003e",
          "module": "Data.Certificate.X509",
          "name": "encodeCertificate",
          "package": "certificate",
          "signature": "X509 -\u003e ByteString",
          "source": "src/Data-Certificate-X509.html#encodeCertificate",
          "type": "function"
        },
        "index": {
          "description": "encode X509 certificate to bytestring",
          "hierarchy": "Data Certificate X509",
          "module": "Data.Certificate.X509",
          "name": "encodeCertificate",
          "normalized": "X-\u003eByteString",
          "package": "certificate",
          "partial": "Certificate",
          "signature": "X-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/certificate/docs/Data-Certificate-X509.html#v:encodeCertificate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Certificate.X509",
          "name": "encodeDN",
          "package": "certificate",
          "signature": "DistinguishedName -\u003e ByteString",
          "source": "src/Data-Certificate-X509.html#encodeDN",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Certificate X509",
          "module": "Data.Certificate.X509",
          "name": "encodeDN",
          "normalized": "DistinguishedName-\u003eByteString",
          "package": "certificate",
          "partial": "DN",
          "signature": "DistinguishedName-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/certificate/docs/Data-Certificate-X509.html#v:encodeDN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eget signing data related to a X509 message,\n - which is either the cached data or the encoded certificate \n\u003c/p\u003e",
          "module": "Data.Certificate.X509",
          "name": "getSigningData",
          "package": "certificate",
          "signature": "X509 -\u003e ByteString",
          "source": "src/Data-Certificate-X509.html#getSigningData",
          "type": "function"
        },
        "index": {
          "description": "get signing data related to X509 message which is either the cached data or the encoded certificate",
          "hierarchy": "Data Certificate X509",
          "module": "Data.Certificate.X509",
          "name": "getSigningData",
          "normalized": "X-\u003eByteString",
          "package": "certificate",
          "partial": "Signing Data",
          "signature": "X-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/certificate/docs/Data-Certificate-X509.html#v:getSigningData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake an openssl style hash of distinguished name\n\u003c/p\u003e",
          "module": "Data.Certificate.X509",
          "name": "hashDN",
          "package": "certificate",
          "signature": "DistinguishedName -\u003e ByteString",
          "source": "src/Data-Certificate-X509.html#hashDN",
          "type": "function"
        },
        "index": {
          "description": "Make an openssl style hash of distinguished name",
          "hierarchy": "Data Certificate X509",
          "module": "Data.Certificate.X509",
          "name": "hashDN",
          "normalized": "DistinguishedName-\u003eByteString",
          "package": "certificate",
          "partial": "DN",
          "signature": "DistinguishedName-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/certificate/docs/Data-Certificate-X509.html#v:hashDN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate an openssl style old hash of distinguished name\n\u003c/p\u003e",
          "module": "Data.Certificate.X509",
          "name": "hashDN_old",
          "package": "certificate",
          "signature": "DistinguishedName -\u003e ByteString",
          "source": "src/Data-Certificate-X509.html#hashDN_old",
          "type": "function"
        },
        "index": {
          "description": "Create an openssl style old hash of distinguished name",
          "hierarchy": "Data Certificate X509",
          "module": "Data.Certificate.X509",
          "name": "hashDN_old",
          "normalized": "DistinguishedName-\u003eByteString",
          "package": "certificate",
          "partial": "DN",
          "signature": "DistinguishedName-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/certificate/docs/Data-Certificate-X509.html#v:hashDN_old"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ea cache of the raw representation of the whole x509.\n\u003c/p\u003e",
          "module": "Data.Certificate.X509",
          "name": "x509CachedData",
          "package": "certificate",
          "signature": "Maybe ByteString",
          "source": "src/Data-Certificate-X509.html#X509",
          "type": "function"
        },
        "index": {
          "description": "cache of the raw representation of the whole x509",
          "hierarchy": "Data Certificate X509",
          "module": "Data.Certificate.X509",
          "name": "x509CachedData",
          "package": "certificate",
          "partial": "Cached Data",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/certificate/docs/Data-Certificate-X509.html#v:x509CachedData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ea cache of the raw representation of the x509 part for signing\n since encoding+decoding might not result in the same data being signed.\n\u003c/p\u003e",
          "module": "Data.Certificate.X509",
          "name": "x509CachedSigningData",
          "package": "certificate",
          "signature": "Maybe ByteString",
          "source": "src/Data-Certificate-X509.html#X509",
          "type": "function"
        },
        "index": {
          "description": "cache of the raw representation of the x509 part for signing since encoding decoding might not result in the same data being signed",
          "hierarchy": "Data Certificate X509",
          "module": "Data.Certificate.X509",
          "name": "x509CachedSigningData",
          "package": "certificate",
          "partial": "Cached Signing Data",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/certificate/docs/Data-Certificate-X509.html#v:x509CachedSigningData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe certificate part of a X509 structure\n\u003c/p\u003e",
          "module": "Data.Certificate.X509",
          "name": "x509Cert",
          "package": "certificate",
          "signature": "Certificate",
          "source": "src/Data-Certificate-X509.html#X509",
          "type": "function"
        },
        "index": {
          "description": "the certificate part of X509 structure",
          "hierarchy": "Data Certificate X509",
          "module": "Data.Certificate.X509",
          "name": "x509Cert",
          "package": "certificate",
          "partial": "Cert",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/certificate/docs/Data-Certificate-X509.html#v:x509Cert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe signature.\n\u003c/p\u003e",
          "module": "Data.Certificate.X509",
          "name": "x509Signature",
          "package": "certificate",
          "signature": "[Word8]",
          "source": "src/Data-Certificate-X509.html#X509",
          "type": "function"
        },
        "index": {
          "description": "the signature",
          "hierarchy": "Data Certificate X509",
          "module": "Data.Certificate.X509",
          "name": "x509Signature",
          "normalized": "[Word]",
          "package": "certificate",
          "partial": "Signature",
          "signature": "[Word]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/certificate/docs/Data-Certificate-X509.html#v:x509Signature"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe signature algorithm used.\n\u003c/p\u003e",
          "module": "Data.Certificate.X509",
          "name": "x509SignatureALG",
          "package": "certificate",
          "signature": "SignatureALG",
          "source": "src/Data-Certificate-X509.html#X509",
          "type": "function"
        },
        "index": {
          "description": "the signature algorithm used",
          "hierarchy": "Data Certificate X509",
          "module": "Data.Certificate.X509",
          "name": "x509SignatureALG",
          "package": "certificate",
          "partial": "Signature ALG",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/certificate/docs/Data-Certificate-X509.html#v:x509SignatureALG"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CertificateStore",
          "name": "CertificateStore",
          "package": "certificate",
          "source": "src/Data-CertificateStore.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data CertificateStore",
          "module": "Data.CertificateStore",
          "name": "CertificateStore",
          "package": "certificate",
          "partial": "Certificate Store",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/certificate/docs/Data-CertificateStore.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA Collection of certificate or store of certificates.\n\u003c/p\u003e",
          "module": "Data.CertificateStore",
          "name": "CertificateStore",
          "package": "certificate",
          "source": "src/Data-CertificateStore.html#CertificateStore",
          "type": "data"
        },
        "index": {
          "description": "Collection of certificate or store of certificates",
          "hierarchy": "Data CertificateStore",
          "module": "Data.CertificateStore",
          "name": "CertificateStore",
          "package": "certificate",
          "partial": "Certificate Store",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/certificate/docs/Data-CertificateStore.html#t:CertificateStore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind a certificate using the subject distinguished name\n\u003c/p\u003e",
          "module": "Data.CertificateStore",
          "name": "findCertificate",
          "package": "certificate",
          "signature": "DistinguishedName -\u003e CertificateStore -\u003e Maybe X509",
          "source": "src/Data-CertificateStore.html#findCertificate",
          "type": "function"
        },
        "index": {
          "description": "Find certificate using the subject distinguished name",
          "hierarchy": "Data CertificateStore",
          "module": "Data.CertificateStore",
          "name": "findCertificate",
          "normalized": "DistinguishedName-\u003eCertificateStore-\u003eMaybe X",
          "package": "certificate",
          "partial": "Certificate",
          "signature": "DistinguishedName-\u003eCertificateStore-\u003eMaybe X",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/certificate/docs/Data-CertificateStore.html#v:findCertificate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eList all certificates in a store\n\u003c/p\u003e",
          "module": "Data.CertificateStore",
          "name": "listCertificates",
          "package": "certificate",
          "signature": "CertificateStore -\u003e [X509]",
          "source": "src/Data-CertificateStore.html#listCertificates",
          "type": "function"
        },
        "index": {
          "description": "List all certificates in store",
          "hierarchy": "Data CertificateStore",
          "module": "Data.CertificateStore",
          "name": "listCertificates",
          "normalized": "CertificateStore-\u003e[X]",
          "package": "certificate",
          "partial": "Certificates",
          "signature": "CertificateStore-\u003e[X]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/certificate/docs/Data-CertificateStore.html#v:listCertificates"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a certificate store out of a list of X509 certificate\n\u003c/p\u003e",
          "module": "Data.CertificateStore",
          "name": "makeCertificateStore",
          "package": "certificate",
          "signature": "[X509] -\u003e CertificateStore",
          "source": "src/Data-CertificateStore.html#makeCertificateStore",
          "type": "function"
        },
        "index": {
          "description": "Create certificate store out of list of X509 certificate",
          "hierarchy": "Data CertificateStore",
          "module": "Data.CertificateStore",
          "name": "makeCertificateStore",
          "normalized": "[X]-\u003eCertificateStore",
          "package": "certificate",
          "partial": "Certificate Store",
          "signature": "[X]-\u003eCertificateStore",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/certificate/docs/Data-CertificateStore.html#v:makeCertificateStore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Certificate.X509.MacOS",
          "name": "MacOS",
          "package": "certificate",
          "source": "src/System-Certificate-X509-MacOS.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "System Certificate X509 MacOS",
          "module": "System.Certificate.X509.MacOS",
          "name": "MacOS",
          "package": "certificate",
          "partial": "Mac OS",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/certificate/docs/System-Certificate-X509-MacOS.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Certificate.X509.MacOS",
          "name": "getSystemCertificateStore",
          "package": "certificate",
          "signature": "IO CertificateStore",
          "source": "src/System-Certificate-X509-MacOS.html#getSystemCertificateStore",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Certificate X509 MacOS",
          "module": "System.Certificate.X509.MacOS",
          "name": "getSystemCertificateStore",
          "package": "certificate",
          "partial": "System Certificate Store",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/certificate/docs/System-Certificate-X509-MacOS.html#v:getSystemCertificateStore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ethis module is portable to unix system where there is usually\n a \u003cem\u003eetc\u003c/em\u003essl/certs with system X509 certificates.\n\u003c/p\u003e\u003cp\u003ethe path can be dynamically override using the environment variable\n defined by envPathOverride in the module, which by\n default is SYSTEM_CERTIFICATE_PATH\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.Certificate.X509.Unix",
          "name": "Unix",
          "package": "certificate",
          "source": "src/System-Certificate-X509-Unix.html",
          "type": "module"
        },
        "index": {
          "description": "this module is portable to unix system where there is usually etc ssl certs with system X509 certificates the path can be dynamically override using the environment variable defined by envPathOverride in the module which by default is SYSTEM CERTIFICATE PATH",
          "hierarchy": "System Certificate X509 Unix",
          "module": "System.Certificate.X509.Unix",
          "name": "Unix",
          "package": "certificate",
          "partial": "Unix",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/certificate/docs/System-Certificate-X509-Unix.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"System.Certificate.X509.Unix\",\"System.Certificate.X509\"]",
          "name": "getSystemCertificateStore",
          "package": "certificate",
          "signature": "IO CertificateStore",
          "source": "src/System-Certificate-X509-Unix.html#getSystemCertificateStore",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/certificate/docs/System-Certificate-X509-Unix.html#v:getSystemCertificateStore\",\"http://hackage.haskell.org/package/certificate/docs/System-Certificate-X509.html#v:getSystemCertificateStore\"]"
        },
        "index": {
          "hierarchy": "System Certificate X509 Unix",
          "module": "System.Certificate.X509.Unix",
          "name": "getSystemCertificateStore",
          "package": "certificate",
          "partial": "System Certificate Store",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/certificate/docs/System-Certificate-X509-Unix.html#v:getSystemCertificateStore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Certificate.X509",
          "name": "X509",
          "package": "certificate",
          "source": "src/System-Certificate-X509.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "System Certificate X509",
          "module": "System.Certificate.X509",
          "name": "X509",
          "package": "certificate",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/certificate/docs/System-Certificate-X509.html#"
      }
    }
  ]
]