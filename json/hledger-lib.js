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
        "word": "hledger-lib"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAn \u003ccode\u003e\u003ca\u003eAccount\u003c/a\u003e\u003c/code\u003e has a name, a list of subaccounts, an optional parent\naccount, and subaccounting-excluding and -including balances.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Hledger.Data.Account",
          "name": "Account",
          "package": "hledger-lib",
          "source": "src/Hledger-Data-Account.html",
          "type": "module"
        },
        "index": {
          "description": "An Account has name list of subaccounts an optional parent account and subaccounting-excluding and including balances",
          "hierarchy": "Hledger Data Account",
          "module": "Hledger.Data.Account",
          "name": "Account",
          "package": "hledger-lib",
          "partial": "Account",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Account.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDerive 1. an account tree and 2. their balances from a list of postings.\n (ledger's core feature). The accounts are returned in a list, but\n retain their tree structure; the first one is the root of the tree.\n\u003c/p\u003e",
          "module": "Hledger.Data.Account",
          "name": "accountsFromPostings",
          "package": "hledger-lib",
          "signature": "[Posting] -\u003e [Account]",
          "source": "src/Hledger-Data-Account.html#accountsFromPostings",
          "type": "function"
        },
        "index": {
          "description": "Derive an account tree and their balances from list of postings ledger core feature The accounts are returned in list but retain their tree structure the first one is the root of the tree",
          "hierarchy": "Hledger Data Account",
          "module": "Hledger.Data.Account",
          "name": "accountsFromPostings",
          "normalized": "[Posting]-\u003e[Account]",
          "package": "hledger-lib",
          "partial": "From Postings",
          "signature": "[Posting]-\u003e[Account]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Account.html#v:accountsFromPostings"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eList the accounts at each level of the account tree.\n\u003c/p\u003e",
          "module": "Hledger.Data.Account",
          "name": "accountsLevels",
          "package": "hledger-lib",
          "signature": "Account -\u003e [[Account]]",
          "source": "src/Hledger-Data-Account.html#accountsLevels",
          "type": "function"
        },
        "index": {
          "description": "List the accounts at each level of the account tree",
          "hierarchy": "Hledger Data Account",
          "module": "Hledger.Data.Account",
          "name": "accountsLevels",
          "normalized": "Account-\u003e[[Account]]",
          "package": "hledger-lib",
          "partial": "Levels",
          "signature": "Account-\u003e[[Account]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Account.html#v:accountsLevels"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIs the predicate true on any of this account or its subaccounts ?\n\u003c/p\u003e",
          "module": "Hledger.Data.Account",
          "name": "anyAccounts",
          "package": "hledger-lib",
          "signature": "(Account -\u003e Bool) -\u003e Account -\u003e Bool",
          "source": "src/Hledger-Data-Account.html#anyAccounts",
          "type": "function"
        },
        "index": {
          "description": "Is the predicate true on any of this account or its subaccounts",
          "hierarchy": "Hledger Data Account",
          "module": "Hledger.Data.Account",
          "name": "anyAccounts",
          "normalized": "(Account-\u003eBool)-\u003eAccount-\u003eBool",
          "package": "hledger-lib",
          "partial": "Accounts",
          "signature": "(Account-\u003eBool)-\u003eAccount-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Account.html#v:anyAccounts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemove all subaccounts below a certain depth.\n\u003c/p\u003e",
          "module": "Hledger.Data.Account",
          "name": "clipAccounts",
          "package": "hledger-lib",
          "signature": "Int -\u003e Account -\u003e Account",
          "source": "src/Hledger-Data-Account.html#clipAccounts",
          "type": "function"
        },
        "index": {
          "description": "Remove all subaccounts below certain depth",
          "hierarchy": "Hledger Data Account",
          "module": "Hledger.Data.Account",
          "name": "clipAccounts",
          "normalized": "Int-\u003eAccount-\u003eAccount",
          "package": "hledger-lib",
          "partial": "Accounts",
          "signature": "Int-\u003eAccount-\u003eAccount",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Account.html#v:clipAccounts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFilter an account tree (to a list).\n\u003c/p\u003e",
          "module": "Hledger.Data.Account",
          "name": "filterAccounts",
          "package": "hledger-lib",
          "signature": "(Account -\u003e Bool) -\u003e Account -\u003e [Account]",
          "source": "src/Hledger-Data-Account.html#filterAccounts",
          "type": "function"
        },
        "index": {
          "description": "Filter an account tree to list",
          "hierarchy": "Hledger Data Account",
          "module": "Hledger.Data.Account",
          "name": "filterAccounts",
          "normalized": "(Account-\u003eBool)-\u003eAccount-\u003e[Account]",
          "package": "hledger-lib",
          "partial": "Accounts",
          "signature": "(Account-\u003eBool)-\u003eAccount-\u003e[Account]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Account.html#v:filterAccounts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFlatten an account tree into a list, which is sometimes\n convenient. Note since accounts link to their parents/subs, the\n account tree remains intact and can still be used. It's a tree/list!\n\u003c/p\u003e",
          "module": "Hledger.Data.Account",
          "name": "flattenAccounts",
          "package": "hledger-lib",
          "signature": "Account -\u003e [Account]",
          "source": "src/Hledger-Data-Account.html#flattenAccounts",
          "type": "function"
        },
        "index": {
          "description": "Flatten an account tree into list which is sometimes convenient Note since accounts link to their parents subs the account tree remains intact and can still be used It tree list",
          "hierarchy": "Hledger Data Account",
          "module": "Hledger.Data.Account",
          "name": "flattenAccounts",
          "normalized": "Account-\u003e[Account]",
          "package": "hledger-lib",
          "partial": "Accounts",
          "signature": "Account-\u003e[Account]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Account.html#v:flattenAccounts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSearch an account list by name.\n\u003c/p\u003e",
          "module": "Hledger.Data.Account",
          "name": "lookupAccount",
          "package": "hledger-lib",
          "signature": "AccountName -\u003e [Account] -\u003e Maybe Account",
          "source": "src/Hledger-Data-Account.html#lookupAccount",
          "type": "function"
        },
        "index": {
          "description": "Search an account list by name",
          "hierarchy": "Hledger Data Account",
          "module": "Hledger.Data.Account",
          "name": "lookupAccount",
          "normalized": "AccountName-\u003e[Account]-\u003eMaybe Account",
          "package": "hledger-lib",
          "partial": "Account",
          "signature": "AccountName-\u003e[Account]-\u003eMaybe Account",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Account.html#v:lookupAccount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap a (non-tree-structure-modifying) function over this and sub accounts.\n\u003c/p\u003e",
          "module": "Hledger.Data.Account",
          "name": "mapAccounts",
          "package": "hledger-lib",
          "signature": "(Account -\u003e Account) -\u003e Account -\u003e Account",
          "source": "src/Hledger-Data-Account.html#mapAccounts",
          "type": "function"
        },
        "index": {
          "description": "Map non-tree-structure-modifying function over this and sub accounts",
          "hierarchy": "Hledger Data Account",
          "module": "Hledger.Data.Account",
          "name": "mapAccounts",
          "normalized": "(Account-\u003eAccount)-\u003eAccount-\u003eAccount",
          "package": "hledger-lib",
          "partial": "Accounts",
          "signature": "(Account-\u003eAccount)-\u003eAccount-\u003eAccount",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Account.html#v:mapAccounts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert an AccountName tree to an Account tree\n\u003c/p\u003e",
          "module": "Hledger.Data.Account",
          "name": "nameTreeToAccount",
          "package": "hledger-lib",
          "signature": "AccountName -\u003e FastTree AccountName -\u003e Account",
          "source": "src/Hledger-Data-Account.html#nameTreeToAccount",
          "type": "function"
        },
        "index": {
          "description": "Convert an AccountName tree to an Account tree",
          "hierarchy": "Hledger Data Account",
          "module": "Hledger.Data.Account",
          "name": "nameTreeToAccount",
          "normalized": "AccountName-\u003eFastTree AccountName-\u003eAccount",
          "package": "hledger-lib",
          "partial": "Tree To Account",
          "signature": "AccountName-\u003eFastTree AccountName-\u003eAccount",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Account.html#v:nameTreeToAccount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Data.Account",
          "name": "nullacct",
          "package": "hledger-lib",
          "signature": "Account",
          "source": "src/Hledger-Data-Account.html#nullacct",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Data Account",
          "module": "Hledger.Data.Account",
          "name": "nullacct",
          "package": "hledger-lib",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Account.html#v:nullacct"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet this account's parent accounts, from the nearest up to the root.\n\u003c/p\u003e",
          "module": "Hledger.Data.Account",
          "name": "parentAccounts",
          "package": "hledger-lib",
          "signature": "Account -\u003e [Account]",
          "source": "src/Hledger-Data-Account.html#parentAccounts",
          "type": "function"
        },
        "index": {
          "description": "Get this account parent accounts from the nearest up to the root",
          "hierarchy": "Hledger Data Account",
          "module": "Hledger.Data.Account",
          "name": "parentAccounts",
          "normalized": "Account-\u003e[Account]",
          "package": "hledger-lib",
          "partial": "Accounts",
          "signature": "Account-\u003e[Account]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Account.html#v:parentAccounts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Data.Account",
          "name": "printAccounts",
          "package": "hledger-lib",
          "signature": "Account -\u003e IO ()",
          "source": "src/Hledger-Data-Account.html#printAccounts",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Data Account",
          "module": "Hledger.Data.Account",
          "name": "printAccounts",
          "normalized": "Account-\u003eIO()",
          "package": "hledger-lib",
          "partial": "Accounts",
          "signature": "Account-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Account.html#v:printAccounts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemove all leaf accounts and subtrees matching a predicate.\n\u003c/p\u003e",
          "module": "Hledger.Data.Account",
          "name": "pruneAccounts",
          "package": "hledger-lib",
          "signature": "(Account -\u003e Bool) -\u003e Account -\u003e Maybe Account",
          "source": "src/Hledger-Data-Account.html#pruneAccounts",
          "type": "function"
        },
        "index": {
          "description": "Remove all leaf accounts and subtrees matching predicate",
          "hierarchy": "Hledger Data Account",
          "module": "Hledger.Data.Account",
          "name": "pruneAccounts",
          "normalized": "(Account-\u003eBool)-\u003eAccount-\u003eMaybe Account",
          "package": "hledger-lib",
          "partial": "Accounts",
          "signature": "(Account-\u003eBool)-\u003eAccount-\u003eMaybe Account",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Account.html#v:pruneAccounts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Data.Account",
          "name": "showAccountDebug",
          "package": "hledger-lib",
          "signature": "Account -\u003e t",
          "source": "src/Hledger-Data-Account.html#showAccountDebug",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Data Account",
          "module": "Hledger.Data.Account",
          "name": "showAccountDebug",
          "normalized": "Account-\u003ea",
          "package": "hledger-lib",
          "partial": "Account Debug",
          "signature": "Account-\u003et",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Account.html#v:showAccountDebug"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Data.Account",
          "name": "showAccounts",
          "package": "hledger-lib",
          "signature": "Account -\u003e String",
          "source": "src/Hledger-Data-Account.html#showAccounts",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Data Account",
          "module": "Hledger.Data.Account",
          "name": "showAccounts",
          "normalized": "Account-\u003eString",
          "package": "hledger-lib",
          "partial": "Accounts",
          "signature": "Account-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Account.html#v:showAccounts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Data.Account",
          "name": "showAccountsBoringFlag",
          "package": "hledger-lib",
          "signature": "Account -\u003e String",
          "source": "src/Hledger-Data-Account.html#showAccountsBoringFlag",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Data Account",
          "module": "Hledger.Data.Account",
          "name": "showAccountsBoringFlag",
          "normalized": "Account-\u003eString",
          "package": "hledger-lib",
          "partial": "Accounts Boring Flag",
          "signature": "Account-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Account.html#v:showAccountsBoringFlag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd subaccount-inclusive balances to an account tree.\n\u003c/p\u003e",
          "module": "Hledger.Data.Account",
          "name": "sumAccounts",
          "package": "hledger-lib",
          "signature": "Account -\u003e Account",
          "source": "src/Hledger-Data-Account.html#sumAccounts",
          "type": "function"
        },
        "index": {
          "description": "Add subaccount-inclusive balances to an account tree",
          "hierarchy": "Hledger Data Account",
          "module": "Hledger.Data.Account",
          "name": "sumAccounts",
          "normalized": "Account-\u003eAccount",
          "package": "hledger-lib",
          "partial": "Accounts",
          "signature": "Account-\u003eAccount",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Account.html#v:sumAccounts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Data.Account",
          "name": "tests_Hledger_Data_Account",
          "package": "hledger-lib",
          "signature": "Test",
          "source": "src/Hledger-Data-Account.html#tests_Hledger_Data_Account",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Data Account",
          "module": "Hledger.Data.Account",
          "name": "tests_Hledger_Data_Account",
          "package": "hledger-lib",
          "partial": "Hledger Data Account",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Account.html#v:tests_Hledger_Data_Account"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTie the knot so all subaccounts' parents are set correctly.\n\u003c/p\u003e",
          "module": "Hledger.Data.Account",
          "name": "tieAccountParents",
          "package": "hledger-lib",
          "signature": "Account -\u003e Account",
          "source": "src/Hledger-Data-Account.html#tieAccountParents",
          "type": "function"
        },
        "index": {
          "description": "Tie the knot so all subaccounts parents are set correctly",
          "hierarchy": "Hledger Data Account",
          "module": "Hledger.Data.Account",
          "name": "tieAccountParents",
          "normalized": "Account-\u003eAccount",
          "package": "hledger-lib",
          "partial": "Account Parents",
          "signature": "Account-\u003eAccount",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Account.html#v:tieAccountParents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eAccountName\u003c/a\u003e\u003c/code\u003es are strings like \u003ccode\u003eassets:cash:petty\u003c/code\u003e, with multiple\ncomponents separated by \u003ccode\u003e:\u003c/code\u003e.  From a set of these we derive the account\nhierarchy.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Hledger.Data.AccountName",
          "name": "AccountName",
          "package": "hledger-lib",
          "source": "src/Hledger-Data-AccountName.html",
          "type": "module"
        },
        "index": {
          "description": "AccountName are strings like assets cash petty with multiple components separated by From set of these we derive the account hierarchy",
          "hierarchy": "Hledger Data AccountName",
          "module": "Hledger.Data.AccountName",
          "name": "AccountName",
          "package": "hledger-lib",
          "partial": "Account Name",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-AccountName.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Data.AccountName",
          "name": "accountLeafName",
          "package": "hledger-lib",
          "signature": "AccountName -\u003e String",
          "source": "src/Hledger-Data-AccountName.html#accountLeafName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Data AccountName",
          "module": "Hledger.Data.AccountName",
          "name": "accountLeafName",
          "normalized": "AccountName-\u003eString",
          "package": "hledger-lib",
          "partial": "Leaf Name",
          "signature": "AccountName-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-AccountName.html#v:accountLeafName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Data.AccountName",
          "name": "accountNameComponents",
          "package": "hledger-lib",
          "signature": "AccountName -\u003e [String]",
          "source": "src/Hledger-Data-AccountName.html#accountNameComponents",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Data AccountName",
          "module": "Hledger.Data.AccountName",
          "name": "accountNameComponents",
          "normalized": "AccountName-\u003e[String]",
          "package": "hledger-lib",
          "partial": "Name Components",
          "signature": "AccountName-\u003e[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-AccountName.html#v:accountNameComponents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Data.AccountName",
          "name": "accountNameDrop",
          "package": "hledger-lib",
          "signature": "Int -\u003e AccountName -\u003e AccountName",
          "source": "src/Hledger-Data-AccountName.html#accountNameDrop",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Data AccountName",
          "module": "Hledger.Data.AccountName",
          "name": "accountNameDrop",
          "normalized": "Int-\u003eAccountName-\u003eAccountName",
          "package": "hledger-lib",
          "partial": "Name Drop",
          "signature": "Int-\u003eAccountName-\u003eAccountName",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-AccountName.html#v:accountNameDrop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Data.AccountName",
          "name": "accountNameFromComponents",
          "package": "hledger-lib",
          "signature": "[String] -\u003e AccountName",
          "source": "src/Hledger-Data-AccountName.html#accountNameFromComponents",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Data AccountName",
          "module": "Hledger.Data.AccountName",
          "name": "accountNameFromComponents",
          "normalized": "[String]-\u003eAccountName",
          "package": "hledger-lib",
          "partial": "Name From Components",
          "signature": "[String]-\u003eAccountName",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-AccountName.html#v:accountNameFromComponents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Data.AccountName",
          "name": "accountNameLevel",
          "package": "hledger-lib",
          "signature": "AccountName -\u003e Int",
          "source": "src/Hledger-Data-AccountName.html#accountNameLevel",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Data AccountName",
          "module": "Hledger.Data.AccountName",
          "name": "accountNameLevel",
          "normalized": "AccountName-\u003eInt",
          "package": "hledger-lib",
          "partial": "Name Level",
          "signature": "AccountName-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-AccountName.html#v:accountNameLevel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert an account name to a regular expression matching it but not its subaccounts.\n\u003c/p\u003e",
          "module": "Hledger.Data.AccountName",
          "name": "accountNameToAccountOnlyRegex",
          "package": "hledger-lib",
          "signature": "String -\u003e String",
          "source": "src/Hledger-Data-AccountName.html#accountNameToAccountOnlyRegex",
          "type": "function"
        },
        "index": {
          "description": "Convert an account name to regular expression matching it but not its subaccounts",
          "hierarchy": "Hledger Data AccountName",
          "module": "Hledger.Data.AccountName",
          "name": "accountNameToAccountOnlyRegex",
          "normalized": "String-\u003eString",
          "package": "hledger-lib",
          "partial": "Name To Account Only Regex",
          "signature": "String-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-AccountName.html#v:accountNameToAccountOnlyRegex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert an account name to a regular expression matching it and its subaccounts.\n\u003c/p\u003e",
          "module": "Hledger.Data.AccountName",
          "name": "accountNameToAccountRegex",
          "package": "hledger-lib",
          "signature": "String -\u003e String",
          "source": "src/Hledger-Data-AccountName.html#accountNameToAccountRegex",
          "type": "function"
        },
        "index": {
          "description": "Convert an account name to regular expression matching it and its subaccounts",
          "hierarchy": "Hledger Data AccountName",
          "module": "Hledger.Data.AccountName",
          "name": "accountNameToAccountRegex",
          "normalized": "String-\u003eString",
          "package": "hledger-lib",
          "partial": "Name To Account Regex",
          "signature": "String-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-AccountName.html#v:accountNameToAccountRegex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a list of account names to a tree.\n\u003c/p\u003e",
          "module": "Hledger.Data.AccountName",
          "name": "accountNameTreeFrom",
          "package": "hledger-lib",
          "signature": "[AccountName] -\u003e Tree AccountName",
          "source": "src/Hledger-Data-AccountName.html#accountNameTreeFrom",
          "type": "function"
        },
        "index": {
          "description": "Convert list of account names to tree",
          "hierarchy": "Hledger Data AccountName",
          "module": "Hledger.Data.AccountName",
          "name": "accountNameTreeFrom",
          "normalized": "[AccountName]-\u003eTree AccountName",
          "package": "hledger-lib",
          "partial": "Name Tree From",
          "signature": "[AccountName]-\u003eTree AccountName",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-AccountName.html#v:accountNameTreeFrom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert an exact account-matching regular expression to a plain account name.\n\u003c/p\u003e",
          "module": "Hledger.Data.AccountName",
          "name": "accountRegexToAccountName",
          "package": "hledger-lib",
          "signature": "String -\u003e String",
          "source": "src/Hledger-Data-AccountName.html#accountRegexToAccountName",
          "type": "function"
        },
        "index": {
          "description": "Convert an exact account-matching regular expression to plain account name",
          "hierarchy": "Hledger Data AccountName",
          "module": "Hledger.Data.AccountName",
          "name": "accountRegexToAccountName",
          "normalized": "String-\u003eString",
          "package": "hledger-lib",
          "partial": "Regex To Account Name",
          "signature": "String-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-AccountName.html#v:accountRegexToAccountName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Data.AccountName",
          "name": "acctsepchar",
          "package": "hledger-lib",
          "signature": "Char",
          "source": "src/Hledger-Data-AccountName.html#acctsepchar",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Data AccountName",
          "module": "Hledger.Data.AccountName",
          "name": "acctsepchar",
          "package": "hledger-lib",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-AccountName.html#v:acctsepchar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Data.AccountName",
          "name": "clipAccountName",
          "package": "hledger-lib",
          "signature": "Int -\u003e AccountName -\u003e AccountName",
          "source": "src/Hledger-Data-AccountName.html#clipAccountName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Data AccountName",
          "module": "Hledger.Data.AccountName",
          "name": "clipAccountName",
          "normalized": "Int-\u003eAccountName-\u003eAccountName",
          "package": "hledger-lib",
          "partial": "Account Name",
          "signature": "Int-\u003eAccountName-\u003eAccountName",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-AccountName.html#v:clipAccountName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eElide an account name to fit in the specified width.\n From the ledger 2.6 news:\n\u003c/p\u003e\u003cpre\u003e\n   What Ledger now does is that if an account name is too long, it will\n   start abbreviating the first parts of the account name down to two\n   letters in length.  If this results in a string that is still too\n   long, the front will be elided -- not the end.  For example:\n\nExpenses:Cash           ; OK, not too long\n     Ex:Wednesday:Cash       ; \u003ca\u003eExpenses\u003c/a\u003e was abbreviated to fit\n     Ex:We:Afternoon:Cash    ; \u003ca\u003eExpenses\u003c/a\u003e and \u003ca\u003eWednesday\u003c/a\u003e abbreviated\n     ; Expenses:Wednesday:Afternoon:Lunch:Snack:Candy:Chocolate:Cash\n     ..:Af:Lu:Sn:Ca:Ch:Cash  ; Abbreviated and elided!\n\u003c/pre\u003e",
          "module": "Hledger.Data.AccountName",
          "name": "elideAccountName",
          "package": "hledger-lib",
          "signature": "Int -\u003e AccountName -\u003e AccountName",
          "source": "src/Hledger-Data-AccountName.html#elideAccountName",
          "type": "function"
        },
        "index": {
          "description": "Elide an account name to fit in the specified width From the ledger news What Ledger now does is that if an account name is too long it will start abbreviating the first parts of the account name down to two letters in length If this results in string that is still too long the front will be elided not the end For example Expenses Cash OK not too long Ex Wednesday Cash Expenses was abbreviated to fit Ex We Afternoon Cash Expenses and Wednesday abbreviated Expenses Wednesday Afternoon Lunch Snack Candy Chocolate Cash Af Lu Sn Ca Ch Cash Abbreviated and elided",
          "hierarchy": "Hledger Data AccountName",
          "module": "Hledger.Data.AccountName",
          "name": "elideAccountName",
          "normalized": "Int-\u003eAccountName-\u003eAccountName",
          "package": "hledger-lib",
          "partial": "Account Name",
          "signature": "Int-\u003eAccountName-\u003eAccountName",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-AccountName.html#v:elideAccountName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ca\u003ea:b:c\u003c/a\u003e -\u003e [\u003ca\u003ea\u003c/a\u003e,\u003ca\u003ea:b\u003c/a\u003e,\u003ca\u003ea:b:c\u003c/a\u003e]\n\u003c/p\u003e",
          "module": "Hledger.Data.AccountName",
          "name": "expandAccountName",
          "package": "hledger-lib",
          "signature": "AccountName -\u003e [AccountName]",
          "source": "src/Hledger-Data-AccountName.html#expandAccountName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Data AccountName",
          "module": "Hledger.Data.AccountName",
          "name": "expandAccountName",
          "normalized": "AccountName-\u003e[AccountName]",
          "package": "hledger-lib",
          "partial": "Account Name",
          "signature": "AccountName-\u003e[AccountName]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-AccountName.html#v:expandAccountName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdl\u003e\u003cdt\u003e\u003ca\u003ea:b:c\u003c/a\u003e,\u003ca\u003ed:e\u003c/a\u003e\u003c/dt\u003e\u003cdd\u003e -\u003e [\u003ca\u003ea\u003c/a\u003e,\u003ca\u003ea:b\u003c/a\u003e,\u003ca\u003ea:b:c\u003c/a\u003e,\u003ca\u003ed\u003c/a\u003e,\u003ca\u003ed:e\u003c/a\u003e]\n\u003c/dd\u003e\u003c/dl\u003e",
          "module": "Hledger.Data.AccountName",
          "name": "expandAccountNames",
          "package": "hledger-lib",
          "signature": "[AccountName] -\u003e [AccountName]",
          "source": "src/Hledger-Data-AccountName.html#expandAccountNames",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Data AccountName",
          "module": "Hledger.Data.AccountName",
          "name": "expandAccountNames",
          "normalized": "[AccountName]-\u003e[AccountName]",
          "package": "hledger-lib",
          "partial": "Account Names",
          "signature": "[AccountName]-\u003e[AccountName]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-AccountName.html#v:expandAccountNames"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Data.AccountName",
          "name": "isAccountNamePrefixOf",
          "package": "hledger-lib",
          "signature": "AccountName -\u003e AccountName -\u003e Bool",
          "source": "src/Hledger-Data-AccountName.html#isAccountNamePrefixOf",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Data AccountName",
          "module": "Hledger.Data.AccountName",
          "name": "isAccountNamePrefixOf",
          "normalized": "AccountName-\u003eAccountName-\u003eBool",
          "package": "hledger-lib",
          "partial": "Account Name Prefix Of",
          "signature": "AccountName-\u003eAccountName-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-AccountName.html#v:isAccountNamePrefixOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDoes this string look like an exact account-matching regular expression ?\n\u003c/p\u003e",
          "module": "Hledger.Data.AccountName",
          "name": "isAccountRegex",
          "package": "hledger-lib",
          "signature": "String -\u003e Bool",
          "source": "src/Hledger-Data-AccountName.html#isAccountRegex",
          "type": "function"
        },
        "index": {
          "description": "Does this string look like an exact account-matching regular expression",
          "hierarchy": "Hledger Data AccountName",
          "module": "Hledger.Data.AccountName",
          "name": "isAccountRegex",
          "normalized": "String-\u003eBool",
          "package": "hledger-lib",
          "partial": "Account Regex",
          "signature": "String-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-AccountName.html#v:isAccountRegex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Data.AccountName",
          "name": "isSubAccountNameOf",
          "package": "hledger-lib",
          "signature": "AccountName -\u003e AccountName -\u003e Bool",
          "source": "src/Hledger-Data-AccountName.html#isSubAccountNameOf",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Data AccountName",
          "module": "Hledger.Data.AccountName",
          "name": "isSubAccountNameOf",
          "normalized": "AccountName-\u003eAccountName-\u003eBool",
          "package": "hledger-lib",
          "partial": "Sub Account Name Of",
          "signature": "AccountName-\u003eAccountName-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-AccountName.html#v:isSubAccountNameOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Data.AccountName",
          "name": "nullaccountnametree",
          "package": "hledger-lib",
          "signature": "Tree [Char]",
          "source": "src/Hledger-Data-AccountName.html#nullaccountnametree",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Data AccountName",
          "module": "Hledger.Data.AccountName",
          "name": "nullaccountnametree",
          "normalized": "Tree[Char]",
          "package": "hledger-lib",
          "signature": "Tree[Char]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-AccountName.html#v:nullaccountnametree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Data.AccountName",
          "name": "parentAccountName",
          "package": "hledger-lib",
          "signature": "AccountName -\u003e AccountName",
          "source": "src/Hledger-Data-AccountName.html#parentAccountName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Data AccountName",
          "module": "Hledger.Data.AccountName",
          "name": "parentAccountName",
          "normalized": "AccountName-\u003eAccountName",
          "package": "hledger-lib",
          "partial": "Account Name",
          "signature": "AccountName-\u003eAccountName",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-AccountName.html#v:parentAccountName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Data.AccountName",
          "name": "parentAccountNames",
          "package": "hledger-lib",
          "signature": "AccountName -\u003e [AccountName]",
          "source": "src/Hledger-Data-AccountName.html#parentAccountNames",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Data AccountName",
          "module": "Hledger.Data.AccountName",
          "name": "parentAccountNames",
          "normalized": "AccountName-\u003e[AccountName]",
          "package": "hledger-lib",
          "partial": "Account Names",
          "signature": "AccountName-\u003e[AccountName]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-AccountName.html#v:parentAccountNames"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFrom a list of account names, select those which are direct\n subaccounts of the given account name.\n\u003c/p\u003e",
          "module": "Hledger.Data.AccountName",
          "name": "subAccountNamesFrom",
          "package": "hledger-lib",
          "signature": "[AccountName] -\u003e AccountName -\u003e [AccountName]",
          "source": "src/Hledger-Data-AccountName.html#subAccountNamesFrom",
          "type": "function"
        },
        "index": {
          "description": "From list of account names select those which are direct subaccounts of the given account name",
          "hierarchy": "Hledger Data AccountName",
          "module": "Hledger.Data.AccountName",
          "name": "subAccountNamesFrom",
          "normalized": "[AccountName]-\u003eAccountName-\u003e[AccountName]",
          "package": "hledger-lib",
          "partial": "Account Names From",
          "signature": "[AccountName]-\u003eAccountName-\u003e[AccountName]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-AccountName.html#v:subAccountNamesFrom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Data.AccountName",
          "name": "tests_Hledger_Data_AccountName",
          "package": "hledger-lib",
          "signature": "Test",
          "source": "src/Hledger-Data-AccountName.html#tests_Hledger_Data_AccountName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Data AccountName",
          "module": "Hledger.Data.AccountName",
          "name": "tests_Hledger_Data_AccountName",
          "package": "hledger-lib",
          "partial": "Hledger Data Account Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-AccountName.html#v:tests_Hledger_Data_AccountName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdl\u003e\u003cdt\u003e\u003ca\u003ea:b:c\u003c/a\u003e,\u003ca\u003ed:e\u003c/a\u003e\u003c/dt\u003e\u003cdd\u003e -\u003e [\u003ca\u003ea\u003c/a\u003e,\u003ca\u003ed\u003c/a\u003e]\n\u003c/dd\u003e\u003c/dl\u003e",
          "module": "Hledger.Data.AccountName",
          "name": "topAccountNames",
          "package": "hledger-lib",
          "signature": "[AccountName] -\u003e [AccountName]",
          "source": "src/Hledger-Data-AccountName.html#topAccountNames",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Data AccountName",
          "module": "Hledger.Data.AccountName",
          "name": "topAccountNames",
          "normalized": "[AccountName]-\u003e[AccountName]",
          "package": "hledger-lib",
          "partial": "Account Names",
          "signature": "[AccountName]-\u003e[AccountName]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-AccountName.html#v:topAccountNames"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA simple \u003ccode\u003e\u003ca\u003eAmount\u003c/a\u003e\u003c/code\u003e is some quantity of money, shares, or anything else.\nIt has a (possibly null) \u003ccode\u003e\u003ca\u003eCommodity\u003c/a\u003e\u003c/code\u003e and a numeric quantity:\n\u003c/p\u003e\u003cpre\u003e\n  $1 \n  &#163;-50  EUR 3.44 \n  GOOG 500\n  1.5h\n  90 apples\n  0 \n\u003c/pre\u003e\u003cp\u003eIt may also have an assigned \u003ccode\u003e\u003ca\u003ePrice\u003c/a\u003e\u003c/code\u003e, representing this amount's per-unit\nor total cost in a different commodity. If present, this is rendered like\nso:\n\u003c/p\u003e\u003cpre\u003e\n  EUR 2 @ $1.50  (unit price)\n  EUR 2 @@ $3   (total price)\n\u003c/pre\u003e\u003cp\u003eA \u003ccode\u003e\u003ca\u003eMixedAmount\u003c/a\u003e\u003c/code\u003e is zero or more simple amounts, so can represent multiple\ncommodities; this is the type most often used:\n\u003c/p\u003e\u003cpre\u003e\n  0\n  $50 + EUR 3\n  16h + $13.55 + AAPL 500 + 6 oranges\n\u003c/pre\u003e\u003cp\u003eWhen a mixed amount has been \"normalised\", it has no more than one amount\nin each commodity and no zero amounts; or it has just a single zero amount\nand no others.\n\u003c/p\u003e\u003cp\u003eLimited arithmetic with simple and mixed amounts is supported, best used\nwith similar amounts since it mostly ignores assigned prices and commodity\nexchange rates.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Hledger.Data.Amount",
          "name": "Amount",
          "package": "hledger-lib",
          "source": "src/Hledger-Data-Amount.html",
          "type": "module"
        },
        "index": {
          "description": "simple Amount is some quantity of money shares or anything else It has possibly null Commodity and numeric quantity EUR GOOG apples It may also have an assigned Price representing this amount per-unit or total cost in different commodity If present this is rendered like so EUR unit price EUR total price MixedAmount is zero or more simple amounts so can represent multiple commodities this is the type most often used EUR AAPL oranges When mixed amount has been normalised it has no more than one amount in each commodity and no zero amounts or it has just single zero amount and no others Limited arithmetic with simple and mixed amounts is supported best used with similar amounts since it mostly ignores assigned prices and commodity exchange rates",
          "hierarchy": "Hledger Data Amount",
          "module": "Hledger.Data.Amount",
          "name": "Amount",
          "package": "hledger-lib",
          "partial": "Amount",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Amount.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet an amount's total price.\n\u003c/p\u003e",
          "module": "Hledger.Data.Amount",
          "name": "(@@)",
          "package": "hledger-lib",
          "signature": "Amount -\u003e Amount -\u003e Amount",
          "source": "src/Hledger-Data-Amount.html#%40%40",
          "type": "function"
        },
        "index": {
          "description": "Set an amount total price",
          "hierarchy": "Hledger Data Amount",
          "module": "Hledger.Data.Amount",
          "name": "(@@) @@",
          "normalized": "Amount-\u003eAmount-\u003eAmount",
          "package": "hledger-lib",
          "signature": "Amount-\u003eAmount-\u003eAmount",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Amount.html#v:-64--64-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe empty simple amount.\n\u003c/p\u003e",
          "module": "Hledger.Data.Amount",
          "name": "amount",
          "package": "hledger-lib",
          "signature": "Amount",
          "source": "src/Hledger-Data-Amount.html#amount",
          "type": "function"
        },
        "index": {
          "description": "The empty simple amount",
          "hierarchy": "Hledger Data Amount",
          "module": "Hledger.Data.Amount",
          "name": "amount",
          "package": "hledger-lib",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Amount.html#v:amount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert an amount to the specified commodity, ignoring and discarding\n any assigned prices and assuming an exchange rate of 1.\n\u003c/p\u003e",
          "module": "Hledger.Data.Amount",
          "name": "amountWithCommodity",
          "package": "hledger-lib",
          "signature": "Commodity -\u003e Amount -\u003e Amount",
          "source": "src/Hledger-Data-Amount.html#amountWithCommodity",
          "type": "function"
        },
        "index": {
          "description": "Convert an amount to the specified commodity ignoring and discarding any assigned prices and assuming an exchange rate of",
          "hierarchy": "Hledger Data Amount",
          "module": "Hledger.Data.Amount",
          "name": "amountWithCommodity",
          "normalized": "Commodity-\u003eAmount-\u003eAmount",
          "package": "hledger-lib",
          "partial": "With Commodity",
          "signature": "Commodity-\u003eAmount-\u003eAmount",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Amount.html#v:amountWithCommodity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet a mixed amount's component amounts.\n\u003c/p\u003e",
          "module": "Hledger.Data.Amount",
          "name": "amounts",
          "package": "hledger-lib",
          "signature": "MixedAmount -\u003e [Amount]",
          "source": "src/Hledger-Data-Amount.html#amounts",
          "type": "function"
        },
        "index": {
          "description": "Get mixed amount component amounts",
          "hierarchy": "Hledger Data Amount",
          "module": "Hledger.Data.Amount",
          "name": "amounts",
          "normalized": "MixedAmount-\u003e[Amount]",
          "package": "hledger-lib",
          "signature": "MixedAmount-\u003e[Amount]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Amount.html#v:amounts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Data.Amount",
          "name": "amountstyle",
          "package": "hledger-lib",
          "signature": "AmountStyle",
          "source": "src/Hledger-Data-Amount.html#amountstyle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Data Amount",
          "module": "Hledger.Data.Amount",
          "name": "amountstyle",
          "package": "hledger-lib",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Amount.html#v:amountstyle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet an amount's unit price.\n\u003c/p\u003e",
          "module": "Hledger.Data.Amount",
          "name": "at",
          "package": "hledger-lib",
          "signature": "Amount -\u003e Amount -\u003e Amount",
          "source": "src/Hledger-Data-Amount.html#at",
          "type": "function"
        },
        "index": {
          "description": "Set an amount unit price",
          "hierarchy": "Hledger Data Amount",
          "module": "Hledger.Data.Amount",
          "name": "at",
          "normalized": "Amount-\u003eAmount-\u003eAmount",
          "package": "hledger-lib",
          "signature": "Amount-\u003eAmount-\u003eAmount",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Amount.html#v:at"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a list of amounts in parse order, build a map from commodities\n to canonical display styles for amounts in that commodity.\n\u003c/p\u003e",
          "module": "Hledger.Data.Amount",
          "name": "canonicalStyles",
          "package": "hledger-lib",
          "signature": "[Amount] -\u003e Map Commodity AmountStyle",
          "source": "src/Hledger-Data-Amount.html#canonicalStyles",
          "type": "function"
        },
        "index": {
          "description": "Given list of amounts in parse order build map from commodities to canonical display styles for amounts in that commodity",
          "hierarchy": "Hledger Data Amount",
          "module": "Hledger.Data.Amount",
          "name": "canonicalStyles",
          "normalized": "[Amount]-\u003eMap Commodity AmountStyle",
          "package": "hledger-lib",
          "partial": "Styles",
          "signature": "[Amount]-\u003eMap Commodity AmountStyle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Amount.html#v:canonicalStyles"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCanonicalise an amount's display style using the provided commodity style map.\n\u003c/p\u003e",
          "module": "Hledger.Data.Amount",
          "name": "canonicaliseAmount",
          "package": "hledger-lib",
          "signature": "Map Commodity AmountStyle -\u003e Amount -\u003e Amount",
          "source": "src/Hledger-Data-Amount.html#canonicaliseAmount",
          "type": "function"
        },
        "index": {
          "description": "Canonicalise an amount display style using the provided commodity style map",
          "hierarchy": "Hledger Data Amount",
          "module": "Hledger.Data.Amount",
          "name": "canonicaliseAmount",
          "normalized": "Map Commodity AmountStyle-\u003eAmount-\u003eAmount",
          "package": "hledger-lib",
          "partial": "Amount",
          "signature": "Map Commodity AmountStyle-\u003eAmount-\u003eAmount",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Amount.html#v:canonicaliseAmount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCanonicalise a mixed amount's display styles using the provided commodity style map.\n\u003c/p\u003e",
          "module": "Hledger.Data.Amount",
          "name": "canonicaliseMixedAmount",
          "package": "hledger-lib",
          "signature": "Map Commodity AmountStyle -\u003e MixedAmount -\u003e MixedAmount",
          "source": "src/Hledger-Data-Amount.html#canonicaliseMixedAmount",
          "type": "function"
        },
        "index": {
          "description": "Canonicalise mixed amount display styles using the provided commodity style map",
          "hierarchy": "Hledger Data Amount",
          "module": "Hledger.Data.Amount",
          "name": "canonicaliseMixedAmount",
          "normalized": "Map Commodity AmountStyle-\u003eMixedAmount-\u003eMixedAmount",
          "package": "hledger-lib",
          "partial": "Mixed Amount",
          "signature": "Map Commodity AmountStyle-\u003eMixedAmount-\u003eMixedAmount",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Amount.html#v:canonicaliseMixedAmount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert an amount to the commodity of its assigned price, if any.  Notes:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e price amounts must be MixedAmounts with exactly one component Amount (or there will be a runtime error)\n\u003c/li\u003e\u003cli\u003e price amounts should be positive, though this is not currently enforced\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Hledger.Data.Amount",
          "name": "costOfAmount",
          "package": "hledger-lib",
          "signature": "Amount -\u003e Amount",
          "source": "src/Hledger-Data-Amount.html#costOfAmount",
          "type": "function"
        },
        "index": {
          "description": "Convert an amount to the commodity of its assigned price if any Notes price amounts must be MixedAmounts with exactly one component Amount or there will be runtime error price amounts should be positive though this is not currently enforced",
          "hierarchy": "Hledger Data Amount",
          "module": "Hledger.Data.Amount",
          "name": "costOfAmount",
          "normalized": "Amount-\u003eAmount",
          "package": "hledger-lib",
          "partial": "Of Amount",
          "signature": "Amount-\u003eAmount",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Amount.html#v:costOfAmount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a mixed amount's component amounts to the commodity of their\n assigned price, if any.\n\u003c/p\u003e",
          "module": "Hledger.Data.Amount",
          "name": "costOfMixedAmount",
          "package": "hledger-lib",
          "signature": "MixedAmount -\u003e MixedAmount",
          "source": "src/Hledger-Data-Amount.html#costOfMixedAmount",
          "type": "function"
        },
        "index": {
          "description": "Convert mixed amount component amounts to the commodity of their assigned price if any",
          "hierarchy": "Hledger Data Amount",
          "module": "Hledger.Data.Amount",
          "name": "costOfMixedAmount",
          "normalized": "MixedAmount-\u003eMixedAmount",
          "package": "hledger-lib",
          "partial": "Of Mixed Amount",
          "signature": "MixedAmount-\u003eMixedAmount",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Amount.html#v:costOfMixedAmount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDivide an amount's quantity by a constant.\n\u003c/p\u003e",
          "module": "Hledger.Data.Amount",
          "name": "divideAmount",
          "package": "hledger-lib",
          "signature": "Amount -\u003e Double -\u003e Amount",
          "source": "src/Hledger-Data-Amount.html#divideAmount",
          "type": "function"
        },
        "index": {
          "description": "Divide an amount quantity by constant",
          "hierarchy": "Hledger Data Amount",
          "module": "Hledger.Data.Amount",
          "name": "divideAmount",
          "normalized": "Amount-\u003eDouble-\u003eAmount",
          "package": "hledger-lib",
          "partial": "Amount",
          "signature": "Amount-\u003eDouble-\u003eAmount",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Amount.html#v:divideAmount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDivide a mixed amount's quantities by a constant.\n\u003c/p\u003e",
          "module": "Hledger.Data.Amount",
          "name": "divideMixedAmount",
          "package": "hledger-lib",
          "signature": "MixedAmount -\u003e Double -\u003e MixedAmount",
          "source": "src/Hledger-Data-Amount.html#divideMixedAmount",
          "type": "function"
        },
        "index": {
          "description": "Divide mixed amount quantities by constant",
          "hierarchy": "Hledger Data Amount",
          "module": "Hledger.Data.Amount",
          "name": "divideMixedAmount",
          "normalized": "MixedAmount-\u003eDouble-\u003eMixedAmount",
          "package": "hledger-lib",
          "partial": "Mixed Amount",
          "signature": "MixedAmount-\u003eDouble-\u003eMixedAmount",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Amount.html#v:divideMixedAmount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Data.Amount",
          "name": "eur",
          "package": "hledger-lib",
          "signature": "Quantity -\u003e Amount",
          "source": "src/Hledger-Data-Amount.html#eur",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Data Amount",
          "module": "Hledger.Data.Amount",
          "name": "eur",
          "normalized": "Quantity-\u003eAmount",
          "package": "hledger-lib",
          "signature": "Quantity-\u003eAmount",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Amount.html#v:eur"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Data.Amount",
          "name": "gbp",
          "package": "hledger-lib",
          "signature": "Quantity -\u003e Amount",
          "source": "src/Hledger-Data-Amount.html#gbp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Data Amount",
          "module": "Hledger.Data.Amount",
          "name": "gbp",
          "normalized": "Quantity-\u003eAmount",
          "package": "hledger-lib",
          "signature": "Quantity-\u003eAmount",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Amount.html#v:gbp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Data.Amount",
          "name": "hrs",
          "package": "hledger-lib",
          "signature": "Quantity -\u003e Amount",
          "source": "src/Hledger-Data-Amount.html#hrs",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Data Amount",
          "module": "Hledger.Data.Amount",
          "name": "hrs",
          "normalized": "Quantity-\u003eAmount",
          "package": "hledger-lib",
          "signature": "Quantity-\u003eAmount",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Amount.html#v:hrs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIs this mixed amount negative, if it can be normalised to a single commodity ?\n\u003c/p\u003e",
          "module": "Hledger.Data.Amount",
          "name": "isNegativeMixedAmount",
          "package": "hledger-lib",
          "signature": "MixedAmount -\u003e Maybe Bool",
          "source": "src/Hledger-Data-Amount.html#isNegativeMixedAmount",
          "type": "function"
        },
        "index": {
          "description": "Is this mixed amount negative if it can be normalised to single commodity",
          "hierarchy": "Hledger Data Amount",
          "module": "Hledger.Data.Amount",
          "name": "isNegativeMixedAmount",
          "normalized": "MixedAmount-\u003eMaybe Bool",
          "package": "hledger-lib",
          "partial": "Negative Mixed Amount",
          "signature": "MixedAmount-\u003eMaybe Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Amount.html#v:isNegativeMixedAmount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIs this mixed amount \u003ca\u003ereally\u003c/a\u003e zero ? See isReallyZeroAmount.\n\u003c/p\u003e",
          "module": "Hledger.Data.Amount",
          "name": "isReallyZeroMixedAmount",
          "package": "hledger-lib",
          "signature": "MixedAmount -\u003e Bool",
          "source": "src/Hledger-Data-Amount.html#isReallyZeroMixedAmount",
          "type": "function"
        },
        "index": {
          "description": "Is this mixed amount really zero See isReallyZeroAmount",
          "hierarchy": "Hledger Data Amount",
          "module": "Hledger.Data.Amount",
          "name": "isReallyZeroMixedAmount",
          "normalized": "MixedAmount-\u003eBool",
          "package": "hledger-lib",
          "partial": "Really Zero Mixed Amount",
          "signature": "MixedAmount-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Amount.html#v:isReallyZeroMixedAmount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIs this mixed amount \u003ca\u003ereally\u003c/a\u003e zero, after converting to cost\n commodities where possible ?\n\u003c/p\u003e",
          "module": "Hledger.Data.Amount",
          "name": "isReallyZeroMixedAmountCost",
          "package": "hledger-lib",
          "signature": "MixedAmount -\u003e Bool",
          "source": "src/Hledger-Data-Amount.html#isReallyZeroMixedAmountCost",
          "type": "function"
        },
        "index": {
          "description": "Is this mixed amount really zero after converting to cost commodities where possible",
          "hierarchy": "Hledger Data Amount",
          "module": "Hledger.Data.Amount",
          "name": "isReallyZeroMixedAmountCost",
          "normalized": "MixedAmount-\u003eBool",
          "package": "hledger-lib",
          "partial": "Really Zero Mixed Amount Cost",
          "signature": "MixedAmount-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Amount.html#v:isReallyZeroMixedAmountCost"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDoes this mixed amount appear to be zero when displayed with its given precision ?\n\u003c/p\u003e",
          "module": "Hledger.Data.Amount",
          "name": "isZeroMixedAmount",
          "package": "hledger-lib",
          "signature": "MixedAmount -\u003e Bool",
          "source": "src/Hledger-Data-Amount.html#isZeroMixedAmount",
          "type": "function"
        },
        "index": {
          "description": "Does this mixed amount appear to be zero when displayed with its given precision",
          "hierarchy": "Hledger Data Amount",
          "module": "Hledger.Data.Amount",
          "name": "isZeroMixedAmount",
          "normalized": "MixedAmount-\u003eBool",
          "package": "hledger-lib",
          "partial": "Zero Mixed Amount",
          "signature": "MixedAmount-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Amount.html#v:isZeroMixedAmount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompact labelled trace of a mixed amount, for debugging.\n\u003c/p\u003e",
          "module": "Hledger.Data.Amount",
          "name": "ltraceamount",
          "package": "hledger-lib",
          "signature": "String -\u003e MixedAmount -\u003e MixedAmount",
          "source": "src/Hledger-Data-Amount.html#ltraceamount",
          "type": "function"
        },
        "index": {
          "description": "Compact labelled trace of mixed amount for debugging",
          "hierarchy": "Hledger Data Amount",
          "module": "Hledger.Data.Amount",
          "name": "ltraceamount",
          "normalized": "String-\u003eMixedAmount-\u003eMixedAmount",
          "package": "hledger-lib",
          "signature": "String-\u003eMixedAmount-\u003eMixedAmount",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Amount.html#v:ltraceamount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFor rendering: a special precision value which means show all available digits.\n\u003c/p\u003e",
          "module": "Hledger.Data.Amount",
          "name": "maxprecision",
          "package": "hledger-lib",
          "signature": "Int",
          "source": "src/Hledger-Data-Amount.html#maxprecision",
          "type": "function"
        },
        "index": {
          "description": "For rendering special precision value which means show all available digits",
          "hierarchy": "Hledger Data Amount",
          "module": "Hledger.Data.Amount",
          "name": "maxprecision",
          "package": "hledger-lib",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Amount.html#v:maxprecision"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFor rendering: a special precision value which forces display of a decimal point.\n\u003c/p\u003e",
          "module": "Hledger.Data.Amount",
          "name": "maxprecisionwithpoint",
          "package": "hledger-lib",
          "signature": "Int",
          "source": "src/Hledger-Data-Amount.html#maxprecisionwithpoint",
          "type": "function"
        },
        "index": {
          "description": "For rendering special precision value which forces display of decimal point",
          "hierarchy": "Hledger Data Amount",
          "module": "Hledger.Data.Amount",
          "name": "maxprecisionwithpoint",
          "package": "hledger-lib",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Amount.html#v:maxprecisionwithpoint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA temporary value for parsed transactions which had no amount specified.\n\u003c/p\u003e",
          "module": "Hledger.Data.Amount",
          "name": "missingamt",
          "package": "hledger-lib",
          "signature": "Amount",
          "source": "src/Hledger-Data-Amount.html#missingamt",
          "type": "function"
        },
        "index": {
          "description": "temporary value for parsed transactions which had no amount specified",
          "hierarchy": "Hledger Data Amount",
          "module": "Hledger.Data.Amount",
          "name": "missingamt",
          "package": "hledger-lib",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Amount.html#v:missingamt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Data.Amount",
          "name": "missingmixedamt",
          "package": "hledger-lib",
          "signature": "MixedAmount",
          "source": "src/Hledger-Data-Amount.html#missingmixedamt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Data Amount",
          "module": "Hledger.Data.Amount",
          "name": "missingmixedamt",
          "package": "hledger-lib",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Amount.html#v:missingmixedamt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Data.Amount",
          "name": "mixed",
          "package": "hledger-lib",
          "signature": "Amount -\u003e MixedAmount",
          "source": "src/Hledger-Data-Amount.html#mixed",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Data Amount",
          "module": "Hledger.Data.Amount",
          "name": "mixed",
          "normalized": "Amount-\u003eMixedAmount",
          "package": "hledger-lib",
          "signature": "Amount-\u003eMixedAmount",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Amount.html#v:mixed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimplify a mixed amount's component amounts: combine amounts with\n the same commodity, using the first amount's price for subsequent\n amounts in each commodity (ie, this function alters the amount and\n is best used as a rendering helper.). Also remove any zero amounts\n and replace an empty amount list with a single zero amount.\n\u003c/p\u003e",
          "module": "Hledger.Data.Amount",
          "name": "normaliseMixedAmountPreservingFirstPrice",
          "package": "hledger-lib",
          "signature": "MixedAmount -\u003e MixedAmount",
          "source": "src/Hledger-Data-Amount.html#normaliseMixedAmountPreservingFirstPrice",
          "type": "function"
        },
        "index": {
          "description": "Simplify mixed amount component amounts combine amounts with the same commodity using the first amount price for subsequent amounts in each commodity ie this function alters the amount and is best used as rendering helper Also remove any zero amounts and replace an empty amount list with single zero amount",
          "hierarchy": "Hledger Data Amount",
          "module": "Hledger.Data.Amount",
          "name": "normaliseMixedAmountPreservingFirstPrice",
          "normalized": "MixedAmount-\u003eMixedAmount",
          "package": "hledger-lib",
          "partial": "Mixed Amount Preserving First Price",
          "signature": "MixedAmount-\u003eMixedAmount",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Amount.html#v:normaliseMixedAmountPreservingFirstPrice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimplify a mixed amount's component amounts: we can combine amounts\n with the same commodity and unit price. Also remove any zero or missing\n amounts and replace an empty amount list with a single zero amount.\n\u003c/p\u003e",
          "module": "Hledger.Data.Amount",
          "name": "normaliseMixedAmountPreservingPrices",
          "package": "hledger-lib",
          "signature": "MixedAmount -\u003e MixedAmount",
          "source": "src/Hledger-Data-Amount.html#normaliseMixedAmountPreservingPrices",
          "type": "function"
        },
        "index": {
          "description": "Simplify mixed amount component amounts we can combine amounts with the same commodity and unit price Also remove any zero or missing amounts and replace an empty amount list with single zero amount",
          "hierarchy": "Hledger Data Amount",
          "module": "Hledger.Data.Amount",
          "name": "normaliseMixedAmountPreservingPrices",
          "normalized": "MixedAmount-\u003eMixedAmount",
          "package": "hledger-lib",
          "partial": "Mixed Amount Preserving Prices",
          "signature": "MixedAmount-\u003eMixedAmount",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Amount.html#v:normaliseMixedAmountPreservingPrices"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe empty simple amount.\n\u003c/p\u003e",
          "module": "Hledger.Data.Amount",
          "name": "nullamt",
          "package": "hledger-lib",
          "signature": "Amount",
          "source": "src/Hledger-Data-Amount.html#nullamt",
          "type": "function"
        },
        "index": {
          "description": "The empty simple amount",
          "hierarchy": "Hledger Data Amount",
          "module": "Hledger.Data.Amount",
          "name": "nullamt",
          "package": "hledger-lib",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Amount.html#v:nullamt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe empty mixed amount.\n\u003c/p\u003e",
          "module": "Hledger.Data.Amount",
          "name": "nullmixedamt",
          "package": "hledger-lib",
          "signature": "MixedAmount",
          "source": "src/Hledger-Data-Amount.html#nullmixedamt",
          "type": "function"
        },
        "index": {
          "description": "The empty mixed amount",
          "hierarchy": "Hledger Data Amount",
          "module": "Hledger.Data.Amount",
          "name": "nullmixedamt",
          "package": "hledger-lib",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Amount.html#v:nullmixedamt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Data.Amount",
          "name": "num",
          "package": "hledger-lib",
          "signature": "Quantity -\u003e Amount",
          "source": "src/Hledger-Data-Amount.html#num",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Data Amount",
          "module": "Hledger.Data.Amount",
          "name": "num",
          "normalized": "Quantity-\u003eAmount",
          "package": "hledger-lib",
          "signature": "Quantity-\u003eAmount",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Amount.html#v:num"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet an amount's display precision.\n\u003c/p\u003e",
          "module": "Hledger.Data.Amount",
          "name": "setAmountPrecision",
          "package": "hledger-lib",
          "signature": "Int -\u003e Amount -\u003e Amount",
          "source": "src/Hledger-Data-Amount.html#setAmountPrecision",
          "type": "function"
        },
        "index": {
          "description": "Set an amount display precision",
          "hierarchy": "Hledger Data Amount",
          "module": "Hledger.Data.Amount",
          "name": "setAmountPrecision",
          "normalized": "Int-\u003eAmount-\u003eAmount",
          "package": "hledger-lib",
          "partial": "Amount Precision",
          "signature": "Int-\u003eAmount-\u003eAmount",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Amount.html#v:setAmountPrecision"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the display precision in the amount's commodities.\n\u003c/p\u003e",
          "module": "Hledger.Data.Amount",
          "name": "setMixedAmountPrecision",
          "package": "hledger-lib",
          "signature": "Int -\u003e MixedAmount -\u003e MixedAmount",
          "source": "src/Hledger-Data-Amount.html#setMixedAmountPrecision",
          "type": "function"
        },
        "index": {
          "description": "Set the display precision in the amount commodities",
          "hierarchy": "Hledger Data Amount",
          "module": "Hledger.Data.Amount",
          "name": "setMixedAmountPrecision",
          "normalized": "Int-\u003eMixedAmount-\u003eMixedAmount",
          "package": "hledger-lib",
          "partial": "Mixed Amount Precision",
          "signature": "Int-\u003eMixedAmount-\u003eMixedAmount",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Amount.html#v:setMixedAmountPrecision"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the string representation of an amount, based on its commodity's\n display settings. String representations equivalent to zero are\n converted to just \"0\".\n\u003c/p\u003e",
          "module": "Hledger.Data.Amount",
          "name": "showAmount",
          "package": "hledger-lib",
          "signature": "Amount -\u003e String",
          "source": "src/Hledger-Data-Amount.html#showAmount",
          "type": "function"
        },
        "index": {
          "description": "Get the string representation of an amount based on its commodity display settings String representations equivalent to zero are converted to just",
          "hierarchy": "Hledger Data Amount",
          "module": "Hledger.Data.Amount",
          "name": "showAmount",
          "normalized": "Amount-\u003eString",
          "package": "hledger-lib",
          "partial": "Amount",
          "signature": "Amount-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Amount.html#v:showAmount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet a string representation of an amount for debugging,\n appropriate to the current debug level. 9 shows maximum detail.\n\u003c/p\u003e",
          "module": "Hledger.Data.Amount",
          "name": "showAmountDebug",
          "package": "hledger-lib",
          "signature": "Amount -\u003e String",
          "source": "src/Hledger-Data-Amount.html#showAmountDebug",
          "type": "function"
        },
        "index": {
          "description": "Get string representation of an amount for debugging appropriate to the current debug level shows maximum detail",
          "hierarchy": "Hledger Data Amount",
          "module": "Hledger.Data.Amount",
          "name": "showAmountDebug",
          "normalized": "Amount-\u003eString",
          "package": "hledger-lib",
          "partial": "Amount Debug",
          "signature": "Amount-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Amount.html#v:showAmountDebug"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the string representation of an amount, without any @ price.\n\u003c/p\u003e",
          "module": "Hledger.Data.Amount",
          "name": "showAmountWithoutPrice",
          "package": "hledger-lib",
          "signature": "Amount -\u003e String",
          "source": "src/Hledger-Data-Amount.html#showAmountWithoutPrice",
          "type": "function"
        },
        "index": {
          "description": "Get the string representation of an amount without any price",
          "hierarchy": "Hledger Data Amount",
          "module": "Hledger.Data.Amount",
          "name": "showAmountWithoutPrice",
          "normalized": "Amount-\u003eString",
          "package": "hledger-lib",
          "partial": "Amount Without Price",
          "signature": "Amount-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Amount.html#v:showAmountWithoutPrice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the string representation of a mixed amount, showing each of\n its component amounts. NB a mixed amount can have an empty amounts\n list in which case it shows as \"\".\n\u003c/p\u003e",
          "module": "Hledger.Data.Amount",
          "name": "showMixedAmount",
          "package": "hledger-lib",
          "signature": "MixedAmount -\u003e String",
          "source": "src/Hledger-Data-Amount.html#showMixedAmount",
          "type": "function"
        },
        "index": {
          "description": "Get the string representation of mixed amount showing each of its component amounts NB mixed amount can have an empty amounts list in which case it shows as",
          "hierarchy": "Hledger Data Amount",
          "module": "Hledger.Data.Amount",
          "name": "showMixedAmount",
          "normalized": "MixedAmount-\u003eString",
          "package": "hledger-lib",
          "partial": "Mixed Amount",
          "signature": "MixedAmount-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Amount.html#v:showMixedAmount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet an unambiguous string representation of a mixed amount for debugging.\n\u003c/p\u003e",
          "module": "Hledger.Data.Amount",
          "name": "showMixedAmountDebug",
          "package": "hledger-lib",
          "signature": "MixedAmount -\u003e String",
          "source": "src/Hledger-Data-Amount.html#showMixedAmountDebug",
          "type": "function"
        },
        "index": {
          "description": "Get an unambiguous string representation of mixed amount for debugging",
          "hierarchy": "Hledger Data Amount",
          "module": "Hledger.Data.Amount",
          "name": "showMixedAmountDebug",
          "normalized": "MixedAmount-\u003eString",
          "package": "hledger-lib",
          "partial": "Mixed Amount Debug",
          "signature": "MixedAmount-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Amount.html#v:showMixedAmountDebug"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the string representation of a mixed amount, showing each of its\n component amounts with the specified precision, ignoring their\n commoditys' display precision settings.\n\u003c/p\u003e",
          "module": "Hledger.Data.Amount",
          "name": "showMixedAmountWithPrecision",
          "package": "hledger-lib",
          "signature": "Int -\u003e MixedAmount -\u003e String",
          "source": "src/Hledger-Data-Amount.html#showMixedAmountWithPrecision",
          "type": "function"
        },
        "index": {
          "description": "Get the string representation of mixed amount showing each of its component amounts with the specified precision ignoring their commoditys display precision settings",
          "hierarchy": "Hledger Data Amount",
          "module": "Hledger.Data.Amount",
          "name": "showMixedAmountWithPrecision",
          "normalized": "Int-\u003eMixedAmount-\u003eString",
          "package": "hledger-lib",
          "partial": "Mixed Amount With Precision",
          "signature": "Int-\u003eMixedAmount-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Amount.html#v:showMixedAmountWithPrecision"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the string representation of a mixed amount, but without\n any @ prices.\n\u003c/p\u003e",
          "module": "Hledger.Data.Amount",
          "name": "showMixedAmountWithoutPrice",
          "package": "hledger-lib",
          "signature": "MixedAmount -\u003e String",
          "source": "src/Hledger-Data-Amount.html#showMixedAmountWithoutPrice",
          "type": "function"
        },
        "index": {
          "description": "Get the string representation of mixed amount but without any prices",
          "hierarchy": "Hledger Data Amount",
          "module": "Hledger.Data.Amount",
          "name": "showMixedAmountWithoutPrice",
          "normalized": "MixedAmount-\u003eString",
          "package": "hledger-lib",
          "partial": "Mixed Amount Without Price",
          "signature": "MixedAmount-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Amount.html#v:showMixedAmountWithoutPrice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA more complete amount adding operation.\n\u003c/p\u003e",
          "module": "Hledger.Data.Amount",
          "name": "sumAmounts",
          "package": "hledger-lib",
          "signature": "[Amount] -\u003e MixedAmount",
          "source": "src/Hledger-Data-Amount.html#sumAmounts",
          "type": "function"
        },
        "index": {
          "description": "more complete amount adding operation",
          "hierarchy": "Hledger Data Amount",
          "module": "Hledger.Data.Amount",
          "name": "sumAmounts",
          "normalized": "[Amount]-\u003eMixedAmount",
          "package": "hledger-lib",
          "partial": "Amounts",
          "signature": "[Amount]-\u003eMixedAmount",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Amount.html#v:sumAmounts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Data.Amount",
          "name": "tests_Hledger_Data_Amount",
          "package": "hledger-lib",
          "signature": "Test",
          "source": "src/Hledger-Data-Amount.html#tests_Hledger_Data_Amount",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Data Amount",
          "module": "Hledger.Data.Amount",
          "name": "tests_Hledger_Data_Amount",
          "package": "hledger-lib",
          "partial": "Hledger Data Amount",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Amount.html#v:tests_Hledger_Data_Amount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Data.Amount",
          "name": "usd",
          "package": "hledger-lib",
          "signature": "Quantity -\u003e Amount",
          "source": "src/Hledger-Data-Amount.html#usd",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Data Amount",
          "module": "Hledger.Data.Amount",
          "name": "usd",
          "normalized": "Quantity-\u003eAmount",
          "package": "hledger-lib",
          "signature": "Quantity-\u003eAmount",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Amount.html#v:usd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet an amount's display precision, flipped.\n\u003c/p\u003e",
          "module": "Hledger.Data.Amount",
          "name": "withPrecision",
          "package": "hledger-lib",
          "signature": "Amount -\u003e Int -\u003e Amount",
          "source": "src/Hledger-Data-Amount.html#withPrecision",
          "type": "function"
        },
        "index": {
          "description": "Set an amount display precision flipped",
          "hierarchy": "Hledger Data Amount",
          "module": "Hledger.Data.Amount",
          "name": "withPrecision",
          "normalized": "Amount-\u003eInt-\u003eAmount",
          "package": "hledger-lib",
          "partial": "Precision",
          "signature": "Amount-\u003eInt-\u003eAmount",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Amount.html#v:withPrecision"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA \u003ccode\u003e\u003ca\u003eCommodity\u003c/a\u003e\u003c/code\u003e is a symbol representing a currency or some other kind of\nthing we are tracking, and some display preferences that tell how to\ndisplay \u003ccode\u003e\u003ca\u003eAmount\u003c/a\u003e\u003c/code\u003es of the commodity - is the symbol on the left or right,\nare thousands separated by comma, significant decimal places and so on.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Hledger.Data.Commodity",
          "name": "Commodity",
          "package": "hledger-lib",
          "source": "src/Hledger-Data-Commodity.html",
          "type": "module"
        },
        "index": {
          "description": "Commodity is symbol representing currency or some other kind of thing we are tracking and some display preferences that tell how to display Amount of the commodity is the symbol on the left or right are thousands separated by comma significant decimal places and so on",
          "hierarchy": "Hledger Data Commodity",
          "module": "Hledger.Data.Commodity",
          "name": "Commodity",
          "package": "hledger-lib",
          "partial": "Commodity",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Commodity.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLook up one of the sample commodities' symbol by name.\n\u003c/p\u003e",
          "module": "Hledger.Data.Commodity",
          "name": "comm",
          "package": "hledger-lib",
          "signature": "String -\u003e Commodity",
          "source": "src/Hledger-Data-Commodity.html#comm",
          "type": "function"
        },
        "index": {
          "description": "Look up one of the sample commodities symbol by name",
          "hierarchy": "Hledger Data Commodity",
          "module": "Hledger.Data.Commodity",
          "name": "comm",
          "normalized": "String-\u003eCommodity",
          "package": "hledger-lib",
          "signature": "String-\u003eCommodity",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Commodity.html#v:comm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Data.Commodity",
          "name": "commodity",
          "package": "hledger-lib",
          "signature": "[Char]",
          "source": "src/Hledger-Data-Commodity.html#commodity",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Data Commodity",
          "module": "Hledger.Data.Commodity",
          "name": "commodity",
          "normalized": "[Char]",
          "package": "hledger-lib",
          "signature": "[Char]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Commodity.html#v:commodity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Data.Commodity",
          "name": "commoditysymbols",
          "package": "hledger-lib",
          "signature": "[([Char], [Char])]",
          "source": "src/Hledger-Data-Commodity.html#commoditysymbols",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Data Commodity",
          "module": "Hledger.Data.Commodity",
          "name": "commoditysymbols",
          "normalized": "[([Char],[Char])]",
          "package": "hledger-lib",
          "signature": "[([Char],[Char])]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Commodity.html#v:commoditysymbols"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind the conversion rate between two commodities. Currently returns 1.\n\u003c/p\u003e",
          "module": "Hledger.Data.Commodity",
          "name": "conversionRate",
          "package": "hledger-lib",
          "signature": "Commodity -\u003e Commodity -\u003e Double",
          "source": "src/Hledger-Data-Commodity.html#conversionRate",
          "type": "function"
        },
        "index": {
          "description": "Find the conversion rate between two commodities Currently returns",
          "hierarchy": "Hledger Data Commodity",
          "module": "Hledger.Data.Commodity",
          "name": "conversionRate",
          "normalized": "Commodity-\u003eCommodity-\u003eDouble",
          "package": "hledger-lib",
          "partial": "Rate",
          "signature": "Commodity-\u003eCommodity-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Commodity.html#v:conversionRate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Data.Commodity",
          "name": "nonsimplecommoditychars",
          "package": "hledger-lib",
          "signature": "String",
          "source": "src/Hledger-Data-Commodity.html#nonsimplecommoditychars",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Data Commodity",
          "module": "Hledger.Data.Commodity",
          "name": "nonsimplecommoditychars",
          "package": "hledger-lib",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Commodity.html#v:nonsimplecommoditychars"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Data.Commodity",
          "name": "quoteCommoditySymbolIfNeeded",
          "package": "hledger-lib",
          "signature": "[Char] -\u003e [Char]",
          "source": "src/Hledger-Data-Commodity.html#quoteCommoditySymbolIfNeeded",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Data Commodity",
          "module": "Hledger.Data.Commodity",
          "name": "quoteCommoditySymbolIfNeeded",
          "normalized": "[Char]-\u003e[Char]",
          "package": "hledger-lib",
          "partial": "Commodity Symbol If Needed",
          "signature": "[Char]-\u003e[Char]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Commodity.html#v:quoteCommoditySymbolIfNeeded"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Data.Commodity",
          "name": "tests_Hledger_Data_Commodity",
          "package": "hledger-lib",
          "signature": "Test",
          "source": "src/Hledger-Data-Commodity.html#tests_Hledger_Data_Commodity",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Data Commodity",
          "module": "Hledger.Data.Commodity",
          "name": "tests_Hledger_Data_Commodity",
          "package": "hledger-lib",
          "partial": "Hledger Data Commodity",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Commodity.html#v:tests_Hledger_Data_Commodity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDate parsing and utilities for hledger.\n\u003c/p\u003e\u003cp\u003eFor date and time values, we use the standard Day and UTCTime types.\n\u003c/p\u003e\u003cp\u003eA \u003ccode\u003e\u003ca\u003eSmartDate\u003c/a\u003e\u003c/code\u003e is a date which may be partially-specified or relative.\nEg 2008/12/31, but also 2008/12, 12/31, tomorrow, last week, next year.\nWe represent these as a triple of strings like (\"2008\",\"12\",\"\"),\n(\"\",\"\",\"tomorrow\"), (\"\",\"last\",\"week\").\n\u003c/p\u003e\u003cp\u003eA \u003ccode\u003e\u003ca\u003eDateSpan\u003c/a\u003e\u003c/code\u003e is the span of time between two specific calendar dates, or\nan open-ended span where one or both dates are unspecified. (A date span\nwith both ends unspecified matches all dates.)\n\u003c/p\u003e\u003cp\u003eAn \u003ccode\u003e\u003ca\u003eInterval\u003c/a\u003e\u003c/code\u003e is ledger's \"reporting interval\" - weekly, monthly,\nquarterly, etc.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Hledger.Data.Dates",
          "name": "Dates",
          "package": "hledger-lib",
          "source": "src/Hledger-Data-Dates.html",
          "type": "module"
        },
        "index": {
          "description": "Date parsing and utilities for hledger For date and time values we use the standard Day and UTCTime types SmartDate is date which may be partially-specified or relative Eg but also tomorrow last week next year We represent these as triple of strings like tomorrow last week DateSpan is the span of time between two specific calendar dates or an open-ended span where one or both dates are unspecified date span with both ends unspecified matches all dates An Interval is ledger reporting interval weekly monthly quarterly etc",
          "hierarchy": "Hledger Data Dates",
          "module": "Hledger.Data.Dates",
          "name": "Dates",
          "package": "hledger-lib",
          "partial": "Dates",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Dates.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Data.Dates",
          "name": "datesepchar",
          "package": "hledger-lib",
          "signature": "ParsecT [Char] u Identity Char",
          "source": "src/Hledger-Data-Dates.html#datesepchar",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Data Dates",
          "module": "Hledger.Data.Dates",
          "name": "datesepchar",
          "normalized": "ParsecT[Char]a Identity Char",
          "package": "hledger-lib",
          "signature": "ParsecT[Char]u Identity Char",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Dates.html#v:datesepchar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Data.Dates",
          "name": "datesepchars",
          "package": "hledger-lib",
          "signature": "[Char]",
          "source": "src/Hledger-Data-Dates.html#datesepchars",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Data Dates",
          "module": "Hledger.Data.Dates",
          "name": "datesepchars",
          "normalized": "[Char]",
          "package": "hledger-lib",
          "signature": "[Char]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Dates.html#v:datesepchars"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCount the days in a DateSpan, or if it is open-ended return Nothing.\n\u003c/p\u003e",
          "module": "Hledger.Data.Dates",
          "name": "daysInSpan",
          "package": "hledger-lib",
          "signature": "DateSpan -\u003e Maybe Integer",
          "source": "src/Hledger-Data-Dates.html#daysInSpan",
          "type": "function"
        },
        "index": {
          "description": "Count the days in DateSpan or if it is open-ended return Nothing",
          "hierarchy": "Hledger Data Dates",
          "module": "Hledger.Data.Dates",
          "name": "daysInSpan",
          "normalized": "DateSpan-\u003eMaybe Integer",
          "package": "hledger-lib",
          "partial": "In Span",
          "signature": "DateSpan-\u003eMaybe Integer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Dates.html#v:daysInSpan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Data.Dates",
          "name": "elapsedSeconds",
          "package": "hledger-lib",
          "signature": "UTCTime -\u003e UTCTime -\u003e a",
          "source": "src/Hledger-Data-Dates.html#elapsedSeconds",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Data Dates",
          "module": "Hledger.Data.Dates",
          "name": "elapsedSeconds",
          "normalized": "UTCTime-\u003eUTCTime-\u003ea",
          "package": "hledger-lib",
          "partial": "Seconds",
          "signature": "UTCTime-\u003eUTCTime-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Dates.html#v:elapsedSeconds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Data.Dates",
          "name": "failIfInvalidYear",
          "package": "hledger-lib",
          "signature": "String -\u003e m ()",
          "source": "src/Hledger-Data-Dates.html#failIfInvalidYear",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Data Dates",
          "module": "Hledger.Data.Dates",
          "name": "failIfInvalidYear",
          "normalized": "String-\u003ea()",
          "package": "hledger-lib",
          "partial": "If Invalid Year",
          "signature": "String-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Dates.html#v:failIfInvalidYear"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a SmartDate to an absolute date using the provided reference date.\n\u003c/p\u003e",
          "module": "Hledger.Data.Dates",
          "name": "fixSmartDate",
          "package": "hledger-lib",
          "signature": "Day -\u003e SmartDate -\u003e Day",
          "source": "src/Hledger-Data-Dates.html#fixSmartDate",
          "type": "function"
        },
        "index": {
          "description": "Convert SmartDate to an absolute date using the provided reference date",
          "hierarchy": "Hledger Data Dates",
          "module": "Hledger.Data.Dates",
          "name": "fixSmartDate",
          "normalized": "Day-\u003eSmartDate-\u003eDay",
          "package": "hledger-lib",
          "partial": "Smart Date",
          "signature": "Day-\u003eSmartDate-\u003eDay",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Dates.html#v:fixSmartDate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a smart date string to an explicit yyyy/mm/dd string using\n the provided reference date, or raise an error.\n\u003c/p\u003e",
          "module": "Hledger.Data.Dates",
          "name": "fixSmartDateStr",
          "package": "hledger-lib",
          "signature": "Day -\u003e String -\u003e String",
          "source": "src/Hledger-Data-Dates.html#fixSmartDateStr",
          "type": "function"
        },
        "index": {
          "description": "Convert smart date string to an explicit yyyy mm dd string using the provided reference date or raise an error",
          "hierarchy": "Hledger Data Dates",
          "module": "Hledger.Data.Dates",
          "name": "fixSmartDateStr",
          "normalized": "Day-\u003eString-\u003eString",
          "package": "hledger-lib",
          "partial": "Smart Date Str",
          "signature": "Day-\u003eString-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Dates.html#v:fixSmartDateStr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA safe version of fixSmartDateStr.\n\u003c/p\u003e",
          "module": "Hledger.Data.Dates",
          "name": "fixSmartDateStrEither",
          "package": "hledger-lib",
          "signature": "Day -\u003e String -\u003e Either ParseError String",
          "source": "src/Hledger-Data-Dates.html#fixSmartDateStrEither",
          "type": "function"
        },
        "index": {
          "description": "safe version of fixSmartDateStr",
          "hierarchy": "Hledger Data Dates",
          "module": "Hledger.Data.Dates",
          "name": "fixSmartDateStrEither",
          "normalized": "Day-\u003eString-\u003eEither ParseError String",
          "package": "hledger-lib",
          "partial": "Smart Date Str Either",
          "signature": "Day-\u003eString-\u003eEither ParseError String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Dates.html#v:fixSmartDateStrEither"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Data.Dates",
          "name": "fixSmartDateStrEither'",
          "package": "hledger-lib",
          "signature": "Day -\u003e String -\u003e Either ParseError Day",
          "source": "src/Hledger-Data-Dates.html#fixSmartDateStrEither%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Data Dates",
          "module": "Hledger.Data.Dates",
          "name": "fixSmartDateStrEither'",
          "normalized": "Day-\u003eString-\u003eEither ParseError Day",
          "package": "hledger-lib",
          "partial": "Smart Date Str Either'",
          "signature": "Day-\u003eString-\u003eEither ParseError Day",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Dates.html#v:fixSmartDateStrEither-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the current local date.\n\u003c/p\u003e",
          "module": "Hledger.Data.Dates",
          "name": "getCurrentDay",
          "package": "hledger-lib",
          "signature": "IO Day",
          "source": "src/Hledger-Data-Dates.html#getCurrentDay",
          "type": "function"
        },
        "index": {
          "description": "Get the current local date",
          "hierarchy": "Hledger Data Dates",
          "module": "Hledger.Data.Dates",
          "name": "getCurrentDay",
          "package": "hledger-lib",
          "partial": "Current Day",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Dates.html#v:getCurrentDay"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the current local month number.\n\u003c/p\u003e",
          "module": "Hledger.Data.Dates",
          "name": "getCurrentMonth",
          "package": "hledger-lib",
          "signature": "IO Int",
          "source": "src/Hledger-Data-Dates.html#getCurrentMonth",
          "type": "function"
        },
        "index": {
          "description": "Get the current local month number",
          "hierarchy": "Hledger Data Dates",
          "module": "Hledger.Data.Dates",
          "name": "getCurrentMonth",
          "package": "hledger-lib",
          "partial": "Current Month",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Dates.html#v:getCurrentMonth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the current local year.\n\u003c/p\u003e",
          "module": "Hledger.Data.Dates",
          "name": "getCurrentYear",
          "package": "hledger-lib",
          "signature": "IO Integer",
          "source": "src/Hledger-Data-Dates.html#getCurrentYear",
          "type": "function"
        },
        "index": {
          "description": "Get the current local year",
          "hierarchy": "Hledger Data Dates",
          "module": "Hledger.Data.Dates",
          "name": "getCurrentYear",
          "package": "hledger-lib",
          "partial": "Current Year",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Dates.html#v:getCurrentYear"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Data.Dates",
          "name": "maybePeriod",
          "package": "hledger-lib",
          "signature": "Day -\u003e String -\u003e Maybe (Interval, DateSpan)",
          "source": "src/Hledger-Data-Dates.html#maybePeriod",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Data Dates",
          "module": "Hledger.Data.Dates",
          "name": "maybePeriod",
          "normalized": "Day-\u003eString-\u003eMaybe(Interval,DateSpan)",
          "package": "hledger-lib",
          "partial": "Period",
          "signature": "Day-\u003eString-\u003eMaybe(Interval,DateSpan)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Dates.html#v:maybePeriod"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake a datespan from two valid date strings parseable by parsedate\n (or raise an error). Eg: mkdatespan \"2011\u003cem\u003e1\u003c/em\u003e1\" \"2011\u003cem\u003e12\u003c/em\u003e31\".\n\u003c/p\u003e",
          "module": "Hledger.Data.Dates",
          "name": "mkdatespan",
          "package": "hledger-lib",
          "signature": "String -\u003e String -\u003e DateSpan",
          "source": "src/Hledger-Data-Dates.html#mkdatespan",
          "type": "function"
        },
        "index": {
          "description": "Make datespan from two valid date strings parseable by parsedate or raise an error Eg mkdatespan",
          "hierarchy": "Hledger Data Dates",
          "module": "Hledger.Data.Dates",
          "name": "mkdatespan",
          "normalized": "String-\u003eString-\u003eDateSpan",
          "package": "hledger-lib",
          "signature": "String-\u003eString-\u003eDateSpan",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Dates.html#v:mkdatespan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Data.Dates",
          "name": "nulldate",
          "package": "hledger-lib",
          "signature": "Day",
          "source": "src/Hledger-Data-Dates.html#nulldate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Data Dates",
          "module": "Hledger.Data.Dates",
          "name": "nulldate",
          "package": "hledger-lib",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Dates.html#v:nulldate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Data.Dates",
          "name": "nulldatespan",
          "package": "hledger-lib",
          "signature": "DateSpan",
          "source": "src/Hledger-Data-Dates.html#nulldatespan",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Data Dates",
          "module": "Hledger.Data.Dates",
          "name": "nulldatespan",
          "package": "hledger-lib",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Dates.html#v:nulldatespan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCombine two datespans, filling any unspecified dates in the first\n with dates from the second. Not a clip operation, just uses the\n second's start/end dates as defaults when the first does not\n specify them.\n\u003c/p\u003e",
          "module": "Hledger.Data.Dates",
          "name": "orDatesFrom",
          "package": "hledger-lib",
          "signature": "DateSpan -\u003e DateSpan -\u003e DateSpan",
          "source": "src/Hledger-Data-Dates.html#orDatesFrom",
          "type": "function"
        },
        "index": {
          "description": "Combine two datespans filling any unspecified dates in the first with dates from the second Not clip operation just uses the second start end dates as defaults when the first does not specify them",
          "hierarchy": "Hledger Data Dates",
          "module": "Hledger.Data.Dates",
          "name": "orDatesFrom",
          "normalized": "DateSpan-\u003eDateSpan-\u003eDateSpan",
          "package": "hledger-lib",
          "partial": "Dates From",
          "signature": "DateSpan-\u003eDateSpan-\u003eDateSpan",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Dates.html#v:orDatesFrom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a period expression to an Interval and overall DateSpan using\n the provided reference date, or return a parse error.\n\u003c/p\u003e",
          "module": "Hledger.Data.Dates",
          "name": "parsePeriodExpr",
          "package": "hledger-lib",
          "signature": "Day -\u003e String -\u003e Either ParseError (Interval, DateSpan)",
          "source": "src/Hledger-Data-Dates.html#parsePeriodExpr",
          "type": "function"
        },
        "index": {
          "description": "Parse period expression to an Interval and overall DateSpan using the provided reference date or return parse error",
          "hierarchy": "Hledger Data Dates",
          "module": "Hledger.Data.Dates",
          "name": "parsePeriodExpr",
          "normalized": "Day-\u003eString-\u003eEither ParseError(Interval,DateSpan)",
          "package": "hledger-lib",
          "partial": "Period Expr",
          "signature": "Day-\u003eString-\u003eEither ParseError(Interval,DateSpan)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Dates.html#v:parsePeriodExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a date string to a time type, or raise an error.\n\u003c/p\u003e",
          "module": "Hledger.Data.Dates",
          "name": "parsedate",
          "package": "hledger-lib",
          "signature": "String -\u003e Day",
          "source": "src/Hledger-Data-Dates.html#parsedate",
          "type": "function"
        },
        "index": {
          "description": "Parse date string to time type or raise an error",
          "hierarchy": "Hledger Data Dates",
          "module": "Hledger.Data.Dates",
          "name": "parsedate",
          "normalized": "String-\u003eDay",
          "package": "hledger-lib",
          "signature": "String-\u003eDay",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Dates.html#v:parsedate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a couple of date string formats to a time type.\n\u003c/p\u003e",
          "module": "Hledger.Data.Dates",
          "name": "parsedateM",
          "package": "hledger-lib",
          "signature": "String -\u003e Maybe Day",
          "source": "src/Hledger-Data-Dates.html#parsedateM",
          "type": "function"
        },
        "index": {
          "description": "Parse couple of date string formats to time type",
          "hierarchy": "Hledger Data Dates",
          "module": "Hledger.Data.Dates",
          "name": "parsedateM",
          "normalized": "String-\u003eMaybe Day",
          "package": "hledger-lib",
          "signature": "String-\u003eMaybe Day",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Dates.html#v:parsedateM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Data.Dates",
          "name": "prevday",
          "package": "hledger-lib",
          "signature": "Day -\u003e Day",
          "source": "src/Hledger-Data-Dates.html#prevday",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Data Dates",
          "module": "Hledger.Data.Dates",
          "name": "prevday",
          "normalized": "Day-\u003eDay",
          "package": "hledger-lib",
          "signature": "Day-\u003eDay",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Dates.html#v:prevday"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Data.Dates",
          "name": "showDate",
          "package": "hledger-lib",
          "signature": "Day -\u003e String",
          "source": "src/Hledger-Data-Dates.html#showDate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Data Dates",
          "module": "Hledger.Data.Dates",
          "name": "showDate",
          "normalized": "Day-\u003eString",
          "package": "hledger-lib",
          "partial": "Date",
          "signature": "Day-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Dates.html#v:showDate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Data.Dates",
          "name": "showDateSpan",
          "package": "hledger-lib",
          "signature": "DateSpan -\u003e [Char]",
          "source": "src/Hledger-Data-Dates.html#showDateSpan",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Data Dates",
          "module": "Hledger.Data.Dates",
          "name": "showDateSpan",
          "normalized": "DateSpan-\u003e[Char]",
          "package": "hledger-lib",
          "partial": "Date Span",
          "signature": "DateSpan-\u003e[Char]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Dates.html#v:showDateSpan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a date in any of the formats allowed in ledger's period expressions,\nand maybe some others:\n\u003c/p\u003e\u003cpre\u003e 2004\n 2004/10\n 2004/10/1\n 10/1\n 21\n october, oct\n yesterday, today, tomorrow\n this/next/last week/day/month/quarter/year\n\u003c/pre\u003e\u003cp\u003eReturns a SmartDate, to be converted to a full date later (see fixSmartDate).\nAssumes any text in the parse stream has been lowercased.\n\u003c/p\u003e",
          "module": "Hledger.Data.Dates",
          "name": "smartdate",
          "package": "hledger-lib",
          "signature": "GenParser Char st SmartDate",
          "source": "src/Hledger-Data-Dates.html#smartdate",
          "type": "function"
        },
        "index": {
          "description": "Parse date in any of the formats allowed in ledger period expressions and maybe some others october oct yesterday today tomorrow this next last week day month quarter year Returns SmartDate to be converted to full date later see fixSmartDate Assumes any text in the parse stream has been lowercased",
          "hierarchy": "Hledger Data Dates",
          "module": "Hledger.Data.Dates",
          "name": "smartdate",
          "package": "hledger-lib",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Dates.html#v:smartdate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDoes the span include the given date ?\n\u003c/p\u003e",
          "module": "Hledger.Data.Dates",
          "name": "spanContainsDate",
          "package": "hledger-lib",
          "signature": "DateSpan -\u003e Day -\u003e Bool",
          "source": "src/Hledger-Data-Dates.html#spanContainsDate",
          "type": "function"
        },
        "index": {
          "description": "Does the span include the given date",
          "hierarchy": "Hledger Data Dates",
          "module": "Hledger.Data.Dates",
          "name": "spanContainsDate",
          "normalized": "DateSpan-\u003eDay-\u003eBool",
          "package": "hledger-lib",
          "partial": "Contains Date",
          "signature": "DateSpan-\u003eDay-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Dates.html#v:spanContainsDate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Data.Dates",
          "name": "spanEnd",
          "package": "hledger-lib",
          "signature": "DateSpan -\u003e Maybe Day",
          "source": "src/Hledger-Data-Dates.html#spanEnd",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Data Dates",
          "module": "Hledger.Data.Dates",
          "name": "spanEnd",
          "normalized": "DateSpan-\u003eMaybe Day",
          "package": "hledger-lib",
          "partial": "End",
          "signature": "DateSpan-\u003eMaybe Day",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Dates.html#v:spanEnd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalculate the intersection of two datespans.\n\u003c/p\u003e",
          "module": "Hledger.Data.Dates",
          "name": "spanIntersect",
          "package": "hledger-lib",
          "signature": "DateSpan -\u003e DateSpan -\u003e DateSpan",
          "source": "src/Hledger-Data-Dates.html#spanIntersect",
          "type": "function"
        },
        "index": {
          "description": "Calculate the intersection of two datespans",
          "hierarchy": "Hledger Data Dates",
          "module": "Hledger.Data.Dates",
          "name": "spanIntersect",
          "normalized": "DateSpan-\u003eDateSpan-\u003eDateSpan",
          "package": "hledger-lib",
          "partial": "Intersect",
          "signature": "DateSpan-\u003eDateSpan-\u003eDateSpan",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Dates.html#v:spanIntersect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Data.Dates",
          "name": "spanStart",
          "package": "hledger-lib",
          "signature": "DateSpan -\u003e Maybe Day",
          "source": "src/Hledger-Data-Dates.html#spanStart",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Data Dates",
          "module": "Hledger.Data.Dates",
          "name": "spanStart",
          "normalized": "DateSpan-\u003eMaybe Day",
          "package": "hledger-lib",
          "partial": "Start",
          "signature": "DateSpan-\u003eMaybe Day",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Dates.html#v:spanStart"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalculate the union of two datespans.\n\u003c/p\u003e",
          "module": "Hledger.Data.Dates",
          "name": "spanUnion",
          "package": "hledger-lib",
          "signature": "DateSpan -\u003e DateSpan -\u003e DateSpan",
          "source": "src/Hledger-Data-Dates.html#spanUnion",
          "type": "function"
        },
        "index": {
          "description": "Calculate the union of two datespans",
          "hierarchy": "Hledger Data Dates",
          "module": "Hledger.Data.Dates",
          "name": "spanUnion",
          "normalized": "DateSpan-\u003eDateSpan-\u003eDateSpan",
          "package": "hledger-lib",
          "partial": "Union",
          "signature": "DateSpan-\u003eDateSpan-\u003eDateSpan",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Dates.html#v:spanUnion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalculate the intersection of a number of datespans.\n\u003c/p\u003e",
          "module": "Hledger.Data.Dates",
          "name": "spansIntersect",
          "package": "hledger-lib",
          "signature": "[DateSpan] -\u003e DateSpan",
          "source": "src/Hledger-Data-Dates.html#spansIntersect",
          "type": "function"
        },
        "index": {
          "description": "Calculate the intersection of number of datespans",
          "hierarchy": "Hledger Data Dates",
          "module": "Hledger.Data.Dates",
          "name": "spansIntersect",
          "normalized": "[DateSpan]-\u003eDateSpan",
          "package": "hledger-lib",
          "partial": "Intersect",
          "signature": "[DateSpan]-\u003eDateSpan",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Dates.html#v:spansIntersect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet overall span enclosing multiple sequentially ordered spans.\n\u003c/p\u003e",
          "module": "Hledger.Data.Dates",
          "name": "spansSpan",
          "package": "hledger-lib",
          "signature": "[DateSpan] -\u003e DateSpan",
          "source": "src/Hledger-Data-Dates.html#spansSpan",
          "type": "function"
        },
        "index": {
          "description": "Get overall span enclosing multiple sequentially ordered spans",
          "hierarchy": "Hledger Data Dates",
          "module": "Hledger.Data.Dates",
          "name": "spansSpan",
          "normalized": "[DateSpan]-\u003eDateSpan",
          "package": "hledger-lib",
          "partial": "Span",
          "signature": "[DateSpan]-\u003eDateSpan",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Dates.html#v:spansSpan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalculate the union of a number of datespans.\n\u003c/p\u003e",
          "module": "Hledger.Data.Dates",
          "name": "spansUnion",
          "package": "hledger-lib",
          "signature": "[DateSpan] -\u003e DateSpan",
          "source": "src/Hledger-Data-Dates.html#spansUnion",
          "type": "function"
        },
        "index": {
          "description": "Calculate the union of number of datespans",
          "hierarchy": "Hledger Data Dates",
          "module": "Hledger.Data.Dates",
          "name": "spansUnion",
          "normalized": "[DateSpan]-\u003eDateSpan",
          "package": "hledger-lib",
          "partial": "Union",
          "signature": "[DateSpan]-\u003eDateSpan",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Dates.html#v:spansUnion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSplit a DateSpan into one or more consecutive spans at the specified interval.\n\u003c/p\u003e",
          "module": "Hledger.Data.Dates",
          "name": "splitSpan",
          "package": "hledger-lib",
          "signature": "Interval -\u003e DateSpan -\u003e [DateSpan]",
          "source": "src/Hledger-Data-Dates.html#splitSpan",
          "type": "function"
        },
        "index": {
          "description": "Split DateSpan into one or more consecutive spans at the specified interval",
          "hierarchy": "Hledger Data Dates",
          "module": "Hledger.Data.Dates",
          "name": "splitSpan",
          "normalized": "Interval-\u003eDateSpan-\u003e[DateSpan]",
          "package": "hledger-lib",
          "partial": "Span",
          "signature": "Interval-\u003eDateSpan-\u003e[DateSpan]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Dates.html#v:splitSpan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Data.Dates",
          "name": "tests_Hledger_Data_Dates",
          "package": "hledger-lib",
          "signature": "Test",
          "source": "src/Hledger-Data-Dates.html#tests_Hledger_Data_Dates",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Data Dates",
          "module": "Hledger.Data.Dates",
          "name": "tests_Hledger_Data_Dates",
          "package": "hledger-lib",
          "partial": "Hledger Data Dates",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Dates.html#v:tests_Hledger_Data_Dates"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Data.FormatStrings",
          "name": "FormatStrings",
          "package": "hledger-lib",
          "source": "src/Hledger-Data-FormatStrings.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Hledger Data FormatStrings",
          "module": "Hledger.Data.FormatStrings",
          "name": "FormatStrings",
          "package": "hledger-lib",
          "partial": "Format Strings",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-FormatStrings.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Data.FormatStrings",
          "name": "FormatString",
          "package": "hledger-lib",
          "source": "src/Hledger-Data-Types.html#FormatString",
          "type": "data"
        },
        "index": {
          "hierarchy": "Hledger Data FormatStrings",
          "module": "Hledger.Data.FormatStrings",
          "name": "FormatString",
          "package": "hledger-lib",
          "partial": "Format String",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-FormatStrings.html#t:FormatString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Data.FormatStrings",
          "name": "HledgerFormatField",
          "package": "hledger-lib",
          "source": "src/Hledger-Data-Types.html#HledgerFormatField",
          "type": "data"
        },
        "index": {
          "hierarchy": "Hledger Data FormatStrings",
          "module": "Hledger.Data.FormatStrings",
          "name": "HledgerFormatField",
          "package": "hledger-lib",
          "partial": "Hledger Format Field",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-FormatStrings.html#t:HledgerFormatField"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Hledger.Data.FormatStrings\",\"Hledger.Data.Types\"]",
          "name": "AccountField",
          "package": "hledger-lib",
          "signature": "AccountField",
          "source": "src/Hledger-Data-Types.html#HledgerFormatField",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-FormatStrings.html#v:AccountField\",\"http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#v:AccountField\"]"
        },
        "index": {
          "hierarchy": "Hledger Data FormatStrings",
          "module": "Hledger.Data.FormatStrings",
          "name": "AccountField",
          "package": "hledger-lib",
          "partial": "Account Field",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-FormatStrings.html#v:AccountField"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Hledger.Data.FormatStrings\",\"Hledger.Data.Types\"]",
          "name": "DefaultDateField",
          "package": "hledger-lib",
          "signature": "DefaultDateField",
          "source": "src/Hledger-Data-Types.html#HledgerFormatField",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-FormatStrings.html#v:DefaultDateField\",\"http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#v:DefaultDateField\"]"
        },
        "index": {
          "hierarchy": "Hledger Data FormatStrings",
          "module": "Hledger.Data.FormatStrings",
          "name": "DefaultDateField",
          "package": "hledger-lib",
          "partial": "Default Date Field",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-FormatStrings.html#v:DefaultDateField"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Hledger.Data.FormatStrings\",\"Hledger.Data.Types\"]",
          "name": "DepthSpacerField",
          "package": "hledger-lib",
          "signature": "DepthSpacerField",
          "source": "src/Hledger-Data-Types.html#HledgerFormatField",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-FormatStrings.html#v:DepthSpacerField\",\"http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#v:DepthSpacerField\"]"
        },
        "index": {
          "hierarchy": "Hledger Data FormatStrings",
          "module": "Hledger.Data.FormatStrings",
          "name": "DepthSpacerField",
          "package": "hledger-lib",
          "partial": "Depth Spacer Field",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-FormatStrings.html#v:DepthSpacerField"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Hledger.Data.FormatStrings\",\"Hledger.Data.Types\"]",
          "name": "DescriptionField",
          "package": "hledger-lib",
          "signature": "DescriptionField",
          "source": "src/Hledger-Data-Types.html#HledgerFormatField",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-FormatStrings.html#v:DescriptionField\",\"http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#v:DescriptionField\"]"
        },
        "index": {
          "hierarchy": "Hledger Data FormatStrings",
          "module": "Hledger.Data.FormatStrings",
          "name": "DescriptionField",
          "package": "hledger-lib",
          "partial": "Description Field",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-FormatStrings.html#v:DescriptionField"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Hledger.Data.FormatStrings\",\"Hledger.Data.Types\"]",
          "name": "FieldNo",
          "package": "hledger-lib",
          "signature": "FieldNo Int",
          "source": "src/Hledger-Data-Types.html#HledgerFormatField",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-FormatStrings.html#v:FieldNo\",\"http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#v:FieldNo\"]"
        },
        "index": {
          "hierarchy": "Hledger Data FormatStrings",
          "module": "Hledger.Data.FormatStrings",
          "name": "FieldNo",
          "package": "hledger-lib",
          "partial": "Field No",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-FormatStrings.html#v:FieldNo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Hledger.Data.FormatStrings\",\"Hledger.Data.Types\"]",
          "name": "FormatField",
          "package": "hledger-lib",
          "signature": "FormatField Bool (Maybe Int) (Maybe Int) HledgerFormatField",
          "source": "src/Hledger-Data-Types.html#FormatString",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-FormatStrings.html#v:FormatField\",\"http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#v:FormatField\"]"
        },
        "index": {
          "hierarchy": "Hledger Data FormatStrings",
          "module": "Hledger.Data.FormatStrings",
          "name": "FormatField",
          "package": "hledger-lib",
          "partial": "Format Field",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-FormatStrings.html#v:FormatField"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Hledger.Data.FormatStrings\",\"Hledger.Data.Types\"]",
          "name": "FormatLiteral",
          "package": "hledger-lib",
          "signature": "FormatLiteral String",
          "source": "src/Hledger-Data-Types.html#FormatString",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-FormatStrings.html#v:FormatLiteral\",\"http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#v:FormatLiteral\"]"
        },
        "index": {
          "hierarchy": "Hledger Data FormatStrings",
          "module": "Hledger.Data.FormatStrings",
          "name": "FormatLiteral",
          "package": "hledger-lib",
          "partial": "Format Literal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-FormatStrings.html#v:FormatLiteral"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Hledger.Data.FormatStrings\",\"Hledger.Data.Types\"]",
          "name": "TotalField",
          "package": "hledger-lib",
          "signature": "TotalField",
          "source": "src/Hledger-Data-Types.html#HledgerFormatField",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-FormatStrings.html#v:TotalField\",\"http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#v:TotalField\"]"
        },
        "index": {
          "hierarchy": "Hledger Data FormatStrings",
          "module": "Hledger.Data.FormatStrings",
          "name": "TotalField",
          "package": "hledger-lib",
          "partial": "Total Field",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-FormatStrings.html#v:TotalField"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Data.FormatStrings",
          "name": "formatStrings",
          "package": "hledger-lib",
          "signature": "GenParser Char st [FormatString]",
          "source": "src/Hledger-Data-FormatStrings.html#formatStrings",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Data FormatStrings",
          "module": "Hledger.Data.FormatStrings",
          "name": "formatStrings",
          "normalized": "GenParser Char a[FormatString]",
          "package": "hledger-lib",
          "partial": "Strings",
          "signature": "GenParser Char st[FormatString]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-FormatStrings.html#v:formatStrings"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Data.FormatStrings",
          "name": "formatValue",
          "package": "hledger-lib",
          "signature": "Bool -\u003e Maybe Int -\u003e Maybe Int -\u003e String -\u003e String",
          "source": "src/Hledger-Data-FormatStrings.html#formatValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Data FormatStrings",
          "module": "Hledger.Data.FormatStrings",
          "name": "formatValue",
          "normalized": "Bool-\u003eMaybe Int-\u003eMaybe Int-\u003eString-\u003eString",
          "package": "hledger-lib",
          "partial": "Value",
          "signature": "Bool-\u003eMaybe Int-\u003eMaybe Int-\u003eString-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-FormatStrings.html#v:formatValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Data.FormatStrings",
          "name": "parseFormatString",
          "package": "hledger-lib",
          "signature": "String -\u003e Either String [FormatString]",
          "source": "src/Hledger-Data-FormatStrings.html#parseFormatString",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Data FormatStrings",
          "module": "Hledger.Data.FormatStrings",
          "name": "parseFormatString",
          "normalized": "String-\u003eEither String[FormatString]",
          "package": "hledger-lib",
          "partial": "Format String",
          "signature": "String-\u003eEither String[FormatString]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-FormatStrings.html#v:parseFormatString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Data.FormatStrings",
          "name": "tests",
          "package": "hledger-lib",
          "signature": "Test",
          "source": "src/Hledger-Data-FormatStrings.html#tests",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Data FormatStrings",
          "module": "Hledger.Data.FormatStrings",
          "name": "tests",
          "package": "hledger-lib",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-FormatStrings.html#v:tests"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA \u003ccode\u003e\u003ca\u003eJournal\u003c/a\u003e\u003c/code\u003e is a set of transactions, plus optional related data.  This is\nhledger's primary data object. It is usually parsed from a journal file or\nother data format (see \u003ca\u003eHledger.Read\u003c/a\u003e).\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Hledger.Data.Journal",
          "name": "Journal",
          "package": "hledger-lib",
          "source": "src/Hledger-Data-Journal.html",
          "type": "module"
        },
        "index": {
          "description": "Journal is set of transactions plus optional related data This is hledger primary data object It is usually parsed from journal file or other data format see Hledger.Read",
          "hierarchy": "Hledger Data Journal",
          "module": "Hledger.Data.Journal",
          "name": "Journal",
          "package": "hledger-lib",
          "partial": "Journal",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Journal.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Data.Journal",
          "name": "addHistoricalPrice",
          "package": "hledger-lib",
          "signature": "HistoricalPrice -\u003e Journal -\u003e Journal",
          "source": "src/Hledger-Data-Journal.html#addHistoricalPrice",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Data Journal",
          "module": "Hledger.Data.Journal",
          "name": "addHistoricalPrice",
          "normalized": "HistoricalPrice-\u003eJournal-\u003eJournal",
          "package": "hledger-lib",
          "partial": "Historical Price",
          "signature": "HistoricalPrice-\u003eJournal-\u003eJournal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Journal.html#v:addHistoricalPrice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Data.Journal",
          "name": "addModifierTransaction",
          "package": "hledger-lib",
          "signature": "ModifierTransaction -\u003e Journal -\u003e Journal",
          "source": "src/Hledger-Data-Journal.html#addModifierTransaction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Data Journal",
          "module": "Hledger.Data.Journal",
          "name": "addModifierTransaction",
          "normalized": "ModifierTransaction-\u003eJournal-\u003eJournal",
          "package": "hledger-lib",
          "partial": "Modifier Transaction",
          "signature": "ModifierTransaction-\u003eJournal-\u003eJournal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Journal.html#v:addModifierTransaction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Data.Journal",
          "name": "addPeriodicTransaction",
          "package": "hledger-lib",
          "signature": "PeriodicTransaction -\u003e Journal -\u003e Journal",
          "source": "src/Hledger-Data-Journal.html#addPeriodicTransaction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Data Journal",
          "module": "Hledger.Data.Journal",
          "name": "addPeriodicTransaction",
          "normalized": "PeriodicTransaction-\u003eJournal-\u003eJournal",
          "package": "hledger-lib",
          "partial": "Periodic Transaction",
          "signature": "PeriodicTransaction-\u003eJournal-\u003eJournal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Journal.html#v:addPeriodicTransaction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Data.Journal",
          "name": "addTimeLogEntry",
          "package": "hledger-lib",
          "signature": "TimeLogEntry -\u003e Journal -\u003e Journal",
          "source": "src/Hledger-Data-Journal.html#addTimeLogEntry",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Data Journal",
          "module": "Hledger.Data.Journal",
          "name": "addTimeLogEntry",
          "normalized": "TimeLogEntry-\u003eJournal-\u003eJournal",
          "package": "hledger-lib",
          "partial": "Time Log Entry",
          "signature": "TimeLogEntry-\u003eJournal-\u003eJournal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Journal.html#v:addTimeLogEntry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Data.Journal",
          "name": "addTransaction",
          "package": "hledger-lib",
          "signature": "Transaction -\u003e Journal -\u003e Journal",
          "source": "src/Hledger-Data-Journal.html#addTransaction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Data Journal",
          "module": "Hledger.Data.Journal",
          "name": "addTransaction",
          "normalized": "Transaction-\u003eJournal-\u003eJournal",
          "package": "hledger-lib",
          "partial": "Transaction",
          "signature": "Transaction-\u003eJournal-\u003eJournal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Journal.html#v:addTransaction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eKeep only postings matching the query expression.\n This can leave unbalanced transactions.\n\u003c/p\u003e",
          "module": "Hledger.Data.Journal",
          "name": "filterJournalPostings",
          "package": "hledger-lib",
          "signature": "Query -\u003e Journal -\u003e Journal",
          "source": "src/Hledger-Data-Journal.html#filterJournalPostings",
          "type": "function"
        },
        "index": {
          "description": "Keep only postings matching the query expression This can leave unbalanced transactions",
          "hierarchy": "Hledger Data Journal",
          "module": "Hledger.Data.Journal",
          "name": "filterJournalPostings",
          "normalized": "Query-\u003eJournal-\u003eJournal",
          "package": "hledger-lib",
          "partial": "Journal Postings",
          "signature": "Query-\u003eJournal-\u003eJournal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Journal.html#v:filterJournalPostings"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eKeep only transactions matching the query expression.\n\u003c/p\u003e",
          "module": "Hledger.Data.Journal",
          "name": "filterJournalTransactions",
          "package": "hledger-lib",
          "signature": "Query -\u003e Journal -\u003e Journal",
          "source": "src/Hledger-Data-Journal.html#filterJournalTransactions",
          "type": "function"
        },
        "index": {
          "description": "Keep only transactions matching the query expression",
          "hierarchy": "Hledger Data Journal",
          "module": "Hledger.Data.Journal",
          "name": "filterJournalTransactions",
          "normalized": "Query-\u003eJournal-\u003eJournal",
          "package": "hledger-lib",
          "partial": "Journal Transactions",
          "signature": "Query-\u003eJournal-\u003eJournal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Journal.html#v:filterJournalTransactions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Data.Journal",
          "name": "journalAccountNames",
          "package": "hledger-lib",
          "signature": "Journal -\u003e [AccountName]",
          "source": "src/Hledger-Data-Journal.html#journalAccountNames",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Data Journal",
          "module": "Hledger.Data.Journal",
          "name": "journalAccountNames",
          "normalized": "Journal-\u003e[AccountName]",
          "package": "hledger-lib",
          "partial": "Account Names",
          "signature": "Journal-\u003e[AccountName]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Journal.html#v:journalAccountNames"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAll account names used in this journal.\n\u003c/p\u003e",
          "module": "Hledger.Data.Journal",
          "name": "journalAccountNamesUsed",
          "package": "hledger-lib",
          "signature": "Journal -\u003e [AccountName]",
          "source": "src/Hledger-Data-Journal.html#journalAccountNamesUsed",
          "type": "function"
        },
        "index": {
          "description": "All account names used in this journal",
          "hierarchy": "Hledger Data Journal",
          "module": "Hledger.Data.Journal",
          "name": "journalAccountNamesUsed",
          "normalized": "Journal-\u003e[AccountName]",
          "package": "hledger-lib",
          "partial": "Account Names Used",
          "signature": "Journal-\u003e[AccountName]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Journal.html#v:journalAccountNamesUsed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet all this journal's component amounts, roughly in the order parsed.\n\u003c/p\u003e",
          "module": "Hledger.Data.Journal",
          "name": "journalAmounts",
          "package": "hledger-lib",
          "signature": "Journal -\u003e [Amount]",
          "source": "src/Hledger-Data-Journal.html#journalAmounts",
          "type": "function"
        },
        "index": {
          "description": "Get all this journal component amounts roughly in the order parsed",
          "hierarchy": "Hledger Data Journal",
          "module": "Hledger.Data.Journal",
          "name": "journalAmounts",
          "normalized": "Journal-\u003e[Amount]",
          "package": "hledger-lib",
          "partial": "Amounts",
          "signature": "Journal-\u003e[Amount]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Journal.html#v:journalAmounts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply additional account aliases (eg from the command-line) to all postings in a journal.\n\u003c/p\u003e",
          "module": "Hledger.Data.Journal",
          "name": "journalApplyAliases",
          "package": "hledger-lib",
          "signature": "[(AccountName, AccountName)] -\u003e Journal -\u003e Journal",
          "source": "src/Hledger-Data-Journal.html#journalApplyAliases",
          "type": "function"
        },
        "index": {
          "description": "Apply additional account aliases eg from the command-line to all postings in journal",
          "hierarchy": "Hledger Data Journal",
          "module": "Hledger.Data.Journal",
          "name": "journalApplyAliases",
          "normalized": "[(AccountName,AccountName)]-\u003eJournal-\u003eJournal",
          "package": "hledger-lib",
          "partial": "Apply Aliases",
          "signature": "[(AccountName,AccountName)]-\u003eJournal-\u003eJournal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Journal.html#v:journalApplyAliases"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA query for Asset accounts in this journal.\n This is currently hard-coded to the case-insensitive regex \u003ccode\u003e^assets?(:|$)\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Hledger.Data.Journal",
          "name": "journalAssetAccountQuery",
          "package": "hledger-lib",
          "signature": "Journal -\u003e Query",
          "source": "src/Hledger-Data-Journal.html#journalAssetAccountQuery",
          "type": "function"
        },
        "index": {
          "description": "query for Asset accounts in this journal This is currently hard-coded to the case-insensitive regex assets",
          "hierarchy": "Hledger Data Journal",
          "module": "Hledger.Data.Journal",
          "name": "journalAssetAccountQuery",
          "normalized": "Journal-\u003eQuery",
          "package": "hledger-lib",
          "partial": "Asset Account Query",
          "signature": "Journal-\u003eQuery",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Journal.html#v:journalAssetAccountQuery"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA query for Asset, Liability & Equity accounts in this journal.\n Cf \u003ca\u003ehttp://en.wikipedia.org/wiki/Chart_of_accounts#Balance_Sheet_Accounts\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Hledger.Data.Journal",
          "name": "journalBalanceSheetAccountQuery",
          "package": "hledger-lib",
          "signature": "Journal -\u003e Query",
          "source": "src/Hledger-Data-Journal.html#journalBalanceSheetAccountQuery",
          "type": "function"
        },
        "index": {
          "description": "query for Asset Liability Equity accounts in this journal Cf http en.wikipedia.org wiki Chart of accounts Balance Sheet Accounts",
          "hierarchy": "Hledger Data Journal",
          "module": "Hledger.Data.Journal",
          "name": "journalBalanceSheetAccountQuery",
          "normalized": "Journal-\u003eQuery",
          "package": "hledger-lib",
          "partial": "Balance Sheet Account Query",
          "signature": "Journal-\u003eQuery",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Journal.html#v:journalBalanceSheetAccountQuery"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFill in any missing amounts and check that all journal transactions\n balance, or return an error message. This is done after parsing all\n amounts and working out the canonical commodities, since balancing\n depends on display precision. Reports only the first error encountered.\n\u003c/p\u003e",
          "module": "Hledger.Data.Journal",
          "name": "journalBalanceTransactions",
          "package": "hledger-lib",
          "signature": "Journal -\u003e Either String Journal",
          "source": "src/Hledger-Data-Journal.html#journalBalanceTransactions",
          "type": "function"
        },
        "index": {
          "description": "Fill in any missing amounts and check that all journal transactions balance or return an error message This is done after parsing all amounts and working out the canonical commodities since balancing depends on display precision Reports only the first error encountered",
          "hierarchy": "Hledger Data Journal",
          "module": "Hledger.Data.Journal",
          "name": "journalBalanceTransactions",
          "normalized": "Journal-\u003eEither String Journal",
          "package": "hledger-lib",
          "partial": "Balance Transactions",
          "signature": "Journal-\u003eEither String Journal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Journal.html#v:journalBalanceTransactions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert all the journal's posting amounts (not price amounts) to\n their canonical display settings. Ie, all amounts in a given\n commodity will use (a) the display settings of the first, and (b)\n the greatest precision, of the posting amounts in that commodity.\n\u003c/p\u003e",
          "module": "Hledger.Data.Journal",
          "name": "journalCanonicaliseAmounts",
          "package": "hledger-lib",
          "signature": "Journal -\u003e Journal",
          "source": "src/Hledger-Data-Journal.html#journalCanonicaliseAmounts",
          "type": "function"
        },
        "index": {
          "description": "Convert all the journal posting amounts not price amounts to their canonical display settings Ie all amounts in given commodity will use the display settings of the first and the greatest precision of the posting amounts in that commodity",
          "hierarchy": "Hledger Data Journal",
          "module": "Hledger.Data.Journal",
          "name": "journalCanonicaliseAmounts",
          "normalized": "Journal-\u003eJournal",
          "package": "hledger-lib",
          "partial": "Canonicalise Amounts",
          "signature": "Journal-\u003eJournal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Journal.html#v:journalCanonicaliseAmounts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA query for Cash (-equivalent) accounts in this journal (ie,\n accounts which appear on the cashflow statement.)  This is currently\n hard-coded to be all the Asset accounts except for those containing the\n case-insensitive regex \u003ccode\u003e(receivable|A/R)\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Hledger.Data.Journal",
          "name": "journalCashAccountQuery",
          "package": "hledger-lib",
          "signature": "Journal -\u003e Query",
          "source": "src/Hledger-Data-Journal.html#journalCashAccountQuery",
          "type": "function"
        },
        "index": {
          "description": "query for Cash equivalent accounts in this journal ie accounts which appear on the cashflow statement This is currently hard-coded to be all the Asset accounts except for those containing the case-insensitive regex receivable",
          "hierarchy": "Hledger Data Journal",
          "module": "Hledger.Data.Journal",
          "name": "journalCashAccountQuery",
          "normalized": "Journal-\u003eQuery",
          "package": "hledger-lib",
          "partial": "Cash Account Query",
          "signature": "Journal-\u003eQuery",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Journal.html#v:journalCashAccountQuery"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert all this journal's amounts to cost by applying their prices, if any.\n\u003c/p\u003e",
          "module": "Hledger.Data.Journal",
          "name": "journalConvertAmountsToCost",
          "package": "hledger-lib",
          "signature": "Journal -\u003e Journal",
          "source": "src/Hledger-Data-Journal.html#journalConvertAmountsToCost",
          "type": "function"
        },
        "index": {
          "description": "Convert all this journal amounts to cost by applying their prices if any",
          "hierarchy": "Hledger Data Journal",
          "module": "Hledger.Data.Journal",
          "name": "journalConvertAmountsToCost",
          "normalized": "Journal-\u003eJournal",
          "package": "hledger-lib",
          "partial": "Convert Amounts To Cost",
          "signature": "Journal-\u003eJournal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Journal.html#v:journalConvertAmountsToCost"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe (fully specified) date span containing this journal's transactions,\n or DateSpan Nothing Nothing if there are none.\n\u003c/p\u003e",
          "module": "Hledger.Data.Journal",
          "name": "journalDateSpan",
          "package": "hledger-lib",
          "signature": "Journal -\u003e DateSpan",
          "source": "src/Hledger-Data-Journal.html#journalDateSpan",
          "type": "function"
        },
        "index": {
          "description": "The fully specified date span containing this journal transactions or DateSpan Nothing Nothing if there are none",
          "hierarchy": "Hledger Data Journal",
          "module": "Hledger.Data.Journal",
          "name": "journalDateSpan",
          "normalized": "Journal-\u003eDateSpan",
          "package": "hledger-lib",
          "partial": "Date Span",
          "signature": "Journal-\u003eDateSpan",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Journal.html#v:journalDateSpan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA query for Equity accounts in this journal.\n This is currently hard-coded to the case-insensitive regex \u003ccode\u003e^equity(:|$)\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Hledger.Data.Journal",
          "name": "journalEquityAccountQuery",
          "package": "hledger-lib",
          "signature": "Journal -\u003e Query",
          "source": "src/Hledger-Data-Journal.html#journalEquityAccountQuery",
          "type": "function"
        },
        "index": {
          "description": "query for Equity accounts in this journal This is currently hard-coded to the case-insensitive regex equity",
          "hierarchy": "Hledger Data Journal",
          "module": "Hledger.Data.Journal",
          "name": "journalEquityAccountQuery",
          "normalized": "Journal-\u003eQuery",
          "package": "hledger-lib",
          "partial": "Equity Account Query",
          "signature": "Journal-\u003eQuery",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Journal.html#v:journalEquityAccountQuery"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA query for Expense accounts in this journal.\n This is currently hard-coded to the case-insensitive regex \u003ccode\u003e^expenses?(:|$)\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Hledger.Data.Journal",
          "name": "journalExpenseAccountQuery",
          "package": "hledger-lib",
          "signature": "Journal -\u003e Query",
          "source": "src/Hledger-Data-Journal.html#journalExpenseAccountQuery",
          "type": "function"
        },
        "index": {
          "description": "query for Expense accounts in this journal This is currently hard-coded to the case-insensitive regex expenses",
          "hierarchy": "Hledger Data Journal",
          "module": "Hledger.Data.Journal",
          "name": "journalExpenseAccountQuery",
          "normalized": "Journal-\u003eQuery",
          "package": "hledger-lib",
          "partial": "Expense Account Query",
          "signature": "Journal-\u003eQuery",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Journal.html#v:journalExpenseAccountQuery"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Data.Journal",
          "name": "journalFilePath",
          "package": "hledger-lib",
          "signature": "Journal -\u003e FilePath",
          "source": "src/Hledger-Data-Journal.html#journalFilePath",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Data Journal",
          "module": "Hledger.Data.Journal",
          "name": "journalFilePath",
          "normalized": "Journal-\u003eFilePath",
          "package": "hledger-lib",
          "partial": "File Path",
          "signature": "Journal-\u003eFilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Journal.html#v:journalFilePath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Data.Journal",
          "name": "journalFilePaths",
          "package": "hledger-lib",
          "signature": "Journal -\u003e [FilePath]",
          "source": "src/Hledger-Data-Journal.html#journalFilePaths",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Data Journal",
          "module": "Hledger.Data.Journal",
          "name": "journalFilePaths",
          "normalized": "Journal-\u003e[FilePath]",
          "package": "hledger-lib",
          "partial": "File Paths",
          "signature": "Journal-\u003e[FilePath]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Journal.html#v:journalFilePaths"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDo post-parse processing on a journal to make it ready for use: check\n all transactions balance, canonicalise amount formats, close any open\n timelog entries and so on.\n\u003c/p\u003e",
          "module": "Hledger.Data.Journal",
          "name": "journalFinalise",
          "package": "hledger-lib",
          "signature": "ClockTime -\u003e LocalTime -\u003e FilePath -\u003e String -\u003e JournalContext -\u003e Journal -\u003e Either String Journal",
          "source": "src/Hledger-Data-Journal.html#journalFinalise",
          "type": "function"
        },
        "index": {
          "description": "Do post-parse processing on journal to make it ready for use check all transactions balance canonicalise amount formats close any open timelog entries and so on",
          "hierarchy": "Hledger Data Journal",
          "module": "Hledger.Data.Journal",
          "name": "journalFinalise",
          "normalized": "ClockTime-\u003eLocalTime-\u003eFilePath-\u003eString-\u003eJournalContext-\u003eJournal-\u003eEither String Journal",
          "package": "hledger-lib",
          "partial": "Finalise",
          "signature": "ClockTime-\u003eLocalTime-\u003eFilePath-\u003eString-\u003eJournalContext-\u003eJournal-\u003eEither String Journal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Journal.html#v:journalFinalise"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA query for Income (Revenue) accounts in this journal.\n This is currently hard-coded to the case-insensitive regex \u003ccode\u003e^(income|revenue)s?(:|$)\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Hledger.Data.Journal",
          "name": "journalIncomeAccountQuery",
          "package": "hledger-lib",
          "signature": "Journal -\u003e Query",
          "source": "src/Hledger-Data-Journal.html#journalIncomeAccountQuery",
          "type": "function"
        },
        "index": {
          "description": "query for Income Revenue accounts in this journal This is currently hard-coded to the case-insensitive regex income revenue",
          "hierarchy": "Hledger Data Journal",
          "module": "Hledger.Data.Journal",
          "name": "journalIncomeAccountQuery",
          "normalized": "Journal-\u003eQuery",
          "package": "hledger-lib",
          "partial": "Income Account Query",
          "signature": "Journal-\u003eQuery",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Journal.html#v:journalIncomeAccountQuery"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA query for Liability accounts in this journal.\n This is currently hard-coded to the case-insensitive regex \u003ccode\u003e^liabilit(y|ies)(:|$)\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Hledger.Data.Journal",
          "name": "journalLiabilityAccountQuery",
          "package": "hledger-lib",
          "signature": "Journal -\u003e Query",
          "source": "src/Hledger-Data-Journal.html#journalLiabilityAccountQuery",
          "type": "function"
        },
        "index": {
          "description": "query for Liability accounts in this journal This is currently hard-coded to the case-insensitive regex liabilit ies",
          "hierarchy": "Hledger Data Journal",
          "module": "Hledger.Data.Journal",
          "name": "journalLiabilityAccountQuery",
          "normalized": "Journal-\u003eQuery",
          "package": "hledger-lib",
          "partial": "Liability Account Query",
          "signature": "Journal-\u003eQuery",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Journal.html#v:journalLiabilityAccountQuery"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Data.Journal",
          "name": "journalPostings",
          "package": "hledger-lib",
          "signature": "Journal -\u003e [Posting]",
          "source": "src/Hledger-Data-Journal.html#journalPostings",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Data Journal",
          "module": "Hledger.Data.Journal",
          "name": "journalPostings",
          "normalized": "Journal-\u003e[Posting]",
          "package": "hledger-lib",
          "partial": "Postings",
          "signature": "Journal-\u003e[Posting]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Journal.html#v:journalPostings"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA query for Profit & Loss accounts in this journal.\n Cf \u003ca\u003ehttp://en.wikipedia.org/wiki/Chart_of_accounts#Profit_.26_Loss_accounts\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Hledger.Data.Journal",
          "name": "journalProfitAndLossAccountQuery",
          "package": "hledger-lib",
          "signature": "Journal -\u003e Query",
          "source": "src/Hledger-Data-Journal.html#journalProfitAndLossAccountQuery",
          "type": "function"
        },
        "index": {
          "description": "query for Profit Loss accounts in this journal Cf http en.wikipedia.org wiki Chart of accounts Profit Loss accounts",
          "hierarchy": "Hledger Data Journal",
          "module": "Hledger.Data.Journal",
          "name": "journalProfitAndLossAccountQuery",
          "normalized": "Journal-\u003eQuery",
          "package": "hledger-lib",
          "partial": "Profit And Loss Account Query",
          "signature": "Journal-\u003eQuery",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Journal.html#v:journalProfitAndLossAccountQuery"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck if a set of hledger account/description filter patterns matches the\n given account name or entry description.  Patterns are case-insensitive\n regular expressions. Prefixed with not:, they become anti-patterns.\n\u003c/p\u003e",
          "module": "Hledger.Data.Journal",
          "name": "matchpats",
          "package": "hledger-lib",
          "signature": "[String] -\u003e String -\u003e Bool",
          "source": "src/Hledger-Data-Journal.html#matchpats",
          "type": "function"
        },
        "index": {
          "description": "Check if set of hledger account description filter patterns matches the given account name or entry description Patterns are case-insensitive regular expressions Prefixed with not they become anti-patterns",
          "hierarchy": "Hledger Data Journal",
          "module": "Hledger.Data.Journal",
          "name": "matchpats",
          "normalized": "[String]-\u003eString-\u003eBool",
          "package": "hledger-lib",
          "signature": "[String]-\u003eString-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Journal.html#v:matchpats"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Data.Journal",
          "name": "nullctx",
          "package": "hledger-lib",
          "signature": "JournalContext",
          "source": "src/Hledger-Data-Journal.html#nullctx",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Data Journal",
          "module": "Hledger.Data.Journal",
          "name": "nullctx",
          "package": "hledger-lib",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Journal.html#v:nullctx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Data.Journal",
          "name": "nulljournal",
          "package": "hledger-lib",
          "signature": "Journal",
          "source": "src/Hledger-Data-Journal.html#nulljournal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Data Journal",
          "module": "Hledger.Data.Journal",
          "name": "nulljournal",
          "package": "hledger-lib",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Journal.html#v:nulljournal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Data.Journal",
          "name": "samplejournal",
          "package": "hledger-lib",
          "signature": "Journal",
          "source": "src/Hledger-Data-Journal.html#samplejournal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Data Journal",
          "module": "Hledger.Data.Journal",
          "name": "samplejournal",
          "package": "hledger-lib",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Journal.html#v:samplejournal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Data.Journal",
          "name": "tests_Hledger_Data_Journal",
          "package": "hledger-lib",
          "signature": "Test",
          "source": "src/Hledger-Data-Journal.html#tests_Hledger_Data_Journal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Data Journal",
          "module": "Hledger.Data.Journal",
          "name": "tests_Hledger_Data_Journal",
          "package": "hledger-lib",
          "partial": "Hledger Data Journal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Journal.html#v:tests_Hledger_Data_Journal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA \u003ccode\u003e\u003ca\u003eLedger\u003c/a\u003e\u003c/code\u003e is derived from a \u003ccode\u003e\u003ca\u003eJournal\u003c/a\u003e\u003c/code\u003e by applying a filter specification\nto select \u003ccode\u003e\u003ca\u003eTransaction\u003c/a\u003e\u003c/code\u003es and \u003ccode\u003e\u003ca\u003ePosting\u003c/a\u003e\u003c/code\u003es of interest. It contains the\nfiltered journal and knows the resulting chart of accounts, account\nbalances, and postings in each account.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Hledger.Data.Ledger",
          "name": "Ledger",
          "package": "hledger-lib",
          "source": "src/Hledger-Data-Ledger.html",
          "type": "module"
        },
        "index": {
          "description": "Ledger is derived from Journal by applying filter specification to select Transaction and Posting of interest It contains the filtered journal and knows the resulting chart of accounts account balances and postings in each account",
          "hierarchy": "Hledger Data Ledger",
          "module": "Hledger.Data.Ledger",
          "name": "Ledger",
          "package": "hledger-lib",
          "partial": "Ledger",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Ledger.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the named account from a ledger.\n\u003c/p\u003e",
          "module": "Hledger.Data.Ledger",
          "name": "ledgerAccount",
          "package": "hledger-lib",
          "signature": "Ledger -\u003e AccountName -\u003e Maybe Account",
          "source": "src/Hledger-Data-Ledger.html#ledgerAccount",
          "type": "function"
        },
        "index": {
          "description": "Get the named account from ledger",
          "hierarchy": "Hledger Data Ledger",
          "module": "Hledger.Data.Ledger",
          "name": "ledgerAccount",
          "normalized": "Ledger-\u003eAccountName-\u003eMaybe Account",
          "package": "hledger-lib",
          "partial": "Account",
          "signature": "Ledger-\u003eAccountName-\u003eMaybe Account",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Ledger.html#v:ledgerAccount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eList a ledger's account names.\n\u003c/p\u003e",
          "module": "Hledger.Data.Ledger",
          "name": "ledgerAccountNames",
          "package": "hledger-lib",
          "signature": "Ledger -\u003e [AccountName]",
          "source": "src/Hledger-Data-Ledger.html#ledgerAccountNames",
          "type": "function"
        },
        "index": {
          "description": "List ledger account names",
          "hierarchy": "Hledger Data Ledger",
          "module": "Hledger.Data.Ledger",
          "name": "ledgerAccountNames",
          "normalized": "Ledger-\u003e[AccountName]",
          "package": "hledger-lib",
          "partial": "Account Names",
          "signature": "Ledger-\u003e[AccountName]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Ledger.html#v:ledgerAccountNames"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAccounts in ledger whose name matches the pattern, in tree order.\n\u003c/p\u003e",
          "module": "Hledger.Data.Ledger",
          "name": "ledgerAccountsMatching",
          "package": "hledger-lib",
          "signature": "[String] -\u003e Ledger -\u003e [Account]",
          "source": "src/Hledger-Data-Ledger.html#ledgerAccountsMatching",
          "type": "function"
        },
        "index": {
          "description": "Accounts in ledger whose name matches the pattern in tree order",
          "hierarchy": "Hledger Data Ledger",
          "module": "Hledger.Data.Ledger",
          "name": "ledgerAccountsMatching",
          "normalized": "[String]-\u003eLedger-\u003e[Account]",
          "package": "hledger-lib",
          "partial": "Accounts Matching",
          "signature": "[String]-\u003eLedger-\u003e[Account]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Ledger.html#v:ledgerAccountsMatching"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAll commodities used in this ledger.\n\u003c/p\u003e",
          "module": "Hledger.Data.Ledger",
          "name": "ledgerCommodities",
          "package": "hledger-lib",
          "signature": "Ledger -\u003e [Commodity]",
          "source": "src/Hledger-Data-Ledger.html#ledgerCommodities",
          "type": "function"
        },
        "index": {
          "description": "All commodities used in this ledger",
          "hierarchy": "Hledger Data Ledger",
          "module": "Hledger.Data.Ledger",
          "name": "ledgerCommodities",
          "normalized": "Ledger-\u003e[Commodity]",
          "package": "hledger-lib",
          "partial": "Commodities",
          "signature": "Ledger-\u003e[Commodity]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Ledger.html#v:ledgerCommodities"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe (fully specified) date span containing all the ledger's (filtered) transactions,\n or DateSpan Nothing Nothing if there are none.\n\u003c/p\u003e",
          "module": "Hledger.Data.Ledger",
          "name": "ledgerDateSpan",
          "package": "hledger-lib",
          "signature": "Ledger -\u003e DateSpan",
          "source": "src/Hledger-Data-Ledger.html#ledgerDateSpan",
          "type": "function"
        },
        "index": {
          "description": "The fully specified date span containing all the ledger filtered transactions or DateSpan Nothing Nothing if there are none",
          "hierarchy": "Hledger Data Ledger",
          "module": "Hledger.Data.Ledger",
          "name": "ledgerDateSpan",
          "normalized": "Ledger-\u003eDateSpan",
          "package": "hledger-lib",
          "partial": "Date Span",
          "signature": "Ledger-\u003eDateSpan",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Ledger.html#v:ledgerDateSpan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFilter a journal's transactions with the given query, then derive a\n ledger containing the chart of accounts and balances. If the query\n includes a depth limit, that will affect the ledger's journal but not\n the account tree.\n\u003c/p\u003e",
          "module": "Hledger.Data.Ledger",
          "name": "ledgerFromJournal",
          "package": "hledger-lib",
          "signature": "Query -\u003e Journal -\u003e Ledger",
          "source": "src/Hledger-Data-Ledger.html#ledgerFromJournal",
          "type": "function"
        },
        "index": {
          "description": "Filter journal transactions with the given query then derive ledger containing the chart of accounts and balances If the query includes depth limit that will affect the ledger journal but not the account tree",
          "hierarchy": "Hledger Data Ledger",
          "module": "Hledger.Data.Ledger",
          "name": "ledgerFromJournal",
          "normalized": "Query-\u003eJournal-\u003eLedger",
          "package": "hledger-lib",
          "partial": "From Journal",
          "signature": "Query-\u003eJournal-\u003eLedger",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Ledger.html#v:ledgerFromJournal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eList a ledger's bottom-level (subaccount-less) accounts, in tree order.\n\u003c/p\u003e",
          "module": "Hledger.Data.Ledger",
          "name": "ledgerLeafAccounts",
          "package": "hledger-lib",
          "signature": "Ledger -\u003e [Account]",
          "source": "src/Hledger-Data-Ledger.html#ledgerLeafAccounts",
          "type": "function"
        },
        "index": {
          "description": "List ledger bottom-level subaccount-less accounts in tree order",
          "hierarchy": "Hledger Data Ledger",
          "module": "Hledger.Data.Ledger",
          "name": "ledgerLeafAccounts",
          "normalized": "Ledger-\u003e[Account]",
          "package": "hledger-lib",
          "partial": "Leaf Accounts",
          "signature": "Ledger-\u003e[Account]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Ledger.html#v:ledgerLeafAccounts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eList a ledger's postings, in the order parsed.\n\u003c/p\u003e",
          "module": "Hledger.Data.Ledger",
          "name": "ledgerPostings",
          "package": "hledger-lib",
          "signature": "Ledger -\u003e [Posting]",
          "source": "src/Hledger-Data-Ledger.html#ledgerPostings",
          "type": "function"
        },
        "index": {
          "description": "List ledger postings in the order parsed",
          "hierarchy": "Hledger Data Ledger",
          "module": "Hledger.Data.Ledger",
          "name": "ledgerPostings",
          "normalized": "Ledger-\u003e[Posting]",
          "package": "hledger-lib",
          "partial": "Postings",
          "signature": "Ledger-\u003e[Posting]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Ledger.html#v:ledgerPostings"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet this ledger's root account, which is a dummy \u003ca\u003eroot\u003c/a\u003e account\n above all others. This should always be first in the account list,\n if somehow not this returns a null account.\n\u003c/p\u003e",
          "module": "Hledger.Data.Ledger",
          "name": "ledgerRootAccount",
          "package": "hledger-lib",
          "signature": "Ledger -\u003e Account",
          "source": "src/Hledger-Data-Ledger.html#ledgerRootAccount",
          "type": "function"
        },
        "index": {
          "description": "Get this ledger root account which is dummy root account above all others This should always be first in the account list if somehow not this returns null account",
          "hierarchy": "Hledger Data Ledger",
          "module": "Hledger.Data.Ledger",
          "name": "ledgerRootAccount",
          "normalized": "Ledger-\u003eAccount",
          "package": "hledger-lib",
          "partial": "Root Account",
          "signature": "Ledger-\u003eAccount",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Ledger.html#v:ledgerRootAccount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eList a ledger's top-level accounts (the ones below the root), in tree order.\n\u003c/p\u003e",
          "module": "Hledger.Data.Ledger",
          "name": "ledgerTopAccounts",
          "package": "hledger-lib",
          "signature": "Ledger -\u003e [Account]",
          "source": "src/Hledger-Data-Ledger.html#ledgerTopAccounts",
          "type": "function"
        },
        "index": {
          "description": "List ledger top-level accounts the ones below the root in tree order",
          "hierarchy": "Hledger Data Ledger",
          "module": "Hledger.Data.Ledger",
          "name": "ledgerTopAccounts",
          "normalized": "Ledger-\u003e[Account]",
          "package": "hledger-lib",
          "partial": "Top Accounts",
          "signature": "Ledger-\u003e[Account]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Ledger.html#v:ledgerTopAccounts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Data.Ledger",
          "name": "nullledger",
          "package": "hledger-lib",
          "signature": "Ledger",
          "source": "src/Hledger-Data-Ledger.html#nullledger",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Data Ledger",
          "module": "Hledger.Data.Ledger",
          "name": "nullledger",
          "package": "hledger-lib",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Ledger.html#v:nullledger"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Data.Ledger",
          "name": "tests_Hledger_Data_Ledger",
          "package": "hledger-lib",
          "signature": "Test",
          "source": "src/Hledger-Data-Ledger.html#tests_Hledger_Data_Ledger",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Data Ledger",
          "module": "Hledger.Data.Ledger",
          "name": "tests_Hledger_Data_Ledger",
          "package": "hledger-lib",
          "partial": "Hledger Data Ledger",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Ledger.html#v:tests_Hledger_Data_Ledger"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Data.Ledger",
          "name": "tests_ledgerFromJournal",
          "package": "hledger-lib",
          "signature": "[Test]",
          "source": "src/Hledger-Data-Ledger.html#tests_ledgerFromJournal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Data Ledger",
          "module": "Hledger.Data.Ledger",
          "name": "tests_ledgerFromJournal",
          "normalized": "[Test]",
          "package": "hledger-lib",
          "partial": "From Journal",
          "signature": "[Test]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Ledger.html#v:tests_ledgerFromJournal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA \u003ccode\u003e\u003ca\u003ePosting\u003c/a\u003e\u003c/code\u003e represents a change (by some \u003ccode\u003e\u003ca\u003eMixedAmount\u003c/a\u003e\u003c/code\u003e) of the balance in\nsome \u003ccode\u003e\u003ca\u003eAccount\u003c/a\u003e\u003c/code\u003e.  Each \u003ccode\u003e\u003ca\u003eTransaction\u003c/a\u003e\u003c/code\u003e contains two or more postings which\nshould add up to 0. Postings reference their parent transaction, so we can\nlook up the date or description there.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Hledger.Data.Posting",
          "name": "Posting",
          "package": "hledger-lib",
          "source": "src/Hledger-Data-Posting.html",
          "type": "module"
        },
        "index": {
          "description": "Posting represents change by some MixedAmount of the balance in some Account Each Transaction contains two or more postings which should add up to Postings reference their parent transaction so we can look up the date or description there",
          "hierarchy": "Hledger Data Posting",
          "module": "Hledger.Data.Posting",
          "name": "Posting",
          "package": "hledger-lib",
          "partial": "Posting",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Posting.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRewrite an account name using the first applicable alias from the given list, if any.\n\u003c/p\u003e",
          "module": "Hledger.Data.Posting",
          "name": "accountNameApplyAliases",
          "package": "hledger-lib",
          "signature": "[(AccountName, AccountName)] -\u003e AccountName -\u003e AccountName",
          "source": "src/Hledger-Data-Posting.html#accountNameApplyAliases",
          "type": "function"
        },
        "index": {
          "description": "Rewrite an account name using the first applicable alias from the given list if any",
          "hierarchy": "Hledger Data Posting",
          "module": "Hledger.Data.Posting",
          "name": "accountNameApplyAliases",
          "normalized": "[(AccountName,AccountName)]-\u003eAccountName-\u003eAccountName",
          "package": "hledger-lib",
          "partial": "Name Apply Aliases",
          "signature": "[(AccountName,AccountName)]-\u003eAccountName-\u003eAccountName",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Posting.html#v:accountNameApplyAliases"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Data.Posting",
          "name": "accountNamePostingType",
          "package": "hledger-lib",
          "signature": "AccountName -\u003e PostingType",
          "source": "src/Hledger-Data-Posting.html#accountNamePostingType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Data Posting",
          "module": "Hledger.Data.Posting",
          "name": "accountNamePostingType",
          "normalized": "AccountName-\u003ePostingType",
          "package": "hledger-lib",
          "partial": "Name Posting Type",
          "signature": "AccountName-\u003ePostingType",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Posting.html#v:accountNamePostingType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Data.Posting",
          "name": "accountNameWithPostingType",
          "package": "hledger-lib",
          "signature": "PostingType -\u003e AccountName -\u003e AccountName",
          "source": "src/Hledger-Data-Posting.html#accountNameWithPostingType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Data Posting",
          "module": "Hledger.Data.Posting",
          "name": "accountNameWithPostingType",
          "normalized": "PostingType-\u003eAccountName-\u003eAccountName",
          "package": "hledger-lib",
          "partial": "Name With Posting Type",
          "signature": "PostingType-\u003eAccountName-\u003eAccountName",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Posting.html#v:accountNameWithPostingType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Data.Posting",
          "name": "accountNameWithoutPostingType",
          "package": "hledger-lib",
          "signature": "AccountName -\u003e AccountName",
          "source": "src/Hledger-Data-Posting.html#accountNameWithoutPostingType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Data Posting",
          "module": "Hledger.Data.Posting",
          "name": "accountNameWithoutPostingType",
          "normalized": "AccountName-\u003eAccountName",
          "package": "hledger-lib",
          "partial": "Name Without Posting Type",
          "signature": "AccountName-\u003eAccountName",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Posting.html#v:accountNameWithoutPostingType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Data.Posting",
          "name": "accountNamesFromPostings",
          "package": "hledger-lib",
          "signature": "[Posting] -\u003e [AccountName]",
          "source": "src/Hledger-Data-Posting.html#accountNamesFromPostings",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Data Posting",
          "module": "Hledger.Data.Posting",
          "name": "accountNamesFromPostings",
          "normalized": "[Posting]-\u003e[AccountName]",
          "package": "hledger-lib",
          "partial": "Names From Postings",
          "signature": "[Posting]-\u003e[AccountName]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Posting.html#v:accountNamesFromPostings"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eJoin account names into one. If any of them has () or [] posting type\n indicators, these (the first type encountered) will also be applied to\n the resulting account name.\n\u003c/p\u003e",
          "module": "Hledger.Data.Posting",
          "name": "concatAccountNames",
          "package": "hledger-lib",
          "signature": "[AccountName] -\u003e AccountName",
          "source": "src/Hledger-Data-Posting.html#concatAccountNames",
          "type": "function"
        },
        "index": {
          "description": "Join account names into one If any of them has or posting type indicators these the first type encountered will also be applied to the resulting account name",
          "hierarchy": "Hledger Data Posting",
          "module": "Hledger.Data.Posting",
          "name": "concatAccountNames",
          "normalized": "[AccountName]-\u003eAccountName",
          "package": "hledger-lib",
          "partial": "Account Names",
          "signature": "[AccountName]-\u003eAccountName",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Posting.html#v:concatAccountNames"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Data.Posting",
          "name": "hasAmount",
          "package": "hledger-lib",
          "signature": "Posting -\u003e Bool",
          "source": "src/Hledger-Data-Posting.html#hasAmount",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Data Posting",
          "module": "Hledger.Data.Posting",
          "name": "hasAmount",
          "normalized": "Posting-\u003eBool",
          "package": "hledger-lib",
          "partial": "Amount",
          "signature": "Posting-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Posting.html#v:hasAmount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Data.Posting",
          "name": "isBalancedVirtual",
          "package": "hledger-lib",
          "signature": "Posting -\u003e Bool",
          "source": "src/Hledger-Data-Posting.html#isBalancedVirtual",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Data Posting",
          "module": "Hledger.Data.Posting",
          "name": "isBalancedVirtual",
          "normalized": "Posting-\u003eBool",
          "package": "hledger-lib",
          "partial": "Balanced Virtual",
          "signature": "Posting-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Posting.html#v:isBalancedVirtual"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Data.Posting",
          "name": "isEmptyPosting",
          "package": "hledger-lib",
          "signature": "Posting -\u003e Bool",
          "source": "src/Hledger-Data-Posting.html#isEmptyPosting",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Data Posting",
          "module": "Hledger.Data.Posting",
          "name": "isEmptyPosting",
          "normalized": "Posting-\u003eBool",
          "package": "hledger-lib",
          "partial": "Empty Posting",
          "signature": "Posting-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Posting.html#v:isEmptyPosting"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDoes this posting fall within the given date span ?\n\u003c/p\u003e",
          "module": "Hledger.Data.Posting",
          "name": "isPostingInDateSpan",
          "package": "hledger-lib",
          "signature": "DateSpan -\u003e Posting -\u003e Bool",
          "source": "src/Hledger-Data-Posting.html#isPostingInDateSpan",
          "type": "function"
        },
        "index": {
          "description": "Does this posting fall within the given date span",
          "hierarchy": "Hledger Data Posting",
          "module": "Hledger.Data.Posting",
          "name": "isPostingInDateSpan",
          "normalized": "DateSpan-\u003ePosting-\u003eBool",
          "package": "hledger-lib",
          "partial": "Posting In Date Span",
          "signature": "DateSpan-\u003ePosting-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Posting.html#v:isPostingInDateSpan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Data.Posting",
          "name": "isReal",
          "package": "hledger-lib",
          "signature": "Posting -\u003e Bool",
          "source": "src/Hledger-Data-Posting.html#isReal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Data Posting",
          "module": "Hledger.Data.Posting",
          "name": "isReal",
          "normalized": "Posting-\u003eBool",
          "package": "hledger-lib",
          "partial": "Real",
          "signature": "Posting-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Posting.html#v:isReal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Data.Posting",
          "name": "isVirtual",
          "package": "hledger-lib",
          "signature": "Posting -\u003e Bool",
          "source": "src/Hledger-Data-Posting.html#isVirtual",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Data Posting",
          "module": "Hledger.Data.Posting",
          "name": "isVirtual",
          "normalized": "Posting-\u003eBool",
          "package": "hledger-lib",
          "partial": "Virtual",
          "signature": "Posting-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Posting.html#v:isVirtual"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrefix one account name to another, preserving posting type\n indicators like concatAccountNames.\n\u003c/p\u003e",
          "module": "Hledger.Data.Posting",
          "name": "joinAccountNames",
          "package": "hledger-lib",
          "signature": "AccountName -\u003e AccountName -\u003e AccountName",
          "source": "src/Hledger-Data-Posting.html#joinAccountNames",
          "type": "function"
        },
        "index": {
          "description": "Prefix one account name to another preserving posting type indicators like concatAccountNames",
          "hierarchy": "Hledger Data Posting",
          "module": "Hledger.Data.Posting",
          "name": "joinAccountNames",
          "normalized": "AccountName-\u003eAccountName-\u003eAccountName",
          "package": "hledger-lib",
          "partial": "Account Names",
          "signature": "AccountName-\u003eAccountName-\u003eAccountName",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Posting.html#v:joinAccountNames"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Data.Posting",
          "name": "nullposting",
          "package": "hledger-lib",
          "signature": "Posting",
          "source": "src/Hledger-Data-Posting.html#nullposting",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Data Posting",
          "module": "Hledger.Data.Posting",
          "name": "nullposting",
          "package": "hledger-lib",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Posting.html#v:nullposting"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Data.Posting",
          "name": "post",
          "package": "hledger-lib",
          "signature": "AccountName -\u003e Amount -\u003e Posting",
          "source": "src/Hledger-Data-Posting.html#post",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Data Posting",
          "module": "Hledger.Data.Posting",
          "name": "post",
          "normalized": "AccountName-\u003eAmount-\u003ePosting",
          "package": "hledger-lib",
          "signature": "AccountName-\u003eAmount-\u003ePosting",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Posting.html#v:post"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Data.Posting",
          "name": "posting",
          "package": "hledger-lib",
          "signature": "Posting",
          "source": "src/Hledger-Data-Posting.html#posting",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Data Posting",
          "module": "Hledger.Data.Posting",
          "name": "posting",
          "package": "hledger-lib",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Posting.html#v:posting"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTags for this posting including any inherited from its parent transaction.\n\u003c/p\u003e",
          "module": "Hledger.Data.Posting",
          "name": "postingAllTags",
          "package": "hledger-lib",
          "signature": "Posting -\u003e [Tag]",
          "source": "src/Hledger-Data-Posting.html#postingAllTags",
          "type": "function"
        },
        "index": {
          "description": "Tags for this posting including any inherited from its parent transaction",
          "hierarchy": "Hledger Data Posting",
          "module": "Hledger.Data.Posting",
          "name": "postingAllTags",
          "normalized": "Posting-\u003e[Tag]",
          "package": "hledger-lib",
          "partial": "All Tags",
          "signature": "Posting-\u003e[Tag]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Posting.html#v:postingAllTags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIs this posting cleared? If this posting was individually marked\n as cleared, returns True. Otherwise, return the parent\n transaction's cleared status or, if there is no parent\n transaction, return False.\n\u003c/p\u003e",
          "module": "Hledger.Data.Posting",
          "name": "postingCleared",
          "package": "hledger-lib",
          "signature": "Posting -\u003e Bool",
          "source": "src/Hledger-Data-Posting.html#postingCleared",
          "type": "function"
        },
        "index": {
          "description": "Is this posting cleared If this posting was individually marked as cleared returns True Otherwise return the parent transaction cleared status or if there is no parent transaction return False",
          "hierarchy": "Hledger Data Posting",
          "module": "Hledger.Data.Posting",
          "name": "postingCleared",
          "normalized": "Posting-\u003eBool",
          "package": "hledger-lib",
          "partial": "Cleared",
          "signature": "Posting-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Posting.html#v:postingCleared"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet a posting's (primary) date - it's own primary date if specified,\n otherwise the parent transaction's primary date, or the null date if\n there is no parent transaction.\n\u003c/p\u003e",
          "module": "Hledger.Data.Posting",
          "name": "postingDate",
          "package": "hledger-lib",
          "signature": "Posting -\u003e Day",
          "source": "src/Hledger-Data-Posting.html#postingDate",
          "type": "function"
        },
        "index": {
          "description": "Get posting primary date it own primary date if specified otherwise the parent transaction primary date or the null date if there is no parent transaction",
          "hierarchy": "Hledger Data Posting",
          "module": "Hledger.Data.Posting",
          "name": "postingDate",
          "normalized": "Posting-\u003eDay",
          "package": "hledger-lib",
          "partial": "Date",
          "signature": "Posting-\u003eDay",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Posting.html#v:postingDate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet a posting's secondary (secondary) date, which is the first of:\n posting's secondary date, transaction's secondary date, posting's\n primary date, transaction's primary date, or the null date if there is\n no parent transaction.\n\u003c/p\u003e",
          "module": "Hledger.Data.Posting",
          "name": "postingDate2",
          "package": "hledger-lib",
          "signature": "Posting -\u003e Day",
          "source": "src/Hledger-Data-Posting.html#postingDate2",
          "type": "function"
        },
        "index": {
          "description": "Get posting secondary secondary date which is the first of posting secondary date transaction secondary date posting primary date transaction primary date or the null date if there is no parent transaction",
          "hierarchy": "Hledger Data Posting",
          "module": "Hledger.Data.Posting",
          "name": "postingDate2",
          "normalized": "Posting-\u003eDay",
          "package": "hledger-lib",
          "partial": "Date",
          "signature": "Posting-\u003eDay",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Posting.html#v:postingDate2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the minimal date span which contains all the postings, or the\n null date span if there are none.\n\u003c/p\u003e",
          "module": "Hledger.Data.Posting",
          "name": "postingsDateSpan",
          "package": "hledger-lib",
          "signature": "[Posting] -\u003e DateSpan",
          "source": "src/Hledger-Data-Posting.html#postingsDateSpan",
          "type": "function"
        },
        "index": {
          "description": "Get the minimal date span which contains all the postings or the null date span if there are none",
          "hierarchy": "Hledger Data Posting",
          "module": "Hledger.Data.Posting",
          "name": "postingsDateSpan",
          "normalized": "[Posting]-\u003eDateSpan",
          "package": "hledger-lib",
          "partial": "Date Span",
          "signature": "[Posting]-\u003eDateSpan",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Posting.html#v:postingsDateSpan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Data.Posting",
          "name": "relatedPostings",
          "package": "hledger-lib",
          "signature": "Posting -\u003e [Posting]",
          "source": "src/Hledger-Data-Posting.html#relatedPostings",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Data Posting",
          "module": "Hledger.Data.Posting",
          "name": "relatedPostings",
          "normalized": "Posting-\u003e[Posting]",
          "package": "hledger-lib",
          "partial": "Postings",
          "signature": "Posting-\u003e[Posting]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Posting.html#v:relatedPostings"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Data.Posting",
          "name": "showComment",
          "package": "hledger-lib",
          "signature": "String -\u003e String",
          "source": "src/Hledger-Data-Posting.html#showComment",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Data Posting",
          "module": "Hledger.Data.Posting",
          "name": "showComment",
          "normalized": "String-\u003eString",
          "package": "hledger-lib",
          "partial": "Comment",
          "signature": "String-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Posting.html#v:showComment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Data.Posting",
          "name": "showPosting",
          "package": "hledger-lib",
          "signature": "Posting -\u003e String",
          "source": "src/Hledger-Data-Posting.html#showPosting",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Data Posting",
          "module": "Hledger.Data.Posting",
          "name": "showPosting",
          "normalized": "Posting-\u003eString",
          "package": "hledger-lib",
          "partial": "Posting",
          "signature": "Posting-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Posting.html#v:showPosting"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Data.Posting",
          "name": "sumPostings",
          "package": "hledger-lib",
          "signature": "[Posting] -\u003e MixedAmount",
          "source": "src/Hledger-Data-Posting.html#sumPostings",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Data Posting",
          "module": "Hledger.Data.Posting",
          "name": "sumPostings",
          "normalized": "[Posting]-\u003eMixedAmount",
          "package": "hledger-lib",
          "partial": "Postings",
          "signature": "[Posting]-\u003eMixedAmount",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Posting.html#v:sumPostings"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Data.Posting",
          "name": "tests_Hledger_Data_Posting",
          "package": "hledger-lib",
          "signature": "Test",
          "source": "src/Hledger-Data-Posting.html#tests_Hledger_Data_Posting",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Data Posting",
          "module": "Hledger.Data.Posting",
          "name": "tests_Hledger_Data_Posting",
          "package": "hledger-lib",
          "partial": "Hledger Data Posting",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Posting.html#v:tests_Hledger_Data_Posting"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTags for this transaction including any inherited from above, when that is implemented.\n\u003c/p\u003e",
          "module": "Hledger.Data.Posting",
          "name": "transactionAllTags",
          "package": "hledger-lib",
          "signature": "Transaction -\u003e [Tag]",
          "source": "src/Hledger-Data-Posting.html#transactionAllTags",
          "type": "function"
        },
        "index": {
          "description": "Tags for this transaction including any inherited from above when that is implemented",
          "hierarchy": "Hledger Data Posting",
          "module": "Hledger.Data.Posting",
          "name": "transactionAllTags",
          "normalized": "Transaction-\u003e[Tag]",
          "package": "hledger-lib",
          "partial": "All Tags",
          "signature": "Transaction-\u003e[Tag]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Posting.html#v:transactionAllTags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA \u003ccode\u003e\u003ca\u003eTimeLogEntry\u003c/a\u003e\u003c/code\u003e is a clock-in, clock-out, or other directive in a timelog\nfile (see timeclock.el or the command-line version). These can be\nconverted to \u003ccode\u003eTransactions\u003c/code\u003e and queried like a ledger.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Hledger.Data.TimeLog",
          "name": "TimeLog",
          "package": "hledger-lib",
          "source": "src/Hledger-Data-TimeLog.html",
          "type": "module"
        },
        "index": {
          "description": "TimeLogEntry is clock-in clock-out or other directive in timelog file see timeclock.el or the command-line version These can be converted to Transactions and queried like ledger",
          "hierarchy": "Hledger Data TimeLog",
          "module": "Hledger.Data.TimeLog",
          "name": "TimeLog",
          "package": "hledger-lib",
          "partial": "Time Log",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-TimeLog.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a timelog clockin and clockout entry to an equivalent journal\n transaction, representing the time expenditure. Note this entry is  not balanced,\n since we omit the \"assets:time\" transaction for simpler output.\n\u003c/p\u003e",
          "module": "Hledger.Data.TimeLog",
          "name": "entryFromTimeLogInOut",
          "package": "hledger-lib",
          "signature": "TimeLogEntry -\u003e TimeLogEntry -\u003e Transaction",
          "source": "src/Hledger-Data-TimeLog.html#entryFromTimeLogInOut",
          "type": "function"
        },
        "index": {
          "description": "Convert timelog clockin and clockout entry to an equivalent journal transaction representing the time expenditure Note this entry is not balanced since we omit the assets time transaction for simpler output",
          "hierarchy": "Hledger Data TimeLog",
          "module": "Hledger.Data.TimeLog",
          "name": "entryFromTimeLogInOut",
          "normalized": "TimeLogEntry-\u003eTimeLogEntry-\u003eTransaction",
          "package": "hledger-lib",
          "partial": "From Time Log In Out",
          "signature": "TimeLogEntry-\u003eTimeLogEntry-\u003eTransaction",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-TimeLog.html#v:entryFromTimeLogInOut"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Data.TimeLog",
          "name": "tests_Hledger_Data_TimeLog",
          "package": "hledger-lib",
          "signature": "Test",
          "source": "src/Hledger-Data-TimeLog.html#tests_Hledger_Data_TimeLog",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Data TimeLog",
          "module": "Hledger.Data.TimeLog",
          "name": "tests_Hledger_Data_TimeLog",
          "package": "hledger-lib",
          "partial": "Hledger Data Time Log",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-TimeLog.html#v:tests_Hledger_Data_TimeLog"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert time log entries to journal transactions. When there is no\n clockout, add one with the provided current time. Sessions crossing\n midnight are split into days to give accurate per-day totals.\n\u003c/p\u003e",
          "module": "Hledger.Data.TimeLog",
          "name": "timeLogEntriesToTransactions",
          "package": "hledger-lib",
          "signature": "LocalTime -\u003e [TimeLogEntry] -\u003e [Transaction]",
          "source": "src/Hledger-Data-TimeLog.html#timeLogEntriesToTransactions",
          "type": "function"
        },
        "index": {
          "description": "Convert time log entries to journal transactions When there is no clockout add one with the provided current time Sessions crossing midnight are split into days to give accurate per-day totals",
          "hierarchy": "Hledger Data TimeLog",
          "module": "Hledger.Data.TimeLog",
          "name": "timeLogEntriesToTransactions",
          "normalized": "LocalTime-\u003e[TimeLogEntry]-\u003e[Transaction]",
          "package": "hledger-lib",
          "partial": "Log Entries To Transactions",
          "signature": "LocalTime-\u003e[TimeLogEntry]-\u003e[Transaction]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-TimeLog.html#v:timeLogEntriesToTransactions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA \u003ccode\u003e\u003ca\u003eTransaction\u003c/a\u003e\u003c/code\u003e represents a movement of some commodity(ies) between two\nor more accounts. It consists of multiple account \u003ccode\u003e\u003ca\u003ePosting\u003c/a\u003e\u003c/code\u003es which balance\nto zero, a date, and optional extras like description, cleared status, and\ntags.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Hledger.Data.Transaction",
          "name": "Transaction",
          "package": "hledger-lib",
          "source": "src/Hledger-Data-Transaction.html",
          "type": "module"
        },
        "index": {
          "description": "Transaction represents movement of some commodity ies between two or more accounts It consists of multiple account Posting which balance to zero date and optional extras like description cleared status and tags",
          "hierarchy": "Hledger Data Transaction",
          "module": "Hledger.Data.Transaction",
          "name": "Transaction",
          "package": "hledger-lib",
          "partial": "Transaction",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Transaction.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEnsure this transaction is balanced, possibly inferring a missing\n amount or conversion price, or return an error message.\n\u003c/p\u003e\u003cp\u003eBalancing is affected by commodity display precisions, so those may\n be provided.\n\u003c/p\u003e\u003cp\u003eWe can infer a missing real amount when there are multiple real\n postings and exactly one of them is amountless (likewise for\n balanced virtual postings). Inferred amounts are converted to cost\n basis when possible.\n\u003c/p\u003e\u003cp\u003eWe can infer a conversion price when all real amounts are specified\n and the sum of real postings' amounts is exactly two\n non-explicitly-priced amounts in different commodities (likewise\n for balanced virtual postings).\n\u003c/p\u003e",
          "module": "Hledger.Data.Transaction",
          "name": "balanceTransaction",
          "package": "hledger-lib",
          "signature": "Maybe (Map Commodity AmountStyle) -\u003e Transaction -\u003e Either String Transaction",
          "source": "src/Hledger-Data-Transaction.html#balanceTransaction",
          "type": "function"
        },
        "index": {
          "description": "Ensure this transaction is balanced possibly inferring missing amount or conversion price or return an error message Balancing is affected by commodity display precisions so those may be provided We can infer missing real amount when there are multiple real postings and exactly one of them is amountless likewise for balanced virtual postings Inferred amounts are converted to cost basis when possible We can infer conversion price when all real amounts are specified and the sum of real postings amounts is exactly two non-explicitly-priced amounts in different commodities likewise for balanced virtual postings",
          "hierarchy": "Hledger Data Transaction",
          "module": "Hledger.Data.Transaction",
          "name": "balanceTransaction",
          "normalized": "Maybe(Map Commodity AmountStyle)-\u003eTransaction-\u003eEither String Transaction",
          "package": "hledger-lib",
          "partial": "Transaction",
          "signature": "Maybe(Map Commodity AmountStyle)-\u003eTransaction-\u003eEither String Transaction",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Transaction.html#v:balanceTransaction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Data.Transaction",
          "name": "balancedVirtualPostings",
          "package": "hledger-lib",
          "signature": "Transaction -\u003e [Posting]",
          "source": "src/Hledger-Data-Transaction.html#balancedVirtualPostings",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Data Transaction",
          "module": "Hledger.Data.Transaction",
          "name": "balancedVirtualPostings",
          "normalized": "Transaction-\u003e[Posting]",
          "package": "hledger-lib",
          "partial": "Virtual Postings",
          "signature": "Transaction-\u003e[Posting]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Transaction.html#v:balancedVirtualPostings"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Data.Transaction",
          "name": "hasRealPostings",
          "package": "hledger-lib",
          "signature": "Transaction -\u003e Bool",
          "source": "src/Hledger-Data-Transaction.html#hasRealPostings",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Data Transaction",
          "module": "Hledger.Data.Transaction",
          "name": "hasRealPostings",
          "normalized": "Transaction-\u003eBool",
          "package": "hledger-lib",
          "partial": "Real Postings",
          "signature": "Transaction-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Transaction.html#v:hasRealPostings"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIs this transaction balanced ? A balanced transaction's real\n (non-virtual) postings sum to 0, and any balanced virtual postings\n also sum to 0.\n\u003c/p\u003e",
          "module": "Hledger.Data.Transaction",
          "name": "isTransactionBalanced",
          "package": "hledger-lib",
          "signature": "Maybe (Map Commodity AmountStyle) -\u003e Transaction -\u003e Bool",
          "source": "src/Hledger-Data-Transaction.html#isTransactionBalanced",
          "type": "function"
        },
        "index": {
          "description": "Is this transaction balanced balanced transaction real non-virtual postings sum to and any balanced virtual postings also sum to",
          "hierarchy": "Hledger Data Transaction",
          "module": "Hledger.Data.Transaction",
          "name": "isTransactionBalanced",
          "normalized": "Maybe(Map Commodity AmountStyle)-\u003eTransaction-\u003eBool",
          "package": "hledger-lib",
          "partial": "Transaction Balanced",
          "signature": "Maybe(Map Commodity AmountStyle)-\u003eTransaction-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Transaction.html#v:isTransactionBalanced"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Data.Transaction",
          "name": "nulltransaction",
          "package": "hledger-lib",
          "signature": "Transaction",
          "source": "src/Hledger-Data-Transaction.html#nulltransaction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Data Transaction",
          "module": "Hledger.Data.Transaction",
          "name": "nulltransaction",
          "package": "hledger-lib",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Transaction.html#v:nulltransaction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Data.Transaction",
          "name": "realPostings",
          "package": "hledger-lib",
          "signature": "Transaction -\u003e [Posting]",
          "source": "src/Hledger-Data-Transaction.html#realPostings",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Data Transaction",
          "module": "Hledger.Data.Transaction",
          "name": "realPostings",
          "normalized": "Transaction-\u003e[Posting]",
          "package": "hledger-lib",
          "partial": "Postings",
          "signature": "Transaction-\u003e[Posting]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Transaction.html#v:realPostings"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShow an account name, clipped to the given width if any, and\n appropriately bracketed/parenthesised for the given posting type.\n\u003c/p\u003e",
          "module": "Hledger.Data.Transaction",
          "name": "showAccountName",
          "package": "hledger-lib",
          "signature": "Maybe Int -\u003e PostingType -\u003e AccountName -\u003e String",
          "source": "src/Hledger-Data-Transaction.html#showAccountName",
          "type": "function"
        },
        "index": {
          "description": "Show an account name clipped to the given width if any and appropriately bracketed parenthesised for the given posting type",
          "hierarchy": "Hledger Data Transaction",
          "module": "Hledger.Data.Transaction",
          "name": "showAccountName",
          "normalized": "Maybe Int-\u003ePostingType-\u003eAccountName-\u003eString",
          "package": "hledger-lib",
          "partial": "Account Name",
          "signature": "Maybe Int-\u003ePostingType-\u003eAccountName-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Transaction.html#v:showAccountName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShow a journal transaction, formatted for the print command. ledger 2.x's\nstandard format looks like this:\n\u003c/p\u003e\u003cpre\u003e\nyyyy\u003cem\u003emm\u003c/em\u003edd[ *][ CODE] description.........          [  ; comment...............]\n    account name 1.....................  ...$amount1[  ; comment...............]\n    account name 2.....................  ..$-amount1[  ; comment...............]\n\npcodewidth    = no limit -- 10          -- mimicking ledger layout.\npdescwidth    = no limit -- 20          -- I don't remember what these mean,\npacctwidth    = 35 minimum, no maximum  -- they were important at the time.\npamtwidth     = 11\npcommentwidth = no limit -- 22\n\u003c/pre\u003e",
          "module": "Hledger.Data.Transaction",
          "name": "showTransaction",
          "package": "hledger-lib",
          "signature": "Transaction -\u003e String",
          "source": "src/Hledger-Data-Transaction.html#showTransaction",
          "type": "function"
        },
        "index": {
          "description": "Show journal transaction formatted for the print command ledger standard format looks like this yyyy mm dd CODE description comment account name amount1 comment account name amount1 comment pcodewidth no limit mimicking ledger layout pdescwidth no limit don remember what these mean pacctwidth minimum no maximum they were important at the time pamtwidth pcommentwidth no limit",
          "hierarchy": "Hledger Data Transaction",
          "module": "Hledger.Data.Transaction",
          "name": "showTransaction",
          "normalized": "Transaction-\u003eString",
          "package": "hledger-lib",
          "partial": "Transaction",
          "signature": "Transaction-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Transaction.html#v:showTransaction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Data.Transaction",
          "name": "showTransactionUnelided",
          "package": "hledger-lib",
          "signature": "Transaction -\u003e String",
          "source": "src/Hledger-Data-Transaction.html#showTransactionUnelided",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Data Transaction",
          "module": "Hledger.Data.Transaction",
          "name": "showTransactionUnelided",
          "normalized": "Transaction-\u003eString",
          "package": "hledger-lib",
          "partial": "Transaction Unelided",
          "signature": "Transaction-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Transaction.html#v:showTransactionUnelided"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Data.Transaction",
          "name": "tests_Hledger_Data_Transaction",
          "package": "hledger-lib",
          "signature": "Test",
          "source": "src/Hledger-Data-Transaction.html#tests_Hledger_Data_Transaction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Data Transaction",
          "module": "Hledger.Data.Transaction",
          "name": "tests_Hledger_Data_Transaction",
          "package": "hledger-lib",
          "partial": "Hledger Data Transaction",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Transaction.html#v:tests_Hledger_Data_Transaction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Data.Transaction",
          "name": "transactionDate2",
          "package": "hledger-lib",
          "signature": "Transaction -\u003e Day",
          "source": "src/Hledger-Data-Transaction.html#transactionDate2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Data Transaction",
          "module": "Hledger.Data.Transaction",
          "name": "transactionDate2",
          "normalized": "Transaction-\u003eDay",
          "package": "hledger-lib",
          "partial": "Date",
          "signature": "Transaction-\u003eDay",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Transaction.html#v:transactionDate2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the sums of a transaction's real, virtual, and balanced virtual postings.\n\u003c/p\u003e",
          "module": "Hledger.Data.Transaction",
          "name": "transactionPostingBalances",
          "package": "hledger-lib",
          "signature": "Transaction -\u003e (MixedAmount, MixedAmount, MixedAmount)",
          "source": "src/Hledger-Data-Transaction.html#transactionPostingBalances",
          "type": "function"
        },
        "index": {
          "description": "Get the sums of transaction real virtual and balanced virtual postings",
          "hierarchy": "Hledger Data Transaction",
          "module": "Hledger.Data.Transaction",
          "name": "transactionPostingBalances",
          "normalized": "Transaction-\u003e(MixedAmount,MixedAmount,MixedAmount)",
          "package": "hledger-lib",
          "partial": "Posting Balances",
          "signature": "Transaction-\u003e(MixedAmount,MixedAmount,MixedAmount)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Transaction.html#v:transactionPostingBalances"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Data.Transaction",
          "name": "transactionsPostings",
          "package": "hledger-lib",
          "signature": "[Transaction] -\u003e [Posting]",
          "source": "src/Hledger-Data-Transaction.html#transactionsPostings",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Data Transaction",
          "module": "Hledger.Data.Transaction",
          "name": "transactionsPostings",
          "normalized": "[Transaction]-\u003e[Posting]",
          "package": "hledger-lib",
          "partial": "Postings",
          "signature": "[Transaction]-\u003e[Posting]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Transaction.html#v:transactionsPostings"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEnsure a transaction's postings refer back to it.\n\u003c/p\u003e",
          "module": "Hledger.Data.Transaction",
          "name": "txnTieKnot",
          "package": "hledger-lib",
          "signature": "Transaction -\u003e Transaction",
          "source": "src/Hledger-Data-Transaction.html#txnTieKnot",
          "type": "function"
        },
        "index": {
          "description": "Ensure transaction postings refer back to it",
          "hierarchy": "Hledger Data Transaction",
          "module": "Hledger.Data.Transaction",
          "name": "txnTieKnot",
          "normalized": "Transaction-\u003eTransaction",
          "package": "hledger-lib",
          "partial": "Tie Knot",
          "signature": "Transaction-\u003eTransaction",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Transaction.html#v:txnTieKnot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Data.Transaction",
          "name": "virtualPostings",
          "package": "hledger-lib",
          "signature": "Transaction -\u003e [Posting]",
          "source": "src/Hledger-Data-Transaction.html#virtualPostings",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Data Transaction",
          "module": "Hledger.Data.Transaction",
          "name": "virtualPostings",
          "normalized": "Transaction-\u003e[Posting]",
          "package": "hledger-lib",
          "partial": "Postings",
          "signature": "Transaction-\u003e[Posting]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Transaction.html#v:virtualPostings"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eMost data types are defined here to avoid import cycles.\nHere is an overview of the hledger data model:\n\u003c/p\u003e\u003cpre\u003e Journal                  -- a journal is read from one or more data files. It contains..\n  [Transaction]           -- journal transactions (aka entries), which have date, status, code, description and..\n   [Posting]              -- multiple account postings, which have account name and amount\n  [HistoricalPrice]       -- historical commodity prices\n\n Ledger                   -- a ledger is derived from a journal, by applying a filter specification and doing some further processing. It contains..\n  Journal                 -- a filtered copy of the original journal, containing only the transactions and postings we are interested in\n  [Account]               -- all accounts, in tree order beginning with a \"root\" account\", with their balances and sub/parent accounts\n\u003c/pre\u003e\u003cp\u003eFor more detailed documentation on each type, see the corresponding modules.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Hledger.Data.Types",
          "name": "Types",
          "package": "hledger-lib",
          "source": "src/Hledger-Data-Types.html",
          "type": "module"
        },
        "index": {
          "description": "Most data types are defined here to avoid import cycles Here is an overview of the hledger data model Journal journal is read from one or more data files It contains Transaction journal transactions aka entries which have date status code description and Posting multiple account postings which have account name and amount HistoricalPrice historical commodity prices Ledger ledger is derived from journal by applying filter specification and doing some further processing It contains Journal filtered copy of the original journal containing only the transactions and postings we are interested in Account all accounts in tree order beginning with root account with their balances and sub parent accounts For more detailed documentation on each type see the corresponding modules",
          "hierarchy": "Hledger Data Types",
          "module": "Hledger.Data.Types",
          "name": "Types",
          "package": "hledger-lib",
          "partial": "Types",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn account, with name, balances and links to parent/subaccounts\n which let you walk up or down the account tree.\n\u003c/p\u003e",
          "module": "Hledger.Data.Types",
          "name": "Account",
          "package": "hledger-lib",
          "source": "src/Hledger-Data-Types.html#Account",
          "type": "data"
        },
        "index": {
          "description": "An account with name balances and links to parent subaccounts which let you walk up or down the account tree",
          "hierarchy": "Hledger Data Types",
          "module": "Hledger.Data.Types",
          "name": "Account",
          "package": "hledger-lib",
          "partial": "Account",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#t:Account"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Data.Types",
          "name": "AccountName",
          "package": "hledger-lib",
          "source": "src/Hledger-Data-Types.html#AccountName",
          "type": "type"
        },
        "index": {
          "hierarchy": "Hledger Data Types",
          "module": "Hledger.Data.Types",
          "name": "AccountName",
          "package": "hledger-lib",
          "partial": "Account Name",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#t:AccountName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Data.Types",
          "name": "Amount",
          "package": "hledger-lib",
          "source": "src/Hledger-Data-Types.html#Amount",
          "type": "data"
        },
        "index": {
          "hierarchy": "Hledger Data Types",
          "module": "Hledger.Data.Types",
          "name": "Amount",
          "package": "hledger-lib",
          "partial": "Amount",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#t:Amount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDisplay style for an amount.\n\u003c/p\u003e",
          "module": "Hledger.Data.Types",
          "name": "AmountStyle",
          "package": "hledger-lib",
          "source": "src/Hledger-Data-Types.html#AmountStyle",
          "type": "data"
        },
        "index": {
          "description": "Display style for an amount",
          "hierarchy": "Hledger Data Types",
          "module": "Hledger.Data.Types",
          "name": "AmountStyle",
          "package": "hledger-lib",
          "partial": "Amount Style",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#t:AmountStyle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Data.Types",
          "name": "Commodity",
          "package": "hledger-lib",
          "source": "src/Hledger-Data-Types.html#Commodity",
          "type": "type"
        },
        "index": {
          "hierarchy": "Hledger Data Types",
          "module": "Hledger.Data.Types",
          "name": "Commodity",
          "package": "hledger-lib",
          "partial": "Commodity",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#t:Commodity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Data.Types",
          "name": "DateSpan",
          "package": "hledger-lib",
          "source": "src/Hledger-Data-Types.html#DateSpan",
          "type": "data"
        },
        "index": {
          "hierarchy": "Hledger Data Types",
          "module": "Hledger.Data.Types",
          "name": "DateSpan",
          "package": "hledger-lib",
          "partial": "Date Span",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#t:DateSpan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe id of a data format understood by hledger, eg \u003ccode\u003ejournal\u003c/code\u003e or \u003ccode\u003ecsv\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Hledger.Data.Types",
          "name": "Format",
          "package": "hledger-lib",
          "source": "src/Hledger-Data-Types.html#Format",
          "type": "type"
        },
        "index": {
          "description": "The id of data format understood by hledger eg journal or csv",
          "hierarchy": "Hledger Data Types",
          "module": "Hledger.Data.Types",
          "name": "Format",
          "package": "hledger-lib",
          "partial": "Format",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#t:Format"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Data.Types",
          "name": "FormatString",
          "package": "hledger-lib",
          "source": "src/Hledger-Data-Types.html#FormatString",
          "type": "data"
        },
        "index": {
          "hierarchy": "Hledger Data Types",
          "module": "Hledger.Data.Types",
          "name": "FormatString",
          "package": "hledger-lib",
          "partial": "Format String",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#t:FormatString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Data.Types",
          "name": "HistoricalPrice",
          "package": "hledger-lib",
          "source": "src/Hledger-Data-Types.html#HistoricalPrice",
          "type": "data"
        },
        "index": {
          "hierarchy": "Hledger Data Types",
          "module": "Hledger.Data.Types",
          "name": "HistoricalPrice",
          "package": "hledger-lib",
          "partial": "Historical Price",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#t:HistoricalPrice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Data.Types",
          "name": "HledgerFormatField",
          "package": "hledger-lib",
          "source": "src/Hledger-Data-Types.html#HledgerFormatField",
          "type": "data"
        },
        "index": {
          "hierarchy": "Hledger Data Types",
          "module": "Hledger.Data.Types",
          "name": "HledgerFormatField",
          "package": "hledger-lib",
          "partial": "Hledger Format Field",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#t:HledgerFormatField"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Data.Types",
          "name": "Interval",
          "package": "hledger-lib",
          "source": "src/Hledger-Data-Types.html#Interval",
          "type": "data"
        },
        "index": {
          "hierarchy": "Hledger Data Types",
          "module": "Hledger.Data.Types",
          "name": "Interval",
          "package": "hledger-lib",
          "partial": "Interval",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#t:Interval"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Data.Types",
          "name": "Journal",
          "package": "hledger-lib",
          "source": "src/Hledger-Data-Types.html#Journal",
          "type": "data"
        },
        "index": {
          "hierarchy": "Hledger Data Types",
          "module": "Hledger.Data.Types",
          "name": "Journal",
          "package": "hledger-lib",
          "partial": "Journal",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#t:Journal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA journal \u003ca\u003econtext\u003c/a\u003e is some data which can change in the course of\n parsing a journal. An example is the default year, which changes when a\n Y directive is encountered.  At the end of parsing, the final context\n is saved for later use by eg the add command.\n\u003c/p\u003e",
          "module": "Hledger.Data.Types",
          "name": "JournalContext",
          "package": "hledger-lib",
          "source": "src/Hledger-Data-Types.html#JournalContext",
          "type": "data"
        },
        "index": {
          "description": "journal context is some data which can change in the course of parsing journal An example is the default year which changes when directive is encountered At the end of parsing the final context is saved for later use by eg the add command",
          "hierarchy": "Hledger Data Types",
          "module": "Hledger.Data.Types",
          "name": "JournalContext",
          "package": "hledger-lib",
          "partial": "Journal Context",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#t:JournalContext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA JournalUpdate is some transformation of a Journal. It can do I/O or\n raise an error.\n\u003c/p\u003e",
          "module": "Hledger.Data.Types",
          "name": "JournalUpdate",
          "package": "hledger-lib",
          "source": "src/Hledger-Data-Types.html#JournalUpdate",
          "type": "type"
        },
        "index": {
          "description": "JournalUpdate is some transformation of Journal It can do or raise an error",
          "hierarchy": "Hledger Data Types",
          "module": "Hledger.Data.Types",
          "name": "JournalUpdate",
          "package": "hledger-lib",
          "partial": "Journal Update",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#t:JournalUpdate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA Ledger has the journal it derives from, and the accounts\n derived from that. Accounts are accessible both list-wise and\n tree-wise, since each one knows its parent and subs; the first\n account is the root of the tree and always exists.\n\u003c/p\u003e",
          "module": "Hledger.Data.Types",
          "name": "Ledger",
          "package": "hledger-lib",
          "source": "src/Hledger-Data-Types.html#Ledger",
          "type": "data"
        },
        "index": {
          "description": "Ledger has the journal it derives from and the accounts derived from that Accounts are accessible both list-wise and tree-wise since each one knows its parent and subs the first account is the root of the tree and always exists",
          "hierarchy": "Hledger Data Types",
          "module": "Hledger.Data.Types",
          "name": "Ledger",
          "package": "hledger-lib",
          "partial": "Ledger",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#t:Ledger"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Data.Types",
          "name": "MixedAmount",
          "package": "hledger-lib",
          "source": "src/Hledger-Data-Types.html#MixedAmount",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Hledger Data Types",
          "module": "Hledger.Data.Types",
          "name": "MixedAmount",
          "package": "hledger-lib",
          "partial": "Mixed Amount",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#t:MixedAmount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Data.Types",
          "name": "ModifierTransaction",
          "package": "hledger-lib",
          "source": "src/Hledger-Data-Types.html#ModifierTransaction",
          "type": "data"
        },
        "index": {
          "hierarchy": "Hledger Data Types",
          "module": "Hledger.Data.Types",
          "name": "ModifierTransaction",
          "package": "hledger-lib",
          "partial": "Modifier Transaction",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#t:ModifierTransaction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Data.Types",
          "name": "PeriodicTransaction",
          "package": "hledger-lib",
          "source": "src/Hledger-Data-Types.html#PeriodicTransaction",
          "type": "data"
        },
        "index": {
          "hierarchy": "Hledger Data Types",
          "module": "Hledger.Data.Types",
          "name": "PeriodicTransaction",
          "package": "hledger-lib",
          "partial": "Periodic Transaction",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#t:PeriodicTransaction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Data.Types",
          "name": "Posting",
          "package": "hledger-lib",
          "source": "src/Hledger-Data-Types.html#Posting",
          "type": "data"
        },
        "index": {
          "hierarchy": "Hledger Data Types",
          "module": "Hledger.Data.Types",
          "name": "Posting",
          "package": "hledger-lib",
          "partial": "Posting",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#t:Posting"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Data.Types",
          "name": "PostingType",
          "package": "hledger-lib",
          "source": "src/Hledger-Data-Types.html#PostingType",
          "type": "data"
        },
        "index": {
          "hierarchy": "Hledger Data Types",
          "module": "Hledger.Data.Types",
          "name": "PostingType",
          "package": "hledger-lib",
          "partial": "Posting Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#t:PostingType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn amount's price (none, per unit, or total) in another commodity.\n Note the price should be a positive number, although this is not enforced.\n\u003c/p\u003e",
          "module": "Hledger.Data.Types",
          "name": "Price",
          "package": "hledger-lib",
          "source": "src/Hledger-Data-Types.html#Price",
          "type": "data"
        },
        "index": {
          "description": "An amount price none per unit or total in another commodity Note the price should be positive number although this is not enforced",
          "hierarchy": "Hledger Data Types",
          "module": "Hledger.Data.Types",
          "name": "Price",
          "package": "hledger-lib",
          "partial": "Price",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#t:Price"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Data.Types",
          "name": "Quantity",
          "package": "hledger-lib",
          "source": "src/Hledger-Data-Types.html#Quantity",
          "type": "type"
        },
        "index": {
          "hierarchy": "Hledger Data Types",
          "module": "Hledger.Data.Types",
          "name": "Quantity",
          "package": "hledger-lib",
          "partial": "Quantity",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#t:Quantity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA hledger journal reader is a triple of format name, format-detecting\n predicate, and a parser to Journal.\n\u003c/p\u003e",
          "module": "Hledger.Data.Types",
          "name": "Reader",
          "package": "hledger-lib",
          "source": "src/Hledger-Data-Types.html#Reader",
          "type": "data"
        },
        "index": {
          "description": "hledger journal reader is triple of format name format-detecting predicate and parser to Journal",
          "hierarchy": "Hledger Data Types",
          "module": "Hledger.Data.Types",
          "name": "Reader",
          "package": "hledger-lib",
          "partial": "Reader",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#t:Reader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Data.Types",
          "name": "Side",
          "package": "hledger-lib",
          "source": "src/Hledger-Data-Types.html#Side",
          "type": "data"
        },
        "index": {
          "hierarchy": "Hledger Data Types",
          "module": "Hledger.Data.Types",
          "name": "Side",
          "package": "hledger-lib",
          "partial": "Side",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#t:Side"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Data.Types",
          "name": "SmartDate",
          "package": "hledger-lib",
          "source": "src/Hledger-Data-Types.html#SmartDate",
          "type": "type"
        },
        "index": {
          "hierarchy": "Hledger Data Types",
          "module": "Hledger.Data.Types",
          "name": "SmartDate",
          "package": "hledger-lib",
          "partial": "Smart Date",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#t:SmartDate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Data.Types",
          "name": "Tag",
          "package": "hledger-lib",
          "source": "src/Hledger-Data-Types.html#Tag",
          "type": "type"
        },
        "index": {
          "hierarchy": "Hledger Data Types",
          "module": "Hledger.Data.Types",
          "name": "Tag",
          "package": "hledger-lib",
          "partial": "Tag",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#t:Tag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Data.Types",
          "name": "TimeLogCode",
          "package": "hledger-lib",
          "source": "src/Hledger-Data-Types.html#TimeLogCode",
          "type": "data"
        },
        "index": {
          "hierarchy": "Hledger Data Types",
          "module": "Hledger.Data.Types",
          "name": "TimeLogCode",
          "package": "hledger-lib",
          "partial": "Time Log Code",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#t:TimeLogCode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Data.Types",
          "name": "TimeLogEntry",
          "package": "hledger-lib",
          "source": "src/Hledger-Data-Types.html#TimeLogEntry",
          "type": "data"
        },
        "index": {
          "hierarchy": "Hledger Data Types",
          "module": "Hledger.Data.Types",
          "name": "TimeLogEntry",
          "package": "hledger-lib",
          "partial": "Time Log Entry",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#t:TimeLogEntry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Data.Types",
          "name": "Transaction",
          "package": "hledger-lib",
          "source": "src/Hledger-Data-Types.html#Transaction",
          "type": "data"
        },
        "index": {
          "hierarchy": "Hledger Data Types",
          "module": "Hledger.Data.Types",
          "name": "Transaction",
          "package": "hledger-lib",
          "partial": "Transaction",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#t:Transaction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Data.Types",
          "name": "WhichDate",
          "package": "hledger-lib",
          "source": "src/Hledger-Data-Types.html#WhichDate",
          "type": "data"
        },
        "index": {
          "hierarchy": "Hledger Data Types",
          "module": "Hledger.Data.Types",
          "name": "WhichDate",
          "package": "hledger-lib",
          "partial": "Which Date",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#t:WhichDate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Data.Types",
          "name": "Year",
          "package": "hledger-lib",
          "source": "src/Hledger-Data-Types.html#Year",
          "type": "type"
        },
        "index": {
          "hierarchy": "Hledger Data Types",
          "module": "Hledger.Data.Types",
          "name": "Year",
          "package": "hledger-lib",
          "partial": "Year",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#t:Year"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Data.Types",
          "name": "Account",
          "package": "hledger-lib",
          "signature": "Account",
          "source": "src/Hledger-Data-Types.html#Account",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Data Types",
          "module": "Hledger.Data.Types",
          "name": "Account",
          "package": "hledger-lib",
          "partial": "Account",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#v:Account"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Data.Types",
          "name": "Amount",
          "package": "hledger-lib",
          "signature": "Amount",
          "source": "src/Hledger-Data-Types.html#Amount",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Data Types",
          "module": "Hledger.Data.Types",
          "name": "Amount",
          "package": "hledger-lib",
          "partial": "Amount",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#v:Amount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Data.Types",
          "name": "AmountStyle",
          "package": "hledger-lib",
          "signature": "AmountStyle",
          "source": "src/Hledger-Data-Types.html#AmountStyle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Data Types",
          "module": "Hledger.Data.Types",
          "name": "AmountStyle",
          "package": "hledger-lib",
          "partial": "Amount Style",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#v:AmountStyle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Data.Types",
          "name": "BalancedVirtualPosting",
          "package": "hledger-lib",
          "signature": "BalancedVirtualPosting",
          "source": "src/Hledger-Data-Types.html#PostingType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Data Types",
          "module": "Hledger.Data.Types",
          "name": "BalancedVirtualPosting",
          "package": "hledger-lib",
          "partial": "Balanced Virtual Posting",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#v:BalancedVirtualPosting"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Data.Types",
          "name": "Ctx",
          "package": "hledger-lib",
          "signature": "Ctx",
          "source": "src/Hledger-Data-Types.html#JournalContext",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Data Types",
          "module": "Hledger.Data.Types",
          "name": "Ctx",
          "package": "hledger-lib",
          "partial": "Ctx",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#v:Ctx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Data.Types",
          "name": "DateSpan",
          "package": "hledger-lib",
          "signature": "DateSpan (Maybe Day) (Maybe Day)",
          "source": "src/Hledger-Data-Types.html#DateSpan",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Data Types",
          "module": "Hledger.Data.Types",
          "name": "DateSpan",
          "package": "hledger-lib",
          "partial": "Date Span",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#v:DateSpan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Data.Types",
          "name": "DayOfMonth",
          "package": "hledger-lib",
          "signature": "DayOfMonth Int",
          "source": "src/Hledger-Data-Types.html#Interval",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Data Types",
          "module": "Hledger.Data.Types",
          "name": "DayOfMonth",
          "package": "hledger-lib",
          "partial": "Day Of Month",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#v:DayOfMonth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Data.Types",
          "name": "DayOfWeek",
          "package": "hledger-lib",
          "signature": "DayOfWeek Int",
          "source": "src/Hledger-Data-Types.html#Interval",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Data Types",
          "module": "Hledger.Data.Types",
          "name": "DayOfWeek",
          "package": "hledger-lib",
          "partial": "Day Of Week",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#v:DayOfWeek"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Data.Types",
          "name": "Days",
          "package": "hledger-lib",
          "signature": "Days Int",
          "source": "src/Hledger-Data-Types.html#Interval",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Data Types",
          "module": "Hledger.Data.Types",
          "name": "Days",
          "package": "hledger-lib",
          "partial": "Days",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#v:Days"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Data.Types",
          "name": "FinalOut",
          "package": "hledger-lib",
          "signature": "FinalOut",
          "source": "src/Hledger-Data-Types.html#TimeLogCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Data Types",
          "module": "Hledger.Data.Types",
          "name": "FinalOut",
          "package": "hledger-lib",
          "partial": "Final Out",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#v:FinalOut"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Data.Types",
          "name": "HistoricalPrice",
          "package": "hledger-lib",
          "signature": "HistoricalPrice",
          "source": "src/Hledger-Data-Types.html#HistoricalPrice",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Data Types",
          "module": "Hledger.Data.Types",
          "name": "HistoricalPrice",
          "package": "hledger-lib",
          "partial": "Historical Price",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#v:HistoricalPrice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Data.Types",
          "name": "In",
          "package": "hledger-lib",
          "signature": "In",
          "source": "src/Hledger-Data-Types.html#TimeLogCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Data Types",
          "module": "Hledger.Data.Types",
          "name": "In",
          "package": "hledger-lib",
          "partial": "In",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#v:In"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Data.Types",
          "name": "Journal",
          "package": "hledger-lib",
          "signature": "Journal",
          "source": "src/Hledger-Data-Types.html#Journal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Data Types",
          "module": "Hledger.Data.Types",
          "name": "Journal",
          "package": "hledger-lib",
          "partial": "Journal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#v:Journal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Data.Types",
          "name": "L",
          "package": "hledger-lib",
          "signature": "L",
          "source": "src/Hledger-Data-Types.html#Side",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Data Types",
          "module": "Hledger.Data.Types",
          "name": "L",
          "package": "hledger-lib",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#v:L"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Data.Types",
          "name": "Ledger",
          "package": "hledger-lib",
          "signature": "Ledger",
          "source": "src/Hledger-Data-Types.html#Ledger",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Data Types",
          "module": "Hledger.Data.Types",
          "name": "Ledger",
          "package": "hledger-lib",
          "partial": "Ledger",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#v:Ledger"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Data.Types",
          "name": "Mixed",
          "package": "hledger-lib",
          "signature": "Mixed [Amount]",
          "source": "src/Hledger-Data-Types.html#MixedAmount",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Data Types",
          "module": "Hledger.Data.Types",
          "name": "Mixed",
          "normalized": "Mixed[Amount]",
          "package": "hledger-lib",
          "partial": "Mixed",
          "signature": "Mixed[Amount]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#v:Mixed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Data.Types",
          "name": "ModifierTransaction",
          "package": "hledger-lib",
          "signature": "ModifierTransaction",
          "source": "src/Hledger-Data-Types.html#ModifierTransaction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Data Types",
          "module": "Hledger.Data.Types",
          "name": "ModifierTransaction",
          "package": "hledger-lib",
          "partial": "Modifier Transaction",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#v:ModifierTransaction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Data.Types",
          "name": "Months",
          "package": "hledger-lib",
          "signature": "Months Int",
          "source": "src/Hledger-Data-Types.html#Interval",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Data Types",
          "module": "Hledger.Data.Types",
          "name": "Months",
          "package": "hledger-lib",
          "partial": "Months",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#v:Months"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Data.Types",
          "name": "NoInterval",
          "package": "hledger-lib",
          "signature": "NoInterval",
          "source": "src/Hledger-Data-Types.html#Interval",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Data Types",
          "module": "Hledger.Data.Types",
          "name": "NoInterval",
          "package": "hledger-lib",
          "partial": "No Interval",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#v:NoInterval"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Data.Types",
          "name": "NoPrice",
          "package": "hledger-lib",
          "signature": "NoPrice",
          "source": "src/Hledger-Data-Types.html#Price",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Data Types",
          "module": "Hledger.Data.Types",
          "name": "NoPrice",
          "package": "hledger-lib",
          "partial": "No Price",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#v:NoPrice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Data.Types",
          "name": "Out",
          "package": "hledger-lib",
          "signature": "Out",
          "source": "src/Hledger-Data-Types.html#TimeLogCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Data Types",
          "module": "Hledger.Data.Types",
          "name": "Out",
          "package": "hledger-lib",
          "partial": "Out",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#v:Out"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Data.Types",
          "name": "PeriodicTransaction",
          "package": "hledger-lib",
          "signature": "PeriodicTransaction",
          "source": "src/Hledger-Data-Types.html#PeriodicTransaction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Data Types",
          "module": "Hledger.Data.Types",
          "name": "PeriodicTransaction",
          "package": "hledger-lib",
          "partial": "Periodic Transaction",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#v:PeriodicTransaction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Data.Types",
          "name": "Posting",
          "package": "hledger-lib",
          "signature": "Posting",
          "source": "src/Hledger-Data-Types.html#Posting",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Data Types",
          "module": "Hledger.Data.Types",
          "name": "Posting",
          "package": "hledger-lib",
          "partial": "Posting",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#v:Posting"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Data.Types",
          "name": "PrimaryDate",
          "package": "hledger-lib",
          "signature": "PrimaryDate",
          "source": "src/Hledger-Data-Types.html#WhichDate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Data Types",
          "module": "Hledger.Data.Types",
          "name": "PrimaryDate",
          "package": "hledger-lib",
          "partial": "Primary Date",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#v:PrimaryDate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Data.Types",
          "name": "Quarters",
          "package": "hledger-lib",
          "signature": "Quarters Int",
          "source": "src/Hledger-Data-Types.html#Interval",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Data Types",
          "module": "Hledger.Data.Types",
          "name": "Quarters",
          "package": "hledger-lib",
          "partial": "Quarters",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#v:Quarters"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Data.Types",
          "name": "R",
          "package": "hledger-lib",
          "signature": "R",
          "source": "src/Hledger-Data-Types.html#Side",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Data Types",
          "module": "Hledger.Data.Types",
          "name": "R",
          "package": "hledger-lib",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#v:R"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Data.Types",
          "name": "Reader",
          "package": "hledger-lib",
          "signature": "Reader",
          "source": "src/Hledger-Data-Types.html#Reader",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Data Types",
          "module": "Hledger.Data.Types",
          "name": "Reader",
          "package": "hledger-lib",
          "partial": "Reader",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#v:Reader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Data.Types",
          "name": "RegularPosting",
          "package": "hledger-lib",
          "signature": "RegularPosting",
          "source": "src/Hledger-Data-Types.html#PostingType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Data Types",
          "module": "Hledger.Data.Types",
          "name": "RegularPosting",
          "package": "hledger-lib",
          "partial": "Regular Posting",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#v:RegularPosting"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Data.Types",
          "name": "SecondaryDate",
          "package": "hledger-lib",
          "signature": "SecondaryDate",
          "source": "src/Hledger-Data-Types.html#WhichDate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Data Types",
          "module": "Hledger.Data.Types",
          "name": "SecondaryDate",
          "package": "hledger-lib",
          "partial": "Secondary Date",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#v:SecondaryDate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Data.Types",
          "name": "SetBalance",
          "package": "hledger-lib",
          "signature": "SetBalance",
          "source": "src/Hledger-Data-Types.html#TimeLogCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Data Types",
          "module": "Hledger.Data.Types",
          "name": "SetBalance",
          "package": "hledger-lib",
          "partial": "Set Balance",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#v:SetBalance"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Data.Types",
          "name": "SetRequiredHours",
          "package": "hledger-lib",
          "signature": "SetRequiredHours",
          "source": "src/Hledger-Data-Types.html#TimeLogCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Data Types",
          "module": "Hledger.Data.Types",
          "name": "SetRequiredHours",
          "package": "hledger-lib",
          "partial": "Set Required Hours",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#v:SetRequiredHours"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Data.Types",
          "name": "TimeLogEntry",
          "package": "hledger-lib",
          "signature": "TimeLogEntry",
          "source": "src/Hledger-Data-Types.html#TimeLogEntry",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Data Types",
          "module": "Hledger.Data.Types",
          "name": "TimeLogEntry",
          "package": "hledger-lib",
          "partial": "Time Log Entry",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#v:TimeLogEntry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Data.Types",
          "name": "TotalPrice",
          "package": "hledger-lib",
          "signature": "TotalPrice Amount",
          "source": "src/Hledger-Data-Types.html#Price",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Data Types",
          "module": "Hledger.Data.Types",
          "name": "TotalPrice",
          "package": "hledger-lib",
          "partial": "Total Price",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#v:TotalPrice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Data.Types",
          "name": "Transaction",
          "package": "hledger-lib",
          "signature": "Transaction",
          "source": "src/Hledger-Data-Types.html#Transaction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Data Types",
          "module": "Hledger.Data.Types",
          "name": "Transaction",
          "package": "hledger-lib",
          "partial": "Transaction",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#v:Transaction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Data.Types",
          "name": "UnitPrice",
          "package": "hledger-lib",
          "signature": "UnitPrice Amount",
          "source": "src/Hledger-Data-Types.html#Price",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Data Types",
          "module": "Hledger.Data.Types",
          "name": "UnitPrice",
          "package": "hledger-lib",
          "partial": "Unit Price",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#v:UnitPrice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Data.Types",
          "name": "VirtualPosting",
          "package": "hledger-lib",
          "signature": "VirtualPosting",
          "source": "src/Hledger-Data-Types.html#PostingType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Data Types",
          "module": "Hledger.Data.Types",
          "name": "VirtualPosting",
          "package": "hledger-lib",
          "partial": "Virtual Posting",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#v:VirtualPosting"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Data.Types",
          "name": "Weeks",
          "package": "hledger-lib",
          "signature": "Weeks Int",
          "source": "src/Hledger-Data-Types.html#Interval",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Data Types",
          "module": "Hledger.Data.Types",
          "name": "Weeks",
          "package": "hledger-lib",
          "partial": "Weeks",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#v:Weeks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Data.Types",
          "name": "Years",
          "package": "hledger-lib",
          "signature": "Years Int",
          "source": "src/Hledger-Data-Types.html#Interval",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Data Types",
          "module": "Hledger.Data.Types",
          "name": "Years",
          "package": "hledger-lib",
          "partial": "Years",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#v:Years"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eused in the accounts report to label elidable parents\n\u003c/p\u003e",
          "module": "Hledger.Data.Types",
          "name": "aboring",
          "package": "hledger-lib",
          "signature": "Bool",
          "source": "src/Hledger-Data-Types.html#Account",
          "type": "function"
        },
        "index": {
          "description": "used in the accounts report to label elidable parents",
          "hierarchy": "Hledger Data Types",
          "module": "Hledger.Data.Types",
          "name": "aboring",
          "package": "hledger-lib",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#v:aboring"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Data.Types",
          "name": "acommodity",
          "package": "hledger-lib",
          "signature": "Commodity",
          "source": "src/Hledger-Data-Types.html#Amount",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Data Types",
          "module": "Hledger.Data.Types",
          "name": "acommodity",
          "package": "hledger-lib",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#v:acommodity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethis account's balance, excluding subaccounts\n\u003c/p\u003e",
          "module": "Hledger.Data.Types",
          "name": "aebalance",
          "package": "hledger-lib",
          "signature": "MixedAmount",
          "source": "src/Hledger-Data-Types.html#Account",
          "type": "function"
        },
        "index": {
          "description": "this account balance excluding subaccounts",
          "hierarchy": "Hledger Data Types",
          "module": "Hledger.Data.Types",
          "name": "aebalance",
          "package": "hledger-lib",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#v:aebalance"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethis account's balance, including subaccounts\n\u003c/p\u003e",
          "module": "Hledger.Data.Types",
          "name": "aibalance",
          "package": "hledger-lib",
          "signature": "MixedAmount",
          "source": "src/Hledger-Data-Types.html#Account",
          "type": "function"
        },
        "index": {
          "description": "this account balance including subaccounts",
          "hierarchy": "Hledger Data Types",
          "module": "Hledger.Data.Types",
          "name": "aibalance",
          "package": "hledger-lib",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#v:aibalance"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethis account's full name\n\u003c/p\u003e",
          "module": "Hledger.Data.Types",
          "name": "aname",
          "package": "hledger-lib",
          "signature": "AccountName",
          "source": "src/Hledger-Data-Types.html#Account",
          "type": "function"
        },
        "index": {
          "description": "this account full name",
          "hierarchy": "Hledger Data Types",
          "module": "Hledger.Data.Types",
          "name": "aname",
          "package": "hledger-lib",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#v:aname"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eparent account\n\u003c/p\u003e",
          "module": "Hledger.Data.Types",
          "name": "aparent",
          "package": "hledger-lib",
          "signature": "Maybe Account",
          "source": "src/Hledger-Data-Types.html#Account",
          "type": "function"
        },
        "index": {
          "description": "parent account",
          "hierarchy": "Hledger Data Types",
          "module": "Hledger.Data.Types",
          "name": "aparent",
          "package": "hledger-lib",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#v:aparent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe (fixed) price for this amount, if any\n\u003c/p\u003e",
          "module": "Hledger.Data.Types",
          "name": "aprice",
          "package": "hledger-lib",
          "signature": "Price",
          "source": "src/Hledger-Data-Types.html#Amount",
          "type": "function"
        },
        "index": {
          "description": "the fixed price for this amount if any",
          "hierarchy": "Hledger Data Types",
          "module": "Hledger.Data.Types",
          "name": "aprice",
          "package": "hledger-lib",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#v:aprice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Data.Types",
          "name": "aquantity",
          "package": "hledger-lib",
          "signature": "Quantity",
          "source": "src/Hledger-Data-Types.html#Amount",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Data Types",
          "module": "Hledger.Data.Types",
          "name": "aquantity",
          "package": "hledger-lib",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#v:aquantity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003edoes the symbol appear on the left or the right ?\n\u003c/p\u003e",
          "module": "Hledger.Data.Types",
          "name": "ascommodityside",
          "package": "hledger-lib",
          "signature": "Side",
          "source": "src/Hledger-Data-Types.html#AmountStyle",
          "type": "function"
        },
        "index": {
          "description": "does the symbol appear on the left or the right",
          "hierarchy": "Hledger Data Types",
          "module": "Hledger.Data.Types",
          "name": "ascommodityside",
          "package": "hledger-lib",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#v:ascommodityside"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003espace between symbol and quantity ?\n\u003c/p\u003e",
          "module": "Hledger.Data.Types",
          "name": "ascommodityspaced",
          "package": "hledger-lib",
          "signature": "Bool",
          "source": "src/Hledger-Data-Types.html#AmountStyle",
          "type": "function"
        },
        "index": {
          "description": "space between symbol and quantity",
          "hierarchy": "Hledger Data Types",
          "module": "Hledger.Data.Types",
          "name": "ascommodityspaced",
          "package": "hledger-lib",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#v:ascommodityspaced"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003echaracter used as decimal point\n\u003c/p\u003e",
          "module": "Hledger.Data.Types",
          "name": "asdecimalpoint",
          "package": "hledger-lib",
          "signature": "Char",
          "source": "src/Hledger-Data-Types.html#AmountStyle",
          "type": "function"
        },
        "index": {
          "description": "character used as decimal point",
          "hierarchy": "Hledger Data Types",
          "module": "Hledger.Data.Types",
          "name": "asdecimalpoint",
          "package": "hledger-lib",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#v:asdecimalpoint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003enumber of digits displayed after the decimal point\n\u003c/p\u003e",
          "module": "Hledger.Data.Types",
          "name": "asprecision",
          "package": "hledger-lib",
          "signature": "Int",
          "source": "src/Hledger-Data-Types.html#AmountStyle",
          "type": "function"
        },
        "index": {
          "description": "number of digits displayed after the decimal point",
          "hierarchy": "Hledger Data Types",
          "module": "Hledger.Data.Types",
          "name": "asprecision",
          "package": "hledger-lib",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#v:asprecision"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003echaracter used for separating digit groups (eg thousands)\n\u003c/p\u003e",
          "module": "Hledger.Data.Types",
          "name": "asseparator",
          "package": "hledger-lib",
          "signature": "Char",
          "source": "src/Hledger-Data-Types.html#AmountStyle",
          "type": "function"
        },
        "index": {
          "description": "character used for separating digit groups eg thousands",
          "hierarchy": "Hledger Data Types",
          "module": "Hledger.Data.Types",
          "name": "asseparator",
          "package": "hledger-lib",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#v:asseparator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003epositions of digit group separators, counting leftward from decimal point\n\u003c/p\u003e",
          "module": "Hledger.Data.Types",
          "name": "asseparatorpositions",
          "package": "hledger-lib",
          "signature": "[Int]",
          "source": "src/Hledger-Data-Types.html#AmountStyle",
          "type": "function"
        },
        "index": {
          "description": "positions of digit group separators counting leftward from decimal point",
          "hierarchy": "Hledger Data Types",
          "module": "Hledger.Data.Types",
          "name": "asseparatorpositions",
          "normalized": "[Int]",
          "package": "hledger-lib",
          "signature": "[Int]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#v:asseparatorpositions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Data.Types",
          "name": "astyle",
          "package": "hledger-lib",
          "signature": "AmountStyle",
          "source": "src/Hledger-Data-Types.html#Amount",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Data Types",
          "module": "Hledger.Data.Types",
          "name": "astyle",
          "package": "hledger-lib",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#v:astyle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esub-accounts\n anumpostings :: Int       -- ^ number of postings to this account\n derived from the above:\n\u003c/p\u003e",
          "module": "Hledger.Data.Types",
          "name": "asubs",
          "package": "hledger-lib",
          "signature": "[Account]",
          "source": "src/Hledger-Data-Types.html#Account",
          "type": "function"
        },
        "index": {
          "description": "sub-accounts anumpostings Int number of postings to this account derived from the above",
          "hierarchy": "Hledger Data Types",
          "module": "Hledger.Data.Types",
          "name": "asubs",
          "normalized": "[Account]",
          "package": "hledger-lib",
          "signature": "[Account]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#v:asubs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe current stack of parent accounts/account name components\n   specified with \u003ca\u003eaccount\u003c/a\u003e directive(s). Concatenated, these\n   are the account prefix prepended to parsed account names.\n\u003c/p\u003e",
          "module": "Hledger.Data.Types",
          "name": "ctxAccount",
          "package": "hledger-lib",
          "signature": "[AccountName]",
          "source": "src/Hledger-Data-Types.html#JournalContext",
          "type": "function"
        },
        "index": {
          "description": "the current stack of parent accounts account name components specified with account directive Concatenated these are the account prefix prepended to parsed account names",
          "hierarchy": "Hledger Data Types",
          "module": "Hledger.Data.Types",
          "name": "ctxAccount",
          "normalized": "[AccountName]",
          "package": "hledger-lib",
          "partial": "Account",
          "signature": "[AccountName]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#v:ctxAccount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe current list of account name aliases in effect\n\u003c/p\u003e",
          "module": "Hledger.Data.Types",
          "name": "ctxAliases",
          "package": "hledger-lib",
          "signature": "[(AccountName, AccountName)]",
          "source": "src/Hledger-Data-Types.html#JournalContext",
          "type": "function"
        },
        "index": {
          "description": "the current list of account name aliases in effect",
          "hierarchy": "Hledger Data Types",
          "module": "Hledger.Data.Types",
          "name": "ctxAliases",
          "normalized": "[(AccountName,AccountName)]",
          "package": "hledger-lib",
          "partial": "Aliases",
          "signature": "[(AccountName,AccountName)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#v:ctxAliases"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe default commodity and amount style most recently specified with D\n\u003c/p\u003e",
          "module": "Hledger.Data.Types",
          "name": "ctxCommodityAndStyle",
          "package": "hledger-lib",
          "signature": "(Maybe (Commodity, AmountStyle))",
          "source": "src/Hledger-Data-Types.html#JournalContext",
          "type": "function"
        },
        "index": {
          "description": "the default commodity and amount style most recently specified with",
          "hierarchy": "Hledger Data Types",
          "module": "Hledger.Data.Types",
          "name": "ctxCommodityAndStyle",
          "normalized": "(Maybe(Commodity,AmountStyle))",
          "package": "hledger-lib",
          "partial": "Commodity And Style",
          "signature": "(Maybe(Commodity,AmountStyle))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#v:ctxCommodityAndStyle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe default year most recently specified with Y\n\u003c/p\u003e",
          "module": "Hledger.Data.Types",
          "name": "ctxYear",
          "package": "hledger-lib",
          "signature": "(Maybe Year)",
          "source": "src/Hledger-Data-Types.html#JournalContext",
          "type": "function"
        },
        "index": {
          "description": "the default year most recently specified with",
          "hierarchy": "Hledger Data Types",
          "module": "Hledger.Data.Types",
          "name": "ctxYear",
          "package": "hledger-lib",
          "partial": "Year",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#v:ctxYear"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ewhen this journal was last read from its file(s)\n\u003c/p\u003e",
          "module": "Hledger.Data.Types",
          "name": "filereadtime",
          "package": "hledger-lib",
          "signature": "ClockTime",
          "source": "src/Hledger-Data-Types.html#Journal",
          "type": "function"
        },
        "index": {
          "description": "when this journal was last read from its file",
          "hierarchy": "Hledger Data Types",
          "module": "Hledger.Data.Types",
          "name": "filereadtime",
          "package": "hledger-lib",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#v:filereadtime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe file path and raw text of the main and\n any included journal files. The main file is\n first followed by any included files in the\n order encountered (XXX reversed, cf journalAddFile).\n\u003c/p\u003e",
          "module": "Hledger.Data.Types",
          "name": "files",
          "package": "hledger-lib",
          "signature": "[(FilePath, String)]",
          "source": "src/Hledger-Data-Types.html#Journal",
          "type": "function"
        },
        "index": {
          "description": "the file path and raw text of the main and any included journal files The main file is first followed by any included files in the order encountered XXX reversed cf journalAddFile",
          "hierarchy": "Hledger Data Types",
          "module": "Hledger.Data.Types",
          "name": "files",
          "normalized": "[(FilePath,String)]",
          "package": "hledger-lib",
          "signature": "[(FilePath,String)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#v:files"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eany trailing comments from the journal file\n\u003c/p\u003e",
          "module": "Hledger.Data.Types",
          "name": "final_comment_lines",
          "package": "hledger-lib",
          "signature": "String",
          "source": "src/Hledger-Data-Types.html#Journal",
          "type": "function"
        },
        "index": {
          "description": "any trailing comments from the journal file",
          "hierarchy": "Hledger Data Types",
          "module": "Hledger.Data.Types",
          "name": "final_comment_lines",
          "package": "hledger-lib",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#v:final_comment_lines"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Data.Types",
          "name": "hamount",
          "package": "hledger-lib",
          "signature": "Amount",
          "source": "src/Hledger-Data-Types.html#HistoricalPrice",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Data Types",
          "module": "Hledger.Data.Types",
          "name": "hamount",
          "package": "hledger-lib",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#v:hamount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Data.Types",
          "name": "hcommodity",
          "package": "hledger-lib",
          "signature": "Commodity",
          "source": "src/Hledger-Data-Types.html#HistoricalPrice",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Data Types",
          "module": "Hledger.Data.Types",
          "name": "hcommodity",
          "package": "hledger-lib",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#v:hcommodity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Data.Types",
          "name": "hdate",
          "package": "hledger-lib",
          "signature": "Day",
          "source": "src/Hledger-Data-Types.html#HistoricalPrice",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Data Types",
          "module": "Hledger.Data.Types",
          "name": "hdate",
          "package": "hledger-lib",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#v:hdate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Data.Types",
          "name": "historical_prices",
          "package": "hledger-lib",
          "signature": "[HistoricalPrice]",
          "source": "src/Hledger-Data-Types.html#Journal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Data Types",
          "module": "Hledger.Data.Types",
          "name": "historical_prices",
          "normalized": "[HistoricalPrice]",
          "package": "hledger-lib",
          "signature": "[HistoricalPrice]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#v:historical_prices"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe context (parse state) at the end of parsing\n\u003c/p\u003e",
          "module": "Hledger.Data.Types",
          "name": "jContext",
          "package": "hledger-lib",
          "signature": "JournalContext",
          "source": "src/Hledger-Data-Types.html#Journal",
          "type": "function"
        },
        "index": {
          "description": "the context parse state at the end of parsing",
          "hierarchy": "Hledger Data Types",
          "module": "Hledger.Data.Types",
          "name": "jContext",
          "package": "hledger-lib",
          "partial": "Context",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#v:jContext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ehow to display amounts in each commodity\n\u003c/p\u003e",
          "module": "Hledger.Data.Types",
          "name": "jcommoditystyles",
          "package": "hledger-lib",
          "signature": "Map Commodity AmountStyle",
          "source": "src/Hledger-Data-Types.html#Journal",
          "type": "function"
        },
        "index": {
          "description": "how to display amounts in each commodity",
          "hierarchy": "Hledger Data Types",
          "module": "Hledger.Data.Types",
          "name": "jcommoditystyles",
          "package": "hledger-lib",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#v:jcommoditystyles"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Data.Types",
          "name": "jmodifiertxns",
          "package": "hledger-lib",
          "signature": "[ModifierTransaction]",
          "source": "src/Hledger-Data-Types.html#Journal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Data Types",
          "module": "Hledger.Data.Types",
          "name": "jmodifiertxns",
          "normalized": "[ModifierTransaction]",
          "package": "hledger-lib",
          "signature": "[ModifierTransaction]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#v:jmodifiertxns"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Data.Types",
          "name": "jperiodictxns",
          "package": "hledger-lib",
          "signature": "[PeriodicTransaction]",
          "source": "src/Hledger-Data-Types.html#Journal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Data Types",
          "module": "Hledger.Data.Types",
          "name": "jperiodictxns",
          "normalized": "[PeriodicTransaction]",
          "package": "hledger-lib",
          "signature": "[PeriodicTransaction]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#v:jperiodictxns"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Data.Types",
          "name": "jtxns",
          "package": "hledger-lib",
          "signature": "[Transaction]",
          "source": "src/Hledger-Data-Types.html#Journal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Data Types",
          "module": "Hledger.Data.Types",
          "name": "jtxns",
          "normalized": "[Transaction]",
          "package": "hledger-lib",
          "signature": "[Transaction]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#v:jtxns"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Data.Types",
          "name": "laccounts",
          "package": "hledger-lib",
          "signature": "[Account]",
          "source": "src/Hledger-Data-Types.html#Ledger",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Data Types",
          "module": "Hledger.Data.Types",
          "name": "laccounts",
          "normalized": "[Account]",
          "package": "hledger-lib",
          "signature": "[Account]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#v:laccounts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Data.Types",
          "name": "ljournal",
          "package": "hledger-lib",
          "signature": "Journal",
          "source": "src/Hledger-Data-Types.html#Ledger",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Data Types",
          "module": "Hledger.Data.Types",
          "name": "ljournal",
          "package": "hledger-lib",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#v:ljournal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Data.Types",
          "name": "mtpostings",
          "package": "hledger-lib",
          "signature": "[Posting]",
          "source": "src/Hledger-Data-Types.html#ModifierTransaction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Data Types",
          "module": "Hledger.Data.Types",
          "name": "mtpostings",
          "normalized": "[Posting]",
          "package": "hledger-lib",
          "signature": "[Posting]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#v:mtpostings"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Data.Types",
          "name": "mtvalueexpr",
          "package": "hledger-lib",
          "signature": "String",
          "source": "src/Hledger-Data-Types.html#ModifierTransaction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Data Types",
          "module": "Hledger.Data.Types",
          "name": "mtvalueexpr",
          "package": "hledger-lib",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#v:mtvalueexpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Data.Types",
          "name": "open_timelog_entries",
          "package": "hledger-lib",
          "signature": "[TimeLogEntry]",
          "source": "src/Hledger-Data-Types.html#Journal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Data Types",
          "module": "Hledger.Data.Types",
          "name": "open_timelog_entries",
          "normalized": "[TimeLogEntry]",
          "package": "hledger-lib",
          "signature": "[TimeLogEntry]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#v:open_timelog_entries"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Data.Types",
          "name": "paccount",
          "package": "hledger-lib",
          "signature": "AccountName",
          "source": "src/Hledger-Data-Types.html#Posting",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Data Types",
          "module": "Hledger.Data.Types",
          "name": "paccount",
          "package": "hledger-lib",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#v:paccount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Data.Types",
          "name": "pamount",
          "package": "hledger-lib",
          "signature": "MixedAmount",
          "source": "src/Hledger-Data-Types.html#Posting",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Data Types",
          "module": "Hledger.Data.Types",
          "name": "pamount",
          "package": "hledger-lib",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#v:pamount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eoptional: the expected balance in the account after this posting\n\u003c/p\u003e",
          "module": "Hledger.Data.Types",
          "name": "pbalanceassertion",
          "package": "hledger-lib",
          "signature": "Maybe MixedAmount",
          "source": "src/Hledger-Data-Types.html#Posting",
          "type": "function"
        },
        "index": {
          "description": "optional the expected balance in the account after this posting",
          "hierarchy": "Hledger Data Types",
          "module": "Hledger.Data.Types",
          "name": "pbalanceassertion",
          "package": "hledger-lib",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#v:pbalanceassertion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethis posting's comment lines, as a single non-indented multi-line string\n\u003c/p\u003e",
          "module": "Hledger.Data.Types",
          "name": "pcomment",
          "package": "hledger-lib",
          "signature": "String",
          "source": "src/Hledger-Data-Types.html#Posting",
          "type": "function"
        },
        "index": {
          "description": "this posting comment lines as single non-indented multi-line string",
          "hierarchy": "Hledger Data Types",
          "module": "Hledger.Data.Types",
          "name": "pcomment",
          "package": "hledger-lib",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#v:pcomment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethis posting's date, if different from the transaction's\n\u003c/p\u003e",
          "module": "Hledger.Data.Types",
          "name": "pdate",
          "package": "hledger-lib",
          "signature": "Maybe Day",
          "source": "src/Hledger-Data-Types.html#Posting",
          "type": "function"
        },
        "index": {
          "description": "this posting date if different from the transaction",
          "hierarchy": "Hledger Data Types",
          "module": "Hledger.Data.Types",
          "name": "pdate",
          "package": "hledger-lib",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#v:pdate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethis posting's secondary date, if different from the transaction's\n\u003c/p\u003e",
          "module": "Hledger.Data.Types",
          "name": "pdate2",
          "package": "hledger-lib",
          "signature": "Maybe Day",
          "source": "src/Hledger-Data-Types.html#Posting",
          "type": "function"
        },
        "index": {
          "description": "this posting secondary date if different from the transaction",
          "hierarchy": "Hledger Data Types",
          "module": "Hledger.Data.Types",
          "name": "pdate2",
          "package": "hledger-lib",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#v:pdate2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Data.Types",
          "name": "pstatus",
          "package": "hledger-lib",
          "signature": "Bool",
          "source": "src/Hledger-Data-Types.html#Posting",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Data Types",
          "module": "Hledger.Data.Types",
          "name": "pstatus",
          "package": "hledger-lib",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#v:pstatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003etag names and values, extracted from the comment\n\u003c/p\u003e",
          "module": "Hledger.Data.Types",
          "name": "ptags",
          "package": "hledger-lib",
          "signature": "[Tag]",
          "source": "src/Hledger-Data-Types.html#Posting",
          "type": "function"
        },
        "index": {
          "description": "tag names and values extracted from the comment",
          "hierarchy": "Hledger Data Types",
          "module": "Hledger.Data.Types",
          "name": "ptags",
          "normalized": "[Tag]",
          "package": "hledger-lib",
          "signature": "[Tag]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#v:ptags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Data.Types",
          "name": "ptperiodicexpr",
          "package": "hledger-lib",
          "signature": "String",
          "source": "src/Hledger-Data-Types.html#PeriodicTransaction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Data Types",
          "module": "Hledger.Data.Types",
          "name": "ptperiodicexpr",
          "package": "hledger-lib",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#v:ptperiodicexpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Data.Types",
          "name": "ptpostings",
          "package": "hledger-lib",
          "signature": "[Posting]",
          "source": "src/Hledger-Data-Types.html#PeriodicTransaction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Data Types",
          "module": "Hledger.Data.Types",
          "name": "ptpostings",
          "normalized": "[Posting]",
          "package": "hledger-lib",
          "signature": "[Posting]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#v:ptpostings"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethis posting's parent transaction (co-recursive types).\n Tying this knot gets tedious, Maybe makes it easier/optional.\n\u003c/p\u003e",
          "module": "Hledger.Data.Types",
          "name": "ptransaction",
          "package": "hledger-lib",
          "signature": "Maybe Transaction",
          "source": "src/Hledger-Data-Types.html#Posting",
          "type": "function"
        },
        "index": {
          "description": "this posting parent transaction co-recursive types Tying this knot gets tedious Maybe makes it easier optional",
          "hierarchy": "Hledger Data Types",
          "module": "Hledger.Data.Types",
          "name": "ptransaction",
          "package": "hledger-lib",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#v:ptransaction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Data.Types",
          "name": "ptype",
          "package": "hledger-lib",
          "signature": "PostingType",
          "source": "src/Hledger-Data-Types.html#Posting",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Data Types",
          "module": "Hledger.Data.Types",
          "name": "ptype",
          "package": "hledger-lib",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#v:ptype"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Data.Types",
          "name": "rDetector",
          "package": "hledger-lib",
          "signature": "FilePath -\u003e String -\u003e Bool",
          "source": "src/Hledger-Data-Types.html#Reader",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Data Types",
          "module": "Hledger.Data.Types",
          "name": "rDetector",
          "normalized": "FilePath-\u003eString-\u003eBool",
          "package": "hledger-lib",
          "partial": "Detector",
          "signature": "FilePath-\u003eString-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#v:rDetector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Data.Types",
          "name": "rFormat",
          "package": "hledger-lib",
          "signature": "Format",
          "source": "src/Hledger-Data-Types.html#Reader",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Data Types",
          "module": "Hledger.Data.Types",
          "name": "rFormat",
          "package": "hledger-lib",
          "partial": "Format",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#v:rFormat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Data.Types",
          "name": "rParser",
          "package": "hledger-lib",
          "signature": "Maybe FilePath -\u003e FilePath -\u003e String -\u003e ErrorT String IO Journal",
          "source": "src/Hledger-Data-Types.html#Reader",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Data Types",
          "module": "Hledger.Data.Types",
          "name": "rParser",
          "normalized": "Maybe FilePath-\u003eFilePath-\u003eString-\u003eErrorT String IO Journal",
          "package": "hledger-lib",
          "partial": "Parser",
          "signature": "Maybe FilePath-\u003eFilePath-\u003eString-\u003eErrorT String IO Journal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#v:rParser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Data.Types",
          "name": "tcode",
          "package": "hledger-lib",
          "signature": "String",
          "source": "src/Hledger-Data-Types.html#Transaction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Data Types",
          "module": "Hledger.Data.Types",
          "name": "tcode",
          "package": "hledger-lib",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#v:tcode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethis transaction's comment lines, as a single non-indented multi-line string\n\u003c/p\u003e",
          "module": "Hledger.Data.Types",
          "name": "tcomment",
          "package": "hledger-lib",
          "signature": "String",
          "source": "src/Hledger-Data-Types.html#Transaction",
          "type": "function"
        },
        "index": {
          "description": "this transaction comment lines as single non-indented multi-line string",
          "hierarchy": "Hledger Data Types",
          "module": "Hledger.Data.Types",
          "name": "tcomment",
          "package": "hledger-lib",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#v:tcomment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Data.Types",
          "name": "tdate",
          "package": "hledger-lib",
          "signature": "Day",
          "source": "src/Hledger-Data-Types.html#Transaction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Data Types",
          "module": "Hledger.Data.Types",
          "name": "tdate",
          "package": "hledger-lib",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#v:tdate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Data.Types",
          "name": "tdate2",
          "package": "hledger-lib",
          "signature": "Maybe Day",
          "source": "src/Hledger-Data-Types.html#Transaction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Data Types",
          "module": "Hledger.Data.Types",
          "name": "tdate2",
          "package": "hledger-lib",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#v:tdate2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Data.Types",
          "name": "tdescription",
          "package": "hledger-lib",
          "signature": "String",
          "source": "src/Hledger-Data-Types.html#Transaction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Data Types",
          "module": "Hledger.Data.Types",
          "name": "tdescription",
          "package": "hledger-lib",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#v:tdescription"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Data.Types",
          "name": "tlcode",
          "package": "hledger-lib",
          "signature": "TimeLogCode",
          "source": "src/Hledger-Data-Types.html#TimeLogEntry",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Data Types",
          "module": "Hledger.Data.Types",
          "name": "tlcode",
          "package": "hledger-lib",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#v:tlcode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Data.Types",
          "name": "tlcomment",
          "package": "hledger-lib",
          "signature": "String",
          "source": "src/Hledger-Data-Types.html#TimeLogEntry",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Data Types",
          "module": "Hledger.Data.Types",
          "name": "tlcomment",
          "package": "hledger-lib",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#v:tlcomment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Data.Types",
          "name": "tldatetime",
          "package": "hledger-lib",
          "signature": "LocalTime",
          "source": "src/Hledger-Data-Types.html#TimeLogEntry",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Data Types",
          "module": "Hledger.Data.Types",
          "name": "tldatetime",
          "package": "hledger-lib",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#v:tldatetime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethis transaction's postings\n\u003c/p\u003e",
          "module": "Hledger.Data.Types",
          "name": "tpostings",
          "package": "hledger-lib",
          "signature": "[Posting]",
          "source": "src/Hledger-Data-Types.html#Transaction",
          "type": "function"
        },
        "index": {
          "description": "this transaction postings",
          "hierarchy": "Hledger Data Types",
          "module": "Hledger.Data.Types",
          "name": "tpostings",
          "normalized": "[Posting]",
          "package": "hledger-lib",
          "signature": "[Posting]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#v:tpostings"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eany comment lines immediately preceding this transaction\n\u003c/p\u003e",
          "module": "Hledger.Data.Types",
          "name": "tpreceding_comment_lines",
          "package": "hledger-lib",
          "signature": "String",
          "source": "src/Hledger-Data-Types.html#Transaction",
          "type": "function"
        },
        "index": {
          "description": "any comment lines immediately preceding this transaction",
          "hierarchy": "Hledger Data Types",
          "module": "Hledger.Data.Types",
          "name": "tpreceding_comment_lines",
          "package": "hledger-lib",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#v:tpreceding_comment_lines"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Data.Types",
          "name": "tstatus",
          "package": "hledger-lib",
          "signature": "Bool",
          "source": "src/Hledger-Data-Types.html#Transaction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Data Types",
          "module": "Hledger.Data.Types",
          "name": "tstatus",
          "package": "hledger-lib",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#v:tstatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003etag names and values, extracted from the comment\n\u003c/p\u003e",
          "module": "Hledger.Data.Types",
          "name": "ttags",
          "package": "hledger-lib",
          "signature": "[Tag]",
          "source": "src/Hledger-Data-Types.html#Transaction",
          "type": "function"
        },
        "index": {
          "description": "tag names and values extracted from the comment",
          "hierarchy": "Hledger Data Types",
          "module": "Hledger.Data.Types",
          "name": "ttags",
          "normalized": "[Tag]",
          "package": "hledger-lib",
          "signature": "[Tag]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#v:ttags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe Hledger.Data library allows parsing and querying of C++ ledger-style\njournal files.  It generally provides a compatible subset of C++ ledger's\nfunctionality.  This package re-exports all the Hledger.Data.* modules\n(except UTF8, which requires an explicit import.)\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Hledger.Data",
          "name": "Data",
          "package": "hledger-lib",
          "source": "src/Hledger-Data.html",
          "type": "module"
        },
        "index": {
          "description": "The Hledger.Data library allows parsing and querying of ledger-style journal files It generally provides compatible subset of ledger functionality This package re-exports all the Hledger.Data modules except UTF8 which requires an explicit import",
          "hierarchy": "Hledger Data",
          "module": "Hledger.Data",
          "name": "Data",
          "package": "hledger-lib",
          "partial": "Data",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Data",
          "name": "tests_Hledger_Data",
          "package": "hledger-lib",
          "signature": "Test",
          "source": "src/Hledger-Data.html#tests_Hledger_Data",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Data",
          "module": "Hledger.Data",
          "name": "tests_Hledger_Data",
          "package": "hledger-lib",
          "partial": "Hledger Data",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data.html#v:tests_Hledger_Data"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA general query system for matching things (accounts, postings,\ntransactions..)  by various criteria, and a parser for query expressions.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Hledger.Query",
          "name": "Query",
          "package": "hledger-lib",
          "source": "src/Hledger-Query.html",
          "type": "module"
        },
        "index": {
          "description": "general query system for matching things accounts postings transactions by various criteria and parser for query expressions",
          "hierarchy": "Hledger Query",
          "module": "Hledger.Query",
          "name": "Query",
          "package": "hledger-lib",
          "partial": "Query",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Query.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA query is a composition of search criteria, which can be used to\n match postings, transactions, accounts and more.\n\u003c/p\u003e",
          "module": "Hledger.Query",
          "name": "Query",
          "package": "hledger-lib",
          "source": "src/Hledger-Query.html#Query",
          "type": "data"
        },
        "index": {
          "description": "query is composition of search criteria which can be used to match postings transactions accounts and more",
          "hierarchy": "Hledger Query",
          "module": "Hledger.Query",
          "name": "Query",
          "package": "hledger-lib",
          "partial": "Query",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Query.html#t:Query"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA query option changes a query's/report's behaviour and output in some way.\n\u003c/p\u003e",
          "module": "Hledger.Query",
          "name": "QueryOpt",
          "package": "hledger-lib",
          "source": "src/Hledger-Query.html#QueryOpt",
          "type": "data"
        },
        "index": {
          "description": "query option changes query report behaviour and output in some way",
          "hierarchy": "Hledger Query",
          "module": "Hledger.Query",
          "name": "QueryOpt",
          "package": "hledger-lib",
          "partial": "Query Opt",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Query.html#t:QueryOpt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ematch postings whose account matches this regexp\n\u003c/p\u003e",
          "module": "Hledger.Query",
          "name": "Acct",
          "package": "hledger-lib",
          "signature": "Acct String",
          "source": "src/Hledger-Query.html#Query",
          "type": "function"
        },
        "index": {
          "description": "match postings whose account matches this regexp",
          "hierarchy": "Hledger Query",
          "module": "Hledger.Query",
          "name": "Acct",
          "package": "hledger-lib",
          "partial": "Acct",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Query.html#v:Acct"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ematch if the amount's numeric quantity is less than\u003cem\u003egreater than\u003c/em\u003eequal to some value\n\u003c/p\u003e",
          "module": "Hledger.Query",
          "name": "Amt",
          "package": "hledger-lib",
          "signature": "Amt Ordering Quantity",
          "source": "src/Hledger-Query.html#Query",
          "type": "function"
        },
        "index": {
          "description": "match if the amount numeric quantity is less than greater than equal to some value",
          "hierarchy": "Hledger Query",
          "module": "Hledger.Query",
          "name": "Amt",
          "package": "hledger-lib",
          "partial": "Amt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Query.html#v:Amt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ematch if all of these match\n\u003c/p\u003e",
          "module": "Hledger.Query",
          "name": "And",
          "package": "hledger-lib",
          "signature": "And [Query]",
          "source": "src/Hledger-Query.html#Query",
          "type": "function"
        },
        "index": {
          "description": "match if all of these match",
          "hierarchy": "Hledger Query",
          "module": "Hledger.Query",
          "name": "And",
          "normalized": "And[Query]",
          "package": "hledger-lib",
          "partial": "And",
          "signature": "And[Query]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Query.html#v:And"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ealways match\n\u003c/p\u003e",
          "module": "Hledger.Query",
          "name": "Any",
          "package": "hledger-lib",
          "signature": "Any",
          "source": "src/Hledger-Query.html#Query",
          "type": "function"
        },
        "index": {
          "description": "always match",
          "hierarchy": "Hledger Query",
          "module": "Hledger.Query",
          "name": "Any",
          "package": "hledger-lib",
          "partial": "Any",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Query.html#v:Any"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ematch if code matches this regexp\n\u003c/p\u003e",
          "module": "Hledger.Query",
          "name": "Code",
          "package": "hledger-lib",
          "signature": "Code String",
          "source": "src/Hledger-Query.html#Query",
          "type": "function"
        },
        "index": {
          "description": "match if code matches this regexp",
          "hierarchy": "Hledger Query",
          "module": "Hledger.Query",
          "name": "Code",
          "package": "hledger-lib",
          "partial": "Code",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Query.html#v:Code"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ematch if primary date in this date span\n\u003c/p\u003e",
          "module": "Hledger.Query",
          "name": "Date",
          "package": "hledger-lib",
          "signature": "Date DateSpan",
          "source": "src/Hledger-Query.html#Query",
          "type": "function"
        },
        "index": {
          "description": "match if primary date in this date span",
          "hierarchy": "Hledger Query",
          "module": "Hledger.Query",
          "name": "Date",
          "package": "hledger-lib",
          "partial": "Date",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Query.html#v:Date"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ematch if secondary date in this date span\n\u003c/p\u003e",
          "module": "Hledger.Query",
          "name": "Date2",
          "package": "hledger-lib",
          "signature": "Date2 DateSpan",
          "source": "src/Hledger-Query.html#Query",
          "type": "function"
        },
        "index": {
          "description": "match if secondary date in this date span",
          "hierarchy": "Hledger Query",
          "module": "Hledger.Query",
          "name": "Date2",
          "package": "hledger-lib",
          "partial": "Date",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Query.html#v:Date2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ematch if account depth is less than or equal to this value\n\u003c/p\u003e",
          "module": "Hledger.Query",
          "name": "Depth",
          "package": "hledger-lib",
          "signature": "Depth Int",
          "source": "src/Hledger-Query.html#Query",
          "type": "function"
        },
        "index": {
          "description": "match if account depth is less than or equal to this value",
          "hierarchy": "Hledger Query",
          "module": "Hledger.Query",
          "name": "Depth",
          "package": "hledger-lib",
          "partial": "Depth",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Query.html#v:Depth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ematch if description matches this regexp\n\u003c/p\u003e",
          "module": "Hledger.Query",
          "name": "Desc",
          "package": "hledger-lib",
          "signature": "Desc String",
          "source": "src/Hledger-Query.html#Query",
          "type": "function"
        },
        "index": {
          "description": "match if description matches this regexp",
          "hierarchy": "Hledger Query",
          "module": "Hledger.Query",
          "name": "Desc",
          "package": "hledger-lib",
          "partial": "Desc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Query.html#v:Desc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eif true, show zero-amount postings/accounts which are usually not shown\n   more of a query option than a query criteria ?\n\u003c/p\u003e",
          "module": "Hledger.Query",
          "name": "Empty",
          "package": "hledger-lib",
          "signature": "Empty Bool",
          "source": "src/Hledger-Query.html#Query",
          "type": "function"
        },
        "index": {
          "description": "if true show zero-amount postings accounts which are usually not shown more of query option than query criteria",
          "hierarchy": "Hledger Query",
          "module": "Hledger.Query",
          "name": "Empty",
          "package": "hledger-lib",
          "partial": "Empty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Query.html#v:Empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003enever match\n\u003c/p\u003e",
          "module": "Hledger.Query",
          "name": "None",
          "package": "hledger-lib",
          "signature": "None",
          "source": "src/Hledger-Query.html#Query",
          "type": "function"
        },
        "index": {
          "description": "never match",
          "hierarchy": "Hledger Query",
          "module": "Hledger.Query",
          "name": "None",
          "package": "hledger-lib",
          "partial": "None",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Query.html#v:None"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003enegate this match\n\u003c/p\u003e",
          "module": "Hledger.Query",
          "name": "Not",
          "package": "hledger-lib",
          "signature": "Not Query",
          "source": "src/Hledger-Query.html#Query",
          "type": "function"
        },
        "index": {
          "description": "negate this match",
          "hierarchy": "Hledger Query",
          "module": "Hledger.Query",
          "name": "Not",
          "package": "hledger-lib",
          "partial": "Not",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Query.html#v:Not"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ematch if any of these match\n\u003c/p\u003e",
          "module": "Hledger.Query",
          "name": "Or",
          "package": "hledger-lib",
          "signature": "Or [Query]",
          "source": "src/Hledger-Query.html#Query",
          "type": "function"
        },
        "index": {
          "description": "match if any of these match",
          "hierarchy": "Hledger Query",
          "module": "Hledger.Query",
          "name": "Or",
          "normalized": "Or[Query]",
          "package": "hledger-lib",
          "partial": "Or",
          "signature": "Or[Query]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Query.html#v:Or"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eas above but include sub-accounts in the account register\n | QueryOptCostBasis      -- ^ show amounts converted to cost where possible\n | QueryOptDate2  -- ^ show secondary dates instead of primary dates\n\u003c/p\u003e",
          "module": "Hledger.Query",
          "name": "QueryOptInAcct",
          "package": "hledger-lib",
          "signature": "QueryOptInAcct AccountName",
          "source": "src/Hledger-Query.html#QueryOpt",
          "type": "function"
        },
        "index": {
          "description": "as above but include sub-accounts in the account register QueryOptCostBasis show amounts converted to cost where possible QueryOptDate2 show secondary dates instead of primary dates",
          "hierarchy": "Hledger Query",
          "module": "Hledger.Query",
          "name": "QueryOptInAcct",
          "package": "hledger-lib",
          "partial": "Query Opt In Acct",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Query.html#v:QueryOptInAcct"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eshow an account register focussed on this account\n\u003c/p\u003e",
          "module": "Hledger.Query",
          "name": "QueryOptInAcctOnly",
          "package": "hledger-lib",
          "signature": "QueryOptInAcctOnly AccountName",
          "source": "src/Hledger-Query.html#QueryOpt",
          "type": "function"
        },
        "index": {
          "description": "show an account register focussed on this account",
          "hierarchy": "Hledger Query",
          "module": "Hledger.Query",
          "name": "QueryOptInAcctOnly",
          "package": "hledger-lib",
          "partial": "Query Opt In Acct Only",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Query.html#v:QueryOptInAcctOnly"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ematch if \u003ca\u003erealness\u003c/a\u003e (involves a real non-virtual account ?) has this value\n\u003c/p\u003e",
          "module": "Hledger.Query",
          "name": "Real",
          "package": "hledger-lib",
          "signature": "Real Bool",
          "source": "src/Hledger-Query.html#Query",
          "type": "function"
        },
        "index": {
          "description": "match if realness involves real non-virtual account has this value",
          "hierarchy": "Hledger Query",
          "module": "Hledger.Query",
          "name": "Real",
          "package": "hledger-lib",
          "partial": "Real",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Query.html#v:Real"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ematch if cleared status has this value\n\u003c/p\u003e",
          "module": "Hledger.Query",
          "name": "Status",
          "package": "hledger-lib",
          "signature": "Status Bool",
          "source": "src/Hledger-Query.html#Query",
          "type": "function"
        },
        "index": {
          "description": "match if cleared status has this value",
          "hierarchy": "Hledger Query",
          "module": "Hledger.Query",
          "name": "Status",
          "package": "hledger-lib",
          "partial": "Status",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Query.html#v:Status"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ematch if the entire commodity symbol is matched by this regexp\n\u003c/p\u003e",
          "module": "Hledger.Query",
          "name": "Sym",
          "package": "hledger-lib",
          "signature": "Sym String",
          "source": "src/Hledger-Query.html#Query",
          "type": "function"
        },
        "index": {
          "description": "match if the entire commodity symbol is matched by this regexp",
          "hierarchy": "Hledger Query",
          "module": "Hledger.Query",
          "name": "Sym",
          "package": "hledger-lib",
          "partial": "Sym",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Query.html#v:Sym"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ematch if a tag with this exact name, and with value\n matching the regexp if provided, exists\n\u003c/p\u003e",
          "module": "Hledger.Query",
          "name": "Tag",
          "package": "hledger-lib",
          "signature": "Tag String (Maybe String)",
          "source": "src/Hledger-Query.html#Query",
          "type": "function"
        },
        "index": {
          "description": "match if tag with this exact name and with value matching the regexp if provided exists",
          "hierarchy": "Hledger Query",
          "module": "Hledger.Query",
          "name": "Tag",
          "package": "hledger-lib",
          "partial": "Tag",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Query.html#v:Tag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemove query terms (or whole sub-expressions) not matching the given\n predicate from this query.  XXX Semantics not yet clear.\n\u003c/p\u003e",
          "module": "Hledger.Query",
          "name": "filterQuery",
          "package": "hledger-lib",
          "signature": "(Query -\u003e Bool) -\u003e Query -\u003e Query",
          "source": "src/Hledger-Query.html#filterQuery",
          "type": "function"
        },
        "index": {
          "description": "Remove query terms or whole sub-expressions not matching the given predicate from this query XXX Semantics not yet clear",
          "hierarchy": "Hledger Query",
          "module": "Hledger.Query",
          "name": "filterQuery",
          "normalized": "(Query-\u003eBool)-\u003eQuery-\u003eQuery",
          "package": "hledger-lib",
          "partial": "Query",
          "signature": "(Query-\u003eBool)-\u003eQuery-\u003eQuery",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Query.html#v:filterQuery"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe account we are currently focussed on, if any, and whether subaccounts are included.\n Just looks at the first query option.\n\u003c/p\u003e",
          "module": "Hledger.Query",
          "name": "inAccount",
          "package": "hledger-lib",
          "signature": "[QueryOpt] -\u003e Maybe (AccountName, Bool)",
          "source": "src/Hledger-Query.html#inAccount",
          "type": "function"
        },
        "index": {
          "description": "The account we are currently focussed on if any and whether subaccounts are included Just looks at the first query option",
          "hierarchy": "Hledger Query",
          "module": "Hledger.Query",
          "name": "inAccount",
          "normalized": "[QueryOpt]-\u003eMaybe(AccountName,Bool)",
          "package": "hledger-lib",
          "partial": "Account",
          "signature": "[QueryOpt]-\u003eMaybe(AccountName,Bool)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Query.html#v:inAccount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA query for the account(s) we are currently focussed on, if any.\n Just looks at the first query option.\n\u003c/p\u003e",
          "module": "Hledger.Query",
          "name": "inAccountQuery",
          "package": "hledger-lib",
          "signature": "[QueryOpt] -\u003e Maybe Query",
          "source": "src/Hledger-Query.html#inAccountQuery",
          "type": "function"
        },
        "index": {
          "description": "query for the account we are currently focussed on if any Just looks at the first query option",
          "hierarchy": "Hledger Query",
          "module": "Hledger.Query",
          "name": "inAccountQuery",
          "normalized": "[QueryOpt]-\u003eMaybe Query",
          "package": "hledger-lib",
          "partial": "Account Query",
          "signature": "[QueryOpt]-\u003eMaybe Query",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Query.html#v:inAccountQuery"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDoes the match expression match this account ?\n A matching in: clause is also considered a match.\n\u003c/p\u003e",
          "module": "Hledger.Query",
          "name": "matchesAccount",
          "package": "hledger-lib",
          "signature": "Query -\u003e AccountName -\u003e Bool",
          "source": "src/Hledger-Query.html#matchesAccount",
          "type": "function"
        },
        "index": {
          "description": "Does the match expression match this account matching in clause is also considered match",
          "hierarchy": "Hledger Query",
          "module": "Hledger.Query",
          "name": "matchesAccount",
          "normalized": "Query-\u003eAccountName-\u003eBool",
          "package": "hledger-lib",
          "partial": "Account",
          "signature": "Query-\u003eAccountName-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Query.html#v:matchesAccount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDoes the match expression match this posting ?\n\u003c/p\u003e",
          "module": "Hledger.Query",
          "name": "matchesPosting",
          "package": "hledger-lib",
          "signature": "Query -\u003e Posting -\u003e Bool",
          "source": "src/Hledger-Query.html#matchesPosting",
          "type": "function"
        },
        "index": {
          "description": "Does the match expression match this posting",
          "hierarchy": "Hledger Query",
          "module": "Hledger.Query",
          "name": "matchesPosting",
          "normalized": "Query-\u003ePosting-\u003eBool",
          "package": "hledger-lib",
          "partial": "Posting",
          "signature": "Query-\u003ePosting-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Query.html#v:matchesPosting"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDoes the match expression match this transaction ?\n\u003c/p\u003e",
          "module": "Hledger.Query",
          "name": "matchesTransaction",
          "package": "hledger-lib",
          "signature": "Query -\u003e Transaction -\u003e Bool",
          "source": "src/Hledger-Query.html#matchesTransaction",
          "type": "function"
        },
        "index": {
          "description": "Does the match expression match this transaction",
          "hierarchy": "Hledger Query",
          "module": "Hledger.Query",
          "name": "matchesTransaction",
          "normalized": "Query-\u003eTransaction-\u003eBool",
          "package": "hledger-lib",
          "partial": "Transaction",
          "signature": "Query-\u003eTransaction-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Query.html#v:matchesTransaction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a query expression containing zero or more space-separated\n terms to a query and zero or more query options. A query term is either:\n\u003c/p\u003e\u003col\u003e\u003cli\u003e a search pattern, which matches on one or more fields, eg:\n\u003c/li\u003e\u003c/ol\u003e\u003cp\u003eacct:REGEXP     - match the account name with a regular expression\n      desc:REGEXP     - match the transaction description\n      date:PERIODEXP  - match the date with a period expression\n\u003c/p\u003e\u003cp\u003eThe prefix indicates the field to match, or if there is no prefix\n    account name is assumed.\n\u003c/p\u003e\u003col\u003e\u003cli\u003e a query option, which modifies the reporting behaviour in some\n    way. There is currently one of these, which may appear only once:\n\u003c/li\u003e\u003c/ol\u003e\u003cp\u003einacct:FULLACCTNAME\n\u003c/p\u003e\u003cp\u003eThe usual shell quoting rules are assumed. When a pattern contains\n whitespace, it (or the whole term including prefix) should be enclosed\n in single or double quotes.\n\u003c/p\u003e\u003cp\u003ePeriod expressions may contain relative dates, so a reference date is\n required to fully parse these.\n\u003c/p\u003e\u003cp\u003eMultiple terms are combined as follows:\n 1. multiple account patterns are OR'd together\n 2. multiple description patterns are OR'd together\n 3. then all terms are AND'd together\n\u003c/p\u003e",
          "module": "Hledger.Query",
          "name": "parseQuery",
          "package": "hledger-lib",
          "signature": "Day -\u003e String -\u003e (Query, [QueryOpt])",
          "source": "src/Hledger-Query.html#parseQuery",
          "type": "function"
        },
        "index": {
          "description": "Convert query expression containing zero or more space-separated terms to query and zero or more query options query term is either search pattern which matches on one or more fields eg acct REGEXP match the account name with regular expression desc REGEXP match the transaction description date PERIODEXP match the date with period expression The prefix indicates the field to match or if there is no prefix account name is assumed query option which modifies the reporting behaviour in some way There is currently one of these which may appear only once inacct FULLACCTNAME The usual shell quoting rules are assumed When pattern contains whitespace it or the whole term including prefix should be enclosed in single or double quotes Period expressions may contain relative dates so reference date is required to fully parse these Multiple terms are combined as follows multiple account patterns are OR together multiple description patterns are OR together then all terms are AND together",
          "hierarchy": "Hledger Query",
          "module": "Hledger.Query",
          "name": "parseQuery",
          "normalized": "Day-\u003eString-\u003e(Query,[QueryOpt])",
          "package": "hledger-lib",
          "partial": "Query",
          "signature": "Day-\u003eString-\u003e(Query,[QueryOpt])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Query.html#v:parseQuery"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhat date span (or secondary date span) does this query specify ?\n For OR expressions, use the widest possible span. NOT is ignored.\n\u003c/p\u003e",
          "module": "Hledger.Query",
          "name": "queryDateSpan",
          "package": "hledger-lib",
          "signature": "Bool -\u003e Query -\u003e DateSpan",
          "source": "src/Hledger-Query.html#queryDateSpan",
          "type": "function"
        },
        "index": {
          "description": "What date span or secondary date span does this query specify For OR expressions use the widest possible span NOT is ignored",
          "hierarchy": "Hledger Query",
          "module": "Hledger.Query",
          "name": "queryDateSpan",
          "normalized": "Bool-\u003eQuery-\u003eDateSpan",
          "package": "hledger-lib",
          "partial": "Date Span",
          "signature": "Bool-\u003eQuery-\u003eDateSpan",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Query.html#v:queryDateSpan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe depth limit this query specifies, or a large number if none.\n\u003c/p\u003e",
          "module": "Hledger.Query",
          "name": "queryDepth",
          "package": "hledger-lib",
          "signature": "Query -\u003e Int",
          "source": "src/Hledger-Query.html#queryDepth",
          "type": "function"
        },
        "index": {
          "description": "The depth limit this query specifies or large number if none",
          "hierarchy": "Hledger Query",
          "module": "Hledger.Query",
          "name": "queryDepth",
          "normalized": "Query-\u003eInt",
          "package": "hledger-lib",
          "partial": "Depth",
          "signature": "Query-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Query.html#v:queryDepth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe empty (zero amount) status specified by this query, defaulting to false.\n\u003c/p\u003e",
          "module": "Hledger.Query",
          "name": "queryEmpty",
          "package": "hledger-lib",
          "signature": "Query -\u003e Bool",
          "source": "src/Hledger-Query.html#queryEmpty",
          "type": "function"
        },
        "index": {
          "description": "The empty zero amount status specified by this query defaulting to false",
          "hierarchy": "Hledger Query",
          "module": "Hledger.Query",
          "name": "queryEmpty",
          "normalized": "Query-\u003eBool",
          "package": "hledger-lib",
          "partial": "Empty",
          "signature": "Query-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Query.html#v:queryEmpty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Query",
          "name": "queryIsDate",
          "package": "hledger-lib",
          "signature": "Query -\u003e Bool",
          "source": "src/Hledger-Query.html#queryIsDate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Query",
          "module": "Hledger.Query",
          "name": "queryIsDate",
          "normalized": "Query-\u003eBool",
          "package": "hledger-lib",
          "partial": "Is Date",
          "signature": "Query-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Query.html#v:queryIsDate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Query",
          "name": "queryIsDepth",
          "package": "hledger-lib",
          "signature": "Query -\u003e Bool",
          "source": "src/Hledger-Query.html#queryIsDepth",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Query",
          "module": "Hledger.Query",
          "name": "queryIsDepth",
          "normalized": "Query-\u003eBool",
          "package": "hledger-lib",
          "partial": "Is Depth",
          "signature": "Query-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Query.html#v:queryIsDepth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDoes this query match everything ?\n\u003c/p\u003e",
          "module": "Hledger.Query",
          "name": "queryIsNull",
          "package": "hledger-lib",
          "signature": "Query -\u003e Bool",
          "source": "src/Hledger-Query.html#queryIsNull",
          "type": "function"
        },
        "index": {
          "description": "Does this query match everything",
          "hierarchy": "Hledger Query",
          "module": "Hledger.Query",
          "name": "queryIsNull",
          "normalized": "Query-\u003eBool",
          "package": "hledger-lib",
          "partial": "Is Null",
          "signature": "Query-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Query.html#v:queryIsNull"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDoes this query specify a start date and nothing else (that would\n filter postings prior to the date) ?\n When the flag is true, look for a starting secondary date instead.\n\u003c/p\u003e",
          "module": "Hledger.Query",
          "name": "queryIsStartDateOnly",
          "package": "hledger-lib",
          "signature": "Bool -\u003e Query -\u003e Bool",
          "source": "src/Hledger-Query.html#queryIsStartDateOnly",
          "type": "function"
        },
        "index": {
          "description": "Does this query specify start date and nothing else that would filter postings prior to the date When the flag is true look for starting secondary date instead",
          "hierarchy": "Hledger Query",
          "module": "Hledger.Query",
          "name": "queryIsStartDateOnly",
          "normalized": "Bool-\u003eQuery-\u003eBool",
          "package": "hledger-lib",
          "partial": "Is Start Date Only",
          "signature": "Bool-\u003eQuery-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Query.html#v:queryIsStartDateOnly"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhat start date (or secondary date) does this query specify, if any ?\n For OR expressions, use the earliest of the dates. NOT is ignored.\n\u003c/p\u003e",
          "module": "Hledger.Query",
          "name": "queryStartDate",
          "package": "hledger-lib",
          "signature": "Bool -\u003e Query -\u003e Maybe Day",
          "source": "src/Hledger-Query.html#queryStartDate",
          "type": "function"
        },
        "index": {
          "description": "What start date or secondary date does this query specify if any For OR expressions use the earliest of the dates NOT is ignored",
          "hierarchy": "Hledger Query",
          "module": "Hledger.Query",
          "name": "queryStartDate",
          "normalized": "Bool-\u003eQuery-\u003eMaybe Day",
          "package": "hledger-lib",
          "partial": "Start Date",
          "signature": "Bool-\u003eQuery-\u003eMaybe Day",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Query.html#v:queryStartDate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Query",
          "name": "simplifyQuery",
          "package": "hledger-lib",
          "signature": "Query -\u003e Query",
          "source": "src/Hledger-Query.html#simplifyQuery",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Query",
          "module": "Hledger.Query",
          "name": "simplifyQuery",
          "normalized": "Query-\u003eQuery",
          "package": "hledger-lib",
          "partial": "Query",
          "signature": "Query-\u003eQuery",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Query.html#v:simplifyQuery"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Query",
          "name": "tests_Hledger_Query",
          "package": "hledger-lib",
          "signature": "Test",
          "source": "src/Hledger-Query.html#tests_Hledger_Query",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Query",
          "module": "Hledger.Query",
          "name": "tests_Hledger_Query",
          "package": "hledger-lib",
          "partial": "Hledger Query",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Query.html#v:tests_Hledger_Query"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA reader for CSV data, using an extra rules file to help interpret the data.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Hledger.Read.CsvReader",
          "name": "CsvReader",
          "package": "hledger-lib",
          "source": "src/Hledger-Read-CsvReader.html",
          "type": "module"
        },
        "index": {
          "description": "reader for CSV data using an extra rules file to help interpret the data",
          "hierarchy": "Hledger Read CsvReader",
          "module": "Hledger.Read.CsvReader",
          "name": "CsvReader",
          "package": "hledger-lib",
          "partial": "Csv Reader",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Read-CsvReader.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Read.CsvReader",
          "name": "CsvRecord",
          "package": "hledger-lib",
          "source": "src/Hledger-Read-CsvReader.html#CsvRecord",
          "type": "type"
        },
        "index": {
          "hierarchy": "Hledger Read CsvReader",
          "module": "Hledger.Read.CsvReader",
          "name": "CsvRecord",
          "package": "hledger-lib",
          "partial": "Csv Record",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Read-CsvReader.html#t:CsvRecord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Read.CsvReader",
          "name": "parseRulesFile",
          "package": "hledger-lib",
          "signature": "FilePath -\u003e IO (Either ParseError CsvRules)",
          "source": "src/Hledger-Read-CsvReader.html#parseRulesFile",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Read CsvReader",
          "module": "Hledger.Read.CsvReader",
          "name": "parseRulesFile",
          "normalized": "FilePath-\u003eIO(Either ParseError CsvRules)",
          "package": "hledger-lib",
          "partial": "Rules File",
          "signature": "FilePath-\u003eIO(Either ParseError CsvRules)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Read-CsvReader.html#v:parseRulesFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Read.CsvReader",
          "name": "reader",
          "package": "hledger-lib",
          "signature": "Reader",
          "source": "src/Hledger-Read-CsvReader.html#reader",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Read CsvReader",
          "module": "Hledger.Read.CsvReader",
          "name": "reader",
          "package": "hledger-lib",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Read-CsvReader.html#v:reader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Read.CsvReader",
          "name": "rulesFileFor",
          "package": "hledger-lib",
          "signature": "FilePath -\u003e FilePath",
          "source": "src/Hledger-Read-CsvReader.html#rulesFileFor",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Read CsvReader",
          "module": "Hledger.Read.CsvReader",
          "name": "rulesFileFor",
          "normalized": "FilePath-\u003eFilePath",
          "package": "hledger-lib",
          "partial": "File For",
          "signature": "FilePath-\u003eFilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Read-CsvReader.html#v:rulesFileFor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Read.CsvReader",
          "name": "tests_Hledger_Read_CsvReader",
          "package": "hledger-lib",
          "signature": "Test",
          "source": "src/Hledger-Read-CsvReader.html#tests_Hledger_Read_CsvReader",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Read CsvReader",
          "module": "Hledger.Read.CsvReader",
          "name": "tests_Hledger_Read_CsvReader",
          "package": "hledger-lib",
          "partial": "Hledger Read Csv Reader",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Read-CsvReader.html#v:tests_Hledger_Read_CsvReader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Read.CsvReader",
          "name": "transactionFromCsvRecord",
          "package": "hledger-lib",
          "signature": "CsvRules -\u003e CsvRecord -\u003e Transaction",
          "source": "src/Hledger-Read-CsvReader.html#transactionFromCsvRecord",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Read CsvReader",
          "module": "Hledger.Read.CsvReader",
          "name": "transactionFromCsvRecord",
          "normalized": "CsvRules-\u003eCsvRecord-\u003eTransaction",
          "package": "hledger-lib",
          "partial": "From Csv Record",
          "signature": "CsvRules-\u003eCsvRecord-\u003eTransaction",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Read-CsvReader.html#v:transactionFromCsvRecord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA reader for hledger's journal file format\n(\u003ca\u003ehttp://hledger.org/MANUAL.html#the-journal-file\u003c/a\u003e).  hledger's journal\nformat is a compatible subset of c++ ledger's\n(\u003ca\u003ehttp://ledger-cli.org/3.0/doc/ledger3.html#Journal-Format\u003c/a\u003e), so this\nreader should handle many ledger files as well. Example:\n\u003c/p\u003e\u003cpre\u003e\n2012/3/24 gift\n    expenses:gifts  $10\n    assets:cash\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Hledger.Read.JournalReader",
          "name": "JournalReader",
          "package": "hledger-lib",
          "source": "src/Hledger-Read-JournalReader.html",
          "type": "module"
        },
        "index": {
          "description": "reader for hledger journal file format http hledger.org MANUAL.html the-journal-file hledger journal format is compatible subset of ledger http ledger-cli.org doc ledger3.html Journal-Format so this reader should handle many ledger files as well Example gift expenses gifts assets cash",
          "hierarchy": "Hledger Read JournalReader",
          "module": "Hledger.Read.JournalReader",
          "name": "JournalReader",
          "package": "hledger-lib",
          "partial": "Journal Reader",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Read-JournalReader.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse an account name. Account names may have single spaces inside\n them, and are terminated by two or more spaces. They should have one or\n more components of at least one character, separated by the account\n separator char.\n\u003c/p\u003e",
          "module": "[\"Hledger.Read.JournalReader\",\"Hledger.Read\"]",
          "name": "accountname",
          "package": "hledger-lib",
          "signature": "GenParser Char st AccountName",
          "source": "src/Hledger-Read-JournalReader.html#accountname",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Read-JournalReader.html#v:accountname\",\"http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Read.html#v:accountname\"]"
        },
        "index": {
          "description": "Parse an account name Account names may have single spaces inside them and are terminated by two or more spaces They should have one or more components of at least one character separated by the account separator char",
          "hierarchy": "Hledger Read JournalReader",
          "module": "Hledger.Read.JournalReader",
          "name": "accountname",
          "package": "hledger-lib",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Read-JournalReader.html#v:accountname"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a single-commodity amount, with optional symbol on the left or\n right, optional unit or total price, and optional (ignored)\n ledger-style balance assertion or fixed lot price declaration.\n\u003c/p\u003e",
          "module": "[\"Hledger.Read.JournalReader\",\"Hledger.Read\"]",
          "name": "amountp",
          "package": "hledger-lib",
          "signature": "GenParser Char JournalContext Amount",
          "source": "src/Hledger-Read-JournalReader.html#amountp",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Read-JournalReader.html#v:amountp\",\"http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Read.html#v:amountp\"]"
        },
        "index": {
          "description": "Parse single-commodity amount with optional symbol on the left or right optional unit or total price and optional ignored ledger-style balance assertion or fixed lot price declaration",
          "hierarchy": "Hledger Read JournalReader",
          "module": "Hledger.Read.JournalReader",
          "name": "amountp",
          "package": "hledger-lib",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Read-JournalReader.html#v:amountp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse an amount from a string, or get an error.\n\u003c/p\u003e",
          "module": "[\"Hledger.Read.JournalReader\",\"Hledger.Read\"]",
          "name": "amountp'",
          "package": "hledger-lib",
          "signature": "String -\u003e Amount",
          "source": "src/Hledger-Read-JournalReader.html#amountp%27",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Read-JournalReader.html#v:amountp-39-\",\"http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Read.html#v:amountp-39-\"]"
        },
        "index": {
          "description": "Parse an amount from string or get an error",
          "hierarchy": "Hledger Read JournalReader",
          "module": "Hledger.Read.JournalReader",
          "name": "amountp'",
          "normalized": "String-\u003eAmount",
          "package": "hledger-lib",
          "signature": "String-\u003eAmount",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Read-JournalReader.html#v:amountp-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Hledger.Read.JournalReader\",\"Hledger.Read\"]",
          "name": "code",
          "package": "hledger-lib",
          "signature": "GenParser Char JournalContext String",
          "source": "src/Hledger-Read-JournalReader.html#code",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Read-JournalReader.html#v:code\",\"http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Read.html#v:code\"]"
        },
        "index": {
          "hierarchy": "Hledger Read JournalReader",
          "module": "Hledger.Read.JournalReader",
          "name": "code",
          "package": "hledger-lib",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Read-JournalReader.html#v:code"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a date and time in YYYY\u003cem\u003eMM\u003c/em\u003eDD HH:MM[:SS][+-ZZZZ] format.  Any\n timezone will be ignored; the time is treated as local time.  Fewer\n digits are allowed, except in the timezone. The year may be omitted if\n a default year has already been set.\n\u003c/p\u003e",
          "module": "Hledger.Read.JournalReader",
          "name": "datetime",
          "package": "hledger-lib",
          "signature": "GenParser Char JournalContext LocalTime",
          "source": "src/Hledger-Read-JournalReader.html#datetime",
          "type": "function"
        },
        "index": {
          "description": "Parse date and time in YYYY MM DD HH MM SS ZZZZ format Any timezone will be ignored the time is treated as local time Fewer digits are allowed except in the timezone The year may be omitted if default year has already been set",
          "hierarchy": "Hledger Read JournalReader",
          "module": "Hledger.Read.JournalReader",
          "name": "datetime",
          "package": "hledger-lib",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Read-JournalReader.html#v:datetime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Read.JournalReader",
          "name": "defaultyeardirective",
          "package": "hledger-lib",
          "signature": "GenParser Char JournalContext JournalUpdate",
          "source": "src/Hledger-Read-JournalReader.html#defaultyeardirective",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Read JournalReader",
          "module": "Hledger.Read.JournalReader",
          "name": "defaultyeardirective",
          "package": "hledger-lib",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Read-JournalReader.html#v:defaultyeardirective"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Read.JournalReader",
          "name": "directive",
          "package": "hledger-lib",
          "signature": "GenParser Char JournalContext JournalUpdate",
          "source": "src/Hledger-Read-JournalReader.html#directive",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Read JournalReader",
          "module": "Hledger.Read.JournalReader",
          "name": "directive",
          "package": "hledger-lib",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Read-JournalReader.html#v:directive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Read.JournalReader",
          "name": "emptyline",
          "package": "hledger-lib",
          "signature": "GenParser Char JournalContext ()",
          "source": "src/Hledger-Read-JournalReader.html#emptyline",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Read JournalReader",
          "module": "Hledger.Read.JournalReader",
          "name": "emptyline",
          "normalized": "GenParser Char JournalContext()",
          "package": "hledger-lib",
          "signature": "GenParser Char JournalContext()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Read-JournalReader.html#v:emptyline"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Read.JournalReader",
          "name": "getParentAccount",
          "package": "hledger-lib",
          "signature": "GenParser tok JournalContext String",
          "source": "src/Hledger-Read-JournalReader.html#getParentAccount",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Read JournalReader",
          "module": "Hledger.Read.JournalReader",
          "name": "getParentAccount",
          "package": "hledger-lib",
          "partial": "Parent Account",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Read-JournalReader.html#v:getParentAccount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Read.JournalReader",
          "name": "historicalpricedirective",
          "package": "hledger-lib",
          "signature": "GenParser Char JournalContext HistoricalPrice",
          "source": "src/Hledger-Read-JournalReader.html#historicalpricedirective",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Read JournalReader",
          "module": "Hledger.Read.JournalReader",
          "name": "historicalpricedirective",
          "package": "hledger-lib",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Read-JournalReader.html#v:historicalpricedirective"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTop-level journal parser. Returns a single composite, I/O performing,\n error-raising \u003ca\u003eJournalUpdate\u003c/a\u003e (and final \u003ca\u003eJournalContext\u003c/a\u003e) which can be\n applied to an empty journal to get the final result.\n\u003c/p\u003e",
          "module": "Hledger.Read.JournalReader",
          "name": "journal",
          "package": "hledger-lib",
          "signature": "GenParser Char JournalContext (JournalUpdate, JournalContext)",
          "source": "src/Hledger-Read-JournalReader.html#journal",
          "type": "function"
        },
        "index": {
          "description": "Top-level journal parser Returns single composite performing error-raising JournalUpdate and final JournalContext which can be applied to an empty journal to get the final result",
          "hierarchy": "Hledger Read JournalReader",
          "module": "Hledger.Read.JournalReader",
          "name": "journal",
          "normalized": "GenParser Char JournalContext(JournalUpdate,JournalContext)",
          "package": "hledger-lib",
          "signature": "GenParser Char JournalContext(JournalUpdate,JournalContext)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Read-JournalReader.html#v:journal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a mixed amount from a string, or get an error.\n\u003c/p\u003e",
          "module": "[\"Hledger.Read.JournalReader\",\"Hledger.Read\"]",
          "name": "mamountp'",
          "package": "hledger-lib",
          "signature": "String -\u003e MixedAmount",
          "source": "src/Hledger-Read-JournalReader.html#mamountp%27",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Read-JournalReader.html#v:mamountp-39-\",\"http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Read.html#v:mamountp-39-\"]"
        },
        "index": {
          "description": "Parse mixed amount from string or get an error",
          "hierarchy": "Hledger Read JournalReader",
          "module": "Hledger.Read.JournalReader",
          "name": "mamountp'",
          "normalized": "String-\u003eMixedAmount",
          "package": "hledger-lib",
          "signature": "String-\u003eMixedAmount",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Read-JournalReader.html#v:mamountp-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a JournalUpdate-generating parsec parser, file path and data string,\n parse and post-process a Journal so that it's ready to use, or give an error.\n\u003c/p\u003e",
          "module": "Hledger.Read.JournalReader",
          "name": "parseJournalWith",
          "package": "hledger-lib",
          "signature": "GenParser Char JournalContext (JournalUpdate, JournalContext) -\u003e FilePath -\u003e String -\u003e ErrorT String IO Journal",
          "source": "src/Hledger-Read-JournalReader.html#parseJournalWith",
          "type": "function"
        },
        "index": {
          "description": "Given JournalUpdate-generating parsec parser file path and data string parse and post-process Journal so that it ready to use or give an error",
          "hierarchy": "Hledger Read JournalReader",
          "module": "Hledger.Read.JournalReader",
          "name": "parseJournalWith",
          "normalized": "GenParser Char JournalContext(JournalUpdate,JournalContext)-\u003eFilePath-\u003eString-\u003eErrorT String IO Journal",
          "package": "hledger-lib",
          "partial": "Journal With",
          "signature": "GenParser Char JournalContext(JournalUpdate,JournalContext)-\u003eFilePath-\u003eString-\u003eErrorT String IO Journal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Read-JournalReader.html#v:parseJournalWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Read.JournalReader",
          "name": "reader",
          "package": "hledger-lib",
          "signature": "Reader",
          "source": "src/Hledger-Read-JournalReader.html#reader",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Read JournalReader",
          "module": "Hledger.Read.JournalReader",
          "name": "reader",
          "package": "hledger-lib",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Read-JournalReader.html#v:reader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA reader for the timelog file format generated by timeclock.el\n(\u003ca\u003ehttp://www.emacswiki.org/emacs/TimeClock\u003c/a\u003e). Example:\n\u003c/p\u003e\u003cpre\u003e\ni 2007/03/10 12:26:00 hledger\no 2007/03/10 17:26:02\n\u003c/pre\u003e\u003cp\u003eFrom timeclock.el 2.6:\n\u003c/p\u003e\u003cpre\u003e\nA timelog contains data in the form of a single entry per line.\nEach entry has the form:\n\nCODE YYYY\u003cem\u003eMM\u003c/em\u003eDD HH:MM:SS [COMMENT]\n\nCODE is one of: b, h, i, o or O.  COMMENT is optional when the code is\ni, o or O.  The meanings of the codes are:\n\nb  Set the current time balance, or \"time debt\".  Useful when\n     archiving old log data, when a debt must be carried forward.\n     The COMMENT here is the number of seconds of debt.\n\nh  Set the required working time for the given day.  This must\n     be the first entry for that day.  The COMMENT in this case is\n     the number of hours in this workday.  Floating point amounts\n     are allowed.\n\ni  Clock in.  The COMMENT in this case should be the name of the\n     project worked on.\n\no  Clock out.  COMMENT is unnecessary, but can be used to provide\n     a description of how the period went, for example.\n\nO  Final clock out.  Whatever project was being worked on, it is\n     now finished.  Useful for creating summary reports.\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Hledger.Read.TimelogReader",
          "name": "TimelogReader",
          "package": "hledger-lib",
          "source": "src/Hledger-Read-TimelogReader.html",
          "type": "module"
        },
        "index": {
          "description": "reader for the timelog file format generated by timeclock.el http www.emacswiki.org emacs TimeClock Example hledger From timeclock.el timelog contains data in the form of single entry per line Each entry has the form CODE YYYY MM DD HH MM SS COMMENT CODE is one of or COMMENT is optional when the code is or The meanings of the codes are Set the current time balance or time debt Useful when archiving old log data when debt must be carried forward The COMMENT here is the number of seconds of debt Set the required working time for the given day This must be the first entry for that day The COMMENT in this case is the number of hours in this workday Floating point amounts are allowed Clock in The COMMENT in this case should be the name of the project worked on Clock out COMMENT is unnecessary but can be used to provide description of how the period went for example Final clock out Whatever project was being worked on it is now finished Useful for creating summary reports",
          "hierarchy": "Hledger Read TimelogReader",
          "module": "Hledger.Read.TimelogReader",
          "name": "TimelogReader",
          "package": "hledger-lib",
          "partial": "Timelog Reader",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Read-TimelogReader.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Read.TimelogReader",
          "name": "reader",
          "package": "hledger-lib",
          "signature": "Reader",
          "source": "src/Hledger-Read-TimelogReader.html#reader",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Read TimelogReader",
          "module": "Hledger.Read.TimelogReader",
          "name": "reader",
          "package": "hledger-lib",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Read-TimelogReader.html#v:reader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Read.TimelogReader",
          "name": "tests_Hledger_Read_TimelogReader",
          "package": "hledger-lib",
          "signature": "Test",
          "source": "src/Hledger-Read-TimelogReader.html#tests_Hledger_Read_TimelogReader",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Read TimelogReader",
          "module": "Hledger.Read.TimelogReader",
          "name": "tests_Hledger_Read_TimelogReader",
          "package": "hledger-lib",
          "partial": "Hledger Read Timelog Reader",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Read-TimelogReader.html#v:tests_Hledger_Read_TimelogReader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis is the entry point to hledger's reading system, which can read\nJournals from various data formats. Use this module if you want to parse\njournal data or read journal files. Generally it should not be necessary\nto import modules below this one.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Hledger.Read",
          "name": "Read",
          "package": "hledger-lib",
          "source": "src/Hledger-Read.html",
          "type": "module"
        },
        "index": {
          "description": "This is the entry point to hledger reading system which can read Journals from various data formats Use this module if you want to parse journal data or read journal files Generally it should not be necessary to import modules below this one",
          "hierarchy": "Hledger Read",
          "module": "Hledger.Read",
          "name": "Read",
          "package": "hledger-lib",
          "partial": "Read",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Read.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead the default journal file specified by the environment, or raise an error.\n\u003c/p\u003e",
          "module": "Hledger.Read",
          "name": "defaultJournal",
          "package": "hledger-lib",
          "signature": "IO Journal",
          "source": "src/Hledger-Read.html#defaultJournal",
          "type": "function"
        },
        "index": {
          "description": "Read the default journal file specified by the environment or raise an error",
          "hierarchy": "Hledger Read",
          "module": "Hledger.Read",
          "name": "defaultJournal",
          "package": "hledger-lib",
          "partial": "Journal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Read.html#v:defaultJournal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAll the data formats we can read.\n formats = map rFormat readers\n\u003c/p\u003e\u003cp\u003eGet the default journal file path specified by the environment.\n Like ledger, we look first for the LEDGER_FILE environment\n variable, and if that does not exist, for the legacy LEDGER\n environment variable. If neither is set, or the value is blank,\n return the hard-coded default, which is \u003ccode\u003e.hledger.journal\u003c/code\u003e in the\n users's home directory (or in the current directory, if we cannot\n determine a home directory).\n\u003c/p\u003e",
          "module": "Hledger.Read",
          "name": "defaultJournalPath",
          "package": "hledger-lib",
          "signature": "IO String",
          "source": "src/Hledger-Read.html#defaultJournalPath",
          "type": "function"
        },
        "index": {
          "description": "All the data formats we can read formats map rFormat readers Get the default journal file path specified by the environment Like ledger we look first for the LEDGER FILE environment variable and if that does not exist for the legacy LEDGER environment variable If neither is set or the value is blank return the hard-coded default which is hledger.journal in the users home directory or in the current directory if we cannot determine home directory",
          "hierarchy": "Hledger Read",
          "module": "Hledger.Read",
          "name": "defaultJournalPath",
          "package": "hledger-lib",
          "partial": "Journal Path",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Read.html#v:defaultJournalPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEnsure there is a journal file at the given path, creating an empty one if needed.\n\u003c/p\u003e",
          "module": "Hledger.Read",
          "name": "ensureJournalFileExists",
          "package": "hledger-lib",
          "signature": "FilePath -\u003e IO ()",
          "source": "src/Hledger-Read.html#ensureJournalFileExists",
          "type": "function"
        },
        "index": {
          "description": "Ensure there is journal file at the given path creating an empty one if needed",
          "hierarchy": "Hledger Read",
          "module": "Hledger.Read",
          "name": "ensureJournalFileExists",
          "normalized": "FilePath-\u003eIO()",
          "package": "hledger-lib",
          "partial": "Journal File Exists",
          "signature": "FilePath-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Read.html#v:ensureJournalFileExists"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead a journal from this string, trying whatever readers seem appropriate:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e if a format is specified, try that reader only\n\u003c/li\u003e\u003cli\u003e or if one or more readers recognises the file path and data, try those\n\u003c/li\u003e\u003cli\u003e otherwise, try them all.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eA CSV conversion rules file may also be specified for use by the CSV reader.\n\u003c/p\u003e",
          "module": "Hledger.Read",
          "name": "readJournal",
          "package": "hledger-lib",
          "signature": "Maybe Format -\u003e Maybe FilePath -\u003e Maybe FilePath -\u003e String -\u003e IO (Either String Journal)",
          "source": "src/Hledger-Read.html#readJournal",
          "type": "function"
        },
        "index": {
          "description": "Read journal from this string trying whatever readers seem appropriate if format is specified try that reader only or if one or more readers recognises the file path and data try those otherwise try them all CSV conversion rules file may also be specified for use by the CSV reader",
          "hierarchy": "Hledger Read",
          "module": "Hledger.Read",
          "name": "readJournal",
          "normalized": "Maybe Format-\u003eMaybe FilePath-\u003eMaybe FilePath-\u003eString-\u003eIO(Either String Journal)",
          "package": "hledger-lib",
          "partial": "Journal",
          "signature": "Maybe Format-\u003eMaybe FilePath-\u003eMaybe FilePath-\u003eString-\u003eIO(Either String Journal)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Read.html#v:readJournal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead a journal from the given string, trying all known formats, or simply throw an error.\n\u003c/p\u003e",
          "module": "Hledger.Read",
          "name": "readJournal'",
          "package": "hledger-lib",
          "signature": "String -\u003e IO Journal",
          "source": "src/Hledger-Read.html#readJournal%27",
          "type": "function"
        },
        "index": {
          "description": "Read journal from the given string trying all known formats or simply throw an error",
          "hierarchy": "Hledger Read",
          "module": "Hledger.Read",
          "name": "readJournal'",
          "normalized": "String-\u003eIO Journal",
          "package": "hledger-lib",
          "partial": "Journal'",
          "signature": "String-\u003eIO Journal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Read.html#v:readJournal-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead a Journal from this file (or stdin if the filename is -) or give\n an error message, using the specified data format or trying all known\n formats. A CSV conversion rules file may be specified for better\n conversion of that format.\n\u003c/p\u003e",
          "module": "Hledger.Read",
          "name": "readJournalFile",
          "package": "hledger-lib",
          "signature": "Maybe Format -\u003e Maybe FilePath -\u003e FilePath -\u003e IO (Either String Journal)",
          "source": "src/Hledger-Read.html#readJournalFile",
          "type": "function"
        },
        "index": {
          "description": "Read Journal from this file or stdin if the filename is or give an error message using the specified data format or trying all known formats CSV conversion rules file may be specified for better conversion of that format",
          "hierarchy": "Hledger Read",
          "module": "Hledger.Read",
          "name": "readJournalFile",
          "normalized": "Maybe Format-\u003eMaybe FilePath-\u003eFilePath-\u003eIO(Either String Journal)",
          "package": "hledger-lib",
          "partial": "Journal File",
          "signature": "Maybe Format-\u003eMaybe FilePath-\u003eFilePath-\u003eIO(Either String Journal)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Read.html#v:readJournalFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf the specified journal file does not exist, give a helpful error and quit.\n\u003c/p\u003e",
          "module": "Hledger.Read",
          "name": "requireJournalFileExists",
          "package": "hledger-lib",
          "signature": "FilePath -\u003e IO ()",
          "source": "src/Hledger-Read.html#requireJournalFileExists",
          "type": "function"
        },
        "index": {
          "description": "If the specified journal file does not exist give helpful error and quit",
          "hierarchy": "Hledger Read",
          "module": "Hledger.Read",
          "name": "requireJournalFileExists",
          "normalized": "FilePath-\u003eIO()",
          "package": "hledger-lib",
          "partial": "Journal File Exists",
          "signature": "FilePath-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Read.html#v:requireJournalFileExists"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Read",
          "name": "samplejournal",
          "package": "hledger-lib",
          "signature": "IO Journal",
          "source": "src/Hledger-Read.html#samplejournal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Read",
          "module": "Hledger.Read",
          "name": "samplejournal",
          "package": "hledger-lib",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Read.html#v:samplejournal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Read",
          "name": "tests_Hledger_Read",
          "package": "hledger-lib",
          "signature": "Test",
          "source": "src/Hledger-Read.html#tests_Hledger_Read",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Read",
          "module": "Hledger.Read",
          "name": "tests_Hledger_Read",
          "package": "hledger-lib",
          "partial": "Hledger Read",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Read.html#v:tests_Hledger_Read"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eGenerate several common kinds of report from a journal, as \"*Report\" -\nsimple intermediate data structures intended to be easily rendered as\ntext, html, json, csv etc. by hledger commands, hamlet templates,\njavascript, or whatever.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Hledger.Reports",
          "name": "Reports",
          "package": "hledger-lib",
          "source": "src/Hledger-Reports.html",
          "type": "module"
        },
        "index": {
          "description": "Generate several common kinds of report from journal as Report simple intermediate data structures intended to be easily rendered as text html json csv etc by hledger commands hamlet templates javascript or whatever",
          "hierarchy": "Hledger Reports",
          "module": "Hledger.Reports",
          "name": "Reports",
          "package": "hledger-lib",
          "partial": "Reports",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Reports.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA list of account names plus rendering info, along with their\n balances as of the end of the reporting period, and the grand\n total. Used for the balance command's single-column mode.\n\u003c/p\u003e",
          "module": "Hledger.Reports",
          "name": "BalanceReport",
          "package": "hledger-lib",
          "source": "src/Hledger-Reports.html#BalanceReport",
          "type": "type"
        },
        "index": {
          "description": "list of account names plus rendering info along with their balances as of the end of the reporting period and the grand total Used for the balance command single-column mode",
          "hierarchy": "Hledger Reports",
          "module": "Hledger.Reports",
          "name": "BalanceReport",
          "package": "hledger-lib",
          "partial": "Balance Report",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Reports.html#t:BalanceReport"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cul\u003e\u003cli\u003e Full account name,\n\u003c/li\u003e\u003cli\u003e short account name for display (the leaf name, prefixed by any boring parents immediately above),\n\u003c/li\u003e\u003cli\u003e how many steps to indent this account (the 0-based account depth excluding boring parents, or 0 with --flat),\n\u003c/li\u003e\u003cli\u003e account balance (including subaccounts (XXX unless --flat)).\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Hledger.Reports",
          "name": "BalanceReportItem",
          "package": "hledger-lib",
          "source": "src/Hledger-Reports.html#BalanceReportItem",
          "type": "type"
        },
        "index": {
          "description": "Full account name short account name for display the leaf name prefixed by any boring parents immediately above how many steps to indent this account the based account depth excluding boring parents or with flat account balance including subaccounts XXX unless flat",
          "hierarchy": "Hledger Reports",
          "module": "Hledger.Reports",
          "name": "BalanceReportItem",
          "package": "hledger-lib",
          "partial": "Balance Report Item",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Reports.html#t:BalanceReportItem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhich balance is being shown in a multi-column balance report.\n\u003c/p\u003e",
          "module": "Hledger.Reports",
          "name": "BalanceType",
          "package": "hledger-lib",
          "source": "src/Hledger-Reports.html#BalanceType",
          "type": "data"
        },
        "index": {
          "description": "Which balance is being shown in multi-column balance report",
          "hierarchy": "Hledger Reports",
          "module": "Hledger.Reports",
          "name": "BalanceType",
          "package": "hledger-lib",
          "partial": "Balance Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Reports.html#t:BalanceType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Reports",
          "name": "DisplayExp",
          "package": "hledger-lib",
          "source": "src/Hledger-Reports.html#DisplayExp",
          "type": "type"
        },
        "index": {
          "hierarchy": "Hledger Reports",
          "module": "Hledger.Reports",
          "name": "DisplayExp",
          "package": "hledger-lib",
          "partial": "Display Exp",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Reports.html#t:DisplayExp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA journal entries report is a list of whole transactions as\n originally entered in the journal (mostly). This is used by eg\n hledger's print command and hledger-web's journal entries view.\n\u003c/p\u003e",
          "module": "Hledger.Reports",
          "name": "EntriesReport",
          "package": "hledger-lib",
          "source": "src/Hledger-Reports.html#EntriesReport",
          "type": "type"
        },
        "index": {
          "description": "journal entries report is list of whole transactions as originally entered in the journal mostly This is used by eg hledger print command and hledger-web journal entries view",
          "hierarchy": "Hledger Reports",
          "module": "Hledger.Reports",
          "name": "EntriesReport",
          "package": "hledger-lib",
          "partial": "Entries Report",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Reports.html#t:EntriesReport"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Reports",
          "name": "EntriesReportItem",
          "package": "hledger-lib",
          "source": "src/Hledger-Reports.html#EntriesReportItem",
          "type": "type"
        },
        "index": {
          "hierarchy": "Hledger Reports",
          "module": "Hledger.Reports",
          "name": "EntriesReportItem",
          "package": "hledger-lib",
          "partial": "Entries Report Item",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Reports.html#t:EntriesReportItem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Reports",
          "name": "FormatStr",
          "package": "hledger-lib",
          "source": "src/Hledger-Reports.html#FormatStr",
          "type": "type"
        },
        "index": {
          "hierarchy": "Hledger Reports",
          "module": "Hledger.Reports",
          "name": "FormatStr",
          "package": "hledger-lib",
          "partial": "Format Str",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Reports.html#t:FormatStr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA multi(column) balance report is a list of accounts, each with a list of\n balances corresponding to the report's column periods. The balances' meaning depends\n on the type of balance report (see \u003ccode\u003e\u003ca\u003eBalanceType\u003c/a\u003e\u003c/code\u003e and \u003ca\u003eHledger.Cli.Balance\u003c/a\u003e).\n Also included are the overall total for each period, the date span for each period,\n and some additional rendering info for the accounts.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e The date span for each report column,\n\u003c/li\u003e\u003cli\u003e line items (one per account),\n\u003c/li\u003e\u003cli\u003e the final total for each report column.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Hledger.Reports",
          "name": "MultiBalanceReport",
          "package": "hledger-lib",
          "source": "src/Hledger-Reports.html#MultiBalanceReport",
          "type": "newtype"
        },
        "index": {
          "description": "multi column balance report is list of accounts each with list of balances corresponding to the report column periods The balances meaning depends on the type of balance report see BalanceType and Hledger.Cli.Balance Also included are the overall total for each period the date span for each period and some additional rendering info for the accounts The date span for each report column line items one per account the final total for each report column",
          "hierarchy": "Hledger Reports",
          "module": "Hledger.Reports",
          "name": "MultiBalanceReport",
          "package": "hledger-lib",
          "partial": "Multi Balance Report",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Reports.html#t:MultiBalanceReport"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cul\u003e\u003cli\u003e The account name with rendering hints,\n\u003c/li\u003e\u003cli\u003e the account's balance (per-period balance, cumulative ending\n balance, or historical ending balance) in each of the report's\n periods.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Hledger.Reports",
          "name": "MultiBalanceReportItem",
          "package": "hledger-lib",
          "source": "src/Hledger-Reports.html#MultiBalanceReportItem",
          "type": "type"
        },
        "index": {
          "description": "The account name with rendering hints the account balance per-period balance cumulative ending balance or historical ending balance in each of the report periods",
          "hierarchy": "Hledger Reports",
          "module": "Hledger.Reports",
          "name": "MultiBalanceReportItem",
          "package": "hledger-lib",
          "partial": "Multi Balance Report Item",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Reports.html#t:MultiBalanceReportItem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA postings report is a list of postings with a running total, a label\n for the total field, and a little extra transaction info to help with rendering.\n This is used eg for the register command.\n\u003c/p\u003e",
          "module": "Hledger.Reports",
          "name": "PostingsReport",
          "package": "hledger-lib",
          "source": "src/Hledger-Reports.html#PostingsReport",
          "type": "type"
        },
        "index": {
          "description": "postings report is list of postings with running total label for the total field and little extra transaction info to help with rendering This is used eg for the register command",
          "hierarchy": "Hledger Reports",
          "module": "Hledger.Reports",
          "name": "PostingsReport",
          "package": "hledger-lib",
          "partial": "Postings Report",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Reports.html#t:PostingsReport"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Reports",
          "name": "PostingsReportItem",
          "package": "hledger-lib",
          "source": "src/Hledger-Reports.html#PostingsReportItem",
          "type": "type"
        },
        "index": {
          "hierarchy": "Hledger Reports",
          "module": "Hledger.Reports",
          "name": "PostingsReportItem",
          "package": "hledger-lib",
          "partial": "Postings Report Item",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Reports.html#t:PostingsReportItem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cul\u003e\u003cli\u003e Full account name,\n\u003c/li\u003e\u003cli\u003e ledger-style short account name (the leaf name, prefixed by any boring parents immediately above),\n\u003c/li\u003e\u003cli\u003e indentation steps to use when rendering a ledger-style account tree\n (the 0-based depth of this account excluding boring parents; or with --flat, 0)\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Hledger.Reports",
          "name": "RenderableAccountName",
          "package": "hledger-lib",
          "source": "src/Hledger-Reports.html#RenderableAccountName",
          "type": "type"
        },
        "index": {
          "description": "Full account name ledger-style short account name the leaf name prefixed by any boring parents immediately above indentation steps to use when rendering ledger-style account tree the based depth of this account excluding boring parents or with flat",
          "hierarchy": "Hledger Reports",
          "module": "Hledger.Reports",
          "name": "RenderableAccountName",
          "package": "hledger-lib",
          "partial": "Renderable Account Name",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Reports.html#t:RenderableAccountName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStandard options for customising report filtering and output,\n corresponding to hledger's command-line options and query language\n arguments. Used in hledger-lib and above.\n\u003c/p\u003e",
          "module": "Hledger.Reports",
          "name": "ReportOpts",
          "package": "hledger-lib",
          "source": "src/Hledger-Reports.html#ReportOpts",
          "type": "data"
        },
        "index": {
          "description": "Standard options for customising report filtering and output corresponding to hledger command-line options and query language arguments Used in hledger-lib and above",
          "hierarchy": "Hledger Reports",
          "module": "Hledger.Reports",
          "name": "ReportOpts",
          "package": "hledger-lib",
          "partial": "Report Opts",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Reports.html#t:ReportOpts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA transactions report includes a list of transactions\n (posting-filtered and unfiltered variants), a running balance, and some\n other information helpful for rendering a register view (a flag\n indicating multiple other accounts and a display string describing\n them) with or without a notion of current account(s).\n Two kinds of report use this data structure, see journalTransactionsReport\n and accountTransactionsReport below for detais.\n\u003c/p\u003e",
          "module": "Hledger.Reports",
          "name": "TransactionsReport",
          "package": "hledger-lib",
          "source": "src/Hledger-Reports.html#TransactionsReport",
          "type": "type"
        },
        "index": {
          "description": "transactions report includes list of transactions posting-filtered and unfiltered variants running balance and some other information helpful for rendering register view flag indicating multiple other accounts and display string describing them with or without notion of current account Two kinds of report use this data structure see journalTransactionsReport and accountTransactionsReport below for detais",
          "hierarchy": "Hledger Reports",
          "module": "Hledger.Reports",
          "name": "TransactionsReport",
          "package": "hledger-lib",
          "partial": "Transactions Report",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Reports.html#t:TransactionsReport"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Reports",
          "name": "TransactionsReportItem",
          "package": "hledger-lib",
          "source": "src/Hledger-Reports.html#TransactionsReportItem",
          "type": "type"
        },
        "index": {
          "hierarchy": "Hledger Reports",
          "module": "Hledger.Reports",
          "name": "TransactionsReportItem",
          "package": "hledger-lib",
          "partial": "Transactions Report Item",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Reports.html#t:TransactionsReportItem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe accumulated balance at each period's end, starting from zero at the report start date.\n\u003c/p\u003e",
          "module": "Hledger.Reports",
          "name": "CumulativeBalance",
          "package": "hledger-lib",
          "signature": "CumulativeBalance",
          "source": "src/Hledger-Reports.html#BalanceType",
          "type": "function"
        },
        "index": {
          "description": "The accumulated balance at each period end starting from zero at the report start date",
          "hierarchy": "Hledger Reports",
          "module": "Hledger.Reports",
          "name": "CumulativeBalance",
          "package": "hledger-lib",
          "partial": "Cumulative Balance",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Reports.html#v:CumulativeBalance"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe historical balance at each period's end, starting from the account balances at the report start date.\n\u003c/p\u003e",
          "module": "Hledger.Reports",
          "name": "HistoricalBalance",
          "package": "hledger-lib",
          "signature": "HistoricalBalance",
          "source": "src/Hledger-Reports.html#BalanceType",
          "type": "function"
        },
        "index": {
          "description": "The historical balance at each period end starting from the account balances at the report start date",
          "hierarchy": "Hledger Reports",
          "module": "Hledger.Reports",
          "name": "HistoricalBalance",
          "package": "hledger-lib",
          "partial": "Historical Balance",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Reports.html#v:HistoricalBalance"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Reports",
          "name": "MultiBalanceReport",
          "package": "hledger-lib",
          "signature": "MultiBalanceReport ([DateSpan], [MultiBalanceReportItem], [MixedAmount])",
          "source": "src/Hledger-Reports.html#MultiBalanceReport",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Reports",
          "module": "Hledger.Reports",
          "name": "MultiBalanceReport",
          "normalized": "MultiBalanceReport([DateSpan],[MultiBalanceReportItem],[MixedAmount])",
          "package": "hledger-lib",
          "partial": "Multi Balance Report",
          "signature": "MultiBalanceReport([DateSpan],[MultiBalanceReportItem],[MixedAmount])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Reports.html#v:MultiBalanceReport"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe change of balance in each period.\n\u003c/p\u003e",
          "module": "Hledger.Reports",
          "name": "PeriodBalance",
          "package": "hledger-lib",
          "signature": "PeriodBalance",
          "source": "src/Hledger-Reports.html#BalanceType",
          "type": "function"
        },
        "index": {
          "description": "The change of balance in each period",
          "hierarchy": "Hledger Reports",
          "module": "Hledger.Reports",
          "name": "PeriodBalance",
          "package": "hledger-lib",
          "partial": "Period Balance",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Reports.html#v:PeriodBalance"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Reports",
          "name": "ReportOpts",
          "package": "hledger-lib",
          "signature": "ReportOpts",
          "source": "src/Hledger-Reports.html#ReportOpts",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Reports",
          "module": "Hledger.Reports",
          "name": "ReportOpts",
          "package": "hledger-lib",
          "partial": "Report Opts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Reports.html#v:ReportOpts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the historical running inclusive balance of a particular account,\n from earliest to latest posting date.\n XXX Accounts should know the Ledger & Journal they came from\n\u003c/p\u003e",
          "module": "Hledger.Reports",
          "name": "accountBalanceHistory",
          "package": "hledger-lib",
          "signature": "ReportOpts -\u003e Journal -\u003e Account -\u003e [(Day, MixedAmount)]",
          "source": "src/Hledger-Reports.html#accountBalanceHistory",
          "type": "function"
        },
        "index": {
          "description": "Get the historical running inclusive balance of particular account from earliest to latest posting date XXX Accounts should know the Ledger Journal they came from",
          "hierarchy": "Hledger Reports",
          "module": "Hledger.Reports",
          "name": "accountBalanceHistory",
          "normalized": "ReportOpts-\u003eJournal-\u003eAccount-\u003e[(Day,MixedAmount)]",
          "package": "hledger-lib",
          "partial": "Balance History",
          "signature": "ReportOpts-\u003eJournal-\u003eAccount-\u003e[(Day,MixedAmount)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Reports.html#v:accountBalanceHistory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSelect transactions within one or more current accounts, and make a\n transactions report relative to those account(s). This means:\n\u003c/p\u003e\u003col\u003e\u003cli\u003e it shows transactions from the point of view of the current account(s).\n    The transaction amount is the amount posted to the current account(s).\n    The other accounts' names are provided. \n\u003c/li\u003e\u003cli\u003e With no transaction filtering in effect other than a start date, it\n    shows the accurate historical running balance for the current account(s).\n    Otherwise it shows a running total starting at 0.\n\u003c/li\u003e\u003c/ol\u003e\u003cp\u003eThis is used by eg hledger-web's account register view. Currently,\n reporting intervals are not supported, and report items are most\n recent first.\n\u003c/p\u003e",
          "module": "Hledger.Reports",
          "name": "accountTransactionsReport",
          "package": "hledger-lib",
          "signature": "ReportOpts -\u003e Journal -\u003e Query -\u003e Query -\u003e TransactionsReport",
          "source": "src/Hledger-Reports.html#accountTransactionsReport",
          "type": "function"
        },
        "index": {
          "description": "Select transactions within one or more current accounts and make transactions report relative to those account This means it shows transactions from the point of view of the current account The transaction amount is the amount posted to the current account The other accounts names are provided With no transaction filtering in effect other than start date it shows the accurate historical running balance for the current account Otherwise it shows running total starting at This is used by eg hledger-web account register view Currently reporting intervals are not supported and report items are most recent first",
          "hierarchy": "Hledger Reports",
          "module": "Hledger.Reports",
          "name": "accountTransactionsReport",
          "normalized": "ReportOpts-\u003eJournal-\u003eQuery-\u003eQuery-\u003eTransactionsReport",
          "package": "hledger-lib",
          "partial": "Transactions Report",
          "signature": "ReportOpts-\u003eJournal-\u003eQuery-\u003eQuery-\u003eTransactionsReport",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Reports.html#v:accountTransactionsReport"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Reports",
          "name": "average_",
          "package": "hledger-lib",
          "signature": "Bool",
          "source": "src/Hledger-Reports.html#ReportOpts",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Reports",
          "module": "Hledger.Reports",
          "name": "average_",
          "package": "hledger-lib",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Reports.html#v:average_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSelect accounts, and get their balances at the end of the selected\n period, and misc. display information, for an accounts report.\n\u003c/p\u003e",
          "module": "Hledger.Reports",
          "name": "balanceReport",
          "package": "hledger-lib",
          "signature": "ReportOpts -\u003e Query -\u003e Journal -\u003e BalanceReport",
          "source": "src/Hledger-Reports.html#balanceReport",
          "type": "function"
        },
        "index": {
          "description": "Select accounts and get their balances at the end of the selected period and misc display information for an accounts report",
          "hierarchy": "Hledger Reports",
          "module": "Hledger.Reports",
          "name": "balanceReport",
          "normalized": "ReportOpts-\u003eQuery-\u003eJournal-\u003eBalanceReport",
          "package": "hledger-lib",
          "partial": "Report",
          "signature": "ReportOpts-\u003eQuery-\u003eJournal-\u003eBalanceReport",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Reports.html#v:balanceReport"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Reports",
          "name": "balancetype_",
          "package": "hledger-lib",
          "signature": "BalanceType",
          "source": "src/Hledger-Reports.html#ReportOpts",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Reports",
          "module": "Hledger.Reports",
          "name": "balancetype_",
          "package": "hledger-lib",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Reports.html#v:balancetype_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Reports",
          "name": "begin_",
          "package": "hledger-lib",
          "signature": "Maybe Day",
          "source": "src/Hledger-Reports.html#ReportOpts",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Reports",
          "module": "Hledger.Reports",
          "name": "begin_",
          "package": "hledger-lib",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Reports.html#v:begin_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet a maybe boolean representing the last cleared/uncleared option if any.\n\u003c/p\u003e",
          "module": "Hledger.Reports",
          "name": "clearedValueFromOpts",
          "package": "hledger-lib",
          "signature": "ReportOpts -\u003e Maybe Bool",
          "source": "src/Hledger-Reports.html#clearedValueFromOpts",
          "type": "function"
        },
        "index": {
          "description": "Get maybe boolean representing the last cleared uncleared option if any",
          "hierarchy": "Hledger Reports",
          "module": "Hledger.Reports",
          "name": "clearedValueFromOpts",
          "normalized": "ReportOpts-\u003eMaybe Bool",
          "package": "hledger-lib",
          "partial": "Value From Opts",
          "signature": "ReportOpts-\u003eMaybe Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Reports.html#v:clearedValueFromOpts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Reports",
          "name": "cleared_",
          "package": "hledger-lib",
          "signature": "Bool",
          "source": "src/Hledger-Reports.html#ReportOpts",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Reports",
          "module": "Hledger.Reports",
          "name": "cleared_",
          "package": "hledger-lib",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Reports.html#v:cleared_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Reports",
          "name": "cost_",
          "package": "hledger-lib",
          "signature": "Bool",
          "source": "src/Hledger-Reports.html#ReportOpts",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Reports",
          "module": "Hledger.Reports",
          "name": "cost_",
          "package": "hledger-lib",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Reports.html#v:cost_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSelect accounts and get their ending balance in each period, plus\n account name display information, for a cumulative or historical balance report.\n\u003c/p\u003e",
          "module": "Hledger.Reports",
          "name": "cumulativeOrHistoricalBalanceReport",
          "package": "hledger-lib",
          "signature": "ReportOpts -\u003e Query -\u003e Journal -\u003e MultiBalanceReport",
          "source": "src/Hledger-Reports.html#cumulativeOrHistoricalBalanceReport",
          "type": "function"
        },
        "index": {
          "description": "Select accounts and get their ending balance in each period plus account name display information for cumulative or historical balance report",
          "hierarchy": "Hledger Reports",
          "module": "Hledger.Reports",
          "name": "cumulativeOrHistoricalBalanceReport",
          "normalized": "ReportOpts-\u003eQuery-\u003eJournal-\u003eMultiBalanceReport",
          "package": "hledger-lib",
          "partial": "Or Historical Balance Report",
          "signature": "ReportOpts-\u003eQuery-\u003eJournal-\u003eMultiBalanceReport",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Reports.html#v:cumulativeOrHistoricalBalanceReport"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Reports",
          "name": "daily_",
          "package": "hledger-lib",
          "signature": "Bool",
          "source": "src/Hledger-Reports.html#ReportOpts",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Reports",
          "module": "Hledger.Reports",
          "name": "daily_",
          "package": "hledger-lib",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Reports.html#v:daily_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Reports",
          "name": "date2_",
          "package": "hledger-lib",
          "signature": "Bool",
          "source": "src/Hledger-Reports.html#ReportOpts",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Reports",
          "module": "Hledger.Reports",
          "name": "date2_",
          "package": "hledger-lib",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Reports.html#v:date2_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFigure out the date span we should report on, based on any\n begin\u003cem\u003eend\u003c/em\u003eperiod options provided. A period option will cause begin and\n end options to be ignored.\n\u003c/p\u003e",
          "module": "Hledger.Reports",
          "name": "dateSpanFromOpts",
          "package": "hledger-lib",
          "signature": "Day -\u003e ReportOpts -\u003e DateSpan",
          "source": "src/Hledger-Reports.html#dateSpanFromOpts",
          "type": "function"
        },
        "index": {
          "description": "Figure out the date span we should report on based on any begin end period options provided period option will cause begin and end options to be ignored",
          "hierarchy": "Hledger Reports",
          "module": "Hledger.Reports",
          "name": "dateSpanFromOpts",
          "normalized": "Day-\u003eReportOpts-\u003eDateSpan",
          "package": "hledger-lib",
          "partial": "Span From Opts",
          "signature": "Day-\u003eReportOpts-\u003eDateSpan",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Reports.html#v:dateSpanFromOpts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Reports",
          "name": "defreportopts",
          "package": "hledger-lib",
          "signature": "ReportOpts",
          "source": "src/Hledger-Reports.html#defreportopts",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Reports",
          "module": "Hledger.Reports",
          "name": "defreportopts",
          "package": "hledger-lib",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Reports.html#v:defreportopts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Reports",
          "name": "depth_",
          "package": "hledger-lib",
          "signature": "Maybe Int",
          "source": "src/Hledger-Reports.html#ReportOpts",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Reports",
          "module": "Hledger.Reports",
          "name": "depth_",
          "package": "hledger-lib",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Reports.html#v:depth_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Reports",
          "name": "display_",
          "package": "hledger-lib",
          "signature": "Maybe DisplayExp",
          "source": "src/Hledger-Reports.html#ReportOpts",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Reports",
          "module": "Hledger.Reports",
          "name": "display_",
          "package": "hledger-lib",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Reports.html#v:display_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Reports",
          "name": "drop_",
          "package": "hledger-lib",
          "signature": "Int",
          "source": "src/Hledger-Reports.html#ReportOpts",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Reports",
          "module": "Hledger.Reports",
          "name": "drop_",
          "package": "hledger-lib",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Reports.html#v:drop_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Reports",
          "name": "empty_",
          "package": "hledger-lib",
          "signature": "Bool",
          "source": "src/Hledger-Reports.html#ReportOpts",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Reports",
          "module": "Hledger.Reports",
          "name": "empty_",
          "package": "hledger-lib",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Reports.html#v:empty_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Reports",
          "name": "end_",
          "package": "hledger-lib",
          "signature": "Maybe Day",
          "source": "src/Hledger-Reports.html#ReportOpts",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Reports",
          "module": "Hledger.Reports",
          "name": "end_",
          "package": "hledger-lib",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Reports.html#v:end_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSelect transactions for an entries report.\n\u003c/p\u003e",
          "module": "Hledger.Reports",
          "name": "entriesReport",
          "package": "hledger-lib",
          "signature": "ReportOpts -\u003e Query -\u003e Journal -\u003e EntriesReport",
          "source": "src/Hledger-Reports.html#entriesReport",
          "type": "function"
        },
        "index": {
          "description": "Select transactions for an entries report",
          "hierarchy": "Hledger Reports",
          "module": "Hledger.Reports",
          "name": "entriesReport",
          "normalized": "ReportOpts-\u003eQuery-\u003eJournal-\u003eEntriesReport",
          "package": "hledger-lib",
          "partial": "Report",
          "signature": "ReportOpts-\u003eQuery-\u003eJournal-\u003eEntriesReport",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Reports.html#v:entriesReport"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Reports",
          "name": "flat_",
          "package": "hledger-lib",
          "signature": "Bool",
          "source": "src/Hledger-Reports.html#ReportOpts",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Reports",
          "module": "Hledger.Reports",
          "name": "flat_",
          "package": "hledger-lib",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Reports.html#v:flat_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Reports",
          "name": "format_",
          "package": "hledger-lib",
          "signature": "Maybe FormatStr",
          "source": "src/Hledger-Reports.html#ReportOpts",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Reports",
          "module": "Hledger.Reports",
          "name": "format_",
          "package": "hledger-lib",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Reports.html#v:format_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFigure out the reporting interval, if any, specified by the options.\n --period overrides --daily overrides --weekly overrides --monthly etc.\n\u003c/p\u003e",
          "module": "Hledger.Reports",
          "name": "intervalFromOpts",
          "package": "hledger-lib",
          "signature": "ReportOpts -\u003e Interval",
          "source": "src/Hledger-Reports.html#intervalFromOpts",
          "type": "function"
        },
        "index": {
          "description": "Figure out the reporting interval if any specified by the options period overrides daily overrides weekly overrides monthly etc",
          "hierarchy": "Hledger Reports",
          "module": "Hledger.Reports",
          "name": "intervalFromOpts",
          "normalized": "ReportOpts-\u003eInterval",
          "package": "hledger-lib",
          "partial": "From Opts",
          "signature": "ReportOpts-\u003eInterval",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Reports.html#v:intervalFromOpts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert this journal's postings' amounts to the cost basis amounts if\n specified by options.\n\u003c/p\u003e",
          "module": "Hledger.Reports",
          "name": "journalSelectingAmountFromOpts",
          "package": "hledger-lib",
          "signature": "ReportOpts -\u003e Journal -\u003e Journal",
          "source": "src/Hledger-Reports.html#journalSelectingAmountFromOpts",
          "type": "function"
        },
        "index": {
          "description": "Convert this journal postings amounts to the cost basis amounts if specified by options",
          "hierarchy": "Hledger Reports",
          "module": "Hledger.Reports",
          "name": "journalSelectingAmountFromOpts",
          "normalized": "ReportOpts-\u003eJournal-\u003eJournal",
          "package": "hledger-lib",
          "partial": "Selecting Amount From Opts",
          "signature": "ReportOpts-\u003eJournal-\u003eJournal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Reports.html#v:journalSelectingAmountFromOpts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSelect transactions from the whole journal. This is similar to a\n \u003ca\u003epostingsReport\u003c/a\u003e except with transaction-based report items which\n are ordered most recent first. This is used by eg hledger-web's journal view.\n\u003c/p\u003e",
          "module": "Hledger.Reports",
          "name": "journalTransactionsReport",
          "package": "hledger-lib",
          "signature": "ReportOpts -\u003e Journal -\u003e Query -\u003e TransactionsReport",
          "source": "src/Hledger-Reports.html#journalTransactionsReport",
          "type": "function"
        },
        "index": {
          "description": "Select transactions from the whole journal This is similar to postingsReport except with transaction-based report items which are ordered most recent first This is used by eg hledger-web journal view",
          "hierarchy": "Hledger Reports",
          "module": "Hledger.Reports",
          "name": "journalTransactionsReport",
          "normalized": "ReportOpts-\u003eJournal-\u003eQuery-\u003eTransactionsReport",
          "package": "hledger-lib",
          "partial": "Transactions Report",
          "signature": "ReportOpts-\u003eJournal-\u003eQuery-\u003eTransactionsReport",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Reports.html#v:journalTransactionsReport"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate one postings report line item, containing the posting,\n the current running balance, and optionally the posting date and/or\n the transaction description.\n\u003c/p\u003e",
          "module": "Hledger.Reports",
          "name": "mkpostingsReportItem",
          "package": "hledger-lib",
          "signature": "Bool -\u003e Bool -\u003e WhichDate -\u003e Posting -\u003e MixedAmount -\u003e PostingsReportItem",
          "source": "src/Hledger-Reports.html#mkpostingsReportItem",
          "type": "function"
        },
        "index": {
          "description": "Generate one postings report line item containing the posting the current running balance and optionally the posting date and or the transaction description",
          "hierarchy": "Hledger Reports",
          "module": "Hledger.Reports",
          "name": "mkpostingsReportItem",
          "normalized": "Bool-\u003eBool-\u003eWhichDate-\u003ePosting-\u003eMixedAmount-\u003ePostingsReportItem",
          "package": "hledger-lib",
          "partial": "Report Item",
          "signature": "Bool-\u003eBool-\u003eWhichDate-\u003ePosting-\u003eMixedAmount-\u003ePostingsReportItem",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Reports.html#v:mkpostingsReportItem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Reports",
          "name": "monthly_",
          "package": "hledger-lib",
          "signature": "Bool",
          "source": "src/Hledger-Reports.html#ReportOpts",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Reports",
          "module": "Hledger.Reports",
          "name": "monthly_",
          "package": "hledger-lib",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Reports.html#v:monthly_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Reports",
          "name": "no_elide_",
          "package": "hledger-lib",
          "signature": "Bool",
          "source": "src/Hledger-Reports.html#ReportOpts",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Reports",
          "module": "Hledger.Reports",
          "name": "no_elide_",
          "package": "hledger-lib",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Reports.html#v:no_elide_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Reports",
          "name": "no_total_",
          "package": "hledger-lib",
          "signature": "Bool",
          "source": "src/Hledger-Reports.html#ReportOpts",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Reports",
          "module": "Hledger.Reports",
          "name": "no_total_",
          "package": "hledger-lib",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Reports.html#v:no_total_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSelect accounts and get their period balance (change of balance) in each\n period, plus misc. display information, for a period balance report.\n\u003c/p\u003e",
          "module": "Hledger.Reports",
          "name": "periodBalanceReport",
          "package": "hledger-lib",
          "signature": "ReportOpts -\u003e Query -\u003e Journal -\u003e MultiBalanceReport",
          "source": "src/Hledger-Reports.html#periodBalanceReport",
          "type": "function"
        },
        "index": {
          "description": "Select accounts and get their period balance change of balance in each period plus misc display information for period balance report",
          "hierarchy": "Hledger Reports",
          "module": "Hledger.Reports",
          "name": "periodBalanceReport",
          "normalized": "ReportOpts-\u003eQuery-\u003eJournal-\u003eMultiBalanceReport",
          "package": "hledger-lib",
          "partial": "Balance Report",
          "signature": "ReportOpts-\u003eQuery-\u003eJournal-\u003eMultiBalanceReport",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Reports.html#v:periodBalanceReport"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Reports",
          "name": "period_",
          "package": "hledger-lib",
          "signature": "Maybe (Interval, DateSpan)",
          "source": "src/Hledger-Reports.html#ReportOpts",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Reports",
          "module": "Hledger.Reports",
          "name": "period_",
          "normalized": "Maybe(Interval,DateSpan)",
          "package": "hledger-lib",
          "signature": "Maybe(Interval,DateSpan)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Reports.html#v:period_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSelect postings from the journal and add running balance and other\n information to make a postings report. Used by eg hledger's register command.\n\u003c/p\u003e",
          "module": "Hledger.Reports",
          "name": "postingsReport",
          "package": "hledger-lib",
          "signature": "ReportOpts -\u003e Query -\u003e Journal -\u003e PostingsReport",
          "source": "src/Hledger-Reports.html#postingsReport",
          "type": "function"
        },
        "index": {
          "description": "Select postings from the journal and add running balance and other information to make postings report Used by eg hledger register command",
          "hierarchy": "Hledger Reports",
          "module": "Hledger.Reports",
          "name": "postingsReport",
          "normalized": "ReportOpts-\u003eQuery-\u003eJournal-\u003ePostingsReport",
          "package": "hledger-lib",
          "partial": "Report",
          "signature": "ReportOpts-\u003eQuery-\u003eJournal-\u003ePostingsReport",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Reports.html#v:postingsReport"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Reports",
          "name": "quarterly_",
          "package": "hledger-lib",
          "signature": "Bool",
          "source": "src/Hledger-Reports.html#ReportOpts",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Reports",
          "module": "Hledger.Reports",
          "name": "quarterly_",
          "package": "hledger-lib",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Reports.html#v:quarterly_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert report options and arguments to a query.\n\u003c/p\u003e",
          "module": "Hledger.Reports",
          "name": "queryFromOpts",
          "package": "hledger-lib",
          "signature": "Day -\u003e ReportOpts -\u003e Query",
          "source": "src/Hledger-Reports.html#queryFromOpts",
          "type": "function"
        },
        "index": {
          "description": "Convert report options and arguments to query",
          "hierarchy": "Hledger Reports",
          "module": "Hledger.Reports",
          "name": "queryFromOpts",
          "normalized": "Day-\u003eReportOpts-\u003eQuery",
          "package": "hledger-lib",
          "partial": "From Opts",
          "signature": "Day-\u003eReportOpts-\u003eQuery",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Reports.html#v:queryFromOpts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert report options and arguments to query options.\n\u003c/p\u003e",
          "module": "Hledger.Reports",
          "name": "queryOptsFromOpts",
          "package": "hledger-lib",
          "signature": "Day -\u003e ReportOpts -\u003e [QueryOpt]",
          "source": "src/Hledger-Reports.html#queryOptsFromOpts",
          "type": "function"
        },
        "index": {
          "description": "Convert report options and arguments to query options",
          "hierarchy": "Hledger Reports",
          "module": "Hledger.Reports",
          "name": "queryOptsFromOpts",
          "normalized": "Day-\u003eReportOpts-\u003e[QueryOpt]",
          "package": "hledger-lib",
          "partial": "Opts From Opts",
          "signature": "Day-\u003eReportOpts-\u003e[QueryOpt]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Reports.html#v:queryOptsFromOpts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Reports",
          "name": "query_",
          "package": "hledger-lib",
          "signature": "String",
          "source": "src/Hledger-Reports.html#ReportOpts",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Reports",
          "module": "Hledger.Reports",
          "name": "query_",
          "package": "hledger-lib",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Reports.html#v:query_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Reports",
          "name": "real_",
          "package": "hledger-lib",
          "signature": "Bool",
          "source": "src/Hledger-Reports.html#ReportOpts",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Reports",
          "module": "Hledger.Reports",
          "name": "real_",
          "package": "hledger-lib",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Reports.html#v:real_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Reports",
          "name": "related_",
          "package": "hledger-lib",
          "signature": "Bool",
          "source": "src/Hledger-Reports.html#ReportOpts",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Reports",
          "module": "Hledger.Reports",
          "name": "related_",
          "package": "hledger-lib",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Reports.html#v:related_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalculate the overall span and per-period date spans for a report\n based on command-line options, the parsed search query, and the\n journal data. If a reporting interval is specified, the report span\n will be enlarged to include a whole number of report periods.\n Reports will sometimes trim these spans further when appropriate.\n\u003c/p\u003e",
          "module": "Hledger.Reports",
          "name": "reportSpans",
          "package": "hledger-lib",
          "signature": "ReportOpts -\u003e Query -\u003e Journal -\u003e (DateSpan, [DateSpan])",
          "source": "src/Hledger-Reports.html#reportSpans",
          "type": "function"
        },
        "index": {
          "description": "Calculate the overall span and per-period date spans for report based on command-line options the parsed search query and the journal data If reporting interval is specified the report span will be enlarged to include whole number of report periods Reports will sometimes trim these spans further when appropriate",
          "hierarchy": "Hledger Reports",
          "module": "Hledger.Reports",
          "name": "reportSpans",
          "normalized": "ReportOpts-\u003eQuery-\u003eJournal-\u003e(DateSpan,[DateSpan])",
          "package": "hledger-lib",
          "partial": "Spans",
          "signature": "ReportOpts-\u003eQuery-\u003eJournal-\u003e(DateSpan,[DateSpan])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Reports.html#v:reportSpans"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Reports",
          "name": "tests_Hledger_Reports",
          "package": "hledger-lib",
          "signature": "Test",
          "source": "src/Hledger-Reports.html#tests_Hledger_Reports",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Reports",
          "module": "Hledger.Reports",
          "name": "tests_Hledger_Reports",
          "package": "hledger-lib",
          "partial": "Hledger Reports",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Reports.html#v:tests_Hledger_Reports"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Reports",
          "name": "transactionsReportByCommodity",
          "package": "hledger-lib",
          "signature": "TransactionsReport -\u003e [TransactionsReport]",
          "source": "src/Hledger-Reports.html#transactionsReportByCommodity",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Reports",
          "module": "Hledger.Reports",
          "name": "transactionsReportByCommodity",
          "normalized": "TransactionsReport-\u003e[TransactionsReport]",
          "package": "hledger-lib",
          "partial": "Report By Commodity",
          "signature": "TransactionsReport-\u003e[TransactionsReport]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Reports.html#v:transactionsReportByCommodity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Reports",
          "name": "triBalance",
          "package": "hledger-lib",
          "signature": "(t, t1, t2, t3, t4, t5) -\u003e t5",
          "source": "src/Hledger-Reports.html#triBalance",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Reports",
          "module": "Hledger.Reports",
          "name": "triBalance",
          "normalized": "(a,a,a,a,a,a)-\u003ea",
          "package": "hledger-lib",
          "partial": "Balance",
          "signature": "(t,t,t,t,t,t)-\u003et",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Reports.html#v:triBalance"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Reports",
          "name": "triDate",
          "package": "hledger-lib",
          "signature": "(Transaction, t, t1, t2, t3, t4) -\u003e Day",
          "source": "src/Hledger-Reports.html#triDate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Reports",
          "module": "Hledger.Reports",
          "name": "triDate",
          "normalized": "(Transaction,a,a,a,a,a)-\u003eDay",
          "package": "hledger-lib",
          "partial": "Date",
          "signature": "(Transaction,t,t,t,t,t)-\u003eDay",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Reports.html#v:triDate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Reports",
          "name": "triSimpleBalance",
          "package": "hledger-lib",
          "signature": "(t, t1, t2, t3, t4, MixedAmount) -\u003e [Char]",
          "source": "src/Hledger-Reports.html#triSimpleBalance",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Reports",
          "module": "Hledger.Reports",
          "name": "triSimpleBalance",
          "normalized": "(a,a,a,a,a,MixedAmount)-\u003e[Char]",
          "package": "hledger-lib",
          "partial": "Simple Balance",
          "signature": "(t,t,t,t,t,MixedAmount)-\u003e[Char]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Reports.html#v:triSimpleBalance"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Reports",
          "name": "uncleared_",
          "package": "hledger-lib",
          "signature": "Bool",
          "source": "src/Hledger-Reports.html#ReportOpts",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Reports",
          "module": "Hledger.Reports",
          "name": "uncleared_",
          "package": "hledger-lib",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Reports.html#v:uncleared_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Reports",
          "name": "weekly_",
          "package": "hledger-lib",
          "signature": "Bool",
          "source": "src/Hledger-Reports.html#ReportOpts",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Reports",
          "module": "Hledger.Reports",
          "name": "weekly_",
          "package": "hledger-lib",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Reports.html#v:weekly_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReport which date we will report on based on --date2.\n\u003c/p\u003e",
          "module": "Hledger.Reports",
          "name": "whichDateFromOpts",
          "package": "hledger-lib",
          "signature": "ReportOpts -\u003e WhichDate",
          "source": "src/Hledger-Reports.html#whichDateFromOpts",
          "type": "function"
        },
        "index": {
          "description": "Report which date we will report on based on date2",
          "hierarchy": "Hledger Reports",
          "module": "Hledger.Reports",
          "name": "whichDateFromOpts",
          "normalized": "ReportOpts-\u003eWhichDate",
          "package": "hledger-lib",
          "partial": "Date From Opts",
          "signature": "ReportOpts-\u003eWhichDate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Reports.html#v:whichDateFromOpts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Reports",
          "name": "yearly_",
          "package": "hledger-lib",
          "signature": "Bool",
          "source": "src/Hledger-Reports.html#ReportOpts",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Reports",
          "module": "Hledger.Reports",
          "name": "yearly_",
          "package": "hledger-lib",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Reports.html#v:yearly_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eUTF-8 aware string IO functions that will work across multiple platforms\nand GHC versions. Includes code from Text.Pandoc.UTF8 ((C) 2010 John\nMacFarlane).\n\u003c/p\u003e\u003cp\u003eExample usage:\n\u003c/p\u003e\u003cp\u003eimport Prelude hiding (readFile,writeFile,appendFile,getContents,putStr,putStrLn)\n import UTF8IOCompat   (readFile,writeFile,appendFile,getContents,putStr,putStrLn)\n import UTF8IOCompat   (SystemString,fromSystemString,toSystemString,error',userError')\n\u003c/p\u003e\u003cp\u003e2013\u003cem\u003e4\u003c/em\u003e10 update: we now trust that current GHC versions & platforms\ndo the right thing, so this file is a no-op and on its way to being removed.\nNot carefully tested.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Hledger.Utils.UTF8IOCompat",
          "name": "UTF8IOCompat",
          "package": "hledger-lib",
          "source": "src/Hledger-Utils-UTF8IOCompat.html",
          "type": "module"
        },
        "index": {
          "description": "UTF-8 aware string IO functions that will work across multiple platforms and GHC versions Includes code from Text.Pandoc.UTF8 John MacFarlane Example usage import Prelude hiding readFile writeFile appendFile getContents putStr putStrLn import UTF8IOCompat readFile writeFile appendFile getContents putStr putStrLn import UTF8IOCompat SystemString fromSystemString toSystemString error userError update we now trust that current GHC versions platforms do the right thing so this file is no-op and on its way to being removed Not carefully tested",
          "hierarchy": "Hledger Utils UTF8IOCompat",
          "module": "Hledger.Utils.UTF8IOCompat",
          "name": "UTF8IOCompat",
          "package": "hledger-lib",
          "partial": "UTF IOCompat",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Utils-UTF8IOCompat.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA string received from or being passed to the operating system, such\n as a file path, command-line argument, or environment variable name or\n value. With GHC versions before 7.2 on some platforms (posix) these are\n typically encoded. When converting, we assume the encoding is UTF-8 (cf\n \u003ca\u003ehttp://www.dwheeler.com/essays/fixing-unix-linux-filenames.html#UTF8\u003c/a\u003e).\n\u003c/p\u003e",
          "module": "Hledger.Utils.UTF8IOCompat",
          "name": "SystemString",
          "package": "hledger-lib",
          "source": "src/Hledger-Utils-UTF8IOCompat.html#SystemString",
          "type": "type"
        },
        "index": {
          "description": "string received from or being passed to the operating system such as file path command-line argument or environment variable name or value With GHC versions before on some platforms posix these are typically encoded When converting we assume the encoding is UTF-8 cf http www.dwheeler.com essays fixing-unix-linux-filenames.html UTF8",
          "hierarchy": "Hledger Utils UTF8IOCompat",
          "module": "Hledger.Utils.UTF8IOCompat",
          "name": "SystemString",
          "package": "hledger-lib",
          "partial": "System String",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Utils-UTF8IOCompat.html#t:SystemString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe computation \u003ccode\u003e\u003ca\u003eappendFile\u003c/a\u003e\u003c/code\u003e \u003ccode\u003efile str\u003c/code\u003e function appends the string \u003ccode\u003estr\u003c/code\u003e,\n to the file \u003ccode\u003efile\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNote that \u003ccode\u003e\u003ca\u003ewriteFile\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eappendFile\u003c/a\u003e\u003c/code\u003e write a literal string\n to a file.  To write a value of any printable type, as with \u003ccode\u003e\u003ca\u003eprint\u003c/a\u003e\u003c/code\u003e,\n use the \u003ccode\u003e\u003ca\u003eshow\u003c/a\u003e\u003c/code\u003e function to convert the value to a string first.\n\u003c/p\u003e\u003cpre\u003e main = appendFile \"squares\" (show [(x,x*x) | x \u003c- [0,0.1..2]])\n\u003c/pre\u003e",
          "module": "Hledger.Utils.UTF8IOCompat",
          "name": "appendFile",
          "package": "hledger-lib",
          "signature": "FilePath -\u003e String -\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "The computation appendFile file str function appends the string str to the file file Note that writeFile and appendFile write literal string to file To write value of any printable type as with print use the show function to convert the value to string first main appendFile squares show",
          "hierarchy": "Hledger Utils UTF8IOCompat",
          "module": "Hledger.Utils.UTF8IOCompat",
          "name": "appendFile",
          "normalized": "FilePath-\u003eString-\u003eIO()",
          "package": "hledger-lib",
          "partial": "File",
          "signature": "FilePath-\u003eString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Utils-UTF8IOCompat.html#v:appendFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA SystemString-aware version of error.\n\u003c/p\u003e",
          "module": "[\"Hledger.Utils.UTF8IOCompat\",\"Hledger.Utils\"]",
          "name": "error'",
          "package": "hledger-lib",
          "signature": "String -\u003e a",
          "source": "src/Hledger-Utils-UTF8IOCompat.html#error%27",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Utils-UTF8IOCompat.html#v:error-39-\",\"http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Utils.html#v:error-39-\"]"
        },
        "index": {
          "description": "SystemString-aware version of error",
          "hierarchy": "Hledger Utils UTF8IOCompat",
          "module": "Hledger.Utils.UTF8IOCompat",
          "name": "error'",
          "normalized": "String-\u003ea",
          "package": "hledger-lib",
          "signature": "String-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Utils-UTF8IOCompat.html#v:error-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a system string to an ordinary string, decoding from UTF-8 if\n it appears to be UTF8-encoded and GHC version is less than 7.2.\n\u003c/p\u003e",
          "module": "[\"Hledger.Utils.UTF8IOCompat\",\"Hledger.Utils\"]",
          "name": "fromSystemString",
          "package": "hledger-lib",
          "signature": "SystemString -\u003e String",
          "source": "src/Hledger-Utils-UTF8IOCompat.html#fromSystemString",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Utils-UTF8IOCompat.html#v:fromSystemString\",\"http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Utils.html#v:fromSystemString\"]"
        },
        "index": {
          "description": "Convert system string to an ordinary string decoding from UTF-8 if it appears to be UTF8-encoded and GHC version is less than",
          "hierarchy": "Hledger Utils UTF8IOCompat",
          "module": "Hledger.Utils.UTF8IOCompat",
          "name": "fromSystemString",
          "normalized": "SystemString-\u003eString",
          "package": "hledger-lib",
          "partial": "System String",
          "signature": "SystemString-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Utils-UTF8IOCompat.html#v:fromSystemString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003egetContents\u003c/a\u003e\u003c/code\u003e operation returns all user input as a single string,\n which is read lazily as it is needed\n (same as \u003ccode\u003e\u003ca\u003ehGetContents\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003estdin\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Hledger.Utils.UTF8IOCompat",
          "name": "getContents",
          "package": "hledger-lib",
          "signature": "IO String",
          "type": "function"
        },
        "index": {
          "description": "The getContents operation returns all user input as single string which is read lazily as it is needed same as hGetContents stdin",
          "hierarchy": "Hledger Utils UTF8IOCompat",
          "module": "Hledger.Utils.UTF8IOCompat",
          "name": "getContents",
          "package": "hledger-lib",
          "partial": "Contents",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Utils-UTF8IOCompat.html#v:getContents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComputation \u003ccode\u003e\u003ca\u003ehGetContents\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ehdl\u003c/code\u003e returns the list of characters\n corresponding to the unread portion of the channel or file managed\n by \u003ccode\u003ehdl\u003c/code\u003e, which is put into an intermediate state, \u003cem\u003esemi-closed\u003c/em\u003e.\n In this state, \u003ccode\u003ehdl\u003c/code\u003e is effectively closed,\n but items are read from \u003ccode\u003ehdl\u003c/code\u003e on demand and accumulated in a special\n list returned by \u003ccode\u003e\u003ca\u003ehGetContents\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ehdl\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eAny operation that fails because a handle is closed,\n also fails if a handle is semi-closed.  The only exception is \u003ccode\u003ehClose\u003c/code\u003e.\n A semi-closed handle becomes closed:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e if \u003ccode\u003ehClose\u003c/code\u003e is applied to it;\n\u003c/li\u003e\u003cli\u003e if an I/O error occurs when reading an item from the handle;\n\u003c/li\u003e\u003cli\u003e or once the entire contents of the handle has been read.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eOnce a semi-closed handle becomes closed, the contents of the\n associated list becomes fixed.  The contents of this final list is\n only partially specified: it will contain at least all the items of\n the stream that were evaluated prior to the handle becoming closed.\n\u003c/p\u003e\u003cp\u003eAny I/O errors encountered while a handle is semi-closed are simply\n discarded.\n\u003c/p\u003e\u003cp\u003eThis operation may fail with:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eisEOFError\u003c/a\u003e\u003c/code\u003e if the end of file has been reached.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Hledger.Utils.UTF8IOCompat",
          "name": "hGetContents",
          "package": "hledger-lib",
          "signature": "Handle -\u003e IO String",
          "type": "function"
        },
        "index": {
          "description": "Computation hGetContents hdl returns the list of characters corresponding to the unread portion of the channel or file managed by hdl which is put into an intermediate state semi-closed In this state hdl is effectively closed but items are read from hdl on demand and accumulated in special list returned by hGetContents hdl Any operation that fails because handle is closed also fails if handle is semi-closed The only exception is hClose semi-closed handle becomes closed if hClose is applied to it if an error occurs when reading an item from the handle or once the entire contents of the handle has been read Once semi-closed handle becomes closed the contents of the associated list becomes fixed The contents of this final list is only partially specified it will contain at least all the items of the stream that were evaluated prior to the handle becoming closed Any errors encountered while handle is semi-closed are simply discarded This operation may fail with isEOFError if the end of file has been reached",
          "hierarchy": "Hledger Utils UTF8IOCompat",
          "module": "Hledger.Utils.UTF8IOCompat",
          "name": "hGetContents",
          "normalized": "Handle-\u003eIO String",
          "package": "hledger-lib",
          "partial": "Get Contents",
          "signature": "Handle-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Utils-UTF8IOCompat.html#v:hGetContents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComputation \u003ccode\u003e\u003ca\u003ehPutStr\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ehdl s\u003c/code\u003e writes the string\n \u003ccode\u003es\u003c/code\u003e to the file or channel managed by \u003ccode\u003ehdl\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis operation may fail with:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eisFullError\u003c/a\u003e\u003c/code\u003e if the device is full; or\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eisPermissionError\u003c/a\u003e\u003c/code\u003e if another system resource limit would be exceeded.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Hledger.Utils.UTF8IOCompat",
          "name": "hPutStr",
          "package": "hledger-lib",
          "signature": "Handle -\u003e String -\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Computation hPutStr hdl writes the string to the file or channel managed by hdl This operation may fail with isFullError if the device is full or isPermissionError if another system resource limit would be exceeded",
          "hierarchy": "Hledger Utils UTF8IOCompat",
          "module": "Hledger.Utils.UTF8IOCompat",
          "name": "hPutStr",
          "normalized": "Handle-\u003eString-\u003eIO()",
          "package": "hledger-lib",
          "partial": "Put Str",
          "signature": "Handle-\u003eString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Utils-UTF8IOCompat.html#v:hPutStr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe same as \u003ccode\u003e\u003ca\u003ehPutStr\u003c/a\u003e\u003c/code\u003e, but adds a newline character.\n\u003c/p\u003e",
          "module": "Hledger.Utils.UTF8IOCompat",
          "name": "hPutStrLn",
          "package": "hledger-lib",
          "signature": "Handle -\u003e String -\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "The same as hPutStr but adds newline character",
          "hierarchy": "Hledger Utils UTF8IOCompat",
          "module": "Hledger.Utils.UTF8IOCompat",
          "name": "hPutStrLn",
          "normalized": "Handle-\u003eString-\u003eIO()",
          "package": "hledger-lib",
          "partial": "Put Str Ln",
          "signature": "Handle-\u003eString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Utils-UTF8IOCompat.html#v:hPutStrLn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a string to the standard output device\n (same as \u003ccode\u003e\u003ca\u003ehPutStr\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003estdout\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Hledger.Utils.UTF8IOCompat",
          "name": "putStr",
          "package": "hledger-lib",
          "signature": "String -\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Write string to the standard output device same as hPutStr stdout",
          "hierarchy": "Hledger Utils UTF8IOCompat",
          "module": "Hledger.Utils.UTF8IOCompat",
          "name": "putStr",
          "normalized": "String-\u003eIO()",
          "package": "hledger-lib",
          "partial": "Str",
          "signature": "String-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Utils-UTF8IOCompat.html#v:putStr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe same as \u003ccode\u003e\u003ca\u003eputStr\u003c/a\u003e\u003c/code\u003e, but adds a newline character.\n\u003c/p\u003e",
          "module": "Hledger.Utils.UTF8IOCompat",
          "name": "putStrLn",
          "package": "hledger-lib",
          "signature": "String -\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "The same as putStr but adds newline character",
          "hierarchy": "Hledger Utils UTF8IOCompat",
          "module": "Hledger.Utils.UTF8IOCompat",
          "name": "putStrLn",
          "normalized": "String-\u003eIO()",
          "package": "hledger-lib",
          "partial": "Str Ln",
          "signature": "String-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Utils-UTF8IOCompat.html#v:putStrLn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ereadFile\u003c/a\u003e\u003c/code\u003e function reads a file and\n returns the contents of the file as a string.\n The file is read lazily, on demand, as with \u003ccode\u003e\u003ca\u003egetContents\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Hledger.Utils.UTF8IOCompat",
          "name": "readFile",
          "package": "hledger-lib",
          "signature": "FilePath -\u003e IO String",
          "type": "function"
        },
        "index": {
          "description": "The readFile function reads file and returns the contents of the file as string The file is read lazily on demand as with getContents",
          "hierarchy": "Hledger Utils UTF8IOCompat",
          "module": "Hledger.Utils.UTF8IOCompat",
          "name": "readFile",
          "normalized": "FilePath-\u003eIO String",
          "package": "hledger-lib",
          "partial": "File",
          "signature": "FilePath-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Utils-UTF8IOCompat.html#v:readFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a unicode string to a system string, encoding with UTF-8 if\n we are on a posix platform with GHC \u003c 7.2.\n\u003c/p\u003e",
          "module": "[\"Hledger.Utils.UTF8IOCompat\",\"Hledger.Utils\"]",
          "name": "toSystemString",
          "package": "hledger-lib",
          "signature": "String -\u003e SystemString",
          "source": "src/Hledger-Utils-UTF8IOCompat.html#toSystemString",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Utils-UTF8IOCompat.html#v:toSystemString\",\"http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Utils.html#v:toSystemString\"]"
        },
        "index": {
          "description": "Convert unicode string to system string encoding with UTF-8 if we are on posix platform with GHC",
          "hierarchy": "Hledger Utils UTF8IOCompat",
          "module": "Hledger.Utils.UTF8IOCompat",
          "name": "toSystemString",
          "normalized": "String-\u003eSystemString",
          "package": "hledger-lib",
          "partial": "System String",
          "signature": "String-\u003eSystemString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Utils-UTF8IOCompat.html#v:toSystemString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA SystemString-aware version of userError.\n\u003c/p\u003e",
          "module": "[\"Hledger.Utils.UTF8IOCompat\",\"Hledger.Utils\"]",
          "name": "userError'",
          "package": "hledger-lib",
          "signature": "String -\u003e IOError",
          "source": "src/Hledger-Utils-UTF8IOCompat.html#userError%27",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Utils-UTF8IOCompat.html#v:userError-39-\",\"http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Utils.html#v:userError-39-\"]"
        },
        "index": {
          "description": "SystemString-aware version of userError",
          "hierarchy": "Hledger Utils UTF8IOCompat",
          "module": "Hledger.Utils.UTF8IOCompat",
          "name": "userError'",
          "normalized": "String-\u003eIOError",
          "package": "hledger-lib",
          "partial": "Error'",
          "signature": "String-\u003eIOError",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Utils-UTF8IOCompat.html#v:userError-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe computation \u003ccode\u003e\u003ca\u003ewriteFile\u003c/a\u003e\u003c/code\u003e \u003ccode\u003efile str\u003c/code\u003e function writes the string \u003ccode\u003estr\u003c/code\u003e,\n to the file \u003ccode\u003efile\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Hledger.Utils.UTF8IOCompat",
          "name": "writeFile",
          "package": "hledger-lib",
          "signature": "FilePath -\u003e String -\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "The computation writeFile file str function writes the string str to the file file",
          "hierarchy": "Hledger Utils UTF8IOCompat",
          "module": "Hledger.Utils.UTF8IOCompat",
          "name": "writeFile",
          "normalized": "FilePath-\u003eString-\u003eIO()",
          "package": "hledger-lib",
          "partial": "File",
          "signature": "FilePath-\u003eString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Utils-UTF8IOCompat.html#v:writeFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eStandard imports and utilities which are useful everywhere, or needed low\nin the module hierarchy. This is the bottom of hledger's module graph.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Hledger.Utils",
          "name": "Utils",
          "package": "hledger-lib",
          "source": "src/Hledger-Utils.html",
          "type": "module"
        },
        "index": {
          "description": "Standard imports and utilities which are useful everywhere or needed low in the module hierarchy This is the bottom of hledger module graph",
          "hierarchy": "Hledger Utils",
          "module": "Hledger.Utils",
          "name": "Utils",
          "package": "hledger-lib",
          "partial": "Utils",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Utils.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn efficient-to-build tree suggested by Cale Gibbard, probably\n better than accountNameTreeFrom.\n\u003c/p\u003e",
          "module": "Hledger.Utils",
          "name": "FastTree",
          "package": "hledger-lib",
          "source": "src/Hledger-Utils.html#FastTree",
          "type": "newtype"
        },
        "index": {
          "description": "An efficient-to-build tree suggested by Cale Gibbard probably better than accountNameTreeFrom",
          "hierarchy": "Hledger Utils",
          "module": "Hledger.Utils",
          "name": "FastTree",
          "package": "hledger-lib",
          "partial": "Fast Tree",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Utils.html#t:FastTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA string received from or being passed to the operating system, such\n as a file path, command-line argument, or environment variable name or\n value. With GHC versions before 7.2 on some platforms (posix) these are\n typically encoded. When converting, we assume the encoding is UTF-8 (cf\n \u003ca\u003ehttp://www.dwheeler.com/essays/fixing-unix-linux-filenames.html#UTF8\u003c/a\u003e).\n\u003c/p\u003e",
          "module": "Hledger.Utils",
          "name": "SystemString",
          "package": "hledger-lib",
          "source": "src/Hledger-Utils-UTF8IOCompat.html#SystemString",
          "type": "type"
        },
        "index": {
          "description": "string received from or being passed to the operating system such as file path command-line argument or environment variable name or value With GHC versions before on some platforms posix these are typically encoded When converting we assume the encoding is UTF-8 cf http www.dwheeler.com essays fixing-unix-linux-filenames.html UTF8",
          "hierarchy": "Hledger Utils",
          "module": "Hledger.Utils",
          "name": "SystemString",
          "package": "hledger-lib",
          "partial": "System String",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Utils.html#t:SystemString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Utils",
          "name": "T",
          "package": "hledger-lib",
          "signature": "T (Map a (FastTree a))",
          "source": "src/Hledger-Utils.html#FastTree",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Utils",
          "module": "Hledger.Utils",
          "name": "T",
          "package": "hledger-lib",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Utils.html#v:T"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a function the specified number of times. Possibly uses O(n) stack ?\n\u003c/p\u003e",
          "module": "Hledger.Utils",
          "name": "applyN",
          "package": "hledger-lib",
          "signature": "Int -\u003e (a -\u003e a) -\u003e a -\u003e a",
          "source": "src/Hledger-Utils.html#applyN",
          "type": "function"
        },
        "index": {
          "description": "Apply function the specified number of times Possibly uses stack",
          "hierarchy": "Hledger Utils",
          "module": "Hledger.Utils",
          "name": "applyN",
          "normalized": "Int-\u003e(a-\u003ea)-\u003ea-\u003ea",
          "package": "hledger-lib",
          "signature": "Int-\u003e(a-\u003ea)-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Utils.html#v:applyN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAssert a parse result is successful, printing the parse error on failure.\n\u003c/p\u003e",
          "module": "Hledger.Utils",
          "name": "assertParse",
          "package": "hledger-lib",
          "signature": "Either ParseError a -\u003e Assertion",
          "source": "src/Hledger-Utils.html#assertParse",
          "type": "function"
        },
        "index": {
          "description": "Assert parse result is successful printing the parse error on failure",
          "hierarchy": "Hledger Utils",
          "module": "Hledger.Utils",
          "name": "assertParse",
          "normalized": "Either ParseError a-\u003eAssertion",
          "package": "hledger-lib",
          "partial": "Parse",
          "signature": "Either ParseError a-\u003eAssertion",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Utils.html#v:assertParse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAssert a parse result is some expected value, printing the parse error on failure.\n\u003c/p\u003e",
          "module": "Hledger.Utils",
          "name": "assertParseEqual",
          "package": "hledger-lib",
          "signature": "Either ParseError a -\u003e a -\u003e Assertion",
          "source": "src/Hledger-Utils.html#assertParseEqual",
          "type": "function"
        },
        "index": {
          "description": "Assert parse result is some expected value printing the parse error on failure",
          "hierarchy": "Hledger Utils",
          "module": "Hledger.Utils",
          "name": "assertParseEqual",
          "normalized": "Either ParseError a-\u003ea-\u003eAssertion",
          "package": "hledger-lib",
          "partial": "Parse Equal",
          "signature": "Either ParseError a-\u003ea-\u003eAssertion",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Utils.html#v:assertParseEqual"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAssert a parse result is successful, printing the parse error on failure.\n\u003c/p\u003e",
          "module": "Hledger.Utils",
          "name": "assertParseFailure",
          "package": "hledger-lib",
          "signature": "Either ParseError a -\u003e Assertion",
          "source": "src/Hledger-Utils.html#assertParseFailure",
          "type": "function"
        },
        "index": {
          "description": "Assert parse result is successful printing the parse error on failure",
          "hierarchy": "Hledger Utils",
          "module": "Hledger.Utils",
          "name": "assertParseFailure",
          "normalized": "Either ParseError a-\u003eAssertion",
          "package": "hledger-lib",
          "partial": "Parse Failure",
          "signature": "Either ParseError a-\u003eAssertion",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Utils.html#v:assertParseFailure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Utils",
          "name": "branches",
          "package": "hledger-lib",
          "signature": "Tree a -\u003e Forest a",
          "source": "src/Hledger-Utils.html#branches",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Utils",
          "module": "Hledger.Utils",
          "name": "branches",
          "normalized": "Tree a-\u003eForest a",
          "package": "hledger-lib",
          "signature": "Tree a-\u003eForest a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Utils.html#v:branches"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBacktracking choice, use this when alternatives share a prefix.\n Consumes no input if all choices fail.\n\u003c/p\u003e",
          "module": "Hledger.Utils",
          "name": "choice'",
          "package": "hledger-lib",
          "signature": "[GenParser tok st a] -\u003e GenParser tok st a",
          "source": "src/Hledger-Utils.html#choice%27",
          "type": "function"
        },
        "index": {
          "description": "Backtracking choice use this when alternatives share prefix Consumes no input if all choices fail",
          "hierarchy": "Hledger Utils",
          "module": "Hledger.Utils",
          "name": "choice'",
          "normalized": "[GenParser a b c]-\u003eGenParser a b c",
          "package": "hledger-lib",
          "signature": "[GenParser tok st a]-\u003eGenParser tok st a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Utils.html#v:choice-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClip a multi-line string to the specified width and height from the top left.\n\u003c/p\u003e",
          "module": "Hledger.Utils",
          "name": "cliptopleft",
          "package": "hledger-lib",
          "signature": "Int -\u003e Int -\u003e String -\u003e String",
          "source": "src/Hledger-Utils.html#cliptopleft",
          "type": "function"
        },
        "index": {
          "description": "Clip multi-line string to the specified width and height from the top left",
          "hierarchy": "Hledger Utils",
          "module": "Hledger.Utils",
          "name": "cliptopleft",
          "normalized": "Int-\u003eInt-\u003eString-\u003eString",
          "package": "hledger-lib",
          "signature": "Int-\u003eInt-\u003eString-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Utils.html#v:cliptopleft"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eJoin multi-line strings as side-by-side rectangular strings of the same height, bottom-padded.\n\u003c/p\u003e",
          "module": "Hledger.Utils",
          "name": "concatBottomPadded",
          "package": "hledger-lib",
          "signature": "[String] -\u003e String",
          "source": "src/Hledger-Utils.html#concatBottomPadded",
          "type": "function"
        },
        "index": {
          "description": "Join multi-line strings as side-by-side rectangular strings of the same height bottom-padded",
          "hierarchy": "Hledger Utils",
          "module": "Hledger.Utils",
          "name": "concatBottomPadded",
          "normalized": "[String]-\u003eString",
          "package": "hledger-lib",
          "partial": "Bottom Padded",
          "signature": "[String]-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Utils.html#v:concatBottomPadded"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eJoin multi-line strings as side-by-side rectangular strings of the same height, top-padded.\n\u003c/p\u003e",
          "module": "Hledger.Utils",
          "name": "concatTopPadded",
          "package": "hledger-lib",
          "signature": "[String] -\u003e String",
          "source": "src/Hledger-Utils.html#concatTopPadded",
          "type": "function"
        },
        "index": {
          "description": "Join multi-line strings as side-by-side rectangular strings of the same height top-padded",
          "hierarchy": "Hledger Utils",
          "module": "Hledger.Utils",
          "name": "concatTopPadded",
          "normalized": "[String]-\u003eString",
          "package": "hledger-lib",
          "partial": "Top Padded",
          "signature": "[String]-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Utils.html#v:concatTopPadded"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Utils",
          "name": "containsRegex",
          "package": "hledger-lib",
          "signature": "String -\u003e String -\u003e Bool",
          "source": "src/Hledger-Utils.html#containsRegex",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Utils",
          "module": "Hledger.Utils",
          "name": "containsRegex",
          "normalized": "String-\u003eString-\u003eBool",
          "package": "hledger-lib",
          "partial": "Regex",
          "signature": "String-\u003eString-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Utils.html#v:containsRegex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrint a message and a showable value to the console if the global\n debug level is non-zero.  Uses unsafePerformIO.\n\u003c/p\u003e",
          "module": "Hledger.Utils",
          "name": "dbg",
          "package": "hledger-lib",
          "signature": "String -\u003e a -\u003e a",
          "source": "src/Hledger-Utils.html#dbg",
          "type": "function"
        },
        "index": {
          "description": "Print message and showable value to the console if the global debug level is non-zero Uses unsafePerformIO",
          "hierarchy": "Hledger Utils",
          "module": "Hledger.Utils",
          "name": "dbg",
          "normalized": "String-\u003ea-\u003ea",
          "package": "hledger-lib",
          "signature": "String-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Utils.html#v:dbg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike dbg, then exit the program. Uses unsafePerformIO.\n\u003c/p\u003e",
          "module": "Hledger.Utils",
          "name": "dbgExit",
          "package": "hledger-lib",
          "signature": "String -\u003e a -\u003e a",
          "source": "src/Hledger-Utils.html#dbgExit",
          "type": "function"
        },
        "index": {
          "description": "Like dbg then exit the program Uses unsafePerformIO",
          "hierarchy": "Hledger Utils",
          "module": "Hledger.Utils",
          "name": "dbgExit",
          "normalized": "String-\u003ea-\u003ea",
          "package": "hledger-lib",
          "partial": "Exit",
          "signature": "String-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Utils.html#v:dbgExit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrint a showable value to the console, with a message, if the\n debug level is at or above the specified level (uses\n unsafePerformIO).\n Values are displayed with pprint. Field names are not shown, but the\n output is compact with smart line wrapping, long data elided,\n and slow calculations timed out.\n\u003c/p\u003e",
          "module": "Hledger.Utils",
          "name": "dbgpprint",
          "package": "hledger-lib",
          "signature": "Int -\u003e String -\u003e a -\u003e a",
          "source": "src/Hledger-Utils.html#dbgpprint",
          "type": "function"
        },
        "index": {
          "description": "Print showable value to the console with message if the debug level is at or above the specified level uses unsafePerformIO Values are displayed with pprint Field names are not shown but the output is compact with smart line wrapping long data elided and slow calculations timed out",
          "hierarchy": "Hledger Utils",
          "module": "Hledger.Utils",
          "name": "dbgpprint",
          "normalized": "Int-\u003eString-\u003ea-\u003ea",
          "package": "hledger-lib",
          "signature": "Int-\u003eString-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Utils.html#v:dbgpprint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrint a showable value to the console, with a message, if the\n debug level is at or above the specified level (uses\n unsafePerformIO).\n Values are displayed with ppShow, each field/constructor on its own line.\n\u003c/p\u003e",
          "module": "Hledger.Utils",
          "name": "dbgppshow",
          "package": "hledger-lib",
          "signature": "Int -\u003e String -\u003e a -\u003e a",
          "source": "src/Hledger-Utils.html#dbgppshow",
          "type": "function"
        },
        "index": {
          "description": "Print showable value to the console with message if the debug level is at or above the specified level uses unsafePerformIO Values are displayed with ppShow each field constructor on its own line",
          "hierarchy": "Hledger Utils",
          "module": "Hledger.Utils",
          "name": "dbgppshow",
          "normalized": "Int-\u003eString-\u003ea-\u003ea",
          "package": "hledger-lib",
          "signature": "Int-\u003eString-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Utils.html#v:dbgppshow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrint a showable value to the console, with a message, if the\n debug level is at or above the specified level (uses\n unsafePerformIO).\n Values are displayed with show, all on one line, which is hard to read.\n\u003c/p\u003e",
          "module": "Hledger.Utils",
          "name": "dbgshow",
          "package": "hledger-lib",
          "signature": "Int -\u003e String -\u003e a -\u003e a",
          "source": "src/Hledger-Utils.html#dbgshow",
          "type": "function"
        },
        "index": {
          "description": "Print showable value to the console with message if the debug level is at or above the specified level uses unsafePerformIO Values are displayed with show all on one line which is hard to read",
          "hierarchy": "Hledger Utils",
          "module": "Hledger.Utils",
          "name": "dbgshow",
          "normalized": "Int-\u003eString-\u003ea-\u003ea",
          "package": "hledger-lib",
          "signature": "Int-\u003eString-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Utils.html#v:dbgshow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGlobal debug level, which controls the verbosity of debug output\n on the console. The default is 0 meaning no debug output. The\n \u003ccode\u003e--debug\u003c/code\u003e command line flag sets it to 1, or \u003ccode\u003e--debug=N\u003c/code\u003e sets it to\n a higher value (note: not \u003ccode\u003e--debug N\u003c/code\u003e for some reason).  This uses\n unsafePerformIO and can be accessed from anywhere and before normal\n command-line processing. After command-line processing, it is also\n available as the \u003ccode\u003edebug_\u003c/code\u003e field of \u003ccode\u003e\u003ca\u003eCliOpts\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Hledger.Utils",
          "name": "debugLevel",
          "package": "hledger-lib",
          "signature": "Int",
          "source": "src/Hledger-Utils.html#debugLevel",
          "type": "function"
        },
        "index": {
          "description": "Global debug level which controls the verbosity of debug output on the console The default is meaning no debug output The debug command line flag sets it to or debug sets it to higher value note not debug for some reason This uses unsafePerformIO and can be accessed from anywhere and before normal command-line processing After command-line processing it is also available as the debug field of CliOpts",
          "hierarchy": "Hledger Utils",
          "module": "Hledger.Utils",
          "name": "debugLevel",
          "package": "hledger-lib",
          "partial": "Level",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Utils.html#v:debugLevel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Utils",
          "name": "difforzero",
          "package": "hledger-lib",
          "signature": "a -\u003e a -\u003e a",
          "source": "src/Hledger-Utils.html#difforzero",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Utils",
          "module": "Hledger.Utils",
          "name": "difforzero",
          "normalized": "a-\u003ea-\u003ea",
          "package": "hledger-lib",
          "signature": "a-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Utils.html#v:difforzero"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Utils",
          "name": "elideLeft",
          "package": "hledger-lib",
          "signature": "Int -\u003e [Char] -\u003e [Char]",
          "source": "src/Hledger-Utils.html#elideLeft",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Utils",
          "module": "Hledger.Utils",
          "name": "elideLeft",
          "normalized": "Int-\u003e[Char]-\u003e[Char]",
          "package": "hledger-lib",
          "partial": "Left",
          "signature": "Int-\u003e[Char]-\u003e[Char]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Utils.html#v:elideLeft"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Utils",
          "name": "elideRight",
          "package": "hledger-lib",
          "signature": "Int -\u003e [Char] -\u003e [Char]",
          "source": "src/Hledger-Utils.html#elideRight",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Utils",
          "module": "Hledger.Utils",
          "name": "elideRight",
          "normalized": "Int-\u003e[Char]-\u003e[Char]",
          "package": "hledger-lib",
          "partial": "Right",
          "signature": "Int-\u003e[Char]-\u003e[Char]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Utils.html#v:elideRight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Utils",
          "name": "emptyTree",
          "package": "hledger-lib",
          "signature": "FastTree a",
          "source": "src/Hledger-Utils.html#emptyTree",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Utils",
          "module": "Hledger.Utils",
          "name": "emptyTree",
          "package": "hledger-lib",
          "partial": "Tree",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Utils.html#v:emptyTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Utils",
          "name": "eolof",
          "package": "hledger-lib",
          "signature": "GenParser Char st ()",
          "source": "src/Hledger-Utils.html#eolof",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Utils",
          "module": "Hledger.Utils",
          "name": "eolof",
          "normalized": "GenParser Char a()",
          "package": "hledger-lib",
          "signature": "GenParser Char st()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Utils.html#v:eolof"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Utils",
          "name": "escapeQuotes",
          "package": "hledger-lib",
          "signature": "String -\u003e String",
          "source": "src/Hledger-Utils.html#escapeQuotes",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Utils",
          "module": "Hledger.Utils",
          "name": "escapeQuotes",
          "normalized": "String-\u003eString",
          "package": "hledger-lib",
          "partial": "Quotes",
          "signature": "String-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Utils.html#v:escapeQuotes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Utils",
          "name": "escapeSingleQuotes",
          "package": "hledger-lib",
          "signature": "String -\u003e String",
          "source": "src/Hledger-Utils.html#escapeSingleQuotes",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Utils",
          "module": "Hledger.Utils",
          "name": "escapeSingleQuotes",
          "normalized": "String-\u003eString",
          "package": "hledger-lib",
          "partial": "Single Quotes",
          "signature": "String-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Utils.html#v:escapeSingleQuotes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a possibly relative, possibly tilde-containing file path to an absolute one,\n given the current directory. ~username is not supported. Leave \u003ca\u003e-\u003c/a\u003e unchanged. \n\u003c/p\u003e",
          "module": "Hledger.Utils",
          "name": "expandPath",
          "package": "hledger-lib",
          "signature": "FilePath -\u003e FilePath -\u003e m FilePath",
          "source": "src/Hledger-Utils.html#expandPath",
          "type": "function"
        },
        "index": {
          "description": "Convert possibly relative possibly tilde-containing file path to an absolute one given the current directory username is not supported Leave unchanged",
          "hierarchy": "Hledger Utils",
          "module": "Hledger.Utils",
          "name": "expandPath",
          "normalized": "FilePath-\u003eFilePath-\u003ea FilePath",
          "package": "hledger-lib",
          "partial": "Path",
          "signature": "FilePath-\u003eFilePath-\u003em FilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Utils.html#v:expandPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFilter TestLists in a Test, recursively, preserving the structure.\n\u003c/p\u003e",
          "module": "Hledger.Utils",
          "name": "filterTests",
          "package": "hledger-lib",
          "signature": "(Test -\u003e Bool) -\u003e Test -\u003e Test",
          "source": "src/Hledger-Utils.html#filterTests",
          "type": "function"
        },
        "index": {
          "description": "Filter TestLists in Test recursively preserving the structure",
          "hierarchy": "Hledger Utils",
          "module": "Hledger.Utils",
          "name": "filterTests",
          "normalized": "(Test-\u003eBool)-\u003eTest-\u003eTest",
          "package": "hledger-lib",
          "partial": "Tests",
          "signature": "(Test-\u003eBool)-\u003eTest-\u003eTest",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Utils.html#v:filterTests"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Utils",
          "name": "firstJust",
          "package": "hledger-lib",
          "signature": "[Maybe a] -\u003e Maybe a",
          "source": "src/Hledger-Utils.html#firstJust",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Utils",
          "module": "Hledger.Utils",
          "name": "firstJust",
          "normalized": "[Maybe a]-\u003eMaybe a",
          "package": "hledger-lib",
          "partial": "Just",
          "signature": "[Maybe a]-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Utils.html#v:firstJust"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClip and pad a multi-line string to fill the specified width and height.\n\u003c/p\u003e",
          "module": "Hledger.Utils",
          "name": "fitto",
          "package": "hledger-lib",
          "signature": "Int -\u003e Int -\u003e String -\u003e String",
          "source": "src/Hledger-Utils.html#fitto",
          "type": "function"
        },
        "index": {
          "description": "Clip and pad multi-line string to fill the specified width and height",
          "hierarchy": "Hledger Utils",
          "module": "Hledger.Utils",
          "name": "fitto",
          "normalized": "Int-\u003eInt-\u003eString-\u003eString",
          "package": "hledger-lib",
          "signature": "Int-\u003eInt-\u003eString-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Utils.html#v:fitto"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFlatten a Test containing TestLists into a list of single tests.\n\u003c/p\u003e",
          "module": "Hledger.Utils",
          "name": "flattenTests",
          "package": "hledger-lib",
          "signature": "Test -\u003e [Test]",
          "source": "src/Hledger-Utils.html#flattenTests",
          "type": "function"
        },
        "index": {
          "description": "Flatten Test containing TestLists into list of single tests",
          "hierarchy": "Hledger Utils",
          "module": "Hledger.Utils",
          "name": "flattenTests",
          "normalized": "Test-\u003e[Test]",
          "package": "hledger-lib",
          "partial": "Tests",
          "signature": "Test-\u003e[Test]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Utils.html#v:flattenTests"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Utils",
          "name": "fromparse",
          "package": "hledger-lib",
          "signature": "Either ParseError a -\u003e a",
          "source": "src/Hledger-Utils.html#fromparse",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Utils",
          "module": "Hledger.Utils",
          "name": "fromparse",
          "normalized": "Either ParseError a-\u003ea",
          "package": "hledger-lib",
          "signature": "Either ParseError a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Utils.html#v:fromparse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Utils",
          "name": "getCurrentLocalTime",
          "package": "hledger-lib",
          "signature": "IO LocalTime",
          "source": "src/Hledger-Utils.html#getCurrentLocalTime",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Utils",
          "module": "Hledger.Utils",
          "name": "getCurrentLocalTime",
          "package": "hledger-lib",
          "partial": "Current Local Time",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Utils.html#v:getCurrentLocalTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimple way to assert something is some expected value, with no label.\n\u003c/p\u003e",
          "module": "Hledger.Utils",
          "name": "is",
          "package": "hledger-lib",
          "signature": "a -\u003e a -\u003e Assertion",
          "source": "src/Hledger-Utils.html#is",
          "type": "function"
        },
        "index": {
          "description": "Simple way to assert something is some expected value with no label",
          "hierarchy": "Hledger Utils",
          "module": "Hledger.Utils",
          "name": "is",
          "normalized": "a-\u003ea-\u003eAssertion",
          "package": "hledger-lib",
          "signature": "a-\u003ea-\u003eAssertion",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Utils.html#v:is"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Utils",
          "name": "isDoubleQuoted",
          "package": "hledger-lib",
          "signature": "[Char] -\u003e Bool",
          "source": "src/Hledger-Utils.html#isDoubleQuoted",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Utils",
          "module": "Hledger.Utils",
          "name": "isDoubleQuoted",
          "normalized": "[Char]-\u003eBool",
          "package": "hledger-lib",
          "partial": "Double Quoted",
          "signature": "[Char]-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Utils.html#v:isDoubleQuoted"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Utils",
          "name": "isLeft",
          "package": "hledger-lib",
          "signature": "Either a b -\u003e Bool",
          "source": "src/Hledger-Utils.html#isLeft",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Utils",
          "module": "Hledger.Utils",
          "name": "isLeft",
          "normalized": "Either a b-\u003eBool",
          "package": "hledger-lib",
          "partial": "Left",
          "signature": "Either a b-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Utils.html#v:isLeft"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Utils",
          "name": "isRight",
          "package": "hledger-lib",
          "signature": "Either a b -\u003e Bool",
          "source": "src/Hledger-Utils.html#isRight",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Utils",
          "module": "Hledger.Utils",
          "name": "isRight",
          "normalized": "Either a b-\u003eBool",
          "package": "hledger-lib",
          "partial": "Right",
          "signature": "Either a b-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Utils.html#v:isRight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Utils",
          "name": "isSingleQuoted",
          "package": "hledger-lib",
          "signature": "[Char] -\u003e Bool",
          "source": "src/Hledger-Utils.html#isSingleQuoted",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Utils",
          "module": "Hledger.Utils",
          "name": "isSingleQuoted",
          "normalized": "[Char]-\u003eBool",
          "package": "hledger-lib",
          "partial": "Single Quoted",
          "signature": "[Char]-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Utils.html#v:isSingleQuoted"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eList just the leaf nodes of a tree\n\u003c/p\u003e",
          "module": "Hledger.Utils",
          "name": "leaves",
          "package": "hledger-lib",
          "signature": "Tree a -\u003e [a]",
          "source": "src/Hledger-Utils.html#leaves",
          "type": "function"
        },
        "index": {
          "description": "List just the leaf nodes of tree",
          "hierarchy": "Hledger Utils",
          "module": "Hledger.Utils",
          "name": "leaves",
          "normalized": "Tree a-\u003e[a]",
          "package": "hledger-lib",
          "signature": "Tree a-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Utils.html#v:leaves"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Utils",
          "name": "lowercase",
          "package": "hledger-lib",
          "signature": "[Char] -\u003e [Char]",
          "source": "src/Hledger-Utils.html#lowercase",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Utils",
          "module": "Hledger.Utils",
          "name": "lowercase",
          "normalized": "[Char]-\u003e[Char]",
          "package": "hledger-lib",
          "signature": "[Char]-\u003e[Char]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Utils.html#v:lowercase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Utils",
          "name": "lstrip",
          "package": "hledger-lib",
          "signature": "String -\u003e String",
          "source": "src/Hledger-Utils.html#lstrip",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Utils",
          "module": "Hledger.Utils",
          "name": "lstrip",
          "normalized": "String-\u003eString",
          "package": "hledger-lib",
          "signature": "String-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Utils.html#v:lstrip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLabelled trace - like strace, with a label prepended.\n\u003c/p\u003e",
          "module": "Hledger.Utils",
          "name": "ltrace",
          "package": "hledger-lib",
          "signature": "String -\u003e a -\u003e a",
          "source": "src/Hledger-Utils.html#ltrace",
          "type": "function"
        },
        "index": {
          "description": "Labelled trace like strace with label prepended",
          "hierarchy": "Hledger Utils",
          "module": "Hledger.Utils",
          "name": "ltrace",
          "normalized": "String-\u003ea-\u003ea",
          "package": "hledger-lib",
          "signature": "String-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Utils.html#v:ltrace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Utils",
          "name": "mergeTrees",
          "package": "hledger-lib",
          "signature": "FastTree a -\u003e FastTree a -\u003e FastTree a",
          "source": "src/Hledger-Utils.html#mergeTrees",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Utils",
          "module": "Hledger.Utils",
          "name": "mergeTrees",
          "normalized": "FastTree a-\u003eFastTree a-\u003eFastTree a",
          "package": "hledger-lib",
          "partial": "Trees",
          "signature": "FastTree a-\u003eFastTree a-\u003eFastTree a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Utils.html#v:mergeTrees"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMonadic trace - like strace, but works as a standalone line in a monad.\n\u003c/p\u003e",
          "module": "Hledger.Utils",
          "name": "mtrace",
          "package": "hledger-lib",
          "signature": "a -\u003e m a",
          "source": "src/Hledger-Utils.html#mtrace",
          "type": "function"
        },
        "index": {
          "description": "Monadic trace like strace but works as standalone line in monad",
          "hierarchy": "Hledger Utils",
          "module": "Hledger.Utils",
          "name": "mtrace",
          "normalized": "a-\u003eb a",
          "package": "hledger-lib",
          "signature": "a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Utils.html#v:mtrace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Utils",
          "name": "nonspace",
          "package": "hledger-lib",
          "signature": "GenParser Char st Char",
          "source": "src/Hledger-Utils.html#nonspace",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Utils",
          "module": "Hledger.Utils",
          "name": "nonspace",
          "package": "hledger-lib",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Utils.html#v:nonspace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a multi-line string to a rectangular string bottom-padded to the specified height.\n\u003c/p\u003e",
          "module": "Hledger.Utils",
          "name": "padbottom",
          "package": "hledger-lib",
          "signature": "Int -\u003e String -\u003e String",
          "source": "src/Hledger-Utils.html#padbottom",
          "type": "function"
        },
        "index": {
          "description": "Convert multi-line string to rectangular string bottom-padded to the specified height",
          "hierarchy": "Hledger Utils",
          "module": "Hledger.Utils",
          "name": "padbottom",
          "normalized": "Int-\u003eString-\u003eString",
          "package": "hledger-lib",
          "signature": "Int-\u003eString-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Utils.html#v:padbottom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a multi-line string to a rectangular string left-padded to the specified width.\n\u003c/p\u003e",
          "module": "Hledger.Utils",
          "name": "padleft",
          "package": "hledger-lib",
          "signature": "Int -\u003e String -\u003e String",
          "source": "src/Hledger-Utils.html#padleft",
          "type": "function"
        },
        "index": {
          "description": "Convert multi-line string to rectangular string left-padded to the specified width",
          "hierarchy": "Hledger Utils",
          "module": "Hledger.Utils",
          "name": "padleft",
          "normalized": "Int-\u003eString-\u003eString",
          "package": "hledger-lib",
          "signature": "Int-\u003eString-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Utils.html#v:padleft"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a multi-line string to a rectangular string right-padded to the specified width.\n\u003c/p\u003e",
          "module": "Hledger.Utils",
          "name": "padright",
          "package": "hledger-lib",
          "signature": "Int -\u003e String -\u003e String",
          "source": "src/Hledger-Utils.html#padright",
          "type": "function"
        },
        "index": {
          "description": "Convert multi-line string to rectangular string right-padded to the specified width",
          "hierarchy": "Hledger Utils",
          "module": "Hledger.Utils",
          "name": "padright",
          "normalized": "Int-\u003eString-\u003eString",
          "package": "hledger-lib",
          "signature": "Int-\u003eString-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Utils.html#v:padright"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a multi-line string to a rectangular string top-padded to the specified height.\n\u003c/p\u003e",
          "module": "Hledger.Utils",
          "name": "padtop",
          "package": "hledger-lib",
          "signature": "Int -\u003e String -\u003e String",
          "source": "src/Hledger-Utils.html#padtop",
          "type": "function"
        },
        "index": {
          "description": "Convert multi-line string to rectangular string top-padded to the specified height",
          "hierarchy": "Hledger Utils",
          "module": "Hledger.Utils",
          "name": "padtop",
          "normalized": "Int-\u003eString-\u003eString",
          "package": "hledger-lib",
          "signature": "Int-\u003eString-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Utils.html#v:padtop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Utils",
          "name": "parseWithCtx",
          "package": "hledger-lib",
          "signature": "b -\u003e GenParser Char b a -\u003e String -\u003e Either ParseError a",
          "source": "src/Hledger-Utils.html#parseWithCtx",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Utils",
          "module": "Hledger.Utils",
          "name": "parseWithCtx",
          "normalized": "a-\u003eGenParser Char a b-\u003eString-\u003eEither ParseError b",
          "package": "hledger-lib",
          "partial": "With Ctx",
          "signature": "b-\u003eGenParser Char b a-\u003eString-\u003eEither ParseError a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Utils.html#v:parseWithCtx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Utils",
          "name": "parseerror",
          "package": "hledger-lib",
          "signature": "ParseError -\u003e a",
          "source": "src/Hledger-Utils.html#parseerror",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Utils",
          "module": "Hledger.Utils",
          "name": "parseerror",
          "normalized": "ParseError-\u003ea",
          "package": "hledger-lib",
          "signature": "ParseError-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Utils.html#v:parseerror"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Utils",
          "name": "parsewith",
          "package": "hledger-lib",
          "signature": "Parser a -\u003e String -\u003e Either ParseError a",
          "source": "src/Hledger-Utils.html#parsewith",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Utils",
          "module": "Hledger.Utils",
          "name": "parsewith",
          "normalized": "Parser a-\u003eString-\u003eEither ParseError a",
          "package": "hledger-lib",
          "signature": "Parser a-\u003eString-\u003eEither ParseError a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Utils.html#v:parsewith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrint a message and parsec debug info (parse position and next\n input) to the console when the debug level is at or above\n this level. Uses unsafePerformIO.\n pdbgAt :: GenParser m =\u003e Float -\u003e String -\u003e m ()\n\u003c/p\u003e",
          "module": "Hledger.Utils",
          "name": "pdbg",
          "package": "hledger-lib",
          "signature": "Int -\u003e String -\u003e ParsecT [Char] st Identity ()",
          "source": "src/Hledger-Utils.html#pdbg",
          "type": "function"
        },
        "index": {
          "description": "Print message and parsec debug info parse position and next input to the console when the debug level is at or above this level Uses unsafePerformIO pdbgAt GenParser Float String",
          "hierarchy": "Hledger Utils",
          "module": "Hledger.Utils",
          "name": "pdbg",
          "normalized": "Int-\u003eString-\u003eParsecT[Char]a Identity()",
          "package": "hledger-lib",
          "signature": "Int-\u003eString-\u003eParsecT[Char]st Identity()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Utils.html#v:pdbg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a generic value into a pretty \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e, if possible.\n\u003c/p\u003e",
          "module": "Hledger.Utils",
          "name": "ppShow",
          "package": "hledger-lib",
          "signature": "a -\u003e String",
          "type": "function"
        },
        "index": {
          "description": "Convert generic value into pretty String if possible",
          "hierarchy": "Hledger Utils",
          "module": "Hledger.Utils",
          "name": "ppShow",
          "normalized": "a-\u003eString",
          "package": "hledger-lib",
          "partial": "Show",
          "signature": "a-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Utils.html#v:ppShow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Utils",
          "name": "printParseError",
          "package": "hledger-lib",
          "signature": "a -\u003e IO ()",
          "source": "src/Hledger-Utils.html#printParseError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Utils",
          "module": "Hledger.Utils",
          "name": "printParseError",
          "normalized": "a-\u003eIO()",
          "package": "hledger-lib",
          "partial": "Parse Error",
          "signature": "a-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Utils.html#v:printParseError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParsec trace - show the current parsec position and next input,\n and the provided label if it's non-null.\n\u003c/p\u003e",
          "module": "Hledger.Utils",
          "name": "ptrace",
          "package": "hledger-lib",
          "signature": "String -\u003e GenParser Char st ()",
          "source": "src/Hledger-Utils.html#ptrace",
          "type": "function"
        },
        "index": {
          "description": "Parsec trace show the current parsec position and next input and the provided label if it non-null",
          "hierarchy": "Hledger Utils",
          "module": "Hledger.Utils",
          "name": "ptrace",
          "normalized": "String-\u003eGenParser Char a()",
          "package": "hledger-lib",
          "signature": "String-\u003eGenParser Char st()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Utils.html#v:ptrace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrap a string in single quotes, and -prefix any embedded single\n quotes, if it contains whitespace and is not already single- or\n double-quoted.\n\u003c/p\u003e",
          "module": "Hledger.Utils",
          "name": "quoteIfSpaced",
          "package": "hledger-lib",
          "signature": "String -\u003e String",
          "source": "src/Hledger-Utils.html#quoteIfSpaced",
          "type": "function"
        },
        "index": {
          "description": "Wrap string in single quotes and prefix any embedded single quotes if it contains whitespace and is not already single or double-quoted",
          "hierarchy": "Hledger Utils",
          "module": "Hledger.Utils",
          "name": "quoteIfSpaced",
          "normalized": "String-\u003eString",
          "package": "hledger-lib",
          "partial": "If Spaced",
          "signature": "String-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Utils.html#v:quoteIfSpaced"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead a file in universal newline mode, handling whatever newline convention it may contain.\n\u003c/p\u003e",
          "module": "Hledger.Utils",
          "name": "readFile'",
          "package": "hledger-lib",
          "signature": "FilePath -\u003e IO String",
          "source": "src/Hledger-Utils.html#readFile%27",
          "type": "function"
        },
        "index": {
          "description": "Read file in universal newline mode handling whatever newline convention it may contain",
          "hierarchy": "Hledger Utils",
          "module": "Hledger.Utils",
          "name": "readFile'",
          "normalized": "FilePath-\u003eIO String",
          "package": "hledger-lib",
          "partial": "File'",
          "signature": "FilePath-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Utils.html#v:readFile-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Utils",
          "name": "regexMatch",
          "package": "hledger-lib",
          "signature": "String -\u003e String -\u003e Maybe (RegexResult, MatchList)",
          "source": "src/Hledger-Utils.html#regexMatch",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Utils",
          "module": "Hledger.Utils",
          "name": "regexMatch",
          "normalized": "String-\u003eString-\u003eMaybe(RegexResult,MatchList)",
          "package": "hledger-lib",
          "partial": "Match",
          "signature": "String-\u003eString-\u003eMaybe(RegexResult,MatchList)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Utils.html#v:regexMatch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Utils",
          "name": "regexMatchCI",
          "package": "hledger-lib",
          "signature": "String -\u003e String -\u003e Maybe (RegexResult, MatchList)",
          "source": "src/Hledger-Utils.html#regexMatchCI",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Utils",
          "module": "Hledger.Utils",
          "name": "regexMatchCI",
          "normalized": "String-\u003eString-\u003eMaybe(RegexResult,MatchList)",
          "package": "hledger-lib",
          "partial": "Match CI",
          "signature": "String-\u003eString-\u003eMaybe(RegexResult,MatchList)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Utils.html#v:regexMatchCI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Utils",
          "name": "regexMatches",
          "package": "hledger-lib",
          "signature": "String -\u003e String -\u003e Bool",
          "source": "src/Hledger-Utils.html#regexMatches",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Utils",
          "module": "Hledger.Utils",
          "name": "regexMatches",
          "normalized": "String-\u003eString-\u003eBool",
          "package": "hledger-lib",
          "partial": "Matches",
          "signature": "String-\u003eString-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Utils.html#v:regexMatches"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Utils",
          "name": "regexMatchesCI",
          "package": "hledger-lib",
          "signature": "String -\u003e String -\u003e Bool",
          "source": "src/Hledger-Utils.html#regexMatchesCI",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Utils",
          "module": "Hledger.Utils",
          "name": "regexMatchesCI",
          "normalized": "String-\u003eString-\u003eBool",
          "package": "hledger-lib",
          "partial": "Matches CI",
          "signature": "String-\u003eString-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Utils.html#v:regexMatchesCI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Utils",
          "name": "regexMatchesCIRegexCompat",
          "package": "hledger-lib",
          "signature": "String -\u003e String -\u003e Bool",
          "source": "src/Hledger-Utils.html#regexMatchesCIRegexCompat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Utils",
          "module": "Hledger.Utils",
          "name": "regexMatchesCIRegexCompat",
          "normalized": "String-\u003eString-\u003eBool",
          "package": "hledger-lib",
          "partial": "Matches CIRegex Compat",
          "signature": "String-\u003eString-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Utils.html#v:regexMatchesCIRegexCompat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Utils",
          "name": "regexMatchesRegexCompat",
          "package": "hledger-lib",
          "signature": "String -\u003e String -\u003e Bool",
          "source": "src/Hledger-Utils.html#regexMatchesRegexCompat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Utils",
          "module": "Hledger.Utils",
          "name": "regexMatchesRegexCompat",
          "normalized": "String-\u003eString-\u003eBool",
          "package": "hledger-lib",
          "partial": "Matches Regex Compat",
          "signature": "String-\u003eString-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Utils.html#v:regexMatchesRegexCompat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Utils",
          "name": "regexReplace",
          "package": "hledger-lib",
          "signature": "String -\u003e String -\u003e String -\u003e String",
          "source": "src/Hledger-Utils.html#regexReplace",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Utils",
          "module": "Hledger.Utils",
          "name": "regexReplace",
          "normalized": "String-\u003eString-\u003eString-\u003eString",
          "package": "hledger-lib",
          "partial": "Replace",
          "signature": "String-\u003eString-\u003eString-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Utils.html#v:regexReplace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Utils",
          "name": "regexReplaceBy",
          "package": "hledger-lib",
          "signature": "String -\u003e (String -\u003e String) -\u003e String -\u003e String",
          "source": "src/Hledger-Utils.html#regexReplaceBy",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Utils",
          "module": "Hledger.Utils",
          "name": "regexReplaceBy",
          "normalized": "String-\u003e(String-\u003eString)-\u003eString-\u003eString",
          "package": "hledger-lib",
          "partial": "Replace By",
          "signature": "String-\u003e(String-\u003eString)-\u003eString-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Utils.html#v:regexReplaceBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Utils",
          "name": "regexReplaceCI",
          "package": "hledger-lib",
          "signature": "String -\u003e String -\u003e String -\u003e String",
          "source": "src/Hledger-Utils.html#regexReplaceCI",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Utils",
          "module": "Hledger.Utils",
          "name": "regexReplaceCI",
          "normalized": "String-\u003eString-\u003eString-\u003eString",
          "package": "hledger-lib",
          "partial": "Replace CI",
          "signature": "String-\u003eString-\u003eString-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Utils.html#v:regexReplaceCI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Utils",
          "name": "regexSplit",
          "package": "hledger-lib",
          "signature": "String -\u003e String -\u003e [String]",
          "source": "src/Hledger-Utils.html#regexSplit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Utils",
          "module": "Hledger.Utils",
          "name": "regexSplit",
          "normalized": "String-\u003eString-\u003e[String]",
          "package": "hledger-lib",
          "partial": "Split",
          "signature": "String-\u003eString-\u003e[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Utils.html#v:regexSplit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Utils",
          "name": "regexToCaseInsensitive",
          "package": "hledger-lib",
          "signature": "String -\u003e String",
          "source": "src/Hledger-Utils.html#regexToCaseInsensitive",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Utils",
          "module": "Hledger.Utils",
          "name": "regexToCaseInsensitive",
          "normalized": "String-\u003eString",
          "package": "hledger-lib",
          "partial": "To Case Insensitive",
          "signature": "String-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Utils.html#v:regexToCaseInsensitive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Utils",
          "name": "restofline",
          "package": "hledger-lib",
          "signature": "GenParser Char st String",
          "source": "src/Hledger-Utils.html#restofline",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Utils",
          "module": "Hledger.Utils",
          "name": "restofline",
          "package": "hledger-lib",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Utils.html#v:restofline"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Utils",
          "name": "root",
          "package": "hledger-lib",
          "signature": "Tree a -\u003e a",
          "source": "src/Hledger-Utils.html#root",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Utils",
          "module": "Hledger.Utils",
          "name": "root",
          "normalized": "Tree a-\u003ea",
          "package": "hledger-lib",
          "signature": "Tree a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Utils.html#v:root"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Utils",
          "name": "rstrip",
          "package": "hledger-lib",
          "signature": "[Char] -\u003e [Char]",
          "source": "src/Hledger-Utils.html#rstrip",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Utils",
          "module": "Hledger.Utils",
          "name": "rstrip",
          "normalized": "[Char]-\u003e[Char]",
          "package": "hledger-lib",
          "signature": "[Char]-\u003e[Char]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Utils.html#v:rstrip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Utils",
          "name": "showDateParseError",
          "package": "hledger-lib",
          "signature": "ParseError -\u003e String",
          "source": "src/Hledger-Utils.html#showDateParseError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Utils",
          "module": "Hledger.Utils",
          "name": "showDateParseError",
          "normalized": "ParseError-\u003eString",
          "package": "hledger-lib",
          "partial": "Date Parse Error",
          "signature": "ParseError-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Utils.html#v:showDateParseError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Utils",
          "name": "showParseError",
          "package": "hledger-lib",
          "signature": "ParseError -\u003e String",
          "source": "src/Hledger-Utils.html#showParseError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Utils",
          "module": "Hledger.Utils",
          "name": "showParseError",
          "normalized": "ParseError-\u003eString",
          "package": "hledger-lib",
          "partial": "Parse Error",
          "signature": "ParseError-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Utils.html#v:showParseError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eshow a compact ascii representation of a forest\n\u003c/p\u003e",
          "module": "Hledger.Utils",
          "name": "showforest",
          "package": "hledger-lib",
          "signature": "Forest a -\u003e String",
          "source": "src/Hledger-Utils.html#showforest",
          "type": "function"
        },
        "index": {
          "description": "show compact ascii representation of forest",
          "hierarchy": "Hledger Utils",
          "module": "Hledger.Utils",
          "name": "showforest",
          "normalized": "Forest a-\u003eString",
          "package": "hledger-lib",
          "signature": "Forest a-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Utils.html#v:showforest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eshow a compact ascii representation of a tree\n\u003c/p\u003e",
          "module": "Hledger.Utils",
          "name": "showtree",
          "package": "hledger-lib",
          "signature": "Tree a -\u003e String",
          "source": "src/Hledger-Utils.html#showtree",
          "type": "function"
        },
        "index": {
          "description": "show compact ascii representation of tree",
          "hierarchy": "Hledger Utils",
          "module": "Hledger.Utils",
          "name": "showtree",
          "normalized": "Tree a-\u003eString",
          "package": "hledger-lib",
          "signature": "Tree a-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Utils.html#v:showtree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSingle-quote this string if it contains whitespace or double-quotes\n\u003c/p\u003e",
          "module": "Hledger.Utils",
          "name": "singleQuoteIfNeeded",
          "package": "hledger-lib",
          "signature": "[Char] -\u003e [Char]",
          "source": "src/Hledger-Utils.html#singleQuoteIfNeeded",
          "type": "function"
        },
        "index": {
          "description": "Single-quote this string if it contains whitespace or double-quotes",
          "hierarchy": "Hledger Utils",
          "module": "Hledger.Utils",
          "name": "singleQuoteIfNeeded",
          "normalized": "[Char]-\u003e[Char]",
          "package": "hledger-lib",
          "partial": "Quote If Needed",
          "signature": "[Char]-\u003e[Char]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Utils.html#v:singleQuoteIfNeeded"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Utils",
          "name": "spacenonewline",
          "package": "hledger-lib",
          "signature": "GenParser Char st Char",
          "source": "src/Hledger-Utils.html#spacenonewline",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Utils",
          "module": "Hledger.Utils",
          "name": "spacenonewline",
          "package": "hledger-lib",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Utils.html#v:spacenonewline"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Utils",
          "name": "splitAtElement",
          "package": "hledger-lib",
          "signature": "a -\u003e [a] -\u003e [[a]]",
          "source": "src/Hledger-Utils.html#splitAtElement",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Utils",
          "module": "Hledger.Utils",
          "name": "splitAtElement",
          "normalized": "a-\u003e[a]-\u003e[[a]]",
          "package": "hledger-lib",
          "partial": "At Element",
          "signature": "a-\u003e[a]-\u003e[[a]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Utils.html#v:splitAtElement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTrace (print on stdout at runtime) a showable value.\n (for easily tracing in the middle of a complex expression)\n\u003c/p\u003e",
          "module": "Hledger.Utils",
          "name": "strace",
          "package": "hledger-lib",
          "signature": "a -\u003e a",
          "source": "src/Hledger-Utils.html#strace",
          "type": "function"
        },
        "index": {
          "description": "Trace print on stdout at runtime showable value for easily tracing in the middle of complex expression",
          "hierarchy": "Hledger Utils",
          "module": "Hledger.Utils",
          "name": "strace",
          "normalized": "a-\u003ea",
          "package": "hledger-lib",
          "signature": "a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Utils.html#v:strace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Utils",
          "name": "strip",
          "package": "hledger-lib",
          "signature": "[Char] -\u003e String",
          "source": "src/Hledger-Utils.html#strip",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Utils",
          "module": "Hledger.Utils",
          "name": "strip",
          "normalized": "[Char]-\u003eString",
          "package": "hledger-lib",
          "signature": "[Char]-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Utils.html#v:strip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Utils",
          "name": "stripbrackets",
          "package": "hledger-lib",
          "signature": "String -\u003e String",
          "source": "src/Hledger-Utils.html#stripbrackets",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Utils",
          "module": "Hledger.Utils",
          "name": "stripbrackets",
          "normalized": "String-\u003eString",
          "package": "hledger-lib",
          "signature": "String-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Utils.html#v:stripbrackets"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStrip one matching pair of single or double quotes on the ends of a string.\n\u003c/p\u003e",
          "module": "Hledger.Utils",
          "name": "stripquotes",
          "package": "hledger-lib",
          "signature": "String -\u003e String",
          "source": "src/Hledger-Utils.html#stripquotes",
          "type": "function"
        },
        "index": {
          "description": "Strip one matching pair of single or double quotes on the ends of string",
          "hierarchy": "Hledger Utils",
          "module": "Hledger.Utils",
          "name": "stripquotes",
          "normalized": "String-\u003eString",
          "package": "hledger-lib",
          "signature": "String-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Utils.html#v:stripquotes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Utils",
          "name": "subs",
          "package": "hledger-lib",
          "signature": "Tree a -\u003e Forest a",
          "source": "src/Hledger-Utils.html#subs",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Utils",
          "module": "Hledger.Utils",
          "name": "subs",
          "normalized": "Tree a-\u003eForest a",
          "package": "hledger-lib",
          "signature": "Tree a-\u003eForest a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Utils.html#v:subs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eget the sub-tree rooted at the first (left-most, depth-first) occurrence\n of the specified node value\n\u003c/p\u003e",
          "module": "Hledger.Utils",
          "name": "subtreeat",
          "package": "hledger-lib",
          "signature": "a -\u003e Tree a -\u003e Maybe (Tree a)",
          "source": "src/Hledger-Utils.html#subtreeat",
          "type": "function"
        },
        "index": {
          "description": "get the sub-tree rooted at the first left-most depth-first occurrence of the specified node value",
          "hierarchy": "Hledger Utils",
          "module": "Hledger.Utils",
          "name": "subtreeat",
          "normalized": "a-\u003eTree a-\u003eMaybe(Tree a)",
          "package": "hledger-lib",
          "signature": "a-\u003eTree a-\u003eMaybe(Tree a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Utils.html#v:subtreeat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eget the sub-tree for the specified node value in the first tree in\n forest in which it occurs.\n\u003c/p\u003e",
          "module": "Hledger.Utils",
          "name": "subtreeinforest",
          "package": "hledger-lib",
          "signature": "a -\u003e [Tree a] -\u003e Maybe (Tree a)",
          "source": "src/Hledger-Utils.html#subtreeinforest",
          "type": "function"
        },
        "index": {
          "description": "get the sub-tree for the specified node value in the first tree in forest in which it occurs",
          "hierarchy": "Hledger Utils",
          "module": "Hledger.Utils",
          "name": "subtreeinforest",
          "normalized": "a-\u003e[Tree a]-\u003eMaybe(Tree a)",
          "package": "hledger-lib",
          "signature": "a-\u003e[Tree a]-\u003eMaybe(Tree a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Utils.html#v:subtreeinforest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet a Test's label, or the empty string.\n\u003c/p\u003e",
          "module": "Hledger.Utils",
          "name": "testName",
          "package": "hledger-lib",
          "signature": "Test -\u003e String",
          "source": "src/Hledger-Utils.html#testName",
          "type": "function"
        },
        "index": {
          "description": "Get Test label or the empty string",
          "hierarchy": "Hledger Utils",
          "module": "Hledger.Utils",
          "name": "testName",
          "normalized": "Test-\u003eString",
          "package": "hledger-lib",
          "partial": "Name",
          "signature": "Test-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Utils.html#v:testName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003etrace\u003c/a\u003e\u003c/code\u003e function outputs the trace message given as its first argument,\nbefore returning the second argument as its result.\n\u003c/p\u003e\u003cp\u003eFor example, this returns the value of \u003ccode\u003ef x\u003c/code\u003e but first outputs the message.\n\u003c/p\u003e\u003cpre\u003e trace (\"calling f with x = \" ++ show x) (f x)\n\u003c/pre\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003etrace\u003c/a\u003e\u003c/code\u003e function should \u003cem\u003eonly\u003c/em\u003e be used for debugging, or for monitoring\nexecution. The function is not referentially transparent: its type indicates\nthat it is a pure function but it has the side effect of outputting the\ntrace message.\n\u003c/p\u003e",
          "module": "Hledger.Utils",
          "name": "trace",
          "package": "hledger-lib",
          "signature": "String -\u003e a -\u003e a",
          "type": "function"
        },
        "index": {
          "description": "The trace function outputs the trace message given as its first argument before returning the second argument as its result For example this returns the value of but first outputs the message trace calling with show The trace function should only be used for debugging or for monitoring execution The function is not referentially transparent its type indicates that it is pure function but it has the side effect of outputting the trace message",
          "hierarchy": "Hledger Utils",
          "module": "Hledger.Utils",
          "name": "trace",
          "normalized": "String-\u003ea-\u003ea",
          "package": "hledger-lib",
          "signature": "String-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Utils.html#v:trace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCustom trace - like strace, with a custom show function.\n\u003c/p\u003e",
          "module": "Hledger.Utils",
          "name": "traceWith",
          "package": "hledger-lib",
          "signature": "(a -\u003e String) -\u003e a -\u003e a",
          "source": "src/Hledger-Utils.html#traceWith",
          "type": "function"
        },
        "index": {
          "description": "Custom trace like strace with custom show function",
          "hierarchy": "Hledger Utils",
          "module": "Hledger.Utils",
          "name": "traceWith",
          "normalized": "(a-\u003eString)-\u003ea-\u003ea",
          "package": "hledger-lib",
          "partial": "With",
          "signature": "(a-\u003eString)-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Utils.html#v:traceWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Utils",
          "name": "treeFromPath",
          "package": "hledger-lib",
          "signature": "[a] -\u003e FastTree a",
          "source": "src/Hledger-Utils.html#treeFromPath",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Utils",
          "module": "Hledger.Utils",
          "name": "treeFromPath",
          "normalized": "[a]-\u003eFastTree a",
          "package": "hledger-lib",
          "partial": "From Path",
          "signature": "[a]-\u003eFastTree a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Utils.html#v:treeFromPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Utils",
          "name": "treeFromPaths",
          "package": "hledger-lib",
          "signature": "[[a]] -\u003e FastTree a",
          "source": "src/Hledger-Utils.html#treeFromPaths",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Utils",
          "module": "Hledger.Utils",
          "name": "treeFromPaths",
          "normalized": "[[a]]-\u003eFastTree a",
          "package": "hledger-lib",
          "partial": "From Paths",
          "signature": "[[a]]-\u003eFastTree a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Utils.html#v:treeFromPaths"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eis predicate true in any node of tree ?\n\u003c/p\u003e",
          "module": "Hledger.Utils",
          "name": "treeany",
          "package": "hledger-lib",
          "signature": "(a -\u003e Bool) -\u003e Tree a -\u003e Bool",
          "source": "src/Hledger-Utils.html#treeany",
          "type": "function"
        },
        "index": {
          "description": "is predicate true in any node of tree",
          "hierarchy": "Hledger Utils",
          "module": "Hledger.Utils",
          "name": "treeany",
          "normalized": "(a-\u003eBool)-\u003eTree a-\u003eBool",
          "package": "hledger-lib",
          "signature": "(a-\u003eBool)-\u003eTree a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Utils.html#v:treeany"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eremove all subtrees whose nodes do not fulfill predicate\n\u003c/p\u003e",
          "module": "Hledger.Utils",
          "name": "treefilter",
          "package": "hledger-lib",
          "signature": "(a -\u003e Bool) -\u003e Tree a -\u003e Tree a",
          "source": "src/Hledger-Utils.html#treefilter",
          "type": "function"
        },
        "index": {
          "description": "remove all subtrees whose nodes do not fulfill predicate",
          "hierarchy": "Hledger Utils",
          "module": "Hledger.Utils",
          "name": "treefilter",
          "normalized": "(a-\u003eBool)-\u003eTree a-\u003eTree a",
          "package": "hledger-lib",
          "signature": "(a-\u003eBool)-\u003eTree a-\u003eTree a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Utils.html#v:treefilter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eapply f to all tree nodes\n\u003c/p\u003e",
          "module": "Hledger.Utils",
          "name": "treemap",
          "package": "hledger-lib",
          "signature": "(a -\u003e b) -\u003e Tree a -\u003e Tree b",
          "source": "src/Hledger-Utils.html#treemap",
          "type": "function"
        },
        "index": {
          "description": "apply to all tree nodes",
          "hierarchy": "Hledger Utils",
          "module": "Hledger.Utils",
          "name": "treemap",
          "normalized": "(a-\u003eb)-\u003eTree a-\u003eTree b",
          "package": "hledger-lib",
          "signature": "(a-\u003eb)-\u003eTree a-\u003eTree b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Utils.html#v:treemap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eremove all nodes past a certain depth\n\u003c/p\u003e",
          "module": "Hledger.Utils",
          "name": "treeprune",
          "package": "hledger-lib",
          "signature": "Int -\u003e Tree a -\u003e Tree a",
          "source": "src/Hledger-Utils.html#treeprune",
          "type": "function"
        },
        "index": {
          "description": "remove all nodes past certain depth",
          "hierarchy": "Hledger Utils",
          "module": "Hledger.Utils",
          "name": "treeprune",
          "normalized": "Int-\u003eTree a-\u003eTree a",
          "package": "hledger-lib",
          "signature": "Int-\u003eTree a-\u003eTree a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Utils.html#v:treeprune"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Utils",
          "name": "unbracket",
          "package": "hledger-lib",
          "signature": "String -\u003e String",
          "source": "src/Hledger-Utils.html#unbracket",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Utils",
          "module": "Hledger.Utils",
          "name": "unbracket",
          "normalized": "String-\u003eString",
          "package": "hledger-lib",
          "signature": "String-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Utils.html#v:unbracket"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Utils",
          "name": "underline",
          "package": "hledger-lib",
          "signature": "String -\u003e String",
          "source": "src/Hledger-Utils.html#underline",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Utils",
          "module": "Hledger.Utils",
          "name": "underline",
          "normalized": "String-\u003eString",
          "package": "hledger-lib",
          "signature": "String-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Utils.html#v:underline"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eQuote-aware version of unwords - single-quote strings which contain whitespace\n\u003c/p\u003e",
          "module": "Hledger.Utils",
          "name": "unwords'",
          "package": "hledger-lib",
          "signature": "[String] -\u003e String",
          "source": "src/Hledger-Utils.html#unwords%27",
          "type": "function"
        },
        "index": {
          "description": "Quote-aware version of unwords single-quote strings which contain whitespace",
          "hierarchy": "Hledger Utils",
          "module": "Hledger.Utils",
          "name": "unwords'",
          "normalized": "[String]-\u003eString",
          "package": "hledger-lib",
          "signature": "[String]-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Utils.html#v:unwords-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Utils",
          "name": "uppercase",
          "package": "hledger-lib",
          "signature": "[Char] -\u003e [Char]",
          "source": "src/Hledger-Utils.html#uppercase",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Utils",
          "module": "Hledger.Utils",
          "name": "uppercase",
          "normalized": "[Char]-\u003e[Char]",
          "package": "hledger-lib",
          "signature": "[Char]-\u003e[Char]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Utils.html#v:uppercase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompose strings vertically and right-aligned.\n\u003c/p\u003e",
          "module": "Hledger.Utils",
          "name": "vConcatRightAligned",
          "package": "hledger-lib",
          "signature": "[String] -\u003e String",
          "source": "src/Hledger-Utils.html#vConcatRightAligned",
          "type": "function"
        },
        "index": {
          "description": "Compose strings vertically and right-aligned",
          "hierarchy": "Hledger Utils",
          "module": "Hledger.Utils",
          "name": "vConcatRightAligned",
          "normalized": "[String]-\u003eString",
          "package": "hledger-lib",
          "partial": "Concat Right Aligned",
          "signature": "[String]-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Utils.html#v:vConcatRightAligned"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Utils",
          "name": "whitespacechars",
          "package": "hledger-lib",
          "signature": "[Char]",
          "source": "src/Hledger-Utils.html#whitespacechars",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Utils",
          "module": "Hledger.Utils",
          "name": "whitespacechars",
          "normalized": "[Char]",
          "package": "hledger-lib",
          "signature": "[Char]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Utils.html#v:whitespacechars"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eQuote-aware version of words - don't split on spaces which are inside quotes.\n NB correctly handles \u003ca\u003ea'b\u003c/a\u003e but not \u003ca\u003e''a''\u003c/a\u003e. Can raise an error if parsing fails.\n\u003c/p\u003e",
          "module": "Hledger.Utils",
          "name": "words'",
          "package": "hledger-lib",
          "signature": "String -\u003e [String]",
          "source": "src/Hledger-Utils.html#words%27",
          "type": "function"
        },
        "index": {
          "description": "Quote-aware version of words don split on spaces which are inside quotes NB correctly handles but not Can raise an error if parsing fails",
          "hierarchy": "Hledger Utils",
          "module": "Hledger.Utils",
          "name": "words'",
          "normalized": "String-\u003e[String]",
          "package": "hledger-lib",
          "signature": "String-\u003e[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Utils.html#v:words-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger",
          "name": "Hledger",
          "package": "hledger-lib",
          "source": "src/Hledger.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Hledger",
          "module": "Hledger",
          "name": "Hledger",
          "package": "hledger-lib",
          "partial": "Hledger",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger",
          "name": "tests_Hledger",
          "package": "hledger-lib",
          "signature": "Test",
          "source": "src/Hledger.html#tests_Hledger",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger",
          "module": "Hledger",
          "name": "tests_Hledger",
          "package": "hledger-lib",
          "partial": "Hledger",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger.html#v:tests_Hledger"
      }
    }
  ]
]