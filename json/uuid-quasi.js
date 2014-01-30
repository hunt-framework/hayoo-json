[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uuid-quasi/docs/Data-UUID-Quasi.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis library supplies quasiquotation of \u003ccode\u003e\u003ca\u003eUUID\u003c/a\u003e\u003c/code\u003es. You should use this in\n case you want to hardcode \u003ccode\u003e\u003ca\u003eUUID\u003c/a\u003e\u003c/code\u003es in your sourcecode with compile-time\n checking for syntax errors.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.UUID.Quasi",
        "fct-package": "uuid-quasi",
        "fct-signature": "module",
        "fct-source": "src/Data-UUID-Quasi.html",
        "fct-type": "module",
        "title": "Quasi"
      },
      "index": {
        "description": "This library supplies quasiquotation of UUID You should use this in case you want to hardcode UUID in your sourcecode with compile-time checking for syntax errors",
        "hierarchy": "Data UUID Quasi",
        "module": "Data.UUID.Quasi",
        "name": "Quasi",
        "normalized": "",
        "package": "uuid-quasi",
        "partial": "Quasi",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uuid-quasi/docs/Data-UUID-Quasi.html#v:uuid",
      "description": {
        "fct-descr": "\u003cp\u003eThe quasiquoter for expressions and patterns of \u003ccode\u003e\u003ca\u003eUUID\u003c/a\u003e\u003c/code\u003e. Make sure to enable '-XQuasiQuotes'.\n\u003c/p\u003e\u003cpre\u003e \u003e let a = [uuid|550e8400-e29b-41d4-a716-446655440000|]\n \u003e :type a\n a :: UUID\n \u003e case a of { [uuid|550e8400-e29b-41d4-a716-446655440000|] -\u003e True; _ -\u003e False; }\n True\n\u003c/pre\u003e\u003cp\u003ePattern matching requires '-XViewPatterns'.\n\u003c/p\u003e",
        "fct-module": "Data.UUID.Quasi",
        "fct-package": "uuid-quasi",
        "fct-signature": "QuasiQuoter",
        "fct-source": "src/Data-UUID-Quasi.html#uuid",
        "fct-type": "function",
        "title": "uuid"
      },
      "index": {
        "description": "The quasiquoter for expressions and patterns of UUID Make sure to enable XQuasiQuotes let uuid e8400-e29b-41d4-a716-446655440000 type UUID case of uuid e8400-e29b-41d4-a716-446655440000 True False True Pattern matching requires XViewPatterns",
        "hierarchy": "Data UUID Quasi",
        "module": "Data.UUID.Quasi",
        "name": "uuid",
        "normalized": "",
        "package": "uuid-quasi",
        "partial": "",
        "signature": ""
      }
    }
  }
]