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
        "word": "RepLib"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAbstract Reps for Common Abstract Datatypes\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Generics.RepLib.AbstractReps",
          "name": "AbstractReps",
          "package": "RepLib",
          "source": "src/Generics-RepLib-AbstractReps.html",
          "type": "module"
        },
        "index": {
          "description": "Abstract Reps for Common Abstract Datatypes",
          "hierarchy": "Generics RepLib AbstractReps",
          "module": "Generics.RepLib.AbstractReps",
          "name": "AbstractReps",
          "package": "RepLib",
          "partial": "Abstract Reps",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-AbstractReps.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.RepLib.AbstractReps",
          "name": "rMap",
          "package": "RepLib",
          "signature": "R (Map k a)",
          "source": "src/Generics-RepLib-AbstractReps.html#rMap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics RepLib AbstractReps",
          "module": "Generics.RepLib.AbstractReps",
          "name": "rMap",
          "package": "RepLib",
          "partial": "Map",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-AbstractReps.html#v:rMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.RepLib.AbstractReps",
          "name": "rMap1",
          "package": "RepLib",
          "signature": "R1 ctx (Map k a)",
          "source": "src/Generics-RepLib-AbstractReps.html#rMap1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics RepLib AbstractReps",
          "module": "Generics.RepLib.AbstractReps",
          "name": "rMap1",
          "package": "RepLib",
          "partial": "Map",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-AbstractReps.html#v:rMap1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.RepLib.AbstractReps",
          "name": "rSet",
          "package": "RepLib",
          "signature": "R (Set a)",
          "source": "src/Generics-RepLib-AbstractReps.html#rSet",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics RepLib AbstractReps",
          "module": "Generics.RepLib.AbstractReps",
          "name": "rSet",
          "package": "RepLib",
          "partial": "Set",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-AbstractReps.html#v:rSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.RepLib.AbstractReps",
          "name": "rSet1",
          "package": "RepLib",
          "signature": "R1 ctx (Set a)",
          "source": "src/Generics-RepLib-AbstractReps.html#rSet1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics RepLib AbstractReps",
          "module": "Generics.RepLib.AbstractReps",
          "name": "rSet1",
          "package": "RepLib",
          "partial": "Set",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-AbstractReps.html#v:rSet1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAutomatically derive representations and instance declarations\n for user defined datatypes.\n The typical use is\n \u003ccode\u003e\n     $(derive [''MyType1, ''MyType2])\n \u003c/code\u003e\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Generics.RepLib.Derive",
          "name": "Derive",
          "package": "RepLib",
          "source": "src/Generics-RepLib-Derive.html",
          "type": "module"
        },
        "index": {
          "description": "Automatically derive representations and instance declarations for user defined datatypes The typical use is derive MyType1 MyType2",
          "hierarchy": "Generics RepLib Derive",
          "module": "Generics.RepLib.Derive",
          "name": "Derive",
          "package": "RepLib",
          "partial": "Derive",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-Derive.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate representations (both basic and parameterized) for a list of\n   types.\n\u003c/p\u003e",
          "module": "Generics.RepLib.Derive",
          "name": "derive",
          "package": "RepLib",
          "signature": "[Name] -\u003e Q [Dec]",
          "source": "src/Generics-RepLib-Derive.html#derive",
          "type": "function"
        },
        "index": {
          "description": "Generate representations both basic and parameterized for list of types",
          "hierarchy": "Generics RepLib Derive",
          "module": "Generics.RepLib.Derive",
          "name": "derive",
          "normalized": "[Name]-\u003eQ[Dec]",
          "package": "RepLib",
          "signature": "[Name]-\u003eQ[Dec]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-Derive.html#v:derive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate abstract representations for a list of types.\n\u003c/p\u003e",
          "module": "Generics.RepLib.Derive",
          "name": "derive_abstract",
          "package": "RepLib",
          "signature": "[Name] -\u003e Q [Dec]",
          "source": "src/Generics-RepLib-Derive.html#derive_abstract",
          "type": "function"
        },
        "index": {
          "description": "Generate abstract representations for list of types",
          "hierarchy": "Generics RepLib Derive",
          "module": "Generics.RepLib.Derive",
          "name": "derive_abstract",
          "normalized": "[Name]-\u003eQ[Dec]",
          "package": "RepLib",
          "signature": "[Name]-\u003eQ[Dec]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-Derive.html#v:derive_abstract"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA library of type-indexed functions\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Generics.RepLib.Lib",
          "name": "Lib",
          "package": "RepLib",
          "source": "src/Generics-RepLib-Lib.html",
          "type": "module"
        },
        "index": {
          "description": "library of type-indexed functions",
          "hierarchy": "Generics RepLib Lib",
          "module": "Generics.RepLib.Lib",
          "name": "Lib",
          "package": "RepLib",
          "partial": "Lib",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-Lib.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eenumerate the elements of a type, in DFS order.\n\u003c/p\u003e",
          "module": "Generics.RepLib.Lib",
          "name": "Enumerate",
          "package": "RepLib",
          "source": "src/Generics-RepLib-Lib.html#Enumerate",
          "type": "class"
        },
        "index": {
          "description": "enumerate the elements of type in DFS order",
          "hierarchy": "Generics RepLib Lib",
          "module": "Generics.RepLib.Lib",
          "name": "Enumerate",
          "package": "RepLib",
          "partial": "Enumerate",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-Lib.html#t:Enumerate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.RepLib.Lib",
          "name": "EnumerateD",
          "package": "RepLib",
          "source": "src/Generics-RepLib-Lib.html#EnumerateD",
          "type": "data"
        },
        "index": {
          "hierarchy": "Generics RepLib Lib",
          "module": "Generics.RepLib.Lib",
          "name": "EnumerateD",
          "package": "RepLib",
          "partial": "Enumerate",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-Lib.html#t:EnumerateD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAll of the functions below are defined using instances\n of the following class\n\u003c/p\u003e",
          "module": "Generics.RepLib.Lib",
          "name": "Fold",
          "package": "RepLib",
          "source": "src/Generics-RepLib-Lib.html#Fold",
          "type": "class"
        },
        "index": {
          "description": "All of the functions below are defined using instances of the following class",
          "hierarchy": "Generics RepLib Lib",
          "module": "Generics.RepLib.Lib",
          "name": "Fold",
          "package": "RepLib",
          "partial": "Fold",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-Lib.html#t:Fold"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd together all of the \u003ccode\u003eInt\u003c/code\u003es in a datastructure\n For example:\n gsum ( 1 , True, (\u003ca\u003ea\u003c/a\u003e, Maybe 3, []) , Nothing)\n 4\n\u003c/p\u003e",
          "module": "Generics.RepLib.Lib",
          "name": "GSum",
          "package": "RepLib",
          "source": "src/Generics-RepLib-Lib.html#GSum",
          "type": "class"
        },
        "index": {
          "description": "Add together all of the Int in datastructure For example gsum True Maybe Nothing",
          "hierarchy": "Generics RepLib Lib",
          "module": "Generics.RepLib.Lib",
          "name": "GSum",
          "package": "RepLib",
          "partial": "GSum",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-Lib.html#t:GSum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.RepLib.Lib",
          "name": "GSumD",
          "package": "RepLib",
          "source": "src/Generics-RepLib-Lib.html#GSumD",
          "type": "data"
        },
        "index": {
          "hierarchy": "Generics RepLib Lib",
          "module": "Generics.RepLib.Lib",
          "name": "GSumD",
          "package": "RepLib",
          "partial": "GSum",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-Lib.html#t:GSumD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate elements of a type up to a certain depth\n\u003c/p\u003e",
          "module": "Generics.RepLib.Lib",
          "name": "Generate",
          "package": "RepLib",
          "source": "src/Generics-RepLib-Lib.html#Generate",
          "type": "class"
        },
        "index": {
          "description": "Generate elements of type up to certain depth",
          "hierarchy": "Generics RepLib Lib",
          "module": "Generics.RepLib.Lib",
          "name": "Generate",
          "package": "RepLib",
          "partial": "Generate",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-Lib.html#t:Generate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.RepLib.Lib",
          "name": "GenerateD",
          "package": "RepLib",
          "source": "src/Generics-RepLib-Lib.html#GenerateD",
          "type": "data"
        },
        "index": {
          "hierarchy": "Generics RepLib Lib",
          "module": "Generics.RepLib.Lib",
          "name": "GenerateD",
          "package": "RepLib",
          "partial": "Generate",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-Lib.html#t:GenerateD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA general version of fold left, use for Fold class below\n\u003c/p\u003e",
          "module": "Generics.RepLib.Lib",
          "name": "Lreduce",
          "package": "RepLib",
          "source": "src/Generics-RepLib-Lib.html#Lreduce",
          "type": "class"
        },
        "index": {
          "description": "general version of fold left use for Fold class below",
          "hierarchy": "Generics RepLib Lib",
          "module": "Generics.RepLib.Lib",
          "name": "Lreduce",
          "package": "RepLib",
          "partial": "Lreduce",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-Lib.html#t:Lreduce"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.RepLib.Lib",
          "name": "LreduceD",
          "package": "RepLib",
          "source": "src/Generics-RepLib-Lib.html#LreduceD",
          "type": "data"
        },
        "index": {
          "hierarchy": "Generics RepLib Lib",
          "module": "Generics.RepLib.Lib",
          "name": "LreduceD",
          "package": "RepLib",
          "partial": "Lreduce",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-Lib.html#t:LreduceD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA general version of fold right, use for Fold class below\n\u003c/p\u003e",
          "module": "Generics.RepLib.Lib",
          "name": "Rreduce",
          "package": "RepLib",
          "source": "src/Generics-RepLib-Lib.html#Rreduce",
          "type": "class"
        },
        "index": {
          "description": "general version of fold right use for Fold class below",
          "hierarchy": "Generics RepLib Lib",
          "module": "Generics.RepLib.Lib",
          "name": "Rreduce",
          "package": "RepLib",
          "partial": "Rreduce",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-Lib.html#t:Rreduce"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.RepLib.Lib",
          "name": "RreduceD",
          "package": "RepLib",
          "source": "src/Generics-RepLib-Lib.html#RreduceD",
          "type": "data"
        },
        "index": {
          "hierarchy": "Generics RepLib Lib",
          "module": "Generics.RepLib.Lib",
          "name": "RreduceD",
          "package": "RepLib",
          "partial": "Rreduce",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-Lib.html#t:RreduceD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven an element, return smaller elements of the same type\n for example, to automatically find small counterexamples when testing\n\u003c/p\u003e",
          "module": "Generics.RepLib.Lib",
          "name": "Shrink",
          "package": "RepLib",
          "source": "src/Generics-RepLib-Lib.html#Shrink",
          "type": "class"
        },
        "index": {
          "description": "Given an element return smaller elements of the same type for example to automatically find small counterexamples when testing",
          "hierarchy": "Generics RepLib Lib",
          "module": "Generics.RepLib.Lib",
          "name": "Shrink",
          "package": "RepLib",
          "partial": "Shrink",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-Lib.html#t:Shrink"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.RepLib.Lib",
          "name": "ShrinkD",
          "package": "RepLib",
          "source": "src/Generics-RepLib-Lib.html#ShrinkD",
          "type": "data"
        },
        "index": {
          "hierarchy": "Generics RepLib Lib",
          "module": "Generics.RepLib.Lib",
          "name": "ShrinkD",
          "package": "RepLib",
          "partial": "Shrink",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-Lib.html#t:ShrinkD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a zero element of a type\n \u003ccode\u003e\n ( zero  :: ((Int, Maybe Int), Float))\n ((0, Nothing), 0.0)\n \u003c/code\u003e\n\u003c/p\u003e",
          "module": "Generics.RepLib.Lib",
          "name": "Zero",
          "package": "RepLib",
          "source": "src/Generics-RepLib-Lib.html#Zero",
          "type": "class"
        },
        "index": {
          "description": "Create zero element of type zero Int Maybe Int Float Nothing",
          "hierarchy": "Generics RepLib Lib",
          "module": "Generics.RepLib.Lib",
          "name": "Zero",
          "package": "RepLib",
          "partial": "Zero",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-Lib.html#t:Zero"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.RepLib.Lib",
          "name": "ZeroD",
          "package": "RepLib",
          "source": "src/Generics-RepLib-Lib.html#ZeroD",
          "type": "data"
        },
        "index": {
          "hierarchy": "Generics RepLib Lib",
          "module": "Generics.RepLib.Lib",
          "name": "ZeroD",
          "package": "RepLib",
          "partial": "Zero",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-Lib.html#t:ZeroD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.RepLib.Lib",
          "name": "EnumerateD",
          "package": "RepLib",
          "signature": "EnumerateD",
          "source": "src/Generics-RepLib-Lib.html#EnumerateD",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics RepLib Lib",
          "module": "Generics.RepLib.Lib",
          "name": "EnumerateD",
          "package": "RepLib",
          "partial": "Enumerate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-Lib.html#v:EnumerateD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.RepLib.Lib",
          "name": "GSumD",
          "package": "RepLib",
          "signature": "GSumD",
          "source": "src/Generics-RepLib-Lib.html#GSumD",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics RepLib Lib",
          "module": "Generics.RepLib.Lib",
          "name": "GSumD",
          "package": "RepLib",
          "partial": "GSum",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-Lib.html#v:GSumD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.RepLib.Lib",
          "name": "GenerateD",
          "package": "RepLib",
          "signature": "GenerateD",
          "source": "src/Generics-RepLib-Lib.html#GenerateD",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics RepLib Lib",
          "module": "Generics.RepLib.Lib",
          "name": "GenerateD",
          "package": "RepLib",
          "partial": "Generate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-Lib.html#v:GenerateD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.RepLib.Lib",
          "name": "LreduceD",
          "package": "RepLib",
          "signature": "LreduceD",
          "source": "src/Generics-RepLib-Lib.html#LreduceD",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics RepLib Lib",
          "module": "Generics.RepLib.Lib",
          "name": "LreduceD",
          "package": "RepLib",
          "partial": "Lreduce",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-Lib.html#v:LreduceD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.RepLib.Lib",
          "name": "RreduceD",
          "package": "RepLib",
          "signature": "RreduceD",
          "source": "src/Generics-RepLib-Lib.html#RreduceD",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics RepLib Lib",
          "module": "Generics.RepLib.Lib",
          "name": "RreduceD",
          "package": "RepLib",
          "partial": "Rreduce",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-Lib.html#v:RreduceD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.RepLib.Lib",
          "name": "ShrinkD",
          "package": "RepLib",
          "signature": "ShrinkD",
          "source": "src/Generics-RepLib-Lib.html#ShrinkD",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics RepLib Lib",
          "module": "Generics.RepLib.Lib",
          "name": "ShrinkD",
          "package": "RepLib",
          "partial": "Shrink",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-Lib.html#v:ShrinkD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.RepLib.Lib",
          "name": "ZD",
          "package": "RepLib",
          "signature": "ZD",
          "source": "src/Generics-RepLib-Lib.html#ZeroD",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics RepLib Lib",
          "module": "Generics.RepLib.Lib",
          "name": "ZD",
          "package": "RepLib",
          "partial": "ZD",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-Lib.html#v:ZD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompose all functions in the datastructure together\n\u003c/p\u003e",
          "module": "Generics.RepLib.Lib",
          "name": "comp",
          "package": "RepLib",
          "signature": "t (a -\u003e a) -\u003e a -\u003e a",
          "source": "src/Generics-RepLib-Lib.html#comp",
          "type": "function"
        },
        "index": {
          "description": "Compose all functions in the datastructure together",
          "hierarchy": "Generics RepLib Lib",
          "module": "Generics.RepLib.Lib",
          "name": "comp",
          "normalized": "a(b-\u003eb)-\u003eb-\u003eb",
          "package": "RepLib",
          "signature": "t(a-\u003ea)-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-Lib.html#v:comp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCount number of \u003ccode\u003ea\u003c/code\u003es that appear in the argument\n\u003c/p\u003e",
          "module": "Generics.RepLib.Lib",
          "name": "count",
          "package": "RepLib",
          "signature": "t a -\u003e Int",
          "source": "src/Generics-RepLib-Lib.html#count",
          "type": "function"
        },
        "index": {
          "description": "Count number of that appear in the argument",
          "hierarchy": "Generics RepLib Lib",
          "module": "Generics.RepLib.Lib",
          "name": "count",
          "normalized": "a b-\u003eInt",
          "package": "RepLib",
          "signature": "t a-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-Lib.html#v:count"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFold a bindary operation left over a datastructure\n\u003c/p\u003e",
          "module": "Generics.RepLib.Lib",
          "name": "crush",
          "package": "RepLib",
          "signature": "(a -\u003e a -\u003e a) -\u003e a -\u003e t a -\u003e a",
          "source": "src/Generics-RepLib-Lib.html#crush",
          "type": "function"
        },
        "index": {
          "description": "Fold bindary operation left over datastructure",
          "hierarchy": "Generics RepLib Lib",
          "module": "Generics.RepLib.Lib",
          "name": "crush",
          "normalized": "(a-\u003ea-\u003ea)-\u003ea-\u003eb a-\u003ea",
          "package": "RepLib",
          "signature": "(a-\u003ea-\u003ea)-\u003ea-\u003et a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-Lib.html#v:crush"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRecursively force the evaluation of the first\n argument. For example,\n \u003ccode\u003e\n  deepSeq ( x , y ) z where\n    x = ...\n    y = ...\n \u003c/code\u003e\n will evaluate both \u003ccode\u003ex\u003c/code\u003e and \u003ccode\u003ey\u003c/code\u003e then return \u003ccode\u003ez\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Generics.RepLib.Lib",
          "name": "deepSeq",
          "package": "RepLib",
          "signature": "a -\u003e b -\u003e b",
          "source": "src/Generics-RepLib-Lib.html#deepSeq",
          "type": "function"
        },
        "index": {
          "description": "Recursively force the evaluation of the first argument For example deepSeq where will evaluate both and then return",
          "hierarchy": "Generics RepLib Lib",
          "module": "Generics.RepLib.Lib",
          "name": "deepSeq",
          "normalized": "a-\u003eb-\u003eb",
          "package": "RepLib",
          "partial": "Seq",
          "signature": "a-\u003eb-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-Lib.html#v:deepSeq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.RepLib.Lib",
          "name": "deepSeqR",
          "package": "RepLib",
          "signature": "R a -\u003e a -\u003e b -\u003e b",
          "source": "src/Generics-RepLib-Lib.html#deepSeqR",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics RepLib Lib",
          "module": "Generics.RepLib.Lib",
          "name": "deepSeqR",
          "normalized": "R a-\u003ea-\u003eb-\u003eb",
          "package": "RepLib",
          "partial": "Seq",
          "signature": "R a-\u003ea-\u003eb-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-Lib.html#v:deepSeqR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.RepLib.Lib",
          "name": "enumerate",
          "package": "RepLib",
          "signature": "[a]",
          "source": "src/Generics-RepLib-Lib.html#enumerate",
          "type": "method"
        },
        "index": {
          "hierarchy": "Generics RepLib Lib",
          "module": "Generics.RepLib.Lib",
          "name": "enumerate",
          "normalized": "[a]",
          "package": "RepLib",
          "signature": "[a]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-Lib.html#v:enumerate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.RepLib.Lib",
          "name": "enumerateD",
          "package": "RepLib",
          "signature": "[a]",
          "source": "src/Generics-RepLib-Lib.html#EnumerateD",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics RepLib Lib",
          "module": "Generics.RepLib.Lib",
          "name": "enumerateD",
          "normalized": "[a]",
          "package": "RepLib",
          "signature": "[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-Lib.html#v:enumerateD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.RepLib.Lib",
          "name": "enumerateR1",
          "package": "RepLib",
          "signature": "R1 EnumerateD a -\u003e [a]",
          "source": "src/Generics-RepLib-Lib.html#enumerateR1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics RepLib Lib",
          "module": "Generics.RepLib.Lib",
          "name": "enumerateR1",
          "normalized": "R EnumerateD a-\u003e[a]",
          "package": "RepLib",
          "signature": "R EnumerateD a-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-Lib.html#v:enumerateR1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert to list\n\u003c/p\u003e",
          "module": "Generics.RepLib.Lib",
          "name": "flatten",
          "package": "RepLib",
          "signature": "t a -\u003e [a]",
          "source": "src/Generics-RepLib-Lib.html#flatten",
          "type": "function"
        },
        "index": {
          "description": "Convert to list",
          "hierarchy": "Generics RepLib Lib",
          "module": "Generics.RepLib.Lib",
          "name": "flatten",
          "normalized": "a b-\u003e[b]",
          "package": "RepLib",
          "signature": "t a-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-Lib.html#v:flatten"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.RepLib.Lib",
          "name": "foldLeft",
          "package": "RepLib",
          "signature": "(b -\u003e a -\u003e b) -\u003e b -\u003e f a -\u003e b",
          "source": "src/Generics-RepLib-Lib.html#foldLeft",
          "type": "method"
        },
        "index": {
          "hierarchy": "Generics RepLib Lib",
          "module": "Generics.RepLib.Lib",
          "name": "foldLeft",
          "normalized": "(a-\u003eb-\u003ea)-\u003ea-\u003ec b-\u003ea",
          "package": "RepLib",
          "partial": "Left",
          "signature": "(b-\u003ea-\u003eb)-\u003eb-\u003ef a-\u003eb",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-Lib.html#v:foldLeft"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.RepLib.Lib",
          "name": "foldRight",
          "package": "RepLib",
          "signature": "(a -\u003e b -\u003e b) -\u003e f a -\u003e b -\u003e b",
          "source": "src/Generics-RepLib-Lib.html#foldRight",
          "type": "method"
        },
        "index": {
          "hierarchy": "Generics RepLib Lib",
          "module": "Generics.RepLib.Lib",
          "name": "foldRight",
          "normalized": "(a-\u003eb-\u003eb)-\u003ec a-\u003eb-\u003eb",
          "package": "RepLib",
          "partial": "Right",
          "signature": "(a-\u003eb-\u003eb)-\u003ef a-\u003eb-\u003eb",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-Lib.html#v:foldRight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEnsure property holds of all data\n\u003c/p\u003e",
          "module": "Generics.RepLib.Lib",
          "name": "gall",
          "package": "RepLib",
          "signature": "(a -\u003e Bool) -\u003e t a -\u003e Bool",
          "source": "src/Generics-RepLib-Lib.html#gall",
          "type": "function"
        },
        "index": {
          "description": "Ensure property holds of all data",
          "hierarchy": "Generics RepLib Lib",
          "module": "Generics.RepLib.Lib",
          "name": "gall",
          "normalized": "(a-\u003eBool)-\u003eb a-\u003eBool",
          "package": "RepLib",
          "signature": "(a-\u003eBool)-\u003et a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-Lib.html#v:gall"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEnsure all booleans are true\n\u003c/p\u003e",
          "module": "Generics.RepLib.Lib",
          "name": "gand",
          "package": "RepLib",
          "signature": "t Bool -\u003e Bool",
          "source": "src/Generics-RepLib-Lib.html#gand",
          "type": "function"
        },
        "index": {
          "description": "Ensure all booleans are true",
          "hierarchy": "Generics RepLib Lib",
          "module": "Generics.RepLib.Lib",
          "name": "gand",
          "normalized": "a Bool-\u003eBool",
          "package": "RepLib",
          "signature": "t Bool-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-Lib.html#v:gand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEnsure property holds of some element\n\u003c/p\u003e",
          "module": "Generics.RepLib.Lib",
          "name": "gany",
          "package": "RepLib",
          "signature": "(a -\u003e Bool) -\u003e t a -\u003e Bool",
          "source": "src/Generics-RepLib-Lib.html#gany",
          "type": "function"
        },
        "index": {
          "description": "Ensure property holds of some element",
          "hierarchy": "Generics RepLib Lib",
          "module": "Generics.RepLib.Lib",
          "name": "gany",
          "normalized": "(a-\u003eBool)-\u003eb a-\u003eBool",
          "package": "RepLib",
          "signature": "(a-\u003eBool)-\u003et a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-Lib.html#v:gany"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConcatenate all lists in the datastructure together\n\u003c/p\u003e",
          "module": "Generics.RepLib.Lib",
          "name": "gconcat",
          "package": "RepLib",
          "signature": "t [a] -\u003e [a]",
          "source": "src/Generics-RepLib-Lib.html#gconcat",
          "type": "function"
        },
        "index": {
          "description": "Concatenate all lists in the datastructure together",
          "hierarchy": "Generics RepLib Lib",
          "module": "Generics.RepLib.Lib",
          "name": "gconcat",
          "normalized": "a[b]-\u003e[b]",
          "package": "RepLib",
          "signature": "t[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-Lib.html#v:gconcat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIs an element stored in a datastructure\n\u003c/p\u003e",
          "module": "Generics.RepLib.Lib",
          "name": "gelem",
          "package": "RepLib",
          "signature": "a -\u003e t a -\u003e Bool",
          "source": "src/Generics-RepLib-Lib.html#gelem",
          "type": "function"
        },
        "index": {
          "description": "Is an element stored in datastructure",
          "hierarchy": "Generics RepLib Lib",
          "module": "Generics.RepLib.Lib",
          "name": "gelem",
          "normalized": "a-\u003eb a-\u003eBool",
          "package": "RepLib",
          "signature": "a-\u003et a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-Lib.html#v:gelem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.RepLib.Lib",
          "name": "generate",
          "package": "RepLib",
          "signature": "Int -\u003e [a]",
          "source": "src/Generics-RepLib-Lib.html#generate",
          "type": "method"
        },
        "index": {
          "hierarchy": "Generics RepLib Lib",
          "module": "Generics.RepLib.Lib",
          "name": "generate",
          "normalized": "Int-\u003e[a]",
          "package": "RepLib",
          "signature": "Int-\u003e[a]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-Lib.html#v:generate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.RepLib.Lib",
          "name": "generateD",
          "package": "RepLib",
          "signature": "Int -\u003e [a]",
          "source": "src/Generics-RepLib-Lib.html#GenerateD",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics RepLib Lib",
          "module": "Generics.RepLib.Lib",
          "name": "generateD",
          "normalized": "Int-\u003e[a]",
          "package": "RepLib",
          "signature": "Int-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-Lib.html#v:generateD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.RepLib.Lib",
          "name": "generateR1",
          "package": "RepLib",
          "signature": "R1 GenerateD a -\u003e Int -\u003e [a]",
          "source": "src/Generics-RepLib-Lib.html#generateR1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics RepLib Lib",
          "module": "Generics.RepLib.Lib",
          "name": "generateR1",
          "normalized": "R GenerateD a-\u003eInt-\u003e[a]",
          "package": "RepLib",
          "signature": "R GenerateD a-\u003eInt-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-Lib.html#v:generateR1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEnsure at least one boolean is true\n\u003c/p\u003e",
          "module": "Generics.RepLib.Lib",
          "name": "gor",
          "package": "RepLib",
          "signature": "t Bool -\u003e Bool",
          "source": "src/Generics-RepLib-Lib.html#gor",
          "type": "function"
        },
        "index": {
          "description": "Ensure at least one boolean is true",
          "hierarchy": "Generics RepLib Lib",
          "module": "Generics.RepLib.Lib",
          "name": "gor",
          "normalized": "a Bool-\u003eBool",
          "package": "RepLib",
          "signature": "t Bool-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-Lib.html#v:gor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMultiply all elements together\n\u003c/p\u003e",
          "module": "Generics.RepLib.Lib",
          "name": "gproduct",
          "package": "RepLib",
          "signature": "t a -\u003e a",
          "source": "src/Generics-RepLib-Lib.html#gproduct",
          "type": "function"
        },
        "index": {
          "description": "Multiply all elements together",
          "hierarchy": "Generics RepLib Lib",
          "module": "Generics.RepLib.Lib",
          "name": "gproduct",
          "normalized": "a b-\u003eb",
          "package": "RepLib",
          "signature": "t a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-Lib.html#v:gproduct"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.RepLib.Lib",
          "name": "gsum",
          "package": "RepLib",
          "signature": "a -\u003e Int",
          "source": "src/Generics-RepLib-Lib.html#gsum",
          "type": "method"
        },
        "index": {
          "hierarchy": "Generics RepLib Lib",
          "module": "Generics.RepLib.Lib",
          "name": "gsum",
          "normalized": "a-\u003eInt",
          "package": "RepLib",
          "signature": "a-\u003eInt",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-Lib.html#v:gsum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.RepLib.Lib",
          "name": "gsumD",
          "package": "RepLib",
          "signature": "a -\u003e Int",
          "source": "src/Generics-RepLib-Lib.html#GSumD",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics RepLib Lib",
          "module": "Generics.RepLib.Lib",
          "name": "gsumD",
          "normalized": "a-\u003eInt",
          "package": "RepLib",
          "signature": "a-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-Lib.html#v:gsumD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.RepLib.Lib",
          "name": "gsumR1",
          "package": "RepLib",
          "signature": "R1 GSumD a -\u003e a -\u003e Int",
          "source": "src/Generics-RepLib-Lib.html#gsumR1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics RepLib Lib",
          "module": "Generics.RepLib.Lib",
          "name": "gsumR1",
          "normalized": "R GSumD a-\u003ea-\u003eInt",
          "package": "RepLib",
          "signature": "R GSumD a-\u003ea-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-Lib.html#v:gsumR1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.RepLib.Lib",
          "name": "lreduce",
          "package": "RepLib",
          "signature": "b -\u003e a -\u003e b",
          "source": "src/Generics-RepLib-Lib.html#lreduce",
          "type": "method"
        },
        "index": {
          "hierarchy": "Generics RepLib Lib",
          "module": "Generics.RepLib.Lib",
          "name": "lreduce",
          "normalized": "a-\u003eb-\u003ea",
          "package": "RepLib",
          "signature": "b-\u003ea-\u003eb",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-Lib.html#v:lreduce"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.RepLib.Lib",
          "name": "lreduceD",
          "package": "RepLib",
          "signature": "b -\u003e a -\u003e b",
          "source": "src/Generics-RepLib-Lib.html#LreduceD",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics RepLib Lib",
          "module": "Generics.RepLib.Lib",
          "name": "lreduceD",
          "normalized": "a-\u003eb-\u003ea",
          "package": "RepLib",
          "signature": "b-\u003ea-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-Lib.html#v:lreduceD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.RepLib.Lib",
          "name": "lreduceR1",
          "package": "RepLib",
          "signature": "R1 (LreduceD b) a -\u003e b -\u003e a -\u003e b",
          "source": "src/Generics-RepLib-Lib.html#lreduceR1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics RepLib Lib",
          "module": "Generics.RepLib.Lib",
          "name": "lreduceR1",
          "normalized": "R(LreduceD a)b-\u003ea-\u003eb-\u003ea",
          "package": "RepLib",
          "signature": "R(LreduceD b)a-\u003eb-\u003ea-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-Lib.html#v:lreduceR1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eForce the evaluation of *datatypes* to their normal\n forms. Other types are left alone and not forced.\n\u003c/p\u003e",
          "module": "Generics.RepLib.Lib",
          "name": "rnf",
          "package": "RepLib",
          "signature": "a -\u003e a",
          "source": "src/Generics-RepLib-Lib.html#rnf",
          "type": "function"
        },
        "index": {
          "description": "Force the evaluation of datatypes to their normal forms Other types are left alone and not forced",
          "hierarchy": "Generics RepLib Lib",
          "module": "Generics.RepLib.Lib",
          "name": "rnf",
          "normalized": "a-\u003ea",
          "package": "RepLib",
          "signature": "a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-Lib.html#v:rnf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.RepLib.Lib",
          "name": "rnfR",
          "package": "RepLib",
          "signature": "R a -\u003e a -\u003e a",
          "source": "src/Generics-RepLib-Lib.html#rnfR",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics RepLib Lib",
          "module": "Generics.RepLib.Lib",
          "name": "rnfR",
          "normalized": "R a-\u003ea-\u003ea",
          "package": "RepLib",
          "signature": "R a-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-Lib.html#v:rnfR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.RepLib.Lib",
          "name": "rreduce",
          "package": "RepLib",
          "signature": "a -\u003e b -\u003e b",
          "source": "src/Generics-RepLib-Lib.html#rreduce",
          "type": "method"
        },
        "index": {
          "hierarchy": "Generics RepLib Lib",
          "module": "Generics.RepLib.Lib",
          "name": "rreduce",
          "normalized": "a-\u003eb-\u003eb",
          "package": "RepLib",
          "signature": "a-\u003eb-\u003eb",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-Lib.html#v:rreduce"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.RepLib.Lib",
          "name": "rreduceD",
          "package": "RepLib",
          "signature": "a -\u003e b -\u003e b",
          "source": "src/Generics-RepLib-Lib.html#RreduceD",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics RepLib Lib",
          "module": "Generics.RepLib.Lib",
          "name": "rreduceD",
          "normalized": "a-\u003eb-\u003eb",
          "package": "RepLib",
          "signature": "a-\u003eb-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-Lib.html#v:rreduceD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.RepLib.Lib",
          "name": "rreduceR1",
          "package": "RepLib",
          "signature": "R1 (RreduceD b) a -\u003e a -\u003e b -\u003e b",
          "source": "src/Generics-RepLib-Lib.html#rreduceR1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics RepLib Lib",
          "module": "Generics.RepLib.Lib",
          "name": "rreduceR1",
          "normalized": "R(RreduceD a)b-\u003eb-\u003ea-\u003ea",
          "package": "RepLib",
          "signature": "R(RreduceD b)a-\u003ea-\u003eb-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-Lib.html#v:rreduceR1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.RepLib.Lib",
          "name": "shrink",
          "package": "RepLib",
          "signature": "a -\u003e [a]",
          "source": "src/Generics-RepLib-Lib.html#shrink",
          "type": "method"
        },
        "index": {
          "hierarchy": "Generics RepLib Lib",
          "module": "Generics.RepLib.Lib",
          "name": "shrink",
          "normalized": "a-\u003e[a]",
          "package": "RepLib",
          "signature": "a-\u003e[a]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-Lib.html#v:shrink"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.RepLib.Lib",
          "name": "shrinkD",
          "package": "RepLib",
          "signature": "a -\u003e [a]",
          "source": "src/Generics-RepLib-Lib.html#ShrinkD",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics RepLib Lib",
          "module": "Generics.RepLib.Lib",
          "name": "shrinkD",
          "normalized": "a-\u003e[a]",
          "package": "RepLib",
          "signature": "a-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-Lib.html#v:shrinkD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProduce all children of a datastructure with the same type.  Note\n that subtrees is available for all representable types. For those\n that are not recursive datatypes, subtrees will always return the\n empty list. But, these trivial instances are convenient to have for\n the Shrink operation below.\n\u003c/p\u003e",
          "module": "Generics.RepLib.Lib",
          "name": "subtrees",
          "package": "RepLib",
          "signature": "a -\u003e [a]",
          "source": "src/Generics-RepLib-Lib.html#subtrees",
          "type": "function"
        },
        "index": {
          "description": "Produce all children of datastructure with the same type Note that subtrees is available for all representable types For those that are not recursive datatypes subtrees will always return the empty list But these trivial instances are convenient to have for the Shrink operation below",
          "hierarchy": "Generics RepLib Lib",
          "module": "Generics.RepLib.Lib",
          "name": "subtrees",
          "normalized": "a-\u003e[a]",
          "package": "RepLib",
          "signature": "a-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-Lib.html#v:subtrees"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.RepLib.Lib",
          "name": "zero",
          "package": "RepLib",
          "signature": "a",
          "source": "src/Generics-RepLib-Lib.html#zero",
          "type": "method"
        },
        "index": {
          "hierarchy": "Generics RepLib Lib",
          "module": "Generics.RepLib.Lib",
          "name": "zero",
          "package": "RepLib",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-Lib.html#v:zero"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.RepLib.Lib",
          "name": "zeroD",
          "package": "RepLib",
          "signature": "a",
          "source": "src/Generics-RepLib-Lib.html#ZeroD",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics RepLib Lib",
          "module": "Generics.RepLib.Lib",
          "name": "zeroD",
          "package": "RepLib",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-Lib.html#v:zeroD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.RepLib.Lib",
          "name": "zeroR1",
          "package": "RepLib",
          "signature": "R1 ZeroD a -\u003e a",
          "source": "src/Generics-RepLib-Lib.html#zeroR1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics RepLib Lib",
          "module": "Generics.RepLib.Lib",
          "name": "zeroR1",
          "normalized": "R ZeroD a-\u003ea",
          "package": "RepLib",
          "signature": "R ZeroD a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-Lib.html#v:zeroR1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe module PreludeLib contains generic operations to derive members of the standard\n prelude classess: Eq, Bounded, Compare, Show  (TODO: add Enum and Read)\n\u003c/p\u003e\u003cp\u003eAlthough these classes may already be automatically derived via the\n \u003ca\u003ederiving\u003c/a\u003e mechanism, this module is included for two reasons:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Deriving only works when datatypes are defined. This library\n allows instances of these classes to be generated anywhere. For\n example, suppose some other module contains the definition of the\n datatype T and exposes all of its constructors, but, frustratingly,\n does not derive an instance of the Show class.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eYou could define a Show instance of \u003ccode\u003eT\u003c/code\u003e in your own module with the\n   following code:\n\u003c/p\u003e\u003cpre\u003e import RepLib\n\n (repr1 ''T)  -- make the Rep1 instance of T available\n\n instance Show T where\n   showsPrec = showsPrecR1 rep1   -- showsPrecR1 is defined in this module\n\u003c/pre\u003e\u003cul\u003e\u003cli\u003e This library also serves as a model for generic functions that are\n slight modifications to these prelude operations. For example, if you\n wanted to define reverse lexicographic ordering or an XML pretty\n printer for datatypes, you might start here. This library is also a\n good place to start learning how to define your own generic\n operations, because the behavior of these operations should match the\n deriving mechanism specified by Haskell 98.\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
          "module": "Generics.RepLib.PreludeLib",
          "name": "PreludeLib",
          "package": "RepLib",
          "source": "src/Generics-RepLib-PreludeLib.html",
          "type": "module"
        },
        "index": {
          "description": "The module PreludeLib contains generic operations to derive members of the standard prelude classess Eq Bounded Compare Show TODO add Enum and Read Although these classes may already be automatically derived via the deriving mechanism this module is included for two reasons Deriving only works when datatypes are defined This library allows instances of these classes to be generated anywhere For example suppose some other module contains the definition of the datatype and exposes all of its constructors but frustratingly does not derive an instance of the Show class You could define Show instance of in your own module with the following code import RepLib repr1 make the Rep1 instance of available instance Show where showsPrec showsPrecR1 rep1 showsPrecR1 is defined in this module This library also serves as model for generic functions that are slight modifications to these prelude operations For example if you wanted to define reverse lexicographic ordering or an XML pretty printer for datatypes you might start here This library is also good place to start learning how to define your own generic operations because the behavior of these operations should match the deriving mechanism specified by Haskell",
          "hierarchy": "Generics RepLib PreludeLib",
          "module": "Generics.RepLib.PreludeLib",
          "name": "PreludeLib",
          "package": "RepLib",
          "partial": "Prelude Lib",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-PreludeLib.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.RepLib.PreludeLib",
          "name": "BoundedD",
          "package": "RepLib",
          "source": "src/Generics-RepLib-PreludeLib.html#BoundedD",
          "type": "data"
        },
        "index": {
          "hierarchy": "Generics RepLib PreludeLib",
          "module": "Generics.RepLib.PreludeLib",
          "name": "BoundedD",
          "package": "RepLib",
          "partial": "Bounded",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-PreludeLib.html#t:BoundedD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.RepLib.PreludeLib",
          "name": "EqD",
          "package": "RepLib",
          "source": "src/Generics-RepLib-PreludeLib.html#EqD",
          "type": "data"
        },
        "index": {
          "hierarchy": "Generics RepLib PreludeLib",
          "module": "Generics.RepLib.PreludeLib",
          "name": "EqD",
          "package": "RepLib",
          "partial": "Eq",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-PreludeLib.html#t:EqD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.RepLib.PreludeLib",
          "name": "OrdD",
          "package": "RepLib",
          "source": "src/Generics-RepLib-PreludeLib.html#OrdD",
          "type": "data"
        },
        "index": {
          "hierarchy": "Generics RepLib PreludeLib",
          "module": "Generics.RepLib.PreludeLib",
          "name": "OrdD",
          "package": "RepLib",
          "partial": "Ord",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-PreludeLib.html#t:OrdD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.RepLib.PreludeLib",
          "name": "ShowD",
          "package": "RepLib",
          "source": "src/Generics-RepLib-PreludeLib.html#ShowD",
          "type": "data"
        },
        "index": {
          "hierarchy": "Generics RepLib PreludeLib",
          "module": "Generics.RepLib.PreludeLib",
          "name": "ShowD",
          "package": "RepLib",
          "partial": "Show",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-PreludeLib.html#t:ShowD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMinimal completion of the Ord class\n\u003c/p\u003e",
          "module": "Generics.RepLib.PreludeLib",
          "name": "compareR1",
          "package": "RepLib",
          "signature": "R1 OrdD a -\u003e a -\u003e a -\u003e Ordering",
          "source": "src/Generics-RepLib-PreludeLib.html#compareR1",
          "type": "function"
        },
        "index": {
          "description": "Minimal completion of the Ord class",
          "hierarchy": "Generics RepLib PreludeLib",
          "module": "Generics.RepLib.PreludeLib",
          "name": "compareR1",
          "normalized": "R OrdD a-\u003ea-\u003ea-\u003eOrdering",
          "package": "RepLib",
          "signature": "R OrdD a-\u003ea-\u003ea-\u003eOrdering",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-PreludeLib.html#v:compareR1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePolymorphic equality, given an R1 representation\n\u003c/p\u003e",
          "module": "Generics.RepLib.PreludeLib",
          "name": "eqR1",
          "package": "RepLib",
          "signature": "R1 EqD a -\u003e a -\u003e a -\u003e Bool",
          "source": "src/Generics-RepLib-PreludeLib.html#eqR1",
          "type": "function"
        },
        "index": {
          "description": "Polymorphic equality given an R1 representation",
          "hierarchy": "Generics RepLib PreludeLib",
          "module": "Generics.RepLib.PreludeLib",
          "name": "eqR1",
          "normalized": "R EqD a-\u003ea-\u003ea-\u003eBool",
          "package": "RepLib",
          "signature": "R EqD a-\u003ea-\u003ea-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-PreludeLib.html#v:eqR1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTo generate the Bounded class\n\u003c/p\u003e",
          "module": "Generics.RepLib.PreludeLib",
          "name": "maxBoundR1",
          "package": "RepLib",
          "signature": "R1 BoundedD a -\u003e a",
          "source": "src/Generics-RepLib-PreludeLib.html#maxBoundR1",
          "type": "function"
        },
        "index": {
          "description": "To generate the Bounded class",
          "hierarchy": "Generics RepLib PreludeLib",
          "module": "Generics.RepLib.PreludeLib",
          "name": "maxBoundR1",
          "normalized": "R BoundedD a-\u003ea",
          "package": "RepLib",
          "partial": "Bound",
          "signature": "R BoundedD a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-PreludeLib.html#v:maxBoundR1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTo generate the Bounded class\n\u003c/p\u003e",
          "module": "Generics.RepLib.PreludeLib",
          "name": "minBoundR1",
          "package": "RepLib",
          "signature": "R1 BoundedD a -\u003e a",
          "source": "src/Generics-RepLib-PreludeLib.html#minBoundR1",
          "type": "function"
        },
        "index": {
          "description": "To generate the Bounded class",
          "hierarchy": "Generics RepLib PreludeLib",
          "module": "Generics.RepLib.PreludeLib",
          "name": "minBoundR1",
          "normalized": "R BoundedD a-\u003ea",
          "package": "RepLib",
          "partial": "Bound",
          "signature": "R BoundedD a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-PreludeLib.html#v:minBoundR1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMinimal completion of the show class\n\u003c/p\u003e",
          "module": "Generics.RepLib.PreludeLib",
          "name": "showsPrecR1",
          "package": "RepLib",
          "signature": "R1 ShowD a -\u003e Int -\u003e a -\u003e ShowS",
          "source": "src/Generics-RepLib-PreludeLib.html#showsPrecR1",
          "type": "function"
        },
        "index": {
          "description": "Minimal completion of the show class",
          "hierarchy": "Generics RepLib PreludeLib",
          "module": "Generics.RepLib.PreludeLib",
          "name": "showsPrecR1",
          "normalized": "R ShowD a-\u003eInt-\u003ea-\u003eShowS",
          "package": "RepLib",
          "partial": "Prec",
          "signature": "R ShowD a-\u003eInt-\u003ea-\u003eShowS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-PreludeLib.html#v:showsPrecR1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eRepresentations for Prelude types, necessary to (automatically) derive\n representations of user defined types.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Generics.RepLib.PreludeReps",
          "name": "PreludeReps",
          "package": "RepLib",
          "source": "src/Generics-RepLib-PreludeReps.html",
          "type": "module"
        },
        "index": {
          "description": "Representations for Prelude types necessary to automatically derive representations of user defined types",
          "hierarchy": "Generics RepLib PreludeReps",
          "module": "Generics.RepLib.PreludeReps",
          "name": "PreludeReps",
          "package": "RepLib",
          "partial": "Prelude Reps",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-PreludeReps.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.RepLib.PreludeReps",
          "name": "rBool",
          "package": "RepLib",
          "signature": "R Bool",
          "source": "src/Generics-RepLib-PreludeReps.html#rBool",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics RepLib PreludeReps",
          "module": "Generics.RepLib.PreludeReps",
          "name": "rBool",
          "package": "RepLib",
          "partial": "Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-PreludeReps.html#v:rBool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.RepLib.PreludeReps",
          "name": "rBool1",
          "package": "RepLib",
          "signature": "forall ctx.  () -\u003e () -\u003e R1 ctx Bool",
          "source": "src/Generics-RepLib-PreludeReps.html#rBool1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics RepLib PreludeReps",
          "module": "Generics.RepLib.PreludeReps",
          "name": "rBool1",
          "normalized": "a b()-\u003e()-\u003eR c Bool",
          "package": "RepLib",
          "partial": "Bool",
          "signature": "forall ctx.()-\u003e()-\u003eR ctx Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-PreludeReps.html#v:rBool1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.RepLib.PreludeReps",
          "name": "rEither",
          "package": "RepLib",
          "signature": "R (Either a b)",
          "source": "src/Generics-RepLib-PreludeReps.html#rEither",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics RepLib PreludeReps",
          "module": "Generics.RepLib.PreludeReps",
          "name": "rEither",
          "package": "RepLib",
          "partial": "Either",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-PreludeReps.html#v:rEither"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.RepLib.PreludeReps",
          "name": "rEither1",
          "package": "RepLib",
          "signature": "ctx a -\u003e ctx b -\u003e R1 ctx (Either a b)",
          "source": "src/Generics-RepLib-PreludeReps.html#rEither1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics RepLib PreludeReps",
          "module": "Generics.RepLib.PreludeReps",
          "name": "rEither1",
          "normalized": "a b-\u003ea c-\u003eR a(Either b c)",
          "package": "RepLib",
          "partial": "Either",
          "signature": "ctx a-\u003ectx b-\u003eR ctx(Either a b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-PreludeReps.html#v:rEither1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.RepLib.PreludeReps",
          "name": "rMaybe",
          "package": "RepLib",
          "signature": "R (Maybe a)",
          "source": "src/Generics-RepLib-PreludeReps.html#rMaybe",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics RepLib PreludeReps",
          "module": "Generics.RepLib.PreludeReps",
          "name": "rMaybe",
          "package": "RepLib",
          "partial": "Maybe",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-PreludeReps.html#v:rMaybe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.RepLib.PreludeReps",
          "name": "rMaybe1",
          "package": "RepLib",
          "signature": "() -\u003e ctx a -\u003e R1 ctx (Maybe a)",
          "source": "src/Generics-RepLib-PreludeReps.html#rMaybe1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics RepLib PreludeReps",
          "module": "Generics.RepLib.PreludeReps",
          "name": "rMaybe1",
          "normalized": "()-\u003ea b-\u003eR a(Maybe b)",
          "package": "RepLib",
          "partial": "Maybe",
          "signature": "()-\u003ectx a-\u003eR ctx(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-PreludeReps.html#v:rMaybe1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.RepLib.PreludeReps",
          "name": "rOrdering",
          "package": "RepLib",
          "signature": "R Ordering",
          "source": "src/Generics-RepLib-PreludeReps.html#rOrdering",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics RepLib PreludeReps",
          "module": "Generics.RepLib.PreludeReps",
          "name": "rOrdering",
          "package": "RepLib",
          "partial": "Ordering",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-PreludeReps.html#v:rOrdering"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.RepLib.PreludeReps",
          "name": "rOrdering1",
          "package": "RepLib",
          "signature": "forall ctx.  () -\u003e () -\u003e () -\u003e R1 ctx Ordering",
          "source": "src/Generics-RepLib-PreludeReps.html#rOrdering1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics RepLib PreludeReps",
          "module": "Generics.RepLib.PreludeReps",
          "name": "rOrdering1",
          "normalized": "a b()-\u003e()-\u003e()-\u003eR c Ordering",
          "package": "RepLib",
          "partial": "Ordering",
          "signature": "forall ctx.()-\u003e()-\u003e()-\u003eR ctx Ordering",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-PreludeReps.html#v:rOrdering1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.RepLib.PreludeReps",
          "name": "rTup3",
          "package": "RepLib",
          "signature": "R ((,,) a b c)",
          "source": "src/Generics-RepLib-PreludeReps.html#rTup3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics RepLib PreludeReps",
          "module": "Generics.RepLib.PreludeReps",
          "name": "rTup3",
          "normalized": "R((,,)a b c)",
          "package": "RepLib",
          "partial": "Tup",
          "signature": "R((,,)a b c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-PreludeReps.html#v:rTup3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.RepLib.PreludeReps",
          "name": "rTup3_1",
          "package": "RepLib",
          "signature": "(ctx a, ctx b, ctx c) -\u003e R1 ctx ((,,) a b c)",
          "source": "src/Generics-RepLib-PreludeReps.html#rTup3_1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics RepLib PreludeReps",
          "module": "Generics.RepLib.PreludeReps",
          "name": "rTup3_1",
          "normalized": "(a b,a c,a d)-\u003eR a((,,)b c d)",
          "package": "RepLib",
          "partial": "Tup",
          "signature": "(ctx a,ctx b,ctx c)-\u003eR ctx((,,)a b c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-PreludeReps.html#v:rTup3_1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.RepLib.PreludeReps",
          "name": "rTup4",
          "package": "RepLib",
          "signature": "R ((,,,) a b c d)",
          "source": "src/Generics-RepLib-PreludeReps.html#rTup4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics RepLib PreludeReps",
          "module": "Generics.RepLib.PreludeReps",
          "name": "rTup4",
          "normalized": "R((,,,)a b c d)",
          "package": "RepLib",
          "partial": "Tup",
          "signature": "R((,,,)a b c d)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-PreludeReps.html#v:rTup4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.RepLib.PreludeReps",
          "name": "rTup4_1",
          "package": "RepLib",
          "signature": "(ctx a, ctx b, ctx c, ctx d) -\u003e R1 ctx ((,,,) a b c d)",
          "source": "src/Generics-RepLib-PreludeReps.html#rTup4_1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics RepLib PreludeReps",
          "module": "Generics.RepLib.PreludeReps",
          "name": "rTup4_1",
          "normalized": "(a b,a c,a d,a e)-\u003eR a((,,,)b c d e)",
          "package": "RepLib",
          "partial": "Tup",
          "signature": "(ctx a,ctx b,ctx c,ctx d)-\u003eR ctx((,,,)a b c d)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-PreludeReps.html#v:rTup4_1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.RepLib.PreludeReps",
          "name": "rTup5",
          "package": "RepLib",
          "signature": "R ((,,,,) a b c d e)",
          "source": "src/Generics-RepLib-PreludeReps.html#rTup5",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics RepLib PreludeReps",
          "module": "Generics.RepLib.PreludeReps",
          "name": "rTup5",
          "normalized": "R((,,,,)a b c d e)",
          "package": "RepLib",
          "partial": "Tup",
          "signature": "R((,,,,)a b c d e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-PreludeReps.html#v:rTup5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.RepLib.PreludeReps",
          "name": "rTup5_1",
          "package": "RepLib",
          "signature": "(ctx a, ctx b, ctx c, ctx d, ctx e) -\u003e R1 ctx ((,,,,) a b c d e)",
          "source": "src/Generics-RepLib-PreludeReps.html#rTup5_1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics RepLib PreludeReps",
          "module": "Generics.RepLib.PreludeReps",
          "name": "rTup5_1",
          "normalized": "(a b,a c,a d,a e,a f)-\u003eR a((,,,,)b c d e f)",
          "package": "RepLib",
          "partial": "Tup",
          "signature": "(ctx a,ctx b,ctx c,ctx d,ctx e)-\u003eR ctx((,,,,)a b c d e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-PreludeReps.html#v:rTup5_1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.RepLib.PreludeReps",
          "name": "rTup6",
          "package": "RepLib",
          "signature": "R ((,,,,,) a b c d e f)",
          "source": "src/Generics-RepLib-PreludeReps.html#rTup6",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics RepLib PreludeReps",
          "module": "Generics.RepLib.PreludeReps",
          "name": "rTup6",
          "normalized": "R((,,,,,)a b c d e f)",
          "package": "RepLib",
          "partial": "Tup",
          "signature": "R((,,,,,)a b c d e f)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-PreludeReps.html#v:rTup6"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.RepLib.PreludeReps",
          "name": "rTup6_1",
          "package": "RepLib",
          "signature": "(ctx a, ctx b, ctx c, ctx d, ctx e, ctx f) -\u003e R1 ctx ((,,,,,) a b c d e f)",
          "source": "src/Generics-RepLib-PreludeReps.html#rTup6_1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics RepLib PreludeReps",
          "module": "Generics.RepLib.PreludeReps",
          "name": "rTup6_1",
          "normalized": "(a b,a c,a d,a e,a f,a g)-\u003eR a((,,,,,)b c d e f g)",
          "package": "RepLib",
          "partial": "Tup",
          "signature": "(ctx a,ctx b,ctx c,ctx d,ctx e,ctx f)-\u003eR ctx((,,,,,)a b c d e f)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-PreludeReps.html#v:rTup6_1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.RepLib.PreludeReps",
          "name": "rTup7",
          "package": "RepLib",
          "signature": "R ((,,,,,,) a b c d e f g)",
          "source": "src/Generics-RepLib-PreludeReps.html#rTup7",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics RepLib PreludeReps",
          "module": "Generics.RepLib.PreludeReps",
          "name": "rTup7",
          "normalized": "R((,,,,,,)a b c d e f g)",
          "package": "RepLib",
          "partial": "Tup",
          "signature": "R((,,,,,,)a b c d e f g)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-PreludeReps.html#v:rTup7"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.RepLib.PreludeReps",
          "name": "rTup7_1",
          "package": "RepLib",
          "signature": "(ctx a, ctx b, ctx c, ctx d, ctx e, ctx f, ctx g) -\u003e R1 ctx ((,,,,,,) a b c d e f g)",
          "source": "src/Generics-RepLib-PreludeReps.html#rTup7_1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics RepLib PreludeReps",
          "module": "Generics.RepLib.PreludeReps",
          "name": "rTup7_1",
          "normalized": "(a b,a c,a d,a e,a f,a g,a h)-\u003eR a((,,,,,,)b c d e f g h)",
          "package": "RepLib",
          "partial": "Tup",
          "signature": "(ctx a,ctx b,ctx c,ctx d,ctx e,ctx f,ctx g)-\u003eR ctx((,,,,,,)a b c d e f g)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-PreludeReps.html#v:rTup7_1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eBasic data structure and class for representation types\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Generics.RepLib.R",
          "name": "R",
          "package": "RepLib",
          "source": "src/Generics-RepLib-R.html",
          "type": "module"
        },
        "index": {
          "description": "Basic data structure and class for representation types",
          "hierarchy": "Generics RepLib R",
          "module": "Generics.RepLib.R",
          "name": "R",
          "package": "RepLib",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-R.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCons for a list of types\n\u003c/p\u003e",
          "module": "Generics.RepLib.R",
          "name": ":*:",
          "package": "RepLib",
          "source": "src/Generics-RepLib-R.html#%3A%2A%3A",
          "type": "data"
        },
        "index": {
          "description": "Cons for list of types",
          "hierarchy": "Generics RepLib R",
          "module": "Generics.RepLib.R",
          "name": ":*:",
          "package": "RepLib",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-R.html#t::-42-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresentation of a data constructor includes an\n embedding between the datatype and a list of other types\n as well as the representation of that list of other types.\n\u003c/p\u003e",
          "module": "Generics.RepLib.R",
          "name": "Con",
          "package": "RepLib",
          "source": "src/Generics-RepLib-R.html#Con",
          "type": "data"
        },
        "index": {
          "description": "Representation of data constructor includes an embedding between the datatype and list of other types as well as the representation of that list of other types",
          "hierarchy": "Generics RepLib R",
          "module": "Generics.RepLib.R",
          "name": "Con",
          "package": "RepLib",
          "partial": "Con",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-R.html#t:Con"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInformation about a datatype, including its\n fully qualified name and representation of\n its type arguments.\n\u003c/p\u003e",
          "module": "Generics.RepLib.R",
          "name": "DT",
          "package": "RepLib",
          "source": "src/Generics-RepLib-R.html#DT",
          "type": "data"
        },
        "index": {
          "description": "Information about datatype including its fully qualified name and representation of its type arguments",
          "hierarchy": "Generics RepLib R",
          "module": "Generics.RepLib.R",
          "name": "DT",
          "package": "RepLib",
          "partial": "DT",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-R.html#t:DT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn embedding between a list of types \u003ccode\u003el\u003c/code\u003e and\n a datatype \u003ccode\u003ea\u003c/code\u003e, based on a particular data constructor.\n The to function is a wrapper for the constructor, the\n from function pattern matches on the constructor.\n\u003c/p\u003e",
          "module": "Generics.RepLib.R",
          "name": "Emb",
          "package": "RepLib",
          "source": "src/Generics-RepLib-R.html#Emb",
          "type": "data"
        },
        "index": {
          "description": "An embedding between list of types and datatype based on particular data constructor The to function is wrapper for the constructor the from function pattern matches on the constructor",
          "hierarchy": "Generics RepLib R",
          "module": "Generics.RepLib.R",
          "name": "Emb",
          "package": "RepLib",
          "partial": "Emb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-R.html#t:Emb"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.RepLib.R",
          "name": "Fixity",
          "package": "RepLib",
          "source": "src/Generics-RepLib-R.html#Fixity",
          "type": "data"
        },
        "index": {
          "hierarchy": "Generics RepLib R",
          "module": "Generics.RepLib.R",
          "name": "Fixity",
          "package": "RepLib",
          "partial": "Fixity",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-R.html#t:Fixity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA heterogeneous list\n\u003c/p\u003e",
          "module": "Generics.RepLib.R",
          "name": "MTup",
          "package": "RepLib",
          "source": "src/Generics-RepLib-R.html#MTup",
          "type": "data"
        },
        "index": {
          "description": "heterogeneous list",
          "hierarchy": "Generics RepLib R",
          "module": "Generics.RepLib.R",
          "name": "MTup",
          "package": "RepLib",
          "partial": "MTup",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-R.html#t:MTup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn empty list of types\n\u003c/p\u003e",
          "module": "Generics.RepLib.R",
          "name": "Nil",
          "package": "RepLib",
          "source": "src/Generics-RepLib-R.html#Nil",
          "type": "data"
        },
        "index": {
          "description": "An empty list of types",
          "hierarchy": "Generics RepLib R",
          "module": "Generics.RepLib.R",
          "name": "Nil",
          "package": "RepLib",
          "partial": "Nil",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-R.html#t:Nil"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA value of type \u003ccode\u003eR a\u003c/code\u003e is a representation of a type \u003ccode\u003ea\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Generics.RepLib.R",
          "name": "R",
          "package": "RepLib",
          "source": "src/Generics-RepLib-R.html#R",
          "type": "data"
        },
        "index": {
          "description": "value of type is representation of type",
          "hierarchy": "Generics RepLib R",
          "module": "Generics.RepLib.R",
          "name": "R",
          "package": "RepLib",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-R.html#t:R"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA class of representable types\n\u003c/p\u003e",
          "module": "Generics.RepLib.R",
          "name": "Rep",
          "package": "RepLib",
          "source": "src/Generics-RepLib-R.html#Rep",
          "type": "class"
        },
        "index": {
          "description": "class of representable types",
          "hierarchy": "Generics RepLib R",
          "module": "Generics.RepLib.R",
          "name": "Rep",
          "package": "RepLib",
          "partial": "Rep",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-R.html#t:Rep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.RepLib.R",
          "name": ":*:",
          "package": "RepLib",
          "signature": "a :*: l",
          "source": "src/Generics-RepLib-R.html#%3A%2A%3A",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics RepLib R",
          "module": "Generics.RepLib.R",
          "name": ":*:",
          "package": "RepLib",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-R.html#v::-42-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.RepLib.R",
          "name": ":+:",
          "package": "RepLib",
          "signature": "r a -\u003e MTup r l -\u003e MTup r (a :*: l)",
          "source": "src/Generics-RepLib-R.html#MTup",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics RepLib R",
          "module": "Generics.RepLib.R",
          "name": ":+:",
          "normalized": "a b-\u003eMTup a c-\u003eMTup a(b*c)",
          "package": "RepLib",
          "signature": "r a-\u003eMTup r l-\u003eMTup r(a*l)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-R.html#v::-43-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.RepLib.R",
          "name": "Abstract",
          "package": "RepLib",
          "signature": "DT -\u003e R a",
          "source": "src/Generics-RepLib-R.html#R",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics RepLib R",
          "module": "Generics.RepLib.R",
          "name": "Abstract",
          "normalized": "DT-\u003eR a",
          "package": "RepLib",
          "partial": "Abstract",
          "signature": "DT-\u003eR a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-R.html#v:Abstract"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.RepLib.R",
          "name": "Arrow",
          "package": "RepLib",
          "signature": "R a -\u003e R b -\u003e R (a -\u003e b)",
          "source": "src/Generics-RepLib-R.html#R",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics RepLib R",
          "module": "Generics.RepLib.R",
          "name": "Arrow",
          "normalized": "R a-\u003eR b-\u003eR(a-\u003eb)",
          "package": "RepLib",
          "partial": "Arrow",
          "signature": "R a-\u003eR b-\u003eR(a-\u003eb)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-R.html#v:Arrow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.RepLib.R",
          "name": "Char",
          "package": "RepLib",
          "signature": "R Char",
          "source": "src/Generics-RepLib-R.html#R",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics RepLib R",
          "module": "Generics.RepLib.R",
          "name": "Char",
          "package": "RepLib",
          "partial": "Char",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-R.html#v:Char"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.RepLib.R",
          "name": "Con",
          "package": "RepLib",
          "signature": "Emb l a -\u003e MTup r l -\u003e Con r a",
          "source": "src/Generics-RepLib-R.html#Con",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics RepLib R",
          "module": "Generics.RepLib.R",
          "name": "Con",
          "normalized": "Emb a b-\u003eMTup c a-\u003eCon c b",
          "package": "RepLib",
          "partial": "Con",
          "signature": "Emb l a-\u003eMTup r l-\u003eCon r a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-R.html#v:Con"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.RepLib.R",
          "name": "DT",
          "package": "RepLib",
          "signature": "forall l . DT String (MTup R l)",
          "source": "src/Generics-RepLib-R.html#DT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics RepLib R",
          "module": "Generics.RepLib.R",
          "name": "DT",
          "package": "RepLib",
          "partial": "DT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-R.html#v:DT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.RepLib.R",
          "name": "Data",
          "package": "RepLib",
          "signature": "DT -\u003e [Con R a] -\u003e R a",
          "source": "src/Generics-RepLib-R.html#R",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics RepLib R",
          "module": "Generics.RepLib.R",
          "name": "Data",
          "normalized": "DT-\u003e[Con R a]-\u003eR a",
          "package": "RepLib",
          "partial": "Data",
          "signature": "DT-\u003e[Con R a]-\u003eR a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-R.html#v:Data"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.RepLib.R",
          "name": "Double",
          "package": "RepLib",
          "signature": "R Double",
          "source": "src/Generics-RepLib-R.html#R",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics RepLib R",
          "module": "Generics.RepLib.R",
          "name": "Double",
          "package": "RepLib",
          "partial": "Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-R.html#v:Double"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.RepLib.R",
          "name": "Emb",
          "package": "RepLib",
          "signature": "Emb",
          "source": "src/Generics-RepLib-R.html#Emb",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics RepLib R",
          "module": "Generics.RepLib.R",
          "name": "Emb",
          "package": "RepLib",
          "partial": "Emb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-R.html#v:Emb"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.RepLib.R",
          "name": "Equal",
          "package": "RepLib",
          "signature": "R a -\u003e R b -\u003e R (a :=: b)",
          "source": "src/Generics-RepLib-R.html#R",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics RepLib R",
          "module": "Generics.RepLib.R",
          "name": "Equal",
          "normalized": "R a-\u003eR b-\u003eR(a b)",
          "package": "RepLib",
          "partial": "Equal",
          "signature": "R a-\u003eR b-\u003eR(a b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-R.html#v:Equal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.RepLib.R",
          "name": "Float",
          "package": "RepLib",
          "signature": "R Float",
          "source": "src/Generics-RepLib-R.html#R",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics RepLib R",
          "module": "Generics.RepLib.R",
          "name": "Float",
          "package": "RepLib",
          "partial": "Float",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-R.html#v:Float"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.RepLib.R",
          "name": "IO",
          "package": "RepLib",
          "signature": "R a -\u003e R (IO a)",
          "source": "src/Generics-RepLib-R.html#R",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics RepLib R",
          "module": "Generics.RepLib.R",
          "name": "IO",
          "normalized": "R a-\u003eR(IO a)",
          "package": "RepLib",
          "partial": "IO",
          "signature": "R a-\u003eR(IO a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-R.html#v:IO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.RepLib.R",
          "name": "IOError",
          "package": "RepLib",
          "signature": "R IOError",
          "source": "src/Generics-RepLib-R.html#R",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics RepLib R",
          "module": "Generics.RepLib.R",
          "name": "IOError",
          "package": "RepLib",
          "partial": "IOError",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-R.html#v:IOError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.RepLib.R",
          "name": "Infix",
          "package": "RepLib",
          "signature": "Infix",
          "source": "src/Generics-RepLib-R.html#Fixity",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics RepLib R",
          "module": "Generics.RepLib.R",
          "name": "Infix",
          "package": "RepLib",
          "partial": "Infix",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-R.html#v:Infix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.RepLib.R",
          "name": "Infixl",
          "package": "RepLib",
          "signature": "Infixl",
          "source": "src/Generics-RepLib-R.html#Fixity",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics RepLib R",
          "module": "Generics.RepLib.R",
          "name": "Infixl",
          "package": "RepLib",
          "partial": "Infixl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-R.html#v:Infixl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.RepLib.R",
          "name": "Infixr",
          "package": "RepLib",
          "signature": "Infixr",
          "source": "src/Generics-RepLib-R.html#Fixity",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics RepLib R",
          "module": "Generics.RepLib.R",
          "name": "Infixr",
          "package": "RepLib",
          "partial": "Infixr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-R.html#v:Infixr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.RepLib.R",
          "name": "Int",
          "package": "RepLib",
          "signature": "R Int",
          "source": "src/Generics-RepLib-R.html#R",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics RepLib R",
          "module": "Generics.RepLib.R",
          "name": "Int",
          "package": "RepLib",
          "partial": "Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-R.html#v:Int"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.RepLib.R",
          "name": "Integer",
          "package": "RepLib",
          "signature": "R Integer",
          "source": "src/Generics-RepLib-R.html#R",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics RepLib R",
          "module": "Generics.RepLib.R",
          "name": "Integer",
          "package": "RepLib",
          "partial": "Integer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-R.html#v:Integer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.RepLib.R",
          "name": "MNil",
          "package": "RepLib",
          "signature": "MTup r Nil",
          "source": "src/Generics-RepLib-R.html#MTup",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics RepLib R",
          "module": "Generics.RepLib.R",
          "name": "MNil",
          "package": "RepLib",
          "partial": "MNil",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-R.html#v:MNil"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.RepLib.R",
          "name": "Nil",
          "package": "RepLib",
          "signature": "Nil",
          "source": "src/Generics-RepLib-R.html#Nil",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics RepLib R",
          "module": "Generics.RepLib.R",
          "name": "Nil",
          "package": "RepLib",
          "partial": "Nil",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-R.html#v:Nil"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.RepLib.R",
          "name": "Nonfix",
          "package": "RepLib",
          "signature": "Nonfix",
          "source": "src/Generics-RepLib-R.html#Fixity",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics RepLib R",
          "module": "Generics.RepLib.R",
          "name": "Nonfix",
          "package": "RepLib",
          "partial": "Nonfix",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-R.html#v:Nonfix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.RepLib.R",
          "name": "Rational",
          "package": "RepLib",
          "signature": "R Rational",
          "source": "src/Generics-RepLib-R.html#R",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics RepLib R",
          "module": "Generics.RepLib.R",
          "name": "Rational",
          "package": "RepLib",
          "partial": "Rational",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-R.html#v:Rational"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.RepLib.R",
          "name": "fixity",
          "package": "RepLib",
          "signature": "Fixity",
          "source": "src/Generics-RepLib-R.html#Emb",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics RepLib R",
          "module": "Generics.RepLib.R",
          "name": "fixity",
          "package": "RepLib",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-R.html#v:fixity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.RepLib.R",
          "name": "from",
          "package": "RepLib",
          "signature": "a -\u003e Maybe l",
          "source": "src/Generics-RepLib-R.html#Emb",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics RepLib R",
          "module": "Generics.RepLib.R",
          "name": "from",
          "normalized": "a-\u003eMaybe b",
          "package": "RepLib",
          "signature": "a-\u003eMaybe l",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-R.html#v:from"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.RepLib.R",
          "name": "labels",
          "package": "RepLib",
          "signature": "Maybe [String]",
          "source": "src/Generics-RepLib-R.html#Emb",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics RepLib R",
          "module": "Generics.RepLib.R",
          "name": "labels",
          "normalized": "Maybe[String]",
          "package": "RepLib",
          "signature": "Maybe[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-R.html#v:labels"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.RepLib.R",
          "name": "name",
          "package": "RepLib",
          "signature": "String",
          "source": "src/Generics-RepLib-R.html#Emb",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics RepLib R",
          "module": "Generics.RepLib.R",
          "name": "name",
          "package": "RepLib",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-R.html#v:name"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.RepLib.R",
          "name": "prec",
          "package": "RepLib",
          "signature": "Int",
          "source": "src/Generics-RepLib-R.html#Fixity",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics RepLib R",
          "module": "Generics.RepLib.R",
          "name": "prec",
          "package": "RepLib",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-R.html#v:prec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.RepLib.R",
          "name": "rConsEmb",
          "package": "RepLib",
          "signature": "Emb (a :*: ([a] :*: Nil)) [a]",
          "source": "src/Generics-RepLib-R.html#rConsEmb",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics RepLib R",
          "module": "Generics.RepLib.R",
          "name": "rConsEmb",
          "normalized": "Emb(a*([a]*Nil))[a]",
          "package": "RepLib",
          "partial": "Cons Emb",
          "signature": "Emb(a*([a]*Nil))[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-R.html#v:rConsEmb"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.RepLib.R",
          "name": "rList",
          "package": "RepLib",
          "signature": "R [a]",
          "source": "src/Generics-RepLib-R.html#rList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics RepLib R",
          "module": "Generics.RepLib.R",
          "name": "rList",
          "normalized": "R[a]",
          "package": "RepLib",
          "partial": "List",
          "signature": "R[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-R.html#v:rList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.RepLib.R",
          "name": "rNilEmb",
          "package": "RepLib",
          "signature": "Emb Nil [a]",
          "source": "src/Generics-RepLib-R.html#rNilEmb",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics RepLib R",
          "module": "Generics.RepLib.R",
          "name": "rNilEmb",
          "normalized": "Emb Nil[a]",
          "package": "RepLib",
          "partial": "Nil Emb",
          "signature": "Emb Nil[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-R.html#v:rNilEmb"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.RepLib.R",
          "name": "rPairEmb",
          "package": "RepLib",
          "signature": "Emb (a :*: (b :*: Nil)) (a, b)",
          "source": "src/Generics-RepLib-R.html#rPairEmb",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics RepLib R",
          "module": "Generics.RepLib.R",
          "name": "rPairEmb",
          "normalized": "Emb(a*(b*Nil))(a,b)",
          "package": "RepLib",
          "partial": "Pair Emb",
          "signature": "Emb(a*(b*Nil))(a,b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-R.html#v:rPairEmb"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.RepLib.R",
          "name": "rTup2",
          "package": "RepLib",
          "signature": "R (a, b)",
          "source": "src/Generics-RepLib-R.html#rTup2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics RepLib R",
          "module": "Generics.RepLib.R",
          "name": "rTup2",
          "normalized": "R(a,b)",
          "package": "RepLib",
          "partial": "Tup",
          "signature": "R(a,b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-R.html#v:rTup2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.RepLib.R",
          "name": "rUnit",
          "package": "RepLib",
          "signature": "R ()",
          "source": "src/Generics-RepLib-R.html#rUnit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics RepLib R",
          "module": "Generics.RepLib.R",
          "name": "rUnit",
          "normalized": "R()",
          "package": "RepLib",
          "partial": "Unit",
          "signature": "R()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-R.html#v:rUnit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.RepLib.R",
          "name": "rUnitEmb",
          "package": "RepLib",
          "signature": "Emb Nil ()",
          "source": "src/Generics-RepLib-R.html#rUnitEmb",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics RepLib R",
          "module": "Generics.RepLib.R",
          "name": "rUnitEmb",
          "normalized": "Emb Nil()",
          "package": "RepLib",
          "partial": "Unit Emb",
          "signature": "Emb Nil()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-R.html#v:rUnitEmb"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.RepLib.R",
          "name": "rep",
          "package": "RepLib",
          "signature": "R a",
          "source": "src/Generics-RepLib-R.html#rep",
          "type": "method"
        },
        "index": {
          "hierarchy": "Generics RepLib R",
          "module": "Generics.RepLib.R",
          "name": "rep",
          "package": "RepLib",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-R.html#v:rep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.RepLib.R",
          "name": "to",
          "package": "RepLib",
          "signature": "l -\u003e a",
          "source": "src/Generics-RepLib-R.html#Emb",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics RepLib R",
          "module": "Generics.RepLib.R",
          "name": "to",
          "normalized": "a-\u003eb",
          "package": "RepLib",
          "signature": "l-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-R.html#v:to"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.RepLib.R1",
          "name": "R1",
          "package": "RepLib",
          "source": "src/Generics-RepLib-R1.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Generics RepLib R1",
          "module": "Generics.RepLib.R1",
          "name": "R1",
          "package": "RepLib",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-R1.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.RepLib.R1",
          "name": "R1",
          "package": "RepLib",
          "source": "src/Generics-RepLib-R1.html#R1",
          "type": "data"
        },
        "index": {
          "hierarchy": "Generics RepLib R1",
          "module": "Generics.RepLib.R1",
          "name": "R1",
          "package": "RepLib",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-R1.html#t:R1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.RepLib.R1",
          "name": "Rep1",
          "package": "RepLib",
          "source": "src/Generics-RepLib-R1.html#Rep1",
          "type": "class"
        },
        "index": {
          "hierarchy": "Generics RepLib R1",
          "module": "Generics.RepLib.R1",
          "name": "Rep1",
          "package": "RepLib",
          "partial": "Rep",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-R1.html#t:Rep1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.RepLib.R1",
          "name": "Sat",
          "package": "RepLib",
          "source": "src/Generics-RepLib-R1.html#Sat",
          "type": "class"
        },
        "index": {
          "hierarchy": "Generics RepLib R1",
          "module": "Generics.RepLib.R1",
          "name": "Sat",
          "package": "RepLib",
          "partial": "Sat",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-R1.html#t:Sat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.RepLib.R1",
          "name": "Abstract1",
          "package": "RepLib",
          "signature": "DT -\u003e R1 ctx a",
          "source": "src/Generics-RepLib-R1.html#R1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics RepLib R1",
          "module": "Generics.RepLib.R1",
          "name": "Abstract1",
          "normalized": "DT-\u003eR a b",
          "package": "RepLib",
          "partial": "Abstract",
          "signature": "DT-\u003eR ctx a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-R1.html#v:Abstract1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.RepLib.R1",
          "name": "Arrow1",
          "package": "RepLib",
          "signature": "ctx a -\u003e ctx b -\u003e R1 ctx (a -\u003e b)",
          "source": "src/Generics-RepLib-R1.html#R1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics RepLib R1",
          "module": "Generics.RepLib.R1",
          "name": "Arrow1",
          "normalized": "a b-\u003ea c-\u003eR a(b-\u003ec)",
          "package": "RepLib",
          "partial": "Arrow",
          "signature": "ctx a-\u003ectx b-\u003eR ctx(a-\u003eb)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-R1.html#v:Arrow1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.RepLib.R1",
          "name": "Char1",
          "package": "RepLib",
          "signature": "R1 ctx Char",
          "source": "src/Generics-RepLib-R1.html#R1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics RepLib R1",
          "module": "Generics.RepLib.R1",
          "name": "Char1",
          "package": "RepLib",
          "partial": "Char",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-R1.html#v:Char1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.RepLib.R1",
          "name": "Data1",
          "package": "RepLib",
          "signature": "DT -\u003e [Con ctx a] -\u003e R1 ctx a",
          "source": "src/Generics-RepLib-R1.html#R1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics RepLib R1",
          "module": "Generics.RepLib.R1",
          "name": "Data1",
          "normalized": "DT-\u003e[Con a b]-\u003eR a b",
          "package": "RepLib",
          "partial": "Data",
          "signature": "DT-\u003e[Con ctx a]-\u003eR ctx a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-R1.html#v:Data1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.RepLib.R1",
          "name": "Double1",
          "package": "RepLib",
          "signature": "R1 ctx Double",
          "source": "src/Generics-RepLib-R1.html#R1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics RepLib R1",
          "module": "Generics.RepLib.R1",
          "name": "Double1",
          "package": "RepLib",
          "partial": "Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-R1.html#v:Double1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.RepLib.R1",
          "name": "Equal1",
          "package": "RepLib",
          "signature": "ctx a -\u003e ctx b -\u003e R1 ctx (a :=: b)",
          "source": "src/Generics-RepLib-R1.html#R1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics RepLib R1",
          "module": "Generics.RepLib.R1",
          "name": "Equal1",
          "normalized": "a b-\u003ea c-\u003eR a(b c)",
          "package": "RepLib",
          "partial": "Equal",
          "signature": "ctx a-\u003ectx b-\u003eR ctx(a b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-R1.html#v:Equal1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.RepLib.R1",
          "name": "Float1",
          "package": "RepLib",
          "signature": "R1 ctx Float",
          "source": "src/Generics-RepLib-R1.html#R1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics RepLib R1",
          "module": "Generics.RepLib.R1",
          "name": "Float1",
          "package": "RepLib",
          "partial": "Float",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-R1.html#v:Float1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.RepLib.R1",
          "name": "IO1",
          "package": "RepLib",
          "signature": "ctx a -\u003e R1 ctx (IO a)",
          "source": "src/Generics-RepLib-R1.html#R1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics RepLib R1",
          "module": "Generics.RepLib.R1",
          "name": "IO1",
          "normalized": "a b-\u003eR a(IO b)",
          "package": "RepLib",
          "partial": "IO",
          "signature": "ctx a-\u003eR ctx(IO a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-R1.html#v:IO1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.RepLib.R1",
          "name": "IOError1",
          "package": "RepLib",
          "signature": "R1 ctx IOError",
          "source": "src/Generics-RepLib-R1.html#R1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics RepLib R1",
          "module": "Generics.RepLib.R1",
          "name": "IOError1",
          "package": "RepLib",
          "partial": "IOError",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-R1.html#v:IOError1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.RepLib.R1",
          "name": "Int1",
          "package": "RepLib",
          "signature": "R1 ctx Int",
          "source": "src/Generics-RepLib-R1.html#R1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics RepLib R1",
          "module": "Generics.RepLib.R1",
          "name": "Int1",
          "package": "RepLib",
          "partial": "Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-R1.html#v:Int1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.RepLib.R1",
          "name": "Integer1",
          "package": "RepLib",
          "signature": "R1 ctx Integer",
          "source": "src/Generics-RepLib-R1.html#R1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics RepLib R1",
          "module": "Generics.RepLib.R1",
          "name": "Integer1",
          "package": "RepLib",
          "partial": "Integer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-R1.html#v:Integer1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.RepLib.R1",
          "name": "Rational1",
          "package": "RepLib",
          "signature": "R1 ctx Rational",
          "source": "src/Generics-RepLib-R1.html#R1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics RepLib R1",
          "module": "Generics.RepLib.R1",
          "name": "Rational1",
          "package": "RepLib",
          "partial": "Rational",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-R1.html#v:Rational1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.RepLib.R1",
          "name": "dict",
          "package": "RepLib",
          "signature": "a",
          "source": "src/Generics-RepLib-R1.html#dict",
          "type": "method"
        },
        "index": {
          "hierarchy": "Generics RepLib R1",
          "module": "Generics.RepLib.R1",
          "name": "dict",
          "package": "RepLib",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-R1.html#v:dict"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAccess a representation, given a proxy\n\u003c/p\u003e",
          "module": "Generics.RepLib.R1",
          "name": "getRepC",
          "package": "RepLib",
          "signature": "c b -\u003e R b",
          "source": "src/Generics-RepLib-R1.html#getRepC",
          "type": "function"
        },
        "index": {
          "description": "Access representation given proxy",
          "hierarchy": "Generics RepLib R1",
          "module": "Generics.RepLib.R1",
          "name": "getRepC",
          "normalized": "a b-\u003eR b",
          "package": "RepLib",
          "partial": "Rep",
          "signature": "c b-\u003eR b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-R1.html#v:getRepC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.RepLib.R1",
          "name": "rList1",
          "package": "RepLib",
          "signature": "ctx a -\u003e ctx [a] -\u003e R1 ctx [a]",
          "source": "src/Generics-RepLib-R1.html#rList1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics RepLib R1",
          "module": "Generics.RepLib.R1",
          "name": "rList1",
          "normalized": "a b-\u003ea[b]-\u003eR a[b]",
          "package": "RepLib",
          "partial": "List",
          "signature": "ctx a-\u003ectx[a]-\u003eR ctx[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-R1.html#v:rList1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.RepLib.R1",
          "name": "rTup2_1",
          "package": "RepLib",
          "signature": "ctx a -\u003e ctx b -\u003e R1 ctx (a, b)",
          "source": "src/Generics-RepLib-R1.html#rTup2_1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics RepLib R1",
          "module": "Generics.RepLib.R1",
          "name": "rTup2_1",
          "normalized": "a b-\u003ea c-\u003eR a(b,c)",
          "package": "RepLib",
          "partial": "Tup",
          "signature": "ctx a-\u003ectx b-\u003eR ctx(a,b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-R1.html#v:rTup2_1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.RepLib.R1",
          "name": "rep1",
          "package": "RepLib",
          "signature": "R1 ctx a",
          "source": "src/Generics-RepLib-R1.html#rep1",
          "type": "method"
        },
        "index": {
          "hierarchy": "Generics RepLib R1",
          "module": "Generics.RepLib.R1",
          "name": "rep1",
          "package": "RepLib",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-R1.html#v:rep1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTransform a parameterized rep to a vanilla rep\n\u003c/p\u003e",
          "module": "Generics.RepLib.R1",
          "name": "toR",
          "package": "RepLib",
          "signature": "R1 c a -\u003e R a",
          "source": "src/Generics-RepLib-R1.html#toR",
          "type": "function"
        },
        "index": {
          "description": "Transform parameterized rep to vanilla rep",
          "hierarchy": "Generics RepLib R1",
          "module": "Generics.RepLib.R1",
          "name": "toR",
          "normalized": "R a b-\u003eR b",
          "package": "RepLib",
          "signature": "R c a-\u003eR a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-R1.html#v:toR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAuxiliary operations to aid in the definition of type-indexed functions\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Generics.RepLib.RepAux",
          "name": "RepAux",
          "package": "RepLib",
          "source": "src/Generics-RepLib-RepAux.html",
          "type": "module"
        },
        "index": {
          "description": "Auxiliary operations to aid in the definition of type-indexed functions",
          "hierarchy": "Generics RepLib RepAux",
          "module": "Generics.RepLib.RepAux",
          "name": "RepAux",
          "package": "RepLib",
          "partial": "Rep Aux",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-RepAux.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSYB style monadic map type\n\u003c/p\u003e",
          "module": "Generics.RepLib.RepAux",
          "name": "MapM",
          "package": "RepLib",
          "source": "src/Generics-RepLib-RepAux.html#MapM",
          "type": "type"
        },
        "index": {
          "description": "SYB style monadic map type",
          "hierarchy": "Generics RepLib RepAux",
          "module": "Generics.RepLib.RepAux",
          "name": "MapM",
          "package": "RepLib",
          "partial": "Map",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-RepAux.html#t:MapM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.RepLib.RepAux",
          "name": "MapM1",
          "package": "RepLib",
          "source": "src/Generics-RepLib-RepAux.html#MapM1",
          "type": "type"
        },
        "index": {
          "hierarchy": "Generics RepLib RepAux",
          "module": "Generics.RepLib.RepAux",
          "name": "MapM1",
          "package": "RepLib",
          "partial": "Map",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-RepAux.html#t:MapM1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSYB style query type\n\u003c/p\u003e",
          "module": "Generics.RepLib.RepAux",
          "name": "Query",
          "package": "RepLib",
          "source": "src/Generics-RepLib-RepAux.html#Query",
          "type": "type"
        },
        "index": {
          "description": "SYB style query type",
          "hierarchy": "Generics RepLib RepAux",
          "module": "Generics.RepLib.RepAux",
          "name": "Query",
          "package": "RepLib",
          "partial": "Query",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-RepAux.html#t:Query"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.RepLib.RepAux",
          "name": "Query1",
          "package": "RepLib",
          "source": "src/Generics-RepLib-RepAux.html#Query1",
          "type": "type"
        },
        "index": {
          "hierarchy": "Generics RepLib RepAux",
          "module": "Generics.RepLib.RepAux",
          "name": "Query1",
          "package": "RepLib",
          "partial": "Query",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-RepAux.html#t:Query1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.RepLib.RepAux",
          "name": "Spine",
          "package": "RepLib",
          "source": "src/Generics-RepLib-RepAux.html#Spine",
          "type": "data"
        },
        "index": {
          "hierarchy": "Generics RepLib RepAux",
          "module": "Generics.RepLib.RepAux",
          "name": "Spine",
          "package": "RepLib",
          "partial": "Spine",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-RepAux.html#t:Spine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA SYB style traversal\n\u003c/p\u003e",
          "module": "Generics.RepLib.RepAux",
          "name": "Traversal",
          "package": "RepLib",
          "source": "src/Generics-RepLib-RepAux.html#Traversal",
          "type": "type"
        },
        "index": {
          "description": "SYB style traversal",
          "hierarchy": "Generics RepLib RepAux",
          "module": "Generics.RepLib.RepAux",
          "name": "Traversal",
          "package": "RepLib",
          "partial": "Traversal",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-RepAux.html#t:Traversal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.RepLib.RepAux",
          "name": "Traversal1",
          "package": "RepLib",
          "source": "src/Generics-RepLib-RepAux.html#Traversal1",
          "type": "type"
        },
        "index": {
          "hierarchy": "Generics RepLib RepAux",
          "module": "Generics.RepLib.RepAux",
          "name": "Traversal1",
          "package": "RepLib",
          "partial": "Traversal",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-RepAux.html#t:Traversal1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.RepLib.RepAux",
          "name": "Typed",
          "package": "RepLib",
          "source": "src/Generics-RepLib-RepAux.html#Typed",
          "type": "data"
        },
        "index": {
          "hierarchy": "Generics RepLib RepAux",
          "module": "Generics.RepLib.RepAux",
          "name": "Typed",
          "package": "RepLib",
          "partial": "Typed",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-RepAux.html#t:Typed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA datastructure to store the results of findCon\n\u003c/p\u003e",
          "module": "Generics.RepLib.RepAux",
          "name": "Val",
          "package": "RepLib",
          "source": "src/Generics-RepLib-RepAux.html#Val",
          "type": "data"
        },
        "index": {
          "description": "datastructure to store the results of findCon",
          "hierarchy": "Generics RepLib RepAux",
          "module": "Generics.RepLib.RepAux",
          "name": "Val",
          "package": "RepLib",
          "partial": "Val",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-RepAux.html#t:Val"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.RepLib.RepAux",
          "name": ":\u003c\u003e",
          "package": "RepLib",
          "signature": "Spine (a -\u003e b) -\u003e Typed a -\u003e Spine b",
          "source": "src/Generics-RepLib-RepAux.html#Spine",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics RepLib RepAux",
          "module": "Generics.RepLib.RepAux",
          "name": ":\u003c\u003e",
          "normalized": "Spine(a-\u003eb)-\u003eTyped a-\u003eSpine b",
          "package": "RepLib",
          "signature": "Spine(a-\u003eb)-\u003eTyped a-\u003eSpine b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-RepAux.html#v::-60--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.RepLib.RepAux",
          "name": ":::",
          "package": "RepLib",
          "signature": "(R a)",
          "source": "src/Generics-RepLib-RepAux.html#Typed",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics RepLib RepAux",
          "module": "Generics.RepLib.RepAux",
          "name": ":::",
          "package": "RepLib",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-RepAux.html#v::::"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.RepLib.RepAux",
          "name": "Constr",
          "package": "RepLib",
          "signature": "a -\u003e Spine a",
          "source": "src/Generics-RepLib-RepAux.html#Spine",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics RepLib RepAux",
          "module": "Generics.RepLib.RepAux",
          "name": "Constr",
          "normalized": "a-\u003eSpine a",
          "package": "RepLib",
          "partial": "Constr",
          "signature": "a-\u003eSpine a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-RepAux.html#v:Constr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.RepLib.RepAux",
          "name": "Val",
          "package": "RepLib",
          "signature": "Emb l a -\u003e MTup ctx l -\u003e l -\u003e Val ctx a",
          "source": "src/Generics-RepLib-RepAux.html#Val",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics RepLib RepAux",
          "module": "Generics.RepLib.RepAux",
          "name": "Val",
          "normalized": "Emb a b-\u003eMTup c a-\u003ea-\u003eVal c b",
          "package": "RepLib",
          "partial": "Val",
          "signature": "Emb l a-\u003eMTup ctx l-\u003el-\u003eVal ctx a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-RepAux.html#v:Val"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type-safe cast operation, implicit arguments\n\u003c/p\u003e",
          "module": "Generics.RepLib.RepAux",
          "name": "cast",
          "package": "RepLib",
          "signature": "a -\u003e Maybe b",
          "source": "src/Generics-RepLib-RepAux.html#cast",
          "type": "function"
        },
        "index": {
          "description": "The type-safe cast operation implicit arguments",
          "hierarchy": "Generics RepLib RepAux",
          "module": "Generics.RepLib.RepAux",
          "name": "cast",
          "normalized": "a-\u003eMaybe b",
          "package": "RepLib",
          "signature": "a-\u003eMaybe b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-RepAux.html#v:cast"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type-safe cast operation, explicit arguments\n\u003c/p\u003e",
          "module": "Generics.RepLib.RepAux",
          "name": "castR",
          "package": "RepLib",
          "signature": "R a -\u003e R b -\u003e a -\u003e Maybe b",
          "source": "src/Generics-RepLib-RepAux.html#castR",
          "type": "function"
        },
        "index": {
          "description": "The type-safe cast operation explicit arguments",
          "hierarchy": "Generics RepLib RepAux",
          "module": "Generics.RepLib.RepAux",
          "name": "castR",
          "normalized": "R a-\u003eR b-\u003ea-\u003eMaybe b",
          "package": "RepLib",
          "signature": "R a-\u003eR b-\u003ea-\u003eMaybe b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-RepAux.html#v:castR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHeterogeneous Ordering\n\u003c/p\u003e",
          "module": "Generics.RepLib.RepAux",
          "name": "compareR",
          "package": "RepLib",
          "signature": "R a -\u003e R b -\u003e Ordering",
          "source": "src/Generics-RepLib-RepAux.html#compareR",
          "type": "function"
        },
        "index": {
          "description": "Heterogeneous Ordering",
          "hierarchy": "Generics RepLib RepAux",
          "module": "Generics.RepLib.RepAux",
          "name": "compareR",
          "normalized": "R a-\u003eR b-\u003eOrdering",
          "package": "RepLib",
          "signature": "R a-\u003eR b-\u003eOrdering",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-RepAux.html#v:compareR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDetermine if two reps are for the same type\n\u003c/p\u003e",
          "module": "Generics.RepLib.RepAux",
          "name": "eqR",
          "package": "RepLib",
          "signature": "R a -\u003e R b -\u003e Bool",
          "source": "src/Generics-RepLib-RepAux.html#eqR",
          "type": "function"
        },
        "index": {
          "description": "Determine if two reps are for the same type",
          "hierarchy": "Generics RepLib RepAux",
          "module": "Generics.RepLib.RepAux",
          "name": "eqR",
          "normalized": "R a-\u003eR b-\u003eBool",
          "package": "RepLib",
          "signature": "R a-\u003eR b-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-RepAux.html#v:eqR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a list of constructor representations for a datatype,\n determine which constructor formed the datatype.\n\u003c/p\u003e",
          "module": "Generics.RepLib.RepAux",
          "name": "findCon",
          "package": "RepLib",
          "signature": "[Con ctx a] -\u003e a -\u003e Val ctx a",
          "source": "src/Generics-RepLib-RepAux.html#findCon",
          "type": "function"
        },
        "index": {
          "description": "Given list of constructor representations for datatype determine which constructor formed the datatype",
          "hierarchy": "Generics RepLib RepAux",
          "module": "Generics.RepLib.RepAux",
          "name": "findCon",
          "normalized": "[Con a b]-\u003eb-\u003eVal a b",
          "package": "RepLib",
          "partial": "Con",
          "signature": "[Con ctx a]-\u003ea-\u003eVal ctx a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-RepAux.html#v:findCon"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA fold left for heterogeneous lists\n\u003c/p\u003e",
          "module": "Generics.RepLib.RepAux",
          "name": "foldl_l",
          "package": "RepLib",
          "signature": "ctx a -\u003e b -\u003e a -\u003e b) -\u003e b -\u003e MTup ctx l -\u003e l -\u003e b",
          "source": "src/Generics-RepLib-RepAux.html#foldl_l",
          "type": "function"
        },
        "index": {
          "description": "fold left for heterogeneous lists",
          "hierarchy": "Generics RepLib RepAux",
          "module": "Generics.RepLib.RepAux",
          "name": "foldl_l",
          "normalized": "a b-\u003ec-\u003eb-\u003ec)-\u003ec-\u003eMTup a d-\u003ed-\u003ec",
          "package": "RepLib",
          "signature": "ctx a-\u003eb-\u003ea-\u003eb)-\u003eb-\u003eMTup ctx l-\u003el-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-RepAux.html#v:foldl_l"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA fold right operation for heterogeneous lists, that folds a function\n expecting a type type representation across each element of the list.\n\u003c/p\u003e",
          "module": "Generics.RepLib.RepAux",
          "name": "foldr_l",
          "package": "RepLib",
          "signature": "ctx a -\u003e a -\u003e b -\u003e b) -\u003e b -\u003e MTup ctx l -\u003e l -\u003e b",
          "source": "src/Generics-RepLib-RepAux.html#foldr_l",
          "type": "function"
        },
        "index": {
          "description": "fold right operation for heterogeneous lists that folds function expecting type type representation across each element of the list",
          "hierarchy": "Generics RepLib RepAux",
          "module": "Generics.RepLib.RepAux",
          "name": "foldr_l",
          "normalized": "a b-\u003eb-\u003ec-\u003ec)-\u003ec-\u003eMTup a d-\u003ed-\u003ec",
          "package": "RepLib",
          "signature": "ctx a-\u003ea-\u003eb-\u003eb)-\u003eb-\u003eMTup ctx l-\u003el-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-RepAux.html#v:foldr_l"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.RepLib.RepAux",
          "name": "fromSpine",
          "package": "RepLib",
          "signature": "Spine a -\u003e a",
          "source": "src/Generics-RepLib-RepAux.html#fromSpine",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics RepLib RepAux",
          "module": "Generics.RepLib.RepAux",
          "name": "fromSpine",
          "normalized": "Spine a-\u003ea",
          "package": "RepLib",
          "partial": "Spine",
          "signature": "Spine a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-RepAux.html#v:fromSpine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate a heterogeneous list from metadata\n\u003c/p\u003e",
          "module": "Generics.RepLib.RepAux",
          "name": "fromTup",
          "package": "RepLib",
          "signature": "ctx a -\u003e a) -\u003e MTup ctx l -\u003e l",
          "source": "src/Generics-RepLib-RepAux.html#fromTup",
          "type": "function"
        },
        "index": {
          "description": "Generate heterogeneous list from metadata",
          "hierarchy": "Generics RepLib RepAux",
          "module": "Generics.RepLib.RepAux",
          "name": "fromTup",
          "normalized": "a b-\u003eb)-\u003eMTup a c-\u003ec",
          "package": "RepLib",
          "partial": "Tup",
          "signature": "ctx a-\u003ea)-\u003eMTup ctx l-\u003el",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-RepAux.html#v:fromTup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate a heterogeneous list from metadata, in a monad\n\u003c/p\u003e",
          "module": "Generics.RepLib.RepAux",
          "name": "fromTupM",
          "package": "RepLib",
          "signature": "ctx a -\u003e m a) -\u003e MTup ctx l -\u003e m l",
          "source": "src/Generics-RepLib-RepAux.html#fromTupM",
          "type": "function"
        },
        "index": {
          "description": "Generate heterogeneous list from metadata in monad",
          "hierarchy": "Generics RepLib RepAux",
          "module": "Generics.RepLib.RepAux",
          "name": "fromTupM",
          "normalized": "a b-\u003ec b)-\u003eMTup a d-\u003ec d",
          "package": "RepLib",
          "partial": "Tup",
          "signature": "ctx a-\u003em a)-\u003eMTup ctx l-\u003em l",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-RepAux.html#v:fromTupM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLeibniz equality between types, implicit representations\n\u003c/p\u003e",
          "module": "Generics.RepLib.RepAux",
          "name": "gcast",
          "package": "RepLib",
          "signature": "c a -\u003e Maybe (c b)",
          "source": "src/Generics-RepLib-RepAux.html#gcast",
          "type": "function"
        },
        "index": {
          "description": "Leibniz equality between types implicit representations",
          "hierarchy": "Generics RepLib RepAux",
          "module": "Generics.RepLib.RepAux",
          "name": "gcast",
          "normalized": "a b-\u003eMaybe(a c)",
          "package": "RepLib",
          "signature": "c a-\u003eMaybe(c b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-RepAux.html#v:gcast"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLeibniz equality between types, explicit representations\n\u003c/p\u003e",
          "module": "Generics.RepLib.RepAux",
          "name": "gcastR",
          "package": "RepLib",
          "signature": "forall a b c.  R a -\u003e R b -\u003e c a -\u003e Maybe (c b)",
          "source": "src/Generics-RepLib-RepAux.html#gcastR",
          "type": "function"
        },
        "index": {
          "description": "Leibniz equality between types explicit representations",
          "hierarchy": "Generics RepLib RepAux",
          "module": "Generics.RepLib.RepAux",
          "name": "gcastR",
          "normalized": "a b c d R b-\u003eR c-\u003ee b-\u003eMaybe(e c)",
          "package": "RepLib",
          "signature": "forall a b c. R a-\u003eR b-\u003ec a-\u003eMaybe(c b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-RepAux.html#v:gcastR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.RepLib.RepAux",
          "name": "gmapM",
          "package": "RepLib",
          "signature": "MapM m -\u003e a -\u003e m a",
          "source": "src/Generics-RepLib-RepAux.html#gmapM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics RepLib RepAux",
          "module": "Generics.RepLib.RepAux",
          "name": "gmapM",
          "normalized": "MapM a-\u003eb-\u003ea b",
          "package": "RepLib",
          "signature": "MapM m-\u003ea-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-RepAux.html#v:gmapM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.RepLib.RepAux",
          "name": "gmapM1",
          "package": "RepLib",
          "signature": "MapM1 ctx m -\u003e a -\u003e m a",
          "source": "src/Generics-RepLib-RepAux.html#gmapM1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics RepLib RepAux",
          "module": "Generics.RepLib.RepAux",
          "name": "gmapM1",
          "normalized": "MapM a b-\u003ec-\u003eb c",
          "package": "RepLib",
          "signature": "MapM ctx m-\u003ea-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-RepAux.html#v:gmapM1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.RepLib.RepAux",
          "name": "gmapQ",
          "package": "RepLib",
          "signature": "Query r -\u003e a -\u003e [r]",
          "source": "src/Generics-RepLib-RepAux.html#gmapQ",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics RepLib RepAux",
          "module": "Generics.RepLib.RepAux",
          "name": "gmapQ",
          "normalized": "Query a-\u003eb-\u003e[a]",
          "package": "RepLib",
          "signature": "Query r-\u003ea-\u003e[r]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-RepAux.html#v:gmapQ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.RepLib.RepAux",
          "name": "gmapQ1",
          "package": "RepLib",
          "signature": "Query1 ctx r -\u003e a -\u003e [r]",
          "source": "src/Generics-RepLib-RepAux.html#gmapQ1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics RepLib RepAux",
          "module": "Generics.RepLib.RepAux",
          "name": "gmapQ1",
          "normalized": "Query a b-\u003ec-\u003e[b]",
          "package": "RepLib",
          "signature": "Query ctx r-\u003ea-\u003e[r]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-RepAux.html#v:gmapQ1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap a traversal across the kids of a data structure\n\u003c/p\u003e",
          "module": "Generics.RepLib.RepAux",
          "name": "gmapT",
          "package": "RepLib",
          "signature": "Traversal -\u003e a -\u003e a",
          "source": "src/Generics-RepLib-RepAux.html#gmapT",
          "type": "function"
        },
        "index": {
          "description": "Map traversal across the kids of data structure",
          "hierarchy": "Generics RepLib RepAux",
          "module": "Generics.RepLib.RepAux",
          "name": "gmapT",
          "normalized": "Traversal-\u003ea-\u003ea",
          "package": "RepLib",
          "signature": "Traversal-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-RepAux.html#v:gmapT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.RepLib.RepAux",
          "name": "gmapT1",
          "package": "RepLib",
          "signature": "Traversal1 ctx -\u003e a -\u003e a",
          "source": "src/Generics-RepLib-RepAux.html#gmapT1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics RepLib RepAux",
          "module": "Generics.RepLib.RepAux",
          "name": "gmapT1",
          "normalized": "Traversal a-\u003eb-\u003eb",
          "package": "RepLib",
          "signature": "Traversal ctx-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-RepAux.html#v:gmapT1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003emapM for heterogeneous lists\n\u003c/p\u003e",
          "module": "Generics.RepLib.RepAux",
          "name": "mapM_l",
          "package": "RepLib",
          "signature": "ctx a -\u003e a -\u003e m a) -\u003e MTup ctx l -\u003e l -\u003e m l",
          "source": "src/Generics-RepLib-RepAux.html#mapM_l",
          "type": "function"
        },
        "index": {
          "description": "mapM for heterogeneous lists",
          "hierarchy": "Generics RepLib RepAux",
          "module": "Generics.RepLib.RepAux",
          "name": "mapM_l",
          "normalized": "a b-\u003eb-\u003ec b)-\u003eMTup a d-\u003ed-\u003ec d",
          "package": "RepLib",
          "signature": "ctx a-\u003ea-\u003em a)-\u003eMTup ctx l-\u003el-\u003em l",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-RepAux.html#v:mapM_l"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTransform a heterogeneous list in to a standard list\n\u003c/p\u003e",
          "module": "Generics.RepLib.RepAux",
          "name": "mapQ_l",
          "package": "RepLib",
          "signature": "ctx a -\u003e a -\u003e r) -\u003e MTup ctx l -\u003e l -\u003e [r]",
          "source": "src/Generics-RepLib-RepAux.html#mapQ_l",
          "type": "function"
        },
        "index": {
          "description": "Transform heterogeneous list in to standard list",
          "hierarchy": "Generics RepLib RepAux",
          "module": "Generics.RepLib.RepAux",
          "name": "mapQ_l",
          "normalized": "a b-\u003eb-\u003ec)-\u003eMTup a d-\u003ed-\u003e[c]",
          "package": "RepLib",
          "signature": "ctx a-\u003ea-\u003er)-\u003eMTup ctx l-\u003el-\u003e[r]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-RepAux.html#v:mapQ_l"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA map for heterogeneous lists\n\u003c/p\u003e",
          "module": "Generics.RepLib.RepAux",
          "name": "map_l",
          "package": "RepLib",
          "signature": "ctx a -\u003e a -\u003e a) -\u003e MTup ctx l -\u003e l -\u003e l",
          "source": "src/Generics-RepLib-RepAux.html#map_l",
          "type": "function"
        },
        "index": {
          "description": "map for heterogeneous lists",
          "hierarchy": "Generics RepLib RepAux",
          "module": "Generics.RepLib.RepAux",
          "name": "map_l",
          "normalized": "a b-\u003eb-\u003eb)-\u003eMTup a c-\u003ec-\u003ec",
          "package": "RepLib",
          "signature": "ctx a-\u003ea-\u003ea)-\u003eMTup ctx l-\u003el-\u003el",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-RepAux.html#v:map_l"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate a normal lists from metadata\n\u003c/p\u003e",
          "module": "Generics.RepLib.RepAux",
          "name": "toList",
          "package": "RepLib",
          "signature": "ctx a -\u003e b) -\u003e MTup ctx l -\u003e [b]",
          "source": "src/Generics-RepLib-RepAux.html#toList",
          "type": "function"
        },
        "index": {
          "description": "Generate normal lists from metadata",
          "hierarchy": "Generics RepLib RepAux",
          "module": "Generics.RepLib.RepAux",
          "name": "toList",
          "normalized": "a b-\u003ec)-\u003eMTup a d-\u003e[c]",
          "package": "RepLib",
          "partial": "List",
          "signature": "ctx a-\u003eb)-\u003eMTup ctx l-\u003e[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-RepAux.html#v:toList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.RepLib.RepAux",
          "name": "toSpine",
          "package": "RepLib",
          "signature": "a -\u003e Spine a",
          "source": "src/Generics-RepLib-RepAux.html#toSpine",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics RepLib RepAux",
          "module": "Generics.RepLib.RepAux",
          "name": "toSpine",
          "normalized": "a-\u003eSpine a",
          "package": "RepLib",
          "partial": "Spine",
          "signature": "a-\u003eSpine a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-RepAux.html#v:toSpine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.RepLib.SYB.Aliases",
          "name": "Aliases",
          "package": "RepLib",
          "source": "src/Generics-RepLib-SYB-Aliases.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Generics RepLib SYB Aliases",
          "module": "Generics.RepLib.SYB.Aliases",
          "name": "Aliases",
          "package": "RepLib",
          "partial": "Aliases",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-SYB-Aliases.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe general scheme underlying generic functions\n   assumed by gfoldl; there are isomorphisms such as\n   GenericT = Generic T.\n\u003c/p\u003e",
          "module": "Generics.RepLib.SYB.Aliases",
          "name": "Generic",
          "package": "RepLib",
          "source": "src/Generics-RepLib-SYB-Aliases.html#Generic",
          "type": "type"
        },
        "index": {
          "description": "The general scheme underlying generic functions assumed by gfoldl there are isomorphisms such as GenericT Generic",
          "hierarchy": "Generics RepLib SYB Aliases",
          "module": "Generics.RepLib.SYB.Aliases",
          "name": "Generic",
          "package": "RepLib",
          "partial": "Generic",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-SYB-Aliases.html#t:Generic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrapped generic functions;\n   recall: [Generic c] would be legal but [Generic' c] not.\n\u003c/p\u003e",
          "module": "Generics.RepLib.SYB.Aliases",
          "name": "Generic'",
          "package": "RepLib",
          "source": "src/Generics-RepLib-SYB-Aliases.html#Generic%27",
          "type": "data"
        },
        "index": {
          "description": "Wrapped generic functions recall Generic would be legal but Generic not",
          "hierarchy": "Generics RepLib SYB Aliases",
          "module": "Generics.RepLib.SYB.Aliases",
          "name": "Generic'",
          "package": "RepLib",
          "partial": "Generic'",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-SYB-Aliases.html#t:Generic-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneric builders\n   i.e., produce an \"a\".\n\u003c/p\u003e",
          "module": "Generics.RepLib.SYB.Aliases",
          "name": "GenericB",
          "package": "RepLib",
          "source": "src/Generics-RepLib-SYB-Aliases.html#GenericB",
          "type": "type"
        },
        "index": {
          "description": "Generic builders i.e produce an",
          "hierarchy": "Generics RepLib SYB Aliases",
          "module": "Generics.RepLib.SYB.Aliases",
          "name": "GenericB",
          "package": "RepLib",
          "partial": "Generic",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-SYB-Aliases.html#t:GenericB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneric monadic transformations,\n   i.e., take an \"a\" and compute an \"a\"\n\u003c/p\u003e",
          "module": "Generics.RepLib.SYB.Aliases",
          "name": "GenericM",
          "package": "RepLib",
          "source": "src/Generics-RepLib-SYB-Aliases.html#GenericM",
          "type": "type"
        },
        "index": {
          "description": "Generic monadic transformations i.e take an and compute an",
          "hierarchy": "Generics RepLib SYB Aliases",
          "module": "Generics.RepLib.SYB.Aliases",
          "name": "GenericM",
          "package": "RepLib",
          "partial": "Generic",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-SYB-Aliases.html#t:GenericM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.RepLib.SYB.Aliases",
          "name": "GenericM'",
          "package": "RepLib",
          "source": "src/Generics-RepLib-SYB-Aliases.html#GenericM%27",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Generics RepLib SYB Aliases",
          "module": "Generics.RepLib.SYB.Aliases",
          "name": "GenericM'",
          "package": "RepLib",
          "partial": "Generic M'",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-SYB-Aliases.html#t:GenericM-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneric queries of type \"r\",\n   i.e., take any \"a\" and return an \"r\"\n\u003c/p\u003e",
          "module": "Generics.RepLib.SYB.Aliases",
          "name": "GenericQ",
          "package": "RepLib",
          "source": "src/Generics-RepLib-SYB-Aliases.html#GenericQ",
          "type": "type"
        },
        "index": {
          "description": "Generic queries of type i.e take any and return an",
          "hierarchy": "Generics RepLib SYB Aliases",
          "module": "Generics.RepLib.SYB.Aliases",
          "name": "GenericQ",
          "package": "RepLib",
          "partial": "Generic",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-SYB-Aliases.html#t:GenericQ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.RepLib.SYB.Aliases",
          "name": "GenericQ'",
          "package": "RepLib",
          "source": "src/Generics-RepLib-SYB-Aliases.html#GenericQ%27",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Generics RepLib SYB Aliases",
          "module": "Generics.RepLib.SYB.Aliases",
          "name": "GenericQ'",
          "package": "RepLib",
          "partial": "Generic Q'",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-SYB-Aliases.html#t:GenericQ-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneric readers, say monadic builders,\n   i.e., produce an \"a\" with the help of a monad \"m\".\n\u003c/p\u003e",
          "module": "Generics.RepLib.SYB.Aliases",
          "name": "GenericR",
          "package": "RepLib",
          "source": "src/Generics-RepLib-SYB-Aliases.html#GenericR",
          "type": "type"
        },
        "index": {
          "description": "Generic readers say monadic builders i.e produce an with the help of monad",
          "hierarchy": "Generics RepLib SYB Aliases",
          "module": "Generics.RepLib.SYB.Aliases",
          "name": "GenericR",
          "package": "RepLib",
          "partial": "Generic",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-SYB-Aliases.html#t:GenericR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneric transformations,\n   i.e., take an \"a\" and return an \"a\"\n\u003c/p\u003e",
          "module": "Generics.RepLib.SYB.Aliases",
          "name": "GenericT",
          "package": "RepLib",
          "source": "src/Generics-RepLib-SYB-Aliases.html#GenericT",
          "type": "type"
        },
        "index": {
          "description": "Generic transformations i.e take an and return an",
          "hierarchy": "Generics RepLib SYB Aliases",
          "module": "Generics.RepLib.SYB.Aliases",
          "name": "GenericT",
          "package": "RepLib",
          "partial": "Generic",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-SYB-Aliases.html#t:GenericT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOther first-class polymorphic wrappers\n\u003c/p\u003e",
          "module": "Generics.RepLib.SYB.Aliases",
          "name": "GenericT'",
          "package": "RepLib",
          "source": "src/Generics-RepLib-SYB-Aliases.html#GenericT%27",
          "type": "newtype"
        },
        "index": {
          "description": "Other first-class polymorphic wrappers",
          "hierarchy": "Generics RepLib SYB Aliases",
          "module": "Generics.RepLib.SYB.Aliases",
          "name": "GenericT'",
          "package": "RepLib",
          "partial": "Generic T'",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-SYB-Aliases.html#t:GenericT-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.RepLib.SYB.Aliases",
          "name": "GM",
          "package": "RepLib",
          "signature": "GM",
          "source": "src/Generics-RepLib-SYB-Aliases.html#GenericM%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics RepLib SYB Aliases",
          "module": "Generics.RepLib.SYB.Aliases",
          "name": "GM",
          "package": "RepLib",
          "partial": "GM",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-SYB-Aliases.html#v:GM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.RepLib.SYB.Aliases",
          "name": "GQ",
          "package": "RepLib",
          "signature": "GQ",
          "source": "src/Generics-RepLib-SYB-Aliases.html#GenericQ%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics RepLib SYB Aliases",
          "module": "Generics.RepLib.SYB.Aliases",
          "name": "GQ",
          "package": "RepLib",
          "partial": "GQ",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-SYB-Aliases.html#v:GQ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.RepLib.SYB.Aliases",
          "name": "GT",
          "package": "RepLib",
          "signature": "GT",
          "source": "src/Generics-RepLib-SYB-Aliases.html#GenericT%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics RepLib SYB Aliases",
          "module": "Generics.RepLib.SYB.Aliases",
          "name": "GT",
          "package": "RepLib",
          "partial": "GT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-SYB-Aliases.html#v:GT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.RepLib.SYB.Aliases",
          "name": "Generic'",
          "package": "RepLib",
          "signature": "Generic'",
          "source": "src/Generics-RepLib-SYB-Aliases.html#Generic%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics RepLib SYB Aliases",
          "module": "Generics.RepLib.SYB.Aliases",
          "name": "Generic'",
          "package": "RepLib",
          "partial": "Generic'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-SYB-Aliases.html#v:Generic-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChoice for monadic transformations\n\u003c/p\u003e",
          "module": "Generics.RepLib.SYB.Aliases",
          "name": "choiceMp",
          "package": "RepLib",
          "signature": "GenericM m -\u003e GenericM m -\u003e GenericM m",
          "source": "src/Generics-RepLib-SYB-Aliases.html#choiceMp",
          "type": "function"
        },
        "index": {
          "description": "Choice for monadic transformations",
          "hierarchy": "Generics RepLib SYB Aliases",
          "module": "Generics.RepLib.SYB.Aliases",
          "name": "choiceMp",
          "normalized": "GenericM a-\u003eGenericM a-\u003eGenericM a",
          "package": "RepLib",
          "partial": "Mp",
          "signature": "GenericM m-\u003eGenericM m-\u003eGenericM m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-SYB-Aliases.html#v:choiceMp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChoice for monadic queries\n\u003c/p\u003e",
          "module": "Generics.RepLib.SYB.Aliases",
          "name": "choiceQ",
          "package": "RepLib",
          "signature": "GenericQ (m r) -\u003e GenericQ (m r) -\u003e GenericQ (m r)",
          "source": "src/Generics-RepLib-SYB-Aliases.html#choiceQ",
          "type": "function"
        },
        "index": {
          "description": "Choice for monadic queries",
          "hierarchy": "Generics RepLib SYB Aliases",
          "module": "Generics.RepLib.SYB.Aliases",
          "name": "choiceQ",
          "normalized": "GenericQ(a b)-\u003eGenericQ(a b)-\u003eGenericQ(a b)",
          "package": "RepLib",
          "signature": "GenericQ(m r)-\u003eGenericQ(m r)-\u003eGenericQ(m r)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-SYB-Aliases.html#v:choiceQ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFlexible type extension\n\u003c/p\u003e",
          "module": "Generics.RepLib.SYB.Aliases",
          "name": "ext0",
          "package": "RepLib",
          "signature": "c a -\u003e c b -\u003e c a",
          "source": "src/Generics-RepLib-SYB-Aliases.html#ext0",
          "type": "function"
        },
        "index": {
          "description": "Flexible type extension",
          "hierarchy": "Generics RepLib SYB Aliases",
          "module": "Generics.RepLib.SYB.Aliases",
          "name": "ext0",
          "normalized": "a b-\u003ea c-\u003ea b",
          "package": "RepLib",
          "signature": "c a-\u003ec b-\u003ec a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-SYB-Aliases.html#v:ext0"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtend a generic builder\n\u003c/p\u003e",
          "module": "Generics.RepLib.SYB.Aliases",
          "name": "extB",
          "package": "RepLib",
          "signature": "a -\u003e b -\u003e a",
          "source": "src/Generics-RepLib-SYB-Aliases.html#extB",
          "type": "function"
        },
        "index": {
          "description": "Extend generic builder",
          "hierarchy": "Generics RepLib SYB Aliases",
          "module": "Generics.RepLib.SYB.Aliases",
          "name": "extB",
          "normalized": "a-\u003eb-\u003ea",
          "package": "RepLib",
          "signature": "a-\u003eb-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-SYB-Aliases.html#v:extB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtend a generic monadic transformation by a type-specific case\n\u003c/p\u003e",
          "module": "Generics.RepLib.SYB.Aliases",
          "name": "extM",
          "package": "RepLib",
          "signature": "(a -\u003e m a) -\u003e (b -\u003e m b) -\u003e a -\u003e m a",
          "source": "src/Generics-RepLib-SYB-Aliases.html#extM",
          "type": "function"
        },
        "index": {
          "description": "Extend generic monadic transformation by type-specific case",
          "hierarchy": "Generics RepLib SYB Aliases",
          "module": "Generics.RepLib.SYB.Aliases",
          "name": "extM",
          "normalized": "(a-\u003eb a)-\u003e(c-\u003eb c)-\u003ea-\u003eb a",
          "package": "RepLib",
          "signature": "(a-\u003em a)-\u003e(b-\u003em b)-\u003ea-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-SYB-Aliases.html#v:extM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtend a generic MonadPlus transformation by a type-specific case\n\u003c/p\u003e",
          "module": "Generics.RepLib.SYB.Aliases",
          "name": "extMp",
          "package": "RepLib",
          "signature": "(a -\u003e m a) -\u003e (b -\u003e m b) -\u003e a -\u003e m a",
          "source": "src/Generics-RepLib-SYB-Aliases.html#extMp",
          "type": "function"
        },
        "index": {
          "description": "Extend generic MonadPlus transformation by type-specific case",
          "hierarchy": "Generics RepLib SYB Aliases",
          "module": "Generics.RepLib.SYB.Aliases",
          "name": "extMp",
          "normalized": "(a-\u003eb a)-\u003e(c-\u003eb c)-\u003ea-\u003eb a",
          "package": "RepLib",
          "partial": "Mp",
          "signature": "(a-\u003em a)-\u003e(b-\u003em b)-\u003ea-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-SYB-Aliases.html#v:extMp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtend a generic query by a type-specific case\n\u003c/p\u003e",
          "module": "Generics.RepLib.SYB.Aliases",
          "name": "extQ",
          "package": "RepLib",
          "signature": "(a -\u003e q) -\u003e (b -\u003e q) -\u003e a -\u003e q",
          "source": "src/Generics-RepLib-SYB-Aliases.html#extQ",
          "type": "function"
        },
        "index": {
          "description": "Extend generic query by type-specific case",
          "hierarchy": "Generics RepLib SYB Aliases",
          "module": "Generics.RepLib.SYB.Aliases",
          "name": "extQ",
          "normalized": "(a-\u003eb)-\u003e(c-\u003eb)-\u003ea-\u003eb",
          "package": "RepLib",
          "signature": "(a-\u003eq)-\u003e(b-\u003eq)-\u003ea-\u003eq",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-SYB-Aliases.html#v:extQ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtend a generic reader\n\u003c/p\u003e",
          "module": "Generics.RepLib.SYB.Aliases",
          "name": "extR",
          "package": "RepLib",
          "signature": "m a -\u003e m b -\u003e m a",
          "source": "src/Generics-RepLib-SYB-Aliases.html#extR",
          "type": "function"
        },
        "index": {
          "description": "Extend generic reader",
          "hierarchy": "Generics RepLib SYB Aliases",
          "module": "Generics.RepLib.SYB.Aliases",
          "name": "extR",
          "normalized": "a b-\u003ea c-\u003ea b",
          "package": "RepLib",
          "signature": "m a-\u003em b-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-SYB-Aliases.html#v:extR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtend a generic transformation by a type-specific case\n\u003c/p\u003e",
          "module": "Generics.RepLib.SYB.Aliases",
          "name": "extT",
          "package": "RepLib",
          "signature": "(a -\u003e a) -\u003e (b -\u003e b) -\u003e a -\u003e a",
          "source": "src/Generics-RepLib-SYB-Aliases.html#extT",
          "type": "function"
        },
        "index": {
          "description": "Extend generic transformation by type-specific case",
          "hierarchy": "Generics RepLib SYB Aliases",
          "module": "Generics.RepLib.SYB.Aliases",
          "name": "extT",
          "normalized": "(a-\u003ea)-\u003e(b-\u003eb)-\u003ea-\u003ea",
          "package": "RepLib",
          "signature": "(a-\u003ea)-\u003e(b-\u003eb)-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-SYB-Aliases.html#v:extT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake a generic monadic transformation;\n   start from a type-specific case;\n   resort to return otherwise\n\u003c/p\u003e",
          "module": "Generics.RepLib.SYB.Aliases",
          "name": "mkM",
          "package": "RepLib",
          "signature": "(b -\u003e m b) -\u003e a -\u003e m a",
          "source": "src/Generics-RepLib-SYB-Aliases.html#mkM",
          "type": "function"
        },
        "index": {
          "description": "Make generic monadic transformation start from type-specific case resort to return otherwise",
          "hierarchy": "Generics RepLib SYB Aliases",
          "module": "Generics.RepLib.SYB.Aliases",
          "name": "mkM",
          "normalized": "(a-\u003eb a)-\u003ec-\u003eb c",
          "package": "RepLib",
          "signature": "(b-\u003em b)-\u003ea-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-SYB-Aliases.html#v:mkM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake a generic monadic transformation for MonadPlus;\n   use \"const mzero\" (i.e., failure) instead of return as default.\n\u003c/p\u003e",
          "module": "Generics.RepLib.SYB.Aliases",
          "name": "mkMp",
          "package": "RepLib",
          "signature": "(b -\u003e m b) -\u003e a -\u003e m a",
          "source": "src/Generics-RepLib-SYB-Aliases.html#mkMp",
          "type": "function"
        },
        "index": {
          "description": "Make generic monadic transformation for MonadPlus use const mzero i.e failure instead of return as default",
          "hierarchy": "Generics RepLib SYB Aliases",
          "module": "Generics.RepLib.SYB.Aliases",
          "name": "mkMp",
          "normalized": "(a-\u003eb a)-\u003ec-\u003eb c",
          "package": "RepLib",
          "partial": "Mp",
          "signature": "(b-\u003em b)-\u003ea-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-SYB-Aliases.html#v:mkMp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake a generic query;\n   start from a type-specific case;\n   return a constant otherwise\n\u003c/p\u003e",
          "module": "Generics.RepLib.SYB.Aliases",
          "name": "mkQ",
          "package": "RepLib",
          "signature": "r -\u003e (b -\u003e r) -\u003e a -\u003e r",
          "source": "src/Generics-RepLib-SYB-Aliases.html#mkQ",
          "type": "function"
        },
        "index": {
          "description": "Make generic query start from type-specific case return constant otherwise",
          "hierarchy": "Generics RepLib SYB Aliases",
          "module": "Generics.RepLib.SYB.Aliases",
          "name": "mkQ",
          "normalized": "a-\u003e(b-\u003ea)-\u003ec-\u003ea",
          "package": "RepLib",
          "signature": "r-\u003e(b-\u003er)-\u003ea-\u003er",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-SYB-Aliases.html#v:mkQ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake a generic builder;\n   start from a type-specific ase;\n   resort to no build (i.e., mzero) otherwise\n\u003c/p\u003e",
          "module": "Generics.RepLib.SYB.Aliases",
          "name": "mkR",
          "package": "RepLib",
          "signature": "m b -\u003e m a",
          "source": "src/Generics-RepLib-SYB-Aliases.html#mkR",
          "type": "function"
        },
        "index": {
          "description": "Make generic builder start from type-specific ase resort to no build i.e mzero otherwise",
          "hierarchy": "Generics RepLib SYB Aliases",
          "module": "Generics.RepLib.SYB.Aliases",
          "name": "mkR",
          "normalized": "a b-\u003ea c",
          "package": "RepLib",
          "signature": "m b-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-SYB-Aliases.html#v:mkR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake a generic transformation;\n   start from a type-specific case;\n   preserve the term otherwise\n\u003c/p\u003e",
          "module": "Generics.RepLib.SYB.Aliases",
          "name": "mkT",
          "package": "RepLib",
          "signature": "(b -\u003e b) -\u003e a -\u003e a",
          "source": "src/Generics-RepLib-SYB-Aliases.html#mkT",
          "type": "function"
        },
        "index": {
          "description": "Make generic transformation start from type-specific case preserve the term otherwise",
          "hierarchy": "Generics RepLib SYB Aliases",
          "module": "Generics.RepLib.SYB.Aliases",
          "name": "mkT",
          "normalized": "(a-\u003ea)-\u003eb-\u003eb",
          "package": "RepLib",
          "signature": "(b-\u003eb)-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-SYB-Aliases.html#v:mkT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLeft-biased choice on maybies\n\u003c/p\u003e",
          "module": "Generics.RepLib.SYB.Aliases",
          "name": "orElse",
          "package": "RepLib",
          "signature": "Maybe a -\u003e Maybe a -\u003e Maybe a",
          "source": "src/Generics-RepLib-SYB-Aliases.html#orElse",
          "type": "function"
        },
        "index": {
          "description": "Left-biased choice on maybies",
          "hierarchy": "Generics RepLib SYB Aliases",
          "module": "Generics.RepLib.SYB.Aliases",
          "name": "orElse",
          "normalized": "Maybe a-\u003eMaybe a-\u003eMaybe a",
          "package": "RepLib",
          "partial": "Else",
          "signature": "Maybe a-\u003eMaybe a-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-SYB-Aliases.html#v:orElse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRecover from the failure of monadic transformation by identity\n\u003c/p\u003e",
          "module": "Generics.RepLib.SYB.Aliases",
          "name": "recoverMp",
          "package": "RepLib",
          "signature": "GenericM m -\u003e GenericM m",
          "source": "src/Generics-RepLib-SYB-Aliases.html#recoverMp",
          "type": "function"
        },
        "index": {
          "description": "Recover from the failure of monadic transformation by identity",
          "hierarchy": "Generics RepLib SYB Aliases",
          "module": "Generics.RepLib.SYB.Aliases",
          "name": "recoverMp",
          "normalized": "GenericM a-\u003eGenericM a",
          "package": "RepLib",
          "partial": "Mp",
          "signature": "GenericM m-\u003eGenericM m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-SYB-Aliases.html#v:recoverMp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRecover from the failure of monadic query by a constant\n\u003c/p\u003e",
          "module": "Generics.RepLib.SYB.Aliases",
          "name": "recoverQ",
          "package": "RepLib",
          "signature": "r -\u003e GenericQ (m r) -\u003e GenericQ (m r)",
          "source": "src/Generics-RepLib-SYB-Aliases.html#recoverQ",
          "type": "function"
        },
        "index": {
          "description": "Recover from the failure of monadic query by constant",
          "hierarchy": "Generics RepLib SYB Aliases",
          "module": "Generics.RepLib.SYB.Aliases",
          "name": "recoverQ",
          "normalized": "a-\u003eGenericQ(b a)-\u003eGenericQ(b a)",
          "package": "RepLib",
          "signature": "r-\u003eGenericQ(m r)-\u003eGenericQ(m r)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-SYB-Aliases.html#v:recoverQ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.RepLib.SYB.Aliases",
          "name": "unGM",
          "package": "RepLib",
          "signature": "a -\u003e m a",
          "source": "src/Generics-RepLib-SYB-Aliases.html#GenericM%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics RepLib SYB Aliases",
          "module": "Generics.RepLib.SYB.Aliases",
          "name": "unGM",
          "normalized": "a-\u003eb a",
          "package": "RepLib",
          "partial": "GM",
          "signature": "a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-SYB-Aliases.html#v:unGM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.RepLib.SYB.Aliases",
          "name": "unGQ",
          "package": "RepLib",
          "signature": "GenericQ r",
          "source": "src/Generics-RepLib-SYB-Aliases.html#GenericQ%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics RepLib SYB Aliases",
          "module": "Generics.RepLib.SYB.Aliases",
          "name": "unGQ",
          "package": "RepLib",
          "partial": "GQ",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-SYB-Aliases.html#v:unGQ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.RepLib.SYB.Aliases",
          "name": "unGT",
          "package": "RepLib",
          "signature": "a -\u003e a",
          "source": "src/Generics-RepLib-SYB-Aliases.html#GenericT%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics RepLib SYB Aliases",
          "module": "Generics.RepLib.SYB.Aliases",
          "name": "unGT",
          "normalized": "a-\u003ea",
          "package": "RepLib",
          "partial": "GT",
          "signature": "a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-SYB-Aliases.html#v:unGT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.RepLib.SYB.Aliases",
          "name": "unGeneric'",
          "package": "RepLib",
          "signature": "Generic c",
          "source": "src/Generics-RepLib-SYB-Aliases.html#Generic%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics RepLib SYB Aliases",
          "module": "Generics.RepLib.SYB.Aliases",
          "name": "unGeneric'",
          "package": "RepLib",
          "partial": "Generic'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-SYB-Aliases.html#v:unGeneric-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDerived from Data.Generics.Schemes\n Only modification: \u003ca\u003eData\u003c/a\u003e class becomes \u003ca\u003eRep\u003c/a\u003e class\n   otherwise import our version of the libraries\n For now,  missing \u003ca\u003esomewhere\u003c/a\u003e (lacking mapMp)\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Generics.RepLib.SYB.Schemes",
          "name": "Schemes",
          "package": "RepLib",
          "source": "src/Generics-RepLib-SYB-Schemes.html",
          "type": "module"
        },
        "index": {
          "description": "Derived from Data.Generics.Schemes Only modification Data class becomes Rep class otherwise import our version of the libraries For now missing somewhere lacking mapMp",
          "hierarchy": "Generics RepLib SYB Schemes",
          "module": "Generics.RepLib.SYB.Schemes",
          "name": "Schemes",
          "package": "RepLib",
          "partial": "Schemes",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-SYB-Schemes.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a monadic transformation at least somewhere\n somewhere :: MonadPlus m =\u003e GenericM m -\u003e GenericM m\n\u003c/p\u003e\u003cp\u003eSummarise all nodes in top-down, left-to-right order\n\u003c/p\u003e",
          "module": "Generics.RepLib.SYB.Schemes",
          "name": "everything",
          "package": "RepLib",
          "signature": "(r -\u003e r -\u003e r) -\u003e GenericQ r -\u003e GenericQ r",
          "source": "src/Generics-RepLib-SYB-Schemes.html#everything",
          "type": "function"
        },
        "index": {
          "description": "Apply monadic transformation at least somewhere somewhere MonadPlus GenericM GenericM Summarise all nodes in top-down left-to-right order",
          "hierarchy": "Generics RepLib SYB Schemes",
          "module": "Generics.RepLib.SYB.Schemes",
          "name": "everything",
          "normalized": "(a-\u003ea-\u003ea)-\u003eGenericQ a-\u003eGenericQ a",
          "package": "RepLib",
          "signature": "(r-\u003er-\u003er)-\u003eGenericQ r-\u003eGenericQ r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-SYB-Schemes.html#v:everything"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a transformation everywhere in bottom-up manner\n\u003c/p\u003e",
          "module": "Generics.RepLib.SYB.Schemes",
          "name": "everywhere",
          "package": "RepLib",
          "signature": "a -\u003e a",
          "source": "src/Generics-RepLib-SYB-Schemes.html#everywhere",
          "type": "function"
        },
        "index": {
          "description": "Apply transformation everywhere in bottom-up manner",
          "hierarchy": "Generics RepLib SYB Schemes",
          "module": "Generics.RepLib.SYB.Schemes",
          "name": "everywhere",
          "normalized": "a-\u003ea",
          "package": "RepLib",
          "signature": "a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-SYB-Schemes.html#v:everywhere"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a transformation everywhere in top-down manner\n\u003c/p\u003e",
          "module": "Generics.RepLib.SYB.Schemes",
          "name": "everywhere'",
          "package": "RepLib",
          "signature": "a -\u003e a",
          "source": "src/Generics-RepLib-SYB-Schemes.html#everywhere%27",
          "type": "function"
        },
        "index": {
          "description": "Apply transformation everywhere in top-down manner",
          "hierarchy": "Generics RepLib SYB Schemes",
          "module": "Generics.RepLib.SYB.Schemes",
          "name": "everywhere'",
          "normalized": "a-\u003ea",
          "package": "RepLib",
          "signature": "a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-SYB-Schemes.html#v:everywhere-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVariation on everywhere with an extra stop condition\n\u003c/p\u003e",
          "module": "Generics.RepLib.SYB.Schemes",
          "name": "everywhereBut",
          "package": "RepLib",
          "signature": "GenericQ Bool -\u003e GenericT -\u003e GenericT",
          "source": "src/Generics-RepLib-SYB-Schemes.html#everywhereBut",
          "type": "function"
        },
        "index": {
          "description": "Variation on everywhere with an extra stop condition",
          "hierarchy": "Generics RepLib SYB Schemes",
          "module": "Generics.RepLib.SYB.Schemes",
          "name": "everywhereBut",
          "normalized": "GenericQ Bool-\u003eGenericT-\u003eGenericT",
          "package": "RepLib",
          "partial": "But",
          "signature": "GenericQ Bool-\u003eGenericT-\u003eGenericT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-SYB-Schemes.html#v:everywhereBut"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMonadic variation on everywhere\n\u003c/p\u003e",
          "module": "Generics.RepLib.SYB.Schemes",
          "name": "everywhereM",
          "package": "RepLib",
          "signature": "GenericM m -\u003e GenericM m",
          "source": "src/Generics-RepLib-SYB-Schemes.html#everywhereM",
          "type": "function"
        },
        "index": {
          "description": "Monadic variation on everywhere",
          "hierarchy": "Generics RepLib SYB Schemes",
          "module": "Generics.RepLib.SYB.Schemes",
          "name": "everywhereM",
          "normalized": "GenericM a-\u003eGenericM a",
          "package": "RepLib",
          "signature": "GenericM m-\u003eGenericM m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-SYB-Schemes.html#v:everywhereM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDetermine the number of all suitable nodes in a given term\n\u003c/p\u003e",
          "module": "Generics.RepLib.SYB.Schemes",
          "name": "gcount",
          "package": "RepLib",
          "signature": "GenericQ Bool -\u003e GenericQ Int",
          "source": "src/Generics-RepLib-SYB-Schemes.html#gcount",
          "type": "function"
        },
        "index": {
          "description": "Determine the number of all suitable nodes in given term",
          "hierarchy": "Generics RepLib SYB Schemes",
          "module": "Generics.RepLib.SYB.Schemes",
          "name": "gcount",
          "normalized": "GenericQ Bool-\u003eGenericQ Int",
          "package": "RepLib",
          "signature": "GenericQ Bool-\u003eGenericQ Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-SYB-Schemes.html#v:gcount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDetermine depth of the given term\n\u003c/p\u003e",
          "module": "Generics.RepLib.SYB.Schemes",
          "name": "gdepth",
          "package": "RepLib",
          "signature": "GenericQ Int",
          "source": "src/Generics-RepLib-SYB-Schemes.html#gdepth",
          "type": "function"
        },
        "index": {
          "description": "Determine depth of the given term",
          "hierarchy": "Generics RepLib SYB Schemes",
          "module": "Generics.RepLib.SYB.Schemes",
          "name": "gdepth",
          "package": "RepLib",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-SYB-Schemes.html#v:gdepth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind (unambiguously) an immediate subterm of a given type\n\u003c/p\u003e",
          "module": "Generics.RepLib.SYB.Schemes",
          "name": "gfindtype",
          "package": "RepLib",
          "signature": "x -\u003e Maybe y",
          "source": "src/Generics-RepLib-SYB-Schemes.html#gfindtype",
          "type": "function"
        },
        "index": {
          "description": "Find unambiguously an immediate subterm of given type",
          "hierarchy": "Generics RepLib SYB Schemes",
          "module": "Generics.RepLib.SYB.Schemes",
          "name": "gfindtype",
          "normalized": "a-\u003eMaybe b",
          "package": "RepLib",
          "signature": "x-\u003eMaybe y",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-SYB-Schemes.html#v:gfindtype"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCount the number of immediate subterms of the given term\n\u003c/p\u003e",
          "module": "Generics.RepLib.SYB.Schemes",
          "name": "glength",
          "package": "RepLib",
          "signature": "GenericQ Int",
          "source": "src/Generics-RepLib-SYB-Schemes.html#glength",
          "type": "function"
        },
        "index": {
          "description": "Count the number of immediate subterms of the given term",
          "hierarchy": "Generics RepLib SYB Schemes",
          "module": "Generics.RepLib.SYB.Schemes",
          "name": "glength",
          "package": "RepLib",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-SYB-Schemes.html#v:glength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDetermine the number of all nodes in a given term\n\u003c/p\u003e",
          "module": "Generics.RepLib.SYB.Schemes",
          "name": "gnodecount",
          "package": "RepLib",
          "signature": "GenericQ Int",
          "source": "src/Generics-RepLib-SYB-Schemes.html#gnodecount",
          "type": "function"
        },
        "index": {
          "description": "Determine the number of all nodes in given term",
          "hierarchy": "Generics RepLib SYB Schemes",
          "module": "Generics.RepLib.SYB.Schemes",
          "name": "gnodecount",
          "package": "RepLib",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-SYB-Schemes.html#v:gnodecount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute size of an arbitrary data structure\n\u003c/p\u003e",
          "module": "Generics.RepLib.SYB.Schemes",
          "name": "gsize",
          "package": "RepLib",
          "signature": "a -\u003e Int",
          "source": "src/Generics-RepLib-SYB-Schemes.html#gsize",
          "type": "function"
        },
        "index": {
          "description": "Compute size of an arbitrary data structure",
          "hierarchy": "Generics RepLib SYB Schemes",
          "module": "Generics.RepLib.SYB.Schemes",
          "name": "gsize",
          "normalized": "a-\u003eInt",
          "package": "RepLib",
          "signature": "a-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-SYB-Schemes.html#v:gsize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDetermine the number of nodes of a given type in a given term\n\u003c/p\u003e",
          "module": "Generics.RepLib.SYB.Schemes",
          "name": "gtypecount",
          "package": "RepLib",
          "signature": "a -\u003e GenericQ Int",
          "source": "src/Generics-RepLib-SYB-Schemes.html#gtypecount",
          "type": "function"
        },
        "index": {
          "description": "Determine the number of nodes of given type in given term",
          "hierarchy": "Generics RepLib SYB Schemes",
          "module": "Generics.RepLib.SYB.Schemes",
          "name": "gtypecount",
          "normalized": "a-\u003eGenericQ Int",
          "package": "RepLib",
          "signature": "a-\u003eGenericQ Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-SYB-Schemes.html#v:gtypecount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet a list of all entities that meet a predicate\n\u003c/p\u003e",
          "module": "Generics.RepLib.SYB.Schemes",
          "name": "listify",
          "package": "RepLib",
          "signature": "(r -\u003e Bool) -\u003e GenericQ [r]",
          "source": "src/Generics-RepLib-SYB-Schemes.html#listify",
          "type": "function"
        },
        "index": {
          "description": "Get list of all entities that meet predicate",
          "hierarchy": "Generics RepLib SYB Schemes",
          "module": "Generics.RepLib.SYB.Schemes",
          "name": "listify",
          "normalized": "(a-\u003eBool)-\u003eGenericQ[a]",
          "package": "RepLib",
          "signature": "(r-\u003eBool)-\u003eGenericQ[r]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-SYB-Schemes.html#v:listify"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLook up a subterm by means of a maybe-typed filter\n\u003c/p\u003e",
          "module": "Generics.RepLib.SYB.Schemes",
          "name": "something",
          "package": "RepLib",
          "signature": "GenericQ (Maybe u) -\u003e GenericQ (Maybe u)",
          "source": "src/Generics-RepLib-SYB-Schemes.html#something",
          "type": "function"
        },
        "index": {
          "description": "Look up subterm by means of maybe-typed filter",
          "hierarchy": "Generics RepLib SYB Schemes",
          "module": "Generics.RepLib.SYB.Schemes",
          "name": "something",
          "normalized": "GenericQ(Maybe a)-\u003eGenericQ(Maybe a)",
          "package": "RepLib",
          "signature": "GenericQ(Maybe u)-\u003eGenericQ(Maybe u)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-SYB-Schemes.html#v:something"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBottom-up synthesis of a data structure;\n   1st argument z is the initial element for the synthesis;\n   2nd argument o is for reduction of results from subterms;\n   3rd argument f updates the synthesised data according to the given term\n\u003c/p\u003e",
          "module": "Generics.RepLib.SYB.Schemes",
          "name": "synthesize",
          "package": "RepLib",
          "signature": "s -\u003e (s -\u003e s -\u003e s) -\u003e GenericQ (s -\u003e s) -\u003e GenericQ s",
          "source": "src/Generics-RepLib-SYB-Schemes.html#synthesize",
          "type": "function"
        },
        "index": {
          "description": "Bottom-up synthesis of data structure st argument is the initial element for the synthesis nd argument is for reduction of results from subterms rd argument updates the synthesised data according to the given term",
          "hierarchy": "Generics RepLib SYB Schemes",
          "module": "Generics.RepLib.SYB.Schemes",
          "name": "synthesize",
          "normalized": "a-\u003e(a-\u003ea-\u003ea)-\u003eGenericQ(a-\u003ea)-\u003eGenericQ a",
          "package": "RepLib",
          "signature": "s-\u003e(s-\u003es-\u003es)-\u003eGenericQ(s-\u003es)-\u003eGenericQ s",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-SYB-Schemes.html#v:synthesize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.RepLib.Unify",
          "name": "Unify",
          "package": "RepLib",
          "source": "src/Generics-RepLib-Unify.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Generics RepLib Unify",
          "module": "Generics.RepLib.Unify",
          "name": "Unify",
          "package": "RepLib",
          "partial": "Unify",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-Unify.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.RepLib.Unify",
          "name": "HasVar",
          "package": "RepLib",
          "source": "src/Generics-RepLib-Unify.html#HasVar",
          "type": "class"
        },
        "index": {
          "hierarchy": "Generics RepLib Unify",
          "module": "Generics.RepLib.Unify",
          "name": "HasVar",
          "package": "RepLib",
          "partial": "Has Var",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-Unify.html#t:HasVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.RepLib.Unify",
          "name": "Occurs",
          "package": "RepLib",
          "source": "src/Generics-RepLib-Unify.html#Occurs",
          "type": "class"
        },
        "index": {
          "hierarchy": "Generics RepLib Unify",
          "module": "Generics.RepLib.Unify",
          "name": "Occurs",
          "package": "RepLib",
          "partial": "Occurs",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-Unify.html#t:Occurs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.RepLib.Unify",
          "name": "Proxy",
          "package": "RepLib",
          "source": "src/Generics-RepLib-Unify.html#Proxy",
          "type": "data"
        },
        "index": {
          "hierarchy": "Generics RepLib Unify",
          "module": "Generics.RepLib.Unify",
          "name": "Proxy",
          "package": "RepLib",
          "partial": "Proxy",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-Unify.html#t:Proxy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.RepLib.Unify",
          "name": "Subst",
          "package": "RepLib",
          "source": "src/Generics-RepLib-Unify.html#Subst",
          "type": "class"
        },
        "index": {
          "hierarchy": "Generics RepLib Unify",
          "module": "Generics.RepLib.Unify",
          "name": "Subst",
          "package": "RepLib",
          "partial": "Subst",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-Unify.html#t:Subst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.RepLib.Unify",
          "name": "UConstraint",
          "package": "RepLib",
          "source": "src/Generics-RepLib-Unify.html#UConstraint",
          "type": "data"
        },
        "index": {
          "hierarchy": "Generics RepLib Unify",
          "module": "Generics.RepLib.Unify",
          "name": "UConstraint",
          "package": "RepLib",
          "partial": "UConstraint",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-Unify.html#t:UConstraint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.RepLib.Unify",
          "name": "UM",
          "package": "RepLib",
          "source": "src/Generics-RepLib-Unify.html#UM",
          "type": "type"
        },
        "index": {
          "hierarchy": "Generics RepLib Unify",
          "module": "Generics.RepLib.Unify",
          "name": "UM",
          "package": "RepLib",
          "partial": "UM",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-Unify.html#t:UM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.RepLib.Unify",
          "name": "UnificationState",
          "package": "RepLib",
          "source": "src/Generics-RepLib-Unify.html#UnificationState",
          "type": "data"
        },
        "index": {
          "hierarchy": "Generics RepLib Unify",
          "module": "Generics.RepLib.Unify",
          "name": "UnificationState",
          "package": "RepLib",
          "partial": "Unification State",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-Unify.html#t:UnificationState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.RepLib.Unify",
          "name": "Unify",
          "package": "RepLib",
          "source": "src/Generics-RepLib-Unify.html#Unify",
          "type": "class"
        },
        "index": {
          "hierarchy": "Generics RepLib Unify",
          "module": "Generics.RepLib.Unify",
          "name": "Unify",
          "package": "RepLib",
          "partial": "Unify",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-Unify.html#t:Unify"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.RepLib.Unify",
          "name": "UnifyError",
          "package": "RepLib",
          "source": "src/Generics-RepLib-Unify.html#UnifyError",
          "type": "type"
        },
        "index": {
          "hierarchy": "Generics RepLib Unify",
          "module": "Generics.RepLib.Unify",
          "name": "UnifyError",
          "package": "RepLib",
          "partial": "Unify Error",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-Unify.html#t:UnifyError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.RepLib.Unify",
          "name": "UnifySubD",
          "package": "RepLib",
          "source": "src/Generics-RepLib-Unify.html#UnifySubD",
          "type": "data"
        },
        "index": {
          "hierarchy": "Generics RepLib Unify",
          "module": "Generics.RepLib.Unify",
          "name": "UnifySubD",
          "package": "RepLib",
          "partial": "Unify Sub",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-Unify.html#t:UnifySubD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.RepLib.Unify",
          "name": "UC",
          "package": "RepLib",
          "signature": "forall b . UC (UnifySubD n a b) b b",
          "source": "src/Generics-RepLib-Unify.html#UConstraint",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics RepLib Unify",
          "module": "Generics.RepLib.Unify",
          "name": "UC",
          "package": "RepLib",
          "partial": "UC",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-Unify.html#v:UC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.RepLib.Unify",
          "name": "UState",
          "package": "RepLib",
          "signature": "UState",
          "source": "src/Generics-RepLib-Unify.html#UnificationState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics RepLib Unify",
          "module": "Generics.RepLib.Unify",
          "name": "UState",
          "package": "RepLib",
          "partial": "UState",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-Unify.html#v:UState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.RepLib.Unify",
          "name": "UnifySubD",
          "package": "RepLib",
          "signature": "UnifySubD",
          "source": "src/Generics-RepLib-Unify.html#UnifySubD",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics RepLib Unify",
          "module": "Generics.RepLib.Unify",
          "name": "UnifySubD",
          "package": "RepLib",
          "partial": "Unify Sub",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-Unify.html#v:UnifySubD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.RepLib.Unify",
          "name": "addConstraintsRL1",
          "package": "RepLib",
          "signature": "MTup (UnifySubD n a) l -\u003e Proxy (n, a) -\u003e l -\u003e l -\u003e UM n a ()",
          "source": "src/Generics-RepLib-Unify.html#addConstraintsRL1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics RepLib Unify",
          "module": "Generics.RepLib.Unify",
          "name": "addConstraintsRL1",
          "normalized": "MTup(UnifySubD a b)c-\u003eProxy(a,b)-\u003ec-\u003ec-\u003eUM a b()",
          "package": "RepLib",
          "partial": "Constraints RL",
          "signature": "MTup(UnifySubD n a)l-\u003eProxy(n,a)-\u003el-\u003el-\u003eUM n a()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-Unify.html#v:addConstraintsRL1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.RepLib.Unify",
          "name": "dequeueConstraint",
          "package": "RepLib",
          "signature": "UM n a (Maybe (UConstraint n a))",
          "source": "src/Generics-RepLib-Unify.html#dequeueConstraint",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics RepLib Unify",
          "module": "Generics.RepLib.Unify",
          "name": "dequeueConstraint",
          "package": "RepLib",
          "partial": "Constraint",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-Unify.html#v:dequeueConstraint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.RepLib.Unify",
          "name": "extendSubstitution",
          "package": "RepLib",
          "signature": "(n, a) -\u003e UM n a ()",
          "source": "src/Generics-RepLib-Unify.html#extendSubstitution",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics RepLib Unify",
          "module": "Generics.RepLib.Unify",
          "name": "extendSubstitution",
          "normalized": "(a,b)-\u003eUM a b()",
          "package": "RepLib",
          "partial": "Substitution",
          "signature": "(n,a)-\u003eUM n a()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-Unify.html#v:extendSubstitution"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.RepLib.Unify",
          "name": "is_var",
          "package": "RepLib",
          "signature": "b -\u003e Maybe a",
          "source": "src/Generics-RepLib-Unify.html#is_var",
          "type": "method"
        },
        "index": {
          "hierarchy": "Generics RepLib Unify",
          "module": "Generics.RepLib.Unify",
          "name": "is_var",
          "normalized": "a-\u003eMaybe b",
          "package": "RepLib",
          "signature": "b-\u003eMaybe a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-Unify.html#v:is_var"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.RepLib.Unify",
          "name": "occursCheck",
          "package": "RepLib",
          "signature": "n -\u003e Proxy a -\u003e b -\u003e Bool",
          "source": "src/Generics-RepLib-Unify.html#occursCheck",
          "type": "method"
        },
        "index": {
          "hierarchy": "Generics RepLib Unify",
          "module": "Generics.RepLib.Unify",
          "name": "occursCheck",
          "normalized": "a-\u003eProxy b-\u003ec-\u003eBool",
          "package": "RepLib",
          "partial": "Check",
          "signature": "n-\u003eProxy a-\u003eb-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-Unify.html#v:occursCheck"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.RepLib.Unify",
          "name": "occursCheckD",
          "package": "RepLib",
          "signature": "n -\u003e Proxy a -\u003e b -\u003e Bool",
          "source": "src/Generics-RepLib-Unify.html#UnifySubD",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics RepLib Unify",
          "module": "Generics.RepLib.Unify",
          "name": "occursCheckD",
          "normalized": "a-\u003eProxy b-\u003ec-\u003eBool",
          "package": "RepLib",
          "partial": "Check",
          "signature": "n-\u003eProxy a-\u003eb-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-Unify.html#v:occursCheckD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.RepLib.Unify",
          "name": "occursCheckR1",
          "package": "RepLib",
          "signature": "R1 (UnifySubD n a) b -\u003e n -\u003e Proxy a -\u003e b -\u003e Bool",
          "source": "src/Generics-RepLib-Unify.html#occursCheckR1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics RepLib Unify",
          "module": "Generics.RepLib.Unify",
          "name": "occursCheckR1",
          "normalized": "R(UnifySubD a b)c-\u003ea-\u003eProxy b-\u003ec-\u003eBool",
          "package": "RepLib",
          "partial": "Check",
          "signature": "R(UnifySubD n a)b-\u003en-\u003eProxy a-\u003eb-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-Unify.html#v:occursCheckR1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.RepLib.Unify",
          "name": "queueConstraint",
          "package": "RepLib",
          "signature": "UConstraint n a -\u003e UM n a ()",
          "source": "src/Generics-RepLib-Unify.html#queueConstraint",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics RepLib Unify",
          "module": "Generics.RepLib.Unify",
          "name": "queueConstraint",
          "normalized": "UConstraint a b-\u003eUM a b()",
          "package": "RepLib",
          "partial": "Constraint",
          "signature": "UConstraint n a-\u003eUM n a()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-Unify.html#v:queueConstraint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.RepLib.Unify",
          "name": "solveUnification",
          "package": "RepLib",
          "signature": "[(a, a)] -\u003e Maybe [(n, a)]",
          "source": "src/Generics-RepLib-Unify.html#solveUnification",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics RepLib Unify",
          "module": "Generics.RepLib.Unify",
          "name": "solveUnification",
          "normalized": "[(a,a)]-\u003eMaybe[(b,a)]",
          "package": "RepLib",
          "partial": "Unification",
          "signature": "[(a,a)]-\u003eMaybe[(n,a)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-Unify.html#v:solveUnification"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.RepLib.Unify",
          "name": "solveUnification'",
          "package": "RepLib",
          "signature": "Proxy (n, a) -\u003e [(b, b)] -\u003e Maybe [(n, a)]",
          "source": "src/Generics-RepLib-Unify.html#solveUnification%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics RepLib Unify",
          "module": "Generics.RepLib.Unify",
          "name": "solveUnification'",
          "normalized": "Proxy(a,b)-\u003e[(c,c)]-\u003eMaybe[(a,b)]",
          "package": "RepLib",
          "partial": "Unification'",
          "signature": "Proxy(n,a)-\u003e[(b,b)]-\u003eMaybe[(n,a)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-Unify.html#v:solveUnification-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.RepLib.Unify",
          "name": "subst",
          "package": "RepLib",
          "signature": "a -\u003e t -\u003e t' -\u003e t'",
          "source": "src/Generics-RepLib-Unify.html#subst",
          "type": "method"
        },
        "index": {
          "hierarchy": "Generics RepLib Unify",
          "module": "Generics.RepLib.Unify",
          "name": "subst",
          "normalized": "a-\u003eb-\u003ec-\u003ec",
          "package": "RepLib",
          "signature": "a-\u003et-\u003et'-\u003et'",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-Unify.html#v:subst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.RepLib.Unify",
          "name": "substD",
          "package": "RepLib",
          "signature": "n -\u003e a -\u003e b -\u003e b",
          "source": "src/Generics-RepLib-Unify.html#UnifySubD",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics RepLib Unify",
          "module": "Generics.RepLib.Unify",
          "name": "substD",
          "normalized": "a-\u003eb-\u003ec-\u003ec",
          "package": "RepLib",
          "signature": "n-\u003ea-\u003eb-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-Unify.html#v:substD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.RepLib.Unify",
          "name": "substR1",
          "package": "RepLib",
          "signature": "R1 (UnifySubD a t) t' -\u003e a -\u003e t -\u003e t' -\u003e t'",
          "source": "src/Generics-RepLib-Unify.html#substR1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics RepLib Unify",
          "module": "Generics.RepLib.Unify",
          "name": "substR1",
          "normalized": "R(UnifySubD a b)c-\u003ea-\u003eb-\u003ec-\u003ec",
          "package": "RepLib",
          "signature": "R(UnifySubD a t)t'-\u003ea-\u003et-\u003et'-\u003et'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-Unify.html#v:substR1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.RepLib.Unify",
          "name": "uConstraints",
          "package": "RepLib",
          "signature": "[UConstraint n a]",
          "source": "src/Generics-RepLib-Unify.html#UnificationState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics RepLib Unify",
          "module": "Generics.RepLib.Unify",
          "name": "uConstraints",
          "normalized": "[UConstraint a b]",
          "package": "RepLib",
          "partial": "Constraints",
          "signature": "[UConstraint n a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-Unify.html#v:uConstraints"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.RepLib.Unify",
          "name": "uSubst",
          "package": "RepLib",
          "signature": "[(n, a)]",
          "source": "src/Generics-RepLib-Unify.html#UnificationState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics RepLib Unify",
          "module": "Generics.RepLib.Unify",
          "name": "uSubst",
          "normalized": "[(a,b)]",
          "package": "RepLib",
          "partial": "Subst",
          "signature": "[(n,a)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-Unify.html#v:uSubst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.RepLib.Unify",
          "name": "unifyStep",
          "package": "RepLib",
          "signature": "Proxy (n, a) -\u003e b -\u003e b -\u003e UM n a ()",
          "source": "src/Generics-RepLib-Unify.html#unifyStep",
          "type": "method"
        },
        "index": {
          "hierarchy": "Generics RepLib Unify",
          "module": "Generics.RepLib.Unify",
          "name": "unifyStep",
          "normalized": "Proxy(a,b)-\u003ec-\u003ec-\u003eUM a b()",
          "package": "RepLib",
          "partial": "Step",
          "signature": "Proxy(n,a)-\u003eb-\u003eb-\u003eUM n a()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-Unify.html#v:unifyStep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.RepLib.Unify",
          "name": "unifyStepD",
          "package": "RepLib",
          "signature": "Proxy (n, a) -\u003e b -\u003e b -\u003e UM n a ()",
          "source": "src/Generics-RepLib-Unify.html#UnifySubD",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics RepLib Unify",
          "module": "Generics.RepLib.Unify",
          "name": "unifyStepD",
          "normalized": "Proxy(a,b)-\u003ec-\u003ec-\u003eUM a b()",
          "package": "RepLib",
          "partial": "Step",
          "signature": "Proxy(n,a)-\u003eb-\u003eb-\u003eUM n a()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-Unify.html#v:unifyStepD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.RepLib.Unify",
          "name": "unifyStepEq",
          "package": "RepLib",
          "signature": "b -\u003e b -\u003e UM n a ()",
          "source": "src/Generics-RepLib-Unify.html#unifyStepEq",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics RepLib Unify",
          "module": "Generics.RepLib.Unify",
          "name": "unifyStepEq",
          "normalized": "a-\u003ea-\u003eUM b c()",
          "package": "RepLib",
          "partial": "Step Eq",
          "signature": "b-\u003eb-\u003eUM n a()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-Unify.html#v:unifyStepEq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneric unifyStep. almost identical to polymorphic equality\n\u003c/p\u003e",
          "module": "Generics.RepLib.Unify",
          "name": "unifyStepR1",
          "package": "RepLib",
          "signature": "R1 (UnifySubD n a) b -\u003e Proxy (n, a) -\u003e b -\u003e b -\u003e UM n a ()",
          "source": "src/Generics-RepLib-Unify.html#unifyStepR1",
          "type": "function"
        },
        "index": {
          "description": "Generic unifyStep almost identical to polymorphic equality",
          "hierarchy": "Generics RepLib Unify",
          "module": "Generics.RepLib.Unify",
          "name": "unifyStepR1",
          "normalized": "R(UnifySubD a b)c-\u003eProxy(a,b)-\u003ec-\u003ec-\u003eUM a b()",
          "package": "RepLib",
          "partial": "Step",
          "signature": "R(UnifySubD n a)b-\u003eProxy(n,a)-\u003eb-\u003eb-\u003eUM n a()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-Unify.html#v:unifyStepR1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.RepLib.Unify",
          "name": "var",
          "package": "RepLib",
          "signature": "a -\u003e b",
          "source": "src/Generics-RepLib-Unify.html#var",
          "type": "method"
        },
        "index": {
          "hierarchy": "Generics RepLib Unify",
          "module": "Generics.RepLib.Unify",
          "name": "var",
          "normalized": "a-\u003eb",
          "package": "RepLib",
          "signature": "a-\u003eb",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib-Unify.html#v:var"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.RepLib",
          "name": "RepLib",
          "package": "RepLib",
          "source": "src/Generics-RepLib.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Generics RepLib",
          "module": "Generics.RepLib",
          "name": "RepLib",
          "package": "RepLib",
          "partial": "Rep Lib",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType equality. A value of \u003ccode\u003ea :=: b\u003c/code\u003e is a proof that types \u003ccode\u003ea\u003c/code\u003e and\n \u003ccode\u003eb\u003c/code\u003e are equal. By pattern matching on \u003ccode\u003eRefl\u003c/code\u003e this fact is\n introduced to the type checker.\n\u003c/p\u003e",
          "module": "Generics.RepLib",
          "name": ":=:",
          "package": "RepLib",
          "type": "data"
        },
        "index": {
          "description": "Type equality value of is proof that types and are equal By pattern matching on Refl this fact is introduced to the type checker",
          "hierarchy": "Generics RepLib",
          "module": "Generics.RepLib",
          "name": ":=:",
          "package": "RepLib",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib.html#t::-61-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type class for constructing equality proofs. This is as close\n as we can get to decidable equality on types. Note that \u003ccode\u003ef\u003c/code\u003e must be\n a GADT to be able to define \u003ccode\u003e\u003ca\u003eeqT\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Generics.RepLib",
          "name": "EqT",
          "package": "RepLib",
          "type": "class"
        },
        "index": {
          "description": "type class for constructing equality proofs This is as close as we can get to decidable equality on types Note that must be GADT to be able to define eqT",
          "hierarchy": "Generics RepLib",
          "module": "Generics.RepLib",
          "name": "EqT",
          "package": "RepLib",
          "partial": "Eq",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib.html#t:EqT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.RepLib",
          "name": "Refl",
          "package": "RepLib",
          "signature": ":=: a a",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics RepLib",
          "module": "Generics.RepLib",
          "name": "Refl",
          "package": "RepLib",
          "partial": "Refl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib.html#v:Refl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.RepLib",
          "name": "eqT",
          "package": "RepLib",
          "signature": "f a -\u003e f b -\u003e Maybe (:=: a b)",
          "type": "method"
        },
        "index": {
          "hierarchy": "Generics RepLib",
          "module": "Generics.RepLib",
          "name": "eqT",
          "normalized": "a b-\u003ea c-\u003eMaybe(b c)",
          "package": "RepLib",
          "signature": "f a-\u003ef b-\u003eMaybe(a b)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/RepLib/docs/Generics-RepLib.html#v:eqT"
      }
    }
  ]
]