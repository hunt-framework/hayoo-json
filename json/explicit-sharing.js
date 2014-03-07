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
        "word": "explicit-sharing"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis library provides type classes for explicit sharing of monadic\n effects. Usually you don't need to import this library as it is\n reexported by the module \u003ccode\u003eControl.Monad.Sharing\u003c/code\u003e. You may want to\n do so, however, when writing your own implementation of explicit\n sharing.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Monad.Sharing.Classes",
          "name": "Classes",
          "package": "explicit-sharing",
          "source": "src/Control-Monad-Sharing-Classes.html",
          "type": "module"
        },
        "index": {
          "description": "This library provides type classes for explicit sharing of monadic effects Usually you don need to import this library as it is reexported by the module Control.Monad.Sharing You may want to do so however when writing your own implementation of explicit sharing",
          "hierarchy": "Control Monad Sharing Classes",
          "module": "Control.Monad.Sharing.Classes",
          "name": "Classes",
          "package": "explicit-sharing",
          "partial": "Classes",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/explicit-sharing/docs/Control-Monad-Sharing-Classes.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInterface for convertible datatypes. The provided function\n \u003ccode\u003econvArgs\u003c/code\u003e is supposed to map the given function on every argument\n of the given value and combine the results to give the converted\n value.\n\u003c/p\u003e\u003cp\u003eWe provide instances of the \u003ccode\u003e\u003ca\u003eConvertible\u003c/a\u003e\u003c/code\u003e class for some predefined\n Haskell types. For flat types the function \u003ccode\u003econvArgs\u003c/code\u003e just returns\n its argument which has no arguments to which the given function\n could be applied.\n\u003c/p\u003e",
          "module": "Control.Monad.Sharing.Classes",
          "name": "Convertible",
          "package": "explicit-sharing",
          "source": "src/Control-Monad-Sharing-Classes.html#Convertible",
          "type": "class"
        },
        "index": {
          "description": "Interface for convertible datatypes The provided function convArgs is supposed to map the given function on every argument of the given value and combine the results to give the converted value We provide instances of the Convertible class for some predefined Haskell types For flat types the function convArgs just returns its argument which has no arguments to which the given function could be applied",
          "hierarchy": "Control Monad Sharing Classes",
          "module": "Control.Monad.Sharing.Classes",
          "name": "Convertible",
          "package": "explicit-sharing",
          "partial": "Convertible",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/explicit-sharing/docs/Control-Monad-Sharing-Classes.html#t:Convertible"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Sharing.Classes",
          "name": "MBool",
          "package": "explicit-sharing",
          "source": "src/Control-Monad-Sharing-Classes.html#MBool",
          "type": "type"
        },
        "index": {
          "hierarchy": "Control Monad Sharing Classes",
          "module": "Control.Monad.Sharing.Classes",
          "name": "MBool",
          "package": "explicit-sharing",
          "partial": "MBool",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/explicit-sharing/docs/Control-Monad-Sharing-Classes.html#t:MBool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Sharing.Classes",
          "name": "MChar",
          "package": "explicit-sharing",
          "source": "src/Control-Monad-Sharing-Classes.html#MChar",
          "type": "type"
        },
        "index": {
          "hierarchy": "Control Monad Sharing Classes",
          "module": "Control.Monad.Sharing.Classes",
          "name": "MChar",
          "package": "explicit-sharing",
          "partial": "MChar",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/explicit-sharing/docs/Control-Monad-Sharing-Classes.html#t:MChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Sharing.Classes",
          "name": "MInt",
          "package": "explicit-sharing",
          "source": "src/Control-Monad-Sharing-Classes.html#MInt",
          "type": "type"
        },
        "index": {
          "hierarchy": "Control Monad Sharing Classes",
          "module": "Control.Monad.Sharing.Classes",
          "name": "MInt",
          "package": "explicit-sharing",
          "partial": "MInt",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/explicit-sharing/docs/Control-Monad-Sharing-Classes.html#t:MInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Sharing.Classes",
          "name": "Nondet",
          "package": "explicit-sharing",
          "source": "src/Control-Monad-Sharing-Classes.html#Nondet",
          "type": "class"
        },
        "index": {
          "hierarchy": "Control Monad Sharing Classes",
          "module": "Control.Monad.Sharing.Classes",
          "name": "Nondet",
          "package": "explicit-sharing",
          "partial": "Nondet",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/explicit-sharing/docs/Control-Monad-Sharing-Classes.html#t:Nondet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInterface of shareable nested monadic data types. The provided\n function \u003ccode\u003e\u003ca\u003eshareArgs\u003c/a\u003e\u003c/code\u003e is supposed to map the given function on every\n monadic argument.\n\u003c/p\u003e\u003cp\u003eWe provide instances of the \u003ccode\u003e\u003ca\u003eShareable\u003c/a\u003e\u003c/code\u003e class for some predefined\n Haskell types. For flat types the function \u003ccode\u003e\u003ca\u003eshareArgs\u003c/a\u003e\u003c/code\u003e just returns\n its argument which has no arguments to which the given function\n could be applied.\n\u003c/p\u003e",
          "module": "Control.Monad.Sharing.Classes",
          "name": "Shareable",
          "package": "explicit-sharing",
          "source": "src/Control-Monad-Sharing-Classes.html#Shareable",
          "type": "class"
        },
        "index": {
          "description": "Interface of shareable nested monadic data types The provided function shareArgs is supposed to map the given function on every monadic argument We provide instances of the Shareable class for some predefined Haskell types For flat types the function shareArgs just returns its argument which has no arguments to which the given function could be applied",
          "hierarchy": "Control Monad Sharing Classes",
          "module": "Control.Monad.Sharing.Classes",
          "name": "Shareable",
          "package": "explicit-sharing",
          "partial": "Shareable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/explicit-sharing/docs/Control-Monad-Sharing-Classes.html#t:Shareable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInterface of monads that support explicit sharing.\n\u003c/p\u003e",
          "module": "Control.Monad.Sharing.Classes",
          "name": "Sharing",
          "package": "explicit-sharing",
          "source": "src/Control-Monad-Sharing-Classes.html#Sharing",
          "type": "class"
        },
        "index": {
          "description": "Interface of monads that support explicit sharing",
          "hierarchy": "Control Monad Sharing Classes",
          "module": "Control.Monad.Sharing.Classes",
          "name": "Sharing",
          "package": "explicit-sharing",
          "partial": "Sharing",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/explicit-sharing/docs/Control-Monad-Sharing-Classes.html#t:Sharing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Sharing.Classes",
          "name": "(?)",
          "package": "explicit-sharing",
          "signature": "n -\u003e n -\u003e n",
          "source": "src/Control-Monad-Sharing-Classes.html#%3F",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Monad Sharing Classes",
          "module": "Control.Monad.Sharing.Classes",
          "name": "(?) ?",
          "normalized": "a-\u003ea-\u003ea",
          "package": "explicit-sharing",
          "signature": "n-\u003en-\u003en",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/explicit-sharing/docs/Control-Monad-Sharing-Classes.html#v:-63-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Sharing.Classes",
          "name": "convert",
          "package": "explicit-sharing",
          "signature": "a -\u003e m b",
          "source": "src/Control-Monad-Sharing-Classes.html#convert",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Monad Sharing Classes",
          "module": "Control.Monad.Sharing.Classes",
          "name": "convert",
          "normalized": "a-\u003eb c",
          "package": "explicit-sharing",
          "signature": "a-\u003em b",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/explicit-sharing/docs/Control-Monad-Sharing-Classes.html#v:convert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Sharing.Classes",
          "name": "failure",
          "package": "explicit-sharing",
          "signature": "n",
          "source": "src/Control-Monad-Sharing-Classes.html#failure",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Monad Sharing Classes",
          "module": "Control.Monad.Sharing.Classes",
          "name": "failure",
          "package": "explicit-sharing",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/explicit-sharing/docs/Control-Monad-Sharing-Classes.html#v:failure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eYields an action that returns the same results as the given\n action but whose effects are only executed once. Especially, when\n the resulting action is duplicated it returns the same result at\n every occurrence.\n\u003c/p\u003e",
          "module": "Control.Monad.Sharing.Classes",
          "name": "share",
          "package": "explicit-sharing",
          "signature": "s a -\u003e s (s a)",
          "source": "src/Control-Monad-Sharing-Classes.html#share",
          "type": "method"
        },
        "index": {
          "description": "Yields an action that returns the same results as the given action but whose effects are only executed once Especially when the resulting action is duplicated it returns the same result at every occurrence",
          "hierarchy": "Control Monad Sharing Classes",
          "module": "Control.Monad.Sharing.Classes",
          "name": "share",
          "normalized": "a b-\u003ea(a b)",
          "package": "explicit-sharing",
          "signature": "s a-\u003es(s a)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/explicit-sharing/docs/Control-Monad-Sharing-Classes.html#v:share"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Sharing.Classes",
          "name": "shareArgs",
          "package": "explicit-sharing",
          "signature": "m b -\u003e n (m b)) -\u003e a -\u003e n a",
          "source": "src/Control-Monad-Sharing-Classes.html#shareArgs",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Monad Sharing Classes",
          "module": "Control.Monad.Sharing.Classes",
          "name": "shareArgs",
          "normalized": "a b-\u003ec(a b))-\u003ed-\u003ec d",
          "package": "explicit-sharing",
          "partial": "Args",
          "signature": "m b-\u003en(m b))-\u003ea-\u003en a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/explicit-sharing/docs/Control-Monad-Sharing-Classes.html#v:shareArgs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis library provides an interface to monads that support explicit\n sharing. A project website with tutorials can be found at\n \u003ca\u003ehttp://sebfisch.github.com/explicit-sharing\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Monad.Sharing",
          "name": "Sharing",
          "package": "explicit-sharing",
          "source": "src/Control-Monad-Sharing.html",
          "type": "module"
        },
        "index": {
          "description": "This library provides an interface to monads that support explicit sharing project website with tutorials can be found at http sebfisch.github.com explicit-sharing",
          "hierarchy": "Control Monad Sharing",
          "module": "Control.Monad.Sharing",
          "name": "Sharing",
          "package": "explicit-sharing",
          "partial": "Sharing",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/explicit-sharing/docs/Control-Monad-Sharing.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInterface for convertible datatypes. The provided function\n \u003ccode\u003econvArgs\u003c/code\u003e is supposed to map the given function on every argument\n of the given value and combine the results to give the converted\n value.\n\u003c/p\u003e\u003cp\u003eWe provide instances of the \u003ccode\u003e\u003ca\u003eConvertible\u003c/a\u003e\u003c/code\u003e class for some predefined\n Haskell types. For flat types the function \u003ccode\u003econvArgs\u003c/code\u003e just returns\n its argument which has no arguments to which the given function\n could be applied.\n\u003c/p\u003e",
          "module": "Control.Monad.Sharing",
          "name": "Convertible",
          "package": "explicit-sharing",
          "source": "src/Control-Monad-Sharing-Classes.html#Convertible",
          "type": "class"
        },
        "index": {
          "description": "Interface for convertible datatypes The provided function convArgs is supposed to map the given function on every argument of the given value and combine the results to give the converted value We provide instances of the Convertible class for some predefined Haskell types For flat types the function convArgs just returns its argument which has no arguments to which the given function could be applied",
          "hierarchy": "Control Monad Sharing",
          "module": "Control.Monad.Sharing",
          "name": "Convertible",
          "package": "explicit-sharing",
          "partial": "Convertible",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/explicit-sharing/docs/Control-Monad-Sharing.html#t:Convertible"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInterface of shareable nested monadic data types. The provided\n function \u003ccode\u003e\u003ca\u003eshareArgs\u003c/a\u003e\u003c/code\u003e is supposed to map the given function on every\n monadic argument.\n\u003c/p\u003e\u003cp\u003eWe provide instances of the \u003ccode\u003e\u003ca\u003eShareable\u003c/a\u003e\u003c/code\u003e class for some predefined\n Haskell types. For flat types the function \u003ccode\u003e\u003ca\u003eshareArgs\u003c/a\u003e\u003c/code\u003e just returns\n its argument which has no arguments to which the given function\n could be applied.\n\u003c/p\u003e",
          "module": "Control.Monad.Sharing",
          "name": "Shareable",
          "package": "explicit-sharing",
          "source": "src/Control-Monad-Sharing-Classes.html#Shareable",
          "type": "class"
        },
        "index": {
          "description": "Interface of shareable nested monadic data types The provided function shareArgs is supposed to map the given function on every monadic argument We provide instances of the Shareable class for some predefined Haskell types For flat types the function shareArgs just returns its argument which has no arguments to which the given function could be applied",
          "hierarchy": "Control Monad Sharing",
          "module": "Control.Monad.Sharing",
          "name": "Shareable",
          "package": "explicit-sharing",
          "partial": "Shareable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/explicit-sharing/docs/Control-Monad-Sharing.html#t:Shareable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInterface of monads that support explicit sharing.\n\u003c/p\u003e",
          "module": "Control.Monad.Sharing",
          "name": "Sharing",
          "package": "explicit-sharing",
          "source": "src/Control-Monad-Sharing-Classes.html#Sharing",
          "type": "class"
        },
        "index": {
          "description": "Interface of monads that support explicit sharing",
          "hierarchy": "Control Monad Sharing",
          "module": "Control.Monad.Sharing",
          "name": "Sharing",
          "package": "explicit-sharing",
          "partial": "Sharing",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/explicit-sharing/docs/Control-Monad-Sharing.html#t:Sharing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Sharing",
          "name": "collect",
          "package": "explicit-sharing",
          "signature": "s n) -\u003e n",
          "source": "src/Control-Monad-Sharing-Implementation-CPS.html#collect",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Sharing",
          "module": "Control.Monad.Sharing",
          "name": "collect",
          "normalized": "a b)-\u003eb",
          "package": "explicit-sharing",
          "signature": "s n)-\u003en",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/explicit-sharing/docs/Control-Monad-Sharing.html#v:collect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Sharing",
          "name": "convert",
          "package": "explicit-sharing",
          "signature": "a -\u003e m b",
          "source": "src/Control-Monad-Sharing-Classes.html#convert",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Monad Sharing",
          "module": "Control.Monad.Sharing",
          "name": "convert",
          "normalized": "a-\u003eb c",
          "package": "explicit-sharing",
          "signature": "a-\u003em b",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/explicit-sharing/docs/Control-Monad-Sharing.html#v:convert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Sharing",
          "name": "hasResult",
          "package": "explicit-sharing",
          "signature": "s a) -\u003e Bool",
          "source": "src/Control-Monad-Sharing.html#hasResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Sharing",
          "module": "Control.Monad.Sharing",
          "name": "hasResult",
          "normalized": "a b)-\u003eBool",
          "package": "explicit-sharing",
          "partial": "Result",
          "signature": "s a)-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/explicit-sharing/docs/Control-Monad-Sharing.html#v:hasResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Sharing",
          "name": "resultDist",
          "package": "explicit-sharing",
          "signature": "s a) -\u003e Map a Rational",
          "source": "src/Control-Monad-Sharing.html#resultDist",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Sharing",
          "module": "Control.Monad.Sharing",
          "name": "resultDist",
          "normalized": "a b)-\u003eMap b Rational",
          "package": "explicit-sharing",
          "partial": "Dist",
          "signature": "s a)-\u003eMap a Rational",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/explicit-sharing/docs/Control-Monad-Sharing.html#v:resultDist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Sharing",
          "name": "resultList",
          "package": "explicit-sharing",
          "signature": "s a) -\u003e IO [a]",
          "source": "src/Control-Monad-Sharing.html#resultList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Sharing",
          "module": "Control.Monad.Sharing",
          "name": "resultList",
          "normalized": "a b)-\u003eIO[b]",
          "package": "explicit-sharing",
          "partial": "List",
          "signature": "s a)-\u003eIO[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/explicit-sharing/docs/Control-Monad-Sharing.html#v:resultList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Sharing",
          "name": "results",
          "package": "explicit-sharing",
          "signature": "s a) -\u003e Set a",
          "source": "src/Control-Monad-Sharing.html#results",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Sharing",
          "module": "Control.Monad.Sharing",
          "name": "results",
          "normalized": "a b)-\u003eSet b",
          "package": "explicit-sharing",
          "signature": "s a)-\u003eSet a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/explicit-sharing/docs/Control-Monad-Sharing.html#v:results"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eYields an action that returns the same results as the given\n action but whose effects are only executed once. Especially, when\n the resulting action is duplicated it returns the same result at\n every occurrence.\n\u003c/p\u003e",
          "module": "Control.Monad.Sharing",
          "name": "share",
          "package": "explicit-sharing",
          "signature": "s a -\u003e s (s a)",
          "source": "src/Control-Monad-Sharing-Classes.html#share",
          "type": "method"
        },
        "index": {
          "description": "Yields an action that returns the same results as the given action but whose effects are only executed once Especially when the resulting action is duplicated it returns the same result at every occurrence",
          "hierarchy": "Control Monad Sharing",
          "module": "Control.Monad.Sharing",
          "name": "share",
          "normalized": "a b-\u003ea(a b)",
          "package": "explicit-sharing",
          "signature": "s a-\u003es(s a)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/explicit-sharing/docs/Control-Monad-Sharing.html#v:share"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Sharing",
          "name": "shareArgs",
          "package": "explicit-sharing",
          "signature": "m b -\u003e n (m b)) -\u003e a -\u003e n a",
          "source": "src/Control-Monad-Sharing-Classes.html#shareArgs",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Monad Sharing",
          "module": "Control.Monad.Sharing",
          "name": "shareArgs",
          "normalized": "a b-\u003ec(a b))-\u003ed-\u003ec d",
          "package": "explicit-sharing",
          "partial": "Args",
          "signature": "m b-\u003en(m b))-\u003ea-\u003en a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/explicit-sharing/docs/Control-Monad-Sharing.html#v:shareArgs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Sharing",
          "name": "unsafeResults",
          "package": "explicit-sharing",
          "signature": "s a) -\u003e [a]",
          "source": "src/Control-Monad-Sharing.html#unsafeResults",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Sharing",
          "module": "Control.Monad.Sharing",
          "name": "unsafeResults",
          "normalized": "a b)-\u003e[b]",
          "package": "explicit-sharing",
          "partial": "Results",
          "signature": "s a)-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/explicit-sharing/docs/Control-Monad-Sharing.html#v:unsafeResults"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAutomatic deriving of monadic data types and corresponding instances.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Monadic.Derive",
          "name": "Derive",
          "package": "explicit-sharing",
          "source": "src/Data-Monadic-Derive.html",
          "type": "module"
        },
        "index": {
          "description": "Automatic deriving of monadic data types and corresponding instances",
          "hierarchy": "Data Monadic Derive",
          "module": "Data.Monadic.Derive",
          "name": "Derive",
          "package": "explicit-sharing",
          "partial": "Derive",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/explicit-sharing/docs/Data-Monadic-Derive.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerates \u003ccode\u003eConvertible\u003c/code\u003e instances to convert between monadic and\n   non-monadic datatypes.\n\u003c/p\u003e\u003cp\u003eFor example, the call\n\u003c/p\u003e\u003cpre\u003e $(derive convertible ''Maybe)\n\u003c/pre\u003e\u003cp\u003egenerates the following instances:\n\u003c/p\u003e\u003cpre\u003e instance (Monad m, Convertible m a a')\n       =\u003e Convertible m (Maybe a) (MMaybe m a') where\n   convArgs fun Nothing  = mNothing\n   convArgs fun (Just a) = mJust (fun a)\n \n instance (Monad m, Convertible m a' a)\n       =\u003e Convertible m (MMaybe m a') (Maybe a) where\n   convArgs fun MNothing  = return Nothing\n   convArgs fun (MJust a) = (a \u003e\u003e= fun) \u003e\u003e= \\a -\u003e return (Just a)\n\u003c/pre\u003e",
          "module": "Data.Monadic.Derive",
          "name": "convertible",
          "package": "explicit-sharing",
          "signature": "Derivation",
          "source": "src/Data-Monadic-Derive.html#convertible",
          "type": "function"
        },
        "index": {
          "description": "Generates Convertible instances to convert between monadic and non-monadic datatypes For example the call derive convertible Maybe generates the following instances instance Monad Convertible Convertible Maybe MMaybe where convArgs fun Nothing mNothing convArgs fun Just mJust fun instance Monad Convertible Convertible MMaybe Maybe where convArgs fun MNothing return Nothing convArgs fun MJust fun return Just",
          "hierarchy": "Data Monadic Derive",
          "module": "Data.Monadic.Derive",
          "name": "convertible",
          "package": "explicit-sharing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/explicit-sharing/docs/Data-Monadic-Derive.html#v:convertible"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDerive an instance of some class. \u003ccode\u003ederive\u003c/code\u003e only derives instances\n for the type of the argument.\n\u003c/p\u003e",
          "module": "Data.Monadic.Derive",
          "name": "derive",
          "package": "explicit-sharing",
          "signature": "Derivation -\u003e Name -\u003e Q [Dec]",
          "type": "function"
        },
        "index": {
          "description": "Derive an instance of some class derive only derives instances for the type of the argument",
          "hierarchy": "Data Monadic Derive",
          "module": "Data.Monadic.Derive",
          "name": "derive",
          "normalized": "Derivation-\u003eName-\u003eQ[Dec]",
          "package": "explicit-sharing",
          "signature": "Derivation-\u003eName-\u003eQ[Dec]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/explicit-sharing/docs/Data-Monadic-Derive.html#v:derive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerates a monadic datatype and corresponding con- and\n   destructor functions from a Haskell datatype.\n\u003c/p\u003e\u003cp\u003eFor example, the datatype\n\u003c/p\u003e\u003cpre\u003e data Maybe a = Nothing | Just a\n\u003c/pre\u003e\u003cp\u003ecan be translated into its monadic counterpart by typing\n\u003c/p\u003e\u003cpre\u003e $(derive mdata ''Maybe)\n\u003c/pre\u003e\u003cp\u003eThis call generates the following datatype\n\u003c/p\u003e\u003cpre\u003e data MMaybe m a = MNothing | MJust (m a)\n\u003c/pre\u003e\u003cp\u003eand the following auxiliary functions for constructing and\n   matching monadic values:\n\u003c/p\u003e\u003cpre\u003e mNothing :: Monad m =\u003e m (MMaybe m a)\n mNothing = return MNothing\n\u003c/pre\u003e\u003cpre\u003e mJust :: Monad m =\u003e m a -\u003e m (MMaybe m a)\n mJust a = return (MJust a)\n\u003c/pre\u003e\u003cpre\u003e matchMMaybe :: Monad m =\u003e m (MMaybe m a) -\u003e m b -\u003e (m a -\u003e m b) -\u003e m b\n matchMMaybe x n j = x \u003e\u003e= \\x -\u003e case x of { MNothing -\u003e n; MJust a -\u003e j a }\n\u003c/pre\u003e",
          "module": "Data.Monadic.Derive",
          "name": "mdata",
          "package": "explicit-sharing",
          "signature": "Derivation",
          "source": "src/Data-Monadic-Derive.html#mdata",
          "type": "function"
        },
        "index": {
          "description": "Generates monadic datatype and corresponding con and destructor functions from Haskell datatype For example the datatype data Maybe Nothing Just can be translated into its monadic counterpart by typing derive mdata Maybe This call generates the following datatype data MMaybe MNothing MJust and the following auxiliary functions for constructing and matching monadic values mNothing Monad MMaybe mNothing return MNothing mJust Monad MMaybe mJust return MJust matchMMaybe Monad MMaybe matchMMaybe case of MNothing MJust",
          "hierarchy": "Data Monadic Derive",
          "module": "Data.Monadic.Derive",
          "name": "mdata",
          "package": "explicit-sharing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/explicit-sharing/docs/Data-Monadic-Derive.html#v:mdata"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDerives monadic datatypes and instances for explicit sharing as\n   well as conversion. Combines the other three derivations which\n   provide the same functionality split into different parts.\n\u003c/p\u003e\u003cp\u003eYou usually need the following preamble when deriving monadic code:\n\u003c/p\u003e\u003cpre\u003e {-# LANGUAGE TemplateHaskell\n   , KindSignatures\n   , MultiParamTypeClasses\n   , FlexibleInstances\n   #-}\n import Control.Monad.Sharing\n import Data.Monadic.Derive\n import Data.DeriveTH\n\u003c/pre\u003e\u003cp\u003eIf your types contain lists, you also need to\n\u003c/p\u003e\u003cpre\u003e import Data.Monadic.List\n\u003c/pre\u003e\u003cp\u003eWith this prerequisites, you can derive a monadic \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e type by\n\u003c/p\u003e\u003cpre\u003e $(derive monadic ''Maybe)\n\u003c/pre\u003e",
          "module": "Data.Monadic.Derive",
          "name": "monadic",
          "package": "explicit-sharing",
          "signature": "Derivation",
          "source": "src/Data-Monadic-Derive.html#monadic",
          "type": "function"
        },
        "index": {
          "description": "Derives monadic datatypes and instances for explicit sharing as well as conversion Combines the other three derivations which provide the same functionality split into different parts You usually need the following preamble when deriving monadic code LANGUAGE TemplateHaskell KindSignatures MultiParamTypeClasses FlexibleInstances import Control.Monad.Sharing import Data.Monadic.Derive import Data.DeriveTH If your types contain lists you also need to import Data.Monadic.List With this prerequisites you can derive monadic Maybe type by derive monadic Maybe",
          "hierarchy": "Data Monadic Derive",
          "module": "Data.Monadic.Derive",
          "name": "monadic",
          "package": "explicit-sharing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/explicit-sharing/docs/Data-Monadic-Derive.html#v:monadic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerates a \u003ccode\u003eShareable\u003c/code\u003e instance for a monadic datatype.\n\u003c/p\u003e\u003cp\u003eFor example the call\n\u003c/p\u003e\u003cpre\u003e $(derive shareable ''Maybe)\n\u003c/pre\u003e\u003cp\u003egenerates the following instance:\n\u003c/p\u003e\u003cpre\u003e instance (Monad m, Shareable m a) =\u003e Shareable (Maybe m a) where\n   shareArgs fun MNothing  = return MNothing\n   shareArgs fun (MJust a) = fun a \u003e\u003e= \\a -\u003e mJust a\n\u003c/pre\u003e",
          "module": "Data.Monadic.Derive",
          "name": "shareable",
          "package": "explicit-sharing",
          "signature": "Derivation",
          "source": "src/Data-Monadic-Derive.html#shareable",
          "type": "function"
        },
        "index": {
          "description": "Generates Shareable instance for monadic datatype For example the call derive shareable Maybe generates the following instance instance Monad Shareable Shareable Maybe where shareArgs fun MNothing return MNothing shareArgs fun MJust fun mJust",
          "hierarchy": "Data Monadic Derive",
          "module": "Data.Monadic.Derive",
          "name": "shareable",
          "package": "explicit-sharing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/explicit-sharing/docs/Data-Monadic-Derive.html#v:shareable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis library provides lists with monadic head and tail as an\n example for nested monadic data that can be used with the\n combinator \u003ccode\u003eshare\u003c/code\u003e for explicit sharing.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Monadic.List",
          "name": "List",
          "package": "explicit-sharing",
          "source": "src/Data-Monadic-List.html",
          "type": "module"
        },
        "index": {
          "description": "This library provides lists with monadic head and tail as an example for nested monadic data that can be used with the combinator share for explicit sharing",
          "hierarchy": "Data Monadic List",
          "module": "Data.Monadic.List",
          "name": "List",
          "package": "explicit-sharing",
          "partial": "List",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/explicit-sharing/docs/Data-Monadic-List.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eData type for lists where both the head and tail are monadic.\n\u003c/p\u003e",
          "module": "Data.Monadic.List",
          "name": "List",
          "package": "explicit-sharing",
          "source": "src/Data-Monadic-List.html#List",
          "type": "data"
        },
        "index": {
          "description": "Data type for lists where both the head and tail are monadic",
          "hierarchy": "Data Monadic List",
          "module": "Data.Monadic.List",
          "name": "List",
          "package": "explicit-sharing",
          "partial": "List",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/explicit-sharing/docs/Data-Monadic-List.html#t:List"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Monadic.List",
          "name": "Cons",
          "package": "explicit-sharing",
          "signature": "Cons (m a) (m (List m a))",
          "source": "src/Data-Monadic-List.html#List",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Monadic List",
          "module": "Data.Monadic.List",
          "name": "Cons",
          "package": "explicit-sharing",
          "partial": "Cons",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/explicit-sharing/docs/Data-Monadic-List.html#v:Cons"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Monadic.List",
          "name": "Nil",
          "package": "explicit-sharing",
          "signature": "Nil",
          "source": "src/Data-Monadic-List.html#List",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Monadic List",
          "module": "Data.Monadic.List",
          "name": "Nil",
          "package": "explicit-sharing",
          "partial": "Nil",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/explicit-sharing/docs/Data-Monadic-List.html#v:Nil"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstructs a non-empty monadic list.\n\u003c/p\u003e",
          "module": "Data.Monadic.List",
          "name": "cons",
          "package": "explicit-sharing",
          "signature": "m a -\u003e m (List m a) -\u003e m (List m a)",
          "source": "src/Data-Monadic-List.html#cons",
          "type": "function"
        },
        "index": {
          "description": "Constructs non-empty monadic list",
          "hierarchy": "Data Monadic List",
          "module": "Data.Monadic.List",
          "name": "cons",
          "normalized": "a b-\u003ea(List a b)-\u003ea(List a b)",
          "package": "explicit-sharing",
          "signature": "m a-\u003em(List m a)-\u003em(List m a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/explicit-sharing/docs/Data-Monadic-List.html#v:cons"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eYields the head of a monadic list. Relies on \u003ccode\u003e\u003ca\u003eMonadPlus\u003c/a\u003e\u003c/code\u003e instance\n to provide a failing implementation of \u003ccode\u003e\u003ca\u003efail\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Monadic.List",
          "name": "first",
          "package": "explicit-sharing",
          "signature": "m (List m a) -\u003e m a",
          "source": "src/Data-Monadic-List.html#first",
          "type": "function"
        },
        "index": {
          "description": "Yields the head of monadic list Relies on MonadPlus instance to provide failing implementation of fail",
          "hierarchy": "Data Monadic List",
          "module": "Data.Monadic.List",
          "name": "first",
          "normalized": "a(List a b)-\u003ea b",
          "package": "explicit-sharing",
          "signature": "m(List m a)-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/explicit-sharing/docs/Data-Monadic-List.html#v:first"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChecks if monadic list is empty.\n\u003c/p\u003e",
          "module": "Data.Monadic.List",
          "name": "isEmpty",
          "package": "explicit-sharing",
          "signature": "m (List m a) -\u003e m Bool",
          "source": "src/Data-Monadic-List.html#isEmpty",
          "type": "function"
        },
        "index": {
          "description": "Checks if monadic list is empty",
          "hierarchy": "Data Monadic List",
          "module": "Data.Monadic.List",
          "name": "isEmpty",
          "normalized": "a(List a b)-\u003ea Bool",
          "package": "explicit-sharing",
          "partial": "Empty",
          "signature": "m(List m a)-\u003em Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/explicit-sharing/docs/Data-Monadic-List.html#v:isEmpty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe empty monadic list.\n\u003c/p\u003e",
          "module": "Data.Monadic.List",
          "name": "nil",
          "package": "explicit-sharing",
          "signature": "m (List m a)",
          "source": "src/Data-Monadic-List.html#nil",
          "type": "function"
        },
        "index": {
          "description": "The empty monadic list",
          "hierarchy": "Data Monadic List",
          "module": "Data.Monadic.List",
          "name": "nil",
          "package": "explicit-sharing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/explicit-sharing/docs/Data-Monadic-List.html#v:nil"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eYields the tail of a monadic list. Relies on \u003ccode\u003e\u003ca\u003eMonadPlus\u003c/a\u003e\u003c/code\u003e instance\n to provide a failing implementation of \u003ccode\u003e\u003ca\u003efail\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Monadic.List",
          "name": "rest",
          "package": "explicit-sharing",
          "signature": "m (List m a) -\u003e m (List m a)",
          "source": "src/Data-Monadic-List.html#rest",
          "type": "function"
        },
        "index": {
          "description": "Yields the tail of monadic list Relies on MonadPlus instance to provide failing implementation of fail",
          "hierarchy": "Data Monadic List",
          "module": "Data.Monadic.List",
          "name": "rest",
          "normalized": "a(List a b)-\u003ea(List a b)",
          "package": "explicit-sharing",
          "signature": "m(List m a)-\u003em(List m a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/explicit-sharing/docs/Data-Monadic-List.html#v:rest"
      }
    }
  ]
]