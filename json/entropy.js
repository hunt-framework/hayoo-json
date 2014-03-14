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
        "word": "entropy"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eObtain entropy from system sources.\n Currently, windows and *nix systems with a \u003ccode\u003e\u003cem\u003edev\u003c/em\u003eurandom\u003c/code\u003e are supported.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.Entropy",
          "name": "Entropy",
          "package": "entropy",
          "source": "src/System-Entropy.html",
          "type": "module"
        },
        "index": {
          "description": "Obtain entropy from system sources Currently windows and nix systems with dev urandom are supported",
          "hierarchy": "System Entropy",
          "module": "System.Entropy",
          "name": "Entropy",
          "package": "entropy",
          "partial": "Entropy",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/entropy/docs/System-Entropy.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHandle for manual resource mangement\n\u003c/p\u003e",
          "module": "System.Entropy",
          "name": "CryptHandle",
          "package": "entropy",
          "source": "src/System-Entropy.html#CryptHandle",
          "type": "data"
        },
        "index": {
          "description": "Handle for manual resource mangement",
          "hierarchy": "System Entropy",
          "module": "System.Entropy",
          "name": "CryptHandle",
          "package": "entropy",
          "partial": "Crypt Handle",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/entropy/docs/System-Entropy.html#t:CryptHandle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClose the \u003ccode\u003e\u003ca\u003eCryptHandle\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "System.Entropy",
          "name": "closeHandle",
          "package": "entropy",
          "signature": "CryptHandle -\u003e IO ()",
          "source": "src/System-Entropy.html#closeHandle",
          "type": "function"
        },
        "index": {
          "description": "Close the CryptHandle",
          "hierarchy": "System Entropy",
          "module": "System.Entropy",
          "name": "closeHandle",
          "normalized": "CryptHandle-\u003eIO()",
          "package": "entropy",
          "partial": "Handle",
          "signature": "CryptHandle-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/entropy/docs/System-Entropy.html#v:closeHandle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInefficiently get a specific number of bytes of cryptographically\n secure random data using the system-specific facilities.\n\u003c/p\u003e\u003cp\u003eUse '/dev/urandom' on *nix and CryptAPI when on Windows.  In short,\n this entropy is considered \u003ca\u003ecryptographically secure\u003c/a\u003e but not true\n entropy.\n\u003c/p\u003e",
          "module": "System.Entropy",
          "name": "getEntropy",
          "package": "entropy",
          "signature": "Int -\u003e IO ByteString",
          "source": "src/System-Entropy.html#getEntropy",
          "type": "function"
        },
        "index": {
          "description": "Inefficiently get specific number of bytes of cryptographically secure random data using the system-specific facilities Use dev urandom on nix and CryptAPI when on Windows In short this entropy is considered cryptographically secure but not true entropy",
          "hierarchy": "System Entropy",
          "module": "System.Entropy",
          "name": "getEntropy",
          "normalized": "Int-\u003eIO ByteString",
          "package": "entropy",
          "partial": "Entropy",
          "signature": "Int-\u003eIO ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/entropy/docs/System-Entropy.html#v:getEntropy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead random data from a \u003ccode\u003e\u003ca\u003eCryptHandle\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "System.Entropy",
          "name": "hGetEntropy",
          "package": "entropy",
          "signature": "CryptHandle -\u003e Int -\u003e IO ByteString",
          "source": "src/System-Entropy.html#hGetEntropy",
          "type": "function"
        },
        "index": {
          "description": "Read random data from CryptHandle",
          "hierarchy": "System Entropy",
          "module": "System.Entropy",
          "name": "hGetEntropy",
          "normalized": "CryptHandle-\u003eInt-\u003eIO ByteString",
          "package": "entropy",
          "partial": "Get Entropy",
          "signature": "CryptHandle-\u003eInt-\u003eIO ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/entropy/docs/System-Entropy.html#v:hGetEntropy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOpen a \u003ccode\u003e\u003ca\u003eCryptHandle\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "System.Entropy",
          "name": "openHandle",
          "package": "entropy",
          "signature": "IO CryptHandle",
          "source": "src/System-Entropy.html#openHandle",
          "type": "function"
        },
        "index": {
          "description": "Open CryptHandle",
          "hierarchy": "System Entropy",
          "module": "System.Entropy",
          "name": "openHandle",
          "package": "entropy",
          "partial": "Handle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/entropy/docs/System-Entropy.html#v:openHandle"
      }
    }
  ]
]