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
        "word": "uniqueid"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides splittable supplies for unique identifiers.\n   The main idea gows back to L. Augustsson, M. Rittri, and D. Synek\n   and is described in their paper 'On generating unique names'\n   (Journal of Functional Programming 4(1), 1994. pp. 117-123). The\n   implementation at hand is taken from the GHC sources and includes\n   bit fiddling to allow multiple supplies that generate unique\n   identifiers by prepending a character given at initialization.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Unique.Id",
          "name": "Id",
          "package": "uniqueid",
          "source": "src/Data-Unique-Id.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides splittable supplies for unique identifiers The main idea gows back to Augustsson Rittri and Synek and is described in their paper On generating unique names Journal of Functional Programming pp The implementation at hand is taken from the GHC sources and includes bit fiddling to allow multiple supplies that generate unique identifiers by prepending character given at initialization",
          "hierarchy": "Data Unique Id",
          "module": "Data.Unique.Id",
          "name": "Id",
          "package": "uniqueid",
          "partial": "Id",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/uniqueid/docs/Data-Unique-Id.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnique identifiers are of type \u003ccode\u003e\u003ca\u003eId\u003c/a\u003e\u003c/code\u003e and can be hashed to an \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e\n   usning the function \u003ccode\u003e\u003ca\u003ehashedId\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Unique.Id",
          "name": "Id",
          "package": "uniqueid",
          "source": "src/Data-Unique-Id.html#Id",
          "type": "data"
        },
        "index": {
          "description": "Unique identifiers are of type Id and can be hashed to an Int usning the function hashedId",
          "hierarchy": "Data Unique Id",
          "module": "Data.Unique.Id",
          "name": "Id",
          "package": "uniqueid",
          "partial": "Id",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/uniqueid/docs/Data-Unique-Id.html#t:Id"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSupplies for unique identifiers are of type \u003ccode\u003e\u003ca\u003eIdSupply\u003c/a\u003e\u003c/code\u003e and can be\n   split into two new supplies or yield a unique identifier.\n\u003c/p\u003e",
          "module": "Data.Unique.Id",
          "name": "IdSupply",
          "package": "uniqueid",
          "source": "src/Data-Unique-Id.html#IdSupply",
          "type": "data"
        },
        "index": {
          "description": "Supplies for unique identifiers are of type IdSupply and can be split into two new supplies or yield unique identifier",
          "hierarchy": "Data Unique Id",
          "module": "Data.Unique.Id",
          "name": "IdSupply",
          "package": "uniqueid",
          "partial": "Id Supply",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/uniqueid/docs/Data-Unique-Id.html#t:IdSupply"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Unique.Id",
          "name": "hashedId",
          "package": "uniqueid",
          "signature": "Id -\u003e Int",
          "source": "src/Data-Unique-Id.html#hashedId",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Unique Id",
          "module": "Data.Unique.Id",
          "name": "hashedId",
          "normalized": "Id-\u003eInt",
          "package": "uniqueid",
          "partial": "Id",
          "signature": "Id-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uniqueid/docs/Data-Unique-Id.html#v:hashedId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eYields the unique identifier from a supply.\n\u003c/p\u003e",
          "module": "Data.Unique.Id",
          "name": "idFromSupply",
          "package": "uniqueid",
          "signature": "IdSupply -\u003e Id",
          "source": "src/Data-Unique-Id.html#idFromSupply",
          "type": "function"
        },
        "index": {
          "description": "Yields the unique identifier from supply",
          "hierarchy": "Data Unique Id",
          "module": "Data.Unique.Id",
          "name": "idFromSupply",
          "normalized": "IdSupply-\u003eId",
          "package": "uniqueid",
          "partial": "From Supply",
          "signature": "IdSupply-\u003eId",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uniqueid/docs/Data-Unique-Id.html#v:idFromSupply"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerates a new supply of unique identifiers. The given character\n   is prepended to generated numbers.\n\u003c/p\u003e",
          "module": "Data.Unique.Id",
          "name": "initIdSupply",
          "package": "uniqueid",
          "signature": "Char -\u003e IO IdSupply",
          "source": "src/Data-Unique-Id.html#initIdSupply",
          "type": "function"
        },
        "index": {
          "description": "Generates new supply of unique identifiers The given character is prepended to generated numbers",
          "hierarchy": "Data Unique Id",
          "module": "Data.Unique.Id",
          "name": "initIdSupply",
          "normalized": "Char-\u003eIO IdSupply",
          "package": "uniqueid",
          "partial": "Id Supply",
          "signature": "Char-\u003eIO IdSupply",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uniqueid/docs/Data-Unique-Id.html#v:initIdSupply"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSplits a supply of unique identifiers to yield two of them.\n\u003c/p\u003e",
          "module": "Data.Unique.Id",
          "name": "splitIdSupply",
          "package": "uniqueid",
          "signature": "IdSupply -\u003e (IdSupply, IdSupply)",
          "source": "src/Data-Unique-Id.html#splitIdSupply",
          "type": "function"
        },
        "index": {
          "description": "Splits supply of unique identifiers to yield two of them",
          "hierarchy": "Data Unique Id",
          "module": "Data.Unique.Id",
          "name": "splitIdSupply",
          "normalized": "IdSupply-\u003e(IdSupply,IdSupply)",
          "package": "uniqueid",
          "partial": "Id Supply",
          "signature": "IdSupply-\u003e(IdSupply,IdSupply)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uniqueid/docs/Data-Unique-Id.html#v:splitIdSupply"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSplits a supply of unique identifiers to yield an infinite list of them.\n\u003c/p\u003e",
          "module": "Data.Unique.Id",
          "name": "splitIdSupplyL",
          "package": "uniqueid",
          "signature": "IdSupply -\u003e [IdSupply]",
          "source": "src/Data-Unique-Id.html#splitIdSupplyL",
          "type": "function"
        },
        "index": {
          "description": "Splits supply of unique identifiers to yield an infinite list of them",
          "hierarchy": "Data Unique Id",
          "module": "Data.Unique.Id",
          "name": "splitIdSupplyL",
          "normalized": "IdSupply-\u003e[IdSupply]",
          "package": "uniqueid",
          "partial": "Id Supply",
          "signature": "IdSupply-\u003e[IdSupply]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uniqueid/docs/Data-Unique-Id.html#v:splitIdSupplyL"
      }
    }
  ]
]