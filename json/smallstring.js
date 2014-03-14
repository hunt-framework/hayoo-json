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
        "word": "smallstring"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAn immutable Unicode text type, optimized for low memory overhead.  A\n \u003ccode\u003e\u003ca\u003eSmallString\u003c/a\u003e\u003c/code\u003e typically uses less memory than the corresponding \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e.  Use\n \u003ccode\u003e\u003ca\u003eSmallString\u003c/a\u003e\u003c/code\u003e when storing a large number of short texts, for example when\n indexing a map using words or short phrases.\n\u003c/p\u003e\u003cp\u003eTo manipulate a \u003ccode\u003e\u003ca\u003eSmallString\u003c/a\u003e\u003c/code\u003e, first convert it into a \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e.  For more\n information on working with \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e, see the \u003ccode\u003etext\u003c/code\u003e package:\n http:\u003cem/\u003ehackage.haskell.org\u003cem\u003epackage\u003c/em\u003etext\n\u003c/p\u003e\u003cp\u003eThe Ord instance is not guaranteed to be the same as that of the corresponding\n string.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.SmallString",
          "name": "SmallString",
          "package": "smallstring",
          "source": "src/Data-SmallString.html",
          "type": "module"
        },
        "index": {
          "description": "An immutable Unicode text type optimized for low memory overhead SmallString typically uses less memory than the corresponding Text Use SmallString when storing large number of short texts for example when indexing map using words or short phrases To manipulate SmallString first convert it into Text For more information on working with Text see the text package http hackage.haskell.org package text The Ord instance is not guaranteed to be the same as that of the corresponding string",
          "hierarchy": "Data SmallString",
          "module": "Data.SmallString",
          "name": "SmallString",
          "package": "smallstring",
          "partial": "Small String",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/smallstring/docs/Data-SmallString.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA space efficient representation of Unicode text.\n\u003c/p\u003e",
          "module": "Data.SmallString",
          "name": "SmallString",
          "package": "smallstring",
          "source": "src/Data-SmallString.html#SmallString",
          "type": "data"
        },
        "index": {
          "description": "space efficient representation of Unicode text",
          "hierarchy": "Data SmallString",
          "module": "Data.SmallString",
          "name": "SmallString",
          "package": "smallstring",
          "partial": "Small String",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/smallstring/docs/Data-SmallString.html#t:SmallString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e into a \u003ccode\u003e\u003ca\u003eSmallString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.SmallString",
          "name": "fromString",
          "package": "smallstring",
          "signature": "String -\u003e SmallString",
          "source": "src/Data-SmallString.html#fromString",
          "type": "function"
        },
        "index": {
          "description": "Convert String into SmallString",
          "hierarchy": "Data SmallString",
          "module": "Data.SmallString",
          "name": "fromString",
          "normalized": "String-\u003eSmallString",
          "package": "smallstring",
          "partial": "String",
          "signature": "String-\u003eSmallString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/smallstring/docs/Data-SmallString.html#v:fromString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e into a \u003ccode\u003e\u003ca\u003eSmallString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.SmallString",
          "name": "fromText",
          "package": "smallstring",
          "signature": "Text -\u003e SmallString",
          "source": "src/Data-SmallString.html#fromText",
          "type": "function"
        },
        "index": {
          "description": "Convert Text into SmallString",
          "hierarchy": "Data SmallString",
          "module": "Data.SmallString",
          "name": "fromText",
          "normalized": "Text-\u003eSmallString",
          "package": "smallstring",
          "partial": "Text",
          "signature": "Text-\u003eSmallString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/smallstring/docs/Data-SmallString.html#v:fromText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a \u003ccode\u003e\u003ca\u003eSmallString\u003c/a\u003e\u003c/code\u003e into a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.SmallString",
          "name": "toString",
          "package": "smallstring",
          "signature": "SmallString -\u003e String",
          "source": "src/Data-SmallString.html#toString",
          "type": "function"
        },
        "index": {
          "description": "Convert SmallString into String",
          "hierarchy": "Data SmallString",
          "module": "Data.SmallString",
          "name": "toString",
          "normalized": "SmallString-\u003eString",
          "package": "smallstring",
          "partial": "String",
          "signature": "SmallString-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/smallstring/docs/Data-SmallString.html#v:toString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a \u003ccode\u003e\u003ca\u003eSmallString\u003c/a\u003e\u003c/code\u003e into a \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.SmallString",
          "name": "toText",
          "package": "smallstring",
          "signature": "SmallString -\u003e Text",
          "source": "src/Data-SmallString.html#toText",
          "type": "function"
        },
        "index": {
          "description": "Convert SmallString into Text",
          "hierarchy": "Data SmallString",
          "module": "Data.SmallString",
          "name": "toText",
          "normalized": "SmallString-\u003eText",
          "package": "smallstring",
          "partial": "Text",
          "signature": "SmallString-\u003eText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/smallstring/docs/Data-SmallString.html#v:toText"
      }
    }
  ]
]