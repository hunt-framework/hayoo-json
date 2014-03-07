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
        "word": "network-transport-tests"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Transport.Tests.Auxiliary",
          "name": "Auxiliary",
          "package": "network-transport-tests",
          "source": "src/Network-Transport-Tests-Auxiliary.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Network Transport Tests Auxiliary",
          "module": "Network.Transport.Tests.Auxiliary",
          "name": "Auxiliary",
          "package": "network-transport-tests",
          "partial": "Auxiliary",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/network-transport-tests/docs/Network-Transport-Tests-Auxiliary.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike fork, but throw exceptions in the child thread to the parent\n\u003c/p\u003e",
          "module": "Network.Transport.Tests.Auxiliary",
          "name": "forkTry",
          "package": "network-transport-tests",
          "signature": "IO () -\u003e IO ThreadId",
          "source": "src/Network-Transport-Tests-Auxiliary.html#forkTry",
          "type": "function"
        },
        "index": {
          "description": "Like fork but throw exceptions in the child thread to the parent",
          "hierarchy": "Network Transport Tests Auxiliary",
          "module": "Network.Transport.Tests.Auxiliary",
          "name": "forkTry",
          "normalized": "IO()-\u003eIO ThreadId",
          "package": "network-transport-tests",
          "partial": "Try",
          "signature": "IO()-\u003eIO ThreadId",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-transport-tests/docs/Network-Transport-Tests-Auxiliary.html#v:forkTry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRandom thread delay between 0 and the specified max \n\u003c/p\u003e",
          "module": "Network.Transport.Tests.Auxiliary",
          "name": "randomThreadDelay",
          "package": "network-transport-tests",
          "signature": "Int -\u003e IO ()",
          "source": "src/Network-Transport-Tests-Auxiliary.html#randomThreadDelay",
          "type": "function"
        },
        "index": {
          "description": "Random thread delay between and the specified max",
          "hierarchy": "Network Transport Tests Auxiliary",
          "module": "Network.Transport.Tests.Auxiliary",
          "name": "randomThreadDelay",
          "normalized": "Int-\u003eIO()",
          "package": "network-transport-tests",
          "partial": "Thread Delay",
          "signature": "Int-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-transport-tests/docs/Network-Transport-Tests-Auxiliary.html#v:randomThreadDelay"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun the given test, catching timeouts and exceptions\n\u003c/p\u003e",
          "module": "Network.Transport.Tests.Auxiliary",
          "name": "runTest",
          "package": "network-transport-tests",
          "signature": "String -\u003e IO () -\u003e IO Bool",
          "source": "src/Network-Transport-Tests-Auxiliary.html#runTest",
          "type": "function"
        },
        "index": {
          "description": "Run the given test catching timeouts and exceptions",
          "hierarchy": "Network Transport Tests Auxiliary",
          "module": "Network.Transport.Tests.Auxiliary",
          "name": "runTest",
          "normalized": "String-\u003eIO()-\u003eIO Bool",
          "package": "network-transport-tests",
          "partial": "Test",
          "signature": "String-\u003eIO()-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-transport-tests/docs/Network-Transport-Tests-Auxiliary.html#v:runTest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a bunch of tests and throw an exception if any fails \n\u003c/p\u003e",
          "module": "Network.Transport.Tests.Auxiliary",
          "name": "runTests",
          "package": "network-transport-tests",
          "signature": "[(String, IO ())] -\u003e IO ()",
          "source": "src/Network-Transport-Tests-Auxiliary.html#runTests",
          "type": "function"
        },
        "index": {
          "description": "Run bunch of tests and throw an exception if any fails",
          "hierarchy": "Network Transport Tests Auxiliary",
          "module": "Network.Transport.Tests.Auxiliary",
          "name": "runTests",
          "normalized": "[(String,IO())]-\u003eIO()",
          "package": "network-transport-tests",
          "partial": "Tests",
          "signature": "[(String,IO())]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-transport-tests/docs/Network-Transport-Tests-Auxiliary.html#v:runTests"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike try, but specialized to SomeException\n\u003c/p\u003e",
          "module": "Network.Transport.Tests.Auxiliary",
          "name": "trySome",
          "package": "network-transport-tests",
          "signature": "IO a -\u003e IO (Either SomeException a)",
          "source": "src/Network-Transport-Tests-Auxiliary.html#trySome",
          "type": "function"
        },
        "index": {
          "description": "Like try but specialized to SomeException",
          "hierarchy": "Network Transport Tests Auxiliary",
          "module": "Network.Transport.Tests.Auxiliary",
          "name": "trySome",
          "normalized": "IO a-\u003eIO(Either SomeException a)",
          "package": "network-transport-tests",
          "partial": "Some",
          "signature": "IO a-\u003eIO(Either SomeException a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-transport-tests/docs/Network-Transport-Tests-Auxiliary.html#v:trySome"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Transport.Tests.Multicast",
          "name": "Multicast",
          "package": "network-transport-tests",
          "source": "src/Network-Transport-Tests-Multicast.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Network Transport Tests Multicast",
          "module": "Network.Transport.Tests.Multicast",
          "name": "Multicast",
          "package": "network-transport-tests",
          "partial": "Multicast",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/network-transport-tests/docs/Network-Transport-Tests-Multicast.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNode for the \u003ca\u003eNo confusion\u003c/a\u003e test\n\u003c/p\u003e",
          "module": "Network.Transport.Tests.Multicast",
          "name": "noConfusionNode",
          "package": "network-transport-tests",
          "signature": "Transport-\u003e [MVar MulticastAddress]-\u003e [MVar ()]-\u003e Int-\u003e [ByteString]-\u003e MVar ()-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Node for the No confusion test",
          "hierarchy": "Network Transport Tests Multicast",
          "module": "Network.Transport.Tests.Multicast",
          "name": "noConfusionNode",
          "normalized": "Transport-\u003e[MVar MulticastAddress]-\u003e[MVar()]-\u003eInt-\u003e[ByteString]-\u003eMVar()-\u003eIO()",
          "package": "network-transport-tests",
          "partial": "Confusion Node",
          "signature": "Transport-\u003e[MVar MulticastAddress]-\u003e[MVar()]-\u003eInt-\u003e[ByteString]-\u003eMVar()-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-transport-tests/docs/Network-Transport-Tests-Multicast.html#v:noConfusionNode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTest multicast\n\u003c/p\u003e",
          "module": "Network.Transport.Tests.Multicast",
          "name": "testMulticast",
          "package": "network-transport-tests",
          "signature": "Transport -\u003e IO ()",
          "source": "src/Network-Transport-Tests-Multicast.html#testMulticast",
          "type": "function"
        },
        "index": {
          "description": "Test multicast",
          "hierarchy": "Network Transport Tests Multicast",
          "module": "Network.Transport.Tests.Multicast",
          "name": "testMulticast",
          "normalized": "Transport-\u003eIO()",
          "package": "network-transport-tests",
          "partial": "Multicast",
          "signature": "Transport-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-transport-tests/docs/Network-Transport-Tests-Multicast.html#v:testMulticast"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTest that distinct multicast groups are not confused\n\u003c/p\u003e",
          "module": "Network.Transport.Tests.Multicast",
          "name": "testNoConfusion",
          "package": "network-transport-tests",
          "signature": "Transport -\u003e Int -\u003e IO ()",
          "source": "src/Network-Transport-Tests-Multicast.html#testNoConfusion",
          "type": "function"
        },
        "index": {
          "description": "Test that distinct multicast groups are not confused",
          "hierarchy": "Network Transport Tests Multicast",
          "module": "Network.Transport.Tests.Multicast",
          "name": "testNoConfusion",
          "normalized": "Transport-\u003eInt-\u003eIO()",
          "package": "network-transport-tests",
          "partial": "No Confusion",
          "signature": "Transport-\u003eInt-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-transport-tests/docs/Network-Transport-Tests-Multicast.html#v:testNoConfusion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAdd tracing to the IO monad (see examples). \n\u003c/p\u003e\u003cdl\u003e\u003cdt\u003eUsage\u003c/dt\u003e\u003cdd\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003cpre\u003e {-# LANGUAGE RebindableSyntax #-}\n import Prelude hiding (catch, (\u003e\u003e=), (\u003e\u003e), return, fail)\n import Traced\n\u003c/pre\u003e\u003cdl\u003e\u003cdt\u003eExample\u003c/dt\u003e\u003cdd\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003cpre\u003e test1 :: IO Int\n test1 = do\n   Left x  \u003c- return (Left 1 :: Either Int Int)\n   putStrLn \"Hello world\"\n   Right y \u003c- return (Left 2 :: Either Int Int)\n   return (x + y)\n\u003c/pre\u003e\u003cp\u003eoutputs \n\u003c/p\u003e\u003cpre\u003e Hello world\n *** Exception: user error (Pattern match failure in do expression at Traced.hs:187:3-9)\n Trace:\n 0  Left 2\n 1  Left 1\n\u003c/pre\u003e\u003cdl\u003e\u003cdt\u003eGuards\u003c/dt\u003e\u003cdd\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003cp\u003eUse the following idiom instead of using \u003ccode\u003e\u003ca\u003eguard\u003c/a\u003e\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e test2 :: IO Int\n test2 = do\n   Left x \u003c- return (Left 1 :: Either Int Int)\n   True   \u003c- return (x == 3)\n   return x \n\u003c/pre\u003e\u003cp\u003eThe advantage of this idiom is that it gives you line number information when the guard fails:\n\u003c/p\u003e\u003cpre\u003e *Traced\u003e test2\n *** Exception: user error (Pattern match failure in do expression at Traced.hs:193:3-6)\n Trace:\n 0  Left 1\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Network.Transport.Tests.Traced",
          "name": "Traced",
          "package": "network-transport-tests",
          "source": "src/Network-Transport-Tests-Traced.html",
          "type": "module"
        },
        "index": {
          "description": "Add tracing to the IO monad see examples Usage LANGUAGE RebindableSyntax import Prelude hiding catch return fail import Traced Example test1 IO Int test1 do Left return Left Either Int Int putStrLn Hello world Right return Left Either Int Int return outputs Hello world Exception user error Pattern match failure in do expression at Traced.hs Trace Left Left Guards Use the following idiom instead of using guard test2 IO Int test2 do Left return Left Either Int Int True return return The advantage of this idiom is that it gives you line number information when the guard fails Traced test2 Exception user error Pattern match failure in do expression at Traced.hs Trace Left",
          "hierarchy": "Network Transport Tests Traced",
          "module": "Network.Transport.Tests.Traced",
          "name": "Traced",
          "package": "network-transport-tests",
          "partial": "Traced",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/network-transport-tests/docs/Network-Transport-Tests-Traced.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e but bind is only defined for \u003ccode\u003eTrace\u003c/code\u003eable instances\n\u003c/p\u003e",
          "module": "Network.Transport.Tests.Traced",
          "name": "MonadS",
          "package": "network-transport-tests",
          "source": "src/Network-Transport-Tests-Traced.html#MonadS",
          "type": "class"
        },
        "index": {
          "description": "Like Monad but bind is only defined for Trace able instances",
          "hierarchy": "Network Transport Tests Traced",
          "module": "Network.Transport.Tests.Traced",
          "name": "MonadS",
          "package": "network-transport-tests",
          "partial": "Monad",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/network-transport-tests/docs/Network-Transport-Tests-Traced.html#t:MonadS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Transport.Tests.Traced",
          "name": "Showable",
          "package": "network-transport-tests",
          "source": "src/Network-Transport-Tests-Traced.html#Showable",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network Transport Tests Traced",
          "module": "Network.Transport.Tests.Traced",
          "name": "Showable",
          "package": "network-transport-tests",
          "partial": "Showable",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/network-transport-tests/docs/Network-Transport-Tests-Traced.html#t:Showable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Transport.Tests.Traced",
          "name": "Traceable",
          "package": "network-transport-tests",
          "source": "src/Network-Transport-Tests-Traced.html#Traceable",
          "type": "class"
        },
        "index": {
          "hierarchy": "Network Transport Tests Traced",
          "module": "Network.Transport.Tests.Traced",
          "name": "Traceable",
          "package": "network-transport-tests",
          "partial": "Traceable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/network-transport-tests/docs/Network-Transport-Tests-Traced.html#t:Traceable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRedefinition of \u003ccode\u003e\u003ca\u003e\u003e\u003e\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Network.Transport.Tests.Traced",
          "name": "(\u003e\u003e)",
          "package": "network-transport-tests",
          "signature": "m a -\u003e m b -\u003e m b",
          "source": "src/Network-Transport-Tests-Traced.html#%3E%3E",
          "type": "function"
        },
        "index": {
          "description": "Redefinition of",
          "hierarchy": "Network Transport Tests Traced",
          "module": "Network.Transport.Tests.Traced",
          "name": "(\u003e\u003e) \u003e\u003e",
          "normalized": "a b-\u003ea c-\u003ea c",
          "package": "network-transport-tests",
          "signature": "m a-\u003em b-\u003em b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-transport-tests/docs/Network-Transport-Tests-Traced.html#v:-62--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRedefinition of \u003ccode\u003e\u003ca\u003e\u003e\u003e=\u003c/a\u003e\u003c/code\u003e \n\u003c/p\u003e",
          "module": "Network.Transport.Tests.Traced",
          "name": "(\u003e\u003e=)",
          "package": "network-transport-tests",
          "signature": "m a -\u003e (a -\u003e m b) -\u003e m b",
          "source": "src/Network-Transport-Tests-Traced.html#%3E%3E%3D",
          "type": "function"
        },
        "index": {
          "description": "Redefinition of",
          "hierarchy": "Network Transport Tests Traced",
          "module": "Network.Transport.Tests.Traced",
          "name": "(\u003e\u003e=) \u003e\u003e=",
          "normalized": "a b-\u003e(b-\u003ea c)-\u003ea c",
          "package": "network-transport-tests",
          "signature": "m a-\u003e(a-\u003em b)-\u003em b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-transport-tests/docs/Network-Transport-Tests-Traced.html#v:-62--62--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Transport.Tests.Traced",
          "name": "Showable",
          "package": "network-transport-tests",
          "signature": "Showable a",
          "source": "src/Network-Transport-Tests-Traced.html#Showable",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Transport Tests Traced",
          "module": "Network.Transport.Tests.Traced",
          "name": "Showable",
          "package": "network-transport-tests",
          "partial": "Showable",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-transport-tests/docs/Network-Transport-Tests-Traced.html#v:Showable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Transport.Tests.Traced",
          "name": "bindS",
          "package": "network-transport-tests",
          "signature": "m a -\u003e (a -\u003e m b) -\u003e m b",
          "source": "src/Network-Transport-Tests-Traced.html#bindS",
          "type": "method"
        },
        "index": {
          "hierarchy": "Network Transport Tests Traced",
          "module": "Network.Transport.Tests.Traced",
          "name": "bindS",
          "normalized": "a b-\u003e(b-\u003ea c)-\u003ea c",
          "package": "network-transport-tests",
          "signature": "m a-\u003e(a-\u003em b)-\u003em b",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/network-transport-tests/docs/Network-Transport-Tests-Traced.html#v:bindS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRedefinition of \u003ccode\u003e\u003ca\u003efail\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Network.Transport.Tests.Traced",
          "name": "fail",
          "package": "network-transport-tests",
          "signature": "String -\u003e m a",
          "source": "src/Network-Transport-Tests-Traced.html#fail",
          "type": "function"
        },
        "index": {
          "description": "Redefinition of fail",
          "hierarchy": "Network Transport Tests Traced",
          "module": "Network.Transport.Tests.Traced",
          "name": "fail",
          "normalized": "String-\u003ea b",
          "package": "network-transport-tests",
          "signature": "String-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-transport-tests/docs/Network-Transport-Tests-Traced.html#v:fail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Transport.Tests.Traced",
          "name": "failS",
          "package": "network-transport-tests",
          "signature": "String -\u003e m a",
          "source": "src/Network-Transport-Tests-Traced.html#failS",
          "type": "method"
        },
        "index": {
          "hierarchy": "Network Transport Tests Traced",
          "module": "Network.Transport.Tests.Traced",
          "name": "failS",
          "normalized": "String-\u003ea b",
          "package": "network-transport-tests",
          "signature": "String-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/network-transport-tests/docs/Network-Transport-Tests-Traced.html#v:failS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefinition of \u003ccode\u003e\u003ca\u003eifThenElse\u003c/a\u003e\u003c/code\u003e for use with RebindableSyntax \n\u003c/p\u003e",
          "module": "Network.Transport.Tests.Traced",
          "name": "ifThenElse",
          "package": "network-transport-tests",
          "signature": "Bool -\u003e a -\u003e a -\u003e a",
          "source": "src/Network-Transport-Tests-Traced.html#ifThenElse",
          "type": "function"
        },
        "index": {
          "description": "Definition of ifThenElse for use with RebindableSyntax",
          "hierarchy": "Network Transport Tests Traced",
          "module": "Network.Transport.Tests.Traced",
          "name": "ifThenElse",
          "normalized": "Bool-\u003ea-\u003ea-\u003ea",
          "package": "network-transport-tests",
          "partial": "Then Else",
          "signature": "Bool-\u003ea-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-transport-tests/docs/Network-Transport-Tests-Traced.html#v:ifThenElse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRedefinition of \u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Network.Transport.Tests.Traced",
          "name": "return",
          "package": "network-transport-tests",
          "signature": "a -\u003e m a",
          "source": "src/Network-Transport-Tests-Traced.html#return",
          "type": "function"
        },
        "index": {
          "description": "Redefinition of return",
          "hierarchy": "Network Transport Tests Traced",
          "module": "Network.Transport.Tests.Traced",
          "name": "return",
          "normalized": "a-\u003eb a",
          "package": "network-transport-tests",
          "signature": "a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-transport-tests/docs/Network-Transport-Tests-Traced.html#v:return"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Transport.Tests.Traced",
          "name": "returnS",
          "package": "network-transport-tests",
          "signature": "a -\u003e m a",
          "source": "src/Network-Transport-Tests-Traced.html#returnS",
          "type": "method"
        },
        "index": {
          "hierarchy": "Network Transport Tests Traced",
          "module": "Network.Transport.Tests.Traced",
          "name": "returnS",
          "normalized": "a-\u003eb a",
          "package": "network-transport-tests",
          "signature": "a-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/network-transport-tests/docs/Network-Transport-Tests-Traced.html#v:returnS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Transport.Tests.Traced",
          "name": "seqS",
          "package": "network-transport-tests",
          "signature": "m a -\u003e m b -\u003e m b",
          "source": "src/Network-Transport-Tests-Traced.html#seqS",
          "type": "method"
        },
        "index": {
          "hierarchy": "Network Transport Tests Traced",
          "module": "Network.Transport.Tests.Traced",
          "name": "seqS",
          "normalized": "a b-\u003ea c-\u003ea c",
          "package": "network-transport-tests",
          "signature": "m a-\u003em b-\u003em b",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/network-transport-tests/docs/Network-Transport-Tests-Traced.html#v:seqS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Transport.Tests.Traced",
          "name": "trace",
          "package": "network-transport-tests",
          "signature": "a -\u003e Maybe Showable",
          "source": "src/Network-Transport-Tests-Traced.html#trace",
          "type": "method"
        },
        "index": {
          "hierarchy": "Network Transport Tests Traced",
          "module": "Network.Transport.Tests.Traced",
          "name": "trace",
          "normalized": "a-\u003eMaybe Showable",
          "package": "network-transport-tests",
          "signature": "a-\u003eMaybe Showable",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/network-transport-tests/docs/Network-Transport-Tests-Traced.html#v:trace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Transport.Tests.Traced",
          "name": "traceShow",
          "package": "network-transport-tests",
          "signature": "a -\u003e Maybe Showable",
          "source": "src/Network-Transport-Tests-Traced.html#traceShow",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Transport Tests Traced",
          "module": "Network.Transport.Tests.Traced",
          "name": "traceShow",
          "normalized": "a-\u003eMaybe Showable",
          "package": "network-transport-tests",
          "partial": "Show",
          "signature": "a-\u003eMaybe Showable",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-transport-tests/docs/Network-Transport-Tests-Traced.html#v:traceShow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Transport.Tests",
          "name": "Tests",
          "package": "network-transport-tests",
          "source": "src/Network-Transport-Tests.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Network Transport Tests",
          "module": "Network.Transport.Tests",
          "name": "Tests",
          "package": "network-transport-tests",
          "partial": "Tests",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/network-transport-tests/docs/Network-Transport-Tests.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCollect events and order them by connection ID\n\u003c/p\u003e",
          "module": "Network.Transport.Tests",
          "name": "collect",
          "package": "network-transport-tests",
          "signature": "EndPoint -\u003e Maybe Int -\u003e Maybe Int -\u003e IO [(ConnectionId, [[ByteString]])]",
          "source": "src/Network-Transport-Tests.html#collect",
          "type": "function"
        },
        "index": {
          "description": "Collect events and order them by connection ID",
          "hierarchy": "Network Transport Tests",
          "module": "Network.Transport.Tests",
          "name": "collect",
          "normalized": "EndPoint-\u003eMaybe Int-\u003eMaybe Int-\u003eIO[(ConnectionId,[[ByteString]])]",
          "package": "network-transport-tests",
          "signature": "EndPoint-\u003eMaybe Int-\u003eMaybe Int-\u003eIO[(ConnectionId,[[ByteString]])]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-transport-tests/docs/Network-Transport-Tests.html#v:collect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eServer that echoes messages straight back to the origin endpoint.\n\u003c/p\u003e",
          "module": "Network.Transport.Tests",
          "name": "echoServer",
          "package": "network-transport-tests",
          "signature": "EndPoint -\u003e IO ()",
          "source": "src/Network-Transport-Tests.html#echoServer",
          "type": "function"
        },
        "index": {
          "description": "Server that echoes messages straight back to the origin endpoint",
          "hierarchy": "Network Transport Tests",
          "module": "Network.Transport.Tests",
          "name": "echoServer",
          "normalized": "EndPoint-\u003eIO()",
          "package": "network-transport-tests",
          "partial": "Server",
          "signature": "EndPoint-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-transport-tests/docs/Network-Transport-Tests.html#v:echoServer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePing client used in a few tests\n\u003c/p\u003e",
          "module": "Network.Transport.Tests",
          "name": "ping",
          "package": "network-transport-tests",
          "signature": "EndPoint -\u003e EndPointAddress -\u003e Int -\u003e ByteString -\u003e IO ()",
          "source": "src/Network-Transport-Tests.html#ping",
          "type": "function"
        },
        "index": {
          "description": "Ping client used in few tests",
          "hierarchy": "Network Transport Tests",
          "module": "Network.Transport.Tests",
          "name": "ping",
          "normalized": "EndPoint-\u003eEndPointAddress-\u003eInt-\u003eByteString-\u003eIO()",
          "package": "network-transport-tests",
          "signature": "EndPoint-\u003eEndPointAddress-\u003eInt-\u003eByteString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-transport-tests/docs/Network-Transport-Tests.html#v:ping"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTest various aspects of \u003ccode\u003e\u003ca\u003ecloseEndPoint\u003c/a\u003e\u003c/code\u003e \n\u003c/p\u003e",
          "module": "Network.Transport.Tests",
          "name": "testCloseEndPoint",
          "package": "network-transport-tests",
          "signature": "Transport -\u003e Int -\u003e IO ()",
          "source": "src/Network-Transport-Tests.html#testCloseEndPoint",
          "type": "function"
        },
        "index": {
          "description": "Test various aspects of closeEndPoint",
          "hierarchy": "Network Transport Tests",
          "module": "Network.Transport.Tests",
          "name": "testCloseEndPoint",
          "normalized": "Transport-\u003eInt-\u003eIO()",
          "package": "network-transport-tests",
          "partial": "Close End Point",
          "signature": "Transport-\u003eInt-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-transport-tests/docs/Network-Transport-Tests.html#v:testCloseEndPoint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTest that closing one connection does not close the other\n\u003c/p\u003e",
          "module": "Network.Transport.Tests",
          "name": "testCloseOneConnection",
          "package": "network-transport-tests",
          "signature": "Transport -\u003e Int -\u003e IO ()",
          "source": "src/Network-Transport-Tests.html#testCloseOneConnection",
          "type": "function"
        },
        "index": {
          "description": "Test that closing one connection does not close the other",
          "hierarchy": "Network Transport Tests",
          "module": "Network.Transport.Tests",
          "name": "testCloseOneConnection",
          "normalized": "Transport-\u003eInt-\u003eIO()",
          "package": "network-transport-tests",
          "partial": "Close One Connection",
          "signature": "Transport-\u003eInt-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-transport-tests/docs/Network-Transport-Tests.html#v:testCloseOneConnection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTest that if A connects to B and B connects to A, B can still send to A after\n A closes its connection to B (for instance, in the TCP transport, the socket pair\n connecting A and B should not yet be closed).\n\u003c/p\u003e",
          "module": "Network.Transport.Tests",
          "name": "testCloseOneDirection",
          "package": "network-transport-tests",
          "signature": "Transport -\u003e Int -\u003e IO ()",
          "source": "src/Network-Transport-Tests.html#testCloseOneDirection",
          "type": "function"
        },
        "index": {
          "description": "Test that if connects to and connects to can still send to after closes its connection to for instance in the TCP transport the socket pair connecting and should not yet be closed",
          "hierarchy": "Network Transport Tests",
          "module": "Network.Transport.Tests",
          "name": "testCloseOneDirection",
          "normalized": "Transport-\u003eInt-\u003eIO()",
          "package": "network-transport-tests",
          "partial": "Close One Direction",
          "signature": "Transport-\u003eInt-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-transport-tests/docs/Network-Transport-Tests.html#v:testCloseOneDirection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOpen connection, close it, then reopen it\n (In the TCP transport this means the socket will be closed, then reopened)\n\u003c/p\u003e\u003cp\u003eNote that B cannot expect to receive all of A's messages on the first connection\n before receiving the messages on the second connection. What might (and sometimes\n does) happen is that finishes sending all of its messages on the first connection\n (in the TCP transport, the first socket pair) while B is behind on reading _from_\n this connection (socket pair) -- the messages are \u003ca\u003ein transit\u003c/a\u003e on the network \n (these tests are done on localhost, so there are in some OS buffer). Then when\n A opens the second connection (socket pair) B will spawn a new thread for this\n connection, and hence might start interleaving messages from the first and second\n connection. \n\u003c/p\u003e\u003cp\u003eThis is correct behaviour, however: the transport API guarantees reliability and\n ordering _per connection_, but not _across_ connections.\n\u003c/p\u003e",
          "module": "Network.Transport.Tests",
          "name": "testCloseReopen",
          "package": "network-transport-tests",
          "signature": "Transport -\u003e Int -\u003e IO ()",
          "source": "src/Network-Transport-Tests.html#testCloseReopen",
          "type": "function"
        },
        "index": {
          "description": "Open connection close it then reopen it In the TCP transport this means the socket will be closed then reopened Note that cannot expect to receive all of messages on the first connection before receiving the messages on the second connection What might and sometimes does happen is that finishes sending all of its messages on the first connection in the TCP transport the first socket pair while is behind on reading from this connection socket pair the messages are in transit on the network these tests are done on localhost so there are in some OS buffer Then when opens the second connection socket pair will spawn new thread for this connection and hence might start interleaving messages from the first and second connection This is correct behaviour however the transport API guarantees reliability and ordering per connection but not across connections",
          "hierarchy": "Network Transport Tests",
          "module": "Network.Transport.Tests",
          "name": "testCloseReopen",
          "normalized": "Transport-\u003eInt-\u003eIO()",
          "package": "network-transport-tests",
          "partial": "Close Reopen",
          "signature": "Transport-\u003eInt-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-transport-tests/docs/Network-Transport-Tests.html#v:testCloseReopen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTest that we self-connections no longer work once we close our endpoint\n or our transport\n\u003c/p\u003e",
          "module": "Network.Transport.Tests",
          "name": "testCloseSelf",
          "package": "network-transport-tests",
          "signature": "IO (Either String Transport) -\u003e IO ()",
          "source": "src/Network-Transport-Tests.html#testCloseSelf",
          "type": "function"
        },
        "index": {
          "description": "Test that we self-connections no longer work once we close our endpoint or our transport",
          "hierarchy": "Network Transport Tests",
          "module": "Network.Transport.Tests",
          "name": "testCloseSelf",
          "normalized": "IO(Either String Transport)-\u003eIO()",
          "package": "network-transport-tests",
          "partial": "Close Self",
          "signature": "IO(Either String Transport)-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-transport-tests/docs/Network-Transport-Tests.html#v:testCloseSelf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Transport.Tests",
          "name": "testCloseTransport",
          "package": "network-transport-tests",
          "signature": "IO (Either String Transport) -\u003e IO ()",
          "source": "src/Network-Transport-Tests.html#testCloseTransport",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Transport Tests",
          "module": "Network.Transport.Tests",
          "name": "testCloseTransport",
          "normalized": "IO(Either String Transport)-\u003eIO()",
          "package": "network-transport-tests",
          "partial": "Close Transport",
          "signature": "IO(Either String Transport)-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-transport-tests/docs/Network-Transport-Tests.html#v:testCloseTransport"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTest that closing the same connection twice has no effect\n\u003c/p\u003e",
          "module": "Network.Transport.Tests",
          "name": "testCloseTwice",
          "package": "network-transport-tests",
          "signature": "Transport -\u003e Int -\u003e IO ()",
          "source": "src/Network-Transport-Tests.html#testCloseTwice",
          "type": "function"
        },
        "index": {
          "description": "Test that closing the same connection twice has no effect",
          "hierarchy": "Network Transport Tests",
          "module": "Network.Transport.Tests",
          "name": "testCloseTwice",
          "normalized": "Transport-\u003eInt-\u003eIO()",
          "package": "network-transport-tests",
          "partial": "Close Twice",
          "signature": "Transport-\u003eInt-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-transport-tests/docs/Network-Transport-Tests.html#v:testCloseTwice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemote node attempts to connect to a closed local endpoint\n\u003c/p\u003e",
          "module": "Network.Transport.Tests",
          "name": "testConnectClosedEndPoint",
          "package": "network-transport-tests",
          "signature": "Transport -\u003e IO ()",
          "source": "src/Network-Transport-Tests.html#testConnectClosedEndPoint",
          "type": "function"
        },
        "index": {
          "description": "Remote node attempts to connect to closed local endpoint",
          "hierarchy": "Network Transport Tests",
          "module": "Network.Transport.Tests",
          "name": "testConnectClosedEndPoint",
          "normalized": "Transport-\u003eIO()",
          "package": "network-transport-tests",
          "partial": "Connect Closed End Point",
          "signature": "Transport-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-transport-tests/docs/Network-Transport-Tests.html#v:testConnectClosedEndPoint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTest that we can connect an endpoint to itself\n\u003c/p\u003e",
          "module": "Network.Transport.Tests",
          "name": "testConnectToSelf",
          "package": "network-transport-tests",
          "signature": "Transport -\u003e Int -\u003e IO ()",
          "source": "src/Network-Transport-Tests.html#testConnectToSelf",
          "type": "function"
        },
        "index": {
          "description": "Test that we can connect an endpoint to itself",
          "hierarchy": "Network Transport Tests",
          "module": "Network.Transport.Tests",
          "name": "testConnectToSelf",
          "normalized": "Transport-\u003eInt-\u003eIO()",
          "package": "network-transport-tests",
          "partial": "Connect To Self",
          "signature": "Transport-\u003eInt-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-transport-tests/docs/Network-Transport-Tests.html#v:testConnectToSelf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTest that we can connect an endpoint to itself multiple times\n\u003c/p\u003e",
          "module": "Network.Transport.Tests",
          "name": "testConnectToSelfTwice",
          "package": "network-transport-tests",
          "signature": "Transport -\u003e Int -\u003e IO ()",
          "source": "src/Network-Transport-Tests.html#testConnectToSelfTwice",
          "type": "function"
        },
        "index": {
          "description": "Test that we can connect an endpoint to itself multiple times",
          "hierarchy": "Network Transport Tests",
          "module": "Network.Transport.Tests",
          "name": "testConnectToSelfTwice",
          "normalized": "Transport-\u003eInt-\u003eIO()",
          "package": "network-transport-tests",
          "partial": "Connect To Self Twice",
          "signature": "Transport-\u003eInt-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-transport-tests/docs/Network-Transport-Tests.html#v:testConnectToSelfTwice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Transport.Tests",
          "name": "testConnections",
          "package": "network-transport-tests",
          "signature": "Transport -\u003e Int -\u003e IO ()",
          "source": "src/Network-Transport-Tests.html#testConnections",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Transport Tests",
          "module": "Network.Transport.Tests",
          "name": "testConnections",
          "normalized": "Transport-\u003eInt-\u003eIO()",
          "package": "network-transport-tests",
          "partial": "Connections",
          "signature": "Transport-\u003eInt-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-transport-tests/docs/Network-Transport-Tests.html#v:testConnections"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet up conditions with a high likelyhood of \u003ca\u003ecrossing\u003c/a\u003e (for transports\n that multiplex lightweight connections across heavyweight connections)\n\u003c/p\u003e",
          "module": "Network.Transport.Tests",
          "name": "testCrossing",
          "package": "network-transport-tests",
          "signature": "Transport -\u003e Int -\u003e IO ()",
          "source": "src/Network-Transport-Tests.html#testCrossing",
          "type": "function"
        },
        "index": {
          "description": "Set up conditions with high likelyhood of crossing for transports that multiplex lightweight connections across heavyweight connections",
          "hierarchy": "Network Transport Tests",
          "module": "Network.Transport.Tests",
          "name": "testCrossing",
          "normalized": "Transport-\u003eInt-\u003eIO()",
          "package": "network-transport-tests",
          "partial": "Crossing",
          "signature": "Transport-\u003eInt-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-transport-tests/docs/Network-Transport-Tests.html#v:testCrossing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTest that endpoints don't get confused\n\u003c/p\u003e",
          "module": "Network.Transport.Tests",
          "name": "testEndPoints",
          "package": "network-transport-tests",
          "signature": "Transport -\u003e Int -\u003e IO ()",
          "source": "src/Network-Transport-Tests.html#testEndPoints",
          "type": "function"
        },
        "index": {
          "description": "Test that endpoints don get confused",
          "hierarchy": "Network Transport Tests",
          "module": "Network.Transport.Tests",
          "name": "testEndPoints",
          "normalized": "Transport-\u003eInt-\u003eIO()",
          "package": "network-transport-tests",
          "partial": "End Points",
          "signature": "Transport-\u003eInt-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-transport-tests/docs/Network-Transport-Tests.html#v:testEndPoints"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWe should receive an exception when doing a \u003ccode\u003e\u003ca\u003ereceive\u003c/a\u003e\u003c/code\u003e after we have been\n notified that an endpoint has been closed\n\u003c/p\u003e",
          "module": "Network.Transport.Tests",
          "name": "testExceptionOnReceive",
          "package": "network-transport-tests",
          "signature": "IO (Either String Transport) -\u003e IO ()",
          "source": "src/Network-Transport-Tests.html#testExceptionOnReceive",
          "type": "function"
        },
        "index": {
          "description": "We should receive an exception when doing receive after we have been notified that an endpoint has been closed",
          "hierarchy": "Network Transport Tests",
          "module": "Network.Transport.Tests",
          "name": "testExceptionOnReceive",
          "normalized": "IO(Either String Transport)-\u003eIO()",
          "package": "network-transport-tests",
          "partial": "Exception On Receive",
          "signature": "IO(Either String Transport)-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-transport-tests/docs/Network-Transport-Tests.html#v:testExceptionOnReceive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf threads get killed while executing a \u003ccode\u003e\u003ca\u003econnect\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003esend\u003c/a\u003e\u003c/code\u003e, or \u003ccode\u003e\u003ca\u003eclose\u003c/a\u003e\u003c/code\u003e, this\n should not affect other threads.\n\u003c/p\u003e\u003cp\u003eThe intention of this test is to see what happens when a asynchronous\n exception happes _while executing a send_. This is exceedingly difficult to\n guarantee, however. Hence we run a large number of tests and insert random\n thread delays -- and even then it might not happen.  Moreover, it will only\n happen when we run on multiple cores. \n\u003c/p\u003e",
          "module": "Network.Transport.Tests",
          "name": "testKill",
          "package": "network-transport-tests",
          "signature": "IO (Either String Transport) -\u003e Int -\u003e IO ()",
          "source": "src/Network-Transport-Tests.html#testKill",
          "type": "function"
        },
        "index": {
          "description": "If threads get killed while executing connect send or close this should not affect other threads The intention of this test is to see what happens when asynchronous exception happes while executing send This is exceedingly difficult to guarantee however Hence we run large number of tests and insert random thread delays and even then it might not happen Moreover it will only happen when we run on multiple cores",
          "hierarchy": "Network Transport Tests",
          "module": "Network.Transport.Tests",
          "name": "testKill",
          "normalized": "IO(Either String Transport)-\u003eInt-\u003eIO()",
          "package": "network-transport-tests",
          "partial": "Kill",
          "signature": "IO(Either String Transport)-\u003eInt-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-transport-tests/docs/Network-Transport-Tests.html#v:testKill"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTest lots of parallel connection attempts\n\u003c/p\u003e",
          "module": "Network.Transport.Tests",
          "name": "testParallelConnects",
          "package": "network-transport-tests",
          "signature": "Transport -\u003e Int -\u003e IO ()",
          "source": "src/Network-Transport-Tests.html#testParallelConnects",
          "type": "function"
        },
        "index": {
          "description": "Test lots of parallel connection attempts",
          "hierarchy": "Network Transport Tests",
          "module": "Network.Transport.Tests",
          "name": "testParallelConnects",
          "normalized": "Transport-\u003eInt-\u003eIO()",
          "package": "network-transport-tests",
          "partial": "Parallel Connects",
          "signature": "Transport-\u003eInt-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-transport-tests/docs/Network-Transport-Tests.html#v:testParallelConnects"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBasic ping test\n\u003c/p\u003e",
          "module": "Network.Transport.Tests",
          "name": "testPingPong",
          "package": "network-transport-tests",
          "signature": "Transport -\u003e Int -\u003e IO ()",
          "source": "src/Network-Transport-Tests.html#testPingPong",
          "type": "function"
        },
        "index": {
          "description": "Basic ping test",
          "hierarchy": "Network Transport Tests",
          "module": "Network.Transport.Tests",
          "name": "testPingPong",
          "normalized": "Transport-\u003eInt-\u003eIO()",
          "package": "network-transport-tests",
          "partial": "Ping Pong",
          "signature": "Transport-\u003eInt-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-transport-tests/docs/Network-Transport-Tests.html#v:testPingPong"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTest that sending on a closed connection gives an error\n\u003c/p\u003e",
          "module": "Network.Transport.Tests",
          "name": "testSendAfterClose",
          "package": "network-transport-tests",
          "signature": "Transport -\u003e Int -\u003e IO ()",
          "source": "src/Network-Transport-Tests.html#testSendAfterClose",
          "type": "function"
        },
        "index": {
          "description": "Test that sending on closed connection gives an error",
          "hierarchy": "Network Transport Tests",
          "module": "Network.Transport.Tests",
          "name": "testSendAfterClose",
          "normalized": "Transport-\u003eInt-\u003eIO()",
          "package": "network-transport-tests",
          "partial": "Send After Close",
          "signature": "Transport-\u003eInt-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-transport-tests/docs/Network-Transport-Tests.html#v:testSendAfterClose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTest what happens when the argument to \u003ccode\u003e\u003ca\u003esend\u003c/a\u003e\u003c/code\u003e is an exceptional value\n\u003c/p\u003e",
          "module": "Network.Transport.Tests",
          "name": "testSendException",
          "package": "network-transport-tests",
          "signature": "IO (Either String Transport) -\u003e IO ()",
          "source": "src/Network-Transport-Tests.html#testSendException",
          "type": "function"
        },
        "index": {
          "description": "Test what happens when the argument to send is an exceptional value",
          "hierarchy": "Network Transport Tests",
          "module": "Network.Transport.Tests",
          "name": "testSendException",
          "normalized": "IO(Either String Transport)-\u003eIO()",
          "package": "network-transport-tests",
          "partial": "Send Exception",
          "signature": "IO(Either String Transport)-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-transport-tests/docs/Network-Transport-Tests.html#v:testSendException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Transport.Tests",
          "name": "testTransport",
          "package": "network-transport-tests",
          "signature": "IO (Either String Transport) -\u003e IO ()",
          "source": "src/Network-Transport-Tests.html#testTransport",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Transport Tests",
          "module": "Network.Transport.Tests",
          "name": "testTransport",
          "normalized": "IO(Either String Transport)-\u003eIO()",
          "package": "network-transport-tests",
          "partial": "Transport",
          "signature": "IO(Either String Transport)-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-transport-tests/docs/Network-Transport-Tests.html#v:testTransport"
      }
    }
  ]
]