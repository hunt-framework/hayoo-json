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
        "word": "typeable-th"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Typeable.TH",
          "name": "TH",
          "package": "typeable-th",
          "source": "src/Data-Typeable-TH.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Typeable TH",
          "module": "Data.Typeable.TH",
          "name": "TH",
          "package": "typeable-th",
          "partial": "TH",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/typeable-th/docs/Data-Typeable-TH.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalculate the maximum N for which a TypeableN instance is generatable for a given kind. How this works is explained in\n the description at the top of this module.\n\u003c/p\u003e",
          "module": "Data.Typeable.TH",
          "name": "bestTypeable",
          "package": "typeable-th",
          "signature": "Kind -\u003e Int",
          "source": "src/Data-Typeable-TH.html#bestTypeable",
          "type": "function"
        },
        "index": {
          "description": "Calculate the maximum for which TypeableN instance is generatable for given kind How this works is explained in the description at the top of this module",
          "hierarchy": "Data Typeable TH",
          "module": "Data.Typeable.TH",
          "name": "bestTypeable",
          "normalized": "Kind-\u003eInt",
          "package": "typeable-th",
          "partial": "Typeable",
          "signature": "Kind-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/typeable-th/docs/Data-Typeable-TH.html#v:bestTypeable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003edropEnd n l\u003c/code\u003e drops \u003ccode\u003en\u003c/code\u003e items from the end of the list \u003ccode\u003el\u003c/code\u003e. This function is implemented the naive way, it might not\n be the fastest.\n\u003c/p\u003e",
          "module": "Data.Typeable.TH",
          "name": "dropEnd",
          "package": "typeable-th",
          "signature": "Int -\u003e [a] -\u003e [a]",
          "source": "src/Data-Typeable-TH.html#dropEnd",
          "type": "function"
        },
        "index": {
          "description": "dropEnd drops items from the end of the list This function is implemented the naive way it might not be the fastest",
          "hierarchy": "Data Typeable TH",
          "module": "Data.Typeable.TH",
          "name": "dropEnd",
          "normalized": "Int-\u003e[a]-\u003e[a]",
          "package": "typeable-th",
          "partial": "End",
          "signature": "Int-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/typeable-th/docs/Data-Typeable-TH.html#v:dropEnd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA helper function that makes sure the info is a TyConI, and throws an error otherwise.\n\u003c/p\u003e",
          "module": "Data.Typeable.TH",
          "name": "expectTyCon",
          "package": "typeable-th",
          "signature": "String -\u003e Info -\u003e Q Dec",
          "source": "src/Data-Typeable-TH.html#expectTyCon",
          "type": "function"
        },
        "index": {
          "description": "helper function that makes sure the info is TyConI and throws an error otherwise",
          "hierarchy": "Data Typeable TH",
          "module": "Data.Typeable.TH",
          "name": "expectTyCon",
          "normalized": "String-\u003eInfo-\u003eQ Dec",
          "package": "typeable-th",
          "partial": "Ty Con",
          "signature": "String-\u003eInfo-\u003eQ Dec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/typeable-th/docs/Data-Typeable-TH.html#v:expectTyCon"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDerive the \u003ca\u003ebest\u003c/a\u003e typeable instance for a given data type.\n\u003c/p\u003e",
          "module": "Data.Typeable.TH",
          "name": "makeTypeable",
          "package": "typeable-th",
          "signature": "Name -\u003e Q [Dec]",
          "source": "src/Data-Typeable-TH.html#makeTypeable",
          "type": "function"
        },
        "index": {
          "description": "Derive the best typeable instance for given data type",
          "hierarchy": "Data Typeable TH",
          "module": "Data.Typeable.TH",
          "name": "makeTypeable",
          "normalized": "Name-\u003eQ[Dec]",
          "package": "typeable-th",
          "partial": "Typeable",
          "signature": "Name-\u003eQ[Dec]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/typeable-th/docs/Data-Typeable-TH.html#v:makeTypeable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDerive the given TypeableN instance for a data type. Using N=0 generates a plain Typeable instance. Note that this function may\n fail if it's not possible to derive the requested TypeableN instance.\n\u003c/p\u003e",
          "module": "Data.Typeable.TH",
          "name": "makeTypeableN",
          "package": "typeable-th",
          "signature": "Name -\u003e Int -\u003e Q [Dec]",
          "source": "src/Data-Typeable-TH.html#makeTypeableN",
          "type": "function"
        },
        "index": {
          "description": "Derive the given TypeableN instance for data type Using generates plain Typeable instance Note that this function may fail if it not possible to derive the requested TypeableN instance",
          "hierarchy": "Data Typeable TH",
          "module": "Data.Typeable.TH",
          "name": "makeTypeableN",
          "normalized": "Name-\u003eInt-\u003eQ[Dec]",
          "package": "typeable-th",
          "partial": "Typeable",
          "signature": "Name-\u003eInt-\u003eQ[Dec]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/typeable-th/docs/Data-Typeable-TH.html#v:makeTypeableN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSplit a kind into a list of kinds, where each list element is a kind of the parameter of the orginal kind.\n The list is ordered, a parameter which comes first comes first in the list too.\n\u003c/p\u003e",
          "module": "Data.Typeable.TH",
          "name": "params",
          "package": "typeable-th",
          "signature": "Kind -\u003e [Kind]",
          "source": "src/Data-Typeable-TH.html#params",
          "type": "function"
        },
        "index": {
          "description": "Split kind into list of kinds where each list element is kind of the parameter of the orginal kind The list is ordered parameter which comes first comes first in the list too",
          "hierarchy": "Data Typeable TH",
          "module": "Data.Typeable.TH",
          "name": "params",
          "normalized": "Kind-\u003e[Kind]",
          "package": "typeable-th",
          "signature": "Kind-\u003e[Kind]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/typeable-th/docs/Data-Typeable-TH.html#v:params"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSplit the part in front of the arrow from a kind, and return the rest (if there is any rest).\n Example: splitKind (* -\u003e *) -\u003e * -\u003e * will return ((* -\u003e *),Just * -\u003e *).\n This is used to implement \u003ccode\u003e\u003ca\u003eparams\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Typeable.TH",
          "name": "splitKind",
          "package": "typeable-th",
          "signature": "Kind -\u003e (Kind, Maybe Kind)",
          "source": "src/Data-Typeable-TH.html#splitKind",
          "type": "function"
        },
        "index": {
          "description": "Split the part in front of the arrow from kind and return the rest if there is any rest Example splitKind will return Just This is used to implement params",
          "hierarchy": "Data Typeable TH",
          "module": "Data.Typeable.TH",
          "name": "splitKind",
          "normalized": "Kind-\u003e(Kind,Maybe Kind)",
          "package": "typeable-th",
          "partial": "Kind",
          "signature": "Kind-\u003e(Kind,Maybe Kind)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/typeable-th/docs/Data-Typeable-TH.html#v:splitKind"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate a data type with the given kind that has no constructor and return the name of it.\n The state is used for generating unqiue names for the data type.\n\u003c/p\u003e",
          "module": "Data.Typeable.TH",
          "name": "typeOfKind",
          "package": "typeable-th",
          "signature": "Kind -\u003e StateT Integer Q (Name, [Dec])",
          "source": "src/Data-Typeable-TH.html#typeOfKind",
          "type": "function"
        },
        "index": {
          "description": "Generate data type with the given kind that has no constructor and return the name of it The state is used for generating unqiue names for the data type",
          "hierarchy": "Data Typeable TH",
          "module": "Data.Typeable.TH",
          "name": "typeOfKind",
          "normalized": "Kind-\u003eStateT Integer Q(Name,[Dec])",
          "package": "typeable-th",
          "partial": "Of Kind",
          "signature": "Kind-\u003eStateT Integer Q(Name,[Dec])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/typeable-th/docs/Data-Typeable-TH.html#v:typeOfKind"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the expression to get the TypeRep of a given type variable with a given kind.\n\u003c/p\u003e",
          "module": "Data.Typeable.TH",
          "name": "typeRepOf",
          "package": "typeable-th",
          "signature": "Name -\u003e Kind -\u003e WriterT ([Dec], [Pred]) (StateT Integer Q) Exp",
          "source": "src/Data-Typeable-TH.html#typeRepOf",
          "type": "function"
        },
        "index": {
          "description": "Returns the expression to get the TypeRep of given type variable with given kind",
          "hierarchy": "Data Typeable TH",
          "module": "Data.Typeable.TH",
          "name": "typeRepOf",
          "normalized": "Name-\u003eKind-\u003eWriterT([Dec],[Pred])(StateT Integer Q)Exp",
          "package": "typeable-th",
          "partial": "Rep Of",
          "signature": "Name-\u003eKind-\u003eWriterT([Dec],[Pred])(StateT Integer Q)Exp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/typeable-th/docs/Data-Typeable-TH.html#v:typeRepOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate the typeOfN function of TypeableN, tell'ing all instance context predicates and declarations we need. We also update\n a state to have a counter for generating unique names for data types we declare.\n\u003c/p\u003e",
          "module": "Data.Typeable.TH",
          "name": "typeableBody",
          "package": "typeable-th",
          "signature": "Name -\u003e Kind -\u003e Int -\u003e [Name] -\u003e WriterT ([Dec], [Pred]) (StateT Integer Q) Exp",
          "source": "src/Data-Typeable-TH.html#typeableBody",
          "type": "function"
        },
        "index": {
          "description": "Generate the typeOfN function of TypeableN tell ing all instance context predicates and declarations we need We also update state to have counter for generating unique names for data types we declare",
          "hierarchy": "Data Typeable TH",
          "module": "Data.Typeable.TH",
          "name": "typeableBody",
          "normalized": "Name-\u003eKind-\u003eInt-\u003e[Name]-\u003eWriterT([Dec],[Pred])(StateT Integer Q)Exp",
          "package": "typeable-th",
          "partial": "Body",
          "signature": "Name-\u003eKind-\u003eInt-\u003e[Name]-\u003eWriterT([Dec],[Pred])(StateT Integer Q)Exp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/typeable-th/docs/Data-Typeable-TH.html#v:typeableBody"
      }
    }
  ]
]