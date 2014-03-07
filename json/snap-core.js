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
        "word": "snap-core"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module contains the core type definitions, class instances, and functions\nfor HTTP as well as the \u003ccode\u003e\u003ca\u003eSnap\u003c/a\u003e\u003c/code\u003e monad, which is used for web handlers.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Snap.Core",
          "name": "Core",
          "package": "snap-core",
          "source": "src/Snap-Core.html",
          "type": "module"
        },
        "index": {
          "description": "This module contains the core type definitions class instances and functions for HTTP as well as the Snap monad which is used for web handlers",
          "hierarchy": "Snap Core",
          "module": "Snap.Core",
          "name": "Core",
          "package": "snap-core",
          "partial": "Core",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Core.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA datatype representing an HTTP cookie.\n\u003c/p\u003e",
          "module": "Snap.Core",
          "name": "Cookie",
          "package": "snap-core",
          "source": "src/Snap-Internal-Http-Types.html#Cookie",
          "type": "data"
        },
        "index": {
          "description": "datatype representing an HTTP cookie",
          "hierarchy": "Snap Core",
          "module": "Snap.Core",
          "name": "Cookie",
          "package": "snap-core",
          "partial": "Cookie",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Core.html#t:Cookie"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEnumerators are sources of data, to be consumed by iteratees.\n Enumerators typically read from an external source (parser, handle,\n random generator, etc), then feed chunks into an tteratee until:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e The input source runs out of data.\n\u003c/li\u003e\u003cli\u003e The iteratee yields a result value.\n\u003c/li\u003e\u003cli\u003e The iteratee throws an exception.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Snap.Core",
          "name": "Enumerator",
          "package": "snap-core",
          "type": "type"
        },
        "index": {
          "description": "Enumerators are sources of data to be consumed by iteratees Enumerators typically read from an external source parser handle random generator etc then feed chunks into an tteratee until The input source runs out of data The iteratee yields result value The iteratee throws an exception",
          "hierarchy": "Snap Core",
          "module": "Snap.Core",
          "name": "Enumerator",
          "package": "snap-core",
          "partial": "Enumerator",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Core.html#t:Enumerator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Core",
          "name": "EscapeHttpHandler",
          "package": "snap-core",
          "source": "src/Snap-Internal-Exceptions.html#EscapeHttpHandler",
          "type": "type"
        },
        "index": {
          "hierarchy": "Snap Core",
          "module": "Snap.Core",
          "name": "EscapeHttpHandler",
          "package": "snap-core",
          "partial": "Escape Http Handler",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Core.html#t:EscapeHttpHandler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA typeclass for datatypes which contain HTTP headers.\n\u003c/p\u003e",
          "module": "Snap.Core",
          "name": "HasHeaders",
          "package": "snap-core",
          "source": "src/Snap-Internal-Http-Types.html#HasHeaders",
          "type": "class"
        },
        "index": {
          "description": "typeclass for datatypes which contain HTTP headers",
          "hierarchy": "Snap Core",
          "module": "Snap.Core",
          "name": "HasHeaders",
          "package": "snap-core",
          "partial": "Has Headers",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Core.html#t:HasHeaders"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Core",
          "name": "Headers",
          "package": "snap-core",
          "source": "src/Snap-Types-Headers.html#Headers",
          "type": "data"
        },
        "index": {
          "hierarchy": "Snap Core",
          "module": "Snap.Core",
          "name": "Headers",
          "package": "snap-core",
          "partial": "Headers",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Core.html#t:Headers"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Core",
          "name": "HttpVersion",
          "package": "snap-core",
          "source": "src/Snap-Internal-Http-Types.html#HttpVersion",
          "type": "type"
        },
        "index": {
          "hierarchy": "Snap Core",
          "module": "Snap.Core",
          "name": "HttpVersion",
          "package": "snap-core",
          "partial": "Http Version",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Core.html#t:HttpVersion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEnumerates the HTTP method values (see\n \u003ca\u003ehttp://tools.ietf.org/html/rfc2068.html#section-5.1.1\u003c/a\u003e).\n\u003c/p\u003e",
          "module": "Snap.Core",
          "name": "Method",
          "package": "snap-core",
          "source": "src/Snap-Internal-Http-Types.html#Method",
          "type": "data"
        },
        "index": {
          "description": "Enumerates the HTTP method values see http tools.ietf.org html rfc2068.html section-5.1.1",
          "hierarchy": "Snap Core",
          "module": "Snap.Core",
          "name": "Method",
          "package": "snap-core",
          "partial": "Method",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Core.html#t:Method"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eSnap\u003c/a\u003e\u003c/code\u003e is the \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e that user web handlers run in. \u003ccode\u003e\u003ca\u003eSnap\u003c/a\u003e\u003c/code\u003e gives you:\n\u003c/p\u003e\u003col\u003e\u003cli\u003e stateful access to fetch or modify an HTTP \u003ccode\u003e\u003ca\u003eRequest\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e stateful access to fetch or modify an HTTP \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e failure / \u003ccode\u003e\u003ca\u003eAlternative\u003c/a\u003e\u003c/code\u003e / \u003ccode\u003e\u003ca\u003eMonadPlus\u003c/a\u003e\u003c/code\u003e semantics: a \u003ccode\u003e\u003ca\u003eSnap\u003c/a\u003e\u003c/code\u003e handler can\n   choose not to handle a given request, using \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e or its synonym \u003ccode\u003e\u003ca\u003epass\u003c/a\u003e\u003c/code\u003e,\n   and you can try alternative handlers with the \u003ccode\u003e\u003ca\u003e\u003c|\u003e\u003c/a\u003e\u003c/code\u003e operator:\n\u003c/li\u003e\u003c/ol\u003e\u003cpre\u003e a :: Snap String\n a = pass\n\n b :: Snap String\n b = return \"foo\"\n\n c :: Snap String\n c = a \u003c|\u003e b             -- try running a, if it fails then try b\n\u003c/pre\u003e\u003col\u003e\u003cli\u003e convenience functions (\u003ccode\u003e\u003ca\u003ewriteBS\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ewriteLBS\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ewriteText\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ewriteLazyText\u003c/a\u003e\u003c/code\u003e,\n   \u003ccode\u003e\u003ca\u003eaddToOutput\u003c/a\u003e\u003c/code\u003e) for queueing output to be written to the \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e:\n\u003c/li\u003e\u003c/ol\u003e\u003cpre\u003e a :: (forall a . Enumerator a) -\u003e Snap ()\n a someEnumerator = do\n     writeBS \"I'm a strict bytestring\"\n     writeLBS \"I'm a lazy bytestring\"\n     writeText \"I'm strict text\"\n     addToOutput someEnumerator\n\u003c/pre\u003e\u003col\u003e\u003cli\u003e early termination: if you call \u003ccode\u003e\u003ca\u003efinishWith\u003c/a\u003e\u003c/code\u003e:\n\u003c/li\u003e\u003c/ol\u003e\u003cpre\u003e a :: Snap ()\n a = do\n   modifyResponse $ setResponseStatus 500 \"Internal Server Error\"\n   writeBS \"500 error\"\n   r \u003c- getResponse\n   finishWith r\n\u003c/pre\u003e\u003cp\u003ethen any subsequent processing will be skipped and supplied \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e\n   value will be returned from \u003ccode\u003e\u003ca\u003erunSnap\u003c/a\u003e\u003c/code\u003e as-is.\n\u003c/p\u003e\u003col\u003e\u003cli\u003e access to the \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e monad through a \u003ccode\u003e\u003ca\u003eMonadIO\u003c/a\u003e\u003c/code\u003e instance:\n\u003c/li\u003e\u003c/ol\u003e\u003cpre\u003e a :: Snap ()\n a = liftIO fireTheMissiles\n\u003c/pre\u003e\u003col\u003e\u003cli\u003e the ability to set or extend a timeout which will kill the handler thread\n   after \u003ccode\u003eN\u003c/code\u003e seconds of inactivity (the default is 20 seconds):\n\u003c/li\u003e\u003c/ol\u003e\u003cpre\u003e a :: Snap ()\n a = setTimeout 30\n\u003c/pre\u003e\u003col\u003e\u003cli\u003e throw and catch exceptions using a \u003ccode\u003e\u003ca\u003eMonadCatchIO\u003c/a\u003e\u003c/code\u003e instance:\n\u003c/li\u003e\u003c/ol\u003e\u003cpre\u003e foo :: Snap ()\n foo = bar `catch` \\(e::SomeException) -\u003e baz\n   where\n     bar = throw FooException\n\u003c/pre\u003e\u003col\u003e\u003cli\u003e log a message to the error log:\n\u003c/li\u003e\u003c/ol\u003e\u003cpre\u003e foo :: Snap ()\n foo = logError \"grumble.\"\n\u003c/pre\u003e\u003cp\u003eYou may notice that most of the type signatures in this module contain a\n\u003ccode\u003e(MonadSnap m) =\u003e ...\u003c/code\u003e typeclass constraint. \u003ccode\u003e\u003ca\u003eMonadSnap\u003c/a\u003e\u003c/code\u003e is a typeclass which,\nin essence, says \"you can get back to the \u003ccode\u003e\u003ca\u003eSnap\u003c/a\u003e\u003c/code\u003e monad from here\". Using\n\u003ccode\u003e\u003ca\u003eMonadSnap\u003c/a\u003e\u003c/code\u003e you can extend the \u003ccode\u003e\u003ca\u003eSnap\u003c/a\u003e\u003c/code\u003e monad with additional functionality and\nstill have access to most of the \u003ccode\u003e\u003ca\u003eSnap\u003c/a\u003e\u003c/code\u003e functions without writing \u003ccode\u003e\u003ca\u003elift\u003c/a\u003e\u003c/code\u003e\neverywhere. Instances are already provided for most of the common monad\ntransformers (\u003ccode\u003eReaderT\u003c/code\u003e, \u003ccode\u003eWriterT\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eStateT\u003c/a\u003e\u003c/code\u003e, etc.).\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eMonadSnap\u003c/a\u003e\u003c/code\u003e is a type class, analogous to \u003ccode\u003e\u003ca\u003eMonadIO\u003c/a\u003e\u003c/code\u003e for \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e, that makes\n it easy to wrap \u003ccode\u003e\u003ca\u003eSnap\u003c/a\u003e\u003c/code\u003e inside monad transformers.\n\u003c/p\u003e",
          "module": "Snap.Core",
          "name": "MonadSnap",
          "package": "snap-core",
          "source": "src/Snap-Internal-Types.html#MonadSnap",
          "type": "class"
        },
        "index": {
          "description": "Snap is the Monad that user web handlers run in Snap gives you stateful access to fetch or modify an HTTP Request stateful access to fetch or modify an HTTP Response failure Alternative MonadPlus semantics Snap handler can choose not to handle given request using empty or its synonym pass and you can try alternative handlers with the operator Snap String pass Snap String return foo Snap String try running if it fails then try convenience functions writeBS writeLBS writeText writeLazyText addToOutput for queueing output to be written to the Response forall Enumerator Snap someEnumerator do writeBS strict bytestring writeLBS lazy bytestring writeText strict text addToOutput someEnumerator early termination if you call finishWith Snap do modifyResponse setResponseStatus Internal Server Error writeBS error getResponse finishWith then any subsequent processing will be skipped and supplied Response value will be returned from runSnap as-is access to the IO monad through MonadIO instance Snap liftIO fireTheMissiles the ability to set or extend timeout which will kill the handler thread after seconds of inactivity the default is seconds Snap setTimeout throw and catch exceptions using MonadCatchIO instance foo Snap foo bar catch SomeException baz where bar throw FooException log message to the error log foo Snap foo logError grumble You may notice that most of the type signatures in this module contain MonadSnap typeclass constraint MonadSnap is typeclass which in essence says you can get back to the Snap monad from here Using MonadSnap you can extend the Snap monad with additional functionality and still have access to most of the Snap functions without writing lift everywhere Instances are already provided for most of the common monad transformers ReaderT WriterT StateT etc MonadSnap is type class analogous to MonadIO for IO that makes it easy to wrap Snap inside monad transformers",
          "hierarchy": "Snap Core",
          "module": "Snap.Core",
          "name": "MonadSnap",
          "package": "snap-core",
          "partial": "Monad Snap",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Core.html#t:MonadSnap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis exception is thrown if the handler you supply to \u003ccode\u003e\u003ca\u003erunSnap\u003c/a\u003e\u003c/code\u003e fails.\n\u003c/p\u003e",
          "module": "Snap.Core",
          "name": "NoHandlerException",
          "package": "snap-core",
          "source": "src/Snap-Internal-Types.html#NoHandlerException",
          "type": "data"
        },
        "index": {
          "description": "This exception is thrown if the handler you supply to runSnap fails",
          "hierarchy": "Snap Core",
          "module": "Snap.Core",
          "name": "NoHandlerException",
          "package": "snap-core",
          "partial": "No Handler Exception",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Core.html#t:NoHandlerException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type alias for the HTTP parameters mapping. Each parameter\n key maps to a list of ByteString values; if a parameter is specified\n multiple times (e.g.: \"\u003ccode\u003eGET /foo?param=bar1&param=bar2\u003c/code\u003e\"), looking up\n \"\u003ccode\u003eparam\u003c/code\u003e\" in the mapping will give you \u003ccode\u003e[\"bar1\", \"bar2\"]\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Snap.Core",
          "name": "Params",
          "package": "snap-core",
          "source": "src/Snap-Internal-Http-Types.html#Params",
          "type": "type"
        },
        "index": {
          "description": "type alias for the HTTP parameters mapping Each parameter key maps to list of ByteString values if parameter is specified multiple times e.g GET foo param bar1 param bar2 looking up param in the mapping will give you bar1 bar2",
          "hierarchy": "Snap Core",
          "module": "Snap.Core",
          "name": "Params",
          "package": "snap-core",
          "partial": "Params",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Core.html#t:Params"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eContains all of the information about an incoming HTTP request.\n\u003c/p\u003e",
          "module": "Snap.Core",
          "name": "Request",
          "package": "snap-core",
          "source": "src/Snap-Internal-Http-Types.html#Request",
          "type": "data"
        },
        "index": {
          "description": "Contains all of the information about an incoming HTTP request",
          "hierarchy": "Snap Core",
          "module": "Snap.Core",
          "name": "Request",
          "package": "snap-core",
          "partial": "Request",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Core.html#t:Request"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents an HTTP response.\n\u003c/p\u003e",
          "module": "Snap.Core",
          "name": "Response",
          "package": "snap-core",
          "source": "src/Snap-Internal-Http-Types.html#Response",
          "type": "data"
        },
        "index": {
          "description": "Represents an HTTP response",
          "hierarchy": "Snap Core",
          "module": "Snap.Core",
          "name": "Response",
          "package": "snap-core",
          "partial": "Response",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Core.html#t:Response"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Core",
          "name": "Snap",
          "package": "snap-core",
          "source": "src/Snap-Internal-Types.html#Snap",
          "type": "data"
        },
        "index": {
          "hierarchy": "Snap Core",
          "module": "Snap.Core",
          "name": "Snap",
          "package": "snap-core",
          "partial": "Snap",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Core.html#t:Snap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn existential wrapper for the 'Enumerator ByteString IO a' type\n\u003c/p\u003e",
          "module": "Snap.Core",
          "name": "SomeEnumerator",
          "package": "snap-core",
          "source": "src/Snap-Internal-Http-Types.html#SomeEnumerator",
          "type": "newtype"
        },
        "index": {
          "description": "An existential wrapper for the Enumerator ByteString IO type",
          "hierarchy": "Snap Core",
          "module": "Snap.Core",
          "name": "SomeEnumerator",
          "package": "snap-core",
          "partial": "Some Enumerator",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Core.html#t:SomeEnumerator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Snap.Core\",\"Snap.Internal.Http.Types\"]",
          "name": "CONNECT",
          "package": "snap-core",
          "signature": "CONNECT",
          "source": "src/Snap-Internal-Http-Types.html#Method",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/snap-core/docs/Snap-Core.html#v:CONNECT\",\"http://hackage.haskell.org/package/snap-core/docs/Snap-Internal-Http-Types.html#v:CONNECT\"]"
        },
        "index": {
          "hierarchy": "Snap Core",
          "module": "Snap.Core",
          "name": "CONNECT",
          "package": "snap-core",
          "partial": "CONNECT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Core.html#v:CONNECT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Snap.Core\",\"Snap.Internal.Http.Types\"]",
          "name": "Cookie",
          "package": "snap-core",
          "signature": "Cookie",
          "source": "src/Snap-Internal-Http-Types.html#Cookie",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/snap-core/docs/Snap-Core.html#v:Cookie\",\"http://hackage.haskell.org/package/snap-core/docs/Snap-Internal-Http-Types.html#v:Cookie\"]"
        },
        "index": {
          "hierarchy": "Snap Core",
          "module": "Snap.Core",
          "name": "Cookie",
          "package": "snap-core",
          "partial": "Cookie",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Core.html#v:Cookie"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Snap.Core\",\"Snap.Internal.Http.Types\"]",
          "name": "DELETE",
          "package": "snap-core",
          "signature": "DELETE",
          "source": "src/Snap-Internal-Http-Types.html#Method",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/snap-core/docs/Snap-Core.html#v:DELETE\",\"http://hackage.haskell.org/package/snap-core/docs/Snap-Internal-Http-Types.html#v:DELETE\"]"
        },
        "index": {
          "hierarchy": "Snap Core",
          "module": "Snap.Core",
          "name": "DELETE",
          "package": "snap-core",
          "partial": "DELETE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Core.html#v:DELETE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Snap.Core\",\"Snap.Internal.Http.Types\"]",
          "name": "GET",
          "package": "snap-core",
          "signature": "GET",
          "source": "src/Snap-Internal-Http-Types.html#Method",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/snap-core/docs/Snap-Core.html#v:GET\",\"http://hackage.haskell.org/package/snap-core/docs/Snap-Internal-Http-Types.html#v:GET\"]"
        },
        "index": {
          "hierarchy": "Snap Core",
          "module": "Snap.Core",
          "name": "GET",
          "package": "snap-core",
          "partial": "GET",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Core.html#v:GET"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Snap.Core\",\"Snap.Internal.Http.Types\"]",
          "name": "HEAD",
          "package": "snap-core",
          "signature": "HEAD",
          "source": "src/Snap-Internal-Http-Types.html#Method",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/snap-core/docs/Snap-Core.html#v:HEAD\",\"http://hackage.haskell.org/package/snap-core/docs/Snap-Internal-Http-Types.html#v:HEAD\"]"
        },
        "index": {
          "hierarchy": "Snap Core",
          "module": "Snap.Core",
          "name": "HEAD",
          "package": "snap-core",
          "partial": "HEAD",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Core.html#v:HEAD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Snap.Core\",\"Snap.Internal.Http.Types\"]",
          "name": "Method",
          "package": "snap-core",
          "signature": "Method ByteString",
          "source": "src/Snap-Internal-Http-Types.html#Method",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/snap-core/docs/Snap-Core.html#v:Method\",\"http://hackage.haskell.org/package/snap-core/docs/Snap-Internal-Http-Types.html#v:Method\"]"
        },
        "index": {
          "hierarchy": "Snap Core",
          "module": "Snap.Core",
          "name": "Method",
          "package": "snap-core",
          "partial": "Method",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Core.html#v:Method"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Core",
          "name": "NoHandlerException",
          "package": "snap-core",
          "signature": "NoHandlerException String",
          "source": "src/Snap-Internal-Types.html#NoHandlerException",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Core",
          "module": "Snap.Core",
          "name": "NoHandlerException",
          "package": "snap-core",
          "partial": "No Handler Exception",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Core.html#v:NoHandlerException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Snap.Core\",\"Snap.Internal.Http.Types\"]",
          "name": "OPTIONS",
          "package": "snap-core",
          "signature": "OPTIONS",
          "source": "src/Snap-Internal-Http-Types.html#Method",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/snap-core/docs/Snap-Core.html#v:OPTIONS\",\"http://hackage.haskell.org/package/snap-core/docs/Snap-Internal-Http-Types.html#v:OPTIONS\"]"
        },
        "index": {
          "hierarchy": "Snap Core",
          "module": "Snap.Core",
          "name": "OPTIONS",
          "package": "snap-core",
          "partial": "OPTIONS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Core.html#v:OPTIONS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Snap.Core\",\"Snap.Internal.Http.Types\"]",
          "name": "PATCH",
          "package": "snap-core",
          "signature": "PATCH",
          "source": "src/Snap-Internal-Http-Types.html#Method",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/snap-core/docs/Snap-Core.html#v:PATCH\",\"http://hackage.haskell.org/package/snap-core/docs/Snap-Internal-Http-Types.html#v:PATCH\"]"
        },
        "index": {
          "hierarchy": "Snap Core",
          "module": "Snap.Core",
          "name": "PATCH",
          "package": "snap-core",
          "partial": "PATCH",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Core.html#v:PATCH"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Snap.Core\",\"Snap.Internal.Http.Types\"]",
          "name": "POST",
          "package": "snap-core",
          "signature": "POST",
          "source": "src/Snap-Internal-Http-Types.html#Method",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/snap-core/docs/Snap-Core.html#v:POST\",\"http://hackage.haskell.org/package/snap-core/docs/Snap-Internal-Http-Types.html#v:POST\"]"
        },
        "index": {
          "hierarchy": "Snap Core",
          "module": "Snap.Core",
          "name": "POST",
          "package": "snap-core",
          "partial": "POST",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Core.html#v:POST"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Snap.Core\",\"Snap.Internal.Http.Types\"]",
          "name": "PUT",
          "package": "snap-core",
          "signature": "PUT",
          "source": "src/Snap-Internal-Http-Types.html#Method",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/snap-core/docs/Snap-Core.html#v:PUT\",\"http://hackage.haskell.org/package/snap-core/docs/Snap-Internal-Http-Types.html#v:PUT\"]"
        },
        "index": {
          "hierarchy": "Snap Core",
          "module": "Snap.Core",
          "name": "PUT",
          "package": "snap-core",
          "partial": "PUT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Core.html#v:PUT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Snap.Core\",\"Snap.Internal.Http.Types\"]",
          "name": "SomeEnumerator",
          "package": "snap-core",
          "signature": "SomeEnumerator (forall a.  Enumerator ByteString IO a)",
          "source": "src/Snap-Internal-Http-Types.html#SomeEnumerator",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/snap-core/docs/Snap-Core.html#v:SomeEnumerator\",\"http://hackage.haskell.org/package/snap-core/docs/Snap-Internal-Http-Types.html#v:SomeEnumerator\"]"
        },
        "index": {
          "hierarchy": "Snap Core",
          "module": "Snap.Core",
          "name": "SomeEnumerator",
          "package": "snap-core",
          "partial": "Some Enumerator",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Core.html#v:SomeEnumerator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Snap.Core\",\"Snap.Internal.Http.Types\"]",
          "name": "TRACE",
          "package": "snap-core",
          "signature": "TRACE",
          "source": "src/Snap-Internal-Http-Types.html#Method",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/snap-core/docs/Snap-Core.html#v:TRACE\",\"http://hackage.haskell.org/package/snap-core/docs/Snap-Internal-Http-Types.html#v:TRACE\"]"
        },
        "index": {
          "hierarchy": "Snap Core",
          "module": "Snap.Core",
          "name": "TRACE",
          "package": "snap-core",
          "partial": "TRACE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Core.html#v:TRACE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdds a header key-value-pair to the \u003ccode\u003e\u003ca\u003eHasHeaders\u003c/a\u003e\u003c/code\u003e datatype. If a header\n with the same name already exists, the new value is appended to the headers\n list.\n\u003c/p\u003e",
          "module": "[\"Snap.Core\",\"Snap.Internal.Http.Types\"]",
          "name": "addHeader",
          "package": "snap-core",
          "signature": "CI ByteString -\u003e ByteString -\u003e a -\u003e a",
          "source": "src/Snap-Internal-Http-Types.html#addHeader",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/snap-core/docs/Snap-Core.html#v:addHeader\",\"http://hackage.haskell.org/package/snap-core/docs/Snap-Internal-Http-Types.html#v:addHeader\"]"
        },
        "index": {
          "description": "Adds header key-value-pair to the HasHeaders datatype If header with the same name already exists the new value is appended to the headers list",
          "hierarchy": "Snap Core",
          "module": "Snap.Core",
          "name": "addHeader",
          "normalized": "CI ByteString-\u003eByteString-\u003ea-\u003ea",
          "package": "snap-core",
          "partial": "Header",
          "signature": "CI ByteString-\u003eByteString-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Core.html#v:addHeader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdds an HTTP \u003ccode\u003e\u003ca\u003eCookie\u003c/a\u003e\u003c/code\u003e to \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e headers.\n\u003c/p\u003e",
          "module": "[\"Snap.Core\",\"Snap.Internal.Http.Types\"]",
          "name": "addResponseCookie",
          "package": "snap-core",
          "signature": "Cookie-\u003e Response-\u003e Response",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/snap-core/docs/Snap-Core.html#v:addResponseCookie\",\"http://hackage.haskell.org/package/snap-core/docs/Snap-Internal-Http-Types.html#v:addResponseCookie\"]"
        },
        "index": {
          "description": "Adds an HTTP Cookie to Response headers",
          "hierarchy": "Snap Core",
          "module": "Snap.Core",
          "name": "addResponseCookie",
          "normalized": "Cookie-\u003eResponse-\u003eResponse",
          "package": "snap-core",
          "partial": "Response Cookie",
          "signature": "Cookie-\u003eResponse-\u003eResponse",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Core.html#v:addResponseCookie"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdds the output from the given enumerator to the \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e\n stored in the \u003ccode\u003e\u003ca\u003eSnap\u003c/a\u003e\u003c/code\u003e monad state.\n\u003c/p\u003e",
          "module": "Snap.Core",
          "name": "addToOutput",
          "package": "snap-core",
          "signature": "(forall a.  Enumerator Builder IO a)-\u003e m ()",
          "type": "function"
        },
        "index": {
          "description": "Adds the output from the given enumerator to the Response stored in the Snap monad state",
          "hierarchy": "Snap Core",
          "module": "Snap.Core",
          "name": "addToOutput",
          "normalized": "(a b Enumerator Builder IO c)-\u003ed()",
          "package": "snap-core",
          "partial": "To Output",
          "signature": "(forall a. Enumerator Builder IO a)-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Core.html#v:addToOutput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis function brackets a Snap action in resource acquisition and\n release. This is provided because MonadCatchIO's \u003ccode\u003e\u003ca\u003ebracket\u003c/a\u003e\u003c/code\u003e function\n doesn't work properly in the case of a short-circuit return from\n the action being bracketed.\n\u003c/p\u003e\u003cp\u003eIn order to prevent confusion regarding the effects of the\n aquisition and release actions on the Snap state, this function\n doesn't accept Snap actions for the acquire or release actions.\n\u003c/p\u003e\u003cp\u003eThis function will run the release action in all cases where the\n acquire action succeeded.  This includes the following behaviors\n from the bracketed Snap action.\n\u003c/p\u003e\u003col\u003e\u003cli\u003e Normal completion\n\u003c/li\u003e\u003cli\u003e Short-circuit completion, either from calling \u003ccode\u003e\u003ca\u003efail\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003efinishWith\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e An exception being thrown.\n\u003c/li\u003e\u003c/ol\u003e",
          "module": "Snap.Core",
          "name": "bracketSnap",
          "package": "snap-core",
          "signature": "IO a -\u003e (a -\u003e IO b) -\u003e (a -\u003e Snap c) -\u003e Snap c",
          "source": "src/Snap-Internal-Types.html#bracketSnap",
          "type": "function"
        },
        "index": {
          "description": "This function brackets Snap action in resource acquisition and release This is provided because MonadCatchIO bracket function doesn work properly in the case of short-circuit return from the action being bracketed In order to prevent confusion regarding the effects of the aquisition and release actions on the Snap state this function doesn accept Snap actions for the acquire or release actions This function will run the release action in all cases where the acquire action succeeded This includes the following behaviors from the bracketed Snap action Normal completion Short-circuit completion either from calling fail or finishWith An exception being thrown",
          "hierarchy": "Snap Core",
          "module": "Snap.Core",
          "name": "bracketSnap",
          "normalized": "IO a-\u003e(a-\u003eIO b)-\u003e(a-\u003eSnap c)-\u003eSnap c",
          "package": "snap-core",
          "partial": "Snap",
          "signature": "IO a-\u003e(a-\u003eIO b)-\u003e(a-\u003eSnap c)-\u003eSnap c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Core.html#v:bracketSnap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Snap.Core\",\"Snap.Internal.Parsing\"]",
          "name": "buildUrlEncoded",
          "package": "snap-core",
          "signature": "Map ByteString [ByteString] -\u003e Builder",
          "source": "src/Snap-Internal-Parsing.html#buildUrlEncoded",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/snap-core/docs/Snap-Core.html#v:buildUrlEncoded\",\"http://hackage.haskell.org/package/snap-core/docs/Snap-Internal-Parsing.html#v:buildUrlEncoded\"]"
        },
        "index": {
          "hierarchy": "Snap Core",
          "module": "Snap.Core",
          "name": "buildUrlEncoded",
          "normalized": "Map ByteString[ByteString]-\u003eBuilder",
          "package": "snap-core",
          "partial": "Url Encoded",
          "signature": "Map ByteString[ByteString]-\u003eBuilder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Core.html#v:buildUrlEncoded"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCapture the flow of control in case a handler calls \u003ccode\u003e\u003ca\u003efinishWith\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eWARNING\u003c/em\u003e: in the event of a call to \u003ccode\u003e\u003ca\u003etransformRequestBody\u003c/a\u003e\u003c/code\u003e it is possible\n to violate HTTP protocol safety when using this function. If you call\n \u003ccode\u003e\u003ca\u003ecatchFinishWith\u003c/a\u003e\u003c/code\u003e it is suggested that you do not modify the body of the\n \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e which was passed to the \u003ccode\u003e\u003ca\u003efinishWith\u003c/a\u003e\u003c/code\u003e call.\n\u003c/p\u003e",
          "module": "Snap.Core",
          "name": "catchFinishWith",
          "package": "snap-core",
          "signature": "Snap a -\u003e Snap (Either Response a)",
          "source": "src/Snap-Internal-Types.html#catchFinishWith",
          "type": "function"
        },
        "index": {
          "description": "Capture the flow of control in case handler calls finishWith WARNING in the event of call to transformRequestBody it is possible to violate HTTP protocol safety when using this function If you call catchFinishWith it is suggested that you do not modify the body of the Response which was passed to the finishWith call",
          "hierarchy": "Snap Core",
          "module": "Snap.Core",
          "name": "catchFinishWith",
          "normalized": "Snap a-\u003eSnap(Either Response a)",
          "package": "snap-core",
          "partial": "Finish With",
          "signature": "Snap a-\u003eSnap(Either Response a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Core.html#v:catchFinishWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemoves any \u003ccode\u003eContent-Length\u003c/code\u003e set in the \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Snap.Core\",\"Snap.Internal.Http.Types\"]",
          "name": "clearContentLength",
          "package": "snap-core",
          "signature": "Response -\u003e Response",
          "source": "src/Snap-Internal-Http-Types.html#clearContentLength",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/snap-core/docs/Snap-Core.html#v:clearContentLength\",\"http://hackage.haskell.org/package/snap-core/docs/Snap-Internal-Http-Types.html#v:clearContentLength\"]"
        },
        "index": {
          "description": "Removes any Content-Length set in the Response",
          "hierarchy": "Snap Core",
          "module": "Snap.Core",
          "name": "clearContentLength",
          "normalized": "Response-\u003eResponse",
          "package": "snap-core",
          "partial": "Content Length",
          "signature": "Response-\u003eResponse",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Core.html#v:clearContentLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe cookie's \"domain\" value, if it has one.\n\u003c/p\u003e",
          "module": "[\"Snap.Core\",\"Snap.Internal.Http.Types\"]",
          "name": "cookieDomain",
          "package": "snap-core",
          "signature": "(Maybe ByteString)",
          "source": "src/Snap-Internal-Http-Types.html#Cookie",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/snap-core/docs/Snap-Core.html#v:cookieDomain\",\"http://hackage.haskell.org/package/snap-core/docs/Snap-Internal-Http-Types.html#v:cookieDomain\"]"
        },
        "index": {
          "description": "The cookie domain value if it has one",
          "hierarchy": "Snap Core",
          "module": "Snap.Core",
          "name": "cookieDomain",
          "package": "snap-core",
          "partial": "Domain",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Core.html#v:cookieDomain"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe cookie's expiration value, if it has one.\n\u003c/p\u003e",
          "module": "[\"Snap.Core\",\"Snap.Internal.Http.Types\"]",
          "name": "cookieExpires",
          "package": "snap-core",
          "signature": "(Maybe UTCTime)",
          "source": "src/Snap-Internal-Http-Types.html#Cookie",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/snap-core/docs/Snap-Core.html#v:cookieExpires\",\"http://hackage.haskell.org/package/snap-core/docs/Snap-Internal-Http-Types.html#v:cookieExpires\"]"
        },
        "index": {
          "description": "The cookie expiration value if it has one",
          "hierarchy": "Snap Core",
          "module": "Snap.Core",
          "name": "cookieExpires",
          "package": "snap-core",
          "partial": "Expires",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Core.html#v:cookieExpires"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHttpOnly?\n\u003c/p\u003e",
          "module": "[\"Snap.Core\",\"Snap.Internal.Http.Types\"]",
          "name": "cookieHttpOnly",
          "package": "snap-core",
          "signature": "Bool",
          "source": "src/Snap-Internal-Http-Types.html#Cookie",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/snap-core/docs/Snap-Core.html#v:cookieHttpOnly\",\"http://hackage.haskell.org/package/snap-core/docs/Snap-Internal-Http-Types.html#v:cookieHttpOnly\"]"
        },
        "index": {
          "description": "HttpOnly",
          "hierarchy": "Snap Core",
          "module": "Snap.Core",
          "name": "cookieHttpOnly",
          "package": "snap-core",
          "partial": "Http Only",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Core.html#v:cookieHttpOnly"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe name of the cookie.\n\u003c/p\u003e",
          "module": "[\"Snap.Core\",\"Snap.Internal.Http.Types\"]",
          "name": "cookieName",
          "package": "snap-core",
          "signature": "ByteString",
          "source": "src/Snap-Internal-Http-Types.html#Cookie",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/snap-core/docs/Snap-Core.html#v:cookieName\",\"http://hackage.haskell.org/package/snap-core/docs/Snap-Internal-Http-Types.html#v:cookieName\"]"
        },
        "index": {
          "description": "The name of the cookie",
          "hierarchy": "Snap Core",
          "module": "Snap.Core",
          "name": "cookieName",
          "package": "snap-core",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Core.html#v:cookieName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe cookie path.\n\u003c/p\u003e",
          "module": "[\"Snap.Core\",\"Snap.Internal.Http.Types\"]",
          "name": "cookiePath",
          "package": "snap-core",
          "signature": "(Maybe ByteString)",
          "source": "src/Snap-Internal-Http-Types.html#Cookie",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/snap-core/docs/Snap-Core.html#v:cookiePath\",\"http://hackage.haskell.org/package/snap-core/docs/Snap-Internal-Http-Types.html#v:cookiePath\"]"
        },
        "index": {
          "description": "The cookie path",
          "hierarchy": "Snap Core",
          "module": "Snap.Core",
          "name": "cookiePath",
          "package": "snap-core",
          "partial": "Path",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Core.html#v:cookiePath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTag as secure cookie?\n\u003c/p\u003e",
          "module": "[\"Snap.Core\",\"Snap.Internal.Http.Types\"]",
          "name": "cookieSecure",
          "package": "snap-core",
          "signature": "Bool",
          "source": "src/Snap-Internal-Http-Types.html#Cookie",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/snap-core/docs/Snap-Core.html#v:cookieSecure\",\"http://hackage.haskell.org/package/snap-core/docs/Snap-Internal-Http-Types.html#v:cookieSecure\"]"
        },
        "index": {
          "description": "Tag as secure cookie",
          "hierarchy": "Snap Core",
          "module": "Snap.Core",
          "name": "cookieSecure",
          "package": "snap-core",
          "partial": "Secure",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Core.html#v:cookieSecure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe cookie's string value.\n\u003c/p\u003e",
          "module": "[\"Snap.Core\",\"Snap.Internal.Http.Types\"]",
          "name": "cookieValue",
          "package": "snap-core",
          "signature": "ByteString",
          "source": "src/Snap-Internal-Http-Types.html#Cookie",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/snap-core/docs/Snap-Core.html#v:cookieValue\",\"http://hackage.haskell.org/package/snap-core/docs/Snap-Internal-Http-Types.html#v:cookieValue\"]"
        },
        "index": {
          "description": "The cookie string value",
          "hierarchy": "Snap Core",
          "module": "Snap.Core",
          "name": "cookieValue",
          "package": "snap-core",
          "partial": "Value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Core.html#v:cookieValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClears a header value from a \u003ccode\u003e\u003ca\u003eHasHeaders\u003c/a\u003e\u003c/code\u003e datatype.\n\u003c/p\u003e",
          "module": "[\"Snap.Core\",\"Snap.Internal.Http.Types\"]",
          "name": "deleteHeader",
          "package": "snap-core",
          "signature": "CI ByteString -\u003e a -\u003e a",
          "source": "src/Snap-Internal-Http-Types.html#deleteHeader",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/snap-core/docs/Snap-Core.html#v:deleteHeader\",\"http://hackage.haskell.org/package/snap-core/docs/Snap-Internal-Http-Types.html#v:deleteHeader\"]"
        },
        "index": {
          "description": "Clears header value from HasHeaders datatype",
          "hierarchy": "Snap Core",
          "module": "Snap.Core",
          "name": "deleteHeader",
          "normalized": "CI ByteString-\u003ea-\u003ea",
          "package": "snap-core",
          "partial": "Header",
          "signature": "CI ByteString-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Core.html#v:deleteHeader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDeletes an HTTP \u003ccode\u003e\u003ca\u003eCookie\u003c/a\u003e\u003c/code\u003e from the \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e headers. Please note\n this does not necessarily erase the cookie from the client browser.\n\u003c/p\u003e",
          "module": "[\"Snap.Core\",\"Snap.Internal.Http.Types\"]",
          "name": "deleteResponseCookie",
          "package": "snap-core",
          "signature": "ByteString-\u003e Response-\u003e Response",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/snap-core/docs/Snap-Core.html#v:deleteResponseCookie\",\"http://hackage.haskell.org/package/snap-core/docs/Snap-Internal-Http-Types.html#v:deleteResponseCookie\"]"
        },
        "index": {
          "description": "Deletes an HTTP Cookie from the Response headers Please note this does not necessarily erase the cookie from the client browser",
          "hierarchy": "Snap Core",
          "module": "Snap.Core",
          "name": "deleteResponseCookie",
          "normalized": "ByteString-\u003eResponse-\u003eResponse",
          "package": "snap-core",
          "partial": "Response Cookie",
          "signature": "ByteString-\u003eResponse-\u003eResponse",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Core.html#v:deleteResponseCookie"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRuns a \u003ccode\u003e\u003ca\u003eSnap\u003c/a\u003e\u003c/code\u003e monad action only when the \u003ccode\u003e\u003ca\u003erqPathInfo\u003c/a\u003e\u003c/code\u003e of the request\n starts with the given path. For example,\n\u003c/p\u003e\u003cpre\u003e dir \"foo\" handler\n\u003c/pre\u003e\u003cp\u003eWill fail if \u003ccode\u003e\u003ca\u003erqPathInfo\u003c/a\u003e\u003c/code\u003e is not \"\u003ccode\u003e/foo\u003c/code\u003e\" or \"\u003ccode\u003e/foo/...\u003c/code\u003e\", and will\n add \u003ccode\u003e\"foo/\"\u003c/code\u003e to the handler's local \u003ccode\u003e\u003ca\u003erqContextPath\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Snap.Core",
          "name": "dir",
          "package": "snap-core",
          "signature": "ByteString-\u003e m a-\u003e m a",
          "type": "function"
        },
        "index": {
          "description": "Runs Snap monad action only when the rqPathInfo of the request starts with the given path For example dir foo handler Will fail if rqPathInfo is not foo or foo and will add foo to the handler local rqContextPath",
          "hierarchy": "Snap Core",
          "module": "Snap.Core",
          "name": "dir",
          "normalized": "ByteString-\u003ea b-\u003ea b",
          "package": "snap-core",
          "signature": "ByteString-\u003em a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Core.html#v:dir"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn empty \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Snap.Core\",\"Snap.Internal.Http.Types\"]",
          "name": "emptyResponse",
          "package": "snap-core",
          "signature": "Response",
          "source": "src/Snap-Internal-Http-Types.html#emptyResponse",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/snap-core/docs/Snap-Core.html#v:emptyResponse\",\"http://hackage.haskell.org/package/snap-core/docs/Snap-Internal-Http-Types.html#v:emptyResponse\"]"
        },
        "index": {
          "description": "An empty Response",
          "hierarchy": "Snap Core",
          "module": "Snap.Core",
          "name": "emptyResponse",
          "package": "snap-core",
          "partial": "Response",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Core.html#v:emptyResponse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTerminate the HTTP session and hand control to some external handler,\n escaping all further HTTP traffic.\n\u003c/p\u003e\u003cp\u003eThe external handler takes two arguments: a function to modify the thread's\n timeout, and a write end to the socket.\n\u003c/p\u003e",
          "module": "Snap.Core",
          "name": "escapeHttp",
          "package": "snap-core",
          "signature": "EscapeHttpHandler -\u003e m ()",
          "source": "src/Snap-Internal-Types.html#escapeHttp",
          "type": "function"
        },
        "index": {
          "description": "Terminate the HTTP session and hand control to some external handler escaping all further HTTP traffic The external handler takes two arguments function to modify the thread timeout and write end to the socket",
          "hierarchy": "Snap Core",
          "module": "Snap.Core",
          "name": "escapeHttp",
          "normalized": "EscapeHttpHandler-\u003ea()",
          "package": "snap-core",
          "partial": "Http",
          "signature": "EscapeHttpHandler-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Core.html#v:escapeHttp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExpire the given \u003ccode\u003e\u003ca\u003eCookie\u003c/a\u003e\u003c/code\u003e in client's browser.\n\u003c/p\u003e",
          "module": "Snap.Core",
          "name": "expireCookie",
          "package": "snap-core",
          "signature": "ByteString-\u003e Maybe ByteString-\u003e m ()",
          "type": "function"
        },
        "index": {
          "description": "Expire the given Cookie in client browser",
          "hierarchy": "Snap Core",
          "module": "Snap.Core",
          "name": "expireCookie",
          "normalized": "ByteString-\u003eMaybe ByteString-\u003ea()",
          "package": "snap-core",
          "partial": "Cookie",
          "signature": "ByteString-\u003eMaybe ByteString-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Core.html#v:expireCookie"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCauses the handler thread to be killed at least \u003ccode\u003en\u003c/code\u003e seconds from now.\n\u003c/p\u003e",
          "module": "Snap.Core",
          "name": "extendTimeout",
          "package": "snap-core",
          "signature": "Int -\u003e m ()",
          "source": "src/Snap-Internal-Types.html#extendTimeout",
          "type": "function"
        },
        "index": {
          "description": "Causes the handler thread to be killed at least seconds from now",
          "hierarchy": "Snap Core",
          "module": "Snap.Core",
          "name": "extendTimeout",
          "normalized": "Int-\u003ea()",
          "package": "snap-core",
          "partial": "Timeout",
          "signature": "Int-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Core.html#v:extendTimeout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShort-circuits a \u003ccode\u003e\u003ca\u003eSnap\u003c/a\u003e\u003c/code\u003e monad action early, storing the given\n \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e value in its state.\n\u003c/p\u003e",
          "module": "Snap.Core",
          "name": "finishWith",
          "package": "snap-core",
          "signature": "Response -\u003e m a",
          "source": "src/Snap-Internal-Types.html#finishWith",
          "type": "function"
        },
        "index": {
          "description": "Short-circuits Snap monad action early storing the given Response value in its state",
          "hierarchy": "Snap Core",
          "module": "Snap.Core",
          "name": "finishWith",
          "normalized": "Response-\u003ea b",
          "package": "snap-core",
          "partial": "With",
          "signature": "Response-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Core.html#v:finishWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts a \u003ccode\u003e\u003ca\u003eCTime\u003c/a\u003e\u003c/code\u003e into an HTTP timestamp.\n\u003c/p\u003e",
          "module": "[\"Snap.Core\",\"Snap.Internal.Http.Types\"]",
          "name": "formatHttpTime",
          "package": "snap-core",
          "signature": "CTime -\u003e IO ByteString",
          "source": "src/Snap-Internal-Http-Types.html#formatHttpTime",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/snap-core/docs/Snap-Core.html#v:formatHttpTime\",\"http://hackage.haskell.org/package/snap-core/docs/Snap-Internal-Http-Types.html#v:formatHttpTime\"]"
        },
        "index": {
          "description": "Converts CTime into an HTTP timestamp",
          "hierarchy": "Snap Core",
          "module": "Snap.Core",
          "name": "formatHttpTime",
          "normalized": "CTime-\u003eIO ByteString",
          "package": "snap-core",
          "partial": "Http Time",
          "signature": "CTime-\u003eIO ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Core.html#v:formatHttpTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe buffering mode controls whether Snap will buffer the output or not.\n You may wish to disable buffering when using Comet-like techniques which\n rely on the immediate sending of output data in order to maintain\n interactive semantics.\n\u003c/p\u003e",
          "module": "[\"Snap.Core\",\"Snap.Internal.Http.Types\"]",
          "name": "getBufferingMode",
          "package": "snap-core",
          "signature": "Response -\u003e Bool",
          "source": "src/Snap-Internal-Http-Types.html#getBufferingMode",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/snap-core/docs/Snap-Core.html#v:getBufferingMode\",\"http://hackage.haskell.org/package/snap-core/docs/Snap-Internal-Http-Types.html#v:getBufferingMode\"]"
        },
        "index": {
          "description": "The buffering mode controls whether Snap will buffer the output or not You may wish to disable buffering when using Comet-like techniques which rely on the immediate sending of output data in order to maintain interactive semantics",
          "hierarchy": "Snap Core",
          "module": "Snap.Core",
          "name": "getBufferingMode",
          "normalized": "Response-\u003eBool",
          "package": "snap-core",
          "partial": "Buffering Mode",
          "signature": "Response-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Core.html#v:getBufferingMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGets the HTTP \u003ccode\u003e\u003ca\u003eCookie\u003c/a\u003e\u003c/code\u003e with the specified name.\n\u003c/p\u003e",
          "module": "Snap.Core",
          "name": "getCookie",
          "package": "snap-core",
          "signature": "ByteString -\u003e m (Maybe Cookie)",
          "source": "src/Snap-Internal-Types.html#getCookie",
          "type": "function"
        },
        "index": {
          "description": "Gets the HTTP Cookie with the specified name",
          "hierarchy": "Snap Core",
          "module": "Snap.Core",
          "name": "getCookie",
          "normalized": "ByteString-\u003ea(Maybe Cookie)",
          "package": "snap-core",
          "partial": "Cookie",
          "signature": "ByteString-\u003em(Maybe Cookie)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Core.html#v:getCookie"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGets a header value out of a \u003ccode\u003e\u003ca\u003eHasHeaders\u003c/a\u003e\u003c/code\u003e datatype. If many headers came\n in with the same name, they will be catenated together.\n\u003c/p\u003e",
          "module": "[\"Snap.Core\",\"Snap.Internal.Http.Types\"]",
          "name": "getHeader",
          "package": "snap-core",
          "signature": "CI ByteString -\u003e a -\u003e Maybe ByteString",
          "source": "src/Snap-Internal-Http-Types.html#getHeader",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/snap-core/docs/Snap-Core.html#v:getHeader\",\"http://hackage.haskell.org/package/snap-core/docs/Snap-Internal-Http-Types.html#v:getHeader\"]"
        },
        "index": {
          "description": "Gets header value out of HasHeaders datatype If many headers came in with the same name they will be catenated together",
          "hierarchy": "Snap Core",
          "module": "Snap.Core",
          "name": "getHeader",
          "normalized": "CI ByteString-\u003ea-\u003eMaybe ByteString",
          "package": "snap-core",
          "partial": "Header",
          "signature": "CI ByteString-\u003ea-\u003eMaybe ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Core.html#v:getHeader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGets all of the values for a given header.\n\u003c/p\u003e",
          "module": "[\"Snap.Core\",\"Snap.Internal.Http.Types\"]",
          "name": "getHeaders",
          "package": "snap-core",
          "signature": "CI ByteString -\u003e a -\u003e Maybe [ByteString]",
          "source": "src/Snap-Internal-Http-Types.html#getHeaders",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/snap-core/docs/Snap-Core.html#v:getHeaders\",\"http://hackage.haskell.org/package/snap-core/docs/Snap-Internal-Http-Types.html#v:getHeaders\"]"
        },
        "index": {
          "description": "Gets all of the values for given header",
          "hierarchy": "Snap Core",
          "module": "Snap.Core",
          "name": "getHeaders",
          "normalized": "CI ByteString-\u003ea-\u003eMaybe[ByteString]",
          "package": "snap-core",
          "partial": "Headers",
          "signature": "CI ByteString-\u003ea-\u003eMaybe[ByteString]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Core.html#v:getHeaders"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee \u003ccode\u003e\u003ca\u003erqParam\u003c/a\u003e\u003c/code\u003e. Looks up a value for the given named parameter in the\n \u003ccode\u003e\u003ca\u003eRequest\u003c/a\u003e\u003c/code\u003e. If more than one value was entered for the given parameter name,\n \u003ccode\u003e\u003ca\u003egetParam\u003c/a\u003e\u003c/code\u003e gloms the values together with:\n\u003c/p\u003e\u003cpre\u003e    \u003ccode\u003e\u003ca\u003eintercalate\u003c/a\u003e\u003c/code\u003e \" \"\u003c/pre\u003e",
          "module": "Snap.Core",
          "name": "getParam",
          "package": "snap-core",
          "signature": "ByteString-\u003e m (Maybe ByteString)",
          "type": "function"
        },
        "index": {
          "description": "See rqParam Looks up value for the given named parameter in the Request If more than one value was entered for the given parameter name getParam gloms the values together with intercalate",
          "hierarchy": "Snap Core",
          "module": "Snap.Core",
          "name": "getParam",
          "normalized": "ByteString-\u003ea(Maybe ByteString)",
          "package": "snap-core",
          "partial": "Param",
          "signature": "ByteString-\u003em(Maybe ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Core.html#v:getParam"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee \u003ccode\u003e\u003ca\u003erqParams\u003c/a\u003e\u003c/code\u003e. Convenience function to return \u003ccode\u003e\u003ca\u003eParams\u003c/a\u003e\u003c/code\u003e from the\n \u003ccode\u003e\u003ca\u003eRequest\u003c/a\u003e\u003c/code\u003e inside of a \u003ccode\u003e\u003ca\u003eMonadSnap\u003c/a\u003e\u003c/code\u003e instance.\n\u003c/p\u003e",
          "module": "Snap.Core",
          "name": "getParams",
          "package": "snap-core",
          "signature": "m Params",
          "source": "src/Snap-Internal-Types.html#getParams",
          "type": "function"
        },
        "index": {
          "description": "See rqParams Convenience function to return Params from the Request inside of MonadSnap instance",
          "hierarchy": "Snap Core",
          "module": "Snap.Core",
          "name": "getParams",
          "package": "snap-core",
          "partial": "Params",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Core.html#v:getParams"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee \u003ccode\u003e\u003ca\u003erqPostParam\u003c/a\u003e\u003c/code\u003e. Looks up a value for the given named parameter in the\n POST form parameters mapping in \u003ccode\u003e\u003ca\u003eRequest\u003c/a\u003e\u003c/code\u003e. If more than one value was\n entered for the given parameter name, \u003ccode\u003e\u003ca\u003egetPostParam\u003c/a\u003e\u003c/code\u003e gloms the values\n together with:\n\u003c/p\u003e\u003cpre\u003e    \u003ccode\u003e\u003ca\u003eintercalate\u003c/a\u003e\u003c/code\u003e \" \"\u003c/pre\u003e",
          "module": "Snap.Core",
          "name": "getPostParam",
          "package": "snap-core",
          "signature": "ByteString-\u003e m (Maybe ByteString)",
          "type": "function"
        },
        "index": {
          "description": "See rqPostParam Looks up value for the given named parameter in the POST form parameters mapping in Request If more than one value was entered for the given parameter name getPostParam gloms the values together with intercalate",
          "hierarchy": "Snap Core",
          "module": "Snap.Core",
          "name": "getPostParam",
          "normalized": "ByteString-\u003ea(Maybe ByteString)",
          "package": "snap-core",
          "partial": "Post Param",
          "signature": "ByteString-\u003em(Maybe ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Core.html#v:getPostParam"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee \u003ccode\u003e\u003ca\u003erqParams\u003c/a\u003e\u003c/code\u003e. Convenience function to return \u003ccode\u003e\u003ca\u003eParams\u003c/a\u003e\u003c/code\u003e from the\n \u003ccode\u003e\u003ca\u003eRequest\u003c/a\u003e\u003c/code\u003e inside of a \u003ccode\u003e\u003ca\u003eMonadSnap\u003c/a\u003e\u003c/code\u003e instance.\n\u003c/p\u003e",
          "module": "Snap.Core",
          "name": "getPostParams",
          "package": "snap-core",
          "signature": "m Params",
          "source": "src/Snap-Internal-Types.html#getPostParams",
          "type": "function"
        },
        "index": {
          "description": "See rqParams Convenience function to return Params from the Request inside of MonadSnap instance",
          "hierarchy": "Snap Core",
          "module": "Snap.Core",
          "name": "getPostParams",
          "package": "snap-core",
          "partial": "Post Params",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Core.html#v:getPostParams"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee \u003ccode\u003e\u003ca\u003erqQueryParam\u003c/a\u003e\u003c/code\u003e. Looks up a value for the given named parameter in the\n query string parameters mapping in \u003ccode\u003e\u003ca\u003eRequest\u003c/a\u003e\u003c/code\u003e. If more than one value was\n entered for the given parameter name, \u003ccode\u003e\u003ca\u003egetQueryParam\u003c/a\u003e\u003c/code\u003e gloms the values\n together with:\n\u003c/p\u003e\u003cpre\u003e    \u003ccode\u003e\u003ca\u003eintercalate\u003c/a\u003e\u003c/code\u003e \" \"\u003c/pre\u003e",
          "module": "Snap.Core",
          "name": "getQueryParam",
          "package": "snap-core",
          "signature": "ByteString-\u003e m (Maybe ByteString)",
          "type": "function"
        },
        "index": {
          "description": "See rqQueryParam Looks up value for the given named parameter in the query string parameters mapping in Request If more than one value was entered for the given parameter name getQueryParam gloms the values together with intercalate",
          "hierarchy": "Snap Core",
          "module": "Snap.Core",
          "name": "getQueryParam",
          "normalized": "ByteString-\u003ea(Maybe ByteString)",
          "package": "snap-core",
          "partial": "Query Param",
          "signature": "ByteString-\u003em(Maybe ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Core.html#v:getQueryParam"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee \u003ccode\u003e\u003ca\u003erqParams\u003c/a\u003e\u003c/code\u003e. Convenience function to return \u003ccode\u003e\u003ca\u003eParams\u003c/a\u003e\u003c/code\u003e from the\n \u003ccode\u003e\u003ca\u003eRequest\u003c/a\u003e\u003c/code\u003e inside of a \u003ccode\u003e\u003ca\u003eMonadSnap\u003c/a\u003e\u003c/code\u003e instance.\n\u003c/p\u003e",
          "module": "Snap.Core",
          "name": "getQueryParams",
          "package": "snap-core",
          "signature": "m Params",
          "source": "src/Snap-Internal-Types.html#getQueryParams",
          "type": "function"
        },
        "index": {
          "description": "See rqParams Convenience function to return Params from the Request inside of MonadSnap instance",
          "hierarchy": "Snap Core",
          "module": "Snap.Core",
          "name": "getQueryParams",
          "package": "snap-core",
          "partial": "Query Params",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Core.html#v:getQueryParams"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGrabs the \u003ccode\u003e\u003ca\u003eRequest\u003c/a\u003e\u003c/code\u003e object out of the \u003ccode\u003e\u003ca\u003eSnap\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e",
          "module": "Snap.Core",
          "name": "getRequest",
          "package": "snap-core",
          "signature": "m Request",
          "source": "src/Snap-Internal-Types.html#getRequest",
          "type": "function"
        },
        "index": {
          "description": "Grabs the Request object out of the Snap monad",
          "hierarchy": "Snap Core",
          "module": "Snap.Core",
          "name": "getRequest",
          "package": "snap-core",
          "partial": "Request",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Core.html#v:getRequest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: As of 0.6, please use \u003ccode\u003e\u003ca\u003ereadRequestBody\u003c/a\u003e\u003c/code\u003e instead\n\u003c/p\u003e\u003c/div\u003e\u003cp\u003eReturns the request body as a lazy bytestring.\n\u003c/p\u003e\u003cp\u003eThis function is deprecated as of 0.6; it places no limits on the size of\n the request being read, and as such, if used, can result in a\n denial-of-service attack on your server. Please use \u003ccode\u003e\u003ca\u003ereadRequestBody\u003c/a\u003e\u003c/code\u003e\n instead.\n\u003c/p\u003e",
          "module": "Snap.Core",
          "name": "getRequestBody",
          "package": "snap-core",
          "signature": "m ByteString",
          "source": "src/Snap-Internal-Types.html#getRequestBody",
          "type": "function"
        },
        "index": {
          "description": "Deprecated As of please use readRequestBody instead Returns the request body as lazy bytestring This function is deprecated as of it places no limits on the size of the request being read and as such if used can result in denial-of-service attack on your server Please use readRequestBody instead",
          "hierarchy": "Snap Core",
          "module": "Snap.Core",
          "name": "getRequestBody",
          "package": "snap-core",
          "partial": "Request Body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Core.html#v:getRequestBody"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGrabs the \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e object out of the \u003ccode\u003e\u003ca\u003eSnap\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e",
          "module": "Snap.Core",
          "name": "getResponse",
          "package": "snap-core",
          "signature": "m Response",
          "source": "src/Snap-Internal-Types.html#getResponse",
          "type": "function"
        },
        "index": {
          "description": "Grabs the Response object out of the Snap monad",
          "hierarchy": "Snap Core",
          "module": "Snap.Core",
          "name": "getResponse",
          "package": "snap-core",
          "partial": "Response",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Core.html#v:getResponse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGets an HTTP \u003ccode\u003e\u003ca\u003eCookie\u003c/a\u003e\u003c/code\u003e with the given name from \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e headers.\n\u003c/p\u003e",
          "module": "[\"Snap.Core\",\"Snap.Internal.Http.Types\"]",
          "name": "getResponseCookie",
          "package": "snap-core",
          "signature": "ByteString-\u003e Response-\u003e Maybe Cookie",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/snap-core/docs/Snap-Core.html#v:getResponseCookie\",\"http://hackage.haskell.org/package/snap-core/docs/Snap-Internal-Http-Types.html#v:getResponseCookie\"]"
        },
        "index": {
          "description": "Gets an HTTP Cookie with the given name from Response headers",
          "hierarchy": "Snap Core",
          "module": "Snap.Core",
          "name": "getResponseCookie",
          "normalized": "ByteString-\u003eResponse-\u003eMaybe Cookie",
          "package": "snap-core",
          "partial": "Response Cookie",
          "signature": "ByteString-\u003eResponse-\u003eMaybe Cookie",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Core.html#v:getResponseCookie"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns a list of \u003ccode\u003e\u003ca\u003eCookie\u003c/a\u003e\u003c/code\u003es present in \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "[\"Snap.Core\",\"Snap.Internal.Http.Types\"]",
          "name": "getResponseCookies",
          "package": "snap-core",
          "signature": "Response-\u003e [Cookie]",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/snap-core/docs/Snap-Core.html#v:getResponseCookies\",\"http://hackage.haskell.org/package/snap-core/docs/Snap-Internal-Http-Types.html#v:getResponseCookies\"]"
        },
        "index": {
          "description": "Returns list of Cookie present in Response",
          "hierarchy": "Snap Core",
          "module": "Snap.Core",
          "name": "getResponseCookies",
          "normalized": "Response-\u003e[Cookie]",
          "package": "snap-core",
          "partial": "Response Cookies",
          "signature": "Response-\u003e[Cookie]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Core.html#v:getResponseCookies"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: use getTimeoutModifier instead. Since 0.8.\n\u003c/p\u003e\u003c/div\u003e\u003cp\u003eReturns an \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e action which you can use to set the handling thread's\n timeout value.\n\u003c/p\u003e",
          "module": "Snap.Core",
          "name": "getTimeoutAction",
          "package": "snap-core",
          "signature": "m (Int -\u003e IO ())",
          "source": "src/Snap-Internal-Types.html#getTimeoutAction",
          "type": "function"
        },
        "index": {
          "description": "Deprecated use getTimeoutModifier instead Since Returns an IO action which you can use to set the handling thread timeout value",
          "hierarchy": "Snap Core",
          "module": "Snap.Core",
          "name": "getTimeoutAction",
          "normalized": "a(Int-\u003eIO())",
          "package": "snap-core",
          "partial": "Timeout Action",
          "signature": "m(Int-\u003eIO())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Core.html#v:getTimeoutAction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns an \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e action which you can use to modify the timeout value.\n\u003c/p\u003e",
          "module": "Snap.Core",
          "name": "getTimeoutModifier",
          "package": "snap-core",
          "signature": "m ((Int -\u003e Int) -\u003e IO ())",
          "source": "src/Snap-Internal-Types.html#getTimeoutModifier",
          "type": "function"
        },
        "index": {
          "description": "Returns an IO action which you can use to modify the timeout value",
          "hierarchy": "Snap Core",
          "module": "Snap.Core",
          "name": "getTimeoutModifier",
          "normalized": "a((Int-\u003eInt)-\u003eIO())",
          "package": "snap-core",
          "partial": "Timeout Modifier",
          "signature": "m((Int-\u003eInt)-\u003eIO())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Core.html#v:getTimeoutModifier"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGrabs something out of the \u003ccode\u003e\u003ca\u003eRequest\u003c/a\u003e\u003c/code\u003e object, using the given projection\n function. See \u003ccode\u003e\u003ca\u003egets\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Snap.Core",
          "name": "getsRequest",
          "package": "snap-core",
          "signature": "(Request -\u003e a) -\u003e m a",
          "source": "src/Snap-Internal-Types.html#getsRequest",
          "type": "function"
        },
        "index": {
          "description": "Grabs something out of the Request object using the given projection function See gets",
          "hierarchy": "Snap Core",
          "module": "Snap.Core",
          "name": "getsRequest",
          "normalized": "(Request-\u003ea)-\u003eb a",
          "package": "snap-core",
          "partial": "Request",
          "signature": "(Request-\u003ea)-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Core.html#v:getsRequest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGrabs something out of the \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e object, using the given projection\n function. See \u003ccode\u003e\u003ca\u003egets\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Snap.Core",
          "name": "getsResponse",
          "package": "snap-core",
          "signature": "(Response -\u003e a) -\u003e m a",
          "source": "src/Snap-Internal-Types.html#getsResponse",
          "type": "function"
        },
        "index": {
          "description": "Grabs something out of the Response object using the given projection function See gets",
          "hierarchy": "Snap Core",
          "module": "Snap.Core",
          "name": "getsResponse",
          "normalized": "(Response-\u003ea)-\u003eb a",
          "package": "snap-core",
          "partial": "Response",
          "signature": "(Response-\u003ea)-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Core.html#v:getsResponse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrieve the headers from a datatype that has headers.\n\u003c/p\u003e",
          "module": "Snap.Core",
          "name": "headers",
          "package": "snap-core",
          "signature": "a -\u003e Headers",
          "source": "src/Snap-Internal-Http-Types.html#headers",
          "type": "method"
        },
        "index": {
          "description": "Retrieve the headers from datatype that has headers",
          "hierarchy": "Snap Core",
          "module": "Snap.Core",
          "name": "headers",
          "normalized": "a-\u003eHeaders",
          "package": "snap-core",
          "signature": "a-\u003eHeaders",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Core.html#v:headers"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRuns a \u003ccode\u003e\u003ca\u003eSnap\u003c/a\u003e\u003c/code\u003e monad action only when \u003ccode\u003e\u003ca\u003erqPathInfo\u003c/a\u003e\u003c/code\u003e is empty.\n\u003c/p\u003e",
          "module": "Snap.Core",
          "name": "ifTop",
          "package": "snap-core",
          "signature": "m a -\u003e m a",
          "source": "src/Snap-Internal-Types.html#ifTop",
          "type": "function"
        },
        "index": {
          "description": "Runs Snap monad action only when rqPathInfo is empty",
          "hierarchy": "Snap Core",
          "module": "Snap.Core",
          "name": "ifTop",
          "normalized": "a b-\u003ea b",
          "package": "snap-core",
          "partial": "Top",
          "signature": "m a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Core.html#v:ifTop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eModifies the \u003ccode\u003e\u003ca\u003eRequest\u003c/a\u003e\u003c/code\u003e in the state to set the \u003ccode\u003e\u003ca\u003erqRemoteAddr\u003c/a\u003e\u003c/code\u003e\n field to the value in the X-Forwarded-For header. If the header is\n not present, this action has no effect.\n\u003c/p\u003e\u003cp\u003eThis action should be used only when working behind a reverse http\n proxy that sets the X-Forwarded-For header. This is the only way to\n ensure the value in the X-Forwarded-For header can be trusted.\n\u003c/p\u003e\u003cp\u003eThis is provided as a filter so actions that require the remote\n address can get it in a uniform manner. It has specifically limited\n functionality to ensure that its transformation can be trusted,\n when used correctly.\n\u003c/p\u003e",
          "module": "Snap.Core",
          "name": "ipHeaderFilter",
          "package": "snap-core",
          "signature": "m ()",
          "source": "src/Snap-Internal-Types.html#ipHeaderFilter",
          "type": "function"
        },
        "index": {
          "description": "Modifies the Request in the state to set the rqRemoteAddr field to the value in the X-Forwarded-For header If the header is not present this action has no effect This action should be used only when working behind reverse http proxy that sets the X-Forwarded-For header This is the only way to ensure the value in the X-Forwarded-For header can be trusted This is provided as filter so actions that require the remote address can get it in uniform manner It has specifically limited functionality to ensure that its transformation can be trusted when used correctly",
          "hierarchy": "Snap Core",
          "module": "Snap.Core",
          "name": "ipHeaderFilter",
          "normalized": "a()",
          "package": "snap-core",
          "partial": "Header Filter",
          "signature": "m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Core.html#v:ipHeaderFilter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eModifies the \u003ccode\u003e\u003ca\u003eRequest\u003c/a\u003e\u003c/code\u003e in the state to set the \u003ccode\u003e\u003ca\u003erqRemoteAddr\u003c/a\u003e\u003c/code\u003e\n field to the value from the header specified.  If the header\n specified is not present, this action has no effect.\n\u003c/p\u003e\u003cp\u003eThis action should be used only when working behind a reverse http\n proxy that sets the header being looked at. This is the only way to\n ensure the value in the header can be trusted.\n\u003c/p\u003e\u003cp\u003eThis is provided as a filter so actions that require the remote\n address can get it in a uniform manner. It has specifically limited\n functionality to ensure that its transformation can be trusted,\n when used correctly.\n\u003c/p\u003e",
          "module": "Snap.Core",
          "name": "ipHeaderFilter'",
          "package": "snap-core",
          "signature": "CI ByteString -\u003e m ()",
          "source": "src/Snap-Internal-Types.html#ipHeaderFilter%27",
          "type": "function"
        },
        "index": {
          "description": "Modifies the Request in the state to set the rqRemoteAddr field to the value from the header specified If the header specified is not present this action has no effect This action should be used only when working behind reverse http proxy that sets the header being looked at This is the only way to ensure the value in the header can be trusted This is provided as filter so actions that require the remote address can get it in uniform manner It has specifically limited functionality to ensure that its transformation can be trusted when used correctly",
          "hierarchy": "Snap Core",
          "module": "Snap.Core",
          "name": "ipHeaderFilter'",
          "normalized": "CI ByteString-\u003ea()",
          "package": "snap-core",
          "partial": "Header Filter'",
          "signature": "CI ByteString-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Core.html#v:ipHeaderFilter-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Core",
          "name": "liftSnap",
          "package": "snap-core",
          "signature": "Snap a -\u003e m a",
          "source": "src/Snap-Internal-Types.html#liftSnap",
          "type": "method"
        },
        "index": {
          "hierarchy": "Snap Core",
          "module": "Snap.Core",
          "name": "liftSnap",
          "normalized": "Snap a-\u003eb a",
          "package": "snap-core",
          "partial": "Snap",
          "signature": "Snap a-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Core.html#v:liftSnap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLists all the headers out of a \u003ccode\u003e\u003ca\u003eHasHeaders\u003c/a\u003e\u003c/code\u003e datatype. If many\n headers came in with the same name, they will be catenated together.\n\u003c/p\u003e",
          "module": "[\"Snap.Core\",\"Snap.Internal.Http.Types\"]",
          "name": "listHeaders",
          "package": "snap-core",
          "signature": "a -\u003e [(CI ByteString, ByteString)]",
          "source": "src/Snap-Internal-Http-Types.html#listHeaders",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/snap-core/docs/Snap-Core.html#v:listHeaders\",\"http://hackage.haskell.org/package/snap-core/docs/Snap-Internal-Http-Types.html#v:listHeaders\"]"
        },
        "index": {
          "description": "Lists all the headers out of HasHeaders datatype If many headers came in with the same name they will be catenated together",
          "hierarchy": "Snap Core",
          "module": "Snap.Core",
          "name": "listHeaders",
          "normalized": "a-\u003e[(CI ByteString,ByteString)]",
          "package": "snap-core",
          "partial": "Headers",
          "signature": "a-\u003e[(CI ByteString,ByteString)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Core.html#v:listHeaders"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRuns a \u003ccode\u003e\u003ca\u003eSnap\u003c/a\u003e\u003c/code\u003e action with a locally-modified \u003ccode\u003e\u003ca\u003eRequest\u003c/a\u003e\u003c/code\u003e state\n object. The \u003ccode\u003e\u003ca\u003eRequest\u003c/a\u003e\u003c/code\u003e object in the Snap monad state after the call\n to localRequest will be unchanged.\n\u003c/p\u003e",
          "module": "Snap.Core",
          "name": "localRequest",
          "package": "snap-core",
          "signature": "(Request -\u003e Request) -\u003e m a -\u003e m a",
          "source": "src/Snap-Internal-Types.html#localRequest",
          "type": "function"
        },
        "index": {
          "description": "Runs Snap action with locally-modified Request state object The Request object in the Snap monad state after the call to localRequest will be unchanged",
          "hierarchy": "Snap Core",
          "module": "Snap.Core",
          "name": "localRequest",
          "normalized": "(Request-\u003eRequest)-\u003ea b-\u003ea b",
          "package": "snap-core",
          "partial": "Request",
          "signature": "(Request-\u003eRequest)-\u003em a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Core.html#v:localRequest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLog an error message in the \u003ccode\u003e\u003ca\u003eSnap\u003c/a\u003e\u003c/code\u003e monad\n\u003c/p\u003e",
          "module": "Snap.Core",
          "name": "logError",
          "package": "snap-core",
          "signature": "ByteString -\u003e m ()",
          "source": "src/Snap-Internal-Types.html#logError",
          "type": "function"
        },
        "index": {
          "description": "Log an error message in the Snap monad",
          "hierarchy": "Snap Core",
          "module": "Snap.Core",
          "name": "logError",
          "normalized": "ByteString-\u003ea()",
          "package": "snap-core",
          "partial": "Error",
          "signature": "ByteString-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Core.html#v:logError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRuns a \u003ccode\u003e\u003ca\u003eSnap\u003c/a\u003e\u003c/code\u003e monad action only if the request's HTTP method matches\n the given method.\n\u003c/p\u003e",
          "module": "Snap.Core",
          "name": "method",
          "package": "snap-core",
          "signature": "Method -\u003e m a -\u003e m a",
          "source": "src/Snap-Internal-Types.html#method",
          "type": "function"
        },
        "index": {
          "description": "Runs Snap monad action only if the request HTTP method matches the given method",
          "hierarchy": "Snap Core",
          "module": "Snap.Core",
          "name": "method",
          "normalized": "Method-\u003ea b-\u003ea b",
          "package": "snap-core",
          "signature": "Method-\u003em a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Core.html#v:method"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRuns a \u003ccode\u003e\u003ca\u003eSnap\u003c/a\u003e\u003c/code\u003e monad action only if the request's HTTP method matches\n one of the given methods.\n\u003c/p\u003e",
          "module": "Snap.Core",
          "name": "methods",
          "package": "snap-core",
          "signature": "[Method] -\u003e m a -\u003e m a",
          "source": "src/Snap-Internal-Types.html#methods",
          "type": "function"
        },
        "index": {
          "description": "Runs Snap monad action only if the request HTTP method matches one of the given methods",
          "hierarchy": "Snap Core",
          "module": "Snap.Core",
          "name": "methods",
          "normalized": "[Method]-\u003ea b-\u003ea b",
          "package": "snap-core",
          "signature": "[Method]-\u003em a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Core.html#v:methods"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eModifies the \u003ccode\u003e\u003ca\u003eRequest\u003c/a\u003e\u003c/code\u003e object stored in a \u003ccode\u003e\u003ca\u003eSnap\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e",
          "module": "Snap.Core",
          "name": "modifyRequest",
          "package": "snap-core",
          "signature": "(Request -\u003e Request) -\u003e m ()",
          "source": "src/Snap-Internal-Types.html#modifyRequest",
          "type": "function"
        },
        "index": {
          "description": "Modifies the Request object stored in Snap monad",
          "hierarchy": "Snap Core",
          "module": "Snap.Core",
          "name": "modifyRequest",
          "normalized": "(Request-\u003eRequest)-\u003ea()",
          "package": "snap-core",
          "partial": "Request",
          "signature": "(Request-\u003eRequest)-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Core.html#v:modifyRequest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eModifes the \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e object stored in a \u003ccode\u003e\u003ca\u003eSnap\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e",
          "module": "Snap.Core",
          "name": "modifyResponse",
          "package": "snap-core",
          "signature": "(Response -\u003e Response) -\u003e m ()",
          "source": "src/Snap-Internal-Types.html#modifyResponse",
          "type": "function"
        },
        "index": {
          "description": "Modifes the Response object stored in Snap monad",
          "hierarchy": "Snap Core",
          "module": "Snap.Core",
          "name": "modifyResponse",
          "normalized": "(Response-\u003eResponse)-\u003ea()",
          "package": "snap-core",
          "partial": "Response",
          "signature": "(Response-\u003eResponse)-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Core.html#v:modifyResponse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eModifies a response body.\n\u003c/p\u003e",
          "module": "[\"Snap.Core\",\"Snap.Internal.Http.Types\"]",
          "name": "modifyResponseBody",
          "package": "snap-core",
          "signature": "(forall a.  Enumerator Builder IO a -\u003e Enumerator Builder IO a) -\u003e Response -\u003e Response",
          "source": "src/Snap-Internal-Http-Types.html#modifyResponseBody",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/snap-core/docs/Snap-Core.html#v:modifyResponseBody\",\"http://hackage.haskell.org/package/snap-core/docs/Snap-Internal-Http-Types.html#v:modifyResponseBody\"]"
        },
        "index": {
          "description": "Modifies response body",
          "hierarchy": "Snap Core",
          "module": "Snap.Core",
          "name": "modifyResponseBody",
          "normalized": "(a b Enumerator Builder IO c-\u003eEnumerator Builder IO c)-\u003eResponse-\u003eResponse",
          "package": "snap-core",
          "partial": "Response Body",
          "signature": "(forall a. Enumerator Builder IO a-\u003eEnumerator Builder IO a)-\u003eResponse-\u003eResponse",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Core.html#v:modifyResponseBody"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eModifies an HTTP \u003ccode\u003e\u003ca\u003eCookie\u003c/a\u003e\u003c/code\u003e with given name in \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e headers.\n Nothing will happen if a matching \u003ccode\u003e\u003ca\u003eCookie\u003c/a\u003e\u003c/code\u003e can not be found in \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Snap.Core\",\"Snap.Internal.Http.Types\"]",
          "name": "modifyResponseCookie",
          "package": "snap-core",
          "signature": "ByteString-\u003e (Cookie -\u003e Cookie)-\u003e Response-\u003e Response",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/snap-core/docs/Snap-Core.html#v:modifyResponseCookie\",\"http://hackage.haskell.org/package/snap-core/docs/Snap-Internal-Http-Types.html#v:modifyResponseCookie\"]"
        },
        "index": {
          "description": "Modifies an HTTP Cookie with given name in Response headers Nothing will happen if matching Cookie can not be found in Response",
          "hierarchy": "Snap Core",
          "module": "Snap.Core",
          "name": "modifyResponseCookie",
          "normalized": "ByteString-\u003e(Cookie-\u003eCookie)-\u003eResponse-\u003eResponse",
          "package": "snap-core",
          "partial": "Response Cookie",
          "signature": "ByteString-\u003e(Cookie-\u003eCookie)-\u003eResponse-\u003eResponse",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Core.html#v:modifyResponseCookie"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eModifies the amount of time remaining before the request times out.\n\u003c/p\u003e",
          "module": "Snap.Core",
          "name": "modifyTimeout",
          "package": "snap-core",
          "signature": "(Int -\u003e Int) -\u003e m ()",
          "source": "src/Snap-Internal-Types.html#modifyTimeout",
          "type": "function"
        },
        "index": {
          "description": "Modifies the amount of time remaining before the request times out",
          "hierarchy": "Snap Core",
          "module": "Snap.Core",
          "name": "modifyTimeout",
          "normalized": "(Int-\u003eInt)-\u003ea()",
          "package": "snap-core",
          "partial": "Timeout",
          "signature": "(Int-\u003eInt)-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Core.html#v:modifyTimeout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts an HTTP timestamp into a \u003ccode\u003e\u003ca\u003eCTime\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Snap.Core\",\"Snap.Internal.Http.Types\"]",
          "name": "parseHttpTime",
          "package": "snap-core",
          "signature": "ByteString -\u003e IO CTime",
          "source": "src/Snap-Internal-Http-Types.html#parseHttpTime",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/snap-core/docs/Snap-Core.html#v:parseHttpTime\",\"http://hackage.haskell.org/package/snap-core/docs/Snap-Internal-Http-Types.html#v:parseHttpTime\"]"
        },
        "index": {
          "description": "Converts an HTTP timestamp into CTime",
          "hierarchy": "Snap Core",
          "module": "Snap.Core",
          "name": "parseHttpTime",
          "normalized": "ByteString-\u003eIO CTime",
          "package": "snap-core",
          "partial": "Http Time",
          "signature": "ByteString-\u003eIO CTime",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Core.html#v:parseHttpTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParses a string encoded in \u003ccode\u003eapplication/x-www-form-urlencoded\u003c/code\u003e format.\n\u003c/p\u003e",
          "module": "[\"Snap.Core\",\"Snap.Internal.Parsing\"]",
          "name": "parseUrlEncoded",
          "package": "snap-core",
          "signature": "ByteString -\u003e Map ByteString [ByteString]",
          "source": "src/Snap-Internal-Parsing.html#parseUrlEncoded",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/snap-core/docs/Snap-Core.html#v:parseUrlEncoded\",\"http://hackage.haskell.org/package/snap-core/docs/Snap-Internal-Parsing.html#v:parseUrlEncoded\"]"
        },
        "index": {
          "description": "Parses string encoded in application x-www-form-urlencoded format",
          "hierarchy": "Snap Core",
          "module": "Snap.Core",
          "name": "parseUrlEncoded",
          "normalized": "ByteString-\u003eMap ByteString[ByteString]",
          "package": "snap-core",
          "partial": "Url Encoded",
          "signature": "ByteString-\u003eMap ByteString[ByteString]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Core.html#v:parseUrlEncoded"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFails out of a \u003ccode\u003e\u003ca\u003eSnap\u003c/a\u003e\u003c/code\u003e monad action.  This is used to indicate\n that you choose not to handle the given request within the given\n handler.\n\u003c/p\u003e",
          "module": "Snap.Core",
          "name": "pass",
          "package": "snap-core",
          "signature": "m a",
          "source": "src/Snap-Internal-Types.html#pass",
          "type": "function"
        },
        "index": {
          "description": "Fails out of Snap monad action This is used to indicate that you choose not to handle the given request within the given handler",
          "hierarchy": "Snap Core",
          "module": "Snap.Core",
          "name": "pass",
          "package": "snap-core",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Core.html#v:pass"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRuns a \u003ccode\u003e\u003ca\u003eSnap\u003c/a\u003e\u003c/code\u003e monad action only for requests where \u003ccode\u003e\u003ca\u003erqPathInfo\u003c/a\u003e\u003c/code\u003e is\n exactly equal to the given string. If the path matches, locally sets\n \u003ccode\u003e\u003ca\u003erqContextPath\u003c/a\u003e\u003c/code\u003e to the old value of \u003ccode\u003e\u003ca\u003erqPathInfo\u003c/a\u003e\u003c/code\u003e, sets \u003ccode\u003e\u003ca\u003erqPathInfo\u003c/a\u003e\u003c/code\u003e=\"\",\n and runs the given handler.\n\u003c/p\u003e",
          "module": "Snap.Core",
          "name": "path",
          "package": "snap-core",
          "signature": "ByteString-\u003e m a-\u003e m a",
          "type": "function"
        },
        "index": {
          "description": "Runs Snap monad action only for requests where rqPathInfo is exactly equal to the given string If the path matches locally sets rqContextPath to the old value of rqPathInfo sets rqPathInfo and runs the given handler",
          "hierarchy": "Snap Core",
          "module": "Snap.Core",
          "name": "path",
          "normalized": "ByteString-\u003ea b-\u003ea b",
          "package": "snap-core",
          "signature": "ByteString-\u003em a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Core.html#v:path"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRuns a \u003ccode\u003e\u003ca\u003eSnap\u003c/a\u003e\u003c/code\u003e monad action only when the first path component is\n successfully parsed as the argument to the supplied handler function.\n\u003c/p\u003e",
          "module": "Snap.Core",
          "name": "pathArg",
          "package": "snap-core",
          "signature": "(a -\u003e m b) -\u003e m b",
          "source": "src/Snap-Internal-Types.html#pathArg",
          "type": "function"
        },
        "index": {
          "description": "Runs Snap monad action only when the first path component is successfully parsed as the argument to the supplied handler function",
          "hierarchy": "Snap Core",
          "module": "Snap.Core",
          "name": "pathArg",
          "normalized": "(a-\u003eb c)-\u003eb c",
          "package": "snap-core",
          "partial": "Arg",
          "signature": "(a-\u003em b)-\u003em b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Core.html#v:pathArg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Snap.Core\",\"Snap.Internal.Parsing\"]",
          "name": "printUrlEncoded",
          "package": "snap-core",
          "signature": "Map ByteString [ByteString] -\u003e ByteString",
          "source": "src/Snap-Internal-Parsing.html#printUrlEncoded",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/snap-core/docs/Snap-Core.html#v:printUrlEncoded\",\"http://hackage.haskell.org/package/snap-core/docs/Snap-Internal-Parsing.html#v:printUrlEncoded\"]"
        },
        "index": {
          "hierarchy": "Snap Core",
          "module": "Snap.Core",
          "name": "printUrlEncoded",
          "normalized": "Map ByteString[ByteString]-\u003eByteString",
          "package": "snap-core",
          "partial": "Url Encoded",
          "signature": "Map ByteString[ByteString]-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Core.html#v:printUrlEncoded"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePuts a new \u003ccode\u003e\u003ca\u003eRequest\u003c/a\u003e\u003c/code\u003e object into the \u003ccode\u003e\u003ca\u003eSnap\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e",
          "module": "Snap.Core",
          "name": "putRequest",
          "package": "snap-core",
          "signature": "Request -\u003e m ()",
          "source": "src/Snap-Internal-Types.html#putRequest",
          "type": "function"
        },
        "index": {
          "description": "Puts new Request object into the Snap monad",
          "hierarchy": "Snap Core",
          "module": "Snap.Core",
          "name": "putRequest",
          "normalized": "Request-\u003ea()",
          "package": "snap-core",
          "partial": "Request",
          "signature": "Request-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Core.html#v:putRequest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePuts a new \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e object into the \u003ccode\u003e\u003ca\u003eSnap\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e",
          "module": "Snap.Core",
          "name": "putResponse",
          "package": "snap-core",
          "signature": "Response -\u003e m ()",
          "source": "src/Snap-Internal-Types.html#putResponse",
          "type": "function"
        },
        "index": {
          "description": "Puts new Response object into the Snap monad",
          "hierarchy": "Snap Core",
          "module": "Snap.Core",
          "name": "putResponse",
          "normalized": "Response-\u003ea()",
          "package": "snap-core",
          "partial": "Response",
          "signature": "Response-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Core.html#v:putResponse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGets the HTTP \u003ccode\u003e\u003ca\u003eCookie\u003c/a\u003e\u003c/code\u003e with the specified name and decodes it.  If the\n decoding fails, the handler calls pass.\n\u003c/p\u003e",
          "module": "Snap.Core",
          "name": "readCookie",
          "package": "snap-core",
          "signature": "ByteString -\u003e m a",
          "source": "src/Snap-Internal-Types.html#readCookie",
          "type": "function"
        },
        "index": {
          "description": "Gets the HTTP Cookie with the specified name and decodes it If the decoding fails the handler calls pass",
          "hierarchy": "Snap Core",
          "module": "Snap.Core",
          "name": "readCookie",
          "normalized": "ByteString-\u003ea b",
          "package": "snap-core",
          "partial": "Cookie",
          "signature": "ByteString-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Core.html#v:readCookie"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the request body as a lazy bytestring. \u003cem\u003eNew in 0.6.\u003c/em\u003e\n\u003c/p\u003e",
          "module": "Snap.Core",
          "name": "readRequestBody",
          "package": "snap-core",
          "signature": "Int64-\u003e m ByteString",
          "type": "function"
        },
        "index": {
          "description": "Returns the request body as lazy bytestring New in",
          "hierarchy": "Snap Core",
          "module": "Snap.Core",
          "name": "readRequestBody",
          "normalized": "Int-\u003ea ByteString",
          "package": "snap-core",
          "partial": "Request Body",
          "signature": "Int-\u003em ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Core.html#v:readRequestBody"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePerforms a redirect by setting the \u003ccode\u003eLocation\u003c/code\u003e header to the given target\n URL/path and the status code to 302 in the \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e object stored in a\n \u003ccode\u003e\u003ca\u003eSnap\u003c/a\u003e\u003c/code\u003e monad. Note that the target URL is not validated in any way.\n Consider using 'redirect\\'' instead, which allows you to choose the correct\n status code.\n\u003c/p\u003e",
          "module": "Snap.Core",
          "name": "redirect",
          "package": "snap-core",
          "signature": "ByteString -\u003e m a",
          "source": "src/Snap-Internal-Types.html#redirect",
          "type": "function"
        },
        "index": {
          "description": "Performs redirect by setting the Location header to the given target URL path and the status code to in the Response object stored in Snap monad Note that the target URL is not validated in any way Consider using redirect instead which allows you to choose the correct status code",
          "hierarchy": "Snap Core",
          "module": "Snap.Core",
          "name": "redirect",
          "normalized": "ByteString-\u003ea b",
          "package": "snap-core",
          "signature": "ByteString-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Core.html#v:redirect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePerforms a redirect by setting the \u003ccode\u003eLocation\u003c/code\u003e header to the given target\n URL/path and the status code (should be one of 301, 302, 303 or 307) in the\n \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e object stored in a \u003ccode\u003e\u003ca\u003eSnap\u003c/a\u003e\u003c/code\u003e monad. Note that the target URL is not\n validated in any way.\n\u003c/p\u003e",
          "module": "Snap.Core",
          "name": "redirect'",
          "package": "snap-core",
          "signature": "ByteString -\u003e Int -\u003e m a",
          "source": "src/Snap-Internal-Types.html#redirect%27",
          "type": "function"
        },
        "index": {
          "description": "Performs redirect by setting the Location header to the given target URL path and the status code should be one of or in the Response object stored in Snap monad Note that the target URL is not validated in any way",
          "hierarchy": "Snap Core",
          "module": "Snap.Core",
          "name": "redirect'",
          "normalized": "ByteString-\u003eInt-\u003ea b",
          "package": "snap-core",
          "signature": "ByteString-\u003eInt-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Core.html#v:redirect-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA web handler which, given a mapping from URL entry points to web\n handlers, efficiently routes requests to the correct handler.\n\u003c/p\u003e\u003cp\u003eThe URL entry points are given as relative paths, for example:\n\u003c/p\u003e\u003cpre\u003e route [ (\"foo/bar/quux\", fooBarQuux) ]\n\u003c/pre\u003e\u003cp\u003eIf the URI of the incoming request is\n\u003c/p\u003e\u003cpre\u003e /foo/bar/quux\n\u003c/pre\u003e\u003cp\u003eor\n\u003c/p\u003e\u003cpre\u003e /foo/bar/quux/...anything...\n\u003c/pre\u003e\u003cp\u003ethen the request will be routed to \"\u003ccode\u003efooBarQuux\u003c/code\u003e\", with \u003ccode\u003e\u003ca\u003erqContextPath\u003c/a\u003e\u003c/code\u003e\n set to \"\u003ccode\u003e/foo/bar/quux/\u003c/code\u003e\" and \u003ccode\u003e\u003ca\u003erqPathInfo\u003c/a\u003e\u003c/code\u003e set to\n \"\u003ccode\u003e...anything...\u003c/code\u003e\".\n\u003c/p\u003e\u003cp\u003eA path component within an URL entry point beginning with a colon (\"\u003ccode\u003e:\u003c/code\u003e\")\n is treated as a \u003cem\u003evariable capture\u003c/em\u003e; the corresponding path component within\n the request URI will be entered into the \u003ccode\u003e\u003ca\u003erqParams\u003c/a\u003e\u003c/code\u003e parameters mapping with\n the given name. For instance, if the routes were:\n\u003c/p\u003e\u003cpre\u003e route [ (\"foo/:bar/baz\", fooBazHandler) ]\n\u003c/pre\u003e\u003cp\u003eThen a request for \"\u003ccode\u003e/foo/saskatchewan/baz\u003c/code\u003e\" would be routed to\n \u003ccode\u003efooBazHandler\u003c/code\u003e with a mapping for:\n\u003c/p\u003e\u003cpre\u003e \"bar\" =\u003e \"saskatchewan\"\n\u003c/pre\u003e\u003cp\u003ein its parameters table.\n\u003c/p\u003e\u003cp\u003eLonger paths are matched first, and specific routes are matched before\n captures. That is, if given routes:\n\u003c/p\u003e\u003cpre\u003e [ (\"a\", h1), (\"a/b\", h2), (\"a/:x\", h3) ]\n\u003c/pre\u003e\u003cp\u003ea request for \"\u003ccode\u003e/a/b\u003c/code\u003e\" will go to \u003ccode\u003eh2\u003c/code\u003e, \"\u003ccode\u003e/a/s\u003c/code\u003e\" for any \u003cem\u003es\u003c/em\u003e will\n go to \u003ccode\u003eh3\u003c/code\u003e, and \"\u003ccode\u003e/a\u003c/code\u003e\" will go to \u003ccode\u003eh1\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe following example matches \"\u003ccode\u003e/article\u003c/code\u003e\" to an article index,\n \"\u003ccode\u003e/login\u003c/code\u003e\" to a login, and \"\u003ccode\u003e/article/...\u003c/code\u003e\" to an article renderer.\n\u003c/p\u003e\u003cpre\u003e route [ (\"article\",     renderIndex)\n       , (\"article/:id\", renderArticle)\n       , (\"login\",       method POST doLogin) ]\n\u003c/pre\u003e\u003cp\u003e\u003cem\u003eURL decoding\u003c/em\u003e\n\u003c/p\u003e\u003cp\u003eA short note about URL decoding: path matching and variable capture are done\n on \u003cem\u003edecoded\u003c/em\u003e URLs, but the contents of \u003ccode\u003e\u003ca\u003erqContextPath\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003erqPathInfo\u003c/a\u003e\u003c/code\u003e will\n contain the original encoded URL, i.e. what the user entered. For example,\n in the following scenario:\n\u003c/p\u003e\u003cpre\u003e route [ (\"a b c d/\", foo ) ]\n\u003c/pre\u003e\u003cp\u003eA request for \"\u003ccode\u003e/a+b+c+d\u003c/code\u003e\" will be sent to \u003ccode\u003efoo\u003c/code\u003e with \u003ccode\u003e\u003ca\u003erqContextPath\u003c/a\u003e\u003c/code\u003e set\n to \"\u003cem\u003ea+b+c+d\u003c/em\u003e\".\n\u003c/p\u003e\u003cp\u003eThis behaviour changed as of Snap 0.6.1; previous versions had unspecified\n (and buggy!) semantics here.\n\u003c/p\u003e",
          "module": "Snap.Core",
          "name": "route",
          "package": "snap-core",
          "signature": "[(ByteString, m a)] -\u003e m a",
          "source": "src/Snap-Internal-Routing.html#route",
          "type": "function"
        },
        "index": {
          "description": "web handler which given mapping from URL entry points to web handlers efficiently routes requests to the correct handler The URL entry points are given as relative paths for example route foo bar quux fooBarQuux If the URI of the incoming request is foo bar quux or foo bar quux anything then the request will be routed to fooBarQuux with rqContextPath set to foo bar quux and rqPathInfo set to anything path component within an URL entry point beginning with colon is treated as variable capture the corresponding path component within the request URI will be entered into the rqParams parameters mapping with the given name For instance if the routes were route foo bar baz fooBazHandler Then request for foo saskatchewan baz would be routed to fooBazHandler with mapping for bar saskatchewan in its parameters table Longer paths are matched first and specific routes are matched before captures That is if given routes h1 h2 h3 request for will go to h2 for any will go to h3 and will go to h1 The following example matches article to an article index login to login and article to an article renderer route article renderIndex article id renderArticle login method POST doLogin URL decoding short note about URL decoding path matching and variable capture are done on decoded URLs but the contents of rqContextPath and rqPathInfo will contain the original encoded URL i.e what the user entered For example in the following scenario route foo request for will be sent to foo with rqContextPath set to This behaviour changed as of Snap previous versions had unspecified and buggy semantics here",
          "hierarchy": "Snap Core",
          "module": "Snap.Core",
          "name": "route",
          "normalized": "[(ByteString,a b)]-\u003ea b",
          "package": "snap-core",
          "signature": "[(ByteString,m a)]-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Core.html#v:route"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003erouteLocal\u003c/a\u003e\u003c/code\u003e function is the same as \u003ccode\u003eroute'\u003c/code\u003e, except it doesn't\n change the request's context path. This is useful if you want to route to a\n particular handler but you want that handler to receive the \u003ccode\u003e\u003ca\u003erqPathInfo\u003c/a\u003e\u003c/code\u003e as\n it is.\n\u003c/p\u003e",
          "module": "Snap.Core",
          "name": "routeLocal",
          "package": "snap-core",
          "signature": "[(ByteString, m a)] -\u003e m a",
          "source": "src/Snap-Internal-Routing.html#routeLocal",
          "type": "function"
        },
        "index": {
          "description": "The routeLocal function is the same as route except it doesn change the request context path This is useful if you want to route to particular handler but you want that handler to receive the rqPathInfo as it is",
          "hierarchy": "Snap Core",
          "module": "Snap.Core",
          "name": "routeLocal",
          "normalized": "[(ByteString,a b)]-\u003ea b",
          "package": "snap-core",
          "partial": "Local",
          "signature": "[(ByteString,m a)]-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Core.html#v:routeLocal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the \u003ccode\u003eContent-Length\u003c/code\u003e of the HTTP request body.\n\u003c/p\u003e",
          "module": "Snap.Core",
          "name": "rqContentLength",
          "package": "snap-core",
          "signature": "Request -\u003e Maybe Int",
          "source": "src/Snap-Internal-Http-Types.html#rqContentLength",
          "type": "function"
        },
        "index": {
          "description": "Returns the Content-Length of the HTTP request body",
          "hierarchy": "Snap Core",
          "module": "Snap.Core",
          "name": "rqContentLength",
          "normalized": "Request-\u003eMaybe Int",
          "package": "snap-core",
          "partial": "Content Length",
          "signature": "Request-\u003eMaybe Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Core.html#v:rqContentLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \"context path\" of the request; catenating \u003ccode\u003e\u003ca\u003erqContextPath\u003c/a\u003e\u003c/code\u003e,\n and \u003ccode\u003e\u003ca\u003erqPathInfo\u003c/a\u003e\u003c/code\u003e should get you back to the original \u003ccode\u003e\u003ca\u003erqURI\u003c/a\u003e\u003c/code\u003e\n (ignoring query strings). The \u003ccode\u003e\u003ca\u003erqContextPath\u003c/a\u003e\u003c/code\u003e always begins and ends\n with a slash (\u003ccode\u003e\"/\"\u003c/code\u003e) character, and represents the path (relative\n to your component/snaplet) you took to get to your handler.\n\u003c/p\u003e",
          "module": "Snap.Core",
          "name": "rqContextPath",
          "package": "snap-core",
          "signature": "Request -\u003e ByteString",
          "source": "src/Snap-Internal-Http-Types.html#rqContextPath",
          "type": "function"
        },
        "index": {
          "description": "The context path of the request catenating rqContextPath and rqPathInfo should get you back to the original rqURI ignoring query strings The rqContextPath always begins and ends with slash character and represents the path relative to your component snaplet you took to get to your handler",
          "hierarchy": "Snap Core",
          "module": "Snap.Core",
          "name": "rqContextPath",
          "normalized": "Request-\u003eByteString",
          "package": "snap-core",
          "partial": "Context Path",
          "signature": "Request-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Core.html#v:rqContextPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns a list of the cookies that came in from the HTTP request\n headers.\n\u003c/p\u003e",
          "module": "Snap.Core",
          "name": "rqCookies",
          "package": "snap-core",
          "signature": "Request -\u003e [Cookie]",
          "source": "src/Snap-Internal-Http-Types.html#rqCookies",
          "type": "function"
        },
        "index": {
          "description": "Returns list of the cookies that came in from the HTTP request headers",
          "hierarchy": "Snap Core",
          "module": "Snap.Core",
          "name": "rqCookies",
          "normalized": "Request-\u003e[Cookie]",
          "package": "snap-core",
          "partial": "Cookies",
          "signature": "Request-\u003e[Cookie]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Core.html#v:rqCookies"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns \u003ccode\u003eTrue\u003c/code\u003e if this is an \u003ccode\u003eHTTPS\u003c/code\u003e session.\n\u003c/p\u003e",
          "module": "Snap.Core",
          "name": "rqIsSecure",
          "package": "snap-core",
          "signature": "Request -\u003e Bool",
          "source": "src/Snap-Internal-Http-Types.html#rqIsSecure",
          "type": "function"
        },
        "index": {
          "description": "Returns True if this is an HTTPS session",
          "hierarchy": "Snap Core",
          "module": "Snap.Core",
          "name": "rqIsSecure",
          "normalized": "Request-\u003eBool",
          "package": "snap-core",
          "partial": "Is Secure",
          "signature": "Request-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Core.html#v:rqIsSecure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe local IP address for this request.\n\u003c/p\u003e",
          "module": "Snap.Core",
          "name": "rqLocalAddr",
          "package": "snap-core",
          "signature": "Request -\u003e ByteString",
          "source": "src/Snap-Internal-Http-Types.html#rqLocalAddr",
          "type": "function"
        },
        "index": {
          "description": "The local IP address for this request",
          "hierarchy": "Snap Core",
          "module": "Snap.Core",
          "name": "rqLocalAddr",
          "normalized": "Request-\u003eByteString",
          "package": "snap-core",
          "partial": "Local Addr",
          "signature": "Request-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Core.html#v:rqLocalAddr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the HTTP server's idea of its local hostname.\n\u003c/p\u003e",
          "module": "Snap.Core",
          "name": "rqLocalHostname",
          "package": "snap-core",
          "signature": "Request -\u003e ByteString",
          "source": "src/Snap-Internal-Http-Types.html#rqLocalHostname",
          "type": "function"
        },
        "index": {
          "description": "Returns the HTTP server idea of its local hostname",
          "hierarchy": "Snap Core",
          "module": "Snap.Core",
          "name": "rqLocalHostname",
          "normalized": "Request-\u003eByteString",
          "package": "snap-core",
          "partial": "Local Hostname",
          "signature": "Request-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Core.html#v:rqLocalHostname"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the HTTP request method.\n\u003c/p\u003e",
          "module": "Snap.Core",
          "name": "rqMethod",
          "package": "snap-core",
          "signature": "Request -\u003e Method",
          "source": "src/Snap-Internal-Http-Types.html#rqMethod",
          "type": "function"
        },
        "index": {
          "description": "Returns the HTTP request method",
          "hierarchy": "Snap Core",
          "module": "Snap.Core",
          "name": "rqMethod",
          "normalized": "Request-\u003eMethod",
          "package": "snap-core",
          "partial": "Method",
          "signature": "Request-\u003eMethod",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Core.html#v:rqMethod"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eModifies the parameters mapping (which is a \u003ccode\u003eMap ByteString ByteString\u003c/code\u003e)\n in a \u003ccode\u003e\u003ca\u003eRequest\u003c/a\u003e\u003c/code\u003e using the given function.\n\u003c/p\u003e",
          "module": "[\"Snap.Core\",\"Snap.Internal.Http.Types\"]",
          "name": "rqModifyParams",
          "package": "snap-core",
          "signature": "(Params -\u003e Params) -\u003e Request -\u003e Request",
          "source": "src/Snap-Internal-Http-Types.html#rqModifyParams",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/snap-core/docs/Snap-Core.html#v:rqModifyParams\",\"http://hackage.haskell.org/package/snap-core/docs/Snap-Internal-Http-Types.html#v:rqModifyParams\"]"
        },
        "index": {
          "description": "Modifies the parameters mapping which is Map ByteString ByteString in Request using the given function",
          "hierarchy": "Snap Core",
          "module": "Snap.Core",
          "name": "rqModifyParams",
          "normalized": "(Params-\u003eParams)-\u003eRequest-\u003eRequest",
          "package": "snap-core",
          "partial": "Modify Params",
          "signature": "(Params-\u003eParams)-\u003eRequest-\u003eRequest",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Core.html#v:rqModifyParams"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLooks up the value(s) for the given named parameter. Parameters initially\n come from the request's query string and any decoded POST body (if the\n request's \u003ccode\u003eContent-Type\u003c/code\u003e is \u003ccode\u003eapplication/x-www-form-urlencoded\u003c/code\u003e).\n Parameter values can be modified within handlers using \u003ca\u003erqModifyParams\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "[\"Snap.Core\",\"Snap.Internal.Http.Types\"]",
          "name": "rqParam",
          "package": "snap-core",
          "signature": "ByteString-\u003e Request-\u003e Maybe [ByteString]",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/snap-core/docs/Snap-Core.html#v:rqParam\",\"http://hackage.haskell.org/package/snap-core/docs/Snap-Internal-Http-Types.html#v:rqParam\"]"
        },
        "index": {
          "description": "Looks up the value for the given named parameter Parameters initially come from the request query string and any decoded POST body if the request Content-Type is application x-www-form-urlencoded Parameter values can be modified within handlers using rqModifyParams",
          "hierarchy": "Snap Core",
          "module": "Snap.Core",
          "name": "rqParam",
          "normalized": "ByteString-\u003eRequest-\u003eMaybe[ByteString]",
          "package": "snap-core",
          "partial": "Param",
          "signature": "ByteString-\u003eRequest-\u003eMaybe[ByteString]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Core.html#v:rqParam"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the parameters mapping for this \u003ccode\u003e\u003ca\u003eRequest\u003c/a\u003e\u003c/code\u003e. \"Parameters\"\n are automatically decoded from the URI's query string and \u003ccode\u003ePOST\u003c/code\u003e body\n and entered into this mapping. The \u003ccode\u003e\u003ca\u003erqParams\u003c/a\u003e\u003c/code\u003e value is thus a union of\n \u003ccode\u003e\u003ca\u003erqQueryParams\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003erqPostParams\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Snap.Core",
          "name": "rqParams",
          "package": "snap-core",
          "signature": "Request -\u003e Params",
          "source": "src/Snap-Internal-Http-Types.html#rqParams",
          "type": "function"
        },
        "index": {
          "description": "Returns the parameters mapping for this Request Parameters are automatically decoded from the URI query string and POST body and entered into this mapping The rqParams value is thus union of rqQueryParams and rqPostParams",
          "hierarchy": "Snap Core",
          "module": "Snap.Core",
          "name": "rqParams",
          "normalized": "Request-\u003eParams",
          "package": "snap-core",
          "partial": "Params",
          "signature": "Request-\u003eParams",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Core.html#v:rqParams"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHandlers can be hung on a \u003ccode\u003eURI\u003c/code\u003e \"entry point\"; this is called the\n \"context path\". If a handler is hung on the context path\n \u003ccode\u003e\"/foo/\"\u003c/code\u003e, and you request \u003ccode\u003e\"/foo/bar\"\u003c/code\u003e, the value of\n \u003ccode\u003e\u003ca\u003erqPathInfo\u003c/a\u003e\u003c/code\u003e will be \u003ccode\u003e\"bar\"\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe following identity holds:\n\u003c/p\u003e\u003cpre\u003e rqURI r == S.concat [ rqContextPath r\n                     , rqPathInfo r\n                     , let q = rqQueryString r\n                       in if S.null q\n                            then \"\"\n                            else S.append \"?\" q\n                     ]\n\u003c/pre\u003e",
          "module": "Snap.Core",
          "name": "rqPathInfo",
          "package": "snap-core",
          "signature": "Request -\u003e ByteString",
          "source": "src/Snap-Internal-Http-Types.html#rqPathInfo",
          "type": "function"
        },
        "index": {
          "description": "Handlers can be hung on URI entry point this is called the context path If handler is hung on the context path foo and you request foo bar the value of rqPathInfo will be bar The following identity holds rqURI S.concat rqContextPath rqPathInfo let rqQueryString in if S.null then else S.append",
          "hierarchy": "Snap Core",
          "module": "Snap.Core",
          "name": "rqPathInfo",
          "normalized": "Request-\u003eByteString",
          "package": "snap-core",
          "partial": "Path Info",
          "signature": "Request-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Core.html#v:rqPathInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLooks up the value(s) for the given named parameter in the POST parameters\n mapping.\n\u003c/p\u003e",
          "module": "[\"Snap.Core\",\"Snap.Internal.Http.Types\"]",
          "name": "rqPostParam",
          "package": "snap-core",
          "signature": "ByteString-\u003e Request-\u003e Maybe [ByteString]",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/snap-core/docs/Snap-Core.html#v:rqPostParam\",\"http://hackage.haskell.org/package/snap-core/docs/Snap-Internal-Http-Types.html#v:rqPostParam\"]"
        },
        "index": {
          "description": "Looks up the value for the given named parameter in the POST parameters mapping",
          "hierarchy": "Snap Core",
          "module": "Snap.Core",
          "name": "rqPostParam",
          "normalized": "ByteString-\u003eRequest-\u003eMaybe[ByteString]",
          "package": "snap-core",
          "partial": "Post Param",
          "signature": "ByteString-\u003eRequest-\u003eMaybe[ByteString]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Core.html#v:rqPostParam"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe parameter mapping decoded from the POST body. Note that Snap\n only auto-decodes POST request bodies when the request's\n \u003ccode\u003eContent-Type\u003c/code\u003e is \u003ccode\u003eapplication/x-www-form-urlencoded\u003c/code\u003e.\n For \u003ccode\u003emultipart/form-data\u003c/code\u003e use \u003ccode\u003e\u003ca\u003ehandleFileUploads\u003c/a\u003e\u003c/code\u003e\n to decode the POST request and fill this mapping.\n\u003c/p\u003e",
          "module": "Snap.Core",
          "name": "rqPostParams",
          "package": "snap-core",
          "signature": "Request -\u003e Params",
          "source": "src/Snap-Internal-Http-Types.html#rqPostParams",
          "type": "function"
        },
        "index": {
          "description": "The parameter mapping decoded from the POST body Note that Snap only auto-decodes POST request bodies when the request Content-Type is application x-www-form-urlencoded For multipart form-data use handleFileUploads to decode the POST request and fill this mapping",
          "hierarchy": "Snap Core",
          "module": "Snap.Core",
          "name": "rqPostParams",
          "normalized": "Request-\u003eParams",
          "package": "snap-core",
          "partial": "Post Params",
          "signature": "Request-\u003eParams",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Core.html#v:rqPostParams"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLooks up the value(s) for the given named parameter in the query\n parameters mapping.\n\u003c/p\u003e",
          "module": "[\"Snap.Core\",\"Snap.Internal.Http.Types\"]",
          "name": "rqQueryParam",
          "package": "snap-core",
          "signature": "ByteString-\u003e Request-\u003e Maybe [ByteString]",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/snap-core/docs/Snap-Core.html#v:rqQueryParam\",\"http://hackage.haskell.org/package/snap-core/docs/Snap-Internal-Http-Types.html#v:rqQueryParam\"]"
        },
        "index": {
          "description": "Looks up the value for the given named parameter in the query parameters mapping",
          "hierarchy": "Snap Core",
          "module": "Snap.Core",
          "name": "rqQueryParam",
          "normalized": "ByteString-\u003eRequest-\u003eMaybe[ByteString]",
          "package": "snap-core",
          "partial": "Query Param",
          "signature": "ByteString-\u003eRequest-\u003eMaybe[ByteString]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Core.html#v:rqQueryParam"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe parameter mapping decoded from the URI's query string.\n\u003c/p\u003e",
          "module": "Snap.Core",
          "name": "rqQueryParams",
          "package": "snap-core",
          "signature": "Request -\u003e Params",
          "source": "src/Snap-Internal-Http-Types.html#rqQueryParams",
          "type": "function"
        },
        "index": {
          "description": "The parameter mapping decoded from the URI query string",
          "hierarchy": "Snap Core",
          "module": "Snap.Core",
          "name": "rqQueryParams",
          "normalized": "Request-\u003eParams",
          "package": "snap-core",
          "partial": "Query Params",
          "signature": "Request-\u003eParams",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Core.html#v:rqQueryParams"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the HTTP query string for this \u003ccode\u003e\u003ca\u003eRequest\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Snap.Core",
          "name": "rqQueryString",
          "package": "snap-core",
          "signature": "Request -\u003e ByteString",
          "source": "src/Snap-Internal-Http-Types.html#rqQueryString",
          "type": "function"
        },
        "index": {
          "description": "Returns the HTTP query string for this Request",
          "hierarchy": "Snap Core",
          "module": "Snap.Core",
          "name": "rqQueryString",
          "normalized": "Request-\u003eByteString",
          "package": "snap-core",
          "partial": "Query String",
          "signature": "Request-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Core.html#v:rqQueryString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe remote IP address.\n\u003c/p\u003e",
          "module": "Snap.Core",
          "name": "rqRemoteAddr",
          "package": "snap-core",
          "signature": "Request -\u003e ByteString",
          "source": "src/Snap-Internal-Http-Types.html#rqRemoteAddr",
          "type": "function"
        },
        "index": {
          "description": "The remote IP address",
          "hierarchy": "Snap Core",
          "module": "Snap.Core",
          "name": "rqRemoteAddr",
          "normalized": "Request-\u003eByteString",
          "package": "snap-core",
          "partial": "Remote Addr",
          "signature": "Request-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Core.html#v:rqRemoteAddr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe remote TCP port number.\n\u003c/p\u003e",
          "module": "Snap.Core",
          "name": "rqRemotePort",
          "package": "snap-core",
          "signature": "Request -\u003e Int",
          "source": "src/Snap-Internal-Http-Types.html#rqRemotePort",
          "type": "function"
        },
        "index": {
          "description": "The remote TCP port number",
          "hierarchy": "Snap Core",
          "module": "Snap.Core",
          "name": "rqRemotePort",
          "normalized": "Request-\u003eInt",
          "package": "snap-core",
          "partial": "Remote Port",
          "signature": "Request-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Core.html#v:rqRemotePort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe server name of the request, as it came in from the request's\n \u003ccode\u003eHost:\u003c/code\u003e header.\n\u003c/p\u003e",
          "module": "Snap.Core",
          "name": "rqServerName",
          "package": "snap-core",
          "signature": "Request -\u003e ByteString",
          "source": "src/Snap-Internal-Http-Types.html#rqServerName",
          "type": "function"
        },
        "index": {
          "description": "The server name of the request as it came in from the request Host header",
          "hierarchy": "Snap Core",
          "module": "Snap.Core",
          "name": "rqServerName",
          "normalized": "Request-\u003eByteString",
          "package": "snap-core",
          "partial": "Server Name",
          "signature": "Request-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Core.html#v:rqServerName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the port number the HTTP server is listening on.\n\u003c/p\u003e",
          "module": "Snap.Core",
          "name": "rqServerPort",
          "package": "snap-core",
          "signature": "Request -\u003e Int",
          "source": "src/Snap-Internal-Http-Types.html#rqServerPort",
          "type": "function"
        },
        "index": {
          "description": "Returns the port number the HTTP server is listening on",
          "hierarchy": "Snap Core",
          "module": "Snap.Core",
          "name": "rqServerPort",
          "normalized": "Request-\u003eInt",
          "package": "snap-core",
          "partial": "Server Port",
          "signature": "Request-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Core.html#v:rqServerPort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrites a key-value pair to the parameters mapping within the given\n request.\n\u003c/p\u003e",
          "module": "[\"Snap.Core\",\"Snap.Internal.Http.Types\"]",
          "name": "rqSetParam",
          "package": "snap-core",
          "signature": "ByteString-\u003e [ByteString]-\u003e Request-\u003e Request",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/snap-core/docs/Snap-Core.html#v:rqSetParam\",\"http://hackage.haskell.org/package/snap-core/docs/Snap-Internal-Http-Types.html#v:rqSetParam\"]"
        },
        "index": {
          "description": "Writes key-value pair to the parameters mapping within the given request",
          "hierarchy": "Snap Core",
          "module": "Snap.Core",
          "name": "rqSetParam",
          "normalized": "ByteString-\u003e[ByteString]-\u003eRequest-\u003eRequest",
          "package": "snap-core",
          "partial": "Set Param",
          "signature": "ByteString-\u003e[ByteString]-\u003eRequest-\u003eRequest",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Core.html#v:rqSetParam"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the \u003ccode\u003eURI\u003c/code\u003e requested by the client.\n\u003c/p\u003e",
          "module": "Snap.Core",
          "name": "rqURI",
          "package": "snap-core",
          "signature": "Request -\u003e ByteString",
          "source": "src/Snap-Internal-Http-Types.html#rqURI",
          "type": "function"
        },
        "index": {
          "description": "Returns the URI requested by the client",
          "hierarchy": "Snap Core",
          "module": "Snap.Core",
          "name": "rqURI",
          "normalized": "Request-\u003eByteString",
          "package": "snap-core",
          "partial": "URI",
          "signature": "Request-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Core.html#v:rqURI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the HTTP version used by the client.\n\u003c/p\u003e",
          "module": "Snap.Core",
          "name": "rqVersion",
          "package": "snap-core",
          "signature": "Request -\u003e HttpVersion",
          "source": "src/Snap-Internal-Http-Types.html#rqVersion",
          "type": "function"
        },
        "index": {
          "description": "Returns the HTTP version used by the client",
          "hierarchy": "Snap Core",
          "module": "Snap.Core",
          "name": "rqVersion",
          "normalized": "Request-\u003eHttpVersion",
          "package": "snap-core",
          "partial": "Version",
          "signature": "Request-\u003eHttpVersion",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Core.html#v:rqVersion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the HTTP status code.\n\u003c/p\u003e",
          "module": "Snap.Core",
          "name": "rspStatus",
          "package": "snap-core",
          "signature": "Response -\u003e Int",
          "source": "src/Snap-Internal-Http-Types.html#rspStatus",
          "type": "function"
        },
        "index": {
          "description": "Returns the HTTP status code",
          "hierarchy": "Snap Core",
          "module": "Snap.Core",
          "name": "rspStatus",
          "normalized": "Response-\u003eInt",
          "package": "snap-core",
          "partial": "Status",
          "signature": "Response-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Core.html#v:rspStatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the HTTP status explanation string.\n\u003c/p\u003e",
          "module": "Snap.Core",
          "name": "rspStatusReason",
          "package": "snap-core",
          "signature": "Response -\u003e ByteString",
          "source": "src/Snap-Internal-Http-Types.html#rspStatusReason",
          "type": "function"
        },
        "index": {
          "description": "Returns the HTTP status explanation string",
          "hierarchy": "Snap Core",
          "module": "Snap.Core",
          "name": "rspStatusReason",
          "normalized": "Response-\u003eByteString",
          "package": "snap-core",
          "partial": "Status Reason",
          "signature": "Response-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Core.html#v:rspStatusReason"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSends the request body through an iteratee (data consumer) and\n returns the result.\n\u003c/p\u003e\u003cp\u003eIf the iteratee you pass in here throws an exception, Snap will attempt to\n clear the rest of the unread request body before rethrowing the exception.\n If your iteratee used \u003ccode\u003e\u003ca\u003eterminateConnection\u003c/a\u003e\u003c/code\u003e, however, Snap will give up and\n immediately close the socket.\n\u003c/p\u003e",
          "module": "Snap.Core",
          "name": "runRequestBody",
          "package": "snap-core",
          "signature": "Iteratee ByteString IO a -\u003e m a",
          "source": "src/Snap-Internal-Types.html#runRequestBody",
          "type": "function"
        },
        "index": {
          "description": "Sends the request body through an iteratee data consumer and returns the result If the iteratee you pass in here throws an exception Snap will attempt to clear the rest of the unread request body before rethrowing the exception If your iteratee used terminateConnection however Snap will give up and immediately close the socket",
          "hierarchy": "Snap Core",
          "module": "Snap.Core",
          "name": "runRequestBody",
          "normalized": "Iteratee ByteString IO a-\u003eb a",
          "package": "snap-core",
          "partial": "Request Body",
          "signature": "Iteratee ByteString IO a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Core.html#v:runRequestBody"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRuns a \u003ccode\u003e\u003ca\u003eSnap\u003c/a\u003e\u003c/code\u003e monad action in the 'Iteratee IO' monad.\n\u003c/p\u003e",
          "module": "Snap.Core",
          "name": "runSnap",
          "package": "snap-core",
          "signature": "Snap a -\u003e (ByteString -\u003e IO ()) -\u003e ((Int -\u003e Int) -\u003e IO ()) -\u003e Request -\u003e Iteratee ByteString IO (Request, Response)",
          "source": "src/Snap-Internal-Types.html#runSnap",
          "type": "function"
        },
        "index": {
          "description": "Runs Snap monad action in the Iteratee IO monad",
          "hierarchy": "Snap Core",
          "module": "Snap.Core",
          "name": "runSnap",
          "normalized": "Snap a-\u003e(ByteString-\u003eIO())-\u003e((Int-\u003eInt)-\u003eIO())-\u003eRequest-\u003eIteratee ByteString IO(Request,Response)",
          "package": "snap-core",
          "partial": "Snap",
          "signature": "Snap a-\u003e(ByteString-\u003eIO())-\u003e((Int-\u003eInt)-\u003eIO())-\u003eRequest-\u003eIteratee ByteString IO(Request,Response)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Core.html#v:runSnap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSets the output to be the contents of the specified file.\n\u003c/p\u003e\u003cp\u003eCalling \u003ccode\u003e\u003ca\u003esendFile\u003c/a\u003e\u003c/code\u003e will overwrite any output queued to be sent in the\n \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e. If the response body is not modified after the call to\n \u003ccode\u003e\u003ca\u003esendFile\u003c/a\u003e\u003c/code\u003e, Snap will use the efficient \u003ccode\u003esendfile()\u003c/code\u003e system call on\n platforms that support it.\n\u003c/p\u003e\u003cp\u003eIf the response body is modified (using \u003ccode\u003e\u003ca\u003emodifyResponseBody\u003c/a\u003e\u003c/code\u003e), the file\n will be read using \u003ccode\u003emmap()\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Snap.Core",
          "name": "sendFile",
          "package": "snap-core",
          "signature": "FilePath -\u003e m ()",
          "source": "src/Snap-Internal-Types.html#sendFile",
          "type": "function"
        },
        "index": {
          "description": "Sets the output to be the contents of the specified file Calling sendFile will overwrite any output queued to be sent in the Response If the response body is not modified after the call to sendFile Snap will use the efficient sendfile system call on platforms that support it If the response body is modified using modifyResponseBody the file will be read using mmap",
          "hierarchy": "Snap Core",
          "module": "Snap.Core",
          "name": "sendFile",
          "normalized": "FilePath-\u003ea()",
          "package": "snap-core",
          "partial": "File",
          "signature": "FilePath-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Core.html#v:sendFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSets the output to be the contents of the specified file, within the\n given (start,end) range.\n\u003c/p\u003e\u003cp\u003eCalling \u003ccode\u003e\u003ca\u003esendFilePartial\u003c/a\u003e\u003c/code\u003e will overwrite any output queued to be sent in\n the \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e. If the response body is not modified after the call to\n \u003ccode\u003e\u003ca\u003esendFilePartial\u003c/a\u003e\u003c/code\u003e, Snap will use the efficient \u003ccode\u003esendfile()\u003c/code\u003e system call on\n platforms that support it.\n\u003c/p\u003e\u003cp\u003eIf the response body is modified (using \u003ccode\u003e\u003ca\u003emodifyResponseBody\u003c/a\u003e\u003c/code\u003e), the file\n will be read using \u003ccode\u003emmap()\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Snap.Core",
          "name": "sendFilePartial",
          "package": "snap-core",
          "signature": "FilePath -\u003e (Int64, Int64) -\u003e m ()",
          "source": "src/Snap-Internal-Types.html#sendFilePartial",
          "type": "function"
        },
        "index": {
          "description": "Sets the output to be the contents of the specified file within the given start end range Calling sendFilePartial will overwrite any output queued to be sent in the Response If the response body is not modified after the call to sendFilePartial Snap will use the efficient sendfile system call on platforms that support it If the response body is modified using modifyResponseBody the file will be read using mmap",
          "hierarchy": "Snap Core",
          "module": "Snap.Core",
          "name": "sendFilePartial",
          "normalized": "FilePath-\u003e(Int,Int)-\u003ea()",
          "package": "snap-core",
          "partial": "File Partial",
          "signature": "FilePath-\u003e(Int,Int)-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Core.html#v:sendFilePartial"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe buffering mode controls whether Snap will buffer the output or not.\n You may wish to disable buffering when using Comet-like techniques which\n rely on the immediate sending of output data in order to maintain\n interactive semantics.\n\u003c/p\u003e",
          "module": "[\"Snap.Core\",\"Snap.Internal.Http.Types\"]",
          "name": "setBufferingMode",
          "package": "snap-core",
          "signature": "Bool-\u003e Response-\u003e Response",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/snap-core/docs/Snap-Core.html#v:setBufferingMode\",\"http://hackage.haskell.org/package/snap-core/docs/Snap-Internal-Http-Types.html#v:setBufferingMode\"]"
        },
        "index": {
          "description": "The buffering mode controls whether Snap will buffer the output or not You may wish to disable buffering when using Comet-like techniques which rely on the immediate sending of output data in order to maintain interactive semantics",
          "hierarchy": "Snap Core",
          "module": "Snap.Core",
          "name": "setBufferingMode",
          "normalized": "Bool-\u003eResponse-\u003eResponse",
          "package": "snap-core",
          "partial": "Buffering Mode",
          "signature": "Bool-\u003eResponse-\u003eResponse",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Core.html#v:setBufferingMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA note here: if you want to set the \u003ccode\u003eContent-Length\u003c/code\u003e for the response,\n Snap forces you to do it with this function rather than by setting it in\n the headers; the \u003ccode\u003eContent-Length\u003c/code\u003e in the headers will be ignored.\n\u003c/p\u003e\u003cp\u003eThe reason for this is that Snap needs to look up the value of\n \u003ccode\u003eContent-Length\u003c/code\u003e for each request, and looking the string value up in the\n headers and parsing the number out of the text will be too expensive.\n\u003c/p\u003e\u003cp\u003eIf you don't set a content length in your response, HTTP keep-alive will be\n disabled for HTTP/1.0 clients, forcing a \u003ccode\u003eConnection: close\u003c/code\u003e. For\n HTTP/1.1 clients, Snap will switch to the chunked transfer encoding if\n \u003ccode\u003eContent-Length\u003c/code\u003e is not specified.\n\u003c/p\u003e",
          "module": "[\"Snap.Core\",\"Snap.Internal.Http.Types\"]",
          "name": "setContentLength",
          "package": "snap-core",
          "signature": "Int64 -\u003e Response -\u003e Response",
          "source": "src/Snap-Internal-Http-Types.html#setContentLength",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/snap-core/docs/Snap-Core.html#v:setContentLength\",\"http://hackage.haskell.org/package/snap-core/docs/Snap-Internal-Http-Types.html#v:setContentLength\"]"
        },
        "index": {
          "description": "note here if you want to set the Content-Length for the response Snap forces you to do it with this function rather than by setting it in the headers the Content-Length in the headers will be ignored The reason for this is that Snap needs to look up the value of Content-Length for each request and looking the string value up in the headers and parsing the number out of the text will be too expensive If you don set content length in your response HTTP keep-alive will be disabled for HTTP clients forcing Connection close For HTTP clients Snap will switch to the chunked transfer encoding if Content-Length is not specified",
          "hierarchy": "Snap Core",
          "module": "Snap.Core",
          "name": "setContentLength",
          "normalized": "Int-\u003eResponse-\u003eResponse",
          "package": "snap-core",
          "partial": "Content Length",
          "signature": "Int-\u003eResponse-\u003eResponse",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Core.html#v:setContentLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSets the \u003ccode\u003eContent-Type\u003c/code\u003e in the \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e headers.\n\u003c/p\u003e",
          "module": "[\"Snap.Core\",\"Snap.Internal.Http.Types\"]",
          "name": "setContentType",
          "package": "snap-core",
          "signature": "ByteString -\u003e Response -\u003e Response",
          "source": "src/Snap-Internal-Http-Types.html#setContentType",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/snap-core/docs/Snap-Core.html#v:setContentType\",\"http://hackage.haskell.org/package/snap-core/docs/Snap-Internal-Http-Types.html#v:setContentType\"]"
        },
        "index": {
          "description": "Sets the Content-Type in the Response headers",
          "hierarchy": "Snap Core",
          "module": "Snap.Core",
          "name": "setContentType",
          "normalized": "ByteString-\u003eResponse-\u003eResponse",
          "package": "snap-core",
          "partial": "Content Type",
          "signature": "ByteString-\u003eResponse-\u003eResponse",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Core.html#v:setContentType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSets a header key-value-pair in a \u003ccode\u003e\u003ca\u003eHasHeaders\u003c/a\u003e\u003c/code\u003e datatype. If a header with\n the same name already exists, it is overwritten with the new value.\n\u003c/p\u003e",
          "module": "[\"Snap.Core\",\"Snap.Internal.Http.Types\"]",
          "name": "setHeader",
          "package": "snap-core",
          "signature": "CI ByteString -\u003e ByteString -\u003e a -\u003e a",
          "source": "src/Snap-Internal-Http-Types.html#setHeader",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/snap-core/docs/Snap-Core.html#v:setHeader\",\"http://hackage.haskell.org/package/snap-core/docs/Snap-Internal-Http-Types.html#v:setHeader\"]"
        },
        "index": {
          "description": "Sets header key-value-pair in HasHeaders datatype If header with the same name already exists it is overwritten with the new value",
          "hierarchy": "Snap Core",
          "module": "Snap.Core",
          "name": "setHeader",
          "normalized": "CI ByteString-\u003eByteString-\u003ea-\u003ea",
          "package": "snap-core",
          "partial": "Header",
          "signature": "CI ByteString-\u003eByteString-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Core.html#v:setHeader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSets an HTTP response body to the given \u003ccode\u003e\u003ca\u003eEnumerator\u003c/a\u003e\u003c/code\u003e value.\n\u003c/p\u003e",
          "module": "[\"Snap.Core\",\"Snap.Internal.Http.Types\"]",
          "name": "setResponseBody",
          "package": "snap-core",
          "signature": "(forall a.  Enumerator Builder IO a)-\u003e Response-\u003e Response",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/snap-core/docs/Snap-Core.html#v:setResponseBody\",\"http://hackage.haskell.org/package/snap-core/docs/Snap-Internal-Http-Types.html#v:setResponseBody\"]"
        },
        "index": {
          "description": "Sets an HTTP response body to the given Enumerator value",
          "hierarchy": "Snap Core",
          "module": "Snap.Core",
          "name": "setResponseBody",
          "normalized": "(a b Enumerator Builder IO c)-\u003eResponse-\u003eResponse",
          "package": "snap-core",
          "partial": "Response Body",
          "signature": "(forall a. Enumerator Builder IO a)-\u003eResponse-\u003eResponse",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Core.html#v:setResponseBody"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSets the HTTP response code.\n\u003c/p\u003e",
          "module": "[\"Snap.Core\",\"Snap.Internal.Http.Types\"]",
          "name": "setResponseCode",
          "package": "snap-core",
          "signature": "Int-\u003e Response-\u003e Response",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/snap-core/docs/Snap-Core.html#v:setResponseCode\",\"http://hackage.haskell.org/package/snap-core/docs/Snap-Internal-Http-Types.html#v:setResponseCode\"]"
        },
        "index": {
          "description": "Sets the HTTP response code",
          "hierarchy": "Snap Core",
          "module": "Snap.Core",
          "name": "setResponseCode",
          "normalized": "Int-\u003eResponse-\u003eResponse",
          "package": "snap-core",
          "partial": "Response Code",
          "signature": "Int-\u003eResponse-\u003eResponse",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Core.html#v:setResponseCode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSets the HTTP response status. Note: normally you would use\n \u003ccode\u003e\u003ca\u003esetResponseCode\u003c/a\u003e\u003c/code\u003e unless you needed a custom response explanation.\n\u003c/p\u003e",
          "module": "[\"Snap.Core\",\"Snap.Internal.Http.Types\"]",
          "name": "setResponseStatus",
          "package": "snap-core",
          "signature": "Int-\u003e ByteString-\u003e Response-\u003e Response",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/snap-core/docs/Snap-Core.html#v:setResponseStatus\",\"http://hackage.haskell.org/package/snap-core/docs/Snap-Internal-Http-Types.html#v:setResponseStatus\"]"
        },
        "index": {
          "description": "Sets the HTTP response status Note normally you would use setResponseCode unless you needed custom response explanation",
          "hierarchy": "Snap Core",
          "module": "Snap.Core",
          "name": "setResponseStatus",
          "normalized": "Int-\u003eByteString-\u003eResponse-\u003eResponse",
          "package": "snap-core",
          "partial": "Response Status",
          "signature": "Int-\u003eByteString-\u003eResponse-\u003eResponse",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Core.html#v:setResponseStatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCauses the handler thread to be killed \u003ccode\u003en\u003c/code\u003e seconds from now.\n\u003c/p\u003e",
          "module": "Snap.Core",
          "name": "setTimeout",
          "package": "snap-core",
          "signature": "Int -\u003e m ()",
          "source": "src/Snap-Internal-Types.html#setTimeout",
          "type": "function"
        },
        "index": {
          "description": "Causes the handler thread to be killed seconds from now",
          "hierarchy": "Snap Core",
          "module": "Snap.Core",
          "name": "setTimeout",
          "normalized": "Int-\u003ea()",
          "package": "snap-core",
          "partial": "Timeout",
          "signature": "Int-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Core.html#v:setTimeout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTerminate the HTTP session with the given exception.\n\u003c/p\u003e",
          "module": "Snap.Core",
          "name": "terminateConnection",
          "package": "snap-core",
          "signature": "e -\u003e m a",
          "source": "src/Snap-Internal-Types.html#terminateConnection",
          "type": "function"
        },
        "index": {
          "description": "Terminate the HTTP session with the given exception",
          "hierarchy": "Snap Core",
          "module": "Snap.Core",
          "name": "terminateConnection",
          "normalized": "a-\u003eb c",
          "package": "snap-core",
          "partial": "Connection",
          "signature": "e-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Core.html#v:terminateConnection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNormally Snap is careful to ensure that the request body is fully\n consumed after your web handler runs, but before the \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e enumerator\n is streamed out the socket. If you want to transform the request body into\n some output in O(1) space, you should use this function.\n\u003c/p\u003e\u003cp\u003eNote that upon calling this function, response processing finishes early as\n if you called \u003ccode\u003e\u003ca\u003efinishWith\u003c/a\u003e\u003c/code\u003e. Make sure you set any content types, headers,\n cookies, etc. before you call this function.\n\u003c/p\u003e",
          "module": "Snap.Core",
          "name": "transformRequestBody",
          "package": "snap-core",
          "signature": "(forall a.  Enumerator Builder IO a)-\u003e Snap ()",
          "type": "function"
        },
        "index": {
          "description": "Normally Snap is careful to ensure that the request body is fully consumed after your web handler runs but before the Response enumerator is streamed out the socket If you want to transform the request body into some output in space you should use this function Note that upon calling this function response processing finishes early as if you called finishWith Make sure you set any content types headers cookies etc before you call this function",
          "hierarchy": "Snap Core",
          "module": "Snap.Core",
          "name": "transformRequestBody",
          "normalized": "(a b Enumerator Builder IO c)-\u003eSnap()",
          "package": "snap-core",
          "partial": "Request Body",
          "signature": "(forall a. Enumerator Builder IO a)-\u003eSnap()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Core.html#v:transformRequestBody"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eModify the datatype's headers.\n\u003c/p\u003e",
          "module": "Snap.Core",
          "name": "updateHeaders",
          "package": "snap-core",
          "signature": "(Headers -\u003e Headers) -\u003e a -\u003e a",
          "source": "src/Snap-Internal-Http-Types.html#updateHeaders",
          "type": "method"
        },
        "index": {
          "description": "Modify the datatype headers",
          "hierarchy": "Snap Core",
          "module": "Snap.Core",
          "name": "updateHeaders",
          "normalized": "(Headers-\u003eHeaders)-\u003ea-\u003ea",
          "package": "snap-core",
          "partial": "Headers",
          "signature": "(Headers-\u003eHeaders)-\u003ea-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Core.html#v:updateHeaders"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecodes an URL-escaped string (see\n \u003ca\u003ehttp://tools.ietf.org/html/rfc2396.html#section-2.4\u003c/a\u003e)\n\u003c/p\u003e",
          "module": "[\"Snap.Core\",\"Snap.Internal.Parsing\"]",
          "name": "urlDecode",
          "package": "snap-core",
          "signature": "ByteString -\u003e Maybe ByteString",
          "source": "src/Snap-Internal-Parsing.html#urlDecode",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/snap-core/docs/Snap-Core.html#v:urlDecode\",\"http://hackage.haskell.org/package/snap-core/docs/Snap-Internal-Parsing.html#v:urlDecode\"]"
        },
        "index": {
          "description": "Decodes an URL-escaped string see http tools.ietf.org html rfc2396.html section-2.4",
          "hierarchy": "Snap Core",
          "module": "Snap.Core",
          "name": "urlDecode",
          "normalized": "ByteString-\u003eMaybe ByteString",
          "package": "snap-core",
          "partial": "Decode",
          "signature": "ByteString-\u003eMaybe ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Core.html#v:urlDecode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eURL-escapes a string (see\n \u003ca\u003ehttp://tools.ietf.org/html/rfc2396.html#section-2.4\u003c/a\u003e)\n\u003c/p\u003e",
          "module": "[\"Snap.Core\",\"Snap.Internal.Parsing\"]",
          "name": "urlEncode",
          "package": "snap-core",
          "signature": "ByteString -\u003e ByteString",
          "source": "src/Snap-Internal-Parsing.html#urlEncode",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/snap-core/docs/Snap-Core.html#v:urlEncode\",\"http://hackage.haskell.org/package/snap-core/docs/Snap-Internal-Parsing.html#v:urlEncode\"]"
        },
        "index": {
          "description": "URL-escapes string see http tools.ietf.org html rfc2396.html section-2.4",
          "hierarchy": "Snap Core",
          "module": "Snap.Core",
          "name": "urlEncode",
          "normalized": "ByteString-\u003eByteString",
          "package": "snap-core",
          "partial": "Encode",
          "signature": "ByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Core.html#v:urlEncode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eURL-escapes a string (see\n \u003ca\u003ehttp://tools.ietf.org/html/rfc2396.html#section-2.4\u003c/a\u003e) into a \u003ccode\u003e\u003ca\u003eBuilder\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Snap.Core\",\"Snap.Internal.Parsing\"]",
          "name": "urlEncodeBuilder",
          "package": "snap-core",
          "signature": "ByteString -\u003e Builder",
          "source": "src/Snap-Internal-Parsing.html#urlEncodeBuilder",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/snap-core/docs/Snap-Core.html#v:urlEncodeBuilder\",\"http://hackage.haskell.org/package/snap-core/docs/Snap-Internal-Parsing.html#v:urlEncodeBuilder\"]"
        },
        "index": {
          "description": "URL-escapes string see http tools.ietf.org html rfc2396.html section-2.4 into Builder",
          "hierarchy": "Snap Core",
          "module": "Snap.Core",
          "name": "urlEncodeBuilder",
          "normalized": "ByteString-\u003eBuilder",
          "package": "snap-core",
          "partial": "Encode Builder",
          "signature": "ByteString-\u003eBuilder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Core.html#v:urlEncodeBuilder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFetches the \u003ccode\u003e\u003ca\u003eRequest\u003c/a\u003e\u003c/code\u003e from state and hands it to the given action.\n\u003c/p\u003e",
          "module": "Snap.Core",
          "name": "withRequest",
          "package": "snap-core",
          "signature": "(Request -\u003e m a) -\u003e m a",
          "source": "src/Snap-Internal-Types.html#withRequest",
          "type": "function"
        },
        "index": {
          "description": "Fetches the Request from state and hands it to the given action",
          "hierarchy": "Snap Core",
          "module": "Snap.Core",
          "name": "withRequest",
          "normalized": "(Request-\u003ea b)-\u003ea b",
          "package": "snap-core",
          "partial": "Request",
          "signature": "(Request-\u003em a)-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Core.html#v:withRequest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFetches the \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e from state and hands it to the given action.\n\u003c/p\u003e",
          "module": "Snap.Core",
          "name": "withResponse",
          "package": "snap-core",
          "signature": "(Response -\u003e m a) -\u003e m a",
          "source": "src/Snap-Internal-Types.html#withResponse",
          "type": "function"
        },
        "index": {
          "description": "Fetches the Response from state and hands it to the given action",
          "hierarchy": "Snap Core",
          "module": "Snap.Core",
          "name": "withResponse",
          "normalized": "(Response-\u003ea b)-\u003ea b",
          "package": "snap-core",
          "partial": "Response",
          "signature": "(Response-\u003em a)-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Core.html#v:withResponse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdds the given strict \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e to the body of the \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e stored\n in the \u003ccode\u003e\u003ca\u003eSnap\u003c/a\u003e\u003c/code\u003e monad state.\n\u003c/p\u003e\u003cp\u003eWarning: This function is intentionally non-strict. If any pure\n exceptions are raised by the expression creating the \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e,\n the exception won't actually be raised within the Snap handler.\n\u003c/p\u003e",
          "module": "Snap.Core",
          "name": "writeBS",
          "package": "snap-core",
          "signature": "ByteString -\u003e m ()",
          "source": "src/Snap-Internal-Types.html#writeBS",
          "type": "function"
        },
        "index": {
          "description": "Adds the given strict ByteString to the body of the Response stored in the Snap monad state Warning This function is intentionally non-strict If any pure exceptions are raised by the expression creating the ByteString the exception won actually be raised within the Snap handler",
          "hierarchy": "Snap Core",
          "module": "Snap.Core",
          "name": "writeBS",
          "normalized": "ByteString-\u003ea()",
          "package": "snap-core",
          "partial": "BS",
          "signature": "ByteString-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Core.html#v:writeBS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdds the given \u003ccode\u003e\u003ca\u003eBuilder\u003c/a\u003e\u003c/code\u003e to the body of the \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e stored in the\n | \u003ccode\u003e\u003ca\u003eSnap\u003c/a\u003e\u003c/code\u003e monad state.\n\u003c/p\u003e",
          "module": "Snap.Core",
          "name": "writeBuilder",
          "package": "snap-core",
          "signature": "Builder -\u003e m ()",
          "source": "src/Snap-Internal-Types.html#writeBuilder",
          "type": "function"
        },
        "index": {
          "description": "Adds the given Builder to the body of the Response stored in the Snap monad state",
          "hierarchy": "Snap Core",
          "module": "Snap.Core",
          "name": "writeBuilder",
          "normalized": "Builder-\u003ea()",
          "package": "snap-core",
          "partial": "Builder",
          "signature": "Builder-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Core.html#v:writeBuilder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdds the given lazy \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e to the body of the \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e stored\n in the \u003ccode\u003e\u003ca\u003eSnap\u003c/a\u003e\u003c/code\u003e monad state.\n\u003c/p\u003e\u003cp\u003eWarning: This function is intentionally non-strict. If any pure\n exceptions are raised by the expression creating the \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e,\n the exception won't actually be raised within the Snap handler.\n\u003c/p\u003e",
          "module": "Snap.Core",
          "name": "writeLBS",
          "package": "snap-core",
          "signature": "ByteString -\u003e m ()",
          "source": "src/Snap-Internal-Types.html#writeLBS",
          "type": "function"
        },
        "index": {
          "description": "Adds the given lazy ByteString to the body of the Response stored in the Snap monad state Warning This function is intentionally non-strict If any pure exceptions are raised by the expression creating the ByteString the exception won actually be raised within the Snap handler",
          "hierarchy": "Snap Core",
          "module": "Snap.Core",
          "name": "writeLBS",
          "normalized": "ByteString-\u003ea()",
          "package": "snap-core",
          "partial": "LBS",
          "signature": "ByteString-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Core.html#v:writeLBS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdds the given lazy \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e to the body of the \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e stored in the\n \u003ccode\u003e\u003ca\u003eSnap\u003c/a\u003e\u003c/code\u003e monad state.\n\u003c/p\u003e\u003cp\u003eWarning: This function is intentionally non-strict. If any pure\n exceptions are raised by the expression creating the \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e,\n the exception won't actually be raised within the Snap handler.\n\u003c/p\u003e",
          "module": "Snap.Core",
          "name": "writeLazyText",
          "package": "snap-core",
          "signature": "Text -\u003e m ()",
          "source": "src/Snap-Internal-Types.html#writeLazyText",
          "type": "function"
        },
        "index": {
          "description": "Adds the given lazy Text to the body of the Response stored in the Snap monad state Warning This function is intentionally non-strict If any pure exceptions are raised by the expression creating the ByteString the exception won actually be raised within the Snap handler",
          "hierarchy": "Snap Core",
          "module": "Snap.Core",
          "name": "writeLazyText",
          "normalized": "Text-\u003ea()",
          "package": "snap-core",
          "partial": "Lazy Text",
          "signature": "Text-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Core.html#v:writeLazyText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdds the given strict \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e to the body of the \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e stored in\n the \u003ccode\u003e\u003ca\u003eSnap\u003c/a\u003e\u003c/code\u003e monad state.\n\u003c/p\u003e\u003cp\u003eWarning: This function is intentionally non-strict. If any pure\n exceptions are raised by the expression creating the \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e,\n the exception won't actually be raised within the Snap handler.\n\u003c/p\u003e",
          "module": "Snap.Core",
          "name": "writeText",
          "package": "snap-core",
          "signature": "Text -\u003e m ()",
          "source": "src/Snap-Internal-Types.html#writeText",
          "type": "function"
        },
        "index": {
          "description": "Adds the given strict Text to the body of the Response stored in the Snap monad state Warning This function is intentionally non-strict If any pure exceptions are raised by the expression creating the ByteString the exception won actually be raised within the Snap handler",
          "hierarchy": "Snap Core",
          "module": "Snap.Core",
          "name": "writeText",
          "normalized": "Text-\u003ea()",
          "package": "snap-core",
          "partial": "Text",
          "signature": "Text-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Core.html#v:writeText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAn internal Snap module for (optionally) printing debugging\n messages. Normally \u003ccode\u003e\u003ca\u003edebug\u003c/a\u003e\u003c/code\u003e does nothing, but if you set \u003ccode\u003eDEBUG=1\u003c/code\u003e in the\n environment you'll get debugging messages. We use \u003ccode\u003eunsafePerformIO\u003c/code\u003e to make\n sure that the call to \u003ccode\u003egetEnv\u003c/code\u003e is only made once.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eN.B.\u003c/em\u003e this is an internal interface, please don't write external code that\n depends on it.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Snap.Internal.Debug",
          "name": "Debug",
          "package": "snap-core",
          "source": "src/Snap-Internal-Debug.html",
          "type": "module"
        },
        "index": {
          "description": "An internal Snap module for optionally printing debugging messages Normally debug does nothing but if you set DEBUG in the environment you ll get debugging messages We use unsafePerformIO to make sure that the call to getEnv is only made once N.B this is an internal interface please don write external code that depends on it",
          "hierarchy": "Snap Internal Debug",
          "module": "Snap.Internal.Debug",
          "name": "Debug",
          "package": "snap-core",
          "partial": "Debug",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Internal-Debug.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Internal.Debug",
          "name": "debug",
          "package": "snap-core",
          "signature": "String -\u003e m ()",
          "source": "src/Snap-Internal-Debug.html#debug",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Internal Debug",
          "module": "Snap.Internal.Debug",
          "name": "debug",
          "normalized": "String-\u003ea()",
          "package": "snap-core",
          "signature": "String-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Internal-Debug.html#v:debug"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Internal.Debug",
          "name": "debugErrno",
          "package": "snap-core",
          "signature": "String -\u003e m ()",
          "source": "src/Snap-Internal-Debug.html#debugErrno",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Internal Debug",
          "module": "Snap.Internal.Debug",
          "name": "debugErrno",
          "normalized": "String-\u003ea()",
          "package": "snap-core",
          "partial": "Errno",
          "signature": "String-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Internal-Debug.html#v:debugErrno"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Internal.Debug",
          "name": "debugErrnoIgnore",
          "package": "snap-core",
          "signature": "String -\u003e m ()",
          "source": "src/Snap-Internal-Debug.html#debugErrnoIgnore",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Internal Debug",
          "module": "Snap.Internal.Debug",
          "name": "debugErrnoIgnore",
          "normalized": "String-\u003ea()",
          "package": "snap-core",
          "partial": "Errno Ignore",
          "signature": "String-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Internal-Debug.html#v:debugErrnoIgnore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Internal.Debug",
          "name": "debugIgnore",
          "package": "snap-core",
          "signature": "String -\u003e m ()",
          "source": "src/Snap-Internal-Debug.html#debugIgnore",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Internal Debug",
          "module": "Snap.Internal.Debug",
          "name": "debugIgnore",
          "normalized": "String-\u003ea()",
          "package": "snap-core",
          "partial": "Ignore",
          "signature": "String-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Internal-Debug.html#v:debugIgnore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAn internal Snap module containing the exception that escapes HTTP types.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eN.B.\u003c/em\u003e this is an internal interface, please don't write user code that\n depends on it. Interfaces subject to change etc etc etc.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Snap.Internal.Exceptions",
          "name": "Exceptions",
          "package": "snap-core",
          "source": "src/Snap-Internal-Exceptions.html",
          "type": "module"
        },
        "index": {
          "description": "An internal Snap module containing the exception that escapes HTTP types N.B this is an internal interface please don write user code that depends on it Interfaces subject to change etc etc etc",
          "hierarchy": "Snap Internal Exceptions",
          "module": "Snap.Internal.Exceptions",
          "name": "Exceptions",
          "package": "snap-core",
          "partial": "Exceptions",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Internal-Exceptions.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Internal.Exceptions",
          "name": "ConnectionTerminatedException",
          "package": "snap-core",
          "source": "src/Snap-Internal-Exceptions.html#ConnectionTerminatedException",
          "type": "data"
        },
        "index": {
          "hierarchy": "Snap Internal Exceptions",
          "module": "Snap.Internal.Exceptions",
          "name": "ConnectionTerminatedException",
          "package": "snap-core",
          "partial": "Connection Terminated Exception",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Internal-Exceptions.html#t:ConnectionTerminatedException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis exception is thrown if the handler chooses to escape regular HTTP\n traffic.\n\u003c/p\u003e",
          "module": "Snap.Internal.Exceptions",
          "name": "EscapeHttpException",
          "package": "snap-core",
          "source": "src/Snap-Internal-Exceptions.html#EscapeHttpException",
          "type": "data"
        },
        "index": {
          "description": "This exception is thrown if the handler chooses to escape regular HTTP traffic",
          "hierarchy": "Snap Internal Exceptions",
          "module": "Snap.Internal.Exceptions",
          "name": "EscapeHttpException",
          "package": "snap-core",
          "partial": "Escape Http Exception",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Internal-Exceptions.html#t:EscapeHttpException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Internal.Exceptions",
          "name": "EscapeHttpHandler",
          "package": "snap-core",
          "source": "src/Snap-Internal-Exceptions.html#EscapeHttpHandler",
          "type": "type"
        },
        "index": {
          "hierarchy": "Snap Internal Exceptions",
          "module": "Snap.Internal.Exceptions",
          "name": "EscapeHttpHandler",
          "package": "snap-core",
          "partial": "Escape Http Handler",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Internal-Exceptions.html#t:EscapeHttpHandler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn exception hierarchy for exceptions that cannot be caught by\n user-defined error handlers\n\u003c/p\u003e",
          "module": "Snap.Internal.Exceptions",
          "name": "UncatchableException",
          "package": "snap-core",
          "source": "src/Snap-Internal-Exceptions.html#UncatchableException",
          "type": "data"
        },
        "index": {
          "description": "An exception hierarchy for exceptions that cannot be caught by user-defined error handlers",
          "hierarchy": "Snap Internal Exceptions",
          "module": "Snap.Internal.Exceptions",
          "name": "UncatchableException",
          "package": "snap-core",
          "partial": "Uncatchable Exception",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Internal-Exceptions.html#t:UncatchableException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Internal.Exceptions",
          "name": "ConnectionTerminatedException",
          "package": "snap-core",
          "signature": "ConnectionTerminatedException SomeException",
          "source": "src/Snap-Internal-Exceptions.html#ConnectionTerminatedException",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Internal Exceptions",
          "module": "Snap.Internal.Exceptions",
          "name": "ConnectionTerminatedException",
          "package": "snap-core",
          "partial": "Connection Terminated Exception",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Internal-Exceptions.html#v:ConnectionTerminatedException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Internal.Exceptions",
          "name": "EscapeHttpException",
          "package": "snap-core",
          "signature": "EscapeHttpException EscapeHttpHandler",
          "source": "src/Snap-Internal-Exceptions.html#EscapeHttpException",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Internal Exceptions",
          "module": "Snap.Internal.Exceptions",
          "name": "EscapeHttpException",
          "package": "snap-core",
          "partial": "Escape Http Exception",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Internal-Exceptions.html#v:EscapeHttpException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Internal.Exceptions",
          "name": "UncatchableException",
          "package": "snap-core",
          "signature": "UncatchableException e",
          "source": "src/Snap-Internal-Exceptions.html#UncatchableException",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Internal Exceptions",
          "module": "Snap.Internal.Exceptions",
          "name": "UncatchableException",
          "package": "snap-core",
          "partial": "Uncatchable Exception",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Internal-Exceptions.html#v:UncatchableException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Internal.Exceptions",
          "name": "uncatchableExceptionFromException",
          "package": "snap-core",
          "signature": "SomeException -\u003e Maybe e",
          "source": "src/Snap-Internal-Exceptions.html#uncatchableExceptionFromException",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Internal Exceptions",
          "module": "Snap.Internal.Exceptions",
          "name": "uncatchableExceptionFromException",
          "normalized": "SomeException-\u003eMaybe a",
          "package": "snap-core",
          "partial": "Exception From Exception",
          "signature": "SomeException-\u003eMaybe e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Internal-Exceptions.html#v:uncatchableExceptionFromException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Internal.Exceptions",
          "name": "uncatchableExceptionToException",
          "package": "snap-core",
          "signature": "e -\u003e SomeException",
          "source": "src/Snap-Internal-Exceptions.html#uncatchableExceptionToException",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Internal Exceptions",
          "module": "Snap.Internal.Exceptions",
          "name": "uncatchableExceptionToException",
          "normalized": "a-\u003eSomeException",
          "package": "snap-core",
          "partial": "Exception To Exception",
          "signature": "e-\u003eSomeException",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Internal-Exceptions.html#v:uncatchableExceptionToException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAn internal Snap module containing HTTP types.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eN.B.\u003c/em\u003e this is an internal interface, please don't write user code that\n depends on it. Most of these declarations (except for the\n unsafe/encapsulation-breaking ones) are re-exported from \u003ca\u003eSnap.Core\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Snap.Internal.Http.Types",
          "name": "Types",
          "package": "snap-core",
          "source": "src/Snap-Internal-Http-Types.html",
          "type": "module"
        },
        "index": {
          "description": "An internal Snap module containing HTTP types N.B this is an internal interface please don write user code that depends on it Most of these declarations except for the unsafe encapsulation-breaking ones are re-exported from Snap.Core",
          "hierarchy": "Snap Internal Http Types",
          "module": "Snap.Internal.Http.Types",
          "name": "Types",
          "package": "snap-core",
          "partial": "Types",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Internal-Http-Types.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA datatype representing an HTTP cookie.\n\u003c/p\u003e",
          "module": "Snap.Internal.Http.Types",
          "name": "Cookie",
          "package": "snap-core",
          "source": "src/Snap-Internal-Http-Types.html#Cookie",
          "type": "data"
        },
        "index": {
          "description": "datatype representing an HTTP cookie",
          "hierarchy": "Snap Internal Http Types",
          "module": "Snap.Internal.Http.Types",
          "name": "Cookie",
          "package": "snap-core",
          "partial": "Cookie",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Internal-Http-Types.html#t:Cookie"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA typeclass for datatypes which contain HTTP headers.\n\u003c/p\u003e",
          "module": "Snap.Internal.Http.Types",
          "name": "HasHeaders",
          "package": "snap-core",
          "source": "src/Snap-Internal-Http-Types.html#HasHeaders",
          "type": "class"
        },
        "index": {
          "description": "typeclass for datatypes which contain HTTP headers",
          "hierarchy": "Snap Internal Http Types",
          "module": "Snap.Internal.Http.Types",
          "name": "HasHeaders",
          "package": "snap-core",
          "partial": "Has Headers",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Internal-Http-Types.html#t:HasHeaders"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Internal.Http.Types",
          "name": "HttpVersion",
          "package": "snap-core",
          "source": "src/Snap-Internal-Http-Types.html#HttpVersion",
          "type": "type"
        },
        "index": {
          "hierarchy": "Snap Internal Http Types",
          "module": "Snap.Internal.Http.Types",
          "name": "HttpVersion",
          "package": "snap-core",
          "partial": "Http Version",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Internal-Http-Types.html#t:HttpVersion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEnumerates the HTTP method values (see\n \u003ca\u003ehttp://tools.ietf.org/html/rfc2068.html#section-5.1.1\u003c/a\u003e).\n\u003c/p\u003e",
          "module": "Snap.Internal.Http.Types",
          "name": "Method",
          "package": "snap-core",
          "source": "src/Snap-Internal-Http-Types.html#Method",
          "type": "data"
        },
        "index": {
          "description": "Enumerates the HTTP method values see http tools.ietf.org html rfc2068.html section-5.1.1",
          "hierarchy": "Snap Internal Http Types",
          "module": "Snap.Internal.Http.Types",
          "name": "Method",
          "package": "snap-core",
          "partial": "Method",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Internal-Http-Types.html#t:Method"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type alias for the HTTP parameters mapping. Each parameter\n key maps to a list of ByteString values; if a parameter is specified\n multiple times (e.g.: \"\u003ccode\u003eGET /foo?param=bar1&param=bar2\u003c/code\u003e\"), looking up\n \"\u003ccode\u003eparam\u003c/code\u003e\" in the mapping will give you \u003ccode\u003e[\"bar1\", \"bar2\"]\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Snap.Internal.Http.Types",
          "name": "Params",
          "package": "snap-core",
          "source": "src/Snap-Internal-Http-Types.html#Params",
          "type": "type"
        },
        "index": {
          "description": "type alias for the HTTP parameters mapping Each parameter key maps to list of ByteString values if parameter is specified multiple times e.g GET foo param bar1 param bar2 looking up param in the mapping will give you bar1 bar2",
          "hierarchy": "Snap Internal Http Types",
          "module": "Snap.Internal.Http.Types",
          "name": "Params",
          "package": "snap-core",
          "partial": "Params",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Internal-Http-Types.html#t:Params"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eContains all of the information about an incoming HTTP request.\n\u003c/p\u003e",
          "module": "Snap.Internal.Http.Types",
          "name": "Request",
          "package": "snap-core",
          "source": "src/Snap-Internal-Http-Types.html#Request",
          "type": "data"
        },
        "index": {
          "description": "Contains all of the information about an incoming HTTP request",
          "hierarchy": "Snap Internal Http Types",
          "module": "Snap.Internal.Http.Types",
          "name": "Request",
          "package": "snap-core",
          "partial": "Request",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Internal-Http-Types.html#t:Request"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents an HTTP response.\n\u003c/p\u003e",
          "module": "Snap.Internal.Http.Types",
          "name": "Response",
          "package": "snap-core",
          "source": "src/Snap-Internal-Http-Types.html#Response",
          "type": "data"
        },
        "index": {
          "description": "Represents an HTTP response",
          "hierarchy": "Snap Internal Http Types",
          "module": "Snap.Internal.Http.Types",
          "name": "Response",
          "package": "snap-core",
          "partial": "Response",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Internal-Http-Types.html#t:Response"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Internal.Http.Types",
          "name": "ResponseBody",
          "package": "snap-core",
          "source": "src/Snap-Internal-Http-Types.html#ResponseBody",
          "type": "data"
        },
        "index": {
          "hierarchy": "Snap Internal Http Types",
          "module": "Snap.Internal.Http.Types",
          "name": "ResponseBody",
          "package": "snap-core",
          "partial": "Response Body",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Internal-Http-Types.html#t:ResponseBody"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn existential wrapper for the 'Enumerator ByteString IO a' type\n\u003c/p\u003e",
          "module": "Snap.Internal.Http.Types",
          "name": "SomeEnumerator",
          "package": "snap-core",
          "source": "src/Snap-Internal-Http-Types.html#SomeEnumerator",
          "type": "newtype"
        },
        "index": {
          "description": "An existential wrapper for the Enumerator ByteString IO type",
          "hierarchy": "Snap Internal Http Types",
          "module": "Snap.Internal.Http.Types",
          "name": "SomeEnumerator",
          "package": "snap-core",
          "partial": "Some Enumerator",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Internal-Http-Types.html#t:SomeEnumerator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eoutput body is a \u003ccode\u003e\u003ca\u003eBuilder\u003c/a\u003e\u003c/code\u003e enumerator\n\u003c/p\u003e",
          "module": "Snap.Internal.Http.Types",
          "name": "Enum",
          "package": "snap-core",
          "signature": "Enum (forall a.  Enumerator Builder IO a)",
          "source": "src/Snap-Internal-Http-Types.html#ResponseBody",
          "type": "function"
        },
        "index": {
          "description": "output body is Builder enumerator",
          "hierarchy": "Snap Internal Http Types",
          "module": "Snap.Internal.Http.Types",
          "name": "Enum",
          "package": "snap-core",
          "partial": "Enum",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Internal-Http-Types.html#v:Enum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Internal.Http.Types",
          "name": "Request",
          "package": "snap-core",
          "signature": "Request",
          "source": "src/Snap-Internal-Http-Types.html#Request",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Internal Http Types",
          "module": "Snap.Internal.Http.Types",
          "name": "Request",
          "package": "snap-core",
          "partial": "Request",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Internal-Http-Types.html#v:Request"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Internal.Http.Types",
          "name": "Response",
          "package": "snap-core",
          "signature": "Response",
          "source": "src/Snap-Internal-Http-Types.html#Response",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Internal Http Types",
          "module": "Snap.Internal.Http.Types",
          "name": "Response",
          "package": "snap-core",
          "partial": "Response",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Internal-Http-Types.html#v:Response"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eoutput body is sendfile(), optional second argument\n   is a byte range to send\n\u003c/p\u003e",
          "module": "Snap.Internal.Http.Types",
          "name": "SendFile",
          "package": "snap-core",
          "signature": "SendFile FilePath (Maybe (Int64, Int64))",
          "source": "src/Snap-Internal-Http-Types.html#ResponseBody",
          "type": "function"
        },
        "index": {
          "description": "output body is sendfile optional second argument is byte range to send",
          "hierarchy": "Snap Internal Http Types",
          "module": "Snap.Internal.Http.Types",
          "name": "SendFile",
          "normalized": "SendFile FilePath(Maybe(Int,Int))",
          "package": "snap-core",
          "partial": "Send File",
          "signature": "SendFile FilePath(Maybe(Int,Int))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Internal-Http-Types.html#v:SendFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Internal.Http.Types",
          "name": "c_format_http_time",
          "package": "snap-core",
          "signature": "CTime -\u003e CString -\u003e IO ()",
          "source": "src/Snap-Internal-Http-Types.html#c_format_http_time",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Internal Http Types",
          "module": "Snap.Internal.Http.Types",
          "name": "c_format_http_time",
          "normalized": "CTime-\u003eCString-\u003eIO()",
          "package": "snap-core",
          "signature": "CTime-\u003eCString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Internal-Http-Types.html#v:c_format_http_time"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Internal.Http.Types",
          "name": "c_format_log_time",
          "package": "snap-core",
          "signature": "CTime -\u003e CString -\u003e IO ()",
          "source": "src/Snap-Internal-Http-Types.html#c_format_log_time",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Internal Http Types",
          "module": "Snap.Internal.Http.Types",
          "name": "c_format_log_time",
          "normalized": "CTime-\u003eCString-\u003eIO()",
          "package": "snap-core",
          "signature": "CTime-\u003eCString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Internal-Http-Types.html#v:c_format_log_time"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Internal.Http.Types",
          "name": "c_parse_http_time",
          "package": "snap-core",
          "signature": "CString -\u003e IO CTime",
          "source": "src/Snap-Internal-Http-Types.html#c_parse_http_time",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Internal Http Types",
          "module": "Snap.Internal.Http.Types",
          "name": "c_parse_http_time",
          "normalized": "CString-\u003eIO CTime",
          "package": "snap-core",
          "signature": "CString-\u003eIO CTime",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Internal-Http-Types.html#v:c_parse_http_time"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts a \u003ccode\u003e\u003ca\u003eCTime\u003c/a\u003e\u003c/code\u003e into common log entry format.\n\u003c/p\u003e",
          "module": "Snap.Internal.Http.Types",
          "name": "formatLogTime",
          "package": "snap-core",
          "signature": "CTime -\u003e IO ByteString",
          "source": "src/Snap-Internal-Http-Types.html#formatLogTime",
          "type": "function"
        },
        "index": {
          "description": "Converts CTime into common log entry format",
          "hierarchy": "Snap Internal Http Types",
          "module": "Snap.Internal.Http.Types",
          "name": "formatLogTime",
          "normalized": "CTime-\u003eIO ByteString",
          "package": "snap-core",
          "partial": "Log Time",
          "signature": "CTime-\u003eIO ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Internal-Http-Types.html#v:formatLogTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Internal.Http.Types",
          "name": "fromStr",
          "package": "snap-core",
          "signature": "String -\u003e ByteString",
          "source": "src/Snap-Internal-Http-Types.html#fromStr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Internal Http Types",
          "module": "Snap.Internal.Http.Types",
          "name": "fromStr",
          "normalized": "String-\u003eByteString",
          "package": "snap-core",
          "partial": "Str",
          "signature": "String-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Internal-Http-Types.html#v:fromStr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrieve the headers from a datatype that has headers.\n\u003c/p\u003e",
          "module": "Snap.Internal.Http.Types",
          "name": "headers",
          "package": "snap-core",
          "signature": "a -\u003e Headers",
          "source": "src/Snap-Internal-Http-Types.html#headers",
          "type": "method"
        },
        "index": {
          "description": "Retrieve the headers from datatype that has headers",
          "hierarchy": "Snap Internal Http Types",
          "module": "Snap.Internal.Http.Types",
          "name": "headers",
          "normalized": "a-\u003eHeaders",
          "package": "snap-core",
          "signature": "a-\u003eHeaders",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Internal-Http-Types.html#v:headers"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Internal.Http.Types",
          "name": "rqBody",
          "package": "snap-core",
          "signature": "(IORef SomeEnumerator)",
          "source": "src/Snap-Internal-Http-Types.html#Request",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Internal Http Types",
          "module": "Snap.Internal.Http.Types",
          "name": "rqBody",
          "package": "snap-core",
          "partial": "Body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Internal-Http-Types.html#v:rqBody"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the \u003ccode\u003eContent-Length\u003c/code\u003e of the HTTP request body.\n\u003c/p\u003e",
          "module": "Snap.Internal.Http.Types",
          "name": "rqContentLength",
          "package": "snap-core",
          "signature": "(Maybe Int)",
          "source": "src/Snap-Internal-Http-Types.html#Request",
          "type": "function"
        },
        "index": {
          "description": "Returns the Content-Length of the HTTP request body",
          "hierarchy": "Snap Internal Http Types",
          "module": "Snap.Internal.Http.Types",
          "name": "rqContentLength",
          "package": "snap-core",
          "partial": "Content Length",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Internal-Http-Types.html#v:rqContentLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \"context path\" of the request; catenating \u003ccode\u003e\u003ca\u003erqContextPath\u003c/a\u003e\u003c/code\u003e,\n and \u003ccode\u003e\u003ca\u003erqPathInfo\u003c/a\u003e\u003c/code\u003e should get you back to the original \u003ccode\u003e\u003ca\u003erqURI\u003c/a\u003e\u003c/code\u003e\n (ignoring query strings). The \u003ccode\u003e\u003ca\u003erqContextPath\u003c/a\u003e\u003c/code\u003e always begins and ends\n with a slash (\u003ccode\u003e\"/\"\u003c/code\u003e) character, and represents the path (relative\n to your component/snaplet) you took to get to your handler.\n\u003c/p\u003e",
          "module": "Snap.Internal.Http.Types",
          "name": "rqContextPath",
          "package": "snap-core",
          "signature": "ByteString",
          "source": "src/Snap-Internal-Http-Types.html#Request",
          "type": "function"
        },
        "index": {
          "description": "The context path of the request catenating rqContextPath and rqPathInfo should get you back to the original rqURI ignoring query strings The rqContextPath always begins and ends with slash character and represents the path relative to your component snaplet you took to get to your handler",
          "hierarchy": "Snap Internal Http Types",
          "module": "Snap.Internal.Http.Types",
          "name": "rqContextPath",
          "package": "snap-core",
          "partial": "Context Path",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Internal-Http-Types.html#v:rqContextPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns a list of the cookies that came in from the HTTP request\n headers.\n\u003c/p\u003e",
          "module": "Snap.Internal.Http.Types",
          "name": "rqCookies",
          "package": "snap-core",
          "signature": "[Cookie]",
          "source": "src/Snap-Internal-Http-Types.html#Request",
          "type": "function"
        },
        "index": {
          "description": "Returns list of the cookies that came in from the HTTP request headers",
          "hierarchy": "Snap Internal Http Types",
          "module": "Snap.Internal.Http.Types",
          "name": "rqCookies",
          "normalized": "[Cookie]",
          "package": "snap-core",
          "partial": "Cookies",
          "signature": "[Cookie]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Internal-Http-Types.html#v:rqCookies"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Internal.Http.Types",
          "name": "rqHeaders",
          "package": "snap-core",
          "signature": "Headers",
          "source": "src/Snap-Internal-Http-Types.html#Request",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Internal Http Types",
          "module": "Snap.Internal.Http.Types",
          "name": "rqHeaders",
          "package": "snap-core",
          "partial": "Headers",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Internal-Http-Types.html#v:rqHeaders"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns \u003ccode\u003eTrue\u003c/code\u003e if this is an \u003ccode\u003eHTTPS\u003c/code\u003e session.\n\u003c/p\u003e",
          "module": "Snap.Internal.Http.Types",
          "name": "rqIsSecure",
          "package": "snap-core",
          "signature": "Bool",
          "source": "src/Snap-Internal-Http-Types.html#Request",
          "type": "function"
        },
        "index": {
          "description": "Returns True if this is an HTTPS session",
          "hierarchy": "Snap Internal Http Types",
          "module": "Snap.Internal.Http.Types",
          "name": "rqIsSecure",
          "package": "snap-core",
          "partial": "Is Secure",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Internal-Http-Types.html#v:rqIsSecure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe local IP address for this request.\n\u003c/p\u003e",
          "module": "Snap.Internal.Http.Types",
          "name": "rqLocalAddr",
          "package": "snap-core",
          "signature": "ByteString",
          "source": "src/Snap-Internal-Http-Types.html#Request",
          "type": "function"
        },
        "index": {
          "description": "The local IP address for this request",
          "hierarchy": "Snap Internal Http Types",
          "module": "Snap.Internal.Http.Types",
          "name": "rqLocalAddr",
          "package": "snap-core",
          "partial": "Local Addr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Internal-Http-Types.html#v:rqLocalAddr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the HTTP server's idea of its local hostname.\n\u003c/p\u003e",
          "module": "Snap.Internal.Http.Types",
          "name": "rqLocalHostname",
          "package": "snap-core",
          "signature": "ByteString",
          "source": "src/Snap-Internal-Http-Types.html#Request",
          "type": "function"
        },
        "index": {
          "description": "Returns the HTTP server idea of its local hostname",
          "hierarchy": "Snap Internal Http Types",
          "module": "Snap.Internal.Http.Types",
          "name": "rqLocalHostname",
          "package": "snap-core",
          "partial": "Local Hostname",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Internal-Http-Types.html#v:rqLocalHostname"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the port number the HTTP server is listening on.\n\u003c/p\u003e",
          "module": "Snap.Internal.Http.Types",
          "name": "rqLocalPort",
          "package": "snap-core",
          "signature": "Int",
          "source": "src/Snap-Internal-Http-Types.html#Request",
          "type": "function"
        },
        "index": {
          "description": "Returns the port number the HTTP server is listening on",
          "hierarchy": "Snap Internal Http Types",
          "module": "Snap.Internal.Http.Types",
          "name": "rqLocalPort",
          "package": "snap-core",
          "partial": "Local Port",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Internal-Http-Types.html#v:rqLocalPort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the HTTP request method.\n\u003c/p\u003e",
          "module": "Snap.Internal.Http.Types",
          "name": "rqMethod",
          "package": "snap-core",
          "signature": "Method",
          "source": "src/Snap-Internal-Http-Types.html#Request",
          "type": "function"
        },
        "index": {
          "description": "Returns the HTTP request method",
          "hierarchy": "Snap Internal Http Types",
          "module": "Snap.Internal.Http.Types",
          "name": "rqMethod",
          "package": "snap-core",
          "partial": "Method",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Internal-Http-Types.html#v:rqMethod"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the parameters mapping for this \u003ccode\u003e\u003ca\u003eRequest\u003c/a\u003e\u003c/code\u003e. \"Parameters\"\n are automatically decoded from the URI's query string and \u003ccode\u003ePOST\u003c/code\u003e body\n and entered into this mapping. The \u003ccode\u003e\u003ca\u003erqParams\u003c/a\u003e\u003c/code\u003e value is thus a union of\n \u003ccode\u003e\u003ca\u003erqQueryParams\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003erqPostParams\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Snap.Internal.Http.Types",
          "name": "rqParams",
          "package": "snap-core",
          "signature": "Params",
          "source": "src/Snap-Internal-Http-Types.html#Request",
          "type": "function"
        },
        "index": {
          "description": "Returns the parameters mapping for this Request Parameters are automatically decoded from the URI query string and POST body and entered into this mapping The rqParams value is thus union of rqQueryParams and rqPostParams",
          "hierarchy": "Snap Internal Http Types",
          "module": "Snap.Internal.Http.Types",
          "name": "rqParams",
          "package": "snap-core",
          "partial": "Params",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Internal-Http-Types.html#v:rqParams"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHandlers can be hung on a \u003ccode\u003eURI\u003c/code\u003e \"entry point\"; this is called the\n \"context path\". If a handler is hung on the context path\n \u003ccode\u003e\"/foo/\"\u003c/code\u003e, and you request \u003ccode\u003e\"/foo/bar\"\u003c/code\u003e, the value of\n \u003ccode\u003e\u003ca\u003erqPathInfo\u003c/a\u003e\u003c/code\u003e will be \u003ccode\u003e\"bar\"\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe following identity holds:\n\u003c/p\u003e\u003cpre\u003e rqURI r == S.concat [ rqContextPath r\n                     , rqPathInfo r\n                     , let q = rqQueryString r\n                       in if S.null q\n                            then \"\"\n                            else S.append \"?\" q\n                     ]\n\u003c/pre\u003e",
          "module": "Snap.Internal.Http.Types",
          "name": "rqPathInfo",
          "package": "snap-core",
          "signature": "ByteString",
          "source": "src/Snap-Internal-Http-Types.html#Request",
          "type": "function"
        },
        "index": {
          "description": "Handlers can be hung on URI entry point this is called the context path If handler is hung on the context path foo and you request foo bar the value of rqPathInfo will be bar The following identity holds rqURI S.concat rqContextPath rqPathInfo let rqQueryString in if S.null then else S.append",
          "hierarchy": "Snap Internal Http Types",
          "module": "Snap.Internal.Http.Types",
          "name": "rqPathInfo",
          "package": "snap-core",
          "partial": "Path Info",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Internal-Http-Types.html#v:rqPathInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe parameter mapping decoded from the POST body. Note that Snap\n only auto-decodes POST request bodies when the request's\n \u003ccode\u003eContent-Type\u003c/code\u003e is \u003ccode\u003eapplication/x-www-form-urlencoded\u003c/code\u003e.\n For \u003ccode\u003emultipart/form-data\u003c/code\u003e use \u003ccode\u003e\u003ca\u003ehandleFileUploads\u003c/a\u003e\u003c/code\u003e\n to decode the POST request and fill this mapping.\n\u003c/p\u003e",
          "module": "Snap.Internal.Http.Types",
          "name": "rqPostParams",
          "package": "snap-core",
          "signature": "Params",
          "source": "src/Snap-Internal-Http-Types.html#Request",
          "type": "function"
        },
        "index": {
          "description": "The parameter mapping decoded from the POST body Note that Snap only auto-decodes POST request bodies when the request Content-Type is application x-www-form-urlencoded For multipart form-data use handleFileUploads to decode the POST request and fill this mapping",
          "hierarchy": "Snap Internal Http Types",
          "module": "Snap.Internal.Http.Types",
          "name": "rqPostParams",
          "package": "snap-core",
          "partial": "Post Params",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Internal-Http-Types.html#v:rqPostParams"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe parameter mapping decoded from the URI's query string.\n\u003c/p\u003e",
          "module": "Snap.Internal.Http.Types",
          "name": "rqQueryParams",
          "package": "snap-core",
          "signature": "Params",
          "source": "src/Snap-Internal-Http-Types.html#Request",
          "type": "function"
        },
        "index": {
          "description": "The parameter mapping decoded from the URI query string",
          "hierarchy": "Snap Internal Http Types",
          "module": "Snap.Internal.Http.Types",
          "name": "rqQueryParams",
          "package": "snap-core",
          "partial": "Query Params",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Internal-Http-Types.html#v:rqQueryParams"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the HTTP query string for this \u003ccode\u003e\u003ca\u003eRequest\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Snap.Internal.Http.Types",
          "name": "rqQueryString",
          "package": "snap-core",
          "signature": "ByteString",
          "source": "src/Snap-Internal-Http-Types.html#Request",
          "type": "function"
        },
        "index": {
          "description": "Returns the HTTP query string for this Request",
          "hierarchy": "Snap Internal Http Types",
          "module": "Snap.Internal.Http.Types",
          "name": "rqQueryString",
          "package": "snap-core",
          "partial": "Query String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Internal-Http-Types.html#v:rqQueryString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe remote IP address.\n\u003c/p\u003e",
          "module": "Snap.Internal.Http.Types",
          "name": "rqRemoteAddr",
          "package": "snap-core",
          "signature": "ByteString",
          "source": "src/Snap-Internal-Http-Types.html#Request",
          "type": "function"
        },
        "index": {
          "description": "The remote IP address",
          "hierarchy": "Snap Internal Http Types",
          "module": "Snap.Internal.Http.Types",
          "name": "rqRemoteAddr",
          "package": "snap-core",
          "partial": "Remote Addr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Internal-Http-Types.html#v:rqRemoteAddr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe remote TCP port number.\n\u003c/p\u003e",
          "module": "Snap.Internal.Http.Types",
          "name": "rqRemotePort",
          "package": "snap-core",
          "signature": "Int",
          "source": "src/Snap-Internal-Http-Types.html#Request",
          "type": "function"
        },
        "index": {
          "description": "The remote TCP port number",
          "hierarchy": "Snap Internal Http Types",
          "module": "Snap.Internal.Http.Types",
          "name": "rqRemotePort",
          "package": "snap-core",
          "partial": "Remote Port",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Internal-Http-Types.html#v:rqRemotePort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe server name of the request, as it came in from the request's\n \u003ccode\u003eHost:\u003c/code\u003e header.\n\u003c/p\u003e",
          "module": "Snap.Internal.Http.Types",
          "name": "rqServerName",
          "package": "snap-core",
          "signature": "ByteString",
          "source": "src/Snap-Internal-Http-Types.html#Request",
          "type": "function"
        },
        "index": {
          "description": "The server name of the request as it came in from the request Host header",
          "hierarchy": "Snap Internal Http Types",
          "module": "Snap.Internal.Http.Types",
          "name": "rqServerName",
          "package": "snap-core",
          "partial": "Server Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Internal-Http-Types.html#v:rqServerName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the port number the HTTP server is listening on.\n\u003c/p\u003e",
          "module": "Snap.Internal.Http.Types",
          "name": "rqServerPort",
          "package": "snap-core",
          "signature": "Int",
          "source": "src/Snap-Internal-Http-Types.html#Request",
          "type": "function"
        },
        "index": {
          "description": "Returns the port number the HTTP server is listening on",
          "hierarchy": "Snap Internal Http Types",
          "module": "Snap.Internal.Http.Types",
          "name": "rqServerPort",
          "package": "snap-core",
          "partial": "Server Port",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Internal-Http-Types.html#v:rqServerPort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the \u003ccode\u003eURI\u003c/code\u003e requested by the client.\n\u003c/p\u003e",
          "module": "Snap.Internal.Http.Types",
          "name": "rqURI",
          "package": "snap-core",
          "signature": "ByteString",
          "source": "src/Snap-Internal-Http-Types.html#Request",
          "type": "function"
        },
        "index": {
          "description": "Returns the URI requested by the client",
          "hierarchy": "Snap Internal Http Types",
          "module": "Snap.Internal.Http.Types",
          "name": "rqURI",
          "package": "snap-core",
          "partial": "URI",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Internal-Http-Types.html#v:rqURI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the HTTP version used by the client.\n\u003c/p\u003e",
          "module": "Snap.Internal.Http.Types",
          "name": "rqVersion",
          "package": "snap-core",
          "signature": "HttpVersion",
          "source": "src/Snap-Internal-Http-Types.html#Request",
          "type": "function"
        },
        "index": {
          "description": "Returns the HTTP version used by the client",
          "hierarchy": "Snap Internal Http Types",
          "module": "Snap.Internal.Http.Types",
          "name": "rqVersion",
          "package": "snap-core",
          "partial": "Version",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Internal-Http-Types.html#v:rqVersion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Internal.Http.Types",
          "name": "rspBody",
          "package": "snap-core",
          "signature": "ResponseBody",
          "source": "src/Snap-Internal-Http-Types.html#Response",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Internal Http Types",
          "module": "Snap.Internal.Http.Types",
          "name": "rspBody",
          "package": "snap-core",
          "partial": "Body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Internal-Http-Types.html#v:rspBody"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Internal.Http.Types",
          "name": "rspBodyMap",
          "package": "snap-core",
          "signature": "(forall a.  Enumerator Builder IO a -\u003e Enumerator Builder IO a) -\u003e ResponseBody -\u003e ResponseBody",
          "source": "src/Snap-Internal-Http-Types.html#rspBodyMap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Internal Http Types",
          "module": "Snap.Internal.Http.Types",
          "name": "rspBodyMap",
          "normalized": "(a b Enumerator Builder IO c-\u003eEnumerator Builder IO c)-\u003eResponseBody-\u003eResponseBody",
          "package": "snap-core",
          "partial": "Body Map",
          "signature": "(forall a. Enumerator Builder IO a-\u003eEnumerator Builder IO a)-\u003eResponseBody-\u003eResponseBody",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Internal-Http-Types.html#v:rspBodyMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Internal.Http.Types",
          "name": "rspBodyToEnum",
          "package": "snap-core",
          "signature": "ResponseBody -\u003e Enumerator Builder IO a",
          "source": "src/Snap-Internal-Http-Types.html#rspBodyToEnum",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Internal Http Types",
          "module": "Snap.Internal.Http.Types",
          "name": "rspBodyToEnum",
          "normalized": "ResponseBody-\u003eEnumerator Builder IO a",
          "package": "snap-core",
          "partial": "Body To Enum",
          "signature": "ResponseBody-\u003eEnumerator Builder IO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Internal-Http-Types.html#v:rspBodyToEnum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWe will need to inspect the content length no matter what, and\n   looking up \"content-length\" in the headers and parsing the number\n   out of the text will be too expensive.\n\u003c/p\u003e",
          "module": "Snap.Internal.Http.Types",
          "name": "rspContentLength",
          "package": "snap-core",
          "signature": "(Maybe Int64)",
          "source": "src/Snap-Internal-Http-Types.html#Response",
          "type": "function"
        },
        "index": {
          "description": "We will need to inspect the content length no matter what and looking up content-length in the headers and parsing the number out of the text will be too expensive",
          "hierarchy": "Snap Internal Http Types",
          "module": "Snap.Internal.Http.Types",
          "name": "rspContentLength",
          "package": "snap-core",
          "partial": "Content Length",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Internal-Http-Types.html#v:rspContentLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Internal.Http.Types",
          "name": "rspCookies",
          "package": "snap-core",
          "signature": "Map ByteString Cookie",
          "source": "src/Snap-Internal-Http-Types.html#Response",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Internal Http Types",
          "module": "Snap.Internal.Http.Types",
          "name": "rspCookies",
          "package": "snap-core",
          "partial": "Cookies",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Internal-Http-Types.html#v:rspCookies"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Internal.Http.Types",
          "name": "rspHeaders",
          "package": "snap-core",
          "signature": "Headers",
          "source": "src/Snap-Internal-Http-Types.html#Response",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Internal Http Types",
          "module": "Snap.Internal.Http.Types",
          "name": "rspHeaders",
          "package": "snap-core",
          "partial": "Headers",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Internal-Http-Types.html#v:rspHeaders"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Internal.Http.Types",
          "name": "rspHttpVersion",
          "package": "snap-core",
          "signature": "HttpVersion",
          "source": "src/Snap-Internal-Http-Types.html#Response",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Internal Http Types",
          "module": "Snap.Internal.Http.Types",
          "name": "rspHttpVersion",
          "package": "snap-core",
          "partial": "Http Version",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Internal-Http-Types.html#v:rspHttpVersion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eControls whether Snap will buffer the output or not. You may wish to\n disable buffering when using Comet-like techniques which rely on the\n immediate sending of output data in order to maintain interactive\n semantics.\n\u003c/p\u003e",
          "module": "Snap.Internal.Http.Types",
          "name": "rspOutputBuffering",
          "package": "snap-core",
          "signature": "Bool",
          "source": "src/Snap-Internal-Http-Types.html#Response",
          "type": "function"
        },
        "index": {
          "description": "Controls whether Snap will buffer the output or not You may wish to disable buffering when using Comet-like techniques which rely on the immediate sending of output data in order to maintain interactive semantics",
          "hierarchy": "Snap Internal Http Types",
          "module": "Snap.Internal.Http.Types",
          "name": "rspOutputBuffering",
          "package": "snap-core",
          "partial": "Output Buffering",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Internal-Http-Types.html#v:rspOutputBuffering"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the HTTP status code.\n\u003c/p\u003e",
          "module": "Snap.Internal.Http.Types",
          "name": "rspStatus",
          "package": "snap-core",
          "signature": "Int",
          "source": "src/Snap-Internal-Http-Types.html#Response",
          "type": "function"
        },
        "index": {
          "description": "Returns the HTTP status code",
          "hierarchy": "Snap Internal Http Types",
          "module": "Snap.Internal.Http.Types",
          "name": "rspStatus",
          "package": "snap-core",
          "partial": "Status",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Internal-Http-Types.html#v:rspStatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the HTTP status explanation string.\n\u003c/p\u003e",
          "module": "Snap.Internal.Http.Types",
          "name": "rspStatusReason",
          "package": "snap-core",
          "signature": "ByteString",
          "source": "src/Snap-Internal-Http-Types.html#Response",
          "type": "function"
        },
        "index": {
          "description": "Returns the HTTP status explanation string",
          "hierarchy": "Snap Internal Http Types",
          "module": "Snap.Internal.Http.Types",
          "name": "rspStatusReason",
          "package": "snap-core",
          "partial": "Status Reason",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Internal-Http-Types.html#v:rspStatusReason"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf true, we are transforming the request body with\n \u003ccode\u003etransformRequestBody\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Snap.Internal.Http.Types",
          "name": "rspTransformingRqBody",
          "package": "snap-core",
          "signature": "Bool",
          "source": "src/Snap-Internal-Http-Types.html#Response",
          "type": "function"
        },
        "index": {
          "description": "If true we are transforming the request body with transformRequestBody",
          "hierarchy": "Snap Internal Http Types",
          "module": "Snap.Internal.Http.Types",
          "name": "rspTransformingRqBody",
          "package": "snap-core",
          "partial": "Transforming Rq Body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Internal-Http-Types.html#v:rspTransformingRqBody"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Internal.Http.Types",
          "name": "set_c_locale",
          "package": "snap-core",
          "signature": "IO ()",
          "source": "src/Snap-Internal-Http-Types.html#set_c_locale",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Internal Http Types",
          "module": "Snap.Internal.Http.Types",
          "name": "set_c_locale",
          "normalized": "IO()",
          "package": "snap-core",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Internal-Http-Types.html#v:set_c_locale"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Internal.Http.Types",
          "name": "statusReasonMap",
          "package": "snap-core",
          "signature": "IntMap ByteString",
          "source": "src/Snap-Internal-Http-Types.html#statusReasonMap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Internal Http Types",
          "module": "Snap.Internal.Http.Types",
          "name": "statusReasonMap",
          "package": "snap-core",
          "partial": "Reason Map",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Internal-Http-Types.html#v:statusReasonMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Internal.Http.Types",
          "name": "toStr",
          "package": "snap-core",
          "signature": "ByteString -\u003e String",
          "source": "src/Snap-Internal-Http-Types.html#toStr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Internal Http Types",
          "module": "Snap.Internal.Http.Types",
          "name": "toStr",
          "normalized": "ByteString-\u003eString",
          "package": "snap-core",
          "partial": "Str",
          "signature": "ByteString-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Internal-Http-Types.html#v:toStr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eModify the datatype's headers.\n\u003c/p\u003e",
          "module": "Snap.Internal.Http.Types",
          "name": "updateHeaders",
          "package": "snap-core",
          "signature": "(Headers -\u003e Headers) -\u003e a -\u003e a",
          "source": "src/Snap-Internal-Http-Types.html#updateHeaders",
          "type": "method"
        },
        "index": {
          "description": "Modify the datatype headers",
          "hierarchy": "Snap Internal Http Types",
          "module": "Snap.Internal.Http.Types",
          "name": "updateHeaders",
          "normalized": "(Headers-\u003eHeaders)-\u003ea-\u003ea",
          "package": "snap-core",
          "partial": "Headers",
          "signature": "(Headers-\u003eHeaders)-\u003ea-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Internal-Http-Types.html#v:updateHeaders"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAn internal Snap module for debugging iteratees.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eN.B.\u003c/em\u003e this is an internal interface, please don't write user code that\n depends on it.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Snap.Internal.Iteratee.Debug",
          "name": "Debug",
          "package": "snap-core",
          "source": "src/Snap-Internal-Iteratee-Debug.html",
          "type": "module"
        },
        "index": {
          "description": "An internal Snap module for debugging iteratees N.B this is an internal interface please don write user code that depends on it",
          "hierarchy": "Snap Internal Iteratee Debug",
          "module": "Snap.Internal.Iteratee.Debug",
          "name": "Debug",
          "package": "snap-core",
          "partial": "Debug",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Internal-Iteratee-Debug.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Internal.Iteratee.Debug",
          "name": "debugIteratee",
          "package": "snap-core",
          "signature": "Iteratee ByteString IO ()",
          "source": "src/Snap-Internal-Iteratee-Debug.html#debugIteratee",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Internal Iteratee Debug",
          "module": "Snap.Internal.Iteratee.Debug",
          "name": "debugIteratee",
          "normalized": "Iteratee ByteString IO()",
          "package": "snap-core",
          "partial": "Iteratee",
          "signature": "Iteratee ByteString IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Internal-Iteratee-Debug.html#v:debugIteratee"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Internal.Iteratee.Debug",
          "name": "iterateeDebugWrapper",
          "package": "snap-core",
          "signature": "String -\u003e Iteratee a m b -\u003e Iteratee a m b",
          "source": "src/Snap-Internal-Iteratee-Debug.html#iterateeDebugWrapper",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Internal Iteratee Debug",
          "module": "Snap.Internal.Iteratee.Debug",
          "name": "iterateeDebugWrapper",
          "normalized": "String-\u003eIteratee a b c-\u003eIteratee a b c",
          "package": "snap-core",
          "partial": "Debug Wrapper",
          "signature": "String-\u003eIteratee a m b-\u003eIteratee a m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Internal-Iteratee-Debug.html#v:iterateeDebugWrapper"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Internal.Iteratee.Debug",
          "name": "iterateeDebugWrapperWith",
          "package": "snap-core",
          "signature": "(s -\u003e String) -\u003e String -\u003e Iteratee s m a -\u003e Iteratee s m a",
          "source": "src/Snap-Internal-Iteratee-Debug.html#iterateeDebugWrapperWith",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Internal Iteratee Debug",
          "module": "Snap.Internal.Iteratee.Debug",
          "name": "iterateeDebugWrapperWith",
          "normalized": "(a-\u003eString)-\u003eString-\u003eIteratee a b c-\u003eIteratee a b c",
          "package": "snap-core",
          "partial": "Debug Wrapper With",
          "signature": "(s-\u003eString)-\u003eString-\u003eIteratee s m a-\u003eIteratee s m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Internal-Iteratee-Debug.html#v:iterateeDebugWrapperWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Internal.Iteratee.Debug",
          "name": "showBuilder",
          "package": "snap-core",
          "signature": "Builder -\u003e String",
          "source": "src/Snap-Internal-Iteratee-Debug.html#showBuilder",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Internal Iteratee Debug",
          "module": "Snap.Internal.Iteratee.Debug",
          "name": "showBuilder",
          "normalized": "Builder-\u003eString",
          "package": "snap-core",
          "partial": "Builder",
          "signature": "Builder-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Internal-Iteratee-Debug.html#v:showBuilder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Internal.Parsing",
          "name": "Parsing",
          "package": "snap-core",
          "source": "src/Snap-Internal-Parsing.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Snap Internal Parsing",
          "module": "Snap.Internal.Parsing",
          "name": "Parsing",
          "package": "snap-core",
          "partial": "Parsing",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Internal-Parsing.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Internal.Parsing",
          "name": "DList",
          "package": "snap-core",
          "source": "src/Snap-Internal-Parsing.html#DList",
          "type": "type"
        },
        "index": {
          "hierarchy": "Snap Internal Parsing",
          "module": "Snap.Internal.Parsing",
          "name": "DList",
          "package": "snap-core",
          "partial": "DList",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Internal-Parsing.html#t:DList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Internal.Parsing",
          "name": "crlf",
          "package": "snap-core",
          "signature": "Parser ByteString",
          "source": "src/Snap-Internal-Parsing.html#crlf",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Internal Parsing",
          "module": "Snap.Internal.Parsing",
          "name": "crlf",
          "package": "snap-core",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Internal-Parsing.html#v:crlf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParsers for different tokens in an HTTP request.\n\u003c/p\u003e",
          "module": "Snap.Internal.Parsing",
          "name": "digit",
          "package": "snap-core",
          "signature": "Parser Char",
          "source": "src/Snap-Internal-Parsing.html#digit",
          "type": "function"
        },
        "index": {
          "description": "Parsers for different tokens in an HTTP request",
          "hierarchy": "Snap Internal Parsing",
          "module": "Snap.Internal.Parsing",
          "name": "digit",
          "package": "snap-core",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Internal-Parsing.html#v:digit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Internal.Parsing",
          "name": "fieldCharSet",
          "package": "snap-core",
          "signature": "FastSet",
          "source": "src/Snap-Internal-Parsing.html#fieldCharSet",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Internal Parsing",
          "module": "Snap.Internal.Parsing",
          "name": "fieldCharSet",
          "package": "snap-core",
          "partial": "Char Set",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Internal-Parsing.html#v:fieldCharSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Internal.Parsing",
          "name": "fieldChars",
          "package": "snap-core",
          "signature": "Parser ByteString",
          "source": "src/Snap-Internal-Parsing.html#fieldChars",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Internal Parsing",
          "module": "Snap.Internal.Parsing",
          "name": "fieldChars",
          "package": "snap-core",
          "partial": "Chars",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Internal-Parsing.html#v:fieldChars"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Internal.Parsing",
          "name": "finish",
          "package": "snap-core",
          "signature": "Result a -\u003e Result a",
          "source": "src/Snap-Internal-Parsing.html#finish",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Internal Parsing",
          "module": "Snap.Internal.Parsing",
          "name": "finish",
          "normalized": "Result a-\u003eResult a",
          "package": "snap-core",
          "signature": "Result a-\u003eResult a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Internal-Parsing.html#v:finish"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Internal.Parsing",
          "name": "fullyParse",
          "package": "snap-core",
          "signature": "ByteString -\u003e Parser a -\u003e Either String a",
          "source": "src/Snap-Internal-Parsing.html#fullyParse",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Internal Parsing",
          "module": "Snap.Internal.Parsing",
          "name": "fullyParse",
          "normalized": "ByteString-\u003eParser a-\u003eEither String a",
          "package": "snap-core",
          "partial": "Parse",
          "signature": "ByteString-\u003eParser a-\u003eEither String a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Internal-Parsing.html#v:fullyParse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Internal.Parsing",
          "name": "generateFS",
          "package": "snap-core",
          "signature": "(Word8 -\u003e Bool) -\u003e FastSet",
          "source": "src/Snap-Internal-Parsing.html#generateFS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Internal Parsing",
          "module": "Snap.Internal.Parsing",
          "name": "generateFS",
          "normalized": "(Word-\u003eBool)-\u003eFastSet",
          "package": "snap-core",
          "partial": "FS",
          "signature": "(Word-\u003eBool)-\u003eFastSet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Internal-Parsing.html#v:generateFS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Internal.Parsing",
          "name": "hexd",
          "package": "snap-core",
          "signature": "Char -\u003e Builder",
          "source": "src/Snap-Internal-Parsing.html#hexd",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Internal Parsing",
          "module": "Snap.Internal.Parsing",
          "name": "hexd",
          "normalized": "Char-\u003eBuilder",
          "package": "snap-core",
          "signature": "Char-\u003eBuilder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Internal-Parsing.html#v:hexd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Internal.Parsing",
          "name": "isRFCText",
          "package": "snap-core",
          "signature": "Char -\u003e Bool",
          "source": "src/Snap-Internal-Parsing.html#isRFCText",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Internal Parsing",
          "module": "Snap.Internal.Parsing",
          "name": "isRFCText",
          "normalized": "Char-\u003eBool",
          "package": "snap-core",
          "partial": "RFCText",
          "signature": "Char-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Internal-Parsing.html#v:isRFCText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Internal.Parsing",
          "name": "isToken",
          "package": "snap-core",
          "signature": "Char -\u003e Bool",
          "source": "src/Snap-Internal-Parsing.html#isToken",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Internal Parsing",
          "module": "Snap.Internal.Parsing",
          "name": "isToken",
          "normalized": "Char-\u003eBool",
          "package": "snap-core",
          "partial": "Token",
          "signature": "Char-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Internal-Parsing.html#v:isToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParsers for different tokens in an HTTP request.\n\u003c/p\u003e",
          "module": "Snap.Internal.Parsing",
          "name": "letter",
          "package": "snap-core",
          "signature": "Parser Char",
          "source": "src/Snap-Internal-Parsing.html#letter",
          "type": "function"
        },
        "index": {
          "description": "Parsers for different tokens in an HTTP request",
          "hierarchy": "Snap Internal Parsing",
          "module": "Snap.Internal.Parsing",
          "name": "letter",
          "package": "snap-core",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Internal-Parsing.html#v:letter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Internal.Parsing",
          "name": "matchAll",
          "package": "snap-core",
          "signature": "[Char -\u003e Bool] -\u003e Char -\u003e Bool",
          "source": "src/Snap-Internal-Parsing.html#matchAll",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Internal Parsing",
          "module": "Snap.Internal.Parsing",
          "name": "matchAll",
          "normalized": "[Char-\u003eBool]-\u003eChar-\u003eBool",
          "package": "snap-core",
          "partial": "All",
          "signature": "[Char-\u003eBool]-\u003eChar-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Internal-Parsing.html#v:matchAll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Internal.Parsing",
          "name": "pAvPair",
          "package": "snap-core",
          "signature": "Parser (ByteString, ByteString)",
          "source": "src/Snap-Internal-Parsing.html#pAvPair",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Internal Parsing",
          "module": "Snap.Internal.Parsing",
          "name": "pAvPair",
          "normalized": "Parser(ByteString,ByteString)",
          "package": "snap-core",
          "partial": "Av Pair",
          "signature": "Parser(ByteString,ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Internal-Parsing.html#v:pAvPair"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Internal.Parsing",
          "name": "pAvPairs",
          "package": "snap-core",
          "signature": "Parser [(ByteString, ByteString)]",
          "source": "src/Snap-Internal-Parsing.html#pAvPairs",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Internal Parsing",
          "module": "Snap.Internal.Parsing",
          "name": "pAvPairs",
          "normalized": "Parser[(ByteString,ByteString)]",
          "package": "snap-core",
          "partial": "Av Pairs",
          "signature": "Parser[(ByteString,ByteString)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Internal-Parsing.html#v:pAvPairs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Internal.Parsing",
          "name": "pContentTypeWithParameters",
          "package": "snap-core",
          "signature": "Parser (ByteString, [(CI ByteString, ByteString)])",
          "source": "src/Snap-Internal-Parsing.html#pContentTypeWithParameters",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Internal Parsing",
          "module": "Snap.Internal.Parsing",
          "name": "pContentTypeWithParameters",
          "normalized": "Parser(ByteString,[(CI ByteString,ByteString)])",
          "package": "snap-core",
          "partial": "Content Type With Parameters",
          "signature": "Parser(ByteString,[(CI ByteString,ByteString)])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Internal-Parsing.html#v:pContentTypeWithParameters"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Internal.Parsing",
          "name": "pCookies",
          "package": "snap-core",
          "signature": "Parser [Cookie]",
          "source": "src/Snap-Internal-Parsing.html#pCookies",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Internal Parsing",
          "module": "Snap.Internal.Parsing",
          "name": "pCookies",
          "normalized": "Parser[Cookie]",
          "package": "snap-core",
          "partial": "Cookies",
          "signature": "Parser[Cookie]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Internal-Parsing.html#v:pCookies"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParser for request headers.\n\u003c/p\u003e",
          "module": "Snap.Internal.Parsing",
          "name": "pHeaders",
          "package": "snap-core",
          "signature": "Parser [(ByteString, ByteString)]",
          "source": "src/Snap-Internal-Parsing.html#pHeaders",
          "type": "function"
        },
        "index": {
          "description": "Parser for request headers",
          "hierarchy": "Snap Internal Parsing",
          "module": "Snap.Internal.Parsing",
          "name": "pHeaders",
          "normalized": "Parser[(ByteString,ByteString)]",
          "package": "snap-core",
          "partial": "Headers",
          "signature": "Parser[(ByteString,ByteString)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Internal-Parsing.html#v:pHeaders"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Internal.Parsing",
          "name": "pParameter",
          "package": "snap-core",
          "signature": "Parser (ByteString, ByteString)",
          "source": "src/Snap-Internal-Parsing.html#pParameter",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Internal Parsing",
          "module": "Snap.Internal.Parsing",
          "name": "pParameter",
          "normalized": "Parser(ByteString,ByteString)",
          "package": "snap-core",
          "partial": "Parameter",
          "signature": "Parser(ByteString,ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Internal-Parsing.html#v:pParameter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Internal.Parsing",
          "name": "pQuotedString",
          "package": "snap-core",
          "signature": "Parser ByteString",
          "source": "src/Snap-Internal-Parsing.html#pQuotedString",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Internal Parsing",
          "module": "Snap.Internal.Parsing",
          "name": "pQuotedString",
          "package": "snap-core",
          "partial": "Quoted String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Internal-Parsing.html#v:pQuotedString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Internal.Parsing",
          "name": "pSpaces",
          "package": "snap-core",
          "signature": "Parser ByteString",
          "source": "src/Snap-Internal-Parsing.html#pSpaces",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Internal Parsing",
          "module": "Snap.Internal.Parsing",
          "name": "pSpaces",
          "package": "snap-core",
          "partial": "Spaces",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Internal-Parsing.html#v:pSpaces"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Internal.Parsing",
          "name": "pToken",
          "package": "snap-core",
          "signature": "Parser ByteString",
          "source": "src/Snap-Internal-Parsing.html#pToken",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Internal Parsing",
          "module": "Snap.Internal.Parsing",
          "name": "pToken",
          "package": "snap-core",
          "partial": "Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Internal-Parsing.html#v:pToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Internal.Parsing",
          "name": "pUrlEscaped",
          "package": "snap-core",
          "signature": "Parser ByteString",
          "source": "src/Snap-Internal-Parsing.html#pUrlEscaped",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Internal Parsing",
          "module": "Snap.Internal.Parsing",
          "name": "pUrlEscaped",
          "package": "snap-core",
          "partial": "Url Escaped",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Internal-Parsing.html#v:pUrlEscaped"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Internal.Parsing",
          "name": "pValueWithParameters",
          "package": "snap-core",
          "signature": "Parser (ByteString, [(CI ByteString, ByteString)])",
          "source": "src/Snap-Internal-Parsing.html#pValueWithParameters",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Internal Parsing",
          "module": "Snap.Internal.Parsing",
          "name": "pValueWithParameters",
          "normalized": "Parser(ByteString,[(CI ByteString,ByteString)])",
          "package": "snap-core",
          "partial": "Value With Parameters",
          "signature": "Parser(ByteString,[(CI ByteString,ByteString)])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Internal-Parsing.html#v:pValueWithParameters"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Internal.Parsing",
          "name": "pWord",
          "package": "snap-core",
          "signature": "Parser ByteString",
          "source": "src/Snap-Internal-Parsing.html#pWord",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Internal Parsing",
          "module": "Snap.Internal.Parsing",
          "name": "pWord",
          "package": "snap-core",
          "partial": "Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Internal-Parsing.html#v:pWord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Internal.Parsing",
          "name": "parseCookie",
          "package": "snap-core",
          "signature": "ByteString -\u003e Maybe [Cookie]",
          "source": "src/Snap-Internal-Parsing.html#parseCookie",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Internal Parsing",
          "module": "Snap.Internal.Parsing",
          "name": "parseCookie",
          "normalized": "ByteString-\u003eMaybe[Cookie]",
          "package": "snap-core",
          "partial": "Cookie",
          "signature": "ByteString-\u003eMaybe[Cookie]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Internal-Parsing.html#v:parseCookie"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Internal.Parsing",
          "name": "parseNum",
          "package": "snap-core",
          "signature": "Parser Int64",
          "source": "src/Snap-Internal-Parsing.html#parseNum",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Internal Parsing",
          "module": "Snap.Internal.Parsing",
          "name": "parseNum",
          "package": "snap-core",
          "partial": "Num",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Internal-Parsing.html#v:parseNum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Internal.Parsing",
          "name": "parseToCompletion",
          "package": "snap-core",
          "signature": "Parser a -\u003e ByteString -\u003e Maybe a",
          "source": "src/Snap-Internal-Parsing.html#parseToCompletion",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Internal Parsing",
          "module": "Snap.Internal.Parsing",
          "name": "parseToCompletion",
          "normalized": "Parser a-\u003eByteString-\u003eMaybe a",
          "package": "snap-core",
          "partial": "To Completion",
          "signature": "Parser a-\u003eByteString-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Internal-Parsing.html#v:parseToCompletion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParsers for different tokens in an HTTP request.\n\u003c/p\u003e",
          "module": "Snap.Internal.Parsing",
          "name": "sp",
          "package": "snap-core",
          "signature": "Parser Char",
          "source": "src/Snap-Internal-Parsing.html#sp",
          "type": "function"
        },
        "index": {
          "description": "Parsers for different tokens in an HTTP request",
          "hierarchy": "Snap Internal Parsing",
          "module": "Snap.Internal.Parsing",
          "name": "sp",
          "package": "snap-core",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Internal-Parsing.html#v:sp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParser for zero or more spaces.\n\u003c/p\u003e",
          "module": "Snap.Internal.Parsing",
          "name": "spaces",
          "package": "snap-core",
          "signature": "Parser [Char]",
          "source": "src/Snap-Internal-Parsing.html#spaces",
          "type": "function"
        },
        "index": {
          "description": "Parser for zero or more spaces",
          "hierarchy": "Snap Internal Parsing",
          "module": "Snap.Internal.Parsing",
          "name": "spaces",
          "normalized": "Parser[Char]",
          "package": "snap-core",
          "signature": "Parser[Char]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Internal-Parsing.html#v:spaces"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Internal.Parsing",
          "name": "strictize",
          "package": "snap-core",
          "signature": "ByteString -\u003e ByteString",
          "source": "src/Snap-Internal-Parsing.html#strictize",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Internal Parsing",
          "module": "Snap.Internal.Parsing",
          "name": "strictize",
          "normalized": "ByteString-\u003eByteString",
          "package": "snap-core",
          "signature": "ByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Internal-Parsing.html#v:strictize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Internal.Parsing",
          "name": "tokenTable",
          "package": "snap-core",
          "signature": "FastSet",
          "source": "src/Snap-Internal-Parsing.html#tokenTable",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Internal Parsing",
          "module": "Snap.Internal.Parsing",
          "name": "tokenTable",
          "package": "snap-core",
          "partial": "Table",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Internal-Parsing.html#v:tokenTable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Internal.Parsing",
          "name": "trim",
          "package": "snap-core",
          "signature": "ByteString -\u003e ByteString",
          "source": "src/Snap-Internal-Parsing.html#trim",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Internal Parsing",
          "module": "Snap.Internal.Parsing",
          "name": "trim",
          "normalized": "ByteString-\u003eByteString",
          "package": "snap-core",
          "signature": "ByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Internal-Parsing.html#v:trim"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Internal.Parsing",
          "name": "unsafeFromHex",
          "package": "snap-core",
          "signature": "ByteString -\u003e a",
          "source": "src/Snap-Internal-Parsing.html#unsafeFromHex",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Internal Parsing",
          "module": "Snap.Internal.Parsing",
          "name": "unsafeFromHex",
          "normalized": "ByteString-\u003ea",
          "package": "snap-core",
          "partial": "From Hex",
          "signature": "ByteString-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Internal-Parsing.html#v:unsafeFromHex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Internal.Parsing",
          "name": "unsafeFromInt",
          "package": "snap-core",
          "signature": "ByteString -\u003e a",
          "source": "src/Snap-Internal-Parsing.html#unsafeFromInt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Internal Parsing",
          "module": "Snap.Internal.Parsing",
          "name": "unsafeFromInt",
          "normalized": "ByteString-\u003ea",
          "package": "snap-core",
          "partial": "From Int",
          "signature": "ByteString-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Internal-Parsing.html#v:unsafeFromInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Internal.Parsing",
          "name": "untilEOL",
          "package": "snap-core",
          "signature": "Parser ByteString",
          "source": "src/Snap-Internal-Parsing.html#untilEOL",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Internal Parsing",
          "module": "Snap.Internal.Parsing",
          "name": "untilEOL",
          "package": "snap-core",
          "partial": "EOL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Internal-Parsing.html#v:untilEOL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Internal.Parsing",
          "name": "urlEncodeTable",
          "package": "snap-core",
          "signature": "FastSet",
          "source": "src/Snap-Internal-Parsing.html#urlEncodeTable",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Internal Parsing",
          "module": "Snap.Internal.Parsing",
          "name": "urlEncodeTable",
          "package": "snap-core",
          "partial": "Encode Table",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Internal-Parsing.html#v:urlEncodeTable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSnap Framework type aliases and utilities for iteratees. Note that as a\n convenience, this module also exports everything from \u003ccode\u003eData.Enumerator\u003c/code\u003e in\n the \u003ccode\u003eenumerator\u003c/code\u003e library.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Snap.Iteratee",
          "name": "Iteratee",
          "package": "snap-core",
          "source": "src/Snap-Iteratee.html",
          "type": "module"
        },
        "index": {
          "description": "Snap Framework type aliases and utilities for iteratees Note that as convenience this module also exports everything from Data.Enumerator in the enumerator library",
          "hierarchy": "Snap Iteratee",
          "module": "Snap.Iteratee",
          "name": "Iteratee",
          "package": "snap-core",
          "partial": "Iteratee",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Iteratee.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn enumeratee acts as a stream adapter; place one between an enumerator\n and an iteratee, and it changes the type or contents of the input stream.\n\u003c/p\u003e\u003cp\u003eMost users will want to combine enumerators, enumeratees, and iteratees\n using the stream combinators \u003ccode\u003ejoinI\u003c/code\u003e and \u003ccode\u003ejoinE\u003c/code\u003e, or their operator aliases\n \u003ccode\u003e(=$)\u003c/code\u003e and \u003ccode\u003e($=)\u003c/code\u003e. These combinators are used to manage how left-over input\n is passed between elements of the data processing pipeline.\n\u003c/p\u003e",
          "module": "Snap.Iteratee",
          "name": "Enumeratee",
          "package": "snap-core",
          "type": "type"
        },
        "index": {
          "description": "An enumeratee acts as stream adapter place one between an enumerator and an iteratee and it changes the type or contents of the input stream Most users will want to combine enumerators enumeratees and iteratees using the stream combinators joinI and joinE or their operator aliases and These combinators are used to manage how left-over input is passed between elements of the data processing pipeline",
          "hierarchy": "Snap Iteratee",
          "module": "Snap.Iteratee",
          "name": "Enumeratee",
          "package": "snap-core",
          "partial": "Enumeratee",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Iteratee.html#t:Enumeratee"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEnumerators are sources of data, to be consumed by iteratees.\n Enumerators typically read from an external source (parser, handle,\n random generator, etc), then feed chunks into an tteratee until:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e The input source runs out of data.\n\u003c/li\u003e\u003cli\u003e The iteratee yields a result value.\n\u003c/li\u003e\u003cli\u003e The iteratee throws an exception.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Snap.Iteratee",
          "name": "Enumerator",
          "package": "snap-core",
          "type": "type"
        },
        "index": {
          "description": "Enumerators are sources of data to be consumed by iteratees Enumerators typically read from an external source parser handle random generator etc then feed chunks into an tteratee until The input source runs out of data The iteratee yields result value The iteratee throws an exception",
          "hierarchy": "Snap Iteratee",
          "module": "Snap.Iteratee",
          "name": "Enumerator",
          "package": "snap-core",
          "partial": "Enumerator",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Iteratee.html#t:Enumerator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Iteratee",
          "name": "InvalidRangeException",
          "package": "snap-core",
          "source": "src/Snap-Iteratee.html#InvalidRangeException",
          "type": "data"
        },
        "index": {
          "hierarchy": "Snap Iteratee",
          "module": "Snap.Iteratee",
          "name": "InvalidRangeException",
          "package": "snap-core",
          "partial": "Invalid Range Exception",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Iteratee.html#t:InvalidRangeException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe primary data type for this library; an iteratee consumes\n chunks of input from a stream until it either yields a value or\n encounters an error.\n\u003c/p\u003e\u003cp\u003eCompatibility note: \u003ccode\u003eIteratee\u003c/code\u003e will become abstract in \u003ccode\u003eenumerator_0.5\u003c/code\u003e. If\n you depend on internal implementation details, please import\n \u003ccode\u003e\u003ca\u003eData.Enumerator.Internal\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Snap.Iteratee",
          "name": "Iteratee",
          "package": "snap-core",
          "type": "newtype"
        },
        "index": {
          "description": "The primary data type for this library an iteratee consumes chunks of input from stream until it either yields value or encounters an error Compatibility note Iteratee will become abstract in enumerator If you depend on internal implementation details please import Data.Enumerator.Internal",
          "hierarchy": "Snap Iteratee",
          "module": "Snap.Iteratee",
          "name": "Iteratee",
          "package": "snap-core",
          "partial": "Iteratee",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Iteratee.html#t:Iteratee"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Iteratee",
          "name": "RateTooSlowException",
          "package": "snap-core",
          "source": "src/Snap-Iteratee.html#RateTooSlowException",
          "type": "data"
        },
        "index": {
          "hierarchy": "Snap Iteratee",
          "module": "Snap.Iteratee",
          "name": "RateTooSlowException",
          "package": "snap-core",
          "partial": "Rate Too Slow Exception",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Iteratee.html#t:RateTooSlowException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Iteratee",
          "name": "ShortWriteException",
          "package": "snap-core",
          "source": "src/Snap-Iteratee.html#ShortWriteException",
          "type": "data"
        },
        "index": {
          "hierarchy": "Snap Iteratee",
          "module": "Snap.Iteratee",
          "name": "ShortWriteException",
          "package": "snap-core",
          "partial": "Short Write Exception",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Iteratee.html#t:ShortWriteException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Iteratee",
          "name": "Step",
          "package": "snap-core",
          "type": "data"
        },
        "index": {
          "hierarchy": "Snap Iteratee",
          "module": "Snap.Iteratee",
          "name": "Step",
          "package": "snap-core",
          "partial": "Step",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Iteratee.html#t:Step"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eStream\u003c/a\u003e\u003c/code\u003e is a sequence of chunks generated by an \u003ccode\u003e\u003ca\u003eEnumerator\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e(\u003ccode\u003e\u003ca\u003eChunks\u003c/a\u003e\u003c/code\u003e [])\u003c/code\u003e is used to indicate that a stream is still active, but\n currently has no available data. Iteratees should ignore empty chunks.\n\u003c/p\u003e",
          "module": "Snap.Iteratee",
          "name": "Stream",
          "package": "snap-core",
          "type": "data"
        },
        "index": {
          "description": "Stream is sequence of chunks generated by an Enumerator Chunks is used to indicate that stream is still active but currently has no available data Iteratees should ignore empty chunks",
          "hierarchy": "Snap Iteratee",
          "module": "Snap.Iteratee",
          "name": "Stream",
          "package": "snap-core",
          "partial": "Stream",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Iteratee.html#t:Stream"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Iteratee",
          "name": "TooManyBytesReadException",
          "package": "snap-core",
          "source": "src/Snap-Iteratee.html#TooManyBytesReadException",
          "type": "data"
        },
        "index": {
          "hierarchy": "Snap Iteratee",
          "module": "Snap.Iteratee",
          "name": "TooManyBytesReadException",
          "package": "snap-core",
          "partial": "Too Many Bytes Read Exception",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Iteratee.html#t:TooManyBytesReadException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e(\u003ccode\u003e\u003ca\u003e$$\u003c/a\u003e\u003c/code\u003e) = (\u003ccode\u003e\u003ca\u003e==\u003c\u003c\u003c/a\u003e\u003c/code\u003e)\u003c/pre\u003e\u003cp\u003eThis is somewhat easier to read when constructing an iteratee from many\n processing stages. You can treat it like \u003ccode\u003e(\u003ccode\u003e\u003ca\u003e$\u003c/a\u003e\u003c/code\u003e)\u003c/code\u003e, and read the data flow\n from left to right.\n\u003c/p\u003e\u003cp\u003eSince: 0.1.1\n\u003c/p\u003e",
          "module": "Snap.Iteratee",
          "name": "($$)",
          "package": "snap-core",
          "signature": "(Step a m b -\u003e Iteratee a' m b') -\u003e Iteratee a m b -\u003e Iteratee a' m b'",
          "type": "function"
        },
        "index": {
          "description": "This is somewhat easier to read when constructing an iteratee from many processing stages You can treat it like and read the data flow from left to right Since",
          "hierarchy": "Snap Iteratee",
          "module": "Snap.Iteratee",
          "name": "($$) $$",
          "normalized": "(Step a b c-\u003eIteratee d b e)-\u003eIteratee a b c-\u003eIteratee d b e",
          "package": "snap-core",
          "signature": "(Step a m b-\u003eIteratee a' m b')-\u003eIteratee a m b-\u003eIteratee a' m b'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Iteratee.html#v:-36--36-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e&#8220;Wraps&#8221; an enumerator \u003cem\u003einner\u003c/em\u003e in an enumeratee \u003cem\u003ewrapper\u003c/em\u003e.\n The resulting enumerator will generate \u003cem\u003ewrapper\u003c/em\u003e&#8217;s output type.\n\u003c/p\u003e\u003cp\u003eAs an example, consider an enumerator that yields line character counts\n for a text file (e.g. for source code readability checking):\n\u003c/p\u003e\u003cpre\u003e enumFileCounts :: FilePath -\u003e Enumerator Int IO b\n\u003c/pre\u003e\u003cp\u003eIt could be written with either \u003ccode\u003e\u003ca\u003ejoinE\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e($=)\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e import Data.Text as T\n import Data.Enumerator.List as EL\n import Data.Enumerator.Text as ET\n\n enumFileCounts path = joinE (enumFile path) (EL.map T.length)\n enumFileCounts path = enumFile path $= EL.map T.length\n\u003c/pre\u003e\u003cp\u003eCompatibility note: in version 0.4.15, the associativity of \u003ccode\u003e($=)\u003c/code\u003e was\n changed from \u003ccode\u003einfixr 0\u003c/code\u003e to \u003ccode\u003einfixl 1\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.9\n\u003c/p\u003e",
          "module": "Snap.Iteratee",
          "name": "($=)",
          "package": "snap-core",
          "signature": "Enumerator ao m (Step ai m b) -\u003e Enumeratee ao ai m b -\u003e Enumerator ai m b",
          "type": "function"
        },
        "index": {
          "description": "Wraps an enumerator inner in an enumeratee wrapper The resulting enumerator will generate wrapper output type As an example consider an enumerator that yields line character counts for text file e.g for source code readability checking enumFileCounts FilePath Enumerator Int IO It could be written with either joinE or import Data.Text as import Data.Enumerator.List as EL import Data.Enumerator.Text as ET enumFileCounts path joinE enumFile path EL.map T.length enumFileCounts path enumFile path EL.map T.length Compatibility note in version the associativity of was changed from infixr to infixl Since",
          "hierarchy": "Snap Iteratee",
          "module": "Snap.Iteratee",
          "name": "($=) $=",
          "normalized": "Enumerator a b(Step c b d)-\u003eEnumeratee a c b d-\u003eEnumerator c b d",
          "package": "snap-core",
          "signature": "Enumerator ao m(Step ai m b)-\u003eEnumeratee ao ai m b-\u003eEnumerator ai m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Iteratee.html#v:-36--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e(\u003ccode\u003e\u003ca\u003e\u003c==\u003c\u003c/a\u003e\u003c/code\u003e) = flip (\u003ccode\u003e\u003ca\u003e\u003e==\u003e\u003c/a\u003e\u003c/code\u003e)\u003c/pre\u003e\u003cp\u003eSince: 0.1.1\n\u003c/p\u003e",
          "module": "Snap.Iteratee",
          "name": "(\u003c==\u003c)",
          "package": "snap-core",
          "signature": "(Step a m b -\u003e Iteratee a' m b') -\u003e Enumerator a m b -\u003e Step a m b -\u003e Iteratee a' m b'",
          "type": "function"
        },
        "index": {
          "description": "flip Since",
          "hierarchy": "Snap Iteratee",
          "module": "Snap.Iteratee",
          "name": "(\u003c==\u003c) \u003c==\u003c",
          "normalized": "(Step a b c-\u003eIteratee d b e)-\u003eEnumerator a b c-\u003eStep a b c-\u003eIteratee d b e",
          "package": "snap-core",
          "signature": "(Step a m b-\u003eIteratee a' m b')-\u003eEnumerator a m b-\u003eStep a m b-\u003eIteratee a' m b'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Iteratee.html#v:-60--61--61--60-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e&#8220;Wraps&#8221; an iteratee \u003cem\u003einner\u003c/em\u003e in an enumeratee \u003cem\u003ewrapper\u003c/em\u003e.\n The resulting iteratee will consume \u003cem\u003ewrapper\u003c/em\u003e&#8217;s input type and\n yield \u003cem\u003einner\u003c/em\u003e&#8217;s output type.\n\u003c/p\u003e\u003cp\u003eNote: if the inner iteratee yields leftover input when it finishes,\n that extra will be discarded.\n\u003c/p\u003e\u003cp\u003eAs an example, consider an iteratee that converts a stream of UTF8-encoded\n bytes into a single \u003ccode\u003eText\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e consumeUTF8 :: Monad m =\u003e Iteratee ByteString m Text\n\u003c/pre\u003e\u003cp\u003eIt could be written with either \u003ccode\u003e\u003ca\u003ejoinI\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e(=$)\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e import Data.Enumerator.Text as ET\n\n consumeUTF8 = joinI (decode utf8 $$ ET.consume)\n consumeUTF8 = decode utf8 =$ ET.consume\n\u003c/pre\u003e\u003cp\u003eSince: 0.4.9\n\u003c/p\u003e",
          "module": "Snap.Iteratee",
          "name": "(=$)",
          "package": "snap-core",
          "signature": "Enumeratee ao ai m b -\u003e Iteratee ai m b -\u003e Iteratee ao m b",
          "type": "function"
        },
        "index": {
          "description": "Wraps an iteratee inner in an enumeratee wrapper The resulting iteratee will consume wrapper input type and yield inner output type Note if the inner iteratee yields leftover input when it finishes that extra will be discarded As an example consider an iteratee that converts stream of UTF8-encoded bytes into single Text consumeUTF8 Monad Iteratee ByteString Text It could be written with either joinI or import Data.Enumerator.Text as ET consumeUTF8 joinI decode utf8 ET.consume consumeUTF8 decode utf8 ET.consume Since",
          "hierarchy": "Snap Iteratee",
          "module": "Snap.Iteratee",
          "name": "(=$) =$",
          "normalized": "Enumeratee a b c d-\u003eIteratee b c d-\u003eIteratee a c d",
          "package": "snap-core",
          "signature": "Enumeratee ao ai m b-\u003eIteratee ai m b-\u003eIteratee ao m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Iteratee.html#v:-61--36-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e(\u003ccode\u003e\u003ca\u003e==\u003c\u003c\u003c/a\u003e\u003c/code\u003e) = flip (\u003ccode\u003e\u003ca\u003e\u003e\u003e==\u003c/a\u003e\u003c/code\u003e)\u003c/pre\u003e",
          "module": "Snap.Iteratee",
          "name": "(==\u003c\u003c)",
          "package": "snap-core",
          "signature": "(Step a m b -\u003e Iteratee a' m b') -\u003e Iteratee a m b -\u003e Iteratee a' m b'",
          "type": "function"
        },
        "index": {
          "description": "flip",
          "hierarchy": "Snap Iteratee",
          "module": "Snap.Iteratee",
          "name": "(==\u003c\u003c) ==\u003c\u003c",
          "normalized": "(Step a b c-\u003eIteratee d b e)-\u003eIteratee a b c-\u003eIteratee d b e",
          "package": "snap-core",
          "signature": "(Step a m b-\u003eIteratee a' m b')-\u003eIteratee a m b-\u003eIteratee a' m b'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Iteratee.html#v:-61--61--60--60-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e(\u003ccode\u003e\u003ca\u003e\u003e==\u003e\u003c/a\u003e\u003c/code\u003e) enum1 enum2 step = enum1 step \u003ccode\u003e\u003ca\u003e\u003e\u003e==\u003c/a\u003e\u003c/code\u003e enum2\u003c/pre\u003e\u003cp\u003eThe moral equivalent of \u003ccode\u003e(\u003ccode\u003e\u003ca\u003e\u003e=\u003e\u003c/a\u003e\u003c/code\u003e)\u003c/code\u003e for iteratees.\n\u003c/p\u003e\u003cp\u003eSince: 0.1.1\n\u003c/p\u003e",
          "module": "Snap.Iteratee",
          "name": "(\u003e==\u003e)",
          "package": "snap-core",
          "signature": "Enumerator a m b -\u003e (Step a m b -\u003e Iteratee a' m b') -\u003e Step a m b -\u003e Iteratee a' m b'",
          "type": "function"
        },
        "index": {
          "description": "enum1 enum2 step enum1 step enum2 The moral equivalent of for iteratees Since",
          "hierarchy": "Snap Iteratee",
          "module": "Snap.Iteratee",
          "name": "(\u003e==\u003e) \u003e==\u003e",
          "normalized": "Enumerator a b c-\u003e(Step a b c-\u003eIteratee d b e)-\u003eStep a b c-\u003eIteratee d b e",
          "package": "snap-core",
          "signature": "Enumerator a m b-\u003e(Step a m b-\u003eIteratee a' m b')-\u003eStep a m b-\u003eIteratee a' m b'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Iteratee.html#v:-62--61--61--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe most primitive stream operator. \u003ccode\u003eiter \u003e\u003e== enum\u003c/code\u003e returns a new\n iteratee which will read from \u003ccode\u003eenum\u003c/code\u003e before continuing.\n\u003c/p\u003e",
          "module": "Snap.Iteratee",
          "name": "(\u003e\u003e==)",
          "package": "snap-core",
          "signature": "Iteratee a m b -\u003e (Step a m b -\u003e Iteratee a' m b') -\u003e Iteratee a' m b'",
          "type": "function"
        },
        "index": {
          "description": "The most primitive stream operator iter enum returns new iteratee which will read from enum before continuing",
          "hierarchy": "Snap Iteratee",
          "module": "Snap.Iteratee",
          "name": "(\u003e\u003e==) \u003e\u003e==",
          "normalized": "Iteratee a b c-\u003e(Step a b c-\u003eIteratee d b e)-\u003eIteratee d b e",
          "package": "snap-core",
          "signature": "Iteratee a m b-\u003e(Step a m b-\u003eIteratee a' m b')-\u003eIteratee a' m b'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Iteratee.html#v:-62--62--61--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Iteratee",
          "name": "Chunks",
          "package": "snap-core",
          "signature": "Chunks [a]",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Iteratee",
          "module": "Snap.Iteratee",
          "name": "Chunks",
          "normalized": "Chunks[a]",
          "package": "snap-core",
          "partial": "Chunks",
          "signature": "Chunks[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Iteratee.html#v:Chunks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eIteratee\u003c/a\u003e\u003c/code\u003e is capable of accepting more input. Note that more input\n is not necessarily required; the \u003ccode\u003e\u003ca\u003eIteratee\u003c/a\u003e\u003c/code\u003e might be able to generate a\n value immediately if it receives \u003ccode\u003e\u003ca\u003eEOF\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Snap.Iteratee",
          "name": "Continue",
          "package": "snap-core",
          "signature": "Continue (Stream a -\u003e Iteratee a m b)",
          "type": "function"
        },
        "index": {
          "description": "The Iteratee is capable of accepting more input Note that more input is not necessarily required the Iteratee might be able to generate value immediately if it receives EOF",
          "hierarchy": "Snap Iteratee",
          "module": "Snap.Iteratee",
          "name": "Continue",
          "normalized": "Continue(Stream a-\u003eIteratee a b c)",
          "package": "snap-core",
          "partial": "Continue",
          "signature": "Continue(Stream a-\u003eIteratee a m b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Iteratee.html#v:Continue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Iteratee",
          "name": "EOF",
          "package": "snap-core",
          "signature": "EOF",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Iteratee",
          "module": "Snap.Iteratee",
          "name": "EOF",
          "package": "snap-core",
          "partial": "EOF",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Iteratee.html#v:EOF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eIteratee\u003c/a\u003e\u003c/code\u003e encountered an error which prevents it from proceeding\n further.\n\u003c/p\u003e",
          "module": "Snap.Iteratee",
          "name": "Error",
          "package": "snap-core",
          "signature": "Error SomeException",
          "type": "function"
        },
        "index": {
          "description": "The Iteratee encountered an error which prevents it from proceeding further",
          "hierarchy": "Snap Iteratee",
          "module": "Snap.Iteratee",
          "name": "Error",
          "package": "snap-core",
          "partial": "Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Iteratee.html#v:Error"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Iteratee",
          "name": "Iteratee",
          "package": "snap-core",
          "signature": "Iteratee",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Iteratee",
          "module": "Snap.Iteratee",
          "name": "Iteratee",
          "package": "snap-core",
          "partial": "Iteratee",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Iteratee.html#v:Iteratee"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eIteratee\u003c/a\u003e\u003c/code\u003e cannot receive any more input, and has generated a\n result. Included in this value is left-over input, which can be passed to\n composed \u003ccode\u003e\u003ca\u003eIteratee\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
          "module": "Snap.Iteratee",
          "name": "Yield",
          "package": "snap-core",
          "signature": "Yield b (Stream a)",
          "type": "function"
        },
        "index": {
          "description": "The Iteratee cannot receive any more input and has generated result Included in this value is left-over input which can be passed to composed Iteratee",
          "hierarchy": "Snap Iteratee",
          "module": "Snap.Iteratee",
          "name": "Yield",
          "package": "snap-core",
          "partial": "Yield",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Iteratee.html#v:Yield"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRuns the iteratee, and calls an exception handler if an \u003ccode\u003e\u003ca\u003eError\u003c/a\u003e\u003c/code\u003e is\n returned. By handling errors within the enumerator library, and requiring\n all errors to be represented by \u003ccode\u003e\u003ca\u003eSomeException\u003c/a\u003e\u003c/code\u003e, libraries with\n varying error types can be easily composed.\n\u003c/p\u003e\u003cp\u003eWARNING: Within the error handler, it is difficult or impossible to know\n how much input the original iteratee has consumed. Users are strongly\n advised to wrap all uses of \u003ccode\u003ecatchError\u003c/code\u003e with an appropriate isolation\n enumeratee, such as \u003ccode\u003eData.Enumerator.List.isolate\u003c/code\u003e or\n \u003ccode\u003eData.Enumerator.Binary.isolate\u003c/code\u003e, which will handle input framing even\n in the face of unexpected errors.\n\u003c/p\u003e\u003cp\u003eSince: 0.1.1\n\u003c/p\u003e",
          "module": "Snap.Iteratee",
          "name": "catchError",
          "package": "snap-core",
          "signature": "Iteratee a m b -\u003e (SomeException -\u003e Iteratee a m b) -\u003e Iteratee a m b",
          "type": "function"
        },
        "index": {
          "description": "Runs the iteratee and calls an exception handler if an Error is returned By handling errors within the enumerator library and requiring all errors to be represented by SomeException libraries with varying error types can be easily composed WARNING Within the error handler it is difficult or impossible to know how much input the original iteratee has consumed Users are strongly advised to wrap all uses of catchError with an appropriate isolation enumeratee such as Data.Enumerator.List.isolate or Data.Enumerator.Binary.isolate which will handle input framing even in the face of unexpected errors Since",
          "hierarchy": "Snap Iteratee",
          "module": "Snap.Iteratee",
          "name": "catchError",
          "normalized": "Iteratee a b c-\u003e(SomeException-\u003eIteratee a b c)-\u003eIteratee a b c",
          "package": "snap-core",
          "partial": "Error",
          "signature": "Iteratee a m b-\u003e(SomeException-\u003eIteratee a m b)-\u003eIteratee a m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Iteratee.html#v:catchError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e\u003ccode\u003e\u003ca\u003echeckDone\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003e\u003ca\u003echeckDoneEx\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eChunks\u003c/a\u003e\u003c/code\u003e [])\u003c/pre\u003e\u003cp\u003eUse this for enumeratees which do not have an input buffer.\n\u003c/p\u003e",
          "module": "Snap.Iteratee",
          "name": "checkDone",
          "package": "snap-core",
          "signature": "((Stream a -\u003e Iteratee a m b) -\u003e Iteratee a' m (Step a m b)) -\u003e Enumeratee a' a m b",
          "type": "function"
        },
        "index": {
          "description": "checkDone checkDoneEx Chunks Use this for enumeratees which do not have an input buffer",
          "hierarchy": "Snap Iteratee",
          "module": "Snap.Iteratee",
          "name": "checkDone",
          "normalized": "((Stream a-\u003eIteratee a b c)-\u003eIteratee d b(Step a b c))-\u003eEnumeratee d a b c",
          "package": "snap-core",
          "partial": "Done",
          "signature": "((Stream a-\u003eIteratee a m b)-\u003eIteratee a' m(Step a m b))-\u003eEnumeratee a' a m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Iteratee.html#v:checkDone"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompose a list of \u003ccode\u003e\u003ca\u003eEnumerator\u003c/a\u003e\u003c/code\u003es using \u003ccode\u003e(\u003ccode\u003e\u003ca\u003e\u003e==\u003e\u003c/a\u003e\u003c/code\u003e).\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Snap.Iteratee",
          "name": "concatEnums",
          "package": "snap-core",
          "signature": "[Enumerator a m b] -\u003e Enumerator a m b",
          "type": "function"
        },
        "index": {
          "description": "Compose list of Enumerator using",
          "hierarchy": "Snap Iteratee",
          "module": "Snap.Iteratee",
          "name": "concatEnums",
          "normalized": "[Enumerator a b c]-\u003eEnumerator a b c",
          "package": "snap-core",
          "partial": "Enums",
          "signature": "[Enumerator a m b]-\u003eEnumerator a m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Iteratee.html#v:concatEnums"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e\u003ccode\u003e\u003ca\u003econsume\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003e\u003ca\u003etakeWhile\u003c/a\u003e\u003c/code\u003e (const True)\u003c/pre\u003e\u003cp\u003eSince: 0.4.5\n\u003c/p\u003e",
          "module": "Snap.Iteratee",
          "name": "consume",
          "package": "snap-core",
          "signature": "Iteratee a m [a]",
          "type": "function"
        },
        "index": {
          "description": "consume takeWhile const True Since",
          "hierarchy": "Snap Iteratee",
          "module": "Snap.Iteratee",
          "name": "consume",
          "normalized": "Iteratee a b[a]",
          "package": "snap-core",
          "signature": "Iteratee a m[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Iteratee.html#v:consume"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e\u003ccode\u003e\u003ca\u003econtinue\u003c/a\u003e\u003c/code\u003e k = \u003ccode\u003e\u003ca\u003ereturnI\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eContinue\u003c/a\u003e\u003c/code\u003e k)\u003c/pre\u003e",
          "module": "Snap.Iteratee",
          "name": "continue",
          "package": "snap-core",
          "signature": "(Stream a -\u003e Iteratee a m b) -\u003e Iteratee a m b",
          "type": "function"
        },
        "index": {
          "description": "continue returnI Continue",
          "hierarchy": "Snap Iteratee",
          "module": "Snap.Iteratee",
          "name": "continue",
          "normalized": "(Stream a-\u003eIteratee a b c)-\u003eIteratee a b c",
          "package": "snap-core",
          "signature": "(Stream a-\u003eIteratee a m b)-\u003eIteratee a m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Iteratee.html#v:continue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWraps an \u003ccode\u003e\u003ca\u003eIteratee\u003c/a\u003e\u003c/code\u003e, counting the number of bytes consumed by it.\n\u003c/p\u003e",
          "module": "Snap.Iteratee",
          "name": "countBytes",
          "package": "snap-core",
          "signature": "forall a.  Iteratee ByteString m a -\u003e Iteratee ByteString m (a, Int64)",
          "source": "src/Snap-Iteratee.html#countBytes",
          "type": "function"
        },
        "index": {
          "description": "Wraps an Iteratee counting the number of bytes consumed by it",
          "hierarchy": "Snap Iteratee",
          "module": "Snap.Iteratee",
          "name": "countBytes",
          "normalized": "a b Iteratee ByteString c d-\u003eIteratee ByteString c(d,Int)",
          "package": "snap-core",
          "partial": "Bytes",
          "signature": "forall a. Iteratee ByteString m a-\u003eIteratee ByteString m(a,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Iteratee.html#v:countBytes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSkip n elements of the stream, if there are that many\n\u003c/p\u003e",
          "module": "Snap.Iteratee",
          "name": "drop",
          "package": "snap-core",
          "signature": "Int -\u003e Iteratee ByteString m ()",
          "source": "src/Snap-Iteratee.html#drop",
          "type": "function"
        },
        "index": {
          "description": "Skip elements of the stream if there are that many",
          "hierarchy": "Snap Iteratee",
          "module": "Snap.Iteratee",
          "name": "drop",
          "normalized": "Int-\u003eIteratee ByteString a()",
          "package": "snap-core",
          "signature": "Int-\u003eIteratee ByteString m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Iteratee.html#v:drop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSkip n elements of the stream, if there are that many\n\u003c/p\u003e",
          "module": "Snap.Iteratee",
          "name": "drop'",
          "package": "snap-core",
          "signature": "Int64 -\u003e Iteratee ByteString m ()",
          "source": "src/Snap-Iteratee.html#drop%27",
          "type": "function"
        },
        "index": {
          "description": "Skip elements of the stream if there are that many",
          "hierarchy": "Snap Iteratee",
          "module": "Snap.Iteratee",
          "name": "drop'",
          "normalized": "Int-\u003eIteratee ByteString a()",
          "package": "snap-core",
          "signature": "Int-\u003eIteratee ByteString m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Iteratee.html#v:drop-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEnumerates a strict bytestring.\n\u003c/p\u003e",
          "module": "Snap.Iteratee",
          "name": "enumBS",
          "package": "snap-core",
          "signature": "ByteString -\u003e Enumerator ByteString m a",
          "source": "src/Snap-Iteratee.html#enumBS",
          "type": "function"
        },
        "index": {
          "description": "Enumerates strict bytestring",
          "hierarchy": "Snap Iteratee",
          "module": "Snap.Iteratee",
          "name": "enumBS",
          "normalized": "ByteString-\u003eEnumerator ByteString a b",
          "package": "snap-core",
          "partial": "BS",
          "signature": "ByteString-\u003eEnumerator ByteString m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Iteratee.html#v:enumBS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEnumerates a Builder.\n\u003c/p\u003e",
          "module": "Snap.Iteratee",
          "name": "enumBuilder",
          "package": "snap-core",
          "signature": "Builder -\u003e Enumerator Builder m a",
          "source": "src/Snap-Iteratee.html#enumBuilder",
          "type": "function"
        },
        "index": {
          "description": "Enumerates Builder",
          "hierarchy": "Snap Iteratee",
          "module": "Snap.Iteratee",
          "name": "enumBuilder",
          "normalized": "Builder-\u003eEnumerator Builder a b",
          "package": "snap-core",
          "partial": "Builder",
          "signature": "Builder-\u003eEnumerator Builder m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Iteratee.html#v:enumBuilder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Iteratee",
          "name": "enumBuilderToByteString",
          "package": "snap-core",
          "signature": "Enumeratee Builder ByteString m a",
          "source": "src/Snap-Iteratee.html#enumBuilderToByteString",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Iteratee",
          "module": "Snap.Iteratee",
          "name": "enumBuilderToByteString",
          "package": "snap-core",
          "partial": "Builder To Byte String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Iteratee.html#v:enumBuilderToByteString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Iteratee",
          "name": "enumByteStringToBuilder",
          "package": "snap-core",
          "signature": "Enumeratee ByteString Builder m a",
          "source": "src/Snap-Iteratee.html#enumByteStringToBuilder",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Iteratee",
          "module": "Snap.Iteratee",
          "name": "enumByteStringToBuilder",
          "package": "snap-core",
          "partial": "Byte String To Builder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Iteratee.html#v:enumByteStringToBuilder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSends \u003ccode\u003e\u003ca\u003eEOF\u003c/a\u003e\u003c/code\u003e to its iteratee. Most clients should use \u003ccode\u003erun\u003c/code\u003e or \u003ccode\u003erun_\u003c/code\u003e\n instead.\n\u003c/p\u003e",
          "module": "Snap.Iteratee",
          "name": "enumEOF",
          "package": "snap-core",
          "signature": "Enumerator a m b",
          "type": "function"
        },
        "index": {
          "description": "Sends EOF to its iteratee Most clients should use run or run instead",
          "hierarchy": "Snap Iteratee",
          "module": "Snap.Iteratee",
          "name": "enumEOF",
          "package": "snap-core",
          "partial": "EOF",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Iteratee.html#v:enumEOF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Iteratee",
          "name": "enumFile",
          "package": "snap-core",
          "signature": "FilePath -\u003e Enumerator ByteString IO a",
          "source": "src/Snap-Iteratee.html#enumFile",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Iteratee",
          "module": "Snap.Iteratee",
          "name": "enumFile",
          "normalized": "FilePath-\u003eEnumerator ByteString IO a",
          "package": "snap-core",
          "partial": "File",
          "signature": "FilePath-\u003eEnumerator ByteString IO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Iteratee.html#v:enumFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Iteratee",
          "name": "enumFilePartial",
          "package": "snap-core",
          "signature": "FilePath -\u003e (Int64, Int64) -\u003e Enumerator ByteString IO a",
          "source": "src/Snap-Iteratee.html#enumFilePartial",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Iteratee",
          "module": "Snap.Iteratee",
          "name": "enumFilePartial",
          "normalized": "FilePath-\u003e(Int,Int)-\u003eEnumerator ByteString IO a",
          "package": "snap-core",
          "partial": "File Partial",
          "signature": "FilePath-\u003e(Int,Int)-\u003eEnumerator ByteString IO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Iteratee.html#v:enumFilePartial"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEnumerates a lazy bytestring.\n\u003c/p\u003e",
          "module": "Snap.Iteratee",
          "name": "enumLBS",
          "package": "snap-core",
          "signature": "ByteString -\u003e Enumerator ByteString m a",
          "source": "src/Snap-Iteratee.html#enumLBS",
          "type": "function"
        },
        "index": {
          "description": "Enumerates lazy bytestring",
          "hierarchy": "Snap Iteratee",
          "module": "Snap.Iteratee",
          "name": "enumLBS",
          "normalized": "ByteString-\u003eEnumerator ByteString a b",
          "package": "snap-core",
          "partial": "LBS",
          "signature": "ByteString-\u003eEnumerator ByteString m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Iteratee.html#v:enumLBS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eenumList\u003c/a\u003e\u003c/code\u003e n xs\u003c/code\u003e enumerates \u003cem\u003exs\u003c/em\u003e as a stream, passing \u003cem\u003en\u003c/em\u003e inputs per\n chunk. This is primarily useful for testing, debugging, and REPL\n exploration.\n\u003c/p\u003e\u003cp\u003eCompatibility note: In version 0.5, \u003ccode\u003e\u003ca\u003eenumList\u003c/a\u003e\u003c/code\u003e will be changed to the\n type:\n\u003c/p\u003e\u003cpre\u003e enumList :: Monad m =\u003e [a] -\u003e Enumerator a m b\n\u003c/pre\u003e",
          "module": "Snap.Iteratee",
          "name": "enumList",
          "package": "snap-core",
          "signature": "Integer -\u003e [a] -\u003e Enumerator a m b",
          "type": "function"
        },
        "index": {
          "description": "enumList xs enumerates xs as stream passing inputs per chunk This is primarily useful for testing debugging and REPL exploration Compatibility note In version enumList will be changed to the type enumList Monad Enumerator",
          "hierarchy": "Snap Iteratee",
          "module": "Snap.Iteratee",
          "name": "enumList",
          "normalized": "Integer-\u003e[a]-\u003eEnumerator a b c",
          "package": "snap-core",
          "partial": "List",
          "signature": "Integer-\u003e[a]-\u003eEnumerator a m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Iteratee.html#v:enumList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the next element from the stream, or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the stream has\n ended.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.5\n\u003c/p\u003e",
          "module": "Snap.Iteratee",
          "name": "head",
          "package": "snap-core",
          "signature": "Iteratee a m (Maybe a)",
          "type": "function"
        },
        "index": {
          "description": "Get the next element from the stream or Nothing if the stream has ended Since",
          "hierarchy": "Snap Iteratee",
          "module": "Snap.Iteratee",
          "name": "head",
          "package": "snap-core",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Iteratee.html#v:head"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck whether a stream has reached EOF. Note that if the stream is not\n at EOF, \u003ccode\u003eisEOF\u003c/code\u003e may cause data to be read from the enumerator.\n\u003c/p\u003e",
          "module": "Snap.Iteratee",
          "name": "isEOF",
          "package": "snap-core",
          "signature": "Iteratee a m Bool",
          "type": "function"
        },
        "index": {
          "description": "Check whether stream has reached EOF Note that if the stream is not at EOF isEOF may cause data to be read from the enumerator",
          "hierarchy": "Snap Iteratee",
          "module": "Snap.Iteratee",
          "name": "isEOF",
          "package": "snap-core",
          "partial": "EOF",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Iteratee.html#v:isEOF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e&#8220;Wraps&#8221; an iteratee \u003cem\u003einner\u003c/em\u003e in an enumeratee \u003cem\u003ewrapper\u003c/em\u003e.\n The resulting iteratee will consume \u003cem\u003ewrapper\u003c/em\u003e&#8217;s input type and\n yield \u003cem\u003einner\u003c/em\u003e&#8217;s output type.\n\u003c/p\u003e\u003cp\u003eSee the documentation for (\u003ccode\u003e\u003ca\u003e=$\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e\u003cpre\u003ejoinI (enum $$ iter) = enum =$ iter\u003c/pre\u003e",
          "module": "Snap.Iteratee",
          "name": "joinI",
          "package": "snap-core",
          "signature": "Iteratee a m (Step a' m b) -\u003e Iteratee a m b",
          "type": "function"
        },
        "index": {
          "description": "Wraps an iteratee inner in an enumeratee wrapper The resulting iteratee will consume wrapper input type and yield inner output type See the documentation for joinI enum iter enum iter",
          "hierarchy": "Snap Iteratee",
          "module": "Snap.Iteratee",
          "name": "joinI",
          "normalized": "Iteratee a b(Step c b d)-\u003eIteratee a b d",
          "package": "snap-core",
          "signature": "Iteratee a m(Step a' m b)-\u003eIteratee a m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Iteratee.html#v:joinI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Iteratee",
          "name": "joinI'",
          "package": "snap-core",
          "signature": "Iteratee a m (Step a m b) -\u003e Iteratee a m b",
          "source": "src/Snap-Iteratee.html#joinI%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Iteratee",
          "module": "Snap.Iteratee",
          "name": "joinI'",
          "normalized": "Iteratee a b(Step a b c)-\u003eIteratee a b c",
          "package": "snap-core",
          "partial": "I'",
          "signature": "Iteratee a m(Step a m b)-\u003eIteratee a m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Iteratee.html#v:joinI-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Iteratee",
          "name": "killIfTooSlow",
          "package": "snap-core",
          "signature": "m ()-\u003e Double-\u003e Int-\u003e Iteratee ByteString m a-\u003e Iteratee ByteString m a",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Iteratee",
          "module": "Snap.Iteratee",
          "name": "killIfTooSlow",
          "normalized": "a()-\u003eDouble-\u003eInt-\u003eIteratee ByteString a b-\u003eIteratee ByteString a b",
          "package": "snap-core",
          "partial": "If Too Slow",
          "signature": "m()-\u003eDouble-\u003eInt-\u003eIteratee ByteString m a-\u003eIteratee ByteString m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Iteratee.html#v:killIfTooSlow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDeprecated in 0.4.5: use \u003ccode\u003e\u003ca\u003efold\u003c/a\u003e\u003c/code\u003e instead\n\u003c/p\u003e\u003cp\u003eSince: 0.1.1\n\u003c/p\u003e",
          "module": "Snap.Iteratee",
          "name": "liftFoldL",
          "package": "snap-core",
          "signature": "(b -\u003e a -\u003e b) -\u003e b -\u003e Iteratee a m b",
          "type": "function"
        },
        "index": {
          "description": "Deprecated in use fold instead Since",
          "hierarchy": "Snap Iteratee",
          "module": "Snap.Iteratee",
          "name": "liftFoldL",
          "normalized": "(a-\u003eb-\u003ea)-\u003ea-\u003eIteratee b c a",
          "package": "snap-core",
          "partial": "Fold",
          "signature": "(b-\u003ea-\u003eb)-\u003eb-\u003eIteratee a m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Iteratee.html#v:liftFoldL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDeprecated in 0.4.5: use \u003ccode\u003e\u003ca\u003efold\u003c/a\u003e\u003c/code\u003e instead\n\u003c/p\u003e\u003cp\u003eSince: 0.1.1\n\u003c/p\u003e",
          "module": "Snap.Iteratee",
          "name": "liftFoldL'",
          "package": "snap-core",
          "signature": "(b -\u003e a -\u003e b) -\u003e b -\u003e Iteratee a m b",
          "type": "function"
        },
        "index": {
          "description": "Deprecated in use fold instead Since",
          "hierarchy": "Snap Iteratee",
          "module": "Snap.Iteratee",
          "name": "liftFoldL'",
          "normalized": "(a-\u003eb-\u003ea)-\u003ea-\u003eIteratee b c a",
          "package": "snap-core",
          "partial": "Fold L'",
          "signature": "(b-\u003ea-\u003eb)-\u003eb-\u003eIteratee a m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Iteratee.html#v:liftFoldL-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDeprecated in 0.4.5: use \u003ccode\u003e\u003ca\u003efoldM\u003c/a\u003e\u003c/code\u003e instead\n\u003c/p\u003e\u003cp\u003eSince: 0.1.1\n\u003c/p\u003e",
          "module": "Snap.Iteratee",
          "name": "liftFoldM",
          "package": "snap-core",
          "signature": "(b -\u003e a -\u003e m b) -\u003e b -\u003e Iteratee a m b",
          "type": "function"
        },
        "index": {
          "description": "Deprecated in use foldM instead Since",
          "hierarchy": "Snap Iteratee",
          "module": "Snap.Iteratee",
          "name": "liftFoldM",
          "normalized": "(a-\u003eb-\u003ec a)-\u003ea-\u003eIteratee b c a",
          "package": "snap-core",
          "partial": "Fold",
          "signature": "(b-\u003ea-\u003em b)-\u003eb-\u003eIteratee a m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Iteratee.html#v:liftFoldM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDeprecated in 0.4.5: use \u003ccode\u003e\u003ca\u003econtinue\u003c/a\u003e\u003c/code\u003e instead\n\u003c/p\u003e",
          "module": "Snap.Iteratee",
          "name": "liftI",
          "package": "snap-core",
          "signature": "(Stream a -\u003e Step a m b) -\u003e Iteratee a m b",
          "type": "function"
        },
        "index": {
          "description": "Deprecated in use continue instead",
          "hierarchy": "Snap Iteratee",
          "module": "Snap.Iteratee",
          "name": "liftI",
          "normalized": "(Stream a-\u003eStep a b c)-\u003eIteratee a b c",
          "package": "snap-core",
          "signature": "(Stream a-\u003eStep a m b)-\u003eIteratee a m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Iteratee.html#v:liftI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLift an \u003ccode\u003e\u003ca\u003eIteratee\u003c/a\u003e\u003c/code\u003e onto a monad transformer, re-wrapping its\n inner monadic values.\n\u003c/p\u003e\u003cp\u003eSince: 0.1.1\n\u003c/p\u003e",
          "module": "Snap.Iteratee",
          "name": "liftTrans",
          "package": "snap-core",
          "signature": "Iteratee a m b -\u003e Iteratee a (t m) b",
          "type": "function"
        },
        "index": {
          "description": "Lift an Iteratee onto monad transformer re-wrapping its inner monadic values Since",
          "hierarchy": "Snap Iteratee",
          "module": "Snap.Iteratee",
          "name": "liftTrans",
          "normalized": "Iteratee a b c-\u003eIteratee a(d b)c",
          "package": "snap-core",
          "partial": "Trans",
          "signature": "Iteratee a m b-\u003eIteratee a(t m)b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Iteratee.html#v:liftTrans"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003emap\u003c/a\u003e\u003c/code\u003e f\u003c/code\u003e applies \u003cem\u003ef\u003c/em\u003e to each input element and\n feeds the resulting outputs to the inner iteratee.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.8\n\u003c/p\u003e",
          "module": "Snap.Iteratee",
          "name": "map",
          "package": "snap-core",
          "signature": "(ao -\u003e ai) -\u003e Enumeratee ao ai m b",
          "type": "function"
        },
        "index": {
          "description": "map applies to each input element and feeds the resulting outputs to the inner iteratee Since",
          "hierarchy": "Snap Iteratee",
          "module": "Snap.Iteratee",
          "name": "map",
          "normalized": "(a-\u003eb)-\u003eEnumeratee a b c d",
          "package": "snap-core",
          "signature": "(ao-\u003eai)-\u003eEnumeratee ao ai m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Iteratee.html#v:map"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Iteratee",
          "name": "mapEnum",
          "package": "snap-core",
          "signature": "(aOut -\u003e aIn) -\u003e (aIn -\u003e aOut) -\u003e Enumerator aIn m a -\u003e Enumerator aOut m a",
          "source": "src/Snap-Iteratee.html#mapEnum",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Iteratee",
          "module": "Snap.Iteratee",
          "name": "mapEnum",
          "normalized": "(a-\u003eb)-\u003e(b-\u003ea)-\u003eEnumerator b c d-\u003eEnumerator a c d",
          "package": "snap-core",
          "partial": "Enum",
          "signature": "(aOut-\u003eaIn)-\u003e(aIn-\u003eaOut)-\u003eEnumerator aIn m a-\u003eEnumerator aOut m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Iteratee.html#v:mapEnum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Iteratee",
          "name": "mapIter",
          "package": "snap-core",
          "signature": "(aOut -\u003e aIn) -\u003e (aIn -\u003e aOut) -\u003e Iteratee aIn m a -\u003e Iteratee aOut m a",
          "source": "src/Snap-Iteratee.html#mapIter",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Iteratee",
          "module": "Snap.Iteratee",
          "name": "mapIter",
          "normalized": "(a-\u003eb)-\u003e(b-\u003ea)-\u003eIteratee b c d-\u003eIteratee a c d",
          "package": "snap-core",
          "partial": "Iter",
          "signature": "(aOut-\u003eaIn)-\u003e(aIn-\u003eaOut)-\u003eIteratee aIn m a-\u003eIteratee aOut m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Iteratee.html#v:mapIter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a buffer to be passed into \u003ccode\u003e\u003ca\u003eunsafeBufferIterateeWithBuffer\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Snap.Iteratee",
          "name": "mkIterateeBuffer",
          "package": "snap-core",
          "signature": "IO (ForeignPtr CChar)",
          "source": "src/Snap-Iteratee.html#mkIterateeBuffer",
          "type": "function"
        },
        "index": {
          "description": "Creates buffer to be passed into unsafeBufferIterateeWithBuffer",
          "hierarchy": "Snap Iteratee",
          "module": "Snap.Iteratee",
          "name": "mkIterateeBuffer",
          "package": "snap-core",
          "partial": "Iteratee Buffer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Iteratee.html#v:mkIterateeBuffer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePeek at the next element in the stream, or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the stream\n has ended.\n\u003c/p\u003e",
          "module": "Snap.Iteratee",
          "name": "peek",
          "package": "snap-core",
          "signature": "Iteratee a m (Maybe a)",
          "type": "function"
        },
        "index": {
          "description": "Peek at the next element in the stream or Nothing if the stream has ended",
          "hierarchy": "Snap Iteratee",
          "module": "Snap.Iteratee",
          "name": "peek",
          "package": "snap-core",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Iteratee.html#v:peek"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrint chunks as they're received from the enumerator, optionally\n printing empty chunks.\n\u003c/p\u003e",
          "module": "Snap.Iteratee",
          "name": "printChunks",
          "package": "snap-core",
          "signature": "Bool-\u003e Iteratee a m ()",
          "type": "function"
        },
        "index": {
          "description": "Print chunks as they re received from the enumerator optionally printing empty chunks",
          "hierarchy": "Snap Iteratee",
          "module": "Snap.Iteratee",
          "name": "printChunks",
          "normalized": "Bool-\u003eIteratee a b()",
          "package": "snap-core",
          "partial": "Chunks",
          "signature": "Bool-\u003eIteratee a m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Iteratee.html#v:printChunks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e\u003ccode\u003e\u003ca\u003ereturnI\u003c/a\u003e\u003c/code\u003e step = \u003ccode\u003e\u003ca\u003eIteratee\u003c/a\u003e\u003c/code\u003e (return step)\u003c/pre\u003e",
          "module": "Snap.Iteratee",
          "name": "returnI",
          "package": "snap-core",
          "signature": "Step a m b -\u003e Iteratee a m b",
          "type": "function"
        },
        "index": {
          "description": "returnI step Iteratee return step",
          "hierarchy": "Snap Iteratee",
          "module": "Snap.Iteratee",
          "name": "returnI",
          "normalized": "Step a b c-\u003eIteratee a b c",
          "package": "snap-core",
          "signature": "Step a m b-\u003eIteratee a m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Iteratee.html#v:returnI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun an iteratee until it finishes, and return either the final value\n (if it succeeded) or the error (if it failed).\n\u003c/p\u003e\u003cpre\u003e import Data.Enumerator\n import Data.Enumerator.List as EL\n\n main = do\n     result \u003c- run (EL.iterate succ 'A' $$ EL.take 5)\n     case result of\n         Left exc -\u003e putStrLn (\"Got an exception: \" ++ show exc)\n         Right chars -\u003e putStrLn (\"Got characters: \" ++ show chars)\n\u003c/pre\u003e",
          "module": "Snap.Iteratee",
          "name": "run",
          "package": "snap-core",
          "signature": "Iteratee a m b -\u003e m (Either SomeException b)",
          "type": "function"
        },
        "index": {
          "description": "Run an iteratee until it finishes and return either the final value if it succeeded or the error if it failed import Data.Enumerator import Data.Enumerator.List as EL main do result run EL.iterate succ EL.take case result of Left exc putStrLn Got an exception show exc Right chars putStrLn Got characters show chars",
          "hierarchy": "Snap Iteratee",
          "module": "Snap.Iteratee",
          "name": "run",
          "normalized": "Iteratee a b c-\u003eb(Either SomeException c)",
          "package": "snap-core",
          "signature": "Iteratee a m b-\u003em(Either SomeException b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Iteratee.html#v:run"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Iteratee",
          "name": "runIteratee",
          "package": "snap-core",
          "signature": "m (Step a m b)",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Iteratee",
          "module": "Snap.Iteratee",
          "name": "runIteratee",
          "package": "snap-core",
          "partial": "Iteratee",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Iteratee.html#v:runIteratee"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003erun\u003c/a\u003e\u003c/code\u003e, except errors are converted to exceptions and thrown.\n Primarily useful for small scripts or other simple cases.\n\u003c/p\u003e\u003cpre\u003e import Data.Enumerator\n import Data.Enumerator.List as EL\n\n main = do\n     chars \u003c- run_ (EL.iterate succ 'A' $$ EL.take 5)\n     putStrLn (\"Got characters: \" ++ show chars)\n\u003c/pre\u003e\u003cp\u003eSince: 0.4.1\n\u003c/p\u003e",
          "module": "Snap.Iteratee",
          "name": "run_",
          "package": "snap-core",
          "signature": "Iteratee a m b -\u003e m b",
          "type": "function"
        },
        "index": {
          "description": "Like run except errors are converted to exceptions and thrown Primarily useful for small scripts or other simple cases import Data.Enumerator import Data.Enumerator.List as EL main do chars run EL.iterate succ EL.take putStrLn Got characters show chars Since",
          "hierarchy": "Snap Iteratee",
          "module": "Snap.Iteratee",
          "name": "run_",
          "normalized": "Iteratee a b c-\u003eb c",
          "package": "snap-core",
          "signature": "Iteratee a m b-\u003em b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Iteratee.html#v:run_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFeeds outer input elements into the provided iteratee until it yields\n an inner input, passes that to the inner iteratee, and then loops.\n\u003c/p\u003e",
          "module": "Snap.Iteratee",
          "name": "sequence",
          "package": "snap-core",
          "signature": "Iteratee ao m ai -\u003e Enumeratee ao ai m b",
          "type": "function"
        },
        "index": {
          "description": "Feeds outer input elements into the provided iteratee until it yields an inner input passes that to the inner iteratee and then loops",
          "hierarchy": "Snap Iteratee",
          "module": "Snap.Iteratee",
          "name": "sequence",
          "normalized": "Iteratee a b c-\u003eEnumeratee a c b d",
          "package": "snap-core",
          "signature": "Iteratee ao m ai-\u003eEnumeratee ao ai m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Iteratee.html#v:sequence"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Iteratee",
          "name": "skipToEof",
          "package": "snap-core",
          "signature": "Iteratee a m ()",
          "source": "src/Snap-Iteratee.html#skipToEof",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Iteratee",
          "module": "Snap.Iteratee",
          "name": "skipToEof",
          "normalized": "Iteratee a b()",
          "package": "snap-core",
          "partial": "To Eof",
          "signature": "Iteratee a m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Iteratee.html#v:skipToEof"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Iteratee",
          "name": "take",
          "package": "snap-core",
          "signature": "Int -\u003e Enumeratee ByteString ByteString m a",
          "source": "src/Snap-Iteratee.html#take",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Iteratee",
          "module": "Snap.Iteratee",
          "name": "take",
          "normalized": "Int-\u003eEnumeratee ByteString ByteString a b",
          "package": "snap-core",
          "signature": "Int-\u003eEnumeratee ByteString ByteString m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Iteratee.html#v:take"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReads n bytes from a stream and applies the given iteratee to the stream\n of the read elements. Reads exactly n bytes, and if the stream is short\n propagates an error.\n\u003c/p\u003e",
          "module": "Snap.Iteratee",
          "name": "takeExactly",
          "package": "snap-core",
          "signature": "Int64 -\u003e Enumeratee ByteString ByteString m a",
          "source": "src/Snap-Iteratee.html#takeExactly",
          "type": "function"
        },
        "index": {
          "description": "Reads bytes from stream and applies the given iteratee to the stream of the read elements Reads exactly bytes and if the stream is short propagates an error",
          "hierarchy": "Snap Iteratee",
          "module": "Snap.Iteratee",
          "name": "takeExactly",
          "normalized": "Int-\u003eEnumeratee ByteString ByteString a b",
          "package": "snap-core",
          "partial": "Exactly",
          "signature": "Int-\u003eEnumeratee ByteString ByteString m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Iteratee.html#v:takeExactly"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Iteratee",
          "name": "takeNoMoreThan",
          "package": "snap-core",
          "signature": "Int64 -\u003e Enumeratee ByteString ByteString m a",
          "source": "src/Snap-Iteratee.html#takeNoMoreThan",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Iteratee",
          "module": "Snap.Iteratee",
          "name": "takeNoMoreThan",
          "normalized": "Int-\u003eEnumeratee ByteString ByteString a b",
          "package": "snap-core",
          "partial": "No More Than",
          "signature": "Int-\u003eEnumeratee ByteString ByteString m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Iteratee.html#v:takeNoMoreThan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe moral equivalent of \u003ccode\u003e\u003ca\u003ethrowIO\u003c/a\u003e\u003c/code\u003e for iteratees.\n\u003c/p\u003e",
          "module": "Snap.Iteratee",
          "name": "throwError",
          "package": "snap-core",
          "signature": "e -\u003e Iteratee a m b",
          "type": "function"
        },
        "index": {
          "description": "The moral equivalent of throwIO for iteratees",
          "hierarchy": "Snap Iteratee",
          "module": "Snap.Iteratee",
          "name": "throwError",
          "normalized": "a-\u003eIteratee b c d",
          "package": "snap-core",
          "partial": "Error",
          "signature": "e-\u003eIteratee a m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Iteratee.html#v:throwError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBuffers an iteratee, \"unsafely\". Here we use a fixed binary buffer\n which we'll re-use, meaning that if you hold on to any of the bytestring\n data passed into your iteratee (instead of, let's say, shoving it right out\n a socket) it'll get changed out from underneath you, breaking referential\n transparency. Use with caution!\n\u003c/p\u003e",
          "module": "Snap.Iteratee",
          "name": "unsafeBufferIteratee",
          "package": "snap-core",
          "signature": "Iteratee ByteString IO a -\u003e IO (Iteratee ByteString IO a)",
          "source": "src/Snap-Iteratee.html#unsafeBufferIteratee",
          "type": "function"
        },
        "index": {
          "description": "Buffers an iteratee unsafely Here we use fixed binary buffer which we ll re-use meaning that if you hold on to any of the bytestring data passed into your iteratee instead of let say shoving it right out socket it ll get changed out from underneath you breaking referential transparency Use with caution",
          "hierarchy": "Snap Iteratee",
          "module": "Snap.Iteratee",
          "name": "unsafeBufferIteratee",
          "normalized": "Iteratee ByteString IO a-\u003eIO(Iteratee ByteString IO a)",
          "package": "snap-core",
          "partial": "Buffer Iteratee",
          "signature": "Iteratee ByteString IO a-\u003eIO(Iteratee ByteString IO a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Iteratee.html#v:unsafeBufferIteratee"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBuffers an iteratee, \"unsafely\". Here we use a fixed binary buffer\n which we'll re-use, meaning that if you hold on to any of the bytestring\n data passed into your iteratee (instead of, let's say, shoving it right out\n a socket) it'll get changed out from underneath you, breaking referential\n transparency. Use with caution!\n\u003c/p\u003e\u003cp\u003eThis version accepts a buffer created by \u003ccode\u003e\u003ca\u003emkIterateeBuffer\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Snap.Iteratee",
          "name": "unsafeBufferIterateeWithBuffer",
          "package": "snap-core",
          "signature": "ForeignPtr CChar -\u003e Iteratee ByteString IO a -\u003e Iteratee ByteString IO a",
          "source": "src/Snap-Iteratee.html#unsafeBufferIterateeWithBuffer",
          "type": "function"
        },
        "index": {
          "description": "Buffers an iteratee unsafely Here we use fixed binary buffer which we ll re-use meaning that if you hold on to any of the bytestring data passed into your iteratee instead of let say shoving it right out socket it ll get changed out from underneath you breaking referential transparency Use with caution This version accepts buffer created by mkIterateeBuffer",
          "hierarchy": "Snap Iteratee",
          "module": "Snap.Iteratee",
          "name": "unsafeBufferIterateeWithBuffer",
          "normalized": "ForeignPtr CChar-\u003eIteratee ByteString IO a-\u003eIteratee ByteString IO a",
          "package": "snap-core",
          "partial": "Buffer Iteratee With Buffer",
          "signature": "ForeignPtr CChar-\u003eIteratee ByteString IO a-\u003eIteratee ByteString IO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Iteratee.html#v:unsafeBufferIterateeWithBuffer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Iteratee",
          "name": "unsafeEnumBuilderToByteString",
          "package": "snap-core",
          "signature": "Enumeratee Builder ByteString m a",
          "source": "src/Snap-Iteratee.html#unsafeEnumBuilderToByteString",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Iteratee",
          "module": "Snap.Iteratee",
          "name": "unsafeEnumBuilderToByteString",
          "package": "snap-core",
          "partial": "Enum Builder To Byte String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Iteratee.html#v:unsafeEnumBuilderToByteString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e\u003ccode\u003e\u003ca\u003eyield\u003c/a\u003e\u003c/code\u003e x extra = \u003ccode\u003e\u003ca\u003ereturnI\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eYield\u003c/a\u003e\u003c/code\u003e x extra)\u003c/pre\u003e\u003cp\u003eWARNING: due to the current encoding of iteratees in this library,\n careless use of the \u003ccode\u003e\u003ca\u003eyield\u003c/a\u003e\u003c/code\u003e primitive may violate the monad laws.\n To prevent this, always make sure that an iteratee never yields\n extra data unless it has received at least one input element.\n\u003c/p\u003e\u003cp\u003eMore strictly, iteratees may not yield data that they did not\n receive as input. Don't use \u003ccode\u003e\u003ca\u003eyield\u003c/a\u003e\u003c/code\u003e to &#8220;inject&#8221; elements\n into the stream.\n\u003c/p\u003e",
          "module": "Snap.Iteratee",
          "name": "yield",
          "package": "snap-core",
          "signature": "b -\u003e Stream a -\u003e Iteratee a m b",
          "type": "function"
        },
        "index": {
          "description": "yield extra returnI Yield extra WARNING due to the current encoding of iteratees in this library careless use of the yield primitive may violate the monad laws To prevent this always make sure that an iteratee never yields extra data unless it has received at least one input element More strictly iteratees may not yield data that they did not receive as input Don use yield to inject elements into the stream",
          "hierarchy": "Snap Iteratee",
          "module": "Snap.Iteratee",
          "name": "yield",
          "normalized": "a-\u003eStream b-\u003eIteratee b c a",
          "package": "snap-core",
          "signature": "b-\u003eStream a-\u003eIteratee a m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Iteratee.html#v:yield"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe Snap.Test module contains primitives and combinators for testing Snap\n applications.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Snap.Test",
          "name": "Test",
          "package": "snap-core",
          "source": "src/Snap-Test.html",
          "type": "module"
        },
        "index": {
          "description": "The Snap.Test module contains primitives and combinators for testing Snap applications",
          "hierarchy": "Snap Test",
          "module": "Snap.Test",
          "name": "Test",
          "package": "snap-core",
          "partial": "Test",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Test.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Test",
          "name": "FileData",
          "package": "snap-core",
          "source": "src/Snap-Internal-Test-RequestBuilder.html#FileData",
          "type": "data"
        },
        "index": {
          "hierarchy": "Snap Test",
          "module": "Snap.Test",
          "name": "FileData",
          "package": "snap-core",
          "partial": "File Data",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Test.html#t:FileData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Test",
          "name": "MultipartParam",
          "package": "snap-core",
          "source": "src/Snap-Internal-Test-RequestBuilder.html#MultipartParam",
          "type": "data"
        },
        "index": {
          "hierarchy": "Snap Test",
          "module": "Snap.Test",
          "name": "MultipartParam",
          "package": "snap-core",
          "partial": "Multipart Param",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Test.html#t:MultipartParam"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA request body of type \"\u003ccode\u003emultipart/form-data\u003c/code\u003e\" consists of a set of\n named form parameters, each of which can by either a list of regular form\n values or a set of file uploads.\n\u003c/p\u003e",
          "module": "Snap.Test",
          "name": "MultipartParams",
          "package": "snap-core",
          "source": "src/Snap-Internal-Test-RequestBuilder.html#MultipartParams",
          "type": "type"
        },
        "index": {
          "description": "request body of type multipart form-data consists of set of named form parameters each of which can by either list of regular form values or set of file uploads",
          "hierarchy": "Snap Test",
          "module": "Snap.Test",
          "name": "MultipartParams",
          "package": "snap-core",
          "partial": "Multipart Params",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Test.html#t:MultipartParams"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRequestBuilder is a monad transformer that allows you to conveniently\n build a snap \u003ccode\u003e\u003ca\u003eRequest\u003c/a\u003e\u003c/code\u003e for testing.\n\u003c/p\u003e",
          "module": "Snap.Test",
          "name": "RequestBuilder",
          "package": "snap-core",
          "source": "src/Snap-Internal-Test-RequestBuilder.html#RequestBuilder",
          "type": "data"
        },
        "index": {
          "description": "RequestBuilder is monad transformer that allows you to conveniently build snap Request for testing",
          "hierarchy": "Snap Test",
          "module": "Snap.Test",
          "name": "RequestBuilder",
          "package": "snap-core",
          "partial": "Request Builder",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Test.html#t:RequestBuilder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eRequestType\u003c/a\u003e\u003c/code\u003e datatype enumerates the different kinds of HTTP\n requests you can generate using the testing interface. Most users will\n prefer to use the \u003ccode\u003e\u003ca\u003eget\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003epostUrlEncoded\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003epostMultipart\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eput\u003c/a\u003e\u003c/code\u003e, and\n \u003ccode\u003e\u003ca\u003edelete\u003c/a\u003e\u003c/code\u003e convenience functions.\n\u003c/p\u003e",
          "module": "Snap.Test",
          "name": "RequestType",
          "package": "snap-core",
          "source": "src/Snap-Internal-Test-RequestBuilder.html#RequestType",
          "type": "data"
        },
        "index": {
          "description": "The RequestType datatype enumerates the different kinds of HTTP requests you can generate using the testing interface Most users will prefer to use the get postUrlEncoded postMultipart put and delete convenience functions",
          "hierarchy": "Snap Test",
          "module": "Snap.Test",
          "name": "RequestType",
          "package": "snap-core",
          "partial": "Request Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Test.html#t:RequestType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Test",
          "name": "DeleteRequest",
          "package": "snap-core",
          "signature": "DeleteRequest",
          "source": "src/Snap-Internal-Test-RequestBuilder.html#RequestType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Test",
          "module": "Snap.Test",
          "name": "DeleteRequest",
          "package": "snap-core",
          "partial": "Delete Request",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Test.html#v:DeleteRequest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Test",
          "name": "FileData",
          "package": "snap-core",
          "signature": "FileData",
          "source": "src/Snap-Internal-Test-RequestBuilder.html#FileData",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Test",
          "module": "Snap.Test",
          "name": "FileData",
          "package": "snap-core",
          "partial": "File Data",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Test.html#v:FileData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ea file upload consisting of the given \u003ccode\u003e\u003ca\u003eFileData\u003c/a\u003e\u003c/code\u003e values.\n\u003c/p\u003e",
          "module": "Snap.Test",
          "name": "Files",
          "package": "snap-core",
          "signature": "Files [FileData]",
          "source": "src/Snap-Internal-Test-RequestBuilder.html#MultipartParam",
          "type": "function"
        },
        "index": {
          "description": "file upload consisting of the given FileData values",
          "hierarchy": "Snap Test",
          "module": "Snap.Test",
          "name": "Files",
          "normalized": "Files[FileData]",
          "package": "snap-core",
          "partial": "Files",
          "signature": "Files[FileData]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Test.html#v:Files"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ea form variable consisting of the given \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e values.\n\u003c/p\u003e",
          "module": "Snap.Test",
          "name": "FormData",
          "package": "snap-core",
          "signature": "FormData [ByteString]",
          "source": "src/Snap-Internal-Test-RequestBuilder.html#MultipartParam",
          "type": "function"
        },
        "index": {
          "description": "form variable consisting of the given ByteString values",
          "hierarchy": "Snap Test",
          "module": "Snap.Test",
          "name": "FormData",
          "normalized": "FormData[ByteString]",
          "package": "snap-core",
          "partial": "Form Data",
          "signature": "FormData[ByteString]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Test.html#v:FormData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Test",
          "name": "GetRequest",
          "package": "snap-core",
          "signature": "GetRequest",
          "source": "src/Snap-Internal-Test-RequestBuilder.html#RequestType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Test",
          "module": "Snap.Test",
          "name": "GetRequest",
          "package": "snap-core",
          "partial": "Get Request",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Test.html#v:GetRequest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Test",
          "name": "MultipartPostRequest",
          "package": "snap-core",
          "signature": "MultipartPostRequest MultipartParams",
          "source": "src/Snap-Internal-Test-RequestBuilder.html#RequestType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Test",
          "module": "Snap.Test",
          "name": "MultipartPostRequest",
          "package": "snap-core",
          "partial": "Multipart Post Request",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Test.html#v:MultipartPostRequest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Test",
          "name": "RequestWithRawBody",
          "package": "snap-core",
          "signature": "RequestWithRawBody Method ByteString",
          "source": "src/Snap-Internal-Test-RequestBuilder.html#RequestType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Test",
          "module": "Snap.Test",
          "name": "RequestWithRawBody",
          "package": "snap-core",
          "partial": "Request With Raw Body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Test.html#v:RequestWithRawBody"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Test",
          "name": "UrlEncodedPostRequest",
          "package": "snap-core",
          "signature": "UrlEncodedPostRequest Params",
          "source": "src/Snap-Internal-Test-RequestBuilder.html#RequestType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Test",
          "module": "Snap.Test",
          "name": "UrlEncodedPostRequest",
          "package": "snap-core",
          "partial": "Url Encoded Post Request",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Test.html#v:UrlEncodedPostRequest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdds the given header to the request being built.\n\u003c/p\u003e",
          "module": "Snap.Test",
          "name": "addHeader",
          "package": "snap-core",
          "signature": "CI ByteString -\u003e ByteString -\u003e RequestBuilder m ()",
          "source": "src/Snap-Internal-Test-RequestBuilder.html#addHeader",
          "type": "function"
        },
        "index": {
          "description": "Adds the given header to the request being built",
          "hierarchy": "Snap Test",
          "module": "Snap.Test",
          "name": "addHeader",
          "normalized": "CI ByteString-\u003eByteString-\u003eRequestBuilder a()",
          "package": "snap-core",
          "partial": "Header",
          "signature": "CI ByteString-\u003eByteString-\u003eRequestBuilder m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Test.html#v:addHeader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a Response, asserts that its HTTP status code is 404 (Not Found).\n\u003c/p\u003e",
          "module": "Snap.Test",
          "name": "assert404",
          "package": "snap-core",
          "signature": "Response -\u003e Assertion",
          "source": "src/Snap-Internal-Test-Assertions.html#assert404",
          "type": "function"
        },
        "index": {
          "description": "Given Response asserts that its HTTP status code is Not Found",
          "hierarchy": "Snap Test",
          "module": "Snap.Test",
          "name": "assert404",
          "normalized": "Response-\u003eAssertion",
          "package": "snap-core",
          "signature": "Response-\u003eAssertion",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Test.html#v:assert404"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a Response, asserts that its body matches the given regular\n expression.\n\u003c/p\u003e",
          "module": "Snap.Test",
          "name": "assertBodyContains",
          "package": "snap-core",
          "signature": "ByteString-\u003e Response-\u003e Assertion",
          "type": "function"
        },
        "index": {
          "description": "Given Response asserts that its body matches the given regular expression",
          "hierarchy": "Snap Test",
          "module": "Snap.Test",
          "name": "assertBodyContains",
          "normalized": "ByteString-\u003eResponse-\u003eAssertion",
          "package": "snap-core",
          "partial": "Body Contains",
          "signature": "ByteString-\u003eResponse-\u003eAssertion",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Test.html#v:assertBodyContains"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a Response, asserts that its HTTP status code is between 300 and\n 399 (a redirect).\n\u003c/p\u003e",
          "module": "Snap.Test",
          "name": "assertRedirect",
          "package": "snap-core",
          "signature": "Response -\u003e Assertion",
          "source": "src/Snap-Internal-Test-Assertions.html#assertRedirect",
          "type": "function"
        },
        "index": {
          "description": "Given Response asserts that its HTTP status code is between and redirect",
          "hierarchy": "Snap Test",
          "module": "Snap.Test",
          "name": "assertRedirect",
          "normalized": "Response-\u003eAssertion",
          "package": "snap-core",
          "partial": "Redirect",
          "signature": "Response-\u003eAssertion",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Test.html#v:assertRedirect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a Response, asserts that its HTTP status code is between 300 and\n 399 (a redirect), and that the Location header of the Response points to\n the specified URI.\n\u003c/p\u003e",
          "module": "Snap.Test",
          "name": "assertRedirectTo",
          "package": "snap-core",
          "signature": "ByteString-\u003e Response-\u003e Assertion",
          "type": "function"
        },
        "index": {
          "description": "Given Response asserts that its HTTP status code is between and redirect and that the Location header of the Response points to the specified URI",
          "hierarchy": "Snap Test",
          "module": "Snap.Test",
          "name": "assertRedirectTo",
          "normalized": "ByteString-\u003eResponse-\u003eAssertion",
          "package": "snap-core",
          "partial": "Redirect To",
          "signature": "ByteString-\u003eResponse-\u003eAssertion",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Test.html#v:assertRedirectTo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a Response, asserts that its HTTP status code is 200 (success).\n\u003c/p\u003e",
          "module": "Snap.Test",
          "name": "assertSuccess",
          "package": "snap-core",
          "signature": "Response -\u003e Assertion",
          "source": "src/Snap-Internal-Test-Assertions.html#assertSuccess",
          "type": "function"
        },
        "index": {
          "description": "Given Response asserts that its HTTP status code is success",
          "hierarchy": "Snap Test",
          "module": "Snap.Test",
          "name": "assertSuccess",
          "normalized": "Response-\u003eAssertion",
          "package": "snap-core",
          "partial": "Success",
          "signature": "Response-\u003eAssertion",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Test.html#v:assertSuccess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRuns a \u003ccode\u003e\u003ca\u003eRequestBuilder\u003c/a\u003e\u003c/code\u003e, producing the desired \u003ccode\u003e\u003ca\u003eRequest\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eN.B. \u003cem\u003eplease\u003c/em\u003e don't use the request you get here in a real Snap application;\n things will probably break. Don't say you weren't warned :-)\n\u003c/p\u003e",
          "module": "Snap.Test",
          "name": "buildRequest",
          "package": "snap-core",
          "signature": "RequestBuilder m () -\u003e m Request",
          "source": "src/Snap-Internal-Test-RequestBuilder.html#buildRequest",
          "type": "function"
        },
        "index": {
          "description": "Runs RequestBuilder producing the desired Request N.B please don use the request you get here in real Snap application things will probably break Don say you weren warned",
          "hierarchy": "Snap Test",
          "module": "Snap.Test",
          "name": "buildRequest",
          "normalized": "RequestBuilder a()-\u003ea Request",
          "package": "snap-core",
          "partial": "Request",
          "signature": "RequestBuilder m()-\u003em Request",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Test.html#v:buildRequest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBuilds an HTTP \"DELETE\" request with the given query parameters.\n\u003c/p\u003e",
          "module": "Snap.Test",
          "name": "delete",
          "package": "snap-core",
          "signature": "ByteString-\u003e Params-\u003e RequestBuilder m ()",
          "type": "function"
        },
        "index": {
          "description": "Builds an HTTP DELETE request with the given query parameters",
          "hierarchy": "Snap Test",
          "module": "Snap.Test",
          "name": "delete",
          "normalized": "ByteString-\u003eParams-\u003eRequestBuilder a()",
          "package": "snap-core",
          "signature": "ByteString-\u003eParams-\u003eRequestBuilder m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Test.html#v:delete"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDumps the given response to stdout.\n\u003c/p\u003e",
          "module": "Snap.Test",
          "name": "dumpResponse",
          "package": "snap-core",
          "signature": "Response -\u003e IO ()",
          "source": "src/Snap-Internal-Test-RequestBuilder.html#dumpResponse",
          "type": "function"
        },
        "index": {
          "description": "Dumps the given response to stdout",
          "hierarchy": "Snap Test",
          "module": "Snap.Test",
          "name": "dumpResponse",
          "normalized": "Response-\u003eIO()",
          "package": "snap-core",
          "partial": "Response",
          "signature": "Response-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Test.html#v:dumpResponse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a web handler in the \u003ccode\u003e\u003ca\u003eSnap\u003c/a\u003e\u003c/code\u003e monad, and a \u003ccode\u003e\u003ca\u003eRequestBuilder\u003c/a\u003e\u003c/code\u003e defining a\n test request, runs the handler and returns the monadic value it produces.\n\u003c/p\u003e\u003cp\u003eThrows an exception if the \u003ccode\u003e\u003ca\u003eSnap\u003c/a\u003e\u003c/code\u003e handler early-terminates with \u003ccode\u003e\u003ca\u003efinishWith\u003c/a\u003e\u003c/code\u003e\n or \u003ccode\u003e\u003ca\u003emzero\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Snap.Test",
          "name": "evalHandler",
          "package": "snap-core",
          "signature": "RequestBuilder m () -\u003e Snap a -\u003e m a",
          "source": "src/Snap-Internal-Test-RequestBuilder.html#evalHandler",
          "type": "function"
        },
        "index": {
          "description": "Given web handler in the Snap monad and RequestBuilder defining test request runs the handler and returns the monadic value it produces Throws an exception if the Snap handler early-terminates with finishWith or mzero",
          "hierarchy": "Snap Test",
          "module": "Snap.Test",
          "name": "evalHandler",
          "normalized": "RequestBuilder a()-\u003eSnap b-\u003ea b",
          "package": "snap-core",
          "partial": "Handler",
          "signature": "RequestBuilder m()-\u003eSnap a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Test.html#v:evalHandler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a web handler in some arbitrary \u003ccode\u003e\u003ca\u003eMonadSnap\u003c/a\u003e\u003c/code\u003e monad, a function\n specifying how to evaluate it within the context of the test monad, and a\n \u003ccode\u003e\u003ca\u003eRequestBuilder\u003c/a\u003e\u003c/code\u003e defining a test request, runs the handler, returning the\n monadic value it produces.\n\u003c/p\u003e\u003cp\u003eThrows an exception if the \u003ccode\u003e\u003ca\u003eSnap\u003c/a\u003e\u003c/code\u003e handler early-terminates with \u003ccode\u003e\u003ca\u003efinishWith\u003c/a\u003e\u003c/code\u003e\n or \u003ccode\u003e\u003ca\u003emzero\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Snap.Test",
          "name": "evalHandlerM",
          "package": "snap-core",
          "signature": "(forall a.  Request -\u003e n a -\u003e m a)-\u003e RequestBuilder m ()-\u003e n b-\u003e m b",
          "type": "function"
        },
        "index": {
          "description": "Given web handler in some arbitrary MonadSnap monad function specifying how to evaluate it within the context of the test monad and RequestBuilder defining test request runs the handler returning the monadic value it produces Throws an exception if the Snap handler early-terminates with finishWith or mzero",
          "hierarchy": "Snap Test",
          "module": "Snap.Test",
          "name": "evalHandlerM",
          "normalized": "(a b Request-\u003ec d-\u003ee d)-\u003eRequestBuilder e()-\u003ec f-\u003ee f",
          "package": "snap-core",
          "partial": "Handler",
          "signature": "(forall a. Request-\u003en a-\u003em a)-\u003eRequestBuilder m()-\u003en b-\u003em b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Test.html#v:evalHandlerM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe file's content-type\n\u003c/p\u003e",
          "module": "Snap.Test",
          "name": "fdContentType",
          "package": "snap-core",
          "signature": "ByteString",
          "source": "src/Snap-Internal-Test-RequestBuilder.html#FileData",
          "type": "function"
        },
        "index": {
          "description": "the file content-type",
          "hierarchy": "Snap Test",
          "module": "Snap.Test",
          "name": "fdContentType",
          "package": "snap-core",
          "partial": "Content Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Test.html#v:fdContentType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe file contents\n\u003c/p\u003e",
          "module": "Snap.Test",
          "name": "fdContents",
          "package": "snap-core",
          "signature": "ByteString",
          "source": "src/Snap-Internal-Test-RequestBuilder.html#FileData",
          "type": "function"
        },
        "index": {
          "description": "the file contents",
          "hierarchy": "Snap Test",
          "module": "Snap.Test",
          "name": "fdContents",
          "package": "snap-core",
          "partial": "Contents",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Test.html#v:fdContents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe file's name\n\u003c/p\u003e",
          "module": "Snap.Test",
          "name": "fdFileName",
          "package": "snap-core",
          "signature": "ByteString",
          "source": "src/Snap-Internal-Test-RequestBuilder.html#FileData",
          "type": "function"
        },
        "index": {
          "description": "the file name",
          "hierarchy": "Snap Test",
          "module": "Snap.Test",
          "name": "fdFileName",
          "package": "snap-core",
          "partial": "File Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Test.html#v:fdFileName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBuilds an HTTP \"GET\" request with the given query parameters.\n\u003c/p\u003e",
          "module": "Snap.Test",
          "name": "get",
          "package": "snap-core",
          "signature": "ByteString-\u003e Params-\u003e RequestBuilder m ()",
          "type": "function"
        },
        "index": {
          "description": "Builds an HTTP GET request with the given query parameters",
          "hierarchy": "Snap Test",
          "module": "Snap.Test",
          "name": "get",
          "normalized": "ByteString-\u003eParams-\u003eRequestBuilder a()",
          "package": "snap-core",
          "signature": "ByteString-\u003eParams-\u003eRequestBuilder m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Test.html#v:get"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Test",
          "name": "getResponseBody",
          "package": "snap-core",
          "signature": "Response -\u003e IO ByteString",
          "source": "src/Snap-Internal-Test-Assertions.html#getResponseBody",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Test",
          "module": "Snap.Test",
          "name": "getResponseBody",
          "normalized": "Response-\u003eIO ByteString",
          "package": "snap-core",
          "partial": "Response Body",
          "signature": "Response-\u003eIO ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Test.html#v:getResponseBody"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBuilds an HTTP \"POST\" request with the given form parameters, using the\n \"form-data/multipart\" MIME type.\n\u003c/p\u003e",
          "module": "Snap.Test",
          "name": "postMultipart",
          "package": "snap-core",
          "signature": "ByteString-\u003e MultipartParams-\u003e RequestBuilder m ()",
          "type": "function"
        },
        "index": {
          "description": "Builds an HTTP POST request with the given form parameters using the form-data multipart MIME type",
          "hierarchy": "Snap Test",
          "module": "Snap.Test",
          "name": "postMultipart",
          "normalized": "ByteString-\u003eMultipartParams-\u003eRequestBuilder a()",
          "package": "snap-core",
          "partial": "Multipart",
          "signature": "ByteString-\u003eMultipartParams-\u003eRequestBuilder m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Test.html#v:postMultipart"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBuilds a \"raw\" HTTP \"POST\" request, with the given MIME type and body\n contents.\n\u003c/p\u003e",
          "module": "Snap.Test",
          "name": "postRaw",
          "package": "snap-core",
          "signature": "ByteString-\u003e ByteString-\u003e ByteString-\u003e RequestBuilder m ()",
          "type": "function"
        },
        "index": {
          "description": "Builds raw HTTP POST request with the given MIME type and body contents",
          "hierarchy": "Snap Test",
          "module": "Snap.Test",
          "name": "postRaw",
          "normalized": "ByteString-\u003eByteString-\u003eByteString-\u003eRequestBuilder a()",
          "package": "snap-core",
          "partial": "Raw",
          "signature": "ByteString-\u003eByteString-\u003eByteString-\u003eRequestBuilder m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Test.html#v:postRaw"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBuilds an HTTP \"POST\" request with the given form parameters, using the\n \"application/x-www-form-urlencoded\" MIME type.\n\u003c/p\u003e",
          "module": "Snap.Test",
          "name": "postUrlEncoded",
          "package": "snap-core",
          "signature": "ByteString-\u003e Params-\u003e RequestBuilder m ()",
          "type": "function"
        },
        "index": {
          "description": "Builds an HTTP POST request with the given form parameters using the application x-www-form-urlencoded MIME type",
          "hierarchy": "Snap Test",
          "module": "Snap.Test",
          "name": "postUrlEncoded",
          "normalized": "ByteString-\u003eParams-\u003eRequestBuilder a()",
          "package": "snap-core",
          "partial": "Url Encoded",
          "signature": "ByteString-\u003eParams-\u003eRequestBuilder m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Test.html#v:postUrlEncoded"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBuilds an HTTP \"PUT\" request.\n\u003c/p\u003e",
          "module": "Snap.Test",
          "name": "put",
          "package": "snap-core",
          "signature": "ByteString-\u003e ByteString-\u003e ByteString-\u003e RequestBuilder m ()",
          "type": "function"
        },
        "index": {
          "description": "Builds an HTTP PUT request",
          "hierarchy": "Snap Test",
          "module": "Snap.Test",
          "name": "put",
          "normalized": "ByteString-\u003eByteString-\u003eByteString-\u003eRequestBuilder a()",
          "package": "snap-core",
          "signature": "ByteString-\u003eByteString-\u003eByteString-\u003eRequestBuilder m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Test.html#v:put"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts the given response to a bytestring.\n\u003c/p\u003e",
          "module": "Snap.Test",
          "name": "responseToString",
          "package": "snap-core",
          "signature": "Response -\u003e IO ByteString",
          "source": "src/Snap-Internal-Test-RequestBuilder.html#responseToString",
          "type": "function"
        },
        "index": {
          "description": "Converts the given response to bytestring",
          "hierarchy": "Snap Test",
          "module": "Snap.Test",
          "name": "responseToString",
          "normalized": "Response-\u003eIO ByteString",
          "package": "snap-core",
          "partial": "To String",
          "signature": "Response-\u003eIO ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Test.html#v:responseToString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a web handler in the \u003ccode\u003e\u003ca\u003eSnap\u003c/a\u003e\u003c/code\u003e monad, and a \u003ccode\u003e\u003ca\u003eRequestBuilder\u003c/a\u003e\u003c/code\u003e defining\n a test request, runs the handler, producing an HTTP \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis function will produce almost exactly the same output as running the\n handler in a real server, except that chunked transfer encoding is not\n applied, and the \"Transfer-Encoding\" header is not set (this makes it\n easier to test response output).\n\u003c/p\u003e",
          "module": "Snap.Test",
          "name": "runHandler",
          "package": "snap-core",
          "signature": "RequestBuilder m ()-\u003e Snap a-\u003e m Response",
          "type": "function"
        },
        "index": {
          "description": "Given web handler in the Snap monad and RequestBuilder defining test request runs the handler producing an HTTP Response This function will produce almost exactly the same output as running the handler in real server except that chunked transfer encoding is not applied and the Transfer-Encoding header is not set this makes it easier to test response output",
          "hierarchy": "Snap Test",
          "module": "Snap.Test",
          "name": "runHandler",
          "normalized": "RequestBuilder a()-\u003eSnap b-\u003ea Response",
          "package": "snap-core",
          "partial": "Handler",
          "signature": "RequestBuilder m()-\u003eSnap a-\u003em Response",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Test.html#v:runHandler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a web handler in some arbitrary \u003ccode\u003e\u003ca\u003eMonadSnap\u003c/a\u003e\u003c/code\u003e monad, a function\n specifying how to evaluate it within the context of the test monad, and a\n \u003ccode\u003e\u003ca\u003eRequestBuilder\u003c/a\u003e\u003c/code\u003e defining a test request, runs the handler, producing an\n HTTP \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Snap.Test",
          "name": "runHandlerM",
          "package": "snap-core",
          "signature": "(forall a.  Request -\u003e n a -\u003e m Response)-\u003e RequestBuilder m ()-\u003e n b-\u003e m Response",
          "type": "function"
        },
        "index": {
          "description": "Given web handler in some arbitrary MonadSnap monad function specifying how to evaluate it within the context of the test monad and RequestBuilder defining test request runs the handler producing an HTTP Response",
          "hierarchy": "Snap Test",
          "module": "Snap.Test",
          "name": "runHandlerM",
          "normalized": "(a b Request-\u003ec d-\u003ee Response)-\u003eRequestBuilder e()-\u003ec f-\u003ee Response",
          "package": "snap-core",
          "partial": "Handler",
          "signature": "(forall a. Request-\u003en a-\u003em Response)-\u003eRequestBuilder m()-\u003en b-\u003em Response",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Test.html#v:runHandlerM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSets the request's \u003ccode\u003econtent-type\u003c/code\u003e to the given MIME type.\n\u003c/p\u003e",
          "module": "Snap.Test",
          "name": "setContentType",
          "package": "snap-core",
          "signature": "ByteString -\u003e RequestBuilder m ()",
          "source": "src/Snap-Internal-Test-RequestBuilder.html#setContentType",
          "type": "function"
        },
        "index": {
          "description": "Sets the request content-type to the given MIME type",
          "hierarchy": "Snap Test",
          "module": "Snap.Test",
          "name": "setContentType",
          "normalized": "ByteString-\u003eRequestBuilder a()",
          "package": "snap-core",
          "partial": "Content Type",
          "signature": "ByteString-\u003eRequestBuilder m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Test.html#v:setContentType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSets the given header in the request being built, overwriting any header\n with the same name already present.\n\u003c/p\u003e",
          "module": "Snap.Test",
          "name": "setHeader",
          "package": "snap-core",
          "signature": "CI ByteString -\u003e ByteString -\u003e RequestBuilder m ()",
          "source": "src/Snap-Internal-Test-RequestBuilder.html#setHeader",
          "type": "function"
        },
        "index": {
          "description": "Sets the given header in the request being built overwriting any header with the same name already present",
          "hierarchy": "Snap Test",
          "module": "Snap.Test",
          "name": "setHeader",
          "normalized": "CI ByteString-\u003eByteString-\u003eRequestBuilder a()",
          "package": "snap-core",
          "partial": "Header",
          "signature": "CI ByteString-\u003eByteString-\u003eRequestBuilder m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Test.html#v:setHeader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSets the test request's http version\n\u003c/p\u003e",
          "module": "Snap.Test",
          "name": "setHttpVersion",
          "package": "snap-core",
          "signature": "(Int, Int) -\u003e RequestBuilder m ()",
          "source": "src/Snap-Internal-Test-RequestBuilder.html#setHttpVersion",
          "type": "function"
        },
        "index": {
          "description": "Sets the test request http version",
          "hierarchy": "Snap Test",
          "module": "Snap.Test",
          "name": "setHttpVersion",
          "normalized": "(Int,Int)-\u003eRequestBuilder a()",
          "package": "snap-core",
          "partial": "Http Version",
          "signature": "(Int,Int)-\u003eRequestBuilder m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Test.html#v:setHttpVersion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEscapes the given parameter mapping and sets it as the request's query\n string.\n\u003c/p\u003e",
          "module": "Snap.Test",
          "name": "setQueryString",
          "package": "snap-core",
          "signature": "Params -\u003e RequestBuilder m ()",
          "source": "src/Snap-Internal-Test-RequestBuilder.html#setQueryString",
          "type": "function"
        },
        "index": {
          "description": "Escapes the given parameter mapping and sets it as the request query string",
          "hierarchy": "Snap Test",
          "module": "Snap.Test",
          "name": "setQueryString",
          "normalized": "Params-\u003eRequestBuilder a()",
          "package": "snap-core",
          "partial": "Query String",
          "signature": "Params-\u003eRequestBuilder m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Test.html#v:setQueryString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSets the request's query string to be the raw bytestring provided,\n without any escaping or other interpretation. Most users should instead\n choose the \u003ccode\u003e\u003ca\u003esetQueryString\u003c/a\u003e\u003c/code\u003e function, which takes a parameter mapping.\n\u003c/p\u003e",
          "module": "Snap.Test",
          "name": "setQueryStringRaw",
          "package": "snap-core",
          "signature": "ByteString -\u003e RequestBuilder m ()",
          "source": "src/Snap-Internal-Test-RequestBuilder.html#setQueryStringRaw",
          "type": "function"
        },
        "index": {
          "description": "Sets the request query string to be the raw bytestring provided without any escaping or other interpretation Most users should instead choose the setQueryString function which takes parameter mapping",
          "hierarchy": "Snap Test",
          "module": "Snap.Test",
          "name": "setQueryStringRaw",
          "normalized": "ByteString-\u003eRequestBuilder a()",
          "package": "snap-core",
          "partial": "Query String Raw",
          "signature": "ByteString-\u003eRequestBuilder m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Test.html#v:setQueryStringRaw"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSets the request's path. The path provided must begin with a \"\u003ccode\u003e/\u003c/code\u003e\" and\n must \u003cem\u003enot\u003c/em\u003e contain a query string; if you want to provide a query string\n in your test request, you must use \u003ccode\u003e\u003ca\u003esetQueryString\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003esetQueryStringRaw\u003c/a\u003e\u003c/code\u003e.\n Note that \u003ccode\u003e\u003ca\u003erqContextPath\u003c/a\u003e\u003c/code\u003e is never set by any \u003ccode\u003e\u003ca\u003eRequestBuilder\u003c/a\u003e\u003c/code\u003e function.\n\u003c/p\u003e",
          "module": "Snap.Test",
          "name": "setRequestPath",
          "package": "snap-core",
          "signature": "ByteString -\u003e RequestBuilder m ()",
          "source": "src/Snap-Internal-Test-RequestBuilder.html#setRequestPath",
          "type": "function"
        },
        "index": {
          "description": "Sets the request path The path provided must begin with and must not contain query string if you want to provide query string in your test request you must use setQueryString or setQueryStringRaw Note that rqContextPath is never set by any RequestBuilder function",
          "hierarchy": "Snap Test",
          "module": "Snap.Test",
          "name": "setRequestPath",
          "normalized": "ByteString-\u003eRequestBuilder a()",
          "package": "snap-core",
          "partial": "Request Path",
          "signature": "ByteString-\u003eRequestBuilder m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Test.html#v:setRequestPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSets the type of the \u003ccode\u003e\u003ca\u003eRequest\u003c/a\u003e\u003c/code\u003e being built.\n\u003c/p\u003e",
          "module": "Snap.Test",
          "name": "setRequestType",
          "package": "snap-core",
          "signature": "RequestType -\u003e RequestBuilder m ()",
          "source": "src/Snap-Internal-Test-RequestBuilder.html#setRequestType",
          "type": "function"
        },
        "index": {
          "description": "Sets the type of the Request being built",
          "hierarchy": "Snap Test",
          "module": "Snap.Test",
          "name": "setRequestType",
          "normalized": "RequestType-\u003eRequestBuilder a()",
          "package": "snap-core",
          "partial": "Request Type",
          "signature": "RequestType-\u003eRequestBuilder m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Test.html#v:setRequestType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eControls whether the test request being generated appears to be an https\n request or not.\n\u003c/p\u003e",
          "module": "Snap.Test",
          "name": "setSecure",
          "package": "snap-core",
          "signature": "Bool -\u003e RequestBuilder m ()",
          "source": "src/Snap-Internal-Test-RequestBuilder.html#setSecure",
          "type": "function"
        },
        "index": {
          "description": "Controls whether the test request being generated appears to be an https request or not",
          "hierarchy": "Snap Test",
          "module": "Snap.Test",
          "name": "setSecure",
          "normalized": "Bool-\u003eRequestBuilder a()",
          "package": "snap-core",
          "partial": "Secure",
          "signature": "Bool-\u003eRequestBuilder m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Test.html#v:setSecure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAn opaque data type for HTTP headers. Intended to be imported qualified,\n i.e:\n\u003c/p\u003e\u003cpre\u003e import           Snap.Types.Headers (Headers)\n import qualified Snap.Types.Headers as H\n\n foo :: Headers\n foo = H.empty\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Snap.Types.Headers",
          "name": "Headers",
          "package": "snap-core",
          "source": "src/Snap-Types-Headers.html",
          "type": "module"
        },
        "index": {
          "description": "An opaque data type for HTTP headers Intended to be imported qualified i.e import Snap.Types.Headers Headers import qualified Snap.Types.Headers as foo Headers foo H.empty",
          "hierarchy": "Snap Types Headers",
          "module": "Snap.Types.Headers",
          "name": "Headers",
          "package": "snap-core",
          "partial": "Headers",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Types-Headers.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Types.Headers",
          "name": "Headers",
          "package": "snap-core",
          "source": "src/Snap-Types-Headers.html#Headers",
          "type": "data"
        },
        "index": {
          "hierarchy": "Snap Types Headers",
          "module": "Snap.Types.Headers",
          "name": "Headers",
          "package": "snap-core",
          "partial": "Headers",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Types-Headers.html#t:Headers"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Types.Headers",
          "name": "delete",
          "package": "snap-core",
          "signature": "CI ByteString -\u003e Headers -\u003e Headers",
          "source": "src/Snap-Types-Headers.html#delete",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Types Headers",
          "module": "Snap.Types.Headers",
          "name": "delete",
          "normalized": "CI ByteString-\u003eHeaders-\u003eHeaders",
          "package": "snap-core",
          "signature": "CI ByteString-\u003eHeaders-\u003eHeaders",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Types-Headers.html#v:delete"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Types.Headers",
          "name": "empty",
          "package": "snap-core",
          "signature": "Headers",
          "source": "src/Snap-Types-Headers.html#empty",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Types Headers",
          "module": "Snap.Types.Headers",
          "name": "empty",
          "package": "snap-core",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Types-Headers.html#v:empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Types.Headers",
          "name": "fold",
          "package": "snap-core",
          "signature": "(a -\u003e CI ByteString -\u003e [ByteString] -\u003e a) -\u003e a -\u003e Headers -\u003e a",
          "source": "src/Snap-Types-Headers.html#fold",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Types Headers",
          "module": "Snap.Types.Headers",
          "name": "fold",
          "normalized": "(a-\u003eCI ByteString-\u003e[ByteString]-\u003ea)-\u003ea-\u003eHeaders-\u003ea",
          "package": "snap-core",
          "signature": "(a-\u003eCI ByteString-\u003e[ByteString]-\u003ea)-\u003ea-\u003eHeaders-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Types-Headers.html#v:fold"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Types.Headers",
          "name": "fromList",
          "package": "snap-core",
          "signature": "[(CI ByteString, ByteString)] -\u003e Headers",
          "source": "src/Snap-Types-Headers.html#fromList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Types Headers",
          "module": "Snap.Types.Headers",
          "name": "fromList",
          "normalized": "[(CI ByteString,ByteString)]-\u003eHeaders",
          "package": "snap-core",
          "partial": "List",
          "signature": "[(CI ByteString,ByteString)]-\u003eHeaders",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Types-Headers.html#v:fromList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Types.Headers",
          "name": "insert",
          "package": "snap-core",
          "signature": "CI ByteString -\u003e ByteString -\u003e Headers -\u003e Headers",
          "source": "src/Snap-Types-Headers.html#insert",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Types Headers",
          "module": "Snap.Types.Headers",
          "name": "insert",
          "normalized": "CI ByteString-\u003eByteString-\u003eHeaders-\u003eHeaders",
          "package": "snap-core",
          "signature": "CI ByteString-\u003eByteString-\u003eHeaders-\u003eHeaders",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Types-Headers.html#v:insert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Types.Headers",
          "name": "lookup",
          "package": "snap-core",
          "signature": "CI ByteString -\u003e Headers -\u003e Maybe [ByteString]",
          "source": "src/Snap-Types-Headers.html#lookup",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Types Headers",
          "module": "Snap.Types.Headers",
          "name": "lookup",
          "normalized": "CI ByteString-\u003eHeaders-\u003eMaybe[ByteString]",
          "package": "snap-core",
          "signature": "CI ByteString-\u003eHeaders-\u003eMaybe[ByteString]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Types-Headers.html#v:lookup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Types.Headers",
          "name": "lookupWithDefault",
          "package": "snap-core",
          "signature": "ByteString -\u003e CI ByteString -\u003e Headers -\u003e [ByteString]",
          "source": "src/Snap-Types-Headers.html#lookupWithDefault",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Types Headers",
          "module": "Snap.Types.Headers",
          "name": "lookupWithDefault",
          "normalized": "ByteString-\u003eCI ByteString-\u003eHeaders-\u003e[ByteString]",
          "package": "snap-core",
          "partial": "With Default",
          "signature": "ByteString-\u003eCI ByteString-\u003eHeaders-\u003e[ByteString]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Types-Headers.html#v:lookupWithDefault"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Types.Headers",
          "name": "member",
          "package": "snap-core",
          "signature": "CI ByteString -\u003e Headers -\u003e Bool",
          "source": "src/Snap-Types-Headers.html#member",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Types Headers",
          "module": "Snap.Types.Headers",
          "name": "member",
          "normalized": "CI ByteString-\u003eHeaders-\u003eBool",
          "package": "snap-core",
          "signature": "CI ByteString-\u003eHeaders-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Types-Headers.html#v:member"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Types.Headers",
          "name": "null",
          "package": "snap-core",
          "signature": "Headers -\u003e Bool",
          "source": "src/Snap-Types-Headers.html#null",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Types Headers",
          "module": "Snap.Types.Headers",
          "name": "null",
          "normalized": "Headers-\u003eBool",
          "package": "snap-core",
          "signature": "Headers-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Types-Headers.html#v:null"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Types.Headers",
          "name": "set",
          "package": "snap-core",
          "signature": "CI ByteString -\u003e ByteString -\u003e Headers -\u003e Headers",
          "source": "src/Snap-Types-Headers.html#set",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Types Headers",
          "module": "Snap.Types.Headers",
          "name": "set",
          "normalized": "CI ByteString-\u003eByteString-\u003eHeaders-\u003eHeaders",
          "package": "snap-core",
          "signature": "CI ByteString-\u003eByteString-\u003eHeaders-\u003eHeaders",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Types-Headers.html#v:set"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Types.Headers",
          "name": "toList",
          "package": "snap-core",
          "signature": "Headers -\u003e [(CI ByteString, ByteString)]",
          "source": "src/Snap-Types-Headers.html#toList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Types Headers",
          "module": "Snap.Types.Headers",
          "name": "toList",
          "normalized": "Headers-\u003e[(CI ByteString,ByteString)]",
          "package": "snap-core",
          "partial": "List",
          "signature": "Headers-\u003e[(CI ByteString,ByteString)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Types-Headers.html#v:toList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: As of 0.6, use Snap.Core instead\n\u003c/p\u003e\u003c/div\u003e\u003cp\u003eAs of Snap 0.6, the \u003ca\u003eSnap.Types\u003c/a\u003e module is deprecated: please use\n \u003ca\u003eSnap.Core\u003c/a\u003e instead.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Snap.Types",
          "name": "Types",
          "package": "snap-core",
          "source": "src/Snap-Types.html",
          "type": "module"
        },
        "index": {
          "description": "Deprecated As of use Snap.Core instead As of Snap the Snap.Types module is deprecated please use Snap.Core instead",
          "hierarchy": "Snap Types",
          "module": "Snap.Types",
          "name": "Types",
          "package": "snap-core",
          "partial": "Types",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Types.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eContains web handlers to serve files from a directory.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Snap.Util.FileServe",
          "name": "FileServe",
          "package": "snap-core",
          "source": "src/Snap-Util-FileServe.html",
          "type": "module"
        },
        "index": {
          "description": "Contains web handlers to serve files from directory",
          "hierarchy": "Snap Util FileServe",
          "module": "Snap.Util.FileServe",
          "name": "FileServe",
          "package": "snap-core",
          "partial": "File Serve",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Util-FileServe.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA collection of options for serving static files out of a directory.\n\u003c/p\u003e",
          "module": "Snap.Util.FileServe",
          "name": "DirectoryConfig",
          "package": "snap-core",
          "source": "src/Snap-Util-FileServe.html#DirectoryConfig",
          "type": "data"
        },
        "index": {
          "description": "collection of options for serving static files out of directory",
          "hierarchy": "Snap Util FileServe",
          "module": "Snap.Util.FileServe",
          "name": "DirectoryConfig",
          "package": "snap-core",
          "partial": "Directory Config",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Util-FileServe.html#t:DirectoryConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type alias for dynamic handlers\n\u003c/p\u003e",
          "module": "Snap.Util.FileServe",
          "name": "HandlerMap",
          "package": "snap-core",
          "source": "src/Snap-Util-FileServe.html#HandlerMap",
          "type": "type"
        },
        "index": {
          "description": "type alias for dynamic handlers",
          "hierarchy": "Snap Util FileServe",
          "module": "Snap.Util.FileServe",
          "name": "HandlerMap",
          "package": "snap-core",
          "partial": "Handler Map",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Util-FileServe.html#t:HandlerMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type alias for MIME type\n\u003c/p\u003e",
          "module": "Snap.Util.FileServe",
          "name": "MimeMap",
          "package": "snap-core",
          "source": "src/Snap-Util-FileServe.html#MimeMap",
          "type": "type"
        },
        "index": {
          "description": "type alias for MIME type",
          "hierarchy": "Snap Util FileServe",
          "module": "Snap.Util.FileServe",
          "name": "MimeMap",
          "package": "snap-core",
          "partial": "Mime Map",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Util-FileServe.html#t:MimeMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Util.FileServe",
          "name": "DirectoryConfig",
          "package": "snap-core",
          "signature": "DirectoryConfig",
          "source": "src/Snap-Util-FileServe.html#DirectoryConfig",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Util FileServe",
          "module": "Snap.Util.FileServe",
          "name": "DirectoryConfig",
          "package": "snap-core",
          "partial": "Directory Config",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Util-FileServe.html#v:DirectoryConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA reasonable default configuration for directory serving.  This\n configuration uses built-in MIME types from \u003ccode\u003e\u003ca\u003edefaultMimeTypes\u003c/a\u003e\u003c/code\u003e, serves\n common index files \u003ccode\u003eindex.html\u003c/code\u003e and \u003ccode\u003eindex.htm\u003c/code\u003e, but does not autogenerate\n directory indexes, nor have any dynamic file handlers. The \u003ccode\u003e\u003ca\u003epreServeHook\u003c/a\u003e\u003c/code\u003e\n will not do anything.\n\u003c/p\u003e",
          "module": "Snap.Util.FileServe",
          "name": "defaultDirectoryConfig",
          "package": "snap-core",
          "signature": "DirectoryConfig m",
          "source": "src/Snap-Util-FileServe.html#defaultDirectoryConfig",
          "type": "function"
        },
        "index": {
          "description": "reasonable default configuration for directory serving This configuration uses built-in MIME types from defaultMimeTypes serves common index files index.html and index.htm but does not autogenerate directory indexes nor have any dynamic file handlers The preServeHook will not do anything",
          "hierarchy": "Snap Util FileServe",
          "module": "Snap.Util.FileServe",
          "name": "defaultDirectoryConfig",
          "package": "snap-core",
          "partial": "Directory Config",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Util-FileServe.html#v:defaultDirectoryConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn automatic index generator, which is fairly small and does not rely on\n any external files (which may not be there depending on external request\n routing).\n\u003c/p\u003e\u003cp\u003eA \u003ccode\u003e\u003ca\u003eMimeMap\u003c/a\u003e\u003c/code\u003e is passed in to display the types of files in the directory\n listing based on their extension.  Preferably, this is the same as the map\n in the \u003ccode\u003e\u003ca\u003eDirectoryConfig\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eThe styles parameter allows you to apply styles to the directory listing.\n The listing itself consists of a table, containing a header row using\n th elements, and one row per file using td elements, so styles for those\n pieces may be attached to the appropriate tags.\n\u003c/p\u003e",
          "module": "Snap.Util.FileServe",
          "name": "defaultIndexGenerator",
          "package": "snap-core",
          "signature": "MimeMap-\u003e ByteString-\u003e FilePath-\u003e m ()",
          "type": "function"
        },
        "index": {
          "description": "An automatic index generator which is fairly small and does not rely on any external files which may not be there depending on external request routing MimeMap is passed in to display the types of files in the directory listing based on their extension Preferably this is the same as the map in the DirectoryConfig The styles parameter allows you to apply styles to the directory listing The listing itself consists of table containing header row using th elements and one row per file using td elements so styles for those pieces may be attached to the appropriate tags",
          "hierarchy": "Snap Util FileServe",
          "module": "Snap.Util.FileServe",
          "name": "defaultIndexGenerator",
          "normalized": "MimeMap-\u003eByteString-\u003eFilePath-\u003ea()",
          "package": "snap-core",
          "partial": "Index Generator",
          "signature": "MimeMap-\u003eByteString-\u003eFilePath-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Util-FileServe.html#v:defaultIndexGenerator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe default set of mime type mappings we use when serving files. Its\n value:\n\u003c/p\u003e\u003cpre\u003e Map.fromList [\n   ( \".asc\"     , \"text/plain\"                        ),\n   ( \".asf\"     , \"video/x-ms-asf\"                    ),\n   ( \".asx\"     , \"video/x-ms-asf\"                    ),\n   ( \".avi\"     , \"video/x-msvideo\"                   ),\n   ( \".bz2\"     , \"application/x-bzip\"                ),\n   ( \".c\"       , \"text/plain\"                        ),\n   ( \".class\"   , \"application/octet-stream\"          ),\n   ( \".conf\"    , \"text/plain\"                        ),\n   ( \".cpp\"     , \"text/plain\"                        ),\n   ( \".css\"     , \"text/css\"                          ),\n   ( \".cxx\"     , \"text/plain\"                        ),\n   ( \".dtd\"     , \"text/xml\"                          ),\n   ( \".dvi\"     , \"application/x-dvi\"                 ),\n   ( \".gif\"     , \"image/gif\"                         ),\n   ( \".gz\"      , \"application/x-gzip\"                ),\n   ( \".hs\"      , \"text/plain\"                        ),\n   ( \".htm\"     , \"text/html\"                         ),\n   ( \".html\"    , \"text/html\"                         ),\n   ( \".ico\"     , \"image/x-icon\"                      ),\n   ( \".jar\"     , \"application/x-java-archive\"        ),\n   ( \".jpeg\"    , \"image/jpeg\"                        ),\n   ( \".jpg\"     , \"image/jpeg\"                        ),\n   ( \".js\"      , \"text/javascript\"                   ),\n   ( \".json\"    , \"application/json\"                  ),\n   ( \".log\"     , \"text/plain\"                        ),\n   ( \".m3u\"     , \"audio/x-mpegurl\"                   ),\n   ( \".mov\"     , \"video/quicktime\"                   ),\n   ( \".mp3\"     , \"audio/mpeg\"                        ),\n   ( \".mpeg\"    , \"video/mpeg\"                        ),\n   ( \".mpg\"     , \"video/mpeg\"                        ),\n   ( \".ogg\"     , \"application/ogg\"                   ),\n   ( \".pac\"     , \"application/x-ns-proxy-autoconfig\" ),\n   ( \".pdf\"     , \"application/pdf\"                   ),\n   ( \".png\"     , \"image/png\"                         ),\n   ( \".ps\"      , \"application/postscript\"            ),\n   ( \".qt\"      , \"video/quicktime\"                   ),\n   ( \".sig\"     , \"application/pgp-signature\"         ),\n   ( \".spl\"     , \"application/futuresplash\"          ),\n   ( \".svg\"     , \"image/svg+xml\"                     ),\n   ( \".swf\"     , \"application/x-shockwave-flash\"     ),\n   ( \".tar\"     , \"application/x-tar\"                 ),\n   ( \".tar.bz2\" , \"application/x-bzip-compressed-tar\" ),\n   ( \".tar.gz\"  , \"application/x-tgz\"                 ),\n   ( \".tbz\"     , \"application/x-bzip-compressed-tar\" ),\n   ( \".text\"    , \"text/plain\"                        ),\n   ( \".tgz\"     , \"application/x-tgz\"                 ),\n   ( \".torrent\" , \"application/x-bittorrent\"          ),\n   ( \".txt\"     , \"text/plain\"                        ),\n   ( \".wav\"     , \"audio/x-wav\"                       ),\n   ( \".wax\"     , \"audio/x-ms-wax\"                    ),\n   ( \".wma\"     , \"audio/x-ms-wma\"                    ),\n   ( \".wmv\"     , \"video/x-ms-wmv\"                    ),\n   ( \".xbm\"     , \"image/x-xbitmap\"                   ),\n   ( \".xml\"     , \"text/xml\"                          ),\n   ( \".xpm\"     , \"image/x-xpixmap\"                   ),\n   ( \".xwd\"     , \"image/x-xwindowdump\"               ),\n   ( \".zip\"     , \"application/zip\"                   ) ]\n\u003c/pre\u003e",
          "module": "Snap.Util.FileServe",
          "name": "defaultMimeTypes",
          "package": "snap-core",
          "signature": "MimeMap",
          "source": "src/Snap-Util-FileServe.html#defaultMimeTypes",
          "type": "function"
        },
        "index": {
          "description": "The default set of mime type mappings we use when serving files Its value Map.fromList asc text plain asf video x-ms-asf asx video x-ms-asf avi video x-msvideo bz2 application x-bzip text plain class application octet-stream conf text plain cpp text plain css text css cxx text plain dtd text xml dvi application x-dvi gif image gif gz application x-gzip hs text plain htm text html html text html ico image x-icon jar application x-java-archive jpeg image jpeg jpg image jpeg js text javascript json application json log text plain m3u audio x-mpegurl mov video quicktime mp3 audio mpeg mpeg video mpeg mpg video mpeg ogg application ogg pac application x-ns-proxy-autoconfig pdf application pdf png image png ps application postscript qt video quicktime sig application pgp-signature spl application futuresplash svg image svg xml swf application x-shockwave-flash tar application x-tar tar.bz2 application x-bzip-compressed-tar tar.gz application x-tgz tbz application x-bzip-compressed-tar text text plain tgz application x-tgz torrent application x-bittorrent txt text plain wav audio x-wav wax audio x-ms-wax wma audio x-ms-wma wmv video x-ms-wmv xbm image x-xbitmap xml text xml xpm image x-xpixmap xwd image x-xwindowdump zip application zip",
          "hierarchy": "Snap Util FileServe",
          "module": "Snap.Util.FileServe",
          "name": "defaultMimeTypes",
          "package": "snap-core",
          "partial": "Mime Types",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Util-FileServe.html#v:defaultMimeTypes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap of extensions to pass to dynamic file handlers.  This could be\n used, for example, to implement CGI dispatch, pretty printing of source\n code, etc.\n\u003c/p\u003e",
          "module": "Snap.Util.FileServe",
          "name": "dynamicHandlers",
          "package": "snap-core",
          "signature": "HandlerMap m",
          "source": "src/Snap-Util-FileServe.html#DirectoryConfig",
          "type": "function"
        },
        "index": {
          "description": "Map of extensions to pass to dynamic file handlers This could be used for example to implement CGI dispatch pretty printing of source code etc",
          "hierarchy": "Snap Util FileServe",
          "module": "Snap.Util.FileServe",
          "name": "dynamicHandlers",
          "package": "snap-core",
          "partial": "Handlers",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Util-FileServe.html#v:dynamicHandlers"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA more elaborate configuration for file serving.  This configuration\n uses built-in MIME types from \u003ccode\u003e\u003ca\u003edefaultMimeTypes\u003c/a\u003e\u003c/code\u003e, serves common index files\n \u003ccode\u003eindex.html\u003c/code\u003e and \u003ccode\u003eindex.htm\u003c/code\u003e, and autogenerates directory indexes with a\n Snap-like feel.  It still has no dynamic file handlers, nor \u003ccode\u003e\u003ca\u003epreServeHook\u003c/a\u003e\u003c/code\u003e,\n which should be added as needed.\n\u003c/p\u003e\u003cp\u003eFiles recognized as indexes include \u003ccode\u003eindex.html\u003c/code\u003e, \u003ccode\u003eindex.htm\u003c/code\u003e,\n \u003ccode\u003edefault.html\u003c/code\u003e, \u003ccode\u003edefault.htm\u003c/code\u003e, \u003ccode\u003ehome.html\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Snap.Util.FileServe",
          "name": "fancyDirectoryConfig",
          "package": "snap-core",
          "signature": "DirectoryConfig m",
          "source": "src/Snap-Util-FileServe.html#fancyDirectoryConfig",
          "type": "function"
        },
        "index": {
          "description": "more elaborate configuration for file serving This configuration uses built-in MIME types from defaultMimeTypes serves common index files index.html and index.htm and autogenerates directory indexes with Snap-like feel It still has no dynamic file handlers nor preServeHook which should be added as needed Files recognized as indexes include index.html index.htm default.html default.htm home.html",
          "hierarchy": "Snap Util FileServe",
          "module": "Snap.Util.FileServe",
          "name": "fancyDirectoryConfig",
          "package": "snap-core",
          "partial": "Directory Config",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Util-FileServe.html#v:fancyDirectoryConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Util.FileServe",
          "name": "fileType",
          "package": "snap-core",
          "signature": "MimeMap -\u003e FilePath -\u003e ByteString",
          "source": "src/Snap-Util-FileServe.html#fileType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Util FileServe",
          "module": "Snap.Util.FileServe",
          "name": "fileType",
          "normalized": "MimeMap-\u003eFilePath-\u003eByteString",
          "package": "snap-core",
          "partial": "Type",
          "signature": "MimeMap-\u003eFilePath-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Util-FileServe.html#v:fileType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGets a path from the \u003ccode\u003e\u003ca\u003eRequest\u003c/a\u003e\u003c/code\u003e using \u003ccode\u003e\u003ca\u003erqPathInfo\u003c/a\u003e\u003c/code\u003e and makes sure it is\n safe to use for opening files.  A path is safe if it is a relative path\n and has no \u003ca\u003e..\u003c/a\u003e elements to escape the intended directory structure.\n\u003c/p\u003e",
          "module": "Snap.Util.FileServe",
          "name": "getSafePath",
          "package": "snap-core",
          "signature": "m FilePath",
          "source": "src/Snap-Util-FileServe.html#getSafePath",
          "type": "function"
        },
        "index": {
          "description": "Gets path from the Request using rqPathInfo and makes sure it is safe to use for opening files path is safe if it is relative path and has no elements to escape the intended directory structure",
          "hierarchy": "Snap Util FileServe",
          "module": "Snap.Util.FileServe",
          "name": "getSafePath",
          "package": "snap-core",
          "partial": "Safe Path",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Util-FileServe.html#v:getSafePath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFiles to look for when a directory is requested (e.g., index.html)\n\u003c/p\u003e",
          "module": "Snap.Util.FileServe",
          "name": "indexFiles",
          "package": "snap-core",
          "signature": "[FilePath]",
          "source": "src/Snap-Util-FileServe.html#DirectoryConfig",
          "type": "function"
        },
        "index": {
          "description": "Files to look for when directory is requested e.g index.html",
          "hierarchy": "Snap Util FileServe",
          "module": "Snap.Util.FileServe",
          "name": "indexFiles",
          "normalized": "[FilePath]",
          "package": "snap-core",
          "partial": "Files",
          "signature": "[FilePath]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Util-FileServe.html#v:indexFiles"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHandler to generate a directory listing if there is no index.\n\u003c/p\u003e",
          "module": "Snap.Util.FileServe",
          "name": "indexGenerator",
          "package": "snap-core",
          "signature": "FilePath -\u003e m ()",
          "source": "src/Snap-Util-FileServe.html#DirectoryConfig",
          "type": "function"
        },
        "index": {
          "description": "Handler to generate directory listing if there is no index",
          "hierarchy": "Snap Util FileServe",
          "module": "Snap.Util.FileServe",
          "name": "indexGenerator",
          "normalized": "FilePath-\u003ea()",
          "package": "snap-core",
          "partial": "Generator",
          "signature": "FilePath-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Util-FileServe.html#v:indexGenerator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMIME type map to look up content types.\n\u003c/p\u003e",
          "module": "Snap.Util.FileServe",
          "name": "mimeTypes",
          "package": "snap-core",
          "signature": "MimeMap",
          "source": "src/Snap-Util-FileServe.html#DirectoryConfig",
          "type": "function"
        },
        "index": {
          "description": "MIME type map to look up content types",
          "hierarchy": "Snap Util FileServe",
          "module": "Snap.Util.FileServe",
          "name": "mimeTypes",
          "package": "snap-core",
          "partial": "Types",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Util-FileServe.html#v:mimeTypes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHandler that is called before a file is served.  It will only be\n called when a file is actually found, not for generated index pages.\n\u003c/p\u003e",
          "module": "Snap.Util.FileServe",
          "name": "preServeHook",
          "package": "snap-core",
          "signature": "FilePath -\u003e m ()",
          "source": "src/Snap-Util-FileServe.html#DirectoryConfig",
          "type": "function"
        },
        "index": {
          "description": "Handler that is called before file is served It will only be called when file is actually found not for generated index pages",
          "hierarchy": "Snap Util FileServe",
          "module": "Snap.Util.FileServe",
          "name": "preServeHook",
          "normalized": "FilePath-\u003ea()",
          "package": "snap-core",
          "partial": "Serve Hook",
          "signature": "FilePath-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Util-FileServe.html#v:preServeHook"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eServes static files from a directory using the default configuration\n as given in \u003ccode\u003e\u003ca\u003edefaultDirectoryConfig\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Snap.Util.FileServe",
          "name": "serveDirectory",
          "package": "snap-core",
          "signature": "FilePath-\u003e m ()",
          "type": "function"
        },
        "index": {
          "description": "Serves static files from directory using the default configuration as given in defaultDirectoryConfig",
          "hierarchy": "Snap Util FileServe",
          "module": "Snap.Util.FileServe",
          "name": "serveDirectory",
          "normalized": "FilePath-\u003ea()",
          "package": "snap-core",
          "partial": "Directory",
          "signature": "FilePath-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Util-FileServe.html#v:serveDirectory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eServes static files from a directory.  Configuration options are\n passed in a \u003ccode\u003e\u003ca\u003eDirectoryConfig\u003c/a\u003e\u003c/code\u003e that captures various choices about desired\n behavior.  The relative path given in \u003ccode\u003e\u003ca\u003erqPathInfo\u003c/a\u003e\u003c/code\u003e is searched for a\n requested file, and the file is served with the appropriate mime type if it\n is found. Absolute paths and \"\u003ccode\u003e..\u003c/code\u003e\" are prohibited to prevent files from\n being served from outside the sandbox.\n\u003c/p\u003e",
          "module": "Snap.Util.FileServe",
          "name": "serveDirectoryWith",
          "package": "snap-core",
          "signature": "DirectoryConfig m-\u003e FilePath-\u003e m ()",
          "type": "function"
        },
        "index": {
          "description": "Serves static files from directory Configuration options are passed in DirectoryConfig that captures various choices about desired behavior The relative path given in rqPathInfo is searched for requested file and the file is served with the appropriate mime type if it is found Absolute paths and are prohibited to prevent files from being served from outside the sandbox",
          "hierarchy": "Snap Util FileServe",
          "module": "Snap.Util.FileServe",
          "name": "serveDirectoryWith",
          "normalized": "DirectoryConfig a-\u003eFilePath-\u003ea()",
          "package": "snap-core",
          "partial": "Directory With",
          "signature": "DirectoryConfig m-\u003eFilePath-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Util-FileServe.html#v:serveDirectoryWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eServes a single file specified by a full or relative path.  If the file\n does not exist, throws an exception (not that it does \u003cem\u003enot\u003c/em\u003e pass to the\n next handler).   The path restrictions on \u003ccode\u003e\u003ca\u003eserveDirectory\u003c/a\u003e\u003c/code\u003e don't apply to\n this function since the path is not being supplied by the user.\n\u003c/p\u003e",
          "module": "Snap.Util.FileServe",
          "name": "serveFile",
          "package": "snap-core",
          "signature": "FilePath-\u003e m ()",
          "type": "function"
        },
        "index": {
          "description": "Serves single file specified by full or relative path If the file does not exist throws an exception not that it does not pass to the next handler The path restrictions on serveDirectory don apply to this function since the path is not being supplied by the user",
          "hierarchy": "Snap Util FileServe",
          "module": "Snap.Util.FileServe",
          "name": "serveFile",
          "normalized": "FilePath-\u003ea()",
          "package": "snap-core",
          "partial": "File",
          "signature": "FilePath-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Util-FileServe.html#v:serveFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003eserveFile\u003c/a\u003e\u003c/code\u003e, with control over the MIME mapping used.\n\u003c/p\u003e",
          "module": "Snap.Util.FileServe",
          "name": "serveFileAs",
          "package": "snap-core",
          "signature": "ByteString-\u003e FilePath-\u003e m ()",
          "type": "function"
        },
        "index": {
          "description": "Same as serveFile with control over the MIME mapping used",
          "hierarchy": "Snap Util FileServe",
          "module": "Snap.Util.FileServe",
          "name": "serveFileAs",
          "normalized": "ByteString-\u003eFilePath-\u003ea()",
          "package": "snap-core",
          "partial": "File As",
          "signature": "ByteString-\u003eFilePath-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Util-FileServe.html#v:serveFileAs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA very simple configuration for directory serving.  This configuration\n uses built-in MIME types from \u003ccode\u003e\u003ca\u003edefaultMimeTypes\u003c/a\u003e\u003c/code\u003e, and has no index files,\n index generator, dynamic file handlers, or \u003ccode\u003e\u003ca\u003epreServeHook\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Snap.Util.FileServe",
          "name": "simpleDirectoryConfig",
          "package": "snap-core",
          "signature": "DirectoryConfig m",
          "source": "src/Snap-Util-FileServe.html#simpleDirectoryConfig",
          "type": "function"
        },
        "index": {
          "description": "very simple configuration for directory serving This configuration uses built-in MIME types from defaultMimeTypes and has no index files index generator dynamic file handlers or preServeHook",
          "hierarchy": "Snap Util FileServe",
          "module": "Snap.Util.FileServe",
          "name": "simpleDirectoryConfig",
          "package": "snap-core",
          "partial": "Directory Config",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Util-FileServe.html#v:simpleDirectoryConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module contains primitives and helper functions for handling\n requests with \u003ccode\u003eContent-type: multipart/form-data\u003c/code\u003e, i.e. HTML forms and file\n uploads.\n\u003c/p\u003e\u003cp\u003eTypically most users will want to use \u003ccode\u003e\u003ca\u003ehandleFileUploads\u003c/a\u003e\u003c/code\u003e, which writes\n uploaded files to a temporary directory before sending them on to a handler\n specified by the user.\n\u003c/p\u003e\u003cp\u003eUsers who wish to handle their file uploads differently can use the\n lower-level streaming \u003ccode\u003e\u003ca\u003eIteratee\u003c/a\u003e\u003c/code\u003e interface called \u003ccode\u003e\u003ca\u003ehandleMultipart\u003c/a\u003e\u003c/code\u003e. That\n function takes uploaded files and streams them to an \u003ccode\u003e\u003ca\u003eIteratee\u003c/a\u003e\u003c/code\u003e consumer of\n the user's choosing.\n\u003c/p\u003e\u003cp\u003eUsing these functions requires making \"policy\" decisions which Snap can't\n really make for users, such as \"what's the largest PDF file a user is\n allowed to upload?\" and \"should we read form inputs into the parameters\n mapping?\". Policy is specified on a \"global\" basis (using\n \u003ccode\u003e\u003ca\u003eUploadPolicy\u003c/a\u003e\u003c/code\u003e), and on a per-file basis (using \u003ccode\u003e\u003ca\u003ePartUploadPolicy\u003c/a\u003e\u003c/code\u003e, which\n allows you to reject or limit the size of certain uploaded\n \u003ccode\u003eContent-type\u003c/code\u003es).\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Snap.Util.FileUploads",
          "name": "FileUploads",
          "package": "snap-core",
          "source": "src/Snap-Util-FileUploads.html",
          "type": "module"
        },
        "index": {
          "description": "This module contains primitives and helper functions for handling requests with Content-type multipart form-data i.e HTML forms and file uploads Typically most users will want to use handleFileUploads which writes uploaded files to temporary directory before sending them on to handler specified by the user Users who wish to handle their file uploads differently can use the lower-level streaming Iteratee interface called handleMultipart That function takes uploaded files and streams them to an Iteratee consumer of the user choosing Using these functions requires making policy decisions which Snap can really make for users such as what the largest PDF file user is allowed to upload and should we read form inputs into the parameters mapping Policy is specified on global basis using UploadPolicy and on per-file basis using PartUploadPolicy which allows you to reject or limit the size of certain uploaded Content-type",
          "hierarchy": "Snap Util FileUploads",
          "module": "Snap.Util.FileUploads",
          "name": "FileUploads",
          "package": "snap-core",
          "partial": "File Uploads",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Util-FileUploads.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Util.FileUploads",
          "name": "BadPartException",
          "package": "snap-core",
          "source": "src/Snap-Util-FileUploads.html#BadPartException",
          "type": "data"
        },
        "index": {
          "hierarchy": "Snap Util FileUploads",
          "module": "Snap.Util.FileUploads",
          "name": "BadPartException",
          "package": "snap-core",
          "partial": "Bad Part Exception",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Util-FileUploads.html#t:BadPartException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAll of the exceptions defined in this package inherit from\n \u003ccode\u003e\u003ca\u003eFileUploadException\u003c/a\u003e\u003c/code\u003e, so if you write\n\u003c/p\u003e\u003cpre\u003e foo `catch` \\(e :: FileUploadException) -\u003e ...\n\u003c/pre\u003e\u003cp\u003eyou can catch a \u003ccode\u003e\u003ca\u003eBadPartException\u003c/a\u003e\u003c/code\u003e, a \u003ccode\u003e\u003ca\u003ePolicyViolationException\u003c/a\u003e\u003c/code\u003e, etc.\n\u003c/p\u003e",
          "module": "Snap.Util.FileUploads",
          "name": "FileUploadException",
          "package": "snap-core",
          "source": "src/Snap-Util-FileUploads.html#FileUploadException",
          "type": "data"
        },
        "index": {
          "description": "All of the exceptions defined in this package inherit from FileUploadException so if you write foo catch FileUploadException you can catch BadPartException PolicyViolationException etc",
          "hierarchy": "Snap Util FileUploads",
          "module": "Snap.Util.FileUploads",
          "name": "FileUploadException",
          "package": "snap-core",
          "partial": "File Upload Exception",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Util-FileUploads.html#t:FileUploadException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ePartInfo\u003c/a\u003e\u003c/code\u003e contains information about a \"part\" in a request uploaded\n with \u003ccode\u003eContent-type: multipart/form-data\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Snap.Util.FileUploads",
          "name": "PartInfo",
          "package": "snap-core",
          "source": "src/Snap-Util-FileUploads.html#PartInfo",
          "type": "data"
        },
        "index": {
          "description": "PartInfo contains information about part in request uploaded with Content-type multipart form-data",
          "hierarchy": "Snap Util FileUploads",
          "module": "Snap.Util.FileUploads",
          "name": "PartInfo",
          "package": "snap-core",
          "partial": "Part Info",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Util-FileUploads.html#t:PartInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUpload policy can be set on an \"general\" basis (using \u003ccode\u003e\u003ca\u003eUploadPolicy\u003c/a\u003e\u003c/code\u003e),\n   but handlers can also make policy decisions on individual files/parts\n   uploaded. For each part uploaded, handlers can decide:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e whether to allow the file upload at all\n\u003c/li\u003e\u003cli\u003e the maximum size of uploaded files, if allowed\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Snap.Util.FileUploads",
          "name": "PartUploadPolicy",
          "package": "snap-core",
          "source": "src/Snap-Util-FileUploads.html#PartUploadPolicy",
          "type": "data"
        },
        "index": {
          "description": "Upload policy can be set on an general basis using UploadPolicy but handlers can also make policy decisions on individual files parts uploaded For each part uploaded handlers can decide whether to allow the file upload at all the maximum size of uploaded files if allowed",
          "hierarchy": "Snap Util FileUploads",
          "module": "Snap.Util.FileUploads",
          "name": "PartUploadPolicy",
          "package": "snap-core",
          "partial": "Part Upload Policy",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Util-FileUploads.html#t:PartUploadPolicy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Util.FileUploads",
          "name": "PolicyViolationException",
          "package": "snap-core",
          "source": "src/Snap-Util-FileUploads.html#PolicyViolationException",
          "type": "data"
        },
        "index": {
          "hierarchy": "Snap Util FileUploads",
          "module": "Snap.Util.FileUploads",
          "name": "PolicyViolationException",
          "package": "snap-core",
          "partial": "Policy Violation Exception",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Util-FileUploads.html#t:PolicyViolationException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eUploadPolicy\u003c/a\u003e\u003c/code\u003e controls overall policy decisions relating to\n \u003ccode\u003emultipart/form-data\u003c/code\u003e uploads, specifically:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e whether to treat parts without filenames as form input (reading them into\n   the \u003ccode\u003e\u003ca\u003erqParams\u003c/a\u003e\u003c/code\u003e map)\n\u003c/li\u003e\u003cli\u003e because form input is read into memory, the maximum size of a form input\n   read in this manner, and the maximum number of form inputs\n\u003c/li\u003e\u003cli\u003e the minimum upload rate a client must maintain before we kill the\n   connection; if very low-bitrate uploads were allowed then a Snap server\n   would be vulnerable to a trivial denial-of-service using a\n   \"slowloris\"-type attack\n\u003c/li\u003e\u003cli\u003e the minimum number of seconds which must elapse before we start killing\n   uploads for having too low an upload rate.\n\u003c/li\u003e\u003cli\u003e the amount of time we should wait before timing out the connection\n   whenever we receive input from the client.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Snap.Util.FileUploads",
          "name": "UploadPolicy",
          "package": "snap-core",
          "source": "src/Snap-Util-FileUploads.html#UploadPolicy",
          "type": "data"
        },
        "index": {
          "description": "UploadPolicy controls overall policy decisions relating to multipart form-data uploads specifically whether to treat parts without filenames as form input reading them into the rqParams map because form input is read into memory the maximum size of form input read in this manner and the maximum number of form inputs the minimum upload rate client must maintain before we kill the connection if very low-bitrate uploads were allowed then Snap server would be vulnerable to trivial denial-of-service using slowloris type attack the minimum number of seconds which must elapse before we start killing uploads for having too low an upload rate the amount of time we should wait before timing out the connection whenever we receive input from the client",
          "hierarchy": "Snap Util FileUploads",
          "module": "Snap.Util.FileUploads",
          "name": "UploadPolicy",
          "package": "snap-core",
          "partial": "Upload Policy",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Util-FileUploads.html#t:UploadPolicy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Util.FileUploads",
          "name": "PartInfo",
          "package": "snap-core",
          "signature": "PartInfo",
          "source": "src/Snap-Util-FileUploads.html#PartInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Util FileUploads",
          "module": "Snap.Util.FileUploads",
          "name": "PartInfo",
          "package": "snap-core",
          "partial": "Part Info",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Util-FileUploads.html#v:PartInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAllows the file to be uploaded, with maximum size \u003cem\u003en\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Snap.Util.FileUploads",
          "name": "allowWithMaximumSize",
          "package": "snap-core",
          "signature": "Int64 -\u003e PartUploadPolicy",
          "source": "src/Snap-Util-FileUploads.html#allowWithMaximumSize",
          "type": "function"
        },
        "index": {
          "description": "Allows the file to be uploaded with maximum size",
          "hierarchy": "Snap Util FileUploads",
          "module": "Snap.Util.FileUploads",
          "name": "allowWithMaximumSize",
          "normalized": "Int-\u003ePartUploadPolicy",
          "package": "snap-core",
          "partial": "With Maximum Size",
          "signature": "Int-\u003ePartUploadPolicy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Util-FileUploads.html#v:allowWithMaximumSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Util.FileUploads",
          "name": "badPartExceptionReason",
          "package": "snap-core",
          "signature": "BadPartException -\u003e Text",
          "source": "src/Snap-Util-FileUploads.html#badPartExceptionReason",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Util FileUploads",
          "module": "Snap.Util.FileUploads",
          "name": "badPartExceptionReason",
          "normalized": "BadPartException-\u003eText",
          "package": "snap-core",
          "partial": "Part Exception Reason",
          "signature": "BadPartException-\u003eText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Util-FileUploads.html#v:badPartExceptionReason"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA reasonable set of defaults for upload policy. The default policy is:\n\u003c/p\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003emaximum form input size\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e                128kB\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003emaximum number of form inputs\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e          10\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eminimum upload rate\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e                    1kB/s\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eseconds before rate limiting kicks in\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e  10\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003einactivity timeout\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e                     20 seconds\n\u003c/dd\u003e\u003c/dl\u003e",
          "module": "Snap.Util.FileUploads",
          "name": "defaultUploadPolicy",
          "package": "snap-core",
          "signature": "UploadPolicy",
          "source": "src/Snap-Util-FileUploads.html#defaultUploadPolicy",
          "type": "function"
        },
        "index": {
          "description": "reasonable set of defaults for upload policy The default policy is maximum form input size kB maximum number of form inputs minimum upload rate kB seconds before rate limiting kicks in inactivity timeout seconds",
          "hierarchy": "Snap Util FileUploads",
          "module": "Snap.Util.FileUploads",
          "name": "defaultUploadPolicy",
          "package": "snap-core",
          "partial": "Upload Policy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Util-FileUploads.html#v:defaultUploadPolicy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDisallows the file to be uploaded.\n\u003c/p\u003e",
          "module": "Snap.Util.FileUploads",
          "name": "disallow",
          "package": "snap-core",
          "signature": "PartUploadPolicy",
          "source": "src/Snap-Util-FileUploads.html#disallow",
          "type": "function"
        },
        "index": {
          "description": "Disallows the file to be uploaded",
          "hierarchy": "Snap Util FileUploads",
          "module": "Snap.Util.FileUploads",
          "name": "disallow",
          "package": "snap-core",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Util-FileUploads.html#v:disallow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDoes this upload policy stipulate that we want to treat parts without\n filenames as form input?\n\u003c/p\u003e",
          "module": "Snap.Util.FileUploads",
          "name": "doProcessFormInputs",
          "package": "snap-core",
          "signature": "UploadPolicy -\u003e Bool",
          "source": "src/Snap-Util-FileUploads.html#doProcessFormInputs",
          "type": "function"
        },
        "index": {
          "description": "Does this upload policy stipulate that we want to treat parts without filenames as form input",
          "hierarchy": "Snap Util FileUploads",
          "module": "Snap.Util.FileUploads",
          "name": "doProcessFormInputs",
          "normalized": "UploadPolicy-\u003eBool",
          "package": "snap-core",
          "partial": "Process Form Inputs",
          "signature": "UploadPolicy-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Util-FileUploads.html#v:doProcessFormInputs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Util.FileUploads",
          "name": "fileUploadExceptionReason",
          "package": "snap-core",
          "signature": "FileUploadException -\u003e Text",
          "source": "src/Snap-Util-FileUploads.html#fileUploadExceptionReason",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Util FileUploads",
          "module": "Snap.Util.FileUploads",
          "name": "fileUploadExceptionReason",
          "normalized": "FileUploadException-\u003eText",
          "package": "snap-core",
          "partial": "Upload Exception Reason",
          "signature": "FileUploadException-\u003eText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Util-FileUploads.html#v:fileUploadExceptionReason"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the maximum size of a form input which will be read into our\n   \u003ccode\u003e\u003ca\u003erqParams\u003c/a\u003e\u003c/code\u003e map.\n\u003c/p\u003e",
          "module": "Snap.Util.FileUploads",
          "name": "getMaximumFormInputSize",
          "package": "snap-core",
          "signature": "UploadPolicy -\u003e Int64",
          "source": "src/Snap-Util-FileUploads.html#getMaximumFormInputSize",
          "type": "function"
        },
        "index": {
          "description": "Get the maximum size of form input which will be read into our rqParams map",
          "hierarchy": "Snap Util FileUploads",
          "module": "Snap.Util.FileUploads",
          "name": "getMaximumFormInputSize",
          "normalized": "UploadPolicy-\u003eInt",
          "package": "snap-core",
          "partial": "Maximum Form Input Size",
          "signature": "UploadPolicy-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Util-FileUploads.html#v:getMaximumFormInputSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the maximum size of a form input which will be read into our\n   \u003ccode\u003e\u003ca\u003erqParams\u003c/a\u003e\u003c/code\u003e map.\n\u003c/p\u003e",
          "module": "Snap.Util.FileUploads",
          "name": "getMaximumNumberOfFormInputs",
          "package": "snap-core",
          "signature": "UploadPolicy -\u003e Int",
          "source": "src/Snap-Util-FileUploads.html#getMaximumNumberOfFormInputs",
          "type": "function"
        },
        "index": {
          "description": "Get the maximum size of form input which will be read into our rqParams map",
          "hierarchy": "Snap Util FileUploads",
          "module": "Snap.Util.FileUploads",
          "name": "getMaximumNumberOfFormInputs",
          "normalized": "UploadPolicy-\u003eInt",
          "package": "snap-core",
          "partial": "Maximum Number Of Form Inputs",
          "signature": "UploadPolicy-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Util-FileUploads.html#v:getMaximumNumberOfFormInputs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the minimum rate (in \u003cem\u003ebytes\\\u003c/em\u003esecond/) a client must maintain before\n   we kill the connection.\n\u003c/p\u003e",
          "module": "Snap.Util.FileUploads",
          "name": "getMinimumUploadRate",
          "package": "snap-core",
          "signature": "UploadPolicy -\u003e Double",
          "source": "src/Snap-Util-FileUploads.html#getMinimumUploadRate",
          "type": "function"
        },
        "index": {
          "description": "Get the minimum rate in bytes second client must maintain before we kill the connection",
          "hierarchy": "Snap Util FileUploads",
          "module": "Snap.Util.FileUploads",
          "name": "getMinimumUploadRate",
          "normalized": "UploadPolicy-\u003eDouble",
          "package": "snap-core",
          "partial": "Minimum Upload Rate",
          "signature": "UploadPolicy-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Util-FileUploads.html#v:getMinimumUploadRate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the amount of time which must elapse before we begin enforcing the\n   upload rate minimum\n\u003c/p\u003e",
          "module": "Snap.Util.FileUploads",
          "name": "getMinimumUploadSeconds",
          "package": "snap-core",
          "signature": "UploadPolicy -\u003e Int",
          "source": "src/Snap-Util-FileUploads.html#getMinimumUploadSeconds",
          "type": "function"
        },
        "index": {
          "description": "Get the amount of time which must elapse before we begin enforcing the upload rate minimum",
          "hierarchy": "Snap Util FileUploads",
          "module": "Snap.Util.FileUploads",
          "name": "getMinimumUploadSeconds",
          "normalized": "UploadPolicy-\u003eInt",
          "package": "snap-core",
          "partial": "Minimum Upload Seconds",
          "signature": "UploadPolicy-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Util-FileUploads.html#v:getMinimumUploadSeconds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the \"upload timeout\". Whenever input is received from the client,\n   the connection timeout is set this many seconds in the future.\n\u003c/p\u003e",
          "module": "Snap.Util.FileUploads",
          "name": "getUploadTimeout",
          "package": "snap-core",
          "signature": "UploadPolicy -\u003e Int",
          "source": "src/Snap-Util-FileUploads.html#getUploadTimeout",
          "type": "function"
        },
        "index": {
          "description": "Get the upload timeout Whenever input is received from the client the connection timeout is set this many seconds in the future",
          "hierarchy": "Snap Util FileUploads",
          "module": "Snap.Util.FileUploads",
          "name": "getUploadTimeout",
          "normalized": "UploadPolicy-\u003eInt",
          "package": "snap-core",
          "partial": "Upload Timeout",
          "signature": "UploadPolicy-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Util-FileUploads.html#v:getUploadTimeout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReads uploaded files into a temporary directory and calls a user handler\n to process them.\n\u003c/p\u003e\u003cp\u003eGiven a temporary directory, global and file-specific upload policies, and\n a user handler, this function consumes a request body uploaded with\n \u003ccode\u003eContent-type: multipart/form-data\u003c/code\u003e. Each file is read into the temporary\n directory, and then a list of the uploaded files is passed to the user\n handler. After the user handler runs (but before the \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e body\n \u003ccode\u003e\u003ca\u003eEnumerator\u003c/a\u003e\u003c/code\u003e is streamed to the client), the files are deleted from disk;\n so if you want to retain or use the uploaded files in the generated\n response, you would need to move or otherwise process them.\n\u003c/p\u003e\u003cp\u003eThe argument passed to the user handler is a list of:\n\u003c/p\u003e\u003cpre\u003e (PartInfo, Either PolicyViolationException FilePath)\n\u003c/pre\u003e\u003cp\u003eThe first half of this tuple is a \u003ccode\u003e\u003ca\u003ePartInfo\u003c/a\u003e\u003c/code\u003e, which contains the\n information the client browser sent about the given upload part (like\n filename, content-type, etc). The second half of this tuple is an \u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e\n stipulating that either:\n\u003c/p\u003e\u003col\u003e\u003cli\u003e the file was rejected on a policy basis because of the provided\n    \u003ccode\u003e\u003ca\u003ePartUploadPolicy\u003c/a\u003e\u003c/code\u003e handler\n\u003c/li\u003e\u003cli\u003e the file was accepted and exists at the given path.\n\u003c/li\u003e\u003c/ol\u003e\u003cp\u003eIf the request's \u003ccode\u003eContent-type\u003c/code\u003e was not \"\u003ccode\u003emultipart/formdata\u003c/code\u003e\", this\n function skips processing using \u003ccode\u003e\u003ca\u003epass\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eIf the client's upload rate passes below the configured minimum (see\n \u003ccode\u003e\u003ca\u003esetMinimumUploadRate\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003esetMinimumUploadSeconds\u003c/a\u003e\u003c/code\u003e), this function\n terminates the connection. This setting is there to protect the server\n against slowloris-style denial of service attacks.\n\u003c/p\u003e\u003cp\u003eIf the given \u003ccode\u003e\u003ca\u003eUploadPolicy\u003c/a\u003e\u003c/code\u003e stipulates that you wish form inputs to be\n placed in the \u003ccode\u003e\u003ca\u003erqParams\u003c/a\u003e\u003c/code\u003e parameter map (using \u003ccode\u003e\u003ca\u003esetProcessFormInputs\u003c/a\u003e\u003c/code\u003e), and\n a form input exceeds the maximum allowable size, this function will throw a\n \u003ccode\u003e\u003ca\u003ePolicyViolationException\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eIf an uploaded part contains MIME headers longer than a fixed internal\n threshold (currently 32KB), this function will throw a \u003ccode\u003e\u003ca\u003eBadPartException\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Snap.Util.FileUploads",
          "name": "handleFileUploads",
          "package": "snap-core",
          "signature": "FilePath-\u003e UploadPolicy-\u003e (PartInfo -\u003e PartUploadPolicy)-\u003e ([(PartInfo, Either PolicyViolationException FilePath)] -\u003e m a)-\u003e m a",
          "type": "function"
        },
        "index": {
          "description": "Reads uploaded files into temporary directory and calls user handler to process them Given temporary directory global and file-specific upload policies and user handler this function consumes request body uploaded with Content-type multipart form-data Each file is read into the temporary directory and then list of the uploaded files is passed to the user handler After the user handler runs but before the Response body Enumerator is streamed to the client the files are deleted from disk so if you want to retain or use the uploaded files in the generated response you would need to move or otherwise process them The argument passed to the user handler is list of PartInfo Either PolicyViolationException FilePath The first half of this tuple is PartInfo which contains the information the client browser sent about the given upload part like filename content-type etc The second half of this tuple is an Either stipulating that either the file was rejected on policy basis because of the provided PartUploadPolicy handler the file was accepted and exists at the given path If the request Content-type was not multipart formdata this function skips processing using pass If the client upload rate passes below the configured minimum see setMinimumUploadRate and setMinimumUploadSeconds this function terminates the connection This setting is there to protect the server against slowloris-style denial of service attacks If the given UploadPolicy stipulates that you wish form inputs to be placed in the rqParams parameter map using setProcessFormInputs and form input exceeds the maximum allowable size this function will throw PolicyViolationException If an uploaded part contains MIME headers longer than fixed internal threshold currently KB this function will throw BadPartException",
          "hierarchy": "Snap Util FileUploads",
          "module": "Snap.Util.FileUploads",
          "name": "handleFileUploads",
          "normalized": "FilePath-\u003eUploadPolicy-\u003e(PartInfo-\u003ePartUploadPolicy)-\u003e([(PartInfo,Either PolicyViolationException FilePath)]-\u003ea b)-\u003ea b",
          "package": "snap-core",
          "partial": "File Uploads",
          "signature": "FilePath-\u003eUploadPolicy-\u003e(PartInfo-\u003ePartUploadPolicy)-\u003e([(PartInfo,Either PolicyViolationException FilePath)]-\u003em a)-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Util-FileUploads.html#v:handleFileUploads"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven an upload policy and a function to consume uploaded \"parts\",\n consume a request body uploaded with \u003ccode\u003eContent-type: multipart/form-data\u003c/code\u003e.\n Normally most users will want to use \u003ccode\u003e\u003ca\u003ehandleFileUploads\u003c/a\u003e\u003c/code\u003e (which writes\n uploaded files to a temporary directory and passes their names to a given\n handler) rather than this function; the lower-level \u003ccode\u003e\u003ca\u003ehandleMultipart\u003c/a\u003e\u003c/code\u003e\n function should be used if you want to stream uploaded files to your own\n iteratee function.\n\u003c/p\u003e\u003cp\u003eIf the request's \u003ccode\u003eContent-type\u003c/code\u003e was not \"\u003ccode\u003emultipart/formdata\u003c/code\u003e\", this\n function skips processing using \u003ccode\u003e\u003ca\u003epass\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eIf the client's upload rate passes below the configured minimum (see\n \u003ccode\u003e\u003ca\u003esetMinimumUploadRate\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003esetMinimumUploadSeconds\u003c/a\u003e\u003c/code\u003e), this function\n terminates the connection. This setting is there to protect the server\n against slowloris-style denial of service attacks.\n\u003c/p\u003e\u003cp\u003eIf the given \u003ccode\u003e\u003ca\u003eUploadPolicy\u003c/a\u003e\u003c/code\u003e stipulates that you wish form inputs to be\n placed in the \u003ccode\u003e\u003ca\u003erqParams\u003c/a\u003e\u003c/code\u003e parameter map (using \u003ccode\u003e\u003ca\u003esetProcessFormInputs\u003c/a\u003e\u003c/code\u003e), and\n a form input exceeds the maximum allowable size, this function will throw a\n \u003ccode\u003e\u003ca\u003ePolicyViolationException\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eIf an uploaded part contains MIME headers longer than a fixed internal\n threshold (currently 32KB), this function will throw a \u003ccode\u003e\u003ca\u003eBadPartException\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Snap.Util.FileUploads",
          "name": "handleMultipart",
          "package": "snap-core",
          "signature": "UploadPolicy-\u003e (PartInfo -\u003e Iteratee ByteString IO a)-\u003e m [a]",
          "type": "function"
        },
        "index": {
          "description": "Given an upload policy and function to consume uploaded parts consume request body uploaded with Content-type multipart form-data Normally most users will want to use handleFileUploads which writes uploaded files to temporary directory and passes their names to given handler rather than this function the lower-level handleMultipart function should be used if you want to stream uploaded files to your own iteratee function If the request Content-type was not multipart formdata this function skips processing using pass If the client upload rate passes below the configured minimum see setMinimumUploadRate and setMinimumUploadSeconds this function terminates the connection This setting is there to protect the server against slowloris-style denial of service attacks If the given UploadPolicy stipulates that you wish form inputs to be placed in the rqParams parameter map using setProcessFormInputs and form input exceeds the maximum allowable size this function will throw PolicyViolationException If an uploaded part contains MIME headers longer than fixed internal threshold currently KB this function will throw BadPartException",
          "hierarchy": "Snap Util FileUploads",
          "module": "Snap.Util.FileUploads",
          "name": "handleMultipart",
          "normalized": "UploadPolicy-\u003e(PartInfo-\u003eIteratee ByteString IO a)-\u003eb[a]",
          "package": "snap-core",
          "partial": "Multipart",
          "signature": "UploadPolicy-\u003e(PartInfo-\u003eIteratee ByteString IO a)-\u003em[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Util-FileUploads.html#v:handleMultipart"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Util.FileUploads",
          "name": "partContentType",
          "package": "snap-core",
          "signature": "ByteString",
          "source": "src/Snap-Util-FileUploads.html#PartInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Util FileUploads",
          "module": "Snap.Util.FileUploads",
          "name": "partContentType",
          "package": "snap-core",
          "partial": "Content Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Util-FileUploads.html#v:partContentType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Util.FileUploads",
          "name": "partFieldName",
          "package": "snap-core",
          "signature": "ByteString",
          "source": "src/Snap-Util-FileUploads.html#PartInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Util FileUploads",
          "module": "Snap.Util.FileUploads",
          "name": "partFieldName",
          "package": "snap-core",
          "partial": "Field Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Util-FileUploads.html#v:partFieldName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Util.FileUploads",
          "name": "partFileName",
          "package": "snap-core",
          "signature": "(Maybe ByteString)",
          "source": "src/Snap-Util-FileUploads.html#PartInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Util FileUploads",
          "module": "Snap.Util.FileUploads",
          "name": "partFileName",
          "package": "snap-core",
          "partial": "File Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Util-FileUploads.html#v:partFileName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Util.FileUploads",
          "name": "policyViolationExceptionReason",
          "package": "snap-core",
          "signature": "PolicyViolationException -\u003e Text",
          "source": "src/Snap-Util-FileUploads.html#policyViolationExceptionReason",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Util FileUploads",
          "module": "Snap.Util.FileUploads",
          "name": "policyViolationExceptionReason",
          "normalized": "PolicyViolationException-\u003eText",
          "package": "snap-core",
          "partial": "Violation Exception Reason",
          "signature": "PolicyViolationException-\u003eText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Util-FileUploads.html#v:policyViolationExceptionReason"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the maximum size of a form input which will be read into our\n   \u003ccode\u003e\u003ca\u003erqParams\u003c/a\u003e\u003c/code\u003e map.\n\u003c/p\u003e",
          "module": "Snap.Util.FileUploads",
          "name": "setMaximumFormInputSize",
          "package": "snap-core",
          "signature": "Int64 -\u003e UploadPolicy -\u003e UploadPolicy",
          "source": "src/Snap-Util-FileUploads.html#setMaximumFormInputSize",
          "type": "function"
        },
        "index": {
          "description": "Set the maximum size of form input which will be read into our rqParams map",
          "hierarchy": "Snap Util FileUploads",
          "module": "Snap.Util.FileUploads",
          "name": "setMaximumFormInputSize",
          "normalized": "Int-\u003eUploadPolicy-\u003eUploadPolicy",
          "package": "snap-core",
          "partial": "Maximum Form Input Size",
          "signature": "Int-\u003eUploadPolicy-\u003eUploadPolicy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Util-FileUploads.html#v:setMaximumFormInputSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the maximum size of a form input which will be read into our\n   \u003ccode\u003e\u003ca\u003erqParams\u003c/a\u003e\u003c/code\u003e map.\n\u003c/p\u003e",
          "module": "Snap.Util.FileUploads",
          "name": "setMaximumNumberOfFormInputs",
          "package": "snap-core",
          "signature": "Int -\u003e UploadPolicy -\u003e UploadPolicy",
          "source": "src/Snap-Util-FileUploads.html#setMaximumNumberOfFormInputs",
          "type": "function"
        },
        "index": {
          "description": "Set the maximum size of form input which will be read into our rqParams map",
          "hierarchy": "Snap Util FileUploads",
          "module": "Snap.Util.FileUploads",
          "name": "setMaximumNumberOfFormInputs",
          "normalized": "Int-\u003eUploadPolicy-\u003eUploadPolicy",
          "package": "snap-core",
          "partial": "Maximum Number Of Form Inputs",
          "signature": "Int-\u003eUploadPolicy-\u003eUploadPolicy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Util-FileUploads.html#v:setMaximumNumberOfFormInputs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the minimum rate (in \u003cem\u003ebytes\\\u003c/em\u003esecond/) a client must maintain before\n   we kill the connection.\n\u003c/p\u003e",
          "module": "Snap.Util.FileUploads",
          "name": "setMinimumUploadRate",
          "package": "snap-core",
          "signature": "Double -\u003e UploadPolicy -\u003e UploadPolicy",
          "source": "src/Snap-Util-FileUploads.html#setMinimumUploadRate",
          "type": "function"
        },
        "index": {
          "description": "Set the minimum rate in bytes second client must maintain before we kill the connection",
          "hierarchy": "Snap Util FileUploads",
          "module": "Snap.Util.FileUploads",
          "name": "setMinimumUploadRate",
          "normalized": "Double-\u003eUploadPolicy-\u003eUploadPolicy",
          "package": "snap-core",
          "partial": "Minimum Upload Rate",
          "signature": "Double-\u003eUploadPolicy-\u003eUploadPolicy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Util-FileUploads.html#v:setMinimumUploadRate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the amount of time which must elapse before we begin enforcing the\n   upload rate minimum\n\u003c/p\u003e",
          "module": "Snap.Util.FileUploads",
          "name": "setMinimumUploadSeconds",
          "package": "snap-core",
          "signature": "Int -\u003e UploadPolicy -\u003e UploadPolicy",
          "source": "src/Snap-Util-FileUploads.html#setMinimumUploadSeconds",
          "type": "function"
        },
        "index": {
          "description": "Set the amount of time which must elapse before we begin enforcing the upload rate minimum",
          "hierarchy": "Snap Util FileUploads",
          "module": "Snap.Util.FileUploads",
          "name": "setMinimumUploadSeconds",
          "normalized": "Int-\u003eUploadPolicy-\u003eUploadPolicy",
          "package": "snap-core",
          "partial": "Minimum Upload Seconds",
          "signature": "Int-\u003eUploadPolicy-\u003eUploadPolicy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Util-FileUploads.html#v:setMinimumUploadSeconds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the upload policy for treating parts without filenames as form input.\n\u003c/p\u003e",
          "module": "Snap.Util.FileUploads",
          "name": "setProcessFormInputs",
          "package": "snap-core",
          "signature": "Bool -\u003e UploadPolicy -\u003e UploadPolicy",
          "source": "src/Snap-Util-FileUploads.html#setProcessFormInputs",
          "type": "function"
        },
        "index": {
          "description": "Set the upload policy for treating parts without filenames as form input",
          "hierarchy": "Snap Util FileUploads",
          "module": "Snap.Util.FileUploads",
          "name": "setProcessFormInputs",
          "normalized": "Bool-\u003eUploadPolicy-\u003eUploadPolicy",
          "package": "snap-core",
          "partial": "Process Form Inputs",
          "signature": "Bool-\u003eUploadPolicy-\u003eUploadPolicy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Util-FileUploads.html#v:setProcessFormInputs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the upload timeout.\n\u003c/p\u003e",
          "module": "Snap.Util.FileUploads",
          "name": "setUploadTimeout",
          "package": "snap-core",
          "signature": "Int -\u003e UploadPolicy -\u003e UploadPolicy",
          "source": "src/Snap-Util-FileUploads.html#setUploadTimeout",
          "type": "function"
        },
        "index": {
          "description": "Set the upload timeout",
          "hierarchy": "Snap Util FileUploads",
          "module": "Snap.Util.FileUploads",
          "name": "setUploadTimeout",
          "normalized": "Int-\u003eUploadPolicy-\u003eUploadPolicy",
          "package": "snap-core",
          "partial": "Upload Timeout",
          "signature": "Int-\u003eUploadPolicy-\u003eUploadPolicy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Util-FileUploads.html#v:setUploadTimeout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Util.GZip",
          "name": "GZip",
          "package": "snap-core",
          "source": "src/Snap-Util-GZip.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Snap Util GZip",
          "module": "Snap.Util.GZip",
          "name": "GZip",
          "package": "snap-core",
          "partial": "GZip",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Util-GZip.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTurn off compression by setting \"Content-Encoding: identity\" in the\n response headers.\n\u003c/p\u003e",
          "module": "Snap.Util.GZip",
          "name": "noCompression",
          "package": "snap-core",
          "signature": "m ()",
          "source": "src/Snap-Util-GZip.html#noCompression",
          "type": "function"
        },
        "index": {
          "description": "Turn off compression by setting Content-Encoding identity in the response headers",
          "hierarchy": "Snap Util GZip",
          "module": "Snap.Util.GZip",
          "name": "noCompression",
          "normalized": "a()",
          "package": "snap-core",
          "partial": "Compression",
          "signature": "m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Util-GZip.html#v:noCompression"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRuns a \u003ccode\u003e\u003ca\u003eSnap\u003c/a\u003e\u003c/code\u003e web handler with compression if available.\n\u003c/p\u003e\u003cp\u003eIf the client has indicated support for \u003ccode\u003egzip\u003c/code\u003e or \u003ccode\u003edeflate\u003c/code\u003e in its\n \u003ccode\u003eAccept-Encoding\u003c/code\u003e header, and the \u003ccode\u003eContent-Type\u003c/code\u003e in the response is one of\n the following types:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003eapplication/x-javascript\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003eapplication/json\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003etext/css\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003etext/html\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003etext/javascript\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003etext/plain\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003etext/xml\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003eapplication/x-font-truetype\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThen the given handler's output stream will be compressed,\n \u003ccode\u003eContent-Encoding\u003c/code\u003e will be set in the output headers, and the\n \u003ccode\u003eContent-Length\u003c/code\u003e will be cleared if it was set. (We can't process the\n stream in O(1) space if the length is known beforehand.)\n\u003c/p\u003e\u003cp\u003eThe wrapped handler will be run to completion, and then the \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e\n that's contained within the \u003ccode\u003e\u003ca\u003eSnap\u003c/a\u003e\u003c/code\u003e monad state will be passed to\n \u003ccode\u003e\u003ca\u003efinishWith\u003c/a\u003e\u003c/code\u003e to prevent further processing.\n\u003c/p\u003e",
          "module": "Snap.Util.GZip",
          "name": "withCompression",
          "package": "snap-core",
          "signature": "m a-\u003e m ()",
          "type": "function"
        },
        "index": {
          "description": "Runs Snap web handler with compression if available If the client has indicated support for gzip or deflate in its Accept-Encoding header and the Content-Type in the response is one of the following types application x-javascript application json text css text html text javascript text plain text xml application x-font-truetype Then the given handler output stream will be compressed Content-Encoding will be set in the output headers and the Content-Length will be cleared if it was set We can process the stream in space if the length is known beforehand The wrapped handler will be run to completion and then the Response that contained within the Snap monad state will be passed to finishWith to prevent further processing",
          "hierarchy": "Snap Util GZip",
          "module": "Snap.Util.GZip",
          "name": "withCompression",
          "normalized": "a b-\u003ea()",
          "package": "snap-core",
          "partial": "Compression",
          "signature": "m a-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Util-GZip.html#v:withCompression"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe same as \u003ccode\u003e\u003ca\u003ewithCompression\u003c/a\u003e\u003c/code\u003e, with control over which MIME types to\n compress.\n\u003c/p\u003e",
          "module": "Snap.Util.GZip",
          "name": "withCompression'",
          "package": "snap-core",
          "signature": "Set ByteString-\u003e m a-\u003e m ()",
          "type": "function"
        },
        "index": {
          "description": "The same as withCompression with control over which MIME types to compress",
          "hierarchy": "Snap Util GZip",
          "module": "Snap.Util.GZip",
          "name": "withCompression'",
          "normalized": "Set ByteString-\u003ea b-\u003ea()",
          "package": "snap-core",
          "partial": "Compression'",
          "signature": "Set ByteString-\u003em a-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Util-GZip.html#v:withCompression-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides facilities for patching incoming \u003ccode\u003eRequests\u003c/code\u003e to\n correct the value of \u003ccode\u003e\u003ca\u003erqRemoteAddr\u003c/a\u003e\u003c/code\u003e if the snap server is running behind a\n proxy.\n\u003c/p\u003e\u003cp\u003eExample usage:\n\u003c/p\u003e\u003cpre\u003e\n m :: Snap ()\n m = undefined  -- code goes here\n\napplicationHandler :: Snap ()\n applicationHandler = behindProxy X_Forwarded_For m\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Snap.Util.Proxy",
          "name": "Proxy",
          "package": "snap-core",
          "source": "src/Snap-Util-Proxy.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides facilities for patching incoming Requests to correct the value of rqRemoteAddr if the snap server is running behind proxy Example usage Snap undefined code goes here applicationHandler Snap applicationHandler behindProxy Forwarded For",
          "hierarchy": "Snap Util Proxy",
          "module": "Snap.Util.Proxy",
          "name": "Proxy",
          "package": "snap-core",
          "partial": "Proxy",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Util-Proxy.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhat kind of proxy is this? Affects which headers \u003ccode\u003e\u003ca\u003ebehindProxy\u003c/a\u003e\u003c/code\u003e pulls the\n original remote address from.\n\u003c/p\u003e\u003cp\u003eCurrently only proxy servers that send \u003ccode\u003eX-Forwarded-For\u003c/code\u003e or \u003ccode\u003eForwarded-For\u003c/code\u003e\n are supported.\n\u003c/p\u003e",
          "module": "Snap.Util.Proxy",
          "name": "ProxyType",
          "package": "snap-core",
          "source": "src/Snap-Util-Proxy.html#ProxyType",
          "type": "data"
        },
        "index": {
          "description": "What kind of proxy is this Affects which headers behindProxy pulls the original remote address from Currently only proxy servers that send X-Forwarded-For or Forwarded-For are supported",
          "hierarchy": "Snap Util Proxy",
          "module": "Snap.Util.Proxy",
          "name": "ProxyType",
          "package": "snap-core",
          "partial": "Proxy Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Util-Proxy.html#t:ProxyType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eno proxy, leave the request alone\n\u003c/p\u003e",
          "module": "Snap.Util.Proxy",
          "name": "NoProxy",
          "package": "snap-core",
          "signature": "NoProxy",
          "source": "src/Snap-Util-Proxy.html#ProxyType",
          "type": "function"
        },
        "index": {
          "description": "no proxy leave the request alone",
          "hierarchy": "Snap Util Proxy",
          "module": "Snap.Util.Proxy",
          "name": "NoProxy",
          "package": "snap-core",
          "partial": "No Proxy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Util-Proxy.html#v:NoProxy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUse the \u003ccode\u003eForwarded-For\u003c/code\u003e or\n   \u003ccode\u003eX-Forwarded-For\u003c/code\u003e header\n\u003c/p\u003e",
          "module": "Snap.Util.Proxy",
          "name": "X_Forwarded_For",
          "package": "snap-core",
          "signature": "X_Forwarded_For",
          "source": "src/Snap-Util-Proxy.html#ProxyType",
          "type": "function"
        },
        "index": {
          "description": "Use the Forwarded-For or X-Forwarded-For header",
          "hierarchy": "Snap Util Proxy",
          "module": "Snap.Util.Proxy",
          "name": "X_Forwarded_For",
          "package": "snap-core",
          "partial": "Forwarded For",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Util-Proxy.html#v:X_Forwarded_For"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRewrite \u003ccode\u003e\u003ca\u003erqRemoteAddr\u003c/a\u003e\u003c/code\u003e if we're behind a proxy.\n\u003c/p\u003e",
          "module": "Snap.Util.Proxy",
          "name": "behindProxy",
          "package": "snap-core",
          "signature": "ProxyType -\u003e m a -\u003e m a",
          "source": "src/Snap-Util-Proxy.html#behindProxy",
          "type": "function"
        },
        "index": {
          "description": "Rewrite rqRemoteAddr if we re behind proxy",
          "hierarchy": "Snap Util Proxy",
          "module": "Snap.Util.Proxy",
          "name": "behindProxy",
          "normalized": "ProxyType-\u003ea b-\u003ea b",
          "package": "snap-core",
          "partial": "Proxy",
          "signature": "ProxyType-\u003em a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Util-Proxy.html#v:behindProxy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Util.Readable",
          "name": "Readable",
          "package": "snap-core",
          "source": "src/Snap-Util-Readable.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Snap Util Readable",
          "module": "Snap.Util.Readable",
          "name": "Readable",
          "package": "snap-core",
          "partial": "Readable",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Util-Readable.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMonadic analog to Read that uses ByteString instead of String.\n\u003c/p\u003e",
          "module": "Snap.Util.Readable",
          "name": "Readable",
          "package": "snap-core",
          "source": "src/Snap-Util-Readable.html#Readable",
          "type": "class"
        },
        "index": {
          "description": "Monadic analog to Read that uses ByteString instead of String",
          "hierarchy": "Snap Util Readable",
          "module": "Snap.Util.Readable",
          "name": "Readable",
          "package": "snap-core",
          "partial": "Readable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Util-Readable.html#t:Readable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Util.Readable",
          "name": "fromBS",
          "package": "snap-core",
          "signature": "ByteString -\u003e m a",
          "source": "src/Snap-Util-Readable.html#fromBS",
          "type": "method"
        },
        "index": {
          "hierarchy": "Snap Util Readable",
          "module": "Snap.Util.Readable",
          "name": "fromBS",
          "normalized": "ByteString-\u003ea b",
          "package": "snap-core",
          "partial": "BS",
          "signature": "ByteString-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/snap-core/docs/Snap-Util-Readable.html#v:fromBS"
      }
    }
  ]
]