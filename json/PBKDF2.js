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
        "word": "PBKDF2"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eImplementation of Password Based Key Derivation Function, from RSA labs. \n\u003c/p\u003e\u003cp\u003eSee PKCS # 5 / RFC 2898 from rsa labs: and haskell cafe discussion on why password hashing is a good idea for web apps and a suggestion that this be implemented: \n\u003c/p\u003e\u003cpre\u003e http://www.ietf.org/rfc/rfc2898.txt \n http://groups.google.com/group/fa.haskell/browse_thread/thread/66c7aeeb6e47764a/b15d9d74d68c002c\n\u003c/pre\u003e\u003cpre\u003e hashedpass = pbkdf2 ( Password . toOctets $ \"password\" ) ( Salt . toOctets $ \"salt\" )\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Crypto.PBKDF2",
          "name": "PBKDF2",
          "package": "PBKDF2",
          "source": "src/Crypto-PBKDF2.html",
          "type": "module"
        },
        "index": {
          "description": "Implementation of Password Based Key Derivation Function from RSA labs See PKCS RFC from rsa labs and haskell cafe discussion on why password hashing is good idea for web apps and suggestion that this be implemented http www.ietf.org rfc rfc2898.txt http groups.google.com group fa.haskell browse thread thread c7aeeb6e47764a b15d9d74d68c002c hashedpass pbkdf2 Password toOctets password Salt toOctets salt",
          "hierarchy": "Crypto PBKDF2",
          "module": "Crypto.PBKDF2",
          "name": "PBKDF2",
          "package": "PBKDF2",
          "partial": "PBKDF",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/PBKDF2/docs/Crypto-PBKDF2.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Crypto.PBKDF2",
          "name": "HashedPass",
          "package": "PBKDF2",
          "source": "src/Crypto-PBKDF2.html#HashedPass",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Crypto PBKDF2",
          "module": "Crypto.PBKDF2",
          "name": "HashedPass",
          "package": "PBKDF2",
          "partial": "Hashed Pass",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/PBKDF2/docs/Crypto-PBKDF2.html#t:HashedPass"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Crypto.PBKDF2",
          "name": "Password",
          "package": "PBKDF2",
          "source": "src/Crypto-PBKDF2.html#Password",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Crypto PBKDF2",
          "module": "Crypto.PBKDF2",
          "name": "Password",
          "package": "PBKDF2",
          "partial": "Password",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/PBKDF2/docs/Crypto-PBKDF2.html#t:Password"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Crypto.PBKDF2",
          "name": "Salt",
          "package": "PBKDF2",
          "source": "src/Crypto-PBKDF2.html#Salt",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Crypto PBKDF2",
          "module": "Crypto.PBKDF2",
          "name": "Salt",
          "package": "PBKDF2",
          "partial": "Salt",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/PBKDF2/docs/Crypto-PBKDF2.html#t:Salt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Crypto.PBKDF2",
          "name": "HashedPass",
          "package": "PBKDF2",
          "signature": "HashedPass [Word8]",
          "source": "src/Crypto-PBKDF2.html#HashedPass",
          "type": "function"
        },
        "index": {
          "hierarchy": "Crypto PBKDF2",
          "module": "Crypto.PBKDF2",
          "name": "HashedPass",
          "normalized": "HashedPass[Word]",
          "package": "PBKDF2",
          "partial": "Hashed Pass",
          "signature": "HashedPass[Word]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PBKDF2/docs/Crypto-PBKDF2.html#v:HashedPass"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Crypto.PBKDF2",
          "name": "Password",
          "package": "PBKDF2",
          "signature": "Password [Word8]",
          "source": "src/Crypto-PBKDF2.html#Password",
          "type": "function"
        },
        "index": {
          "hierarchy": "Crypto PBKDF2",
          "module": "Crypto.PBKDF2",
          "name": "Password",
          "normalized": "Password[Word]",
          "package": "PBKDF2",
          "partial": "Password",
          "signature": "Password[Word]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PBKDF2/docs/Crypto-PBKDF2.html#v:Password"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Crypto.PBKDF2",
          "name": "Salt",
          "package": "PBKDF2",
          "signature": "Salt [Word8]",
          "source": "src/Crypto-PBKDF2.html#Salt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Crypto PBKDF2",
          "module": "Crypto.PBKDF2",
          "name": "Salt",
          "normalized": "Salt[Word]",
          "package": "PBKDF2",
          "partial": "Salt",
          "signature": "Salt[Word]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PBKDF2/docs/Crypto-PBKDF2.html#v:Salt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Crypto.PBKDF2",
          "name": "fromOctets",
          "package": "PBKDF2",
          "signature": "[Word8] -\u003e a",
          "source": "src/Crypto-PBKDF2.html#fromOctets",
          "type": "function"
        },
        "index": {
          "hierarchy": "Crypto PBKDF2",
          "module": "Crypto.PBKDF2",
          "name": "fromOctets",
          "normalized": "[Word]-\u003ea",
          "package": "PBKDF2",
          "partial": "Octets",
          "signature": "[Word]-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PBKDF2/docs/Crypto-PBKDF2.html#v:fromOctets"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA reasonable default for rsa pbkdf2. \n\u003c/p\u003e\u003cpre\u003e pbkdf2 = pbkdf2' (prfSHA512,64) 5000 64\n\u003c/pre\u003e\u003cp\u003eSHA512 outputs 64 bytes. At least 1000 iters is suggested by PKCS#5 (rsa link above). I chose 5000 because this takes my computer a little over a second to compute a simple key derivation (see t test function in source)\n\u003c/p\u003e\u003cp\u003eDklen of 64 seemed reasonable to me: if this is being stored in a database, doesn't take too much space.\n\u003c/p\u003e\u003cp\u003eComputational barriers can be raised by increasing number of iters\n\u003c/p\u003e",
          "module": "Crypto.PBKDF2",
          "name": "pbkdf2",
          "package": "PBKDF2",
          "signature": "Password -\u003e Salt -\u003e HashedPass",
          "source": "src/Crypto-PBKDF2.html#pbkdf2",
          "type": "function"
        },
        "index": {
          "description": "reasonable default for rsa pbkdf2 pbkdf2 pbkdf2 prfSHA512 SHA512 outputs bytes At least iters is suggested by PKCS rsa link above chose because this takes my computer little over second to compute simple key derivation see test function in source Dklen of seemed reasonable to me if this is being stored in database doesn take too much space Computational barriers can be raised by increasing number of iters",
          "hierarchy": "Crypto PBKDF2",
          "module": "Crypto.PBKDF2",
          "name": "pbkdf2",
          "normalized": "Password-\u003eSalt-\u003eHashedPass",
          "package": "PBKDF2",
          "signature": "Password-\u003eSalt-\u003eHashedPass",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PBKDF2/docs/Crypto-PBKDF2.html#v:pbkdf2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePassword Based Key Derivation Function, from RSA labs.\n\u003c/p\u003e\u003cpre\u003e pbkdf2' (prf,hlen) cIters dklen (Password pass) (Salt salt) \n\u003c/pre\u003e\u003cp\u003eprf: pseudo random function\n\u003c/p\u003e\u003cp\u003ehlen: length of prf output\n\u003c/p\u003e\u003cp\u003ecIters: Number of iterations of prf\n\u003c/p\u003e\u003cp\u003edklen: Length of the derived key (hashed password)\n\u003c/p\u003e",
          "module": "Crypto.PBKDF2",
          "name": "pbkdf2'",
          "package": "PBKDF2",
          "signature": "([Word8] -\u003e [Word8] -\u003e [Word8], Integer) -\u003e Integer -\u003e Integer -\u003e Password -\u003e Salt -\u003e HashedPass",
          "source": "src/Crypto-PBKDF2.html#pbkdf2%27",
          "type": "function"
        },
        "index": {
          "description": "Password Based Key Derivation Function from RSA labs pbkdf2 prf hlen cIters dklen Password pass Salt salt prf pseudo random function hlen length of prf output cIters Number of iterations of prf dklen Length of the derived key hashed password",
          "hierarchy": "Crypto PBKDF2",
          "module": "Crypto.PBKDF2",
          "name": "pbkdf2'",
          "normalized": "([Word]-\u003e[Word]-\u003e[Word],Integer)-\u003eInteger-\u003eInteger-\u003ePassword-\u003eSalt-\u003eHashedPass",
          "package": "PBKDF2",
          "signature": "([Word]-\u003e[Word]-\u003e[Word],Integer)-\u003eInteger-\u003eInteger-\u003ePassword-\u003eSalt-\u003eHashedPass",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PBKDF2/docs/Crypto-PBKDF2.html#v:pbkdf2-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Crypto.PBKDF2",
          "name": "toOctets",
          "package": "PBKDF2",
          "signature": "a -\u003e [Word8]",
          "source": "src/Crypto-PBKDF2.html#toOctets",
          "type": "function"
        },
        "index": {
          "hierarchy": "Crypto PBKDF2",
          "module": "Crypto.PBKDF2",
          "name": "toOctets",
          "normalized": "a-\u003e[Word]",
          "package": "PBKDF2",
          "partial": "Octets",
          "signature": "a-\u003e[Word]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PBKDF2/docs/Crypto-PBKDF2.html#v:toOctets"
      }
    }
  ]
]