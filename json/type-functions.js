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
        "word": "type-functions"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eEmulation of type-level functions.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.TypeFun",
          "name": "TypeFun",
          "package": "type-functions",
          "source": "src/Data-TypeFun.html",
          "type": "module"
        },
        "index": {
          "description": "Emulation of type-level functions",
          "hierarchy": "Data TypeFun",
          "module": "Data.TypeFun",
          "name": "TypeFun",
          "package": "type-functions",
          "partial": "Type Fun",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/type-functions/docs/Data-TypeFun.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type \u003ccode\u003e\u003cem\u003ef\u003c/em\u003e :-\u003e \u003cem\u003ef'\u003c/em\u003e\u003c/code\u003e represents the type-level function \u003ccode\u003e\\arg -\u003e (\u003ccode\u003e\u003ca\u003eApp\u003c/a\u003e\u003c/code\u003e \u003cem\u003ef\u003c/em\u003e arg -\u003e \u003ccode\u003e\u003ca\u003eApp\u003c/a\u003e\u003c/code\u003e\n        \u003cem\u003ef'\u003c/em\u003e arg)\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.TypeFun",
          "name": ":-\u003e",
          "package": "type-functions",
          "source": "src/Data-TypeFun.html#%3A-%3E",
          "type": "data"
        },
        "index": {
          "description": "type represents the type-level function arg App arg App arg",
          "hierarchy": "Data TypeFun",
          "module": "Data.TypeFun",
          "name": ":-\u003e",
          "package": "type-functions",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/type-functions/docs/Data-TypeFun.html#t::-45--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApplication of type-level functions. \u003ccode\u003eApp\u003c/code\u003e takes a function representation and an argument\n        and returns the corresponding result.\n\u003c/p\u003e",
          "module": "Data.TypeFun",
          "name": "App",
          "package": "type-functions",
          "signature": "App",
          "type": "function"
        },
        "index": {
          "description": "Application of type-level functions App takes function representation and an argument and returns the corresponding result",
          "hierarchy": "Data TypeFun",
          "module": "Data.TypeFun",
          "name": "App",
          "package": "type-functions",
          "partial": "App",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/type-functions/docs/Data-TypeFun.html#t:App"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type \u003ccode\u003eConst \u003cem\u003ed\u003c/em\u003e \u003cem\u003ev\u003c/em\u003e\u003c/code\u003e represents the constant type-level function whose domain is\n        represented by&#160;\u003ccode\u003e\u003cem\u003ed\u003c/em\u003e\u003c/code\u003e, and whose result is&#160;\u003ccode\u003e\u003cem\u003ev\u003c/em\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.TypeFun",
          "name": "Const",
          "package": "type-functions",
          "source": "src/Data-TypeFun.html#Const",
          "type": "data"
        },
        "index": {
          "description": "type Const represents the constant type-level function whose domain is represented by and whose result is",
          "hierarchy": "Data TypeFun",
          "module": "Data.TypeFun",
          "name": "Const",
          "package": "type-functions",
          "partial": "Const",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/type-functions/docs/Data-TypeFun.html#t:Const"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf \u003ccode\u003e\u003cem\u003et\u003c/em\u003e\u003c/code\u003e&#160;is a type of kind \u003ccode\u003e* -\u003e *\u003c/code\u003e, and \u003ccode\u003e\u003cem\u003ef\u003c/em\u003e\u003c/code\u003e&#160;is the representation of a\n        type-level function, \u003ccode\u003eFunMap \u003cem\u003et\u003c/em\u003e \u003cem\u003ef\u003c/em\u003e\u003c/code\u003e represents the function \u003ccode\u003e\\arg -\u003e \u003cem\u003et\u003c/em\u003e (App \u003cem\u003ef\u003c/em\u003e arg)\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.TypeFun",
          "name": "FunMap",
          "package": "type-functions",
          "source": "src/Data-TypeFun.html#FunMap",
          "type": "data"
        },
        "index": {
          "description": "If is type of kind and is the representation of type-level function FunMap represents the function arg App arg",
          "hierarchy": "Data TypeFun",
          "module": "Data.TypeFun",
          "name": "FunMap",
          "package": "type-functions",
          "partial": "Fun Map",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/type-functions/docs/Data-TypeFun.html#t:FunMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type \u003ccode\u003eId \u003cem\u003ed\u003c/em\u003e\u003c/code\u003e represents the type-level identity function whose domain is represented\n        by&#160;\u003ccode\u003e\u003cem\u003ed\u003c/em\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.TypeFun",
          "name": "Id",
          "package": "type-functions",
          "source": "src/Data-TypeFun.html#Id",
          "type": "data"
        },
        "index": {
          "description": "type Id represents the type-level identity function whose domain is represented by",
          "hierarchy": "Data TypeFun",
          "module": "Data.TypeFun",
          "name": "Id",
          "package": "type-functions",
          "partial": "Id",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/type-functions/docs/Data-TypeFun.html#t:Id"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType-level functions are represented by types. \u003ccode\u003eTypeFun\u003c/code\u003e is the class of all type-level\n        function representations.\n\u003c/p\u003e",
          "module": "Data.TypeFun",
          "name": "TypeFun",
          "package": "type-functions",
          "source": "src/Data-TypeFun.html#TypeFun",
          "type": "class"
        },
        "index": {
          "description": "Type-level functions are represented by types TypeFun is the class of all type-level function representations",
          "hierarchy": "Data TypeFun",
          "module": "Data.TypeFun",
          "name": "TypeFun",
          "package": "type-functions",
          "partial": "Type Fun",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/type-functions/docs/Data-TypeFun.html#t:TypeFun"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTurns a type-level function into the intersection of all its results.\n\u003c/p\u003e",
          "module": "Data.TypeFun",
          "name": "Universal",
          "package": "type-functions",
          "source": "src/Data-TypeFun.html#Universal",
          "type": "type"
        },
        "index": {
          "description": "Turns type-level function into the intersection of all its results",
          "hierarchy": "Data TypeFun",
          "module": "Data.TypeFun",
          "name": "Universal",
          "package": "type-functions",
          "partial": "Universal",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/type-functions/docs/Data-TypeFun.html#t:Universal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA data type that is isomorphic to the type synonym family \u003ccode\u003e\u003ca\u003eApp\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.TypeFun",
          "name": "WrappedApp",
          "package": "type-functions",
          "source": "src/Data-TypeFun.html#WrappedApp",
          "type": "newtype"
        },
        "index": {
          "description": "data type that is isomorphic to the type synonym family App",
          "hierarchy": "Data TypeFun",
          "module": "Data.TypeFun",
          "name": "WrappedApp",
          "package": "type-functions",
          "partial": "Wrapped App",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/type-functions/docs/Data-TypeFun.html#t:WrappedApp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.TypeFun",
          "name": ":-\u003e",
          "package": "type-functions",
          "signature": "fun :-\u003e fun'",
          "source": "src/Data-TypeFun.html#%3A-%3E",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data TypeFun",
          "module": "Data.TypeFun",
          "name": ":-\u003e",
          "normalized": "a-\u003eb",
          "package": "type-functions",
          "signature": "fun-\u003efun'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/type-functions/docs/Data-TypeFun.html#v::-45--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.TypeFun",
          "name": "Const",
          "package": "type-functions",
          "signature": "Const dom",
          "source": "src/Data-TypeFun.html#Const",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data TypeFun",
          "module": "Data.TypeFun",
          "name": "Const",
          "package": "type-functions",
          "partial": "Const",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/type-functions/docs/Data-TypeFun.html#v:Const"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.TypeFun",
          "name": "Id",
          "package": "type-functions",
          "signature": "Id dom",
          "source": "src/Data-TypeFun.html#Id",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data TypeFun",
          "module": "Data.TypeFun",
          "name": "Id",
          "package": "type-functions",
          "partial": "Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/type-functions/docs/Data-TypeFun.html#v:Id"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.TypeFun",
          "name": "WrapApp",
          "package": "type-functions",
          "signature": "WrapApp (App fun arg)",
          "source": "src/Data-TypeFun.html#WrappedApp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data TypeFun",
          "module": "Data.TypeFun",
          "name": "WrapApp",
          "package": "type-functions",
          "partial": "Wrap App",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/type-functions/docs/Data-TypeFun.html#v:WrapApp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe inverse of \u003ccode\u003e\u003ca\u003eWrapApp\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.TypeFun",
          "name": "unwrapApp",
          "package": "type-functions",
          "signature": "WrappedApp fun arg -\u003e App fun arg",
          "source": "src/Data-TypeFun.html#unwrapApp",
          "type": "function"
        },
        "index": {
          "description": "The inverse of WrapApp",
          "hierarchy": "Data TypeFun",
          "module": "Data.TypeFun",
          "name": "unwrapApp",
          "normalized": "WrappedApp a b-\u003eApp a b",
          "package": "type-functions",
          "partial": "App",
          "signature": "WrappedApp fun arg-\u003eApp fun arg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/type-functions/docs/Data-TypeFun.html#v:unwrapApp"
      }
    }
  ]
]