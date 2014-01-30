[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reflection/docs/Data-Reflection.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eReifies arbitrary terms at the type level. Based on the Functional\n Pearl: Implicit Configurations paper by Oleg Kiselyov and\n Chung-chieh Shan.\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.cs.rutgers.edu/~ccshan/prepose/prepose.pdf\u003c/a\u003e\n\u003c/p\u003e\u003cp\u003eThe approach from the paper was modified to work with Data.Proxy\n and to cheat by using knowledge of GHC's internal representations\n by Edward Kmett and Elliott Hird.\n\u003c/p\u003e\u003cp\u003eUsage comes down to two combinators, \u003ccode\u003e\u003ca\u003ereify\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003ereflect\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ereify 6 (\\p -\u003e reflect p + reflect p)\n\u003c/code\u003e\u003c/strong\u003e12\n\u003c/pre\u003e\u003cp\u003eThe argument passed along by reify is just a \u003ccode\u003edata \u003ccode\u003e\u003ca\u003eProxy\u003c/a\u003e\u003c/code\u003e t =\n Proxy\u003c/code\u003e, so all of the information needed to reconstruct your value\n has been moved to the type level.  This enables it to be used when\n constructing instances (see \u003ccode\u003eexamples/Monoid.hs\u003c/code\u003e).\n\u003c/p\u003e\u003cp\u003eIn addition, a simpler API is offered for working with singleton\n values such as a system configuration, etc.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Reflection",
        "fct-package": "reflection",
        "fct-signature": "module",
        "fct-source": "src/Data-Reflection.html",
        "fct-type": "module",
        "title": "Reflection"
      },
      "index": {
        "description": "Reifies arbitrary terms at the type level Based on the Functional Pearl Implicit Configurations paper by Oleg Kiselyov and Chung-chieh Shan http www.cs.rutgers.edu ccshan prepose prepose.pdf The approach from the paper was modified to work with Data.Proxy and to cheat by using knowledge of GHC internal representations by Edward Kmett and Elliott Hird Usage comes down to two combinators reify and reflect reify reflect reflect The argument passed along by reify is just data Proxy Proxy so all of the information needed to reconstruct your value has been moved to the type level This enables it to be used when constructing instances see examples Monoid.hs In addition simpler API is offered for working with singleton values such as system configuration etc",
        "hierarchy": "Data Reflection",
        "module": "Data.Reflection",
        "name": "Reflection",
        "normalized": "",
        "package": "reflection",
        "partial": "Reflection",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reflection/docs/Data-Reflection.html#t:D",
      "description": {
        "fct-module": "Data.Reflection",
        "fct-package": "reflection",
        "fct-signature": "data",
        "fct-source": "src/Data-Reflection.html#D",
        "fct-type": "data",
        "title": "D"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Reflection",
        "module": "Data.Reflection",
        "name": "D",
        "normalized": "",
        "package": "reflection",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reflection/docs/Data-Reflection.html#t:Given",
      "description": {
        "fct-descr": "\u003cp\u003eThis is a version of \u003ccode\u003e\u003ca\u003eReifies\u003c/a\u003e\u003c/code\u003e that allows for only a single value.\n\u003c/p\u003e\u003cp\u003eThis is easier to work with than \u003ccode\u003e\u003ca\u003eReifies\u003c/a\u003e\u003c/code\u003e and permits extended defaulting,\n but it only offers a single reflected value of a given type at a time.\n\u003c/p\u003e",
        "fct-module": "Data.Reflection",
        "fct-package": "reflection",
        "fct-signature": "class",
        "fct-source": "src/Data-Reflection.html#Given",
        "fct-type": "class",
        "title": "Given"
      },
      "index": {
        "description": "This is version of Reifies that allows for only single value This is easier to work with than Reifies and permits extended defaulting but it only offers single reflected value of given type at time",
        "hierarchy": "Data Reflection",
        "module": "Data.Reflection",
        "name": "Given",
        "normalized": "",
        "package": "reflection",
        "partial": "Given",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reflection/docs/Data-Reflection.html#t:PD",
      "description": {
        "fct-module": "Data.Reflection",
        "fct-package": "reflection",
        "fct-signature": "data",
        "fct-source": "src/Data-Reflection.html#PD",
        "fct-type": "data",
        "title": "PD"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Reflection",
        "module": "Data.Reflection",
        "name": "PD",
        "normalized": "",
        "package": "reflection",
        "partial": "PD",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reflection/docs/Data-Reflection.html#t:Reifies",
      "description": {
        "fct-module": "Data.Reflection",
        "fct-package": "reflection",
        "fct-signature": "class",
        "fct-source": "src/Data-Reflection.html#Reifies",
        "fct-type": "class",
        "title": "Reifies"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Reflection",
        "module": "Data.Reflection",
        "name": "Reifies",
        "normalized": "",
        "package": "reflection",
        "partial": "Reifies",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reflection/docs/Data-Reflection.html#t:SD",
      "description": {
        "fct-module": "Data.Reflection",
        "fct-package": "reflection",
        "fct-signature": "data",
        "fct-source": "src/Data-Reflection.html#SD",
        "fct-type": "data",
        "title": "SD"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Reflection",
        "module": "Data.Reflection",
        "name": "SD",
        "normalized": "",
        "package": "reflection",
        "partial": "SD",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reflection/docs/Data-Reflection.html#t:Z",
      "description": {
        "fct-module": "Data.Reflection",
        "fct-package": "reflection",
        "fct-signature": "data",
        "fct-source": "src/Data-Reflection.html#Z",
        "fct-type": "data",
        "title": "Z"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Reflection",
        "module": "Data.Reflection",
        "name": "Z",
        "normalized": "",
        "package": "reflection",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reflection/docs/Data-Reflection.html#v:give",
      "description": {
        "fct-descr": "\u003cp\u003eReify a value into an instance to be recovered with \u003ccode\u003e\u003ca\u003egiven\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eYou should only \u003ccode\u003e\u003ca\u003egive\u003c/a\u003e\u003c/code\u003e a single value for each type. If multiple instances\n are in scope, then the behavior is implementation defined.\n\u003c/p\u003e",
        "fct-module": "Data.Reflection",
        "fct-package": "reflection",
        "fct-signature": "r) -\u003e r",
        "fct-source": "src/Data-Reflection.html#give",
        "fct-type": "function",
        "title": "give"
      },
      "index": {
        "description": "Reify value into an instance to be recovered with given You should only give single value for each type If multiple instances are in scope then the behavior is implementation defined",
        "hierarchy": "Data Reflection",
        "module": "Data.Reflection",
        "name": "give",
        "normalized": "a)-\u003ea",
        "package": "reflection",
        "partial": "",
        "signature": "r)-\u003er"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reflection/docs/Data-Reflection.html#v:given",
      "description": {
        "fct-descr": "\u003cp\u003eRecover the value of a given type previously encoded with \u003ccode\u003e\u003ca\u003egive\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Reflection",
        "fct-package": "reflection",
        "fct-signature": "a",
        "fct-source": "src/Data-Reflection.html#given",
        "fct-type": "method",
        "title": "given"
      },
      "index": {
        "description": "Recover the value of given type previously encoded with give",
        "hierarchy": "Data Reflection",
        "module": "Data.Reflection",
        "name": "given",
        "normalized": "",
        "package": "reflection",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reflection/docs/Data-Reflection.html#v:int",
      "description": {
        "fct-descr": "\u003cp\u003eThis can be used to generate a template haskell splice for a type level version of a given \u003ccode\u003e\u003ca\u003eint\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis does not use GHC TypeLits, instead it generates a numeric type by hand similar to the ones used\n in the \"Functional Pearl: Implicit Configurations\" paper by Oleg Kiselyov and Chung-Chieh Shan.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003einstance Num (Q Exp)\u003c/code\u003e provided in this package allows writing \u003ccode\u003e$(3)\u003c/code\u003e\n instead of \u003ccode\u003e$(int 3)\u003c/code\u003e. Sometimes the two will produce the same\n representation (if compiled without the \u003ccode\u003e-DUSE_TYPE_LITS\u003c/code\u003e preprocessor\n directive).\n\u003c/p\u003e",
        "fct-module": "Data.Reflection",
        "fct-package": "reflection",
        "fct-signature": "Int -\u003e TypeQ",
        "fct-source": "src/Data-Reflection.html#int",
        "fct-type": "function",
        "title": "int"
      },
      "index": {
        "description": "This can be used to generate template haskell splice for type level version of given int This does not use GHC TypeLits instead it generates numeric type by hand similar to the ones used in the Functional Pearl Implicit Configurations paper by Oleg Kiselyov and Chung-Chieh Shan instance Num Exp provided in this package allows writing instead of int Sometimes the two will produce the same representation if compiled without the DUSE TYPE LITS preprocessor directive",
        "hierarchy": "Data Reflection",
        "module": "Data.Reflection",
        "name": "int",
        "normalized": "Int-\u003eTypeQ",
        "package": "reflection",
        "partial": "",
        "signature": "Int-\u003eTypeQ"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reflection/docs/Data-Reflection.html#v:nat",
      "description": {
        "fct-descr": "\u003cp\u003eThis is a restricted version of \u003ccode\u003e\u003ca\u003eint\u003c/a\u003e\u003c/code\u003e that can only generate natural numbers. Attempting to generate\n a negative number results in a compile time error. Also the resulting sequence will consist entirely of\n Z, D, and SD constructors representing the number in zeroless binary.\n\u003c/p\u003e",
        "fct-module": "Data.Reflection",
        "fct-package": "reflection",
        "fct-signature": "Int -\u003e TypeQ",
        "fct-source": "src/Data-Reflection.html#nat",
        "fct-type": "function",
        "title": "nat"
      },
      "index": {
        "description": "This is restricted version of int that can only generate natural numbers Attempting to generate negative number results in compile time error Also the resulting sequence will consist entirely of and SD constructors representing the number in zeroless binary",
        "hierarchy": "Data Reflection",
        "module": "Data.Reflection",
        "name": "nat",
        "normalized": "Int-\u003eTypeQ",
        "package": "reflection",
        "partial": "",
        "signature": "Int-\u003eTypeQ"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reflection/docs/Data-Reflection.html#v:reflect",
      "description": {
        "fct-descr": "\u003cp\u003eRecover a value inside a \u003ccode\u003e\u003ca\u003ereify\u003c/a\u003e\u003c/code\u003e context, given a proxy for its\n reified type.\n\u003c/p\u003e",
        "fct-module": "Data.Reflection",
        "fct-package": "reflection",
        "fct-signature": "proxy s -\u003e a",
        "fct-source": "src/Data-Reflection.html#reflect",
        "fct-type": "method",
        "title": "reflect"
      },
      "index": {
        "description": "Recover value inside reify context given proxy for its reified type",
        "hierarchy": "Data Reflection",
        "module": "Data.Reflection",
        "name": "reflect",
        "normalized": "a b-\u003ec",
        "package": "reflection",
        "partial": "",
        "signature": "proxy s-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reflection/docs/Data-Reflection.html#v:reify",
      "description": {
        "fct-descr": "\u003cp\u003eReify a value at the type level, to be recovered with \u003ccode\u003e\u003ca\u003ereflect\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Reflection",
        "fct-package": "reflection",
        "fct-signature": "Proxy s -\u003e r) -\u003e r",
        "fct-source": "src/Data-Reflection.html#reify",
        "fct-type": "function",
        "title": "reify"
      },
      "index": {
        "description": "Reify value at the type level to be recovered with reflect",
        "hierarchy": "Data Reflection",
        "module": "Data.Reflection",
        "name": "reify",
        "normalized": "Proxy a-\u003eb)-\u003eb",
        "package": "reflection",
        "partial": "",
        "signature": "Proxy s-\u003er)-\u003er"
      }
    }
  }
]