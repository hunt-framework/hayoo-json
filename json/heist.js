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
        "word": "heist"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Heist.Compiled.LowLevel",
          "name": "LowLevel",
          "package": "heist",
          "source": "src/Heist-Compiled-LowLevel.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Heist Compiled LowLevel",
          "module": "Heist.Compiled.LowLevel",
          "name": "LowLevel",
          "package": "heist",
          "partial": "Low Level",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/heist/docs/Heist-Compiled-LowLevel.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePromises are used for referencing the results of future runtime\n computations during load time splice processing.\n\u003c/p\u003e",
          "module": "Heist.Compiled.LowLevel",
          "name": "Promise",
          "package": "heist",
          "source": "src/Heist-Compiled-Internal.html#Promise",
          "type": "data"
        },
        "index": {
          "description": "Promises are used for referencing the results of future runtime computations during load time splice processing",
          "hierarchy": "Heist Compiled LowLevel",
          "module": "Heist.Compiled.LowLevel",
          "name": "Promise",
          "package": "heist",
          "partial": "Promise",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/heist/docs/Heist-Compiled-LowLevel.html#t:Promise"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eModifies a promise.\n\u003c/p\u003e",
          "module": "Heist.Compiled.LowLevel",
          "name": "adjustPromise",
          "package": "heist",
          "signature": "Promise a -\u003e (a -\u003e a) -\u003e RuntimeSplice n ()",
          "source": "src/Heist-Compiled-Internal.html#adjustPromise",
          "type": "function"
        },
        "index": {
          "description": "Modifies promise",
          "hierarchy": "Heist Compiled LowLevel",
          "module": "Heist.Compiled.LowLevel",
          "name": "adjustPromise",
          "normalized": "Promise a-\u003e(a-\u003ea)-\u003eRuntimeSplice b()",
          "package": "heist",
          "partial": "Promise",
          "signature": "Promise a-\u003e(a-\u003ea)-\u003eRuntimeSplice n()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/heist/docs/Heist-Compiled-LowLevel.html#v:adjustPromise"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGets the result of a promised runtime computation.\n\u003c/p\u003e",
          "module": "Heist.Compiled.LowLevel",
          "name": "getPromise",
          "package": "heist",
          "signature": "Promise a -\u003e RuntimeSplice n a",
          "source": "src/Heist-Compiled-Internal.html#getPromise",
          "type": "function"
        },
        "index": {
          "description": "Gets the result of promised runtime computation",
          "hierarchy": "Heist Compiled LowLevel",
          "module": "Heist.Compiled.LowLevel",
          "name": "getPromise",
          "normalized": "Promise a-\u003eRuntimeSplice b a",
          "package": "heist",
          "partial": "Promise",
          "signature": "Promise a-\u003eRuntimeSplice n a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/heist/docs/Heist-Compiled-LowLevel.html#v:getPromise"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates an empty promise.\n\u003c/p\u003e",
          "module": "Heist.Compiled.LowLevel",
          "name": "newEmptyPromise",
          "package": "heist",
          "signature": "HeistT n IO (Promise a)",
          "source": "src/Heist-Compiled-Internal.html#newEmptyPromise",
          "type": "function"
        },
        "index": {
          "description": "Creates an empty promise",
          "hierarchy": "Heist Compiled LowLevel",
          "module": "Heist.Compiled.LowLevel",
          "name": "newEmptyPromise",
          "package": "heist",
          "partial": "Empty Promise",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/heist/docs/Heist-Compiled-LowLevel.html#v:newEmptyPromise"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdds a promise to the runtime splice context.\n\u003c/p\u003e",
          "module": "Heist.Compiled.LowLevel",
          "name": "putPromise",
          "package": "heist",
          "signature": "Promise a -\u003e a -\u003e RuntimeSplice n ()",
          "source": "src/Heist-Compiled-Internal.html#putPromise",
          "type": "function"
        },
        "index": {
          "description": "Adds promise to the runtime splice context",
          "hierarchy": "Heist Compiled LowLevel",
          "module": "Heist.Compiled.LowLevel",
          "name": "putPromise",
          "normalized": "Promise a-\u003ea-\u003eRuntimeSplice b()",
          "package": "heist",
          "partial": "Promise",
          "signature": "Promise a-\u003ea-\u003eRuntimeSplice n()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/heist/docs/Heist-Compiled-LowLevel.html#v:putPromise"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCompiled splices are similar to the original Heist (interpreted) splices, but\nwithout the high performance costs of traversing a DOM at runtime.  Compiled\nsplices do all of their DOM processing at load time.  They are compiled to\nproduce a runtime computation that generates a ByteString Builder.  This\npreserves the ability to write splices that access runtime information from\nthe HTTP request, database, etc.\n\u003c/p\u003e\u003cp\u003eIf you import both this module and \u003ca\u003eHeist.Interpreted\u003c/a\u003e in the same file, then\nyou will need to import them qualified.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Heist.Compiled",
          "name": "Compiled",
          "package": "heist",
          "source": "src/Heist-Compiled.html",
          "type": "module"
        },
        "index": {
          "description": "Compiled splices are similar to the original Heist interpreted splices but without the high performance costs of traversing DOM at runtime Compiled splices do all of their DOM processing at load time They are compiled to produce runtime computation that generates ByteString Builder This preserves the ability to write splices that access runtime information from the HTTP request database etc If you import both this module and Heist.Interpreted in the same file then you will need to import them qualified",
          "hierarchy": "Heist Compiled",
          "module": "Heist.Compiled",
          "name": "Compiled",
          "package": "heist",
          "partial": "Compiled",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/heist/docs/Heist-Compiled.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA compiled Splice is a HeistT computation that returns a \u003ccode\u003eDList\n (Chunk m)\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe more interesting part of the type signature is what comes before the\n return value.  The first type parameter in \u003ccode\u003e\u003ccode\u003e\u003ca\u003eHeistT\u003c/a\u003e\u003c/code\u003e n IO\u003c/code\u003e is the runtime\n monad.  This reveals that the Chunks know about the runtime monad.  The\n second type parameter in \u003ccode\u003eHeistT n IO\u003c/code\u003e is \u003ccode\u003eIO\u003c/code\u003e.  This tells is that the\n compiled splices themselves are run in the IO monad, which will usually\n mean at load time.  Compiled splices run at load time, and they return\n computations that run at runtime.\n\u003c/p\u003e",
          "module": "Heist.Compiled",
          "name": "Splice",
          "package": "heist",
          "source": "src/Heist-Compiled-Internal.html#Splice",
          "type": "type"
        },
        "index": {
          "description": "compiled Splice is HeistT computation that returns DList Chunk The more interesting part of the type signature is what comes before the return value The first type parameter in HeistT IO is the runtime monad This reveals that the Chunks know about the runtime monad The second type parameter in HeistT IO is IO This tells is that the compiled splices themselves are run in the IO monad which will usually mean at load time Compiled splices run at load time and they return computations that run at runtime",
          "hierarchy": "Heist Compiled",
          "module": "Heist.Compiled",
          "name": "Splice",
          "package": "heist",
          "partial": "Splice",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/heist/docs/Heist-Compiled.html#t:Splice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts an RuntimeSplice into a Splice, given a helper function that\n generates a Builder.\n\u003c/p\u003e",
          "module": "Heist.Compiled",
          "name": "bindLater",
          "package": "heist",
          "signature": "(a -\u003e RuntimeSplice n Builder) -\u003e RuntimeSplice n a -\u003e Splice n",
          "source": "src/Heist-Compiled-Internal.html#bindLater",
          "type": "function"
        },
        "index": {
          "description": "Converts an RuntimeSplice into Splice given helper function that generates Builder",
          "hierarchy": "Heist Compiled",
          "module": "Heist.Compiled",
          "name": "bindLater",
          "normalized": "(a-\u003eRuntimeSplice b Builder)-\u003eRuntimeSplice b a-\u003eSplice b",
          "package": "heist",
          "partial": "Later",
          "signature": "(a-\u003eRuntimeSplice n Builder)-\u003eRuntimeSplice n a-\u003eSplice n",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/heist/docs/Heist-Compiled.html#v:bindLater"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLooks up a compiled template and returns a compiled splice.\n\u003c/p\u003e",
          "module": "Heist.Compiled",
          "name": "callTemplate",
          "package": "heist",
          "signature": "ByteString -\u003e HeistT n IO (DList (Chunk n))",
          "source": "src/Heist-Compiled-Internal.html#callTemplate",
          "type": "function"
        },
        "index": {
          "description": "Looks up compiled template and returns compiled splice",
          "hierarchy": "Heist Compiled",
          "module": "Heist.Compiled",
          "name": "callTemplate",
          "normalized": "ByteString-\u003eHeistT a IO(DList(Chunk a))",
          "package": "heist",
          "partial": "Template",
          "signature": "ByteString-\u003eHeistT n IO(DList(Chunk n))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/heist/docs/Heist-Compiled.html#v:callTemplate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a list of output chunks, consolidate turns consecutive runs of\n \u003ccode\u003ePure Html\u003c/code\u003e values into maximally-efficient pre-rendered strict\n \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e chunks.\n\u003c/p\u003e",
          "module": "Heist.Compiled",
          "name": "codeGen",
          "package": "heist",
          "signature": "DList (Chunk n) -\u003e RuntimeSplice n Builder",
          "source": "src/Heist-Compiled-Internal.html#codeGen",
          "type": "function"
        },
        "index": {
          "description": "Given list of output chunks consolidate turns consecutive runs of Pure Html values into maximally-efficient pre-rendered strict ByteString chunks",
          "hierarchy": "Heist Compiled",
          "module": "Heist.Compiled",
          "name": "codeGen",
          "normalized": "DList(Chunk a)-\u003eRuntimeSplice a Builder",
          "package": "heist",
          "partial": "Gen",
          "signature": "DList(Chunk n)-\u003eRuntimeSplice n Builder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/heist/docs/Heist-Compiled.html#v:codeGen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimilar to \u003ccode\u003e\u003ca\u003emapSplices\u003c/a\u003e\u003c/code\u003e in interpreted mode.  Gets a runtime list of\n items and applies a compiled runtime splice function to each element of the\n list.\n\u003c/p\u003e",
          "module": "Heist.Compiled",
          "name": "deferMany",
          "package": "heist",
          "signature": "(RuntimeSplice n a -\u003e Splice n) -\u003e RuntimeSplice n [a] -\u003e Splice n",
          "source": "src/Heist-Compiled-Internal.html#deferMany",
          "type": "function"
        },
        "index": {
          "description": "Similar to mapSplices in interpreted mode Gets runtime list of items and applies compiled runtime splice function to each element of the list",
          "hierarchy": "Heist Compiled",
          "module": "Heist.Compiled",
          "name": "deferMany",
          "normalized": "(RuntimeSplice a b-\u003eSplice a)-\u003eRuntimeSplice a[b]-\u003eSplice a",
          "package": "heist",
          "partial": "Many",
          "signature": "(RuntimeSplice n a-\u003eSplice n)-\u003eRuntimeSplice n[a]-\u003eSplice n",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/heist/docs/Heist-Compiled.html#v:deferMany"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSaves the results of a runtme computation in a \u003ccode\u003e\u003ca\u003ePromise\u003c/a\u003e\u003c/code\u003e so they don't\n get recalculated if used more than once.\n\u003c/p\u003e",
          "module": "Heist.Compiled",
          "name": "deferMap",
          "package": "heist",
          "signature": "(a -\u003e RuntimeSplice n b) -\u003e (RuntimeSplice n b -\u003e Splice n) -\u003e RuntimeSplice n a -\u003e Splice n",
          "source": "src/Heist-Compiled-Internal.html#deferMap",
          "type": "function"
        },
        "index": {
          "description": "Saves the results of runtme computation in Promise so they don get recalculated if used more than once",
          "hierarchy": "Heist Compiled",
          "module": "Heist.Compiled",
          "name": "deferMap",
          "normalized": "(a-\u003eRuntimeSplice b c)-\u003e(RuntimeSplice b c-\u003eSplice b)-\u003eRuntimeSplice b a-\u003eSplice b",
          "package": "heist",
          "partial": "Map",
          "signature": "(a-\u003eRuntimeSplice n b)-\u003e(RuntimeSplice n b-\u003eSplice n)-\u003eRuntimeSplice n a-\u003eSplice n",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/heist/docs/Heist-Compiled.html#v:deferMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike withSplices, but evaluates the splice repeatedly for each element in\n a list generated at runtime.\n\u003c/p\u003e",
          "module": "Heist.Compiled",
          "name": "manyWithSplices",
          "package": "heist",
          "signature": "Splice n -\u003e Splices (RuntimeSplice n a -\u003e Splice n) -\u003e RuntimeSplice n [a] -\u003e Splice n",
          "source": "src/Heist-Compiled-Internal.html#manyWithSplices",
          "type": "function"
        },
        "index": {
          "description": "Like withSplices but evaluates the splice repeatedly for each element in list generated at runtime",
          "hierarchy": "Heist Compiled",
          "module": "Heist.Compiled",
          "name": "manyWithSplices",
          "normalized": "Splice a-\u003eSplices(RuntimeSplice a b-\u003eSplice a)-\u003eRuntimeSplice a[b]-\u003eSplice a",
          "package": "heist",
          "partial": "With Splices",
          "signature": "Splice n-\u003eSplices(RuntimeSplice n a-\u003eSplice n)-\u003eRuntimeSplice n[a]-\u003eSplice n",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/heist/docs/Heist-Compiled.html#v:manyWithSplices"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike deferMap, but only runs the result if a Maybe function of the\n runtime value returns Just.  If it returns Nothing, then no output is\n generated.\n\u003c/p\u003e\u003cp\u003eThis is a good example of how to do more complex flow control with\n promises.  The generalization of this abstraction is too complex to be\n distilled to elegant high-level combinators.  If you need to implement your\n own special flow control, then you should use functions from the\n \u003ccode\u003e\u003ca\u003eLowLevel\u003c/a\u003e\u003c/code\u003e module similarly to how it is done in the\n implementation of this function.\n\u003c/p\u003e",
          "module": "Heist.Compiled",
          "name": "mayDeferMap",
          "package": "heist",
          "signature": "(a -\u003e RuntimeSplice n (Maybe b)) -\u003e (RuntimeSplice n b -\u003e Splice n) -\u003e RuntimeSplice n a -\u003e Splice n",
          "source": "src/Heist-Compiled-Internal.html#mayDeferMap",
          "type": "function"
        },
        "index": {
          "description": "Like deferMap but only runs the result if Maybe function of the runtime value returns Just If it returns Nothing then no output is generated This is good example of how to do more complex flow control with promises The generalization of this abstraction is too complex to be distilled to elegant high-level combinators If you need to implement your own special flow control then you should use functions from the LowLevel module similarly to how it is done in the implementation of this function",
          "hierarchy": "Heist Compiled",
          "module": "Heist.Compiled",
          "name": "mayDeferMap",
          "normalized": "(a-\u003eRuntimeSplice b(Maybe c))-\u003e(RuntimeSplice b c-\u003eSplice b)-\u003eRuntimeSplice b a-\u003eSplice b",
          "package": "heist",
          "partial": "Defer Map",
          "signature": "(a-\u003eRuntimeSplice n(Maybe b))-\u003e(RuntimeSplice n b-\u003eSplice n)-\u003eRuntimeSplice n a-\u003eSplice n",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/heist/docs/Heist-Compiled.html#v:mayDeferMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts a pure Node splice function to a pure Builder splice function.\n\u003c/p\u003e",
          "module": "Heist.Compiled",
          "name": "nodeSplice",
          "package": "heist",
          "signature": "(a -\u003e [Node]) -\u003e a -\u003e Builder",
          "source": "src/Heist-Compiled-Internal.html#nodeSplice",
          "type": "function"
        },
        "index": {
          "description": "Converts pure Node splice function to pure Builder splice function",
          "hierarchy": "Heist Compiled",
          "module": "Heist.Compiled",
          "name": "nodeSplice",
          "normalized": "(a-\u003e[Node])-\u003ea-\u003eBuilder",
          "package": "heist",
          "partial": "Splice",
          "signature": "(a-\u003e[Node])-\u003ea-\u003eBuilder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/heist/docs/Heist-Compiled.html#v:nodeSplice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts a pure Builder splice function into a monadic splice function\n of a RuntimeSplice.\n\u003c/p\u003e",
          "module": "Heist.Compiled",
          "name": "pureSplice",
          "package": "heist",
          "signature": "(a -\u003e Builder) -\u003e RuntimeSplice n a -\u003e Splice n",
          "source": "src/Heist-Compiled-Internal.html#pureSplice",
          "type": "function"
        },
        "index": {
          "description": "Converts pure Builder splice function into monadic splice function of RuntimeSplice",
          "hierarchy": "Heist Compiled",
          "module": "Heist.Compiled",
          "name": "pureSplice",
          "normalized": "(a-\u003eBuilder)-\u003eRuntimeSplice b a-\u003eSplice b",
          "package": "heist",
          "partial": "Splice",
          "signature": "(a-\u003eBuilder)-\u003eRuntimeSplice n a-\u003eSplice n",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/heist/docs/Heist-Compiled.html#v:pureSplice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLooks up a compiled template and returns a runtime monad computation that\n constructs a builder.\n\u003c/p\u003e",
          "module": "Heist.Compiled",
          "name": "renderTemplate",
          "package": "heist",
          "signature": "HeistState n -\u003e ByteString -\u003e Maybe (n Builder, MIMEType)",
          "source": "src/Heist-Compiled-Internal.html#renderTemplate",
          "type": "function"
        },
        "index": {
          "description": "Looks up compiled template and returns runtime monad computation that constructs builder",
          "hierarchy": "Heist Compiled",
          "module": "Heist.Compiled",
          "name": "renderTemplate",
          "normalized": "HeistState a-\u003eByteString-\u003eMaybe(a Builder,MIMEType)",
          "package": "heist",
          "partial": "Template",
          "signature": "HeistState n-\u003eByteString-\u003eMaybe(n Builder,MIMEType)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/heist/docs/Heist-Compiled.html#v:renderTemplate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePerforms splice processing on a list of attributes.  This is useful in\n situations where you need to stop recursion, but still run splice\n processing on the node's attributes.\n\u003c/p\u003e",
          "module": "Heist.Compiled",
          "name": "runAttributes",
          "package": "heist",
          "signature": "[(Text, Text)]-\u003e HeistT n IO [DList (Chunk n)]",
          "type": "function"
        },
        "index": {
          "description": "Performs splice processing on list of attributes This is useful in situations where you need to stop recursion but still run splice processing on the node attributes",
          "hierarchy": "Heist Compiled",
          "module": "Heist.Compiled",
          "name": "runAttributes",
          "normalized": "[(Text,Text)]-\u003eHeistT a IO[DList(Chunk a)]",
          "package": "heist",
          "partial": "Attributes",
          "signature": "[(Text,Text)]-\u003eHeistT n IO[DList(Chunk n)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/heist/docs/Heist-Compiled.html#v:runAttributes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePerforms splice processing on a list of attributes.  This is useful in\n situations where you need to stop recursion, but still run splice\n processing on the node's attributes.\n\u003c/p\u003e",
          "module": "Heist.Compiled",
          "name": "runAttributesRaw",
          "package": "heist",
          "signature": "[(Text, Text)]-\u003e HeistT n IO (RuntimeSplice n [(Text, Text)])",
          "type": "function"
        },
        "index": {
          "description": "Performs splice processing on list of attributes This is useful in situations where you need to stop recursion but still run splice processing on the node attributes",
          "hierarchy": "Heist Compiled",
          "module": "Heist.Compiled",
          "name": "runAttributesRaw",
          "normalized": "[(Text,Text)]-\u003eHeistT a IO(RuntimeSplice a[(Text,Text)])",
          "package": "heist",
          "partial": "Attributes Raw",
          "signature": "[(Text,Text)]-\u003eHeistT n IO(RuntimeSplice n[(Text,Text)])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/heist/docs/Heist-Compiled.html#v:runAttributesRaw"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRuns the parameter node's children and returns the resulting compiled\n chunks.  By itself this function is a simple passthrough splice that makes\n the spliced node disappear.  In combination with locally bound splices,\n this function makes it easier to pass the desired view into your splices.\n\u003c/p\u003e",
          "module": "Heist.Compiled",
          "name": "runChildren",
          "package": "heist",
          "signature": "Splice n",
          "source": "src/Heist-Compiled-Internal.html#runChildren",
          "type": "function"
        },
        "index": {
          "description": "Runs the parameter node children and returns the resulting compiled chunks By itself this function is simple passthrough splice that makes the spliced node disappear In combination with locally bound splices this function makes it easier to pass the desired view into your splices",
          "hierarchy": "Heist Compiled",
          "module": "Heist.Compiled",
          "name": "runChildren",
          "package": "heist",
          "partial": "Children",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/heist/docs/Heist-Compiled.html#v:runChildren"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRuns a single node.  If there is no splice referenced anywhere in the\n subtree, then it is rendered as a pure chunk, otherwise it calls\n compileNode to generate the appropriate runtime computation.\n\u003c/p\u003e",
          "module": "Heist.Compiled",
          "name": "runNode",
          "package": "heist",
          "signature": "Node -\u003e Splice n",
          "source": "src/Heist-Compiled-Internal.html#runNode",
          "type": "function"
        },
        "index": {
          "description": "Runs single node If there is no splice referenced anywhere in the subtree then it is rendered as pure chunk otherwise it calls compileNode to generate the appropriate runtime computation",
          "hierarchy": "Heist Compiled",
          "module": "Heist.Compiled",
          "name": "runNode",
          "normalized": "Node-\u003eSplice a",
          "package": "heist",
          "partial": "Node",
          "signature": "Node-\u003eSplice n",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/heist/docs/Heist-Compiled.html#v:runNode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns a computation that performs load-time splice processing on the\n supplied list of nodes.\n\u003c/p\u003e",
          "module": "Heist.Compiled",
          "name": "runNodeList",
          "package": "heist",
          "signature": "[Node] -\u003e Splice n",
          "source": "src/Heist-Compiled-Internal.html#runNodeList",
          "type": "function"
        },
        "index": {
          "description": "Returns computation that performs load-time splice processing on the supplied list of nodes",
          "hierarchy": "Heist Compiled",
          "module": "Heist.Compiled",
          "name": "runNodeList",
          "normalized": "[Node]-\u003eSplice a",
          "package": "heist",
          "partial": "Node List",
          "signature": "[Node]-\u003eSplice n",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/heist/docs/Heist-Compiled.html#v:runNodeList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts a pure text splice function to a pure Builder splice function.\n\u003c/p\u003e",
          "module": "Heist.Compiled",
          "name": "textSplice",
          "package": "heist",
          "signature": "(a -\u003e Text) -\u003e a -\u003e Builder",
          "source": "src/Heist-Compiled-Internal.html#textSplice",
          "type": "function"
        },
        "index": {
          "description": "Converts pure text splice function to pure Builder splice function",
          "hierarchy": "Heist Compiled",
          "module": "Heist.Compiled",
          "name": "textSplice",
          "normalized": "(a-\u003eText)-\u003ea-\u003eBuilder",
          "package": "heist",
          "partial": "Splice",
          "signature": "(a-\u003eText)-\u003ea-\u003eBuilder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/heist/docs/Heist-Compiled.html#v:textSplice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdds a list of compiled splices to the splice map.  This function is\n useful because it allows compiled splices to bind other compiled splices\n during load-time splice processing.\n\u003c/p\u003e",
          "module": "Heist.Compiled",
          "name": "withLocalSplices",
          "package": "heist",
          "signature": "Splices (Splice n) -\u003e Splices (AttrSplice n) -\u003e HeistT n IO a -\u003e HeistT n IO a",
          "source": "src/Heist-Compiled-Internal.html#withLocalSplices",
          "type": "function"
        },
        "index": {
          "description": "Adds list of compiled splices to the splice map This function is useful because it allows compiled splices to bind other compiled splices during load-time splice processing",
          "hierarchy": "Heist Compiled",
          "module": "Heist.Compiled",
          "name": "withLocalSplices",
          "normalized": "Splices(Splice a)-\u003eSplices(AttrSplice a)-\u003eHeistT a IO b-\u003eHeistT a IO b",
          "package": "heist",
          "partial": "Local Splices",
          "signature": "Splices(Splice n)-\u003eSplices(AttrSplice n)-\u003eHeistT n IO a-\u003eHeistT n IO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/heist/docs/Heist-Compiled.html#v:withLocalSplices"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRuns a splice, but first binds splices given by splice functions that\n need some runtime data.\n\u003c/p\u003e",
          "module": "Heist.Compiled",
          "name": "withSplices",
          "package": "heist",
          "signature": "Splice n-\u003e Splices (RuntimeSplice n a -\u003e Splice n)-\u003e RuntimeSplice n a-\u003e Splice n",
          "type": "function"
        },
        "index": {
          "description": "Runs splice but first binds splices given by splice functions that need some runtime data",
          "hierarchy": "Heist Compiled",
          "module": "Heist.Compiled",
          "name": "withSplices",
          "normalized": "Splice a-\u003eSplices(RuntimeSplice a b-\u003eSplice a)-\u003eRuntimeSplice a b-\u003eSplice a",
          "package": "heist",
          "partial": "Splices",
          "signature": "Splice n-\u003eSplices(RuntimeSplice n a-\u003eSplice n)-\u003eRuntimeSplice n a-\u003eSplice n",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/heist/docs/Heist-Compiled.html#v:withSplices"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eYields a pure Builder known at load time.  You should use this and\n \u003ccode\u003e\u003ca\u003eyieldPureText\u003c/a\u003e\u003c/code\u003e as much as possible to maximize the parts of your page that\n can be compiled to static ByteStrings.\n\u003c/p\u003e",
          "module": "Heist.Compiled",
          "name": "yieldPure",
          "package": "heist",
          "signature": "Builder -\u003e DList (Chunk n)",
          "source": "src/Heist-Compiled-Internal.html#yieldPure",
          "type": "function"
        },
        "index": {
          "description": "Yields pure Builder known at load time You should use this and yieldPureText as much as possible to maximize the parts of your page that can be compiled to static ByteStrings",
          "hierarchy": "Heist Compiled",
          "module": "Heist.Compiled",
          "name": "yieldPure",
          "normalized": "Builder-\u003eDList(Chunk a)",
          "package": "heist",
          "partial": "Pure",
          "signature": "Builder-\u003eDList(Chunk n)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/heist/docs/Heist-Compiled.html#v:yieldPure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA convenience wrapper around yieldPure for working with Text.  Roughly\n equivalent to \u003ccode\u003e\u003ca\u003etextSplice\u003c/a\u003e\u003c/code\u003e from Heist.Interpreted.\n\u003c/p\u003e",
          "module": "Heist.Compiled",
          "name": "yieldPureText",
          "package": "heist",
          "signature": "Text -\u003e DList (Chunk n)",
          "source": "src/Heist-Compiled-Internal.html#yieldPureText",
          "type": "function"
        },
        "index": {
          "description": "convenience wrapper around yieldPure for working with Text Roughly equivalent to textSplice from Heist.Interpreted",
          "hierarchy": "Heist Compiled",
          "module": "Heist.Compiled",
          "name": "yieldPureText",
          "normalized": "Text-\u003eDList(Chunk a)",
          "package": "heist",
          "partial": "Pure Text",
          "signature": "Text-\u003eDList(Chunk n)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/heist/docs/Heist-Compiled.html#v:yieldPureText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eYields a runtime action that returns a builder.\n\u003c/p\u003e",
          "module": "Heist.Compiled",
          "name": "yieldRuntime",
          "package": "heist",
          "signature": "RuntimeSplice n Builder -\u003e DList (Chunk n)",
          "source": "src/Heist-Compiled-Internal.html#yieldRuntime",
          "type": "function"
        },
        "index": {
          "description": "Yields runtime action that returns builder",
          "hierarchy": "Heist Compiled",
          "module": "Heist.Compiled",
          "name": "yieldRuntime",
          "normalized": "RuntimeSplice a Builder-\u003eDList(Chunk a)",
          "package": "heist",
          "partial": "Runtime",
          "signature": "RuntimeSplice n Builder-\u003eDList(Chunk n)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/heist/docs/Heist-Compiled.html#v:yieldRuntime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eYields a runtime action that returns no value and is only needed for its\n side effect.\n\u003c/p\u003e",
          "module": "Heist.Compiled",
          "name": "yieldRuntimeEffect",
          "package": "heist",
          "signature": "RuntimeSplice n () -\u003e DList (Chunk n)",
          "source": "src/Heist-Compiled-Internal.html#yieldRuntimeEffect",
          "type": "function"
        },
        "index": {
          "description": "Yields runtime action that returns no value and is only needed for its side effect",
          "hierarchy": "Heist Compiled",
          "module": "Heist.Compiled",
          "name": "yieldRuntimeEffect",
          "normalized": "RuntimeSplice a()-\u003eDList(Chunk a)",
          "package": "heist",
          "partial": "Runtime Effect",
          "signature": "RuntimeSplice n()-\u003eDList(Chunk n)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/heist/docs/Heist-Compiled.html#v:yieldRuntimeEffect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvenience wrapper around yieldRuntime allowing you to work with Text.\n\u003c/p\u003e",
          "module": "Heist.Compiled",
          "name": "yieldRuntimeText",
          "package": "heist",
          "signature": "RuntimeSplice n Text -\u003e DList (Chunk n)",
          "source": "src/Heist-Compiled-Internal.html#yieldRuntimeText",
          "type": "function"
        },
        "index": {
          "description": "Convenience wrapper around yieldRuntime allowing you to work with Text",
          "hierarchy": "Heist Compiled",
          "module": "Heist.Compiled",
          "name": "yieldRuntimeText",
          "normalized": "RuntimeSplice a Text-\u003eDList(Chunk a)",
          "package": "heist",
          "partial": "Runtime Text",
          "signature": "RuntimeSplice n Text-\u003eDList(Chunk n)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/heist/docs/Heist-Compiled.html#v:yieldRuntimeText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module defines the API for writing and working with interpreted splices.\nIt exports some of the same symbols as \u003ca\u003eHeist.Compiled\u003c/a\u003e, so you will probably\nwant to import it qualified.\n\u003c/p\u003e\u003cp\u003eInterpreted splices can be thought of as a function \u003ccode\u003eNode -\u003e m [Node]\u003c/code\u003e.  Heist\nthen substitutes the resulting list of nodes into your template in place of\nthe input node.  \u003ccode\u003e\u003ca\u003eSplice\u003c/a\u003e\u003c/code\u003e is implemented as a type synonym \u003ccode\u003etype Splice m =\nHeistT m [Node]\u003c/code\u003e, and \u003ccode\u003eHeistT\u003c/code\u003e has a function \u003ccode\u003egetParamNode\u003c/code\u003e that lets you get\nthe input node.\n\u003c/p\u003e\u003cp\u003eSuppose you have a place on your page where you want to display a link with\nthe text \"Logout username\" if the user is currently logged in or a link to\nthe login page if no user is logged in.  Assume you have a function\n\u003ccode\u003egetUser :: MyAppMonad (Maybe Text)\u003c/code\u003e that gets the current user.\nYou can implement this functionality with a \u003ccode\u003e\u003ca\u003eSplice\u003c/a\u003e\u003c/code\u003e as follows:\n\u003c/p\u003e\u003cpre\u003e import           Blaze.ByteString.Builder\n import           Data.ByteString.Char8 (ByteString)\n import qualified Data.ByteString.Char8 as B\n import           Data.Text (Text)\n import qualified Data.Text as T\n import qualified Text.XmlHtml as X\n\n import qualified Heist.Interpreted as I\n\n link :: Text -\u003e Text -\u003e X.Node\n link target text = X.Element \"a\" [(\"href\", target)] [X.TextNode text]\n\n loginLink :: X.Node\n loginLink = link \"/login\" \"Login\"\n\n logoutLink :: Text -\u003e X.Node\n logoutLink user = link \"/logout\" (T.append \"Logout \" user)\n\n loginLogoutSplice :: I.Splice MyAppMonad\n loginLogoutSplice = do\n     user \u003c- lift getUser\n     return [maybe loginLink logoutLink user]\n\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Heist.Interpreted",
          "name": "Interpreted",
          "package": "heist",
          "source": "src/Heist-Interpreted.html",
          "type": "module"
        },
        "index": {
          "description": "This module defines the API for writing and working with interpreted splices It exports some of the same symbols as Heist.Compiled so you will probably want to import it qualified Interpreted splices can be thought of as function Node Node Heist then substitutes the resulting list of nodes into your template in place of the input node Splice is implemented as type synonym type Splice HeistT Node and HeistT has function getParamNode that lets you get the input node Suppose you have place on your page where you want to display link with the text Logout username if the user is currently logged in or link to the login page if no user is logged in Assume you have function getUser MyAppMonad Maybe Text that gets the current user You can implement this functionality with Splice as follows import Blaze.ByteString.Builder import Data.ByteString.Char8 ByteString import qualified Data.ByteString.Char8 as import Data.Text Text import qualified Data.Text as import qualified Text.XmlHtml as import qualified Heist.Interpreted as link Text Text X.Node link target text X.Element href target X.TextNode text loginLink X.Node loginLink link login Login logoutLink Text X.Node logoutLink user link logout T.append Logout user loginLogoutSplice I.Splice MyAppMonad loginLogoutSplice do user lift getUser return maybe loginLink logoutLink user",
          "hierarchy": "Heist Interpreted",
          "module": "Heist.Interpreted",
          "name": "Interpreted",
          "package": "heist",
          "partial": "Interpreted",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/heist/docs/Heist-Interpreted.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Heist.Interpreted",
          "name": "Splice",
          "package": "heist",
          "source": "src/Heist-Interpreted-Internal.html#Splice",
          "type": "type"
        },
        "index": {
          "hierarchy": "Heist Interpreted",
          "module": "Heist.Interpreted",
          "name": "Splice",
          "package": "heist",
          "partial": "Splice",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/heist/docs/Heist-Interpreted.html#t:Splice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdds an HTML format template to the heist state.\n\u003c/p\u003e",
          "module": "Heist.Interpreted",
          "name": "addTemplate",
          "package": "heist",
          "signature": "ByteString-\u003e Template-\u003e Maybe FilePath-\u003e HeistState n-\u003e HeistState n",
          "type": "function"
        },
        "index": {
          "description": "Adds an HTML format template to the heist state",
          "hierarchy": "Heist Interpreted",
          "module": "Heist.Interpreted",
          "name": "addTemplate",
          "normalized": "ByteString-\u003eTemplate-\u003eMaybe FilePath-\u003eHeistState a-\u003eHeistState a",
          "package": "heist",
          "partial": "Template",
          "signature": "ByteString-\u003eTemplate-\u003eMaybe FilePath-\u003eHeistState n-\u003eHeistState n",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/heist/docs/Heist-Interpreted.html#v:addTemplate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdds an XML format template to the heist state.\n\u003c/p\u003e",
          "module": "Heist.Interpreted",
          "name": "addXMLTemplate",
          "package": "heist",
          "signature": "ByteString-\u003e Template-\u003e Maybe FilePath-\u003e HeistState n-\u003e HeistState n",
          "type": "function"
        },
        "index": {
          "description": "Adds an XML format template to the heist state",
          "hierarchy": "Heist Interpreted",
          "module": "Heist.Interpreted",
          "name": "addXMLTemplate",
          "normalized": "ByteString-\u003eTemplate-\u003eMaybe FilePath-\u003eHeistState a-\u003eHeistState a",
          "package": "heist",
          "partial": "XMLTemplate",
          "signature": "ByteString-\u003eTemplate-\u003eMaybe FilePath-\u003eHeistState n-\u003eHeistState n",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/heist/docs/Heist-Interpreted.html#v:addXMLTemplate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBinds a set of new splice declarations within a \u003ccode\u003e\u003ca\u003eHeistState\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Heist.Interpreted",
          "name": "bindAttributeSplices",
          "package": "heist",
          "signature": "Splices (AttrSplice n)-\u003e HeistState n-\u003e HeistState n",
          "type": "function"
        },
        "index": {
          "description": "Binds set of new splice declarations within HeistState",
          "hierarchy": "Heist Interpreted",
          "module": "Heist.Interpreted",
          "name": "bindAttributeSplices",
          "normalized": "Splices(AttrSplice a)-\u003eHeistState a-\u003eHeistState a",
          "package": "heist",
          "partial": "Attribute Splices",
          "signature": "Splices(AttrSplice n)-\u003eHeistState n-\u003eHeistState n",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/heist/docs/Heist-Interpreted.html#v:bindAttributeSplices"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBinds a new splice declaration to a tag name within a \u003ccode\u003e\u003ca\u003eHeistState\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Heist.Interpreted",
          "name": "bindSplice",
          "package": "heist",
          "signature": "Text-\u003e Splice n-\u003e HeistState n-\u003e HeistState n",
          "type": "function"
        },
        "index": {
          "description": "Binds new splice declaration to tag name within HeistState",
          "hierarchy": "Heist Interpreted",
          "module": "Heist.Interpreted",
          "name": "bindSplice",
          "normalized": "Text-\u003eSplice a-\u003eHeistState a-\u003eHeistState a",
          "package": "heist",
          "partial": "Splice",
          "signature": "Text-\u003eSplice n-\u003eHeistState n-\u003eHeistState n",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/heist/docs/Heist-Interpreted.html#v:bindSplice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBinds a set of new splice declarations within a \u003ccode\u003e\u003ca\u003eHeistState\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Heist.Interpreted",
          "name": "bindSplices",
          "package": "heist",
          "signature": "Splices (Splice n)-\u003e HeistState n-\u003e HeistState n",
          "type": "function"
        },
        "index": {
          "description": "Binds set of new splice declarations within HeistState",
          "hierarchy": "Heist Interpreted",
          "module": "Heist.Interpreted",
          "name": "bindSplices",
          "normalized": "Splices(Splice a)-\u003eHeistState a-\u003eHeistState a",
          "package": "heist",
          "partial": "Splices",
          "signature": "Splices(Splice n)-\u003eHeistState n-\u003eHeistState n",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/heist/docs/Heist-Interpreted.html#v:bindSplices"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBinds a single constant string splice.\n\u003c/p\u003e",
          "module": "Heist.Interpreted",
          "name": "bindString",
          "package": "heist",
          "signature": "Text -\u003e Text -\u003e HeistState n -\u003e HeistState n",
          "source": "src/Heist-Interpreted-Internal.html#bindString",
          "type": "function"
        },
        "index": {
          "description": "Binds single constant string splice",
          "hierarchy": "Heist Interpreted",
          "module": "Heist.Interpreted",
          "name": "bindString",
          "normalized": "Text-\u003eText-\u003eHeistState a-\u003eHeistState a",
          "package": "heist",
          "partial": "String",
          "signature": "Text-\u003eText-\u003eHeistState n-\u003eHeistState n",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/heist/docs/Heist-Interpreted.html#v:bindString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBinds a list of constant string splices.\n\u003c/p\u003e",
          "module": "Heist.Interpreted",
          "name": "bindStrings",
          "package": "heist",
          "signature": "Splices Text -\u003e HeistState n -\u003e HeistState n",
          "source": "src/Heist-Interpreted-Internal.html#bindStrings",
          "type": "function"
        },
        "index": {
          "description": "Binds list of constant string splices",
          "hierarchy": "Heist Interpreted",
          "module": "Heist.Interpreted",
          "name": "bindStrings",
          "normalized": "Splices Text-\u003eHeistState a-\u003eHeistState a",
          "package": "heist",
          "partial": "Strings",
          "signature": "Splices Text-\u003eHeistState n-\u003eHeistState n",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/heist/docs/Heist-Interpreted.html#v:bindStrings"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRenders a template with the specified parameters.  This is the function\n to use when you want to \u003ca\u003ecall\u003c/a\u003e a template and pass in parameters from\n inside a splice.  If the template does not exist, this version simply\n returns an empty list.\n\u003c/p\u003e",
          "module": "Heist.Interpreted",
          "name": "callTemplate",
          "package": "heist",
          "signature": "ByteString-\u003e Splices (Splice n)-\u003e HeistT n n Template",
          "type": "function"
        },
        "index": {
          "description": "Renders template with the specified parameters This is the function to use when you want to call template and pass in parameters from inside splice If the template does not exist this version simply returns an empty list",
          "hierarchy": "Heist Interpreted",
          "module": "Heist.Interpreted",
          "name": "callTemplate",
          "normalized": "ByteString-\u003eSplices(Splice a)-\u003eHeistT a a Template",
          "package": "heist",
          "partial": "Template",
          "signature": "ByteString-\u003eSplices(Splice n)-\u003eHeistT n n Template",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/heist/docs/Heist-Interpreted.html#v:callTemplate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike callTemplate except the splices being bound are constant text\n splices.\n\u003c/p\u003e",
          "module": "Heist.Interpreted",
          "name": "callTemplateWithText",
          "package": "heist",
          "signature": "ByteString-\u003e Splices Text-\u003e HeistT n n Template",
          "type": "function"
        },
        "index": {
          "description": "Like callTemplate except the splices being bound are constant text splices",
          "hierarchy": "Heist Interpreted",
          "module": "Heist.Interpreted",
          "name": "callTemplateWithText",
          "normalized": "ByteString-\u003eSplices Text-\u003eHeistT a a Template",
          "package": "heist",
          "partial": "Template With Text",
          "signature": "ByteString-\u003eSplices Text-\u003eHeistT n n Template",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/heist/docs/Heist-Interpreted.html#v:callTemplateWithText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLooks up a template name evaluates it by calling runNodeList.\n\u003c/p\u003e",
          "module": "Heist.Interpreted",
          "name": "evalTemplate",
          "package": "heist",
          "signature": "ByteString -\u003e HeistT n n (Maybe Template)",
          "source": "src/Heist-Interpreted-Internal.html#evalTemplate",
          "type": "function"
        },
        "index": {
          "description": "Looks up template name evaluates it by calling runNodeList",
          "hierarchy": "Heist Interpreted",
          "module": "Heist.Interpreted",
          "name": "evalTemplate",
          "normalized": "ByteString-\u003eHeistT a a(Maybe Template)",
          "package": "heist",
          "partial": "Template",
          "signature": "ByteString-\u003eHeistT n n(Maybe Template)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/heist/docs/Heist-Interpreted.html#v:evalTemplate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvenience function for looking up a splice.\n\u003c/p\u003e",
          "module": "Heist.Interpreted",
          "name": "lookupSplice",
          "package": "heist",
          "signature": "Text -\u003e HeistState n -\u003e Maybe (Splice n)",
          "source": "src/Heist-Interpreted-Internal.html#lookupSplice",
          "type": "function"
        },
        "index": {
          "description": "Convenience function for looking up splice",
          "hierarchy": "Heist Interpreted",
          "module": "Heist.Interpreted",
          "name": "lookupSplice",
          "normalized": "Text-\u003eHeistState a-\u003eMaybe(Splice a)",
          "package": "heist",
          "partial": "Splice",
          "signature": "Text-\u003eHeistState n-\u003eMaybe(Splice n)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/heist/docs/Heist-Interpreted.html#v:lookupSplice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMaps a splice generating function over a list and concatenates the\n results.  This function now has a more general type signature so it works\n with both compiled and interpreted splices.  The old type signature was\n this:\n\u003c/p\u003e\u003cpre\u003e mapSplices :: (Monad n)\n         =\u003e (a -\u003e Splice n n)\n         -\u003e [a]\n         -\u003e Splice n n\n\u003c/pre\u003e",
          "module": "Heist.Interpreted",
          "name": "mapSplices",
          "package": "heist",
          "signature": "(a -\u003e m b)-\u003e [a]-\u003e m b",
          "type": "function"
        },
        "index": {
          "description": "Maps splice generating function over list and concatenates the results This function now has more general type signature so it works with both compiled and interpreted splices The old type signature was this mapSplices Monad Splice Splice",
          "hierarchy": "Heist Interpreted",
          "module": "Heist.Interpreted",
          "name": "mapSplices",
          "normalized": "(a-\u003eb c)-\u003e[a]-\u003eb c",
          "package": "heist",
          "partial": "Splices",
          "signature": "(a-\u003em b)-\u003e[a]-\u003em b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/heist/docs/Heist-Interpreted.html#v:mapSplices"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRenders a template from the specified HeistState to a \u003ccode\u003e\u003ca\u003eBuilder\u003c/a\u003e\u003c/code\u003e.  The\n MIME type returned is based on the detected character encoding, and whether\n the root template was an HTML or XML format template.  It will always be\n \u003ccode\u003etext\u003cem\u003ehtml@ or @text\u003c/em\u003exml\u003c/code\u003e.  If a more specific MIME type is needed for a\n particular XML application, it must be provided by the application.\n\u003c/p\u003e",
          "module": "Heist.Interpreted",
          "name": "renderTemplate",
          "package": "heist",
          "signature": "HeistState n -\u003e ByteString -\u003e n (Maybe (Builder, MIMEType))",
          "source": "src/Heist-Interpreted-Internal.html#renderTemplate",
          "type": "function"
        },
        "index": {
          "description": "Renders template from the specified HeistState to Builder The MIME type returned is based on the detected character encoding and whether the root template was an HTML or XML format template It will always be text html or text xml If more specific MIME type is needed for particular XML application it must be provided by the application",
          "hierarchy": "Heist Interpreted",
          "module": "Heist.Interpreted",
          "name": "renderTemplate",
          "normalized": "HeistState a-\u003eByteString-\u003ea(Maybe(Builder,MIMEType))",
          "package": "heist",
          "partial": "Template",
          "signature": "HeistState n-\u003eByteString-\u003en(Maybe(Builder,MIMEType))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/heist/docs/Heist-Interpreted.html#v:renderTemplate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRenders a template with the specified arguments passed to it.  This is a\n convenience function for the common pattern of calling renderTemplate after\n using bindString, bindStrings, or bindSplice to set up the arguments to the\n template.\n\u003c/p\u003e",
          "module": "Heist.Interpreted",
          "name": "renderWithArgs",
          "package": "heist",
          "signature": "Splices Text -\u003e HeistState n -\u003e ByteString -\u003e n (Maybe (Builder, MIMEType))",
          "source": "src/Heist-Interpreted-Internal.html#renderWithArgs",
          "type": "function"
        },
        "index": {
          "description": "Renders template with the specified arguments passed to it This is convenience function for the common pattern of calling renderTemplate after using bindString bindStrings or bindSplice to set up the arguments to the template",
          "hierarchy": "Heist Interpreted",
          "module": "Heist.Interpreted",
          "name": "renderWithArgs",
          "normalized": "Splices Text-\u003eHeistState a-\u003eByteString-\u003ea(Maybe(Builder,MIMEType))",
          "package": "heist",
          "partial": "With Args",
          "signature": "Splices Text-\u003eHeistState n-\u003eByteString-\u003en(Maybe(Builder,MIMEType))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/heist/docs/Heist-Interpreted.html#v:renderWithArgs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePerforms splice processing on a list of attributes.  This is useful in\n situations where you need to stop recursion, but still run splice\n processing on the node's attributes.\n\u003c/p\u003e",
          "module": "Heist.Interpreted",
          "name": "runAttributes",
          "package": "heist",
          "signature": "[(Text, Text)] -\u003e HeistT n n [(Text, Text)]",
          "source": "src/Heist-Interpreted-Internal.html#runAttributes",
          "type": "function"
        },
        "index": {
          "description": "Performs splice processing on list of attributes This is useful in situations where you need to stop recursion but still run splice processing on the node attributes",
          "hierarchy": "Heist Interpreted",
          "module": "Heist.Interpreted",
          "name": "runAttributes",
          "normalized": "[(Text,Text)]-\u003eHeistT a a[(Text,Text)]",
          "package": "heist",
          "partial": "Attributes",
          "signature": "[(Text,Text)]-\u003eHeistT n n[(Text,Text)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/heist/docs/Heist-Interpreted.html#v:runAttributes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRuns the parameter node's children and returns the resulting node list.\n By itself this function is a simple passthrough splice that makes the\n spliced node disappear.  In combination with locally bound splices, this\n function makes it easier to pass the desired view into your splices.\n\u003c/p\u003e",
          "module": "Heist.Interpreted",
          "name": "runChildren",
          "package": "heist",
          "signature": "Splice n",
          "source": "src/Heist-Interpreted-Internal.html#runChildren",
          "type": "function"
        },
        "index": {
          "description": "Runs the parameter node children and returns the resulting node list By itself this function is simple passthrough splice that makes the spliced node disappear In combination with locally bound splices this function makes it easier to pass the desired view into your splices",
          "hierarchy": "Heist Interpreted",
          "module": "Heist.Interpreted",
          "name": "runChildren",
          "package": "heist",
          "partial": "Children",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/heist/docs/Heist-Interpreted.html#v:runChildren"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBinds a list of splices before using the children of the spliced node as\n a view.\n\u003c/p\u003e",
          "module": "Heist.Interpreted",
          "name": "runChildrenWith",
          "package": "heist",
          "signature": "Splices (Splice n)-\u003e Splice n",
          "type": "function"
        },
        "index": {
          "description": "Binds list of splices before using the children of the spliced node as view",
          "hierarchy": "Heist Interpreted",
          "module": "Heist.Interpreted",
          "name": "runChildrenWith",
          "normalized": "Splices(Splice a)-\u003eSplice a",
          "package": "heist",
          "partial": "Children With",
          "signature": "Splices(Splice n)-\u003eSplice n",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/heist/docs/Heist-Interpreted.html#v:runChildrenWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike runChildrenWith but using constant templates rather than dynamic\n splices.\n\u003c/p\u003e",
          "module": "Heist.Interpreted",
          "name": "runChildrenWithTemplates",
          "package": "heist",
          "signature": "Splices Template -\u003e Splice n",
          "source": "src/Heist-Interpreted-Internal.html#runChildrenWithTemplates",
          "type": "function"
        },
        "index": {
          "description": "Like runChildrenWith but using constant templates rather than dynamic splices",
          "hierarchy": "Heist Interpreted",
          "module": "Heist.Interpreted",
          "name": "runChildrenWithTemplates",
          "normalized": "Splices Template-\u003eSplice a",
          "package": "heist",
          "partial": "Children With Templates",
          "signature": "Splices Template-\u003eSplice n",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/heist/docs/Heist-Interpreted.html#v:runChildrenWithTemplates"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike runChildrenWith but using literal text rather than dynamic splices.\n\u003c/p\u003e",
          "module": "Heist.Interpreted",
          "name": "runChildrenWithText",
          "package": "heist",
          "signature": "Splices Text -\u003e Splice n",
          "source": "src/Heist-Interpreted-Internal.html#runChildrenWithText",
          "type": "function"
        },
        "index": {
          "description": "Like runChildrenWith but using literal text rather than dynamic splices",
          "hierarchy": "Heist Interpreted",
          "module": "Heist.Interpreted",
          "name": "runChildrenWithText",
          "normalized": "Splices Text-\u003eSplice a",
          "package": "heist",
          "partial": "Children With Text",
          "signature": "Splices Text-\u003eSplice n",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/heist/docs/Heist-Interpreted.html#v:runChildrenWithText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrapper around runChildrenWith that applies a transformation function to\n the second item in each of the tuples before calling runChildrenWith.\n\u003c/p\u003e",
          "module": "Heist.Interpreted",
          "name": "runChildrenWithTrans",
          "package": "heist",
          "signature": "(b -\u003e Splice n)-\u003e Splices b-\u003e Splice n",
          "type": "function"
        },
        "index": {
          "description": "Wrapper around runChildrenWith that applies transformation function to the second item in each of the tuples before calling runChildrenWith",
          "hierarchy": "Heist Interpreted",
          "module": "Heist.Interpreted",
          "name": "runChildrenWithTrans",
          "normalized": "(a-\u003eSplice b)-\u003eSplices a-\u003eSplice b",
          "package": "heist",
          "partial": "Children With Trans",
          "signature": "(b-\u003eSplice n)-\u003eSplices b-\u003eSplice n",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/heist/docs/Heist-Interpreted.html#v:runChildrenWithTrans"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePerforms splice processing on a single node.\n\u003c/p\u003e",
          "module": "Heist.Interpreted",
          "name": "runNode",
          "package": "heist",
          "signature": "Node -\u003e Splice n",
          "source": "src/Heist-Interpreted-Internal.html#runNode",
          "type": "function"
        },
        "index": {
          "description": "Performs splice processing on single node",
          "hierarchy": "Heist Interpreted",
          "module": "Heist.Interpreted",
          "name": "runNode",
          "normalized": "Node-\u003eSplice a",
          "package": "heist",
          "partial": "Node",
          "signature": "Node-\u003eSplice n",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/heist/docs/Heist-Interpreted.html#v:runNode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePerforms splice processing on a list of nodes.\n\u003c/p\u003e",
          "module": "Heist.Interpreted",
          "name": "runNodeList",
          "package": "heist",
          "signature": "[Node] -\u003e Splice n",
          "source": "src/Heist-Interpreted-Internal.html#runNodeList",
          "type": "function"
        },
        "index": {
          "description": "Performs splice processing on list of nodes",
          "hierarchy": "Heist Interpreted",
          "module": "Heist.Interpreted",
          "name": "runNodeList",
          "normalized": "[Node]-\u003eSplice a",
          "package": "heist",
          "partial": "Node List",
          "signature": "[Node]-\u003eSplice n",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/heist/docs/Heist-Interpreted.html#v:runNodeList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStops the recursive processing of splices.  Consider the following\n example:\n\u003c/p\u003e\u003cpre\u003e \u003cfoo\u003e\n   \u003cbar\u003e\n     ...\n   \u003c/bar\u003e\n \u003c/foo\u003e\n\u003c/pre\u003e\u003cp\u003eAssume that \u003ccode\u003e\"foo\"\u003c/code\u003e is bound to a splice procedure. Running the \u003ccode\u003efoo\u003c/code\u003e\n splice will result in a list of nodes \u003ccode\u003eL\u003c/code\u003e.  Normally \u003ccode\u003efoo\u003c/code\u003e will recursively\n scan \u003ccode\u003eL\u003c/code\u003e for splices and run them.  If \u003ccode\u003efoo\u003c/code\u003e calls \u003ccode\u003estopRecursion\u003c/code\u003e, \u003ccode\u003eL\u003c/code\u003e\n will be included in the output verbatim without running any splices.\n\u003c/p\u003e",
          "module": "Heist.Interpreted",
          "name": "stopRecursion",
          "package": "heist",
          "signature": "HeistT n m ()",
          "source": "src/Heist-Interpreted-Internal.html#stopRecursion",
          "type": "function"
        },
        "index": {
          "description": "Stops the recursive processing of splices Consider the following example foo bar bar foo Assume that foo is bound to splice procedure Running the foo splice will result in list of nodes Normally foo will recursively scan for splices and run them If foo calls stopRecursion will be included in the output verbatim without running any splices",
          "hierarchy": "Heist Interpreted",
          "module": "Heist.Interpreted",
          "name": "stopRecursion",
          "normalized": "HeistT a b()",
          "package": "heist",
          "partial": "Recursion",
          "signature": "HeistT n m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/heist/docs/Heist-Interpreted.html#v:stopRecursion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e to a splice returning a single \u003ccode\u003eTextNode\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Heist.Interpreted",
          "name": "textSplice",
          "package": "heist",
          "signature": "Text -\u003e HeistT n m Template",
          "source": "src/Heist-Interpreted-Internal.html#textSplice",
          "type": "function"
        },
        "index": {
          "description": "Converts Text to splice returning single TextNode",
          "hierarchy": "Heist Interpreted",
          "module": "Heist.Interpreted",
          "name": "textSplice",
          "normalized": "Text-\u003eHeistT a b Template",
          "package": "heist",
          "partial": "Splice",
          "signature": "Text-\u003eHeistT n m Template",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/heist/docs/Heist-Interpreted.html#v:textSplice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAn API implementing a convenient syntax for defining and manipulating splices.\nThis module was born from the observation that a list of tuples is\nsemantically ambiguous about how duplicate keys should be handled.\nAdditionally, the syntax is inherently rather cumbersome and difficult to work\nwith.  This API takes advantage of do notation to provide a very light syntax\nfor defining splices while at the same time eliminating the semantic ambiguity\nof alists.\n\u003c/p\u003e\u003cp\u003eHere's how you can define splices:\n\u003c/p\u003e\u003cpre\u003e mySplices :: Splices Text\n mySplices = do\n   \"firstName\" ## \"John\"\n   \"lastName\"  ## \"Smith\"\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Heist.SpliceAPI",
          "name": "SpliceAPI",
          "package": "heist",
          "source": "src/Heist-SpliceAPI.html",
          "type": "module"
        },
        "index": {
          "description": "An API implementing convenient syntax for defining and manipulating splices This module was born from the observation that list of tuples is semantically ambiguous about how duplicate keys should be handled Additionally the syntax is inherently rather cumbersome and difficult to work with This API takes advantage of do notation to provide very light syntax for defining splices while at the same time eliminating the semantic ambiguity of alists Here how you can define splices mySplices Splices Text mySplices do firstName John lastName Smith",
          "hierarchy": "Heist SpliceAPI",
          "module": "Heist.SpliceAPI",
          "name": "SpliceAPI",
          "package": "heist",
          "partial": "Splice API",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/heist/docs/Heist-SpliceAPI.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvenient type alias that will probably be used most of the time.\n\u003c/p\u003e",
          "module": "Heist.SpliceAPI",
          "name": "Splices",
          "package": "heist",
          "source": "src/Heist-SpliceAPI.html#Splices",
          "type": "type"
        },
        "index": {
          "description": "Convenient type alias that will probably be used most of the time",
          "hierarchy": "Heist SpliceAPI",
          "module": "Heist.SpliceAPI",
          "name": "Splices",
          "package": "heist",
          "partial": "Splices",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/heist/docs/Heist-SpliceAPI.html#t:Splices"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA monad providing convenient syntax for defining splices.\n\u003c/p\u003e",
          "module": "Heist.SpliceAPI",
          "name": "SplicesM",
          "package": "heist",
          "source": "src/Heist-SpliceAPI.html#SplicesM",
          "type": "newtype"
        },
        "index": {
          "description": "monad providing convenient syntax for defining splices",
          "hierarchy": "Heist SpliceAPI",
          "module": "Heist.SpliceAPI",
          "name": "SplicesM",
          "package": "heist",
          "partial": "Splices",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/heist/docs/Heist-SpliceAPI.html#t:SplicesM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTries to add a splice, but if the key already exists, then it throws an\n error message.  This may be useful if name collisions are bad and you want\n to crash when they occur.\n\u003c/p\u003e",
          "module": "Heist.SpliceAPI",
          "name": "(#!)",
          "package": "heist",
          "signature": "Text -\u003e s -\u003e Splices s",
          "source": "src/Heist-SpliceAPI.html#%23%21",
          "type": "function"
        },
        "index": {
          "description": "Tries to add splice but if the key already exists then it throws an error message This may be useful if name collisions are bad and you want to crash when they occur",
          "hierarchy": "Heist SpliceAPI",
          "module": "Heist.SpliceAPI",
          "name": "(#!) #!",
          "normalized": "Text-\u003ea-\u003eSplices a",
          "package": "heist",
          "signature": "Text-\u003es-\u003eSplices s",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/heist/docs/Heist-SpliceAPI.html#v:-35--33-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eForces a splice to be added.  If the key already exists, its value is\n overwritten.\n\u003c/p\u003e",
          "module": "Heist.SpliceAPI",
          "name": "(##)",
          "package": "heist",
          "signature": "Text -\u003e s -\u003e Splices s",
          "source": "src/Heist-SpliceAPI.html#%23%23",
          "type": "function"
        },
        "index": {
          "description": "Forces splice to be added If the key already exists its value is overwritten",
          "hierarchy": "Heist SpliceAPI",
          "module": "Heist.SpliceAPI",
          "name": "(##) ##",
          "normalized": "Text-\u003ea-\u003eSplices a",
          "package": "heist",
          "signature": "Text-\u003es-\u003eSplices s",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/heist/docs/Heist-SpliceAPI.html#v:-35--35-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInserts into the map only if the key does not already exist.\n\u003c/p\u003e",
          "module": "Heist.SpliceAPI",
          "name": "(#?)",
          "package": "heist",
          "signature": "Text -\u003e s -\u003e Splices s",
          "source": "src/Heist-SpliceAPI.html#%23%3F",
          "type": "function"
        },
        "index": {
          "description": "Inserts into the map only if the key does not already exist",
          "hierarchy": "Heist SpliceAPI",
          "module": "Heist.SpliceAPI",
          "name": "(#?) #?",
          "normalized": "Text-\u003ea-\u003eSplices a",
          "package": "heist",
          "signature": "Text-\u003es-\u003eSplices s",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/heist/docs/Heist-SpliceAPI.html#v:-35--63-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInfix operator for \u003ccode\u003eflip applyS\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Heist.SpliceAPI",
          "name": "($$)",
          "package": "heist",
          "signature": "Splices (a -\u003e b) -\u003e a -\u003e Splices b",
          "source": "src/Heist-SpliceAPI.html#%24%24",
          "type": "function"
        },
        "index": {
          "description": "Infix operator for flip applyS",
          "hierarchy": "Heist SpliceAPI",
          "module": "Heist.SpliceAPI",
          "name": "($$) $$",
          "normalized": "Splices(a-\u003eb)-\u003ea-\u003eSplices b",
          "package": "heist",
          "signature": "Splices(a-\u003eb)-\u003ea-\u003eSplices b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/heist/docs/Heist-SpliceAPI.html#v:-36--36-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Heist.SpliceAPI",
          "name": "SplicesM",
          "package": "heist",
          "signature": "SplicesM",
          "source": "src/Heist-SpliceAPI.html#SplicesM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Heist SpliceAPI",
          "module": "Heist.SpliceAPI",
          "name": "SplicesM",
          "package": "heist",
          "partial": "Splices",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/heist/docs/Heist-SpliceAPI.html#v:SplicesM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInternal helper function for adding a map.\n\u003c/p\u003e",
          "module": "Heist.SpliceAPI",
          "name": "add",
          "package": "heist",
          "signature": "Map Text s -\u003e Splices s",
          "source": "src/Heist-SpliceAPI.html#add",
          "type": "function"
        },
        "index": {
          "description": "Internal helper function for adding map",
          "hierarchy": "Heist SpliceAPI",
          "module": "Heist.SpliceAPI",
          "name": "add",
          "normalized": "Map Text a-\u003eSplices a",
          "package": "heist",
          "signature": "Map Text s-\u003eSplices s",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/heist/docs/Heist-SpliceAPI.html#v:add"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApplies an argument to a splice function.\n\u003c/p\u003e",
          "module": "Heist.SpliceAPI",
          "name": "applyS",
          "package": "heist",
          "signature": "a -\u003e Splices (a -\u003e b) -\u003e Splices b",
          "source": "src/Heist-SpliceAPI.html#applyS",
          "type": "function"
        },
        "index": {
          "description": "Applies an argument to splice function",
          "hierarchy": "Heist SpliceAPI",
          "module": "Heist.SpliceAPI",
          "name": "applyS",
          "normalized": "a-\u003eSplices(a-\u003eb)-\u003eSplices b",
          "package": "heist",
          "signature": "a-\u003eSplices(a-\u003eb)-\u003eSplices b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/heist/docs/Heist-SpliceAPI.html#v:applyS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInserts a splice into the \u003ccode\u003e\u003ca\u003eSplices\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Heist.SpliceAPI",
          "name": "insertS",
          "package": "heist",
          "signature": "Text -\u003e s -\u003e Splices s -\u003e Splices s",
          "source": "src/Heist-SpliceAPI.html#insertS",
          "type": "function"
        },
        "index": {
          "description": "Inserts splice into the Splices",
          "hierarchy": "Heist SpliceAPI",
          "module": "Heist.SpliceAPI",
          "name": "insertS",
          "normalized": "Text-\u003ea-\u003eSplices a-\u003eSplices a",
          "package": "heist",
          "signature": "Text-\u003es-\u003eSplices s-\u003eSplices s",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/heist/docs/Heist-SpliceAPI.html#v:insertS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInserts a splice with a function combining new value and old value.\n\u003c/p\u003e",
          "module": "Heist.SpliceAPI",
          "name": "insertWithS",
          "package": "heist",
          "signature": "(s -\u003e s -\u003e s) -\u003e Text -\u003e s -\u003e SplicesM s a2 -\u003e SplicesM s ()",
          "source": "src/Heist-SpliceAPI.html#insertWithS",
          "type": "function"
        },
        "index": {
          "description": "Inserts splice with function combining new value and old value",
          "hierarchy": "Heist SpliceAPI",
          "module": "Heist.SpliceAPI",
          "name": "insertWithS",
          "normalized": "(a-\u003ea-\u003ea)-\u003eText-\u003ea-\u003eSplicesM a b-\u003eSplicesM a()",
          "package": "heist",
          "partial": "With",
          "signature": "(s-\u003es-\u003es)-\u003eText-\u003es-\u003eSplicesM s a-\u003eSplicesM s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/heist/docs/Heist-SpliceAPI.html#v:insertWithS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMaps a function over all the splice names.\n\u003c/p\u003e",
          "module": "Heist.SpliceAPI",
          "name": "mapNames",
          "package": "heist",
          "signature": "(Text -\u003e Text) -\u003e Splices a -\u003e Splices a",
          "source": "src/Heist-SpliceAPI.html#mapNames",
          "type": "function"
        },
        "index": {
          "description": "Maps function over all the splice names",
          "hierarchy": "Heist SpliceAPI",
          "module": "Heist.SpliceAPI",
          "name": "mapNames",
          "normalized": "(Text-\u003eText)-\u003eSplices a-\u003eSplices a",
          "package": "heist",
          "partial": "Names",
          "signature": "(Text-\u003eText)-\u003eSplices a-\u003eSplices a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/heist/docs/Heist-SpliceAPI.html#v:mapNames"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMaps a function over all the splices.\n\u003c/p\u003e",
          "module": "Heist.SpliceAPI",
          "name": "mapS",
          "package": "heist",
          "signature": "(a -\u003e b) -\u003e Splices a -\u003e Splices b",
          "source": "src/Heist-SpliceAPI.html#mapS",
          "type": "function"
        },
        "index": {
          "description": "Maps function over all the splices",
          "hierarchy": "Heist SpliceAPI",
          "module": "Heist.SpliceAPI",
          "name": "mapS",
          "normalized": "(a-\u003eb)-\u003eSplices a-\u003eSplices b",
          "package": "heist",
          "signature": "(a-\u003eb)-\u003eSplices a-\u003eSplices b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/heist/docs/Heist-SpliceAPI.html#v:mapS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eprefixSplices\u003c/a\u003e\u003c/code\u003e specialized to use a colon as separator in the style of\n XML namespaces.\n\u003c/p\u003e",
          "module": "Heist.SpliceAPI",
          "name": "namespaceSplices",
          "package": "heist",
          "signature": "Text -\u003e Splices a -\u003e Splices a",
          "source": "src/Heist-SpliceAPI.html#namespaceSplices",
          "type": "function"
        },
        "index": {
          "description": "prefixSplices specialized to use colon as separator in the style of XML namespaces",
          "hierarchy": "Heist SpliceAPI",
          "module": "Heist.SpliceAPI",
          "name": "namespaceSplices",
          "normalized": "Text-\u003eSplices a-\u003eSplices a",
          "package": "heist",
          "partial": "Splices",
          "signature": "Text-\u003eSplices a-\u003eSplices a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/heist/docs/Heist-SpliceAPI.html#v:namespaceSplices"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eSplices\u003c/a\u003e\u003c/code\u003e with nothing in it.\n\u003c/p\u003e",
          "module": "Heist.SpliceAPI",
          "name": "noSplices",
          "package": "heist",
          "signature": "Splices s",
          "source": "src/Heist-SpliceAPI.html#noSplices",
          "type": "function"
        },
        "index": {
          "description": "Splices with nothing in it",
          "hierarchy": "Heist SpliceAPI",
          "module": "Heist.SpliceAPI",
          "name": "noSplices",
          "package": "heist",
          "partial": "Splices",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/heist/docs/Heist-SpliceAPI.html#v:noSplices"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdds a prefix to the tag names for a list of splices.  If the existing\n tag name is empty, then the new tag name is just the prefix.  Otherwise the\n new tag name is the prefix followed by the separator followed by the\n existing name.\n\u003c/p\u003e",
          "module": "Heist.SpliceAPI",
          "name": "prefixSplices",
          "package": "heist",
          "signature": "Text -\u003e Text -\u003e Splices a -\u003e Splices a",
          "source": "src/Heist-SpliceAPI.html#prefixSplices",
          "type": "function"
        },
        "index": {
          "description": "Adds prefix to the tag names for list of splices If the existing tag name is empty then the new tag name is just the prefix Otherwise the new tag name is the prefix followed by the separator followed by the existing name",
          "hierarchy": "Heist SpliceAPI",
          "module": "Heist.SpliceAPI",
          "name": "prefixSplices",
          "normalized": "Text-\u003eText-\u003eSplices a-\u003eSplices a",
          "package": "heist",
          "partial": "Splices",
          "signature": "Text-\u003eText-\u003eSplices a-\u003eSplices a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/heist/docs/Heist-SpliceAPI.html#v:prefixSplices"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRuns the SplicesM monad, generating a map of splices.\n\u003c/p\u003e",
          "module": "Heist.SpliceAPI",
          "name": "runSplices",
          "package": "heist",
          "signature": "SplicesM s a -\u003e Map Text s",
          "source": "src/Heist-SpliceAPI.html#runSplices",
          "type": "function"
        },
        "index": {
          "description": "Runs the SplicesM monad generating map of splices",
          "hierarchy": "Heist SpliceAPI",
          "module": "Heist.SpliceAPI",
          "name": "runSplices",
          "normalized": "SplicesM a b-\u003eMap Text a",
          "package": "heist",
          "partial": "Splices",
          "signature": "SplicesM s a-\u003eMap Text s",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/heist/docs/Heist-SpliceAPI.html#v:runSplices"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstructs an alist representation.\n\u003c/p\u003e",
          "module": "Heist.SpliceAPI",
          "name": "splicesToList",
          "package": "heist",
          "signature": "SplicesM s a -\u003e [(Text, s)]",
          "source": "src/Heist-SpliceAPI.html#splicesToList",
          "type": "function"
        },
        "index": {
          "description": "Constructs an alist representation",
          "hierarchy": "Heist SpliceAPI",
          "module": "Heist.SpliceAPI",
          "name": "splicesToList",
          "normalized": "SplicesM a b-\u003e[(Text,a)]",
          "package": "heist",
          "partial": "To List",
          "signature": "SplicesM s a-\u003e[(Text,s)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/heist/docs/Heist-SpliceAPI.html#v:splicesToList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Heist.SpliceAPI",
          "name": "unSplices",
          "package": "heist",
          "signature": "State (Map Text s) a",
          "source": "src/Heist-SpliceAPI.html#SplicesM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Heist SpliceAPI",
          "module": "Heist.SpliceAPI",
          "name": "unSplices",
          "package": "heist",
          "partial": "Splices",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/heist/docs/Heist-SpliceAPI.html#v:unSplices"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnion of \u003ccode\u003e\u003ca\u003eSplices\u003c/a\u003e\u003c/code\u003e with a combining function.\n\u003c/p\u003e",
          "module": "Heist.SpliceAPI",
          "name": "unionWithS",
          "package": "heist",
          "signature": "(s -\u003e s -\u003e s) -\u003e SplicesM s a1 -\u003e SplicesM s a2 -\u003e SplicesM s ()",
          "source": "src/Heist-SpliceAPI.html#unionWithS",
          "type": "function"
        },
        "index": {
          "description": "Union of Splices with combining function",
          "hierarchy": "Heist SpliceAPI",
          "module": "Heist.SpliceAPI",
          "name": "unionWithS",
          "normalized": "(a-\u003ea-\u003ea)-\u003eSplicesM a b-\u003eSplicesM a b-\u003eSplicesM a()",
          "package": "heist",
          "partial": "With",
          "signature": "(s-\u003es-\u003es)-\u003eSplicesM s a-\u003eSplicesM s a-\u003eSplicesM s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/heist/docs/Heist-SpliceAPI.html#v:unionWithS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Heist.Splices.Apply",
          "name": "Apply",
          "package": "heist",
          "source": "src/Heist-Splices-Apply.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Heist Splices Apply",
          "module": "Heist.Splices.Apply",
          "name": "Apply",
          "package": "heist",
          "partial": "Apply",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/heist/docs/Heist-Splices-Apply.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefault attribute name for the apply tag.\n\u003c/p\u003e",
          "module": "Heist.Splices.Apply",
          "name": "applyAttr",
          "package": "heist",
          "signature": "Text",
          "source": "src/Heist-Splices-Apply.html#applyAttr",
          "type": "function"
        },
        "index": {
          "description": "Default attribute name for the apply tag",
          "hierarchy": "Heist Splices Apply",
          "module": "Heist.Splices.Apply",
          "name": "applyAttr",
          "package": "heist",
          "partial": "Attr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/heist/docs/Heist-Splices-Apply.html#v:applyAttr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eImplementation of the apply splice.\n\u003c/p\u003e",
          "module": "Heist.Splices.Apply",
          "name": "applyImpl",
          "package": "heist",
          "signature": "Splice n",
          "source": "src/Heist-Splices-Apply.html#applyImpl",
          "type": "function"
        },
        "index": {
          "description": "Implementation of the apply splice",
          "hierarchy": "Heist Splices Apply",
          "module": "Heist.Splices.Apply",
          "name": "applyImpl",
          "package": "heist",
          "partial": "Impl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/heist/docs/Heist-Splices-Apply.html#v:applyImpl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApplies a template as if the supplied nodes were the children of the\n \u003ca\u003eapply\u003c/a\u003e tag.\n\u003c/p\u003e",
          "module": "Heist.Splices.Apply",
          "name": "applyNodes",
          "package": "heist",
          "signature": "Template -\u003e Text -\u003e Splice n",
          "source": "src/Heist-Splices-Apply.html#applyNodes",
          "type": "function"
        },
        "index": {
          "description": "Applies template as if the supplied nodes were the children of the apply tag",
          "hierarchy": "Heist Splices Apply",
          "module": "Heist.Splices.Apply",
          "name": "applyNodes",
          "normalized": "Template-\u003eText-\u003eSplice a",
          "package": "heist",
          "partial": "Nodes",
          "signature": "Template-\u003eText-\u003eSplice n",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/heist/docs/Heist-Splices-Apply.html#v:applyNodes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefault name for the apply splice.\n\u003c/p\u003e",
          "module": "Heist.Splices.Apply",
          "name": "applyTag",
          "package": "heist",
          "signature": "Text",
          "source": "src/Heist-Splices-Apply.html#applyTag",
          "type": "function"
        },
        "index": {
          "description": "Default name for the apply splice",
          "hierarchy": "Heist Splices Apply",
          "module": "Heist.Splices.Apply",
          "name": "applyTag",
          "package": "heist",
          "partial": "Tag",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/heist/docs/Heist-Splices-Apply.html#v:applyTag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis splice crashes with an error message.  Its purpose is to provide a\n load-time warning to anyone still using the old content tag in their\n templates.  In Heist 0.10, tho content tag was replaced by two separate\n apply-content and bind-content tags used by the apply and bind splices\n respectively.\n\u003c/p\u003e",
          "module": "Heist.Splices.Apply",
          "name": "deprecatedContentCheck",
          "package": "heist",
          "signature": "Splice m",
          "source": "src/Heist-Splices-Apply.html#deprecatedContentCheck",
          "type": "function"
        },
        "index": {
          "description": "This splice crashes with an error message Its purpose is to provide load-time warning to anyone still using the old content tag in their templates In Heist tho content tag was replaced by two separate apply-content and bind-content tags used by the apply and bind splices respectively",
          "hierarchy": "Heist Splices Apply",
          "module": "Heist.Splices.Apply",
          "name": "deprecatedContentCheck",
          "package": "heist",
          "partial": "Content Check",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/heist/docs/Heist-Splices-Apply.html#v:deprecatedContentCheck"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Heist.Splices.Apply",
          "name": "rawApply",
          "package": "heist",
          "signature": "Text -\u003e [Node] -\u003e Maybe FilePath -\u003e TPath -\u003e [Node] -\u003e Splice n",
          "source": "src/Heist-Splices-Apply.html#rawApply",
          "type": "function"
        },
        "index": {
          "hierarchy": "Heist Splices Apply",
          "module": "Heist.Splices.Apply",
          "name": "rawApply",
          "normalized": "Text-\u003e[Node]-\u003eMaybe FilePath-\u003eTPath-\u003e[Node]-\u003eSplice a",
          "package": "heist",
          "partial": "Apply",
          "signature": "Text-\u003e[Node]-\u003eMaybe FilePath-\u003eTPath-\u003e[Node]-\u003eSplice n",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/heist/docs/Heist-Splices-Apply.html#v:rawApply"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Heist.Splices.Bind",
          "name": "Bind",
          "package": "heist",
          "source": "src/Heist-Splices-Bind.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Heist Splices Bind",
          "module": "Heist.Splices.Bind",
          "name": "Bind",
          "package": "heist",
          "partial": "Bind",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/heist/docs/Heist-Splices-Bind.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefault attribute name for the bind tag.\n\u003c/p\u003e",
          "module": "Heist.Splices.Bind",
          "name": "bindAttr",
          "package": "heist",
          "signature": "Text",
          "source": "src/Heist-Splices-Bind.html#bindAttr",
          "type": "function"
        },
        "index": {
          "description": "Default attribute name for the bind tag",
          "hierarchy": "Heist Splices Bind",
          "module": "Heist.Splices.Bind",
          "name": "bindAttr",
          "package": "heist",
          "partial": "Attr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/heist/docs/Heist-Splices-Bind.html#v:bindAttr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eImplementation of the bind splice.\n\u003c/p\u003e",
          "module": "Heist.Splices.Bind",
          "name": "bindImpl",
          "package": "heist",
          "signature": "Splice n",
          "source": "src/Heist-Splices-Bind.html#bindImpl",
          "type": "function"
        },
        "index": {
          "description": "Implementation of the bind splice",
          "hierarchy": "Heist Splices Bind",
          "module": "Heist.Splices.Bind",
          "name": "bindImpl",
          "package": "heist",
          "partial": "Impl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/heist/docs/Heist-Splices-Bind.html#v:bindImpl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefault name for the bind splice.\n\u003c/p\u003e",
          "module": "Heist.Splices.Bind",
          "name": "bindTag",
          "package": "heist",
          "signature": "Text",
          "source": "src/Heist-Splices-Bind.html#bindTag",
          "type": "function"
        },
        "index": {
          "description": "Default name for the bind splice",
          "hierarchy": "Heist Splices Bind",
          "module": "Heist.Splices.Bind",
          "name": "bindTag",
          "package": "heist",
          "partial": "Tag",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/heist/docs/Heist-Splices-Bind.html#v:bindTag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Heist.Splices.BindStrict",
          "name": "BindStrict",
          "package": "heist",
          "source": "src/Heist-Splices-BindStrict.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Heist Splices BindStrict",
          "module": "Heist.Splices.BindStrict",
          "name": "BindStrict",
          "package": "heist",
          "partial": "Bind Strict",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/heist/docs/Heist-Splices-BindStrict.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eImplementation of the bind splice.\n\u003c/p\u003e",
          "module": "Heist.Splices.BindStrict",
          "name": "bindStrictImpl",
          "package": "heist",
          "signature": "Splice n",
          "source": "src/Heist-Splices-BindStrict.html#bindStrictImpl",
          "type": "function"
        },
        "index": {
          "description": "Implementation of the bind splice",
          "hierarchy": "Heist Splices BindStrict",
          "module": "Heist.Splices.BindStrict",
          "name": "bindStrictImpl",
          "package": "heist",
          "partial": "Strict Impl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/heist/docs/Heist-Splices-BindStrict.html#v:bindStrictImpl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefault name for the bind splice.\n\u003c/p\u003e",
          "module": "Heist.Splices.BindStrict",
          "name": "bindStrictTag",
          "package": "heist",
          "signature": "Text",
          "source": "src/Heist-Splices-BindStrict.html#bindStrictTag",
          "type": "function"
        },
        "index": {
          "description": "Default name for the bind splice",
          "hierarchy": "Heist Splices BindStrict",
          "module": "Heist.Splices.BindStrict",
          "name": "bindStrictTag",
          "package": "heist",
          "partial": "Strict Tag",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/heist/docs/Heist-Splices-BindStrict.html#v:bindStrictTag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe \"cache\" splice ensures that its contents are cached and only\n evaluated periodically.  The cached contents are returned every time the\n splice is referenced.\n\u003c/p\u003e\u003cp\u003eUse the ttl attribute to set the amount of time between reloads.  The ttl\n value should be a positive integer followed by a single character\n specifying the units.  Valid units are a single letter abbreviation for one\n of seconds, minutes, hours, days, and weeks.  If the ttl string is invalid\n or the ttl attribute is not specified, the cache is never refreshed unless\n explicitly cleared with clearCacheTagState.  The compiled splice version of\n the cache tag does not require a cache tag state, so clearCacheTagState\n will not work for compiled cache tags.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Heist.Splices.Cache",
          "name": "Cache",
          "package": "heist",
          "source": "src/Heist-Splices-Cache.html",
          "type": "module"
        },
        "index": {
          "description": "The cache splice ensures that its contents are cached and only evaluated periodically The cached contents are returned every time the splice is referenced Use the ttl attribute to set the amount of time between reloads The ttl value should be positive integer followed by single character specifying the units Valid units are single letter abbreviation for one of seconds minutes hours days and weeks If the ttl string is invalid or the ttl attribute is not specified the cache is never refreshed unless explicitly cleared with clearCacheTagState The compiled splice version of the cache tag does not require cache tag state so clearCacheTagState will not work for compiled cache tags",
          "hierarchy": "Heist Splices Cache",
          "module": "Heist.Splices.Cache",
          "name": "Cache",
          "package": "heist",
          "partial": "Cache",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/heist/docs/Heist-Splices-Cache.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eState for storing cache tag information\n\u003c/p\u003e",
          "module": "Heist.Splices.Cache",
          "name": "CacheTagState",
          "package": "heist",
          "source": "src/Heist-Splices-Cache.html#CacheTagState",
          "type": "data"
        },
        "index": {
          "description": "State for storing cache tag information",
          "hierarchy": "Heist Splices Cache",
          "module": "Heist.Splices.Cache",
          "name": "CacheTagState",
          "package": "heist",
          "partial": "Cache Tag State",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/heist/docs/Heist-Splices-Cache.html#t:CacheTagState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is the splice that actually does the work.  You should bind it to\n the same tag name as you bound the splice returned by mkCacheTag otherwise\n it won't work and you'll get runtime errors.\n\u003c/p\u003e",
          "module": "Heist.Splices.Cache",
          "name": "cacheImpl",
          "package": "heist",
          "signature": "CacheTagState -\u003e Splice n",
          "source": "src/Heist-Splices-Cache.html#cacheImpl",
          "type": "function"
        },
        "index": {
          "description": "This is the splice that actually does the work You should bind it to the same tag name as you bound the splice returned by mkCacheTag otherwise it won work and you ll get runtime errors",
          "hierarchy": "Heist Splices Cache",
          "module": "Heist.Splices.Cache",
          "name": "cacheImpl",
          "normalized": "CacheTagState-\u003eSplice a",
          "package": "heist",
          "partial": "Impl",
          "signature": "CacheTagState-\u003eSplice n",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/heist/docs/Heist-Splices-Cache.html#v:cacheImpl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is the compiled splice version of cacheImpl.\n\u003c/p\u003e",
          "module": "Heist.Splices.Cache",
          "name": "cacheImplCompiled",
          "package": "heist",
          "signature": "CacheTagState -\u003e Splice n",
          "source": "src/Heist-Splices-Cache.html#cacheImplCompiled",
          "type": "function"
        },
        "index": {
          "description": "This is the compiled splice version of cacheImpl",
          "hierarchy": "Heist Splices Cache",
          "module": "Heist.Splices.Cache",
          "name": "cacheImplCompiled",
          "normalized": "CacheTagState-\u003eSplice a",
          "package": "heist",
          "partial": "Impl Compiled",
          "signature": "CacheTagState-\u003eSplice n",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/heist/docs/Heist-Splices-Cache.html#v:cacheImplCompiled"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClears the cache tag state.\n\u003c/p\u003e",
          "module": "Heist.Splices.Cache",
          "name": "clearCacheTagState",
          "package": "heist",
          "signature": "CacheTagState -\u003e IO ()",
          "source": "src/Heist-Splices-Cache.html#clearCacheTagState",
          "type": "function"
        },
        "index": {
          "description": "Clears the cache tag state",
          "hierarchy": "Heist Splices Cache",
          "module": "Heist.Splices.Cache",
          "name": "clearCacheTagState",
          "normalized": "CacheTagState-\u003eIO()",
          "package": "heist",
          "partial": "Cache Tag State",
          "signature": "CacheTagState-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/heist/docs/Heist-Splices-Cache.html#v:clearCacheTagState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns items necessary to set up a \"cache\" tag.  The cache tag cannot\n be bound automatically with the other default Heist tags.  This is because\n this function also returns CacheTagState, so the user will be able to clear\n it with the \u003ccode\u003e\u003ca\u003eclearCacheTagState\u003c/a\u003e\u003c/code\u003e function.\n\u003c/p\u003e\u003cp\u003eThis function returns a splice and a CacheTagState.  The splice is of type\n \u003ccode\u003eSplice IO\u003c/code\u003e because it has to be bound as a load time preprocessing splice.\n Haskell's type system won't allow you to screw up and pass this splice as\n the wrong argument to initHeist.\n\u003c/p\u003e",
          "module": "Heist.Splices.Cache",
          "name": "mkCacheTag",
          "package": "heist",
          "signature": "IO (Splice IO, CacheTagState)",
          "source": "src/Heist-Splices-Cache.html#mkCacheTag",
          "type": "function"
        },
        "index": {
          "description": "Returns items necessary to set up cache tag The cache tag cannot be bound automatically with the other default Heist tags This is because this function also returns CacheTagState so the user will be able to clear it with the clearCacheTagState function This function returns splice and CacheTagState The splice is of type Splice IO because it has to be bound as load time preprocessing splice Haskell type system won allow you to screw up and pass this splice as the wrong argument to initHeist",
          "hierarchy": "Heist Splices Cache",
          "module": "Heist.Splices.Cache",
          "name": "mkCacheTag",
          "normalized": "IO(Splice IO,CacheTagState)",
          "package": "heist",
          "partial": "Cache Tag",
          "signature": "IO(Splice IO,CacheTagState)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/heist/docs/Heist-Splices-Cache.html#v:mkCacheTag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Heist.Splices.Html",
          "name": "Html",
          "package": "heist",
          "source": "src/Heist-Splices-Html.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Heist Splices Html",
          "module": "Heist.Splices.Html",
          "name": "Html",
          "package": "heist",
          "partial": "Html",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/heist/docs/Heist-Splices-Html.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtracts all heads from a node tree.\n\u003c/p\u003e",
          "module": "Heist.Splices.Html",
          "name": "extractHeads",
          "package": "heist",
          "signature": "Node-\u003e ([Node], Maybe Node)",
          "type": "function"
        },
        "index": {
          "description": "Extracts all heads from node tree",
          "hierarchy": "Heist Splices Html",
          "module": "Heist.Splices.Html",
          "name": "extractHeads",
          "normalized": "Node-\u003e([Node],Maybe Node)",
          "package": "heist",
          "partial": "Heads",
          "signature": "Node-\u003e([Node],Maybe Node)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/heist/docs/Heist-Splices-Html.html#v:extractHeads"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe html splice runs all children and then traverses the returned node\n forest removing all head nodes.  Then it merges them all and prepends it to\n the html tag's child list.\n\u003c/p\u003e",
          "module": "Heist.Splices.Html",
          "name": "htmlImpl",
          "package": "heist",
          "signature": "Splice n",
          "source": "src/Heist-Splices-Html.html#htmlImpl",
          "type": "function"
        },
        "index": {
          "description": "The html splice runs all children and then traverses the returned node forest removing all head nodes Then it merges them all and prepends it to the html tag child list",
          "hierarchy": "Heist Splices Html",
          "module": "Heist.Splices.Html",
          "name": "htmlImpl",
          "package": "heist",
          "partial": "Impl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/heist/docs/Heist-Splices-Html.html#v:htmlImpl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eName for the html splice.\n\u003c/p\u003e",
          "module": "Heist.Splices.Html",
          "name": "htmlTag",
          "package": "heist",
          "signature": "Text",
          "source": "src/Heist-Splices-Html.html#htmlTag",
          "type": "function"
        },
        "index": {
          "description": "Name for the html splice",
          "hierarchy": "Heist Splices Html",
          "module": "Heist.Splices.Html",
          "name": "htmlTag",
          "package": "heist",
          "partial": "Tag",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/heist/docs/Heist-Splices-Html.html#v:htmlTag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Heist.Splices.Ignore",
          "name": "Ignore",
          "package": "heist",
          "source": "src/Heist-Splices-Ignore.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Heist Splices Ignore",
          "module": "Heist.Splices.Ignore",
          "name": "Ignore",
          "package": "heist",
          "partial": "Ignore",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/heist/docs/Heist-Splices-Ignore.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe ignore tag and everything it surrounds disappears in the\n rendered output.\n\u003c/p\u003e",
          "module": "Heist.Splices.Ignore",
          "name": "ignoreImpl",
          "package": "heist",
          "signature": "Splice m",
          "source": "src/Heist-Splices-Ignore.html#ignoreImpl",
          "type": "function"
        },
        "index": {
          "description": "The ignore tag and everything it surrounds disappears in the rendered output",
          "hierarchy": "Heist Splices Ignore",
          "module": "Heist.Splices.Ignore",
          "name": "ignoreImpl",
          "package": "heist",
          "partial": "Impl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/heist/docs/Heist-Splices-Ignore.html#v:ignoreImpl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefault name for the ignore splice.\n\u003c/p\u003e",
          "module": "Heist.Splices.Ignore",
          "name": "ignoreTag",
          "package": "heist",
          "signature": "Text",
          "source": "src/Heist-Splices-Ignore.html#ignoreTag",
          "type": "function"
        },
        "index": {
          "description": "Default name for the ignore splice",
          "hierarchy": "Heist Splices Ignore",
          "module": "Heist.Splices.Ignore",
          "name": "ignoreTag",
          "package": "heist",
          "partial": "Tag",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/heist/docs/Heist-Splices-Ignore.html#v:ignoreTag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Heist.Splices.Json",
          "name": "Json",
          "package": "heist",
          "source": "src/Heist-Splices-Json.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Heist Splices Json",
          "module": "Heist.Splices.Json",
          "name": "Json",
          "package": "heist",
          "partial": "Json",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/heist/docs/Heist-Splices-Json.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis splice binds convenience tags for the given JSON (or\n JSON-convertible) value and runs the tag's child nodes using the new\n bindings.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eTags bound when you pass in an object\u003c/em\u003e\n\u003c/p\u003e\u003cp\u003eTags bound for an object looking like this:\n\u003c/p\u003e\u003cpre\u003e { \"k_1\": v_1, ..., \"k_N\": v_N }\n\u003c/pre\u003e\u003cp\u003e\u003ccode\u003e\u003cvalue:{k_i}\u003e\u003c/code\u003e    -- treats v_i as text\n \u003ccode\u003e\u003csnippet:{k_i}\u003e\u003c/code\u003e  -- treats v_i as HTML\n \u003ccode\u003e\u003cwith:{k_i}\u003e\u003c/code\u003e     -- explodes v_i and runs its children\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003cvalue var=\"foo.bar.baz\"/\u003e\u003c/code\u003e -- walks the JSON tree to find\n \"foo.bar.baz\", and interprets it as a string\n \u003ccode\u003e\u003csnippet var=\"foo.bar.baz\"/\u003e\u003c/code\u003e\n \u003ccode\u003e\u003cwith var=\"foo.bar.baz\"\u003e...\u003cwith\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eTags bound when you pass in anything else\u003c/em\u003e\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003cvalue/\u003e\u003c/code\u003e    --  the given JSON value, as a string\n \u003ccode\u003e\u003csnippet/\u003e\u003c/code\u003e  --  the given JSON value, parsed and spliced in as HTML\n\u003c/p\u003e",
          "module": "Heist.Splices.Json",
          "name": "bindJson",
          "package": "heist",
          "signature": "a -\u003e Splice n",
          "source": "src/Heist-Splices-Json.html#bindJson",
          "type": "function"
        },
        "index": {
          "description": "This splice binds convenience tags for the given JSON or JSON-convertible value and runs the tag child nodes using the new bindings Tags bound when you pass in an object Tags bound for an object looking like this value treats as text snippet treats as HTML with explodes and runs its children value var foo.bar.baz walks the JSON tree to find foo.bar.baz and interprets it as string snippet var foo.bar.baz with var foo.bar.baz with Tags bound when you pass in anything else value the given JSON value as string snippet the given JSON value parsed and spliced in as HTML",
          "hierarchy": "Heist Splices Json",
          "module": "Heist.Splices.Json",
          "name": "bindJson",
          "normalized": "a-\u003eSplice b",
          "package": "heist",
          "partial": "Json",
          "signature": "a-\u003eSplice n",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/heist/docs/Heist-Splices-Json.html#v:bindJson"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe \"markdown\" splice formats markdown content as HTML and inserts\nit into the document.\n\u003c/p\u003e\u003cp\u003eIf the file attribute is present the contents of the tag is ignored and\nthe file specified is converted to HTML.\n\u003c/p\u003e\u003cp\u003eOtherwise the non-markup children of the tag are processed as markdown\nand converted to HTML.\n\u003c/p\u003e\u003cp\u003eThis splice requires that the \"pandoc\" executable is in your path.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Heist.Splices.Markdown",
          "name": "Markdown",
          "package": "heist",
          "source": "src/Heist-Splices-Markdown.html",
          "type": "module"
        },
        "index": {
          "description": "The markdown splice formats markdown content as HTML and inserts it into the document If the file attribute is present the contents of the tag is ignored and the file specified is converted to HTML Otherwise the non-markup children of the tag are processed as markdown and converted to HTML This splice requires that the pandoc executable is in your path",
          "hierarchy": "Heist Splices Markdown",
          "module": "Heist.Splices.Markdown",
          "name": "Markdown",
          "package": "heist",
          "partial": "Markdown",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/heist/docs/Heist-Splices-Markdown.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Heist.Splices.Markdown",
          "name": "MarkdownException",
          "package": "heist",
          "source": "src/Heist-Splices-Markdown.html#MarkdownException",
          "type": "data"
        },
        "index": {
          "hierarchy": "Heist Splices Markdown",
          "module": "Heist.Splices.Markdown",
          "name": "MarkdownException",
          "package": "heist",
          "partial": "Markdown Exception",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/heist/docs/Heist-Splices-Markdown.html#t:MarkdownException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Heist.Splices.Markdown",
          "name": "NoMarkdownFileException",
          "package": "heist",
          "source": "src/Heist-Splices-Markdown.html#NoMarkdownFileException",
          "type": "data"
        },
        "index": {
          "hierarchy": "Heist Splices Markdown",
          "module": "Heist.Splices.Markdown",
          "name": "NoMarkdownFileException",
          "package": "heist",
          "partial": "No Markdown File Exception",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/heist/docs/Heist-Splices-Markdown.html#t:NoMarkdownFileException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Heist.Splices.Markdown",
          "name": "PandocMissingException",
          "package": "heist",
          "source": "src/Heist-Splices-Markdown.html#PandocMissingException",
          "type": "data"
        },
        "index": {
          "hierarchy": "Heist Splices Markdown",
          "module": "Heist.Splices.Markdown",
          "name": "PandocMissingException",
          "package": "heist",
          "partial": "Pandoc Missing Exception",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/heist/docs/Heist-Splices-Markdown.html#t:PandocMissingException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Heist.Splices.Markdown",
          "name": "MarkdownException",
          "package": "heist",
          "signature": "MarkdownException ByteString",
          "source": "src/Heist-Splices-Markdown.html#MarkdownException",
          "type": "function"
        },
        "index": {
          "hierarchy": "Heist Splices Markdown",
          "module": "Heist.Splices.Markdown",
          "name": "MarkdownException",
          "package": "heist",
          "partial": "Markdown Exception",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/heist/docs/Heist-Splices-Markdown.html#v:MarkdownException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Heist.Splices.Markdown",
          "name": "NoMarkdownFileException",
          "package": "heist",
          "signature": "NoMarkdownFileException",
          "source": "src/Heist-Splices-Markdown.html#NoMarkdownFileException",
          "type": "function"
        },
        "index": {
          "hierarchy": "Heist Splices Markdown",
          "module": "Heist.Splices.Markdown",
          "name": "NoMarkdownFileException",
          "package": "heist",
          "partial": "No Markdown File Exception",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/heist/docs/Heist-Splices-Markdown.html#v:NoMarkdownFileException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Heist.Splices.Markdown",
          "name": "PandocMissingException",
          "package": "heist",
          "signature": "PandocMissingException",
          "source": "src/Heist-Splices-Markdown.html#PandocMissingException",
          "type": "function"
        },
        "index": {
          "hierarchy": "Heist Splices Markdown",
          "module": "Heist.Splices.Markdown",
          "name": "PandocMissingException",
          "package": "heist",
          "partial": "Pandoc Missing Exception",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/heist/docs/Heist-Splices-Markdown.html#v:PandocMissingException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eImplementation of the markdown splice.\n\u003c/p\u003e",
          "module": "Heist.Splices.Markdown",
          "name": "markdownSplice",
          "package": "heist",
          "signature": "Splice m",
          "source": "src/Heist-Splices-Markdown.html#markdownSplice",
          "type": "function"
        },
        "index": {
          "description": "Implementation of the markdown splice",
          "hierarchy": "Heist Splices Markdown",
          "module": "Heist.Splices.Markdown",
          "name": "markdownSplice",
          "package": "heist",
          "partial": "Splice",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/heist/docs/Heist-Splices-Markdown.html#v:markdownSplice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefault name for the markdown splice.\n\u003c/p\u003e",
          "module": "Heist.Splices.Markdown",
          "name": "markdownTag",
          "package": "heist",
          "signature": "Text",
          "source": "src/Heist-Splices-Markdown.html#markdownTag",
          "type": "function"
        },
        "index": {
          "description": "Default name for the markdown splice",
          "hierarchy": "Heist Splices Markdown",
          "module": "Heist.Splices.Markdown",
          "name": "markdownTag",
          "package": "heist",
          "partial": "Tag",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/heist/docs/Heist-Splices-Markdown.html#v:markdownTag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Heist.Splices.Markdown",
          "name": "pandoc",
          "package": "heist",
          "signature": "FilePath -\u003e FilePath -\u003e FilePath -\u003e IO ByteString",
          "source": "src/Heist-Splices-Markdown.html#pandoc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Heist Splices Markdown",
          "module": "Heist.Splices.Markdown",
          "name": "pandoc",
          "normalized": "FilePath-\u003eFilePath-\u003eFilePath-\u003eIO ByteString",
          "package": "heist",
          "signature": "FilePath-\u003eFilePath-\u003eFilePath-\u003eIO ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/heist/docs/Heist-Splices-Markdown.html#v:pandoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Heist.Splices.Markdown",
          "name": "pandocBS",
          "package": "heist",
          "signature": "FilePath -\u003e ByteString -\u003e IO ByteString",
          "source": "src/Heist-Splices-Markdown.html#pandocBS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Heist Splices Markdown",
          "module": "Heist.Splices.Markdown",
          "name": "pandocBS",
          "normalized": "FilePath-\u003eByteString-\u003eIO ByteString",
          "package": "heist",
          "partial": "BS",
          "signature": "FilePath-\u003eByteString-\u003eIO ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/heist/docs/Heist-Splices-Markdown.html#v:pandocBS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Heist.Splices.Markdown",
          "name": "readProcessWithExitCode'",
          "package": "heist",
          "signature": "FilePath-\u003e [String]-\u003e ByteString-\u003e IO (ExitCode, ByteString, ByteString)",
          "type": "function"
        },
        "index": {
          "hierarchy": "Heist Splices Markdown",
          "module": "Heist.Splices.Markdown",
          "name": "readProcessWithExitCode'",
          "normalized": "FilePath-\u003e[String]-\u003eByteString-\u003eIO(ExitCode,ByteString,ByteString)",
          "package": "heist",
          "partial": "Process With Exit Code'",
          "signature": "FilePath-\u003e[String]-\u003eByteString-\u003eIO(ExitCode,ByteString,ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/heist/docs/Heist-Splices-Markdown.html#v:readProcessWithExitCode-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Heist.Splices",
          "name": "Splices",
          "package": "heist",
          "source": "src/Heist-Splices.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Heist Splices",
          "module": "Heist.Splices",
          "name": "Splices",
          "package": "heist",
          "partial": "Splices",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/heist/docs/Heist-Splices.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFunction for constructing if splices that use a runtime predicate\n function to determine whether the node's children should be rendered.\n\u003c/p\u003e",
          "module": "Heist.Splices",
          "name": "ifCSplice",
          "package": "heist",
          "signature": "(t -\u003e Bool) -\u003e RuntimeSplice m t -\u003e Splice m",
          "source": "src/Heist-Splices.html#ifCSplice",
          "type": "function"
        },
        "index": {
          "description": "Function for constructing if splices that use runtime predicate function to determine whether the node children should be rendered",
          "hierarchy": "Heist Splices",
          "module": "Heist.Splices",
          "name": "ifCSplice",
          "normalized": "(a-\u003eBool)-\u003eRuntimeSplice b a-\u003eSplice b",
          "package": "heist",
          "partial": "CSplice",
          "signature": "(t-\u003eBool)-\u003eRuntimeSplice m t-\u003eSplice m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/heist/docs/Heist-Splices.html#v:ifCSplice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun the splice contents if given condition is True, make splice disappear\n if not.\n\u003c/p\u003e",
          "module": "Heist.Splices",
          "name": "ifISplice",
          "package": "heist",
          "signature": "Bool -\u003e Splice m",
          "source": "src/Heist-Splices.html#ifISplice",
          "type": "function"
        },
        "index": {
          "description": "Run the splice contents if given condition is True make splice disappear if not",
          "hierarchy": "Heist Splices",
          "module": "Heist.Splices",
          "name": "ifISplice",
          "normalized": "Bool-\u003eSplice a",
          "package": "heist",
          "partial": "ISplice",
          "signature": "Bool-\u003eSplice m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/heist/docs/Heist-Splices.html#v:ifISplice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module defines a TemplateDirectory data structure for convenient\ninteraction with templates within web apps.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Heist.TemplateDirectory",
          "name": "TemplateDirectory",
          "package": "heist",
          "source": "src/Heist-TemplateDirectory.html",
          "type": "module"
        },
        "index": {
          "description": "This module defines TemplateDirectory data structure for convenient interaction with templates within web apps",
          "hierarchy": "Heist TemplateDirectory",
          "module": "Heist.TemplateDirectory",
          "name": "TemplateDirectory",
          "package": "heist",
          "partial": "Template Directory",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/heist/docs/Heist-TemplateDirectory.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStructure representing a template directory.\n\u003c/p\u003e",
          "module": "Heist.TemplateDirectory",
          "name": "TemplateDirectory",
          "package": "heist",
          "source": "src/Heist-TemplateDirectory.html#TemplateDirectory",
          "type": "data"
        },
        "index": {
          "description": "Structure representing template directory",
          "hierarchy": "Heist TemplateDirectory",
          "module": "Heist.TemplateDirectory",
          "name": "TemplateDirectory",
          "package": "heist",
          "partial": "Template Directory",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/heist/docs/Heist-TemplateDirectory.html#t:TemplateDirectory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClears the TemplateDirectory's cache tag state.\n\u003c/p\u003e",
          "module": "Heist.TemplateDirectory",
          "name": "getDirectoryCTS",
          "package": "heist",
          "signature": "TemplateDirectory n -\u003e IO CacheTagState",
          "source": "src/Heist-TemplateDirectory.html#getDirectoryCTS",
          "type": "function"
        },
        "index": {
          "description": "Clears the TemplateDirectory cache tag state",
          "hierarchy": "Heist TemplateDirectory",
          "module": "Heist.TemplateDirectory",
          "name": "getDirectoryCTS",
          "normalized": "TemplateDirectory a-\u003eIO CacheTagState",
          "package": "heist",
          "partial": "Directory CTS",
          "signature": "TemplateDirectory n-\u003eIO CacheTagState",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/heist/docs/Heist-TemplateDirectory.html#v:getDirectoryCTS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGets the \u003ccode\u003e\u003ca\u003eHeistState\u003c/a\u003e\u003c/code\u003e from a TemplateDirectory.\n\u003c/p\u003e",
          "module": "Heist.TemplateDirectory",
          "name": "getDirectoryHS",
          "package": "heist",
          "signature": "TemplateDirectory n -\u003e IO (HeistState n)",
          "source": "src/Heist-TemplateDirectory.html#getDirectoryHS",
          "type": "function"
        },
        "index": {
          "description": "Gets the HeistState from TemplateDirectory",
          "hierarchy": "Heist TemplateDirectory",
          "module": "Heist.TemplateDirectory",
          "name": "getDirectoryHS",
          "normalized": "TemplateDirectory a-\u003eIO(HeistState a)",
          "package": "heist",
          "partial": "Directory HS",
          "signature": "TemplateDirectory n-\u003eIO(HeistState n)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/heist/docs/Heist-TemplateDirectory.html#v:getDirectoryHS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates and returns a new \u003ccode\u003e\u003ca\u003eTemplateDirectory\u003c/a\u003e\u003c/code\u003e wrapped in an Either for\n error handling.\n\u003c/p\u003e",
          "module": "Heist.TemplateDirectory",
          "name": "newTemplateDirectory",
          "package": "heist",
          "signature": "FilePath -\u003e HeistConfig n -\u003e EitherT [String] IO (TemplateDirectory n)",
          "source": "src/Heist-TemplateDirectory.html#newTemplateDirectory",
          "type": "function"
        },
        "index": {
          "description": "Creates and returns new TemplateDirectory wrapped in an Either for error handling",
          "hierarchy": "Heist TemplateDirectory",
          "module": "Heist.TemplateDirectory",
          "name": "newTemplateDirectory",
          "normalized": "FilePath-\u003eHeistConfig a-\u003eEitherT[String]IO(TemplateDirectory a)",
          "package": "heist",
          "partial": "Template Directory",
          "signature": "FilePath-\u003eHeistConfig n-\u003eEitherT[String]IO(TemplateDirectory n)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/heist/docs/Heist-TemplateDirectory.html#v:newTemplateDirectory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates and returns a new \u003ccode\u003e\u003ca\u003eTemplateDirectory\u003c/a\u003e\u003c/code\u003e, using the monad's fail\n function on error.\n\u003c/p\u003e",
          "module": "Heist.TemplateDirectory",
          "name": "newTemplateDirectory'",
          "package": "heist",
          "signature": "FilePath -\u003e HeistConfig n -\u003e IO (TemplateDirectory n)",
          "source": "src/Heist-TemplateDirectory.html#newTemplateDirectory%27",
          "type": "function"
        },
        "index": {
          "description": "Creates and returns new TemplateDirectory using the monad fail function on error",
          "hierarchy": "Heist TemplateDirectory",
          "module": "Heist.TemplateDirectory",
          "name": "newTemplateDirectory'",
          "normalized": "FilePath-\u003eHeistConfig a-\u003eIO(TemplateDirectory a)",
          "package": "heist",
          "partial": "Template Directory'",
          "signature": "FilePath-\u003eHeistConfig n-\u003eIO(TemplateDirectory n)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/heist/docs/Heist-TemplateDirectory.html#v:newTemplateDirectory-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClears cached content and reloads templates from disk.\n\u003c/p\u003e",
          "module": "Heist.TemplateDirectory",
          "name": "reloadTemplateDirectory",
          "package": "heist",
          "signature": "TemplateDirectory n -\u003e IO (Either String ())",
          "source": "src/Heist-TemplateDirectory.html#reloadTemplateDirectory",
          "type": "function"
        },
        "index": {
          "description": "Clears cached content and reloads templates from disk",
          "hierarchy": "Heist TemplateDirectory",
          "module": "Heist.TemplateDirectory",
          "name": "reloadTemplateDirectory",
          "normalized": "TemplateDirectory a-\u003eIO(Either String())",
          "package": "heist",
          "partial": "Template Directory",
          "signature": "TemplateDirectory n-\u003eIO(Either String())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/heist/docs/Heist-TemplateDirectory.html#v:reloadTemplateDirectory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module defines the core data types used by Heist.  In practice you will\nalso want to import one or both of \u003ca\u003eHeist.Compiled\u003c/a\u003e or \u003ca\u003eHeist.Interpreted\u003c/a\u003e to\nget functions needed for writing splices.\n\u003c/p\u003e\u003cp\u003eThe Heist template system allows you to build custom HTML and XML based markup\nlanguages.  With Heist you can define your own domain-specific tags\nimplemented with Haskell and use them in your templates.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Heist",
          "name": "Heist",
          "package": "heist",
          "source": "src/Heist.html",
          "type": "module"
        },
        "index": {
          "description": "This module defines the core data types used by Heist In practice you will also want to import one or both of Heist.Compiled or Heist.Interpreted to get functions needed for writing splices The Heist template system allows you to build custom HTML and XML based markup languages With Heist you can define your own domain-specific tags implemented with Haskell and use them in your templates",
          "hierarchy": "Heist",
          "module": "Heist",
          "name": "Heist",
          "package": "heist",
          "partial": "Heist",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/heist/docs/Heist.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType alias for attribute splices.  The function parameter is the value of\n the bound attribute splice.  The return value is a list of attribute\n key/value pairs that get substituted in the place of the bound attribute.\n\u003c/p\u003e",
          "module": "Heist",
          "name": "AttrSplice",
          "package": "heist",
          "source": "src/Heist-Types.html#AttrSplice",
          "type": "type"
        },
        "index": {
          "description": "Type alias for attribute splices The function parameter is the value of the bound attribute splice The return value is list of attribute key value pairs that get substituted in the place of the bound attribute",
          "hierarchy": "Heist",
          "module": "Heist",
          "name": "AttrSplice",
          "package": "heist",
          "partial": "Attr Splice",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/heist/docs/Heist.html#t:AttrSplice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOpaque type representing pieces of output from compiled splices.\n\u003c/p\u003e",
          "module": "Heist",
          "name": "Chunk",
          "package": "heist",
          "source": "src/Heist-Types.html#Chunk",
          "type": "data"
        },
        "index": {
          "description": "Opaque type representing pieces of output from compiled splices",
          "hierarchy": "Heist",
          "module": "Heist",
          "name": "Chunk",
          "package": "heist",
          "partial": "Chunk",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/heist/docs/Heist.html#t:Chunk"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHolds data about templates read from disk.\n\u003c/p\u003e",
          "module": "Heist",
          "name": "DocumentFile",
          "package": "heist",
          "source": "src/Heist-Types.html#DocumentFile",
          "type": "data"
        },
        "index": {
          "description": "Holds data about templates read from disk",
          "hierarchy": "Heist",
          "module": "Heist",
          "name": "DocumentFile",
          "package": "heist",
          "partial": "Document File",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/heist/docs/Heist.html#t:DocumentFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Heist",
          "name": "HeistConfig",
          "package": "heist",
          "source": "src/Heist.html#HeistConfig",
          "type": "data"
        },
        "index": {
          "hierarchy": "Heist",
          "module": "Heist",
          "name": "HeistConfig",
          "package": "heist",
          "partial": "Heist Config",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/heist/docs/Heist.html#t:HeistConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHolds all the state information needed for template processing.  You will\n build a \u003ccode\u003eHeistState\u003c/code\u003e using \u003ccode\u003einitHeist\u003c/code\u003e and any of Heist's \u003ccode\u003eHeistState -\u003e\n HeistState\u003c/code\u003e \"filter\" functions.  Then you use the resulting \u003ccode\u003eHeistState\u003c/code\u003e\n in calls to \u003ccode\u003erenderTemplate\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003em is the runtime monad\n\u003c/p\u003e",
          "module": "Heist",
          "name": "HeistState",
          "package": "heist",
          "source": "src/Heist-Types.html#HeistState",
          "type": "data"
        },
        "index": {
          "description": "Holds all the state information needed for template processing You will build HeistState using initHeist and any of Heist HeistState HeistState filter functions Then you use the resulting HeistState in calls to renderTemplate is the runtime monad",
          "hierarchy": "Heist",
          "module": "Heist",
          "name": "HeistState",
          "package": "heist",
          "partial": "Heist State",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/heist/docs/Heist.html#t:HeistState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHeistT is the monad transformer used for splice processing.  HeistT\n intentionally does not expose any of its functionality via MonadState or\n MonadReader functions.  We define passthrough instances for the most common\n types of monads.  These instances allow the user to use HeistT in a monad\n stack without needing calls to \u003ccode\u003e\u003ca\u003elift\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003en\u003c/code\u003e is the runtime monad (the parameter to HeistState).\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003em\u003c/code\u003e is the monad being run now.  In this case, \"now\" is a variable\n concept.  The type \u003ccode\u003eHeistT n n\u003c/code\u003e means that \"now\" is runtime.  The type\n \u003ccode\u003eHeistT n IO\u003c/code\u003e means that \"now\" is \u003ccode\u003eIO\u003c/code\u003e, and more importantly it is NOT\n runtime. In Heist, the rule of thumb is that \u003ccode\u003eIO\u003c/code\u003e means load time and \u003ccode\u003en\u003c/code\u003e\n means runtime.\n\u003c/p\u003e",
          "module": "Heist",
          "name": "HeistT",
          "package": "heist",
          "source": "src/Heist-Types.html#HeistT",
          "type": "data"
        },
        "index": {
          "description": "HeistT is the monad transformer used for splice processing HeistT intentionally does not expose any of its functionality via MonadState or MonadReader functions We define passthrough instances for the most common types of monads These instances allow the user to use HeistT in monad stack without needing calls to lift is the runtime monad the parameter to HeistState is the monad being run now In this case now is variable concept The type HeistT means that now is runtime The type HeistT IO means that now is IO and more importantly it is NOT runtime In Heist the rule of thumb is that IO means load time and means runtime",
          "hierarchy": "Heist",
          "module": "Heist",
          "name": "HeistT",
          "package": "heist",
          "partial": "Heist",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/heist/docs/Heist.html#t:HeistT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMIME Type.  The type alias is here to make the API clearer.\n\u003c/p\u003e",
          "module": "Heist",
          "name": "MIMEType",
          "package": "heist",
          "source": "src/Heist-Types.html#MIMEType",
          "type": "type"
        },
        "index": {
          "description": "MIME Type The type alias is here to make the API clearer",
          "hierarchy": "Heist",
          "module": "Heist",
          "name": "MIMEType",
          "package": "heist",
          "partial": "MIMEType",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/heist/docs/Heist.html#t:MIMEType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMonad used for runtime splice execution.\n\u003c/p\u003e",
          "module": "Heist",
          "name": "RuntimeSplice",
          "package": "heist",
          "source": "src/Heist-Types.html#RuntimeSplice",
          "type": "data"
        },
        "index": {
          "description": "Monad used for runtime splice execution",
          "hierarchy": "Heist",
          "module": "Heist",
          "name": "RuntimeSplice",
          "package": "heist",
          "partial": "Runtime Splice",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/heist/docs/Heist.html#t:RuntimeSplice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReversed list of directories.  This holds the path to the template\n currently being processed.\n\u003c/p\u003e",
          "module": "Heist",
          "name": "TPath",
          "package": "heist",
          "source": "src/Heist-Types.html#TPath",
          "type": "type"
        },
        "index": {
          "description": "Reversed list of directories This holds the path to the template currently being processed",
          "hierarchy": "Heist",
          "module": "Heist",
          "name": "TPath",
          "package": "heist",
          "partial": "TPath",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/heist/docs/Heist.html#t:TPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eTemplate\u003c/a\u003e\u003c/code\u003e is a forest of XML nodes.  Here we deviate from the \"single\n root node\" constraint of well-formed XML because we want to allow\n templates to contain document fragments that may not have a single root.\n\u003c/p\u003e",
          "module": "Heist",
          "name": "Template",
          "package": "heist",
          "source": "src/Heist-Types.html#Template",
          "type": "type"
        },
        "index": {
          "description": "Template is forest of XML nodes Here we deviate from the single root node constraint of well-formed XML because we want to allow templates to contain document fragments that may not have single root",
          "hierarchy": "Heist",
          "module": "Heist",
          "name": "Template",
          "package": "heist",
          "partial": "Template",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/heist/docs/Heist.html#t:Template"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn IO action for getting a template repo from this location.  By not just\n using a directory path here, we support templates loaded from a database,\n retrieved from the network, or anything else you can think of.\n\u003c/p\u003e",
          "module": "Heist",
          "name": "TemplateLocation",
          "package": "heist",
          "source": "src/Heist.html#TemplateLocation",
          "type": "type"
        },
        "index": {
          "description": "An IO action for getting template repo from this location By not just using directory path here we support templates loaded from database retrieved from the network or anything else you can think of",
          "hierarchy": "Heist",
          "module": "Heist",
          "name": "TemplateLocation",
          "package": "heist",
          "partial": "Template Location",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/heist/docs/Heist.html#t:TemplateLocation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Heist",
          "name": "TemplateRepo",
          "package": "heist",
          "source": "src/Heist.html#TemplateRepo",
          "type": "type"
        },
        "index": {
          "hierarchy": "Heist",
          "module": "Heist",
          "name": "TemplateRepo",
          "package": "heist",
          "partial": "Template Repo",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/heist/docs/Heist.html#t:TemplateRepo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Heist",
          "name": "DocumentFile",
          "package": "heist",
          "signature": "DocumentFile",
          "source": "src/Heist-Types.html#DocumentFile",
          "type": "function"
        },
        "index": {
          "hierarchy": "Heist",
          "module": "Heist",
          "name": "DocumentFile",
          "package": "heist",
          "partial": "Document File",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/heist/docs/Heist.html#v:DocumentFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Heist",
          "name": "HeistConfig",
          "package": "heist",
          "signature": "HeistConfig",
          "source": "src/Heist.html#HeistConfig",
          "type": "function"
        },
        "index": {
          "hierarchy": "Heist",
          "module": "Heist",
          "name": "HeistConfig",
          "package": "heist",
          "partial": "Heist Config",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/heist/docs/Heist.html#v:HeistConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdds a path prefix to a templates in a map returned by loadTemplates.  If\n you want to add multiple levels of directories, separate them with slashes\n as in \u003ca\u003efoo/bar\u003c/a\u003e.  Using an empty string as a path prefix will leave the\n map unchanged.\n\u003c/p\u003e",
          "module": "Heist",
          "name": "addTemplatePathPrefix",
          "package": "heist",
          "signature": "ByteString -\u003e TemplateRepo -\u003e TemplateRepo",
          "source": "src/Heist.html#addTemplatePathPrefix",
          "type": "function"
        },
        "index": {
          "description": "Adds path prefix to templates in map returned by loadTemplates If you want to add multiple levels of directories separate them with slashes as in foo bar Using an empty string as path prefix will leave the map unchanged",
          "hierarchy": "Heist",
          "module": "Heist",
          "name": "addTemplatePathPrefix",
          "normalized": "ByteString-\u003eTemplateRepo-\u003eTemplateRepo",
          "package": "heist",
          "partial": "Template Path Prefix",
          "signature": "ByteString-\u003eTemplateRepo-\u003eTemplateRepo",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/heist/docs/Heist.html#v:addTemplatePathPrefix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGets the names of all the compiled splices defined in a HeistState.\n\u003c/p\u003e",
          "module": "Heist",
          "name": "compiledSpliceNames",
          "package": "heist",
          "signature": "HeistState m -\u003e [Text]",
          "source": "src/Heist-Types.html#compiledSpliceNames",
          "type": "function"
        },
        "index": {
          "description": "Gets the names of all the compiled splices defined in HeistState",
          "hierarchy": "Heist",
          "module": "Heist",
          "name": "compiledSpliceNames",
          "normalized": "HeistState a-\u003e[Text]",
          "package": "heist",
          "partial": "Splice Names",
          "signature": "HeistState m-\u003e[Text]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/heist/docs/Heist.html#v:compiledSpliceNames"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGets the names of all the templates defined in a HeistState.\n\u003c/p\u003e",
          "module": "Heist",
          "name": "compiledTemplateNames",
          "package": "heist",
          "signature": "HeistState m -\u003e [TPath]",
          "source": "src/Heist-Types.html#compiledTemplateNames",
          "type": "function"
        },
        "index": {
          "description": "Gets the names of all the templates defined in HeistState",
          "hierarchy": "Heist",
          "module": "Heist",
          "name": "compiledTemplateNames",
          "normalized": "HeistState a-\u003e[TPath]",
          "package": "heist",
          "partial": "Template Names",
          "signature": "HeistState m-\u003e[TPath]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/heist/docs/Heist.html#v:compiledTemplateNames"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe built-in set of static splices.  All the splices that used to be\n enabled by default are included here.  To get the normal Heist behavior you\n should include these in the hcLoadTimeSplices list in your HeistConfig.  If\n you are using interpreted splice mode, then you might also want to bind the\n \u003ccode\u003e\u003ca\u003edeprecatedContentCheck\u003c/a\u003e\u003c/code\u003e splice to the content tag as a load time splice.\n\u003c/p\u003e",
          "module": "Heist",
          "name": "defaultInterpretedSplices",
          "package": "heist",
          "signature": "Splices (Splice m)",
          "source": "src/Heist.html#defaultInterpretedSplices",
          "type": "function"
        },
        "index": {
          "description": "The built-in set of static splices All the splices that used to be enabled by default are included here To get the normal Heist behavior you should include these in the hcLoadTimeSplices list in your HeistConfig If you are using interpreted splice mode then you might also want to bind the deprecatedContentCheck splice to the content tag as load time splice",
          "hierarchy": "Heist",
          "module": "Heist",
          "name": "defaultInterpretedSplices",
          "package": "heist",
          "partial": "Interpreted Splices",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/heist/docs/Heist.html#v:defaultInterpretedSplices"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe built-in set of splices that you should use in compiled splice mode.\n This list includes everything from \u003ccode\u003e\u003ca\u003edefaultInterpretedSplices\u003c/a\u003e\u003c/code\u003e plus a\n splice for the content tag that errors out when it sees any instance of the\n old content tag, which has now been moved to two separate tags called\n apply-content and bind-content.\n\u003c/p\u003e",
          "module": "Heist",
          "name": "defaultLoadTimeSplices",
          "package": "heist",
          "signature": "Splices (Splice m)",
          "source": "src/Heist.html#defaultLoadTimeSplices",
          "type": "function"
        },
        "index": {
          "description": "The built-in set of splices that you should use in compiled splice mode This list includes everything from defaultInterpretedSplices plus splice for the content tag that errors out when it sees any instance of the old content tag which has now been moved to two separate tags called apply-content and bind-content",
          "hierarchy": "Heist",
          "module": "Heist",
          "name": "defaultLoadTimeSplices",
          "package": "heist",
          "partial": "Load Time Splices",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/heist/docs/Heist.html#v:defaultLoadTimeSplices"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Heist",
          "name": "dfDoc",
          "package": "heist",
          "signature": "Document",
          "source": "src/Heist-Types.html#DocumentFile",
          "type": "function"
        },
        "index": {
          "hierarchy": "Heist",
          "module": "Heist",
          "name": "dfDoc",
          "package": "heist",
          "partial": "Doc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/heist/docs/Heist.html#v:dfDoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Heist",
          "name": "dfFile",
          "package": "heist",
          "signature": "Maybe FilePath",
          "source": "src/Heist-Types.html#DocumentFile",
          "type": "function"
        },
        "index": {
          "hierarchy": "Heist",
          "module": "Heist",
          "name": "dfFile",
          "package": "heist",
          "partial": "File",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/heist/docs/Heist.html#v:dfFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvaluates a template monad as a computation in the underlying monad.\n\u003c/p\u003e",
          "module": "Heist",
          "name": "evalHeistT",
          "package": "heist",
          "signature": "HeistT n m a -\u003e Node -\u003e HeistState n -\u003e m a",
          "source": "src/Heist-Types.html#evalHeistT",
          "type": "function"
        },
        "index": {
          "description": "Evaluates template monad as computation in the underlying monad",
          "hierarchy": "Heist",
          "module": "Heist",
          "name": "evalHeistT",
          "normalized": "HeistT a b c-\u003eNode-\u003eHeistState a-\u003eb c",
          "package": "heist",
          "partial": "Heist",
          "signature": "HeistT n m a-\u003eNode-\u003eHeistState n-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/heist/docs/Heist.html#v:evalHeistT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGets the current context\n\u003c/p\u003e",
          "module": "Heist",
          "name": "getContext",
          "package": "heist",
          "signature": "HeistT n m TPath",
          "source": "src/Heist-Common.html#getContext",
          "type": "function"
        },
        "index": {
          "description": "Gets the current context",
          "hierarchy": "Heist",
          "module": "Heist",
          "name": "getContext",
          "package": "heist",
          "partial": "Context",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/heist/docs/Heist.html#v:getContext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReads an HTML template from disk.\n\u003c/p\u003e",
          "module": "Heist",
          "name": "getDoc",
          "package": "heist",
          "signature": "String -\u003e IO (Either String DocumentFile)",
          "source": "src/Heist-Common.html#getDoc",
          "type": "function"
        },
        "index": {
          "description": "Reads an HTML template from disk",
          "hierarchy": "Heist",
          "module": "Heist",
          "name": "getDoc",
          "normalized": "String-\u003eIO(Either String DocumentFile)",
          "package": "heist",
          "partial": "Doc",
          "signature": "String-\u003eIO(Either String DocumentFile)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/heist/docs/Heist.html#v:getDoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHeistT's \u003ccode\u003e\u003ca\u003eget\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Heist",
          "name": "getHS",
          "package": "heist",
          "signature": "HeistT n m (HeistState n)",
          "source": "src/Heist-Types.html#getHS",
          "type": "function"
        },
        "index": {
          "description": "HeistT get",
          "hierarchy": "Heist",
          "module": "Heist",
          "name": "getHS",
          "package": "heist",
          "partial": "HS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/heist/docs/Heist.html#v:getHS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGets the node currently being processed.\n\u003c/p\u003e\u003cpre\u003e \u003cspeech author=\"Shakespeare\"\u003e\n   To sleep, perchance to dream.\n \u003c/speech\u003e\n\u003c/pre\u003e\u003cp\u003eWhen you call \u003ccode\u003egetParamNode\u003c/code\u003e inside the code for the \u003ccode\u003espeech\u003c/code\u003e splice, it\n returns the Node for the \u003ccode\u003espeech\u003c/code\u003e tag and its children.  \u003ccode\u003egetParamNode \u003e\u003e=\n childNodes\u003c/code\u003e returns a list containing one \u003ccode\u003eTextNode\u003c/code\u003e containing part of\n Hamlet's speech.  \u003ccode\u003eliftM (getAttribute \"author\") getParamNode\u003c/code\u003e would\n return \u003ccode\u003eJust \u003ca\u003eShakespeare\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Heist",
          "name": "getParamNode",
          "package": "heist",
          "signature": "HeistT n m Node",
          "source": "src/Heist-Types.html#getParamNode",
          "type": "function"
        },
        "index": {
          "description": "Gets the node currently being processed speech author Shakespeare To sleep perchance to dream speech When you call getParamNode inside the code for the speech splice it returns the Node for the speech tag and its children getParamNode childNodes returns list containing one TextNode containing part of Hamlet speech liftM getAttribute author getParamNode would return Just Shakespeare",
          "hierarchy": "Heist",
          "module": "Heist",
          "name": "getParamNode",
          "package": "heist",
          "partial": "Param Node",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/heist/docs/Heist.html#v:getParamNode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGets the full path to the file holding the template currently being\n processed.  Returns Nothing if the template is not associated with a file\n on disk or if there is no template being processed.\n\u003c/p\u003e",
          "module": "Heist",
          "name": "getTemplateFilePath",
          "package": "heist",
          "signature": "HeistT n m (Maybe FilePath)",
          "source": "src/Heist-Common.html#getTemplateFilePath",
          "type": "function"
        },
        "index": {
          "description": "Gets the full path to the file holding the template currently being processed Returns Nothing if the template is not associated with file on disk or if there is no template being processed",
          "hierarchy": "Heist",
          "module": "Heist",
          "name": "getTemplateFilePath",
          "package": "heist",
          "partial": "Template File Path",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/heist/docs/Heist.html#v:getTemplateFilePath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReads an XML template from disk.\n\u003c/p\u003e",
          "module": "Heist",
          "name": "getXMLDoc",
          "package": "heist",
          "signature": "String -\u003e IO (Either String DocumentFile)",
          "source": "src/Heist-Common.html#getXMLDoc",
          "type": "function"
        },
        "index": {
          "description": "Reads an XML template from disk",
          "hierarchy": "Heist",
          "module": "Heist",
          "name": "getXMLDoc",
          "normalized": "String-\u003eIO(Either String DocumentFile)",
          "package": "heist",
          "partial": "XMLDoc",
          "signature": "String-\u003eIO(Either String DocumentFile)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/heist/docs/Heist.html#v:getXMLDoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHeistT's \u003ccode\u003e\u003ca\u003egets\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Heist",
          "name": "getsHS",
          "package": "heist",
          "signature": "(HeistState n -\u003e r) -\u003e HeistT n m r",
          "source": "src/Heist-Types.html#getsHS",
          "type": "function"
        },
        "index": {
          "description": "HeistT gets",
          "hierarchy": "Heist",
          "module": "Heist",
          "name": "getsHS",
          "normalized": "(HeistState a-\u003eb)-\u003eHeistT a c b",
          "package": "heist",
          "partial": "HS",
          "signature": "(HeistState n-\u003er)-\u003eHeistT n m r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/heist/docs/Heist.html#v:getsHS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if the given template can be found in the heist state.\n\u003c/p\u003e",
          "module": "Heist",
          "name": "hasTemplate",
          "package": "heist",
          "signature": "ByteString -\u003e HeistState n -\u003e Bool",
          "source": "src/Heist-Common.html#hasTemplate",
          "type": "function"
        },
        "index": {
          "description": "Returns True if the given template can be found in the heist state",
          "hierarchy": "Heist",
          "module": "Heist",
          "name": "hasTemplate",
          "normalized": "ByteString-\u003eHeistState a-\u003eBool",
          "package": "heist",
          "partial": "Template",
          "signature": "ByteString-\u003eHeistState n-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/heist/docs/Heist.html#v:hasTemplate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAttribute splices are bound to attribute names and return a list of\n attributes.\n\u003c/p\u003e",
          "module": "Heist",
          "name": "hcAttributeSplices",
          "package": "heist",
          "signature": "Splices (AttrSplice m)",
          "source": "src/Heist.html#HeistConfig",
          "type": "function"
        },
        "index": {
          "description": "Attribute splices are bound to attribute names and return list of attributes",
          "hierarchy": "Heist",
          "module": "Heist",
          "name": "hcAttributeSplices",
          "package": "heist",
          "partial": "Attribute Splices",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/heist/docs/Heist.html#v:hcAttributeSplices"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompiled splices return a DList of Chunks and are processed at load\n time to generate a runtime monad action that will be used to render the\n template.\n\u003c/p\u003e",
          "module": "Heist",
          "name": "hcCompiledSplices",
          "package": "heist",
          "signature": "Splices (Splice m)",
          "source": "src/Heist.html#HeistConfig",
          "type": "function"
        },
        "index": {
          "description": "Compiled splices return DList of Chunks and are processed at load time to generate runtime monad action that will be used to render the template",
          "hierarchy": "Heist",
          "module": "Heist",
          "name": "hcCompiledSplices",
          "package": "heist",
          "partial": "Compiled Splices",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/heist/docs/Heist.html#v:hcCompiledSplices"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInterpreted splices are the splices that Heist has always had.  They\n return a list of nodes and are processed at runtime.\n\u003c/p\u003e",
          "module": "Heist",
          "name": "hcInterpretedSplices",
          "package": "heist",
          "signature": "Splices (Splice m)",
          "source": "src/Heist.html#HeistConfig",
          "type": "function"
        },
        "index": {
          "description": "Interpreted splices are the splices that Heist has always had They return list of nodes and are processed at runtime",
          "hierarchy": "Heist",
          "module": "Heist",
          "name": "hcInterpretedSplices",
          "package": "heist",
          "partial": "Interpreted Splices",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/heist/docs/Heist.html#v:hcInterpretedSplices"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLoad time splices are like interpreted splices because they return a\n list of nodes.  But they are like compiled splices because they are\n processed once at load time.  All of Heist's built-in splices should be\n used as load time splices.\n\u003c/p\u003e",
          "module": "Heist",
          "name": "hcLoadTimeSplices",
          "package": "heist",
          "signature": "Splices (Splice IO)",
          "source": "src/Heist.html#HeistConfig",
          "type": "function"
        },
        "index": {
          "description": "Load time splices are like interpreted splices because they return list of nodes But they are like compiled splices because they are processed once at load time All of Heist built-in splices should be used as load time splices",
          "hierarchy": "Heist",
          "module": "Heist",
          "name": "hcLoadTimeSplices",
          "package": "heist",
          "partial": "Load Time Splices",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/heist/docs/Heist.html#v:hcLoadTimeSplices"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA list of all the locations that Heist should get its templates\n from.  \n\u003c/p\u003e",
          "module": "Heist",
          "name": "hcTemplateLocations",
          "package": "heist",
          "signature": "[TemplateLocation]",
          "source": "src/Heist.html#HeistConfig",
          "type": "function"
        },
        "index": {
          "description": "list of all the locations that Heist should get its templates from",
          "hierarchy": "Heist",
          "module": "Heist",
          "name": "hcTemplateLocations",
          "normalized": "[TemplateLocation]",
          "package": "heist",
          "partial": "Template Locations",
          "signature": "[TemplateLocation]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/heist/docs/Heist.html#v:hcTemplateLocations"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is the main Heist initialization function.  You pass in a map of all\n templates and all of your splices and it constructs and returns a\n HeistState.\n\u003c/p\u003e\u003cp\u003eWe don't provide functions to add either type of loadtime splices to your\n HeistState after initHeist because it doesn't make any sense unless you\n re-initialize all templates with the new splices.  If you add any old-style\n runtime heist splices after calling this function, they will still work\n fine if you use Heist.Interpreted.renderTemplate.  If you add any templates\n later, then those templates will be available for interpreted rendering,\n but not for compiled rendering.\n\u003c/p\u003e\u003cp\u003eIn the past you could add templates to your HeistState after initialization\n using its Monoid instance.  Due to implementation details, this is no\n longer possible.  All of your templates must be known when you call this\n function.\n\u003c/p\u003e",
          "module": "Heist",
          "name": "initHeist",
          "package": "heist",
          "signature": "HeistConfig n -\u003e EitherT [String] IO (HeistState n)",
          "source": "src/Heist.html#initHeist",
          "type": "function"
        },
        "index": {
          "description": "This is the main Heist initialization function You pass in map of all templates and all of your splices and it constructs and returns HeistState We don provide functions to add either type of loadtime splices to your HeistState after initHeist because it doesn make any sense unless you re-initialize all templates with the new splices If you add any old-style runtime heist splices after calling this function they will still work fine if you use Heist.Interpreted.renderTemplate If you add any templates later then those templates will be available for interpreted rendering but not for compiled rendering In the past you could add templates to your HeistState after initialization using its Monoid instance Due to implementation details this is no longer possible All of your templates must be known when you call this function",
          "hierarchy": "Heist",
          "module": "Heist",
          "name": "initHeist",
          "normalized": "HeistConfig a-\u003eEitherT[String]IO(HeistState a)",
          "package": "heist",
          "partial": "Heist",
          "signature": "HeistConfig n-\u003eEitherT[String]IO(HeistState n)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/heist/docs/Heist.html#v:initHeist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrapper around initHeist that also sets up a cache tag.  It sets up both\n compiled and interpreted versions of the cache tag splices.  If you need to\n configure the cache tag differently than how this function does it, you\n will still probably want to pattern your approach after this function's\n implementation.\n\u003c/p\u003e",
          "module": "Heist",
          "name": "initHeistWithCacheTag",
          "package": "heist",
          "signature": "HeistConfig n -\u003e EitherT [String] IO (HeistState n, CacheTagState)",
          "source": "src/Heist.html#initHeistWithCacheTag",
          "type": "function"
        },
        "index": {
          "description": "Wrapper around initHeist that also sets up cache tag It sets up both compiled and interpreted versions of the cache tag splices If you need to configure the cache tag differently than how this function does it you will still probably want to pattern your approach after this function implementation",
          "hierarchy": "Heist",
          "module": "Heist",
          "name": "initHeistWithCacheTag",
          "normalized": "HeistConfig a-\u003eEitherT[String]IO(HeistState a,CacheTagState)",
          "package": "heist",
          "partial": "Heist With Cache Tag",
          "signature": "HeistConfig n-\u003eEitherT[String]IO(HeistState n,CacheTagState)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/heist/docs/Heist.html#v:initHeistWithCacheTag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLoads templates from disk.  This function returns just a template map so\n you can load multiple directories and combine the maps before initializing\n your HeistState.\n\u003c/p\u003e",
          "module": "Heist",
          "name": "loadTemplates",
          "package": "heist",
          "signature": "FilePath -\u003e EitherT [String] IO TemplateRepo",
          "source": "src/Heist.html#loadTemplates",
          "type": "function"
        },
        "index": {
          "description": "Loads templates from disk This function returns just template map so you can load multiple directories and combine the maps before initializing your HeistState",
          "hierarchy": "Heist",
          "module": "Heist",
          "name": "loadTemplates",
          "normalized": "FilePath-\u003eEitherT[String]IO TemplateRepo",
          "package": "heist",
          "partial": "Templates",
          "signature": "FilePath-\u003eEitherT[String]IO TemplateRepo",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/heist/docs/Heist.html#v:loadTemplates"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAbstracts the common pattern of running a HeistT computation with\n a modified heist state.\n\u003c/p\u003e",
          "module": "Heist",
          "name": "localHS",
          "package": "heist",
          "signature": "(HeistState n -\u003e HeistState n) -\u003e HeistT n m a -\u003e HeistT n m a",
          "source": "src/Heist-Types.html#localHS",
          "type": "function"
        },
        "index": {
          "description": "Abstracts the common pattern of running HeistT computation with modified heist state",
          "hierarchy": "Heist",
          "module": "Heist",
          "name": "localHS",
          "normalized": "(HeistState a-\u003eHeistState a)-\u003eHeistT a b c-\u003eHeistT a b c",
          "package": "heist",
          "partial": "HS",
          "signature": "(HeistState n-\u003eHeistState n)-\u003eHeistT n m a-\u003eHeistT n m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/heist/docs/Heist.html#v:localHS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHeistT's \u003ccode\u003e\u003ca\u003elocal\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Heist",
          "name": "localParamNode",
          "package": "heist",
          "signature": "(Node -\u003e Node) -\u003e HeistT n m a -\u003e HeistT n m a",
          "source": "src/Heist-Types.html#localParamNode",
          "type": "function"
        },
        "index": {
          "description": "HeistT local",
          "hierarchy": "Heist",
          "module": "Heist",
          "name": "localParamNode",
          "normalized": "(Node-\u003eNode)-\u003eHeistT a b c-\u003eHeistT a b c",
          "package": "heist",
          "partial": "Param Node",
          "signature": "(Node-\u003eNode)-\u003eHeistT n m a-\u003eHeistT n m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/heist/docs/Heist.html#v:localParamNode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHeistT's \u003ccode\u003e\u003ca\u003emodify\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Heist",
          "name": "modifyHS",
          "package": "heist",
          "signature": "(HeistState n -\u003e HeistState n) -\u003e HeistT n m ()",
          "source": "src/Heist-Types.html#modifyHS",
          "type": "function"
        },
        "index": {
          "description": "HeistT modify",
          "hierarchy": "Heist",
          "module": "Heist",
          "name": "modifyHS",
          "normalized": "(HeistState a-\u003eHeistState a)-\u003eHeistT a b()",
          "package": "heist",
          "partial": "HS",
          "signature": "(HeistState n-\u003eHeistState n)-\u003eHeistT n m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/heist/docs/Heist.html#v:modifyHS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf Heist is running in fail fast mode, then this function will throw an\n exception with the second argument as the error message.  Otherwise, the\n first argument will be executed to represent silent failure.\n\u003c/p\u003e\u003cp\u003eThis behavior allows us to fail quickly if an error crops up during\n load-time splice processing or degrade more gracefully if the error occurs\n while a user request is being processed.\n\u003c/p\u003e",
          "module": "Heist",
          "name": "orError",
          "package": "heist",
          "signature": "HeistT n m b -\u003e String -\u003e HeistT n m b",
          "source": "src/Heist-Common.html#orError",
          "type": "function"
        },
        "index": {
          "description": "If Heist is running in fail fast mode then this function will throw an exception with the second argument as the error message Otherwise the first argument will be executed to represent silent failure This behavior allows us to fail quickly if an error crops up during load-time splice processing or degrade more gracefully if the error occurs while user request is being processed",
          "hierarchy": "Heist",
          "module": "Heist",
          "name": "orError",
          "normalized": "HeistT a b c-\u003eString-\u003eHeistT a b c",
          "package": "heist",
          "partial": "Error",
          "signature": "HeistT n m b-\u003eString-\u003eHeistT n m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/heist/docs/Heist.html#v:orError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHeistT's \u003ccode\u003e\u003ca\u003eput\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Heist",
          "name": "putHS",
          "package": "heist",
          "signature": "HeistState n -\u003e HeistT n m ()",
          "source": "src/Heist-Types.html#putHS",
          "type": "function"
        },
        "index": {
          "description": "HeistT put",
          "hierarchy": "Heist",
          "module": "Heist",
          "name": "putHS",
          "normalized": "HeistState a-\u003eHeistT a b()",
          "package": "heist",
          "partial": "HS",
          "signature": "HeistState n-\u003eHeistT n m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/heist/docs/Heist.html#v:putHS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReloads all the templates an an existing TemplateRepo.\n\u003c/p\u003e",
          "module": "Heist",
          "name": "reloadTemplates",
          "package": "heist",
          "signature": "TemplateRepo -\u003e EitherT [String] IO TemplateRepo",
          "source": "src/Heist.html#reloadTemplates",
          "type": "function"
        },
        "index": {
          "description": "Reloads all the templates an an existing TemplateRepo",
          "hierarchy": "Heist",
          "module": "Heist",
          "name": "reloadTemplates",
          "normalized": "TemplateRepo-\u003eEitherT[String]IO TemplateRepo",
          "package": "heist",
          "partial": "Templates",
          "signature": "TemplateRepo-\u003eEitherT[String]IO TemplateRepo",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/heist/docs/Heist.html#v:reloadTemplates"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRestores the HeistState.  This function is almost like putHS except it\n preserves the current doctypes.  You should use this function instead of\n \u003ccode\u003eputHS\u003c/code\u003e to restore an old state.  This was needed because doctypes needs to\n be in a \u003ca\u003eglobal scope\u003c/a\u003e as opposed to the template call \u003ca\u003elocal scope\u003c/a\u003e of\n state items such as recursionDepth, curContext, and spliceMap.\n\u003c/p\u003e",
          "module": "Heist",
          "name": "restoreHS",
          "package": "heist",
          "signature": "HeistState n -\u003e HeistT n m ()",
          "source": "src/Heist-Types.html#restoreHS",
          "type": "function"
        },
        "index": {
          "description": "Restores the HeistState This function is almost like putHS except it preserves the current doctypes You should use this function instead of putHS to restore an old state This was needed because doctypes needs to be in global scope as opposed to the template call local scope of state items such as recursionDepth curContext and spliceMap",
          "hierarchy": "Heist",
          "module": "Heist",
          "name": "restoreHS",
          "normalized": "HeistState a-\u003eHeistT a b()",
          "package": "heist",
          "partial": "HS",
          "signature": "HeistState n-\u003eHeistT n m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/heist/docs/Heist.html#v:restoreHS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGets the names of all the interpreted splices defined in a HeistState.\n\u003c/p\u003e",
          "module": "Heist",
          "name": "spliceNames",
          "package": "heist",
          "signature": "HeistState m -\u003e [Text]",
          "source": "src/Heist-Types.html#spliceNames",
          "type": "function"
        },
        "index": {
          "description": "Gets the names of all the interpreted splices defined in HeistState",
          "hierarchy": "Heist",
          "module": "Heist",
          "name": "spliceNames",
          "normalized": "HeistState a-\u003e[Text]",
          "package": "heist",
          "partial": "Names",
          "signature": "HeistState m-\u003e[Text]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/heist/docs/Heist.html#v:spliceNames"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGets the names of all the templates defined in a HeistState.\n\u003c/p\u003e",
          "module": "Heist",
          "name": "templateNames",
          "package": "heist",
          "signature": "HeistState m -\u003e [TPath]",
          "source": "src/Heist-Types.html#templateNames",
          "type": "function"
        },
        "index": {
          "description": "Gets the names of all the templates defined in HeistState",
          "hierarchy": "Heist",
          "module": "Heist",
          "name": "templateNames",
          "normalized": "HeistState a-\u003e[TPath]",
          "package": "heist",
          "partial": "Names",
          "signature": "HeistState m-\u003e[TPath]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/heist/docs/Heist.html#v:templateNames"
      }
    }
  ]
]