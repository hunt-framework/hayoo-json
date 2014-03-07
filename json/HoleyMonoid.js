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
        "word": "HoleyMonoid"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eMonoids with holes. The \u003ccode\u003e\u003ca\u003eHoleyMonoid\u003c/a\u003e\u003c/code\u003e allows building monoidal values of which certain components are to be filled in later. For example:\n\u003c/p\u003e\u003cpre\u003e \u003e let holey = now \"x = \"\n             . later show\n             . now \", y = \"\n             . later show\n \u003e run holey 3 5\n \"x = 3, y = 5\"\n\u003c/pre\u003e\u003cp\u003eThis module is intended to be imported in qualified fashion, e.g.\n\u003c/p\u003e\u003cpre\u003e import qualified Data.HoleyMonoid as HM\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Data.HoleyMonoid",
          "name": "HoleyMonoid",
          "package": "HoleyMonoid",
          "source": "src/Data-HoleyMonoid.html",
          "type": "module"
        },
        "index": {
          "description": "Monoids with holes The HoleyMonoid allows building monoidal values of which certain components are to be filled in later For example let holey now later show now later show run holey This module is intended to be imported in qualified fashion e.g import qualified Data.HoleyMonoid as HM",
          "hierarchy": "Data HoleyMonoid",
          "module": "Data.HoleyMonoid",
          "name": "HoleyMonoid",
          "package": "HoleyMonoid",
          "partial": "Holey Monoid",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HoleyMonoid/docs/Data-HoleyMonoid.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type of a monoid with holes. The underlying monoid is represented by\n type parameter \u003ccode\u003em\u003c/code\u003e. The \u003ccode\u003er\u003c/code\u003e is the result type and stays polymorphic until the\n very last moment when \u003ccode\u003e\u003ca\u003erun\u003c/a\u003e\u003c/code\u003e is called. The last argument \u003ccode\u003ea\u003c/code\u003e is always a\n function with zero or more arguments, finally resulting in \u003ccode\u003er\u003c/code\u003e. Ordering the\n arguments in this order allows holey monoids to be composed using \u003ccode\u003e\u003ca\u003e.\u003c/a\u003e\u003c/code\u003e, stacking the\n expected arguments. Note that the \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e constraint is only used in the\n identity \u003ccode\u003e\u003ca\u003eHoleyMonoid\u003c/a\u003e\u003c/code\u003e and in composing two \u003ccode\u003e\u003ca\u003eHoleyMonoid\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
          "module": "Data.HoleyMonoid",
          "name": "HoleyMonoid",
          "package": "HoleyMonoid",
          "source": "src/Data-HoleyMonoid.html#HoleyMonoid",
          "type": "data"
        },
        "index": {
          "description": "The type of monoid with holes The underlying monoid is represented by type parameter The is the result type and stays polymorphic until the very last moment when run is called The last argument is always function with zero or more arguments finally resulting in Ordering the arguments in this order allows holey monoids to be composed using stacking the expected arguments Note that the Monoid constraint is only used in the identity HoleyMonoid and in composing two HoleyMonoid",
          "hierarchy": "Data HoleyMonoid",
          "module": "Data.HoleyMonoid",
          "name": "HoleyMonoid",
          "package": "HoleyMonoid",
          "partial": "Holey Monoid",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HoleyMonoid/docs/Data-HoleyMonoid.html#t:HoleyMonoid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInsert a monoidal value that is not specified until the computation is\n \u003ccode\u003e\u003ca\u003erun\u003c/a\u003e\u003c/code\u003e. The argument that is expected later is converted to the monoid type\n using the given conversion function.\n\u003c/p\u003e",
          "module": "Data.HoleyMonoid",
          "name": "later",
          "package": "HoleyMonoid",
          "signature": "(a -\u003e m) -\u003e HoleyMonoid m r (a -\u003e r)",
          "source": "src/Data-HoleyMonoid.html#later",
          "type": "function"
        },
        "index": {
          "description": "Insert monoidal value that is not specified until the computation is run The argument that is expected later is converted to the monoid type using the given conversion function",
          "hierarchy": "Data HoleyMonoid",
          "module": "Data.HoleyMonoid",
          "name": "later",
          "normalized": "(a-\u003eb)-\u003eHoleyMonoid b c(a-\u003ec)",
          "package": "HoleyMonoid",
          "signature": "(a-\u003em)-\u003eHoleyMonoid m r(a-\u003er)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HoleyMonoid/docs/Data-HoleyMonoid.html#v:later"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert between underlying \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e types.\n\u003c/p\u003e",
          "module": "Data.HoleyMonoid",
          "name": "map",
          "package": "HoleyMonoid",
          "signature": "(m -\u003e n) -\u003e HoleyMonoid m r a -\u003e HoleyMonoid n r a",
          "source": "src/Data-HoleyMonoid.html#map",
          "type": "function"
        },
        "index": {
          "description": "Convert between underlying Monoid types",
          "hierarchy": "Data HoleyMonoid",
          "module": "Data.HoleyMonoid",
          "name": "map",
          "normalized": "(a-\u003eb)-\u003eHoleyMonoid a c d-\u003eHoleyMonoid b c d",
          "package": "HoleyMonoid",
          "signature": "(m-\u003en)-\u003eHoleyMonoid m r a-\u003eHoleyMonoid n r a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HoleyMonoid/docs/Data-HoleyMonoid.html#v:map"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInsert a constant monoidal value.\n\u003c/p\u003e",
          "module": "Data.HoleyMonoid",
          "name": "now",
          "package": "HoleyMonoid",
          "signature": "m -\u003e HoleyMonoid m r r",
          "source": "src/Data-HoleyMonoid.html#now",
          "type": "function"
        },
        "index": {
          "description": "Insert constant monoidal value",
          "hierarchy": "Data HoleyMonoid",
          "module": "Data.HoleyMonoid",
          "name": "now",
          "normalized": "a-\u003eHoleyMonoid a b b",
          "package": "HoleyMonoid",
          "signature": "m-\u003eHoleyMonoid m r r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HoleyMonoid/docs/Data-HoleyMonoid.html#v:now"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun the computation, resulting in a function that still expects some\n arguments. The number of arguments that is still expected will be equal to the\n number of \u003ccode\u003e\u003ca\u003elater\u003c/a\u003e\u003c/code\u003es the computation is built of.\n\u003c/p\u003e",
          "module": "Data.HoleyMonoid",
          "name": "run",
          "package": "HoleyMonoid",
          "signature": "HoleyMonoid m m a -\u003e a",
          "source": "src/Data-HoleyMonoid.html#run",
          "type": "function"
        },
        "index": {
          "description": "Run the computation resulting in function that still expects some arguments The number of arguments that is still expected will be equal to the number of later the computation is built of",
          "hierarchy": "Data HoleyMonoid",
          "module": "Data.HoleyMonoid",
          "name": "run",
          "normalized": "HoleyMonoid a a b-\u003eb",
          "package": "HoleyMonoid",
          "signature": "HoleyMonoid m m a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HoleyMonoid/docs/Data-HoleyMonoid.html#v:run"
      }
    }
  ]
]