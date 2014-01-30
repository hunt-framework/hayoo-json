[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-All.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eExperimental features using Template Haskell.\n You need to have a \u003ccode\u003e{-# LANGUAGE TemplateHaskell #-}\u003c/code\u003e pragma in\n your module for any of these to work.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Test.QuickCheck.All",
        "fct-package": "QuickCheck",
        "fct-signature": "module",
        "fct-source": "src/Test-QuickCheck-All.html",
        "fct-type": "module",
        "title": "All"
      },
      "index": {
        "description": "Experimental features using Template Haskell You need to have LANGUAGE TemplateHaskell pragma in your module for any of these to work",
        "hierarchy": "Test QuickCheck All",
        "module": "Test.QuickCheck.All",
        "name": "All",
        "normalized": "",
        "package": "QuickCheck",
        "partial": "All",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-All.html#v:forAllProperties",
      "description": {
        "fct-descr": "\u003cp\u003eTest all properties in the current module, using a custom\n \u003ccode\u003e\u003ca\u003equickCheck\u003c/a\u003e\u003c/code\u003e function. The same caveats as with \u003ccode\u003e\u003ca\u003equickCheckAll\u003c/a\u003e\u003c/code\u003e\n apply.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e$\u003ccode\u003e\u003ca\u003eforAllProperties\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e has type \u003ccode\u003e(\u003ccode\u003e\u003ca\u003eProperty\u003c/a\u003e\u003c/code\u003e -\u003e \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eResult\u003c/a\u003e\u003c/code\u003e) -\u003e \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eBool\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n An example invocation is \u003ccode\u003e$\u003ccode\u003e\u003ca\u003eforAllProperties\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003equickCheckResult\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e,\n which does the same thing as \u003ccode\u003e$\u003ccode\u003e\u003ca\u003equickCheckAll\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Test.QuickCheck.All",
        "fct-package": "QuickCheck",
        "fct-signature": "Q Exp",
        "fct-source": "src/Test-QuickCheck-All.html#forAllProperties",
        "fct-type": "function",
        "title": "forAllProperties"
      },
      "index": {
        "description": "Test all properties in the current module using custom quickCheck function The same caveats as with quickCheckAll apply forAllProperties has type Property IO Result IO Bool An example invocation is forAllProperties quickCheckResult which does the same thing as quickCheckAll",
        "hierarchy": "Test QuickCheck All",
        "module": "Test.QuickCheck.All",
        "name": "forAllProperties",
        "normalized": "",
        "package": "QuickCheck",
        "partial": "All Properties",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-All.html#v:mono",
      "description": {
        "fct-descr": "\u003cp\u003eMonomorphise an arbitrary name by defaulting all type variables to \u003ccode\u003e\u003ca\u003eInteger\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eFor example, if \u003ccode\u003ef\u003c/code\u003e has type \u003ccode\u003e\u003ccode\u003e\u003ca\u003eOrd\u003c/a\u003e\u003c/code\u003e a =\u003e [a] -\u003e [a]\u003c/code\u003e\n then \u003ccode\u003e$(\u003ccode\u003e\u003ca\u003emono\u003c/a\u003e\u003c/code\u003e 'f)\u003c/code\u003e has type \u003ccode\u003e[\u003ccode\u003e\u003ca\u003eInteger\u003c/a\u003e\u003c/code\u003e] -\u003e [\u003ccode\u003e\u003ca\u003eInteger\u003c/a\u003e\u003c/code\u003e]\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Test.QuickCheck.All",
        "fct-package": "QuickCheck",
        "fct-signature": "Name -\u003e ExpQ",
        "fct-source": "src/Test-QuickCheck-All.html#mono",
        "fct-type": "function",
        "title": "mono"
      },
      "index": {
        "description": "Monomorphise an arbitrary name by defaulting all type variables to Integer For example if has type Ord then mono has type Integer Integer",
        "hierarchy": "Test QuickCheck All",
        "module": "Test.QuickCheck.All",
        "name": "mono",
        "normalized": "Name-\u003eExpQ",
        "package": "QuickCheck",
        "partial": "",
        "signature": "Name-\u003eExpQ"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-All.html#v:polyQuickCheck",
      "description": {
        "fct-descr": "\u003cp\u003eTest a polymorphic property, defaulting all type variables to \u003ccode\u003e\u003ca\u003eInteger\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eInvoke as \u003ccode\u003e$(\u003ccode\u003e\u003ca\u003epolyQuickCheck\u003c/a\u003e\u003c/code\u003e 'prop)\u003c/code\u003e, where \u003ccode\u003eprop\u003c/code\u003e is a property.\n Note that just evaluating \u003ccode\u003e\u003ccode\u003e\u003ca\u003equickCheck\u003c/a\u003e\u003c/code\u003e prop\u003c/code\u003e in GHCi will seem to\n work, but will silently default all type variables to \u003ccode\u003e()\u003c/code\u003e!\n\u003c/p\u003e",
        "fct-module": "Test.QuickCheck.All",
        "fct-package": "QuickCheck",
        "fct-signature": "Name -\u003e ExpQ",
        "fct-source": "src/Test-QuickCheck-All.html#polyQuickCheck",
        "fct-type": "function",
        "title": "polyQuickCheck"
      },
      "index": {
        "description": "Test polymorphic property defaulting all type variables to Integer Invoke as polyQuickCheck prop where prop is property Note that just evaluating quickCheck prop in GHCi will seem to work but will silently default all type variables to",
        "hierarchy": "Test QuickCheck All",
        "module": "Test.QuickCheck.All",
        "name": "polyQuickCheck",
        "normalized": "Name-\u003eExpQ",
        "package": "QuickCheck",
        "partial": "Quick Check",
        "signature": "Name-\u003eExpQ"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-All.html#v:polyVerboseCheck",
      "description": {
        "fct-descr": "\u003cp\u003eTest a polymorphic property, defaulting all type variables to \u003ccode\u003e\u003ca\u003eInteger\u003c/a\u003e\u003c/code\u003e.\n This is just a convenience function that combines \u003ccode\u003e\u003ca\u003epolyQuickCheck\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003everbose\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Test.QuickCheck.All",
        "fct-package": "QuickCheck",
        "fct-signature": "Name -\u003e ExpQ",
        "fct-source": "src/Test-QuickCheck-All.html#polyVerboseCheck",
        "fct-type": "function",
        "title": "polyVerboseCheck"
      },
      "index": {
        "description": "Test polymorphic property defaulting all type variables to Integer This is just convenience function that combines polyQuickCheck and verbose",
        "hierarchy": "Test QuickCheck All",
        "module": "Test.QuickCheck.All",
        "name": "polyVerboseCheck",
        "normalized": "Name-\u003eExpQ",
        "package": "QuickCheck",
        "partial": "Verbose Check",
        "signature": "Name-\u003eExpQ"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-All.html#v:quickCheckAll",
      "description": {
        "fct-descr": "\u003cp\u003eTest all properties in the current module.\n The name of the property must begin with \u003ccode\u003eprop_\u003c/code\u003e.\n Polymorphic properties will be defaulted to \u003ccode\u003e\u003ca\u003eInteger\u003c/a\u003e\u003c/code\u003e.\n Returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if all tests succeeded, \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e otherwise.\n\u003c/p\u003e\u003cp\u003eUsing \u003ccode\u003e\u003ca\u003equickCheckAll\u003c/a\u003e\u003c/code\u003e interactively doesn't work.\n Instead, add a definition to your module along the lines of\n\u003c/p\u003e\u003cpre\u003e runTests = $quickCheckAll\n\u003c/pre\u003e\u003cp\u003eand then execute \u003ccode\u003erunTests\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Test.QuickCheck.All",
        "fct-package": "QuickCheck",
        "fct-signature": "Q Exp",
        "fct-source": "src/Test-QuickCheck-All.html#quickCheckAll",
        "fct-type": "function",
        "title": "quickCheckAll"
      },
      "index": {
        "description": "Test all properties in the current module The name of the property must begin with prop Polymorphic properties will be defaulted to Integer Returns True if all tests succeeded False otherwise Using quickCheckAll interactively doesn work Instead add definition to your module along the lines of runTests quickCheckAll and then execute runTests",
        "hierarchy": "Test QuickCheck All",
        "module": "Test.QuickCheck.All",
        "name": "quickCheckAll",
        "normalized": "",
        "package": "QuickCheck",
        "partial": "Check All",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-All.html#v:verboseCheckAll",
      "description": {
        "fct-descr": "\u003cp\u003eTest all properties in the current module.\n This is just a convenience function that combines \u003ccode\u003e\u003ca\u003equickCheckAll\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003everbose\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Test.QuickCheck.All",
        "fct-package": "QuickCheck",
        "fct-signature": "Q Exp",
        "fct-source": "src/Test-QuickCheck-All.html#verboseCheckAll",
        "fct-type": "function",
        "title": "verboseCheckAll"
      },
      "index": {
        "description": "Test all properties in the current module This is just convenience function that combines quickCheckAll and verbose",
        "hierarchy": "Test QuickCheck All",
        "module": "Test.QuickCheck.All",
        "name": "verboseCheckAll",
        "normalized": "",
        "package": "QuickCheck",
        "partial": "Check All",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Arbitrary.html#",
      "description": {
        "fct-module": "Test.QuickCheck.Arbitrary",
        "fct-package": "QuickCheck",
        "fct-signature": "module",
        "fct-source": "src/Test-QuickCheck-Arbitrary.html",
        "fct-type": "module",
        "title": "Arbitrary"
      },
      "index": {
        "description": "",
        "hierarchy": "Test QuickCheck Arbitrary",
        "module": "Test.QuickCheck.Arbitrary",
        "name": "Arbitrary",
        "normalized": "",
        "package": "QuickCheck",
        "partial": "Arbitrary",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Arbitrary.html#t:Arbitrary",
      "description": {
        "fct-descr": "\u003cp\u003eRandom generation and shrinking of values.\n\u003c/p\u003e",
        "fct-module": "Test.QuickCheck.Arbitrary",
        "fct-package": "QuickCheck",
        "fct-signature": "class",
        "fct-source": "src/Test-QuickCheck-Arbitrary.html#Arbitrary",
        "fct-type": "class",
        "title": "Arbitrary"
      },
      "index": {
        "description": "Random generation and shrinking of values",
        "hierarchy": "Test QuickCheck Arbitrary",
        "module": "Test.QuickCheck.Arbitrary",
        "name": "Arbitrary",
        "normalized": "",
        "package": "QuickCheck",
        "partial": "Arbitrary",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Arbitrary.html#t:CoArbitrary",
      "description": {
        "fct-descr": "\u003cp\u003eUsed for random generation of functions.\n\u003c/p\u003e",
        "fct-module": "Test.QuickCheck.Arbitrary",
        "fct-package": "QuickCheck",
        "fct-signature": "class",
        "fct-source": "src/Test-QuickCheck-Arbitrary.html#CoArbitrary",
        "fct-type": "class",
        "title": "CoArbitrary"
      },
      "index": {
        "description": "Used for random generation of functions",
        "hierarchy": "Test QuickCheck Arbitrary",
        "module": "Test.QuickCheck.Arbitrary",
        "name": "CoArbitrary",
        "normalized": "",
        "package": "QuickCheck",
        "partial": "Co Arbitrary",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Arbitrary.html#v:-62--60-",
      "description": {
        "fct-descr": "\u003cp\u003eCombine two generator perturbing functions, for example the\n results of calls to \u003ccode\u003e\u003ca\u003evariant\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003ecoarbitrary\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Test.QuickCheck.Arbitrary",
        "fct-package": "QuickCheck",
        "fct-signature": "(Gen a -\u003e Gen a) -\u003e (Gen a -\u003e Gen a) -\u003e Gen a -\u003e Gen a",
        "fct-source": "src/Test-QuickCheck-Arbitrary.html#%3E%3C",
        "fct-type": "function",
        "title": "(\u003e\u003c)"
      },
      "index": {
        "description": "Combine two generator perturbing functions for example the results of calls to variant or coarbitrary",
        "hierarchy": "Test QuickCheck Arbitrary",
        "module": "Test.QuickCheck.Arbitrary",
        "name": "(\u003e\u003c) \u003e\u003c",
        "normalized": "(Gen a-\u003eGen a)-\u003e(Gen a-\u003eGen a)-\u003eGen a-\u003eGen a",
        "package": "QuickCheck",
        "partial": "",
        "signature": "(Gen a-\u003eGen a)-\u003e(Gen a-\u003eGen a)-\u003eGen a-\u003eGen a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Arbitrary.html#v:arbitrary",
      "description": {
        "fct-descr": "\u003cp\u003eA generator for values of the given type.\n\u003c/p\u003e",
        "fct-module": "Test.QuickCheck.Arbitrary",
        "fct-package": "QuickCheck",
        "fct-signature": "Gen a",
        "fct-source": "src/Test-QuickCheck-Arbitrary.html#arbitrary",
        "fct-type": "method",
        "title": "arbitrary"
      },
      "index": {
        "description": "generator for values of the given type",
        "hierarchy": "Test QuickCheck Arbitrary",
        "module": "Test.QuickCheck.Arbitrary",
        "name": "arbitrary",
        "normalized": "",
        "package": "QuickCheck",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Arbitrary.html#v:arbitraryBoundedEnum",
      "description": {
        "fct-descr": "\u003cp\u003eGenerates an element of a bounded enumeration.\n\u003c/p\u003e",
        "fct-module": "Test.QuickCheck.Arbitrary",
        "fct-package": "QuickCheck",
        "fct-signature": "Gen a",
        "fct-source": "src/Test-QuickCheck-Arbitrary.html#arbitraryBoundedEnum",
        "fct-type": "function",
        "title": "arbitraryBoundedEnum"
      },
      "index": {
        "description": "Generates an element of bounded enumeration",
        "hierarchy": "Test QuickCheck Arbitrary",
        "module": "Test.QuickCheck.Arbitrary",
        "name": "arbitraryBoundedEnum",
        "normalized": "",
        "package": "QuickCheck",
        "partial": "Bounded Enum",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Arbitrary.html#v:arbitraryBoundedIntegral",
      "description": {
        "fct-descr": "\u003cp\u003eGenerates an integral number. The number is chosen uniformly from\n the entire range of the type. You may want to use\n \u003ccode\u003e\u003ca\u003earbitrarySizedBoundedIntegral\u003c/a\u003e\u003c/code\u003e instead.\n\u003c/p\u003e",
        "fct-module": "Test.QuickCheck.Arbitrary",
        "fct-package": "QuickCheck",
        "fct-signature": "Gen a",
        "fct-source": "src/Test-QuickCheck-Arbitrary.html#arbitraryBoundedIntegral",
        "fct-type": "function",
        "title": "arbitraryBoundedIntegral"
      },
      "index": {
        "description": "Generates an integral number The number is chosen uniformly from the entire range of the type You may want to use arbitrarySizedBoundedIntegral instead",
        "hierarchy": "Test QuickCheck Arbitrary",
        "module": "Test.QuickCheck.Arbitrary",
        "name": "arbitraryBoundedIntegral",
        "normalized": "",
        "package": "QuickCheck",
        "partial": "Bounded Integral",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Arbitrary.html#v:arbitraryBoundedRandom",
      "description": {
        "fct-descr": "\u003cp\u003eGenerates an element of a bounded type. The element is\n chosen from the entire range of the type.\n\u003c/p\u003e",
        "fct-module": "Test.QuickCheck.Arbitrary",
        "fct-package": "QuickCheck",
        "fct-signature": "Gen a",
        "fct-source": "src/Test-QuickCheck-Arbitrary.html#arbitraryBoundedRandom",
        "fct-type": "function",
        "title": "arbitraryBoundedRandom"
      },
      "index": {
        "description": "Generates an element of bounded type The element is chosen from the entire range of the type",
        "hierarchy": "Test QuickCheck Arbitrary",
        "module": "Test.QuickCheck.Arbitrary",
        "name": "arbitraryBoundedRandom",
        "normalized": "",
        "package": "QuickCheck",
        "partial": "Bounded Random",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Arbitrary.html#v:arbitrarySizedBoundedIntegral",
      "description": {
        "fct-descr": "\u003cp\u003eGenerates an integral number from a bounded domain. The number is\n chosen from the entire range of the type, but small numbers are\n generated more often than big numbers. Inspired by demands from\n Phil Wadler.\n\u003c/p\u003e",
        "fct-module": "Test.QuickCheck.Arbitrary",
        "fct-package": "QuickCheck",
        "fct-signature": "Gen a",
        "fct-source": "src/Test-QuickCheck-Arbitrary.html#arbitrarySizedBoundedIntegral",
        "fct-type": "function",
        "title": "arbitrarySizedBoundedIntegral"
      },
      "index": {
        "description": "Generates an integral number from bounded domain The number is chosen from the entire range of the type but small numbers are generated more often than big numbers Inspired by demands from Phil Wadler",
        "hierarchy": "Test QuickCheck Arbitrary",
        "module": "Test.QuickCheck.Arbitrary",
        "name": "arbitrarySizedBoundedIntegral",
        "normalized": "",
        "package": "QuickCheck",
        "partial": "Sized Bounded Integral",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Arbitrary.html#v:arbitrarySizedFractional",
      "description": {
        "fct-descr": "\u003cp\u003eGenerates a fractional number. The number can be positive or negative\n and its maximum absolute value depends on the size parameter.\n\u003c/p\u003e",
        "fct-module": "Test.QuickCheck.Arbitrary",
        "fct-package": "QuickCheck",
        "fct-signature": "Gen a",
        "fct-source": "src/Test-QuickCheck-Arbitrary.html#arbitrarySizedFractional",
        "fct-type": "function",
        "title": "arbitrarySizedFractional"
      },
      "index": {
        "description": "Generates fractional number The number can be positive or negative and its maximum absolute value depends on the size parameter",
        "hierarchy": "Test QuickCheck Arbitrary",
        "module": "Test.QuickCheck.Arbitrary",
        "name": "arbitrarySizedFractional",
        "normalized": "",
        "package": "QuickCheck",
        "partial": "Sized Fractional",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Arbitrary.html#v:arbitrarySizedIntegral",
      "description": {
        "fct-descr": "\u003cp\u003eGenerates an integral number. The number can be positive or negative\n and its maximum absolute value depends on the size parameter.\n\u003c/p\u003e",
        "fct-module": "Test.QuickCheck.Arbitrary",
        "fct-package": "QuickCheck",
        "fct-signature": "Gen a",
        "fct-source": "src/Test-QuickCheck-Arbitrary.html#arbitrarySizedIntegral",
        "fct-type": "function",
        "title": "arbitrarySizedIntegral"
      },
      "index": {
        "description": "Generates an integral number The number can be positive or negative and its maximum absolute value depends on the size parameter",
        "hierarchy": "Test QuickCheck Arbitrary",
        "module": "Test.QuickCheck.Arbitrary",
        "name": "arbitrarySizedIntegral",
        "normalized": "",
        "package": "QuickCheck",
        "partial": "Sized Integral",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Arbitrary.html#v:coarbitrary",
      "description": {
        "fct-descr": "\u003cp\u003eUsed to generate a function of type \u003ccode\u003ea -\u003e c\u003c/code\u003e. The implementation\n should use the first argument to perturb the random generator\n given as the second argument. the returned generator\n is then used to generate the function result.\n You can often use \u003ccode\u003e\u003ca\u003evariant\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003e\u003e\u003c\u003c/a\u003e\u003c/code\u003e to implement\n \u003ccode\u003e\u003ca\u003ecoarbitrary\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Test.QuickCheck.Arbitrary",
        "fct-package": "QuickCheck",
        "fct-signature": "a -\u003e Gen c -\u003e Gen c",
        "fct-source": "src/Test-QuickCheck-Arbitrary.html#coarbitrary",
        "fct-type": "method",
        "title": "coarbitrary"
      },
      "index": {
        "description": "Used to generate function of type The implementation should use the first argument to perturb the random generator given as the second argument the returned generator is then used to generate the function result You can often use variant and to implement coarbitrary",
        "hierarchy": "Test QuickCheck Arbitrary",
        "module": "Test.QuickCheck.Arbitrary",
        "name": "coarbitrary",
        "normalized": "a-\u003eGen b-\u003eGen b",
        "package": "QuickCheck",
        "partial": "",
        "signature": "a-\u003eGen c-\u003eGen c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Arbitrary.html#v:coarbitraryEnum",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003ecoarbitrary\u003c/a\u003e\u003c/code\u003e implementation for enums.\n\u003c/p\u003e",
        "fct-module": "Test.QuickCheck.Arbitrary",
        "fct-package": "QuickCheck",
        "fct-signature": "a -\u003e Gen b -\u003e Gen b",
        "fct-source": "src/Test-QuickCheck-Arbitrary.html#coarbitraryEnum",
        "fct-type": "function",
        "title": "coarbitraryEnum"
      },
      "index": {
        "description": "coarbitrary implementation for enums",
        "hierarchy": "Test QuickCheck Arbitrary",
        "module": "Test.QuickCheck.Arbitrary",
        "name": "coarbitraryEnum",
        "normalized": "a-\u003eGen b-\u003eGen b",
        "package": "QuickCheck",
        "partial": "Enum",
        "signature": "a-\u003eGen b-\u003eGen b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Arbitrary.html#v:coarbitraryIntegral",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003ecoarbitrary\u003c/a\u003e\u003c/code\u003e implementation for integral numbers.\n\u003c/p\u003e",
        "fct-module": "Test.QuickCheck.Arbitrary",
        "fct-package": "QuickCheck",
        "fct-signature": "a -\u003e Gen b -\u003e Gen b",
        "fct-source": "src/Test-QuickCheck-Arbitrary.html#coarbitraryIntegral",
        "fct-type": "function",
        "title": "coarbitraryIntegral"
      },
      "index": {
        "description": "coarbitrary implementation for integral numbers",
        "hierarchy": "Test QuickCheck Arbitrary",
        "module": "Test.QuickCheck.Arbitrary",
        "name": "coarbitraryIntegral",
        "normalized": "a-\u003eGen b-\u003eGen b",
        "package": "QuickCheck",
        "partial": "Integral",
        "signature": "a-\u003eGen b-\u003eGen b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Arbitrary.html#v:coarbitraryReal",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003ecoarbitrary\u003c/a\u003e\u003c/code\u003e implementation for real numbers.\n\u003c/p\u003e",
        "fct-module": "Test.QuickCheck.Arbitrary",
        "fct-package": "QuickCheck",
        "fct-signature": "a -\u003e Gen b -\u003e Gen b",
        "fct-source": "src/Test-QuickCheck-Arbitrary.html#coarbitraryReal",
        "fct-type": "function",
        "title": "coarbitraryReal"
      },
      "index": {
        "description": "coarbitrary implementation for real numbers",
        "hierarchy": "Test QuickCheck Arbitrary",
        "module": "Test.QuickCheck.Arbitrary",
        "name": "coarbitraryReal",
        "normalized": "a-\u003eGen b-\u003eGen b",
        "package": "QuickCheck",
        "partial": "Real",
        "signature": "a-\u003eGen b-\u003eGen b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Arbitrary.html#v:coarbitraryShow",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ecoarbitrary\u003c/a\u003e\u003c/code\u003e helper for lazy people :-).\n\u003c/p\u003e",
        "fct-module": "Test.QuickCheck.Arbitrary",
        "fct-package": "QuickCheck",
        "fct-signature": "a -\u003e Gen b -\u003e Gen b",
        "fct-source": "src/Test-QuickCheck-Arbitrary.html#coarbitraryShow",
        "fct-type": "function",
        "title": "coarbitraryShow"
      },
      "index": {
        "description": "coarbitrary helper for lazy people",
        "hierarchy": "Test QuickCheck Arbitrary",
        "module": "Test.QuickCheck.Arbitrary",
        "name": "coarbitraryShow",
        "normalized": "a-\u003eGen b-\u003eGen b",
        "package": "QuickCheck",
        "partial": "Show",
        "signature": "a-\u003eGen b-\u003eGen b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Arbitrary.html#v:orderedList",
      "description": {
        "fct-descr": "\u003cp\u003eGenerates an ordered list of a given length.\n\u003c/p\u003e",
        "fct-module": "Test.QuickCheck.Arbitrary",
        "fct-package": "QuickCheck",
        "fct-signature": "Gen [a]",
        "fct-source": "src/Test-QuickCheck-Arbitrary.html#orderedList",
        "fct-type": "function",
        "title": "orderedList"
      },
      "index": {
        "description": "Generates an ordered list of given length",
        "hierarchy": "Test QuickCheck Arbitrary",
        "module": "Test.QuickCheck.Arbitrary",
        "name": "orderedList",
        "normalized": "Gen[a]",
        "package": "QuickCheck",
        "partial": "List",
        "signature": "Gen[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Arbitrary.html#v:shrink",
      "description": {
        "fct-descr": "\u003cp\u003eProduces a (possibly) empty list of all the possible\n immediate shrinks of the given value.\n\u003c/p\u003e",
        "fct-module": "Test.QuickCheck.Arbitrary",
        "fct-package": "QuickCheck",
        "fct-signature": "a -\u003e [a]",
        "fct-source": "src/Test-QuickCheck-Arbitrary.html#shrink",
        "fct-type": "method",
        "title": "shrink"
      },
      "index": {
        "description": "Produces possibly empty list of all the possible immediate shrinks of the given value",
        "hierarchy": "Test QuickCheck Arbitrary",
        "module": "Test.QuickCheck.Arbitrary",
        "name": "shrink",
        "normalized": "a-\u003e[a]",
        "package": "QuickCheck",
        "partial": "",
        "signature": "a-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Arbitrary.html#v:shrinkIntegral",
      "description": {
        "fct-descr": "\u003cp\u003eShrink an integral number.\n\u003c/p\u003e",
        "fct-module": "Test.QuickCheck.Arbitrary",
        "fct-package": "QuickCheck",
        "fct-signature": "a -\u003e [a]",
        "fct-source": "src/Test-QuickCheck-Arbitrary.html#shrinkIntegral",
        "fct-type": "function",
        "title": "shrinkIntegral"
      },
      "index": {
        "description": "Shrink an integral number",
        "hierarchy": "Test QuickCheck Arbitrary",
        "module": "Test.QuickCheck.Arbitrary",
        "name": "shrinkIntegral",
        "normalized": "a-\u003e[a]",
        "package": "QuickCheck",
        "partial": "Integral",
        "signature": "a-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Arbitrary.html#v:shrinkList",
      "description": {
        "fct-module": "Test.QuickCheck.Arbitrary",
        "fct-package": "QuickCheck",
        "fct-signature": "(a -\u003e [a]) -\u003e [a] -\u003e [[a]]",
        "fct-source": "src/Test-QuickCheck-Arbitrary.html#shrinkList",
        "fct-type": "function",
        "title": "shrinkList"
      },
      "index": {
        "description": "",
        "hierarchy": "Test QuickCheck Arbitrary",
        "module": "Test.QuickCheck.Arbitrary",
        "name": "shrinkList",
        "normalized": "(a-\u003e[a])-\u003e[a]-\u003e[[a]]",
        "package": "QuickCheck",
        "partial": "List",
        "signature": "(a-\u003e[a])-\u003e[a]-\u003e[[a]]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Arbitrary.html#v:shrinkNothing",
      "description": {
        "fct-descr": "\u003cp\u003eReturns no shrinking alternatives.\n\u003c/p\u003e",
        "fct-module": "Test.QuickCheck.Arbitrary",
        "fct-package": "QuickCheck",
        "fct-signature": "a -\u003e [a]",
        "fct-source": "src/Test-QuickCheck-Arbitrary.html#shrinkNothing",
        "fct-type": "function",
        "title": "shrinkNothing"
      },
      "index": {
        "description": "Returns no shrinking alternatives",
        "hierarchy": "Test QuickCheck Arbitrary",
        "module": "Test.QuickCheck.Arbitrary",
        "name": "shrinkNothing",
        "normalized": "a-\u003e[a]",
        "package": "QuickCheck",
        "partial": "Nothing",
        "signature": "a-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Arbitrary.html#v:shrinkRealFrac",
      "description": {
        "fct-descr": "\u003cp\u003eShrink a fraction.\n\u003c/p\u003e",
        "fct-module": "Test.QuickCheck.Arbitrary",
        "fct-package": "QuickCheck",
        "fct-signature": "a -\u003e [a]",
        "fct-source": "src/Test-QuickCheck-Arbitrary.html#shrinkRealFrac",
        "fct-type": "function",
        "title": "shrinkRealFrac"
      },
      "index": {
        "description": "Shrink fraction",
        "hierarchy": "Test QuickCheck Arbitrary",
        "module": "Test.QuickCheck.Arbitrary",
        "name": "shrinkRealFrac",
        "normalized": "a-\u003e[a]",
        "package": "QuickCheck",
        "partial": "Real Frac",
        "signature": "a-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Arbitrary.html#v:vector",
      "description": {
        "fct-descr": "\u003cp\u003eGenerates a list of a given length.\n\u003c/p\u003e",
        "fct-module": "Test.QuickCheck.Arbitrary",
        "fct-package": "QuickCheck",
        "fct-signature": "Int -\u003e Gen [a]",
        "fct-source": "src/Test-QuickCheck-Arbitrary.html#vector",
        "fct-type": "function",
        "title": "vector"
      },
      "index": {
        "description": "Generates list of given length",
        "hierarchy": "Test QuickCheck Arbitrary",
        "module": "Test.QuickCheck.Arbitrary",
        "name": "vector",
        "normalized": "Int-\u003eGen[a]",
        "package": "QuickCheck",
        "partial": "",
        "signature": "Int-\u003eGen[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Function.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eGeneration of random shrinkable, showable functions.\n Not really documented at the moment!\n\u003c/p\u003e\u003cp\u003eExample of use:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e:{\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elet prop :: Fun String Integer -\u003e Bool\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eprop (Fun _ f) = f \"monkey\" == f \"banana\" || f \"banana\" == f \"elephant\"\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e:}\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003equickCheck prop\n\u003c/code\u003e\u003c/strong\u003e*** Failed! Falsifiable (after 3 tests and 134 shrinks):\n{\"elephant\"-\u003e1, \"monkey\"-\u003e1, _-\u003e0}\n\u003c/pre\u003e\u003cp\u003eTo generate random values of type \u003ccode\u003e\u003ccode\u003e\u003ca\u003eFun\u003c/a\u003e\u003c/code\u003e a b\u003c/code\u003e,\n you must have an instance \u003ccode\u003e\u003ccode\u003e\u003ca\u003eFunction\u003c/a\u003e\u003c/code\u003e a\u003c/code\u003e.\n If your type has a \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e instance, you can use \u003ccode\u003e\u003ca\u003efunctionShow\u003c/a\u003e\u003c/code\u003e to write the instance; otherwise,\n use \u003ccode\u003e\u003ca\u003efunctionMap\u003c/a\u003e\u003c/code\u003e to give a bijection between your type and a type that is already an instance of \u003ccode\u003e\u003ca\u003eFunction\u003c/a\u003e\u003c/code\u003e.\n See the \u003ccode\u003e\u003ccode\u003e\u003ca\u003eFunction\u003c/a\u003e\u003c/code\u003e [a]\u003c/code\u003e instance for an example of the latter.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Test.QuickCheck.Function",
        "fct-package": "QuickCheck",
        "fct-signature": "module",
        "fct-source": "src/Test-QuickCheck-Function.html",
        "fct-type": "module",
        "title": "Function"
      },
      "index": {
        "description": "Generation of random shrinkable showable functions Not really documented at the moment Example of use let prop Fun String Integer Bool prop Fun monkey banana banana elephant quickCheck prop Failed Falsifiable after tests and shrinks elephant monkey To generate random values of type Fun you must have an instance Function If your type has Show instance you can use functionShow to write the instance otherwise use functionMap to give bijection between your type and type that is already an instance of Function See the Function instance for an example of the latter",
        "hierarchy": "Test QuickCheck Function",
        "module": "Test.QuickCheck.Function",
        "name": "Function",
        "normalized": "",
        "package": "QuickCheck",
        "partial": "Function",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Function.html#t::-45--62-",
      "description": {
        "fct-module": "Test.QuickCheck.Function",
        "fct-package": "QuickCheck",
        "fct-signature": "data",
        "fct-source": "src/Test-QuickCheck-Function.html#%3A-%3E",
        "fct-type": "data",
        "title": ":-\u003e"
      },
      "index": {
        "description": "",
        "hierarchy": "Test QuickCheck Function",
        "module": "Test.QuickCheck.Function",
        "name": ":-\u003e",
        "normalized": "",
        "package": "QuickCheck",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Function.html#t:Fun",
      "description": {
        "fct-module": "Test.QuickCheck.Function",
        "fct-package": "QuickCheck",
        "fct-signature": "data",
        "fct-source": "src/Test-QuickCheck-Function.html#Fun",
        "fct-type": "data",
        "title": "Fun"
      },
      "index": {
        "description": "",
        "hierarchy": "Test QuickCheck Function",
        "module": "Test.QuickCheck.Function",
        "name": "Fun",
        "normalized": "",
        "package": "QuickCheck",
        "partial": "Fun",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Function.html#t:Function",
      "description": {
        "fct-module": "Test.QuickCheck.Function",
        "fct-package": "QuickCheck",
        "fct-signature": "class",
        "fct-source": "src/Test-QuickCheck-Function.html#Function",
        "fct-type": "class",
        "title": "Function"
      },
      "index": {
        "description": "",
        "hierarchy": "Test QuickCheck Function",
        "module": "Test.QuickCheck.Function",
        "name": "Function",
        "normalized": "",
        "package": "QuickCheck",
        "partial": "Function",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Function.html#v:Fun",
      "description": {
        "fct-module": "Test.QuickCheck.Function",
        "fct-package": "QuickCheck",
        "fct-signature": "Fun (a :-\u003e b, b) (a -\u003e b)",
        "fct-source": "src/Test-QuickCheck-Function.html#Fun",
        "fct-type": "function",
        "title": "Fun"
      },
      "index": {
        "description": "",
        "hierarchy": "Test QuickCheck Function",
        "module": "Test.QuickCheck.Function",
        "name": "Fun",
        "normalized": "Fun(a-\u003eb,b)(a-\u003eb)",
        "package": "QuickCheck",
        "partial": "Fun",
        "signature": "Fun(a-\u003eb,b)(a-\u003eb)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Function.html#v:apply",
      "description": {
        "fct-module": "Test.QuickCheck.Function",
        "fct-package": "QuickCheck",
        "fct-signature": "Fun a b -\u003e a -\u003e b",
        "fct-source": "src/Test-QuickCheck-Function.html#apply",
        "fct-type": "function",
        "title": "apply"
      },
      "index": {
        "description": "",
        "hierarchy": "Test QuickCheck Function",
        "module": "Test.QuickCheck.Function",
        "name": "apply",
        "normalized": "Fun a b-\u003ea-\u003eb",
        "package": "QuickCheck",
        "partial": "",
        "signature": "Fun a b-\u003ea-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Function.html#v:function",
      "description": {
        "fct-module": "Test.QuickCheck.Function",
        "fct-package": "QuickCheck",
        "fct-signature": "(a -\u003e b) -\u003e a :-\u003e b",
        "fct-source": "src/Test-QuickCheck-Function.html#function",
        "fct-type": "method",
        "title": "function"
      },
      "index": {
        "description": "",
        "hierarchy": "Test QuickCheck Function",
        "module": "Test.QuickCheck.Function",
        "name": "function",
        "normalized": "(a-\u003eb)-\u003ea-\u003eb",
        "package": "QuickCheck",
        "partial": "",
        "signature": "(a-\u003eb)-\u003ea-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Function.html#v:functionMap",
      "description": {
        "fct-module": "Test.QuickCheck.Function",
        "fct-package": "QuickCheck",
        "fct-signature": "(a -\u003e b) -\u003e (b -\u003e a) -\u003e (a -\u003e c) -\u003e a :-\u003e c",
        "fct-source": "src/Test-QuickCheck-Function.html#functionMap",
        "fct-type": "function",
        "title": "functionMap"
      },
      "index": {
        "description": "",
        "hierarchy": "Test QuickCheck Function",
        "module": "Test.QuickCheck.Function",
        "name": "functionMap",
        "normalized": "(a-\u003eb)-\u003e(b-\u003ea)-\u003e(a-\u003ec)-\u003ea-\u003ec",
        "package": "QuickCheck",
        "partial": "Map",
        "signature": "(a-\u003eb)-\u003e(b-\u003ea)-\u003e(a-\u003ec)-\u003ea-\u003ec"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Function.html#v:functionShow",
      "description": {
        "fct-module": "Test.QuickCheck.Function",
        "fct-package": "QuickCheck",
        "fct-signature": "(a -\u003e c) -\u003e a :-\u003e c",
        "fct-source": "src/Test-QuickCheck-Function.html#functionShow",
        "fct-type": "function",
        "title": "functionShow"
      },
      "index": {
        "description": "",
        "hierarchy": "Test QuickCheck Function",
        "module": "Test.QuickCheck.Function",
        "name": "functionShow",
        "normalized": "(a-\u003eb)-\u003ea-\u003eb",
        "package": "QuickCheck",
        "partial": "Show",
        "signature": "(a-\u003ec)-\u003ea-\u003ec"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Gen.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTest case generation.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Test.QuickCheck.Gen",
        "fct-package": "QuickCheck",
        "fct-signature": "module",
        "fct-source": "src/Test-QuickCheck-Gen.html",
        "fct-type": "module",
        "title": "Gen"
      },
      "index": {
        "description": "Test case generation",
        "hierarchy": "Test QuickCheck Gen",
        "module": "Test.QuickCheck.Gen",
        "name": "Gen",
        "normalized": "",
        "package": "QuickCheck",
        "partial": "Gen",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Gen.html#t:Gen",
      "description": {
        "fct-module": "Test.QuickCheck.Gen",
        "fct-package": "QuickCheck",
        "fct-signature": "newtype",
        "fct-source": "src/Test-QuickCheck-Gen.html#Gen",
        "fct-type": "newtype",
        "title": "Gen"
      },
      "index": {
        "description": "",
        "hierarchy": "Test QuickCheck Gen",
        "module": "Test.QuickCheck.Gen",
        "name": "Gen",
        "normalized": "",
        "package": "QuickCheck",
        "partial": "Gen",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Gen.html#v:MkGen",
      "description": {
        "fct-module": "Test.QuickCheck.Gen",
        "fct-package": "QuickCheck",
        "fct-signature": "MkGen",
        "fct-source": "src/Test-QuickCheck-Gen.html#Gen",
        "fct-type": "function",
        "title": "MkGen"
      },
      "index": {
        "description": "",
        "hierarchy": "Test QuickCheck Gen",
        "module": "Test.QuickCheck.Gen",
        "name": "MkGen",
        "normalized": "",
        "package": "QuickCheck",
        "partial": "Mk Gen",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Gen.html#v:choose",
      "description": {
        "fct-descr": "\u003cp\u003eGenerates a random element in the given inclusive range.\n\u003c/p\u003e",
        "fct-module": "Test.QuickCheck.Gen",
        "fct-package": "QuickCheck",
        "fct-signature": "(a, a) -\u003e Gen a",
        "fct-source": "src/Test-QuickCheck-Gen.html#choose",
        "fct-type": "function",
        "title": "choose"
      },
      "index": {
        "description": "Generates random element in the given inclusive range",
        "hierarchy": "Test QuickCheck Gen",
        "module": "Test.QuickCheck.Gen",
        "name": "choose",
        "normalized": "(a,a)-\u003eGen a",
        "package": "QuickCheck",
        "partial": "",
        "signature": "(a,a)-\u003eGen a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Gen.html#v:elements",
      "description": {
        "fct-descr": "\u003cp\u003eGenerates one of the given values. The input list must be non-empty.\n\u003c/p\u003e",
        "fct-module": "Test.QuickCheck.Gen",
        "fct-package": "QuickCheck",
        "fct-signature": "[a] -\u003e Gen a",
        "fct-source": "src/Test-QuickCheck-Gen.html#elements",
        "fct-type": "function",
        "title": "elements"
      },
      "index": {
        "description": "Generates one of the given values The input list must be non-empty",
        "hierarchy": "Test QuickCheck Gen",
        "module": "Test.QuickCheck.Gen",
        "name": "elements",
        "normalized": "[a]-\u003eGen a",
        "package": "QuickCheck",
        "partial": "",
        "signature": "[a]-\u003eGen a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Gen.html#v:frequency",
      "description": {
        "fct-descr": "\u003cp\u003eChooses one of the given generators, with a weighted random distribution.\n The input list must be non-empty.\n\u003c/p\u003e",
        "fct-module": "Test.QuickCheck.Gen",
        "fct-package": "QuickCheck",
        "fct-signature": "[(Int, Gen a)] -\u003e Gen a",
        "fct-source": "src/Test-QuickCheck-Gen.html#frequency",
        "fct-type": "function",
        "title": "frequency"
      },
      "index": {
        "description": "Chooses one of the given generators with weighted random distribution The input list must be non-empty",
        "hierarchy": "Test QuickCheck Gen",
        "module": "Test.QuickCheck.Gen",
        "name": "frequency",
        "normalized": "[(Int,Gen a)]-\u003eGen a",
        "package": "QuickCheck",
        "partial": "",
        "signature": "[(Int,Gen a)]-\u003eGen a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Gen.html#v:growingElements",
      "description": {
        "fct-descr": "\u003cp\u003eTakes a list of elements of increasing size, and chooses\n among an initial segment of the list. The size of this initial\n segment increases with the size parameter.\n The input list must be non-empty.\n\u003c/p\u003e",
        "fct-module": "Test.QuickCheck.Gen",
        "fct-package": "QuickCheck",
        "fct-signature": "[a] -\u003e Gen a",
        "fct-source": "src/Test-QuickCheck-Gen.html#growingElements",
        "fct-type": "function",
        "title": "growingElements"
      },
      "index": {
        "description": "Takes list of elements of increasing size and chooses among an initial segment of the list The size of this initial segment increases with the size parameter The input list must be non-empty",
        "hierarchy": "Test QuickCheck Gen",
        "module": "Test.QuickCheck.Gen",
        "name": "growingElements",
        "normalized": "[a]-\u003eGen a",
        "package": "QuickCheck",
        "partial": "Elements",
        "signature": "[a]-\u003eGen a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Gen.html#v:listOf",
      "description": {
        "fct-descr": "\u003cp\u003eGenerates a list of random length. The maximum length depends on the\n size parameter.\n\u003c/p\u003e",
        "fct-module": "Test.QuickCheck.Gen",
        "fct-package": "QuickCheck",
        "fct-signature": "Gen a -\u003e Gen [a]",
        "fct-source": "src/Test-QuickCheck-Gen.html#listOf",
        "fct-type": "function",
        "title": "listOf"
      },
      "index": {
        "description": "Generates list of random length The maximum length depends on the size parameter",
        "hierarchy": "Test QuickCheck Gen",
        "module": "Test.QuickCheck.Gen",
        "name": "listOf",
        "normalized": "Gen a-\u003eGen[a]",
        "package": "QuickCheck",
        "partial": "Of",
        "signature": "Gen a-\u003eGen[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Gen.html#v:listOf1",
      "description": {
        "fct-descr": "\u003cp\u003eGenerates a non-empty list of random length. The maximum length\n depends on the size parameter.\n\u003c/p\u003e",
        "fct-module": "Test.QuickCheck.Gen",
        "fct-package": "QuickCheck",
        "fct-signature": "Gen a -\u003e Gen [a]",
        "fct-source": "src/Test-QuickCheck-Gen.html#listOf1",
        "fct-type": "function",
        "title": "listOf1"
      },
      "index": {
        "description": "Generates non-empty list of random length The maximum length depends on the size parameter",
        "hierarchy": "Test QuickCheck Gen",
        "module": "Test.QuickCheck.Gen",
        "name": "listOf1",
        "normalized": "Gen a-\u003eGen[a]",
        "package": "QuickCheck",
        "partial": "Of",
        "signature": "Gen a-\u003eGen[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Gen.html#v:oneof",
      "description": {
        "fct-descr": "\u003cp\u003eRandomly uses one of the given generators. The input list\n must be non-empty.\n\u003c/p\u003e",
        "fct-module": "Test.QuickCheck.Gen",
        "fct-package": "QuickCheck",
        "fct-signature": "[Gen a] -\u003e Gen a",
        "fct-source": "src/Test-QuickCheck-Gen.html#oneof",
        "fct-type": "function",
        "title": "oneof"
      },
      "index": {
        "description": "Randomly uses one of the given generators The input list must be non-empty",
        "hierarchy": "Test QuickCheck Gen",
        "module": "Test.QuickCheck.Gen",
        "name": "oneof",
        "normalized": "[Gen a]-\u003eGen a",
        "package": "QuickCheck",
        "partial": "",
        "signature": "[Gen a]-\u003eGen a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Gen.html#v:promote",
      "description": {
        "fct-descr": "\u003cp\u003ePromotes a monadic generator to a generator of monadic values.\n\u003c/p\u003e",
        "fct-module": "Test.QuickCheck.Gen",
        "fct-package": "QuickCheck",
        "fct-signature": "m (Gen a) -\u003e Gen (m a)",
        "fct-source": "src/Test-QuickCheck-Gen.html#promote",
        "fct-type": "function",
        "title": "promote"
      },
      "index": {
        "description": "Promotes monadic generator to generator of monadic values",
        "hierarchy": "Test QuickCheck Gen",
        "module": "Test.QuickCheck.Gen",
        "name": "promote",
        "normalized": "a(Gen b)-\u003eGen(a b)",
        "package": "QuickCheck",
        "partial": "",
        "signature": "m(Gen a)-\u003eGen(m a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Gen.html#v:resize",
      "description": {
        "fct-descr": "\u003cp\u003eOverrides the size parameter. Returns a generator which uses\n the given size instead of the runtime-size parameter.\n\u003c/p\u003e",
        "fct-module": "Test.QuickCheck.Gen",
        "fct-package": "QuickCheck",
        "fct-signature": "Int -\u003e Gen a -\u003e Gen a",
        "fct-source": "src/Test-QuickCheck-Gen.html#resize",
        "fct-type": "function",
        "title": "resize"
      },
      "index": {
        "description": "Overrides the size parameter Returns generator which uses the given size instead of the runtime-size parameter",
        "hierarchy": "Test QuickCheck Gen",
        "module": "Test.QuickCheck.Gen",
        "name": "resize",
        "normalized": "Int-\u003eGen a-\u003eGen a",
        "package": "QuickCheck",
        "partial": "",
        "signature": "Int-\u003eGen a-\u003eGen a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Gen.html#v:sample",
      "description": {
        "fct-descr": "\u003cp\u003eGenerates some example values and prints them to \u003ccode\u003estdout\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Test.QuickCheck.Gen",
        "fct-package": "QuickCheck",
        "fct-signature": "Gen a -\u003e IO ()",
        "fct-source": "src/Test-QuickCheck-Gen.html#sample",
        "fct-type": "function",
        "title": "sample"
      },
      "index": {
        "description": "Generates some example values and prints them to stdout",
        "hierarchy": "Test QuickCheck Gen",
        "module": "Test.QuickCheck.Gen",
        "name": "sample",
        "normalized": "Gen a-\u003eIO()",
        "package": "QuickCheck",
        "partial": "",
        "signature": "Gen a-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Gen.html#v:sample-39-",
      "description": {
        "fct-descr": "\u003cp\u003eGenerates some example values.\n\u003c/p\u003e",
        "fct-module": "Test.QuickCheck.Gen",
        "fct-package": "QuickCheck",
        "fct-signature": "Gen a -\u003e IO [a]",
        "fct-source": "src/Test-QuickCheck-Gen.html#sample%27",
        "fct-type": "function",
        "title": "sample'"
      },
      "index": {
        "description": "Generates some example values",
        "hierarchy": "Test QuickCheck Gen",
        "module": "Test.QuickCheck.Gen",
        "name": "sample'",
        "normalized": "Gen a-\u003eIO[a]",
        "package": "QuickCheck",
        "partial": "",
        "signature": "Gen a-\u003eIO[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Gen.html#v:sized",
      "description": {
        "fct-descr": "\u003cp\u003eUsed to construct generators that depend on the size parameter.\n\u003c/p\u003e",
        "fct-module": "Test.QuickCheck.Gen",
        "fct-package": "QuickCheck",
        "fct-signature": "(Int -\u003e Gen a) -\u003e Gen a",
        "fct-source": "src/Test-QuickCheck-Gen.html#sized",
        "fct-type": "function",
        "title": "sized"
      },
      "index": {
        "description": "Used to construct generators that depend on the size parameter",
        "hierarchy": "Test QuickCheck Gen",
        "module": "Test.QuickCheck.Gen",
        "name": "sized",
        "normalized": "(Int-\u003eGen a)-\u003eGen a",
        "package": "QuickCheck",
        "partial": "",
        "signature": "(Int-\u003eGen a)-\u003eGen a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Gen.html#v:suchThat",
      "description": {
        "fct-descr": "\u003cp\u003eGenerates a value that satisfies a predicate.\n\u003c/p\u003e",
        "fct-module": "Test.QuickCheck.Gen",
        "fct-package": "QuickCheck",
        "fct-signature": "Gen a -\u003e (a -\u003e Bool) -\u003e Gen a",
        "fct-source": "src/Test-QuickCheck-Gen.html#suchThat",
        "fct-type": "function",
        "title": "suchThat"
      },
      "index": {
        "description": "Generates value that satisfies predicate",
        "hierarchy": "Test QuickCheck Gen",
        "module": "Test.QuickCheck.Gen",
        "name": "suchThat",
        "normalized": "Gen a-\u003e(a-\u003eBool)-\u003eGen a",
        "package": "QuickCheck",
        "partial": "That",
        "signature": "Gen a-\u003e(a-\u003eBool)-\u003eGen a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Gen.html#v:suchThatMaybe",
      "description": {
        "fct-descr": "\u003cp\u003eTries to generate a value that satisfies a predicate.\n\u003c/p\u003e",
        "fct-module": "Test.QuickCheck.Gen",
        "fct-package": "QuickCheck",
        "fct-signature": "Gen a -\u003e (a -\u003e Bool) -\u003e Gen (Maybe a)",
        "fct-source": "src/Test-QuickCheck-Gen.html#suchThatMaybe",
        "fct-type": "function",
        "title": "suchThatMaybe"
      },
      "index": {
        "description": "Tries to generate value that satisfies predicate",
        "hierarchy": "Test QuickCheck Gen",
        "module": "Test.QuickCheck.Gen",
        "name": "suchThatMaybe",
        "normalized": "Gen a-\u003e(a-\u003eBool)-\u003eGen(Maybe a)",
        "package": "QuickCheck",
        "partial": "That Maybe",
        "signature": "Gen a-\u003e(a-\u003eBool)-\u003eGen(Maybe a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Gen.html#v:unGen",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Test.QuickCheck.Gen",
        "fct-package": "QuickCheck",
        "fct-signature": "StdGen -\u003e Int -\u003e a",
        "fct-source": "src/Test-QuickCheck-Gen.html#Gen",
        "fct-type": "function",
        "title": "unGen"
      },
      "index": {
        "description": "",
        "hierarchy": "Test QuickCheck Gen",
        "module": "Test.QuickCheck.Gen",
        "name": "unGen",
        "normalized": "StdGen-\u003eInt-\u003ea",
        "package": "QuickCheck",
        "partial": "Gen",
        "signature": "StdGen-\u003eInt-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Gen.html#v:variant",
      "description": {
        "fct-descr": "\u003cp\u003eModifies a generator using an integer seed.\n\u003c/p\u003e",
        "fct-module": "Test.QuickCheck.Gen",
        "fct-package": "QuickCheck",
        "fct-signature": "n -\u003e Gen a -\u003e Gen a",
        "fct-source": "src/Test-QuickCheck-Gen.html#variant",
        "fct-type": "function",
        "title": "variant"
      },
      "index": {
        "description": "Modifies generator using an integer seed",
        "hierarchy": "Test QuickCheck Gen",
        "module": "Test.QuickCheck.Gen",
        "name": "variant",
        "normalized": "a-\u003eGen b-\u003eGen b",
        "package": "QuickCheck",
        "partial": "",
        "signature": "n-\u003eGen a-\u003eGen a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Gen.html#v:vectorOf",
      "description": {
        "fct-descr": "\u003cp\u003eGenerates a list of the given length.\n\u003c/p\u003e",
        "fct-module": "Test.QuickCheck.Gen",
        "fct-package": "QuickCheck",
        "fct-signature": "Int -\u003e Gen a -\u003e Gen [a]",
        "fct-source": "src/Test-QuickCheck-Gen.html#vectorOf",
        "fct-type": "function",
        "title": "vectorOf"
      },
      "index": {
        "description": "Generates list of the given length",
        "hierarchy": "Test QuickCheck Gen",
        "module": "Test.QuickCheck.Gen",
        "name": "vectorOf",
        "normalized": "Int-\u003eGen a-\u003eGen[a]",
        "package": "QuickCheck",
        "partial": "Of",
        "signature": "Int-\u003eGen a-\u003eGen[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Modifiers.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eModifiers for test data.\n\u003c/p\u003e\u003cp\u003eThese types do things such as restricting the kind of test data that can be generated.\n They can be pattern-matched on in properties as a stylistic\n alternative to using explicit quantification.\n\u003c/p\u003e\u003cp\u003eExamples:\n\u003c/p\u003e\u003cpre\u003e\n -- Functions cannot be shown (but see \u003ca\u003eTest.QuickCheck.Function\u003c/a\u003e)\n prop_TakeDropWhile (\u003ccode\u003e\u003ca\u003eBlind\u003c/a\u003e\u003c/code\u003e p) (xs :: [\u003ccode\u003eA\u003c/code\u003e]) =\n   takeWhile p xs ++ dropWhile p xs == xs\n\u003c/pre\u003e\u003cpre\u003e\n prop_TakeDrop (\u003ccode\u003e\u003ca\u003eNonNegative\u003c/a\u003e\u003c/code\u003e n) (xs :: [\u003ccode\u003eA\u003c/code\u003e]) =\n   take n xs ++ drop n xs == xs\n\u003c/pre\u003e\u003cpre\u003e\n -- cycle does not work for empty lists\n prop_Cycle (\u003ccode\u003e\u003ca\u003eNonNegative\u003c/a\u003e\u003c/code\u003e n) (\u003ccode\u003e\u003ca\u003eNonEmpty\u003c/a\u003e\u003c/code\u003e (xs :: [\u003ccode\u003eA\u003c/code\u003e])) =\n   take n (cycle xs) == take n (xs ++ cycle xs)\n\u003c/pre\u003e\u003cpre\u003e\n -- Instead of \u003ccode\u003eforAll\u003c/code\u003e \u003ccode\u003e\u003ca\u003eorderedList\u003c/a\u003e\u003c/code\u003e\n prop_Sort (\u003ccode\u003e\u003ca\u003eOrdered\u003c/a\u003e\u003c/code\u003e (xs :: [\u003ccode\u003eOrdA\u003c/code\u003e])) =\n   sort xs == xs\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "Test.QuickCheck.Modifiers",
        "fct-package": "QuickCheck",
        "fct-signature": "module",
        "fct-source": "src/Test-QuickCheck-Modifiers.html",
        "fct-type": "module",
        "title": "Modifiers"
      },
      "index": {
        "description": "Modifiers for test data These types do things such as restricting the kind of test data that can be generated They can be pattern-matched on in properties as stylistic alternative to using explicit quantification Examples Functions cannot be shown but see Test.QuickCheck.Function prop TakeDropWhile Blind xs takeWhile xs dropWhile xs xs prop TakeDrop NonNegative xs take xs drop xs xs cycle does not work for empty lists prop Cycle NonNegative NonEmpty xs take cycle xs take xs cycle xs Instead of forAll orderedList prop Sort Ordered xs OrdA sort xs xs",
        "hierarchy": "Test QuickCheck Modifiers",
        "module": "Test.QuickCheck.Modifiers",
        "name": "Modifiers",
        "normalized": "",
        "package": "QuickCheck",
        "partial": "Modifiers",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Modifiers.html#t:Blind",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eBlind x\u003c/code\u003e: as x, but x does not have to be in the \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e class.\n\u003c/p\u003e",
        "fct-module": "Test.QuickCheck.Modifiers",
        "fct-package": "QuickCheck",
        "fct-signature": "newtype",
        "fct-source": "src/Test-QuickCheck-Modifiers.html#Blind",
        "fct-type": "newtype",
        "title": "Blind"
      },
      "index": {
        "description": "Blind as but does not have to be in the Show class",
        "hierarchy": "Test QuickCheck Modifiers",
        "module": "Test.QuickCheck.Modifiers",
        "name": "Blind",
        "normalized": "",
        "package": "QuickCheck",
        "partial": "Blind",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Modifiers.html#t:Fixed",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eFixed x\u003c/code\u003e: as x, but will not be shrunk.\n\u003c/p\u003e",
        "fct-module": "Test.QuickCheck.Modifiers",
        "fct-package": "QuickCheck",
        "fct-signature": "newtype",
        "fct-source": "src/Test-QuickCheck-Modifiers.html#Fixed",
        "fct-type": "newtype",
        "title": "Fixed"
      },
      "index": {
        "description": "Fixed as but will not be shrunk",
        "hierarchy": "Test QuickCheck Modifiers",
        "module": "Test.QuickCheck.Modifiers",
        "name": "Fixed",
        "normalized": "",
        "package": "QuickCheck",
        "partial": "Fixed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Modifiers.html#t:NonEmptyList",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eNonEmpty xs\u003c/code\u003e: guarantees that xs is non-empty.\n\u003c/p\u003e",
        "fct-module": "Test.QuickCheck.Modifiers",
        "fct-package": "QuickCheck",
        "fct-signature": "newtype",
        "fct-source": "src/Test-QuickCheck-Modifiers.html#NonEmptyList",
        "fct-type": "newtype",
        "title": "NonEmptyList"
      },
      "index": {
        "description": "NonEmpty xs guarantees that xs is non-empty",
        "hierarchy": "Test QuickCheck Modifiers",
        "module": "Test.QuickCheck.Modifiers",
        "name": "NonEmptyList",
        "normalized": "",
        "package": "QuickCheck",
        "partial": "Non Empty List",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Modifiers.html#t:NonNegative",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eNonNegative x\u003c/code\u003e: guarantees that \u003ccode\u003ex \u003e= 0\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Test.QuickCheck.Modifiers",
        "fct-package": "QuickCheck",
        "fct-signature": "newtype",
        "fct-source": "src/Test-QuickCheck-Modifiers.html#NonNegative",
        "fct-type": "newtype",
        "title": "NonNegative"
      },
      "index": {
        "description": "NonNegative guarantees that",
        "hierarchy": "Test QuickCheck Modifiers",
        "module": "Test.QuickCheck.Modifiers",
        "name": "NonNegative",
        "normalized": "",
        "package": "QuickCheck",
        "partial": "Non Negative",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Modifiers.html#t:NonZero",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eNonZero x\u003c/code\u003e: guarantees that \u003ccode\u003ex /= 0\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Test.QuickCheck.Modifiers",
        "fct-package": "QuickCheck",
        "fct-signature": "newtype",
        "fct-source": "src/Test-QuickCheck-Modifiers.html#NonZero",
        "fct-type": "newtype",
        "title": "NonZero"
      },
      "index": {
        "description": "NonZero guarantees that",
        "hierarchy": "Test QuickCheck Modifiers",
        "module": "Test.QuickCheck.Modifiers",
        "name": "NonZero",
        "normalized": "",
        "package": "QuickCheck",
        "partial": "Non Zero",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Modifiers.html#t:OrderedList",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eOrdered xs\u003c/code\u003e: guarantees that xs is ordered.\n\u003c/p\u003e",
        "fct-module": "Test.QuickCheck.Modifiers",
        "fct-package": "QuickCheck",
        "fct-signature": "newtype",
        "fct-source": "src/Test-QuickCheck-Modifiers.html#OrderedList",
        "fct-type": "newtype",
        "title": "OrderedList"
      },
      "index": {
        "description": "Ordered xs guarantees that xs is ordered",
        "hierarchy": "Test QuickCheck Modifiers",
        "module": "Test.QuickCheck.Modifiers",
        "name": "OrderedList",
        "normalized": "",
        "package": "QuickCheck",
        "partial": "Ordered List",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Modifiers.html#t:Positive",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003ePositive x\u003c/code\u003e: guarantees that \u003ccode\u003ex \u003e 0\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Test.QuickCheck.Modifiers",
        "fct-package": "QuickCheck",
        "fct-signature": "newtype",
        "fct-source": "src/Test-QuickCheck-Modifiers.html#Positive",
        "fct-type": "newtype",
        "title": "Positive"
      },
      "index": {
        "description": "Positive guarantees that",
        "hierarchy": "Test QuickCheck Modifiers",
        "module": "Test.QuickCheck.Modifiers",
        "name": "Positive",
        "normalized": "",
        "package": "QuickCheck",
        "partial": "Positive",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Modifiers.html#t:Shrink2",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eShrink2 x\u003c/code\u003e: allows 2 shrinking steps at the same time when shrinking x\n\u003c/p\u003e",
        "fct-module": "Test.QuickCheck.Modifiers",
        "fct-package": "QuickCheck",
        "fct-signature": "newtype",
        "fct-source": "src/Test-QuickCheck-Modifiers.html#Shrink2",
        "fct-type": "newtype",
        "title": "Shrink2"
      },
      "index": {
        "description": "Shrink2 allows shrinking steps at the same time when shrinking",
        "hierarchy": "Test QuickCheck Modifiers",
        "module": "Test.QuickCheck.Modifiers",
        "name": "Shrink2",
        "normalized": "",
        "package": "QuickCheck",
        "partial": "Shrink",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Modifiers.html#t:ShrinkState",
      "description": {
        "fct-module": "Test.QuickCheck.Modifiers",
        "fct-package": "QuickCheck",
        "fct-signature": "class",
        "fct-source": "src/Test-QuickCheck-Modifiers.html#ShrinkState",
        "fct-type": "class",
        "title": "ShrinkState"
      },
      "index": {
        "description": "",
        "hierarchy": "Test QuickCheck Modifiers",
        "module": "Test.QuickCheck.Modifiers",
        "name": "ShrinkState",
        "normalized": "",
        "package": "QuickCheck",
        "partial": "Shrink State",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Modifiers.html#t:Shrinking",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eShrinking _ x\u003c/code\u003e: allows for maintaining a state during shrinking.\n\u003c/p\u003e",
        "fct-module": "Test.QuickCheck.Modifiers",
        "fct-package": "QuickCheck",
        "fct-signature": "data",
        "fct-source": "src/Test-QuickCheck-Modifiers.html#Shrinking",
        "fct-type": "data",
        "title": "Shrinking"
      },
      "index": {
        "description": "Shrinking allows for maintaining state during shrinking",
        "hierarchy": "Test QuickCheck Modifiers",
        "module": "Test.QuickCheck.Modifiers",
        "name": "Shrinking",
        "normalized": "",
        "package": "QuickCheck",
        "partial": "Shrinking",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Modifiers.html#t:Smart",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eSmart _ x\u003c/code\u003e: tries a different order when shrinking.\n\u003c/p\u003e",
        "fct-module": "Test.QuickCheck.Modifiers",
        "fct-package": "QuickCheck",
        "fct-signature": "data",
        "fct-source": "src/Test-QuickCheck-Modifiers.html#Smart",
        "fct-type": "data",
        "title": "Smart"
      },
      "index": {
        "description": "Smart tries different order when shrinking",
        "hierarchy": "Test QuickCheck Modifiers",
        "module": "Test.QuickCheck.Modifiers",
        "name": "Smart",
        "normalized": "",
        "package": "QuickCheck",
        "partial": "Smart",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Modifiers.html#v:Blind",
      "description": {
        "fct-module": "Test.QuickCheck.Modifiers",
        "fct-package": "QuickCheck",
        "fct-signature": "Blind a",
        "fct-source": "src/Test-QuickCheck-Modifiers.html#Blind",
        "fct-type": "function",
        "title": "Blind"
      },
      "index": {
        "description": "",
        "hierarchy": "Test QuickCheck Modifiers",
        "module": "Test.QuickCheck.Modifiers",
        "name": "Blind",
        "normalized": "",
        "package": "QuickCheck",
        "partial": "Blind",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Modifiers.html#v:Fixed",
      "description": {
        "fct-module": "Test.QuickCheck.Modifiers",
        "fct-package": "QuickCheck",
        "fct-signature": "Fixed a",
        "fct-source": "src/Test-QuickCheck-Modifiers.html#Fixed",
        "fct-type": "function",
        "title": "Fixed"
      },
      "index": {
        "description": "",
        "hierarchy": "Test QuickCheck Modifiers",
        "module": "Test.QuickCheck.Modifiers",
        "name": "Fixed",
        "normalized": "",
        "package": "QuickCheck",
        "partial": "Fixed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Modifiers.html#v:NonEmpty",
      "description": {
        "fct-module": "Test.QuickCheck.Modifiers",
        "fct-package": "QuickCheck",
        "fct-signature": "NonEmpty",
        "fct-source": "src/Test-QuickCheck-Modifiers.html#NonEmptyList",
        "fct-type": "function",
        "title": "NonEmpty"
      },
      "index": {
        "description": "",
        "hierarchy": "Test QuickCheck Modifiers",
        "module": "Test.QuickCheck.Modifiers",
        "name": "NonEmpty",
        "normalized": "",
        "package": "QuickCheck",
        "partial": "Non Empty",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Modifiers.html#v:NonNegative",
      "description": {
        "fct-module": "Test.QuickCheck.Modifiers",
        "fct-package": "QuickCheck",
        "fct-signature": "NonNegative",
        "fct-source": "src/Test-QuickCheck-Modifiers.html#NonNegative",
        "fct-type": "function",
        "title": "NonNegative"
      },
      "index": {
        "description": "",
        "hierarchy": "Test QuickCheck Modifiers",
        "module": "Test.QuickCheck.Modifiers",
        "name": "NonNegative",
        "normalized": "",
        "package": "QuickCheck",
        "partial": "Non Negative",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Modifiers.html#v:NonZero",
      "description": {
        "fct-module": "Test.QuickCheck.Modifiers",
        "fct-package": "QuickCheck",
        "fct-signature": "NonZero",
        "fct-source": "src/Test-QuickCheck-Modifiers.html#NonZero",
        "fct-type": "function",
        "title": "NonZero"
      },
      "index": {
        "description": "",
        "hierarchy": "Test QuickCheck Modifiers",
        "module": "Test.QuickCheck.Modifiers",
        "name": "NonZero",
        "normalized": "",
        "package": "QuickCheck",
        "partial": "Non Zero",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Modifiers.html#v:Ordered",
      "description": {
        "fct-module": "Test.QuickCheck.Modifiers",
        "fct-package": "QuickCheck",
        "fct-signature": "Ordered",
        "fct-source": "src/Test-QuickCheck-Modifiers.html#OrderedList",
        "fct-type": "function",
        "title": "Ordered"
      },
      "index": {
        "description": "",
        "hierarchy": "Test QuickCheck Modifiers",
        "module": "Test.QuickCheck.Modifiers",
        "name": "Ordered",
        "normalized": "",
        "package": "QuickCheck",
        "partial": "Ordered",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Modifiers.html#v:Positive",
      "description": {
        "fct-module": "Test.QuickCheck.Modifiers",
        "fct-package": "QuickCheck",
        "fct-signature": "Positive",
        "fct-source": "src/Test-QuickCheck-Modifiers.html#Positive",
        "fct-type": "function",
        "title": "Positive"
      },
      "index": {
        "description": "",
        "hierarchy": "Test QuickCheck Modifiers",
        "module": "Test.QuickCheck.Modifiers",
        "name": "Positive",
        "normalized": "",
        "package": "QuickCheck",
        "partial": "Positive",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Modifiers.html#v:Shrink2",
      "description": {
        "fct-module": "Test.QuickCheck.Modifiers",
        "fct-package": "QuickCheck",
        "fct-signature": "Shrink2 a",
        "fct-source": "src/Test-QuickCheck-Modifiers.html#Shrink2",
        "fct-type": "function",
        "title": "Shrink2"
      },
      "index": {
        "description": "",
        "hierarchy": "Test QuickCheck Modifiers",
        "module": "Test.QuickCheck.Modifiers",
        "name": "Shrink2",
        "normalized": "",
        "package": "QuickCheck",
        "partial": "Shrink",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Modifiers.html#v:Shrinking",
      "description": {
        "fct-module": "Test.QuickCheck.Modifiers",
        "fct-package": "QuickCheck",
        "fct-signature": "Shrinking s a",
        "fct-source": "src/Test-QuickCheck-Modifiers.html#Shrinking",
        "fct-type": "function",
        "title": "Shrinking"
      },
      "index": {
        "description": "",
        "hierarchy": "Test QuickCheck Modifiers",
        "module": "Test.QuickCheck.Modifiers",
        "name": "Shrinking",
        "normalized": "",
        "package": "QuickCheck",
        "partial": "Shrinking",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Modifiers.html#v:Smart",
      "description": {
        "fct-module": "Test.QuickCheck.Modifiers",
        "fct-package": "QuickCheck",
        "fct-signature": "Smart Int a",
        "fct-source": "src/Test-QuickCheck-Modifiers.html#Smart",
        "fct-type": "function",
        "title": "Smart"
      },
      "index": {
        "description": "",
        "hierarchy": "Test QuickCheck Modifiers",
        "module": "Test.QuickCheck.Modifiers",
        "name": "Smart",
        "normalized": "",
        "package": "QuickCheck",
        "partial": "Smart",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Modifiers.html#v:getNonEmpty",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Test.QuickCheck.Modifiers",
        "fct-package": "QuickCheck",
        "fct-signature": "[a]",
        "fct-source": "src/Test-QuickCheck-Modifiers.html#NonEmptyList",
        "fct-type": "function",
        "title": "getNonEmpty"
      },
      "index": {
        "description": "",
        "hierarchy": "Test QuickCheck Modifiers",
        "module": "Test.QuickCheck.Modifiers",
        "name": "getNonEmpty",
        "normalized": "[a]",
        "package": "QuickCheck",
        "partial": "Non Empty",
        "signature": "[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Modifiers.html#v:getNonNegative",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Test.QuickCheck.Modifiers",
        "fct-package": "QuickCheck",
        "fct-signature": "a",
        "fct-source": "src/Test-QuickCheck-Modifiers.html#NonNegative",
        "fct-type": "function",
        "title": "getNonNegative"
      },
      "index": {
        "description": "",
        "hierarchy": "Test QuickCheck Modifiers",
        "module": "Test.QuickCheck.Modifiers",
        "name": "getNonNegative",
        "normalized": "",
        "package": "QuickCheck",
        "partial": "Non Negative",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Modifiers.html#v:getNonZero",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Test.QuickCheck.Modifiers",
        "fct-package": "QuickCheck",
        "fct-signature": "a",
        "fct-source": "src/Test-QuickCheck-Modifiers.html#NonZero",
        "fct-type": "function",
        "title": "getNonZero"
      },
      "index": {
        "description": "",
        "hierarchy": "Test QuickCheck Modifiers",
        "module": "Test.QuickCheck.Modifiers",
        "name": "getNonZero",
        "normalized": "",
        "package": "QuickCheck",
        "partial": "Non Zero",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Modifiers.html#v:getOrdered",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Test.QuickCheck.Modifiers",
        "fct-package": "QuickCheck",
        "fct-signature": "[a]",
        "fct-source": "src/Test-QuickCheck-Modifiers.html#OrderedList",
        "fct-type": "function",
        "title": "getOrdered"
      },
      "index": {
        "description": "",
        "hierarchy": "Test QuickCheck Modifiers",
        "module": "Test.QuickCheck.Modifiers",
        "name": "getOrdered",
        "normalized": "[a]",
        "package": "QuickCheck",
        "partial": "Ordered",
        "signature": "[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Modifiers.html#v:getPositive",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Test.QuickCheck.Modifiers",
        "fct-package": "QuickCheck",
        "fct-signature": "a",
        "fct-source": "src/Test-QuickCheck-Modifiers.html#Positive",
        "fct-type": "function",
        "title": "getPositive"
      },
      "index": {
        "description": "",
        "hierarchy": "Test QuickCheck Modifiers",
        "module": "Test.QuickCheck.Modifiers",
        "name": "getPositive",
        "normalized": "",
        "package": "QuickCheck",
        "partial": "Positive",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Modifiers.html#v:shrinkInit",
      "description": {
        "fct-module": "Test.QuickCheck.Modifiers",
        "fct-package": "QuickCheck",
        "fct-signature": "a -\u003e s",
        "fct-source": "src/Test-QuickCheck-Modifiers.html#shrinkInit",
        "fct-type": "method",
        "title": "shrinkInit"
      },
      "index": {
        "description": "",
        "hierarchy": "Test QuickCheck Modifiers",
        "module": "Test.QuickCheck.Modifiers",
        "name": "shrinkInit",
        "normalized": "a-\u003eb",
        "package": "QuickCheck",
        "partial": "Init",
        "signature": "a-\u003es"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Modifiers.html#v:shrinkState",
      "description": {
        "fct-module": "Test.QuickCheck.Modifiers",
        "fct-package": "QuickCheck",
        "fct-signature": "a -\u003e s -\u003e [(a, s)]",
        "fct-source": "src/Test-QuickCheck-Modifiers.html#shrinkState",
        "fct-type": "method",
        "title": "shrinkState"
      },
      "index": {
        "description": "",
        "hierarchy": "Test QuickCheck Modifiers",
        "module": "Test.QuickCheck.Modifiers",
        "name": "shrinkState",
        "normalized": "a-\u003eb-\u003e[(a,b)]",
        "package": "QuickCheck",
        "partial": "State",
        "signature": "a-\u003es-\u003e[(a,s)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Monadic.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAllows testing of monadic values.\n See the paper \"Testing Monadic Code with QuickCheck\":\n \u003ca\u003ehttp://www.cse.chalmers.se/~rjmh/Papers/QuickCheckST.ps\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Test.QuickCheck.Monadic",
        "fct-package": "QuickCheck",
        "fct-signature": "module",
        "fct-source": "src/Test-QuickCheck-Monadic.html",
        "fct-type": "module",
        "title": "Monadic"
      },
      "index": {
        "description": "Allows testing of monadic values See the paper Testing Monadic Code with QuickCheck http www.cse.chalmers.se rjmh Papers QuickCheckST.ps",
        "hierarchy": "Test QuickCheck Monadic",
        "module": "Test.QuickCheck.Monadic",
        "name": "Monadic",
        "normalized": "",
        "package": "QuickCheck",
        "partial": "Monadic",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Monadic.html#t:PropertyM",
      "description": {
        "fct-module": "Test.QuickCheck.Monadic",
        "fct-package": "QuickCheck",
        "fct-signature": "newtype",
        "fct-source": "src/Test-QuickCheck-Monadic.html#PropertyM",
        "fct-type": "newtype",
        "title": "PropertyM"
      },
      "index": {
        "description": "",
        "hierarchy": "Test QuickCheck Monadic",
        "module": "Test.QuickCheck.Monadic",
        "name": "PropertyM",
        "normalized": "",
        "package": "QuickCheck",
        "partial": "Property",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Monadic.html#v:MkPropertyM",
      "description": {
        "fct-module": "Test.QuickCheck.Monadic",
        "fct-package": "QuickCheck",
        "fct-signature": "MkPropertyM",
        "fct-source": "src/Test-QuickCheck-Monadic.html#PropertyM",
        "fct-type": "function",
        "title": "MkPropertyM"
      },
      "index": {
        "description": "",
        "hierarchy": "Test QuickCheck Monadic",
        "module": "Test.QuickCheck.Monadic",
        "name": "MkPropertyM",
        "normalized": "",
        "package": "QuickCheck",
        "partial": "Mk Property",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Monadic.html#v:assert",
      "description": {
        "fct-module": "Test.QuickCheck.Monadic",
        "fct-package": "QuickCheck",
        "fct-signature": "Bool -\u003e PropertyM m ()",
        "fct-source": "src/Test-QuickCheck-Monadic.html#assert",
        "fct-type": "function",
        "title": "assert"
      },
      "index": {
        "description": "",
        "hierarchy": "Test QuickCheck Monadic",
        "module": "Test.QuickCheck.Monadic",
        "name": "assert",
        "normalized": "Bool-\u003ePropertyM a()",
        "package": "QuickCheck",
        "partial": "",
        "signature": "Bool-\u003ePropertyM m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Monadic.html#v:forAllM",
      "description": {
        "fct-module": "Test.QuickCheck.Monadic",
        "fct-package": "QuickCheck",
        "fct-signature": "Gen a -\u003e (a -\u003e PropertyM m b) -\u003e PropertyM m b",
        "fct-source": "src/Test-QuickCheck-Monadic.html#forAllM",
        "fct-type": "function",
        "title": "forAllM"
      },
      "index": {
        "description": "",
        "hierarchy": "Test QuickCheck Monadic",
        "module": "Test.QuickCheck.Monadic",
        "name": "forAllM",
        "normalized": "Gen a-\u003e(a-\u003ePropertyM b c)-\u003ePropertyM b c",
        "package": "QuickCheck",
        "partial": "All",
        "signature": "Gen a-\u003e(a-\u003ePropertyM m b)-\u003ePropertyM m b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Monadic.html#v:monadic",
      "description": {
        "fct-module": "Test.QuickCheck.Monadic",
        "fct-package": "QuickCheck",
        "fct-signature": "(m Property -\u003e Property) -\u003e PropertyM m a -\u003e Property",
        "fct-source": "src/Test-QuickCheck-Monadic.html#monadic",
        "fct-type": "function",
        "title": "monadic"
      },
      "index": {
        "description": "",
        "hierarchy": "Test QuickCheck Monadic",
        "module": "Test.QuickCheck.Monadic",
        "name": "monadic",
        "normalized": "(a Property-\u003eProperty)-\u003ePropertyM a b-\u003eProperty",
        "package": "QuickCheck",
        "partial": "",
        "signature": "(m Property-\u003eProperty)-\u003ePropertyM m a-\u003eProperty"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Monadic.html#v:monadic-39-",
      "description": {
        "fct-module": "Test.QuickCheck.Monadic",
        "fct-package": "QuickCheck",
        "fct-signature": "PropertyM m a -\u003e Gen (m Property)",
        "fct-source": "src/Test-QuickCheck-Monadic.html#monadic%27",
        "fct-type": "function",
        "title": "monadic'"
      },
      "index": {
        "description": "",
        "hierarchy": "Test QuickCheck Monadic",
        "module": "Test.QuickCheck.Monadic",
        "name": "monadic'",
        "normalized": "PropertyM a b-\u003eGen(a Property)",
        "package": "QuickCheck",
        "partial": "",
        "signature": "PropertyM m a-\u003eGen(m Property)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Monadic.html#v:monadicIO",
      "description": {
        "fct-module": "Test.QuickCheck.Monadic",
        "fct-package": "QuickCheck",
        "fct-signature": "PropertyM IO a -\u003e Property",
        "fct-source": "src/Test-QuickCheck-Monadic.html#monadicIO",
        "fct-type": "function",
        "title": "monadicIO"
      },
      "index": {
        "description": "",
        "hierarchy": "Test QuickCheck Monadic",
        "module": "Test.QuickCheck.Monadic",
        "name": "monadicIO",
        "normalized": "PropertyM IO a-\u003eProperty",
        "package": "QuickCheck",
        "partial": "IO",
        "signature": "PropertyM IO a-\u003eProperty"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Monadic.html#v:monadicST",
      "description": {
        "fct-module": "Test.QuickCheck.Monadic",
        "fct-package": "QuickCheck",
        "fct-signature": "(forall s.  PropertyM (ST s) a) -\u003e Property",
        "fct-source": "src/Test-QuickCheck-Monadic.html#monadicST",
        "fct-type": "function",
        "title": "monadicST"
      },
      "index": {
        "description": "",
        "hierarchy": "Test QuickCheck Monadic",
        "module": "Test.QuickCheck.Monadic",
        "name": "monadicST",
        "normalized": "(a b PropertyM(ST c)d)-\u003eProperty",
        "package": "QuickCheck",
        "partial": "ST",
        "signature": "(forall s. PropertyM(ST s)a)-\u003eProperty"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Monadic.html#v:monitor",
      "description": {
        "fct-module": "Test.QuickCheck.Monadic",
        "fct-package": "QuickCheck",
        "fct-signature": "(Property -\u003e Property) -\u003e PropertyM m ()",
        "fct-source": "src/Test-QuickCheck-Monadic.html#monitor",
        "fct-type": "function",
        "title": "monitor"
      },
      "index": {
        "description": "",
        "hierarchy": "Test QuickCheck Monadic",
        "module": "Test.QuickCheck.Monadic",
        "name": "monitor",
        "normalized": "(Property-\u003eProperty)-\u003ePropertyM a()",
        "package": "QuickCheck",
        "partial": "",
        "signature": "(Property-\u003eProperty)-\u003ePropertyM m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Monadic.html#v:pick",
      "description": {
        "fct-module": "Test.QuickCheck.Monadic",
        "fct-package": "QuickCheck",
        "fct-signature": "Gen a -\u003e PropertyM m a",
        "fct-source": "src/Test-QuickCheck-Monadic.html#pick",
        "fct-type": "function",
        "title": "pick"
      },
      "index": {
        "description": "",
        "hierarchy": "Test QuickCheck Monadic",
        "module": "Test.QuickCheck.Monadic",
        "name": "pick",
        "normalized": "Gen a-\u003ePropertyM b a",
        "package": "QuickCheck",
        "partial": "",
        "signature": "Gen a-\u003ePropertyM m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Monadic.html#v:pre",
      "description": {
        "fct-module": "Test.QuickCheck.Monadic",
        "fct-package": "QuickCheck",
        "fct-signature": "Bool -\u003e PropertyM m ()",
        "fct-source": "src/Test-QuickCheck-Monadic.html#pre",
        "fct-type": "function",
        "title": "pre"
      },
      "index": {
        "description": "",
        "hierarchy": "Test QuickCheck Monadic",
        "module": "Test.QuickCheck.Monadic",
        "name": "pre",
        "normalized": "Bool-\u003ePropertyM a()",
        "package": "QuickCheck",
        "partial": "",
        "signature": "Bool-\u003ePropertyM m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Monadic.html#v:run",
      "description": {
        "fct-module": "Test.QuickCheck.Monadic",
        "fct-package": "QuickCheck",
        "fct-signature": "m a -\u003e PropertyM m a",
        "fct-source": "src/Test-QuickCheck-Monadic.html#run",
        "fct-type": "function",
        "title": "run"
      },
      "index": {
        "description": "",
        "hierarchy": "Test QuickCheck Monadic",
        "module": "Test.QuickCheck.Monadic",
        "name": "run",
        "normalized": "a b-\u003ePropertyM a b",
        "package": "QuickCheck",
        "partial": "",
        "signature": "m a-\u003ePropertyM m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Monadic.html#v:runSTGen",
      "description": {
        "fct-module": "Test.QuickCheck.Monadic",
        "fct-package": "QuickCheck",
        "fct-signature": "(forall s.  Gen (ST s a)) -\u003e Gen a",
        "fct-source": "src/Test-QuickCheck-Monadic.html#runSTGen",
        "fct-type": "function",
        "title": "runSTGen"
      },
      "index": {
        "description": "",
        "hierarchy": "Test QuickCheck Monadic",
        "module": "Test.QuickCheck.Monadic",
        "name": "runSTGen",
        "normalized": "(a b Gen(ST c d))-\u003eGen d",
        "package": "QuickCheck",
        "partial": "STGen",
        "signature": "(forall s. Gen(ST s a))-\u003eGen a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Monadic.html#v:stop",
      "description": {
        "fct-module": "Test.QuickCheck.Monadic",
        "fct-package": "QuickCheck",
        "fct-signature": "prop -\u003e PropertyM m a",
        "fct-source": "src/Test-QuickCheck-Monadic.html#stop",
        "fct-type": "function",
        "title": "stop"
      },
      "index": {
        "description": "",
        "hierarchy": "Test QuickCheck Monadic",
        "module": "Test.QuickCheck.Monadic",
        "name": "stop",
        "normalized": "a-\u003ePropertyM b c",
        "package": "QuickCheck",
        "partial": "",
        "signature": "prop-\u003ePropertyM m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Monadic.html#v:unPropertyM",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Test.QuickCheck.Monadic",
        "fct-package": "QuickCheck",
        "fct-signature": "(a -\u003e Gen (m Property)) -\u003e Gen (m Property)",
        "fct-source": "src/Test-QuickCheck-Monadic.html#PropertyM",
        "fct-type": "function",
        "title": "unPropertyM"
      },
      "index": {
        "description": "",
        "hierarchy": "Test QuickCheck Monadic",
        "module": "Test.QuickCheck.Monadic",
        "name": "unPropertyM",
        "normalized": "(a-\u003eGen(b Property))-\u003eGen(b Property)",
        "package": "QuickCheck",
        "partial": "Property",
        "signature": "(a-\u003eGen(m Property))-\u003eGen(m Property)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Monadic.html#v:wp",
      "description": {
        "fct-module": "Test.QuickCheck.Monadic",
        "fct-package": "QuickCheck",
        "fct-signature": "m a -\u003e (a -\u003e PropertyM m b) -\u003e PropertyM m b",
        "fct-source": "src/Test-QuickCheck-Monadic.html#wp",
        "fct-type": "function",
        "title": "wp"
      },
      "index": {
        "description": "",
        "hierarchy": "Test QuickCheck Monadic",
        "module": "Test.QuickCheck.Monadic",
        "name": "wp",
        "normalized": "a b-\u003e(b-\u003ePropertyM a c)-\u003ePropertyM a c",
        "package": "QuickCheck",
        "partial": "",
        "signature": "m a-\u003e(a-\u003ePropertyM m b)-\u003ePropertyM m b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Poly.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTypes to help with testing polymorphic properties.\n\u003c/p\u003e\u003cp\u003eTypes \u003ccode\u003e\u003ca\u003eA\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eB\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eC\u003c/a\u003e\u003c/code\u003e are \u003ccode\u003enewtype\u003c/code\u003e wrappers around \u003ccode\u003e\u003ca\u003eInteger\u003c/a\u003e\u003c/code\u003e that\n implement \u003ccode\u003e\u003ca\u003eEq\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eArbitrary\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eCoArbitrary\u003c/a\u003e\u003c/code\u003e. Types\n \u003ccode\u003e\u003ca\u003eOrdA\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eOrdB\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eOrdC\u003c/a\u003e\u003c/code\u003e also implement \u003ccode\u003e\u003ca\u003eOrd\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eNum\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSee also \u003ca\u003eTest.QuickCheck.All\u003c/a\u003e for an experimental way of testing\n polymorphic properties.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Test.QuickCheck.Poly",
        "fct-package": "QuickCheck",
        "fct-signature": "module",
        "fct-source": "src/Test-QuickCheck-Poly.html",
        "fct-type": "module",
        "title": "Poly"
      },
      "index": {
        "description": "Types to help with testing polymorphic properties Types and are newtype wrappers around Integer that implement Eq Show Arbitrary and CoArbitrary Types OrdA OrdB and OrdC also implement Ord and Num See also Test.QuickCheck.All for an experimental way of testing polymorphic properties",
        "hierarchy": "Test QuickCheck Poly",
        "module": "Test.QuickCheck.Poly",
        "name": "Poly",
        "normalized": "",
        "package": "QuickCheck",
        "partial": "Poly",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Poly.html#t:A",
      "description": {
        "fct-module": "Test.QuickCheck.Poly",
        "fct-package": "QuickCheck",
        "fct-signature": "newtype",
        "fct-source": "src/Test-QuickCheck-Poly.html#A",
        "fct-type": "newtype",
        "title": "A"
      },
      "index": {
        "description": "",
        "hierarchy": "Test QuickCheck Poly",
        "module": "Test.QuickCheck.Poly",
        "name": "A",
        "normalized": "",
        "package": "QuickCheck",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Poly.html#t:B",
      "description": {
        "fct-module": "Test.QuickCheck.Poly",
        "fct-package": "QuickCheck",
        "fct-signature": "newtype",
        "fct-source": "src/Test-QuickCheck-Poly.html#B",
        "fct-type": "newtype",
        "title": "B"
      },
      "index": {
        "description": "",
        "hierarchy": "Test QuickCheck Poly",
        "module": "Test.QuickCheck.Poly",
        "name": "B",
        "normalized": "",
        "package": "QuickCheck",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Poly.html#t:C",
      "description": {
        "fct-module": "Test.QuickCheck.Poly",
        "fct-package": "QuickCheck",
        "fct-signature": "newtype",
        "fct-source": "src/Test-QuickCheck-Poly.html#C",
        "fct-type": "newtype",
        "title": "C"
      },
      "index": {
        "description": "",
        "hierarchy": "Test QuickCheck Poly",
        "module": "Test.QuickCheck.Poly",
        "name": "C",
        "normalized": "",
        "package": "QuickCheck",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Poly.html#t:OrdA",
      "description": {
        "fct-module": "Test.QuickCheck.Poly",
        "fct-package": "QuickCheck",
        "fct-signature": "newtype",
        "fct-source": "src/Test-QuickCheck-Poly.html#OrdA",
        "fct-type": "newtype",
        "title": "OrdA"
      },
      "index": {
        "description": "",
        "hierarchy": "Test QuickCheck Poly",
        "module": "Test.QuickCheck.Poly",
        "name": "OrdA",
        "normalized": "",
        "package": "QuickCheck",
        "partial": "Ord",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Poly.html#t:OrdB",
      "description": {
        "fct-module": "Test.QuickCheck.Poly",
        "fct-package": "QuickCheck",
        "fct-signature": "newtype",
        "fct-source": "src/Test-QuickCheck-Poly.html#OrdB",
        "fct-type": "newtype",
        "title": "OrdB"
      },
      "index": {
        "description": "",
        "hierarchy": "Test QuickCheck Poly",
        "module": "Test.QuickCheck.Poly",
        "name": "OrdB",
        "normalized": "",
        "package": "QuickCheck",
        "partial": "Ord",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Poly.html#t:OrdC",
      "description": {
        "fct-module": "Test.QuickCheck.Poly",
        "fct-package": "QuickCheck",
        "fct-signature": "newtype",
        "fct-source": "src/Test-QuickCheck-Poly.html#OrdC",
        "fct-type": "newtype",
        "title": "OrdC"
      },
      "index": {
        "description": "",
        "hierarchy": "Test QuickCheck Poly",
        "module": "Test.QuickCheck.Poly",
        "name": "OrdC",
        "normalized": "",
        "package": "QuickCheck",
        "partial": "Ord",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Poly.html#v:A",
      "description": {
        "fct-module": "Test.QuickCheck.Poly",
        "fct-package": "QuickCheck",
        "fct-signature": "A",
        "fct-source": "src/Test-QuickCheck-Poly.html#A",
        "fct-type": "function",
        "title": "A"
      },
      "index": {
        "description": "",
        "hierarchy": "Test QuickCheck Poly",
        "module": "Test.QuickCheck.Poly",
        "name": "A",
        "normalized": "",
        "package": "QuickCheck",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Poly.html#v:B",
      "description": {
        "fct-module": "Test.QuickCheck.Poly",
        "fct-package": "QuickCheck",
        "fct-signature": "B",
        "fct-source": "src/Test-QuickCheck-Poly.html#B",
        "fct-type": "function",
        "title": "B"
      },
      "index": {
        "description": "",
        "hierarchy": "Test QuickCheck Poly",
        "module": "Test.QuickCheck.Poly",
        "name": "B",
        "normalized": "",
        "package": "QuickCheck",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Poly.html#v:C",
      "description": {
        "fct-module": "Test.QuickCheck.Poly",
        "fct-package": "QuickCheck",
        "fct-signature": "C",
        "fct-source": "src/Test-QuickCheck-Poly.html#C",
        "fct-type": "function",
        "title": "C"
      },
      "index": {
        "description": "",
        "hierarchy": "Test QuickCheck Poly",
        "module": "Test.QuickCheck.Poly",
        "name": "C",
        "normalized": "",
        "package": "QuickCheck",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Poly.html#v:OrdA",
      "description": {
        "fct-module": "Test.QuickCheck.Poly",
        "fct-package": "QuickCheck",
        "fct-signature": "OrdA",
        "fct-source": "src/Test-QuickCheck-Poly.html#OrdA",
        "fct-type": "function",
        "title": "OrdA"
      },
      "index": {
        "description": "",
        "hierarchy": "Test QuickCheck Poly",
        "module": "Test.QuickCheck.Poly",
        "name": "OrdA",
        "normalized": "",
        "package": "QuickCheck",
        "partial": "Ord",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Poly.html#v:OrdB",
      "description": {
        "fct-module": "Test.QuickCheck.Poly",
        "fct-package": "QuickCheck",
        "fct-signature": "OrdB",
        "fct-source": "src/Test-QuickCheck-Poly.html#OrdB",
        "fct-type": "function",
        "title": "OrdB"
      },
      "index": {
        "description": "",
        "hierarchy": "Test QuickCheck Poly",
        "module": "Test.QuickCheck.Poly",
        "name": "OrdB",
        "normalized": "",
        "package": "QuickCheck",
        "partial": "Ord",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Poly.html#v:OrdC",
      "description": {
        "fct-module": "Test.QuickCheck.Poly",
        "fct-package": "QuickCheck",
        "fct-signature": "OrdC",
        "fct-source": "src/Test-QuickCheck-Poly.html#OrdC",
        "fct-type": "function",
        "title": "OrdC"
      },
      "index": {
        "description": "",
        "hierarchy": "Test QuickCheck Poly",
        "module": "Test.QuickCheck.Poly",
        "name": "OrdC",
        "normalized": "",
        "package": "QuickCheck",
        "partial": "Ord",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Poly.html#v:unA",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Test.QuickCheck.Poly",
        "fct-package": "QuickCheck",
        "fct-signature": "Integer",
        "fct-source": "src/Test-QuickCheck-Poly.html#A",
        "fct-type": "function",
        "title": "unA"
      },
      "index": {
        "description": "",
        "hierarchy": "Test QuickCheck Poly",
        "module": "Test.QuickCheck.Poly",
        "name": "unA",
        "normalized": "",
        "package": "QuickCheck",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Poly.html#v:unB",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Test.QuickCheck.Poly",
        "fct-package": "QuickCheck",
        "fct-signature": "Integer",
        "fct-source": "src/Test-QuickCheck-Poly.html#B",
        "fct-type": "function",
        "title": "unB"
      },
      "index": {
        "description": "",
        "hierarchy": "Test QuickCheck Poly",
        "module": "Test.QuickCheck.Poly",
        "name": "unB",
        "normalized": "",
        "package": "QuickCheck",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Poly.html#v:unC",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Test.QuickCheck.Poly",
        "fct-package": "QuickCheck",
        "fct-signature": "Integer",
        "fct-source": "src/Test-QuickCheck-Poly.html#C",
        "fct-type": "function",
        "title": "unC"
      },
      "index": {
        "description": "",
        "hierarchy": "Test QuickCheck Poly",
        "module": "Test.QuickCheck.Poly",
        "name": "unC",
        "normalized": "",
        "package": "QuickCheck",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Poly.html#v:unOrdA",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Test.QuickCheck.Poly",
        "fct-package": "QuickCheck",
        "fct-signature": "Integer",
        "fct-source": "src/Test-QuickCheck-Poly.html#OrdA",
        "fct-type": "function",
        "title": "unOrdA"
      },
      "index": {
        "description": "",
        "hierarchy": "Test QuickCheck Poly",
        "module": "Test.QuickCheck.Poly",
        "name": "unOrdA",
        "normalized": "",
        "package": "QuickCheck",
        "partial": "Ord",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Poly.html#v:unOrdB",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Test.QuickCheck.Poly",
        "fct-package": "QuickCheck",
        "fct-signature": "Integer",
        "fct-source": "src/Test-QuickCheck-Poly.html#OrdB",
        "fct-type": "function",
        "title": "unOrdB"
      },
      "index": {
        "description": "",
        "hierarchy": "Test QuickCheck Poly",
        "module": "Test.QuickCheck.Poly",
        "name": "unOrdB",
        "normalized": "",
        "package": "QuickCheck",
        "partial": "Ord",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Poly.html#v:unOrdC",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Test.QuickCheck.Poly",
        "fct-package": "QuickCheck",
        "fct-signature": "Integer",
        "fct-source": "src/Test-QuickCheck-Poly.html#OrdC",
        "fct-type": "function",
        "title": "unOrdC"
      },
      "index": {
        "description": "",
        "hierarchy": "Test QuickCheck Poly",
        "module": "Test.QuickCheck.Poly",
        "name": "unOrdC",
        "normalized": "",
        "package": "QuickCheck",
        "partial": "Ord",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Property.html#",
      "description": {
        "fct-module": "Test.QuickCheck.Property",
        "fct-package": "QuickCheck",
        "fct-signature": "module",
        "fct-source": "src/Test-QuickCheck-Property.html",
        "fct-type": "module",
        "title": "Property"
      },
      "index": {
        "description": "",
        "hierarchy": "Test QuickCheck Property",
        "module": "Test.QuickCheck.Property",
        "name": "Property",
        "normalized": "",
        "package": "QuickCheck",
        "partial": "Property",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Property.html#t:Callback",
      "description": {
        "fct-descr": "\u003cp\u003eDifferent kinds of callbacks\n\u003c/p\u003e",
        "fct-module": "Test.QuickCheck.Property",
        "fct-package": "QuickCheck",
        "fct-signature": "data",
        "fct-source": "src/Test-QuickCheck-Property.html#Callback",
        "fct-type": "data",
        "title": "Callback"
      },
      "index": {
        "description": "Different kinds of callbacks",
        "hierarchy": "Test QuickCheck Property",
        "module": "Test.QuickCheck.Property",
        "name": "Callback",
        "normalized": "",
        "package": "QuickCheck",
        "partial": "Callback",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Property.html#t:CallbackKind",
      "description": {
        "fct-module": "Test.QuickCheck.Property",
        "fct-package": "QuickCheck",
        "fct-signature": "data",
        "fct-source": "src/Test-QuickCheck-Property.html#CallbackKind",
        "fct-type": "data",
        "title": "CallbackKind"
      },
      "index": {
        "description": "",
        "hierarchy": "Test QuickCheck Property",
        "module": "Test.QuickCheck.Property",
        "name": "CallbackKind",
        "normalized": "",
        "package": "QuickCheck",
        "partial": "Callback Kind",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Property.html#t:Prop",
      "description": {
        "fct-module": "Test.QuickCheck.Property",
        "fct-package": "QuickCheck",
        "fct-signature": "newtype",
        "fct-source": "src/Test-QuickCheck-Property.html#Prop",
        "fct-type": "newtype",
        "title": "Prop"
      },
      "index": {
        "description": "",
        "hierarchy": "Test QuickCheck Property",
        "module": "Test.QuickCheck.Property",
        "name": "Prop",
        "normalized": "",
        "package": "QuickCheck",
        "partial": "Prop",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Property.html#t:Property",
      "description": {
        "fct-module": "Test.QuickCheck.Property",
        "fct-package": "QuickCheck",
        "fct-signature": "type",
        "fct-source": "src/Test-QuickCheck-Property.html#Property",
        "fct-type": "type",
        "title": "Property"
      },
      "index": {
        "description": "",
        "hierarchy": "Test QuickCheck Property",
        "module": "Test.QuickCheck.Property",
        "name": "Property",
        "normalized": "",
        "package": "QuickCheck",
        "partial": "Property",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Property.html#t:Result",
      "description": {
        "fct-descr": "\u003cp\u003eThe result of a single test.\n\u003c/p\u003e",
        "fct-module": "Test.QuickCheck.Property",
        "fct-package": "QuickCheck",
        "fct-signature": "data",
        "fct-source": "src/Test-QuickCheck-Property.html#Result",
        "fct-type": "data",
        "title": "Result"
      },
      "index": {
        "description": "The result of single test",
        "hierarchy": "Test QuickCheck Property",
        "module": "Test.QuickCheck.Property",
        "name": "Result",
        "normalized": "",
        "package": "QuickCheck",
        "partial": "Result",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Property.html#t:Rose",
      "description": {
        "fct-module": "Test.QuickCheck.Property",
        "fct-package": "QuickCheck",
        "fct-signature": "data",
        "fct-source": "src/Test-QuickCheck-Property.html#Rose",
        "fct-type": "data",
        "title": "Rose"
      },
      "index": {
        "description": "",
        "hierarchy": "Test QuickCheck Property",
        "module": "Test.QuickCheck.Property",
        "name": "Rose",
        "normalized": "",
        "package": "QuickCheck",
        "partial": "Rose",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Property.html#t:Testable",
      "description": {
        "fct-descr": "\u003cp\u003eThe class of things which can be tested, i.e. turned into a property.\n\u003c/p\u003e",
        "fct-module": "Test.QuickCheck.Property",
        "fct-package": "QuickCheck",
        "fct-signature": "class",
        "fct-source": "src/Test-QuickCheck-Property.html#Testable",
        "fct-type": "class",
        "title": "Testable"
      },
      "index": {
        "description": "The class of things which can be tested i.e turned into property",
        "hierarchy": "Test QuickCheck Property",
        "module": "Test.QuickCheck.Property",
        "name": "Testable",
        "normalized": "",
        "package": "QuickCheck",
        "partial": "Testable",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Property.html#v:-61--61--62-",
      "description": {
        "fct-descr": "\u003cp\u003eImplication for properties: The resulting property holds if\n the first argument is \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e (in which case the test case is discarded),\n or if the given property holds.\n\u003c/p\u003e",
        "fct-module": "Test.QuickCheck.Property",
        "fct-package": "QuickCheck",
        "fct-signature": "Bool -\u003e prop -\u003e Property",
        "fct-source": "src/Test-QuickCheck-Property.html#%3D%3D%3E",
        "fct-type": "function",
        "title": "(==\u003e)"
      },
      "index": {
        "description": "Implication for properties The resulting property holds if the first argument is False in which case the test case is discarded or if the given property holds",
        "hierarchy": "Test QuickCheck Property",
        "module": "Test.QuickCheck.Property",
        "name": "(==\u003e) ==\u003e",
        "normalized": "Bool-\u003ea-\u003eProperty",
        "package": "QuickCheck",
        "partial": "",
        "signature": "Bool-\u003eprop-\u003eProperty"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Property.html#v:.-124--124-.",
      "description": {
        "fct-descr": "\u003cp\u003eDisjunction: \u003ccode\u003ep1\u003c/code\u003e \u003ccode\u003e\u003ca\u003e.||.\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ep2\u003c/code\u003e passes unless \u003ccode\u003ep1\u003c/code\u003e and \u003ccode\u003ep2\u003c/code\u003e simultaneously fail.\n\u003c/p\u003e",
        "fct-module": "Test.QuickCheck.Property",
        "fct-package": "QuickCheck",
        "fct-signature": "prop1 -\u003e prop2 -\u003e Property",
        "fct-source": "src/Test-QuickCheck-Property.html#.%7C%7C.",
        "fct-type": "function",
        "title": "(.||.)"
      },
      "index": {
        "description": "Disjunction p1 p2 passes unless p1 and p2 simultaneously fail",
        "hierarchy": "Test QuickCheck Property",
        "module": "Test.QuickCheck.Property",
        "name": "(.||.) .||.",
        "normalized": "a-\u003ea-\u003eProperty",
        "package": "QuickCheck",
        "partial": "",
        "signature": "prop-\u003eprop-\u003eProperty"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Property.html#v:.-38--38-.",
      "description": {
        "fct-descr": "\u003cp\u003eConjunction: \u003ccode\u003ep1\u003c/code\u003e \u003ccode\u003e\u003ca\u003e.&&.\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ep2\u003c/code\u003e passes if both \u003ccode\u003ep1\u003c/code\u003e and \u003ccode\u003ep2\u003c/code\u003e pass.\n\u003c/p\u003e",
        "fct-module": "Test.QuickCheck.Property",
        "fct-package": "QuickCheck",
        "fct-signature": "prop1 -\u003e prop2 -\u003e Property",
        "fct-source": "src/Test-QuickCheck-Property.html#.%26%26.",
        "fct-type": "function",
        "title": "(.&&.)"
      },
      "index": {
        "description": "Conjunction p1 p2 passes if both p1 and p2 pass",
        "hierarchy": "Test QuickCheck Property",
        "module": "Test.QuickCheck.Property",
        "name": "(.&&.) .&&.",
        "normalized": "a-\u003ea-\u003eProperty",
        "package": "QuickCheck",
        "partial": "",
        "signature": "prop-\u003eprop-\u003eProperty"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Property.html#v:.-38-.",
      "description": {
        "fct-descr": "\u003cp\u003eNondeterministic choice: \u003ccode\u003ep1\u003c/code\u003e \u003ccode\u003e\u003ca\u003e.&.\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ep2\u003c/code\u003e picks randomly one of\n \u003ccode\u003ep1\u003c/code\u003e and \u003ccode\u003ep2\u003c/code\u003e to test. If you test the property 100 times it\n makes 100 random choices.\n\u003c/p\u003e",
        "fct-module": "Test.QuickCheck.Property",
        "fct-package": "QuickCheck",
        "fct-signature": "prop1 -\u003e prop2 -\u003e Property",
        "fct-source": "src/Test-QuickCheck-Property.html#.%26.",
        "fct-type": "function",
        "title": "(.&.)"
      },
      "index": {
        "description": "Nondeterministic choice p1 p2 picks randomly one of p1 and p2 to test If you test the property times it makes random choices",
        "hierarchy": "Test QuickCheck Property",
        "module": "Test.QuickCheck.Property",
        "name": "(.&.) .&.",
        "normalized": "a-\u003ea-\u003eProperty",
        "package": "QuickCheck",
        "partial": "",
        "signature": "prop-\u003eprop-\u003eProperty"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Property.html#v:Counterexample",
      "description": {
        "fct-descr": "\u003cp\u003eAffected by the \u003ccode\u003e\u003ca\u003everbose\u003c/a\u003e\u003c/code\u003e combinator\n\u003c/p\u003e",
        "fct-module": "Test.QuickCheck.Property",
        "fct-package": "QuickCheck",
        "fct-signature": "Counterexample",
        "fct-source": "src/Test-QuickCheck-Property.html#CallbackKind",
        "fct-type": "function",
        "title": "Counterexample"
      },
      "index": {
        "description": "Affected by the verbose combinator",
        "hierarchy": "Test QuickCheck Property",
        "module": "Test.QuickCheck.Property",
        "name": "Counterexample",
        "normalized": "",
        "package": "QuickCheck",
        "partial": "Counterexample",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Property.html#v:IORose",
      "description": {
        "fct-module": "Test.QuickCheck.Property",
        "fct-package": "QuickCheck",
        "fct-signature": "IORose (IO (Rose a))",
        "fct-source": "src/Test-QuickCheck-Property.html#Rose",
        "fct-type": "function",
        "title": "IORose"
      },
      "index": {
        "description": "",
        "hierarchy": "Test QuickCheck Property",
        "module": "Test.QuickCheck.Property",
        "name": "IORose",
        "normalized": "",
        "package": "QuickCheck",
        "partial": "IORose",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Property.html#v:MkProp",
      "description": {
        "fct-module": "Test.QuickCheck.Property",
        "fct-package": "QuickCheck",
        "fct-signature": "MkProp",
        "fct-source": "src/Test-QuickCheck-Property.html#Prop",
        "fct-type": "function",
        "title": "MkProp"
      },
      "index": {
        "description": "",
        "hierarchy": "Test QuickCheck Property",
        "module": "Test.QuickCheck.Property",
        "name": "MkProp",
        "normalized": "",
        "package": "QuickCheck",
        "partial": "Mk Prop",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Property.html#v:MkResult",
      "description": {
        "fct-module": "Test.QuickCheck.Property",
        "fct-package": "QuickCheck",
        "fct-signature": "MkResult",
        "fct-source": "src/Test-QuickCheck-Property.html#Result",
        "fct-type": "function",
        "title": "MkResult"
      },
      "index": {
        "description": "",
        "hierarchy": "Test QuickCheck Property",
        "module": "Test.QuickCheck.Property",
        "name": "MkResult",
        "normalized": "",
        "package": "QuickCheck",
        "partial": "Mk Result",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Property.html#v:MkRose",
      "description": {
        "fct-module": "Test.QuickCheck.Property",
        "fct-package": "QuickCheck",
        "fct-signature": "MkRose a [Rose a]",
        "fct-source": "src/Test-QuickCheck-Property.html#Rose",
        "fct-type": "function",
        "title": "MkRose"
      },
      "index": {
        "description": "",
        "hierarchy": "Test QuickCheck Property",
        "module": "Test.QuickCheck.Property",
        "name": "MkRose",
        "normalized": "MkRose a[Rose a]",
        "package": "QuickCheck",
        "partial": "Mk Rose",
        "signature": "MkRose a[Rose a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Property.html#v:NotCounterexample",
      "description": {
        "fct-descr": "\u003cp\u003eNot affected by the \u003ccode\u003e\u003ca\u003everbose\u003c/a\u003e\u003c/code\u003e combinator\n\u003c/p\u003e",
        "fct-module": "Test.QuickCheck.Property",
        "fct-package": "QuickCheck",
        "fct-signature": "NotCounterexample",
        "fct-source": "src/Test-QuickCheck-Property.html#CallbackKind",
        "fct-type": "function",
        "title": "NotCounterexample"
      },
      "index": {
        "description": "Not affected by the verbose combinator",
        "hierarchy": "Test QuickCheck Property",
        "module": "Test.QuickCheck.Property",
        "name": "NotCounterexample",
        "normalized": "",
        "package": "QuickCheck",
        "partial": "Not Counterexample",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Property.html#v:PostFinalFailure",
      "description": {
        "fct-descr": "\u003cp\u003eCalled with the final failing test-case\n\u003c/p\u003e",
        "fct-module": "Test.QuickCheck.Property",
        "fct-package": "QuickCheck",
        "fct-signature": "PostFinalFailure CallbackKind (State -\u003e Result -\u003e IO ())",
        "fct-source": "src/Test-QuickCheck-Property.html#Callback",
        "fct-type": "function",
        "title": "PostFinalFailure"
      },
      "index": {
        "description": "Called with the final failing test-case",
        "hierarchy": "Test QuickCheck Property",
        "module": "Test.QuickCheck.Property",
        "name": "PostFinalFailure",
        "normalized": "PostFinalFailure CallbackKind(State-\u003eResult-\u003eIO())",
        "package": "QuickCheck",
        "partial": "Post Final Failure",
        "signature": "PostFinalFailure CallbackKind(State-\u003eResult-\u003eIO())"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Property.html#v:PostTest",
      "description": {
        "fct-descr": "\u003cp\u003eCalled just after a test\n\u003c/p\u003e",
        "fct-module": "Test.QuickCheck.Property",
        "fct-package": "QuickCheck",
        "fct-signature": "PostTest CallbackKind (State -\u003e Result -\u003e IO ())",
        "fct-source": "src/Test-QuickCheck-Property.html#Callback",
        "fct-type": "function",
        "title": "PostTest"
      },
      "index": {
        "description": "Called just after test",
        "hierarchy": "Test QuickCheck Property",
        "module": "Test.QuickCheck.Property",
        "name": "PostTest",
        "normalized": "PostTest CallbackKind(State-\u003eResult-\u003eIO())",
        "package": "QuickCheck",
        "partial": "Post Test",
        "signature": "PostTest CallbackKind(State-\u003eResult-\u003eIO())"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Property.html#v:abort",
      "description": {
        "fct-descr": "\u003cp\u003eif True, the test should not be repeated\n\u003c/p\u003e",
        "fct-module": "Test.QuickCheck.Property",
        "fct-package": "QuickCheck",
        "fct-signature": "Bool",
        "fct-source": "src/Test-QuickCheck-Property.html#Result",
        "fct-type": "function",
        "title": "abort"
      },
      "index": {
        "description": "if True the test should not be repeated",
        "hierarchy": "Test QuickCheck Property",
        "module": "Test.QuickCheck.Property",
        "name": "abort",
        "normalized": "",
        "package": "QuickCheck",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Property.html#v:callback",
      "description": {
        "fct-descr": "\u003cp\u003eAdds a callback\n\u003c/p\u003e",
        "fct-module": "Test.QuickCheck.Property",
        "fct-package": "QuickCheck",
        "fct-signature": "Callback -\u003e prop -\u003e Property",
        "fct-source": "src/Test-QuickCheck-Property.html#callback",
        "fct-type": "function",
        "title": "callback"
      },
      "index": {
        "description": "Adds callback",
        "hierarchy": "Test QuickCheck Property",
        "module": "Test.QuickCheck.Property",
        "name": "callback",
        "normalized": "Callback-\u003ea-\u003eProperty",
        "package": "QuickCheck",
        "partial": "",
        "signature": "Callback-\u003eprop-\u003eProperty"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Property.html#v:callbacks",
      "description": {
        "fct-descr": "\u003cp\u003ethe callbacks for this test case\n\u003c/p\u003e",
        "fct-module": "Test.QuickCheck.Property",
        "fct-package": "QuickCheck",
        "fct-signature": "[Callback]",
        "fct-source": "src/Test-QuickCheck-Property.html#Result",
        "fct-type": "function",
        "title": "callbacks"
      },
      "index": {
        "description": "the callbacks for this test case",
        "hierarchy": "Test QuickCheck Property",
        "module": "Test.QuickCheck.Property",
        "name": "callbacks",
        "normalized": "[Callback]",
        "package": "QuickCheck",
        "partial": "",
        "signature": "[Callback]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Property.html#v:classify",
      "description": {
        "fct-descr": "\u003cp\u003eConditionally labels test case.\n\u003c/p\u003e",
        "fct-module": "Test.QuickCheck.Property",
        "fct-package": "QuickCheck",
        "fct-signature": "Bool-\u003e String-\u003e prop-\u003e Property",
        "fct-type": "function",
        "title": "classify"
      },
      "index": {
        "description": "Conditionally labels test case",
        "hierarchy": "Test QuickCheck Property",
        "module": "Test.QuickCheck.Property",
        "name": "classify",
        "normalized": "Bool-\u003eString-\u003ea-\u003eProperty",
        "package": "QuickCheck",
        "partial": "",
        "signature": "Bool-\u003eString-\u003eprop-\u003eProperty"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Property.html#v:collect",
      "description": {
        "fct-descr": "\u003cp\u003eLabels a property with a value:\n\u003c/p\u003e\u003cpre\u003e collect x = label (show x)\n\u003c/pre\u003e",
        "fct-module": "Test.QuickCheck.Property",
        "fct-package": "QuickCheck",
        "fct-signature": "a -\u003e prop -\u003e Property",
        "fct-source": "src/Test-QuickCheck-Property.html#collect",
        "fct-type": "function",
        "title": "collect"
      },
      "index": {
        "description": "Labels property with value collect label show",
        "hierarchy": "Test QuickCheck Property",
        "module": "Test.QuickCheck.Property",
        "name": "collect",
        "normalized": "a-\u003eb-\u003eProperty",
        "package": "QuickCheck",
        "partial": "",
        "signature": "a-\u003eprop-\u003eProperty"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Property.html#v:conjoin",
      "description": {
        "fct-descr": "\u003cp\u003eTake the conjunction of several properties.\n\u003c/p\u003e",
        "fct-module": "Test.QuickCheck.Property",
        "fct-package": "QuickCheck",
        "fct-signature": "[prop] -\u003e Property",
        "fct-source": "src/Test-QuickCheck-Property.html#conjoin",
        "fct-type": "function",
        "title": "conjoin"
      },
      "index": {
        "description": "Take the conjunction of several properties",
        "hierarchy": "Test QuickCheck Property",
        "module": "Test.QuickCheck.Property",
        "name": "conjoin",
        "normalized": "[a]-\u003eProperty",
        "package": "QuickCheck",
        "partial": "",
        "signature": "[prop]-\u003eProperty"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Property.html#v:cover",
      "description": {
        "fct-descr": "\u003cp\u003eChecks that at least the given proportion of the test cases belong\n to the given class.\n\u003c/p\u003e",
        "fct-module": "Test.QuickCheck.Property",
        "fct-package": "QuickCheck",
        "fct-signature": "Bool-\u003e Int-\u003e String-\u003e prop-\u003e Property",
        "fct-type": "function",
        "title": "cover"
      },
      "index": {
        "description": "Checks that at least the given proportion of the test cases belong to the given class",
        "hierarchy": "Test QuickCheck Property",
        "module": "Test.QuickCheck.Property",
        "name": "cover",
        "normalized": "Bool-\u003eInt-\u003eString-\u003ea-\u003eProperty",
        "package": "QuickCheck",
        "partial": "",
        "signature": "Bool-\u003eInt-\u003eString-\u003eprop-\u003eProperty"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Property.html#v:disjoin",
      "description": {
        "fct-descr": "\u003cp\u003eTake the disjunction of several properties.\n\u003c/p\u003e",
        "fct-module": "Test.QuickCheck.Property",
        "fct-package": "QuickCheck",
        "fct-signature": "[prop] -\u003e Property",
        "fct-source": "src/Test-QuickCheck-Property.html#disjoin",
        "fct-type": "function",
        "title": "disjoin"
      },
      "index": {
        "description": "Take the disjunction of several properties",
        "hierarchy": "Test QuickCheck Property",
        "module": "Test.QuickCheck.Property",
        "name": "disjoin",
        "normalized": "[a]-\u003eProperty",
        "package": "QuickCheck",
        "partial": "",
        "signature": "[prop]-\u003eProperty"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Property.html#v:exception",
      "description": {
        "fct-module": "Test.QuickCheck.Property",
        "fct-package": "QuickCheck",
        "fct-signature": "String -\u003e AnException -\u003e Result",
        "fct-source": "src/Test-QuickCheck-Property.html#exception",
        "fct-type": "function",
        "title": "exception"
      },
      "index": {
        "description": "",
        "hierarchy": "Test QuickCheck Property",
        "module": "Test.QuickCheck.Property",
        "name": "exception",
        "normalized": "String-\u003eAnException-\u003eResult",
        "package": "QuickCheck",
        "partial": "",
        "signature": "String-\u003eAnException-\u003eResult"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Property.html#v:exhaustive",
      "description": {
        "fct-module": "Test.QuickCheck.Property",
        "fct-package": "QuickCheck",
        "fct-signature": "prop -\u003e Bool",
        "fct-source": "src/Test-QuickCheck-Property.html#exhaustive",
        "fct-type": "method",
        "title": "exhaustive"
      },
      "index": {
        "description": "",
        "hierarchy": "Test QuickCheck Property",
        "module": "Test.QuickCheck.Property",
        "name": "exhaustive",
        "normalized": "a-\u003eBool",
        "package": "QuickCheck",
        "partial": "",
        "signature": "prop-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Property.html#v:expect",
      "description": {
        "fct-descr": "\u003cp\u003eindicates what the expected result of the property is\n\u003c/p\u003e",
        "fct-module": "Test.QuickCheck.Property",
        "fct-package": "QuickCheck",
        "fct-signature": "Bool",
        "fct-source": "src/Test-QuickCheck-Property.html#Result",
        "fct-type": "function",
        "title": "expect"
      },
      "index": {
        "description": "indicates what the expected result of the property is",
        "hierarchy": "Test QuickCheck Property",
        "module": "Test.QuickCheck.Property",
        "name": "expect",
        "normalized": "",
        "package": "QuickCheck",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Property.html#v:expectFailure",
      "description": {
        "fct-descr": "\u003cp\u003eModifies a property so that it is expected to fail for some test cases.\n\u003c/p\u003e",
        "fct-module": "Test.QuickCheck.Property",
        "fct-package": "QuickCheck",
        "fct-signature": "prop -\u003e Property",
        "fct-source": "src/Test-QuickCheck-Property.html#expectFailure",
        "fct-type": "function",
        "title": "expectFailure"
      },
      "index": {
        "description": "Modifies property so that it is expected to fail for some test cases",
        "hierarchy": "Test QuickCheck Property",
        "module": "Test.QuickCheck.Property",
        "name": "expectFailure",
        "normalized": "a-\u003eProperty",
        "package": "QuickCheck",
        "partial": "Failure",
        "signature": "prop-\u003eProperty"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Property.html#v:failed",
      "description": {
        "fct-module": "Test.QuickCheck.Property",
        "fct-package": "QuickCheck",
        "fct-signature": "Result",
        "fct-source": "src/Test-QuickCheck-Property.html#failed",
        "fct-type": "function",
        "title": "failed"
      },
      "index": {
        "description": "",
        "hierarchy": "Test QuickCheck Property",
        "module": "Test.QuickCheck.Property",
        "name": "failed",
        "normalized": "",
        "package": "QuickCheck",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Property.html#v:forAll",
      "description": {
        "fct-descr": "\u003cp\u003eExplicit universal quantification: uses an explicitly given\n test case generator.\n\u003c/p\u003e",
        "fct-module": "Test.QuickCheck.Property",
        "fct-package": "QuickCheck",
        "fct-signature": "Gen a -\u003e (a -\u003e prop) -\u003e Property",
        "fct-source": "src/Test-QuickCheck-Property.html#forAll",
        "fct-type": "function",
        "title": "forAll"
      },
      "index": {
        "description": "Explicit universal quantification uses an explicitly given test case generator",
        "hierarchy": "Test QuickCheck Property",
        "module": "Test.QuickCheck.Property",
        "name": "forAll",
        "normalized": "Gen a-\u003e(a-\u003eb)-\u003eProperty",
        "package": "QuickCheck",
        "partial": "All",
        "signature": "Gen a-\u003e(a-\u003eprop)-\u003eProperty"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Property.html#v:forAllShrink",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eforAll\u003c/a\u003e\u003c/code\u003e, but tries to shrink the argument for failing test cases.\n\u003c/p\u003e",
        "fct-module": "Test.QuickCheck.Property",
        "fct-package": "QuickCheck",
        "fct-signature": "Gen a -\u003e (a -\u003e [a]) -\u003e (a -\u003e prop) -\u003e Property",
        "fct-source": "src/Test-QuickCheck-Property.html#forAllShrink",
        "fct-type": "function",
        "title": "forAllShrink"
      },
      "index": {
        "description": "Like forAll but tries to shrink the argument for failing test cases",
        "hierarchy": "Test QuickCheck Property",
        "module": "Test.QuickCheck.Property",
        "name": "forAllShrink",
        "normalized": "Gen a-\u003e(a-\u003e[a])-\u003e(a-\u003eb)-\u003eProperty",
        "package": "QuickCheck",
        "partial": "All Shrink",
        "signature": "Gen a-\u003e(a-\u003e[a])-\u003e(a-\u003eprop)-\u003eProperty"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Property.html#v:formatException",
      "description": {
        "fct-module": "Test.QuickCheck.Property",
        "fct-package": "QuickCheck",
        "fct-signature": "String -\u003e AnException -\u003e String",
        "fct-source": "src/Test-QuickCheck-Property.html#formatException",
        "fct-type": "function",
        "title": "formatException"
      },
      "index": {
        "description": "",
        "hierarchy": "Test QuickCheck Property",
        "module": "Test.QuickCheck.Property",
        "name": "formatException",
        "normalized": "String-\u003eAnException-\u003eString",
        "package": "QuickCheck",
        "partial": "Exception",
        "signature": "String-\u003eAnException-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Property.html#v:interrupted",
      "description": {
        "fct-descr": "\u003cp\u003eindicates if the test case was cancelled by pressing ^C\n\u003c/p\u003e",
        "fct-module": "Test.QuickCheck.Property",
        "fct-package": "QuickCheck",
        "fct-signature": "Bool",
        "fct-source": "src/Test-QuickCheck-Property.html#Result",
        "fct-type": "function",
        "title": "interrupted"
      },
      "index": {
        "description": "indicates if the test case was cancelled by pressing",
        "hierarchy": "Test QuickCheck Property",
        "module": "Test.QuickCheck.Property",
        "name": "interrupted",
        "normalized": "",
        "package": "QuickCheck",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Property.html#v:ioRose",
      "description": {
        "fct-module": "Test.QuickCheck.Property",
        "fct-package": "QuickCheck",
        "fct-signature": "IO (Rose Result) -\u003e Rose Result",
        "fct-source": "src/Test-QuickCheck-Property.html#ioRose",
        "fct-type": "function",
        "title": "ioRose"
      },
      "index": {
        "description": "",
        "hierarchy": "Test QuickCheck Property",
        "module": "Test.QuickCheck.Property",
        "name": "ioRose",
        "normalized": "IO(Rose Result)-\u003eRose Result",
        "package": "QuickCheck",
        "partial": "Rose",
        "signature": "IO(Rose Result)-\u003eRose Result"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Property.html#v:joinRose",
      "description": {
        "fct-module": "Test.QuickCheck.Property",
        "fct-package": "QuickCheck",
        "fct-signature": "Rose (Rose a) -\u003e Rose a",
        "fct-source": "src/Test-QuickCheck-Property.html#joinRose",
        "fct-type": "function",
        "title": "joinRose"
      },
      "index": {
        "description": "",
        "hierarchy": "Test QuickCheck Property",
        "module": "Test.QuickCheck.Property",
        "name": "joinRose",
        "normalized": "Rose(Rose a)-\u003eRose a",
        "package": "QuickCheck",
        "partial": "Rose",
        "signature": "Rose(Rose a)-\u003eRose a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Property.html#v:label",
      "description": {
        "fct-descr": "\u003cp\u003eAttaches a label to a property. This is used for reporting\n test case distribution.\n\u003c/p\u003e",
        "fct-module": "Test.QuickCheck.Property",
        "fct-package": "QuickCheck",
        "fct-signature": "String -\u003e prop -\u003e Property",
        "fct-source": "src/Test-QuickCheck-Property.html#label",
        "fct-type": "function",
        "title": "label"
      },
      "index": {
        "description": "Attaches label to property This is used for reporting test case distribution",
        "hierarchy": "Test QuickCheck Property",
        "module": "Test.QuickCheck.Property",
        "name": "label",
        "normalized": "String-\u003ea-\u003eProperty",
        "package": "QuickCheck",
        "partial": "",
        "signature": "String-\u003eprop-\u003eProperty"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Property.html#v:liftBool",
      "description": {
        "fct-module": "Test.QuickCheck.Property",
        "fct-package": "QuickCheck",
        "fct-signature": "Bool -\u003e Result",
        "fct-source": "src/Test-QuickCheck-Property.html#liftBool",
        "fct-type": "function",
        "title": "liftBool"
      },
      "index": {
        "description": "",
        "hierarchy": "Test QuickCheck Property",
        "module": "Test.QuickCheck.Property",
        "name": "liftBool",
        "normalized": "Bool-\u003eResult",
        "package": "QuickCheck",
        "partial": "Bool",
        "signature": "Bool-\u003eResult"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Property.html#v:mapProp",
      "description": {
        "fct-module": "Test.QuickCheck.Property",
        "fct-package": "QuickCheck",
        "fct-signature": "(Prop -\u003e Prop) -\u003e prop -\u003e Property",
        "fct-source": "src/Test-QuickCheck-Property.html#mapProp",
        "fct-type": "function",
        "title": "mapProp"
      },
      "index": {
        "description": "",
        "hierarchy": "Test QuickCheck Property",
        "module": "Test.QuickCheck.Property",
        "name": "mapProp",
        "normalized": "(Prop-\u003eProp)-\u003ea-\u003eProperty",
        "package": "QuickCheck",
        "partial": "Prop",
        "signature": "(Prop-\u003eProp)-\u003eprop-\u003eProperty"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Property.html#v:mapResult",
      "description": {
        "fct-module": "Test.QuickCheck.Property",
        "fct-package": "QuickCheck",
        "fct-signature": "(Result -\u003e Result) -\u003e prop -\u003e Property",
        "fct-source": "src/Test-QuickCheck-Property.html#mapResult",
        "fct-type": "function",
        "title": "mapResult"
      },
      "index": {
        "description": "",
        "hierarchy": "Test QuickCheck Property",
        "module": "Test.QuickCheck.Property",
        "name": "mapResult",
        "normalized": "(Result-\u003eResult)-\u003ea-\u003eProperty",
        "package": "QuickCheck",
        "partial": "Result",
        "signature": "(Result-\u003eResult)-\u003eprop-\u003eProperty"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Property.html#v:mapRoseResult",
      "description": {
        "fct-module": "Test.QuickCheck.Property",
        "fct-package": "QuickCheck",
        "fct-signature": "(Rose Result -\u003e Rose Result) -\u003e prop -\u003e Property",
        "fct-source": "src/Test-QuickCheck-Property.html#mapRoseResult",
        "fct-type": "function",
        "title": "mapRoseResult"
      },
      "index": {
        "description": "",
        "hierarchy": "Test QuickCheck Property",
        "module": "Test.QuickCheck.Property",
        "name": "mapRoseResult",
        "normalized": "(Rose Result-\u003eRose Result)-\u003ea-\u003eProperty",
        "package": "QuickCheck",
        "partial": "Rose Result",
        "signature": "(Rose Result-\u003eRose Result)-\u003eprop-\u003eProperty"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Property.html#v:mapSize",
      "description": {
        "fct-descr": "\u003cp\u003eChanges the maximum test case size for a property.\n\u003c/p\u003e",
        "fct-module": "Test.QuickCheck.Property",
        "fct-package": "QuickCheck",
        "fct-signature": "(Int -\u003e Int) -\u003e prop -\u003e Property",
        "fct-source": "src/Test-QuickCheck-Property.html#mapSize",
        "fct-type": "function",
        "title": "mapSize"
      },
      "index": {
        "description": "Changes the maximum test case size for property",
        "hierarchy": "Test QuickCheck Property",
        "module": "Test.QuickCheck.Property",
        "name": "mapSize",
        "normalized": "(Int-\u003eInt)-\u003ea-\u003eProperty",
        "package": "QuickCheck",
        "partial": "Size",
        "signature": "(Int-\u003eInt)-\u003eprop-\u003eProperty"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Property.html#v:mapTotalResult",
      "description": {
        "fct-module": "Test.QuickCheck.Property",
        "fct-package": "QuickCheck",
        "fct-signature": "(Result -\u003e Result) -\u003e prop -\u003e Property",
        "fct-source": "src/Test-QuickCheck-Property.html#mapTotalResult",
        "fct-type": "function",
        "title": "mapTotalResult"
      },
      "index": {
        "description": "",
        "hierarchy": "Test QuickCheck Property",
        "module": "Test.QuickCheck.Property",
        "name": "mapTotalResult",
        "normalized": "(Result-\u003eResult)-\u003ea-\u003eProperty",
        "package": "QuickCheck",
        "partial": "Total Result",
        "signature": "(Result-\u003eResult)-\u003eprop-\u003eProperty"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Property.html#v:morallyDubiousIOProperty",
      "description": {
        "fct-descr": "\u003cp\u003eDo I/O inside a property. This can obviously lead to unrepeatable\n testcases, so use with care.\n\u003c/p\u003e",
        "fct-module": "Test.QuickCheck.Property",
        "fct-package": "QuickCheck",
        "fct-signature": "IO prop -\u003e Property",
        "fct-source": "src/Test-QuickCheck-Property.html#morallyDubiousIOProperty",
        "fct-type": "function",
        "title": "morallyDubiousIOProperty"
      },
      "index": {
        "description": "Do inside property This can obviously lead to unrepeatable testcases so use with care",
        "hierarchy": "Test QuickCheck Property",
        "module": "Test.QuickCheck.Property",
        "name": "morallyDubiousIOProperty",
        "normalized": "IO a-\u003eProperty",
        "package": "QuickCheck",
        "partial": "Dubious IOProperty",
        "signature": "IO prop-\u003eProperty"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Property.html#v:noShrinking",
      "description": {
        "fct-descr": "\u003cp\u003eDisables shrinking for a property altogether.\n\u003c/p\u003e",
        "fct-module": "Test.QuickCheck.Property",
        "fct-package": "QuickCheck",
        "fct-signature": "prop -\u003e Property",
        "fct-source": "src/Test-QuickCheck-Property.html#noShrinking",
        "fct-type": "function",
        "title": "noShrinking"
      },
      "index": {
        "description": "Disables shrinking for property altogether",
        "hierarchy": "Test QuickCheck Property",
        "module": "Test.QuickCheck.Property",
        "name": "noShrinking",
        "normalized": "a-\u003eProperty",
        "package": "QuickCheck",
        "partial": "Shrinking",
        "signature": "prop-\u003eProperty"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Property.html#v:ok",
      "description": {
        "fct-descr": "\u003cp\u003eresult of the test case; Nothing = discard\n\u003c/p\u003e",
        "fct-module": "Test.QuickCheck.Property",
        "fct-package": "QuickCheck",
        "fct-signature": "Maybe Bool",
        "fct-source": "src/Test-QuickCheck-Property.html#Result",
        "fct-type": "function",
        "title": "ok"
      },
      "index": {
        "description": "result of the test case Nothing discard",
        "hierarchy": "Test QuickCheck Property",
        "module": "Test.QuickCheck.Property",
        "name": "ok",
        "normalized": "",
        "package": "QuickCheck",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Property.html#v:onRose",
      "description": {
        "fct-module": "Test.QuickCheck.Property",
        "fct-package": "QuickCheck",
        "fct-signature": "(a -\u003e [Rose a] -\u003e Rose a) -\u003e Rose a -\u003e Rose a",
        "fct-source": "src/Test-QuickCheck-Property.html#onRose",
        "fct-type": "function",
        "title": "onRose"
      },
      "index": {
        "description": "",
        "hierarchy": "Test QuickCheck Property",
        "module": "Test.QuickCheck.Property",
        "name": "onRose",
        "normalized": "(a-\u003e[Rose a]-\u003eRose a)-\u003eRose a-\u003eRose a",
        "package": "QuickCheck",
        "partial": "Rose",
        "signature": "(a-\u003e[Rose a]-\u003eRose a)-\u003eRose a-\u003eRose a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Property.html#v:once",
      "description": {
        "fct-descr": "\u003cp\u003eModifies a property so that it only will be tested once.\n\u003c/p\u003e",
        "fct-module": "Test.QuickCheck.Property",
        "fct-package": "QuickCheck",
        "fct-signature": "prop -\u003e Property",
        "fct-source": "src/Test-QuickCheck-Property.html#once",
        "fct-type": "function",
        "title": "once"
      },
      "index": {
        "description": "Modifies property so that it only will be tested once",
        "hierarchy": "Test QuickCheck Property",
        "module": "Test.QuickCheck.Property",
        "name": "once",
        "normalized": "a-\u003eProperty",
        "package": "QuickCheck",
        "partial": "",
        "signature": "prop-\u003eProperty"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Property.html#v:printTestCase",
      "description": {
        "fct-descr": "\u003cp\u003ePrints a message to the terminal as part of the counterexample.\n\u003c/p\u003e",
        "fct-module": "Test.QuickCheck.Property",
        "fct-package": "QuickCheck",
        "fct-signature": "String -\u003e prop -\u003e Property",
        "fct-source": "src/Test-QuickCheck-Property.html#printTestCase",
        "fct-type": "function",
        "title": "printTestCase"
      },
      "index": {
        "description": "Prints message to the terminal as part of the counterexample",
        "hierarchy": "Test QuickCheck Property",
        "module": "Test.QuickCheck.Property",
        "name": "printTestCase",
        "normalized": "String-\u003ea-\u003eProperty",
        "package": "QuickCheck",
        "partial": "Test Case",
        "signature": "String-\u003eprop-\u003eProperty"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Property.html#v:property",
      "description": {
        "fct-module": "Test.QuickCheck.Property",
        "fct-package": "QuickCheck",
        "fct-signature": "prop -\u003e Property",
        "fct-source": "src/Test-QuickCheck-Property.html#property",
        "fct-type": "method",
        "title": "property"
      },
      "index": {
        "description": "",
        "hierarchy": "Test QuickCheck Property",
        "module": "Test.QuickCheck.Property",
        "name": "property",
        "normalized": "a-\u003eProperty",
        "package": "QuickCheck",
        "partial": "",
        "signature": "prop-\u003eProperty"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Property.html#v:protect",
      "description": {
        "fct-module": "Test.QuickCheck.Property",
        "fct-package": "QuickCheck",
        "fct-signature": "(AnException -\u003e a) -\u003e IO a -\u003e IO a",
        "fct-source": "src/Test-QuickCheck-Property.html#protect",
        "fct-type": "function",
        "title": "protect"
      },
      "index": {
        "description": "",
        "hierarchy": "Test QuickCheck Property",
        "module": "Test.QuickCheck.Property",
        "name": "protect",
        "normalized": "(AnException-\u003ea)-\u003eIO a-\u003eIO a",
        "package": "QuickCheck",
        "partial": "",
        "signature": "(AnException-\u003ea)-\u003eIO a-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Property.html#v:protectResult",
      "description": {
        "fct-module": "Test.QuickCheck.Property",
        "fct-package": "QuickCheck",
        "fct-signature": "IO Result -\u003e IO Result",
        "fct-source": "src/Test-QuickCheck-Property.html#protectResult",
        "fct-type": "function",
        "title": "protectResult"
      },
      "index": {
        "description": "",
        "hierarchy": "Test QuickCheck Property",
        "module": "Test.QuickCheck.Property",
        "name": "protectResult",
        "normalized": "IO Result-\u003eIO Result",
        "package": "QuickCheck",
        "partial": "Result",
        "signature": "IO Result-\u003eIO Result"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Property.html#v:protectResults",
      "description": {
        "fct-module": "Test.QuickCheck.Property",
        "fct-package": "QuickCheck",
        "fct-signature": "Rose Result -\u003e Rose Result",
        "fct-source": "src/Test-QuickCheck-Property.html#protectResults",
        "fct-type": "function",
        "title": "protectResults"
      },
      "index": {
        "description": "",
        "hierarchy": "Test QuickCheck Property",
        "module": "Test.QuickCheck.Property",
        "name": "protectResults",
        "normalized": "Rose Result-\u003eRose Result",
        "package": "QuickCheck",
        "partial": "Results",
        "signature": "Rose Result-\u003eRose Result"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Property.html#v:protectRose",
      "description": {
        "fct-module": "Test.QuickCheck.Property",
        "fct-package": "QuickCheck",
        "fct-signature": "IO (Rose Result) -\u003e IO (Rose Result)",
        "fct-source": "src/Test-QuickCheck-Property.html#protectRose",
        "fct-type": "function",
        "title": "protectRose"
      },
      "index": {
        "description": "",
        "hierarchy": "Test QuickCheck Property",
        "module": "Test.QuickCheck.Property",
        "name": "protectRose",
        "normalized": "IO(Rose Result)-\u003eIO(Rose Result)",
        "package": "QuickCheck",
        "partial": "Rose",
        "signature": "IO(Rose Result)-\u003eIO(Rose Result)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Property.html#v:reason",
      "description": {
        "fct-descr": "\u003cp\u003ea message indicating what went wrong\n\u003c/p\u003e",
        "fct-module": "Test.QuickCheck.Property",
        "fct-package": "QuickCheck",
        "fct-signature": "String",
        "fct-source": "src/Test-QuickCheck-Property.html#Result",
        "fct-type": "function",
        "title": "reason"
      },
      "index": {
        "description": "message indicating what went wrong",
        "hierarchy": "Test QuickCheck Property",
        "module": "Test.QuickCheck.Property",
        "name": "reason",
        "normalized": "",
        "package": "QuickCheck",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Property.html#v:reduceRose",
      "description": {
        "fct-module": "Test.QuickCheck.Property",
        "fct-package": "QuickCheck",
        "fct-signature": "Rose Result -\u003e IO (Rose Result)",
        "fct-source": "src/Test-QuickCheck-Property.html#reduceRose",
        "fct-type": "function",
        "title": "reduceRose"
      },
      "index": {
        "description": "",
        "hierarchy": "Test QuickCheck Property",
        "module": "Test.QuickCheck.Property",
        "name": "reduceRose",
        "normalized": "Rose Result-\u003eIO(Rose Result)",
        "package": "QuickCheck",
        "partial": "Rose",
        "signature": "Rose Result-\u003eIO(Rose Result)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Property.html#v:rejected",
      "description": {
        "fct-module": "Test.QuickCheck.Property",
        "fct-package": "QuickCheck",
        "fct-signature": "Result",
        "fct-source": "src/Test-QuickCheck-Property.html#rejected",
        "fct-type": "function",
        "title": "rejected"
      },
      "index": {
        "description": "",
        "hierarchy": "Test QuickCheck Property",
        "module": "Test.QuickCheck.Property",
        "name": "rejected",
        "normalized": "",
        "package": "QuickCheck",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Property.html#v:result",
      "description": {
        "fct-module": "Test.QuickCheck.Property",
        "fct-package": "QuickCheck",
        "fct-signature": "Result",
        "fct-source": "src/Test-QuickCheck-Property.html#result",
        "fct-type": "function",
        "title": "result"
      },
      "index": {
        "description": "",
        "hierarchy": "Test QuickCheck Property",
        "module": "Test.QuickCheck.Property",
        "name": "result",
        "normalized": "",
        "package": "QuickCheck",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Property.html#v:shrinking",
      "description": {
        "fct-descr": "\u003cp\u003eShrinks the argument to property if it fails. Shrinking is done\n automatically for most types. This is only needed when you want to\n override the default behavior.\n\u003c/p\u003e",
        "fct-module": "Test.QuickCheck.Property",
        "fct-package": "QuickCheck",
        "fct-signature": "(a -\u003e [a])-\u003e a-\u003e (a -\u003e prop)-\u003e Property",
        "fct-type": "function",
        "title": "shrinking"
      },
      "index": {
        "description": "Shrinks the argument to property if it fails Shrinking is done automatically for most types This is only needed when you want to override the default behavior",
        "hierarchy": "Test QuickCheck Property",
        "module": "Test.QuickCheck.Property",
        "name": "shrinking",
        "normalized": "(a-\u003e[a])-\u003ea-\u003e(a-\u003eb)-\u003eProperty",
        "package": "QuickCheck",
        "partial": "",
        "signature": "(a-\u003e[a])-\u003ea-\u003e(a-\u003eprop)-\u003eProperty"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Property.html#v:stamp",
      "description": {
        "fct-descr": "\u003cp\u003ethe collected values for this test case\n\u003c/p\u003e",
        "fct-module": "Test.QuickCheck.Property",
        "fct-package": "QuickCheck",
        "fct-signature": "[(String, Int)]",
        "fct-source": "src/Test-QuickCheck-Property.html#Result",
        "fct-type": "function",
        "title": "stamp"
      },
      "index": {
        "description": "the collected values for this test case",
        "hierarchy": "Test QuickCheck Property",
        "module": "Test.QuickCheck.Property",
        "name": "stamp",
        "normalized": "[(String,Int)]",
        "package": "QuickCheck",
        "partial": "",
        "signature": "[(String,Int)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Property.html#v:succeeded",
      "description": {
        "fct-module": "Test.QuickCheck.Property",
        "fct-package": "QuickCheck",
        "fct-signature": "Result",
        "fct-source": "src/Test-QuickCheck-Property.html#succeeded",
        "fct-type": "function",
        "title": "succeeded"
      },
      "index": {
        "description": "",
        "hierarchy": "Test QuickCheck Property",
        "module": "Test.QuickCheck.Property",
        "name": "succeeded",
        "normalized": "",
        "package": "QuickCheck",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Property.html#v:unProp",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Test.QuickCheck.Property",
        "fct-package": "QuickCheck",
        "fct-signature": "Rose Result",
        "fct-source": "src/Test-QuickCheck-Property.html#Prop",
        "fct-type": "function",
        "title": "unProp"
      },
      "index": {
        "description": "",
        "hierarchy": "Test QuickCheck Property",
        "module": "Test.QuickCheck.Property",
        "name": "unProp",
        "normalized": "",
        "package": "QuickCheck",
        "partial": "Prop",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Property.html#v:verbose",
      "description": {
        "fct-descr": "\u003cp\u003ePrints out the generated testcase every time the property is tested,\n like \u003ccode\u003everboseCheck\u003c/code\u003e from QuickCheck 1.\n Only variables quantified over \u003cem\u003einside\u003c/em\u003e the \u003ccode\u003e\u003ca\u003everbose\u003c/a\u003e\u003c/code\u003e are printed.\n\u003c/p\u003e",
        "fct-module": "Test.QuickCheck.Property",
        "fct-package": "QuickCheck",
        "fct-signature": "prop -\u003e Property",
        "fct-source": "src/Test-QuickCheck-Property.html#verbose",
        "fct-type": "function",
        "title": "verbose"
      },
      "index": {
        "description": "Prints out the generated testcase every time the property is tested like verboseCheck from QuickCheck Only variables quantified over inside the verbose are printed",
        "hierarchy": "Test QuickCheck Property",
        "module": "Test.QuickCheck.Property",
        "name": "verbose",
        "normalized": "a-\u003eProperty",
        "package": "QuickCheck",
        "partial": "",
        "signature": "prop-\u003eProperty"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Property.html#v:whenFail",
      "description": {
        "fct-descr": "\u003cp\u003ePerforms an \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e action after the last failure of a property.\n\u003c/p\u003e",
        "fct-module": "Test.QuickCheck.Property",
        "fct-package": "QuickCheck",
        "fct-signature": "IO () -\u003e prop -\u003e Property",
        "fct-source": "src/Test-QuickCheck-Property.html#whenFail",
        "fct-type": "function",
        "title": "whenFail"
      },
      "index": {
        "description": "Performs an IO action after the last failure of property",
        "hierarchy": "Test QuickCheck Property",
        "module": "Test.QuickCheck.Property",
        "name": "whenFail",
        "normalized": "IO()-\u003ea-\u003eProperty",
        "package": "QuickCheck",
        "partial": "Fail",
        "signature": "IO()-\u003eprop-\u003eProperty"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Property.html#v:whenFail-39-",
      "description": {
        "fct-descr": "\u003cp\u003ePerforms an \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e action every time a property fails. Thus,\n if shrinking is done, this can be used to keep track of the\n failures along the way.\n\u003c/p\u003e",
        "fct-module": "Test.QuickCheck.Property",
        "fct-package": "QuickCheck",
        "fct-signature": "IO () -\u003e prop -\u003e Property",
        "fct-source": "src/Test-QuickCheck-Property.html#whenFail%27",
        "fct-type": "function",
        "title": "whenFail'"
      },
      "index": {
        "description": "Performs an IO action every time property fails Thus if shrinking is done this can be used to keep track of the failures along the way",
        "hierarchy": "Test QuickCheck Property",
        "module": "Test.QuickCheck.Property",
        "name": "whenFail'",
        "normalized": "IO()-\u003ea-\u003eProperty",
        "package": "QuickCheck",
        "partial": "Fail'",
        "signature": "IO()-\u003eprop-\u003eProperty"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Property.html#v:within",
      "description": {
        "fct-descr": "\u003cp\u003eConsiders a property failed if it does not complete within\n the given number of microseconds.\n\u003c/p\u003e",
        "fct-module": "Test.QuickCheck.Property",
        "fct-package": "QuickCheck",
        "fct-signature": "Int -\u003e prop -\u003e Property",
        "fct-source": "src/Test-QuickCheck-Property.html#within",
        "fct-type": "function",
        "title": "within"
      },
      "index": {
        "description": "Considers property failed if it does not complete within the given number of microseconds",
        "hierarchy": "Test QuickCheck Property",
        "module": "Test.QuickCheck.Property",
        "name": "within",
        "normalized": "Int-\u003ea-\u003eProperty",
        "package": "QuickCheck",
        "partial": "",
        "signature": "Int-\u003eprop-\u003eProperty"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-State.html#",
      "description": {
        "fct-module": "Test.QuickCheck.State",
        "fct-package": "QuickCheck",
        "fct-signature": "module",
        "fct-source": "src/Test-QuickCheck-State.html",
        "fct-type": "module",
        "title": "State"
      },
      "index": {
        "description": "",
        "hierarchy": "Test QuickCheck State",
        "module": "Test.QuickCheck.State",
        "name": "State",
        "normalized": "",
        "package": "QuickCheck",
        "partial": "State",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-State.html#t:State",
      "description": {
        "fct-descr": "\u003cp\u003eState represents QuickCheck's internal state while testing a property.\n The state is made visible to callback functions.\n\u003c/p\u003e",
        "fct-module": "Test.QuickCheck.State",
        "fct-package": "QuickCheck",
        "fct-signature": "data",
        "fct-source": "src/Test-QuickCheck-State.html#State",
        "fct-type": "data",
        "title": "State"
      },
      "index": {
        "description": "State represents QuickCheck internal state while testing property The state is made visible to callback functions",
        "hierarchy": "Test QuickCheck State",
        "module": "Test.QuickCheck.State",
        "name": "State",
        "normalized": "",
        "package": "QuickCheck",
        "partial": "State",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-State.html#v:MkState",
      "description": {
        "fct-module": "Test.QuickCheck.State",
        "fct-package": "QuickCheck",
        "fct-signature": "MkState",
        "fct-source": "src/Test-QuickCheck-State.html#State",
        "fct-type": "function",
        "title": "MkState"
      },
      "index": {
        "description": "",
        "hierarchy": "Test QuickCheck State",
        "module": "Test.QuickCheck.State",
        "name": "MkState",
        "normalized": "",
        "package": "QuickCheck",
        "partial": "Mk State",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-State.html#v:collected",
      "description": {
        "fct-descr": "\u003cp\u003eall labels that have been collected so far\n\u003c/p\u003e",
        "fct-module": "Test.QuickCheck.State",
        "fct-package": "QuickCheck",
        "fct-signature": "[[(String, Int)]]",
        "fct-source": "src/Test-QuickCheck-State.html#State",
        "fct-type": "function",
        "title": "collected"
      },
      "index": {
        "description": "all labels that have been collected so far",
        "hierarchy": "Test QuickCheck State",
        "module": "Test.QuickCheck.State",
        "name": "collected",
        "normalized": "[[(String,Int)]]",
        "package": "QuickCheck",
        "partial": "",
        "signature": "[[(String,Int)]]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-State.html#v:computeSize",
      "description": {
        "fct-descr": "\u003cp\u003ehow to compute the size of test cases from\n \u003ca name=\"tests and \"/\u003ediscarded tests\n\u003c/p\u003e",
        "fct-module": "Test.QuickCheck.State",
        "fct-package": "QuickCheck",
        "fct-signature": "Int -\u003e Int -\u003e Int",
        "fct-source": "src/Test-QuickCheck-State.html#State",
        "fct-type": "function",
        "title": "computeSize"
      },
      "index": {
        "description": "how to compute the size of test cases from discarded tests",
        "hierarchy": "Test QuickCheck State",
        "module": "Test.QuickCheck.State",
        "name": "computeSize",
        "normalized": "Int-\u003eInt-\u003eInt",
        "package": "QuickCheck",
        "partial": "Size",
        "signature": "Int-\u003eInt-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-State.html#v:expectedFailure",
      "description": {
        "fct-descr": "\u003cp\u003eindicates if the property is expected to fail\n\u003c/p\u003e",
        "fct-module": "Test.QuickCheck.State",
        "fct-package": "QuickCheck",
        "fct-signature": "Bool",
        "fct-source": "src/Test-QuickCheck-State.html#State",
        "fct-type": "function",
        "title": "expectedFailure"
      },
      "index": {
        "description": "indicates if the property is expected to fail",
        "hierarchy": "Test QuickCheck State",
        "module": "Test.QuickCheck.State",
        "name": "expectedFailure",
        "normalized": "",
        "package": "QuickCheck",
        "partial": "Failure",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-State.html#v:maxDiscardedTests",
      "description": {
        "fct-descr": "\u003cp\u003emaximum number of tests that can be discarded\n\u003c/p\u003e",
        "fct-module": "Test.QuickCheck.State",
        "fct-package": "QuickCheck",
        "fct-signature": "Int",
        "fct-source": "src/Test-QuickCheck-State.html#State",
        "fct-type": "function",
        "title": "maxDiscardedTests"
      },
      "index": {
        "description": "maximum number of tests that can be discarded",
        "hierarchy": "Test QuickCheck State",
        "module": "Test.QuickCheck.State",
        "name": "maxDiscardedTests",
        "normalized": "",
        "package": "QuickCheck",
        "partial": "Discarded Tests",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-State.html#v:maxSuccessTests",
      "description": {
        "fct-descr": "\u003cp\u003emaximum number of successful tests needed\n\u003c/p\u003e",
        "fct-module": "Test.QuickCheck.State",
        "fct-package": "QuickCheck",
        "fct-signature": "Int",
        "fct-source": "src/Test-QuickCheck-State.html#State",
        "fct-type": "function",
        "title": "maxSuccessTests"
      },
      "index": {
        "description": "maximum number of successful tests needed",
        "hierarchy": "Test QuickCheck State",
        "module": "Test.QuickCheck.State",
        "name": "maxSuccessTests",
        "normalized": "",
        "package": "QuickCheck",
        "partial": "Success Tests",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-State.html#v:numDiscardedTests",
      "description": {
        "fct-descr": "\u003cp\u003ethe current number of discarded tests\n\u003c/p\u003e",
        "fct-module": "Test.QuickCheck.State",
        "fct-package": "QuickCheck",
        "fct-signature": "Int",
        "fct-source": "src/Test-QuickCheck-State.html#State",
        "fct-type": "function",
        "title": "numDiscardedTests"
      },
      "index": {
        "description": "the current number of discarded tests",
        "hierarchy": "Test QuickCheck State",
        "module": "Test.QuickCheck.State",
        "name": "numDiscardedTests",
        "normalized": "",
        "package": "QuickCheck",
        "partial": "Discarded Tests",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-State.html#v:numRecentlyDiscardedTests",
      "description": {
        "fct-descr": "\u003cp\u003ethe number of discarded tests since the last successful test\n\u003c/p\u003e",
        "fct-module": "Test.QuickCheck.State",
        "fct-package": "QuickCheck",
        "fct-signature": "Int",
        "fct-source": "src/Test-QuickCheck-State.html#State",
        "fct-type": "function",
        "title": "numRecentlyDiscardedTests"
      },
      "index": {
        "description": "the number of discarded tests since the last successful test",
        "hierarchy": "Test QuickCheck State",
        "module": "Test.QuickCheck.State",
        "name": "numRecentlyDiscardedTests",
        "normalized": "",
        "package": "QuickCheck",
        "partial": "Recently Discarded Tests",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-State.html#v:numSuccessShrinks",
      "description": {
        "fct-descr": "\u003cp\u003enumber of successful shrinking steps so far\n\u003c/p\u003e",
        "fct-module": "Test.QuickCheck.State",
        "fct-package": "QuickCheck",
        "fct-signature": "Int",
        "fct-source": "src/Test-QuickCheck-State.html#State",
        "fct-type": "function",
        "title": "numSuccessShrinks"
      },
      "index": {
        "description": "number of successful shrinking steps so far",
        "hierarchy": "Test QuickCheck State",
        "module": "Test.QuickCheck.State",
        "name": "numSuccessShrinks",
        "normalized": "",
        "package": "QuickCheck",
        "partial": "Success Shrinks",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-State.html#v:numSuccessTests",
      "description": {
        "fct-descr": "\u003cp\u003ethe current number of tests that have succeeded\n\u003c/p\u003e",
        "fct-module": "Test.QuickCheck.State",
        "fct-package": "QuickCheck",
        "fct-signature": "Int",
        "fct-source": "src/Test-QuickCheck-State.html#State",
        "fct-type": "function",
        "title": "numSuccessTests"
      },
      "index": {
        "description": "the current number of tests that have succeeded",
        "hierarchy": "Test QuickCheck State",
        "module": "Test.QuickCheck.State",
        "name": "numSuccessTests",
        "normalized": "",
        "package": "QuickCheck",
        "partial": "Success Tests",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-State.html#v:numTotTryShrinks",
      "description": {
        "fct-descr": "\u003cp\u003etotal number of failed shrinking steps\n\u003c/p\u003e",
        "fct-module": "Test.QuickCheck.State",
        "fct-package": "QuickCheck",
        "fct-signature": "Int",
        "fct-source": "src/Test-QuickCheck-State.html#State",
        "fct-type": "function",
        "title": "numTotTryShrinks"
      },
      "index": {
        "description": "total number of failed shrinking steps",
        "hierarchy": "Test QuickCheck State",
        "module": "Test.QuickCheck.State",
        "name": "numTotTryShrinks",
        "normalized": "",
        "package": "QuickCheck",
        "partial": "Tot Try Shrinks",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-State.html#v:numTryShrinks",
      "description": {
        "fct-descr": "\u003cp\u003enumber of failed shrinking steps since the last successful shrink\n\u003c/p\u003e",
        "fct-module": "Test.QuickCheck.State",
        "fct-package": "QuickCheck",
        "fct-signature": "Int",
        "fct-source": "src/Test-QuickCheck-State.html#State",
        "fct-type": "function",
        "title": "numTryShrinks"
      },
      "index": {
        "description": "number of failed shrinking steps since the last successful shrink",
        "hierarchy": "Test QuickCheck State",
        "module": "Test.QuickCheck.State",
        "name": "numTryShrinks",
        "normalized": "",
        "package": "QuickCheck",
        "partial": "Try Shrinks",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-State.html#v:randomSeed",
      "description": {
        "fct-descr": "\u003cp\u003ethe current random seed\n\u003c/p\u003e",
        "fct-module": "Test.QuickCheck.State",
        "fct-package": "QuickCheck",
        "fct-signature": "StdGen",
        "fct-source": "src/Test-QuickCheck-State.html#State",
        "fct-type": "function",
        "title": "randomSeed"
      },
      "index": {
        "description": "the current random seed",
        "hierarchy": "Test QuickCheck State",
        "module": "Test.QuickCheck.State",
        "name": "randomSeed",
        "normalized": "",
        "package": "QuickCheck",
        "partial": "Seed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-State.html#v:terminal",
      "description": {
        "fct-descr": "\u003cp\u003ethe current terminal\n\u003c/p\u003e",
        "fct-module": "Test.QuickCheck.State",
        "fct-package": "QuickCheck",
        "fct-signature": "Terminal",
        "fct-source": "src/Test-QuickCheck-State.html#State",
        "fct-type": "function",
        "title": "terminal"
      },
      "index": {
        "description": "the current terminal",
        "hierarchy": "Test QuickCheck State",
        "module": "Test.QuickCheck.State",
        "name": "terminal",
        "normalized": "",
        "package": "QuickCheck",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Test.html#",
      "description": {
        "fct-module": "Test.QuickCheck.Test",
        "fct-package": "QuickCheck",
        "fct-signature": "module",
        "fct-source": "src/Test-QuickCheck-Test.html",
        "fct-type": "module",
        "title": "Test"
      },
      "index": {
        "description": "",
        "hierarchy": "Test QuickCheck Test",
        "module": "Test.QuickCheck.Test",
        "name": "Test",
        "normalized": "",
        "package": "QuickCheck",
        "partial": "Test",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Test.html#t:Args",
      "description": {
        "fct-descr": "\u003cp\u003eArgs specifies arguments to the QuickCheck driver\n\u003c/p\u003e",
        "fct-module": "Test.QuickCheck.Test",
        "fct-package": "QuickCheck",
        "fct-signature": "data",
        "fct-source": "src/Test-QuickCheck-Test.html#Args",
        "fct-type": "data",
        "title": "Args"
      },
      "index": {
        "description": "Args specifies arguments to the QuickCheck driver",
        "hierarchy": "Test QuickCheck Test",
        "module": "Test.QuickCheck.Test",
        "name": "Args",
        "normalized": "",
        "package": "QuickCheck",
        "partial": "Args",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Test.html#t:Result",
      "description": {
        "fct-descr": "\u003cp\u003eResult represents the test result\n\u003c/p\u003e",
        "fct-module": "Test.QuickCheck.Test",
        "fct-package": "QuickCheck",
        "fct-signature": "data",
        "fct-source": "src/Test-QuickCheck-Test.html#Result",
        "fct-type": "data",
        "title": "Result"
      },
      "index": {
        "description": "Result represents the test result",
        "hierarchy": "Test QuickCheck Test",
        "module": "Test.QuickCheck.Test",
        "name": "Result",
        "normalized": "",
        "package": "QuickCheck",
        "partial": "Result",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Test.html#v:Args",
      "description": {
        "fct-module": "Test.QuickCheck.Test",
        "fct-package": "QuickCheck",
        "fct-signature": "Args",
        "fct-source": "src/Test-QuickCheck-Test.html#Args",
        "fct-type": "function",
        "title": "Args"
      },
      "index": {
        "description": "",
        "hierarchy": "Test QuickCheck Test",
        "module": "Test.QuickCheck.Test",
        "name": "Args",
        "normalized": "",
        "package": "QuickCheck",
        "partial": "Args",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Test.html#v:Failure",
      "description": {
        "fct-module": "Test.QuickCheck.Test",
        "fct-package": "QuickCheck",
        "fct-signature": "Failure",
        "fct-source": "src/Test-QuickCheck-Test.html#Result",
        "fct-type": "function",
        "title": "Failure"
      },
      "index": {
        "description": "",
        "hierarchy": "Test QuickCheck Test",
        "module": "Test.QuickCheck.Test",
        "name": "Failure",
        "normalized": "",
        "package": "QuickCheck",
        "partial": "Failure",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Test.html#v:GaveUp",
      "description": {
        "fct-module": "Test.QuickCheck.Test",
        "fct-package": "QuickCheck",
        "fct-signature": "GaveUp",
        "fct-source": "src/Test-QuickCheck-Test.html#Result",
        "fct-type": "function",
        "title": "GaveUp"
      },
      "index": {
        "description": "",
        "hierarchy": "Test QuickCheck Test",
        "module": "Test.QuickCheck.Test",
        "name": "GaveUp",
        "normalized": "",
        "package": "QuickCheck",
        "partial": "Gave Up",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Test.html#v:NoExpectedFailure",
      "description": {
        "fct-module": "Test.QuickCheck.Test",
        "fct-package": "QuickCheck",
        "fct-signature": "NoExpectedFailure",
        "fct-source": "src/Test-QuickCheck-Test.html#Result",
        "fct-type": "function",
        "title": "NoExpectedFailure"
      },
      "index": {
        "description": "",
        "hierarchy": "Test QuickCheck Test",
        "module": "Test.QuickCheck.Test",
        "name": "NoExpectedFailure",
        "normalized": "",
        "package": "QuickCheck",
        "partial": "No Expected Failure",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Test.html#v:Success",
      "description": {
        "fct-module": "Test.QuickCheck.Test",
        "fct-package": "QuickCheck",
        "fct-signature": "Success",
        "fct-source": "src/Test-QuickCheck-Test.html#Result",
        "fct-type": "function",
        "title": "Success"
      },
      "index": {
        "description": "",
        "hierarchy": "Test QuickCheck Test",
        "module": "Test.QuickCheck.Test",
        "name": "Success",
        "normalized": "",
        "package": "QuickCheck",
        "partial": "Success",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Test.html#v:callbackPostFinalFailure",
      "description": {
        "fct-module": "Test.QuickCheck.Test",
        "fct-package": "QuickCheck",
        "fct-signature": "State -\u003e Result -\u003e IO ()",
        "fct-source": "src/Test-QuickCheck-Test.html#callbackPostFinalFailure",
        "fct-type": "function",
        "title": "callbackPostFinalFailure"
      },
      "index": {
        "description": "",
        "hierarchy": "Test QuickCheck Test",
        "module": "Test.QuickCheck.Test",
        "name": "callbackPostFinalFailure",
        "normalized": "State-\u003eResult-\u003eIO()",
        "package": "QuickCheck",
        "partial": "Post Final Failure",
        "signature": "State-\u003eResult-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Test.html#v:callbackPostTest",
      "description": {
        "fct-module": "Test.QuickCheck.Test",
        "fct-package": "QuickCheck",
        "fct-signature": "State -\u003e Result -\u003e IO ()",
        "fct-source": "src/Test-QuickCheck-Test.html#callbackPostTest",
        "fct-type": "function",
        "title": "callbackPostTest"
      },
      "index": {
        "description": "",
        "hierarchy": "Test QuickCheck Test",
        "module": "Test.QuickCheck.Test",
        "name": "callbackPostTest",
        "normalized": "State-\u003eResult-\u003eIO()",
        "package": "QuickCheck",
        "partial": "Post Test",
        "signature": "State-\u003eResult-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Test.html#v:chatty",
      "description": {
        "fct-descr": "\u003cp\u003ewhether to print anything\n\u003c/p\u003e",
        "fct-module": "Test.QuickCheck.Test",
        "fct-package": "QuickCheck",
        "fct-signature": "Bool",
        "fct-source": "src/Test-QuickCheck-Test.html#Args",
        "fct-type": "function",
        "title": "chatty"
      },
      "index": {
        "description": "whether to print anything",
        "hierarchy": "Test QuickCheck Test",
        "module": "Test.QuickCheck.Test",
        "name": "chatty",
        "normalized": "",
        "package": "QuickCheck",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Test.html#v:doneTesting",
      "description": {
        "fct-module": "Test.QuickCheck.Test",
        "fct-package": "QuickCheck",
        "fct-signature": "State -\u003e (StdGen -\u003e Int -\u003e Prop) -\u003e IO Result",
        "fct-source": "src/Test-QuickCheck-Test.html#doneTesting",
        "fct-type": "function",
        "title": "doneTesting"
      },
      "index": {
        "description": "",
        "hierarchy": "Test QuickCheck Test",
        "module": "Test.QuickCheck.Test",
        "name": "doneTesting",
        "normalized": "State-\u003e(StdGen-\u003eInt-\u003eProp)-\u003eIO Result",
        "package": "QuickCheck",
        "partial": "Testing",
        "signature": "State-\u003e(StdGen-\u003eInt-\u003eProp)-\u003eIO Result"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Test.html#v:foundFailure",
      "description": {
        "fct-module": "Test.QuickCheck.Test",
        "fct-package": "QuickCheck",
        "fct-signature": "State -\u003e Result -\u003e [Rose Result] -\u003e IO Int",
        "fct-source": "src/Test-QuickCheck-Test.html#foundFailure",
        "fct-type": "function",
        "title": "foundFailure"
      },
      "index": {
        "description": "",
        "hierarchy": "Test QuickCheck Test",
        "module": "Test.QuickCheck.Test",
        "name": "foundFailure",
        "normalized": "State-\u003eResult-\u003e[Rose Result]-\u003eIO Int",
        "package": "QuickCheck",
        "partial": "Failure",
        "signature": "State-\u003eResult-\u003e[Rose Result]-\u003eIO Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Test.html#v:giveUp",
      "description": {
        "fct-module": "Test.QuickCheck.Test",
        "fct-package": "QuickCheck",
        "fct-signature": "State -\u003e (StdGen -\u003e Int -\u003e Prop) -\u003e IO Result",
        "fct-source": "src/Test-QuickCheck-Test.html#giveUp",
        "fct-type": "function",
        "title": "giveUp"
      },
      "index": {
        "description": "",
        "hierarchy": "Test QuickCheck Test",
        "module": "Test.QuickCheck.Test",
        "name": "giveUp",
        "normalized": "State-\u003e(StdGen-\u003eInt-\u003eProp)-\u003eIO Result",
        "package": "QuickCheck",
        "partial": "Up",
        "signature": "State-\u003e(StdGen-\u003eInt-\u003eProp)-\u003eIO Result"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Test.html#v:interrupted",
      "description": {
        "fct-descr": "\u003cp\u003edid the user press ctrl-C?\n\u003c/p\u003e",
        "fct-module": "Test.QuickCheck.Test",
        "fct-package": "QuickCheck",
        "fct-signature": "Bool",
        "fct-source": "src/Test-QuickCheck-Test.html#Result",
        "fct-type": "function",
        "title": "interrupted"
      },
      "index": {
        "description": "did the user press ctrl-C",
        "hierarchy": "Test QuickCheck Test",
        "module": "Test.QuickCheck.Test",
        "name": "interrupted",
        "normalized": "",
        "package": "QuickCheck",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Test.html#v:isSuccess",
      "description": {
        "fct-descr": "\u003cp\u003eisSuccess checks if the test run result was a success\n\u003c/p\u003e",
        "fct-module": "Test.QuickCheck.Test",
        "fct-package": "QuickCheck",
        "fct-signature": "Result -\u003e Bool",
        "fct-source": "src/Test-QuickCheck-Test.html#isSuccess",
        "fct-type": "function",
        "title": "isSuccess"
      },
      "index": {
        "description": "isSuccess checks if the test run result was success",
        "hierarchy": "Test QuickCheck Test",
        "module": "Test.QuickCheck.Test",
        "name": "isSuccess",
        "normalized": "Result-\u003eBool",
        "package": "QuickCheck",
        "partial": "Success",
        "signature": "Result-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Test.html#v:labels",
      "description": {
        "fct-descr": "\u003cp\u003elabels and frequencies found during all successful tests\n\u003c/p\u003e\u003cp\u003elabels and frequencies found during all successful tests\n\u003c/p\u003e\u003cp\u003elabels and frequencies found during all tests\n\u003c/p\u003e\u003cp\u003elabels and frequencies found during all tests\n\u003c/p\u003e",
        "fct-module": "Test.QuickCheck.Test",
        "fct-package": "QuickCheck",
        "fct-signature": "[(String, Int)]",
        "fct-source": "src/Test-QuickCheck-Test.html#Result",
        "fct-type": "function",
        "title": "labels"
      },
      "index": {
        "description": "labels and frequencies found during all successful tests labels and frequencies found during all successful tests labels and frequencies found during all tests labels and frequencies found during all tests",
        "hierarchy": "Test QuickCheck Test",
        "module": "Test.QuickCheck.Test",
        "name": "labels",
        "normalized": "[(String,Int)]",
        "package": "QuickCheck",
        "partial": "",
        "signature": "[(String,Int)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Test.html#v:localMin",
      "description": {
        "fct-module": "Test.QuickCheck.Test",
        "fct-package": "QuickCheck",
        "fct-signature": "State -\u003e Result -\u003e [Rose Result] -\u003e IO Int",
        "fct-source": "src/Test-QuickCheck-Test.html#localMin",
        "fct-type": "function",
        "title": "localMin"
      },
      "index": {
        "description": "",
        "hierarchy": "Test QuickCheck Test",
        "module": "Test.QuickCheck.Test",
        "name": "localMin",
        "normalized": "State-\u003eResult-\u003e[Rose Result]-\u003eIO Int",
        "package": "QuickCheck",
        "partial": "Min",
        "signature": "State-\u003eResult-\u003e[Rose Result]-\u003eIO Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Test.html#v:localMin-39-",
      "description": {
        "fct-module": "Test.QuickCheck.Test",
        "fct-package": "QuickCheck",
        "fct-signature": "State -\u003e Result -\u003e [Rose Result] -\u003e IO Int",
        "fct-source": "src/Test-QuickCheck-Test.html#localMin%27",
        "fct-type": "function",
        "title": "localMin'"
      },
      "index": {
        "description": "",
        "hierarchy": "Test QuickCheck Test",
        "module": "Test.QuickCheck.Test",
        "name": "localMin'",
        "normalized": "State-\u003eResult-\u003e[Rose Result]-\u003eIO Int",
        "package": "QuickCheck",
        "partial": "Min'",
        "signature": "State-\u003eResult-\u003e[Rose Result]-\u003eIO Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Test.html#v:localMinFound",
      "description": {
        "fct-module": "Test.QuickCheck.Test",
        "fct-package": "QuickCheck",
        "fct-signature": "State -\u003e Result -\u003e IO Int",
        "fct-source": "src/Test-QuickCheck-Test.html#localMinFound",
        "fct-type": "function",
        "title": "localMinFound"
      },
      "index": {
        "description": "",
        "hierarchy": "Test QuickCheck Test",
        "module": "Test.QuickCheck.Test",
        "name": "localMinFound",
        "normalized": "State-\u003eResult-\u003eIO Int",
        "package": "QuickCheck",
        "partial": "Min Found",
        "signature": "State-\u003eResult-\u003eIO Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Test.html#v:maxDiscardRatio",
      "description": {
        "fct-descr": "\u003cp\u003emaximum number of discarded tests per successful test before giving up\n\u003c/p\u003e",
        "fct-module": "Test.QuickCheck.Test",
        "fct-package": "QuickCheck",
        "fct-signature": "Int",
        "fct-source": "src/Test-QuickCheck-Test.html#Args",
        "fct-type": "function",
        "title": "maxDiscardRatio"
      },
      "index": {
        "description": "maximum number of discarded tests per successful test before giving up",
        "hierarchy": "Test QuickCheck Test",
        "module": "Test.QuickCheck.Test",
        "name": "maxDiscardRatio",
        "normalized": "",
        "package": "QuickCheck",
        "partial": "Discard Ratio",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Test.html#v:maxSize",
      "description": {
        "fct-descr": "\u003cp\u003esize to use for the biggest test cases\n\u003c/p\u003e",
        "fct-module": "Test.QuickCheck.Test",
        "fct-package": "QuickCheck",
        "fct-signature": "Int",
        "fct-source": "src/Test-QuickCheck-Test.html#Args",
        "fct-type": "function",
        "title": "maxSize"
      },
      "index": {
        "description": "size to use for the biggest test cases",
        "hierarchy": "Test QuickCheck Test",
        "module": "Test.QuickCheck.Test",
        "name": "maxSize",
        "normalized": "",
        "package": "QuickCheck",
        "partial": "Size",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Test.html#v:maxSuccess",
      "description": {
        "fct-descr": "\u003cp\u003emaximum number of successful tests before succeeding\n\u003c/p\u003e",
        "fct-module": "Test.QuickCheck.Test",
        "fct-package": "QuickCheck",
        "fct-signature": "Int",
        "fct-source": "src/Test-QuickCheck-Test.html#Args",
        "fct-type": "function",
        "title": "maxSuccess"
      },
      "index": {
        "description": "maximum number of successful tests before succeeding",
        "hierarchy": "Test QuickCheck Test",
        "module": "Test.QuickCheck.Test",
        "name": "maxSuccess",
        "normalized": "",
        "package": "QuickCheck",
        "partial": "Success",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Test.html#v:numShrinks",
      "description": {
        "fct-descr": "\u003cp\u003enumber of successful shrinking steps performed\n\u003c/p\u003e",
        "fct-module": "Test.QuickCheck.Test",
        "fct-package": "QuickCheck",
        "fct-signature": "Int",
        "fct-source": "src/Test-QuickCheck-Test.html#Result",
        "fct-type": "function",
        "title": "numShrinks"
      },
      "index": {
        "description": "number of successful shrinking steps performed",
        "hierarchy": "Test QuickCheck Test",
        "module": "Test.QuickCheck.Test",
        "name": "numShrinks",
        "normalized": "",
        "package": "QuickCheck",
        "partial": "Shrinks",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Test.html#v:numTests",
      "description": {
        "fct-descr": "\u003cp\u003enumber of tests performed\n\u003c/p\u003e\u003cp\u003enumber of tests performed\n\u003c/p\u003e\u003cp\u003enumber of successful tests performed\n\u003c/p\u003e\u003cp\u003enumber of successful tests performed\n\u003c/p\u003e",
        "fct-module": "Test.QuickCheck.Test",
        "fct-package": "QuickCheck",
        "fct-signature": "Int",
        "fct-source": "src/Test-QuickCheck-Test.html#Result",
        "fct-type": "function",
        "title": "numTests"
      },
      "index": {
        "description": "number of tests performed number of tests performed number of successful tests performed number of successful tests performed",
        "hierarchy": "Test QuickCheck Test",
        "module": "Test.QuickCheck.Test",
        "name": "numTests",
        "normalized": "",
        "package": "QuickCheck",
        "partial": "Tests",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Test.html#v:output",
      "description": {
        "fct-descr": "\u003cp\u003eprinted output\n\u003c/p\u003e\u003cp\u003eprinted output\n\u003c/p\u003e\u003cp\u003eprinted output\n\u003c/p\u003e\u003cp\u003eprinted output\n\u003c/p\u003e",
        "fct-module": "Test.QuickCheck.Test",
        "fct-package": "QuickCheck",
        "fct-signature": "String",
        "fct-source": "src/Test-QuickCheck-Test.html#Result",
        "fct-type": "function",
        "title": "output"
      },
      "index": {
        "description": "printed output printed output printed output printed output",
        "hierarchy": "Test QuickCheck Test",
        "module": "Test.QuickCheck.Test",
        "name": "output",
        "normalized": "",
        "package": "QuickCheck",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Test.html#v:quickCheck",
      "description": {
        "fct-descr": "\u003cp\u003eTests a property and prints the results to \u003ccode\u003estdout\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Test.QuickCheck.Test",
        "fct-package": "QuickCheck",
        "fct-signature": "prop -\u003e IO ()",
        "fct-source": "src/Test-QuickCheck-Test.html#quickCheck",
        "fct-type": "function",
        "title": "quickCheck"
      },
      "index": {
        "description": "Tests property and prints the results to stdout",
        "hierarchy": "Test QuickCheck Test",
        "module": "Test.QuickCheck.Test",
        "name": "quickCheck",
        "normalized": "a-\u003eIO()",
        "package": "QuickCheck",
        "partial": "Check",
        "signature": "prop-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Test.html#v:quickCheckResult",
      "description": {
        "fct-descr": "\u003cp\u003eTests a property, produces a test result, and prints the results to \u003ccode\u003estdout\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Test.QuickCheck.Test",
        "fct-package": "QuickCheck",
        "fct-signature": "prop -\u003e IO Result",
        "fct-source": "src/Test-QuickCheck-Test.html#quickCheckResult",
        "fct-type": "function",
        "title": "quickCheckResult"
      },
      "index": {
        "description": "Tests property produces test result and prints the results to stdout",
        "hierarchy": "Test QuickCheck Test",
        "module": "Test.QuickCheck.Test",
        "name": "quickCheckResult",
        "normalized": "a-\u003eIO Result",
        "package": "QuickCheck",
        "partial": "Check Result",
        "signature": "prop-\u003eIO Result"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Test.html#v:quickCheckWith",
      "description": {
        "fct-descr": "\u003cp\u003eTests a property, using test arguments, and prints the results to \u003ccode\u003estdout\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Test.QuickCheck.Test",
        "fct-package": "QuickCheck",
        "fct-signature": "Args -\u003e prop -\u003e IO ()",
        "fct-source": "src/Test-QuickCheck-Test.html#quickCheckWith",
        "fct-type": "function",
        "title": "quickCheckWith"
      },
      "index": {
        "description": "Tests property using test arguments and prints the results to stdout",
        "hierarchy": "Test QuickCheck Test",
        "module": "Test.QuickCheck.Test",
        "name": "quickCheckWith",
        "normalized": "Args-\u003ea-\u003eIO()",
        "package": "QuickCheck",
        "partial": "Check With",
        "signature": "Args-\u003eprop-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Test.html#v:quickCheckWithResult",
      "description": {
        "fct-descr": "\u003cp\u003eTests a property, using test arguments, produces a test result, and prints the results to \u003ccode\u003estdout\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Test.QuickCheck.Test",
        "fct-package": "QuickCheck",
        "fct-signature": "Args -\u003e prop -\u003e IO Result",
        "fct-source": "src/Test-QuickCheck-Test.html#quickCheckWithResult",
        "fct-type": "function",
        "title": "quickCheckWithResult"
      },
      "index": {
        "description": "Tests property using test arguments produces test result and prints the results to stdout",
        "hierarchy": "Test QuickCheck Test",
        "module": "Test.QuickCheck.Test",
        "name": "quickCheckWithResult",
        "normalized": "Args-\u003ea-\u003eIO Result",
        "package": "QuickCheck",
        "partial": "Check With Result",
        "signature": "Args-\u003eprop-\u003eIO Result"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Test.html#v:reason",
      "description": {
        "fct-descr": "\u003cp\u003ewhat was the reason\n\u003c/p\u003e",
        "fct-module": "Test.QuickCheck.Test",
        "fct-package": "QuickCheck",
        "fct-signature": "String",
        "fct-source": "src/Test-QuickCheck-Test.html#Result",
        "fct-type": "function",
        "title": "reason"
      },
      "index": {
        "description": "what was the reason",
        "hierarchy": "Test QuickCheck Test",
        "module": "Test.QuickCheck.Test",
        "name": "reason",
        "normalized": "",
        "package": "QuickCheck",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Test.html#v:replay",
      "description": {
        "fct-descr": "\u003cp\u003eshould we replay a previous test?\n\u003c/p\u003e",
        "fct-module": "Test.QuickCheck.Test",
        "fct-package": "QuickCheck",
        "fct-signature": "Maybe (StdGen, Int)",
        "fct-source": "src/Test-QuickCheck-Test.html#Args",
        "fct-type": "function",
        "title": "replay"
      },
      "index": {
        "description": "should we replay previous test",
        "hierarchy": "Test QuickCheck Test",
        "module": "Test.QuickCheck.Test",
        "name": "replay",
        "normalized": "Maybe(StdGen,Int)",
        "package": "QuickCheck",
        "partial": "",
        "signature": "Maybe(StdGen,Int)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Test.html#v:runATest",
      "description": {
        "fct-module": "Test.QuickCheck.Test",
        "fct-package": "QuickCheck",
        "fct-signature": "State -\u003e (StdGen -\u003e Int -\u003e Prop) -\u003e IO Result",
        "fct-source": "src/Test-QuickCheck-Test.html#runATest",
        "fct-type": "function",
        "title": "runATest"
      },
      "index": {
        "description": "",
        "hierarchy": "Test QuickCheck Test",
        "module": "Test.QuickCheck.Test",
        "name": "runATest",
        "normalized": "State-\u003e(StdGen-\u003eInt-\u003eProp)-\u003eIO Result",
        "package": "QuickCheck",
        "partial": "ATest",
        "signature": "State-\u003e(StdGen-\u003eInt-\u003eProp)-\u003eIO Result"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Test.html#v:safely",
      "description": {
        "fct-module": "Test.QuickCheck.Test",
        "fct-package": "QuickCheck",
        "fct-signature": "State -\u003e IO () -\u003e IO ()",
        "fct-source": "src/Test-QuickCheck-Test.html#safely",
        "fct-type": "function",
        "title": "safely"
      },
      "index": {
        "description": "",
        "hierarchy": "Test QuickCheck Test",
        "module": "Test.QuickCheck.Test",
        "name": "safely",
        "normalized": "State-\u003eIO()-\u003eIO()",
        "package": "QuickCheck",
        "partial": "",
        "signature": "State-\u003eIO()-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Test.html#v:stdArgs",
      "description": {
        "fct-descr": "\u003cp\u003estdArgs are the default test arguments used\n\u003c/p\u003e",
        "fct-module": "Test.QuickCheck.Test",
        "fct-package": "QuickCheck",
        "fct-signature": "Args",
        "fct-source": "src/Test-QuickCheck-Test.html#stdArgs",
        "fct-type": "function",
        "title": "stdArgs"
      },
      "index": {
        "description": "stdArgs are the default test arguments used",
        "hierarchy": "Test QuickCheck Test",
        "module": "Test.QuickCheck.Test",
        "name": "stdArgs",
        "normalized": "",
        "package": "QuickCheck",
        "partial": "Args",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Test.html#v:success",
      "description": {
        "fct-module": "Test.QuickCheck.Test",
        "fct-package": "QuickCheck",
        "fct-signature": "State -\u003e IO ()",
        "fct-source": "src/Test-QuickCheck-Test.html#success",
        "fct-type": "function",
        "title": "success"
      },
      "index": {
        "description": "",
        "hierarchy": "Test QuickCheck Test",
        "module": "Test.QuickCheck.Test",
        "name": "success",
        "normalized": "State-\u003eIO()",
        "package": "QuickCheck",
        "partial": "",
        "signature": "State-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Test.html#v:summary",
      "description": {
        "fct-module": "Test.QuickCheck.Test",
        "fct-package": "QuickCheck",
        "fct-signature": "State -\u003e [(String, Int)]",
        "fct-source": "src/Test-QuickCheck-Test.html#summary",
        "fct-type": "function",
        "title": "summary"
      },
      "index": {
        "description": "",
        "hierarchy": "Test QuickCheck Test",
        "module": "Test.QuickCheck.Test",
        "name": "summary",
        "normalized": "State-\u003e[(String,Int)]",
        "package": "QuickCheck",
        "partial": "",
        "signature": "State-\u003e[(String,Int)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Test.html#v:test",
      "description": {
        "fct-module": "Test.QuickCheck.Test",
        "fct-package": "QuickCheck",
        "fct-signature": "State -\u003e (StdGen -\u003e Int -\u003e Prop) -\u003e IO Result",
        "fct-source": "src/Test-QuickCheck-Test.html#test",
        "fct-type": "function",
        "title": "test"
      },
      "index": {
        "description": "",
        "hierarchy": "Test QuickCheck Test",
        "module": "Test.QuickCheck.Test",
        "name": "test",
        "normalized": "State-\u003e(StdGen-\u003eInt-\u003eProp)-\u003eIO Result",
        "package": "QuickCheck",
        "partial": "",
        "signature": "State-\u003e(StdGen-\u003eInt-\u003eProp)-\u003eIO Result"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Test.html#v:usedSeed",
      "description": {
        "fct-descr": "\u003cp\u003ewhat seed was used\n\u003c/p\u003e",
        "fct-module": "Test.QuickCheck.Test",
        "fct-package": "QuickCheck",
        "fct-signature": "StdGen",
        "fct-source": "src/Test-QuickCheck-Test.html#Result",
        "fct-type": "function",
        "title": "usedSeed"
      },
      "index": {
        "description": "what seed was used",
        "hierarchy": "Test QuickCheck Test",
        "module": "Test.QuickCheck.Test",
        "name": "usedSeed",
        "normalized": "",
        "package": "QuickCheck",
        "partial": "Seed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Test.html#v:usedSize",
      "description": {
        "fct-descr": "\u003cp\u003ewhat was the test size\n\u003c/p\u003e",
        "fct-module": "Test.QuickCheck.Test",
        "fct-package": "QuickCheck",
        "fct-signature": "Int",
        "fct-source": "src/Test-QuickCheck-Test.html#Result",
        "fct-type": "function",
        "title": "usedSize"
      },
      "index": {
        "description": "what was the test size",
        "hierarchy": "Test QuickCheck Test",
        "module": "Test.QuickCheck.Test",
        "name": "usedSize",
        "normalized": "",
        "package": "QuickCheck",
        "partial": "Size",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Test.html#v:verboseCheck",
      "description": {
        "fct-descr": "\u003cp\u003eTests a property and prints the results and all test cases generated to \u003ccode\u003estdout\u003c/code\u003e.\n This is just a convenience function that means the same as \u003ccode\u003e\u003ca\u003equickCheck\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003e.\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003everbose\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Test.QuickCheck.Test",
        "fct-package": "QuickCheck",
        "fct-signature": "prop -\u003e IO ()",
        "fct-source": "src/Test-QuickCheck-Test.html#verboseCheck",
        "fct-type": "function",
        "title": "verboseCheck"
      },
      "index": {
        "description": "Tests property and prints the results and all test cases generated to stdout This is just convenience function that means the same as quickCheck verbose",
        "hierarchy": "Test QuickCheck Test",
        "module": "Test.QuickCheck.Test",
        "name": "verboseCheck",
        "normalized": "a-\u003eIO()",
        "package": "QuickCheck",
        "partial": "Check",
        "signature": "prop-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Test.html#v:verboseCheckResult",
      "description": {
        "fct-descr": "\u003cp\u003eTests a property, produces a test result, and prints the results and all test cases generated to \u003ccode\u003estdout\u003c/code\u003e.\n This is just a convenience function that combines \u003ccode\u003e\u003ca\u003equickCheckResult\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003everbose\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Test.QuickCheck.Test",
        "fct-package": "QuickCheck",
        "fct-signature": "prop -\u003e IO Result",
        "fct-source": "src/Test-QuickCheck-Test.html#verboseCheckResult",
        "fct-type": "function",
        "title": "verboseCheckResult"
      },
      "index": {
        "description": "Tests property produces test result and prints the results and all test cases generated to stdout This is just convenience function that combines quickCheckResult and verbose",
        "hierarchy": "Test QuickCheck Test",
        "module": "Test.QuickCheck.Test",
        "name": "verboseCheckResult",
        "normalized": "a-\u003eIO Result",
        "package": "QuickCheck",
        "partial": "Check Result",
        "signature": "prop-\u003eIO Result"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Test.html#v:verboseCheckWith",
      "description": {
        "fct-descr": "\u003cp\u003eTests a property, using test arguments, and prints the results and all test cases generated to \u003ccode\u003estdout\u003c/code\u003e.\n This is just a convenience function that combines \u003ccode\u003e\u003ca\u003equickCheckWith\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003everbose\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Test.QuickCheck.Test",
        "fct-package": "QuickCheck",
        "fct-signature": "Args -\u003e prop -\u003e IO ()",
        "fct-source": "src/Test-QuickCheck-Test.html#verboseCheckWith",
        "fct-type": "function",
        "title": "verboseCheckWith"
      },
      "index": {
        "description": "Tests property using test arguments and prints the results and all test cases generated to stdout This is just convenience function that combines quickCheckWith and verbose",
        "hierarchy": "Test QuickCheck Test",
        "module": "Test.QuickCheck.Test",
        "name": "verboseCheckWith",
        "normalized": "Args-\u003ea-\u003eIO()",
        "package": "QuickCheck",
        "partial": "Check With",
        "signature": "Args-\u003eprop-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Test.html#v:verboseCheckWithResult",
      "description": {
        "fct-descr": "\u003cp\u003eTests a property, using test arguments, produces a test result, and prints the results and all test cases generated to \u003ccode\u003estdout\u003c/code\u003e.\n This is just a convenience function that combines \u003ccode\u003e\u003ca\u003equickCheckWithResult\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003everbose\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Test.QuickCheck.Test",
        "fct-package": "QuickCheck",
        "fct-signature": "Args -\u003e prop -\u003e IO Result",
        "fct-source": "src/Test-QuickCheck-Test.html#verboseCheckWithResult",
        "fct-type": "function",
        "title": "verboseCheckWithResult"
      },
      "index": {
        "description": "Tests property using test arguments produces test result and prints the results and all test cases generated to stdout This is just convenience function that combines quickCheckWithResult and verbose",
        "hierarchy": "Test QuickCheck Test",
        "module": "Test.QuickCheck.Test",
        "name": "verboseCheckWithResult",
        "normalized": "Args-\u003ea-\u003eIO Result",
        "package": "QuickCheck",
        "partial": "Check With Result",
        "signature": "Args-\u003eprop-\u003eIO Result"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Text.html#",
      "description": {
        "fct-module": "Test.QuickCheck.Text",
        "fct-package": "QuickCheck",
        "fct-signature": "module",
        "fct-source": "src/Test-QuickCheck-Text.html",
        "fct-type": "module",
        "title": "Text"
      },
      "index": {
        "description": "",
        "hierarchy": "Test QuickCheck Text",
        "module": "Test.QuickCheck.Text",
        "name": "Text",
        "normalized": "",
        "package": "QuickCheck",
        "partial": "Text",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Text.html#t:Str",
      "description": {
        "fct-module": "Test.QuickCheck.Text",
        "fct-package": "QuickCheck",
        "fct-signature": "newtype",
        "fct-source": "src/Test-QuickCheck-Text.html#Str",
        "fct-type": "newtype",
        "title": "Str"
      },
      "index": {
        "description": "",
        "hierarchy": "Test QuickCheck Text",
        "module": "Test.QuickCheck.Text",
        "name": "Str",
        "normalized": "",
        "package": "QuickCheck",
        "partial": "Str",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Text.html#t:Terminal",
      "description": {
        "fct-module": "Test.QuickCheck.Text",
        "fct-package": "QuickCheck",
        "fct-signature": "data",
        "fct-source": "src/Test-QuickCheck-Text.html#Terminal",
        "fct-type": "data",
        "title": "Terminal"
      },
      "index": {
        "description": "",
        "hierarchy": "Test QuickCheck Text",
        "module": "Test.QuickCheck.Text",
        "name": "Terminal",
        "normalized": "",
        "package": "QuickCheck",
        "partial": "Terminal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Text.html#v:MkStr",
      "description": {
        "fct-module": "Test.QuickCheck.Text",
        "fct-package": "QuickCheck",
        "fct-signature": "MkStr String",
        "fct-source": "src/Test-QuickCheck-Text.html#Str",
        "fct-type": "function",
        "title": "MkStr"
      },
      "index": {
        "description": "",
        "hierarchy": "Test QuickCheck Text",
        "module": "Test.QuickCheck.Text",
        "name": "MkStr",
        "normalized": "",
        "package": "QuickCheck",
        "partial": "Mk Str",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Text.html#v:bold",
      "description": {
        "fct-module": "Test.QuickCheck.Text",
        "fct-package": "QuickCheck",
        "fct-signature": "String -\u003e String",
        "fct-source": "src/Test-QuickCheck-Text.html#bold",
        "fct-type": "function",
        "title": "bold"
      },
      "index": {
        "description": "",
        "hierarchy": "Test QuickCheck Text",
        "module": "Test.QuickCheck.Text",
        "name": "bold",
        "normalized": "String-\u003eString",
        "package": "QuickCheck",
        "partial": "",
        "signature": "String-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Text.html#v:handle",
      "description": {
        "fct-module": "Test.QuickCheck.Text",
        "fct-package": "QuickCheck",
        "fct-signature": "Handle -\u003e String -\u003e IO ()",
        "fct-source": "src/Test-QuickCheck-Text.html#handle",
        "fct-type": "function",
        "title": "handle"
      },
      "index": {
        "description": "",
        "hierarchy": "Test QuickCheck Text",
        "module": "Test.QuickCheck.Text",
        "name": "handle",
        "normalized": "Handle-\u003eString-\u003eIO()",
        "package": "QuickCheck",
        "partial": "",
        "signature": "Handle-\u003eString-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Text.html#v:isOneLine",
      "description": {
        "fct-module": "Test.QuickCheck.Text",
        "fct-package": "QuickCheck",
        "fct-signature": "String -\u003e Bool",
        "fct-source": "src/Test-QuickCheck-Text.html#isOneLine",
        "fct-type": "function",
        "title": "isOneLine"
      },
      "index": {
        "description": "",
        "hierarchy": "Test QuickCheck Text",
        "module": "Test.QuickCheck.Text",
        "name": "isOneLine",
        "normalized": "String-\u003eBool",
        "package": "QuickCheck",
        "partial": "One Line",
        "signature": "String-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Text.html#v:newTerminal",
      "description": {
        "fct-module": "Test.QuickCheck.Text",
        "fct-package": "QuickCheck",
        "fct-signature": "Output -\u003e Output -\u003e IO Terminal",
        "fct-source": "src/Test-QuickCheck-Text.html#newTerminal",
        "fct-type": "function",
        "title": "newTerminal"
      },
      "index": {
        "description": "",
        "hierarchy": "Test QuickCheck Text",
        "module": "Test.QuickCheck.Text",
        "name": "newTerminal",
        "normalized": "Output-\u003eOutput-\u003eIO Terminal",
        "package": "QuickCheck",
        "partial": "Terminal",
        "signature": "Output-\u003eOutput-\u003eIO Terminal"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Text.html#v:number",
      "description": {
        "fct-module": "Test.QuickCheck.Text",
        "fct-package": "QuickCheck",
        "fct-signature": "Int -\u003e String -\u003e String",
        "fct-source": "src/Test-QuickCheck-Text.html#number",
        "fct-type": "function",
        "title": "number"
      },
      "index": {
        "description": "",
        "hierarchy": "Test QuickCheck Text",
        "module": "Test.QuickCheck.Text",
        "name": "number",
        "normalized": "Int-\u003eString-\u003eString",
        "package": "QuickCheck",
        "partial": "",
        "signature": "Int-\u003eString-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Text.html#v:oneLine",
      "description": {
        "fct-module": "Test.QuickCheck.Text",
        "fct-package": "QuickCheck",
        "fct-signature": "String -\u003e String",
        "fct-source": "src/Test-QuickCheck-Text.html#oneLine",
        "fct-type": "function",
        "title": "oneLine"
      },
      "index": {
        "description": "",
        "hierarchy": "Test QuickCheck Text",
        "module": "Test.QuickCheck.Text",
        "name": "oneLine",
        "normalized": "String-\u003eString",
        "package": "QuickCheck",
        "partial": "Line",
        "signature": "String-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Text.html#v:putLine",
      "description": {
        "fct-module": "Test.QuickCheck.Text",
        "fct-package": "QuickCheck",
        "fct-signature": "Terminal -\u003e String -\u003e IO ()",
        "fct-source": "src/Test-QuickCheck-Text.html#putLine",
        "fct-type": "function",
        "title": "putLine"
      },
      "index": {
        "description": "",
        "hierarchy": "Test QuickCheck Text",
        "module": "Test.QuickCheck.Text",
        "name": "putLine",
        "normalized": "Terminal-\u003eString-\u003eIO()",
        "package": "QuickCheck",
        "partial": "Line",
        "signature": "Terminal-\u003eString-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Text.html#v:putPart",
      "description": {
        "fct-module": "Test.QuickCheck.Text",
        "fct-package": "QuickCheck",
        "fct-signature": "Terminal -\u003e String -\u003e IO ()",
        "fct-source": "src/Test-QuickCheck-Text.html#putPart",
        "fct-type": "function",
        "title": "putPart"
      },
      "index": {
        "description": "",
        "hierarchy": "Test QuickCheck Text",
        "module": "Test.QuickCheck.Text",
        "name": "putPart",
        "normalized": "Terminal-\u003eString-\u003eIO()",
        "package": "QuickCheck",
        "partial": "Part",
        "signature": "Terminal-\u003eString-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Text.html#v:putTemp",
      "description": {
        "fct-module": "Test.QuickCheck.Text",
        "fct-package": "QuickCheck",
        "fct-signature": "Terminal -\u003e String -\u003e IO ()",
        "fct-source": "src/Test-QuickCheck-Text.html#putTemp",
        "fct-type": "function",
        "title": "putTemp"
      },
      "index": {
        "description": "",
        "hierarchy": "Test QuickCheck Text",
        "module": "Test.QuickCheck.Text",
        "name": "putTemp",
        "normalized": "Terminal-\u003eString-\u003eIO()",
        "package": "QuickCheck",
        "partial": "Temp",
        "signature": "Terminal-\u003eString-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Text.html#v:ranges",
      "description": {
        "fct-module": "Test.QuickCheck.Text",
        "fct-package": "QuickCheck",
        "fct-signature": "a -\u003e a -\u003e Str",
        "fct-source": "src/Test-QuickCheck-Text.html#ranges",
        "fct-type": "function",
        "title": "ranges"
      },
      "index": {
        "description": "",
        "hierarchy": "Test QuickCheck Text",
        "module": "Test.QuickCheck.Text",
        "name": "ranges",
        "normalized": "a-\u003ea-\u003eStr",
        "package": "QuickCheck",
        "partial": "",
        "signature": "a-\u003ea-\u003eStr"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Text.html#v:short",
      "description": {
        "fct-module": "Test.QuickCheck.Text",
        "fct-package": "QuickCheck",
        "fct-signature": "Int -\u003e String -\u003e String",
        "fct-source": "src/Test-QuickCheck-Text.html#short",
        "fct-type": "function",
        "title": "short"
      },
      "index": {
        "description": "",
        "hierarchy": "Test QuickCheck Text",
        "module": "Test.QuickCheck.Text",
        "name": "short",
        "normalized": "Int-\u003eString-\u003eString",
        "package": "QuickCheck",
        "partial": "",
        "signature": "Int-\u003eString-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Text.html#v:showErr",
      "description": {
        "fct-module": "Test.QuickCheck.Text",
        "fct-package": "QuickCheck",
        "fct-signature": "a -\u003e String",
        "fct-source": "src/Test-QuickCheck-Text.html#showErr",
        "fct-type": "function",
        "title": "showErr"
      },
      "index": {
        "description": "",
        "hierarchy": "Test QuickCheck Text",
        "module": "Test.QuickCheck.Text",
        "name": "showErr",
        "normalized": "a-\u003eString",
        "package": "QuickCheck",
        "partial": "Err",
        "signature": "a-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Text.html#v:terminalOutput",
      "description": {
        "fct-module": "Test.QuickCheck.Text",
        "fct-package": "QuickCheck",
        "fct-signature": "Terminal -\u003e IO String",
        "fct-source": "src/Test-QuickCheck-Text.html#terminalOutput",
        "fct-type": "function",
        "title": "terminalOutput"
      },
      "index": {
        "description": "",
        "hierarchy": "Test QuickCheck Text",
        "module": "Test.QuickCheck.Text",
        "name": "terminalOutput",
        "normalized": "Terminal-\u003eIO String",
        "package": "QuickCheck",
        "partial": "Output",
        "signature": "Terminal-\u003eIO String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Text.html#v:withNullTerminal",
      "description": {
        "fct-module": "Test.QuickCheck.Text",
        "fct-package": "QuickCheck",
        "fct-signature": "(Terminal -\u003e IO a) -\u003e IO a",
        "fct-source": "src/Test-QuickCheck-Text.html#withNullTerminal",
        "fct-type": "function",
        "title": "withNullTerminal"
      },
      "index": {
        "description": "",
        "hierarchy": "Test QuickCheck Text",
        "module": "Test.QuickCheck.Text",
        "name": "withNullTerminal",
        "normalized": "(Terminal-\u003eIO a)-\u003eIO a",
        "package": "QuickCheck",
        "partial": "Null Terminal",
        "signature": "(Terminal-\u003eIO a)-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Text.html#v:withStdioTerminal",
      "description": {
        "fct-module": "Test.QuickCheck.Text",
        "fct-package": "QuickCheck",
        "fct-signature": "(Terminal -\u003e IO a) -\u003e IO a",
        "fct-source": "src/Test-QuickCheck-Text.html#withStdioTerminal",
        "fct-type": "function",
        "title": "withStdioTerminal"
      },
      "index": {
        "description": "",
        "hierarchy": "Test QuickCheck Text",
        "module": "Test.QuickCheck.Text",
        "name": "withStdioTerminal",
        "normalized": "(Terminal-\u003eIO a)-\u003eIO a",
        "package": "QuickCheck",
        "partial": "Stdio Terminal",
        "signature": "(Terminal-\u003eIO a)-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html#",
      "description": {
        "fct-module": "Test.QuickCheck",
        "fct-package": "QuickCheck",
        "fct-signature": "module",
        "fct-source": "src/Test-QuickCheck.html",
        "fct-type": "module",
        "title": "QuickCheck"
      },
      "index": {
        "description": "",
        "hierarchy": "Test QuickCheck",
        "module": "Test.QuickCheck",
        "name": "QuickCheck",
        "normalized": "",
        "package": "QuickCheck",
        "partial": "Quick Check",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html#t:Arbitrary",
      "description": {
        "fct-descr": "\u003cp\u003eRandom generation and shrinking of values.\n\u003c/p\u003e",
        "fct-module": "Test.QuickCheck",
        "fct-package": "QuickCheck",
        "fct-signature": "class",
        "fct-source": "src/Test-QuickCheck-Arbitrary.html#Arbitrary",
        "fct-type": "class",
        "title": "Arbitrary"
      },
      "index": {
        "description": "Random generation and shrinking of values",
        "hierarchy": "Test QuickCheck",
        "module": "Test.QuickCheck",
        "name": "Arbitrary",
        "normalized": "",
        "package": "QuickCheck",
        "partial": "Arbitrary",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html#t:Args",
      "description": {
        "fct-descr": "\u003cp\u003eArgs specifies arguments to the QuickCheck driver\n\u003c/p\u003e",
        "fct-module": "Test.QuickCheck",
        "fct-package": "QuickCheck",
        "fct-signature": "data",
        "fct-source": "src/Test-QuickCheck-Test.html#Args",
        "fct-type": "data",
        "title": "Args"
      },
      "index": {
        "description": "Args specifies arguments to the QuickCheck driver",
        "hierarchy": "Test QuickCheck",
        "module": "Test.QuickCheck",
        "name": "Args",
        "normalized": "",
        "package": "QuickCheck",
        "partial": "Args",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html#t:Blind",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eBlind x\u003c/code\u003e: as x, but x does not have to be in the \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e class.\n\u003c/p\u003e",
        "fct-module": "Test.QuickCheck",
        "fct-package": "QuickCheck",
        "fct-signature": "newtype",
        "fct-source": "src/Test-QuickCheck-Modifiers.html#Blind",
        "fct-type": "newtype",
        "title": "Blind"
      },
      "index": {
        "description": "Blind as but does not have to be in the Show class",
        "hierarchy": "Test QuickCheck",
        "module": "Test.QuickCheck",
        "name": "Blind",
        "normalized": "",
        "package": "QuickCheck",
        "partial": "Blind",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html#t:CoArbitrary",
      "description": {
        "fct-descr": "\u003cp\u003eUsed for random generation of functions.\n\u003c/p\u003e",
        "fct-module": "Test.QuickCheck",
        "fct-package": "QuickCheck",
        "fct-signature": "class",
        "fct-source": "src/Test-QuickCheck-Arbitrary.html#CoArbitrary",
        "fct-type": "class",
        "title": "CoArbitrary"
      },
      "index": {
        "description": "Used for random generation of functions",
        "hierarchy": "Test QuickCheck",
        "module": "Test.QuickCheck",
        "name": "CoArbitrary",
        "normalized": "",
        "package": "QuickCheck",
        "partial": "Co Arbitrary",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html#t:Fixed",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eFixed x\u003c/code\u003e: as x, but will not be shrunk.\n\u003c/p\u003e",
        "fct-module": "Test.QuickCheck",
        "fct-package": "QuickCheck",
        "fct-signature": "newtype",
        "fct-source": "src/Test-QuickCheck-Modifiers.html#Fixed",
        "fct-type": "newtype",
        "title": "Fixed"
      },
      "index": {
        "description": "Fixed as but will not be shrunk",
        "hierarchy": "Test QuickCheck",
        "module": "Test.QuickCheck",
        "name": "Fixed",
        "normalized": "",
        "package": "QuickCheck",
        "partial": "Fixed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html#t:Gen",
      "description": {
        "fct-module": "Test.QuickCheck",
        "fct-package": "QuickCheck",
        "fct-signature": "data",
        "fct-source": "src/Test-QuickCheck-Gen.html#Gen",
        "fct-type": "data",
        "title": "Gen"
      },
      "index": {
        "description": "",
        "hierarchy": "Test QuickCheck",
        "module": "Test.QuickCheck",
        "name": "Gen",
        "normalized": "",
        "package": "QuickCheck",
        "partial": "Gen",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html#t:NonEmptyList",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eNonEmpty xs\u003c/code\u003e: guarantees that xs is non-empty.\n\u003c/p\u003e",
        "fct-module": "Test.QuickCheck",
        "fct-package": "QuickCheck",
        "fct-signature": "newtype",
        "fct-source": "src/Test-QuickCheck-Modifiers.html#NonEmptyList",
        "fct-type": "newtype",
        "title": "NonEmptyList"
      },
      "index": {
        "description": "NonEmpty xs guarantees that xs is non-empty",
        "hierarchy": "Test QuickCheck",
        "module": "Test.QuickCheck",
        "name": "NonEmptyList",
        "normalized": "",
        "package": "QuickCheck",
        "partial": "Non Empty List",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html#t:NonNegative",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eNonNegative x\u003c/code\u003e: guarantees that \u003ccode\u003ex \u003e= 0\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Test.QuickCheck",
        "fct-package": "QuickCheck",
        "fct-signature": "newtype",
        "fct-source": "src/Test-QuickCheck-Modifiers.html#NonNegative",
        "fct-type": "newtype",
        "title": "NonNegative"
      },
      "index": {
        "description": "NonNegative guarantees that",
        "hierarchy": "Test QuickCheck",
        "module": "Test.QuickCheck",
        "name": "NonNegative",
        "normalized": "",
        "package": "QuickCheck",
        "partial": "Non Negative",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html#t:NonZero",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eNonZero x\u003c/code\u003e: guarantees that \u003ccode\u003ex /= 0\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Test.QuickCheck",
        "fct-package": "QuickCheck",
        "fct-signature": "newtype",
        "fct-source": "src/Test-QuickCheck-Modifiers.html#NonZero",
        "fct-type": "newtype",
        "title": "NonZero"
      },
      "index": {
        "description": "NonZero guarantees that",
        "hierarchy": "Test QuickCheck",
        "module": "Test.QuickCheck",
        "name": "NonZero",
        "normalized": "",
        "package": "QuickCheck",
        "partial": "Non Zero",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html#t:OrderedList",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eOrdered xs\u003c/code\u003e: guarantees that xs is ordered.\n\u003c/p\u003e",
        "fct-module": "Test.QuickCheck",
        "fct-package": "QuickCheck",
        "fct-signature": "newtype",
        "fct-source": "src/Test-QuickCheck-Modifiers.html#OrderedList",
        "fct-type": "newtype",
        "title": "OrderedList"
      },
      "index": {
        "description": "Ordered xs guarantees that xs is ordered",
        "hierarchy": "Test QuickCheck",
        "module": "Test.QuickCheck",
        "name": "OrderedList",
        "normalized": "",
        "package": "QuickCheck",
        "partial": "Ordered List",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html#t:Positive",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003ePositive x\u003c/code\u003e: guarantees that \u003ccode\u003ex \u003e 0\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Test.QuickCheck",
        "fct-package": "QuickCheck",
        "fct-signature": "newtype",
        "fct-source": "src/Test-QuickCheck-Modifiers.html#Positive",
        "fct-type": "newtype",
        "title": "Positive"
      },
      "index": {
        "description": "Positive guarantees that",
        "hierarchy": "Test QuickCheck",
        "module": "Test.QuickCheck",
        "name": "Positive",
        "normalized": "",
        "package": "QuickCheck",
        "partial": "Positive",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html#t:Prop",
      "description": {
        "fct-module": "Test.QuickCheck",
        "fct-package": "QuickCheck",
        "fct-signature": "data",
        "fct-source": "src/Test-QuickCheck-Property.html#Prop",
        "fct-type": "data",
        "title": "Prop"
      },
      "index": {
        "description": "",
        "hierarchy": "Test QuickCheck",
        "module": "Test.QuickCheck",
        "name": "Prop",
        "normalized": "",
        "package": "QuickCheck",
        "partial": "Prop",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html#t:Property",
      "description": {
        "fct-module": "Test.QuickCheck",
        "fct-package": "QuickCheck",
        "fct-signature": "type",
        "fct-source": "src/Test-QuickCheck-Property.html#Property",
        "fct-type": "type",
        "title": "Property"
      },
      "index": {
        "description": "",
        "hierarchy": "Test QuickCheck",
        "module": "Test.QuickCheck",
        "name": "Property",
        "normalized": "",
        "package": "QuickCheck",
        "partial": "Property",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html#t:Result",
      "description": {
        "fct-descr": "\u003cp\u003eResult represents the test result\n\u003c/p\u003e",
        "fct-module": "Test.QuickCheck",
        "fct-package": "QuickCheck",
        "fct-signature": "data",
        "fct-source": "src/Test-QuickCheck-Test.html#Result",
        "fct-type": "data",
        "title": "Result"
      },
      "index": {
        "description": "Result represents the test result",
        "hierarchy": "Test QuickCheck",
        "module": "Test.QuickCheck",
        "name": "Result",
        "normalized": "",
        "package": "QuickCheck",
        "partial": "Result",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html#t:Shrink2",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eShrink2 x\u003c/code\u003e: allows 2 shrinking steps at the same time when shrinking x\n\u003c/p\u003e",
        "fct-module": "Test.QuickCheck",
        "fct-package": "QuickCheck",
        "fct-signature": "newtype",
        "fct-source": "src/Test-QuickCheck-Modifiers.html#Shrink2",
        "fct-type": "newtype",
        "title": "Shrink2"
      },
      "index": {
        "description": "Shrink2 allows shrinking steps at the same time when shrinking",
        "hierarchy": "Test QuickCheck",
        "module": "Test.QuickCheck",
        "name": "Shrink2",
        "normalized": "",
        "package": "QuickCheck",
        "partial": "Shrink",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html#t:ShrinkState",
      "description": {
        "fct-module": "Test.QuickCheck",
        "fct-package": "QuickCheck",
        "fct-signature": "class",
        "fct-source": "src/Test-QuickCheck-Modifiers.html#ShrinkState",
        "fct-type": "class",
        "title": "ShrinkState"
      },
      "index": {
        "description": "",
        "hierarchy": "Test QuickCheck",
        "module": "Test.QuickCheck",
        "name": "ShrinkState",
        "normalized": "",
        "package": "QuickCheck",
        "partial": "Shrink State",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html#t:Shrinking",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eShrinking _ x\u003c/code\u003e: allows for maintaining a state during shrinking.\n\u003c/p\u003e",
        "fct-module": "Test.QuickCheck",
        "fct-package": "QuickCheck",
        "fct-signature": "data",
        "fct-source": "src/Test-QuickCheck-Modifiers.html#Shrinking",
        "fct-type": "data",
        "title": "Shrinking"
      },
      "index": {
        "description": "Shrinking allows for maintaining state during shrinking",
        "hierarchy": "Test QuickCheck",
        "module": "Test.QuickCheck",
        "name": "Shrinking",
        "normalized": "",
        "package": "QuickCheck",
        "partial": "Shrinking",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html#t:Smart",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eSmart _ x\u003c/code\u003e: tries a different order when shrinking.\n\u003c/p\u003e",
        "fct-module": "Test.QuickCheck",
        "fct-package": "QuickCheck",
        "fct-signature": "data",
        "fct-source": "src/Test-QuickCheck-Modifiers.html#Smart",
        "fct-type": "data",
        "title": "Smart"
      },
      "index": {
        "description": "Smart tries different order when shrinking",
        "hierarchy": "Test QuickCheck",
        "module": "Test.QuickCheck",
        "name": "Smart",
        "normalized": "",
        "package": "QuickCheck",
        "partial": "Smart",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html#t:Str",
      "description": {
        "fct-module": "Test.QuickCheck",
        "fct-package": "QuickCheck",
        "fct-signature": "newtype",
        "fct-source": "src/Test-QuickCheck-Text.html#Str",
        "fct-type": "newtype",
        "title": "Str"
      },
      "index": {
        "description": "",
        "hierarchy": "Test QuickCheck",
        "module": "Test.QuickCheck",
        "name": "Str",
        "normalized": "",
        "package": "QuickCheck",
        "partial": "Str",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html#t:Testable",
      "description": {
        "fct-descr": "\u003cp\u003eThe class of things which can be tested, i.e. turned into a property.\n\u003c/p\u003e",
        "fct-module": "Test.QuickCheck",
        "fct-package": "QuickCheck",
        "fct-signature": "class",
        "fct-source": "src/Test-QuickCheck-Property.html#Testable",
        "fct-type": "class",
        "title": "Testable"
      },
      "index": {
        "description": "The class of things which can be tested i.e turned into property",
        "hierarchy": "Test QuickCheck",
        "module": "Test.QuickCheck",
        "name": "Testable",
        "normalized": "",
        "package": "QuickCheck",
        "partial": "Testable",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html#v:-61--61--62-",
      "description": {
        "fct-descr": "\u003cp\u003eImplication for properties: The resulting property holds if\n the first argument is \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e (in which case the test case is discarded),\n or if the given property holds.\n\u003c/p\u003e",
        "fct-module": "Test.QuickCheck",
        "fct-package": "QuickCheck",
        "fct-signature": "Bool -\u003e prop -\u003e Property",
        "fct-source": "src/Test-QuickCheck-Property.html#%3D%3D%3E",
        "fct-type": "function",
        "title": "(==\u003e)"
      },
      "index": {
        "description": "Implication for properties The resulting property holds if the first argument is False in which case the test case is discarded or if the given property holds",
        "hierarchy": "Test QuickCheck",
        "module": "Test.QuickCheck",
        "name": "(==\u003e) ==\u003e",
        "normalized": "Bool-\u003ea-\u003eProperty",
        "package": "QuickCheck",
        "partial": "",
        "signature": "Bool-\u003eprop-\u003eProperty"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html#v:-62--60-",
      "description": {
        "fct-descr": "\u003cp\u003eCombine two generator perturbing functions, for example the\n results of calls to \u003ccode\u003e\u003ca\u003evariant\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003ecoarbitrary\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Test.QuickCheck",
        "fct-package": "QuickCheck",
        "fct-signature": "(Gen a -\u003e Gen a) -\u003e (Gen a -\u003e Gen a) -\u003e Gen a -\u003e Gen a",
        "fct-source": "src/Test-QuickCheck-Arbitrary.html#%3E%3C",
        "fct-type": "function",
        "title": "(\u003e\u003c)"
      },
      "index": {
        "description": "Combine two generator perturbing functions for example the results of calls to variant or coarbitrary",
        "hierarchy": "Test QuickCheck",
        "module": "Test.QuickCheck",
        "name": "(\u003e\u003c) \u003e\u003c",
        "normalized": "(Gen a-\u003eGen a)-\u003e(Gen a-\u003eGen a)-\u003eGen a-\u003eGen a",
        "package": "QuickCheck",
        "partial": "",
        "signature": "(Gen a-\u003eGen a)-\u003e(Gen a-\u003eGen a)-\u003eGen a-\u003eGen a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html#v:.-124--124-.",
      "description": {
        "fct-descr": "\u003cp\u003eDisjunction: \u003ccode\u003ep1\u003c/code\u003e \u003ccode\u003e\u003ca\u003e.||.\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ep2\u003c/code\u003e passes unless \u003ccode\u003ep1\u003c/code\u003e and \u003ccode\u003ep2\u003c/code\u003e simultaneously fail.\n\u003c/p\u003e",
        "fct-module": "Test.QuickCheck",
        "fct-package": "QuickCheck",
        "fct-signature": "prop1 -\u003e prop2 -\u003e Property",
        "fct-source": "src/Test-QuickCheck-Property.html#.%7C%7C.",
        "fct-type": "function",
        "title": "(.||.)"
      },
      "index": {
        "description": "Disjunction p1 p2 passes unless p1 and p2 simultaneously fail",
        "hierarchy": "Test QuickCheck",
        "module": "Test.QuickCheck",
        "name": "(.||.) .||.",
        "normalized": "a-\u003ea-\u003eProperty",
        "package": "QuickCheck",
        "partial": "",
        "signature": "prop-\u003eprop-\u003eProperty"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html#v:.-38--38-.",
      "description": {
        "fct-descr": "\u003cp\u003eConjunction: \u003ccode\u003ep1\u003c/code\u003e \u003ccode\u003e\u003ca\u003e.&&.\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ep2\u003c/code\u003e passes if both \u003ccode\u003ep1\u003c/code\u003e and \u003ccode\u003ep2\u003c/code\u003e pass.\n\u003c/p\u003e",
        "fct-module": "Test.QuickCheck",
        "fct-package": "QuickCheck",
        "fct-signature": "prop1 -\u003e prop2 -\u003e Property",
        "fct-source": "src/Test-QuickCheck-Property.html#.%26%26.",
        "fct-type": "function",
        "title": "(.&&.)"
      },
      "index": {
        "description": "Conjunction p1 p2 passes if both p1 and p2 pass",
        "hierarchy": "Test QuickCheck",
        "module": "Test.QuickCheck",
        "name": "(.&&.) .&&.",
        "normalized": "a-\u003ea-\u003eProperty",
        "package": "QuickCheck",
        "partial": "",
        "signature": "prop-\u003eprop-\u003eProperty"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html#v:.-38-.",
      "description": {
        "fct-descr": "\u003cp\u003eNondeterministic choice: \u003ccode\u003ep1\u003c/code\u003e \u003ccode\u003e\u003ca\u003e.&.\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ep2\u003c/code\u003e picks randomly one of\n \u003ccode\u003ep1\u003c/code\u003e and \u003ccode\u003ep2\u003c/code\u003e to test. If you test the property 100 times it\n makes 100 random choices.\n\u003c/p\u003e",
        "fct-module": "Test.QuickCheck",
        "fct-package": "QuickCheck",
        "fct-signature": "prop1 -\u003e prop2 -\u003e Property",
        "fct-source": "src/Test-QuickCheck-Property.html#.%26.",
        "fct-type": "function",
        "title": "(.&.)"
      },
      "index": {
        "description": "Nondeterministic choice p1 p2 picks randomly one of p1 and p2 to test If you test the property times it makes random choices",
        "hierarchy": "Test QuickCheck",
        "module": "Test.QuickCheck",
        "name": "(.&.) .&.",
        "normalized": "a-\u003ea-\u003eProperty",
        "package": "QuickCheck",
        "partial": "",
        "signature": "prop-\u003eprop-\u003eProperty"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html#v:Args",
      "description": {
        "fct-module": "Test.QuickCheck",
        "fct-package": "QuickCheck",
        "fct-signature": "Args",
        "fct-source": "src/Test-QuickCheck-Test.html#Args",
        "fct-type": "function",
        "title": "Args"
      },
      "index": {
        "description": "",
        "hierarchy": "Test QuickCheck",
        "module": "Test.QuickCheck",
        "name": "Args",
        "normalized": "",
        "package": "QuickCheck",
        "partial": "Args",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html#v:Blind",
      "description": {
        "fct-module": "Test.QuickCheck",
        "fct-package": "QuickCheck",
        "fct-signature": "Blind a",
        "fct-source": "src/Test-QuickCheck-Modifiers.html#Blind",
        "fct-type": "function",
        "title": "Blind"
      },
      "index": {
        "description": "",
        "hierarchy": "Test QuickCheck",
        "module": "Test.QuickCheck",
        "name": "Blind",
        "normalized": "",
        "package": "QuickCheck",
        "partial": "Blind",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html#v:Failure",
      "description": {
        "fct-module": "Test.QuickCheck",
        "fct-package": "QuickCheck",
        "fct-signature": "Failure",
        "fct-source": "src/Test-QuickCheck-Test.html#Result",
        "fct-type": "function",
        "title": "Failure"
      },
      "index": {
        "description": "",
        "hierarchy": "Test QuickCheck",
        "module": "Test.QuickCheck",
        "name": "Failure",
        "normalized": "",
        "package": "QuickCheck",
        "partial": "Failure",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html#v:Fixed",
      "description": {
        "fct-module": "Test.QuickCheck",
        "fct-package": "QuickCheck",
        "fct-signature": "Fixed a",
        "fct-source": "src/Test-QuickCheck-Modifiers.html#Fixed",
        "fct-type": "function",
        "title": "Fixed"
      },
      "index": {
        "description": "",
        "hierarchy": "Test QuickCheck",
        "module": "Test.QuickCheck",
        "name": "Fixed",
        "normalized": "",
        "package": "QuickCheck",
        "partial": "Fixed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html#v:GaveUp",
      "description": {
        "fct-module": "Test.QuickCheck",
        "fct-package": "QuickCheck",
        "fct-signature": "GaveUp",
        "fct-source": "src/Test-QuickCheck-Test.html#Result",
        "fct-type": "function",
        "title": "GaveUp"
      },
      "index": {
        "description": "",
        "hierarchy": "Test QuickCheck",
        "module": "Test.QuickCheck",
        "name": "GaveUp",
        "normalized": "",
        "package": "QuickCheck",
        "partial": "Gave Up",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html#v:MkStr",
      "description": {
        "fct-module": "Test.QuickCheck",
        "fct-package": "QuickCheck",
        "fct-signature": "MkStr String",
        "fct-source": "src/Test-QuickCheck-Text.html#Str",
        "fct-type": "function",
        "title": "MkStr"
      },
      "index": {
        "description": "",
        "hierarchy": "Test QuickCheck",
        "module": "Test.QuickCheck",
        "name": "MkStr",
        "normalized": "",
        "package": "QuickCheck",
        "partial": "Mk Str",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html#v:NoExpectedFailure",
      "description": {
        "fct-module": "Test.QuickCheck",
        "fct-package": "QuickCheck",
        "fct-signature": "NoExpectedFailure",
        "fct-source": "src/Test-QuickCheck-Test.html#Result",
        "fct-type": "function",
        "title": "NoExpectedFailure"
      },
      "index": {
        "description": "",
        "hierarchy": "Test QuickCheck",
        "module": "Test.QuickCheck",
        "name": "NoExpectedFailure",
        "normalized": "",
        "package": "QuickCheck",
        "partial": "No Expected Failure",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html#v:NonEmpty",
      "description": {
        "fct-module": "Test.QuickCheck",
        "fct-package": "QuickCheck",
        "fct-signature": "NonEmpty",
        "fct-source": "src/Test-QuickCheck-Modifiers.html#NonEmptyList",
        "fct-type": "function",
        "title": "NonEmpty"
      },
      "index": {
        "description": "",
        "hierarchy": "Test QuickCheck",
        "module": "Test.QuickCheck",
        "name": "NonEmpty",
        "normalized": "",
        "package": "QuickCheck",
        "partial": "Non Empty",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html#v:NonNegative",
      "description": {
        "fct-module": "Test.QuickCheck",
        "fct-package": "QuickCheck",
        "fct-signature": "NonNegative",
        "fct-source": "src/Test-QuickCheck-Modifiers.html#NonNegative",
        "fct-type": "function",
        "title": "NonNegative"
      },
      "index": {
        "description": "",
        "hierarchy": "Test QuickCheck",
        "module": "Test.QuickCheck",
        "name": "NonNegative",
        "normalized": "",
        "package": "QuickCheck",
        "partial": "Non Negative",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html#v:NonZero",
      "description": {
        "fct-module": "Test.QuickCheck",
        "fct-package": "QuickCheck",
        "fct-signature": "NonZero",
        "fct-source": "src/Test-QuickCheck-Modifiers.html#NonZero",
        "fct-type": "function",
        "title": "NonZero"
      },
      "index": {
        "description": "",
        "hierarchy": "Test QuickCheck",
        "module": "Test.QuickCheck",
        "name": "NonZero",
        "normalized": "",
        "package": "QuickCheck",
        "partial": "Non Zero",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html#v:Ordered",
      "description": {
        "fct-module": "Test.QuickCheck",
        "fct-package": "QuickCheck",
        "fct-signature": "Ordered",
        "fct-source": "src/Test-QuickCheck-Modifiers.html#OrderedList",
        "fct-type": "function",
        "title": "Ordered"
      },
      "index": {
        "description": "",
        "hierarchy": "Test QuickCheck",
        "module": "Test.QuickCheck",
        "name": "Ordered",
        "normalized": "",
        "package": "QuickCheck",
        "partial": "Ordered",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html#v:Positive",
      "description": {
        "fct-module": "Test.QuickCheck",
        "fct-package": "QuickCheck",
        "fct-signature": "Positive",
        "fct-source": "src/Test-QuickCheck-Modifiers.html#Positive",
        "fct-type": "function",
        "title": "Positive"
      },
      "index": {
        "description": "",
        "hierarchy": "Test QuickCheck",
        "module": "Test.QuickCheck",
        "name": "Positive",
        "normalized": "",
        "package": "QuickCheck",
        "partial": "Positive",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html#v:Shrink2",
      "description": {
        "fct-module": "Test.QuickCheck",
        "fct-package": "QuickCheck",
        "fct-signature": "Shrink2 a",
        "fct-source": "src/Test-QuickCheck-Modifiers.html#Shrink2",
        "fct-type": "function",
        "title": "Shrink2"
      },
      "index": {
        "description": "",
        "hierarchy": "Test QuickCheck",
        "module": "Test.QuickCheck",
        "name": "Shrink2",
        "normalized": "",
        "package": "QuickCheck",
        "partial": "Shrink",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html#v:Shrinking",
      "description": {
        "fct-module": "Test.QuickCheck",
        "fct-package": "QuickCheck",
        "fct-signature": "Shrinking s a",
        "fct-source": "src/Test-QuickCheck-Modifiers.html#Shrinking",
        "fct-type": "function",
        "title": "Shrinking"
      },
      "index": {
        "description": "",
        "hierarchy": "Test QuickCheck",
        "module": "Test.QuickCheck",
        "name": "Shrinking",
        "normalized": "",
        "package": "QuickCheck",
        "partial": "Shrinking",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html#v:Smart",
      "description": {
        "fct-module": "Test.QuickCheck",
        "fct-package": "QuickCheck",
        "fct-signature": "Smart Int a",
        "fct-source": "src/Test-QuickCheck-Modifiers.html#Smart",
        "fct-type": "function",
        "title": "Smart"
      },
      "index": {
        "description": "",
        "hierarchy": "Test QuickCheck",
        "module": "Test.QuickCheck",
        "name": "Smart",
        "normalized": "",
        "package": "QuickCheck",
        "partial": "Smart",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html#v:Success",
      "description": {
        "fct-module": "Test.QuickCheck",
        "fct-package": "QuickCheck",
        "fct-signature": "Success",
        "fct-source": "src/Test-QuickCheck-Test.html#Result",
        "fct-type": "function",
        "title": "Success"
      },
      "index": {
        "description": "",
        "hierarchy": "Test QuickCheck",
        "module": "Test.QuickCheck",
        "name": "Success",
        "normalized": "",
        "package": "QuickCheck",
        "partial": "Success",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html#v:arbitrary",
      "description": {
        "fct-descr": "\u003cp\u003eA generator for values of the given type.\n\u003c/p\u003e",
        "fct-module": "Test.QuickCheck",
        "fct-package": "QuickCheck",
        "fct-signature": "Gen a",
        "fct-source": "src/Test-QuickCheck-Arbitrary.html#arbitrary",
        "fct-type": "method",
        "title": "arbitrary"
      },
      "index": {
        "description": "generator for values of the given type",
        "hierarchy": "Test QuickCheck",
        "module": "Test.QuickCheck",
        "name": "arbitrary",
        "normalized": "",
        "package": "QuickCheck",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html#v:arbitraryBoundedEnum",
      "description": {
        "fct-descr": "\u003cp\u003eGenerates an element of a bounded enumeration.\n\u003c/p\u003e",
        "fct-module": "Test.QuickCheck",
        "fct-package": "QuickCheck",
        "fct-signature": "Gen a",
        "fct-source": "src/Test-QuickCheck-Arbitrary.html#arbitraryBoundedEnum",
        "fct-type": "function",
        "title": "arbitraryBoundedEnum"
      },
      "index": {
        "description": "Generates an element of bounded enumeration",
        "hierarchy": "Test QuickCheck",
        "module": "Test.QuickCheck",
        "name": "arbitraryBoundedEnum",
        "normalized": "",
        "package": "QuickCheck",
        "partial": "Bounded Enum",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html#v:arbitraryBoundedIntegral",
      "description": {
        "fct-descr": "\u003cp\u003eGenerates an integral number. The number is chosen uniformly from\n the entire range of the type. You may want to use\n \u003ccode\u003e\u003ca\u003earbitrarySizedBoundedIntegral\u003c/a\u003e\u003c/code\u003e instead.\n\u003c/p\u003e",
        "fct-module": "Test.QuickCheck",
        "fct-package": "QuickCheck",
        "fct-signature": "Gen a",
        "fct-source": "src/Test-QuickCheck-Arbitrary.html#arbitraryBoundedIntegral",
        "fct-type": "function",
        "title": "arbitraryBoundedIntegral"
      },
      "index": {
        "description": "Generates an integral number The number is chosen uniformly from the entire range of the type You may want to use arbitrarySizedBoundedIntegral instead",
        "hierarchy": "Test QuickCheck",
        "module": "Test.QuickCheck",
        "name": "arbitraryBoundedIntegral",
        "normalized": "",
        "package": "QuickCheck",
        "partial": "Bounded Integral",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html#v:arbitraryBoundedRandom",
      "description": {
        "fct-descr": "\u003cp\u003eGenerates an element of a bounded type. The element is\n chosen from the entire range of the type.\n\u003c/p\u003e",
        "fct-module": "Test.QuickCheck",
        "fct-package": "QuickCheck",
        "fct-signature": "Gen a",
        "fct-source": "src/Test-QuickCheck-Arbitrary.html#arbitraryBoundedRandom",
        "fct-type": "function",
        "title": "arbitraryBoundedRandom"
      },
      "index": {
        "description": "Generates an element of bounded type The element is chosen from the entire range of the type",
        "hierarchy": "Test QuickCheck",
        "module": "Test.QuickCheck",
        "name": "arbitraryBoundedRandom",
        "normalized": "",
        "package": "QuickCheck",
        "partial": "Bounded Random",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html#v:arbitrarySizedBoundedIntegral",
      "description": {
        "fct-descr": "\u003cp\u003eGenerates an integral number from a bounded domain. The number is\n chosen from the entire range of the type, but small numbers are\n generated more often than big numbers. Inspired by demands from\n Phil Wadler.\n\u003c/p\u003e",
        "fct-module": "Test.QuickCheck",
        "fct-package": "QuickCheck",
        "fct-signature": "Gen a",
        "fct-source": "src/Test-QuickCheck-Arbitrary.html#arbitrarySizedBoundedIntegral",
        "fct-type": "function",
        "title": "arbitrarySizedBoundedIntegral"
      },
      "index": {
        "description": "Generates an integral number from bounded domain The number is chosen from the entire range of the type but small numbers are generated more often than big numbers Inspired by demands from Phil Wadler",
        "hierarchy": "Test QuickCheck",
        "module": "Test.QuickCheck",
        "name": "arbitrarySizedBoundedIntegral",
        "normalized": "",
        "package": "QuickCheck",
        "partial": "Sized Bounded Integral",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html#v:arbitrarySizedFractional",
      "description": {
        "fct-descr": "\u003cp\u003eGenerates a fractional number. The number can be positive or negative\n and its maximum absolute value depends on the size parameter.\n\u003c/p\u003e",
        "fct-module": "Test.QuickCheck",
        "fct-package": "QuickCheck",
        "fct-signature": "Gen a",
        "fct-source": "src/Test-QuickCheck-Arbitrary.html#arbitrarySizedFractional",
        "fct-type": "function",
        "title": "arbitrarySizedFractional"
      },
      "index": {
        "description": "Generates fractional number The number can be positive or negative and its maximum absolute value depends on the size parameter",
        "hierarchy": "Test QuickCheck",
        "module": "Test.QuickCheck",
        "name": "arbitrarySizedFractional",
        "normalized": "",
        "package": "QuickCheck",
        "partial": "Sized Fractional",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html#v:arbitrarySizedIntegral",
      "description": {
        "fct-descr": "\u003cp\u003eGenerates an integral number. The number can be positive or negative\n and its maximum absolute value depends on the size parameter.\n\u003c/p\u003e",
        "fct-module": "Test.QuickCheck",
        "fct-package": "QuickCheck",
        "fct-signature": "Gen a",
        "fct-source": "src/Test-QuickCheck-Arbitrary.html#arbitrarySizedIntegral",
        "fct-type": "function",
        "title": "arbitrarySizedIntegral"
      },
      "index": {
        "description": "Generates an integral number The number can be positive or negative and its maximum absolute value depends on the size parameter",
        "hierarchy": "Test QuickCheck",
        "module": "Test.QuickCheck",
        "name": "arbitrarySizedIntegral",
        "normalized": "",
        "package": "QuickCheck",
        "partial": "Sized Integral",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html#v:chatty",
      "description": {
        "fct-descr": "\u003cp\u003ewhether to print anything\n\u003c/p\u003e",
        "fct-module": "Test.QuickCheck",
        "fct-package": "QuickCheck",
        "fct-signature": "Bool",
        "fct-source": "src/Test-QuickCheck-Test.html#Args",
        "fct-type": "function",
        "title": "chatty"
      },
      "index": {
        "description": "whether to print anything",
        "hierarchy": "Test QuickCheck",
        "module": "Test.QuickCheck",
        "name": "chatty",
        "normalized": "",
        "package": "QuickCheck",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html#v:choose",
      "description": {
        "fct-descr": "\u003cp\u003eGenerates a random element in the given inclusive range.\n\u003c/p\u003e",
        "fct-module": "Test.QuickCheck",
        "fct-package": "QuickCheck",
        "fct-signature": "(a, a) -\u003e Gen a",
        "fct-source": "src/Test-QuickCheck-Gen.html#choose",
        "fct-type": "function",
        "title": "choose"
      },
      "index": {
        "description": "Generates random element in the given inclusive range",
        "hierarchy": "Test QuickCheck",
        "module": "Test.QuickCheck",
        "name": "choose",
        "normalized": "(a,a)-\u003eGen a",
        "package": "QuickCheck",
        "partial": "",
        "signature": "(a,a)-\u003eGen a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html#v:classify",
      "description": {
        "fct-descr": "\u003cp\u003eConditionally labels test case.\n\u003c/p\u003e",
        "fct-module": "Test.QuickCheck",
        "fct-package": "QuickCheck",
        "fct-signature": "Bool-\u003e String-\u003e prop-\u003e Property",
        "fct-type": "function",
        "title": "classify"
      },
      "index": {
        "description": "Conditionally labels test case",
        "hierarchy": "Test QuickCheck",
        "module": "Test.QuickCheck",
        "name": "classify",
        "normalized": "Bool-\u003eString-\u003ea-\u003eProperty",
        "package": "QuickCheck",
        "partial": "",
        "signature": "Bool-\u003eString-\u003eprop-\u003eProperty"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html#v:coarbitrary",
      "description": {
        "fct-descr": "\u003cp\u003eUsed to generate a function of type \u003ccode\u003ea -\u003e c\u003c/code\u003e. The implementation\n should use the first argument to perturb the random generator\n given as the second argument. the returned generator\n is then used to generate the function result.\n You can often use \u003ccode\u003e\u003ca\u003evariant\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003e\u003e\u003c\u003c/a\u003e\u003c/code\u003e to implement\n \u003ccode\u003e\u003ca\u003ecoarbitrary\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Test.QuickCheck",
        "fct-package": "QuickCheck",
        "fct-signature": "a -\u003e Gen c -\u003e Gen c",
        "fct-source": "src/Test-QuickCheck-Arbitrary.html#coarbitrary",
        "fct-type": "method",
        "title": "coarbitrary"
      },
      "index": {
        "description": "Used to generate function of type The implementation should use the first argument to perturb the random generator given as the second argument the returned generator is then used to generate the function result You can often use variant and to implement coarbitrary",
        "hierarchy": "Test QuickCheck",
        "module": "Test.QuickCheck",
        "name": "coarbitrary",
        "normalized": "a-\u003eGen b-\u003eGen b",
        "package": "QuickCheck",
        "partial": "",
        "signature": "a-\u003eGen c-\u003eGen c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html#v:coarbitraryEnum",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003ecoarbitrary\u003c/a\u003e\u003c/code\u003e implementation for enums.\n\u003c/p\u003e",
        "fct-module": "Test.QuickCheck",
        "fct-package": "QuickCheck",
        "fct-signature": "a -\u003e Gen b -\u003e Gen b",
        "fct-source": "src/Test-QuickCheck-Arbitrary.html#coarbitraryEnum",
        "fct-type": "function",
        "title": "coarbitraryEnum"
      },
      "index": {
        "description": "coarbitrary implementation for enums",
        "hierarchy": "Test QuickCheck",
        "module": "Test.QuickCheck",
        "name": "coarbitraryEnum",
        "normalized": "a-\u003eGen b-\u003eGen b",
        "package": "QuickCheck",
        "partial": "Enum",
        "signature": "a-\u003eGen b-\u003eGen b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html#v:coarbitraryIntegral",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003ecoarbitrary\u003c/a\u003e\u003c/code\u003e implementation for integral numbers.\n\u003c/p\u003e",
        "fct-module": "Test.QuickCheck",
        "fct-package": "QuickCheck",
        "fct-signature": "a -\u003e Gen b -\u003e Gen b",
        "fct-source": "src/Test-QuickCheck-Arbitrary.html#coarbitraryIntegral",
        "fct-type": "function",
        "title": "coarbitraryIntegral"
      },
      "index": {
        "description": "coarbitrary implementation for integral numbers",
        "hierarchy": "Test QuickCheck",
        "module": "Test.QuickCheck",
        "name": "coarbitraryIntegral",
        "normalized": "a-\u003eGen b-\u003eGen b",
        "package": "QuickCheck",
        "partial": "Integral",
        "signature": "a-\u003eGen b-\u003eGen b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html#v:coarbitraryReal",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003ecoarbitrary\u003c/a\u003e\u003c/code\u003e implementation for real numbers.\n\u003c/p\u003e",
        "fct-module": "Test.QuickCheck",
        "fct-package": "QuickCheck",
        "fct-signature": "a -\u003e Gen b -\u003e Gen b",
        "fct-source": "src/Test-QuickCheck-Arbitrary.html#coarbitraryReal",
        "fct-type": "function",
        "title": "coarbitraryReal"
      },
      "index": {
        "description": "coarbitrary implementation for real numbers",
        "hierarchy": "Test QuickCheck",
        "module": "Test.QuickCheck",
        "name": "coarbitraryReal",
        "normalized": "a-\u003eGen b-\u003eGen b",
        "package": "QuickCheck",
        "partial": "Real",
        "signature": "a-\u003eGen b-\u003eGen b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html#v:coarbitraryShow",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ecoarbitrary\u003c/a\u003e\u003c/code\u003e helper for lazy people :-).\n\u003c/p\u003e",
        "fct-module": "Test.QuickCheck",
        "fct-package": "QuickCheck",
        "fct-signature": "a -\u003e Gen b -\u003e Gen b",
        "fct-source": "src/Test-QuickCheck-Arbitrary.html#coarbitraryShow",
        "fct-type": "function",
        "title": "coarbitraryShow"
      },
      "index": {
        "description": "coarbitrary helper for lazy people",
        "hierarchy": "Test QuickCheck",
        "module": "Test.QuickCheck",
        "name": "coarbitraryShow",
        "normalized": "a-\u003eGen b-\u003eGen b",
        "package": "QuickCheck",
        "partial": "Show",
        "signature": "a-\u003eGen b-\u003eGen b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html#v:collect",
      "description": {
        "fct-descr": "\u003cp\u003eLabels a property with a value:\n\u003c/p\u003e\u003cpre\u003e collect x = label (show x)\n\u003c/pre\u003e",
        "fct-module": "Test.QuickCheck",
        "fct-package": "QuickCheck",
        "fct-signature": "a -\u003e prop -\u003e Property",
        "fct-source": "src/Test-QuickCheck-Property.html#collect",
        "fct-type": "function",
        "title": "collect"
      },
      "index": {
        "description": "Labels property with value collect label show",
        "hierarchy": "Test QuickCheck",
        "module": "Test.QuickCheck",
        "name": "collect",
        "normalized": "a-\u003eb-\u003eProperty",
        "package": "QuickCheck",
        "partial": "",
        "signature": "a-\u003eprop-\u003eProperty"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html#v:conjoin",
      "description": {
        "fct-descr": "\u003cp\u003eTake the conjunction of several properties.\n\u003c/p\u003e",
        "fct-module": "Test.QuickCheck",
        "fct-package": "QuickCheck",
        "fct-signature": "[prop] -\u003e Property",
        "fct-source": "src/Test-QuickCheck-Property.html#conjoin",
        "fct-type": "function",
        "title": "conjoin"
      },
      "index": {
        "description": "Take the conjunction of several properties",
        "hierarchy": "Test QuickCheck",
        "module": "Test.QuickCheck",
        "name": "conjoin",
        "normalized": "[a]-\u003eProperty",
        "package": "QuickCheck",
        "partial": "",
        "signature": "[prop]-\u003eProperty"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html#v:cover",
      "description": {
        "fct-descr": "\u003cp\u003eChecks that at least the given proportion of the test cases belong\n to the given class.\n\u003c/p\u003e",
        "fct-module": "Test.QuickCheck",
        "fct-package": "QuickCheck",
        "fct-signature": "Bool-\u003e Int-\u003e String-\u003e prop-\u003e Property",
        "fct-type": "function",
        "title": "cover"
      },
      "index": {
        "description": "Checks that at least the given proportion of the test cases belong to the given class",
        "hierarchy": "Test QuickCheck",
        "module": "Test.QuickCheck",
        "name": "cover",
        "normalized": "Bool-\u003eInt-\u003eString-\u003ea-\u003eProperty",
        "package": "QuickCheck",
        "partial": "",
        "signature": "Bool-\u003eInt-\u003eString-\u003eprop-\u003eProperty"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html#v:discard",
      "description": {
        "fct-descr": "\u003cp\u003eA special exception that makes QuickCheck discard the test case.\n Normally you should use \u003ccode\u003e==\u003e\u003c/code\u003e, but if for some reason this isn't\n possible (e.g. you are deep inside a generator), use \u003ccode\u003e\u003ca\u003ediscard\u003c/a\u003e\u003c/code\u003e\n instead.\n\u003c/p\u003e",
        "fct-module": "Test.QuickCheck",
        "fct-package": "QuickCheck",
        "fct-signature": "a",
        "fct-source": "src/Test-QuickCheck-Exception.html#discard",
        "fct-type": "function",
        "title": "discard"
      },
      "index": {
        "description": "special exception that makes QuickCheck discard the test case Normally you should use but if for some reason this isn possible e.g you are deep inside generator use discard instead",
        "hierarchy": "Test QuickCheck",
        "module": "Test.QuickCheck",
        "name": "discard",
        "normalized": "",
        "package": "QuickCheck",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html#v:disjoin",
      "description": {
        "fct-descr": "\u003cp\u003eTake the disjunction of several properties.\n\u003c/p\u003e",
        "fct-module": "Test.QuickCheck",
        "fct-package": "QuickCheck",
        "fct-signature": "[prop] -\u003e Property",
        "fct-source": "src/Test-QuickCheck-Property.html#disjoin",
        "fct-type": "function",
        "title": "disjoin"
      },
      "index": {
        "description": "Take the disjunction of several properties",
        "hierarchy": "Test QuickCheck",
        "module": "Test.QuickCheck",
        "name": "disjoin",
        "normalized": "[a]-\u003eProperty",
        "package": "QuickCheck",
        "partial": "",
        "signature": "[prop]-\u003eProperty"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html#v:elements",
      "description": {
        "fct-descr": "\u003cp\u003eGenerates one of the given values. The input list must be non-empty.\n\u003c/p\u003e",
        "fct-module": "Test.QuickCheck",
        "fct-package": "QuickCheck",
        "fct-signature": "[a] -\u003e Gen a",
        "fct-source": "src/Test-QuickCheck-Gen.html#elements",
        "fct-type": "function",
        "title": "elements"
      },
      "index": {
        "description": "Generates one of the given values The input list must be non-empty",
        "hierarchy": "Test QuickCheck",
        "module": "Test.QuickCheck",
        "name": "elements",
        "normalized": "[a]-\u003eGen a",
        "package": "QuickCheck",
        "partial": "",
        "signature": "[a]-\u003eGen a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html#v:exhaustive",
      "description": {
        "fct-module": "Test.QuickCheck",
        "fct-package": "QuickCheck",
        "fct-signature": "prop -\u003e Bool",
        "fct-source": "src/Test-QuickCheck-Property.html#exhaustive",
        "fct-type": "method",
        "title": "exhaustive"
      },
      "index": {
        "description": "",
        "hierarchy": "Test QuickCheck",
        "module": "Test.QuickCheck",
        "name": "exhaustive",
        "normalized": "a-\u003eBool",
        "package": "QuickCheck",
        "partial": "",
        "signature": "prop-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html#v:expectFailure",
      "description": {
        "fct-descr": "\u003cp\u003eModifies a property so that it is expected to fail for some test cases.\n\u003c/p\u003e",
        "fct-module": "Test.QuickCheck",
        "fct-package": "QuickCheck",
        "fct-signature": "prop -\u003e Property",
        "fct-source": "src/Test-QuickCheck-Property.html#expectFailure",
        "fct-type": "function",
        "title": "expectFailure"
      },
      "index": {
        "description": "Modifies property so that it is expected to fail for some test cases",
        "hierarchy": "Test QuickCheck",
        "module": "Test.QuickCheck",
        "name": "expectFailure",
        "normalized": "a-\u003eProperty",
        "package": "QuickCheck",
        "partial": "Failure",
        "signature": "prop-\u003eProperty"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html#v:forAll",
      "description": {
        "fct-descr": "\u003cp\u003eExplicit universal quantification: uses an explicitly given\n test case generator.\n\u003c/p\u003e",
        "fct-module": "Test.QuickCheck",
        "fct-package": "QuickCheck",
        "fct-signature": "Gen a -\u003e (a -\u003e prop) -\u003e Property",
        "fct-source": "src/Test-QuickCheck-Property.html#forAll",
        "fct-type": "function",
        "title": "forAll"
      },
      "index": {
        "description": "Explicit universal quantification uses an explicitly given test case generator",
        "hierarchy": "Test QuickCheck",
        "module": "Test.QuickCheck",
        "name": "forAll",
        "normalized": "Gen a-\u003e(a-\u003eb)-\u003eProperty",
        "package": "QuickCheck",
        "partial": "All",
        "signature": "Gen a-\u003e(a-\u003eprop)-\u003eProperty"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html#v:forAllShrink",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eforAll\u003c/a\u003e\u003c/code\u003e, but tries to shrink the argument for failing test cases.\n\u003c/p\u003e",
        "fct-module": "Test.QuickCheck",
        "fct-package": "QuickCheck",
        "fct-signature": "Gen a -\u003e (a -\u003e [a]) -\u003e (a -\u003e prop) -\u003e Property",
        "fct-source": "src/Test-QuickCheck-Property.html#forAllShrink",
        "fct-type": "function",
        "title": "forAllShrink"
      },
      "index": {
        "description": "Like forAll but tries to shrink the argument for failing test cases",
        "hierarchy": "Test QuickCheck",
        "module": "Test.QuickCheck",
        "name": "forAllShrink",
        "normalized": "Gen a-\u003e(a-\u003e[a])-\u003e(a-\u003eb)-\u003eProperty",
        "package": "QuickCheck",
        "partial": "All Shrink",
        "signature": "Gen a-\u003e(a-\u003e[a])-\u003e(a-\u003eprop)-\u003eProperty"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html#v:frequency",
      "description": {
        "fct-descr": "\u003cp\u003eChooses one of the given generators, with a weighted random distribution.\n The input list must be non-empty.\n\u003c/p\u003e",
        "fct-module": "Test.QuickCheck",
        "fct-package": "QuickCheck",
        "fct-signature": "[(Int, Gen a)] -\u003e Gen a",
        "fct-source": "src/Test-QuickCheck-Gen.html#frequency",
        "fct-type": "function",
        "title": "frequency"
      },
      "index": {
        "description": "Chooses one of the given generators with weighted random distribution The input list must be non-empty",
        "hierarchy": "Test QuickCheck",
        "module": "Test.QuickCheck",
        "name": "frequency",
        "normalized": "[(Int,Gen a)]-\u003eGen a",
        "package": "QuickCheck",
        "partial": "",
        "signature": "[(Int,Gen a)]-\u003eGen a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html#v:getNonEmpty",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Test.QuickCheck",
        "fct-package": "QuickCheck",
        "fct-signature": "[a]",
        "fct-source": "src/Test-QuickCheck-Modifiers.html#NonEmptyList",
        "fct-type": "function",
        "title": "getNonEmpty"
      },
      "index": {
        "description": "",
        "hierarchy": "Test QuickCheck",
        "module": "Test.QuickCheck",
        "name": "getNonEmpty",
        "normalized": "[a]",
        "package": "QuickCheck",
        "partial": "Non Empty",
        "signature": "[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html#v:getNonNegative",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Test.QuickCheck",
        "fct-package": "QuickCheck",
        "fct-signature": "a",
        "fct-source": "src/Test-QuickCheck-Modifiers.html#NonNegative",
        "fct-type": "function",
        "title": "getNonNegative"
      },
      "index": {
        "description": "",
        "hierarchy": "Test QuickCheck",
        "module": "Test.QuickCheck",
        "name": "getNonNegative",
        "normalized": "",
        "package": "QuickCheck",
        "partial": "Non Negative",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html#v:getNonZero",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Test.QuickCheck",
        "fct-package": "QuickCheck",
        "fct-signature": "a",
        "fct-source": "src/Test-QuickCheck-Modifiers.html#NonZero",
        "fct-type": "function",
        "title": "getNonZero"
      },
      "index": {
        "description": "",
        "hierarchy": "Test QuickCheck",
        "module": "Test.QuickCheck",
        "name": "getNonZero",
        "normalized": "",
        "package": "QuickCheck",
        "partial": "Non Zero",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html#v:getOrdered",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Test.QuickCheck",
        "fct-package": "QuickCheck",
        "fct-signature": "[a]",
        "fct-source": "src/Test-QuickCheck-Modifiers.html#OrderedList",
        "fct-type": "function",
        "title": "getOrdered"
      },
      "index": {
        "description": "",
        "hierarchy": "Test QuickCheck",
        "module": "Test.QuickCheck",
        "name": "getOrdered",
        "normalized": "[a]",
        "package": "QuickCheck",
        "partial": "Ordered",
        "signature": "[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html#v:getPositive",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Test.QuickCheck",
        "fct-package": "QuickCheck",
        "fct-signature": "a",
        "fct-source": "src/Test-QuickCheck-Modifiers.html#Positive",
        "fct-type": "function",
        "title": "getPositive"
      },
      "index": {
        "description": "",
        "hierarchy": "Test QuickCheck",
        "module": "Test.QuickCheck",
        "name": "getPositive",
        "normalized": "",
        "package": "QuickCheck",
        "partial": "Positive",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html#v:growingElements",
      "description": {
        "fct-descr": "\u003cp\u003eTakes a list of elements of increasing size, and chooses\n among an initial segment of the list. The size of this initial\n segment increases with the size parameter.\n The input list must be non-empty.\n\u003c/p\u003e",
        "fct-module": "Test.QuickCheck",
        "fct-package": "QuickCheck",
        "fct-signature": "[a] -\u003e Gen a",
        "fct-source": "src/Test-QuickCheck-Gen.html#growingElements",
        "fct-type": "function",
        "title": "growingElements"
      },
      "index": {
        "description": "Takes list of elements of increasing size and chooses among an initial segment of the list The size of this initial segment increases with the size parameter The input list must be non-empty",
        "hierarchy": "Test QuickCheck",
        "module": "Test.QuickCheck",
        "name": "growingElements",
        "normalized": "[a]-\u003eGen a",
        "package": "QuickCheck",
        "partial": "Elements",
        "signature": "[a]-\u003eGen a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html#v:interrupted",
      "description": {
        "fct-descr": "\u003cp\u003edid the user press ctrl-C?\n\u003c/p\u003e",
        "fct-module": "Test.QuickCheck",
        "fct-package": "QuickCheck",
        "fct-signature": "Bool",
        "fct-source": "src/Test-QuickCheck-Test.html#Result",
        "fct-type": "function",
        "title": "interrupted"
      },
      "index": {
        "description": "did the user press ctrl-C",
        "hierarchy": "Test QuickCheck",
        "module": "Test.QuickCheck",
        "name": "interrupted",
        "normalized": "",
        "package": "QuickCheck",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html#v:label",
      "description": {
        "fct-descr": "\u003cp\u003eAttaches a label to a property. This is used for reporting\n test case distribution.\n\u003c/p\u003e",
        "fct-module": "Test.QuickCheck",
        "fct-package": "QuickCheck",
        "fct-signature": "String -\u003e prop -\u003e Property",
        "fct-source": "src/Test-QuickCheck-Property.html#label",
        "fct-type": "function",
        "title": "label"
      },
      "index": {
        "description": "Attaches label to property This is used for reporting test case distribution",
        "hierarchy": "Test QuickCheck",
        "module": "Test.QuickCheck",
        "name": "label",
        "normalized": "String-\u003ea-\u003eProperty",
        "package": "QuickCheck",
        "partial": "",
        "signature": "String-\u003eprop-\u003eProperty"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html#v:labels",
      "description": {
        "fct-descr": "\u003cp\u003elabels and frequencies found during all successful tests\n\u003c/p\u003e\u003cp\u003elabels and frequencies found during all successful tests\n\u003c/p\u003e\u003cp\u003elabels and frequencies found during all tests\n\u003c/p\u003e\u003cp\u003elabels and frequencies found during all tests\n\u003c/p\u003e",
        "fct-module": "Test.QuickCheck",
        "fct-package": "QuickCheck",
        "fct-signature": "[(String, Int)]",
        "fct-source": "src/Test-QuickCheck-Test.html#Result",
        "fct-type": "function",
        "title": "labels"
      },
      "index": {
        "description": "labels and frequencies found during all successful tests labels and frequencies found during all successful tests labels and frequencies found during all tests labels and frequencies found during all tests",
        "hierarchy": "Test QuickCheck",
        "module": "Test.QuickCheck",
        "name": "labels",
        "normalized": "[(String,Int)]",
        "package": "QuickCheck",
        "partial": "",
        "signature": "[(String,Int)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html#v:listOf",
      "description": {
        "fct-descr": "\u003cp\u003eGenerates a list of random length. The maximum length depends on the\n size parameter.\n\u003c/p\u003e",
        "fct-module": "Test.QuickCheck",
        "fct-package": "QuickCheck",
        "fct-signature": "Gen a -\u003e Gen [a]",
        "fct-source": "src/Test-QuickCheck-Gen.html#listOf",
        "fct-type": "function",
        "title": "listOf"
      },
      "index": {
        "description": "Generates list of random length The maximum length depends on the size parameter",
        "hierarchy": "Test QuickCheck",
        "module": "Test.QuickCheck",
        "name": "listOf",
        "normalized": "Gen a-\u003eGen[a]",
        "package": "QuickCheck",
        "partial": "Of",
        "signature": "Gen a-\u003eGen[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html#v:listOf1",
      "description": {
        "fct-descr": "\u003cp\u003eGenerates a non-empty list of random length. The maximum length\n depends on the size parameter.\n\u003c/p\u003e",
        "fct-module": "Test.QuickCheck",
        "fct-package": "QuickCheck",
        "fct-signature": "Gen a -\u003e Gen [a]",
        "fct-source": "src/Test-QuickCheck-Gen.html#listOf1",
        "fct-type": "function",
        "title": "listOf1"
      },
      "index": {
        "description": "Generates non-empty list of random length The maximum length depends on the size parameter",
        "hierarchy": "Test QuickCheck",
        "module": "Test.QuickCheck",
        "name": "listOf1",
        "normalized": "Gen a-\u003eGen[a]",
        "package": "QuickCheck",
        "partial": "Of",
        "signature": "Gen a-\u003eGen[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html#v:mapSize",
      "description": {
        "fct-descr": "\u003cp\u003eChanges the maximum test case size for a property.\n\u003c/p\u003e",
        "fct-module": "Test.QuickCheck",
        "fct-package": "QuickCheck",
        "fct-signature": "(Int -\u003e Int) -\u003e prop -\u003e Property",
        "fct-source": "src/Test-QuickCheck-Property.html#mapSize",
        "fct-type": "function",
        "title": "mapSize"
      },
      "index": {
        "description": "Changes the maximum test case size for property",
        "hierarchy": "Test QuickCheck",
        "module": "Test.QuickCheck",
        "name": "mapSize",
        "normalized": "(Int-\u003eInt)-\u003ea-\u003eProperty",
        "package": "QuickCheck",
        "partial": "Size",
        "signature": "(Int-\u003eInt)-\u003eprop-\u003eProperty"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html#v:maxDiscardRatio",
      "description": {
        "fct-descr": "\u003cp\u003emaximum number of discarded tests per successful test before giving up\n\u003c/p\u003e",
        "fct-module": "Test.QuickCheck",
        "fct-package": "QuickCheck",
        "fct-signature": "Int",
        "fct-source": "src/Test-QuickCheck-Test.html#Args",
        "fct-type": "function",
        "title": "maxDiscardRatio"
      },
      "index": {
        "description": "maximum number of discarded tests per successful test before giving up",
        "hierarchy": "Test QuickCheck",
        "module": "Test.QuickCheck",
        "name": "maxDiscardRatio",
        "normalized": "",
        "package": "QuickCheck",
        "partial": "Discard Ratio",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html#v:maxSize",
      "description": {
        "fct-descr": "\u003cp\u003esize to use for the biggest test cases\n\u003c/p\u003e",
        "fct-module": "Test.QuickCheck",
        "fct-package": "QuickCheck",
        "fct-signature": "Int",
        "fct-source": "src/Test-QuickCheck-Test.html#Args",
        "fct-type": "function",
        "title": "maxSize"
      },
      "index": {
        "description": "size to use for the biggest test cases",
        "hierarchy": "Test QuickCheck",
        "module": "Test.QuickCheck",
        "name": "maxSize",
        "normalized": "",
        "package": "QuickCheck",
        "partial": "Size",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html#v:maxSuccess",
      "description": {
        "fct-descr": "\u003cp\u003emaximum number of successful tests before succeeding\n\u003c/p\u003e",
        "fct-module": "Test.QuickCheck",
        "fct-package": "QuickCheck",
        "fct-signature": "Int",
        "fct-source": "src/Test-QuickCheck-Test.html#Args",
        "fct-type": "function",
        "title": "maxSuccess"
      },
      "index": {
        "description": "maximum number of successful tests before succeeding",
        "hierarchy": "Test QuickCheck",
        "module": "Test.QuickCheck",
        "name": "maxSuccess",
        "normalized": "",
        "package": "QuickCheck",
        "partial": "Success",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html#v:numShrinks",
      "description": {
        "fct-descr": "\u003cp\u003enumber of successful shrinking steps performed\n\u003c/p\u003e",
        "fct-module": "Test.QuickCheck",
        "fct-package": "QuickCheck",
        "fct-signature": "Int",
        "fct-source": "src/Test-QuickCheck-Test.html#Result",
        "fct-type": "function",
        "title": "numShrinks"
      },
      "index": {
        "description": "number of successful shrinking steps performed",
        "hierarchy": "Test QuickCheck",
        "module": "Test.QuickCheck",
        "name": "numShrinks",
        "normalized": "",
        "package": "QuickCheck",
        "partial": "Shrinks",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html#v:numTests",
      "description": {
        "fct-descr": "\u003cp\u003enumber of tests performed\n\u003c/p\u003e\u003cp\u003enumber of tests performed\n\u003c/p\u003e\u003cp\u003enumber of successful tests performed\n\u003c/p\u003e\u003cp\u003enumber of successful tests performed\n\u003c/p\u003e",
        "fct-module": "Test.QuickCheck",
        "fct-package": "QuickCheck",
        "fct-signature": "Int",
        "fct-source": "src/Test-QuickCheck-Test.html#Result",
        "fct-type": "function",
        "title": "numTests"
      },
      "index": {
        "description": "number of tests performed number of tests performed number of successful tests performed number of successful tests performed",
        "hierarchy": "Test QuickCheck",
        "module": "Test.QuickCheck",
        "name": "numTests",
        "normalized": "",
        "package": "QuickCheck",
        "partial": "Tests",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html#v:once",
      "description": {
        "fct-descr": "\u003cp\u003eModifies a property so that it only will be tested once.\n\u003c/p\u003e",
        "fct-module": "Test.QuickCheck",
        "fct-package": "QuickCheck",
        "fct-signature": "prop -\u003e Property",
        "fct-source": "src/Test-QuickCheck-Property.html#once",
        "fct-type": "function",
        "title": "once"
      },
      "index": {
        "description": "Modifies property so that it only will be tested once",
        "hierarchy": "Test QuickCheck",
        "module": "Test.QuickCheck",
        "name": "once",
        "normalized": "a-\u003eProperty",
        "package": "QuickCheck",
        "partial": "",
        "signature": "prop-\u003eProperty"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html#v:oneof",
      "description": {
        "fct-descr": "\u003cp\u003eRandomly uses one of the given generators. The input list\n must be non-empty.\n\u003c/p\u003e",
        "fct-module": "Test.QuickCheck",
        "fct-package": "QuickCheck",
        "fct-signature": "[Gen a] -\u003e Gen a",
        "fct-source": "src/Test-QuickCheck-Gen.html#oneof",
        "fct-type": "function",
        "title": "oneof"
      },
      "index": {
        "description": "Randomly uses one of the given generators The input list must be non-empty",
        "hierarchy": "Test QuickCheck",
        "module": "Test.QuickCheck",
        "name": "oneof",
        "normalized": "[Gen a]-\u003eGen a",
        "package": "QuickCheck",
        "partial": "",
        "signature": "[Gen a]-\u003eGen a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html#v:orderedList",
      "description": {
        "fct-descr": "\u003cp\u003eGenerates an ordered list of a given length.\n\u003c/p\u003e",
        "fct-module": "Test.QuickCheck",
        "fct-package": "QuickCheck",
        "fct-signature": "Gen [a]",
        "fct-source": "src/Test-QuickCheck-Arbitrary.html#orderedList",
        "fct-type": "function",
        "title": "orderedList"
      },
      "index": {
        "description": "Generates an ordered list of given length",
        "hierarchy": "Test QuickCheck",
        "module": "Test.QuickCheck",
        "name": "orderedList",
        "normalized": "Gen[a]",
        "package": "QuickCheck",
        "partial": "List",
        "signature": "Gen[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html#v:output",
      "description": {
        "fct-descr": "\u003cp\u003eprinted output\n\u003c/p\u003e\u003cp\u003eprinted output\n\u003c/p\u003e\u003cp\u003eprinted output\n\u003c/p\u003e\u003cp\u003eprinted output\n\u003c/p\u003e",
        "fct-module": "Test.QuickCheck",
        "fct-package": "QuickCheck",
        "fct-signature": "String",
        "fct-source": "src/Test-QuickCheck-Test.html#Result",
        "fct-type": "function",
        "title": "output"
      },
      "index": {
        "description": "printed output printed output printed output printed output",
        "hierarchy": "Test QuickCheck",
        "module": "Test.QuickCheck",
        "name": "output",
        "normalized": "",
        "package": "QuickCheck",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html#v:printTestCase",
      "description": {
        "fct-descr": "\u003cp\u003ePrints a message to the terminal as part of the counterexample.\n\u003c/p\u003e",
        "fct-module": "Test.QuickCheck",
        "fct-package": "QuickCheck",
        "fct-signature": "String -\u003e prop -\u003e Property",
        "fct-source": "src/Test-QuickCheck-Property.html#printTestCase",
        "fct-type": "function",
        "title": "printTestCase"
      },
      "index": {
        "description": "Prints message to the terminal as part of the counterexample",
        "hierarchy": "Test QuickCheck",
        "module": "Test.QuickCheck",
        "name": "printTestCase",
        "normalized": "String-\u003ea-\u003eProperty",
        "package": "QuickCheck",
        "partial": "Test Case",
        "signature": "String-\u003eprop-\u003eProperty"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html#v:promote",
      "description": {
        "fct-descr": "\u003cp\u003ePromotes a monadic generator to a generator of monadic values.\n\u003c/p\u003e",
        "fct-module": "Test.QuickCheck",
        "fct-package": "QuickCheck",
        "fct-signature": "m (Gen a) -\u003e Gen (m a)",
        "fct-source": "src/Test-QuickCheck-Gen.html#promote",
        "fct-type": "function",
        "title": "promote"
      },
      "index": {
        "description": "Promotes monadic generator to generator of monadic values",
        "hierarchy": "Test QuickCheck",
        "module": "Test.QuickCheck",
        "name": "promote",
        "normalized": "a(Gen b)-\u003eGen(a b)",
        "package": "QuickCheck",
        "partial": "",
        "signature": "m(Gen a)-\u003eGen(m a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html#v:property",
      "description": {
        "fct-module": "Test.QuickCheck",
        "fct-package": "QuickCheck",
        "fct-signature": "prop -\u003e Property",
        "fct-source": "src/Test-QuickCheck-Property.html#property",
        "fct-type": "method",
        "title": "property"
      },
      "index": {
        "description": "",
        "hierarchy": "Test QuickCheck",
        "module": "Test.QuickCheck",
        "name": "property",
        "normalized": "a-\u003eProperty",
        "package": "QuickCheck",
        "partial": "",
        "signature": "prop-\u003eProperty"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html#v:quickCheck",
      "description": {
        "fct-descr": "\u003cp\u003eTests a property and prints the results to \u003ccode\u003estdout\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Test.QuickCheck",
        "fct-package": "QuickCheck",
        "fct-signature": "prop -\u003e IO ()",
        "fct-source": "src/Test-QuickCheck-Test.html#quickCheck",
        "fct-type": "function",
        "title": "quickCheck"
      },
      "index": {
        "description": "Tests property and prints the results to stdout",
        "hierarchy": "Test QuickCheck",
        "module": "Test.QuickCheck",
        "name": "quickCheck",
        "normalized": "a-\u003eIO()",
        "package": "QuickCheck",
        "partial": "Check",
        "signature": "prop-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html#v:quickCheckResult",
      "description": {
        "fct-descr": "\u003cp\u003eTests a property, produces a test result, and prints the results to \u003ccode\u003estdout\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Test.QuickCheck",
        "fct-package": "QuickCheck",
        "fct-signature": "prop -\u003e IO Result",
        "fct-source": "src/Test-QuickCheck-Test.html#quickCheckResult",
        "fct-type": "function",
        "title": "quickCheckResult"
      },
      "index": {
        "description": "Tests property produces test result and prints the results to stdout",
        "hierarchy": "Test QuickCheck",
        "module": "Test.QuickCheck",
        "name": "quickCheckResult",
        "normalized": "a-\u003eIO Result",
        "package": "QuickCheck",
        "partial": "Check Result",
        "signature": "prop-\u003eIO Result"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html#v:quickCheckWith",
      "description": {
        "fct-descr": "\u003cp\u003eTests a property, using test arguments, and prints the results to \u003ccode\u003estdout\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Test.QuickCheck",
        "fct-package": "QuickCheck",
        "fct-signature": "Args -\u003e prop -\u003e IO ()",
        "fct-source": "src/Test-QuickCheck-Test.html#quickCheckWith",
        "fct-type": "function",
        "title": "quickCheckWith"
      },
      "index": {
        "description": "Tests property using test arguments and prints the results to stdout",
        "hierarchy": "Test QuickCheck",
        "module": "Test.QuickCheck",
        "name": "quickCheckWith",
        "normalized": "Args-\u003ea-\u003eIO()",
        "package": "QuickCheck",
        "partial": "Check With",
        "signature": "Args-\u003eprop-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html#v:quickCheckWithResult",
      "description": {
        "fct-descr": "\u003cp\u003eTests a property, using test arguments, produces a test result, and prints the results to \u003ccode\u003estdout\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Test.QuickCheck",
        "fct-package": "QuickCheck",
        "fct-signature": "Args -\u003e prop -\u003e IO Result",
        "fct-source": "src/Test-QuickCheck-Test.html#quickCheckWithResult",
        "fct-type": "function",
        "title": "quickCheckWithResult"
      },
      "index": {
        "description": "Tests property using test arguments produces test result and prints the results to stdout",
        "hierarchy": "Test QuickCheck",
        "module": "Test.QuickCheck",
        "name": "quickCheckWithResult",
        "normalized": "Args-\u003ea-\u003eIO Result",
        "package": "QuickCheck",
        "partial": "Check With Result",
        "signature": "Args-\u003eprop-\u003eIO Result"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html#v:ranges",
      "description": {
        "fct-module": "Test.QuickCheck",
        "fct-package": "QuickCheck",
        "fct-signature": "a -\u003e a -\u003e Str",
        "fct-source": "src/Test-QuickCheck-Text.html#ranges",
        "fct-type": "function",
        "title": "ranges"
      },
      "index": {
        "description": "",
        "hierarchy": "Test QuickCheck",
        "module": "Test.QuickCheck",
        "name": "ranges",
        "normalized": "a-\u003ea-\u003eStr",
        "package": "QuickCheck",
        "partial": "",
        "signature": "a-\u003ea-\u003eStr"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html#v:reason",
      "description": {
        "fct-descr": "\u003cp\u003ewhat was the reason\n\u003c/p\u003e",
        "fct-module": "Test.QuickCheck",
        "fct-package": "QuickCheck",
        "fct-signature": "String",
        "fct-source": "src/Test-QuickCheck-Test.html#Result",
        "fct-type": "function",
        "title": "reason"
      },
      "index": {
        "description": "what was the reason",
        "hierarchy": "Test QuickCheck",
        "module": "Test.QuickCheck",
        "name": "reason",
        "normalized": "",
        "package": "QuickCheck",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html#v:replay",
      "description": {
        "fct-descr": "\u003cp\u003eshould we replay a previous test?\n\u003c/p\u003e",
        "fct-module": "Test.QuickCheck",
        "fct-package": "QuickCheck",
        "fct-signature": "Maybe (StdGen, Int)",
        "fct-source": "src/Test-QuickCheck-Test.html#Args",
        "fct-type": "function",
        "title": "replay"
      },
      "index": {
        "description": "should we replay previous test",
        "hierarchy": "Test QuickCheck",
        "module": "Test.QuickCheck",
        "name": "replay",
        "normalized": "Maybe(StdGen,Int)",
        "package": "QuickCheck",
        "partial": "",
        "signature": "Maybe(StdGen,Int)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html#v:resize",
      "description": {
        "fct-descr": "\u003cp\u003eOverrides the size parameter. Returns a generator which uses\n the given size instead of the runtime-size parameter.\n\u003c/p\u003e",
        "fct-module": "Test.QuickCheck",
        "fct-package": "QuickCheck",
        "fct-signature": "Int -\u003e Gen a -\u003e Gen a",
        "fct-source": "src/Test-QuickCheck-Gen.html#resize",
        "fct-type": "function",
        "title": "resize"
      },
      "index": {
        "description": "Overrides the size parameter Returns generator which uses the given size instead of the runtime-size parameter",
        "hierarchy": "Test QuickCheck",
        "module": "Test.QuickCheck",
        "name": "resize",
        "normalized": "Int-\u003eGen a-\u003eGen a",
        "package": "QuickCheck",
        "partial": "",
        "signature": "Int-\u003eGen a-\u003eGen a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html#v:sample",
      "description": {
        "fct-descr": "\u003cp\u003eGenerates some example values and prints them to \u003ccode\u003estdout\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Test.QuickCheck",
        "fct-package": "QuickCheck",
        "fct-signature": "Gen a -\u003e IO ()",
        "fct-source": "src/Test-QuickCheck-Gen.html#sample",
        "fct-type": "function",
        "title": "sample"
      },
      "index": {
        "description": "Generates some example values and prints them to stdout",
        "hierarchy": "Test QuickCheck",
        "module": "Test.QuickCheck",
        "name": "sample",
        "normalized": "Gen a-\u003eIO()",
        "package": "QuickCheck",
        "partial": "",
        "signature": "Gen a-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html#v:sample-39-",
      "description": {
        "fct-descr": "\u003cp\u003eGenerates some example values.\n\u003c/p\u003e",
        "fct-module": "Test.QuickCheck",
        "fct-package": "QuickCheck",
        "fct-signature": "Gen a -\u003e IO [a]",
        "fct-source": "src/Test-QuickCheck-Gen.html#sample%27",
        "fct-type": "function",
        "title": "sample'"
      },
      "index": {
        "description": "Generates some example values",
        "hierarchy": "Test QuickCheck",
        "module": "Test.QuickCheck",
        "name": "sample'",
        "normalized": "Gen a-\u003eIO[a]",
        "package": "QuickCheck",
        "partial": "",
        "signature": "Gen a-\u003eIO[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html#v:shrink",
      "description": {
        "fct-descr": "\u003cp\u003eProduces a (possibly) empty list of all the possible\n immediate shrinks of the given value.\n\u003c/p\u003e",
        "fct-module": "Test.QuickCheck",
        "fct-package": "QuickCheck",
        "fct-signature": "a -\u003e [a]",
        "fct-source": "src/Test-QuickCheck-Arbitrary.html#shrink",
        "fct-type": "method",
        "title": "shrink"
      },
      "index": {
        "description": "Produces possibly empty list of all the possible immediate shrinks of the given value",
        "hierarchy": "Test QuickCheck",
        "module": "Test.QuickCheck",
        "name": "shrink",
        "normalized": "a-\u003e[a]",
        "package": "QuickCheck",
        "partial": "",
        "signature": "a-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html#v:shrinkInit",
      "description": {
        "fct-module": "Test.QuickCheck",
        "fct-package": "QuickCheck",
        "fct-signature": "a -\u003e s",
        "fct-source": "src/Test-QuickCheck-Modifiers.html#shrinkInit",
        "fct-type": "method",
        "title": "shrinkInit"
      },
      "index": {
        "description": "",
        "hierarchy": "Test QuickCheck",
        "module": "Test.QuickCheck",
        "name": "shrinkInit",
        "normalized": "a-\u003eb",
        "package": "QuickCheck",
        "partial": "Init",
        "signature": "a-\u003es"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html#v:shrinkIntegral",
      "description": {
        "fct-descr": "\u003cp\u003eShrink an integral number.\n\u003c/p\u003e",
        "fct-module": "Test.QuickCheck",
        "fct-package": "QuickCheck",
        "fct-signature": "a -\u003e [a]",
        "fct-source": "src/Test-QuickCheck-Arbitrary.html#shrinkIntegral",
        "fct-type": "function",
        "title": "shrinkIntegral"
      },
      "index": {
        "description": "Shrink an integral number",
        "hierarchy": "Test QuickCheck",
        "module": "Test.QuickCheck",
        "name": "shrinkIntegral",
        "normalized": "a-\u003e[a]",
        "package": "QuickCheck",
        "partial": "Integral",
        "signature": "a-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html#v:shrinkNothing",
      "description": {
        "fct-descr": "\u003cp\u003eReturns no shrinking alternatives.\n\u003c/p\u003e",
        "fct-module": "Test.QuickCheck",
        "fct-package": "QuickCheck",
        "fct-signature": "a -\u003e [a]",
        "fct-source": "src/Test-QuickCheck-Arbitrary.html#shrinkNothing",
        "fct-type": "function",
        "title": "shrinkNothing"
      },
      "index": {
        "description": "Returns no shrinking alternatives",
        "hierarchy": "Test QuickCheck",
        "module": "Test.QuickCheck",
        "name": "shrinkNothing",
        "normalized": "a-\u003e[a]",
        "package": "QuickCheck",
        "partial": "Nothing",
        "signature": "a-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html#v:shrinkRealFrac",
      "description": {
        "fct-descr": "\u003cp\u003eShrink a fraction.\n\u003c/p\u003e",
        "fct-module": "Test.QuickCheck",
        "fct-package": "QuickCheck",
        "fct-signature": "a -\u003e [a]",
        "fct-source": "src/Test-QuickCheck-Arbitrary.html#shrinkRealFrac",
        "fct-type": "function",
        "title": "shrinkRealFrac"
      },
      "index": {
        "description": "Shrink fraction",
        "hierarchy": "Test QuickCheck",
        "module": "Test.QuickCheck",
        "name": "shrinkRealFrac",
        "normalized": "a-\u003e[a]",
        "package": "QuickCheck",
        "partial": "Real Frac",
        "signature": "a-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html#v:shrinkState",
      "description": {
        "fct-module": "Test.QuickCheck",
        "fct-package": "QuickCheck",
        "fct-signature": "a -\u003e s -\u003e [(a, s)]",
        "fct-source": "src/Test-QuickCheck-Modifiers.html#shrinkState",
        "fct-type": "method",
        "title": "shrinkState"
      },
      "index": {
        "description": "",
        "hierarchy": "Test QuickCheck",
        "module": "Test.QuickCheck",
        "name": "shrinkState",
        "normalized": "a-\u003eb-\u003e[(a,b)]",
        "package": "QuickCheck",
        "partial": "State",
        "signature": "a-\u003es-\u003e[(a,s)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html#v:shrinking",
      "description": {
        "fct-descr": "\u003cp\u003eShrinks the argument to property if it fails. Shrinking is done\n automatically for most types. This is only needed when you want to\n override the default behavior.\n\u003c/p\u003e",
        "fct-module": "Test.QuickCheck",
        "fct-package": "QuickCheck",
        "fct-signature": "(a -\u003e [a])-\u003e a-\u003e (a -\u003e prop)-\u003e Property",
        "fct-type": "function",
        "title": "shrinking"
      },
      "index": {
        "description": "Shrinks the argument to property if it fails Shrinking is done automatically for most types This is only needed when you want to override the default behavior",
        "hierarchy": "Test QuickCheck",
        "module": "Test.QuickCheck",
        "name": "shrinking",
        "normalized": "(a-\u003e[a])-\u003ea-\u003e(a-\u003eb)-\u003eProperty",
        "package": "QuickCheck",
        "partial": "",
        "signature": "(a-\u003e[a])-\u003ea-\u003e(a-\u003eprop)-\u003eProperty"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html#v:sized",
      "description": {
        "fct-descr": "\u003cp\u003eUsed to construct generators that depend on the size parameter.\n\u003c/p\u003e",
        "fct-module": "Test.QuickCheck",
        "fct-package": "QuickCheck",
        "fct-signature": "(Int -\u003e Gen a) -\u003e Gen a",
        "fct-source": "src/Test-QuickCheck-Gen.html#sized",
        "fct-type": "function",
        "title": "sized"
      },
      "index": {
        "description": "Used to construct generators that depend on the size parameter",
        "hierarchy": "Test QuickCheck",
        "module": "Test.QuickCheck",
        "name": "sized",
        "normalized": "(Int-\u003eGen a)-\u003eGen a",
        "package": "QuickCheck",
        "partial": "",
        "signature": "(Int-\u003eGen a)-\u003eGen a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html#v:stdArgs",
      "description": {
        "fct-descr": "\u003cp\u003estdArgs are the default test arguments used\n\u003c/p\u003e",
        "fct-module": "Test.QuickCheck",
        "fct-package": "QuickCheck",
        "fct-signature": "Args",
        "fct-source": "src/Test-QuickCheck-Test.html#stdArgs",
        "fct-type": "function",
        "title": "stdArgs"
      },
      "index": {
        "description": "stdArgs are the default test arguments used",
        "hierarchy": "Test QuickCheck",
        "module": "Test.QuickCheck",
        "name": "stdArgs",
        "normalized": "",
        "package": "QuickCheck",
        "partial": "Args",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html#v:suchThat",
      "description": {
        "fct-descr": "\u003cp\u003eGenerates a value that satisfies a predicate.\n\u003c/p\u003e",
        "fct-module": "Test.QuickCheck",
        "fct-package": "QuickCheck",
        "fct-signature": "Gen a -\u003e (a -\u003e Bool) -\u003e Gen a",
        "fct-source": "src/Test-QuickCheck-Gen.html#suchThat",
        "fct-type": "function",
        "title": "suchThat"
      },
      "index": {
        "description": "Generates value that satisfies predicate",
        "hierarchy": "Test QuickCheck",
        "module": "Test.QuickCheck",
        "name": "suchThat",
        "normalized": "Gen a-\u003e(a-\u003eBool)-\u003eGen a",
        "package": "QuickCheck",
        "partial": "That",
        "signature": "Gen a-\u003e(a-\u003eBool)-\u003eGen a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html#v:suchThatMaybe",
      "description": {
        "fct-descr": "\u003cp\u003eTries to generate a value that satisfies a predicate.\n\u003c/p\u003e",
        "fct-module": "Test.QuickCheck",
        "fct-package": "QuickCheck",
        "fct-signature": "Gen a -\u003e (a -\u003e Bool) -\u003e Gen (Maybe a)",
        "fct-source": "src/Test-QuickCheck-Gen.html#suchThatMaybe",
        "fct-type": "function",
        "title": "suchThatMaybe"
      },
      "index": {
        "description": "Tries to generate value that satisfies predicate",
        "hierarchy": "Test QuickCheck",
        "module": "Test.QuickCheck",
        "name": "suchThatMaybe",
        "normalized": "Gen a-\u003e(a-\u003eBool)-\u003eGen(Maybe a)",
        "package": "QuickCheck",
        "partial": "That Maybe",
        "signature": "Gen a-\u003e(a-\u003eBool)-\u003eGen(Maybe a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html#v:usedSeed",
      "description": {
        "fct-descr": "\u003cp\u003ewhat seed was used\n\u003c/p\u003e",
        "fct-module": "Test.QuickCheck",
        "fct-package": "QuickCheck",
        "fct-signature": "StdGen",
        "fct-source": "src/Test-QuickCheck-Test.html#Result",
        "fct-type": "function",
        "title": "usedSeed"
      },
      "index": {
        "description": "what seed was used",
        "hierarchy": "Test QuickCheck",
        "module": "Test.QuickCheck",
        "name": "usedSeed",
        "normalized": "",
        "package": "QuickCheck",
        "partial": "Seed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html#v:usedSize",
      "description": {
        "fct-descr": "\u003cp\u003ewhat was the test size\n\u003c/p\u003e",
        "fct-module": "Test.QuickCheck",
        "fct-package": "QuickCheck",
        "fct-signature": "Int",
        "fct-source": "src/Test-QuickCheck-Test.html#Result",
        "fct-type": "function",
        "title": "usedSize"
      },
      "index": {
        "description": "what was the test size",
        "hierarchy": "Test QuickCheck",
        "module": "Test.QuickCheck",
        "name": "usedSize",
        "normalized": "",
        "package": "QuickCheck",
        "partial": "Size",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html#v:variant",
      "description": {
        "fct-descr": "\u003cp\u003eModifies a generator using an integer seed.\n\u003c/p\u003e",
        "fct-module": "Test.QuickCheck",
        "fct-package": "QuickCheck",
        "fct-signature": "n -\u003e Gen a -\u003e Gen a",
        "fct-source": "src/Test-QuickCheck-Gen.html#variant",
        "fct-type": "function",
        "title": "variant"
      },
      "index": {
        "description": "Modifies generator using an integer seed",
        "hierarchy": "Test QuickCheck",
        "module": "Test.QuickCheck",
        "name": "variant",
        "normalized": "a-\u003eGen b-\u003eGen b",
        "package": "QuickCheck",
        "partial": "",
        "signature": "n-\u003eGen a-\u003eGen a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html#v:vector",
      "description": {
        "fct-descr": "\u003cp\u003eGenerates a list of a given length.\n\u003c/p\u003e",
        "fct-module": "Test.QuickCheck",
        "fct-package": "QuickCheck",
        "fct-signature": "Int -\u003e Gen [a]",
        "fct-source": "src/Test-QuickCheck-Arbitrary.html#vector",
        "fct-type": "function",
        "title": "vector"
      },
      "index": {
        "description": "Generates list of given length",
        "hierarchy": "Test QuickCheck",
        "module": "Test.QuickCheck",
        "name": "vector",
        "normalized": "Int-\u003eGen[a]",
        "package": "QuickCheck",
        "partial": "",
        "signature": "Int-\u003eGen[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html#v:vectorOf",
      "description": {
        "fct-descr": "\u003cp\u003eGenerates a list of the given length.\n\u003c/p\u003e",
        "fct-module": "Test.QuickCheck",
        "fct-package": "QuickCheck",
        "fct-signature": "Int -\u003e Gen a -\u003e Gen [a]",
        "fct-source": "src/Test-QuickCheck-Gen.html#vectorOf",
        "fct-type": "function",
        "title": "vectorOf"
      },
      "index": {
        "description": "Generates list of the given length",
        "hierarchy": "Test QuickCheck",
        "module": "Test.QuickCheck",
        "name": "vectorOf",
        "normalized": "Int-\u003eGen a-\u003eGen[a]",
        "package": "QuickCheck",
        "partial": "Of",
        "signature": "Int-\u003eGen a-\u003eGen[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html#v:verbose",
      "description": {
        "fct-descr": "\u003cp\u003ePrints out the generated testcase every time the property is tested,\n like \u003ccode\u003everboseCheck\u003c/code\u003e from QuickCheck 1.\n Only variables quantified over \u003cem\u003einside\u003c/em\u003e the \u003ccode\u003e\u003ca\u003everbose\u003c/a\u003e\u003c/code\u003e are printed.\n\u003c/p\u003e",
        "fct-module": "Test.QuickCheck",
        "fct-package": "QuickCheck",
        "fct-signature": "prop -\u003e Property",
        "fct-source": "src/Test-QuickCheck-Property.html#verbose",
        "fct-type": "function",
        "title": "verbose"
      },
      "index": {
        "description": "Prints out the generated testcase every time the property is tested like verboseCheck from QuickCheck Only variables quantified over inside the verbose are printed",
        "hierarchy": "Test QuickCheck",
        "module": "Test.QuickCheck",
        "name": "verbose",
        "normalized": "a-\u003eProperty",
        "package": "QuickCheck",
        "partial": "",
        "signature": "prop-\u003eProperty"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html#v:verboseCheck",
      "description": {
        "fct-descr": "\u003cp\u003eTests a property and prints the results and all test cases generated to \u003ccode\u003estdout\u003c/code\u003e.\n This is just a convenience function that means the same as \u003ccode\u003e\u003ca\u003equickCheck\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003e.\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003everbose\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Test.QuickCheck",
        "fct-package": "QuickCheck",
        "fct-signature": "prop -\u003e IO ()",
        "fct-source": "src/Test-QuickCheck-Test.html#verboseCheck",
        "fct-type": "function",
        "title": "verboseCheck"
      },
      "index": {
        "description": "Tests property and prints the results and all test cases generated to stdout This is just convenience function that means the same as quickCheck verbose",
        "hierarchy": "Test QuickCheck",
        "module": "Test.QuickCheck",
        "name": "verboseCheck",
        "normalized": "a-\u003eIO()",
        "package": "QuickCheck",
        "partial": "Check",
        "signature": "prop-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html#v:verboseCheckResult",
      "description": {
        "fct-descr": "\u003cp\u003eTests a property, produces a test result, and prints the results and all test cases generated to \u003ccode\u003estdout\u003c/code\u003e.\n This is just a convenience function that combines \u003ccode\u003e\u003ca\u003equickCheckResult\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003everbose\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Test.QuickCheck",
        "fct-package": "QuickCheck",
        "fct-signature": "prop -\u003e IO Result",
        "fct-source": "src/Test-QuickCheck-Test.html#verboseCheckResult",
        "fct-type": "function",
        "title": "verboseCheckResult"
      },
      "index": {
        "description": "Tests property produces test result and prints the results and all test cases generated to stdout This is just convenience function that combines quickCheckResult and verbose",
        "hierarchy": "Test QuickCheck",
        "module": "Test.QuickCheck",
        "name": "verboseCheckResult",
        "normalized": "a-\u003eIO Result",
        "package": "QuickCheck",
        "partial": "Check Result",
        "signature": "prop-\u003eIO Result"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html#v:verboseCheckWith",
      "description": {
        "fct-descr": "\u003cp\u003eTests a property, using test arguments, and prints the results and all test cases generated to \u003ccode\u003estdout\u003c/code\u003e.\n This is just a convenience function that combines \u003ccode\u003e\u003ca\u003equickCheckWith\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003everbose\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Test.QuickCheck",
        "fct-package": "QuickCheck",
        "fct-signature": "Args -\u003e prop -\u003e IO ()",
        "fct-source": "src/Test-QuickCheck-Test.html#verboseCheckWith",
        "fct-type": "function",
        "title": "verboseCheckWith"
      },
      "index": {
        "description": "Tests property using test arguments and prints the results and all test cases generated to stdout This is just convenience function that combines quickCheckWith and verbose",
        "hierarchy": "Test QuickCheck",
        "module": "Test.QuickCheck",
        "name": "verboseCheckWith",
        "normalized": "Args-\u003ea-\u003eIO()",
        "package": "QuickCheck",
        "partial": "Check With",
        "signature": "Args-\u003eprop-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html#v:verboseCheckWithResult",
      "description": {
        "fct-descr": "\u003cp\u003eTests a property, using test arguments, produces a test result, and prints the results and all test cases generated to \u003ccode\u003estdout\u003c/code\u003e.\n This is just a convenience function that combines \u003ccode\u003e\u003ca\u003equickCheckWithResult\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003everbose\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Test.QuickCheck",
        "fct-package": "QuickCheck",
        "fct-signature": "Args -\u003e prop -\u003e IO Result",
        "fct-source": "src/Test-QuickCheck-Test.html#verboseCheckWithResult",
        "fct-type": "function",
        "title": "verboseCheckWithResult"
      },
      "index": {
        "description": "Tests property using test arguments produces test result and prints the results and all test cases generated to stdout This is just convenience function that combines quickCheckWithResult and verbose",
        "hierarchy": "Test QuickCheck",
        "module": "Test.QuickCheck",
        "name": "verboseCheckWithResult",
        "normalized": "Args-\u003ea-\u003eIO Result",
        "package": "QuickCheck",
        "partial": "Check With Result",
        "signature": "Args-\u003eprop-\u003eIO Result"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html#v:whenFail",
      "description": {
        "fct-descr": "\u003cp\u003ePerforms an \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e action after the last failure of a property.\n\u003c/p\u003e",
        "fct-module": "Test.QuickCheck",
        "fct-package": "QuickCheck",
        "fct-signature": "IO () -\u003e prop -\u003e Property",
        "fct-source": "src/Test-QuickCheck-Property.html#whenFail",
        "fct-type": "function",
        "title": "whenFail"
      },
      "index": {
        "description": "Performs an IO action after the last failure of property",
        "hierarchy": "Test QuickCheck",
        "module": "Test.QuickCheck",
        "name": "whenFail",
        "normalized": "IO()-\u003ea-\u003eProperty",
        "package": "QuickCheck",
        "partial": "Fail",
        "signature": "IO()-\u003eprop-\u003eProperty"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html#v:whenFail-39-",
      "description": {
        "fct-descr": "\u003cp\u003ePerforms an \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e action every time a property fails. Thus,\n if shrinking is done, this can be used to keep track of the\n failures along the way.\n\u003c/p\u003e",
        "fct-module": "Test.QuickCheck",
        "fct-package": "QuickCheck",
        "fct-signature": "IO () -\u003e prop -\u003e Property",
        "fct-source": "src/Test-QuickCheck-Property.html#whenFail%27",
        "fct-type": "function",
        "title": "whenFail'"
      },
      "index": {
        "description": "Performs an IO action every time property fails Thus if shrinking is done this can be used to keep track of the failures along the way",
        "hierarchy": "Test QuickCheck",
        "module": "Test.QuickCheck",
        "name": "whenFail'",
        "normalized": "IO()-\u003ea-\u003eProperty",
        "package": "QuickCheck",
        "partial": "Fail'",
        "signature": "IO()-\u003eprop-\u003eProperty"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html#v:within",
      "description": {
        "fct-descr": "\u003cp\u003eConsiders a property failed if it does not complete within\n the given number of microseconds.\n\u003c/p\u003e",
        "fct-module": "Test.QuickCheck",
        "fct-package": "QuickCheck",
        "fct-signature": "Int -\u003e prop -\u003e Property",
        "fct-source": "src/Test-QuickCheck-Property.html#within",
        "fct-type": "function",
        "title": "within"
      },
      "index": {
        "description": "Considers property failed if it does not complete within the given number of microseconds",
        "hierarchy": "Test QuickCheck",
        "module": "Test.QuickCheck",
        "name": "within",
        "normalized": "Int-\u003ea-\u003eProperty",
        "package": "QuickCheck",
        "partial": "",
        "signature": "Int-\u003eprop-\u003eProperty"
      }
    }
  }
]