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
        "word": "jspath"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eExtract substructures from JSON structures by following a path.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.JSONb.Path",
          "name": "Path",
          "package": "jspath",
          "source": "src/Text-JSONb-Path.html",
          "type": "module"
        },
        "index": {
          "description": "Extract substructures from JSON structures by following path",
          "hierarchy": "Text JSONb Path",
          "module": "Text.JSONb.Path",
          "name": "Path",
          "package": "jspath",
          "partial": "Path",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/jspath/docs/Text-JSONb-Path.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ccode\u003e\u003ca\u003ePath\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e is used to traverse a \u003ccode\u003eJSON\u003c/code\u003e structure and yield\n zero or more substructures.\n\u003c/p\u003e",
          "module": "Text.JSONb.Path",
          "name": "Path",
          "package": "jspath",
          "source": "src/Text-JSONb-Path.html#Path",
          "type": "data"
        },
        "index": {
          "description": "Path is used to traverse JSON structure and yield zero or more substructures",
          "hierarchy": "Text JSONb Path",
          "module": "Text.JSONb.Path",
          "name": "Path",
          "package": "jspath",
          "partial": "Path",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/jspath/docs/Text-JSONb-Path.html#t:Path"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSelects an element from a collection. Abstract.\n\u003c/p\u003e",
          "module": "Text.JSONb.Path",
          "name": "Selector",
          "package": "jspath",
          "source": "src/Text-JSONb-Path.html#Selector",
          "type": "data"
        },
        "index": {
          "description": "Selects an element from collection Abstract",
          "hierarchy": "Text JSONb Path",
          "module": "Text.JSONb.Path",
          "name": "Selector",
          "package": "jspath",
          "partial": "Selector",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/jspath/docs/Text-JSONb-Path.html#t:Selector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSelect an element and continue on some path.\n\u003c/p\u003e",
          "module": "Text.JSONb.Path",
          "name": ":=\u003e",
          "package": "jspath",
          "signature": "Path",
          "source": "src/Text-JSONb-Path.html#Path",
          "type": "function"
        },
        "index": {
          "description": "Select an element and continue on some path",
          "hierarchy": "Text JSONb Path",
          "module": "Text.JSONb.Path",
          "name": ":=\u003e",
          "package": "jspath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jspath/docs/Text-JSONb-Path.html#v::-61--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFollow a path for each \u003ccode\u003eArray\u003c/code\u003e element.\n\u003c/p\u003e",
          "module": "Text.JSONb.Path",
          "name": "All",
          "package": "jspath",
          "signature": "All Path",
          "source": "src/Text-JSONb-Path.html#Path",
          "type": "function"
        },
        "index": {
          "description": "Follow path for each Array element",
          "hierarchy": "Text JSONb Path",
          "module": "Text.JSONb.Path",
          "name": "All",
          "package": "jspath",
          "partial": "All",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jspath/docs/Text-JSONb-Path.html#v:All"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChoose a path programmatically.\n\u003c/p\u003e",
          "module": "Text.JSONb.Path",
          "name": "Compute",
          "package": "jspath",
          "signature": "Compute (JSON -\u003e Path)",
          "source": "src/Text-JSONb-Path.html#Path",
          "type": "function"
        },
        "index": {
          "description": "Choose path programmatically",
          "hierarchy": "Text JSONb Path",
          "module": "Text.JSONb.Path",
          "name": "Compute",
          "normalized": "Compute(JSON-\u003ePath)",
          "package": "jspath",
          "partial": "Compute",
          "signature": "Compute(JSON-\u003ePath)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jspath/docs/Text-JSONb-Path.html#v:Compute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eYield nothing.\n\u003c/p\u003e",
          "module": "Text.JSONb.Path",
          "name": "Fail",
          "package": "jspath",
          "signature": "Fail",
          "source": "src/Text-JSONb-Path.html#Path",
          "type": "function"
        },
        "index": {
          "description": "Yield nothing",
          "hierarchy": "Text JSONb Path",
          "module": "Text.JSONb.Path",
          "name": "Fail",
          "package": "jspath",
          "partial": "Fail",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jspath/docs/Text-JSONb-Path.html#v:Fail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eYield this structure.\n\u003c/p\u003e",
          "module": "Text.JSONb.Path",
          "name": "Yield",
          "package": "jspath",
          "signature": "Yield",
          "source": "src/Text-JSONb-Path.html#Path",
          "type": "function"
        },
        "index": {
          "description": "Yield this structure",
          "hierarchy": "Text JSONb Path",
          "module": "Text.JSONb.Path",
          "name": "Yield",
          "package": "jspath",
          "partial": "Yield",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jspath/docs/Text-JSONb-Path.html#v:Yield"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFollow a path to get all matching substructures.\n\u003c/p\u003e",
          "module": "Text.JSONb.Path",
          "name": "get",
          "package": "jspath",
          "signature": "Path -\u003e JSON -\u003e [JSON]",
          "source": "src/Text-JSONb-Path.html#get",
          "type": "function"
        },
        "index": {
          "description": "Follow path to get all matching substructures",
          "hierarchy": "Text JSONb Path",
          "module": "Text.JSONb.Path",
          "name": "get",
          "normalized": "Path-\u003eJSON-\u003e[JSON]",
          "package": "jspath",
          "signature": "Path-\u003eJSON-\u003e[JSON]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jspath/docs/Text-JSONb-Path.html#v:get"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFollow a path to get the first matching substructure.\n\u003c/p\u003e",
          "module": "Text.JSONb.Path",
          "name": "getOne",
          "package": "jspath",
          "signature": "Path -\u003e JSON -\u003e Maybe JSON",
          "source": "src/Text-JSONb-Path.html#getOne",
          "type": "function"
        },
        "index": {
          "description": "Follow path to get the first matching substructure",
          "hierarchy": "Text JSONb Path",
          "module": "Text.JSONb.Path",
          "name": "getOne",
          "normalized": "Path-\u003eJSON-\u003eMaybe JSON",
          "package": "jspath",
          "partial": "One",
          "signature": "Path-\u003eJSON-\u003eMaybe JSON",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jspath/docs/Text-JSONb-Path.html#v:getOne"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSelect from an \u003ccode\u003eArray\u003c/code\u003e by index.\n\u003c/p\u003e",
          "module": "Text.JSONb.Path",
          "name": "idx",
          "package": "jspath",
          "signature": "Int -\u003e Selector",
          "source": "src/Text-JSONb-Path.html#idx",
          "type": "function"
        },
        "index": {
          "description": "Select from an Array by index",
          "hierarchy": "Text JSONb Path",
          "module": "Text.JSONb.Path",
          "name": "idx",
          "normalized": "Int-\u003eSelector",
          "package": "jspath",
          "signature": "Int-\u003eSelector",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jspath/docs/Text-JSONb-Path.html#v:idx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSelect from an \u003ccode\u003eObject\u003c/code\u003e by key.\n\u003c/p\u003e",
          "module": "Text.JSONb.Path",
          "name": "key",
          "package": "jspath",
          "signature": "String -\u003e Selector",
          "source": "src/Text-JSONb-Path.html#key",
          "type": "function"
        },
        "index": {
          "description": "Select from an Object by key",
          "hierarchy": "Text JSONb Path",
          "module": "Text.JSONb.Path",
          "name": "key",
          "normalized": "String-\u003eSelector",
          "package": "jspath",
          "signature": "String-\u003eSelector",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jspath/docs/Text-JSONb-Path.html#v:key"
      }
    }
  ]
]