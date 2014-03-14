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
        "word": "failable-list"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA list-like type for lazy streams, which might terminate with an error.\n\u003c/p\u003e\u003cp\u003eThis module uses common names and so is designed to be imported qualified:\n\u003c/p\u003e\u003cpre\u003e import qualified Data.FailableList as FL\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Data.FailableList",
          "name": "FailableList",
          "package": "failable-list",
          "source": "src/Data-FailableList.html",
          "type": "module"
        },
        "index": {
          "description": "list-like type for lazy streams which might terminate with an error This module uses common names and so is designed to be imported qualified import qualified Data.FailableList as FL",
          "hierarchy": "Data FailableList",
          "module": "Data.FailableList",
          "name": "FailableList",
          "package": "failable-list",
          "partial": "Failable List",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/failable-list/docs/Data-FailableList.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA list-like type for lazy sequences which might terminate with an error.\n\u003c/p\u003e\u003cp\u003eStandard lists can be converted to failable lists using\n \u003ccode\u003ePrelude.foldr Next Done\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.FailableList",
          "name": "FailableList",
          "package": "failable-list",
          "source": "src/Data-FailableList.html#FailableList",
          "type": "data"
        },
        "index": {
          "description": "list-like type for lazy sequences which might terminate with an error Standard lists can be converted to failable lists using Prelude.foldr Next Done",
          "hierarchy": "Data FailableList",
          "module": "Data.FailableList",
          "name": "FailableList",
          "package": "failable-list",
          "partial": "Failable List",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/failable-list/docs/Data-FailableList.html#t:FailableList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.FailableList",
          "name": "Done",
          "package": "failable-list",
          "signature": "Done",
          "source": "src/Data-FailableList.html#FailableList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data FailableList",
          "module": "Data.FailableList",
          "name": "Done",
          "package": "failable-list",
          "partial": "Done",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/failable-list/docs/Data-FailableList.html#v:Done"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.FailableList",
          "name": "Fail",
          "package": "failable-list",
          "signature": "Fail e",
          "source": "src/Data-FailableList.html#FailableList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data FailableList",
          "module": "Data.FailableList",
          "name": "Fail",
          "package": "failable-list",
          "partial": "Fail",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/failable-list/docs/Data-FailableList.html#v:Fail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.FailableList",
          "name": "Next",
          "package": "failable-list",
          "signature": "Next a (FailableList e a)",
          "source": "src/Data-FailableList.html#FailableList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data FailableList",
          "module": "Data.FailableList",
          "name": "Next",
          "package": "failable-list",
          "partial": "Next",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/failable-list/docs/Data-FailableList.html#v:Next"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike the standard \u003ccode\u003e\u003ca\u003e++\u003c/a\u003e\u003c/code\u003e function.\n\u003c/p\u003e",
          "module": "Data.FailableList",
          "name": "append",
          "package": "failable-list",
          "signature": "FailableList e a -\u003e FailableList e a -\u003e FailableList e a",
          "source": "src/Data-FailableList.html#append",
          "type": "function"
        },
        "index": {
          "description": "Like the standard function",
          "hierarchy": "Data FailableList",
          "module": "Data.FailableList",
          "name": "append",
          "normalized": "FailableList a b-\u003eFailableList a b-\u003eFailableList a b",
          "package": "failable-list",
          "signature": "FailableList e a-\u003eFailableList e a-\u003eFailableList e a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/failable-list/docs/Data-FailableList.html#v:append"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike the standard \u003ccode\u003e\u003ca\u003econcatMap\u003c/a\u003e\u003c/code\u003e function.\n\u003c/p\u003e",
          "module": "Data.FailableList",
          "name": "concatMap",
          "package": "failable-list",
          "signature": "(a -\u003e FailableList e b) -\u003e FailableList e a -\u003e FailableList e b",
          "source": "src/Data-FailableList.html#concatMap",
          "type": "function"
        },
        "index": {
          "description": "Like the standard concatMap function",
          "hierarchy": "Data FailableList",
          "module": "Data.FailableList",
          "name": "concatMap",
          "normalized": "(a-\u003eFailableList b c)-\u003eFailableList b a-\u003eFailableList b c",
          "package": "failable-list",
          "partial": "Map",
          "signature": "(a-\u003eFailableList e b)-\u003eFailableList e a-\u003eFailableList e b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/failable-list/docs/Data-FailableList.html#v:concatMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike the standard \u003ccode\u003e\u003ca\u003efoldl\u003c/a\u003e\u003c/code\u003e function, but errors will return a\n \u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e value.\n\u003c/p\u003e",
          "module": "Data.FailableList",
          "name": "foldl",
          "package": "failable-list",
          "signature": "(b -\u003e a -\u003e b) -\u003e b -\u003e FailableList e a -\u003e Either e b",
          "source": "src/Data-FailableList.html#foldl",
          "type": "function"
        },
        "index": {
          "description": "Like the standard foldl function but errors will return Left value",
          "hierarchy": "Data FailableList",
          "module": "Data.FailableList",
          "name": "foldl",
          "normalized": "(a-\u003eb-\u003ea)-\u003ea-\u003eFailableList c b-\u003eEither c a",
          "package": "failable-list",
          "signature": "(b-\u003ea-\u003eb)-\u003eb-\u003eFailableList e a-\u003eEither e b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/failable-list/docs/Data-FailableList.html#v:foldl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike the standard \u003ccode\u003e\u003ca\u003efoldr\u003c/a\u003e\u003c/code\u003e function, but accepting an extra\n parameter to handle \u003ccode\u003e\u003ca\u003eFail\u003c/a\u003e\u003c/code\u003e items.\n\u003c/p\u003e",
          "module": "Data.FailableList",
          "name": "foldr",
          "package": "failable-list",
          "signature": "(a -\u003e b -\u003e b) -\u003e b -\u003e (e -\u003e b) -\u003e FailableList e a -\u003e b",
          "source": "src/Data-FailableList.html#foldr",
          "type": "function"
        },
        "index": {
          "description": "Like the standard foldr function but accepting an extra parameter to handle Fail items",
          "hierarchy": "Data FailableList",
          "module": "Data.FailableList",
          "name": "foldr",
          "normalized": "(a-\u003eb-\u003eb)-\u003eb-\u003e(c-\u003eb)-\u003eFailableList c a-\u003eb",
          "package": "failable-list",
          "signature": "(a-\u003eb-\u003eb)-\u003eb-\u003e(e-\u003eb)-\u003eFailableList e a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/failable-list/docs/Data-FailableList.html#v:foldr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike the standard \u003ccode\u003e\u003ca\u003elength\u003c/a\u003e\u003c/code\u003e function; \u003ccode\u003e\u003ca\u003eDone\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eFail\u003c/a\u003e\u003c/code\u003e are\n considered 0-length.\n\u003c/p\u003e",
          "module": "Data.FailableList",
          "name": "length",
          "package": "failable-list",
          "signature": "FailableList e a -\u003e Int",
          "source": "src/Data-FailableList.html#length",
          "type": "function"
        },
        "index": {
          "description": "Like the standard length function Done and Fail are considered length",
          "hierarchy": "Data FailableList",
          "module": "Data.FailableList",
          "name": "length",
          "normalized": "FailableList a b-\u003eInt",
          "package": "failable-list",
          "signature": "FailableList e a-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/failable-list/docs/Data-FailableList.html#v:length"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike the standard \u003ccode\u003e\u003ca\u003emap\u003c/a\u003e\u003c/code\u003e function.\n\u003c/p\u003e",
          "module": "Data.FailableList",
          "name": "map",
          "package": "failable-list",
          "signature": "(a -\u003e b) -\u003e FailableList e a -\u003e FailableList e b",
          "source": "src/Data-FailableList.html#map",
          "type": "function"
        },
        "index": {
          "description": "Like the standard map function",
          "hierarchy": "Data FailableList",
          "module": "Data.FailableList",
          "name": "map",
          "normalized": "(a-\u003eb)-\u003eFailableList c a-\u003eFailableList c b",
          "package": "failable-list",
          "signature": "(a-\u003eb)-\u003eFailableList e a-\u003eFailableList e b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/failable-list/docs/Data-FailableList.html#v:map"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike the standard \u003ccode\u003e\u003ca\u003emap\u003c/a\u003e\u003c/code\u003e function, but the mapping function may\n return an error.\n\u003c/p\u003e",
          "module": "Data.FailableList",
          "name": "mapEither",
          "package": "failable-list",
          "signature": "(a -\u003e Either e b) -\u003e FailableList e a -\u003e FailableList e b",
          "source": "src/Data-FailableList.html#mapEither",
          "type": "function"
        },
        "index": {
          "description": "Like the standard map function but the mapping function may return an error",
          "hierarchy": "Data FailableList",
          "module": "Data.FailableList",
          "name": "mapEither",
          "normalized": "(a-\u003eEither b c)-\u003eFailableList b a-\u003eFailableList b c",
          "package": "failable-list",
          "partial": "Either",
          "signature": "(a-\u003eEither e b)-\u003eFailableList e a-\u003eFailableList e b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/failable-list/docs/Data-FailableList.html#v:mapEither"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike the standard \u003ccode\u003e\u003ca\u003enull\u003c/a\u003e\u003c/code\u003e function.\n\u003c/p\u003e",
          "module": "Data.FailableList",
          "name": "null",
          "package": "failable-list",
          "signature": "FailableList e a -\u003e Bool",
          "source": "src/Data-FailableList.html#null",
          "type": "function"
        },
        "index": {
          "description": "Like the standard null function",
          "hierarchy": "Data FailableList",
          "module": "Data.FailableList",
          "name": "null",
          "normalized": "FailableList a b-\u003eBool",
          "package": "failable-list",
          "signature": "FailableList e a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/failable-list/docs/Data-FailableList.html#v:null"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike the standard \u003ccode\u003eData.List.unfoldr\u003c/code\u003e function, but the step function\n may return an error.\n\u003c/p\u003e",
          "module": "Data.FailableList",
          "name": "unfoldr",
          "package": "failable-list",
          "signature": "(b -\u003e Either e (Maybe (a, b))) -\u003e b -\u003e FailableList e a",
          "source": "src/Data-FailableList.html#unfoldr",
          "type": "function"
        },
        "index": {
          "description": "Like the standard Data.List.unfoldr function but the step function may return an error",
          "hierarchy": "Data FailableList",
          "module": "Data.FailableList",
          "name": "unfoldr",
          "normalized": "(a-\u003eEither b(Maybe(c,a)))-\u003ea-\u003eFailableList b c",
          "package": "failable-list",
          "signature": "(b-\u003eEither e(Maybe(a,b)))-\u003eb-\u003eFailableList e a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/failable-list/docs/Data-FailableList.html#v:unfoldr"
      }
    }
  ]
]