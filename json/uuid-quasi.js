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
        "word": "uuid-quasi"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis library supplies quasiquotation of \u003ccode\u003e\u003ca\u003eUUID\u003c/a\u003e\u003c/code\u003es. You should use this in\n case you want to hardcode \u003ccode\u003e\u003ca\u003eUUID\u003c/a\u003e\u003c/code\u003es in your sourcecode with compile-time\n checking for syntax errors.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.UUID.Quasi",
          "name": "Quasi",
          "package": "uuid-quasi",
          "source": "src/Data-UUID-Quasi.html",
          "type": "module"
        },
        "index": {
          "description": "This library supplies quasiquotation of UUID You should use this in case you want to hardcode UUID in your sourcecode with compile-time checking for syntax errors",
          "hierarchy": "Data UUID Quasi",
          "module": "Data.UUID.Quasi",
          "name": "Quasi",
          "package": "uuid-quasi",
          "partial": "Quasi",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/uuid-quasi/docs/Data-UUID-Quasi.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe quasiquoter for expressions and patterns of \u003ccode\u003e\u003ca\u003eUUID\u003c/a\u003e\u003c/code\u003e. Make sure to enable '-XQuasiQuotes'.\n\u003c/p\u003e\u003cpre\u003e \u003e let a = [uuid|550e8400-e29b-41d4-a716-446655440000|]\n \u003e :type a\n a :: UUID\n \u003e case a of { [uuid|550e8400-e29b-41d4-a716-446655440000|] -\u003e True; _ -\u003e False; }\n True\n\u003c/pre\u003e\u003cp\u003ePattern matching requires '-XViewPatterns'.\n\u003c/p\u003e",
          "module": "Data.UUID.Quasi",
          "name": "uuid",
          "package": "uuid-quasi",
          "signature": "QuasiQuoter",
          "source": "src/Data-UUID-Quasi.html#uuid",
          "type": "function"
        },
        "index": {
          "description": "The quasiquoter for expressions and patterns of UUID Make sure to enable XQuasiQuotes let uuid e8400-e29b-41d4-a716-446655440000 type UUID case of uuid e8400-e29b-41d4-a716-446655440000 True False True Pattern matching requires XViewPatterns",
          "hierarchy": "Data UUID Quasi",
          "module": "Data.UUID.Quasi",
          "name": "uuid",
          "package": "uuid-quasi",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uuid-quasi/docs/Data-UUID-Quasi.html#v:uuid"
      }
    }
  ]
]