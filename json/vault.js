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
        "word": "vault"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAn abstract interface to a unique symbol generator.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Unique.Really",
          "name": "Really",
          "package": "vault",
          "source": "src/Data-Unique-Really.html",
          "type": "module"
        },
        "index": {
          "description": "An abstract interface to unique symbol generator",
          "hierarchy": "Data Unique Really",
          "module": "Data.Unique.Really",
          "name": "Really",
          "package": "vault",
          "partial": "Really",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/vault/docs/Data-Unique-Really.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn abstract unique value.\n Values of type \u003ccode\u003e\u003ca\u003eUnique\u003c/a\u003e\u003c/code\u003e may be compared for equality\n and hashed into Int.\n\u003c/p\u003e\u003cp\u003eNote: Unlike the symbols from \u003ca\u003eData.Unique\u003c/a\u003e, the symbols from this\n module do not become equal after reloads in the GHC interpreter!\n\u003c/p\u003e",
          "module": "Data.Unique.Really",
          "name": "Unique",
          "package": "vault",
          "source": "src/Data-Unique-Really.html#Unique",
          "type": "data"
        },
        "index": {
          "description": "An abstract unique value Values of type Unique may be compared for equality and hashed into Int Note Unlike the symbols from Data.Unique the symbols from this module do not become equal after reloads in the GHC interpreter",
          "hierarchy": "Data Unique Really",
          "module": "Data.Unique.Really",
          "name": "Unique",
          "package": "vault",
          "partial": "Unique",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/vault/docs/Data-Unique-Really.html#t:Unique"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHashes a \u003ccode\u003e\u003ca\u003eUnique\u003c/a\u003e\u003c/code\u003e into an \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e.\n Two Uniques may hash to the same value, although in practice this is unlikely.\n The \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e returned makes a good hash key.\n\u003c/p\u003e",
          "module": "Data.Unique.Really",
          "name": "hashUnique",
          "package": "vault",
          "signature": "Unique -\u003e Int",
          "source": "src/Data-Unique-Really.html#hashUnique",
          "type": "function"
        },
        "index": {
          "description": "Hashes Unique into an Int Two Uniques may hash to the same value although in practice this is unlikely The Int returned makes good hash key",
          "hierarchy": "Data Unique Really",
          "module": "Data.Unique.Really",
          "name": "hashUnique",
          "normalized": "Unique-\u003eInt",
          "package": "vault",
          "partial": "Unique",
          "signature": "Unique-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vault/docs/Data-Unique-Really.html#v:hashUnique"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a new object of type \u003ccode\u003e\u003ca\u003eUnique\u003c/a\u003e\u003c/code\u003e.\n The value returned will not compare equal to any other\n value of type \u003ccode\u003e\u003ca\u003eUnique\u003c/a\u003e\u003c/code\u003e returned by previous calls to \u003ccode\u003e\u003ca\u003enewUnique\u003c/a\u003e\u003c/code\u003e.\n There is no limit on the number of times you may call this function.\n\u003c/p\u003e",
          "module": "Data.Unique.Really",
          "name": "newUnique",
          "package": "vault",
          "signature": "IO Unique",
          "source": "src/Data-Unique-Really.html#newUnique",
          "type": "function"
        },
        "index": {
          "description": "Creates new object of type Unique The value returned will not compare equal to any other value of type Unique returned by previous calls to newUnique There is no limit on the number of times you may call this function",
          "hierarchy": "Data Unique Really",
          "module": "Data.Unique.Really",
          "name": "newUnique",
          "package": "vault",
          "partial": "Unique",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vault/docs/Data-Unique-Really.html#v:newUnique"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA persistent store for values of arbitrary types.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eVault\u003c/a\u003e\u003c/code\u003e type in this module is strict in the keys but lazy in the values.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Vault.Lazy",
          "name": "Lazy",
          "package": "vault",
          "source": "src/Data-Vault-Lazy.html",
          "type": "module"
        },
        "index": {
          "description": "persistent store for values of arbitrary types The Vault type in this module is strict in the keys but lazy in the values",
          "hierarchy": "Data Vault Lazy",
          "module": "Data.Vault.Lazy",
          "name": "Lazy",
          "package": "vault",
          "partial": "Lazy",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/vault/docs/Data-Vault-Lazy.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eKeys for the vault.\n\u003c/p\u003e",
          "module": "Data.Vault.Lazy",
          "name": "Key",
          "package": "vault",
          "source": "src/Data-Vault-Lazy.html#Key",
          "type": "type"
        },
        "index": {
          "description": "Keys for the vault",
          "hierarchy": "Data Vault Lazy",
          "module": "Data.Vault.Lazy",
          "name": "Key",
          "package": "vault",
          "partial": "Key",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/vault/docs/Data-Vault-Lazy.html#t:Key"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA persistent store for a single value.\n\u003c/p\u003e",
          "module": "Data.Vault.Lazy",
          "name": "Locker",
          "package": "vault",
          "source": "src/Data-Vault-Lazy.html#Locker",
          "type": "type"
        },
        "index": {
          "description": "persistent store for single value",
          "hierarchy": "Data Vault Lazy",
          "module": "Data.Vault.Lazy",
          "name": "Locker",
          "package": "vault",
          "partial": "Locker",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/vault/docs/Data-Vault-Lazy.html#t:Locker"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA persistent store for values of arbitrary types.\n\u003c/p\u003e\u003cp\u003eThis variant is the simplest and creates keys in the \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e monad.\n See the module \u003ca\u003eData.Vault.ST\u003c/a\u003e if you want to use it with the \u003ccode\u003e\u003ca\u003eST\u003c/a\u003e\u003c/code\u003e monad instead.\n\u003c/p\u003e",
          "module": "Data.Vault.Lazy",
          "name": "Vault",
          "package": "vault",
          "source": "src/Data-Vault-Lazy.html#Vault",
          "type": "type"
        },
        "index": {
          "description": "persistent store for values of arbitrary types This variant is the simplest and creates keys in the IO monad See the module Data.Vault.ST if you want to use it with the ST monad instead",
          "hierarchy": "Data Vault Lazy",
          "module": "Data.Vault.Lazy",
          "name": "Vault",
          "package": "vault",
          "partial": "Vault",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/vault/docs/Data-Vault-Lazy.html#t:Vault"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdjust the value for a given key if it's present in the vault.\n\u003c/p\u003e",
          "module": "Data.Vault.Lazy",
          "name": "adjust",
          "package": "vault",
          "signature": "(a -\u003e a) -\u003e Key a -\u003e Vault -\u003e Vault",
          "source": "src/Data-Vault-Lazy.html#adjust",
          "type": "function"
        },
        "index": {
          "description": "Adjust the value for given key if it present in the vault",
          "hierarchy": "Data Vault Lazy",
          "module": "Data.Vault.Lazy",
          "name": "adjust",
          "normalized": "(a-\u003ea)-\u003eKey a-\u003eVault-\u003eVault",
          "package": "vault",
          "signature": "(a-\u003ea)-\u003eKey a-\u003eVault-\u003eVault",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vault/docs/Data-Vault-Lazy.html#v:adjust"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDelete a key from the vault.\n\u003c/p\u003e",
          "module": "Data.Vault.Lazy",
          "name": "delete",
          "package": "vault",
          "signature": "Key a -\u003e Vault -\u003e Vault",
          "source": "src/Data-Vault-Lazy.html#delete",
          "type": "function"
        },
        "index": {
          "description": "Delete key from the vault",
          "hierarchy": "Data Vault Lazy",
          "module": "Data.Vault.Lazy",
          "name": "delete",
          "normalized": "Key a-\u003eVault-\u003eVault",
          "package": "vault",
          "signature": "Key a-\u003eVault-\u003eVault",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vault/docs/Data-Vault-Lazy.html#v:delete"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe empty vault.\n\u003c/p\u003e",
          "module": "Data.Vault.Lazy",
          "name": "empty",
          "package": "vault",
          "signature": "Vault",
          "source": "src/Data-Vault-Lazy.html#empty",
          "type": "function"
        },
        "index": {
          "description": "The empty vault",
          "hierarchy": "Data Vault Lazy",
          "module": "Data.Vault.Lazy",
          "name": "empty",
          "package": "vault",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vault/docs/Data-Vault-Lazy.html#v:empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInsert a value for a given key. Overwrites any previous value.\n\u003c/p\u003e",
          "module": "Data.Vault.Lazy",
          "name": "insert",
          "package": "vault",
          "signature": "Key a -\u003e a -\u003e Vault -\u003e Vault",
          "source": "src/Data-Vault-Lazy.html#insert",
          "type": "function"
        },
        "index": {
          "description": "Insert value for given key Overwrites any previous value",
          "hierarchy": "Data Vault Lazy",
          "module": "Data.Vault.Lazy",
          "name": "insert",
          "normalized": "Key a-\u003ea-\u003eVault-\u003eVault",
          "package": "vault",
          "signature": "Key a-\u003ea-\u003eVault-\u003eVault",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vault/docs/Data-Vault-Lazy.html#v:insert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePut a single value into a \u003ccode\u003e\u003ca\u003eLocker\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Vault.Lazy",
          "name": "lock",
          "package": "vault",
          "signature": "Key a -\u003e a -\u003e Locker",
          "source": "src/Data-Vault-Lazy.html#lock",
          "type": "function"
        },
        "index": {
          "description": "Put single value into Locker",
          "hierarchy": "Data Vault Lazy",
          "module": "Data.Vault.Lazy",
          "name": "lock",
          "normalized": "Key a-\u003ea-\u003eLocker",
          "package": "vault",
          "signature": "Key a-\u003ea-\u003eLocker",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vault/docs/Data-Vault-Lazy.html#v:lock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLookup the value of a key in the vault.\n\u003c/p\u003e",
          "module": "Data.Vault.Lazy",
          "name": "lookup",
          "package": "vault",
          "signature": "Key a -\u003e Vault -\u003e Maybe a",
          "source": "src/Data-Vault-Lazy.html#lookup",
          "type": "function"
        },
        "index": {
          "description": "Lookup the value of key in the vault",
          "hierarchy": "Data Vault Lazy",
          "module": "Data.Vault.Lazy",
          "name": "lookup",
          "normalized": "Key a-\u003eVault-\u003eMaybe a",
          "package": "vault",
          "signature": "Key a-\u003eVault-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vault/docs/Data-Vault-Lazy.html#v:lookup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new key for use with a vault.\n\u003c/p\u003e",
          "module": "Data.Vault.Lazy",
          "name": "newKey",
          "package": "vault",
          "signature": "IO (Key a)",
          "source": "src/Data-Vault-Lazy.html#newKey",
          "type": "function"
        },
        "index": {
          "description": "Create new key for use with vault",
          "hierarchy": "Data Vault Lazy",
          "module": "Data.Vault.Lazy",
          "name": "newKey",
          "package": "vault",
          "partial": "Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vault/docs/Data-Vault-Lazy.html#v:newKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMerge two vaults (left-biased).\n\u003c/p\u003e",
          "module": "Data.Vault.Lazy",
          "name": "union",
          "package": "vault",
          "signature": "Vault -\u003e Vault -\u003e Vault",
          "source": "src/Data-Vault-Lazy.html#union",
          "type": "function"
        },
        "index": {
          "description": "Merge two vaults left-biased",
          "hierarchy": "Data Vault Lazy",
          "module": "Data.Vault.Lazy",
          "name": "union",
          "normalized": "Vault-\u003eVault-\u003eVault",
          "package": "vault",
          "signature": "Vault-\u003eVault-\u003eVault",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vault/docs/Data-Vault-Lazy.html#v:union"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrieve the value from the \u003ccode\u003e\u003ca\u003eLocker\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Vault.Lazy",
          "name": "unlock",
          "package": "vault",
          "signature": "Key a -\u003e Locker -\u003e Maybe a",
          "source": "src/Data-Vault-Lazy.html#unlock",
          "type": "function"
        },
        "index": {
          "description": "Retrieve the value from the Locker",
          "hierarchy": "Data Vault Lazy",
          "module": "Data.Vault.Lazy",
          "name": "unlock",
          "normalized": "Key a-\u003eLocker-\u003eMaybe a",
          "package": "vault",
          "signature": "Key a-\u003eLocker-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vault/docs/Data-Vault-Lazy.html#v:unlock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA persistent store for values of arbitrary types.\n Variant for the \u003ccode\u003e\u003ca\u003eST\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eVault\u003c/a\u003e\u003c/code\u003e type in this module is strict in the keys but lazy in the values.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Vault.ST.Lazy",
          "name": "Lazy",
          "package": "vault",
          "source": "src/Data-Vault-ST-Lazy.html",
          "type": "module"
        },
        "index": {
          "description": "persistent store for values of arbitrary types Variant for the ST monad The Vault type in this module is strict in the keys but lazy in the values",
          "hierarchy": "Data Vault ST Lazy",
          "module": "Data.Vault.ST.Lazy",
          "name": "Lazy",
          "package": "vault",
          "partial": "Lazy",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/vault/docs/Data-Vault-ST-Lazy.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vault.ST.Lazy",
          "name": "Key",
          "package": "vault",
          "source": "src/Data-Vault-ST-Lazy.html#Key",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Vault ST Lazy",
          "module": "Data.Vault.ST.Lazy",
          "name": "Key",
          "package": "vault",
          "partial": "Key",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/vault/docs/Data-Vault-ST-Lazy.html#t:Key"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vault.ST.Lazy",
          "name": "Locker",
          "package": "vault",
          "source": "src/Data-Vault-ST-Lazy.html#Locker",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Vault ST Lazy",
          "module": "Data.Vault.ST.Lazy",
          "name": "Locker",
          "package": "vault",
          "partial": "Locker",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/vault/docs/Data-Vault-ST-Lazy.html#t:Locker"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vault.ST.Lazy",
          "name": "Vault",
          "package": "vault",
          "source": "src/Data-Vault-ST-Lazy.html#Vault",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Vault ST Lazy",
          "module": "Data.Vault.ST.Lazy",
          "name": "Vault",
          "package": "vault",
          "partial": "Vault",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/vault/docs/Data-Vault-ST-Lazy.html#t:Vault"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdjust the value for a given key if it's present in the vault.\n\u003c/p\u003e",
          "module": "Data.Vault.ST.Lazy",
          "name": "adjust",
          "package": "vault",
          "signature": "(a -\u003e a) -\u003e Key s a -\u003e Vault s -\u003e Vault s",
          "source": "src/Data-Vault-ST-Lazy.html#adjust",
          "type": "function"
        },
        "index": {
          "description": "Adjust the value for given key if it present in the vault",
          "hierarchy": "Data Vault ST Lazy",
          "module": "Data.Vault.ST.Lazy",
          "name": "adjust",
          "normalized": "(a-\u003ea)-\u003eKey b a-\u003eVault b-\u003eVault b",
          "package": "vault",
          "signature": "(a-\u003ea)-\u003eKey s a-\u003eVault s-\u003eVault s",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vault/docs/Data-Vault-ST-Lazy.html#v:adjust"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDelete a key from the vault.\n\u003c/p\u003e",
          "module": "Data.Vault.ST.Lazy",
          "name": "delete",
          "package": "vault",
          "signature": "Key s a -\u003e Vault s -\u003e Vault s",
          "source": "src/Data-Vault-ST-Lazy.html#delete",
          "type": "function"
        },
        "index": {
          "description": "Delete key from the vault",
          "hierarchy": "Data Vault ST Lazy",
          "module": "Data.Vault.ST.Lazy",
          "name": "delete",
          "normalized": "Key a b-\u003eVault a-\u003eVault a",
          "package": "vault",
          "signature": "Key s a-\u003eVault s-\u003eVault s",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vault/docs/Data-Vault-ST-Lazy.html#v:delete"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe empty vault.\n\u003c/p\u003e",
          "module": "Data.Vault.ST.Lazy",
          "name": "empty",
          "package": "vault",
          "signature": "Vault s",
          "source": "src/Data-Vault-ST-Lazy.html#empty",
          "type": "function"
        },
        "index": {
          "description": "The empty vault",
          "hierarchy": "Data Vault ST Lazy",
          "module": "Data.Vault.ST.Lazy",
          "name": "empty",
          "package": "vault",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vault/docs/Data-Vault-ST-Lazy.html#v:empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInsert a value for a given key. Overwrites any previous value.\n\u003c/p\u003e",
          "module": "Data.Vault.ST.Lazy",
          "name": "insert",
          "package": "vault",
          "signature": "Key s a -\u003e a -\u003e Vault s -\u003e Vault s",
          "source": "src/Data-Vault-ST-Lazy.html#insert",
          "type": "function"
        },
        "index": {
          "description": "Insert value for given key Overwrites any previous value",
          "hierarchy": "Data Vault ST Lazy",
          "module": "Data.Vault.ST.Lazy",
          "name": "insert",
          "normalized": "Key a b-\u003eb-\u003eVault a-\u003eVault a",
          "package": "vault",
          "signature": "Key s a-\u003ea-\u003eVault s-\u003eVault s",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vault/docs/Data-Vault-ST-Lazy.html#v:insert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePut a single value into a \u003ccode\u003e\u003ca\u003eLocker\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Vault.ST.Lazy",
          "name": "lock",
          "package": "vault",
          "signature": "Key s a -\u003e a -\u003e Locker s",
          "source": "src/Data-Vault-ST-Lazy.html#lock",
          "type": "function"
        },
        "index": {
          "description": "Put single value into Locker",
          "hierarchy": "Data Vault ST Lazy",
          "module": "Data.Vault.ST.Lazy",
          "name": "lock",
          "normalized": "Key a b-\u003eb-\u003eLocker a",
          "package": "vault",
          "signature": "Key s a-\u003ea-\u003eLocker s",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vault/docs/Data-Vault-ST-Lazy.html#v:lock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLookup the value of a key in the vault.\n\u003c/p\u003e",
          "module": "Data.Vault.ST.Lazy",
          "name": "lookup",
          "package": "vault",
          "signature": "Key s a -\u003e Vault s -\u003e Maybe a",
          "source": "src/Data-Vault-ST-Lazy.html#lookup",
          "type": "function"
        },
        "index": {
          "description": "Lookup the value of key in the vault",
          "hierarchy": "Data Vault ST Lazy",
          "module": "Data.Vault.ST.Lazy",
          "name": "lookup",
          "normalized": "Key a b-\u003eVault a-\u003eMaybe b",
          "package": "vault",
          "signature": "Key s a-\u003eVault s-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vault/docs/Data-Vault-ST-Lazy.html#v:lookup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new key for use with a vault.\n\u003c/p\u003e",
          "module": "Data.Vault.ST.Lazy",
          "name": "newKey",
          "package": "vault",
          "signature": "ST s (Key s a)",
          "source": "src/Data-Vault-ST-Lazy.html#newKey",
          "type": "function"
        },
        "index": {
          "description": "Create new key for use with vault",
          "hierarchy": "Data Vault ST Lazy",
          "module": "Data.Vault.ST.Lazy",
          "name": "newKey",
          "package": "vault",
          "partial": "Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vault/docs/Data-Vault-ST-Lazy.html#v:newKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMerge two vaults (left-biased).\n\u003c/p\u003e",
          "module": "Data.Vault.ST.Lazy",
          "name": "union",
          "package": "vault",
          "signature": "Vault s -\u003e Vault s -\u003e Vault s",
          "source": "src/Data-Vault-ST-Lazy.html#union",
          "type": "function"
        },
        "index": {
          "description": "Merge two vaults left-biased",
          "hierarchy": "Data Vault ST Lazy",
          "module": "Data.Vault.ST.Lazy",
          "name": "union",
          "normalized": "Vault a-\u003eVault a-\u003eVault a",
          "package": "vault",
          "signature": "Vault s-\u003eVault s-\u003eVault s",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vault/docs/Data-Vault-ST-Lazy.html#v:union"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrieve the value from the \u003ccode\u003e\u003ca\u003eLocker\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Vault.ST.Lazy",
          "name": "unlock",
          "package": "vault",
          "signature": "Key s a -\u003e Locker s -\u003e Maybe a",
          "source": "src/Data-Vault-ST-Lazy.html#unlock",
          "type": "function"
        },
        "index": {
          "description": "Retrieve the value from the Locker",
          "hierarchy": "Data Vault ST Lazy",
          "module": "Data.Vault.ST.Lazy",
          "name": "unlock",
          "normalized": "Key a b-\u003eLocker a-\u003eMaybe b",
          "package": "vault",
          "signature": "Key s a-\u003eLocker s-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vault/docs/Data-Vault-ST-Lazy.html#v:unlock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA persistent store for values of arbitrary types.\n Variant for the \u003ccode\u003e\u003ca\u003eST\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eVault\u003c/a\u003e\u003c/code\u003e type in this module is strict in both keys and values.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Vault.ST.Strict",
          "name": "Strict",
          "package": "vault",
          "source": "src/Data-Vault-ST-Strict.html",
          "type": "module"
        },
        "index": {
          "description": "persistent store for values of arbitrary types Variant for the ST monad The Vault type in this module is strict in both keys and values",
          "hierarchy": "Data Vault ST Strict",
          "module": "Data.Vault.ST.Strict",
          "name": "Strict",
          "package": "vault",
          "partial": "Strict",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/vault/docs/Data-Vault-ST-Strict.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vault.ST.Strict",
          "name": "Key",
          "package": "vault",
          "source": "src/Data-Vault-ST-Strict.html#Key",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Vault ST Strict",
          "module": "Data.Vault.ST.Strict",
          "name": "Key",
          "package": "vault",
          "partial": "Key",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/vault/docs/Data-Vault-ST-Strict.html#t:Key"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vault.ST.Strict",
          "name": "Locker",
          "package": "vault",
          "source": "src/Data-Vault-ST-Strict.html#Locker",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Vault ST Strict",
          "module": "Data.Vault.ST.Strict",
          "name": "Locker",
          "package": "vault",
          "partial": "Locker",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/vault/docs/Data-Vault-ST-Strict.html#t:Locker"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vault.ST.Strict",
          "name": "Vault",
          "package": "vault",
          "source": "src/Data-Vault-ST-Strict.html#Vault",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Vault ST Strict",
          "module": "Data.Vault.ST.Strict",
          "name": "Vault",
          "package": "vault",
          "partial": "Vault",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/vault/docs/Data-Vault-ST-Strict.html#t:Vault"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdjust the value for a given key if it's present in the vault.\n\u003c/p\u003e",
          "module": "Data.Vault.ST.Strict",
          "name": "adjust",
          "package": "vault",
          "signature": "(a -\u003e a) -\u003e Key s a -\u003e Vault s -\u003e Vault s",
          "source": "src/Data-Vault-ST-Strict.html#adjust",
          "type": "function"
        },
        "index": {
          "description": "Adjust the value for given key if it present in the vault",
          "hierarchy": "Data Vault ST Strict",
          "module": "Data.Vault.ST.Strict",
          "name": "adjust",
          "normalized": "(a-\u003ea)-\u003eKey b a-\u003eVault b-\u003eVault b",
          "package": "vault",
          "signature": "(a-\u003ea)-\u003eKey s a-\u003eVault s-\u003eVault s",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vault/docs/Data-Vault-ST-Strict.html#v:adjust"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDelete a key from the vault.\n\u003c/p\u003e",
          "module": "Data.Vault.ST.Strict",
          "name": "delete",
          "package": "vault",
          "signature": "Key s a -\u003e Vault s -\u003e Vault s",
          "source": "src/Data-Vault-ST-Strict.html#delete",
          "type": "function"
        },
        "index": {
          "description": "Delete key from the vault",
          "hierarchy": "Data Vault ST Strict",
          "module": "Data.Vault.ST.Strict",
          "name": "delete",
          "normalized": "Key a b-\u003eVault a-\u003eVault a",
          "package": "vault",
          "signature": "Key s a-\u003eVault s-\u003eVault s",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vault/docs/Data-Vault-ST-Strict.html#v:delete"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe empty vault.\n\u003c/p\u003e",
          "module": "Data.Vault.ST.Strict",
          "name": "empty",
          "package": "vault",
          "signature": "Vault s",
          "source": "src/Data-Vault-ST-Strict.html#empty",
          "type": "function"
        },
        "index": {
          "description": "The empty vault",
          "hierarchy": "Data Vault ST Strict",
          "module": "Data.Vault.ST.Strict",
          "name": "empty",
          "package": "vault",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vault/docs/Data-Vault-ST-Strict.html#v:empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInsert a value for a given key. Overwrites any previous value.\n\u003c/p\u003e",
          "module": "Data.Vault.ST.Strict",
          "name": "insert",
          "package": "vault",
          "signature": "Key s a -\u003e a -\u003e Vault s -\u003e Vault s",
          "source": "src/Data-Vault-ST-Strict.html#insert",
          "type": "function"
        },
        "index": {
          "description": "Insert value for given key Overwrites any previous value",
          "hierarchy": "Data Vault ST Strict",
          "module": "Data.Vault.ST.Strict",
          "name": "insert",
          "normalized": "Key a b-\u003eb-\u003eVault a-\u003eVault a",
          "package": "vault",
          "signature": "Key s a-\u003ea-\u003eVault s-\u003eVault s",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vault/docs/Data-Vault-ST-Strict.html#v:insert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePut a single value into a \u003ccode\u003e\u003ca\u003eLocker\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Vault.ST.Strict",
          "name": "lock",
          "package": "vault",
          "signature": "Key s a -\u003e a -\u003e Locker s",
          "source": "src/Data-Vault-ST-Strict.html#lock",
          "type": "function"
        },
        "index": {
          "description": "Put single value into Locker",
          "hierarchy": "Data Vault ST Strict",
          "module": "Data.Vault.ST.Strict",
          "name": "lock",
          "normalized": "Key a b-\u003eb-\u003eLocker a",
          "package": "vault",
          "signature": "Key s a-\u003ea-\u003eLocker s",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vault/docs/Data-Vault-ST-Strict.html#v:lock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLookup the value of a key in the vault.\n\u003c/p\u003e",
          "module": "Data.Vault.ST.Strict",
          "name": "lookup",
          "package": "vault",
          "signature": "Key s a -\u003e Vault s -\u003e Maybe a",
          "source": "src/Data-Vault-ST-Strict.html#lookup",
          "type": "function"
        },
        "index": {
          "description": "Lookup the value of key in the vault",
          "hierarchy": "Data Vault ST Strict",
          "module": "Data.Vault.ST.Strict",
          "name": "lookup",
          "normalized": "Key a b-\u003eVault a-\u003eMaybe b",
          "package": "vault",
          "signature": "Key s a-\u003eVault s-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vault/docs/Data-Vault-ST-Strict.html#v:lookup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new key for use with a vault.\n\u003c/p\u003e",
          "module": "Data.Vault.ST.Strict",
          "name": "newKey",
          "package": "vault",
          "signature": "ST s (Key s a)",
          "source": "src/Data-Vault-ST-Strict.html#newKey",
          "type": "function"
        },
        "index": {
          "description": "Create new key for use with vault",
          "hierarchy": "Data Vault ST Strict",
          "module": "Data.Vault.ST.Strict",
          "name": "newKey",
          "package": "vault",
          "partial": "Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vault/docs/Data-Vault-ST-Strict.html#v:newKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMerge two vaults (left-biased).\n\u003c/p\u003e",
          "module": "Data.Vault.ST.Strict",
          "name": "union",
          "package": "vault",
          "signature": "Vault s -\u003e Vault s -\u003e Vault s",
          "source": "src/Data-Vault-ST-Strict.html#union",
          "type": "function"
        },
        "index": {
          "description": "Merge two vaults left-biased",
          "hierarchy": "Data Vault ST Strict",
          "module": "Data.Vault.ST.Strict",
          "name": "union",
          "normalized": "Vault a-\u003eVault a-\u003eVault a",
          "package": "vault",
          "signature": "Vault s-\u003eVault s-\u003eVault s",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vault/docs/Data-Vault-ST-Strict.html#v:union"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrieve the value from the \u003ccode\u003e\u003ca\u003eLocker\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Vault.ST.Strict",
          "name": "unlock",
          "package": "vault",
          "signature": "Key s a -\u003e Locker s -\u003e Maybe a",
          "source": "src/Data-Vault-ST-Strict.html#unlock",
          "type": "function"
        },
        "index": {
          "description": "Retrieve the value from the Locker",
          "hierarchy": "Data Vault ST Strict",
          "module": "Data.Vault.ST.Strict",
          "name": "unlock",
          "normalized": "Key a b-\u003eLocker a-\u003eMaybe b",
          "package": "vault",
          "signature": "Key s a-\u003eLocker s-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vault/docs/Data-Vault-ST-Strict.html#v:unlock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA persistent store for values of arbitrary types.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eVault\u003c/a\u003e\u003c/code\u003e type in this module is strict in both keys and values.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Vault.Strict",
          "name": "Strict",
          "package": "vault",
          "source": "src/Data-Vault-Strict.html",
          "type": "module"
        },
        "index": {
          "description": "persistent store for values of arbitrary types The Vault type in this module is strict in both keys and values",
          "hierarchy": "Data Vault Strict",
          "module": "Data.Vault.Strict",
          "name": "Strict",
          "package": "vault",
          "partial": "Strict",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/vault/docs/Data-Vault-Strict.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eKeys for the vault.\n\u003c/p\u003e",
          "module": "Data.Vault.Strict",
          "name": "Key",
          "package": "vault",
          "source": "src/Data-Vault-Strict.html#Key",
          "type": "type"
        },
        "index": {
          "description": "Keys for the vault",
          "hierarchy": "Data Vault Strict",
          "module": "Data.Vault.Strict",
          "name": "Key",
          "package": "vault",
          "partial": "Key",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/vault/docs/Data-Vault-Strict.html#t:Key"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA persistent store for a single value.\n\u003c/p\u003e",
          "module": "Data.Vault.Strict",
          "name": "Locker",
          "package": "vault",
          "source": "src/Data-Vault-Strict.html#Locker",
          "type": "type"
        },
        "index": {
          "description": "persistent store for single value",
          "hierarchy": "Data Vault Strict",
          "module": "Data.Vault.Strict",
          "name": "Locker",
          "package": "vault",
          "partial": "Locker",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/vault/docs/Data-Vault-Strict.html#t:Locker"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA persistent store for values of arbitrary types.\n\u003c/p\u003e\u003cp\u003eThis variant is the simplest and creates keys in the \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e monad.\n See the module \u003ca\u003eData.Vault.ST\u003c/a\u003e if you want to use it with the \u003ccode\u003e\u003ca\u003eST\u003c/a\u003e\u003c/code\u003e monad instead.\n\u003c/p\u003e",
          "module": "Data.Vault.Strict",
          "name": "Vault",
          "package": "vault",
          "source": "src/Data-Vault-Strict.html#Vault",
          "type": "type"
        },
        "index": {
          "description": "persistent store for values of arbitrary types This variant is the simplest and creates keys in the IO monad See the module Data.Vault.ST if you want to use it with the ST monad instead",
          "hierarchy": "Data Vault Strict",
          "module": "Data.Vault.Strict",
          "name": "Vault",
          "package": "vault",
          "partial": "Vault",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/vault/docs/Data-Vault-Strict.html#t:Vault"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdjust the value for a given key if it's present in the vault.\n\u003c/p\u003e",
          "module": "Data.Vault.Strict",
          "name": "adjust",
          "package": "vault",
          "signature": "(a -\u003e a) -\u003e Key a -\u003e Vault -\u003e Vault",
          "source": "src/Data-Vault-Strict.html#adjust",
          "type": "function"
        },
        "index": {
          "description": "Adjust the value for given key if it present in the vault",
          "hierarchy": "Data Vault Strict",
          "module": "Data.Vault.Strict",
          "name": "adjust",
          "normalized": "(a-\u003ea)-\u003eKey a-\u003eVault-\u003eVault",
          "package": "vault",
          "signature": "(a-\u003ea)-\u003eKey a-\u003eVault-\u003eVault",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vault/docs/Data-Vault-Strict.html#v:adjust"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDelete a key from the vault.\n\u003c/p\u003e",
          "module": "Data.Vault.Strict",
          "name": "delete",
          "package": "vault",
          "signature": "Key a -\u003e Vault -\u003e Vault",
          "source": "src/Data-Vault-Strict.html#delete",
          "type": "function"
        },
        "index": {
          "description": "Delete key from the vault",
          "hierarchy": "Data Vault Strict",
          "module": "Data.Vault.Strict",
          "name": "delete",
          "normalized": "Key a-\u003eVault-\u003eVault",
          "package": "vault",
          "signature": "Key a-\u003eVault-\u003eVault",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vault/docs/Data-Vault-Strict.html#v:delete"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe empty vault.\n\u003c/p\u003e",
          "module": "Data.Vault.Strict",
          "name": "empty",
          "package": "vault",
          "signature": "Vault",
          "source": "src/Data-Vault-Strict.html#empty",
          "type": "function"
        },
        "index": {
          "description": "The empty vault",
          "hierarchy": "Data Vault Strict",
          "module": "Data.Vault.Strict",
          "name": "empty",
          "package": "vault",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vault/docs/Data-Vault-Strict.html#v:empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInsert a value for a given key. Overwrites any previous value.\n\u003c/p\u003e",
          "module": "Data.Vault.Strict",
          "name": "insert",
          "package": "vault",
          "signature": "Key a -\u003e a -\u003e Vault -\u003e Vault",
          "source": "src/Data-Vault-Strict.html#insert",
          "type": "function"
        },
        "index": {
          "description": "Insert value for given key Overwrites any previous value",
          "hierarchy": "Data Vault Strict",
          "module": "Data.Vault.Strict",
          "name": "insert",
          "normalized": "Key a-\u003ea-\u003eVault-\u003eVault",
          "package": "vault",
          "signature": "Key a-\u003ea-\u003eVault-\u003eVault",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vault/docs/Data-Vault-Strict.html#v:insert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePut a single value into a \u003ccode\u003e\u003ca\u003eLocker\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Vault.Strict",
          "name": "lock",
          "package": "vault",
          "signature": "Key a -\u003e a -\u003e Locker",
          "source": "src/Data-Vault-Strict.html#lock",
          "type": "function"
        },
        "index": {
          "description": "Put single value into Locker",
          "hierarchy": "Data Vault Strict",
          "module": "Data.Vault.Strict",
          "name": "lock",
          "normalized": "Key a-\u003ea-\u003eLocker",
          "package": "vault",
          "signature": "Key a-\u003ea-\u003eLocker",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vault/docs/Data-Vault-Strict.html#v:lock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLookup the value of a key in the vault.\n\u003c/p\u003e",
          "module": "Data.Vault.Strict",
          "name": "lookup",
          "package": "vault",
          "signature": "Key a -\u003e Vault -\u003e Maybe a",
          "source": "src/Data-Vault-Strict.html#lookup",
          "type": "function"
        },
        "index": {
          "description": "Lookup the value of key in the vault",
          "hierarchy": "Data Vault Strict",
          "module": "Data.Vault.Strict",
          "name": "lookup",
          "normalized": "Key a-\u003eVault-\u003eMaybe a",
          "package": "vault",
          "signature": "Key a-\u003eVault-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vault/docs/Data-Vault-Strict.html#v:lookup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new key for use with a vault.\n\u003c/p\u003e",
          "module": "Data.Vault.Strict",
          "name": "newKey",
          "package": "vault",
          "signature": "IO (Key a)",
          "source": "src/Data-Vault-Strict.html#newKey",
          "type": "function"
        },
        "index": {
          "description": "Create new key for use with vault",
          "hierarchy": "Data Vault Strict",
          "module": "Data.Vault.Strict",
          "name": "newKey",
          "package": "vault",
          "partial": "Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vault/docs/Data-Vault-Strict.html#v:newKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMerge two vaults (left-biased).\n\u003c/p\u003e",
          "module": "Data.Vault.Strict",
          "name": "union",
          "package": "vault",
          "signature": "Vault -\u003e Vault -\u003e Vault",
          "source": "src/Data-Vault-Strict.html#union",
          "type": "function"
        },
        "index": {
          "description": "Merge two vaults left-biased",
          "hierarchy": "Data Vault Strict",
          "module": "Data.Vault.Strict",
          "name": "union",
          "normalized": "Vault-\u003eVault-\u003eVault",
          "package": "vault",
          "signature": "Vault-\u003eVault-\u003eVault",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vault/docs/Data-Vault-Strict.html#v:union"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrieve the value from the \u003ccode\u003e\u003ca\u003eLocker\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Vault.Strict",
          "name": "unlock",
          "package": "vault",
          "signature": "Key a -\u003e Locker -\u003e Maybe a",
          "source": "src/Data-Vault-Strict.html#unlock",
          "type": "function"
        },
        "index": {
          "description": "Retrieve the value from the Locker",
          "hierarchy": "Data Vault Strict",
          "module": "Data.Vault.Strict",
          "name": "unlock",
          "normalized": "Key a-\u003eLocker-\u003eMaybe a",
          "package": "vault",
          "signature": "Key a-\u003eLocker-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vault/docs/Data-Vault-Strict.html#v:unlock"
      }
    }
  ]
]