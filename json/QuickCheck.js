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
        "word": "QuickCheck"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eExperimental features using Template Haskell.\n You need to have a \u003ccode\u003e{-# LANGUAGE TemplateHaskell #-}\u003c/code\u003e pragma in\n your module for any of these to work.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Test.QuickCheck.All",
          "name": "All",
          "package": "QuickCheck",
          "source": "src/Test-QuickCheck-All.html",
          "type": "module"
        },
        "index": {
          "description": "Experimental features using Template Haskell You need to have LANGUAGE TemplateHaskell pragma in your module for any of these to work",
          "hierarchy": "Test QuickCheck All",
          "module": "Test.QuickCheck.All",
          "name": "All",
          "package": "QuickCheck",
          "partial": "All",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-All.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTest all properties in the current module, using a custom\n \u003ccode\u003e\u003ca\u003equickCheck\u003c/a\u003e\u003c/code\u003e function. The same caveats as with \u003ccode\u003e\u003ca\u003equickCheckAll\u003c/a\u003e\u003c/code\u003e\n apply.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e$\u003ccode\u003e\u003ca\u003eforAllProperties\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e has type \u003ccode\u003e(\u003ccode\u003e\u003ca\u003eProperty\u003c/a\u003e\u003c/code\u003e -\u003e \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eResult\u003c/a\u003e\u003c/code\u003e) -\u003e \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eBool\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n An example invocation is \u003ccode\u003e$\u003ccode\u003e\u003ca\u003eforAllProperties\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003equickCheckResult\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e,\n which does the same thing as \u003ccode\u003e$\u003ccode\u003e\u003ca\u003equickCheckAll\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Test.QuickCheck.All",
          "name": "forAllProperties",
          "package": "QuickCheck",
          "signature": "Q Exp",
          "source": "src/Test-QuickCheck-All.html#forAllProperties",
          "type": "function"
        },
        "index": {
          "description": "Test all properties in the current module using custom quickCheck function The same caveats as with quickCheckAll apply forAllProperties has type Property IO Result IO Bool An example invocation is forAllProperties quickCheckResult which does the same thing as quickCheckAll",
          "hierarchy": "Test QuickCheck All",
          "module": "Test.QuickCheck.All",
          "name": "forAllProperties",
          "package": "QuickCheck",
          "partial": "All Properties",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-All.html#v:forAllProperties"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMonomorphise an arbitrary name by defaulting all type variables to \u003ccode\u003e\u003ca\u003eInteger\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eFor example, if \u003ccode\u003ef\u003c/code\u003e has type \u003ccode\u003e\u003ccode\u003e\u003ca\u003eOrd\u003c/a\u003e\u003c/code\u003e a =\u003e [a] -\u003e [a]\u003c/code\u003e\n then \u003ccode\u003e$(\u003ccode\u003e\u003ca\u003emono\u003c/a\u003e\u003c/code\u003e 'f)\u003c/code\u003e has type \u003ccode\u003e[\u003ccode\u003e\u003ca\u003eInteger\u003c/a\u003e\u003c/code\u003e] -\u003e [\u003ccode\u003e\u003ca\u003eInteger\u003c/a\u003e\u003c/code\u003e]\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Test.QuickCheck.All",
          "name": "mono",
          "package": "QuickCheck",
          "signature": "Name -\u003e ExpQ",
          "source": "src/Test-QuickCheck-All.html#mono",
          "type": "function"
        },
        "index": {
          "description": "Monomorphise an arbitrary name by defaulting all type variables to Integer For example if has type Ord then mono has type Integer Integer",
          "hierarchy": "Test QuickCheck All",
          "module": "Test.QuickCheck.All",
          "name": "mono",
          "normalized": "Name-\u003eExpQ",
          "package": "QuickCheck",
          "signature": "Name-\u003eExpQ",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-All.html#v:mono"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTest a polymorphic property, defaulting all type variables to \u003ccode\u003e\u003ca\u003eInteger\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eInvoke as \u003ccode\u003e$(\u003ccode\u003e\u003ca\u003epolyQuickCheck\u003c/a\u003e\u003c/code\u003e 'prop)\u003c/code\u003e, where \u003ccode\u003eprop\u003c/code\u003e is a property.\n Note that just evaluating \u003ccode\u003e\u003ccode\u003e\u003ca\u003equickCheck\u003c/a\u003e\u003c/code\u003e prop\u003c/code\u003e in GHCi will seem to\n work, but will silently default all type variables to \u003ccode\u003e()\u003c/code\u003e!\n\u003c/p\u003e",
          "module": "Test.QuickCheck.All",
          "name": "polyQuickCheck",
          "package": "QuickCheck",
          "signature": "Name -\u003e ExpQ",
          "source": "src/Test-QuickCheck-All.html#polyQuickCheck",
          "type": "function"
        },
        "index": {
          "description": "Test polymorphic property defaulting all type variables to Integer Invoke as polyQuickCheck prop where prop is property Note that just evaluating quickCheck prop in GHCi will seem to work but will silently default all type variables to",
          "hierarchy": "Test QuickCheck All",
          "module": "Test.QuickCheck.All",
          "name": "polyQuickCheck",
          "normalized": "Name-\u003eExpQ",
          "package": "QuickCheck",
          "partial": "Quick Check",
          "signature": "Name-\u003eExpQ",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-All.html#v:polyQuickCheck"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTest a polymorphic property, defaulting all type variables to \u003ccode\u003e\u003ca\u003eInteger\u003c/a\u003e\u003c/code\u003e.\n This is just a convenience function that combines \u003ccode\u003e\u003ca\u003epolyQuickCheck\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003everbose\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Test.QuickCheck.All",
          "name": "polyVerboseCheck",
          "package": "QuickCheck",
          "signature": "Name -\u003e ExpQ",
          "source": "src/Test-QuickCheck-All.html#polyVerboseCheck",
          "type": "function"
        },
        "index": {
          "description": "Test polymorphic property defaulting all type variables to Integer This is just convenience function that combines polyQuickCheck and verbose",
          "hierarchy": "Test QuickCheck All",
          "module": "Test.QuickCheck.All",
          "name": "polyVerboseCheck",
          "normalized": "Name-\u003eExpQ",
          "package": "QuickCheck",
          "partial": "Verbose Check",
          "signature": "Name-\u003eExpQ",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-All.html#v:polyVerboseCheck"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTest all properties in the current module.\n The name of the property must begin with \u003ccode\u003eprop_\u003c/code\u003e.\n Polymorphic properties will be defaulted to \u003ccode\u003e\u003ca\u003eInteger\u003c/a\u003e\u003c/code\u003e.\n Returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if all tests succeeded, \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e otherwise.\n\u003c/p\u003e\u003cp\u003eUsing \u003ccode\u003e\u003ca\u003equickCheckAll\u003c/a\u003e\u003c/code\u003e interactively doesn't work.\n Instead, add a definition to your module along the lines of\n\u003c/p\u003e\u003cpre\u003e runTests = $quickCheckAll\n\u003c/pre\u003e\u003cp\u003eand then execute \u003ccode\u003erunTests\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Test.QuickCheck.All",
          "name": "quickCheckAll",
          "package": "QuickCheck",
          "signature": "Q Exp",
          "source": "src/Test-QuickCheck-All.html#quickCheckAll",
          "type": "function"
        },
        "index": {
          "description": "Test all properties in the current module The name of the property must begin with prop Polymorphic properties will be defaulted to Integer Returns True if all tests succeeded False otherwise Using quickCheckAll interactively doesn work Instead add definition to your module along the lines of runTests quickCheckAll and then execute runTests",
          "hierarchy": "Test QuickCheck All",
          "module": "Test.QuickCheck.All",
          "name": "quickCheckAll",
          "package": "QuickCheck",
          "partial": "Check All",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-All.html#v:quickCheckAll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTest all properties in the current module.\n This is just a convenience function that combines \u003ccode\u003e\u003ca\u003equickCheckAll\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003everbose\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Test.QuickCheck.All",
          "name": "verboseCheckAll",
          "package": "QuickCheck",
          "signature": "Q Exp",
          "source": "src/Test-QuickCheck-All.html#verboseCheckAll",
          "type": "function"
        },
        "index": {
          "description": "Test all properties in the current module This is just convenience function that combines quickCheckAll and verbose",
          "hierarchy": "Test QuickCheck All",
          "module": "Test.QuickCheck.All",
          "name": "verboseCheckAll",
          "package": "QuickCheck",
          "partial": "Check All",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-All.html#v:verboseCheckAll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.QuickCheck.Arbitrary",
          "name": "Arbitrary",
          "package": "QuickCheck",
          "source": "src/Test-QuickCheck-Arbitrary.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Test QuickCheck Arbitrary",
          "module": "Test.QuickCheck.Arbitrary",
          "name": "Arbitrary",
          "package": "QuickCheck",
          "partial": "Arbitrary",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Arbitrary.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRandom generation and shrinking of values.\n\u003c/p\u003e",
          "module": "Test.QuickCheck.Arbitrary",
          "name": "Arbitrary",
          "package": "QuickCheck",
          "source": "src/Test-QuickCheck-Arbitrary.html#Arbitrary",
          "type": "class"
        },
        "index": {
          "description": "Random generation and shrinking of values",
          "hierarchy": "Test QuickCheck Arbitrary",
          "module": "Test.QuickCheck.Arbitrary",
          "name": "Arbitrary",
          "package": "QuickCheck",
          "partial": "Arbitrary",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Arbitrary.html#t:Arbitrary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUsed for random generation of functions.\n\u003c/p\u003e",
          "module": "Test.QuickCheck.Arbitrary",
          "name": "CoArbitrary",
          "package": "QuickCheck",
          "source": "src/Test-QuickCheck-Arbitrary.html#CoArbitrary",
          "type": "class"
        },
        "index": {
          "description": "Used for random generation of functions",
          "hierarchy": "Test QuickCheck Arbitrary",
          "module": "Test.QuickCheck.Arbitrary",
          "name": "CoArbitrary",
          "package": "QuickCheck",
          "partial": "Co Arbitrary",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Arbitrary.html#t:CoArbitrary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCombine two generator perturbing functions, for example the\n results of calls to \u003ccode\u003e\u003ca\u003evariant\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003ecoarbitrary\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Test.QuickCheck.Arbitrary\",\"Test.QuickCheck\"]",
          "name": "(\u003e\u003c)",
          "package": "QuickCheck",
          "signature": "(Gen a -\u003e Gen a) -\u003e (Gen a -\u003e Gen a) -\u003e Gen a -\u003e Gen a",
          "source": "src/Test-QuickCheck-Arbitrary.html#%3E%3C",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Arbitrary.html#v:-62--60-\",\"http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html#v:-62--60-\"]"
        },
        "index": {
          "description": "Combine two generator perturbing functions for example the results of calls to variant or coarbitrary",
          "hierarchy": "Test QuickCheck Arbitrary",
          "module": "Test.QuickCheck.Arbitrary",
          "name": "(\u003e\u003c) \u003e\u003c",
          "normalized": "(Gen a-\u003eGen a)-\u003e(Gen a-\u003eGen a)-\u003eGen a-\u003eGen a",
          "package": "QuickCheck",
          "signature": "(Gen a-\u003eGen a)-\u003e(Gen a-\u003eGen a)-\u003eGen a-\u003eGen a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Arbitrary.html#v:-62--60-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA generator for values of the given type.\n\u003c/p\u003e",
          "module": "Test.QuickCheck.Arbitrary",
          "name": "arbitrary",
          "package": "QuickCheck",
          "signature": "Gen a",
          "source": "src/Test-QuickCheck-Arbitrary.html#arbitrary",
          "type": "method"
        },
        "index": {
          "description": "generator for values of the given type",
          "hierarchy": "Test QuickCheck Arbitrary",
          "module": "Test.QuickCheck.Arbitrary",
          "name": "arbitrary",
          "package": "QuickCheck",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Arbitrary.html#v:arbitrary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerates an element of a bounded enumeration.\n\u003c/p\u003e",
          "module": "[\"Test.QuickCheck.Arbitrary\",\"Test.QuickCheck\"]",
          "name": "arbitraryBoundedEnum",
          "package": "QuickCheck",
          "signature": "Gen a",
          "source": "src/Test-QuickCheck-Arbitrary.html#arbitraryBoundedEnum",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Arbitrary.html#v:arbitraryBoundedEnum\",\"http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html#v:arbitraryBoundedEnum\"]"
        },
        "index": {
          "description": "Generates an element of bounded enumeration",
          "hierarchy": "Test QuickCheck Arbitrary",
          "module": "Test.QuickCheck.Arbitrary",
          "name": "arbitraryBoundedEnum",
          "package": "QuickCheck",
          "partial": "Bounded Enum",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Arbitrary.html#v:arbitraryBoundedEnum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerates an integral number. The number is chosen uniformly from\n the entire range of the type. You may want to use\n \u003ccode\u003e\u003ca\u003earbitrarySizedBoundedIntegral\u003c/a\u003e\u003c/code\u003e instead.\n\u003c/p\u003e",
          "module": "[\"Test.QuickCheck.Arbitrary\",\"Test.QuickCheck\"]",
          "name": "arbitraryBoundedIntegral",
          "package": "QuickCheck",
          "signature": "Gen a",
          "source": "src/Test-QuickCheck-Arbitrary.html#arbitraryBoundedIntegral",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Arbitrary.html#v:arbitraryBoundedIntegral\",\"http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html#v:arbitraryBoundedIntegral\"]"
        },
        "index": {
          "description": "Generates an integral number The number is chosen uniformly from the entire range of the type You may want to use arbitrarySizedBoundedIntegral instead",
          "hierarchy": "Test QuickCheck Arbitrary",
          "module": "Test.QuickCheck.Arbitrary",
          "name": "arbitraryBoundedIntegral",
          "package": "QuickCheck",
          "partial": "Bounded Integral",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Arbitrary.html#v:arbitraryBoundedIntegral"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerates an element of a bounded type. The element is\n chosen from the entire range of the type.\n\u003c/p\u003e",
          "module": "[\"Test.QuickCheck.Arbitrary\",\"Test.QuickCheck\"]",
          "name": "arbitraryBoundedRandom",
          "package": "QuickCheck",
          "signature": "Gen a",
          "source": "src/Test-QuickCheck-Arbitrary.html#arbitraryBoundedRandom",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Arbitrary.html#v:arbitraryBoundedRandom\",\"http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html#v:arbitraryBoundedRandom\"]"
        },
        "index": {
          "description": "Generates an element of bounded type The element is chosen from the entire range of the type",
          "hierarchy": "Test QuickCheck Arbitrary",
          "module": "Test.QuickCheck.Arbitrary",
          "name": "arbitraryBoundedRandom",
          "package": "QuickCheck",
          "partial": "Bounded Random",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Arbitrary.html#v:arbitraryBoundedRandom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerates an integral number from a bounded domain. The number is\n chosen from the entire range of the type, but small numbers are\n generated more often than big numbers. Inspired by demands from\n Phil Wadler.\n\u003c/p\u003e",
          "module": "[\"Test.QuickCheck.Arbitrary\",\"Test.QuickCheck\"]",
          "name": "arbitrarySizedBoundedIntegral",
          "package": "QuickCheck",
          "signature": "Gen a",
          "source": "src/Test-QuickCheck-Arbitrary.html#arbitrarySizedBoundedIntegral",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Arbitrary.html#v:arbitrarySizedBoundedIntegral\",\"http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html#v:arbitrarySizedBoundedIntegral\"]"
        },
        "index": {
          "description": "Generates an integral number from bounded domain The number is chosen from the entire range of the type but small numbers are generated more often than big numbers Inspired by demands from Phil Wadler",
          "hierarchy": "Test QuickCheck Arbitrary",
          "module": "Test.QuickCheck.Arbitrary",
          "name": "arbitrarySizedBoundedIntegral",
          "package": "QuickCheck",
          "partial": "Sized Bounded Integral",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Arbitrary.html#v:arbitrarySizedBoundedIntegral"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerates a fractional number. The number can be positive or negative\n and its maximum absolute value depends on the size parameter.\n\u003c/p\u003e",
          "module": "[\"Test.QuickCheck.Arbitrary\",\"Test.QuickCheck\"]",
          "name": "arbitrarySizedFractional",
          "package": "QuickCheck",
          "signature": "Gen a",
          "source": "src/Test-QuickCheck-Arbitrary.html#arbitrarySizedFractional",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Arbitrary.html#v:arbitrarySizedFractional\",\"http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html#v:arbitrarySizedFractional\"]"
        },
        "index": {
          "description": "Generates fractional number The number can be positive or negative and its maximum absolute value depends on the size parameter",
          "hierarchy": "Test QuickCheck Arbitrary",
          "module": "Test.QuickCheck.Arbitrary",
          "name": "arbitrarySizedFractional",
          "package": "QuickCheck",
          "partial": "Sized Fractional",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Arbitrary.html#v:arbitrarySizedFractional"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerates an integral number. The number can be positive or negative\n and its maximum absolute value depends on the size parameter.\n\u003c/p\u003e",
          "module": "[\"Test.QuickCheck.Arbitrary\",\"Test.QuickCheck\"]",
          "name": "arbitrarySizedIntegral",
          "package": "QuickCheck",
          "signature": "Gen a",
          "source": "src/Test-QuickCheck-Arbitrary.html#arbitrarySizedIntegral",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Arbitrary.html#v:arbitrarySizedIntegral\",\"http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html#v:arbitrarySizedIntegral\"]"
        },
        "index": {
          "description": "Generates an integral number The number can be positive or negative and its maximum absolute value depends on the size parameter",
          "hierarchy": "Test QuickCheck Arbitrary",
          "module": "Test.QuickCheck.Arbitrary",
          "name": "arbitrarySizedIntegral",
          "package": "QuickCheck",
          "partial": "Sized Integral",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Arbitrary.html#v:arbitrarySizedIntegral"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUsed to generate a function of type \u003ccode\u003ea -\u003e c\u003c/code\u003e. The implementation\n should use the first argument to perturb the random generator\n given as the second argument. the returned generator\n is then used to generate the function result.\n You can often use \u003ccode\u003e\u003ca\u003evariant\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003e\u003e\u003c\u003c/a\u003e\u003c/code\u003e to implement\n \u003ccode\u003e\u003ca\u003ecoarbitrary\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Test.QuickCheck.Arbitrary",
          "name": "coarbitrary",
          "package": "QuickCheck",
          "signature": "a -\u003e Gen c -\u003e Gen c",
          "source": "src/Test-QuickCheck-Arbitrary.html#coarbitrary",
          "type": "method"
        },
        "index": {
          "description": "Used to generate function of type The implementation should use the first argument to perturb the random generator given as the second argument the returned generator is then used to generate the function result You can often use variant and to implement coarbitrary",
          "hierarchy": "Test QuickCheck Arbitrary",
          "module": "Test.QuickCheck.Arbitrary",
          "name": "coarbitrary",
          "normalized": "a-\u003eGen b-\u003eGen b",
          "package": "QuickCheck",
          "signature": "a-\u003eGen c-\u003eGen c",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Arbitrary.html#v:coarbitrary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003ecoarbitrary\u003c/a\u003e\u003c/code\u003e implementation for enums.\n\u003c/p\u003e",
          "module": "[\"Test.QuickCheck.Arbitrary\",\"Test.QuickCheck\"]",
          "name": "coarbitraryEnum",
          "package": "QuickCheck",
          "signature": "a -\u003e Gen b -\u003e Gen b",
          "source": "src/Test-QuickCheck-Arbitrary.html#coarbitraryEnum",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Arbitrary.html#v:coarbitraryEnum\",\"http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html#v:coarbitraryEnum\"]"
        },
        "index": {
          "description": "coarbitrary implementation for enums",
          "hierarchy": "Test QuickCheck Arbitrary",
          "module": "Test.QuickCheck.Arbitrary",
          "name": "coarbitraryEnum",
          "normalized": "a-\u003eGen b-\u003eGen b",
          "package": "QuickCheck",
          "partial": "Enum",
          "signature": "a-\u003eGen b-\u003eGen b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Arbitrary.html#v:coarbitraryEnum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003ecoarbitrary\u003c/a\u003e\u003c/code\u003e implementation for integral numbers.\n\u003c/p\u003e",
          "module": "[\"Test.QuickCheck.Arbitrary\",\"Test.QuickCheck\"]",
          "name": "coarbitraryIntegral",
          "package": "QuickCheck",
          "signature": "a -\u003e Gen b -\u003e Gen b",
          "source": "src/Test-QuickCheck-Arbitrary.html#coarbitraryIntegral",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Arbitrary.html#v:coarbitraryIntegral\",\"http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html#v:coarbitraryIntegral\"]"
        },
        "index": {
          "description": "coarbitrary implementation for integral numbers",
          "hierarchy": "Test QuickCheck Arbitrary",
          "module": "Test.QuickCheck.Arbitrary",
          "name": "coarbitraryIntegral",
          "normalized": "a-\u003eGen b-\u003eGen b",
          "package": "QuickCheck",
          "partial": "Integral",
          "signature": "a-\u003eGen b-\u003eGen b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Arbitrary.html#v:coarbitraryIntegral"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003ecoarbitrary\u003c/a\u003e\u003c/code\u003e implementation for real numbers.\n\u003c/p\u003e",
          "module": "[\"Test.QuickCheck.Arbitrary\",\"Test.QuickCheck\"]",
          "name": "coarbitraryReal",
          "package": "QuickCheck",
          "signature": "a -\u003e Gen b -\u003e Gen b",
          "source": "src/Test-QuickCheck-Arbitrary.html#coarbitraryReal",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Arbitrary.html#v:coarbitraryReal\",\"http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html#v:coarbitraryReal\"]"
        },
        "index": {
          "description": "coarbitrary implementation for real numbers",
          "hierarchy": "Test QuickCheck Arbitrary",
          "module": "Test.QuickCheck.Arbitrary",
          "name": "coarbitraryReal",
          "normalized": "a-\u003eGen b-\u003eGen b",
          "package": "QuickCheck",
          "partial": "Real",
          "signature": "a-\u003eGen b-\u003eGen b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Arbitrary.html#v:coarbitraryReal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ecoarbitrary\u003c/a\u003e\u003c/code\u003e helper for lazy people :-).\n\u003c/p\u003e",
          "module": "[\"Test.QuickCheck.Arbitrary\",\"Test.QuickCheck\"]",
          "name": "coarbitraryShow",
          "package": "QuickCheck",
          "signature": "a -\u003e Gen b -\u003e Gen b",
          "source": "src/Test-QuickCheck-Arbitrary.html#coarbitraryShow",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Arbitrary.html#v:coarbitraryShow\",\"http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html#v:coarbitraryShow\"]"
        },
        "index": {
          "description": "coarbitrary helper for lazy people",
          "hierarchy": "Test QuickCheck Arbitrary",
          "module": "Test.QuickCheck.Arbitrary",
          "name": "coarbitraryShow",
          "normalized": "a-\u003eGen b-\u003eGen b",
          "package": "QuickCheck",
          "partial": "Show",
          "signature": "a-\u003eGen b-\u003eGen b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Arbitrary.html#v:coarbitraryShow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerates an ordered list of a given length.\n\u003c/p\u003e",
          "module": "[\"Test.QuickCheck.Arbitrary\",\"Test.QuickCheck\"]",
          "name": "orderedList",
          "package": "QuickCheck",
          "signature": "Gen [a]",
          "source": "src/Test-QuickCheck-Arbitrary.html#orderedList",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Arbitrary.html#v:orderedList\",\"http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html#v:orderedList\"]"
        },
        "index": {
          "description": "Generates an ordered list of given length",
          "hierarchy": "Test QuickCheck Arbitrary",
          "module": "Test.QuickCheck.Arbitrary",
          "name": "orderedList",
          "normalized": "Gen[a]",
          "package": "QuickCheck",
          "partial": "List",
          "signature": "Gen[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Arbitrary.html#v:orderedList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProduces a (possibly) empty list of all the possible\n immediate shrinks of the given value.\n\u003c/p\u003e",
          "module": "Test.QuickCheck.Arbitrary",
          "name": "shrink",
          "package": "QuickCheck",
          "signature": "a -\u003e [a]",
          "source": "src/Test-QuickCheck-Arbitrary.html#shrink",
          "type": "method"
        },
        "index": {
          "description": "Produces possibly empty list of all the possible immediate shrinks of the given value",
          "hierarchy": "Test QuickCheck Arbitrary",
          "module": "Test.QuickCheck.Arbitrary",
          "name": "shrink",
          "normalized": "a-\u003e[a]",
          "package": "QuickCheck",
          "signature": "a-\u003e[a]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Arbitrary.html#v:shrink"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShrink an integral number.\n\u003c/p\u003e",
          "module": "[\"Test.QuickCheck.Arbitrary\",\"Test.QuickCheck\"]",
          "name": "shrinkIntegral",
          "package": "QuickCheck",
          "signature": "a -\u003e [a]",
          "source": "src/Test-QuickCheck-Arbitrary.html#shrinkIntegral",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Arbitrary.html#v:shrinkIntegral\",\"http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html#v:shrinkIntegral\"]"
        },
        "index": {
          "description": "Shrink an integral number",
          "hierarchy": "Test QuickCheck Arbitrary",
          "module": "Test.QuickCheck.Arbitrary",
          "name": "shrinkIntegral",
          "normalized": "a-\u003e[a]",
          "package": "QuickCheck",
          "partial": "Integral",
          "signature": "a-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Arbitrary.html#v:shrinkIntegral"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.QuickCheck.Arbitrary",
          "name": "shrinkList",
          "package": "QuickCheck",
          "signature": "(a -\u003e [a]) -\u003e [a] -\u003e [[a]]",
          "source": "src/Test-QuickCheck-Arbitrary.html#shrinkList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test QuickCheck Arbitrary",
          "module": "Test.QuickCheck.Arbitrary",
          "name": "shrinkList",
          "normalized": "(a-\u003e[a])-\u003e[a]-\u003e[[a]]",
          "package": "QuickCheck",
          "partial": "List",
          "signature": "(a-\u003e[a])-\u003e[a]-\u003e[[a]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Arbitrary.html#v:shrinkList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns no shrinking alternatives.\n\u003c/p\u003e",
          "module": "[\"Test.QuickCheck.Arbitrary\",\"Test.QuickCheck\"]",
          "name": "shrinkNothing",
          "package": "QuickCheck",
          "signature": "a -\u003e [a]",
          "source": "src/Test-QuickCheck-Arbitrary.html#shrinkNothing",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Arbitrary.html#v:shrinkNothing\",\"http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html#v:shrinkNothing\"]"
        },
        "index": {
          "description": "Returns no shrinking alternatives",
          "hierarchy": "Test QuickCheck Arbitrary",
          "module": "Test.QuickCheck.Arbitrary",
          "name": "shrinkNothing",
          "normalized": "a-\u003e[a]",
          "package": "QuickCheck",
          "partial": "Nothing",
          "signature": "a-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Arbitrary.html#v:shrinkNothing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShrink a fraction.\n\u003c/p\u003e",
          "module": "[\"Test.QuickCheck.Arbitrary\",\"Test.QuickCheck\"]",
          "name": "shrinkRealFrac",
          "package": "QuickCheck",
          "signature": "a -\u003e [a]",
          "source": "src/Test-QuickCheck-Arbitrary.html#shrinkRealFrac",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Arbitrary.html#v:shrinkRealFrac\",\"http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html#v:shrinkRealFrac\"]"
        },
        "index": {
          "description": "Shrink fraction",
          "hierarchy": "Test QuickCheck Arbitrary",
          "module": "Test.QuickCheck.Arbitrary",
          "name": "shrinkRealFrac",
          "normalized": "a-\u003e[a]",
          "package": "QuickCheck",
          "partial": "Real Frac",
          "signature": "a-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Arbitrary.html#v:shrinkRealFrac"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerates a list of a given length.\n\u003c/p\u003e",
          "module": "[\"Test.QuickCheck.Arbitrary\",\"Test.QuickCheck\"]",
          "name": "vector",
          "package": "QuickCheck",
          "signature": "Int -\u003e Gen [a]",
          "source": "src/Test-QuickCheck-Arbitrary.html#vector",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Arbitrary.html#v:vector\",\"http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html#v:vector\"]"
        },
        "index": {
          "description": "Generates list of given length",
          "hierarchy": "Test QuickCheck Arbitrary",
          "module": "Test.QuickCheck.Arbitrary",
          "name": "vector",
          "normalized": "Int-\u003eGen[a]",
          "package": "QuickCheck",
          "signature": "Int-\u003eGen[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Arbitrary.html#v:vector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eGeneration of random shrinkable, showable functions.\n Not really documented at the moment!\n\u003c/p\u003e\u003cp\u003eExample of use:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e:{\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elet prop :: Fun String Integer -\u003e Bool\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eprop (Fun _ f) = f \"monkey\" == f \"banana\" || f \"banana\" == f \"elephant\"\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e:}\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003equickCheck prop\n\u003c/code\u003e\u003c/strong\u003e*** Failed! Falsifiable (after 3 tests and 134 shrinks):\n{\"elephant\"-\u003e1, \"monkey\"-\u003e1, _-\u003e0}\n\u003c/pre\u003e\u003cp\u003eTo generate random values of type \u003ccode\u003e\u003ccode\u003e\u003ca\u003eFun\u003c/a\u003e\u003c/code\u003e a b\u003c/code\u003e,\n you must have an instance \u003ccode\u003e\u003ccode\u003e\u003ca\u003eFunction\u003c/a\u003e\u003c/code\u003e a\u003c/code\u003e.\n If your type has a \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e instance, you can use \u003ccode\u003e\u003ca\u003efunctionShow\u003c/a\u003e\u003c/code\u003e to write the instance; otherwise,\n use \u003ccode\u003e\u003ca\u003efunctionMap\u003c/a\u003e\u003c/code\u003e to give a bijection between your type and a type that is already an instance of \u003ccode\u003e\u003ca\u003eFunction\u003c/a\u003e\u003c/code\u003e.\n See the \u003ccode\u003e\u003ccode\u003e\u003ca\u003eFunction\u003c/a\u003e\u003c/code\u003e [a]\u003c/code\u003e instance for an example of the latter.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Test.QuickCheck.Function",
          "name": "Function",
          "package": "QuickCheck",
          "source": "src/Test-QuickCheck-Function.html",
          "type": "module"
        },
        "index": {
          "description": "Generation of random shrinkable showable functions Not really documented at the moment Example of use let prop Fun String Integer Bool prop Fun monkey banana banana elephant quickCheck prop Failed Falsifiable after tests and shrinks elephant monkey To generate random values of type Fun you must have an instance Function If your type has Show instance you can use functionShow to write the instance otherwise use functionMap to give bijection between your type and type that is already an instance of Function See the Function instance for an example of the latter",
          "hierarchy": "Test QuickCheck Function",
          "module": "Test.QuickCheck.Function",
          "name": "Function",
          "package": "QuickCheck",
          "partial": "Function",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Function.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.QuickCheck.Function",
          "name": ":-\u003e",
          "package": "QuickCheck",
          "source": "src/Test-QuickCheck-Function.html#%3A-%3E",
          "type": "data"
        },
        "index": {
          "hierarchy": "Test QuickCheck Function",
          "module": "Test.QuickCheck.Function",
          "name": ":-\u003e",
          "package": "QuickCheck",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Function.html#t::-45--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.QuickCheck.Function",
          "name": "Fun",
          "package": "QuickCheck",
          "source": "src/Test-QuickCheck-Function.html#Fun",
          "type": "data"
        },
        "index": {
          "hierarchy": "Test QuickCheck Function",
          "module": "Test.QuickCheck.Function",
          "name": "Fun",
          "package": "QuickCheck",
          "partial": "Fun",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Function.html#t:Fun"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.QuickCheck.Function",
          "name": "Function",
          "package": "QuickCheck",
          "source": "src/Test-QuickCheck-Function.html#Function",
          "type": "class"
        },
        "index": {
          "hierarchy": "Test QuickCheck Function",
          "module": "Test.QuickCheck.Function",
          "name": "Function",
          "package": "QuickCheck",
          "partial": "Function",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Function.html#t:Function"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.QuickCheck.Function",
          "name": "Fun",
          "package": "QuickCheck",
          "signature": "Fun (a :-\u003e b, b) (a -\u003e b)",
          "source": "src/Test-QuickCheck-Function.html#Fun",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test QuickCheck Function",
          "module": "Test.QuickCheck.Function",
          "name": "Fun",
          "normalized": "Fun(a-\u003eb,b)(a-\u003eb)",
          "package": "QuickCheck",
          "partial": "Fun",
          "signature": "Fun(a-\u003eb,b)(a-\u003eb)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Function.html#v:Fun"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.QuickCheck.Function",
          "name": "apply",
          "package": "QuickCheck",
          "signature": "Fun a b -\u003e a -\u003e b",
          "source": "src/Test-QuickCheck-Function.html#apply",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test QuickCheck Function",
          "module": "Test.QuickCheck.Function",
          "name": "apply",
          "normalized": "Fun a b-\u003ea-\u003eb",
          "package": "QuickCheck",
          "signature": "Fun a b-\u003ea-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Function.html#v:apply"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.QuickCheck.Function",
          "name": "function",
          "package": "QuickCheck",
          "signature": "(a -\u003e b) -\u003e a :-\u003e b",
          "source": "src/Test-QuickCheck-Function.html#function",
          "type": "method"
        },
        "index": {
          "hierarchy": "Test QuickCheck Function",
          "module": "Test.QuickCheck.Function",
          "name": "function",
          "normalized": "(a-\u003eb)-\u003ea-\u003eb",
          "package": "QuickCheck",
          "signature": "(a-\u003eb)-\u003ea-\u003eb",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Function.html#v:function"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.QuickCheck.Function",
          "name": "functionMap",
          "package": "QuickCheck",
          "signature": "(a -\u003e b) -\u003e (b -\u003e a) -\u003e (a -\u003e c) -\u003e a :-\u003e c",
          "source": "src/Test-QuickCheck-Function.html#functionMap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test QuickCheck Function",
          "module": "Test.QuickCheck.Function",
          "name": "functionMap",
          "normalized": "(a-\u003eb)-\u003e(b-\u003ea)-\u003e(a-\u003ec)-\u003ea-\u003ec",
          "package": "QuickCheck",
          "partial": "Map",
          "signature": "(a-\u003eb)-\u003e(b-\u003ea)-\u003e(a-\u003ec)-\u003ea-\u003ec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Function.html#v:functionMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.QuickCheck.Function",
          "name": "functionShow",
          "package": "QuickCheck",
          "signature": "(a -\u003e c) -\u003e a :-\u003e c",
          "source": "src/Test-QuickCheck-Function.html#functionShow",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test QuickCheck Function",
          "module": "Test.QuickCheck.Function",
          "name": "functionShow",
          "normalized": "(a-\u003eb)-\u003ea-\u003eb",
          "package": "QuickCheck",
          "partial": "Show",
          "signature": "(a-\u003ec)-\u003ea-\u003ec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Function.html#v:functionShow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTest case generation.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Test.QuickCheck.Gen",
          "name": "Gen",
          "package": "QuickCheck",
          "source": "src/Test-QuickCheck-Gen.html",
          "type": "module"
        },
        "index": {
          "description": "Test case generation",
          "hierarchy": "Test QuickCheck Gen",
          "module": "Test.QuickCheck.Gen",
          "name": "Gen",
          "package": "QuickCheck",
          "partial": "Gen",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Gen.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.QuickCheck.Gen",
          "name": "Gen",
          "package": "QuickCheck",
          "source": "src/Test-QuickCheck-Gen.html#Gen",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Test QuickCheck Gen",
          "module": "Test.QuickCheck.Gen",
          "name": "Gen",
          "package": "QuickCheck",
          "partial": "Gen",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Gen.html#t:Gen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.QuickCheck.Gen",
          "name": "MkGen",
          "package": "QuickCheck",
          "signature": "MkGen",
          "source": "src/Test-QuickCheck-Gen.html#Gen",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test QuickCheck Gen",
          "module": "Test.QuickCheck.Gen",
          "name": "MkGen",
          "package": "QuickCheck",
          "partial": "Mk Gen",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Gen.html#v:MkGen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerates a random element in the given inclusive range.\n\u003c/p\u003e",
          "module": "[\"Test.QuickCheck.Gen\",\"Test.QuickCheck\"]",
          "name": "choose",
          "package": "QuickCheck",
          "signature": "(a, a) -\u003e Gen a",
          "source": "src/Test-QuickCheck-Gen.html#choose",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Gen.html#v:choose\",\"http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html#v:choose\"]"
        },
        "index": {
          "description": "Generates random element in the given inclusive range",
          "hierarchy": "Test QuickCheck Gen",
          "module": "Test.QuickCheck.Gen",
          "name": "choose",
          "normalized": "(a,a)-\u003eGen a",
          "package": "QuickCheck",
          "signature": "(a,a)-\u003eGen a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Gen.html#v:choose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerates one of the given values. The input list must be non-empty.\n\u003c/p\u003e",
          "module": "[\"Test.QuickCheck.Gen\",\"Test.QuickCheck\"]",
          "name": "elements",
          "package": "QuickCheck",
          "signature": "[a] -\u003e Gen a",
          "source": "src/Test-QuickCheck-Gen.html#elements",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Gen.html#v:elements\",\"http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html#v:elements\"]"
        },
        "index": {
          "description": "Generates one of the given values The input list must be non-empty",
          "hierarchy": "Test QuickCheck Gen",
          "module": "Test.QuickCheck.Gen",
          "name": "elements",
          "normalized": "[a]-\u003eGen a",
          "package": "QuickCheck",
          "signature": "[a]-\u003eGen a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Gen.html#v:elements"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChooses one of the given generators, with a weighted random distribution.\n The input list must be non-empty.\n\u003c/p\u003e",
          "module": "[\"Test.QuickCheck.Gen\",\"Test.QuickCheck\"]",
          "name": "frequency",
          "package": "QuickCheck",
          "signature": "[(Int, Gen a)] -\u003e Gen a",
          "source": "src/Test-QuickCheck-Gen.html#frequency",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Gen.html#v:frequency\",\"http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html#v:frequency\"]"
        },
        "index": {
          "description": "Chooses one of the given generators with weighted random distribution The input list must be non-empty",
          "hierarchy": "Test QuickCheck Gen",
          "module": "Test.QuickCheck.Gen",
          "name": "frequency",
          "normalized": "[(Int,Gen a)]-\u003eGen a",
          "package": "QuickCheck",
          "signature": "[(Int,Gen a)]-\u003eGen a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Gen.html#v:frequency"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTakes a list of elements of increasing size, and chooses\n among an initial segment of the list. The size of this initial\n segment increases with the size parameter.\n The input list must be non-empty.\n\u003c/p\u003e",
          "module": "[\"Test.QuickCheck.Gen\",\"Test.QuickCheck\"]",
          "name": "growingElements",
          "package": "QuickCheck",
          "signature": "[a] -\u003e Gen a",
          "source": "src/Test-QuickCheck-Gen.html#growingElements",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Gen.html#v:growingElements\",\"http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html#v:growingElements\"]"
        },
        "index": {
          "description": "Takes list of elements of increasing size and chooses among an initial segment of the list The size of this initial segment increases with the size parameter The input list must be non-empty",
          "hierarchy": "Test QuickCheck Gen",
          "module": "Test.QuickCheck.Gen",
          "name": "growingElements",
          "normalized": "[a]-\u003eGen a",
          "package": "QuickCheck",
          "partial": "Elements",
          "signature": "[a]-\u003eGen a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Gen.html#v:growingElements"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerates a list of random length. The maximum length depends on the\n size parameter.\n\u003c/p\u003e",
          "module": "[\"Test.QuickCheck.Gen\",\"Test.QuickCheck\"]",
          "name": "listOf",
          "package": "QuickCheck",
          "signature": "Gen a -\u003e Gen [a]",
          "source": "src/Test-QuickCheck-Gen.html#listOf",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Gen.html#v:listOf\",\"http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html#v:listOf\"]"
        },
        "index": {
          "description": "Generates list of random length The maximum length depends on the size parameter",
          "hierarchy": "Test QuickCheck Gen",
          "module": "Test.QuickCheck.Gen",
          "name": "listOf",
          "normalized": "Gen a-\u003eGen[a]",
          "package": "QuickCheck",
          "partial": "Of",
          "signature": "Gen a-\u003eGen[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Gen.html#v:listOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerates a non-empty list of random length. The maximum length\n depends on the size parameter.\n\u003c/p\u003e",
          "module": "[\"Test.QuickCheck.Gen\",\"Test.QuickCheck\"]",
          "name": "listOf1",
          "package": "QuickCheck",
          "signature": "Gen a -\u003e Gen [a]",
          "source": "src/Test-QuickCheck-Gen.html#listOf1",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Gen.html#v:listOf1\",\"http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html#v:listOf1\"]"
        },
        "index": {
          "description": "Generates non-empty list of random length The maximum length depends on the size parameter",
          "hierarchy": "Test QuickCheck Gen",
          "module": "Test.QuickCheck.Gen",
          "name": "listOf1",
          "normalized": "Gen a-\u003eGen[a]",
          "package": "QuickCheck",
          "partial": "Of",
          "signature": "Gen a-\u003eGen[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Gen.html#v:listOf1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRandomly uses one of the given generators. The input list\n must be non-empty.\n\u003c/p\u003e",
          "module": "[\"Test.QuickCheck.Gen\",\"Test.QuickCheck\"]",
          "name": "oneof",
          "package": "QuickCheck",
          "signature": "[Gen a] -\u003e Gen a",
          "source": "src/Test-QuickCheck-Gen.html#oneof",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Gen.html#v:oneof\",\"http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html#v:oneof\"]"
        },
        "index": {
          "description": "Randomly uses one of the given generators The input list must be non-empty",
          "hierarchy": "Test QuickCheck Gen",
          "module": "Test.QuickCheck.Gen",
          "name": "oneof",
          "normalized": "[Gen a]-\u003eGen a",
          "package": "QuickCheck",
          "signature": "[Gen a]-\u003eGen a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Gen.html#v:oneof"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePromotes a monadic generator to a generator of monadic values.\n\u003c/p\u003e",
          "module": "[\"Test.QuickCheck.Gen\",\"Test.QuickCheck\"]",
          "name": "promote",
          "package": "QuickCheck",
          "signature": "m (Gen a) -\u003e Gen (m a)",
          "source": "src/Test-QuickCheck-Gen.html#promote",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Gen.html#v:promote\",\"http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html#v:promote\"]"
        },
        "index": {
          "description": "Promotes monadic generator to generator of monadic values",
          "hierarchy": "Test QuickCheck Gen",
          "module": "Test.QuickCheck.Gen",
          "name": "promote",
          "normalized": "a(Gen b)-\u003eGen(a b)",
          "package": "QuickCheck",
          "signature": "m(Gen a)-\u003eGen(m a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Gen.html#v:promote"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOverrides the size parameter. Returns a generator which uses\n the given size instead of the runtime-size parameter.\n\u003c/p\u003e",
          "module": "[\"Test.QuickCheck.Gen\",\"Test.QuickCheck\"]",
          "name": "resize",
          "package": "QuickCheck",
          "signature": "Int -\u003e Gen a -\u003e Gen a",
          "source": "src/Test-QuickCheck-Gen.html#resize",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Gen.html#v:resize\",\"http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html#v:resize\"]"
        },
        "index": {
          "description": "Overrides the size parameter Returns generator which uses the given size instead of the runtime-size parameter",
          "hierarchy": "Test QuickCheck Gen",
          "module": "Test.QuickCheck.Gen",
          "name": "resize",
          "normalized": "Int-\u003eGen a-\u003eGen a",
          "package": "QuickCheck",
          "signature": "Int-\u003eGen a-\u003eGen a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Gen.html#v:resize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerates some example values and prints them to \u003ccode\u003estdout\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Test.QuickCheck.Gen\",\"Test.QuickCheck\"]",
          "name": "sample",
          "package": "QuickCheck",
          "signature": "Gen a -\u003e IO ()",
          "source": "src/Test-QuickCheck-Gen.html#sample",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Gen.html#v:sample\",\"http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html#v:sample\"]"
        },
        "index": {
          "description": "Generates some example values and prints them to stdout",
          "hierarchy": "Test QuickCheck Gen",
          "module": "Test.QuickCheck.Gen",
          "name": "sample",
          "normalized": "Gen a-\u003eIO()",
          "package": "QuickCheck",
          "signature": "Gen a-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Gen.html#v:sample"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerates some example values.\n\u003c/p\u003e",
          "module": "[\"Test.QuickCheck.Gen\",\"Test.QuickCheck\"]",
          "name": "sample'",
          "package": "QuickCheck",
          "signature": "Gen a -\u003e IO [a]",
          "source": "src/Test-QuickCheck-Gen.html#sample%27",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Gen.html#v:sample-39-\",\"http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html#v:sample-39-\"]"
        },
        "index": {
          "description": "Generates some example values",
          "hierarchy": "Test QuickCheck Gen",
          "module": "Test.QuickCheck.Gen",
          "name": "sample'",
          "normalized": "Gen a-\u003eIO[a]",
          "package": "QuickCheck",
          "signature": "Gen a-\u003eIO[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Gen.html#v:sample-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUsed to construct generators that depend on the size parameter.\n\u003c/p\u003e",
          "module": "[\"Test.QuickCheck.Gen\",\"Test.QuickCheck\"]",
          "name": "sized",
          "package": "QuickCheck",
          "signature": "(Int -\u003e Gen a) -\u003e Gen a",
          "source": "src/Test-QuickCheck-Gen.html#sized",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Gen.html#v:sized\",\"http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html#v:sized\"]"
        },
        "index": {
          "description": "Used to construct generators that depend on the size parameter",
          "hierarchy": "Test QuickCheck Gen",
          "module": "Test.QuickCheck.Gen",
          "name": "sized",
          "normalized": "(Int-\u003eGen a)-\u003eGen a",
          "package": "QuickCheck",
          "signature": "(Int-\u003eGen a)-\u003eGen a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Gen.html#v:sized"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerates a value that satisfies a predicate.\n\u003c/p\u003e",
          "module": "[\"Test.QuickCheck.Gen\",\"Test.QuickCheck\"]",
          "name": "suchThat",
          "package": "QuickCheck",
          "signature": "Gen a -\u003e (a -\u003e Bool) -\u003e Gen a",
          "source": "src/Test-QuickCheck-Gen.html#suchThat",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Gen.html#v:suchThat\",\"http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html#v:suchThat\"]"
        },
        "index": {
          "description": "Generates value that satisfies predicate",
          "hierarchy": "Test QuickCheck Gen",
          "module": "Test.QuickCheck.Gen",
          "name": "suchThat",
          "normalized": "Gen a-\u003e(a-\u003eBool)-\u003eGen a",
          "package": "QuickCheck",
          "partial": "That",
          "signature": "Gen a-\u003e(a-\u003eBool)-\u003eGen a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Gen.html#v:suchThat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTries to generate a value that satisfies a predicate.\n\u003c/p\u003e",
          "module": "[\"Test.QuickCheck.Gen\",\"Test.QuickCheck\"]",
          "name": "suchThatMaybe",
          "package": "QuickCheck",
          "signature": "Gen a -\u003e (a -\u003e Bool) -\u003e Gen (Maybe a)",
          "source": "src/Test-QuickCheck-Gen.html#suchThatMaybe",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Gen.html#v:suchThatMaybe\",\"http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html#v:suchThatMaybe\"]"
        },
        "index": {
          "description": "Tries to generate value that satisfies predicate",
          "hierarchy": "Test QuickCheck Gen",
          "module": "Test.QuickCheck.Gen",
          "name": "suchThatMaybe",
          "normalized": "Gen a-\u003e(a-\u003eBool)-\u003eGen(Maybe a)",
          "package": "QuickCheck",
          "partial": "That Maybe",
          "signature": "Gen a-\u003e(a-\u003eBool)-\u003eGen(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Gen.html#v:suchThatMaybe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.QuickCheck.Gen",
          "name": "unGen",
          "package": "QuickCheck",
          "signature": "StdGen -\u003e Int -\u003e a",
          "source": "src/Test-QuickCheck-Gen.html#Gen",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test QuickCheck Gen",
          "module": "Test.QuickCheck.Gen",
          "name": "unGen",
          "normalized": "StdGen-\u003eInt-\u003ea",
          "package": "QuickCheck",
          "partial": "Gen",
          "signature": "StdGen-\u003eInt-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Gen.html#v:unGen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eModifies a generator using an integer seed.\n\u003c/p\u003e",
          "module": "[\"Test.QuickCheck.Gen\",\"Test.QuickCheck\"]",
          "name": "variant",
          "package": "QuickCheck",
          "signature": "n -\u003e Gen a -\u003e Gen a",
          "source": "src/Test-QuickCheck-Gen.html#variant",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Gen.html#v:variant\",\"http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html#v:variant\"]"
        },
        "index": {
          "description": "Modifies generator using an integer seed",
          "hierarchy": "Test QuickCheck Gen",
          "module": "Test.QuickCheck.Gen",
          "name": "variant",
          "normalized": "a-\u003eGen b-\u003eGen b",
          "package": "QuickCheck",
          "signature": "n-\u003eGen a-\u003eGen a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Gen.html#v:variant"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerates a list of the given length.\n\u003c/p\u003e",
          "module": "[\"Test.QuickCheck.Gen\",\"Test.QuickCheck\"]",
          "name": "vectorOf",
          "package": "QuickCheck",
          "signature": "Int -\u003e Gen a -\u003e Gen [a]",
          "source": "src/Test-QuickCheck-Gen.html#vectorOf",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Gen.html#v:vectorOf\",\"http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html#v:vectorOf\"]"
        },
        "index": {
          "description": "Generates list of the given length",
          "hierarchy": "Test QuickCheck Gen",
          "module": "Test.QuickCheck.Gen",
          "name": "vectorOf",
          "normalized": "Int-\u003eGen a-\u003eGen[a]",
          "package": "QuickCheck",
          "partial": "Of",
          "signature": "Int-\u003eGen a-\u003eGen[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Gen.html#v:vectorOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eModifiers for test data.\n\u003c/p\u003e\u003cp\u003eThese types do things such as restricting the kind of test data that can be generated.\n They can be pattern-matched on in properties as a stylistic\n alternative to using explicit quantification.\n\u003c/p\u003e\u003cp\u003eExamples:\n\u003c/p\u003e\u003cpre\u003e\n -- Functions cannot be shown (but see \u003ca\u003eTest.QuickCheck.Function\u003c/a\u003e)\n prop_TakeDropWhile (\u003ccode\u003e\u003ca\u003eBlind\u003c/a\u003e\u003c/code\u003e p) (xs :: [\u003ccode\u003eA\u003c/code\u003e]) =\n   takeWhile p xs ++ dropWhile p xs == xs\n\u003c/pre\u003e\u003cpre\u003e\n prop_TakeDrop (\u003ccode\u003e\u003ca\u003eNonNegative\u003c/a\u003e\u003c/code\u003e n) (xs :: [\u003ccode\u003eA\u003c/code\u003e]) =\n   take n xs ++ drop n xs == xs\n\u003c/pre\u003e\u003cpre\u003e\n -- cycle does not work for empty lists\n prop_Cycle (\u003ccode\u003e\u003ca\u003eNonNegative\u003c/a\u003e\u003c/code\u003e n) (\u003ccode\u003e\u003ca\u003eNonEmpty\u003c/a\u003e\u003c/code\u003e (xs :: [\u003ccode\u003eA\u003c/code\u003e])) =\n   take n (cycle xs) == take n (xs ++ cycle xs)\n\u003c/pre\u003e\u003cpre\u003e\n -- Instead of \u003ccode\u003eforAll\u003c/code\u003e \u003ccode\u003e\u003ca\u003eorderedList\u003c/a\u003e\u003c/code\u003e\n prop_Sort (\u003ccode\u003e\u003ca\u003eOrdered\u003c/a\u003e\u003c/code\u003e (xs :: [\u003ccode\u003eOrdA\u003c/code\u003e])) =\n   sort xs == xs\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Test.QuickCheck.Modifiers",
          "name": "Modifiers",
          "package": "QuickCheck",
          "source": "src/Test-QuickCheck-Modifiers.html",
          "type": "module"
        },
        "index": {
          "description": "Modifiers for test data These types do things such as restricting the kind of test data that can be generated They can be pattern-matched on in properties as stylistic alternative to using explicit quantification Examples Functions cannot be shown but see Test.QuickCheck.Function prop TakeDropWhile Blind xs takeWhile xs dropWhile xs xs prop TakeDrop NonNegative xs take xs drop xs xs cycle does not work for empty lists prop Cycle NonNegative NonEmpty xs take cycle xs take xs cycle xs Instead of forAll orderedList prop Sort Ordered xs OrdA sort xs xs",
          "hierarchy": "Test QuickCheck Modifiers",
          "module": "Test.QuickCheck.Modifiers",
          "name": "Modifiers",
          "package": "QuickCheck",
          "partial": "Modifiers",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Modifiers.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eBlind x\u003c/code\u003e: as x, but x does not have to be in the \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e class.\n\u003c/p\u003e",
          "module": "Test.QuickCheck.Modifiers",
          "name": "Blind",
          "package": "QuickCheck",
          "source": "src/Test-QuickCheck-Modifiers.html#Blind",
          "type": "newtype"
        },
        "index": {
          "description": "Blind as but does not have to be in the Show class",
          "hierarchy": "Test QuickCheck Modifiers",
          "module": "Test.QuickCheck.Modifiers",
          "name": "Blind",
          "package": "QuickCheck",
          "partial": "Blind",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Modifiers.html#t:Blind"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eFixed x\u003c/code\u003e: as x, but will not be shrunk.\n\u003c/p\u003e",
          "module": "Test.QuickCheck.Modifiers",
          "name": "Fixed",
          "package": "QuickCheck",
          "source": "src/Test-QuickCheck-Modifiers.html#Fixed",
          "type": "newtype"
        },
        "index": {
          "description": "Fixed as but will not be shrunk",
          "hierarchy": "Test QuickCheck Modifiers",
          "module": "Test.QuickCheck.Modifiers",
          "name": "Fixed",
          "package": "QuickCheck",
          "partial": "Fixed",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Modifiers.html#t:Fixed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eNonEmpty xs\u003c/code\u003e: guarantees that xs is non-empty.\n\u003c/p\u003e",
          "module": "Test.QuickCheck.Modifiers",
          "name": "NonEmptyList",
          "package": "QuickCheck",
          "source": "src/Test-QuickCheck-Modifiers.html#NonEmptyList",
          "type": "newtype"
        },
        "index": {
          "description": "NonEmpty xs guarantees that xs is non-empty",
          "hierarchy": "Test QuickCheck Modifiers",
          "module": "Test.QuickCheck.Modifiers",
          "name": "NonEmptyList",
          "package": "QuickCheck",
          "partial": "Non Empty List",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Modifiers.html#t:NonEmptyList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eNonNegative x\u003c/code\u003e: guarantees that \u003ccode\u003ex \u003e= 0\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Test.QuickCheck.Modifiers",
          "name": "NonNegative",
          "package": "QuickCheck",
          "source": "src/Test-QuickCheck-Modifiers.html#NonNegative",
          "type": "newtype"
        },
        "index": {
          "description": "NonNegative guarantees that",
          "hierarchy": "Test QuickCheck Modifiers",
          "module": "Test.QuickCheck.Modifiers",
          "name": "NonNegative",
          "package": "QuickCheck",
          "partial": "Non Negative",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Modifiers.html#t:NonNegative"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eNonZero x\u003c/code\u003e: guarantees that \u003ccode\u003ex /= 0\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Test.QuickCheck.Modifiers",
          "name": "NonZero",
          "package": "QuickCheck",
          "source": "src/Test-QuickCheck-Modifiers.html#NonZero",
          "type": "newtype"
        },
        "index": {
          "description": "NonZero guarantees that",
          "hierarchy": "Test QuickCheck Modifiers",
          "module": "Test.QuickCheck.Modifiers",
          "name": "NonZero",
          "package": "QuickCheck",
          "partial": "Non Zero",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Modifiers.html#t:NonZero"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eOrdered xs\u003c/code\u003e: guarantees that xs is ordered.\n\u003c/p\u003e",
          "module": "Test.QuickCheck.Modifiers",
          "name": "OrderedList",
          "package": "QuickCheck",
          "source": "src/Test-QuickCheck-Modifiers.html#OrderedList",
          "type": "newtype"
        },
        "index": {
          "description": "Ordered xs guarantees that xs is ordered",
          "hierarchy": "Test QuickCheck Modifiers",
          "module": "Test.QuickCheck.Modifiers",
          "name": "OrderedList",
          "package": "QuickCheck",
          "partial": "Ordered List",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Modifiers.html#t:OrderedList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ePositive x\u003c/code\u003e: guarantees that \u003ccode\u003ex \u003e 0\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Test.QuickCheck.Modifiers",
          "name": "Positive",
          "package": "QuickCheck",
          "source": "src/Test-QuickCheck-Modifiers.html#Positive",
          "type": "newtype"
        },
        "index": {
          "description": "Positive guarantees that",
          "hierarchy": "Test QuickCheck Modifiers",
          "module": "Test.QuickCheck.Modifiers",
          "name": "Positive",
          "package": "QuickCheck",
          "partial": "Positive",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Modifiers.html#t:Positive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eShrink2 x\u003c/code\u003e: allows 2 shrinking steps at the same time when shrinking x\n\u003c/p\u003e",
          "module": "Test.QuickCheck.Modifiers",
          "name": "Shrink2",
          "package": "QuickCheck",
          "source": "src/Test-QuickCheck-Modifiers.html#Shrink2",
          "type": "newtype"
        },
        "index": {
          "description": "Shrink2 allows shrinking steps at the same time when shrinking",
          "hierarchy": "Test QuickCheck Modifiers",
          "module": "Test.QuickCheck.Modifiers",
          "name": "Shrink2",
          "package": "QuickCheck",
          "partial": "Shrink",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Modifiers.html#t:Shrink2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.QuickCheck.Modifiers",
          "name": "ShrinkState",
          "package": "QuickCheck",
          "source": "src/Test-QuickCheck-Modifiers.html#ShrinkState",
          "type": "class"
        },
        "index": {
          "hierarchy": "Test QuickCheck Modifiers",
          "module": "Test.QuickCheck.Modifiers",
          "name": "ShrinkState",
          "package": "QuickCheck",
          "partial": "Shrink State",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Modifiers.html#t:ShrinkState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eShrinking _ x\u003c/code\u003e: allows for maintaining a state during shrinking.\n\u003c/p\u003e",
          "module": "Test.QuickCheck.Modifiers",
          "name": "Shrinking",
          "package": "QuickCheck",
          "source": "src/Test-QuickCheck-Modifiers.html#Shrinking",
          "type": "data"
        },
        "index": {
          "description": "Shrinking allows for maintaining state during shrinking",
          "hierarchy": "Test QuickCheck Modifiers",
          "module": "Test.QuickCheck.Modifiers",
          "name": "Shrinking",
          "package": "QuickCheck",
          "partial": "Shrinking",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Modifiers.html#t:Shrinking"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eSmart _ x\u003c/code\u003e: tries a different order when shrinking.\n\u003c/p\u003e",
          "module": "Test.QuickCheck.Modifiers",
          "name": "Smart",
          "package": "QuickCheck",
          "source": "src/Test-QuickCheck-Modifiers.html#Smart",
          "type": "data"
        },
        "index": {
          "description": "Smart tries different order when shrinking",
          "hierarchy": "Test QuickCheck Modifiers",
          "module": "Test.QuickCheck.Modifiers",
          "name": "Smart",
          "package": "QuickCheck",
          "partial": "Smart",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Modifiers.html#t:Smart"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.QuickCheck.Modifiers\",\"Test.QuickCheck\"]",
          "name": "Blind",
          "package": "QuickCheck",
          "signature": "Blind a",
          "source": "src/Test-QuickCheck-Modifiers.html#Blind",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Modifiers.html#v:Blind\",\"http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html#v:Blind\"]"
        },
        "index": {
          "hierarchy": "Test QuickCheck Modifiers",
          "module": "Test.QuickCheck.Modifiers",
          "name": "Blind",
          "package": "QuickCheck",
          "partial": "Blind",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Modifiers.html#v:Blind"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.QuickCheck.Modifiers\",\"Test.QuickCheck\"]",
          "name": "Fixed",
          "package": "QuickCheck",
          "signature": "Fixed a",
          "source": "src/Test-QuickCheck-Modifiers.html#Fixed",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Modifiers.html#v:Fixed\",\"http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html#v:Fixed\"]"
        },
        "index": {
          "hierarchy": "Test QuickCheck Modifiers",
          "module": "Test.QuickCheck.Modifiers",
          "name": "Fixed",
          "package": "QuickCheck",
          "partial": "Fixed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Modifiers.html#v:Fixed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.QuickCheck.Modifiers\",\"Test.QuickCheck\"]",
          "name": "NonEmpty",
          "package": "QuickCheck",
          "signature": "NonEmpty",
          "source": "src/Test-QuickCheck-Modifiers.html#NonEmptyList",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Modifiers.html#v:NonEmpty\",\"http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html#v:NonEmpty\"]"
        },
        "index": {
          "hierarchy": "Test QuickCheck Modifiers",
          "module": "Test.QuickCheck.Modifiers",
          "name": "NonEmpty",
          "package": "QuickCheck",
          "partial": "Non Empty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Modifiers.html#v:NonEmpty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.QuickCheck.Modifiers\",\"Test.QuickCheck\"]",
          "name": "NonNegative",
          "package": "QuickCheck",
          "signature": "NonNegative",
          "source": "src/Test-QuickCheck-Modifiers.html#NonNegative",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Modifiers.html#v:NonNegative\",\"http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html#v:NonNegative\"]"
        },
        "index": {
          "hierarchy": "Test QuickCheck Modifiers",
          "module": "Test.QuickCheck.Modifiers",
          "name": "NonNegative",
          "package": "QuickCheck",
          "partial": "Non Negative",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Modifiers.html#v:NonNegative"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.QuickCheck.Modifiers\",\"Test.QuickCheck\"]",
          "name": "NonZero",
          "package": "QuickCheck",
          "signature": "NonZero",
          "source": "src/Test-QuickCheck-Modifiers.html#NonZero",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Modifiers.html#v:NonZero\",\"http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html#v:NonZero\"]"
        },
        "index": {
          "hierarchy": "Test QuickCheck Modifiers",
          "module": "Test.QuickCheck.Modifiers",
          "name": "NonZero",
          "package": "QuickCheck",
          "partial": "Non Zero",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Modifiers.html#v:NonZero"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.QuickCheck.Modifiers\",\"Test.QuickCheck\"]",
          "name": "Ordered",
          "package": "QuickCheck",
          "signature": "Ordered",
          "source": "src/Test-QuickCheck-Modifiers.html#OrderedList",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Modifiers.html#v:Ordered\",\"http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html#v:Ordered\"]"
        },
        "index": {
          "hierarchy": "Test QuickCheck Modifiers",
          "module": "Test.QuickCheck.Modifiers",
          "name": "Ordered",
          "package": "QuickCheck",
          "partial": "Ordered",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Modifiers.html#v:Ordered"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.QuickCheck.Modifiers\",\"Test.QuickCheck\"]",
          "name": "Positive",
          "package": "QuickCheck",
          "signature": "Positive",
          "source": "src/Test-QuickCheck-Modifiers.html#Positive",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Modifiers.html#v:Positive\",\"http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html#v:Positive\"]"
        },
        "index": {
          "hierarchy": "Test QuickCheck Modifiers",
          "module": "Test.QuickCheck.Modifiers",
          "name": "Positive",
          "package": "QuickCheck",
          "partial": "Positive",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Modifiers.html#v:Positive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.QuickCheck.Modifiers\",\"Test.QuickCheck\"]",
          "name": "Shrink2",
          "package": "QuickCheck",
          "signature": "Shrink2 a",
          "source": "src/Test-QuickCheck-Modifiers.html#Shrink2",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Modifiers.html#v:Shrink2\",\"http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html#v:Shrink2\"]"
        },
        "index": {
          "hierarchy": "Test QuickCheck Modifiers",
          "module": "Test.QuickCheck.Modifiers",
          "name": "Shrink2",
          "package": "QuickCheck",
          "partial": "Shrink",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Modifiers.html#v:Shrink2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.QuickCheck.Modifiers\",\"Test.QuickCheck\"]",
          "name": "Shrinking",
          "package": "QuickCheck",
          "signature": "Shrinking s a",
          "source": "src/Test-QuickCheck-Modifiers.html#Shrinking",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Modifiers.html#v:Shrinking\",\"http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html#v:Shrinking\"]"
        },
        "index": {
          "hierarchy": "Test QuickCheck Modifiers",
          "module": "Test.QuickCheck.Modifiers",
          "name": "Shrinking",
          "package": "QuickCheck",
          "partial": "Shrinking",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Modifiers.html#v:Shrinking"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.QuickCheck.Modifiers\",\"Test.QuickCheck\"]",
          "name": "Smart",
          "package": "QuickCheck",
          "signature": "Smart Int a",
          "source": "src/Test-QuickCheck-Modifiers.html#Smart",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Modifiers.html#v:Smart\",\"http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html#v:Smart\"]"
        },
        "index": {
          "hierarchy": "Test QuickCheck Modifiers",
          "module": "Test.QuickCheck.Modifiers",
          "name": "Smart",
          "package": "QuickCheck",
          "partial": "Smart",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Modifiers.html#v:Smart"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.QuickCheck.Modifiers\",\"Test.QuickCheck\"]",
          "name": "getNonEmpty",
          "package": "QuickCheck",
          "signature": "[a]",
          "source": "src/Test-QuickCheck-Modifiers.html#NonEmptyList",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Modifiers.html#v:getNonEmpty\",\"http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html#v:getNonEmpty\"]"
        },
        "index": {
          "hierarchy": "Test QuickCheck Modifiers",
          "module": "Test.QuickCheck.Modifiers",
          "name": "getNonEmpty",
          "normalized": "[a]",
          "package": "QuickCheck",
          "partial": "Non Empty",
          "signature": "[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Modifiers.html#v:getNonEmpty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.QuickCheck.Modifiers\",\"Test.QuickCheck\"]",
          "name": "getNonNegative",
          "package": "QuickCheck",
          "signature": "a",
          "source": "src/Test-QuickCheck-Modifiers.html#NonNegative",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Modifiers.html#v:getNonNegative\",\"http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html#v:getNonNegative\"]"
        },
        "index": {
          "hierarchy": "Test QuickCheck Modifiers",
          "module": "Test.QuickCheck.Modifiers",
          "name": "getNonNegative",
          "package": "QuickCheck",
          "partial": "Non Negative",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Modifiers.html#v:getNonNegative"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.QuickCheck.Modifiers\",\"Test.QuickCheck\"]",
          "name": "getNonZero",
          "package": "QuickCheck",
          "signature": "a",
          "source": "src/Test-QuickCheck-Modifiers.html#NonZero",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Modifiers.html#v:getNonZero\",\"http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html#v:getNonZero\"]"
        },
        "index": {
          "hierarchy": "Test QuickCheck Modifiers",
          "module": "Test.QuickCheck.Modifiers",
          "name": "getNonZero",
          "package": "QuickCheck",
          "partial": "Non Zero",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Modifiers.html#v:getNonZero"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.QuickCheck.Modifiers\",\"Test.QuickCheck\"]",
          "name": "getOrdered",
          "package": "QuickCheck",
          "signature": "[a]",
          "source": "src/Test-QuickCheck-Modifiers.html#OrderedList",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Modifiers.html#v:getOrdered\",\"http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html#v:getOrdered\"]"
        },
        "index": {
          "hierarchy": "Test QuickCheck Modifiers",
          "module": "Test.QuickCheck.Modifiers",
          "name": "getOrdered",
          "normalized": "[a]",
          "package": "QuickCheck",
          "partial": "Ordered",
          "signature": "[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Modifiers.html#v:getOrdered"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.QuickCheck.Modifiers\",\"Test.QuickCheck\"]",
          "name": "getPositive",
          "package": "QuickCheck",
          "signature": "a",
          "source": "src/Test-QuickCheck-Modifiers.html#Positive",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Modifiers.html#v:getPositive\",\"http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html#v:getPositive\"]"
        },
        "index": {
          "hierarchy": "Test QuickCheck Modifiers",
          "module": "Test.QuickCheck.Modifiers",
          "name": "getPositive",
          "package": "QuickCheck",
          "partial": "Positive",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Modifiers.html#v:getPositive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.QuickCheck.Modifiers",
          "name": "shrinkInit",
          "package": "QuickCheck",
          "signature": "a -\u003e s",
          "source": "src/Test-QuickCheck-Modifiers.html#shrinkInit",
          "type": "method"
        },
        "index": {
          "hierarchy": "Test QuickCheck Modifiers",
          "module": "Test.QuickCheck.Modifiers",
          "name": "shrinkInit",
          "normalized": "a-\u003eb",
          "package": "QuickCheck",
          "partial": "Init",
          "signature": "a-\u003es",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Modifiers.html#v:shrinkInit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.QuickCheck.Modifiers",
          "name": "shrinkState",
          "package": "QuickCheck",
          "signature": "a -\u003e s -\u003e [(a, s)]",
          "source": "src/Test-QuickCheck-Modifiers.html#shrinkState",
          "type": "method"
        },
        "index": {
          "hierarchy": "Test QuickCheck Modifiers",
          "module": "Test.QuickCheck.Modifiers",
          "name": "shrinkState",
          "normalized": "a-\u003eb-\u003e[(a,b)]",
          "package": "QuickCheck",
          "partial": "State",
          "signature": "a-\u003es-\u003e[(a,s)]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Modifiers.html#v:shrinkState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAllows testing of monadic values.\n See the paper \"Testing Monadic Code with QuickCheck\":\n \u003ca\u003ehttp://www.cse.chalmers.se/~rjmh/Papers/QuickCheckST.ps\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Test.QuickCheck.Monadic",
          "name": "Monadic",
          "package": "QuickCheck",
          "source": "src/Test-QuickCheck-Monadic.html",
          "type": "module"
        },
        "index": {
          "description": "Allows testing of monadic values See the paper Testing Monadic Code with QuickCheck http www.cse.chalmers.se rjmh Papers QuickCheckST.ps",
          "hierarchy": "Test QuickCheck Monadic",
          "module": "Test.QuickCheck.Monadic",
          "name": "Monadic",
          "package": "QuickCheck",
          "partial": "Monadic",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Monadic.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.QuickCheck.Monadic",
          "name": "PropertyM",
          "package": "QuickCheck",
          "source": "src/Test-QuickCheck-Monadic.html#PropertyM",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Test QuickCheck Monadic",
          "module": "Test.QuickCheck.Monadic",
          "name": "PropertyM",
          "package": "QuickCheck",
          "partial": "Property",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Monadic.html#t:PropertyM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.QuickCheck.Monadic",
          "name": "MkPropertyM",
          "package": "QuickCheck",
          "signature": "MkPropertyM",
          "source": "src/Test-QuickCheck-Monadic.html#PropertyM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test QuickCheck Monadic",
          "module": "Test.QuickCheck.Monadic",
          "name": "MkPropertyM",
          "package": "QuickCheck",
          "partial": "Mk Property",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Monadic.html#v:MkPropertyM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.QuickCheck.Monadic",
          "name": "assert",
          "package": "QuickCheck",
          "signature": "Bool -\u003e PropertyM m ()",
          "source": "src/Test-QuickCheck-Monadic.html#assert",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test QuickCheck Monadic",
          "module": "Test.QuickCheck.Monadic",
          "name": "assert",
          "normalized": "Bool-\u003ePropertyM a()",
          "package": "QuickCheck",
          "signature": "Bool-\u003ePropertyM m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Monadic.html#v:assert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.QuickCheck.Monadic",
          "name": "forAllM",
          "package": "QuickCheck",
          "signature": "Gen a -\u003e (a -\u003e PropertyM m b) -\u003e PropertyM m b",
          "source": "src/Test-QuickCheck-Monadic.html#forAllM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test QuickCheck Monadic",
          "module": "Test.QuickCheck.Monadic",
          "name": "forAllM",
          "normalized": "Gen a-\u003e(a-\u003ePropertyM b c)-\u003ePropertyM b c",
          "package": "QuickCheck",
          "partial": "All",
          "signature": "Gen a-\u003e(a-\u003ePropertyM m b)-\u003ePropertyM m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Monadic.html#v:forAllM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.QuickCheck.Monadic",
          "name": "monadic",
          "package": "QuickCheck",
          "signature": "(m Property -\u003e Property) -\u003e PropertyM m a -\u003e Property",
          "source": "src/Test-QuickCheck-Monadic.html#monadic",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test QuickCheck Monadic",
          "module": "Test.QuickCheck.Monadic",
          "name": "monadic",
          "normalized": "(a Property-\u003eProperty)-\u003ePropertyM a b-\u003eProperty",
          "package": "QuickCheck",
          "signature": "(m Property-\u003eProperty)-\u003ePropertyM m a-\u003eProperty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Monadic.html#v:monadic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.QuickCheck.Monadic",
          "name": "monadic'",
          "package": "QuickCheck",
          "signature": "PropertyM m a -\u003e Gen (m Property)",
          "source": "src/Test-QuickCheck-Monadic.html#monadic%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test QuickCheck Monadic",
          "module": "Test.QuickCheck.Monadic",
          "name": "monadic'",
          "normalized": "PropertyM a b-\u003eGen(a Property)",
          "package": "QuickCheck",
          "signature": "PropertyM m a-\u003eGen(m Property)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Monadic.html#v:monadic-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.QuickCheck.Monadic",
          "name": "monadicIO",
          "package": "QuickCheck",
          "signature": "PropertyM IO a -\u003e Property",
          "source": "src/Test-QuickCheck-Monadic.html#monadicIO",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test QuickCheck Monadic",
          "module": "Test.QuickCheck.Monadic",
          "name": "monadicIO",
          "normalized": "PropertyM IO a-\u003eProperty",
          "package": "QuickCheck",
          "partial": "IO",
          "signature": "PropertyM IO a-\u003eProperty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Monadic.html#v:monadicIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.QuickCheck.Monadic",
          "name": "monadicST",
          "package": "QuickCheck",
          "signature": "(forall s.  PropertyM (ST s) a) -\u003e Property",
          "source": "src/Test-QuickCheck-Monadic.html#monadicST",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test QuickCheck Monadic",
          "module": "Test.QuickCheck.Monadic",
          "name": "monadicST",
          "normalized": "(a b PropertyM(ST c)d)-\u003eProperty",
          "package": "QuickCheck",
          "partial": "ST",
          "signature": "(forall s. PropertyM(ST s)a)-\u003eProperty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Monadic.html#v:monadicST"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.QuickCheck.Monadic",
          "name": "monitor",
          "package": "QuickCheck",
          "signature": "(Property -\u003e Property) -\u003e PropertyM m ()",
          "source": "src/Test-QuickCheck-Monadic.html#monitor",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test QuickCheck Monadic",
          "module": "Test.QuickCheck.Monadic",
          "name": "monitor",
          "normalized": "(Property-\u003eProperty)-\u003ePropertyM a()",
          "package": "QuickCheck",
          "signature": "(Property-\u003eProperty)-\u003ePropertyM m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Monadic.html#v:monitor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.QuickCheck.Monadic",
          "name": "pick",
          "package": "QuickCheck",
          "signature": "Gen a -\u003e PropertyM m a",
          "source": "src/Test-QuickCheck-Monadic.html#pick",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test QuickCheck Monadic",
          "module": "Test.QuickCheck.Monadic",
          "name": "pick",
          "normalized": "Gen a-\u003ePropertyM b a",
          "package": "QuickCheck",
          "signature": "Gen a-\u003ePropertyM m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Monadic.html#v:pick"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.QuickCheck.Monadic",
          "name": "pre",
          "package": "QuickCheck",
          "signature": "Bool -\u003e PropertyM m ()",
          "source": "src/Test-QuickCheck-Monadic.html#pre",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test QuickCheck Monadic",
          "module": "Test.QuickCheck.Monadic",
          "name": "pre",
          "normalized": "Bool-\u003ePropertyM a()",
          "package": "QuickCheck",
          "signature": "Bool-\u003ePropertyM m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Monadic.html#v:pre"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.QuickCheck.Monadic",
          "name": "run",
          "package": "QuickCheck",
          "signature": "m a -\u003e PropertyM m a",
          "source": "src/Test-QuickCheck-Monadic.html#run",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test QuickCheck Monadic",
          "module": "Test.QuickCheck.Monadic",
          "name": "run",
          "normalized": "a b-\u003ePropertyM a b",
          "package": "QuickCheck",
          "signature": "m a-\u003ePropertyM m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Monadic.html#v:run"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.QuickCheck.Monadic",
          "name": "runSTGen",
          "package": "QuickCheck",
          "signature": "(forall s.  Gen (ST s a)) -\u003e Gen a",
          "source": "src/Test-QuickCheck-Monadic.html#runSTGen",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test QuickCheck Monadic",
          "module": "Test.QuickCheck.Monadic",
          "name": "runSTGen",
          "normalized": "(a b Gen(ST c d))-\u003eGen d",
          "package": "QuickCheck",
          "partial": "STGen",
          "signature": "(forall s. Gen(ST s a))-\u003eGen a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Monadic.html#v:runSTGen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.QuickCheck.Monadic",
          "name": "stop",
          "package": "QuickCheck",
          "signature": "prop -\u003e PropertyM m a",
          "source": "src/Test-QuickCheck-Monadic.html#stop",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test QuickCheck Monadic",
          "module": "Test.QuickCheck.Monadic",
          "name": "stop",
          "normalized": "a-\u003ePropertyM b c",
          "package": "QuickCheck",
          "signature": "prop-\u003ePropertyM m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Monadic.html#v:stop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.QuickCheck.Monadic",
          "name": "unPropertyM",
          "package": "QuickCheck",
          "signature": "(a -\u003e Gen (m Property)) -\u003e Gen (m Property)",
          "source": "src/Test-QuickCheck-Monadic.html#PropertyM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test QuickCheck Monadic",
          "module": "Test.QuickCheck.Monadic",
          "name": "unPropertyM",
          "normalized": "(a-\u003eGen(b Property))-\u003eGen(b Property)",
          "package": "QuickCheck",
          "partial": "Property",
          "signature": "(a-\u003eGen(m Property))-\u003eGen(m Property)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Monadic.html#v:unPropertyM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.QuickCheck.Monadic",
          "name": "wp",
          "package": "QuickCheck",
          "signature": "m a -\u003e (a -\u003e PropertyM m b) -\u003e PropertyM m b",
          "source": "src/Test-QuickCheck-Monadic.html#wp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test QuickCheck Monadic",
          "module": "Test.QuickCheck.Monadic",
          "name": "wp",
          "normalized": "a b-\u003e(b-\u003ePropertyM a c)-\u003ePropertyM a c",
          "package": "QuickCheck",
          "signature": "m a-\u003e(a-\u003ePropertyM m b)-\u003ePropertyM m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Monadic.html#v:wp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTypes to help with testing polymorphic properties.\n\u003c/p\u003e\u003cp\u003eTypes \u003ccode\u003e\u003ca\u003eA\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eB\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eC\u003c/a\u003e\u003c/code\u003e are \u003ccode\u003enewtype\u003c/code\u003e wrappers around \u003ccode\u003e\u003ca\u003eInteger\u003c/a\u003e\u003c/code\u003e that\n implement \u003ccode\u003e\u003ca\u003eEq\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eArbitrary\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eCoArbitrary\u003c/a\u003e\u003c/code\u003e. Types\n \u003ccode\u003e\u003ca\u003eOrdA\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eOrdB\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eOrdC\u003c/a\u003e\u003c/code\u003e also implement \u003ccode\u003e\u003ca\u003eOrd\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eNum\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSee also \u003ca\u003eTest.QuickCheck.All\u003c/a\u003e for an experimental way of testing\n polymorphic properties.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Test.QuickCheck.Poly",
          "name": "Poly",
          "package": "QuickCheck",
          "source": "src/Test-QuickCheck-Poly.html",
          "type": "module"
        },
        "index": {
          "description": "Types to help with testing polymorphic properties Types and are newtype wrappers around Integer that implement Eq Show Arbitrary and CoArbitrary Types OrdA OrdB and OrdC also implement Ord and Num See also Test.QuickCheck.All for an experimental way of testing polymorphic properties",
          "hierarchy": "Test QuickCheck Poly",
          "module": "Test.QuickCheck.Poly",
          "name": "Poly",
          "package": "QuickCheck",
          "partial": "Poly",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Poly.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.QuickCheck.Poly",
          "name": "A",
          "package": "QuickCheck",
          "source": "src/Test-QuickCheck-Poly.html#A",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Test QuickCheck Poly",
          "module": "Test.QuickCheck.Poly",
          "name": "A",
          "package": "QuickCheck",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Poly.html#t:A"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.QuickCheck.Poly",
          "name": "B",
          "package": "QuickCheck",
          "source": "src/Test-QuickCheck-Poly.html#B",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Test QuickCheck Poly",
          "module": "Test.QuickCheck.Poly",
          "name": "B",
          "package": "QuickCheck",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Poly.html#t:B"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.QuickCheck.Poly",
          "name": "C",
          "package": "QuickCheck",
          "source": "src/Test-QuickCheck-Poly.html#C",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Test QuickCheck Poly",
          "module": "Test.QuickCheck.Poly",
          "name": "C",
          "package": "QuickCheck",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Poly.html#t:C"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.QuickCheck.Poly",
          "name": "OrdA",
          "package": "QuickCheck",
          "source": "src/Test-QuickCheck-Poly.html#OrdA",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Test QuickCheck Poly",
          "module": "Test.QuickCheck.Poly",
          "name": "OrdA",
          "package": "QuickCheck",
          "partial": "Ord",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Poly.html#t:OrdA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.QuickCheck.Poly",
          "name": "OrdB",
          "package": "QuickCheck",
          "source": "src/Test-QuickCheck-Poly.html#OrdB",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Test QuickCheck Poly",
          "module": "Test.QuickCheck.Poly",
          "name": "OrdB",
          "package": "QuickCheck",
          "partial": "Ord",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Poly.html#t:OrdB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.QuickCheck.Poly",
          "name": "OrdC",
          "package": "QuickCheck",
          "source": "src/Test-QuickCheck-Poly.html#OrdC",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Test QuickCheck Poly",
          "module": "Test.QuickCheck.Poly",
          "name": "OrdC",
          "package": "QuickCheck",
          "partial": "Ord",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Poly.html#t:OrdC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.QuickCheck.Poly",
          "name": "A",
          "package": "QuickCheck",
          "signature": "A",
          "source": "src/Test-QuickCheck-Poly.html#A",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test QuickCheck Poly",
          "module": "Test.QuickCheck.Poly",
          "name": "A",
          "package": "QuickCheck",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Poly.html#v:A"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.QuickCheck.Poly",
          "name": "B",
          "package": "QuickCheck",
          "signature": "B",
          "source": "src/Test-QuickCheck-Poly.html#B",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test QuickCheck Poly",
          "module": "Test.QuickCheck.Poly",
          "name": "B",
          "package": "QuickCheck",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Poly.html#v:B"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.QuickCheck.Poly",
          "name": "C",
          "package": "QuickCheck",
          "signature": "C",
          "source": "src/Test-QuickCheck-Poly.html#C",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test QuickCheck Poly",
          "module": "Test.QuickCheck.Poly",
          "name": "C",
          "package": "QuickCheck",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Poly.html#v:C"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.QuickCheck.Poly",
          "name": "OrdA",
          "package": "QuickCheck",
          "signature": "OrdA",
          "source": "src/Test-QuickCheck-Poly.html#OrdA",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test QuickCheck Poly",
          "module": "Test.QuickCheck.Poly",
          "name": "OrdA",
          "package": "QuickCheck",
          "partial": "Ord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Poly.html#v:OrdA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.QuickCheck.Poly",
          "name": "OrdB",
          "package": "QuickCheck",
          "signature": "OrdB",
          "source": "src/Test-QuickCheck-Poly.html#OrdB",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test QuickCheck Poly",
          "module": "Test.QuickCheck.Poly",
          "name": "OrdB",
          "package": "QuickCheck",
          "partial": "Ord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Poly.html#v:OrdB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.QuickCheck.Poly",
          "name": "OrdC",
          "package": "QuickCheck",
          "signature": "OrdC",
          "source": "src/Test-QuickCheck-Poly.html#OrdC",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test QuickCheck Poly",
          "module": "Test.QuickCheck.Poly",
          "name": "OrdC",
          "package": "QuickCheck",
          "partial": "Ord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Poly.html#v:OrdC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.QuickCheck.Poly",
          "name": "unA",
          "package": "QuickCheck",
          "signature": "Integer",
          "source": "src/Test-QuickCheck-Poly.html#A",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test QuickCheck Poly",
          "module": "Test.QuickCheck.Poly",
          "name": "unA",
          "package": "QuickCheck",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Poly.html#v:unA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.QuickCheck.Poly",
          "name": "unB",
          "package": "QuickCheck",
          "signature": "Integer",
          "source": "src/Test-QuickCheck-Poly.html#B",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test QuickCheck Poly",
          "module": "Test.QuickCheck.Poly",
          "name": "unB",
          "package": "QuickCheck",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Poly.html#v:unB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.QuickCheck.Poly",
          "name": "unC",
          "package": "QuickCheck",
          "signature": "Integer",
          "source": "src/Test-QuickCheck-Poly.html#C",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test QuickCheck Poly",
          "module": "Test.QuickCheck.Poly",
          "name": "unC",
          "package": "QuickCheck",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Poly.html#v:unC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.QuickCheck.Poly",
          "name": "unOrdA",
          "package": "QuickCheck",
          "signature": "Integer",
          "source": "src/Test-QuickCheck-Poly.html#OrdA",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test QuickCheck Poly",
          "module": "Test.QuickCheck.Poly",
          "name": "unOrdA",
          "package": "QuickCheck",
          "partial": "Ord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Poly.html#v:unOrdA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.QuickCheck.Poly",
          "name": "unOrdB",
          "package": "QuickCheck",
          "signature": "Integer",
          "source": "src/Test-QuickCheck-Poly.html#OrdB",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test QuickCheck Poly",
          "module": "Test.QuickCheck.Poly",
          "name": "unOrdB",
          "package": "QuickCheck",
          "partial": "Ord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Poly.html#v:unOrdB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.QuickCheck.Poly",
          "name": "unOrdC",
          "package": "QuickCheck",
          "signature": "Integer",
          "source": "src/Test-QuickCheck-Poly.html#OrdC",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test QuickCheck Poly",
          "module": "Test.QuickCheck.Poly",
          "name": "unOrdC",
          "package": "QuickCheck",
          "partial": "Ord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Poly.html#v:unOrdC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.QuickCheck.Property",
          "name": "Property",
          "package": "QuickCheck",
          "source": "src/Test-QuickCheck-Property.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Test QuickCheck Property",
          "module": "Test.QuickCheck.Property",
          "name": "Property",
          "package": "QuickCheck",
          "partial": "Property",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Property.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDifferent kinds of callbacks\n\u003c/p\u003e",
          "module": "Test.QuickCheck.Property",
          "name": "Callback",
          "package": "QuickCheck",
          "source": "src/Test-QuickCheck-Property.html#Callback",
          "type": "data"
        },
        "index": {
          "description": "Different kinds of callbacks",
          "hierarchy": "Test QuickCheck Property",
          "module": "Test.QuickCheck.Property",
          "name": "Callback",
          "package": "QuickCheck",
          "partial": "Callback",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Property.html#t:Callback"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.QuickCheck.Property",
          "name": "CallbackKind",
          "package": "QuickCheck",
          "source": "src/Test-QuickCheck-Property.html#CallbackKind",
          "type": "data"
        },
        "index": {
          "hierarchy": "Test QuickCheck Property",
          "module": "Test.QuickCheck.Property",
          "name": "CallbackKind",
          "package": "QuickCheck",
          "partial": "Callback Kind",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Property.html#t:CallbackKind"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.QuickCheck.Property",
          "name": "Prop",
          "package": "QuickCheck",
          "source": "src/Test-QuickCheck-Property.html#Prop",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Test QuickCheck Property",
          "module": "Test.QuickCheck.Property",
          "name": "Prop",
          "package": "QuickCheck",
          "partial": "Prop",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Property.html#t:Prop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.QuickCheck.Property",
          "name": "Property",
          "package": "QuickCheck",
          "source": "src/Test-QuickCheck-Property.html#Property",
          "type": "type"
        },
        "index": {
          "hierarchy": "Test QuickCheck Property",
          "module": "Test.QuickCheck.Property",
          "name": "Property",
          "package": "QuickCheck",
          "partial": "Property",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Property.html#t:Property"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe result of a single test.\n\u003c/p\u003e",
          "module": "Test.QuickCheck.Property",
          "name": "Result",
          "package": "QuickCheck",
          "source": "src/Test-QuickCheck-Property.html#Result",
          "type": "data"
        },
        "index": {
          "description": "The result of single test",
          "hierarchy": "Test QuickCheck Property",
          "module": "Test.QuickCheck.Property",
          "name": "Result",
          "package": "QuickCheck",
          "partial": "Result",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Property.html#t:Result"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.QuickCheck.Property",
          "name": "Rose",
          "package": "QuickCheck",
          "source": "src/Test-QuickCheck-Property.html#Rose",
          "type": "data"
        },
        "index": {
          "hierarchy": "Test QuickCheck Property",
          "module": "Test.QuickCheck.Property",
          "name": "Rose",
          "package": "QuickCheck",
          "partial": "Rose",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Property.html#t:Rose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe class of things which can be tested, i.e. turned into a property.\n\u003c/p\u003e",
          "module": "Test.QuickCheck.Property",
          "name": "Testable",
          "package": "QuickCheck",
          "source": "src/Test-QuickCheck-Property.html#Testable",
          "type": "class"
        },
        "index": {
          "description": "The class of things which can be tested i.e turned into property",
          "hierarchy": "Test QuickCheck Property",
          "module": "Test.QuickCheck.Property",
          "name": "Testable",
          "package": "QuickCheck",
          "partial": "Testable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Property.html#t:Testable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eImplication for properties: The resulting property holds if\n the first argument is \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e (in which case the test case is discarded),\n or if the given property holds.\n\u003c/p\u003e",
          "module": "[\"Test.QuickCheck.Property\",\"Test.QuickCheck\"]",
          "name": "(==\u003e)",
          "package": "QuickCheck",
          "signature": "Bool -\u003e prop -\u003e Property",
          "source": "src/Test-QuickCheck-Property.html#%3D%3D%3E",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Property.html#v:-61--61--62-\",\"http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html#v:-61--61--62-\"]"
        },
        "index": {
          "description": "Implication for properties The resulting property holds if the first argument is False in which case the test case is discarded or if the given property holds",
          "hierarchy": "Test QuickCheck Property",
          "module": "Test.QuickCheck.Property",
          "name": "(==\u003e) ==\u003e",
          "normalized": "Bool-\u003ea-\u003eProperty",
          "package": "QuickCheck",
          "signature": "Bool-\u003eprop-\u003eProperty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Property.html#v:-61--61--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDisjunction: \u003ccode\u003ep1\u003c/code\u003e \u003ccode\u003e\u003ca\u003e.||.\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ep2\u003c/code\u003e passes unless \u003ccode\u003ep1\u003c/code\u003e and \u003ccode\u003ep2\u003c/code\u003e simultaneously fail.\n\u003c/p\u003e",
          "module": "[\"Test.QuickCheck.Property\",\"Test.QuickCheck\"]",
          "name": "(.||.)",
          "package": "QuickCheck",
          "signature": "prop1 -\u003e prop2 -\u003e Property",
          "source": "src/Test-QuickCheck-Property.html#.%7C%7C.",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Property.html#v:.-124--124-.\",\"http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html#v:.-124--124-.\"]"
        },
        "index": {
          "description": "Disjunction p1 p2 passes unless p1 and p2 simultaneously fail",
          "hierarchy": "Test QuickCheck Property",
          "module": "Test.QuickCheck.Property",
          "name": "(.||.) .||.",
          "normalized": "a-\u003ea-\u003eProperty",
          "package": "QuickCheck",
          "signature": "prop-\u003eprop-\u003eProperty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Property.html#v:.-124--124-."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConjunction: \u003ccode\u003ep1\u003c/code\u003e \u003ccode\u003e\u003ca\u003e.&&.\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ep2\u003c/code\u003e passes if both \u003ccode\u003ep1\u003c/code\u003e and \u003ccode\u003ep2\u003c/code\u003e pass.\n\u003c/p\u003e",
          "module": "[\"Test.QuickCheck.Property\",\"Test.QuickCheck\"]",
          "name": "(.&&.)",
          "package": "QuickCheck",
          "signature": "prop1 -\u003e prop2 -\u003e Property",
          "source": "src/Test-QuickCheck-Property.html#.%26%26.",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Property.html#v:.-38--38-.\",\"http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html#v:.-38--38-.\"]"
        },
        "index": {
          "description": "Conjunction p1 p2 passes if both p1 and p2 pass",
          "hierarchy": "Test QuickCheck Property",
          "module": "Test.QuickCheck.Property",
          "name": "(.&&.) .&&.",
          "normalized": "a-\u003ea-\u003eProperty",
          "package": "QuickCheck",
          "signature": "prop-\u003eprop-\u003eProperty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Property.html#v:.-38--38-."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNondeterministic choice: \u003ccode\u003ep1\u003c/code\u003e \u003ccode\u003e\u003ca\u003e.&.\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ep2\u003c/code\u003e picks randomly one of\n \u003ccode\u003ep1\u003c/code\u003e and \u003ccode\u003ep2\u003c/code\u003e to test. If you test the property 100 times it\n makes 100 random choices.\n\u003c/p\u003e",
          "module": "[\"Test.QuickCheck.Property\",\"Test.QuickCheck\"]",
          "name": "(.&.)",
          "package": "QuickCheck",
          "signature": "prop1 -\u003e prop2 -\u003e Property",
          "source": "src/Test-QuickCheck-Property.html#.%26.",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Property.html#v:.-38-.\",\"http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html#v:.-38-.\"]"
        },
        "index": {
          "description": "Nondeterministic choice p1 p2 picks randomly one of p1 and p2 to test If you test the property times it makes random choices",
          "hierarchy": "Test QuickCheck Property",
          "module": "Test.QuickCheck.Property",
          "name": "(.&.) .&.",
          "normalized": "a-\u003ea-\u003eProperty",
          "package": "QuickCheck",
          "signature": "prop-\u003eprop-\u003eProperty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Property.html#v:.-38-."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAffected by the \u003ccode\u003e\u003ca\u003everbose\u003c/a\u003e\u003c/code\u003e combinator\n\u003c/p\u003e",
          "module": "Test.QuickCheck.Property",
          "name": "Counterexample",
          "package": "QuickCheck",
          "signature": "Counterexample",
          "source": "src/Test-QuickCheck-Property.html#CallbackKind",
          "type": "function"
        },
        "index": {
          "description": "Affected by the verbose combinator",
          "hierarchy": "Test QuickCheck Property",
          "module": "Test.QuickCheck.Property",
          "name": "Counterexample",
          "package": "QuickCheck",
          "partial": "Counterexample",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Property.html#v:Counterexample"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.QuickCheck.Property",
          "name": "IORose",
          "package": "QuickCheck",
          "signature": "IORose (IO (Rose a))",
          "source": "src/Test-QuickCheck-Property.html#Rose",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test QuickCheck Property",
          "module": "Test.QuickCheck.Property",
          "name": "IORose",
          "package": "QuickCheck",
          "partial": "IORose",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Property.html#v:IORose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.QuickCheck.Property",
          "name": "MkProp",
          "package": "QuickCheck",
          "signature": "MkProp",
          "source": "src/Test-QuickCheck-Property.html#Prop",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test QuickCheck Property",
          "module": "Test.QuickCheck.Property",
          "name": "MkProp",
          "package": "QuickCheck",
          "partial": "Mk Prop",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Property.html#v:MkProp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.QuickCheck.Property",
          "name": "MkResult",
          "package": "QuickCheck",
          "signature": "MkResult",
          "source": "src/Test-QuickCheck-Property.html#Result",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test QuickCheck Property",
          "module": "Test.QuickCheck.Property",
          "name": "MkResult",
          "package": "QuickCheck",
          "partial": "Mk Result",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Property.html#v:MkResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.QuickCheck.Property",
          "name": "MkRose",
          "package": "QuickCheck",
          "signature": "MkRose a [Rose a]",
          "source": "src/Test-QuickCheck-Property.html#Rose",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test QuickCheck Property",
          "module": "Test.QuickCheck.Property",
          "name": "MkRose",
          "normalized": "MkRose a[Rose a]",
          "package": "QuickCheck",
          "partial": "Mk Rose",
          "signature": "MkRose a[Rose a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Property.html#v:MkRose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNot affected by the \u003ccode\u003e\u003ca\u003everbose\u003c/a\u003e\u003c/code\u003e combinator\n\u003c/p\u003e",
          "module": "Test.QuickCheck.Property",
          "name": "NotCounterexample",
          "package": "QuickCheck",
          "signature": "NotCounterexample",
          "source": "src/Test-QuickCheck-Property.html#CallbackKind",
          "type": "function"
        },
        "index": {
          "description": "Not affected by the verbose combinator",
          "hierarchy": "Test QuickCheck Property",
          "module": "Test.QuickCheck.Property",
          "name": "NotCounterexample",
          "package": "QuickCheck",
          "partial": "Not Counterexample",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Property.html#v:NotCounterexample"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalled with the final failing test-case\n\u003c/p\u003e",
          "module": "Test.QuickCheck.Property",
          "name": "PostFinalFailure",
          "package": "QuickCheck",
          "signature": "PostFinalFailure CallbackKind (State -\u003e Result -\u003e IO ())",
          "source": "src/Test-QuickCheck-Property.html#Callback",
          "type": "function"
        },
        "index": {
          "description": "Called with the final failing test-case",
          "hierarchy": "Test QuickCheck Property",
          "module": "Test.QuickCheck.Property",
          "name": "PostFinalFailure",
          "normalized": "PostFinalFailure CallbackKind(State-\u003eResult-\u003eIO())",
          "package": "QuickCheck",
          "partial": "Post Final Failure",
          "signature": "PostFinalFailure CallbackKind(State-\u003eResult-\u003eIO())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Property.html#v:PostFinalFailure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalled just after a test\n\u003c/p\u003e",
          "module": "Test.QuickCheck.Property",
          "name": "PostTest",
          "package": "QuickCheck",
          "signature": "PostTest CallbackKind (State -\u003e Result -\u003e IO ())",
          "source": "src/Test-QuickCheck-Property.html#Callback",
          "type": "function"
        },
        "index": {
          "description": "Called just after test",
          "hierarchy": "Test QuickCheck Property",
          "module": "Test.QuickCheck.Property",
          "name": "PostTest",
          "normalized": "PostTest CallbackKind(State-\u003eResult-\u003eIO())",
          "package": "QuickCheck",
          "partial": "Post Test",
          "signature": "PostTest CallbackKind(State-\u003eResult-\u003eIO())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Property.html#v:PostTest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eif True, the test should not be repeated\n\u003c/p\u003e",
          "module": "Test.QuickCheck.Property",
          "name": "abort",
          "package": "QuickCheck",
          "signature": "Bool",
          "source": "src/Test-QuickCheck-Property.html#Result",
          "type": "function"
        },
        "index": {
          "description": "if True the test should not be repeated",
          "hierarchy": "Test QuickCheck Property",
          "module": "Test.QuickCheck.Property",
          "name": "abort",
          "package": "QuickCheck",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Property.html#v:abort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdds a callback\n\u003c/p\u003e",
          "module": "Test.QuickCheck.Property",
          "name": "callback",
          "package": "QuickCheck",
          "signature": "Callback -\u003e prop -\u003e Property",
          "source": "src/Test-QuickCheck-Property.html#callback",
          "type": "function"
        },
        "index": {
          "description": "Adds callback",
          "hierarchy": "Test QuickCheck Property",
          "module": "Test.QuickCheck.Property",
          "name": "callback",
          "normalized": "Callback-\u003ea-\u003eProperty",
          "package": "QuickCheck",
          "signature": "Callback-\u003eprop-\u003eProperty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Property.html#v:callback"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe callbacks for this test case\n\u003c/p\u003e",
          "module": "Test.QuickCheck.Property",
          "name": "callbacks",
          "package": "QuickCheck",
          "signature": "[Callback]",
          "source": "src/Test-QuickCheck-Property.html#Result",
          "type": "function"
        },
        "index": {
          "description": "the callbacks for this test case",
          "hierarchy": "Test QuickCheck Property",
          "module": "Test.QuickCheck.Property",
          "name": "callbacks",
          "normalized": "[Callback]",
          "package": "QuickCheck",
          "signature": "[Callback]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Property.html#v:callbacks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConditionally labels test case.\n\u003c/p\u003e",
          "module": "[\"Test.QuickCheck.Property\",\"Test.QuickCheck\"]",
          "name": "classify",
          "package": "QuickCheck",
          "signature": "Bool-\u003e String-\u003e prop-\u003e Property",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Property.html#v:classify\",\"http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html#v:classify\"]"
        },
        "index": {
          "description": "Conditionally labels test case",
          "hierarchy": "Test QuickCheck Property",
          "module": "Test.QuickCheck.Property",
          "name": "classify",
          "normalized": "Bool-\u003eString-\u003ea-\u003eProperty",
          "package": "QuickCheck",
          "signature": "Bool-\u003eString-\u003eprop-\u003eProperty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Property.html#v:classify"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLabels a property with a value:\n\u003c/p\u003e\u003cpre\u003e collect x = label (show x)\n\u003c/pre\u003e",
          "module": "[\"Test.QuickCheck.Property\",\"Test.QuickCheck\"]",
          "name": "collect",
          "package": "QuickCheck",
          "signature": "a -\u003e prop -\u003e Property",
          "source": "src/Test-QuickCheck-Property.html#collect",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Property.html#v:collect\",\"http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html#v:collect\"]"
        },
        "index": {
          "description": "Labels property with value collect label show",
          "hierarchy": "Test QuickCheck Property",
          "module": "Test.QuickCheck.Property",
          "name": "collect",
          "normalized": "a-\u003eb-\u003eProperty",
          "package": "QuickCheck",
          "signature": "a-\u003eprop-\u003eProperty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Property.html#v:collect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTake the conjunction of several properties.\n\u003c/p\u003e",
          "module": "[\"Test.QuickCheck.Property\",\"Test.QuickCheck\"]",
          "name": "conjoin",
          "package": "QuickCheck",
          "signature": "[prop] -\u003e Property",
          "source": "src/Test-QuickCheck-Property.html#conjoin",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Property.html#v:conjoin\",\"http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html#v:conjoin\"]"
        },
        "index": {
          "description": "Take the conjunction of several properties",
          "hierarchy": "Test QuickCheck Property",
          "module": "Test.QuickCheck.Property",
          "name": "conjoin",
          "normalized": "[a]-\u003eProperty",
          "package": "QuickCheck",
          "signature": "[prop]-\u003eProperty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Property.html#v:conjoin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChecks that at least the given proportion of the test cases belong\n to the given class.\n\u003c/p\u003e",
          "module": "[\"Test.QuickCheck.Property\",\"Test.QuickCheck\"]",
          "name": "cover",
          "package": "QuickCheck",
          "signature": "Bool-\u003e Int-\u003e String-\u003e prop-\u003e Property",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Property.html#v:cover\",\"http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html#v:cover\"]"
        },
        "index": {
          "description": "Checks that at least the given proportion of the test cases belong to the given class",
          "hierarchy": "Test QuickCheck Property",
          "module": "Test.QuickCheck.Property",
          "name": "cover",
          "normalized": "Bool-\u003eInt-\u003eString-\u003ea-\u003eProperty",
          "package": "QuickCheck",
          "signature": "Bool-\u003eInt-\u003eString-\u003eprop-\u003eProperty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Property.html#v:cover"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTake the disjunction of several properties.\n\u003c/p\u003e",
          "module": "[\"Test.QuickCheck.Property\",\"Test.QuickCheck\"]",
          "name": "disjoin",
          "package": "QuickCheck",
          "signature": "[prop] -\u003e Property",
          "source": "src/Test-QuickCheck-Property.html#disjoin",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Property.html#v:disjoin\",\"http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html#v:disjoin\"]"
        },
        "index": {
          "description": "Take the disjunction of several properties",
          "hierarchy": "Test QuickCheck Property",
          "module": "Test.QuickCheck.Property",
          "name": "disjoin",
          "normalized": "[a]-\u003eProperty",
          "package": "QuickCheck",
          "signature": "[prop]-\u003eProperty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Property.html#v:disjoin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.QuickCheck.Property",
          "name": "exception",
          "package": "QuickCheck",
          "signature": "String -\u003e AnException -\u003e Result",
          "source": "src/Test-QuickCheck-Property.html#exception",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test QuickCheck Property",
          "module": "Test.QuickCheck.Property",
          "name": "exception",
          "normalized": "String-\u003eAnException-\u003eResult",
          "package": "QuickCheck",
          "signature": "String-\u003eAnException-\u003eResult",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Property.html#v:exception"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.QuickCheck.Property",
          "name": "exhaustive",
          "package": "QuickCheck",
          "signature": "prop -\u003e Bool",
          "source": "src/Test-QuickCheck-Property.html#exhaustive",
          "type": "method"
        },
        "index": {
          "hierarchy": "Test QuickCheck Property",
          "module": "Test.QuickCheck.Property",
          "name": "exhaustive",
          "normalized": "a-\u003eBool",
          "package": "QuickCheck",
          "signature": "prop-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Property.html#v:exhaustive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eindicates what the expected result of the property is\n\u003c/p\u003e",
          "module": "Test.QuickCheck.Property",
          "name": "expect",
          "package": "QuickCheck",
          "signature": "Bool",
          "source": "src/Test-QuickCheck-Property.html#Result",
          "type": "function"
        },
        "index": {
          "description": "indicates what the expected result of the property is",
          "hierarchy": "Test QuickCheck Property",
          "module": "Test.QuickCheck.Property",
          "name": "expect",
          "package": "QuickCheck",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Property.html#v:expect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eModifies a property so that it is expected to fail for some test cases.\n\u003c/p\u003e",
          "module": "[\"Test.QuickCheck.Property\",\"Test.QuickCheck\"]",
          "name": "expectFailure",
          "package": "QuickCheck",
          "signature": "prop -\u003e Property",
          "source": "src/Test-QuickCheck-Property.html#expectFailure",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Property.html#v:expectFailure\",\"http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html#v:expectFailure\"]"
        },
        "index": {
          "description": "Modifies property so that it is expected to fail for some test cases",
          "hierarchy": "Test QuickCheck Property",
          "module": "Test.QuickCheck.Property",
          "name": "expectFailure",
          "normalized": "a-\u003eProperty",
          "package": "QuickCheck",
          "partial": "Failure",
          "signature": "prop-\u003eProperty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Property.html#v:expectFailure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.QuickCheck.Property",
          "name": "failed",
          "package": "QuickCheck",
          "signature": "Result",
          "source": "src/Test-QuickCheck-Property.html#failed",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test QuickCheck Property",
          "module": "Test.QuickCheck.Property",
          "name": "failed",
          "package": "QuickCheck",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Property.html#v:failed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExplicit universal quantification: uses an explicitly given\n test case generator.\n\u003c/p\u003e",
          "module": "[\"Test.QuickCheck.Property\",\"Test.QuickCheck\"]",
          "name": "forAll",
          "package": "QuickCheck",
          "signature": "Gen a -\u003e (a -\u003e prop) -\u003e Property",
          "source": "src/Test-QuickCheck-Property.html#forAll",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Property.html#v:forAll\",\"http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html#v:forAll\"]"
        },
        "index": {
          "description": "Explicit universal quantification uses an explicitly given test case generator",
          "hierarchy": "Test QuickCheck Property",
          "module": "Test.QuickCheck.Property",
          "name": "forAll",
          "normalized": "Gen a-\u003e(a-\u003eb)-\u003eProperty",
          "package": "QuickCheck",
          "partial": "All",
          "signature": "Gen a-\u003e(a-\u003eprop)-\u003eProperty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Property.html#v:forAll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eforAll\u003c/a\u003e\u003c/code\u003e, but tries to shrink the argument for failing test cases.\n\u003c/p\u003e",
          "module": "[\"Test.QuickCheck.Property\",\"Test.QuickCheck\"]",
          "name": "forAllShrink",
          "package": "QuickCheck",
          "signature": "Gen a -\u003e (a -\u003e [a]) -\u003e (a -\u003e prop) -\u003e Property",
          "source": "src/Test-QuickCheck-Property.html#forAllShrink",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Property.html#v:forAllShrink\",\"http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html#v:forAllShrink\"]"
        },
        "index": {
          "description": "Like forAll but tries to shrink the argument for failing test cases",
          "hierarchy": "Test QuickCheck Property",
          "module": "Test.QuickCheck.Property",
          "name": "forAllShrink",
          "normalized": "Gen a-\u003e(a-\u003e[a])-\u003e(a-\u003eb)-\u003eProperty",
          "package": "QuickCheck",
          "partial": "All Shrink",
          "signature": "Gen a-\u003e(a-\u003e[a])-\u003e(a-\u003eprop)-\u003eProperty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Property.html#v:forAllShrink"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.QuickCheck.Property",
          "name": "formatException",
          "package": "QuickCheck",
          "signature": "String -\u003e AnException -\u003e String",
          "source": "src/Test-QuickCheck-Property.html#formatException",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test QuickCheck Property",
          "module": "Test.QuickCheck.Property",
          "name": "formatException",
          "normalized": "String-\u003eAnException-\u003eString",
          "package": "QuickCheck",
          "partial": "Exception",
          "signature": "String-\u003eAnException-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Property.html#v:formatException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eindicates if the test case was cancelled by pressing ^C\n\u003c/p\u003e",
          "module": "Test.QuickCheck.Property",
          "name": "interrupted",
          "package": "QuickCheck",
          "signature": "Bool",
          "source": "src/Test-QuickCheck-Property.html#Result",
          "type": "function"
        },
        "index": {
          "description": "indicates if the test case was cancelled by pressing",
          "hierarchy": "Test QuickCheck Property",
          "module": "Test.QuickCheck.Property",
          "name": "interrupted",
          "package": "QuickCheck",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Property.html#v:interrupted"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.QuickCheck.Property",
          "name": "ioRose",
          "package": "QuickCheck",
          "signature": "IO (Rose Result) -\u003e Rose Result",
          "source": "src/Test-QuickCheck-Property.html#ioRose",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test QuickCheck Property",
          "module": "Test.QuickCheck.Property",
          "name": "ioRose",
          "normalized": "IO(Rose Result)-\u003eRose Result",
          "package": "QuickCheck",
          "partial": "Rose",
          "signature": "IO(Rose Result)-\u003eRose Result",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Property.html#v:ioRose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.QuickCheck.Property",
          "name": "joinRose",
          "package": "QuickCheck",
          "signature": "Rose (Rose a) -\u003e Rose a",
          "source": "src/Test-QuickCheck-Property.html#joinRose",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test QuickCheck Property",
          "module": "Test.QuickCheck.Property",
          "name": "joinRose",
          "normalized": "Rose(Rose a)-\u003eRose a",
          "package": "QuickCheck",
          "partial": "Rose",
          "signature": "Rose(Rose a)-\u003eRose a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Property.html#v:joinRose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAttaches a label to a property. This is used for reporting\n test case distribution.\n\u003c/p\u003e",
          "module": "[\"Test.QuickCheck.Property\",\"Test.QuickCheck\"]",
          "name": "label",
          "package": "QuickCheck",
          "signature": "String -\u003e prop -\u003e Property",
          "source": "src/Test-QuickCheck-Property.html#label",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Property.html#v:label\",\"http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html#v:label\"]"
        },
        "index": {
          "description": "Attaches label to property This is used for reporting test case distribution",
          "hierarchy": "Test QuickCheck Property",
          "module": "Test.QuickCheck.Property",
          "name": "label",
          "normalized": "String-\u003ea-\u003eProperty",
          "package": "QuickCheck",
          "signature": "String-\u003eprop-\u003eProperty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Property.html#v:label"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.QuickCheck.Property",
          "name": "liftBool",
          "package": "QuickCheck",
          "signature": "Bool -\u003e Result",
          "source": "src/Test-QuickCheck-Property.html#liftBool",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test QuickCheck Property",
          "module": "Test.QuickCheck.Property",
          "name": "liftBool",
          "normalized": "Bool-\u003eResult",
          "package": "QuickCheck",
          "partial": "Bool",
          "signature": "Bool-\u003eResult",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Property.html#v:liftBool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.QuickCheck.Property",
          "name": "mapProp",
          "package": "QuickCheck",
          "signature": "(Prop -\u003e Prop) -\u003e prop -\u003e Property",
          "source": "src/Test-QuickCheck-Property.html#mapProp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test QuickCheck Property",
          "module": "Test.QuickCheck.Property",
          "name": "mapProp",
          "normalized": "(Prop-\u003eProp)-\u003ea-\u003eProperty",
          "package": "QuickCheck",
          "partial": "Prop",
          "signature": "(Prop-\u003eProp)-\u003eprop-\u003eProperty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Property.html#v:mapProp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.QuickCheck.Property",
          "name": "mapResult",
          "package": "QuickCheck",
          "signature": "(Result -\u003e Result) -\u003e prop -\u003e Property",
          "source": "src/Test-QuickCheck-Property.html#mapResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test QuickCheck Property",
          "module": "Test.QuickCheck.Property",
          "name": "mapResult",
          "normalized": "(Result-\u003eResult)-\u003ea-\u003eProperty",
          "package": "QuickCheck",
          "partial": "Result",
          "signature": "(Result-\u003eResult)-\u003eprop-\u003eProperty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Property.html#v:mapResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.QuickCheck.Property",
          "name": "mapRoseResult",
          "package": "QuickCheck",
          "signature": "(Rose Result -\u003e Rose Result) -\u003e prop -\u003e Property",
          "source": "src/Test-QuickCheck-Property.html#mapRoseResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test QuickCheck Property",
          "module": "Test.QuickCheck.Property",
          "name": "mapRoseResult",
          "normalized": "(Rose Result-\u003eRose Result)-\u003ea-\u003eProperty",
          "package": "QuickCheck",
          "partial": "Rose Result",
          "signature": "(Rose Result-\u003eRose Result)-\u003eprop-\u003eProperty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Property.html#v:mapRoseResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChanges the maximum test case size for a property.\n\u003c/p\u003e",
          "module": "[\"Test.QuickCheck.Property\",\"Test.QuickCheck\"]",
          "name": "mapSize",
          "package": "QuickCheck",
          "signature": "(Int -\u003e Int) -\u003e prop -\u003e Property",
          "source": "src/Test-QuickCheck-Property.html#mapSize",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Property.html#v:mapSize\",\"http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html#v:mapSize\"]"
        },
        "index": {
          "description": "Changes the maximum test case size for property",
          "hierarchy": "Test QuickCheck Property",
          "module": "Test.QuickCheck.Property",
          "name": "mapSize",
          "normalized": "(Int-\u003eInt)-\u003ea-\u003eProperty",
          "package": "QuickCheck",
          "partial": "Size",
          "signature": "(Int-\u003eInt)-\u003eprop-\u003eProperty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Property.html#v:mapSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.QuickCheck.Property",
          "name": "mapTotalResult",
          "package": "QuickCheck",
          "signature": "(Result -\u003e Result) -\u003e prop -\u003e Property",
          "source": "src/Test-QuickCheck-Property.html#mapTotalResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test QuickCheck Property",
          "module": "Test.QuickCheck.Property",
          "name": "mapTotalResult",
          "normalized": "(Result-\u003eResult)-\u003ea-\u003eProperty",
          "package": "QuickCheck",
          "partial": "Total Result",
          "signature": "(Result-\u003eResult)-\u003eprop-\u003eProperty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Property.html#v:mapTotalResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDo I/O inside a property. This can obviously lead to unrepeatable\n testcases, so use with care.\n\u003c/p\u003e",
          "module": "Test.QuickCheck.Property",
          "name": "morallyDubiousIOProperty",
          "package": "QuickCheck",
          "signature": "IO prop -\u003e Property",
          "source": "src/Test-QuickCheck-Property.html#morallyDubiousIOProperty",
          "type": "function"
        },
        "index": {
          "description": "Do inside property This can obviously lead to unrepeatable testcases so use with care",
          "hierarchy": "Test QuickCheck Property",
          "module": "Test.QuickCheck.Property",
          "name": "morallyDubiousIOProperty",
          "normalized": "IO a-\u003eProperty",
          "package": "QuickCheck",
          "partial": "Dubious IOProperty",
          "signature": "IO prop-\u003eProperty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Property.html#v:morallyDubiousIOProperty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDisables shrinking for a property altogether.\n\u003c/p\u003e",
          "module": "Test.QuickCheck.Property",
          "name": "noShrinking",
          "package": "QuickCheck",
          "signature": "prop -\u003e Property",
          "source": "src/Test-QuickCheck-Property.html#noShrinking",
          "type": "function"
        },
        "index": {
          "description": "Disables shrinking for property altogether",
          "hierarchy": "Test QuickCheck Property",
          "module": "Test.QuickCheck.Property",
          "name": "noShrinking",
          "normalized": "a-\u003eProperty",
          "package": "QuickCheck",
          "partial": "Shrinking",
          "signature": "prop-\u003eProperty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Property.html#v:noShrinking"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eresult of the test case; Nothing = discard\n\u003c/p\u003e",
          "module": "Test.QuickCheck.Property",
          "name": "ok",
          "package": "QuickCheck",
          "signature": "Maybe Bool",
          "source": "src/Test-QuickCheck-Property.html#Result",
          "type": "function"
        },
        "index": {
          "description": "result of the test case Nothing discard",
          "hierarchy": "Test QuickCheck Property",
          "module": "Test.QuickCheck.Property",
          "name": "ok",
          "package": "QuickCheck",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Property.html#v:ok"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.QuickCheck.Property",
          "name": "onRose",
          "package": "QuickCheck",
          "signature": "(a -\u003e [Rose a] -\u003e Rose a) -\u003e Rose a -\u003e Rose a",
          "source": "src/Test-QuickCheck-Property.html#onRose",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test QuickCheck Property",
          "module": "Test.QuickCheck.Property",
          "name": "onRose",
          "normalized": "(a-\u003e[Rose a]-\u003eRose a)-\u003eRose a-\u003eRose a",
          "package": "QuickCheck",
          "partial": "Rose",
          "signature": "(a-\u003e[Rose a]-\u003eRose a)-\u003eRose a-\u003eRose a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Property.html#v:onRose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eModifies a property so that it only will be tested once.\n\u003c/p\u003e",
          "module": "[\"Test.QuickCheck.Property\",\"Test.QuickCheck\"]",
          "name": "once",
          "package": "QuickCheck",
          "signature": "prop -\u003e Property",
          "source": "src/Test-QuickCheck-Property.html#once",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Property.html#v:once\",\"http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html#v:once\"]"
        },
        "index": {
          "description": "Modifies property so that it only will be tested once",
          "hierarchy": "Test QuickCheck Property",
          "module": "Test.QuickCheck.Property",
          "name": "once",
          "normalized": "a-\u003eProperty",
          "package": "QuickCheck",
          "signature": "prop-\u003eProperty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Property.html#v:once"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrints a message to the terminal as part of the counterexample.\n\u003c/p\u003e",
          "module": "[\"Test.QuickCheck.Property\",\"Test.QuickCheck\"]",
          "name": "printTestCase",
          "package": "QuickCheck",
          "signature": "String -\u003e prop -\u003e Property",
          "source": "src/Test-QuickCheck-Property.html#printTestCase",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Property.html#v:printTestCase\",\"http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html#v:printTestCase\"]"
        },
        "index": {
          "description": "Prints message to the terminal as part of the counterexample",
          "hierarchy": "Test QuickCheck Property",
          "module": "Test.QuickCheck.Property",
          "name": "printTestCase",
          "normalized": "String-\u003ea-\u003eProperty",
          "package": "QuickCheck",
          "partial": "Test Case",
          "signature": "String-\u003eprop-\u003eProperty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Property.html#v:printTestCase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.QuickCheck.Property",
          "name": "property",
          "package": "QuickCheck",
          "signature": "prop -\u003e Property",
          "source": "src/Test-QuickCheck-Property.html#property",
          "type": "method"
        },
        "index": {
          "hierarchy": "Test QuickCheck Property",
          "module": "Test.QuickCheck.Property",
          "name": "property",
          "normalized": "a-\u003eProperty",
          "package": "QuickCheck",
          "signature": "prop-\u003eProperty",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Property.html#v:property"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.QuickCheck.Property",
          "name": "protect",
          "package": "QuickCheck",
          "signature": "(AnException -\u003e a) -\u003e IO a -\u003e IO a",
          "source": "src/Test-QuickCheck-Property.html#protect",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test QuickCheck Property",
          "module": "Test.QuickCheck.Property",
          "name": "protect",
          "normalized": "(AnException-\u003ea)-\u003eIO a-\u003eIO a",
          "package": "QuickCheck",
          "signature": "(AnException-\u003ea)-\u003eIO a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Property.html#v:protect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.QuickCheck.Property",
          "name": "protectResult",
          "package": "QuickCheck",
          "signature": "IO Result -\u003e IO Result",
          "source": "src/Test-QuickCheck-Property.html#protectResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test QuickCheck Property",
          "module": "Test.QuickCheck.Property",
          "name": "protectResult",
          "normalized": "IO Result-\u003eIO Result",
          "package": "QuickCheck",
          "partial": "Result",
          "signature": "IO Result-\u003eIO Result",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Property.html#v:protectResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.QuickCheck.Property",
          "name": "protectResults",
          "package": "QuickCheck",
          "signature": "Rose Result -\u003e Rose Result",
          "source": "src/Test-QuickCheck-Property.html#protectResults",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test QuickCheck Property",
          "module": "Test.QuickCheck.Property",
          "name": "protectResults",
          "normalized": "Rose Result-\u003eRose Result",
          "package": "QuickCheck",
          "partial": "Results",
          "signature": "Rose Result-\u003eRose Result",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Property.html#v:protectResults"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.QuickCheck.Property",
          "name": "protectRose",
          "package": "QuickCheck",
          "signature": "IO (Rose Result) -\u003e IO (Rose Result)",
          "source": "src/Test-QuickCheck-Property.html#protectRose",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test QuickCheck Property",
          "module": "Test.QuickCheck.Property",
          "name": "protectRose",
          "normalized": "IO(Rose Result)-\u003eIO(Rose Result)",
          "package": "QuickCheck",
          "partial": "Rose",
          "signature": "IO(Rose Result)-\u003eIO(Rose Result)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Property.html#v:protectRose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ea message indicating what went wrong\n\u003c/p\u003e",
          "module": "Test.QuickCheck.Property",
          "name": "reason",
          "package": "QuickCheck",
          "signature": "String",
          "source": "src/Test-QuickCheck-Property.html#Result",
          "type": "function"
        },
        "index": {
          "description": "message indicating what went wrong",
          "hierarchy": "Test QuickCheck Property",
          "module": "Test.QuickCheck.Property",
          "name": "reason",
          "package": "QuickCheck",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Property.html#v:reason"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.QuickCheck.Property",
          "name": "reduceRose",
          "package": "QuickCheck",
          "signature": "Rose Result -\u003e IO (Rose Result)",
          "source": "src/Test-QuickCheck-Property.html#reduceRose",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test QuickCheck Property",
          "module": "Test.QuickCheck.Property",
          "name": "reduceRose",
          "normalized": "Rose Result-\u003eIO(Rose Result)",
          "package": "QuickCheck",
          "partial": "Rose",
          "signature": "Rose Result-\u003eIO(Rose Result)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Property.html#v:reduceRose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.QuickCheck.Property",
          "name": "rejected",
          "package": "QuickCheck",
          "signature": "Result",
          "source": "src/Test-QuickCheck-Property.html#rejected",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test QuickCheck Property",
          "module": "Test.QuickCheck.Property",
          "name": "rejected",
          "package": "QuickCheck",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Property.html#v:rejected"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.QuickCheck.Property",
          "name": "result",
          "package": "QuickCheck",
          "signature": "Result",
          "source": "src/Test-QuickCheck-Property.html#result",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test QuickCheck Property",
          "module": "Test.QuickCheck.Property",
          "name": "result",
          "package": "QuickCheck",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Property.html#v:result"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShrinks the argument to property if it fails. Shrinking is done\n automatically for most types. This is only needed when you want to\n override the default behavior.\n\u003c/p\u003e",
          "module": "[\"Test.QuickCheck.Property\",\"Test.QuickCheck\"]",
          "name": "shrinking",
          "package": "QuickCheck",
          "signature": "(a -\u003e [a])-\u003e a-\u003e (a -\u003e prop)-\u003e Property",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Property.html#v:shrinking\",\"http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html#v:shrinking\"]"
        },
        "index": {
          "description": "Shrinks the argument to property if it fails Shrinking is done automatically for most types This is only needed when you want to override the default behavior",
          "hierarchy": "Test QuickCheck Property",
          "module": "Test.QuickCheck.Property",
          "name": "shrinking",
          "normalized": "(a-\u003e[a])-\u003ea-\u003e(a-\u003eb)-\u003eProperty",
          "package": "QuickCheck",
          "signature": "(a-\u003e[a])-\u003ea-\u003e(a-\u003eprop)-\u003eProperty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Property.html#v:shrinking"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe collected values for this test case\n\u003c/p\u003e",
          "module": "Test.QuickCheck.Property",
          "name": "stamp",
          "package": "QuickCheck",
          "signature": "[(String, Int)]",
          "source": "src/Test-QuickCheck-Property.html#Result",
          "type": "function"
        },
        "index": {
          "description": "the collected values for this test case",
          "hierarchy": "Test QuickCheck Property",
          "module": "Test.QuickCheck.Property",
          "name": "stamp",
          "normalized": "[(String,Int)]",
          "package": "QuickCheck",
          "signature": "[(String,Int)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Property.html#v:stamp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.QuickCheck.Property",
          "name": "succeeded",
          "package": "QuickCheck",
          "signature": "Result",
          "source": "src/Test-QuickCheck-Property.html#succeeded",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test QuickCheck Property",
          "module": "Test.QuickCheck.Property",
          "name": "succeeded",
          "package": "QuickCheck",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Property.html#v:succeeded"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.QuickCheck.Property",
          "name": "unProp",
          "package": "QuickCheck",
          "signature": "Rose Result",
          "source": "src/Test-QuickCheck-Property.html#Prop",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test QuickCheck Property",
          "module": "Test.QuickCheck.Property",
          "name": "unProp",
          "package": "QuickCheck",
          "partial": "Prop",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Property.html#v:unProp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrints out the generated testcase every time the property is tested,\n like \u003ccode\u003everboseCheck\u003c/code\u003e from QuickCheck 1.\n Only variables quantified over \u003cem\u003einside\u003c/em\u003e the \u003ccode\u003e\u003ca\u003everbose\u003c/a\u003e\u003c/code\u003e are printed.\n\u003c/p\u003e",
          "module": "[\"Test.QuickCheck.Property\",\"Test.QuickCheck\"]",
          "name": "verbose",
          "package": "QuickCheck",
          "signature": "prop -\u003e Property",
          "source": "src/Test-QuickCheck-Property.html#verbose",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Property.html#v:verbose\",\"http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html#v:verbose\"]"
        },
        "index": {
          "description": "Prints out the generated testcase every time the property is tested like verboseCheck from QuickCheck Only variables quantified over inside the verbose are printed",
          "hierarchy": "Test QuickCheck Property",
          "module": "Test.QuickCheck.Property",
          "name": "verbose",
          "normalized": "a-\u003eProperty",
          "package": "QuickCheck",
          "signature": "prop-\u003eProperty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Property.html#v:verbose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePerforms an \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e action after the last failure of a property.\n\u003c/p\u003e",
          "module": "[\"Test.QuickCheck.Property\",\"Test.QuickCheck\"]",
          "name": "whenFail",
          "package": "QuickCheck",
          "signature": "IO () -\u003e prop -\u003e Property",
          "source": "src/Test-QuickCheck-Property.html#whenFail",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Property.html#v:whenFail\",\"http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html#v:whenFail\"]"
        },
        "index": {
          "description": "Performs an IO action after the last failure of property",
          "hierarchy": "Test QuickCheck Property",
          "module": "Test.QuickCheck.Property",
          "name": "whenFail",
          "normalized": "IO()-\u003ea-\u003eProperty",
          "package": "QuickCheck",
          "partial": "Fail",
          "signature": "IO()-\u003eprop-\u003eProperty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Property.html#v:whenFail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePerforms an \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e action every time a property fails. Thus,\n if shrinking is done, this can be used to keep track of the\n failures along the way.\n\u003c/p\u003e",
          "module": "[\"Test.QuickCheck.Property\",\"Test.QuickCheck\"]",
          "name": "whenFail'",
          "package": "QuickCheck",
          "signature": "IO () -\u003e prop -\u003e Property",
          "source": "src/Test-QuickCheck-Property.html#whenFail%27",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Property.html#v:whenFail-39-\",\"http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html#v:whenFail-39-\"]"
        },
        "index": {
          "description": "Performs an IO action every time property fails Thus if shrinking is done this can be used to keep track of the failures along the way",
          "hierarchy": "Test QuickCheck Property",
          "module": "Test.QuickCheck.Property",
          "name": "whenFail'",
          "normalized": "IO()-\u003ea-\u003eProperty",
          "package": "QuickCheck",
          "partial": "Fail'",
          "signature": "IO()-\u003eprop-\u003eProperty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Property.html#v:whenFail-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConsiders a property failed if it does not complete within\n the given number of microseconds.\n\u003c/p\u003e",
          "module": "[\"Test.QuickCheck.Property\",\"Test.QuickCheck\"]",
          "name": "within",
          "package": "QuickCheck",
          "signature": "Int -\u003e prop -\u003e Property",
          "source": "src/Test-QuickCheck-Property.html#within",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Property.html#v:within\",\"http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html#v:within\"]"
        },
        "index": {
          "description": "Considers property failed if it does not complete within the given number of microseconds",
          "hierarchy": "Test QuickCheck Property",
          "module": "Test.QuickCheck.Property",
          "name": "within",
          "normalized": "Int-\u003ea-\u003eProperty",
          "package": "QuickCheck",
          "signature": "Int-\u003eprop-\u003eProperty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Property.html#v:within"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.QuickCheck.State",
          "name": "State",
          "package": "QuickCheck",
          "source": "src/Test-QuickCheck-State.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Test QuickCheck State",
          "module": "Test.QuickCheck.State",
          "name": "State",
          "package": "QuickCheck",
          "partial": "State",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-State.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eState represents QuickCheck's internal state while testing a property.\n The state is made visible to callback functions.\n\u003c/p\u003e",
          "module": "Test.QuickCheck.State",
          "name": "State",
          "package": "QuickCheck",
          "source": "src/Test-QuickCheck-State.html#State",
          "type": "data"
        },
        "index": {
          "description": "State represents QuickCheck internal state while testing property The state is made visible to callback functions",
          "hierarchy": "Test QuickCheck State",
          "module": "Test.QuickCheck.State",
          "name": "State",
          "package": "QuickCheck",
          "partial": "State",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-State.html#t:State"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.QuickCheck.State",
          "name": "MkState",
          "package": "QuickCheck",
          "signature": "MkState",
          "source": "src/Test-QuickCheck-State.html#State",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test QuickCheck State",
          "module": "Test.QuickCheck.State",
          "name": "MkState",
          "package": "QuickCheck",
          "partial": "Mk State",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-State.html#v:MkState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eall labels that have been collected so far\n\u003c/p\u003e",
          "module": "Test.QuickCheck.State",
          "name": "collected",
          "package": "QuickCheck",
          "signature": "[[(String, Int)]]",
          "source": "src/Test-QuickCheck-State.html#State",
          "type": "function"
        },
        "index": {
          "description": "all labels that have been collected so far",
          "hierarchy": "Test QuickCheck State",
          "module": "Test.QuickCheck.State",
          "name": "collected",
          "normalized": "[[(String,Int)]]",
          "package": "QuickCheck",
          "signature": "[[(String,Int)]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-State.html#v:collected"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ehow to compute the size of test cases from\n \u003ca name=\"tests and \"/\u003ediscarded tests\n\u003c/p\u003e",
          "module": "Test.QuickCheck.State",
          "name": "computeSize",
          "package": "QuickCheck",
          "signature": "Int -\u003e Int -\u003e Int",
          "source": "src/Test-QuickCheck-State.html#State",
          "type": "function"
        },
        "index": {
          "description": "how to compute the size of test cases from discarded tests",
          "hierarchy": "Test QuickCheck State",
          "module": "Test.QuickCheck.State",
          "name": "computeSize",
          "normalized": "Int-\u003eInt-\u003eInt",
          "package": "QuickCheck",
          "partial": "Size",
          "signature": "Int-\u003eInt-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-State.html#v:computeSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eindicates if the property is expected to fail\n\u003c/p\u003e",
          "module": "Test.QuickCheck.State",
          "name": "expectedFailure",
          "package": "QuickCheck",
          "signature": "Bool",
          "source": "src/Test-QuickCheck-State.html#State",
          "type": "function"
        },
        "index": {
          "description": "indicates if the property is expected to fail",
          "hierarchy": "Test QuickCheck State",
          "module": "Test.QuickCheck.State",
          "name": "expectedFailure",
          "package": "QuickCheck",
          "partial": "Failure",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-State.html#v:expectedFailure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003emaximum number of tests that can be discarded\n\u003c/p\u003e",
          "module": "Test.QuickCheck.State",
          "name": "maxDiscardedTests",
          "package": "QuickCheck",
          "signature": "Int",
          "source": "src/Test-QuickCheck-State.html#State",
          "type": "function"
        },
        "index": {
          "description": "maximum number of tests that can be discarded",
          "hierarchy": "Test QuickCheck State",
          "module": "Test.QuickCheck.State",
          "name": "maxDiscardedTests",
          "package": "QuickCheck",
          "partial": "Discarded Tests",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-State.html#v:maxDiscardedTests"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003emaximum number of successful tests needed\n\u003c/p\u003e",
          "module": "Test.QuickCheck.State",
          "name": "maxSuccessTests",
          "package": "QuickCheck",
          "signature": "Int",
          "source": "src/Test-QuickCheck-State.html#State",
          "type": "function"
        },
        "index": {
          "description": "maximum number of successful tests needed",
          "hierarchy": "Test QuickCheck State",
          "module": "Test.QuickCheck.State",
          "name": "maxSuccessTests",
          "package": "QuickCheck",
          "partial": "Success Tests",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-State.html#v:maxSuccessTests"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe current number of discarded tests\n\u003c/p\u003e",
          "module": "Test.QuickCheck.State",
          "name": "numDiscardedTests",
          "package": "QuickCheck",
          "signature": "Int",
          "source": "src/Test-QuickCheck-State.html#State",
          "type": "function"
        },
        "index": {
          "description": "the current number of discarded tests",
          "hierarchy": "Test QuickCheck State",
          "module": "Test.QuickCheck.State",
          "name": "numDiscardedTests",
          "package": "QuickCheck",
          "partial": "Discarded Tests",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-State.html#v:numDiscardedTests"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe number of discarded tests since the last successful test\n\u003c/p\u003e",
          "module": "Test.QuickCheck.State",
          "name": "numRecentlyDiscardedTests",
          "package": "QuickCheck",
          "signature": "Int",
          "source": "src/Test-QuickCheck-State.html#State",
          "type": "function"
        },
        "index": {
          "description": "the number of discarded tests since the last successful test",
          "hierarchy": "Test QuickCheck State",
          "module": "Test.QuickCheck.State",
          "name": "numRecentlyDiscardedTests",
          "package": "QuickCheck",
          "partial": "Recently Discarded Tests",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-State.html#v:numRecentlyDiscardedTests"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003enumber of successful shrinking steps so far\n\u003c/p\u003e",
          "module": "Test.QuickCheck.State",
          "name": "numSuccessShrinks",
          "package": "QuickCheck",
          "signature": "Int",
          "source": "src/Test-QuickCheck-State.html#State",
          "type": "function"
        },
        "index": {
          "description": "number of successful shrinking steps so far",
          "hierarchy": "Test QuickCheck State",
          "module": "Test.QuickCheck.State",
          "name": "numSuccessShrinks",
          "package": "QuickCheck",
          "partial": "Success Shrinks",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-State.html#v:numSuccessShrinks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe current number of tests that have succeeded\n\u003c/p\u003e",
          "module": "Test.QuickCheck.State",
          "name": "numSuccessTests",
          "package": "QuickCheck",
          "signature": "Int",
          "source": "src/Test-QuickCheck-State.html#State",
          "type": "function"
        },
        "index": {
          "description": "the current number of tests that have succeeded",
          "hierarchy": "Test QuickCheck State",
          "module": "Test.QuickCheck.State",
          "name": "numSuccessTests",
          "package": "QuickCheck",
          "partial": "Success Tests",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-State.html#v:numSuccessTests"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003etotal number of failed shrinking steps\n\u003c/p\u003e",
          "module": "Test.QuickCheck.State",
          "name": "numTotTryShrinks",
          "package": "QuickCheck",
          "signature": "Int",
          "source": "src/Test-QuickCheck-State.html#State",
          "type": "function"
        },
        "index": {
          "description": "total number of failed shrinking steps",
          "hierarchy": "Test QuickCheck State",
          "module": "Test.QuickCheck.State",
          "name": "numTotTryShrinks",
          "package": "QuickCheck",
          "partial": "Tot Try Shrinks",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-State.html#v:numTotTryShrinks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003enumber of failed shrinking steps since the last successful shrink\n\u003c/p\u003e",
          "module": "Test.QuickCheck.State",
          "name": "numTryShrinks",
          "package": "QuickCheck",
          "signature": "Int",
          "source": "src/Test-QuickCheck-State.html#State",
          "type": "function"
        },
        "index": {
          "description": "number of failed shrinking steps since the last successful shrink",
          "hierarchy": "Test QuickCheck State",
          "module": "Test.QuickCheck.State",
          "name": "numTryShrinks",
          "package": "QuickCheck",
          "partial": "Try Shrinks",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-State.html#v:numTryShrinks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe current random seed\n\u003c/p\u003e",
          "module": "Test.QuickCheck.State",
          "name": "randomSeed",
          "package": "QuickCheck",
          "signature": "StdGen",
          "source": "src/Test-QuickCheck-State.html#State",
          "type": "function"
        },
        "index": {
          "description": "the current random seed",
          "hierarchy": "Test QuickCheck State",
          "module": "Test.QuickCheck.State",
          "name": "randomSeed",
          "package": "QuickCheck",
          "partial": "Seed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-State.html#v:randomSeed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe current terminal\n\u003c/p\u003e",
          "module": "Test.QuickCheck.State",
          "name": "terminal",
          "package": "QuickCheck",
          "signature": "Terminal",
          "source": "src/Test-QuickCheck-State.html#State",
          "type": "function"
        },
        "index": {
          "description": "the current terminal",
          "hierarchy": "Test QuickCheck State",
          "module": "Test.QuickCheck.State",
          "name": "terminal",
          "package": "QuickCheck",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-State.html#v:terminal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.QuickCheck.Test",
          "name": "Test",
          "package": "QuickCheck",
          "source": "src/Test-QuickCheck-Test.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Test QuickCheck Test",
          "module": "Test.QuickCheck.Test",
          "name": "Test",
          "package": "QuickCheck",
          "partial": "Test",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Test.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eArgs specifies arguments to the QuickCheck driver\n\u003c/p\u003e",
          "module": "Test.QuickCheck.Test",
          "name": "Args",
          "package": "QuickCheck",
          "source": "src/Test-QuickCheck-Test.html#Args",
          "type": "data"
        },
        "index": {
          "description": "Args specifies arguments to the QuickCheck driver",
          "hierarchy": "Test QuickCheck Test",
          "module": "Test.QuickCheck.Test",
          "name": "Args",
          "package": "QuickCheck",
          "partial": "Args",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Test.html#t:Args"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eResult represents the test result\n\u003c/p\u003e",
          "module": "Test.QuickCheck.Test",
          "name": "Result",
          "package": "QuickCheck",
          "source": "src/Test-QuickCheck-Test.html#Result",
          "type": "data"
        },
        "index": {
          "description": "Result represents the test result",
          "hierarchy": "Test QuickCheck Test",
          "module": "Test.QuickCheck.Test",
          "name": "Result",
          "package": "QuickCheck",
          "partial": "Result",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Test.html#t:Result"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.QuickCheck.Test\",\"Test.QuickCheck\"]",
          "name": "Args",
          "package": "QuickCheck",
          "signature": "Args",
          "source": "src/Test-QuickCheck-Test.html#Args",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Test.html#v:Args\",\"http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html#v:Args\"]"
        },
        "index": {
          "hierarchy": "Test QuickCheck Test",
          "module": "Test.QuickCheck.Test",
          "name": "Args",
          "package": "QuickCheck",
          "partial": "Args",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Test.html#v:Args"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.QuickCheck.Test\",\"Test.QuickCheck\"]",
          "name": "Failure",
          "package": "QuickCheck",
          "signature": "Failure",
          "source": "src/Test-QuickCheck-Test.html#Result",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Test.html#v:Failure\",\"http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html#v:Failure\"]"
        },
        "index": {
          "hierarchy": "Test QuickCheck Test",
          "module": "Test.QuickCheck.Test",
          "name": "Failure",
          "package": "QuickCheck",
          "partial": "Failure",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Test.html#v:Failure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.QuickCheck.Test\",\"Test.QuickCheck\"]",
          "name": "GaveUp",
          "package": "QuickCheck",
          "signature": "GaveUp",
          "source": "src/Test-QuickCheck-Test.html#Result",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Test.html#v:GaveUp\",\"http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html#v:GaveUp\"]"
        },
        "index": {
          "hierarchy": "Test QuickCheck Test",
          "module": "Test.QuickCheck.Test",
          "name": "GaveUp",
          "package": "QuickCheck",
          "partial": "Gave Up",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Test.html#v:GaveUp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.QuickCheck.Test\",\"Test.QuickCheck\"]",
          "name": "NoExpectedFailure",
          "package": "QuickCheck",
          "signature": "NoExpectedFailure",
          "source": "src/Test-QuickCheck-Test.html#Result",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Test.html#v:NoExpectedFailure\",\"http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html#v:NoExpectedFailure\"]"
        },
        "index": {
          "hierarchy": "Test QuickCheck Test",
          "module": "Test.QuickCheck.Test",
          "name": "NoExpectedFailure",
          "package": "QuickCheck",
          "partial": "No Expected Failure",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Test.html#v:NoExpectedFailure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.QuickCheck.Test\",\"Test.QuickCheck\"]",
          "name": "Success",
          "package": "QuickCheck",
          "signature": "Success",
          "source": "src/Test-QuickCheck-Test.html#Result",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Test.html#v:Success\",\"http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html#v:Success\"]"
        },
        "index": {
          "hierarchy": "Test QuickCheck Test",
          "module": "Test.QuickCheck.Test",
          "name": "Success",
          "package": "QuickCheck",
          "partial": "Success",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Test.html#v:Success"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.QuickCheck.Test",
          "name": "callbackPostFinalFailure",
          "package": "QuickCheck",
          "signature": "State -\u003e Result -\u003e IO ()",
          "source": "src/Test-QuickCheck-Test.html#callbackPostFinalFailure",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test QuickCheck Test",
          "module": "Test.QuickCheck.Test",
          "name": "callbackPostFinalFailure",
          "normalized": "State-\u003eResult-\u003eIO()",
          "package": "QuickCheck",
          "partial": "Post Final Failure",
          "signature": "State-\u003eResult-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Test.html#v:callbackPostFinalFailure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.QuickCheck.Test",
          "name": "callbackPostTest",
          "package": "QuickCheck",
          "signature": "State -\u003e Result -\u003e IO ()",
          "source": "src/Test-QuickCheck-Test.html#callbackPostTest",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test QuickCheck Test",
          "module": "Test.QuickCheck.Test",
          "name": "callbackPostTest",
          "normalized": "State-\u003eResult-\u003eIO()",
          "package": "QuickCheck",
          "partial": "Post Test",
          "signature": "State-\u003eResult-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Test.html#v:callbackPostTest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ewhether to print anything\n\u003c/p\u003e",
          "module": "[\"Test.QuickCheck.Test\",\"Test.QuickCheck\"]",
          "name": "chatty",
          "package": "QuickCheck",
          "signature": "Bool",
          "source": "src/Test-QuickCheck-Test.html#Args",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Test.html#v:chatty\",\"http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html#v:chatty\"]"
        },
        "index": {
          "description": "whether to print anything",
          "hierarchy": "Test QuickCheck Test",
          "module": "Test.QuickCheck.Test",
          "name": "chatty",
          "package": "QuickCheck",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Test.html#v:chatty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.QuickCheck.Test",
          "name": "doneTesting",
          "package": "QuickCheck",
          "signature": "State -\u003e (StdGen -\u003e Int -\u003e Prop) -\u003e IO Result",
          "source": "src/Test-QuickCheck-Test.html#doneTesting",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test QuickCheck Test",
          "module": "Test.QuickCheck.Test",
          "name": "doneTesting",
          "normalized": "State-\u003e(StdGen-\u003eInt-\u003eProp)-\u003eIO Result",
          "package": "QuickCheck",
          "partial": "Testing",
          "signature": "State-\u003e(StdGen-\u003eInt-\u003eProp)-\u003eIO Result",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Test.html#v:doneTesting"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.QuickCheck.Test",
          "name": "foundFailure",
          "package": "QuickCheck",
          "signature": "State -\u003e Result -\u003e [Rose Result] -\u003e IO Int",
          "source": "src/Test-QuickCheck-Test.html#foundFailure",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test QuickCheck Test",
          "module": "Test.QuickCheck.Test",
          "name": "foundFailure",
          "normalized": "State-\u003eResult-\u003e[Rose Result]-\u003eIO Int",
          "package": "QuickCheck",
          "partial": "Failure",
          "signature": "State-\u003eResult-\u003e[Rose Result]-\u003eIO Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Test.html#v:foundFailure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.QuickCheck.Test",
          "name": "giveUp",
          "package": "QuickCheck",
          "signature": "State -\u003e (StdGen -\u003e Int -\u003e Prop) -\u003e IO Result",
          "source": "src/Test-QuickCheck-Test.html#giveUp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test QuickCheck Test",
          "module": "Test.QuickCheck.Test",
          "name": "giveUp",
          "normalized": "State-\u003e(StdGen-\u003eInt-\u003eProp)-\u003eIO Result",
          "package": "QuickCheck",
          "partial": "Up",
          "signature": "State-\u003e(StdGen-\u003eInt-\u003eProp)-\u003eIO Result",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Test.html#v:giveUp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003edid the user press ctrl-C?\n\u003c/p\u003e",
          "module": "[\"Test.QuickCheck.Test\",\"Test.QuickCheck\"]",
          "name": "interrupted",
          "package": "QuickCheck",
          "signature": "Bool",
          "source": "src/Test-QuickCheck-Test.html#Result",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Test.html#v:interrupted\",\"http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html#v:interrupted\"]"
        },
        "index": {
          "description": "did the user press ctrl-C",
          "hierarchy": "Test QuickCheck Test",
          "module": "Test.QuickCheck.Test",
          "name": "interrupted",
          "package": "QuickCheck",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Test.html#v:interrupted"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eisSuccess checks if the test run result was a success\n\u003c/p\u003e",
          "module": "Test.QuickCheck.Test",
          "name": "isSuccess",
          "package": "QuickCheck",
          "signature": "Result -\u003e Bool",
          "source": "src/Test-QuickCheck-Test.html#isSuccess",
          "type": "function"
        },
        "index": {
          "description": "isSuccess checks if the test run result was success",
          "hierarchy": "Test QuickCheck Test",
          "module": "Test.QuickCheck.Test",
          "name": "isSuccess",
          "normalized": "Result-\u003eBool",
          "package": "QuickCheck",
          "partial": "Success",
          "signature": "Result-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Test.html#v:isSuccess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003elabels and frequencies found during all successful tests\n\u003c/p\u003e\u003cp\u003elabels and frequencies found during all successful tests\n\u003c/p\u003e\u003cp\u003elabels and frequencies found during all tests\n\u003c/p\u003e\u003cp\u003elabels and frequencies found during all tests\n\u003c/p\u003e",
          "module": "[\"Test.QuickCheck.Test\",\"Test.QuickCheck\"]",
          "name": "labels",
          "package": "QuickCheck",
          "signature": "[(String, Int)]",
          "source": "src/Test-QuickCheck-Test.html#Result",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Test.html#v:labels\",\"http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html#v:labels\"]"
        },
        "index": {
          "description": "labels and frequencies found during all successful tests labels and frequencies found during all successful tests labels and frequencies found during all tests labels and frequencies found during all tests",
          "hierarchy": "Test QuickCheck Test",
          "module": "Test.QuickCheck.Test",
          "name": "labels",
          "normalized": "[(String,Int)]",
          "package": "QuickCheck",
          "signature": "[(String,Int)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Test.html#v:labels"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.QuickCheck.Test",
          "name": "localMin",
          "package": "QuickCheck",
          "signature": "State -\u003e Result -\u003e [Rose Result] -\u003e IO Int",
          "source": "src/Test-QuickCheck-Test.html#localMin",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test QuickCheck Test",
          "module": "Test.QuickCheck.Test",
          "name": "localMin",
          "normalized": "State-\u003eResult-\u003e[Rose Result]-\u003eIO Int",
          "package": "QuickCheck",
          "partial": "Min",
          "signature": "State-\u003eResult-\u003e[Rose Result]-\u003eIO Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Test.html#v:localMin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.QuickCheck.Test",
          "name": "localMin'",
          "package": "QuickCheck",
          "signature": "State -\u003e Result -\u003e [Rose Result] -\u003e IO Int",
          "source": "src/Test-QuickCheck-Test.html#localMin%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test QuickCheck Test",
          "module": "Test.QuickCheck.Test",
          "name": "localMin'",
          "normalized": "State-\u003eResult-\u003e[Rose Result]-\u003eIO Int",
          "package": "QuickCheck",
          "partial": "Min'",
          "signature": "State-\u003eResult-\u003e[Rose Result]-\u003eIO Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Test.html#v:localMin-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.QuickCheck.Test",
          "name": "localMinFound",
          "package": "QuickCheck",
          "signature": "State -\u003e Result -\u003e IO Int",
          "source": "src/Test-QuickCheck-Test.html#localMinFound",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test QuickCheck Test",
          "module": "Test.QuickCheck.Test",
          "name": "localMinFound",
          "normalized": "State-\u003eResult-\u003eIO Int",
          "package": "QuickCheck",
          "partial": "Min Found",
          "signature": "State-\u003eResult-\u003eIO Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Test.html#v:localMinFound"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003emaximum number of discarded tests per successful test before giving up\n\u003c/p\u003e",
          "module": "[\"Test.QuickCheck.Test\",\"Test.QuickCheck\"]",
          "name": "maxDiscardRatio",
          "package": "QuickCheck",
          "signature": "Int",
          "source": "src/Test-QuickCheck-Test.html#Args",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Test.html#v:maxDiscardRatio\",\"http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html#v:maxDiscardRatio\"]"
        },
        "index": {
          "description": "maximum number of discarded tests per successful test before giving up",
          "hierarchy": "Test QuickCheck Test",
          "module": "Test.QuickCheck.Test",
          "name": "maxDiscardRatio",
          "package": "QuickCheck",
          "partial": "Discard Ratio",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Test.html#v:maxDiscardRatio"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esize to use for the biggest test cases\n\u003c/p\u003e",
          "module": "[\"Test.QuickCheck.Test\",\"Test.QuickCheck\"]",
          "name": "maxSize",
          "package": "QuickCheck",
          "signature": "Int",
          "source": "src/Test-QuickCheck-Test.html#Args",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Test.html#v:maxSize\",\"http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html#v:maxSize\"]"
        },
        "index": {
          "description": "size to use for the biggest test cases",
          "hierarchy": "Test QuickCheck Test",
          "module": "Test.QuickCheck.Test",
          "name": "maxSize",
          "package": "QuickCheck",
          "partial": "Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Test.html#v:maxSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003emaximum number of successful tests before succeeding\n\u003c/p\u003e",
          "module": "[\"Test.QuickCheck.Test\",\"Test.QuickCheck\"]",
          "name": "maxSuccess",
          "package": "QuickCheck",
          "signature": "Int",
          "source": "src/Test-QuickCheck-Test.html#Args",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Test.html#v:maxSuccess\",\"http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html#v:maxSuccess\"]"
        },
        "index": {
          "description": "maximum number of successful tests before succeeding",
          "hierarchy": "Test QuickCheck Test",
          "module": "Test.QuickCheck.Test",
          "name": "maxSuccess",
          "package": "QuickCheck",
          "partial": "Success",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Test.html#v:maxSuccess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003enumber of successful shrinking steps performed\n\u003c/p\u003e",
          "module": "[\"Test.QuickCheck.Test\",\"Test.QuickCheck\"]",
          "name": "numShrinks",
          "package": "QuickCheck",
          "signature": "Int",
          "source": "src/Test-QuickCheck-Test.html#Result",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Test.html#v:numShrinks\",\"http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html#v:numShrinks\"]"
        },
        "index": {
          "description": "number of successful shrinking steps performed",
          "hierarchy": "Test QuickCheck Test",
          "module": "Test.QuickCheck.Test",
          "name": "numShrinks",
          "package": "QuickCheck",
          "partial": "Shrinks",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Test.html#v:numShrinks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003enumber of tests performed\n\u003c/p\u003e\u003cp\u003enumber of tests performed\n\u003c/p\u003e\u003cp\u003enumber of successful tests performed\n\u003c/p\u003e\u003cp\u003enumber of successful tests performed\n\u003c/p\u003e",
          "module": "[\"Test.QuickCheck.Test\",\"Test.QuickCheck\"]",
          "name": "numTests",
          "package": "QuickCheck",
          "signature": "Int",
          "source": "src/Test-QuickCheck-Test.html#Result",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Test.html#v:numTests\",\"http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html#v:numTests\"]"
        },
        "index": {
          "description": "number of tests performed number of tests performed number of successful tests performed number of successful tests performed",
          "hierarchy": "Test QuickCheck Test",
          "module": "Test.QuickCheck.Test",
          "name": "numTests",
          "package": "QuickCheck",
          "partial": "Tests",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Test.html#v:numTests"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eprinted output\n\u003c/p\u003e\u003cp\u003eprinted output\n\u003c/p\u003e\u003cp\u003eprinted output\n\u003c/p\u003e\u003cp\u003eprinted output\n\u003c/p\u003e",
          "module": "[\"Test.QuickCheck.Test\",\"Test.QuickCheck\"]",
          "name": "output",
          "package": "QuickCheck",
          "signature": "String",
          "source": "src/Test-QuickCheck-Test.html#Result",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Test.html#v:output\",\"http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html#v:output\"]"
        },
        "index": {
          "description": "printed output printed output printed output printed output",
          "hierarchy": "Test QuickCheck Test",
          "module": "Test.QuickCheck.Test",
          "name": "output",
          "package": "QuickCheck",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Test.html#v:output"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTests a property and prints the results to \u003ccode\u003estdout\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Test.QuickCheck.Test\",\"Test.QuickCheck\"]",
          "name": "quickCheck",
          "package": "QuickCheck",
          "signature": "prop -\u003e IO ()",
          "source": "src/Test-QuickCheck-Test.html#quickCheck",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Test.html#v:quickCheck\",\"http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html#v:quickCheck\"]"
        },
        "index": {
          "description": "Tests property and prints the results to stdout",
          "hierarchy": "Test QuickCheck Test",
          "module": "Test.QuickCheck.Test",
          "name": "quickCheck",
          "normalized": "a-\u003eIO()",
          "package": "QuickCheck",
          "partial": "Check",
          "signature": "prop-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Test.html#v:quickCheck"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTests a property, produces a test result, and prints the results to \u003ccode\u003estdout\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Test.QuickCheck.Test\",\"Test.QuickCheck\"]",
          "name": "quickCheckResult",
          "package": "QuickCheck",
          "signature": "prop -\u003e IO Result",
          "source": "src/Test-QuickCheck-Test.html#quickCheckResult",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Test.html#v:quickCheckResult\",\"http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html#v:quickCheckResult\"]"
        },
        "index": {
          "description": "Tests property produces test result and prints the results to stdout",
          "hierarchy": "Test QuickCheck Test",
          "module": "Test.QuickCheck.Test",
          "name": "quickCheckResult",
          "normalized": "a-\u003eIO Result",
          "package": "QuickCheck",
          "partial": "Check Result",
          "signature": "prop-\u003eIO Result",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Test.html#v:quickCheckResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTests a property, using test arguments, and prints the results to \u003ccode\u003estdout\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Test.QuickCheck.Test\",\"Test.QuickCheck\"]",
          "name": "quickCheckWith",
          "package": "QuickCheck",
          "signature": "Args -\u003e prop -\u003e IO ()",
          "source": "src/Test-QuickCheck-Test.html#quickCheckWith",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Test.html#v:quickCheckWith\",\"http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html#v:quickCheckWith\"]"
        },
        "index": {
          "description": "Tests property using test arguments and prints the results to stdout",
          "hierarchy": "Test QuickCheck Test",
          "module": "Test.QuickCheck.Test",
          "name": "quickCheckWith",
          "normalized": "Args-\u003ea-\u003eIO()",
          "package": "QuickCheck",
          "partial": "Check With",
          "signature": "Args-\u003eprop-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Test.html#v:quickCheckWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTests a property, using test arguments, produces a test result, and prints the results to \u003ccode\u003estdout\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Test.QuickCheck.Test\",\"Test.QuickCheck\"]",
          "name": "quickCheckWithResult",
          "package": "QuickCheck",
          "signature": "Args -\u003e prop -\u003e IO Result",
          "source": "src/Test-QuickCheck-Test.html#quickCheckWithResult",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Test.html#v:quickCheckWithResult\",\"http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html#v:quickCheckWithResult\"]"
        },
        "index": {
          "description": "Tests property using test arguments produces test result and prints the results to stdout",
          "hierarchy": "Test QuickCheck Test",
          "module": "Test.QuickCheck.Test",
          "name": "quickCheckWithResult",
          "normalized": "Args-\u003ea-\u003eIO Result",
          "package": "QuickCheck",
          "partial": "Check With Result",
          "signature": "Args-\u003eprop-\u003eIO Result",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Test.html#v:quickCheckWithResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ewhat was the reason\n\u003c/p\u003e",
          "module": "[\"Test.QuickCheck.Test\",\"Test.QuickCheck\"]",
          "name": "reason",
          "package": "QuickCheck",
          "signature": "String",
          "source": "src/Test-QuickCheck-Test.html#Result",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Test.html#v:reason\",\"http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html#v:reason\"]"
        },
        "index": {
          "description": "what was the reason",
          "hierarchy": "Test QuickCheck Test",
          "module": "Test.QuickCheck.Test",
          "name": "reason",
          "package": "QuickCheck",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Test.html#v:reason"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eshould we replay a previous test?\n\u003c/p\u003e",
          "module": "[\"Test.QuickCheck.Test\",\"Test.QuickCheck\"]",
          "name": "replay",
          "package": "QuickCheck",
          "signature": "Maybe (StdGen, Int)",
          "source": "src/Test-QuickCheck-Test.html#Args",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Test.html#v:replay\",\"http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html#v:replay\"]"
        },
        "index": {
          "description": "should we replay previous test",
          "hierarchy": "Test QuickCheck Test",
          "module": "Test.QuickCheck.Test",
          "name": "replay",
          "normalized": "Maybe(StdGen,Int)",
          "package": "QuickCheck",
          "signature": "Maybe(StdGen,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Test.html#v:replay"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.QuickCheck.Test",
          "name": "runATest",
          "package": "QuickCheck",
          "signature": "State -\u003e (StdGen -\u003e Int -\u003e Prop) -\u003e IO Result",
          "source": "src/Test-QuickCheck-Test.html#runATest",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test QuickCheck Test",
          "module": "Test.QuickCheck.Test",
          "name": "runATest",
          "normalized": "State-\u003e(StdGen-\u003eInt-\u003eProp)-\u003eIO Result",
          "package": "QuickCheck",
          "partial": "ATest",
          "signature": "State-\u003e(StdGen-\u003eInt-\u003eProp)-\u003eIO Result",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Test.html#v:runATest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.QuickCheck.Test",
          "name": "safely",
          "package": "QuickCheck",
          "signature": "State -\u003e IO () -\u003e IO ()",
          "source": "src/Test-QuickCheck-Test.html#safely",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test QuickCheck Test",
          "module": "Test.QuickCheck.Test",
          "name": "safely",
          "normalized": "State-\u003eIO()-\u003eIO()",
          "package": "QuickCheck",
          "signature": "State-\u003eIO()-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Test.html#v:safely"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003estdArgs are the default test arguments used\n\u003c/p\u003e",
          "module": "[\"Test.QuickCheck.Test\",\"Test.QuickCheck\"]",
          "name": "stdArgs",
          "package": "QuickCheck",
          "signature": "Args",
          "source": "src/Test-QuickCheck-Test.html#stdArgs",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Test.html#v:stdArgs\",\"http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html#v:stdArgs\"]"
        },
        "index": {
          "description": "stdArgs are the default test arguments used",
          "hierarchy": "Test QuickCheck Test",
          "module": "Test.QuickCheck.Test",
          "name": "stdArgs",
          "package": "QuickCheck",
          "partial": "Args",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Test.html#v:stdArgs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.QuickCheck.Test",
          "name": "success",
          "package": "QuickCheck",
          "signature": "State -\u003e IO ()",
          "source": "src/Test-QuickCheck-Test.html#success",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test QuickCheck Test",
          "module": "Test.QuickCheck.Test",
          "name": "success",
          "normalized": "State-\u003eIO()",
          "package": "QuickCheck",
          "signature": "State-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Test.html#v:success"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.QuickCheck.Test",
          "name": "summary",
          "package": "QuickCheck",
          "signature": "State -\u003e [(String, Int)]",
          "source": "src/Test-QuickCheck-Test.html#summary",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test QuickCheck Test",
          "module": "Test.QuickCheck.Test",
          "name": "summary",
          "normalized": "State-\u003e[(String,Int)]",
          "package": "QuickCheck",
          "signature": "State-\u003e[(String,Int)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Test.html#v:summary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.QuickCheck.Test",
          "name": "test",
          "package": "QuickCheck",
          "signature": "State -\u003e (StdGen -\u003e Int -\u003e Prop) -\u003e IO Result",
          "source": "src/Test-QuickCheck-Test.html#test",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test QuickCheck Test",
          "module": "Test.QuickCheck.Test",
          "name": "test",
          "normalized": "State-\u003e(StdGen-\u003eInt-\u003eProp)-\u003eIO Result",
          "package": "QuickCheck",
          "signature": "State-\u003e(StdGen-\u003eInt-\u003eProp)-\u003eIO Result",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Test.html#v:test"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ewhat seed was used\n\u003c/p\u003e",
          "module": "[\"Test.QuickCheck.Test\",\"Test.QuickCheck\"]",
          "name": "usedSeed",
          "package": "QuickCheck",
          "signature": "StdGen",
          "source": "src/Test-QuickCheck-Test.html#Result",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Test.html#v:usedSeed\",\"http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html#v:usedSeed\"]"
        },
        "index": {
          "description": "what seed was used",
          "hierarchy": "Test QuickCheck Test",
          "module": "Test.QuickCheck.Test",
          "name": "usedSeed",
          "package": "QuickCheck",
          "partial": "Seed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Test.html#v:usedSeed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ewhat was the test size\n\u003c/p\u003e",
          "module": "[\"Test.QuickCheck.Test\",\"Test.QuickCheck\"]",
          "name": "usedSize",
          "package": "QuickCheck",
          "signature": "Int",
          "source": "src/Test-QuickCheck-Test.html#Result",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Test.html#v:usedSize\",\"http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html#v:usedSize\"]"
        },
        "index": {
          "description": "what was the test size",
          "hierarchy": "Test QuickCheck Test",
          "module": "Test.QuickCheck.Test",
          "name": "usedSize",
          "package": "QuickCheck",
          "partial": "Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Test.html#v:usedSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTests a property and prints the results and all test cases generated to \u003ccode\u003estdout\u003c/code\u003e.\n This is just a convenience function that means the same as \u003ccode\u003e\u003ca\u003equickCheck\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003e.\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003everbose\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Test.QuickCheck.Test\",\"Test.QuickCheck\"]",
          "name": "verboseCheck",
          "package": "QuickCheck",
          "signature": "prop -\u003e IO ()",
          "source": "src/Test-QuickCheck-Test.html#verboseCheck",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Test.html#v:verboseCheck\",\"http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html#v:verboseCheck\"]"
        },
        "index": {
          "description": "Tests property and prints the results and all test cases generated to stdout This is just convenience function that means the same as quickCheck verbose",
          "hierarchy": "Test QuickCheck Test",
          "module": "Test.QuickCheck.Test",
          "name": "verboseCheck",
          "normalized": "a-\u003eIO()",
          "package": "QuickCheck",
          "partial": "Check",
          "signature": "prop-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Test.html#v:verboseCheck"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTests a property, produces a test result, and prints the results and all test cases generated to \u003ccode\u003estdout\u003c/code\u003e.\n This is just a convenience function that combines \u003ccode\u003e\u003ca\u003equickCheckResult\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003everbose\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Test.QuickCheck.Test\",\"Test.QuickCheck\"]",
          "name": "verboseCheckResult",
          "package": "QuickCheck",
          "signature": "prop -\u003e IO Result",
          "source": "src/Test-QuickCheck-Test.html#verboseCheckResult",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Test.html#v:verboseCheckResult\",\"http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html#v:verboseCheckResult\"]"
        },
        "index": {
          "description": "Tests property produces test result and prints the results and all test cases generated to stdout This is just convenience function that combines quickCheckResult and verbose",
          "hierarchy": "Test QuickCheck Test",
          "module": "Test.QuickCheck.Test",
          "name": "verboseCheckResult",
          "normalized": "a-\u003eIO Result",
          "package": "QuickCheck",
          "partial": "Check Result",
          "signature": "prop-\u003eIO Result",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Test.html#v:verboseCheckResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTests a property, using test arguments, and prints the results and all test cases generated to \u003ccode\u003estdout\u003c/code\u003e.\n This is just a convenience function that combines \u003ccode\u003e\u003ca\u003equickCheckWith\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003everbose\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Test.QuickCheck.Test\",\"Test.QuickCheck\"]",
          "name": "verboseCheckWith",
          "package": "QuickCheck",
          "signature": "Args -\u003e prop -\u003e IO ()",
          "source": "src/Test-QuickCheck-Test.html#verboseCheckWith",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Test.html#v:verboseCheckWith\",\"http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html#v:verboseCheckWith\"]"
        },
        "index": {
          "description": "Tests property using test arguments and prints the results and all test cases generated to stdout This is just convenience function that combines quickCheckWith and verbose",
          "hierarchy": "Test QuickCheck Test",
          "module": "Test.QuickCheck.Test",
          "name": "verboseCheckWith",
          "normalized": "Args-\u003ea-\u003eIO()",
          "package": "QuickCheck",
          "partial": "Check With",
          "signature": "Args-\u003eprop-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Test.html#v:verboseCheckWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTests a property, using test arguments, produces a test result, and prints the results and all test cases generated to \u003ccode\u003estdout\u003c/code\u003e.\n This is just a convenience function that combines \u003ccode\u003e\u003ca\u003equickCheckWithResult\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003everbose\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Test.QuickCheck.Test\",\"Test.QuickCheck\"]",
          "name": "verboseCheckWithResult",
          "package": "QuickCheck",
          "signature": "Args -\u003e prop -\u003e IO Result",
          "source": "src/Test-QuickCheck-Test.html#verboseCheckWithResult",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Test.html#v:verboseCheckWithResult\",\"http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html#v:verboseCheckWithResult\"]"
        },
        "index": {
          "description": "Tests property using test arguments produces test result and prints the results and all test cases generated to stdout This is just convenience function that combines quickCheckWithResult and verbose",
          "hierarchy": "Test QuickCheck Test",
          "module": "Test.QuickCheck.Test",
          "name": "verboseCheckWithResult",
          "normalized": "Args-\u003ea-\u003eIO Result",
          "package": "QuickCheck",
          "partial": "Check With Result",
          "signature": "Args-\u003eprop-\u003eIO Result",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Test.html#v:verboseCheckWithResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.QuickCheck.Text",
          "name": "Text",
          "package": "QuickCheck",
          "source": "src/Test-QuickCheck-Text.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Test QuickCheck Text",
          "module": "Test.QuickCheck.Text",
          "name": "Text",
          "package": "QuickCheck",
          "partial": "Text",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Text.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.QuickCheck.Text",
          "name": "Str",
          "package": "QuickCheck",
          "source": "src/Test-QuickCheck-Text.html#Str",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Test QuickCheck Text",
          "module": "Test.QuickCheck.Text",
          "name": "Str",
          "package": "QuickCheck",
          "partial": "Str",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Text.html#t:Str"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.QuickCheck.Text",
          "name": "Terminal",
          "package": "QuickCheck",
          "source": "src/Test-QuickCheck-Text.html#Terminal",
          "type": "data"
        },
        "index": {
          "hierarchy": "Test QuickCheck Text",
          "module": "Test.QuickCheck.Text",
          "name": "Terminal",
          "package": "QuickCheck",
          "partial": "Terminal",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Text.html#t:Terminal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.QuickCheck.Text\",\"Test.QuickCheck\"]",
          "name": "MkStr",
          "package": "QuickCheck",
          "signature": "MkStr String",
          "source": "src/Test-QuickCheck-Text.html#Str",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Text.html#v:MkStr\",\"http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html#v:MkStr\"]"
        },
        "index": {
          "hierarchy": "Test QuickCheck Text",
          "module": "Test.QuickCheck.Text",
          "name": "MkStr",
          "package": "QuickCheck",
          "partial": "Mk Str",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Text.html#v:MkStr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.QuickCheck.Text",
          "name": "bold",
          "package": "QuickCheck",
          "signature": "String -\u003e String",
          "source": "src/Test-QuickCheck-Text.html#bold",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test QuickCheck Text",
          "module": "Test.QuickCheck.Text",
          "name": "bold",
          "normalized": "String-\u003eString",
          "package": "QuickCheck",
          "signature": "String-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Text.html#v:bold"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.QuickCheck.Text",
          "name": "handle",
          "package": "QuickCheck",
          "signature": "Handle -\u003e String -\u003e IO ()",
          "source": "src/Test-QuickCheck-Text.html#handle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test QuickCheck Text",
          "module": "Test.QuickCheck.Text",
          "name": "handle",
          "normalized": "Handle-\u003eString-\u003eIO()",
          "package": "QuickCheck",
          "signature": "Handle-\u003eString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Text.html#v:handle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.QuickCheck.Text",
          "name": "isOneLine",
          "package": "QuickCheck",
          "signature": "String -\u003e Bool",
          "source": "src/Test-QuickCheck-Text.html#isOneLine",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test QuickCheck Text",
          "module": "Test.QuickCheck.Text",
          "name": "isOneLine",
          "normalized": "String-\u003eBool",
          "package": "QuickCheck",
          "partial": "One Line",
          "signature": "String-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Text.html#v:isOneLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.QuickCheck.Text",
          "name": "newTerminal",
          "package": "QuickCheck",
          "signature": "Output -\u003e Output -\u003e IO Terminal",
          "source": "src/Test-QuickCheck-Text.html#newTerminal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test QuickCheck Text",
          "module": "Test.QuickCheck.Text",
          "name": "newTerminal",
          "normalized": "Output-\u003eOutput-\u003eIO Terminal",
          "package": "QuickCheck",
          "partial": "Terminal",
          "signature": "Output-\u003eOutput-\u003eIO Terminal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Text.html#v:newTerminal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.QuickCheck.Text",
          "name": "number",
          "package": "QuickCheck",
          "signature": "Int -\u003e String -\u003e String",
          "source": "src/Test-QuickCheck-Text.html#number",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test QuickCheck Text",
          "module": "Test.QuickCheck.Text",
          "name": "number",
          "normalized": "Int-\u003eString-\u003eString",
          "package": "QuickCheck",
          "signature": "Int-\u003eString-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Text.html#v:number"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.QuickCheck.Text",
          "name": "oneLine",
          "package": "QuickCheck",
          "signature": "String -\u003e String",
          "source": "src/Test-QuickCheck-Text.html#oneLine",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test QuickCheck Text",
          "module": "Test.QuickCheck.Text",
          "name": "oneLine",
          "normalized": "String-\u003eString",
          "package": "QuickCheck",
          "partial": "Line",
          "signature": "String-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Text.html#v:oneLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.QuickCheck.Text",
          "name": "putLine",
          "package": "QuickCheck",
          "signature": "Terminal -\u003e String -\u003e IO ()",
          "source": "src/Test-QuickCheck-Text.html#putLine",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test QuickCheck Text",
          "module": "Test.QuickCheck.Text",
          "name": "putLine",
          "normalized": "Terminal-\u003eString-\u003eIO()",
          "package": "QuickCheck",
          "partial": "Line",
          "signature": "Terminal-\u003eString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Text.html#v:putLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.QuickCheck.Text",
          "name": "putPart",
          "package": "QuickCheck",
          "signature": "Terminal -\u003e String -\u003e IO ()",
          "source": "src/Test-QuickCheck-Text.html#putPart",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test QuickCheck Text",
          "module": "Test.QuickCheck.Text",
          "name": "putPart",
          "normalized": "Terminal-\u003eString-\u003eIO()",
          "package": "QuickCheck",
          "partial": "Part",
          "signature": "Terminal-\u003eString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Text.html#v:putPart"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.QuickCheck.Text",
          "name": "putTemp",
          "package": "QuickCheck",
          "signature": "Terminal -\u003e String -\u003e IO ()",
          "source": "src/Test-QuickCheck-Text.html#putTemp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test QuickCheck Text",
          "module": "Test.QuickCheck.Text",
          "name": "putTemp",
          "normalized": "Terminal-\u003eString-\u003eIO()",
          "package": "QuickCheck",
          "partial": "Temp",
          "signature": "Terminal-\u003eString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Text.html#v:putTemp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.QuickCheck.Text\",\"Test.QuickCheck\"]",
          "name": "ranges",
          "package": "QuickCheck",
          "signature": "a -\u003e a -\u003e Str",
          "source": "src/Test-QuickCheck-Text.html#ranges",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Text.html#v:ranges\",\"http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html#v:ranges\"]"
        },
        "index": {
          "hierarchy": "Test QuickCheck Text",
          "module": "Test.QuickCheck.Text",
          "name": "ranges",
          "normalized": "a-\u003ea-\u003eStr",
          "package": "QuickCheck",
          "signature": "a-\u003ea-\u003eStr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Text.html#v:ranges"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.QuickCheck.Text",
          "name": "short",
          "package": "QuickCheck",
          "signature": "Int -\u003e String -\u003e String",
          "source": "src/Test-QuickCheck-Text.html#short",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test QuickCheck Text",
          "module": "Test.QuickCheck.Text",
          "name": "short",
          "normalized": "Int-\u003eString-\u003eString",
          "package": "QuickCheck",
          "signature": "Int-\u003eString-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Text.html#v:short"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.QuickCheck.Text",
          "name": "showErr",
          "package": "QuickCheck",
          "signature": "a -\u003e String",
          "source": "src/Test-QuickCheck-Text.html#showErr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test QuickCheck Text",
          "module": "Test.QuickCheck.Text",
          "name": "showErr",
          "normalized": "a-\u003eString",
          "package": "QuickCheck",
          "partial": "Err",
          "signature": "a-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Text.html#v:showErr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.QuickCheck.Text",
          "name": "terminalOutput",
          "package": "QuickCheck",
          "signature": "Terminal -\u003e IO String",
          "source": "src/Test-QuickCheck-Text.html#terminalOutput",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test QuickCheck Text",
          "module": "Test.QuickCheck.Text",
          "name": "terminalOutput",
          "normalized": "Terminal-\u003eIO String",
          "package": "QuickCheck",
          "partial": "Output",
          "signature": "Terminal-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Text.html#v:terminalOutput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.QuickCheck.Text",
          "name": "withNullTerminal",
          "package": "QuickCheck",
          "signature": "(Terminal -\u003e IO a) -\u003e IO a",
          "source": "src/Test-QuickCheck-Text.html#withNullTerminal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test QuickCheck Text",
          "module": "Test.QuickCheck.Text",
          "name": "withNullTerminal",
          "normalized": "(Terminal-\u003eIO a)-\u003eIO a",
          "package": "QuickCheck",
          "partial": "Null Terminal",
          "signature": "(Terminal-\u003eIO a)-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Text.html#v:withNullTerminal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.QuickCheck.Text",
          "name": "withStdioTerminal",
          "package": "QuickCheck",
          "signature": "(Terminal -\u003e IO a) -\u003e IO a",
          "source": "src/Test-QuickCheck-Text.html#withStdioTerminal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test QuickCheck Text",
          "module": "Test.QuickCheck.Text",
          "name": "withStdioTerminal",
          "normalized": "(Terminal-\u003eIO a)-\u003eIO a",
          "package": "QuickCheck",
          "partial": "Stdio Terminal",
          "signature": "(Terminal-\u003eIO a)-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck-Text.html#v:withStdioTerminal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.QuickCheck",
          "name": "QuickCheck",
          "package": "QuickCheck",
          "source": "src/Test-QuickCheck.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Test QuickCheck",
          "module": "Test.QuickCheck",
          "name": "QuickCheck",
          "package": "QuickCheck",
          "partial": "Quick Check",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRandom generation and shrinking of values.\n\u003c/p\u003e",
          "module": "Test.QuickCheck",
          "name": "Arbitrary",
          "package": "QuickCheck",
          "source": "src/Test-QuickCheck-Arbitrary.html#Arbitrary",
          "type": "class"
        },
        "index": {
          "description": "Random generation and shrinking of values",
          "hierarchy": "Test QuickCheck",
          "module": "Test.QuickCheck",
          "name": "Arbitrary",
          "package": "QuickCheck",
          "partial": "Arbitrary",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html#t:Arbitrary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eArgs specifies arguments to the QuickCheck driver\n\u003c/p\u003e",
          "module": "Test.QuickCheck",
          "name": "Args",
          "package": "QuickCheck",
          "source": "src/Test-QuickCheck-Test.html#Args",
          "type": "data"
        },
        "index": {
          "description": "Args specifies arguments to the QuickCheck driver",
          "hierarchy": "Test QuickCheck",
          "module": "Test.QuickCheck",
          "name": "Args",
          "package": "QuickCheck",
          "partial": "Args",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html#t:Args"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eBlind x\u003c/code\u003e: as x, but x does not have to be in the \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e class.\n\u003c/p\u003e",
          "module": "Test.QuickCheck",
          "name": "Blind",
          "package": "QuickCheck",
          "source": "src/Test-QuickCheck-Modifiers.html#Blind",
          "type": "newtype"
        },
        "index": {
          "description": "Blind as but does not have to be in the Show class",
          "hierarchy": "Test QuickCheck",
          "module": "Test.QuickCheck",
          "name": "Blind",
          "package": "QuickCheck",
          "partial": "Blind",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html#t:Blind"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUsed for random generation of functions.\n\u003c/p\u003e",
          "module": "Test.QuickCheck",
          "name": "CoArbitrary",
          "package": "QuickCheck",
          "source": "src/Test-QuickCheck-Arbitrary.html#CoArbitrary",
          "type": "class"
        },
        "index": {
          "description": "Used for random generation of functions",
          "hierarchy": "Test QuickCheck",
          "module": "Test.QuickCheck",
          "name": "CoArbitrary",
          "package": "QuickCheck",
          "partial": "Co Arbitrary",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html#t:CoArbitrary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eFixed x\u003c/code\u003e: as x, but will not be shrunk.\n\u003c/p\u003e",
          "module": "Test.QuickCheck",
          "name": "Fixed",
          "package": "QuickCheck",
          "source": "src/Test-QuickCheck-Modifiers.html#Fixed",
          "type": "newtype"
        },
        "index": {
          "description": "Fixed as but will not be shrunk",
          "hierarchy": "Test QuickCheck",
          "module": "Test.QuickCheck",
          "name": "Fixed",
          "package": "QuickCheck",
          "partial": "Fixed",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html#t:Fixed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.QuickCheck",
          "name": "Gen",
          "package": "QuickCheck",
          "source": "src/Test-QuickCheck-Gen.html#Gen",
          "type": "data"
        },
        "index": {
          "hierarchy": "Test QuickCheck",
          "module": "Test.QuickCheck",
          "name": "Gen",
          "package": "QuickCheck",
          "partial": "Gen",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html#t:Gen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eNonEmpty xs\u003c/code\u003e: guarantees that xs is non-empty.\n\u003c/p\u003e",
          "module": "Test.QuickCheck",
          "name": "NonEmptyList",
          "package": "QuickCheck",
          "source": "src/Test-QuickCheck-Modifiers.html#NonEmptyList",
          "type": "newtype"
        },
        "index": {
          "description": "NonEmpty xs guarantees that xs is non-empty",
          "hierarchy": "Test QuickCheck",
          "module": "Test.QuickCheck",
          "name": "NonEmptyList",
          "package": "QuickCheck",
          "partial": "Non Empty List",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html#t:NonEmptyList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eNonNegative x\u003c/code\u003e: guarantees that \u003ccode\u003ex \u003e= 0\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Test.QuickCheck",
          "name": "NonNegative",
          "package": "QuickCheck",
          "source": "src/Test-QuickCheck-Modifiers.html#NonNegative",
          "type": "newtype"
        },
        "index": {
          "description": "NonNegative guarantees that",
          "hierarchy": "Test QuickCheck",
          "module": "Test.QuickCheck",
          "name": "NonNegative",
          "package": "QuickCheck",
          "partial": "Non Negative",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html#t:NonNegative"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eNonZero x\u003c/code\u003e: guarantees that \u003ccode\u003ex /= 0\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Test.QuickCheck",
          "name": "NonZero",
          "package": "QuickCheck",
          "source": "src/Test-QuickCheck-Modifiers.html#NonZero",
          "type": "newtype"
        },
        "index": {
          "description": "NonZero guarantees that",
          "hierarchy": "Test QuickCheck",
          "module": "Test.QuickCheck",
          "name": "NonZero",
          "package": "QuickCheck",
          "partial": "Non Zero",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html#t:NonZero"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eOrdered xs\u003c/code\u003e: guarantees that xs is ordered.\n\u003c/p\u003e",
          "module": "Test.QuickCheck",
          "name": "OrderedList",
          "package": "QuickCheck",
          "source": "src/Test-QuickCheck-Modifiers.html#OrderedList",
          "type": "newtype"
        },
        "index": {
          "description": "Ordered xs guarantees that xs is ordered",
          "hierarchy": "Test QuickCheck",
          "module": "Test.QuickCheck",
          "name": "OrderedList",
          "package": "QuickCheck",
          "partial": "Ordered List",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html#t:OrderedList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ePositive x\u003c/code\u003e: guarantees that \u003ccode\u003ex \u003e 0\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Test.QuickCheck",
          "name": "Positive",
          "package": "QuickCheck",
          "source": "src/Test-QuickCheck-Modifiers.html#Positive",
          "type": "newtype"
        },
        "index": {
          "description": "Positive guarantees that",
          "hierarchy": "Test QuickCheck",
          "module": "Test.QuickCheck",
          "name": "Positive",
          "package": "QuickCheck",
          "partial": "Positive",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html#t:Positive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.QuickCheck",
          "name": "Prop",
          "package": "QuickCheck",
          "source": "src/Test-QuickCheck-Property.html#Prop",
          "type": "data"
        },
        "index": {
          "hierarchy": "Test QuickCheck",
          "module": "Test.QuickCheck",
          "name": "Prop",
          "package": "QuickCheck",
          "partial": "Prop",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html#t:Prop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.QuickCheck",
          "name": "Property",
          "package": "QuickCheck",
          "source": "src/Test-QuickCheck-Property.html#Property",
          "type": "type"
        },
        "index": {
          "hierarchy": "Test QuickCheck",
          "module": "Test.QuickCheck",
          "name": "Property",
          "package": "QuickCheck",
          "partial": "Property",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html#t:Property"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eResult represents the test result\n\u003c/p\u003e",
          "module": "Test.QuickCheck",
          "name": "Result",
          "package": "QuickCheck",
          "source": "src/Test-QuickCheck-Test.html#Result",
          "type": "data"
        },
        "index": {
          "description": "Result represents the test result",
          "hierarchy": "Test QuickCheck",
          "module": "Test.QuickCheck",
          "name": "Result",
          "package": "QuickCheck",
          "partial": "Result",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html#t:Result"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eShrink2 x\u003c/code\u003e: allows 2 shrinking steps at the same time when shrinking x\n\u003c/p\u003e",
          "module": "Test.QuickCheck",
          "name": "Shrink2",
          "package": "QuickCheck",
          "source": "src/Test-QuickCheck-Modifiers.html#Shrink2",
          "type": "newtype"
        },
        "index": {
          "description": "Shrink2 allows shrinking steps at the same time when shrinking",
          "hierarchy": "Test QuickCheck",
          "module": "Test.QuickCheck",
          "name": "Shrink2",
          "package": "QuickCheck",
          "partial": "Shrink",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html#t:Shrink2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.QuickCheck",
          "name": "ShrinkState",
          "package": "QuickCheck",
          "source": "src/Test-QuickCheck-Modifiers.html#ShrinkState",
          "type": "class"
        },
        "index": {
          "hierarchy": "Test QuickCheck",
          "module": "Test.QuickCheck",
          "name": "ShrinkState",
          "package": "QuickCheck",
          "partial": "Shrink State",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html#t:ShrinkState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eShrinking _ x\u003c/code\u003e: allows for maintaining a state during shrinking.\n\u003c/p\u003e",
          "module": "Test.QuickCheck",
          "name": "Shrinking",
          "package": "QuickCheck",
          "source": "src/Test-QuickCheck-Modifiers.html#Shrinking",
          "type": "data"
        },
        "index": {
          "description": "Shrinking allows for maintaining state during shrinking",
          "hierarchy": "Test QuickCheck",
          "module": "Test.QuickCheck",
          "name": "Shrinking",
          "package": "QuickCheck",
          "partial": "Shrinking",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html#t:Shrinking"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eSmart _ x\u003c/code\u003e: tries a different order when shrinking.\n\u003c/p\u003e",
          "module": "Test.QuickCheck",
          "name": "Smart",
          "package": "QuickCheck",
          "source": "src/Test-QuickCheck-Modifiers.html#Smart",
          "type": "data"
        },
        "index": {
          "description": "Smart tries different order when shrinking",
          "hierarchy": "Test QuickCheck",
          "module": "Test.QuickCheck",
          "name": "Smart",
          "package": "QuickCheck",
          "partial": "Smart",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html#t:Smart"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.QuickCheck",
          "name": "Str",
          "package": "QuickCheck",
          "source": "src/Test-QuickCheck-Text.html#Str",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Test QuickCheck",
          "module": "Test.QuickCheck",
          "name": "Str",
          "package": "QuickCheck",
          "partial": "Str",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html#t:Str"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe class of things which can be tested, i.e. turned into a property.\n\u003c/p\u003e",
          "module": "Test.QuickCheck",
          "name": "Testable",
          "package": "QuickCheck",
          "source": "src/Test-QuickCheck-Property.html#Testable",
          "type": "class"
        },
        "index": {
          "description": "The class of things which can be tested i.e turned into property",
          "hierarchy": "Test QuickCheck",
          "module": "Test.QuickCheck",
          "name": "Testable",
          "package": "QuickCheck",
          "partial": "Testable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html#t:Testable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA generator for values of the given type.\n\u003c/p\u003e",
          "module": "Test.QuickCheck",
          "name": "arbitrary",
          "package": "QuickCheck",
          "signature": "Gen a",
          "source": "src/Test-QuickCheck-Arbitrary.html#arbitrary",
          "type": "method"
        },
        "index": {
          "description": "generator for values of the given type",
          "hierarchy": "Test QuickCheck",
          "module": "Test.QuickCheck",
          "name": "arbitrary",
          "package": "QuickCheck",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html#v:arbitrary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUsed to generate a function of type \u003ccode\u003ea -\u003e c\u003c/code\u003e. The implementation\n should use the first argument to perturb the random generator\n given as the second argument. the returned generator\n is then used to generate the function result.\n You can often use \u003ccode\u003e\u003ca\u003evariant\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003e\u003e\u003c\u003c/a\u003e\u003c/code\u003e to implement\n \u003ccode\u003e\u003ca\u003ecoarbitrary\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Test.QuickCheck",
          "name": "coarbitrary",
          "package": "QuickCheck",
          "signature": "a -\u003e Gen c -\u003e Gen c",
          "source": "src/Test-QuickCheck-Arbitrary.html#coarbitrary",
          "type": "method"
        },
        "index": {
          "description": "Used to generate function of type The implementation should use the first argument to perturb the random generator given as the second argument the returned generator is then used to generate the function result You can often use variant and to implement coarbitrary",
          "hierarchy": "Test QuickCheck",
          "module": "Test.QuickCheck",
          "name": "coarbitrary",
          "normalized": "a-\u003eGen b-\u003eGen b",
          "package": "QuickCheck",
          "signature": "a-\u003eGen c-\u003eGen c",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html#v:coarbitrary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA special exception that makes QuickCheck discard the test case.\n Normally you should use \u003ccode\u003e==\u003e\u003c/code\u003e, but if for some reason this isn't\n possible (e.g. you are deep inside a generator), use \u003ccode\u003e\u003ca\u003ediscard\u003c/a\u003e\u003c/code\u003e\n instead.\n\u003c/p\u003e",
          "module": "Test.QuickCheck",
          "name": "discard",
          "package": "QuickCheck",
          "signature": "a",
          "source": "src/Test-QuickCheck-Exception.html#discard",
          "type": "function"
        },
        "index": {
          "description": "special exception that makes QuickCheck discard the test case Normally you should use but if for some reason this isn possible e.g you are deep inside generator use discard instead",
          "hierarchy": "Test QuickCheck",
          "module": "Test.QuickCheck",
          "name": "discard",
          "package": "QuickCheck",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html#v:discard"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.QuickCheck",
          "name": "exhaustive",
          "package": "QuickCheck",
          "signature": "prop -\u003e Bool",
          "source": "src/Test-QuickCheck-Property.html#exhaustive",
          "type": "method"
        },
        "index": {
          "hierarchy": "Test QuickCheck",
          "module": "Test.QuickCheck",
          "name": "exhaustive",
          "normalized": "a-\u003eBool",
          "package": "QuickCheck",
          "signature": "prop-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html#v:exhaustive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.QuickCheck",
          "name": "property",
          "package": "QuickCheck",
          "signature": "prop -\u003e Property",
          "source": "src/Test-QuickCheck-Property.html#property",
          "type": "method"
        },
        "index": {
          "hierarchy": "Test QuickCheck",
          "module": "Test.QuickCheck",
          "name": "property",
          "normalized": "a-\u003eProperty",
          "package": "QuickCheck",
          "signature": "prop-\u003eProperty",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html#v:property"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProduces a (possibly) empty list of all the possible\n immediate shrinks of the given value.\n\u003c/p\u003e",
          "module": "Test.QuickCheck",
          "name": "shrink",
          "package": "QuickCheck",
          "signature": "a -\u003e [a]",
          "source": "src/Test-QuickCheck-Arbitrary.html#shrink",
          "type": "method"
        },
        "index": {
          "description": "Produces possibly empty list of all the possible immediate shrinks of the given value",
          "hierarchy": "Test QuickCheck",
          "module": "Test.QuickCheck",
          "name": "shrink",
          "normalized": "a-\u003e[a]",
          "package": "QuickCheck",
          "signature": "a-\u003e[a]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html#v:shrink"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.QuickCheck",
          "name": "shrinkInit",
          "package": "QuickCheck",
          "signature": "a -\u003e s",
          "source": "src/Test-QuickCheck-Modifiers.html#shrinkInit",
          "type": "method"
        },
        "index": {
          "hierarchy": "Test QuickCheck",
          "module": "Test.QuickCheck",
          "name": "shrinkInit",
          "normalized": "a-\u003eb",
          "package": "QuickCheck",
          "partial": "Init",
          "signature": "a-\u003es",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html#v:shrinkInit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.QuickCheck",
          "name": "shrinkState",
          "package": "QuickCheck",
          "signature": "a -\u003e s -\u003e [(a, s)]",
          "source": "src/Test-QuickCheck-Modifiers.html#shrinkState",
          "type": "method"
        },
        "index": {
          "hierarchy": "Test QuickCheck",
          "module": "Test.QuickCheck",
          "name": "shrinkState",
          "normalized": "a-\u003eb-\u003e[(a,b)]",
          "package": "QuickCheck",
          "partial": "State",
          "signature": "a-\u003es-\u003e[(a,s)]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html#v:shrinkState"
      }
    }
  ]
]