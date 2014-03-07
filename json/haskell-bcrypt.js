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
        "word": "haskell-bcrypt"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Digest.BCrypt",
          "name": "BCrypt",
          "package": "haskell-bcrypt",
          "source": "src/Data-Digest-BCrypt.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Digest BCrypt",
          "module": "Data.Digest.BCrypt",
          "name": "BCrypt",
          "package": "haskell-bcrypt",
          "partial": "BCrypt",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/haskell-bcrypt/docs/Data-Digest-BCrypt.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBCrypt salt for passing to bcrypt.\n\u003c/p\u003e",
          "module": "Data.Digest.BCrypt",
          "name": "BSalt",
          "package": "haskell-bcrypt",
          "source": "src/Data-Digest-BCrypt.html#BSalt",
          "type": "data"
        },
        "index": {
          "description": "BCrypt salt for passing to bcrypt",
          "hierarchy": "Data Digest BCrypt",
          "module": "Data.Digest.BCrypt",
          "name": "BSalt",
          "package": "haskell-bcrypt",
          "partial": "BSalt",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskell-bcrypt/docs/Data-Digest-BCrypt.html#t:BSalt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHash a password based on a BSalt with a given cost\n\u003c/p\u003e",
          "module": "Data.Digest.BCrypt",
          "name": "bcrypt",
          "package": "haskell-bcrypt",
          "signature": "ByteString-\u003e BSalt-\u003e ByteString",
          "type": "function"
        },
        "index": {
          "description": "Hash password based on BSalt with given cost",
          "hierarchy": "Data Digest BCrypt",
          "module": "Data.Digest.BCrypt",
          "name": "bcrypt",
          "normalized": "ByteString-\u003eBSalt-\u003eByteString",
          "package": "haskell-bcrypt",
          "signature": "ByteString-\u003eBSalt-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-bcrypt/docs/Data-Digest-BCrypt.html#v:bcrypt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a cost from 4-32 and a random seed of 16 bytes generate a salt.\n Seed should be 16 bytes from a secure random generator\n\u003c/p\u003e",
          "module": "Data.Digest.BCrypt",
          "name": "genSalt",
          "package": "haskell-bcrypt",
          "signature": "Integer-\u003e ByteString-\u003e Maybe BSalt",
          "type": "function"
        },
        "index": {
          "description": "Given cost from and random seed of bytes generate salt Seed should be bytes from secure random generator",
          "hierarchy": "Data Digest BCrypt",
          "module": "Data.Digest.BCrypt",
          "name": "genSalt",
          "normalized": "Integer-\u003eByteString-\u003eMaybe BSalt",
          "package": "haskell-bcrypt",
          "partial": "Salt",
          "signature": "Integer-\u003eByteString-\u003eMaybe BSalt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-bcrypt/docs/Data-Digest-BCrypt.html#v:genSalt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a bytestring, construct a BSalt type, with some minimal checking\n\u003c/p\u003e",
          "module": "Data.Digest.BCrypt",
          "name": "packBSalt",
          "package": "haskell-bcrypt",
          "signature": "ByteString-\u003e Maybe BSalt",
          "type": "function"
        },
        "index": {
          "description": "Given bytestring construct BSalt type with some minimal checking",
          "hierarchy": "Data Digest BCrypt",
          "module": "Data.Digest.BCrypt",
          "name": "packBSalt",
          "normalized": "ByteString-\u003eMaybe BSalt",
          "package": "haskell-bcrypt",
          "partial": "BSalt",
          "signature": "ByteString-\u003eMaybe BSalt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-bcrypt/docs/Data-Digest-BCrypt.html#v:packBSalt"
      }
    }
  ]
]