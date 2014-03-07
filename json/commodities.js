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
        "word": "commodities"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Ledger.Balance",
          "name": "Balance",
          "package": "commodities",
          "source": "src/Ledger-Balance.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Ledger Balance",
          "module": "Ledger.Balance",
          "name": "Balance",
          "package": "commodities",
          "partial": "Balance",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/commodities/docs/Ledger-Balance.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA value representing either zero (all zeroes are equivalent), a\n commoditized value, or a vector space of values indexed by commodity.\n\u003c/p\u003e",
          "module": "Ledger.Balance",
          "name": "Balance",
          "package": "commodities",
          "source": "src/Ledger-Balance.html#Balance",
          "type": "data"
        },
        "index": {
          "description": "value representing either zero all zeroes are equivalent commoditized value or vector space of values indexed by commodity",
          "hierarchy": "Ledger Balance",
          "module": "Ledger.Balance",
          "name": "Balance",
          "package": "commodities",
          "partial": "Balance",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/commodities/docs/Ledger-Balance.html#t:Balance"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA single commoditized amount\n\u003c/p\u003e",
          "module": "Ledger.Balance",
          "name": "Amount",
          "package": "commodities",
          "signature": "Amount Commodity a",
          "source": "src/Ledger-Balance.html#Balance",
          "type": "function"
        },
        "index": {
          "description": "single commoditized amount",
          "hierarchy": "Ledger Balance",
          "module": "Ledger.Balance",
          "name": "Amount",
          "package": "commodities",
          "partial": "Amount",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/commodities/docs/Ledger-Balance.html#v:Amount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA vector-space over commodities\n\u003c/p\u003e",
          "module": "Ledger.Balance",
          "name": "Balance",
          "package": "commodities",
          "signature": "Balance (IntMap a)",
          "source": "src/Ledger-Balance.html#Balance",
          "type": "function"
        },
        "index": {
          "description": "vector-space over commodities",
          "hierarchy": "Ledger Balance",
          "module": "Ledger.Balance",
          "name": "Balance",
          "package": "commodities",
          "partial": "Balance",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/commodities/docs/Ledger-Balance.html#v:Balance"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn uncommoditized integer\n\u003c/p\u003e",
          "module": "Ledger.Balance",
          "name": "Plain",
          "package": "commodities",
          "signature": "Plain a",
          "source": "src/Ledger-Balance.html#Balance",
          "type": "function"
        },
        "index": {
          "description": "An uncommoditized integer",
          "hierarchy": "Ledger Balance",
          "module": "Ledger.Balance",
          "name": "Plain",
          "package": "commodities",
          "partial": "Plain",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/commodities/docs/Ledger-Balance.html#v:Plain"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Ledger.Balance",
          "name": "Zero",
          "package": "commodities",
          "signature": "Zero",
          "source": "src/Ledger-Balance.html#Balance",
          "type": "function"
        },
        "index": {
          "hierarchy": "Ledger Balance",
          "module": "Ledger.Balance",
          "name": "Zero",
          "package": "commodities",
          "partial": "Zero",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/commodities/docs/Ledger-Balance.html#v:Zero"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Ledger.Balance",
          "name": "balanceStore",
          "package": "commodities",
          "signature": "Key f -\u003e f a -\u003e Store (Key f) a",
          "source": "src/Ledger-Balance.html#balanceStore",
          "type": "function"
        },
        "index": {
          "hierarchy": "Ledger Balance",
          "module": "Ledger.Balance",
          "name": "balanceStore",
          "normalized": "Key a-\u003ea b-\u003eStore(Key a)b",
          "package": "commodities",
          "partial": "Store",
          "signature": "Key f-\u003ef a-\u003eStore(Key f)a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/commodities/docs/Ledger-Balance.html#v:balanceStore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Ledger.Balance",
          "name": "balanceSum",
          "package": "commodities",
          "signature": "[Balance a] -\u003e Balance a",
          "source": "src/Ledger-Balance.html#balanceSum",
          "type": "function"
        },
        "index": {
          "hierarchy": "Ledger Balance",
          "module": "Ledger.Balance",
          "name": "balanceSum",
          "normalized": "[Balance a]-\u003eBalance a",
          "package": "commodities",
          "partial": "Sum",
          "signature": "[Balance a]-\u003eBalance a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/commodities/docs/Ledger-Balance.html#v:balanceSum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Ledger.Balance",
          "name": "delete",
          "package": "commodities",
          "signature": "Int -\u003e Balance a -\u003e Balance a",
          "source": "src/Ledger-Balance.html#delete",
          "type": "function"
        },
        "index": {
          "hierarchy": "Ledger Balance",
          "module": "Ledger.Balance",
          "name": "delete",
          "normalized": "Int-\u003eBalance a-\u003eBalance a",
          "package": "commodities",
          "signature": "Int-\u003eBalance a-\u003eBalance a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/commodities/docs/Ledger-Balance.html#v:delete"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Ledger.Balance",
          "name": "insert",
          "package": "commodities",
          "signature": "Int -\u003e a -\u003e Balance a -\u003e Balance a",
          "source": "src/Ledger-Balance.html#insert",
          "type": "function"
        },
        "index": {
          "hierarchy": "Ledger Balance",
          "module": "Ledger.Balance",
          "name": "insert",
          "normalized": "Int-\u003ea-\u003eBalance a-\u003eBalance a",
          "package": "commodities",
          "signature": "Int-\u003ea-\u003eBalance a-\u003eBalance a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/commodities/docs/Ledger-Balance.html#v:insert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Ledger.Balance",
          "name": "noCommodity",
          "package": "commodities",
          "signature": "Commodity",
          "source": "src/Ledger-Balance.html#noCommodity",
          "type": "function"
        },
        "index": {
          "hierarchy": "Ledger Balance",
          "module": "Ledger.Balance",
          "name": "noCommodity",
          "package": "commodities",
          "partial": "Commodity",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/commodities/docs/Ledger-Balance.html#v:noCommodity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Ledger.Commodity.History",
          "name": "History",
          "package": "commodities",
          "source": "src/Ledger-Commodity-History.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Ledger Commodity History",
          "module": "Ledger.Commodity.History",
          "name": "History",
          "package": "commodities",
          "partial": "History",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/commodities/docs/Ledger-Commodity-History.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd a price conversion in the form of a ratio between two commodities at\n   a specific point in time.\n\u003c/p\u003e",
          "module": "Ledger.Commodity.History",
          "name": "addConversion",
          "package": "commodities",
          "signature": "Commodity -\u003e Commodity -\u003e UTCTime -\u003e Rational -\u003e State CommodityMap ()",
          "source": "src/Ledger-Commodity-History.html#addConversion",
          "type": "function"
        },
        "index": {
          "description": "Add price conversion in the form of ratio between two commodities at specific point in time",
          "hierarchy": "Ledger Commodity History",
          "module": "Ledger.Commodity.History",
          "name": "addConversion",
          "normalized": "Commodity-\u003eCommodity-\u003eUTCTime-\u003eRational-\u003eState CommodityMap()",
          "package": "commodities",
          "partial": "Conversion",
          "signature": "Commodity-\u003eCommodity-\u003eUTCTime-\u003eRational-\u003eState CommodityMap()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/commodities/docs/Ledger-Commodity-History.html#v:addConversion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLookup a price conversion from the source commodity to the target, using\n   data from the given time or earlier.  Result is Nothing if no conversion\n   can be found, or else the best conversion ratio plus the time of the\n   oldest link.\n\u003c/p\u003e",
          "module": "Ledger.Commodity.History",
          "name": "findConversion",
          "package": "commodities",
          "signature": "Commodity-\u003e Commodity-\u003e UTCTime-\u003e CommodityMap-\u003e Maybe (UTCTime, Rational)",
          "type": "function"
        },
        "index": {
          "description": "Lookup price conversion from the source commodity to the target using data from the given time or earlier Result is Nothing if no conversion can be found or else the best conversion ratio plus the time of the oldest link",
          "hierarchy": "Ledger Commodity History",
          "module": "Ledger.Commodity.History",
          "name": "findConversion",
          "normalized": "Commodity-\u003eCommodity-\u003eUTCTime-\u003eCommodityMap-\u003eMaybe(UTCTime,Rational)",
          "package": "commodities",
          "partial": "Conversion",
          "signature": "Commodity-\u003eCommodity-\u003eUTCTime-\u003eCommodityMap-\u003eMaybe(UTCTime,Rational)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/commodities/docs/Ledger-Commodity-History.html#v:findConversion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis function computes an optimal (minimal distance) path through a graph\n   in a best-first fashion, starting from a given starting point.\n\u003c/p\u003e",
          "module": "Ledger.Commodity.History",
          "name": "intAStar",
          "package": "commodities",
          "signature": "(Key -\u003e IntMap c)-\u003e (Key -\u003e c)-\u003e (Key -\u003e Bool)-\u003e Key-\u003e Maybe [Key]",
          "type": "function"
        },
        "index": {
          "description": "This function computes an optimal minimal distance path through graph in best-first fashion starting from given starting point",
          "hierarchy": "Ledger Commodity History",
          "module": "Ledger.Commodity.History",
          "name": "intAStar",
          "normalized": "(Key-\u003eIntMap a)-\u003e(Key-\u003ea)-\u003e(Key-\u003eBool)-\u003eKey-\u003eMaybe[Key]",
          "package": "commodities",
          "partial": "AStar",
          "signature": "(Key-\u003eIntMap c)-\u003e(Key-\u003ec)-\u003e(Key-\u003eBool)-\u003eKey-\u003eMaybe[Key]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/commodities/docs/Ledger-Commodity-History.html#v:intAStar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis function computes an optimal (minimal distance) path through a graph\n in a best-first fashion, starting from a given starting point.\n\u003c/p\u003e",
          "module": "Ledger.Commodity.History",
          "name": "intAStarM",
          "package": "commodities",
          "signature": "(Key -\u003e m (IntMap c))-\u003e (Key -\u003e m c)-\u003e (Key -\u003e m Bool)-\u003e m Key-\u003e m (Maybe [Key])",
          "type": "function"
        },
        "index": {
          "description": "This function computes an optimal minimal distance path through graph in best-first fashion starting from given starting point",
          "hierarchy": "Ledger Commodity History",
          "module": "Ledger.Commodity.History",
          "name": "intAStarM",
          "normalized": "(Key-\u003ea(IntMap b))-\u003e(Key-\u003ea b)-\u003e(Key-\u003ea Bool)-\u003ea Key-\u003ea(Maybe[Key])",
          "package": "commodities",
          "partial": "AStar",
          "signature": "(Key-\u003em(IntMap c))-\u003e(Key-\u003em c)-\u003e(Key-\u003em Bool)-\u003em Key-\u003em(Maybe[Key])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/commodities/docs/Ledger-Commodity-History.html#v:intAStarM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Ledger.Commodity.Parse",
          "name": "Parse",
          "package": "commodities",
          "source": "src/Ledger-Commodity-Parse.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Ledger Commodity Parse",
          "module": "Ledger.Commodity.Parse",
          "name": "Parse",
          "package": "commodities",
          "partial": "Parse",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/commodities/docs/Ledger-Commodity-Parse.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Ledger.Commodity.Parse",
          "name": "parseBalance",
          "package": "commodities",
          "signature": "Text -\u003e m (Balance a)",
          "source": "src/Ledger-Commodity-Parse.html#parseBalance",
          "type": "function"
        },
        "index": {
          "hierarchy": "Ledger Commodity Parse",
          "module": "Ledger.Commodity.Parse",
          "name": "parseBalance",
          "normalized": "Text-\u003ea(Balance b)",
          "package": "commodities",
          "partial": "Balance",
          "signature": "Text-\u003em(Balance a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/commodities/docs/Ledger-Commodity-Parse.html#v:parseBalance"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Ledger.Commodity.Print",
          "name": "Print",
          "package": "commodities",
          "source": "src/Ledger-Commodity-Print.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Ledger Commodity Print",
          "module": "Ledger.Commodity.Print",
          "name": "Print",
          "package": "commodities",
          "partial": "Print",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/commodities/docs/Ledger-Commodity-Print.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Ledger.Commodity.Print",
          "name": "balance",
          "package": "commodities",
          "signature": "CommodityMap -\u003e Iso' (Balance a) Text",
          "source": "src/Ledger-Commodity-Print.html#balance",
          "type": "function"
        },
        "index": {
          "hierarchy": "Ledger Commodity Print",
          "module": "Ledger.Commodity.Print",
          "name": "balance",
          "normalized": "CommodityMap-\u003eIso'(Balance a)Text",
          "package": "commodities",
          "signature": "CommodityMap-\u003eIso'(Balance a)Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/commodities/docs/Ledger-Commodity-Print.html#v:balance"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Ledger.Commodity.Print",
          "name": "printBalance",
          "package": "commodities",
          "signature": "Balance a -\u003e m Text",
          "source": "src/Ledger-Commodity-Print.html#printBalance",
          "type": "function"
        },
        "index": {
          "hierarchy": "Ledger Commodity Print",
          "module": "Ledger.Commodity.Print",
          "name": "printBalance",
          "normalized": "Balance a-\u003eb Text",
          "package": "commodities",
          "partial": "Balance",
          "signature": "Balance a-\u003em Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/commodities/docs/Ledger-Commodity-Print.html#v:printBalance"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Ledger.Commodity",
          "name": "Commodity",
          "package": "commodities",
          "source": "src/Ledger-Commodity.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Ledger Commodity",
          "module": "Ledger.Commodity",
          "name": "Commodity",
          "package": "commodities",
          "partial": "Commodity",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/commodities/docs/Ledger-Commodity.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCommodities are simply indices into a commodity info map, which relates\n   such commodities to the information known about them.\n\u003c/p\u003e",
          "module": "Ledger.Commodity",
          "name": "Commodity",
          "package": "commodities",
          "source": "src/Ledger-Commodity.html#Commodity",
          "type": "type"
        },
        "index": {
          "description": "Commodities are simply indices into commodity info map which relates such commodities to the information known about them",
          "hierarchy": "Ledger Commodity",
          "module": "Ledger.Commodity",
          "name": "Commodity",
          "package": "commodities",
          "partial": "Commodity",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/commodities/docs/Ledger-Commodity.html#t:Commodity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAll of the information known about a commodity.\n\u003c/p\u003e",
          "module": "Ledger.Commodity",
          "name": "CommodityInfo",
          "package": "commodities",
          "source": "src/Ledger-Commodity.html#CommodityInfo",
          "type": "data"
        },
        "index": {
          "description": "All of the information known about commodity",
          "hierarchy": "Ledger Commodity",
          "module": "Ledger.Commodity",
          "name": "CommodityInfo",
          "package": "commodities",
          "partial": "Commodity Info",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/commodities/docs/Ledger-Commodity.html#t:CommodityInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA commodities map, relating commodity indices to information about\n   those commodities.\n\u003c/p\u003e",
          "module": "Ledger.Commodity",
          "name": "CommodityMap",
          "package": "commodities",
          "source": "src/Ledger-Commodity.html#CommodityMap",
          "type": "data"
        },
        "index": {
          "description": "commodities map relating commodity indices to information about those commodities",
          "hierarchy": "Ledger Commodity",
          "module": "Ledger.Commodity",
          "name": "CommodityMap",
          "package": "commodities",
          "partial": "Commodity Map",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/commodities/docs/Ledger-Commodity.html#t:CommodityMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Ledger.Commodity",
          "name": "HasCommodityInfo",
          "package": "commodities",
          "source": "src/Ledger-Commodity.html#HasCommodityInfo",
          "type": "class"
        },
        "index": {
          "hierarchy": "Ledger Commodity",
          "module": "Ledger.Commodity",
          "name": "HasCommodityInfo",
          "package": "commodities",
          "partial": "Has Commodity Info",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/commodities/docs/Ledger-Commodity.html#t:HasCommodityInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Ledger.Commodity",
          "name": "HasCommodityMap",
          "package": "commodities",
          "source": "src/Ledger-Commodity.html#HasCommodityMap",
          "type": "class"
        },
        "index": {
          "hierarchy": "Ledger Commodity",
          "module": "Ledger.Commodity",
          "name": "HasCommodityMap",
          "package": "commodities",
          "partial": "Has Commodity Map",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/commodities/docs/Ledger-Commodity.html#t:HasCommodityMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Ledger.Commodity",
          "name": "CommodityInfo",
          "package": "commodities",
          "signature": "CommodityInfo",
          "source": "src/Ledger-Commodity.html#CommodityInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Ledger Commodity",
          "module": "Ledger.Commodity",
          "name": "CommodityInfo",
          "package": "commodities",
          "partial": "Commodity Info",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/commodities/docs/Ledger-Commodity.html#v:CommodityInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Ledger.Commodity",
          "name": "CommodityMap",
          "package": "commodities",
          "signature": "CommodityMap",
          "source": "src/Ledger-Commodity.html#CommodityMap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Ledger Commodity",
          "module": "Ledger.Commodity",
          "name": "CommodityMap",
          "package": "commodities",
          "partial": "Commodity Map",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/commodities/docs/Ledger-Commodity.html#v:CommodityMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Ledger.Commodity",
          "name": "_commBuiltin",
          "package": "commodities",
          "signature": "Bool",
          "source": "src/Ledger-Commodity.html#CommodityInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Ledger Commodity",
          "module": "Ledger.Commodity",
          "name": "_commBuiltin",
          "package": "commodities",
          "partial": "Builtin",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/commodities/docs/Ledger-Commodity.html#v:_commBuiltin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Ledger.Commodity",
          "name": "_commDecimalComma",
          "package": "commodities",
          "signature": "Bool",
          "source": "src/Ledger-Commodity.html#CommodityInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Ledger Commodity",
          "module": "Ledger.Commodity",
          "name": "_commDecimalComma",
          "package": "commodities",
          "partial": "Decimal Comma",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/commodities/docs/Ledger-Commodity.html#v:_commDecimalComma"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Ledger.Commodity",
          "name": "_commHistory",
          "package": "commodities",
          "signature": "(IntMap (Map UTCTime Rational))",
          "source": "src/Ledger-Commodity.html#CommodityInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Ledger Commodity",
          "module": "Ledger.Commodity",
          "name": "_commHistory",
          "package": "commodities",
          "partial": "History",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/commodities/docs/Ledger-Commodity.html#v:_commHistory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Ledger.Commodity",
          "name": "_commKnown",
          "package": "commodities",
          "signature": "Bool",
          "source": "src/Ledger-Commodity.html#CommodityInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Ledger Commodity",
          "module": "Ledger.Commodity",
          "name": "_commKnown",
          "package": "commodities",
          "partial": "Known",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/commodities/docs/Ledger-Commodity.html#v:_commKnown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Ledger.Commodity",
          "name": "_commNoMarket",
          "package": "commodities",
          "signature": "Bool",
          "source": "src/Ledger-Commodity.html#CommodityInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Ledger Commodity",
          "module": "Ledger.Commodity",
          "name": "_commNoMarket",
          "package": "commodities",
          "partial": "No Market",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/commodities/docs/Ledger-Commodity.html#v:_commNoMarket"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Ledger.Commodity",
          "name": "_commPrecision",
          "package": "commodities",
          "signature": "Int",
          "source": "src/Ledger-Commodity.html#CommodityInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Ledger Commodity",
          "module": "Ledger.Commodity",
          "name": "_commPrecision",
          "package": "commodities",
          "partial": "Precision",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/commodities/docs/Ledger-Commodity.html#v:_commPrecision"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Ledger.Commodity",
          "name": "_commPrimary",
          "package": "commodities",
          "signature": "Bool",
          "source": "src/Ledger-Commodity.html#CommodityInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Ledger Commodity",
          "module": "Ledger.Commodity",
          "name": "_commPrimary",
          "package": "commodities",
          "partial": "Primary",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/commodities/docs/Ledger-Commodity.html#v:_commPrimary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Ledger.Commodity",
          "name": "_commSeparated",
          "package": "commodities",
          "signature": "Bool",
          "source": "src/Ledger-Commodity.html#CommodityInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Ledger Commodity",
          "module": "Ledger.Commodity",
          "name": "_commSeparated",
          "package": "commodities",
          "partial": "Separated",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/commodities/docs/Ledger-Commodity.html#v:_commSeparated"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Ledger.Commodity",
          "name": "_commSuffixed",
          "package": "commodities",
          "signature": "Bool",
          "source": "src/Ledger-Commodity.html#CommodityInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Ledger Commodity",
          "module": "Ledger.Commodity",
          "name": "_commSuffixed",
          "package": "commodities",
          "partial": "Suffixed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/commodities/docs/Ledger-Commodity.html#v:_commSuffixed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Ledger.Commodity",
          "name": "_commSymbol",
          "package": "commodities",
          "signature": "Text",
          "source": "src/Ledger-Commodity.html#CommodityInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Ledger Commodity",
          "module": "Ledger.Commodity",
          "name": "_commSymbol",
          "package": "commodities",
          "partial": "Symbol",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/commodities/docs/Ledger-Commodity.html#v:_commSymbol"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Ledger.Commodity",
          "name": "_commThousands",
          "package": "commodities",
          "signature": "Bool",
          "source": "src/Ledger-Commodity.html#CommodityInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Ledger Commodity",
          "module": "Ledger.Commodity",
          "name": "_commThousands",
          "package": "commodities",
          "partial": "Thousands",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/commodities/docs/Ledger-Commodity.html#v:_commThousands"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Ledger.Commodity",
          "name": "_commodities",
          "package": "commodities",
          "signature": "(IntMap CommodityInfo)",
          "source": "src/Ledger-Commodity.html#CommodityMap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Ledger Commodity",
          "module": "Ledger.Commodity",
          "name": "_commodities",
          "package": "commodities",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/commodities/docs/Ledger-Commodity.html#v:_commodities"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Ledger.Commodity",
          "name": "commBuiltin",
          "package": "commodities",
          "signature": "Lens' t Bool",
          "source": "src/Ledger-Commodity.html#commBuiltin",
          "type": "method"
        },
        "index": {
          "hierarchy": "Ledger Commodity",
          "module": "Ledger.Commodity",
          "name": "commBuiltin",
          "package": "commodities",
          "partial": "Builtin",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/commodities/docs/Ledger-Commodity.html#v:commBuiltin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Ledger.Commodity",
          "name": "commDecimalComma",
          "package": "commodities",
          "signature": "Lens' t Bool",
          "source": "src/Ledger-Commodity.html#commDecimalComma",
          "type": "method"
        },
        "index": {
          "hierarchy": "Ledger Commodity",
          "module": "Ledger.Commodity",
          "name": "commDecimalComma",
          "package": "commodities",
          "partial": "Decimal Comma",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/commodities/docs/Ledger-Commodity.html#v:commDecimalComma"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Ledger.Commodity",
          "name": "commHistory",
          "package": "commodities",
          "signature": "Lens' t (IntMap (Map UTCTime Rational))",
          "source": "src/Ledger-Commodity.html#commHistory",
          "type": "method"
        },
        "index": {
          "hierarchy": "Ledger Commodity",
          "module": "Ledger.Commodity",
          "name": "commHistory",
          "package": "commodities",
          "partial": "History",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/commodities/docs/Ledger-Commodity.html#v:commHistory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Ledger.Commodity",
          "name": "commKnown",
          "package": "commodities",
          "signature": "Lens' t Bool",
          "source": "src/Ledger-Commodity.html#commKnown",
          "type": "method"
        },
        "index": {
          "hierarchy": "Ledger Commodity",
          "module": "Ledger.Commodity",
          "name": "commKnown",
          "package": "commodities",
          "partial": "Known",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/commodities/docs/Ledger-Commodity.html#v:commKnown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Ledger.Commodity",
          "name": "commNoMarket",
          "package": "commodities",
          "signature": "Lens' t Bool",
          "source": "src/Ledger-Commodity.html#commNoMarket",
          "type": "method"
        },
        "index": {
          "hierarchy": "Ledger Commodity",
          "module": "Ledger.Commodity",
          "name": "commNoMarket",
          "package": "commodities",
          "partial": "No Market",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/commodities/docs/Ledger-Commodity.html#v:commNoMarket"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Ledger.Commodity",
          "name": "commPrecision",
          "package": "commodities",
          "signature": "Lens' t Int",
          "source": "src/Ledger-Commodity.html#commPrecision",
          "type": "method"
        },
        "index": {
          "hierarchy": "Ledger Commodity",
          "module": "Ledger.Commodity",
          "name": "commPrecision",
          "package": "commodities",
          "partial": "Precision",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/commodities/docs/Ledger-Commodity.html#v:commPrecision"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Ledger.Commodity",
          "name": "commPrimary",
          "package": "commodities",
          "signature": "Lens' t Bool",
          "source": "src/Ledger-Commodity.html#commPrimary",
          "type": "method"
        },
        "index": {
          "hierarchy": "Ledger Commodity",
          "module": "Ledger.Commodity",
          "name": "commPrimary",
          "package": "commodities",
          "partial": "Primary",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/commodities/docs/Ledger-Commodity.html#v:commPrimary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Ledger.Commodity",
          "name": "commSeparated",
          "package": "commodities",
          "signature": "Lens' t Bool",
          "source": "src/Ledger-Commodity.html#commSeparated",
          "type": "method"
        },
        "index": {
          "hierarchy": "Ledger Commodity",
          "module": "Ledger.Commodity",
          "name": "commSeparated",
          "package": "commodities",
          "partial": "Separated",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/commodities/docs/Ledger-Commodity.html#v:commSeparated"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Ledger.Commodity",
          "name": "commSuffixed",
          "package": "commodities",
          "signature": "Lens' t Bool",
          "source": "src/Ledger-Commodity.html#commSuffixed",
          "type": "method"
        },
        "index": {
          "hierarchy": "Ledger Commodity",
          "module": "Ledger.Commodity",
          "name": "commSuffixed",
          "package": "commodities",
          "partial": "Suffixed",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/commodities/docs/Ledger-Commodity.html#v:commSuffixed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Ledger.Commodity",
          "name": "commSymbol",
          "package": "commodities",
          "signature": "Lens' t Text",
          "source": "src/Ledger-Commodity.html#commSymbol",
          "type": "method"
        },
        "index": {
          "hierarchy": "Ledger Commodity",
          "module": "Ledger.Commodity",
          "name": "commSymbol",
          "package": "commodities",
          "partial": "Symbol",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/commodities/docs/Ledger-Commodity.html#v:commSymbol"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Ledger.Commodity",
          "name": "commThousands",
          "package": "commodities",
          "signature": "Lens' t Bool",
          "source": "src/Ledger-Commodity.html#commThousands",
          "type": "method"
        },
        "index": {
          "hierarchy": "Ledger Commodity",
          "module": "Ledger.Commodity",
          "name": "commThousands",
          "package": "commodities",
          "partial": "Thousands",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/commodities/docs/Ledger-Commodity.html#v:commThousands"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Ledger.Commodity",
          "name": "commodities",
          "package": "commodities",
          "signature": "Lens' t (IntMap CommodityInfo)",
          "source": "src/Ledger-Commodity.html#commodities",
          "type": "method"
        },
        "index": {
          "hierarchy": "Ledger Commodity",
          "module": "Ledger.Commodity",
          "name": "commodities",
          "package": "commodities",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/commodities/docs/Ledger-Commodity.html#v:commodities"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Ledger.Commodity",
          "name": "commodityInfo",
          "package": "commodities",
          "signature": "Lens' t CommodityInfo",
          "source": "src/Ledger-Commodity.html#commodityInfo",
          "type": "method"
        },
        "index": {
          "hierarchy": "Ledger Commodity",
          "module": "Ledger.Commodity",
          "name": "commodityInfo",
          "package": "commodities",
          "partial": "Info",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/commodities/docs/Ledger-Commodity.html#v:commodityInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Ledger.Commodity",
          "name": "commodityMap",
          "package": "commodities",
          "signature": "Lens' t CommodityMap",
          "source": "src/Ledger-Commodity.html#commodityMap",
          "type": "method"
        },
        "index": {
          "hierarchy": "Ledger Commodity",
          "module": "Ledger.Commodity",
          "name": "commodityMap",
          "package": "commodities",
          "partial": "Map",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/commodities/docs/Ledger-Commodity.html#v:commodityMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn a \u003ccode\u003e\u003ca\u003eCommodityInfo\u003c/a\u003e\u003c/code\u003e with defaults selected for all fields.  It is\n   intended that at least one field of the result will be modified\n   immediately.\n\u003c/p\u003e",
          "module": "Ledger.Commodity",
          "name": "defaultCommodityInfo",
          "package": "commodities",
          "signature": "CommodityInfo",
          "source": "src/Ledger-Commodity.html#defaultCommodityInfo",
          "type": "function"
        },
        "index": {
          "description": "Return CommodityInfo with defaults selected for all fields It is intended that at least one field of the result will be modified immediately",
          "hierarchy": "Ledger Commodity",
          "module": "Ledger.Commodity",
          "name": "defaultCommodityInfo",
          "package": "commodities",
          "partial": "Commodity Info",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/commodities/docs/Ledger-Commodity.html#v:defaultCommodityInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Ledger.Commodity",
          "name": "extendByDigits",
          "package": "commodities",
          "signature": "Int",
          "source": "src/Ledger-Commodity.html#extendByDigits",
          "type": "function"
        },
        "index": {
          "hierarchy": "Ledger Commodity",
          "module": "Ledger.Commodity",
          "name": "extendByDigits",
          "package": "commodities",
          "partial": "By Digits",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/commodities/docs/Ledger-Commodity.html#v:extendByDigits"
      }
    }
  ]
]