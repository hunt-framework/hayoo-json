[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AC-MiniTest/docs/Test-AC-Class-Eq.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eProperties for testing that instances of the \u003ccode\u003e\u003ca\u003eEq\u003c/a\u003e\u003c/code\u003e class perform\n  correctly.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003ep_reflexive\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ep_symmetric\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003ep_transitive\u003c/a\u003e\u003c/code\u003e check the basic\n  properties of an equity relation. In other words, they test the\n  \u003ccode\u003e\u003ca\u003e==\u003c/a\u003e\u003c/code\u003e method. \u003ccode\u003e\u003ca\u003ep_not_equal\u003c/a\u003e\u003c/code\u003e checks for the extraordinarily unlikely\n  case of \u003ccode\u003e\u003ca\u003e==\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003e/=\u003c/a\u003e\u003c/code\u003e not agreeing on equity. (The default\n  implementation of \u003ccode\u003e\u003ca\u003e/=\u003c/a\u003e\u003c/code\u003e automatically guarantees that this test\n  will pass, and that's what most people presumably use.)\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Test.AC.Class.Eq",
        "fct-package": "AC-MiniTest",
        "fct-signature": "module",
        "fct-source": "src/Test-AC-Class-Eq.html",
        "fct-type": "module",
        "title": "Eq"
      },
      "index": {
        "description": "Properties for testing that instances of the Eq class perform correctly reflexive symmetric and transitive check the basic properties of an equity relation In other words they test the method not equal checks for the extraordinarily unlikely case of and not agreeing on equity The default implementation of automatically guarantees that this test will pass and that what most people presumably use",
        "hierarchy": "Test AC Class Eq",
        "module": "Test.AC.Class.Eq",
        "name": "Eq",
        "normalized": "",
        "package": "AC-MiniTest",
        "partial": "Eq",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AC-MiniTest/docs/Test-AC-Class-Eq.html#v:p_Eq",
      "description": {
        "fct-descr": "\u003cp\u003eGiven a list of \u003cem\u003edistinct\u003c/em\u003e values, perform all applicable tests\n  on all possible combinations of inputs. (If the inputs are not\n  distinct, some redundant tests are performed.)\n\u003c/p\u003e",
        "fct-module": "Test.AC.Class.Eq",
        "fct-package": "AC-MiniTest",
        "fct-signature": "[x] -\u003e Test",
        "fct-source": "src/Test-AC-Class-Eq.html#p_Eq",
        "fct-type": "function",
        "title": "p_Eq"
      },
      "index": {
        "description": "Given list of distinct values perform all applicable tests on all possible combinations of inputs If the inputs are not distinct some redundant tests are performed",
        "hierarchy": "Test AC Class Eq",
        "module": "Test.AC.Class.Eq",
        "name": "p_Eq",
        "normalized": "[a]-\u003eTest",
        "package": "AC-MiniTest",
        "partial": "Eq",
        "signature": "[x]-\u003eTest"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AC-MiniTest/docs/Test-AC-Class-Eq.html#v:p_not_equal",
      "description": {
        "fct-descr": "\u003cp\u003eCheck that \u003ccode\u003ex /= y\u003c/code\u003e is the same as \u003ccode\u003enot (x == y)\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Test.AC.Class.Eq",
        "fct-package": "AC-MiniTest",
        "fct-signature": "x -\u003e x -\u003e Test",
        "fct-source": "src/Test-AC-Class-Eq.html#p_not_equal",
        "fct-type": "function",
        "title": "p_not_equal"
      },
      "index": {
        "description": "Check that is the same as not",
        "hierarchy": "Test AC Class Eq",
        "module": "Test.AC.Class.Eq",
        "name": "p_not_equal",
        "normalized": "a-\u003ea-\u003eTest",
        "package": "AC-MiniTest",
        "partial": "",
        "signature": "x-\u003ex-\u003eTest"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AC-MiniTest/docs/Test-AC-Class-Eq.html#v:p_reflexive",
      "description": {
        "fct-descr": "\u003cp\u003eCheck that \u003ccode\u003ex == x\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Test.AC.Class.Eq",
        "fct-package": "AC-MiniTest",
        "fct-signature": "x -\u003e Test",
        "fct-source": "src/Test-AC-Class-Eq.html#p_reflexive",
        "fct-type": "function",
        "title": "p_reflexive"
      },
      "index": {
        "description": "Check that",
        "hierarchy": "Test AC Class Eq",
        "module": "Test.AC.Class.Eq",
        "name": "p_reflexive",
        "normalized": "a-\u003eTest",
        "package": "AC-MiniTest",
        "partial": "",
        "signature": "x-\u003eTest"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AC-MiniTest/docs/Test-AC-Class-Eq.html#v:p_symmetric",
      "description": {
        "fct-descr": "\u003cp\u003eCheck that if \u003ccode\u003ex == y\u003c/code\u003e then \u003ccode\u003ey == x\u003c/code\u003e as well.\n\u003c/p\u003e",
        "fct-module": "Test.AC.Class.Eq",
        "fct-package": "AC-MiniTest",
        "fct-signature": "x -\u003e x -\u003e Test",
        "fct-source": "src/Test-AC-Class-Eq.html#p_symmetric",
        "fct-type": "function",
        "title": "p_symmetric"
      },
      "index": {
        "description": "Check that if then as well",
        "hierarchy": "Test AC Class Eq",
        "module": "Test.AC.Class.Eq",
        "name": "p_symmetric",
        "normalized": "a-\u003ea-\u003eTest",
        "package": "AC-MiniTest",
        "partial": "",
        "signature": "x-\u003ex-\u003eTest"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AC-MiniTest/docs/Test-AC-Class-Eq.html#v:p_transitive",
      "description": {
        "fct-descr": "\u003cp\u003eCheck that if \u003ccode\u003ex == y\u003c/code\u003e and \u003ccode\u003ey == z\u003c/code\u003e then \u003ccode\u003ex == z\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Test.AC.Class.Eq",
        "fct-package": "AC-MiniTest",
        "fct-signature": "x -\u003e x -\u003e x -\u003e Test",
        "fct-source": "src/Test-AC-Class-Eq.html#p_transitive",
        "fct-type": "function",
        "title": "p_transitive"
      },
      "index": {
        "description": "Check that if and then",
        "hierarchy": "Test AC Class Eq",
        "module": "Test.AC.Class.Eq",
        "name": "p_transitive",
        "normalized": "a-\u003ea-\u003ea-\u003eTest",
        "package": "AC-MiniTest",
        "partial": "",
        "signature": "x-\u003ex-\u003ex-\u003eTest"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AC-MiniTest/docs/Test-AC-Class-Functor.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eProperties for testing that instances of the \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e class\n  perform correctly.\n\u003c/p\u003e\u003cp\u003eThis testing requires an \u003ccode\u003e\u003ca\u003eEq\u003c/a\u003e\u003c/code\u003e instance, which not all \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003es\n  actually have. It also requires a \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e instance, which is also\n  uncommon. The \u003ccode\u003e\u003ca\u003eLabel1\u003c/a\u003e\u003c/code\u003e wrapper may be useful in dealing with the\n  \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e requirement.\n\u003c/p\u003e\u003cp\u003eTests are supplied both in regular \"unlabelled\" form, and also\n  in a special \"labelled\" form, where function objects have\n  \u003ccode\u003e\u003ca\u003eLabel\u003c/a\u003e\u003c/code\u003es attached to them. Because of this, the function used for\n  each test can be recorded in the test log, which can be quite\n  helpful.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Test.AC.Class.Functor",
        "fct-package": "AC-MiniTest",
        "fct-signature": "module",
        "fct-source": "src/Test-AC-Class-Functor.html",
        "fct-type": "module",
        "title": "Functor"
      },
      "index": {
        "description": "Properties for testing that instances of the Functor class perform correctly This testing requires an Eq instance which not all Functor actually have It also requires Show instance which is also uncommon The Label1 wrapper may be useful in dealing with the Show requirement Tests are supplied both in regular unlabelled form and also in special labelled form where function objects have Label attached to them Because of this the function used for each test can be recorded in the test log which can be quite helpful",
        "hierarchy": "Test AC Class Functor",
        "module": "Test.AC.Class.Functor",
        "name": "Functor",
        "normalized": "",
        "package": "AC-MiniTest",
        "partial": "Functor",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AC-MiniTest/docs/Test-AC-Class-Functor.html#v:p_Functor",
      "description": {
        "fct-descr": "\u003cp\u003eGiven a list of \u003cem\u003edistinct\u003c/em\u003e \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e values and functions, perform\n  all tests on all combinations of inputs. (If the inputs are not\n  distinct, some redundant tests will be performed.)\n\u003c/p\u003e\u003cp\u003eThe argument types are somewhat constrained to keep the type\n  signature reasonably simple.\n\u003c/p\u003e",
        "fct-module": "Test.AC.Class.Functor",
        "fct-package": "AC-MiniTest",
        "fct-signature": "[f x] -\u003e [x -\u003e x] -\u003e Test",
        "fct-source": "src/Test-AC-Class-Functor.html#p_Functor",
        "fct-type": "function",
        "title": "p_Functor"
      },
      "index": {
        "description": "Given list of distinct Functor values and functions perform all tests on all combinations of inputs If the inputs are not distinct some redundant tests will be performed The argument types are somewhat constrained to keep the type signature reasonably simple",
        "hierarchy": "Test AC Class Functor",
        "module": "Test.AC.Class.Functor",
        "name": "p_Functor",
        "normalized": "[a b]-\u003e[b-\u003eb]-\u003eTest",
        "package": "AC-MiniTest",
        "partial": "Functor",
        "signature": "[f x]-\u003e[x-\u003ex]-\u003eTest"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AC-MiniTest/docs/Test-AC-Class-Functor.html#v:p_Functor_L",
      "description": {
        "fct-descr": "\u003cp\u003eGiven a list of \u003cem\u003edistinct\u003c/em\u003e \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e values and functions, perform\n  all tests on all combinations of inputs. (If the inputs are not\n  distinct, some redundant tests will be performed.)\n\u003c/p\u003e\u003cp\u003eThe argument types are somewhat constrained to keep the function's\n  type signature reasonably simple.\n\u003c/p\u003e",
        "fct-module": "Test.AC.Class.Functor",
        "fct-package": "AC-MiniTest",
        "fct-signature": "[f x] -\u003e [Label (x -\u003e x)] -\u003e Test",
        "fct-source": "src/Test-AC-Class-Functor.html#p_Functor_L",
        "fct-type": "function",
        "title": "p_Functor_L"
      },
      "index": {
        "description": "Given list of distinct Functor values and functions perform all tests on all combinations of inputs If the inputs are not distinct some redundant tests will be performed The argument types are somewhat constrained to keep the function type signature reasonably simple",
        "hierarchy": "Test AC Class Functor",
        "module": "Test.AC.Class.Functor",
        "name": "p_Functor_L",
        "normalized": "[a b]-\u003e[Label(b-\u003eb)]-\u003eTest",
        "package": "AC-MiniTest",
        "partial": "Functor",
        "signature": "[f x]-\u003e[Label(x-\u003ex)]-\u003eTest"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AC-MiniTest/docs/Test-AC-Class-Functor.html#v:p_map_compose",
      "description": {
        "fct-descr": "\u003cp\u003eCheck that \u003ccode\u003e\u003ccode\u003e\u003ca\u003efmap\u003c/a\u003e\u003c/code\u003e (f \u003ccode\u003e\u003ca\u003e.\u003c/a\u003e\u003c/code\u003e g) \u003ccode\u003e\u003ca\u003e==\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003efmap\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ef\u003c/code\u003e \u003ccode\u003e\u003ca\u003e.\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003efmap\u003c/a\u003e\u003c/code\u003e g\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Test.AC.Class.Functor",
        "fct-package": "AC-MiniTest",
        "fct-signature": "f x -\u003e (x -\u003e y) -\u003e (y -\u003e z) -\u003e Test",
        "fct-source": "src/Test-AC-Class-Functor.html#p_map_compose",
        "fct-type": "function",
        "title": "p_map_compose"
      },
      "index": {
        "description": "Check that fmap fmap fmap",
        "hierarchy": "Test AC Class Functor",
        "module": "Test.AC.Class.Functor",
        "name": "p_map_compose",
        "normalized": "a b-\u003e(b-\u003ec)-\u003e(c-\u003ed)-\u003eTest",
        "package": "AC-MiniTest",
        "partial": "",
        "signature": "f x-\u003e(x-\u003ey)-\u003e(y-\u003ez)-\u003eTest"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AC-MiniTest/docs/Test-AC-Class-Functor.html#v:p_map_compose_L",
      "description": {
        "fct-descr": "\u003cp\u003eCheck that \u003ccode\u003e\u003ccode\u003e\u003ca\u003efmap\u003c/a\u003e\u003c/code\u003e (f \u003ccode\u003e\u003ca\u003e.\u003c/a\u003e\u003c/code\u003e g) \u003ccode\u003e\u003ca\u003e==\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003efmap\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ef\u003c/code\u003e \u003ccode\u003e\u003ca\u003e.\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003efmap\u003c/a\u003e\u003c/code\u003e g\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Test.AC.Class.Functor",
        "fct-package": "AC-MiniTest",
        "fct-signature": "f x -\u003e Label (x -\u003e y) -\u003e Label (y -\u003e z) -\u003e Test",
        "fct-source": "src/Test-AC-Class-Functor.html#p_map_compose_L",
        "fct-type": "function",
        "title": "p_map_compose_L"
      },
      "index": {
        "description": "Check that fmap fmap fmap",
        "hierarchy": "Test AC Class Functor",
        "module": "Test.AC.Class.Functor",
        "name": "p_map_compose_L",
        "normalized": "a b-\u003eLabel(b-\u003ec)-\u003eLabel(c-\u003ed)-\u003eTest",
        "package": "AC-MiniTest",
        "partial": "",
        "signature": "f x-\u003eLabel(x-\u003ey)-\u003eLabel(y-\u003ez)-\u003eTest"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AC-MiniTest/docs/Test-AC-Class-Functor.html#v:p_map_id",
      "description": {
        "fct-descr": "\u003cp\u003eCheck that \u003ccode\u003e\u003ccode\u003e\u003ca\u003efmap\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eid\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003e==\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eid\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Test.AC.Class.Functor",
        "fct-package": "AC-MiniTest",
        "fct-signature": "f x -\u003e Test",
        "fct-source": "src/Test-AC-Class-Functor.html#p_map_id",
        "fct-type": "function",
        "title": "p_map_id"
      },
      "index": {
        "description": "Check that fmap id id",
        "hierarchy": "Test AC Class Functor",
        "module": "Test.AC.Class.Functor",
        "name": "p_map_id",
        "normalized": "a b-\u003eTest",
        "package": "AC-MiniTest",
        "partial": "",
        "signature": "f x-\u003eTest"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AC-MiniTest/docs/Test-AC-Class-Monad.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eProperties for testing that instances of the \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e class\n  perform correctly.\n\u003c/p\u003e\u003cp\u003eThis testing requires an \u003ccode\u003e\u003ca\u003eEq\u003c/a\u003e\u003c/code\u003e instance, which not all \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003es\n  actually have. It also requires a \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e instance, which is also\n  uncommon. The \u003ccode\u003e\u003ca\u003eLabel1\u003c/a\u003e\u003c/code\u003e wrapper may be useful in dealing with the\n  \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e requirement.\n\u003c/p\u003e\u003cp\u003eTests are supplied both in regular \"unlabelled\" form, and also\n  in a special \"labelled\" form, where function objects have\n  \u003ccode\u003e\u003ca\u003eLabel\u003c/a\u003e\u003c/code\u003es attached to them. Because of this, the function used for\n  each test can be recorded in the test log, which can be quite\n  helpful.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Test.AC.Class.Monad",
        "fct-package": "AC-MiniTest",
        "fct-signature": "module",
        "fct-source": "src/Test-AC-Class-Monad.html",
        "fct-type": "module",
        "title": "Monad"
      },
      "index": {
        "description": "Properties for testing that instances of the Monad class perform correctly This testing requires an Eq instance which not all Monad actually have It also requires Show instance which is also uncommon The Label1 wrapper may be useful in dealing with the Show requirement Tests are supplied both in regular unlabelled form and also in special labelled form where function objects have Label attached to them Because of this the function used for each test can be recorded in the test log which can be quite helpful",
        "hierarchy": "Test AC Class Monad",
        "module": "Test.AC.Class.Monad",
        "name": "Monad",
        "normalized": "",
        "package": "AC-MiniTest",
        "partial": "Monad",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AC-MiniTest/docs/Test-AC-Class-Monad.html#v:p_Functor_Monad",
      "description": {
        "fct-descr": "\u003cp\u003eCheck that \u003ccode\u003efmap f mx \u003ccode\u003e\u003ca\u003e==\u003c/a\u003e\u003c/code\u003e mx \u003e\u003e= return . f\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Test.AC.Class.Monad",
        "fct-package": "AC-MiniTest",
        "fct-signature": "m x -\u003e (x -\u003e y) -\u003e Test",
        "fct-source": "src/Test-AC-Class-Monad.html#p_Functor_Monad",
        "fct-type": "function",
        "title": "p_Functor_Monad"
      },
      "index": {
        "description": "Check that fmap mx mx return",
        "hierarchy": "Test AC Class Monad",
        "module": "Test.AC.Class.Monad",
        "name": "p_Functor_Monad",
        "normalized": "a b-\u003e(b-\u003ec)-\u003eTest",
        "package": "AC-MiniTest",
        "partial": "Functor Monad",
        "signature": "m x-\u003e(x-\u003ey)-\u003eTest"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AC-MiniTest/docs/Test-AC-Class-Monad.html#v:p_Functor_Monad_L",
      "description": {
        "fct-descr": "\u003cp\u003eCheck that \u003ccode\u003efmap f mx \u003ccode\u003e\u003ca\u003e==\u003c/a\u003e\u003c/code\u003e mx \u003e\u003e= return . f\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Test.AC.Class.Monad",
        "fct-package": "AC-MiniTest",
        "fct-signature": "m x -\u003e Label (x -\u003e y) -\u003e Test",
        "fct-source": "src/Test-AC-Class-Monad.html#p_Functor_Monad_L",
        "fct-type": "function",
        "title": "p_Functor_Monad_L"
      },
      "index": {
        "description": "Check that fmap mx mx return",
        "hierarchy": "Test AC Class Monad",
        "module": "Test.AC.Class.Monad",
        "name": "p_Functor_Monad_L",
        "normalized": "a b-\u003eLabel(b-\u003ec)-\u003eTest",
        "package": "AC-MiniTest",
        "partial": "Functor Monad",
        "signature": "m x-\u003eLabel(x-\u003ey)-\u003eTest"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AC-MiniTest/docs/Test-AC-Class-Monad.html#v:p_Monad",
      "description": {
        "fct-descr": "\u003cp\u003eGiven a list of \u003cem\u003edistinct\u003c/em\u003e inputs, run all applicable \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e\n  tests on all combinations of inputs. (If the inputs are not\n  distinct, some redundant tests will be performed.)\n\u003c/p\u003e\u003cp\u003eThe argument types have been constrainted a bit to keep the\n  function's type signature reasonably simple.\n\u003c/p\u003e",
        "fct-module": "Test.AC.Class.Monad",
        "fct-package": "AC-MiniTest",
        "fct-signature": "[x] -\u003e [x -\u003e m x] -\u003e [m x] -\u003e Test",
        "fct-source": "src/Test-AC-Class-Monad.html#p_Monad",
        "fct-type": "function",
        "title": "p_Monad"
      },
      "index": {
        "description": "Given list of distinct inputs run all applicable Monad tests on all combinations of inputs If the inputs are not distinct some redundant tests will be performed The argument types have been constrainted bit to keep the function type signature reasonably simple",
        "hierarchy": "Test AC Class Monad",
        "module": "Test.AC.Class.Monad",
        "name": "p_Monad",
        "normalized": "[a]-\u003e[a-\u003eb a]-\u003e[b a]-\u003eTest",
        "package": "AC-MiniTest",
        "partial": "Monad",
        "signature": "[x]-\u003e[x-\u003em x]-\u003e[m x]-\u003eTest"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AC-MiniTest/docs/Test-AC-Class-Monad.html#v:p_Monad_L",
      "description": {
        "fct-descr": "\u003cp\u003eGiven a list of \u003cem\u003edistinct\u003c/em\u003e inputs, run all applicable \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e\n  tests on all combinations of inputs. (If the inputs are not\n  distinct, some redundant tests will be performed.)\n\u003c/p\u003e\u003cp\u003eThe argument types have been constrainted a bit to keep the\n  function's type signature reasonably simple.\n\u003c/p\u003e",
        "fct-module": "Test.AC.Class.Monad",
        "fct-package": "AC-MiniTest",
        "fct-signature": "[x] -\u003e [Label (x -\u003e m x)] -\u003e [m x] -\u003e Test",
        "fct-source": "src/Test-AC-Class-Monad.html#p_Monad_L",
        "fct-type": "function",
        "title": "p_Monad_L"
      },
      "index": {
        "description": "Given list of distinct inputs run all applicable Monad tests on all combinations of inputs If the inputs are not distinct some redundant tests will be performed The argument types have been constrainted bit to keep the function type signature reasonably simple",
        "hierarchy": "Test AC Class Monad",
        "module": "Test.AC.Class.Monad",
        "name": "p_Monad_L",
        "normalized": "[a]-\u003e[Label(a-\u003eb a)]-\u003e[b a]-\u003eTest",
        "package": "AC-MiniTest",
        "partial": "Monad",
        "signature": "[x]-\u003e[Label(x-\u003em x)]-\u003e[m x]-\u003eTest"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AC-MiniTest/docs/Test-AC-Class-Monad.html#v:p_bind_associative",
      "description": {
        "fct-descr": "\u003cp\u003eCheck that \u003ccode\u003e\u003ca\u003e\u003e\u003e=\u003c/a\u003e\u003c/code\u003e is associative.\n\u003c/p\u003e\u003cp\u003eApproximately, \u003ccode\u003emx \u003e\u003e= (f \u003e\u003e= g) \u003ccode\u003e\u003ca\u003e==\u003c/a\u003e\u003c/code\u003e (mx \u003e\u003e= f) \u003e\u003e= g\u003c/code\u003e, but that\n  doesn't type-check. To be exact,\n  \u003ccode\u003emx \u003e\u003e= (\\ x -\u003e f x \u003e\u003e= g) \u003ccode\u003e\u003ca\u003e==\u003c/a\u003e\u003c/code\u003e (mx \u003e\u003e= f) \u003e\u003e= g\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Test.AC.Class.Monad",
        "fct-package": "AC-MiniTest",
        "fct-signature": "m x -\u003e (x -\u003e m y) -\u003e (y -\u003e m z) -\u003e Test",
        "fct-source": "src/Test-AC-Class-Monad.html#p_bind_associative",
        "fct-type": "function",
        "title": "p_bind_associative"
      },
      "index": {
        "description": "Check that is associative Approximately mx mx but that doesn type-check To be exact mx mx",
        "hierarchy": "Test AC Class Monad",
        "module": "Test.AC.Class.Monad",
        "name": "p_bind_associative",
        "normalized": "a b-\u003e(b-\u003ea c)-\u003e(c-\u003ea d)-\u003eTest",
        "package": "AC-MiniTest",
        "partial": "",
        "signature": "m x-\u003e(x-\u003em y)-\u003e(y-\u003em z)-\u003eTest"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AC-MiniTest/docs/Test-AC-Class-Monad.html#v:p_bind_associative_L",
      "description": {
        "fct-descr": "\u003cp\u003eCheck that \u003ccode\u003e\u003ca\u003e\u003e\u003e=\u003c/a\u003e\u003c/code\u003e is associative.\n\u003c/p\u003e\u003cp\u003eApproximately, \u003ccode\u003emx \u003e\u003e= (f \u003e\u003e= g) \u003ccode\u003e\u003ca\u003e==\u003c/a\u003e\u003c/code\u003e (mx \u003e\u003e= f) \u003e\u003e= g\u003c/code\u003e, but that\n  doesn't type-check. To be exact,\n  \u003ccode\u003emx \u003e\u003e= (\\ x -\u003e f x \u003e\u003e= g) \u003ccode\u003e\u003ca\u003e==\u003c/a\u003e\u003c/code\u003e (mx \u003e\u003e= f) \u003e\u003e= g\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Test.AC.Class.Monad",
        "fct-package": "AC-MiniTest",
        "fct-signature": "m x -\u003e Label (x -\u003e m y) -\u003e Label (y -\u003e m z) -\u003e Test",
        "fct-source": "src/Test-AC-Class-Monad.html#p_bind_associative_L",
        "fct-type": "function",
        "title": "p_bind_associative_L"
      },
      "index": {
        "description": "Check that is associative Approximately mx mx but that doesn type-check To be exact mx mx",
        "hierarchy": "Test AC Class Monad",
        "module": "Test.AC.Class.Monad",
        "name": "p_bind_associative_L",
        "normalized": "a b-\u003eLabel(b-\u003ea c)-\u003eLabel(c-\u003ea d)-\u003eTest",
        "package": "AC-MiniTest",
        "partial": "",
        "signature": "m x-\u003eLabel(x-\u003em y)-\u003eLabel(y-\u003em z)-\u003eTest"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AC-MiniTest/docs/Test-AC-Class-Monad.html#v:p_bind_return",
      "description": {
        "fct-descr": "\u003cp\u003eCheck that \u003ccode\u003emx \u003e\u003e= return \u003ccode\u003e\u003ca\u003e==\u003c/a\u003e\u003c/code\u003e mx\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Test.AC.Class.Monad",
        "fct-package": "AC-MiniTest",
        "fct-signature": "m x -\u003e Test",
        "fct-source": "src/Test-AC-Class-Monad.html#p_bind_return",
        "fct-type": "function",
        "title": "p_bind_return"
      },
      "index": {
        "description": "Check that mx return mx",
        "hierarchy": "Test AC Class Monad",
        "module": "Test.AC.Class.Monad",
        "name": "p_bind_return",
        "normalized": "a b-\u003eTest",
        "package": "AC-MiniTest",
        "partial": "",
        "signature": "m x-\u003eTest"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AC-MiniTest/docs/Test-AC-Class-Monad.html#v:p_return_bind",
      "description": {
        "fct-descr": "\u003cp\u003eCheck that \u003ccode\u003ereturn x \u003e\u003e= f \u003ccode\u003e\u003ca\u003e==\u003c/a\u003e\u003c/code\u003e f x\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Test.AC.Class.Monad",
        "fct-package": "AC-MiniTest",
        "fct-signature": "x -\u003e (x -\u003e m y) -\u003e Test",
        "fct-source": "src/Test-AC-Class-Monad.html#p_return_bind",
        "fct-type": "function",
        "title": "p_return_bind"
      },
      "index": {
        "description": "Check that return",
        "hierarchy": "Test AC Class Monad",
        "module": "Test.AC.Class.Monad",
        "name": "p_return_bind",
        "normalized": "a-\u003e(a-\u003eb c)-\u003eTest",
        "package": "AC-MiniTest",
        "partial": "",
        "signature": "x-\u003e(x-\u003em y)-\u003eTest"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AC-MiniTest/docs/Test-AC-Class-Monad.html#v:p_return_bind_L",
      "description": {
        "fct-descr": "\u003cp\u003eCheck that \u003ccode\u003ereturn x \u003e\u003e= f \u003ccode\u003e\u003ca\u003e==\u003c/a\u003e\u003c/code\u003e f x\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Test.AC.Class.Monad",
        "fct-package": "AC-MiniTest",
        "fct-signature": "x -\u003e Label (x -\u003e m y) -\u003e Test",
        "fct-source": "src/Test-AC-Class-Monad.html#p_return_bind_L",
        "fct-type": "function",
        "title": "p_return_bind_L"
      },
      "index": {
        "description": "Check that return",
        "hierarchy": "Test AC Class Monad",
        "module": "Test.AC.Class.Monad",
        "name": "p_return_bind_L",
        "normalized": "a-\u003eLabel(a-\u003eb c)-\u003eTest",
        "package": "AC-MiniTest",
        "partial": "",
        "signature": "x-\u003eLabel(x-\u003em y)-\u003eTest"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AC-MiniTest/docs/Test-AC-Class-Ord.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eProperties for testing that instances of the \u003ccode\u003e\u003ca\u003eOrd\u003c/a\u003e\u003c/code\u003e class perform\n  correctly.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003ep_symmetric\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003ep_transitive\u003c/a\u003e\u003c/code\u003e check the basic properties of the\n  ordering. In other words, they test the \u003ccode\u003e\u003ca\u003ecompare\u003c/a\u003e\u003c/code\u003e method. \u003ccode\u003e\u003ca\u003ep_equal\u003c/a\u003e\u003c/code\u003e\n  checks that \u003ccode\u003e\u003ca\u003eOrd\u003c/a\u003e\u003c/code\u003e agrees with \u003ccode\u003e\u003ca\u003eEq\u003c/a\u003e\u003c/code\u003e (that is, \u003ccode\u003e\u003ca\u003ecompare\u003c/a\u003e\u003c/code\u003e returns \u003ccode\u003e\u003ca\u003eEQ\u003c/a\u003e\u003c/code\u003e\n  when \u003ccode\u003e\u003ca\u003e==\u003c/a\u003e\u003c/code\u003e returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e). The \u003ca\u003eTest.AC.Class.Eq\u003c/a\u003e module already\n  checks that \u003ccode\u003e\u003ca\u003eEq\u003c/a\u003e\u003c/code\u003e is reflexive, so if \u003ccode\u003e\u003ca\u003eOrd\u003c/a\u003e\u003c/code\u003e agrees with \u003ccode\u003e\u003ca\u003eEq\u003c/a\u003e\u003c/code\u003e then\n  \u003ccode\u003e\u003ca\u003eOrd\u003c/a\u003e\u003c/code\u003e too is reflexive, and we don't need a seperate test for that.\n  The remaining tests (i.e., \u003ccode\u003e\u003ca\u003ep_compare\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ep_min\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003ep_max\u003c/a\u003e\u003c/code\u003e) check\n  for the extraordinarily unlikely case that the various \u003ccode\u003e\u003ca\u003eOrd\u003c/a\u003e\u003c/code\u003e\n  methods do not agree with each other. (Usually they are implemented\n  in terms of each other.)\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Test.AC.Class.Ord",
        "fct-package": "AC-MiniTest",
        "fct-signature": "module",
        "fct-source": "src/Test-AC-Class-Ord.html",
        "fct-type": "module",
        "title": "Ord"
      },
      "index": {
        "description": "Properties for testing that instances of the Ord class perform correctly symmetric and transitive check the basic properties of the ordering In other words they test the compare method equal checks that Ord agrees with Eq that is compare returns EQ when returns True The Test.AC.Class.Eq module already checks that Eq is reflexive so if Ord agrees with Eq then Ord too is reflexive and we don need seperate test for that The remaining tests i.e compare min and max check for the extraordinarily unlikely case that the various Ord methods do not agree with each other Usually they are implemented in terms of each other",
        "hierarchy": "Test AC Class Ord",
        "module": "Test.AC.Class.Ord",
        "name": "Ord",
        "normalized": "",
        "package": "AC-MiniTest",
        "partial": "Ord",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AC-MiniTest/docs/Test-AC-Class-Ord.html#v:p_Ord",
      "description": {
        "fct-descr": "\u003cp\u003eGiven a list of \u003cem\u003edistinct\u003c/em\u003e values, perform all applicable tests\n  on all possible combinations of inputs. (If the inputs are not\n  distinct, some redundant tests are performed.)\n\u003c/p\u003e",
        "fct-module": "Test.AC.Class.Ord",
        "fct-package": "AC-MiniTest",
        "fct-signature": "[x] -\u003e Test",
        "fct-source": "src/Test-AC-Class-Ord.html#p_Ord",
        "fct-type": "function",
        "title": "p_Ord"
      },
      "index": {
        "description": "Given list of distinct values perform all applicable tests on all possible combinations of inputs If the inputs are not distinct some redundant tests are performed",
        "hierarchy": "Test AC Class Ord",
        "module": "Test.AC.Class.Ord",
        "name": "p_Ord",
        "normalized": "[a]-\u003eTest",
        "package": "AC-MiniTest",
        "partial": "Ord",
        "signature": "[x]-\u003eTest"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AC-MiniTest/docs/Test-AC-Class-Ord.html#v:p_compare",
      "description": {
        "fct-descr": "\u003cp\u003eCheck that \u003ccode\u003e\u003ca\u003ecompare\u003c/a\u003e\u003c/code\u003e agrees with \u003ccode\u003e\u003ca\u003e\u003e\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003e\u003c\u003c/a\u003e\u003c/code\u003e, etc.\n\u003c/p\u003e",
        "fct-module": "Test.AC.Class.Ord",
        "fct-package": "AC-MiniTest",
        "fct-signature": "x -\u003e x -\u003e Test",
        "fct-source": "src/Test-AC-Class-Ord.html#p_compare",
        "fct-type": "function",
        "title": "p_compare"
      },
      "index": {
        "description": "Check that compare agrees with etc",
        "hierarchy": "Test AC Class Ord",
        "module": "Test.AC.Class.Ord",
        "name": "p_compare",
        "normalized": "a-\u003ea-\u003eTest",
        "package": "AC-MiniTest",
        "partial": "",
        "signature": "x-\u003ex-\u003eTest"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AC-MiniTest/docs/Test-AC-Class-Ord.html#v:p_equal",
      "description": {
        "fct-descr": "\u003cp\u003eCheck that \u003ccode\u003e\u003ca\u003ecompare\u003c/a\u003e\u003c/code\u003e agrees with \u003ccode\u003e\u003ca\u003e==\u003c/a\u003e\u003c/code\u003e on equity.\n\u003c/p\u003e",
        "fct-module": "Test.AC.Class.Ord",
        "fct-package": "AC-MiniTest",
        "fct-signature": "x -\u003e x -\u003e Test",
        "fct-source": "src/Test-AC-Class-Ord.html#p_equal",
        "fct-type": "function",
        "title": "p_equal"
      },
      "index": {
        "description": "Check that compare agrees with on equity",
        "hierarchy": "Test AC Class Ord",
        "module": "Test.AC.Class.Ord",
        "name": "p_equal",
        "normalized": "a-\u003ea-\u003eTest",
        "package": "AC-MiniTest",
        "partial": "",
        "signature": "x-\u003ex-\u003eTest"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AC-MiniTest/docs/Test-AC-Class-Ord.html#v:p_max",
      "description": {
        "fct-descr": "\u003cp\u003eCheck that \u003ccode\u003e\u003ca\u003emax\u003c/a\u003e\u003c/code\u003e works correctly.\n\u003c/p\u003e",
        "fct-module": "Test.AC.Class.Ord",
        "fct-package": "AC-MiniTest",
        "fct-signature": "x -\u003e x -\u003e Test",
        "fct-source": "src/Test-AC-Class-Ord.html#p_max",
        "fct-type": "function",
        "title": "p_max"
      },
      "index": {
        "description": "Check that max works correctly",
        "hierarchy": "Test AC Class Ord",
        "module": "Test.AC.Class.Ord",
        "name": "p_max",
        "normalized": "a-\u003ea-\u003eTest",
        "package": "AC-MiniTest",
        "partial": "",
        "signature": "x-\u003ex-\u003eTest"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AC-MiniTest/docs/Test-AC-Class-Ord.html#v:p_min",
      "description": {
        "fct-descr": "\u003cp\u003eCheck that \u003ccode\u003e\u003ca\u003emin\u003c/a\u003e\u003c/code\u003e works correctly.\n\u003c/p\u003e",
        "fct-module": "Test.AC.Class.Ord",
        "fct-package": "AC-MiniTest",
        "fct-signature": "x -\u003e x -\u003e Test",
        "fct-source": "src/Test-AC-Class-Ord.html#p_min",
        "fct-type": "function",
        "title": "p_min"
      },
      "index": {
        "description": "Check that min works correctly",
        "hierarchy": "Test AC Class Ord",
        "module": "Test.AC.Class.Ord",
        "name": "p_min",
        "normalized": "a-\u003ea-\u003eTest",
        "package": "AC-MiniTest",
        "partial": "",
        "signature": "x-\u003ex-\u003eTest"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AC-MiniTest/docs/Test-AC-Class-Ord.html#v:p_symmetric",
      "description": {
        "fct-descr": "\u003cp\u003eCheck that swapping the arguments to \u003ccode\u003e\u003ca\u003ecompare\u003c/a\u003e\u003c/code\u003e works correctly.\n\u003c/p\u003e",
        "fct-module": "Test.AC.Class.Ord",
        "fct-package": "AC-MiniTest",
        "fct-signature": "x -\u003e x -\u003e Test",
        "fct-source": "src/Test-AC-Class-Ord.html#p_symmetric",
        "fct-type": "function",
        "title": "p_symmetric"
      },
      "index": {
        "description": "Check that swapping the arguments to compare works correctly",
        "hierarchy": "Test AC Class Ord",
        "module": "Test.AC.Class.Ord",
        "name": "p_symmetric",
        "normalized": "a-\u003ea-\u003eTest",
        "package": "AC-MiniTest",
        "partial": "",
        "signature": "x-\u003ex-\u003eTest"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AC-MiniTest/docs/Test-AC-Class-Ord.html#v:p_transitive",
      "description": {
        "fct-descr": "\u003cp\u003eCheck that if \u003ccode\u003ex \u003c y\u003c/code\u003e and \u003ccode\u003ey \u003c z\u003c/code\u003e then \u003ccode\u003ex \u003c z\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Test.AC.Class.Ord",
        "fct-package": "AC-MiniTest",
        "fct-signature": "x -\u003e x -\u003e x -\u003e Test",
        "fct-source": "src/Test-AC-Class-Ord.html#p_transitive",
        "fct-type": "function",
        "title": "p_transitive"
      },
      "index": {
        "description": "Check that if and then",
        "hierarchy": "Test AC Class Ord",
        "module": "Test.AC.Class.Ord",
        "name": "p_transitive",
        "normalized": "a-\u003ea-\u003ea-\u003eTest",
        "package": "AC-MiniTest",
        "partial": "",
        "signature": "x-\u003ex-\u003ex-\u003eTest"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AC-MiniTest/docs/Test-AC-Label.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDefines the \u003ccode\u003e\u003ca\u003eLabel\u003c/a\u003e\u003c/code\u003e type, for making values \u003ccode\u003e\u003ca\u003eshow\u003c/a\u003e\u003c/code\u003eable.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Test.AC.Label",
        "fct-package": "AC-MiniTest",
        "fct-signature": "module",
        "fct-source": "src/Test-AC-Label.html",
        "fct-type": "module",
        "title": "Label"
      },
      "index": {
        "description": "Defines the Label type for making values show able",
        "hierarchy": "Test AC Label",
        "module": "Test.AC.Label",
        "name": "Label",
        "normalized": "",
        "package": "AC-MiniTest",
        "partial": "Label",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AC-MiniTest/docs/Test-AC-Label.html#t:Label",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003eLabel\u003c/code\u003e type.\n\u003c/p\u003e\u003cp\u003eA value of type \u003ccode\u003eLabel x\u003c/code\u003e is really a value of type \u003ccode\u003ex\u003c/code\u003e, but with\n  a textual label. The \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e instance returns this label.\n\u003c/p\u003e\u003cp\u003eThis can be tremendously useful for allowing you to \u003ccode\u003e\u003ca\u003eshow\u003c/a\u003e\u003c/code\u003e values\n  which would not otherwise be printable. For example, functions.\n  Rather than passing a function, you can pass a labelled function.\n  This allows you to know, at runtime, \u003cem\u003ewhich\u003c/em\u003e function you're\n  dealing with, which is very useful for test purposes.\n\u003c/p\u003e\u003cp\u003eYou can use \u003ccode\u003e\u003ca\u003elabel\u003c/a\u003e\u003c/code\u003e to extract the label text, and \u003ccode\u003e\u003ca\u003evalue\u003c/a\u003e\u003c/code\u003e to\n  extract the actual data value.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e instance uses the \u003ccode\u003e\u003ca\u003elabel\u003c/a\u003e\u003c/code\u003e, but the other instances use\n  only the \u003ccode\u003e\u003ca\u003evalue\u003c/a\u003e\u003c/code\u003e, ignoring the \u003ccode\u003e\u003ca\u003elabel\u003c/a\u003e\u003c/code\u003e. (In particular, any\n  operations which alter the \u003ccode\u003e\u003ca\u003evalue\u003c/a\u003e\u003c/code\u003e leave the \u003ccode\u003e\u003ca\u003elabel\u003c/a\u003e\u003c/code\u003e untouched.)\n\u003c/p\u003e",
        "fct-module": "Test.AC.Label",
        "fct-package": "AC-MiniTest",
        "fct-signature": "data",
        "fct-source": "src/Test-AC-Label.html#Label",
        "fct-type": "data",
        "title": "Label"
      },
      "index": {
        "description": "The Label type value of type Label is really value of type but with textual label The Show instance returns this label This can be tremendously useful for allowing you to show values which would not otherwise be printable For example functions Rather than passing function you can pass labelled function This allows you to know at runtime which function you re dealing with which is very useful for test purposes You can use label to extract the label text and value to extract the actual data value The Show instance uses the label but the other instances use only the value ignoring the label In particular any operations which alter the value leave the label untouched",
        "hierarchy": "Test AC Label",
        "module": "Test.AC.Label",
        "name": "Label",
        "normalized": "",
        "package": "AC-MiniTest",
        "partial": "Label",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AC-MiniTest/docs/Test-AC-Label.html#t:Label1",
      "description": {
        "fct-descr": "\u003cp\u003eThis type is similar to \u003ccode\u003e\u003ca\u003eLabel\u003c/a\u003e\u003c/code\u003e. However, \u003ccode\u003e\u003ca\u003eLabel\u003c/a\u003e\u003c/code\u003e cannot be made\n  an instance of higher-kinded classes such as \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e.\n  This type gets around that irritating limitation.\n\u003c/p\u003e",
        "fct-module": "Test.AC.Label",
        "fct-package": "AC-MiniTest",
        "fct-signature": "data",
        "fct-source": "src/Test-AC-Label.html#Label1",
        "fct-type": "data",
        "title": "Label1"
      },
      "index": {
        "description": "This type is similar to Label However Label cannot be made an instance of higher-kinded classes such as Functor and Monad This type gets around that irritating limitation",
        "hierarchy": "Test AC Label",
        "module": "Test.AC.Label",
        "name": "Label1",
        "normalized": "",
        "package": "AC-MiniTest",
        "partial": "Label",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AC-MiniTest/docs/Test-AC-Label.html#v:Label",
      "description": {
        "fct-module": "Test.AC.Label",
        "fct-package": "AC-MiniTest",
        "fct-signature": "Label",
        "fct-source": "src/Test-AC-Label.html#Label",
        "fct-type": "function",
        "title": "Label"
      },
      "index": {
        "description": "",
        "hierarchy": "Test AC Label",
        "module": "Test.AC.Label",
        "name": "Label",
        "normalized": "",
        "package": "AC-MiniTest",
        "partial": "Label",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AC-MiniTest/docs/Test-AC-Label.html#v:Label1",
      "description": {
        "fct-module": "Test.AC.Label",
        "fct-package": "AC-MiniTest",
        "fct-signature": "Label1",
        "fct-source": "src/Test-AC-Label.html#Label1",
        "fct-type": "function",
        "title": "Label1"
      },
      "index": {
        "description": "",
        "hierarchy": "Test AC Label",
        "module": "Test.AC.Label",
        "name": "Label1",
        "normalized": "",
        "package": "AC-MiniTest",
        "partial": "Label",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AC-MiniTest/docs/Test-AC-Label.html#v:label",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Test.AC.Label",
        "fct-package": "AC-MiniTest",
        "fct-signature": "String",
        "fct-source": "src/Test-AC-Label.html#Label",
        "fct-type": "function",
        "title": "label"
      },
      "index": {
        "description": "",
        "hierarchy": "Test AC Label",
        "module": "Test.AC.Label",
        "name": "label",
        "normalized": "",
        "package": "AC-MiniTest",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AC-MiniTest/docs/Test-AC-Label.html#v:label1",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Test.AC.Label",
        "fct-package": "AC-MiniTest",
        "fct-signature": "String",
        "fct-source": "src/Test-AC-Label.html#Label1",
        "fct-type": "function",
        "title": "label1"
      },
      "index": {
        "description": "",
        "hierarchy": "Test AC Label",
        "module": "Test.AC.Label",
        "name": "label1",
        "normalized": "",
        "package": "AC-MiniTest",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AC-MiniTest/docs/Test-AC-Label.html#v:value",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Test.AC.Label",
        "fct-package": "AC-MiniTest",
        "fct-signature": "!x",
        "fct-source": "src/Test-AC-Label.html#Label",
        "fct-type": "function",
        "title": "value"
      },
      "index": {
        "description": "",
        "hierarchy": "Test AC Label",
        "module": "Test.AC.Label",
        "name": "value",
        "normalized": "",
        "package": "AC-MiniTest",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AC-MiniTest/docs/Test-AC-Label.html#v:value1",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Test.AC.Label",
        "fct-package": "AC-MiniTest",
        "fct-signature": "c x1",
        "fct-source": "src/Test-AC-Label.html#Label1",
        "fct-type": "function",
        "title": "value1"
      },
      "index": {
        "description": "",
        "hierarchy": "Test AC Label",
        "module": "Test.AC.Label",
        "name": "value1",
        "normalized": "",
        "package": "AC-MiniTest",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AC-MiniTest/docs/Test-AC-Test.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis is the main testing module. Start reading here if you want to\n  know what this package is all about.\n\u003c/p\u003e\u003cp\u003eThere's a documentation section at the bottom of this page. You\n  might want to start by reading that. Otherwise, here's a quick\n  summary:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e You create \u003ccode\u003e\u003ca\u003eTest\u003c/a\u003e\u003c/code\u003e objects to represent your tests.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ccode\u003e\u003ca\u003erun_test\u003c/a\u003e\u003c/code\u003e :: \u003ccode\u003e\u003ca\u003eTest\u003c/a\u003e\u003c/code\u003e -\u003e \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eBool\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e to quickly run a test\n    interactively (e.g., during debugging activity).\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003erun_test_full\u003c/a\u003e\u003c/code\u003e allows more control, including recording detailed\n    test results to an XML log file.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ccode\u003e\u003ca\u003etest\u003c/a\u003e\u003c/code\u003e :: \u003ccode\u003e\u003ca\u003eBool\u003c/a\u003e\u003c/code\u003e -\u003e \u003ccode\u003e\u003ca\u003eTest\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e creates a test from pure code.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e(\u003ccode\u003e\u003ca\u003e?=\u003c/a\u003e\u003c/code\u003e) :: \u003ccode\u003e\u003ca\u003eEq\u003c/a\u003e\u003c/code\u003e x =\u003e x -\u003e x -\u003e \u003ccode\u003e\u003ca\u003eTest\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e for tests with known\n    answers.\n\u003c/li\u003e\u003cli\u003e Tests can be annotated with \u003ccode\u003e\u003ca\u003etitle\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eargument\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003etemporary\u003c/a\u003e\u003c/code\u003e,\n    \u003ccode\u003e\u003ca\u003enote\u003c/a\u003e\u003c/code\u003e and so on.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ccode\u003e\u003ca\u003etests\u003c/a\u003e\u003c/code\u003e :: [\u003ccode\u003e\u003ca\u003eTest\u003c/a\u003e\u003c/code\u003e] -\u003e \u003ccode\u003e\u003ca\u003eTest\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e for combining multiple tests\n    into a single \u003ccode\u003e\u003ca\u003eTest\u003c/a\u003e\u003c/code\u003e object. Tests can be nested arbitrarily\n    in this mannar to group related tests together.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ccode\u003e\u003ca\u003etestIO\u003c/a\u003e\u003c/code\u003e :: \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eBool\u003c/a\u003e\u003c/code\u003e -\u003e \u003ccode\u003e\u003ca\u003eTest\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e for tests that need to\n    perform I/O.\n\u003c/li\u003e\u003cli\u003e The \u003ccode\u003e\u003ca\u003eTestM\u003c/a\u003e\u003c/code\u003e monad supports \u003ccode\u003e\u003ca\u003eliftIO\u003c/a\u003e\u003c/code\u003e and allows limited test\n    annotations from within monadic code.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ccode\u003e\u003ca\u003etestM\u003c/a\u003e\u003c/code\u003e :: \u003ccode\u003e\u003ca\u003eTestM\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eBool\u003c/a\u003e\u003c/code\u003e -\u003e \u003ccode\u003e\u003ca\u003eTest\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e to use the \u003ccode\u003e\u003ca\u003eTestM\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003ethrows\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ethrowsIO\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ethrowsM\u003c/a\u003e\u003c/code\u003e to test for exceptions.\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
        "fct-module": "Test.AC.Test",
        "fct-package": "AC-MiniTest",
        "fct-signature": "module",
        "fct-source": "src/Test-AC-Test.html",
        "fct-type": "module",
        "title": "Test"
      },
      "index": {
        "description": "This is the main testing module Start reading here if you want to know what this package is all about There documentation section at the bottom of this page You might want to start by reading that Otherwise here quick summary You create Test objects to represent your tests run test Test IO Bool to quickly run test interactively e.g during debugging activity run test full allows more control including recording detailed test results to an XML log file test Bool Test creates test from pure code Eq Test for tests with known answers Tests can be annotated with title argument temporary note and so on tests Test Test for combining multiple tests into single Test object Tests can be nested arbitrarily in this mannar to group related tests together testIO IO Bool Test for tests that need to perform The TestM monad supports liftIO and allows limited test annotations from within monadic code testM TestM Bool Test to use the TestM monad throws throwsIO throwsM to test for exceptions",
        "hierarchy": "Test AC Test",
        "module": "Test.AC.Test",
        "name": "Test",
        "normalized": "",
        "package": "AC-MiniTest",
        "partial": "Test",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AC-MiniTest/docs/Test-AC-Test.html#t:Test",
      "description": {
        "fct-descr": "\u003cp\u003eAn executable test.\n\u003c/p\u003e",
        "fct-module": "Test.AC.Test",
        "fct-package": "AC-MiniTest",
        "fct-signature": "data",
        "fct-source": "src/Test-AC-Test.html#Test",
        "fct-type": "data",
        "title": "Test"
      },
      "index": {
        "description": "An executable test",
        "hierarchy": "Test AC Test",
        "module": "Test.AC.Test",
        "name": "Test",
        "normalized": "",
        "package": "AC-MiniTest",
        "partial": "Test",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AC-MiniTest/docs/Test-AC-Test.html#t:TestConfig",
      "description": {
        "fct-descr": "\u003cp\u003eConfiguration settings for a test run.\n\u003c/p\u003e",
        "fct-module": "Test.AC.Test",
        "fct-package": "AC-MiniTest",
        "fct-signature": "data",
        "fct-source": "src/Test-AC-Test.html#TestConfig",
        "fct-type": "data",
        "title": "TestConfig"
      },
      "index": {
        "description": "Configuration settings for test run",
        "hierarchy": "Test AC Test",
        "module": "Test.AC.Test",
        "name": "TestConfig",
        "normalized": "",
        "package": "AC-MiniTest",
        "partial": "Test Config",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AC-MiniTest/docs/Test-AC-Test.html#t:TestM",
      "description": {
        "fct-descr": "\u003cp\u003eThe test monad.\n\u003c/p\u003e\u003cp\u003eNotice the \u003ccode\u003e\u003ca\u003eMonadIO\u003c/a\u003e\u003c/code\u003e instance. This allows you to call \u003ccode\u003e\u003ca\u003eliftIO\u003c/a\u003e\u003c/code\u003e to\n  perform arbitrary \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e actions at any point within the test monad.\n\u003c/p\u003e",
        "fct-module": "Test.AC.Test",
        "fct-package": "AC-MiniTest",
        "fct-signature": "data",
        "fct-source": "src/Test-AC-Test.html#TestM",
        "fct-type": "data",
        "title": "TestM"
      },
      "index": {
        "description": "The test monad Notice the MonadIO instance This allows you to call liftIO to perform arbitrary IO actions at any point within the test monad",
        "hierarchy": "Test AC Test",
        "module": "Test.AC.Test",
        "name": "TestM",
        "normalized": "",
        "package": "AC-MiniTest",
        "partial": "Test",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AC-MiniTest/docs/Test-AC-Test.html#v:-63--47--61-",
      "description": {
        "fct-descr": "\u003cp\u003eCompare two values for inequality.\n\u003c/p\u003e\u003cp\u003eThe right-hand value is the \"target\" value, and the left-hand\n  value (next to the \u003ccode\u003e?\u003c/code\u003e sign) is the \"actual\" value. The test\n  passes if both values are unequal according to \u003ccode\u003e\u003ca\u003e/=\u003c/a\u003e\u003c/code\u003e. The test fails\n  if any exceptions are thrown by \u003ccode\u003e\u003ca\u003e/=\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eshow\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis operator has the same precedence as \u003ccode\u003e\u003ca\u003e/=\u003c/a\u003e\u003c/code\u003e (i.e., 4).\n\u003c/p\u003e",
        "fct-module": "Test.AC.Test",
        "fct-package": "AC-MiniTest",
        "fct-signature": "x -\u003e x -\u003e Test",
        "fct-source": "src/Test-AC-Test.html#%3F%2F%3D",
        "fct-type": "function",
        "title": "(?/=)"
      },
      "index": {
        "description": "Compare two values for inequality The right-hand value is the target value and the left-hand value next to the sign is the actual value The test passes if both values are unequal according to The test fails if any exceptions are thrown by or show This operator has the same precedence as i.e",
        "hierarchy": "Test AC Test",
        "module": "Test.AC.Test",
        "name": "(?/=) ?/=",
        "normalized": "a-\u003ea-\u003eTest",
        "package": "AC-MiniTest",
        "partial": "",
        "signature": "x-\u003ex-\u003eTest"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AC-MiniTest/docs/Test-AC-Test.html#v:-63--60-",
      "description": {
        "fct-descr": "\u003cp\u003eCompare two values for inequality.\n\u003c/p\u003e\u003cp\u003eThe right-hand value is the \"target\" value, and the left-hand\n  value (next to the \u003ccode\u003e?\u003c/code\u003e sign) is the \"actual\" value. The test\n  passes if the actual value is less than the target value according\n  to \u003ccode\u003e\u003ca\u003e\u003c\u003c/a\u003e\u003c/code\u003e. The test fails if any exceptions are thrown by \u003ccode\u003e\u003ca\u003e\u003c\u003c/a\u003e\u003c/code\u003e or\n  \u003ccode\u003e\u003ca\u003eshow\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis operator has the same precedence as \u003ccode\u003e\u003ca\u003e\u003c\u003c/a\u003e\u003c/code\u003e (i.e., 4).\n\u003c/p\u003e",
        "fct-module": "Test.AC.Test",
        "fct-package": "AC-MiniTest",
        "fct-signature": "x -\u003e x -\u003e Test",
        "fct-source": "src/Test-AC-Test.html#%3F%3C",
        "fct-type": "function",
        "title": "(?\u003c)"
      },
      "index": {
        "description": "Compare two values for inequality The right-hand value is the target value and the left-hand value next to the sign is the actual value The test passes if the actual value is less than the target value according to The test fails if any exceptions are thrown by or show This operator has the same precedence as i.e",
        "hierarchy": "Test AC Test",
        "module": "Test.AC.Test",
        "name": "(?\u003c) ?\u003c",
        "normalized": "a-\u003ea-\u003eTest",
        "package": "AC-MiniTest",
        "partial": "",
        "signature": "x-\u003ex-\u003eTest"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AC-MiniTest/docs/Test-AC-Test.html#v:-63--60--61-",
      "description": {
        "fct-descr": "\u003cp\u003eCompare two values for inequality.\n\u003c/p\u003e\u003cp\u003eThe right-hand value is the \"target\" value, and the left-hand\n  value (next to the \u003ccode\u003e?\u003c/code\u003e sign) is the \"actual\" value. The test\n  passes if the actual value is less than or equal to the target\n  value according to \u003ccode\u003e\u003ca\u003e\u003c=\u003c/a\u003e\u003c/code\u003e. The test fails if any exceptions are\n  thrown by \u003ccode\u003e\u003ca\u003e\u003c=\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eshow\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis operator has the same precedence as \u003ccode\u003e\u003ca\u003e\u003c=\u003c/a\u003e\u003c/code\u003e (i.e., 4).\n\u003c/p\u003e",
        "fct-module": "Test.AC.Test",
        "fct-package": "AC-MiniTest",
        "fct-signature": "x -\u003e x -\u003e Test",
        "fct-source": "src/Test-AC-Test.html#%3F%3C%3D",
        "fct-type": "function",
        "title": "(?\u003c=)"
      },
      "index": {
        "description": "Compare two values for inequality The right-hand value is the target value and the left-hand value next to the sign is the actual value The test passes if the actual value is less than or equal to the target value according to The test fails if any exceptions are thrown by or show This operator has the same precedence as i.e",
        "hierarchy": "Test AC Test",
        "module": "Test.AC.Test",
        "name": "(?\u003c=) ?\u003c=",
        "normalized": "a-\u003ea-\u003eTest",
        "package": "AC-MiniTest",
        "partial": "",
        "signature": "x-\u003ex-\u003eTest"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AC-MiniTest/docs/Test-AC-Test.html#v:-63--61-",
      "description": {
        "fct-descr": "\u003cp\u003eCompare two values for equality.\n\u003c/p\u003e\u003cp\u003eThe right-hand value is the \"target\" value, and the left-hand\n  value (next to the \u003ccode\u003e?\u003c/code\u003e sign) is the \"actual\" value. The test\n  passes if both values are equal according to \u003ccode\u003e\u003ca\u003e==\u003c/a\u003e\u003c/code\u003e. The test fails\n  if any exceptions are thrown by \u003ccode\u003e\u003ca\u003e==\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eshow\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis operator has the same precedence as \u003ccode\u003e\u003ca\u003e==\u003c/a\u003e\u003c/code\u003e (i.e., 4).\n\u003c/p\u003e",
        "fct-module": "Test.AC.Test",
        "fct-package": "AC-MiniTest",
        "fct-signature": "x -\u003e x -\u003e Test",
        "fct-source": "src/Test-AC-Test.html#%3F%3D",
        "fct-type": "function",
        "title": "(?=)"
      },
      "index": {
        "description": "Compare two values for equality The right-hand value is the target value and the left-hand value next to the sign is the actual value The test passes if both values are equal according to The test fails if any exceptions are thrown by or show This operator has the same precedence as i.e",
        "hierarchy": "Test AC Test",
        "module": "Test.AC.Test",
        "name": "(?=) ?=",
        "normalized": "a-\u003ea-\u003eTest",
        "package": "AC-MiniTest",
        "partial": "",
        "signature": "x-\u003ex-\u003eTest"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AC-MiniTest/docs/Test-AC-Test.html#v:-63--62-",
      "description": {
        "fct-descr": "\u003cp\u003eCompare two values for inequality.\n\u003c/p\u003e\u003cp\u003eThe right-hand value is the \"target\" value, and the left-hand\n  value (next to the \u003ccode\u003e?\u003c/code\u003e sign) is the \"actual\" value. The test\n  passes if the actual value is more than the target value according\n  to \u003ccode\u003e\u003ca\u003e\u003e\u003c/a\u003e\u003c/code\u003e. The test fails if any exceptions are thrown by \u003ccode\u003e\u003ca\u003e\u003e\u003c/a\u003e\u003c/code\u003e or\n  \u003ccode\u003e\u003ca\u003eshow\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis operator has the same precedence as \u003ccode\u003e\u003ca\u003e\u003e\u003c/a\u003e\u003c/code\u003e (i.e., 4).\n\u003c/p\u003e",
        "fct-module": "Test.AC.Test",
        "fct-package": "AC-MiniTest",
        "fct-signature": "x -\u003e x -\u003e Test",
        "fct-source": "src/Test-AC-Test.html#%3F%3E",
        "fct-type": "function",
        "title": "(?\u003e)"
      },
      "index": {
        "description": "Compare two values for inequality The right-hand value is the target value and the left-hand value next to the sign is the actual value The test passes if the actual value is more than the target value according to The test fails if any exceptions are thrown by or show This operator has the same precedence as i.e",
        "hierarchy": "Test AC Test",
        "module": "Test.AC.Test",
        "name": "(?\u003e) ?\u003e",
        "normalized": "a-\u003ea-\u003eTest",
        "package": "AC-MiniTest",
        "partial": "",
        "signature": "x-\u003ex-\u003eTest"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AC-MiniTest/docs/Test-AC-Test.html#v:-63--62--61-",
      "description": {
        "fct-descr": "\u003cp\u003eCompare two values for inequality.\n\u003c/p\u003e\u003cp\u003eThe right-hand value is the \"target\" value, and the left-hand\n  value (next to the \u003ccode\u003e?\u003c/code\u003e sign) is the \"actual\" value. The test\n  passes if the actual value is more than or equal to the target\n  value according to \u003ccode\u003e\u003ca\u003e\u003e=\u003c/a\u003e\u003c/code\u003e. The test fails if any exceptions are\n  thrown by \u003ccode\u003e\u003ca\u003e\u003e=\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eshow\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis operator has the same precedence as \u003ccode\u003e\u003ca\u003e\u003e=\u003c/a\u003e\u003c/code\u003e (i.e., 4).\n\u003c/p\u003e",
        "fct-module": "Test.AC.Test",
        "fct-package": "AC-MiniTest",
        "fct-signature": "x -\u003e x -\u003e Test",
        "fct-source": "src/Test-AC-Test.html#%3F%3E%3D",
        "fct-type": "function",
        "title": "(?\u003e=)"
      },
      "index": {
        "description": "Compare two values for inequality The right-hand value is the target value and the left-hand value next to the sign is the actual value The test passes if the actual value is more than or equal to the target value according to The test fails if any exceptions are thrown by or show This operator has the same precedence as i.e",
        "hierarchy": "Test AC Test",
        "module": "Test.AC.Test",
        "name": "(?\u003e=) ?\u003e=",
        "normalized": "a-\u003ea-\u003eTest",
        "package": "AC-MiniTest",
        "partial": "",
        "signature": "x-\u003ex-\u003eTest"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AC-MiniTest/docs/Test-AC-Test.html#v:TestConfig",
      "description": {
        "fct-module": "Test.AC.Test",
        "fct-package": "AC-MiniTest",
        "fct-signature": "TestConfig",
        "fct-source": "src/Test-AC-Test.html#TestConfig",
        "fct-type": "function",
        "title": "TestConfig"
      },
      "index": {
        "description": "",
        "hierarchy": "Test AC Test",
        "module": "Test.AC.Test",
        "name": "TestConfig",
        "normalized": "",
        "package": "AC-MiniTest",
        "partial": "Test Config",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AC-MiniTest/docs/Test-AC-Test.html#v:alternatives",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a composite test which passes if at least one child test\n  passes.\n\u003c/p\u003e\u003cp\u003eAll child tests are always run, regardless of error reporting mode.\n  No test failures are reported, unless all children fail.\n\u003c/p\u003e\u003cp\u003eEssentially, this takes the logical-OR of several tests. You can\n  achieve the same result using the normal \u003ccode\u003e\u003ca\u003e||\u003c/a\u003e\u003c/code\u003e operator or the \u003ccode\u003e\u003ca\u003eor\u003c/a\u003e\u003c/code\u003e\n  function, operating on plain \u003ccode\u003e\u003ca\u003eBool\u003c/a\u003e\u003c/code\u003e values rather than \u003ccode\u003e\u003ca\u003eTest\u003c/a\u003e\u003c/code\u003e\n  objects. However, by turning subexpressions into \u003ccode\u003e\u003ca\u003eTest\u003c/a\u003e\u003c/code\u003e objects and\n  using \u003ccode\u003e\u003ca\u003ealternatives\u003c/a\u003e\u003c/code\u003e, the result of each subexpression will be\n  logged to file in addition to the overall result. Depending on the\n  context, that may or may not be helpful. You decide which you want.\n\u003c/p\u003e",
        "fct-module": "Test.AC.Test",
        "fct-package": "AC-MiniTest",
        "fct-signature": "[Test] -\u003e Test",
        "fct-source": "src/Test-AC-Test.html#alternatives",
        "fct-type": "function",
        "title": "alternatives"
      },
      "index": {
        "description": "Create composite test which passes if at least one child test passes All child tests are always run regardless of error reporting mode No test failures are reported unless all children fail Essentially this takes the logical-OR of several tests You can achieve the same result using the normal operator or the or function operating on plain Bool values rather than Test objects However by turning subexpressions into Test objects and using alternatives the result of each subexpression will be logged to file in addition to the overall result Depending on the context that may or may not be helpful You decide which you want",
        "hierarchy": "Test AC Test",
        "module": "Test.AC.Test",
        "name": "alternatives",
        "normalized": "[Test]-\u003eTest",
        "package": "AC-MiniTest",
        "partial": "",
        "signature": "[Test]-\u003eTest"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AC-MiniTest/docs/Test-AC-Test.html#v:argument",
      "description": {
        "fct-descr": "\u003cp\u003eAttach an argument value note.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e is the argument name, and the \u003ccode\u003ex\u003c/code\u003e is that argument's\n  value, which must implement \u003ccode\u003e\u003ca\u003eshow\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Test.AC.Test",
        "fct-package": "AC-MiniTest",
        "fct-signature": "String -\u003e x -\u003e Test -\u003e Test",
        "fct-source": "src/Test-AC-Test.html#argument",
        "fct-type": "function",
        "title": "argument"
      },
      "index": {
        "description": "Attach an argument value note The String is the argument name and the is that argument value which must implement show",
        "hierarchy": "Test AC Test",
        "module": "Test.AC.Test",
        "name": "argument",
        "normalized": "String-\u003ea-\u003eTest-\u003eTest",
        "package": "AC-MiniTest",
        "partial": "",
        "signature": "String-\u003ex-\u003eTest-\u003eTest"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AC-MiniTest/docs/Test-AC-Test.html#v:argument_",
      "description": {
        "fct-descr": "\u003cp\u003eAttach an argument value note.\n\u003c/p\u003e\u003cp\u003eThe first \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e is the argument name, and the second is some\n  suitable textual representation of that argument's value.\n\u003c/p\u003e",
        "fct-module": "Test.AC.Test",
        "fct-package": "AC-MiniTest",
        "fct-signature": "String -\u003e String -\u003e Test -\u003e Test",
        "fct-source": "src/Test-AC-Test.html#argument_",
        "fct-type": "function",
        "title": "argument_"
      },
      "index": {
        "description": "Attach an argument value note The first String is the argument name and the second is some suitable textual representation of that argument value",
        "hierarchy": "Test AC Test",
        "module": "Test.AC.Test",
        "name": "argument_",
        "normalized": "String-\u003eString-\u003eTest-\u003eTest",
        "package": "AC-MiniTest",
        "partial": "",
        "signature": "String-\u003eString-\u003eTest-\u003eTest"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AC-MiniTest/docs/Test-AC-Test.html#v:cfg_FailAbort",
      "description": {
        "fct-descr": "\u003cp\u003eIf \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e, abort testing if a test fails, otherwise continue\n      testing. (In other words, \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e causes \u003cem\u003eall\u003c/em\u003e tests to be\n      run, regardless of test failures, while \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e runs until a\n      test fails and then stops.)\n\u003c/p\u003e",
        "fct-module": "Test.AC.Test",
        "fct-package": "AC-MiniTest",
        "fct-signature": "Bool",
        "fct-source": "src/Test-AC-Test.html#TestConfig",
        "fct-type": "function",
        "title": "cfg_FailAbort"
      },
      "index": {
        "description": "If True abort testing if test fails otherwise continue testing In other words False causes all tests to be run regardless of test failures while True runs until test fails and then stops",
        "hierarchy": "Test AC Test",
        "module": "Test.AC.Test",
        "name": "cfg_FailAbort",
        "normalized": "",
        "package": "AC-MiniTest",
        "partial": "Fail Abort",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AC-MiniTest/docs/Test-AC-Test.html#v:cfg_FailReport",
      "description": {
        "fct-descr": "\u003cp\u003eIf \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e, report test failures to \u003ccode\u003e\u003ca\u003estdout\u003c/a\u003e\u003c/code\u003e. If \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e, just\n      report test progress to \u003ccode\u003e\u003ca\u003estdout\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Test.AC.Test",
        "fct-package": "AC-MiniTest",
        "fct-signature": "Bool",
        "fct-source": "src/Test-AC-Test.html#TestConfig",
        "fct-type": "function",
        "title": "cfg_FailReport"
      },
      "index": {
        "description": "If True report test failures to stdout If False just report test progress to stdout",
        "hierarchy": "Test AC Test",
        "module": "Test.AC.Test",
        "name": "cfg_FailReport",
        "normalized": "",
        "package": "AC-MiniTest",
        "partial": "Fail Report",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AC-MiniTest/docs/Test-AC-Test.html#v:cfg_LogFile",
      "description": {
        "fct-descr": "\u003cp\u003eIf \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e, no log file is produced. Otherwise, this is the\n      full path to the XML log file.\n\u003c/p\u003e",
        "fct-module": "Test.AC.Test",
        "fct-package": "AC-MiniTest",
        "fct-signature": "Maybe FilePath",
        "fct-source": "src/Test-AC-Test.html#TestConfig",
        "fct-type": "function",
        "title": "cfg_LogFile"
      },
      "index": {
        "description": "If Nothing no log file is produced Otherwise this is the full path to the XML log file",
        "hierarchy": "Test AC Test",
        "module": "Test.AC.Test",
        "name": "cfg_LogFile",
        "normalized": "",
        "package": "AC-MiniTest",
        "partial": "Log File",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AC-MiniTest/docs/Test-AC-Test.html#v:cfg_LogXSL",
      "description": {
        "fct-descr": "\u003cp\u003ePath to an XSL file. If given, the XML log file will use this\n      XSL as a stylesheet. This value is ignored if no XML log is\n      produced.\n\u003c/p\u003e",
        "fct-module": "Test.AC.Test",
        "fct-package": "AC-MiniTest",
        "fct-signature": "Maybe String",
        "fct-source": "src/Test-AC-Test.html#TestConfig",
        "fct-type": "function",
        "title": "cfg_LogXSL"
      },
      "index": {
        "description": "Path to an XSL file If given the XML log file will use this XSL as stylesheet This value is ignored if no XML log is produced",
        "hierarchy": "Test AC Test",
        "module": "Test.AC.Test",
        "name": "cfg_LogXSL",
        "normalized": "",
        "package": "AC-MiniTest",
        "partial": "Log XSL",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AC-MiniTest/docs/Test-AC-Test.html#v:default_config",
      "description": {
        "fct-descr": "\u003cp\u003eThe default test configuration, as used by \u003ccode\u003e\u003ca\u003erun_test\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003ecfg_LogFile    = Nothing\ncfg_LogXSL     = Nothing\ncfg_FailReport = True\ncfg_FailAbort  = True\n\u003c/pre\u003e\u003cp\u003eYou can use this as a starting point if you only want to customise\n  a few test settings. (More options may be added in future.)\n\u003c/p\u003e",
        "fct-module": "Test.AC.Test",
        "fct-package": "AC-MiniTest",
        "fct-signature": "TestConfig",
        "fct-source": "src/Test-AC-Test.html#default_config",
        "fct-type": "function",
        "title": "default_config"
      },
      "index": {
        "description": "The default test configuration as used by run test cfg LogFile Nothing cfg LogXSL Nothing cfg FailReport True cfg FailAbort True You can use this as starting point if you only want to customise few test settings More options may be added in future",
        "hierarchy": "Test AC Test",
        "module": "Test.AC.Test",
        "name": "default_config",
        "normalized": "",
        "package": "AC-MiniTest",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AC-MiniTest/docs/Test-AC-Test.html#v:inapplicable",
      "description": {
        "fct-descr": "\u003cp\u003eThis test always succeeds, but writes a note in the log to say that\n  the test case was \"inapplicable\".\n\u003c/p\u003e\u003cp\u003eThis is generally useful if you have a test generation function\n  which doesn't work for certain combinations of inputs. In that\n  instance, the test still passes, but there is a note in the log\n  letting you know it was only a \"null\" test.\n\u003c/p\u003e",
        "fct-module": "Test.AC.Test",
        "fct-package": "AC-MiniTest",
        "fct-signature": "Test",
        "fct-source": "src/Test-AC-Test.html#inapplicable",
        "fct-type": "function",
        "title": "inapplicable"
      },
      "index": {
        "description": "This test always succeeds but writes note in the log to say that the test case was inapplicable This is generally useful if you have test generation function which doesn work for certain combinations of inputs In that instance the test still passes but there is note in the log letting you know it was only null test",
        "hierarchy": "Test AC Test",
        "module": "Test.AC.Test",
        "name": "inapplicable",
        "normalized": "",
        "package": "AC-MiniTest",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AC-MiniTest/docs/Test-AC-Test.html#v:inapplicableM",
      "description": {
        "fct-descr": "\u003cp\u003eMark the current test as \"inapplicable\" and return \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e.\n  (See \u003ccode\u003e\u003ca\u003einapplicable\u003c/a\u003e\u003c/code\u003e.)\n\u003c/p\u003e",
        "fct-module": "Test.AC.Test",
        "fct-package": "AC-MiniTest",
        "fct-signature": "TestM Bool",
        "fct-source": "src/Test-AC-Test.html#inapplicableM",
        "fct-type": "function",
        "title": "inapplicableM"
      },
      "index": {
        "description": "Mark the current test as inapplicable and return True See inapplicable",
        "hierarchy": "Test AC Test",
        "module": "Test.AC.Test",
        "name": "inapplicableM",
        "normalized": "",
        "package": "AC-MiniTest",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AC-MiniTest/docs/Test-AC-Test.html#v:note",
      "description": {
        "fct-descr": "\u003cp\u003eAdd a textual note to the test log.\n\u003c/p\u003e",
        "fct-module": "Test.AC.Test",
        "fct-package": "AC-MiniTest",
        "fct-signature": "String -\u003e Test -\u003e Test",
        "fct-source": "src/Test-AC-Test.html#note",
        "fct-type": "function",
        "title": "note"
      },
      "index": {
        "description": "Add textual note to the test log",
        "hierarchy": "Test AC Test",
        "module": "Test.AC.Test",
        "name": "note",
        "normalized": "String-\u003eTest-\u003eTest",
        "package": "AC-MiniTest",
        "partial": "",
        "signature": "String-\u003eTest-\u003eTest"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AC-MiniTest/docs/Test-AC-Test.html#v:noteM",
      "description": {
        "fct-descr": "\u003cp\u003eAdd a textual note to the log file.\n\u003c/p\u003e",
        "fct-module": "Test.AC.Test",
        "fct-package": "AC-MiniTest",
        "fct-signature": "String -\u003e TestM ()",
        "fct-source": "src/Test-AC-Test.html#noteM",
        "fct-type": "function",
        "title": "noteM"
      },
      "index": {
        "description": "Add textual note to the log file",
        "hierarchy": "Test AC Test",
        "module": "Test.AC.Test",
        "name": "noteM",
        "normalized": "String-\u003eTestM()",
        "package": "AC-MiniTest",
        "partial": "",
        "signature": "String-\u003eTestM()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AC-MiniTest/docs/Test-AC-Test.html#v:run_test",
      "description": {
        "fct-descr": "\u003cp\u003eExecute a test.\n\u003c/p\u003e\u003cp\u003eOrdinarily, \"the test\" will be a composite test created with\n  \u003ccode\u003e\u003ca\u003etests\u003c/a\u003e\u003c/code\u003e, and will actually contain multiple sub-tests within it.\n\u003c/p\u003e\u003cp\u003eA \u003ccode\u003e\u003ca\u003eBool\u003c/a\u003e\u003c/code\u003e value is returned indicating whether the test was\n  successful or not. Test progress information is printed to\n  \u003ccode\u003e\u003ca\u003estdout\u003c/a\u003e\u003c/code\u003e. If any test fails, detailed information for that test is\n  printed to \u003ccode\u003e\u003ca\u003estdout\u003c/a\u003e\u003c/code\u003e, and testing aborts.\n\u003c/p\u003e\u003cp\u003eFor more control, see \u003ccode\u003e\u003ca\u003erun_test_full\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Test.AC.Test",
        "fct-package": "AC-MiniTest",
        "fct-signature": "Test -\u003e IO Bool",
        "fct-source": "src/Test-AC-Test.html#run_test",
        "fct-type": "function",
        "title": "run_test"
      },
      "index": {
        "description": "Execute test Ordinarily the test will be composite test created with tests and will actually contain multiple sub-tests within it Bool value is returned indicating whether the test was successful or not Test progress information is printed to stdout If any test fails detailed information for that test is printed to stdout and testing aborts For more control see run test full",
        "hierarchy": "Test AC Test",
        "module": "Test.AC.Test",
        "name": "run_test",
        "normalized": "Test-\u003eIO Bool",
        "package": "AC-MiniTest",
        "partial": "",
        "signature": "Test-\u003eIO Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AC-MiniTest/docs/Test-AC-Test.html#v:run_test_full",
      "description": {
        "fct-descr": "\u003cp\u003eExecute a test.\n\u003c/p\u003e\u003cp\u003eOrdinarily, \"the test\" will be a composite test created with\n  \u003ccode\u003e\u003ca\u003etests\u003c/a\u003e\u003c/code\u003e, and will actually contain multiple sub-tests within it.\n\u003c/p\u003e\u003cp\u003eA \u003ccode\u003e\u003ca\u003eBool\u003c/a\u003e\u003c/code\u003e value is returned indicating whether the test was\n  successful or not. Test progress information is printed to\n  \u003ccode\u003e\u003ca\u003estdout\u003c/a\u003e\u003c/code\u003e. Various testing options can be configured using the\n  \u003ccode\u003e\u003ca\u003eTestConfig\u003c/a\u003e\u003c/code\u003e argument. In particular, it is possible to log\n  detailed testing data to an XML log file (the \u003ccode\u003e\u003ca\u003ecfg_LogFile\u003c/a\u003e\u003c/code\u003e\n  parameter).\n\u003c/p\u003e\u003cp\u003eThe related \u003ccode\u003e\u003ca\u003erun_test\u003c/a\u003e\u003c/code\u003e function runs a test with the\n  \u003ccode\u003e\u003ca\u003edefault_config\u003c/a\u003e\u003c/code\u003e test settings, which are useful for quick\n  interactive testing during a debugging session.\n\u003c/p\u003e",
        "fct-module": "Test.AC.Test",
        "fct-package": "AC-MiniTest",
        "fct-signature": "TestConfig -\u003e Test -\u003e IO Bool",
        "fct-source": "src/Test-AC-Test.html#run_test_full",
        "fct-type": "function",
        "title": "run_test_full"
      },
      "index": {
        "description": "Execute test Ordinarily the test will be composite test created with tests and will actually contain multiple sub-tests within it Bool value is returned indicating whether the test was successful or not Test progress information is printed to stdout Various testing options can be configured using the TestConfig argument In particular it is possible to log detailed testing data to an XML log file the cfg LogFile parameter The related run test function runs test with the default config test settings which are useful for quick interactive testing during debugging session",
        "hierarchy": "Test AC Test",
        "module": "Test.AC.Test",
        "name": "run_test_full",
        "normalized": "TestConfig-\u003eTest-\u003eIO Bool",
        "package": "AC-MiniTest",
        "partial": "",
        "signature": "TestConfig-\u003eTest-\u003eIO Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AC-MiniTest/docs/Test-AC-Test.html#v:temporary",
      "description": {
        "fct-descr": "\u003cp\u003eNote down a temporary intermediate value computed in the process\n  of constructing a test.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e is a name for this value, and the \u003ccode\u003ex\u003c/code\u003e is the value\n  itself, which must implement \u003ccode\u003e\u003ca\u003eshow\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Test.AC.Test",
        "fct-package": "AC-MiniTest",
        "fct-signature": "String -\u003e x -\u003e Test -\u003e Test",
        "fct-source": "src/Test-AC-Test.html#temporary",
        "fct-type": "function",
        "title": "temporary"
      },
      "index": {
        "description": "Note down temporary intermediate value computed in the process of constructing test The String is name for this value and the is the value itself which must implement show",
        "hierarchy": "Test AC Test",
        "module": "Test.AC.Test",
        "name": "temporary",
        "normalized": "String-\u003ea-\u003eTest-\u003eTest",
        "package": "AC-MiniTest",
        "partial": "",
        "signature": "String-\u003ex-\u003eTest-\u003eTest"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AC-MiniTest/docs/Test-AC-Test.html#v:temporaryM",
      "description": {
        "fct-descr": "\u003cp\u003eNote down a temporary intermediate value computed in the process\n  of constructing a test.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e is a name for this value, and the \u003ccode\u003ex\u003c/code\u003e is the value\n  itself, which must implement \u003ccode\u003e\u003ca\u003eshow\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Test.AC.Test",
        "fct-package": "AC-MiniTest",
        "fct-signature": "String -\u003e x -\u003e TestM ()",
        "fct-source": "src/Test-AC-Test.html#temporaryM",
        "fct-type": "function",
        "title": "temporaryM"
      },
      "index": {
        "description": "Note down temporary intermediate value computed in the process of constructing test The String is name for this value and the is the value itself which must implement show",
        "hierarchy": "Test AC Test",
        "module": "Test.AC.Test",
        "name": "temporaryM",
        "normalized": "String-\u003ea-\u003eTestM()",
        "package": "AC-MiniTest",
        "partial": "",
        "signature": "String-\u003ex-\u003eTestM()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AC-MiniTest/docs/Test-AC-Test.html#v:temporaryM_",
      "description": {
        "fct-descr": "\u003cp\u003eNote down a temporary intermediate value computed in the process\n  of constructing a test.\n\u003c/p\u003e\u003cp\u003eThe first \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e is the name, and the second is some suitable\n  textual representation of the value.\n\u003c/p\u003e",
        "fct-module": "Test.AC.Test",
        "fct-package": "AC-MiniTest",
        "fct-signature": "String -\u003e String -\u003e TestM ()",
        "fct-source": "src/Test-AC-Test.html#temporaryM_",
        "fct-type": "function",
        "title": "temporaryM_"
      },
      "index": {
        "description": "Note down temporary intermediate value computed in the process of constructing test The first String is the name and the second is some suitable textual representation of the value",
        "hierarchy": "Test AC Test",
        "module": "Test.AC.Test",
        "name": "temporaryM_",
        "normalized": "String-\u003eString-\u003eTestM()",
        "package": "AC-MiniTest",
        "partial": "",
        "signature": "String-\u003eString-\u003eTestM()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AC-MiniTest/docs/Test-AC-Test.html#v:temporary_",
      "description": {
        "fct-descr": "\u003cp\u003eNote down a temporary intermediate value computed in the process\n  of constructing a test.\n\u003c/p\u003e\u003cp\u003eThe first \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e is the temporary name, and the second is some\n  suitable textual representation of the temporary's value.\n\u003c/p\u003e",
        "fct-module": "Test.AC.Test",
        "fct-package": "AC-MiniTest",
        "fct-signature": "String -\u003e String -\u003e Test -\u003e Test",
        "fct-source": "src/Test-AC-Test.html#temporary_",
        "fct-type": "function",
        "title": "temporary_"
      },
      "index": {
        "description": "Note down temporary intermediate value computed in the process of constructing test The first String is the temporary name and the second is some suitable textual representation of the temporary value",
        "hierarchy": "Test AC Test",
        "module": "Test.AC.Test",
        "name": "temporary_",
        "normalized": "String-\u003eString-\u003eTest-\u003eTest",
        "package": "AC-MiniTest",
        "partial": "",
        "signature": "String-\u003eString-\u003eTest-\u003eTest"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AC-MiniTest/docs/Test-AC-Test.html#v:test",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a \u003ccode\u003e\u003ca\u003eTest\u003c/a\u003e\u003c/code\u003e from a simple \u003ccode\u003e\u003ca\u003eBool\u003c/a\u003e\u003c/code\u003e value.\n\u003c/p\u003e\u003cp\u003eThe test passes if the value is \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e. The test fails if the value\n  is \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e, or if an exception is thrown in the course of computing\n  the value.\n\u003c/p\u003e",
        "fct-module": "Test.AC.Test",
        "fct-package": "AC-MiniTest",
        "fct-signature": "Bool -\u003e Test",
        "fct-source": "src/Test-AC-Test.html#test",
        "fct-type": "function",
        "title": "test"
      },
      "index": {
        "description": "Create Test from simple Bool value The test passes if the value is True The test fails if the value is False or if an exception is thrown in the course of computing the value",
        "hierarchy": "Test AC Test",
        "module": "Test.AC.Test",
        "name": "test",
        "normalized": "Bool-\u003eTest",
        "package": "AC-MiniTest",
        "partial": "",
        "signature": "Bool-\u003eTest"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AC-MiniTest/docs/Test-AC-Test.html#v:testIO",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a \u003ccode\u003e\u003ca\u003eTest\u003c/a\u003e\u003c/code\u003e from an \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e action that returns a \u003ccode\u003e\u003ca\u003eBool\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe test passes if the value returned is \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e. The test fails if\n  the value returned is \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e, or if an uncaught exception escapes.\n\u003c/p\u003e",
        "fct-module": "Test.AC.Test",
        "fct-package": "AC-MiniTest",
        "fct-signature": "IO Bool -\u003e Test",
        "fct-source": "src/Test-AC-Test.html#testIO",
        "fct-type": "function",
        "title": "testIO"
      },
      "index": {
        "description": "Create Test from an IO action that returns Bool The test passes if the value returned is True The test fails if the value returned is False or if an uncaught exception escapes",
        "hierarchy": "Test AC Test",
        "module": "Test.AC.Test",
        "name": "testIO",
        "normalized": "IO Bool-\u003eTest",
        "package": "AC-MiniTest",
        "partial": "IO",
        "signature": "IO Bool-\u003eTest"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AC-MiniTest/docs/Test-AC-Test.html#v:testIO3",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a \u003ccode\u003e\u003ca\u003eTest\u003c/a\u003e\u003c/code\u003e from an \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e action with seperate set-up and\n  clean-up phases.\n\u003c/p\u003e\u003cp\u003eThe first argument is a set-up action. This might be used to\n  initialise mutable storage or create disk structures, or just to\n  open some handles. Its result is passed to the second argument,\n  which then does the actual test propper. Finally, the third\n  argument is run (again with the set-up result as argument) to do\n  any post-test clean-up operations required. Its result is\n  discarded.\n\u003c/p\u003e\u003cp\u003eIf any of these \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e actions throw an exception, the test is\n  marked failed. Note that if the set-up action throws an exception,\n  the test and clean-up actions are not run. (If only the main test\n  action throws an exception, the clean-up is still run.)\n\u003c/p\u003e",
        "fct-module": "Test.AC.Test",
        "fct-package": "AC-MiniTest",
        "fct-signature": "IO x -\u003e (x -\u003e IO Bool) -\u003e (x -\u003e IO y) -\u003e Test",
        "fct-source": "src/Test-AC-Test.html#testIO3",
        "fct-type": "function",
        "title": "testIO3"
      },
      "index": {
        "description": "Create Test from an IO action with seperate set-up and clean-up phases The first argument is set-up action This might be used to initialise mutable storage or create disk structures or just to open some handles Its result is passed to the second argument which then does the actual test propper Finally the third argument is run again with the set-up result as argument to do any post-test clean-up operations required Its result is discarded If any of these IO actions throw an exception the test is marked failed Note that if the set-up action throws an exception the test and clean-up actions are not run If only the main test action throws an exception the clean-up is still run",
        "hierarchy": "Test AC Test",
        "module": "Test.AC.Test",
        "name": "testIO3",
        "normalized": "IO a-\u003e(a-\u003eIO Bool)-\u003e(a-\u003eIO b)-\u003eTest",
        "package": "AC-MiniTest",
        "partial": "IO",
        "signature": "IO x-\u003e(x-\u003eIO Bool)-\u003e(x-\u003eIO y)-\u003eTest"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AC-MiniTest/docs/Test-AC-Test.html#v:testM",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a \u003ccode\u003e\u003ca\u003eTest\u003c/a\u003e\u003c/code\u003e from a \u003ccode\u003e\u003ca\u003eTestM\u003c/a\u003e\u003c/code\u003e action.\n\u003c/p\u003e\u003cp\u003eThe test passes if the \u003ccode\u003e\u003ca\u003eTestM\u003c/a\u003e\u003c/code\u003e action returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e. The test\n  fails if it returns \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e or an uncaught exception escapes.\n\u003c/p\u003e",
        "fct-module": "Test.AC.Test",
        "fct-package": "AC-MiniTest",
        "fct-signature": "TestM Bool -\u003e Test",
        "fct-source": "src/Test-AC-Test.html#testM",
        "fct-type": "function",
        "title": "testM"
      },
      "index": {
        "description": "Create Test from TestM action The test passes if the TestM action returns True The test fails if it returns False or an uncaught exception escapes",
        "hierarchy": "Test AC Test",
        "module": "Test.AC.Test",
        "name": "testM",
        "normalized": "TestM Bool-\u003eTest",
        "package": "AC-MiniTest",
        "partial": "",
        "signature": "TestM Bool-\u003eTest"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AC-MiniTest/docs/Test-AC-Test.html#v:tests",
      "description": {
        "fct-descr": "\u003cp\u003eCombine multiple tests into a single composite test.\n\u003c/p\u003e\u003cp\u003eThe composite test fails if any of its constituent tests fail.\n  Whether the remaining tests are run depends on the testing mode\n  (the \u003ccode\u003e\u003ca\u003ecfg_FailAbort\u003c/a\u003e\u003c/code\u003e parameter in \u003ccode\u003e\u003ca\u003eTestConfig\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e\u003cp\u003eEssentially, this takes the logical-AND of several tests. You can\n  achieve the same result using the normal \u003ccode\u003e\u003ca\u003e&&\u003c/a\u003e\u003c/code\u003e operator or the \u003ccode\u003e\u003ca\u003eand\u003c/a\u003e\u003c/code\u003e\n  function, operating on plain \u003ccode\u003e\u003ca\u003eBool\u003c/a\u003e\u003c/code\u003e values rather than \u003ccode\u003e\u003ca\u003eTest\u003c/a\u003e\u003c/code\u003e\n  objects. However, by turning subexpressions into \u003ccode\u003e\u003ca\u003eTest\u003c/a\u003e\u003c/code\u003e objects and\n  using \u003ccode\u003e\u003ca\u003etests\u003c/a\u003e\u003c/code\u003e, the result of each subexpression will be logged to\n  file in addition to the overall result. Depending on the context,\n  that may or may not be helpful. You decide which you want.\n\u003c/p\u003e",
        "fct-module": "Test.AC.Test",
        "fct-package": "AC-MiniTest",
        "fct-signature": "[Test] -\u003e Test",
        "fct-source": "src/Test-AC-Test.html#tests",
        "fct-type": "function",
        "title": "tests"
      },
      "index": {
        "description": "Combine multiple tests into single composite test The composite test fails if any of its constituent tests fail Whether the remaining tests are run depends on the testing mode the cfg FailAbort parameter in TestConfig Essentially this takes the logical-AND of several tests You can achieve the same result using the normal operator or the and function operating on plain Bool values rather than Test objects However by turning subexpressions into Test objects and using tests the result of each subexpression will be logged to file in addition to the overall result Depending on the context that may or may not be helpful You decide which you want",
        "hierarchy": "Test AC Test",
        "module": "Test.AC.Test",
        "name": "tests",
        "normalized": "[Test]-\u003eTest",
        "package": "AC-MiniTest",
        "partial": "",
        "signature": "[Test]-\u003eTest"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AC-MiniTest/docs/Test-AC-Test.html#v:throws",
      "description": {
        "fct-descr": "\u003cp\u003eTest for exceptions.\n\u003c/p\u003e\u003cp\u003eOrdinarily, any test which throws an exception is deemed to have\n  failed. However, this test \u003cem\u003epasses\u003c/em\u003e if evaluating the argument to\n  WHNF causes an exception to be thrown. The test \u003cem\u003efails\u003c/em\u003e if no\n  exception is thrown.\n\u003c/p\u003e\u003cp\u003eThis can be useful for checking that functions reject invalid input\n  by throwing an exception. (Of course, you cannot check that the\n  \u003cem\u003ecorrect\u003c/em\u003e exception is thrown!)\n\u003c/p\u003e\u003cp\u003eIf WHNF is not enough to trigger the exception, you can wrap the\n  expression in some suitable forcing function. (The function\n  \u003ccode\u003e\u003ca\u003elength\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003e.\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eshow\u003c/a\u003e\u003c/code\u003e can sometimes be used for this purpose.)\n\u003c/p\u003e\u003cp\u003eNote that an infinite loop is not an exception (unless the loop\n  exhausts some resource).\n\u003c/p\u003e\u003cp\u003eIf no exception is thrown, the actual value returned is recorded.\n  This requires adding a \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e constraint. See \u003ccode\u003e\u003ca\u003ethrows_\u003c/a\u003e\u003c/code\u003e for a\n  function without this constraint.\n\u003c/p\u003e",
        "fct-module": "Test.AC.Test",
        "fct-package": "AC-MiniTest",
        "fct-signature": "x -\u003e Test",
        "fct-source": "src/Test-AC-Test.html#throws",
        "fct-type": "function",
        "title": "throws"
      },
      "index": {
        "description": "Test for exceptions Ordinarily any test which throws an exception is deemed to have failed However this test passes if evaluating the argument to WHNF causes an exception to be thrown The test fails if no exception is thrown This can be useful for checking that functions reject invalid input by throwing an exception Of course you cannot check that the correct exception is thrown If WHNF is not enough to trigger the exception you can wrap the expression in some suitable forcing function The function length show can sometimes be used for this purpose Note that an infinite loop is not an exception unless the loop exhausts some resource If no exception is thrown the actual value returned is recorded This requires adding Show constraint See throws for function without this constraint",
        "hierarchy": "Test AC Test",
        "module": "Test.AC.Test",
        "name": "throws",
        "normalized": "a-\u003eTest",
        "package": "AC-MiniTest",
        "partial": "",
        "signature": "x-\u003eTest"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AC-MiniTest/docs/Test-AC-Test.html#v:throwsIO",
      "description": {
        "fct-descr": "\u003cp\u003eTest for exceptions in the \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e\u003cp\u003eOrdinarily, any test which throws an exception is deemed to have\n  failed. However, this test \u003cem\u003epasses\u003c/em\u003e if evaluating the action's\n  result to WHNF causes an exception to be thrown. The test \u003cem\u003efails\u003c/em\u003e\n  if no exception is thrown.\n\u003c/p\u003e\u003cp\u003eThis can be useful for checking that a function rejects invalid\n  input by throwing an exception, or that invalid I/O operations are\n  reported. (Of course, you cannot check that the \u003cem\u003ecorrect\u003c/em\u003e exception\n  is thrown!)\n\u003c/p\u003e\u003cp\u003eNote that the \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e action is run \u003cem\u003eand\u003c/em\u003e its result is reduced (to\n  WHNF only). Note also that infinite loops are not exceptions\n  (unless the loop exhausts some resource).\n\u003c/p\u003e\u003cp\u003eIf no exception is thrown, the actual value returned is recorded.\n  This requires adding a \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e constraint; see \u003ccode\u003e\u003ca\u003ethrows_IO\u003c/a\u003e\u003c/code\u003e for a\n  function without this constraint.\n\u003c/p\u003e",
        "fct-module": "Test.AC.Test",
        "fct-package": "AC-MiniTest",
        "fct-signature": "IO x -\u003e Test",
        "fct-source": "src/Test-AC-Test.html#throwsIO",
        "fct-type": "function",
        "title": "throwsIO"
      },
      "index": {
        "description": "Test for exceptions in the IO monad Ordinarily any test which throws an exception is deemed to have failed However this test passes if evaluating the action result to WHNF causes an exception to be thrown The test fails if no exception is thrown This can be useful for checking that function rejects invalid input by throwing an exception or that invalid operations are reported Of course you cannot check that the correct exception is thrown Note that the IO action is run and its result is reduced to WHNF only Note also that infinite loops are not exceptions unless the loop exhausts some resource If no exception is thrown the actual value returned is recorded This requires adding Show constraint see throws IO for function without this constraint",
        "hierarchy": "Test AC Test",
        "module": "Test.AC.Test",
        "name": "throwsIO",
        "normalized": "IO a-\u003eTest",
        "package": "AC-MiniTest",
        "partial": "IO",
        "signature": "IO x-\u003eTest"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AC-MiniTest/docs/Test-AC-Test.html#v:throwsM",
      "description": {
        "fct-descr": "\u003cp\u003eCheck a \u003ccode\u003e\u003ca\u003eTestM\u003c/a\u003e\u003c/code\u003e action for exceptions.\n\u003c/p\u003e\u003cp\u003eOrdinarily, any test which throws an exception is deemed to have\n  failed. However, this test \u003cem\u003epasses\u003c/em\u003e if evaluating the action's\n  result to WHNF causes an exception to be thrown. The test \u003cem\u003efails\u003c/em\u003e\n  if no exception is thrown.\n\u003c/p\u003e\u003cp\u003eThis can be useful for checking that a function rejects invalid\n  input by throwing an exception, or that invalid I/O operations are\n  reported. (Of course, you cannot check that the \u003cem\u003ecorrect\u003c/em\u003e exception\n  is thrown!)\n\u003c/p\u003e\u003cp\u003eNote that the \u003ccode\u003e\u003ca\u003eTestM\u003c/a\u003e\u003c/code\u003e action is run \u003cem\u003eand\u003c/em\u003e its result is reduced (to\n  WHNF only). Note also that infinite loops are not exceptions\n  (unless the loop exhausts some resource).\n\u003c/p\u003e\u003cp\u003eIf no exception is thrown, the actual value returns is recorded.\n  This requires adding a \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e constraint. See \u003ccode\u003e\u003ca\u003ethrows_M\u003c/a\u003e\u003c/code\u003e for a\n  function without this constraint.\n\u003c/p\u003e",
        "fct-module": "Test.AC.Test",
        "fct-package": "AC-MiniTest",
        "fct-signature": "TestM x -\u003e Test",
        "fct-source": "src/Test-AC-Test.html#throwsM",
        "fct-type": "function",
        "title": "throwsM"
      },
      "index": {
        "description": "Check TestM action for exceptions Ordinarily any test which throws an exception is deemed to have failed However this test passes if evaluating the action result to WHNF causes an exception to be thrown The test fails if no exception is thrown This can be useful for checking that function rejects invalid input by throwing an exception or that invalid operations are reported Of course you cannot check that the correct exception is thrown Note that the TestM action is run and its result is reduced to WHNF only Note also that infinite loops are not exceptions unless the loop exhausts some resource If no exception is thrown the actual value returns is recorded This requires adding Show constraint See throws for function without this constraint",
        "hierarchy": "Test AC Test",
        "module": "Test.AC.Test",
        "name": "throwsM",
        "normalized": "TestM a-\u003eTest",
        "package": "AC-MiniTest",
        "partial": "",
        "signature": "TestM x-\u003eTest"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AC-MiniTest/docs/Test-AC-Test.html#v:throws_",
      "description": {
        "fct-descr": "\u003cp\u003eTest for exceptions.\n\u003c/p\u003e\u003cp\u003eOrdinarily, any test which throws an exception is deemed to have\n  failed. However, this test \u003cem\u003epasses\u003c/em\u003e if evaluating the argument to\n  WHNF causes an exception to be thrown. The test \u003cem\u003efails\u003c/em\u003e if no\n  exception is thrown.\n\u003c/p\u003e\u003cp\u003eThis can be useful for checking that functions reject invalid input\n  by throwing an exception. (Of course, you cannot check that the\n  \u003cem\u003ecorrect\u003c/em\u003e exception is thrown!)\n\u003c/p\u003e\u003cp\u003eIf WHNF is not enough to trigger the exception, you can wrap the\n  expression in some suitable forcing function. (The function\n  \u003ccode\u003e\u003ca\u003elength\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003e.\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eshow\u003c/a\u003e\u003c/code\u003e can sometimes be used for this purpose.)\n\u003c/p\u003e\u003cp\u003eNote that an infinite loop is not an exception (unless the loop\n  exhausts some resource).\n\u003c/p\u003e\u003cp\u003eIf an exception is not thrown, the actual value returned is not\n  recorded. See \u003ccode\u003e\u003ca\u003ethrows\u003c/a\u003e\u003c/code\u003e for a function that records this\n  information. (Note that this requires adding a \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e constraint.)\n\u003c/p\u003e",
        "fct-module": "Test.AC.Test",
        "fct-package": "AC-MiniTest",
        "fct-signature": "x -\u003e Test",
        "fct-source": "src/Test-AC-Test.html#throws_",
        "fct-type": "function",
        "title": "throws_"
      },
      "index": {
        "description": "Test for exceptions Ordinarily any test which throws an exception is deemed to have failed However this test passes if evaluating the argument to WHNF causes an exception to be thrown The test fails if no exception is thrown This can be useful for checking that functions reject invalid input by throwing an exception Of course you cannot check that the correct exception is thrown If WHNF is not enough to trigger the exception you can wrap the expression in some suitable forcing function The function length show can sometimes be used for this purpose Note that an infinite loop is not an exception unless the loop exhausts some resource If an exception is not thrown the actual value returned is not recorded See throws for function that records this information Note that this requires adding Show constraint",
        "hierarchy": "Test AC Test",
        "module": "Test.AC.Test",
        "name": "throws_",
        "normalized": "a-\u003eTest",
        "package": "AC-MiniTest",
        "partial": "",
        "signature": "x-\u003eTest"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AC-MiniTest/docs/Test-AC-Test.html#v:throws_IO",
      "description": {
        "fct-descr": "\u003cp\u003eTest for exceptions in the \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e\u003cp\u003eOrdinarily, any test which throws an exception is deemed to have\n  failed. However, this test \u003cem\u003epasses\u003c/em\u003e if evaluating the action's\n  result to WHNF causes an exception to be thrown. The test \u003cem\u003efails\u003c/em\u003e\n  if no exception is thrown.\n\u003c/p\u003e\u003cp\u003eThis can be useful for checking that a function rejects invalid\n  input by throwing an exception, or that invalid I/O operations are\n  reported. (Of course, you cannot check that the \u003cem\u003ecorrect\u003c/em\u003e exception\n  is thrown!)\n\u003c/p\u003e\u003cp\u003eNote that the \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e action is run \u003cem\u003eand\u003c/em\u003e its result is reduced (to\n  WHNF only). Note also that infinite loops are not exceptions\n  (unless the loop exhausts some resource).\n\u003c/p\u003e\u003cp\u003eIf no exception is thrown, the actual value returned is not\n  recorded. See \u003ccode\u003e\u003ca\u003ethrowsIO\u003c/a\u003e\u003c/code\u003e for a function which does record this\n  information. (This requires adding a \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e constraint.)\n\u003c/p\u003e",
        "fct-module": "Test.AC.Test",
        "fct-package": "AC-MiniTest",
        "fct-signature": "IO x -\u003e Test",
        "fct-source": "src/Test-AC-Test.html#throws_IO",
        "fct-type": "function",
        "title": "throws_IO"
      },
      "index": {
        "description": "Test for exceptions in the IO monad Ordinarily any test which throws an exception is deemed to have failed However this test passes if evaluating the action result to WHNF causes an exception to be thrown The test fails if no exception is thrown This can be useful for checking that function rejects invalid input by throwing an exception or that invalid operations are reported Of course you cannot check that the correct exception is thrown Note that the IO action is run and its result is reduced to WHNF only Note also that infinite loops are not exceptions unless the loop exhausts some resource If no exception is thrown the actual value returned is not recorded See throwsIO for function which does record this information This requires adding Show constraint",
        "hierarchy": "Test AC Test",
        "module": "Test.AC.Test",
        "name": "throws_IO",
        "normalized": "IO a-\u003eTest",
        "package": "AC-MiniTest",
        "partial": "IO",
        "signature": "IO x-\u003eTest"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AC-MiniTest/docs/Test-AC-Test.html#v:throws_M",
      "description": {
        "fct-descr": "\u003cp\u003eCheck a \u003ccode\u003e\u003ca\u003eTestM\u003c/a\u003e\u003c/code\u003e action for exceptions.\n\u003c/p\u003e\u003cp\u003eOrdinarily, any test which throws an exception is deemed to have\n  failed. However, this test \u003cem\u003epasses\u003c/em\u003e if evaluating the action's\n  result to WHNF causes an exception to be thrown. The test \u003cem\u003efails\u003c/em\u003e\n  if no exception is thrown.\n\u003c/p\u003e\u003cp\u003eThis can be useful for checking that a function rejects invalid\n  input by throwing an exception, or that invalid I/O operations are\n  reported. (Of course, you cannot check that the \u003cem\u003ecorrect\u003c/em\u003e exception\n  is thrown!)\n\u003c/p\u003e\u003cp\u003eNote that the \u003ccode\u003e\u003ca\u003eTestM\u003c/a\u003e\u003c/code\u003e action is run \u003cem\u003eand\u003c/em\u003e its result is reduced (to\n  WHNF only). Note also that infinite loops are not exceptions\n  (unless the loop exhausts some resource).\n\u003c/p\u003e\u003cp\u003eIf no exception is thrown, the actual value returned is not\n  recorded. See \u003ccode\u003e\u003ca\u003ethrowsM\u003c/a\u003e\u003c/code\u003e for a function that does record the value.\n  This requires adding a \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e constraint.\n\u003c/p\u003e",
        "fct-module": "Test.AC.Test",
        "fct-package": "AC-MiniTest",
        "fct-signature": "TestM x -\u003e Test",
        "fct-source": "src/Test-AC-Test.html#throws_M",
        "fct-type": "function",
        "title": "throws_M"
      },
      "index": {
        "description": "Check TestM action for exceptions Ordinarily any test which throws an exception is deemed to have failed However this test passes if evaluating the action result to WHNF causes an exception to be thrown The test fails if no exception is thrown This can be useful for checking that function rejects invalid input by throwing an exception or that invalid operations are reported Of course you cannot check that the correct exception is thrown Note that the TestM action is run and its result is reduced to WHNF only Note also that infinite loops are not exceptions unless the loop exhausts some resource If no exception is thrown the actual value returned is not recorded See throwsM for function that does record the value This requires adding Show constraint",
        "hierarchy": "Test AC Test",
        "module": "Test.AC.Test",
        "name": "throws_M",
        "normalized": "TestM a-\u003eTest",
        "package": "AC-MiniTest",
        "partial": "",
        "signature": "TestM x-\u003eTest"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AC-MiniTest/docs/Test-AC-Test.html#v:title",
      "description": {
        "fct-descr": "\u003cp\u003eAttach a title to a test.\n\u003c/p\u003e\u003cp\u003eThis title is an arbitrary human-readable label. It is recorded in\n  relation to the test, but has no other function.\n\u003c/p\u003e",
        "fct-module": "Test.AC.Test",
        "fct-package": "AC-MiniTest",
        "fct-signature": "String -\u003e Test -\u003e Test",
        "fct-source": "src/Test-AC-Test.html#title",
        "fct-type": "function",
        "title": "title"
      },
      "index": {
        "description": "Attach title to test This title is an arbitrary human-readable label It is recorded in relation to the test but has no other function",
        "hierarchy": "Test AC Test",
        "module": "Test.AC.Test",
        "name": "title",
        "normalized": "String-\u003eTest-\u003eTest",
        "package": "AC-MiniTest",
        "partial": "",
        "signature": "String-\u003eTest-\u003eTest"
      }
    }
  }
]