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
        "word": "acme-numbersystem"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Acme.NumberSystem",
          "name": "NumberSystem",
          "package": "acme-numbersystem",
          "source": "src/Acme-NumberSystem.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Acme NumberSystem",
          "module": "Acme.NumberSystem",
          "name": "NumberSystem",
          "package": "acme-numbersystem",
          "partial": "Number System",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/acme-numbersystem/docs/Acme-NumberSystem.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Acme.NumberSystem",
          "name": "Add",
          "package": "acme-numbersystem",
          "signature": "Add",
          "type": "function"
        },
        "index": {
          "hierarchy": "Acme NumberSystem",
          "module": "Acme.NumberSystem",
          "name": "Add",
          "package": "acme-numbersystem",
          "partial": "Add",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/acme-numbersystem/docs/Acme-NumberSystem.html#t:Add"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Acme.NumberSystem",
          "name": "Less",
          "package": "acme-numbersystem",
          "source": "src/Acme-NumberSystem.html#Less",
          "type": "type"
        },
        "index": {
          "hierarchy": "Acme NumberSystem",
          "module": "Acme.NumberSystem",
          "name": "Less",
          "package": "acme-numbersystem",
          "partial": "Less",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/acme-numbersystem/docs/Acme-NumberSystem.html#t:Less"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Acme.NumberSystem",
          "name": "Sub",
          "package": "acme-numbersystem",
          "signature": "Sub",
          "type": "function"
        },
        "index": {
          "hierarchy": "Acme NumberSystem",
          "module": "Acme.NumberSystem",
          "name": "Sub",
          "package": "acme-numbersystem",
          "partial": "Sub",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/acme-numbersystem/docs/Acme-NumberSystem.html#t:Sub"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefine the less than relation for numbers up to a number using Template Haskell.\n | Also define subtraction.\n | E.g. numberSystem 100\n\u003c/p\u003e",
          "module": "Acme.NumberSystem",
          "name": "numberSystem",
          "package": "acme-numbersystem",
          "signature": "Integer -\u003e Q [Dec]",
          "source": "src/Acme-NumberSystem.html#numberSystem",
          "type": "function"
        },
        "index": {
          "description": "Define the less than relation for numbers up to number using Template Haskell Also define subtraction E.g numberSystem",
          "hierarchy": "Acme NumberSystem",
          "module": "Acme.NumberSystem",
          "name": "numberSystem",
          "normalized": "Integer-\u003eQ[Dec]",
          "package": "acme-numbersystem",
          "partial": "System",
          "signature": "Integer-\u003eQ[Dec]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/acme-numbersystem/docs/Acme-NumberSystem.html#v:numberSystem"
      }
    }
  ]
]