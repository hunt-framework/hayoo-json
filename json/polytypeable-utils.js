[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/polytypeable-utils/docs/Data-PolyTypeable-Utils.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eUsage:\n\u003c/p\u003e\u003cpre\u003e \u003e polyTypeOf id\n a1 -\u003e a1\n\u003c/pre\u003e\u003cpre\u003e \u003e freeTyVars (polyTypeOf id)\n [\"a1\"]\n\u003c/pre\u003e\u003cpre\u003e \u003e substTyVar (\"a1\",polyTypeOf(undefined::Int)) (polyTypeOf id)\n Int -\u003e Int\n\u003c/pre\u003e\u003cpre\u003e \u003e polyTypeOf const\n a1 -\u003e a2 -\u003e a1\n\u003c/pre\u003e\u003cpre\u003e \u003e freeTyVars (polyTypeOf const) \n [\"a1\",\"a2\"]\n\u003c/pre\u003e\u003cpre\u003e \u003e substManyTyVars [(\"a1\",polyTypeOf(undefined::Int)),(\"a2\",polyTypeOf(undefined::Bool))] (polyTypeOf const)\n Int -\u003e Bool -\u003e Int\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "Data.PolyTypeable.Utils",
        "fct-package": "polytypeable-utils",
        "fct-signature": "module",
        "fct-source": "src/Data-PolyTypeable-Utils.html",
        "fct-type": "module",
        "title": "Utils"
      },
      "index": {
        "description": "Usage polyTypeOf id a1 a1 freeTyVars polyTypeOf id a1 substTyVar a1 polyTypeOf undefined Int polyTypeOf id Int Int polyTypeOf const a1 a2 a1 freeTyVars polyTypeOf const a1 a2 substManyTyVars a1 polyTypeOf undefined Int a2 polyTypeOf undefined Bool polyTypeOf const Int Bool Int",
        "hierarchy": "Data PolyTypeable Utils",
        "module": "Data.PolyTypeable.Utils",
        "name": "Utils",
        "normalized": "",
        "package": "polytypeable-utils",
        "partial": "Utils",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/polytypeable-utils/docs/Data-PolyTypeable-Utils.html#v:freeTyVars",
      "description": {
        "fct-descr": "\u003cp\u003ecollect free type variables (e.g. a1, a2, ...) without duplicates\n\u003c/p\u003e",
        "fct-module": "Data.PolyTypeable.Utils",
        "fct-package": "polytypeable-utils",
        "fct-signature": "TypeRep -\u003e [String]",
        "fct-source": "src/Data-PolyTypeable-Utils.html#freeTyVars",
        "fct-type": "function",
        "title": "freeTyVars"
      },
      "index": {
        "description": "collect free type variables e.g a1 a2 without duplicates",
        "hierarchy": "Data PolyTypeable Utils",
        "module": "Data.PolyTypeable.Utils",
        "name": "freeTyVars",
        "normalized": "TypeRep-\u003e[String]",
        "package": "polytypeable-utils",
        "partial": "Ty Vars",
        "signature": "TypeRep-\u003e[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/polytypeable-utils/docs/Data-PolyTypeable-Utils.html#v:substTyVar",
      "description": {
        "fct-descr": "\u003cp\u003esubstitue a type variable\n\u003c/p\u003e",
        "fct-module": "Data.PolyTypeable.Utils",
        "fct-package": "polytypeable-utils",
        "fct-signature": "(String, TypeRep) -\u003e TypeRep -\u003e TypeRep",
        "fct-source": "src/Data-PolyTypeable-Utils.html#substTyVar",
        "fct-type": "function",
        "title": "substTyVar"
      },
      "index": {
        "description": "substitue type variable",
        "hierarchy": "Data PolyTypeable Utils",
        "module": "Data.PolyTypeable.Utils",
        "name": "substTyVar",
        "normalized": "(String,TypeRep)-\u003eTypeRep-\u003eTypeRep",
        "package": "polytypeable-utils",
        "partial": "Ty Var",
        "signature": "(String,TypeRep)-\u003eTypeRep-\u003eTypeRep"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/polytypeable-utils/docs/Data-PolyTypeable-Utils.html#v:substTyVars",
      "description": {
        "fct-descr": "\u003cp\u003esubstitue many type variables\n\u003c/p\u003e",
        "fct-module": "Data.PolyTypeable.Utils",
        "fct-package": "polytypeable-utils",
        "fct-signature": "[(String, TypeRep)] -\u003e TypeRep -\u003e TypeRep",
        "fct-source": "src/Data-PolyTypeable-Utils.html#substTyVars",
        "fct-type": "function",
        "title": "substTyVars"
      },
      "index": {
        "description": "substitue many type variables",
        "hierarchy": "Data PolyTypeable Utils",
        "module": "Data.PolyTypeable.Utils",
        "name": "substTyVars",
        "normalized": "[(String,TypeRep)]-\u003eTypeRep-\u003eTypeRep",
        "package": "polytypeable-utils",
        "partial": "Ty Vars",
        "signature": "[(String,TypeRep)]-\u003eTypeRep-\u003eTypeRep"
      }
    }
  }
]