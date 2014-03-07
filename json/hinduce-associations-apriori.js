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
        "word": "hinduce-associations-apriori"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HInduce.Associations.Apriori",
          "name": "Apriori",
          "package": "hinduce-associations-apriori",
          "source": "src/Data-HInduce-Associations-Apriori.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data HInduce Associations Apriori",
          "module": "Data.HInduce.Associations.Apriori",
          "name": "Apriori",
          "package": "hinduce-associations-apriori",
          "partial": "Apriori",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hinduce-associations-apriori/docs/Data-HInduce-Associations-Apriori.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HInduce.Associations.Apriori",
          "name": "Item",
          "package": "hinduce-associations-apriori",
          "source": "src/Data-HInduce-Associations-Apriori.html#Item",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data HInduce Associations Apriori",
          "module": "Data.HInduce.Associations.Apriori",
          "name": "Item",
          "package": "hinduce-associations-apriori",
          "partial": "Item",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/hinduce-associations-apriori/docs/Data-HInduce-Associations-Apriori.html#t:Item"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HInduce.Associations.Apriori",
          "name": "Items",
          "package": "hinduce-associations-apriori",
          "source": "src/Data-HInduce-Associations-Apriori.html#Items",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data HInduce Associations Apriori",
          "module": "Data.HInduce.Associations.Apriori",
          "name": "Items",
          "package": "hinduce-associations-apriori",
          "partial": "Items",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hinduce-associations-apriori/docs/Data-HInduce-Associations-Apriori.html#t:Items"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HInduce.Associations.Apriori",
          "name": "Transaction",
          "package": "hinduce-associations-apriori",
          "source": "src/Data-HInduce-Associations-Apriori.html#Transaction",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data HInduce Associations Apriori",
          "module": "Data.HInduce.Associations.Apriori",
          "name": "Transaction",
          "package": "hinduce-associations-apriori",
          "partial": "Transaction",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hinduce-associations-apriori/docs/Data-HInduce-Associations-Apriori.html#t:Transaction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLoad a dataset from a file, where each line represents one transaction\n\u003c/p\u003e",
          "module": "Data.HInduce.Associations.Apriori",
          "name": "loadDataSet",
          "package": "hinduce-associations-apriori",
          "signature": "String -\u003e IO [Transaction Int]",
          "source": "src/Data-HInduce-Associations-Apriori.html#loadDataSet",
          "type": "function"
        },
        "index": {
          "description": "Load dataset from file where each line represents one transaction",
          "hierarchy": "Data HInduce Associations Apriori",
          "module": "Data.HInduce.Associations.Apriori",
          "name": "loadDataSet",
          "normalized": "String-\u003eIO[Transaction Int]",
          "package": "hinduce-associations-apriori",
          "partial": "Data Set",
          "signature": "String-\u003eIO[Transaction Int]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hinduce-associations-apriori/docs/Data-HInduce-Associations-Apriori.html#v:loadDataSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven transactions on items, derive rules for items\n\u003c/p\u003e",
          "module": "Data.HInduce.Associations.Apriori",
          "name": "rules",
          "package": "hinduce-associations-apriori",
          "signature": "container (Transaction a)-\u003e Items a-\u003e (Map (Items a) Int -\u003e Map (Items a) Int)-\u003e Map (Items a, Items a) Double",
          "type": "function"
        },
        "index": {
          "description": "Given transactions on items derive rules for items",
          "hierarchy": "Data HInduce Associations Apriori",
          "module": "Data.HInduce.Associations.Apriori",
          "name": "rules",
          "normalized": "a(Transaction b)-\u003eItems b-\u003e(Map(Items b)Int-\u003eMap(Items b)Int)-\u003eMap(Items b,Items b)Double",
          "package": "hinduce-associations-apriori",
          "signature": "container(Transaction a)-\u003eItems a-\u003e(Map(Items a)Int-\u003eMap(Items a)Int)-\u003eMap(Items a,Items a)Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hinduce-associations-apriori/docs/Data-HInduce-Associations-Apriori.html#v:rules"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HInduce.Associations.Apriori",
          "name": "test",
          "package": "hinduce-associations-apriori",
          "signature": "IO [((Items Int, Items Int), Double)]",
          "source": "src/Data-HInduce-Associations-Apriori.html#test",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data HInduce Associations Apriori",
          "module": "Data.HInduce.Associations.Apriori",
          "name": "test",
          "normalized": "IO[((Items Int,Items Int),Double)]",
          "package": "hinduce-associations-apriori",
          "signature": "IO[((Items Int,Items Int),Double)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hinduce-associations-apriori/docs/Data-HInduce-Associations-Apriori.html#v:test"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HInduce.Associations.Apriori",
          "name": "top",
          "package": "hinduce-associations-apriori",
          "signature": "([(Items a, Int)] -\u003e [(Items a, Int)]) -\u003e Map (Items a) Int -\u003e Map (Items a) Int",
          "source": "src/Data-HInduce-Associations-Apriori.html#top",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data HInduce Associations Apriori",
          "module": "Data.HInduce.Associations.Apriori",
          "name": "top",
          "normalized": "([(Items a,Int)]-\u003e[(Items a,Int)])-\u003eMap(Items a)Int-\u003eMap(Items a)Int",
          "package": "hinduce-associations-apriori",
          "signature": "([(Items a,Int)]-\u003e[(Items a,Int)])-\u003eMap(Items a)Int-\u003eMap(Items a)Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hinduce-associations-apriori/docs/Data-HInduce-Associations-Apriori.html#v:top"
      }
    }
  ]
]