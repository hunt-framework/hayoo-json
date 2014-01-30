[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/quickcheck-poly/docs/Test-QuickCheck-PolyQC.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cpre\u003e import Test.QuickCheck.PolyQC\n import Prop -- the module that defiens the properties p0, p1, p2, p3, p4\n  -- p0 x = x == x\n  -- p1 x y z = x + (y + z) == (x + y) + z\n  -- p2 x y = x + y == y + x\n  -- p3 x = x == negate (negate x)\n  -- p4 p = (fst p, snd p) == p\n main = do putStrLn \"testing p0 =======================================\"\n           print =\u003c\u003c polyQuickCheck' \"Prop\" \"p0\" [\"Bool\",\"Int\",\"Double\"]\n           putStrLn \"testing p1 =======================================\"\n           print =\u003c\u003c polyQuickCheck' \"Prop\" \"p1\" [\"Bool\",\"Int\",\"Double\"]\n           putStrLn \"testing p2 =======================================\"\n           print =\u003c\u003c polyQuickCheck' \"Prop\" \"p2\" [\"Bool\",\"Int\",\"Double\"]\n           putStrLn \"testing p3 =======================================\"\n           print =\u003c\u003c polyQuickCheck' \"Prop\" \"p3\" [\"Bool\",\"Int\",\"Double\"]\n           putStrLn \"testing p4 =======================================\"\n           print =\u003c\u003c polyQuickCheck' \"Prop\" \"p4\" [\"Bool\",\"Int\",\"Double\"]\n           return ()\n\u003c/pre\u003e\u003cp\u003ethe result of running this is\n\u003c/p\u003e\u003cpre\u003e \u003e :t p0\n p0 :: (Eq a) =\u003e a -\u003e Bool\n \u003e :t p1\n p1 :: (Num a) =\u003e a -\u003e a -\u003e a -\u003e Bool\n \u003e :t p2\n p2 :: (Num a) =\u003e a -\u003e a -\u003e Bool\n \u003e :t p3\n p3 :: (Num a) =\u003e a -\u003e Bool\n \u003e :t p4\n p4 :: (Eq a, Eq b) =\u003e (a, b) -\u003e Bool\n \u003e main\n testing p0 =======================================\n Right [\"(\\\"(Eq Bool) =\u003e Bool -\u003e Bool\\\",+++ OK, passed 100 tests.\n ())\",\"(\\\"(Eq Int) =\u003e Int -\u003e Bool\\\",+++ OK, passed 100 tests.\n ())\",\"(\\\"(Eq Double) =\u003e Double -\u003e Bool\\\",+++ OK, passed 100 tests.\n ())\"]\n testing p1 =======================================\n Right [\"(\\\"(Num Int) =\u003e Int -\u003e Int -\u003e Int -\u003e Bool\\\",+++ OK, passed 100 tests.\n ())\",\"(\\\"(Num Double) =\u003e Double -\u003e Double -\u003e Double -\u003e Bool\\\",*** Failed! Falsifiable (after 9 tests and 2 shrinks):    \n 4.0\n -26.0\n 8.777291602197652\n ())\"]\n testing p2 =======================================\n Right [\"(\\\"(Num Int) =\u003e Int -\u003e Int -\u003e Bool\\\",+++ OK, passed 100 tests.\n ())\",\"(\\\"(Num Double) =\u003e Double -\u003e Double -\u003e Bool\\\",+++ OK, passed 100 tests.\n ())\"]\n testing p3 =======================================\n Right [\"(\\\"(Num Int) =\u003e Int -\u003e Bool\\\",+++ OK, passed 100 tests.\n ())\",\"(\\\"(Num Double) =\u003e Double -\u003e Bool\\\",+++ OK, passed 100 tests.\n ())\"]\n testing p4 =======================================\n Right [\"(\\\"(Eq Bool, Eq Bool) =\u003e (Bool, Bool) -\u003e Bool\\\",+++ OK, passed 100 tests.\n ())\",\"(\\\"(Eq Bool, Eq Int) =\u003e (Bool, Int) -\u003e Bool\\\",+++ OK, passed 100 tests.\n ())\",\"(\\\"(Eq Bool, Eq Double) =\u003e (Bool, Double) -\u003e Bool\\\",+++ OK, passed 100 tests.\n ())\",\"(\\\"(Eq Int, Eq Bool) =\u003e (Int, Bool) -\u003e Bool\\\",+++ OK, passed 100 tests.\n ())\",\"(\\\"(Eq Int, Eq Int) =\u003e (Int, Int) -\u003e Bool\\\",+++ OK, passed 100 tests.\n ())\",\"(\\\"(Eq Int, Eq Double) =\u003e (Int, Double) -\u003e Bool\\\",+++ OK, passed 100 tests.\n ())\",\"(\\\"(Eq Double, Eq Bool) =\u003e (Double, Bool) -\u003e Bool\\\",+++ OK, passed 100 tests.\n ())\",\"(\\\"(Eq Double, Eq Int) =\u003e (Double, Int) -\u003e Bool\\\",+++ OK, passed 100 tests.\n ())\",\"(\\\"(Eq Double, Eq Double) =\u003e (Double, Double) -\u003e Bool\\\",+++ OK, passed 100 tests.\n ())\"]\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "Test.QuickCheck.PolyQC",
        "fct-package": "quickcheck-poly",
        "fct-signature": "module",
        "fct-source": "src/Test-QuickCheck-PolyQC.html",
        "fct-type": "module",
        "title": "PolyQC"
      },
      "index": {
        "description": "import Test.QuickCheck.PolyQC import Prop the module that defiens the properties p0 p1 p2 p3 p4 p0 p1 p2 p3 negate negate p4 fst snd main do putStrLn testing p0 print polyQuickCheck Prop p0 Bool Int Double putStrLn testing p1 print polyQuickCheck Prop p1 Bool Int Double putStrLn testing p2 print polyQuickCheck Prop p2 Bool Int Double putStrLn testing p3 print polyQuickCheck Prop p3 Bool Int Double putStrLn testing p4 print polyQuickCheck Prop p4 Bool Int Double return the result of running this is p0 p0 Eq Bool p1 p1 Num Bool p2 p2 Num Bool p3 p3 Num Bool p4 p4 Eq Eq Bool main testing p0 Right Eq Bool Bool Bool OK passed tests Eq Int Int Bool OK passed tests Eq Double Double Bool OK passed tests testing p1 Right Num Int Int Int Int Bool OK passed tests Num Double Double Double Double Bool Failed Falsifiable after tests and shrinks testing p2 Right Num Int Int Int Bool OK passed tests Num Double Double Double Bool OK passed tests testing p3 Right Num Int Int Bool OK passed tests Num Double Double Bool OK passed tests testing p4 Right Eq Bool Eq Bool Bool Bool Bool OK passed tests Eq Bool Eq Int Bool Int Bool OK passed tests Eq Bool Eq Double Bool Double Bool OK passed tests Eq Int Eq Bool Int Bool Bool OK passed tests Eq Int Eq Int Int Int Bool OK passed tests Eq Int Eq Double Int Double Bool OK passed tests Eq Double Eq Bool Double Bool Bool OK passed tests Eq Double Eq Int Double Int Bool OK passed tests Eq Double Eq Double Double Double Bool OK passed tests",
        "hierarchy": "Test QuickCheck PolyQC",
        "module": "Test.QuickCheck.PolyQC",
        "name": "PolyQC",
        "normalized": "",
        "package": "quickcheck-poly",
        "partial": "Poly QC",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/quickcheck-poly/docs/Test-QuickCheck-PolyQC.html#t:ModuleImports",
      "description": {
        "fct-descr": "\u003cp\u003edata type for modules to import in the hint Haskell interpreter\n\u003c/p\u003e",
        "fct-module": "Test.QuickCheck.PolyQC",
        "fct-package": "quickcheck-poly",
        "fct-signature": "data",
        "fct-source": "src/Test-QuickCheck-PolyQC.html#ModuleImports",
        "fct-type": "data",
        "title": "ModuleImports"
      },
      "index": {
        "description": "data type for modules to import in the hint Haskell interpreter",
        "hierarchy": "Test QuickCheck PolyQC",
        "module": "Test.QuickCheck.PolyQC",
        "name": "ModuleImports",
        "normalized": "",
        "package": "quickcheck-poly",
        "partial": "Module Imports",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/quickcheck-poly/docs/Test-QuickCheck-PolyQC.html#v:ModuleImports",
      "description": {
        "fct-module": "Test.QuickCheck.PolyQC",
        "fct-package": "quickcheck-poly",
        "fct-signature": "ModuleImports",
        "fct-source": "src/Test-QuickCheck-PolyQC.html#ModuleImports",
        "fct-type": "function",
        "title": "ModuleImports"
      },
      "index": {
        "description": "",
        "hierarchy": "Test QuickCheck PolyQC",
        "module": "Test.QuickCheck.PolyQC",
        "name": "ModuleImports",
        "normalized": "",
        "package": "quickcheck-poly",
        "partial": "Module Imports",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/quickcheck-poly/docs/Test-QuickCheck-PolyQC.html#v:locals",
      "description": {
        "fct-descr": "\u003cp\u003eextra local modules to load\n\u003c/p\u003e",
        "fct-module": "Test.QuickCheck.PolyQC",
        "fct-package": "quickcheck-poly",
        "fct-signature": "[String]",
        "fct-source": "src/Test-QuickCheck-PolyQC.html#ModuleImports",
        "fct-type": "function",
        "title": "locals"
      },
      "index": {
        "description": "extra local modules to load",
        "hierarchy": "Test QuickCheck PolyQC",
        "module": "Test.QuickCheck.PolyQC",
        "name": "locals",
        "normalized": "[String]",
        "package": "quickcheck-poly",
        "partial": "",
        "signature": "[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/quickcheck-poly/docs/Test-QuickCheck-PolyQC.html#v:packages",
      "description": {
        "fct-descr": "\u003cp\u003eextra package modules to import\n\u003c/p\u003e",
        "fct-module": "Test.QuickCheck.PolyQC",
        "fct-package": "quickcheck-poly",
        "fct-signature": "[String]",
        "fct-source": "src/Test-QuickCheck-PolyQC.html#ModuleImports",
        "fct-type": "function",
        "title": "packages"
      },
      "index": {
        "description": "extra package modules to import",
        "hierarchy": "Test QuickCheck PolyQC",
        "module": "Test.QuickCheck.PolyQC",
        "name": "packages",
        "normalized": "[String]",
        "package": "quickcheck-poly",
        "partial": "",
        "signature": "[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/quickcheck-poly/docs/Test-QuickCheck-PolyQC.html#v:polyQuickCheck",
      "description": {
        "fct-module": "Test.QuickCheck.PolyQC",
        "fct-package": "quickcheck-poly",
        "fct-signature": "ModuleImports -\u003e String -\u003e [[Char]] -\u003e m (Either InterpreterError [String])",
        "fct-source": "src/Test-QuickCheck-PolyQC.html#polyQuickCheck",
        "fct-type": "function",
        "title": "polyQuickCheck"
      },
      "index": {
        "description": "",
        "hierarchy": "Test QuickCheck PolyQC",
        "module": "Test.QuickCheck.PolyQC",
        "name": "polyQuickCheck",
        "normalized": "ModuleImports-\u003eString-\u003e[[Char]]-\u003ea(Either InterpreterError[String])",
        "package": "quickcheck-poly",
        "partial": "Quick Check",
        "signature": "ModuleImports-\u003eString-\u003e[[Char]]-\u003em(Either InterpreterError[String])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/quickcheck-poly/docs/Test-QuickCheck-PolyQC.html#v:polyQuickCheck-39-",
      "description": {
        "fct-module": "Test.QuickCheck.PolyQC",
        "fct-package": "quickcheck-poly",
        "fct-signature": "String -\u003e String -\u003e [[Char]] -\u003e m (Either InterpreterError [String])",
        "fct-source": "src/Test-QuickCheck-PolyQC.html#polyQuickCheck%27",
        "fct-type": "function",
        "title": "polyQuickCheck'"
      },
      "index": {
        "description": "",
        "hierarchy": "Test QuickCheck PolyQC",
        "module": "Test.QuickCheck.PolyQC",
        "name": "polyQuickCheck'",
        "normalized": "String-\u003eString-\u003e[[Char]]-\u003ea(Either InterpreterError[String])",
        "package": "quickcheck-poly",
        "partial": "Quick Check'",
        "signature": "String-\u003eString-\u003e[[Char]]-\u003em(Either InterpreterError[String])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/quickcheck-poly/docs/Test-QuickCheck-PolyQC.html#v:polyQuickCheckResult",
      "description": {
        "fct-module": "Test.QuickCheck.PolyQC",
        "fct-package": "quickcheck-poly",
        "fct-signature": "ModuleImports -\u003e String -\u003e [[Char]] -\u003e m (Either InterpreterError [String])",
        "fct-source": "src/Test-QuickCheck-PolyQC.html#polyQuickCheckResult",
        "fct-type": "function",
        "title": "polyQuickCheckResult"
      },
      "index": {
        "description": "",
        "hierarchy": "Test QuickCheck PolyQC",
        "module": "Test.QuickCheck.PolyQC",
        "name": "polyQuickCheckResult",
        "normalized": "ModuleImports-\u003eString-\u003e[[Char]]-\u003ea(Either InterpreterError[String])",
        "package": "quickcheck-poly",
        "partial": "Quick Check Result",
        "signature": "ModuleImports-\u003eString-\u003e[[Char]]-\u003em(Either InterpreterError[String])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/quickcheck-poly/docs/Test-QuickCheck-PolyQC.html#v:polyQuickCheckResult-39-",
      "description": {
        "fct-module": "Test.QuickCheck.PolyQC",
        "fct-package": "quickcheck-poly",
        "fct-signature": "String -\u003e String -\u003e [[Char]] -\u003e m (Either InterpreterError [String])",
        "fct-source": "src/Test-QuickCheck-PolyQC.html#polyQuickCheckResult%27",
        "fct-type": "function",
        "title": "polyQuickCheckResult'"
      },
      "index": {
        "description": "",
        "hierarchy": "Test QuickCheck PolyQC",
        "module": "Test.QuickCheck.PolyQC",
        "name": "polyQuickCheckResult'",
        "normalized": "String-\u003eString-\u003e[[Char]]-\u003ea(Either InterpreterError[String])",
        "package": "quickcheck-poly",
        "partial": "Quick Check Result'",
        "signature": "String-\u003eString-\u003e[[Char]]-\u003em(Either InterpreterError[String])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/quickcheck-poly/docs/Test-QuickCheck-PolyQC.html#v:top",
      "description": {
        "fct-descr": "\u003cp\u003ethe module where properties are defined\n\u003c/p\u003e",
        "fct-module": "Test.QuickCheck.PolyQC",
        "fct-package": "quickcheck-poly",
        "fct-signature": "String",
        "fct-source": "src/Test-QuickCheck-PolyQC.html#ModuleImports",
        "fct-type": "function",
        "title": "top"
      },
      "index": {
        "description": "the module where properties are defined",
        "hierarchy": "Test QuickCheck PolyQC",
        "module": "Test.QuickCheck.PolyQC",
        "name": "top",
        "normalized": "",
        "package": "quickcheck-poly",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/quickcheck-poly/docs/Test-QuickCheck-PolyQC.html#v:withModule",
      "description": {
        "fct-module": "Test.QuickCheck.PolyQC",
        "fct-package": "quickcheck-poly",
        "fct-signature": "String -\u003e ModuleImports",
        "fct-source": "src/Test-QuickCheck-PolyQC.html#withModule",
        "fct-type": "function",
        "title": "withModule"
      },
      "index": {
        "description": "",
        "hierarchy": "Test QuickCheck PolyQC",
        "module": "Test.QuickCheck.PolyQC",
        "name": "withModule",
        "normalized": "String-\u003eModuleImports",
        "package": "quickcheck-poly",
        "partial": "Module",
        "signature": "String-\u003eModuleImports"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/quickcheck-poly/docs/Test-QuickCheck-UnsafeShowIO.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ecrazy hack !!!\n to force evaluating quickCheck in the hint Haskell interpreter\n you shouldn't really do this in any other places\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Test.QuickCheck.UnsafeShowIO",
        "fct-package": "quickcheck-poly",
        "fct-signature": "module",
        "fct-source": "src/Test-QuickCheck-UnsafeShowIO.html",
        "fct-type": "module",
        "title": "UnsafeShowIO"
      },
      "index": {
        "description": "crazy hack to force evaluating quickCheck in the hint Haskell interpreter you shouldn really do this in any other places",
        "hierarchy": "Test QuickCheck UnsafeShowIO",
        "module": "Test.QuickCheck.UnsafeShowIO",
        "name": "UnsafeShowIO",
        "normalized": "",
        "package": "quickcheck-poly",
        "partial": "Unsafe Show IO",
        "signature": ""
      }
    }
  }
]