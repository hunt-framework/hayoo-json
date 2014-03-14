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
        "word": "text-format-simple"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Format",
          "name": "Format",
          "package": "text-format-simple",
          "source": "src/Text-Format.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Text Format",
          "module": "Text.Format",
          "name": "Format",
          "package": "text-format-simple",
          "partial": "Format",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/text-format-simple/docs/Text-Format.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFormats input string, using C#-style.\n\u003c/p\u003e\u003cp\u003eFirst param is the input string in the form: \"Please, replace here {0} and here {1}\".\n\u003c/p\u003e\u003cp\u003eSecond param is list of strings to put into {0}, {1} .. {N} positions.\n\u003c/p\u003e\u003cp\u003eExample: \n\u003c/p\u003e\u003cpre\u003e format \"Some {0} think that 1 + 1 = {1}.\" [\"people\",show 10]\n\u003c/pre\u003e\u003cp\u003eResult is:\n\u003c/p\u003e\u003cpre\u003e \"Some people think that 1 + 1 = 10.\"\n\u003c/pre\u003e",
          "module": "Text.Format",
          "name": "format",
          "package": "text-format-simple",
          "signature": "String -\u003e [String] -\u003e String",
          "source": "src/Text-Format.html#format",
          "type": "function"
        },
        "index": {
          "description": "Formats input string using style First param is the input string in the form Please replace here and here Second param is list of strings to put into positions Example format Some think that people show Result is Some people think that",
          "hierarchy": "Text Format",
          "module": "Text.Format",
          "name": "format",
          "normalized": "String-\u003e[String]-\u003eString",
          "package": "text-format-simple",
          "signature": "String-\u003e[String]-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-format-simple/docs/Text-Format.html#v:format"
      }
    }
  ]
]