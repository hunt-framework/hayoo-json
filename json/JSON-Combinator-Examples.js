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
        "word": "JSON-Combinator-Examples"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.JSON.Combinator.Examples",
          "name": "Examples",
          "package": "JSON-Combinator-Examples",
          "source": "src/Text-JSON-Combinator-Examples.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Text JSON Combinator Examples",
          "module": "Text.JSON.Combinator.Examples",
          "name": "Examples",
          "package": "JSON-Combinator-Examples",
          "partial": "Examples",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/JSON-Combinator-Examples/docs/Text-JSON-Combinator-Examples.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUsing both \u003ccode\u003eText.JSON\u003c/code\u003e and \u003ccode\u003eText.JSONb\u003c/code\u003e,\n then given a file name of a JSON object,\n go through each field of that object and:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e If it is a string, reverse it\n\u003c/li\u003e\u003cli\u003e If it is a number, add 1 to it\n\u003c/li\u003e\u003cli\u003e If it is a boolean, invert it\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003ethen pretty-print the result of each of the parsers.\n\u003c/p\u003e",
          "module": "Text.JSON.Combinator.Examples",
          "name": "example1",
          "package": "JSON-Combinator-Examples",
          "signature": "FilePath-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Using both Text.JSON and Text.JSONb then given file name of JSON object go through each field of that object and If it is string reverse it If it is number add to it If it is boolean invert it then pretty-print the result of each of the parsers",
          "hierarchy": "Text JSON Combinator Examples",
          "module": "Text.JSON.Combinator.Examples",
          "name": "example1",
          "normalized": "FilePath-\u003eIO()",
          "package": "JSON-Combinator-Examples",
          "signature": "FilePath-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JSON-Combinator-Examples/docs/Text-JSON-Combinator-Examples.html#v:example1"
      }
    }
  ]
]