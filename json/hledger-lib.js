[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Account.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAn \u003ccode\u003e\u003ca\u003eAccount\u003c/a\u003e\u003c/code\u003e has a name, a list of subaccounts, an optional parent\naccount, and subaccounting-excluding and -including balances.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Hledger.Data.Account",
        "fct-package": "hledger-lib",
        "fct-signature": "module",
        "fct-source": "src/Hledger-Data-Account.html",
        "fct-type": "module",
        "title": "Account"
      },
      "index": {
        "description": "An Account has name list of subaccounts an optional parent account and subaccounting-excluding and including balances",
        "hierarchy": "Hledger Data Account",
        "module": "Hledger.Data.Account",
        "name": "Account",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "Account",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Account.html#v:accountsFromPostings",
      "description": {
        "fct-descr": "\u003cp\u003eDerive 1. an account tree and 2. their balances from a list of postings.\n (ledger's core feature). The accounts are returned in a list, but\n retain their tree structure; the first one is the root of the tree.\n\u003c/p\u003e",
        "fct-module": "Hledger.Data.Account",
        "fct-package": "hledger-lib",
        "fct-signature": "[Posting] -\u003e [Account]",
        "fct-source": "src/Hledger-Data-Account.html#accountsFromPostings",
        "fct-type": "function",
        "title": "accountsFromPostings"
      },
      "index": {
        "description": "Derive an account tree and their balances from list of postings ledger core feature The accounts are returned in list but retain their tree structure the first one is the root of the tree",
        "hierarchy": "Hledger Data Account",
        "module": "Hledger.Data.Account",
        "name": "accountsFromPostings",
        "normalized": "[Posting]-\u003e[Account]",
        "package": "hledger-lib",
        "partial": "From Postings",
        "signature": "[Posting]-\u003e[Account]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Account.html#v:accountsLevels",
      "description": {
        "fct-descr": "\u003cp\u003eList the accounts at each level of the account tree.\n\u003c/p\u003e",
        "fct-module": "Hledger.Data.Account",
        "fct-package": "hledger-lib",
        "fct-signature": "Account -\u003e [[Account]]",
        "fct-source": "src/Hledger-Data-Account.html#accountsLevels",
        "fct-type": "function",
        "title": "accountsLevels"
      },
      "index": {
        "description": "List the accounts at each level of the account tree",
        "hierarchy": "Hledger Data Account",
        "module": "Hledger.Data.Account",
        "name": "accountsLevels",
        "normalized": "Account-\u003e[[Account]]",
        "package": "hledger-lib",
        "partial": "Levels",
        "signature": "Account-\u003e[[Account]]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Account.html#v:anyAccounts",
      "description": {
        "fct-descr": "\u003cp\u003eIs the predicate true on any of this account or its subaccounts ?\n\u003c/p\u003e",
        "fct-module": "Hledger.Data.Account",
        "fct-package": "hledger-lib",
        "fct-signature": "(Account -\u003e Bool) -\u003e Account -\u003e Bool",
        "fct-source": "src/Hledger-Data-Account.html#anyAccounts",
        "fct-type": "function",
        "title": "anyAccounts"
      },
      "index": {
        "description": "Is the predicate true on any of this account or its subaccounts",
        "hierarchy": "Hledger Data Account",
        "module": "Hledger.Data.Account",
        "name": "anyAccounts",
        "normalized": "(Account-\u003eBool)-\u003eAccount-\u003eBool",
        "package": "hledger-lib",
        "partial": "Accounts",
        "signature": "(Account-\u003eBool)-\u003eAccount-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Account.html#v:clipAccounts",
      "description": {
        "fct-descr": "\u003cp\u003eRemove all subaccounts below a certain depth.\n\u003c/p\u003e",
        "fct-module": "Hledger.Data.Account",
        "fct-package": "hledger-lib",
        "fct-signature": "Int -\u003e Account -\u003e Account",
        "fct-source": "src/Hledger-Data-Account.html#clipAccounts",
        "fct-type": "function",
        "title": "clipAccounts"
      },
      "index": {
        "description": "Remove all subaccounts below certain depth",
        "hierarchy": "Hledger Data Account",
        "module": "Hledger.Data.Account",
        "name": "clipAccounts",
        "normalized": "Int-\u003eAccount-\u003eAccount",
        "package": "hledger-lib",
        "partial": "Accounts",
        "signature": "Int-\u003eAccount-\u003eAccount"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Account.html#v:filterAccounts",
      "description": {
        "fct-descr": "\u003cp\u003eFilter an account tree (to a list).\n\u003c/p\u003e",
        "fct-module": "Hledger.Data.Account",
        "fct-package": "hledger-lib",
        "fct-signature": "(Account -\u003e Bool) -\u003e Account -\u003e [Account]",
        "fct-source": "src/Hledger-Data-Account.html#filterAccounts",
        "fct-type": "function",
        "title": "filterAccounts"
      },
      "index": {
        "description": "Filter an account tree to list",
        "hierarchy": "Hledger Data Account",
        "module": "Hledger.Data.Account",
        "name": "filterAccounts",
        "normalized": "(Account-\u003eBool)-\u003eAccount-\u003e[Account]",
        "package": "hledger-lib",
        "partial": "Accounts",
        "signature": "(Account-\u003eBool)-\u003eAccount-\u003e[Account]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Account.html#v:flattenAccounts",
      "description": {
        "fct-descr": "\u003cp\u003eFlatten an account tree into a list, which is sometimes\n convenient. Note since accounts link to their parents/subs, the\n account tree remains intact and can still be used. It's a tree/list!\n\u003c/p\u003e",
        "fct-module": "Hledger.Data.Account",
        "fct-package": "hledger-lib",
        "fct-signature": "Account -\u003e [Account]",
        "fct-source": "src/Hledger-Data-Account.html#flattenAccounts",
        "fct-type": "function",
        "title": "flattenAccounts"
      },
      "index": {
        "description": "Flatten an account tree into list which is sometimes convenient Note since accounts link to their parents subs the account tree remains intact and can still be used It tree list",
        "hierarchy": "Hledger Data Account",
        "module": "Hledger.Data.Account",
        "name": "flattenAccounts",
        "normalized": "Account-\u003e[Account]",
        "package": "hledger-lib",
        "partial": "Accounts",
        "signature": "Account-\u003e[Account]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Account.html#v:lookupAccount",
      "description": {
        "fct-descr": "\u003cp\u003eSearch an account list by name.\n\u003c/p\u003e",
        "fct-module": "Hledger.Data.Account",
        "fct-package": "hledger-lib",
        "fct-signature": "AccountName -\u003e [Account] -\u003e Maybe Account",
        "fct-source": "src/Hledger-Data-Account.html#lookupAccount",
        "fct-type": "function",
        "title": "lookupAccount"
      },
      "index": {
        "description": "Search an account list by name",
        "hierarchy": "Hledger Data Account",
        "module": "Hledger.Data.Account",
        "name": "lookupAccount",
        "normalized": "AccountName-\u003e[Account]-\u003eMaybe Account",
        "package": "hledger-lib",
        "partial": "Account",
        "signature": "AccountName-\u003e[Account]-\u003eMaybe Account"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Account.html#v:mapAccounts",
      "description": {
        "fct-descr": "\u003cp\u003eMap a (non-tree-structure-modifying) function over this and sub accounts.\n\u003c/p\u003e",
        "fct-module": "Hledger.Data.Account",
        "fct-package": "hledger-lib",
        "fct-signature": "(Account -\u003e Account) -\u003e Account -\u003e Account",
        "fct-source": "src/Hledger-Data-Account.html#mapAccounts",
        "fct-type": "function",
        "title": "mapAccounts"
      },
      "index": {
        "description": "Map non-tree-structure-modifying function over this and sub accounts",
        "hierarchy": "Hledger Data Account",
        "module": "Hledger.Data.Account",
        "name": "mapAccounts",
        "normalized": "(Account-\u003eAccount)-\u003eAccount-\u003eAccount",
        "package": "hledger-lib",
        "partial": "Accounts",
        "signature": "(Account-\u003eAccount)-\u003eAccount-\u003eAccount"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Account.html#v:nameTreeToAccount",
      "description": {
        "fct-descr": "\u003cp\u003eConvert an AccountName tree to an Account tree\n\u003c/p\u003e",
        "fct-module": "Hledger.Data.Account",
        "fct-package": "hledger-lib",
        "fct-signature": "AccountName -\u003e FastTree AccountName -\u003e Account",
        "fct-source": "src/Hledger-Data-Account.html#nameTreeToAccount",
        "fct-type": "function",
        "title": "nameTreeToAccount"
      },
      "index": {
        "description": "Convert an AccountName tree to an Account tree",
        "hierarchy": "Hledger Data Account",
        "module": "Hledger.Data.Account",
        "name": "nameTreeToAccount",
        "normalized": "AccountName-\u003eFastTree AccountName-\u003eAccount",
        "package": "hledger-lib",
        "partial": "Tree To Account",
        "signature": "AccountName-\u003eFastTree AccountName-\u003eAccount"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Account.html#v:nullacct",
      "description": {
        "fct-module": "Hledger.Data.Account",
        "fct-package": "hledger-lib",
        "fct-signature": "Account",
        "fct-source": "src/Hledger-Data-Account.html#nullacct",
        "fct-type": "function",
        "title": "nullacct"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Data Account",
        "module": "Hledger.Data.Account",
        "name": "nullacct",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Account.html#v:parentAccounts",
      "description": {
        "fct-descr": "\u003cp\u003eGet this account's parent accounts, from the nearest up to the root.\n\u003c/p\u003e",
        "fct-module": "Hledger.Data.Account",
        "fct-package": "hledger-lib",
        "fct-signature": "Account -\u003e [Account]",
        "fct-source": "src/Hledger-Data-Account.html#parentAccounts",
        "fct-type": "function",
        "title": "parentAccounts"
      },
      "index": {
        "description": "Get this account parent accounts from the nearest up to the root",
        "hierarchy": "Hledger Data Account",
        "module": "Hledger.Data.Account",
        "name": "parentAccounts",
        "normalized": "Account-\u003e[Account]",
        "package": "hledger-lib",
        "partial": "Accounts",
        "signature": "Account-\u003e[Account]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Account.html#v:printAccounts",
      "description": {
        "fct-module": "Hledger.Data.Account",
        "fct-package": "hledger-lib",
        "fct-signature": "Account -\u003e IO ()",
        "fct-source": "src/Hledger-Data-Account.html#printAccounts",
        "fct-type": "function",
        "title": "printAccounts"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Data Account",
        "module": "Hledger.Data.Account",
        "name": "printAccounts",
        "normalized": "Account-\u003eIO()",
        "package": "hledger-lib",
        "partial": "Accounts",
        "signature": "Account-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Account.html#v:pruneAccounts",
      "description": {
        "fct-descr": "\u003cp\u003eRemove all leaf accounts and subtrees matching a predicate.\n\u003c/p\u003e",
        "fct-module": "Hledger.Data.Account",
        "fct-package": "hledger-lib",
        "fct-signature": "(Account -\u003e Bool) -\u003e Account -\u003e Maybe Account",
        "fct-source": "src/Hledger-Data-Account.html#pruneAccounts",
        "fct-type": "function",
        "title": "pruneAccounts"
      },
      "index": {
        "description": "Remove all leaf accounts and subtrees matching predicate",
        "hierarchy": "Hledger Data Account",
        "module": "Hledger.Data.Account",
        "name": "pruneAccounts",
        "normalized": "(Account-\u003eBool)-\u003eAccount-\u003eMaybe Account",
        "package": "hledger-lib",
        "partial": "Accounts",
        "signature": "(Account-\u003eBool)-\u003eAccount-\u003eMaybe Account"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Account.html#v:showAccountDebug",
      "description": {
        "fct-module": "Hledger.Data.Account",
        "fct-package": "hledger-lib",
        "fct-signature": "Account -\u003e t",
        "fct-source": "src/Hledger-Data-Account.html#showAccountDebug",
        "fct-type": "function",
        "title": "showAccountDebug"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Data Account",
        "module": "Hledger.Data.Account",
        "name": "showAccountDebug",
        "normalized": "Account-\u003ea",
        "package": "hledger-lib",
        "partial": "Account Debug",
        "signature": "Account-\u003et"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Account.html#v:showAccounts",
      "description": {
        "fct-module": "Hledger.Data.Account",
        "fct-package": "hledger-lib",
        "fct-signature": "Account -\u003e String",
        "fct-source": "src/Hledger-Data-Account.html#showAccounts",
        "fct-type": "function",
        "title": "showAccounts"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Data Account",
        "module": "Hledger.Data.Account",
        "name": "showAccounts",
        "normalized": "Account-\u003eString",
        "package": "hledger-lib",
        "partial": "Accounts",
        "signature": "Account-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Account.html#v:showAccountsBoringFlag",
      "description": {
        "fct-module": "Hledger.Data.Account",
        "fct-package": "hledger-lib",
        "fct-signature": "Account -\u003e String",
        "fct-source": "src/Hledger-Data-Account.html#showAccountsBoringFlag",
        "fct-type": "function",
        "title": "showAccountsBoringFlag"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Data Account",
        "module": "Hledger.Data.Account",
        "name": "showAccountsBoringFlag",
        "normalized": "Account-\u003eString",
        "package": "hledger-lib",
        "partial": "Accounts Boring Flag",
        "signature": "Account-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Account.html#v:sumAccounts",
      "description": {
        "fct-descr": "\u003cp\u003eAdd subaccount-inclusive balances to an account tree.\n\u003c/p\u003e",
        "fct-module": "Hledger.Data.Account",
        "fct-package": "hledger-lib",
        "fct-signature": "Account -\u003e Account",
        "fct-source": "src/Hledger-Data-Account.html#sumAccounts",
        "fct-type": "function",
        "title": "sumAccounts"
      },
      "index": {
        "description": "Add subaccount-inclusive balances to an account tree",
        "hierarchy": "Hledger Data Account",
        "module": "Hledger.Data.Account",
        "name": "sumAccounts",
        "normalized": "Account-\u003eAccount",
        "package": "hledger-lib",
        "partial": "Accounts",
        "signature": "Account-\u003eAccount"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Account.html#v:tests_Hledger_Data_Account",
      "description": {
        "fct-module": "Hledger.Data.Account",
        "fct-package": "hledger-lib",
        "fct-signature": "Test",
        "fct-source": "src/Hledger-Data-Account.html#tests_Hledger_Data_Account",
        "fct-type": "function",
        "title": "tests_Hledger_Data_Account"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Data Account",
        "module": "Hledger.Data.Account",
        "name": "tests_Hledger_Data_Account",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "Hledger Data Account",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Account.html#v:tieAccountParents",
      "description": {
        "fct-descr": "\u003cp\u003eTie the knot so all subaccounts' parents are set correctly.\n\u003c/p\u003e",
        "fct-module": "Hledger.Data.Account",
        "fct-package": "hledger-lib",
        "fct-signature": "Account -\u003e Account",
        "fct-source": "src/Hledger-Data-Account.html#tieAccountParents",
        "fct-type": "function",
        "title": "tieAccountParents"
      },
      "index": {
        "description": "Tie the knot so all subaccounts parents are set correctly",
        "hierarchy": "Hledger Data Account",
        "module": "Hledger.Data.Account",
        "name": "tieAccountParents",
        "normalized": "Account-\u003eAccount",
        "package": "hledger-lib",
        "partial": "Account Parents",
        "signature": "Account-\u003eAccount"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-AccountName.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eAccountName\u003c/a\u003e\u003c/code\u003es are strings like \u003ccode\u003eassets:cash:petty\u003c/code\u003e, with multiple\ncomponents separated by \u003ccode\u003e:\u003c/code\u003e.  From a set of these we derive the account\nhierarchy.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Hledger.Data.AccountName",
        "fct-package": "hledger-lib",
        "fct-signature": "module",
        "fct-source": "src/Hledger-Data-AccountName.html",
        "fct-type": "module",
        "title": "AccountName"
      },
      "index": {
        "description": "AccountName are strings like assets cash petty with multiple components separated by From set of these we derive the account hierarchy",
        "hierarchy": "Hledger Data AccountName",
        "module": "Hledger.Data.AccountName",
        "name": "AccountName",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "Account Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-AccountName.html#v:accountLeafName",
      "description": {
        "fct-module": "Hledger.Data.AccountName",
        "fct-package": "hledger-lib",
        "fct-signature": "AccountName -\u003e String",
        "fct-source": "src/Hledger-Data-AccountName.html#accountLeafName",
        "fct-type": "function",
        "title": "accountLeafName"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Data AccountName",
        "module": "Hledger.Data.AccountName",
        "name": "accountLeafName",
        "normalized": "AccountName-\u003eString",
        "package": "hledger-lib",
        "partial": "Leaf Name",
        "signature": "AccountName-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-AccountName.html#v:accountNameComponents",
      "description": {
        "fct-module": "Hledger.Data.AccountName",
        "fct-package": "hledger-lib",
        "fct-signature": "AccountName -\u003e [String]",
        "fct-source": "src/Hledger-Data-AccountName.html#accountNameComponents",
        "fct-type": "function",
        "title": "accountNameComponents"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Data AccountName",
        "module": "Hledger.Data.AccountName",
        "name": "accountNameComponents",
        "normalized": "AccountName-\u003e[String]",
        "package": "hledger-lib",
        "partial": "Name Components",
        "signature": "AccountName-\u003e[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-AccountName.html#v:accountNameDrop",
      "description": {
        "fct-module": "Hledger.Data.AccountName",
        "fct-package": "hledger-lib",
        "fct-signature": "Int -\u003e AccountName -\u003e AccountName",
        "fct-source": "src/Hledger-Data-AccountName.html#accountNameDrop",
        "fct-type": "function",
        "title": "accountNameDrop"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Data AccountName",
        "module": "Hledger.Data.AccountName",
        "name": "accountNameDrop",
        "normalized": "Int-\u003eAccountName-\u003eAccountName",
        "package": "hledger-lib",
        "partial": "Name Drop",
        "signature": "Int-\u003eAccountName-\u003eAccountName"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-AccountName.html#v:accountNameFromComponents",
      "description": {
        "fct-module": "Hledger.Data.AccountName",
        "fct-package": "hledger-lib",
        "fct-signature": "[String] -\u003e AccountName",
        "fct-source": "src/Hledger-Data-AccountName.html#accountNameFromComponents",
        "fct-type": "function",
        "title": "accountNameFromComponents"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Data AccountName",
        "module": "Hledger.Data.AccountName",
        "name": "accountNameFromComponents",
        "normalized": "[String]-\u003eAccountName",
        "package": "hledger-lib",
        "partial": "Name From Components",
        "signature": "[String]-\u003eAccountName"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-AccountName.html#v:accountNameLevel",
      "description": {
        "fct-module": "Hledger.Data.AccountName",
        "fct-package": "hledger-lib",
        "fct-signature": "AccountName -\u003e Int",
        "fct-source": "src/Hledger-Data-AccountName.html#accountNameLevel",
        "fct-type": "function",
        "title": "accountNameLevel"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Data AccountName",
        "module": "Hledger.Data.AccountName",
        "name": "accountNameLevel",
        "normalized": "AccountName-\u003eInt",
        "package": "hledger-lib",
        "partial": "Name Level",
        "signature": "AccountName-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-AccountName.html#v:accountNameToAccountOnlyRegex",
      "description": {
        "fct-descr": "\u003cp\u003eConvert an account name to a regular expression matching it but not its subaccounts.\n\u003c/p\u003e",
        "fct-module": "Hledger.Data.AccountName",
        "fct-package": "hledger-lib",
        "fct-signature": "String -\u003e String",
        "fct-source": "src/Hledger-Data-AccountName.html#accountNameToAccountOnlyRegex",
        "fct-type": "function",
        "title": "accountNameToAccountOnlyRegex"
      },
      "index": {
        "description": "Convert an account name to regular expression matching it but not its subaccounts",
        "hierarchy": "Hledger Data AccountName",
        "module": "Hledger.Data.AccountName",
        "name": "accountNameToAccountOnlyRegex",
        "normalized": "String-\u003eString",
        "package": "hledger-lib",
        "partial": "Name To Account Only Regex",
        "signature": "String-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-AccountName.html#v:accountNameToAccountRegex",
      "description": {
        "fct-descr": "\u003cp\u003eConvert an account name to a regular expression matching it and its subaccounts.\n\u003c/p\u003e",
        "fct-module": "Hledger.Data.AccountName",
        "fct-package": "hledger-lib",
        "fct-signature": "String -\u003e String",
        "fct-source": "src/Hledger-Data-AccountName.html#accountNameToAccountRegex",
        "fct-type": "function",
        "title": "accountNameToAccountRegex"
      },
      "index": {
        "description": "Convert an account name to regular expression matching it and its subaccounts",
        "hierarchy": "Hledger Data AccountName",
        "module": "Hledger.Data.AccountName",
        "name": "accountNameToAccountRegex",
        "normalized": "String-\u003eString",
        "package": "hledger-lib",
        "partial": "Name To Account Regex",
        "signature": "String-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-AccountName.html#v:accountNameTreeFrom",
      "description": {
        "fct-descr": "\u003cp\u003eConvert a list of account names to a tree.\n\u003c/p\u003e",
        "fct-module": "Hledger.Data.AccountName",
        "fct-package": "hledger-lib",
        "fct-signature": "[AccountName] -\u003e Tree AccountName",
        "fct-source": "src/Hledger-Data-AccountName.html#accountNameTreeFrom",
        "fct-type": "function",
        "title": "accountNameTreeFrom"
      },
      "index": {
        "description": "Convert list of account names to tree",
        "hierarchy": "Hledger Data AccountName",
        "module": "Hledger.Data.AccountName",
        "name": "accountNameTreeFrom",
        "normalized": "[AccountName]-\u003eTree AccountName",
        "package": "hledger-lib",
        "partial": "Name Tree From",
        "signature": "[AccountName]-\u003eTree AccountName"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-AccountName.html#v:accountRegexToAccountName",
      "description": {
        "fct-descr": "\u003cp\u003eConvert an exact account-matching regular expression to a plain account name.\n\u003c/p\u003e",
        "fct-module": "Hledger.Data.AccountName",
        "fct-package": "hledger-lib",
        "fct-signature": "String -\u003e String",
        "fct-source": "src/Hledger-Data-AccountName.html#accountRegexToAccountName",
        "fct-type": "function",
        "title": "accountRegexToAccountName"
      },
      "index": {
        "description": "Convert an exact account-matching regular expression to plain account name",
        "hierarchy": "Hledger Data AccountName",
        "module": "Hledger.Data.AccountName",
        "name": "accountRegexToAccountName",
        "normalized": "String-\u003eString",
        "package": "hledger-lib",
        "partial": "Regex To Account Name",
        "signature": "String-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-AccountName.html#v:acctsepchar",
      "description": {
        "fct-module": "Hledger.Data.AccountName",
        "fct-package": "hledger-lib",
        "fct-signature": "Char",
        "fct-source": "src/Hledger-Data-AccountName.html#acctsepchar",
        "fct-type": "function",
        "title": "acctsepchar"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Data AccountName",
        "module": "Hledger.Data.AccountName",
        "name": "acctsepchar",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-AccountName.html#v:clipAccountName",
      "description": {
        "fct-module": "Hledger.Data.AccountName",
        "fct-package": "hledger-lib",
        "fct-signature": "Int -\u003e AccountName -\u003e AccountName",
        "fct-source": "src/Hledger-Data-AccountName.html#clipAccountName",
        "fct-type": "function",
        "title": "clipAccountName"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Data AccountName",
        "module": "Hledger.Data.AccountName",
        "name": "clipAccountName",
        "normalized": "Int-\u003eAccountName-\u003eAccountName",
        "package": "hledger-lib",
        "partial": "Account Name",
        "signature": "Int-\u003eAccountName-\u003eAccountName"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-AccountName.html#v:elideAccountName",
      "description": {
        "fct-descr": "\u003cp\u003eElide an account name to fit in the specified width.\n From the ledger 2.6 news:\n\u003c/p\u003e\u003cpre\u003e\n   What Ledger now does is that if an account name is too long, it will\n   start abbreviating the first parts of the account name down to two\n   letters in length.  If this results in a string that is still too\n   long, the front will be elided -- not the end.  For example:\n\nExpenses:Cash           ; OK, not too long\n     Ex:Wednesday:Cash       ; \u003ca\u003eExpenses\u003c/a\u003e was abbreviated to fit\n     Ex:We:Afternoon:Cash    ; \u003ca\u003eExpenses\u003c/a\u003e and \u003ca\u003eWednesday\u003c/a\u003e abbreviated\n     ; Expenses:Wednesday:Afternoon:Lunch:Snack:Candy:Chocolate:Cash\n     ..:Af:Lu:Sn:Ca:Ch:Cash  ; Abbreviated and elided!\n\u003c/pre\u003e",
        "fct-module": "Hledger.Data.AccountName",
        "fct-package": "hledger-lib",
        "fct-signature": "Int -\u003e AccountName -\u003e AccountName",
        "fct-source": "src/Hledger-Data-AccountName.html#elideAccountName",
        "fct-type": "function",
        "title": "elideAccountName"
      },
      "index": {
        "description": "Elide an account name to fit in the specified width From the ledger news What Ledger now does is that if an account name is too long it will start abbreviating the first parts of the account name down to two letters in length If this results in string that is still too long the front will be elided not the end For example Expenses Cash OK not too long Ex Wednesday Cash Expenses was abbreviated to fit Ex We Afternoon Cash Expenses and Wednesday abbreviated Expenses Wednesday Afternoon Lunch Snack Candy Chocolate Cash Af Lu Sn Ca Ch Cash Abbreviated and elided",
        "hierarchy": "Hledger Data AccountName",
        "module": "Hledger.Data.AccountName",
        "name": "elideAccountName",
        "normalized": "Int-\u003eAccountName-\u003eAccountName",
        "package": "hledger-lib",
        "partial": "Account Name",
        "signature": "Int-\u003eAccountName-\u003eAccountName"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-AccountName.html#v:expandAccountName",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ca\u003ea:b:c\u003c/a\u003e -\u003e [\u003ca\u003ea\u003c/a\u003e,\u003ca\u003ea:b\u003c/a\u003e,\u003ca\u003ea:b:c\u003c/a\u003e]\n\u003c/p\u003e",
        "fct-module": "Hledger.Data.AccountName",
        "fct-package": "hledger-lib",
        "fct-signature": "AccountName -\u003e [AccountName]",
        "fct-source": "src/Hledger-Data-AccountName.html#expandAccountName",
        "fct-type": "function",
        "title": "expandAccountName"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Data AccountName",
        "module": "Hledger.Data.AccountName",
        "name": "expandAccountName",
        "normalized": "AccountName-\u003e[AccountName]",
        "package": "hledger-lib",
        "partial": "Account Name",
        "signature": "AccountName-\u003e[AccountName]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-AccountName.html#v:expandAccountNames",
      "description": {
        "fct-descr": "\u003cdl\u003e\u003cdt\u003e\u003ca\u003ea:b:c\u003c/a\u003e,\u003ca\u003ed:e\u003c/a\u003e\u003c/dt\u003e\u003cdd\u003e -\u003e [\u003ca\u003ea\u003c/a\u003e,\u003ca\u003ea:b\u003c/a\u003e,\u003ca\u003ea:b:c\u003c/a\u003e,\u003ca\u003ed\u003c/a\u003e,\u003ca\u003ed:e\u003c/a\u003e]\n\u003c/dd\u003e\u003c/dl\u003e",
        "fct-module": "Hledger.Data.AccountName",
        "fct-package": "hledger-lib",
        "fct-signature": "[AccountName] -\u003e [AccountName]",
        "fct-source": "src/Hledger-Data-AccountName.html#expandAccountNames",
        "fct-type": "function",
        "title": "expandAccountNames"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Data AccountName",
        "module": "Hledger.Data.AccountName",
        "name": "expandAccountNames",
        "normalized": "[AccountName]-\u003e[AccountName]",
        "package": "hledger-lib",
        "partial": "Account Names",
        "signature": "[AccountName]-\u003e[AccountName]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-AccountName.html#v:isAccountNamePrefixOf",
      "description": {
        "fct-module": "Hledger.Data.AccountName",
        "fct-package": "hledger-lib",
        "fct-signature": "AccountName -\u003e AccountName -\u003e Bool",
        "fct-source": "src/Hledger-Data-AccountName.html#isAccountNamePrefixOf",
        "fct-type": "function",
        "title": "isAccountNamePrefixOf"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Data AccountName",
        "module": "Hledger.Data.AccountName",
        "name": "isAccountNamePrefixOf",
        "normalized": "AccountName-\u003eAccountName-\u003eBool",
        "package": "hledger-lib",
        "partial": "Account Name Prefix Of",
        "signature": "AccountName-\u003eAccountName-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-AccountName.html#v:isAccountRegex",
      "description": {
        "fct-descr": "\u003cp\u003eDoes this string look like an exact account-matching regular expression ?\n\u003c/p\u003e",
        "fct-module": "Hledger.Data.AccountName",
        "fct-package": "hledger-lib",
        "fct-signature": "String -\u003e Bool",
        "fct-source": "src/Hledger-Data-AccountName.html#isAccountRegex",
        "fct-type": "function",
        "title": "isAccountRegex"
      },
      "index": {
        "description": "Does this string look like an exact account-matching regular expression",
        "hierarchy": "Hledger Data AccountName",
        "module": "Hledger.Data.AccountName",
        "name": "isAccountRegex",
        "normalized": "String-\u003eBool",
        "package": "hledger-lib",
        "partial": "Account Regex",
        "signature": "String-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-AccountName.html#v:isSubAccountNameOf",
      "description": {
        "fct-module": "Hledger.Data.AccountName",
        "fct-package": "hledger-lib",
        "fct-signature": "AccountName -\u003e AccountName -\u003e Bool",
        "fct-source": "src/Hledger-Data-AccountName.html#isSubAccountNameOf",
        "fct-type": "function",
        "title": "isSubAccountNameOf"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Data AccountName",
        "module": "Hledger.Data.AccountName",
        "name": "isSubAccountNameOf",
        "normalized": "AccountName-\u003eAccountName-\u003eBool",
        "package": "hledger-lib",
        "partial": "Sub Account Name Of",
        "signature": "AccountName-\u003eAccountName-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-AccountName.html#v:nullaccountnametree",
      "description": {
        "fct-module": "Hledger.Data.AccountName",
        "fct-package": "hledger-lib",
        "fct-signature": "Tree [Char]",
        "fct-source": "src/Hledger-Data-AccountName.html#nullaccountnametree",
        "fct-type": "function",
        "title": "nullaccountnametree"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Data AccountName",
        "module": "Hledger.Data.AccountName",
        "name": "nullaccountnametree",
        "normalized": "Tree[Char]",
        "package": "hledger-lib",
        "partial": "",
        "signature": "Tree[Char]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-AccountName.html#v:parentAccountName",
      "description": {
        "fct-module": "Hledger.Data.AccountName",
        "fct-package": "hledger-lib",
        "fct-signature": "AccountName -\u003e AccountName",
        "fct-source": "src/Hledger-Data-AccountName.html#parentAccountName",
        "fct-type": "function",
        "title": "parentAccountName"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Data AccountName",
        "module": "Hledger.Data.AccountName",
        "name": "parentAccountName",
        "normalized": "AccountName-\u003eAccountName",
        "package": "hledger-lib",
        "partial": "Account Name",
        "signature": "AccountName-\u003eAccountName"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-AccountName.html#v:parentAccountNames",
      "description": {
        "fct-module": "Hledger.Data.AccountName",
        "fct-package": "hledger-lib",
        "fct-signature": "AccountName -\u003e [AccountName]",
        "fct-source": "src/Hledger-Data-AccountName.html#parentAccountNames",
        "fct-type": "function",
        "title": "parentAccountNames"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Data AccountName",
        "module": "Hledger.Data.AccountName",
        "name": "parentAccountNames",
        "normalized": "AccountName-\u003e[AccountName]",
        "package": "hledger-lib",
        "partial": "Account Names",
        "signature": "AccountName-\u003e[AccountName]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-AccountName.html#v:subAccountNamesFrom",
      "description": {
        "fct-descr": "\u003cp\u003eFrom a list of account names, select those which are direct\n subaccounts of the given account name.\n\u003c/p\u003e",
        "fct-module": "Hledger.Data.AccountName",
        "fct-package": "hledger-lib",
        "fct-signature": "[AccountName] -\u003e AccountName -\u003e [AccountName]",
        "fct-source": "src/Hledger-Data-AccountName.html#subAccountNamesFrom",
        "fct-type": "function",
        "title": "subAccountNamesFrom"
      },
      "index": {
        "description": "From list of account names select those which are direct subaccounts of the given account name",
        "hierarchy": "Hledger Data AccountName",
        "module": "Hledger.Data.AccountName",
        "name": "subAccountNamesFrom",
        "normalized": "[AccountName]-\u003eAccountName-\u003e[AccountName]",
        "package": "hledger-lib",
        "partial": "Account Names From",
        "signature": "[AccountName]-\u003eAccountName-\u003e[AccountName]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-AccountName.html#v:tests_Hledger_Data_AccountName",
      "description": {
        "fct-module": "Hledger.Data.AccountName",
        "fct-package": "hledger-lib",
        "fct-signature": "Test",
        "fct-source": "src/Hledger-Data-AccountName.html#tests_Hledger_Data_AccountName",
        "fct-type": "function",
        "title": "tests_Hledger_Data_AccountName"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Data AccountName",
        "module": "Hledger.Data.AccountName",
        "name": "tests_Hledger_Data_AccountName",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "Hledger Data Account Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-AccountName.html#v:topAccountNames",
      "description": {
        "fct-descr": "\u003cdl\u003e\u003cdt\u003e\u003ca\u003ea:b:c\u003c/a\u003e,\u003ca\u003ed:e\u003c/a\u003e\u003c/dt\u003e\u003cdd\u003e -\u003e [\u003ca\u003ea\u003c/a\u003e,\u003ca\u003ed\u003c/a\u003e]\n\u003c/dd\u003e\u003c/dl\u003e",
        "fct-module": "Hledger.Data.AccountName",
        "fct-package": "hledger-lib",
        "fct-signature": "[AccountName] -\u003e [AccountName]",
        "fct-source": "src/Hledger-Data-AccountName.html#topAccountNames",
        "fct-type": "function",
        "title": "topAccountNames"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Data AccountName",
        "module": "Hledger.Data.AccountName",
        "name": "topAccountNames",
        "normalized": "[AccountName]-\u003e[AccountName]",
        "package": "hledger-lib",
        "partial": "Account Names",
        "signature": "[AccountName]-\u003e[AccountName]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Amount.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA simple \u003ccode\u003e\u003ca\u003eAmount\u003c/a\u003e\u003c/code\u003e is some quantity of money, shares, or anything else.\nIt has a (possibly null) \u003ccode\u003e\u003ca\u003eCommodity\u003c/a\u003e\u003c/code\u003e and a numeric quantity:\n\u003c/p\u003e\u003cpre\u003e\n  $1 \n  &#163;-50  EUR 3.44 \n  GOOG 500\n  1.5h\n  90 apples\n  0 \n\u003c/pre\u003e\u003cp\u003eIt may also have an assigned \u003ccode\u003e\u003ca\u003ePrice\u003c/a\u003e\u003c/code\u003e, representing this amount's per-unit\nor total cost in a different commodity. If present, this is rendered like\nso:\n\u003c/p\u003e\u003cpre\u003e\n  EUR 2 @ $1.50  (unit price)\n  EUR 2 @@ $3   (total price)\n\u003c/pre\u003e\u003cp\u003eA \u003ccode\u003e\u003ca\u003eMixedAmount\u003c/a\u003e\u003c/code\u003e is zero or more simple amounts, so can represent multiple\ncommodities; this is the type most often used:\n\u003c/p\u003e\u003cpre\u003e\n  0\n  $50 + EUR 3\n  16h + $13.55 + AAPL 500 + 6 oranges\n\u003c/pre\u003e\u003cp\u003eWhen a mixed amount has been \"normalised\", it has no more than one amount\nin each commodity and no zero amounts; or it has just a single zero amount\nand no others.\n\u003c/p\u003e\u003cp\u003eLimited arithmetic with simple and mixed amounts is supported, best used\nwith similar amounts since it mostly ignores assigned prices and commodity\nexchange rates.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Hledger.Data.Amount",
        "fct-package": "hledger-lib",
        "fct-signature": "module",
        "fct-source": "src/Hledger-Data-Amount.html",
        "fct-type": "module",
        "title": "Amount"
      },
      "index": {
        "description": "simple Amount is some quantity of money shares or anything else It has possibly null Commodity and numeric quantity EUR GOOG apples It may also have an assigned Price representing this amount per-unit or total cost in different commodity If present this is rendered like so EUR unit price EUR total price MixedAmount is zero or more simple amounts so can represent multiple commodities this is the type most often used EUR AAPL oranges When mixed amount has been normalised it has no more than one amount in each commodity and no zero amounts or it has just single zero amount and no others Limited arithmetic with simple and mixed amounts is supported best used with similar amounts since it mostly ignores assigned prices and commodity exchange rates",
        "hierarchy": "Hledger Data Amount",
        "module": "Hledger.Data.Amount",
        "name": "Amount",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "Amount",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Amount.html#v:-64--64-",
      "description": {
        "fct-descr": "\u003cp\u003eSet an amount's total price.\n\u003c/p\u003e",
        "fct-module": "Hledger.Data.Amount",
        "fct-package": "hledger-lib",
        "fct-signature": "Amount -\u003e Amount -\u003e Amount",
        "fct-source": "src/Hledger-Data-Amount.html#%40%40",
        "fct-type": "function",
        "title": "(@@)"
      },
      "index": {
        "description": "Set an amount total price",
        "hierarchy": "Hledger Data Amount",
        "module": "Hledger.Data.Amount",
        "name": "(@@) @@",
        "normalized": "Amount-\u003eAmount-\u003eAmount",
        "package": "hledger-lib",
        "partial": "",
        "signature": "Amount-\u003eAmount-\u003eAmount"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Amount.html#v:amount",
      "description": {
        "fct-descr": "\u003cp\u003eThe empty simple amount.\n\u003c/p\u003e",
        "fct-module": "Hledger.Data.Amount",
        "fct-package": "hledger-lib",
        "fct-signature": "Amount",
        "fct-source": "src/Hledger-Data-Amount.html#amount",
        "fct-type": "function",
        "title": "amount"
      },
      "index": {
        "description": "The empty simple amount",
        "hierarchy": "Hledger Data Amount",
        "module": "Hledger.Data.Amount",
        "name": "amount",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Amount.html#v:amountWithCommodity",
      "description": {
        "fct-descr": "\u003cp\u003eConvert an amount to the specified commodity, ignoring and discarding\n any assigned prices and assuming an exchange rate of 1.\n\u003c/p\u003e",
        "fct-module": "Hledger.Data.Amount",
        "fct-package": "hledger-lib",
        "fct-signature": "Commodity -\u003e Amount -\u003e Amount",
        "fct-source": "src/Hledger-Data-Amount.html#amountWithCommodity",
        "fct-type": "function",
        "title": "amountWithCommodity"
      },
      "index": {
        "description": "Convert an amount to the specified commodity ignoring and discarding any assigned prices and assuming an exchange rate of",
        "hierarchy": "Hledger Data Amount",
        "module": "Hledger.Data.Amount",
        "name": "amountWithCommodity",
        "normalized": "Commodity-\u003eAmount-\u003eAmount",
        "package": "hledger-lib",
        "partial": "With Commodity",
        "signature": "Commodity-\u003eAmount-\u003eAmount"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Amount.html#v:amounts",
      "description": {
        "fct-descr": "\u003cp\u003eGet a mixed amount's component amounts.\n\u003c/p\u003e",
        "fct-module": "Hledger.Data.Amount",
        "fct-package": "hledger-lib",
        "fct-signature": "MixedAmount -\u003e [Amount]",
        "fct-source": "src/Hledger-Data-Amount.html#amounts",
        "fct-type": "function",
        "title": "amounts"
      },
      "index": {
        "description": "Get mixed amount component amounts",
        "hierarchy": "Hledger Data Amount",
        "module": "Hledger.Data.Amount",
        "name": "amounts",
        "normalized": "MixedAmount-\u003e[Amount]",
        "package": "hledger-lib",
        "partial": "",
        "signature": "MixedAmount-\u003e[Amount]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Amount.html#v:amountstyle",
      "description": {
        "fct-module": "Hledger.Data.Amount",
        "fct-package": "hledger-lib",
        "fct-signature": "AmountStyle",
        "fct-source": "src/Hledger-Data-Amount.html#amountstyle",
        "fct-type": "function",
        "title": "amountstyle"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Data Amount",
        "module": "Hledger.Data.Amount",
        "name": "amountstyle",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Amount.html#v:at",
      "description": {
        "fct-descr": "\u003cp\u003eSet an amount's unit price.\n\u003c/p\u003e",
        "fct-module": "Hledger.Data.Amount",
        "fct-package": "hledger-lib",
        "fct-signature": "Amount -\u003e Amount -\u003e Amount",
        "fct-source": "src/Hledger-Data-Amount.html#at",
        "fct-type": "function",
        "title": "at"
      },
      "index": {
        "description": "Set an amount unit price",
        "hierarchy": "Hledger Data Amount",
        "module": "Hledger.Data.Amount",
        "name": "at",
        "normalized": "Amount-\u003eAmount-\u003eAmount",
        "package": "hledger-lib",
        "partial": "",
        "signature": "Amount-\u003eAmount-\u003eAmount"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Amount.html#v:canonicalStyles",
      "description": {
        "fct-descr": "\u003cp\u003eGiven a list of amounts in parse order, build a map from commodities\n to canonical display styles for amounts in that commodity.\n\u003c/p\u003e",
        "fct-module": "Hledger.Data.Amount",
        "fct-package": "hledger-lib",
        "fct-signature": "[Amount] -\u003e Map Commodity AmountStyle",
        "fct-source": "src/Hledger-Data-Amount.html#canonicalStyles",
        "fct-type": "function",
        "title": "canonicalStyles"
      },
      "index": {
        "description": "Given list of amounts in parse order build map from commodities to canonical display styles for amounts in that commodity",
        "hierarchy": "Hledger Data Amount",
        "module": "Hledger.Data.Amount",
        "name": "canonicalStyles",
        "normalized": "[Amount]-\u003eMap Commodity AmountStyle",
        "package": "hledger-lib",
        "partial": "Styles",
        "signature": "[Amount]-\u003eMap Commodity AmountStyle"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Amount.html#v:canonicaliseAmount",
      "description": {
        "fct-descr": "\u003cp\u003eCanonicalise an amount's display style using the provided commodity style map.\n\u003c/p\u003e",
        "fct-module": "Hledger.Data.Amount",
        "fct-package": "hledger-lib",
        "fct-signature": "Map Commodity AmountStyle -\u003e Amount -\u003e Amount",
        "fct-source": "src/Hledger-Data-Amount.html#canonicaliseAmount",
        "fct-type": "function",
        "title": "canonicaliseAmount"
      },
      "index": {
        "description": "Canonicalise an amount display style using the provided commodity style map",
        "hierarchy": "Hledger Data Amount",
        "module": "Hledger.Data.Amount",
        "name": "canonicaliseAmount",
        "normalized": "Map Commodity AmountStyle-\u003eAmount-\u003eAmount",
        "package": "hledger-lib",
        "partial": "Amount",
        "signature": "Map Commodity AmountStyle-\u003eAmount-\u003eAmount"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Amount.html#v:canonicaliseMixedAmount",
      "description": {
        "fct-descr": "\u003cp\u003eCanonicalise a mixed amount's display styles using the provided commodity style map.\n\u003c/p\u003e",
        "fct-module": "Hledger.Data.Amount",
        "fct-package": "hledger-lib",
        "fct-signature": "Map Commodity AmountStyle -\u003e MixedAmount -\u003e MixedAmount",
        "fct-source": "src/Hledger-Data-Amount.html#canonicaliseMixedAmount",
        "fct-type": "function",
        "title": "canonicaliseMixedAmount"
      },
      "index": {
        "description": "Canonicalise mixed amount display styles using the provided commodity style map",
        "hierarchy": "Hledger Data Amount",
        "module": "Hledger.Data.Amount",
        "name": "canonicaliseMixedAmount",
        "normalized": "Map Commodity AmountStyle-\u003eMixedAmount-\u003eMixedAmount",
        "package": "hledger-lib",
        "partial": "Mixed Amount",
        "signature": "Map Commodity AmountStyle-\u003eMixedAmount-\u003eMixedAmount"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Amount.html#v:costOfAmount",
      "description": {
        "fct-descr": "\u003cp\u003eConvert an amount to the commodity of its assigned price, if any.  Notes:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e price amounts must be MixedAmounts with exactly one component Amount (or there will be a runtime error)\n\u003c/li\u003e\u003cli\u003e price amounts should be positive, though this is not currently enforced\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Hledger.Data.Amount",
        "fct-package": "hledger-lib",
        "fct-signature": "Amount -\u003e Amount",
        "fct-source": "src/Hledger-Data-Amount.html#costOfAmount",
        "fct-type": "function",
        "title": "costOfAmount"
      },
      "index": {
        "description": "Convert an amount to the commodity of its assigned price if any Notes price amounts must be MixedAmounts with exactly one component Amount or there will be runtime error price amounts should be positive though this is not currently enforced",
        "hierarchy": "Hledger Data Amount",
        "module": "Hledger.Data.Amount",
        "name": "costOfAmount",
        "normalized": "Amount-\u003eAmount",
        "package": "hledger-lib",
        "partial": "Of Amount",
        "signature": "Amount-\u003eAmount"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Amount.html#v:costOfMixedAmount",
      "description": {
        "fct-descr": "\u003cp\u003eConvert a mixed amount's component amounts to the commodity of their\n assigned price, if any.\n\u003c/p\u003e",
        "fct-module": "Hledger.Data.Amount",
        "fct-package": "hledger-lib",
        "fct-signature": "MixedAmount -\u003e MixedAmount",
        "fct-source": "src/Hledger-Data-Amount.html#costOfMixedAmount",
        "fct-type": "function",
        "title": "costOfMixedAmount"
      },
      "index": {
        "description": "Convert mixed amount component amounts to the commodity of their assigned price if any",
        "hierarchy": "Hledger Data Amount",
        "module": "Hledger.Data.Amount",
        "name": "costOfMixedAmount",
        "normalized": "MixedAmount-\u003eMixedAmount",
        "package": "hledger-lib",
        "partial": "Of Mixed Amount",
        "signature": "MixedAmount-\u003eMixedAmount"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Amount.html#v:divideAmount",
      "description": {
        "fct-descr": "\u003cp\u003eDivide an amount's quantity by a constant.\n\u003c/p\u003e",
        "fct-module": "Hledger.Data.Amount",
        "fct-package": "hledger-lib",
        "fct-signature": "Amount -\u003e Double -\u003e Amount",
        "fct-source": "src/Hledger-Data-Amount.html#divideAmount",
        "fct-type": "function",
        "title": "divideAmount"
      },
      "index": {
        "description": "Divide an amount quantity by constant",
        "hierarchy": "Hledger Data Amount",
        "module": "Hledger.Data.Amount",
        "name": "divideAmount",
        "normalized": "Amount-\u003eDouble-\u003eAmount",
        "package": "hledger-lib",
        "partial": "Amount",
        "signature": "Amount-\u003eDouble-\u003eAmount"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Amount.html#v:divideMixedAmount",
      "description": {
        "fct-descr": "\u003cp\u003eDivide a mixed amount's quantities by a constant.\n\u003c/p\u003e",
        "fct-module": "Hledger.Data.Amount",
        "fct-package": "hledger-lib",
        "fct-signature": "MixedAmount -\u003e Double -\u003e MixedAmount",
        "fct-source": "src/Hledger-Data-Amount.html#divideMixedAmount",
        "fct-type": "function",
        "title": "divideMixedAmount"
      },
      "index": {
        "description": "Divide mixed amount quantities by constant",
        "hierarchy": "Hledger Data Amount",
        "module": "Hledger.Data.Amount",
        "name": "divideMixedAmount",
        "normalized": "MixedAmount-\u003eDouble-\u003eMixedAmount",
        "package": "hledger-lib",
        "partial": "Mixed Amount",
        "signature": "MixedAmount-\u003eDouble-\u003eMixedAmount"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Amount.html#v:eur",
      "description": {
        "fct-module": "Hledger.Data.Amount",
        "fct-package": "hledger-lib",
        "fct-signature": "Quantity -\u003e Amount",
        "fct-source": "src/Hledger-Data-Amount.html#eur",
        "fct-type": "function",
        "title": "eur"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Data Amount",
        "module": "Hledger.Data.Amount",
        "name": "eur",
        "normalized": "Quantity-\u003eAmount",
        "package": "hledger-lib",
        "partial": "",
        "signature": "Quantity-\u003eAmount"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Amount.html#v:gbp",
      "description": {
        "fct-module": "Hledger.Data.Amount",
        "fct-package": "hledger-lib",
        "fct-signature": "Quantity -\u003e Amount",
        "fct-source": "src/Hledger-Data-Amount.html#gbp",
        "fct-type": "function",
        "title": "gbp"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Data Amount",
        "module": "Hledger.Data.Amount",
        "name": "gbp",
        "normalized": "Quantity-\u003eAmount",
        "package": "hledger-lib",
        "partial": "",
        "signature": "Quantity-\u003eAmount"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Amount.html#v:hrs",
      "description": {
        "fct-module": "Hledger.Data.Amount",
        "fct-package": "hledger-lib",
        "fct-signature": "Quantity -\u003e Amount",
        "fct-source": "src/Hledger-Data-Amount.html#hrs",
        "fct-type": "function",
        "title": "hrs"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Data Amount",
        "module": "Hledger.Data.Amount",
        "name": "hrs",
        "normalized": "Quantity-\u003eAmount",
        "package": "hledger-lib",
        "partial": "",
        "signature": "Quantity-\u003eAmount"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Amount.html#v:isNegativeMixedAmount",
      "description": {
        "fct-descr": "\u003cp\u003eIs this mixed amount negative, if it can be normalised to a single commodity ?\n\u003c/p\u003e",
        "fct-module": "Hledger.Data.Amount",
        "fct-package": "hledger-lib",
        "fct-signature": "MixedAmount -\u003e Maybe Bool",
        "fct-source": "src/Hledger-Data-Amount.html#isNegativeMixedAmount",
        "fct-type": "function",
        "title": "isNegativeMixedAmount"
      },
      "index": {
        "description": "Is this mixed amount negative if it can be normalised to single commodity",
        "hierarchy": "Hledger Data Amount",
        "module": "Hledger.Data.Amount",
        "name": "isNegativeMixedAmount",
        "normalized": "MixedAmount-\u003eMaybe Bool",
        "package": "hledger-lib",
        "partial": "Negative Mixed Amount",
        "signature": "MixedAmount-\u003eMaybe Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Amount.html#v:isReallyZeroMixedAmount",
      "description": {
        "fct-descr": "\u003cp\u003eIs this mixed amount \u003ca\u003ereally\u003c/a\u003e zero ? See isReallyZeroAmount.\n\u003c/p\u003e",
        "fct-module": "Hledger.Data.Amount",
        "fct-package": "hledger-lib",
        "fct-signature": "MixedAmount -\u003e Bool",
        "fct-source": "src/Hledger-Data-Amount.html#isReallyZeroMixedAmount",
        "fct-type": "function",
        "title": "isReallyZeroMixedAmount"
      },
      "index": {
        "description": "Is this mixed amount really zero See isReallyZeroAmount",
        "hierarchy": "Hledger Data Amount",
        "module": "Hledger.Data.Amount",
        "name": "isReallyZeroMixedAmount",
        "normalized": "MixedAmount-\u003eBool",
        "package": "hledger-lib",
        "partial": "Really Zero Mixed Amount",
        "signature": "MixedAmount-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Amount.html#v:isReallyZeroMixedAmountCost",
      "description": {
        "fct-descr": "\u003cp\u003eIs this mixed amount \u003ca\u003ereally\u003c/a\u003e zero, after converting to cost\n commodities where possible ?\n\u003c/p\u003e",
        "fct-module": "Hledger.Data.Amount",
        "fct-package": "hledger-lib",
        "fct-signature": "MixedAmount -\u003e Bool",
        "fct-source": "src/Hledger-Data-Amount.html#isReallyZeroMixedAmountCost",
        "fct-type": "function",
        "title": "isReallyZeroMixedAmountCost"
      },
      "index": {
        "description": "Is this mixed amount really zero after converting to cost commodities where possible",
        "hierarchy": "Hledger Data Amount",
        "module": "Hledger.Data.Amount",
        "name": "isReallyZeroMixedAmountCost",
        "normalized": "MixedAmount-\u003eBool",
        "package": "hledger-lib",
        "partial": "Really Zero Mixed Amount Cost",
        "signature": "MixedAmount-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Amount.html#v:isZeroMixedAmount",
      "description": {
        "fct-descr": "\u003cp\u003eDoes this mixed amount appear to be zero when displayed with its given precision ?\n\u003c/p\u003e",
        "fct-module": "Hledger.Data.Amount",
        "fct-package": "hledger-lib",
        "fct-signature": "MixedAmount -\u003e Bool",
        "fct-source": "src/Hledger-Data-Amount.html#isZeroMixedAmount",
        "fct-type": "function",
        "title": "isZeroMixedAmount"
      },
      "index": {
        "description": "Does this mixed amount appear to be zero when displayed with its given precision",
        "hierarchy": "Hledger Data Amount",
        "module": "Hledger.Data.Amount",
        "name": "isZeroMixedAmount",
        "normalized": "MixedAmount-\u003eBool",
        "package": "hledger-lib",
        "partial": "Zero Mixed Amount",
        "signature": "MixedAmount-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Amount.html#v:ltraceamount",
      "description": {
        "fct-descr": "\u003cp\u003eCompact labelled trace of a mixed amount, for debugging.\n\u003c/p\u003e",
        "fct-module": "Hledger.Data.Amount",
        "fct-package": "hledger-lib",
        "fct-signature": "String -\u003e MixedAmount -\u003e MixedAmount",
        "fct-source": "src/Hledger-Data-Amount.html#ltraceamount",
        "fct-type": "function",
        "title": "ltraceamount"
      },
      "index": {
        "description": "Compact labelled trace of mixed amount for debugging",
        "hierarchy": "Hledger Data Amount",
        "module": "Hledger.Data.Amount",
        "name": "ltraceamount",
        "normalized": "String-\u003eMixedAmount-\u003eMixedAmount",
        "package": "hledger-lib",
        "partial": "",
        "signature": "String-\u003eMixedAmount-\u003eMixedAmount"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Amount.html#v:maxprecision",
      "description": {
        "fct-descr": "\u003cp\u003eFor rendering: a special precision value which means show all available digits.\n\u003c/p\u003e",
        "fct-module": "Hledger.Data.Amount",
        "fct-package": "hledger-lib",
        "fct-signature": "Int",
        "fct-source": "src/Hledger-Data-Amount.html#maxprecision",
        "fct-type": "function",
        "title": "maxprecision"
      },
      "index": {
        "description": "For rendering special precision value which means show all available digits",
        "hierarchy": "Hledger Data Amount",
        "module": "Hledger.Data.Amount",
        "name": "maxprecision",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Amount.html#v:maxprecisionwithpoint",
      "description": {
        "fct-descr": "\u003cp\u003eFor rendering: a special precision value which forces display of a decimal point.\n\u003c/p\u003e",
        "fct-module": "Hledger.Data.Amount",
        "fct-package": "hledger-lib",
        "fct-signature": "Int",
        "fct-source": "src/Hledger-Data-Amount.html#maxprecisionwithpoint",
        "fct-type": "function",
        "title": "maxprecisionwithpoint"
      },
      "index": {
        "description": "For rendering special precision value which forces display of decimal point",
        "hierarchy": "Hledger Data Amount",
        "module": "Hledger.Data.Amount",
        "name": "maxprecisionwithpoint",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Amount.html#v:missingamt",
      "description": {
        "fct-descr": "\u003cp\u003eA temporary value for parsed transactions which had no amount specified.\n\u003c/p\u003e",
        "fct-module": "Hledger.Data.Amount",
        "fct-package": "hledger-lib",
        "fct-signature": "Amount",
        "fct-source": "src/Hledger-Data-Amount.html#missingamt",
        "fct-type": "function",
        "title": "missingamt"
      },
      "index": {
        "description": "temporary value for parsed transactions which had no amount specified",
        "hierarchy": "Hledger Data Amount",
        "module": "Hledger.Data.Amount",
        "name": "missingamt",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Amount.html#v:missingmixedamt",
      "description": {
        "fct-module": "Hledger.Data.Amount",
        "fct-package": "hledger-lib",
        "fct-signature": "MixedAmount",
        "fct-source": "src/Hledger-Data-Amount.html#missingmixedamt",
        "fct-type": "function",
        "title": "missingmixedamt"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Data Amount",
        "module": "Hledger.Data.Amount",
        "name": "missingmixedamt",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Amount.html#v:mixed",
      "description": {
        "fct-module": "Hledger.Data.Amount",
        "fct-package": "hledger-lib",
        "fct-signature": "Amount -\u003e MixedAmount",
        "fct-source": "src/Hledger-Data-Amount.html#mixed",
        "fct-type": "function",
        "title": "mixed"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Data Amount",
        "module": "Hledger.Data.Amount",
        "name": "mixed",
        "normalized": "Amount-\u003eMixedAmount",
        "package": "hledger-lib",
        "partial": "",
        "signature": "Amount-\u003eMixedAmount"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Amount.html#v:normaliseMixedAmountPreservingFirstPrice",
      "description": {
        "fct-descr": "\u003cp\u003eSimplify a mixed amount's component amounts: combine amounts with\n the same commodity, using the first amount's price for subsequent\n amounts in each commodity (ie, this function alters the amount and\n is best used as a rendering helper.). Also remove any zero amounts\n and replace an empty amount list with a single zero amount.\n\u003c/p\u003e",
        "fct-module": "Hledger.Data.Amount",
        "fct-package": "hledger-lib",
        "fct-signature": "MixedAmount -\u003e MixedAmount",
        "fct-source": "src/Hledger-Data-Amount.html#normaliseMixedAmountPreservingFirstPrice",
        "fct-type": "function",
        "title": "normaliseMixedAmountPreservingFirstPrice"
      },
      "index": {
        "description": "Simplify mixed amount component amounts combine amounts with the same commodity using the first amount price for subsequent amounts in each commodity ie this function alters the amount and is best used as rendering helper Also remove any zero amounts and replace an empty amount list with single zero amount",
        "hierarchy": "Hledger Data Amount",
        "module": "Hledger.Data.Amount",
        "name": "normaliseMixedAmountPreservingFirstPrice",
        "normalized": "MixedAmount-\u003eMixedAmount",
        "package": "hledger-lib",
        "partial": "Mixed Amount Preserving First Price",
        "signature": "MixedAmount-\u003eMixedAmount"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Amount.html#v:normaliseMixedAmountPreservingPrices",
      "description": {
        "fct-descr": "\u003cp\u003eSimplify a mixed amount's component amounts: we can combine amounts\n with the same commodity and unit price. Also remove any zero or missing\n amounts and replace an empty amount list with a single zero amount.\n\u003c/p\u003e",
        "fct-module": "Hledger.Data.Amount",
        "fct-package": "hledger-lib",
        "fct-signature": "MixedAmount -\u003e MixedAmount",
        "fct-source": "src/Hledger-Data-Amount.html#normaliseMixedAmountPreservingPrices",
        "fct-type": "function",
        "title": "normaliseMixedAmountPreservingPrices"
      },
      "index": {
        "description": "Simplify mixed amount component amounts we can combine amounts with the same commodity and unit price Also remove any zero or missing amounts and replace an empty amount list with single zero amount",
        "hierarchy": "Hledger Data Amount",
        "module": "Hledger.Data.Amount",
        "name": "normaliseMixedAmountPreservingPrices",
        "normalized": "MixedAmount-\u003eMixedAmount",
        "package": "hledger-lib",
        "partial": "Mixed Amount Preserving Prices",
        "signature": "MixedAmount-\u003eMixedAmount"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Amount.html#v:nullamt",
      "description": {
        "fct-descr": "\u003cp\u003eThe empty simple amount.\n\u003c/p\u003e",
        "fct-module": "Hledger.Data.Amount",
        "fct-package": "hledger-lib",
        "fct-signature": "Amount",
        "fct-source": "src/Hledger-Data-Amount.html#nullamt",
        "fct-type": "function",
        "title": "nullamt"
      },
      "index": {
        "description": "The empty simple amount",
        "hierarchy": "Hledger Data Amount",
        "module": "Hledger.Data.Amount",
        "name": "nullamt",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Amount.html#v:nullmixedamt",
      "description": {
        "fct-descr": "\u003cp\u003eThe empty mixed amount.\n\u003c/p\u003e",
        "fct-module": "Hledger.Data.Amount",
        "fct-package": "hledger-lib",
        "fct-signature": "MixedAmount",
        "fct-source": "src/Hledger-Data-Amount.html#nullmixedamt",
        "fct-type": "function",
        "title": "nullmixedamt"
      },
      "index": {
        "description": "The empty mixed amount",
        "hierarchy": "Hledger Data Amount",
        "module": "Hledger.Data.Amount",
        "name": "nullmixedamt",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Amount.html#v:num",
      "description": {
        "fct-module": "Hledger.Data.Amount",
        "fct-package": "hledger-lib",
        "fct-signature": "Quantity -\u003e Amount",
        "fct-source": "src/Hledger-Data-Amount.html#num",
        "fct-type": "function",
        "title": "num"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Data Amount",
        "module": "Hledger.Data.Amount",
        "name": "num",
        "normalized": "Quantity-\u003eAmount",
        "package": "hledger-lib",
        "partial": "",
        "signature": "Quantity-\u003eAmount"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Amount.html#v:setAmountPrecision",
      "description": {
        "fct-descr": "\u003cp\u003eSet an amount's display precision.\n\u003c/p\u003e",
        "fct-module": "Hledger.Data.Amount",
        "fct-package": "hledger-lib",
        "fct-signature": "Int -\u003e Amount -\u003e Amount",
        "fct-source": "src/Hledger-Data-Amount.html#setAmountPrecision",
        "fct-type": "function",
        "title": "setAmountPrecision"
      },
      "index": {
        "description": "Set an amount display precision",
        "hierarchy": "Hledger Data Amount",
        "module": "Hledger.Data.Amount",
        "name": "setAmountPrecision",
        "normalized": "Int-\u003eAmount-\u003eAmount",
        "package": "hledger-lib",
        "partial": "Amount Precision",
        "signature": "Int-\u003eAmount-\u003eAmount"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Amount.html#v:setMixedAmountPrecision",
      "description": {
        "fct-descr": "\u003cp\u003eSet the display precision in the amount's commodities.\n\u003c/p\u003e",
        "fct-module": "Hledger.Data.Amount",
        "fct-package": "hledger-lib",
        "fct-signature": "Int -\u003e MixedAmount -\u003e MixedAmount",
        "fct-source": "src/Hledger-Data-Amount.html#setMixedAmountPrecision",
        "fct-type": "function",
        "title": "setMixedAmountPrecision"
      },
      "index": {
        "description": "Set the display precision in the amount commodities",
        "hierarchy": "Hledger Data Amount",
        "module": "Hledger.Data.Amount",
        "name": "setMixedAmountPrecision",
        "normalized": "Int-\u003eMixedAmount-\u003eMixedAmount",
        "package": "hledger-lib",
        "partial": "Mixed Amount Precision",
        "signature": "Int-\u003eMixedAmount-\u003eMixedAmount"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Amount.html#v:showAmount",
      "description": {
        "fct-descr": "\u003cp\u003eGet the string representation of an amount, based on its commodity's\n display settings. String representations equivalent to zero are\n converted to just \"0\".\n\u003c/p\u003e",
        "fct-module": "Hledger.Data.Amount",
        "fct-package": "hledger-lib",
        "fct-signature": "Amount -\u003e String",
        "fct-source": "src/Hledger-Data-Amount.html#showAmount",
        "fct-type": "function",
        "title": "showAmount"
      },
      "index": {
        "description": "Get the string representation of an amount based on its commodity display settings String representations equivalent to zero are converted to just",
        "hierarchy": "Hledger Data Amount",
        "module": "Hledger.Data.Amount",
        "name": "showAmount",
        "normalized": "Amount-\u003eString",
        "package": "hledger-lib",
        "partial": "Amount",
        "signature": "Amount-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Amount.html#v:showAmountDebug",
      "description": {
        "fct-descr": "\u003cp\u003eGet a string representation of an amount for debugging,\n appropriate to the current debug level. 9 shows maximum detail.\n\u003c/p\u003e",
        "fct-module": "Hledger.Data.Amount",
        "fct-package": "hledger-lib",
        "fct-signature": "Amount -\u003e String",
        "fct-source": "src/Hledger-Data-Amount.html#showAmountDebug",
        "fct-type": "function",
        "title": "showAmountDebug"
      },
      "index": {
        "description": "Get string representation of an amount for debugging appropriate to the current debug level shows maximum detail",
        "hierarchy": "Hledger Data Amount",
        "module": "Hledger.Data.Amount",
        "name": "showAmountDebug",
        "normalized": "Amount-\u003eString",
        "package": "hledger-lib",
        "partial": "Amount Debug",
        "signature": "Amount-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Amount.html#v:showAmountWithoutPrice",
      "description": {
        "fct-descr": "\u003cp\u003eGet the string representation of an amount, without any @ price.\n\u003c/p\u003e",
        "fct-module": "Hledger.Data.Amount",
        "fct-package": "hledger-lib",
        "fct-signature": "Amount -\u003e String",
        "fct-source": "src/Hledger-Data-Amount.html#showAmountWithoutPrice",
        "fct-type": "function",
        "title": "showAmountWithoutPrice"
      },
      "index": {
        "description": "Get the string representation of an amount without any price",
        "hierarchy": "Hledger Data Amount",
        "module": "Hledger.Data.Amount",
        "name": "showAmountWithoutPrice",
        "normalized": "Amount-\u003eString",
        "package": "hledger-lib",
        "partial": "Amount Without Price",
        "signature": "Amount-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Amount.html#v:showMixedAmount",
      "description": {
        "fct-descr": "\u003cp\u003eGet the string representation of a mixed amount, showing each of\n its component amounts. NB a mixed amount can have an empty amounts\n list in which case it shows as \"\".\n\u003c/p\u003e",
        "fct-module": "Hledger.Data.Amount",
        "fct-package": "hledger-lib",
        "fct-signature": "MixedAmount -\u003e String",
        "fct-source": "src/Hledger-Data-Amount.html#showMixedAmount",
        "fct-type": "function",
        "title": "showMixedAmount"
      },
      "index": {
        "description": "Get the string representation of mixed amount showing each of its component amounts NB mixed amount can have an empty amounts list in which case it shows as",
        "hierarchy": "Hledger Data Amount",
        "module": "Hledger.Data.Amount",
        "name": "showMixedAmount",
        "normalized": "MixedAmount-\u003eString",
        "package": "hledger-lib",
        "partial": "Mixed Amount",
        "signature": "MixedAmount-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Amount.html#v:showMixedAmountDebug",
      "description": {
        "fct-descr": "\u003cp\u003eGet an unambiguous string representation of a mixed amount for debugging.\n\u003c/p\u003e",
        "fct-module": "Hledger.Data.Amount",
        "fct-package": "hledger-lib",
        "fct-signature": "MixedAmount -\u003e String",
        "fct-source": "src/Hledger-Data-Amount.html#showMixedAmountDebug",
        "fct-type": "function",
        "title": "showMixedAmountDebug"
      },
      "index": {
        "description": "Get an unambiguous string representation of mixed amount for debugging",
        "hierarchy": "Hledger Data Amount",
        "module": "Hledger.Data.Amount",
        "name": "showMixedAmountDebug",
        "normalized": "MixedAmount-\u003eString",
        "package": "hledger-lib",
        "partial": "Mixed Amount Debug",
        "signature": "MixedAmount-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Amount.html#v:showMixedAmountWithPrecision",
      "description": {
        "fct-descr": "\u003cp\u003eGet the string representation of a mixed amount, showing each of its\n component amounts with the specified precision, ignoring their\n commoditys' display precision settings.\n\u003c/p\u003e",
        "fct-module": "Hledger.Data.Amount",
        "fct-package": "hledger-lib",
        "fct-signature": "Int -\u003e MixedAmount -\u003e String",
        "fct-source": "src/Hledger-Data-Amount.html#showMixedAmountWithPrecision",
        "fct-type": "function",
        "title": "showMixedAmountWithPrecision"
      },
      "index": {
        "description": "Get the string representation of mixed amount showing each of its component amounts with the specified precision ignoring their commoditys display precision settings",
        "hierarchy": "Hledger Data Amount",
        "module": "Hledger.Data.Amount",
        "name": "showMixedAmountWithPrecision",
        "normalized": "Int-\u003eMixedAmount-\u003eString",
        "package": "hledger-lib",
        "partial": "Mixed Amount With Precision",
        "signature": "Int-\u003eMixedAmount-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Amount.html#v:showMixedAmountWithoutPrice",
      "description": {
        "fct-descr": "\u003cp\u003eGet the string representation of a mixed amount, but without\n any @ prices.\n\u003c/p\u003e",
        "fct-module": "Hledger.Data.Amount",
        "fct-package": "hledger-lib",
        "fct-signature": "MixedAmount -\u003e String",
        "fct-source": "src/Hledger-Data-Amount.html#showMixedAmountWithoutPrice",
        "fct-type": "function",
        "title": "showMixedAmountWithoutPrice"
      },
      "index": {
        "description": "Get the string representation of mixed amount but without any prices",
        "hierarchy": "Hledger Data Amount",
        "module": "Hledger.Data.Amount",
        "name": "showMixedAmountWithoutPrice",
        "normalized": "MixedAmount-\u003eString",
        "package": "hledger-lib",
        "partial": "Mixed Amount Without Price",
        "signature": "MixedAmount-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Amount.html#v:sumAmounts",
      "description": {
        "fct-descr": "\u003cp\u003eA more complete amount adding operation.\n\u003c/p\u003e",
        "fct-module": "Hledger.Data.Amount",
        "fct-package": "hledger-lib",
        "fct-signature": "[Amount] -\u003e MixedAmount",
        "fct-source": "src/Hledger-Data-Amount.html#sumAmounts",
        "fct-type": "function",
        "title": "sumAmounts"
      },
      "index": {
        "description": "more complete amount adding operation",
        "hierarchy": "Hledger Data Amount",
        "module": "Hledger.Data.Amount",
        "name": "sumAmounts",
        "normalized": "[Amount]-\u003eMixedAmount",
        "package": "hledger-lib",
        "partial": "Amounts",
        "signature": "[Amount]-\u003eMixedAmount"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Amount.html#v:tests_Hledger_Data_Amount",
      "description": {
        "fct-module": "Hledger.Data.Amount",
        "fct-package": "hledger-lib",
        "fct-signature": "Test",
        "fct-source": "src/Hledger-Data-Amount.html#tests_Hledger_Data_Amount",
        "fct-type": "function",
        "title": "tests_Hledger_Data_Amount"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Data Amount",
        "module": "Hledger.Data.Amount",
        "name": "tests_Hledger_Data_Amount",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "Hledger Data Amount",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Amount.html#v:usd",
      "description": {
        "fct-module": "Hledger.Data.Amount",
        "fct-package": "hledger-lib",
        "fct-signature": "Quantity -\u003e Amount",
        "fct-source": "src/Hledger-Data-Amount.html#usd",
        "fct-type": "function",
        "title": "usd"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Data Amount",
        "module": "Hledger.Data.Amount",
        "name": "usd",
        "normalized": "Quantity-\u003eAmount",
        "package": "hledger-lib",
        "partial": "",
        "signature": "Quantity-\u003eAmount"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Amount.html#v:withPrecision",
      "description": {
        "fct-descr": "\u003cp\u003eSet an amount's display precision, flipped.\n\u003c/p\u003e",
        "fct-module": "Hledger.Data.Amount",
        "fct-package": "hledger-lib",
        "fct-signature": "Amount -\u003e Int -\u003e Amount",
        "fct-source": "src/Hledger-Data-Amount.html#withPrecision",
        "fct-type": "function",
        "title": "withPrecision"
      },
      "index": {
        "description": "Set an amount display precision flipped",
        "hierarchy": "Hledger Data Amount",
        "module": "Hledger.Data.Amount",
        "name": "withPrecision",
        "normalized": "Amount-\u003eInt-\u003eAmount",
        "package": "hledger-lib",
        "partial": "Precision",
        "signature": "Amount-\u003eInt-\u003eAmount"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Commodity.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA \u003ccode\u003e\u003ca\u003eCommodity\u003c/a\u003e\u003c/code\u003e is a symbol representing a currency or some other kind of\nthing we are tracking, and some display preferences that tell how to\ndisplay \u003ccode\u003e\u003ca\u003eAmount\u003c/a\u003e\u003c/code\u003es of the commodity - is the symbol on the left or right,\nare thousands separated by comma, significant decimal places and so on.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Hledger.Data.Commodity",
        "fct-package": "hledger-lib",
        "fct-signature": "module",
        "fct-source": "src/Hledger-Data-Commodity.html",
        "fct-type": "module",
        "title": "Commodity"
      },
      "index": {
        "description": "Commodity is symbol representing currency or some other kind of thing we are tracking and some display preferences that tell how to display Amount of the commodity is the symbol on the left or right are thousands separated by comma significant decimal places and so on",
        "hierarchy": "Hledger Data Commodity",
        "module": "Hledger.Data.Commodity",
        "name": "Commodity",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "Commodity",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Commodity.html#v:comm",
      "description": {
        "fct-descr": "\u003cp\u003eLook up one of the sample commodities' symbol by name.\n\u003c/p\u003e",
        "fct-module": "Hledger.Data.Commodity",
        "fct-package": "hledger-lib",
        "fct-signature": "String -\u003e Commodity",
        "fct-source": "src/Hledger-Data-Commodity.html#comm",
        "fct-type": "function",
        "title": "comm"
      },
      "index": {
        "description": "Look up one of the sample commodities symbol by name",
        "hierarchy": "Hledger Data Commodity",
        "module": "Hledger.Data.Commodity",
        "name": "comm",
        "normalized": "String-\u003eCommodity",
        "package": "hledger-lib",
        "partial": "",
        "signature": "String-\u003eCommodity"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Commodity.html#v:commodity",
      "description": {
        "fct-module": "Hledger.Data.Commodity",
        "fct-package": "hledger-lib",
        "fct-signature": "[Char]",
        "fct-source": "src/Hledger-Data-Commodity.html#commodity",
        "fct-type": "function",
        "title": "commodity"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Data Commodity",
        "module": "Hledger.Data.Commodity",
        "name": "commodity",
        "normalized": "[Char]",
        "package": "hledger-lib",
        "partial": "",
        "signature": "[Char]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Commodity.html#v:commoditysymbols",
      "description": {
        "fct-module": "Hledger.Data.Commodity",
        "fct-package": "hledger-lib",
        "fct-signature": "[([Char], [Char])]",
        "fct-source": "src/Hledger-Data-Commodity.html#commoditysymbols",
        "fct-type": "function",
        "title": "commoditysymbols"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Data Commodity",
        "module": "Hledger.Data.Commodity",
        "name": "commoditysymbols",
        "normalized": "[([Char],[Char])]",
        "package": "hledger-lib",
        "partial": "",
        "signature": "[([Char],[Char])]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Commodity.html#v:conversionRate",
      "description": {
        "fct-descr": "\u003cp\u003eFind the conversion rate between two commodities. Currently returns 1.\n\u003c/p\u003e",
        "fct-module": "Hledger.Data.Commodity",
        "fct-package": "hledger-lib",
        "fct-signature": "Commodity -\u003e Commodity -\u003e Double",
        "fct-source": "src/Hledger-Data-Commodity.html#conversionRate",
        "fct-type": "function",
        "title": "conversionRate"
      },
      "index": {
        "description": "Find the conversion rate between two commodities Currently returns",
        "hierarchy": "Hledger Data Commodity",
        "module": "Hledger.Data.Commodity",
        "name": "conversionRate",
        "normalized": "Commodity-\u003eCommodity-\u003eDouble",
        "package": "hledger-lib",
        "partial": "Rate",
        "signature": "Commodity-\u003eCommodity-\u003eDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Commodity.html#v:nonsimplecommoditychars",
      "description": {
        "fct-module": "Hledger.Data.Commodity",
        "fct-package": "hledger-lib",
        "fct-signature": "String",
        "fct-source": "src/Hledger-Data-Commodity.html#nonsimplecommoditychars",
        "fct-type": "function",
        "title": "nonsimplecommoditychars"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Data Commodity",
        "module": "Hledger.Data.Commodity",
        "name": "nonsimplecommoditychars",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Commodity.html#v:quoteCommoditySymbolIfNeeded",
      "description": {
        "fct-module": "Hledger.Data.Commodity",
        "fct-package": "hledger-lib",
        "fct-signature": "[Char] -\u003e [Char]",
        "fct-source": "src/Hledger-Data-Commodity.html#quoteCommoditySymbolIfNeeded",
        "fct-type": "function",
        "title": "quoteCommoditySymbolIfNeeded"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Data Commodity",
        "module": "Hledger.Data.Commodity",
        "name": "quoteCommoditySymbolIfNeeded",
        "normalized": "[Char]-\u003e[Char]",
        "package": "hledger-lib",
        "partial": "Commodity Symbol If Needed",
        "signature": "[Char]-\u003e[Char]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Commodity.html#v:tests_Hledger_Data_Commodity",
      "description": {
        "fct-module": "Hledger.Data.Commodity",
        "fct-package": "hledger-lib",
        "fct-signature": "Test",
        "fct-source": "src/Hledger-Data-Commodity.html#tests_Hledger_Data_Commodity",
        "fct-type": "function",
        "title": "tests_Hledger_Data_Commodity"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Data Commodity",
        "module": "Hledger.Data.Commodity",
        "name": "tests_Hledger_Data_Commodity",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "Hledger Data Commodity",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Dates.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDate parsing and utilities for hledger.\n\u003c/p\u003e\u003cp\u003eFor date and time values, we use the standard Day and UTCTime types.\n\u003c/p\u003e\u003cp\u003eA \u003ccode\u003e\u003ca\u003eSmartDate\u003c/a\u003e\u003c/code\u003e is a date which may be partially-specified or relative.\nEg 2008/12/31, but also 2008/12, 12/31, tomorrow, last week, next year.\nWe represent these as a triple of strings like (\"2008\",\"12\",\"\"),\n(\"\",\"\",\"tomorrow\"), (\"\",\"last\",\"week\").\n\u003c/p\u003e\u003cp\u003eA \u003ccode\u003e\u003ca\u003eDateSpan\u003c/a\u003e\u003c/code\u003e is the span of time between two specific calendar dates, or\nan open-ended span where one or both dates are unspecified. (A date span\nwith both ends unspecified matches all dates.)\n\u003c/p\u003e\u003cp\u003eAn \u003ccode\u003e\u003ca\u003eInterval\u003c/a\u003e\u003c/code\u003e is ledger's \"reporting interval\" - weekly, monthly,\nquarterly, etc.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Hledger.Data.Dates",
        "fct-package": "hledger-lib",
        "fct-signature": "module",
        "fct-source": "src/Hledger-Data-Dates.html",
        "fct-type": "module",
        "title": "Dates"
      },
      "index": {
        "description": "Date parsing and utilities for hledger For date and time values we use the standard Day and UTCTime types SmartDate is date which may be partially-specified or relative Eg but also tomorrow last week next year We represent these as triple of strings like tomorrow last week DateSpan is the span of time between two specific calendar dates or an open-ended span where one or both dates are unspecified date span with both ends unspecified matches all dates An Interval is ledger reporting interval weekly monthly quarterly etc",
        "hierarchy": "Hledger Data Dates",
        "module": "Hledger.Data.Dates",
        "name": "Dates",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "Dates",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Dates.html#v:datesepchar",
      "description": {
        "fct-module": "Hledger.Data.Dates",
        "fct-package": "hledger-lib",
        "fct-signature": "ParsecT [Char] u Identity Char",
        "fct-source": "src/Hledger-Data-Dates.html#datesepchar",
        "fct-type": "function",
        "title": "datesepchar"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Data Dates",
        "module": "Hledger.Data.Dates",
        "name": "datesepchar",
        "normalized": "ParsecT[Char]a Identity Char",
        "package": "hledger-lib",
        "partial": "",
        "signature": "ParsecT[Char]u Identity Char"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Dates.html#v:datesepchars",
      "description": {
        "fct-module": "Hledger.Data.Dates",
        "fct-package": "hledger-lib",
        "fct-signature": "[Char]",
        "fct-source": "src/Hledger-Data-Dates.html#datesepchars",
        "fct-type": "function",
        "title": "datesepchars"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Data Dates",
        "module": "Hledger.Data.Dates",
        "name": "datesepchars",
        "normalized": "[Char]",
        "package": "hledger-lib",
        "partial": "",
        "signature": "[Char]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Dates.html#v:daysInSpan",
      "description": {
        "fct-descr": "\u003cp\u003eCount the days in a DateSpan, or if it is open-ended return Nothing.\n\u003c/p\u003e",
        "fct-module": "Hledger.Data.Dates",
        "fct-package": "hledger-lib",
        "fct-signature": "DateSpan -\u003e Maybe Integer",
        "fct-source": "src/Hledger-Data-Dates.html#daysInSpan",
        "fct-type": "function",
        "title": "daysInSpan"
      },
      "index": {
        "description": "Count the days in DateSpan or if it is open-ended return Nothing",
        "hierarchy": "Hledger Data Dates",
        "module": "Hledger.Data.Dates",
        "name": "daysInSpan",
        "normalized": "DateSpan-\u003eMaybe Integer",
        "package": "hledger-lib",
        "partial": "In Span",
        "signature": "DateSpan-\u003eMaybe Integer"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Dates.html#v:elapsedSeconds",
      "description": {
        "fct-module": "Hledger.Data.Dates",
        "fct-package": "hledger-lib",
        "fct-signature": "UTCTime -\u003e UTCTime -\u003e a",
        "fct-source": "src/Hledger-Data-Dates.html#elapsedSeconds",
        "fct-type": "function",
        "title": "elapsedSeconds"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Data Dates",
        "module": "Hledger.Data.Dates",
        "name": "elapsedSeconds",
        "normalized": "UTCTime-\u003eUTCTime-\u003ea",
        "package": "hledger-lib",
        "partial": "Seconds",
        "signature": "UTCTime-\u003eUTCTime-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Dates.html#v:failIfInvalidYear",
      "description": {
        "fct-module": "Hledger.Data.Dates",
        "fct-package": "hledger-lib",
        "fct-signature": "String -\u003e m ()",
        "fct-source": "src/Hledger-Data-Dates.html#failIfInvalidYear",
        "fct-type": "function",
        "title": "failIfInvalidYear"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Data Dates",
        "module": "Hledger.Data.Dates",
        "name": "failIfInvalidYear",
        "normalized": "String-\u003ea()",
        "package": "hledger-lib",
        "partial": "If Invalid Year",
        "signature": "String-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Dates.html#v:fixSmartDate",
      "description": {
        "fct-descr": "\u003cp\u003eConvert a SmartDate to an absolute date using the provided reference date.\n\u003c/p\u003e",
        "fct-module": "Hledger.Data.Dates",
        "fct-package": "hledger-lib",
        "fct-signature": "Day -\u003e SmartDate -\u003e Day",
        "fct-source": "src/Hledger-Data-Dates.html#fixSmartDate",
        "fct-type": "function",
        "title": "fixSmartDate"
      },
      "index": {
        "description": "Convert SmartDate to an absolute date using the provided reference date",
        "hierarchy": "Hledger Data Dates",
        "module": "Hledger.Data.Dates",
        "name": "fixSmartDate",
        "normalized": "Day-\u003eSmartDate-\u003eDay",
        "package": "hledger-lib",
        "partial": "Smart Date",
        "signature": "Day-\u003eSmartDate-\u003eDay"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Dates.html#v:fixSmartDateStr",
      "description": {
        "fct-descr": "\u003cp\u003eConvert a smart date string to an explicit yyyy/mm/dd string using\n the provided reference date, or raise an error.\n\u003c/p\u003e",
        "fct-module": "Hledger.Data.Dates",
        "fct-package": "hledger-lib",
        "fct-signature": "Day -\u003e String -\u003e String",
        "fct-source": "src/Hledger-Data-Dates.html#fixSmartDateStr",
        "fct-type": "function",
        "title": "fixSmartDateStr"
      },
      "index": {
        "description": "Convert smart date string to an explicit yyyy mm dd string using the provided reference date or raise an error",
        "hierarchy": "Hledger Data Dates",
        "module": "Hledger.Data.Dates",
        "name": "fixSmartDateStr",
        "normalized": "Day-\u003eString-\u003eString",
        "package": "hledger-lib",
        "partial": "Smart Date Str",
        "signature": "Day-\u003eString-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Dates.html#v:fixSmartDateStrEither",
      "description": {
        "fct-descr": "\u003cp\u003eA safe version of fixSmartDateStr.\n\u003c/p\u003e",
        "fct-module": "Hledger.Data.Dates",
        "fct-package": "hledger-lib",
        "fct-signature": "Day -\u003e String -\u003e Either ParseError String",
        "fct-source": "src/Hledger-Data-Dates.html#fixSmartDateStrEither",
        "fct-type": "function",
        "title": "fixSmartDateStrEither"
      },
      "index": {
        "description": "safe version of fixSmartDateStr",
        "hierarchy": "Hledger Data Dates",
        "module": "Hledger.Data.Dates",
        "name": "fixSmartDateStrEither",
        "normalized": "Day-\u003eString-\u003eEither ParseError String",
        "package": "hledger-lib",
        "partial": "Smart Date Str Either",
        "signature": "Day-\u003eString-\u003eEither ParseError String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Dates.html#v:fixSmartDateStrEither-39-",
      "description": {
        "fct-module": "Hledger.Data.Dates",
        "fct-package": "hledger-lib",
        "fct-signature": "Day -\u003e String -\u003e Either ParseError Day",
        "fct-source": "src/Hledger-Data-Dates.html#fixSmartDateStrEither%27",
        "fct-type": "function",
        "title": "fixSmartDateStrEither'"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Data Dates",
        "module": "Hledger.Data.Dates",
        "name": "fixSmartDateStrEither'",
        "normalized": "Day-\u003eString-\u003eEither ParseError Day",
        "package": "hledger-lib",
        "partial": "Smart Date Str Either'",
        "signature": "Day-\u003eString-\u003eEither ParseError Day"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Dates.html#v:getCurrentDay",
      "description": {
        "fct-descr": "\u003cp\u003eGet the current local date.\n\u003c/p\u003e",
        "fct-module": "Hledger.Data.Dates",
        "fct-package": "hledger-lib",
        "fct-signature": "IO Day",
        "fct-source": "src/Hledger-Data-Dates.html#getCurrentDay",
        "fct-type": "function",
        "title": "getCurrentDay"
      },
      "index": {
        "description": "Get the current local date",
        "hierarchy": "Hledger Data Dates",
        "module": "Hledger.Data.Dates",
        "name": "getCurrentDay",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "Current Day",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Dates.html#v:getCurrentMonth",
      "description": {
        "fct-descr": "\u003cp\u003eGet the current local month number.\n\u003c/p\u003e",
        "fct-module": "Hledger.Data.Dates",
        "fct-package": "hledger-lib",
        "fct-signature": "IO Int",
        "fct-source": "src/Hledger-Data-Dates.html#getCurrentMonth",
        "fct-type": "function",
        "title": "getCurrentMonth"
      },
      "index": {
        "description": "Get the current local month number",
        "hierarchy": "Hledger Data Dates",
        "module": "Hledger.Data.Dates",
        "name": "getCurrentMonth",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "Current Month",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Dates.html#v:getCurrentYear",
      "description": {
        "fct-descr": "\u003cp\u003eGet the current local year.\n\u003c/p\u003e",
        "fct-module": "Hledger.Data.Dates",
        "fct-package": "hledger-lib",
        "fct-signature": "IO Integer",
        "fct-source": "src/Hledger-Data-Dates.html#getCurrentYear",
        "fct-type": "function",
        "title": "getCurrentYear"
      },
      "index": {
        "description": "Get the current local year",
        "hierarchy": "Hledger Data Dates",
        "module": "Hledger.Data.Dates",
        "name": "getCurrentYear",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "Current Year",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Dates.html#v:maybePeriod",
      "description": {
        "fct-module": "Hledger.Data.Dates",
        "fct-package": "hledger-lib",
        "fct-signature": "Day -\u003e String -\u003e Maybe (Interval, DateSpan)",
        "fct-source": "src/Hledger-Data-Dates.html#maybePeriod",
        "fct-type": "function",
        "title": "maybePeriod"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Data Dates",
        "module": "Hledger.Data.Dates",
        "name": "maybePeriod",
        "normalized": "Day-\u003eString-\u003eMaybe(Interval,DateSpan)",
        "package": "hledger-lib",
        "partial": "Period",
        "signature": "Day-\u003eString-\u003eMaybe(Interval,DateSpan)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Dates.html#v:mkdatespan",
      "description": {
        "fct-descr": "\u003cp\u003eMake a datespan from two valid date strings parseable by parsedate\n (or raise an error). Eg: mkdatespan \"2011\u003cem\u003e1\u003c/em\u003e1\" \"2011\u003cem\u003e12\u003c/em\u003e31\".\n\u003c/p\u003e",
        "fct-module": "Hledger.Data.Dates",
        "fct-package": "hledger-lib",
        "fct-signature": "String -\u003e String -\u003e DateSpan",
        "fct-source": "src/Hledger-Data-Dates.html#mkdatespan",
        "fct-type": "function",
        "title": "mkdatespan"
      },
      "index": {
        "description": "Make datespan from two valid date strings parseable by parsedate or raise an error Eg mkdatespan",
        "hierarchy": "Hledger Data Dates",
        "module": "Hledger.Data.Dates",
        "name": "mkdatespan",
        "normalized": "String-\u003eString-\u003eDateSpan",
        "package": "hledger-lib",
        "partial": "",
        "signature": "String-\u003eString-\u003eDateSpan"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Dates.html#v:nulldate",
      "description": {
        "fct-module": "Hledger.Data.Dates",
        "fct-package": "hledger-lib",
        "fct-signature": "Day",
        "fct-source": "src/Hledger-Data-Dates.html#nulldate",
        "fct-type": "function",
        "title": "nulldate"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Data Dates",
        "module": "Hledger.Data.Dates",
        "name": "nulldate",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Dates.html#v:nulldatespan",
      "description": {
        "fct-module": "Hledger.Data.Dates",
        "fct-package": "hledger-lib",
        "fct-signature": "DateSpan",
        "fct-source": "src/Hledger-Data-Dates.html#nulldatespan",
        "fct-type": "function",
        "title": "nulldatespan"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Data Dates",
        "module": "Hledger.Data.Dates",
        "name": "nulldatespan",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Dates.html#v:orDatesFrom",
      "description": {
        "fct-descr": "\u003cp\u003eCombine two datespans, filling any unspecified dates in the first\n with dates from the second. Not a clip operation, just uses the\n second's start/end dates as defaults when the first does not\n specify them.\n\u003c/p\u003e",
        "fct-module": "Hledger.Data.Dates",
        "fct-package": "hledger-lib",
        "fct-signature": "DateSpan -\u003e DateSpan -\u003e DateSpan",
        "fct-source": "src/Hledger-Data-Dates.html#orDatesFrom",
        "fct-type": "function",
        "title": "orDatesFrom"
      },
      "index": {
        "description": "Combine two datespans filling any unspecified dates in the first with dates from the second Not clip operation just uses the second start end dates as defaults when the first does not specify them",
        "hierarchy": "Hledger Data Dates",
        "module": "Hledger.Data.Dates",
        "name": "orDatesFrom",
        "normalized": "DateSpan-\u003eDateSpan-\u003eDateSpan",
        "package": "hledger-lib",
        "partial": "Dates From",
        "signature": "DateSpan-\u003eDateSpan-\u003eDateSpan"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Dates.html#v:parsePeriodExpr",
      "description": {
        "fct-descr": "\u003cp\u003eParse a period expression to an Interval and overall DateSpan using\n the provided reference date, or return a parse error.\n\u003c/p\u003e",
        "fct-module": "Hledger.Data.Dates",
        "fct-package": "hledger-lib",
        "fct-signature": "Day -\u003e String -\u003e Either ParseError (Interval, DateSpan)",
        "fct-source": "src/Hledger-Data-Dates.html#parsePeriodExpr",
        "fct-type": "function",
        "title": "parsePeriodExpr"
      },
      "index": {
        "description": "Parse period expression to an Interval and overall DateSpan using the provided reference date or return parse error",
        "hierarchy": "Hledger Data Dates",
        "module": "Hledger.Data.Dates",
        "name": "parsePeriodExpr",
        "normalized": "Day-\u003eString-\u003eEither ParseError(Interval,DateSpan)",
        "package": "hledger-lib",
        "partial": "Period Expr",
        "signature": "Day-\u003eString-\u003eEither ParseError(Interval,DateSpan)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Dates.html#v:parsedate",
      "description": {
        "fct-descr": "\u003cp\u003eParse a date string to a time type, or raise an error.\n\u003c/p\u003e",
        "fct-module": "Hledger.Data.Dates",
        "fct-package": "hledger-lib",
        "fct-signature": "String -\u003e Day",
        "fct-source": "src/Hledger-Data-Dates.html#parsedate",
        "fct-type": "function",
        "title": "parsedate"
      },
      "index": {
        "description": "Parse date string to time type or raise an error",
        "hierarchy": "Hledger Data Dates",
        "module": "Hledger.Data.Dates",
        "name": "parsedate",
        "normalized": "String-\u003eDay",
        "package": "hledger-lib",
        "partial": "",
        "signature": "String-\u003eDay"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Dates.html#v:parsedateM",
      "description": {
        "fct-descr": "\u003cp\u003eParse a couple of date string formats to a time type.\n\u003c/p\u003e",
        "fct-module": "Hledger.Data.Dates",
        "fct-package": "hledger-lib",
        "fct-signature": "String -\u003e Maybe Day",
        "fct-source": "src/Hledger-Data-Dates.html#parsedateM",
        "fct-type": "function",
        "title": "parsedateM"
      },
      "index": {
        "description": "Parse couple of date string formats to time type",
        "hierarchy": "Hledger Data Dates",
        "module": "Hledger.Data.Dates",
        "name": "parsedateM",
        "normalized": "String-\u003eMaybe Day",
        "package": "hledger-lib",
        "partial": "",
        "signature": "String-\u003eMaybe Day"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Dates.html#v:prevday",
      "description": {
        "fct-module": "Hledger.Data.Dates",
        "fct-package": "hledger-lib",
        "fct-signature": "Day -\u003e Day",
        "fct-source": "src/Hledger-Data-Dates.html#prevday",
        "fct-type": "function",
        "title": "prevday"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Data Dates",
        "module": "Hledger.Data.Dates",
        "name": "prevday",
        "normalized": "Day-\u003eDay",
        "package": "hledger-lib",
        "partial": "",
        "signature": "Day-\u003eDay"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Dates.html#v:showDate",
      "description": {
        "fct-module": "Hledger.Data.Dates",
        "fct-package": "hledger-lib",
        "fct-signature": "Day -\u003e String",
        "fct-source": "src/Hledger-Data-Dates.html#showDate",
        "fct-type": "function",
        "title": "showDate"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Data Dates",
        "module": "Hledger.Data.Dates",
        "name": "showDate",
        "normalized": "Day-\u003eString",
        "package": "hledger-lib",
        "partial": "Date",
        "signature": "Day-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Dates.html#v:showDateSpan",
      "description": {
        "fct-module": "Hledger.Data.Dates",
        "fct-package": "hledger-lib",
        "fct-signature": "DateSpan -\u003e [Char]",
        "fct-source": "src/Hledger-Data-Dates.html#showDateSpan",
        "fct-type": "function",
        "title": "showDateSpan"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Data Dates",
        "module": "Hledger.Data.Dates",
        "name": "showDateSpan",
        "normalized": "DateSpan-\u003e[Char]",
        "package": "hledger-lib",
        "partial": "Date Span",
        "signature": "DateSpan-\u003e[Char]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Dates.html#v:smartdate",
      "description": {
        "fct-descr": "\u003cp\u003eParse a date in any of the formats allowed in ledger's period expressions,\nand maybe some others:\n\u003c/p\u003e\u003cpre\u003e 2004\n 2004/10\n 2004/10/1\n 10/1\n 21\n october, oct\n yesterday, today, tomorrow\n this/next/last week/day/month/quarter/year\n\u003c/pre\u003e\u003cp\u003eReturns a SmartDate, to be converted to a full date later (see fixSmartDate).\nAssumes any text in the parse stream has been lowercased.\n\u003c/p\u003e",
        "fct-module": "Hledger.Data.Dates",
        "fct-package": "hledger-lib",
        "fct-signature": "GenParser Char st SmartDate",
        "fct-source": "src/Hledger-Data-Dates.html#smartdate",
        "fct-type": "function",
        "title": "smartdate"
      },
      "index": {
        "description": "Parse date in any of the formats allowed in ledger period expressions and maybe some others october oct yesterday today tomorrow this next last week day month quarter year Returns SmartDate to be converted to full date later see fixSmartDate Assumes any text in the parse stream has been lowercased",
        "hierarchy": "Hledger Data Dates",
        "module": "Hledger.Data.Dates",
        "name": "smartdate",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Dates.html#v:spanContainsDate",
      "description": {
        "fct-descr": "\u003cp\u003eDoes the span include the given date ?\n\u003c/p\u003e",
        "fct-module": "Hledger.Data.Dates",
        "fct-package": "hledger-lib",
        "fct-signature": "DateSpan -\u003e Day -\u003e Bool",
        "fct-source": "src/Hledger-Data-Dates.html#spanContainsDate",
        "fct-type": "function",
        "title": "spanContainsDate"
      },
      "index": {
        "description": "Does the span include the given date",
        "hierarchy": "Hledger Data Dates",
        "module": "Hledger.Data.Dates",
        "name": "spanContainsDate",
        "normalized": "DateSpan-\u003eDay-\u003eBool",
        "package": "hledger-lib",
        "partial": "Contains Date",
        "signature": "DateSpan-\u003eDay-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Dates.html#v:spanEnd",
      "description": {
        "fct-module": "Hledger.Data.Dates",
        "fct-package": "hledger-lib",
        "fct-signature": "DateSpan -\u003e Maybe Day",
        "fct-source": "src/Hledger-Data-Dates.html#spanEnd",
        "fct-type": "function",
        "title": "spanEnd"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Data Dates",
        "module": "Hledger.Data.Dates",
        "name": "spanEnd",
        "normalized": "DateSpan-\u003eMaybe Day",
        "package": "hledger-lib",
        "partial": "End",
        "signature": "DateSpan-\u003eMaybe Day"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Dates.html#v:spanIntersect",
      "description": {
        "fct-descr": "\u003cp\u003eCalculate the intersection of two datespans.\n\u003c/p\u003e",
        "fct-module": "Hledger.Data.Dates",
        "fct-package": "hledger-lib",
        "fct-signature": "DateSpan -\u003e DateSpan -\u003e DateSpan",
        "fct-source": "src/Hledger-Data-Dates.html#spanIntersect",
        "fct-type": "function",
        "title": "spanIntersect"
      },
      "index": {
        "description": "Calculate the intersection of two datespans",
        "hierarchy": "Hledger Data Dates",
        "module": "Hledger.Data.Dates",
        "name": "spanIntersect",
        "normalized": "DateSpan-\u003eDateSpan-\u003eDateSpan",
        "package": "hledger-lib",
        "partial": "Intersect",
        "signature": "DateSpan-\u003eDateSpan-\u003eDateSpan"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Dates.html#v:spanStart",
      "description": {
        "fct-module": "Hledger.Data.Dates",
        "fct-package": "hledger-lib",
        "fct-signature": "DateSpan -\u003e Maybe Day",
        "fct-source": "src/Hledger-Data-Dates.html#spanStart",
        "fct-type": "function",
        "title": "spanStart"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Data Dates",
        "module": "Hledger.Data.Dates",
        "name": "spanStart",
        "normalized": "DateSpan-\u003eMaybe Day",
        "package": "hledger-lib",
        "partial": "Start",
        "signature": "DateSpan-\u003eMaybe Day"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Dates.html#v:spanUnion",
      "description": {
        "fct-descr": "\u003cp\u003eCalculate the union of two datespans.\n\u003c/p\u003e",
        "fct-module": "Hledger.Data.Dates",
        "fct-package": "hledger-lib",
        "fct-signature": "DateSpan -\u003e DateSpan -\u003e DateSpan",
        "fct-source": "src/Hledger-Data-Dates.html#spanUnion",
        "fct-type": "function",
        "title": "spanUnion"
      },
      "index": {
        "description": "Calculate the union of two datespans",
        "hierarchy": "Hledger Data Dates",
        "module": "Hledger.Data.Dates",
        "name": "spanUnion",
        "normalized": "DateSpan-\u003eDateSpan-\u003eDateSpan",
        "package": "hledger-lib",
        "partial": "Union",
        "signature": "DateSpan-\u003eDateSpan-\u003eDateSpan"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Dates.html#v:spansIntersect",
      "description": {
        "fct-descr": "\u003cp\u003eCalculate the intersection of a number of datespans.\n\u003c/p\u003e",
        "fct-module": "Hledger.Data.Dates",
        "fct-package": "hledger-lib",
        "fct-signature": "[DateSpan] -\u003e DateSpan",
        "fct-source": "src/Hledger-Data-Dates.html#spansIntersect",
        "fct-type": "function",
        "title": "spansIntersect"
      },
      "index": {
        "description": "Calculate the intersection of number of datespans",
        "hierarchy": "Hledger Data Dates",
        "module": "Hledger.Data.Dates",
        "name": "spansIntersect",
        "normalized": "[DateSpan]-\u003eDateSpan",
        "package": "hledger-lib",
        "partial": "Intersect",
        "signature": "[DateSpan]-\u003eDateSpan"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Dates.html#v:spansSpan",
      "description": {
        "fct-descr": "\u003cp\u003eGet overall span enclosing multiple sequentially ordered spans.\n\u003c/p\u003e",
        "fct-module": "Hledger.Data.Dates",
        "fct-package": "hledger-lib",
        "fct-signature": "[DateSpan] -\u003e DateSpan",
        "fct-source": "src/Hledger-Data-Dates.html#spansSpan",
        "fct-type": "function",
        "title": "spansSpan"
      },
      "index": {
        "description": "Get overall span enclosing multiple sequentially ordered spans",
        "hierarchy": "Hledger Data Dates",
        "module": "Hledger.Data.Dates",
        "name": "spansSpan",
        "normalized": "[DateSpan]-\u003eDateSpan",
        "package": "hledger-lib",
        "partial": "Span",
        "signature": "[DateSpan]-\u003eDateSpan"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Dates.html#v:spansUnion",
      "description": {
        "fct-descr": "\u003cp\u003eCalculate the union of a number of datespans.\n\u003c/p\u003e",
        "fct-module": "Hledger.Data.Dates",
        "fct-package": "hledger-lib",
        "fct-signature": "[DateSpan] -\u003e DateSpan",
        "fct-source": "src/Hledger-Data-Dates.html#spansUnion",
        "fct-type": "function",
        "title": "spansUnion"
      },
      "index": {
        "description": "Calculate the union of number of datespans",
        "hierarchy": "Hledger Data Dates",
        "module": "Hledger.Data.Dates",
        "name": "spansUnion",
        "normalized": "[DateSpan]-\u003eDateSpan",
        "package": "hledger-lib",
        "partial": "Union",
        "signature": "[DateSpan]-\u003eDateSpan"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Dates.html#v:splitSpan",
      "description": {
        "fct-descr": "\u003cp\u003eSplit a DateSpan into one or more consecutive spans at the specified interval.\n\u003c/p\u003e",
        "fct-module": "Hledger.Data.Dates",
        "fct-package": "hledger-lib",
        "fct-signature": "Interval -\u003e DateSpan -\u003e [DateSpan]",
        "fct-source": "src/Hledger-Data-Dates.html#splitSpan",
        "fct-type": "function",
        "title": "splitSpan"
      },
      "index": {
        "description": "Split DateSpan into one or more consecutive spans at the specified interval",
        "hierarchy": "Hledger Data Dates",
        "module": "Hledger.Data.Dates",
        "name": "splitSpan",
        "normalized": "Interval-\u003eDateSpan-\u003e[DateSpan]",
        "package": "hledger-lib",
        "partial": "Span",
        "signature": "Interval-\u003eDateSpan-\u003e[DateSpan]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Dates.html#v:tests_Hledger_Data_Dates",
      "description": {
        "fct-module": "Hledger.Data.Dates",
        "fct-package": "hledger-lib",
        "fct-signature": "Test",
        "fct-source": "src/Hledger-Data-Dates.html#tests_Hledger_Data_Dates",
        "fct-type": "function",
        "title": "tests_Hledger_Data_Dates"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Data Dates",
        "module": "Hledger.Data.Dates",
        "name": "tests_Hledger_Data_Dates",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "Hledger Data Dates",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-FormatStrings.html#",
      "description": {
        "fct-module": "Hledger.Data.FormatStrings",
        "fct-package": "hledger-lib",
        "fct-signature": "module",
        "fct-source": "src/Hledger-Data-FormatStrings.html",
        "fct-type": "module",
        "title": "FormatStrings"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Data FormatStrings",
        "module": "Hledger.Data.FormatStrings",
        "name": "FormatStrings",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "Format Strings",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-FormatStrings.html#t:FormatString",
      "description": {
        "fct-module": "Hledger.Data.FormatStrings",
        "fct-package": "hledger-lib",
        "fct-signature": "data",
        "fct-source": "src/Hledger-Data-Types.html#FormatString",
        "fct-type": "data",
        "title": "FormatString"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Data FormatStrings",
        "module": "Hledger.Data.FormatStrings",
        "name": "FormatString",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "Format String",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-FormatStrings.html#t:HledgerFormatField",
      "description": {
        "fct-module": "Hledger.Data.FormatStrings",
        "fct-package": "hledger-lib",
        "fct-signature": "data",
        "fct-source": "src/Hledger-Data-Types.html#HledgerFormatField",
        "fct-type": "data",
        "title": "HledgerFormatField"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Data FormatStrings",
        "module": "Hledger.Data.FormatStrings",
        "name": "HledgerFormatField",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "Hledger Format Field",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-FormatStrings.html#v:AccountField",
      "description": {
        "fct-module": "Hledger.Data.FormatStrings",
        "fct-package": "hledger-lib",
        "fct-signature": "AccountField",
        "fct-source": "src/Hledger-Data-Types.html#HledgerFormatField",
        "fct-type": "function",
        "title": "AccountField"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Data FormatStrings",
        "module": "Hledger.Data.FormatStrings",
        "name": "AccountField",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "Account Field",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-FormatStrings.html#v:DefaultDateField",
      "description": {
        "fct-module": "Hledger.Data.FormatStrings",
        "fct-package": "hledger-lib",
        "fct-signature": "DefaultDateField",
        "fct-source": "src/Hledger-Data-Types.html#HledgerFormatField",
        "fct-type": "function",
        "title": "DefaultDateField"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Data FormatStrings",
        "module": "Hledger.Data.FormatStrings",
        "name": "DefaultDateField",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "Default Date Field",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-FormatStrings.html#v:DepthSpacerField",
      "description": {
        "fct-module": "Hledger.Data.FormatStrings",
        "fct-package": "hledger-lib",
        "fct-signature": "DepthSpacerField",
        "fct-source": "src/Hledger-Data-Types.html#HledgerFormatField",
        "fct-type": "function",
        "title": "DepthSpacerField"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Data FormatStrings",
        "module": "Hledger.Data.FormatStrings",
        "name": "DepthSpacerField",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "Depth Spacer Field",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-FormatStrings.html#v:DescriptionField",
      "description": {
        "fct-module": "Hledger.Data.FormatStrings",
        "fct-package": "hledger-lib",
        "fct-signature": "DescriptionField",
        "fct-source": "src/Hledger-Data-Types.html#HledgerFormatField",
        "fct-type": "function",
        "title": "DescriptionField"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Data FormatStrings",
        "module": "Hledger.Data.FormatStrings",
        "name": "DescriptionField",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "Description Field",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-FormatStrings.html#v:FieldNo",
      "description": {
        "fct-module": "Hledger.Data.FormatStrings",
        "fct-package": "hledger-lib",
        "fct-signature": "FieldNo Int",
        "fct-source": "src/Hledger-Data-Types.html#HledgerFormatField",
        "fct-type": "function",
        "title": "FieldNo"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Data FormatStrings",
        "module": "Hledger.Data.FormatStrings",
        "name": "FieldNo",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "Field No",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-FormatStrings.html#v:FormatField",
      "description": {
        "fct-module": "Hledger.Data.FormatStrings",
        "fct-package": "hledger-lib",
        "fct-signature": "FormatField Bool (Maybe Int) (Maybe Int) HledgerFormatField",
        "fct-source": "src/Hledger-Data-Types.html#FormatString",
        "fct-type": "function",
        "title": "FormatField"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Data FormatStrings",
        "module": "Hledger.Data.FormatStrings",
        "name": "FormatField",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "Format Field",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-FormatStrings.html#v:FormatLiteral",
      "description": {
        "fct-module": "Hledger.Data.FormatStrings",
        "fct-package": "hledger-lib",
        "fct-signature": "FormatLiteral String",
        "fct-source": "src/Hledger-Data-Types.html#FormatString",
        "fct-type": "function",
        "title": "FormatLiteral"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Data FormatStrings",
        "module": "Hledger.Data.FormatStrings",
        "name": "FormatLiteral",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "Format Literal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-FormatStrings.html#v:TotalField",
      "description": {
        "fct-module": "Hledger.Data.FormatStrings",
        "fct-package": "hledger-lib",
        "fct-signature": "TotalField",
        "fct-source": "src/Hledger-Data-Types.html#HledgerFormatField",
        "fct-type": "function",
        "title": "TotalField"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Data FormatStrings",
        "module": "Hledger.Data.FormatStrings",
        "name": "TotalField",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "Total Field",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-FormatStrings.html#v:formatStrings",
      "description": {
        "fct-module": "Hledger.Data.FormatStrings",
        "fct-package": "hledger-lib",
        "fct-signature": "GenParser Char st [FormatString]",
        "fct-source": "src/Hledger-Data-FormatStrings.html#formatStrings",
        "fct-type": "function",
        "title": "formatStrings"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Data FormatStrings",
        "module": "Hledger.Data.FormatStrings",
        "name": "formatStrings",
        "normalized": "GenParser Char a[FormatString]",
        "package": "hledger-lib",
        "partial": "Strings",
        "signature": "GenParser Char st[FormatString]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-FormatStrings.html#v:formatValue",
      "description": {
        "fct-module": "Hledger.Data.FormatStrings",
        "fct-package": "hledger-lib",
        "fct-signature": "Bool -\u003e Maybe Int -\u003e Maybe Int -\u003e String -\u003e String",
        "fct-source": "src/Hledger-Data-FormatStrings.html#formatValue",
        "fct-type": "function",
        "title": "formatValue"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Data FormatStrings",
        "module": "Hledger.Data.FormatStrings",
        "name": "formatValue",
        "normalized": "Bool-\u003eMaybe Int-\u003eMaybe Int-\u003eString-\u003eString",
        "package": "hledger-lib",
        "partial": "Value",
        "signature": "Bool-\u003eMaybe Int-\u003eMaybe Int-\u003eString-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-FormatStrings.html#v:parseFormatString",
      "description": {
        "fct-module": "Hledger.Data.FormatStrings",
        "fct-package": "hledger-lib",
        "fct-signature": "String -\u003e Either String [FormatString]",
        "fct-source": "src/Hledger-Data-FormatStrings.html#parseFormatString",
        "fct-type": "function",
        "title": "parseFormatString"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Data FormatStrings",
        "module": "Hledger.Data.FormatStrings",
        "name": "parseFormatString",
        "normalized": "String-\u003eEither String[FormatString]",
        "package": "hledger-lib",
        "partial": "Format String",
        "signature": "String-\u003eEither String[FormatString]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-FormatStrings.html#v:tests",
      "description": {
        "fct-module": "Hledger.Data.FormatStrings",
        "fct-package": "hledger-lib",
        "fct-signature": "Test",
        "fct-source": "src/Hledger-Data-FormatStrings.html#tests",
        "fct-type": "function",
        "title": "tests"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Data FormatStrings",
        "module": "Hledger.Data.FormatStrings",
        "name": "tests",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Journal.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA \u003ccode\u003e\u003ca\u003eJournal\u003c/a\u003e\u003c/code\u003e is a set of transactions, plus optional related data.  This is\nhledger's primary data object. It is usually parsed from a journal file or\nother data format (see \u003ca\u003eHledger.Read\u003c/a\u003e).\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Hledger.Data.Journal",
        "fct-package": "hledger-lib",
        "fct-signature": "module",
        "fct-source": "src/Hledger-Data-Journal.html",
        "fct-type": "module",
        "title": "Journal"
      },
      "index": {
        "description": "Journal is set of transactions plus optional related data This is hledger primary data object It is usually parsed from journal file or other data format see Hledger.Read",
        "hierarchy": "Hledger Data Journal",
        "module": "Hledger.Data.Journal",
        "name": "Journal",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "Journal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Journal.html#v:addHistoricalPrice",
      "description": {
        "fct-module": "Hledger.Data.Journal",
        "fct-package": "hledger-lib",
        "fct-signature": "HistoricalPrice -\u003e Journal -\u003e Journal",
        "fct-source": "src/Hledger-Data-Journal.html#addHistoricalPrice",
        "fct-type": "function",
        "title": "addHistoricalPrice"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Data Journal",
        "module": "Hledger.Data.Journal",
        "name": "addHistoricalPrice",
        "normalized": "HistoricalPrice-\u003eJournal-\u003eJournal",
        "package": "hledger-lib",
        "partial": "Historical Price",
        "signature": "HistoricalPrice-\u003eJournal-\u003eJournal"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Journal.html#v:addModifierTransaction",
      "description": {
        "fct-module": "Hledger.Data.Journal",
        "fct-package": "hledger-lib",
        "fct-signature": "ModifierTransaction -\u003e Journal -\u003e Journal",
        "fct-source": "src/Hledger-Data-Journal.html#addModifierTransaction",
        "fct-type": "function",
        "title": "addModifierTransaction"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Data Journal",
        "module": "Hledger.Data.Journal",
        "name": "addModifierTransaction",
        "normalized": "ModifierTransaction-\u003eJournal-\u003eJournal",
        "package": "hledger-lib",
        "partial": "Modifier Transaction",
        "signature": "ModifierTransaction-\u003eJournal-\u003eJournal"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Journal.html#v:addPeriodicTransaction",
      "description": {
        "fct-module": "Hledger.Data.Journal",
        "fct-package": "hledger-lib",
        "fct-signature": "PeriodicTransaction -\u003e Journal -\u003e Journal",
        "fct-source": "src/Hledger-Data-Journal.html#addPeriodicTransaction",
        "fct-type": "function",
        "title": "addPeriodicTransaction"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Data Journal",
        "module": "Hledger.Data.Journal",
        "name": "addPeriodicTransaction",
        "normalized": "PeriodicTransaction-\u003eJournal-\u003eJournal",
        "package": "hledger-lib",
        "partial": "Periodic Transaction",
        "signature": "PeriodicTransaction-\u003eJournal-\u003eJournal"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Journal.html#v:addTimeLogEntry",
      "description": {
        "fct-module": "Hledger.Data.Journal",
        "fct-package": "hledger-lib",
        "fct-signature": "TimeLogEntry -\u003e Journal -\u003e Journal",
        "fct-source": "src/Hledger-Data-Journal.html#addTimeLogEntry",
        "fct-type": "function",
        "title": "addTimeLogEntry"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Data Journal",
        "module": "Hledger.Data.Journal",
        "name": "addTimeLogEntry",
        "normalized": "TimeLogEntry-\u003eJournal-\u003eJournal",
        "package": "hledger-lib",
        "partial": "Time Log Entry",
        "signature": "TimeLogEntry-\u003eJournal-\u003eJournal"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Journal.html#v:addTransaction",
      "description": {
        "fct-module": "Hledger.Data.Journal",
        "fct-package": "hledger-lib",
        "fct-signature": "Transaction -\u003e Journal -\u003e Journal",
        "fct-source": "src/Hledger-Data-Journal.html#addTransaction",
        "fct-type": "function",
        "title": "addTransaction"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Data Journal",
        "module": "Hledger.Data.Journal",
        "name": "addTransaction",
        "normalized": "Transaction-\u003eJournal-\u003eJournal",
        "package": "hledger-lib",
        "partial": "Transaction",
        "signature": "Transaction-\u003eJournal-\u003eJournal"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Journal.html#v:filterJournalPostings",
      "description": {
        "fct-descr": "\u003cp\u003eKeep only postings matching the query expression.\n This can leave unbalanced transactions.\n\u003c/p\u003e",
        "fct-module": "Hledger.Data.Journal",
        "fct-package": "hledger-lib",
        "fct-signature": "Query -\u003e Journal -\u003e Journal",
        "fct-source": "src/Hledger-Data-Journal.html#filterJournalPostings",
        "fct-type": "function",
        "title": "filterJournalPostings"
      },
      "index": {
        "description": "Keep only postings matching the query expression This can leave unbalanced transactions",
        "hierarchy": "Hledger Data Journal",
        "module": "Hledger.Data.Journal",
        "name": "filterJournalPostings",
        "normalized": "Query-\u003eJournal-\u003eJournal",
        "package": "hledger-lib",
        "partial": "Journal Postings",
        "signature": "Query-\u003eJournal-\u003eJournal"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Journal.html#v:filterJournalTransactions",
      "description": {
        "fct-descr": "\u003cp\u003eKeep only transactions matching the query expression.\n\u003c/p\u003e",
        "fct-module": "Hledger.Data.Journal",
        "fct-package": "hledger-lib",
        "fct-signature": "Query -\u003e Journal -\u003e Journal",
        "fct-source": "src/Hledger-Data-Journal.html#filterJournalTransactions",
        "fct-type": "function",
        "title": "filterJournalTransactions"
      },
      "index": {
        "description": "Keep only transactions matching the query expression",
        "hierarchy": "Hledger Data Journal",
        "module": "Hledger.Data.Journal",
        "name": "filterJournalTransactions",
        "normalized": "Query-\u003eJournal-\u003eJournal",
        "package": "hledger-lib",
        "partial": "Journal Transactions",
        "signature": "Query-\u003eJournal-\u003eJournal"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Journal.html#v:journalAccountNames",
      "description": {
        "fct-module": "Hledger.Data.Journal",
        "fct-package": "hledger-lib",
        "fct-signature": "Journal -\u003e [AccountName]",
        "fct-source": "src/Hledger-Data-Journal.html#journalAccountNames",
        "fct-type": "function",
        "title": "journalAccountNames"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Data Journal",
        "module": "Hledger.Data.Journal",
        "name": "journalAccountNames",
        "normalized": "Journal-\u003e[AccountName]",
        "package": "hledger-lib",
        "partial": "Account Names",
        "signature": "Journal-\u003e[AccountName]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Journal.html#v:journalAccountNamesUsed",
      "description": {
        "fct-descr": "\u003cp\u003eAll account names used in this journal.\n\u003c/p\u003e",
        "fct-module": "Hledger.Data.Journal",
        "fct-package": "hledger-lib",
        "fct-signature": "Journal -\u003e [AccountName]",
        "fct-source": "src/Hledger-Data-Journal.html#journalAccountNamesUsed",
        "fct-type": "function",
        "title": "journalAccountNamesUsed"
      },
      "index": {
        "description": "All account names used in this journal",
        "hierarchy": "Hledger Data Journal",
        "module": "Hledger.Data.Journal",
        "name": "journalAccountNamesUsed",
        "normalized": "Journal-\u003e[AccountName]",
        "package": "hledger-lib",
        "partial": "Account Names Used",
        "signature": "Journal-\u003e[AccountName]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Journal.html#v:journalAmounts",
      "description": {
        "fct-descr": "\u003cp\u003eGet all this journal's component amounts, roughly in the order parsed.\n\u003c/p\u003e",
        "fct-module": "Hledger.Data.Journal",
        "fct-package": "hledger-lib",
        "fct-signature": "Journal -\u003e [Amount]",
        "fct-source": "src/Hledger-Data-Journal.html#journalAmounts",
        "fct-type": "function",
        "title": "journalAmounts"
      },
      "index": {
        "description": "Get all this journal component amounts roughly in the order parsed",
        "hierarchy": "Hledger Data Journal",
        "module": "Hledger.Data.Journal",
        "name": "journalAmounts",
        "normalized": "Journal-\u003e[Amount]",
        "package": "hledger-lib",
        "partial": "Amounts",
        "signature": "Journal-\u003e[Amount]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Journal.html#v:journalApplyAliases",
      "description": {
        "fct-descr": "\u003cp\u003eApply additional account aliases (eg from the command-line) to all postings in a journal.\n\u003c/p\u003e",
        "fct-module": "Hledger.Data.Journal",
        "fct-package": "hledger-lib",
        "fct-signature": "[(AccountName, AccountName)] -\u003e Journal -\u003e Journal",
        "fct-source": "src/Hledger-Data-Journal.html#journalApplyAliases",
        "fct-type": "function",
        "title": "journalApplyAliases"
      },
      "index": {
        "description": "Apply additional account aliases eg from the command-line to all postings in journal",
        "hierarchy": "Hledger Data Journal",
        "module": "Hledger.Data.Journal",
        "name": "journalApplyAliases",
        "normalized": "[(AccountName,AccountName)]-\u003eJournal-\u003eJournal",
        "package": "hledger-lib",
        "partial": "Apply Aliases",
        "signature": "[(AccountName,AccountName)]-\u003eJournal-\u003eJournal"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Journal.html#v:journalAssetAccountQuery",
      "description": {
        "fct-descr": "\u003cp\u003eA query for Asset accounts in this journal.\n This is currently hard-coded to the case-insensitive regex \u003ccode\u003e^assets?(:|$)\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Hledger.Data.Journal",
        "fct-package": "hledger-lib",
        "fct-signature": "Journal -\u003e Query",
        "fct-source": "src/Hledger-Data-Journal.html#journalAssetAccountQuery",
        "fct-type": "function",
        "title": "journalAssetAccountQuery"
      },
      "index": {
        "description": "query for Asset accounts in this journal This is currently hard-coded to the case-insensitive regex assets",
        "hierarchy": "Hledger Data Journal",
        "module": "Hledger.Data.Journal",
        "name": "journalAssetAccountQuery",
        "normalized": "Journal-\u003eQuery",
        "package": "hledger-lib",
        "partial": "Asset Account Query",
        "signature": "Journal-\u003eQuery"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Journal.html#v:journalBalanceSheetAccountQuery",
      "description": {
        "fct-descr": "\u003cp\u003eA query for Asset, Liability & Equity accounts in this journal.\n Cf \u003ca\u003ehttp://en.wikipedia.org/wiki/Chart_of_accounts#Balance_Sheet_Accounts\u003c/a\u003e.\n\u003c/p\u003e",
        "fct-module": "Hledger.Data.Journal",
        "fct-package": "hledger-lib",
        "fct-signature": "Journal -\u003e Query",
        "fct-source": "src/Hledger-Data-Journal.html#journalBalanceSheetAccountQuery",
        "fct-type": "function",
        "title": "journalBalanceSheetAccountQuery"
      },
      "index": {
        "description": "query for Asset Liability Equity accounts in this journal Cf http en.wikipedia.org wiki Chart of accounts Balance Sheet Accounts",
        "hierarchy": "Hledger Data Journal",
        "module": "Hledger.Data.Journal",
        "name": "journalBalanceSheetAccountQuery",
        "normalized": "Journal-\u003eQuery",
        "package": "hledger-lib",
        "partial": "Balance Sheet Account Query",
        "signature": "Journal-\u003eQuery"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Journal.html#v:journalBalanceTransactions",
      "description": {
        "fct-descr": "\u003cp\u003eFill in any missing amounts and check that all journal transactions\n balance, or return an error message. This is done after parsing all\n amounts and working out the canonical commodities, since balancing\n depends on display precision. Reports only the first error encountered.\n\u003c/p\u003e",
        "fct-module": "Hledger.Data.Journal",
        "fct-package": "hledger-lib",
        "fct-signature": "Journal -\u003e Either String Journal",
        "fct-source": "src/Hledger-Data-Journal.html#journalBalanceTransactions",
        "fct-type": "function",
        "title": "journalBalanceTransactions"
      },
      "index": {
        "description": "Fill in any missing amounts and check that all journal transactions balance or return an error message This is done after parsing all amounts and working out the canonical commodities since balancing depends on display precision Reports only the first error encountered",
        "hierarchy": "Hledger Data Journal",
        "module": "Hledger.Data.Journal",
        "name": "journalBalanceTransactions",
        "normalized": "Journal-\u003eEither String Journal",
        "package": "hledger-lib",
        "partial": "Balance Transactions",
        "signature": "Journal-\u003eEither String Journal"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Journal.html#v:journalCanonicaliseAmounts",
      "description": {
        "fct-descr": "\u003cp\u003eConvert all the journal's posting amounts (not price amounts) to\n their canonical display settings. Ie, all amounts in a given\n commodity will use (a) the display settings of the first, and (b)\n the greatest precision, of the posting amounts in that commodity.\n\u003c/p\u003e",
        "fct-module": "Hledger.Data.Journal",
        "fct-package": "hledger-lib",
        "fct-signature": "Journal -\u003e Journal",
        "fct-source": "src/Hledger-Data-Journal.html#journalCanonicaliseAmounts",
        "fct-type": "function",
        "title": "journalCanonicaliseAmounts"
      },
      "index": {
        "description": "Convert all the journal posting amounts not price amounts to their canonical display settings Ie all amounts in given commodity will use the display settings of the first and the greatest precision of the posting amounts in that commodity",
        "hierarchy": "Hledger Data Journal",
        "module": "Hledger.Data.Journal",
        "name": "journalCanonicaliseAmounts",
        "normalized": "Journal-\u003eJournal",
        "package": "hledger-lib",
        "partial": "Canonicalise Amounts",
        "signature": "Journal-\u003eJournal"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Journal.html#v:journalCashAccountQuery",
      "description": {
        "fct-descr": "\u003cp\u003eA query for Cash (-equivalent) accounts in this journal (ie,\n accounts which appear on the cashflow statement.)  This is currently\n hard-coded to be all the Asset accounts except for those containing the\n case-insensitive regex \u003ccode\u003e(receivable|A/R)\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Hledger.Data.Journal",
        "fct-package": "hledger-lib",
        "fct-signature": "Journal -\u003e Query",
        "fct-source": "src/Hledger-Data-Journal.html#journalCashAccountQuery",
        "fct-type": "function",
        "title": "journalCashAccountQuery"
      },
      "index": {
        "description": "query for Cash equivalent accounts in this journal ie accounts which appear on the cashflow statement This is currently hard-coded to be all the Asset accounts except for those containing the case-insensitive regex receivable",
        "hierarchy": "Hledger Data Journal",
        "module": "Hledger.Data.Journal",
        "name": "journalCashAccountQuery",
        "normalized": "Journal-\u003eQuery",
        "package": "hledger-lib",
        "partial": "Cash Account Query",
        "signature": "Journal-\u003eQuery"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Journal.html#v:journalConvertAmountsToCost",
      "description": {
        "fct-descr": "\u003cp\u003eConvert all this journal's amounts to cost by applying their prices, if any.\n\u003c/p\u003e",
        "fct-module": "Hledger.Data.Journal",
        "fct-package": "hledger-lib",
        "fct-signature": "Journal -\u003e Journal",
        "fct-source": "src/Hledger-Data-Journal.html#journalConvertAmountsToCost",
        "fct-type": "function",
        "title": "journalConvertAmountsToCost"
      },
      "index": {
        "description": "Convert all this journal amounts to cost by applying their prices if any",
        "hierarchy": "Hledger Data Journal",
        "module": "Hledger.Data.Journal",
        "name": "journalConvertAmountsToCost",
        "normalized": "Journal-\u003eJournal",
        "package": "hledger-lib",
        "partial": "Convert Amounts To Cost",
        "signature": "Journal-\u003eJournal"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Journal.html#v:journalDateSpan",
      "description": {
        "fct-descr": "\u003cp\u003eThe (fully specified) date span containing this journal's transactions,\n or DateSpan Nothing Nothing if there are none.\n\u003c/p\u003e",
        "fct-module": "Hledger.Data.Journal",
        "fct-package": "hledger-lib",
        "fct-signature": "Journal -\u003e DateSpan",
        "fct-source": "src/Hledger-Data-Journal.html#journalDateSpan",
        "fct-type": "function",
        "title": "journalDateSpan"
      },
      "index": {
        "description": "The fully specified date span containing this journal transactions or DateSpan Nothing Nothing if there are none",
        "hierarchy": "Hledger Data Journal",
        "module": "Hledger.Data.Journal",
        "name": "journalDateSpan",
        "normalized": "Journal-\u003eDateSpan",
        "package": "hledger-lib",
        "partial": "Date Span",
        "signature": "Journal-\u003eDateSpan"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Journal.html#v:journalEquityAccountQuery",
      "description": {
        "fct-descr": "\u003cp\u003eA query for Equity accounts in this journal.\n This is currently hard-coded to the case-insensitive regex \u003ccode\u003e^equity(:|$)\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Hledger.Data.Journal",
        "fct-package": "hledger-lib",
        "fct-signature": "Journal -\u003e Query",
        "fct-source": "src/Hledger-Data-Journal.html#journalEquityAccountQuery",
        "fct-type": "function",
        "title": "journalEquityAccountQuery"
      },
      "index": {
        "description": "query for Equity accounts in this journal This is currently hard-coded to the case-insensitive regex equity",
        "hierarchy": "Hledger Data Journal",
        "module": "Hledger.Data.Journal",
        "name": "journalEquityAccountQuery",
        "normalized": "Journal-\u003eQuery",
        "package": "hledger-lib",
        "partial": "Equity Account Query",
        "signature": "Journal-\u003eQuery"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Journal.html#v:journalExpenseAccountQuery",
      "description": {
        "fct-descr": "\u003cp\u003eA query for Expense accounts in this journal.\n This is currently hard-coded to the case-insensitive regex \u003ccode\u003e^expenses?(:|$)\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Hledger.Data.Journal",
        "fct-package": "hledger-lib",
        "fct-signature": "Journal -\u003e Query",
        "fct-source": "src/Hledger-Data-Journal.html#journalExpenseAccountQuery",
        "fct-type": "function",
        "title": "journalExpenseAccountQuery"
      },
      "index": {
        "description": "query for Expense accounts in this journal This is currently hard-coded to the case-insensitive regex expenses",
        "hierarchy": "Hledger Data Journal",
        "module": "Hledger.Data.Journal",
        "name": "journalExpenseAccountQuery",
        "normalized": "Journal-\u003eQuery",
        "package": "hledger-lib",
        "partial": "Expense Account Query",
        "signature": "Journal-\u003eQuery"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Journal.html#v:journalFilePath",
      "description": {
        "fct-module": "Hledger.Data.Journal",
        "fct-package": "hledger-lib",
        "fct-signature": "Journal -\u003e FilePath",
        "fct-source": "src/Hledger-Data-Journal.html#journalFilePath",
        "fct-type": "function",
        "title": "journalFilePath"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Data Journal",
        "module": "Hledger.Data.Journal",
        "name": "journalFilePath",
        "normalized": "Journal-\u003eFilePath",
        "package": "hledger-lib",
        "partial": "File Path",
        "signature": "Journal-\u003eFilePath"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Journal.html#v:journalFilePaths",
      "description": {
        "fct-module": "Hledger.Data.Journal",
        "fct-package": "hledger-lib",
        "fct-signature": "Journal -\u003e [FilePath]",
        "fct-source": "src/Hledger-Data-Journal.html#journalFilePaths",
        "fct-type": "function",
        "title": "journalFilePaths"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Data Journal",
        "module": "Hledger.Data.Journal",
        "name": "journalFilePaths",
        "normalized": "Journal-\u003e[FilePath]",
        "package": "hledger-lib",
        "partial": "File Paths",
        "signature": "Journal-\u003e[FilePath]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Journal.html#v:journalFinalise",
      "description": {
        "fct-descr": "\u003cp\u003eDo post-parse processing on a journal to make it ready for use: check\n all transactions balance, canonicalise amount formats, close any open\n timelog entries and so on.\n\u003c/p\u003e",
        "fct-module": "Hledger.Data.Journal",
        "fct-package": "hledger-lib",
        "fct-signature": "ClockTime -\u003e LocalTime -\u003e FilePath -\u003e String -\u003e JournalContext -\u003e Journal -\u003e Either String Journal",
        "fct-source": "src/Hledger-Data-Journal.html#journalFinalise",
        "fct-type": "function",
        "title": "journalFinalise"
      },
      "index": {
        "description": "Do post-parse processing on journal to make it ready for use check all transactions balance canonicalise amount formats close any open timelog entries and so on",
        "hierarchy": "Hledger Data Journal",
        "module": "Hledger.Data.Journal",
        "name": "journalFinalise",
        "normalized": "ClockTime-\u003eLocalTime-\u003eFilePath-\u003eString-\u003eJournalContext-\u003eJournal-\u003eEither String Journal",
        "package": "hledger-lib",
        "partial": "Finalise",
        "signature": "ClockTime-\u003eLocalTime-\u003eFilePath-\u003eString-\u003eJournalContext-\u003eJournal-\u003eEither String Journal"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Journal.html#v:journalIncomeAccountQuery",
      "description": {
        "fct-descr": "\u003cp\u003eA query for Income (Revenue) accounts in this journal.\n This is currently hard-coded to the case-insensitive regex \u003ccode\u003e^(income|revenue)s?(:|$)\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Hledger.Data.Journal",
        "fct-package": "hledger-lib",
        "fct-signature": "Journal -\u003e Query",
        "fct-source": "src/Hledger-Data-Journal.html#journalIncomeAccountQuery",
        "fct-type": "function",
        "title": "journalIncomeAccountQuery"
      },
      "index": {
        "description": "query for Income Revenue accounts in this journal This is currently hard-coded to the case-insensitive regex income revenue",
        "hierarchy": "Hledger Data Journal",
        "module": "Hledger.Data.Journal",
        "name": "journalIncomeAccountQuery",
        "normalized": "Journal-\u003eQuery",
        "package": "hledger-lib",
        "partial": "Income Account Query",
        "signature": "Journal-\u003eQuery"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Journal.html#v:journalLiabilityAccountQuery",
      "description": {
        "fct-descr": "\u003cp\u003eA query for Liability accounts in this journal.\n This is currently hard-coded to the case-insensitive regex \u003ccode\u003e^liabilit(y|ies)(:|$)\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Hledger.Data.Journal",
        "fct-package": "hledger-lib",
        "fct-signature": "Journal -\u003e Query",
        "fct-source": "src/Hledger-Data-Journal.html#journalLiabilityAccountQuery",
        "fct-type": "function",
        "title": "journalLiabilityAccountQuery"
      },
      "index": {
        "description": "query for Liability accounts in this journal This is currently hard-coded to the case-insensitive regex liabilit ies",
        "hierarchy": "Hledger Data Journal",
        "module": "Hledger.Data.Journal",
        "name": "journalLiabilityAccountQuery",
        "normalized": "Journal-\u003eQuery",
        "package": "hledger-lib",
        "partial": "Liability Account Query",
        "signature": "Journal-\u003eQuery"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Journal.html#v:journalPostings",
      "description": {
        "fct-module": "Hledger.Data.Journal",
        "fct-package": "hledger-lib",
        "fct-signature": "Journal -\u003e [Posting]",
        "fct-source": "src/Hledger-Data-Journal.html#journalPostings",
        "fct-type": "function",
        "title": "journalPostings"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Data Journal",
        "module": "Hledger.Data.Journal",
        "name": "journalPostings",
        "normalized": "Journal-\u003e[Posting]",
        "package": "hledger-lib",
        "partial": "Postings",
        "signature": "Journal-\u003e[Posting]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Journal.html#v:journalProfitAndLossAccountQuery",
      "description": {
        "fct-descr": "\u003cp\u003eA query for Profit & Loss accounts in this journal.\n Cf \u003ca\u003ehttp://en.wikipedia.org/wiki/Chart_of_accounts#Profit_.26_Loss_accounts\u003c/a\u003e.\n\u003c/p\u003e",
        "fct-module": "Hledger.Data.Journal",
        "fct-package": "hledger-lib",
        "fct-signature": "Journal -\u003e Query",
        "fct-source": "src/Hledger-Data-Journal.html#journalProfitAndLossAccountQuery",
        "fct-type": "function",
        "title": "journalProfitAndLossAccountQuery"
      },
      "index": {
        "description": "query for Profit Loss accounts in this journal Cf http en.wikipedia.org wiki Chart of accounts Profit Loss accounts",
        "hierarchy": "Hledger Data Journal",
        "module": "Hledger.Data.Journal",
        "name": "journalProfitAndLossAccountQuery",
        "normalized": "Journal-\u003eQuery",
        "package": "hledger-lib",
        "partial": "Profit And Loss Account Query",
        "signature": "Journal-\u003eQuery"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Journal.html#v:matchpats",
      "description": {
        "fct-descr": "\u003cp\u003eCheck if a set of hledger account/description filter patterns matches the\n given account name or entry description.  Patterns are case-insensitive\n regular expressions. Prefixed with not:, they become anti-patterns.\n\u003c/p\u003e",
        "fct-module": "Hledger.Data.Journal",
        "fct-package": "hledger-lib",
        "fct-signature": "[String] -\u003e String -\u003e Bool",
        "fct-source": "src/Hledger-Data-Journal.html#matchpats",
        "fct-type": "function",
        "title": "matchpats"
      },
      "index": {
        "description": "Check if set of hledger account description filter patterns matches the given account name or entry description Patterns are case-insensitive regular expressions Prefixed with not they become anti-patterns",
        "hierarchy": "Hledger Data Journal",
        "module": "Hledger.Data.Journal",
        "name": "matchpats",
        "normalized": "[String]-\u003eString-\u003eBool",
        "package": "hledger-lib",
        "partial": "",
        "signature": "[String]-\u003eString-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Journal.html#v:nullctx",
      "description": {
        "fct-module": "Hledger.Data.Journal",
        "fct-package": "hledger-lib",
        "fct-signature": "JournalContext",
        "fct-source": "src/Hledger-Data-Journal.html#nullctx",
        "fct-type": "function",
        "title": "nullctx"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Data Journal",
        "module": "Hledger.Data.Journal",
        "name": "nullctx",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Journal.html#v:nulljournal",
      "description": {
        "fct-module": "Hledger.Data.Journal",
        "fct-package": "hledger-lib",
        "fct-signature": "Journal",
        "fct-source": "src/Hledger-Data-Journal.html#nulljournal",
        "fct-type": "function",
        "title": "nulljournal"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Data Journal",
        "module": "Hledger.Data.Journal",
        "name": "nulljournal",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Journal.html#v:samplejournal",
      "description": {
        "fct-module": "Hledger.Data.Journal",
        "fct-package": "hledger-lib",
        "fct-signature": "Journal",
        "fct-source": "src/Hledger-Data-Journal.html#samplejournal",
        "fct-type": "function",
        "title": "samplejournal"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Data Journal",
        "module": "Hledger.Data.Journal",
        "name": "samplejournal",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Journal.html#v:tests_Hledger_Data_Journal",
      "description": {
        "fct-module": "Hledger.Data.Journal",
        "fct-package": "hledger-lib",
        "fct-signature": "Test",
        "fct-source": "src/Hledger-Data-Journal.html#tests_Hledger_Data_Journal",
        "fct-type": "function",
        "title": "tests_Hledger_Data_Journal"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Data Journal",
        "module": "Hledger.Data.Journal",
        "name": "tests_Hledger_Data_Journal",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "Hledger Data Journal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Ledger.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA \u003ccode\u003e\u003ca\u003eLedger\u003c/a\u003e\u003c/code\u003e is derived from a \u003ccode\u003e\u003ca\u003eJournal\u003c/a\u003e\u003c/code\u003e by applying a filter specification\nto select \u003ccode\u003e\u003ca\u003eTransaction\u003c/a\u003e\u003c/code\u003es and \u003ccode\u003e\u003ca\u003ePosting\u003c/a\u003e\u003c/code\u003es of interest. It contains the\nfiltered journal and knows the resulting chart of accounts, account\nbalances, and postings in each account.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Hledger.Data.Ledger",
        "fct-package": "hledger-lib",
        "fct-signature": "module",
        "fct-source": "src/Hledger-Data-Ledger.html",
        "fct-type": "module",
        "title": "Ledger"
      },
      "index": {
        "description": "Ledger is derived from Journal by applying filter specification to select Transaction and Posting of interest It contains the filtered journal and knows the resulting chart of accounts account balances and postings in each account",
        "hierarchy": "Hledger Data Ledger",
        "module": "Hledger.Data.Ledger",
        "name": "Ledger",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "Ledger",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Ledger.html#v:ledgerAccount",
      "description": {
        "fct-descr": "\u003cp\u003eGet the named account from a ledger.\n\u003c/p\u003e",
        "fct-module": "Hledger.Data.Ledger",
        "fct-package": "hledger-lib",
        "fct-signature": "Ledger -\u003e AccountName -\u003e Maybe Account",
        "fct-source": "src/Hledger-Data-Ledger.html#ledgerAccount",
        "fct-type": "function",
        "title": "ledgerAccount"
      },
      "index": {
        "description": "Get the named account from ledger",
        "hierarchy": "Hledger Data Ledger",
        "module": "Hledger.Data.Ledger",
        "name": "ledgerAccount",
        "normalized": "Ledger-\u003eAccountName-\u003eMaybe Account",
        "package": "hledger-lib",
        "partial": "Account",
        "signature": "Ledger-\u003eAccountName-\u003eMaybe Account"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Ledger.html#v:ledgerAccountNames",
      "description": {
        "fct-descr": "\u003cp\u003eList a ledger's account names.\n\u003c/p\u003e",
        "fct-module": "Hledger.Data.Ledger",
        "fct-package": "hledger-lib",
        "fct-signature": "Ledger -\u003e [AccountName]",
        "fct-source": "src/Hledger-Data-Ledger.html#ledgerAccountNames",
        "fct-type": "function",
        "title": "ledgerAccountNames"
      },
      "index": {
        "description": "List ledger account names",
        "hierarchy": "Hledger Data Ledger",
        "module": "Hledger.Data.Ledger",
        "name": "ledgerAccountNames",
        "normalized": "Ledger-\u003e[AccountName]",
        "package": "hledger-lib",
        "partial": "Account Names",
        "signature": "Ledger-\u003e[AccountName]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Ledger.html#v:ledgerAccountsMatching",
      "description": {
        "fct-descr": "\u003cp\u003eAccounts in ledger whose name matches the pattern, in tree order.\n\u003c/p\u003e",
        "fct-module": "Hledger.Data.Ledger",
        "fct-package": "hledger-lib",
        "fct-signature": "[String] -\u003e Ledger -\u003e [Account]",
        "fct-source": "src/Hledger-Data-Ledger.html#ledgerAccountsMatching",
        "fct-type": "function",
        "title": "ledgerAccountsMatching"
      },
      "index": {
        "description": "Accounts in ledger whose name matches the pattern in tree order",
        "hierarchy": "Hledger Data Ledger",
        "module": "Hledger.Data.Ledger",
        "name": "ledgerAccountsMatching",
        "normalized": "[String]-\u003eLedger-\u003e[Account]",
        "package": "hledger-lib",
        "partial": "Accounts Matching",
        "signature": "[String]-\u003eLedger-\u003e[Account]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Ledger.html#v:ledgerCommodities",
      "description": {
        "fct-descr": "\u003cp\u003eAll commodities used in this ledger.\n\u003c/p\u003e",
        "fct-module": "Hledger.Data.Ledger",
        "fct-package": "hledger-lib",
        "fct-signature": "Ledger -\u003e [Commodity]",
        "fct-source": "src/Hledger-Data-Ledger.html#ledgerCommodities",
        "fct-type": "function",
        "title": "ledgerCommodities"
      },
      "index": {
        "description": "All commodities used in this ledger",
        "hierarchy": "Hledger Data Ledger",
        "module": "Hledger.Data.Ledger",
        "name": "ledgerCommodities",
        "normalized": "Ledger-\u003e[Commodity]",
        "package": "hledger-lib",
        "partial": "Commodities",
        "signature": "Ledger-\u003e[Commodity]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Ledger.html#v:ledgerDateSpan",
      "description": {
        "fct-descr": "\u003cp\u003eThe (fully specified) date span containing all the ledger's (filtered) transactions,\n or DateSpan Nothing Nothing if there are none.\n\u003c/p\u003e",
        "fct-module": "Hledger.Data.Ledger",
        "fct-package": "hledger-lib",
        "fct-signature": "Ledger -\u003e DateSpan",
        "fct-source": "src/Hledger-Data-Ledger.html#ledgerDateSpan",
        "fct-type": "function",
        "title": "ledgerDateSpan"
      },
      "index": {
        "description": "The fully specified date span containing all the ledger filtered transactions or DateSpan Nothing Nothing if there are none",
        "hierarchy": "Hledger Data Ledger",
        "module": "Hledger.Data.Ledger",
        "name": "ledgerDateSpan",
        "normalized": "Ledger-\u003eDateSpan",
        "package": "hledger-lib",
        "partial": "Date Span",
        "signature": "Ledger-\u003eDateSpan"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Ledger.html#v:ledgerFromJournal",
      "description": {
        "fct-descr": "\u003cp\u003eFilter a journal's transactions with the given query, then derive a\n ledger containing the chart of accounts and balances. If the query\n includes a depth limit, that will affect the ledger's journal but not\n the account tree.\n\u003c/p\u003e",
        "fct-module": "Hledger.Data.Ledger",
        "fct-package": "hledger-lib",
        "fct-signature": "Query -\u003e Journal -\u003e Ledger",
        "fct-source": "src/Hledger-Data-Ledger.html#ledgerFromJournal",
        "fct-type": "function",
        "title": "ledgerFromJournal"
      },
      "index": {
        "description": "Filter journal transactions with the given query then derive ledger containing the chart of accounts and balances If the query includes depth limit that will affect the ledger journal but not the account tree",
        "hierarchy": "Hledger Data Ledger",
        "module": "Hledger.Data.Ledger",
        "name": "ledgerFromJournal",
        "normalized": "Query-\u003eJournal-\u003eLedger",
        "package": "hledger-lib",
        "partial": "From Journal",
        "signature": "Query-\u003eJournal-\u003eLedger"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Ledger.html#v:ledgerLeafAccounts",
      "description": {
        "fct-descr": "\u003cp\u003eList a ledger's bottom-level (subaccount-less) accounts, in tree order.\n\u003c/p\u003e",
        "fct-module": "Hledger.Data.Ledger",
        "fct-package": "hledger-lib",
        "fct-signature": "Ledger -\u003e [Account]",
        "fct-source": "src/Hledger-Data-Ledger.html#ledgerLeafAccounts",
        "fct-type": "function",
        "title": "ledgerLeafAccounts"
      },
      "index": {
        "description": "List ledger bottom-level subaccount-less accounts in tree order",
        "hierarchy": "Hledger Data Ledger",
        "module": "Hledger.Data.Ledger",
        "name": "ledgerLeafAccounts",
        "normalized": "Ledger-\u003e[Account]",
        "package": "hledger-lib",
        "partial": "Leaf Accounts",
        "signature": "Ledger-\u003e[Account]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Ledger.html#v:ledgerPostings",
      "description": {
        "fct-descr": "\u003cp\u003eList a ledger's postings, in the order parsed.\n\u003c/p\u003e",
        "fct-module": "Hledger.Data.Ledger",
        "fct-package": "hledger-lib",
        "fct-signature": "Ledger -\u003e [Posting]",
        "fct-source": "src/Hledger-Data-Ledger.html#ledgerPostings",
        "fct-type": "function",
        "title": "ledgerPostings"
      },
      "index": {
        "description": "List ledger postings in the order parsed",
        "hierarchy": "Hledger Data Ledger",
        "module": "Hledger.Data.Ledger",
        "name": "ledgerPostings",
        "normalized": "Ledger-\u003e[Posting]",
        "package": "hledger-lib",
        "partial": "Postings",
        "signature": "Ledger-\u003e[Posting]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Ledger.html#v:ledgerRootAccount",
      "description": {
        "fct-descr": "\u003cp\u003eGet this ledger's root account, which is a dummy \u003ca\u003eroot\u003c/a\u003e account\n above all others. This should always be first in the account list,\n if somehow not this returns a null account.\n\u003c/p\u003e",
        "fct-module": "Hledger.Data.Ledger",
        "fct-package": "hledger-lib",
        "fct-signature": "Ledger -\u003e Account",
        "fct-source": "src/Hledger-Data-Ledger.html#ledgerRootAccount",
        "fct-type": "function",
        "title": "ledgerRootAccount"
      },
      "index": {
        "description": "Get this ledger root account which is dummy root account above all others This should always be first in the account list if somehow not this returns null account",
        "hierarchy": "Hledger Data Ledger",
        "module": "Hledger.Data.Ledger",
        "name": "ledgerRootAccount",
        "normalized": "Ledger-\u003eAccount",
        "package": "hledger-lib",
        "partial": "Root Account",
        "signature": "Ledger-\u003eAccount"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Ledger.html#v:ledgerTopAccounts",
      "description": {
        "fct-descr": "\u003cp\u003eList a ledger's top-level accounts (the ones below the root), in tree order.\n\u003c/p\u003e",
        "fct-module": "Hledger.Data.Ledger",
        "fct-package": "hledger-lib",
        "fct-signature": "Ledger -\u003e [Account]",
        "fct-source": "src/Hledger-Data-Ledger.html#ledgerTopAccounts",
        "fct-type": "function",
        "title": "ledgerTopAccounts"
      },
      "index": {
        "description": "List ledger top-level accounts the ones below the root in tree order",
        "hierarchy": "Hledger Data Ledger",
        "module": "Hledger.Data.Ledger",
        "name": "ledgerTopAccounts",
        "normalized": "Ledger-\u003e[Account]",
        "package": "hledger-lib",
        "partial": "Top Accounts",
        "signature": "Ledger-\u003e[Account]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Ledger.html#v:nullledger",
      "description": {
        "fct-module": "Hledger.Data.Ledger",
        "fct-package": "hledger-lib",
        "fct-signature": "Ledger",
        "fct-source": "src/Hledger-Data-Ledger.html#nullledger",
        "fct-type": "function",
        "title": "nullledger"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Data Ledger",
        "module": "Hledger.Data.Ledger",
        "name": "nullledger",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Ledger.html#v:tests_Hledger_Data_Ledger",
      "description": {
        "fct-module": "Hledger.Data.Ledger",
        "fct-package": "hledger-lib",
        "fct-signature": "Test",
        "fct-source": "src/Hledger-Data-Ledger.html#tests_Hledger_Data_Ledger",
        "fct-type": "function",
        "title": "tests_Hledger_Data_Ledger"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Data Ledger",
        "module": "Hledger.Data.Ledger",
        "name": "tests_Hledger_Data_Ledger",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "Hledger Data Ledger",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Ledger.html#v:tests_ledgerFromJournal",
      "description": {
        "fct-module": "Hledger.Data.Ledger",
        "fct-package": "hledger-lib",
        "fct-signature": "[Test]",
        "fct-source": "src/Hledger-Data-Ledger.html#tests_ledgerFromJournal",
        "fct-type": "function",
        "title": "tests_ledgerFromJournal"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Data Ledger",
        "module": "Hledger.Data.Ledger",
        "name": "tests_ledgerFromJournal",
        "normalized": "[Test]",
        "package": "hledger-lib",
        "partial": "From Journal",
        "signature": "[Test]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Posting.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA \u003ccode\u003e\u003ca\u003ePosting\u003c/a\u003e\u003c/code\u003e represents a change (by some \u003ccode\u003e\u003ca\u003eMixedAmount\u003c/a\u003e\u003c/code\u003e) of the balance in\nsome \u003ccode\u003e\u003ca\u003eAccount\u003c/a\u003e\u003c/code\u003e.  Each \u003ccode\u003e\u003ca\u003eTransaction\u003c/a\u003e\u003c/code\u003e contains two or more postings which\nshould add up to 0. Postings reference their parent transaction, so we can\nlook up the date or description there.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Hledger.Data.Posting",
        "fct-package": "hledger-lib",
        "fct-signature": "module",
        "fct-source": "src/Hledger-Data-Posting.html",
        "fct-type": "module",
        "title": "Posting"
      },
      "index": {
        "description": "Posting represents change by some MixedAmount of the balance in some Account Each Transaction contains two or more postings which should add up to Postings reference their parent transaction so we can look up the date or description there",
        "hierarchy": "Hledger Data Posting",
        "module": "Hledger.Data.Posting",
        "name": "Posting",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "Posting",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Posting.html#v:accountNameApplyAliases",
      "description": {
        "fct-descr": "\u003cp\u003eRewrite an account name using the first applicable alias from the given list, if any.\n\u003c/p\u003e",
        "fct-module": "Hledger.Data.Posting",
        "fct-package": "hledger-lib",
        "fct-signature": "[(AccountName, AccountName)] -\u003e AccountName -\u003e AccountName",
        "fct-source": "src/Hledger-Data-Posting.html#accountNameApplyAliases",
        "fct-type": "function",
        "title": "accountNameApplyAliases"
      },
      "index": {
        "description": "Rewrite an account name using the first applicable alias from the given list if any",
        "hierarchy": "Hledger Data Posting",
        "module": "Hledger.Data.Posting",
        "name": "accountNameApplyAliases",
        "normalized": "[(AccountName,AccountName)]-\u003eAccountName-\u003eAccountName",
        "package": "hledger-lib",
        "partial": "Name Apply Aliases",
        "signature": "[(AccountName,AccountName)]-\u003eAccountName-\u003eAccountName"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Posting.html#v:accountNamePostingType",
      "description": {
        "fct-module": "Hledger.Data.Posting",
        "fct-package": "hledger-lib",
        "fct-signature": "AccountName -\u003e PostingType",
        "fct-source": "src/Hledger-Data-Posting.html#accountNamePostingType",
        "fct-type": "function",
        "title": "accountNamePostingType"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Data Posting",
        "module": "Hledger.Data.Posting",
        "name": "accountNamePostingType",
        "normalized": "AccountName-\u003ePostingType",
        "package": "hledger-lib",
        "partial": "Name Posting Type",
        "signature": "AccountName-\u003ePostingType"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Posting.html#v:accountNameWithPostingType",
      "description": {
        "fct-module": "Hledger.Data.Posting",
        "fct-package": "hledger-lib",
        "fct-signature": "PostingType -\u003e AccountName -\u003e AccountName",
        "fct-source": "src/Hledger-Data-Posting.html#accountNameWithPostingType",
        "fct-type": "function",
        "title": "accountNameWithPostingType"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Data Posting",
        "module": "Hledger.Data.Posting",
        "name": "accountNameWithPostingType",
        "normalized": "PostingType-\u003eAccountName-\u003eAccountName",
        "package": "hledger-lib",
        "partial": "Name With Posting Type",
        "signature": "PostingType-\u003eAccountName-\u003eAccountName"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Posting.html#v:accountNameWithoutPostingType",
      "description": {
        "fct-module": "Hledger.Data.Posting",
        "fct-package": "hledger-lib",
        "fct-signature": "AccountName -\u003e AccountName",
        "fct-source": "src/Hledger-Data-Posting.html#accountNameWithoutPostingType",
        "fct-type": "function",
        "title": "accountNameWithoutPostingType"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Data Posting",
        "module": "Hledger.Data.Posting",
        "name": "accountNameWithoutPostingType",
        "normalized": "AccountName-\u003eAccountName",
        "package": "hledger-lib",
        "partial": "Name Without Posting Type",
        "signature": "AccountName-\u003eAccountName"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Posting.html#v:accountNamesFromPostings",
      "description": {
        "fct-module": "Hledger.Data.Posting",
        "fct-package": "hledger-lib",
        "fct-signature": "[Posting] -\u003e [AccountName]",
        "fct-source": "src/Hledger-Data-Posting.html#accountNamesFromPostings",
        "fct-type": "function",
        "title": "accountNamesFromPostings"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Data Posting",
        "module": "Hledger.Data.Posting",
        "name": "accountNamesFromPostings",
        "normalized": "[Posting]-\u003e[AccountName]",
        "package": "hledger-lib",
        "partial": "Names From Postings",
        "signature": "[Posting]-\u003e[AccountName]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Posting.html#v:concatAccountNames",
      "description": {
        "fct-descr": "\u003cp\u003eJoin account names into one. If any of them has () or [] posting type\n indicators, these (the first type encountered) will also be applied to\n the resulting account name.\n\u003c/p\u003e",
        "fct-module": "Hledger.Data.Posting",
        "fct-package": "hledger-lib",
        "fct-signature": "[AccountName] -\u003e AccountName",
        "fct-source": "src/Hledger-Data-Posting.html#concatAccountNames",
        "fct-type": "function",
        "title": "concatAccountNames"
      },
      "index": {
        "description": "Join account names into one If any of them has or posting type indicators these the first type encountered will also be applied to the resulting account name",
        "hierarchy": "Hledger Data Posting",
        "module": "Hledger.Data.Posting",
        "name": "concatAccountNames",
        "normalized": "[AccountName]-\u003eAccountName",
        "package": "hledger-lib",
        "partial": "Account Names",
        "signature": "[AccountName]-\u003eAccountName"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Posting.html#v:hasAmount",
      "description": {
        "fct-module": "Hledger.Data.Posting",
        "fct-package": "hledger-lib",
        "fct-signature": "Posting -\u003e Bool",
        "fct-source": "src/Hledger-Data-Posting.html#hasAmount",
        "fct-type": "function",
        "title": "hasAmount"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Data Posting",
        "module": "Hledger.Data.Posting",
        "name": "hasAmount",
        "normalized": "Posting-\u003eBool",
        "package": "hledger-lib",
        "partial": "Amount",
        "signature": "Posting-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Posting.html#v:isBalancedVirtual",
      "description": {
        "fct-module": "Hledger.Data.Posting",
        "fct-package": "hledger-lib",
        "fct-signature": "Posting -\u003e Bool",
        "fct-source": "src/Hledger-Data-Posting.html#isBalancedVirtual",
        "fct-type": "function",
        "title": "isBalancedVirtual"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Data Posting",
        "module": "Hledger.Data.Posting",
        "name": "isBalancedVirtual",
        "normalized": "Posting-\u003eBool",
        "package": "hledger-lib",
        "partial": "Balanced Virtual",
        "signature": "Posting-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Posting.html#v:isEmptyPosting",
      "description": {
        "fct-module": "Hledger.Data.Posting",
        "fct-package": "hledger-lib",
        "fct-signature": "Posting -\u003e Bool",
        "fct-source": "src/Hledger-Data-Posting.html#isEmptyPosting",
        "fct-type": "function",
        "title": "isEmptyPosting"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Data Posting",
        "module": "Hledger.Data.Posting",
        "name": "isEmptyPosting",
        "normalized": "Posting-\u003eBool",
        "package": "hledger-lib",
        "partial": "Empty Posting",
        "signature": "Posting-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Posting.html#v:isPostingInDateSpan",
      "description": {
        "fct-descr": "\u003cp\u003eDoes this posting fall within the given date span ?\n\u003c/p\u003e",
        "fct-module": "Hledger.Data.Posting",
        "fct-package": "hledger-lib",
        "fct-signature": "DateSpan -\u003e Posting -\u003e Bool",
        "fct-source": "src/Hledger-Data-Posting.html#isPostingInDateSpan",
        "fct-type": "function",
        "title": "isPostingInDateSpan"
      },
      "index": {
        "description": "Does this posting fall within the given date span",
        "hierarchy": "Hledger Data Posting",
        "module": "Hledger.Data.Posting",
        "name": "isPostingInDateSpan",
        "normalized": "DateSpan-\u003ePosting-\u003eBool",
        "package": "hledger-lib",
        "partial": "Posting In Date Span",
        "signature": "DateSpan-\u003ePosting-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Posting.html#v:isReal",
      "description": {
        "fct-module": "Hledger.Data.Posting",
        "fct-package": "hledger-lib",
        "fct-signature": "Posting -\u003e Bool",
        "fct-source": "src/Hledger-Data-Posting.html#isReal",
        "fct-type": "function",
        "title": "isReal"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Data Posting",
        "module": "Hledger.Data.Posting",
        "name": "isReal",
        "normalized": "Posting-\u003eBool",
        "package": "hledger-lib",
        "partial": "Real",
        "signature": "Posting-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Posting.html#v:isVirtual",
      "description": {
        "fct-module": "Hledger.Data.Posting",
        "fct-package": "hledger-lib",
        "fct-signature": "Posting -\u003e Bool",
        "fct-source": "src/Hledger-Data-Posting.html#isVirtual",
        "fct-type": "function",
        "title": "isVirtual"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Data Posting",
        "module": "Hledger.Data.Posting",
        "name": "isVirtual",
        "normalized": "Posting-\u003eBool",
        "package": "hledger-lib",
        "partial": "Virtual",
        "signature": "Posting-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Posting.html#v:joinAccountNames",
      "description": {
        "fct-descr": "\u003cp\u003ePrefix one account name to another, preserving posting type\n indicators like concatAccountNames.\n\u003c/p\u003e",
        "fct-module": "Hledger.Data.Posting",
        "fct-package": "hledger-lib",
        "fct-signature": "AccountName -\u003e AccountName -\u003e AccountName",
        "fct-source": "src/Hledger-Data-Posting.html#joinAccountNames",
        "fct-type": "function",
        "title": "joinAccountNames"
      },
      "index": {
        "description": "Prefix one account name to another preserving posting type indicators like concatAccountNames",
        "hierarchy": "Hledger Data Posting",
        "module": "Hledger.Data.Posting",
        "name": "joinAccountNames",
        "normalized": "AccountName-\u003eAccountName-\u003eAccountName",
        "package": "hledger-lib",
        "partial": "Account Names",
        "signature": "AccountName-\u003eAccountName-\u003eAccountName"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Posting.html#v:nullposting",
      "description": {
        "fct-module": "Hledger.Data.Posting",
        "fct-package": "hledger-lib",
        "fct-signature": "Posting",
        "fct-source": "src/Hledger-Data-Posting.html#nullposting",
        "fct-type": "function",
        "title": "nullposting"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Data Posting",
        "module": "Hledger.Data.Posting",
        "name": "nullposting",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Posting.html#v:post",
      "description": {
        "fct-module": "Hledger.Data.Posting",
        "fct-package": "hledger-lib",
        "fct-signature": "AccountName -\u003e Amount -\u003e Posting",
        "fct-source": "src/Hledger-Data-Posting.html#post",
        "fct-type": "function",
        "title": "post"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Data Posting",
        "module": "Hledger.Data.Posting",
        "name": "post",
        "normalized": "AccountName-\u003eAmount-\u003ePosting",
        "package": "hledger-lib",
        "partial": "",
        "signature": "AccountName-\u003eAmount-\u003ePosting"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Posting.html#v:posting",
      "description": {
        "fct-module": "Hledger.Data.Posting",
        "fct-package": "hledger-lib",
        "fct-signature": "Posting",
        "fct-source": "src/Hledger-Data-Posting.html#posting",
        "fct-type": "function",
        "title": "posting"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Data Posting",
        "module": "Hledger.Data.Posting",
        "name": "posting",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Posting.html#v:postingAllTags",
      "description": {
        "fct-descr": "\u003cp\u003eTags for this posting including any inherited from its parent transaction.\n\u003c/p\u003e",
        "fct-module": "Hledger.Data.Posting",
        "fct-package": "hledger-lib",
        "fct-signature": "Posting -\u003e [Tag]",
        "fct-source": "src/Hledger-Data-Posting.html#postingAllTags",
        "fct-type": "function",
        "title": "postingAllTags"
      },
      "index": {
        "description": "Tags for this posting including any inherited from its parent transaction",
        "hierarchy": "Hledger Data Posting",
        "module": "Hledger.Data.Posting",
        "name": "postingAllTags",
        "normalized": "Posting-\u003e[Tag]",
        "package": "hledger-lib",
        "partial": "All Tags",
        "signature": "Posting-\u003e[Tag]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Posting.html#v:postingCleared",
      "description": {
        "fct-descr": "\u003cp\u003eIs this posting cleared? If this posting was individually marked\n as cleared, returns True. Otherwise, return the parent\n transaction's cleared status or, if there is no parent\n transaction, return False.\n\u003c/p\u003e",
        "fct-module": "Hledger.Data.Posting",
        "fct-package": "hledger-lib",
        "fct-signature": "Posting -\u003e Bool",
        "fct-source": "src/Hledger-Data-Posting.html#postingCleared",
        "fct-type": "function",
        "title": "postingCleared"
      },
      "index": {
        "description": "Is this posting cleared If this posting was individually marked as cleared returns True Otherwise return the parent transaction cleared status or if there is no parent transaction return False",
        "hierarchy": "Hledger Data Posting",
        "module": "Hledger.Data.Posting",
        "name": "postingCleared",
        "normalized": "Posting-\u003eBool",
        "package": "hledger-lib",
        "partial": "Cleared",
        "signature": "Posting-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Posting.html#v:postingDate",
      "description": {
        "fct-descr": "\u003cp\u003eGet a posting's (primary) date - it's own primary date if specified,\n otherwise the parent transaction's primary date, or the null date if\n there is no parent transaction.\n\u003c/p\u003e",
        "fct-module": "Hledger.Data.Posting",
        "fct-package": "hledger-lib",
        "fct-signature": "Posting -\u003e Day",
        "fct-source": "src/Hledger-Data-Posting.html#postingDate",
        "fct-type": "function",
        "title": "postingDate"
      },
      "index": {
        "description": "Get posting primary date it own primary date if specified otherwise the parent transaction primary date or the null date if there is no parent transaction",
        "hierarchy": "Hledger Data Posting",
        "module": "Hledger.Data.Posting",
        "name": "postingDate",
        "normalized": "Posting-\u003eDay",
        "package": "hledger-lib",
        "partial": "Date",
        "signature": "Posting-\u003eDay"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Posting.html#v:postingDate2",
      "description": {
        "fct-descr": "\u003cp\u003eGet a posting's secondary (secondary) date, which is the first of:\n posting's secondary date, transaction's secondary date, posting's\n primary date, transaction's primary date, or the null date if there is\n no parent transaction.\n\u003c/p\u003e",
        "fct-module": "Hledger.Data.Posting",
        "fct-package": "hledger-lib",
        "fct-signature": "Posting -\u003e Day",
        "fct-source": "src/Hledger-Data-Posting.html#postingDate2",
        "fct-type": "function",
        "title": "postingDate2"
      },
      "index": {
        "description": "Get posting secondary secondary date which is the first of posting secondary date transaction secondary date posting primary date transaction primary date or the null date if there is no parent transaction",
        "hierarchy": "Hledger Data Posting",
        "module": "Hledger.Data.Posting",
        "name": "postingDate2",
        "normalized": "Posting-\u003eDay",
        "package": "hledger-lib",
        "partial": "Date",
        "signature": "Posting-\u003eDay"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Posting.html#v:postingsDateSpan",
      "description": {
        "fct-descr": "\u003cp\u003eGet the minimal date span which contains all the postings, or the\n null date span if there are none.\n\u003c/p\u003e",
        "fct-module": "Hledger.Data.Posting",
        "fct-package": "hledger-lib",
        "fct-signature": "[Posting] -\u003e DateSpan",
        "fct-source": "src/Hledger-Data-Posting.html#postingsDateSpan",
        "fct-type": "function",
        "title": "postingsDateSpan"
      },
      "index": {
        "description": "Get the minimal date span which contains all the postings or the null date span if there are none",
        "hierarchy": "Hledger Data Posting",
        "module": "Hledger.Data.Posting",
        "name": "postingsDateSpan",
        "normalized": "[Posting]-\u003eDateSpan",
        "package": "hledger-lib",
        "partial": "Date Span",
        "signature": "[Posting]-\u003eDateSpan"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Posting.html#v:relatedPostings",
      "description": {
        "fct-module": "Hledger.Data.Posting",
        "fct-package": "hledger-lib",
        "fct-signature": "Posting -\u003e [Posting]",
        "fct-source": "src/Hledger-Data-Posting.html#relatedPostings",
        "fct-type": "function",
        "title": "relatedPostings"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Data Posting",
        "module": "Hledger.Data.Posting",
        "name": "relatedPostings",
        "normalized": "Posting-\u003e[Posting]",
        "package": "hledger-lib",
        "partial": "Postings",
        "signature": "Posting-\u003e[Posting]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Posting.html#v:showComment",
      "description": {
        "fct-module": "Hledger.Data.Posting",
        "fct-package": "hledger-lib",
        "fct-signature": "String -\u003e String",
        "fct-source": "src/Hledger-Data-Posting.html#showComment",
        "fct-type": "function",
        "title": "showComment"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Data Posting",
        "module": "Hledger.Data.Posting",
        "name": "showComment",
        "normalized": "String-\u003eString",
        "package": "hledger-lib",
        "partial": "Comment",
        "signature": "String-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Posting.html#v:showPosting",
      "description": {
        "fct-module": "Hledger.Data.Posting",
        "fct-package": "hledger-lib",
        "fct-signature": "Posting -\u003e String",
        "fct-source": "src/Hledger-Data-Posting.html#showPosting",
        "fct-type": "function",
        "title": "showPosting"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Data Posting",
        "module": "Hledger.Data.Posting",
        "name": "showPosting",
        "normalized": "Posting-\u003eString",
        "package": "hledger-lib",
        "partial": "Posting",
        "signature": "Posting-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Posting.html#v:sumPostings",
      "description": {
        "fct-module": "Hledger.Data.Posting",
        "fct-package": "hledger-lib",
        "fct-signature": "[Posting] -\u003e MixedAmount",
        "fct-source": "src/Hledger-Data-Posting.html#sumPostings",
        "fct-type": "function",
        "title": "sumPostings"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Data Posting",
        "module": "Hledger.Data.Posting",
        "name": "sumPostings",
        "normalized": "[Posting]-\u003eMixedAmount",
        "package": "hledger-lib",
        "partial": "Postings",
        "signature": "[Posting]-\u003eMixedAmount"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Posting.html#v:tests_Hledger_Data_Posting",
      "description": {
        "fct-module": "Hledger.Data.Posting",
        "fct-package": "hledger-lib",
        "fct-signature": "Test",
        "fct-source": "src/Hledger-Data-Posting.html#tests_Hledger_Data_Posting",
        "fct-type": "function",
        "title": "tests_Hledger_Data_Posting"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Data Posting",
        "module": "Hledger.Data.Posting",
        "name": "tests_Hledger_Data_Posting",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "Hledger Data Posting",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Posting.html#v:transactionAllTags",
      "description": {
        "fct-descr": "\u003cp\u003eTags for this transaction including any inherited from above, when that is implemented.\n\u003c/p\u003e",
        "fct-module": "Hledger.Data.Posting",
        "fct-package": "hledger-lib",
        "fct-signature": "Transaction -\u003e [Tag]",
        "fct-source": "src/Hledger-Data-Posting.html#transactionAllTags",
        "fct-type": "function",
        "title": "transactionAllTags"
      },
      "index": {
        "description": "Tags for this transaction including any inherited from above when that is implemented",
        "hierarchy": "Hledger Data Posting",
        "module": "Hledger.Data.Posting",
        "name": "transactionAllTags",
        "normalized": "Transaction-\u003e[Tag]",
        "package": "hledger-lib",
        "partial": "All Tags",
        "signature": "Transaction-\u003e[Tag]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-TimeLog.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA \u003ccode\u003e\u003ca\u003eTimeLogEntry\u003c/a\u003e\u003c/code\u003e is a clock-in, clock-out, or other directive in a timelog\nfile (see timeclock.el or the command-line version). These can be\nconverted to \u003ccode\u003eTransactions\u003c/code\u003e and queried like a ledger.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Hledger.Data.TimeLog",
        "fct-package": "hledger-lib",
        "fct-signature": "module",
        "fct-source": "src/Hledger-Data-TimeLog.html",
        "fct-type": "module",
        "title": "TimeLog"
      },
      "index": {
        "description": "TimeLogEntry is clock-in clock-out or other directive in timelog file see timeclock.el or the command-line version These can be converted to Transactions and queried like ledger",
        "hierarchy": "Hledger Data TimeLog",
        "module": "Hledger.Data.TimeLog",
        "name": "TimeLog",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "Time Log",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-TimeLog.html#v:entryFromTimeLogInOut",
      "description": {
        "fct-descr": "\u003cp\u003eConvert a timelog clockin and clockout entry to an equivalent journal\n transaction, representing the time expenditure. Note this entry is  not balanced,\n since we omit the \"assets:time\" transaction for simpler output.\n\u003c/p\u003e",
        "fct-module": "Hledger.Data.TimeLog",
        "fct-package": "hledger-lib",
        "fct-signature": "TimeLogEntry -\u003e TimeLogEntry -\u003e Transaction",
        "fct-source": "src/Hledger-Data-TimeLog.html#entryFromTimeLogInOut",
        "fct-type": "function",
        "title": "entryFromTimeLogInOut"
      },
      "index": {
        "description": "Convert timelog clockin and clockout entry to an equivalent journal transaction representing the time expenditure Note this entry is not balanced since we omit the assets time transaction for simpler output",
        "hierarchy": "Hledger Data TimeLog",
        "module": "Hledger.Data.TimeLog",
        "name": "entryFromTimeLogInOut",
        "normalized": "TimeLogEntry-\u003eTimeLogEntry-\u003eTransaction",
        "package": "hledger-lib",
        "partial": "From Time Log In Out",
        "signature": "TimeLogEntry-\u003eTimeLogEntry-\u003eTransaction"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-TimeLog.html#v:tests_Hledger_Data_TimeLog",
      "description": {
        "fct-module": "Hledger.Data.TimeLog",
        "fct-package": "hledger-lib",
        "fct-signature": "Test",
        "fct-source": "src/Hledger-Data-TimeLog.html#tests_Hledger_Data_TimeLog",
        "fct-type": "function",
        "title": "tests_Hledger_Data_TimeLog"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Data TimeLog",
        "module": "Hledger.Data.TimeLog",
        "name": "tests_Hledger_Data_TimeLog",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "Hledger Data Time Log",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-TimeLog.html#v:timeLogEntriesToTransactions",
      "description": {
        "fct-descr": "\u003cp\u003eConvert time log entries to journal transactions. When there is no\n clockout, add one with the provided current time. Sessions crossing\n midnight are split into days to give accurate per-day totals.\n\u003c/p\u003e",
        "fct-module": "Hledger.Data.TimeLog",
        "fct-package": "hledger-lib",
        "fct-signature": "LocalTime -\u003e [TimeLogEntry] -\u003e [Transaction]",
        "fct-source": "src/Hledger-Data-TimeLog.html#timeLogEntriesToTransactions",
        "fct-type": "function",
        "title": "timeLogEntriesToTransactions"
      },
      "index": {
        "description": "Convert time log entries to journal transactions When there is no clockout add one with the provided current time Sessions crossing midnight are split into days to give accurate per-day totals",
        "hierarchy": "Hledger Data TimeLog",
        "module": "Hledger.Data.TimeLog",
        "name": "timeLogEntriesToTransactions",
        "normalized": "LocalTime-\u003e[TimeLogEntry]-\u003e[Transaction]",
        "package": "hledger-lib",
        "partial": "Log Entries To Transactions",
        "signature": "LocalTime-\u003e[TimeLogEntry]-\u003e[Transaction]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Transaction.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA \u003ccode\u003e\u003ca\u003eTransaction\u003c/a\u003e\u003c/code\u003e represents a movement of some commodity(ies) between two\nor more accounts. It consists of multiple account \u003ccode\u003e\u003ca\u003ePosting\u003c/a\u003e\u003c/code\u003es which balance\nto zero, a date, and optional extras like description, cleared status, and\ntags.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Hledger.Data.Transaction",
        "fct-package": "hledger-lib",
        "fct-signature": "module",
        "fct-source": "src/Hledger-Data-Transaction.html",
        "fct-type": "module",
        "title": "Transaction"
      },
      "index": {
        "description": "Transaction represents movement of some commodity ies between two or more accounts It consists of multiple account Posting which balance to zero date and optional extras like description cleared status and tags",
        "hierarchy": "Hledger Data Transaction",
        "module": "Hledger.Data.Transaction",
        "name": "Transaction",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "Transaction",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Transaction.html#v:balanceTransaction",
      "description": {
        "fct-descr": "\u003cp\u003eEnsure this transaction is balanced, possibly inferring a missing\n amount or conversion price, or return an error message.\n\u003c/p\u003e\u003cp\u003eBalancing is affected by commodity display precisions, so those may\n be provided.\n\u003c/p\u003e\u003cp\u003eWe can infer a missing real amount when there are multiple real\n postings and exactly one of them is amountless (likewise for\n balanced virtual postings). Inferred amounts are converted to cost\n basis when possible.\n\u003c/p\u003e\u003cp\u003eWe can infer a conversion price when all real amounts are specified\n and the sum of real postings' amounts is exactly two\n non-explicitly-priced amounts in different commodities (likewise\n for balanced virtual postings).\n\u003c/p\u003e",
        "fct-module": "Hledger.Data.Transaction",
        "fct-package": "hledger-lib",
        "fct-signature": "Maybe (Map Commodity AmountStyle) -\u003e Transaction -\u003e Either String Transaction",
        "fct-source": "src/Hledger-Data-Transaction.html#balanceTransaction",
        "fct-type": "function",
        "title": "balanceTransaction"
      },
      "index": {
        "description": "Ensure this transaction is balanced possibly inferring missing amount or conversion price or return an error message Balancing is affected by commodity display precisions so those may be provided We can infer missing real amount when there are multiple real postings and exactly one of them is amountless likewise for balanced virtual postings Inferred amounts are converted to cost basis when possible We can infer conversion price when all real amounts are specified and the sum of real postings amounts is exactly two non-explicitly-priced amounts in different commodities likewise for balanced virtual postings",
        "hierarchy": "Hledger Data Transaction",
        "module": "Hledger.Data.Transaction",
        "name": "balanceTransaction",
        "normalized": "Maybe(Map Commodity AmountStyle)-\u003eTransaction-\u003eEither String Transaction",
        "package": "hledger-lib",
        "partial": "Transaction",
        "signature": "Maybe(Map Commodity AmountStyle)-\u003eTransaction-\u003eEither String Transaction"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Transaction.html#v:balancedVirtualPostings",
      "description": {
        "fct-module": "Hledger.Data.Transaction",
        "fct-package": "hledger-lib",
        "fct-signature": "Transaction -\u003e [Posting]",
        "fct-source": "src/Hledger-Data-Transaction.html#balancedVirtualPostings",
        "fct-type": "function",
        "title": "balancedVirtualPostings"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Data Transaction",
        "module": "Hledger.Data.Transaction",
        "name": "balancedVirtualPostings",
        "normalized": "Transaction-\u003e[Posting]",
        "package": "hledger-lib",
        "partial": "Virtual Postings",
        "signature": "Transaction-\u003e[Posting]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Transaction.html#v:hasRealPostings",
      "description": {
        "fct-module": "Hledger.Data.Transaction",
        "fct-package": "hledger-lib",
        "fct-signature": "Transaction -\u003e Bool",
        "fct-source": "src/Hledger-Data-Transaction.html#hasRealPostings",
        "fct-type": "function",
        "title": "hasRealPostings"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Data Transaction",
        "module": "Hledger.Data.Transaction",
        "name": "hasRealPostings",
        "normalized": "Transaction-\u003eBool",
        "package": "hledger-lib",
        "partial": "Real Postings",
        "signature": "Transaction-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Transaction.html#v:isTransactionBalanced",
      "description": {
        "fct-descr": "\u003cp\u003eIs this transaction balanced ? A balanced transaction's real\n (non-virtual) postings sum to 0, and any balanced virtual postings\n also sum to 0.\n\u003c/p\u003e",
        "fct-module": "Hledger.Data.Transaction",
        "fct-package": "hledger-lib",
        "fct-signature": "Maybe (Map Commodity AmountStyle) -\u003e Transaction -\u003e Bool",
        "fct-source": "src/Hledger-Data-Transaction.html#isTransactionBalanced",
        "fct-type": "function",
        "title": "isTransactionBalanced"
      },
      "index": {
        "description": "Is this transaction balanced balanced transaction real non-virtual postings sum to and any balanced virtual postings also sum to",
        "hierarchy": "Hledger Data Transaction",
        "module": "Hledger.Data.Transaction",
        "name": "isTransactionBalanced",
        "normalized": "Maybe(Map Commodity AmountStyle)-\u003eTransaction-\u003eBool",
        "package": "hledger-lib",
        "partial": "Transaction Balanced",
        "signature": "Maybe(Map Commodity AmountStyle)-\u003eTransaction-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Transaction.html#v:nulltransaction",
      "description": {
        "fct-module": "Hledger.Data.Transaction",
        "fct-package": "hledger-lib",
        "fct-signature": "Transaction",
        "fct-source": "src/Hledger-Data-Transaction.html#nulltransaction",
        "fct-type": "function",
        "title": "nulltransaction"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Data Transaction",
        "module": "Hledger.Data.Transaction",
        "name": "nulltransaction",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Transaction.html#v:realPostings",
      "description": {
        "fct-module": "Hledger.Data.Transaction",
        "fct-package": "hledger-lib",
        "fct-signature": "Transaction -\u003e [Posting]",
        "fct-source": "src/Hledger-Data-Transaction.html#realPostings",
        "fct-type": "function",
        "title": "realPostings"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Data Transaction",
        "module": "Hledger.Data.Transaction",
        "name": "realPostings",
        "normalized": "Transaction-\u003e[Posting]",
        "package": "hledger-lib",
        "partial": "Postings",
        "signature": "Transaction-\u003e[Posting]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Transaction.html#v:showAccountName",
      "description": {
        "fct-descr": "\u003cp\u003eShow an account name, clipped to the given width if any, and\n appropriately bracketed/parenthesised for the given posting type.\n\u003c/p\u003e",
        "fct-module": "Hledger.Data.Transaction",
        "fct-package": "hledger-lib",
        "fct-signature": "Maybe Int -\u003e PostingType -\u003e AccountName -\u003e String",
        "fct-source": "src/Hledger-Data-Transaction.html#showAccountName",
        "fct-type": "function",
        "title": "showAccountName"
      },
      "index": {
        "description": "Show an account name clipped to the given width if any and appropriately bracketed parenthesised for the given posting type",
        "hierarchy": "Hledger Data Transaction",
        "module": "Hledger.Data.Transaction",
        "name": "showAccountName",
        "normalized": "Maybe Int-\u003ePostingType-\u003eAccountName-\u003eString",
        "package": "hledger-lib",
        "partial": "Account Name",
        "signature": "Maybe Int-\u003ePostingType-\u003eAccountName-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Transaction.html#v:showTransaction",
      "description": {
        "fct-descr": "\u003cp\u003eShow a journal transaction, formatted for the print command. ledger 2.x's\nstandard format looks like this:\n\u003c/p\u003e\u003cpre\u003e\nyyyy\u003cem\u003emm\u003c/em\u003edd[ *][ CODE] description.........          [  ; comment...............]\n    account name 1.....................  ...$amount1[  ; comment...............]\n    account name 2.....................  ..$-amount1[  ; comment...............]\n\npcodewidth    = no limit -- 10          -- mimicking ledger layout.\npdescwidth    = no limit -- 20          -- I don't remember what these mean,\npacctwidth    = 35 minimum, no maximum  -- they were important at the time.\npamtwidth     = 11\npcommentwidth = no limit -- 22\n\u003c/pre\u003e",
        "fct-module": "Hledger.Data.Transaction",
        "fct-package": "hledger-lib",
        "fct-signature": "Transaction -\u003e String",
        "fct-source": "src/Hledger-Data-Transaction.html#showTransaction",
        "fct-type": "function",
        "title": "showTransaction"
      },
      "index": {
        "description": "Show journal transaction formatted for the print command ledger standard format looks like this yyyy mm dd CODE description comment account name amount1 comment account name amount1 comment pcodewidth no limit mimicking ledger layout pdescwidth no limit don remember what these mean pacctwidth minimum no maximum they were important at the time pamtwidth pcommentwidth no limit",
        "hierarchy": "Hledger Data Transaction",
        "module": "Hledger.Data.Transaction",
        "name": "showTransaction",
        "normalized": "Transaction-\u003eString",
        "package": "hledger-lib",
        "partial": "Transaction",
        "signature": "Transaction-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Transaction.html#v:showTransactionUnelided",
      "description": {
        "fct-module": "Hledger.Data.Transaction",
        "fct-package": "hledger-lib",
        "fct-signature": "Transaction -\u003e String",
        "fct-source": "src/Hledger-Data-Transaction.html#showTransactionUnelided",
        "fct-type": "function",
        "title": "showTransactionUnelided"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Data Transaction",
        "module": "Hledger.Data.Transaction",
        "name": "showTransactionUnelided",
        "normalized": "Transaction-\u003eString",
        "package": "hledger-lib",
        "partial": "Transaction Unelided",
        "signature": "Transaction-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Transaction.html#v:tests_Hledger_Data_Transaction",
      "description": {
        "fct-module": "Hledger.Data.Transaction",
        "fct-package": "hledger-lib",
        "fct-signature": "Test",
        "fct-source": "src/Hledger-Data-Transaction.html#tests_Hledger_Data_Transaction",
        "fct-type": "function",
        "title": "tests_Hledger_Data_Transaction"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Data Transaction",
        "module": "Hledger.Data.Transaction",
        "name": "tests_Hledger_Data_Transaction",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "Hledger Data Transaction",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Transaction.html#v:transactionDate2",
      "description": {
        "fct-module": "Hledger.Data.Transaction",
        "fct-package": "hledger-lib",
        "fct-signature": "Transaction -\u003e Day",
        "fct-source": "src/Hledger-Data-Transaction.html#transactionDate2",
        "fct-type": "function",
        "title": "transactionDate2"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Data Transaction",
        "module": "Hledger.Data.Transaction",
        "name": "transactionDate2",
        "normalized": "Transaction-\u003eDay",
        "package": "hledger-lib",
        "partial": "Date",
        "signature": "Transaction-\u003eDay"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Transaction.html#v:transactionPostingBalances",
      "description": {
        "fct-descr": "\u003cp\u003eGet the sums of a transaction's real, virtual, and balanced virtual postings.\n\u003c/p\u003e",
        "fct-module": "Hledger.Data.Transaction",
        "fct-package": "hledger-lib",
        "fct-signature": "Transaction -\u003e (MixedAmount, MixedAmount, MixedAmount)",
        "fct-source": "src/Hledger-Data-Transaction.html#transactionPostingBalances",
        "fct-type": "function",
        "title": "transactionPostingBalances"
      },
      "index": {
        "description": "Get the sums of transaction real virtual and balanced virtual postings",
        "hierarchy": "Hledger Data Transaction",
        "module": "Hledger.Data.Transaction",
        "name": "transactionPostingBalances",
        "normalized": "Transaction-\u003e(MixedAmount,MixedAmount,MixedAmount)",
        "package": "hledger-lib",
        "partial": "Posting Balances",
        "signature": "Transaction-\u003e(MixedAmount,MixedAmount,MixedAmount)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Transaction.html#v:transactionsPostings",
      "description": {
        "fct-module": "Hledger.Data.Transaction",
        "fct-package": "hledger-lib",
        "fct-signature": "[Transaction] -\u003e [Posting]",
        "fct-source": "src/Hledger-Data-Transaction.html#transactionsPostings",
        "fct-type": "function",
        "title": "transactionsPostings"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Data Transaction",
        "module": "Hledger.Data.Transaction",
        "name": "transactionsPostings",
        "normalized": "[Transaction]-\u003e[Posting]",
        "package": "hledger-lib",
        "partial": "Postings",
        "signature": "[Transaction]-\u003e[Posting]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Transaction.html#v:txnTieKnot",
      "description": {
        "fct-descr": "\u003cp\u003eEnsure a transaction's postings refer back to it.\n\u003c/p\u003e",
        "fct-module": "Hledger.Data.Transaction",
        "fct-package": "hledger-lib",
        "fct-signature": "Transaction -\u003e Transaction",
        "fct-source": "src/Hledger-Data-Transaction.html#txnTieKnot",
        "fct-type": "function",
        "title": "txnTieKnot"
      },
      "index": {
        "description": "Ensure transaction postings refer back to it",
        "hierarchy": "Hledger Data Transaction",
        "module": "Hledger.Data.Transaction",
        "name": "txnTieKnot",
        "normalized": "Transaction-\u003eTransaction",
        "package": "hledger-lib",
        "partial": "Tie Knot",
        "signature": "Transaction-\u003eTransaction"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Transaction.html#v:virtualPostings",
      "description": {
        "fct-module": "Hledger.Data.Transaction",
        "fct-package": "hledger-lib",
        "fct-signature": "Transaction -\u003e [Posting]",
        "fct-source": "src/Hledger-Data-Transaction.html#virtualPostings",
        "fct-type": "function",
        "title": "virtualPostings"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Data Transaction",
        "module": "Hledger.Data.Transaction",
        "name": "virtualPostings",
        "normalized": "Transaction-\u003e[Posting]",
        "package": "hledger-lib",
        "partial": "Postings",
        "signature": "Transaction-\u003e[Posting]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eMost data types are defined here to avoid import cycles.\nHere is an overview of the hledger data model:\n\u003c/p\u003e\u003cpre\u003e Journal                  -- a journal is read from one or more data files. It contains..\n  [Transaction]           -- journal transactions (aka entries), which have date, status, code, description and..\n   [Posting]              -- multiple account postings, which have account name and amount\n  [HistoricalPrice]       -- historical commodity prices\n\n Ledger                   -- a ledger is derived from a journal, by applying a filter specification and doing some further processing. It contains..\n  Journal                 -- a filtered copy of the original journal, containing only the transactions and postings we are interested in\n  [Account]               -- all accounts, in tree order beginning with a \"root\" account\", with their balances and sub/parent accounts\n\u003c/pre\u003e\u003cp\u003eFor more detailed documentation on each type, see the corresponding modules.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Hledger.Data.Types",
        "fct-package": "hledger-lib",
        "fct-signature": "module",
        "fct-source": "src/Hledger-Data-Types.html",
        "fct-type": "module",
        "title": "Types"
      },
      "index": {
        "description": "Most data types are defined here to avoid import cycles Here is an overview of the hledger data model Journal journal is read from one or more data files It contains Transaction journal transactions aka entries which have date status code description and Posting multiple account postings which have account name and amount HistoricalPrice historical commodity prices Ledger ledger is derived from journal by applying filter specification and doing some further processing It contains Journal filtered copy of the original journal containing only the transactions and postings we are interested in Account all accounts in tree order beginning with root account with their balances and sub parent accounts For more detailed documentation on each type see the corresponding modules",
        "hierarchy": "Hledger Data Types",
        "module": "Hledger.Data.Types",
        "name": "Types",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "Types",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#t:Account",
      "description": {
        "fct-descr": "\u003cp\u003eAn account, with name, balances and links to parent/subaccounts\n which let you walk up or down the account tree.\n\u003c/p\u003e",
        "fct-module": "Hledger.Data.Types",
        "fct-package": "hledger-lib",
        "fct-signature": "data",
        "fct-source": "src/Hledger-Data-Types.html#Account",
        "fct-type": "data",
        "title": "Account"
      },
      "index": {
        "description": "An account with name balances and links to parent subaccounts which let you walk up or down the account tree",
        "hierarchy": "Hledger Data Types",
        "module": "Hledger.Data.Types",
        "name": "Account",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "Account",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#t:AccountName",
      "description": {
        "fct-module": "Hledger.Data.Types",
        "fct-package": "hledger-lib",
        "fct-signature": "type",
        "fct-source": "src/Hledger-Data-Types.html#AccountName",
        "fct-type": "type",
        "title": "AccountName"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Data Types",
        "module": "Hledger.Data.Types",
        "name": "AccountName",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "Account Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#t:Amount",
      "description": {
        "fct-module": "Hledger.Data.Types",
        "fct-package": "hledger-lib",
        "fct-signature": "data",
        "fct-source": "src/Hledger-Data-Types.html#Amount",
        "fct-type": "data",
        "title": "Amount"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Data Types",
        "module": "Hledger.Data.Types",
        "name": "Amount",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "Amount",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#t:AmountStyle",
      "description": {
        "fct-descr": "\u003cp\u003eDisplay style for an amount.\n\u003c/p\u003e",
        "fct-module": "Hledger.Data.Types",
        "fct-package": "hledger-lib",
        "fct-signature": "data",
        "fct-source": "src/Hledger-Data-Types.html#AmountStyle",
        "fct-type": "data",
        "title": "AmountStyle"
      },
      "index": {
        "description": "Display style for an amount",
        "hierarchy": "Hledger Data Types",
        "module": "Hledger.Data.Types",
        "name": "AmountStyle",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "Amount Style",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#t:Commodity",
      "description": {
        "fct-module": "Hledger.Data.Types",
        "fct-package": "hledger-lib",
        "fct-signature": "type",
        "fct-source": "src/Hledger-Data-Types.html#Commodity",
        "fct-type": "type",
        "title": "Commodity"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Data Types",
        "module": "Hledger.Data.Types",
        "name": "Commodity",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "Commodity",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#t:DateSpan",
      "description": {
        "fct-module": "Hledger.Data.Types",
        "fct-package": "hledger-lib",
        "fct-signature": "data",
        "fct-source": "src/Hledger-Data-Types.html#DateSpan",
        "fct-type": "data",
        "title": "DateSpan"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Data Types",
        "module": "Hledger.Data.Types",
        "name": "DateSpan",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "Date Span",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#t:Format",
      "description": {
        "fct-descr": "\u003cp\u003eThe id of a data format understood by hledger, eg \u003ccode\u003ejournal\u003c/code\u003e or \u003ccode\u003ecsv\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Hledger.Data.Types",
        "fct-package": "hledger-lib",
        "fct-signature": "type",
        "fct-source": "src/Hledger-Data-Types.html#Format",
        "fct-type": "type",
        "title": "Format"
      },
      "index": {
        "description": "The id of data format understood by hledger eg journal or csv",
        "hierarchy": "Hledger Data Types",
        "module": "Hledger.Data.Types",
        "name": "Format",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "Format",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#t:FormatString",
      "description": {
        "fct-module": "Hledger.Data.Types",
        "fct-package": "hledger-lib",
        "fct-signature": "data",
        "fct-source": "src/Hledger-Data-Types.html#FormatString",
        "fct-type": "data",
        "title": "FormatString"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Data Types",
        "module": "Hledger.Data.Types",
        "name": "FormatString",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "Format String",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#t:HistoricalPrice",
      "description": {
        "fct-module": "Hledger.Data.Types",
        "fct-package": "hledger-lib",
        "fct-signature": "data",
        "fct-source": "src/Hledger-Data-Types.html#HistoricalPrice",
        "fct-type": "data",
        "title": "HistoricalPrice"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Data Types",
        "module": "Hledger.Data.Types",
        "name": "HistoricalPrice",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "Historical Price",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#t:HledgerFormatField",
      "description": {
        "fct-module": "Hledger.Data.Types",
        "fct-package": "hledger-lib",
        "fct-signature": "data",
        "fct-source": "src/Hledger-Data-Types.html#HledgerFormatField",
        "fct-type": "data",
        "title": "HledgerFormatField"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Data Types",
        "module": "Hledger.Data.Types",
        "name": "HledgerFormatField",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "Hledger Format Field",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#t:Interval",
      "description": {
        "fct-module": "Hledger.Data.Types",
        "fct-package": "hledger-lib",
        "fct-signature": "data",
        "fct-source": "src/Hledger-Data-Types.html#Interval",
        "fct-type": "data",
        "title": "Interval"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Data Types",
        "module": "Hledger.Data.Types",
        "name": "Interval",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "Interval",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#t:Journal",
      "description": {
        "fct-module": "Hledger.Data.Types",
        "fct-package": "hledger-lib",
        "fct-signature": "data",
        "fct-source": "src/Hledger-Data-Types.html#Journal",
        "fct-type": "data",
        "title": "Journal"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Data Types",
        "module": "Hledger.Data.Types",
        "name": "Journal",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "Journal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#t:JournalContext",
      "description": {
        "fct-descr": "\u003cp\u003eA journal \u003ca\u003econtext\u003c/a\u003e is some data which can change in the course of\n parsing a journal. An example is the default year, which changes when a\n Y directive is encountered.  At the end of parsing, the final context\n is saved for later use by eg the add command.\n\u003c/p\u003e",
        "fct-module": "Hledger.Data.Types",
        "fct-package": "hledger-lib",
        "fct-signature": "data",
        "fct-source": "src/Hledger-Data-Types.html#JournalContext",
        "fct-type": "data",
        "title": "JournalContext"
      },
      "index": {
        "description": "journal context is some data which can change in the course of parsing journal An example is the default year which changes when directive is encountered At the end of parsing the final context is saved for later use by eg the add command",
        "hierarchy": "Hledger Data Types",
        "module": "Hledger.Data.Types",
        "name": "JournalContext",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "Journal Context",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#t:JournalUpdate",
      "description": {
        "fct-descr": "\u003cp\u003eA JournalUpdate is some transformation of a Journal. It can do I/O or\n raise an error.\n\u003c/p\u003e",
        "fct-module": "Hledger.Data.Types",
        "fct-package": "hledger-lib",
        "fct-signature": "type",
        "fct-source": "src/Hledger-Data-Types.html#JournalUpdate",
        "fct-type": "type",
        "title": "JournalUpdate"
      },
      "index": {
        "description": "JournalUpdate is some transformation of Journal It can do or raise an error",
        "hierarchy": "Hledger Data Types",
        "module": "Hledger.Data.Types",
        "name": "JournalUpdate",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "Journal Update",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#t:Ledger",
      "description": {
        "fct-descr": "\u003cp\u003eA Ledger has the journal it derives from, and the accounts\n derived from that. Accounts are accessible both list-wise and\n tree-wise, since each one knows its parent and subs; the first\n account is the root of the tree and always exists.\n\u003c/p\u003e",
        "fct-module": "Hledger.Data.Types",
        "fct-package": "hledger-lib",
        "fct-signature": "data",
        "fct-source": "src/Hledger-Data-Types.html#Ledger",
        "fct-type": "data",
        "title": "Ledger"
      },
      "index": {
        "description": "Ledger has the journal it derives from and the accounts derived from that Accounts are accessible both list-wise and tree-wise since each one knows its parent and subs the first account is the root of the tree and always exists",
        "hierarchy": "Hledger Data Types",
        "module": "Hledger.Data.Types",
        "name": "Ledger",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "Ledger",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#t:MixedAmount",
      "description": {
        "fct-module": "Hledger.Data.Types",
        "fct-package": "hledger-lib",
        "fct-signature": "newtype",
        "fct-source": "src/Hledger-Data-Types.html#MixedAmount",
        "fct-type": "newtype",
        "title": "MixedAmount"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Data Types",
        "module": "Hledger.Data.Types",
        "name": "MixedAmount",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "Mixed Amount",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#t:ModifierTransaction",
      "description": {
        "fct-module": "Hledger.Data.Types",
        "fct-package": "hledger-lib",
        "fct-signature": "data",
        "fct-source": "src/Hledger-Data-Types.html#ModifierTransaction",
        "fct-type": "data",
        "title": "ModifierTransaction"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Data Types",
        "module": "Hledger.Data.Types",
        "name": "ModifierTransaction",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "Modifier Transaction",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#t:PeriodicTransaction",
      "description": {
        "fct-module": "Hledger.Data.Types",
        "fct-package": "hledger-lib",
        "fct-signature": "data",
        "fct-source": "src/Hledger-Data-Types.html#PeriodicTransaction",
        "fct-type": "data",
        "title": "PeriodicTransaction"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Data Types",
        "module": "Hledger.Data.Types",
        "name": "PeriodicTransaction",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "Periodic Transaction",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#t:Posting",
      "description": {
        "fct-module": "Hledger.Data.Types",
        "fct-package": "hledger-lib",
        "fct-signature": "data",
        "fct-source": "src/Hledger-Data-Types.html#Posting",
        "fct-type": "data",
        "title": "Posting"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Data Types",
        "module": "Hledger.Data.Types",
        "name": "Posting",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "Posting",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#t:PostingType",
      "description": {
        "fct-module": "Hledger.Data.Types",
        "fct-package": "hledger-lib",
        "fct-signature": "data",
        "fct-source": "src/Hledger-Data-Types.html#PostingType",
        "fct-type": "data",
        "title": "PostingType"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Data Types",
        "module": "Hledger.Data.Types",
        "name": "PostingType",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "Posting Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#t:Price",
      "description": {
        "fct-descr": "\u003cp\u003eAn amount's price (none, per unit, or total) in another commodity.\n Note the price should be a positive number, although this is not enforced.\n\u003c/p\u003e",
        "fct-module": "Hledger.Data.Types",
        "fct-package": "hledger-lib",
        "fct-signature": "data",
        "fct-source": "src/Hledger-Data-Types.html#Price",
        "fct-type": "data",
        "title": "Price"
      },
      "index": {
        "description": "An amount price none per unit or total in another commodity Note the price should be positive number although this is not enforced",
        "hierarchy": "Hledger Data Types",
        "module": "Hledger.Data.Types",
        "name": "Price",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "Price",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#t:Quantity",
      "description": {
        "fct-module": "Hledger.Data.Types",
        "fct-package": "hledger-lib",
        "fct-signature": "type",
        "fct-source": "src/Hledger-Data-Types.html#Quantity",
        "fct-type": "type",
        "title": "Quantity"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Data Types",
        "module": "Hledger.Data.Types",
        "name": "Quantity",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "Quantity",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#t:Reader",
      "description": {
        "fct-descr": "\u003cp\u003eA hledger journal reader is a triple of format name, format-detecting\n predicate, and a parser to Journal.\n\u003c/p\u003e",
        "fct-module": "Hledger.Data.Types",
        "fct-package": "hledger-lib",
        "fct-signature": "data",
        "fct-source": "src/Hledger-Data-Types.html#Reader",
        "fct-type": "data",
        "title": "Reader"
      },
      "index": {
        "description": "hledger journal reader is triple of format name format-detecting predicate and parser to Journal",
        "hierarchy": "Hledger Data Types",
        "module": "Hledger.Data.Types",
        "name": "Reader",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "Reader",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#t:Side",
      "description": {
        "fct-module": "Hledger.Data.Types",
        "fct-package": "hledger-lib",
        "fct-signature": "data",
        "fct-source": "src/Hledger-Data-Types.html#Side",
        "fct-type": "data",
        "title": "Side"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Data Types",
        "module": "Hledger.Data.Types",
        "name": "Side",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "Side",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#t:SmartDate",
      "description": {
        "fct-module": "Hledger.Data.Types",
        "fct-package": "hledger-lib",
        "fct-signature": "type",
        "fct-source": "src/Hledger-Data-Types.html#SmartDate",
        "fct-type": "type",
        "title": "SmartDate"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Data Types",
        "module": "Hledger.Data.Types",
        "name": "SmartDate",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "Smart Date",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#t:Tag",
      "description": {
        "fct-module": "Hledger.Data.Types",
        "fct-package": "hledger-lib",
        "fct-signature": "type",
        "fct-source": "src/Hledger-Data-Types.html#Tag",
        "fct-type": "type",
        "title": "Tag"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Data Types",
        "module": "Hledger.Data.Types",
        "name": "Tag",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "Tag",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#t:TimeLogCode",
      "description": {
        "fct-module": "Hledger.Data.Types",
        "fct-package": "hledger-lib",
        "fct-signature": "data",
        "fct-source": "src/Hledger-Data-Types.html#TimeLogCode",
        "fct-type": "data",
        "title": "TimeLogCode"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Data Types",
        "module": "Hledger.Data.Types",
        "name": "TimeLogCode",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "Time Log Code",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#t:TimeLogEntry",
      "description": {
        "fct-module": "Hledger.Data.Types",
        "fct-package": "hledger-lib",
        "fct-signature": "data",
        "fct-source": "src/Hledger-Data-Types.html#TimeLogEntry",
        "fct-type": "data",
        "title": "TimeLogEntry"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Data Types",
        "module": "Hledger.Data.Types",
        "name": "TimeLogEntry",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "Time Log Entry",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#t:Transaction",
      "description": {
        "fct-module": "Hledger.Data.Types",
        "fct-package": "hledger-lib",
        "fct-signature": "data",
        "fct-source": "src/Hledger-Data-Types.html#Transaction",
        "fct-type": "data",
        "title": "Transaction"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Data Types",
        "module": "Hledger.Data.Types",
        "name": "Transaction",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "Transaction",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#t:WhichDate",
      "description": {
        "fct-module": "Hledger.Data.Types",
        "fct-package": "hledger-lib",
        "fct-signature": "data",
        "fct-source": "src/Hledger-Data-Types.html#WhichDate",
        "fct-type": "data",
        "title": "WhichDate"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Data Types",
        "module": "Hledger.Data.Types",
        "name": "WhichDate",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "Which Date",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#t:Year",
      "description": {
        "fct-module": "Hledger.Data.Types",
        "fct-package": "hledger-lib",
        "fct-signature": "type",
        "fct-source": "src/Hledger-Data-Types.html#Year",
        "fct-type": "type",
        "title": "Year"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Data Types",
        "module": "Hledger.Data.Types",
        "name": "Year",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "Year",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#v:Account",
      "description": {
        "fct-module": "Hledger.Data.Types",
        "fct-package": "hledger-lib",
        "fct-signature": "Account",
        "fct-source": "src/Hledger-Data-Types.html#Account",
        "fct-type": "function",
        "title": "Account"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Data Types",
        "module": "Hledger.Data.Types",
        "name": "Account",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "Account",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#v:AccountField",
      "description": {
        "fct-module": "Hledger.Data.Types",
        "fct-package": "hledger-lib",
        "fct-signature": "AccountField",
        "fct-source": "src/Hledger-Data-Types.html#HledgerFormatField",
        "fct-type": "function",
        "title": "AccountField"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Data Types",
        "module": "Hledger.Data.Types",
        "name": "AccountField",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "Account Field",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#v:Amount",
      "description": {
        "fct-module": "Hledger.Data.Types",
        "fct-package": "hledger-lib",
        "fct-signature": "Amount",
        "fct-source": "src/Hledger-Data-Types.html#Amount",
        "fct-type": "function",
        "title": "Amount"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Data Types",
        "module": "Hledger.Data.Types",
        "name": "Amount",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "Amount",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#v:AmountStyle",
      "description": {
        "fct-module": "Hledger.Data.Types",
        "fct-package": "hledger-lib",
        "fct-signature": "AmountStyle",
        "fct-source": "src/Hledger-Data-Types.html#AmountStyle",
        "fct-type": "function",
        "title": "AmountStyle"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Data Types",
        "module": "Hledger.Data.Types",
        "name": "AmountStyle",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "Amount Style",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#v:BalancedVirtualPosting",
      "description": {
        "fct-module": "Hledger.Data.Types",
        "fct-package": "hledger-lib",
        "fct-signature": "BalancedVirtualPosting",
        "fct-source": "src/Hledger-Data-Types.html#PostingType",
        "fct-type": "function",
        "title": "BalancedVirtualPosting"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Data Types",
        "module": "Hledger.Data.Types",
        "name": "BalancedVirtualPosting",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "Balanced Virtual Posting",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#v:Ctx",
      "description": {
        "fct-module": "Hledger.Data.Types",
        "fct-package": "hledger-lib",
        "fct-signature": "Ctx",
        "fct-source": "src/Hledger-Data-Types.html#JournalContext",
        "fct-type": "function",
        "title": "Ctx"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Data Types",
        "module": "Hledger.Data.Types",
        "name": "Ctx",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "Ctx",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#v:DateSpan",
      "description": {
        "fct-module": "Hledger.Data.Types",
        "fct-package": "hledger-lib",
        "fct-signature": "DateSpan (Maybe Day) (Maybe Day)",
        "fct-source": "src/Hledger-Data-Types.html#DateSpan",
        "fct-type": "function",
        "title": "DateSpan"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Data Types",
        "module": "Hledger.Data.Types",
        "name": "DateSpan",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "Date Span",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#v:DayOfMonth",
      "description": {
        "fct-module": "Hledger.Data.Types",
        "fct-package": "hledger-lib",
        "fct-signature": "DayOfMonth Int",
        "fct-source": "src/Hledger-Data-Types.html#Interval",
        "fct-type": "function",
        "title": "DayOfMonth"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Data Types",
        "module": "Hledger.Data.Types",
        "name": "DayOfMonth",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "Day Of Month",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#v:DayOfWeek",
      "description": {
        "fct-module": "Hledger.Data.Types",
        "fct-package": "hledger-lib",
        "fct-signature": "DayOfWeek Int",
        "fct-source": "src/Hledger-Data-Types.html#Interval",
        "fct-type": "function",
        "title": "DayOfWeek"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Data Types",
        "module": "Hledger.Data.Types",
        "name": "DayOfWeek",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "Day Of Week",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#v:Days",
      "description": {
        "fct-module": "Hledger.Data.Types",
        "fct-package": "hledger-lib",
        "fct-signature": "Days Int",
        "fct-source": "src/Hledger-Data-Types.html#Interval",
        "fct-type": "function",
        "title": "Days"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Data Types",
        "module": "Hledger.Data.Types",
        "name": "Days",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "Days",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#v:DefaultDateField",
      "description": {
        "fct-module": "Hledger.Data.Types",
        "fct-package": "hledger-lib",
        "fct-signature": "DefaultDateField",
        "fct-source": "src/Hledger-Data-Types.html#HledgerFormatField",
        "fct-type": "function",
        "title": "DefaultDateField"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Data Types",
        "module": "Hledger.Data.Types",
        "name": "DefaultDateField",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "Default Date Field",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#v:DepthSpacerField",
      "description": {
        "fct-module": "Hledger.Data.Types",
        "fct-package": "hledger-lib",
        "fct-signature": "DepthSpacerField",
        "fct-source": "src/Hledger-Data-Types.html#HledgerFormatField",
        "fct-type": "function",
        "title": "DepthSpacerField"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Data Types",
        "module": "Hledger.Data.Types",
        "name": "DepthSpacerField",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "Depth Spacer Field",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#v:DescriptionField",
      "description": {
        "fct-module": "Hledger.Data.Types",
        "fct-package": "hledger-lib",
        "fct-signature": "DescriptionField",
        "fct-source": "src/Hledger-Data-Types.html#HledgerFormatField",
        "fct-type": "function",
        "title": "DescriptionField"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Data Types",
        "module": "Hledger.Data.Types",
        "name": "DescriptionField",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "Description Field",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#v:FieldNo",
      "description": {
        "fct-module": "Hledger.Data.Types",
        "fct-package": "hledger-lib",
        "fct-signature": "FieldNo Int",
        "fct-source": "src/Hledger-Data-Types.html#HledgerFormatField",
        "fct-type": "function",
        "title": "FieldNo"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Data Types",
        "module": "Hledger.Data.Types",
        "name": "FieldNo",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "Field No",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#v:FinalOut",
      "description": {
        "fct-module": "Hledger.Data.Types",
        "fct-package": "hledger-lib",
        "fct-signature": "FinalOut",
        "fct-source": "src/Hledger-Data-Types.html#TimeLogCode",
        "fct-type": "function",
        "title": "FinalOut"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Data Types",
        "module": "Hledger.Data.Types",
        "name": "FinalOut",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "Final Out",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#v:FormatField",
      "description": {
        "fct-module": "Hledger.Data.Types",
        "fct-package": "hledger-lib",
        "fct-signature": "FormatField Bool (Maybe Int) (Maybe Int) HledgerFormatField",
        "fct-source": "src/Hledger-Data-Types.html#FormatString",
        "fct-type": "function",
        "title": "FormatField"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Data Types",
        "module": "Hledger.Data.Types",
        "name": "FormatField",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "Format Field",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#v:FormatLiteral",
      "description": {
        "fct-module": "Hledger.Data.Types",
        "fct-package": "hledger-lib",
        "fct-signature": "FormatLiteral String",
        "fct-source": "src/Hledger-Data-Types.html#FormatString",
        "fct-type": "function",
        "title": "FormatLiteral"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Data Types",
        "module": "Hledger.Data.Types",
        "name": "FormatLiteral",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "Format Literal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#v:HistoricalPrice",
      "description": {
        "fct-module": "Hledger.Data.Types",
        "fct-package": "hledger-lib",
        "fct-signature": "HistoricalPrice",
        "fct-source": "src/Hledger-Data-Types.html#HistoricalPrice",
        "fct-type": "function",
        "title": "HistoricalPrice"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Data Types",
        "module": "Hledger.Data.Types",
        "name": "HistoricalPrice",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "Historical Price",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#v:In",
      "description": {
        "fct-module": "Hledger.Data.Types",
        "fct-package": "hledger-lib",
        "fct-signature": "In",
        "fct-source": "src/Hledger-Data-Types.html#TimeLogCode",
        "fct-type": "function",
        "title": "In"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Data Types",
        "module": "Hledger.Data.Types",
        "name": "In",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "In",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#v:Journal",
      "description": {
        "fct-module": "Hledger.Data.Types",
        "fct-package": "hledger-lib",
        "fct-signature": "Journal",
        "fct-source": "src/Hledger-Data-Types.html#Journal",
        "fct-type": "function",
        "title": "Journal"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Data Types",
        "module": "Hledger.Data.Types",
        "name": "Journal",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "Journal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#v:L",
      "description": {
        "fct-module": "Hledger.Data.Types",
        "fct-package": "hledger-lib",
        "fct-signature": "L",
        "fct-source": "src/Hledger-Data-Types.html#Side",
        "fct-type": "function",
        "title": "L"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Data Types",
        "module": "Hledger.Data.Types",
        "name": "L",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#v:Ledger",
      "description": {
        "fct-module": "Hledger.Data.Types",
        "fct-package": "hledger-lib",
        "fct-signature": "Ledger",
        "fct-source": "src/Hledger-Data-Types.html#Ledger",
        "fct-type": "function",
        "title": "Ledger"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Data Types",
        "module": "Hledger.Data.Types",
        "name": "Ledger",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "Ledger",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#v:Mixed",
      "description": {
        "fct-module": "Hledger.Data.Types",
        "fct-package": "hledger-lib",
        "fct-signature": "Mixed [Amount]",
        "fct-source": "src/Hledger-Data-Types.html#MixedAmount",
        "fct-type": "function",
        "title": "Mixed"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Data Types",
        "module": "Hledger.Data.Types",
        "name": "Mixed",
        "normalized": "Mixed[Amount]",
        "package": "hledger-lib",
        "partial": "Mixed",
        "signature": "Mixed[Amount]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#v:ModifierTransaction",
      "description": {
        "fct-module": "Hledger.Data.Types",
        "fct-package": "hledger-lib",
        "fct-signature": "ModifierTransaction",
        "fct-source": "src/Hledger-Data-Types.html#ModifierTransaction",
        "fct-type": "function",
        "title": "ModifierTransaction"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Data Types",
        "module": "Hledger.Data.Types",
        "name": "ModifierTransaction",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "Modifier Transaction",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#v:Months",
      "description": {
        "fct-module": "Hledger.Data.Types",
        "fct-package": "hledger-lib",
        "fct-signature": "Months Int",
        "fct-source": "src/Hledger-Data-Types.html#Interval",
        "fct-type": "function",
        "title": "Months"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Data Types",
        "module": "Hledger.Data.Types",
        "name": "Months",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "Months",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#v:NoInterval",
      "description": {
        "fct-module": "Hledger.Data.Types",
        "fct-package": "hledger-lib",
        "fct-signature": "NoInterval",
        "fct-source": "src/Hledger-Data-Types.html#Interval",
        "fct-type": "function",
        "title": "NoInterval"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Data Types",
        "module": "Hledger.Data.Types",
        "name": "NoInterval",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "No Interval",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#v:NoPrice",
      "description": {
        "fct-module": "Hledger.Data.Types",
        "fct-package": "hledger-lib",
        "fct-signature": "NoPrice",
        "fct-source": "src/Hledger-Data-Types.html#Price",
        "fct-type": "function",
        "title": "NoPrice"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Data Types",
        "module": "Hledger.Data.Types",
        "name": "NoPrice",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "No Price",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#v:Out",
      "description": {
        "fct-module": "Hledger.Data.Types",
        "fct-package": "hledger-lib",
        "fct-signature": "Out",
        "fct-source": "src/Hledger-Data-Types.html#TimeLogCode",
        "fct-type": "function",
        "title": "Out"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Data Types",
        "module": "Hledger.Data.Types",
        "name": "Out",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "Out",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#v:PeriodicTransaction",
      "description": {
        "fct-module": "Hledger.Data.Types",
        "fct-package": "hledger-lib",
        "fct-signature": "PeriodicTransaction",
        "fct-source": "src/Hledger-Data-Types.html#PeriodicTransaction",
        "fct-type": "function",
        "title": "PeriodicTransaction"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Data Types",
        "module": "Hledger.Data.Types",
        "name": "PeriodicTransaction",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "Periodic Transaction",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#v:Posting",
      "description": {
        "fct-module": "Hledger.Data.Types",
        "fct-package": "hledger-lib",
        "fct-signature": "Posting",
        "fct-source": "src/Hledger-Data-Types.html#Posting",
        "fct-type": "function",
        "title": "Posting"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Data Types",
        "module": "Hledger.Data.Types",
        "name": "Posting",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "Posting",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#v:PrimaryDate",
      "description": {
        "fct-module": "Hledger.Data.Types",
        "fct-package": "hledger-lib",
        "fct-signature": "PrimaryDate",
        "fct-source": "src/Hledger-Data-Types.html#WhichDate",
        "fct-type": "function",
        "title": "PrimaryDate"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Data Types",
        "module": "Hledger.Data.Types",
        "name": "PrimaryDate",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "Primary Date",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#v:Quarters",
      "description": {
        "fct-module": "Hledger.Data.Types",
        "fct-package": "hledger-lib",
        "fct-signature": "Quarters Int",
        "fct-source": "src/Hledger-Data-Types.html#Interval",
        "fct-type": "function",
        "title": "Quarters"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Data Types",
        "module": "Hledger.Data.Types",
        "name": "Quarters",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "Quarters",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#v:R",
      "description": {
        "fct-module": "Hledger.Data.Types",
        "fct-package": "hledger-lib",
        "fct-signature": "R",
        "fct-source": "src/Hledger-Data-Types.html#Side",
        "fct-type": "function",
        "title": "R"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Data Types",
        "module": "Hledger.Data.Types",
        "name": "R",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#v:Reader",
      "description": {
        "fct-module": "Hledger.Data.Types",
        "fct-package": "hledger-lib",
        "fct-signature": "Reader",
        "fct-source": "src/Hledger-Data-Types.html#Reader",
        "fct-type": "function",
        "title": "Reader"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Data Types",
        "module": "Hledger.Data.Types",
        "name": "Reader",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "Reader",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#v:RegularPosting",
      "description": {
        "fct-module": "Hledger.Data.Types",
        "fct-package": "hledger-lib",
        "fct-signature": "RegularPosting",
        "fct-source": "src/Hledger-Data-Types.html#PostingType",
        "fct-type": "function",
        "title": "RegularPosting"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Data Types",
        "module": "Hledger.Data.Types",
        "name": "RegularPosting",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "Regular Posting",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#v:SecondaryDate",
      "description": {
        "fct-module": "Hledger.Data.Types",
        "fct-package": "hledger-lib",
        "fct-signature": "SecondaryDate",
        "fct-source": "src/Hledger-Data-Types.html#WhichDate",
        "fct-type": "function",
        "title": "SecondaryDate"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Data Types",
        "module": "Hledger.Data.Types",
        "name": "SecondaryDate",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "Secondary Date",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#v:SetBalance",
      "description": {
        "fct-module": "Hledger.Data.Types",
        "fct-package": "hledger-lib",
        "fct-signature": "SetBalance",
        "fct-source": "src/Hledger-Data-Types.html#TimeLogCode",
        "fct-type": "function",
        "title": "SetBalance"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Data Types",
        "module": "Hledger.Data.Types",
        "name": "SetBalance",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "Set Balance",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#v:SetRequiredHours",
      "description": {
        "fct-module": "Hledger.Data.Types",
        "fct-package": "hledger-lib",
        "fct-signature": "SetRequiredHours",
        "fct-source": "src/Hledger-Data-Types.html#TimeLogCode",
        "fct-type": "function",
        "title": "SetRequiredHours"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Data Types",
        "module": "Hledger.Data.Types",
        "name": "SetRequiredHours",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "Set Required Hours",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#v:TimeLogEntry",
      "description": {
        "fct-module": "Hledger.Data.Types",
        "fct-package": "hledger-lib",
        "fct-signature": "TimeLogEntry",
        "fct-source": "src/Hledger-Data-Types.html#TimeLogEntry",
        "fct-type": "function",
        "title": "TimeLogEntry"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Data Types",
        "module": "Hledger.Data.Types",
        "name": "TimeLogEntry",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "Time Log Entry",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#v:TotalField",
      "description": {
        "fct-module": "Hledger.Data.Types",
        "fct-package": "hledger-lib",
        "fct-signature": "TotalField",
        "fct-source": "src/Hledger-Data-Types.html#HledgerFormatField",
        "fct-type": "function",
        "title": "TotalField"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Data Types",
        "module": "Hledger.Data.Types",
        "name": "TotalField",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "Total Field",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#v:TotalPrice",
      "description": {
        "fct-module": "Hledger.Data.Types",
        "fct-package": "hledger-lib",
        "fct-signature": "TotalPrice Amount",
        "fct-source": "src/Hledger-Data-Types.html#Price",
        "fct-type": "function",
        "title": "TotalPrice"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Data Types",
        "module": "Hledger.Data.Types",
        "name": "TotalPrice",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "Total Price",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#v:Transaction",
      "description": {
        "fct-module": "Hledger.Data.Types",
        "fct-package": "hledger-lib",
        "fct-signature": "Transaction",
        "fct-source": "src/Hledger-Data-Types.html#Transaction",
        "fct-type": "function",
        "title": "Transaction"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Data Types",
        "module": "Hledger.Data.Types",
        "name": "Transaction",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "Transaction",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#v:UnitPrice",
      "description": {
        "fct-module": "Hledger.Data.Types",
        "fct-package": "hledger-lib",
        "fct-signature": "UnitPrice Amount",
        "fct-source": "src/Hledger-Data-Types.html#Price",
        "fct-type": "function",
        "title": "UnitPrice"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Data Types",
        "module": "Hledger.Data.Types",
        "name": "UnitPrice",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "Unit Price",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#v:VirtualPosting",
      "description": {
        "fct-module": "Hledger.Data.Types",
        "fct-package": "hledger-lib",
        "fct-signature": "VirtualPosting",
        "fct-source": "src/Hledger-Data-Types.html#PostingType",
        "fct-type": "function",
        "title": "VirtualPosting"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Data Types",
        "module": "Hledger.Data.Types",
        "name": "VirtualPosting",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "Virtual Posting",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#v:Weeks",
      "description": {
        "fct-module": "Hledger.Data.Types",
        "fct-package": "hledger-lib",
        "fct-signature": "Weeks Int",
        "fct-source": "src/Hledger-Data-Types.html#Interval",
        "fct-type": "function",
        "title": "Weeks"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Data Types",
        "module": "Hledger.Data.Types",
        "name": "Weeks",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "Weeks",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#v:Years",
      "description": {
        "fct-module": "Hledger.Data.Types",
        "fct-package": "hledger-lib",
        "fct-signature": "Years Int",
        "fct-source": "src/Hledger-Data-Types.html#Interval",
        "fct-type": "function",
        "title": "Years"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Data Types",
        "module": "Hledger.Data.Types",
        "name": "Years",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "Years",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#v:aboring",
      "description": {
        "fct-descr": "\u003cp\u003eused in the accounts report to label elidable parents\n\u003c/p\u003e",
        "fct-module": "Hledger.Data.Types",
        "fct-package": "hledger-lib",
        "fct-signature": "Bool",
        "fct-source": "src/Hledger-Data-Types.html#Account",
        "fct-type": "function",
        "title": "aboring"
      },
      "index": {
        "description": "used in the accounts report to label elidable parents",
        "hierarchy": "Hledger Data Types",
        "module": "Hledger.Data.Types",
        "name": "aboring",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#v:acommodity",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Hledger.Data.Types",
        "fct-package": "hledger-lib",
        "fct-signature": "Commodity",
        "fct-source": "src/Hledger-Data-Types.html#Amount",
        "fct-type": "function",
        "title": "acommodity"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Data Types",
        "module": "Hledger.Data.Types",
        "name": "acommodity",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#v:aebalance",
      "description": {
        "fct-descr": "\u003cp\u003ethis account's balance, excluding subaccounts\n\u003c/p\u003e",
        "fct-module": "Hledger.Data.Types",
        "fct-package": "hledger-lib",
        "fct-signature": "MixedAmount",
        "fct-source": "src/Hledger-Data-Types.html#Account",
        "fct-type": "function",
        "title": "aebalance"
      },
      "index": {
        "description": "this account balance excluding subaccounts",
        "hierarchy": "Hledger Data Types",
        "module": "Hledger.Data.Types",
        "name": "aebalance",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#v:aibalance",
      "description": {
        "fct-descr": "\u003cp\u003ethis account's balance, including subaccounts\n\u003c/p\u003e",
        "fct-module": "Hledger.Data.Types",
        "fct-package": "hledger-lib",
        "fct-signature": "MixedAmount",
        "fct-source": "src/Hledger-Data-Types.html#Account",
        "fct-type": "function",
        "title": "aibalance"
      },
      "index": {
        "description": "this account balance including subaccounts",
        "hierarchy": "Hledger Data Types",
        "module": "Hledger.Data.Types",
        "name": "aibalance",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#v:aname",
      "description": {
        "fct-descr": "\u003cp\u003ethis account's full name\n\u003c/p\u003e",
        "fct-module": "Hledger.Data.Types",
        "fct-package": "hledger-lib",
        "fct-signature": "AccountName",
        "fct-source": "src/Hledger-Data-Types.html#Account",
        "fct-type": "function",
        "title": "aname"
      },
      "index": {
        "description": "this account full name",
        "hierarchy": "Hledger Data Types",
        "module": "Hledger.Data.Types",
        "name": "aname",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#v:aparent",
      "description": {
        "fct-descr": "\u003cp\u003eparent account\n\u003c/p\u003e",
        "fct-module": "Hledger.Data.Types",
        "fct-package": "hledger-lib",
        "fct-signature": "Maybe Account",
        "fct-source": "src/Hledger-Data-Types.html#Account",
        "fct-type": "function",
        "title": "aparent"
      },
      "index": {
        "description": "parent account",
        "hierarchy": "Hledger Data Types",
        "module": "Hledger.Data.Types",
        "name": "aparent",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#v:aprice",
      "description": {
        "fct-descr": "\u003cp\u003ethe (fixed) price for this amount, if any\n\u003c/p\u003e",
        "fct-module": "Hledger.Data.Types",
        "fct-package": "hledger-lib",
        "fct-signature": "Price",
        "fct-source": "src/Hledger-Data-Types.html#Amount",
        "fct-type": "function",
        "title": "aprice"
      },
      "index": {
        "description": "the fixed price for this amount if any",
        "hierarchy": "Hledger Data Types",
        "module": "Hledger.Data.Types",
        "name": "aprice",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#v:aquantity",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Hledger.Data.Types",
        "fct-package": "hledger-lib",
        "fct-signature": "Quantity",
        "fct-source": "src/Hledger-Data-Types.html#Amount",
        "fct-type": "function",
        "title": "aquantity"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Data Types",
        "module": "Hledger.Data.Types",
        "name": "aquantity",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#v:ascommodityside",
      "description": {
        "fct-descr": "\u003cp\u003edoes the symbol appear on the left or the right ?\n\u003c/p\u003e",
        "fct-module": "Hledger.Data.Types",
        "fct-package": "hledger-lib",
        "fct-signature": "Side",
        "fct-source": "src/Hledger-Data-Types.html#AmountStyle",
        "fct-type": "function",
        "title": "ascommodityside"
      },
      "index": {
        "description": "does the symbol appear on the left or the right",
        "hierarchy": "Hledger Data Types",
        "module": "Hledger.Data.Types",
        "name": "ascommodityside",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#v:ascommodityspaced",
      "description": {
        "fct-descr": "\u003cp\u003espace between symbol and quantity ?\n\u003c/p\u003e",
        "fct-module": "Hledger.Data.Types",
        "fct-package": "hledger-lib",
        "fct-signature": "Bool",
        "fct-source": "src/Hledger-Data-Types.html#AmountStyle",
        "fct-type": "function",
        "title": "ascommodityspaced"
      },
      "index": {
        "description": "space between symbol and quantity",
        "hierarchy": "Hledger Data Types",
        "module": "Hledger.Data.Types",
        "name": "ascommodityspaced",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#v:asdecimalpoint",
      "description": {
        "fct-descr": "\u003cp\u003echaracter used as decimal point\n\u003c/p\u003e",
        "fct-module": "Hledger.Data.Types",
        "fct-package": "hledger-lib",
        "fct-signature": "Char",
        "fct-source": "src/Hledger-Data-Types.html#AmountStyle",
        "fct-type": "function",
        "title": "asdecimalpoint"
      },
      "index": {
        "description": "character used as decimal point",
        "hierarchy": "Hledger Data Types",
        "module": "Hledger.Data.Types",
        "name": "asdecimalpoint",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#v:asprecision",
      "description": {
        "fct-descr": "\u003cp\u003enumber of digits displayed after the decimal point\n\u003c/p\u003e",
        "fct-module": "Hledger.Data.Types",
        "fct-package": "hledger-lib",
        "fct-signature": "Int",
        "fct-source": "src/Hledger-Data-Types.html#AmountStyle",
        "fct-type": "function",
        "title": "asprecision"
      },
      "index": {
        "description": "number of digits displayed after the decimal point",
        "hierarchy": "Hledger Data Types",
        "module": "Hledger.Data.Types",
        "name": "asprecision",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#v:asseparator",
      "description": {
        "fct-descr": "\u003cp\u003echaracter used for separating digit groups (eg thousands)\n\u003c/p\u003e",
        "fct-module": "Hledger.Data.Types",
        "fct-package": "hledger-lib",
        "fct-signature": "Char",
        "fct-source": "src/Hledger-Data-Types.html#AmountStyle",
        "fct-type": "function",
        "title": "asseparator"
      },
      "index": {
        "description": "character used for separating digit groups eg thousands",
        "hierarchy": "Hledger Data Types",
        "module": "Hledger.Data.Types",
        "name": "asseparator",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#v:asseparatorpositions",
      "description": {
        "fct-descr": "\u003cp\u003epositions of digit group separators, counting leftward from decimal point\n\u003c/p\u003e",
        "fct-module": "Hledger.Data.Types",
        "fct-package": "hledger-lib",
        "fct-signature": "[Int]",
        "fct-source": "src/Hledger-Data-Types.html#AmountStyle",
        "fct-type": "function",
        "title": "asseparatorpositions"
      },
      "index": {
        "description": "positions of digit group separators counting leftward from decimal point",
        "hierarchy": "Hledger Data Types",
        "module": "Hledger.Data.Types",
        "name": "asseparatorpositions",
        "normalized": "[Int]",
        "package": "hledger-lib",
        "partial": "",
        "signature": "[Int]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#v:astyle",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Hledger.Data.Types",
        "fct-package": "hledger-lib",
        "fct-signature": "AmountStyle",
        "fct-source": "src/Hledger-Data-Types.html#Amount",
        "fct-type": "function",
        "title": "astyle"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Data Types",
        "module": "Hledger.Data.Types",
        "name": "astyle",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#v:asubs",
      "description": {
        "fct-descr": "\u003cp\u003esub-accounts\n anumpostings :: Int       -- ^ number of postings to this account\n derived from the above:\n\u003c/p\u003e",
        "fct-module": "Hledger.Data.Types",
        "fct-package": "hledger-lib",
        "fct-signature": "[Account]",
        "fct-source": "src/Hledger-Data-Types.html#Account",
        "fct-type": "function",
        "title": "asubs"
      },
      "index": {
        "description": "sub-accounts anumpostings Int number of postings to this account derived from the above",
        "hierarchy": "Hledger Data Types",
        "module": "Hledger.Data.Types",
        "name": "asubs",
        "normalized": "[Account]",
        "package": "hledger-lib",
        "partial": "",
        "signature": "[Account]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#v:ctxAccount",
      "description": {
        "fct-descr": "\u003cp\u003ethe current stack of parent accounts/account name components\n   specified with \u003ca\u003eaccount\u003c/a\u003e directive(s). Concatenated, these\n   are the account prefix prepended to parsed account names.\n\u003c/p\u003e",
        "fct-module": "Hledger.Data.Types",
        "fct-package": "hledger-lib",
        "fct-signature": "![AccountName]",
        "fct-source": "src/Hledger-Data-Types.html#JournalContext",
        "fct-type": "function",
        "title": "ctxAccount"
      },
      "index": {
        "description": "the current stack of parent accounts account name components specified with account directive Concatenated these are the account prefix prepended to parsed account names",
        "hierarchy": "Hledger Data Types",
        "module": "Hledger.Data.Types",
        "name": "ctxAccount",
        "normalized": "[AccountName]",
        "package": "hledger-lib",
        "partial": "Account",
        "signature": "[AccountName]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#v:ctxAliases",
      "description": {
        "fct-descr": "\u003cp\u003ethe current list of account name aliases in effect\n\u003c/p\u003e",
        "fct-module": "Hledger.Data.Types",
        "fct-package": "hledger-lib",
        "fct-signature": "![(AccountName, AccountName)]",
        "fct-source": "src/Hledger-Data-Types.html#JournalContext",
        "fct-type": "function",
        "title": "ctxAliases"
      },
      "index": {
        "description": "the current list of account name aliases in effect",
        "hierarchy": "Hledger Data Types",
        "module": "Hledger.Data.Types",
        "name": "ctxAliases",
        "normalized": "[(AccountName,AccountName)]",
        "package": "hledger-lib",
        "partial": "Aliases",
        "signature": "[(AccountName,AccountName)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#v:ctxCommodityAndStyle",
      "description": {
        "fct-descr": "\u003cp\u003ethe default commodity and amount style most recently specified with D\n\u003c/p\u003e",
        "fct-module": "Hledger.Data.Types",
        "fct-package": "hledger-lib",
        "fct-signature": "!(Maybe (Commodity, AmountStyle))",
        "fct-source": "src/Hledger-Data-Types.html#JournalContext",
        "fct-type": "function",
        "title": "ctxCommodityAndStyle"
      },
      "index": {
        "description": "the default commodity and amount style most recently specified with",
        "hierarchy": "Hledger Data Types",
        "module": "Hledger.Data.Types",
        "name": "ctxCommodityAndStyle",
        "normalized": "(Maybe(Commodity,AmountStyle))",
        "package": "hledger-lib",
        "partial": "Commodity And Style",
        "signature": "(Maybe(Commodity,AmountStyle))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#v:ctxYear",
      "description": {
        "fct-descr": "\u003cp\u003ethe default year most recently specified with Y\n\u003c/p\u003e",
        "fct-module": "Hledger.Data.Types",
        "fct-package": "hledger-lib",
        "fct-signature": "!(Maybe Year)",
        "fct-source": "src/Hledger-Data-Types.html#JournalContext",
        "fct-type": "function",
        "title": "ctxYear"
      },
      "index": {
        "description": "the default year most recently specified with",
        "hierarchy": "Hledger Data Types",
        "module": "Hledger.Data.Types",
        "name": "ctxYear",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "Year",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#v:filereadtime",
      "description": {
        "fct-descr": "\u003cp\u003ewhen this journal was last read from its file(s)\n\u003c/p\u003e",
        "fct-module": "Hledger.Data.Types",
        "fct-package": "hledger-lib",
        "fct-signature": "ClockTime",
        "fct-source": "src/Hledger-Data-Types.html#Journal",
        "fct-type": "function",
        "title": "filereadtime"
      },
      "index": {
        "description": "when this journal was last read from its file",
        "hierarchy": "Hledger Data Types",
        "module": "Hledger.Data.Types",
        "name": "filereadtime",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#v:files",
      "description": {
        "fct-descr": "\u003cp\u003ethe file path and raw text of the main and\n any included journal files. The main file is\n first followed by any included files in the\n order encountered (XXX reversed, cf journalAddFile).\n\u003c/p\u003e",
        "fct-module": "Hledger.Data.Types",
        "fct-package": "hledger-lib",
        "fct-signature": "[(FilePath, String)]",
        "fct-source": "src/Hledger-Data-Types.html#Journal",
        "fct-type": "function",
        "title": "files"
      },
      "index": {
        "description": "the file path and raw text of the main and any included journal files The main file is first followed by any included files in the order encountered XXX reversed cf journalAddFile",
        "hierarchy": "Hledger Data Types",
        "module": "Hledger.Data.Types",
        "name": "files",
        "normalized": "[(FilePath,String)]",
        "package": "hledger-lib",
        "partial": "",
        "signature": "[(FilePath,String)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#v:final_comment_lines",
      "description": {
        "fct-descr": "\u003cp\u003eany trailing comments from the journal file\n\u003c/p\u003e",
        "fct-module": "Hledger.Data.Types",
        "fct-package": "hledger-lib",
        "fct-signature": "String",
        "fct-source": "src/Hledger-Data-Types.html#Journal",
        "fct-type": "function",
        "title": "final_comment_lines"
      },
      "index": {
        "description": "any trailing comments from the journal file",
        "hierarchy": "Hledger Data Types",
        "module": "Hledger.Data.Types",
        "name": "final_comment_lines",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#v:hamount",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Hledger.Data.Types",
        "fct-package": "hledger-lib",
        "fct-signature": "Amount",
        "fct-source": "src/Hledger-Data-Types.html#HistoricalPrice",
        "fct-type": "function",
        "title": "hamount"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Data Types",
        "module": "Hledger.Data.Types",
        "name": "hamount",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#v:hcommodity",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Hledger.Data.Types",
        "fct-package": "hledger-lib",
        "fct-signature": "Commodity",
        "fct-source": "src/Hledger-Data-Types.html#HistoricalPrice",
        "fct-type": "function",
        "title": "hcommodity"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Data Types",
        "module": "Hledger.Data.Types",
        "name": "hcommodity",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#v:hdate",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Hledger.Data.Types",
        "fct-package": "hledger-lib",
        "fct-signature": "Day",
        "fct-source": "src/Hledger-Data-Types.html#HistoricalPrice",
        "fct-type": "function",
        "title": "hdate"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Data Types",
        "module": "Hledger.Data.Types",
        "name": "hdate",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#v:historical_prices",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Hledger.Data.Types",
        "fct-package": "hledger-lib",
        "fct-signature": "[HistoricalPrice]",
        "fct-source": "src/Hledger-Data-Types.html#Journal",
        "fct-type": "function",
        "title": "historical_prices"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Data Types",
        "module": "Hledger.Data.Types",
        "name": "historical_prices",
        "normalized": "[HistoricalPrice]",
        "package": "hledger-lib",
        "partial": "",
        "signature": "[HistoricalPrice]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#v:jContext",
      "description": {
        "fct-descr": "\u003cp\u003ethe context (parse state) at the end of parsing\n\u003c/p\u003e",
        "fct-module": "Hledger.Data.Types",
        "fct-package": "hledger-lib",
        "fct-signature": "JournalContext",
        "fct-source": "src/Hledger-Data-Types.html#Journal",
        "fct-type": "function",
        "title": "jContext"
      },
      "index": {
        "description": "the context parse state at the end of parsing",
        "hierarchy": "Hledger Data Types",
        "module": "Hledger.Data.Types",
        "name": "jContext",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "Context",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#v:jcommoditystyles",
      "description": {
        "fct-descr": "\u003cp\u003ehow to display amounts in each commodity\n\u003c/p\u003e",
        "fct-module": "Hledger.Data.Types",
        "fct-package": "hledger-lib",
        "fct-signature": "Map Commodity AmountStyle",
        "fct-source": "src/Hledger-Data-Types.html#Journal",
        "fct-type": "function",
        "title": "jcommoditystyles"
      },
      "index": {
        "description": "how to display amounts in each commodity",
        "hierarchy": "Hledger Data Types",
        "module": "Hledger.Data.Types",
        "name": "jcommoditystyles",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#v:jmodifiertxns",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Hledger.Data.Types",
        "fct-package": "hledger-lib",
        "fct-signature": "[ModifierTransaction]",
        "fct-source": "src/Hledger-Data-Types.html#Journal",
        "fct-type": "function",
        "title": "jmodifiertxns"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Data Types",
        "module": "Hledger.Data.Types",
        "name": "jmodifiertxns",
        "normalized": "[ModifierTransaction]",
        "package": "hledger-lib",
        "partial": "",
        "signature": "[ModifierTransaction]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#v:jperiodictxns",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Hledger.Data.Types",
        "fct-package": "hledger-lib",
        "fct-signature": "[PeriodicTransaction]",
        "fct-source": "src/Hledger-Data-Types.html#Journal",
        "fct-type": "function",
        "title": "jperiodictxns"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Data Types",
        "module": "Hledger.Data.Types",
        "name": "jperiodictxns",
        "normalized": "[PeriodicTransaction]",
        "package": "hledger-lib",
        "partial": "",
        "signature": "[PeriodicTransaction]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#v:jtxns",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Hledger.Data.Types",
        "fct-package": "hledger-lib",
        "fct-signature": "[Transaction]",
        "fct-source": "src/Hledger-Data-Types.html#Journal",
        "fct-type": "function",
        "title": "jtxns"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Data Types",
        "module": "Hledger.Data.Types",
        "name": "jtxns",
        "normalized": "[Transaction]",
        "package": "hledger-lib",
        "partial": "",
        "signature": "[Transaction]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#v:laccounts",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Hledger.Data.Types",
        "fct-package": "hledger-lib",
        "fct-signature": "[Account]",
        "fct-source": "src/Hledger-Data-Types.html#Ledger",
        "fct-type": "function",
        "title": "laccounts"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Data Types",
        "module": "Hledger.Data.Types",
        "name": "laccounts",
        "normalized": "[Account]",
        "package": "hledger-lib",
        "partial": "",
        "signature": "[Account]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#v:ljournal",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Hledger.Data.Types",
        "fct-package": "hledger-lib",
        "fct-signature": "Journal",
        "fct-source": "src/Hledger-Data-Types.html#Ledger",
        "fct-type": "function",
        "title": "ljournal"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Data Types",
        "module": "Hledger.Data.Types",
        "name": "ljournal",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#v:mtpostings",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Hledger.Data.Types",
        "fct-package": "hledger-lib",
        "fct-signature": "[Posting]",
        "fct-source": "src/Hledger-Data-Types.html#ModifierTransaction",
        "fct-type": "function",
        "title": "mtpostings"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Data Types",
        "module": "Hledger.Data.Types",
        "name": "mtpostings",
        "normalized": "[Posting]",
        "package": "hledger-lib",
        "partial": "",
        "signature": "[Posting]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#v:mtvalueexpr",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Hledger.Data.Types",
        "fct-package": "hledger-lib",
        "fct-signature": "String",
        "fct-source": "src/Hledger-Data-Types.html#ModifierTransaction",
        "fct-type": "function",
        "title": "mtvalueexpr"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Data Types",
        "module": "Hledger.Data.Types",
        "name": "mtvalueexpr",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#v:open_timelog_entries",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Hledger.Data.Types",
        "fct-package": "hledger-lib",
        "fct-signature": "[TimeLogEntry]",
        "fct-source": "src/Hledger-Data-Types.html#Journal",
        "fct-type": "function",
        "title": "open_timelog_entries"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Data Types",
        "module": "Hledger.Data.Types",
        "name": "open_timelog_entries",
        "normalized": "[TimeLogEntry]",
        "package": "hledger-lib",
        "partial": "",
        "signature": "[TimeLogEntry]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#v:paccount",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Hledger.Data.Types",
        "fct-package": "hledger-lib",
        "fct-signature": "AccountName",
        "fct-source": "src/Hledger-Data-Types.html#Posting",
        "fct-type": "function",
        "title": "paccount"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Data Types",
        "module": "Hledger.Data.Types",
        "name": "paccount",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#v:pamount",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Hledger.Data.Types",
        "fct-package": "hledger-lib",
        "fct-signature": "MixedAmount",
        "fct-source": "src/Hledger-Data-Types.html#Posting",
        "fct-type": "function",
        "title": "pamount"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Data Types",
        "module": "Hledger.Data.Types",
        "name": "pamount",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#v:pbalanceassertion",
      "description": {
        "fct-descr": "\u003cp\u003eoptional: the expected balance in the account after this posting\n\u003c/p\u003e",
        "fct-module": "Hledger.Data.Types",
        "fct-package": "hledger-lib",
        "fct-signature": "Maybe MixedAmount",
        "fct-source": "src/Hledger-Data-Types.html#Posting",
        "fct-type": "function",
        "title": "pbalanceassertion"
      },
      "index": {
        "description": "optional the expected balance in the account after this posting",
        "hierarchy": "Hledger Data Types",
        "module": "Hledger.Data.Types",
        "name": "pbalanceassertion",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#v:pcomment",
      "description": {
        "fct-descr": "\u003cp\u003ethis posting's comment lines, as a single non-indented multi-line string\n\u003c/p\u003e",
        "fct-module": "Hledger.Data.Types",
        "fct-package": "hledger-lib",
        "fct-signature": "String",
        "fct-source": "src/Hledger-Data-Types.html#Posting",
        "fct-type": "function",
        "title": "pcomment"
      },
      "index": {
        "description": "this posting comment lines as single non-indented multi-line string",
        "hierarchy": "Hledger Data Types",
        "module": "Hledger.Data.Types",
        "name": "pcomment",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#v:pdate",
      "description": {
        "fct-descr": "\u003cp\u003ethis posting's date, if different from the transaction's\n\u003c/p\u003e",
        "fct-module": "Hledger.Data.Types",
        "fct-package": "hledger-lib",
        "fct-signature": "Maybe Day",
        "fct-source": "src/Hledger-Data-Types.html#Posting",
        "fct-type": "function",
        "title": "pdate"
      },
      "index": {
        "description": "this posting date if different from the transaction",
        "hierarchy": "Hledger Data Types",
        "module": "Hledger.Data.Types",
        "name": "pdate",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#v:pdate2",
      "description": {
        "fct-descr": "\u003cp\u003ethis posting's secondary date, if different from the transaction's\n\u003c/p\u003e",
        "fct-module": "Hledger.Data.Types",
        "fct-package": "hledger-lib",
        "fct-signature": "Maybe Day",
        "fct-source": "src/Hledger-Data-Types.html#Posting",
        "fct-type": "function",
        "title": "pdate2"
      },
      "index": {
        "description": "this posting secondary date if different from the transaction",
        "hierarchy": "Hledger Data Types",
        "module": "Hledger.Data.Types",
        "name": "pdate2",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#v:pstatus",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Hledger.Data.Types",
        "fct-package": "hledger-lib",
        "fct-signature": "Bool",
        "fct-source": "src/Hledger-Data-Types.html#Posting",
        "fct-type": "function",
        "title": "pstatus"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Data Types",
        "module": "Hledger.Data.Types",
        "name": "pstatus",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#v:ptags",
      "description": {
        "fct-descr": "\u003cp\u003etag names and values, extracted from the comment\n\u003c/p\u003e",
        "fct-module": "Hledger.Data.Types",
        "fct-package": "hledger-lib",
        "fct-signature": "[Tag]",
        "fct-source": "src/Hledger-Data-Types.html#Posting",
        "fct-type": "function",
        "title": "ptags"
      },
      "index": {
        "description": "tag names and values extracted from the comment",
        "hierarchy": "Hledger Data Types",
        "module": "Hledger.Data.Types",
        "name": "ptags",
        "normalized": "[Tag]",
        "package": "hledger-lib",
        "partial": "",
        "signature": "[Tag]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#v:ptperiodicexpr",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Hledger.Data.Types",
        "fct-package": "hledger-lib",
        "fct-signature": "String",
        "fct-source": "src/Hledger-Data-Types.html#PeriodicTransaction",
        "fct-type": "function",
        "title": "ptperiodicexpr"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Data Types",
        "module": "Hledger.Data.Types",
        "name": "ptperiodicexpr",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#v:ptpostings",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Hledger.Data.Types",
        "fct-package": "hledger-lib",
        "fct-signature": "[Posting]",
        "fct-source": "src/Hledger-Data-Types.html#PeriodicTransaction",
        "fct-type": "function",
        "title": "ptpostings"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Data Types",
        "module": "Hledger.Data.Types",
        "name": "ptpostings",
        "normalized": "[Posting]",
        "package": "hledger-lib",
        "partial": "",
        "signature": "[Posting]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#v:ptransaction",
      "description": {
        "fct-descr": "\u003cp\u003ethis posting's parent transaction (co-recursive types).\n Tying this knot gets tedious, Maybe makes it easier/optional.\n\u003c/p\u003e",
        "fct-module": "Hledger.Data.Types",
        "fct-package": "hledger-lib",
        "fct-signature": "Maybe Transaction",
        "fct-source": "src/Hledger-Data-Types.html#Posting",
        "fct-type": "function",
        "title": "ptransaction"
      },
      "index": {
        "description": "this posting parent transaction co-recursive types Tying this knot gets tedious Maybe makes it easier optional",
        "hierarchy": "Hledger Data Types",
        "module": "Hledger.Data.Types",
        "name": "ptransaction",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#v:ptype",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Hledger.Data.Types",
        "fct-package": "hledger-lib",
        "fct-signature": "PostingType",
        "fct-source": "src/Hledger-Data-Types.html#Posting",
        "fct-type": "function",
        "title": "ptype"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Data Types",
        "module": "Hledger.Data.Types",
        "name": "ptype",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#v:rDetector",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Hledger.Data.Types",
        "fct-package": "hledger-lib",
        "fct-signature": "FilePath -\u003e String -\u003e Bool",
        "fct-source": "src/Hledger-Data-Types.html#Reader",
        "fct-type": "function",
        "title": "rDetector"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Data Types",
        "module": "Hledger.Data.Types",
        "name": "rDetector",
        "normalized": "FilePath-\u003eString-\u003eBool",
        "package": "hledger-lib",
        "partial": "Detector",
        "signature": "FilePath-\u003eString-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#v:rFormat",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Hledger.Data.Types",
        "fct-package": "hledger-lib",
        "fct-signature": "Format",
        "fct-source": "src/Hledger-Data-Types.html#Reader",
        "fct-type": "function",
        "title": "rFormat"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Data Types",
        "module": "Hledger.Data.Types",
        "name": "rFormat",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "Format",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#v:rParser",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Hledger.Data.Types",
        "fct-package": "hledger-lib",
        "fct-signature": "Maybe FilePath -\u003e FilePath -\u003e String -\u003e ErrorT String IO Journal",
        "fct-source": "src/Hledger-Data-Types.html#Reader",
        "fct-type": "function",
        "title": "rParser"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Data Types",
        "module": "Hledger.Data.Types",
        "name": "rParser",
        "normalized": "Maybe FilePath-\u003eFilePath-\u003eString-\u003eErrorT String IO Journal",
        "package": "hledger-lib",
        "partial": "Parser",
        "signature": "Maybe FilePath-\u003eFilePath-\u003eString-\u003eErrorT String IO Journal"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#v:tcode",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Hledger.Data.Types",
        "fct-package": "hledger-lib",
        "fct-signature": "String",
        "fct-source": "src/Hledger-Data-Types.html#Transaction",
        "fct-type": "function",
        "title": "tcode"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Data Types",
        "module": "Hledger.Data.Types",
        "name": "tcode",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#v:tcomment",
      "description": {
        "fct-descr": "\u003cp\u003ethis transaction's comment lines, as a single non-indented multi-line string\n\u003c/p\u003e",
        "fct-module": "Hledger.Data.Types",
        "fct-package": "hledger-lib",
        "fct-signature": "String",
        "fct-source": "src/Hledger-Data-Types.html#Transaction",
        "fct-type": "function",
        "title": "tcomment"
      },
      "index": {
        "description": "this transaction comment lines as single non-indented multi-line string",
        "hierarchy": "Hledger Data Types",
        "module": "Hledger.Data.Types",
        "name": "tcomment",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#v:tdate",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Hledger.Data.Types",
        "fct-package": "hledger-lib",
        "fct-signature": "Day",
        "fct-source": "src/Hledger-Data-Types.html#Transaction",
        "fct-type": "function",
        "title": "tdate"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Data Types",
        "module": "Hledger.Data.Types",
        "name": "tdate",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#v:tdate2",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Hledger.Data.Types",
        "fct-package": "hledger-lib",
        "fct-signature": "Maybe Day",
        "fct-source": "src/Hledger-Data-Types.html#Transaction",
        "fct-type": "function",
        "title": "tdate2"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Data Types",
        "module": "Hledger.Data.Types",
        "name": "tdate2",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#v:tdescription",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Hledger.Data.Types",
        "fct-package": "hledger-lib",
        "fct-signature": "String",
        "fct-source": "src/Hledger-Data-Types.html#Transaction",
        "fct-type": "function",
        "title": "tdescription"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Data Types",
        "module": "Hledger.Data.Types",
        "name": "tdescription",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#v:tlcode",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Hledger.Data.Types",
        "fct-package": "hledger-lib",
        "fct-signature": "TimeLogCode",
        "fct-source": "src/Hledger-Data-Types.html#TimeLogEntry",
        "fct-type": "function",
        "title": "tlcode"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Data Types",
        "module": "Hledger.Data.Types",
        "name": "tlcode",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#v:tlcomment",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Hledger.Data.Types",
        "fct-package": "hledger-lib",
        "fct-signature": "String",
        "fct-source": "src/Hledger-Data-Types.html#TimeLogEntry",
        "fct-type": "function",
        "title": "tlcomment"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Data Types",
        "module": "Hledger.Data.Types",
        "name": "tlcomment",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#v:tldatetime",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Hledger.Data.Types",
        "fct-package": "hledger-lib",
        "fct-signature": "LocalTime",
        "fct-source": "src/Hledger-Data-Types.html#TimeLogEntry",
        "fct-type": "function",
        "title": "tldatetime"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Data Types",
        "module": "Hledger.Data.Types",
        "name": "tldatetime",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#v:tpostings",
      "description": {
        "fct-descr": "\u003cp\u003ethis transaction's postings\n\u003c/p\u003e",
        "fct-module": "Hledger.Data.Types",
        "fct-package": "hledger-lib",
        "fct-signature": "[Posting]",
        "fct-source": "src/Hledger-Data-Types.html#Transaction",
        "fct-type": "function",
        "title": "tpostings"
      },
      "index": {
        "description": "this transaction postings",
        "hierarchy": "Hledger Data Types",
        "module": "Hledger.Data.Types",
        "name": "tpostings",
        "normalized": "[Posting]",
        "package": "hledger-lib",
        "partial": "",
        "signature": "[Posting]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#v:tpreceding_comment_lines",
      "description": {
        "fct-descr": "\u003cp\u003eany comment lines immediately preceding this transaction\n\u003c/p\u003e",
        "fct-module": "Hledger.Data.Types",
        "fct-package": "hledger-lib",
        "fct-signature": "String",
        "fct-source": "src/Hledger-Data-Types.html#Transaction",
        "fct-type": "function",
        "title": "tpreceding_comment_lines"
      },
      "index": {
        "description": "any comment lines immediately preceding this transaction",
        "hierarchy": "Hledger Data Types",
        "module": "Hledger.Data.Types",
        "name": "tpreceding_comment_lines",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#v:tstatus",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Hledger.Data.Types",
        "fct-package": "hledger-lib",
        "fct-signature": "Bool",
        "fct-source": "src/Hledger-Data-Types.html#Transaction",
        "fct-type": "function",
        "title": "tstatus"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Data Types",
        "module": "Hledger.Data.Types",
        "name": "tstatus",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data-Types.html#v:ttags",
      "description": {
        "fct-descr": "\u003cp\u003etag names and values, extracted from the comment\n\u003c/p\u003e",
        "fct-module": "Hledger.Data.Types",
        "fct-package": "hledger-lib",
        "fct-signature": "[Tag]",
        "fct-source": "src/Hledger-Data-Types.html#Transaction",
        "fct-type": "function",
        "title": "ttags"
      },
      "index": {
        "description": "tag names and values extracted from the comment",
        "hierarchy": "Hledger Data Types",
        "module": "Hledger.Data.Types",
        "name": "ttags",
        "normalized": "[Tag]",
        "package": "hledger-lib",
        "partial": "",
        "signature": "[Tag]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe Hledger.Data library allows parsing and querying of C++ ledger-style\njournal files.  It generally provides a compatible subset of C++ ledger's\nfunctionality.  This package re-exports all the Hledger.Data.* modules\n(except UTF8, which requires an explicit import.)\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Hledger.Data",
        "fct-package": "hledger-lib",
        "fct-signature": "module",
        "fct-source": "src/Hledger-Data.html",
        "fct-type": "module",
        "title": "Data"
      },
      "index": {
        "description": "The Hledger.Data library allows parsing and querying of ledger-style journal files It generally provides compatible subset of ledger functionality This package re-exports all the Hledger.Data modules except UTF8 which requires an explicit import",
        "hierarchy": "Hledger Data",
        "module": "Hledger.Data",
        "name": "Data",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "Data",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Data.html#v:tests_Hledger_Data",
      "description": {
        "fct-module": "Hledger.Data",
        "fct-package": "hledger-lib",
        "fct-signature": "Test",
        "fct-source": "src/Hledger-Data.html#tests_Hledger_Data",
        "fct-type": "function",
        "title": "tests_Hledger_Data"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Data",
        "module": "Hledger.Data",
        "name": "tests_Hledger_Data",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "Hledger Data",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Query.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA general query system for matching things (accounts, postings,\ntransactions..)  by various criteria, and a parser for query expressions.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Hledger.Query",
        "fct-package": "hledger-lib",
        "fct-signature": "module",
        "fct-source": "src/Hledger-Query.html",
        "fct-type": "module",
        "title": "Query"
      },
      "index": {
        "description": "general query system for matching things accounts postings transactions by various criteria and parser for query expressions",
        "hierarchy": "Hledger Query",
        "module": "Hledger.Query",
        "name": "Query",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "Query",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Query.html#t:Query",
      "description": {
        "fct-descr": "\u003cp\u003eA query is a composition of search criteria, which can be used to\n match postings, transactions, accounts and more.\n\u003c/p\u003e",
        "fct-module": "Hledger.Query",
        "fct-package": "hledger-lib",
        "fct-signature": "data",
        "fct-source": "src/Hledger-Query.html#Query",
        "fct-type": "data",
        "title": "Query"
      },
      "index": {
        "description": "query is composition of search criteria which can be used to match postings transactions accounts and more",
        "hierarchy": "Hledger Query",
        "module": "Hledger.Query",
        "name": "Query",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "Query",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Query.html#t:QueryOpt",
      "description": {
        "fct-descr": "\u003cp\u003eA query option changes a query's/report's behaviour and output in some way.\n\u003c/p\u003e",
        "fct-module": "Hledger.Query",
        "fct-package": "hledger-lib",
        "fct-signature": "data",
        "fct-source": "src/Hledger-Query.html#QueryOpt",
        "fct-type": "data",
        "title": "QueryOpt"
      },
      "index": {
        "description": "query option changes query report behaviour and output in some way",
        "hierarchy": "Hledger Query",
        "module": "Hledger.Query",
        "name": "QueryOpt",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "Query Opt",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Query.html#v:Acct",
      "description": {
        "fct-descr": "\u003cp\u003ematch postings whose account matches this regexp\n\u003c/p\u003e",
        "fct-module": "Hledger.Query",
        "fct-package": "hledger-lib",
        "fct-signature": "Acct String",
        "fct-source": "src/Hledger-Query.html#Query",
        "fct-type": "function",
        "title": "Acct"
      },
      "index": {
        "description": "match postings whose account matches this regexp",
        "hierarchy": "Hledger Query",
        "module": "Hledger.Query",
        "name": "Acct",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "Acct",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Query.html#v:Amt",
      "description": {
        "fct-descr": "\u003cp\u003ematch if the amount's numeric quantity is less than\u003cem\u003egreater than\u003c/em\u003eequal to some value\n\u003c/p\u003e",
        "fct-module": "Hledger.Query",
        "fct-package": "hledger-lib",
        "fct-signature": "Amt Ordering Quantity",
        "fct-source": "src/Hledger-Query.html#Query",
        "fct-type": "function",
        "title": "Amt"
      },
      "index": {
        "description": "match if the amount numeric quantity is less than greater than equal to some value",
        "hierarchy": "Hledger Query",
        "module": "Hledger.Query",
        "name": "Amt",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "Amt",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Query.html#v:And",
      "description": {
        "fct-descr": "\u003cp\u003ematch if all of these match\n\u003c/p\u003e",
        "fct-module": "Hledger.Query",
        "fct-package": "hledger-lib",
        "fct-signature": "And [Query]",
        "fct-source": "src/Hledger-Query.html#Query",
        "fct-type": "function",
        "title": "And"
      },
      "index": {
        "description": "match if all of these match",
        "hierarchy": "Hledger Query",
        "module": "Hledger.Query",
        "name": "And",
        "normalized": "And[Query]",
        "package": "hledger-lib",
        "partial": "And",
        "signature": "And[Query]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Query.html#v:Any",
      "description": {
        "fct-descr": "\u003cp\u003ealways match\n\u003c/p\u003e",
        "fct-module": "Hledger.Query",
        "fct-package": "hledger-lib",
        "fct-signature": "Any",
        "fct-source": "src/Hledger-Query.html#Query",
        "fct-type": "function",
        "title": "Any"
      },
      "index": {
        "description": "always match",
        "hierarchy": "Hledger Query",
        "module": "Hledger.Query",
        "name": "Any",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "Any",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Query.html#v:Code",
      "description": {
        "fct-descr": "\u003cp\u003ematch if code matches this regexp\n\u003c/p\u003e",
        "fct-module": "Hledger.Query",
        "fct-package": "hledger-lib",
        "fct-signature": "Code String",
        "fct-source": "src/Hledger-Query.html#Query",
        "fct-type": "function",
        "title": "Code"
      },
      "index": {
        "description": "match if code matches this regexp",
        "hierarchy": "Hledger Query",
        "module": "Hledger.Query",
        "name": "Code",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "Code",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Query.html#v:Date",
      "description": {
        "fct-descr": "\u003cp\u003ematch if primary date in this date span\n\u003c/p\u003e",
        "fct-module": "Hledger.Query",
        "fct-package": "hledger-lib",
        "fct-signature": "Date DateSpan",
        "fct-source": "src/Hledger-Query.html#Query",
        "fct-type": "function",
        "title": "Date"
      },
      "index": {
        "description": "match if primary date in this date span",
        "hierarchy": "Hledger Query",
        "module": "Hledger.Query",
        "name": "Date",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "Date",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Query.html#v:Date2",
      "description": {
        "fct-descr": "\u003cp\u003ematch if secondary date in this date span\n\u003c/p\u003e",
        "fct-module": "Hledger.Query",
        "fct-package": "hledger-lib",
        "fct-signature": "Date2 DateSpan",
        "fct-source": "src/Hledger-Query.html#Query",
        "fct-type": "function",
        "title": "Date2"
      },
      "index": {
        "description": "match if secondary date in this date span",
        "hierarchy": "Hledger Query",
        "module": "Hledger.Query",
        "name": "Date2",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "Date",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Query.html#v:Depth",
      "description": {
        "fct-descr": "\u003cp\u003ematch if account depth is less than or equal to this value\n\u003c/p\u003e",
        "fct-module": "Hledger.Query",
        "fct-package": "hledger-lib",
        "fct-signature": "Depth Int",
        "fct-source": "src/Hledger-Query.html#Query",
        "fct-type": "function",
        "title": "Depth"
      },
      "index": {
        "description": "match if account depth is less than or equal to this value",
        "hierarchy": "Hledger Query",
        "module": "Hledger.Query",
        "name": "Depth",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "Depth",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Query.html#v:Desc",
      "description": {
        "fct-descr": "\u003cp\u003ematch if description matches this regexp\n\u003c/p\u003e",
        "fct-module": "Hledger.Query",
        "fct-package": "hledger-lib",
        "fct-signature": "Desc String",
        "fct-source": "src/Hledger-Query.html#Query",
        "fct-type": "function",
        "title": "Desc"
      },
      "index": {
        "description": "match if description matches this regexp",
        "hierarchy": "Hledger Query",
        "module": "Hledger.Query",
        "name": "Desc",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "Desc",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Query.html#v:Empty",
      "description": {
        "fct-descr": "\u003cp\u003eif true, show zero-amount postings/accounts which are usually not shown\n   more of a query option than a query criteria ?\n\u003c/p\u003e",
        "fct-module": "Hledger.Query",
        "fct-package": "hledger-lib",
        "fct-signature": "Empty Bool",
        "fct-source": "src/Hledger-Query.html#Query",
        "fct-type": "function",
        "title": "Empty"
      },
      "index": {
        "description": "if true show zero-amount postings accounts which are usually not shown more of query option than query criteria",
        "hierarchy": "Hledger Query",
        "module": "Hledger.Query",
        "name": "Empty",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "Empty",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Query.html#v:None",
      "description": {
        "fct-descr": "\u003cp\u003enever match\n\u003c/p\u003e",
        "fct-module": "Hledger.Query",
        "fct-package": "hledger-lib",
        "fct-signature": "None",
        "fct-source": "src/Hledger-Query.html#Query",
        "fct-type": "function",
        "title": "None"
      },
      "index": {
        "description": "never match",
        "hierarchy": "Hledger Query",
        "module": "Hledger.Query",
        "name": "None",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "None",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Query.html#v:Not",
      "description": {
        "fct-descr": "\u003cp\u003enegate this match\n\u003c/p\u003e",
        "fct-module": "Hledger.Query",
        "fct-package": "hledger-lib",
        "fct-signature": "Not Query",
        "fct-source": "src/Hledger-Query.html#Query",
        "fct-type": "function",
        "title": "Not"
      },
      "index": {
        "description": "negate this match",
        "hierarchy": "Hledger Query",
        "module": "Hledger.Query",
        "name": "Not",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "Not",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Query.html#v:Or",
      "description": {
        "fct-descr": "\u003cp\u003ematch if any of these match\n\u003c/p\u003e",
        "fct-module": "Hledger.Query",
        "fct-package": "hledger-lib",
        "fct-signature": "Or [Query]",
        "fct-source": "src/Hledger-Query.html#Query",
        "fct-type": "function",
        "title": "Or"
      },
      "index": {
        "description": "match if any of these match",
        "hierarchy": "Hledger Query",
        "module": "Hledger.Query",
        "name": "Or",
        "normalized": "Or[Query]",
        "package": "hledger-lib",
        "partial": "Or",
        "signature": "Or[Query]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Query.html#v:QueryOptInAcct",
      "description": {
        "fct-descr": "\u003cp\u003eas above but include sub-accounts in the account register\n | QueryOptCostBasis      -- ^ show amounts converted to cost where possible\n | QueryOptDate2  -- ^ show secondary dates instead of primary dates\n\u003c/p\u003e",
        "fct-module": "Hledger.Query",
        "fct-package": "hledger-lib",
        "fct-signature": "QueryOptInAcct AccountName",
        "fct-source": "src/Hledger-Query.html#QueryOpt",
        "fct-type": "function",
        "title": "QueryOptInAcct"
      },
      "index": {
        "description": "as above but include sub-accounts in the account register QueryOptCostBasis show amounts converted to cost where possible QueryOptDate2 show secondary dates instead of primary dates",
        "hierarchy": "Hledger Query",
        "module": "Hledger.Query",
        "name": "QueryOptInAcct",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "Query Opt In Acct",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Query.html#v:QueryOptInAcctOnly",
      "description": {
        "fct-descr": "\u003cp\u003eshow an account register focussed on this account\n\u003c/p\u003e",
        "fct-module": "Hledger.Query",
        "fct-package": "hledger-lib",
        "fct-signature": "QueryOptInAcctOnly AccountName",
        "fct-source": "src/Hledger-Query.html#QueryOpt",
        "fct-type": "function",
        "title": "QueryOptInAcctOnly"
      },
      "index": {
        "description": "show an account register focussed on this account",
        "hierarchy": "Hledger Query",
        "module": "Hledger.Query",
        "name": "QueryOptInAcctOnly",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "Query Opt In Acct Only",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Query.html#v:Real",
      "description": {
        "fct-descr": "\u003cp\u003ematch if \u003ca\u003erealness\u003c/a\u003e (involves a real non-virtual account ?) has this value\n\u003c/p\u003e",
        "fct-module": "Hledger.Query",
        "fct-package": "hledger-lib",
        "fct-signature": "Real Bool",
        "fct-source": "src/Hledger-Query.html#Query",
        "fct-type": "function",
        "title": "Real"
      },
      "index": {
        "description": "match if realness involves real non-virtual account has this value",
        "hierarchy": "Hledger Query",
        "module": "Hledger.Query",
        "name": "Real",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "Real",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Query.html#v:Status",
      "description": {
        "fct-descr": "\u003cp\u003ematch if cleared status has this value\n\u003c/p\u003e",
        "fct-module": "Hledger.Query",
        "fct-package": "hledger-lib",
        "fct-signature": "Status Bool",
        "fct-source": "src/Hledger-Query.html#Query",
        "fct-type": "function",
        "title": "Status"
      },
      "index": {
        "description": "match if cleared status has this value",
        "hierarchy": "Hledger Query",
        "module": "Hledger.Query",
        "name": "Status",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "Status",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Query.html#v:Sym",
      "description": {
        "fct-descr": "\u003cp\u003ematch if the entire commodity symbol is matched by this regexp\n\u003c/p\u003e",
        "fct-module": "Hledger.Query",
        "fct-package": "hledger-lib",
        "fct-signature": "Sym String",
        "fct-source": "src/Hledger-Query.html#Query",
        "fct-type": "function",
        "title": "Sym"
      },
      "index": {
        "description": "match if the entire commodity symbol is matched by this regexp",
        "hierarchy": "Hledger Query",
        "module": "Hledger.Query",
        "name": "Sym",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "Sym",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Query.html#v:Tag",
      "description": {
        "fct-descr": "\u003cp\u003ematch if a tag with this exact name, and with value\n matching the regexp if provided, exists\n\u003c/p\u003e",
        "fct-module": "Hledger.Query",
        "fct-package": "hledger-lib",
        "fct-signature": "Tag String (Maybe String)",
        "fct-source": "src/Hledger-Query.html#Query",
        "fct-type": "function",
        "title": "Tag"
      },
      "index": {
        "description": "match if tag with this exact name and with value matching the regexp if provided exists",
        "hierarchy": "Hledger Query",
        "module": "Hledger.Query",
        "name": "Tag",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "Tag",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Query.html#v:filterQuery",
      "description": {
        "fct-descr": "\u003cp\u003eRemove query terms (or whole sub-expressions) not matching the given\n predicate from this query.  XXX Semantics not yet clear.\n\u003c/p\u003e",
        "fct-module": "Hledger.Query",
        "fct-package": "hledger-lib",
        "fct-signature": "(Query -\u003e Bool) -\u003e Query -\u003e Query",
        "fct-source": "src/Hledger-Query.html#filterQuery",
        "fct-type": "function",
        "title": "filterQuery"
      },
      "index": {
        "description": "Remove query terms or whole sub-expressions not matching the given predicate from this query XXX Semantics not yet clear",
        "hierarchy": "Hledger Query",
        "module": "Hledger.Query",
        "name": "filterQuery",
        "normalized": "(Query-\u003eBool)-\u003eQuery-\u003eQuery",
        "package": "hledger-lib",
        "partial": "Query",
        "signature": "(Query-\u003eBool)-\u003eQuery-\u003eQuery"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Query.html#v:inAccount",
      "description": {
        "fct-descr": "\u003cp\u003eThe account we are currently focussed on, if any, and whether subaccounts are included.\n Just looks at the first query option.\n\u003c/p\u003e",
        "fct-module": "Hledger.Query",
        "fct-package": "hledger-lib",
        "fct-signature": "[QueryOpt] -\u003e Maybe (AccountName, Bool)",
        "fct-source": "src/Hledger-Query.html#inAccount",
        "fct-type": "function",
        "title": "inAccount"
      },
      "index": {
        "description": "The account we are currently focussed on if any and whether subaccounts are included Just looks at the first query option",
        "hierarchy": "Hledger Query",
        "module": "Hledger.Query",
        "name": "inAccount",
        "normalized": "[QueryOpt]-\u003eMaybe(AccountName,Bool)",
        "package": "hledger-lib",
        "partial": "Account",
        "signature": "[QueryOpt]-\u003eMaybe(AccountName,Bool)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Query.html#v:inAccountQuery",
      "description": {
        "fct-descr": "\u003cp\u003eA query for the account(s) we are currently focussed on, if any.\n Just looks at the first query option.\n\u003c/p\u003e",
        "fct-module": "Hledger.Query",
        "fct-package": "hledger-lib",
        "fct-signature": "[QueryOpt] -\u003e Maybe Query",
        "fct-source": "src/Hledger-Query.html#inAccountQuery",
        "fct-type": "function",
        "title": "inAccountQuery"
      },
      "index": {
        "description": "query for the account we are currently focussed on if any Just looks at the first query option",
        "hierarchy": "Hledger Query",
        "module": "Hledger.Query",
        "name": "inAccountQuery",
        "normalized": "[QueryOpt]-\u003eMaybe Query",
        "package": "hledger-lib",
        "partial": "Account Query",
        "signature": "[QueryOpt]-\u003eMaybe Query"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Query.html#v:matchesAccount",
      "description": {
        "fct-descr": "\u003cp\u003eDoes the match expression match this account ?\n A matching in: clause is also considered a match.\n\u003c/p\u003e",
        "fct-module": "Hledger.Query",
        "fct-package": "hledger-lib",
        "fct-signature": "Query -\u003e AccountName -\u003e Bool",
        "fct-source": "src/Hledger-Query.html#matchesAccount",
        "fct-type": "function",
        "title": "matchesAccount"
      },
      "index": {
        "description": "Does the match expression match this account matching in clause is also considered match",
        "hierarchy": "Hledger Query",
        "module": "Hledger.Query",
        "name": "matchesAccount",
        "normalized": "Query-\u003eAccountName-\u003eBool",
        "package": "hledger-lib",
        "partial": "Account",
        "signature": "Query-\u003eAccountName-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Query.html#v:matchesPosting",
      "description": {
        "fct-descr": "\u003cp\u003eDoes the match expression match this posting ?\n\u003c/p\u003e",
        "fct-module": "Hledger.Query",
        "fct-package": "hledger-lib",
        "fct-signature": "Query -\u003e Posting -\u003e Bool",
        "fct-source": "src/Hledger-Query.html#matchesPosting",
        "fct-type": "function",
        "title": "matchesPosting"
      },
      "index": {
        "description": "Does the match expression match this posting",
        "hierarchy": "Hledger Query",
        "module": "Hledger.Query",
        "name": "matchesPosting",
        "normalized": "Query-\u003ePosting-\u003eBool",
        "package": "hledger-lib",
        "partial": "Posting",
        "signature": "Query-\u003ePosting-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Query.html#v:matchesTransaction",
      "description": {
        "fct-descr": "\u003cp\u003eDoes the match expression match this transaction ?\n\u003c/p\u003e",
        "fct-module": "Hledger.Query",
        "fct-package": "hledger-lib",
        "fct-signature": "Query -\u003e Transaction -\u003e Bool",
        "fct-source": "src/Hledger-Query.html#matchesTransaction",
        "fct-type": "function",
        "title": "matchesTransaction"
      },
      "index": {
        "description": "Does the match expression match this transaction",
        "hierarchy": "Hledger Query",
        "module": "Hledger.Query",
        "name": "matchesTransaction",
        "normalized": "Query-\u003eTransaction-\u003eBool",
        "package": "hledger-lib",
        "partial": "Transaction",
        "signature": "Query-\u003eTransaction-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Query.html#v:parseQuery",
      "description": {
        "fct-descr": "\u003cp\u003eConvert a query expression containing zero or more space-separated\n terms to a query and zero or more query options. A query term is either:\n\u003c/p\u003e\u003col\u003e\u003cli\u003e a search pattern, which matches on one or more fields, eg:\n\u003c/li\u003e\u003c/ol\u003e\u003cp\u003eacct:REGEXP     - match the account name with a regular expression\n      desc:REGEXP     - match the transaction description\n      date:PERIODEXP  - match the date with a period expression\n\u003c/p\u003e\u003cp\u003eThe prefix indicates the field to match, or if there is no prefix\n    account name is assumed.\n\u003c/p\u003e\u003col\u003e\u003cli\u003e a query option, which modifies the reporting behaviour in some\n    way. There is currently one of these, which may appear only once:\n\u003c/li\u003e\u003c/ol\u003e\u003cp\u003einacct:FULLACCTNAME\n\u003c/p\u003e\u003cp\u003eThe usual shell quoting rules are assumed. When a pattern contains\n whitespace, it (or the whole term including prefix) should be enclosed\n in single or double quotes.\n\u003c/p\u003e\u003cp\u003ePeriod expressions may contain relative dates, so a reference date is\n required to fully parse these.\n\u003c/p\u003e\u003cp\u003eMultiple terms are combined as follows:\n 1. multiple account patterns are OR'd together\n 2. multiple description patterns are OR'd together\n 3. then all terms are AND'd together\n\u003c/p\u003e",
        "fct-module": "Hledger.Query",
        "fct-package": "hledger-lib",
        "fct-signature": "Day -\u003e String -\u003e (Query, [QueryOpt])",
        "fct-source": "src/Hledger-Query.html#parseQuery",
        "fct-type": "function",
        "title": "parseQuery"
      },
      "index": {
        "description": "Convert query expression containing zero or more space-separated terms to query and zero or more query options query term is either search pattern which matches on one or more fields eg acct REGEXP match the account name with regular expression desc REGEXP match the transaction description date PERIODEXP match the date with period expression The prefix indicates the field to match or if there is no prefix account name is assumed query option which modifies the reporting behaviour in some way There is currently one of these which may appear only once inacct FULLACCTNAME The usual shell quoting rules are assumed When pattern contains whitespace it or the whole term including prefix should be enclosed in single or double quotes Period expressions may contain relative dates so reference date is required to fully parse these Multiple terms are combined as follows multiple account patterns are OR together multiple description patterns are OR together then all terms are AND together",
        "hierarchy": "Hledger Query",
        "module": "Hledger.Query",
        "name": "parseQuery",
        "normalized": "Day-\u003eString-\u003e(Query,[QueryOpt])",
        "package": "hledger-lib",
        "partial": "Query",
        "signature": "Day-\u003eString-\u003e(Query,[QueryOpt])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Query.html#v:queryDateSpan",
      "description": {
        "fct-descr": "\u003cp\u003eWhat date span (or secondary date span) does this query specify ?\n For OR expressions, use the widest possible span. NOT is ignored.\n\u003c/p\u003e",
        "fct-module": "Hledger.Query",
        "fct-package": "hledger-lib",
        "fct-signature": "Bool -\u003e Query -\u003e DateSpan",
        "fct-source": "src/Hledger-Query.html#queryDateSpan",
        "fct-type": "function",
        "title": "queryDateSpan"
      },
      "index": {
        "description": "What date span or secondary date span does this query specify For OR expressions use the widest possible span NOT is ignored",
        "hierarchy": "Hledger Query",
        "module": "Hledger.Query",
        "name": "queryDateSpan",
        "normalized": "Bool-\u003eQuery-\u003eDateSpan",
        "package": "hledger-lib",
        "partial": "Date Span",
        "signature": "Bool-\u003eQuery-\u003eDateSpan"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Query.html#v:queryDepth",
      "description": {
        "fct-descr": "\u003cp\u003eThe depth limit this query specifies, or a large number if none.\n\u003c/p\u003e",
        "fct-module": "Hledger.Query",
        "fct-package": "hledger-lib",
        "fct-signature": "Query -\u003e Int",
        "fct-source": "src/Hledger-Query.html#queryDepth",
        "fct-type": "function",
        "title": "queryDepth"
      },
      "index": {
        "description": "The depth limit this query specifies or large number if none",
        "hierarchy": "Hledger Query",
        "module": "Hledger.Query",
        "name": "queryDepth",
        "normalized": "Query-\u003eInt",
        "package": "hledger-lib",
        "partial": "Depth",
        "signature": "Query-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Query.html#v:queryEmpty",
      "description": {
        "fct-descr": "\u003cp\u003eThe empty (zero amount) status specified by this query, defaulting to false.\n\u003c/p\u003e",
        "fct-module": "Hledger.Query",
        "fct-package": "hledger-lib",
        "fct-signature": "Query -\u003e Bool",
        "fct-source": "src/Hledger-Query.html#queryEmpty",
        "fct-type": "function",
        "title": "queryEmpty"
      },
      "index": {
        "description": "The empty zero amount status specified by this query defaulting to false",
        "hierarchy": "Hledger Query",
        "module": "Hledger.Query",
        "name": "queryEmpty",
        "normalized": "Query-\u003eBool",
        "package": "hledger-lib",
        "partial": "Empty",
        "signature": "Query-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Query.html#v:queryIsDate",
      "description": {
        "fct-module": "Hledger.Query",
        "fct-package": "hledger-lib",
        "fct-signature": "Query -\u003e Bool",
        "fct-source": "src/Hledger-Query.html#queryIsDate",
        "fct-type": "function",
        "title": "queryIsDate"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Query",
        "module": "Hledger.Query",
        "name": "queryIsDate",
        "normalized": "Query-\u003eBool",
        "package": "hledger-lib",
        "partial": "Is Date",
        "signature": "Query-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Query.html#v:queryIsDepth",
      "description": {
        "fct-module": "Hledger.Query",
        "fct-package": "hledger-lib",
        "fct-signature": "Query -\u003e Bool",
        "fct-source": "src/Hledger-Query.html#queryIsDepth",
        "fct-type": "function",
        "title": "queryIsDepth"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Query",
        "module": "Hledger.Query",
        "name": "queryIsDepth",
        "normalized": "Query-\u003eBool",
        "package": "hledger-lib",
        "partial": "Is Depth",
        "signature": "Query-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Query.html#v:queryIsNull",
      "description": {
        "fct-descr": "\u003cp\u003eDoes this query match everything ?\n\u003c/p\u003e",
        "fct-module": "Hledger.Query",
        "fct-package": "hledger-lib",
        "fct-signature": "Query -\u003e Bool",
        "fct-source": "src/Hledger-Query.html#queryIsNull",
        "fct-type": "function",
        "title": "queryIsNull"
      },
      "index": {
        "description": "Does this query match everything",
        "hierarchy": "Hledger Query",
        "module": "Hledger.Query",
        "name": "queryIsNull",
        "normalized": "Query-\u003eBool",
        "package": "hledger-lib",
        "partial": "Is Null",
        "signature": "Query-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Query.html#v:queryIsStartDateOnly",
      "description": {
        "fct-descr": "\u003cp\u003eDoes this query specify a start date and nothing else (that would\n filter postings prior to the date) ?\n When the flag is true, look for a starting secondary date instead.\n\u003c/p\u003e",
        "fct-module": "Hledger.Query",
        "fct-package": "hledger-lib",
        "fct-signature": "Bool -\u003e Query -\u003e Bool",
        "fct-source": "src/Hledger-Query.html#queryIsStartDateOnly",
        "fct-type": "function",
        "title": "queryIsStartDateOnly"
      },
      "index": {
        "description": "Does this query specify start date and nothing else that would filter postings prior to the date When the flag is true look for starting secondary date instead",
        "hierarchy": "Hledger Query",
        "module": "Hledger.Query",
        "name": "queryIsStartDateOnly",
        "normalized": "Bool-\u003eQuery-\u003eBool",
        "package": "hledger-lib",
        "partial": "Is Start Date Only",
        "signature": "Bool-\u003eQuery-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Query.html#v:queryStartDate",
      "description": {
        "fct-descr": "\u003cp\u003eWhat start date (or secondary date) does this query specify, if any ?\n For OR expressions, use the earliest of the dates. NOT is ignored.\n\u003c/p\u003e",
        "fct-module": "Hledger.Query",
        "fct-package": "hledger-lib",
        "fct-signature": "Bool -\u003e Query -\u003e Maybe Day",
        "fct-source": "src/Hledger-Query.html#queryStartDate",
        "fct-type": "function",
        "title": "queryStartDate"
      },
      "index": {
        "description": "What start date or secondary date does this query specify if any For OR expressions use the earliest of the dates NOT is ignored",
        "hierarchy": "Hledger Query",
        "module": "Hledger.Query",
        "name": "queryStartDate",
        "normalized": "Bool-\u003eQuery-\u003eMaybe Day",
        "package": "hledger-lib",
        "partial": "Start Date",
        "signature": "Bool-\u003eQuery-\u003eMaybe Day"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Query.html#v:simplifyQuery",
      "description": {
        "fct-module": "Hledger.Query",
        "fct-package": "hledger-lib",
        "fct-signature": "Query -\u003e Query",
        "fct-source": "src/Hledger-Query.html#simplifyQuery",
        "fct-type": "function",
        "title": "simplifyQuery"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Query",
        "module": "Hledger.Query",
        "name": "simplifyQuery",
        "normalized": "Query-\u003eQuery",
        "package": "hledger-lib",
        "partial": "Query",
        "signature": "Query-\u003eQuery"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Query.html#v:tests_Hledger_Query",
      "description": {
        "fct-module": "Hledger.Query",
        "fct-package": "hledger-lib",
        "fct-signature": "Test",
        "fct-source": "src/Hledger-Query.html#tests_Hledger_Query",
        "fct-type": "function",
        "title": "tests_Hledger_Query"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Query",
        "module": "Hledger.Query",
        "name": "tests_Hledger_Query",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "Hledger Query",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Read-CsvReader.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA reader for CSV data, using an extra rules file to help interpret the data.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Hledger.Read.CsvReader",
        "fct-package": "hledger-lib",
        "fct-signature": "module",
        "fct-source": "src/Hledger-Read-CsvReader.html",
        "fct-type": "module",
        "title": "CsvReader"
      },
      "index": {
        "description": "reader for CSV data using an extra rules file to help interpret the data",
        "hierarchy": "Hledger Read CsvReader",
        "module": "Hledger.Read.CsvReader",
        "name": "CsvReader",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "Csv Reader",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Read-CsvReader.html#t:CsvRecord",
      "description": {
        "fct-module": "Hledger.Read.CsvReader",
        "fct-package": "hledger-lib",
        "fct-signature": "type",
        "fct-source": "src/Hledger-Read-CsvReader.html#CsvRecord",
        "fct-type": "type",
        "title": "CsvRecord"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Read CsvReader",
        "module": "Hledger.Read.CsvReader",
        "name": "CsvRecord",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "Csv Record",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Read-CsvReader.html#v:parseRulesFile",
      "description": {
        "fct-module": "Hledger.Read.CsvReader",
        "fct-package": "hledger-lib",
        "fct-signature": "FilePath -\u003e IO (Either ParseError CsvRules)",
        "fct-source": "src/Hledger-Read-CsvReader.html#parseRulesFile",
        "fct-type": "function",
        "title": "parseRulesFile"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Read CsvReader",
        "module": "Hledger.Read.CsvReader",
        "name": "parseRulesFile",
        "normalized": "FilePath-\u003eIO(Either ParseError CsvRules)",
        "package": "hledger-lib",
        "partial": "Rules File",
        "signature": "FilePath-\u003eIO(Either ParseError CsvRules)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Read-CsvReader.html#v:reader",
      "description": {
        "fct-module": "Hledger.Read.CsvReader",
        "fct-package": "hledger-lib",
        "fct-signature": "Reader",
        "fct-source": "src/Hledger-Read-CsvReader.html#reader",
        "fct-type": "function",
        "title": "reader"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Read CsvReader",
        "module": "Hledger.Read.CsvReader",
        "name": "reader",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Read-CsvReader.html#v:rulesFileFor",
      "description": {
        "fct-module": "Hledger.Read.CsvReader",
        "fct-package": "hledger-lib",
        "fct-signature": "FilePath -\u003e FilePath",
        "fct-source": "src/Hledger-Read-CsvReader.html#rulesFileFor",
        "fct-type": "function",
        "title": "rulesFileFor"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Read CsvReader",
        "module": "Hledger.Read.CsvReader",
        "name": "rulesFileFor",
        "normalized": "FilePath-\u003eFilePath",
        "package": "hledger-lib",
        "partial": "File For",
        "signature": "FilePath-\u003eFilePath"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Read-CsvReader.html#v:tests_Hledger_Read_CsvReader",
      "description": {
        "fct-module": "Hledger.Read.CsvReader",
        "fct-package": "hledger-lib",
        "fct-signature": "Test",
        "fct-source": "src/Hledger-Read-CsvReader.html#tests_Hledger_Read_CsvReader",
        "fct-type": "function",
        "title": "tests_Hledger_Read_CsvReader"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Read CsvReader",
        "module": "Hledger.Read.CsvReader",
        "name": "tests_Hledger_Read_CsvReader",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "Hledger Read Csv Reader",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Read-CsvReader.html#v:transactionFromCsvRecord",
      "description": {
        "fct-module": "Hledger.Read.CsvReader",
        "fct-package": "hledger-lib",
        "fct-signature": "CsvRules -\u003e CsvRecord -\u003e Transaction",
        "fct-source": "src/Hledger-Read-CsvReader.html#transactionFromCsvRecord",
        "fct-type": "function",
        "title": "transactionFromCsvRecord"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Read CsvReader",
        "module": "Hledger.Read.CsvReader",
        "name": "transactionFromCsvRecord",
        "normalized": "CsvRules-\u003eCsvRecord-\u003eTransaction",
        "package": "hledger-lib",
        "partial": "From Csv Record",
        "signature": "CsvRules-\u003eCsvRecord-\u003eTransaction"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Read-JournalReader.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA reader for hledger's journal file format\n(\u003ca\u003ehttp://hledger.org/MANUAL.html#the-journal-file\u003c/a\u003e).  hledger's journal\nformat is a compatible subset of c++ ledger's\n(\u003ca\u003ehttp://ledger-cli.org/3.0/doc/ledger3.html#Journal-Format\u003c/a\u003e), so this\nreader should handle many ledger files as well. Example:\n\u003c/p\u003e\u003cpre\u003e\n2012/3/24 gift\n    expenses:gifts  $10\n    assets:cash\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "Hledger.Read.JournalReader",
        "fct-package": "hledger-lib",
        "fct-signature": "module",
        "fct-source": "src/Hledger-Read-JournalReader.html",
        "fct-type": "module",
        "title": "JournalReader"
      },
      "index": {
        "description": "reader for hledger journal file format http hledger.org MANUAL.html the-journal-file hledger journal format is compatible subset of ledger http ledger-cli.org doc ledger3.html Journal-Format so this reader should handle many ledger files as well Example gift expenses gifts assets cash",
        "hierarchy": "Hledger Read JournalReader",
        "module": "Hledger.Read.JournalReader",
        "name": "JournalReader",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "Journal Reader",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Read-JournalReader.html#v:accountname",
      "description": {
        "fct-descr": "\u003cp\u003eParse an account name. Account names may have single spaces inside\n them, and are terminated by two or more spaces. They should have one or\n more components of at least one character, separated by the account\n separator char.\n\u003c/p\u003e",
        "fct-module": "Hledger.Read.JournalReader",
        "fct-package": "hledger-lib",
        "fct-signature": "GenParser Char st AccountName",
        "fct-source": "src/Hledger-Read-JournalReader.html#accountname",
        "fct-type": "function",
        "title": "accountname"
      },
      "index": {
        "description": "Parse an account name Account names may have single spaces inside them and are terminated by two or more spaces They should have one or more components of at least one character separated by the account separator char",
        "hierarchy": "Hledger Read JournalReader",
        "module": "Hledger.Read.JournalReader",
        "name": "accountname",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Read-JournalReader.html#v:amountp",
      "description": {
        "fct-descr": "\u003cp\u003eParse a single-commodity amount, with optional symbol on the left or\n right, optional unit or total price, and optional (ignored)\n ledger-style balance assertion or fixed lot price declaration.\n\u003c/p\u003e",
        "fct-module": "Hledger.Read.JournalReader",
        "fct-package": "hledger-lib",
        "fct-signature": "GenParser Char JournalContext Amount",
        "fct-source": "src/Hledger-Read-JournalReader.html#amountp",
        "fct-type": "function",
        "title": "amountp"
      },
      "index": {
        "description": "Parse single-commodity amount with optional symbol on the left or right optional unit or total price and optional ignored ledger-style balance assertion or fixed lot price declaration",
        "hierarchy": "Hledger Read JournalReader",
        "module": "Hledger.Read.JournalReader",
        "name": "amountp",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Read-JournalReader.html#v:amountp-39-",
      "description": {
        "fct-descr": "\u003cp\u003eParse an amount from a string, or get an error.\n\u003c/p\u003e",
        "fct-module": "Hledger.Read.JournalReader",
        "fct-package": "hledger-lib",
        "fct-signature": "String -\u003e Amount",
        "fct-source": "src/Hledger-Read-JournalReader.html#amountp%27",
        "fct-type": "function",
        "title": "amountp'"
      },
      "index": {
        "description": "Parse an amount from string or get an error",
        "hierarchy": "Hledger Read JournalReader",
        "module": "Hledger.Read.JournalReader",
        "name": "amountp'",
        "normalized": "String-\u003eAmount",
        "package": "hledger-lib",
        "partial": "",
        "signature": "String-\u003eAmount"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Read-JournalReader.html#v:code",
      "description": {
        "fct-module": "Hledger.Read.JournalReader",
        "fct-package": "hledger-lib",
        "fct-signature": "GenParser Char JournalContext String",
        "fct-source": "src/Hledger-Read-JournalReader.html#code",
        "fct-type": "function",
        "title": "code"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Read JournalReader",
        "module": "Hledger.Read.JournalReader",
        "name": "code",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Read-JournalReader.html#v:datetime",
      "description": {
        "fct-descr": "\u003cp\u003eParse a date and time in YYYY\u003cem\u003eMM\u003c/em\u003eDD HH:MM[:SS][+-ZZZZ] format.  Any\n timezone will be ignored; the time is treated as local time.  Fewer\n digits are allowed, except in the timezone. The year may be omitted if\n a default year has already been set.\n\u003c/p\u003e",
        "fct-module": "Hledger.Read.JournalReader",
        "fct-package": "hledger-lib",
        "fct-signature": "GenParser Char JournalContext LocalTime",
        "fct-source": "src/Hledger-Read-JournalReader.html#datetime",
        "fct-type": "function",
        "title": "datetime"
      },
      "index": {
        "description": "Parse date and time in YYYY MM DD HH MM SS ZZZZ format Any timezone will be ignored the time is treated as local time Fewer digits are allowed except in the timezone The year may be omitted if default year has already been set",
        "hierarchy": "Hledger Read JournalReader",
        "module": "Hledger.Read.JournalReader",
        "name": "datetime",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Read-JournalReader.html#v:defaultyeardirective",
      "description": {
        "fct-module": "Hledger.Read.JournalReader",
        "fct-package": "hledger-lib",
        "fct-signature": "GenParser Char JournalContext JournalUpdate",
        "fct-source": "src/Hledger-Read-JournalReader.html#defaultyeardirective",
        "fct-type": "function",
        "title": "defaultyeardirective"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Read JournalReader",
        "module": "Hledger.Read.JournalReader",
        "name": "defaultyeardirective",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Read-JournalReader.html#v:directive",
      "description": {
        "fct-module": "Hledger.Read.JournalReader",
        "fct-package": "hledger-lib",
        "fct-signature": "GenParser Char JournalContext JournalUpdate",
        "fct-source": "src/Hledger-Read-JournalReader.html#directive",
        "fct-type": "function",
        "title": "directive"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Read JournalReader",
        "module": "Hledger.Read.JournalReader",
        "name": "directive",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Read-JournalReader.html#v:emptyline",
      "description": {
        "fct-module": "Hledger.Read.JournalReader",
        "fct-package": "hledger-lib",
        "fct-signature": "GenParser Char JournalContext ()",
        "fct-source": "src/Hledger-Read-JournalReader.html#emptyline",
        "fct-type": "function",
        "title": "emptyline"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Read JournalReader",
        "module": "Hledger.Read.JournalReader",
        "name": "emptyline",
        "normalized": "GenParser Char JournalContext()",
        "package": "hledger-lib",
        "partial": "",
        "signature": "GenParser Char JournalContext()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Read-JournalReader.html#v:getParentAccount",
      "description": {
        "fct-module": "Hledger.Read.JournalReader",
        "fct-package": "hledger-lib",
        "fct-signature": "GenParser tok JournalContext String",
        "fct-source": "src/Hledger-Read-JournalReader.html#getParentAccount",
        "fct-type": "function",
        "title": "getParentAccount"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Read JournalReader",
        "module": "Hledger.Read.JournalReader",
        "name": "getParentAccount",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "Parent Account",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Read-JournalReader.html#v:historicalpricedirective",
      "description": {
        "fct-module": "Hledger.Read.JournalReader",
        "fct-package": "hledger-lib",
        "fct-signature": "GenParser Char JournalContext HistoricalPrice",
        "fct-source": "src/Hledger-Read-JournalReader.html#historicalpricedirective",
        "fct-type": "function",
        "title": "historicalpricedirective"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Read JournalReader",
        "module": "Hledger.Read.JournalReader",
        "name": "historicalpricedirective",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Read-JournalReader.html#v:journal",
      "description": {
        "fct-descr": "\u003cp\u003eTop-level journal parser. Returns a single composite, I/O performing,\n error-raising \u003ca\u003eJournalUpdate\u003c/a\u003e (and final \u003ca\u003eJournalContext\u003c/a\u003e) which can be\n applied to an empty journal to get the final result.\n\u003c/p\u003e",
        "fct-module": "Hledger.Read.JournalReader",
        "fct-package": "hledger-lib",
        "fct-signature": "GenParser Char JournalContext (JournalUpdate, JournalContext)",
        "fct-source": "src/Hledger-Read-JournalReader.html#journal",
        "fct-type": "function",
        "title": "journal"
      },
      "index": {
        "description": "Top-level journal parser Returns single composite performing error-raising JournalUpdate and final JournalContext which can be applied to an empty journal to get the final result",
        "hierarchy": "Hledger Read JournalReader",
        "module": "Hledger.Read.JournalReader",
        "name": "journal",
        "normalized": "GenParser Char JournalContext(JournalUpdate,JournalContext)",
        "package": "hledger-lib",
        "partial": "",
        "signature": "GenParser Char JournalContext(JournalUpdate,JournalContext)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Read-JournalReader.html#v:mamountp-39-",
      "description": {
        "fct-descr": "\u003cp\u003eParse a mixed amount from a string, or get an error.\n\u003c/p\u003e",
        "fct-module": "Hledger.Read.JournalReader",
        "fct-package": "hledger-lib",
        "fct-signature": "String -\u003e MixedAmount",
        "fct-source": "src/Hledger-Read-JournalReader.html#mamountp%27",
        "fct-type": "function",
        "title": "mamountp'"
      },
      "index": {
        "description": "Parse mixed amount from string or get an error",
        "hierarchy": "Hledger Read JournalReader",
        "module": "Hledger.Read.JournalReader",
        "name": "mamountp'",
        "normalized": "String-\u003eMixedAmount",
        "package": "hledger-lib",
        "partial": "",
        "signature": "String-\u003eMixedAmount"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Read-JournalReader.html#v:parseJournalWith",
      "description": {
        "fct-descr": "\u003cp\u003eGiven a JournalUpdate-generating parsec parser, file path and data string,\n parse and post-process a Journal so that it's ready to use, or give an error.\n\u003c/p\u003e",
        "fct-module": "Hledger.Read.JournalReader",
        "fct-package": "hledger-lib",
        "fct-signature": "GenParser Char JournalContext (JournalUpdate, JournalContext) -\u003e FilePath -\u003e String -\u003e ErrorT String IO Journal",
        "fct-source": "src/Hledger-Read-JournalReader.html#parseJournalWith",
        "fct-type": "function",
        "title": "parseJournalWith"
      },
      "index": {
        "description": "Given JournalUpdate-generating parsec parser file path and data string parse and post-process Journal so that it ready to use or give an error",
        "hierarchy": "Hledger Read JournalReader",
        "module": "Hledger.Read.JournalReader",
        "name": "parseJournalWith",
        "normalized": "GenParser Char JournalContext(JournalUpdate,JournalContext)-\u003eFilePath-\u003eString-\u003eErrorT String IO Journal",
        "package": "hledger-lib",
        "partial": "Journal With",
        "signature": "GenParser Char JournalContext(JournalUpdate,JournalContext)-\u003eFilePath-\u003eString-\u003eErrorT String IO Journal"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Read-JournalReader.html#v:reader",
      "description": {
        "fct-module": "Hledger.Read.JournalReader",
        "fct-package": "hledger-lib",
        "fct-signature": "Reader",
        "fct-source": "src/Hledger-Read-JournalReader.html#reader",
        "fct-type": "function",
        "title": "reader"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Read JournalReader",
        "module": "Hledger.Read.JournalReader",
        "name": "reader",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Read-TimelogReader.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA reader for the timelog file format generated by timeclock.el\n(\u003ca\u003ehttp://www.emacswiki.org/emacs/TimeClock\u003c/a\u003e). Example:\n\u003c/p\u003e\u003cpre\u003e\ni 2007/03/10 12:26:00 hledger\no 2007/03/10 17:26:02\n\u003c/pre\u003e\u003cp\u003eFrom timeclock.el 2.6:\n\u003c/p\u003e\u003cpre\u003e\nA timelog contains data in the form of a single entry per line.\nEach entry has the form:\n\nCODE YYYY\u003cem\u003eMM\u003c/em\u003eDD HH:MM:SS [COMMENT]\n\nCODE is one of: b, h, i, o or O.  COMMENT is optional when the code is\ni, o or O.  The meanings of the codes are:\n\nb  Set the current time balance, or \"time debt\".  Useful when\n     archiving old log data, when a debt must be carried forward.\n     The COMMENT here is the number of seconds of debt.\n\nh  Set the required working time for the given day.  This must\n     be the first entry for that day.  The COMMENT in this case is\n     the number of hours in this workday.  Floating point amounts\n     are allowed.\n\ni  Clock in.  The COMMENT in this case should be the name of the\n     project worked on.\n\no  Clock out.  COMMENT is unnecessary, but can be used to provide\n     a description of how the period went, for example.\n\nO  Final clock out.  Whatever project was being worked on, it is\n     now finished.  Useful for creating summary reports.\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "Hledger.Read.TimelogReader",
        "fct-package": "hledger-lib",
        "fct-signature": "module",
        "fct-source": "src/Hledger-Read-TimelogReader.html",
        "fct-type": "module",
        "title": "TimelogReader"
      },
      "index": {
        "description": "reader for the timelog file format generated by timeclock.el http www.emacswiki.org emacs TimeClock Example hledger From timeclock.el timelog contains data in the form of single entry per line Each entry has the form CODE YYYY MM DD HH MM SS COMMENT CODE is one of or COMMENT is optional when the code is or The meanings of the codes are Set the current time balance or time debt Useful when archiving old log data when debt must be carried forward The COMMENT here is the number of seconds of debt Set the required working time for the given day This must be the first entry for that day The COMMENT in this case is the number of hours in this workday Floating point amounts are allowed Clock in The COMMENT in this case should be the name of the project worked on Clock out COMMENT is unnecessary but can be used to provide description of how the period went for example Final clock out Whatever project was being worked on it is now finished Useful for creating summary reports",
        "hierarchy": "Hledger Read TimelogReader",
        "module": "Hledger.Read.TimelogReader",
        "name": "TimelogReader",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "Timelog Reader",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Read-TimelogReader.html#v:reader",
      "description": {
        "fct-module": "Hledger.Read.TimelogReader",
        "fct-package": "hledger-lib",
        "fct-signature": "Reader",
        "fct-source": "src/Hledger-Read-TimelogReader.html#reader",
        "fct-type": "function",
        "title": "reader"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Read TimelogReader",
        "module": "Hledger.Read.TimelogReader",
        "name": "reader",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Read-TimelogReader.html#v:tests_Hledger_Read_TimelogReader",
      "description": {
        "fct-module": "Hledger.Read.TimelogReader",
        "fct-package": "hledger-lib",
        "fct-signature": "Test",
        "fct-source": "src/Hledger-Read-TimelogReader.html#tests_Hledger_Read_TimelogReader",
        "fct-type": "function",
        "title": "tests_Hledger_Read_TimelogReader"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Read TimelogReader",
        "module": "Hledger.Read.TimelogReader",
        "name": "tests_Hledger_Read_TimelogReader",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "Hledger Read Timelog Reader",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Read.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis is the entry point to hledger's reading system, which can read\nJournals from various data formats. Use this module if you want to parse\njournal data or read journal files. Generally it should not be necessary\nto import modules below this one.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Hledger.Read",
        "fct-package": "hledger-lib",
        "fct-signature": "module",
        "fct-source": "src/Hledger-Read.html",
        "fct-type": "module",
        "title": "Read"
      },
      "index": {
        "description": "This is the entry point to hledger reading system which can read Journals from various data formats Use this module if you want to parse journal data or read journal files Generally it should not be necessary to import modules below this one",
        "hierarchy": "Hledger Read",
        "module": "Hledger.Read",
        "name": "Read",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "Read",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Read.html#v:accountname",
      "description": {
        "fct-descr": "\u003cp\u003eParse an account name. Account names may have single spaces inside\n them, and are terminated by two or more spaces. They should have one or\n more components of at least one character, separated by the account\n separator char.\n\u003c/p\u003e",
        "fct-module": "Hledger.Read",
        "fct-package": "hledger-lib",
        "fct-signature": "GenParser Char st AccountName",
        "fct-source": "src/Hledger-Read-JournalReader.html#accountname",
        "fct-type": "function",
        "title": "accountname"
      },
      "index": {
        "description": "Parse an account name Account names may have single spaces inside them and are terminated by two or more spaces They should have one or more components of at least one character separated by the account separator char",
        "hierarchy": "Hledger Read",
        "module": "Hledger.Read",
        "name": "accountname",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Read.html#v:amountp",
      "description": {
        "fct-descr": "\u003cp\u003eParse a single-commodity amount, with optional symbol on the left or\n right, optional unit or total price, and optional (ignored)\n ledger-style balance assertion or fixed lot price declaration.\n\u003c/p\u003e",
        "fct-module": "Hledger.Read",
        "fct-package": "hledger-lib",
        "fct-signature": "GenParser Char JournalContext Amount",
        "fct-source": "src/Hledger-Read-JournalReader.html#amountp",
        "fct-type": "function",
        "title": "amountp"
      },
      "index": {
        "description": "Parse single-commodity amount with optional symbol on the left or right optional unit or total price and optional ignored ledger-style balance assertion or fixed lot price declaration",
        "hierarchy": "Hledger Read",
        "module": "Hledger.Read",
        "name": "amountp",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Read.html#v:amountp-39-",
      "description": {
        "fct-descr": "\u003cp\u003eParse an amount from a string, or get an error.\n\u003c/p\u003e",
        "fct-module": "Hledger.Read",
        "fct-package": "hledger-lib",
        "fct-signature": "String -\u003e Amount",
        "fct-source": "src/Hledger-Read-JournalReader.html#amountp%27",
        "fct-type": "function",
        "title": "amountp'"
      },
      "index": {
        "description": "Parse an amount from string or get an error",
        "hierarchy": "Hledger Read",
        "module": "Hledger.Read",
        "name": "amountp'",
        "normalized": "String-\u003eAmount",
        "package": "hledger-lib",
        "partial": "",
        "signature": "String-\u003eAmount"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Read.html#v:code",
      "description": {
        "fct-module": "Hledger.Read",
        "fct-package": "hledger-lib",
        "fct-signature": "GenParser Char JournalContext String",
        "fct-source": "src/Hledger-Read-JournalReader.html#code",
        "fct-type": "function",
        "title": "code"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Read",
        "module": "Hledger.Read",
        "name": "code",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Read.html#v:defaultJournal",
      "description": {
        "fct-descr": "\u003cp\u003eRead the default journal file specified by the environment, or raise an error.\n\u003c/p\u003e",
        "fct-module": "Hledger.Read",
        "fct-package": "hledger-lib",
        "fct-signature": "IO Journal",
        "fct-source": "src/Hledger-Read.html#defaultJournal",
        "fct-type": "function",
        "title": "defaultJournal"
      },
      "index": {
        "description": "Read the default journal file specified by the environment or raise an error",
        "hierarchy": "Hledger Read",
        "module": "Hledger.Read",
        "name": "defaultJournal",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "Journal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Read.html#v:defaultJournalPath",
      "description": {
        "fct-descr": "\u003cp\u003eAll the data formats we can read.\n formats = map rFormat readers\n\u003c/p\u003e\u003cp\u003eGet the default journal file path specified by the environment.\n Like ledger, we look first for the LEDGER_FILE environment\n variable, and if that does not exist, for the legacy LEDGER\n environment variable. If neither is set, or the value is blank,\n return the hard-coded default, which is \u003ccode\u003e.hledger.journal\u003c/code\u003e in the\n users's home directory (or in the current directory, if we cannot\n determine a home directory).\n\u003c/p\u003e",
        "fct-module": "Hledger.Read",
        "fct-package": "hledger-lib",
        "fct-signature": "IO String",
        "fct-source": "src/Hledger-Read.html#defaultJournalPath",
        "fct-type": "function",
        "title": "defaultJournalPath"
      },
      "index": {
        "description": "All the data formats we can read formats map rFormat readers Get the default journal file path specified by the environment Like ledger we look first for the LEDGER FILE environment variable and if that does not exist for the legacy LEDGER environment variable If neither is set or the value is blank return the hard-coded default which is hledger.journal in the users home directory or in the current directory if we cannot determine home directory",
        "hierarchy": "Hledger Read",
        "module": "Hledger.Read",
        "name": "defaultJournalPath",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "Journal Path",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Read.html#v:ensureJournalFileExists",
      "description": {
        "fct-descr": "\u003cp\u003eEnsure there is a journal file at the given path, creating an empty one if needed.\n\u003c/p\u003e",
        "fct-module": "Hledger.Read",
        "fct-package": "hledger-lib",
        "fct-signature": "FilePath -\u003e IO ()",
        "fct-source": "src/Hledger-Read.html#ensureJournalFileExists",
        "fct-type": "function",
        "title": "ensureJournalFileExists"
      },
      "index": {
        "description": "Ensure there is journal file at the given path creating an empty one if needed",
        "hierarchy": "Hledger Read",
        "module": "Hledger.Read",
        "name": "ensureJournalFileExists",
        "normalized": "FilePath-\u003eIO()",
        "package": "hledger-lib",
        "partial": "Journal File Exists",
        "signature": "FilePath-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Read.html#v:mamountp-39-",
      "description": {
        "fct-descr": "\u003cp\u003eParse a mixed amount from a string, or get an error.\n\u003c/p\u003e",
        "fct-module": "Hledger.Read",
        "fct-package": "hledger-lib",
        "fct-signature": "String -\u003e MixedAmount",
        "fct-source": "src/Hledger-Read-JournalReader.html#mamountp%27",
        "fct-type": "function",
        "title": "mamountp'"
      },
      "index": {
        "description": "Parse mixed amount from string or get an error",
        "hierarchy": "Hledger Read",
        "module": "Hledger.Read",
        "name": "mamountp'",
        "normalized": "String-\u003eMixedAmount",
        "package": "hledger-lib",
        "partial": "",
        "signature": "String-\u003eMixedAmount"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Read.html#v:readJournal",
      "description": {
        "fct-descr": "\u003cp\u003eRead a journal from this string, trying whatever readers seem appropriate:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e if a format is specified, try that reader only\n\u003c/li\u003e\u003cli\u003e or if one or more readers recognises the file path and data, try those\n\u003c/li\u003e\u003cli\u003e otherwise, try them all.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eA CSV conversion rules file may also be specified for use by the CSV reader.\n\u003c/p\u003e",
        "fct-module": "Hledger.Read",
        "fct-package": "hledger-lib",
        "fct-signature": "Maybe Format -\u003e Maybe FilePath -\u003e Maybe FilePath -\u003e String -\u003e IO (Either String Journal)",
        "fct-source": "src/Hledger-Read.html#readJournal",
        "fct-type": "function",
        "title": "readJournal"
      },
      "index": {
        "description": "Read journal from this string trying whatever readers seem appropriate if format is specified try that reader only or if one or more readers recognises the file path and data try those otherwise try them all CSV conversion rules file may also be specified for use by the CSV reader",
        "hierarchy": "Hledger Read",
        "module": "Hledger.Read",
        "name": "readJournal",
        "normalized": "Maybe Format-\u003eMaybe FilePath-\u003eMaybe FilePath-\u003eString-\u003eIO(Either String Journal)",
        "package": "hledger-lib",
        "partial": "Journal",
        "signature": "Maybe Format-\u003eMaybe FilePath-\u003eMaybe FilePath-\u003eString-\u003eIO(Either String Journal)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Read.html#v:readJournal-39-",
      "description": {
        "fct-descr": "\u003cp\u003eRead a journal from the given string, trying all known formats, or simply throw an error.\n\u003c/p\u003e",
        "fct-module": "Hledger.Read",
        "fct-package": "hledger-lib",
        "fct-signature": "String -\u003e IO Journal",
        "fct-source": "src/Hledger-Read.html#readJournal%27",
        "fct-type": "function",
        "title": "readJournal'"
      },
      "index": {
        "description": "Read journal from the given string trying all known formats or simply throw an error",
        "hierarchy": "Hledger Read",
        "module": "Hledger.Read",
        "name": "readJournal'",
        "normalized": "String-\u003eIO Journal",
        "package": "hledger-lib",
        "partial": "Journal'",
        "signature": "String-\u003eIO Journal"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Read.html#v:readJournalFile",
      "description": {
        "fct-descr": "\u003cp\u003eRead a Journal from this file (or stdin if the filename is -) or give\n an error message, using the specified data format or trying all known\n formats. A CSV conversion rules file may be specified for better\n conversion of that format.\n\u003c/p\u003e",
        "fct-module": "Hledger.Read",
        "fct-package": "hledger-lib",
        "fct-signature": "Maybe Format -\u003e Maybe FilePath -\u003e FilePath -\u003e IO (Either String Journal)",
        "fct-source": "src/Hledger-Read.html#readJournalFile",
        "fct-type": "function",
        "title": "readJournalFile"
      },
      "index": {
        "description": "Read Journal from this file or stdin if the filename is or give an error message using the specified data format or trying all known formats CSV conversion rules file may be specified for better conversion of that format",
        "hierarchy": "Hledger Read",
        "module": "Hledger.Read",
        "name": "readJournalFile",
        "normalized": "Maybe Format-\u003eMaybe FilePath-\u003eFilePath-\u003eIO(Either String Journal)",
        "package": "hledger-lib",
        "partial": "Journal File",
        "signature": "Maybe Format-\u003eMaybe FilePath-\u003eFilePath-\u003eIO(Either String Journal)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Read.html#v:requireJournalFileExists",
      "description": {
        "fct-descr": "\u003cp\u003eIf the specified journal file does not exist, give a helpful error and quit.\n\u003c/p\u003e",
        "fct-module": "Hledger.Read",
        "fct-package": "hledger-lib",
        "fct-signature": "FilePath -\u003e IO ()",
        "fct-source": "src/Hledger-Read.html#requireJournalFileExists",
        "fct-type": "function",
        "title": "requireJournalFileExists"
      },
      "index": {
        "description": "If the specified journal file does not exist give helpful error and quit",
        "hierarchy": "Hledger Read",
        "module": "Hledger.Read",
        "name": "requireJournalFileExists",
        "normalized": "FilePath-\u003eIO()",
        "package": "hledger-lib",
        "partial": "Journal File Exists",
        "signature": "FilePath-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Read.html#v:samplejournal",
      "description": {
        "fct-module": "Hledger.Read",
        "fct-package": "hledger-lib",
        "fct-signature": "IO Journal",
        "fct-source": "src/Hledger-Read.html#samplejournal",
        "fct-type": "function",
        "title": "samplejournal"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Read",
        "module": "Hledger.Read",
        "name": "samplejournal",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Read.html#v:tests_Hledger_Read",
      "description": {
        "fct-module": "Hledger.Read",
        "fct-package": "hledger-lib",
        "fct-signature": "Test",
        "fct-source": "src/Hledger-Read.html#tests_Hledger_Read",
        "fct-type": "function",
        "title": "tests_Hledger_Read"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Read",
        "module": "Hledger.Read",
        "name": "tests_Hledger_Read",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "Hledger Read",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Reports.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eGenerate several common kinds of report from a journal, as \"*Report\" -\nsimple intermediate data structures intended to be easily rendered as\ntext, html, json, csv etc. by hledger commands, hamlet templates,\njavascript, or whatever.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Hledger.Reports",
        "fct-package": "hledger-lib",
        "fct-signature": "module",
        "fct-source": "src/Hledger-Reports.html",
        "fct-type": "module",
        "title": "Reports"
      },
      "index": {
        "description": "Generate several common kinds of report from journal as Report simple intermediate data structures intended to be easily rendered as text html json csv etc by hledger commands hamlet templates javascript or whatever",
        "hierarchy": "Hledger Reports",
        "module": "Hledger.Reports",
        "name": "Reports",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "Reports",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Reports.html#t:BalanceReport",
      "description": {
        "fct-descr": "\u003cp\u003eA list of account names plus rendering info, along with their\n balances as of the end of the reporting period, and the grand\n total. Used for the balance command's single-column mode.\n\u003c/p\u003e",
        "fct-module": "Hledger.Reports",
        "fct-package": "hledger-lib",
        "fct-signature": "type",
        "fct-source": "src/Hledger-Reports.html#BalanceReport",
        "fct-type": "type",
        "title": "BalanceReport"
      },
      "index": {
        "description": "list of account names plus rendering info along with their balances as of the end of the reporting period and the grand total Used for the balance command single-column mode",
        "hierarchy": "Hledger Reports",
        "module": "Hledger.Reports",
        "name": "BalanceReport",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "Balance Report",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Reports.html#t:BalanceReportItem",
      "description": {
        "fct-descr": "\u003cul\u003e\u003cli\u003e Full account name,\n\u003c/li\u003e\u003cli\u003e short account name for display (the leaf name, prefixed by any boring parents immediately above),\n\u003c/li\u003e\u003cli\u003e how many steps to indent this account (the 0-based account depth excluding boring parents, or 0 with --flat),\n\u003c/li\u003e\u003cli\u003e account balance (including subaccounts (XXX unless --flat)).\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Hledger.Reports",
        "fct-package": "hledger-lib",
        "fct-signature": "type",
        "fct-source": "src/Hledger-Reports.html#BalanceReportItem",
        "fct-type": "type",
        "title": "BalanceReportItem"
      },
      "index": {
        "description": "Full account name short account name for display the leaf name prefixed by any boring parents immediately above how many steps to indent this account the based account depth excluding boring parents or with flat account balance including subaccounts XXX unless flat",
        "hierarchy": "Hledger Reports",
        "module": "Hledger.Reports",
        "name": "BalanceReportItem",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "Balance Report Item",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Reports.html#t:BalanceType",
      "description": {
        "fct-descr": "\u003cp\u003eWhich balance is being shown in a multi-column balance report.\n\u003c/p\u003e",
        "fct-module": "Hledger.Reports",
        "fct-package": "hledger-lib",
        "fct-signature": "data",
        "fct-source": "src/Hledger-Reports.html#BalanceType",
        "fct-type": "data",
        "title": "BalanceType"
      },
      "index": {
        "description": "Which balance is being shown in multi-column balance report",
        "hierarchy": "Hledger Reports",
        "module": "Hledger.Reports",
        "name": "BalanceType",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "Balance Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Reports.html#t:DisplayExp",
      "description": {
        "fct-module": "Hledger.Reports",
        "fct-package": "hledger-lib",
        "fct-signature": "type",
        "fct-source": "src/Hledger-Reports.html#DisplayExp",
        "fct-type": "type",
        "title": "DisplayExp"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Reports",
        "module": "Hledger.Reports",
        "name": "DisplayExp",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "Display Exp",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Reports.html#t:EntriesReport",
      "description": {
        "fct-descr": "\u003cp\u003eA journal entries report is a list of whole transactions as\n originally entered in the journal (mostly). This is used by eg\n hledger's print command and hledger-web's journal entries view.\n\u003c/p\u003e",
        "fct-module": "Hledger.Reports",
        "fct-package": "hledger-lib",
        "fct-signature": "type",
        "fct-source": "src/Hledger-Reports.html#EntriesReport",
        "fct-type": "type",
        "title": "EntriesReport"
      },
      "index": {
        "description": "journal entries report is list of whole transactions as originally entered in the journal mostly This is used by eg hledger print command and hledger-web journal entries view",
        "hierarchy": "Hledger Reports",
        "module": "Hledger.Reports",
        "name": "EntriesReport",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "Entries Report",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Reports.html#t:EntriesReportItem",
      "description": {
        "fct-module": "Hledger.Reports",
        "fct-package": "hledger-lib",
        "fct-signature": "type",
        "fct-source": "src/Hledger-Reports.html#EntriesReportItem",
        "fct-type": "type",
        "title": "EntriesReportItem"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Reports",
        "module": "Hledger.Reports",
        "name": "EntriesReportItem",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "Entries Report Item",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Reports.html#t:FormatStr",
      "description": {
        "fct-module": "Hledger.Reports",
        "fct-package": "hledger-lib",
        "fct-signature": "type",
        "fct-source": "src/Hledger-Reports.html#FormatStr",
        "fct-type": "type",
        "title": "FormatStr"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Reports",
        "module": "Hledger.Reports",
        "name": "FormatStr",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "Format Str",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Reports.html#t:MultiBalanceReport",
      "description": {
        "fct-descr": "\u003cp\u003eA multi(column) balance report is a list of accounts, each with a list of\n balances corresponding to the report's column periods. The balances' meaning depends\n on the type of balance report (see \u003ccode\u003e\u003ca\u003eBalanceType\u003c/a\u003e\u003c/code\u003e and \u003ca\u003eHledger.Cli.Balance\u003c/a\u003e).\n Also included are the overall total for each period, the date span for each period,\n and some additional rendering info for the accounts.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e The date span for each report column,\n\u003c/li\u003e\u003cli\u003e line items (one per account),\n\u003c/li\u003e\u003cli\u003e the final total for each report column.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Hledger.Reports",
        "fct-package": "hledger-lib",
        "fct-signature": "newtype",
        "fct-source": "src/Hledger-Reports.html#MultiBalanceReport",
        "fct-type": "newtype",
        "title": "MultiBalanceReport"
      },
      "index": {
        "description": "multi column balance report is list of accounts each with list of balances corresponding to the report column periods The balances meaning depends on the type of balance report see BalanceType and Hledger.Cli.Balance Also included are the overall total for each period the date span for each period and some additional rendering info for the accounts The date span for each report column line items one per account the final total for each report column",
        "hierarchy": "Hledger Reports",
        "module": "Hledger.Reports",
        "name": "MultiBalanceReport",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "Multi Balance Report",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Reports.html#t:MultiBalanceReportItem",
      "description": {
        "fct-descr": "\u003cul\u003e\u003cli\u003e The account name with rendering hints,\n\u003c/li\u003e\u003cli\u003e the account's balance (per-period balance, cumulative ending\n balance, or historical ending balance) in each of the report's\n periods.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Hledger.Reports",
        "fct-package": "hledger-lib",
        "fct-signature": "type",
        "fct-source": "src/Hledger-Reports.html#MultiBalanceReportItem",
        "fct-type": "type",
        "title": "MultiBalanceReportItem"
      },
      "index": {
        "description": "The account name with rendering hints the account balance per-period balance cumulative ending balance or historical ending balance in each of the report periods",
        "hierarchy": "Hledger Reports",
        "module": "Hledger.Reports",
        "name": "MultiBalanceReportItem",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "Multi Balance Report Item",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Reports.html#t:PostingsReport",
      "description": {
        "fct-descr": "\u003cp\u003eA postings report is a list of postings with a running total, a label\n for the total field, and a little extra transaction info to help with rendering.\n This is used eg for the register command.\n\u003c/p\u003e",
        "fct-module": "Hledger.Reports",
        "fct-package": "hledger-lib",
        "fct-signature": "type",
        "fct-source": "src/Hledger-Reports.html#PostingsReport",
        "fct-type": "type",
        "title": "PostingsReport"
      },
      "index": {
        "description": "postings report is list of postings with running total label for the total field and little extra transaction info to help with rendering This is used eg for the register command",
        "hierarchy": "Hledger Reports",
        "module": "Hledger.Reports",
        "name": "PostingsReport",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "Postings Report",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Reports.html#t:PostingsReportItem",
      "description": {
        "fct-module": "Hledger.Reports",
        "fct-package": "hledger-lib",
        "fct-signature": "type",
        "fct-source": "src/Hledger-Reports.html#PostingsReportItem",
        "fct-type": "type",
        "title": "PostingsReportItem"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Reports",
        "module": "Hledger.Reports",
        "name": "PostingsReportItem",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "Postings Report Item",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Reports.html#t:RenderableAccountName",
      "description": {
        "fct-descr": "\u003cul\u003e\u003cli\u003e Full account name,\n\u003c/li\u003e\u003cli\u003e ledger-style short account name (the leaf name, prefixed by any boring parents immediately above),\n\u003c/li\u003e\u003cli\u003e indentation steps to use when rendering a ledger-style account tree\n (the 0-based depth of this account excluding boring parents; or with --flat, 0)\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Hledger.Reports",
        "fct-package": "hledger-lib",
        "fct-signature": "type",
        "fct-source": "src/Hledger-Reports.html#RenderableAccountName",
        "fct-type": "type",
        "title": "RenderableAccountName"
      },
      "index": {
        "description": "Full account name ledger-style short account name the leaf name prefixed by any boring parents immediately above indentation steps to use when rendering ledger-style account tree the based depth of this account excluding boring parents or with flat",
        "hierarchy": "Hledger Reports",
        "module": "Hledger.Reports",
        "name": "RenderableAccountName",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "Renderable Account Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Reports.html#t:ReportOpts",
      "description": {
        "fct-descr": "\u003cp\u003eStandard options for customising report filtering and output,\n corresponding to hledger's command-line options and query language\n arguments. Used in hledger-lib and above.\n\u003c/p\u003e",
        "fct-module": "Hledger.Reports",
        "fct-package": "hledger-lib",
        "fct-signature": "data",
        "fct-source": "src/Hledger-Reports.html#ReportOpts",
        "fct-type": "data",
        "title": "ReportOpts"
      },
      "index": {
        "description": "Standard options for customising report filtering and output corresponding to hledger command-line options and query language arguments Used in hledger-lib and above",
        "hierarchy": "Hledger Reports",
        "module": "Hledger.Reports",
        "name": "ReportOpts",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "Report Opts",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Reports.html#t:TransactionsReport",
      "description": {
        "fct-descr": "\u003cp\u003eA transactions report includes a list of transactions\n (posting-filtered and unfiltered variants), a running balance, and some\n other information helpful for rendering a register view (a flag\n indicating multiple other accounts and a display string describing\n them) with or without a notion of current account(s).\n Two kinds of report use this data structure, see journalTransactionsReport\n and accountTransactionsReport below for detais.\n\u003c/p\u003e",
        "fct-module": "Hledger.Reports",
        "fct-package": "hledger-lib",
        "fct-signature": "type",
        "fct-source": "src/Hledger-Reports.html#TransactionsReport",
        "fct-type": "type",
        "title": "TransactionsReport"
      },
      "index": {
        "description": "transactions report includes list of transactions posting-filtered and unfiltered variants running balance and some other information helpful for rendering register view flag indicating multiple other accounts and display string describing them with or without notion of current account Two kinds of report use this data structure see journalTransactionsReport and accountTransactionsReport below for detais",
        "hierarchy": "Hledger Reports",
        "module": "Hledger.Reports",
        "name": "TransactionsReport",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "Transactions Report",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Reports.html#t:TransactionsReportItem",
      "description": {
        "fct-module": "Hledger.Reports",
        "fct-package": "hledger-lib",
        "fct-signature": "type",
        "fct-source": "src/Hledger-Reports.html#TransactionsReportItem",
        "fct-type": "type",
        "title": "TransactionsReportItem"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Reports",
        "module": "Hledger.Reports",
        "name": "TransactionsReportItem",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "Transactions Report Item",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Reports.html#v:CumulativeBalance",
      "description": {
        "fct-descr": "\u003cp\u003eThe accumulated balance at each period's end, starting from zero at the report start date.\n\u003c/p\u003e",
        "fct-module": "Hledger.Reports",
        "fct-package": "hledger-lib",
        "fct-signature": "CumulativeBalance",
        "fct-source": "src/Hledger-Reports.html#BalanceType",
        "fct-type": "function",
        "title": "CumulativeBalance"
      },
      "index": {
        "description": "The accumulated balance at each period end starting from zero at the report start date",
        "hierarchy": "Hledger Reports",
        "module": "Hledger.Reports",
        "name": "CumulativeBalance",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "Cumulative Balance",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Reports.html#v:HistoricalBalance",
      "description": {
        "fct-descr": "\u003cp\u003eThe historical balance at each period's end, starting from the account balances at the report start date.\n\u003c/p\u003e",
        "fct-module": "Hledger.Reports",
        "fct-package": "hledger-lib",
        "fct-signature": "HistoricalBalance",
        "fct-source": "src/Hledger-Reports.html#BalanceType",
        "fct-type": "function",
        "title": "HistoricalBalance"
      },
      "index": {
        "description": "The historical balance at each period end starting from the account balances at the report start date",
        "hierarchy": "Hledger Reports",
        "module": "Hledger.Reports",
        "name": "HistoricalBalance",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "Historical Balance",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Reports.html#v:MultiBalanceReport",
      "description": {
        "fct-module": "Hledger.Reports",
        "fct-package": "hledger-lib",
        "fct-signature": "MultiBalanceReport ([DateSpan], [MultiBalanceReportItem], [MixedAmount])",
        "fct-source": "src/Hledger-Reports.html#MultiBalanceReport",
        "fct-type": "function",
        "title": "MultiBalanceReport"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Reports",
        "module": "Hledger.Reports",
        "name": "MultiBalanceReport",
        "normalized": "MultiBalanceReport([DateSpan],[MultiBalanceReportItem],[MixedAmount])",
        "package": "hledger-lib",
        "partial": "Multi Balance Report",
        "signature": "MultiBalanceReport([DateSpan],[MultiBalanceReportItem],[MixedAmount])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Reports.html#v:PeriodBalance",
      "description": {
        "fct-descr": "\u003cp\u003eThe change of balance in each period.\n\u003c/p\u003e",
        "fct-module": "Hledger.Reports",
        "fct-package": "hledger-lib",
        "fct-signature": "PeriodBalance",
        "fct-source": "src/Hledger-Reports.html#BalanceType",
        "fct-type": "function",
        "title": "PeriodBalance"
      },
      "index": {
        "description": "The change of balance in each period",
        "hierarchy": "Hledger Reports",
        "module": "Hledger.Reports",
        "name": "PeriodBalance",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "Period Balance",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Reports.html#v:ReportOpts",
      "description": {
        "fct-module": "Hledger.Reports",
        "fct-package": "hledger-lib",
        "fct-signature": "ReportOpts",
        "fct-source": "src/Hledger-Reports.html#ReportOpts",
        "fct-type": "function",
        "title": "ReportOpts"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Reports",
        "module": "Hledger.Reports",
        "name": "ReportOpts",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "Report Opts",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Reports.html#v:accountBalanceHistory",
      "description": {
        "fct-descr": "\u003cp\u003eGet the historical running inclusive balance of a particular account,\n from earliest to latest posting date.\n XXX Accounts should know the Ledger & Journal they came from\n\u003c/p\u003e",
        "fct-module": "Hledger.Reports",
        "fct-package": "hledger-lib",
        "fct-signature": "ReportOpts -\u003e Journal -\u003e Account -\u003e [(Day, MixedAmount)]",
        "fct-source": "src/Hledger-Reports.html#accountBalanceHistory",
        "fct-type": "function",
        "title": "accountBalanceHistory"
      },
      "index": {
        "description": "Get the historical running inclusive balance of particular account from earliest to latest posting date XXX Accounts should know the Ledger Journal they came from",
        "hierarchy": "Hledger Reports",
        "module": "Hledger.Reports",
        "name": "accountBalanceHistory",
        "normalized": "ReportOpts-\u003eJournal-\u003eAccount-\u003e[(Day,MixedAmount)]",
        "package": "hledger-lib",
        "partial": "Balance History",
        "signature": "ReportOpts-\u003eJournal-\u003eAccount-\u003e[(Day,MixedAmount)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Reports.html#v:accountTransactionsReport",
      "description": {
        "fct-descr": "\u003cp\u003eSelect transactions within one or more current accounts, and make a\n transactions report relative to those account(s). This means:\n\u003c/p\u003e\u003col\u003e\u003cli\u003e it shows transactions from the point of view of the current account(s).\n    The transaction amount is the amount posted to the current account(s).\n    The other accounts' names are provided. \n\u003c/li\u003e\u003cli\u003e With no transaction filtering in effect other than a start date, it\n    shows the accurate historical running balance for the current account(s).\n    Otherwise it shows a running total starting at 0.\n\u003c/li\u003e\u003c/ol\u003e\u003cp\u003eThis is used by eg hledger-web's account register view. Currently,\n reporting intervals are not supported, and report items are most\n recent first.\n\u003c/p\u003e",
        "fct-module": "Hledger.Reports",
        "fct-package": "hledger-lib",
        "fct-signature": "ReportOpts -\u003e Journal -\u003e Query -\u003e Query -\u003e TransactionsReport",
        "fct-source": "src/Hledger-Reports.html#accountTransactionsReport",
        "fct-type": "function",
        "title": "accountTransactionsReport"
      },
      "index": {
        "description": "Select transactions within one or more current accounts and make transactions report relative to those account This means it shows transactions from the point of view of the current account The transaction amount is the amount posted to the current account The other accounts names are provided With no transaction filtering in effect other than start date it shows the accurate historical running balance for the current account Otherwise it shows running total starting at This is used by eg hledger-web account register view Currently reporting intervals are not supported and report items are most recent first",
        "hierarchy": "Hledger Reports",
        "module": "Hledger.Reports",
        "name": "accountTransactionsReport",
        "normalized": "ReportOpts-\u003eJournal-\u003eQuery-\u003eQuery-\u003eTransactionsReport",
        "package": "hledger-lib",
        "partial": "Transactions Report",
        "signature": "ReportOpts-\u003eJournal-\u003eQuery-\u003eQuery-\u003eTransactionsReport"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Reports.html#v:average_",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Hledger.Reports",
        "fct-package": "hledger-lib",
        "fct-signature": "Bool",
        "fct-source": "src/Hledger-Reports.html#ReportOpts",
        "fct-type": "function",
        "title": "average_"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Reports",
        "module": "Hledger.Reports",
        "name": "average_",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Reports.html#v:balanceReport",
      "description": {
        "fct-descr": "\u003cp\u003eSelect accounts, and get their balances at the end of the selected\n period, and misc. display information, for an accounts report.\n\u003c/p\u003e",
        "fct-module": "Hledger.Reports",
        "fct-package": "hledger-lib",
        "fct-signature": "ReportOpts -\u003e Query -\u003e Journal -\u003e BalanceReport",
        "fct-source": "src/Hledger-Reports.html#balanceReport",
        "fct-type": "function",
        "title": "balanceReport"
      },
      "index": {
        "description": "Select accounts and get their balances at the end of the selected period and misc display information for an accounts report",
        "hierarchy": "Hledger Reports",
        "module": "Hledger.Reports",
        "name": "balanceReport",
        "normalized": "ReportOpts-\u003eQuery-\u003eJournal-\u003eBalanceReport",
        "package": "hledger-lib",
        "partial": "Report",
        "signature": "ReportOpts-\u003eQuery-\u003eJournal-\u003eBalanceReport"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Reports.html#v:balancetype_",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Hledger.Reports",
        "fct-package": "hledger-lib",
        "fct-signature": "BalanceType",
        "fct-source": "src/Hledger-Reports.html#ReportOpts",
        "fct-type": "function",
        "title": "balancetype_"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Reports",
        "module": "Hledger.Reports",
        "name": "balancetype_",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Reports.html#v:begin_",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Hledger.Reports",
        "fct-package": "hledger-lib",
        "fct-signature": "Maybe Day",
        "fct-source": "src/Hledger-Reports.html#ReportOpts",
        "fct-type": "function",
        "title": "begin_"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Reports",
        "module": "Hledger.Reports",
        "name": "begin_",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Reports.html#v:clearedValueFromOpts",
      "description": {
        "fct-descr": "\u003cp\u003eGet a maybe boolean representing the last cleared/uncleared option if any.\n\u003c/p\u003e",
        "fct-module": "Hledger.Reports",
        "fct-package": "hledger-lib",
        "fct-signature": "ReportOpts -\u003e Maybe Bool",
        "fct-source": "src/Hledger-Reports.html#clearedValueFromOpts",
        "fct-type": "function",
        "title": "clearedValueFromOpts"
      },
      "index": {
        "description": "Get maybe boolean representing the last cleared uncleared option if any",
        "hierarchy": "Hledger Reports",
        "module": "Hledger.Reports",
        "name": "clearedValueFromOpts",
        "normalized": "ReportOpts-\u003eMaybe Bool",
        "package": "hledger-lib",
        "partial": "Value From Opts",
        "signature": "ReportOpts-\u003eMaybe Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Reports.html#v:cleared_",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Hledger.Reports",
        "fct-package": "hledger-lib",
        "fct-signature": "Bool",
        "fct-source": "src/Hledger-Reports.html#ReportOpts",
        "fct-type": "function",
        "title": "cleared_"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Reports",
        "module": "Hledger.Reports",
        "name": "cleared_",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Reports.html#v:cost_",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Hledger.Reports",
        "fct-package": "hledger-lib",
        "fct-signature": "Bool",
        "fct-source": "src/Hledger-Reports.html#ReportOpts",
        "fct-type": "function",
        "title": "cost_"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Reports",
        "module": "Hledger.Reports",
        "name": "cost_",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Reports.html#v:cumulativeOrHistoricalBalanceReport",
      "description": {
        "fct-descr": "\u003cp\u003eSelect accounts and get their ending balance in each period, plus\n account name display information, for a cumulative or historical balance report.\n\u003c/p\u003e",
        "fct-module": "Hledger.Reports",
        "fct-package": "hledger-lib",
        "fct-signature": "ReportOpts -\u003e Query -\u003e Journal -\u003e MultiBalanceReport",
        "fct-source": "src/Hledger-Reports.html#cumulativeOrHistoricalBalanceReport",
        "fct-type": "function",
        "title": "cumulativeOrHistoricalBalanceReport"
      },
      "index": {
        "description": "Select accounts and get their ending balance in each period plus account name display information for cumulative or historical balance report",
        "hierarchy": "Hledger Reports",
        "module": "Hledger.Reports",
        "name": "cumulativeOrHistoricalBalanceReport",
        "normalized": "ReportOpts-\u003eQuery-\u003eJournal-\u003eMultiBalanceReport",
        "package": "hledger-lib",
        "partial": "Or Historical Balance Report",
        "signature": "ReportOpts-\u003eQuery-\u003eJournal-\u003eMultiBalanceReport"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Reports.html#v:daily_",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Hledger.Reports",
        "fct-package": "hledger-lib",
        "fct-signature": "Bool",
        "fct-source": "src/Hledger-Reports.html#ReportOpts",
        "fct-type": "function",
        "title": "daily_"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Reports",
        "module": "Hledger.Reports",
        "name": "daily_",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Reports.html#v:date2_",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Hledger.Reports",
        "fct-package": "hledger-lib",
        "fct-signature": "Bool",
        "fct-source": "src/Hledger-Reports.html#ReportOpts",
        "fct-type": "function",
        "title": "date2_"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Reports",
        "module": "Hledger.Reports",
        "name": "date2_",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Reports.html#v:dateSpanFromOpts",
      "description": {
        "fct-descr": "\u003cp\u003eFigure out the date span we should report on, based on any\n begin\u003cem\u003eend\u003c/em\u003eperiod options provided. A period option will cause begin and\n end options to be ignored.\n\u003c/p\u003e",
        "fct-module": "Hledger.Reports",
        "fct-package": "hledger-lib",
        "fct-signature": "Day -\u003e ReportOpts -\u003e DateSpan",
        "fct-source": "src/Hledger-Reports.html#dateSpanFromOpts",
        "fct-type": "function",
        "title": "dateSpanFromOpts"
      },
      "index": {
        "description": "Figure out the date span we should report on based on any begin end period options provided period option will cause begin and end options to be ignored",
        "hierarchy": "Hledger Reports",
        "module": "Hledger.Reports",
        "name": "dateSpanFromOpts",
        "normalized": "Day-\u003eReportOpts-\u003eDateSpan",
        "package": "hledger-lib",
        "partial": "Span From Opts",
        "signature": "Day-\u003eReportOpts-\u003eDateSpan"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Reports.html#v:defreportopts",
      "description": {
        "fct-module": "Hledger.Reports",
        "fct-package": "hledger-lib",
        "fct-signature": "ReportOpts",
        "fct-source": "src/Hledger-Reports.html#defreportopts",
        "fct-type": "function",
        "title": "defreportopts"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Reports",
        "module": "Hledger.Reports",
        "name": "defreportopts",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Reports.html#v:depth_",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Hledger.Reports",
        "fct-package": "hledger-lib",
        "fct-signature": "Maybe Int",
        "fct-source": "src/Hledger-Reports.html#ReportOpts",
        "fct-type": "function",
        "title": "depth_"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Reports",
        "module": "Hledger.Reports",
        "name": "depth_",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Reports.html#v:display_",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Hledger.Reports",
        "fct-package": "hledger-lib",
        "fct-signature": "Maybe DisplayExp",
        "fct-source": "src/Hledger-Reports.html#ReportOpts",
        "fct-type": "function",
        "title": "display_"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Reports",
        "module": "Hledger.Reports",
        "name": "display_",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Reports.html#v:drop_",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Hledger.Reports",
        "fct-package": "hledger-lib",
        "fct-signature": "Int",
        "fct-source": "src/Hledger-Reports.html#ReportOpts",
        "fct-type": "function",
        "title": "drop_"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Reports",
        "module": "Hledger.Reports",
        "name": "drop_",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Reports.html#v:empty_",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Hledger.Reports",
        "fct-package": "hledger-lib",
        "fct-signature": "Bool",
        "fct-source": "src/Hledger-Reports.html#ReportOpts",
        "fct-type": "function",
        "title": "empty_"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Reports",
        "module": "Hledger.Reports",
        "name": "empty_",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Reports.html#v:end_",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Hledger.Reports",
        "fct-package": "hledger-lib",
        "fct-signature": "Maybe Day",
        "fct-source": "src/Hledger-Reports.html#ReportOpts",
        "fct-type": "function",
        "title": "end_"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Reports",
        "module": "Hledger.Reports",
        "name": "end_",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Reports.html#v:entriesReport",
      "description": {
        "fct-descr": "\u003cp\u003eSelect transactions for an entries report.\n\u003c/p\u003e",
        "fct-module": "Hledger.Reports",
        "fct-package": "hledger-lib",
        "fct-signature": "ReportOpts -\u003e Query -\u003e Journal -\u003e EntriesReport",
        "fct-source": "src/Hledger-Reports.html#entriesReport",
        "fct-type": "function",
        "title": "entriesReport"
      },
      "index": {
        "description": "Select transactions for an entries report",
        "hierarchy": "Hledger Reports",
        "module": "Hledger.Reports",
        "name": "entriesReport",
        "normalized": "ReportOpts-\u003eQuery-\u003eJournal-\u003eEntriesReport",
        "package": "hledger-lib",
        "partial": "Report",
        "signature": "ReportOpts-\u003eQuery-\u003eJournal-\u003eEntriesReport"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Reports.html#v:flat_",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Hledger.Reports",
        "fct-package": "hledger-lib",
        "fct-signature": "Bool",
        "fct-source": "src/Hledger-Reports.html#ReportOpts",
        "fct-type": "function",
        "title": "flat_"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Reports",
        "module": "Hledger.Reports",
        "name": "flat_",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Reports.html#v:format_",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Hledger.Reports",
        "fct-package": "hledger-lib",
        "fct-signature": "Maybe FormatStr",
        "fct-source": "src/Hledger-Reports.html#ReportOpts",
        "fct-type": "function",
        "title": "format_"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Reports",
        "module": "Hledger.Reports",
        "name": "format_",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Reports.html#v:intervalFromOpts",
      "description": {
        "fct-descr": "\u003cp\u003eFigure out the reporting interval, if any, specified by the options.\n --period overrides --daily overrides --weekly overrides --monthly etc.\n\u003c/p\u003e",
        "fct-module": "Hledger.Reports",
        "fct-package": "hledger-lib",
        "fct-signature": "ReportOpts -\u003e Interval",
        "fct-source": "src/Hledger-Reports.html#intervalFromOpts",
        "fct-type": "function",
        "title": "intervalFromOpts"
      },
      "index": {
        "description": "Figure out the reporting interval if any specified by the options period overrides daily overrides weekly overrides monthly etc",
        "hierarchy": "Hledger Reports",
        "module": "Hledger.Reports",
        "name": "intervalFromOpts",
        "normalized": "ReportOpts-\u003eInterval",
        "package": "hledger-lib",
        "partial": "From Opts",
        "signature": "ReportOpts-\u003eInterval"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Reports.html#v:journalSelectingAmountFromOpts",
      "description": {
        "fct-descr": "\u003cp\u003eConvert this journal's postings' amounts to the cost basis amounts if\n specified by options.\n\u003c/p\u003e",
        "fct-module": "Hledger.Reports",
        "fct-package": "hledger-lib",
        "fct-signature": "ReportOpts -\u003e Journal -\u003e Journal",
        "fct-source": "src/Hledger-Reports.html#journalSelectingAmountFromOpts",
        "fct-type": "function",
        "title": "journalSelectingAmountFromOpts"
      },
      "index": {
        "description": "Convert this journal postings amounts to the cost basis amounts if specified by options",
        "hierarchy": "Hledger Reports",
        "module": "Hledger.Reports",
        "name": "journalSelectingAmountFromOpts",
        "normalized": "ReportOpts-\u003eJournal-\u003eJournal",
        "package": "hledger-lib",
        "partial": "Selecting Amount From Opts",
        "signature": "ReportOpts-\u003eJournal-\u003eJournal"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Reports.html#v:journalTransactionsReport",
      "description": {
        "fct-descr": "\u003cp\u003eSelect transactions from the whole journal. This is similar to a\n \u003ca\u003epostingsReport\u003c/a\u003e except with transaction-based report items which\n are ordered most recent first. This is used by eg hledger-web's journal view.\n\u003c/p\u003e",
        "fct-module": "Hledger.Reports",
        "fct-package": "hledger-lib",
        "fct-signature": "ReportOpts -\u003e Journal -\u003e Query -\u003e TransactionsReport",
        "fct-source": "src/Hledger-Reports.html#journalTransactionsReport",
        "fct-type": "function",
        "title": "journalTransactionsReport"
      },
      "index": {
        "description": "Select transactions from the whole journal This is similar to postingsReport except with transaction-based report items which are ordered most recent first This is used by eg hledger-web journal view",
        "hierarchy": "Hledger Reports",
        "module": "Hledger.Reports",
        "name": "journalTransactionsReport",
        "normalized": "ReportOpts-\u003eJournal-\u003eQuery-\u003eTransactionsReport",
        "package": "hledger-lib",
        "partial": "Transactions Report",
        "signature": "ReportOpts-\u003eJournal-\u003eQuery-\u003eTransactionsReport"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Reports.html#v:mkpostingsReportItem",
      "description": {
        "fct-descr": "\u003cp\u003eGenerate one postings report line item, containing the posting,\n the current running balance, and optionally the posting date and/or\n the transaction description.\n\u003c/p\u003e",
        "fct-module": "Hledger.Reports",
        "fct-package": "hledger-lib",
        "fct-signature": "Bool -\u003e Bool -\u003e WhichDate -\u003e Posting -\u003e MixedAmount -\u003e PostingsReportItem",
        "fct-source": "src/Hledger-Reports.html#mkpostingsReportItem",
        "fct-type": "function",
        "title": "mkpostingsReportItem"
      },
      "index": {
        "description": "Generate one postings report line item containing the posting the current running balance and optionally the posting date and or the transaction description",
        "hierarchy": "Hledger Reports",
        "module": "Hledger.Reports",
        "name": "mkpostingsReportItem",
        "normalized": "Bool-\u003eBool-\u003eWhichDate-\u003ePosting-\u003eMixedAmount-\u003ePostingsReportItem",
        "package": "hledger-lib",
        "partial": "Report Item",
        "signature": "Bool-\u003eBool-\u003eWhichDate-\u003ePosting-\u003eMixedAmount-\u003ePostingsReportItem"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Reports.html#v:monthly_",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Hledger.Reports",
        "fct-package": "hledger-lib",
        "fct-signature": "Bool",
        "fct-source": "src/Hledger-Reports.html#ReportOpts",
        "fct-type": "function",
        "title": "monthly_"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Reports",
        "module": "Hledger.Reports",
        "name": "monthly_",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Reports.html#v:no_elide_",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Hledger.Reports",
        "fct-package": "hledger-lib",
        "fct-signature": "Bool",
        "fct-source": "src/Hledger-Reports.html#ReportOpts",
        "fct-type": "function",
        "title": "no_elide_"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Reports",
        "module": "Hledger.Reports",
        "name": "no_elide_",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Reports.html#v:no_total_",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Hledger.Reports",
        "fct-package": "hledger-lib",
        "fct-signature": "Bool",
        "fct-source": "src/Hledger-Reports.html#ReportOpts",
        "fct-type": "function",
        "title": "no_total_"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Reports",
        "module": "Hledger.Reports",
        "name": "no_total_",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Reports.html#v:periodBalanceReport",
      "description": {
        "fct-descr": "\u003cp\u003eSelect accounts and get their period balance (change of balance) in each\n period, plus misc. display information, for a period balance report.\n\u003c/p\u003e",
        "fct-module": "Hledger.Reports",
        "fct-package": "hledger-lib",
        "fct-signature": "ReportOpts -\u003e Query -\u003e Journal -\u003e MultiBalanceReport",
        "fct-source": "src/Hledger-Reports.html#periodBalanceReport",
        "fct-type": "function",
        "title": "periodBalanceReport"
      },
      "index": {
        "description": "Select accounts and get their period balance change of balance in each period plus misc display information for period balance report",
        "hierarchy": "Hledger Reports",
        "module": "Hledger.Reports",
        "name": "periodBalanceReport",
        "normalized": "ReportOpts-\u003eQuery-\u003eJournal-\u003eMultiBalanceReport",
        "package": "hledger-lib",
        "partial": "Balance Report",
        "signature": "ReportOpts-\u003eQuery-\u003eJournal-\u003eMultiBalanceReport"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Reports.html#v:period_",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Hledger.Reports",
        "fct-package": "hledger-lib",
        "fct-signature": "Maybe (Interval, DateSpan)",
        "fct-source": "src/Hledger-Reports.html#ReportOpts",
        "fct-type": "function",
        "title": "period_"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Reports",
        "module": "Hledger.Reports",
        "name": "period_",
        "normalized": "Maybe(Interval,DateSpan)",
        "package": "hledger-lib",
        "partial": "",
        "signature": "Maybe(Interval,DateSpan)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Reports.html#v:postingsReport",
      "description": {
        "fct-descr": "\u003cp\u003eSelect postings from the journal and add running balance and other\n information to make a postings report. Used by eg hledger's register command.\n\u003c/p\u003e",
        "fct-module": "Hledger.Reports",
        "fct-package": "hledger-lib",
        "fct-signature": "ReportOpts -\u003e Query -\u003e Journal -\u003e PostingsReport",
        "fct-source": "src/Hledger-Reports.html#postingsReport",
        "fct-type": "function",
        "title": "postingsReport"
      },
      "index": {
        "description": "Select postings from the journal and add running balance and other information to make postings report Used by eg hledger register command",
        "hierarchy": "Hledger Reports",
        "module": "Hledger.Reports",
        "name": "postingsReport",
        "normalized": "ReportOpts-\u003eQuery-\u003eJournal-\u003ePostingsReport",
        "package": "hledger-lib",
        "partial": "Report",
        "signature": "ReportOpts-\u003eQuery-\u003eJournal-\u003ePostingsReport"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Reports.html#v:quarterly_",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Hledger.Reports",
        "fct-package": "hledger-lib",
        "fct-signature": "Bool",
        "fct-source": "src/Hledger-Reports.html#ReportOpts",
        "fct-type": "function",
        "title": "quarterly_"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Reports",
        "module": "Hledger.Reports",
        "name": "quarterly_",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Reports.html#v:queryFromOpts",
      "description": {
        "fct-descr": "\u003cp\u003eConvert report options and arguments to a query.\n\u003c/p\u003e",
        "fct-module": "Hledger.Reports",
        "fct-package": "hledger-lib",
        "fct-signature": "Day -\u003e ReportOpts -\u003e Query",
        "fct-source": "src/Hledger-Reports.html#queryFromOpts",
        "fct-type": "function",
        "title": "queryFromOpts"
      },
      "index": {
        "description": "Convert report options and arguments to query",
        "hierarchy": "Hledger Reports",
        "module": "Hledger.Reports",
        "name": "queryFromOpts",
        "normalized": "Day-\u003eReportOpts-\u003eQuery",
        "package": "hledger-lib",
        "partial": "From Opts",
        "signature": "Day-\u003eReportOpts-\u003eQuery"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Reports.html#v:queryOptsFromOpts",
      "description": {
        "fct-descr": "\u003cp\u003eConvert report options and arguments to query options.\n\u003c/p\u003e",
        "fct-module": "Hledger.Reports",
        "fct-package": "hledger-lib",
        "fct-signature": "Day -\u003e ReportOpts -\u003e [QueryOpt]",
        "fct-source": "src/Hledger-Reports.html#queryOptsFromOpts",
        "fct-type": "function",
        "title": "queryOptsFromOpts"
      },
      "index": {
        "description": "Convert report options and arguments to query options",
        "hierarchy": "Hledger Reports",
        "module": "Hledger.Reports",
        "name": "queryOptsFromOpts",
        "normalized": "Day-\u003eReportOpts-\u003e[QueryOpt]",
        "package": "hledger-lib",
        "partial": "Opts From Opts",
        "signature": "Day-\u003eReportOpts-\u003e[QueryOpt]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Reports.html#v:query_",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Hledger.Reports",
        "fct-package": "hledger-lib",
        "fct-signature": "String",
        "fct-source": "src/Hledger-Reports.html#ReportOpts",
        "fct-type": "function",
        "title": "query_"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Reports",
        "module": "Hledger.Reports",
        "name": "query_",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Reports.html#v:real_",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Hledger.Reports",
        "fct-package": "hledger-lib",
        "fct-signature": "Bool",
        "fct-source": "src/Hledger-Reports.html#ReportOpts",
        "fct-type": "function",
        "title": "real_"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Reports",
        "module": "Hledger.Reports",
        "name": "real_",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Reports.html#v:related_",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Hledger.Reports",
        "fct-package": "hledger-lib",
        "fct-signature": "Bool",
        "fct-source": "src/Hledger-Reports.html#ReportOpts",
        "fct-type": "function",
        "title": "related_"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Reports",
        "module": "Hledger.Reports",
        "name": "related_",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Reports.html#v:reportSpans",
      "description": {
        "fct-descr": "\u003cp\u003eCalculate the overall span and per-period date spans for a report\n based on command-line options, the parsed search query, and the\n journal data. If a reporting interval is specified, the report span\n will be enlarged to include a whole number of report periods.\n Reports will sometimes trim these spans further when appropriate.\n\u003c/p\u003e",
        "fct-module": "Hledger.Reports",
        "fct-package": "hledger-lib",
        "fct-signature": "ReportOpts -\u003e Query -\u003e Journal -\u003e (DateSpan, [DateSpan])",
        "fct-source": "src/Hledger-Reports.html#reportSpans",
        "fct-type": "function",
        "title": "reportSpans"
      },
      "index": {
        "description": "Calculate the overall span and per-period date spans for report based on command-line options the parsed search query and the journal data If reporting interval is specified the report span will be enlarged to include whole number of report periods Reports will sometimes trim these spans further when appropriate",
        "hierarchy": "Hledger Reports",
        "module": "Hledger.Reports",
        "name": "reportSpans",
        "normalized": "ReportOpts-\u003eQuery-\u003eJournal-\u003e(DateSpan,[DateSpan])",
        "package": "hledger-lib",
        "partial": "Spans",
        "signature": "ReportOpts-\u003eQuery-\u003eJournal-\u003e(DateSpan,[DateSpan])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Reports.html#v:tests_Hledger_Reports",
      "description": {
        "fct-module": "Hledger.Reports",
        "fct-package": "hledger-lib",
        "fct-signature": "Test",
        "fct-source": "src/Hledger-Reports.html#tests_Hledger_Reports",
        "fct-type": "function",
        "title": "tests_Hledger_Reports"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Reports",
        "module": "Hledger.Reports",
        "name": "tests_Hledger_Reports",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "Hledger Reports",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Reports.html#v:transactionsReportByCommodity",
      "description": {
        "fct-module": "Hledger.Reports",
        "fct-package": "hledger-lib",
        "fct-signature": "TransactionsReport -\u003e [TransactionsReport]",
        "fct-source": "src/Hledger-Reports.html#transactionsReportByCommodity",
        "fct-type": "function",
        "title": "transactionsReportByCommodity"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Reports",
        "module": "Hledger.Reports",
        "name": "transactionsReportByCommodity",
        "normalized": "TransactionsReport-\u003e[TransactionsReport]",
        "package": "hledger-lib",
        "partial": "Report By Commodity",
        "signature": "TransactionsReport-\u003e[TransactionsReport]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Reports.html#v:triBalance",
      "description": {
        "fct-module": "Hledger.Reports",
        "fct-package": "hledger-lib",
        "fct-signature": "(t, t1, t2, t3, t4, t5) -\u003e t5",
        "fct-source": "src/Hledger-Reports.html#triBalance",
        "fct-type": "function",
        "title": "triBalance"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Reports",
        "module": "Hledger.Reports",
        "name": "triBalance",
        "normalized": "(a,a,a,a,a,a)-\u003ea",
        "package": "hledger-lib",
        "partial": "Balance",
        "signature": "(t,t,t,t,t,t)-\u003et"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Reports.html#v:triDate",
      "description": {
        "fct-module": "Hledger.Reports",
        "fct-package": "hledger-lib",
        "fct-signature": "(Transaction, t, t1, t2, t3, t4) -\u003e Day",
        "fct-source": "src/Hledger-Reports.html#triDate",
        "fct-type": "function",
        "title": "triDate"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Reports",
        "module": "Hledger.Reports",
        "name": "triDate",
        "normalized": "(Transaction,a,a,a,a,a)-\u003eDay",
        "package": "hledger-lib",
        "partial": "Date",
        "signature": "(Transaction,t,t,t,t,t)-\u003eDay"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Reports.html#v:triSimpleBalance",
      "description": {
        "fct-module": "Hledger.Reports",
        "fct-package": "hledger-lib",
        "fct-signature": "(t, t1, t2, t3, t4, MixedAmount) -\u003e [Char]",
        "fct-source": "src/Hledger-Reports.html#triSimpleBalance",
        "fct-type": "function",
        "title": "triSimpleBalance"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Reports",
        "module": "Hledger.Reports",
        "name": "triSimpleBalance",
        "normalized": "(a,a,a,a,a,MixedAmount)-\u003e[Char]",
        "package": "hledger-lib",
        "partial": "Simple Balance",
        "signature": "(t,t,t,t,t,MixedAmount)-\u003e[Char]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Reports.html#v:uncleared_",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Hledger.Reports",
        "fct-package": "hledger-lib",
        "fct-signature": "Bool",
        "fct-source": "src/Hledger-Reports.html#ReportOpts",
        "fct-type": "function",
        "title": "uncleared_"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Reports",
        "module": "Hledger.Reports",
        "name": "uncleared_",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Reports.html#v:weekly_",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Hledger.Reports",
        "fct-package": "hledger-lib",
        "fct-signature": "Bool",
        "fct-source": "src/Hledger-Reports.html#ReportOpts",
        "fct-type": "function",
        "title": "weekly_"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Reports",
        "module": "Hledger.Reports",
        "name": "weekly_",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Reports.html#v:whichDateFromOpts",
      "description": {
        "fct-descr": "\u003cp\u003eReport which date we will report on based on --date2.\n\u003c/p\u003e",
        "fct-module": "Hledger.Reports",
        "fct-package": "hledger-lib",
        "fct-signature": "ReportOpts -\u003e WhichDate",
        "fct-source": "src/Hledger-Reports.html#whichDateFromOpts",
        "fct-type": "function",
        "title": "whichDateFromOpts"
      },
      "index": {
        "description": "Report which date we will report on based on date2",
        "hierarchy": "Hledger Reports",
        "module": "Hledger.Reports",
        "name": "whichDateFromOpts",
        "normalized": "ReportOpts-\u003eWhichDate",
        "package": "hledger-lib",
        "partial": "Date From Opts",
        "signature": "ReportOpts-\u003eWhichDate"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Reports.html#v:yearly_",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Hledger.Reports",
        "fct-package": "hledger-lib",
        "fct-signature": "Bool",
        "fct-source": "src/Hledger-Reports.html#ReportOpts",
        "fct-type": "function",
        "title": "yearly_"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Reports",
        "module": "Hledger.Reports",
        "name": "yearly_",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Utils-UTF8IOCompat.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eUTF-8 aware string IO functions that will work across multiple platforms\nand GHC versions. Includes code from Text.Pandoc.UTF8 ((C) 2010 John\nMacFarlane).\n\u003c/p\u003e\u003cp\u003eExample usage:\n\u003c/p\u003e\u003cp\u003eimport Prelude hiding (readFile,writeFile,appendFile,getContents,putStr,putStrLn)\n import UTF8IOCompat   (readFile,writeFile,appendFile,getContents,putStr,putStrLn)\n import UTF8IOCompat   (SystemString,fromSystemString,toSystemString,error',userError')\n\u003c/p\u003e\u003cp\u003e2013\u003cem\u003e4\u003c/em\u003e10 update: we now trust that current GHC versions & platforms\ndo the right thing, so this file is a no-op and on its way to being removed.\nNot carefully tested.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Hledger.Utils.UTF8IOCompat",
        "fct-package": "hledger-lib",
        "fct-signature": "module",
        "fct-source": "src/Hledger-Utils-UTF8IOCompat.html",
        "fct-type": "module",
        "title": "UTF8IOCompat"
      },
      "index": {
        "description": "UTF-8 aware string IO functions that will work across multiple platforms and GHC versions Includes code from Text.Pandoc.UTF8 John MacFarlane Example usage import Prelude hiding readFile writeFile appendFile getContents putStr putStrLn import UTF8IOCompat readFile writeFile appendFile getContents putStr putStrLn import UTF8IOCompat SystemString fromSystemString toSystemString error userError update we now trust that current GHC versions platforms do the right thing so this file is no-op and on its way to being removed Not carefully tested",
        "hierarchy": "Hledger Utils UTF8IOCompat",
        "module": "Hledger.Utils.UTF8IOCompat",
        "name": "UTF8IOCompat",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "UTF IOCompat",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Utils-UTF8IOCompat.html#t:SystemString",
      "description": {
        "fct-descr": "\u003cp\u003eA string received from or being passed to the operating system, such\n as a file path, command-line argument, or environment variable name or\n value. With GHC versions before 7.2 on some platforms (posix) these are\n typically encoded. When converting, we assume the encoding is UTF-8 (cf\n \u003ca\u003ehttp://www.dwheeler.com/essays/fixing-unix-linux-filenames.html#UTF8\u003c/a\u003e).\n\u003c/p\u003e",
        "fct-module": "Hledger.Utils.UTF8IOCompat",
        "fct-package": "hledger-lib",
        "fct-signature": "type",
        "fct-source": "src/Hledger-Utils-UTF8IOCompat.html#SystemString",
        "fct-type": "type",
        "title": "SystemString"
      },
      "index": {
        "description": "string received from or being passed to the operating system such as file path command-line argument or environment variable name or value With GHC versions before on some platforms posix these are typically encoded When converting we assume the encoding is UTF-8 cf http www.dwheeler.com essays fixing-unix-linux-filenames.html UTF8",
        "hierarchy": "Hledger Utils UTF8IOCompat",
        "module": "Hledger.Utils.UTF8IOCompat",
        "name": "SystemString",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "System String",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Utils-UTF8IOCompat.html#v:appendFile",
      "description": {
        "fct-descr": "\u003cp\u003eThe computation \u003ccode\u003e\u003ca\u003eappendFile\u003c/a\u003e\u003c/code\u003e \u003ccode\u003efile str\u003c/code\u003e function appends the string \u003ccode\u003estr\u003c/code\u003e,\n to the file \u003ccode\u003efile\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNote that \u003ccode\u003e\u003ca\u003ewriteFile\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eappendFile\u003c/a\u003e\u003c/code\u003e write a literal string\n to a file.  To write a value of any printable type, as with \u003ccode\u003e\u003ca\u003eprint\u003c/a\u003e\u003c/code\u003e,\n use the \u003ccode\u003e\u003ca\u003eshow\u003c/a\u003e\u003c/code\u003e function to convert the value to a string first.\n\u003c/p\u003e\u003cpre\u003e main = appendFile \"squares\" (show [(x,x*x) | x \u003c- [0,0.1..2]])\n\u003c/pre\u003e",
        "fct-module": "Hledger.Utils.UTF8IOCompat",
        "fct-package": "hledger-lib",
        "fct-signature": "FilePath -\u003e String -\u003e IO ()",
        "fct-type": "function",
        "title": "appendFile"
      },
      "index": {
        "description": "The computation appendFile file str function appends the string str to the file file Note that writeFile and appendFile write literal string to file To write value of any printable type as with print use the show function to convert the value to string first main appendFile squares show",
        "hierarchy": "Hledger Utils UTF8IOCompat",
        "module": "Hledger.Utils.UTF8IOCompat",
        "name": "appendFile",
        "normalized": "FilePath-\u003eString-\u003eIO()",
        "package": "hledger-lib",
        "partial": "File",
        "signature": "FilePath-\u003eString-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Utils-UTF8IOCompat.html#v:error-39-",
      "description": {
        "fct-descr": "\u003cp\u003eA SystemString-aware version of error.\n\u003c/p\u003e",
        "fct-module": "Hledger.Utils.UTF8IOCompat",
        "fct-package": "hledger-lib",
        "fct-signature": "String -\u003e a",
        "fct-source": "src/Hledger-Utils-UTF8IOCompat.html#error%27",
        "fct-type": "function",
        "title": "error'"
      },
      "index": {
        "description": "SystemString-aware version of error",
        "hierarchy": "Hledger Utils UTF8IOCompat",
        "module": "Hledger.Utils.UTF8IOCompat",
        "name": "error'",
        "normalized": "String-\u003ea",
        "package": "hledger-lib",
        "partial": "",
        "signature": "String-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Utils-UTF8IOCompat.html#v:fromSystemString",
      "description": {
        "fct-descr": "\u003cp\u003eConvert a system string to an ordinary string, decoding from UTF-8 if\n it appears to be UTF8-encoded and GHC version is less than 7.2.\n\u003c/p\u003e",
        "fct-module": "Hledger.Utils.UTF8IOCompat",
        "fct-package": "hledger-lib",
        "fct-signature": "SystemString -\u003e String",
        "fct-source": "src/Hledger-Utils-UTF8IOCompat.html#fromSystemString",
        "fct-type": "function",
        "title": "fromSystemString"
      },
      "index": {
        "description": "Convert system string to an ordinary string decoding from UTF-8 if it appears to be UTF8-encoded and GHC version is less than",
        "hierarchy": "Hledger Utils UTF8IOCompat",
        "module": "Hledger.Utils.UTF8IOCompat",
        "name": "fromSystemString",
        "normalized": "SystemString-\u003eString",
        "package": "hledger-lib",
        "partial": "System String",
        "signature": "SystemString-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Utils-UTF8IOCompat.html#v:getContents",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003egetContents\u003c/a\u003e\u003c/code\u003e operation returns all user input as a single string,\n which is read lazily as it is needed\n (same as \u003ccode\u003e\u003ca\u003ehGetContents\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003estdin\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
        "fct-module": "Hledger.Utils.UTF8IOCompat",
        "fct-package": "hledger-lib",
        "fct-signature": "IO String",
        "fct-type": "function",
        "title": "getContents"
      },
      "index": {
        "description": "The getContents operation returns all user input as single string which is read lazily as it is needed same as hGetContents stdin",
        "hierarchy": "Hledger Utils UTF8IOCompat",
        "module": "Hledger.Utils.UTF8IOCompat",
        "name": "getContents",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "Contents",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Utils-UTF8IOCompat.html#v:hGetContents",
      "description": {
        "fct-descr": "\u003cp\u003eComputation \u003ccode\u003e\u003ca\u003ehGetContents\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ehdl\u003c/code\u003e returns the list of characters\n corresponding to the unread portion of the channel or file managed\n by \u003ccode\u003ehdl\u003c/code\u003e, which is put into an intermediate state, \u003cem\u003esemi-closed\u003c/em\u003e.\n In this state, \u003ccode\u003ehdl\u003c/code\u003e is effectively closed,\n but items are read from \u003ccode\u003ehdl\u003c/code\u003e on demand and accumulated in a special\n list returned by \u003ccode\u003e\u003ca\u003ehGetContents\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ehdl\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eAny operation that fails because a handle is closed,\n also fails if a handle is semi-closed.  The only exception is \u003ccode\u003ehClose\u003c/code\u003e.\n A semi-closed handle becomes closed:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e if \u003ccode\u003ehClose\u003c/code\u003e is applied to it;\n\u003c/li\u003e\u003cli\u003e if an I/O error occurs when reading an item from the handle;\n\u003c/li\u003e\u003cli\u003e or once the entire contents of the handle has been read.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eOnce a semi-closed handle becomes closed, the contents of the\n associated list becomes fixed.  The contents of this final list is\n only partially specified: it will contain at least all the items of\n the stream that were evaluated prior to the handle becoming closed.\n\u003c/p\u003e\u003cp\u003eAny I/O errors encountered while a handle is semi-closed are simply\n discarded.\n\u003c/p\u003e\u003cp\u003eThis operation may fail with:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eisEOFError\u003c/a\u003e\u003c/code\u003e if the end of file has been reached.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Hledger.Utils.UTF8IOCompat",
        "fct-package": "hledger-lib",
        "fct-signature": "Handle -\u003e IO String",
        "fct-type": "function",
        "title": "hGetContents"
      },
      "index": {
        "description": "Computation hGetContents hdl returns the list of characters corresponding to the unread portion of the channel or file managed by hdl which is put into an intermediate state semi-closed In this state hdl is effectively closed but items are read from hdl on demand and accumulated in special list returned by hGetContents hdl Any operation that fails because handle is closed also fails if handle is semi-closed The only exception is hClose semi-closed handle becomes closed if hClose is applied to it if an error occurs when reading an item from the handle or once the entire contents of the handle has been read Once semi-closed handle becomes closed the contents of the associated list becomes fixed The contents of this final list is only partially specified it will contain at least all the items of the stream that were evaluated prior to the handle becoming closed Any errors encountered while handle is semi-closed are simply discarded This operation may fail with isEOFError if the end of file has been reached",
        "hierarchy": "Hledger Utils UTF8IOCompat",
        "module": "Hledger.Utils.UTF8IOCompat",
        "name": "hGetContents",
        "normalized": "Handle-\u003eIO String",
        "package": "hledger-lib",
        "partial": "Get Contents",
        "signature": "Handle-\u003eIO String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Utils-UTF8IOCompat.html#v:hPutStr",
      "description": {
        "fct-descr": "\u003cp\u003eComputation \u003ccode\u003e\u003ca\u003ehPutStr\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ehdl s\u003c/code\u003e writes the string\n \u003ccode\u003es\u003c/code\u003e to the file or channel managed by \u003ccode\u003ehdl\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis operation may fail with:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eisFullError\u003c/a\u003e\u003c/code\u003e if the device is full; or\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eisPermissionError\u003c/a\u003e\u003c/code\u003e if another system resource limit would be exceeded.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Hledger.Utils.UTF8IOCompat",
        "fct-package": "hledger-lib",
        "fct-signature": "Handle -\u003e String -\u003e IO ()",
        "fct-type": "function",
        "title": "hPutStr"
      },
      "index": {
        "description": "Computation hPutStr hdl writes the string to the file or channel managed by hdl This operation may fail with isFullError if the device is full or isPermissionError if another system resource limit would be exceeded",
        "hierarchy": "Hledger Utils UTF8IOCompat",
        "module": "Hledger.Utils.UTF8IOCompat",
        "name": "hPutStr",
        "normalized": "Handle-\u003eString-\u003eIO()",
        "package": "hledger-lib",
        "partial": "Put Str",
        "signature": "Handle-\u003eString-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Utils-UTF8IOCompat.html#v:hPutStrLn",
      "description": {
        "fct-descr": "\u003cp\u003eThe same as \u003ccode\u003e\u003ca\u003ehPutStr\u003c/a\u003e\u003c/code\u003e, but adds a newline character.\n\u003c/p\u003e",
        "fct-module": "Hledger.Utils.UTF8IOCompat",
        "fct-package": "hledger-lib",
        "fct-signature": "Handle -\u003e String -\u003e IO ()",
        "fct-type": "function",
        "title": "hPutStrLn"
      },
      "index": {
        "description": "The same as hPutStr but adds newline character",
        "hierarchy": "Hledger Utils UTF8IOCompat",
        "module": "Hledger.Utils.UTF8IOCompat",
        "name": "hPutStrLn",
        "normalized": "Handle-\u003eString-\u003eIO()",
        "package": "hledger-lib",
        "partial": "Put Str Ln",
        "signature": "Handle-\u003eString-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Utils-UTF8IOCompat.html#v:putStr",
      "description": {
        "fct-descr": "\u003cp\u003eWrite a string to the standard output device\n (same as \u003ccode\u003e\u003ca\u003ehPutStr\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003estdout\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
        "fct-module": "Hledger.Utils.UTF8IOCompat",
        "fct-package": "hledger-lib",
        "fct-signature": "String -\u003e IO ()",
        "fct-type": "function",
        "title": "putStr"
      },
      "index": {
        "description": "Write string to the standard output device same as hPutStr stdout",
        "hierarchy": "Hledger Utils UTF8IOCompat",
        "module": "Hledger.Utils.UTF8IOCompat",
        "name": "putStr",
        "normalized": "String-\u003eIO()",
        "package": "hledger-lib",
        "partial": "Str",
        "signature": "String-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Utils-UTF8IOCompat.html#v:putStrLn",
      "description": {
        "fct-descr": "\u003cp\u003eThe same as \u003ccode\u003e\u003ca\u003eputStr\u003c/a\u003e\u003c/code\u003e, but adds a newline character.\n\u003c/p\u003e",
        "fct-module": "Hledger.Utils.UTF8IOCompat",
        "fct-package": "hledger-lib",
        "fct-signature": "String -\u003e IO ()",
        "fct-type": "function",
        "title": "putStrLn"
      },
      "index": {
        "description": "The same as putStr but adds newline character",
        "hierarchy": "Hledger Utils UTF8IOCompat",
        "module": "Hledger.Utils.UTF8IOCompat",
        "name": "putStrLn",
        "normalized": "String-\u003eIO()",
        "package": "hledger-lib",
        "partial": "Str Ln",
        "signature": "String-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Utils-UTF8IOCompat.html#v:readFile",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ereadFile\u003c/a\u003e\u003c/code\u003e function reads a file and\n returns the contents of the file as a string.\n The file is read lazily, on demand, as with \u003ccode\u003e\u003ca\u003egetContents\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Hledger.Utils.UTF8IOCompat",
        "fct-package": "hledger-lib",
        "fct-signature": "FilePath -\u003e IO String",
        "fct-type": "function",
        "title": "readFile"
      },
      "index": {
        "description": "The readFile function reads file and returns the contents of the file as string The file is read lazily on demand as with getContents",
        "hierarchy": "Hledger Utils UTF8IOCompat",
        "module": "Hledger.Utils.UTF8IOCompat",
        "name": "readFile",
        "normalized": "FilePath-\u003eIO String",
        "package": "hledger-lib",
        "partial": "File",
        "signature": "FilePath-\u003eIO String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Utils-UTF8IOCompat.html#v:toSystemString",
      "description": {
        "fct-descr": "\u003cp\u003eConvert a unicode string to a system string, encoding with UTF-8 if\n we are on a posix platform with GHC \u003c 7.2.\n\u003c/p\u003e",
        "fct-module": "Hledger.Utils.UTF8IOCompat",
        "fct-package": "hledger-lib",
        "fct-signature": "String -\u003e SystemString",
        "fct-source": "src/Hledger-Utils-UTF8IOCompat.html#toSystemString",
        "fct-type": "function",
        "title": "toSystemString"
      },
      "index": {
        "description": "Convert unicode string to system string encoding with UTF-8 if we are on posix platform with GHC",
        "hierarchy": "Hledger Utils UTF8IOCompat",
        "module": "Hledger.Utils.UTF8IOCompat",
        "name": "toSystemString",
        "normalized": "String-\u003eSystemString",
        "package": "hledger-lib",
        "partial": "System String",
        "signature": "String-\u003eSystemString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Utils-UTF8IOCompat.html#v:userError-39-",
      "description": {
        "fct-descr": "\u003cp\u003eA SystemString-aware version of userError.\n\u003c/p\u003e",
        "fct-module": "Hledger.Utils.UTF8IOCompat",
        "fct-package": "hledger-lib",
        "fct-signature": "String -\u003e IOError",
        "fct-source": "src/Hledger-Utils-UTF8IOCompat.html#userError%27",
        "fct-type": "function",
        "title": "userError'"
      },
      "index": {
        "description": "SystemString-aware version of userError",
        "hierarchy": "Hledger Utils UTF8IOCompat",
        "module": "Hledger.Utils.UTF8IOCompat",
        "name": "userError'",
        "normalized": "String-\u003eIOError",
        "package": "hledger-lib",
        "partial": "Error'",
        "signature": "String-\u003eIOError"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Utils-UTF8IOCompat.html#v:writeFile",
      "description": {
        "fct-descr": "\u003cp\u003eThe computation \u003ccode\u003e\u003ca\u003ewriteFile\u003c/a\u003e\u003c/code\u003e \u003ccode\u003efile str\u003c/code\u003e function writes the string \u003ccode\u003estr\u003c/code\u003e,\n to the file \u003ccode\u003efile\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Hledger.Utils.UTF8IOCompat",
        "fct-package": "hledger-lib",
        "fct-signature": "FilePath -\u003e String -\u003e IO ()",
        "fct-type": "function",
        "title": "writeFile"
      },
      "index": {
        "description": "The computation writeFile file str function writes the string str to the file file",
        "hierarchy": "Hledger Utils UTF8IOCompat",
        "module": "Hledger.Utils.UTF8IOCompat",
        "name": "writeFile",
        "normalized": "FilePath-\u003eString-\u003eIO()",
        "package": "hledger-lib",
        "partial": "File",
        "signature": "FilePath-\u003eString-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Utils.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eStandard imports and utilities which are useful everywhere, or needed low\nin the module hierarchy. This is the bottom of hledger's module graph.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Hledger.Utils",
        "fct-package": "hledger-lib",
        "fct-signature": "module",
        "fct-source": "src/Hledger-Utils.html",
        "fct-type": "module",
        "title": "Utils"
      },
      "index": {
        "description": "Standard imports and utilities which are useful everywhere or needed low in the module hierarchy This is the bottom of hledger module graph",
        "hierarchy": "Hledger Utils",
        "module": "Hledger.Utils",
        "name": "Utils",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "Utils",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Utils.html#t:FastTree",
      "description": {
        "fct-descr": "\u003cp\u003eAn efficient-to-build tree suggested by Cale Gibbard, probably\n better than accountNameTreeFrom.\n\u003c/p\u003e",
        "fct-module": "Hledger.Utils",
        "fct-package": "hledger-lib",
        "fct-signature": "newtype",
        "fct-source": "src/Hledger-Utils.html#FastTree",
        "fct-type": "newtype",
        "title": "FastTree"
      },
      "index": {
        "description": "An efficient-to-build tree suggested by Cale Gibbard probably better than accountNameTreeFrom",
        "hierarchy": "Hledger Utils",
        "module": "Hledger.Utils",
        "name": "FastTree",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "Fast Tree",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Utils.html#t:SystemString",
      "description": {
        "fct-descr": "\u003cp\u003eA string received from or being passed to the operating system, such\n as a file path, command-line argument, or environment variable name or\n value. With GHC versions before 7.2 on some platforms (posix) these are\n typically encoded. When converting, we assume the encoding is UTF-8 (cf\n \u003ca\u003ehttp://www.dwheeler.com/essays/fixing-unix-linux-filenames.html#UTF8\u003c/a\u003e).\n\u003c/p\u003e",
        "fct-module": "Hledger.Utils",
        "fct-package": "hledger-lib",
        "fct-signature": "type",
        "fct-source": "src/Hledger-Utils-UTF8IOCompat.html#SystemString",
        "fct-type": "type",
        "title": "SystemString"
      },
      "index": {
        "description": "string received from or being passed to the operating system such as file path command-line argument or environment variable name or value With GHC versions before on some platforms posix these are typically encoded When converting we assume the encoding is UTF-8 cf http www.dwheeler.com essays fixing-unix-linux-filenames.html UTF8",
        "hierarchy": "Hledger Utils",
        "module": "Hledger.Utils",
        "name": "SystemString",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "System String",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Utils.html#v:T",
      "description": {
        "fct-module": "Hledger.Utils",
        "fct-package": "hledger-lib",
        "fct-signature": "T (Map a (FastTree a))",
        "fct-source": "src/Hledger-Utils.html#FastTree",
        "fct-type": "function",
        "title": "T"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Utils",
        "module": "Hledger.Utils",
        "name": "T",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Utils.html#v:applyN",
      "description": {
        "fct-descr": "\u003cp\u003eApply a function the specified number of times. Possibly uses O(n) stack ?\n\u003c/p\u003e",
        "fct-module": "Hledger.Utils",
        "fct-package": "hledger-lib",
        "fct-signature": "Int -\u003e (a -\u003e a) -\u003e a -\u003e a",
        "fct-source": "src/Hledger-Utils.html#applyN",
        "fct-type": "function",
        "title": "applyN"
      },
      "index": {
        "description": "Apply function the specified number of times Possibly uses stack",
        "hierarchy": "Hledger Utils",
        "module": "Hledger.Utils",
        "name": "applyN",
        "normalized": "Int-\u003e(a-\u003ea)-\u003ea-\u003ea",
        "package": "hledger-lib",
        "partial": "",
        "signature": "Int-\u003e(a-\u003ea)-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Utils.html#v:assertParse",
      "description": {
        "fct-descr": "\u003cp\u003eAssert a parse result is successful, printing the parse error on failure.\n\u003c/p\u003e",
        "fct-module": "Hledger.Utils",
        "fct-package": "hledger-lib",
        "fct-signature": "Either ParseError a -\u003e Assertion",
        "fct-source": "src/Hledger-Utils.html#assertParse",
        "fct-type": "function",
        "title": "assertParse"
      },
      "index": {
        "description": "Assert parse result is successful printing the parse error on failure",
        "hierarchy": "Hledger Utils",
        "module": "Hledger.Utils",
        "name": "assertParse",
        "normalized": "Either ParseError a-\u003eAssertion",
        "package": "hledger-lib",
        "partial": "Parse",
        "signature": "Either ParseError a-\u003eAssertion"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Utils.html#v:assertParseEqual",
      "description": {
        "fct-descr": "\u003cp\u003eAssert a parse result is some expected value, printing the parse error on failure.\n\u003c/p\u003e",
        "fct-module": "Hledger.Utils",
        "fct-package": "hledger-lib",
        "fct-signature": "Either ParseError a -\u003e a -\u003e Assertion",
        "fct-source": "src/Hledger-Utils.html#assertParseEqual",
        "fct-type": "function",
        "title": "assertParseEqual"
      },
      "index": {
        "description": "Assert parse result is some expected value printing the parse error on failure",
        "hierarchy": "Hledger Utils",
        "module": "Hledger.Utils",
        "name": "assertParseEqual",
        "normalized": "Either ParseError a-\u003ea-\u003eAssertion",
        "package": "hledger-lib",
        "partial": "Parse Equal",
        "signature": "Either ParseError a-\u003ea-\u003eAssertion"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Utils.html#v:assertParseFailure",
      "description": {
        "fct-descr": "\u003cp\u003eAssert a parse result is successful, printing the parse error on failure.\n\u003c/p\u003e",
        "fct-module": "Hledger.Utils",
        "fct-package": "hledger-lib",
        "fct-signature": "Either ParseError a -\u003e Assertion",
        "fct-source": "src/Hledger-Utils.html#assertParseFailure",
        "fct-type": "function",
        "title": "assertParseFailure"
      },
      "index": {
        "description": "Assert parse result is successful printing the parse error on failure",
        "hierarchy": "Hledger Utils",
        "module": "Hledger.Utils",
        "name": "assertParseFailure",
        "normalized": "Either ParseError a-\u003eAssertion",
        "package": "hledger-lib",
        "partial": "Parse Failure",
        "signature": "Either ParseError a-\u003eAssertion"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Utils.html#v:branches",
      "description": {
        "fct-module": "Hledger.Utils",
        "fct-package": "hledger-lib",
        "fct-signature": "Tree a -\u003e Forest a",
        "fct-source": "src/Hledger-Utils.html#branches",
        "fct-type": "function",
        "title": "branches"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Utils",
        "module": "Hledger.Utils",
        "name": "branches",
        "normalized": "Tree a-\u003eForest a",
        "package": "hledger-lib",
        "partial": "",
        "signature": "Tree a-\u003eForest a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Utils.html#v:choice-39-",
      "description": {
        "fct-descr": "\u003cp\u003eBacktracking choice, use this when alternatives share a prefix.\n Consumes no input if all choices fail.\n\u003c/p\u003e",
        "fct-module": "Hledger.Utils",
        "fct-package": "hledger-lib",
        "fct-signature": "[GenParser tok st a] -\u003e GenParser tok st a",
        "fct-source": "src/Hledger-Utils.html#choice%27",
        "fct-type": "function",
        "title": "choice'"
      },
      "index": {
        "description": "Backtracking choice use this when alternatives share prefix Consumes no input if all choices fail",
        "hierarchy": "Hledger Utils",
        "module": "Hledger.Utils",
        "name": "choice'",
        "normalized": "[GenParser a b c]-\u003eGenParser a b c",
        "package": "hledger-lib",
        "partial": "",
        "signature": "[GenParser tok st a]-\u003eGenParser tok st a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Utils.html#v:cliptopleft",
      "description": {
        "fct-descr": "\u003cp\u003eClip a multi-line string to the specified width and height from the top left.\n\u003c/p\u003e",
        "fct-module": "Hledger.Utils",
        "fct-package": "hledger-lib",
        "fct-signature": "Int -\u003e Int -\u003e String -\u003e String",
        "fct-source": "src/Hledger-Utils.html#cliptopleft",
        "fct-type": "function",
        "title": "cliptopleft"
      },
      "index": {
        "description": "Clip multi-line string to the specified width and height from the top left",
        "hierarchy": "Hledger Utils",
        "module": "Hledger.Utils",
        "name": "cliptopleft",
        "normalized": "Int-\u003eInt-\u003eString-\u003eString",
        "package": "hledger-lib",
        "partial": "",
        "signature": "Int-\u003eInt-\u003eString-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Utils.html#v:concatBottomPadded",
      "description": {
        "fct-descr": "\u003cp\u003eJoin multi-line strings as side-by-side rectangular strings of the same height, bottom-padded.\n\u003c/p\u003e",
        "fct-module": "Hledger.Utils",
        "fct-package": "hledger-lib",
        "fct-signature": "[String] -\u003e String",
        "fct-source": "src/Hledger-Utils.html#concatBottomPadded",
        "fct-type": "function",
        "title": "concatBottomPadded"
      },
      "index": {
        "description": "Join multi-line strings as side-by-side rectangular strings of the same height bottom-padded",
        "hierarchy": "Hledger Utils",
        "module": "Hledger.Utils",
        "name": "concatBottomPadded",
        "normalized": "[String]-\u003eString",
        "package": "hledger-lib",
        "partial": "Bottom Padded",
        "signature": "[String]-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Utils.html#v:concatTopPadded",
      "description": {
        "fct-descr": "\u003cp\u003eJoin multi-line strings as side-by-side rectangular strings of the same height, top-padded.\n\u003c/p\u003e",
        "fct-module": "Hledger.Utils",
        "fct-package": "hledger-lib",
        "fct-signature": "[String] -\u003e String",
        "fct-source": "src/Hledger-Utils.html#concatTopPadded",
        "fct-type": "function",
        "title": "concatTopPadded"
      },
      "index": {
        "description": "Join multi-line strings as side-by-side rectangular strings of the same height top-padded",
        "hierarchy": "Hledger Utils",
        "module": "Hledger.Utils",
        "name": "concatTopPadded",
        "normalized": "[String]-\u003eString",
        "package": "hledger-lib",
        "partial": "Top Padded",
        "signature": "[String]-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Utils.html#v:containsRegex",
      "description": {
        "fct-module": "Hledger.Utils",
        "fct-package": "hledger-lib",
        "fct-signature": "String -\u003e String -\u003e Bool",
        "fct-source": "src/Hledger-Utils.html#containsRegex",
        "fct-type": "function",
        "title": "containsRegex"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Utils",
        "module": "Hledger.Utils",
        "name": "containsRegex",
        "normalized": "String-\u003eString-\u003eBool",
        "package": "hledger-lib",
        "partial": "Regex",
        "signature": "String-\u003eString-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Utils.html#v:dbg",
      "description": {
        "fct-descr": "\u003cp\u003ePrint a message and a showable value to the console if the global\n debug level is non-zero.  Uses unsafePerformIO.\n\u003c/p\u003e",
        "fct-module": "Hledger.Utils",
        "fct-package": "hledger-lib",
        "fct-signature": "String -\u003e a -\u003e a",
        "fct-source": "src/Hledger-Utils.html#dbg",
        "fct-type": "function",
        "title": "dbg"
      },
      "index": {
        "description": "Print message and showable value to the console if the global debug level is non-zero Uses unsafePerformIO",
        "hierarchy": "Hledger Utils",
        "module": "Hledger.Utils",
        "name": "dbg",
        "normalized": "String-\u003ea-\u003ea",
        "package": "hledger-lib",
        "partial": "",
        "signature": "String-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Utils.html#v:dbgExit",
      "description": {
        "fct-descr": "\u003cp\u003eLike dbg, then exit the program. Uses unsafePerformIO.\n\u003c/p\u003e",
        "fct-module": "Hledger.Utils",
        "fct-package": "hledger-lib",
        "fct-signature": "String -\u003e a -\u003e a",
        "fct-source": "src/Hledger-Utils.html#dbgExit",
        "fct-type": "function",
        "title": "dbgExit"
      },
      "index": {
        "description": "Like dbg then exit the program Uses unsafePerformIO",
        "hierarchy": "Hledger Utils",
        "module": "Hledger.Utils",
        "name": "dbgExit",
        "normalized": "String-\u003ea-\u003ea",
        "package": "hledger-lib",
        "partial": "Exit",
        "signature": "String-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Utils.html#v:dbgpprint",
      "description": {
        "fct-descr": "\u003cp\u003ePrint a showable value to the console, with a message, if the\n debug level is at or above the specified level (uses\n unsafePerformIO).\n Values are displayed with pprint. Field names are not shown, but the\n output is compact with smart line wrapping, long data elided,\n and slow calculations timed out.\n\u003c/p\u003e",
        "fct-module": "Hledger.Utils",
        "fct-package": "hledger-lib",
        "fct-signature": "Int -\u003e String -\u003e a -\u003e a",
        "fct-source": "src/Hledger-Utils.html#dbgpprint",
        "fct-type": "function",
        "title": "dbgpprint"
      },
      "index": {
        "description": "Print showable value to the console with message if the debug level is at or above the specified level uses unsafePerformIO Values are displayed with pprint Field names are not shown but the output is compact with smart line wrapping long data elided and slow calculations timed out",
        "hierarchy": "Hledger Utils",
        "module": "Hledger.Utils",
        "name": "dbgpprint",
        "normalized": "Int-\u003eString-\u003ea-\u003ea",
        "package": "hledger-lib",
        "partial": "",
        "signature": "Int-\u003eString-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Utils.html#v:dbgppshow",
      "description": {
        "fct-descr": "\u003cp\u003ePrint a showable value to the console, with a message, if the\n debug level is at or above the specified level (uses\n unsafePerformIO).\n Values are displayed with ppShow, each field/constructor on its own line.\n\u003c/p\u003e",
        "fct-module": "Hledger.Utils",
        "fct-package": "hledger-lib",
        "fct-signature": "Int -\u003e String -\u003e a -\u003e a",
        "fct-source": "src/Hledger-Utils.html#dbgppshow",
        "fct-type": "function",
        "title": "dbgppshow"
      },
      "index": {
        "description": "Print showable value to the console with message if the debug level is at or above the specified level uses unsafePerformIO Values are displayed with ppShow each field constructor on its own line",
        "hierarchy": "Hledger Utils",
        "module": "Hledger.Utils",
        "name": "dbgppshow",
        "normalized": "Int-\u003eString-\u003ea-\u003ea",
        "package": "hledger-lib",
        "partial": "",
        "signature": "Int-\u003eString-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Utils.html#v:dbgshow",
      "description": {
        "fct-descr": "\u003cp\u003ePrint a showable value to the console, with a message, if the\n debug level is at or above the specified level (uses\n unsafePerformIO).\n Values are displayed with show, all on one line, which is hard to read.\n\u003c/p\u003e",
        "fct-module": "Hledger.Utils",
        "fct-package": "hledger-lib",
        "fct-signature": "Int -\u003e String -\u003e a -\u003e a",
        "fct-source": "src/Hledger-Utils.html#dbgshow",
        "fct-type": "function",
        "title": "dbgshow"
      },
      "index": {
        "description": "Print showable value to the console with message if the debug level is at or above the specified level uses unsafePerformIO Values are displayed with show all on one line which is hard to read",
        "hierarchy": "Hledger Utils",
        "module": "Hledger.Utils",
        "name": "dbgshow",
        "normalized": "Int-\u003eString-\u003ea-\u003ea",
        "package": "hledger-lib",
        "partial": "",
        "signature": "Int-\u003eString-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Utils.html#v:debugLevel",
      "description": {
        "fct-descr": "\u003cp\u003eGlobal debug level, which controls the verbosity of debug output\n on the console. The default is 0 meaning no debug output. The\n \u003ccode\u003e--debug\u003c/code\u003e command line flag sets it to 1, or \u003ccode\u003e--debug=N\u003c/code\u003e sets it to\n a higher value (note: not \u003ccode\u003e--debug N\u003c/code\u003e for some reason).  This uses\n unsafePerformIO and can be accessed from anywhere and before normal\n command-line processing. After command-line processing, it is also\n available as the \u003ccode\u003edebug_\u003c/code\u003e field of \u003ccode\u003e\u003ca\u003eCliOpts\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Hledger.Utils",
        "fct-package": "hledger-lib",
        "fct-signature": "Int",
        "fct-source": "src/Hledger-Utils.html#debugLevel",
        "fct-type": "function",
        "title": "debugLevel"
      },
      "index": {
        "description": "Global debug level which controls the verbosity of debug output on the console The default is meaning no debug output The debug command line flag sets it to or debug sets it to higher value note not debug for some reason This uses unsafePerformIO and can be accessed from anywhere and before normal command-line processing After command-line processing it is also available as the debug field of CliOpts",
        "hierarchy": "Hledger Utils",
        "module": "Hledger.Utils",
        "name": "debugLevel",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "Level",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Utils.html#v:difforzero",
      "description": {
        "fct-module": "Hledger.Utils",
        "fct-package": "hledger-lib",
        "fct-signature": "a -\u003e a -\u003e a",
        "fct-source": "src/Hledger-Utils.html#difforzero",
        "fct-type": "function",
        "title": "difforzero"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Utils",
        "module": "Hledger.Utils",
        "name": "difforzero",
        "normalized": "a-\u003ea-\u003ea",
        "package": "hledger-lib",
        "partial": "",
        "signature": "a-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Utils.html#v:elideLeft",
      "description": {
        "fct-module": "Hledger.Utils",
        "fct-package": "hledger-lib",
        "fct-signature": "Int -\u003e [Char] -\u003e [Char]",
        "fct-source": "src/Hledger-Utils.html#elideLeft",
        "fct-type": "function",
        "title": "elideLeft"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Utils",
        "module": "Hledger.Utils",
        "name": "elideLeft",
        "normalized": "Int-\u003e[Char]-\u003e[Char]",
        "package": "hledger-lib",
        "partial": "Left",
        "signature": "Int-\u003e[Char]-\u003e[Char]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Utils.html#v:elideRight",
      "description": {
        "fct-module": "Hledger.Utils",
        "fct-package": "hledger-lib",
        "fct-signature": "Int -\u003e [Char] -\u003e [Char]",
        "fct-source": "src/Hledger-Utils.html#elideRight",
        "fct-type": "function",
        "title": "elideRight"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Utils",
        "module": "Hledger.Utils",
        "name": "elideRight",
        "normalized": "Int-\u003e[Char]-\u003e[Char]",
        "package": "hledger-lib",
        "partial": "Right",
        "signature": "Int-\u003e[Char]-\u003e[Char]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Utils.html#v:emptyTree",
      "description": {
        "fct-module": "Hledger.Utils",
        "fct-package": "hledger-lib",
        "fct-signature": "FastTree a",
        "fct-source": "src/Hledger-Utils.html#emptyTree",
        "fct-type": "function",
        "title": "emptyTree"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Utils",
        "module": "Hledger.Utils",
        "name": "emptyTree",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "Tree",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Utils.html#v:eolof",
      "description": {
        "fct-module": "Hledger.Utils",
        "fct-package": "hledger-lib",
        "fct-signature": "GenParser Char st ()",
        "fct-source": "src/Hledger-Utils.html#eolof",
        "fct-type": "function",
        "title": "eolof"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Utils",
        "module": "Hledger.Utils",
        "name": "eolof",
        "normalized": "GenParser Char a()",
        "package": "hledger-lib",
        "partial": "",
        "signature": "GenParser Char st()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Utils.html#v:error-39-",
      "description": {
        "fct-descr": "\u003cp\u003eA SystemString-aware version of error.\n\u003c/p\u003e",
        "fct-module": "Hledger.Utils",
        "fct-package": "hledger-lib",
        "fct-signature": "String -\u003e a",
        "fct-source": "src/Hledger-Utils-UTF8IOCompat.html#error%27",
        "fct-type": "function",
        "title": "error'"
      },
      "index": {
        "description": "SystemString-aware version of error",
        "hierarchy": "Hledger Utils",
        "module": "Hledger.Utils",
        "name": "error'",
        "normalized": "String-\u003ea",
        "package": "hledger-lib",
        "partial": "",
        "signature": "String-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Utils.html#v:escapeQuotes",
      "description": {
        "fct-module": "Hledger.Utils",
        "fct-package": "hledger-lib",
        "fct-signature": "String -\u003e String",
        "fct-source": "src/Hledger-Utils.html#escapeQuotes",
        "fct-type": "function",
        "title": "escapeQuotes"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Utils",
        "module": "Hledger.Utils",
        "name": "escapeQuotes",
        "normalized": "String-\u003eString",
        "package": "hledger-lib",
        "partial": "Quotes",
        "signature": "String-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Utils.html#v:escapeSingleQuotes",
      "description": {
        "fct-module": "Hledger.Utils",
        "fct-package": "hledger-lib",
        "fct-signature": "String -\u003e String",
        "fct-source": "src/Hledger-Utils.html#escapeSingleQuotes",
        "fct-type": "function",
        "title": "escapeSingleQuotes"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Utils",
        "module": "Hledger.Utils",
        "name": "escapeSingleQuotes",
        "normalized": "String-\u003eString",
        "package": "hledger-lib",
        "partial": "Single Quotes",
        "signature": "String-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Utils.html#v:expandPath",
      "description": {
        "fct-descr": "\u003cp\u003eConvert a possibly relative, possibly tilde-containing file path to an absolute one,\n given the current directory. ~username is not supported. Leave \u003ca\u003e-\u003c/a\u003e unchanged. \n\u003c/p\u003e",
        "fct-module": "Hledger.Utils",
        "fct-package": "hledger-lib",
        "fct-signature": "FilePath -\u003e FilePath -\u003e m FilePath",
        "fct-source": "src/Hledger-Utils.html#expandPath",
        "fct-type": "function",
        "title": "expandPath"
      },
      "index": {
        "description": "Convert possibly relative possibly tilde-containing file path to an absolute one given the current directory username is not supported Leave unchanged",
        "hierarchy": "Hledger Utils",
        "module": "Hledger.Utils",
        "name": "expandPath",
        "normalized": "FilePath-\u003eFilePath-\u003ea FilePath",
        "package": "hledger-lib",
        "partial": "Path",
        "signature": "FilePath-\u003eFilePath-\u003em FilePath"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Utils.html#v:filterTests",
      "description": {
        "fct-descr": "\u003cp\u003eFilter TestLists in a Test, recursively, preserving the structure.\n\u003c/p\u003e",
        "fct-module": "Hledger.Utils",
        "fct-package": "hledger-lib",
        "fct-signature": "(Test -\u003e Bool) -\u003e Test -\u003e Test",
        "fct-source": "src/Hledger-Utils.html#filterTests",
        "fct-type": "function",
        "title": "filterTests"
      },
      "index": {
        "description": "Filter TestLists in Test recursively preserving the structure",
        "hierarchy": "Hledger Utils",
        "module": "Hledger.Utils",
        "name": "filterTests",
        "normalized": "(Test-\u003eBool)-\u003eTest-\u003eTest",
        "package": "hledger-lib",
        "partial": "Tests",
        "signature": "(Test-\u003eBool)-\u003eTest-\u003eTest"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Utils.html#v:firstJust",
      "description": {
        "fct-module": "Hledger.Utils",
        "fct-package": "hledger-lib",
        "fct-signature": "[Maybe a] -\u003e Maybe a",
        "fct-source": "src/Hledger-Utils.html#firstJust",
        "fct-type": "function",
        "title": "firstJust"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Utils",
        "module": "Hledger.Utils",
        "name": "firstJust",
        "normalized": "[Maybe a]-\u003eMaybe a",
        "package": "hledger-lib",
        "partial": "Just",
        "signature": "[Maybe a]-\u003eMaybe a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Utils.html#v:fitto",
      "description": {
        "fct-descr": "\u003cp\u003eClip and pad a multi-line string to fill the specified width and height.\n\u003c/p\u003e",
        "fct-module": "Hledger.Utils",
        "fct-package": "hledger-lib",
        "fct-signature": "Int -\u003e Int -\u003e String -\u003e String",
        "fct-source": "src/Hledger-Utils.html#fitto",
        "fct-type": "function",
        "title": "fitto"
      },
      "index": {
        "description": "Clip and pad multi-line string to fill the specified width and height",
        "hierarchy": "Hledger Utils",
        "module": "Hledger.Utils",
        "name": "fitto",
        "normalized": "Int-\u003eInt-\u003eString-\u003eString",
        "package": "hledger-lib",
        "partial": "",
        "signature": "Int-\u003eInt-\u003eString-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Utils.html#v:flattenTests",
      "description": {
        "fct-descr": "\u003cp\u003eFlatten a Test containing TestLists into a list of single tests.\n\u003c/p\u003e",
        "fct-module": "Hledger.Utils",
        "fct-package": "hledger-lib",
        "fct-signature": "Test -\u003e [Test]",
        "fct-source": "src/Hledger-Utils.html#flattenTests",
        "fct-type": "function",
        "title": "flattenTests"
      },
      "index": {
        "description": "Flatten Test containing TestLists into list of single tests",
        "hierarchy": "Hledger Utils",
        "module": "Hledger.Utils",
        "name": "flattenTests",
        "normalized": "Test-\u003e[Test]",
        "package": "hledger-lib",
        "partial": "Tests",
        "signature": "Test-\u003e[Test]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Utils.html#v:fromSystemString",
      "description": {
        "fct-descr": "\u003cp\u003eConvert a system string to an ordinary string, decoding from UTF-8 if\n it appears to be UTF8-encoded and GHC version is less than 7.2.\n\u003c/p\u003e",
        "fct-module": "Hledger.Utils",
        "fct-package": "hledger-lib",
        "fct-signature": "SystemString -\u003e String",
        "fct-source": "src/Hledger-Utils-UTF8IOCompat.html#fromSystemString",
        "fct-type": "function",
        "title": "fromSystemString"
      },
      "index": {
        "description": "Convert system string to an ordinary string decoding from UTF-8 if it appears to be UTF8-encoded and GHC version is less than",
        "hierarchy": "Hledger Utils",
        "module": "Hledger.Utils",
        "name": "fromSystemString",
        "normalized": "SystemString-\u003eString",
        "package": "hledger-lib",
        "partial": "System String",
        "signature": "SystemString-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Utils.html#v:fromparse",
      "description": {
        "fct-module": "Hledger.Utils",
        "fct-package": "hledger-lib",
        "fct-signature": "Either ParseError a -\u003e a",
        "fct-source": "src/Hledger-Utils.html#fromparse",
        "fct-type": "function",
        "title": "fromparse"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Utils",
        "module": "Hledger.Utils",
        "name": "fromparse",
        "normalized": "Either ParseError a-\u003ea",
        "package": "hledger-lib",
        "partial": "",
        "signature": "Either ParseError a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Utils.html#v:getCurrentLocalTime",
      "description": {
        "fct-module": "Hledger.Utils",
        "fct-package": "hledger-lib",
        "fct-signature": "IO LocalTime",
        "fct-source": "src/Hledger-Utils.html#getCurrentLocalTime",
        "fct-type": "function",
        "title": "getCurrentLocalTime"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Utils",
        "module": "Hledger.Utils",
        "name": "getCurrentLocalTime",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "Current Local Time",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Utils.html#v:is",
      "description": {
        "fct-descr": "\u003cp\u003eSimple way to assert something is some expected value, with no label.\n\u003c/p\u003e",
        "fct-module": "Hledger.Utils",
        "fct-package": "hledger-lib",
        "fct-signature": "a -\u003e a -\u003e Assertion",
        "fct-source": "src/Hledger-Utils.html#is",
        "fct-type": "function",
        "title": "is"
      },
      "index": {
        "description": "Simple way to assert something is some expected value with no label",
        "hierarchy": "Hledger Utils",
        "module": "Hledger.Utils",
        "name": "is",
        "normalized": "a-\u003ea-\u003eAssertion",
        "package": "hledger-lib",
        "partial": "",
        "signature": "a-\u003ea-\u003eAssertion"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Utils.html#v:isDoubleQuoted",
      "description": {
        "fct-module": "Hledger.Utils",
        "fct-package": "hledger-lib",
        "fct-signature": "[Char] -\u003e Bool",
        "fct-source": "src/Hledger-Utils.html#isDoubleQuoted",
        "fct-type": "function",
        "title": "isDoubleQuoted"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Utils",
        "module": "Hledger.Utils",
        "name": "isDoubleQuoted",
        "normalized": "[Char]-\u003eBool",
        "package": "hledger-lib",
        "partial": "Double Quoted",
        "signature": "[Char]-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Utils.html#v:isLeft",
      "description": {
        "fct-module": "Hledger.Utils",
        "fct-package": "hledger-lib",
        "fct-signature": "Either a b -\u003e Bool",
        "fct-source": "src/Hledger-Utils.html#isLeft",
        "fct-type": "function",
        "title": "isLeft"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Utils",
        "module": "Hledger.Utils",
        "name": "isLeft",
        "normalized": "Either a b-\u003eBool",
        "package": "hledger-lib",
        "partial": "Left",
        "signature": "Either a b-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Utils.html#v:isRight",
      "description": {
        "fct-module": "Hledger.Utils",
        "fct-package": "hledger-lib",
        "fct-signature": "Either a b -\u003e Bool",
        "fct-source": "src/Hledger-Utils.html#isRight",
        "fct-type": "function",
        "title": "isRight"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Utils",
        "module": "Hledger.Utils",
        "name": "isRight",
        "normalized": "Either a b-\u003eBool",
        "package": "hledger-lib",
        "partial": "Right",
        "signature": "Either a b-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Utils.html#v:isSingleQuoted",
      "description": {
        "fct-module": "Hledger.Utils",
        "fct-package": "hledger-lib",
        "fct-signature": "[Char] -\u003e Bool",
        "fct-source": "src/Hledger-Utils.html#isSingleQuoted",
        "fct-type": "function",
        "title": "isSingleQuoted"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Utils",
        "module": "Hledger.Utils",
        "name": "isSingleQuoted",
        "normalized": "[Char]-\u003eBool",
        "package": "hledger-lib",
        "partial": "Single Quoted",
        "signature": "[Char]-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Utils.html#v:leaves",
      "description": {
        "fct-descr": "\u003cp\u003eList just the leaf nodes of a tree\n\u003c/p\u003e",
        "fct-module": "Hledger.Utils",
        "fct-package": "hledger-lib",
        "fct-signature": "Tree a -\u003e [a]",
        "fct-source": "src/Hledger-Utils.html#leaves",
        "fct-type": "function",
        "title": "leaves"
      },
      "index": {
        "description": "List just the leaf nodes of tree",
        "hierarchy": "Hledger Utils",
        "module": "Hledger.Utils",
        "name": "leaves",
        "normalized": "Tree a-\u003e[a]",
        "package": "hledger-lib",
        "partial": "",
        "signature": "Tree a-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Utils.html#v:lowercase",
      "description": {
        "fct-module": "Hledger.Utils",
        "fct-package": "hledger-lib",
        "fct-signature": "[Char] -\u003e [Char]",
        "fct-source": "src/Hledger-Utils.html#lowercase",
        "fct-type": "function",
        "title": "lowercase"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Utils",
        "module": "Hledger.Utils",
        "name": "lowercase",
        "normalized": "[Char]-\u003e[Char]",
        "package": "hledger-lib",
        "partial": "",
        "signature": "[Char]-\u003e[Char]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Utils.html#v:lstrip",
      "description": {
        "fct-module": "Hledger.Utils",
        "fct-package": "hledger-lib",
        "fct-signature": "String -\u003e String",
        "fct-source": "src/Hledger-Utils.html#lstrip",
        "fct-type": "function",
        "title": "lstrip"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Utils",
        "module": "Hledger.Utils",
        "name": "lstrip",
        "normalized": "String-\u003eString",
        "package": "hledger-lib",
        "partial": "",
        "signature": "String-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Utils.html#v:ltrace",
      "description": {
        "fct-descr": "\u003cp\u003eLabelled trace - like strace, with a label prepended.\n\u003c/p\u003e",
        "fct-module": "Hledger.Utils",
        "fct-package": "hledger-lib",
        "fct-signature": "String -\u003e a -\u003e a",
        "fct-source": "src/Hledger-Utils.html#ltrace",
        "fct-type": "function",
        "title": "ltrace"
      },
      "index": {
        "description": "Labelled trace like strace with label prepended",
        "hierarchy": "Hledger Utils",
        "module": "Hledger.Utils",
        "name": "ltrace",
        "normalized": "String-\u003ea-\u003ea",
        "package": "hledger-lib",
        "partial": "",
        "signature": "String-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Utils.html#v:mergeTrees",
      "description": {
        "fct-module": "Hledger.Utils",
        "fct-package": "hledger-lib",
        "fct-signature": "FastTree a -\u003e FastTree a -\u003e FastTree a",
        "fct-source": "src/Hledger-Utils.html#mergeTrees",
        "fct-type": "function",
        "title": "mergeTrees"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Utils",
        "module": "Hledger.Utils",
        "name": "mergeTrees",
        "normalized": "FastTree a-\u003eFastTree a-\u003eFastTree a",
        "package": "hledger-lib",
        "partial": "Trees",
        "signature": "FastTree a-\u003eFastTree a-\u003eFastTree a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Utils.html#v:mtrace",
      "description": {
        "fct-descr": "\u003cp\u003eMonadic trace - like strace, but works as a standalone line in a monad.\n\u003c/p\u003e",
        "fct-module": "Hledger.Utils",
        "fct-package": "hledger-lib",
        "fct-signature": "a -\u003e m a",
        "fct-source": "src/Hledger-Utils.html#mtrace",
        "fct-type": "function",
        "title": "mtrace"
      },
      "index": {
        "description": "Monadic trace like strace but works as standalone line in monad",
        "hierarchy": "Hledger Utils",
        "module": "Hledger.Utils",
        "name": "mtrace",
        "normalized": "a-\u003eb a",
        "package": "hledger-lib",
        "partial": "",
        "signature": "a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Utils.html#v:nonspace",
      "description": {
        "fct-module": "Hledger.Utils",
        "fct-package": "hledger-lib",
        "fct-signature": "GenParser Char st Char",
        "fct-source": "src/Hledger-Utils.html#nonspace",
        "fct-type": "function",
        "title": "nonspace"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Utils",
        "module": "Hledger.Utils",
        "name": "nonspace",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Utils.html#v:padbottom",
      "description": {
        "fct-descr": "\u003cp\u003eConvert a multi-line string to a rectangular string bottom-padded to the specified height.\n\u003c/p\u003e",
        "fct-module": "Hledger.Utils",
        "fct-package": "hledger-lib",
        "fct-signature": "Int -\u003e String -\u003e String",
        "fct-source": "src/Hledger-Utils.html#padbottom",
        "fct-type": "function",
        "title": "padbottom"
      },
      "index": {
        "description": "Convert multi-line string to rectangular string bottom-padded to the specified height",
        "hierarchy": "Hledger Utils",
        "module": "Hledger.Utils",
        "name": "padbottom",
        "normalized": "Int-\u003eString-\u003eString",
        "package": "hledger-lib",
        "partial": "",
        "signature": "Int-\u003eString-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Utils.html#v:padleft",
      "description": {
        "fct-descr": "\u003cp\u003eConvert a multi-line string to a rectangular string left-padded to the specified width.\n\u003c/p\u003e",
        "fct-module": "Hledger.Utils",
        "fct-package": "hledger-lib",
        "fct-signature": "Int -\u003e String -\u003e String",
        "fct-source": "src/Hledger-Utils.html#padleft",
        "fct-type": "function",
        "title": "padleft"
      },
      "index": {
        "description": "Convert multi-line string to rectangular string left-padded to the specified width",
        "hierarchy": "Hledger Utils",
        "module": "Hledger.Utils",
        "name": "padleft",
        "normalized": "Int-\u003eString-\u003eString",
        "package": "hledger-lib",
        "partial": "",
        "signature": "Int-\u003eString-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Utils.html#v:padright",
      "description": {
        "fct-descr": "\u003cp\u003eConvert a multi-line string to a rectangular string right-padded to the specified width.\n\u003c/p\u003e",
        "fct-module": "Hledger.Utils",
        "fct-package": "hledger-lib",
        "fct-signature": "Int -\u003e String -\u003e String",
        "fct-source": "src/Hledger-Utils.html#padright",
        "fct-type": "function",
        "title": "padright"
      },
      "index": {
        "description": "Convert multi-line string to rectangular string right-padded to the specified width",
        "hierarchy": "Hledger Utils",
        "module": "Hledger.Utils",
        "name": "padright",
        "normalized": "Int-\u003eString-\u003eString",
        "package": "hledger-lib",
        "partial": "",
        "signature": "Int-\u003eString-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Utils.html#v:padtop",
      "description": {
        "fct-descr": "\u003cp\u003eConvert a multi-line string to a rectangular string top-padded to the specified height.\n\u003c/p\u003e",
        "fct-module": "Hledger.Utils",
        "fct-package": "hledger-lib",
        "fct-signature": "Int -\u003e String -\u003e String",
        "fct-source": "src/Hledger-Utils.html#padtop",
        "fct-type": "function",
        "title": "padtop"
      },
      "index": {
        "description": "Convert multi-line string to rectangular string top-padded to the specified height",
        "hierarchy": "Hledger Utils",
        "module": "Hledger.Utils",
        "name": "padtop",
        "normalized": "Int-\u003eString-\u003eString",
        "package": "hledger-lib",
        "partial": "",
        "signature": "Int-\u003eString-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Utils.html#v:parseWithCtx",
      "description": {
        "fct-module": "Hledger.Utils",
        "fct-package": "hledger-lib",
        "fct-signature": "b -\u003e GenParser Char b a -\u003e String -\u003e Either ParseError a",
        "fct-source": "src/Hledger-Utils.html#parseWithCtx",
        "fct-type": "function",
        "title": "parseWithCtx"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Utils",
        "module": "Hledger.Utils",
        "name": "parseWithCtx",
        "normalized": "a-\u003eGenParser Char a b-\u003eString-\u003eEither ParseError b",
        "package": "hledger-lib",
        "partial": "With Ctx",
        "signature": "b-\u003eGenParser Char b a-\u003eString-\u003eEither ParseError a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Utils.html#v:parseerror",
      "description": {
        "fct-module": "Hledger.Utils",
        "fct-package": "hledger-lib",
        "fct-signature": "ParseError -\u003e a",
        "fct-source": "src/Hledger-Utils.html#parseerror",
        "fct-type": "function",
        "title": "parseerror"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Utils",
        "module": "Hledger.Utils",
        "name": "parseerror",
        "normalized": "ParseError-\u003ea",
        "package": "hledger-lib",
        "partial": "",
        "signature": "ParseError-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Utils.html#v:parsewith",
      "description": {
        "fct-module": "Hledger.Utils",
        "fct-package": "hledger-lib",
        "fct-signature": "Parser a -\u003e String -\u003e Either ParseError a",
        "fct-source": "src/Hledger-Utils.html#parsewith",
        "fct-type": "function",
        "title": "parsewith"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Utils",
        "module": "Hledger.Utils",
        "name": "parsewith",
        "normalized": "Parser a-\u003eString-\u003eEither ParseError a",
        "package": "hledger-lib",
        "partial": "",
        "signature": "Parser a-\u003eString-\u003eEither ParseError a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Utils.html#v:pdbg",
      "description": {
        "fct-descr": "\u003cp\u003ePrint a message and parsec debug info (parse position and next\n input) to the console when the debug level is at or above\n this level. Uses unsafePerformIO.\n pdbgAt :: GenParser m =\u003e Float -\u003e String -\u003e m ()\n\u003c/p\u003e",
        "fct-module": "Hledger.Utils",
        "fct-package": "hledger-lib",
        "fct-signature": "Int -\u003e String -\u003e ParsecT [Char] st Identity ()",
        "fct-source": "src/Hledger-Utils.html#pdbg",
        "fct-type": "function",
        "title": "pdbg"
      },
      "index": {
        "description": "Print message and parsec debug info parse position and next input to the console when the debug level is at or above this level Uses unsafePerformIO pdbgAt GenParser Float String",
        "hierarchy": "Hledger Utils",
        "module": "Hledger.Utils",
        "name": "pdbg",
        "normalized": "Int-\u003eString-\u003eParsecT[Char]a Identity()",
        "package": "hledger-lib",
        "partial": "",
        "signature": "Int-\u003eString-\u003eParsecT[Char]st Identity()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Utils.html#v:ppShow",
      "description": {
        "fct-descr": "\u003cp\u003eConvert a generic value into a pretty \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e, if possible.\n\u003c/p\u003e",
        "fct-module": "Hledger.Utils",
        "fct-package": "hledger-lib",
        "fct-signature": "a -\u003e String",
        "fct-type": "function",
        "title": "ppShow"
      },
      "index": {
        "description": "Convert generic value into pretty String if possible",
        "hierarchy": "Hledger Utils",
        "module": "Hledger.Utils",
        "name": "ppShow",
        "normalized": "a-\u003eString",
        "package": "hledger-lib",
        "partial": "Show",
        "signature": "a-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Utils.html#v:printParseError",
      "description": {
        "fct-module": "Hledger.Utils",
        "fct-package": "hledger-lib",
        "fct-signature": "a -\u003e IO ()",
        "fct-source": "src/Hledger-Utils.html#printParseError",
        "fct-type": "function",
        "title": "printParseError"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Utils",
        "module": "Hledger.Utils",
        "name": "printParseError",
        "normalized": "a-\u003eIO()",
        "package": "hledger-lib",
        "partial": "Parse Error",
        "signature": "a-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Utils.html#v:ptrace",
      "description": {
        "fct-descr": "\u003cp\u003eParsec trace - show the current parsec position and next input,\n and the provided label if it's non-null.\n\u003c/p\u003e",
        "fct-module": "Hledger.Utils",
        "fct-package": "hledger-lib",
        "fct-signature": "String -\u003e GenParser Char st ()",
        "fct-source": "src/Hledger-Utils.html#ptrace",
        "fct-type": "function",
        "title": "ptrace"
      },
      "index": {
        "description": "Parsec trace show the current parsec position and next input and the provided label if it non-null",
        "hierarchy": "Hledger Utils",
        "module": "Hledger.Utils",
        "name": "ptrace",
        "normalized": "String-\u003eGenParser Char a()",
        "package": "hledger-lib",
        "partial": "",
        "signature": "String-\u003eGenParser Char st()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Utils.html#v:quoteIfSpaced",
      "description": {
        "fct-descr": "\u003cp\u003eWrap a string in single quotes, and -prefix any embedded single\n quotes, if it contains whitespace and is not already single- or\n double-quoted.\n\u003c/p\u003e",
        "fct-module": "Hledger.Utils",
        "fct-package": "hledger-lib",
        "fct-signature": "String -\u003e String",
        "fct-source": "src/Hledger-Utils.html#quoteIfSpaced",
        "fct-type": "function",
        "title": "quoteIfSpaced"
      },
      "index": {
        "description": "Wrap string in single quotes and prefix any embedded single quotes if it contains whitespace and is not already single or double-quoted",
        "hierarchy": "Hledger Utils",
        "module": "Hledger.Utils",
        "name": "quoteIfSpaced",
        "normalized": "String-\u003eString",
        "package": "hledger-lib",
        "partial": "If Spaced",
        "signature": "String-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Utils.html#v:readFile-39-",
      "description": {
        "fct-descr": "\u003cp\u003eRead a file in universal newline mode, handling whatever newline convention it may contain.\n\u003c/p\u003e",
        "fct-module": "Hledger.Utils",
        "fct-package": "hledger-lib",
        "fct-signature": "FilePath -\u003e IO String",
        "fct-source": "src/Hledger-Utils.html#readFile%27",
        "fct-type": "function",
        "title": "readFile'"
      },
      "index": {
        "description": "Read file in universal newline mode handling whatever newline convention it may contain",
        "hierarchy": "Hledger Utils",
        "module": "Hledger.Utils",
        "name": "readFile'",
        "normalized": "FilePath-\u003eIO String",
        "package": "hledger-lib",
        "partial": "File'",
        "signature": "FilePath-\u003eIO String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Utils.html#v:regexMatch",
      "description": {
        "fct-module": "Hledger.Utils",
        "fct-package": "hledger-lib",
        "fct-signature": "String -\u003e String -\u003e Maybe (RegexResult, MatchList)",
        "fct-source": "src/Hledger-Utils.html#regexMatch",
        "fct-type": "function",
        "title": "regexMatch"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Utils",
        "module": "Hledger.Utils",
        "name": "regexMatch",
        "normalized": "String-\u003eString-\u003eMaybe(RegexResult,MatchList)",
        "package": "hledger-lib",
        "partial": "Match",
        "signature": "String-\u003eString-\u003eMaybe(RegexResult,MatchList)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Utils.html#v:regexMatchCI",
      "description": {
        "fct-module": "Hledger.Utils",
        "fct-package": "hledger-lib",
        "fct-signature": "String -\u003e String -\u003e Maybe (RegexResult, MatchList)",
        "fct-source": "src/Hledger-Utils.html#regexMatchCI",
        "fct-type": "function",
        "title": "regexMatchCI"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Utils",
        "module": "Hledger.Utils",
        "name": "regexMatchCI",
        "normalized": "String-\u003eString-\u003eMaybe(RegexResult,MatchList)",
        "package": "hledger-lib",
        "partial": "Match CI",
        "signature": "String-\u003eString-\u003eMaybe(RegexResult,MatchList)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Utils.html#v:regexMatches",
      "description": {
        "fct-module": "Hledger.Utils",
        "fct-package": "hledger-lib",
        "fct-signature": "String -\u003e String -\u003e Bool",
        "fct-source": "src/Hledger-Utils.html#regexMatches",
        "fct-type": "function",
        "title": "regexMatches"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Utils",
        "module": "Hledger.Utils",
        "name": "regexMatches",
        "normalized": "String-\u003eString-\u003eBool",
        "package": "hledger-lib",
        "partial": "Matches",
        "signature": "String-\u003eString-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Utils.html#v:regexMatchesCI",
      "description": {
        "fct-module": "Hledger.Utils",
        "fct-package": "hledger-lib",
        "fct-signature": "String -\u003e String -\u003e Bool",
        "fct-source": "src/Hledger-Utils.html#regexMatchesCI",
        "fct-type": "function",
        "title": "regexMatchesCI"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Utils",
        "module": "Hledger.Utils",
        "name": "regexMatchesCI",
        "normalized": "String-\u003eString-\u003eBool",
        "package": "hledger-lib",
        "partial": "Matches CI",
        "signature": "String-\u003eString-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Utils.html#v:regexMatchesCIRegexCompat",
      "description": {
        "fct-module": "Hledger.Utils",
        "fct-package": "hledger-lib",
        "fct-signature": "String -\u003e String -\u003e Bool",
        "fct-source": "src/Hledger-Utils.html#regexMatchesCIRegexCompat",
        "fct-type": "function",
        "title": "regexMatchesCIRegexCompat"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Utils",
        "module": "Hledger.Utils",
        "name": "regexMatchesCIRegexCompat",
        "normalized": "String-\u003eString-\u003eBool",
        "package": "hledger-lib",
        "partial": "Matches CIRegex Compat",
        "signature": "String-\u003eString-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Utils.html#v:regexMatchesRegexCompat",
      "description": {
        "fct-module": "Hledger.Utils",
        "fct-package": "hledger-lib",
        "fct-signature": "String -\u003e String -\u003e Bool",
        "fct-source": "src/Hledger-Utils.html#regexMatchesRegexCompat",
        "fct-type": "function",
        "title": "regexMatchesRegexCompat"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Utils",
        "module": "Hledger.Utils",
        "name": "regexMatchesRegexCompat",
        "normalized": "String-\u003eString-\u003eBool",
        "package": "hledger-lib",
        "partial": "Matches Regex Compat",
        "signature": "String-\u003eString-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Utils.html#v:regexReplace",
      "description": {
        "fct-module": "Hledger.Utils",
        "fct-package": "hledger-lib",
        "fct-signature": "String -\u003e String -\u003e String -\u003e String",
        "fct-source": "src/Hledger-Utils.html#regexReplace",
        "fct-type": "function",
        "title": "regexReplace"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Utils",
        "module": "Hledger.Utils",
        "name": "regexReplace",
        "normalized": "String-\u003eString-\u003eString-\u003eString",
        "package": "hledger-lib",
        "partial": "Replace",
        "signature": "String-\u003eString-\u003eString-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Utils.html#v:regexReplaceBy",
      "description": {
        "fct-module": "Hledger.Utils",
        "fct-package": "hledger-lib",
        "fct-signature": "String -\u003e (String -\u003e String) -\u003e String -\u003e String",
        "fct-source": "src/Hledger-Utils.html#regexReplaceBy",
        "fct-type": "function",
        "title": "regexReplaceBy"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Utils",
        "module": "Hledger.Utils",
        "name": "regexReplaceBy",
        "normalized": "String-\u003e(String-\u003eString)-\u003eString-\u003eString",
        "package": "hledger-lib",
        "partial": "Replace By",
        "signature": "String-\u003e(String-\u003eString)-\u003eString-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Utils.html#v:regexReplaceCI",
      "description": {
        "fct-module": "Hledger.Utils",
        "fct-package": "hledger-lib",
        "fct-signature": "String -\u003e String -\u003e String -\u003e String",
        "fct-source": "src/Hledger-Utils.html#regexReplaceCI",
        "fct-type": "function",
        "title": "regexReplaceCI"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Utils",
        "module": "Hledger.Utils",
        "name": "regexReplaceCI",
        "normalized": "String-\u003eString-\u003eString-\u003eString",
        "package": "hledger-lib",
        "partial": "Replace CI",
        "signature": "String-\u003eString-\u003eString-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Utils.html#v:regexSplit",
      "description": {
        "fct-module": "Hledger.Utils",
        "fct-package": "hledger-lib",
        "fct-signature": "String -\u003e String -\u003e [String]",
        "fct-source": "src/Hledger-Utils.html#regexSplit",
        "fct-type": "function",
        "title": "regexSplit"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Utils",
        "module": "Hledger.Utils",
        "name": "regexSplit",
        "normalized": "String-\u003eString-\u003e[String]",
        "package": "hledger-lib",
        "partial": "Split",
        "signature": "String-\u003eString-\u003e[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Utils.html#v:regexToCaseInsensitive",
      "description": {
        "fct-module": "Hledger.Utils",
        "fct-package": "hledger-lib",
        "fct-signature": "String -\u003e String",
        "fct-source": "src/Hledger-Utils.html#regexToCaseInsensitive",
        "fct-type": "function",
        "title": "regexToCaseInsensitive"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Utils",
        "module": "Hledger.Utils",
        "name": "regexToCaseInsensitive",
        "normalized": "String-\u003eString",
        "package": "hledger-lib",
        "partial": "To Case Insensitive",
        "signature": "String-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Utils.html#v:restofline",
      "description": {
        "fct-module": "Hledger.Utils",
        "fct-package": "hledger-lib",
        "fct-signature": "GenParser Char st String",
        "fct-source": "src/Hledger-Utils.html#restofline",
        "fct-type": "function",
        "title": "restofline"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Utils",
        "module": "Hledger.Utils",
        "name": "restofline",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Utils.html#v:root",
      "description": {
        "fct-module": "Hledger.Utils",
        "fct-package": "hledger-lib",
        "fct-signature": "Tree a -\u003e a",
        "fct-source": "src/Hledger-Utils.html#root",
        "fct-type": "function",
        "title": "root"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Utils",
        "module": "Hledger.Utils",
        "name": "root",
        "normalized": "Tree a-\u003ea",
        "package": "hledger-lib",
        "partial": "",
        "signature": "Tree a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Utils.html#v:rstrip",
      "description": {
        "fct-module": "Hledger.Utils",
        "fct-package": "hledger-lib",
        "fct-signature": "[Char] -\u003e [Char]",
        "fct-source": "src/Hledger-Utils.html#rstrip",
        "fct-type": "function",
        "title": "rstrip"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Utils",
        "module": "Hledger.Utils",
        "name": "rstrip",
        "normalized": "[Char]-\u003e[Char]",
        "package": "hledger-lib",
        "partial": "",
        "signature": "[Char]-\u003e[Char]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Utils.html#v:showDateParseError",
      "description": {
        "fct-module": "Hledger.Utils",
        "fct-package": "hledger-lib",
        "fct-signature": "ParseError -\u003e String",
        "fct-source": "src/Hledger-Utils.html#showDateParseError",
        "fct-type": "function",
        "title": "showDateParseError"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Utils",
        "module": "Hledger.Utils",
        "name": "showDateParseError",
        "normalized": "ParseError-\u003eString",
        "package": "hledger-lib",
        "partial": "Date Parse Error",
        "signature": "ParseError-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Utils.html#v:showParseError",
      "description": {
        "fct-module": "Hledger.Utils",
        "fct-package": "hledger-lib",
        "fct-signature": "ParseError -\u003e String",
        "fct-source": "src/Hledger-Utils.html#showParseError",
        "fct-type": "function",
        "title": "showParseError"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Utils",
        "module": "Hledger.Utils",
        "name": "showParseError",
        "normalized": "ParseError-\u003eString",
        "package": "hledger-lib",
        "partial": "Parse Error",
        "signature": "ParseError-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Utils.html#v:showforest",
      "description": {
        "fct-descr": "\u003cp\u003eshow a compact ascii representation of a forest\n\u003c/p\u003e",
        "fct-module": "Hledger.Utils",
        "fct-package": "hledger-lib",
        "fct-signature": "Forest a -\u003e String",
        "fct-source": "src/Hledger-Utils.html#showforest",
        "fct-type": "function",
        "title": "showforest"
      },
      "index": {
        "description": "show compact ascii representation of forest",
        "hierarchy": "Hledger Utils",
        "module": "Hledger.Utils",
        "name": "showforest",
        "normalized": "Forest a-\u003eString",
        "package": "hledger-lib",
        "partial": "",
        "signature": "Forest a-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Utils.html#v:showtree",
      "description": {
        "fct-descr": "\u003cp\u003eshow a compact ascii representation of a tree\n\u003c/p\u003e",
        "fct-module": "Hledger.Utils",
        "fct-package": "hledger-lib",
        "fct-signature": "Tree a -\u003e String",
        "fct-source": "src/Hledger-Utils.html#showtree",
        "fct-type": "function",
        "title": "showtree"
      },
      "index": {
        "description": "show compact ascii representation of tree",
        "hierarchy": "Hledger Utils",
        "module": "Hledger.Utils",
        "name": "showtree",
        "normalized": "Tree a-\u003eString",
        "package": "hledger-lib",
        "partial": "",
        "signature": "Tree a-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Utils.html#v:singleQuoteIfNeeded",
      "description": {
        "fct-descr": "\u003cp\u003eSingle-quote this string if it contains whitespace or double-quotes\n\u003c/p\u003e",
        "fct-module": "Hledger.Utils",
        "fct-package": "hledger-lib",
        "fct-signature": "[Char] -\u003e [Char]",
        "fct-source": "src/Hledger-Utils.html#singleQuoteIfNeeded",
        "fct-type": "function",
        "title": "singleQuoteIfNeeded"
      },
      "index": {
        "description": "Single-quote this string if it contains whitespace or double-quotes",
        "hierarchy": "Hledger Utils",
        "module": "Hledger.Utils",
        "name": "singleQuoteIfNeeded",
        "normalized": "[Char]-\u003e[Char]",
        "package": "hledger-lib",
        "partial": "Quote If Needed",
        "signature": "[Char]-\u003e[Char]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Utils.html#v:spacenonewline",
      "description": {
        "fct-module": "Hledger.Utils",
        "fct-package": "hledger-lib",
        "fct-signature": "GenParser Char st Char",
        "fct-source": "src/Hledger-Utils.html#spacenonewline",
        "fct-type": "function",
        "title": "spacenonewline"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Utils",
        "module": "Hledger.Utils",
        "name": "spacenonewline",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Utils.html#v:splitAtElement",
      "description": {
        "fct-module": "Hledger.Utils",
        "fct-package": "hledger-lib",
        "fct-signature": "a -\u003e [a] -\u003e [[a]]",
        "fct-source": "src/Hledger-Utils.html#splitAtElement",
        "fct-type": "function",
        "title": "splitAtElement"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Utils",
        "module": "Hledger.Utils",
        "name": "splitAtElement",
        "normalized": "a-\u003e[a]-\u003e[[a]]",
        "package": "hledger-lib",
        "partial": "At Element",
        "signature": "a-\u003e[a]-\u003e[[a]]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Utils.html#v:strace",
      "description": {
        "fct-descr": "\u003cp\u003eTrace (print on stdout at runtime) a showable value.\n (for easily tracing in the middle of a complex expression)\n\u003c/p\u003e",
        "fct-module": "Hledger.Utils",
        "fct-package": "hledger-lib",
        "fct-signature": "a -\u003e a",
        "fct-source": "src/Hledger-Utils.html#strace",
        "fct-type": "function",
        "title": "strace"
      },
      "index": {
        "description": "Trace print on stdout at runtime showable value for easily tracing in the middle of complex expression",
        "hierarchy": "Hledger Utils",
        "module": "Hledger.Utils",
        "name": "strace",
        "normalized": "a-\u003ea",
        "package": "hledger-lib",
        "partial": "",
        "signature": "a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Utils.html#v:strip",
      "description": {
        "fct-module": "Hledger.Utils",
        "fct-package": "hledger-lib",
        "fct-signature": "[Char] -\u003e String",
        "fct-source": "src/Hledger-Utils.html#strip",
        "fct-type": "function",
        "title": "strip"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Utils",
        "module": "Hledger.Utils",
        "name": "strip",
        "normalized": "[Char]-\u003eString",
        "package": "hledger-lib",
        "partial": "",
        "signature": "[Char]-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Utils.html#v:stripbrackets",
      "description": {
        "fct-module": "Hledger.Utils",
        "fct-package": "hledger-lib",
        "fct-signature": "String -\u003e String",
        "fct-source": "src/Hledger-Utils.html#stripbrackets",
        "fct-type": "function",
        "title": "stripbrackets"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Utils",
        "module": "Hledger.Utils",
        "name": "stripbrackets",
        "normalized": "String-\u003eString",
        "package": "hledger-lib",
        "partial": "",
        "signature": "String-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Utils.html#v:stripquotes",
      "description": {
        "fct-descr": "\u003cp\u003eStrip one matching pair of single or double quotes on the ends of a string.\n\u003c/p\u003e",
        "fct-module": "Hledger.Utils",
        "fct-package": "hledger-lib",
        "fct-signature": "String -\u003e String",
        "fct-source": "src/Hledger-Utils.html#stripquotes",
        "fct-type": "function",
        "title": "stripquotes"
      },
      "index": {
        "description": "Strip one matching pair of single or double quotes on the ends of string",
        "hierarchy": "Hledger Utils",
        "module": "Hledger.Utils",
        "name": "stripquotes",
        "normalized": "String-\u003eString",
        "package": "hledger-lib",
        "partial": "",
        "signature": "String-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Utils.html#v:subs",
      "description": {
        "fct-module": "Hledger.Utils",
        "fct-package": "hledger-lib",
        "fct-signature": "Tree a -\u003e Forest a",
        "fct-source": "src/Hledger-Utils.html#subs",
        "fct-type": "function",
        "title": "subs"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Utils",
        "module": "Hledger.Utils",
        "name": "subs",
        "normalized": "Tree a-\u003eForest a",
        "package": "hledger-lib",
        "partial": "",
        "signature": "Tree a-\u003eForest a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Utils.html#v:subtreeat",
      "description": {
        "fct-descr": "\u003cp\u003eget the sub-tree rooted at the first (left-most, depth-first) occurrence\n of the specified node value\n\u003c/p\u003e",
        "fct-module": "Hledger.Utils",
        "fct-package": "hledger-lib",
        "fct-signature": "a -\u003e Tree a -\u003e Maybe (Tree a)",
        "fct-source": "src/Hledger-Utils.html#subtreeat",
        "fct-type": "function",
        "title": "subtreeat"
      },
      "index": {
        "description": "get the sub-tree rooted at the first left-most depth-first occurrence of the specified node value",
        "hierarchy": "Hledger Utils",
        "module": "Hledger.Utils",
        "name": "subtreeat",
        "normalized": "a-\u003eTree a-\u003eMaybe(Tree a)",
        "package": "hledger-lib",
        "partial": "",
        "signature": "a-\u003eTree a-\u003eMaybe(Tree a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Utils.html#v:subtreeinforest",
      "description": {
        "fct-descr": "\u003cp\u003eget the sub-tree for the specified node value in the first tree in\n forest in which it occurs.\n\u003c/p\u003e",
        "fct-module": "Hledger.Utils",
        "fct-package": "hledger-lib",
        "fct-signature": "a -\u003e [Tree a] -\u003e Maybe (Tree a)",
        "fct-source": "src/Hledger-Utils.html#subtreeinforest",
        "fct-type": "function",
        "title": "subtreeinforest"
      },
      "index": {
        "description": "get the sub-tree for the specified node value in the first tree in forest in which it occurs",
        "hierarchy": "Hledger Utils",
        "module": "Hledger.Utils",
        "name": "subtreeinforest",
        "normalized": "a-\u003e[Tree a]-\u003eMaybe(Tree a)",
        "package": "hledger-lib",
        "partial": "",
        "signature": "a-\u003e[Tree a]-\u003eMaybe(Tree a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Utils.html#v:testName",
      "description": {
        "fct-descr": "\u003cp\u003eGet a Test's label, or the empty string.\n\u003c/p\u003e",
        "fct-module": "Hledger.Utils",
        "fct-package": "hledger-lib",
        "fct-signature": "Test -\u003e String",
        "fct-source": "src/Hledger-Utils.html#testName",
        "fct-type": "function",
        "title": "testName"
      },
      "index": {
        "description": "Get Test label or the empty string",
        "hierarchy": "Hledger Utils",
        "module": "Hledger.Utils",
        "name": "testName",
        "normalized": "Test-\u003eString",
        "package": "hledger-lib",
        "partial": "Name",
        "signature": "Test-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Utils.html#v:toSystemString",
      "description": {
        "fct-descr": "\u003cp\u003eConvert a unicode string to a system string, encoding with UTF-8 if\n we are on a posix platform with GHC \u003c 7.2.\n\u003c/p\u003e",
        "fct-module": "Hledger.Utils",
        "fct-package": "hledger-lib",
        "fct-signature": "String -\u003e SystemString",
        "fct-source": "src/Hledger-Utils-UTF8IOCompat.html#toSystemString",
        "fct-type": "function",
        "title": "toSystemString"
      },
      "index": {
        "description": "Convert unicode string to system string encoding with UTF-8 if we are on posix platform with GHC",
        "hierarchy": "Hledger Utils",
        "module": "Hledger.Utils",
        "name": "toSystemString",
        "normalized": "String-\u003eSystemString",
        "package": "hledger-lib",
        "partial": "System String",
        "signature": "String-\u003eSystemString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Utils.html#v:trace",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003etrace\u003c/a\u003e\u003c/code\u003e function outputs the trace message given as its first argument,\nbefore returning the second argument as its result.\n\u003c/p\u003e\u003cp\u003eFor example, this returns the value of \u003ccode\u003ef x\u003c/code\u003e but first outputs the message.\n\u003c/p\u003e\u003cpre\u003e trace (\"calling f with x = \" ++ show x) (f x)\n\u003c/pre\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003etrace\u003c/a\u003e\u003c/code\u003e function should \u003cem\u003eonly\u003c/em\u003e be used for debugging, or for monitoring\nexecution. The function is not referentially transparent: its type indicates\nthat it is a pure function but it has the side effect of outputting the\ntrace message.\n\u003c/p\u003e",
        "fct-module": "Hledger.Utils",
        "fct-package": "hledger-lib",
        "fct-signature": "String -\u003e a -\u003e a",
        "fct-type": "function",
        "title": "trace"
      },
      "index": {
        "description": "The trace function outputs the trace message given as its first argument before returning the second argument as its result For example this returns the value of but first outputs the message trace calling with show The trace function should only be used for debugging or for monitoring execution The function is not referentially transparent its type indicates that it is pure function but it has the side effect of outputting the trace message",
        "hierarchy": "Hledger Utils",
        "module": "Hledger.Utils",
        "name": "trace",
        "normalized": "String-\u003ea-\u003ea",
        "package": "hledger-lib",
        "partial": "",
        "signature": "String-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Utils.html#v:traceWith",
      "description": {
        "fct-descr": "\u003cp\u003eCustom trace - like strace, with a custom show function.\n\u003c/p\u003e",
        "fct-module": "Hledger.Utils",
        "fct-package": "hledger-lib",
        "fct-signature": "(a -\u003e String) -\u003e a -\u003e a",
        "fct-source": "src/Hledger-Utils.html#traceWith",
        "fct-type": "function",
        "title": "traceWith"
      },
      "index": {
        "description": "Custom trace like strace with custom show function",
        "hierarchy": "Hledger Utils",
        "module": "Hledger.Utils",
        "name": "traceWith",
        "normalized": "(a-\u003eString)-\u003ea-\u003ea",
        "package": "hledger-lib",
        "partial": "With",
        "signature": "(a-\u003eString)-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Utils.html#v:treeFromPath",
      "description": {
        "fct-module": "Hledger.Utils",
        "fct-package": "hledger-lib",
        "fct-signature": "[a] -\u003e FastTree a",
        "fct-source": "src/Hledger-Utils.html#treeFromPath",
        "fct-type": "function",
        "title": "treeFromPath"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Utils",
        "module": "Hledger.Utils",
        "name": "treeFromPath",
        "normalized": "[a]-\u003eFastTree a",
        "package": "hledger-lib",
        "partial": "From Path",
        "signature": "[a]-\u003eFastTree a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Utils.html#v:treeFromPaths",
      "description": {
        "fct-module": "Hledger.Utils",
        "fct-package": "hledger-lib",
        "fct-signature": "[[a]] -\u003e FastTree a",
        "fct-source": "src/Hledger-Utils.html#treeFromPaths",
        "fct-type": "function",
        "title": "treeFromPaths"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Utils",
        "module": "Hledger.Utils",
        "name": "treeFromPaths",
        "normalized": "[[a]]-\u003eFastTree a",
        "package": "hledger-lib",
        "partial": "From Paths",
        "signature": "[[a]]-\u003eFastTree a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Utils.html#v:treeany",
      "description": {
        "fct-descr": "\u003cp\u003eis predicate true in any node of tree ?\n\u003c/p\u003e",
        "fct-module": "Hledger.Utils",
        "fct-package": "hledger-lib",
        "fct-signature": "(a -\u003e Bool) -\u003e Tree a -\u003e Bool",
        "fct-source": "src/Hledger-Utils.html#treeany",
        "fct-type": "function",
        "title": "treeany"
      },
      "index": {
        "description": "is predicate true in any node of tree",
        "hierarchy": "Hledger Utils",
        "module": "Hledger.Utils",
        "name": "treeany",
        "normalized": "(a-\u003eBool)-\u003eTree a-\u003eBool",
        "package": "hledger-lib",
        "partial": "",
        "signature": "(a-\u003eBool)-\u003eTree a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Utils.html#v:treefilter",
      "description": {
        "fct-descr": "\u003cp\u003eremove all subtrees whose nodes do not fulfill predicate\n\u003c/p\u003e",
        "fct-module": "Hledger.Utils",
        "fct-package": "hledger-lib",
        "fct-signature": "(a -\u003e Bool) -\u003e Tree a -\u003e Tree a",
        "fct-source": "src/Hledger-Utils.html#treefilter",
        "fct-type": "function",
        "title": "treefilter"
      },
      "index": {
        "description": "remove all subtrees whose nodes do not fulfill predicate",
        "hierarchy": "Hledger Utils",
        "module": "Hledger.Utils",
        "name": "treefilter",
        "normalized": "(a-\u003eBool)-\u003eTree a-\u003eTree a",
        "package": "hledger-lib",
        "partial": "",
        "signature": "(a-\u003eBool)-\u003eTree a-\u003eTree a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Utils.html#v:treemap",
      "description": {
        "fct-descr": "\u003cp\u003eapply f to all tree nodes\n\u003c/p\u003e",
        "fct-module": "Hledger.Utils",
        "fct-package": "hledger-lib",
        "fct-signature": "(a -\u003e b) -\u003e Tree a -\u003e Tree b",
        "fct-source": "src/Hledger-Utils.html#treemap",
        "fct-type": "function",
        "title": "treemap"
      },
      "index": {
        "description": "apply to all tree nodes",
        "hierarchy": "Hledger Utils",
        "module": "Hledger.Utils",
        "name": "treemap",
        "normalized": "(a-\u003eb)-\u003eTree a-\u003eTree b",
        "package": "hledger-lib",
        "partial": "",
        "signature": "(a-\u003eb)-\u003eTree a-\u003eTree b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Utils.html#v:treeprune",
      "description": {
        "fct-descr": "\u003cp\u003eremove all nodes past a certain depth\n\u003c/p\u003e",
        "fct-module": "Hledger.Utils",
        "fct-package": "hledger-lib",
        "fct-signature": "Int -\u003e Tree a -\u003e Tree a",
        "fct-source": "src/Hledger-Utils.html#treeprune",
        "fct-type": "function",
        "title": "treeprune"
      },
      "index": {
        "description": "remove all nodes past certain depth",
        "hierarchy": "Hledger Utils",
        "module": "Hledger.Utils",
        "name": "treeprune",
        "normalized": "Int-\u003eTree a-\u003eTree a",
        "package": "hledger-lib",
        "partial": "",
        "signature": "Int-\u003eTree a-\u003eTree a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Utils.html#v:unbracket",
      "description": {
        "fct-module": "Hledger.Utils",
        "fct-package": "hledger-lib",
        "fct-signature": "String -\u003e String",
        "fct-source": "src/Hledger-Utils.html#unbracket",
        "fct-type": "function",
        "title": "unbracket"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Utils",
        "module": "Hledger.Utils",
        "name": "unbracket",
        "normalized": "String-\u003eString",
        "package": "hledger-lib",
        "partial": "",
        "signature": "String-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Utils.html#v:underline",
      "description": {
        "fct-module": "Hledger.Utils",
        "fct-package": "hledger-lib",
        "fct-signature": "String -\u003e String",
        "fct-source": "src/Hledger-Utils.html#underline",
        "fct-type": "function",
        "title": "underline"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Utils",
        "module": "Hledger.Utils",
        "name": "underline",
        "normalized": "String-\u003eString",
        "package": "hledger-lib",
        "partial": "",
        "signature": "String-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Utils.html#v:unwords-39-",
      "description": {
        "fct-descr": "\u003cp\u003eQuote-aware version of unwords - single-quote strings which contain whitespace\n\u003c/p\u003e",
        "fct-module": "Hledger.Utils",
        "fct-package": "hledger-lib",
        "fct-signature": "[String] -\u003e String",
        "fct-source": "src/Hledger-Utils.html#unwords%27",
        "fct-type": "function",
        "title": "unwords'"
      },
      "index": {
        "description": "Quote-aware version of unwords single-quote strings which contain whitespace",
        "hierarchy": "Hledger Utils",
        "module": "Hledger.Utils",
        "name": "unwords'",
        "normalized": "[String]-\u003eString",
        "package": "hledger-lib",
        "partial": "",
        "signature": "[String]-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Utils.html#v:uppercase",
      "description": {
        "fct-module": "Hledger.Utils",
        "fct-package": "hledger-lib",
        "fct-signature": "[Char] -\u003e [Char]",
        "fct-source": "src/Hledger-Utils.html#uppercase",
        "fct-type": "function",
        "title": "uppercase"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Utils",
        "module": "Hledger.Utils",
        "name": "uppercase",
        "normalized": "[Char]-\u003e[Char]",
        "package": "hledger-lib",
        "partial": "",
        "signature": "[Char]-\u003e[Char]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Utils.html#v:userError-39-",
      "description": {
        "fct-descr": "\u003cp\u003eA SystemString-aware version of userError.\n\u003c/p\u003e",
        "fct-module": "Hledger.Utils",
        "fct-package": "hledger-lib",
        "fct-signature": "String -\u003e IOError",
        "fct-source": "src/Hledger-Utils-UTF8IOCompat.html#userError%27",
        "fct-type": "function",
        "title": "userError'"
      },
      "index": {
        "description": "SystemString-aware version of userError",
        "hierarchy": "Hledger Utils",
        "module": "Hledger.Utils",
        "name": "userError'",
        "normalized": "String-\u003eIOError",
        "package": "hledger-lib",
        "partial": "Error'",
        "signature": "String-\u003eIOError"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Utils.html#v:vConcatRightAligned",
      "description": {
        "fct-descr": "\u003cp\u003eCompose strings vertically and right-aligned.\n\u003c/p\u003e",
        "fct-module": "Hledger.Utils",
        "fct-package": "hledger-lib",
        "fct-signature": "[String] -\u003e String",
        "fct-source": "src/Hledger-Utils.html#vConcatRightAligned",
        "fct-type": "function",
        "title": "vConcatRightAligned"
      },
      "index": {
        "description": "Compose strings vertically and right-aligned",
        "hierarchy": "Hledger Utils",
        "module": "Hledger.Utils",
        "name": "vConcatRightAligned",
        "normalized": "[String]-\u003eString",
        "package": "hledger-lib",
        "partial": "Concat Right Aligned",
        "signature": "[String]-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Utils.html#v:whitespacechars",
      "description": {
        "fct-module": "Hledger.Utils",
        "fct-package": "hledger-lib",
        "fct-signature": "[Char]",
        "fct-source": "src/Hledger-Utils.html#whitespacechars",
        "fct-type": "function",
        "title": "whitespacechars"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger Utils",
        "module": "Hledger.Utils",
        "name": "whitespacechars",
        "normalized": "[Char]",
        "package": "hledger-lib",
        "partial": "",
        "signature": "[Char]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger-Utils.html#v:words-39-",
      "description": {
        "fct-descr": "\u003cp\u003eQuote-aware version of words - don't split on spaces which are inside quotes.\n NB correctly handles \u003ca\u003ea'b\u003c/a\u003e but not \u003ca\u003e''a''\u003c/a\u003e. Can raise an error if parsing fails.\n\u003c/p\u003e",
        "fct-module": "Hledger.Utils",
        "fct-package": "hledger-lib",
        "fct-signature": "String -\u003e [String]",
        "fct-source": "src/Hledger-Utils.html#words%27",
        "fct-type": "function",
        "title": "words'"
      },
      "index": {
        "description": "Quote-aware version of words don split on spaces which are inside quotes NB correctly handles but not Can raise an error if parsing fails",
        "hierarchy": "Hledger Utils",
        "module": "Hledger.Utils",
        "name": "words'",
        "normalized": "String-\u003e[String]",
        "package": "hledger-lib",
        "partial": "",
        "signature": "String-\u003e[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger.html#",
      "description": {
        "fct-module": "Hledger",
        "fct-package": "hledger-lib",
        "fct-signature": "module",
        "fct-source": "src/Hledger.html",
        "fct-type": "module",
        "title": "Hledger"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger",
        "module": "Hledger",
        "name": "Hledger",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "Hledger",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hledger-lib/docs/Hledger.html#v:tests_Hledger",
      "description": {
        "fct-module": "Hledger",
        "fct-package": "hledger-lib",
        "fct-signature": "Test",
        "fct-source": "src/Hledger.html#tests_Hledger",
        "fct-type": "function",
        "title": "tests_Hledger"
      },
      "index": {
        "description": "",
        "hierarchy": "Hledger",
        "module": "Hledger",
        "name": "tests_Hledger",
        "normalized": "",
        "package": "hledger-lib",
        "partial": "Hledger",
        "signature": ""
      }
    }
  }
]