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
        "word": "ungadtagger"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.GADT.Untagged",
          "name": "Untagged",
          "package": "ungadtagger",
          "source": "src/Data-GADT-Untagged.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data GADT Untagged",
          "module": "Data.GADT.Untagged",
          "name": "Untagged",
          "package": "ungadtagger",
          "partial": "Untagged",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ungadtagger/docs/Data-GADT-Untagged.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExistential type, representing GADT, abstracted from typelevel tag (first type parameter).\n\u003c/p\u003e",
          "module": "Data.GADT.Untagged",
          "name": "Untagged",
          "package": "ungadtagger",
          "source": "src/Data-GADT-Untagged.html#Untagged",
          "type": "data"
        },
        "index": {
          "description": "Existential type representing GADT abstracted from typelevel tag first type parameter",
          "hierarchy": "Data GADT Untagged",
          "module": "Data.GADT.Untagged",
          "name": "Untagged",
          "package": "ungadtagger",
          "partial": "Untagged",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ungadtagger/docs/Data-GADT-Untagged.html#t:Untagged"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExistential type, representing GADT, abstracted from two typelevel tags (first two type parameters).\n\u003c/p\u003e",
          "module": "Data.GADT.Untagged",
          "name": "Untagged2",
          "package": "ungadtagger",
          "source": "src/Data-GADT-Untagged.html#Untagged2",
          "type": "data"
        },
        "index": {
          "description": "Existential type representing GADT abstracted from two typelevel tags first two type parameters",
          "hierarchy": "Data GADT Untagged",
          "module": "Data.GADT.Untagged",
          "name": "Untagged2",
          "package": "ungadtagger",
          "partial": "Untagged",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ungadtagger/docs/Data-GADT-Untagged.html#t:Untagged2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExistential type, representing GADT, abstracted from three typelevel tags (first three type parameters).\n\u003c/p\u003e",
          "module": "Data.GADT.Untagged",
          "name": "Untagged3",
          "package": "ungadtagger",
          "source": "src/Data-GADT-Untagged.html#Untagged3",
          "type": "data"
        },
        "index": {
          "description": "Existential type representing GADT abstracted from three typelevel tags first three type parameters",
          "hierarchy": "Data GADT Untagged",
          "module": "Data.GADT.Untagged",
          "name": "Untagged3",
          "package": "ungadtagger",
          "partial": "Untagged",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ungadtagger/docs/Data-GADT-Untagged.html#t:Untagged3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.GADT.Untagged",
          "name": "Tagged",
          "package": "ungadtagger",
          "signature": "forall a . Tagged (con a)",
          "source": "src/Data-GADT-Untagged.html#Untagged",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data GADT Untagged",
          "module": "Data.GADT.Untagged",
          "name": "Tagged",
          "package": "ungadtagger",
          "partial": "Tagged",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ungadtagger/docs/Data-GADT-Untagged.html#v:Tagged"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.GADT.Untagged",
          "name": "Tagged2",
          "package": "ungadtagger",
          "signature": "forall a b . Tagged2 (con a b)",
          "source": "src/Data-GADT-Untagged.html#Untagged2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data GADT Untagged",
          "module": "Data.GADT.Untagged",
          "name": "Tagged2",
          "package": "ungadtagger",
          "partial": "Tagged",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ungadtagger/docs/Data-GADT-Untagged.html#v:Tagged2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.GADT.Untagged",
          "name": "Tagged3",
          "package": "ungadtagger",
          "signature": "forall a b c . Tagged3 (con a b c)",
          "source": "src/Data-GADT-Untagged.html#Untagged3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data GADT Untagged",
          "module": "Data.GADT.Untagged",
          "name": "Tagged3",
          "package": "ungadtagger",
          "partial": "Tagged",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ungadtagger/docs/Data-GADT-Untagged.html#v:Tagged3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProcesses untagged value by unpacking it from existential wrapper and feeding result to rank2-typed funarg. \n\u003c/p\u003e\u003cpre\u003e  f :: Untagged Term -\u003e Integer\n  f term = match term $ \\case\n    Var ... -\u003e ...\n    Lam ... -\u003e ...\n\u003c/pre\u003e",
          "module": "Data.GADT.Untagged",
          "name": "match",
          "package": "ungadtagger",
          "signature": "Untagged con -\u003e (forall a.  con a -\u003e r) -\u003e r",
          "source": "src/Data-GADT-Untagged.html#match",
          "type": "function"
        },
        "index": {
          "description": "Processes untagged value by unpacking it from existential wrapper and feeding result to rank2-typed funarg Untagged Term Integer term match term case Var Lam",
          "hierarchy": "Data GADT Untagged",
          "module": "Data.GADT.Untagged",
          "name": "match",
          "normalized": "Untagged a-\u003e(b c a d-\u003ee)-\u003ee",
          "package": "ungadtagger",
          "signature": "Untagged con-\u003e(forall a. con a-\u003er)-\u003er",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ungadtagger/docs/Data-GADT-Untagged.html#v:match"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.GADT.Untagged",
          "name": "match2",
          "package": "ungadtagger",
          "signature": "Untagged2 con -\u003e (forall a b.  con a b -\u003e r) -\u003e r",
          "source": "src/Data-GADT-Untagged.html#match2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data GADT Untagged",
          "module": "Data.GADT.Untagged",
          "name": "match2",
          "normalized": "Untagged a-\u003e(b c d a c e-\u003ef)-\u003ef",
          "package": "ungadtagger",
          "signature": "Untagged con-\u003e(forall a b. con a b-\u003er)-\u003er",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ungadtagger/docs/Data-GADT-Untagged.html#v:match2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.GADT.Untagged",
          "name": "match3",
          "package": "ungadtagger",
          "signature": "Untagged3 con -\u003e (forall a b c.  con a b c -\u003e r) -\u003e r",
          "source": "src/Data-GADT-Untagged.html#match3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data GADT Untagged",
          "module": "Data.GADT.Untagged",
          "name": "match3",
          "normalized": "Untagged a-\u003e(b c d e a c d f-\u003eg)-\u003eg",
          "package": "ungadtagger",
          "signature": "Untagged con-\u003e(forall a b c. con a b c-\u003er)-\u003er",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ungadtagger/docs/Data-GADT-Untagged.html#v:match3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFunction to untag values.\n\u003c/p\u003e\u003cpre\u003e f :: [Term A] -\u003e [Term B] -\u003e [Untagged Term]\n f xs ys = map untag xs ++ map untag ys\n\u003c/pre\u003e",
          "module": "Data.GADT.Untagged",
          "name": "untag",
          "package": "ungadtagger",
          "signature": "con a -\u003e Untagged con",
          "source": "src/Data-GADT-Untagged.html#untag",
          "type": "function"
        },
        "index": {
          "description": "Function to untag values Term Term Untagged Term xs ys map untag xs map untag ys",
          "hierarchy": "Data GADT Untagged",
          "module": "Data.GADT.Untagged",
          "name": "untag",
          "normalized": "a b-\u003eUntagged a",
          "package": "ungadtagger",
          "signature": "con a-\u003eUntagged con",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ungadtagger/docs/Data-GADT-Untagged.html#v:untag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.GADT.Untagged",
          "name": "untag2",
          "package": "ungadtagger",
          "signature": "con a b -\u003e Untagged2 con",
          "source": "src/Data-GADT-Untagged.html#untag2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data GADT Untagged",
          "module": "Data.GADT.Untagged",
          "name": "untag2",
          "normalized": "a b c-\u003eUntagged a",
          "package": "ungadtagger",
          "signature": "con a b-\u003eUntagged con",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ungadtagger/docs/Data-GADT-Untagged.html#v:untag2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.GADT.Untagged",
          "name": "untag3",
          "package": "ungadtagger",
          "signature": "con a b c -\u003e Untagged3 con",
          "source": "src/Data-GADT-Untagged.html#untag3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data GADT Untagged",
          "module": "Data.GADT.Untagged",
          "name": "untag3",
          "normalized": "a b c d-\u003eUntagged a",
          "package": "ungadtagger",
          "signature": "con a b c-\u003eUntagged con",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ungadtagger/docs/Data-GADT-Untagged.html#v:untag3"
      }
    }
  ]
]