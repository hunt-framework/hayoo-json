[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vault/docs/Data-Unique-Really.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAn abstract interface to a unique symbol generator.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Unique.Really",
        "fct-package": "vault",
        "fct-signature": "module",
        "fct-source": "src/Data-Unique-Really.html",
        "fct-type": "module",
        "title": "Really"
      },
      "index": {
        "description": "An abstract interface to unique symbol generator",
        "hierarchy": "Data Unique Really",
        "module": "Data.Unique.Really",
        "name": "Really",
        "normalized": "",
        "package": "vault",
        "partial": "Really",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vault/docs/Data-Unique-Really.html#t:Unique",
      "description": {
        "fct-descr": "\u003cp\u003eAn abstract unique value.\n Values of type \u003ccode\u003e\u003ca\u003eUnique\u003c/a\u003e\u003c/code\u003e may be compared for equality\n and hashed into Int.\n\u003c/p\u003e\u003cp\u003eNote: Unlike the symbols from \u003ca\u003eData.Unique\u003c/a\u003e, the symbols from this\n module do not become equal after reloads in the GHC interpreter!\n\u003c/p\u003e",
        "fct-module": "Data.Unique.Really",
        "fct-package": "vault",
        "fct-signature": "data",
        "fct-source": "src/Data-Unique-Really.html#Unique",
        "fct-type": "data",
        "title": "Unique"
      },
      "index": {
        "description": "An abstract unique value Values of type Unique may be compared for equality and hashed into Int Note Unlike the symbols from Data.Unique the symbols from this module do not become equal after reloads in the GHC interpreter",
        "hierarchy": "Data Unique Really",
        "module": "Data.Unique.Really",
        "name": "Unique",
        "normalized": "",
        "package": "vault",
        "partial": "Unique",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vault/docs/Data-Unique-Really.html#v:hashUnique",
      "description": {
        "fct-descr": "\u003cp\u003eHashes a \u003ccode\u003e\u003ca\u003eUnique\u003c/a\u003e\u003c/code\u003e into an \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e.\n Two Uniques may hash to the same value, although in practice this is unlikely.\n The \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e returned makes a good hash key.\n\u003c/p\u003e",
        "fct-module": "Data.Unique.Really",
        "fct-package": "vault",
        "fct-signature": "Unique -\u003e Int",
        "fct-source": "src/Data-Unique-Really.html#hashUnique",
        "fct-type": "function",
        "title": "hashUnique"
      },
      "index": {
        "description": "Hashes Unique into an Int Two Uniques may hash to the same value although in practice this is unlikely The Int returned makes good hash key",
        "hierarchy": "Data Unique Really",
        "module": "Data.Unique.Really",
        "name": "hashUnique",
        "normalized": "Unique-\u003eInt",
        "package": "vault",
        "partial": "Unique",
        "signature": "Unique-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vault/docs/Data-Unique-Really.html#v:newUnique",
      "description": {
        "fct-descr": "\u003cp\u003eCreates a new object of type \u003ccode\u003e\u003ca\u003eUnique\u003c/a\u003e\u003c/code\u003e.\n The value returned will not compare equal to any other\n value of type \u003ccode\u003e\u003ca\u003eUnique\u003c/a\u003e\u003c/code\u003e returned by previous calls to \u003ccode\u003e\u003ca\u003enewUnique\u003c/a\u003e\u003c/code\u003e.\n There is no limit on the number of times you may call this function.\n\u003c/p\u003e",
        "fct-module": "Data.Unique.Really",
        "fct-package": "vault",
        "fct-signature": "IO Unique",
        "fct-source": "src/Data-Unique-Really.html#newUnique",
        "fct-type": "function",
        "title": "newUnique"
      },
      "index": {
        "description": "Creates new object of type Unique The value returned will not compare equal to any other value of type Unique returned by previous calls to newUnique There is no limit on the number of times you may call this function",
        "hierarchy": "Data Unique Really",
        "module": "Data.Unique.Really",
        "name": "newUnique",
        "normalized": "",
        "package": "vault",
        "partial": "Unique",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vault/docs/Data-Vault-Lazy.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA persistent store for values of arbitrary types.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eVault\u003c/a\u003e\u003c/code\u003e type in this module is strict in the keys but lazy in the values.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Vault.Lazy",
        "fct-package": "vault",
        "fct-signature": "module",
        "fct-source": "src/Data-Vault-Lazy.html",
        "fct-type": "module",
        "title": "Lazy"
      },
      "index": {
        "description": "persistent store for values of arbitrary types The Vault type in this module is strict in the keys but lazy in the values",
        "hierarchy": "Data Vault Lazy",
        "module": "Data.Vault.Lazy",
        "name": "Lazy",
        "normalized": "",
        "package": "vault",
        "partial": "Lazy",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vault/docs/Data-Vault-Lazy.html#t:Key",
      "description": {
        "fct-descr": "\u003cp\u003eKeys for the vault.\n\u003c/p\u003e",
        "fct-module": "Data.Vault.Lazy",
        "fct-package": "vault",
        "fct-signature": "type",
        "fct-source": "src/Data-Vault-Lazy.html#Key",
        "fct-type": "type",
        "title": "Key"
      },
      "index": {
        "description": "Keys for the vault",
        "hierarchy": "Data Vault Lazy",
        "module": "Data.Vault.Lazy",
        "name": "Key",
        "normalized": "",
        "package": "vault",
        "partial": "Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vault/docs/Data-Vault-Lazy.html#t:Locker",
      "description": {
        "fct-descr": "\u003cp\u003eA persistent store for a single value.\n\u003c/p\u003e",
        "fct-module": "Data.Vault.Lazy",
        "fct-package": "vault",
        "fct-signature": "type",
        "fct-source": "src/Data-Vault-Lazy.html#Locker",
        "fct-type": "type",
        "title": "Locker"
      },
      "index": {
        "description": "persistent store for single value",
        "hierarchy": "Data Vault Lazy",
        "module": "Data.Vault.Lazy",
        "name": "Locker",
        "normalized": "",
        "package": "vault",
        "partial": "Locker",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vault/docs/Data-Vault-Lazy.html#t:Vault",
      "description": {
        "fct-descr": "\u003cp\u003eA persistent store for values of arbitrary types.\n\u003c/p\u003e\u003cp\u003eThis variant is the simplest and creates keys in the \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e monad.\n See the module \u003ca\u003eData.Vault.ST\u003c/a\u003e if you want to use it with the \u003ccode\u003e\u003ca\u003eST\u003c/a\u003e\u003c/code\u003e monad instead.\n\u003c/p\u003e",
        "fct-module": "Data.Vault.Lazy",
        "fct-package": "vault",
        "fct-signature": "type",
        "fct-source": "src/Data-Vault-Lazy.html#Vault",
        "fct-type": "type",
        "title": "Vault"
      },
      "index": {
        "description": "persistent store for values of arbitrary types This variant is the simplest and creates keys in the IO monad See the module Data.Vault.ST if you want to use it with the ST monad instead",
        "hierarchy": "Data Vault Lazy",
        "module": "Data.Vault.Lazy",
        "name": "Vault",
        "normalized": "",
        "package": "vault",
        "partial": "Vault",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vault/docs/Data-Vault-Lazy.html#v:adjust",
      "description": {
        "fct-descr": "\u003cp\u003eAdjust the value for a given key if it's present in the vault.\n\u003c/p\u003e",
        "fct-module": "Data.Vault.Lazy",
        "fct-package": "vault",
        "fct-signature": "(a -\u003e a) -\u003e Key a -\u003e Vault -\u003e Vault",
        "fct-source": "src/Data-Vault-Lazy.html#adjust",
        "fct-type": "function",
        "title": "adjust"
      },
      "index": {
        "description": "Adjust the value for given key if it present in the vault",
        "hierarchy": "Data Vault Lazy",
        "module": "Data.Vault.Lazy",
        "name": "adjust",
        "normalized": "(a-\u003ea)-\u003eKey a-\u003eVault-\u003eVault",
        "package": "vault",
        "partial": "",
        "signature": "(a-\u003ea)-\u003eKey a-\u003eVault-\u003eVault"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vault/docs/Data-Vault-Lazy.html#v:delete",
      "description": {
        "fct-descr": "\u003cp\u003eDelete a key from the vault.\n\u003c/p\u003e",
        "fct-module": "Data.Vault.Lazy",
        "fct-package": "vault",
        "fct-signature": "Key a -\u003e Vault -\u003e Vault",
        "fct-source": "src/Data-Vault-Lazy.html#delete",
        "fct-type": "function",
        "title": "delete"
      },
      "index": {
        "description": "Delete key from the vault",
        "hierarchy": "Data Vault Lazy",
        "module": "Data.Vault.Lazy",
        "name": "delete",
        "normalized": "Key a-\u003eVault-\u003eVault",
        "package": "vault",
        "partial": "",
        "signature": "Key a-\u003eVault-\u003eVault"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vault/docs/Data-Vault-Lazy.html#v:empty",
      "description": {
        "fct-descr": "\u003cp\u003eThe empty vault.\n\u003c/p\u003e",
        "fct-module": "Data.Vault.Lazy",
        "fct-package": "vault",
        "fct-signature": "Vault",
        "fct-source": "src/Data-Vault-Lazy.html#empty",
        "fct-type": "function",
        "title": "empty"
      },
      "index": {
        "description": "The empty vault",
        "hierarchy": "Data Vault Lazy",
        "module": "Data.Vault.Lazy",
        "name": "empty",
        "normalized": "",
        "package": "vault",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vault/docs/Data-Vault-Lazy.html#v:insert",
      "description": {
        "fct-descr": "\u003cp\u003eInsert a value for a given key. Overwrites any previous value.\n\u003c/p\u003e",
        "fct-module": "Data.Vault.Lazy",
        "fct-package": "vault",
        "fct-signature": "Key a -\u003e a -\u003e Vault -\u003e Vault",
        "fct-source": "src/Data-Vault-Lazy.html#insert",
        "fct-type": "function",
        "title": "insert"
      },
      "index": {
        "description": "Insert value for given key Overwrites any previous value",
        "hierarchy": "Data Vault Lazy",
        "module": "Data.Vault.Lazy",
        "name": "insert",
        "normalized": "Key a-\u003ea-\u003eVault-\u003eVault",
        "package": "vault",
        "partial": "",
        "signature": "Key a-\u003ea-\u003eVault-\u003eVault"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vault/docs/Data-Vault-Lazy.html#v:lock",
      "description": {
        "fct-descr": "\u003cp\u003ePut a single value into a \u003ccode\u003e\u003ca\u003eLocker\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Vault.Lazy",
        "fct-package": "vault",
        "fct-signature": "Key a -\u003e a -\u003e Locker",
        "fct-source": "src/Data-Vault-Lazy.html#lock",
        "fct-type": "function",
        "title": "lock"
      },
      "index": {
        "description": "Put single value into Locker",
        "hierarchy": "Data Vault Lazy",
        "module": "Data.Vault.Lazy",
        "name": "lock",
        "normalized": "Key a-\u003ea-\u003eLocker",
        "package": "vault",
        "partial": "",
        "signature": "Key a-\u003ea-\u003eLocker"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vault/docs/Data-Vault-Lazy.html#v:lookup",
      "description": {
        "fct-descr": "\u003cp\u003eLookup the value of a key in the vault.\n\u003c/p\u003e",
        "fct-module": "Data.Vault.Lazy",
        "fct-package": "vault",
        "fct-signature": "Key a -\u003e Vault -\u003e Maybe a",
        "fct-source": "src/Data-Vault-Lazy.html#lookup",
        "fct-type": "function",
        "title": "lookup"
      },
      "index": {
        "description": "Lookup the value of key in the vault",
        "hierarchy": "Data Vault Lazy",
        "module": "Data.Vault.Lazy",
        "name": "lookup",
        "normalized": "Key a-\u003eVault-\u003eMaybe a",
        "package": "vault",
        "partial": "",
        "signature": "Key a-\u003eVault-\u003eMaybe a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vault/docs/Data-Vault-Lazy.html#v:newKey",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a new key for use with a vault.\n\u003c/p\u003e",
        "fct-module": "Data.Vault.Lazy",
        "fct-package": "vault",
        "fct-signature": "IO (Key a)",
        "fct-source": "src/Data-Vault-Lazy.html#newKey",
        "fct-type": "function",
        "title": "newKey"
      },
      "index": {
        "description": "Create new key for use with vault",
        "hierarchy": "Data Vault Lazy",
        "module": "Data.Vault.Lazy",
        "name": "newKey",
        "normalized": "",
        "package": "vault",
        "partial": "Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vault/docs/Data-Vault-Lazy.html#v:union",
      "description": {
        "fct-descr": "\u003cp\u003eMerge two vaults (left-biased).\n\u003c/p\u003e",
        "fct-module": "Data.Vault.Lazy",
        "fct-package": "vault",
        "fct-signature": "Vault -\u003e Vault -\u003e Vault",
        "fct-source": "src/Data-Vault-Lazy.html#union",
        "fct-type": "function",
        "title": "union"
      },
      "index": {
        "description": "Merge two vaults left-biased",
        "hierarchy": "Data Vault Lazy",
        "module": "Data.Vault.Lazy",
        "name": "union",
        "normalized": "Vault-\u003eVault-\u003eVault",
        "package": "vault",
        "partial": "",
        "signature": "Vault-\u003eVault-\u003eVault"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vault/docs/Data-Vault-Lazy.html#v:unlock",
      "description": {
        "fct-descr": "\u003cp\u003eRetrieve the value from the \u003ccode\u003e\u003ca\u003eLocker\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Vault.Lazy",
        "fct-package": "vault",
        "fct-signature": "Key a -\u003e Locker -\u003e Maybe a",
        "fct-source": "src/Data-Vault-Lazy.html#unlock",
        "fct-type": "function",
        "title": "unlock"
      },
      "index": {
        "description": "Retrieve the value from the Locker",
        "hierarchy": "Data Vault Lazy",
        "module": "Data.Vault.Lazy",
        "name": "unlock",
        "normalized": "Key a-\u003eLocker-\u003eMaybe a",
        "package": "vault",
        "partial": "",
        "signature": "Key a-\u003eLocker-\u003eMaybe a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vault/docs/Data-Vault-ST-Lazy.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA persistent store for values of arbitrary types.\n Variant for the \u003ccode\u003e\u003ca\u003eST\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eVault\u003c/a\u003e\u003c/code\u003e type in this module is strict in the keys but lazy in the values.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Vault.ST.Lazy",
        "fct-package": "vault",
        "fct-signature": "module",
        "fct-source": "src/Data-Vault-ST-Lazy.html",
        "fct-type": "module",
        "title": "Lazy"
      },
      "index": {
        "description": "persistent store for values of arbitrary types Variant for the ST monad The Vault type in this module is strict in the keys but lazy in the values",
        "hierarchy": "Data Vault ST Lazy",
        "module": "Data.Vault.ST.Lazy",
        "name": "Lazy",
        "normalized": "",
        "package": "vault",
        "partial": "Lazy",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vault/docs/Data-Vault-ST-Lazy.html#t:Key",
      "description": {
        "fct-module": "Data.Vault.ST.Lazy",
        "fct-package": "vault",
        "fct-signature": "data",
        "fct-source": "src/Data-Vault-ST-Lazy.html#Key",
        "fct-type": "data",
        "title": "Key"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Vault ST Lazy",
        "module": "Data.Vault.ST.Lazy",
        "name": "Key",
        "normalized": "",
        "package": "vault",
        "partial": "Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vault/docs/Data-Vault-ST-Lazy.html#t:Locker",
      "description": {
        "fct-module": "Data.Vault.ST.Lazy",
        "fct-package": "vault",
        "fct-signature": "data",
        "fct-source": "src/Data-Vault-ST-Lazy.html#Locker",
        "fct-type": "data",
        "title": "Locker"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Vault ST Lazy",
        "module": "Data.Vault.ST.Lazy",
        "name": "Locker",
        "normalized": "",
        "package": "vault",
        "partial": "Locker",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vault/docs/Data-Vault-ST-Lazy.html#t:Vault",
      "description": {
        "fct-module": "Data.Vault.ST.Lazy",
        "fct-package": "vault",
        "fct-signature": "data",
        "fct-source": "src/Data-Vault-ST-Lazy.html#Vault",
        "fct-type": "data",
        "title": "Vault"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Vault ST Lazy",
        "module": "Data.Vault.ST.Lazy",
        "name": "Vault",
        "normalized": "",
        "package": "vault",
        "partial": "Vault",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vault/docs/Data-Vault-ST-Lazy.html#v:adjust",
      "description": {
        "fct-descr": "\u003cp\u003eAdjust the value for a given key if it's present in the vault.\n\u003c/p\u003e",
        "fct-module": "Data.Vault.ST.Lazy",
        "fct-package": "vault",
        "fct-signature": "(a -\u003e a) -\u003e Key s a -\u003e Vault s -\u003e Vault s",
        "fct-source": "src/Data-Vault-ST-Lazy.html#adjust",
        "fct-type": "function",
        "title": "adjust"
      },
      "index": {
        "description": "Adjust the value for given key if it present in the vault",
        "hierarchy": "Data Vault ST Lazy",
        "module": "Data.Vault.ST.Lazy",
        "name": "adjust",
        "normalized": "(a-\u003ea)-\u003eKey b a-\u003eVault b-\u003eVault b",
        "package": "vault",
        "partial": "",
        "signature": "(a-\u003ea)-\u003eKey s a-\u003eVault s-\u003eVault s"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vault/docs/Data-Vault-ST-Lazy.html#v:delete",
      "description": {
        "fct-descr": "\u003cp\u003eDelete a key from the vault.\n\u003c/p\u003e",
        "fct-module": "Data.Vault.ST.Lazy",
        "fct-package": "vault",
        "fct-signature": "Key s a -\u003e Vault s -\u003e Vault s",
        "fct-source": "src/Data-Vault-ST-Lazy.html#delete",
        "fct-type": "function",
        "title": "delete"
      },
      "index": {
        "description": "Delete key from the vault",
        "hierarchy": "Data Vault ST Lazy",
        "module": "Data.Vault.ST.Lazy",
        "name": "delete",
        "normalized": "Key a b-\u003eVault a-\u003eVault a",
        "package": "vault",
        "partial": "",
        "signature": "Key s a-\u003eVault s-\u003eVault s"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vault/docs/Data-Vault-ST-Lazy.html#v:empty",
      "description": {
        "fct-descr": "\u003cp\u003eThe empty vault.\n\u003c/p\u003e",
        "fct-module": "Data.Vault.ST.Lazy",
        "fct-package": "vault",
        "fct-signature": "Vault s",
        "fct-source": "src/Data-Vault-ST-Lazy.html#empty",
        "fct-type": "function",
        "title": "empty"
      },
      "index": {
        "description": "The empty vault",
        "hierarchy": "Data Vault ST Lazy",
        "module": "Data.Vault.ST.Lazy",
        "name": "empty",
        "normalized": "",
        "package": "vault",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vault/docs/Data-Vault-ST-Lazy.html#v:insert",
      "description": {
        "fct-descr": "\u003cp\u003eInsert a value for a given key. Overwrites any previous value.\n\u003c/p\u003e",
        "fct-module": "Data.Vault.ST.Lazy",
        "fct-package": "vault",
        "fct-signature": "Key s a -\u003e a -\u003e Vault s -\u003e Vault s",
        "fct-source": "src/Data-Vault-ST-Lazy.html#insert",
        "fct-type": "function",
        "title": "insert"
      },
      "index": {
        "description": "Insert value for given key Overwrites any previous value",
        "hierarchy": "Data Vault ST Lazy",
        "module": "Data.Vault.ST.Lazy",
        "name": "insert",
        "normalized": "Key a b-\u003eb-\u003eVault a-\u003eVault a",
        "package": "vault",
        "partial": "",
        "signature": "Key s a-\u003ea-\u003eVault s-\u003eVault s"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vault/docs/Data-Vault-ST-Lazy.html#v:lock",
      "description": {
        "fct-descr": "\u003cp\u003ePut a single value into a \u003ccode\u003e\u003ca\u003eLocker\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Vault.ST.Lazy",
        "fct-package": "vault",
        "fct-signature": "Key s a -\u003e a -\u003e Locker s",
        "fct-source": "src/Data-Vault-ST-Lazy.html#lock",
        "fct-type": "function",
        "title": "lock"
      },
      "index": {
        "description": "Put single value into Locker",
        "hierarchy": "Data Vault ST Lazy",
        "module": "Data.Vault.ST.Lazy",
        "name": "lock",
        "normalized": "Key a b-\u003eb-\u003eLocker a",
        "package": "vault",
        "partial": "",
        "signature": "Key s a-\u003ea-\u003eLocker s"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vault/docs/Data-Vault-ST-Lazy.html#v:lookup",
      "description": {
        "fct-descr": "\u003cp\u003eLookup the value of a key in the vault.\n\u003c/p\u003e",
        "fct-module": "Data.Vault.ST.Lazy",
        "fct-package": "vault",
        "fct-signature": "Key s a -\u003e Vault s -\u003e Maybe a",
        "fct-source": "src/Data-Vault-ST-Lazy.html#lookup",
        "fct-type": "function",
        "title": "lookup"
      },
      "index": {
        "description": "Lookup the value of key in the vault",
        "hierarchy": "Data Vault ST Lazy",
        "module": "Data.Vault.ST.Lazy",
        "name": "lookup",
        "normalized": "Key a b-\u003eVault a-\u003eMaybe b",
        "package": "vault",
        "partial": "",
        "signature": "Key s a-\u003eVault s-\u003eMaybe a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vault/docs/Data-Vault-ST-Lazy.html#v:newKey",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a new key for use with a vault.\n\u003c/p\u003e",
        "fct-module": "Data.Vault.ST.Lazy",
        "fct-package": "vault",
        "fct-signature": "ST s (Key s a)",
        "fct-source": "src/Data-Vault-ST-Lazy.html#newKey",
        "fct-type": "function",
        "title": "newKey"
      },
      "index": {
        "description": "Create new key for use with vault",
        "hierarchy": "Data Vault ST Lazy",
        "module": "Data.Vault.ST.Lazy",
        "name": "newKey",
        "normalized": "",
        "package": "vault",
        "partial": "Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vault/docs/Data-Vault-ST-Lazy.html#v:union",
      "description": {
        "fct-descr": "\u003cp\u003eMerge two vaults (left-biased).\n\u003c/p\u003e",
        "fct-module": "Data.Vault.ST.Lazy",
        "fct-package": "vault",
        "fct-signature": "Vault s -\u003e Vault s -\u003e Vault s",
        "fct-source": "src/Data-Vault-ST-Lazy.html#union",
        "fct-type": "function",
        "title": "union"
      },
      "index": {
        "description": "Merge two vaults left-biased",
        "hierarchy": "Data Vault ST Lazy",
        "module": "Data.Vault.ST.Lazy",
        "name": "union",
        "normalized": "Vault a-\u003eVault a-\u003eVault a",
        "package": "vault",
        "partial": "",
        "signature": "Vault s-\u003eVault s-\u003eVault s"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vault/docs/Data-Vault-ST-Lazy.html#v:unlock",
      "description": {
        "fct-descr": "\u003cp\u003eRetrieve the value from the \u003ccode\u003e\u003ca\u003eLocker\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Vault.ST.Lazy",
        "fct-package": "vault",
        "fct-signature": "Key s a -\u003e Locker s -\u003e Maybe a",
        "fct-source": "src/Data-Vault-ST-Lazy.html#unlock",
        "fct-type": "function",
        "title": "unlock"
      },
      "index": {
        "description": "Retrieve the value from the Locker",
        "hierarchy": "Data Vault ST Lazy",
        "module": "Data.Vault.ST.Lazy",
        "name": "unlock",
        "normalized": "Key a b-\u003eLocker a-\u003eMaybe b",
        "package": "vault",
        "partial": "",
        "signature": "Key s a-\u003eLocker s-\u003eMaybe a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vault/docs/Data-Vault-ST-Strict.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA persistent store for values of arbitrary types.\n Variant for the \u003ccode\u003e\u003ca\u003eST\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eVault\u003c/a\u003e\u003c/code\u003e type in this module is strict in both keys and values.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Vault.ST.Strict",
        "fct-package": "vault",
        "fct-signature": "module",
        "fct-source": "src/Data-Vault-ST-Strict.html",
        "fct-type": "module",
        "title": "Strict"
      },
      "index": {
        "description": "persistent store for values of arbitrary types Variant for the ST monad The Vault type in this module is strict in both keys and values",
        "hierarchy": "Data Vault ST Strict",
        "module": "Data.Vault.ST.Strict",
        "name": "Strict",
        "normalized": "",
        "package": "vault",
        "partial": "Strict",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vault/docs/Data-Vault-ST-Strict.html#t:Key",
      "description": {
        "fct-module": "Data.Vault.ST.Strict",
        "fct-package": "vault",
        "fct-signature": "data",
        "fct-source": "src/Data-Vault-ST-Strict.html#Key",
        "fct-type": "data",
        "title": "Key"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Vault ST Strict",
        "module": "Data.Vault.ST.Strict",
        "name": "Key",
        "normalized": "",
        "package": "vault",
        "partial": "Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vault/docs/Data-Vault-ST-Strict.html#t:Locker",
      "description": {
        "fct-module": "Data.Vault.ST.Strict",
        "fct-package": "vault",
        "fct-signature": "data",
        "fct-source": "src/Data-Vault-ST-Strict.html#Locker",
        "fct-type": "data",
        "title": "Locker"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Vault ST Strict",
        "module": "Data.Vault.ST.Strict",
        "name": "Locker",
        "normalized": "",
        "package": "vault",
        "partial": "Locker",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vault/docs/Data-Vault-ST-Strict.html#t:Vault",
      "description": {
        "fct-module": "Data.Vault.ST.Strict",
        "fct-package": "vault",
        "fct-signature": "data",
        "fct-source": "src/Data-Vault-ST-Strict.html#Vault",
        "fct-type": "data",
        "title": "Vault"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Vault ST Strict",
        "module": "Data.Vault.ST.Strict",
        "name": "Vault",
        "normalized": "",
        "package": "vault",
        "partial": "Vault",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vault/docs/Data-Vault-ST-Strict.html#v:adjust",
      "description": {
        "fct-descr": "\u003cp\u003eAdjust the value for a given key if it's present in the vault.\n\u003c/p\u003e",
        "fct-module": "Data.Vault.ST.Strict",
        "fct-package": "vault",
        "fct-signature": "(a -\u003e a) -\u003e Key s a -\u003e Vault s -\u003e Vault s",
        "fct-source": "src/Data-Vault-ST-Strict.html#adjust",
        "fct-type": "function",
        "title": "adjust"
      },
      "index": {
        "description": "Adjust the value for given key if it present in the vault",
        "hierarchy": "Data Vault ST Strict",
        "module": "Data.Vault.ST.Strict",
        "name": "adjust",
        "normalized": "(a-\u003ea)-\u003eKey b a-\u003eVault b-\u003eVault b",
        "package": "vault",
        "partial": "",
        "signature": "(a-\u003ea)-\u003eKey s a-\u003eVault s-\u003eVault s"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vault/docs/Data-Vault-ST-Strict.html#v:delete",
      "description": {
        "fct-descr": "\u003cp\u003eDelete a key from the vault.\n\u003c/p\u003e",
        "fct-module": "Data.Vault.ST.Strict",
        "fct-package": "vault",
        "fct-signature": "Key s a -\u003e Vault s -\u003e Vault s",
        "fct-source": "src/Data-Vault-ST-Strict.html#delete",
        "fct-type": "function",
        "title": "delete"
      },
      "index": {
        "description": "Delete key from the vault",
        "hierarchy": "Data Vault ST Strict",
        "module": "Data.Vault.ST.Strict",
        "name": "delete",
        "normalized": "Key a b-\u003eVault a-\u003eVault a",
        "package": "vault",
        "partial": "",
        "signature": "Key s a-\u003eVault s-\u003eVault s"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vault/docs/Data-Vault-ST-Strict.html#v:empty",
      "description": {
        "fct-descr": "\u003cp\u003eThe empty vault.\n\u003c/p\u003e",
        "fct-module": "Data.Vault.ST.Strict",
        "fct-package": "vault",
        "fct-signature": "Vault s",
        "fct-source": "src/Data-Vault-ST-Strict.html#empty",
        "fct-type": "function",
        "title": "empty"
      },
      "index": {
        "description": "The empty vault",
        "hierarchy": "Data Vault ST Strict",
        "module": "Data.Vault.ST.Strict",
        "name": "empty",
        "normalized": "",
        "package": "vault",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vault/docs/Data-Vault-ST-Strict.html#v:insert",
      "description": {
        "fct-descr": "\u003cp\u003eInsert a value for a given key. Overwrites any previous value.\n\u003c/p\u003e",
        "fct-module": "Data.Vault.ST.Strict",
        "fct-package": "vault",
        "fct-signature": "Key s a -\u003e a -\u003e Vault s -\u003e Vault s",
        "fct-source": "src/Data-Vault-ST-Strict.html#insert",
        "fct-type": "function",
        "title": "insert"
      },
      "index": {
        "description": "Insert value for given key Overwrites any previous value",
        "hierarchy": "Data Vault ST Strict",
        "module": "Data.Vault.ST.Strict",
        "name": "insert",
        "normalized": "Key a b-\u003eb-\u003eVault a-\u003eVault a",
        "package": "vault",
        "partial": "",
        "signature": "Key s a-\u003ea-\u003eVault s-\u003eVault s"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vault/docs/Data-Vault-ST-Strict.html#v:lock",
      "description": {
        "fct-descr": "\u003cp\u003ePut a single value into a \u003ccode\u003e\u003ca\u003eLocker\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Vault.ST.Strict",
        "fct-package": "vault",
        "fct-signature": "Key s a -\u003e a -\u003e Locker s",
        "fct-source": "src/Data-Vault-ST-Strict.html#lock",
        "fct-type": "function",
        "title": "lock"
      },
      "index": {
        "description": "Put single value into Locker",
        "hierarchy": "Data Vault ST Strict",
        "module": "Data.Vault.ST.Strict",
        "name": "lock",
        "normalized": "Key a b-\u003eb-\u003eLocker a",
        "package": "vault",
        "partial": "",
        "signature": "Key s a-\u003ea-\u003eLocker s"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vault/docs/Data-Vault-ST-Strict.html#v:lookup",
      "description": {
        "fct-descr": "\u003cp\u003eLookup the value of a key in the vault.\n\u003c/p\u003e",
        "fct-module": "Data.Vault.ST.Strict",
        "fct-package": "vault",
        "fct-signature": "Key s a -\u003e Vault s -\u003e Maybe a",
        "fct-source": "src/Data-Vault-ST-Strict.html#lookup",
        "fct-type": "function",
        "title": "lookup"
      },
      "index": {
        "description": "Lookup the value of key in the vault",
        "hierarchy": "Data Vault ST Strict",
        "module": "Data.Vault.ST.Strict",
        "name": "lookup",
        "normalized": "Key a b-\u003eVault a-\u003eMaybe b",
        "package": "vault",
        "partial": "",
        "signature": "Key s a-\u003eVault s-\u003eMaybe a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vault/docs/Data-Vault-ST-Strict.html#v:newKey",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a new key for use with a vault.\n\u003c/p\u003e",
        "fct-module": "Data.Vault.ST.Strict",
        "fct-package": "vault",
        "fct-signature": "ST s (Key s a)",
        "fct-source": "src/Data-Vault-ST-Strict.html#newKey",
        "fct-type": "function",
        "title": "newKey"
      },
      "index": {
        "description": "Create new key for use with vault",
        "hierarchy": "Data Vault ST Strict",
        "module": "Data.Vault.ST.Strict",
        "name": "newKey",
        "normalized": "",
        "package": "vault",
        "partial": "Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vault/docs/Data-Vault-ST-Strict.html#v:union",
      "description": {
        "fct-descr": "\u003cp\u003eMerge two vaults (left-biased).\n\u003c/p\u003e",
        "fct-module": "Data.Vault.ST.Strict",
        "fct-package": "vault",
        "fct-signature": "Vault s -\u003e Vault s -\u003e Vault s",
        "fct-source": "src/Data-Vault-ST-Strict.html#union",
        "fct-type": "function",
        "title": "union"
      },
      "index": {
        "description": "Merge two vaults left-biased",
        "hierarchy": "Data Vault ST Strict",
        "module": "Data.Vault.ST.Strict",
        "name": "union",
        "normalized": "Vault a-\u003eVault a-\u003eVault a",
        "package": "vault",
        "partial": "",
        "signature": "Vault s-\u003eVault s-\u003eVault s"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vault/docs/Data-Vault-ST-Strict.html#v:unlock",
      "description": {
        "fct-descr": "\u003cp\u003eRetrieve the value from the \u003ccode\u003e\u003ca\u003eLocker\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Vault.ST.Strict",
        "fct-package": "vault",
        "fct-signature": "Key s a -\u003e Locker s -\u003e Maybe a",
        "fct-source": "src/Data-Vault-ST-Strict.html#unlock",
        "fct-type": "function",
        "title": "unlock"
      },
      "index": {
        "description": "Retrieve the value from the Locker",
        "hierarchy": "Data Vault ST Strict",
        "module": "Data.Vault.ST.Strict",
        "name": "unlock",
        "normalized": "Key a b-\u003eLocker a-\u003eMaybe b",
        "package": "vault",
        "partial": "",
        "signature": "Key s a-\u003eLocker s-\u003eMaybe a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vault/docs/Data-Vault-Strict.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA persistent store for values of arbitrary types.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eVault\u003c/a\u003e\u003c/code\u003e type in this module is strict in both keys and values.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Vault.Strict",
        "fct-package": "vault",
        "fct-signature": "module",
        "fct-source": "src/Data-Vault-Strict.html",
        "fct-type": "module",
        "title": "Strict"
      },
      "index": {
        "description": "persistent store for values of arbitrary types The Vault type in this module is strict in both keys and values",
        "hierarchy": "Data Vault Strict",
        "module": "Data.Vault.Strict",
        "name": "Strict",
        "normalized": "",
        "package": "vault",
        "partial": "Strict",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vault/docs/Data-Vault-Strict.html#t:Key",
      "description": {
        "fct-descr": "\u003cp\u003eKeys for the vault.\n\u003c/p\u003e",
        "fct-module": "Data.Vault.Strict",
        "fct-package": "vault",
        "fct-signature": "type",
        "fct-source": "src/Data-Vault-Strict.html#Key",
        "fct-type": "type",
        "title": "Key"
      },
      "index": {
        "description": "Keys for the vault",
        "hierarchy": "Data Vault Strict",
        "module": "Data.Vault.Strict",
        "name": "Key",
        "normalized": "",
        "package": "vault",
        "partial": "Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vault/docs/Data-Vault-Strict.html#t:Locker",
      "description": {
        "fct-descr": "\u003cp\u003eA persistent store for a single value.\n\u003c/p\u003e",
        "fct-module": "Data.Vault.Strict",
        "fct-package": "vault",
        "fct-signature": "type",
        "fct-source": "src/Data-Vault-Strict.html#Locker",
        "fct-type": "type",
        "title": "Locker"
      },
      "index": {
        "description": "persistent store for single value",
        "hierarchy": "Data Vault Strict",
        "module": "Data.Vault.Strict",
        "name": "Locker",
        "normalized": "",
        "package": "vault",
        "partial": "Locker",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vault/docs/Data-Vault-Strict.html#t:Vault",
      "description": {
        "fct-descr": "\u003cp\u003eA persistent store for values of arbitrary types.\n\u003c/p\u003e\u003cp\u003eThis variant is the simplest and creates keys in the \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e monad.\n See the module \u003ca\u003eData.Vault.ST\u003c/a\u003e if you want to use it with the \u003ccode\u003e\u003ca\u003eST\u003c/a\u003e\u003c/code\u003e monad instead.\n\u003c/p\u003e",
        "fct-module": "Data.Vault.Strict",
        "fct-package": "vault",
        "fct-signature": "type",
        "fct-source": "src/Data-Vault-Strict.html#Vault",
        "fct-type": "type",
        "title": "Vault"
      },
      "index": {
        "description": "persistent store for values of arbitrary types This variant is the simplest and creates keys in the IO monad See the module Data.Vault.ST if you want to use it with the ST monad instead",
        "hierarchy": "Data Vault Strict",
        "module": "Data.Vault.Strict",
        "name": "Vault",
        "normalized": "",
        "package": "vault",
        "partial": "Vault",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vault/docs/Data-Vault-Strict.html#v:adjust",
      "description": {
        "fct-descr": "\u003cp\u003eAdjust the value for a given key if it's present in the vault.\n\u003c/p\u003e",
        "fct-module": "Data.Vault.Strict",
        "fct-package": "vault",
        "fct-signature": "(a -\u003e a) -\u003e Key a -\u003e Vault -\u003e Vault",
        "fct-source": "src/Data-Vault-Strict.html#adjust",
        "fct-type": "function",
        "title": "adjust"
      },
      "index": {
        "description": "Adjust the value for given key if it present in the vault",
        "hierarchy": "Data Vault Strict",
        "module": "Data.Vault.Strict",
        "name": "adjust",
        "normalized": "(a-\u003ea)-\u003eKey a-\u003eVault-\u003eVault",
        "package": "vault",
        "partial": "",
        "signature": "(a-\u003ea)-\u003eKey a-\u003eVault-\u003eVault"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vault/docs/Data-Vault-Strict.html#v:delete",
      "description": {
        "fct-descr": "\u003cp\u003eDelete a key from the vault.\n\u003c/p\u003e",
        "fct-module": "Data.Vault.Strict",
        "fct-package": "vault",
        "fct-signature": "Key a -\u003e Vault -\u003e Vault",
        "fct-source": "src/Data-Vault-Strict.html#delete",
        "fct-type": "function",
        "title": "delete"
      },
      "index": {
        "description": "Delete key from the vault",
        "hierarchy": "Data Vault Strict",
        "module": "Data.Vault.Strict",
        "name": "delete",
        "normalized": "Key a-\u003eVault-\u003eVault",
        "package": "vault",
        "partial": "",
        "signature": "Key a-\u003eVault-\u003eVault"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vault/docs/Data-Vault-Strict.html#v:empty",
      "description": {
        "fct-descr": "\u003cp\u003eThe empty vault.\n\u003c/p\u003e",
        "fct-module": "Data.Vault.Strict",
        "fct-package": "vault",
        "fct-signature": "Vault",
        "fct-source": "src/Data-Vault-Strict.html#empty",
        "fct-type": "function",
        "title": "empty"
      },
      "index": {
        "description": "The empty vault",
        "hierarchy": "Data Vault Strict",
        "module": "Data.Vault.Strict",
        "name": "empty",
        "normalized": "",
        "package": "vault",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vault/docs/Data-Vault-Strict.html#v:insert",
      "description": {
        "fct-descr": "\u003cp\u003eInsert a value for a given key. Overwrites any previous value.\n\u003c/p\u003e",
        "fct-module": "Data.Vault.Strict",
        "fct-package": "vault",
        "fct-signature": "Key a -\u003e a -\u003e Vault -\u003e Vault",
        "fct-source": "src/Data-Vault-Strict.html#insert",
        "fct-type": "function",
        "title": "insert"
      },
      "index": {
        "description": "Insert value for given key Overwrites any previous value",
        "hierarchy": "Data Vault Strict",
        "module": "Data.Vault.Strict",
        "name": "insert",
        "normalized": "Key a-\u003ea-\u003eVault-\u003eVault",
        "package": "vault",
        "partial": "",
        "signature": "Key a-\u003ea-\u003eVault-\u003eVault"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vault/docs/Data-Vault-Strict.html#v:lock",
      "description": {
        "fct-descr": "\u003cp\u003ePut a single value into a \u003ccode\u003e\u003ca\u003eLocker\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Vault.Strict",
        "fct-package": "vault",
        "fct-signature": "Key a -\u003e a -\u003e Locker",
        "fct-source": "src/Data-Vault-Strict.html#lock",
        "fct-type": "function",
        "title": "lock"
      },
      "index": {
        "description": "Put single value into Locker",
        "hierarchy": "Data Vault Strict",
        "module": "Data.Vault.Strict",
        "name": "lock",
        "normalized": "Key a-\u003ea-\u003eLocker",
        "package": "vault",
        "partial": "",
        "signature": "Key a-\u003ea-\u003eLocker"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vault/docs/Data-Vault-Strict.html#v:lookup",
      "description": {
        "fct-descr": "\u003cp\u003eLookup the value of a key in the vault.\n\u003c/p\u003e",
        "fct-module": "Data.Vault.Strict",
        "fct-package": "vault",
        "fct-signature": "Key a -\u003e Vault -\u003e Maybe a",
        "fct-source": "src/Data-Vault-Strict.html#lookup",
        "fct-type": "function",
        "title": "lookup"
      },
      "index": {
        "description": "Lookup the value of key in the vault",
        "hierarchy": "Data Vault Strict",
        "module": "Data.Vault.Strict",
        "name": "lookup",
        "normalized": "Key a-\u003eVault-\u003eMaybe a",
        "package": "vault",
        "partial": "",
        "signature": "Key a-\u003eVault-\u003eMaybe a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vault/docs/Data-Vault-Strict.html#v:newKey",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a new key for use with a vault.\n\u003c/p\u003e",
        "fct-module": "Data.Vault.Strict",
        "fct-package": "vault",
        "fct-signature": "IO (Key a)",
        "fct-source": "src/Data-Vault-Strict.html#newKey",
        "fct-type": "function",
        "title": "newKey"
      },
      "index": {
        "description": "Create new key for use with vault",
        "hierarchy": "Data Vault Strict",
        "module": "Data.Vault.Strict",
        "name": "newKey",
        "normalized": "",
        "package": "vault",
        "partial": "Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vault/docs/Data-Vault-Strict.html#v:union",
      "description": {
        "fct-descr": "\u003cp\u003eMerge two vaults (left-biased).\n\u003c/p\u003e",
        "fct-module": "Data.Vault.Strict",
        "fct-package": "vault",
        "fct-signature": "Vault -\u003e Vault -\u003e Vault",
        "fct-source": "src/Data-Vault-Strict.html#union",
        "fct-type": "function",
        "title": "union"
      },
      "index": {
        "description": "Merge two vaults left-biased",
        "hierarchy": "Data Vault Strict",
        "module": "Data.Vault.Strict",
        "name": "union",
        "normalized": "Vault-\u003eVault-\u003eVault",
        "package": "vault",
        "partial": "",
        "signature": "Vault-\u003eVault-\u003eVault"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vault/docs/Data-Vault-Strict.html#v:unlock",
      "description": {
        "fct-descr": "\u003cp\u003eRetrieve the value from the \u003ccode\u003e\u003ca\u003eLocker\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Vault.Strict",
        "fct-package": "vault",
        "fct-signature": "Key a -\u003e Locker -\u003e Maybe a",
        "fct-source": "src/Data-Vault-Strict.html#unlock",
        "fct-type": "function",
        "title": "unlock"
      },
      "index": {
        "description": "Retrieve the value from the Locker",
        "hierarchy": "Data Vault Strict",
        "module": "Data.Vault.Strict",
        "name": "unlock",
        "normalized": "Key a-\u003eLocker-\u003eMaybe a",
        "package": "vault",
        "partial": "",
        "signature": "Key a-\u003eLocker-\u003eMaybe a"
      }
    }
  }
]