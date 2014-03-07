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
        "word": "hjpath"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eI wanted to insert a description here, but got tired fighting with haddock escaping. Documentation: \u003ca\u003ehttp://bitcheese.net/wiki/code/hjpath\u003c/a\u003e\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.JSON.JPath",
          "name": "JPath",
          "package": "hjpath",
          "source": "src/Text-JSON-JPath.html",
          "type": "module"
        },
        "index": {
          "description": "wanted to insert description here but got tired fighting with haddock escaping Documentation http bitcheese.net wiki code hjpath",
          "hierarchy": "Text JSON JPath",
          "module": "Text.JSON.JPath",
          "name": "JPath",
          "package": "hjpath",
          "partial": "JPath",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hjpath/docs/Text-JSON-JPath.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClass that allows type to be used as JSON, all you need to implement is converting to and from Text.HJson.Json\n\u003c/p\u003e",
          "module": "Text.JSON.JPath",
          "name": "HJsonLike",
          "package": "hjpath",
          "source": "src/Text-JSON-JPath.html#HJsonLike",
          "type": "class"
        },
        "index": {
          "description": "Class that allows type to be used as JSON all you need to implement is converting to and from Text.HJson.Json",
          "hierarchy": "Text JSON JPath",
          "module": "Text.JSON.JPath",
          "name": "HJsonLike",
          "package": "hjpath",
          "partial": "HJson Like",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/hjpath/docs/Text-JSON-JPath.html#t:HJsonLike"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eJPath query building blocks\n\u003c/p\u003e",
          "module": "Text.JSON.JPath",
          "name": "QueryElement",
          "package": "hjpath",
          "source": "src/Text-JSON-JPath.html#QueryElement",
          "type": "data"
        },
        "index": {
          "description": "JPath query building blocks",
          "hierarchy": "Text JSON JPath",
          "module": "Text.JSON.JPath",
          "name": "QueryElement",
          "package": "hjpath",
          "partial": "Query Element",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hjpath/docs/Text-JSON-JPath.html#t:QueryElement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClass that allows type to be used as JPath query\n\u003c/p\u003e",
          "module": "Text.JSON.JPath",
          "name": "QueryLike",
          "package": "hjpath",
          "source": "src/Text-JSON-JPath.html#QueryLike",
          "type": "class"
        },
        "index": {
          "description": "Class that allows type to be used as JPath query",
          "hierarchy": "Text JSON JPath",
          "module": "Text.JSON.JPath",
          "name": "QueryLike",
          "package": "hjpath",
          "partial": "Query Like",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/hjpath/docs/Text-JSON-JPath.html#t:QueryLike"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLook up array element (from 0 forward or from -1 backward)\n\u003c/p\u003e",
          "module": "Text.JSON.JPath",
          "name": "ArrayLookup",
          "package": "hjpath",
          "signature": "ArrayLookup Integer",
          "source": "src/Text-JSON-JPath.html#QueryElement",
          "type": "function"
        },
        "index": {
          "description": "Look up array element from forward or from backward",
          "hierarchy": "Text JSON JPath",
          "module": "Text.JSON.JPath",
          "name": "ArrayLookup",
          "package": "hjpath",
          "partial": "Array Lookup",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hjpath/docs/Text-JSON-JPath.html#v:ArrayLookup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatches any number of child entries\n\u003c/p\u003e",
          "module": "Text.JSON.JPath",
          "name": "DeepLookup",
          "package": "hjpath",
          "signature": "DeepLookup",
          "source": "src/Text-JSON-JPath.html#QueryElement",
          "type": "function"
        },
        "index": {
          "description": "Matches any number of child entries",
          "hierarchy": "Text JSON JPath",
          "module": "Text.JSON.JPath",
          "name": "DeepLookup",
          "package": "hjpath",
          "partial": "Deep Lookup",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hjpath/docs/Text-JSON-JPath.html#v:DeepLookup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLook up element in object\n\u003c/p\u003e",
          "module": "Text.JSON.JPath",
          "name": "ObjectLookup",
          "package": "hjpath",
          "signature": "ObjectLookup String",
          "source": "src/Text-JSON-JPath.html#QueryElement",
          "type": "function"
        },
        "index": {
          "description": "Look up element in object",
          "hierarchy": "Text JSON JPath",
          "module": "Text.JSON.JPath",
          "name": "ObjectLookup",
          "package": "hjpath",
          "partial": "Object Lookup",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hjpath/docs/Text-JSON-JPath.html#v:ObjectLookup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatches any child element (array or hash entries)\n\u003c/p\u003e",
          "module": "Text.JSON.JPath",
          "name": "WildcardLookup",
          "package": "hjpath",
          "signature": "WildcardLookup",
          "source": "src/Text-JSON-JPath.html#QueryElement",
          "type": "function"
        },
        "index": {
          "description": "Matches any child element array or hash entries",
          "hierarchy": "Text JSON JPath",
          "module": "Text.JSON.JPath",
          "name": "WildcardLookup",
          "package": "hjpath",
          "partial": "Wildcard Lookup",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hjpath/docs/Text-JSON-JPath.html#v:WildcardLookup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvaluates JPath query on JSON String\n\u003c/p\u003e",
          "module": "Text.JSON.JPath",
          "name": "jPath",
          "package": "hjpath",
          "signature": "q-\u003e j-\u003e [j]",
          "type": "function"
        },
        "index": {
          "description": "Evaluates JPath query on JSON String",
          "hierarchy": "Text JSON JPath",
          "module": "Text.JSON.JPath",
          "name": "jPath",
          "normalized": "a-\u003eb-\u003e[b]",
          "package": "hjpath",
          "partial": "Path",
          "signature": "q-\u003ej-\u003e[j]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hjpath/docs/Text-JSON-JPath.html#v:jPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eModifies JSON content under JPath expression\n\u003c/p\u003e",
          "module": "Text.JSON.JPath",
          "name": "jPathModify",
          "package": "hjpath",
          "signature": "q-\u003e (Json -\u003e Json)-\u003e j-\u003e j",
          "type": "function"
        },
        "index": {
          "description": "Modifies JSON content under JPath expression",
          "hierarchy": "Text JSON JPath",
          "module": "Text.JSON.JPath",
          "name": "jPathModify",
          "normalized": "a-\u003e(Json-\u003eJson)-\u003eb-\u003eb",
          "package": "hjpath",
          "partial": "Path Modify",
          "signature": "q-\u003e(Json-\u003eJson)-\u003ej-\u003ej",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hjpath/docs/Text-JSON-JPath.html#v:jPathModify"
      }
    }
  ]
]