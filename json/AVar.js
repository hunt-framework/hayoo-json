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
        "word": "AVar"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe guts of how AVars work.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.AVar.Internal",
          "name": "Internal",
          "package": "AVar",
          "source": "src/Data-AVar-Internal.html",
          "type": "module"
        },
        "index": {
          "description": "The guts of how AVars work",
          "hierarchy": "Data AVar Internal",
          "module": "Data.AVar.Internal",
          "name": "Internal",
          "package": "AVar",
          "partial": "Internal",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/AVar/docs/Data-AVar-Internal.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eAVar\u003c/a\u003e\u003c/code\u003es are the means through which communication with the variable are\n conducted. They contain a Chan that is \u003ccode\u003econnected\u003c/code\u003e to the variable, and\n is read by the variable's \u003ccode\u003ehandler\u003c/code\u003e function.\n\u003c/p\u003e",
          "module": "Data.AVar.Internal",
          "name": "AVar",
          "package": "AVar",
          "source": "src/Data-AVar-Internal.html#AVar",
          "type": "data"
        },
        "index": {
          "description": "AVar are the means through which communication with the variable are conducted They contain Chan that is connected to the variable and is read by the variable handler function",
          "hierarchy": "Data AVar Internal",
          "module": "Data.AVar.Internal",
          "name": "AVar",
          "package": "AVar",
          "partial": "AVar",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/AVar/docs/Data-AVar-Internal.html#t:AVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eTransaction\u003c/a\u003e\u003c/code\u003e describes what should happen to a variable.\n They are only used internally, and are here just for reference.\n\u003c/p\u003e",
          "module": "Data.AVar.Internal",
          "name": "Transaction",
          "package": "AVar",
          "source": "src/Data-AVar-Internal.html#Transaction",
          "type": "data"
        },
        "index": {
          "description": "Transaction describes what should happen to variable They are only used internally and are here just for reference",
          "hierarchy": "Data AVar Internal",
          "module": "Data.AVar.Internal",
          "name": "Transaction",
          "package": "AVar",
          "partial": "Transaction",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/AVar/docs/Data-AVar-Internal.html#t:Transaction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.AVar.Internal",
          "name": "AVar",
          "package": "AVar",
          "signature": "AVar (Chan (Transaction a))",
          "source": "src/Data-AVar-Internal.html#AVar",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data AVar Internal",
          "module": "Data.AVar.Internal",
          "name": "AVar",
          "package": "AVar",
          "partial": "AVar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AVar/docs/Data-AVar-Internal.html#v:AVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003econditionally modifies a variable\n\u003c/p\u003e",
          "module": "Data.AVar.Internal",
          "name": "Atom",
          "package": "AVar",
          "signature": "Atom (a -\u003e Bool) (a -\u003e a) (a -\u003e a) (MVar (Either SomeException Bool))",
          "source": "src/Data-AVar-Internal.html#Transaction",
          "type": "function"
        },
        "index": {
          "description": "conditionally modifies variable",
          "hierarchy": "Data AVar Internal",
          "module": "Data.AVar.Internal",
          "name": "Atom",
          "normalized": "Atom(a-\u003eBool)(a-\u003ea)(a-\u003ea)(MVar(Either SomeException Bool))",
          "package": "AVar",
          "partial": "Atom",
          "signature": "Atom(a-\u003eBool)(a-\u003ea)(a-\u003ea)(MVar(Either SomeException Bool))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AVar/docs/Data-AVar-Internal.html#v:Atom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ereads the variable\n\u003c/p\u003e",
          "module": "Data.AVar.Internal",
          "name": "Get",
          "package": "AVar",
          "signature": "Get (MVar a)",
          "source": "src/Data-AVar-Internal.html#Transaction",
          "type": "function"
        },
        "index": {
          "description": "reads the variable",
          "hierarchy": "Data AVar Internal",
          "module": "Data.AVar.Internal",
          "name": "Get",
          "package": "AVar",
          "partial": "Get",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AVar/docs/Data-AVar-Internal.html#v:Get"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eJust modifies the variable (unless an exception occurs)\n\u003c/p\u003e",
          "module": "Data.AVar.Internal",
          "name": "JustMod",
          "package": "AVar",
          "signature": "JustMod (a -\u003e a)",
          "source": "src/Data-AVar-Internal.html#Transaction",
          "type": "function"
        },
        "index": {
          "description": "Just modifies the variable unless an exception occurs",
          "hierarchy": "Data AVar Internal",
          "module": "Data.AVar.Internal",
          "name": "JustMod",
          "normalized": "JustMod(a-\u003ea)",
          "package": "AVar",
          "partial": "Just Mod",
          "signature": "JustMod(a-\u003ea)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AVar/docs/Data-AVar-Internal.html#v:JustMod"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003emodifies the variable\n\u003c/p\u003e",
          "module": "Data.AVar.Internal",
          "name": "Mod",
          "package": "AVar",
          "signature": "Mod (a -\u003e a) (MVar (Maybe SomeException))",
          "source": "src/Data-AVar-Internal.html#Transaction",
          "type": "function"
        },
        "index": {
          "description": "modifies the variable",
          "hierarchy": "Data AVar Internal",
          "module": "Data.AVar.Internal",
          "name": "Mod",
          "normalized": "Mod(a-\u003ea)(MVar(Maybe SomeException))",
          "package": "AVar",
          "partial": "Mod",
          "signature": "Mod(a-\u003ea)(MVar(Maybe SomeException))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AVar/docs/Data-AVar-Internal.html#v:Mod"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003emodifies the variable, returning the b result to the caller\n\u003c/p\u003e",
          "module": "Data.AVar.Internal",
          "name": "Mod'",
          "package": "AVar",
          "signature": "forall b . Mod' (a -\u003e (a, b)) (MVar (Either SomeException b))",
          "source": "src/Data-AVar-Internal.html#Transaction",
          "type": "function"
        },
        "index": {
          "description": "modifies the variable returning the result to the caller",
          "hierarchy": "Data AVar Internal",
          "module": "Data.AVar.Internal",
          "name": "Mod'",
          "normalized": "a b Mod'(c-\u003e(c,b))(MVar(Either SomeException b))",
          "package": "AVar",
          "partial": "Mod'",
          "signature": "forall b Mod'(a-\u003e(a,b))(MVar(Either SomeException b))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AVar/docs/Data-AVar-Internal.html#v:Mod-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eputs the a into the variable\n\u003c/p\u003e",
          "module": "Data.AVar.Internal",
          "name": "Put",
          "package": "AVar",
          "signature": "Put a",
          "source": "src/Data-AVar-Internal.html#Transaction",
          "type": "function"
        },
        "index": {
          "description": "puts the into the variable",
          "hierarchy": "Data AVar Internal",
          "module": "Data.AVar.Internal",
          "name": "Put",
          "package": "AVar",
          "partial": "Put",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AVar/docs/Data-AVar-Internal.html#v:Put"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003enewAVar\u003c/a\u003e\u003c/code\u003e creates a new variable. It forks off the \u003ccode\u003ehandler\u003c/code\u003e that does the\n work for the variable itself and creates a new AVar.\n\u003c/p\u003e",
          "module": "[\"Data.AVar.Internal\",\"Data.AVar.Unsafe\",\"Data.AVar\"]",
          "name": "newAVar",
          "package": "AVar",
          "signature": "a -\u003e IO (AVar a)",
          "source": "src/Data-AVar-Internal.html#newAVar",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/AVar/docs/Data-AVar-Internal.html#v:newAVar\",\"http://hackage.haskell.org/package/AVar/docs/Data-AVar-Unsafe.html#v:newAVar\",\"http://hackage.haskell.org/package/AVar/docs/Data-AVar.html#v:newAVar\"]"
        },
        "index": {
          "description": "newAVar creates new variable It forks off the handler that does the work for the variable itself and creates new AVar",
          "hierarchy": "Data AVar Internal",
          "module": "Data.AVar.Internal",
          "name": "newAVar",
          "normalized": "a-\u003eIO(AVar a)",
          "package": "AVar",
          "partial": "AVar",
          "signature": "a-\u003eIO(AVar a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AVar/docs/Data-AVar-Internal.html#v:newAVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eData.AVar.Unsafe has a similar interface to Data.AVar, but instead of letting\n the user handle exceptions from Eithers, it will throw exceptions caught by\n the variable.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.AVar.Unsafe",
          "name": "Unsafe",
          "package": "AVar",
          "source": "src/Data-AVar-Unsafe.html",
          "type": "module"
        },
        "index": {
          "description": "Data.AVar.Unsafe has similar interface to Data.AVar but instead of letting the user handle exceptions from Eithers it will throw exceptions caught by the variable",
          "hierarchy": "Data AVar Unsafe",
          "module": "Data.AVar.Unsafe",
          "name": "Unsafe",
          "package": "AVar",
          "partial": "Unsafe",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/AVar/docs/Data-AVar-Unsafe.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eAVar\u003c/a\u003e\u003c/code\u003es are the means through which communication with the variable are\n conducted. They contain a Chan that is \u003ccode\u003econnected\u003c/code\u003e to the variable, and\n is read by the variable's \u003ccode\u003ehandler\u003c/code\u003e function.\n\u003c/p\u003e",
          "module": "Data.AVar.Unsafe",
          "name": "AVar",
          "package": "AVar",
          "source": "src/Data-AVar-Internal.html#AVar",
          "type": "data"
        },
        "index": {
          "description": "AVar are the means through which communication with the variable are conducted They contain Chan that is connected to the variable and is read by the variable handler function",
          "hierarchy": "Data AVar Unsafe",
          "module": "Data.AVar.Unsafe",
          "name": "AVar",
          "package": "AVar",
          "partial": "AVar",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/AVar/docs/Data-AVar-Unsafe.html#t:AVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.AVar.Unsafe",
          "name": "Result",
          "package": "AVar",
          "source": "src/Data-AVar-Unsafe.html#Result",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data AVar Unsafe",
          "module": "Data.AVar.Unsafe",
          "name": "Result",
          "package": "AVar",
          "partial": "Result",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/AVar/docs/Data-AVar-Unsafe.html#t:Result"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.AVar.Unsafe",
          "name": "OK",
          "package": "AVar",
          "signature": "OK",
          "source": "src/Data-AVar-Unsafe.html#Result",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data AVar Unsafe",
          "module": "Data.AVar.Unsafe",
          "name": "OK",
          "package": "AVar",
          "partial": "OK",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AVar/docs/Data-AVar-Unsafe.html#v:OK"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003econdModAVar\u003c/a\u003e\u003c/code\u003e applies the first finction to the current value in the\n AVar, and will modify the value using the second function if\n it results in \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e, or the third function if it results in \u003ccode\u003eFasle\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.AVar.Unsafe",
          "name": "condModAVar",
          "package": "AVar",
          "signature": "AVar a -\u003e (a -\u003e Bool) -\u003e (a -\u003e a) -\u003e (a -\u003e a) -\u003e IO Bool",
          "source": "src/Data-AVar-Unsafe.html#condModAVar",
          "type": "function"
        },
        "index": {
          "description": "condModAVar applies the first finction to the current value in the AVar and will modify the value using the second function if it results in True or the third function if it results in Fasle",
          "hierarchy": "Data AVar Unsafe",
          "module": "Data.AVar.Unsafe",
          "name": "condModAVar",
          "normalized": "AVar a-\u003e(a-\u003eBool)-\u003e(a-\u003ea)-\u003e(a-\u003ea)-\u003eIO Bool",
          "package": "AVar",
          "partial": "Mod AVar",
          "signature": "AVar a-\u003e(a-\u003eBool)-\u003e(a-\u003ea)-\u003e(a-\u003ea)-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AVar/docs/Data-AVar-Unsafe.html#v:condModAVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003egetAVar\u003c/a\u003e\u003c/code\u003e reads the current value inside the AVar.\n\u003c/p\u003e",
          "module": "Data.AVar.Unsafe",
          "name": "getAVar",
          "package": "AVar",
          "signature": "AVar a -\u003e IO a",
          "source": "src/Data-AVar-Unsafe.html#getAVar",
          "type": "function"
        },
        "index": {
          "description": "getAVar reads the current value inside the AVar",
          "hierarchy": "Data AVar Unsafe",
          "module": "Data.AVar.Unsafe",
          "name": "getAVar",
          "normalized": "AVar a-\u003eIO a",
          "package": "AVar",
          "partial": "AVar",
          "signature": "AVar a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AVar/docs/Data-AVar-Unsafe.html#v:getAVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ejustModAVar\u003c/a\u003e\u003c/code\u003e will attempt to run the given function on the variable.\n It does not report back on its sucess or failure, and if the function\n produces an exception, the variable is left unchanged. It should be\n used when you just want to modify the variable, and keep running,\n without waiting for the action to complete.\n\u003c/p\u003e",
          "module": "Data.AVar.Unsafe",
          "name": "justModAVar",
          "package": "AVar",
          "signature": "AVar a -\u003e (a -\u003e a) -\u003e IO ()",
          "source": "src/Data-AVar-Unsafe.html#justModAVar",
          "type": "function"
        },
        "index": {
          "description": "justModAVar will attempt to run the given function on the variable It does not report back on its sucess or failure and if the function produces an exception the variable is left unchanged It should be used when you just want to modify the variable and keep running without waiting for the action to complete",
          "hierarchy": "Data AVar Unsafe",
          "module": "Data.AVar.Unsafe",
          "name": "justModAVar",
          "normalized": "AVar a-\u003e(a-\u003ea)-\u003eIO()",
          "package": "AVar",
          "partial": "Mod AVar",
          "signature": "AVar a-\u003e(a-\u003ea)-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AVar/docs/Data-AVar-Unsafe.html#v:justModAVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003emodAVar\u003c/a\u003e\u003c/code\u003e takes a function from a to a, and modifies the variable. It will\n throw any exceptions caught by the variable when applying the function.\n\u003c/p\u003e",
          "module": "Data.AVar.Unsafe",
          "name": "modAVar",
          "package": "AVar",
          "signature": "AVar a -\u003e (a -\u003e a) -\u003e IO ()",
          "source": "src/Data-AVar-Unsafe.html#modAVar",
          "type": "function"
        },
        "index": {
          "description": "modAVar takes function from to and modifies the variable It will throw any exceptions caught by the variable when applying the function",
          "hierarchy": "Data AVar Unsafe",
          "module": "Data.AVar.Unsafe",
          "name": "modAVar",
          "normalized": "AVar a-\u003e(a-\u003ea)-\u003eIO()",
          "package": "AVar",
          "partial": "AVar",
          "signature": "AVar a-\u003e(a-\u003ea)-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AVar/docs/Data-AVar-Unsafe.html#v:modAVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003emodAVar'\u003c/a\u003e\u003c/code\u003e is like modAVar, but it modifies the variable, along with\n returning a result of type b. It also throws any errors caugh by the variable.\n\u003c/p\u003e",
          "module": "Data.AVar.Unsafe",
          "name": "modAVar'",
          "package": "AVar",
          "signature": "AVar a -\u003e (a -\u003e (a, b)) -\u003e IO b",
          "source": "src/Data-AVar-Unsafe.html#modAVar%27",
          "type": "function"
        },
        "index": {
          "description": "modAVar is like modAVar but it modifies the variable along with returning result of type It also throws any errors caugh by the variable",
          "hierarchy": "Data AVar Unsafe",
          "module": "Data.AVar.Unsafe",
          "name": "modAVar'",
          "normalized": "AVar a-\u003e(a-\u003e(a,b))-\u003eIO b",
          "package": "AVar",
          "partial": "AVar'",
          "signature": "AVar a-\u003e(a-\u003e(a,b))-\u003eIO b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AVar/docs/Data-AVar-Unsafe.html#v:modAVar-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eputAVar\u003c/a\u003e\u003c/code\u003e replaces the currect value in the variable with the given x\n\u003c/p\u003e",
          "module": "Data.AVar.Unsafe",
          "name": "putAVar",
          "package": "AVar",
          "signature": "AVar a -\u003e a -\u003e IO ()",
          "source": "src/Data-AVar-Unsafe.html#putAVar",
          "type": "function"
        },
        "index": {
          "description": "putAVar replaces the currect value in the variable with the given",
          "hierarchy": "Data AVar Unsafe",
          "module": "Data.AVar.Unsafe",
          "name": "putAVar",
          "normalized": "AVar a-\u003ea-\u003eIO()",
          "package": "AVar",
          "partial": "AVar",
          "signature": "AVar a-\u003ea-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AVar/docs/Data-AVar-Unsafe.html#v:putAVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eswapAVar\u003c/a\u003e\u003c/code\u003e takes a new value, puts it into the AVar, and returns the old value.\n\u003c/p\u003e",
          "module": "Data.AVar.Unsafe",
          "name": "swapAVar",
          "package": "AVar",
          "signature": "AVar a -\u003e a -\u003e IO a",
          "source": "src/Data-AVar-Unsafe.html#swapAVar",
          "type": "function"
        },
        "index": {
          "description": "swapAVar takes new value puts it into the AVar and returns the old value",
          "hierarchy": "Data AVar Unsafe",
          "module": "Data.AVar.Unsafe",
          "name": "swapAVar",
          "normalized": "AVar a-\u003ea-\u003eIO a",
          "package": "AVar",
          "partial": "AVar",
          "signature": "AVar a-\u003ea-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AVar/docs/Data-AVar-Unsafe.html#v:swapAVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAVars are a form of transactional variables. They internally use a tail\n recursive function to carry the \u003ccode\u003estate\u003c/code\u003e of the variable, and allow for\n use in concurrent systems, where actions are guaranteed to happen. They\n are designed to cope with exceptions thrown by any modifying functions;\n any exception thrown during a transaction will either be passed back to\n the caller or ignored, and the variable keeps on running.\n\u003c/p\u003e\u003cp\u003eThey are handy for applications like keeping track of resources by\n incrementing and decrementing the variable. They should not be used in\n a way which you would read the variable, then modify it based on the\n result recieved, but rather using the provided functions. If this was\n not done, the variable's value is very likely to have changed in the\n mean time.\n\u003c/p\u003e\u003cp\u003eIf you're after a more unsafe interface to AVars, see Data.AVar.Unsafe,\n which will throw the errors returned fromt he variable.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.AVar",
          "name": "AVar",
          "package": "AVar",
          "source": "src/Data-AVar.html",
          "type": "module"
        },
        "index": {
          "description": "AVars are form of transactional variables They internally use tail recursive function to carry the state of the variable and allow for use in concurrent systems where actions are guaranteed to happen They are designed to cope with exceptions thrown by any modifying functions any exception thrown during transaction will either be passed back to the caller or ignored and the variable keeps on running They are handy for applications like keeping track of resources by incrementing and decrementing the variable They should not be used in way which you would read the variable then modify it based on the result recieved but rather using the provided functions If this was not done the variable value is very likely to have changed in the mean time If you re after more unsafe interface to AVars see Data.AVar.Unsafe which will throw the errors returned fromt he variable",
          "hierarchy": "Data AVar",
          "module": "Data.AVar",
          "name": "AVar",
          "package": "AVar",
          "partial": "AVar",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/AVar/docs/Data-AVar.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eAVar\u003c/a\u003e\u003c/code\u003es are the means through which communication with the variable are\n conducted. They contain a Chan that is \u003ccode\u003econnected\u003c/code\u003e to the variable, and\n is read by the variable's \u003ccode\u003ehandler\u003c/code\u003e function.\n\u003c/p\u003e",
          "module": "Data.AVar",
          "name": "AVar",
          "package": "AVar",
          "source": "src/Data-AVar-Internal.html#AVar",
          "type": "data"
        },
        "index": {
          "description": "AVar are the means through which communication with the variable are conducted They contain Chan that is connected to the variable and is read by the variable handler function",
          "hierarchy": "Data AVar",
          "module": "Data.AVar",
          "name": "AVar",
          "package": "AVar",
          "partial": "AVar",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/AVar/docs/Data-AVar.html#t:AVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003econdModAVar\u003c/a\u003e\u003c/code\u003e applies the first finction to the current value in the\n AVar, and if true will modify the value using the second function if\n it results in True, or the third function if it results in Fasle.\n\u003c/p\u003e",
          "module": "Data.AVar",
          "name": "condModAVar",
          "package": "AVar",
          "signature": "AVar a -\u003e (a -\u003e Bool) -\u003e (a -\u003e a) -\u003e (a -\u003e a) -\u003e IO (Either SomeException Bool)",
          "source": "src/Data-AVar.html#condModAVar",
          "type": "function"
        },
        "index": {
          "description": "condModAVar applies the first finction to the current value in the AVar and if true will modify the value using the second function if it results in True or the third function if it results in Fasle",
          "hierarchy": "Data AVar",
          "module": "Data.AVar",
          "name": "condModAVar",
          "normalized": "AVar a-\u003e(a-\u003eBool)-\u003e(a-\u003ea)-\u003e(a-\u003ea)-\u003eIO(Either SomeException Bool)",
          "package": "AVar",
          "partial": "Mod AVar",
          "signature": "AVar a-\u003e(a-\u003eBool)-\u003e(a-\u003ea)-\u003e(a-\u003ea)-\u003eIO(Either SomeException Bool)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AVar/docs/Data-AVar.html#v:condModAVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003egetAVar\u003c/a\u003e\u003c/code\u003e reads the current value inside the AVar.\n\u003c/p\u003e",
          "module": "Data.AVar",
          "name": "getAVar",
          "package": "AVar",
          "signature": "AVar a -\u003e IO a",
          "source": "src/Data-AVar.html#getAVar",
          "type": "function"
        },
        "index": {
          "description": "getAVar reads the current value inside the AVar",
          "hierarchy": "Data AVar",
          "module": "Data.AVar",
          "name": "getAVar",
          "normalized": "AVar a-\u003eIO a",
          "package": "AVar",
          "partial": "AVar",
          "signature": "AVar a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AVar/docs/Data-AVar.html#v:getAVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ejustModAVar\u003c/a\u003e\u003c/code\u003e will attempt to run the given function on the variable.\n It does not report back on its sucess or failure, and if the function\n produces an exception, the variable is left unchanged. It should be\n used when you just want to modify the variable, and keep running,\n without waiting for the action to complete.\n\u003c/p\u003e",
          "module": "Data.AVar",
          "name": "justModAVar",
          "package": "AVar",
          "signature": "AVar a -\u003e (a -\u003e a) -\u003e IO ()",
          "source": "src/Data-AVar.html#justModAVar",
          "type": "function"
        },
        "index": {
          "description": "justModAVar will attempt to run the given function on the variable It does not report back on its sucess or failure and if the function produces an exception the variable is left unchanged It should be used when you just want to modify the variable and keep running without waiting for the action to complete",
          "hierarchy": "Data AVar",
          "module": "Data.AVar",
          "name": "justModAVar",
          "normalized": "AVar a-\u003e(a-\u003ea)-\u003eIO()",
          "package": "AVar",
          "partial": "Mod AVar",
          "signature": "AVar a-\u003e(a-\u003ea)-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AVar/docs/Data-AVar.html#v:justModAVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003emodAVar\u003c/a\u003e\u003c/code\u003e takes a function from a to a, and returns Nothing if nothing went\n wrong, or Just e, where e is an exception thrown by the function.\n\u003c/p\u003e",
          "module": "Data.AVar",
          "name": "modAVar",
          "package": "AVar",
          "signature": "AVar a -\u003e (a -\u003e a) -\u003e IO (Maybe SomeException)",
          "source": "src/Data-AVar.html#modAVar",
          "type": "function"
        },
        "index": {
          "description": "modAVar takes function from to and returns Nothing if nothing went wrong or Just where is an exception thrown by the function",
          "hierarchy": "Data AVar",
          "module": "Data.AVar",
          "name": "modAVar",
          "normalized": "AVar a-\u003e(a-\u003ea)-\u003eIO(Maybe SomeException)",
          "package": "AVar",
          "partial": "AVar",
          "signature": "AVar a-\u003e(a-\u003ea)-\u003eIO(Maybe SomeException)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AVar/docs/Data-AVar.html#v:modAVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003emodAVar'\u003c/a\u003e\u003c/code\u003e is like modAVar, but it modifies the variable, along with\n returning a result of type b, within an Either e b.\n\u003c/p\u003e",
          "module": "Data.AVar",
          "name": "modAVar'",
          "package": "AVar",
          "signature": "AVar a -\u003e (a -\u003e (a, b)) -\u003e IO (Either SomeException b)",
          "source": "src/Data-AVar.html#modAVar%27",
          "type": "function"
        },
        "index": {
          "description": "modAVar is like modAVar but it modifies the variable along with returning result of type within an Either",
          "hierarchy": "Data AVar",
          "module": "Data.AVar",
          "name": "modAVar'",
          "normalized": "AVar a-\u003e(a-\u003e(a,b))-\u003eIO(Either SomeException b)",
          "package": "AVar",
          "partial": "AVar'",
          "signature": "AVar a-\u003e(a-\u003e(a,b))-\u003eIO(Either SomeException b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AVar/docs/Data-AVar.html#v:modAVar-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eputAVar\u003c/a\u003e\u003c/code\u003e replaces the currect value in the variable with the given x\n\u003c/p\u003e",
          "module": "Data.AVar",
          "name": "putAVar",
          "package": "AVar",
          "signature": "AVar a -\u003e a -\u003e IO ()",
          "source": "src/Data-AVar.html#putAVar",
          "type": "function"
        },
        "index": {
          "description": "putAVar replaces the currect value in the variable with the given",
          "hierarchy": "Data AVar",
          "module": "Data.AVar",
          "name": "putAVar",
          "normalized": "AVar a-\u003ea-\u003eIO()",
          "package": "AVar",
          "partial": "AVar",
          "signature": "AVar a-\u003ea-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AVar/docs/Data-AVar.html#v:putAVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eswapAVar\u003c/a\u003e\u003c/code\u003e takes a new value, puts it into the AVar, and returns the old value.\n\u003c/p\u003e",
          "module": "Data.AVar",
          "name": "swapAVar",
          "package": "AVar",
          "signature": "AVar a -\u003e a -\u003e IO (Either SomeException a)",
          "source": "src/Data-AVar.html#swapAVar",
          "type": "function"
        },
        "index": {
          "description": "swapAVar takes new value puts it into the AVar and returns the old value",
          "hierarchy": "Data AVar",
          "module": "Data.AVar",
          "name": "swapAVar",
          "normalized": "AVar a-\u003ea-\u003eIO(Either SomeException a)",
          "package": "AVar",
          "partial": "AVar",
          "signature": "AVar a-\u003ea-\u003eIO(Either SomeException a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AVar/docs/Data-AVar.html#v:swapAVar"
      }
    }
  ]
]