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
        "word": "data-stringmap"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAn efficient implementation of maps from strings to arbitrary values.\n\u003c/p\u003e\u003cp\u003eValues can be associated with an arbitrary [Char] key. Searching for keys is very fast.\n  The main differences to Data.Map and Data.IntMap are the special\n  \u003ccode\u003e\u003ca\u003eprefixFind\u003c/a\u003e\u003c/code\u003e functions, which can be used to perform prefix queries. The interface is\n  heavily borrowed from \u003ca\u003eData.Map\u003c/a\u003e and \u003ca\u003eData.IntMap\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eMost other function names clash with \u003ca\u003ePrelude\u003c/a\u003e names, therefore this module is usually\n  imported \u003ccode\u003equalified\u003c/code\u003e, e.g.\n\u003c/p\u003e\u003cpre\u003e import           Data.StringMap (StringMap)\n import qualified Data.StringMap as M\n\u003c/pre\u003e\u003cp\u003eMany functions have a worst-case complexity of \u003cem\u003eO(min(n,L))\u003c/em\u003e. This means that the operation\n  can become linear with the number of elements with a maximum of \u003cem\u003eL\u003c/em\u003e, the length of the\n  key (the number of bytes in the list). The functions for searching a prefix have a worst-case\n  complexity of \u003cem\u003eO(max(L,R))\u003c/em\u003e. This means that the operation can become linear with\n  \u003cem\u003eR\u003c/em\u003e, the number of elements found for the prefix, with a minimum of \u003cem\u003eL\u003c/em\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.StringMap.Base",
          "name": "Base",
          "package": "data-stringmap",
          "source": "src/Data-StringMap-Base.html",
          "type": "module"
        },
        "index": {
          "description": "An efficient implementation of maps from strings to arbitrary values Values can be associated with an arbitrary Char key Searching for keys is very fast The main differences to Data.Map and Data.IntMap are the special prefixFind functions which can be used to perform prefix queries The interface is heavily borrowed from Data.Map and Data.IntMap Most other function names clash with Prelude names therefore this module is usually imported qualified e.g import Data.StringMap StringMap import qualified Data.StringMap as Many functions have worst-case complexity of min This means that the operation can become linear with the number of elements with maximum of the length of the key the number of bytes in the list The functions for searching prefix have worst-case complexity of max This means that the operation can become linear with the number of elements found for the prefix with minimum of",
          "hierarchy": "Data StringMap Base",
          "module": "Data.StringMap.Base",
          "name": "Base",
          "package": "data-stringmap",
          "partial": "Base",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Base.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.StringMap.Base",
          "name": "Key",
          "package": "data-stringmap",
          "source": "src/Data-StringMap-Types.html#Key",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data StringMap Base",
          "module": "Data.StringMap.Base",
          "name": "Key",
          "package": "data-stringmap",
          "partial": "Key",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Base.html#t:Key"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003estrict list of chars with unpacked fields\n and packing of 2 or 3 chars into a single object\n\u003c/p\u003e\u003cp\u003efor internal use in prefix tree to optimize space efficiency\n\u003c/p\u003e",
          "module": "Data.StringMap.Base",
          "name": "Key1",
          "package": "data-stringmap",
          "source": "src/Data-StringMap-Base.html#Key1",
          "type": "data"
        },
        "index": {
          "description": "strict list of chars with unpacked fields and packing of or chars into single object for internal use in prefix tree to optimize space efficiency",
          "hierarchy": "Data StringMap Base",
          "module": "Data.StringMap.Base",
          "name": "Key1",
          "package": "data-stringmap",
          "partial": "Key",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Base.html#t:Key1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.StringMap.Base",
          "name": "StringMap",
          "package": "data-stringmap",
          "source": "src/Data-StringMap-Base.html#StringMap",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data StringMap Base",
          "module": "Data.StringMap.Base",
          "name": "StringMap",
          "package": "data-stringmap",
          "partial": "String Map",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Base.html#t:StringMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.StringMap.Base",
          "name": "StringMapVisitor",
          "package": "data-stringmap",
          "source": "src/Data-StringMap-Base.html#StringMapVisitor",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data StringMap Base",
          "module": "Data.StringMap.Base",
          "name": "StringMapVisitor",
          "package": "data-stringmap",
          "partial": "String Map Visitor",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Base.html#t:StringMapVisitor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(min(n,L))\u003c/em\u003e Find the value at a key. Calls error when the element can not be found.\n\u003c/p\u003e",
          "module": "[\"Data.StringMap.Base\",\"Data.StringMap.Lazy\",\"Data.StringMap.Strict\",\"Data.StringMap\"]",
          "name": "(!)",
          "package": "data-stringmap",
          "signature": "StringMap a -\u003e Key -\u003e a",
          "source": "src/Data-StringMap-Base.html#%21",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Base.html#v:-33-\",\"http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Lazy.html#v:-33-\",\"http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Strict.html#v:-33-\",\"http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap.html#v:-33-\"]"
        },
        "index": {
          "description": "min Find the value at key Calls error when the element can not be found",
          "hierarchy": "Data StringMap Base",
          "module": "Data.StringMap.Base",
          "name": "(!) !",
          "normalized": "StringMap a-\u003eKey-\u003ea",
          "package": "data-stringmap",
          "signature": "StringMap a-\u003eKey-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Base.html#v:-33-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.StringMap.Base",
          "name": "BrSeL",
          "package": "data-stringmap",
          "signature": "BrSeL",
          "source": "src/Data-StringMap-Base.html#StringMap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data StringMap Base",
          "module": "Data.StringMap.Base",
          "name": "BrSeL",
          "package": "data-stringmap",
          "partial": "Br Se",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Base.html#v:BrSeL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.StringMap.Base",
          "name": "BrSeq",
          "package": "data-stringmap",
          "signature": "BrSeq",
          "source": "src/Data-StringMap-Base.html#StringMap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data StringMap Base",
          "module": "Data.StringMap.Base",
          "name": "BrSeq",
          "package": "data-stringmap",
          "partial": "Br Seq",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Base.html#v:BrSeq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.StringMap.Base",
          "name": "BrVal",
          "package": "data-stringmap",
          "signature": "BrVal",
          "source": "src/Data-StringMap-Base.html#StringMap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data StringMap Base",
          "module": "Data.StringMap.Base",
          "name": "BrVal",
          "package": "data-stringmap",
          "partial": "Br Val",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Base.html#v:BrVal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.StringMap.Base",
          "name": "Branch",
          "package": "data-stringmap",
          "signature": "Branch",
          "source": "src/Data-StringMap-Base.html#StringMap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data StringMap Base",
          "module": "Data.StringMap.Base",
          "name": "Branch",
          "package": "data-stringmap",
          "partial": "Branch",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Base.html#v:Branch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.StringMap.Base",
          "name": "C1",
          "package": "data-stringmap",
          "signature": "C1 !Sym !Key1",
          "source": "src/Data-StringMap-Base.html#Key1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data StringMap Base",
          "module": "Data.StringMap.Base",
          "name": "C1",
          "package": "data-stringmap",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Base.html#v:C1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.StringMap.Base",
          "name": "C2",
          "package": "data-stringmap",
          "signature": "C2 !Sym !Sym !Key1",
          "source": "src/Data-StringMap-Base.html#Key1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data StringMap Base",
          "module": "Data.StringMap.Base",
          "name": "C2",
          "package": "data-stringmap",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Base.html#v:C2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.StringMap.Base",
          "name": "C3",
          "package": "data-stringmap",
          "signature": "C3 !Sym !Sym !Sym !Key1",
          "source": "src/Data-StringMap-Base.html#Key1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data StringMap Base",
          "module": "Data.StringMap.Base",
          "name": "C3",
          "package": "data-stringmap",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Base.html#v:C3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.StringMap.Base",
          "name": "C4",
          "package": "data-stringmap",
          "signature": "C4 !Sym !Sym !Sym !Sym !Key1",
          "source": "src/Data-StringMap-Base.html#Key1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data StringMap Base",
          "module": "Data.StringMap.Base",
          "name": "C4",
          "package": "data-stringmap",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Base.html#v:C4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.StringMap.Base",
          "name": "Empty",
          "package": "data-stringmap",
          "signature": "Empty",
          "source": "src/Data-StringMap-Base.html#StringMap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data StringMap Base",
          "module": "Data.StringMap.Base",
          "name": "Empty",
          "package": "data-stringmap",
          "partial": "Empty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Base.html#v:Empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.StringMap.Base",
          "name": "Last",
          "package": "data-stringmap",
          "signature": "Last",
          "source": "src/Data-StringMap-Base.html#StringMap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data StringMap Base",
          "module": "Data.StringMap.Base",
          "name": "Last",
          "package": "data-stringmap",
          "partial": "Last",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Base.html#v:Last"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.StringMap.Base",
          "name": "Leaf",
          "package": "data-stringmap",
          "signature": "Leaf",
          "source": "src/Data-StringMap-Base.html#StringMap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data StringMap Base",
          "module": "Data.StringMap.Base",
          "name": "Leaf",
          "package": "data-stringmap",
          "partial": "Leaf",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Base.html#v:Leaf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.StringMap.Base",
          "name": "LsSeL",
          "package": "data-stringmap",
          "signature": "LsSeL",
          "source": "src/Data-StringMap-Base.html#StringMap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data StringMap Base",
          "module": "Data.StringMap.Base",
          "name": "LsSeL",
          "package": "data-stringmap",
          "partial": "Ls Se",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Base.html#v:LsSeL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.StringMap.Base",
          "name": "LsSeq",
          "package": "data-stringmap",
          "signature": "LsSeq",
          "source": "src/Data-StringMap-Base.html#StringMap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data StringMap Base",
          "module": "Data.StringMap.Base",
          "name": "LsSeq",
          "package": "data-stringmap",
          "partial": "Ls Seq",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Base.html#v:LsSeq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.StringMap.Base",
          "name": "LsVal",
          "package": "data-stringmap",
          "signature": "LsVal",
          "source": "src/Data-StringMap-Base.html#StringMap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data StringMap Base",
          "module": "Data.StringMap.Base",
          "name": "LsVal",
          "package": "data-stringmap",
          "partial": "Ls Val",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Base.html#v:LsVal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.StringMap.Base",
          "name": "Nil",
          "package": "data-stringmap",
          "signature": "Nil",
          "source": "src/Data-StringMap-Base.html#Key1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data StringMap Base",
          "module": "Data.StringMap.Base",
          "name": "Nil",
          "package": "data-stringmap",
          "partial": "Nil",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Base.html#v:Nil"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.StringMap.Base",
          "name": "PTV",
          "package": "data-stringmap",
          "signature": "PTV",
          "source": "src/Data-StringMap-Base.html#StringMapVisitor",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data StringMap Base",
          "module": "Data.StringMap.Base",
          "name": "PTV",
          "package": "data-stringmap",
          "partial": "PTV",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Base.html#v:PTV"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.StringMap.Base",
          "name": "S1",
          "package": "data-stringmap",
          "signature": "S1 !Sym",
          "source": "src/Data-StringMap-Base.html#Key1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data StringMap Base",
          "module": "Data.StringMap.Base",
          "name": "S1",
          "package": "data-stringmap",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Base.html#v:S1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.StringMap.Base",
          "name": "S2",
          "package": "data-stringmap",
          "signature": "S2 !Sym !Sym",
          "source": "src/Data-StringMap-Base.html#Key1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data StringMap Base",
          "module": "Data.StringMap.Base",
          "name": "S2",
          "package": "data-stringmap",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Base.html#v:S2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.StringMap.Base",
          "name": "S3",
          "package": "data-stringmap",
          "signature": "S3 !Sym !Sym !Sym",
          "source": "src/Data-StringMap-Base.html#Key1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data StringMap Base",
          "module": "Data.StringMap.Base",
          "name": "S3",
          "package": "data-stringmap",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Base.html#v:S3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.StringMap.Base",
          "name": "S4",
          "package": "data-stringmap",
          "signature": "S4 !Sym !Sym !Sym !Sym",
          "source": "src/Data-StringMap-Base.html#Key1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data StringMap Base",
          "module": "Data.StringMap.Base",
          "name": "S4",
          "package": "data-stringmap",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Base.html#v:S4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.StringMap.Base",
          "name": "Val",
          "package": "data-stringmap",
          "signature": "Val",
          "source": "src/Data-StringMap-Base.html#StringMap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data StringMap Base",
          "module": "Data.StringMap.Base",
          "name": "Val",
          "package": "data-stringmap",
          "partial": "Val",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Base.html#v:Val"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.StringMap.Base\",\"Data.StringMap\"]",
          "name": "adjust",
          "package": "data-stringmap",
          "signature": "(a -\u003e a) -\u003e Key -\u003e StringMap a -\u003e StringMap a",
          "source": "src/Data-StringMap-Base.html#adjust",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Base.html#v:adjust\",\"http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap.html#v:adjust\"]"
        },
        "index": {
          "hierarchy": "Data StringMap Base",
          "module": "Data.StringMap.Base",
          "name": "adjust",
          "normalized": "(a-\u003ea)-\u003eKey-\u003eStringMap a-\u003eStringMap a",
          "package": "data-stringmap",
          "signature": "(a-\u003ea)-\u003eKey-\u003eStringMap a-\u003eStringMap a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Base.html#v:adjust"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.StringMap.Base\",\"Data.StringMap\"]",
          "name": "adjustWithKey",
          "package": "data-stringmap",
          "signature": "(Key -\u003e a -\u003e a) -\u003e Key -\u003e StringMap a -\u003e StringMap a",
          "source": "src/Data-StringMap-Base.html#adjustWithKey",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Base.html#v:adjustWithKey\",\"http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap.html#v:adjustWithKey\"]"
        },
        "index": {
          "hierarchy": "Data StringMap Base",
          "module": "Data.StringMap.Base",
          "name": "adjustWithKey",
          "normalized": "(Key-\u003ea-\u003ea)-\u003eKey-\u003eStringMap a-\u003eStringMap a",
          "package": "data-stringmap",
          "partial": "With Key",
          "signature": "(Key-\u003ea-\u003ea)-\u003eKey-\u003eStringMap a-\u003eStringMap a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Base.html#v:adjustWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.StringMap.Base",
          "name": "branch",
          "package": "data-stringmap",
          "signature": "Sym -\u003e StringMap v -\u003e StringMap v -\u003e StringMap v",
          "source": "src/Data-StringMap-Base.html#branch",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data StringMap Base",
          "module": "Data.StringMap.Base",
          "name": "branch",
          "normalized": "Sym-\u003eStringMap a-\u003eStringMap a-\u003eStringMap a",
          "package": "data-stringmap",
          "signature": "Sym-\u003eStringMap v-\u003eStringMap v-\u003eStringMap v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Base.html#v:branch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.StringMap.Base",
          "name": "child",
          "package": "data-stringmap",
          "signature": "(StringMap v)",
          "source": "src/Data-StringMap-Base.html#StringMap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data StringMap Base",
          "module": "Data.StringMap.Base",
          "name": "child",
          "package": "data-stringmap",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Base.html#v:child"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.StringMap.Base",
          "name": "cutAllPx'",
          "package": "data-stringmap",
          "signature": "StringSet -\u003e StringMap a -\u003e StringMap a",
          "source": "src/Data-StringMap-Base.html#cutAllPx%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data StringMap Base",
          "module": "Data.StringMap.Base",
          "name": "cutAllPx'",
          "normalized": "StringSet-\u003eStringMap a-\u003eStringMap a",
          "package": "data-stringmap",
          "partial": "All Px'",
          "signature": "StringSet-\u003eStringMap a-\u003eStringMap a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Base.html#v:cutAllPx-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.StringMap.Base",
          "name": "cutPx'",
          "package": "data-stringmap",
          "signature": "StringSet -\u003e StringMap a -\u003e StringMap a",
          "source": "src/Data-StringMap-Base.html#cutPx%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data StringMap Base",
          "module": "Data.StringMap.Base",
          "name": "cutPx'",
          "normalized": "StringSet-\u003eStringMap a-\u003eStringMap a",
          "package": "data-stringmap",
          "partial": "Px'",
          "signature": "StringSet-\u003eStringMap a-\u003eStringMap a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Base.html#v:cutPx-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.StringMap.Base",
          "name": "deepNorm",
          "package": "data-stringmap",
          "signature": "StringMap v -\u003e StringMap v",
          "source": "src/Data-StringMap-Base.html#deepNorm",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data StringMap Base",
          "module": "Data.StringMap.Base",
          "name": "deepNorm",
          "normalized": "StringMap a-\u003eStringMap a",
          "package": "data-stringmap",
          "partial": "Norm",
          "signature": "StringMap v-\u003eStringMap v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Base.html#v:deepNorm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.StringMap.Base",
          "name": "deepUnNorm",
          "package": "data-stringmap",
          "signature": "StringMap v -\u003e StringMap v",
          "source": "src/Data-StringMap-Base.html#deepUnNorm",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data StringMap Base",
          "module": "Data.StringMap.Base",
          "name": "deepUnNorm",
          "normalized": "StringMap a-\u003eStringMap a",
          "package": "data-stringmap",
          "partial": "Un Norm",
          "signature": "StringMap v-\u003eStringMap v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Base.html#v:deepUnNorm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(min(n,L))\u003c/em\u003e Delete an element from the map. If no element exists for the key, the map\n remains unchanged.\n\u003c/p\u003e",
          "module": "[\"Data.StringMap.Base\",\"Data.StringMap.Lazy\",\"Data.StringMap\"]",
          "name": "delete",
          "package": "data-stringmap",
          "signature": "Key -\u003e StringMap a -\u003e StringMap a",
          "source": "src/Data-StringMap-Base.html#delete",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Base.html#v:delete\",\"http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Lazy.html#v:delete\",\"http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap.html#v:delete\"]"
        },
        "index": {
          "description": "min Delete an element from the map If no element exists for the key the map remains unchanged",
          "hierarchy": "Data StringMap Base",
          "module": "Data.StringMap.Base",
          "name": "delete",
          "normalized": "Key-\u003eStringMap a-\u003eStringMap a",
          "package": "data-stringmap",
          "signature": "Key-\u003eStringMap a-\u003eStringMap a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Base.html#v:delete"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003e(O(min(n,m))\u003c/em\u003e Difference between two string maps (based on keys).\n\u003c/p\u003e",
          "module": "[\"Data.StringMap.Base\",\"Data.StringMap.Lazy\",\"Data.StringMap.Strict\",\"Data.StringMap\"]",
          "name": "difference",
          "package": "data-stringmap",
          "signature": "StringMap a -\u003e StringMap b -\u003e StringMap a",
          "source": "src/Data-StringMap-Base.html#difference",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Base.html#v:difference\",\"http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Lazy.html#v:difference\",\"http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Strict.html#v:difference\",\"http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap.html#v:difference\"]"
        },
        "index": {
          "description": "min Difference between two string maps based on keys",
          "hierarchy": "Data StringMap Base",
          "module": "Data.StringMap.Base",
          "name": "difference",
          "normalized": "StringMap a-\u003eStringMap b-\u003eStringMap a",
          "package": "data-stringmap",
          "signature": "StringMap a-\u003eStringMap b-\u003eStringMap a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Base.html#v:difference"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003e(O(min(n,m))\u003c/em\u003e \u003ccode\u003e\u003ca\u003edifference\u003c/a\u003e\u003c/code\u003e with a combining function. If the combining function always returns\n \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e, this is equal to proper set difference.\n\u003c/p\u003e",
          "module": "[\"Data.StringMap.Base\",\"Data.StringMap.Lazy\",\"Data.StringMap.Strict\",\"Data.StringMap\"]",
          "name": "differenceWith",
          "package": "data-stringmap",
          "signature": "(a -\u003e b -\u003e Maybe a) -\u003e StringMap a -\u003e StringMap b -\u003e StringMap a",
          "source": "src/Data-StringMap-Base.html#differenceWith",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Base.html#v:differenceWith\",\"http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Lazy.html#v:differenceWith\",\"http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Strict.html#v:differenceWith\",\"http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap.html#v:differenceWith\"]"
        },
        "index": {
          "description": "min difference with combining function If the combining function always returns Nothing this is equal to proper set difference",
          "hierarchy": "Data StringMap Base",
          "module": "Data.StringMap.Base",
          "name": "differenceWith",
          "normalized": "(a-\u003eb-\u003eMaybe a)-\u003eStringMap a-\u003eStringMap b-\u003eStringMap a",
          "package": "data-stringmap",
          "partial": "With",
          "signature": "(a-\u003eb-\u003eMaybe a)-\u003eStringMap a-\u003eStringMap b-\u003eStringMap a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Base.html#v:differenceWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(min(n,m))\u003c/em\u003e \u003ccode\u003e\u003ca\u003edifference\u003c/a\u003e\u003c/code\u003e with a combining function, including the key. If two equal keys are\n encountered, the combining function is applied to the key and both values. If it returns\n \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e, the element is discarded, if it returns \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e a value, the element is updated\n with the new value.\n\u003c/p\u003e",
          "module": "[\"Data.StringMap.Base\",\"Data.StringMap.Lazy\",\"Data.StringMap.Strict\",\"Data.StringMap\"]",
          "name": "differenceWithKey",
          "package": "data-stringmap",
          "signature": "(Key -\u003e a -\u003e b -\u003e Maybe a) -\u003e StringMap a -\u003e StringMap b -\u003e StringMap a",
          "source": "src/Data-StringMap-Base.html#differenceWithKey",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Base.html#v:differenceWithKey\",\"http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Lazy.html#v:differenceWithKey\",\"http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Strict.html#v:differenceWithKey\",\"http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap.html#v:differenceWithKey\"]"
        },
        "index": {
          "description": "min difference with combining function including the key If two equal keys are encountered the combining function is applied to the key and both values If it returns Nothing the element is discarded if it returns Just value the element is updated with the new value",
          "hierarchy": "Data StringMap Base",
          "module": "Data.StringMap.Base",
          "name": "differenceWithKey",
          "normalized": "(Key-\u003ea-\u003eb-\u003eMaybe a)-\u003eStringMap a-\u003eStringMap b-\u003eStringMap a",
          "package": "data-stringmap",
          "partial": "With Key",
          "signature": "(Key-\u003ea-\u003eb-\u003eMaybe a)-\u003eStringMap a-\u003eStringMap b-\u003eStringMap a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Base.html#v:differenceWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Returns all values.\n\u003c/p\u003e",
          "module": "[\"Data.StringMap.Base\",\"Data.StringMap.Lazy\",\"Data.StringMap.Strict\",\"Data.StringMap\"]",
          "name": "elems",
          "package": "data-stringmap",
          "signature": "StringMap a -\u003e [a]",
          "source": "src/Data-StringMap-Base.html#elems",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Base.html#v:elems\",\"http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Lazy.html#v:elems\",\"http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Strict.html#v:elems\",\"http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap.html#v:elems\"]"
        },
        "index": {
          "description": "Returns all values",
          "hierarchy": "Data StringMap Base",
          "module": "Data.StringMap.Base",
          "name": "elems",
          "normalized": "StringMap a-\u003e[a]",
          "package": "data-stringmap",
          "signature": "StringMap a-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Base.html#v:elems"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates an empty string map\n\u003c/p\u003e\u003cpre\u003e null $ empty == True\n\u003c/pre\u003e",
          "module": "[\"Data.StringMap.Base\",\"Data.StringMap.Lazy\",\"Data.StringMap.Strict\",\"Data.StringMap\"]",
          "name": "empty",
          "package": "data-stringmap",
          "signature": "StringMap v",
          "source": "src/Data-StringMap-Base.html#empty",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Base.html#v:empty\",\"http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Lazy.html#v:empty\",\"http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Strict.html#v:empty\",\"http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap.html#v:empty\"]"
        },
        "index": {
          "description": "Creates an empty string map null empty True",
          "hierarchy": "Data StringMap Base",
          "module": "Data.StringMap.Base",
          "name": "empty",
          "package": "data-stringmap",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Base.html#v:empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(min(n,L))\u003c/em\u003e Find the value associated with a key. The function will \u003ccode\u003ereturn\u003c/code\u003e the result in\n the monad or \u003ccode\u003efail\u003c/code\u003e in it if the key isn't in the map.\n\u003c/p\u003e",
          "module": "[\"Data.StringMap.Base\",\"Data.StringMap.Lazy\",\"Data.StringMap.Strict\",\"Data.StringMap\"]",
          "name": "findWithDefault",
          "package": "data-stringmap",
          "signature": "a -\u003e Key -\u003e StringMap a -\u003e a",
          "source": "src/Data-StringMap-Base.html#findWithDefault",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Base.html#v:findWithDefault\",\"http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Lazy.html#v:findWithDefault\",\"http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Strict.html#v:findWithDefault\",\"http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap.html#v:findWithDefault\"]"
        },
        "index": {
          "description": "min Find the value associated with key The function will return the result in the monad or fail in it if the key isn in the map",
          "hierarchy": "Data StringMap Base",
          "module": "Data.StringMap.Base",
          "name": "findWithDefault",
          "normalized": "a-\u003eKey-\u003eStringMap a-\u003ea",
          "package": "data-stringmap",
          "partial": "With Default",
          "signature": "a-\u003eKey-\u003eStringMap a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Base.html#v:findWithDefault"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: use \u003ccode\u003efoldr\u003c/code\u003e instead\n\u003c/p\u003e\u003c/div\u003e\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Fold over all values in the map.\n\u003c/p\u003e",
          "module": "[\"Data.StringMap.Base\",\"Data.StringMap.Lazy\",\"Data.StringMap.Strict\",\"Data.StringMap\"]",
          "name": "fold",
          "package": "data-stringmap",
          "signature": "(a -\u003e b -\u003e b) -\u003e b -\u003e StringMap a -\u003e b",
          "source": "src/Data-StringMap-Base.html#fold",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Base.html#v:fold\",\"http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Lazy.html#v:fold\",\"http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Strict.html#v:fold\",\"http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap.html#v:fold\"]"
        },
        "index": {
          "description": "Deprecated use foldr instead Fold over all values in the map",
          "hierarchy": "Data StringMap Base",
          "module": "Data.StringMap.Base",
          "name": "fold",
          "normalized": "(a-\u003eb-\u003eb)-\u003eb-\u003eStringMap a-\u003eb",
          "package": "data-stringmap",
          "signature": "(a-\u003eb-\u003eb)-\u003eb-\u003eStringMap a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Base.html#v:fold"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: use \u003ccode\u003efoldrWithKey\u003c/code\u003e instead\n\u003c/p\u003e\u003c/div\u003e\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Fold over all key/value pairs in the map.\n\u003c/p\u003e",
          "module": "[\"Data.StringMap.Base\",\"Data.StringMap.Lazy\",\"Data.StringMap.Strict\",\"Data.StringMap\"]",
          "name": "foldWithKey",
          "package": "data-stringmap",
          "signature": "(Key -\u003e a -\u003e b -\u003e b) -\u003e b -\u003e StringMap a -\u003e b",
          "source": "src/Data-StringMap-Base.html#foldWithKey",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Base.html#v:foldWithKey\",\"http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Lazy.html#v:foldWithKey\",\"http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Strict.html#v:foldWithKey\",\"http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap.html#v:foldWithKey\"]"
        },
        "index": {
          "description": "Deprecated use foldrWithKey instead Fold over all key value pairs in the map",
          "hierarchy": "Data StringMap Base",
          "module": "Data.StringMap.Base",
          "name": "foldWithKey",
          "normalized": "(Key-\u003ea-\u003eb-\u003eb)-\u003eb-\u003eStringMap a-\u003eb",
          "package": "data-stringmap",
          "partial": "With Key",
          "signature": "(Key-\u003ea-\u003eb-\u003eb)-\u003eb-\u003eStringMap a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Base.html#v:foldWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Left fold over all values in the map.\n\u003c/p\u003e",
          "module": "[\"Data.StringMap.Base\",\"Data.StringMap.Strict\",\"Data.StringMap\"]",
          "name": "foldl",
          "package": "data-stringmap",
          "signature": "(b -\u003e a -\u003e b) -\u003e b -\u003e StringMap a -\u003e b",
          "source": "src/Data-StringMap-Base.html#foldl",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Base.html#v:foldl\",\"http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Strict.html#v:foldl\",\"http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap.html#v:foldl\"]"
        },
        "index": {
          "description": "Left fold over all values in the map",
          "hierarchy": "Data StringMap Base",
          "module": "Data.StringMap.Base",
          "name": "foldl",
          "normalized": "(a-\u003eb-\u003ea)-\u003ea-\u003eStringMap b-\u003ea",
          "package": "data-stringmap",
          "signature": "(b-\u003ea-\u003eb)-\u003eb-\u003eStringMap a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Base.html#v:foldl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Left fold over all keys and values in the map.\n\u003c/p\u003e",
          "module": "[\"Data.StringMap.Base\",\"Data.StringMap.Strict\",\"Data.StringMap\"]",
          "name": "foldlWithKey",
          "package": "data-stringmap",
          "signature": "(b -\u003e Key -\u003e a -\u003e b) -\u003e b -\u003e StringMap a -\u003e b",
          "source": "src/Data-StringMap-Base.html#foldlWithKey",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Base.html#v:foldlWithKey\",\"http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Strict.html#v:foldlWithKey\",\"http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap.html#v:foldlWithKey\"]"
        },
        "index": {
          "description": "Left fold over all keys and values in the map",
          "hierarchy": "Data StringMap Base",
          "module": "Data.StringMap.Base",
          "name": "foldlWithKey",
          "normalized": "(a-\u003eKey-\u003eb-\u003ea)-\u003ea-\u003eStringMap b-\u003ea",
          "package": "data-stringmap",
          "partial": "With Key",
          "signature": "(b-\u003eKey-\u003ea-\u003eb)-\u003eb-\u003eStringMap a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Base.html#v:foldlWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Right fold over all values in the map.\n\u003c/p\u003e",
          "module": "[\"Data.StringMap.Base\",\"Data.StringMap.Strict\",\"Data.StringMap\"]",
          "name": "foldr",
          "package": "data-stringmap",
          "signature": "(a -\u003e b -\u003e b) -\u003e b -\u003e StringMap a -\u003e b",
          "source": "src/Data-StringMap-Base.html#foldr",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Base.html#v:foldr\",\"http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Strict.html#v:foldr\",\"http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap.html#v:foldr\"]"
        },
        "index": {
          "description": "Right fold over all values in the map",
          "hierarchy": "Data StringMap Base",
          "module": "Data.StringMap.Base",
          "name": "foldr",
          "normalized": "(a-\u003eb-\u003eb)-\u003eb-\u003eStringMap a-\u003eb",
          "package": "data-stringmap",
          "signature": "(a-\u003eb-\u003eb)-\u003eb-\u003eStringMap a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Base.html#v:foldr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Right fold over all keys and values in the map.\n\u003c/p\u003e",
          "module": "[\"Data.StringMap.Base\",\"Data.StringMap.Strict\",\"Data.StringMap\"]",
          "name": "foldrWithKey",
          "package": "data-stringmap",
          "signature": "(Key -\u003e a -\u003e b -\u003e b) -\u003e b -\u003e StringMap a -\u003e b",
          "source": "src/Data-StringMap-Base.html#foldrWithKey",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Base.html#v:foldrWithKey\",\"http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Strict.html#v:foldrWithKey\",\"http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap.html#v:foldrWithKey\"]"
        },
        "index": {
          "description": "Right fold over all keys and values in the map",
          "hierarchy": "Data StringMap Base",
          "module": "Data.StringMap.Base",
          "name": "foldrWithKey",
          "normalized": "(Key-\u003ea-\u003eb-\u003eb)-\u003eb-\u003eStringMap a-\u003eb",
          "package": "data-stringmap",
          "partial": "With Key",
          "signature": "(Key-\u003ea-\u003eb-\u003eb)-\u003eb-\u003eStringMap a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Base.html#v:foldrWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.StringMap.Base",
          "name": "fromKey",
          "package": "data-stringmap",
          "signature": "Key -\u003e Key1",
          "source": "src/Data-StringMap-Base.html#fromKey",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data StringMap Base",
          "module": "Data.StringMap.Base",
          "name": "fromKey",
          "normalized": "Key-\u003eKey",
          "package": "data-stringmap",
          "partial": "Key",
          "signature": "Key-\u003eKey",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Base.html#v:fromKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Creates a string map from a list of key/value pairs.\n\u003c/p\u003e",
          "module": "[\"Data.StringMap.Base\",\"Data.StringMap.Lazy\",\"Data.StringMap\"]",
          "name": "fromList",
          "package": "data-stringmap",
          "signature": "[(Key, a)] -\u003e StringMap a",
          "source": "src/Data-StringMap-Base.html#fromList",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Base.html#v:fromList\",\"http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Lazy.html#v:fromList\",\"http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap.html#v:fromList\"]"
        },
        "index": {
          "description": "Creates string map from list of key value pairs",
          "hierarchy": "Data StringMap Base",
          "module": "Data.StringMap.Base",
          "name": "fromList",
          "normalized": "[(Key,a)]-\u003eStringMap a",
          "package": "data-stringmap",
          "partial": "List",
          "signature": "[(Key,a)]-\u003eStringMap a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Base.html#v:fromList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Convert an ordinary map into a string map\n\u003c/p\u003e",
          "module": "[\"Data.StringMap.Base\",\"Data.StringMap.Lazy\",\"Data.StringMap.Strict\",\"Data.StringMap\"]",
          "name": "fromMap",
          "package": "data-stringmap",
          "signature": "Map Key a -\u003e StringMap a",
          "source": "src/Data-StringMap-Base.html#fromMap",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Base.html#v:fromMap\",\"http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Lazy.html#v:fromMap\",\"http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Strict.html#v:fromMap\",\"http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap.html#v:fromMap\"]"
        },
        "index": {
          "description": "Convert an ordinary map into string map",
          "hierarchy": "Data StringMap Base",
          "module": "Data.StringMap.Base",
          "name": "fromMap",
          "normalized": "Map Key a-\u003eStringMap a",
          "package": "data-stringmap",
          "partial": "Map",
          "signature": "Map Key a-\u003eStringMap a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Base.html#v:fromMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(min(n,L))\u003c/em\u003e Insert a new key and value into the map. If the key is already present in\n the map, the associated value will be replaced with the new value.\n\u003c/p\u003e",
          "module": "[\"Data.StringMap.Base\",\"Data.StringMap.Lazy\",\"Data.StringMap\"]",
          "name": "insert",
          "package": "data-stringmap",
          "signature": "Key -\u003e a -\u003e StringMap a -\u003e StringMap a",
          "source": "src/Data-StringMap-Base.html#insert",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Base.html#v:insert\",\"http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Lazy.html#v:insert\",\"http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap.html#v:insert\"]"
        },
        "index": {
          "description": "min Insert new key and value into the map If the key is already present in the map the associated value will be replaced with the new value",
          "hierarchy": "Data StringMap Base",
          "module": "Data.StringMap.Base",
          "name": "insert",
          "normalized": "Key-\u003ea-\u003eStringMap a-\u003eStringMap a",
          "package": "data-stringmap",
          "signature": "Key-\u003ea-\u003eStringMap a-\u003eStringMap a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Base.html#v:insert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(min(n,L))\u003c/em\u003e Insert with a combining function. If the key is already present in the map,\n the value of \u003ccode\u003ef new_value old_value\u003c/code\u003e will be inserted.\n\u003c/p\u003e",
          "module": "[\"Data.StringMap.Base\",\"Data.StringMap.Lazy\",\"Data.StringMap\"]",
          "name": "insertWith",
          "package": "data-stringmap",
          "signature": "(a -\u003e a -\u003e a) -\u003e Key -\u003e a -\u003e StringMap a -\u003e StringMap a",
          "source": "src/Data-StringMap-Base.html#insertWith",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Base.html#v:insertWith\",\"http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Lazy.html#v:insertWith\",\"http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap.html#v:insertWith\"]"
        },
        "index": {
          "description": "min Insert with combining function If the key is already present in the map the value of new value old value will be inserted",
          "hierarchy": "Data StringMap Base",
          "module": "Data.StringMap.Base",
          "name": "insertWith",
          "normalized": "(a-\u003ea-\u003ea)-\u003eKey-\u003ea-\u003eStringMap a-\u003eStringMap a",
          "package": "data-stringmap",
          "partial": "With",
          "signature": "(a-\u003ea-\u003ea)-\u003eKey-\u003ea-\u003eStringMap a-\u003eStringMap a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Base.html#v:insertWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(min(n,L))\u003c/em\u003e Insert with a combining function. If the key is already present in the map,\n the value of \u003ccode\u003ef key new_value old_value\u003c/code\u003e will be inserted.\n\u003c/p\u003e",
          "module": "[\"Data.StringMap.Base\",\"Data.StringMap.Lazy\",\"Data.StringMap\"]",
          "name": "insertWithKey",
          "package": "data-stringmap",
          "signature": "(Key -\u003e a -\u003e a -\u003e a) -\u003e Key -\u003e a -\u003e StringMap a -\u003e StringMap a",
          "source": "src/Data-StringMap-Base.html#insertWithKey",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Base.html#v:insertWithKey\",\"http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Lazy.html#v:insertWithKey\",\"http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap.html#v:insertWithKey\"]"
        },
        "index": {
          "description": "min Insert with combining function If the key is already present in the map the value of key new value old value will be inserted",
          "hierarchy": "Data StringMap Base",
          "module": "Data.StringMap.Base",
          "name": "insertWithKey",
          "normalized": "(Key-\u003ea-\u003ea-\u003ea)-\u003eKey-\u003ea-\u003eStringMap a-\u003eStringMap a",
          "package": "data-stringmap",
          "partial": "With Key",
          "signature": "(Key-\u003ea-\u003ea-\u003ea)-\u003eKey-\u003ea-\u003eStringMap a-\u003eStringMap a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Base.html#v:insertWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(min(n,m))\u003c/em\u003e intersection is required to allow all major set operations:\n    AND = \u003ccode\u003e\u003ca\u003eintersection\u003c/a\u003e\u003c/code\u003e\n    OR = \u003ccode\u003e\u003ca\u003eunion\u003c/a\u003e\u003c/code\u003e\n    AND NOT = \u003ccode\u003e\u003ca\u003edifference\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "[\"Data.StringMap.Base\",\"Data.StringMap.Lazy\",\"Data.StringMap.Strict\",\"Data.StringMap\"]",
          "name": "intersection",
          "package": "data-stringmap",
          "signature": "StringMap a -\u003e StringMap a -\u003e StringMap a",
          "source": "src/Data-StringMap-Base.html#intersection",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Base.html#v:intersection\",\"http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Lazy.html#v:intersection\",\"http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Strict.html#v:intersection\",\"http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap.html#v:intersection\"]"
        },
        "index": {
          "description": "min intersection is required to allow all major set operations AND intersection OR union AND NOT difference",
          "hierarchy": "Data StringMap Base",
          "module": "Data.StringMap.Base",
          "name": "intersection",
          "normalized": "StringMap a-\u003eStringMap a-\u003eStringMap a",
          "package": "data-stringmap",
          "signature": "StringMap a-\u003eStringMap a-\u003eStringMap a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Base.html#v:intersection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(min(n,m))\u003c/em\u003e \u003ccode\u003e\u003ca\u003eintersection\u003c/a\u003e\u003c/code\u003e with a modification function\n\u003c/p\u003e",
          "module": "[\"Data.StringMap.Base\",\"Data.StringMap.Lazy\",\"Data.StringMap.Strict\",\"Data.StringMap\"]",
          "name": "intersectionWith",
          "package": "data-stringmap",
          "signature": "(a -\u003e b -\u003e c) -\u003e StringMap a -\u003e StringMap b -\u003e StringMap c",
          "source": "src/Data-StringMap-Base.html#intersectionWith",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Base.html#v:intersectionWith\",\"http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Lazy.html#v:intersectionWith\",\"http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Strict.html#v:intersectionWith\",\"http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap.html#v:intersectionWith\"]"
        },
        "index": {
          "description": "min intersection with modification function",
          "hierarchy": "Data StringMap Base",
          "module": "Data.StringMap.Base",
          "name": "intersectionWith",
          "normalized": "(a-\u003eb-\u003ec)-\u003eStringMap a-\u003eStringMap b-\u003eStringMap c",
          "package": "data-stringmap",
          "partial": "With",
          "signature": "(a-\u003eb-\u003ec)-\u003eStringMap a-\u003eStringMap b-\u003eStringMap c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Base.html#v:intersectionWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Returns all keys.\n\u003c/p\u003e",
          "module": "[\"Data.StringMap.Base\",\"Data.StringMap.Lazy\",\"Data.StringMap.Strict\",\"Data.StringMap\"]",
          "name": "keys",
          "package": "data-stringmap",
          "signature": "StringMap a -\u003e [Key]",
          "source": "src/Data-StringMap-Base.html#keys",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Base.html#v:keys\",\"http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Lazy.html#v:keys\",\"http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Strict.html#v:keys\",\"http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap.html#v:keys\"]"
        },
        "index": {
          "description": "Returns all keys",
          "hierarchy": "Data StringMap Base",
          "module": "Data.StringMap.Base",
          "name": "keys",
          "normalized": "StringMap a-\u003e[Key]",
          "package": "data-stringmap",
          "signature": "StringMap a-\u003e[Key]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Base.html#v:keys"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(min(n,L))\u003c/em\u003e Find the value associated with a key. The function will \u003ccode\u003ereturn\u003c/code\u003e the result in\n the monad or \u003ccode\u003efail\u003c/code\u003e in it if the key isn't in the map.\n\u003c/p\u003e",
          "module": "[\"Data.StringMap.Base\",\"Data.StringMap.Lazy\",\"Data.StringMap.Strict\",\"Data.StringMap\"]",
          "name": "lookup",
          "package": "data-stringmap",
          "signature": "Key -\u003e StringMap a -\u003e m a",
          "source": "src/Data-StringMap-Base.html#lookup",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Base.html#v:lookup\",\"http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Lazy.html#v:lookup\",\"http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Strict.html#v:lookup\",\"http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap.html#v:lookup\"]"
        },
        "index": {
          "description": "min Find the value associated with key The function will return the result in the monad or fail in it if the key isn in the map",
          "hierarchy": "Data StringMap Base",
          "module": "Data.StringMap.Base",
          "name": "lookup",
          "normalized": "Key-\u003eStringMap a-\u003eb a",
          "package": "data-stringmap",
          "signature": "Key-\u003eStringMap a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Base.html#v:lookup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eremove all entries from the map with key less than the argument key\n\u003c/p\u003e",
          "module": "Data.StringMap.Base",
          "name": "lookupGE",
          "package": "data-stringmap",
          "signature": "Key -\u003e StringMap a -\u003e StringMap a",
          "source": "src/Data-StringMap-Base.html#lookupGE",
          "type": "function"
        },
        "index": {
          "description": "remove all entries from the map with key less than the argument key",
          "hierarchy": "Data StringMap Base",
          "module": "Data.StringMap.Base",
          "name": "lookupGE",
          "normalized": "Key-\u003eStringMap a-\u003eStringMap a",
          "package": "data-stringmap",
          "partial": "GE",
          "signature": "Key-\u003eStringMap a-\u003eStringMap a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Base.html#v:lookupGE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eremove all entries from the map with keys not having the argument key\n as prefix and are larger than the argument key\n\u003c/p\u003e",
          "module": "Data.StringMap.Base",
          "name": "lookupLE",
          "package": "data-stringmap",
          "signature": "Key -\u003e StringMap a -\u003e StringMap a",
          "source": "src/Data-StringMap-Base.html#lookupLE",
          "type": "function"
        },
        "index": {
          "description": "remove all entries from the map with keys not having the argument key as prefix and are larger than the argument key",
          "hierarchy": "Data StringMap Base",
          "module": "Data.StringMap.Base",
          "name": "lookupLE",
          "normalized": "Key-\u003eStringMap a-\u003eStringMap a",
          "package": "data-stringmap",
          "partial": "LE",
          "signature": "Key-\u003eStringMap a-\u003eStringMap a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Base.html#v:lookupLE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCombination of \u003ccode\u003e\u003ca\u003elookupLE\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003elookupGE\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cpre\u003e keys $ lookupRange \"a\" \"b\" $ fromList $ zip [\"\", \"a\", \"ab\", \"b\", \"ba\", \"c\"] [1..] = [\"a\",\"ab\",\"b\"]\n\u003c/pre\u003e\u003cp\u003eFor all keys in \u003ccode\u003ek = keys $ lookupRange lb ub m\u003c/code\u003e, this property holts true: \u003ccode\u003ek \u003e= ub && k \u003c= lb\u003c/code\u003e\n\u003c/p\u003e",
          "module": "[\"Data.StringMap.Base\",\"Data.StringMap.Lazy\",\"Data.StringMap.Strict\",\"Data.StringMap\"]",
          "name": "lookupRange",
          "package": "data-stringmap",
          "signature": "Key -\u003e Key -\u003e StringMap a -\u003e StringMap a",
          "source": "src/Data-StringMap-Base.html#lookupRange",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Base.html#v:lookupRange\",\"http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Lazy.html#v:lookupRange\",\"http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Strict.html#v:lookupRange\",\"http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap.html#v:lookupRange\"]"
        },
        "index": {
          "description": "Combination of lookupLE and lookupGE keys lookupRange fromList zip ab ba ab For all keys in keys lookupRange lb ub this property holts true ub lb",
          "hierarchy": "Data StringMap Base",
          "module": "Data.StringMap.Base",
          "name": "lookupRange",
          "normalized": "Key-\u003eKey-\u003eStringMap a-\u003eStringMap a",
          "package": "data-stringmap",
          "partial": "Range",
          "signature": "Key-\u003eKey-\u003eStringMap a-\u003eStringMap a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Base.html#v:lookupRange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Map a function over all values in the string map.\n\u003c/p\u003e",
          "module": "[\"Data.StringMap.Base\",\"Data.StringMap.Lazy\",\"Data.StringMap\"]",
          "name": "map",
          "package": "data-stringmap",
          "signature": "(a -\u003e b) -\u003e StringMap a -\u003e StringMap b",
          "source": "src/Data-StringMap-Base.html#map",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Base.html#v:map\",\"http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Lazy.html#v:map\",\"http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap.html#v:map\"]"
        },
        "index": {
          "description": "Map function over all values in the string map",
          "hierarchy": "Data StringMap Base",
          "module": "Data.StringMap.Base",
          "name": "map",
          "normalized": "(a-\u003eb)-\u003eStringMap a-\u003eStringMap b",
          "package": "data-stringmap",
          "signature": "(a-\u003eb)-\u003eStringMap a-\u003eStringMap b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Base.html#v:map"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMonadic \u003ccode\u003e\u003ca\u003emap\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "[\"Data.StringMap.Base\",\"Data.StringMap.Lazy\",\"Data.StringMap\"]",
          "name": "mapM",
          "package": "data-stringmap",
          "signature": "(a -\u003e m b) -\u003e StringMap a -\u003e m (StringMap b)",
          "source": "src/Data-StringMap-Base.html#mapM",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Base.html#v:mapM\",\"http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Lazy.html#v:mapM\",\"http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap.html#v:mapM\"]"
        },
        "index": {
          "description": "Monadic map",
          "hierarchy": "Data StringMap Base",
          "module": "Data.StringMap.Base",
          "name": "mapM",
          "normalized": "(a-\u003eb c)-\u003eStringMap a-\u003eb(StringMap c)",
          "package": "data-stringmap",
          "signature": "(a-\u003em b)-\u003eStringMap a-\u003em(StringMap b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Base.html#v:mapM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Updates a value or deletes the element,\n if the result of the updating function is \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Data.StringMap.Base\",\"Data.StringMap.Lazy\",\"Data.StringMap\"]",
          "name": "mapMaybe",
          "package": "data-stringmap",
          "signature": "(a -\u003e Maybe b) -\u003e StringMap a -\u003e StringMap b",
          "source": "src/Data-StringMap-Base.html#mapMaybe",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Base.html#v:mapMaybe\",\"http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Lazy.html#v:mapMaybe\",\"http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap.html#v:mapMaybe\"]"
        },
        "index": {
          "description": "Updates value or deletes the element if the result of the updating function is Nothing",
          "hierarchy": "Data StringMap Base",
          "module": "Data.StringMap.Base",
          "name": "mapMaybe",
          "normalized": "(a-\u003eMaybe b)-\u003eStringMap a-\u003eStringMap b",
          "package": "data-stringmap",
          "partial": "Maybe",
          "signature": "(a-\u003eMaybe b)-\u003eStringMap a-\u003eStringMap b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Base.html#v:mapMaybe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Same as \u003ccode\u003e\u003ca\u003emap\u003c/a\u003e\u003c/code\u003e, but with an additional paramter\n\u003c/p\u003e",
          "module": "[\"Data.StringMap.Base\",\"Data.StringMap.Lazy\",\"Data.StringMap\"]",
          "name": "mapWithKey",
          "package": "data-stringmap",
          "signature": "(Key -\u003e a -\u003e b) -\u003e StringMap a -\u003e StringMap b",
          "source": "src/Data-StringMap-Base.html#mapWithKey",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Base.html#v:mapWithKey\",\"http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Lazy.html#v:mapWithKey\",\"http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap.html#v:mapWithKey\"]"
        },
        "index": {
          "description": "Same as map but with an additional paramter",
          "hierarchy": "Data StringMap Base",
          "module": "Data.StringMap.Base",
          "name": "mapWithKey",
          "normalized": "(Key-\u003ea-\u003eb)-\u003eStringMap a-\u003eStringMap b",
          "package": "data-stringmap",
          "partial": "With Key",
          "signature": "(Key-\u003ea-\u003eb)-\u003eStringMap a-\u003eStringMap b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Base.html#v:mapWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMonadic \u003ccode\u003e\u003ca\u003emapWithKey\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "[\"Data.StringMap.Base\",\"Data.StringMap.Lazy\",\"Data.StringMap\"]",
          "name": "mapWithKeyM",
          "package": "data-stringmap",
          "signature": "(Key -\u003e a -\u003e m b) -\u003e StringMap a -\u003e m (StringMap b)",
          "source": "src/Data-StringMap-Base.html#mapWithKeyM",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Base.html#v:mapWithKeyM\",\"http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Lazy.html#v:mapWithKeyM\",\"http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap.html#v:mapWithKeyM\"]"
        },
        "index": {
          "description": "Monadic mapWithKey",
          "hierarchy": "Data StringMap Base",
          "module": "Data.StringMap.Base",
          "name": "mapWithKeyM",
          "normalized": "(Key-\u003ea-\u003eb c)-\u003eStringMap a-\u003eb(StringMap c)",
          "package": "data-stringmap",
          "partial": "With Key",
          "signature": "(Key-\u003ea-\u003em b)-\u003eStringMap a-\u003em(StringMap b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Base.html#v:mapWithKeyM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(min(n,L))\u003c/em\u003e Is the key a member of the map?\n\u003c/p\u003e",
          "module": "[\"Data.StringMap.Base\",\"Data.StringMap.Lazy\",\"Data.StringMap.Strict\",\"Data.StringMap\"]",
          "name": "member",
          "package": "data-stringmap",
          "signature": "Key -\u003e StringMap a -\u003e Bool",
          "source": "src/Data-StringMap-Base.html#member",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Base.html#v:member\",\"http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Lazy.html#v:member\",\"http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Strict.html#v:member\",\"http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap.html#v:member\"]"
        },
        "index": {
          "description": "min Is the key member of the map",
          "hierarchy": "Data StringMap Base",
          "module": "Data.StringMap.Base",
          "name": "member",
          "normalized": "Key-\u003eStringMap a-\u003eBool",
          "package": "data-stringmap",
          "signature": "Key-\u003eStringMap a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Base.html#v:member"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.StringMap.Base",
          "name": "next",
          "package": "data-stringmap",
          "signature": "(StringMap v)",
          "source": "src/Data-StringMap-Base.html#StringMap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data StringMap Base",
          "module": "Data.StringMap.Base",
          "name": "next",
          "package": "data-stringmap",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Base.html#v:next"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.StringMap.Base",
          "name": "norm",
          "package": "data-stringmap",
          "signature": "StringMap v -\u003e StringMap v",
          "source": "src/Data-StringMap-Base.html#norm",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data StringMap Base",
          "module": "Data.StringMap.Base",
          "name": "norm",
          "normalized": "StringMap a-\u003eStringMap a",
          "package": "data-stringmap",
          "signature": "StringMap v-\u003eStringMap v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Base.html#v:norm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.StringMap.Base",
          "name": "normError'",
          "package": "data-stringmap",
          "signature": "String -\u003e String -\u003e a",
          "source": "src/Data-StringMap-Base.html#normError%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data StringMap Base",
          "module": "Data.StringMap.Base",
          "name": "normError'",
          "normalized": "String-\u003eString-\u003ea",
          "package": "data-stringmap",
          "partial": "Error'",
          "signature": "String-\u003eString-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Base.html#v:normError-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Is the map empty?\n\u003c/p\u003e",
          "module": "[\"Data.StringMap.Base\",\"Data.StringMap.Lazy\",\"Data.StringMap.Strict\",\"Data.StringMap\"]",
          "name": "null",
          "package": "data-stringmap",
          "signature": "StringMap a -\u003e Bool",
          "source": "src/Data-StringMap-Base.html#null",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Base.html#v:null\",\"http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Lazy.html#v:null\",\"http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Strict.html#v:null\",\"http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap.html#v:null\"]"
        },
        "index": {
          "description": "Is the map empty",
          "hierarchy": "Data StringMap Base",
          "module": "Data.StringMap.Base",
          "name": "null",
          "normalized": "StringMap a-\u003eBool",
          "package": "data-stringmap",
          "signature": "StringMap a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Base.html#v:null"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(max(L,R))\u003c/em\u003e Find all values where the string is a prefix of the key.\n\u003c/p\u003e",
          "module": "[\"Data.StringMap.Base\",\"Data.StringMap.Lazy\",\"Data.StringMap.Strict\",\"Data.StringMap\"]",
          "name": "prefixFind",
          "package": "data-stringmap",
          "signature": "Key -\u003e StringMap a -\u003e [a]",
          "source": "src/Data-StringMap-Base.html#prefixFind",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Base.html#v:prefixFind\",\"http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Lazy.html#v:prefixFind\",\"http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Strict.html#v:prefixFind\",\"http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap.html#v:prefixFind\"]"
        },
        "index": {
          "description": "max Find all values where the string is prefix of the key",
          "hierarchy": "Data StringMap Base",
          "module": "Data.StringMap.Base",
          "name": "prefixFind",
          "normalized": "Key-\u003eStringMap a-\u003e[a]",
          "package": "data-stringmap",
          "partial": "Find",
          "signature": "Key-\u003eStringMap a-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Base.html#v:prefixFind"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: use \u003ccode\u003e \u003ccode\u003e\u003ca\u003etoList\u003c/a\u003e\u003c/code\u003e . \u003ccode\u003eprefixFilter\u003c/code\u003e \u003c/code\u003e instead\n\u003c/p\u003e\u003c/div\u003e\u003cp\u003e\u003cem\u003eO(max(L,R))\u003c/em\u003e Find all values where the string is a prefix of the key and include the keys\n in the result.\n\u003c/p\u003e",
          "module": "[\"Data.StringMap.Base\",\"Data.StringMap.Lazy\",\"Data.StringMap.Strict\",\"Data.StringMap\"]",
          "name": "prefixFindWithKey",
          "package": "data-stringmap",
          "signature": "Key -\u003e StringMap a -\u003e [(Key, a)]",
          "source": "src/Data-StringMap-Base.html#prefixFindWithKey",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Base.html#v:prefixFindWithKey\",\"http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Lazy.html#v:prefixFindWithKey\",\"http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Strict.html#v:prefixFindWithKey\",\"http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap.html#v:prefixFindWithKey\"]"
        },
        "index": {
          "description": "Deprecated use toList prefixFilter instead max Find all values where the string is prefix of the key and include the keys in the result",
          "hierarchy": "Data StringMap Base",
          "module": "Data.StringMap.Base",
          "name": "prefixFindWithKey",
          "normalized": "Key-\u003eStringMap a-\u003e[(Key,a)]",
          "package": "data-stringmap",
          "partial": "Find With Key",
          "signature": "Key-\u003eStringMap a-\u003e[(Key,a)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Base.html#v:prefixFindWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: use \u003ccode\u003e \u003ccode\u003e\u003ca\u003etoListShortestFirst\u003c/a\u003e\u003c/code\u003e . \u003ccode\u003eprefixFilter\u003c/code\u003e \u003c/code\u003e instead\n\u003c/p\u003e\u003c/div\u003e\u003cp\u003e\u003cem\u003eO(max(L,R))\u003c/em\u003e Find all values where the string is a prefix of the key and include the keys\n in the result. The result list contains short words first\n\u003c/p\u003e",
          "module": "[\"Data.StringMap.Base\",\"Data.StringMap.Lazy\",\"Data.StringMap.Strict\",\"Data.StringMap\"]",
          "name": "prefixFindWithKeyBF",
          "package": "data-stringmap",
          "signature": "Key -\u003e StringMap a -\u003e [(Key, a)]",
          "source": "src/Data-StringMap-Base.html#prefixFindWithKeyBF",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Base.html#v:prefixFindWithKeyBF\",\"http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Lazy.html#v:prefixFindWithKeyBF\",\"http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Strict.html#v:prefixFindWithKeyBF\",\"http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap.html#v:prefixFindWithKeyBF\"]"
        },
        "index": {
          "description": "Deprecated use toListShortestFirst prefixFilter instead max Find all values where the string is prefix of the key and include the keys in the result The result list contains short words first",
          "hierarchy": "Data StringMap Base",
          "module": "Data.StringMap.Base",
          "name": "prefixFindWithKeyBF",
          "normalized": "Key-\u003eStringMap a-\u003e[(Key,a)]",
          "package": "data-stringmap",
          "partial": "Find With Key BF",
          "signature": "Key-\u003eStringMap a-\u003e[(Key,a)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Base.html#v:prefixFindWithKeyBF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Create a map with a single element.\n\u003c/p\u003e",
          "module": "[\"Data.StringMap.Base\",\"Data.StringMap.Lazy\",\"Data.StringMap\"]",
          "name": "singleton",
          "package": "data-stringmap",
          "signature": "Key -\u003e a -\u003e StringMap a",
          "source": "src/Data-StringMap-Base.html#singleton",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Base.html#v:singleton\",\"http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Lazy.html#v:singleton\",\"http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap.html#v:singleton\"]"
        },
        "index": {
          "description": "Create map with single element",
          "hierarchy": "Data StringMap Base",
          "module": "Data.StringMap.Base",
          "name": "singleton",
          "normalized": "Key-\u003ea-\u003eStringMap a",
          "package": "data-stringmap",
          "signature": "Key-\u003ea-\u003eStringMap a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Base.html#v:singleton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.StringMap.Base",
          "name": "siseq",
          "package": "data-stringmap",
          "signature": "Key1 -\u003e StringMap v -\u003e StringMap v",
          "source": "src/Data-StringMap-Base.html#siseq",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data StringMap Base",
          "module": "Data.StringMap.Base",
          "name": "siseq",
          "normalized": "Key-\u003eStringMap a-\u003eStringMap a",
          "package": "data-stringmap",
          "signature": "Key-\u003eStringMap v-\u003eStringMap v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Base.html#v:siseq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e The number of elements.\n\u003c/p\u003e",
          "module": "[\"Data.StringMap.Base\",\"Data.StringMap.Lazy\",\"Data.StringMap.Strict\",\"Data.StringMap\"]",
          "name": "size",
          "package": "data-stringmap",
          "signature": "StringMap a -\u003e Int",
          "source": "src/Data-StringMap-Base.html#size",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Base.html#v:size\",\"http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Lazy.html#v:size\",\"http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Strict.html#v:size\",\"http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap.html#v:size\"]"
        },
        "index": {
          "description": "The number of elements",
          "hierarchy": "Data StringMap Base",
          "module": "Data.StringMap.Base",
          "name": "size",
          "normalized": "StringMap a-\u003eInt",
          "package": "data-stringmap",
          "signature": "StringMap a-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Base.html#v:size"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.StringMap.Base",
          "name": "sym",
          "package": "data-stringmap",
          "signature": "Sym",
          "source": "src/Data-StringMap-Base.html#StringMap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data StringMap Base",
          "module": "Data.StringMap.Base",
          "name": "sym",
          "package": "data-stringmap",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Base.html#v:sym"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.StringMap.Base",
          "name": "syms",
          "package": "data-stringmap",
          "signature": "Key1",
          "source": "src/Data-StringMap-Base.html#StringMap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data StringMap Base",
          "module": "Data.StringMap.Base",
          "name": "syms",
          "package": "data-stringmap",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Base.html#v:syms"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.StringMap.Base",
          "name": "toKey",
          "package": "data-stringmap",
          "signature": "Key1 -\u003e Key",
          "source": "src/Data-StringMap-Base.html#toKey",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data StringMap Base",
          "module": "Data.StringMap.Base",
          "name": "toKey",
          "normalized": "Key-\u003eKey",
          "package": "data-stringmap",
          "partial": "Key",
          "signature": "Key-\u003eKey",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Base.html#v:toKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Returns all elements as list of key value pairs,\n\u003c/p\u003e",
          "module": "[\"Data.StringMap.Base\",\"Data.StringMap.Lazy\",\"Data.StringMap.Strict\",\"Data.StringMap\"]",
          "name": "toList",
          "package": "data-stringmap",
          "signature": "StringMap a -\u003e [(Key, a)]",
          "source": "src/Data-StringMap-Base.html#toList",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Base.html#v:toList\",\"http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Lazy.html#v:toList\",\"http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Strict.html#v:toList\",\"http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap.html#v:toList\"]"
        },
        "index": {
          "description": "Returns all elements as list of key value pairs",
          "hierarchy": "Data StringMap Base",
          "module": "Data.StringMap.Base",
          "name": "toList",
          "normalized": "StringMap a-\u003e[(Key,a)]",
          "package": "data-stringmap",
          "partial": "List",
          "signature": "StringMap a-\u003e[(Key,a)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Base.html#v:toList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ereturns all key-value pairs in breadth first order (short words first)\n this enables prefix search with upper bounds on the size of the result set\n e.g. \u003ccode\u003e search ... \u003e\u003e\u003e toListShortestFirst \u003e\u003e\u003e take 1000 \u003c/code\u003e will give the 1000 shortest words\n found in the result set and will ignore all long words\n\u003c/p\u003e\u003cp\u003etoList is derived from the following code found in the net when searching haskell breadth first search\n\u003c/p\u003e\u003cp\u003eHaskell Standard Libraray Implementation\n\u003c/p\u003e\u003cpre\u003e br :: Tree a -\u003e [a]\n br t = map rootLabel $\n        concat $\n        takeWhile (not . null) $\n        iterate (concatMap subForest) [t]\n\u003c/pre\u003e",
          "module": "[\"Data.StringMap.Base\",\"Data.StringMap.Lazy\",\"Data.StringMap.Strict\",\"Data.StringMap\"]",
          "name": "toListShortestFirst",
          "package": "data-stringmap",
          "signature": "StringMap v -\u003e [(Key, v)]",
          "source": "src/Data-StringMap-Base.html#toListShortestFirst",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Base.html#v:toListShortestFirst\",\"http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Lazy.html#v:toListShortestFirst\",\"http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Strict.html#v:toListShortestFirst\",\"http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap.html#v:toListShortestFirst\"]"
        },
        "index": {
          "description": "returns all key-value pairs in breadth first order short words first this enables prefix search with upper bounds on the size of the result set e.g search toListShortestFirst take will give the shortest words found in the result set and will ignore all long words toList is derived from the following code found in the net when searching haskell breadth first search Haskell Standard Libraray Implementation br Tree br map rootLabel concat takeWhile not null iterate concatMap subForest",
          "hierarchy": "Data StringMap Base",
          "module": "Data.StringMap.Base",
          "name": "toListShortestFirst",
          "normalized": "StringMap a-\u003e[(Key,a)]",
          "package": "data-stringmap",
          "partial": "List Shortest First",
          "signature": "StringMap v-\u003e[(Key,v)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Base.html#v:toListShortestFirst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Convert into an ordinary map.\n\u003c/p\u003e",
          "module": "[\"Data.StringMap.Base\",\"Data.StringMap.Lazy\",\"Data.StringMap.Strict\",\"Data.StringMap\"]",
          "name": "toMap",
          "package": "data-stringmap",
          "signature": "StringMap a -\u003e Map Key a",
          "source": "src/Data-StringMap-Base.html#toMap",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Base.html#v:toMap\",\"http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Lazy.html#v:toMap\",\"http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Strict.html#v:toMap\",\"http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap.html#v:toMap\"]"
        },
        "index": {
          "description": "Convert into an ordinary map",
          "hierarchy": "Data StringMap Base",
          "module": "Data.StringMap.Base",
          "name": "toMap",
          "normalized": "StringMap a-\u003eMap Key a",
          "package": "data-stringmap",
          "partial": "Map",
          "signature": "StringMap a-\u003eMap Key a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Base.html#v:toMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.StringMap.Base",
          "name": "tree",
          "package": "data-stringmap",
          "signature": "(StringMap v)",
          "source": "src/Data-StringMap-Base.html#StringMap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data StringMap Base",
          "module": "Data.StringMap.Base",
          "name": "tree",
          "package": "data-stringmap",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Base.html#v:tree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.StringMap.Base",
          "name": "unNorm",
          "package": "data-stringmap",
          "signature": "StringMap v -\u003e StringMap v",
          "source": "src/Data-StringMap-Base.html#unNorm",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data StringMap Base",
          "module": "Data.StringMap.Base",
          "name": "unNorm",
          "normalized": "StringMap a-\u003eStringMap a",
          "package": "data-stringmap",
          "partial": "Norm",
          "signature": "StringMap v-\u003eStringMap v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Base.html#v:unNorm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n+m)\u003c/em\u003e Left-biased union of two maps. It prefers the first map when duplicate keys are\n encountered, i.e. (\u003ccode\u003e\u003ca\u003eunion\u003c/a\u003e\u003c/code\u003e == \u003ccode\u003e\u003ca\u003eunionWith\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003econst\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "[\"Data.StringMap.Base\",\"Data.StringMap.Lazy\",\"Data.StringMap\"]",
          "name": "union",
          "package": "data-stringmap",
          "signature": "StringMap a -\u003e StringMap a -\u003e StringMap a",
          "source": "src/Data-StringMap-Base.html#union",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Base.html#v:union\",\"http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Lazy.html#v:union\",\"http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap.html#v:union\"]"
        },
        "index": {
          "description": "Left-biased union of two maps It prefers the first map when duplicate keys are encountered i.e union unionWith const",
          "hierarchy": "Data StringMap Base",
          "module": "Data.StringMap.Base",
          "name": "union",
          "normalized": "StringMap a-\u003eStringMap a-\u003eStringMap a",
          "package": "data-stringmap",
          "signature": "StringMap a-\u003eStringMap a-\u003eStringMap a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Base.html#v:union"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneralisation of \u003ccode\u003e\u003ca\u003eunionWith\u003c/a\u003e\u003c/code\u003e. The second map may have another attribute type than the first one.\n Conversion and merging of the maps is done in a single step.\n This is much more efficient than mapping the second map and then call \u003ccode\u003e\u003ca\u003eunionWith\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cpre\u003eunionWithConf to ( x y -\u003e x \u003ccode\u003eop\u003c/code\u003e to y) m1 m2 = unionWith op m1 (fmap to m2)\u003c/pre\u003e",
          "module": "[\"Data.StringMap.Base\",\"Data.StringMap.Lazy\",\"Data.StringMap\"]",
          "name": "unionMapWith",
          "package": "data-stringmap",
          "signature": "(b -\u003e a) -\u003e (a -\u003e b -\u003e a) -\u003e StringMap a -\u003e StringMap b -\u003e StringMap a",
          "source": "src/Data-StringMap-Base.html#unionMapWith",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Base.html#v:unionMapWith\",\"http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Lazy.html#v:unionMapWith\",\"http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap.html#v:unionMapWith\"]"
        },
        "index": {
          "description": "Generalisation of unionWith The second map may have another attribute type than the first one Conversion and merging of the maps is done in single step This is much more efficient than mapping the second map and then call unionWith unionWithConf to op to m1 m2 unionWith op m1 fmap to m2",
          "hierarchy": "Data StringMap Base",
          "module": "Data.StringMap.Base",
          "name": "unionMapWith",
          "normalized": "(a-\u003eb)-\u003e(b-\u003ea-\u003eb)-\u003eStringMap b-\u003eStringMap a-\u003eStringMap b",
          "package": "data-stringmap",
          "partial": "Map With",
          "signature": "(b-\u003ea)-\u003e(a-\u003eb-\u003ea)-\u003eStringMap a-\u003eStringMap b-\u003eStringMap a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Base.html#v:unionMapWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n+m)\u003c/em\u003e \u003ccode\u003e\u003ca\u003eunion\u003c/a\u003e\u003c/code\u003e with a combining function.\n\u003c/p\u003e",
          "module": "[\"Data.StringMap.Base\",\"Data.StringMap.Lazy\",\"Data.StringMap\"]",
          "name": "unionWith",
          "package": "data-stringmap",
          "signature": "(a -\u003e a -\u003e a) -\u003e StringMap a -\u003e StringMap a -\u003e StringMap a",
          "source": "src/Data-StringMap-Base.html#unionWith",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Base.html#v:unionWith\",\"http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Lazy.html#v:unionWith\",\"http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap.html#v:unionWith\"]"
        },
        "index": {
          "description": "union with combining function",
          "hierarchy": "Data StringMap Base",
          "module": "Data.StringMap.Base",
          "name": "unionWith",
          "normalized": "(a-\u003ea-\u003ea)-\u003eStringMap a-\u003eStringMap a-\u003eStringMap a",
          "package": "data-stringmap",
          "partial": "With",
          "signature": "(a-\u003ea-\u003ea)-\u003eStringMap a-\u003eStringMap a-\u003eStringMap a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Base.html#v:unionWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n+m)\u003c/em\u003e \u003ccode\u003e\u003ca\u003eunion\u003c/a\u003e\u003c/code\u003e with a combining function, including the key.\n\u003c/p\u003e",
          "module": "[\"Data.StringMap.Base\",\"Data.StringMap.Lazy\",\"Data.StringMap.Strict\",\"Data.StringMap\"]",
          "name": "unionWithKey",
          "package": "data-stringmap",
          "signature": "(Key -\u003e a -\u003e a -\u003e a) -\u003e StringMap a -\u003e StringMap a -\u003e StringMap a",
          "source": "src/Data-StringMap-Base.html#unionWithKey",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Base.html#v:unionWithKey\",\"http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Lazy.html#v:unionWithKey\",\"http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Strict.html#v:unionWithKey\",\"http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap.html#v:unionWithKey\"]"
        },
        "index": {
          "description": "union with combining function including the key",
          "hierarchy": "Data StringMap Base",
          "module": "Data.StringMap.Base",
          "name": "unionWithKey",
          "normalized": "(Key-\u003ea-\u003ea-\u003ea)-\u003eStringMap a-\u003eStringMap a-\u003eStringMap a",
          "package": "data-stringmap",
          "partial": "With Key",
          "signature": "(Key-\u003ea-\u003ea-\u003ea)-\u003eStringMap a-\u003eStringMap a-\u003eStringMap a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Base.html#v:unionWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(min(n,L))\u003c/em\u003e Updates a value at a given key (if that key is in the trie) or deletes the\n element if the result of the updating function is \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e. If the key is not found, the trie\n is returned unchanged.\n\u003c/p\u003e",
          "module": "[\"Data.StringMap.Base\",\"Data.StringMap.Lazy\",\"Data.StringMap\"]",
          "name": "update",
          "package": "data-stringmap",
          "signature": "(a -\u003e Maybe a) -\u003e Key -\u003e StringMap a -\u003e StringMap a",
          "source": "src/Data-StringMap-Base.html#update",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Base.html#v:update\",\"http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Lazy.html#v:update\",\"http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap.html#v:update\"]"
        },
        "index": {
          "description": "min Updates value at given key if that key is in the trie or deletes the element if the result of the updating function is Nothing If the key is not found the trie is returned unchanged",
          "hierarchy": "Data StringMap Base",
          "module": "Data.StringMap.Base",
          "name": "update",
          "normalized": "(a-\u003eMaybe a)-\u003eKey-\u003eStringMap a-\u003eStringMap a",
          "package": "data-stringmap",
          "signature": "(a-\u003eMaybe a)-\u003eKey-\u003eStringMap a-\u003eStringMap a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Base.html#v:update"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(min(n,L))\u003c/em\u003e Updates a value at a given key (if that key is in the trie) or deletes the\n element if the result of the updating function is \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e. If the key is not found, the trie\n is returned unchanged.\n\u003c/p\u003e",
          "module": "[\"Data.StringMap.Base\",\"Data.StringMap.Lazy\",\"Data.StringMap\"]",
          "name": "updateWithKey",
          "package": "data-stringmap",
          "signature": "(Key -\u003e a -\u003e Maybe a) -\u003e Key -\u003e StringMap a -\u003e StringMap a",
          "source": "src/Data-StringMap-Base.html#updateWithKey",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Base.html#v:updateWithKey\",\"http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Lazy.html#v:updateWithKey\",\"http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap.html#v:updateWithKey\"]"
        },
        "index": {
          "description": "min Updates value at given key if that key is in the trie or deletes the element if the result of the updating function is Nothing If the key is not found the trie is returned unchanged",
          "hierarchy": "Data StringMap Base",
          "module": "Data.StringMap.Base",
          "name": "updateWithKey",
          "normalized": "(Key-\u003ea-\u003eMaybe a)-\u003eKey-\u003eStringMap a-\u003eStringMap a",
          "package": "data-stringmap",
          "partial": "With Key",
          "signature": "(Key-\u003ea-\u003eMaybe a)-\u003eKey-\u003eStringMap a-\u003eStringMap a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Base.html#v:updateWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.StringMap.Base",
          "name": "v_branch",
          "package": "data-stringmap",
          "signature": "Sym -\u003e b -\u003e b -\u003e b",
          "source": "src/Data-StringMap-Base.html#StringMapVisitor",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data StringMap Base",
          "module": "Data.StringMap.Base",
          "name": "v_branch",
          "normalized": "Sym-\u003ea-\u003ea-\u003ea",
          "package": "data-stringmap",
          "signature": "Sym-\u003eb-\u003eb-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Base.html#v:v_branch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.StringMap.Base",
          "name": "v_brsel",
          "package": "data-stringmap",
          "signature": "Key1 -\u003e a -\u003e b -\u003e b",
          "source": "src/Data-StringMap-Base.html#StringMapVisitor",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data StringMap Base",
          "module": "Data.StringMap.Base",
          "name": "v_brsel",
          "normalized": "Key-\u003ea-\u003eb-\u003eb",
          "package": "data-stringmap",
          "signature": "Key-\u003ea-\u003eb-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Base.html#v:v_brsel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.StringMap.Base",
          "name": "v_brseq",
          "package": "data-stringmap",
          "signature": "Key1 -\u003e b -\u003e b -\u003e b",
          "source": "src/Data-StringMap-Base.html#StringMapVisitor",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data StringMap Base",
          "module": "Data.StringMap.Base",
          "name": "v_brseq",
          "normalized": "Key-\u003ea-\u003ea-\u003ea",
          "package": "data-stringmap",
          "signature": "Key-\u003eb-\u003eb-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Base.html#v:v_brseq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.StringMap.Base",
          "name": "v_brval",
          "package": "data-stringmap",
          "signature": "Sym -\u003e a -\u003e b -\u003e b",
          "source": "src/Data-StringMap-Base.html#StringMapVisitor",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data StringMap Base",
          "module": "Data.StringMap.Base",
          "name": "v_brval",
          "normalized": "Sym-\u003ea-\u003eb-\u003eb",
          "package": "data-stringmap",
          "signature": "Sym-\u003ea-\u003eb-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Base.html#v:v_brval"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.StringMap.Base",
          "name": "v_empty",
          "package": "data-stringmap",
          "signature": "b",
          "source": "src/Data-StringMap-Base.html#StringMapVisitor",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data StringMap Base",
          "module": "Data.StringMap.Base",
          "name": "v_empty",
          "package": "data-stringmap",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Base.html#v:v_empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.StringMap.Base",
          "name": "v_last",
          "package": "data-stringmap",
          "signature": "Sym -\u003e b -\u003e b",
          "source": "src/Data-StringMap-Base.html#StringMapVisitor",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data StringMap Base",
          "module": "Data.StringMap.Base",
          "name": "v_last",
          "normalized": "Sym-\u003ea-\u003ea",
          "package": "data-stringmap",
          "signature": "Sym-\u003eb-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Base.html#v:v_last"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.StringMap.Base",
          "name": "v_leaf",
          "package": "data-stringmap",
          "signature": "a -\u003e b",
          "source": "src/Data-StringMap-Base.html#StringMapVisitor",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data StringMap Base",
          "module": "Data.StringMap.Base",
          "name": "v_leaf",
          "normalized": "a-\u003eb",
          "package": "data-stringmap",
          "signature": "a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Base.html#v:v_leaf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.StringMap.Base",
          "name": "v_lssel",
          "package": "data-stringmap",
          "signature": "Key1 -\u003e a -\u003e b",
          "source": "src/Data-StringMap-Base.html#StringMapVisitor",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data StringMap Base",
          "module": "Data.StringMap.Base",
          "name": "v_lssel",
          "normalized": "Key-\u003ea-\u003eb",
          "package": "data-stringmap",
          "signature": "Key-\u003ea-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Base.html#v:v_lssel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.StringMap.Base",
          "name": "v_lsseq",
          "package": "data-stringmap",
          "signature": "Key1 -\u003e b -\u003e b",
          "source": "src/Data-StringMap-Base.html#StringMapVisitor",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data StringMap Base",
          "module": "Data.StringMap.Base",
          "name": "v_lsseq",
          "normalized": "Key-\u003ea-\u003ea",
          "package": "data-stringmap",
          "signature": "Key-\u003eb-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Base.html#v:v_lsseq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.StringMap.Base",
          "name": "v_lsval",
          "package": "data-stringmap",
          "signature": "Sym -\u003e a -\u003e b",
          "source": "src/Data-StringMap-Base.html#StringMapVisitor",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data StringMap Base",
          "module": "Data.StringMap.Base",
          "name": "v_lsval",
          "normalized": "Sym-\u003ea-\u003eb",
          "package": "data-stringmap",
          "signature": "Sym-\u003ea-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Base.html#v:v_lsval"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.StringMap.Base",
          "name": "v_val",
          "package": "data-stringmap",
          "signature": "a -\u003e b -\u003e b",
          "source": "src/Data-StringMap-Base.html#StringMapVisitor",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data StringMap Base",
          "module": "Data.StringMap.Base",
          "name": "v_val",
          "normalized": "a-\u003eb-\u003eb",
          "package": "data-stringmap",
          "signature": "a-\u003eb-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Base.html#v:v_val"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.StringMap.Base",
          "name": "val",
          "package": "data-stringmap",
          "signature": "v -\u003e StringMap v -\u003e StringMap v",
          "source": "src/Data-StringMap-Base.html#val",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data StringMap Base",
          "module": "Data.StringMap.Base",
          "name": "val",
          "normalized": "a-\u003eStringMap a-\u003eStringMap a",
          "package": "data-stringmap",
          "signature": "v-\u003eStringMap v-\u003eStringMap v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Base.html#v:val"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Extract the value of a node (if there is one)\n\u003c/p\u003e",
          "module": "[\"Data.StringMap.Base\",\"Data.StringMap.Lazy\",\"Data.StringMap.Strict\",\"Data.StringMap\"]",
          "name": "value",
          "package": "data-stringmap",
          "signature": "StringMap a -\u003e m a",
          "source": "src/Data-StringMap-Base.html#value",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Base.html#v:value\",\"http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Lazy.html#v:value\",\"http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Strict.html#v:value\",\"http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap.html#v:value\"]"
        },
        "index": {
          "description": "Extract the value of node if there is one",
          "hierarchy": "Data StringMap Base",
          "module": "Data.StringMap.Base",
          "name": "value",
          "normalized": "StringMap a-\u003eb a",
          "package": "data-stringmap",
          "signature": "StringMap a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Base.html#v:value"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.StringMap.Base",
          "name": "value'",
          "package": "data-stringmap",
          "signature": "v",
          "source": "src/Data-StringMap-Base.html#StringMap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data StringMap Base",
          "module": "Data.StringMap.Base",
          "name": "value'",
          "package": "data-stringmap",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Base.html#v:value-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Extract the value of a node or return a default value if no value exists.\n\u003c/p\u003e",
          "module": "[\"Data.StringMap.Base\",\"Data.StringMap.Lazy\",\"Data.StringMap.Strict\",\"Data.StringMap\"]",
          "name": "valueWithDefault",
          "package": "data-stringmap",
          "signature": "a -\u003e StringMap a -\u003e a",
          "source": "src/Data-StringMap-Base.html#valueWithDefault",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Base.html#v:valueWithDefault\",\"http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Lazy.html#v:valueWithDefault\",\"http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Strict.html#v:valueWithDefault\",\"http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap.html#v:valueWithDefault\"]"
        },
        "index": {
          "description": "Extract the value of node or return default value if no value exists",
          "hierarchy": "Data StringMap Base",
          "module": "Data.StringMap.Base",
          "name": "valueWithDefault",
          "normalized": "a-\u003eStringMap a-\u003ea",
          "package": "data-stringmap",
          "partial": "With Default",
          "signature": "a-\u003eStringMap a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Base.html#v:valueWithDefault"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.StringMap.Base",
          "name": "visit",
          "package": "data-stringmap",
          "signature": "StringMapVisitor a b -\u003e StringMap a -\u003e b",
          "source": "src/Data-StringMap-Base.html#visit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data StringMap Base",
          "module": "Data.StringMap.Base",
          "name": "visit",
          "normalized": "StringMapVisitor a b-\u003eStringMap a-\u003eb",
          "package": "data-stringmap",
          "signature": "StringMapVisitor a b-\u003eStringMap a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Base.html#v:visit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e2-dimensional range search of numeric values, e.g. pairs of Ints or Doubles\n  using StringMap and prefix search\n\u003c/p\u003e\u003cp\u003eAssumption: The coordinates, e.g. Int values are converted into strings\n  of equal length such that the ordering is preserved by the lexikographic ordering.\n\u003c/p\u003e\u003cp\u003eExample: convert an Int (\u003e= 0) into a String\n  \u003ccode\u003eintToString = reverse . take 19 . (++ repeat '0') . reverse . show\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eDo this for both coordinates of a tuple\n  \u003ccode\u003e(x,y)::(Int,Int)\u003c/code\u003e\n  and merge the two strings character by character.\n  The resulting string is used as key and stored together with an attribute\n  in a StringMap.\n\u003c/p\u003e\u003cp\u003eA range search for all keys within a rectangle \u003ccode\u003e(p1, p2) = ((x1,y1),(x2,y2))\u003c/code\u003e\n  in a map \u003ccode\u003em\u003c/code\u003e can be done by \u003ccode\u003elookupGE p1' . lookupLE p2' $ m\u003c/code\u003e with\n  \u003ccode\u003ep1'\u003c/code\u003e and \u003ccode\u003ep2'\u003c/code\u003e as the to string converted points of the rectangle.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003elookupGE p1'\u003c/code\u003e throws away all keys not located in the quadrant with \u003ccode\u003ep1\u003c/code\u003e\n  as lower left corner, \u003ccode\u003elookupLE p2'\u003c/code\u003e all key not located in the quadrant\n  with \u003ccode\u003ep2\u003c/code\u003e as upper right corner. So the combination (\u003ccode\u003elookupRange\u003c/code\u003e) computed\n  the intersection of these two quadrants.\n\u003c/p\u003e\u003cp\u003eEfficiency of these two function is about the same as a normal lookup\n  from StringMap.Base.\n\u003c/p\u003e\u003cp\u003eThis module should be imported \u003ccode\u003equalified\u003c/code\u003e, the names in Data.StringMap.Dim2Search are the\n  same as theirs siblings in Data.StringMap:\n\u003c/p\u003e\u003cpre\u003e import           Data.StringMap (StringMap)\n import qualified Data.StringMap             as M\n import qualified Data.StringMap.Dim2Search  as Dim2\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Data.StringMap.Dim2Search",
          "name": "Dim2Search",
          "package": "data-stringmap",
          "source": "src/Data-StringMap-Dim2Search.html",
          "type": "module"
        },
        "index": {
          "description": "dimensional range search of numeric values e.g pairs of Ints or Doubles using StringMap and prefix search Assumption The coordinates e.g Int values are converted into strings of equal length such that the ordering is preserved by the lexikographic ordering Example convert an Int into String intToString reverse take repeat reverse show Do this for both coordinates of tuple Int Int and merge the two strings character by character The resulting string is used as key and stored together with an attribute in StringMap range search for all keys within rectangle p1 p2 x1 y1 x2 y2 in map can be done by lookupGE p1 lookupLE p2 with p1 and p2 as the to string converted points of the rectangle lookupGE p1 throws away all keys not located in the quadrant with p1 as lower left corner lookupLE p2 all key not located in the quadrant with p2 as upper right corner So the combination lookupRange computed the intersection of these two quadrants Efficiency of these two function is about the same as normal lookup from StringMap.Base This module should be imported qualified the names in Data.StringMap.Dim2Search are the same as theirs siblings in Data.StringMap import Data.StringMap StringMap import qualified Data.StringMap as import qualified Data.StringMap.Dim2Search as Dim2",
          "hierarchy": "Data StringMap Dim2Search",
          "module": "Data.StringMap.Dim2Search",
          "name": "Dim2Search",
          "package": "data-stringmap",
          "partial": "Dim Search",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Dim2Search.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eremove all entries from the map with key less than the argument key\n\u003c/p\u003e",
          "module": "Data.StringMap.Dim2Search",
          "name": "lookupGE",
          "package": "data-stringmap",
          "signature": "Key -\u003e StringMap a -\u003e StringMap a",
          "source": "src/Data-StringMap-Dim2Search.html#lookupGE",
          "type": "function"
        },
        "index": {
          "description": "remove all entries from the map with key less than the argument key",
          "hierarchy": "Data StringMap Dim2Search",
          "module": "Data.StringMap.Dim2Search",
          "name": "lookupGE",
          "normalized": "Key-\u003eStringMap a-\u003eStringMap a",
          "package": "data-stringmap",
          "partial": "GE",
          "signature": "Key-\u003eStringMap a-\u003eStringMap a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Dim2Search.html#v:lookupGE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.StringMap.Dim2Search",
          "name": "lookupLE",
          "package": "data-stringmap",
          "signature": "Key -\u003e StringMap a -\u003e StringMap a",
          "source": "src/Data-StringMap-Dim2Search.html#lookupLE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data StringMap Dim2Search",
          "module": "Data.StringMap.Dim2Search",
          "name": "lookupLE",
          "normalized": "Key-\u003eStringMap a-\u003eStringMap a",
          "package": "data-stringmap",
          "partial": "LE",
          "signature": "Key-\u003eStringMap a-\u003eStringMap a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Dim2Search.html#v:lookupLE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCombination of \u003ccode\u003e\u003ca\u003elookupLE\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003elookupGE\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cpre\u003e keys $ lookupRange \"a\" \"b\" $ fromList $ zip [\"\", \"a\", \"ab\", \"b\", \"ba\", \"c\"] [1..] = [\"a\",\"ab\",\"b\"]\n\u003c/pre\u003e\u003cp\u003eFor all keys in \u003ccode\u003ek = keys $ lookupRange lb ub m\u003c/code\u003e, this property holts true: \u003ccode\u003ek \u003e= ub && k \u003c= lb\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.StringMap.Dim2Search",
          "name": "lookupRange",
          "package": "data-stringmap",
          "signature": "Key -\u003e Key -\u003e StringMap a -\u003e StringMap a",
          "source": "src/Data-StringMap-Dim2Search.html#lookupRange",
          "type": "function"
        },
        "index": {
          "description": "Combination of lookupLE and lookupGE keys lookupRange fromList zip ab ba ab For all keys in keys lookupRange lb ub this property holts true ub lb",
          "hierarchy": "Data StringMap Dim2Search",
          "module": "Data.StringMap.Dim2Search",
          "name": "lookupRange",
          "normalized": "Key-\u003eKey-\u003eStringMap a-\u003eStringMap a",
          "package": "data-stringmap",
          "partial": "Range",
          "signature": "Key-\u003eKey-\u003eStringMap a-\u003eStringMap a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Dim2Search.html#v:lookupRange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAn efficient implementation of maps from strings to arbitrary values.\n\u003c/p\u003e\u003cp\u003eValues can associated with an arbitrary byte key. Searching for keys is very fast, but\n  the prefix tree probably consumes more memory than \u003ca\u003eData.Map\u003c/a\u003e. The main differences are the special\n  \u003ccode\u003e\u003ca\u003eprefixFind\u003c/a\u003e\u003c/code\u003e functions, which can be used to perform prefix queries. The interface is\n  heavily borrowed from \u003ca\u003eData.Map\u003c/a\u003e and \u003ca\u003eData.IntMap\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eMost other function names clash with \u003ca\u003ePrelude\u003c/a\u003e names, therefore this module is usually\n  imported \u003ccode\u003equalified\u003c/code\u003e, e.g.\n\u003c/p\u003e\u003cpre\u003e import Data.StringMap (StringMap)\n import qualified Data.StringMap as T\n\u003c/pre\u003e\u003cp\u003eMany functions have a worst-case complexity of \u003cem\u003eO(min(n,L))\u003c/em\u003e. This means that the operation\n  can become linear with the number of elements with a maximum of \u003cem\u003eL\u003c/em\u003e, the length of the\n  key (the number of bytes in the list). The functions for searching a prefix have a worst-case\n  complexity of \u003cem\u003eO(max(L,R))\u003c/em\u003e. This means that the operation can become linear with\n  \u003cem\u003eR\u003c/em\u003e, the number of elements found for the prefix, with a minimum of \u003cem\u003eL\u003c/em\u003e.\n\u003c/p\u003e\u003cp\u003eThe module exports include the internal data types, their constructors and access\n  functions for ultimate flexibility. Derived modules should not export these\n  (as shown in \u003ca\u003eHolumbus.Data.StrMap\u003c/a\u003e) to provide only a restricted interface.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.StringMap.Lazy",
          "name": "Lazy",
          "package": "data-stringmap",
          "source": "src/Data-StringMap-Lazy.html",
          "type": "module"
        },
        "index": {
          "description": "An efficient implementation of maps from strings to arbitrary values Values can associated with an arbitrary byte key Searching for keys is very fast but the prefix tree probably consumes more memory than Data.Map The main differences are the special prefixFind functions which can be used to perform prefix queries The interface is heavily borrowed from Data.Map and Data.IntMap Most other function names clash with Prelude names therefore this module is usually imported qualified e.g import Data.StringMap StringMap import qualified Data.StringMap as Many functions have worst-case complexity of min This means that the operation can become linear with the number of elements with maximum of the length of the key the number of bytes in the list The functions for searching prefix have worst-case complexity of max This means that the operation can become linear with the number of elements found for the prefix with minimum of The module exports include the internal data types their constructors and access functions for ultimate flexibility Derived modules should not export these as shown in Holumbus.Data.StrMap to provide only restricted interface",
          "hierarchy": "Data StringMap Lazy",
          "module": "Data.StringMap.Lazy",
          "name": "Lazy",
          "package": "data-stringmap",
          "partial": "Lazy",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Lazy.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.StringMap.Lazy",
          "name": "Key",
          "package": "data-stringmap",
          "source": "src/Data-StringMap-Types.html#Key",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data StringMap Lazy",
          "module": "Data.StringMap.Lazy",
          "name": "Key",
          "package": "data-stringmap",
          "partial": "Key",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Lazy.html#t:Key"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.StringMap.Lazy",
          "name": "StringMap",
          "package": "data-stringmap",
          "source": "src/Data-StringMap-Base.html#StringMap",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data StringMap Lazy",
          "module": "Data.StringMap.Lazy",
          "name": "StringMap",
          "package": "data-stringmap",
          "partial": "String Map",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Lazy.html#t:StringMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003elookup\u003c/a\u003e\u003c/code\u003e, but case insensitive\n\u003c/p\u003e",
          "module": "[\"Data.StringMap.Lazy\",\"Data.StringMap.Strict\",\"Data.StringMap\"]",
          "name": "lookupNoCase",
          "package": "data-stringmap",
          "signature": "Key -\u003e StringMap a -\u003e StringMap a",
          "source": "src/Data-StringMap-FuzzySearch.html#lookupNoCase",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Lazy.html#v:lookupNoCase\",\"http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Strict.html#v:lookupNoCase\",\"http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap.html#v:lookupNoCase\"]"
        },
        "index": {
          "description": "Same as lookup but case insensitive",
          "hierarchy": "Data StringMap Lazy",
          "module": "Data.StringMap.Lazy",
          "name": "lookupNoCase",
          "normalized": "Key-\u003eStringMap a-\u003eStringMap a",
          "package": "data-stringmap",
          "partial": "No Case",
          "signature": "Key-\u003eStringMap a-\u003eStringMap a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Lazy.html#v:lookupNoCase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(max(L,R))\u003c/em\u003e Find all values where the string is a prefix of the key.\n\u003c/p\u003e",
          "module": "[\"Data.StringMap.Lazy\",\"Data.StringMap.Strict\",\"Data.StringMap\"]",
          "name": "prefixFilter",
          "package": "data-stringmap",
          "signature": "Key -\u003e StringMap a -\u003e StringMap a",
          "source": "src/Data-StringMap-FuzzySearch.html#prefixFilter",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Lazy.html#v:prefixFilter\",\"http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Strict.html#v:prefixFilter\",\"http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap.html#v:prefixFilter\"]"
        },
        "index": {
          "description": "max Find all values where the string is prefix of the key",
          "hierarchy": "Data StringMap Lazy",
          "module": "Data.StringMap.Lazy",
          "name": "prefixFilter",
          "normalized": "Key-\u003eStringMap a-\u003eStringMap a",
          "package": "data-stringmap",
          "partial": "Filter",
          "signature": "Key-\u003eStringMap a-\u003eStringMap a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Lazy.html#v:prefixFilter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003eprefixFilterNoCase\u003c/a\u003e\u003c/code\u003e, bur case insensitive\n\u003c/p\u003e",
          "module": "[\"Data.StringMap.Lazy\",\"Data.StringMap.Strict\",\"Data.StringMap\"]",
          "name": "prefixFilterNoCase",
          "package": "data-stringmap",
          "signature": "Key -\u003e StringMap a -\u003e StringMap a",
          "source": "src/Data-StringMap-FuzzySearch.html#prefixFilterNoCase",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Lazy.html#v:prefixFilterNoCase\",\"http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Strict.html#v:prefixFilterNoCase\",\"http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap.html#v:prefixFilterNoCase\"]"
        },
        "index": {
          "description": "Same as prefixFilterNoCase bur case insensitive",
          "hierarchy": "Data StringMap Lazy",
          "module": "Data.StringMap.Lazy",
          "name": "prefixFilterNoCase",
          "normalized": "Key-\u003eStringMap a-\u003eStringMap a",
          "package": "data-stringmap",
          "partial": "Filter No Case",
          "signature": "Key-\u003eStringMap a-\u003eStringMap a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Lazy.html#v:prefixFilterNoCase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAn efficient implementation of maps from strings to arbitrary values.\n\u003c/p\u003e\u003cp\u003eValues can be associated with an arbitrary [Char] key. Searching for keys is very fast.\n  The main differences to Data.Map and Data.IntMap are the special\n  \u003ccode\u003e\u003ca\u003eprefixFind\u003c/a\u003e\u003c/code\u003e functions, which can be used to perform prefix queries. The interface is\n  heavily borrowed from \u003ca\u003eData.Map\u003c/a\u003e and \u003ca\u003eData.IntMap\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eMost other function names clash with \u003ca\u003ePrelude\u003c/a\u003e names, therefore this module is usually\n  imported \u003ccode\u003equalified\u003c/code\u003e, e.g.\n\u003c/p\u003e\u003cpre\u003e import           Data.StringMap.Strict (StringMap)\n import qualified Data.StringMap.Strict as M\n\u003c/pre\u003e\u003cp\u003eMany functions have a worst-case complexity of \u003cem\u003eO(min(n,L))\u003c/em\u003e. This means that the operation\n  can become linear with the number of elements with a maximum of \u003cem\u003eL\u003c/em\u003e, the length of the\n  key (the number of bytes in the list). The functions for searching a prefix have a worst-case\n  complexity of \u003cem\u003eO(max(L,R))\u003c/em\u003e. This means that the operation can become linear with\n  \u003cem\u003eR\u003c/em\u003e, the number of elements found for the prefix, with a minimum of \u003cem\u003eL\u003c/em\u003e.\n\u003c/p\u003e\u003cp\u003eThis module has versions of the \"modifying\" operations,\n  like insert, update, delete and map, that force evaluating\n  the attribute values before doing the operation.\n  All \"reading\" operations and the data types are reexported\n  from Data.StringMap.Base.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.StringMap.Strict",
          "name": "Strict",
          "package": "data-stringmap",
          "source": "src/Data-StringMap-Strict.html",
          "type": "module"
        },
        "index": {
          "description": "An efficient implementation of maps from strings to arbitrary values Values can be associated with an arbitrary Char key Searching for keys is very fast The main differences to Data.Map and Data.IntMap are the special prefixFind functions which can be used to perform prefix queries The interface is heavily borrowed from Data.Map and Data.IntMap Most other function names clash with Prelude names therefore this module is usually imported qualified e.g import Data.StringMap.Strict StringMap import qualified Data.StringMap.Strict as Many functions have worst-case complexity of min This means that the operation can become linear with the number of elements with maximum of the length of the key the number of bytes in the list The functions for searching prefix have worst-case complexity of max This means that the operation can become linear with the number of elements found for the prefix with minimum of This module has versions of the modifying operations like insert update delete and map that force evaluating the attribute values before doing the operation All reading operations and the data types are reexported from Data.StringMap.Base",
          "hierarchy": "Data StringMap Strict",
          "module": "Data.StringMap.Strict",
          "name": "Strict",
          "package": "data-stringmap",
          "partial": "Strict",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Strict.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.StringMap.Strict",
          "name": "Key",
          "package": "data-stringmap",
          "source": "src/Data-StringMap-Types.html#Key",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data StringMap Strict",
          "module": "Data.StringMap.Strict",
          "name": "Key",
          "package": "data-stringmap",
          "partial": "Key",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Strict.html#t:Key"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.StringMap.Strict",
          "name": "StringMap",
          "package": "data-stringmap",
          "source": "src/Data-StringMap-Base.html#StringMap",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data StringMap Strict",
          "module": "Data.StringMap.Strict",
          "name": "StringMap",
          "package": "data-stringmap",
          "partial": "String Map",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Strict.html#t:StringMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.StringMap.Strict",
          "name": "adjust",
          "package": "data-stringmap",
          "signature": "(a -\u003e a) -\u003e Key -\u003e StringMap a -\u003e StringMap a",
          "source": "src/Data-StringMap-Strict.html#adjust",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data StringMap Strict",
          "module": "Data.StringMap.Strict",
          "name": "adjust",
          "normalized": "(a-\u003ea)-\u003eKey-\u003eStringMap a-\u003eStringMap a",
          "package": "data-stringmap",
          "signature": "(a-\u003ea)-\u003eKey-\u003eStringMap a-\u003eStringMap a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Strict.html#v:adjust"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.StringMap.Strict",
          "name": "adjustWithKey",
          "package": "data-stringmap",
          "signature": "(Key -\u003e a -\u003e a) -\u003e Key -\u003e StringMap a -\u003e StringMap a",
          "source": "src/Data-StringMap-Strict.html#adjustWithKey",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data StringMap Strict",
          "module": "Data.StringMap.Strict",
          "name": "adjustWithKey",
          "normalized": "(Key-\u003ea-\u003ea)-\u003eKey-\u003eStringMap a-\u003eStringMap a",
          "package": "data-stringmap",
          "partial": "With Key",
          "signature": "(Key-\u003ea-\u003ea)-\u003eKey-\u003eStringMap a-\u003eStringMap a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Strict.html#v:adjustWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(min(n,L))\u003c/em\u003e Delete an element from the map. If no element exists for the key, the map\n remains unchanged.\n\u003c/p\u003e",
          "module": "Data.StringMap.Strict",
          "name": "delete",
          "package": "data-stringmap",
          "signature": "Key -\u003e StringMap a -\u003e StringMap a",
          "source": "src/Data-StringMap-Strict.html#delete",
          "type": "function"
        },
        "index": {
          "description": "min Delete an element from the map If no element exists for the key the map remains unchanged",
          "hierarchy": "Data StringMap Strict",
          "module": "Data.StringMap.Strict",
          "name": "delete",
          "normalized": "Key-\u003eStringMap a-\u003eStringMap a",
          "package": "data-stringmap",
          "signature": "Key-\u003eStringMap a-\u003eStringMap a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Strict.html#v:delete"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Creates a string map from a list of key/value pairs.\n\u003c/p\u003e",
          "module": "Data.StringMap.Strict",
          "name": "fromList",
          "package": "data-stringmap",
          "signature": "[(Key, a)] -\u003e StringMap a",
          "source": "src/Data-StringMap-Strict.html#fromList",
          "type": "function"
        },
        "index": {
          "description": "Creates string map from list of key value pairs",
          "hierarchy": "Data StringMap Strict",
          "module": "Data.StringMap.Strict",
          "name": "fromList",
          "normalized": "[(Key,a)]-\u003eStringMap a",
          "package": "data-stringmap",
          "partial": "List",
          "signature": "[(Key,a)]-\u003eStringMap a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Strict.html#v:fromList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(min(n,L))\u003c/em\u003e Insert a new key and value into the map. If the key is already present in\n the map, the associated value will be replaced with the new value.\n\u003c/p\u003e",
          "module": "Data.StringMap.Strict",
          "name": "insert",
          "package": "data-stringmap",
          "signature": "Key -\u003e a -\u003e StringMap a -\u003e StringMap a",
          "source": "src/Data-StringMap-Strict.html#insert",
          "type": "function"
        },
        "index": {
          "description": "min Insert new key and value into the map If the key is already present in the map the associated value will be replaced with the new value",
          "hierarchy": "Data StringMap Strict",
          "module": "Data.StringMap.Strict",
          "name": "insert",
          "normalized": "Key-\u003ea-\u003eStringMap a-\u003eStringMap a",
          "package": "data-stringmap",
          "signature": "Key-\u003ea-\u003eStringMap a-\u003eStringMap a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Strict.html#v:insert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(min(n,L))\u003c/em\u003e Insert with a combining function. If the key is already present in the map,\n the value of \u003ccode\u003ef new_value old_value\u003c/code\u003e will be inserted.\n\u003c/p\u003e",
          "module": "Data.StringMap.Strict",
          "name": "insertWith",
          "package": "data-stringmap",
          "signature": "(a -\u003e a -\u003e a) -\u003e Key -\u003e a -\u003e StringMap a -\u003e StringMap a",
          "source": "src/Data-StringMap-Strict.html#insertWith",
          "type": "function"
        },
        "index": {
          "description": "min Insert with combining function If the key is already present in the map the value of new value old value will be inserted",
          "hierarchy": "Data StringMap Strict",
          "module": "Data.StringMap.Strict",
          "name": "insertWith",
          "normalized": "(a-\u003ea-\u003ea)-\u003eKey-\u003ea-\u003eStringMap a-\u003eStringMap a",
          "package": "data-stringmap",
          "partial": "With",
          "signature": "(a-\u003ea-\u003ea)-\u003eKey-\u003ea-\u003eStringMap a-\u003eStringMap a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Strict.html#v:insertWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(min(n,L))\u003c/em\u003e Insert with a combining function. If the key is already present in the map,\n the value of \u003ccode\u003ef key new_value old_value\u003c/code\u003e will be inserted.\n\u003c/p\u003e",
          "module": "Data.StringMap.Strict",
          "name": "insertWithKey",
          "package": "data-stringmap",
          "signature": "(Key -\u003e a -\u003e a -\u003e a) -\u003e Key -\u003e a -\u003e StringMap a -\u003e StringMap a",
          "source": "src/Data-StringMap-Strict.html#insertWithKey",
          "type": "function"
        },
        "index": {
          "description": "min Insert with combining function If the key is already present in the map the value of key new value old value will be inserted",
          "hierarchy": "Data StringMap Strict",
          "module": "Data.StringMap.Strict",
          "name": "insertWithKey",
          "normalized": "(Key-\u003ea-\u003ea-\u003ea)-\u003eKey-\u003ea-\u003eStringMap a-\u003eStringMap a",
          "package": "data-stringmap",
          "partial": "With Key",
          "signature": "(Key-\u003ea-\u003ea-\u003ea)-\u003eKey-\u003ea-\u003eStringMap a-\u003eStringMap a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Strict.html#v:insertWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Map a function over all values in the string map.\n\u003c/p\u003e",
          "module": "Data.StringMap.Strict",
          "name": "map",
          "package": "data-stringmap",
          "signature": "(a -\u003e b) -\u003e StringMap a -\u003e StringMap b",
          "source": "src/Data-StringMap-Strict.html#map",
          "type": "function"
        },
        "index": {
          "description": "Map function over all values in the string map",
          "hierarchy": "Data StringMap Strict",
          "module": "Data.StringMap.Strict",
          "name": "map",
          "normalized": "(a-\u003eb)-\u003eStringMap a-\u003eStringMap b",
          "package": "data-stringmap",
          "signature": "(a-\u003eb)-\u003eStringMap a-\u003eStringMap b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Strict.html#v:map"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMonadic \u003ccode\u003e\u003ca\u003emap\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.StringMap.Strict",
          "name": "mapM",
          "package": "data-stringmap",
          "signature": "(a -\u003e m b) -\u003e StringMap a -\u003e m (StringMap b)",
          "source": "src/Data-StringMap-Strict.html#mapM",
          "type": "function"
        },
        "index": {
          "description": "Monadic map",
          "hierarchy": "Data StringMap Strict",
          "module": "Data.StringMap.Strict",
          "name": "mapM",
          "normalized": "(a-\u003eb c)-\u003eStringMap a-\u003eb(StringMap c)",
          "package": "data-stringmap",
          "signature": "(a-\u003em b)-\u003eStringMap a-\u003em(StringMap b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Strict.html#v:mapM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Updates a value or deletes the element,\n if the result of the updating function is \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.StringMap.Strict",
          "name": "mapMaybe",
          "package": "data-stringmap",
          "signature": "(a -\u003e Maybe b) -\u003e StringMap a -\u003e StringMap b",
          "source": "src/Data-StringMap-Strict.html#mapMaybe",
          "type": "function"
        },
        "index": {
          "description": "Updates value or deletes the element if the result of the updating function is Nothing",
          "hierarchy": "Data StringMap Strict",
          "module": "Data.StringMap.Strict",
          "name": "mapMaybe",
          "normalized": "(a-\u003eMaybe b)-\u003eStringMap a-\u003eStringMap b",
          "package": "data-stringmap",
          "partial": "Maybe",
          "signature": "(a-\u003eMaybe b)-\u003eStringMap a-\u003eStringMap b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Strict.html#v:mapMaybe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Same as \u003ccode\u003e\u003ca\u003emap\u003c/a\u003e\u003c/code\u003e, but with an additional paramter\n\u003c/p\u003e",
          "module": "Data.StringMap.Strict",
          "name": "mapWithKey",
          "package": "data-stringmap",
          "signature": "(Key -\u003e a -\u003e b) -\u003e StringMap a -\u003e StringMap b",
          "source": "src/Data-StringMap-Strict.html#mapWithKey",
          "type": "function"
        },
        "index": {
          "description": "Same as map but with an additional paramter",
          "hierarchy": "Data StringMap Strict",
          "module": "Data.StringMap.Strict",
          "name": "mapWithKey",
          "normalized": "(Key-\u003ea-\u003eb)-\u003eStringMap a-\u003eStringMap b",
          "package": "data-stringmap",
          "partial": "With Key",
          "signature": "(Key-\u003ea-\u003eb)-\u003eStringMap a-\u003eStringMap b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Strict.html#v:mapWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMonadic \u003ccode\u003e\u003ca\u003emapWithKey\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.StringMap.Strict",
          "name": "mapWithKeyM",
          "package": "data-stringmap",
          "signature": "(Key -\u003e a -\u003e m b) -\u003e StringMap a -\u003e m (StringMap b)",
          "source": "src/Data-StringMap-Strict.html#mapWithKeyM",
          "type": "function"
        },
        "index": {
          "description": "Monadic mapWithKey",
          "hierarchy": "Data StringMap Strict",
          "module": "Data.StringMap.Strict",
          "name": "mapWithKeyM",
          "normalized": "(Key-\u003ea-\u003eb c)-\u003eStringMap a-\u003eb(StringMap c)",
          "package": "data-stringmap",
          "partial": "With Key",
          "signature": "(Key-\u003ea-\u003em b)-\u003eStringMap a-\u003em(StringMap b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Strict.html#v:mapWithKeyM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Create a map with a single element.\n\u003c/p\u003e\u003cp\u003ethe attribute value is evaluated to WHNF\n\u003c/p\u003e",
          "module": "Data.StringMap.Strict",
          "name": "singleton",
          "package": "data-stringmap",
          "signature": "Key -\u003e a -\u003e StringMap a",
          "source": "src/Data-StringMap-Strict.html#singleton",
          "type": "function"
        },
        "index": {
          "description": "Create map with single element the attribute value is evaluated to WHNF",
          "hierarchy": "Data StringMap Strict",
          "module": "Data.StringMap.Strict",
          "name": "singleton",
          "normalized": "Key-\u003ea-\u003eStringMap a",
          "package": "data-stringmap",
          "signature": "Key-\u003ea-\u003eStringMap a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Strict.html#v:singleton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n+m)\u003c/em\u003e Left-biased union of two maps. It prefers the first map when duplicate keys are\n encountered, i.e. (\u003ccode\u003e\u003ca\u003eunion\u003c/a\u003e\u003c/code\u003e == \u003ccode\u003e\u003ca\u003eunionWith\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003econst\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Data.StringMap.Strict",
          "name": "union",
          "package": "data-stringmap",
          "signature": "StringMap a -\u003e StringMap a -\u003e StringMap a",
          "source": "src/Data-StringMap-Strict.html#union",
          "type": "function"
        },
        "index": {
          "description": "Left-biased union of two maps It prefers the first map when duplicate keys are encountered i.e union unionWith const",
          "hierarchy": "Data StringMap Strict",
          "module": "Data.StringMap.Strict",
          "name": "union",
          "normalized": "StringMap a-\u003eStringMap a-\u003eStringMap a",
          "package": "data-stringmap",
          "signature": "StringMap a-\u003eStringMap a-\u003eStringMap a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Strict.html#v:union"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneralisation of \u003ccode\u003e\u003ca\u003eunionWith\u003c/a\u003e\u003c/code\u003e. The second map may have another attribute type than the first one.\n Conversion and merging of the maps is done in a single step.\n This is much more efficient than mapping the second map and then call \u003ccode\u003e\u003ca\u003eunionWith\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cpre\u003eunionWithConf to ( x y -\u003e x \u003ccode\u003eop\u003c/code\u003e to y) m1 m2 = unionWith op m1 (fmap to m2)\u003c/pre\u003e",
          "module": "Data.StringMap.Strict",
          "name": "unionMapWith",
          "package": "data-stringmap",
          "signature": "(b -\u003e a) -\u003e (a -\u003e b -\u003e a) -\u003e StringMap a -\u003e StringMap b -\u003e StringMap a",
          "source": "src/Data-StringMap-Strict.html#unionMapWith",
          "type": "function"
        },
        "index": {
          "description": "Generalisation of unionWith The second map may have another attribute type than the first one Conversion and merging of the maps is done in single step This is much more efficient than mapping the second map and then call unionWith unionWithConf to op to m1 m2 unionWith op m1 fmap to m2",
          "hierarchy": "Data StringMap Strict",
          "module": "Data.StringMap.Strict",
          "name": "unionMapWith",
          "normalized": "(a-\u003eb)-\u003e(b-\u003ea-\u003eb)-\u003eStringMap b-\u003eStringMap a-\u003eStringMap b",
          "package": "data-stringmap",
          "partial": "Map With",
          "signature": "(b-\u003ea)-\u003e(a-\u003eb-\u003ea)-\u003eStringMap a-\u003eStringMap b-\u003eStringMap a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Strict.html#v:unionMapWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n+m)\u003c/em\u003e \u003ccode\u003e\u003ca\u003eunion\u003c/a\u003e\u003c/code\u003e with a combining function.\n\u003c/p\u003e",
          "module": "Data.StringMap.Strict",
          "name": "unionWith",
          "package": "data-stringmap",
          "signature": "(a -\u003e a -\u003e a) -\u003e StringMap a -\u003e StringMap a -\u003e StringMap a",
          "source": "src/Data-StringMap-Strict.html#unionWith",
          "type": "function"
        },
        "index": {
          "description": "union with combining function",
          "hierarchy": "Data StringMap Strict",
          "module": "Data.StringMap.Strict",
          "name": "unionWith",
          "normalized": "(a-\u003ea-\u003ea)-\u003eStringMap a-\u003eStringMap a-\u003eStringMap a",
          "package": "data-stringmap",
          "partial": "With",
          "signature": "(a-\u003ea-\u003ea)-\u003eStringMap a-\u003eStringMap a-\u003eStringMap a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Strict.html#v:unionWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(min(n,L))\u003c/em\u003e Updates a value at a given key (if that key is in the trie) or deletes the\n element if the result of the updating function is \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e. If the key is not found, the trie\n is returned unchanged.\n The updated value is evaluated to WHNF before insertion.\n\u003c/p\u003e",
          "module": "Data.StringMap.Strict",
          "name": "update",
          "package": "data-stringmap",
          "signature": "(a -\u003e Maybe a) -\u003e Key -\u003e StringMap a -\u003e StringMap a",
          "source": "src/Data-StringMap-Strict.html#update",
          "type": "function"
        },
        "index": {
          "description": "min Updates value at given key if that key is in the trie or deletes the element if the result of the updating function is Nothing If the key is not found the trie is returned unchanged The updated value is evaluated to WHNF before insertion",
          "hierarchy": "Data StringMap Strict",
          "module": "Data.StringMap.Strict",
          "name": "update",
          "normalized": "(a-\u003eMaybe a)-\u003eKey-\u003eStringMap a-\u003eStringMap a",
          "package": "data-stringmap",
          "signature": "(a-\u003eMaybe a)-\u003eKey-\u003eStringMap a-\u003eStringMap a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Strict.html#v:update"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(min(n,L))\u003c/em\u003e Updates a value at a given key (if that key is in the trie) or deletes the\n element if the result of the updating function is \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e. If the key is not found, the trie\n is returned unchanged.\n The updated value is evaluated to WHNF before insertion.\n\u003c/p\u003e",
          "module": "Data.StringMap.Strict",
          "name": "updateWithKey",
          "package": "data-stringmap",
          "signature": "(Key -\u003e a -\u003e Maybe a) -\u003e Key -\u003e StringMap a -\u003e StringMap a",
          "source": "src/Data-StringMap-Strict.html#updateWithKey",
          "type": "function"
        },
        "index": {
          "description": "min Updates value at given key if that key is in the trie or deletes the element if the result of the updating function is Nothing If the key is not found the trie is returned unchanged The updated value is evaluated to WHNF before insertion",
          "hierarchy": "Data StringMap Strict",
          "module": "Data.StringMap.Strict",
          "name": "updateWithKey",
          "normalized": "(Key-\u003ea-\u003eMaybe a)-\u003eKey-\u003eStringMap a-\u003eStringMap a",
          "package": "data-stringmap",
          "partial": "With Key",
          "signature": "(Key-\u003ea-\u003eMaybe a)-\u003eKey-\u003eStringMap a-\u003eStringMap a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Strict.html#v:updateWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA simplified version of StringMap for implementing sets.\n\u003c/p\u003e\u003cp\u003eThere is one important difference to the StringMap implementation:\n  The fields are not marked to be strict. This enables building the\n  set on the fly.\n\u003c/p\u003e\u003cp\u003eThis feature is used in fuzzy search, when an index tree is restricted\n  to a set of keys, e.g. the set of all none case significant keys\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.StringMap.StringSet",
          "name": "StringSet",
          "package": "data-stringmap",
          "source": "src/Data-StringMap-StringSet.html",
          "type": "module"
        },
        "index": {
          "description": "simplified version of StringMap for implementing sets There is one important difference to the StringMap implementation The fields are not marked to be strict This enables building the set on the fly This feature is used in fuzzy search when an index tree is restricted to set of keys e.g the set of all none case significant keys",
          "hierarchy": "Data StringMap StringSet",
          "module": "Data.StringMap.StringSet",
          "name": "StringSet",
          "package": "data-stringmap",
          "partial": "String Set",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-StringSet.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet of strings implemented as lazy prefix tree.\n \u003ccode\u003etype StringSet = StringMap ()\u003c/code\u003e is not feasable because of\n the strict fields in the StringMap definition\n\u003c/p\u003e",
          "module": "Data.StringMap.StringSet",
          "name": "StringSet",
          "package": "data-stringmap",
          "source": "src/Data-StringMap-StringSet.html#StringSet",
          "type": "data"
        },
        "index": {
          "description": "Set of strings implemented as lazy prefix tree type StringSet StringMap is not feasable because of the strict fields in the StringMap definition",
          "hierarchy": "Data StringMap StringSet",
          "module": "Data.StringMap.StringSet",
          "name": "StringSet",
          "package": "data-stringmap",
          "partial": "String Set",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-StringSet.html#t:StringSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.StringMap.StringSet",
          "name": "PSelem",
          "package": "data-stringmap",
          "signature": "PSelem StringSet",
          "source": "src/Data-StringMap-StringSet.html#StringSet",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data StringMap StringSet",
          "module": "Data.StringMap.StringSet",
          "name": "PSelem",
          "package": "data-stringmap",
          "partial": "PSelem",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-StringSet.html#v:PSelem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.StringMap.StringSet",
          "name": "PSempty",
          "package": "data-stringmap",
          "signature": "PSempty",
          "source": "src/Data-StringMap-StringSet.html#StringSet",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data StringMap StringSet",
          "module": "Data.StringMap.StringSet",
          "name": "PSempty",
          "package": "data-stringmap",
          "partial": "PSempty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-StringSet.html#v:PSempty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.StringMap.StringSet",
          "name": "PSnext",
          "package": "data-stringmap",
          "signature": "PSnext Sym StringSet StringSet",
          "source": "src/Data-StringMap-StringSet.html#StringSet",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data StringMap StringSet",
          "module": "Data.StringMap.StringSet",
          "name": "PSnext",
          "package": "data-stringmap",
          "partial": "PSnext",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-StringSet.html#v:PSnext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.StringMap.StringSet",
          "name": "elem0PS",
          "package": "data-stringmap",
          "signature": "StringSet",
          "source": "src/Data-StringMap-StringSet.html#elem0PS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data StringMap StringSet",
          "module": "Data.StringMap.StringSet",
          "name": "elem0PS",
          "package": "data-stringmap",
          "partial": "PS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-StringSet.html#v:elem0PS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.StringMap.StringSet",
          "name": "elemPS",
          "package": "data-stringmap",
          "signature": "StringSet -\u003e StringSet",
          "source": "src/Data-StringMap-StringSet.html#elemPS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data StringMap StringSet",
          "module": "Data.StringMap.StringSet",
          "name": "elemPS",
          "normalized": "StringSet-\u003eStringSet",
          "package": "data-stringmap",
          "partial": "PS",
          "signature": "StringSet-\u003eStringSet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-StringSet.html#v:elemPS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.StringMap.StringSet",
          "name": "elemsPS",
          "package": "data-stringmap",
          "signature": "StringSet -\u003e [Key]",
          "source": "src/Data-StringMap-StringSet.html#elemsPS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data StringMap StringSet",
          "module": "Data.StringMap.StringSet",
          "name": "elemsPS",
          "normalized": "StringSet-\u003e[Key]",
          "package": "data-stringmap",
          "partial": "PS",
          "signature": "StringSet-\u003e[Key]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-StringSet.html#v:elemsPS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.StringMap.StringSet",
          "name": "emptyPS",
          "package": "data-stringmap",
          "signature": "StringSet",
          "source": "src/Data-StringMap-StringSet.html#emptyPS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data StringMap StringSet",
          "module": "Data.StringMap.StringSet",
          "name": "emptyPS",
          "package": "data-stringmap",
          "partial": "PS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-StringSet.html#v:emptyPS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.StringMap.StringSet",
          "name": "foldPS",
          "package": "data-stringmap",
          "signature": "(Key -\u003e b -\u003e b) -\u003e b -\u003e (Key -\u003e Key) -\u003e StringSet -\u003e b",
          "source": "src/Data-StringMap-StringSet.html#foldPS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data StringMap StringSet",
          "module": "Data.StringMap.StringSet",
          "name": "foldPS",
          "normalized": "(Key-\u003ea-\u003ea)-\u003ea-\u003e(Key-\u003eKey)-\u003eStringSet-\u003ea",
          "package": "data-stringmap",
          "partial": "PS",
          "signature": "(Key-\u003eb-\u003eb)-\u003eb-\u003e(Key-\u003eKey)-\u003eStringSet-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-StringSet.html#v:foldPS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.StringMap.StringSet",
          "name": "foldWithKeyPS",
          "package": "data-stringmap",
          "signature": "(Key -\u003e b -\u003e b) -\u003e b -\u003e StringSet -\u003e b",
          "source": "src/Data-StringMap-StringSet.html#foldWithKeyPS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data StringMap StringSet",
          "module": "Data.StringMap.StringSet",
          "name": "foldWithKeyPS",
          "normalized": "(Key-\u003ea-\u003ea)-\u003ea-\u003eStringSet-\u003ea",
          "package": "data-stringmap",
          "partial": "With Key PS",
          "signature": "(Key-\u003eb-\u003eb)-\u003eb-\u003eStringSet-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-StringSet.html#v:foldWithKeyPS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.StringMap.StringSet",
          "name": "fuzzyCharPS",
          "package": "data-stringmap",
          "signature": "(Sym -\u003e [Sym]) -\u003e StringSet -\u003e StringSet",
          "source": "src/Data-StringMap-StringSet.html#fuzzyCharPS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data StringMap StringSet",
          "module": "Data.StringMap.StringSet",
          "name": "fuzzyCharPS",
          "normalized": "(Sym-\u003e[Sym])-\u003eStringSet-\u003eStringSet",
          "package": "data-stringmap",
          "partial": "Char PS",
          "signature": "(Sym-\u003e[Sym])-\u003eStringSet-\u003eStringSet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-StringSet.html#v:fuzzyCharPS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.StringMap.StringSet",
          "name": "fuzzyCharsPS",
          "package": "data-stringmap",
          "signature": "(Sym -\u003e [Key]) -\u003e StringSet -\u003e StringSet",
          "source": "src/Data-StringMap-StringSet.html#fuzzyCharsPS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data StringMap StringSet",
          "module": "Data.StringMap.StringSet",
          "name": "fuzzyCharsPS",
          "normalized": "(Sym-\u003e[Key])-\u003eStringSet-\u003eStringSet",
          "package": "data-stringmap",
          "partial": "Chars PS",
          "signature": "(Sym-\u003e[Key])-\u003eStringSet-\u003eStringSet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-StringSet.html#v:fuzzyCharsPS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.StringMap.StringSet",
          "name": "lastPS",
          "package": "data-stringmap",
          "signature": "Sym -\u003e StringSet -\u003e StringSet",
          "source": "src/Data-StringMap-StringSet.html#lastPS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data StringMap StringSet",
          "module": "Data.StringMap.StringSet",
          "name": "lastPS",
          "normalized": "Sym-\u003eStringSet-\u003eStringSet",
          "package": "data-stringmap",
          "partial": "PS",
          "signature": "Sym-\u003eStringSet-\u003eStringSet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-StringSet.html#v:lastPS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.StringMap.StringSet",
          "name": "nextPS",
          "package": "data-stringmap",
          "signature": "Sym -\u003e StringSet -\u003e StringSet -\u003e StringSet",
          "source": "src/Data-StringMap-StringSet.html#nextPS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data StringMap StringSet",
          "module": "Data.StringMap.StringSet",
          "name": "nextPS",
          "normalized": "Sym-\u003eStringSet-\u003eStringSet-\u003eStringSet",
          "package": "data-stringmap",
          "partial": "PS",
          "signature": "Sym-\u003eStringSet-\u003eStringSet-\u003eStringSet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-StringSet.html#v:nextPS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.StringMap.StringSet",
          "name": "nullPS",
          "package": "data-stringmap",
          "signature": "StringSet -\u003e Bool",
          "source": "src/Data-StringMap-StringSet.html#nullPS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data StringMap StringSet",
          "module": "Data.StringMap.StringSet",
          "name": "nullPS",
          "normalized": "StringSet-\u003eBool",
          "package": "data-stringmap",
          "partial": "PS",
          "signature": "StringSet-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-StringSet.html#v:nullPS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.StringMap.StringSet",
          "name": "prefixPS",
          "package": "data-stringmap",
          "signature": "Key -\u003e StringSet",
          "source": "src/Data-StringMap-StringSet.html#prefixPS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data StringMap StringSet",
          "module": "Data.StringMap.StringSet",
          "name": "prefixPS",
          "normalized": "Key-\u003eStringSet",
          "package": "data-stringmap",
          "partial": "PS",
          "signature": "Key-\u003eStringSet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-StringSet.html#v:prefixPS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.StringMap.StringSet",
          "name": "singlePS",
          "package": "data-stringmap",
          "signature": "Key -\u003e StringSet",
          "source": "src/Data-StringMap-StringSet.html#singlePS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data StringMap StringSet",
          "module": "Data.StringMap.StringSet",
          "name": "singlePS",
          "normalized": "Key-\u003eStringSet",
          "package": "data-stringmap",
          "partial": "PS",
          "signature": "Key-\u003eStringSet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-StringSet.html#v:singlePS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.StringMap.StringSet",
          "name": "unionPS",
          "package": "data-stringmap",
          "signature": "StringSet -\u003e StringSet -\u003e StringSet",
          "source": "src/Data-StringMap-StringSet.html#unionPS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data StringMap StringSet",
          "module": "Data.StringMap.StringSet",
          "name": "unionPS",
          "normalized": "StringSet-\u003eStringSet-\u003eStringSet",
          "package": "data-stringmap",
          "partial": "PS",
          "signature": "StringSet-\u003eStringSet-\u003eStringSet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-StringSet.html#v:unionPS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eData types used in all StringMap modules\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.StringMap.Types",
          "name": "Types",
          "package": "data-stringmap",
          "source": "src/Data-StringMap-Types.html",
          "type": "module"
        },
        "index": {
          "description": "Data types used in all StringMap modules",
          "hierarchy": "Data StringMap Types",
          "module": "Data.StringMap.Types",
          "name": "Types",
          "package": "data-stringmap",
          "partial": "Types",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Types.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.StringMap.Types",
          "name": "Key",
          "package": "data-stringmap",
          "source": "src/Data-StringMap-Types.html#Key",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data StringMap Types",
          "module": "Data.StringMap.Types",
          "name": "Key",
          "package": "data-stringmap",
          "partial": "Key",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Types.html#t:Key"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.StringMap.Types",
          "name": "Sym",
          "package": "data-stringmap",
          "source": "src/Data-StringMap-Types.html#Sym",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data StringMap Types",
          "module": "Data.StringMap.Types",
          "name": "Sym",
          "package": "data-stringmap",
          "partial": "Sym",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Types.html#t:Sym"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAn efficient implementation of maps from strings to arbitrary values.\n\u003c/p\u003e\u003cp\u003eValues can be associated with an arbitrary [Char] key. Searching for keys is very fast.\n  The main differences to Data.Map and Data.IntMap are the special\n  \u003ccode\u003e\u003ca\u003eprefixFind\u003c/a\u003e\u003c/code\u003e functions, which can be used to perform prefix queries. The interface is\n  heavily borrowed from \u003ca\u003eData.Map\u003c/a\u003e and \u003ca\u003eData.IntMap\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eMost other function names clash with \u003ca\u003ePrelude\u003c/a\u003e names, therefore this module is usually\n  imported \u003ccode\u003equalified\u003c/code\u003e, e.g.\n\u003c/p\u003e\u003cpre\u003e import           Data.StringMap (StringMap)\n import qualified Data.StringMap as M\n\u003c/pre\u003e\u003cp\u003eMany functions have a worst-case complexity of \u003cem\u003eO(min(n,L))\u003c/em\u003e. This means that the operation\n  can become linear with the number of elements with a maximum of \u003cem\u003eL\u003c/em\u003e, the length of the\n  key (the number of bytes in the list). The functions for searching a prefix have a worst-case\n  complexity of \u003cem\u003eO(max(L,R))\u003c/em\u003e. This means that the operation can become linear with\n  \u003cem\u003eR\u003c/em\u003e, the number of elements found for the prefix, with a minimum of \u003cem\u003eL\u003c/em\u003e.\n\u003c/p\u003e\u003cp\u003eThis module reexports all generally usefull types and operations\n  from Data.StringMap.Base.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.StringMap",
          "name": "StringMap",
          "package": "data-stringmap",
          "source": "src/Data-StringMap.html",
          "type": "module"
        },
        "index": {
          "description": "An efficient implementation of maps from strings to arbitrary values Values can be associated with an arbitrary Char key Searching for keys is very fast The main differences to Data.Map and Data.IntMap are the special prefixFind functions which can be used to perform prefix queries The interface is heavily borrowed from Data.Map and Data.IntMap Most other function names clash with Prelude names therefore this module is usually imported qualified e.g import Data.StringMap StringMap import qualified Data.StringMap as Many functions have worst-case complexity of min This means that the operation can become linear with the number of elements with maximum of the length of the key the number of bytes in the list The functions for searching prefix have worst-case complexity of max This means that the operation can become linear with the number of elements found for the prefix with minimum of This module reexports all generally usefull types and operations from Data.StringMap.Base",
          "hierarchy": "Data StringMap",
          "module": "Data.StringMap",
          "name": "StringMap",
          "package": "data-stringmap",
          "partial": "String Map",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.StringMap",
          "name": "Key",
          "package": "data-stringmap",
          "source": "src/Data-StringMap-Types.html#Key",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data StringMap",
          "module": "Data.StringMap",
          "name": "Key",
          "package": "data-stringmap",
          "partial": "Key",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap.html#t:Key"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.StringMap",
          "name": "StringMap",
          "package": "data-stringmap",
          "source": "src/Data-StringMap-Base.html#StringMap",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data StringMap",
          "module": "Data.StringMap",
          "name": "StringMap",
          "package": "data-stringmap",
          "partial": "String Map",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap.html#t:StringMap"
      }
    }
  ]
]