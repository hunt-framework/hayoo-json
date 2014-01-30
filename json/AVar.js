[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AVar/docs/Data-AVar-Internal.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe guts of how AVars work.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.AVar.Internal",
        "fct-package": "AVar",
        "fct-signature": "module",
        "fct-source": "src/Data-AVar-Internal.html",
        "fct-type": "module",
        "title": "Internal"
      },
      "index": {
        "description": "The guts of how AVars work",
        "hierarchy": "Data AVar Internal",
        "module": "Data.AVar.Internal",
        "name": "Internal",
        "normalized": "",
        "package": "AVar",
        "partial": "Internal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AVar/docs/Data-AVar-Internal.html#t:AVar",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eAVar\u003c/a\u003e\u003c/code\u003es are the means through which communication with the variable are\n conducted. They contain a Chan that is \u003ccode\u003econnected\u003c/code\u003e to the variable, and\n is read by the variable's \u003ccode\u003ehandler\u003c/code\u003e function.\n\u003c/p\u003e",
        "fct-module": "Data.AVar.Internal",
        "fct-package": "AVar",
        "fct-signature": "data",
        "fct-source": "src/Data-AVar-Internal.html#AVar",
        "fct-type": "data",
        "title": "AVar"
      },
      "index": {
        "description": "AVar are the means through which communication with the variable are conducted They contain Chan that is connected to the variable and is read by the variable handler function",
        "hierarchy": "Data AVar Internal",
        "module": "Data.AVar.Internal",
        "name": "AVar",
        "normalized": "",
        "package": "AVar",
        "partial": "AVar",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AVar/docs/Data-AVar-Internal.html#t:Transaction",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eTransaction\u003c/a\u003e\u003c/code\u003e describes what should happen to a variable.\n They are only used internally, and are here just for reference.\n\u003c/p\u003e",
        "fct-module": "Data.AVar.Internal",
        "fct-package": "AVar",
        "fct-signature": "data",
        "fct-source": "src/Data-AVar-Internal.html#Transaction",
        "fct-type": "data",
        "title": "Transaction"
      },
      "index": {
        "description": "Transaction describes what should happen to variable They are only used internally and are here just for reference",
        "hierarchy": "Data AVar Internal",
        "module": "Data.AVar.Internal",
        "name": "Transaction",
        "normalized": "",
        "package": "AVar",
        "partial": "Transaction",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AVar/docs/Data-AVar-Internal.html#v:AVar",
      "description": {
        "fct-module": "Data.AVar.Internal",
        "fct-package": "AVar",
        "fct-signature": "AVar (Chan (Transaction a))",
        "fct-source": "src/Data-AVar-Internal.html#AVar",
        "fct-type": "function",
        "title": "AVar"
      },
      "index": {
        "description": "",
        "hierarchy": "Data AVar Internal",
        "module": "Data.AVar.Internal",
        "name": "AVar",
        "normalized": "",
        "package": "AVar",
        "partial": "AVar",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AVar/docs/Data-AVar-Internal.html#v:Atom",
      "description": {
        "fct-descr": "\u003cp\u003econditionally modifies a variable\n\u003c/p\u003e",
        "fct-module": "Data.AVar.Internal",
        "fct-package": "AVar",
        "fct-signature": "Atom (a -\u003e Bool) (a -\u003e a) (a -\u003e a) (MVar (Either SomeException Bool))",
        "fct-source": "src/Data-AVar-Internal.html#Transaction",
        "fct-type": "function",
        "title": "Atom"
      },
      "index": {
        "description": "conditionally modifies variable",
        "hierarchy": "Data AVar Internal",
        "module": "Data.AVar.Internal",
        "name": "Atom",
        "normalized": "Atom(a-\u003eBool)(a-\u003ea)(a-\u003ea)(MVar(Either SomeException Bool))",
        "package": "AVar",
        "partial": "Atom",
        "signature": "Atom(a-\u003eBool)(a-\u003ea)(a-\u003ea)(MVar(Either SomeException Bool))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AVar/docs/Data-AVar-Internal.html#v:Get",
      "description": {
        "fct-descr": "\u003cp\u003ereads the variable\n\u003c/p\u003e",
        "fct-module": "Data.AVar.Internal",
        "fct-package": "AVar",
        "fct-signature": "Get (MVar a)",
        "fct-source": "src/Data-AVar-Internal.html#Transaction",
        "fct-type": "function",
        "title": "Get"
      },
      "index": {
        "description": "reads the variable",
        "hierarchy": "Data AVar Internal",
        "module": "Data.AVar.Internal",
        "name": "Get",
        "normalized": "",
        "package": "AVar",
        "partial": "Get",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AVar/docs/Data-AVar-Internal.html#v:JustMod",
      "description": {
        "fct-descr": "\u003cp\u003eJust modifies the variable (unless an exception occurs)\n\u003c/p\u003e",
        "fct-module": "Data.AVar.Internal",
        "fct-package": "AVar",
        "fct-signature": "JustMod (a -\u003e a)",
        "fct-source": "src/Data-AVar-Internal.html#Transaction",
        "fct-type": "function",
        "title": "JustMod"
      },
      "index": {
        "description": "Just modifies the variable unless an exception occurs",
        "hierarchy": "Data AVar Internal",
        "module": "Data.AVar.Internal",
        "name": "JustMod",
        "normalized": "JustMod(a-\u003ea)",
        "package": "AVar",
        "partial": "Just Mod",
        "signature": "JustMod(a-\u003ea)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AVar/docs/Data-AVar-Internal.html#v:Mod",
      "description": {
        "fct-descr": "\u003cp\u003emodifies the variable\n\u003c/p\u003e",
        "fct-module": "Data.AVar.Internal",
        "fct-package": "AVar",
        "fct-signature": "Mod (a -\u003e a) (MVar (Maybe SomeException))",
        "fct-source": "src/Data-AVar-Internal.html#Transaction",
        "fct-type": "function",
        "title": "Mod"
      },
      "index": {
        "description": "modifies the variable",
        "hierarchy": "Data AVar Internal",
        "module": "Data.AVar.Internal",
        "name": "Mod",
        "normalized": "Mod(a-\u003ea)(MVar(Maybe SomeException))",
        "package": "AVar",
        "partial": "Mod",
        "signature": "Mod(a-\u003ea)(MVar(Maybe SomeException))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AVar/docs/Data-AVar-Internal.html#v:Mod-39-",
      "description": {
        "fct-descr": "\u003cp\u003emodifies the variable, returning the b result to the caller\n\u003c/p\u003e",
        "fct-module": "Data.AVar.Internal",
        "fct-package": "AVar",
        "fct-signature": "forall b . Mod' (a -\u003e (a, b)) (MVar (Either SomeException b))",
        "fct-source": "src/Data-AVar-Internal.html#Transaction",
        "fct-type": "function",
        "title": "Mod'"
      },
      "index": {
        "description": "modifies the variable returning the result to the caller",
        "hierarchy": "Data AVar Internal",
        "module": "Data.AVar.Internal",
        "name": "Mod'",
        "normalized": "a b Mod'(c-\u003e(c,b))(MVar(Either SomeException b))",
        "package": "AVar",
        "partial": "Mod'",
        "signature": "forall b Mod'(a-\u003e(a,b))(MVar(Either SomeException b))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AVar/docs/Data-AVar-Internal.html#v:Put",
      "description": {
        "fct-descr": "\u003cp\u003eputs the a into the variable\n\u003c/p\u003e",
        "fct-module": "Data.AVar.Internal",
        "fct-package": "AVar",
        "fct-signature": "Put a",
        "fct-source": "src/Data-AVar-Internal.html#Transaction",
        "fct-type": "function",
        "title": "Put"
      },
      "index": {
        "description": "puts the into the variable",
        "hierarchy": "Data AVar Internal",
        "module": "Data.AVar.Internal",
        "name": "Put",
        "normalized": "",
        "package": "AVar",
        "partial": "Put",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AVar/docs/Data-AVar-Internal.html#v:newAVar",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003enewAVar\u003c/a\u003e\u003c/code\u003e creates a new variable. It forks off the \u003ccode\u003ehandler\u003c/code\u003e that does the\n work for the variable itself and creates a new AVar.\n\u003c/p\u003e",
        "fct-module": "Data.AVar.Internal",
        "fct-package": "AVar",
        "fct-signature": "a -\u003e IO (AVar a)",
        "fct-source": "src/Data-AVar-Internal.html#newAVar",
        "fct-type": "function",
        "title": "newAVar"
      },
      "index": {
        "description": "newAVar creates new variable It forks off the handler that does the work for the variable itself and creates new AVar",
        "hierarchy": "Data AVar Internal",
        "module": "Data.AVar.Internal",
        "name": "newAVar",
        "normalized": "a-\u003eIO(AVar a)",
        "package": "AVar",
        "partial": "AVar",
        "signature": "a-\u003eIO(AVar a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AVar/docs/Data-AVar-Unsafe.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eData.AVar.Unsafe has a similar interface to Data.AVar, but instead of letting\n the user handle exceptions from Eithers, it will throw exceptions caught by\n the variable.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.AVar.Unsafe",
        "fct-package": "AVar",
        "fct-signature": "module",
        "fct-source": "src/Data-AVar-Unsafe.html",
        "fct-type": "module",
        "title": "Unsafe"
      },
      "index": {
        "description": "Data.AVar.Unsafe has similar interface to Data.AVar but instead of letting the user handle exceptions from Eithers it will throw exceptions caught by the variable",
        "hierarchy": "Data AVar Unsafe",
        "module": "Data.AVar.Unsafe",
        "name": "Unsafe",
        "normalized": "",
        "package": "AVar",
        "partial": "Unsafe",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AVar/docs/Data-AVar-Unsafe.html#t:AVar",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eAVar\u003c/a\u003e\u003c/code\u003es are the means through which communication with the variable are\n conducted. They contain a Chan that is \u003ccode\u003econnected\u003c/code\u003e to the variable, and\n is read by the variable's \u003ccode\u003ehandler\u003c/code\u003e function.\n\u003c/p\u003e",
        "fct-module": "Data.AVar.Unsafe",
        "fct-package": "AVar",
        "fct-signature": "data",
        "fct-source": "src/Data-AVar-Internal.html#AVar",
        "fct-type": "data",
        "title": "AVar"
      },
      "index": {
        "description": "AVar are the means through which communication with the variable are conducted They contain Chan that is connected to the variable and is read by the variable handler function",
        "hierarchy": "Data AVar Unsafe",
        "module": "Data.AVar.Unsafe",
        "name": "AVar",
        "normalized": "",
        "package": "AVar",
        "partial": "AVar",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AVar/docs/Data-AVar-Unsafe.html#t:Result",
      "description": {
        "fct-module": "Data.AVar.Unsafe",
        "fct-package": "AVar",
        "fct-signature": "data",
        "fct-source": "src/Data-AVar-Unsafe.html#Result",
        "fct-type": "data",
        "title": "Result"
      },
      "index": {
        "description": "",
        "hierarchy": "Data AVar Unsafe",
        "module": "Data.AVar.Unsafe",
        "name": "Result",
        "normalized": "",
        "package": "AVar",
        "partial": "Result",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AVar/docs/Data-AVar-Unsafe.html#v:OK",
      "description": {
        "fct-module": "Data.AVar.Unsafe",
        "fct-package": "AVar",
        "fct-signature": "OK",
        "fct-source": "src/Data-AVar-Unsafe.html#Result",
        "fct-type": "function",
        "title": "OK"
      },
      "index": {
        "description": "",
        "hierarchy": "Data AVar Unsafe",
        "module": "Data.AVar.Unsafe",
        "name": "OK",
        "normalized": "",
        "package": "AVar",
        "partial": "OK",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AVar/docs/Data-AVar-Unsafe.html#v:condModAVar",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003econdModAVar\u003c/a\u003e\u003c/code\u003e applies the first finction to the current value in the\n AVar, and will modify the value using the second function if\n it results in \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e, or the third function if it results in \u003ccode\u003eFasle\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.AVar.Unsafe",
        "fct-package": "AVar",
        "fct-signature": "AVar a -\u003e (a -\u003e Bool) -\u003e (a -\u003e a) -\u003e (a -\u003e a) -\u003e IO Bool",
        "fct-source": "src/Data-AVar-Unsafe.html#condModAVar",
        "fct-type": "function",
        "title": "condModAVar"
      },
      "index": {
        "description": "condModAVar applies the first finction to the current value in the AVar and will modify the value using the second function if it results in True or the third function if it results in Fasle",
        "hierarchy": "Data AVar Unsafe",
        "module": "Data.AVar.Unsafe",
        "name": "condModAVar",
        "normalized": "AVar a-\u003e(a-\u003eBool)-\u003e(a-\u003ea)-\u003e(a-\u003ea)-\u003eIO Bool",
        "package": "AVar",
        "partial": "Mod AVar",
        "signature": "AVar a-\u003e(a-\u003eBool)-\u003e(a-\u003ea)-\u003e(a-\u003ea)-\u003eIO Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AVar/docs/Data-AVar-Unsafe.html#v:getAVar",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003egetAVar\u003c/a\u003e\u003c/code\u003e reads the current value inside the AVar.\n\u003c/p\u003e",
        "fct-module": "Data.AVar.Unsafe",
        "fct-package": "AVar",
        "fct-signature": "AVar a -\u003e IO a",
        "fct-source": "src/Data-AVar-Unsafe.html#getAVar",
        "fct-type": "function",
        "title": "getAVar"
      },
      "index": {
        "description": "getAVar reads the current value inside the AVar",
        "hierarchy": "Data AVar Unsafe",
        "module": "Data.AVar.Unsafe",
        "name": "getAVar",
        "normalized": "AVar a-\u003eIO a",
        "package": "AVar",
        "partial": "AVar",
        "signature": "AVar a-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AVar/docs/Data-AVar-Unsafe.html#v:justModAVar",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ejustModAVar\u003c/a\u003e\u003c/code\u003e will attempt to run the given function on the variable.\n It does not report back on its sucess or failure, and if the function\n produces an exception, the variable is left unchanged. It should be\n used when you just want to modify the variable, and keep running,\n without waiting for the action to complete.\n\u003c/p\u003e",
        "fct-module": "Data.AVar.Unsafe",
        "fct-package": "AVar",
        "fct-signature": "AVar a -\u003e (a -\u003e a) -\u003e IO ()",
        "fct-source": "src/Data-AVar-Unsafe.html#justModAVar",
        "fct-type": "function",
        "title": "justModAVar"
      },
      "index": {
        "description": "justModAVar will attempt to run the given function on the variable It does not report back on its sucess or failure and if the function produces an exception the variable is left unchanged It should be used when you just want to modify the variable and keep running without waiting for the action to complete",
        "hierarchy": "Data AVar Unsafe",
        "module": "Data.AVar.Unsafe",
        "name": "justModAVar",
        "normalized": "AVar a-\u003e(a-\u003ea)-\u003eIO()",
        "package": "AVar",
        "partial": "Mod AVar",
        "signature": "AVar a-\u003e(a-\u003ea)-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AVar/docs/Data-AVar-Unsafe.html#v:modAVar",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003emodAVar\u003c/a\u003e\u003c/code\u003e takes a function from a to a, and modifies the variable. It will\n throw any exceptions caught by the variable when applying the function.\n\u003c/p\u003e",
        "fct-module": "Data.AVar.Unsafe",
        "fct-package": "AVar",
        "fct-signature": "AVar a -\u003e (a -\u003e a) -\u003e IO ()",
        "fct-source": "src/Data-AVar-Unsafe.html#modAVar",
        "fct-type": "function",
        "title": "modAVar"
      },
      "index": {
        "description": "modAVar takes function from to and modifies the variable It will throw any exceptions caught by the variable when applying the function",
        "hierarchy": "Data AVar Unsafe",
        "module": "Data.AVar.Unsafe",
        "name": "modAVar",
        "normalized": "AVar a-\u003e(a-\u003ea)-\u003eIO()",
        "package": "AVar",
        "partial": "AVar",
        "signature": "AVar a-\u003e(a-\u003ea)-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AVar/docs/Data-AVar-Unsafe.html#v:modAVar-39-",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003emodAVar'\u003c/a\u003e\u003c/code\u003e is like modAVar, but it modifies the variable, along with\n returning a result of type b. It also throws any errors caugh by the variable.\n\u003c/p\u003e",
        "fct-module": "Data.AVar.Unsafe",
        "fct-package": "AVar",
        "fct-signature": "AVar a -\u003e (a -\u003e (a, b)) -\u003e IO b",
        "fct-source": "src/Data-AVar-Unsafe.html#modAVar%27",
        "fct-type": "function",
        "title": "modAVar'"
      },
      "index": {
        "description": "modAVar is like modAVar but it modifies the variable along with returning result of type It also throws any errors caugh by the variable",
        "hierarchy": "Data AVar Unsafe",
        "module": "Data.AVar.Unsafe",
        "name": "modAVar'",
        "normalized": "AVar a-\u003e(a-\u003e(a,b))-\u003eIO b",
        "package": "AVar",
        "partial": "AVar'",
        "signature": "AVar a-\u003e(a-\u003e(a,b))-\u003eIO b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AVar/docs/Data-AVar-Unsafe.html#v:newAVar",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003enewAVar\u003c/a\u003e\u003c/code\u003e creates a new variable. It forks off the \u003ccode\u003ehandler\u003c/code\u003e that does the\n work for the variable itself and creates a new AVar.\n\u003c/p\u003e",
        "fct-module": "Data.AVar.Unsafe",
        "fct-package": "AVar",
        "fct-signature": "a -\u003e IO (AVar a)",
        "fct-source": "src/Data-AVar-Internal.html#newAVar",
        "fct-type": "function",
        "title": "newAVar"
      },
      "index": {
        "description": "newAVar creates new variable It forks off the handler that does the work for the variable itself and creates new AVar",
        "hierarchy": "Data AVar Unsafe",
        "module": "Data.AVar.Unsafe",
        "name": "newAVar",
        "normalized": "a-\u003eIO(AVar a)",
        "package": "AVar",
        "partial": "AVar",
        "signature": "a-\u003eIO(AVar a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AVar/docs/Data-AVar-Unsafe.html#v:putAVar",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eputAVar\u003c/a\u003e\u003c/code\u003e replaces the currect value in the variable with the given x\n\u003c/p\u003e",
        "fct-module": "Data.AVar.Unsafe",
        "fct-package": "AVar",
        "fct-signature": "AVar a -\u003e a -\u003e IO ()",
        "fct-source": "src/Data-AVar-Unsafe.html#putAVar",
        "fct-type": "function",
        "title": "putAVar"
      },
      "index": {
        "description": "putAVar replaces the currect value in the variable with the given",
        "hierarchy": "Data AVar Unsafe",
        "module": "Data.AVar.Unsafe",
        "name": "putAVar",
        "normalized": "AVar a-\u003ea-\u003eIO()",
        "package": "AVar",
        "partial": "AVar",
        "signature": "AVar a-\u003ea-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AVar/docs/Data-AVar-Unsafe.html#v:swapAVar",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eswapAVar\u003c/a\u003e\u003c/code\u003e takes a new value, puts it into the AVar, and returns the old value.\n\u003c/p\u003e",
        "fct-module": "Data.AVar.Unsafe",
        "fct-package": "AVar",
        "fct-signature": "AVar a -\u003e a -\u003e IO a",
        "fct-source": "src/Data-AVar-Unsafe.html#swapAVar",
        "fct-type": "function",
        "title": "swapAVar"
      },
      "index": {
        "description": "swapAVar takes new value puts it into the AVar and returns the old value",
        "hierarchy": "Data AVar Unsafe",
        "module": "Data.AVar.Unsafe",
        "name": "swapAVar",
        "normalized": "AVar a-\u003ea-\u003eIO a",
        "package": "AVar",
        "partial": "AVar",
        "signature": "AVar a-\u003ea-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AVar/docs/Data-AVar.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAVars are a form of transactional variables. They internally use a tail\n recursive function to carry the \u003ccode\u003estate\u003c/code\u003e of the variable, and allow for\n use in concurrent systems, where actions are guaranteed to happen. They\n are designed to cope with exceptions thrown by any modifying functions;\n any exception thrown during a transaction will either be passed back to\n the caller or ignored, and the variable keeps on running.\n\u003c/p\u003e\u003cp\u003eThey are handy for applications like keeping track of resources by\n incrementing and decrementing the variable. They should not be used in\n a way which you would read the variable, then modify it based on the\n result recieved, but rather using the provided functions. If this was\n not done, the variable's value is very likely to have changed in the\n mean time.\n\u003c/p\u003e\u003cp\u003eIf you're after a more unsafe interface to AVars, see Data.AVar.Unsafe,\n which will throw the errors returned fromt he variable.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.AVar",
        "fct-package": "AVar",
        "fct-signature": "module",
        "fct-source": "src/Data-AVar.html",
        "fct-type": "module",
        "title": "AVar"
      },
      "index": {
        "description": "AVars are form of transactional variables They internally use tail recursive function to carry the state of the variable and allow for use in concurrent systems where actions are guaranteed to happen They are designed to cope with exceptions thrown by any modifying functions any exception thrown during transaction will either be passed back to the caller or ignored and the variable keeps on running They are handy for applications like keeping track of resources by incrementing and decrementing the variable They should not be used in way which you would read the variable then modify it based on the result recieved but rather using the provided functions If this was not done the variable value is very likely to have changed in the mean time If you re after more unsafe interface to AVars see Data.AVar.Unsafe which will throw the errors returned fromt he variable",
        "hierarchy": "Data AVar",
        "module": "Data.AVar",
        "name": "AVar",
        "normalized": "",
        "package": "AVar",
        "partial": "AVar",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AVar/docs/Data-AVar.html#t:AVar",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eAVar\u003c/a\u003e\u003c/code\u003es are the means through which communication with the variable are\n conducted. They contain a Chan that is \u003ccode\u003econnected\u003c/code\u003e to the variable, and\n is read by the variable's \u003ccode\u003ehandler\u003c/code\u003e function.\n\u003c/p\u003e",
        "fct-module": "Data.AVar",
        "fct-package": "AVar",
        "fct-signature": "data",
        "fct-source": "src/Data-AVar-Internal.html#AVar",
        "fct-type": "data",
        "title": "AVar"
      },
      "index": {
        "description": "AVar are the means through which communication with the variable are conducted They contain Chan that is connected to the variable and is read by the variable handler function",
        "hierarchy": "Data AVar",
        "module": "Data.AVar",
        "name": "AVar",
        "normalized": "",
        "package": "AVar",
        "partial": "AVar",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AVar/docs/Data-AVar.html#v:condModAVar",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003econdModAVar\u003c/a\u003e\u003c/code\u003e applies the first finction to the current value in the\n AVar, and if true will modify the value using the second function if\n it results in True, or the third function if it results in Fasle.\n\u003c/p\u003e",
        "fct-module": "Data.AVar",
        "fct-package": "AVar",
        "fct-signature": "AVar a -\u003e (a -\u003e Bool) -\u003e (a -\u003e a) -\u003e (a -\u003e a) -\u003e IO (Either SomeException Bool)",
        "fct-source": "src/Data-AVar.html#condModAVar",
        "fct-type": "function",
        "title": "condModAVar"
      },
      "index": {
        "description": "condModAVar applies the first finction to the current value in the AVar and if true will modify the value using the second function if it results in True or the third function if it results in Fasle",
        "hierarchy": "Data AVar",
        "module": "Data.AVar",
        "name": "condModAVar",
        "normalized": "AVar a-\u003e(a-\u003eBool)-\u003e(a-\u003ea)-\u003e(a-\u003ea)-\u003eIO(Either SomeException Bool)",
        "package": "AVar",
        "partial": "Mod AVar",
        "signature": "AVar a-\u003e(a-\u003eBool)-\u003e(a-\u003ea)-\u003e(a-\u003ea)-\u003eIO(Either SomeException Bool)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AVar/docs/Data-AVar.html#v:getAVar",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003egetAVar\u003c/a\u003e\u003c/code\u003e reads the current value inside the AVar.\n\u003c/p\u003e",
        "fct-module": "Data.AVar",
        "fct-package": "AVar",
        "fct-signature": "AVar a -\u003e IO a",
        "fct-source": "src/Data-AVar.html#getAVar",
        "fct-type": "function",
        "title": "getAVar"
      },
      "index": {
        "description": "getAVar reads the current value inside the AVar",
        "hierarchy": "Data AVar",
        "module": "Data.AVar",
        "name": "getAVar",
        "normalized": "AVar a-\u003eIO a",
        "package": "AVar",
        "partial": "AVar",
        "signature": "AVar a-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AVar/docs/Data-AVar.html#v:justModAVar",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ejustModAVar\u003c/a\u003e\u003c/code\u003e will attempt to run the given function on the variable.\n It does not report back on its sucess or failure, and if the function\n produces an exception, the variable is left unchanged. It should be\n used when you just want to modify the variable, and keep running,\n without waiting for the action to complete.\n\u003c/p\u003e",
        "fct-module": "Data.AVar",
        "fct-package": "AVar",
        "fct-signature": "AVar a -\u003e (a -\u003e a) -\u003e IO ()",
        "fct-source": "src/Data-AVar.html#justModAVar",
        "fct-type": "function",
        "title": "justModAVar"
      },
      "index": {
        "description": "justModAVar will attempt to run the given function on the variable It does not report back on its sucess or failure and if the function produces an exception the variable is left unchanged It should be used when you just want to modify the variable and keep running without waiting for the action to complete",
        "hierarchy": "Data AVar",
        "module": "Data.AVar",
        "name": "justModAVar",
        "normalized": "AVar a-\u003e(a-\u003ea)-\u003eIO()",
        "package": "AVar",
        "partial": "Mod AVar",
        "signature": "AVar a-\u003e(a-\u003ea)-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AVar/docs/Data-AVar.html#v:modAVar",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003emodAVar\u003c/a\u003e\u003c/code\u003e takes a function from a to a, and returns Nothing if nothing went\n wrong, or Just e, where e is an exception thrown by the function.\n\u003c/p\u003e",
        "fct-module": "Data.AVar",
        "fct-package": "AVar",
        "fct-signature": "AVar a -\u003e (a -\u003e a) -\u003e IO (Maybe SomeException)",
        "fct-source": "src/Data-AVar.html#modAVar",
        "fct-type": "function",
        "title": "modAVar"
      },
      "index": {
        "description": "modAVar takes function from to and returns Nothing if nothing went wrong or Just where is an exception thrown by the function",
        "hierarchy": "Data AVar",
        "module": "Data.AVar",
        "name": "modAVar",
        "normalized": "AVar a-\u003e(a-\u003ea)-\u003eIO(Maybe SomeException)",
        "package": "AVar",
        "partial": "AVar",
        "signature": "AVar a-\u003e(a-\u003ea)-\u003eIO(Maybe SomeException)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AVar/docs/Data-AVar.html#v:modAVar-39-",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003emodAVar'\u003c/a\u003e\u003c/code\u003e is like modAVar, but it modifies the variable, along with\n returning a result of type b, within an Either e b.\n\u003c/p\u003e",
        "fct-module": "Data.AVar",
        "fct-package": "AVar",
        "fct-signature": "AVar a -\u003e (a -\u003e (a, b)) -\u003e IO (Either SomeException b)",
        "fct-source": "src/Data-AVar.html#modAVar%27",
        "fct-type": "function",
        "title": "modAVar'"
      },
      "index": {
        "description": "modAVar is like modAVar but it modifies the variable along with returning result of type within an Either",
        "hierarchy": "Data AVar",
        "module": "Data.AVar",
        "name": "modAVar'",
        "normalized": "AVar a-\u003e(a-\u003e(a,b))-\u003eIO(Either SomeException b)",
        "package": "AVar",
        "partial": "AVar'",
        "signature": "AVar a-\u003e(a-\u003e(a,b))-\u003eIO(Either SomeException b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AVar/docs/Data-AVar.html#v:newAVar",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003enewAVar\u003c/a\u003e\u003c/code\u003e creates a new variable. It forks off the \u003ccode\u003ehandler\u003c/code\u003e that does the\n work for the variable itself and creates a new AVar.\n\u003c/p\u003e",
        "fct-module": "Data.AVar",
        "fct-package": "AVar",
        "fct-signature": "a -\u003e IO (AVar a)",
        "fct-source": "src/Data-AVar-Internal.html#newAVar",
        "fct-type": "function",
        "title": "newAVar"
      },
      "index": {
        "description": "newAVar creates new variable It forks off the handler that does the work for the variable itself and creates new AVar",
        "hierarchy": "Data AVar",
        "module": "Data.AVar",
        "name": "newAVar",
        "normalized": "a-\u003eIO(AVar a)",
        "package": "AVar",
        "partial": "AVar",
        "signature": "a-\u003eIO(AVar a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AVar/docs/Data-AVar.html#v:putAVar",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eputAVar\u003c/a\u003e\u003c/code\u003e replaces the currect value in the variable with the given x\n\u003c/p\u003e",
        "fct-module": "Data.AVar",
        "fct-package": "AVar",
        "fct-signature": "AVar a -\u003e a -\u003e IO ()",
        "fct-source": "src/Data-AVar.html#putAVar",
        "fct-type": "function",
        "title": "putAVar"
      },
      "index": {
        "description": "putAVar replaces the currect value in the variable with the given",
        "hierarchy": "Data AVar",
        "module": "Data.AVar",
        "name": "putAVar",
        "normalized": "AVar a-\u003ea-\u003eIO()",
        "package": "AVar",
        "partial": "AVar",
        "signature": "AVar a-\u003ea-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AVar/docs/Data-AVar.html#v:swapAVar",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eswapAVar\u003c/a\u003e\u003c/code\u003e takes a new value, puts it into the AVar, and returns the old value.\n\u003c/p\u003e",
        "fct-module": "Data.AVar",
        "fct-package": "AVar",
        "fct-signature": "AVar a -\u003e a -\u003e IO (Either SomeException a)",
        "fct-source": "src/Data-AVar.html#swapAVar",
        "fct-type": "function",
        "title": "swapAVar"
      },
      "index": {
        "description": "swapAVar takes new value puts it into the AVar and returns the old value",
        "hierarchy": "Data AVar",
        "module": "Data.AVar",
        "name": "swapAVar",
        "normalized": "AVar a-\u003ea-\u003eIO(Either SomeException a)",
        "package": "AVar",
        "partial": "AVar",
        "signature": "AVar a-\u003ea-\u003eIO(Either SomeException a)"
      }
    }
  }
]