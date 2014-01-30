[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uniqueid/docs/Data-Unique-Id.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides splittable supplies for unique identifiers.\n   The main idea gows back to L. Augustsson, M. Rittri, and D. Synek\n   and is described in their paper 'On generating unique names'\n   (Journal of Functional Programming 4(1), 1994. pp. 117-123). The\n   implementation at hand is taken from the GHC sources and includes\n   bit fiddling to allow multiple supplies that generate unique\n   identifiers by prepending a character given at initialization.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Unique.Id",
        "fct-package": "uniqueid",
        "fct-signature": "module",
        "fct-source": "src/Data-Unique-Id.html",
        "fct-type": "module",
        "title": "Id"
      },
      "index": {
        "description": "This module provides splittable supplies for unique identifiers The main idea gows back to Augustsson Rittri and Synek and is described in their paper On generating unique names Journal of Functional Programming pp The implementation at hand is taken from the GHC sources and includes bit fiddling to allow multiple supplies that generate unique identifiers by prepending character given at initialization",
        "hierarchy": "Data Unique Id",
        "module": "Data.Unique.Id",
        "name": "Id",
        "normalized": "",
        "package": "uniqueid",
        "partial": "Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uniqueid/docs/Data-Unique-Id.html#t:Id",
      "description": {
        "fct-descr": "\u003cp\u003eUnique identifiers are of type \u003ccode\u003e\u003ca\u003eId\u003c/a\u003e\u003c/code\u003e and can be hashed to an \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e\n   usning the function \u003ccode\u003e\u003ca\u003ehashedId\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Unique.Id",
        "fct-package": "uniqueid",
        "fct-signature": "data",
        "fct-source": "src/Data-Unique-Id.html#Id",
        "fct-type": "data",
        "title": "Id"
      },
      "index": {
        "description": "Unique identifiers are of type Id and can be hashed to an Int usning the function hashedId",
        "hierarchy": "Data Unique Id",
        "module": "Data.Unique.Id",
        "name": "Id",
        "normalized": "",
        "package": "uniqueid",
        "partial": "Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uniqueid/docs/Data-Unique-Id.html#t:IdSupply",
      "description": {
        "fct-descr": "\u003cp\u003eSupplies for unique identifiers are of type \u003ccode\u003e\u003ca\u003eIdSupply\u003c/a\u003e\u003c/code\u003e and can be\n   split into two new supplies or yield a unique identifier.\n\u003c/p\u003e",
        "fct-module": "Data.Unique.Id",
        "fct-package": "uniqueid",
        "fct-signature": "data",
        "fct-source": "src/Data-Unique-Id.html#IdSupply",
        "fct-type": "data",
        "title": "IdSupply"
      },
      "index": {
        "description": "Supplies for unique identifiers are of type IdSupply and can be split into two new supplies or yield unique identifier",
        "hierarchy": "Data Unique Id",
        "module": "Data.Unique.Id",
        "name": "IdSupply",
        "normalized": "",
        "package": "uniqueid",
        "partial": "Id Supply",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uniqueid/docs/Data-Unique-Id.html#v:hashedId",
      "description": {
        "fct-module": "Data.Unique.Id",
        "fct-package": "uniqueid",
        "fct-signature": "Id -\u003e Int",
        "fct-source": "src/Data-Unique-Id.html#hashedId",
        "fct-type": "function",
        "title": "hashedId"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Unique Id",
        "module": "Data.Unique.Id",
        "name": "hashedId",
        "normalized": "Id-\u003eInt",
        "package": "uniqueid",
        "partial": "Id",
        "signature": "Id-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uniqueid/docs/Data-Unique-Id.html#v:idFromSupply",
      "description": {
        "fct-descr": "\u003cp\u003eYields the unique identifier from a supply.\n\u003c/p\u003e",
        "fct-module": "Data.Unique.Id",
        "fct-package": "uniqueid",
        "fct-signature": "IdSupply -\u003e Id",
        "fct-source": "src/Data-Unique-Id.html#idFromSupply",
        "fct-type": "function",
        "title": "idFromSupply"
      },
      "index": {
        "description": "Yields the unique identifier from supply",
        "hierarchy": "Data Unique Id",
        "module": "Data.Unique.Id",
        "name": "idFromSupply",
        "normalized": "IdSupply-\u003eId",
        "package": "uniqueid",
        "partial": "From Supply",
        "signature": "IdSupply-\u003eId"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uniqueid/docs/Data-Unique-Id.html#v:initIdSupply",
      "description": {
        "fct-descr": "\u003cp\u003eGenerates a new supply of unique identifiers. The given character\n   is prepended to generated numbers.\n\u003c/p\u003e",
        "fct-module": "Data.Unique.Id",
        "fct-package": "uniqueid",
        "fct-signature": "Char -\u003e IO IdSupply",
        "fct-source": "src/Data-Unique-Id.html#initIdSupply",
        "fct-type": "function",
        "title": "initIdSupply"
      },
      "index": {
        "description": "Generates new supply of unique identifiers The given character is prepended to generated numbers",
        "hierarchy": "Data Unique Id",
        "module": "Data.Unique.Id",
        "name": "initIdSupply",
        "normalized": "Char-\u003eIO IdSupply",
        "package": "uniqueid",
        "partial": "Id Supply",
        "signature": "Char-\u003eIO IdSupply"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uniqueid/docs/Data-Unique-Id.html#v:splitIdSupply",
      "description": {
        "fct-descr": "\u003cp\u003eSplits a supply of unique identifiers to yield two of them.\n\u003c/p\u003e",
        "fct-module": "Data.Unique.Id",
        "fct-package": "uniqueid",
        "fct-signature": "IdSupply -\u003e (IdSupply, IdSupply)",
        "fct-source": "src/Data-Unique-Id.html#splitIdSupply",
        "fct-type": "function",
        "title": "splitIdSupply"
      },
      "index": {
        "description": "Splits supply of unique identifiers to yield two of them",
        "hierarchy": "Data Unique Id",
        "module": "Data.Unique.Id",
        "name": "splitIdSupply",
        "normalized": "IdSupply-\u003e(IdSupply,IdSupply)",
        "package": "uniqueid",
        "partial": "Id Supply",
        "signature": "IdSupply-\u003e(IdSupply,IdSupply)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uniqueid/docs/Data-Unique-Id.html#v:splitIdSupplyL",
      "description": {
        "fct-descr": "\u003cp\u003eSplits a supply of unique identifiers to yield an infinite list of them.\n\u003c/p\u003e",
        "fct-module": "Data.Unique.Id",
        "fct-package": "uniqueid",
        "fct-signature": "IdSupply -\u003e [IdSupply]",
        "fct-source": "src/Data-Unique-Id.html#splitIdSupplyL",
        "fct-type": "function",
        "title": "splitIdSupplyL"
      },
      "index": {
        "description": "Splits supply of unique identifiers to yield an infinite list of them",
        "hierarchy": "Data Unique Id",
        "module": "Data.Unique.Id",
        "name": "splitIdSupplyL",
        "normalized": "IdSupply-\u003e[IdSupply]",
        "package": "uniqueid",
        "partial": "Id Supply",
        "signature": "IdSupply-\u003e[IdSupply]"
      }
    }
  }
]