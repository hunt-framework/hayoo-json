[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/entropy/docs/System-Entropy.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eObtain entropy from system sources.\n Currently, windows and *nix systems with a \u003ccode\u003e\u003cem\u003edev\u003c/em\u003eurandom\u003c/code\u003e are supported.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "System.Entropy",
        "fct-package": "entropy",
        "fct-signature": "module",
        "fct-source": "src/System-Entropy.html",
        "fct-type": "module",
        "title": "Entropy"
      },
      "index": {
        "description": "Obtain entropy from system sources Currently windows and nix systems with dev urandom are supported",
        "hierarchy": "System Entropy",
        "module": "System.Entropy",
        "name": "Entropy",
        "normalized": "",
        "package": "entropy",
        "partial": "Entropy",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/entropy/docs/System-Entropy.html#t:CryptHandle",
      "description": {
        "fct-descr": "\u003cp\u003eHandle for manual resource mangement\n\u003c/p\u003e",
        "fct-module": "System.Entropy",
        "fct-package": "entropy",
        "fct-signature": "data",
        "fct-source": "src/System-Entropy.html#CryptHandle",
        "fct-type": "data",
        "title": "CryptHandle"
      },
      "index": {
        "description": "Handle for manual resource mangement",
        "hierarchy": "System Entropy",
        "module": "System.Entropy",
        "name": "CryptHandle",
        "normalized": "",
        "package": "entropy",
        "partial": "Crypt Handle",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/entropy/docs/System-Entropy.html#v:closeHandle",
      "description": {
        "fct-descr": "\u003cp\u003eClose the \u003ccode\u003e\u003ca\u003eCryptHandle\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "System.Entropy",
        "fct-package": "entropy",
        "fct-signature": "CryptHandle -\u003e IO ()",
        "fct-source": "src/System-Entropy.html#closeHandle",
        "fct-type": "function",
        "title": "closeHandle"
      },
      "index": {
        "description": "Close the CryptHandle",
        "hierarchy": "System Entropy",
        "module": "System.Entropy",
        "name": "closeHandle",
        "normalized": "CryptHandle-\u003eIO()",
        "package": "entropy",
        "partial": "Handle",
        "signature": "CryptHandle-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/entropy/docs/System-Entropy.html#v:getEntropy",
      "description": {
        "fct-descr": "\u003cp\u003eInefficiently get a specific number of bytes of cryptographically\n secure random data using the system-specific facilities.\n\u003c/p\u003e\u003cp\u003eUse '/dev/urandom' on *nix and CryptAPI when on Windows.  In short,\n this entropy is considered \u003ca\u003ecryptographically secure\u003c/a\u003e but not true\n entropy.\n\u003c/p\u003e",
        "fct-module": "System.Entropy",
        "fct-package": "entropy",
        "fct-signature": "Int -\u003e IO ByteString",
        "fct-source": "src/System-Entropy.html#getEntropy",
        "fct-type": "function",
        "title": "getEntropy"
      },
      "index": {
        "description": "Inefficiently get specific number of bytes of cryptographically secure random data using the system-specific facilities Use dev urandom on nix and CryptAPI when on Windows In short this entropy is considered cryptographically secure but not true entropy",
        "hierarchy": "System Entropy",
        "module": "System.Entropy",
        "name": "getEntropy",
        "normalized": "Int-\u003eIO ByteString",
        "package": "entropy",
        "partial": "Entropy",
        "signature": "Int-\u003eIO ByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/entropy/docs/System-Entropy.html#v:hGetEntropy",
      "description": {
        "fct-descr": "\u003cp\u003eRead random data from a \u003ccode\u003e\u003ca\u003eCryptHandle\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "System.Entropy",
        "fct-package": "entropy",
        "fct-signature": "CryptHandle -\u003e Int -\u003e IO ByteString",
        "fct-source": "src/System-Entropy.html#hGetEntropy",
        "fct-type": "function",
        "title": "hGetEntropy"
      },
      "index": {
        "description": "Read random data from CryptHandle",
        "hierarchy": "System Entropy",
        "module": "System.Entropy",
        "name": "hGetEntropy",
        "normalized": "CryptHandle-\u003eInt-\u003eIO ByteString",
        "package": "entropy",
        "partial": "Get Entropy",
        "signature": "CryptHandle-\u003eInt-\u003eIO ByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/entropy/docs/System-Entropy.html#v:openHandle",
      "description": {
        "fct-descr": "\u003cp\u003eOpen a \u003ccode\u003e\u003ca\u003eCryptHandle\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "System.Entropy",
        "fct-package": "entropy",
        "fct-signature": "IO CryptHandle",
        "fct-source": "src/System-Entropy.html#openHandle",
        "fct-type": "function",
        "title": "openHandle"
      },
      "index": {
        "description": "Open CryptHandle",
        "hierarchy": "System Entropy",
        "module": "System.Entropy",
        "name": "openHandle",
        "normalized": "",
        "package": "entropy",
        "partial": "Handle",
        "signature": ""
      }
    }
  }
]