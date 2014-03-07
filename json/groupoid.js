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
        "word": "groupoid"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eGroupoid - a set with a binary operator, more general than \n monoid as there is no obligation to have a neutral element \n (i.e mempty in Data.Monoid).\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Groupoid",
          "name": "Groupoid",
          "package": "groupoid",
          "source": "src/Data-Groupoid.html",
          "type": "module"
        },
        "index": {
          "description": "Groupoid set with binary operator more general than monoid as there is no obligation to have neutral element i.e mempty in Data.Monoid",
          "hierarchy": "Data Groupoid",
          "module": "Data.Groupoid",
          "name": "Groupoid",
          "package": "groupoid",
          "partial": "Groupoid",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/groupoid/docs/Data-Groupoid.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Groupoid",
          "name": "Groupoid",
          "package": "groupoid",
          "source": "src/Data-Groupoid.html#Groupoid",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data Groupoid",
          "module": "Data.Groupoid",
          "name": "Groupoid",
          "package": "groupoid",
          "partial": "Groupoid",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/groupoid/docs/Data-Groupoid.html#t:Groupoid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA binary operation, not necessarily associative.\n\u003c/p\u003e",
          "module": "Data.Groupoid",
          "name": "gappend",
          "package": "groupoid",
          "signature": "a -\u003e a -\u003e a",
          "source": "src/Data-Groupoid.html#gappend",
          "type": "method"
        },
        "index": {
          "description": "binary operation not necessarily associative",
          "hierarchy": "Data Groupoid",
          "module": "Data.Groupoid",
          "name": "gappend",
          "normalized": "a-\u003ea-\u003ea",
          "package": "groupoid",
          "signature": "a-\u003ea-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/groupoid/docs/Data-Groupoid.html#v:gappend"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFold a non-empty list with the groupoid. The default \n definition uses \u003ccode\u003e\u003ca\u003efoldr1\u003c/a\u003e\u003c/code\u003e which throws an exception when\n applied to the empty list.\n\u003c/p\u003e",
          "module": "Data.Groupoid",
          "name": "gconcat",
          "package": "groupoid",
          "signature": "[a] -\u003e a",
          "source": "src/Data-Groupoid.html#gconcat",
          "type": "method"
        },
        "index": {
          "description": "Fold non-empty list with the groupoid The default definition uses foldr1 which throws an exception when applied to the empty list",
          "hierarchy": "Data Groupoid",
          "module": "Data.Groupoid",
          "name": "gconcat",
          "normalized": "[a]-\u003ea",
          "package": "groupoid",
          "signature": "[a]-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/groupoid/docs/Data-Groupoid.html#v:gconcat"
      }
    }
  ]
]