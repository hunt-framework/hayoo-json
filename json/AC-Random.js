[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AC-Random/docs/Random-MWC-Monadic.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eMonadic functions for random number generation.\n\u003c/p\u003e\u003cp\u003eBecause manually threading the correct \u003ccode\u003e\u003ca\u003eSeed\u003c/a\u003e\u003c/code\u003e value around is\n  tedious and error-prone, one common approach is to use some\n  kind of state monad to hide it. This module provides the\n  convenience functions to make this easy; just write a\n  \u003ccode\u003e\u003ca\u003eRandomM\u003c/a\u003e\u003c/code\u003e instance for your particular monad, and then you\n  can easily and conveniently generate random numbers.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Random.MWC.Monadic",
        "fct-package": "AC-Random",
        "fct-signature": "module",
        "fct-source": "src/Random-MWC-Monadic.html",
        "fct-type": "module",
        "title": "Monadic"
      },
      "index": {
        "description": "Monadic functions for random number generation Because manually threading the correct Seed value around is tedious and error-prone one common approach is to use some kind of state monad to hide it This module provides the convenience functions to make this easy just write RandomM instance for your particular monad and then you can easily and conveniently generate random numbers",
        "hierarchy": "Random MWC Monadic",
        "module": "Random.MWC.Monadic",
        "name": "Monadic",
        "normalized": "",
        "package": "AC-Random",
        "partial": "Monadic",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AC-Random/docs/Random-MWC-Monadic.html#t:RandomM",
      "description": {
        "fct-descr": "\u003cp\u003eThe class of monads holding a single random \u003ccode\u003e\u003ca\u003eSeed\u003c/a\u003e\u003c/code\u003e within their\n  state.\n\u003c/p\u003e",
        "fct-module": "Random.MWC.Monadic",
        "fct-package": "AC-Random",
        "fct-signature": "class",
        "fct-source": "src/Random-MWC-Monadic.html#RandomM",
        "fct-type": "class",
        "title": "RandomM"
      },
      "index": {
        "description": "The class of monads holding single random Seed within their state",
        "hierarchy": "Random MWC Monadic",
        "module": "Random.MWC.Monadic",
        "name": "RandomM",
        "normalized": "",
        "package": "AC-Random",
        "partial": "Random",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AC-Random/docs/Random-MWC-Monadic.html#t:Seed",
      "description": {
        "fct-descr": "\u003cp\u003eAn immutable random seed value for the PRNG.\n\u003c/p\u003e",
        "fct-module": "Random.MWC.Monadic",
        "fct-package": "AC-Random",
        "fct-signature": "data",
        "fct-source": "src/Random-MWC-Primitive.html#Seed",
        "fct-type": "data",
        "title": "Seed"
      },
      "index": {
        "description": "An immutable random seed value for the PRNG",
        "hierarchy": "Random MWC Monadic",
        "module": "Random.MWC.Monadic",
        "name": "Seed",
        "normalized": "",
        "package": "AC-Random",
        "partial": "Seed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AC-Random/docs/Random-MWC-Monadic.html#v:bounded_randomM",
      "description": {
        "fct-descr": "\u003cp\u003eThe monadic analogue of \u003ccode\u003e\u003ca\u003ebounded_random\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eReturn a value randomly chosen between \u003ccode\u003e\u003ca\u003eminBound\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003emaxBound\u003c/a\u003e\u003c/code\u003e.\n  Uses the current \u003ccode\u003e\u003ca\u003eSeed\u003c/a\u003e\u003c/code\u003e value from within the monad, automatically\n  updating said seed value in the process. Thus, repeatedly calling\n  this function will yield different successive values.\n\u003c/p\u003e",
        "fct-module": "Random.MWC.Monadic",
        "fct-package": "AC-Random",
        "fct-signature": "m x",
        "fct-source": "src/Random-MWC-Monadic.html#bounded_randomM",
        "fct-type": "function",
        "title": "bounded_randomM"
      },
      "index": {
        "description": "The monadic analogue of bounded random Return value randomly chosen between minBound and maxBound Uses the current Seed value from within the monad automatically updating said seed value in the process Thus repeatedly calling this function will yield different successive values",
        "hierarchy": "Random MWC Monadic",
        "module": "Random.MWC.Monadic",
        "name": "bounded_randomM",
        "normalized": "",
        "package": "AC-Random",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AC-Random/docs/Random-MWC-Monadic.html#v:get_random_seed",
      "description": {
        "fct-descr": "\u003cp\u003eFetch the current \u003ccode\u003e\u003ca\u003eSeed\u003c/a\u003e\u003c/code\u003e value.\n\u003c/p\u003e",
        "fct-module": "Random.MWC.Monadic",
        "fct-package": "AC-Random",
        "fct-signature": "m Seed",
        "fct-source": "src/Random-MWC-Monadic.html#get_random_seed",
        "fct-type": "method",
        "title": "get_random_seed"
      },
      "index": {
        "description": "Fetch the current Seed value",
        "hierarchy": "Random MWC Monadic",
        "module": "Random.MWC.Monadic",
        "name": "get_random_seed",
        "normalized": "",
        "package": "AC-Random",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AC-Random/docs/Random-MWC-Monadic.html#v:range_randomM",
      "description": {
        "fct-descr": "\u003cp\u003eThe monadic analogue of \u003ccode\u003e\u003ca\u003erange_random\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eReturns a value randomly chosen from a user-specified range\n  (inclusive). Uses the current \u003ccode\u003e\u003ca\u003eSeed\u003c/a\u003e\u003c/code\u003e value from within the monad,\n  automatically updating said seed value in the process. Thus,\n  repeatedly calling this function will yield different successive\n  values.\n\u003c/p\u003e",
        "fct-module": "Random.MWC.Monadic",
        "fct-package": "AC-Random",
        "fct-signature": "(x, x) -\u003e m x",
        "fct-source": "src/Random-MWC-Monadic.html#range_randomM",
        "fct-type": "function",
        "title": "range_randomM"
      },
      "index": {
        "description": "The monadic analogue of range random Returns value randomly chosen from user-specified range inclusive Uses the current Seed value from within the monad automatically updating said seed value in the process Thus repeatedly calling this function will yield different successive values",
        "hierarchy": "Random MWC Monadic",
        "module": "Random.MWC.Monadic",
        "name": "range_randomM",
        "normalized": "(a,a)-\u003eb a",
        "package": "AC-Random",
        "partial": "",
        "signature": "(x,x)-\u003em x"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AC-Random/docs/Random-MWC-Monadic.html#v:set_random_seed",
      "description": {
        "fct-descr": "\u003cp\u003eReplace the current \u003ccode\u003e\u003ca\u003eSeed\u003c/a\u003e\u003c/code\u003e value.\n\u003c/p\u003e",
        "fct-module": "Random.MWC.Monadic",
        "fct-package": "AC-Random",
        "fct-signature": "Seed -\u003e m ()",
        "fct-source": "src/Random-MWC-Monadic.html#set_random_seed",
        "fct-type": "method",
        "title": "set_random_seed"
      },
      "index": {
        "description": "Replace the current Seed value",
        "hierarchy": "Random MWC Monadic",
        "module": "Random.MWC.Monadic",
        "name": "set_random_seed",
        "normalized": "Seed-\u003ea()",
        "package": "AC-Random",
        "partial": "",
        "signature": "Seed-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AC-Random/docs/Random-MWC-Monadic.html#v:unit_randomM",
      "description": {
        "fct-descr": "\u003cp\u003eThe monadic analogue of \u003ccode\u003e\u003ca\u003eunit_random\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eReturns a value randomly chosen between \"zero\" and \"one\". Uses\n  the current \u003ccode\u003e\u003ca\u003eSeed\u003c/a\u003e\u003c/code\u003e value from within the monad, automatically\n  updating said seed value in the process. Thus, repeatedly calling\n  this function will yield different successive values.\n\u003c/p\u003e",
        "fct-module": "Random.MWC.Monadic",
        "fct-package": "AC-Random",
        "fct-signature": "m x",
        "fct-source": "src/Random-MWC-Monadic.html#unit_randomM",
        "fct-type": "function",
        "title": "unit_randomM"
      },
      "index": {
        "description": "The monadic analogue of unit random Returns value randomly chosen between zero and one Uses the current Seed value from within the monad automatically updating said seed value in the process Thus repeatedly calling this function will yield different successive values",
        "hierarchy": "Random MWC Monadic",
        "module": "Random.MWC.Monadic",
        "name": "unit_randomM",
        "normalized": "",
        "package": "AC-Random",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AC-Random/docs/Random-MWC-Primitive.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module contains the raw random number generator algorithm.\n  Usually you would import \u003ca\u003eRandom.MWC.Pure\u003c/a\u003e for a more convinient\n  API.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Random.MWC.Primitive",
        "fct-package": "AC-Random",
        "fct-signature": "module",
        "fct-source": "src/Random-MWC-Primitive.html",
        "fct-type": "module",
        "title": "Primitive"
      },
      "index": {
        "description": "This module contains the raw random number generator algorithm Usually you would import Random.MWC.Pure for more convinient API",
        "hierarchy": "Random MWC Primitive",
        "module": "Random.MWC.Primitive",
        "name": "Primitive",
        "normalized": "",
        "package": "AC-Random",
        "partial": "Primitive",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AC-Random/docs/Random-MWC-Primitive.html#t:Seed",
      "description": {
        "fct-descr": "\u003cp\u003eAn immutable random seed value for the PRNG.\n\u003c/p\u003e",
        "fct-module": "Random.MWC.Primitive",
        "fct-package": "AC-Random",
        "fct-signature": "data",
        "fct-source": "src/Random-MWC-Primitive.html#Seed",
        "fct-type": "data",
        "title": "Seed"
      },
      "index": {
        "description": "An immutable random seed value for the PRNG",
        "hierarchy": "Random MWC Primitive",
        "module": "Random.MWC.Primitive",
        "name": "Seed",
        "normalized": "",
        "package": "AC-Random",
        "partial": "Seed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AC-Random/docs/Random-MWC-Primitive.html#v:next_word",
      "description": {
        "fct-descr": "\u003cp\u003eGiven an initial \u003ccode\u003e\u003ca\u003eSeed\u003c/a\u003e\u003c/code\u003e value, return a random \u003ccode\u003e\u003ca\u003eWord32\u003c/a\u003e\u003c/code\u003e and a new\n  \u003ccode\u003e\u003ca\u003eSeed\u003c/a\u003e\u003c/code\u003e value.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eWord32\u003c/a\u003e\u003c/code\u003e value is chosen psuedo-randomly (i.e., the same \u003ccode\u003e\u003ca\u003eSeed\u003c/a\u003e\u003c/code\u003e\n  is guaranteed to always yield the same choice) with uniform\n  distribution (i.e., all possibilities equally likely) over the\n  complete range from 0x00000000 to 0xFFFFFFFF inclusive.\n\u003c/p\u003e",
        "fct-module": "Random.MWC.Primitive",
        "fct-package": "AC-Random",
        "fct-signature": "Seed -\u003e (Word32, Seed)",
        "fct-source": "src/Random-MWC-Primitive.html#next_word",
        "fct-type": "function",
        "title": "next_word"
      },
      "index": {
        "description": "Given an initial Seed value return random Word32 and new Seed value The Word32 value is chosen psuedo-randomly i.e the same Seed is guaranteed to always yield the same choice with uniform distribution i.e all possibilities equally likely over the complete range from x00000000 to xFFFFFFFF inclusive",
        "hierarchy": "Random MWC Primitive",
        "module": "Random.MWC.Primitive",
        "name": "next_word",
        "normalized": "Seed-\u003e(Word,Seed)",
        "package": "AC-Random",
        "partial": "",
        "signature": "Seed-\u003e(Word,Seed)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AC-Random/docs/Random-MWC-Primitive.html#v:seed",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a new random seed value from the supplied list of \u003ccode\u003e\u003ca\u003eWord32\u003c/a\u003e\u003c/code\u003e\n  values. If the list is empty, return a default, hard-coded value.\n  Otherwise, every element of the list affects the result. The list\n  \u003cem\u003emust\u003c/em\u003e be finite; the function will loop forever othewise.\n\u003c/p\u003e",
        "fct-module": "Random.MWC.Primitive",
        "fct-package": "AC-Random",
        "fct-signature": "[Word32] -\u003e Seed",
        "fct-source": "src/Random-MWC-Primitive.html#seed",
        "fct-type": "function",
        "title": "seed"
      },
      "index": {
        "description": "Create new random seed value from the supplied list of Word32 values If the list is empty return default hard-coded value Otherwise every element of the list affects the result The list must be finite the function will loop forever othewise",
        "hierarchy": "Random MWC Primitive",
        "module": "Random.MWC.Primitive",
        "name": "seed",
        "normalized": "[Word]-\u003eSeed",
        "package": "AC-Random",
        "partial": "",
        "signature": "[Word]-\u003eSeed"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AC-Random/docs/Random-MWC-Pure.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ePure functions for random number generation.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Random.MWC.Pure",
        "fct-package": "AC-Random",
        "fct-signature": "module",
        "fct-source": "src/Random-MWC-Pure.html",
        "fct-type": "module",
        "title": "Pure"
      },
      "index": {
        "description": "Pure functions for random number generation",
        "hierarchy": "Random MWC Pure",
        "module": "Random.MWC.Pure",
        "name": "Pure",
        "normalized": "",
        "package": "AC-Random",
        "partial": "Pure",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AC-Random/docs/Random-MWC-Pure.html#t:BoundedRandom",
      "description": {
        "fct-descr": "\u003cp\u003eClass of things that can be chosen at random over their entire\n  value range. This requires that the range of possible values is\n  actually limited.\n\u003c/p\u003e",
        "fct-module": "Random.MWC.Pure",
        "fct-package": "AC-Random",
        "fct-signature": "class",
        "fct-source": "src/Random-MWC-Pure.html#BoundedRandom",
        "fct-type": "class",
        "title": "BoundedRandom"
      },
      "index": {
        "description": "Class of things that can be chosen at random over their entire value range This requires that the range of possible values is actually limited",
        "hierarchy": "Random MWC Pure",
        "module": "Random.MWC.Pure",
        "name": "BoundedRandom",
        "normalized": "",
        "package": "AC-Random",
        "partial": "Bounded Random",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AC-Random/docs/Random-MWC-Pure.html#t:RangeRandom",
      "description": {
        "fct-descr": "\u003cp\u003eClass of things that can be chosen at random over a specified\n  interval. This requires that the type is ordered.\n\u003c/p\u003e",
        "fct-module": "Random.MWC.Pure",
        "fct-package": "AC-Random",
        "fct-signature": "class",
        "fct-source": "src/Random-MWC-Pure.html#RangeRandom",
        "fct-type": "class",
        "title": "RangeRandom"
      },
      "index": {
        "description": "Class of things that can be chosen at random over specified interval This requires that the type is ordered",
        "hierarchy": "Random MWC Pure",
        "module": "Random.MWC.Pure",
        "name": "RangeRandom",
        "normalized": "",
        "package": "AC-Random",
        "partial": "Range Random",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AC-Random/docs/Random-MWC-Pure.html#t:Seed",
      "description": {
        "fct-descr": "\u003cp\u003eAn immutable random seed value for the PRNG.\n\u003c/p\u003e",
        "fct-module": "Random.MWC.Pure",
        "fct-package": "AC-Random",
        "fct-signature": "data",
        "fct-source": "src/Random-MWC-Primitive.html#Seed",
        "fct-type": "data",
        "title": "Seed"
      },
      "index": {
        "description": "An immutable random seed value for the PRNG",
        "hierarchy": "Random MWC Pure",
        "module": "Random.MWC.Pure",
        "name": "Seed",
        "normalized": "",
        "package": "AC-Random",
        "partial": "Seed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AC-Random/docs/Random-MWC-Pure.html#t:UnitRandom",
      "description": {
        "fct-descr": "\u003cp\u003eClass of things that can be chosen at random over the interval from\n  zero to one. This requires that \"zero\" and \"one\" are meaningful\n  concepts for this type, and also that the type is ordered. (Also,\n  there must be values \u003cem\u003ebetween\u003c/em\u003e zero and one, which rules out\n  integral types.)\n\u003c/p\u003e",
        "fct-module": "Random.MWC.Pure",
        "fct-package": "AC-Random",
        "fct-signature": "class",
        "fct-source": "src/Random-MWC-Pure.html#UnitRandom",
        "fct-type": "class",
        "title": "UnitRandom"
      },
      "index": {
        "description": "Class of things that can be chosen at random over the interval from zero to one This requires that zero and one are meaningful concepts for this type and also that the type is ordered Also there must be values between zero and one which rules out integral types",
        "hierarchy": "Random MWC Pure",
        "module": "Random.MWC.Pure",
        "name": "UnitRandom",
        "normalized": "",
        "package": "AC-Random",
        "partial": "Unit Random",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AC-Random/docs/Random-MWC-Pure.html#v:bounded_random",
      "description": {
        "fct-descr": "\u003cp\u003eGiven a \u003ccode\u003e\u003ca\u003eSeed\u003c/a\u003e\u003c/code\u003e, return a randomly-chosen value and a new \u003ccode\u003e\u003ca\u003eSeed\u003c/a\u003e\u003c/code\u003e\n    value.\n\u003c/p\u003e\u003cp\u003eThe value is chosen psuedo-randomly (the same \u003ccode\u003e\u003ca\u003eSeed\u003c/a\u003e\u003c/code\u003e will always\n    yield the same choice), with uniform distribution (all values\n    equally likely). The range of possible values is from \u003ccode\u003e\u003ca\u003eminBound\u003c/a\u003e\u003c/code\u003e\n    to \u003ccode\u003e\u003ca\u003emaxBound\u003c/a\u003e\u003c/code\u003e inclusive.\n\u003c/p\u003e",
        "fct-module": "Random.MWC.Pure",
        "fct-package": "AC-Random",
        "fct-signature": "Seed -\u003e (x, Seed)",
        "fct-source": "src/Random-MWC-Pure.html#bounded_random",
        "fct-type": "method",
        "title": "bounded_random"
      },
      "index": {
        "description": "Given Seed return randomly-chosen value and new Seed value The value is chosen psuedo-randomly the same Seed will always yield the same choice with uniform distribution all values equally likely The range of possible values is from minBound to maxBound inclusive",
        "hierarchy": "Random MWC Pure",
        "module": "Random.MWC.Pure",
        "name": "bounded_random",
        "normalized": "Seed-\u003e(a,Seed)",
        "package": "AC-Random",
        "partial": "",
        "signature": "Seed-\u003e(x,Seed)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AC-Random/docs/Random-MWC-Pure.html#v:random_list",
      "description": {
        "fct-descr": "\u003cp\u003eGiven a function to generate one random item, generate a list of\n  random items (of the specified length).\n\u003c/p\u003e",
        "fct-module": "Random.MWC.Pure",
        "fct-package": "AC-Random",
        "fct-signature": "(Seed -\u003e (x, Seed)) -\u003e Int -\u003e Seed -\u003e ([x], Seed)",
        "fct-source": "src/Random-MWC-Pure.html#random_list",
        "fct-type": "function",
        "title": "random_list"
      },
      "index": {
        "description": "Given function to generate one random item generate list of random items of the specified length",
        "hierarchy": "Random MWC Pure",
        "module": "Random.MWC.Pure",
        "name": "random_list",
        "normalized": "(Seed-\u003e(a,Seed))-\u003eInt-\u003eSeed-\u003e([a],Seed)",
        "package": "AC-Random",
        "partial": "",
        "signature": "(Seed-\u003e(x,Seed))-\u003eInt-\u003eSeed-\u003e([x],Seed)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AC-Random/docs/Random-MWC-Pure.html#v:range_random",
      "description": {
        "fct-descr": "\u003cp\u003eGiven a \u003ccode\u003e\u003ca\u003eSeed\u003c/a\u003e\u003c/code\u003e, return a randomly-chosen value and a new \u003ccode\u003e\u003ca\u003eSeed\u003c/a\u003e\u003c/code\u003e\n    value.\n\u003c/p\u003e\u003cp\u003eThe value is chosen psuedo-randomly (the same \u003ccode\u003e\u003ca\u003eSeed\u003c/a\u003e\u003c/code\u003e will always\n    yield the same choice), with uniform distribution (all values\n    equally likely). The range is given by the first argument, which\n    specifies the lower and upper bounds (inclusive).\n\u003c/p\u003e",
        "fct-module": "Random.MWC.Pure",
        "fct-package": "AC-Random",
        "fct-signature": "(x, x) -\u003e Seed -\u003e (x, Seed)",
        "fct-source": "src/Random-MWC-Pure.html#range_random",
        "fct-type": "method",
        "title": "range_random"
      },
      "index": {
        "description": "Given Seed return randomly-chosen value and new Seed value The value is chosen psuedo-randomly the same Seed will always yield the same choice with uniform distribution all values equally likely The range is given by the first argument which specifies the lower and upper bounds inclusive",
        "hierarchy": "Random MWC Pure",
        "module": "Random.MWC.Pure",
        "name": "range_random",
        "normalized": "(a,a)-\u003eSeed-\u003e(a,Seed)",
        "package": "AC-Random",
        "partial": "",
        "signature": "(x,x)-\u003eSeed-\u003e(x,Seed)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AC-Random/docs/Random-MWC-Pure.html#v:seed",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a new random seed value from the supplied list of \u003ccode\u003e\u003ca\u003eWord32\u003c/a\u003e\u003c/code\u003e\n  values. If the list is empty, return a default, hard-coded value.\n  Otherwise, every element of the list affects the result. The list\n  \u003cem\u003emust\u003c/em\u003e be finite; the function will loop forever othewise.\n\u003c/p\u003e",
        "fct-module": "Random.MWC.Pure",
        "fct-package": "AC-Random",
        "fct-signature": "[Word32] -\u003e Seed",
        "fct-source": "src/Random-MWC-Primitive.html#seed",
        "fct-type": "function",
        "title": "seed"
      },
      "index": {
        "description": "Create new random seed value from the supplied list of Word32 values If the list is empty return default hard-coded value Otherwise every element of the list affects the result The list must be finite the function will loop forever othewise",
        "hierarchy": "Random MWC Pure",
        "module": "Random.MWC.Pure",
        "name": "seed",
        "normalized": "[Word]-\u003eSeed",
        "package": "AC-Random",
        "partial": "",
        "signature": "[Word]-\u003eSeed"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AC-Random/docs/Random-MWC-Pure.html#v:unit_random",
      "description": {
        "fct-descr": "\u003cp\u003eGiven a \u003ccode\u003e\u003ca\u003eSeed\u003c/a\u003e\u003c/code\u003e, return a randomly-chosen value and a new \u003ccode\u003e\u003ca\u003eSeed\u003c/a\u003e\u003c/code\u003e\n    value.\n\u003c/p\u003e\u003cp\u003eThe value is chosen psuedo-randomly (the same \u003ccode\u003e\u003ca\u003eSeed\u003c/a\u003e\u003c/code\u003e will always\n    yield the same choice), with uniform distribution (all values\n    equally likely). The range of possible values is from \"zero\" to\n    \"one\" inclusive.\n\u003c/p\u003e",
        "fct-module": "Random.MWC.Pure",
        "fct-package": "AC-Random",
        "fct-signature": "Seed -\u003e (x, Seed)",
        "fct-source": "src/Random-MWC-Pure.html#unit_random",
        "fct-type": "method",
        "title": "unit_random"
      },
      "index": {
        "description": "Given Seed return randomly-chosen value and new Seed value The value is chosen psuedo-randomly the same Seed will always yield the same choice with uniform distribution all values equally likely The range of possible values is from zero to one inclusive",
        "hierarchy": "Random MWC Pure",
        "module": "Random.MWC.Pure",
        "name": "unit_random",
        "normalized": "Seed-\u003e(a,Seed)",
        "package": "AC-Random",
        "partial": "",
        "signature": "Seed-\u003e(x,Seed)"
      }
    }
  }
]