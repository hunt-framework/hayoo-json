[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hinduce-associations-apriori/docs/Data-HInduce-Associations-Apriori.html#",
      "description": {
        "fct-module": "Data.HInduce.Associations.Apriori",
        "fct-package": "hinduce-associations-apriori",
        "fct-signature": "module",
        "fct-source": "src/Data-HInduce-Associations-Apriori.html",
        "fct-type": "module",
        "title": "Apriori"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HInduce Associations Apriori",
        "module": "Data.HInduce.Associations.Apriori",
        "name": "Apriori",
        "normalized": "",
        "package": "hinduce-associations-apriori",
        "partial": "Apriori",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hinduce-associations-apriori/docs/Data-HInduce-Associations-Apriori.html#t:Item",
      "description": {
        "fct-module": "Data.HInduce.Associations.Apriori",
        "fct-package": "hinduce-associations-apriori",
        "fct-signature": "class",
        "fct-source": "src/Data-HInduce-Associations-Apriori.html#Item",
        "fct-type": "class",
        "title": "Item"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HInduce Associations Apriori",
        "module": "Data.HInduce.Associations.Apriori",
        "name": "Item",
        "normalized": "",
        "package": "hinduce-associations-apriori",
        "partial": "Item",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hinduce-associations-apriori/docs/Data-HInduce-Associations-Apriori.html#t:Items",
      "description": {
        "fct-module": "Data.HInduce.Associations.Apriori",
        "fct-package": "hinduce-associations-apriori",
        "fct-signature": "type",
        "fct-source": "src/Data-HInduce-Associations-Apriori.html#Items",
        "fct-type": "type",
        "title": "Items"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HInduce Associations Apriori",
        "module": "Data.HInduce.Associations.Apriori",
        "name": "Items",
        "normalized": "",
        "package": "hinduce-associations-apriori",
        "partial": "Items",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hinduce-associations-apriori/docs/Data-HInduce-Associations-Apriori.html#t:Transaction",
      "description": {
        "fct-module": "Data.HInduce.Associations.Apriori",
        "fct-package": "hinduce-associations-apriori",
        "fct-signature": "type",
        "fct-source": "src/Data-HInduce-Associations-Apriori.html#Transaction",
        "fct-type": "type",
        "title": "Transaction"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HInduce Associations Apriori",
        "module": "Data.HInduce.Associations.Apriori",
        "name": "Transaction",
        "normalized": "",
        "package": "hinduce-associations-apriori",
        "partial": "Transaction",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hinduce-associations-apriori/docs/Data-HInduce-Associations-Apriori.html#v:loadDataSet",
      "description": {
        "fct-descr": "\u003cp\u003eLoad a dataset from a file, where each line represents one transaction\n\u003c/p\u003e",
        "fct-module": "Data.HInduce.Associations.Apriori",
        "fct-package": "hinduce-associations-apriori",
        "fct-signature": "String -\u003e IO [Transaction Int]",
        "fct-source": "src/Data-HInduce-Associations-Apriori.html#loadDataSet",
        "fct-type": "function",
        "title": "loadDataSet"
      },
      "index": {
        "description": "Load dataset from file where each line represents one transaction",
        "hierarchy": "Data HInduce Associations Apriori",
        "module": "Data.HInduce.Associations.Apriori",
        "name": "loadDataSet",
        "normalized": "String-\u003eIO[Transaction Int]",
        "package": "hinduce-associations-apriori",
        "partial": "Data Set",
        "signature": "String-\u003eIO[Transaction Int]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hinduce-associations-apriori/docs/Data-HInduce-Associations-Apriori.html#v:rules",
      "description": {
        "fct-descr": "\u003cp\u003eGiven transactions on items, derive rules for items\n\u003c/p\u003e",
        "fct-module": "Data.HInduce.Associations.Apriori",
        "fct-package": "hinduce-associations-apriori",
        "fct-signature": "container (Transaction a)-\u003e Items a-\u003e (Map (Items a) Int -\u003e Map (Items a) Int)-\u003e Map (Items a, Items a) Double",
        "fct-type": "function",
        "title": "rules"
      },
      "index": {
        "description": "Given transactions on items derive rules for items",
        "hierarchy": "Data HInduce Associations Apriori",
        "module": "Data.HInduce.Associations.Apriori",
        "name": "rules",
        "normalized": "a(Transaction b)-\u003eItems b-\u003e(Map(Items b)Int-\u003eMap(Items b)Int)-\u003eMap(Items b,Items b)Double",
        "package": "hinduce-associations-apriori",
        "partial": "",
        "signature": "container(Transaction a)-\u003eItems a-\u003e(Map(Items a)Int-\u003eMap(Items a)Int)-\u003eMap(Items a,Items a)Double"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hinduce-associations-apriori/docs/Data-HInduce-Associations-Apriori.html#v:test",
      "description": {
        "fct-module": "Data.HInduce.Associations.Apriori",
        "fct-package": "hinduce-associations-apriori",
        "fct-signature": "IO [((Items Int, Items Int), Double)]",
        "fct-source": "src/Data-HInduce-Associations-Apriori.html#test",
        "fct-type": "function",
        "title": "test"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HInduce Associations Apriori",
        "module": "Data.HInduce.Associations.Apriori",
        "name": "test",
        "normalized": "IO[((Items Int,Items Int),Double)]",
        "package": "hinduce-associations-apriori",
        "partial": "",
        "signature": "IO[((Items Int,Items Int),Double)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hinduce-associations-apriori/docs/Data-HInduce-Associations-Apriori.html#v:top",
      "description": {
        "fct-module": "Data.HInduce.Associations.Apriori",
        "fct-package": "hinduce-associations-apriori",
        "fct-signature": "([(Items a, Int)] -\u003e [(Items a, Int)]) -\u003e Map (Items a) Int -\u003e Map (Items a) Int",
        "fct-source": "src/Data-HInduce-Associations-Apriori.html#top",
        "fct-type": "function",
        "title": "top"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HInduce Associations Apriori",
        "module": "Data.HInduce.Associations.Apriori",
        "name": "top",
        "normalized": "([(Items a,Int)]-\u003e[(Items a,Int)])-\u003eMap(Items a)Int-\u003eMap(Items a)Int",
        "package": "hinduce-associations-apriori",
        "partial": "",
        "signature": "([(Items a,Int)]-\u003e[(Items a,Int)])-\u003eMap(Items a)Int-\u003eMap(Items a)Int"
      }
    }
  }
]