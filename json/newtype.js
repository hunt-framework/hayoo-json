[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/newtype/docs/Control-Newtype.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eNewtype\u003c/a\u003e\u003c/code\u003e typeclass and related functions: \u003ccode\u003e\u003ca\u003eop\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eala\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eala'\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eunder\u003c/a\u003e\u003c/code\u003e. Primarly pulled from Conor McBride's Epigram work. Some examples:\n\u003c/p\u003e\u003cpre\u003eala Sum foldMap [1,2,3,4] -- foldMaps the list ala the Sum newtype. This results in 10.\u003c/pre\u003e\u003cpre\u003eala Product foldMap [1,2,3,4] -- foldMaps the list ala the Product newtype. This results in 24.\u003c/pre\u003e\u003cpre\u003eala Endo foldMap [(+1), (+2), (subtract 1), (*2)] 3 -- foldMaps the list ala the Endo newtype. This results in 8.\u003c/pre\u003e\u003cp\u003eNB: \u003ccode\u003eData.Foldable.foldMap\u003c/code\u003e is a generalized \u003ccode\u003emconcatMap\u003c/code\u003e which is a generalized \u003ccode\u003econcatMap\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis package includes \u003ccode\u003e\u003ca\u003eNewtype\u003c/a\u003e\u003c/code\u003e instances for all the (non-GHC/foreign) newtypes in base (as seen in the examples). However, there are neat things you can do with this with \u003cem\u003eany\u003c/em\u003e newtype and you should definitely define your own \u003ccode\u003e\u003ca\u003eNewtype\u003c/a\u003e\u003c/code\u003e instances for the power of this library. For example, see \u003ccode\u003eala Cont traverse\u003c/code\u003e, with the proper \u003ccode\u003e\u003ca\u003eNewtype\u003c/a\u003e\u003c/code\u003e instance for Cont.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Newtype",
        "fct-package": "newtype",
        "fct-signature": "module",
        "fct-source": "src/Control-Newtype.html",
        "fct-type": "module",
        "title": "Newtype"
      },
      "index": {
        "description": "The Newtype typeclass and related functions op ala ala under Primarly pulled from Conor McBride Epigram work Some examples ala Sum foldMap foldMaps the list ala the Sum newtype This results in ala Product foldMap foldMaps the list ala the Product newtype This results in ala Endo foldMap subtract foldMaps the list ala the Endo newtype This results in NB Data.Foldable.foldMap is generalized mconcatMap which is generalized concatMap This package includes Newtype instances for all the non-GHC foreign newtypes in base as seen in the examples However there are neat things you can do with this with any newtype and you should definitely define your own Newtype instances for the power of this library For example see ala Cont traverse with the proper Newtype instance for Cont",
        "hierarchy": "Control Newtype",
        "module": "Control.Newtype",
        "name": "Newtype",
        "normalized": "",
        "package": "newtype",
        "partial": "Newtype",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/newtype/docs/Control-Newtype.html#t:Newtype",
      "description": {
        "fct-descr": "\u003cp\u003eGiven a newtype \u003ccode\u003en\u003c/code\u003e, we will always have the same unwrapped type \u003ccode\u003eo\u003c/code\u003e, meaning we can represent this with a fundep \u003ccode\u003en -\u003e o\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eAny instance of this class just needs to let \u003ccode\u003epack\u003c/code\u003e equal to the newtype's constructor, and let \u003ccode\u003eunpack\u003c/code\u003e destruct the newtype with pattern matching.\n\u003c/p\u003e",
        "fct-module": "Control.Newtype",
        "fct-package": "newtype",
        "fct-signature": "class",
        "fct-source": "src/Control-Newtype.html#Newtype",
        "fct-type": "class",
        "title": "Newtype"
      },
      "index": {
        "description": "Given newtype we will always have the same unwrapped type meaning we can represent this with fundep Any instance of this class just needs to let pack equal to the newtype constructor and let unpack destruct the newtype with pattern matching",
        "hierarchy": "Control Newtype",
        "module": "Control.Newtype",
        "name": "Newtype",
        "normalized": "",
        "package": "newtype",
        "partial": "Newtype",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/newtype/docs/Control-Newtype.html#v:ala",
      "description": {
        "fct-descr": "\u003cp\u003eThe workhorse of the package. Given a pack and a \"higher order function\", it handles the packing and unpacking, and just sends you back a regular old function, with the type varying based on the hof you passed.\n\u003c/p\u003e\u003cp\u003eThe reason for the signature of the hof is due to \u003ccode\u003e\u003ca\u003eala\u003c/a\u003e\u003c/code\u003e not caring about structure. To illustrate why this is important, another function in this package is \u003ccode\u003e\u003ca\u003eunder\u003c/a\u003e\u003c/code\u003e. It is not extremely useful; \u003ccode\u003eunder2\u003c/code\u003e might be more useful (with e.g., \u003ccode\u003emappend\u003c/code\u003e), but then we already digging the trench of \"What about \u003ccode\u003eunder3\u003c/code\u003e? \u003ccode\u003eunder4\u003c/code\u003e?\". The solution utilized here is to just hand off the \"packer\" to the hof. That way your structure can be imposed in the hof, whatever you may want it to be (e.g., List, Traversable). \n\u003c/p\u003e",
        "fct-module": "Control.Newtype",
        "fct-package": "newtype",
        "fct-signature": "(o -\u003e n) -\u003e ((o -\u003e n) -\u003e b -\u003e n') -\u003e b -\u003e o'",
        "fct-source": "src/Control-Newtype.html#ala",
        "fct-type": "function",
        "title": "ala"
      },
      "index": {
        "description": "The workhorse of the package Given pack and higher order function it handles the packing and unpacking and just sends you back regular old function with the type varying based on the hof you passed The reason for the signature of the hof is due to ala not caring about structure To illustrate why this is important another function in this package is under It is not extremely useful under2 might be more useful with e.g mappend but then we already digging the trench of What about under3 under4 The solution utilized here is to just hand off the packer to the hof That way your structure can be imposed in the hof whatever you may want it to be e.g List Traversable",
        "hierarchy": "Control Newtype",
        "module": "Control.Newtype",
        "name": "ala",
        "normalized": "(a-\u003eb)-\u003e((a-\u003eb)-\u003ec-\u003ed)-\u003ec-\u003ee",
        "package": "newtype",
        "partial": "",
        "signature": "(o-\u003en)-\u003e((o-\u003en)-\u003eb-\u003en')-\u003eb-\u003eo'"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/newtype/docs/Control-Newtype.html#v:ala-39-",
      "description": {
        "fct-descr": "\u003cp\u003eThis is the original function seen in Conor McBride's work. The way it differs from the \u003ccode\u003e\u003ca\u003eala\u003c/a\u003e\u003c/code\u003e function in this package, is that it provides an extra hook into the \"packer\" passed to the hof. However, this normally ends up being \u003ccode\u003eid\u003c/code\u003e, so \u003ccode\u003e\u003ca\u003eala\u003c/a\u003e\u003c/code\u003e wraps this function and passes \u003ccode\u003eid\u003c/code\u003e as the final parameter by default. If you want the convenience of being able to hook right into the hof, you may use this function.\n\u003c/p\u003e",
        "fct-module": "Control.Newtype",
        "fct-package": "newtype",
        "fct-signature": "(o -\u003e n) -\u003e ((a -\u003e n) -\u003e b -\u003e n') -\u003e (a -\u003e o) -\u003e b -\u003e o'",
        "fct-source": "src/Control-Newtype.html#ala%27",
        "fct-type": "function",
        "title": "ala'"
      },
      "index": {
        "description": "This is the original function seen in Conor McBride work The way it differs from the ala function in this package is that it provides an extra hook into the packer passed to the hof However this normally ends up being id so ala wraps this function and passes id as the final parameter by default If you want the convenience of being able to hook right into the hof you may use this function",
        "hierarchy": "Control Newtype",
        "module": "Control.Newtype",
        "name": "ala'",
        "normalized": "(a-\u003eb)-\u003e((c-\u003eb)-\u003ed-\u003ee)-\u003e(c-\u003ea)-\u003ed-\u003ef",
        "package": "newtype",
        "partial": "",
        "signature": "(o-\u003en)-\u003e((a-\u003en)-\u003eb-\u003en')-\u003e(a-\u003eo)-\u003eb-\u003eo'"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/newtype/docs/Control-Newtype.html#v:op",
      "description": {
        "fct-descr": "\u003cp\u003eThis function serves two purposes:\n\u003c/p\u003e\u003col\u003e\u003cli\u003e Giving you the unpack of a newtype without you needing to remember the name.\n\u003c/li\u003e\u003cli\u003e Showing that the first parameter is \u003cem\u003ecompletely ignored\u003c/em\u003e on the value level, meaning the only reason you pass in the constructor is to provide type information. Typeclasses sure are neat.\n\u003c/li\u003e\u003c/ol\u003e",
        "fct-module": "Control.Newtype",
        "fct-package": "newtype",
        "fct-signature": "(o -\u003e n) -\u003e n -\u003e o",
        "fct-source": "src/Control-Newtype.html#op",
        "fct-type": "function",
        "title": "op"
      },
      "index": {
        "description": "This function serves two purposes Giving you the unpack of newtype without you needing to remember the name Showing that the first parameter is completely ignored on the value level meaning the only reason you pass in the constructor is to provide type information Typeclasses sure are neat",
        "hierarchy": "Control Newtype",
        "module": "Control.Newtype",
        "name": "op",
        "normalized": "(a-\u003eb)-\u003eb-\u003ea",
        "package": "newtype",
        "partial": "",
        "signature": "(o-\u003en)-\u003en-\u003eo"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/newtype/docs/Control-Newtype.html#v:over",
      "description": {
        "fct-descr": "\u003cp\u003eThe opposite of \u003ccode\u003e\u003ca\u003eunder\u003c/a\u003e\u003c/code\u003e. I.e., take a function which works on the underlying types, and switch it to a function that works on the newtypes.\n\u003c/p\u003e",
        "fct-module": "Control.Newtype",
        "fct-package": "newtype",
        "fct-signature": "(o -\u003e n) -\u003e (o -\u003e o') -\u003e n -\u003e n'",
        "fct-source": "src/Control-Newtype.html#over",
        "fct-type": "function",
        "title": "over"
      },
      "index": {
        "description": "The opposite of under I.e take function which works on the underlying types and switch it to function that works on the newtypes",
        "hierarchy": "Control Newtype",
        "module": "Control.Newtype",
        "name": "over",
        "normalized": "(a-\u003eb)-\u003e(a-\u003ec)-\u003eb-\u003ed",
        "package": "newtype",
        "partial": "",
        "signature": "(o-\u003en)-\u003e(o-\u003eo')-\u003en-\u003en'"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/newtype/docs/Control-Newtype.html#v:overF",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eover\u003c/a\u003e\u003c/code\u003e lifted into a Functor.\n\u003c/p\u003e",
        "fct-module": "Control.Newtype",
        "fct-package": "newtype",
        "fct-signature": "(o -\u003e n) -\u003e (f o -\u003e f o') -\u003e f n -\u003e f n'",
        "fct-source": "src/Control-Newtype.html#overF",
        "fct-type": "function",
        "title": "overF"
      },
      "index": {
        "description": "over lifted into Functor",
        "hierarchy": "Control Newtype",
        "module": "Control.Newtype",
        "name": "overF",
        "normalized": "(a-\u003eb)-\u003e(c a-\u003ec d)-\u003ec b-\u003ec e",
        "package": "newtype",
        "partial": "",
        "signature": "(o-\u003en)-\u003e(f o-\u003ef o')-\u003ef n-\u003ef n'"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/newtype/docs/Control-Newtype.html#v:pack",
      "description": {
        "fct-module": "Control.Newtype",
        "fct-package": "newtype",
        "fct-signature": "o -\u003e n",
        "fct-source": "src/Control-Newtype.html#pack",
        "fct-type": "method",
        "title": "pack"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Newtype",
        "module": "Control.Newtype",
        "name": "pack",
        "normalized": "a-\u003eb",
        "package": "newtype",
        "partial": "",
        "signature": "o-\u003en"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/newtype/docs/Control-Newtype.html#v:under",
      "description": {
        "fct-descr": "\u003cp\u003eA very simple operation involving running the function 'under' the newtype. Suffers from the problems mentioned in the \u003ccode\u003e\u003ca\u003eala\u003c/a\u003e\u003c/code\u003e function's documentation.\n\u003c/p\u003e",
        "fct-module": "Control.Newtype",
        "fct-package": "newtype",
        "fct-signature": "(o -\u003e n) -\u003e (n -\u003e n') -\u003e o -\u003e o'",
        "fct-source": "src/Control-Newtype.html#under",
        "fct-type": "function",
        "title": "under"
      },
      "index": {
        "description": "very simple operation involving running the function under the newtype Suffers from the problems mentioned in the ala function documentation",
        "hierarchy": "Control Newtype",
        "module": "Control.Newtype",
        "name": "under",
        "normalized": "(a-\u003eb)-\u003e(b-\u003ec)-\u003ea-\u003ed",
        "package": "newtype",
        "partial": "",
        "signature": "(o-\u003en)-\u003e(n-\u003en')-\u003eo-\u003eo'"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/newtype/docs/Control-Newtype.html#v:underF",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eunder\u003c/a\u003e\u003c/code\u003e lifted into a Functor.\n\u003c/p\u003e",
        "fct-module": "Control.Newtype",
        "fct-package": "newtype",
        "fct-signature": "(o -\u003e n) -\u003e (f n -\u003e f n') -\u003e f o -\u003e f o'",
        "fct-source": "src/Control-Newtype.html#underF",
        "fct-type": "function",
        "title": "underF"
      },
      "index": {
        "description": "under lifted into Functor",
        "hierarchy": "Control Newtype",
        "module": "Control.Newtype",
        "name": "underF",
        "normalized": "(a-\u003eb)-\u003e(c b-\u003ec d)-\u003ec a-\u003ec e",
        "package": "newtype",
        "partial": "",
        "signature": "(o-\u003en)-\u003e(f n-\u003ef n')-\u003ef o-\u003ef o'"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/newtype/docs/Control-Newtype.html#v:unpack",
      "description": {
        "fct-module": "Control.Newtype",
        "fct-package": "newtype",
        "fct-signature": "n -\u003e o",
        "fct-source": "src/Control-Newtype.html#unpack",
        "fct-type": "method",
        "title": "unpack"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Newtype",
        "module": "Control.Newtype",
        "name": "unpack",
        "normalized": "a-\u003eb",
        "package": "newtype",
        "partial": "",
        "signature": "n-\u003eo"
      }
    }
  }
]