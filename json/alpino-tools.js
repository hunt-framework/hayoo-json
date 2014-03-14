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
        "word": "alpino-tools"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ePickling and unpickling of Alpino dependency structures from XML.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Alpino.DepStruct.Pickle",
          "name": "Pickle",
          "package": "alpino-tools",
          "source": "src/Data-Alpino-DepStruct-Pickle.html",
          "type": "module"
        },
        "index": {
          "description": "Pickling and unpickling of Alpino dependency structures from XML",
          "hierarchy": "Data Alpino DepStruct Pickle",
          "module": "Data.Alpino.DepStruct.Pickle",
          "name": "Pickle",
          "package": "alpino-tools",
          "partial": "Pickle",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/alpino-tools/docs/Data-Alpino-DepStruct-Pickle.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePickler for Alpino dependency structures.\n\u003c/p\u003e",
          "module": "Data.Alpino.DepStruct.Pickle",
          "name": "xpAlpinoDS",
          "package": "alpino-tools",
          "signature": "PU [UNode String] AlpinoDS",
          "source": "src/Data-Alpino-DepStruct-Pickle.html#xpAlpinoDS",
          "type": "function"
        },
        "index": {
          "description": "Pickler for Alpino dependency structures",
          "hierarchy": "Data Alpino DepStruct Pickle",
          "module": "Data.Alpino.DepStruct.Pickle",
          "name": "xpAlpinoDS",
          "normalized": "PU[UNode String]AlpinoDS",
          "package": "alpino-tools",
          "partial": "Alpino DS",
          "signature": "PU[UNode String]AlpinoDS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alpino-tools/docs/Data-Alpino-DepStruct-Pickle.html#v:xpAlpinoDS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDefinition and extraction of Alpino dependency triples.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Alpino.DepStruct.Triples",
          "name": "Triples",
          "package": "alpino-tools",
          "source": "src/Data-Alpino-DepStruct-Triples.html",
          "type": "module"
        },
        "index": {
          "description": "Definition and extraction of Alpino dependency triples",
          "hierarchy": "Data Alpino DepStruct Triples",
          "module": "Data.Alpino.DepStruct.Triples",
          "name": "Triples",
          "package": "alpino-tools",
          "partial": "Triples",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/alpino-tools/docs/Data-Alpino-DepStruct-Triples.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eDepTriple\u003c/a\u003e\u003c/code\u003e type represents a dependency that occurs in\n   a dependency structure. The triple consists of the head, a dependent, and\n   the relation between the head and the dependeny. For convenience, the\n   triple is composed of two \u003ccode\u003e\u003ca\u003eDepTripleComponent\u003c/a\u003e\u003c/code\u003e instances: the first\n   representing the head and its role in the relation, the second\n   representing the dependant and its role in the relation.\n\u003c/p\u003e",
          "module": "Data.Alpino.DepStruct.Triples",
          "name": "DepTriple",
          "package": "alpino-tools",
          "source": "src/Data-Alpino-DepStruct-Triples.html#DepTriple",
          "type": "data"
        },
        "index": {
          "description": "The DepTriple type represents dependency that occurs in dependency structure The triple consists of the head dependent and the relation between the head and the dependeny For convenience the triple is composed of two DepTripleComponent instances the first representing the head and its role in the relation the second representing the dependant and its role in the relation",
          "hierarchy": "Data Alpino DepStruct Triples",
          "module": "Data.Alpino.DepStruct.Triples",
          "name": "DepTriple",
          "package": "alpino-tools",
          "partial": "Dep Triple",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/alpino-tools/docs/Data-Alpino-DepStruct-Triples.html#t:DepTriple"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eDepTripleComponent\u003c/a\u003e\u003c/code\u003e type represents a head or a dependant in a\n   dependency relation.\n\u003c/p\u003e",
          "module": "Data.Alpino.DepStruct.Triples",
          "name": "DepTripleComponent",
          "package": "alpino-tools",
          "source": "src/Data-Alpino-DepStruct-Triples.html#DepTripleComponent",
          "type": "data"
        },
        "index": {
          "description": "The DepTripleComponent type represents head or dependant in dependency relation",
          "hierarchy": "Data Alpino DepStruct Triples",
          "module": "Data.Alpino.DepStruct.Triples",
          "name": "DepTripleComponent",
          "package": "alpino-tools",
          "partial": "Dep Triple Component",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/alpino-tools/docs/Data-Alpino-DepStruct-Triples.html#t:DepTripleComponent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Alpino.DepStruct.Triples",
          "name": "DepTriple",
          "package": "alpino-tools",
          "signature": "DepTriple",
          "source": "src/Data-Alpino-DepStruct-Triples.html#DepTriple",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Alpino DepStruct Triples",
          "module": "Data.Alpino.DepStruct.Triples",
          "name": "DepTriple",
          "package": "alpino-tools",
          "partial": "Dep Triple",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alpino-tools/docs/Data-Alpino-DepStruct-Triples.html#v:DepTriple"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Alpino.DepStruct.Triples",
          "name": "DepTripleComponent",
          "package": "alpino-tools",
          "signature": "DepTripleComponent",
          "source": "src/Data-Alpino-DepStruct-Triples.html#DepTripleComponent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Alpino DepStruct Triples",
          "module": "Data.Alpino.DepStruct.Triples",
          "name": "DepTripleComponent",
          "package": "alpino-tools",
          "partial": "Dep Triple Component",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alpino-tools/docs/Data-Alpino-DepStruct-Triples.html#v:DepTripleComponent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract \u003ccode\u003eDepTriples\u003c/code\u003e from the tree starting at the node represented by\n   the \u003ccode\u003e\u003ca\u003eTreePos\u003c/a\u003e\u003c/code\u003e zipper.\n\u003c/p\u003e",
          "module": "Data.Alpino.DepStruct.Triples",
          "name": "depTriples",
          "package": "alpino-tools",
          "signature": "TreePos Full DSLabel -\u003e Set DepTriple",
          "source": "src/Data-Alpino-DepStruct-Triples.html#depTriples",
          "type": "function"
        },
        "index": {
          "description": "Extract DepTriples from the tree starting at the node represented by the TreePos zipper",
          "hierarchy": "Data Alpino DepStruct Triples",
          "module": "Data.Alpino.DepStruct.Triples",
          "name": "depTriples",
          "normalized": "TreePos Full DSLabel-\u003eSet DepTriple",
          "package": "alpino-tools",
          "partial": "Triples",
          "signature": "TreePos Full DSLabel-\u003eSet DepTriple",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alpino-tools/docs/Data-Alpino-DepStruct-Triples.html#v:depTriples"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Alpino.DepStruct.Triples",
          "name": "tripleDep",
          "package": "alpino-tools",
          "signature": "DepTripleComponent",
          "source": "src/Data-Alpino-DepStruct-Triples.html#DepTriple",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Alpino DepStruct Triples",
          "module": "Data.Alpino.DepStruct.Triples",
          "name": "tripleDep",
          "package": "alpino-tools",
          "partial": "Dep",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alpino-tools/docs/Data-Alpino-DepStruct-Triples.html#v:tripleDep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Alpino.DepStruct.Triples",
          "name": "tripleHead",
          "package": "alpino-tools",
          "signature": "DepTripleComponent",
          "source": "src/Data-Alpino-DepStruct-Triples.html#DepTriple",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Alpino DepStruct Triples",
          "module": "Data.Alpino.DepStruct.Triples",
          "name": "tripleHead",
          "package": "alpino-tools",
          "partial": "Head",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alpino-tools/docs/Data-Alpino-DepStruct-Triples.html#v:tripleHead"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Alpino.DepStruct.Triples",
          "name": "triplePos",
          "package": "alpino-tools",
          "signature": "String",
          "source": "src/Data-Alpino-DepStruct-Triples.html#DepTripleComponent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Alpino DepStruct Triples",
          "module": "Data.Alpino.DepStruct.Triples",
          "name": "triplePos",
          "package": "alpino-tools",
          "partial": "Pos",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alpino-tools/docs/Data-Alpino-DepStruct-Triples.html#v:triplePos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Alpino.DepStruct.Triples",
          "name": "tripleRel",
          "package": "alpino-tools",
          "signature": "Rel",
          "source": "src/Data-Alpino-DepStruct-Triples.html#DepTripleComponent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Alpino DepStruct Triples",
          "module": "Data.Alpino.DepStruct.Triples",
          "name": "tripleRel",
          "package": "alpino-tools",
          "partial": "Rel",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alpino-tools/docs/Data-Alpino-DepStruct-Triples.html#v:tripleRel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Alpino.DepStruct.Triples",
          "name": "tripleRoot",
          "package": "alpino-tools",
          "signature": "String",
          "source": "src/Data-Alpino-DepStruct-Triples.html#DepTripleComponent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Alpino DepStruct Triples",
          "module": "Data.Alpino.DepStruct.Triples",
          "name": "tripleRoot",
          "package": "alpino-tools",
          "partial": "Root",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alpino-tools/docs/Data-Alpino-DepStruct-Triples.html#v:tripleRoot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFold over a tree depth-first, starting at the node wrapped in the\n   \u003ccode\u003e\u003ca\u003eTreePos\u003c/a\u003e\u003c/code\u003e zipper.\n\u003c/p\u003e",
          "module": "Data.Alpino.DepStruct.Triples",
          "name": "tzFold",
          "package": "alpino-tools",
          "signature": "(a -\u003e TreePos Full b -\u003e a) -\u003e a -\u003e TreePos Full b -\u003e a",
          "source": "src/Data-Alpino-DepStruct-Triples.html#tzFold",
          "type": "function"
        },
        "index": {
          "description": "Fold over tree depth-first starting at the node wrapped in the TreePos zipper",
          "hierarchy": "Data Alpino DepStruct Triples",
          "module": "Data.Alpino.DepStruct.Triples",
          "name": "tzFold",
          "normalized": "(a-\u003eTreePos Full b-\u003ea)-\u003ea-\u003eTreePos Full b-\u003ea",
          "package": "alpino-tools",
          "partial": "Fold",
          "signature": "(a-\u003eTreePos Full b-\u003ea)-\u003ea-\u003eTreePos Full b-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alpino-tools/docs/Data-Alpino-DepStruct-Triples.html#v:tzFold"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDefinitions for Alpino dependency structures.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Alpino.DepStruct",
          "name": "DepStruct",
          "package": "alpino-tools",
          "source": "src/Data-Alpino-DepStruct.html",
          "type": "module"
        },
        "index": {
          "description": "Definitions for Alpino dependency structures",
          "hierarchy": "Data Alpino DepStruct",
          "module": "Data.Alpino.DepStruct",
          "name": "DepStruct",
          "package": "alpino-tools",
          "partial": "Dep Struct",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/alpino-tools/docs/Data-Alpino-DepStruct.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAlpino dependency structures define syntactic relations between\n   words. For convenience, the dependency structure is represented\n   as a rose tree. Additionally, the dependency structure contains\n   the sentence corresponding to the dependency structure.\n\u003c/p\u003e",
          "module": "Data.Alpino.DepStruct",
          "name": "AlpinoDS",
          "package": "alpino-tools",
          "source": "src/Data-Alpino-DepStruct.html#AlpinoDS",
          "type": "data"
        },
        "index": {
          "description": "Alpino dependency structures define syntactic relations between words For convenience the dependency structure is represented as rose tree Additionally the dependency structure contains the sentence corresponding to the dependency structure",
          "hierarchy": "Data Alpino DepStruct",
          "module": "Data.Alpino.DepStruct",
          "name": "AlpinoDS",
          "package": "alpino-tools",
          "partial": "Alpino DS",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/alpino-tools/docs/Data-Alpino-DepStruct.html#t:AlpinoDS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Alpino.DepStruct",
          "name": "Cat",
          "package": "alpino-tools",
          "source": "src/Data-Alpino-DepStruct.html#Cat",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Alpino DepStruct",
          "module": "Data.Alpino.DepStruct",
          "name": "Cat",
          "package": "alpino-tools",
          "partial": "Cat",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/alpino-tools/docs/Data-Alpino-DepStruct.html#t:Cat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLabel containing syntactic or lexical information of a node.\n\u003c/p\u003e",
          "module": "Data.Alpino.DepStruct",
          "name": "DSLabel",
          "package": "alpino-tools",
          "source": "src/Data-Alpino-DepStruct.html#DSLabel",
          "type": "data"
        },
        "index": {
          "description": "Label containing syntactic or lexical information of node",
          "hierarchy": "Data Alpino DepStruct",
          "module": "Data.Alpino.DepStruct",
          "name": "DSLabel",
          "package": "alpino-tools",
          "partial": "DSLabel",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/alpino-tools/docs/Data-Alpino-DepStruct.html#t:DSLabel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Alpino.DepStruct",
          "name": "Rel",
          "package": "alpino-tools",
          "source": "src/Data-Alpino-DepStruct.html#Rel",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Alpino DepStruct",
          "module": "Data.Alpino.DepStruct",
          "name": "Rel",
          "package": "alpino-tools",
          "partial": "Rel",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/alpino-tools/docs/Data-Alpino-DepStruct.html#t:Rel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Alpino.DepStruct",
          "name": "AdvP",
          "package": "alpino-tools",
          "signature": "AdvP",
          "source": "src/Data-Alpino-DepStruct.html#Cat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Alpino DepStruct",
          "module": "Data.Alpino.DepStruct",
          "name": "AdvP",
          "package": "alpino-tools",
          "partial": "Adv",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alpino-tools/docs/Data-Alpino-DepStruct.html#v:AdvP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Alpino.DepStruct",
          "name": "Ahi",
          "package": "alpino-tools",
          "signature": "Ahi",
          "source": "src/Data-Alpino-DepStruct.html#Cat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Alpino DepStruct",
          "module": "Data.Alpino.DepStruct",
          "name": "Ahi",
          "package": "alpino-tools",
          "partial": "Ahi",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alpino-tools/docs/Data-Alpino-DepStruct.html#v:Ahi"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Alpino.DepStruct",
          "name": "AlpinoDS",
          "package": "alpino-tools",
          "signature": "AlpinoDS",
          "source": "src/Data-Alpino-DepStruct.html#AlpinoDS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Alpino DepStruct",
          "module": "Data.Alpino.DepStruct",
          "name": "AlpinoDS",
          "package": "alpino-tools",
          "partial": "Alpino DS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alpino-tools/docs/Data-Alpino-DepStruct.html#v:AlpinoDS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Alpino.DepStruct",
          "name": "Ap",
          "package": "alpino-tools",
          "signature": "Ap",
          "source": "src/Data-Alpino-DepStruct.html#Cat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Alpino DepStruct",
          "module": "Data.Alpino.DepStruct",
          "name": "Ap",
          "package": "alpino-tools",
          "partial": "Ap",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alpino-tools/docs/Data-Alpino-DepStruct.html#v:Ap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Alpino.DepStruct",
          "name": "App",
          "package": "alpino-tools",
          "signature": "App",
          "source": "src/Data-Alpino-DepStruct.html#Rel",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Alpino DepStruct",
          "module": "Data.Alpino.DepStruct",
          "name": "App",
          "package": "alpino-tools",
          "partial": "App",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alpino-tools/docs/Data-Alpino-DepStruct.html#v:App"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Alpino.DepStruct",
          "name": "Body",
          "package": "alpino-tools",
          "signature": "Body",
          "source": "src/Data-Alpino-DepStruct.html#Rel",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Alpino DepStruct",
          "module": "Data.Alpino.DepStruct",
          "name": "Body",
          "package": "alpino-tools",
          "partial": "Body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alpino-tools/docs/Data-Alpino-DepStruct.html#v:Body"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Alpino.DepStruct",
          "name": "CatLabel",
          "package": "alpino-tools",
          "signature": "CatLabel",
          "source": "src/Data-Alpino-DepStruct.html#DSLabel",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Alpino DepStruct",
          "module": "Data.Alpino.DepStruct",
          "name": "CatLabel",
          "package": "alpino-tools",
          "partial": "Cat Label",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alpino-tools/docs/Data-Alpino-DepStruct.html#v:CatLabel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Alpino.DepStruct",
          "name": "Cmp",
          "package": "alpino-tools",
          "signature": "Cmp",
          "source": "src/Data-Alpino-DepStruct.html#Rel",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Alpino DepStruct",
          "module": "Data.Alpino.DepStruct",
          "name": "Cmp",
          "package": "alpino-tools",
          "partial": "Cmp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alpino-tools/docs/Data-Alpino-DepStruct.html#v:Cmp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Alpino.DepStruct",
          "name": "Cnj",
          "package": "alpino-tools",
          "signature": "Cnj",
          "source": "src/Data-Alpino-DepStruct.html#Rel",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Alpino DepStruct",
          "module": "Data.Alpino.DepStruct",
          "name": "Cnj",
          "package": "alpino-tools",
          "partial": "Cnj",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alpino-tools/docs/Data-Alpino-DepStruct.html#v:Cnj"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Alpino.DepStruct",
          "name": "Conj",
          "package": "alpino-tools",
          "signature": "Conj",
          "source": "src/Data-Alpino-DepStruct.html#Cat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Alpino DepStruct",
          "module": "Data.Alpino.DepStruct",
          "name": "Conj",
          "package": "alpino-tools",
          "partial": "Conj",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alpino-tools/docs/Data-Alpino-DepStruct.html#v:Conj"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Alpino.DepStruct",
          "name": "Cp",
          "package": "alpino-tools",
          "signature": "Cp",
          "source": "src/Data-Alpino-DepStruct.html#Cat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Alpino DepStruct",
          "module": "Data.Alpino.DepStruct",
          "name": "Cp",
          "package": "alpino-tools",
          "partial": "Cp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alpino-tools/docs/Data-Alpino-DepStruct.html#v:Cp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Alpino.DepStruct",
          "name": "Crd",
          "package": "alpino-tools",
          "signature": "Crd",
          "source": "src/Data-Alpino-DepStruct.html#Rel",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Alpino DepStruct",
          "module": "Data.Alpino.DepStruct",
          "name": "Crd",
          "package": "alpino-tools",
          "partial": "Crd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alpino-tools/docs/Data-Alpino-DepStruct.html#v:Crd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Alpino.DepStruct",
          "name": "DLink",
          "package": "alpino-tools",
          "signature": "DLink",
          "source": "src/Data-Alpino-DepStruct.html#Rel",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Alpino DepStruct",
          "module": "Data.Alpino.DepStruct",
          "name": "DLink",
          "package": "alpino-tools",
          "partial": "DLink",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alpino-tools/docs/Data-Alpino-DepStruct.html#v:DLink"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Alpino.DepStruct",
          "name": "DP",
          "package": "alpino-tools",
          "signature": "DP",
          "source": "src/Data-Alpino-DepStruct.html#Rel",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Alpino DepStruct",
          "module": "Data.Alpino.DepStruct",
          "name": "DP",
          "package": "alpino-tools",
          "partial": "DP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alpino-tools/docs/Data-Alpino-DepStruct.html#v:DP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Alpino.DepStruct",
          "name": "DU",
          "package": "alpino-tools",
          "signature": "DU",
          "source": "src/Data-Alpino-DepStruct.html#Cat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Alpino DepStruct",
          "module": "Data.Alpino.DepStruct",
          "name": "DU",
          "package": "alpino-tools",
          "partial": "DU",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alpino-tools/docs/Data-Alpino-DepStruct.html#v:DU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Alpino.DepStruct",
          "name": "DashDash",
          "package": "alpino-tools",
          "signature": "DashDash",
          "source": "src/Data-Alpino-DepStruct.html#Rel",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Alpino DepStruct",
          "module": "Data.Alpino.DepStruct",
          "name": "DashDash",
          "package": "alpino-tools",
          "partial": "Dash Dash",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alpino-tools/docs/Data-Alpino-DepStruct.html#v:DashDash"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Alpino.DepStruct",
          "name": "Det",
          "package": "alpino-tools",
          "signature": "Det",
          "source": "src/Data-Alpino-DepStruct.html#Rel",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Alpino DepStruct",
          "module": "Data.Alpino.DepStruct",
          "name": "Det",
          "package": "alpino-tools",
          "partial": "Det",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alpino-tools/docs/Data-Alpino-DepStruct.html#v:Det"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Alpino.DepStruct",
          "name": "DetP",
          "package": "alpino-tools",
          "signature": "DetP",
          "source": "src/Data-Alpino-DepStruct.html#Cat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Alpino DepStruct",
          "module": "Data.Alpino.DepStruct",
          "name": "DetP",
          "package": "alpino-tools",
          "partial": "Det",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alpino-tools/docs/Data-Alpino-DepStruct.html#v:DetP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Alpino.DepStruct",
          "name": "Hd",
          "package": "alpino-tools",
          "signature": "Hd",
          "source": "src/Data-Alpino-DepStruct.html#Rel",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Alpino DepStruct",
          "module": "Data.Alpino.DepStruct",
          "name": "Hd",
          "package": "alpino-tools",
          "partial": "Hd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alpino-tools/docs/Data-Alpino-DepStruct.html#v:Hd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Alpino.DepStruct",
          "name": "Hdf",
          "package": "alpino-tools",
          "signature": "Hdf",
          "source": "src/Data-Alpino-DepStruct.html#Rel",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Alpino DepStruct",
          "module": "Data.Alpino.DepStruct",
          "name": "Hdf",
          "package": "alpino-tools",
          "partial": "Hdf",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alpino-tools/docs/Data-Alpino-DepStruct.html#v:Hdf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Alpino.DepStruct",
          "name": "Inf",
          "package": "alpino-tools",
          "signature": "Inf",
          "source": "src/Data-Alpino-DepStruct.html#Cat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Alpino DepStruct",
          "module": "Data.Alpino.DepStruct",
          "name": "Inf",
          "package": "alpino-tools",
          "partial": "Inf",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alpino-tools/docs/Data-Alpino-DepStruct.html#v:Inf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Alpino.DepStruct",
          "name": "Ld",
          "package": "alpino-tools",
          "signature": "Ld",
          "source": "src/Data-Alpino-DepStruct.html#Rel",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Alpino DepStruct",
          "module": "Data.Alpino.DepStruct",
          "name": "Ld",
          "package": "alpino-tools",
          "partial": "Ld",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alpino-tools/docs/Data-Alpino-DepStruct.html#v:Ld"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Alpino.DepStruct",
          "name": "LexLabel",
          "package": "alpino-tools",
          "signature": "LexLabel",
          "source": "src/Data-Alpino-DepStruct.html#DSLabel",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Alpino DepStruct",
          "module": "Data.Alpino.DepStruct",
          "name": "LexLabel",
          "package": "alpino-tools",
          "partial": "Lex Label",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alpino-tools/docs/Data-Alpino-DepStruct.html#v:LexLabel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Alpino.DepStruct",
          "name": "MWP",
          "package": "alpino-tools",
          "signature": "MWP",
          "source": "src/Data-Alpino-DepStruct.html#Rel",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Alpino DepStruct",
          "module": "Data.Alpino.DepStruct",
          "name": "MWP",
          "package": "alpino-tools",
          "partial": "MWP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alpino-tools/docs/Data-Alpino-DepStruct.html#v:MWP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Alpino.DepStruct",
          "name": "MWU",
          "package": "alpino-tools",
          "signature": "MWU",
          "source": "src/Data-Alpino-DepStruct.html#Cat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Alpino DepStruct",
          "module": "Data.Alpino.DepStruct",
          "name": "MWU",
          "package": "alpino-tools",
          "partial": "MWU",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alpino-tools/docs/Data-Alpino-DepStruct.html#v:MWU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Alpino.DepStruct",
          "name": "Me",
          "package": "alpino-tools",
          "signature": "Me",
          "source": "src/Data-Alpino-DepStruct.html#Rel",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Alpino DepStruct",
          "module": "Data.Alpino.DepStruct",
          "name": "Me",
          "package": "alpino-tools",
          "partial": "Me",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alpino-tools/docs/Data-Alpino-DepStruct.html#v:Me"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Alpino.DepStruct",
          "name": "Mod",
          "package": "alpino-tools",
          "signature": "Mod",
          "source": "src/Data-Alpino-DepStruct.html#Rel",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Alpino DepStruct",
          "module": "Data.Alpino.DepStruct",
          "name": "Mod",
          "package": "alpino-tools",
          "partial": "Mod",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alpino-tools/docs/Data-Alpino-DepStruct.html#v:Mod"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Alpino.DepStruct",
          "name": "NP",
          "package": "alpino-tools",
          "signature": "NP",
          "source": "src/Data-Alpino-DepStruct.html#Cat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Alpino DepStruct",
          "module": "Data.Alpino.DepStruct",
          "name": "NP",
          "package": "alpino-tools",
          "partial": "NP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alpino-tools/docs/Data-Alpino-DepStruct.html#v:NP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Alpino.DepStruct",
          "name": "Nucl",
          "package": "alpino-tools",
          "signature": "Nucl",
          "source": "src/Data-Alpino-DepStruct.html#Rel",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Alpino DepStruct",
          "module": "Data.Alpino.DepStruct",
          "name": "Nucl",
          "package": "alpino-tools",
          "partial": "Nucl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alpino-tools/docs/Data-Alpino-DepStruct.html#v:Nucl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Alpino.DepStruct",
          "name": "ObComp",
          "package": "alpino-tools",
          "signature": "ObComp",
          "source": "src/Data-Alpino-DepStruct.html#Rel",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Alpino DepStruct",
          "module": "Data.Alpino.DepStruct",
          "name": "ObComp",
          "package": "alpino-tools",
          "partial": "Ob Comp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alpino-tools/docs/Data-Alpino-DepStruct.html#v:ObComp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Alpino.DepStruct",
          "name": "Obj1",
          "package": "alpino-tools",
          "signature": "Obj1",
          "source": "src/Data-Alpino-DepStruct.html#Rel",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Alpino DepStruct",
          "module": "Data.Alpino.DepStruct",
          "name": "Obj1",
          "package": "alpino-tools",
          "partial": "Obj",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alpino-tools/docs/Data-Alpino-DepStruct.html#v:Obj1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Alpino.DepStruct",
          "name": "Obj2",
          "package": "alpino-tools",
          "signature": "Obj2",
          "source": "src/Data-Alpino-DepStruct.html#Rel",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Alpino DepStruct",
          "module": "Data.Alpino.DepStruct",
          "name": "Obj2",
          "package": "alpino-tools",
          "partial": "Obj",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alpino-tools/docs/Data-Alpino-DepStruct.html#v:Obj2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Alpino.DepStruct",
          "name": "Oti",
          "package": "alpino-tools",
          "signature": "Oti",
          "source": "src/Data-Alpino-DepStruct.html#Cat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Alpino DepStruct",
          "module": "Data.Alpino.DepStruct",
          "name": "Oti",
          "package": "alpino-tools",
          "partial": "Oti",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alpino-tools/docs/Data-Alpino-DepStruct.html#v:Oti"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Alpino.DepStruct",
          "name": "PC",
          "package": "alpino-tools",
          "signature": "PC",
          "source": "src/Data-Alpino-DepStruct.html#Rel",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Alpino DepStruct",
          "module": "Data.Alpino.DepStruct",
          "name": "PC",
          "package": "alpino-tools",
          "partial": "PC",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alpino-tools/docs/Data-Alpino-DepStruct.html#v:PC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Alpino.DepStruct",
          "name": "PObj1",
          "package": "alpino-tools",
          "signature": "PObj1",
          "source": "src/Data-Alpino-DepStruct.html#Rel",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Alpino DepStruct",
          "module": "Data.Alpino.DepStruct",
          "name": "PObj1",
          "package": "alpino-tools",
          "partial": "PObj",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alpino-tools/docs/Data-Alpino-DepStruct.html#v:PObj1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Alpino.DepStruct",
          "name": "PP",
          "package": "alpino-tools",
          "signature": "PP",
          "source": "src/Data-Alpino-DepStruct.html#Cat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Alpino DepStruct",
          "module": "Data.Alpino.DepStruct",
          "name": "PP",
          "package": "alpino-tools",
          "partial": "PP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alpino-tools/docs/Data-Alpino-DepStruct.html#v:PP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Alpino.DepStruct",
          "name": "PPart",
          "package": "alpino-tools",
          "signature": "PPart",
          "source": "src/Data-Alpino-DepStruct.html#Cat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Alpino DepStruct",
          "module": "Data.Alpino.DepStruct",
          "name": "PPart",
          "package": "alpino-tools",
          "partial": "PPart",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alpino-tools/docs/Data-Alpino-DepStruct.html#v:PPart"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Alpino.DepStruct",
          "name": "PPres",
          "package": "alpino-tools",
          "signature": "PPres",
          "source": "src/Data-Alpino-DepStruct.html#Cat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Alpino DepStruct",
          "module": "Data.Alpino.DepStruct",
          "name": "PPres",
          "package": "alpino-tools",
          "partial": "PPres",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alpino-tools/docs/Data-Alpino-DepStruct.html#v:PPres"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Alpino.DepStruct",
          "name": "PredC",
          "package": "alpino-tools",
          "signature": "PredC",
          "source": "src/Data-Alpino-DepStruct.html#Rel",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Alpino DepStruct",
          "module": "Data.Alpino.DepStruct",
          "name": "PredC",
          "package": "alpino-tools",
          "partial": "Pred",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alpino-tools/docs/Data-Alpino-DepStruct.html#v:PredC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Alpino.DepStruct",
          "name": "PredM",
          "package": "alpino-tools",
          "signature": "PredM",
          "source": "src/Data-Alpino-DepStruct.html#Rel",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Alpino DepStruct",
          "module": "Data.Alpino.DepStruct",
          "name": "PredM",
          "package": "alpino-tools",
          "partial": "Pred",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alpino-tools/docs/Data-Alpino-DepStruct.html#v:PredM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Alpino.DepStruct",
          "name": "Rel",
          "package": "alpino-tools",
          "signature": "Rel",
          "source": "src/Data-Alpino-DepStruct.html#Cat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Alpino DepStruct",
          "module": "Data.Alpino.DepStruct",
          "name": "Rel",
          "package": "alpino-tools",
          "partial": "Rel",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alpino-tools/docs/Data-Alpino-DepStruct.html#v:Rel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Alpino.DepStruct",
          "name": "Rhd",
          "package": "alpino-tools",
          "signature": "Rhd",
          "source": "src/Data-Alpino-DepStruct.html#Rel",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Alpino DepStruct",
          "module": "Data.Alpino.DepStruct",
          "name": "Rhd",
          "package": "alpino-tools",
          "partial": "Rhd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alpino-tools/docs/Data-Alpino-DepStruct.html#v:Rhd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Alpino.DepStruct",
          "name": "SMain",
          "package": "alpino-tools",
          "signature": "SMain",
          "source": "src/Data-Alpino-DepStruct.html#Cat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Alpino DepStruct",
          "module": "Data.Alpino.DepStruct",
          "name": "SMain",
          "package": "alpino-tools",
          "partial": "SMain",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alpino-tools/docs/Data-Alpino-DepStruct.html#v:SMain"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Alpino.DepStruct",
          "name": "SSub",
          "package": "alpino-tools",
          "signature": "SSub",
          "source": "src/Data-Alpino-DepStruct.html#Cat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Alpino DepStruct",
          "module": "Data.Alpino.DepStruct",
          "name": "SSub",
          "package": "alpino-tools",
          "partial": "SSub",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alpino-tools/docs/Data-Alpino-DepStruct.html#v:SSub"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Alpino.DepStruct",
          "name": "SV1",
          "package": "alpino-tools",
          "signature": "SV1",
          "source": "src/Data-Alpino-DepStruct.html#Cat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Alpino DepStruct",
          "module": "Data.Alpino.DepStruct",
          "name": "SV1",
          "package": "alpino-tools",
          "partial": "SV",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alpino-tools/docs/Data-Alpino-DepStruct.html#v:SV1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Alpino.DepStruct",
          "name": "SVP",
          "package": "alpino-tools",
          "signature": "SVP",
          "source": "src/Data-Alpino-DepStruct.html#Rel",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Alpino DepStruct",
          "module": "Data.Alpino.DepStruct",
          "name": "SVP",
          "package": "alpino-tools",
          "partial": "SVP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alpino-tools/docs/Data-Alpino-DepStruct.html#v:SVP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Alpino.DepStruct",
          "name": "SVan",
          "package": "alpino-tools",
          "signature": "SVan",
          "source": "src/Data-Alpino-DepStruct.html#Cat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Alpino DepStruct",
          "module": "Data.Alpino.DepStruct",
          "name": "SVan",
          "package": "alpino-tools",
          "partial": "SVan",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alpino-tools/docs/Data-Alpino-DepStruct.html#v:SVan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Alpino.DepStruct",
          "name": "Sat",
          "package": "alpino-tools",
          "signature": "Sat",
          "source": "src/Data-Alpino-DepStruct.html#Rel",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Alpino DepStruct",
          "module": "Data.Alpino.DepStruct",
          "name": "Sat",
          "package": "alpino-tools",
          "partial": "Sat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alpino-tools/docs/Data-Alpino-DepStruct.html#v:Sat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Alpino.DepStruct",
          "name": "Se",
          "package": "alpino-tools",
          "signature": "Se",
          "source": "src/Data-Alpino-DepStruct.html#Rel",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Alpino DepStruct",
          "module": "Data.Alpino.DepStruct",
          "name": "Se",
          "package": "alpino-tools",
          "partial": "Se",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alpino-tools/docs/Data-Alpino-DepStruct.html#v:Se"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Alpino.DepStruct",
          "name": "Su",
          "package": "alpino-tools",
          "signature": "Su",
          "source": "src/Data-Alpino-DepStruct.html#Rel",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Alpino DepStruct",
          "module": "Data.Alpino.DepStruct",
          "name": "Su",
          "package": "alpino-tools",
          "partial": "Su",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alpino-tools/docs/Data-Alpino-DepStruct.html#v:Su"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Alpino.DepStruct",
          "name": "Sup",
          "package": "alpino-tools",
          "signature": "Sup",
          "source": "src/Data-Alpino-DepStruct.html#Rel",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Alpino DepStruct",
          "module": "Data.Alpino.DepStruct",
          "name": "Sup",
          "package": "alpino-tools",
          "partial": "Sup",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alpino-tools/docs/Data-Alpino-DepStruct.html#v:Sup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Alpino.DepStruct",
          "name": "TI",
          "package": "alpino-tools",
          "signature": "TI",
          "source": "src/Data-Alpino-DepStruct.html#Cat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Alpino DepStruct",
          "module": "Data.Alpino.DepStruct",
          "name": "TI",
          "package": "alpino-tools",
          "partial": "TI",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alpino-tools/docs/Data-Alpino-DepStruct.html#v:TI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Alpino.DepStruct",
          "name": "Tag",
          "package": "alpino-tools",
          "signature": "Tag",
          "source": "src/Data-Alpino-DepStruct.html#Rel",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Alpino DepStruct",
          "module": "Data.Alpino.DepStruct",
          "name": "Tag",
          "package": "alpino-tools",
          "partial": "Tag",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alpino-tools/docs/Data-Alpino-DepStruct.html#v:Tag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Alpino.DepStruct",
          "name": "Top",
          "package": "alpino-tools",
          "signature": "Top",
          "source": "src/Data-Alpino-DepStruct.html#Rel",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Alpino DepStruct",
          "module": "Data.Alpino.DepStruct",
          "name": "Top",
          "package": "alpino-tools",
          "partial": "Top",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alpino-tools/docs/Data-Alpino-DepStruct.html#v:Top"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Alpino.DepStruct",
          "name": "TopCat",
          "package": "alpino-tools",
          "signature": "TopCat",
          "source": "src/Data-Alpino-DepStruct.html#Cat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Alpino DepStruct",
          "module": "Data.Alpino.DepStruct",
          "name": "TopCat",
          "package": "alpino-tools",
          "partial": "Top Cat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alpino-tools/docs/Data-Alpino-DepStruct.html#v:TopCat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Alpino.DepStruct",
          "name": "VC",
          "package": "alpino-tools",
          "signature": "VC",
          "source": "src/Data-Alpino-DepStruct.html#Rel",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Alpino DepStruct",
          "module": "Data.Alpino.DepStruct",
          "name": "VC",
          "package": "alpino-tools",
          "partial": "VC",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alpino-tools/docs/Data-Alpino-DepStruct.html#v:VC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Alpino.DepStruct",
          "name": "WhQ",
          "package": "alpino-tools",
          "signature": "WhQ",
          "source": "src/Data-Alpino-DepStruct.html#Cat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Alpino DepStruct",
          "module": "Data.Alpino.DepStruct",
          "name": "WhQ",
          "package": "alpino-tools",
          "partial": "Wh",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alpino-tools/docs/Data-Alpino-DepStruct.html#v:WhQ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Alpino.DepStruct",
          "name": "WhRel",
          "package": "alpino-tools",
          "signature": "WhRel",
          "source": "src/Data-Alpino-DepStruct.html#Cat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Alpino DepStruct",
          "module": "Data.Alpino.DepStruct",
          "name": "WhRel",
          "package": "alpino-tools",
          "partial": "Wh Rel",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alpino-tools/docs/Data-Alpino-DepStruct.html#v:WhRel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Alpino.DepStruct",
          "name": "WhSub",
          "package": "alpino-tools",
          "signature": "WhSub",
          "source": "src/Data-Alpino-DepStruct.html#Cat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Alpino DepStruct",
          "module": "Data.Alpino.DepStruct",
          "name": "WhSub",
          "package": "alpino-tools",
          "partial": "Wh Sub",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alpino-tools/docs/Data-Alpino-DepStruct.html#v:WhSub"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Alpino.DepStruct",
          "name": "Whd",
          "package": "alpino-tools",
          "signature": "Whd",
          "source": "src/Data-Alpino-DepStruct.html#Rel",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Alpino DepStruct",
          "module": "Data.Alpino.DepStruct",
          "name": "Whd",
          "package": "alpino-tools",
          "partial": "Whd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alpino-tools/docs/Data-Alpino-DepStruct.html#v:Whd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRoot of the dependency tree. \n\u003c/p\u003e",
          "module": "Data.Alpino.DepStruct",
          "name": "dsRoot",
          "package": "alpino-tools",
          "signature": "Tree DSLabel",
          "source": "src/Data-Alpino-DepStruct.html#AlpinoDS",
          "type": "function"
        },
        "index": {
          "description": "Root of the dependency tree",
          "hierarchy": "Data Alpino DepStruct",
          "module": "Data.Alpino.DepStruct",
          "name": "dsRoot",
          "package": "alpino-tools",
          "partial": "Root",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alpino-tools/docs/Data-Alpino-DepStruct.html#v:dsRoot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSentence corresponding to the dependency tree. \n\u003c/p\u003e",
          "module": "Data.Alpino.DepStruct",
          "name": "dsSentence",
          "package": "alpino-tools",
          "signature": "String",
          "source": "src/Data-Alpino-DepStruct.html#AlpinoDS",
          "type": "function"
        },
        "index": {
          "description": "Sentence corresponding to the dependency tree",
          "hierarchy": "Data Alpino DepStruct",
          "module": "Data.Alpino.DepStruct",
          "name": "dsSentence",
          "package": "alpino-tools",
          "partial": "Sentence",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alpino-tools/docs/Data-Alpino-DepStruct.html#v:dsSentence"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStart position\n\u003c/p\u003e\u003cp\u003eStart position\n\u003c/p\u003e",
          "module": "Data.Alpino.DepStruct",
          "name": "labelBegin",
          "package": "alpino-tools",
          "signature": "Maybe Integer",
          "source": "src/Data-Alpino-DepStruct.html#DSLabel",
          "type": "function"
        },
        "index": {
          "description": "Start position Start position",
          "hierarchy": "Data Alpino DepStruct",
          "module": "Data.Alpino.DepStruct",
          "name": "labelBegin",
          "package": "alpino-tools",
          "partial": "Begin",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alpino-tools/docs/Data-Alpino-DepStruct.html#v:labelBegin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDependency relation\n\u003c/p\u003e",
          "module": "Data.Alpino.DepStruct",
          "name": "labelCat",
          "package": "alpino-tools",
          "signature": "Cat",
          "source": "src/Data-Alpino-DepStruct.html#DSLabel",
          "type": "function"
        },
        "index": {
          "description": "Dependency relation",
          "hierarchy": "Data Alpino DepStruct",
          "module": "Data.Alpino.DepStruct",
          "name": "labelCat",
          "package": "alpino-tools",
          "partial": "Cat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alpino-tools/docs/Data-Alpino-DepStruct.html#v:labelCat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEnd position\n\u003c/p\u003e\u003cp\u003eEnd position\n\u003c/p\u003e",
          "module": "Data.Alpino.DepStruct",
          "name": "labelEnd",
          "package": "alpino-tools",
          "signature": "Maybe Integer",
          "source": "src/Data-Alpino-DepStruct.html#DSLabel",
          "type": "function"
        },
        "index": {
          "description": "End position End position",
          "hierarchy": "Data Alpino DepStruct",
          "module": "Data.Alpino.DepStruct",
          "name": "labelEnd",
          "package": "alpino-tools",
          "partial": "End",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alpino-tools/docs/Data-Alpino-DepStruct.html#v:labelEnd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCoindexation\n\u003c/p\u003e\u003cp\u003eCoindexation\n\u003c/p\u003e",
          "module": "Data.Alpino.DepStruct",
          "name": "labelIdx",
          "package": "alpino-tools",
          "signature": "Maybe Integer",
          "source": "src/Data-Alpino-DepStruct.html#DSLabel",
          "type": "function"
        },
        "index": {
          "description": "Coindexation Coindexation",
          "hierarchy": "Data Alpino DepStruct",
          "module": "Data.Alpino.DepStruct",
          "name": "labelIdx",
          "package": "alpino-tools",
          "partial": "Idx",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alpino-tools/docs/Data-Alpino-DepStruct.html#v:labelIdx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePart of speech tag\n\u003c/p\u003e",
          "module": "Data.Alpino.DepStruct",
          "name": "labelPos",
          "package": "alpino-tools",
          "signature": "String",
          "source": "src/Data-Alpino-DepStruct.html#DSLabel",
          "type": "function"
        },
        "index": {
          "description": "Part of speech tag",
          "hierarchy": "Data Alpino DepStruct",
          "module": "Data.Alpino.DepStruct",
          "name": "labelPos",
          "package": "alpino-tools",
          "partial": "Pos",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alpino-tools/docs/Data-Alpino-DepStruct.html#v:labelPos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDependency relation\n\u003c/p\u003e\u003cp\u003eCategory\n\u003c/p\u003e",
          "module": "Data.Alpino.DepStruct",
          "name": "labelRel",
          "package": "alpino-tools",
          "signature": "Rel",
          "source": "src/Data-Alpino-DepStruct.html#DSLabel",
          "type": "function"
        },
        "index": {
          "description": "Dependency relation Category",
          "hierarchy": "Data Alpino DepStruct",
          "module": "Data.Alpino.DepStruct",
          "name": "labelRel",
          "package": "alpino-tools",
          "partial": "Rel",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alpino-tools/docs/Data-Alpino-DepStruct.html#v:labelRel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRoot/stem\n\u003c/p\u003e",
          "module": "Data.Alpino.DepStruct",
          "name": "labelRoot",
          "package": "alpino-tools",
          "signature": "String",
          "source": "src/Data-Alpino-DepStruct.html#DSLabel",
          "type": "function"
        },
        "index": {
          "description": "Root stem",
          "hierarchy": "Data Alpino DepStruct",
          "module": "Data.Alpino.DepStruct",
          "name": "labelRoot",
          "package": "alpino-tools",
          "partial": "Root",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alpino-tools/docs/Data-Alpino-DepStruct.html#v:labelRoot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Alpino.Model.Conduit",
          "name": "Conduit",
          "package": "alpino-tools",
          "source": "src/Data-Alpino-Model-Conduit.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Alpino Model Conduit",
          "module": "Data.Alpino.Model.Conduit",
          "name": "Conduit",
          "package": "alpino-tools",
          "partial": "Conduit",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/alpino-tools/docs/Data-Alpino-Model-Conduit.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Alpino.Model.Conduit",
          "name": "addNewLine",
          "package": "alpino-tools",
          "signature": "Conduit ByteString m ByteString",
          "source": "src/Data-Alpino-Model-Conduit.html#addNewLine",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Alpino Model Conduit",
          "module": "Data.Alpino.Model.Conduit",
          "name": "addNewLine",
          "package": "alpino-tools",
          "partial": "New Line",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alpino-tools/docs/Data-Alpino-Model-Conduit.html#v:addNewLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrieve the best score from a list of training instances.\n\u003c/p\u003e",
          "module": "Data.Alpino.Model.Conduit",
          "name": "bestScore",
          "package": "alpino-tools",
          "signature": "Conduit [TrainingInstance] m Double",
          "source": "src/Data-Alpino-Model-Conduit.html#bestScore",
          "type": "function"
        },
        "index": {
          "description": "Retrieve the best score from list of training instances",
          "hierarchy": "Data Alpino Model Conduit",
          "module": "Data.Alpino.Model.Conduit",
          "name": "bestScore",
          "normalized": "Conduit[TrainingInstance]a Double",
          "package": "alpino-tools",
          "partial": "Score",
          "signature": "Conduit[TrainingInstance]m Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alpino-tools/docs/Data-Alpino-Model-Conduit.html#v:bestScore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Alpino.Model.Conduit",
          "name": "bsToTrainingInstance",
          "package": "alpino-tools",
          "signature": "Conduit ByteString m TrainingInstance",
          "source": "src/Data-Alpino-Model-Conduit.html#bsToTrainingInstance",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Alpino Model Conduit",
          "module": "Data.Alpino.Model.Conduit",
          "name": "bsToTrainingInstance",
          "package": "alpino-tools",
          "partial": "To Training Instance",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alpino-tools/docs/Data-Alpino-Model-Conduit.html#v:bsToTrainingInstance"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Alpino.Model.Conduit",
          "name": "concat",
          "package": "alpino-tools",
          "signature": "Conduit [a] m a",
          "source": "src/Data-Alpino-Model-Conduit.html#concat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Alpino Model Conduit",
          "module": "Data.Alpino.Model.Conduit",
          "name": "concat",
          "normalized": "Conduit[a]b a",
          "package": "alpino-tools",
          "signature": "Conduit[a]m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alpino-tools/docs/Data-Alpino-Model-Conduit.html#v:concat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFilter features by exact names. A modifier function can be applied,\n for instance, the \u003ccode\u003e\u003ca\u003enot\u003c/a\u003e\u003c/code\u003e function would exclude the specified features.\n\u003c/p\u003e",
          "module": "Data.Alpino.Model.Conduit",
          "name": "filterFeatures",
          "package": "alpino-tools",
          "signature": "(Bool -\u003e Bool) -\u003e Set ByteString -\u003e Conduit TrainingInstance m TrainingInstance",
          "source": "src/Data-Alpino-Model-Conduit.html#filterFeatures",
          "type": "function"
        },
        "index": {
          "description": "Filter features by exact names modifier function can be applied for instance the not function would exclude the specified features",
          "hierarchy": "Data Alpino Model Conduit",
          "module": "Data.Alpino.Model.Conduit",
          "name": "filterFeatures",
          "normalized": "(Bool-\u003eBool)-\u003eSet ByteString-\u003eConduit TrainingInstance a TrainingInstance",
          "package": "alpino-tools",
          "partial": "Features",
          "signature": "(Bool-\u003eBool)-\u003eSet ByteString-\u003eConduit TrainingInstance m TrainingInstance",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alpino-tools/docs/Data-Alpino-Model-Conduit.html#v:filterFeatures"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFilter features by their functor. A modifier function can be applied,\n for instance, the \u003ccode\u003e\u003ca\u003enot\u003c/a\u003e\u003c/code\u003e function would exclude the specified features.\n\u003c/p\u003e",
          "module": "Data.Alpino.Model.Conduit",
          "name": "filterFeaturesFunctor",
          "package": "alpino-tools",
          "signature": "(Bool -\u003e Bool) -\u003e Set ByteString -\u003e Conduit TrainingInstance m TrainingInstance",
          "source": "src/Data-Alpino-Model-Conduit.html#filterFeaturesFunctor",
          "type": "function"
        },
        "index": {
          "description": "Filter features by their functor modifier function can be applied for instance the not function would exclude the specified features",
          "hierarchy": "Data Alpino Model Conduit",
          "module": "Data.Alpino.Model.Conduit",
          "name": "filterFeaturesFunctor",
          "normalized": "(Bool-\u003eBool)-\u003eSet ByteString-\u003eConduit TrainingInstance a TrainingInstance",
          "package": "alpino-tools",
          "partial": "Features Functor",
          "signature": "(Bool-\u003eBool)-\u003eSet ByteString-\u003eConduit TrainingInstance m TrainingInstance",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alpino-tools/docs/Data-Alpino-Model-Conduit.html#v:filterFeaturesFunctor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGroup training instances by key.\n\u003c/p\u003e",
          "module": "Data.Alpino.Model.Conduit",
          "name": "groupByKey",
          "package": "alpino-tools",
          "signature": "Conduit TrainingInstance m [TrainingInstance]",
          "source": "src/Data-Alpino-Model-Conduit.html#groupByKey",
          "type": "function"
        },
        "index": {
          "description": "Group training instances by key",
          "hierarchy": "Data Alpino Model Conduit",
          "module": "Data.Alpino.Model.Conduit",
          "name": "groupByKey",
          "normalized": "Conduit TrainingInstance a[TrainingInstance]",
          "package": "alpino-tools",
          "partial": "By Key",
          "signature": "Conduit TrainingInstance m[TrainingInstance]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alpino-tools/docs/Data-Alpino-Model-Conduit.html#v:groupByKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Alpino.Model.Conduit",
          "name": "randomSample",
          "package": "alpino-tools",
          "signature": "Int -\u003e Conduit [TrainingInstance] m [TrainingInstance]",
          "source": "src/Data-Alpino-Model-Conduit.html#randomSample",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Alpino Model Conduit",
          "module": "Data.Alpino.Model.Conduit",
          "name": "randomSample",
          "normalized": "Int-\u003eConduit[TrainingInstance]a[TrainingInstance]",
          "package": "alpino-tools",
          "partial": "Sample",
          "signature": "Int-\u003eConduit[TrainingInstance]m[TrainingInstance]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alpino-tools/docs/Data-Alpino-Model-Conduit.html#v:randomSample"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConduit recaculating scores to binary scores (\u003cem\u003e1.0\u003c/em\u003e for best,\n \u003cem\u003e0.0\u003c/em\u003e for the rest).\n\u003c/p\u003e",
          "module": "Data.Alpino.Model.Conduit",
          "name": "scoreToBinary",
          "package": "alpino-tools",
          "signature": "Conduit [TrainingInstance] m [TrainingInstance]",
          "source": "src/Data-Alpino-Model-Conduit.html#scoreToBinary",
          "type": "function"
        },
        "index": {
          "description": "Conduit recaculating scores to binary scores for best for the rest",
          "hierarchy": "Data Alpino Model Conduit",
          "module": "Data.Alpino.Model.Conduit",
          "name": "scoreToBinary",
          "normalized": "Conduit[TrainingInstance]a[TrainingInstance]",
          "package": "alpino-tools",
          "partial": "To Binary",
          "signature": "Conduit[TrainingInstance]m[TrainingInstance]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alpino-tools/docs/Data-Alpino-Model-Conduit.html#v:scoreToBinary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConduit recalculating scores, dividing a score of \u003cem\u003e1.0\u003c/em\u003e uniformly\n over instances with the highest quality score.\n\u003c/p\u003e",
          "module": "Data.Alpino.Model.Conduit",
          "name": "scoreToBinaryNorm",
          "package": "alpino-tools",
          "signature": "Conduit [TrainingInstance] m [TrainingInstance]",
          "source": "src/Data-Alpino-Model-Conduit.html#scoreToBinaryNorm",
          "type": "function"
        },
        "index": {
          "description": "Conduit recalculating scores dividing score of uniformly over instances with the highest quality score",
          "hierarchy": "Data Alpino Model Conduit",
          "module": "Data.Alpino.Model.Conduit",
          "name": "scoreToBinaryNorm",
          "normalized": "Conduit[TrainingInstance]a[TrainingInstance]",
          "package": "alpino-tools",
          "partial": "To Binary Norm",
          "signature": "Conduit[TrainingInstance]m[TrainingInstance]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alpino-tools/docs/Data-Alpino-Model-Conduit.html#v:scoreToBinaryNorm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConduit that normalized instance scores over all instances\n in the list.\n\u003c/p\u003e",
          "module": "Data.Alpino.Model.Conduit",
          "name": "scoreToNorm",
          "package": "alpino-tools",
          "signature": "Conduit [TrainingInstance] m [TrainingInstance]",
          "source": "src/Data-Alpino-Model-Conduit.html#scoreToNorm",
          "type": "function"
        },
        "index": {
          "description": "Conduit that normalized instance scores over all instances in the list",
          "hierarchy": "Data Alpino Model Conduit",
          "module": "Data.Alpino.Model.Conduit",
          "name": "scoreToNorm",
          "normalized": "Conduit[TrainingInstance]a[TrainingInstance]",
          "package": "alpino-tools",
          "partial": "To Norm",
          "signature": "Conduit[TrainingInstance]m[TrainingInstance]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alpino-tools/docs/Data-Alpino-Model-Conduit.html#v:scoreToNorm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert \u003ccode\u003eTrainingInstance\u003c/code\u003es to \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
          "module": "Data.Alpino.Model.Conduit",
          "name": "trainingInstanceToBS",
          "package": "alpino-tools",
          "signature": "Conduit TrainingInstance m ByteString",
          "source": "src/Data-Alpino-Model-Conduit.html#trainingInstanceToBS",
          "type": "function"
        },
        "index": {
          "description": "Convert TrainingInstance to ByteString",
          "hierarchy": "Data Alpino Model Conduit",
          "module": "Data.Alpino.Model.Conduit",
          "name": "trainingInstanceToBS",
          "package": "alpino-tools",
          "partial": "Instance To BS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alpino-tools/docs/Data-Alpino-Model-Conduit.html#v:trainingInstanceToBS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eData structures and functions to modify and process training data for\n the Alpino parse disambiguation and fluency ranking components.\n\u003c/p\u003e\u003cp\u003eSince the training data follows a very general format, this module and\n submodules should also be usable for other parsers and generators.\n Please refer to the description of \u003ccode\u003e\u003ca\u003ebsToTrainingInstance\u003c/a\u003e\u003c/code\u003e for more\n information about the format that is used.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Alpino.Model",
          "name": "Model",
          "package": "alpino-tools",
          "source": "src/Data-Alpino-Model.html",
          "type": "module"
        },
        "index": {
          "description": "Data structures and functions to modify and process training data for the Alpino parse disambiguation and fluency ranking components Since the training data follows very general format this module and submodules should also be usable for other parsers and generators Please refer to the description of bsToTrainingInstance for more information about the format that is used",
          "hierarchy": "Data Alpino Model",
          "module": "Data.Alpino.Model",
          "name": "Model",
          "package": "alpino-tools",
          "partial": "Model",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/alpino-tools/docs/Data-Alpino-Model.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA feature and its corresponding value.\n\u003c/p\u003e",
          "module": "Data.Alpino.Model",
          "name": "FeatureValue",
          "package": "alpino-tools",
          "source": "src/Data-Alpino-Model.html#FeatureValue",
          "type": "data"
        },
        "index": {
          "description": "feature and its corresponding value",
          "hierarchy": "Data Alpino Model",
          "module": "Data.Alpino.Model",
          "name": "FeatureValue",
          "package": "alpino-tools",
          "partial": "Feature Value",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/alpino-tools/docs/Data-Alpino-Model.html#t:FeatureValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA training instance.\n\u003c/p\u003e",
          "module": "Data.Alpino.Model",
          "name": "TrainingInstance",
          "package": "alpino-tools",
          "source": "src/Data-Alpino-Model.html#TrainingInstance",
          "type": "data"
        },
        "index": {
          "description": "training instance",
          "hierarchy": "Data Alpino Model",
          "module": "Data.Alpino.Model",
          "name": "TrainingInstance",
          "package": "alpino-tools",
          "partial": "Training Instance",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/alpino-tools/docs/Data-Alpino-Model.html#t:TrainingInstance"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType of training instance (parsing or generation).\n\u003c/p\u003e",
          "module": "Data.Alpino.Model",
          "name": "TrainingInstanceType",
          "package": "alpino-tools",
          "source": "src/Data-Alpino-Model.html#TrainingInstanceType",
          "type": "data"
        },
        "index": {
          "description": "Type of training instance parsing or generation",
          "hierarchy": "Data Alpino Model",
          "module": "Data.Alpino.Model",
          "name": "TrainingInstanceType",
          "package": "alpino-tools",
          "partial": "Training Instance Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/alpino-tools/docs/Data-Alpino-Model.html#t:TrainingInstanceType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Alpino.Model",
          "name": "FeatureValue",
          "package": "alpino-tools",
          "signature": "FeatureValue",
          "source": "src/Data-Alpino-Model.html#FeatureValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Alpino Model",
          "module": "Data.Alpino.Model",
          "name": "FeatureValue",
          "package": "alpino-tools",
          "partial": "Feature Value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alpino-tools/docs/Data-Alpino-Model.html#v:FeatureValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Alpino.Model",
          "name": "GenerationInstance",
          "package": "alpino-tools",
          "signature": "GenerationInstance",
          "source": "src/Data-Alpino-Model.html#TrainingInstanceType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Alpino Model",
          "module": "Data.Alpino.Model",
          "name": "GenerationInstance",
          "package": "alpino-tools",
          "partial": "Generation Instance",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alpino-tools/docs/Data-Alpino-Model.html#v:GenerationInstance"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Alpino.Model",
          "name": "ParsingInstance",
          "package": "alpino-tools",
          "signature": "ParsingInstance",
          "source": "src/Data-Alpino-Model.html#TrainingInstanceType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Alpino Model",
          "module": "Data.Alpino.Model",
          "name": "ParsingInstance",
          "package": "alpino-tools",
          "partial": "Parsing Instance",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alpino-tools/docs/Data-Alpino-Model.html#v:ParsingInstance"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Alpino.Model",
          "name": "TrainingInstance",
          "package": "alpino-tools",
          "signature": "TrainingInstance",
          "source": "src/Data-Alpino-Model.html#TrainingInstance",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Alpino Model",
          "module": "Data.Alpino.Model",
          "name": "TrainingInstance",
          "package": "alpino-tools",
          "partial": "Training Instance",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alpino-tools/docs/Data-Alpino-Model.html#v:TrainingInstance"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind the highest score of a context.\n\u003c/p\u003e",
          "module": "Data.Alpino.Model",
          "name": "bestScore",
          "package": "alpino-tools",
          "signature": "[TrainingInstance] -\u003e Double",
          "source": "src/Data-Alpino-Model.html#bestScore",
          "type": "function"
        },
        "index": {
          "description": "Find the highest score of context",
          "hierarchy": "Data Alpino Model",
          "module": "Data.Alpino.Model",
          "name": "bestScore",
          "normalized": "[TrainingInstance]-\u003eDouble",
          "package": "alpino-tools",
          "partial": "Score",
          "signature": "[TrainingInstance]-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alpino-tools/docs/Data-Alpino-Model.html#v:bestScore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind the highest score of a context (strict).\n\u003c/p\u003e",
          "module": "Data.Alpino.Model",
          "name": "bestScore'",
          "package": "alpino-tools",
          "signature": "[TrainingInstance] -\u003e Double",
          "source": "src/Data-Alpino-Model.html#bestScore%27",
          "type": "function"
        },
        "index": {
          "description": "Find the highest score of context strict",
          "hierarchy": "Data Alpino Model",
          "module": "Data.Alpino.Model",
          "name": "bestScore'",
          "normalized": "[TrainingInstance]-\u003eDouble",
          "package": "alpino-tools",
          "partial": "Score'",
          "signature": "[TrainingInstance]-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alpino-tools/docs/Data-Alpino-Model.html#v:bestScore-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead a training instance from a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe bytestring is assumed to contain five fields separated by\n the hash (\u003cem\u003e#\u003c/em\u003e) character:\n\u003c/p\u003e\u003col\u003e\u003cli\u003e An indicator for the type of training instance (\u003cem\u003eP\u003c/em\u003e for parse\n   disambiguation, \u003cem\u003eG\u003c/em\u003e for fluency ranking).\n\u003c/li\u003e\u003cli\u003e The identifier of the context (usually the identifier of a\n   sentence of logircal form).\n\u003c/li\u003e\u003cli\u003e Parse/generation number.\n\u003c/li\u003e\u003cli\u003e A quality score for this training instance.\n\u003c/li\u003e\u003cli\u003e A list of features and values. List elements are separated by\n   the vertical bar (\u003cem\u003e|\u003c/em\u003e), and have the following form: \u003cem\u003evalue@feature\u003c/em\u003e\n\u003c/li\u003e\u003c/ol\u003e",
          "module": "Data.Alpino.Model",
          "name": "bsToTrainingInstance",
          "package": "alpino-tools",
          "signature": "ByteString -\u003e Maybe TrainingInstance",
          "source": "src/Data-Alpino-Model.html#bsToTrainingInstance",
          "type": "function"
        },
        "index": {
          "description": "Read training instance from ByteString The bytestring is assumed to contain five fields separated by the hash character An indicator for the type of training instance for parse disambiguation for fluency ranking The identifier of the context usually the identifier of sentence of logircal form Parse generation number quality score for this training instance list of features and values List elements are separated by the vertical bar and have the following form value@feature",
          "hierarchy": "Data Alpino Model",
          "module": "Data.Alpino.Model",
          "name": "bsToTrainingInstance",
          "normalized": "ByteString-\u003eMaybe TrainingInstance",
          "package": "alpino-tools",
          "partial": "To Training Instance",
          "signature": "ByteString-\u003eMaybe TrainingInstance",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alpino-tools/docs/Data-Alpino-Model.html#v:bsToTrainingInstance"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Alpino.Model",
          "name": "feature",
          "package": "alpino-tools",
          "signature": "ByteString",
          "source": "src/Data-Alpino-Model.html#FeatureValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Alpino Model",
          "module": "Data.Alpino.Model",
          "name": "feature",
          "package": "alpino-tools",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alpino-tools/docs/Data-Alpino-Model.html#v:feature"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFilter features by exact names. A modifier function can be applied,\n for instance, the \u003ccode\u003e\u003ca\u003enot\u003c/a\u003e\u003c/code\u003e function would exclude the specified features.\n\u003c/p\u003e",
          "module": "Data.Alpino.Model",
          "name": "filterFeatures",
          "package": "alpino-tools",
          "signature": "(Bool -\u003e Bool) -\u003e Set ByteString -\u003e TrainingInstance -\u003e TrainingInstance",
          "source": "src/Data-Alpino-Model.html#filterFeatures",
          "type": "function"
        },
        "index": {
          "description": "Filter features by exact names modifier function can be applied for instance the not function would exclude the specified features",
          "hierarchy": "Data Alpino Model",
          "module": "Data.Alpino.Model",
          "name": "filterFeatures",
          "normalized": "(Bool-\u003eBool)-\u003eSet ByteString-\u003eTrainingInstance-\u003eTrainingInstance",
          "package": "alpino-tools",
          "partial": "Features",
          "signature": "(Bool-\u003eBool)-\u003eSet ByteString-\u003eTrainingInstance-\u003eTrainingInstance",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alpino-tools/docs/Data-Alpino-Model.html#v:filterFeatures"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFilter features by their functor. A modifier function can be applied,\n for instance, the \u003ccode\u003e\u003ca\u003enot\u003c/a\u003e\u003c/code\u003e function would exclude the specified features.\n\u003c/p\u003e",
          "module": "Data.Alpino.Model",
          "name": "filterFeaturesFunctor",
          "package": "alpino-tools",
          "signature": "(Bool -\u003e Bool) -\u003e Set ByteString -\u003e TrainingInstance -\u003e TrainingInstance",
          "source": "src/Data-Alpino-Model.html#filterFeaturesFunctor",
          "type": "function"
        },
        "index": {
          "description": "Filter features by their functor modifier function can be applied for instance the not function would exclude the specified features",
          "hierarchy": "Data Alpino Model",
          "module": "Data.Alpino.Model",
          "name": "filterFeaturesFunctor",
          "normalized": "(Bool-\u003eBool)-\u003eSet ByteString-\u003eTrainingInstance-\u003eTrainingInstance",
          "package": "alpino-tools",
          "partial": "Features Functor",
          "signature": "(Bool-\u003eBool)-\u003eSet ByteString-\u003eTrainingInstance-\u003eTrainingInstance",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alpino-tools/docs/Data-Alpino-Model.html#v:filterFeaturesFunctor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFeatures\n\u003c/p\u003e",
          "module": "Data.Alpino.Model",
          "name": "instanceFeatures",
          "package": "alpino-tools",
          "signature": "Features",
          "source": "src/Data-Alpino-Model.html#TrainingInstance",
          "type": "function"
        },
        "index": {
          "description": "Features",
          "hierarchy": "Data Alpino Model",
          "module": "Data.Alpino.Model",
          "name": "instanceFeatures",
          "package": "alpino-tools",
          "partial": "Features",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alpino-tools/docs/Data-Alpino-Model.html#v:instanceFeatures"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTraining instance identifier\n\u003c/p\u003e",
          "module": "Data.Alpino.Model",
          "name": "instanceKey",
          "package": "alpino-tools",
          "signature": "ByteString",
          "source": "src/Data-Alpino-Model.html#TrainingInstance",
          "type": "function"
        },
        "index": {
          "description": "Training instance identifier",
          "hierarchy": "Data Alpino Model",
          "module": "Data.Alpino.Model",
          "name": "instanceKey",
          "package": "alpino-tools",
          "partial": "Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alpino-tools/docs/Data-Alpino-Model.html#v:instanceKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Alpino.Model",
          "name": "instanceN",
          "package": "alpino-tools",
          "signature": "ByteString",
          "source": "src/Data-Alpino-Model.html#TrainingInstance",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Alpino Model",
          "module": "Data.Alpino.Model",
          "name": "instanceN",
          "package": "alpino-tools",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alpino-tools/docs/Data-Alpino-Model.html#v:instanceN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eQuality score\n\u003c/p\u003e",
          "module": "Data.Alpino.Model",
          "name": "instanceScore",
          "package": "alpino-tools",
          "signature": "Double",
          "source": "src/Data-Alpino-Model.html#TrainingInstance",
          "type": "function"
        },
        "index": {
          "description": "Quality score",
          "hierarchy": "Data Alpino Model",
          "module": "Data.Alpino.Model",
          "name": "instanceScore",
          "package": "alpino-tools",
          "partial": "Score",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alpino-tools/docs/Data-Alpino-Model.html#v:instanceScore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType of training instance\n\u003c/p\u003e",
          "module": "Data.Alpino.Model",
          "name": "instanceType",
          "package": "alpino-tools",
          "signature": "TrainingInstanceType",
          "source": "src/Data-Alpino-Model.html#TrainingInstance",
          "type": "function"
        },
        "index": {
          "description": "Type of training instance",
          "hierarchy": "Data Alpino Model",
          "module": "Data.Alpino.Model",
          "name": "instanceType",
          "package": "alpino-tools",
          "partial": "Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alpino-tools/docs/Data-Alpino-Model.html#v:instanceType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract a random sample from a list of instances.\n\u003c/p\u003e",
          "module": "Data.Alpino.Model",
          "name": "randomSample",
          "package": "alpino-tools",
          "signature": "Int -\u003e [TrainingInstance] -\u003e m [TrainingInstance]",
          "source": "src/Data-Alpino-Model.html#randomSample",
          "type": "function"
        },
        "index": {
          "description": "Extract random sample from list of instances",
          "hierarchy": "Data Alpino Model",
          "module": "Data.Alpino.Model",
          "name": "randomSample",
          "normalized": "Int-\u003e[TrainingInstance]-\u003ea[TrainingInstance]",
          "package": "alpino-tools",
          "partial": "Sample",
          "signature": "Int-\u003e[TrainingInstance]-\u003em[TrainingInstance]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alpino-tools/docs/Data-Alpino-Model.html#v:randomSample"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert the quality scores to binary scores. The instances\n with the highest quality score get score \u003cem\u003e1.0\u003c/em\u003e, other instances\n get score \u003cem\u003e0.0\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Data.Alpino.Model",
          "name": "scoreToBinary",
          "package": "alpino-tools",
          "signature": "[TrainingInstance] -\u003e [TrainingInstance]",
          "source": "src/Data-Alpino-Model.html#scoreToBinary",
          "type": "function"
        },
        "index": {
          "description": "Convert the quality scores to binary scores The instances with the highest quality score get score other instances get score",
          "hierarchy": "Data Alpino Model",
          "module": "Data.Alpino.Model",
          "name": "scoreToBinary",
          "normalized": "[TrainingInstance]-\u003e[TrainingInstance]",
          "package": "alpino-tools",
          "partial": "To Binary",
          "signature": "[TrainingInstance]-\u003e[TrainingInstance]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alpino-tools/docs/Data-Alpino-Model.html#v:scoreToBinary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDivide a score of \u003cem\u003e1.0\u003c/em\u003e uniformly over instances with the highest\n quality scores.\n\u003c/p\u003e",
          "module": "Data.Alpino.Model",
          "name": "scoreToBinaryNorm",
          "package": "alpino-tools",
          "signature": "[TrainingInstance] -\u003e [TrainingInstance]",
          "source": "src/Data-Alpino-Model.html#scoreToBinaryNorm",
          "type": "function"
        },
        "index": {
          "description": "Divide score of uniformly over instances with the highest quality scores",
          "hierarchy": "Data Alpino Model",
          "module": "Data.Alpino.Model",
          "name": "scoreToBinaryNorm",
          "normalized": "[TrainingInstance]-\u003e[TrainingInstance]",
          "package": "alpino-tools",
          "partial": "To Binary Norm",
          "signature": "[TrainingInstance]-\u003e[TrainingInstance]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alpino-tools/docs/Data-Alpino-Model.html#v:scoreToBinaryNorm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNormalize scores over all training instances.\n\u003c/p\u003e",
          "module": "Data.Alpino.Model",
          "name": "scoreToNorm",
          "package": "alpino-tools",
          "signature": "[TrainingInstance] -\u003e [TrainingInstance]",
          "source": "src/Data-Alpino-Model.html#scoreToNorm",
          "type": "function"
        },
        "index": {
          "description": "Normalize scores over all training instances",
          "hierarchy": "Data Alpino Model",
          "module": "Data.Alpino.Model",
          "name": "scoreToNorm",
          "normalized": "[TrainingInstance]-\u003e[TrainingInstance]",
          "package": "alpino-tools",
          "partial": "To Norm",
          "signature": "[TrainingInstance]-\u003e[TrainingInstance]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alpino-tools/docs/Data-Alpino-Model.html#v:scoreToNorm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a training instance to a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Alpino.Model",
          "name": "trainingInstanceToBs",
          "package": "alpino-tools",
          "signature": "TrainingInstance -\u003e ByteString",
          "source": "src/Data-Alpino-Model.html#trainingInstanceToBs",
          "type": "function"
        },
        "index": {
          "description": "Convert training instance to ByteString",
          "hierarchy": "Data Alpino Model",
          "module": "Data.Alpino.Model",
          "name": "trainingInstanceToBs",
          "normalized": "TrainingInstance-\u003eByteString",
          "package": "alpino-tools",
          "partial": "Instance To Bs",
          "signature": "TrainingInstance-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alpino-tools/docs/Data-Alpino-Model.html#v:trainingInstanceToBs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Alpino.Model",
          "name": "value",
          "package": "alpino-tools",
          "signature": "Double",
          "source": "src/Data-Alpino-Model.html#FeatureValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Alpino Model",
          "module": "Data.Alpino.Model",
          "name": "value",
          "package": "alpino-tools",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alpino-tools/docs/Data-Alpino-Model.html#v:value"
      }
    }
  ]
]