[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HoleyMonoid/docs/Data-HoleyMonoid.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eMonoids with holes. The \u003ccode\u003e\u003ca\u003eHoleyMonoid\u003c/a\u003e\u003c/code\u003e allows building monoidal values of which certain components are to be filled in later. For example:\n\u003c/p\u003e\u003cpre\u003e \u003e let holey = now \"x = \"\n             . later show\n             . now \", y = \"\n             . later show\n \u003e run holey 3 5\n \"x = 3, y = 5\"\n\u003c/pre\u003e\u003cp\u003eThis module is intended to be imported in qualified fashion, e.g.\n\u003c/p\u003e\u003cpre\u003e import qualified Data.HoleyMonoid as HM\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "Data.HoleyMonoid",
        "fct-package": "HoleyMonoid",
        "fct-signature": "module",
        "fct-source": "src/Data-HoleyMonoid.html",
        "fct-type": "module",
        "title": "HoleyMonoid"
      },
      "index": {
        "description": "Monoids with holes The HoleyMonoid allows building monoidal values of which certain components are to be filled in later For example let holey now later show now later show run holey This module is intended to be imported in qualified fashion e.g import qualified Data.HoleyMonoid as HM",
        "hierarchy": "Data HoleyMonoid",
        "module": "Data.HoleyMonoid",
        "name": "HoleyMonoid",
        "normalized": "",
        "package": "HoleyMonoid",
        "partial": "Holey Monoid",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HoleyMonoid/docs/Data-HoleyMonoid.html#t:HoleyMonoid",
      "description": {
        "fct-descr": "\u003cp\u003eThe type of a monoid with holes. The underlying monoid is represented by\n type parameter \u003ccode\u003em\u003c/code\u003e. The \u003ccode\u003er\u003c/code\u003e is the result type and stays polymorphic until the\n very last moment when \u003ccode\u003e\u003ca\u003erun\u003c/a\u003e\u003c/code\u003e is called. The last argument \u003ccode\u003ea\u003c/code\u003e is always a\n function with zero or more arguments, finally resulting in \u003ccode\u003er\u003c/code\u003e. Ordering the\n arguments in this order allows holey monoids to be composed using \u003ccode\u003e\u003ca\u003e.\u003c/a\u003e\u003c/code\u003e, stacking the\n expected arguments. Note that the \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e constraint is only used in the\n identity \u003ccode\u003e\u003ca\u003eHoleyMonoid\u003c/a\u003e\u003c/code\u003e and in composing two \u003ccode\u003e\u003ca\u003eHoleyMonoid\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
        "fct-module": "Data.HoleyMonoid",
        "fct-package": "HoleyMonoid",
        "fct-signature": "data",
        "fct-source": "src/Data-HoleyMonoid.html#HoleyMonoid",
        "fct-type": "data",
        "title": "HoleyMonoid"
      },
      "index": {
        "description": "The type of monoid with holes The underlying monoid is represented by type parameter The is the result type and stays polymorphic until the very last moment when run is called The last argument is always function with zero or more arguments finally resulting in Ordering the arguments in this order allows holey monoids to be composed using stacking the expected arguments Note that the Monoid constraint is only used in the identity HoleyMonoid and in composing two HoleyMonoid",
        "hierarchy": "Data HoleyMonoid",
        "module": "Data.HoleyMonoid",
        "name": "HoleyMonoid",
        "normalized": "",
        "package": "HoleyMonoid",
        "partial": "Holey Monoid",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HoleyMonoid/docs/Data-HoleyMonoid.html#v:later",
      "description": {
        "fct-descr": "\u003cp\u003eInsert a monoidal value that is not specified until the computation is\n \u003ccode\u003e\u003ca\u003erun\u003c/a\u003e\u003c/code\u003e. The argument that is expected later is converted to the monoid type\n using the given conversion function.\n\u003c/p\u003e",
        "fct-module": "Data.HoleyMonoid",
        "fct-package": "HoleyMonoid",
        "fct-signature": "(a -\u003e m) -\u003e HoleyMonoid m r (a -\u003e r)",
        "fct-source": "src/Data-HoleyMonoid.html#later",
        "fct-type": "function",
        "title": "later"
      },
      "index": {
        "description": "Insert monoidal value that is not specified until the computation is run The argument that is expected later is converted to the monoid type using the given conversion function",
        "hierarchy": "Data HoleyMonoid",
        "module": "Data.HoleyMonoid",
        "name": "later",
        "normalized": "(a-\u003eb)-\u003eHoleyMonoid b c(a-\u003ec)",
        "package": "HoleyMonoid",
        "partial": "",
        "signature": "(a-\u003em)-\u003eHoleyMonoid m r(a-\u003er)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HoleyMonoid/docs/Data-HoleyMonoid.html#v:map",
      "description": {
        "fct-descr": "\u003cp\u003eConvert between underlying \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e types.\n\u003c/p\u003e",
        "fct-module": "Data.HoleyMonoid",
        "fct-package": "HoleyMonoid",
        "fct-signature": "(m -\u003e n) -\u003e HoleyMonoid m r a -\u003e HoleyMonoid n r a",
        "fct-source": "src/Data-HoleyMonoid.html#map",
        "fct-type": "function",
        "title": "map"
      },
      "index": {
        "description": "Convert between underlying Monoid types",
        "hierarchy": "Data HoleyMonoid",
        "module": "Data.HoleyMonoid",
        "name": "map",
        "normalized": "(a-\u003eb)-\u003eHoleyMonoid a c d-\u003eHoleyMonoid b c d",
        "package": "HoleyMonoid",
        "partial": "",
        "signature": "(m-\u003en)-\u003eHoleyMonoid m r a-\u003eHoleyMonoid n r a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HoleyMonoid/docs/Data-HoleyMonoid.html#v:now",
      "description": {
        "fct-descr": "\u003cp\u003eInsert a constant monoidal value.\n\u003c/p\u003e",
        "fct-module": "Data.HoleyMonoid",
        "fct-package": "HoleyMonoid",
        "fct-signature": "m -\u003e HoleyMonoid m r r",
        "fct-source": "src/Data-HoleyMonoid.html#now",
        "fct-type": "function",
        "title": "now"
      },
      "index": {
        "description": "Insert constant monoidal value",
        "hierarchy": "Data HoleyMonoid",
        "module": "Data.HoleyMonoid",
        "name": "now",
        "normalized": "a-\u003eHoleyMonoid a b b",
        "package": "HoleyMonoid",
        "partial": "",
        "signature": "m-\u003eHoleyMonoid m r r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HoleyMonoid/docs/Data-HoleyMonoid.html#v:run",
      "description": {
        "fct-descr": "\u003cp\u003eRun the computation, resulting in a function that still expects some\n arguments. The number of arguments that is still expected will be equal to the\n number of \u003ccode\u003e\u003ca\u003elater\u003c/a\u003e\u003c/code\u003es the computation is built of.\n\u003c/p\u003e",
        "fct-module": "Data.HoleyMonoid",
        "fct-package": "HoleyMonoid",
        "fct-signature": "HoleyMonoid m m a -\u003e a",
        "fct-source": "src/Data-HoleyMonoid.html#run",
        "fct-type": "function",
        "title": "run"
      },
      "index": {
        "description": "Run the computation resulting in function that still expects some arguments The number of arguments that is still expected will be equal to the number of later the computation is built of",
        "hierarchy": "Data HoleyMonoid",
        "module": "Data.HoleyMonoid",
        "name": "run",
        "normalized": "HoleyMonoid a a b-\u003eb",
        "package": "HoleyMonoid",
        "partial": "",
        "signature": "HoleyMonoid m m a-\u003ea"
      }
    }
  }
]