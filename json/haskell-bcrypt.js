[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskell-bcrypt/docs/Data-Digest-BCrypt.html#",
      "description": {
        "fct-module": "Data.Digest.BCrypt",
        "fct-package": "haskell-bcrypt",
        "fct-signature": "module",
        "fct-source": "src/Data-Digest-BCrypt.html",
        "fct-type": "module",
        "title": "BCrypt"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Digest BCrypt",
        "module": "Data.Digest.BCrypt",
        "name": "BCrypt",
        "normalized": "",
        "package": "haskell-bcrypt",
        "partial": "BCrypt",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskell-bcrypt/docs/Data-Digest-BCrypt.html#t:BSalt",
      "description": {
        "fct-descr": "\u003cp\u003eBCrypt salt for passing to bcrypt.\n\u003c/p\u003e",
        "fct-module": "Data.Digest.BCrypt",
        "fct-package": "haskell-bcrypt",
        "fct-signature": "data",
        "fct-source": "src/Data-Digest-BCrypt.html#BSalt",
        "fct-type": "data",
        "title": "BSalt"
      },
      "index": {
        "description": "BCrypt salt for passing to bcrypt",
        "hierarchy": "Data Digest BCrypt",
        "module": "Data.Digest.BCrypt",
        "name": "BSalt",
        "normalized": "",
        "package": "haskell-bcrypt",
        "partial": "BSalt",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskell-bcrypt/docs/Data-Digest-BCrypt.html#v:bcrypt",
      "description": {
        "fct-descr": "\u003cp\u003eHash a password based on a BSalt with a given cost\n\u003c/p\u003e",
        "fct-module": "Data.Digest.BCrypt",
        "fct-package": "haskell-bcrypt",
        "fct-signature": "ByteString-\u003e BSalt-\u003e ByteString",
        "fct-type": "function",
        "title": "bcrypt"
      },
      "index": {
        "description": "Hash password based on BSalt with given cost",
        "hierarchy": "Data Digest BCrypt",
        "module": "Data.Digest.BCrypt",
        "name": "bcrypt",
        "normalized": "ByteString-\u003eBSalt-\u003eByteString",
        "package": "haskell-bcrypt",
        "partial": "",
        "signature": "ByteString-\u003eBSalt-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskell-bcrypt/docs/Data-Digest-BCrypt.html#v:genSalt",
      "description": {
        "fct-descr": "\u003cp\u003eGiven a cost from 4-32 and a random seed of 16 bytes generate a salt.\n Seed should be 16 bytes from a secure random generator\n\u003c/p\u003e",
        "fct-module": "Data.Digest.BCrypt",
        "fct-package": "haskell-bcrypt",
        "fct-signature": "Integer-\u003e ByteString-\u003e Maybe BSalt",
        "fct-type": "function",
        "title": "genSalt"
      },
      "index": {
        "description": "Given cost from and random seed of bytes generate salt Seed should be bytes from secure random generator",
        "hierarchy": "Data Digest BCrypt",
        "module": "Data.Digest.BCrypt",
        "name": "genSalt",
        "normalized": "Integer-\u003eByteString-\u003eMaybe BSalt",
        "package": "haskell-bcrypt",
        "partial": "Salt",
        "signature": "Integer-\u003eByteString-\u003eMaybe BSalt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskell-bcrypt/docs/Data-Digest-BCrypt.html#v:packBSalt",
      "description": {
        "fct-descr": "\u003cp\u003eGiven a bytestring, construct a BSalt type, with some minimal checking\n\u003c/p\u003e",
        "fct-module": "Data.Digest.BCrypt",
        "fct-package": "haskell-bcrypt",
        "fct-signature": "ByteString-\u003e Maybe BSalt",
        "fct-type": "function",
        "title": "packBSalt"
      },
      "index": {
        "description": "Given bytestring construct BSalt type with some minimal checking",
        "hierarchy": "Data Digest BCrypt",
        "module": "Data.Digest.BCrypt",
        "name": "packBSalt",
        "normalized": "ByteString-\u003eMaybe BSalt",
        "package": "haskell-bcrypt",
        "partial": "BSalt",
        "signature": "ByteString-\u003eMaybe BSalt"
      }
    }
  }
]