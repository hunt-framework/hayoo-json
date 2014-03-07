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
        "word": "iterIO"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module contains an adapter function to run attoparsec\n \u003ccode\u003e\u003ca\u003eParser\u003c/a\u003e\u003c/code\u003es from within the \u003ccode\u003e\u003ca\u003eIter\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.IterIO.Atto",
          "name": "Atto",
          "package": "iterIO",
          "source": "src/Data-IterIO-Atto.html",
          "type": "module"
        },
        "index": {
          "description": "This module contains an adapter function to run attoparsec Parser from within the Iter monad",
          "hierarchy": "Data IterIO Atto",
          "module": "Data.IterIO.Atto",
          "name": "Atto",
          "package": "iterIO",
          "partial": "Atto",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Atto.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClass of types whose \u003ccode\u003e\u003ca\u003eIter\u003c/a\u003e\u003c/code\u003es can be converted to strict\n \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003es.  Basically just strict \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003es and lazy\n \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003es.  This class mostly exists so that the \u003ccode\u003e\u003ca\u003eatto\u003c/a\u003e\u003c/code\u003e\n function can work with either type of ByteString.\n\u003c/p\u003e",
          "module": "Data.IterIO.Atto",
          "name": "IterStrictByteString",
          "package": "iterIO",
          "source": "src/Data-IterIO-Atto.html#IterStrictByteString",
          "type": "class"
        },
        "index": {
          "description": "Class of types whose Iter can be converted to strict ByteString Basically just strict ByteString and lazy ByteString This class mostly exists so that the atto function can work with either type of ByteString",
          "hierarchy": "Data IterIO Atto",
          "module": "Data.IterIO.Atto",
          "name": "IterStrictByteString",
          "package": "iterIO",
          "partial": "Iter Strict Byte String",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Atto.html#t:IterStrictByteString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun an attoparsec parser in an \u003ccode\u003e\u003ca\u003eIter\u003c/a\u003e\u003c/code\u003e monad.  Throws an\n \u003ccode\u003e\u003ca\u003eIterFail\u003c/a\u003e\u003c/code\u003e exception with constructor \u003ccode\u003e\u003ca\u003eIterParseErr\u003c/a\u003e\u003c/code\u003e if the parse\n fails.  (This exception can be handled with \u003ccode\u003e\u003ca\u003emultiParse\u003c/a\u003e\u003c/code\u003e and\n \u003ccode\u003e\u003ca\u003eifParse\u003c/a\u003e\u003c/code\u003e.)\n\u003c/p\u003e",
          "module": "Data.IterIO.Atto",
          "name": "atto",
          "package": "iterIO",
          "signature": "Parser a -\u003e Iter t m a",
          "source": "src/Data-IterIO-Atto.html#atto",
          "type": "function"
        },
        "index": {
          "description": "Run an attoparsec parser in an Iter monad Throws an IterFail exception with constructor IterParseErr if the parse fails This exception can be handled with multiParse and ifParse",
          "hierarchy": "Data IterIO Atto",
          "module": "Data.IterIO.Atto",
          "name": "atto",
          "normalized": "Parser a-\u003eIter b c a",
          "package": "iterIO",
          "signature": "Parser a-\u003eIter t m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Atto.html#v:atto"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.IterIO.Atto",
          "name": "fromIterStrictByteString",
          "package": "iterIO",
          "signature": "Iter ByteString m a -\u003e Iter t m a",
          "source": "src/Data-IterIO-Atto.html#fromIterStrictByteString",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data IterIO Atto",
          "module": "Data.IterIO.Atto",
          "name": "fromIterStrictByteString",
          "normalized": "Iter ByteString a b-\u003eIter c a b",
          "package": "iterIO",
          "partial": "Iter Strict Byte String",
          "signature": "Iter ByteString m a-\u003eIter t m a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Atto.html#v:fromIterStrictByteString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTry running an attoparsec parser.  Returns \u003ccode\u003e\u003ccode\u003e\u003ca\u003eRight\u003c/a\u003e\u003c/code\u003e a\u003c/code\u003e if the\n parser succeeds with result \u003ccode\u003ea\u003c/code\u003e.  Returns \u003ccode\u003e\u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e err\u003c/code\u003e where \u003ccode\u003eerr\u003c/code\u003e\n is an error message otherwise.  Note that the input stream will be\n in an indeterminate state should the parser fail.  (If you need to\n keep parsing input from some known state, it may be better to use\n \u003ccode\u003e\u003ca\u003eatto\u003c/a\u003e\u003c/code\u003e in conjunction with \u003ccode\u003e\u003ca\u003emultiParse\u003c/a\u003e\u003c/code\u003e.)\n\u003c/p\u003e",
          "module": "Data.IterIO.Atto",
          "name": "tryAtto",
          "package": "iterIO",
          "signature": "Parser a -\u003e Iter t m (Either String a)",
          "source": "src/Data-IterIO-Atto.html#tryAtto",
          "type": "function"
        },
        "index": {
          "description": "Try running an attoparsec parser Returns Right if the parser succeeds with result Returns Left err where err is an error message otherwise Note that the input stream will be in an indeterminate state should the parser fail If you need to keep parsing input from some known state it may be better to use atto in conjunction with multiParse",
          "hierarchy": "Data IterIO Atto",
          "module": "Data.IterIO.Atto",
          "name": "tryAtto",
          "normalized": "Parser a-\u003eIter b c(Either String a)",
          "package": "iterIO",
          "partial": "Atto",
          "signature": "Parser a-\u003eIter t m(Either String a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Atto.html#v:tryAtto"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module contains miscellaneous functions plus a few pieces of\n functionality that are missing from the standard Haskell libraries.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.IterIO.Extra",
          "name": "Extra",
          "package": "iterIO",
          "source": "src/Data-IterIO-Extra.html",
          "type": "module"
        },
        "index": {
          "description": "This module contains miscellaneous functions plus few pieces of functionality that are missing from the standard Haskell libraries",
          "hierarchy": "Data IterIO Extra",
          "module": "Data.IterIO.Extra",
          "name": "Extra",
          "package": "iterIO",
          "partial": "Extra",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Extra.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eSendRecvString\u003c/code\u003e is the class of string-like objects that can be\n used with datagram sockets.\n\u003c/p\u003e",
          "module": "Data.IterIO.Extra",
          "name": "SendRecvString",
          "package": "iterIO",
          "source": "src/Data-IterIO-Extra.html#SendRecvString",
          "type": "class"
        },
        "index": {
          "description": "SendRecvString is the class of string-like objects that can be used with datagram sockets",
          "hierarchy": "Data IterIO Extra",
          "module": "Data.IterIO.Extra",
          "name": "SendRecvString",
          "package": "iterIO",
          "partial": "Send Recv String",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Extra.html#t:SendRecvString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.IterIO.Extra",
          "name": "genRecv",
          "package": "iterIO",
          "signature": "Socket -\u003e Int -\u003e IO t",
          "source": "src/Data-IterIO-Extra.html#genRecv",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data IterIO Extra",
          "module": "Data.IterIO.Extra",
          "name": "genRecv",
          "normalized": "Socket-\u003eInt-\u003eIO a",
          "package": "iterIO",
          "partial": "Recv",
          "signature": "Socket-\u003eInt-\u003eIO t",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Extra.html#v:genRecv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.IterIO.Extra",
          "name": "genRecvFrom",
          "package": "iterIO",
          "signature": "Socket -\u003e Int -\u003e IO (t, SockAddr)",
          "source": "src/Data-IterIO-Extra.html#genRecvFrom",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data IterIO Extra",
          "module": "Data.IterIO.Extra",
          "name": "genRecvFrom",
          "normalized": "Socket-\u003eInt-\u003eIO(a,SockAddr)",
          "package": "iterIO",
          "partial": "Recv From",
          "signature": "Socket-\u003eInt-\u003eIO(t,SockAddr)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Extra.html#v:genRecvFrom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.IterIO.Extra",
          "name": "genSend",
          "package": "iterIO",
          "signature": "Socket -\u003e t -\u003e IO ()",
          "source": "src/Data-IterIO-Extra.html#genSend",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data IterIO Extra",
          "module": "Data.IterIO.Extra",
          "name": "genSend",
          "normalized": "Socket-\u003ea-\u003eIO()",
          "package": "iterIO",
          "partial": "Send",
          "signature": "Socket-\u003et-\u003eIO()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Extra.html#v:genSend"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.IterIO.Extra",
          "name": "genSendTo",
          "package": "iterIO",
          "signature": "Socket -\u003e t -\u003e SockAddr -\u003e IO ()",
          "source": "src/Data-IterIO-Extra.html#genSendTo",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data IterIO Extra",
          "module": "Data.IterIO.Extra",
          "name": "genSendTo",
          "normalized": "Socket-\u003ea-\u003eSockAddr-\u003eIO()",
          "package": "iterIO",
          "partial": "Send To",
          "signature": "Socket-\u003et-\u003eSockAddr-\u003eIO()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Extra.html#v:genSendTo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFlushes a file handle and calls the \u003cem\u003eshutdown\u003c/em\u003e system call so as\n to write an EOF to a socket while still being able to read from it.\n This is very important when the same file handle is being used to\n to read data in an \u003ccode\u003e\u003ca\u003eOnum\u003c/a\u003e\u003c/code\u003e and to write data in an \u003ccode\u003e\u003ca\u003eIter\u003c/a\u003e\u003c/code\u003e.  Proper\n protocol functioning may require the \u003ccode\u003e\u003ca\u003eIter\u003c/a\u003e\u003c/code\u003e to send an EOF (e.g., a\n TCP FIN segment), but the \u003ccode\u003e\u003ca\u003eOnum\u003c/a\u003e\u003c/code\u003e may still be reading from the\n socket in a different thread.\n\u003c/p\u003e",
          "module": "Data.IterIO.Extra",
          "name": "hShutdown",
          "package": "iterIO",
          "signature": "Handle -\u003e CInt -\u003e IO Int",
          "source": "src/Data-IterIO-Extra.html#hShutdown",
          "type": "function"
        },
        "index": {
          "description": "Flushes file handle and calls the shutdown system call so as to write an EOF to socket while still being able to read from it This is very important when the same file handle is being used to to read data in an Onum and to write data in an Iter Proper protocol functioning may require the Iter to send an EOF e.g TCP FIN segment but the Onum may still be reading from the socket in different thread",
          "hierarchy": "Data IterIO Extra",
          "module": "Data.IterIO.Extra",
          "name": "hShutdown",
          "normalized": "Handle-\u003eCInt-\u003eIO Int",
          "package": "iterIO",
          "partial": "Shutdown",
          "signature": "Handle-\u003eCInt-\u003eIO Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Extra.html#v:hShutdown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns an \u003ccode\u003e\u003ca\u003eIter\u003c/a\u003e\u003c/code\u003e that always returns itself until a result is\n produced.  You can fuse \u003ccode\u003einumSplit\u003c/code\u003e to an \u003ccode\u003e\u003ca\u003eIter\u003c/a\u003e\u003c/code\u003e to produce an\n \u003ccode\u003e\u003ca\u003eIter\u003c/a\u003e\u003c/code\u003e that can safely be fed (e.g., with \u003ccode\u003e\u003ca\u003eenumPure\u003c/a\u003e\u003c/code\u003e) from multiple\n threads.\n\u003c/p\u003e",
          "module": "Data.IterIO.Extra",
          "name": "inumSplit",
          "package": "iterIO",
          "signature": "Inum t t m a",
          "source": "src/Data-IterIO-Extra.html#inumSplit",
          "type": "function"
        },
        "index": {
          "description": "Returns an Iter that always returns itself until result is produced You can fuse inumSplit to an Iter to produce an Iter that can safely be fed e.g with enumPure from multiple threads",
          "hierarchy": "Data IterIO Extra",
          "module": "Data.IterIO.Extra",
          "name": "inumSplit",
          "package": "iterIO",
          "partial": "Split",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Extra.html#v:inumSplit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a loopback \u003ccode\u003e(\u003ccode\u003e\u003ca\u003eIter\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eOnum\u003c/a\u003e\u003c/code\u003e)\u003c/code\u003e pair.  The iteratee and\n enumerator can be used in different threads.  Any data fed into the\n \u003ccode\u003e\u003ca\u003eIter\u003c/a\u003e\u003c/code\u003e will in turn be fed by the \u003ccode\u003e\u003ca\u003eOnum\u003c/a\u003e\u003c/code\u003e into whatever \u003ccode\u003e\u003ca\u003eIter\u003c/a\u003e\u003c/code\u003e it\n is given.  This is useful for testing a protocol implementation\n against itself.\n\u003c/p\u003e",
          "module": "Data.IterIO.Extra",
          "name": "iterLoop",
          "package": "iterIO",
          "signature": "m (Iter t m (), Onum t m a)",
          "source": "src/Data-IterIO-Extra.html#iterLoop",
          "type": "function"
        },
        "index": {
          "description": "Create loopback Iter Onum pair The iteratee and enumerator can be used in different threads Any data fed into the Iter will in turn be fed by the Onum into whatever Iter it is given This is useful for testing protocol implementation against itself",
          "hierarchy": "Data IterIO Extra",
          "module": "Data.IterIO.Extra",
          "name": "iterLoop",
          "normalized": "a(Iter b a(),Onum b a c)",
          "package": "iterIO",
          "partial": "Loop",
          "signature": "m(Iter t m(),Onum t m a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Extra.html#v:iterLoop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFor debugging.  Print the current thread ID and a message.  Not\n referentially transparent.\n\u003c/p\u003e",
          "module": "Data.IterIO.Extra",
          "name": "traceI",
          "package": "iterIO",
          "signature": "String -\u003e Iter t m ()",
          "source": "src/Data-IterIO-Extra.html#traceI",
          "type": "function"
        },
        "index": {
          "description": "For debugging Print the current thread ID and message Not referentially transparent",
          "hierarchy": "Data IterIO Extra",
          "module": "Data.IterIO.Extra",
          "name": "traceI",
          "normalized": "String-\u003eIter a b()",
          "package": "iterIO",
          "signature": "String-\u003eIter t m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Extra.html#v:traceI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFor debugging, print a tag along with the current residual input.\n Not referentially transparent.\n\u003c/p\u003e",
          "module": "Data.IterIO.Extra",
          "name": "traceInput",
          "package": "iterIO",
          "signature": "String -\u003e Iter t m ()",
          "source": "src/Data-IterIO-Extra.html#traceInput",
          "type": "function"
        },
        "index": {
          "description": "For debugging print tag along with the current residual input Not referentially transparent",
          "hierarchy": "Data IterIO Extra",
          "module": "Data.IterIO.Extra",
          "name": "traceInput",
          "normalized": "String-\u003eIter a b()",
          "package": "iterIO",
          "partial": "Input",
          "signature": "String-\u003eIter t m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Extra.html#v:traceInput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.IterIO.Http",
          "name": "Http",
          "package": "iterIO",
          "source": "src/Data-IterIO-Http.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data IterIO Http",
          "module": "Data.IterIO.Http",
          "name": "Http",
          "package": "iterIO",
          "partial": "Http",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Http.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eData structure representing the name and metadata of a control in\n a submitted form.\n\u003c/p\u003e",
          "module": "Data.IterIO.Http",
          "name": "FormField",
          "package": "iterIO",
          "source": "src/Data-IterIO-Http.html#FormField",
          "type": "data"
        },
        "index": {
          "description": "Data structure representing the name and metadata of control in submitted form",
          "hierarchy": "Data IterIO Http",
          "module": "Data.IterIO.Http",
          "name": "FormField",
          "package": "iterIO",
          "partial": "Form Field",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Http.html#t:FormField"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eData structure representing an HTTP request message.\n\u003c/p\u003e",
          "module": "Data.IterIO.Http",
          "name": "HttpReq",
          "package": "iterIO",
          "source": "src/Data-IterIO-Http.html#HttpReq",
          "type": "data"
        },
        "index": {
          "description": "Data structure representing an HTTP request message",
          "hierarchy": "Data IterIO Http",
          "module": "Data.IterIO.Http",
          "name": "HttpReq",
          "package": "iterIO",
          "partial": "Http Req",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Http.html#t:HttpReq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven the headers of an HTTP request, provides an iteratee that\n will process the request body (if any) and return a response.\n\u003c/p\u003e",
          "module": "Data.IterIO.Http",
          "name": "HttpRequestHandler",
          "package": "iterIO",
          "source": "src/Data-IterIO-Http.html#HttpRequestHandler",
          "type": "type"
        },
        "index": {
          "description": "Given the headers of an HTTP request provides an iteratee that will process the request body if any and return response",
          "hierarchy": "Data IterIO Http",
          "module": "Data.IterIO.Http",
          "name": "HttpRequestHandler",
          "package": "iterIO",
          "partial": "Http Request Handler",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Http.html#t:HttpRequestHandler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA data structure describing an HTTP response message to be sent,\n parameterized by the Monad in which the response will be written to\n the network.\n\u003c/p\u003e",
          "module": "Data.IterIO.Http",
          "name": "HttpResp",
          "package": "iterIO",
          "source": "src/Data-IterIO-Http.html#HttpResp",
          "type": "data"
        },
        "index": {
          "description": "data structure describing an HTTP response message to be sent parameterized by the Monad in which the response will be written to the network",
          "hierarchy": "Data IterIO Http",
          "module": "Data.IterIO.Http",
          "name": "HttpResp",
          "package": "iterIO",
          "partial": "Http Resp",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Http.html#t:HttpResp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eData structure describing the configuration of an HTTP server for\n \u003ccode\u003e\u003ca\u003einumHttpServer\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.IterIO.Http",
          "name": "HttpServerConf",
          "package": "iterIO",
          "source": "src/Data-IterIO-Http.html#HttpServerConf",
          "type": "data"
        },
        "index": {
          "description": "Data structure describing the configuration of an HTTP server for inumHttpServer",
          "hierarchy": "Data IterIO Http",
          "module": "Data.IterIO.Http",
          "name": "HttpServerConf",
          "package": "iterIO",
          "partial": "Http Server Conf",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Http.html#t:HttpServerConf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHTTP status code and text description of response, for the first\n line of an HTTP response message.  A bunch of pre-defined statuses\n from RFC 2616 are supplied under the names \u003ccode\u003e\u003ca\u003estat200\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003estat404\u003c/a\u003e\u003c/code\u003e,\n \u003ccode\u003e\u003ca\u003estat500\u003c/a\u003e\u003c/code\u003e, etc.\n\u003c/p\u003e",
          "module": "Data.IterIO.Http",
          "name": "HttpStatus",
          "package": "iterIO",
          "source": "src/Data-IterIO-Http.html#HttpStatus",
          "type": "data"
        },
        "index": {
          "description": "HTTP status code and text description of response for the first line of an HTTP response message bunch of pre-defined statuses from RFC are supplied under the names stat200 stat404 stat500 etc",
          "hierarchy": "Data IterIO Http",
          "module": "Data.IterIO.Http",
          "name": "HttpStatus",
          "package": "iterIO",
          "partial": "Http Status",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Http.html#t:HttpStatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.IterIO.Http",
          "name": "FormField",
          "package": "iterIO",
          "signature": "FormField",
          "source": "src/Data-IterIO-Http.html#FormField",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data IterIO Http",
          "module": "Data.IterIO.Http",
          "name": "FormField",
          "package": "iterIO",
          "partial": "Form Field",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Http.html#v:FormField"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.IterIO.Http",
          "name": "HttpReq",
          "package": "iterIO",
          "signature": "HttpReq",
          "source": "src/Data-IterIO-Http.html#HttpReq",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data IterIO Http",
          "module": "Data.IterIO.Http",
          "name": "HttpReq",
          "package": "iterIO",
          "partial": "Http Req",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Http.html#v:HttpReq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.IterIO.Http",
          "name": "HttpResp",
          "package": "iterIO",
          "signature": "HttpResp",
          "source": "src/Data-IterIO-Http.html#HttpResp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data IterIO Http",
          "module": "Data.IterIO.Http",
          "name": "HttpResp",
          "package": "iterIO",
          "partial": "Http Resp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Http.html#v:HttpResp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.IterIO.Http",
          "name": "HttpServerConf",
          "package": "iterIO",
          "signature": "HttpServerConf",
          "source": "src/Data-IterIO-Http.html#HttpServerConf",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data IterIO Http",
          "module": "Data.IterIO.Http",
          "name": "HttpServerConf",
          "package": "iterIO",
          "partial": "Http Server Conf",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Http.html#v:HttpServerConf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.IterIO.Http",
          "name": "HttpStatus",
          "package": "iterIO",
          "signature": "HttpStatus !Int !ByteString",
          "source": "src/Data-IterIO-Http.html#HttpStatus",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data IterIO Http",
          "module": "Data.IterIO.Http",
          "name": "HttpStatus",
          "package": "iterIO",
          "partial": "Http Status",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Http.html#v:HttpStatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParses an absoluteURI, returning (scheme, host, path, query)\n\u003c/p\u003e",
          "module": "Data.IterIO.Http",
          "name": "absUri",
          "package": "iterIO",
          "signature": "Iter L m (S, S, Maybe Int, S, S)",
          "source": "src/Data-IterIO-Http.html#absUri",
          "type": "function"
        },
        "index": {
          "description": "Parses an absoluteURI returning scheme host path query",
          "hierarchy": "Data IterIO Http",
          "module": "Data.IterIO.Http",
          "name": "absUri",
          "normalized": "Iter L a(S,S,Maybe Int,S,S)",
          "package": "iterIO",
          "partial": "Uri",
          "signature": "Iter L m(S,S,Maybe Int,S,S)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Http.html#v:absUri"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParses a Date/Time string in any one of the three formats\n specified by RFC 2616.\n\u003c/p\u003e",
          "module": "Data.IterIO.Http",
          "name": "dateI",
          "package": "iterIO",
          "signature": "Iter ByteString m UTCTime",
          "source": "src/Data-IterIO-Http.html#dateI",
          "type": "function"
        },
        "index": {
          "description": "Parses Date Time string in any one of the three formats specified by RFC",
          "hierarchy": "Data IterIO Http",
          "module": "Data.IterIO.Http",
          "name": "dateI",
          "package": "iterIO",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Http.html#v:dateI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.IterIO.Http",
          "name": "defaultHttpReq",
          "package": "iterIO",
          "signature": "HttpReq ()",
          "source": "src/Data-IterIO-Http.html#defaultHttpReq",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data IterIO Http",
          "module": "Data.IterIO.Http",
          "name": "defaultHttpReq",
          "normalized": "HttpReq()",
          "package": "iterIO",
          "partial": "Http Req",
          "signature": "HttpReq()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Http.html#v:defaultHttpReq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn empty HTTP response, to which you must add headers and\n possibly a message body.\n\u003c/p\u003e",
          "module": "Data.IterIO.Http",
          "name": "defaultHttpResp",
          "package": "iterIO",
          "signature": "HttpResp m",
          "source": "src/Data-IterIO-Http.html#defaultHttpResp",
          "type": "function"
        },
        "index": {
          "description": "An empty HTTP response to which you must add headers and possibly message body",
          "hierarchy": "Data IterIO Http",
          "module": "Data.IterIO.Http",
          "name": "defaultHttpResp",
          "package": "iterIO",
          "partial": "Http Resp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Http.html#v:defaultHttpResp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEnumerate a request, and body.\n\u003c/p\u003e",
          "module": "Data.IterIO.Http",
          "name": "enumHttpReq",
          "package": "iterIO",
          "signature": "HttpReq s -\u003e L -\u003e Onum L m a",
          "source": "src/Data-IterIO-Http.html#enumHttpReq",
          "type": "function"
        },
        "index": {
          "description": "Enumerate request and body",
          "hierarchy": "Data IterIO Http",
          "module": "Data.IterIO.Http",
          "name": "enumHttpReq",
          "normalized": "HttpReq a-\u003eL-\u003eOnum L b c",
          "package": "iterIO",
          "partial": "Http Req",
          "signature": "HttpReq s-\u003eL-\u003eOnum L m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Http.html#v:enumHttpReq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFormat and enumerate a response header and body.\n\u003c/p\u003e",
          "module": "Data.IterIO.Http",
          "name": "enumHttpResp",
          "package": "iterIO",
          "signature": "HttpResp m -\u003e Onum ByteString m ()",
          "source": "src/Data-IterIO-Http.html#enumHttpResp",
          "type": "function"
        },
        "index": {
          "description": "Format and enumerate response header and body",
          "hierarchy": "Data IterIO Http",
          "module": "Data.IterIO.Http",
          "name": "enumHttpResp",
          "normalized": "HttpResp a-\u003eOnum ByteString a()",
          "package": "iterIO",
          "partial": "Http Resp",
          "signature": "HttpResp m-\u003eOnum ByteString m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Http.html#v:enumHttpResp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtra headers following the \u003ccode\u003eContent-Disposition:\u003c/code\u003e header of\n a \u003ccode\u003emultipart/form-data\u003c/code\u003e post.  Empty for other kinds of form\n submission.\n\u003c/p\u003e",
          "module": "Data.IterIO.Http",
          "name": "ffHeaders",
          "package": "iterIO",
          "signature": "[(ByteString, ByteString)]",
          "source": "src/Data-IterIO-Http.html#FormField",
          "type": "function"
        },
        "index": {
          "description": "Extra headers following the Content-Disposition header of multipart form-data post Empty for other kinds of form submission",
          "hierarchy": "Data IterIO Http",
          "module": "Data.IterIO.Http",
          "name": "ffHeaders",
          "normalized": "[(ByteString,ByteString)]",
          "package": "iterIO",
          "partial": "Headers",
          "signature": "[(ByteString,ByteString)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Http.html#v:ffHeaders"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eName of the form control being processed\n\u003c/p\u003e",
          "module": "Data.IterIO.Http",
          "name": "ffName",
          "package": "iterIO",
          "signature": "ByteString",
          "source": "src/Data-IterIO-Http.html#FormField",
          "type": "function"
        },
        "index": {
          "description": "Name of the form control being processed",
          "hierarchy": "Data IterIO Http",
          "module": "Data.IterIO.Http",
          "name": "ffName",
          "package": "iterIO",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Http.html#v:ffName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParameters from the \u003ccode\u003eContent-Disposition:\u003c/code\u003e header.  This only\n applies to \u003ccode\u003eContent-Type: multipart/form-data\u003c/code\u003e, and will be\n empty for forms of type application/x-www-form-urlencoded or\n forms submitted in the URL parameters of a GET request.\n\u003c/p\u003e",
          "module": "Data.IterIO.Http",
          "name": "ffParams",
          "package": "iterIO",
          "signature": "[(ByteString, ByteString)]",
          "source": "src/Data-IterIO-Http.html#FormField",
          "type": "function"
        },
        "index": {
          "description": "Parameters from the Content-Disposition header This only applies to Content-Type multipart form-data and will be empty for forms of type application x-www-form-urlencoded or forms submitted in the URL parameters of GET request",
          "hierarchy": "Data IterIO Http",
          "module": "Data.IterIO.Http",
          "name": "ffParams",
          "normalized": "[(ByteString,ByteString)]",
          "package": "iterIO",
          "partial": "Params",
          "signature": "[(ByteString,ByteString)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Http.html#v:ffParams"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParses a form, and folds a function over each control.  The value\n of each control is available through Iteratee input.  Thus, you can\n extract the submitted value with \u003ccode\u003e\u003ca\u003epureI\u003c/a\u003e\u003c/code\u003e, or redirect it elsewhere\n by executing another \u003ccode\u003e\u003ca\u003eIter\u003c/a\u003e\u003c/code\u003e.  For example, to parse a form and\n print it to standard output (without buffering possibly large file\n uploads in memory):\n\u003c/p\u003e\u003cpre\u003e  do let docontrol _ field = do\n           liftIO $ putStrLn $\n               \"The value of \" ++ (S8.unpack $ ffName field) ++ \" is:\"\n           stdoutI                   -- Send form value to standard output\n           liftIO $ putStrLn \"\\n\"\n     foldForm req docontrol ()\n\u003c/pre\u003e\u003cp\u003eOr to produce a list of (field, value) pairs, you can say something\n like:\n\u003c/p\u003e\u003cpre\u003e  do let docontrol acc field = do\n           val \u003c- pureI\n           return $ (ffName field, val) : acc\n     foldForm req docontrol []\n\u003c/pre\u003e\u003cp\u003eNote that for POSTed forms of enctype\n \u003ccode\u003eapplication/x-www-form-urlencoded\u003c/code\u003e, \u003ccode\u003efoldForm\u003c/code\u003e will read to the\n end of its input.  Thus, it is important to ensure \u003ccode\u003efoldForm\u003c/code\u003e is\n called from within an \u003ccode\u003e\u003ca\u003einumHttpBody\u003c/a\u003e\u003c/code\u003e enumerator (which is\n guaranteed by \u003ccode\u003e\u003ca\u003einumHttpServer\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Data.IterIO.Http",
          "name": "foldForm",
          "package": "iterIO",
          "signature": "HttpReq s -\u003e (a -\u003e FormField -\u003e Iter ByteString m a) -\u003e a -\u003e Iter ByteString m a",
          "source": "src/Data-IterIO-Http.html#foldForm",
          "type": "function"
        },
        "index": {
          "description": "Parses form and folds function over each control The value of each control is available through Iteratee input Thus you can extract the submitted value with pureI or redirect it elsewhere by executing another Iter For example to parse form and print it to standard output without buffering possibly large file uploads in memory do let docontrol field do liftIO putStrLn The value of S8.unpack ffName field is stdoutI Send form value to standard output liftIO putStrLn foldForm req docontrol Or to produce list of field value pairs you can say something like do let docontrol acc field do val pureI return ffName field val acc foldForm req docontrol Note that for POSTed forms of enctype application x-www-form-urlencoded foldForm will read to the end of its input Thus it is important to ensure foldForm is called from within an inumHttpBody enumerator which is guaranteed by inumHttpServer",
          "hierarchy": "Data IterIO Http",
          "module": "Data.IterIO.Http",
          "name": "foldForm",
          "normalized": "HttpReq a-\u003e(b-\u003eFormField-\u003eIter ByteString c b)-\u003eb-\u003eIter ByteString c b",
          "package": "iterIO",
          "partial": "Form",
          "signature": "HttpReq s-\u003e(a-\u003eFormField-\u003eIter ByteString m a)-\u003ea-\u003eIter ByteString m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Http.html#v:foldForm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse an HTTP header, returning an \u003ccode\u003e\u003ca\u003eHttpReq\u003c/a\u003e\u003c/code\u003e data structure.\n\u003c/p\u003e",
          "module": "Data.IterIO.Http",
          "name": "httpReqI",
          "package": "iterIO",
          "signature": "Iter ByteString m (HttpReq ())",
          "source": "src/Data-IterIO-Http.html#httpReqI",
          "type": "function"
        },
        "index": {
          "description": "Parse an HTTP header returning an HttpReq data structure",
          "hierarchy": "Data IterIO Http",
          "module": "Data.IterIO.Http",
          "name": "httpReqI",
          "normalized": "Iter ByteString a(HttpReq())",
          "package": "iterIO",
          "partial": "Req",
          "signature": "Iter ByteString m(HttpReq())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Http.html#v:httpReqI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn a response. If the 'Trasnfer-Encoding' header is set to\n 'chunked', it is removed from the headers and the \u003ccode\u003e\u003ca\u003erespChunk\u003c/a\u003e\u003c/code\u003e\n field is set.\n \u003ccode\u003e\u003ca\u003eenumHttpResp\u003c/a\u003e\u003c/code\u003e to enumerate the headers and body.\n\u003c/p\u003e",
          "module": "Data.IterIO.Http",
          "name": "httpRespI",
          "package": "iterIO",
          "signature": "Iter L m (HttpResp m)",
          "source": "src/Data-IterIO-Http.html#httpRespI",
          "type": "function"
        },
        "index": {
          "description": "Return response If the Trasnfer-Encoding header is set to chunked it is removed from the headers and the respChunk field is set enumHttpResp to enumerate the headers and body",
          "hierarchy": "Data IterIO Http",
          "module": "Data.IterIO.Http",
          "name": "httpRespI",
          "package": "iterIO",
          "partial": "Resp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Http.html#v:httpRespI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFormats a time in the format specified by RFC 2616.\n\u003c/p\u003e",
          "module": "Data.IterIO.Http",
          "name": "http_fmt_time",
          "package": "iterIO",
          "signature": "UTCTime -\u003e String",
          "source": "src/Data-IterIO-Http.html#http_fmt_time",
          "type": "function"
        },
        "index": {
          "description": "Formats time in the format specified by RFC",
          "hierarchy": "Data IterIO Http",
          "module": "Data.IterIO.Http",
          "name": "http_fmt_time",
          "normalized": "UTCTime-\u003eString",
          "package": "iterIO",
          "signature": "UTCTime-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Http.html#v:http_fmt_time"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn HTTP Chunk decoder (as specified by RFC 2616).\n\u003c/p\u003e",
          "module": "Data.IterIO.Http",
          "name": "inumFromChunks",
          "package": "iterIO",
          "signature": "Inum ByteString ByteString m a",
          "source": "src/Data-IterIO-Http.html#inumFromChunks",
          "type": "function"
        },
        "index": {
          "description": "An HTTP Chunk decoder as specified by RFC",
          "hierarchy": "Data IterIO Http",
          "module": "Data.IterIO.Http",
          "name": "inumFromChunks",
          "package": "iterIO",
          "partial": "From Chunks",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Http.html#v:inumFromChunks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis \u003ccode\u003e\u003ca\u003eInum\u003c/a\u003e\u003c/code\u003e reads to the end of an HTTP message body (and not\n beyond) and decodes the Transfer-Encoding.  It handles straight\n content of a size specified by the Content-Length header and\n chunk-encoded content.\n\u003c/p\u003e",
          "module": "Data.IterIO.Http",
          "name": "inumHttpBody",
          "package": "iterIO",
          "signature": "HttpReq s -\u003e Inum ByteString ByteString m a",
          "source": "src/Data-IterIO-Http.html#inumHttpBody",
          "type": "function"
        },
        "index": {
          "description": "This Inum reads to the end of an HTTP message body and not beyond and decodes the Transfer-Encoding It handles straight content of size specified by the Content-Length header and chunk-encoded content",
          "hierarchy": "Data IterIO Http",
          "module": "Data.IterIO.Http",
          "name": "inumHttpBody",
          "normalized": "HttpReq a-\u003eInum ByteString ByteString b c",
          "package": "iterIO",
          "partial": "Http Body",
          "signature": "HttpReq s-\u003eInum ByteString ByteString m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Http.html#v:inumHttpBody"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn \u003ccode\u003e\u003ca\u003eInum\u003c/a\u003e\u003c/code\u003e that behaves like an HTTP server.  The file\n \u003ccode\u003eExamples/httptest.hs\u003c/code\u003e that comes with the iterIO distribution\n gives an example of how to use this function.\n\u003c/p\u003e",
          "module": "Data.IterIO.Http",
          "name": "inumHttpServer",
          "package": "iterIO",
          "signature": "HttpServerConf m-\u003e Inum ByteString ByteString m ()",
          "type": "function"
        },
        "index": {
          "description": "An Inum that behaves like an HTTP server The file Examples httptest.hs that comes with the iterIO distribution gives an example of how to use this function",
          "hierarchy": "Data IterIO Http",
          "module": "Data.IterIO.Http",
          "name": "inumHttpServer",
          "normalized": "HttpServerConf a-\u003eInum ByteString ByteString a()",
          "package": "iterIO",
          "partial": "Http Server",
          "signature": "HttpServerConf m-\u003eInum ByteString ByteString m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Http.html#v:inumHttpServer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn HTTP Chunk encoder (as specified by RFC 2616).\n\u003c/p\u003e",
          "module": "Data.IterIO.Http",
          "name": "inumToChunks",
          "package": "iterIO",
          "signature": "Inum ByteString ByteString m a",
          "source": "src/Data-IterIO-Http.html#inumToChunks",
          "type": "function"
        },
        "index": {
          "description": "An HTTP Chunk encoder as specified by RFC",
          "hierarchy": "Data IterIO Http",
          "module": "Data.IterIO.Http",
          "name": "inumToChunks",
          "package": "iterIO",
          "partial": "To Chunks",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Http.html#v:inumToChunks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate an \u003ccode\u003e\u003ca\u003eHttpServerConf\u003c/a\u003e\u003c/code\u003e structure that uses IO calls to log to\n standard error and get the current time for the Date header.\n\u003c/p\u003e",
          "module": "Data.IterIO.Http",
          "name": "ioHttpServer",
          "package": "iterIO",
          "signature": "HttpRequestHandler m () -\u003e HttpServerConf m",
          "source": "src/Data-IterIO-Http.html#ioHttpServer",
          "type": "function"
        },
        "index": {
          "description": "Generate an HttpServerConf structure that uses IO calls to log to standard error and get the current time for the Date header",
          "hierarchy": "Data IterIO Http",
          "module": "Data.IterIO.Http",
          "name": "ioHttpServer",
          "normalized": "HttpRequestHandler a()-\u003eHttpServerConf a",
          "package": "iterIO",
          "partial": "Http Server",
          "signature": "HttpRequestHandler m()-\u003eHttpServerConf m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Http.html#v:ioHttpServer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake an \u003ccode\u003e\u003ca\u003eHttpResp\u003c/a\u003e\u003c/code\u003e of an arbitrary content-type based on a pure\n lazy \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e.  Since the result is pure, this function first\n measures its length so as to set a Content-Length header instead of\n using HTTP chunk encoding.\n\u003c/p\u003e",
          "module": "Data.IterIO.Http",
          "name": "mkContentLenResp",
          "package": "iterIO",
          "signature": "HttpStatus-\u003e String-\u003e ByteString-\u003e HttpResp m",
          "type": "function"
        },
        "index": {
          "description": "Make an HttpResp of an arbitrary content-type based on pure lazy ByteString Since the result is pure this function first measures its length so as to set Content-Length header instead of using HTTP chunk encoding",
          "hierarchy": "Data IterIO Http",
          "module": "Data.IterIO.Http",
          "name": "mkContentLenResp",
          "normalized": "HttpStatus-\u003eString-\u003eByteString-\u003eHttpResp a",
          "package": "iterIO",
          "partial": "Content Len Resp",
          "signature": "HttpStatus-\u003eString-\u003eByteString-\u003eHttpResp m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Http.html#v:mkContentLenResp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate an \u003ccode\u003e\u003ca\u003eHttpResp\u003c/a\u003e\u003c/code\u003e with a body of type \u003ccode\u003etext/html\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.IterIO.Http",
          "name": "mkHtmlResp",
          "package": "iterIO",
          "signature": "HttpStatus-\u003e ByteString-\u003e HttpResp m",
          "type": "function"
        },
        "index": {
          "description": "Generate an HttpResp with body of type text html",
          "hierarchy": "Data IterIO Http",
          "module": "Data.IterIO.Http",
          "name": "mkHtmlResp",
          "normalized": "HttpStatus-\u003eByteString-\u003eHttpResp a",
          "package": "iterIO",
          "partial": "Html Resp",
          "signature": "HttpStatus-\u003eByteString-\u003eHttpResp m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Http.html#v:mkHtmlResp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate an \u003ccode\u003e\u003ca\u003eHttpResp\u003c/a\u003e\u003c/code\u003e without a body.\n\u003c/p\u003e",
          "module": "Data.IterIO.Http",
          "name": "mkHttpHead",
          "package": "iterIO",
          "signature": "HttpStatus -\u003e HttpResp m",
          "source": "src/Data-IterIO-Http.html#mkHttpHead",
          "type": "function"
        },
        "index": {
          "description": "Generate an HttpResp without body",
          "hierarchy": "Data IterIO Http",
          "module": "Data.IterIO.Http",
          "name": "mkHttpHead",
          "normalized": "HttpStatus-\u003eHttpResp a",
          "package": "iterIO",
          "partial": "Http Head",
          "signature": "HttpStatus-\u003eHttpResp m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Http.html#v:mkHttpHead"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake an \u003ccode\u003e\u003ca\u003eHttpResp\u003c/a\u003e\u003c/code\u003e of an arbitrary content-type based on an\n \u003ccode\u003e\u003ca\u003eOnum\u003c/a\u003e\u003c/code\u003e that will dynamically generate the message body.  Since the\n message body is generated dynamically, the reply will use an HTTP\n chunk encoding.\n\u003c/p\u003e",
          "module": "Data.IterIO.Http",
          "name": "mkOnumResp",
          "package": "iterIO",
          "signature": "HttpStatus-\u003e String-\u003e Onum ByteString m (IterR ByteString m ())-\u003e HttpResp m",
          "type": "function"
        },
        "index": {
          "description": "Make an HttpResp of an arbitrary content-type based on an Onum that will dynamically generate the message body Since the message body is generated dynamically the reply will use an HTTP chunk encoding",
          "hierarchy": "Data IterIO Http",
          "module": "Data.IterIO.Http",
          "name": "mkOnumResp",
          "normalized": "HttpStatus-\u003eString-\u003eOnum ByteString a(IterR ByteString a())-\u003eHttpResp a",
          "package": "iterIO",
          "partial": "Onum Resp",
          "signature": "HttpStatus-\u003eString-\u003eOnum ByteString m(IterR ByteString m())-\u003eHttpResp m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Http.html#v:mkOnumResp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate a null \u003ccode\u003e\u003ca\u003eHttpServerConf\u003c/a\u003e\u003c/code\u003e structure with no logging and no\n Date header.\n\u003c/p\u003e",
          "module": "Data.IterIO.Http",
          "name": "nullHttpServer",
          "package": "iterIO",
          "signature": "HttpRequestHandler m () -\u003e HttpServerConf m",
          "source": "src/Data-IterIO-Http.html#nullHttpServer",
          "type": "function"
        },
        "index": {
          "description": "Generate null HttpServerConf structure with no logging and no Date header",
          "hierarchy": "Data IterIO Http",
          "module": "Data.IterIO.Http",
          "name": "nullHttpServer",
          "normalized": "HttpRequestHandler a()-\u003eHttpServerConf a",
          "package": "iterIO",
          "partial": "Http Server",
          "signature": "HttpRequestHandler m()-\u003eHttpServerConf m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Http.html#v:nullHttpServer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTurn a path into a list of components. Used to set the\n \u003ccode\u003e\u003ca\u003ereqPathLst\u003c/a\u003e\u003c/code\u003e field in a request.\n\u003c/p\u003e",
          "module": "Data.IterIO.Http",
          "name": "path2list",
          "package": "iterIO",
          "signature": "S -\u003e [S]",
          "source": "src/Data-IterIO-Http.html#path2list",
          "type": "function"
        },
        "index": {
          "description": "Turn path into list of components Used to set the reqPathLst field in request",
          "hierarchy": "Data IterIO Http",
          "module": "Data.IterIO.Http",
          "name": "path2list",
          "normalized": "S-\u003e[S]",
          "package": "iterIO",
          "signature": "S-\u003e[S]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Http.html#v:path2list"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eValue of the content-Length header, if any.\n\u003c/p\u003e",
          "module": "Data.IterIO.Http",
          "name": "reqContentLength",
          "package": "iterIO",
          "signature": "(Maybe Int)",
          "source": "src/Data-IterIO-Http.html#HttpReq",
          "type": "function"
        },
        "index": {
          "description": "Value of the content-Length header if any",
          "hierarchy": "Data IterIO Http",
          "module": "Data.IterIO.Http",
          "name": "reqContentLength",
          "package": "iterIO",
          "partial": "Content Length",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Http.html#v:reqContentLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParsed version of the Content-Type header, if any.  The first\n \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e is the actual content type.  Following this is a\n list of parameter names and values.  The most useful parameter\n is \u003ccode\u003e\"boundary\"\u003c/code\u003e, used with the \u003ccode\u003emultipart/form-data\u003c/code\u003e content\n type.\n\u003c/p\u003e",
          "module": "Data.IterIO.Http",
          "name": "reqContentType",
          "package": "iterIO",
          "signature": "(Maybe (ByteString, [(ByteString, ByteString)]))",
          "source": "src/Data-IterIO-Http.html#HttpReq",
          "type": "function"
        },
        "index": {
          "description": "Parsed version of the Content-Type header if any The first ByteString is the actual content type Following this is list of parameter names and values The most useful parameter is boundary used with the multipart form-data content type",
          "hierarchy": "Data IterIO Http",
          "module": "Data.IterIO.Http",
          "name": "reqContentType",
          "normalized": "(Maybe(ByteString,[(ByteString,ByteString)]))",
          "package": "iterIO",
          "partial": "Content Type",
          "signature": "(Maybe(ByteString,[(ByteString,ByteString)]))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Http.html#v:reqContentType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eList of Cookies supplied in the request.\n\u003c/p\u003e",
          "module": "Data.IterIO.Http",
          "name": "reqCookies",
          "package": "iterIO",
          "signature": "[(ByteString, ByteString)]",
          "source": "src/Data-IterIO-Http.html#HttpReq",
          "type": "function"
        },
        "index": {
          "description": "List of Cookies supplied in the request",
          "hierarchy": "Data IterIO Http",
          "module": "Data.IterIO.Http",
          "name": "reqCookies",
          "normalized": "[(ByteString,ByteString)]",
          "package": "iterIO",
          "partial": "Cookies",
          "signature": "[(ByteString,ByteString)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Http.html#v:reqCookies"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eList of all header field names and values in the HTTP\n request.  Field names are converted to lowercase to allow\n easier searching.\n\u003c/p\u003e",
          "module": "Data.IterIO.Http",
          "name": "reqHeaders",
          "package": "iterIO",
          "signature": "[(ByteString, ByteString)]",
          "source": "src/Data-IterIO-Http.html#HttpReq",
          "type": "function"
        },
        "index": {
          "description": "List of all header field names and values in the HTTP request Field names are converted to lowercase to allow easier searching",
          "hierarchy": "Data IterIO Http",
          "module": "Data.IterIO.Http",
          "name": "reqHeaders",
          "normalized": "[(ByteString,ByteString)]",
          "package": "iterIO",
          "partial": "Headers",
          "signature": "[(ByteString,ByteString)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Http.html#v:reqHeaders"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLower-case host header (or the host from the request line, if\n the request is for an absolute URI).\n\u003c/p\u003e",
          "module": "Data.IterIO.Http",
          "name": "reqHost",
          "package": "iterIO",
          "signature": "ByteString",
          "source": "src/Data-IterIO-Http.html#HttpReq",
          "type": "function"
        },
        "index": {
          "description": "Lower-case host header or the host from the request line if the request is for an absolute URI",
          "hierarchy": "Data IterIO Http",
          "module": "Data.IterIO.Http",
          "name": "reqHost",
          "package": "iterIO",
          "partial": "Host",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Http.html#v:reqHost"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTime from the If-Modified-Since header (if present)\n\u003c/p\u003e",
          "module": "Data.IterIO.Http",
          "name": "reqIfModifiedSince",
          "package": "iterIO",
          "signature": "(Maybe UTCTime)",
          "source": "src/Data-IterIO-Http.html#HttpReq",
          "type": "function"
        },
        "index": {
          "description": "Time from the If-Modified-Since header if present",
          "hierarchy": "Data IterIO Http",
          "module": "Data.IterIO.Http",
          "name": "reqIfModifiedSince",
          "package": "iterIO",
          "partial": "If Modified Since",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Http.html#v:reqIfModifiedSince"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMethod (e.g., GET, POST, ...).\n\u003c/p\u003e",
          "module": "Data.IterIO.Http",
          "name": "reqMethod",
          "package": "iterIO",
          "signature": "ByteString",
          "source": "src/Data-IterIO-Http.html#HttpReq",
          "type": "function"
        },
        "index": {
          "description": "Method e.g GET POST",
          "hierarchy": "Data IterIO Http",
          "module": "Data.IterIO.Http",
          "name": "reqMethod",
          "package": "iterIO",
          "partial": "Method",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Http.html#v:reqMethod"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns a normalized version of the full requested path\n (including all context in \u003ccode\u003ereqCtx\u003c/code\u003e) in the URL (e.g., where \u003ccode\u003e\".\"\u003c/code\u003e\n has been eliminated, \u003ccode\u003e\"..\"\u003c/code\u003e has been processed, there is exactly\n one \u003ccode\u003e'/'\u003c/code\u003e between each directory component, and the query has\n been stripped off).\n\u003c/p\u003e",
          "module": "Data.IterIO.Http",
          "name": "reqNormalPath",
          "package": "iterIO",
          "signature": "HttpReq s -\u003e ByteString",
          "source": "src/Data-IterIO-Http.html#reqNormalPath",
          "type": "function"
        },
        "index": {
          "description": "Returns normalized version of the full requested path including all context in reqCtx in the URL e.g where has been eliminated has been processed there is exactly one between each directory component and the query has been stripped off",
          "hierarchy": "Data IterIO Http",
          "module": "Data.IterIO.Http",
          "name": "reqNormalPath",
          "normalized": "HttpReq a-\u003eByteString",
          "package": "iterIO",
          "partial": "Normal Path",
          "signature": "HttpReq s-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Http.html#v:reqNormalPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRaw path from the URL (not needed if you use \u003ccode\u003ereqPathList\u003c/code\u003e\n and \u003ccode\u003ereqPathParams\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Data.IterIO.Http",
          "name": "reqPath",
          "package": "iterIO",
          "signature": "ByteString",
          "source": "src/Data-IterIO-Http.html#HttpReq",
          "type": "function"
        },
        "index": {
          "description": "Raw path from the URL not needed if you use reqPathList and reqPathParams",
          "hierarchy": "Data IterIO Http",
          "module": "Data.IterIO.Http",
          "name": "reqPath",
          "package": "iterIO",
          "partial": "Path",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Http.html#v:reqPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStores pathname components that have been stripped off of\n \u003ccode\u003ereqPathLst\u003c/code\u003e during routing.\n\u003c/p\u003e",
          "module": "Data.IterIO.Http",
          "name": "reqPathCtx",
          "package": "iterIO",
          "signature": "[ByteString]",
          "source": "src/Data-IterIO-Http.html#HttpReq",
          "type": "function"
        },
        "index": {
          "description": "Stores pathname components that have been stripped off of reqPathLst during routing",
          "hierarchy": "Data IterIO Http",
          "module": "Data.IterIO.Http",
          "name": "reqPathCtx",
          "normalized": "[ByteString]",
          "package": "iterIO",
          "partial": "Path Ctx",
          "signature": "[ByteString]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Http.html#v:reqPathCtx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eURL request path, broken into a list of directory components,\n and normalized to remove \u003ccode\u003e\".\"\u003c/code\u003e and process \u003ccode\u003e\"..\"\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.IterIO.Http",
          "name": "reqPathLst",
          "package": "iterIO",
          "signature": "[ByteString]",
          "source": "src/Data-IterIO-Http.html#HttpReq",
          "type": "function"
        },
        "index": {
          "description": "URL request path broken into list of directory components and normalized to remove and process",
          "hierarchy": "Data IterIO Http",
          "module": "Data.IterIO.Http",
          "name": "reqPathLst",
          "normalized": "[ByteString]",
          "package": "iterIO",
          "partial": "Path Lst",
          "signature": "[ByteString]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Http.html#v:reqPathLst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUsed by \u003ccode\u003erouteVar\u003c/code\u003e to save pathname components that are\n variables (used as a stack, so the last variable saved is the\n first one in the list).\n\u003c/p\u003e",
          "module": "Data.IterIO.Http",
          "name": "reqPathParams",
          "package": "iterIO",
          "signature": "[ByteString]",
          "source": "src/Data-IterIO-Http.html#HttpReq",
          "type": "function"
        },
        "index": {
          "description": "Used by routeVar to save pathname components that are variables used as stack so the last variable saved is the first one in the list",
          "hierarchy": "Data IterIO Http",
          "module": "Data.IterIO.Http",
          "name": "reqPathParams",
          "normalized": "[ByteString]",
          "package": "iterIO",
          "partial": "Path Params",
          "signature": "[ByteString]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Http.html#v:reqPathParams"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePort number if supplied in Host header.\n\u003c/p\u003e",
          "module": "Data.IterIO.Http",
          "name": "reqPort",
          "package": "iterIO",
          "signature": "(Maybe Int)",
          "source": "src/Data-IterIO-Http.html#HttpReq",
          "type": "function"
        },
        "index": {
          "description": "Port number if supplied in Host header",
          "hierarchy": "Data IterIO Http",
          "module": "Data.IterIO.Http",
          "name": "reqPort",
          "package": "iterIO",
          "partial": "Port",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Http.html#v:reqPort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe portion of the URL after the \u003ccode\u003e?\u003c/code\u003e character (if any).\n\u003c/p\u003e",
          "module": "Data.IterIO.Http",
          "name": "reqQuery",
          "package": "iterIO",
          "signature": "ByteString",
          "source": "src/Data-IterIO-Http.html#HttpReq",
          "type": "function"
        },
        "index": {
          "description": "The portion of the URL after the character if any",
          "hierarchy": "Data IterIO Http",
          "module": "Data.IterIO.Http",
          "name": "reqQuery",
          "package": "iterIO",
          "partial": "Query",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Http.html#v:reqQuery"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eScheme (e.g., 'http', 'https', ...)\n\u003c/p\u003e",
          "module": "Data.IterIO.Http",
          "name": "reqScheme",
          "package": "iterIO",
          "signature": "ByteString",
          "source": "src/Data-IterIO-Http.html#HttpReq",
          "type": "function"
        },
        "index": {
          "description": "Scheme e.g http https",
          "hierarchy": "Data IterIO Http",
          "module": "Data.IterIO.Http",
          "name": "reqScheme",
          "package": "iterIO",
          "partial": "Scheme",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Http.html#v:reqScheme"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApplication-specific session information\n\u003c/p\u003e",
          "module": "Data.IterIO.Http",
          "name": "reqSession",
          "package": "iterIO",
          "signature": "s",
          "source": "src/Data-IterIO-Http.html#HttpReq",
          "type": "function"
        },
        "index": {
          "description": "Application-specific session information",
          "hierarchy": "Data IterIO Http",
          "module": "Data.IterIO.Http",
          "name": "reqSession",
          "package": "iterIO",
          "partial": "Session",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Http.html#v:reqSession"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe Transfer-Encoding header.\n\u003c/p\u003e",
          "module": "Data.IterIO.Http",
          "name": "reqTransferEncoding",
          "package": "iterIO",
          "signature": "ByteString",
          "source": "src/Data-IterIO-Http.html#HttpReq",
          "type": "function"
        },
        "index": {
          "description": "The Transfer-Encoding header",
          "hierarchy": "Data IterIO Http",
          "module": "Data.IterIO.Http",
          "name": "reqTransferEncoding",
          "package": "iterIO",
          "partial": "Transfer Encoding",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Http.html#v:reqTransferEncoding"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHTTP version major and minor number from the request line.\n\u003c/p\u003e",
          "module": "Data.IterIO.Http",
          "name": "reqVers",
          "package": "iterIO",
          "signature": "(Int, Int)",
          "source": "src/Data-IterIO-Http.html#HttpReq",
          "type": "function"
        },
        "index": {
          "description": "HTTP version major and minor number from the request line",
          "hierarchy": "Data IterIO Http",
          "module": "Data.IterIO.Http",
          "name": "reqVers",
          "normalized": "(Int,Int)",
          "package": "iterIO",
          "partial": "Vers",
          "signature": "(Int,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Http.html#v:reqVers"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate a 301 (redirect) response.\n\u003c/p\u003e",
          "module": "Data.IterIO.Http",
          "name": "resp301",
          "package": "iterIO",
          "signature": "String -\u003e HttpResp m",
          "source": "src/Data-IterIO-Http.html#resp301",
          "type": "function"
        },
        "index": {
          "description": "Generate redirect response",
          "hierarchy": "Data IterIO Http",
          "module": "Data.IterIO.Http",
          "name": "resp301",
          "normalized": "String-\u003eHttpResp a",
          "package": "iterIO",
          "signature": "String-\u003eHttpResp m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Http.html#v:resp301"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate a 303 (see other) response.\n\u003c/p\u003e",
          "module": "Data.IterIO.Http",
          "name": "resp303",
          "package": "iterIO",
          "signature": "String -\u003e HttpResp m",
          "source": "src/Data-IterIO-Http.html#resp303",
          "type": "function"
        },
        "index": {
          "description": "Generate see other response",
          "hierarchy": "Data IterIO Http",
          "module": "Data.IterIO.Http",
          "name": "resp303",
          "normalized": "String-\u003eHttpResp a",
          "package": "iterIO",
          "signature": "String-\u003eHttpResp m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Http.html#v:resp303"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate a 403 (forbidden) response.\n\u003c/p\u003e",
          "module": "Data.IterIO.Http",
          "name": "resp403",
          "package": "iterIO",
          "signature": "HttpReq s -\u003e HttpResp m",
          "source": "src/Data-IterIO-Http.html#resp403",
          "type": "function"
        },
        "index": {
          "description": "Generate forbidden response",
          "hierarchy": "Data IterIO Http",
          "module": "Data.IterIO.Http",
          "name": "resp403",
          "normalized": "HttpReq a-\u003eHttpResp b",
          "package": "iterIO",
          "signature": "HttpReq s-\u003eHttpResp m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Http.html#v:resp403"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate a 404 (not found) response.\n\u003c/p\u003e",
          "module": "Data.IterIO.Http",
          "name": "resp404",
          "package": "iterIO",
          "signature": "HttpReq s -\u003e HttpResp m",
          "source": "src/Data-IterIO-Http.html#resp404",
          "type": "function"
        },
        "index": {
          "description": "Generate not found response",
          "hierarchy": "Data IterIO Http",
          "module": "Data.IterIO.Http",
          "name": "resp404",
          "normalized": "HttpReq a-\u003eHttpResp b",
          "package": "iterIO",
          "signature": "HttpReq s-\u003eHttpResp m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Http.html#v:resp404"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate a 405 (method not allowed) response.\n\u003c/p\u003e",
          "module": "Data.IterIO.Http",
          "name": "resp405",
          "package": "iterIO",
          "signature": "HttpReq s -\u003e HttpResp m",
          "source": "src/Data-IterIO-Http.html#resp405",
          "type": "function"
        },
        "index": {
          "description": "Generate method not allowed response",
          "hierarchy": "Data IterIO Http",
          "module": "Data.IterIO.Http",
          "name": "resp405",
          "normalized": "HttpReq a-\u003eHttpResp b",
          "package": "iterIO",
          "signature": "HttpReq s-\u003eHttpResp m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Http.html#v:resp405"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate a 500 (internal server error) response.\n\u003c/p\u003e",
          "module": "Data.IterIO.Http",
          "name": "resp500",
          "package": "iterIO",
          "signature": "String -\u003e HttpResp m",
          "source": "src/Data-IterIO-Http.html#resp500",
          "type": "function"
        },
        "index": {
          "description": "Generate internal server error response",
          "hierarchy": "Data IterIO Http",
          "module": "Data.IterIO.Http",
          "name": "resp500",
          "normalized": "String-\u003eHttpResp a",
          "package": "iterIO",
          "signature": "String-\u003eHttpResp m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Http.html#v:resp500"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd header to the HTTP response.\n\u003c/p\u003e",
          "module": "Data.IterIO.Http",
          "name": "respAddHeader",
          "package": "iterIO",
          "signature": "(ByteString, ByteString) -\u003e HttpResp m -\u003e HttpResp m",
          "source": "src/Data-IterIO-Http.html#respAddHeader",
          "type": "function"
        },
        "index": {
          "description": "Add header to the HTTP response",
          "hierarchy": "Data IterIO Http",
          "module": "Data.IterIO.Http",
          "name": "respAddHeader",
          "normalized": "(ByteString,ByteString)-\u003eHttpResp a-\u003eHttpResp a",
          "package": "iterIO",
          "partial": "Add Header",
          "signature": "(ByteString,ByteString)-\u003eHttpResp m-\u003eHttpResp m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Http.html#v:respAddHeader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eOnum\u003c/a\u003e\u003c/code\u003e producing the message body.  Use \u003ccode\u003e\u003ca\u003einumNull\u003c/a\u003e\u003c/code\u003e (which is\n an empty \u003ccode\u003e\u003ca\u003eInum\u003c/a\u003e\u003c/code\u003e) to produce an empty body for responses that do\n not contain a body.\n\u003c/p\u003e",
          "module": "Data.IterIO.Http",
          "name": "respBody",
          "package": "iterIO",
          "signature": "(Onum ByteString m (IterR ByteString m ()))",
          "source": "src/Data-IterIO-Http.html#HttpResp",
          "type": "function"
        },
        "index": {
          "description": "Onum producing the message body Use inumNull which is an empty Inum to produce an empty body for responses that do not contain body",
          "hierarchy": "Data IterIO Http",
          "module": "Data.IterIO.Http",
          "name": "respBody",
          "normalized": "(Onum ByteString a(IterR ByteString a()))",
          "package": "iterIO",
          "partial": "Body",
          "signature": "(Onum ByteString m(IterR ByteString m()))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Http.html#v:respBody"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTrue if the message body should be passed through\n \u003ccode\u003e\u003ca\u003einumToChunks\u003c/a\u003e\u003c/code\u003e and a \"\u003ccode\u003eTransfer-Encoding: chunked\u003c/code\u003e\" header\n should be added.  Generally this should be \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e unless you\n have added a \u003ccode\u003eContent-Length\u003c/code\u003e header, manually set up chunk\n encoding by fusing it in \u003ccode\u003e\u003ca\u003erespBody\u003c/a\u003e\u003c/code\u003e, or are not returning a\n message body with the reply.\n\u003c/p\u003e",
          "module": "Data.IterIO.Http",
          "name": "respChunk",
          "package": "iterIO",
          "signature": "Bool",
          "source": "src/Data-IterIO-Http.html#HttpResp",
          "type": "function"
        },
        "index": {
          "description": "True if the message body should be passed through inumToChunks and Transfer-Encoding chunked header should be added Generally this should be True unless you have added Content-Length header manually set up chunk encoding by fusing it in respBody or are not returning message body with the reply",
          "hierarchy": "Data IterIO Http",
          "module": "Data.IterIO.Http",
          "name": "respChunk",
          "package": "iterIO",
          "partial": "Chunk",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Http.html#v:respChunk"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHeaders to send back\n\u003c/p\u003e",
          "module": "Data.IterIO.Http",
          "name": "respHeaders",
          "package": "iterIO",
          "signature": "[(ByteString, ByteString)]",
          "source": "src/Data-IterIO-Http.html#HttpResp",
          "type": "function"
        },
        "index": {
          "description": "Headers to send back",
          "hierarchy": "Data IterIO Http",
          "module": "Data.IterIO.Http",
          "name": "respHeaders",
          "normalized": "[(ByteString,ByteString)]",
          "package": "iterIO",
          "partial": "Headers",
          "signature": "[(ByteString,ByteString)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Http.html#v:respHeaders"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe response status.\n\u003c/p\u003e",
          "module": "Data.IterIO.Http",
          "name": "respStatus",
          "package": "iterIO",
          "signature": "HttpStatus",
          "source": "src/Data-IterIO-Http.html#HttpResp",
          "type": "function"
        },
        "index": {
          "description": "The response status",
          "hierarchy": "Data IterIO Http",
          "module": "Data.IterIO.Http",
          "name": "respStatus",
          "package": "iterIO",
          "partial": "Status",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Http.html#v:respStatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.IterIO.Http",
          "name": "srvDate",
          "package": "iterIO",
          "signature": "(Iter ByteString m (Maybe UTCTime))",
          "source": "src/Data-IterIO-Http.html#HttpServerConf",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data IterIO Http",
          "module": "Data.IterIO.Http",
          "name": "srvDate",
          "package": "iterIO",
          "partial": "Date",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Http.html#v:srvDate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.IterIO.Http",
          "name": "srvHandler",
          "package": "iterIO",
          "signature": "(HttpRequestHandler m ())",
          "source": "src/Data-IterIO-Http.html#HttpServerConf",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data IterIO Http",
          "module": "Data.IterIO.Http",
          "name": "srvHandler",
          "normalized": "(HttpRequestHandler a())",
          "package": "iterIO",
          "partial": "Handler",
          "signature": "(HttpRequestHandler m())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Http.html#v:srvHandler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.IterIO.Http",
          "name": "srvLogger",
          "package": "iterIO",
          "signature": "(String -\u003e Iter ByteString m ())",
          "source": "src/Data-IterIO-Http.html#HttpServerConf",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data IterIO Http",
          "module": "Data.IterIO.Http",
          "name": "srvLogger",
          "normalized": "(String-\u003eIter ByteString a())",
          "package": "iterIO",
          "partial": "Logger",
          "signature": "(String-\u003eIter ByteString m())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Http.html#v:srvLogger"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.IterIO.Http",
          "name": "stat100",
          "package": "iterIO",
          "signature": "HttpStatus",
          "source": "src/Data-IterIO-Http.html#stat100",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data IterIO Http",
          "module": "Data.IterIO.Http",
          "name": "stat100",
          "package": "iterIO",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Http.html#v:stat100"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.IterIO.Http",
          "name": "stat200",
          "package": "iterIO",
          "signature": "HttpStatus",
          "source": "src/Data-IterIO-Http.html#stat100",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data IterIO Http",
          "module": "Data.IterIO.Http",
          "name": "stat200",
          "package": "iterIO",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Http.html#v:stat200"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.IterIO.Http",
          "name": "stat301",
          "package": "iterIO",
          "signature": "HttpStatus",
          "source": "src/Data-IterIO-Http.html#stat100",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data IterIO Http",
          "module": "Data.IterIO.Http",
          "name": "stat301",
          "package": "iterIO",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Http.html#v:stat301"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.IterIO.Http",
          "name": "stat302",
          "package": "iterIO",
          "signature": "HttpStatus",
          "source": "src/Data-IterIO-Http.html#stat100",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data IterIO Http",
          "module": "Data.IterIO.Http",
          "name": "stat302",
          "package": "iterIO",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Http.html#v:stat302"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.IterIO.Http",
          "name": "stat303",
          "package": "iterIO",
          "signature": "HttpStatus",
          "source": "src/Data-IterIO-Http.html#stat100",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data IterIO Http",
          "module": "Data.IterIO.Http",
          "name": "stat303",
          "package": "iterIO",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Http.html#v:stat303"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.IterIO.Http",
          "name": "stat304",
          "package": "iterIO",
          "signature": "HttpStatus",
          "source": "src/Data-IterIO-Http.html#stat100",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data IterIO Http",
          "module": "Data.IterIO.Http",
          "name": "stat304",
          "package": "iterIO",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Http.html#v:stat304"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.IterIO.Http",
          "name": "stat307",
          "package": "iterIO",
          "signature": "HttpStatus",
          "source": "src/Data-IterIO-Http.html#stat100",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data IterIO Http",
          "module": "Data.IterIO.Http",
          "name": "stat307",
          "package": "iterIO",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Http.html#v:stat307"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.IterIO.Http",
          "name": "stat400",
          "package": "iterIO",
          "signature": "HttpStatus",
          "source": "src/Data-IterIO-Http.html#stat100",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data IterIO Http",
          "module": "Data.IterIO.Http",
          "name": "stat400",
          "package": "iterIO",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Http.html#v:stat400"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.IterIO.Http",
          "name": "stat401",
          "package": "iterIO",
          "signature": "HttpStatus",
          "source": "src/Data-IterIO-Http.html#stat100",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data IterIO Http",
          "module": "Data.IterIO.Http",
          "name": "stat401",
          "package": "iterIO",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Http.html#v:stat401"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.IterIO.Http",
          "name": "stat403",
          "package": "iterIO",
          "signature": "HttpStatus",
          "source": "src/Data-IterIO-Http.html#stat100",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data IterIO Http",
          "module": "Data.IterIO.Http",
          "name": "stat403",
          "package": "iterIO",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Http.html#v:stat403"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.IterIO.Http",
          "name": "stat404",
          "package": "iterIO",
          "signature": "HttpStatus",
          "source": "src/Data-IterIO-Http.html#stat100",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data IterIO Http",
          "module": "Data.IterIO.Http",
          "name": "stat404",
          "package": "iterIO",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Http.html#v:stat404"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.IterIO.Http",
          "name": "stat405",
          "package": "iterIO",
          "signature": "HttpStatus",
          "source": "src/Data-IterIO-Http.html#stat100",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data IterIO Http",
          "module": "Data.IterIO.Http",
          "name": "stat405",
          "package": "iterIO",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Http.html#v:stat405"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.IterIO.Http",
          "name": "stat500",
          "package": "iterIO",
          "signature": "HttpStatus",
          "source": "src/Data-IterIO-Http.html#stat100",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data IterIO Http",
          "module": "Data.IterIO.Http",
          "name": "stat500",
          "package": "iterIO",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Http.html#v:stat500"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.IterIO.Http",
          "name": "stat501",
          "package": "iterIO",
          "signature": "HttpStatus",
          "source": "src/Data-IterIO-Http.html#stat100",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data IterIO Http",
          "module": "Data.IterIO.Http",
          "name": "stat501",
          "package": "iterIO",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Http.html#v:stat501"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParses a Request-URI, defined by RFC2616, and\n returns (scheme, host, path, query).\n\u003c/p\u003e",
          "module": "Data.IterIO.Http",
          "name": "uri",
          "package": "iterIO",
          "signature": "Iter L m (S, S, Maybe Int, S, S)",
          "source": "src/Data-IterIO-Http.html#uri",
          "type": "function"
        },
        "index": {
          "description": "Parses Request-URI defined by RFC2616 and returns scheme host path query",
          "hierarchy": "Data IterIO Http",
          "module": "Data.IterIO.Http",
          "name": "uri",
          "normalized": "Iter L a(S,S,Maybe Int,S,S)",
          "package": "iterIO",
          "signature": "Iter L m(S,S,Maybe Int,S,S)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Http.html#v:uri"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.IterIO.HttpClient",
          "name": "HttpClient",
          "package": "iterIO",
          "source": "src/Data-IterIO-HttpClient.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data IterIO HttpClient",
          "module": "Data.IterIO.HttpClient",
          "name": "HttpClient",
          "package": "iterIO",
          "partial": "Http Client",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-HttpClient.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn HTTP client.\n\u003c/p\u003e",
          "module": "Data.IterIO.HttpClient",
          "name": "HttpClient",
          "package": "iterIO",
          "source": "src/Data-IterIO-HttpClient.html#HttpClient",
          "type": "data"
        },
        "index": {
          "description": "An HTTP client",
          "hierarchy": "Data IterIO HttpClient",
          "module": "Data.IterIO.HttpClient",
          "name": "HttpClient",
          "package": "iterIO",
          "partial": "Http Client",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-HttpClient.html#t:HttpClient"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn HTTP response handler used by HTTP clients.\n\u003c/p\u003e",
          "module": "Data.IterIO.HttpClient",
          "name": "HttpResponseHandler",
          "package": "iterIO",
          "source": "src/Data-IterIO-HttpClient.html#HttpResponseHandler",
          "type": "type"
        },
        "index": {
          "description": "An HTTP response handler used by HTTP clients",
          "hierarchy": "Data IterIO HttpClient",
          "module": "Data.IterIO.HttpClient",
          "name": "HttpResponseHandler",
          "package": "iterIO",
          "partial": "Http Response Handler",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-HttpClient.html#t:HttpResponseHandler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.IterIO.HttpClient",
          "name": "HttpClient",
          "package": "iterIO",
          "signature": "HttpClient",
          "source": "src/Data-IterIO-HttpClient.html#HttpClient",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data IterIO HttpClient",
          "module": "Data.IterIO.HttpClient",
          "name": "HttpClient",
          "package": "iterIO",
          "partial": "Http Client",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-HttpClient.html#v:HttpClient"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake a general HTTP request to host specified in the request.\n If the request is over HTTPS, the SSL context must be provided.\n The redirect count is used to limit the number of redirects\n followed (when receiving a 3xx response); use 0 to return the \n direct response. The \u003ccode\u003epassCookies\u003c/code\u003e flag is used to guard cookies\n on redirects: because \u003ccode\u003egenSimpleHttp\u003c/code\u003e performs a \"single request\"\n it does not parse \"Set-Cookie\" headers and so is unaware of the\n cookie domain. Hence, the flag is used for the decision in passing\n the cookie to the location of a redirect.\n\u003c/p\u003e",
          "module": "Data.IterIO.HttpClient",
          "name": "genSimpleHttp",
          "package": "iterIO",
          "signature": "HttpReq ()-\u003e L-\u003e Maybe SSLContext-\u003e Int-\u003e Bool-\u003e m (HttpResp m)",
          "type": "function"
        },
        "index": {
          "description": "Make general HTTP request to host specified in the request If the request is over HTTPS the SSL context must be provided The redirect count is used to limit the number of redirects followed when receiving xx response use to return the direct response The passCookies flag is used to guard cookies on redirects because genSimpleHttp performs single request it does not parse Set-Cookie headers and so is unaware of the cookie domain Hence the flag is used for the decision in passing the cookie to the location of redirect",
          "hierarchy": "Data IterIO HttpClient",
          "module": "Data.IterIO.HttpClient",
          "name": "genSimpleHttp",
          "normalized": "HttpReq()-\u003eL-\u003eMaybe SSLContext-\u003eInt-\u003eBool-\u003ea(HttpResp a)",
          "package": "iterIO",
          "partial": "Simple Http",
          "signature": "HttpReq()-\u003eL-\u003eMaybe SSLContext-\u003eInt-\u003eBool-\u003em(HttpResp m)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-HttpClient.html#v:genSimpleHttp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a simple GET request.\n The \u003ccode\u003eurl\u003c/code\u003e must be an \u003ccode\u003eabsoluteURI\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.IterIO.HttpClient",
          "name": "getRequest",
          "package": "iterIO",
          "signature": "String -\u003e HttpReq ()",
          "source": "src/Data-IterIO-HttpClient.html#getRequest",
          "type": "function"
        },
        "index": {
          "description": "Create simple GET request The url must be an absoluteURI",
          "hierarchy": "Data IterIO HttpClient",
          "module": "Data.IterIO.HttpClient",
          "name": "getRequest",
          "normalized": "String-\u003eHttpReq()",
          "package": "iterIO",
          "partial": "Request",
          "signature": "String-\u003eHttpReq()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-HttpClient.html#v:getRequest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUse SSL\n\u003c/p\u003e",
          "module": "Data.IterIO.HttpClient",
          "name": "hcIsHttps",
          "package": "iterIO",
          "signature": "Bool",
          "source": "src/Data-IterIO-HttpClient.html#HttpClient",
          "type": "function"
        },
        "index": {
          "description": "Use SSL",
          "hierarchy": "Data IterIO HttpClient",
          "module": "Data.IterIO.HttpClient",
          "name": "hcIsHttps",
          "package": "iterIO",
          "partial": "Is Https",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-HttpClient.html#v:hcIsHttps"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSocket\n\u003c/p\u003e",
          "module": "Data.IterIO.HttpClient",
          "name": "hcSock",
          "package": "iterIO",
          "signature": "Socket",
          "source": "src/Data-IterIO-HttpClient.html#HttpClient",
          "type": "function"
        },
        "index": {
          "description": "Socket",
          "hierarchy": "Data IterIO HttpClient",
          "module": "Data.IterIO.HttpClient",
          "name": "hcSock",
          "package": "iterIO",
          "partial": "Sock",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-HttpClient.html#v:hcSock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSocket address\n\u003c/p\u003e",
          "module": "Data.IterIO.HttpClient",
          "name": "hcSockAddr",
          "package": "iterIO",
          "signature": "SockAddr",
          "source": "src/Data-IterIO-HttpClient.html#HttpClient",
          "type": "function"
        },
        "index": {
          "description": "Socket address",
          "hierarchy": "Data IterIO HttpClient",
          "module": "Data.IterIO.HttpClient",
          "name": "hcSockAddr",
          "package": "iterIO",
          "partial": "Sock Addr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-HttpClient.html#v:hcSockAddr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSSL context\n\u003c/p\u003e",
          "module": "Data.IterIO.HttpClient",
          "name": "hcSslCtx",
          "package": "iterIO",
          "signature": "(Maybe SSLContext)",
          "source": "src/Data-IterIO-HttpClient.html#HttpClient",
          "type": "function"
        },
        "index": {
          "description": "SSL context",
          "hierarchy": "Data IterIO HttpClient",
          "module": "Data.IterIO.HttpClient",
          "name": "hcSslCtx",
          "package": "iterIO",
          "partial": "Ssl Ctx",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-HttpClient.html#v:hcSslCtx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a simple HEAD request.\n The \u003ccode\u003eurl\u003c/code\u003e must be an \u003ccode\u003eabsoluteURI\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.IterIO.HttpClient",
          "name": "headRequest",
          "package": "iterIO",
          "signature": "String -\u003e HttpReq ()",
          "source": "src/Data-IterIO-HttpClient.html#headRequest",
          "type": "function"
        },
        "index": {
          "description": "Create simple HEAD request The url must be an absoluteURI",
          "hierarchy": "Data IterIO HttpClient",
          "module": "Data.IterIO.HttpClient",
          "name": "headRequest",
          "normalized": "String-\u003eHttpReq()",
          "package": "iterIO",
          "partial": "Request",
          "signature": "String-\u003eHttpReq()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-HttpClient.html#v:headRequest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven an HTTP client configuration, make the actual connection to\n server.\n\u003c/p\u003e",
          "module": "Data.IterIO.HttpClient",
          "name": "httpConnect",
          "package": "iterIO",
          "signature": "HttpClient -\u003e IO (Iter L m (), Onum L m a)",
          "source": "src/Data-IterIO-HttpClient.html#httpConnect",
          "type": "function"
        },
        "index": {
          "description": "Given an HTTP client configuration make the actual connection to server",
          "hierarchy": "Data IterIO HttpClient",
          "module": "Data.IterIO.HttpClient",
          "name": "httpConnect",
          "normalized": "HttpClient-\u003eIO(Iter L a(),Onum L a b)",
          "package": "iterIO",
          "partial": "Connect",
          "signature": "HttpClient-\u003eIO(Iter L m(),Onum L m a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-HttpClient.html#v:httpConnect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven an initial request, and a response handler,\n create an inum that provides underlying functionality of an http\n client.\n\u003c/p\u003e",
          "module": "Data.IterIO.HttpClient",
          "name": "inumHttpClient",
          "package": "iterIO",
          "signature": "(HttpReq s, L) -\u003e HttpResponseHandler m s -\u003e Inum L L m a",
          "source": "src/Data-IterIO-HttpClient.html#inumHttpClient",
          "type": "function"
        },
        "index": {
          "description": "Given an initial request and response handler create an inum that provides underlying functionality of an http client",
          "hierarchy": "Data IterIO HttpClient",
          "module": "Data.IterIO.HttpClient",
          "name": "inumHttpClient",
          "normalized": "(HttpReq a,L)-\u003eHttpResponseHandler b a-\u003eInum L L b c",
          "package": "iterIO",
          "partial": "Http Client",
          "signature": "(HttpReq s,L)-\u003eHttpResponseHandler m s-\u003eInum L L m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-HttpClient.html#v:inumHttpClient"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMaximum number of redirects. Defult: no redirect (0).\n\u003c/p\u003e",
          "module": "Data.IterIO.HttpClient",
          "name": "maxNrRedirects",
          "package": "iterIO",
          "signature": "Int",
          "source": "src/Data-IterIO-HttpClient.html#maxNrRedirects",
          "type": "function"
        },
        "index": {
          "description": "Maximum number of redirects Defult no redirect",
          "hierarchy": "Data IterIO HttpClient",
          "module": "Data.IterIO.HttpClient",
          "name": "maxNrRedirects",
          "package": "iterIO",
          "partial": "Nr Redirects",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-HttpClient.html#v:maxNrRedirects"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven the host, port, context, and \"is-https\" flag, create\n a client value. The returned value can be used with \u003ccode\u003e\u003ca\u003ehttpConnect\u003c/a\u003e\u003c/code\u003e\n to get raw pipes to/from the server.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eNote:\u003c/em\u003e Some of this code is from the \u003ca\u003eHTTP\u003c/a\u003e package.\n\u003c/p\u003e",
          "module": "Data.IterIO.HttpClient",
          "name": "mkHttpClient",
          "package": "iterIO",
          "signature": "S-\u003e Int-\u003e Maybe SSLContext-\u003e Bool-\u003e IO HttpClient",
          "type": "function"
        },
        "index": {
          "description": "Given the host port context and is-https flag create client value The returned value can be used with httpConnect to get raw pipes to from the server Note Some of this code is from the HTTP package",
          "hierarchy": "Data IterIO HttpClient",
          "module": "Data.IterIO.HttpClient",
          "name": "mkHttpClient",
          "normalized": "S-\u003eInt-\u003eMaybe SSLContext-\u003eBool-\u003eIO HttpClient",
          "package": "iterIO",
          "partial": "Http Client",
          "signature": "S-\u003eInt-\u003eMaybe SSLContext-\u003eBool-\u003eIO HttpClient",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-HttpClient.html#v:mkHttpClient"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreatea generic HTTP request, given an absoluteURI:\n If the URI is not absolute, the parser will fail.\n\u003c/p\u003e",
          "module": "Data.IterIO.HttpClient",
          "name": "mkRequestToAbsUri",
          "package": "iterIO",
          "signature": "L -\u003e S -\u003e m (HttpReq ())",
          "source": "src/Data-IterIO-HttpClient.html#mkRequestToAbsUri",
          "type": "function"
        },
        "index": {
          "description": "Createa generic HTTP request given an absoluteURI If the URI is not absolute the parser will fail",
          "hierarchy": "Data IterIO HttpClient",
          "module": "Data.IterIO.HttpClient",
          "name": "mkRequestToAbsUri",
          "normalized": "L-\u003eS-\u003ea(HttpReq())",
          "package": "iterIO",
          "partial": "Request To Abs Uri",
          "signature": "L-\u003eS-\u003em(HttpReq())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-HttpClient.html#v:mkRequestToAbsUri"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a URL, Content-Type, and message body, perform a simple\n POST request. Note: message body must be properly encoded (e.g.,\n URL-encoded if the Content-Type is\n \"application/x-www-form-urlencoded\").\n\u003c/p\u003e",
          "module": "Data.IterIO.HttpClient",
          "name": "postRequest",
          "package": "iterIO",
          "signature": "String-\u003e String-\u003e L-\u003e HttpReq ()",
          "type": "function"
        },
        "index": {
          "description": "Given URL Content-Type and message body perform simple POST request Note message body must be properly encoded e.g URL-encoded if the Content-Type is application x-www-form-urlencoded",
          "hierarchy": "Data IterIO HttpClient",
          "module": "Data.IterIO.HttpClient",
          "name": "postRequest",
          "normalized": "String-\u003eString-\u003eL-\u003eHttpReq()",
          "package": "iterIO",
          "partial": "Request",
          "signature": "String-\u003eString-\u003eL-\u003eHttpReq()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-HttpClient.html#v:postRequest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePerform a simple HTTP GET request. No SSL support.\n\u003c/p\u003e",
          "module": "Data.IterIO.HttpClient",
          "name": "simpleGetHttp",
          "package": "iterIO",
          "signature": "String-\u003e m (HttpResp m)",
          "type": "function"
        },
        "index": {
          "description": "Perform simple HTTP GET request No SSL support",
          "hierarchy": "Data IterIO HttpClient",
          "module": "Data.IterIO.HttpClient",
          "name": "simpleGetHttp",
          "normalized": "String-\u003ea(HttpResp a)",
          "package": "iterIO",
          "partial": "Get Http",
          "signature": "String-\u003em(HttpResp m)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-HttpClient.html#v:simpleGetHttp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePerform a simple HTTPS GET request.\n\u003c/p\u003e",
          "module": "Data.IterIO.HttpClient",
          "name": "simpleGetHttps",
          "package": "iterIO",
          "signature": "String-\u003e SSLContext-\u003e m (HttpResp m)",
          "type": "function"
        },
        "index": {
          "description": "Perform simple HTTPS GET request",
          "hierarchy": "Data IterIO HttpClient",
          "module": "Data.IterIO.HttpClient",
          "name": "simpleGetHttps",
          "normalized": "String-\u003eSSLContext-\u003ea(HttpResp a)",
          "package": "iterIO",
          "partial": "Get Https",
          "signature": "String-\u003eSSLContext-\u003em(HttpResp m)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-HttpClient.html#v:simpleGetHttps"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePerform a simple HTTP HEAD request. No SSL support.\n\u003c/p\u003e",
          "module": "Data.IterIO.HttpClient",
          "name": "simpleHeadHttp",
          "package": "iterIO",
          "signature": "String-\u003e m (HttpResp m)",
          "type": "function"
        },
        "index": {
          "description": "Perform simple HTTP HEAD request No SSL support",
          "hierarchy": "Data IterIO HttpClient",
          "module": "Data.IterIO.HttpClient",
          "name": "simpleHeadHttp",
          "normalized": "String-\u003ea(HttpResp a)",
          "package": "iterIO",
          "partial": "Head Http",
          "signature": "String-\u003em(HttpResp m)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-HttpClient.html#v:simpleHeadHttp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePerform a simple HTTPS HEAD request.\n\u003c/p\u003e",
          "module": "Data.IterIO.HttpClient",
          "name": "simpleHeadHttps",
          "package": "iterIO",
          "signature": "String-\u003e SSLContext-\u003e m (HttpResp m)",
          "type": "function"
        },
        "index": {
          "description": "Perform simple HTTPS HEAD request",
          "hierarchy": "Data IterIO HttpClient",
          "module": "Data.IterIO.HttpClient",
          "name": "simpleHeadHttps",
          "normalized": "String-\u003eSSLContext-\u003ea(HttpResp a)",
          "package": "iterIO",
          "partial": "Head Https",
          "signature": "String-\u003eSSLContext-\u003em(HttpResp m)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-HttpClient.html#v:simpleHeadHttps"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePerform a simple HTTP request, given the the request header, body\n and SSL context, if any.\n\u003c/p\u003e",
          "module": "Data.IterIO.HttpClient",
          "name": "simpleHttp",
          "package": "iterIO",
          "signature": "HttpReq ()-\u003e L-\u003e Maybe SSLContext-\u003e m (HttpResp m)",
          "type": "function"
        },
        "index": {
          "description": "Perform simple HTTP request given the the request header body and SSL context if any",
          "hierarchy": "Data IterIO HttpClient",
          "module": "Data.IterIO.HttpClient",
          "name": "simpleHttp",
          "normalized": "HttpReq()-\u003eL-\u003eMaybe SSLContext-\u003ea(HttpResp a)",
          "package": "iterIO",
          "partial": "Http",
          "signature": "HttpReq()-\u003eL-\u003eMaybe SSLContext-\u003em(HttpResp m)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-HttpClient.html#v:simpleHttp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUser agent corresponding to this library.\n\u003c/p\u003e",
          "module": "Data.IterIO.HttpClient",
          "name": "userAgent",
          "package": "iterIO",
          "signature": "String",
          "source": "src/Data-IterIO-HttpClient.html#userAgent",
          "type": "function"
        },
        "index": {
          "description": "User agent corresponding to this library",
          "hierarchy": "Data IterIO HttpClient",
          "module": "Data.IterIO.HttpClient",
          "name": "userAgent",
          "package": "iterIO",
          "partial": "Agent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-HttpClient.html#v:userAgent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.IterIO.HttpRoute",
          "name": "HttpRoute",
          "package": "iterIO",
          "source": "src/Data-IterIO-HttpRoute.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data IterIO HttpRoute",
          "module": "Data.IterIO.HttpRoute",
          "name": "HttpRoute",
          "package": "iterIO",
          "partial": "Http Route",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-HttpRoute.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn abstract representation of file system calls returning an\n opaque handle type \u003ccode\u003eh\u003c/code\u003e in an \u003ccode\u003e\u003ca\u003eIter\u003c/a\u003e\u003c/code\u003e parameterized by an arbitrary\n \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e \u003ccode\u003em\u003c/code\u003e.  This representation allows one to use\n \u003ccode\u003e\u003ca\u003erouteGenFileSys\u003c/a\u003e\u003c/code\u003e in a monad that is not an instance of \u003ccode\u003e\u003ca\u003eMonadIO\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.IterIO.HttpRoute",
          "name": "FileSystemCalls",
          "package": "iterIO",
          "source": "src/Data-IterIO-HttpRoute.html#FileSystemCalls",
          "type": "data"
        },
        "index": {
          "description": "An abstract representation of file system calls returning an opaque handle type in an Iter parameterized by an arbitrary Monad This representation allows one to use routeGenFileSys in monad that is not an instance of MonadIO",
          "hierarchy": "Data IterIO HttpRoute",
          "module": "Data.IterIO.HttpRoute",
          "name": "FileSystemCalls",
          "package": "iterIO",
          "partial": "File System Calls",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-HttpRoute.html#t:FileSystemCalls"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType alias for the argument of \u003ccode\u003e\u003ca\u003erouteMap\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.IterIO.HttpRoute",
          "name": "HttpMap",
          "package": "iterIO",
          "source": "src/Data-IterIO-HttpRoute.html#HttpMap",
          "type": "type"
        },
        "index": {
          "description": "Type alias for the argument of routeMap",
          "hierarchy": "Data IterIO HttpRoute",
          "module": "Data.IterIO.HttpRoute",
          "name": "HttpMap",
          "package": "iterIO",
          "partial": "Http Map",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-HttpRoute.html#t:HttpMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimple HTTP request routing structure for \u003ccode\u003e\u003ca\u003einumHttpServer\u003c/a\u003e\u003c/code\u003e.  This\n is a wrapper around a function on \u003ccode\u003e\u003ca\u003eHttpReq\u003c/a\u003e\u003c/code\u003e structures.  If the\n function accepts the \u003ccode\u003e\u003ca\u003eHttpReq\u003c/a\u003e\u003c/code\u003e, it returns \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e a response\n action.  Otherwise it returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003eHttpRoute\u003c/code\u003e is a \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e, and hence can be concatenated with\n \u003ccode\u003e\u003ca\u003emappend\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003emconcat\u003c/a\u003e\u003c/code\u003e.  For example, you can say something like:\n\u003c/p\u003e\u003cpre\u003e simpleServer :: Iter L.ByteString IO ()  -- Output to web browser\n              -\u003e Onum L.ByteString IO ()  -- Input from web browser\n              -\u003e IO ()\n simpleServer iter enum = enum |$ inumHttpServer server .| iter\n     where htdocs = \"/var/www/htdocs\"\n           server = ioHttpServer $ runHttpRoute routing\n           routing = mconcat [ routeTop $ routeConst $ resp301 \"/start.html\"\n                             , routeName \"apps\" $ routeMap apps\n                             , routeFileSys mimeMap \"index.html\" htdocs\n                             ]\n           apps = [ (\"app1\", routeFn app1)\n                  , (\"app2\", routeFn app2) ]\n \n app1 :: (Monad m) =\u003e HttpReq -\u003e Iter L.ByteString m (HttpResp m)\n app1 = ...\n\u003c/pre\u003e\u003cp\u003eThe above function will redirect requests for \u003ccode\u003e/\u003c/code\u003e to the URL\n \u003ccode\u003e/start.html\u003c/code\u003e using an HTTP 301 (Moved Permanently) response.  Any\n request for a path under \u003ccode\u003e\u003cem\u003eapps\u003c/em\u003e\u003c/code\u003e will be redirected to the\n functions \u003ccode\u003eapp1\u003c/code\u003e, \u003ccode\u003eapp2\u003c/code\u003e, etc.  Finally, any other file name will\n be served out of the file system under the \u003ccode\u003e\"/var/www/htdocs\"\u003c/code\u003e\n directory.  (This example assumes \u003ccode\u003emimeMap\u003c/code\u003e has been constructed as\n discussed for \u003ccode\u003e\u003ca\u003emimeTypesI\u003c/a\u003e\u003c/code\u003e.)\n\u003c/p\u003e",
          "module": "Data.IterIO.HttpRoute",
          "name": "HttpRoute",
          "package": "iterIO",
          "source": "src/Data-IterIO-HttpRoute.html#HttpRoute",
          "type": "newtype"
        },
        "index": {
          "description": "Simple HTTP request routing structure for inumHttpServer This is wrapper around function on HttpReq structures If the function accepts the HttpReq it returns Just response action Otherwise it returns Nothing HttpRoute is Monoid and hence can be concatenated with mappend or mconcat For example you can say something like simpleServer Iter L.ByteString IO Output to web browser Onum L.ByteString IO Input from web browser IO simpleServer iter enum enum inumHttpServer server iter where htdocs var www htdocs server ioHttpServer runHttpRoute routing routing mconcat routeTop routeConst resp301 start.html routeName apps routeMap apps routeFileSys mimeMap index.html htdocs apps app1 routeFn app1 app2 routeFn app2 app1 Monad HttpReq Iter L.ByteString HttpResp app1 The above function will redirect requests for to the URL start.html using an HTTP Moved Permanently response Any request for path under apps will be redirected to the functions app1 app2 etc Finally any other file name will be served out of the file system under the var www htdocs directory This example assumes mimeMap has been constructed as discussed for mimeTypesI",
          "hierarchy": "Data IterIO HttpRoute",
          "module": "Data.IterIO.HttpRoute",
          "name": "HttpRoute",
          "package": "iterIO",
          "partial": "Http Route",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-HttpRoute.html#t:HttpRoute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.IterIO.HttpRoute",
          "name": "FileSystemCalls",
          "package": "iterIO",
          "signature": "FileSystemCalls",
          "source": "src/Data-IterIO-HttpRoute.html#FileSystemCalls",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data IterIO HttpRoute",
          "module": "Data.IterIO.HttpRoute",
          "name": "FileSystemCalls",
          "package": "iterIO",
          "partial": "File System Calls",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-HttpRoute.html#v:FileSystemCalls"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.IterIO.HttpRoute",
          "name": "HttpRoute",
          "package": "iterIO",
          "signature": "HttpRoute (HttpReq s -\u003e Maybe (Iter ByteString m (HttpResp m)))",
          "source": "src/Data-IterIO-HttpRoute.html#HttpRoute",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data IterIO HttpRoute",
          "module": "Data.IterIO.HttpRoute",
          "name": "HttpRoute",
          "normalized": "HttpRoute(HttpReq a-\u003eMaybe(Iter ByteString b(HttpResp b)))",
          "package": "iterIO",
          "partial": "Http Route",
          "signature": "HttpRoute(HttpReq s-\u003eMaybe(Iter ByteString m(HttpResp m)))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-HttpRoute.html#v:HttpRoute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrepend a header field to the response produced by an \u003ccode\u003e\u003ca\u003eHttpRoute\u003c/a\u003e\u003c/code\u003e\n if that \u003ccode\u003e\u003ca\u003eHttpRoute\u003c/a\u003e\u003c/code\u003e is successful.  For example, to let clients\n cache static data for an hour, you might use:\n\u003c/p\u003e\u003cpre\u003e\n   addHeader (\u003ccode\u003e\u003ca\u003epack\u003c/a\u003e\u003c/code\u003e \"Cache-control\", \u003ccode\u003e\u003ca\u003epack\u003c/a\u003e\u003c/code\u003e \"max-age=3600\") $\n       \u003ccode\u003e\u003ca\u003erouteFileSys\u003c/a\u003e\u003c/code\u003e mime (\u003ccode\u003e\u003ca\u003edirRedir\u003c/a\u003e\u003c/code\u003e \"index.html\") \"/var/www/htdocs\"\n\u003c/pre\u003e",
          "module": "Data.IterIO.HttpRoute",
          "name": "addHeader",
          "package": "iterIO",
          "signature": "(ByteString, ByteString) -\u003e HttpRoute m s -\u003e HttpRoute m s",
          "source": "src/Data-IterIO-HttpRoute.html#addHeader",
          "type": "function"
        },
        "index": {
          "description": "Prepend header field to the response produced by an HttpRoute if that HttpRoute is successful For example to let clients cache static data for an hour you might use addHeader pack Cache-control pack max-age routeFileSys mime dirRedir index.html var www htdocs",
          "hierarchy": "Data IterIO HttpRoute",
          "module": "Data.IterIO.HttpRoute",
          "name": "addHeader",
          "normalized": "(ByteString,ByteString)-\u003eHttpRoute a b-\u003eHttpRoute a b",
          "package": "iterIO",
          "partial": "Header",
          "signature": "(ByteString,ByteString)-\u003eHttpRoute m s-\u003eHttpRoute m s",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-HttpRoute.html#v:addHeader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003edirRedir indexFileName\u003c/code\u003e redirects requests to the URL formed by\n appending \u003ccode\u003e\"/\" ++ indexFileName\u003c/code\u003e to the requested URL.\n\u003c/p\u003e",
          "module": "Data.IterIO.HttpRoute",
          "name": "dirRedir",
          "package": "iterIO",
          "signature": "FilePath -\u003e FilePath -\u003e HttpRoute m s",
          "source": "src/Data-IterIO-HttpRoute.html#dirRedir",
          "type": "function"
        },
        "index": {
          "description": "dirRedir indexFileName redirects requests to the URL formed by appending indexFileName to the requested URL",
          "hierarchy": "Data IterIO HttpRoute",
          "module": "Data.IterIO.HttpRoute",
          "name": "dirRedir",
          "normalized": "FilePath-\u003eFilePath-\u003eHttpRoute a b",
          "package": "iterIO",
          "partial": "Redir",
          "signature": "FilePath-\u003eFilePath-\u003eHttpRoute m s",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-HttpRoute.html#v:dirRedir"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClose an open file.  You must call this unless you apply the\n enumerator returned by \u003ccode\u003efs_enum\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.IterIO.HttpRoute",
          "name": "fs_close",
          "package": "iterIO",
          "signature": "(h -\u003e Iter ByteString m ())",
          "source": "src/Data-IterIO-HttpRoute.html#FileSystemCalls",
          "type": "function"
        },
        "index": {
          "description": "Close an open file You must call this unless you apply the enumerator returned by fs enum",
          "hierarchy": "Data IterIO HttpRoute",
          "module": "Data.IterIO.HttpRoute",
          "name": "fs_close",
          "normalized": "(a-\u003eIter ByteString b())",
          "package": "iterIO",
          "signature": "(h-\u003eIter ByteString m())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-HttpRoute.html#v:fs_close"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEnumerate the contents of an open file, then close the file.\n If you apply the \u003ccode\u003e\u003ca\u003eOnum\u003c/a\u003e\u003c/code\u003e returned by \u003ccode\u003efs_enum\u003c/code\u003e, you do not need\n to call \u003ccode\u003efs_close\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.IterIO.HttpRoute",
          "name": "fs_enum",
          "package": "iterIO",
          "signature": "(h -\u003e Iter ByteString m (Onum ByteString m (IterR ByteString m ())))",
          "source": "src/Data-IterIO-HttpRoute.html#FileSystemCalls",
          "type": "function"
        },
        "index": {
          "description": "Enumerate the contents of an open file then close the file If you apply the Onum returned by fs enum you do not need to call fs close",
          "hierarchy": "Data IterIO HttpRoute",
          "module": "Data.IterIO.HttpRoute",
          "name": "fs_enum",
          "normalized": "(a-\u003eIter ByteString b(Onum ByteString b(IterR ByteString b())))",
          "package": "iterIO",
          "signature": "(h-\u003eIter ByteString m(Onum ByteString m(IterR ByteString m())))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-HttpRoute.html#v:fs_enum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the attributes of an open file.\n\u003c/p\u003e",
          "module": "Data.IterIO.HttpRoute",
          "name": "fs_fstat",
          "package": "iterIO",
          "signature": "(h -\u003e Iter ByteString m FileStatus)",
          "source": "src/Data-IterIO-HttpRoute.html#FileSystemCalls",
          "type": "function"
        },
        "index": {
          "description": "Return the attributes of an open file",
          "hierarchy": "Data IterIO HttpRoute",
          "module": "Data.IterIO.HttpRoute",
          "name": "fs_fstat",
          "normalized": "(a-\u003eIter ByteString b FileStatus)",
          "package": "iterIO",
          "signature": "(h-\u003eIter ByteString m FileStatus)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-HttpRoute.html#v:fs_fstat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOpen file and return an opaque handle of type \u003ccode\u003eh\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.IterIO.HttpRoute",
          "name": "fs_open",
          "package": "iterIO",
          "signature": "(FilePath -\u003e Iter ByteString m h)",
          "source": "src/Data-IterIO-HttpRoute.html#FileSystemCalls",
          "type": "function"
        },
        "index": {
          "description": "Open file and return an opaque handle of type",
          "hierarchy": "Data IterIO HttpRoute",
          "module": "Data.IterIO.HttpRoute",
          "name": "fs_open",
          "normalized": "(FilePath-\u003eIter ByteString a b)",
          "package": "iterIO",
          "signature": "(FilePath-\u003eIter ByteString m h)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-HttpRoute.html#v:fs_open"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn file attributes.\n\u003c/p\u003e",
          "module": "Data.IterIO.HttpRoute",
          "name": "fs_stat",
          "package": "iterIO",
          "signature": "(FilePath -\u003e Iter ByteString m FileStatus)",
          "source": "src/Data-IterIO-HttpRoute.html#FileSystemCalls",
          "type": "function"
        },
        "index": {
          "description": "Return file attributes",
          "hierarchy": "Data IterIO HttpRoute",
          "module": "Data.IterIO.HttpRoute",
          "name": "fs_stat",
          "normalized": "(FilePath-\u003eIter ByteString a FileStatus)",
          "package": "iterIO",
          "signature": "(FilePath-\u003eIter ByteString m FileStatus)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-HttpRoute.html#v:fs_stat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParses \u003ccode\u003emime.types\u003c/code\u003e file data.  Returns a function mapping file\n suffixes to mime types.  The argument is a default mime type for\n suffixes that do not match any in the mime.types data.  (Reasonable\n defaults might be \u003ccode\u003e\"text/html\"\u003c/code\u003e, \u003ccode\u003e\"text/plain\"\u003c/code\u003e, or, more\n pedantically but less usefully, \u003ccode\u003e\"application/octet-stream\"\u003c/code\u003e.)\n\u003c/p\u003e\u003cp\u003eSince this likely doesn't change, it is convenient just to define\n it once in your program, for instance with something like:\n\u003c/p\u003e\u003cpre\u003e mimeMap :: String -\u003e S8.ByteString\n mimeMap = unsafePerformIO $ do\n             path \u003c- findMimeTypes [\"mime.types\"\n                                   , \"/etc/mime.types\"\n                                   , \"/var/www/conf/mime.types\"]\n             enumFile path |$ mimeTypesI \"application/octet-stream\"\n     where\n       findMimeTypes (h:t) = do exist \u003c- fileExist h\n                                if exist then return h else findMimeTypes t\n       findMimeTypes []    = return \"mime.types\" -- cause error\n\u003c/pre\u003e",
          "module": "Data.IterIO.HttpRoute",
          "name": "mimeTypesI",
          "package": "iterIO",
          "signature": "String -\u003e Iter ByteString m (String -\u003e ByteString)",
          "source": "src/Data-IterIO-HttpRoute.html#mimeTypesI",
          "type": "function"
        },
        "index": {
          "description": "Parses mime.types file data Returns function mapping file suffixes to mime types The argument is default mime type for suffixes that do not match any in the mime.types data Reasonable defaults might be text html text plain or more pedantically but less usefully application octet-stream Since this likely doesn change it is convenient just to define it once in your program for instance with something like mimeMap String S8.ByteString mimeMap unsafePerformIO do path findMimeTypes mime.types etc mime.types var www conf mime.types enumFile path mimeTypesI application octet-stream where findMimeTypes do exist fileExist if exist then return else findMimeTypes findMimeTypes return mime.types cause error",
          "hierarchy": "Data IterIO HttpRoute",
          "module": "Data.IterIO.HttpRoute",
          "name": "mimeTypesI",
          "normalized": "String-\u003eIter ByteString a(String-\u003eByteString)",
          "package": "iterIO",
          "partial": "Types",
          "signature": "String-\u003eIter ByteString m(String-\u003eByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-HttpRoute.html#v:mimeTypesI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003erouteAlwaysMap\u003c/code\u003e is like \u003ccode\u003erouteMap\u003c/code\u003e, but matches all requests and\n returns a 404 error for names that do not appear in the map.\n\u003c/p\u003e",
          "module": "Data.IterIO.HttpRoute",
          "name": "routeAlwaysMap",
          "package": "iterIO",
          "signature": "HttpMap m s -\u003e HttpRoute m s",
          "source": "src/Data-IterIO-HttpRoute.html#routeAlwaysMap",
          "type": "function"
        },
        "index": {
          "description": "routeAlwaysMap is like routeMap but matches all requests and returns error for names that do not appear in the map",
          "hierarchy": "Data IterIO HttpRoute",
          "module": "Data.IterIO.HttpRoute",
          "name": "routeAlwaysMap",
          "normalized": "HttpMap a b-\u003eHttpRoute a b",
          "package": "iterIO",
          "partial": "Always Map",
          "signature": "HttpMap m s-\u003eHttpRoute m s",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-HttpRoute.html#v:routeAlwaysMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRoute all requests to a constant response action that does not\n depend on the request.  This route always succeeds, so anything\n \u003ccode\u003e\u003ca\u003emappend\u003c/a\u003e\u003c/code\u003eed will never be used.\n\u003c/p\u003e",
          "module": "Data.IterIO.HttpRoute",
          "name": "routeConst",
          "package": "iterIO",
          "signature": "HttpResp m -\u003e HttpRoute m s",
          "source": "src/Data-IterIO-HttpRoute.html#routeConst",
          "type": "function"
        },
        "index": {
          "description": "Route all requests to constant response action that does not depend on the request This route always succeeds so anything mappend ed will never be used",
          "hierarchy": "Data IterIO HttpRoute",
          "module": "Data.IterIO.HttpRoute",
          "name": "routeConst",
          "normalized": "HttpResp a-\u003eHttpRoute a b",
          "package": "iterIO",
          "partial": "Const",
          "signature": "HttpResp m-\u003eHttpRoute m s",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-HttpRoute.html#v:routeConst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRoute a request to a directory tree in the file system.  It gets\n the Content-Length from the target file's attributes (after opening\n the file).  Thus, overwriting files on an active server could cause\n problems, while renaming new files into place should be safe.\n\u003c/p\u003e",
          "module": "Data.IterIO.HttpRoute",
          "name": "routeFileSys",
          "package": "iterIO",
          "signature": "(String -\u003e ByteString)-\u003e (FilePath -\u003e HttpRoute m s)-\u003e FilePath-\u003e HttpRoute m s",
          "type": "function"
        },
        "index": {
          "description": "Route request to directory tree in the file system It gets the Content-Length from the target file attributes after opening the file Thus overwriting files on an active server could cause problems while renaming new files into place should be safe",
          "hierarchy": "Data IterIO HttpRoute",
          "module": "Data.IterIO.HttpRoute",
          "name": "routeFileSys",
          "normalized": "(String-\u003eByteString)-\u003e(FilePath-\u003eHttpRoute a b)-\u003eFilePath-\u003eHttpRoute a b",
          "package": "iterIO",
          "partial": "File Sys",
          "signature": "(String-\u003eByteString)-\u003e(FilePath-\u003eHttpRoute m s)-\u003eFilePath-\u003eHttpRoute m s",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-HttpRoute.html#v:routeFileSys"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRoute all requests to a particular function.  This route always\n succeeds, so anything \u003ccode\u003e\u003ca\u003emappend\u003c/a\u003e\u003c/code\u003eed will never be used.\n\u003c/p\u003e",
          "module": "Data.IterIO.HttpRoute",
          "name": "routeFn",
          "package": "iterIO",
          "signature": "(HttpReq s -\u003e Iter ByteString m (HttpResp m)) -\u003e HttpRoute m s",
          "source": "src/Data-IterIO-HttpRoute.html#routeFn",
          "type": "function"
        },
        "index": {
          "description": "Route all requests to particular function This route always succeeds so anything mappend ed will never be used",
          "hierarchy": "Data IterIO HttpRoute",
          "module": "Data.IterIO.HttpRoute",
          "name": "routeFn",
          "normalized": "(HttpReq a-\u003eIter ByteString b(HttpResp b))-\u003eHttpRoute b a",
          "package": "iterIO",
          "partial": "Fn",
          "signature": "(HttpReq s-\u003eIter ByteString m(HttpResp m))-\u003eHttpRoute m s",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-HttpRoute.html#v:routeFn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA generalized version of \u003ccode\u003e\u003ca\u003erouteFileSys\u003c/a\u003e\u003c/code\u003e that takes a\n \u003ccode\u003e\u003ca\u003eFileSystemCalls\u003c/a\u003e\u003c/code\u003e object and can therefore work outside of the\n \u003ccode\u003e\u003ca\u003eMonadIO\u003c/a\u003e\u003c/code\u003e monad.  Other than the \u003ccode\u003e\u003ca\u003eFileSystemCalls\u003c/a\u003e\u003c/code\u003e object, the\n arguments and their meaning are identical to \u003ccode\u003e\u003ca\u003erouteFileSys\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.IterIO.HttpRoute",
          "name": "routeGenFileSys",
          "package": "iterIO",
          "signature": "FileSystemCalls h m -\u003e (String -\u003e ByteString) -\u003e (FilePath -\u003e HttpRoute m s) -\u003e FilePath -\u003e HttpRoute m s",
          "source": "src/Data-IterIO-HttpRoute.html#routeGenFileSys",
          "type": "function"
        },
        "index": {
          "description": "generalized version of routeFileSys that takes FileSystemCalls object and can therefore work outside of the MonadIO monad Other than the FileSystemCalls object the arguments and their meaning are identical to routeFileSys",
          "hierarchy": "Data IterIO HttpRoute",
          "module": "Data.IterIO.HttpRoute",
          "name": "routeGenFileSys",
          "normalized": "FileSystemCalls a b-\u003e(String-\u003eByteString)-\u003e(FilePath-\u003eHttpRoute b c)-\u003eFilePath-\u003eHttpRoute b c",
          "package": "iterIO",
          "partial": "Gen File Sys",
          "signature": "FileSystemCalls h m-\u003e(String-\u003eByteString)-\u003e(FilePath-\u003eHttpRoute m s)-\u003eFilePath-\u003eHttpRoute m s",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-HttpRoute.html#v:routeGenFileSys"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRoute requests whose \"Host:\" header matches a particular\n string.\n\u003c/p\u003e",
          "module": "Data.IterIO.HttpRoute",
          "name": "routeHost",
          "package": "iterIO",
          "signature": "String-\u003e HttpRoute m s-\u003e HttpRoute m s",
          "type": "function"
        },
        "index": {
          "description": "Route requests whose Host header matches particular string",
          "hierarchy": "Data IterIO HttpRoute",
          "module": "Data.IterIO.HttpRoute",
          "name": "routeHost",
          "normalized": "String-\u003eHttpRoute a b-\u003eHttpRoute a b",
          "package": "iterIO",
          "partial": "Host",
          "signature": "String-\u003eHttpRoute m s-\u003eHttpRoute m s",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-HttpRoute.html#v:routeHost"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003erouteMap\u003c/code\u003e builds an efficient map out of a list of\n \u003ccode\u003e(directory_name, \u003ccode\u003e\u003ca\u003eHttpRoute\u003c/a\u003e\u003c/code\u003e)\u003c/code\u003e pairs.  If a name is not in the\n map, the request is not matched.  Note that only the next directory\n component in the URL is matched.\n\u003c/p\u003e",
          "module": "Data.IterIO.HttpRoute",
          "name": "routeMap",
          "package": "iterIO",
          "signature": "HttpMap m s -\u003e HttpRoute m s",
          "source": "src/Data-IterIO-HttpRoute.html#routeMap",
          "type": "function"
        },
        "index": {
          "description": "routeMap builds an efficient map out of list of directory name HttpRoute pairs If name is not in the map the request is not matched Note that only the next directory component in the URL is matched",
          "hierarchy": "Data IterIO HttpRoute",
          "module": "Data.IterIO.HttpRoute",
          "name": "routeMap",
          "normalized": "HttpMap a b-\u003eHttpRoute a b",
          "package": "iterIO",
          "partial": "Map",
          "signature": "HttpMap m s-\u003eHttpRoute m s",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-HttpRoute.html#v:routeMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRoute based on the method (GET, POST, HEAD, etc.) in a request.\n\u003c/p\u003e",
          "module": "Data.IterIO.HttpRoute",
          "name": "routeMethod",
          "package": "iterIO",
          "signature": "String-\u003e HttpRoute m s-\u003e HttpRoute m s",
          "type": "function"
        },
        "index": {
          "description": "Route based on the method GET POST HEAD etc in request",
          "hierarchy": "Data IterIO HttpRoute",
          "module": "Data.IterIO.HttpRoute",
          "name": "routeMethod",
          "normalized": "String-\u003eHttpRoute a b-\u003eHttpRoute a b",
          "package": "iterIO",
          "partial": "Method",
          "signature": "String-\u003eHttpRoute m s-\u003eHttpRoute m s",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-HttpRoute.html#v:routeMethod"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRoutes a specific directory name, like \u003ccode\u003e\u003ca\u003erouteMap\u003c/a\u003e\u003c/code\u003e for a singleton\n map.\n\u003c/p\u003e",
          "module": "Data.IterIO.HttpRoute",
          "name": "routeName",
          "package": "iterIO",
          "signature": "String -\u003e HttpRoute m s -\u003e HttpRoute m s",
          "source": "src/Data-IterIO-HttpRoute.html#routeName",
          "type": "function"
        },
        "index": {
          "description": "Routes specific directory name like routeMap for singleton map",
          "hierarchy": "Data IterIO HttpRoute",
          "module": "Data.IterIO.HttpRoute",
          "name": "routeName",
          "normalized": "String-\u003eHttpRoute a b-\u003eHttpRoute a b",
          "package": "iterIO",
          "partial": "Name",
          "signature": "String-\u003eHttpRoute m s-\u003eHttpRoute m s",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-HttpRoute.html#v:routeName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRoutes a specific path, like \u003ccode\u003e\u003ca\u003erouteName\u003c/a\u003e\u003c/code\u003e, except that the path\n can include several directories.\n\u003c/p\u003e",
          "module": "Data.IterIO.HttpRoute",
          "name": "routePath",
          "package": "iterIO",
          "signature": "String -\u003e HttpRoute m s -\u003e HttpRoute m s",
          "source": "src/Data-IterIO-HttpRoute.html#routePath",
          "type": "function"
        },
        "index": {
          "description": "Routes specific path like routeName except that the path can include several directories",
          "hierarchy": "Data IterIO HttpRoute",
          "module": "Data.IterIO.HttpRoute",
          "name": "routePath",
          "normalized": "String-\u003eHttpRoute a b-\u003eHttpRoute a b",
          "package": "iterIO",
          "partial": "Path",
          "signature": "String-\u003eHttpRoute m s-\u003eHttpRoute m s",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-HttpRoute.html#v:routePath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSelect a route based on some arbitrary function of the request.\n For most purposes, the existing predicates (\u003ccode\u003e\u003ca\u003erouteName\u003c/a\u003e\u003c/code\u003e,\n \u003ccode\u003e\u003ca\u003eroutePath\u003c/a\u003e\u003c/code\u003e, etc.) should be fine, but occationally you might want\n to define a custom predicate.  For example, to reject methods other\n then \"GET\" or \"POST\" at the top of your route, you could say:\n\u003c/p\u003e\u003cpre\u003e\n      myRoute = \u003ccode\u003e\u003ca\u003emconcat\u003c/a\u003e\u003c/code\u003e [ rejectBadMethod\n                        , otherRoute1\n                        , ...\n                        ]\n      ...\n\nrejectBadMethod :: \u003ccode\u003e\u003ca\u003eHttpRoute\u003c/a\u003e\u003c/code\u003e m\nrejectBadMethod =\n      routeReq $ req -\u003e\n          case \u003ccode\u003e\u003ca\u003ereqMethod\u003c/a\u003e\u003c/code\u003e req of\n            s | s == \u003ccode\u003e\u003ca\u003epack\u003c/a\u003e\u003c/code\u003e \"GET\" || s == \u003ccode\u003e\u003ca\u003epack\u003c/a\u003e\u003c/code\u003e \"PUT\" -\u003e\n                  \u003ccode\u003e\u003ca\u003emempty\u003c/a\u003e\u003c/code\u003e                   {- reject route, falling through\n                                                      to rest of myRoute -}\n            _ -\u003e \u003ccode\u003e\u003ca\u003erouteConst\u003c/a\u003e\u003c/code\u003e $ \u003ccode\u003e\u003ca\u003eresp405\u003c/a\u003e\u003c/code\u003e req  {- reject request -}\n\u003c/pre\u003e",
          "module": "Data.IterIO.HttpRoute",
          "name": "routeReq",
          "package": "iterIO",
          "signature": "(HttpReq s -\u003e HttpRoute m s) -\u003e HttpRoute m s",
          "source": "src/Data-IterIO-HttpRoute.html#routeReq",
          "type": "function"
        },
        "index": {
          "description": "Select route based on some arbitrary function of the request For most purposes the existing predicates routeName routePath etc should be fine but occationally you might want to define custom predicate For example to reject methods other then GET or POST at the top of your route you could say myRoute mconcat rejectBadMethod otherRoute1 rejectBadMethod HttpRoute rejectBadMethod routeReq req case reqMethod req of pack GET pack PUT mempty reject route falling through to rest of myRoute routeConst resp405 req reject request",
          "hierarchy": "Data IterIO HttpRoute",
          "module": "Data.IterIO.HttpRoute",
          "name": "routeReq",
          "normalized": "(HttpReq a-\u003eHttpRoute b a)-\u003eHttpRoute b a",
          "package": "iterIO",
          "partial": "Req",
          "signature": "(HttpReq s-\u003eHttpRoute m s)-\u003eHttpRoute m s",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-HttpRoute.html#v:routeReq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRoute the root directory (/).\n\u003c/p\u003e",
          "module": "Data.IterIO.HttpRoute",
          "name": "routeTop",
          "package": "iterIO",
          "signature": "HttpRoute m s -\u003e HttpRoute m s",
          "source": "src/Data-IterIO-HttpRoute.html#routeTop",
          "type": "function"
        },
        "index": {
          "description": "Route the root directory",
          "hierarchy": "Data IterIO HttpRoute",
          "module": "Data.IterIO.HttpRoute",
          "name": "routeTop",
          "normalized": "HttpRoute a b-\u003eHttpRoute a b",
          "package": "iterIO",
          "partial": "Top",
          "signature": "HttpRoute m s-\u003eHttpRoute m s",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-HttpRoute.html#v:routeTop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatches any directory name, but additionally pushes it onto the\n front of the \u003ccode\u003e\u003ca\u003ereqPathParams\u003c/a\u003e\u003c/code\u003e list in the \u003ccode\u003e\u003ca\u003eHttpReq\u003c/a\u003e\u003c/code\u003e structure.  This\n allows the name to serve as a variable argument to the eventual\n handling function.\n\u003c/p\u003e",
          "module": "Data.IterIO.HttpRoute",
          "name": "routeVar",
          "package": "iterIO",
          "signature": "HttpRoute m s -\u003e HttpRoute m s",
          "source": "src/Data-IterIO-HttpRoute.html#routeVar",
          "type": "function"
        },
        "index": {
          "description": "Matches any directory name but additionally pushes it onto the front of the reqPathParams list in the HttpReq structure This allows the name to serve as variable argument to the eventual handling function",
          "hierarchy": "Data IterIO HttpRoute",
          "module": "Data.IterIO.HttpRoute",
          "name": "routeVar",
          "normalized": "HttpRoute a b-\u003eHttpRoute a b",
          "package": "iterIO",
          "partial": "Var",
          "signature": "HttpRoute m s-\u003eHttpRoute m s",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-HttpRoute.html#v:routeVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.IterIO.HttpRoute",
          "name": "runHttpRoute",
          "package": "iterIO",
          "signature": "HttpRoute m s -\u003e HttpReq s -\u003e Iter ByteString m (HttpResp m)",
          "source": "src/Data-IterIO-HttpRoute.html#runHttpRoute",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data IterIO HttpRoute",
          "module": "Data.IterIO.HttpRoute",
          "name": "runHttpRoute",
          "normalized": "HttpRoute a b-\u003eHttpReq b-\u003eIter ByteString a(HttpResp a)",
          "package": "iterIO",
          "partial": "Http Route",
          "signature": "HttpRoute m s-\u003eHttpReq s-\u003eIter ByteString m(HttpResp m)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-HttpRoute.html#v:runHttpRoute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.IterIO.Inum",
          "name": "Inum",
          "package": "iterIO",
          "source": "src/Data-IterIO-Inum.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data IterIO Inum",
          "module": "Data.IterIO.Inum",
          "name": "Inum",
          "package": "iterIO",
          "partial": "Inum",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Inum.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003eCodec\u003c/code\u003e produces some input to feed to an \u003ccode\u003e\u003ca\u003eIter\u003c/a\u003e\u003c/code\u003e, and\n optionally returns an \u003ccode\u003e\u003ca\u003eInum\u003c/a\u003e\u003c/code\u003e that will produce the rest of the\n input.  The funciton \u003ccode\u003e\u003ca\u003erunCodec\u003c/a\u003e\u003c/code\u003e can be used to build an \u003ccode\u003e\u003ca\u003eInum\u003c/a\u003e\u003c/code\u003e out\n of a \u003ccode\u003e\u003ca\u003eCodec\u003c/a\u003e\u003c/code\u003e.  Using \u003ccode\u003e\u003ca\u003erunCodec\u003c/a\u003e\u003c/code\u003e is much simpler than \u003ccode\u003e\u003ca\u003emkInumM\u003c/a\u003e\u003c/code\u003e, but\n more expressive than \u003ccode\u003e\u003ca\u003emkInum\u003c/a\u003e\u003c/code\u003e.  For example, a possible\n implementation of \u003ccode\u003e\u003ca\u003emkInum\u003c/a\u003e\u003c/code\u003e would be:\n\u003c/p\u003e\u003cpre\u003e\n  mkInum :: (\u003ccode\u003e\u003ca\u003eChunkData\u003c/a\u003e\u003c/code\u003e tIn, \u003ccode\u003e\u003ca\u003eChunkData\u003c/a\u003e\u003c/code\u003e tOut, \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e m) =\u003e\n            \u003ccode\u003e\u003ca\u003eIter\u003c/a\u003e\u003c/code\u003e tIn m tOut -\u003e \u003ccode\u003e\u003ca\u003eInum\u003c/a\u003e\u003c/code\u003e tIn tOut m a\n  mkInum trans = inum\n      where inum = \u003ccode\u003e\u003ca\u003erunCodec\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eid\u003c/a\u003e\u003c/code\u003e $\n                   \u003ccode\u003e\u003ca\u003etryEOFI\u003c/a\u003e\u003c/code\u003e trans \u003e\u003e= \u003ccode\u003e\u003ca\u003emaybe\u003c/a\u003e\u003c/code\u003e (return (mempty, Nothing)) doinput\n            doinput input = do\n              eof \u003c- if null input then return False else \u003ccode\u003e\u003ca\u003eatEOFI\u003c/a\u003e\u003c/code\u003e\n              return (input, if eof then Nothing else Just inum)\n\u003c/pre\u003e",
          "module": "Data.IterIO.Inum",
          "name": "Codec",
          "package": "iterIO",
          "source": "src/Data-IterIO-Inum.html#Codec",
          "type": "type"
        },
        "index": {
          "description": "Codec produces some input to feed to an Iter and optionally returns an Inum that will produce the rest of the input The funciton runCodec can be used to build an Inum out of Codec Using runCodec is much simpler than mkInumM but more expressive than mkInum For example possible implementation of mkInum would be mkInum ChunkData tIn ChunkData tOut Monad Iter tIn tOut Inum tIn tOut mkInum trans inum where inum runCodec id tryEOFI trans maybe return mempty Nothing doinput doinput input do eof if null input then return False else atEOFI return input if eof then Nothing else Just inum",
          "hierarchy": "Data IterIO Inum",
          "module": "Data.IterIO.Inum",
          "name": "Codec",
          "package": "iterIO",
          "partial": "Codec",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Inum.html#t:Codec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA control handler maps control requests to \u003ccode\u003e\u003ca\u003eIterR\u003c/a\u003e\u003c/code\u003e results.\n Generally the type parameter \u003ccode\u003em1\u003c/code\u003e is \u003ccode\u003e\u003ccode\u003e\u003ca\u003eIter\u003c/a\u003e\u003c/code\u003e t' m\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.IterIO.Inum",
          "name": "CtlHandler",
          "package": "iterIO",
          "source": "src/Data-IterIO-Inum.html#CtlHandler",
          "type": "type"
        },
        "index": {
          "description": "control handler maps control requests to IterR results Generally the type parameter m1 is Iter",
          "hierarchy": "Data IterIO Inum",
          "module": "Data.IterIO.Inum",
          "name": "CtlHandler",
          "package": "iterIO",
          "partial": "Ctl Handler",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Inum.html#t:CtlHandler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type of an \u003cem\u003eiterator-enumerator\u003c/em\u003e, which transcodes data from\n some input type \u003ccode\u003etIn\u003c/code\u003e to some output type \u003ccode\u003etOut\u003c/code\u003e.  An \u003ccode\u003eInum\u003c/code\u003e acts\n as an \u003ccode\u003e\u003ca\u003eIter\u003c/a\u003e\u003c/code\u003e when consuming data, then acts as an enumerator when\n feeding transcoded data to another \u003ccode\u003e\u003ca\u003eIter\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eAt a high level, one can think of an \u003ccode\u003eInum\u003c/code\u003e as a function from\n \u003ccode\u003e\u003ca\u003eIter\u003c/a\u003e\u003c/code\u003es to \u003ccode\u003e\u003ca\u003eIterR\u003c/a\u003e\u003c/code\u003es, where an \u003ccode\u003eInum\u003c/code\u003e's input and output types are\n different.  A simpler-seeming alternative to \u003ccode\u003eInum\u003c/code\u003e might have\n been:\n\u003c/p\u003e\u003cpre\u003e type Inum' tIn tOut m a = Iter tOut m a -\u003e Iter tIn m a\n\u003c/pre\u003e\u003cp\u003eIn fact, given an \u003ccode\u003eInum\u003c/code\u003e object \u003ccode\u003einum\u003c/code\u003e, it is possible to construct\n a function of type \u003ccode\u003eInum'\u003c/code\u003e with \u003ccode\u003e(inum \u003ccode\u003e\u003ca\u003e.|\u003c/a\u003e\u003c/code\u003e)\u003c/code\u003e.  But sometimes one\n might like to concatenate \u003ccode\u003eInum\u003c/code\u003es.  For instance, consider a\n network protocol that changes encryption or compression modes\n midstream.  Transcoding is done by \u003ccode\u003eInum\u003c/code\u003es.  To change transcoding\n methods after applying an \u003ccode\u003eInum\u003c/code\u003e to an iteratee requires the\n ability to \"pop\" the iteratee back out of the \u003ccode\u003eInum\u003c/code\u003e so as to be\n able to hand it to another \u003ccode\u003eInum\u003c/code\u003e.  \u003ccode\u003eInum\u003c/code\u003e's return type (\u003ccode\u003eIter tIn\n m (IterR tOut m a)\u003c/code\u003e as opposed to \u003ccode\u003eIter tIn m a\u003c/code\u003e) allows the\n monadic bind operator \u003ccode\u003e\u003ca\u003e\u003e\u003e=\u003c/a\u003e\u003c/code\u003e to accomplish this popping in\n conjunction with the \u003ccode\u003e\u003ca\u003etryRI\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003ereRunIter\u003c/a\u003e\u003c/code\u003e functions.\n\u003c/p\u003e\u003cp\u003eAll \u003ccode\u003eInum\u003c/code\u003es must obey the following two rules.\n\u003c/p\u003e\u003col\u003e\u003cli\u003e \u003cem\u003eAn\u003c/em\u003e \u003ccode\u003eInum\u003c/code\u003e \u003cem\u003emay never feed a chunk with the EOF flag set to\u003c/em\u003e\n    \u003cem\u003eit's target\u003c/em\u003e \u003ccode\u003e\u003ca\u003eIter\u003c/a\u003e\u003c/code\u003e. Instead, upon receiving EOF, the \u003ccode\u003eInum\u003c/code\u003e\n    should simply return the state of the inner \u003ccode\u003e\u003ca\u003eIter\u003c/a\u003e\u003c/code\u003e (this is how\n    \"popping\" the iteratee back out works--If the \u003ccode\u003eInum\u003c/code\u003e passed\n    the EOF through to the \u003ccode\u003e\u003ca\u003eIter\u003c/a\u003e\u003c/code\u003e, the \u003ccode\u003e\u003ca\u003eIter\u003c/a\u003e\u003c/code\u003e would stop requesting\n    more input and could not be handed off to a new \u003ccode\u003eInum\u003c/code\u003e).\n\u003c/li\u003e\u003cli\u003e \u003cem\u003eAn\u003c/em\u003e \u003ccode\u003eInum\u003c/code\u003e \u003cem\u003emust always return the state of its target\u003c/em\u003e \u003ccode\u003e\u003ca\u003eIter\u003c/a\u003e\u003c/code\u003e.\n    This is true even when the \u003ccode\u003eInum\u003c/code\u003e fails, and is why the \u003ccode\u003e\u003ca\u003eFail\u003c/a\u003e\u003c/code\u003e\n    state contains a \u003ccode\u003e\u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e a\u003c/code\u003e field.\n\u003c/li\u003e\u003c/ol\u003e\u003cp\u003eIn addition to returning when it receives an EOF or fails, an\n \u003ccode\u003eInum\u003c/code\u003e should return when the target \u003ccode\u003e\u003ca\u003eIter\u003c/a\u003e\u003c/code\u003e returns a result or\n fails.  An \u003ccode\u003eInum\u003c/code\u003e may also unilaterally return the state of the\n iteratee at any earlier point, for instance if it has reached some\n logical message boundary (e.g., many protocols finish processing\n headers upon reading a blank line).\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003eInum\u003c/code\u003es are generally constructed with one of the \u003ccode\u003e\u003ca\u003emkInum\u003c/a\u003e\u003c/code\u003e or\n \u003ccode\u003e\u003ca\u003emkInumM\u003c/a\u003e\u003c/code\u003e functions, which hide most of the error handling details\n and ensure the above rules are obeyed.  Most \u003ccode\u003eInum\u003c/code\u003es are\n polymorphic in the last type, \u003ccode\u003ea\u003c/code\u003e, in order to work with iteratees\n returning any type.  There isn't much reason for an \u003ccode\u003eInum\u003c/code\u003e to care\n about the type \u003ccode\u003ea\u003c/code\u003e.  Had this module used the Rank2Types Haskell\n extension, it would define \u003ccode\u003eInum\u003c/code\u003e as:\n\u003c/p\u003e\u003cpre\u003e type Inum tIn tOut m = forall a. Iter tOut m a\n                               -\u003e Iter tIn m (IterR tOut m a)\n\u003c/pre\u003e",
          "module": "Data.IterIO.Inum",
          "name": "Inum",
          "package": "iterIO",
          "source": "src/Data-IterIO-Inum.html#Inum",
          "type": "type"
        },
        "index": {
          "description": "The type of an iterator-enumerator which transcodes data from some input type tIn to some output type tOut An Inum acts as an Iter when consuming data then acts as an enumerator when feeding transcoded data to another Iter At high level one can think of an Inum as function from Iter to IterR where an Inum input and output types are different simpler-seeming alternative to Inum might have been type Inum tIn tOut Iter tOut Iter tIn In fact given an Inum object inum it is possible to construct function of type Inum with inum But sometimes one might like to concatenate Inum For instance consider network protocol that changes encryption or compression modes midstream Transcoding is done by Inum To change transcoding methods after applying an Inum to an iteratee requires the ability to pop the iteratee back out of the Inum so as to be able to hand it to another Inum Inum return type Iter tIn IterR tOut as opposed to Iter tIn allows the monadic bind operator to accomplish this popping in conjunction with the tryRI and reRunIter functions All Inum must obey the following two rules An Inum may never feed chunk with the EOF flag set to it target Iter Instead upon receiving EOF the Inum should simply return the state of the inner Iter this is how popping the iteratee back out works--If the Inum passed the EOF through to the Iter the Iter would stop requesting more input and could not be handed off to new Inum An Inum must always return the state of its target Iter This is true even when the Inum fails and is why the Fail state contains Maybe field In addition to returning when it receives an EOF or fails an Inum should return when the target Iter returns result or fails An Inum may also unilaterally return the state of the iteratee at any earlier point for instance if it has reached some logical message boundary e.g many protocols finish processing headers upon reading blank line Inum are generally constructed with one of the mkInum or mkInumM functions which hide most of the error handling details and ensure the above rules are obeyed Most Inum are polymorphic in the last type in order to work with iteratees returning any type There isn much reason for an Inum to care about the type Had this module used the Rank2Types Haskell extension it would define Inum as type Inum tIn tOut forall Iter tOut Iter tIn IterR tOut",
          "hierarchy": "Data IterIO Inum",
          "module": "Data.IterIO.Inum",
          "name": "Inum",
          "package": "iterIO",
          "partial": "Inum",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Inum.html#t:Inum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA monad in which to define the actions of an \u003ccode\u003e\u003ccode\u003e\u003ca\u003eInum\u003c/a\u003e\u003c/code\u003e tIn tOut m\n a\u003c/code\u003e.  Note \u003ccode\u003eInumM tIn tOut m a\u003c/code\u003e is a \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e of kind \u003ccode\u003e* -\u003e *\u003c/code\u003e, where\n \u003ccode\u003ea\u003c/code\u003e is the (almost always parametric) return type of the \u003ccode\u003e\u003ca\u003eInum\u003c/a\u003e\u003c/code\u003e.  A\n fifth type argument is required for monadic computations of kind\n \u003ccode\u003e*\u003c/code\u003e, e.g.:\n\u003c/p\u003e\u003cpre\u003e seven :: InumM tIn tOut m a Int\n seven = return 7\n\u003c/pre\u003e\u003cp\u003eAnother important thing to note about the \u003ccode\u003e\u003ca\u003eInumM\u003c/a\u003e\u003c/code\u003e monad, as\n described in the documentation for \u003ccode\u003e\u003ca\u003emkInumM\u003c/a\u003e\u003c/code\u003e, is that you must call\n \u003ccode\u003e\u003ccode\u003e\u003ca\u003elift\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e twice to execute actions in monad \u003ccode\u003em\u003c/code\u003e, and you must use\n the \u003ccode\u003e\u003ca\u003eliftI\u003c/a\u003e\u003c/code\u003e function to execute actions in monad \u003ccode\u003e\u003ccode\u003e\u003ca\u003eIter\u003c/a\u003e\u003c/code\u003e t m a\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.IterIO.Inum",
          "name": "InumM",
          "package": "iterIO",
          "source": "src/Data-IterIO-Inum.html#InumM",
          "type": "type"
        },
        "index": {
          "description": "monad in which to define the actions of an Inum tIn tOut Note InumM tIn tOut is Monad of kind where is the almost always parametric return type of the Inum fifth type argument is required for monadic computations of kind e.g seven InumM tIn tOut Int seven return Another important thing to note about the InumM monad as described in the documentation for mkInumM is that you must call lift twice to execute actions in monad and you must use the liftI function to execute actions in monad Iter",
          "hierarchy": "Data IterIO Inum",
          "module": "Data.IterIO.Inum",
          "name": "InumM",
          "package": "iterIO",
          "partial": "Inum",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Inum.html#t:InumM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn \u003ccode\u003eOnum t m a\u003c/code\u003e is just an \u003ccode\u003e\u003ca\u003eInum\u003c/a\u003e\u003c/code\u003e in which the input is\n \u003ccode\u003e()\u003c/code\u003e--i.e., \u003ccode\u003e\u003ccode\u003e\u003ca\u003eInum\u003c/a\u003e\u003c/code\u003e () t m a\u003c/code\u003e--so that there is no meaningful input\n data to transcode.  Such an enumerator is called an\n \u003cem\u003eouter enumerator\u003c/em\u003e, because it must produce the data it feeds to\n \u003ccode\u003e\u003ca\u003eIter\u003c/a\u003e\u003c/code\u003es by either executing actions in monad \u003ccode\u003em\u003c/code\u003e, or from its own\n internal pure state (as for \u003ccode\u003e\u003ca\u003eenumPure\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e\u003cp\u003eAs with \u003ccode\u003e\u003ca\u003eInum\u003c/a\u003e\u003c/code\u003es, an \u003ccode\u003eOnum\u003c/code\u003e should under no circumstances ever feed\n a chunk with the EOF bit set to its \u003ccode\u003e\u003ca\u003eIter\u003c/a\u003e\u003c/code\u003e argument.  When the\n \u003ccode\u003eOnum\u003c/code\u003e runs out of data, it must simply return the current state of\n the \u003ccode\u003e\u003ca\u003eIter\u003c/a\u003e\u003c/code\u003e.  This way more data from another source can still be\n fed to the iteratee, as happens when enumerators are concatenated\n with the \u003ccode\u003e\u003ca\u003ecat\u003c/a\u003e\u003c/code\u003e function.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003eOnum\u003c/code\u003es should generally be constructed using the \u003ccode\u003e\u003ca\u003emkInum\u003c/a\u003e\u003c/code\u003e or\n \u003ccode\u003e\u003ca\u003emkInumM\u003c/a\u003e\u003c/code\u003e function, just like \u003ccode\u003e\u003ca\u003eInum\u003c/a\u003e\u003c/code\u003es, the only difference being\n that for an \u003ccode\u003eOnum\u003c/code\u003e the input type is \u003ccode\u003e()\u003c/code\u003e, so executing \u003ccode\u003e\u003ca\u003eIter\u003c/a\u003e\u003c/code\u003es to\n consume input will be of little use.\n\u003c/p\u003e",
          "module": "Data.IterIO.Inum",
          "name": "Onum",
          "package": "iterIO",
          "source": "src/Data-IterIO-Inum.html#Onum",
          "type": "type"
        },
        "index": {
          "description": "An Onum is just an Inum in which the input is i.e Inum so that there is no meaningful input data to transcode Such an enumerator is called an outer enumerator because it must produce the data it feeds to Iter by either executing actions in monad or from its own internal pure state as for enumPure As with Inum an Onum should under no circumstances ever feed chunk with the EOF bit set to its Iter argument When the Onum runs out of data it must simply return the current state of the Iter This way more data from another source can still be fed to the iteratee as happens when enumerators are concatenated with the cat function Onum should generally be constructed using the mkInum or mkInumM function just like Inum the only difference being that for an Onum the input type is so executing Iter to consume input will be of little use",
          "hierarchy": "Data IterIO Inum",
          "module": "Data.IterIO.Inum",
          "name": "Onum",
          "package": "iterIO",
          "partial": "Onum",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Inum.html#t:Onum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003eResidHandler\u003c/code\u003e specifies how to handle residual data in an\n \u003ccode\u003e\u003ca\u003eInum\u003c/a\u003e\u003c/code\u003e.  Typically, when an \u003ccode\u003e\u003ca\u003eInum\u003c/a\u003e\u003c/code\u003e finishes executing, there are\n two kinds of residual data.  First, the \u003ccode\u003e\u003ca\u003eInum\u003c/a\u003e\u003c/code\u003e itself (in its role\n as an iteratee) may have left some unconsumed data.  Second, the\n target \u003ccode\u003e\u003ca\u003eIter\u003c/a\u003e\u003c/code\u003e being fed by the \u003ccode\u003e\u003ca\u003eInum\u003c/a\u003e\u003c/code\u003e may have some resitual data,\n and this data may be of a different type.  A \u003ccode\u003eResidHandler\u003c/code\u003e allows\n this residual data to be adjusted by untranslating the residual\n data of the target \u003ccode\u003e\u003ca\u003eIter\u003c/a\u003e\u003c/code\u003e and sticking the result back into the\n \u003ccode\u003e\u003ca\u003eInum\u003c/a\u003e\u003c/code\u003e's residual data.\n\u003c/p\u003e\u003cp\u003eThe two most common \u003ccode\u003eResidHandler\u003c/code\u003es are \u003ccode\u003e\u003ca\u003epullupResid\u003c/a\u003e\u003c/code\u003e (to pull the\n target \u003ccode\u003e\u003ca\u003eIter\u003c/a\u003e\u003c/code\u003e's residual data back up to the \u003ccode\u003e\u003ca\u003eInum\u003c/a\u003e\u003c/code\u003e as is), and\n \u003ccode\u003e\u003ca\u003eid\u003c/a\u003e\u003c/code\u003e (to do no adjustment of residual data).\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003eResidHandler\u003c/code\u003es are used by the \u003ccode\u003e\u003ca\u003emkInumC\u003c/a\u003e\u003c/code\u003e function, and by the\n \u003ccode\u003e\u003ca\u003epassCtl\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eCtlHandler\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.IterIO.Inum",
          "name": "ResidHandler",
          "package": "iterIO",
          "source": "src/Data-IterIO-Inum.html#ResidHandler",
          "type": "type"
        },
        "index": {
          "description": "ResidHandler specifies how to handle residual data in an Inum Typically when an Inum finishes executing there are two kinds of residual data First the Inum itself in its role as an iteratee may have left some unconsumed data Second the target Iter being fed by the Inum may have some resitual data and this data may be of different type ResidHandler allows this residual data to be adjusted by untranslating the residual data of the target Iter and sticking the result back into the Inum residual data The two most common ResidHandler are pullupResid to pull the target Iter residual data back up to the Inum as is and id to do no adjustment of residual data ResidHandler are used by the mkInumC function and by the passCtl CtlHandler",
          "hierarchy": "Data IterIO Inum",
          "module": "Data.IterIO.Inum",
          "name": "ResidHandler",
          "package": "iterIO",
          "partial": "Resid Handler",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Inum.html#t:ResidHandler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun an \u003ccode\u003e\u003ca\u003eOnum\u003c/a\u003e\u003c/code\u003e on an \u003ccode\u003e\u003ca\u003eIter\u003c/a\u003e\u003c/code\u003e.  This is the main way of actually\n executing IO with \u003ccode\u003e\u003ca\u003eIter\u003c/a\u003e\u003c/code\u003es.  \u003ccode\u003e|$\u003c/code\u003e is a type-restricted version of\n the following code, in which \u003ccode\u003einum\u003c/code\u003e must be an \u003ccode\u003e\u003ca\u003eOnum\u003c/a\u003e\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e\n  inum |$ iter = \u003ccode\u003e\u003ca\u003erun\u003c/a\u003e\u003c/code\u003e (inum .| iter)\n  infixr 2 |$\n\u003c/pre\u003e",
          "module": "Data.IterIO.Inum",
          "name": "(|$)",
          "package": "iterIO",
          "signature": "Onum t m a -\u003e Iter t m a -\u003e m a",
          "source": "src/Data-IterIO-Inum.html#%7C%24",
          "type": "function"
        },
        "index": {
          "description": "Run an Onum on an Iter This is the main way of actually executing IO with Iter is type-restricted version of the following code in which inum must be an Onum inum iter run inum iter infixr",
          "hierarchy": "Data IterIO Inum",
          "module": "Data.IterIO.Inum",
          "name": "(|$) |$",
          "normalized": "Onum a b c-\u003eIter a b c-\u003eb c",
          "package": "iterIO",
          "signature": "Onum t m a-\u003eIter t m a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Inum.html#v:-124--36-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLeft-associative pipe operator.  Fuses two \u003ccode\u003e\u003ca\u003eInum\u003c/a\u003e\u003c/code\u003es when the\n output type of the first \u003ccode\u003e\u003ca\u003eInum\u003c/a\u003e\u003c/code\u003e is the same as the input type of\n the second.  More specifically, if \u003ccode\u003einum1\u003c/code\u003e transcodes type \u003ccode\u003etIn\u003c/code\u003e to\n \u003ccode\u003etOut\u003c/code\u003e and \u003ccode\u003einum2\u003c/code\u003e transcodes \u003ccode\u003etOut\u003c/code\u003e to \u003ccode\u003etOut2\u003c/code\u003e, then \u003ccode\u003einum1\n |. inum2\u003c/code\u003e produces a new \u003ccode\u003e\u003ca\u003eInum\u003c/a\u003e\u003c/code\u003e that transcodes from \u003ccode\u003etIn\u003c/code\u003e to\n \u003ccode\u003etOut2\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eTypically types \u003ccode\u003ei\u003c/code\u003e and \u003ccode\u003eiR\u003c/code\u003e are \u003ccode\u003e\u003ccode\u003e\u003ca\u003eIter\u003c/a\u003e\u003c/code\u003e tOut2 m a\u003c/code\u003e and \u003ccode\u003e\u003ccode\u003e\u003ca\u003eIterR\u003c/a\u003e\u003c/code\u003e\n tOut2 m a\u003c/code\u003e, respectively, in which case the second argument and\n result of \u003ccode\u003e|.\u003c/code\u003e are also \u003ccode\u003e\u003ca\u003eInum\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e\u003cp\u003eThis function is equivalent to:\n\u003c/p\u003e\u003cpre\u003e\n  outer |. inner = \\iter -\u003e outer \u003ccode\u003e\u003ca\u003e.|\u003c/a\u003e\u003c/code\u003e inner iter\n  infixl 4 |.\n\u003c/pre\u003e\u003cp\u003eBut if you like point-free notation, think of it as \u003ccode\u003eouter |. inner\n = (outer \u003ccode\u003e\u003ca\u003e.|\u003c/a\u003e\u003c/code\u003e) . inner\u003c/code\u003e, or better yet \u003ccode\u003e(|.) = (.)  . (\u003ccode\u003e\u003ca\u003e.|\u003c/a\u003e\u003c/code\u003e)\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.IterIO.Inum",
          "name": "(|.)",
          "package": "iterIO",
          "signature": "Inum tIn tOut m iR-\u003e (i -\u003e Iter tOut m iR)-\u003e i -\u003e Iter tIn m iR",
          "type": "function"
        },
        "index": {
          "description": "Left-associative pipe operator Fuses two Inum when the output type of the first Inum is the same as the input type of the second More specifically if inum1 transcodes type tIn to tOut and inum2 transcodes tOut to tOut2 then inum1 inum2 produces new Inum that transcodes from tIn to tOut2 Typically types and iR are Iter tOut2 and IterR tOut2 respectively in which case the second argument and result of are also Inum This function is equivalent to outer inner iter outer inner iter infixl But if you like point-free notation think of it as outer inner outer inner or better yet",
          "hierarchy": "Data IterIO Inum",
          "module": "Data.IterIO.Inum",
          "name": "(|.) |.",
          "normalized": "Inum a b c d-\u003e(e-\u003eIter b c d)-\u003ee-\u003eIter a c d",
          "package": "iterIO",
          "signature": "Inum tIn tOut m iR-\u003e(i-\u003eIter tOut m iR)-\u003ei-\u003eIter tIn m iR",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Inum.html#v:-124-."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRight-associative pipe operator.  Fuses an \u003ccode\u003e\u003ca\u003eInum\u003c/a\u003e\u003c/code\u003e that transcodes\n \u003ccode\u003etIn\u003c/code\u003e to \u003ccode\u003etOut\u003c/code\u003e with an \u003ccode\u003e\u003ca\u003eIter\u003c/a\u003e\u003c/code\u003e taking input type \u003ccode\u003etOut\u003c/code\u003e to produce\n an \u003ccode\u003e\u003ca\u003eIter\u003c/a\u003e\u003c/code\u003e taking input type \u003ccode\u003etIn\u003c/code\u003e.  If the \u003ccode\u003e\u003ca\u003eIter\u003c/a\u003e\u003c/code\u003e is still active\n when the \u003ccode\u003e\u003ca\u003eInum\u003c/a\u003e\u003c/code\u003e terminates (either normally or through an\n exception), then \u003ccode\u003e.|\u003c/code\u003e sends it an EOF.\n\u003c/p\u003e\u003cp\u003eHas fixity:\n\u003c/p\u003e\u003cpre\u003e infixr 4 .|\n\u003c/pre\u003e",
          "module": "Data.IterIO.Inum",
          "name": "(.|)",
          "package": "iterIO",
          "signature": "Inum tIn tOut m a-\u003e Iter tOut m a-\u003e Iter tIn m a",
          "type": "function"
        },
        "index": {
          "description": "Right-associative pipe operator Fuses an Inum that transcodes tIn to tOut with an Iter taking input type tOut to produce an Iter taking input type tIn If the Iter is still active when the Inum terminates either normally or through an exception then sends it an EOF Has fixity infixr",
          "hierarchy": "Data IterIO Inum",
          "module": "Data.IterIO.Inum",
          "name": "(.|) .|",
          "normalized": "Inum a b c d-\u003eIter b c d-\u003eIter a c d",
          "package": "iterIO",
          "signature": "Inum tIn tOut m a-\u003eIter tOut m a-\u003eIter tIn m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Inum.html#v:.-124-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e.|$\u003c/code\u003e is a variant of \u003ccode\u003e\u003ca\u003e|$\u003c/a\u003e\u003c/code\u003e that allows you to apply an \u003ccode\u003e\u003ca\u003eOnum\u003c/a\u003e\u003c/code\u003e\n from within an \u003ccode\u003e\u003ca\u003eIter\u003c/a\u003e\u003c/code\u003e monad.  This is often useful in conjuction\n with \u003ccode\u003e\u003ca\u003eenumPure\u003c/a\u003e\u003c/code\u003e, if you want to parse at some coarse-granularity\n (such as lines), and then re-parse the contents of some\n coarser-grained parse unit.  For example:\n\u003c/p\u003e\u003cpre\u003e     rawcommand \u003c- lineI\n     command \u003c- enumPure rawcommand .|$ parseCommandI\n     return Request { cmd = command, rawcmd = rawcommand }\n\u003c/pre\u003e\u003cp\u003e\u003ccode\u003e.|$\u003c/code\u003e has the same fixity as \u003ccode\u003e|$\u003c/code\u003e, namely:\n\u003c/p\u003e\u003cpre\u003e infixr 2 .|$\n\u003c/pre\u003e\u003cp\u003eNote the important distinction between \u003ccode\u003e(.|$)\u003c/code\u003e and \u003ccode\u003e(\u003ccode\u003e\u003ca\u003e.|\u003c/a\u003e\u003c/code\u003e)\u003c/code\u003e.\n \u003ccode\u003e(.|$)\u003c/code\u003e runs an \u003ccode\u003e\u003ca\u003eOnum\u003c/a\u003e\u003c/code\u003e and does not touch the current input, while\n (\u003ccode\u003e\u003ca\u003e.|\u003c/a\u003e\u003c/code\u003e) pipes the current input through an \u003ccode\u003e\u003ca\u003eInum\u003c/a\u003e\u003c/code\u003e.  For instance, to\n send the contents of a file to standard output (regardless of the\n current input), you must say \u003ccode\u003e\u003ccode\u003eenumFile\u003c/code\u003e \".signature\" .|$\n \u003ccode\u003estdoutI\u003c/code\u003e\u003c/code\u003e.  But to take the current input, compress it, and send\n the result to standard output, you must use \u003ccode\u003e\u003ca\u003e.|\u003c/a\u003e\u003c/code\u003e, as in \u003ccode\u003e\u003ccode\u003einumGzip\u003c/code\u003e\n \u003ccode\u003e\u003ca\u003e.|\u003c/a\u003e\u003c/code\u003e \u003ccode\u003estdoutI\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eAs suggested by the types, \u003ccode\u003eenum .|$ iter\u003c/code\u003e is sort of equivalent to\n \u003ccode\u003e\u003ccode\u003e\u003ca\u003elift\u003c/a\u003e\u003c/code\u003e (enum |$ iter)\u003c/code\u003e, except that the latter will call \u003ccode\u003ethrow\u003c/code\u003e\n on failures, causing language-level exceptions that cannot be\n caught within the outer \u003ccode\u003e\u003ca\u003eIter\u003c/a\u003e\u003c/code\u003e.  Thus, it is better to use \u003ccode\u003e.|$\u003c/code\u003e\n than \u003ccode\u003e\u003ccode\u003e\u003ca\u003elift\u003c/a\u003e\u003c/code\u003e (... \u003ccode\u003e\u003ca\u003e|$\u003c/a\u003e\u003c/code\u003e ...)\u003c/code\u003e, though in the less general case of\n the IO monad, \u003ccode\u003eenum .|$ iter\u003c/code\u003e is equivalent to \u003ccode\u003e\u003ccode\u003e\u003ca\u003eliftIO\u003c/a\u003e\u003c/code\u003e (enum \u003ccode\u003e\u003ca\u003e|$\u003c/a\u003e\u003c/code\u003e\n iter)\u003c/code\u003e as illustrated by the following examples:\n\u003c/p\u003e\u003cpre\u003e -- Catches exception, because .|$ propagates failure through the outer\n -- Iter Monad, where it can still be caught.\n apply1 :: IO String\n apply1 = enumPure \"test1\" |$ iter `catchI` handler\n     where\n       iter = enumPure \"test2\" .|$ fail \"error\"\n       handler (SomeException _) _ = return \"caught error\"\n \n -- Does not catch error.  |$ turns the Iter failure into a language-\n -- level exception, which can only be caught in the IO Monad.\n apply2 :: IO String\n apply2 = enumPure \"test1\" |$ iter `catchI` handler\n     where\n       iter = lift (enumPure \"test2\" |$ fail \"error\")\n       handler (SomeException _) _ = return \"caught error\"\n \n -- Catches the exception, because liftIO uses the IO catch function to\n -- turn language-level exceptions into monadic Iter failures.  (By\n -- contrast, lift works in any Monad, so cannot do this in apply2.)\n -- This example illustrates how liftIO is not equivalent to lift.\n apply3 :: IO String\n apply3 = enumPure \"test1\" |$ iter `catchI` handler\n     where\n       iter = liftIO (enumPure \"test2\" |$ fail \"error\")\n       handler (SomeException _) _ = return \"caught error\"\n\u003c/pre\u003e",
          "module": "Data.IterIO.Inum",
          "name": "(.|$)",
          "package": "iterIO",
          "signature": "Onum tOut m a -\u003e Iter tOut m a -\u003e Iter tIn m a",
          "source": "src/Data-IterIO-Inum.html#.%7C%24",
          "type": "function"
        },
        "index": {
          "description": "is variant of that allows you to apply an Onum from within an Iter monad This is often useful in conjuction with enumPure if you want to parse at some coarse-granularity such as lines and then re-parse the contents of some coarser-grained parse unit For example rawcommand lineI command enumPure rawcommand parseCommandI return Request cmd command rawcmd rawcommand has the same fixity as namely infixr Note the important distinction between and runs an Onum and does not touch the current input while pipes the current input through an Inum For instance to send the contents of file to standard output regardless of the current input you must say enumFile signature stdoutI But to take the current input compress it and send the result to standard output you must use as in inumGzip stdoutI As suggested by the types enum iter is sort of equivalent to lift enum iter except that the latter will call throw on failures causing language-level exceptions that cannot be caught within the outer Iter Thus it is better to use than lift though in the less general case of the IO monad enum iter is equivalent to liftIO enum iter as illustrated by the following examples Catches exception because propagates failure through the outer Iter Monad where it can still be caught apply1 IO String apply1 enumPure test1 iter catchI handler where iter enumPure test2 fail error handler SomeException return caught error Does not catch error turns the Iter failure into language level exception which can only be caught in the IO Monad apply2 IO String apply2 enumPure test1 iter catchI handler where iter lift enumPure test2 fail error handler SomeException return caught error Catches the exception because liftIO uses the IO catch function to turn language-level exceptions into monadic Iter failures By contrast lift works in any Monad so cannot do this in apply2 This example illustrates how liftIO is not equivalent to lift apply3 IO String apply3 enumPure test1 iter catchI handler where iter liftIO enumPure test2 fail error handler SomeException return caught error",
          "hierarchy": "Data IterIO Inum",
          "module": "Data.IterIO.Inum",
          "name": "(.|$) .|$",
          "normalized": "Onum a b c-\u003eIter a b c-\u003eIter d b c",
          "package": "iterIO",
          "signature": "Onum tOut m a-\u003eIter tOut m a-\u003eIter tIn m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Inum.html#v:.-124--36-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd a cleanup action to be executed when the \u003ccode\u003e\u003ca\u003eInum\u003c/a\u003e\u003c/code\u003e finishes, or,\n if used in conjunction with the \u003ccode\u003e\u003ca\u003ewithCleanup\u003c/a\u003e\u003c/code\u003e function, when the\n innermost enclosing \u003ccode\u003e\u003ca\u003ewithCleanup\u003c/a\u003e\u003c/code\u003e action finishes.\n\u003c/p\u003e",
          "module": "Data.IterIO.Inum",
          "name": "addCleanup",
          "package": "iterIO",
          "signature": "InumM tIn tOut m a () -\u003e InumM tIn tOut m a ()",
          "source": "src/Data-IterIO-Inum.html#addCleanup",
          "type": "function"
        },
        "index": {
          "description": "Add cleanup action to be executed when the Inum finishes or if used in conjunction with the withCleanup function when the innermost enclosing withCleanup action finishes",
          "hierarchy": "Data IterIO Inum",
          "module": "Data.IterIO.Inum",
          "name": "addCleanup",
          "normalized": "InumM a b c d()-\u003eInumM a b c d()",
          "package": "iterIO",
          "partial": "Cleanup",
          "signature": "InumM tIn tOut m a()-\u003eInumM tIn tOut m a()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Inum.html#v:addCleanup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConcatenate the outputs of two enumerators.  For example,\n \u003ccode\u003e\u003ccode\u003eenumFile\u003c/code\u003e \"file1\" `cat` \u003ccode\u003eenumFile\u003c/code\u003e \"file2\"\u003c/code\u003e produces an\n \u003ccode\u003e\u003ca\u003eOnum\u003c/a\u003e\u003c/code\u003e that outputs the concatenation of files \"file1\" and\n \"file2\".  Unless the first \u003ccode\u003e\u003ca\u003eInum\u003c/a\u003e\u003c/code\u003e fails, \u003ccode\u003ecat\u003c/code\u003e always invokes the\n second \u003ccode\u003e\u003ca\u003eInum\u003c/a\u003e\u003c/code\u003e, as the second \u003ccode\u003e\u003ca\u003eInum\u003c/a\u003e\u003c/code\u003e may have monadic side-effects\n that must be executed even when the \u003ccode\u003e\u003ca\u003eIter\u003c/a\u003e\u003c/code\u003e has already finished.\n See \u003ccode\u003e\u003ca\u003elcat\u003c/a\u003e\u003c/code\u003e if you want to stop when the \u003ccode\u003e\u003ca\u003eIter\u003c/a\u003e\u003c/code\u003e no longer requires\n input.  If you want to continue executing even in the event of an\n \u003ccode\u003eInumFail\u003c/code\u003e condition, you can wrap the first \u003ccode\u003e\u003ca\u003eInum\u003c/a\u003e\u003c/code\u003e with\n \u003ccode\u003e\u003ca\u003einumCatch\u003c/a\u003e\u003c/code\u003e and invoke \u003ccode\u003e\u003ca\u003eresumeI\u003c/a\u003e\u003c/code\u003e from within the exception handler.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003ecat\u003c/code\u003e (and \u003ccode\u003e\u003ca\u003elcat\u003c/a\u003e\u003c/code\u003e, described below) are useful in right folds.\n Say, for instance, that \u003ccode\u003efiles\u003c/code\u003e is a list of files you wish to\n concatenate.  You can use a construct such as:\n\u003c/p\u003e\u003cpre\u003e\n  catFiles :: (\u003ccode\u003e\u003ca\u003eMonadIO\u003c/a\u003e\u003c/code\u003e m) =\u003e [\u003ccode\u003e\u003ca\u003eFilePath\u003c/a\u003e\u003c/code\u003e] -\u003e \u003ccode\u003e\u003ca\u003eOnum\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e m a\n  catFiles files = \u003ccode\u003e\u003ca\u003efoldr\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003ecat\u003c/a\u003e\u003c/code\u003e . \u003ccode\u003eenumFile\u003c/code\u003e) \u003ccode\u003e\u003ca\u003einumNull\u003c/a\u003e\u003c/code\u003e files\n\u003c/pre\u003e\u003cp\u003eNote the use of \u003ccode\u003e\u003ca\u003einumNull\u003c/a\u003e\u003c/code\u003e as the starting value for \u003ccode\u003e\u003ca\u003efoldr\u003c/a\u003e\u003c/code\u003e.  This\n is not to be confused with \u003ccode\u003e\u003ca\u003einumNop\u003c/a\u003e\u003c/code\u003e.  \u003ccode\u003e\u003ca\u003einumNull\u003c/a\u003e\u003c/code\u003e acts as a no-op\n for concatentation, producing no output analogously to\n \u003ccode\u003e/dev/null\u003c/code\u003e.  By contrast \u003ccode\u003e\u003ca\u003einumNop\u003c/a\u003e\u003c/code\u003e is the no-op for fusing (see\n \u003ccode\u003e\u003ca\u003e|.\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003e.|\u003c/a\u003e\u003c/code\u003e below) because it passes all data through untouched.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003ecat\u003c/code\u003e has fixity:\n\u003c/p\u003e\u003cpre\u003e infixr 3 `cat`\n\u003c/pre\u003e",
          "module": "Data.IterIO.Inum",
          "name": "cat",
          "package": "iterIO",
          "signature": "Inum tIn tOut m a-\u003e Inum tIn tOut m a-\u003e Inum tIn tOut m a",
          "type": "function"
        },
        "index": {
          "description": "Concatenate the outputs of two enumerators For example enumFile file1 cat enumFile file2 produces an Onum that outputs the concatenation of files file1 and file2 Unless the first Inum fails cat always invokes the second Inum as the second Inum may have monadic side-effects that must be executed even when the Iter has already finished See lcat if you want to stop when the Iter no longer requires input If you want to continue executing even in the event of an InumFail condition you can wrap the first Inum with inumCatch and invoke resumeI from within the exception handler cat and lcat described below are useful in right folds Say for instance that files is list of files you wish to concatenate You can use construct such as catFiles MonadIO FilePath Onum ByteString catFiles files foldr cat enumFile inumNull files Note the use of inumNull as the starting value for foldr This is not to be confused with inumNop inumNull acts as no-op for concatentation producing no output analogously to dev null By contrast inumNop is the no-op for fusing see and below because it passes all data through untouched cat has fixity infixr cat",
          "hierarchy": "Data IterIO Inum",
          "module": "Data.IterIO.Inum",
          "name": "cat",
          "normalized": "Inum a b c d-\u003eInum a b c d-\u003eInum a b c d",
          "package": "iterIO",
          "signature": "Inum tIn tOut m a-\u003eInum tIn tOut m a-\u003eInum tIn tOut m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Inum.html#v:cat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a \u003ccode\u003e\u003ca\u003eCtlHandler\u003c/a\u003e\u003c/code\u003e given a function of a particular control\n argument type and a fallback \u003ccode\u003e\u003ca\u003eCtlHandler\u003c/a\u003e\u003c/code\u003e to run if the argument\n type does not match.  \u003ccode\u003econsCtl\u003c/code\u003e is used to chain handlers, with the\n rightmost handler being either \u003ccode\u003e\u003ca\u003enoCtl\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003epassCtl\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eFor example, to create a control handler that implements seek on\n \u003ccode\u003e\u003ccode\u003eSeekC\u003c/code\u003e\u003c/code\u003e requests, returns the size of the file on \u003ccode\u003e\u003ccode\u003eSizeC\u003c/code\u003e\u003c/code\u003e\n requests, and passes everything else out to the enclosing\n enumerator (if any), you could use the following:\n\u003c/p\u003e\u003cpre\u003e\n fileCtl :: (ChunkData t, MonadIO m) =\u003e Handle -\u003e CtlHandler (Iter () m) t m a\n fileCtl h = (\u003ccode\u003e\u003ca\u003emkFlushCtl\u003c/a\u003e\u003c/code\u003e $ (SeekC mode pos) -\u003e liftIO (hSeek h mode pos))\n             `consCtl` (\u003ccode\u003e\u003ca\u003emkCtl\u003c/a\u003e\u003c/code\u003e $ SizeC -\u003e liftIO (hFileSize h))\n             `consCtl` \u003ccode\u003e\u003ca\u003epassCtl\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eid\u003c/a\u003e\u003c/code\u003e\n\u003c/pre\u003e\u003cp\u003eHas fixity:\n\u003c/p\u003e\u003cpre\u003e infixr 9 `consCtl`\n\u003c/pre\u003e",
          "module": "Data.IterIO.Inum",
          "name": "consCtl",
          "package": "iterIO",
          "signature": "(carg -\u003e (cres -\u003e Iter t m a) -\u003e Chunk t -\u003e Iter tIn mIn (IterR t m a)) -\u003e CtlHandler (Iter tIn mIn) t m a -\u003e CtlHandler (Iter tIn mIn) t m a",
          "source": "src/Data-IterIO-Inum.html#consCtl",
          "type": "function"
        },
        "index": {
          "description": "Create CtlHandler given function of particular control argument type and fallback CtlHandler to run if the argument type does not match consCtl is used to chain handlers with the rightmost handler being either noCtl or passCtl For example to create control handler that implements seek on SeekC requests returns the size of the file on SizeC requests and passes everything else out to the enclosing enumerator if any you could use the following fileCtl ChunkData MonadIO Handle CtlHandler Iter fileCtl mkFlushCtl SeekC mode pos liftIO hSeek mode pos consCtl mkCtl SizeC liftIO hFileSize consCtl passCtl id Has fixity infixr consCtl",
          "hierarchy": "Data IterIO Inum",
          "module": "Data.IterIO.Inum",
          "name": "consCtl",
          "normalized": "(a-\u003e(b-\u003eIter c d e)-\u003eChunk c-\u003eIter f g(IterR c d e))-\u003eCtlHandler(Iter f g)c d e-\u003eCtlHandler(Iter f g)c d e",
          "package": "iterIO",
          "partial": "Ctl",
          "signature": "(carg-\u003e(cres-\u003eIter t m a)-\u003eChunk t-\u003eIter tIn mIn(IterR t m a))-\u003eCtlHandler(Iter tIn mIn)t m a-\u003eCtlHandler(Iter tIn mIn)t m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Inum.html#v:consCtl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType-restricted version of \u003ccode\u003e\u003ca\u003einumPure\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.IterIO.Inum",
          "name": "enumPure",
          "package": "iterIO",
          "signature": "tOut -\u003e Onum tOut m a",
          "source": "src/Data-IterIO-Inum.html#enumPure",
          "type": "function"
        },
        "index": {
          "description": "Type-restricted version of inumPure",
          "hierarchy": "Data IterIO Inum",
          "module": "Data.IterIO.Inum",
          "name": "enumPure",
          "normalized": "a-\u003eOnum a b c",
          "package": "iterIO",
          "partial": "Pure",
          "signature": "tOut-\u003eOnum tOut m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Inum.html#v:enumPure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eImmediately perform a successful exit from an \u003ccode\u003e\u003ca\u003eInumM\u003c/a\u003e\u003c/code\u003e monad,\n terminating the \u003ccode\u003e\u003ca\u003eInum\u003c/a\u003e\u003c/code\u003e and returning the current state of the\n target \u003ccode\u003e\u003ca\u003eIter\u003c/a\u003e\u003c/code\u003e.  Can be used to end an \u003ccode\u003e\u003ca\u003eirepeat\u003c/a\u003e\u003c/code\u003e loop.  (Use\n \u003ccode\u003e\u003ccode\u003e\u003ca\u003ethrowI\u003c/a\u003e\u003c/code\u003e ...\u003c/code\u003e for an unsuccessful exit.)\n\u003c/p\u003e",
          "module": "Data.IterIO.Inum",
          "name": "idone",
          "package": "iterIO",
          "signature": "InumM tIn tOut m a b",
          "source": "src/Data-IterIO-Inum.html#idone",
          "type": "function"
        },
        "index": {
          "description": "Immediately perform successful exit from an InumM monad terminating the Inum and returning the current state of the target Iter Can be used to end an irepeat loop Use throwI for an unsuccessful exit",
          "hierarchy": "Data IterIO Inum",
          "module": "Data.IterIO.Inum",
          "name": "idone",
          "package": "iterIO",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Inum.html#v:idone"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUsed from within the \u003ccode\u003e\u003ca\u003eInumM\u003c/a\u003e\u003c/code\u003e monad to feed data to the target\n \u003ccode\u003e\u003ca\u003eIter\u003c/a\u003e\u003c/code\u003e.  Returns \u003ccode\u003e\u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e if the target \u003ccode\u003e\u003ca\u003eIter\u003c/a\u003e\u003c/code\u003e is still active and\n \u003ccode\u003e\u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e if the iter has finished and the \u003ccode\u003e\u003ca\u003eInum\u003c/a\u003e\u003c/code\u003e should also\n return.  (If the \u003ccode\u003eautoDone\u003c/code\u003e flag is \u003ccode\u003e\u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e, then \u003ccode\u003eifeed\u003c/code\u003e,\n \u003ccode\u003eipipe\u003c/code\u003e, and \u003ccode\u003eirun\u003c/code\u003e will never actually return \u003ccode\u003e\u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e, but\n instead just immediately run cleanup functions and exit the\n \u003ccode\u003e\u003ca\u003eInum\u003c/a\u003e\u003c/code\u003e when the target \u003ccode\u003e\u003ca\u003eIter\u003c/a\u003e\u003c/code\u003e stops being active.)\n\u003c/p\u003e",
          "module": "Data.IterIO.Inum",
          "name": "ifeed",
          "package": "iterIO",
          "signature": "tOut -\u003e InumM tIn tOut m a Bool",
          "source": "src/Data-IterIO-Inum.html#ifeed",
          "type": "function"
        },
        "index": {
          "description": "Used from within the InumM monad to feed data to the target Iter Returns False if the target Iter is still active and True if the iter has finished and the Inum should also return If the autoDone flag is True then ifeed ipipe and irun will never actually return True but instead just immediately run cleanup functions and exit the Inum when the target Iter stops being active",
          "hierarchy": "Data IterIO Inum",
          "module": "Data.IterIO.Inum",
          "name": "ifeed",
          "normalized": "a-\u003eInumM b a c d Bool",
          "package": "iterIO",
          "signature": "tOut-\u003eInumM tIn tOut m a Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Inum.html#v:ifeed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA variant of \u003ccode\u003e\u003ca\u003eifeed\u003c/a\u003e\u003c/code\u003e that throws an exception of type \u003ccode\u003eIterEOF\u003c/code\u003e\n if the data being fed is \u003ccode\u003e\u003ca\u003enull\u003c/a\u003e\u003c/code\u003e.  Convenient when reading input\n with a function (such as \u003ca\u003eData.ListLike\u003c/a\u003e's \u003ccode\u003ehget\u003c/code\u003e) that returns 0\n bytes instead of throwing an EOF exception to indicate end of file.\n For instance, the main loop of \u003ccode\u003e\u003ccode\u003eenumFile\u003c/code\u003e\u003c/code\u003e could be implemented\n as:\n\u003c/p\u003e\u003cpre\u003e\n  \u003ccode\u003e\u003ca\u003eirepeat\u003c/a\u003e\u003c/code\u003e $ \u003ccode\u003e\u003ca\u003eliftIO\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003ehGet\u003c/a\u003e\u003c/code\u003e h \u003ccode\u003edefaultChunkSize\u003c/code\u003e) \u003e\u003e= \u003ccode\u003e\u003ca\u003eifeed1\u003c/a\u003e\u003c/code\u003e\n\u003c/pre\u003e",
          "module": "Data.IterIO.Inum",
          "name": "ifeed1",
          "package": "iterIO",
          "signature": "tOut -\u003e InumM tIn tOut m a Bool",
          "source": "src/Data-IterIO-Inum.html#ifeed1",
          "type": "function"
        },
        "index": {
          "description": "variant of ifeed that throws an exception of type IterEOF if the data being fed is null Convenient when reading input with function such as Data.ListLike hget that returns bytes instead of throwing an EOF exception to indicate end of file For instance the main loop of enumFile could be implemented as irepeat liftIO hGet defaultChunkSize ifeed1",
          "hierarchy": "Data IterIO Inum",
          "module": "Data.IterIO.Inum",
          "name": "ifeed1",
          "normalized": "a-\u003eInumM b a c d Bool",
          "package": "iterIO",
          "signature": "tOut-\u003eInumM tIn tOut m a Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Inum.html#v:ifeed1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBracket an \u003ccode\u003e\u003ca\u003eInum\u003c/a\u003e\u003c/code\u003e with a start and end function, which can be\n used to acquire and release a resource, must like the IO monad's\n \u003ccode\u003e\u003ccode\u003ebracket\u003c/code\u003e\u003c/code\u003e function.  For example:\n\u003c/p\u003e\u003cpre\u003e enumFile :: (MonadIO m, ChunkData t, LL.ListLikeIO t e) =\u003e\n             FilePath -\u003e Onum t m a\n enumFile path = inumBracket (liftIO $ openBinaryFile path ReadMode)\n                             (liftIO . hClose)\n                             enumHandle\n\u003c/pre\u003e",
          "module": "Data.IterIO.Inum",
          "name": "inumBracket",
          "package": "iterIO",
          "signature": "Iter tIn m b-\u003e (b -\u003e Iter tIn m c)-\u003e (b -\u003e Inum tIn tOut m a)-\u003e Inum tIn tOut m a",
          "type": "function"
        },
        "index": {
          "description": "Bracket an Inum with start and end function which can be used to acquire and release resource must like the IO monad bracket function For example enumFile MonadIO ChunkData LL.ListLikeIO FilePath Onum enumFile path inumBracket liftIO openBinaryFile path ReadMode liftIO hClose enumHandle",
          "hierarchy": "Data IterIO Inum",
          "module": "Data.IterIO.Inum",
          "name": "inumBracket",
          "normalized": "Iter a b c-\u003e(c-\u003eIter a b d)-\u003e(c-\u003eInum a e b f)-\u003eInum a e b f",
          "package": "iterIO",
          "partial": "Bracket",
          "signature": "Iter tIn m b-\u003e(b-\u003eIter tIn m c)-\u003e(b-\u003eInum tIn tOut m a)-\u003eInum tIn tOut m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Inum.html#v:inumBracket"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCatches errors thrown by an \u003ccode\u003e\u003ca\u003eInum\u003c/a\u003e\u003c/code\u003e, or a set of fused \u003ccode\u003e\u003ca\u003eInum\u003c/a\u003e\u003c/code\u003es.\n Note that only errors in \u003ccode\u003e\u003ca\u003eInum\u003c/a\u003e\u003c/code\u003es that are lexically within the\n scope of the argument to \u003ccode\u003e\u003ca\u003einumCatch\u003c/a\u003e\u003c/code\u003e will be caught.  For example:\n\u003c/p\u003e\u003cpre\u003e inumBad :: (ChunkData t, Monad m) =\u003e Inum t t m a\n inumBad = mkInum $ fail \"inumBad\"\n \n skipError :: (ChunkData tIn, MonadIO m) =\u003e\n              SomeException\n           -\u003e IterR tIn m (IterR tOut m a)\n           -\u003e Iter tIn m (IterR tOut m a)\n skipError e iter = do\n   liftIO $ hPutStrLn stderr $ \"skipping error: \" ++ show e\n   resumeI iter\n\n -- Throws an exception, because inumBad was fused outside the argument\n -- to inumCatch.\n test1 :: IO ()\n test1 = inumCatch (enumPure \"test\") skipError |. inumBad |$ nullI\n \n -- Does not throw an exception, because inumBad fused within the\n -- argument to inumCatch.\n test2 :: IO ()\n test2 = inumCatch (enumPure \"test\" |. inumBad) skipError |$ nullI\n \n -- Again no exception, because inumCatch is wrapped around inumBad.\n test3 :: IO ()\n test3 = enumPure \"test\" |. inumCatch inumBad skipError |$ nullI\n\u003c/pre\u003e\u003cp\u003eNote that \u003ccode\u003e`inumCatch`\u003c/code\u003e has the default infix precedence (\u003ccode\u003einfixl\n 9 `inumcatch`\u003c/code\u003e), which binds more tightly than any concatenation\n or fusing operators.\n\u003c/p\u003e\u003cp\u003eAs noted for \u003ccode\u003e\u003ca\u003ecatchI\u003c/a\u003e\u003c/code\u003e, exception handlers receive both the\n exception thrown and the failed \u003ccode\u003e\u003ca\u003eIterR\u003c/a\u003e\u003c/code\u003e.  Particularly in the case\n of \u003ccode\u003einumCatch\u003c/code\u003e, it is important to re-throw exceptions by\n re-executing the failed \u003ccode\u003e\u003ca\u003eIter\u003c/a\u003e\u003c/code\u003e with \u003ccode\u003e\u003ca\u003ereRunIter\u003c/a\u003e\u003c/code\u003e, not passing the\n exception itself to \u003ccode\u003e\u003ca\u003ethrowI\u003c/a\u003e\u003c/code\u003e.  That way, if the exception is\n re-caught, \u003ccode\u003e\u003ca\u003eresumeI\u003c/a\u003e\u003c/code\u003e will continue to work properly.  For example,\n to copy two files to standard output and ignore file not found\n errors but re-throw any other kind of error, you could use the\n following:\n\u003c/p\u003e\u003cpre\u003e\n  resumeTest :: IO ()\n  resumeTest = doFile \"file1\" `\u003ccode\u003e\u003ca\u003ecat\u003c/a\u003e\u003c/code\u003e` doFile \"file2\" |$ \u003ccode\u003estdoutI\u003c/code\u003e\n      where\n        doFile path = inumCatch (\u003ccode\u003eenumFile'\u003c/code\u003e path) $ \\err r -\u003e\n                        if \u003ccode\u003eisDoesNotExistError\u003c/code\u003e err\n                          then \u003ccode\u003e\u003ca\u003everboseResumeI\u003c/a\u003e\u003c/code\u003e r\n                          else \u003ccode\u003e\u003ca\u003ereRunIter\u003c/a\u003e\u003c/code\u003e r\n\u003c/pre\u003e",
          "module": "Data.IterIO.Inum",
          "name": "inumCatch",
          "package": "iterIO",
          "signature": "Inum tIn tOut m a-\u003e (e -\u003e IterR tIn m (IterR tOut m a) -\u003e Iter tIn m (IterR tOut m a))-\u003e Inum tIn tOut m a",
          "type": "function"
        },
        "index": {
          "description": "Catches errors thrown by an Inum or set of fused Inum Note that only errors in Inum that are lexically within the scope of the argument to inumCatch will be caught For example inumBad ChunkData Monad Inum inumBad mkInum fail inumBad skipError ChunkData tIn MonadIO SomeException IterR tIn IterR tOut Iter tIn IterR tOut skipError iter do liftIO hPutStrLn stderr skipping error show resumeI iter Throws an exception because inumBad was fused outside the argument to inumCatch test1 IO test1 inumCatch enumPure test skipError inumBad nullI Does not throw an exception because inumBad fused within the argument to inumCatch test2 IO test2 inumCatch enumPure test inumBad skipError nullI Again no exception because inumCatch is wrapped around inumBad test3 IO test3 enumPure test inumCatch inumBad skipError nullI Note that inumCatch has the default infix precedence infixl inumcatch which binds more tightly than any concatenation or fusing operators As noted for catchI exception handlers receive both the exception thrown and the failed IterR Particularly in the case of inumCatch it is important to re-throw exceptions by re-executing the failed Iter with reRunIter not passing the exception itself to throwI That way if the exception is re-caught resumeI will continue to work properly For example to copy two files to standard output and ignore file not found errors but re-throw any other kind of error you could use the following resumeTest IO resumeTest doFile file1 cat doFile file2 stdoutI where doFile path inumCatch enumFile path err if isDoesNotExistError err then verboseResumeI else reRunIter",
          "hierarchy": "Data IterIO Inum",
          "module": "Data.IterIO.Inum",
          "name": "inumCatch",
          "normalized": "Inum a b c d-\u003e(e-\u003eIterR a c(IterR b c d)-\u003eIter a c(IterR b c d))-\u003eInum a b c d",
          "package": "iterIO",
          "partial": "Catch",
          "signature": "Inum tIn tOut m a-\u003e(e-\u003eIterR tIn m(IterR tOut m a)-\u003eIter tIn m(IterR tOut m a))-\u003eInum tIn tOut m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Inum.html#v:inumCatch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecute some cleanup action when an \u003ccode\u003e\u003ca\u003eInum\u003c/a\u003e\u003c/code\u003e finishes.\n\u003c/p\u003e",
          "module": "Data.IterIO.Inum",
          "name": "inumFinally",
          "package": "iterIO",
          "signature": "Inum tIn tOut m a -\u003e Iter tIn m b -\u003e Inum tIn tOut m a",
          "source": "src/Data-IterIO-Inum.html#inumFinally",
          "type": "function"
        },
        "index": {
          "description": "Execute some cleanup action when an Inum finishes",
          "hierarchy": "Data IterIO Inum",
          "module": "Data.IterIO.Inum",
          "name": "inumFinally",
          "normalized": "Inum a b c d-\u003eIter a c e-\u003eInum a b c d",
          "package": "iterIO",
          "partial": "Finally",
          "signature": "Inum tIn tOut m a-\u003eIter tIn m b-\u003eInum tIn tOut m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Inum.html#v:inumFinally"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003einumNop\u003c/code\u003e passes all data through to the underlying \u003ccode\u003e\u003ca\u003eIter\u003c/a\u003e\u003c/code\u003e.  It\n acts as a no-op when fused to other \u003ccode\u003e\u003ca\u003eInum\u003c/a\u003e\u003c/code\u003es with \u003ccode\u003e\u003ca\u003e|.\u003c/a\u003e\u003c/code\u003e or when fused\n to \u003ccode\u003e\u003ca\u003eIter\u003c/a\u003e\u003c/code\u003es with \u003ccode\u003e\u003ca\u003e.|\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003einumNop\u003c/code\u003e is particularly useful for conditionally fusing \u003ccode\u003e\u003ca\u003eInum\u003c/a\u003e\u003c/code\u003es\n together.  Even though most \u003ccode\u003e\u003ca\u003eInum\u003c/a\u003e\u003c/code\u003es are polymorphic in the return\n type, this library does not use the Rank2Types extension, which\n means any given \u003ccode\u003e\u003ca\u003eInum\u003c/a\u003e\u003c/code\u003e must have a specific return type.  Here is\n an example of incorrect code:\n\u003c/p\u003e\u003cpre\u003e\n let enum = if debug then base_enum \u003ccode\u003e\u003ca\u003e|.\u003c/a\u003e\u003c/code\u003e \u003ccode\u003einumStderr\u003c/code\u003e else base_enum -- Error\n\u003c/pre\u003e\u003cp\u003eThis doesn't work because \u003ccode\u003ebase_enum\u003c/code\u003e cannot have the same type as\n \u003ccode\u003e(base_enum |. inumStderr)\u003c/code\u003e.  Instead, you can use the following:\n\u003c/p\u003e\u003cpre\u003e\n let enum = base_enum \u003ccode\u003e\u003ca\u003e|.\u003c/a\u003e\u003c/code\u003e if debug then \u003ccode\u003einumStderr\u003c/code\u003e else inumNop\n\u003c/pre\u003e",
          "module": "Data.IterIO.Inum",
          "name": "inumNop",
          "package": "iterIO",
          "signature": "Inum t t m a",
          "source": "src/Data-IterIO-Inum.html#inumNop",
          "type": "function"
        },
        "index": {
          "description": "inumNop passes all data through to the underlying Iter It acts as no-op when fused to other Inum with or when fused to Iter with inumNop is particularly useful for conditionally fusing Inum together Even though most Inum are polymorphic in the return type this library does not use the Rank2Types extension which means any given Inum must have specific return type Here is an example of incorrect code let enum if debug then base enum inumStderr else base enum Error This doesn work because base enum cannot have the same type as base enum inumStderr Instead you can use the following let enum base enum if debug then inumStderr else inumNop",
          "hierarchy": "Data IterIO Inum",
          "module": "Data.IterIO.Inum",
          "name": "inumNop",
          "package": "iterIO",
          "partial": "Nop",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Inum.html#v:inumNop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003einumNull\u003c/code\u003e feeds empty data to the underlying \u003ccode\u003e\u003ca\u003eIter\u003c/a\u003e\u003c/code\u003e.  It pretty\n much acts as a no-op when concatenated to other \u003ccode\u003e\u003ca\u003eInum\u003c/a\u003e\u003c/code\u003es with \u003ccode\u003e\u003ca\u003ecat\u003c/a\u003e\u003c/code\u003e\n or \u003ccode\u003e\u003ca\u003elcat\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThere may be cases where \u003ccode\u003einumNull\u003c/code\u003e is required to avoid deadlock.\n In an expression such as \u003ccode\u003eenum \u003ccode\u003e\u003ca\u003e|$\u003c/a\u003e\u003c/code\u003e iter\u003c/code\u003e, if \u003ccode\u003eenum\u003c/code\u003e immediately\n blocks waiting for some event, and \u003ccode\u003eiter\u003c/code\u003e immediately starts out\n triggering that event before reading any input, then to break the\n deadlock you can re-write the code as \u003ccode\u003ecat inumNull enum \u003ccode\u003e\u003ca\u003e|$\u003c/a\u003e\u003c/code\u003e\n iter\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.IterIO.Inum",
          "name": "inumNull",
          "package": "iterIO",
          "signature": "Inum tIn tOut m a",
          "source": "src/Data-IterIO-Inum.html#inumNull",
          "type": "function"
        },
        "index": {
          "description": "inumNull feeds empty data to the underlying Iter It pretty much acts as no-op when concatenated to other Inum with cat or lcat There may be cases where inumNull is required to avoid deadlock In an expression such as enum iter if enum immediately blocks waiting for some event and iter immediately starts out triggering that event before reading any input then to break the deadlock you can re-write the code as cat inumNull enum iter",
          "hierarchy": "Data IterIO Inum",
          "module": "Data.IterIO.Inum",
          "name": "inumNull",
          "package": "iterIO",
          "partial": "Null",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Inum.html#v:inumNull"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecute some cleanup action if an \u003ccode\u003e\u003ca\u003eInum\u003c/a\u003e\u003c/code\u003e fails.  Does not execute\n the action if the \u003ccode\u003e\u003ca\u003eIter\u003c/a\u003e\u003c/code\u003e (or some inner \u003ccode\u003e\u003ca\u003eInum\u003c/a\u003e\u003c/code\u003e) fails.  Has the\n same scoping rules as \u003ccode\u003e\u003ca\u003einumCatch\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.IterIO.Inum",
          "name": "inumOnException",
          "package": "iterIO",
          "signature": "Inum tIn tOut m a -\u003e Iter tIn m b -\u003e Inum tIn tOut m a",
          "source": "src/Data-IterIO-Inum.html#inumOnException",
          "type": "function"
        },
        "index": {
          "description": "Execute some cleanup action if an Inum fails Does not execute the action if the Iter or some inner Inum fails Has the same scoping rules as inumCatch",
          "hierarchy": "Data IterIO Inum",
          "module": "Data.IterIO.Inum",
          "name": "inumOnException",
          "normalized": "Inum a b c d-\u003eIter a c e-\u003eInum a b c d",
          "package": "iterIO",
          "partial": "On Exception",
          "signature": "Inum tIn tOut m a-\u003eIter tIn m b-\u003eInum tIn tOut m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Inum.html#v:inumOnException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFeed pure data to an \u003ccode\u003e\u003ca\u003eIter\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.IterIO.Inum",
          "name": "inumPure",
          "package": "iterIO",
          "signature": "tOut -\u003e Inum tIn tOut m a",
          "source": "src/Data-IterIO-Inum.html#inumPure",
          "type": "function"
        },
        "index": {
          "description": "Feed pure data to an Iter",
          "hierarchy": "Data IterIO Inum",
          "module": "Data.IterIO.Inum",
          "name": "inumPure",
          "normalized": "a-\u003eInum b a c d",
          "package": "iterIO",
          "partial": "Pure",
          "signature": "tOut-\u003eInum tIn tOut m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Inum.html#v:inumPure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepeat an \u003ccode\u003e\u003ca\u003eInum\u003c/a\u003e\u003c/code\u003e until the input receives an EOF condition, the\n \u003ccode\u003e\u003ca\u003eIter\u003c/a\u003e\u003c/code\u003e no longer requires input, or the \u003ccode\u003e\u003ca\u003eIter\u003c/a\u003e\u003c/code\u003e is in an unhandled\n \u003ccode\u003e\u003ca\u003eIterC\u003c/a\u003e\u003c/code\u003e state (which presumably will continue to be unhandled by\n the same \u003ccode\u003e\u003ca\u003eInum\u003c/a\u003e\u003c/code\u003e, so no point in executing it again).\n\u003c/p\u003e",
          "module": "Data.IterIO.Inum",
          "name": "inumRepeat",
          "package": "iterIO",
          "signature": "Inum tIn tOut m a -\u003e Inum tIn tOut m a",
          "source": "src/Data-IterIO-Inum.html#inumRepeat",
          "type": "function"
        },
        "index": {
          "description": "Repeat an Inum until the input receives an EOF condition the Iter no longer requires input or the Iter is in an unhandled IterC state which presumably will continue to be unhandled by the same Inum so no point in executing it again",
          "hierarchy": "Data IterIO Inum",
          "module": "Data.IterIO.Inum",
          "name": "inumRepeat",
          "normalized": "Inum a b c d-\u003eInum a b c d",
          "package": "iterIO",
          "partial": "Repeat",
          "signature": "Inum tIn tOut m a-\u003eInum tIn tOut m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Inum.html#v:inumRepeat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn \u003ccode\u003e\u003ca\u003eInum\u003c/a\u003e\u003c/code\u003e that acts like \u003ccode\u003e\u003ca\u003einumNop\u003c/a\u003e\u003c/code\u003e, except that before passing\n data on, it feeds a copy to a \"tee\" \u003ccode\u003e\u003ca\u003eIter\u003c/a\u003e\u003c/code\u003e (by analogy with the\n Unix \u003ccode\u003etee\u003c/code\u003e utility), which may, for instance, transform and log the\n data.\n\u003c/p\u003e\u003cp\u003eThe tee \u003ccode\u003e\u003ca\u003eIter\u003c/a\u003e\u003c/code\u003e's return value is ignored.  If the tee \u003ccode\u003e\u003ca\u003eIter\u003c/a\u003e\u003c/code\u003e\n returns before an EOF is received and before the target \u003ccode\u003e\u003ca\u003eIter\u003c/a\u003e\u003c/code\u003e has\n finished processing input, then \u003ccode\u003einumTee\u003c/code\u003e will continue to pass\n data to the target \u003ccode\u003e\u003ca\u003eIter\u003c/a\u003e\u003c/code\u003e.  However, if the tee \u003ccode\u003e\u003ca\u003eIter\u003c/a\u003e\u003c/code\u003e fails, then\n this will cause \u003ccode\u003einumTee\u003c/code\u003e to fail immediately.\n\u003c/p\u003e\u003cp\u003eAs an example, one could implement something close to\n \u003ccode\u003e\u003ccode\u003einumStderr\u003c/code\u003e\u003c/code\u003e (from \u003ca\u003eData.IterIO.ListLike\u003c/a\u003e) as follows:\n\u003c/p\u003e\u003cpre\u003e inumStderr = inumTee $ handleI stderr\n\u003c/pre\u003e\u003cp\u003e(Except note that the real \u003ccode\u003e\u003ccode\u003einumStderr\u003c/code\u003e\u003c/code\u003e does not close its file\n descriptor, while the above implementation will send an EOF to\n \u003ccode\u003e\u003ccode\u003ehandleI\u003c/code\u003e\u003c/code\u003e, causing \u003ccode\u003estderr\u003c/code\u003e to be closed.)\n\u003c/p\u003e",
          "module": "Data.IterIO.Inum",
          "name": "inumTee",
          "package": "iterIO",
          "signature": "Iter t m b -\u003e Inum t t m a",
          "source": "src/Data-IterIO-Inum.html#inumTee",
          "type": "function"
        },
        "index": {
          "description": "An Inum that acts like inumNop except that before passing data on it feeds copy to tee Iter by analogy with the Unix tee utility which may for instance transform and log the data The tee Iter return value is ignored If the tee Iter returns before an EOF is received and before the target Iter has finished processing input then inumTee will continue to pass data to the target Iter However if the tee Iter fails then this will cause inumTee to fail immediately As an example one could implement something close to inumStderr from Data.IterIO.ListLike as follows inumStderr inumTee handleI stderr Except note that the real inumStderr does not close its file descriptor while the above implementation will send an EOF to handleI causing stderr to be closed",
          "hierarchy": "Data IterIO Inum",
          "module": "Data.IterIO.Inum",
          "name": "inumTee",
          "normalized": "Iter a b c-\u003eInum a a b d",
          "package": "iterIO",
          "partial": "Tee",
          "signature": "Iter t m b-\u003eInum t t m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Inum.html#v:inumTee"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply another \u003ccode\u003e\u003ca\u003eInum\u003c/a\u003e\u003c/code\u003e to the target \u003ccode\u003e\u003ca\u003eIter\u003c/a\u003e\u003c/code\u003e from within the \u003ccode\u003e\u003ca\u003eInumM\u003c/a\u003e\u003c/code\u003e\n monad.  As with \u003ccode\u003e\u003ca\u003eifeed\u003c/a\u003e\u003c/code\u003e, returns \u003ccode\u003e\u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e when the \u003ccode\u003e\u003ca\u003eIter\u003c/a\u003e\u003c/code\u003e is\n finished.\n\u003c/p\u003e\u003cp\u003eNote that the applied \u003ccode\u003e\u003ca\u003eInum\u003c/a\u003e\u003c/code\u003e must handle all control requests.  (In\n other words, ones it passes on are not caught by whatever handler\n is installed by \u003ccode\u003e\u003ca\u003esetCtlHandler\u003c/a\u003e\u003c/code\u003e, but if the \u003ccode\u003e\u003ca\u003eInum\u003c/a\u003e\u003c/code\u003e returns the\n \u003ccode\u003e\u003ca\u003eIterR\u003c/a\u003e\u003c/code\u003e in the \u003ccode\u003e\u003ca\u003eIterC\u003c/a\u003e\u003c/code\u003e state, as \u003ccode\u003e\u003ca\u003einumPure\u003c/a\u003e\u003c/code\u003e does, then requests\n will be handled.)\n\u003c/p\u003e",
          "module": "Data.IterIO.Inum",
          "name": "ipipe",
          "package": "iterIO",
          "signature": "Inum tIn tOut m a -\u003e InumM tIn tOut m a Bool",
          "source": "src/Data-IterIO-Inum.html#ipipe",
          "type": "function"
        },
        "index": {
          "description": "Apply another Inum to the target Iter from within the InumM monad As with ifeed returns True when the Iter is finished Note that the applied Inum must handle all control requests In other words ones it passes on are not caught by whatever handler is installed by setCtlHandler but if the Inum returns the IterR in the IterC state as inumPure does then requests will be handled",
          "hierarchy": "Data IterIO Inum",
          "module": "Data.IterIO.Inum",
          "name": "ipipe",
          "normalized": "Inum a b c d-\u003eInumM a b c d Bool",
          "package": "iterIO",
          "signature": "Inum tIn tOut m a-\u003eInumM tIn tOut m a Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Inum.html#v:ipipe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf the target \u003ccode\u003e\u003ca\u003eIter\u003c/a\u003e\u003c/code\u003e being fed by the \u003ccode\u003e\u003ca\u003eInum\u003c/a\u003e\u003c/code\u003e is no longer active\n (i.e., if it is in the \u003ccode\u003e\u003ca\u003eDone\u003c/a\u003e\u003c/code\u003e state or in an error state), this\n funciton pops the residual data out of the \u003ccode\u003e\u003ca\u003eIter\u003c/a\u003e\u003c/code\u003e and returns it.\n If the target is in any other state, returns \u003ccode\u003e\u003ca\u003emempty\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.IterIO.Inum",
          "name": "ipopresid",
          "package": "iterIO",
          "signature": "InumM tIn tOut m a tOut",
          "source": "src/Data-IterIO-Inum.html#ipopresid",
          "type": "function"
        },
        "index": {
          "description": "If the target Iter being fed by the Inum is no longer active i.e if it is in the Done state or in an error state this funciton pops the residual data out of the Iter and returns it If the target is in any other state returns mempty",
          "hierarchy": "Data IterIO Inum",
          "module": "Data.IterIO.Inum",
          "name": "ipopresid",
          "package": "iterIO",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Inum.html#v:ipopresid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepeats an action until the \u003ccode\u003e\u003ca\u003eIter\u003c/a\u003e\u003c/code\u003e is done or an EOF error is\n thrown.  (Also stops if a different kind of exception is thrown, in\n which case the exception propagates further and may cause the\n \u003ccode\u003e\u003ca\u003eInum\u003c/a\u003e\u003c/code\u003e to fail.)  \u003ccode\u003eirepeat\u003c/code\u003e sets both the \u003cem\u003eAutoEOF\u003c/em\u003e and\n \u003cem\u003eAutoDone\u003c/em\u003e flags to \u003ccode\u003e\u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.IterIO.Inum",
          "name": "irepeat",
          "package": "iterIO",
          "signature": "InumM tIn tOut m a b -\u003e InumM tIn tOut m a ()",
          "source": "src/Data-IterIO-Inum.html#irepeat",
          "type": "function"
        },
        "index": {
          "description": "Repeats an action until the Iter is done or an EOF error is thrown Also stops if different kind of exception is thrown in which case the exception propagates further and may cause the Inum to fail irepeat sets both the AutoEOF and AutoDone flags to True",
          "hierarchy": "Data IterIO Inum",
          "module": "Data.IterIO.Inum",
          "name": "irepeat",
          "normalized": "InumM a b c d e-\u003eInumM a b c d()",
          "package": "iterIO",
          "signature": "InumM tIn tOut m a b-\u003eInumM tIn tOut m a()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Inum.html#v:irepeat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply an \u003ccode\u003e\u003ca\u003eOnum\u003c/a\u003e\u003c/code\u003e (or \u003ccode\u003e\u003ca\u003eInum\u003c/a\u003e\u003c/code\u003e of an arbitrary, unused input type) to\n the \u003ccode\u003e\u003ca\u003eIter\u003c/a\u003e\u003c/code\u003e from within the \u003ccode\u003e\u003ca\u003eInumM\u003c/a\u003e\u003c/code\u003e monad.  As with \u003ccode\u003e\u003ca\u003eifeed\u003c/a\u003e\u003c/code\u003e, returns\n \u003ccode\u003e\u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e when the \u003ccode\u003e\u003ca\u003eIter\u003c/a\u003e\u003c/code\u003e is finished.\n\u003c/p\u003e",
          "module": "Data.IterIO.Inum",
          "name": "irun",
          "package": "iterIO",
          "signature": "Inum tAny tOut m a -\u003e InumM tIn tOut m a Bool",
          "source": "src/Data-IterIO-Inum.html#irun",
          "type": "function"
        },
        "index": {
          "description": "Apply an Onum or Inum of an arbitrary unused input type to the Iter from within the InumM monad As with ifeed returns True when the Iter is finished",
          "hierarchy": "Data IterIO Inum",
          "module": "Data.IterIO.Inum",
          "name": "irun",
          "normalized": "Inum a b c d-\u003eInumM e b c d Bool",
          "package": "iterIO",
          "signature": "Inum tAny tOut m a-\u003eInumM tIn tOut m a Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Inum.html#v:irun"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLazy cat.  Like \u003ccode\u003e\u003ca\u003ecat\u003c/a\u003e\u003c/code\u003e, except that it does not run the second\n \u003ccode\u003e\u003ca\u003eInum\u003c/a\u003e\u003c/code\u003e if the \u003ccode\u003e\u003ca\u003eIter\u003c/a\u003e\u003c/code\u003e is no longer active after completion of the\n first \u003ccode\u003e\u003ca\u003eInum\u003c/a\u003e\u003c/code\u003e.  Also has fixity \u003ccode\u003einfixr 3 `lcat`\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.IterIO.Inum",
          "name": "lcat",
          "package": "iterIO",
          "signature": "Inum tIn tOut m a-\u003e Inum tIn tOut m a-\u003e Inum tIn tOut m a",
          "type": "function"
        },
        "index": {
          "description": "Lazy cat Like cat except that it does not run the second Inum if the Iter is no longer active after completion of the first Inum Also has fixity infixr lcat",
          "hierarchy": "Data IterIO Inum",
          "module": "Data.IterIO.Inum",
          "name": "lcat",
          "normalized": "Inum a b c d-\u003eInum a b c d-\u003eInum a b c d",
          "package": "iterIO",
          "signature": "Inum tIn tOut m a-\u003eInum tIn tOut m a-\u003eInum tIn tOut m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Inum.html#v:lcat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake a control function suitable for use as the first argument to\n \u003ccode\u003e\u003ca\u003econsCtl\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.IterIO.Inum",
          "name": "mkCtl",
          "package": "iterIO",
          "signature": "(carg -\u003e Iter t1 m1 cres) -\u003e carg -\u003e (cres -\u003e Iter t m a) -\u003e Chunk t -\u003e Iter t1 m1 (IterR t m a)",
          "source": "src/Data-IterIO-Inum.html#mkCtl",
          "type": "function"
        },
        "index": {
          "description": "Make control function suitable for use as the first argument to consCtl",
          "hierarchy": "Data IterIO Inum",
          "module": "Data.IterIO.Inum",
          "name": "mkCtl",
          "normalized": "(a-\u003eIter b c d)-\u003ea-\u003e(d-\u003eIter b c e)-\u003eChunk b-\u003eIter b c(IterR b c e)",
          "package": "iterIO",
          "partial": "Ctl",
          "signature": "(carg-\u003eIter t m cres)-\u003ecarg-\u003e(cres-\u003eIter t m a)-\u003eChunk t-\u003eIter t m(IterR t m a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Inum.html#v:mkCtl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003emkCtl\u003c/a\u003e\u003c/code\u003e, except that it flushes all input and clears the EOF\n flag in both \u003ccode\u003e\u003ca\u003eIter\u003c/a\u003e\u003c/code\u003e monads after executing the control function.\n\u003c/p\u003e",
          "module": "Data.IterIO.Inum",
          "name": "mkFlushCtl",
          "package": "iterIO",
          "signature": "(carg -\u003e Iter tIn mIn cres) -\u003e carg -\u003e (cres -\u003e Iter t m a) -\u003e Chunk t -\u003e Iter tIn mIn (IterR t m a)",
          "source": "src/Data-IterIO-Inum.html#mkFlushCtl",
          "type": "function"
        },
        "index": {
          "description": "Like mkCtl except that it flushes all input and clears the EOF flag in both Iter monads after executing the control function",
          "hierarchy": "Data IterIO Inum",
          "module": "Data.IterIO.Inum",
          "name": "mkFlushCtl",
          "normalized": "(a-\u003eIter b c d)-\u003ea-\u003e(d-\u003eIter e f g)-\u003eChunk e-\u003eIter b c(IterR e f g)",
          "package": "iterIO",
          "partial": "Flush Ctl",
          "signature": "(carg-\u003eIter tIn mIn cres)-\u003ecarg-\u003e(cres-\u003eIter t m a)-\u003eChunk t-\u003eIter tIn mIn(IterR t m a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Inum.html#v:mkFlushCtl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate an \u003ccode\u003e\u003ca\u003eInum\u003c/a\u003e\u003c/code\u003e based on an \u003ccode\u003e\u003ca\u003eIter\u003c/a\u003e\u003c/code\u003e that transcodes the input to\n the output type.  This is a simplified version of \u003ccode\u003e\u003ca\u003emkInumC\u003c/a\u003e\u003c/code\u003e that\n rejects all control requests and does not adjust residual data.\n\u003c/p\u003e\u003cpre\u003e mkInum = mkInumC id noCtl\n\u003c/pre\u003e",
          "module": "Data.IterIO.Inum",
          "name": "mkInum",
          "package": "iterIO",
          "signature": "Iter tIn m tOut -\u003e Inum tIn tOut m a",
          "source": "src/Data-IterIO-Inum.html#mkInum",
          "type": "function"
        },
        "index": {
          "description": "Create an Inum based on an Iter that transcodes the input to the output type This is simplified version of mkInumC that rejects all control requests and does not adjust residual data mkInum mkInumC id noCtl",
          "hierarchy": "Data IterIO Inum",
          "module": "Data.IterIO.Inum",
          "name": "mkInum",
          "normalized": "Iter a b c-\u003eInum a c b d",
          "package": "iterIO",
          "partial": "Inum",
          "signature": "Iter tIn m tOut-\u003eInum tIn tOut m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Inum.html#v:mkInum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA variant of \u003ccode\u003e\u003ca\u003emkInumM\u003c/a\u003e\u003c/code\u003e that sets \u003cem\u003eAutoEOF\u003c/em\u003e and \u003cem\u003eAutoDone\u003c/em\u003e to\n \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e by default.  (Equivalent to calling \u003ccode\u003e\u003ccode\u003e\u003ca\u003esetAutoEOF\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e \u003e\u003e\n \u003ccode\u003e\u003ca\u003esetAutoDone\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e as the first thing inside \u003ccode\u003e\u003ca\u003emkInumM\u003c/a\u003e\u003c/code\u003e.)\n\u003c/p\u003e",
          "module": "Data.IterIO.Inum",
          "name": "mkInumAutoM",
          "package": "iterIO",
          "signature": "InumM tIn tOut m a b -\u003e Inum tIn tOut m a",
          "source": "src/Data-IterIO-Inum.html#mkInumAutoM",
          "type": "function"
        },
        "index": {
          "description": "variant of mkInumM that sets AutoEOF and AutoDone to True by default Equivalent to calling setAutoEOF True setAutoDone True as the first thing inside mkInumM",
          "hierarchy": "Data IterIO Inum",
          "module": "Data.IterIO.Inum",
          "name": "mkInumAutoM",
          "normalized": "InumM a b c d e-\u003eInum a b c d",
          "package": "iterIO",
          "partial": "Inum Auto",
          "signature": "InumM tIn tOut m a b-\u003eInum tIn tOut m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Inum.html#v:mkInumAutoM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a stateless \u003ccode\u003e\u003ca\u003eInum\u003c/a\u003e\u003c/code\u003e from a \"codec\" \u003ccode\u003e\u003ca\u003eIter\u003c/a\u003e\u003c/code\u003e that transcodes\n the input type to the output type.  The codec is invoked repeately\n until one of the following occurs:\n\u003c/p\u003e\u003col\u003e\u003cli\u003e The input is at an EOF marker AND the codec returns \u003ccode\u003e\u003ca\u003enull\u003c/a\u003e\u003c/code\u003e\n      data.  (\u003ccode\u003e\u003ca\u003eOnum\u003c/a\u003e\u003c/code\u003es are always fed EOF, but other \u003ccode\u003e\u003ca\u003eInum\u003c/a\u003e\u003c/code\u003es might\n      have reason to return \u003ccode\u003e\u003ca\u003emempty\u003c/a\u003e\u003c/code\u003e data.)\n\u003c/li\u003e\u003cli\u003e The codec throws an exception.  If the exception is an EOF\n      exception--thrown either by \u003ccode\u003e\u003ca\u003ethrowEOFI\u003c/a\u003e\u003c/code\u003e, or by some IO action\n      inside \u003ccode\u003e\u003ca\u003eliftIO\u003c/a\u003e\u003c/code\u003e--this is considered normal termination, and is\n      the normal way for a codec to cause the \u003ccode\u003e\u003ca\u003eInum\u003c/a\u003e\u003c/code\u003e to return.  If\n      the exception is of any other type, then the \u003ccode\u003e\u003ca\u003eInum\u003c/a\u003e\u003c/code\u003e will\n      further propagate the exception as an \u003ccode\u003e\u003ca\u003eInum\u003c/a\u003e\u003c/code\u003e failure.\n\u003c/li\u003e\u003cli\u003e The underlying target \u003ccode\u003e\u003ca\u003eIter\u003c/a\u003e\u003c/code\u003e either returns a result or throws\n      an exception.\n\u003c/li\u003e\u003c/ol\u003e\u003cp\u003e\u003ccode\u003emkInumC\u003c/code\u003e requires two other arguments before the codec.  First, a\n \u003ccode\u003e\u003ca\u003eResidHandler\u003c/a\u003e\u003c/code\u003e allows residual data to be adjusted between the\n input and output \u003ccode\u003e\u003ca\u003eIter\u003c/a\u003e\u003c/code\u003e monads.  Second, a \u003ccode\u003e\u003ca\u003eCtlHandler\u003c/a\u003e\u003c/code\u003e specifies a\n handler for control requests.  For example, to pass up control\n requests and ensure no residual data is lost when the \u003ccode\u003e\u003ca\u003eInum\u003c/a\u003e\u003c/code\u003e is\n fused to an \u003ccode\u003e\u003ca\u003eIter\u003c/a\u003e\u003c/code\u003e, the \u003ccode\u003einumConcat\u003c/code\u003e function given previously for\n \u003ccode\u003e\u003ca\u003emkInum\u003c/a\u003e\u003c/code\u003e at \u003ca\u003e#mkInumExample\u003c/a\u003e could be re-written:\n\u003c/p\u003e\u003cpre\u003e inumConcat :: (Monad m) =\u003e Inum [L.ByteString] L.ByteString m a\n inumConcat = mkInumC reList (passCtl reList) iterConcat\n     where reList (a, b) = (b:a, mempty)\n\u003c/pre\u003e",
          "module": "Data.IterIO.Inum",
          "name": "mkInumC",
          "package": "iterIO",
          "signature": "ResidHandler tIn tOut-\u003e CtlHandler (Iter tIn m) tOut m a-\u003e Iter tIn m tOut-\u003e Inum tIn tOut m a",
          "type": "function"
        },
        "index": {
          "description": "Create stateless Inum from codec Iter that transcodes the input type to the output type The codec is invoked repeately until one of the following occurs The input is at an EOF marker AND the codec returns null data Onum are always fed EOF but other Inum might have reason to return mempty data The codec throws an exception If the exception is an EOF exception--thrown either by throwEOFI or by some IO action inside liftIO this is considered normal termination and is the normal way for codec to cause the Inum to return If the exception is of any other type then the Inum will further propagate the exception as an Inum failure The underlying target Iter either returns result or throws an exception mkInumC requires two other arguments before the codec First ResidHandler allows residual data to be adjusted between the input and output Iter monads Second CtlHandler specifies handler for control requests For example to pass up control requests and ensure no residual data is lost when the Inum is fused to an Iter the inumConcat function given previously for mkInum at mkInumExample could be re-written inumConcat Monad Inum L.ByteString L.ByteString inumConcat mkInumC reList passCtl reList iterConcat where reList mempty",
          "hierarchy": "Data IterIO Inum",
          "module": "Data.IterIO.Inum",
          "name": "mkInumC",
          "normalized": "ResidHandler a b-\u003eCtlHandler(Iter a c)b c d-\u003eIter a c b-\u003eInum a b c d",
          "package": "iterIO",
          "partial": "Inum",
          "signature": "ResidHandler tIn tOut-\u003eCtlHandler(Iter tIn m)tOut m a-\u003eIter tIn m tOut-\u003eInum tIn tOut m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Inum.html#v:mkInumC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBuild an \u003ccode\u003e\u003ca\u003eInum\u003c/a\u003e\u003c/code\u003e out of an \u003ccode\u003e\u003ca\u003eInumM\u003c/a\u003e\u003c/code\u003e computation.  If you run\n \u003ccode\u003e\u003ca\u003emkInumM\u003c/a\u003e\u003c/code\u003e inside the \u003ccode\u003e\u003ccode\u003e\u003ca\u003eIter\u003c/a\u003e\u003c/code\u003e tIn m\u003c/code\u003e monad (i.e., to create an\n enumerator of type \u003ccode\u003e\u003ccode\u003e\u003ca\u003eInum\u003c/a\u003e\u003c/code\u003e tIn tOut m a\u003c/code\u003e), then the \u003ccode\u003e\u003ca\u003eInumM\u003c/a\u003e\u003c/code\u003e\n computation will be in a Monad of type \u003ccode\u003e\u003ccode\u003e\u003ca\u003eIter\u003c/a\u003e\u003c/code\u003e t tm\u003c/code\u003e where \u003ccode\u003etm\u003c/code\u003e is\n a transformed version of \u003ccode\u003em\u003c/code\u003e.  This has the following two\n consequences:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e If you wish to execute actions in monad \u003ccode\u003em\u003c/code\u003e from within your\n    \u003ccode\u003e\u003ca\u003eInumM\u003c/a\u003e\u003c/code\u003e computation, you will have to apply \u003ccode\u003e\u003ccode\u003e\u003ca\u003elift\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e twice (as\n    in \u003ccode\u003e\u003ccode\u003e\u003ca\u003elift\u003c/a\u003e\u003c/code\u003e $ \u003ccode\u003e\u003ca\u003elift\u003c/a\u003e\u003c/code\u003e action_in_m\u003c/code\u003e) rather than just once.\n\u003c/li\u003e\u003cli\u003e If you need to execute actions in the \u003ccode\u003e\u003ccode\u003e\u003ca\u003eIter\u003c/a\u003e\u003c/code\u003e t m\u003c/code\u003e monad, you\n    will have to lift them with the \u003ccode\u003e\u003ca\u003eliftI\u003c/a\u003e\u003c/code\u003e function.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eInumM\u003c/a\u003e\u003c/code\u003e computation you construct can feed output of type\n \u003ccode\u003etOut\u003c/code\u003e to the target \u003ccode\u003e\u003ca\u003eIter\u003c/a\u003e\u003c/code\u003e (which is implicitly contained in the\n monad state), using the \u003ccode\u003e\u003ca\u003eifeed\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eipipe\u003c/a\u003e\u003c/code\u003e, and \u003ccode\u003e\u003ca\u003eirun\u003c/a\u003e\u003c/code\u003e functions.\n\u003c/p\u003e",
          "module": "Data.IterIO.Inum",
          "name": "mkInumM",
          "package": "iterIO",
          "signature": "InumM tIn tOut m a b -\u003e Inum tIn tOut m a",
          "source": "src/Data-IterIO-Inum.html#mkInumM",
          "type": "function"
        },
        "index": {
          "description": "Build an Inum out of an InumM computation If you run mkInumM inside the Iter tIn monad i.e to create an enumerator of type Inum tIn tOut then the InumM computation will be in Monad of type Iter tm where tm is transformed version of This has the following two consequences If you wish to execute actions in monad from within your InumM computation you will have to apply lift twice as in lift lift action in rather than just once If you need to execute actions in the Iter monad you will have to lift them with the liftI function The InumM computation you construct can feed output of type tOut to the target Iter which is implicitly contained in the monad state using the ifeed ipipe and irun functions",
          "hierarchy": "Data IterIO Inum",
          "module": "Data.IterIO.Inum",
          "name": "mkInumM",
          "normalized": "InumM a b c d e-\u003eInum a b c d",
          "package": "iterIO",
          "partial": "Inum",
          "signature": "InumM tIn tOut m a b-\u003eInum tIn tOut m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Inum.html#v:mkInumM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA simplified version of \u003ccode\u003e\u003ca\u003emkInum\u003c/a\u003e\u003c/code\u003e that passes all control requests\n to enclosing enumerators.  It requires a \u003ccode\u003e\u003ca\u003eResidHandler\u003c/a\u003e\u003c/code\u003e to describe\n how to adjust residual data.  (E.g., use \u003ccode\u003e\u003ca\u003epullupResid\u003c/a\u003e\u003c/code\u003e when \u003ccode\u003etIn\u003c/code\u003e\n and \u003ccode\u003etOut\u003c/code\u003e are the same type.)\n\u003c/p\u003e\u003cpre\u003e mkInumP adj = mkInumC adj (passCtl adj)\n\u003c/pre\u003e",
          "module": "Data.IterIO.Inum",
          "name": "mkInumP",
          "package": "iterIO",
          "signature": "ResidHandler tIn tOut -\u003e Iter tIn m tOut -\u003e Inum tIn tOut m a",
          "source": "src/Data-IterIO-Inum.html#mkInumP",
          "type": "function"
        },
        "index": {
          "description": "simplified version of mkInum that passes all control requests to enclosing enumerators It requires ResidHandler to describe how to adjust residual data E.g use pullupResid when tIn and tOut are the same type mkInumP adj mkInumC adj passCtl adj",
          "hierarchy": "Data IterIO Inum",
          "module": "Data.IterIO.Inum",
          "name": "mkInumP",
          "normalized": "ResidHandler a b-\u003eIter a c b-\u003eInum a b c d",
          "package": "iterIO",
          "partial": "Inum",
          "signature": "ResidHandler tIn tOut-\u003eIter tIn m tOut-\u003eInum tIn tOut m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Inum.html#v:mkInumP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReject all control requests.\n\u003c/p\u003e",
          "module": "Data.IterIO.Inum",
          "name": "noCtl",
          "package": "iterIO",
          "signature": "CtlHandler m1 t m a",
          "source": "src/Data-IterIO-Inum.html#noCtl",
          "type": "function"
        },
        "index": {
          "description": "Reject all control requests",
          "hierarchy": "Data IterIO Inum",
          "module": "Data.IterIO.Inum",
          "name": "noCtl",
          "package": "iterIO",
          "partial": "Ctl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Inum.html#v:noCtl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePass all control requests through to the enclosing \u003ccode\u003e\u003ca\u003eIter\u003c/a\u003e\u003c/code\u003e monad.\n The \u003ccode\u003e\u003ca\u003eResidHandler\u003c/a\u003e\u003c/code\u003e argument says how to adjust residual data, in\n case some enclosing \u003ccode\u003e\u003ca\u003eCtlHandler\u003c/a\u003e\u003c/code\u003e decides to flush pending input\n data, it is advisable to un-translate any data in the output type\n \u003ccode\u003etOut\u003c/code\u003e back to the input type \u003ccode\u003etIn\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.IterIO.Inum",
          "name": "passCtl",
          "package": "iterIO",
          "signature": "ResidHandler tIn tOut -\u003e CtlHandler (Iter tIn mIn) tOut m a",
          "source": "src/Data-IterIO-Inum.html#passCtl",
          "type": "function"
        },
        "index": {
          "description": "Pass all control requests through to the enclosing Iter monad The ResidHandler argument says how to adjust residual data in case some enclosing CtlHandler decides to flush pending input data it is advisable to un-translate any data in the output type tOut back to the input type tIn",
          "hierarchy": "Data IterIO Inum",
          "module": "Data.IterIO.Inum",
          "name": "passCtl",
          "normalized": "ResidHandler a b-\u003eCtlHandler(Iter a c)b d e",
          "package": "iterIO",
          "partial": "Ctl",
          "signature": "ResidHandler tIn tOut-\u003eCtlHandler(Iter tIn mIn)tOut m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Inum.html#v:passCtl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003epullupResid (a, b) = (mappend a b, mempty)\u003c/code\u003e.  See \u003ccode\u003e\u003ca\u003eResidHandler\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.IterIO.Inum",
          "name": "pullupResid",
          "package": "iterIO",
          "signature": "(t, t) -\u003e (t, t)",
          "source": "src/Data-IterIO-Inum.html#pullupResid",
          "type": "function"
        },
        "index": {
          "description": "pullupResid mappend mempty See ResidHandler",
          "hierarchy": "Data IterIO Inum",
          "module": "Data.IterIO.Inum",
          "name": "pullupResid",
          "normalized": "(a,a)-\u003e(a,a)",
          "package": "iterIO",
          "partial": "Resid",
          "signature": "(t,t)-\u003e(t,t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Inum.html#v:pullupResid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUsed in an exception handler, after an \u003ccode\u003e\u003ca\u003eInum\u003c/a\u003e\u003c/code\u003e failure, to resume\n processing of the \u003ccode\u003e\u003ca\u003eIter\u003c/a\u003e\u003c/code\u003e by the next enumerator in a \u003ccode\u003e\u003ca\u003ecat\u003c/a\u003e\u003c/code\u003eed\n series.  See \u003ccode\u003e\u003ca\u003einumCatch\u003c/a\u003e\u003c/code\u003e for an example.\n\u003c/p\u003e",
          "module": "Data.IterIO.Inum",
          "name": "resumeI",
          "package": "iterIO",
          "signature": "IterR tIn m (IterR tOut m a) -\u003e Iter tIn m (IterR tOut m a)",
          "source": "src/Data-IterIO-Inum.html#resumeI",
          "type": "function"
        },
        "index": {
          "description": "Used in an exception handler after an Inum failure to resume processing of the Iter by the next enumerator in cat ed series See inumCatch for an example",
          "hierarchy": "Data IterIO Inum",
          "module": "Data.IterIO.Inum",
          "name": "resumeI",
          "normalized": "IterR a b(IterR c b d)-\u003eIter a b(IterR c b d)",
          "package": "iterIO",
          "signature": "IterR tIn m(IterR tOut m a)-\u003eIter tIn m(IterR tOut m a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Inum.html#v:resumeI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBuild an \u003ccode\u003e\u003ca\u003eInum\u003c/a\u003e\u003c/code\u003e from a \u003ccode\u003e\u003ca\u003eCodec\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.IterIO.Inum",
          "name": "runCodec",
          "package": "iterIO",
          "signature": "ResidHandler tIn tOut -\u003e Codec tIn tOut m a -\u003e Inum tIn tOut m a",
          "source": "src/Data-IterIO-Inum.html#runCodec",
          "type": "function"
        },
        "index": {
          "description": "Build an Inum from Codec",
          "hierarchy": "Data IterIO Inum",
          "module": "Data.IterIO.Inum",
          "name": "runCodec",
          "normalized": "ResidHandler a b-\u003eCodec a b c d-\u003eInum a b c d",
          "package": "iterIO",
          "partial": "Codec",
          "signature": "ResidHandler tIn tOut-\u003eCodec tIn tOut m a-\u003eInum tIn tOut m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Inum.html#v:runCodec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA generalized version of \u003ccode\u003e\u003ca\u003erunCodec\u003c/a\u003e\u003c/code\u003e that allows a \u003ccode\u003e\u003ca\u003eCtlHandler\u003c/a\u003e\u003c/code\u003e to\n be specified.\n\u003c/p\u003e\u003cpre\u003e\n   runCodec adj = runCodecC adj (passCtl adj)\n\u003c/pre\u003e",
          "module": "Data.IterIO.Inum",
          "name": "runCodecC",
          "package": "iterIO",
          "signature": "ResidHandler tIn tOut -\u003e CtlHandler (Iter tIn m) tOut m a -\u003e Codec tIn tOut m a -\u003e Inum tIn tOut m a",
          "source": "src/Data-IterIO-Inum.html#runCodecC",
          "type": "function"
        },
        "index": {
          "description": "generalized version of runCodec that allows CtlHandler to be specified runCodec adj runCodecC adj passCtl adj",
          "hierarchy": "Data IterIO Inum",
          "module": "Data.IterIO.Inum",
          "name": "runCodecC",
          "normalized": "ResidHandler a b-\u003eCtlHandler(Iter a c)b c d-\u003eCodec a b c d-\u003eInum a b c d",
          "package": "iterIO",
          "partial": "Codec",
          "signature": "ResidHandler tIn tOut-\u003eCtlHandler(Iter tIn m)tOut m a-\u003eCodec tIn tOut m a-\u003eInum tIn tOut m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Inum.html#v:runCodecC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTakes an \u003ccode\u003e\u003ca\u003eInum\u003c/a\u003e\u003c/code\u003e that might return \u003ccode\u003e\u003ca\u003eIterR\u003c/a\u003e\u003c/code\u003es in the \u003ccode\u003e\u003ca\u003eIterM\u003c/a\u003e\u003c/code\u003e state\n (which is considered impolite--see \u003ccode\u003e\u003ca\u003erunIterMC\u003c/a\u003e\u003c/code\u003e) and transforms it\n into an \u003ccode\u003e\u003ca\u003eInum\u003c/a\u003e\u003c/code\u003e that never returns \u003ccode\u003e\u003ca\u003eIterR\u003c/a\u003e\u003c/code\u003es in the \u003ccode\u003e\u003ca\u003eIterM\u003c/a\u003e\u003c/code\u003e state.\n\u003c/p\u003e",
          "module": "Data.IterIO.Inum",
          "name": "runInum",
          "package": "iterIO",
          "signature": "Inum tIn tOut m a -\u003e Inum tIn tOut m a",
          "source": "src/Data-IterIO-Inum.html#runInum",
          "type": "function"
        },
        "index": {
          "description": "Takes an Inum that might return IterR in the IterM state which is considered impolite--see runIterMC and transforms it into an Inum that never returns IterR in the IterM state",
          "hierarchy": "Data IterIO Inum",
          "module": "Data.IterIO.Inum",
          "name": "runInum",
          "normalized": "Inum a b c d-\u003eInum a b c d",
          "package": "iterIO",
          "partial": "Inum",
          "signature": "Inum tIn tOut m a-\u003eInum tIn tOut m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Inum.html#v:runInum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003erunIterMC\u003c/a\u003e\u003c/code\u003e, but only for \u003ccode\u003e\u003ca\u003eIterM\u003c/a\u003e\u003c/code\u003e--may return \u003ccode\u003e\u003ca\u003eIterC\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.IterIO.Inum",
          "name": "runIterM",
          "package": "iterIO",
          "signature": "Iter t m a -\u003e Chunk t -\u003e mt m (IterR t m a)",
          "source": "src/Data-IterIO-Inum.html#runIterM",
          "type": "function"
        },
        "index": {
          "description": "Like runIterMC but only for IterM may return IterC",
          "hierarchy": "Data IterIO Inum",
          "module": "Data.IterIO.Inum",
          "name": "runIterM",
          "normalized": "Iter a b c-\u003eChunk a-\u003ed b(IterR a b c)",
          "package": "iterIO",
          "partial": "Iter",
          "signature": "Iter t m a-\u003eChunk t-\u003emt m(IterR t m a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Inum.html#v:runIterM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun an \u003ccode\u003e\u003ca\u003eIter\u003c/a\u003e\u003c/code\u003e just like \u003ccode\u003e\u003ca\u003erunIter\u003c/a\u003e\u003c/code\u003e, but then keep stepping the\n result for as long as it is in the \u003ccode\u003e\u003ca\u003eIterM\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eIterC\u003c/a\u003e\u003c/code\u003e state (using\n the supplied \u003ccode\u003e\u003ca\u003eCtlHandler\u003c/a\u003e\u003c/code\u003e for \u003ccode\u003e\u003ca\u003eIterC\u003c/a\u003e\u003c/code\u003e states).  \u003ccode\u003e\u003ca\u003eInum\u003c/a\u003e\u003c/code\u003es should\n generally use this function or \u003ccode\u003e\u003ca\u003erunIterM\u003c/a\u003e\u003c/code\u003e in preference to\n \u003ccode\u003e\u003ca\u003erunIter\u003c/a\u003e\u003c/code\u003e, as it is convenient if \u003ccode\u003e\u003ca\u003eInum\u003c/a\u003e\u003c/code\u003es avoid ever returning\n \u003ccode\u003e\u003ca\u003eIterR\u003c/a\u003e\u003c/code\u003es in the \u003ccode\u003e\u003ca\u003eIterM\u003c/a\u003e\u003c/code\u003e state.\n\u003c/p\u003e",
          "module": "Data.IterIO.Inum",
          "name": "runIterMC",
          "package": "iterIO",
          "signature": "CtlHandler (Iter tIn m) tOut m a -\u003e Iter tOut m a -\u003e Chunk tOut -\u003e Iter tIn m (IterR tOut m a)",
          "source": "src/Data-IterIO-Inum.html#runIterMC",
          "type": "function"
        },
        "index": {
          "description": "Run an Iter just like runIter but then keep stepping the result for as long as it is in the IterM or IterC state using the supplied CtlHandler for IterC states Inum should generally use this function or runIterM in preference to runIter as it is convenient if Inum avoid ever returning IterR in the IterM state",
          "hierarchy": "Data IterIO Inum",
          "module": "Data.IterIO.Inum",
          "name": "runIterMC",
          "normalized": "CtlHandler(Iter a b)c b d-\u003eIter c b d-\u003eChunk c-\u003eIter a b(IterR c b d)",
          "package": "iterIO",
          "partial": "Iter MC",
          "signature": "CtlHandler(Iter tIn m)tOut m a-\u003eIter tOut m a-\u003eChunk tOut-\u003eIter tIn m(IterR tOut m a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Inum.html#v:runIterMC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the \u003cem\u003eAutoDone\u003c/em\u003e flag within an \u003ccode\u003e\u003ca\u003eInumM\u003c/a\u003e\u003c/code\u003e computation.  When\n \u003ccode\u003e\u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e, the \u003ccode\u003e\u003ca\u003eInum\u003c/a\u003e\u003c/code\u003e will immediately terminate as soon as the\n \u003ccode\u003e\u003ca\u003eIter\u003c/a\u003e\u003c/code\u003e it is feeding enters a non-active state (i.e., \u003ccode\u003e\u003ca\u003eDone\u003c/a\u003e\u003c/code\u003e or a\n failure state).  If this flag is \u003ccode\u003e\u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e (the default), the\n \u003ccode\u003e\u003ca\u003eInumM\u003c/a\u003e\u003c/code\u003e computation will need to monitor the results of the\n \u003ccode\u003e\u003ca\u003eifeed\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eipipe\u003c/a\u003e\u003c/code\u003e, and \u003ccode\u003e\u003ca\u003eirun\u003c/a\u003e\u003c/code\u003e functions to ensure the \u003ccode\u003e\u003ca\u003eInum\u003c/a\u003e\u003c/code\u003e\n terminates when one of these functions returns \u003ccode\u003e\u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.IterIO.Inum",
          "name": "setAutoDone",
          "package": "iterIO",
          "signature": "Bool -\u003e InumM tIn tOut m a ()",
          "source": "src/Data-IterIO-Inum.html#setAutoDone",
          "type": "function"
        },
        "index": {
          "description": "Set the AutoDone flag within an InumM computation When True the Inum will immediately terminate as soon as the Iter it is feeding enters non-active state i.e Done or failure state If this flag is False the default the InumM computation will need to monitor the results of the ifeed ipipe and irun functions to ensure the Inum terminates when one of these functions returns False",
          "hierarchy": "Data IterIO Inum",
          "module": "Data.IterIO.Inum",
          "name": "setAutoDone",
          "normalized": "Bool-\u003eInumM a b c d()",
          "package": "iterIO",
          "partial": "Auto Done",
          "signature": "Bool-\u003eInumM tIn tOut m a()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Inum.html#v:setAutoDone"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the \u003cem\u003eAutoEOF\u003c/em\u003e flag within an \u003ccode\u003e\u003ca\u003eInumM\u003c/a\u003e\u003c/code\u003e computation.  If this\n flag is \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e, handle \u003ccode\u003eIterEOF\u003c/code\u003e exceptions like a normal but\n immediate termination of the \u003ccode\u003e\u003ca\u003eInum\u003c/a\u003e\u003c/code\u003e.  If this flag is \u003ccode\u003e\u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e\n (the default), then \u003ccode\u003eIterEOF\u003c/code\u003e exceptions must be manually caught or\n they will terminate the thread.\n\u003c/p\u003e",
          "module": "Data.IterIO.Inum",
          "name": "setAutoEOF",
          "package": "iterIO",
          "signature": "Bool -\u003e InumM tIn tOut m a ()",
          "source": "src/Data-IterIO-Inum.html#setAutoEOF",
          "type": "function"
        },
        "index": {
          "description": "Set the AutoEOF flag within an InumM computation If this flag is True handle IterEOF exceptions like normal but immediate termination of the Inum If this flag is False the default then IterEOF exceptions must be manually caught or they will terminate the thread",
          "hierarchy": "Data IterIO Inum",
          "module": "Data.IterIO.Inum",
          "name": "setAutoEOF",
          "normalized": "Bool-\u003eInumM a b c d()",
          "package": "iterIO",
          "partial": "Auto EOF",
          "signature": "Bool-\u003eInumM tIn tOut m a()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Inum.html#v:setAutoEOF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the control handler an \u003ccode\u003e\u003ca\u003eInum\u003c/a\u003e\u003c/code\u003e should use from within an\n \u003ccode\u003e\u003ca\u003eInumM\u003c/a\u003e\u003c/code\u003e computation.  (The default is \u003ccode\u003e\u003ca\u003enoCtl\u003c/a\u003e\u003c/code\u003e.)\n\u003c/p\u003e",
          "module": "Data.IterIO.Inum",
          "name": "setCtlHandler",
          "package": "iterIO",
          "signature": "CtlHandler (Iter tIn m) tOut m a -\u003e InumM tIn tOut m a ()",
          "source": "src/Data-IterIO-Inum.html#setCtlHandler",
          "type": "function"
        },
        "index": {
          "description": "Set the control handler an Inum should use from within an InumM computation The default is noCtl",
          "hierarchy": "Data IterIO Inum",
          "module": "Data.IterIO.Inum",
          "name": "setCtlHandler",
          "normalized": "CtlHandler(Iter a b)c b d-\u003eInumM a c b d()",
          "package": "iterIO",
          "partial": "Ctl Handler",
          "signature": "CtlHandler(Iter tIn m)tOut m a-\u003eInumM tIn tOut m a()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Inum.html#v:setCtlHandler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eresumeI\u003c/a\u003e\u003c/code\u003e, but if the \u003ccode\u003e\u003ca\u003eIter\u003c/a\u003e\u003c/code\u003e is resumable, also prints an\n error message to standard error before resuming.\n\u003c/p\u003e",
          "module": "Data.IterIO.Inum",
          "name": "verboseResumeI",
          "package": "iterIO",
          "signature": "IterR tIn m (IterR tOut m a) -\u003e Iter tIn m (IterR tOut m a)",
          "source": "src/Data-IterIO-Inum.html#verboseResumeI",
          "type": "function"
        },
        "index": {
          "description": "Like resumeI but if the Iter is resumable also prints an error message to standard error before resuming",
          "hierarchy": "Data IterIO Inum",
          "module": "Data.IterIO.Inum",
          "name": "verboseResumeI",
          "normalized": "IterR a b(IterR c b d)-\u003eIter a b(IterR c b d)",
          "package": "iterIO",
          "partial": "Resume",
          "signature": "IterR tIn m(IterR tOut m a)-\u003eIter tIn m(IterR tOut m a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Inum.html#v:verboseResumeI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun an \u003ccode\u003e\u003ca\u003eInumM\u003c/a\u003e\u003c/code\u003e with some cleanup action in effect.  The cleanup\n action specified will be executed when the main action returns,\n whether normally, through an exception, because of the \u003cem\u003eAutoDone\u003c/em\u003e\n or \u003cem\u003eAutoEOF\u003c/em\u003e flags, or because \u003ccode\u003e\u003ca\u003eidone\u003c/a\u003e\u003c/code\u003e is invoked.\n\u003c/p\u003e\u003cp\u003eNote \u003ccode\u003ewithCleanup\u003c/code\u003e also defines the scope of actions added by the\n \u003ccode\u003e\u003ca\u003eaddCleanup\u003c/a\u003e\u003c/code\u003e function.  In other words, given a call such as\n \u003ccode\u003ewithCleanup cleaner1 main\u003c/code\u003e, if \u003ccode\u003emain\u003c/code\u003e invokes \u003ccode\u003e\u003ccode\u003e\u003ca\u003eaddCleanup\u003c/a\u003e\u003c/code\u003e\n cleaner2\u003c/code\u003e, then both \u003ccode\u003ecleaner1\u003c/code\u003e and \u003ccode\u003ecleaner2\u003c/code\u003e will be executed\n upon \u003ccode\u003emain\u003c/code\u003e's return, even if the overall \u003ccode\u003e\u003ca\u003eInum\u003c/a\u003e\u003c/code\u003e has not finished\n yet.\n\u003c/p\u003e",
          "module": "Data.IterIO.Inum",
          "name": "withCleanup",
          "package": "iterIO",
          "signature": "InumM tIn tOut m a ()-\u003e InumM tIn tOut m a b-\u003e InumM tIn tOut m a b",
          "type": "function"
        },
        "index": {
          "description": "Run an InumM with some cleanup action in effect The cleanup action specified will be executed when the main action returns whether normally through an exception because of the AutoDone or AutoEOF flags or because idone is invoked Note withCleanup also defines the scope of actions added by the addCleanup function In other words given call such as withCleanup cleaner1 main if main invokes addCleanup cleaner2 then both cleaner1 and cleaner2 will be executed upon main return even if the overall Inum has not finished yet",
          "hierarchy": "Data IterIO Inum",
          "module": "Data.IterIO.Inum",
          "name": "withCleanup",
          "normalized": "InumM a b c d()-\u003eInumM a b c d e-\u003eInumM a b c d e",
          "package": "iterIO",
          "partial": "Cleanup",
          "signature": "InumM tIn tOut m a()-\u003eInumM tIn tOut m a b-\u003eInumM tIn tOut m a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Inum.html#v:withCleanup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.IterIO.Iter",
          "name": "Iter",
          "package": "iterIO",
          "source": "src/Data-IterIO-Iter.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data IterIO Iter",
          "module": "Data.IterIO.Iter",
          "name": "Iter",
          "package": "iterIO",
          "partial": "Iter",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Iter.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eChunk\u003c/code\u003e is a wrapper around a \u003ccode\u003e\u003ca\u003eChunkData\u003c/a\u003e\u003c/code\u003e type that also includes\n an EOF flag that is \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if the data is followed by an\n end-of-file condition.  An \u003ccode\u003e\u003ca\u003eIter\u003c/a\u003e\u003c/code\u003e that receives a \u003ccode\u003eChunk\u003c/code\u003e with EOF\n \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e must return a result (or failure); it is an error to demand\n more data (return \u003ccode\u003e\u003ca\u003eIterF\u003c/a\u003e\u003c/code\u003e) after an EOF.\n\u003c/p\u003e",
          "module": "Data.IterIO.Iter",
          "name": "Chunk",
          "package": "iterIO",
          "source": "src/Data-IterIO-Iter.html#Chunk",
          "type": "data"
        },
        "index": {
          "description": "Chunk is wrapper around ChunkData type that also includes an EOF flag that is True if the data is followed by an end-of-file condition An Iter that receives Chunk with EOF True must return result or failure it is an error to demand more data return IterF after an EOF",
          "hierarchy": "Data IterIO Iter",
          "module": "Data.IterIO.Iter",
          "name": "Chunk",
          "package": "iterIO",
          "partial": "Chunk",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Iter.html#t:Chunk"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eChunkData\u003c/code\u003e is the class of data types that can be output by an\n enumerator and iterated on with an iteratee.  A \u003ccode\u003eChunkData\u003c/code\u003e type\n must be a \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e, but must additionally provide a predicate,\n \u003ccode\u003enull\u003c/code\u003e, for testing whether an object is equal to \u003ccode\u003e\u003ca\u003emempty\u003c/a\u003e\u003c/code\u003e.\n Feeding a \u003ccode\u003enull\u003c/code\u003e chunk to an iteratee followed by any other chunk\n should have the same effect as just feeding the second chunk.  To\n simplify debugging, there is an additional requirement that\n \u003ccode\u003eChunkData\u003c/code\u003e be convertable to a String with the \u003ccode\u003echunkShow\u003c/code\u003e method.\n\u003c/p\u003e\u003cp\u003eNote that because the \u003ca\u003ePrelude\u003c/a\u003e contains a function \u003ccode\u003e\u003ca\u003enull\u003c/a\u003e\u003c/code\u003e\n for lists, you may wish to include the import:\n\u003c/p\u003e\u003cpre\u003e import Prelude hiding (null)\n\u003c/pre\u003e",
          "module": "Data.IterIO.Iter",
          "name": "ChunkData",
          "package": "iterIO",
          "source": "src/Data-IterIO-Iter.html#ChunkData",
          "type": "class"
        },
        "index": {
          "description": "ChunkData is the class of data types that can be output by an enumerator and iterated on with an iteratee ChunkData type must be Monoid but must additionally provide predicate null for testing whether an object is equal to mempty Feeding null chunk to an iteratee followed by any other chunk should have the same effect as just feeding the second chunk To simplify debugging there is an additional requirement that ChunkData be convertable to String with the chunkShow method Note that because the Prelude contains function null for lists you may wish to include the import import Prelude hiding null",
          "hierarchy": "Data IterIO Iter",
          "module": "Data.IterIO.Iter",
          "name": "ChunkData",
          "package": "iterIO",
          "partial": "Chunk Data",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Iter.html#t:ChunkData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUsed when an \u003ccode\u003e\u003ca\u003eIter\u003c/a\u003e\u003c/code\u003e is issuing a control request to an enclosing\n enumerator.  Note that unlike \u003ccode\u003e\u003ca\u003eIterF\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eIterM\u003c/a\u003e\u003c/code\u003e, control requests\n expose the residual data, which is ordinarily fed right back to the\n continuation upon execution of the request.  This allows certain\n control operations (such as seek and tell) to flush, check the\n length of, or adjust the residual data.\n\u003c/p\u003e",
          "module": "Data.IterIO.Iter",
          "name": "CtlArg",
          "package": "iterIO",
          "source": "src/Data-IterIO-Iter.html#CtlArg",
          "type": "data"
        },
        "index": {
          "description": "Used when an Iter is issuing control request to an enclosing enumerator Note that unlike IterF or IterM control requests expose the residual data which is ordinarily fed right back to the continuation upon execution of the request This allows certain control operations such as seek and tell to flush check the length of or adjust the residual data",
          "hierarchy": "Data IterIO Iter",
          "module": "Data.IterIO.Iter",
          "name": "CtlArg",
          "package": "iterIO",
          "partial": "Ctl Arg",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Iter.html#t:CtlArg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClass of control commands for enclosing enumerators.  The class\n binds each control argument type to a unique result type.\n\u003c/p\u003e",
          "module": "Data.IterIO.Iter",
          "name": "CtlCmd",
          "package": "iterIO",
          "source": "src/Data-IterIO-Iter.html#CtlCmd",
          "type": "class"
        },
        "index": {
          "description": "Class of control commands for enclosing enumerators The class binds each control argument type to unique result type",
          "hierarchy": "Data IterIO Iter",
          "module": "Data.IterIO.Iter",
          "name": "CtlCmd",
          "package": "iterIO",
          "partial": "Ctl Cmd",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Iter.html#t:CtlCmd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe outcome of an \u003ccode\u003e\u003ca\u003eIterC\u003c/a\u003e\u003c/code\u003e request.\n\u003c/p\u003e",
          "module": "Data.IterIO.Iter",
          "name": "CtlRes",
          "package": "iterIO",
          "source": "src/Data-IterIO-Iter.html#CtlRes",
          "type": "data"
        },
        "index": {
          "description": "The outcome of an IterC request",
          "hierarchy": "Data IterIO Iter",
          "module": "Data.IterIO.Iter",
          "name": "CtlRes",
          "package": "iterIO",
          "partial": "Ctl Res",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Iter.html#t:CtlRes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe basic Iteratee type is \u003ccode\u003eIter t m a\u003c/code\u003e, where \u003ccode\u003et\u003c/code\u003e is the type of\n input (in class \u003ccode\u003e\u003ca\u003eChunkData\u003c/a\u003e\u003c/code\u003e), \u003ccode\u003em\u003c/code\u003e is a monad in which the iteratee\n may execute actions (using the \u003ccode\u003e\u003ca\u003eMonadTrans\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003elift\u003c/a\u003e\u003c/code\u003e method), and \u003ccode\u003ea\u003c/code\u003e\n is the result type of the iteratee.\n\u003c/p\u003e\u003cp\u003eInternally, an \u003ccode\u003eIter\u003c/code\u003e is a function from an input \u003ccode\u003e\u003ca\u003eChunk\u003c/a\u003e\u003c/code\u003e to a\n result of type \u003ccode\u003e\u003ca\u003eIterR\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.IterIO.Iter",
          "name": "Iter",
          "package": "iterIO",
          "source": "src/Data-IterIO-Iter.html#Iter",
          "type": "newtype"
        },
        "index": {
          "description": "The basic Iteratee type is Iter where is the type of input in class ChunkData is monad in which the iteratee may execute actions using the MonadTrans lift method and is the result type of the iteratee Internally an Iter is function from an input Chunk to result of type IterR",
          "hierarchy": "Data IterIO Iter",
          "module": "Data.IterIO.Iter",
          "name": "Iter",
          "package": "iterIO",
          "partial": "Iter",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Iter.html#t:Iter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eException thrown by \u003ccode\u003eCtlI\u003c/code\u003e when the type of the control request\n is not supported by the enclosing enumerator.\n\u003c/p\u003e",
          "module": "Data.IterIO.Iter",
          "name": "IterCUnsupp",
          "package": "iterIO",
          "source": "src/Data-IterIO-Iter.html#IterCUnsupp",
          "type": "data"
        },
        "index": {
          "description": "Exception thrown by CtlI when the type of the control request is not supported by the enclosing enumerator",
          "hierarchy": "Data IterIO Iter",
          "module": "Data.IterIO.Iter",
          "name": "IterCUnsupp",
          "package": "iterIO",
          "partial": "Iter CUnsupp",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Iter.html#t:IterCUnsupp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eContains information about a failed \u003ccode\u003e\u003ca\u003eIter\u003c/a\u003e\u003c/code\u003e.  Failures of type\n \u003ccode\u003e\u003ca\u003eIterException\u003c/a\u003e\u003c/code\u003e must be caught by \u003ccode\u003e\u003ca\u003ecatchI\u003c/a\u003e\u003c/code\u003e (or \u003ccode\u003e\u003ca\u003etryI\u003c/a\u003e\u003c/code\u003e, etc.).\n However, any other type of failure is considered a parse error, and\n will be caught by \u003ccode\u003e\u003ca\u003emultiParse\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eifParse\u003c/a\u003e\u003c/code\u003e, and \u003ccode\u003e\u003ca\u003emplus\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.IterIO.Iter",
          "name": "IterFail",
          "package": "iterIO",
          "source": "src/Data-IterIO-Iter.html#IterFail",
          "type": "data"
        },
        "index": {
          "description": "Contains information about failed Iter Failures of type IterException must be caught by catchI or tryI etc However any other type of failure is considered parse error and will be caught by multiParse ifParse and mplus",
          "hierarchy": "Data IterIO Iter",
          "module": "Data.IterIO.Iter",
          "name": "IterFail",
          "package": "iterIO",
          "partial": "Iter Fail",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Iter.html#t:IterFail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn \u003ccode\u003eIterR\u003c/code\u003e is the result of feeding a chunk of data to an \u003ccode\u003e\u003ca\u003eIter\u003c/a\u003e\u003c/code\u003e.\n An \u003ccode\u003eIterR\u003c/code\u003e is in one of several states:  it may require more input\n (\u003ccode\u003e\u003ca\u003eIterF\u003c/a\u003e\u003c/code\u003e), it may wish to execute monadic actions in the\n transformed monad (\u003ccode\u003e\u003ca\u003eIterM\u003c/a\u003e\u003c/code\u003e), it may have a control request for an\n enclosing enumerator (\u003ccode\u003e\u003ca\u003eIterC\u003c/a\u003e\u003c/code\u003e), it may have produced a result\n (\u003ccode\u003e\u003ca\u003eDone\u003c/a\u003e\u003c/code\u003e), or it may have failed (\u003ccode\u003e\u003ca\u003eFail\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Data.IterIO.Iter",
          "name": "IterR",
          "package": "iterIO",
          "source": "src/Data-IterIO-Iter.html#IterR",
          "type": "data"
        },
        "index": {
          "description": "An IterR is the result of feeding chunk of data to an Iter An IterR is in one of several states it may require more input IterF it may wish to execute monadic actions in the transformed monad IterM it may have control request for an enclosing enumerator IterC it may have produced result Done or it may have failed Fail",
          "hierarchy": "Data IterIO Iter",
          "module": "Data.IterIO.Iter",
          "name": "IterR",
          "package": "iterIO",
          "partial": "Iter",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Iter.html#t:IterR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.IterIO.Iter",
          "name": "Chunk",
          "package": "iterIO",
          "signature": "Chunk !t !Bool",
          "source": "src/Data-IterIO-Iter.html#Chunk",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data IterIO Iter",
          "module": "Data.IterIO.Iter",
          "name": "Chunk",
          "package": "iterIO",
          "partial": "Chunk",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Iter.html#v:Chunk"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.IterIO.Iter",
          "name": "CtlArg",
          "package": "iterIO",
          "signature": "CtlArg !carg (CtlRes cres -\u003e Iter t m a) (Chunk t)",
          "source": "src/Data-IterIO-Iter.html#CtlArg",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data IterIO Iter",
          "module": "Data.IterIO.Iter",
          "name": "CtlArg",
          "normalized": "CtlArg a(CtlRes b-\u003eIter c d e)(Chunk c)",
          "package": "iterIO",
          "partial": "Ctl Arg",
          "signature": "CtlArg carg(CtlRes cres-\u003eIter t m a)(Chunk t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Iter.html#v:CtlArg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe result of the control operation.\n\u003c/p\u003e",
          "module": "Data.IterIO.Iter",
          "name": "CtlDone",
          "package": "iterIO",
          "signature": "CtlDone !a",
          "source": "src/Data-IterIO-Iter.html#CtlRes",
          "type": "function"
        },
        "index": {
          "description": "The result of the control operation",
          "hierarchy": "Data IterIO Iter",
          "module": "Data.IterIO.Iter",
          "name": "CtlDone",
          "package": "iterIO",
          "partial": "Ctl Done",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Iter.html#v:CtlDone"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe request was supported, and executing it caused\n an exception to be thrown.\n\u003c/p\u003e",
          "module": "Data.IterIO.Iter",
          "name": "CtlFail",
          "package": "iterIO",
          "signature": "CtlFail !SomeException",
          "source": "src/Data-IterIO-Iter.html#CtlRes",
          "type": "function"
        },
        "index": {
          "description": "The request was supported and executing it caused an exception to be thrown",
          "hierarchy": "Data IterIO Iter",
          "module": "Data.IterIO.Iter",
          "name": "CtlFail",
          "package": "iterIO",
          "partial": "Ctl Fail",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Iter.html#v:CtlFail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe request type was not supported by the enumerator.\n\u003c/p\u003e",
          "module": "Data.IterIO.Iter",
          "name": "CtlUnsupp",
          "package": "iterIO",
          "signature": "CtlUnsupp",
          "source": "src/Data-IterIO-Iter.html#CtlRes",
          "type": "function"
        },
        "index": {
          "description": "The request type was not supported by the enumerator",
          "hierarchy": "Data IterIO Iter",
          "module": "Data.IterIO.Iter",
          "name": "CtlUnsupp",
          "package": "iterIO",
          "partial": "Ctl Unsupp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Iter.html#v:CtlUnsupp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSufficient input was received; the \u003ccode\u003e\u003ca\u003eIter\u003c/a\u003e\u003c/code\u003e is\n returning a result of type \u003ccode\u003ea\u003c/code\u003e.  In adition, the\n \u003ccode\u003e\u003ca\u003eIterR\u003c/a\u003e\u003c/code\u003e has a \u003ccode\u003e\u003ca\u003eChunk\u003c/a\u003e\u003c/code\u003e containing any residual\n input that was not consumed in producing the\n result.\n\u003c/p\u003e",
          "module": "Data.IterIO.Iter",
          "name": "Done",
          "package": "iterIO",
          "signature": "Done a (Chunk t)",
          "source": "src/Data-IterIO-Iter.html#IterR",
          "type": "function"
        },
        "index": {
          "description": "Sufficient input was received the Iter is returning result of type In adition the IterR has Chunk containing any residual input that was not consumed in producing the result",
          "hierarchy": "Data IterIO Iter",
          "module": "Data.IterIO.Iter",
          "name": "Done",
          "package": "iterIO",
          "partial": "Done",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Iter.html#v:Done"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eIter\u003c/a\u003e\u003c/code\u003e failed.  If it was an enumerator, the\n target \u003ccode\u003e\u003ca\u003eIter\u003c/a\u003e\u003c/code\u003e that the enumerator was feeding\n likely has not failed, in which case its current\n state is returned in the \u003ccode\u003eMaybe a\u003c/code\u003e.  If it makes\n sense to preserve the state of the input stream\n (which it does for most errors except parse\n errors), then the third parameter includes the\n residual \u003ccode\u003e\u003ca\u003eChunk\u003c/a\u003e\u003c/code\u003e at the time of the failure.\n\u003c/p\u003e",
          "module": "Data.IterIO.Iter",
          "name": "Fail",
          "package": "iterIO",
          "signature": "Fail !IterFail !(Maybe a) !(Maybe (Chunk t))",
          "source": "src/Data-IterIO-Iter.html#IterR",
          "type": "function"
        },
        "index": {
          "description": "The Iter failed If it was an enumerator the target Iter that the enumerator was feeding likely has not failed in which case its current state is returned in the Maybe If it makes sense to preserve the state of the input stream which it does for most errors except parse errors then the third parameter includes the residual Chunk at the time of the failure",
          "hierarchy": "Data IterIO Iter",
          "module": "Data.IterIO.Iter",
          "name": "Fail",
          "package": "iterIO",
          "partial": "Fail",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Iter.html#v:Fail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.IterIO.Iter",
          "name": "Iter",
          "package": "iterIO",
          "signature": "Iter",
          "source": "src/Data-IterIO-Iter.html#Iter",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data IterIO Iter",
          "module": "Data.IterIO.Iter",
          "name": "Iter",
          "package": "iterIO",
          "partial": "Iter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Iter.html#v:Iter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA control request (see \u003ccode\u003e\u003ca\u003eCtlArg\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Data.IterIO.Iter",
          "name": "IterC",
          "package": "iterIO",
          "signature": "IterC !(CtlArg t m a)",
          "source": "src/Data-IterIO-Iter.html#IterR",
          "type": "function"
        },
        "index": {
          "description": "control request see CtlArg",
          "hierarchy": "Data IterIO Iter",
          "module": "Data.IterIO.Iter",
          "name": "IterC",
          "package": "iterIO",
          "partial": "Iter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Iter.html#v:IterC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.IterIO.Iter",
          "name": "IterCUnsupp",
          "package": "iterIO",
          "signature": "IterCUnsupp carg",
          "source": "src/Data-IterIO-Iter.html#IterCUnsupp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data IterIO Iter",
          "module": "Data.IterIO.Iter",
          "name": "IterCUnsupp",
          "package": "iterIO",
          "partial": "Iter CUnsupp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Iter.html#v:IterCUnsupp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn EOF error occurred, either in some IO action\n wrapped by \u003ccode\u003e\u003ca\u003eliftIO\u003c/a\u003e\u003c/code\u003e, or in some \u003ccode\u003e\u003ca\u003eIter\u003c/a\u003e\u003c/code\u003e that called\n \u003ccode\u003e\u003ca\u003ethrowEOFI\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.IterIO.Iter",
          "name": "IterEOFErr",
          "package": "iterIO",
          "signature": "IterEOFErr IOError",
          "source": "src/Data-IterIO-Iter.html#IterFail",
          "type": "function"
        },
        "index": {
          "description": "An EOF error occurred either in some IO action wrapped by liftIO or in some Iter that called throwEOFI",
          "hierarchy": "Data IterIO Iter",
          "module": "Data.IterIO.Iter",
          "name": "IterEOFErr",
          "package": "iterIO",
          "partial": "Iter EOFErr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Iter.html#v:IterEOFErr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn actual error occured that is not a parse error,\n EOF, etc.\n\u003c/p\u003e",
          "module": "Data.IterIO.Iter",
          "name": "IterException",
          "package": "iterIO",
          "signature": "IterException !SomeException",
          "source": "src/Data-IterIO-Iter.html#IterFail",
          "type": "function"
        },
        "index": {
          "description": "An actual error occured that is not parse error EOF etc",
          "hierarchy": "Data IterIO Iter",
          "module": "Data.IterIO.Iter",
          "name": "IterException",
          "package": "iterIO",
          "partial": "Iter Exception",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Iter.html#v:IterException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eList of \u003ccode\u003e(input_seen, input_expected)\u003c/code\u003e pairs.\n\u003c/p\u003e",
          "module": "Data.IterIO.Iter",
          "name": "IterExpected",
          "package": "iterIO",
          "signature": "IterExpected [(String, String)]",
          "source": "src/Data-IterIO-Iter.html#IterFail",
          "type": "function"
        },
        "index": {
          "description": "List of input seen input expected pairs",
          "hierarchy": "Data IterIO Iter",
          "module": "Data.IterIO.Iter",
          "name": "IterExpected",
          "normalized": "IterExpected[(String,String)]",
          "package": "iterIO",
          "partial": "Iter Expected",
          "signature": "IterExpected[(String,String)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Iter.html#v:IterExpected"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe iteratee requires more input.\n\u003c/p\u003e",
          "module": "Data.IterIO.Iter",
          "name": "IterF",
          "package": "iterIO",
          "signature": "IterF !(Iter t m a)",
          "source": "src/Data-IterIO-Iter.html#IterR",
          "type": "function"
        },
        "index": {
          "description": "The iteratee requires more input",
          "hierarchy": "Data IterIO Iter",
          "module": "Data.IterIO.Iter",
          "name": "IterF",
          "package": "iterIO",
          "partial": "Iter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Iter.html#v:IterF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe iteratee must execute monadic bind in monad \u003ccode\u003em\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.IterIO.Iter",
          "name": "IterM",
          "package": "iterIO",
          "signature": "IterM !(m (IterR t m a))",
          "source": "src/Data-IterIO-Iter.html#IterR",
          "type": "function"
        },
        "index": {
          "description": "The iteratee must execute monadic bind in monad",
          "hierarchy": "Data IterIO Iter",
          "module": "Data.IterIO.Iter",
          "name": "IterM",
          "package": "iterIO",
          "partial": "Iter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Iter.html#v:IterM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhat you get from \u003ccode\u003e\u003ca\u003emzero\u003c/a\u003e\u003c/code\u003e.  Useful if you don't\n want to specify any information about the failure.\n\u003c/p\u003e",
          "module": "Data.IterIO.Iter",
          "name": "IterMzero",
          "package": "iterIO",
          "signature": "IterMzero",
          "source": "src/Data-IterIO-Iter.html#IterFail",
          "type": "function"
        },
        "index": {
          "description": "What you get from mzero Useful if you don want to specify any information about the failure",
          "hierarchy": "Data IterIO Iter",
          "module": "Data.IterIO.Iter",
          "name": "IterMzero",
          "package": "iterIO",
          "partial": "Iter Mzero",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Iter.html#v:IterMzero"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA miscellaneous parse error occured.\n\u003c/p\u003e",
          "module": "Data.IterIO.Iter",
          "name": "IterParseErr",
          "package": "iterIO",
          "signature": "IterParseErr String",
          "source": "src/Data-IterIO-Iter.html#IterFail",
          "type": "function"
        },
        "index": {
          "description": "miscellaneous parse error occured",
          "hierarchy": "Data IterIO Iter",
          "module": "Data.IterIO.Iter",
          "name": "IterParseErr",
          "package": "iterIO",
          "partial": "Iter Parse Err",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Iter.html#v:IterParseErr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDoes not actually consume any input, but returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if there\n is no more input data to be had.\n\u003c/p\u003e",
          "module": "Data.IterIO.Iter",
          "name": "atEOFI",
          "package": "iterIO",
          "signature": "Iter t m Bool",
          "source": "src/Data-IterIO-Iter.html#atEOFI",
          "type": "function"
        },
        "index": {
          "description": "Does not actually consume any input but returns True if there is no more input data to be had",
          "hierarchy": "Data IterIO Iter",
          "module": "Data.IterIO.Iter",
          "name": "atEOFI",
          "package": "iterIO",
          "partial": "EOFI",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Iter.html#v:atEOFI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCatch an exception thrown by an \u003ccode\u003e\u003ca\u003eIter\u003c/a\u003e\u003c/code\u003e, including exceptions\n thrown by any \u003ccode\u003eInum\u003c/code\u003es fused to the \u003ccode\u003e\u003ca\u003eIter\u003c/a\u003e\u003c/code\u003e (or applied to it with\n \u003ccode\u003e.|$\u003c/code\u003e).  If you wish to catch just errors thrown within \u003ccode\u003eInum\u003c/code\u003es,\n see the function \u003ccode\u003e\u003ccode\u003einumCatch\u003c/code\u003e\u003c/code\u003e in \u003ca\u003eData.IterIO.Inum\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eOn exceptions, \u003ccode\u003ecatchI\u003c/code\u003e invokes a handler passing it both the\n exception thrown and the state of the failing \u003ccode\u003e\u003ca\u003eIterR\u003c/a\u003e\u003c/code\u003e, which may\n contain more information than just the exception.  In particular,\n if the exception occured in an \u003ccode\u003eInum\u003c/code\u003e, the returned \u003ccode\u003e\u003ca\u003eIterR\u003c/a\u003e\u003c/code\u003e will\n also contain the \u003ccode\u003e\u003ca\u003eIterR\u003c/a\u003e\u003c/code\u003e being fed by that \u003ccode\u003eInum\u003c/code\u003e, which likely\n will not have failed.  To avoid discarding this extra information,\n you should not re-throw exceptions with \u003ccode\u003e\u003ca\u003ethrowI\u003c/a\u003e\u003c/code\u003e.  Rather, you\n should re-throw an exception by re-executing the failed \u003ccode\u003e\u003ca\u003eIterR\u003c/a\u003e\u003c/code\u003e\n with \u003ccode\u003e\u003ca\u003ereRunIter\u003c/a\u003e\u003c/code\u003e.  For example, a possible definition of\n \u003ccode\u003e\u003ca\u003eonExceptionI\u003c/a\u003e\u003c/code\u003e is:\n\u003c/p\u003e\u003cpre\u003e\n  onExceptionI iter cleanup =\n      iter `catchI` \\(\u003ccode\u003e\u003ca\u003eSomeException\u003c/a\u003e\u003c/code\u003e _) r -\u003e cleanup \u003e\u003e \u003ccode\u003e\u003ca\u003ereRunIter\u003c/a\u003e\u003c/code\u003e r\n\u003c/pre\u003e\u003cp\u003eNote that \u003ccode\u003ecatchI\u003c/code\u003e only works for \u003cem\u003esynchronous\u003c/em\u003e exceptions, such as\n IO errors (thrown within \u003ccode\u003e\u003ca\u003eliftIO\u003c/a\u003e\u003c/code\u003e blocks), the monadic \u003ccode\u003e\u003ca\u003efail\u003c/a\u003e\u003c/code\u003e\n operation, and exceptions raised by \u003ccode\u003e\u003ca\u003ethrowI\u003c/a\u003e\u003c/code\u003e.  It is not possible\n to catch \u003cem\u003easynchronous\u003c/em\u003e exceptions, such as lazily evaluated\n divide-by-zero errors, the \u003ccode\u003e\u003ca\u003ethrow\u003c/a\u003e\u003c/code\u003e function, or exceptions raised\n by other threads using \u003ccode\u003e\u003ccode\u003ethrowTo\u003c/code\u003e\u003c/code\u003e if those exceptions might arrive\n anywhere outside of a \u003ccode\u003e\u003ca\u003eliftIO\u003c/a\u003e\u003c/code\u003e call.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e`catchI`\u003c/code\u003e has the default infix precedence (\u003ccode\u003einfixl 9\n `catchI`\u003c/code\u003e), which binds more tightly than any concatenation or\n fusing operators.\n\u003c/p\u003e",
          "module": "Data.IterIO.Iter",
          "name": "catchI",
          "package": "iterIO",
          "signature": "Iter t m a-\u003e (e -\u003e IterR t m a -\u003e Iter t m a)-\u003e Iter t m a",
          "type": "function"
        },
        "index": {
          "description": "Catch an exception thrown by an Iter including exceptions thrown by any Inum fused to the Iter or applied to it with If you wish to catch just errors thrown within Inum see the function inumCatch in Data.IterIO.Inum On exceptions catchI invokes handler passing it both the exception thrown and the state of the failing IterR which may contain more information than just the exception In particular if the exception occured in an Inum the returned IterR will also contain the IterR being fed by that Inum which likely will not have failed To avoid discarding this extra information you should not re-throw exceptions with throwI Rather you should re-throw an exception by re-executing the failed IterR with reRunIter For example possible definition of onExceptionI is onExceptionI iter cleanup iter catchI SomeException cleanup reRunIter Note that catchI only works for synchronous exceptions such as IO errors thrown within liftIO blocks the monadic fail operation and exceptions raised by throwI It is not possible to catch asynchronous exceptions such as lazily evaluated divide-by-zero errors the throw function or exceptions raised by other threads using throwTo if those exceptions might arrive anywhere outside of liftIO call catchI has the default infix precedence infixl catchI which binds more tightly than any concatenation or fusing operators",
          "hierarchy": "Data IterIO Iter",
          "module": "Data.IterIO.Iter",
          "name": "catchI",
          "normalized": "Iter a b c-\u003e(d-\u003eIterR a b c-\u003eIter a b c)-\u003eIter a b c",
          "package": "iterIO",
          "signature": "Iter t m a-\u003e(e-\u003eIterR t m a-\u003eIter t m a)-\u003eIter t m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Iter.html#v:catchI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike catchI, but catches only what are considered to be parse\n errors--that is, every constructor of \u003ccode\u003e\u003ca\u003eIterFail\u003c/a\u003e\u003c/code\u003e except\n \u003ccode\u003e\u003ca\u003eIterException\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.IterIO.Iter",
          "name": "catchPI",
          "package": "iterIO",
          "signature": "Iter t m a -\u003e (IterFail -\u003e Iter t m a) -\u003e Iter t m a",
          "source": "src/Data-IterIO-Iter.html#catchPI",
          "type": "function"
        },
        "index": {
          "description": "Like catchI but catches only what are considered to be parse errors--that is every constructor of IterFail except IterException",
          "hierarchy": "Data IterIO Iter",
          "module": "Data.IterIO.Iter",
          "name": "catchPI",
          "normalized": "Iter a b c-\u003e(IterFail-\u003eIter a b c)-\u003eIter a b c",
          "package": "iterIO",
          "partial": "PI",
          "signature": "Iter t m a-\u003e(IterFail-\u003eIter t m a)-\u003eIter t m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Iter.html#v:catchPI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstructor function that builds a chunk containing data and a\n \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e EOF flag.\n\u003c/p\u003e",
          "module": "Data.IterIO.Iter",
          "name": "chunk",
          "package": "iterIO",
          "signature": "t -\u003e Chunk t",
          "source": "src/Data-IterIO-Iter.html#chunk",
          "type": "function"
        },
        "index": {
          "description": "Constructor function that builds chunk containing data and False EOF flag",
          "hierarchy": "Data IterIO Iter",
          "module": "Data.IterIO.Iter",
          "name": "chunk",
          "normalized": "a-\u003eChunk a",
          "package": "iterIO",
          "signature": "t-\u003eChunk t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Iter.html#v:chunk"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn chunk with \u003ccode\u003e\u003ca\u003emempty\u003c/a\u003e\u003c/code\u003e data and the EOF flag \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.IterIO.Iter",
          "name": "chunkEOF",
          "package": "iterIO",
          "signature": "Chunk t",
          "source": "src/Data-IterIO-Iter.html#chunkEOF",
          "type": "function"
        },
        "index": {
          "description": "An chunk with mempty data and the EOF flag True",
          "hierarchy": "Data IterIO Iter",
          "module": "Data.IterIO.Iter",
          "name": "chunkEOF",
          "package": "iterIO",
          "partial": "EOF",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Iter.html#v:chunkEOF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the next \u003ccode\u003e\u003ca\u003eChunk\u003c/a\u003e\u003c/code\u003e that either contains non-\u003ccode\u003e\u003ca\u003enull\u003c/a\u003e\u003c/code\u003e data or\n has the EOF bit set.\n\u003c/p\u003e",
          "module": "Data.IterIO.Iter",
          "name": "chunkI",
          "package": "iterIO",
          "signature": "Iter t m (Chunk t)",
          "source": "src/Data-IterIO-Iter.html#chunkI",
          "type": "function"
        },
        "index": {
          "description": "Returns the next Chunk that either contains non null data or has the EOF bit set",
          "hierarchy": "Data IterIO Iter",
          "module": "Data.IterIO.Iter",
          "name": "chunkI",
          "package": "iterIO",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Iter.html#v:chunkI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.IterIO.Iter",
          "name": "chunkShow",
          "package": "iterIO",
          "signature": "t -\u003e String",
          "source": "src/Data-IterIO-Iter.html#chunkShow",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data IterIO Iter",
          "module": "Data.IterIO.Iter",
          "name": "chunkShow",
          "normalized": "a-\u003eString",
          "package": "iterIO",
          "partial": "Show",
          "signature": "t-\u003eString",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Iter.html#v:chunkShow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIssue a control request and return the result.  Throws an\n exception of type \u003ccode\u003e\u003ca\u003eIterCUnsupp\u003c/a\u003e\u003c/code\u003e if the operation type was not\n supported by an enclosing enumerator.\n\u003c/p\u003e",
          "module": "Data.IterIO.Iter",
          "name": "ctlI",
          "package": "iterIO",
          "signature": "carg -\u003e Iter t m cres",
          "source": "src/Data-IterIO-Iter.html#ctlI",
          "type": "function"
        },
        "index": {
          "description": "Issue control request and return the result Throws an exception of type IterCUnsupp if the operation type was not supported by an enclosing enumerator",
          "hierarchy": "Data IterIO Iter",
          "module": "Data.IterIO.Iter",
          "name": "ctlI",
          "normalized": "a-\u003eIter b c d",
          "package": "iterIO",
          "signature": "carg-\u003eIter t m cres",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Iter.html#v:ctlI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns a non-empty amount of input data if there is any input\n left.  Returns \u003ccode\u003e\u003ca\u003emempty\u003c/a\u003e\u003c/code\u003e on an EOF condition.\n\u003c/p\u003e",
          "module": "Data.IterIO.Iter",
          "name": "data0I",
          "package": "iterIO",
          "signature": "Iter t m t",
          "source": "src/Data-IterIO-Iter.html#data0I",
          "type": "function"
        },
        "index": {
          "description": "Returns non-empty amount of input data if there is any input left Returns mempty on an EOF condition",
          "hierarchy": "Data IterIO Iter",
          "module": "Data.IterIO.Iter",
          "name": "data0I",
          "package": "iterIO",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Iter.html#v:data0I"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003edata0I\u003c/a\u003e\u003c/code\u003e, but always returns non-empty data.  Throws an\n exception on an EOF condition.\n\u003c/p\u003e",
          "module": "Data.IterIO.Iter",
          "name": "dataI",
          "package": "iterIO",
          "signature": "Iter t m t",
          "source": "src/Data-IterIO-Iter.html#dataI",
          "type": "function"
        },
        "index": {
          "description": "Like data0I but always returns non-empty data Throws an exception on an EOF condition",
          "hierarchy": "Data IterIO Iter",
          "module": "Data.IterIO.Iter",
          "name": "dataI",
          "package": "iterIO",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Iter.html#v:dataI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecute an \u003ccode\u003e\u003ca\u003eIter\u003c/a\u003e\u003c/code\u003e, then perform a cleanup action regardless of\n whether the \u003ccode\u003e\u003ca\u003eIter\u003c/a\u003e\u003c/code\u003e threw an exception or not.  Analogous to the\n standard library function \u003ccode\u003e\u003ccode\u003efinally\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.IterIO.Iter",
          "name": "finallyI",
          "package": "iterIO",
          "signature": "Iter t m a -\u003e Iter t m b -\u003e Iter t m a",
          "source": "src/Data-IterIO-Iter.html#finallyI",
          "type": "function"
        },
        "index": {
          "description": "Execute an Iter then perform cleanup action regardless of whether the Iter threw an exception or not Analogous to the standard library function finally",
          "hierarchy": "Data IterIO Iter",
          "module": "Data.IterIO.Iter",
          "name": "finallyI",
          "normalized": "Iter a b c-\u003eIter a b d-\u003eIter a b c",
          "package": "iterIO",
          "signature": "Iter t m a-\u003eIter t m b-\u003eIter t m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Iter.html#v:finallyI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003efmapI\u003c/code\u003e is like \u003ccode\u003e\u003ca\u003eliftM\u003c/a\u003e\u003c/code\u003e, but differs in one important respect:\n it preserves the failed result of an enumerator (and in fact\n applies the function to the non-failed target \u003ccode\u003e\u003ca\u003eIter\u003c/a\u003e\u003c/code\u003e state).  By\n contrast, \u003ccode\u003e\u003ca\u003eliftM\u003c/a\u003e\u003c/code\u003e, which is equivalent to \u003ccode\u003e\u003ccode\u003e\u003ca\u003eliftM\u003c/a\u003e\u003c/code\u003e f i = i \u003ccode\u003e\u003ca\u003e\u003e\u003e=\u003c/a\u003e\u003c/code\u003e\n \u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e . f\u003c/code\u003e, transforms the \u003ccode\u003e\u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e a\u003c/code\u003e component of all \u003ccode\u003e\u003ca\u003eFail\u003c/a\u003e\u003c/code\u003e\n states to \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e because of its use of \u003ccode\u003e\u003ca\u003e\u003e\u003e=\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.IterIO.Iter",
          "name": "fmapI",
          "package": "iterIO",
          "signature": "(a -\u003e b) -\u003e Iter t m a -\u003e Iter t m b",
          "source": "src/Data-IterIO-Iter.html#fmapI",
          "type": "function"
        },
        "index": {
          "description": "fmapI is like liftM but differs in one important respect it preserves the failed result of an enumerator and in fact applies the function to the non-failed target Iter state By contrast liftM which is equivalent to liftM return transforms the Maybe component of all Fail states to Nothing because of its use of",
          "hierarchy": "Data IterIO Iter",
          "module": "Data.IterIO.Iter",
          "name": "fmapI",
          "normalized": "(a-\u003eb)-\u003eIter c d a-\u003eIter c d b",
          "package": "iterIO",
          "signature": "(a-\u003eb)-\u003eIter t m a-\u003eIter t m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Iter.html#v:fmapI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMaps the result of an \u003ccode\u003e\u003ca\u003eIterR\u003c/a\u003e\u003c/code\u003e like \u003ccode\u003e\u003ca\u003efmap\u003c/a\u003e\u003c/code\u003e, but only if the\n \u003ccode\u003e\u003ca\u003eIterR\u003c/a\u003e\u003c/code\u003e is no longer active.  It is an error to call this function\n on an \u003ccode\u003e\u003ca\u003eIterR\u003c/a\u003e\u003c/code\u003e in the \u003ccode\u003e\u003ca\u003eIterF\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eIterM\u003c/a\u003e\u003c/code\u003e, or \u003ccode\u003e\u003ca\u003eIterC\u003c/a\u003e\u003c/code\u003e state.  Because\n of this restriction, \u003ccode\u003efmapR\u003c/code\u003e does not require the input and output\n \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e types (\u003ccode\u003em1\u003c/code\u003e and \u003ccode\u003em2\u003c/code\u003e) to be the same.\n\u003c/p\u003e",
          "module": "Data.IterIO.Iter",
          "name": "fmapR",
          "package": "iterIO",
          "signature": "(a -\u003e b) -\u003e IterR t m1 a -\u003e IterR t m2 b",
          "source": "src/Data-IterIO-Iter.html#fmapR",
          "type": "function"
        },
        "index": {
          "description": "Maps the result of an IterR like fmap but only if the IterR is no longer active It is an error to call this function on an IterR in the IterF IterM or IterC state Because of this restriction fmapR does not require the input and output Monad types m1 and m2 to be the same",
          "hierarchy": "Data IterIO Iter",
          "module": "Data.IterIO.Iter",
          "name": "fmapR",
          "normalized": "(a-\u003eb)-\u003eIterR c d a-\u003eIterR c d b",
          "package": "iterIO",
          "signature": "(a-\u003eb)-\u003eIterR t m a-\u003eIterR t m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Iter.html#v:fmapR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the residual data for an \u003ccode\u003e\u003ca\u003eIterR\u003c/a\u003e\u003c/code\u003e that is in no longer active\n or that is in the \u003ccode\u003e\u003ca\u003eIterC\u003c/a\u003e\u003c/code\u003e state.  (It is an error to call this\n function on an \u003ccode\u003e\u003ca\u003eIterR\u003c/a\u003e\u003c/code\u003e in the \u003ccode\u003e\u003ca\u003eIterF\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eIterM\u003c/a\u003e\u003c/code\u003e state.)\n\u003c/p\u003e",
          "module": "Data.IterIO.Iter",
          "name": "getResid",
          "package": "iterIO",
          "signature": "IterR t m a -\u003e Chunk t",
          "source": "src/Data-IterIO-Iter.html#getResid",
          "type": "function"
        },
        "index": {
          "description": "Get the residual data for an IterR that is in no longer active or that is in the IterC state It is an error to call this function on an IterR in the IterF or IterM state",
          "hierarchy": "Data IterIO Iter",
          "module": "Data.IterIO.Iter",
          "name": "getResid",
          "normalized": "IterR a b c-\u003eChunk a",
          "package": "iterIO",
          "partial": "Resid",
          "signature": "IterR t m a-\u003eChunk t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Iter.html#v:getResid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eifNoParse\u003c/code\u003e is just \u003ccode\u003e\u003ca\u003eifParse\u003c/a\u003e\u003c/code\u003e with the second and third arguments\n reversed.\n\u003c/p\u003e",
          "module": "Data.IterIO.Iter",
          "name": "ifNoParse",
          "package": "iterIO",
          "signature": "Iter t m a -\u003e Iter t m b -\u003e (a -\u003e Iter t m b) -\u003e Iter t m b",
          "source": "src/Data-IterIO-Iter.html#ifNoParse",
          "type": "function"
        },
        "index": {
          "description": "ifNoParse is just ifParse with the second and third arguments reversed",
          "hierarchy": "Data IterIO Iter",
          "module": "Data.IterIO.Iter",
          "name": "ifNoParse",
          "normalized": "Iter a b c-\u003eIter a b d-\u003e(c-\u003eIter a b d)-\u003eIter a b d",
          "package": "iterIO",
          "partial": "No Parse",
          "signature": "Iter t m a-\u003eIter t m b-\u003e(a-\u003eIter t m b)-\u003eIter t m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Iter.html#v:ifNoParse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eifParse iter success failure\u003c/code\u003e runs \u003ccode\u003eiter\u003c/code\u003e, but saves a copy of\n all input consumed using \u003ccode\u003e\u003ca\u003etryFBI\u003c/a\u003e\u003c/code\u003e.  (This means \u003ccode\u003eiter\u003c/code\u003e must not\n consume unbounded amounts of input!  See \u003ccode\u003e\u003ca\u003emultiParse\u003c/a\u003e\u003c/code\u003e for such\n cases.)  If \u003ccode\u003eiter\u003c/code\u003e succeeds, its result is passed to the function\n \u003ccode\u003esuccess\u003c/code\u003e.  If \u003ccode\u003eiter\u003c/code\u003e throws a parse error (with \u003ccode\u003e\u003ca\u003ethrowParseI\u003c/a\u003e\u003c/code\u003e),\n throws an EOF error (with \u003ccode\u003e\u003ca\u003ethrowEOFI\u003c/a\u003e\u003c/code\u003e), or executes \u003ccode\u003e\u003ca\u003emzero\u003c/a\u003e\u003c/code\u003e, then\n \u003ccode\u003efailure\u003c/code\u003e is executed with the input re-wound (so that \u003ccode\u003efailure\u003c/code\u003e is\n fed the same input that \u003ccode\u003eiter\u003c/code\u003e was).  If \u003ccode\u003eiter\u003c/code\u003e throws any other\n type of exception, \u003ccode\u003eifParse\u003c/code\u003e passes the exception back and does not\n execute \u003ccode\u003efailure\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSee \u003ca\u003eData.IterIO.Parse\u003c/a\u003e for a discussion of this function and the\n related infix operator \u003ccode\u003e\\/\u003c/code\u003e (which is a synonym for \u003ccode\u003e\u003ca\u003eifNoParse\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Data.IterIO.Iter",
          "name": "ifParse",
          "package": "iterIO",
          "signature": "Iter t m a-\u003e (a -\u003e Iter t m b)-\u003e Iter t m b-\u003e Iter t m b",
          "type": "function"
        },
        "index": {
          "description": "ifParse iter success failure runs iter but saves copy of all input consumed using tryFBI This means iter must not consume unbounded amounts of input See multiParse for such cases If iter succeeds its result is passed to the function success If iter throws parse error with throwParseI throws an EOF error with throwEOFI or executes mzero then failure is executed with the input re-wound so that failure is fed the same input that iter was If iter throws any other type of exception ifParse passes the exception back and does not execute failure See Data.IterIO.Parse for discussion of this function and the related infix operator which is synonym for ifNoParse",
          "hierarchy": "Data IterIO Iter",
          "module": "Data.IterIO.Iter",
          "name": "ifParse",
          "normalized": "Iter a b c-\u003e(c-\u003eIter a b d)-\u003eIter a b d-\u003eIter a b d",
          "package": "iterIO",
          "partial": "Parse",
          "signature": "Iter t m a-\u003e(a-\u003eIter t m b)-\u003eIter t m b-\u003eIter t m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Iter.html#v:ifParse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTrue if an \u003ccode\u003e\u003ca\u003eIterR\u003c/a\u003e\u003c/code\u003e is requesting something from an\n enumerator--i.e., the \u003ccode\u003e\u003ca\u003eIterR\u003c/a\u003e\u003c/code\u003e is not \u003ccode\u003e\u003ca\u003eDone\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eFail\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.IterIO.Iter",
          "name": "isIterActive",
          "package": "iterIO",
          "signature": "IterR t m a -\u003e Bool",
          "source": "src/Data-IterIO-Iter.html#isIterActive",
          "type": "function"
        },
        "index": {
          "description": "True if an IterR is requesting something from an enumerator--i.e the IterR is not Done or Fail",
          "hierarchy": "Data IterIO Iter",
          "module": "Data.IterIO.Iter",
          "name": "isIterActive",
          "normalized": "IterR a b c-\u003eBool",
          "package": "iterIO",
          "partial": "Iter Active",
          "signature": "IterR t m a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Iter.html#v:isIterActive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBuilds an \u003ccode\u003e\u003ca\u003eIter\u003c/a\u003e\u003c/code\u003e that keeps requesting input until it receives a\n non-\u003ccode\u003e\u003ca\u003enull\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eChunk\u003c/a\u003e\u003c/code\u003e.  In other words, the \u003ccode\u003e\u003ca\u003eChunk\u003c/a\u003e\u003c/code\u003e fed to the\n argument function is guaranteed either to contain data or to have\n the EOF flag true (or both).\n\u003c/p\u003e",
          "module": "Data.IterIO.Iter",
          "name": "iterF",
          "package": "iterIO",
          "signature": "(Chunk t -\u003e IterR t m a) -\u003e Iter t m a",
          "source": "src/Data-IterIO-Iter.html#iterF",
          "type": "function"
        },
        "index": {
          "description": "Builds an Iter that keeps requesting input until it receives non null Chunk In other words the Chunk fed to the argument function is guaranteed either to contain data or to have the EOF flag true or both",
          "hierarchy": "Data IterIO Iter",
          "module": "Data.IterIO.Iter",
          "name": "iterF",
          "normalized": "(Chunk a-\u003eIterR a b c)-\u003eIter a b c",
          "package": "iterIO",
          "signature": "(Chunk t-\u003eIterR t m a)-\u003eIter t m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Iter.html#v:iterF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShow the current state of an \u003ccode\u003e\u003ca\u003eIter\u003c/a\u003e\u003c/code\u003e if type \u003ccode\u003ea\u003c/code\u003e is in the \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e\n class.  (Otherwise, you can simply use the ordinary \u003ccode\u003e\u003ca\u003eshow\u003c/a\u003e\u003c/code\u003e\n function.)\n\u003c/p\u003e",
          "module": "Data.IterIO.Iter",
          "name": "iterShow",
          "package": "iterIO",
          "signature": "IterR t m a -\u003e String",
          "source": "src/Data-IterIO-Iter.html#iterShow",
          "type": "function"
        },
        "index": {
          "description": "Show the current state of an Iter if type is in the Show class Otherwise you can simply use the ordinary show function",
          "hierarchy": "Data IterIO Iter",
          "module": "Data.IterIO.Iter",
          "name": "iterShow",
          "normalized": "IterR a b c-\u003eString",
          "package": "iterIO",
          "partial": "Show",
          "signature": "IterR t m a-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Iter.html#v:iterShow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShow the current state of an \u003ccode\u003e\u003ca\u003eIterR\u003c/a\u003e\u003c/code\u003e, prepending it to some\n remaining input (the standard \u003ccode\u003e\u003ca\u003eShowS\u003c/a\u003e\u003c/code\u003e optimization), when \u003ccode\u003ea\u003c/code\u003e is in\n class \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e.  Note that if \u003ccode\u003ea\u003c/code\u003e is not in \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e, you can simply\n use the \u003ccode\u003e\u003ca\u003eshows\u003c/a\u003e\u003c/code\u003e function.\n\u003c/p\u003e",
          "module": "Data.IterIO.Iter",
          "name": "iterShows",
          "package": "iterIO",
          "signature": "IterR t m a -\u003e ShowS",
          "source": "src/Data-IterIO-Iter.html#iterShows",
          "type": "function"
        },
        "index": {
          "description": "Show the current state of an IterR prepending it to some remaining input the standard ShowS optimization when is in class Show Note that if is not in Show you can simply use the shows function",
          "hierarchy": "Data IterIO Iter",
          "module": "Data.IterIO.Iter",
          "name": "iterShows",
          "normalized": "IterR a b c-\u003eShowS",
          "package": "iterIO",
          "partial": "Shows",
          "signature": "IterR t m a-\u003eShowS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Iter.html#v:iterShows"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake an \u003ccode\u003e\u003ca\u003eIterEOFErr\u003c/a\u003e\u003c/code\u003e from a String.\n\u003c/p\u003e",
          "module": "Data.IterIO.Iter",
          "name": "mkIterEOF",
          "package": "iterIO",
          "signature": "String -\u003e IterFail",
          "source": "src/Data-IterIO-Iter.html#mkIterEOF",
          "type": "function"
        },
        "index": {
          "description": "Make an IterEOFErr from String",
          "hierarchy": "Data IterIO Iter",
          "module": "Data.IterIO.Iter",
          "name": "mkIterEOF",
          "normalized": "String-\u003eIterFail",
          "package": "iterIO",
          "partial": "Iter EOF",
          "signature": "String-\u003eIterFail",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Iter.html#v:mkIterEOF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTry two Iteratees and return the result of executing the second\n if the first one throws a parse, EOF, or \u003ccode\u003e\u003ca\u003emzero\u003c/a\u003e\u003c/code\u003e error.  Note that\n \u003ca\u003eData.IterIO.Parse\u003c/a\u003e defines \u003ccode\u003e\u003ccode\u003e\u003c|\u003e\u003c/code\u003e\u003c/code\u003e as an infix synonym for this\n function.\n\u003c/p\u003e\u003cp\u003eThe statement \u003ccode\u003emultiParse a b\u003c/code\u003e is similar to \u003ccode\u003e\u003ccode\u003e\u003ca\u003eifParse\u003c/a\u003e\u003c/code\u003e a return\n b\u003c/code\u003e, but the two functions operate differently.  Depending on the\n situation, only one of the two formulations may be correct.\n Specifically:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ccode\u003e\u003ca\u003eifParse\u003c/a\u003e\u003c/code\u003e a f b\u003c/code\u003e works by first executing \u003ccode\u003ea\u003c/code\u003e, saving a copy of\n    all input consumed by \u003ccode\u003ea\u003c/code\u003e.  If \u003ccode\u003ea\u003c/code\u003e throws a parse error, the\n    saved input is used to backtrack and execute \u003ccode\u003eb\u003c/code\u003e on the same\n    input that \u003ccode\u003ea\u003c/code\u003e just rejected.  If \u003ccode\u003ea\u003c/code\u003e succeeds, \u003ccode\u003eb\u003c/code\u003e is never\n    run; \u003ccode\u003ea\u003c/code\u003e's result is fed to \u003ccode\u003ef\u003c/code\u003e, and the resulting action is\n    executed without backtracking (so any error thrown within \u003ccode\u003ef\u003c/code\u003e\n    will not be caught by this \u003ccode\u003e\u003ca\u003eifParse\u003c/a\u003e\u003c/code\u003e expression).\n\u003c/li\u003e\u003cli\u003e Instead of saving input, \u003ccode\u003emultiParse a b\u003c/code\u003e executes both \u003ccode\u003ea\u003c/code\u003e and\n    \u003ccode\u003eb\u003c/code\u003e concurrently as input chunks arrive.  If \u003ccode\u003ea\u003c/code\u003e throws a parse\n    error, then the result of executing \u003ccode\u003eb\u003c/code\u003e is returned.  If \u003ccode\u003ea\u003c/code\u003e\n    either succeeds or throws an exception that is not a parse\n    error/EOF/\u003ccode\u003e\u003ca\u003emzero\u003c/a\u003e\u003c/code\u003e, then the result of running \u003ccode\u003ea\u003c/code\u003e is returned.\n\u003c/li\u003e\u003cli\u003e With \u003ccode\u003emultiParse a b\u003c/code\u003e, if \u003ccode\u003eb\u003c/code\u003e returns a value, executes a\n    monadic action via \u003ccode\u003e\u003ca\u003elift\u003c/a\u003e\u003c/code\u003e, or issues a control request via\n    \u003ccode\u003e\u003ca\u003ectlI\u003c/a\u003e\u003c/code\u003e, then further processing of \u003ccode\u003eb\u003c/code\u003e will be suspended until\n    \u003ccode\u003ea\u003c/code\u003e experiences a parse error, and thus the behavior will be\n    equivalent to \u003ccode\u003e\u003ccode\u003e\u003ca\u003eifParse\u003c/a\u003e\u003c/code\u003e a return b\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThe main restriction on \u003ccode\u003e\u003ca\u003eifParse\u003c/a\u003e\u003c/code\u003e is that \u003ccode\u003ea\u003c/code\u003e must not consume\n unbounded amounts of input, or the program may exhaust memory\n saving the input for backtracking.  Note that the second argument\n to \u003ccode\u003e\u003ca\u003eifParse\u003c/a\u003e\u003c/code\u003e (i.e., \u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e in \u003ccode\u003eifParse a return b\u003c/code\u003e) is a\n continuation for \u003ccode\u003ea\u003c/code\u003e when \u003ccode\u003ea\u003c/code\u003e succeeds.\n\u003c/p\u003e\u003cp\u003eThe advantage of \u003ccode\u003emultiParse\u003c/code\u003e is that it can avoid storing\n unbounded amounts of input for backtracking purposes if both\n \u003ccode\u003e\u003ca\u003eIter\u003c/a\u003e\u003c/code\u003es consume data.  Another advantage is that with an expression\n such as \u003ccode\u003e\u003ccode\u003e\u003ca\u003eifParse\u003c/a\u003e\u003c/code\u003e a f b\u003c/code\u003e, sometimes it is not convenient to break\n the parse target into an action to execute with backtracking (\u003ccode\u003ea\u003c/code\u003e)\n and a continuation to execute without backtracking (\u003ccode\u003ef\u003c/code\u003e).  The\n equivalent \u003ccode\u003emultiParse (a \u003e\u003e= f) b\u003c/code\u003e avoids the need to do this,\n since it does not do backtracking.\n\u003c/p\u003e\u003cp\u003eHowever, it is important to note that it is still possible to end\n up storing unbounded amounts of input with \u003ccode\u003emultiParse\u003c/code\u003e.  For\n example, consider the following code:\n\u003c/p\u003e\u003cpre\u003e total :: (Monad m) =\u003e Iter String m Int\n total = multiParse parseAndSumIntegerList (return -1) -- Bad\n\u003c/pre\u003e\u003cp\u003eHere the intent is for \u003ccode\u003eparseAndSumIntegerList\u003c/code\u003e to parse a\n (possibly huge) list of integers and return their sum.  If there is\n a parse error at any point in the input, then the result is\n identical to having defined \u003ccode\u003etotal = return -1\u003c/code\u003e.  But \u003ccode\u003ereturn -1\u003c/code\u003e\n succeeds immediately, consuming no input, which means that \u003ccode\u003etotal\u003c/code\u003e\n must return all left-over input for the next action (i.e., \u003ccode\u003enext\u003c/code\u003e\n in \u003ccode\u003etotal \u003e\u003e= next\u003c/code\u003e).  Since \u003ccode\u003etotal\u003c/code\u003e has to look arbitrarily far\n into the input to determine that \u003ccode\u003eparseAndSumIntegerList\u003c/code\u003e fails, in\n practice \u003ccode\u003etotal\u003c/code\u003e will have to save all input until it knows that\n \u003ccode\u003eparseAndSumIntegerList\u003c/code\u003e succeeds.\n\u003c/p\u003e\u003cp\u003eA better approach might be:\n\u003c/p\u003e\u003cpre\u003e\n   total = multiParse parseAndSumIntegerList (\u003ccode\u003e\u003ca\u003enullI\u003c/a\u003e\u003c/code\u003e \u003e\u003e return -1)\n\u003c/pre\u003e\u003cp\u003eHere \u003ccode\u003e\u003ca\u003enullI\u003c/a\u003e\u003c/code\u003e discards all input until an EOF is encountered, so\n there is no need to keep a copy of the input around.  This makes\n sense so long as \u003ccode\u003etotal\u003c/code\u003e is the last or only Iteratee run on the\n input stream.  (Otherwise, \u003ccode\u003e\u003ca\u003enullI\u003c/a\u003e\u003c/code\u003e would have to be replaced with\n an Iteratee that discards input up to some end-of-list marker.)\n\u003c/p\u003e\u003cp\u003eAnother approach might be to avoid parsing combinators entirely and\n use:\n\u003c/p\u003e\u003cpre\u003e\n   total = parseAndSumIntegerList `\u003ccode\u003e\u003ca\u003ecatchPI\u003c/a\u003e\u003c/code\u003e` handler\n       where handler _ = return -1\n\u003c/pre\u003e\u003cp\u003eThis last definition of \u003ccode\u003etotal\u003c/code\u003e may leave the input in some\n partially consumed state.  This is fine so long as \u003ccode\u003etotal\u003c/code\u003e is the\n last \u003ccode\u003e\u003ca\u003eIter\u003c/a\u003e\u003c/code\u003e executed on the input stream.  Otherwise, before\n throwing the parse error, \u003ccode\u003eparseAndSumIntegerList\u003c/code\u003e would need to\n ensure the input is at some reasonable boundary point for whatever\n comes next.  (The \u003ccode\u003e\u003ca\u003eungetI\u003c/a\u003e\u003c/code\u003e function is sometimes helpful for this\n purpose.)\n\u003c/p\u003e",
          "module": "Data.IterIO.Iter",
          "name": "multiParse",
          "package": "iterIO",
          "signature": "Iter t m a -\u003e Iter t m a -\u003e Iter t m a",
          "source": "src/Data-IterIO-Iter.html#multiParse",
          "type": "function"
        },
        "index": {
          "description": "Try two Iteratees and return the result of executing the second if the first one throws parse EOF or mzero error Note that Data.IterIO.Parse defines as an infix synonym for this function The statement multiParse is similar to ifParse return but the two functions operate differently Depending on the situation only one of the two formulations may be correct Specifically ifParse works by first executing saving copy of all input consumed by If throws parse error the saved input is used to backtrack and execute on the same input that just rejected If succeeds is never run result is fed to and the resulting action is executed without backtracking so any error thrown within will not be caught by this ifParse expression Instead of saving input multiParse executes both and concurrently as input chunks arrive If throws parse error then the result of executing is returned If either succeeds or throws an exception that is not parse error EOF mzero then the result of running is returned With multiParse if returns value executes monadic action via lift or issues control request via ctlI then further processing of will be suspended until experiences parse error and thus the behavior will be equivalent to ifParse return The main restriction on ifParse is that must not consume unbounded amounts of input or the program may exhaust memory saving the input for backtracking Note that the second argument to ifParse i.e return in ifParse return is continuation for when succeeds The advantage of multiParse is that it can avoid storing unbounded amounts of input for backtracking purposes if both Iter consume data Another advantage is that with an expression such as ifParse sometimes it is not convenient to break the parse target into an action to execute with backtracking and continuation to execute without backtracking The equivalent multiParse avoids the need to do this since it does not do backtracking However it is important to note that it is still possible to end up storing unbounded amounts of input with multiParse For example consider the following code total Monad Iter String Int total multiParse parseAndSumIntegerList return Bad Here the intent is for parseAndSumIntegerList to parse possibly huge list of integers and return their sum If there is parse error at any point in the input then the result is identical to having defined total return But return succeeds immediately consuming no input which means that total must return all left-over input for the next action i.e next in total next Since total has to look arbitrarily far into the input to determine that parseAndSumIntegerList fails in practice total will have to save all input until it knows that parseAndSumIntegerList succeeds better approach might be total multiParse parseAndSumIntegerList nullI return Here nullI discards all input until an EOF is encountered so there is no need to keep copy of the input around This makes sense so long as total is the last or only Iteratee run on the input stream Otherwise nullI would have to be replaced with an Iteratee that discards input up to some end-of-list marker Another approach might be to avoid parsing combinators entirely and use total parseAndSumIntegerList catchPI handler where handler return This last definition of total may leave the input in some partially consumed state This is fine so long as total is the last Iter executed on the input stream Otherwise before throwing the parse error parseAndSumIntegerList would need to ensure the input is at some reasonable boundary point for whatever comes next The ungetI function is sometimes helpful for this purpose",
          "hierarchy": "Data IterIO Iter",
          "module": "Data.IterIO.Iter",
          "name": "multiParse",
          "normalized": "Iter a b c-\u003eIter a b c-\u003eIter a b c",
          "package": "iterIO",
          "partial": "Parse",
          "signature": "Iter t m a-\u003eIter t m a-\u003eIter t m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Iter.html#v:multiParse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.IterIO.Iter",
          "name": "null",
          "package": "iterIO",
          "signature": "t -\u003e Bool",
          "source": "src/Data-IterIO-Iter.html#null",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data IterIO Iter",
          "module": "Data.IterIO.Iter",
          "name": "null",
          "normalized": "a-\u003eBool",
          "package": "iterIO",
          "signature": "t-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Iter.html#v:null"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSinks data like \u003ccode\u003e/dev/null\u003c/code\u003e, returning \u003ccode\u003e()\u003c/code\u003e on EOF.\n\u003c/p\u003e",
          "module": "Data.IterIO.Iter",
          "name": "nullI",
          "package": "iterIO",
          "signature": "Iter t m ()",
          "source": "src/Data-IterIO-Iter.html#nullI",
          "type": "function"
        },
        "index": {
          "description": "Sinks data like dev null returning on EOF",
          "hierarchy": "Data IterIO Iter",
          "module": "Data.IterIO.Iter",
          "name": "nullI",
          "normalized": "Iter a b()",
          "package": "iterIO",
          "signature": "Iter t m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Iter.html#v:nullI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun an \u003ccode\u003e\u003ca\u003eIter\u003c/a\u003e\u003c/code\u003e until it enters the \u003ccode\u003e\u003ca\u003eDone\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eFail\u003c/a\u003e\u003c/code\u003e state, then\n use a function to transform the \u003ccode\u003e\u003ca\u003eIterR\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.IterIO.Iter",
          "name": "onDone",
          "package": "iterIO",
          "signature": "(IterR t m a -\u003e IterR t m b) -\u003e Iter t m a -\u003e Iter t m b",
          "source": "src/Data-IterIO-Iter.html#onDone",
          "type": "function"
        },
        "index": {
          "description": "Run an Iter until it enters the Done or Fail state then use function to transform the IterR",
          "hierarchy": "Data IterIO Iter",
          "module": "Data.IterIO.Iter",
          "name": "onDone",
          "normalized": "(IterR a b c-\u003eIterR a b d)-\u003eIter a b c-\u003eIter a b d",
          "package": "iterIO",
          "partial": "Done",
          "signature": "(IterR t m a-\u003eIterR t m b)-\u003eIter t m a-\u003eIter t m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Iter.html#v:onDone"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe equivalent of \u003ccode\u003e\u003ca\u003eonDone\u003c/a\u003e\u003c/code\u003e for \u003ccode\u003e\u003ca\u003eIterR\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
          "module": "Data.IterIO.Iter",
          "name": "onDoneR",
          "package": "iterIO",
          "signature": "(IterR t m a -\u003e IterR t m b) -\u003e IterR t m a -\u003e IterR t m b",
          "source": "src/Data-IterIO-Iter.html#onDoneR",
          "type": "function"
        },
        "index": {
          "description": "The equivalent of onDone for IterR",
          "hierarchy": "Data IterIO Iter",
          "module": "Data.IterIO.Iter",
          "name": "onDoneR",
          "normalized": "(IterR a b c-\u003eIterR a b d)-\u003eIterR a b c-\u003eIterR a b d",
          "package": "iterIO",
          "partial": "Done",
          "signature": "(IterR t m a-\u003eIterR t m b)-\u003eIterR t m a-\u003eIterR t m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Iter.html#v:onDoneR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecute an \u003ccode\u003e\u003ca\u003eIter\u003c/a\u003e\u003c/code\u003e and perform a cleanup action if the \u003ccode\u003e\u003ca\u003eIter\u003c/a\u003e\u003c/code\u003e\n threw an exception.  Analogous to the standard library function\n \u003ccode\u003e\u003ccode\u003eonException\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.IterIO.Iter",
          "name": "onExceptionI",
          "package": "iterIO",
          "signature": "Iter t m a -\u003e Iter t m b -\u003e Iter t m a",
          "source": "src/Data-IterIO-Iter.html#onExceptionI",
          "type": "function"
        },
        "index": {
          "description": "Execute an Iter and perform cleanup action if the Iter threw an exception Analogous to the standard library function onException",
          "hierarchy": "Data IterIO Iter",
          "module": "Data.IterIO.Iter",
          "name": "onExceptionI",
          "normalized": "Iter a b c-\u003eIter a b d-\u003eIter a b c",
          "package": "iterIO",
          "partial": "Exception",
          "signature": "Iter t m a-\u003eIter t m b-\u003eIter t m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Iter.html#v:onExceptionI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRuns an \u003ccode\u003e\u003ca\u003eIter\u003c/a\u003e\u003c/code\u003e then rewinds the input state, so that the effect\n is to parse lookahead data.  (See \u003ccode\u003e\u003ca\u003etryBI\u003c/a\u003e\u003c/code\u003e if you want to rewind the\n input only when the \u003ccode\u003e\u003ca\u003eIter\u003c/a\u003e\u003c/code\u003e fails.)\n\u003c/p\u003e",
          "module": "Data.IterIO.Iter",
          "name": "peekI",
          "package": "iterIO",
          "signature": "Iter t m a -\u003e Iter t m a",
          "source": "src/Data-IterIO-Iter.html#peekI",
          "type": "function"
        },
        "index": {
          "description": "Runs an Iter then rewinds the input state so that the effect is to parse lookahead data See tryBI if you want to rewind the input only when the Iter fails",
          "hierarchy": "Data IterIO Iter",
          "module": "Data.IterIO.Iter",
          "name": "peekI",
          "normalized": "Iter a b c-\u003eIter a b c",
          "package": "iterIO",
          "signature": "Iter t m a-\u003eIter t m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Iter.html#v:peekI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA variant of \u003ccode\u003e\u003ca\u003edata0I\u003c/a\u003e\u003c/code\u003e that reads the whole input up to an EOF and\n returns it.\n\u003c/p\u003e",
          "module": "Data.IterIO.Iter",
          "name": "pureI",
          "package": "iterIO",
          "signature": "Iter t m t",
          "source": "src/Data-IterIO-Iter.html#pureI",
          "type": "function"
        },
        "index": {
          "description": "variant of data0I that reads the whole input up to an EOF and returns it",
          "hierarchy": "Data IterIO Iter",
          "module": "Data.IterIO.Iter",
          "name": "pureI",
          "package": "iterIO",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Iter.html#v:pureI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTurn an \u003ccode\u003e\u003ca\u003eIterR\u003c/a\u003e\u003c/code\u003e back into an \u003ccode\u003e\u003ca\u003eIter\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.IterIO.Iter",
          "name": "reRunIter",
          "package": "iterIO",
          "signature": "IterR t m a -\u003e Iter t m a",
          "source": "src/Data-IterIO-Iter.html#reRunIter",
          "type": "function"
        },
        "index": {
          "description": "Turn an IterR back into an Iter",
          "hierarchy": "Data IterIO Iter",
          "module": "Data.IterIO.Iter",
          "name": "reRunIter",
          "normalized": "IterR a b c-\u003eIter a b c",
          "package": "iterIO",
          "partial": "Run Iter",
          "signature": "IterR t m a-\u003eIter t m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Iter.html#v:reRunIter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFeed an EOF to an \u003ccode\u003e\u003ca\u003eIter\u003c/a\u003e\u003c/code\u003e and return the result.  Throws an\n exception if there has been a failure.\n\u003c/p\u003e",
          "module": "Data.IterIO.Iter",
          "name": "run",
          "package": "iterIO",
          "signature": "Iter t m a -\u003e m a",
          "source": "src/Data-IterIO-Iter.html#run",
          "type": "function"
        },
        "index": {
          "description": "Feed an EOF to an Iter and return the result Throws an exception if there has been failure",
          "hierarchy": "Data IterIO Iter",
          "module": "Data.IterIO.Iter",
          "name": "run",
          "normalized": "Iter a b c-\u003eb c",
          "package": "iterIO",
          "signature": "Iter t m a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Iter.html#v:run"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRuns an \u003ccode\u003e\u003ca\u003eIter\u003c/a\u003e\u003c/code\u003e from within a different \u003ccode\u003e\u003ca\u003eIter\u003c/a\u003e\u003c/code\u003e monad.  If\n successful, \u003ccode\u003erunI iter\u003c/code\u003e will produce the same result as \u003ccode\u003e\u003ccode\u003e\u003ca\u003elift\u003c/a\u003e\u003c/code\u003e\n (\u003ccode\u003e\u003ca\u003erun\u003c/a\u003e\u003c/code\u003e iter)\u003c/code\u003e.  However, if \u003ccode\u003eiter\u003c/code\u003e fails, \u003ccode\u003e\u003ca\u003erun\u003c/a\u003e\u003c/code\u003e throws a\n language-level exception, which cannot be caught within other\n \u003ccode\u003e\u003ca\u003eIter\u003c/a\u003e\u003c/code\u003e monads.  By contrast, \u003ccode\u003erunI\u003c/code\u003e throws a monadic exception that\n can be caught.  In short, use \u003ccode\u003erunI\u003c/code\u003e in preference to \u003ccode\u003erun\u003c/code\u003e in\n situations where both are applicable.  See a more detailed\n discussion of the same issue with examples in the documentation for\n \u003ccode\u003e\u003ccode\u003e.|$\u003c/code\u003e\u003c/code\u003e in \u003ca\u003eData.IterIO.Inum\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Data.IterIO.Iter",
          "name": "runI",
          "package": "iterIO",
          "signature": "Iter t1 m a -\u003e Iter t2 m a",
          "source": "src/Data-IterIO-Iter.html#runI",
          "type": "function"
        },
        "index": {
          "description": "Runs an Iter from within different Iter monad If successful runI iter will produce the same result as lift run iter However if iter fails run throws language-level exception which cannot be caught within other Iter monads By contrast runI throws monadic exception that can be caught In short use runI in preference to run in situations where both are applicable See more detailed discussion of the same issue with examples in the documentation for in Data.IterIO.Inum",
          "hierarchy": "Data IterIO Iter",
          "module": "Data.IterIO.Iter",
          "name": "runI",
          "normalized": "Iter a b c-\u003eIter a b c",
          "package": "iterIO",
          "signature": "Iter t m a-\u003eIter t m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Iter.html#v:runI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.IterIO.Iter",
          "name": "runIter",
          "package": "iterIO",
          "signature": "Chunk t -\u003e IterR t m a",
          "source": "src/Data-IterIO-Iter.html#Iter",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data IterIO Iter",
          "module": "Data.IterIO.Iter",
          "name": "runIter",
          "normalized": "Chunk a-\u003eIterR a b c",
          "package": "iterIO",
          "partial": "Iter",
          "signature": "Chunk t-\u003eIterR t m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Iter.html#v:runIter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFeed more input to an \u003ccode\u003e\u003ca\u003eIter\u003c/a\u003e\u003c/code\u003e that has already been run (and hence\n is already an \u003ccode\u003e\u003ca\u003eIterR\u003c/a\u003e\u003c/code\u003e).  In the event that the \u003ccode\u003e\u003ca\u003eIterR\u003c/a\u003e\u003c/code\u003e is\n requesting more input (i.e., is in the \u003ccode\u003e\u003ca\u003eIterF\u003c/a\u003e\u003c/code\u003e state), this is\n straight forward.  However, if the \u003ccode\u003e\u003ca\u003eIter\u003c/a\u003e\u003c/code\u003e is in some other state\n such as \u003ccode\u003e\u003ca\u003eIterM\u003c/a\u003e\u003c/code\u003e, this function needs to save the input until such\n time as the \u003ccode\u003e\u003ca\u003eIterR\u003c/a\u003e\u003c/code\u003e is stepped to a new state (e.g., with \u003ccode\u003e\u003ca\u003estepR\u003c/a\u003e\u003c/code\u003e\n or \u003ccode\u003e\u003ca\u003ereRunIter\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Data.IterIO.Iter",
          "name": "runIterR",
          "package": "iterIO",
          "signature": "IterR t m a -\u003e Chunk t -\u003e IterR t m a",
          "source": "src/Data-IterIO-Iter.html#runIterR",
          "type": "function"
        },
        "index": {
          "description": "Feed more input to an Iter that has already been run and hence is already an IterR In the event that the IterR is requesting more input i.e is in the IterF state this is straight forward However if the Iter is in some other state such as IterM this function needs to save the input until such time as the IterR is stepped to new state e.g with stepR or reRunIter",
          "hierarchy": "Data IterIO Iter",
          "module": "Data.IterIO.Iter",
          "name": "runIterR",
          "normalized": "IterR a b c-\u003eChunk a-\u003eIterR a b c",
          "package": "iterIO",
          "partial": "Iter",
          "signature": "IterR t m a-\u003eChunk t-\u003eIterR t m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Iter.html#v:runIterR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe equivalent for \u003ccode\u003e\u003ca\u003erunI\u003c/a\u003e\u003c/code\u003e for \u003ccode\u003e\u003ca\u003eIterR\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
          "module": "Data.IterIO.Iter",
          "name": "runR",
          "package": "iterIO",
          "signature": "IterR t1 m a -\u003e IterR t2 m a",
          "source": "src/Data-IterIO-Iter.html#runR",
          "type": "function"
        },
        "index": {
          "description": "The equivalent for runI for IterR",
          "hierarchy": "Data IterIO Iter",
          "module": "Data.IterIO.Iter",
          "name": "runR",
          "normalized": "IterR a b c-\u003eIterR a b c",
          "package": "iterIO",
          "signature": "IterR t m a-\u003eIterR t m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Iter.html#v:runR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIssue a control request.  Returns \u003ccode\u003e\u003ca\u003eCtlUnsupp\u003c/a\u003e\u003c/code\u003e if the request type\n is unsupported.  Otherwise, returns \u003ccode\u003e\u003ca\u003eCtlDone\u003c/a\u003e\u003c/code\u003e with the result if\n the request succeeds, or return \u003ccode\u003e\u003ccode\u003e\u003ca\u003eCtlFail\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e if the request type is\n supported but attempting to execute the request caused an\n exception.\n\u003c/p\u003e",
          "module": "Data.IterIO.Iter",
          "name": "safeCtlI",
          "package": "iterIO",
          "signature": "carg -\u003e Iter t m (CtlRes cres)",
          "source": "src/Data-IterIO-Iter.html#safeCtlI",
          "type": "function"
        },
        "index": {
          "description": "Issue control request Returns CtlUnsupp if the request type is unsupported Otherwise returns CtlDone with the result if the request succeeds or return CtlFail if the request type is supported but attempting to execute the request caused an exception",
          "hierarchy": "Data IterIO Iter",
          "module": "Data.IterIO.Iter",
          "name": "safeCtlI",
          "normalized": "a-\u003eIter b c(CtlRes d)",
          "package": "iterIO",
          "partial": "Ctl",
          "signature": "carg-\u003eIter t m(CtlRes cres)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Iter.html#v:safeCtlI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet residual data for an \u003ccode\u003e\u003ca\u003eIterR\u003c/a\u003e\u003c/code\u003e that is not active.  (It is an\n error to call this on an \u003ccode\u003e\u003ca\u003eIterR\u003c/a\u003e\u003c/code\u003e in the \u003ccode\u003e\u003ca\u003eDone\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eIterM\u003c/a\u003e\u003c/code\u003e, or \u003ccode\u003e\u003ca\u003eIterC\u003c/a\u003e\u003c/code\u003e\n states.)\n\u003c/p\u003e",
          "module": "Data.IterIO.Iter",
          "name": "setResid",
          "package": "iterIO",
          "signature": "IterR t1 m1 a -\u003e Chunk t2 -\u003e IterR t2 m2 a",
          "source": "src/Data-IterIO-Iter.html#setResid",
          "type": "function"
        },
        "index": {
          "description": "Set residual data for an IterR that is not active It is an error to call this on an IterR in the Done IterM or IterC states",
          "hierarchy": "Data IterIO Iter",
          "module": "Data.IterIO.Iter",
          "name": "setResid",
          "normalized": "IterR a b c-\u003eChunk a-\u003eIterR a b c",
          "package": "iterIO",
          "partial": "Resid",
          "signature": "IterR t m a-\u003eChunk t-\u003eIterR t m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Iter.html#v:setResid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun an \u003ccode\u003e\u003ca\u003eIter\u003c/a\u003e\u003c/code\u003e returning data of class \u003ccode\u003e\u003ca\u003eChunkData\u003c/a\u003e\u003c/code\u003e and throw an\n EOF exception if the data is \u003ccode\u003e\u003ca\u003enull\u003c/a\u003e\u003c/code\u003e.  (Note that this is different\n from the \u003ccode\u003e\u003ccode\u003esome\u003c/code\u003e\u003c/code\u003e method of the \u003ccode\u003e\u003ccode\u003eAlternative\u003c/code\u003e\u003c/code\u003e class in\n \u003ca\u003eControl.Applicative\u003c/a\u003e, which executes a computation one \u003cem\u003eor more\u003c/em\u003e\n times.  The iterIO library does not use \u003ccode\u003e\u003ccode\u003eAlternative\u003c/code\u003e\u003c/code\u003e, in part\n because \u003ccode\u003e\u003ccode\u003eAlternative\u003c/code\u003e\u003c/code\u003e's \u003ccode\u003e\u003c|\u003e\u003c/code\u003e operator has left rather than\n right fixity, which would make parsing less efficient.  See\n \u003ca\u003eData.IterIO.Parse\u003c/a\u003e for information about iterIO's \u003ccode\u003e\u003c|\u003e\u003c/code\u003e\n operator.)\n\u003c/p\u003e",
          "module": "Data.IterIO.Iter",
          "name": "someI",
          "package": "iterIO",
          "signature": "Iter tIn m tOut -\u003e Iter tIn m tOut",
          "source": "src/Data-IterIO-Iter.html#someI",
          "type": "function"
        },
        "index": {
          "description": "Run an Iter returning data of class ChunkData and throw an EOF exception if the data is null Note that this is different from the some method of the Alternative class in Control.Applicative which executes computation one or more times The iterIO library does not use Alternative in part because Alternative operator has left rather than right fixity which would make parsing less efficient See Data.IterIO.Parse for information about iterIO operator",
          "hierarchy": "Data IterIO Iter",
          "module": "Data.IterIO.Iter",
          "name": "someI",
          "normalized": "Iter a b c-\u003eIter a b c",
          "package": "iterIO",
          "signature": "Iter tIn m tOut-\u003eIter tIn m tOut",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Iter.html#v:someI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStep an active \u003ccode\u003e\u003ca\u003eIterR\u003c/a\u003e\u003c/code\u003e (i.e., one in the \u003ccode\u003e\u003ca\u003eIterF\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eIterM\u003c/a\u003e\u003c/code\u003e, or\n \u003ccode\u003e\u003ca\u003eIterC\u003c/a\u003e\u003c/code\u003e state) to its next state, and pass the result through a\n function.\n\u003c/p\u003e",
          "module": "Data.IterIO.Iter",
          "name": "stepR",
          "package": "iterIO",
          "signature": "IterR t m a-\u003e (IterR t m a -\u003e IterR t m b)-\u003e IterR t m b-\u003e IterR t m b",
          "type": "function"
        },
        "index": {
          "description": "Step an active IterR i.e one in the IterF IterM or IterC state to its next state and pass the result through function",
          "hierarchy": "Data IterIO Iter",
          "module": "Data.IterIO.Iter",
          "name": "stepR",
          "normalized": "IterR a b c-\u003e(IterR a b c-\u003eIterR a b d)-\u003eIterR a b d-\u003eIterR a b d",
          "package": "iterIO",
          "signature": "IterR t m a-\u003e(IterR t m a-\u003eIterR t m b)-\u003eIterR t m b-\u003eIterR t m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Iter.html#v:stepR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA variant of \u003ccode\u003e\u003ca\u003estepR\u003c/a\u003e\u003c/code\u003e that only works for the \u003ccode\u003e\u003ca\u003eIterF\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eIterC\u003c/a\u003e\u003c/code\u003e\n states, not the \u003ccode\u003e\u003ca\u003eIterM\u003c/a\u003e\u003c/code\u003e state.  (Because of this additional\n restriction, the input and output \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e types \u003ccode\u003em1\u003c/code\u003e and \u003ccode\u003em2\u003c/code\u003e do\n not need to be the same.)\n\u003c/p\u003e",
          "module": "Data.IterIO.Iter",
          "name": "stepR'",
          "package": "iterIO",
          "signature": "IterR t m1 a-\u003e (IterR t m1 a -\u003e IterR t m2 b)-\u003e IterR t m2 b-\u003e IterR t m2 b",
          "type": "function"
        },
        "index": {
          "description": "variant of stepR that only works for the IterF and IterC states not the IterM state Because of this additional restriction the input and output Monad types m1 and m2 do not need to be the same",
          "hierarchy": "Data IterIO Iter",
          "module": "Data.IterIO.Iter",
          "name": "stepR'",
          "normalized": "IterR a b c-\u003e(IterR a b c-\u003eIterR a b d)-\u003eIterR a b d-\u003eIterR a b d",
          "package": "iterIO",
          "partial": "R'",
          "signature": "IterR t m a-\u003e(IterR t m a-\u003eIterR t m b)-\u003eIterR t m b-\u003eIterR t m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Iter.html#v:stepR-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThrow an exception of type \u003ccode\u003eIterEOF\u003c/code\u003e.  This will be interpreted\n by \u003ccode\u003emkInum\u003c/code\u003e as an end of file chunk when thrown by the codec.  It\n will also be interpreted by \u003ccode\u003e\u003ca\u003eifParse\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003emultiParse\u003c/a\u003e\u003c/code\u003e as parsing\n failure.  If not caught within the \u003ccode\u003e\u003ca\u003eIter\u003c/a\u003e\u003c/code\u003e monad, the exception will\n be rethrown by \u003ccode\u003e\u003ca\u003erun\u003c/a\u003e\u003c/code\u003e (and hence \u003ccode\u003e|$\u003c/code\u003e) as an \u003ccode\u003e\u003ca\u003eIOError\u003c/a\u003e\u003c/code\u003e of type EOF.\n\u003c/p\u003e",
          "module": "Data.IterIO.Iter",
          "name": "throwEOFI",
          "package": "iterIO",
          "signature": "String -\u003e Iter t m a",
          "source": "src/Data-IterIO-Iter.html#throwEOFI",
          "type": "function"
        },
        "index": {
          "description": "Throw an exception of type IterEOF This will be interpreted by mkInum as an end of file chunk when thrown by the codec It will also be interpreted by ifParse and multiParse as parsing failure If not caught within the Iter monad the exception will be rethrown by run and hence as an IOError of type EOF",
          "hierarchy": "Data IterIO Iter",
          "module": "Data.IterIO.Iter",
          "name": "throwEOFI",
          "normalized": "String-\u003eIter a b c",
          "package": "iterIO",
          "partial": "EOFI",
          "signature": "String-\u003eIter t m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Iter.html#v:throwEOFI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThrow an exception from an Iteratee.  The exception will be\n propagated properly through nested Iteratees, which will allow it\n to be categorized properly and avoid situations in which resources\n such as file handles are not released.  (Most iteratee code does\n not assume the Monad parameter \u003ccode\u003em\u003c/code\u003e is in the \u003ccode\u003e\u003ca\u003eMonadIO\u003c/a\u003e\u003c/code\u003e class, and\n hence cannot use \u003ccode\u003e\u003ca\u003ecatch\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ccode\u003eonException\u003c/code\u003e\u003c/code\u003e to clean up after\n exceptions.)  Use \u003ccode\u003e\u003ca\u003ethrowI\u003c/a\u003e\u003c/code\u003e in preference to \u003ccode\u003e\u003ca\u003ethrow\u003c/a\u003e\u003c/code\u003e whenever\n possible.\n\u003c/p\u003e\u003cp\u003eDo not use \u003ccode\u003ethrowI\u003c/code\u003e to throw parse errors or EOF errors.  Use\n \u003ccode\u003e\u003ca\u003ethrowEOFI\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003ethrowParseI\u003c/a\u003e\u003c/code\u003e instead.  For performance reasons,\n the \u003ccode\u003e\u003ca\u003eIterFail\u003c/a\u003e\u003c/code\u003e type segregates EOF and parse errors from other\n types of failures.\n\u003c/p\u003e",
          "module": "Data.IterIO.Iter",
          "name": "throwI",
          "package": "iterIO",
          "signature": "e -\u003e Iter t m a",
          "source": "src/Data-IterIO-Iter.html#throwI",
          "type": "function"
        },
        "index": {
          "description": "Throw an exception from an Iteratee The exception will be propagated properly through nested Iteratees which will allow it to be categorized properly and avoid situations in which resources such as file handles are not released Most iteratee code does not assume the Monad parameter is in the MonadIO class and hence cannot use catch or onException to clean up after exceptions Use throwI in preference to throw whenever possible Do not use throwI to throw parse errors or EOF errors Use throwEOFI and throwParseI instead For performance reasons the IterFail type segregates EOF and parse errors from other types of failures",
          "hierarchy": "Data IterIO Iter",
          "module": "Data.IterIO.Iter",
          "name": "throwI",
          "normalized": "a-\u003eIter b c d",
          "package": "iterIO",
          "signature": "e-\u003eIter t m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Iter.html#v:throwI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThrow a miscellaneous parse error (after which input is assumed\n to be unsynchronized and thus is discarded).  Parse errors may be\n caught as exception type \u003ccode\u003e\u003ca\u003eIterFail\u003c/a\u003e\u003c/code\u003e, but they can also be caught\n more efficiently by the functions \u003ccode\u003e\u003ca\u003emultiParse\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eifParse\u003c/a\u003e\u003c/code\u003e, and\n \u003ccode\u003e\u003ca\u003emplus\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.IterIO.Iter",
          "name": "throwParseI",
          "package": "iterIO",
          "signature": "String -\u003e Iter t m a",
          "source": "src/Data-IterIO-Iter.html#throwParseI",
          "type": "function"
        },
        "index": {
          "description": "Throw miscellaneous parse error after which input is assumed to be unsynchronized and thus is discarded Parse errors may be caught as exception type IterFail but they can also be caught more efficiently by the functions multiParse ifParse and mplus",
          "hierarchy": "Data IterIO Iter",
          "module": "Data.IterIO.Iter",
          "name": "throwParseI",
          "normalized": "String-\u003eIter a b c",
          "package": "iterIO",
          "partial": "Parse",
          "signature": "String-\u003eIter t m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Iter.html#v:throwParseI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimlar to \u003ccode\u003e\u003ca\u003etryI\u003c/a\u003e\u003c/code\u003e, but saves all data that has been fed to the\n \u003ccode\u003e\u003ca\u003eIter\u003c/a\u003e\u003c/code\u003e, and rewinds the input if the \u003ccode\u003e\u003ca\u003eIter\u003c/a\u003e\u003c/code\u003e fails.  (The \u003ccode\u003eB\u003c/code\u003e in\n \u003ccode\u003etryBI\u003c/code\u003e stands for \"backtracking\".)  Thus, if \u003ccode\u003etryBI\u003c/code\u003e returns\n \u003ccode\u003e\u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e exception\u003c/code\u003e, the next \u003ccode\u003e\u003ca\u003eIter\u003c/a\u003e\u003c/code\u003e to be invoked will see the same\n input that caused the previous \u003ccode\u003e\u003ca\u003eIter\u003c/a\u003e\u003c/code\u003e to fail.  (For this reason,\n it makes no sense ever to call \u003ccode\u003e\u003ccode\u003eresumeI\u003c/code\u003e\u003c/code\u003e on the \u003ccode\u003e\u003ca\u003eIter\u003c/a\u003e\u003c/code\u003e you get\n back from \u003ccode\u003etryBI\u003c/code\u003e, which is why \u003ccode\u003etryBI\u003c/code\u003e does not return the failing\n Iteratee the way \u003ccode\u003e\u003ca\u003etryI\u003c/a\u003e\u003c/code\u003e does.)\n\u003c/p\u003e\u003cp\u003eBecause \u003ccode\u003etryBI\u003c/code\u003e saves a copy of all input, it can consume a lot of\n memory and should only be used when the \u003ccode\u003e\u003ca\u003eIter\u003c/a\u003e\u003c/code\u003e argument is known to\n consume a bounded amount of data.\n\u003c/p\u003e",
          "module": "Data.IterIO.Iter",
          "name": "tryBI",
          "package": "iterIO",
          "signature": "Iter t m a -\u003e Iter t m (Either e a)",
          "source": "src/Data-IterIO-Iter.html#tryBI",
          "type": "function"
        },
        "index": {
          "description": "Simlar to tryI but saves all data that has been fed to the Iter and rewinds the input if the Iter fails The in tryBI stands for backtracking Thus if tryBI returns Left exception the next Iter to be invoked will see the same input that caused the previous Iter to fail For this reason it makes no sense ever to call resumeI on the Iter you get back from tryBI which is why tryBI does not return the failing Iteratee the way tryI does Because tryBI saves copy of all input it can consume lot of memory and should only be used when the Iter argument is known to consume bounded amount of data",
          "hierarchy": "Data IterIO Iter",
          "module": "Data.IterIO.Iter",
          "name": "tryBI",
          "normalized": "Iter a b c-\u003eIter a b(Either d c)",
          "package": "iterIO",
          "partial": "BI",
          "signature": "Iter t m a-\u003eIter t m(Either e a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Iter.html#v:tryBI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA variant of \u003ccode\u003e\u003ca\u003etryI\u003c/a\u003e\u003c/code\u003e that just catches EOF errors.  Returns\n \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e after an EOF error, and \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e the result otherwise.\n Should be much faster than trying to catch an EOF error of type\n \u003ccode\u003e\u003ca\u003eException\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.IterIO.Iter",
          "name": "tryEOFI",
          "package": "iterIO",
          "signature": "Iter t m a -\u003e Iter t m (Maybe a)",
          "source": "src/Data-IterIO-Iter.html#tryEOFI",
          "type": "function"
        },
        "index": {
          "description": "variant of tryI that just catches EOF errors Returns Nothing after an EOF error and Just the result otherwise Should be much faster than trying to catch an EOF error of type Exception",
          "hierarchy": "Data IterIO Iter",
          "module": "Data.IterIO.Iter",
          "name": "tryEOFI",
          "normalized": "Iter a b c-\u003eIter a b(Maybe c)",
          "package": "iterIO",
          "partial": "EOFI",
          "signature": "Iter t m a-\u003eIter t m(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Iter.html#v:tryEOFI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA variant of \u003ccode\u003e\u003ca\u003etryBI\u003c/a\u003e\u003c/code\u003e that, also rewinds input on failure, but\n returns the raw \u003ccode\u003e\u003ca\u003eIterFail\u003c/a\u003e\u003c/code\u003e structure, rather than mapping it to a\n particular exception.  This is much faster because it requires no\n dynamic casts.  However, the same warning applies that \u003ccode\u003etryFBI\u003c/code\u003e\n should not be applied to \u003ccode\u003e\u003ca\u003eIter\u003c/a\u003e\u003c/code\u003es that could take unbounded input.\n\u003c/p\u003e",
          "module": "Data.IterIO.Iter",
          "name": "tryFBI",
          "package": "iterIO",
          "signature": "Iter t m a -\u003e Iter t m (Either IterFail a)",
          "source": "src/Data-IterIO-Iter.html#tryFBI",
          "type": "function"
        },
        "index": {
          "description": "variant of tryBI that also rewinds input on failure but returns the raw IterFail structure rather than mapping it to particular exception This is much faster because it requires no dynamic casts However the same warning applies that tryFBI should not be applied to Iter that could take unbounded input",
          "hierarchy": "Data IterIO Iter",
          "module": "Data.IterIO.Iter",
          "name": "tryFBI",
          "normalized": "Iter a b c-\u003eIter a b(Either IterFail c)",
          "package": "iterIO",
          "partial": "FBI",
          "signature": "Iter t m a-\u003eIter t m(Either IterFail a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Iter.html#v:tryFBI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA varient of \u003ccode\u003e\u003ca\u003etryI\u003c/a\u003e\u003c/code\u003e that returns the \u003ccode\u003e\u003ca\u003eIterFail\u003c/a\u003e\u003c/code\u003e state rather than\n trying to match a particular exception.\n\u003c/p\u003e",
          "module": "Data.IterIO.Iter",
          "name": "tryFI",
          "package": "iterIO",
          "signature": "Iter t m a -\u003e Iter t m (Either IterFail a)",
          "source": "src/Data-IterIO-Iter.html#tryFI",
          "type": "function"
        },
        "index": {
          "description": "varient of tryI that returns the IterFail state rather than trying to match particular exception",
          "hierarchy": "Data IterIO Iter",
          "module": "Data.IterIO.Iter",
          "name": "tryFI",
          "normalized": "Iter a b c-\u003eIter a b(Either IterFail c)",
          "package": "iterIO",
          "partial": "FI",
          "signature": "Iter t m a-\u003eIter t m(Either IterFail a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Iter.html#v:tryFI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf an \u003ccode\u003e\u003ca\u003eIter\u003c/a\u003e\u003c/code\u003e succeeds and returns \u003ccode\u003ea\u003c/code\u003e, returns \u003ccode\u003e\u003ccode\u003e\u003ca\u003eRight\u003c/a\u003e\u003c/code\u003e a\u003c/code\u003e.  If\n the \u003ccode\u003e\u003ca\u003eIter\u003c/a\u003e\u003c/code\u003e fails and throws an exception \u003ccode\u003ee\u003c/code\u003e (of type \u003ccode\u003ee\u003c/code\u003e), returns\n \u003ccode\u003e\u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e (e, r)\u003c/code\u003e where \u003ccode\u003er\u003c/code\u003e is the state of the failing \u003ccode\u003e\u003ca\u003eIter\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.IterIO.Iter",
          "name": "tryI",
          "package": "iterIO",
          "signature": "Iter t m a -\u003e Iter t m (Either (e, IterR t m a) a)",
          "source": "src/Data-IterIO-Iter.html#tryI",
          "type": "function"
        },
        "index": {
          "description": "If an Iter succeeds and returns returns Right If the Iter fails and throws an exception of type returns Left where is the state of the failing Iter",
          "hierarchy": "Data IterIO Iter",
          "module": "Data.IterIO.Iter",
          "name": "tryI",
          "normalized": "Iter a b c-\u003eIter a b(Either(d,IterR a b c)c)",
          "package": "iterIO",
          "signature": "Iter t m a-\u003eIter t m(Either(e,IterR t m a)a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Iter.html#v:tryI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA version of \u003ccode\u003e\u003ca\u003etryI\u003c/a\u003e\u003c/code\u003e that catches all exceptions.  Instead of\n returning the exception caught, it returns the failing \u003ccode\u003e\u003ca\u003eIterR\u003c/a\u003e\u003c/code\u003e\n (from which you can extract the exception if you really want it).\n The main use of this is for doing some kind of clean-up action,\n then re-throwing the exception with \u003ccode\u003e\u003ca\u003ereRunIter\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eFor example, the following is a possible implementation of \u003ccode\u003e\u003ca\u003efinallyI\u003c/a\u003e\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e finallyI iter cleanup = do\n   er \u003c- tryRI iter\n   cleanup\n   either reRunIter return er\n\u003c/pre\u003e",
          "module": "Data.IterIO.Iter",
          "name": "tryRI",
          "package": "iterIO",
          "signature": "Iter t m a -\u003e Iter t m (Either (IterR t m a) a)",
          "source": "src/Data-IterIO-Iter.html#tryRI",
          "type": "function"
        },
        "index": {
          "description": "version of tryI that catches all exceptions Instead of returning the exception caught it returns the failing IterR from which you can extract the exception if you really want it The main use of this is for doing some kind of clean-up action then re-throwing the exception with reRunIter For example the following is possible implementation of finallyI finallyI iter cleanup do er tryRI iter cleanup either reRunIter return er",
          "hierarchy": "Data IterIO Iter",
          "module": "Data.IterIO.Iter",
          "name": "tryRI",
          "normalized": "Iter a b c-\u003eIter a b(Either(IterR a b c)c)",
          "package": "iterIO",
          "partial": "RI",
          "signature": "Iter t m a-\u003eIter t m(Either(IterR t m a)a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Iter.html#v:tryRI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePlace data back onto the input stream, where it will be the next\n data consumed by subsequent \u003ccode\u003e\u003ca\u003eIter\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
          "module": "Data.IterIO.Iter",
          "name": "ungetI",
          "package": "iterIO",
          "signature": "t -\u003e Iter t m ()",
          "source": "src/Data-IterIO-Iter.html#ungetI",
          "type": "function"
        },
        "index": {
          "description": "Place data back onto the input stream where it will be the next data consumed by subsequent Iter",
          "hierarchy": "Data IterIO Iter",
          "module": "Data.IterIO.Iter",
          "name": "ungetI",
          "normalized": "a-\u003eIter a b()",
          "package": "iterIO",
          "signature": "t-\u003eIter t m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Iter.html#v:ungetI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eKeep running an \u003ccode\u003e\u003ca\u003eIter\u003c/a\u003e\u003c/code\u003e until either its output is not \u003ccode\u003e\u003ca\u003enull\u003c/a\u003e\u003c/code\u003e or\n we have reached EOF.  Return the the \u003ccode\u003e\u003ca\u003eIter\u003c/a\u003e\u003c/code\u003e's value on the last\n (i.e., usually non-\u003ccode\u003e\u003ca\u003enull\u003c/a\u003e\u003c/code\u003e) iteration.\n\u003c/p\u003e",
          "module": "Data.IterIO.Iter",
          "name": "whileNullI",
          "package": "iterIO",
          "signature": "Iter tIn m tOut -\u003e Iter tIn m tOut",
          "source": "src/Data-IterIO-Iter.html#whileNullI",
          "type": "function"
        },
        "index": {
          "description": "Keep running an Iter until either its output is not null or we have reached EOF Return the the Iter value on the last i.e usually non null iteration",
          "hierarchy": "Data IterIO Iter",
          "module": "Data.IterIO.Iter",
          "name": "whileNullI",
          "normalized": "Iter a b c-\u003eIter a b c",
          "package": "iterIO",
          "partial": "Null",
          "signature": "Iter tIn m tOut-\u003eIter tIn m tOut",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Iter.html#v:whileNullI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module contains basic iteratees and enumerators for working\n with strings, \u003ccode\u003e\u003ca\u003eListLike\u003c/a\u003e\u003c/code\u003e objects, file handles, and stream and\n datagram sockets.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.IterIO.ListLike",
          "name": "ListLike",
          "package": "iterIO",
          "source": "src/Data-IterIO-ListLike.html",
          "type": "module"
        },
        "index": {
          "description": "This module contains basic iteratees and enumerators for working with strings ListLike objects file handles and stream and datagram sockets",
          "hierarchy": "Data IterIO ListLike",
          "module": "Data.IterIO.ListLike",
          "name": "ListLike",
          "package": "iterIO",
          "partial": "List Like",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-ListLike.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA control request that returns the \u003ccode\u003e\u003ca\u003eSocket\u003c/a\u003e\u003c/code\u003e from an enclosing\n socket enumerator.\n\u003c/p\u003e",
          "module": "Data.IterIO.ListLike",
          "name": "GetSocketC",
          "package": "iterIO",
          "source": "src/Data-IterIO-ListLike.html#GetSocketC",
          "type": "data"
        },
        "index": {
          "description": "control request that returns the Socket from an enclosing socket enumerator",
          "hierarchy": "Data IterIO ListLike",
          "module": "Data.IterIO.ListLike",
          "name": "GetSocketC",
          "package": "iterIO",
          "partial": "Get Socket",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-ListLike.html#t:GetSocketC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA control command for seeking within a file, when a file is being\n enumerated.  Flushes the residual input data.\n\u003c/p\u003e",
          "module": "Data.IterIO.ListLike",
          "name": "SeekC",
          "package": "iterIO",
          "source": "src/Data-IterIO-ListLike.html#SeekC",
          "type": "data"
        },
        "index": {
          "description": "control command for seeking within file when file is being enumerated Flushes the residual input data",
          "hierarchy": "Data IterIO ListLike",
          "module": "Data.IterIO.ListLike",
          "name": "SeekC",
          "package": "iterIO",
          "partial": "Seek",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-ListLike.html#t:SeekC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA mode that determines the effect of \u003ccode\u003ehSeek\u003c/code\u003e \u003ccode\u003ehdl mode i\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.IterIO.ListLike",
          "name": "SeekMode",
          "package": "iterIO",
          "type": "data"
        },
        "index": {
          "description": "mode that determines the effect of hSeek hdl mode",
          "hierarchy": "Data IterIO ListLike",
          "module": "Data.IterIO.ListLike",
          "name": "SeekMode",
          "package": "iterIO",
          "partial": "Seek Mode",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-ListLike.html#t:SeekMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA control command (issued with \u003ccode\u003e\u003ccode\u003e\u003ca\u003ectlI\u003c/a\u003e\u003c/code\u003e SizeC\u003c/code\u003e) requesting the\n size of the current file being enumerated.\n\u003c/p\u003e",
          "module": "Data.IterIO.ListLike",
          "name": "SizeC",
          "package": "iterIO",
          "source": "src/Data-IterIO-ListLike.html#SizeC",
          "type": "data"
        },
        "index": {
          "description": "control command issued with ctlI SizeC requesting the size of the current file being enumerated",
          "hierarchy": "Data IterIO ListLike",
          "module": "Data.IterIO.ListLike",
          "name": "SizeC",
          "package": "iterIO",
          "partial": "Size",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-ListLike.html#t:SizeC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA control command for determining the current offset within a\n file.  Note that this subtracts the size of the residual input data\n from the offset in the file.  Thus, it will only be accurate when\n all left-over input data is from the current file.\n\u003c/p\u003e",
          "module": "Data.IterIO.ListLike",
          "name": "TellC",
          "package": "iterIO",
          "source": "src/Data-IterIO-ListLike.html#TellC",
          "type": "data"
        },
        "index": {
          "description": "control command for determining the current offset within file Note that this subtracts the size of the residual input data from the offset in the file Thus it will only be accurate when all left-over input data is from the current file",
          "hierarchy": "Data IterIO ListLike",
          "module": "Data.IterIO.ListLike",
          "name": "TellC",
          "package": "iterIO",
          "partial": "Tell",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-ListLike.html#t:TellC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe position of \u003ccode\u003ehdl\u003c/code\u003e is set to \u003ccode\u003ei\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.IterIO.ListLike",
          "name": "AbsoluteSeek",
          "package": "iterIO",
          "signature": "AbsoluteSeek",
          "type": "function"
        },
        "index": {
          "description": "the position of hdl is set to",
          "hierarchy": "Data IterIO ListLike",
          "module": "Data.IterIO.ListLike",
          "name": "AbsoluteSeek",
          "package": "iterIO",
          "partial": "Absolute Seek",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-ListLike.html#v:AbsoluteSeek"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.IterIO.ListLike",
          "name": "GetSocketC",
          "package": "iterIO",
          "signature": "GetSocketC",
          "source": "src/Data-IterIO-ListLike.html#GetSocketC",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data IterIO ListLike",
          "module": "Data.IterIO.ListLike",
          "name": "GetSocketC",
          "package": "iterIO",
          "partial": "Get Socket",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-ListLike.html#v:GetSocketC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe position of \u003ccode\u003ehdl\u003c/code\u003e is set to offset \u003ccode\u003ei\u003c/code\u003e\n from the current position.\n\u003c/p\u003e",
          "module": "Data.IterIO.ListLike",
          "name": "RelativeSeek",
          "package": "iterIO",
          "signature": "RelativeSeek",
          "type": "function"
        },
        "index": {
          "description": "the position of hdl is set to offset from the current position",
          "hierarchy": "Data IterIO ListLike",
          "module": "Data.IterIO.ListLike",
          "name": "RelativeSeek",
          "package": "iterIO",
          "partial": "Relative Seek",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-ListLike.html#v:RelativeSeek"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.IterIO.ListLike",
          "name": "SeekC",
          "package": "iterIO",
          "signature": "SeekC !SeekMode !Integer",
          "source": "src/Data-IterIO-ListLike.html#SeekC",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data IterIO ListLike",
          "module": "Data.IterIO.ListLike",
          "name": "SeekC",
          "package": "iterIO",
          "partial": "Seek",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-ListLike.html#v:SeekC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe position of \u003ccode\u003ehdl\u003c/code\u003e is set to offset \u003ccode\u003ei\u003c/code\u003e\n from the end of the file.\n\u003c/p\u003e",
          "module": "Data.IterIO.ListLike",
          "name": "SeekFromEnd",
          "package": "iterIO",
          "signature": "SeekFromEnd",
          "type": "function"
        },
        "index": {
          "description": "the position of hdl is set to offset from the end of the file",
          "hierarchy": "Data IterIO ListLike",
          "module": "Data.IterIO.ListLike",
          "name": "SeekFromEnd",
          "package": "iterIO",
          "partial": "Seek From End",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-ListLike.html#v:SeekFromEnd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.IterIO.ListLike",
          "name": "SizeC",
          "package": "iterIO",
          "signature": "SizeC",
          "source": "src/Data-IterIO-ListLike.html#SizeC",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data IterIO ListLike",
          "module": "Data.IterIO.ListLike",
          "name": "SizeC",
          "package": "iterIO",
          "partial": "Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-ListLike.html#v:SizeC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.IterIO.ListLike",
          "name": "TellC",
          "package": "iterIO",
          "signature": "TellC",
          "source": "src/Data-IterIO-ListLike.html#TellC",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data IterIO ListLike",
          "module": "Data.IterIO.ListLike",
          "name": "TellC",
          "package": "iterIO",
          "partial": "Tell",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-ListLike.html#v:TellC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn \u003ccode\u003e\u003ca\u003eListLike\u003c/a\u003e\u003c/code\u003e data that is at most the number of elements\n specified by the first argument, and at least one element unless\n EOF is encountered or 0 elements are requested, in which case\n \u003ccode\u003e\u003ca\u003emempty\u003c/a\u003e\u003c/code\u003e is returned.\n\u003c/p\u003e",
          "module": "Data.IterIO.ListLike",
          "name": "data0MaxI",
          "package": "iterIO",
          "signature": "Int -\u003e Iter t m t",
          "source": "src/Data-IterIO-ListLike.html#data0MaxI",
          "type": "function"
        },
        "index": {
          "description": "Return ListLike data that is at most the number of elements specified by the first argument and at least one element unless EOF is encountered or elements are requested in which case mempty is returned",
          "hierarchy": "Data IterIO ListLike",
          "module": "Data.IterIO.ListLike",
          "name": "data0MaxI",
          "normalized": "Int-\u003eIter a b a",
          "package": "iterIO",
          "partial": "Max",
          "signature": "Int-\u003eIter t m t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-ListLike.html#v:data0MaxI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn \u003ccode\u003e\u003ca\u003eListLike\u003c/a\u003e\u003c/code\u003e data that is at most the number of elements\n specified by the first argument, and at least one element (as long\n as a positive number is requested).  Throws an exception if a\n positive number of items is requested and an EOF is encountered.\n\u003c/p\u003e",
          "module": "Data.IterIO.ListLike",
          "name": "dataMaxI",
          "package": "iterIO",
          "signature": "Int -\u003e Iter t m t",
          "source": "src/Data-IterIO-ListLike.html#dataMaxI",
          "type": "function"
        },
        "index": {
          "description": "Return ListLike data that is at most the number of elements specified by the first argument and at least one element as long as positive number is requested Throws an exception if positive number of items is requested and an EOF is encountered",
          "hierarchy": "Data IterIO ListLike",
          "module": "Data.IterIO.ListLike",
          "name": "dataMaxI",
          "normalized": "Int-\u003eIter a b a",
          "package": "iterIO",
          "partial": "Max",
          "signature": "Int-\u003eIter t m t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-ListLike.html#v:dataMaxI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead datagrams (of up to 64KiB in size) from a socket and feed a\n list of strings (one for each datagram) into an Iteratee.\n\u003c/p\u003e",
          "module": "Data.IterIO.ListLike",
          "name": "enumDgram",
          "package": "iterIO",
          "signature": "Socket -\u003e Onum [t] m a",
          "source": "src/Data-IterIO-ListLike.html#enumDgram",
          "type": "function"
        },
        "index": {
          "description": "Read datagrams of up to KiB in size from socket and feed list of strings one for each datagram into an Iteratee",
          "hierarchy": "Data IterIO ListLike",
          "module": "Data.IterIO.ListLike",
          "name": "enumDgram",
          "normalized": "Socket-\u003eOnum[a]b c",
          "package": "iterIO",
          "partial": "Dgram",
          "signature": "Socket-\u003eOnum[t]m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-ListLike.html#v:enumDgram"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead datagrams from a socket and feed a list of (Bytestring,\n SockAddr) pairs (one for each datagram) into an Iteratee.\n\u003c/p\u003e",
          "module": "Data.IterIO.ListLike",
          "name": "enumDgramFrom",
          "package": "iterIO",
          "signature": "Socket -\u003e Onum [(t, SockAddr)] m a",
          "source": "src/Data-IterIO-ListLike.html#enumDgramFrom",
          "type": "function"
        },
        "index": {
          "description": "Read datagrams from socket and feed list of Bytestring SockAddr pairs one for each datagram into an Iteratee",
          "hierarchy": "Data IterIO ListLike",
          "module": "Data.IterIO.ListLike",
          "name": "enumDgramFrom",
          "normalized": "Socket-\u003eOnum[(a,SockAddr)]b c",
          "package": "iterIO",
          "partial": "Dgram From",
          "signature": "Socket-\u003eOnum[(t,SockAddr)]m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-ListLike.html#v:enumDgramFrom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEnumerate the contents of a file for an \u003ccode\u003e\u003ca\u003eIter\u003c/a\u003e\u003c/code\u003e taking input in\n any \u003ccode\u003e\u003ca\u003eListLikeIO\u003c/a\u003e\u003c/code\u003e type.  Note that the file is opened with\n \u003ccode\u003e\u003ca\u003eopenBinaryFile\u003c/a\u003e\u003c/code\u003e to ensure binary mode.\n\u003c/p\u003e",
          "module": "Data.IterIO.ListLike",
          "name": "enumFile",
          "package": "iterIO",
          "signature": "FilePath -\u003e Onum t m a",
          "source": "src/Data-IterIO-ListLike.html#enumFile",
          "type": "function"
        },
        "index": {
          "description": "Enumerate the contents of file for an Iter taking input in any ListLikeIO type Note that the file is opened with openBinaryFile to ensure binary mode",
          "hierarchy": "Data IterIO ListLike",
          "module": "Data.IterIO.ListLike",
          "name": "enumFile",
          "normalized": "FilePath-\u003eOnum a b c",
          "package": "iterIO",
          "partial": "File",
          "signature": "FilePath-\u003eOnum t m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-ListLike.html#v:enumFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEnumerate the contents of a file as a series of lazy\n \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003es.  (This is a type-restricted version of\n \u003ccode\u003e\u003ca\u003eenumFile\u003c/a\u003e\u003c/code\u003e.)\n\u003c/p\u003e",
          "module": "Data.IterIO.ListLike",
          "name": "enumFile'",
          "package": "iterIO",
          "signature": "FilePath -\u003e Onum ByteString m a",
          "source": "src/Data-IterIO-ListLike.html#enumFile%27",
          "type": "function"
        },
        "index": {
          "description": "Enumerate the contents of file as series of lazy ByteString This is type-restricted version of enumFile",
          "hierarchy": "Data IterIO ListLike",
          "module": "Data.IterIO.ListLike",
          "name": "enumFile'",
          "normalized": "FilePath-\u003eOnum ByteString a b",
          "package": "iterIO",
          "partial": "File'",
          "signature": "FilePath-\u003eOnum ByteString m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-ListLike.html#v:enumFile-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePuts a handle into binary mode with \u003ccode\u003e\u003ca\u003ehSetBinaryMode\u003c/a\u003e\u003c/code\u003e, then\n enumerates data read from the handle to feed an \u003ccode\u003e\u003ca\u003eIter\u003c/a\u003e\u003c/code\u003e with any\n \u003ccode\u003e\u003ca\u003eListLikeIO\u003c/a\u003e\u003c/code\u003e input type.\n\u003c/p\u003e",
          "module": "Data.IterIO.ListLike",
          "name": "enumHandle",
          "package": "iterIO",
          "signature": "Handle -\u003e Onum t m a",
          "source": "src/Data-IterIO-ListLike.html#enumHandle",
          "type": "function"
        },
        "index": {
          "description": "Puts handle into binary mode with hSetBinaryMode then enumerates data read from the handle to feed an Iter with any ListLikeIO input type",
          "hierarchy": "Data IterIO ListLike",
          "module": "Data.IterIO.ListLike",
          "name": "enumHandle",
          "normalized": "Handle-\u003eOnum a b c",
          "package": "iterIO",
          "partial": "Handle",
          "signature": "Handle-\u003eOnum t m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-ListLike.html#v:enumHandle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA variant of \u003ccode\u003e\u003ca\u003eenumHandle\u003c/a\u003e\u003c/code\u003e type restricted to input in the Lazy\n \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e format.\n\u003c/p\u003e",
          "module": "Data.IterIO.ListLike",
          "name": "enumHandle'",
          "package": "iterIO",
          "signature": "Handle -\u003e Onum ByteString m a",
          "source": "src/Data-IterIO-ListLike.html#enumHandle%27",
          "type": "function"
        },
        "index": {
          "description": "variant of enumHandle type restricted to input in the Lazy ByteString format",
          "hierarchy": "Data IterIO ListLike",
          "module": "Data.IterIO.ListLike",
          "name": "enumHandle'",
          "normalized": "Handle-\u003eOnum ByteString a b",
          "package": "iterIO",
          "partial": "Handle'",
          "signature": "Handle-\u003eOnum ByteString m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-ListLike.html#v:enumHandle-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFeeds an \u003ccode\u003e\u003ca\u003eIter\u003c/a\u003e\u003c/code\u003e with data from a file handle, using any input\n type in the \u003ccode\u003e\u003ca\u003eListLikeIO\u003c/a\u003e\u003c/code\u003e class.  Note that \u003ccode\u003eenumNonBinHandle\u003c/code\u003e\n uses the handle as is, unlike \u003ccode\u003e\u003ca\u003eenumHandle\u003c/a\u003e\u003c/code\u003e, and so can be used if\n you want to read the data in non-binary form.\n\u003c/p\u003e",
          "module": "Data.IterIO.ListLike",
          "name": "enumNonBinHandle",
          "package": "iterIO",
          "signature": "Handle -\u003e Onum t m a",
          "source": "src/Data-IterIO-ListLike.html#enumNonBinHandle",
          "type": "function"
        },
        "index": {
          "description": "Feeds an Iter with data from file handle using any input type in the ListLikeIO class Note that enumNonBinHandle uses the handle as is unlike enumHandle and so can be used if you want to read the data in non-binary form",
          "hierarchy": "Data IterIO ListLike",
          "module": "Data.IterIO.ListLike",
          "name": "enumNonBinHandle",
          "normalized": "Handle-\u003eOnum a b c",
          "package": "iterIO",
          "partial": "Non Bin Handle",
          "signature": "Handle-\u003eOnum t m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-ListLike.html#v:enumNonBinHandle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEnumerate standard input.\n\u003c/p\u003e",
          "module": "Data.IterIO.ListLike",
          "name": "enumStdin",
          "package": "iterIO",
          "signature": "Onum t m a",
          "source": "src/Data-IterIO-ListLike.html#enumStdin",
          "type": "function"
        },
        "index": {
          "description": "Enumerate standard input",
          "hierarchy": "Data IterIO ListLike",
          "module": "Data.IterIO.ListLike",
          "name": "enumStdin",
          "package": "iterIO",
          "partial": "Stdin",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-ListLike.html#v:enumStdin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead data from a stream (e.g., TCP) socket.\n\u003c/p\u003e",
          "module": "Data.IterIO.ListLike",
          "name": "enumStream",
          "package": "iterIO",
          "signature": "Socket -\u003e Onum t m a",
          "source": "src/Data-IterIO-ListLike.html#enumStream",
          "type": "function"
        },
        "index": {
          "description": "Read data from stream e.g TCP socket",
          "hierarchy": "Data IterIO ListLike",
          "module": "Data.IterIO.ListLike",
          "name": "enumStream",
          "normalized": "Socket-\u003eOnum a b c",
          "package": "iterIO",
          "partial": "Stream",
          "signature": "Socket-\u003eOnum t m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-ListLike.html#v:enumStream"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA handler function for the \u003ccode\u003e\u003ca\u003eSizeC\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eSeekC\u003c/a\u003e\u003c/code\u003e, and \u003ccode\u003e\u003ca\u003eTellC\u003c/a\u003e\u003c/code\u003e control\n requests.  \u003ccode\u003efileCtl\u003c/code\u003e is used internally by \u003ccode\u003e\u003ca\u003eenumFile\u003c/a\u003e\u003c/code\u003e and\n \u003ccode\u003e\u003ca\u003eenumHandle\u003c/a\u003e\u003c/code\u003e, and is exposed for similar enumerators to use.\n\u003c/p\u003e",
          "module": "Data.IterIO.ListLike",
          "name": "fileCtl",
          "package": "iterIO",
          "signature": "Handle -\u003e CtlHandler (Iter () m) t m a",
          "source": "src/Data-IterIO-ListLike.html#fileCtl",
          "type": "function"
        },
        "index": {
          "description": "handler function for the SizeC SeekC and TellC control requests fileCtl is used internally by enumFile and enumHandle and is exposed for similar enumerators to use",
          "hierarchy": "Data IterIO ListLike",
          "module": "Data.IterIO.ListLike",
          "name": "fileCtl",
          "normalized": "Handle-\u003eCtlHandler(Iter()a)b a c",
          "package": "iterIO",
          "partial": "Ctl",
          "signature": "Handle-\u003eCtlHandler(Iter()m)t m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-ListLike.html#v:fileCtl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePuts strings (or \u003ccode\u003e\u003ca\u003eListLikeIO\u003c/a\u003e\u003c/code\u003e data) to a file \u003ccode\u003e\u003ca\u003eHandle\u003c/a\u003e\u003c/code\u003e, then\n writes an EOF to the handle.\n\u003c/p\u003e\u003cp\u003eNote that this does not put the handle into binary mode.  To do\n this, you may need to call \u003ccode\u003e\u003ccode\u003e\u003ca\u003ehSetBinaryMode\u003c/a\u003e\u003c/code\u003e h \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e on the\n handle before using it with \u003ccode\u003ehandleI\u003c/code\u003e.  Otherwise, Haskell by\n default will treat the data as UTF-8.  (On the other hand, if the\n \u003ccode\u003e\u003ca\u003eHandle\u003c/a\u003e\u003c/code\u003e corresponds to a socket and the socket is being read in\n another thread, calling \u003ccode\u003e\u003ca\u003ehSetBinaryMode\u003c/a\u003e\u003c/code\u003e can cause deadlock, so in\n this case it is better to have the thread handling reads call\n \u003ccode\u003e\u003ca\u003ehSetBinaryMode\u003c/a\u003e\u003c/code\u003e.)\n\u003c/p\u003e\u003cp\u003eAlso note that Haskell by default buffers data written to\n \u003ccode\u003e\u003ca\u003eHandle\u003c/a\u003e\u003c/code\u003es.  For many network protocols this is a problem.  Don't\n forget to call \u003ccode\u003e\u003ccode\u003e\u003ca\u003ehSetBuffering\u003c/a\u003e\u003c/code\u003e h \u003ccode\u003e\u003ca\u003eNoBuffering\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e before passing a\n handle to \u003ccode\u003e\u003ca\u003ehandleI\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.IterIO.ListLike",
          "name": "handleI",
          "package": "iterIO",
          "signature": "Handle -\u003e Iter t m ()",
          "source": "src/Data-IterIO-ListLike.html#handleI",
          "type": "function"
        },
        "index": {
          "description": "Puts strings or ListLikeIO data to file Handle then writes an EOF to the handle Note that this does not put the handle into binary mode To do this you may need to call hSetBinaryMode True on the handle before using it with handleI Otherwise Haskell by default will treat the data as UTF-8 On the other hand if the Handle corresponds to socket and the socket is being read in another thread calling hSetBinaryMode can cause deadlock so in this case it is better to have the thread handling reads call hSetBinaryMode Also note that Haskell by default buffers data written to Handle For many network protocols this is problem Don forget to call hSetBuffering NoBuffering before passing handle to handleI",
          "hierarchy": "Data IterIO ListLike",
          "module": "Data.IterIO.ListLike",
          "name": "handleI",
          "normalized": "Handle-\u003eIter a b()",
          "package": "iterIO",
          "signature": "Handle-\u003eIter t m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-ListLike.html#v:handleI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eheadLI\u003c/a\u003e\u003c/code\u003e, but works for any \u003ccode\u003e\u003ca\u003eListLike\u003c/a\u003e\u003c/code\u003e data type.\n\u003c/p\u003e",
          "module": "Data.IterIO.ListLike",
          "name": "headI",
          "package": "iterIO",
          "signature": "Iter t m e",
          "source": "src/Data-IterIO-ListLike.html#headI",
          "type": "function"
        },
        "index": {
          "description": "Like headLI but works for any ListLike data type",
          "hierarchy": "Data IterIO ListLike",
          "module": "Data.IterIO.ListLike",
          "name": "headI",
          "package": "iterIO",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-ListLike.html#v:headI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the first element when the Iteratee data type is a list.\n\u003c/p\u003e",
          "module": "Data.IterIO.ListLike",
          "name": "headLI",
          "package": "iterIO",
          "signature": "Iter [a] m a",
          "source": "src/Data-IterIO-ListLike.html#headLI",
          "type": "function"
        },
        "index": {
          "description": "Return the first element when the Iteratee data type is list",
          "hierarchy": "Data IterIO ListLike",
          "module": "Data.IterIO.ListLike",
          "name": "headLI",
          "normalized": "Iter[a]b a",
          "package": "iterIO",
          "partial": "LI",
          "signature": "Iter[a]m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-ListLike.html#v:headLI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis inner enumerator is like \u003ccode\u003e\u003ca\u003einumNop\u003c/a\u003e\u003c/code\u003e in that it passes\n unmodified \u003ccode\u003e\u003ca\u003eChunk\u003c/a\u003e\u003c/code\u003es straight through to an iteratee.  However, it\n also logs the \u003ccode\u003e\u003ca\u003eChunk\u003c/a\u003e\u003c/code\u003es to a file (which can optionally be truncated\n or appended to, based on the second argument).\n\u003c/p\u003e",
          "module": "Data.IterIO.ListLike",
          "name": "inumLog",
          "package": "iterIO",
          "signature": "FilePath-\u003e Bool-\u003e Inum t t m a",
          "type": "function"
        },
        "index": {
          "description": "This inner enumerator is like inumNop in that it passes unmodified Chunk straight through to an iteratee However it also logs the Chunk to file which can optionally be truncated or appended to based on the second argument",
          "hierarchy": "Data IterIO ListLike",
          "module": "Data.IterIO.ListLike",
          "name": "inumLog",
          "normalized": "FilePath-\u003eBool-\u003eInum a a b c",
          "package": "iterIO",
          "partial": "Log",
          "signature": "FilePath-\u003eBool-\u003eInum t t m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-ListLike.html#v:inumLog"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn \u003ccode\u003e\u003ca\u003eInum\u003c/a\u003e\u003c/code\u003e that converts input in the lazy \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e format\n to strict \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
          "module": "Data.IterIO.ListLike",
          "name": "inumLtoS",
          "package": "iterIO",
          "signature": "Inum ByteString ByteString m a",
          "source": "src/Data-IterIO-ListLike.html#inumLtoS",
          "type": "function"
        },
        "index": {
          "description": "An Inum that converts input in the lazy ByteString format to strict ByteString",
          "hierarchy": "Data IterIO ListLike",
          "module": "Data.IterIO.ListLike",
          "name": "inumLtoS",
          "package": "iterIO",
          "partial": "Lto",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-ListLike.html#v:inumLtoS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFeed up to some number of list elements (bytes in the case of\n \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003es) to an \u003ccode\u003e\u003ca\u003eIter\u003c/a\u003e\u003c/code\u003e, or feed fewer if the \u003ccode\u003e\u003ca\u003eIter\u003c/a\u003e\u003c/code\u003e returns\n or an EOF is encountered.  The formulation \u003ccode\u003einumMax n \u003ccode\u003e\u003ca\u003e.|\u003c/a\u003e\u003c/code\u003e iter\u003c/code\u003e\n can be used to prevent \u003ccode\u003eiter\u003c/code\u003e from consuming unbounded amounts of\n input.\n\u003c/p\u003e",
          "module": "Data.IterIO.ListLike",
          "name": "inumMax",
          "package": "iterIO",
          "signature": "Int -\u003e Inum t t m a",
          "source": "src/Data-IterIO-ListLike.html#inumMax",
          "type": "function"
        },
        "index": {
          "description": "Feed up to some number of list elements bytes in the case of ByteString to an Iter or feed fewer if the Iter returns or an EOF is encountered The formulation inumMax iter can be used to prevent iter from consuming unbounded amounts of input",
          "hierarchy": "Data IterIO ListLike",
          "module": "Data.IterIO.ListLike",
          "name": "inumMax",
          "normalized": "Int-\u003eInum a a b c",
          "package": "iterIO",
          "partial": "Max",
          "signature": "Int-\u003eInum t t m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-ListLike.html#v:inumMax"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLog a copy of everything to standard error.  (\u003ccode\u003einumStderr =\n \u003ccode\u003e\u003ca\u003einumhLog\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003estderr\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e)\n\u003c/p\u003e",
          "module": "Data.IterIO.ListLike",
          "name": "inumStderr",
          "package": "iterIO",
          "signature": "Inum t t m a",
          "source": "src/Data-IterIO-ListLike.html#inumStderr",
          "type": "function"
        },
        "index": {
          "description": "Log copy of everything to standard error inumStderr inumhLog stderr",
          "hierarchy": "Data IterIO ListLike",
          "module": "Data.IterIO.ListLike",
          "name": "inumStderr",
          "package": "iterIO",
          "partial": "Stderr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-ListLike.html#v:inumStderr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe dual of \u003ccode\u003e\u003ca\u003einumLtoS\u003c/a\u003e\u003c/code\u003e--converts input from strict\n \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003es to lazy \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
          "module": "Data.IterIO.ListLike",
          "name": "inumStoL",
          "package": "iterIO",
          "signature": "Inum ByteString ByteString m a",
          "source": "src/Data-IterIO-ListLike.html#inumStoL",
          "type": "function"
        },
        "index": {
          "description": "The dual of inumLtoS converts input from strict ByteString to lazy ByteString",
          "hierarchy": "Data IterIO ListLike",
          "module": "Data.IterIO.ListLike",
          "name": "inumStoL",
          "package": "iterIO",
          "partial": "Sto",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-ListLike.html#v:inumStoL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFeed exactly some number of bytes to an \u003ccode\u003e\u003ca\u003eIter\u003c/a\u003e\u003c/code\u003e.  Throws an error\n if that many bytes are not available.\n\u003c/p\u003e",
          "module": "Data.IterIO.ListLike",
          "name": "inumTakeExact",
          "package": "iterIO",
          "signature": "Int -\u003e Inum t t m a",
          "source": "src/Data-IterIO-ListLike.html#inumTakeExact",
          "type": "function"
        },
        "index": {
          "description": "Feed exactly some number of bytes to an Iter Throws an error if that many bytes are not available",
          "hierarchy": "Data IterIO ListLike",
          "module": "Data.IterIO.ListLike",
          "name": "inumTakeExact",
          "normalized": "Int-\u003eInum a a b c",
          "package": "iterIO",
          "partial": "Take Exact",
          "signature": "Int-\u003eInum t t m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-ListLike.html#v:inumTakeExact"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003einumLog\u003c/a\u003e\u003c/code\u003e, but takes a writeable file handle rather than a\n file name.  Does not close the handle when done.\n\u003c/p\u003e",
          "module": "Data.IterIO.ListLike",
          "name": "inumhLog",
          "package": "iterIO",
          "signature": "Handle -\u003e Inum t t m a",
          "source": "src/Data-IterIO-ListLike.html#inumhLog",
          "type": "function"
        },
        "index": {
          "description": "Like inumLog but takes writeable file handle rather than file name Does not close the handle when done",
          "hierarchy": "Data IterIO ListLike",
          "module": "Data.IterIO.ListLike",
          "name": "inumhLog",
          "normalized": "Handle-\u003eInum a a b c",
          "package": "iterIO",
          "partial": "Log",
          "signature": "Handle-\u003eInum t t m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-ListLike.html#v:inumhLog"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\"Iterizes\" a file \u003ccode\u003e\u003ca\u003eHandle\u003c/a\u003e\u003c/code\u003e by turning into an \u003ccode\u003e\u003ca\u003eOnum\u003c/a\u003e\u003c/code\u003e (for\n reading) and an \u003ccode\u003e\u003ca\u003eIter\u003c/a\u003e\u003c/code\u003e (for writing).  Uses \u003ccode\u003e\u003ca\u003epairFinalizer\u003c/a\u003e\u003c/code\u003e to\n \u003ccode\u003e\u003ca\u003ehClose\u003c/a\u003e\u003c/code\u003e the \u003ccode\u003e\u003ca\u003eHandle\u003c/a\u003e\u003c/code\u003e when both the \u003ccode\u003e\u003ca\u003eIter\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eOnum\u003c/a\u003e\u003c/code\u003e are finished.\n Puts the handle into binary mode, but does not change the\n buffering.  As mentioned for \u003ccode\u003e\u003ca\u003ehandleI\u003c/a\u003e\u003c/code\u003e, Haskell's default buffering\n can cause problems for many network protocols.  Hence, you may wish\n to call \u003ccode\u003e\u003ccode\u003e\u003ca\u003ehSetBuffering\u003c/a\u003e\u003c/code\u003e h \u003ccode\u003e\u003ca\u003eNoBuffering\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e before \u003ccode\u003eiterHandle h\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.IterIO.ListLike",
          "name": "iterHandle",
          "package": "iterIO",
          "signature": "Handle -\u003e IO (Iter t m (), Onum t m a)",
          "source": "src/Data-IterIO-ListLike.html#iterHandle",
          "type": "function"
        },
        "index": {
          "description": "Iterizes file Handle by turning into an Onum for reading and an Iter for writing Uses pairFinalizer to hClose the Handle when both the Iter and Onum are finished Puts the handle into binary mode but does not change the buffering As mentioned for handleI Haskell default buffering can cause problems for many network protocols Hence you may wish to call hSetBuffering NoBuffering before iterHandle",
          "hierarchy": "Data IterIO ListLike",
          "module": "Data.IterIO.ListLike",
          "name": "iterHandle",
          "normalized": "Handle-\u003eIO(Iter a b(),Onum a b c)",
          "package": "iterIO",
          "partial": "Handle",
          "signature": "Handle-\u003eIO(Iter t m(),Onum t m a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-ListLike.html#v:iterHandle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\"Iterizes\" a stream \u003ccode\u003e\u003ca\u003eSocket\u003c/a\u003e\u003c/code\u003e by turning into an \u003ccode\u003e\u003ca\u003eOnum\u003c/a\u003e\u003c/code\u003e (for\n reading) and an \u003ccode\u003e\u003ca\u003eIter\u003c/a\u003e\u003c/code\u003e (for writing).  Uses \u003ccode\u003e\u003ca\u003epairFinalizer\u003c/a\u003e\u003c/code\u003e to\n \u003ccode\u003e\u003ca\u003esClose\u003c/a\u003e\u003c/code\u003e the \u003ccode\u003e\u003ca\u003eSocket\u003c/a\u003e\u003c/code\u003e when both the \u003ccode\u003e\u003ca\u003eIter\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eOnum\u003c/a\u003e\u003c/code\u003e are finished.\n\u003c/p\u003e",
          "module": "Data.IterIO.ListLike",
          "name": "iterStream",
          "package": "iterIO",
          "signature": "Socket -\u003e IO (Iter t m (), Onum t m a)",
          "source": "src/Data-IterIO-ListLike.html#iterStream",
          "type": "function"
        },
        "index": {
          "description": "Iterizes stream Socket by turning into an Onum for reading and an Iter for writing Uses pairFinalizer to sClose the Socket when both the Iter and Onum are finished",
          "hierarchy": "Data IterIO ListLike",
          "module": "Data.IterIO.ListLike",
          "name": "iterStream",
          "normalized": "Socket-\u003eIO(Iter a b(),Onum a b c)",
          "package": "iterIO",
          "partial": "Stream",
          "signature": "Socket-\u003eIO(Iter t m(),Onum t m a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-ListLike.html#v:iterStream"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn a line delimited by \\r, \\n, or \\r\\n.\n\u003c/p\u003e",
          "module": "Data.IterIO.ListLike",
          "name": "lineI",
          "package": "iterIO",
          "signature": "Iter t m t",
          "source": "src/Data-IterIO-ListLike.html#lineI",
          "type": "function"
        },
        "index": {
          "description": "Return line delimited by or",
          "hierarchy": "Data IterIO ListLike",
          "module": "Data.IterIO.ListLike",
          "name": "lineI",
          "package": "iterIO",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-ListLike.html#v:lineI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd a finalizer to run when an \u003ccode\u003e\u003ca\u003eIter\u003c/a\u003e\u003c/code\u003e has received an EOF and an\n \u003ccode\u003e\u003ca\u003eInum\u003c/a\u003e\u003c/code\u003e has finished.  This works regardless of the order in which\n the two events happen.\n\u003c/p\u003e",
          "module": "Data.IterIO.ListLike",
          "name": "pairFinalizer",
          "package": "iterIO",
          "signature": "Iter t m a-\u003e Inum t1 t2 m1 b-\u003e IO ()-\u003e IO (Iter t m a, Inum t1 t2 m1 b)",
          "type": "function"
        },
        "index": {
          "description": "Add finalizer to run when an Iter has received an EOF and an Inum has finished This works regardless of the order in which the two events happen",
          "hierarchy": "Data IterIO ListLike",
          "module": "Data.IterIO.ListLike",
          "name": "pairFinalizer",
          "normalized": "Iter a b c-\u003eInum a a b d-\u003eIO()-\u003eIO(Iter a b c,Inum a a b d)",
          "package": "iterIO",
          "partial": "Finalizer",
          "signature": "Iter t m a-\u003eInum t t m b-\u003eIO()-\u003eIO(Iter t m a,Inum t t m b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-ListLike.html#v:pairFinalizer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn Iteratee that puts data to a consumer function, then calls an\n eof function.  For instance, \u003ccode\u003e\u003ccode\u003e\u003ca\u003ehandleI\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e could be defined as:\n\u003c/p\u003e\u003cpre\u003e\n handleI :: (MonadIO m) =\u003e \u003ccode\u003e\u003ca\u003eHandle\u003c/a\u003e\u003c/code\u003e -\u003e \u003ccode\u003e\u003ca\u003eIter\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e m ()\n handleI h = putI (\u003ccode\u003e\u003ca\u003eliftIO\u003c/a\u003e\u003c/code\u003e . \u003ccode\u003e\u003ca\u003ehPut\u003c/a\u003e\u003c/code\u003e h) (\u003ccode\u003e\u003ca\u003eliftIO\u003c/a\u003e\u003c/code\u003e $ \u003ccode\u003e\u003ca\u003ehShutdown\u003c/a\u003e\u003c/code\u003e h 1)\n\u003c/pre\u003e",
          "module": "Data.IterIO.ListLike",
          "name": "putI",
          "package": "iterIO",
          "signature": "(t -\u003e Iter t m a) -\u003e Iter t m b -\u003e Iter t m ()",
          "source": "src/Data-IterIO-ListLike.html#putI",
          "type": "function"
        },
        "index": {
          "description": "An Iteratee that puts data to consumer function then calls an eof function For instance handleI could be defined as handleI MonadIO Handle Iter ByteString handleI putI liftIO hPut liftIO hShutdown",
          "hierarchy": "Data IterIO ListLike",
          "module": "Data.IterIO.ListLike",
          "name": "putI",
          "normalized": "(a-\u003eIter a b c)-\u003eIter a b d-\u003eIter a b()",
          "package": "iterIO",
          "signature": "(t-\u003eIter t m a)-\u003eIter t m b-\u003eIter t m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-ListLike.html#v:putI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003esafeHeadLI\u003c/a\u003e\u003c/code\u003e, but works for any \u003ccode\u003e\u003ca\u003eListLike\u003c/a\u003e\u003c/code\u003e data type.\n\u003c/p\u003e",
          "module": "Data.IterIO.ListLike",
          "name": "safeHeadI",
          "package": "iterIO",
          "signature": "Iter t m (Maybe e)",
          "source": "src/Data-IterIO-ListLike.html#safeHeadI",
          "type": "function"
        },
        "index": {
          "description": "Like safeHeadLI but works for any ListLike data type",
          "hierarchy": "Data IterIO ListLike",
          "module": "Data.IterIO.ListLike",
          "name": "safeHeadI",
          "package": "iterIO",
          "partial": "Head",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-ListLike.html#v:safeHeadI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e the first element when the Iteratee data type\n is a list, or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e on EOF.\n\u003c/p\u003e",
          "module": "Data.IterIO.ListLike",
          "name": "safeHeadLI",
          "package": "iterIO",
          "signature": "Iter [a] m (Maybe a)",
          "source": "src/Data-IterIO-ListLike.html#safeHeadLI",
          "type": "function"
        },
        "index": {
          "description": "Return Just the first element when the Iteratee data type is list or Nothing on EOF",
          "hierarchy": "Data IterIO ListLike",
          "module": "Data.IterIO.ListLike",
          "name": "safeHeadLI",
          "normalized": "Iter[a]b(Maybe a)",
          "package": "iterIO",
          "partial": "Head LI",
          "signature": "Iter[a]m(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-ListLike.html#v:safeHeadLI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003elineI\u003c/a\u003e\u003c/code\u003e, but returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e on EOF.\n\u003c/p\u003e",
          "module": "Data.IterIO.ListLike",
          "name": "safeLineI",
          "package": "iterIO",
          "signature": "Iter t m (Maybe t)",
          "source": "src/Data-IterIO-ListLike.html#safeLineI",
          "type": "function"
        },
        "index": {
          "description": "Like lineI but returns Nothing on EOF",
          "hierarchy": "Data IterIO ListLike",
          "module": "Data.IterIO.ListLike",
          "name": "safeLineI",
          "package": "iterIO",
          "partial": "Line",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-ListLike.html#v:safeLineI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSend datagrams using a supplied function.  The datagrams are fed\n as a list of packets, where each element of the list should be a\n separate datagram.  For example, to create an \u003ccode\u003e\u003ca\u003eIter\u003c/a\u003e\u003c/code\u003e from a\n connected UDP socket:\n\u003c/p\u003e\u003cpre\u003e\n udpI :: (\u003ccode\u003e\u003ca\u003eSendRecvString\u003c/a\u003e\u003c/code\u003e s, \u003ccode\u003e\u003ca\u003eMonadIO\u003c/a\u003e\u003c/code\u003e m) =\u003e \u003ccode\u003e\u003ca\u003eSocket\u003c/a\u003e\u003c/code\u003e -\u003e \u003ccode\u003e\u003ca\u003eIter\u003c/a\u003e\u003c/code\u003e s m ()\n udpI sock = sendI $ \u003ccode\u003e\u003ca\u003eliftIO\u003c/a\u003e\u003c/code\u003e . \u003ccode\u003e\u003ca\u003egenSend\u003c/a\u003e\u003c/code\u003e sock\n\u003c/pre\u003e",
          "module": "Data.IterIO.ListLike",
          "name": "sendI",
          "package": "iterIO",
          "signature": "(t -\u003e Iter [t] m a) -\u003e Iter [t] m ()",
          "source": "src/Data-IterIO-ListLike.html#sendI",
          "type": "function"
        },
        "index": {
          "description": "Send datagrams using supplied function The datagrams are fed as list of packets where each element of the list should be separate datagram For example to create an Iter from connected UDP socket udpI SendRecvString MonadIO Socket Iter udpI sock sendI liftIO genSend sock",
          "hierarchy": "Data IterIO ListLike",
          "module": "Data.IterIO.ListLike",
          "name": "sendI",
          "normalized": "(a-\u003eIter[a]b c)-\u003eIter[a]b()",
          "package": "iterIO",
          "signature": "(t-\u003eIter[t]m a)-\u003eIter[t]m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-ListLike.html#v:sendI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSends a list of packets to a datagram socket.\n\u003c/p\u003e",
          "module": "Data.IterIO.ListLike",
          "name": "sockDgramI",
          "package": "iterIO",
          "signature": "Socket -\u003e Maybe SockAddr -\u003e Iter [t] m ()",
          "source": "src/Data-IterIO-ListLike.html#sockDgramI",
          "type": "function"
        },
        "index": {
          "description": "Sends list of packets to datagram socket",
          "hierarchy": "Data IterIO ListLike",
          "module": "Data.IterIO.ListLike",
          "name": "sockDgramI",
          "normalized": "Socket-\u003eMaybe SockAddr-\u003eIter[a]b()",
          "package": "iterIO",
          "partial": "Dgram",
          "signature": "Socket-\u003eMaybe SockAddr-\u003eIter[t]m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-ListLike.html#v:sockDgramI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSends output to a stream socket.  Calls shutdown (e.g., to send a\n TCP FIN packet) upon receiving EOF.\n\u003c/p\u003e",
          "module": "Data.IterIO.ListLike",
          "name": "sockStreamI",
          "package": "iterIO",
          "signature": "Socket -\u003e Iter t m ()",
          "source": "src/Data-IterIO-ListLike.html#sockStreamI",
          "type": "function"
        },
        "index": {
          "description": "Sends output to stream socket Calls shutdown e.g to send TCP FIN packet upon receiving EOF",
          "hierarchy": "Data IterIO ListLike",
          "module": "Data.IterIO.ListLike",
          "name": "sockStreamI",
          "normalized": "Socket-\u003eIter a b()",
          "package": "iterIO",
          "partial": "Stream",
          "signature": "Socket-\u003eIter t m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-ListLike.html#v:sockStreamI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA handler for the \u003ccode\u003e\u003ca\u003eGetSocketC\u003c/a\u003e\u003c/code\u003e control request.\n\u003c/p\u003e",
          "module": "Data.IterIO.ListLike",
          "name": "socketCtl",
          "package": "iterIO",
          "signature": "Socket -\u003e CtlHandler (Iter () m) t m a",
          "source": "src/Data-IterIO-ListLike.html#socketCtl",
          "type": "function"
        },
        "index": {
          "description": "handler for the GetSocketC control request",
          "hierarchy": "Data IterIO ListLike",
          "module": "Data.IterIO.ListLike",
          "name": "socketCtl",
          "normalized": "Socket-\u003eCtlHandler(Iter()a)b a c",
          "package": "iterIO",
          "partial": "Ctl",
          "signature": "Socket-\u003eCtlHandler(Iter()m)t m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-ListLike.html#v:socketCtl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn \u003ccode\u003e\u003ca\u003eIter\u003c/a\u003e\u003c/code\u003e that uses \u003ccode\u003e\u003ca\u003ehPutStr\u003c/a\u003e\u003c/code\u003e to write all output to \u003ccode\u003e\u003ca\u003estdout\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.IterIO.ListLike",
          "name": "stdoutI",
          "package": "iterIO",
          "signature": "Iter t m ()",
          "source": "src/Data-IterIO-ListLike.html#stdoutI",
          "type": "function"
        },
        "index": {
          "description": "An Iter that uses hPutStr to write all output to stdout",
          "hierarchy": "Data IterIO ListLike",
          "module": "Data.IterIO.ListLike",
          "name": "stdoutI",
          "normalized": "Iter a b()",
          "package": "iterIO",
          "signature": "Iter t m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-ListLike.html#v:stdoutI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the next \u003ccode\u003elen\u003c/code\u003e elements of a \u003ccode\u003e\u003ca\u003eListLike\u003c/a\u003e\u003c/code\u003e data stream,\n unless an EOF is encountered, in which case fewer may be returned.\n Note the difference from \u003ccode\u003e\u003ca\u003edata0MaxI\u003c/a\u003e\u003c/code\u003e:  \u003ccode\u003e\u003ccode\u003e\u003ca\u003etakeI\u003c/a\u003e\u003c/code\u003e n\u003c/code\u003e will keep\n reading input until it has accumulated \u003ccode\u003en\u003c/code\u003e elements or seen an EOF,\n then return the data; \u003ccode\u003e\u003ccode\u003e\u003ca\u003edata0MaxI\u003c/a\u003e\u003c/code\u003e n\u003c/code\u003e will keep reading only until\n it has received any non-empty amount of data, even if the amount\n received is less than \u003ccode\u003en\u003c/code\u003e elements and there is no EOF.\n\u003c/p\u003e",
          "module": "Data.IterIO.ListLike",
          "name": "takeI",
          "package": "iterIO",
          "signature": "Int -\u003e Iter t m t",
          "source": "src/Data-IterIO-ListLike.html#takeI",
          "type": "function"
        },
        "index": {
          "description": "Return the next len elements of ListLike data stream unless an EOF is encountered in which case fewer may be returned Note the difference from data0MaxI takeI will keep reading input until it has accumulated elements or seen an EOF then return the data data0MaxI will keep reading only until it has received any non-empty amount of data even if the amount received is less than elements and there is no EOF",
          "hierarchy": "Data IterIO ListLike",
          "module": "Data.IterIO.ListLike",
          "name": "takeI",
          "normalized": "Int-\u003eIter a b a",
          "package": "iterIO",
          "signature": "Int-\u003eIter t m t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-ListLike.html#v:takeI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module contains functions to help parsing input from within\n \u003ccode\u003e\u003ca\u003eIter\u003c/a\u003e\u003c/code\u003es.  Many of the operators are either imported from\n \u003ca\u003eData.Applicative\u003c/a\u003e or inspired by \u003ca\u003eText.Parsec\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.IterIO.Parse",
          "name": "Parse",
          "package": "iterIO",
          "source": "src/Data-IterIO-Parse.html",
          "type": "module"
        },
        "index": {
          "description": "This module contains functions to help parsing input from within Iter Many of the operators are either imported from Data.Applicative or inspired by Text.Parsec",
          "hierarchy": "Data IterIO Parse",
          "module": "Data.IterIO.Parse",
          "name": "Parse",
          "package": "iterIO",
          "partial": "Parse",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Parse.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA functor with application, providing operations to\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e embed pure expressions (\u003ccode\u003e\u003ca\u003epure\u003c/a\u003e\u003c/code\u003e), and\n\u003c/li\u003e\u003cli\u003e sequence computations and combine their results (\u003ccode\u003e\u003ca\u003e\u003c*\u003e\u003c/a\u003e\u003c/code\u003e).\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eA minimal complete definition must include implementations of these\n functions satisfying the following laws:\n\u003c/p\u003e\u003cdl\u003e\u003cdt\u003e\u003cem\u003eidentity\u003c/em\u003e\u003c/dt\u003e\u003cdd\u003e\n      \u003ccode\u003e\u003ccode\u003e\u003ca\u003epure\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eid\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003e\u003c*\u003e\u003c/a\u003e\u003c/code\u003e v = v\u003c/code\u003e\n\u003c/dd\u003e\u003cdt\u003e\u003cem\u003ecomposition\u003c/em\u003e\u003c/dt\u003e\u003cdd\u003e\n      \u003ccode\u003e\u003ccode\u003e\u003ca\u003epure\u003c/a\u003e\u003c/code\u003e (.) \u003ccode\u003e\u003ca\u003e\u003c*\u003e\u003c/a\u003e\u003c/code\u003e u \u003ccode\u003e\u003ca\u003e\u003c*\u003e\u003c/a\u003e\u003c/code\u003e v \u003ccode\u003e\u003ca\u003e\u003c*\u003e\u003c/a\u003e\u003c/code\u003e w = u \u003ccode\u003e\u003ca\u003e\u003c*\u003e\u003c/a\u003e\u003c/code\u003e (v \u003ccode\u003e\u003ca\u003e\u003c*\u003e\u003c/a\u003e\u003c/code\u003e w)\u003c/code\u003e\n\u003c/dd\u003e\u003cdt\u003e\u003cem\u003ehomomorphism\u003c/em\u003e\u003c/dt\u003e\u003cdd\u003e\n      \u003ccode\u003e\u003ccode\u003e\u003ca\u003epure\u003c/a\u003e\u003c/code\u003e f \u003ccode\u003e\u003ca\u003e\u003c*\u003e\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003epure\u003c/a\u003e\u003c/code\u003e x = \u003ccode\u003e\u003ca\u003epure\u003c/a\u003e\u003c/code\u003e (f x)\u003c/code\u003e\n\u003c/dd\u003e\u003cdt\u003e\u003cem\u003einterchange\u003c/em\u003e\u003c/dt\u003e\u003cdd\u003e\n      \u003ccode\u003eu \u003ccode\u003e\u003ca\u003e\u003c*\u003e\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003epure\u003c/a\u003e\u003c/code\u003e y = \u003ccode\u003e\u003ca\u003epure\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003e$\u003c/a\u003e\u003c/code\u003e y) \u003ccode\u003e\u003ca\u003e\u003c*\u003e\u003c/a\u003e\u003c/code\u003e u\u003c/code\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003cp\u003eThe other methods have the following default definitions, which may\n be overridden with equivalent specialized implementations:\n\u003c/p\u003e\u003cpre\u003e\n      u \u003ccode\u003e\u003ca\u003e*\u003e\u003c/a\u003e\u003c/code\u003e v = \u003ccode\u003e\u003ca\u003epure\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003econst\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eid\u003c/a\u003e\u003c/code\u003e) \u003ccode\u003e\u003ca\u003e\u003c*\u003e\u003c/a\u003e\u003c/code\u003e u \u003ccode\u003e\u003ca\u003e\u003c*\u003e\u003c/a\u003e\u003c/code\u003e v\n      u \u003ccode\u003e\u003ca\u003e\u003c*\u003c/a\u003e\u003c/code\u003e v = \u003ccode\u003e\u003ca\u003epure\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003econst\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003e\u003c*\u003e\u003c/a\u003e\u003c/code\u003e u \u003ccode\u003e\u003ca\u003e\u003c*\u003e\u003c/a\u003e\u003c/code\u003e v\n\u003c/pre\u003e\u003cp\u003eAs a consequence of these laws, the \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e instance for \u003ccode\u003ef\u003c/code\u003e will satisfy\n\u003c/p\u003e\u003cpre\u003e\n      \u003ccode\u003e\u003ca\u003efmap\u003c/a\u003e\u003c/code\u003e f x = \u003ccode\u003e\u003ca\u003epure\u003c/a\u003e\u003c/code\u003e f \u003ccode\u003e\u003ca\u003e\u003c*\u003e\u003c/a\u003e\u003c/code\u003e x\n\u003c/pre\u003e\u003cp\u003eIf \u003ccode\u003ef\u003c/code\u003e is also a \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e, it should satisfy \u003ccode\u003e\u003ccode\u003e\u003ca\u003epure\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e and\n \u003ccode\u003e(\u003ccode\u003e\u003ca\u003e\u003c*\u003e\u003c/a\u003e\u003c/code\u003e) = \u003ccode\u003e\u003ca\u003eap\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e (which implies that \u003ccode\u003e\u003ca\u003epure\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003e\u003c*\u003e\u003c/a\u003e\u003c/code\u003e satisfy the\n applicative functor laws).\n\u003c/p\u003e",
          "module": "Data.IterIO.Parse",
          "name": "Applicative",
          "package": "iterIO",
          "type": "class"
        },
        "index": {
          "description": "functor with application providing operations to embed pure expressions pure and sequence computations and combine their results minimal complete definition must include implementations of these functions satisfying the following laws identity pure id composition pure homomorphism pure pure pure interchange pure pure The other methods have the following default definitions which may be overridden with equivalent specialized implementations pure const id pure const As consequence of these laws the Functor instance for will satisfy fmap pure If is also Monad it should satisfy pure return and ap which implies that pure and satisfy the applicative functor laws",
          "hierarchy": "Data IterIO Parse",
          "module": "Data.IterIO.Parse",
          "name": "Applicative",
          "package": "iterIO",
          "partial": "Applicative",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Parse.html#t:Applicative"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003efa $\u003e b = b \u003c$ fa\u003c/code\u003e -- replaces the output value of a functor\n with some pure value.  Has the same fixity as \u003ccode\u003e\u003ca\u003e\u003c$\u003e\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003e\u003c$\u003c/a\u003e\u003c/code\u003e,\n namely:\n\u003c/p\u003e\u003cpre\u003e infixl 4 $\u003e\n\u003c/pre\u003e",
          "module": "Data.IterIO.Parse",
          "name": "($\u003e)",
          "package": "iterIO",
          "signature": "f a -\u003e b -\u003e f b",
          "source": "src/Data-IterIO-Parse.html#%24%3E",
          "type": "function"
        },
        "index": {
          "description": "fa fa replaces the output value of functor with some pure value Has the same fixity as and namely infixl",
          "hierarchy": "Data IterIO Parse",
          "module": "Data.IterIO.Parse",
          "name": "($\u003e) $\u003e",
          "normalized": "a b-\u003ec-\u003ea c",
          "package": "iterIO",
          "signature": "f a-\u003eb-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Parse.html#v:-36--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSequence actions, discarding the value of the first argument.\n\u003c/p\u003e",
          "module": "Data.IterIO.Parse",
          "name": "(*\u003e)",
          "package": "iterIO",
          "signature": "f a -\u003e f b -\u003e f b",
          "type": "method"
        },
        "index": {
          "description": "Sequence actions discarding the value of the first argument",
          "hierarchy": "Data IterIO Parse",
          "module": "Data.IterIO.Parse",
          "name": "(*\u003e) *\u003e",
          "normalized": "a b-\u003ea c-\u003ea c",
          "package": "iterIO",
          "signature": "f a-\u003ef b-\u003ef b",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Parse.html#v:-42--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn infix synonym for \u003ccode\u003e\u003ca\u003emultiParse\u003c/a\u003e\u003c/code\u003e that allows LL(*) parsing of\n alternatives by executing both Iteratees on input chunks as they\n arrive.  This is similar to the \u003ccode\u003e\u003c|\u003e\u003c/code\u003e method of the\n \u003ccode\u003e\u003ccode\u003eAlternative\u003c/code\u003e\u003c/code\u003e class in \u003ca\u003eControl.Applicative\u003c/a\u003e, but the\n \u003ccode\u003e\u003ccode\u003eAlternative\u003c/code\u003e\u003c/code\u003e operator has left fixity, while for efficiency this\n one has:\n\u003c/p\u003e\u003cpre\u003e infixr 3 \u003c|\u003e\n\u003c/pre\u003e",
          "module": "Data.IterIO.Parse",
          "name": "(\u003c|\u003e)",
          "package": "iterIO",
          "signature": "Iter t m a -\u003e Iter t m a -\u003e Iter t m a",
          "source": "src/Data-IterIO-Parse.html#%3C%7C%3E",
          "type": "function"
        },
        "index": {
          "description": "An infix synonym for multiParse that allows LL parsing of alternatives by executing both Iteratees on input chunks as they arrive This is similar to the method of the Alternative class in Control.Applicative but the Alternative operator has left fixity while for efficiency this one has infixr",
          "hierarchy": "Data IterIO Parse",
          "module": "Data.IterIO.Parse",
          "name": "(\u003c|\u003e) \u003c|\u003e",
          "normalized": "Iter a b c-\u003eIter a b c-\u003eIter a b c",
          "package": "iterIO",
          "signature": "Iter t m a-\u003eIter t m a-\u003eIter t m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Parse.html#v:-60--124--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReplace all locations in the input with the same value.\n The default definition is \u003ccode\u003e\u003ccode\u003e\u003ca\u003efmap\u003c/a\u003e\u003c/code\u003e . \u003ccode\u003e\u003ca\u003econst\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e, but this may be\n overridden with a more efficient version.\n\u003c/p\u003e",
          "module": "Data.IterIO.Parse",
          "name": "(\u003c$)",
          "package": "iterIO",
          "signature": "forall a b.  a -\u003e f b -\u003e f a",
          "type": "function"
        },
        "index": {
          "description": "Replace all locations in the input with the same value The default definition is fmap const but this may be overridden with more efficient version",
          "hierarchy": "Data IterIO Parse",
          "module": "Data.IterIO.Parse",
          "name": "(\u003c$) \u003c$",
          "normalized": "a b c b-\u003ed e-\u003ed b",
          "package": "iterIO",
          "signature": "forall a b. a-\u003ef b-\u003ef a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Parse.html#v:-60--36-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn infix synonym for \u003ccode\u003e\u003ca\u003efmap\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.IterIO.Parse",
          "name": "(\u003c$\u003e)",
          "package": "iterIO",
          "signature": "(a -\u003e b) -\u003e f a -\u003e f b",
          "type": "function"
        },
        "index": {
          "description": "An infix synonym for fmap",
          "hierarchy": "Data IterIO Parse",
          "module": "Data.IterIO.Parse",
          "name": "(\u003c$\u003e) \u003c$\u003e",
          "normalized": "(a-\u003eb)-\u003ec a-\u003ec b",
          "package": "iterIO",
          "signature": "(a-\u003eb)-\u003ef a-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Parse.html#v:-60--36--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSequence actions, discarding the value of the second argument.\n\u003c/p\u003e",
          "module": "Data.IterIO.Parse",
          "name": "(\u003c*)",
          "package": "iterIO",
          "signature": "f a -\u003e f b -\u003e f a",
          "type": "method"
        },
        "index": {
          "description": "Sequence actions discarding the value of the second argument",
          "hierarchy": "Data IterIO Parse",
          "module": "Data.IterIO.Parse",
          "name": "(\u003c*) \u003c*",
          "normalized": "a b-\u003ea c-\u003ea b",
          "package": "iterIO",
          "signature": "f a-\u003ef b-\u003ef a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Parse.html#v:-60--42-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA variant of \u003ccode\u003e\u003ca\u003e\u003c*\u003e\u003c/a\u003e\u003c/code\u003e with the arguments reversed.\n\u003c/p\u003e",
          "module": "Data.IterIO.Parse",
          "name": "(\u003c**\u003e)",
          "package": "iterIO",
          "signature": "f a -\u003e f (a -\u003e b) -\u003e f b",
          "type": "function"
        },
        "index": {
          "description": "variant of with the arguments reversed",
          "hierarchy": "Data IterIO Parse",
          "module": "Data.IterIO.Parse",
          "name": "(\u003c**\u003e) \u003c**\u003e",
          "normalized": "a b-\u003ea(b-\u003ec)-\u003ea c",
          "package": "iterIO",
          "signature": "f a-\u003ef(a-\u003eb)-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Parse.html#v:-60--42--42--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSequential application.\n\u003c/p\u003e",
          "module": "Data.IterIO.Parse",
          "name": "(\u003c*\u003e)",
          "package": "iterIO",
          "signature": "f (a -\u003e b) -\u003e f a -\u003e f b",
          "type": "method"
        },
        "index": {
          "description": "Sequential application",
          "hierarchy": "Data IterIO Parse",
          "module": "Data.IterIO.Parse",
          "name": "(\u003c*\u003e) \u003c*\u003e",
          "normalized": "a(b-\u003ec)-\u003ea b-\u003ea c",
          "package": "iterIO",
          "signature": "f(a-\u003eb)-\u003ef a-\u003ef b",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Parse.html#v:-60--42--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003emappend\u003c/a\u003e\u003c/code\u003e the result of two \u003ccode\u003e\u003ca\u003eApplicative\u003c/a\u003e\u003c/code\u003e types returning\n \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e types (\u003ccode\u003e\u003c++\u003e = \u003ccode\u003e\u003ca\u003eliftA2\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003emappend\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e).  Has the same fixity\n as \u003ccode\u003e\u003ca\u003e++\u003c/a\u003e\u003c/code\u003e, namely:\n\u003c/p\u003e\u003cpre\u003e infixr 5 \u003c++\u003e\n\u003c/pre\u003e",
          "module": "Data.IterIO.Parse",
          "name": "(\u003c++\u003e)",
          "package": "iterIO",
          "signature": "f t -\u003e f t -\u003e f t",
          "source": "src/Data-IterIO-Parse.html#%3C%2B%2B%3E",
          "type": "function"
        },
        "index": {
          "description": "mappend the result of two Applicative types returning Monoid types liftA2 mappend Has the same fixity as namely infixr",
          "hierarchy": "Data IterIO Parse",
          "module": "Data.IterIO.Parse",
          "name": "(\u003c++\u003e) \u003c++\u003e",
          "normalized": "a b-\u003ea b-\u003ea b",
          "package": "iterIO",
          "signature": "f t-\u003ef t-\u003ef t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Parse.html#v:-60--43--43--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eiter \u003c?\u003e token\u003c/code\u003e replaces any kind of parse failure in \u003ccode\u003eiter\u003c/code\u003e\n with an exception equivalent to calling \u003ccode\u003e\u003ccode\u003e\u003ca\u003eexpectedI\u003c/a\u003e\u003c/code\u003e prefix token\u003c/code\u003e\n where \u003ccode\u003eprefix\u003c/code\u003e is a prefix of the input that was fed to \u003ccode\u003eiter\u003c/code\u003e and\n caused it to fail.\n\u003c/p\u003e\u003cp\u003eHas fixity:\n\u003c/p\u003e\u003cpre\u003e infix 0 \u003c?\u003e\n\u003c/pre\u003e",
          "module": "Data.IterIO.Parse",
          "name": "(\u003c?\u003e)",
          "package": "iterIO",
          "signature": "Iter t m a -\u003e String -\u003e Iter t m a",
          "source": "src/Data-IterIO-Parse.html#%3C%3F%3E",
          "type": "function"
        },
        "index": {
          "description": "iter token replaces any kind of parse failure in iter with an exception equivalent to calling expectedI prefix token where prefix is prefix of the input that was fed to iter and caused it to fail Has fixity infix",
          "hierarchy": "Data IterIO Parse",
          "module": "Data.IterIO.Parse",
          "name": "(\u003c?\u003e) \u003c?\u003e",
          "normalized": "Iter a b c-\u003eString-\u003eIter a b c",
          "package": "iterIO",
          "signature": "Iter t m a-\u003eString-\u003eIter t m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Parse.html#v:-60--63--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003econs\u003c/a\u003e\u003c/code\u003e an \u003ccode\u003e\u003ca\u003eApplicative\u003c/a\u003e\u003c/code\u003e type onto an an \u003ccode\u003e\u003ca\u003eApplicative\u003c/a\u003e\u003c/code\u003e\n \u003ccode\u003e\u003ca\u003eListLike\u003c/a\u003e\u003c/code\u003e type (\u003ccode\u003e\u003c:\u003e = \u003ccode\u003e\u003ca\u003eliftA2\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003econs\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e).  Has the same\n fixity as \u003ccode\u003e:\u003c/code\u003e, namely:\n\u003c/p\u003e\u003cpre\u003e infixr 5 \u003c:\u003e\n\u003c/pre\u003e",
          "module": "Data.IterIO.Parse",
          "name": "(\u003c:\u003e)",
          "package": "iterIO",
          "signature": "f e -\u003e f t -\u003e f t",
          "source": "src/Data-IterIO-Parse.html#%3C%3A%3E",
          "type": "function"
        },
        "index": {
          "description": "cons an Applicative type onto an an Applicative ListLike type liftA2 cons Has the same fixity as namely infixr",
          "hierarchy": "Data IterIO Parse",
          "module": "Data.IterIO.Parse",
          "name": "(\u003c:\u003e) \u003c:\u003e",
          "normalized": "a b-\u003ea c-\u003ea c",
          "package": "iterIO",
          "signature": "f e-\u003ef t-\u003ef t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Parse.html#v:-60-:-62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e(f \u003e$\u003e a) t\u003c/code\u003e is equivalent to \u003ccode\u003ef t \u003ccode\u003e\u003ca\u003e\u003c$\u003e\u003c/a\u003e\u003c/code\u003e a\u003c/code\u003e (where \u003ccode\u003e\u003ca\u003e\u003c$\u003e\u003c/a\u003e\u003c/code\u003e is and\n infix alias for \u003ccode\u003e\u003ca\u003efmap\u003c/a\u003e\u003c/code\u003e).  Particularly useful with infix\n combinators such as \u003ccode\u003e\u003ca\u003e\\/\u003c/a\u003e\u003c/code\u003e and `\u003ccode\u003e\u003ca\u003eorEmpty\u003c/a\u003e\u003c/code\u003e` when chaining parse\n actions.  See examples at \u003ccode\u003e\u003ca\u003e\\/\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eorEmpty\u003c/a\u003e\u003c/code\u003e.  Note \u003ccode\u003e\u003ca\u003efmap\u003c/a\u003e\u003c/code\u003e is not\n always the most efficient solution (see an example in the\n description of \u003ccode\u003e\u003ca\u003e\\/\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e\u003cp\u003eHas fixity:\n\u003c/p\u003e\u003cpre\u003e infixl 3 \u003e$\u003e\n\u003c/pre\u003e",
          "module": "Data.IterIO.Parse",
          "name": "(\u003e$\u003e)",
          "package": "iterIO",
          "signature": "(t -\u003e a -\u003e b) -\u003e f a -\u003e t -\u003e f b",
          "source": "src/Data-IterIO-Parse.html#%3E%24%3E",
          "type": "function"
        },
        "index": {
          "description": "is equivalent to where is and infix alias for fmap Particularly useful with infix combinators such as and orEmpty when chaining parse actions See examples at and orEmpty Note fmap is not always the most efficient solution see an example in the description of Has fixity infixl",
          "hierarchy": "Data IterIO Parse",
          "module": "Data.IterIO.Parse",
          "name": "(\u003e$\u003e) \u003e$\u003e",
          "normalized": "(a-\u003eb-\u003ec)-\u003ed b-\u003ea-\u003ed c",
          "package": "iterIO",
          "signature": "(t-\u003ea-\u003eb)-\u003ef a-\u003et-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Parse.html#v:-62--36--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn infix synonym for \u003ccode\u003e\u003ca\u003eifNoParse\u003c/a\u003e\u003c/code\u003e that allows LL(*) parsing of\n alternatives by keeping a copy of input data consumed by the first\n Iteratee so as to backtrack and execute the second Iteratee if the\n first one fails.  Returns a function that takes a continuation for\n the first \u003ccode\u003e\u003ca\u003eIter\u003c/a\u003e\u003c/code\u003e, should it succeed.  The code:\n\u003c/p\u003e\u003cpre\u003e     iter1 \\/ iter2 $ \\iter1Result -\u003e doSomethingWith iter1Result\n\u003c/pre\u003e\u003cp\u003eExecutes \u003ccode\u003eiter1\u003c/code\u003e (saving a copy of the input for backtracking).  If\n \u003ccode\u003eiter1\u003c/code\u003e fails with an exception of class \u003ccode\u003eIterNoParse\u003c/code\u003e, then the\n input is re-wound and fed to \u003ccode\u003eiter2\u003c/code\u003e.  On the other hand, if\n \u003ccode\u003eiter1\u003c/code\u003e succeeds and returns \u003ccode\u003eiter1Result\u003c/code\u003e, then the saved input is\n discarded (as \u003ccode\u003eiter2\u003c/code\u003e will not need to be run) and the result of\n \u003ccode\u003eiter1\u003c/code\u003e is fed to function \u003ccode\u003edoSomethingWith\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eFor example, to build up a list of results of executing \u003ccode\u003eiter\u003c/code\u003e, one\n could implement a type-restricted version of \u003ccode\u003e\u003ca\u003emany\u003c/a\u003e\u003c/code\u003e as follows:\n\u003c/p\u003e\u003cpre\u003e\n   myMany :: (ChunkData t, Monad m) =\u003e Iter t m a -\u003e Iter t m [a]\n   myMany iter = iter \\/ return [] \u003ccode\u003e\u003ca\u003e$\u003c/a\u003e\u003c/code\u003e \\r -\u003e \u003ccode\u003e\u003ca\u003efmap\u003c/a\u003e\u003c/code\u003e ((:) r) (myMany iter)\n\u003c/pre\u003e\u003cp\u003eIn other words, \u003ccode\u003emyMany\u003c/code\u003e tries running \u003ccode\u003eiter\u003c/code\u003e.  If \u003ccode\u003eiter\u003c/code\u003e fails,\n then \u003ccode\u003emyMany\u003c/code\u003e returns the empty list.  If \u003ccode\u003eiter\u003c/code\u003e succeeds, its\n result \u003ccode\u003er\u003c/code\u003e is added to the head of the list returned by calling\n \u003ccode\u003emyMany\u003c/code\u003e recursively.  This idiom of partially applying a binary\n funciton to a result and then applying the resulting function to an\n \u003ccode\u003e\u003ca\u003eIter\u003c/a\u003e\u003c/code\u003e via \u003ccode\u003e\u003ca\u003efmap\u003c/a\u003e\u003c/code\u003e is so common that there is an infix operator for\n it, \u003ccode\u003e\u003ccode\u003e\u003ca\u003e\u003e$\u003e\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.  Thus, the above code can be written:\n\u003c/p\u003e\u003cpre\u003e\n   myMany iter = iter \\/ return [] \u003ccode\u003e\u003ca\u003e$\u003c/a\u003e\u003c/code\u003e (:) \u003ccode\u003e\u003ca\u003e\u003e$\u003e\u003c/a\u003e\u003c/code\u003e myMany iter\n\u003c/pre\u003e\u003cp\u003eOf course, using \u003ccode\u003e\u003ca\u003efmap\u003c/a\u003e\u003c/code\u003e is not the most efficient way to implement\n \u003ccode\u003emyMany\u003c/code\u003e.  If you are going to use this pattern for something\n performance critical, you should use an accumulator rather than\n build up long chains of \u003ccode\u003e\u003ca\u003efmap\u003c/a\u003e\u003c/code\u003es.  A faster implementation would be:\n\u003c/p\u003e\u003cpre\u003e\n   myMany iter = loop id\n       where loop ac = iter \\/ return (acc []) \u003ccode\u003e\u003ca\u003e$\u003c/a\u003e\u003c/code\u003e a -\u003e loop (acc . (a :))\n\u003c/pre\u003e\u003cp\u003e\u003ccode\u003e\\/\u003c/code\u003e has fixity:\n\u003c/p\u003e\u003cpre\u003e infix 2 \\/\n\u003c/pre\u003e",
          "module": "Data.IterIO.Parse",
          "name": "(\\/)",
          "package": "iterIO",
          "signature": "Iter t m a -\u003e Iter t m b -\u003e (a -\u003e Iter t m b) -\u003e Iter t m b",
          "source": "src/Data-IterIO-Parse.html#%5C%2F",
          "type": "function"
        },
        "index": {
          "description": "An infix synonym for ifNoParse that allows LL parsing of alternatives by keeping copy of input data consumed by the first Iteratee so as to backtrack and execute the second Iteratee if the first one fails Returns function that takes continuation for the first Iter should it succeed The code iter1 iter2 iter1Result doSomethingWith iter1Result Executes iter1 saving copy of the input for backtracking If iter1 fails with an exception of class IterNoParse then the input is re-wound and fed to iter2 On the other hand if iter1 succeeds and returns iter1Result then the saved input is discarded as iter2 will not need to be run and the result of iter1 is fed to function doSomethingWith For example to build up list of results of executing iter one could implement type-restricted version of many as follows myMany ChunkData Monad Iter Iter myMany iter iter return fmap myMany iter In other words myMany tries running iter If iter fails then myMany returns the empty list If iter succeeds its result is added to the head of the list returned by calling myMany recursively This idiom of partially applying binary funciton to result and then applying the resulting function to an Iter via fmap is so common that there is an infix operator for it Thus the above code can be written myMany iter iter return myMany iter Of course using fmap is not the most efficient way to implement myMany If you are going to use this pattern for something performance critical you should use an accumulator rather than build up long chains of fmap faster implementation would be myMany iter loop id where loop ac iter return acc loop acc has fixity infix",
          "hierarchy": "Data IterIO Parse",
          "module": "Data.IterIO.Parse",
          "name": "(\\/) \\/",
          "normalized": "Iter a b c-\u003eIter a b d-\u003e(c-\u003eIter a b d)-\u003eIter a b d",
          "package": "iterIO",
          "signature": "Iter t m a-\u003eIter t m b-\u003e(a-\u003eIter t m b)-\u003eIter t m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Parse.html#v:-92--47-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead input that exactly matches a character.\n\u003c/p\u003e",
          "module": "Data.IterIO.Parse",
          "name": "char",
          "package": "iterIO",
          "signature": "Char -\u003e Iter t m e",
          "source": "src/Data-IterIO-Parse.html#char",
          "type": "function"
        },
        "index": {
          "description": "Read input that exactly matches character",
          "hierarchy": "Data IterIO Parse",
          "module": "Data.IterIO.Parse",
          "name": "char",
          "normalized": "Char-\u003eIter a b c",
          "package": "iterIO",
          "signature": "Char-\u003eIter t m e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Parse.html#v:char"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003econcatI\u003c/a\u003e\u003c/code\u003e, but fails if the \u003ccode\u003e\u003ca\u003eIter\u003c/a\u003e\u003c/code\u003e doesn't return at least\n once.\n\u003c/p\u003e",
          "module": "Data.IterIO.Parse",
          "name": "concat1I",
          "package": "iterIO",
          "signature": "Iter t m s -\u003e Iter t m s",
          "source": "src/Data-IterIO-Parse.html#concat1I",
          "type": "function"
        },
        "index": {
          "description": "Like concatI but fails if the Iter doesn return at least once",
          "hierarchy": "Data IterIO Parse",
          "module": "Data.IterIO.Parse",
          "name": "concat1I",
          "normalized": "Iter a b c-\u003eIter a b c",
          "package": "iterIO",
          "signature": "Iter t m s-\u003eIter t m s",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Parse.html#v:concat1I"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepeatedly execute an \u003ccode\u003e\u003ca\u003eIter\u003c/a\u003e\u003c/code\u003e returning a \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003emappend\u003c/a\u003e\u003c/code\u003e\n all the results in a right fold.\n\u003c/p\u003e",
          "module": "Data.IterIO.Parse",
          "name": "concatI",
          "package": "iterIO",
          "signature": "Iter t m s -\u003e Iter t m s",
          "source": "src/Data-IterIO-Parse.html#concatI",
          "type": "function"
        },
        "index": {
          "description": "Repeatedly execute an Iter returning Monoid and mappend all the results in right fold",
          "hierarchy": "Data IterIO Parse",
          "module": "Data.IterIO.Parse",
          "name": "concatI",
          "normalized": "Iter a b c-\u003eIter a b c",
          "package": "iterIO",
          "signature": "Iter t m s-\u003eIter t m s",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Parse.html#v:concatI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA version of \u003ccode\u003e\u003ca\u003econcatI\u003c/a\u003e\u003c/code\u003e that takes a minimum and maximum number of\n items to parse.\n\u003c/p\u003e",
          "module": "Data.IterIO.Parse",
          "name": "concatMinMaxI",
          "package": "iterIO",
          "signature": "Int-\u003e Int-\u003e Iter t m s-\u003e Iter t m s",
          "type": "function"
        },
        "index": {
          "description": "version of concatI that takes minimum and maximum number of items to parse",
          "hierarchy": "Data IterIO Parse",
          "module": "Data.IterIO.Parse",
          "name": "concatMinMaxI",
          "normalized": "Int-\u003eInt-\u003eIter a b c-\u003eIter a b c",
          "package": "iterIO",
          "partial": "Min Max",
          "signature": "Int-\u003eInt-\u003eIter t m s-\u003eIter t m s",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Parse.html#v:concatMinMaxI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003esepBy\u003c/a\u003e\u003c/code\u003e, but expects a separator after the final item.  In\n other words, parses a sequence of the form\n \u003cem\u003eItem1 Separator Item2 Separator ... Separator ItemN Separator\u003c/em\u003e\n and returns the list \u003ccode\u003e[\u003c/code\u003e\u003cem\u003eItem1\u003c/em\u003e\u003ccode\u003e,\u003c/code\u003e \u003cem\u003eItem2\u003c/em\u003e\u003ccode\u003e,\u003c/code\u003e ...\u003ccode\u003e,\u003c/code\u003e \u003cem\u003eItemN\u003c/em\u003e\u003ccode\u003e]\u003c/code\u003e or\n a \u003ccode\u003e\u003ca\u003eListLike\u003c/a\u003e\u003c/code\u003e equivalent.\n\u003c/p\u003e",
          "module": "Data.IterIO.Parse",
          "name": "endBy",
          "package": "iterIO",
          "signature": "Iter t m a-\u003e Iter t m b-\u003e Iter t m f",
          "type": "function"
        },
        "index": {
          "description": "Like sepBy but expects separator after the final item In other words parses sequence of the form Item1 Separator Item2 Separator Separator ItemN Separator and returns the list Item1 Item2 ItemN or ListLike equivalent",
          "hierarchy": "Data IterIO Parse",
          "module": "Data.IterIO.Parse",
          "name": "endBy",
          "normalized": "Iter a b c-\u003eIter a b d-\u003eIter a b e",
          "package": "iterIO",
          "partial": "By",
          "signature": "Iter t m a-\u003eIter t m b-\u003eIter t m f",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Parse.html#v:endBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA variant of \u003ccode\u003e\u003ca\u003eendBy\u003c/a\u003e\u003c/code\u003e that throws a parse error if it cannot\n return at least one item.\n\u003c/p\u003e",
          "module": "Data.IterIO.Parse",
          "name": "endBy1",
          "package": "iterIO",
          "signature": "Iter t m a -\u003e Iter t m b -\u003e Iter t m f",
          "source": "src/Data-IterIO-Parse.html#endBy1",
          "type": "function"
        },
        "index": {
          "description": "variant of endBy that throws parse error if it cannot return at least one item",
          "hierarchy": "Data IterIO Parse",
          "module": "Data.IterIO.Parse",
          "name": "endBy1",
          "normalized": "Iter a b c-\u003eIter a b d-\u003eIter a b e",
          "package": "iterIO",
          "partial": "By",
          "signature": "Iter t m a-\u003eIter t m b-\u003eIter t m f",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Parse.html#v:endBy1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEnsures the next input element satisfies a predicate or throws a\n parse error.  Does not consume any input.\n\u003c/p\u003e",
          "module": "Data.IterIO.Parse",
          "name": "ensureI",
          "package": "iterIO",
          "signature": "(e -\u003e Bool) -\u003e Iter t m ()",
          "source": "src/Data-IterIO-Parse.html#ensureI",
          "type": "function"
        },
        "index": {
          "description": "Ensures the next input element satisfies predicate or throws parse error Does not consume any input",
          "hierarchy": "Data IterIO Parse",
          "module": "Data.IterIO.Parse",
          "name": "ensureI",
          "normalized": "(a-\u003eBool)-\u003eIter b c()",
          "package": "iterIO",
          "signature": "(e-\u003eBool)-\u003eIter t m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Parse.html#v:ensureI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEnsures the input is at the end-of-file marker, or else throws an\n exception.\n\u003c/p\u003e",
          "module": "Data.IterIO.Parse",
          "name": "eofI",
          "package": "iterIO",
          "signature": "Iter t m ()",
          "source": "src/Data-IterIO-Parse.html#eofI",
          "type": "function"
        },
        "index": {
          "description": "Ensures the input is at the end-of-file marker or else throws an exception",
          "hierarchy": "Data IterIO Parse",
          "module": "Data.IterIO.Parse",
          "name": "eofI",
          "normalized": "Iter a b()",
          "package": "iterIO",
          "signature": "Iter t m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Parse.html#v:eofI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA variant of the standard library \u003ccode\u003e\u003ca\u003eord\u003c/a\u003e\u003c/code\u003e function, but that\n translates a \u003ccode\u003e\u003ca\u003eChar\u003c/a\u003e\u003c/code\u003e into any \u003ccode\u003e\u003ca\u003eEnum\u003c/a\u003e\u003c/code\u003e type, not just \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e.\n Particularly useful for \u003ccode\u003e\u003ca\u003eIter\u003c/a\u003e\u003c/code\u003es that must work with both \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003es\n (which consist of \u003ccode\u003e\u003ca\u003eChar\u003c/a\u003e\u003c/code\u003es) and ASCII \u003ccode\u003e\u003ccode\u003eByteString\u003c/code\u003e\u003c/code\u003es (which consist\n of \u003ccode\u003e\u003ccode\u003eWord8\u003c/code\u003e\u003c/code\u003es).  For example, to skip one or more space or TAB\n characters, you can use:\n\u003c/p\u003e\u003cpre\u003e\n   skipSpace :: (\u003ccode\u003e\u003ca\u003eListLike\u003c/a\u003e\u003c/code\u003e t e, ChunkData t, \u003ccode\u003e\u003ca\u003eEq\u003c/a\u003e\u003c/code\u003e e, \u003ccode\u003e\u003ca\u003eEnum\u003c/a\u003e\u003c/code\u003e e, Monad m) =\u003e\n                \u003ccode\u003e\u003ca\u003eIter\u003c/a\u003e\u003c/code\u003e t m ()\n   skipSpace = \u003ccode\u003e\u003ca\u003eskipWhile1I\u003c/a\u003e\u003c/code\u003e (\\c -\u003e c == eord ' ' || c == eord '\\t')\n\u003c/pre\u003e",
          "module": "Data.IterIO.Parse",
          "name": "eord",
          "package": "iterIO",
          "signature": "Char -\u003e e",
          "source": "src/Data-IterIO-Parse.html#eord",
          "type": "function"
        },
        "index": {
          "description": "variant of the standard library ord function but that translates Char into any Enum type not just Int Particularly useful for Iter that must work with both String which consist of Char and ASCII ByteString which consist of Word8 For example to skip one or more space or TAB characters you can use skipSpace ListLike ChunkData Eq Enum Monad Iter skipSpace skipWhile1I eord eord",
          "hierarchy": "Data IterIO Parse",
          "module": "Data.IterIO.Parse",
          "name": "eord",
          "normalized": "Char-\u003ea",
          "package": "iterIO",
          "signature": "Char-\u003ee",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Parse.html#v:eord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThrow an \u003ccode\u003e\u003ca\u003eIter\u003c/a\u003e\u003c/code\u003e exception that describes expected input not\n found.\n\u003c/p\u003e",
          "module": "Data.IterIO.Parse",
          "name": "expectedI",
          "package": "iterIO",
          "signature": "String-\u003e String-\u003e Iter t m a",
          "type": "function"
        },
        "index": {
          "description": "Throw an Iter exception that describes expected input not found",
          "hierarchy": "Data IterIO Parse",
          "module": "Data.IterIO.Parse",
          "name": "expectedI",
          "normalized": "String-\u003eString-\u003eIter a b c",
          "package": "iterIO",
          "signature": "String-\u003eString-\u003eIter t m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Parse.html#v:expectedI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA variant of \u003ccode\u003e\u003ca\u003efoldMI\u003c/a\u003e\u003c/code\u003e that requires the \u003ccode\u003e\u003ca\u003eIter\u003c/a\u003e\u003c/code\u003e to succeed at\n least once.\n\u003c/p\u003e",
          "module": "Data.IterIO.Parse",
          "name": "foldM1I",
          "package": "iterIO",
          "signature": "(b -\u003e a -\u003e Iter t m b) -\u003e b -\u003e Iter t m a -\u003e Iter t m b",
          "source": "src/Data-IterIO-Parse.html#foldM1I",
          "type": "function"
        },
        "index": {
          "description": "variant of foldMI that requires the Iter to succeed at least once",
          "hierarchy": "Data IterIO Parse",
          "module": "Data.IterIO.Parse",
          "name": "foldM1I",
          "normalized": "(a-\u003eb-\u003eIter c d a)-\u003ea-\u003eIter c d b-\u003eIter c d a",
          "package": "iterIO",
          "signature": "(b-\u003ea-\u003eIter t m b)-\u003eb-\u003eIter t m a-\u003eIter t m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Parse.html#v:foldM1I"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003efoldMI\u003c/code\u003e is a left fold in which the folding function can execute\n monadic actions.  Essentially \u003ccode\u003efoldMI\u003c/code\u003e is to \u003ccode\u003e\u003ca\u003efoldlI\u003c/a\u003e\u003c/code\u003e as \u003ccode\u003e\u003ca\u003efoldM\u003c/a\u003e\u003c/code\u003e is\n to \u003ccode\u003e\u003ccode\u003efoldl'\u003c/code\u003e\u003c/code\u003e in the standard libraries.\n\u003c/p\u003e",
          "module": "Data.IterIO.Parse",
          "name": "foldMI",
          "package": "iterIO",
          "signature": "(b -\u003e a -\u003e Iter t m b) -\u003e b -\u003e Iter t m a -\u003e Iter t m b",
          "source": "src/Data-IterIO-Parse.html#foldMI",
          "type": "function"
        },
        "index": {
          "description": "foldMI is left fold in which the folding function can execute monadic actions Essentially foldMI is to foldlI as foldM is to foldl in the standard libraries",
          "hierarchy": "Data IterIO Parse",
          "module": "Data.IterIO.Parse",
          "name": "foldMI",
          "normalized": "(a-\u003eb-\u003eIter c d a)-\u003ea-\u003eIter c d b-\u003eIter c d a",
          "package": "iterIO",
          "partial": "MI",
          "signature": "(b-\u003ea-\u003eIter t m b)-\u003eb-\u003eIter t m a-\u003eIter t m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Parse.html#v:foldMI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA version of \u003ccode\u003e\u003ca\u003efoldlI\u003c/a\u003e\u003c/code\u003e that fails if the \u003ccode\u003e\u003ca\u003eIter\u003c/a\u003e\u003c/code\u003e argument does not\n succeed at least once.\n\u003c/p\u003e",
          "module": "Data.IterIO.Parse",
          "name": "foldl1I",
          "package": "iterIO",
          "signature": "(b -\u003e a -\u003e b) -\u003e b -\u003e Iter t m a -\u003e Iter t m b",
          "source": "src/Data-IterIO-Parse.html#foldl1I",
          "type": "function"
        },
        "index": {
          "description": "version of foldlI that fails if the Iter argument does not succeed at least once",
          "hierarchy": "Data IterIO Parse",
          "module": "Data.IterIO.Parse",
          "name": "foldl1I",
          "normalized": "(a-\u003eb-\u003ea)-\u003ea-\u003eIter c d b-\u003eIter c d a",
          "package": "iterIO",
          "signature": "(b-\u003ea-\u003eb)-\u003eb-\u003eIter t m a-\u003eIter t m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Parse.html#v:foldl1I"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStrict left fold over an \u003ccode\u003e\u003ca\u003eIter\u003c/a\u003e\u003c/code\u003e (until it throws an \u003ccode\u003eIterNoParse\u003c/code\u003e\n exception).  \u003ccode\u003efoldlI f z iter\u003c/code\u003e is sort of equivalent to:\n\u003c/p\u003e\u003cpre\u003e ... (f \u003c$\u003e (f \u003c$\u003e (f z \u003c$\u003e iter) \u003c*\u003e iter) \u003c*\u003e iter) ...\n\u003c/pre\u003e",
          "module": "Data.IterIO.Parse",
          "name": "foldlI",
          "package": "iterIO",
          "signature": "(b -\u003e a -\u003e b) -\u003e b -\u003e Iter t m a -\u003e Iter t m b",
          "source": "src/Data-IterIO-Parse.html#foldlI",
          "type": "function"
        },
        "index": {
          "description": "Strict left fold over an Iter until it throws an IterNoParse exception foldlI iter is sort of equivalent to iter iter iter",
          "hierarchy": "Data IterIO Parse",
          "module": "Data.IterIO.Parse",
          "name": "foldlI",
          "normalized": "(a-\u003eb-\u003ea)-\u003ea-\u003eIter c d b-\u003eIter c d a",
          "package": "iterIO",
          "signature": "(b-\u003ea-\u003eb)-\u003eb-\u003eIter t m a-\u003eIter t m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Parse.html#v:foldlI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA variant of \u003ccode\u003e\u003ca\u003efoldrI\u003c/a\u003e\u003c/code\u003e that requires the \u003ccode\u003e\u003ca\u003eIter\u003c/a\u003e\u003c/code\u003e to succeed at\n least once.\n\u003c/p\u003e",
          "module": "Data.IterIO.Parse",
          "name": "foldr1I",
          "package": "iterIO",
          "signature": "(a -\u003e b -\u003e b) -\u003e b -\u003e Iter t m a -\u003e Iter t m b",
          "source": "src/Data-IterIO-Parse.html#foldr1I",
          "type": "function"
        },
        "index": {
          "description": "variant of foldrI that requires the Iter to succeed at least once",
          "hierarchy": "Data IterIO Parse",
          "module": "Data.IterIO.Parse",
          "name": "foldr1I",
          "normalized": "(a-\u003eb-\u003eb)-\u003eb-\u003eIter c d a-\u003eIter c d b",
          "package": "iterIO",
          "signature": "(a-\u003eb-\u003eb)-\u003eb-\u003eIter t m a-\u003eIter t m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Parse.html#v:foldr1I"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepeatedly invoke an \u003ccode\u003e\u003ca\u003eIter\u003c/a\u003e\u003c/code\u003e and right-fold a function over the\n results.\n\u003c/p\u003e",
          "module": "Data.IterIO.Parse",
          "name": "foldrI",
          "package": "iterIO",
          "signature": "(a -\u003e b -\u003e b) -\u003e b -\u003e Iter t m a -\u003e Iter t m b",
          "source": "src/Data-IterIO-Parse.html#foldrI",
          "type": "function"
        },
        "index": {
          "description": "Repeatedly invoke an Iter and right-fold function over the results",
          "hierarchy": "Data IterIO Parse",
          "module": "Data.IterIO.Parse",
          "name": "foldrI",
          "normalized": "(a-\u003eb-\u003eb)-\u003eb-\u003eIter c d a-\u003eIter c d b",
          "package": "iterIO",
          "signature": "(a-\u003eb-\u003eb)-\u003eb-\u003eIter t m a-\u003eIter t m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Parse.html#v:foldrI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA variant of \u003ccode\u003e\u003ca\u003efoldrI\u003c/a\u003e\u003c/code\u003e that requires the \u003ccode\u003e\u003ca\u003eIter\u003c/a\u003e\u003c/code\u003e to succeed at\n least a minimum number of items and stops parsing after executing\n the \u003ccode\u003e\u003ca\u003eIter\u003c/a\u003e\u003c/code\u003e some maximum number of times.\n\u003c/p\u003e",
          "module": "Data.IterIO.Parse",
          "name": "foldrMinMaxI",
          "package": "iterIO",
          "signature": "Int-\u003e Int-\u003e (a -\u003e b -\u003e b)-\u003e b-\u003e Iter t m a-\u003e Iter t m b",
          "type": "function"
        },
        "index": {
          "description": "variant of foldrI that requires the Iter to succeed at least minimum number of items and stops parsing after executing the Iter some maximum number of times",
          "hierarchy": "Data IterIO Parse",
          "module": "Data.IterIO.Parse",
          "name": "foldrMinMaxI",
          "normalized": "Int-\u003eInt-\u003e(a-\u003eb-\u003eb)-\u003eb-\u003eIter c d a-\u003eIter c d b",
          "package": "iterIO",
          "partial": "Min Max",
          "signature": "Int-\u003eInt-\u003e(a-\u003eb-\u003eb)-\u003eb-\u003eIter t m a-\u003eIter t m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Parse.html#v:foldrMinMaxI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun an \u003ccode\u003e\u003ca\u003eIter\u003c/a\u003e\u003c/code\u003e zero or more times (until it fails) and return a\n list-like container of the results.\n\u003c/p\u003e",
          "module": "Data.IterIO.Parse",
          "name": "many",
          "package": "iterIO",
          "signature": "Iter t m a -\u003e Iter t m f",
          "source": "src/Data-IterIO-Parse.html#many",
          "type": "function"
        },
        "index": {
          "description": "Run an Iter zero or more times until it fails and return list-like container of the results",
          "hierarchy": "Data IterIO Parse",
          "module": "Data.IterIO.Parse",
          "name": "many",
          "normalized": "Iter a b c-\u003eIter a b d",
          "package": "iterIO",
          "signature": "Iter t m a-\u003eIter t m f",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Parse.html#v:many"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun an \u003ccode\u003e\u003ca\u003eIter\u003c/a\u003e\u003c/code\u003e one or more times (until it fails) and return a\n list-like container of the results.\n\u003c/p\u003e",
          "module": "Data.IterIO.Parse",
          "name": "many1",
          "package": "iterIO",
          "signature": "Iter t m a -\u003e Iter t m f",
          "source": "src/Data-IterIO-Parse.html#many1",
          "type": "function"
        },
        "index": {
          "description": "Run an Iter one or more times until it fails and return list-like container of the results",
          "hierarchy": "Data IterIO Parse",
          "module": "Data.IterIO.Parse",
          "name": "many1",
          "normalized": "Iter a b c-\u003eIter a b d",
          "package": "iterIO",
          "signature": "Iter t m a-\u003eIter t m f",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Parse.html#v:many1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead input that exactly matches some target.\n\u003c/p\u003e",
          "module": "Data.IterIO.Parse",
          "name": "match",
          "package": "iterIO",
          "signature": "t -\u003e Iter t m t",
          "source": "src/Data-IterIO-Parse.html#match",
          "type": "function"
        },
        "index": {
          "description": "Read input that exactly matches some target",
          "hierarchy": "Data IterIO Parse",
          "module": "Data.IterIO.Parse",
          "name": "match",
          "normalized": "a-\u003eIter a b a",
          "package": "iterIO",
          "signature": "t-\u003eIter t m t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Parse.html#v:match"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003enil = \u003ccode\u003e\u003ca\u003epure\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003emempty\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e--An empty \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e injected into an\n \u003ccode\u003e\u003ca\u003eApplicative\u003c/a\u003e\u003c/code\u003e type.\n\u003c/p\u003e",
          "module": "Data.IterIO.Parse",
          "name": "nil",
          "package": "iterIO",
          "signature": "f t",
          "source": "src/Data-IterIO-Parse.html#nil",
          "type": "function"
        },
        "index": {
          "description": "nil pure mempty An empty Monoid injected into an Applicative type",
          "hierarchy": "Data IterIO Parse",
          "module": "Data.IterIO.Parse",
          "name": "nil",
          "package": "iterIO",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Parse.html#v:nil"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecute an iteratee.  Discard the result if it succeeds.  Rewind\n the input and suppress the error if it fails.\n\u003c/p\u003e",
          "module": "Data.IterIO.Parse",
          "name": "optionalI",
          "package": "iterIO",
          "signature": "Iter t m a -\u003e Iter t m ()",
          "source": "src/Data-IterIO-Parse.html#optionalI",
          "type": "function"
        },
        "index": {
          "description": "Execute an iteratee Discard the result if it succeeds Rewind the input and suppress the error if it fails",
          "hierarchy": "Data IterIO Parse",
          "module": "Data.IterIO.Parse",
          "name": "optionalI",
          "normalized": "Iter a b c-\u003eIter a b()",
          "package": "iterIO",
          "signature": "Iter t m a-\u003eIter t m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Parse.html#v:optionalI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefined as \u003ccode\u003eorEmpty = (\u003ccode\u003e\u003ca\u003e\\/\u003c/a\u003e\u003c/code\u003e return \u003ccode\u003e\u003ca\u003emempty\u003c/a\u003e\u003c/code\u003e)\u003c/code\u003e, and useful when\n parse failures should just return an empty \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e.  For example,\n a type-restricted \u003ccode\u003e\u003ca\u003emany\u003c/a\u003e\u003c/code\u003e can be implemented as:\n\u003c/p\u003e\u003cpre\u003e\n   myMany :: (ChunkData t, Monad m) =\u003e Iter t m a -\u003e Iter t m [a]\n   myMany iter = iter `\u003ccode\u003e\u003ca\u003eorEmpty\u003c/a\u003e\u003c/code\u003e` (:) \u003ccode\u003e\u003ca\u003e\u003e$\u003e\u003c/a\u003e\u003c/code\u003e myMany iter\n\u003c/pre\u003e\u003cp\u003eHas fixity:\n\u003c/p\u003e\u003cpre\u003e infixr 3 `orEmpty`\n\u003c/pre\u003e",
          "module": "Data.IterIO.Parse",
          "name": "orEmpty",
          "package": "iterIO",
          "signature": "Iter t m a -\u003e (a -\u003e Iter t m b) -\u003e Iter t m b",
          "source": "src/Data-IterIO-Parse.html#orEmpty",
          "type": "function"
        },
        "index": {
          "description": "Defined as orEmpty return mempty and useful when parse failures should just return an empty Monoid For example type-restricted many can be implemented as myMany ChunkData Monad Iter Iter myMany iter iter orEmpty myMany iter Has fixity infixr orEmpty",
          "hierarchy": "Data IterIO Parse",
          "module": "Data.IterIO.Parse",
          "name": "orEmpty",
          "normalized": "Iter a b c-\u003e(c-\u003eIter a b d)-\u003eIter a b d",
          "package": "iterIO",
          "partial": "Empty",
          "signature": "Iter t m a-\u003e(a-\u003eIter t m b)-\u003eIter t m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Parse.html#v:orEmpty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLift a value.\n\u003c/p\u003e",
          "module": "Data.IterIO.Parse",
          "name": "pure",
          "package": "iterIO",
          "signature": "a -\u003e f a",
          "type": "method"
        },
        "index": {
          "description": "Lift value",
          "hierarchy": "Data IterIO Parse",
          "module": "Data.IterIO.Parse",
          "name": "pure",
          "normalized": "a-\u003eb a",
          "package": "iterIO",
          "signature": "a-\u003ef a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Parse.html#v:pure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis \u003ccode\u003e\u003ca\u003eIter\u003c/a\u003e\u003c/code\u003e parses a \u003ccode\u003e\u003ca\u003eStringLike\u003c/a\u003e\u003c/code\u003e argument.  It does not\n consume any Iteratee input.  The only reason it is an Iteratee is\n so that it can throw an Iteratee parse error should it fail to\n parse the argument string (or should the argument yield an\n ambiguous parse).\n\u003c/p\u003e",
          "module": "Data.IterIO.Parse",
          "name": "readI",
          "package": "iterIO",
          "signature": "s -\u003e Iter t m a",
          "source": "src/Data-IterIO-Parse.html#readI",
          "type": "function"
        },
        "index": {
          "description": "This Iter parses StringLike argument It does not consume any Iteratee input The only reason it is an Iteratee is so that it can throw an Iteratee parse error should it fail to parse the argument string or should the argument yield an ambiguous parse",
          "hierarchy": "Data IterIO Parse",
          "module": "Data.IterIO.Parse",
          "name": "readI",
          "normalized": "a-\u003eIter b c d",
          "package": "iterIO",
          "signature": "s-\u003eIter t m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Parse.html#v:readI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead the next input element if it satisfies some predicate.\n Otherwise throw an error.\n\u003c/p\u003e",
          "module": "Data.IterIO.Parse",
          "name": "satisfy",
          "package": "iterIO",
          "signature": "(e -\u003e Bool) -\u003e Iter t m e",
          "source": "src/Data-IterIO-Parse.html#satisfy",
          "type": "function"
        },
        "index": {
          "description": "Read the next input element if it satisfies some predicate Otherwise throw an error",
          "hierarchy": "Data IterIO Parse",
          "module": "Data.IterIO.Parse",
          "name": "satisfy",
          "normalized": "(a-\u003eBool)-\u003eIter b c a",
          "package": "iterIO",
          "signature": "(e-\u003eBool)-\u003eIter t m e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Parse.html#v:satisfy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParses a sequence of the form\n \u003cem\u003eItem1 Separator Item2 Separator ... Separator ItemN\u003c/em\u003e\n and returns the list \u003ccode\u003e[\u003c/code\u003e\u003cem\u003eItem1\u003c/em\u003e\u003ccode\u003e,\u003c/code\u003e \u003cem\u003eItem2\u003c/em\u003e\u003ccode\u003e,\u003c/code\u003e ...\u003ccode\u003e,\u003c/code\u003e \u003cem\u003eItemN\u003c/em\u003e\u003ccode\u003e]\u003c/code\u003e\n or a \u003ccode\u003e\u003ca\u003eListLike\u003c/a\u003e\u003c/code\u003e equivalent.\n\u003c/p\u003e",
          "module": "Data.IterIO.Parse",
          "name": "sepBy",
          "package": "iterIO",
          "signature": "Iter t m a-\u003e Iter t m b-\u003e Iter t m f",
          "type": "function"
        },
        "index": {
          "description": "Parses sequence of the form Item1 Separator Item2 Separator Separator ItemN and returns the list Item1 Item2 ItemN or ListLike equivalent",
          "hierarchy": "Data IterIO Parse",
          "module": "Data.IterIO.Parse",
          "name": "sepBy",
          "normalized": "Iter a b c-\u003eIter a b d-\u003eIter a b e",
          "package": "iterIO",
          "partial": "By",
          "signature": "Iter t m a-\u003eIter t m b-\u003eIter t m f",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Parse.html#v:sepBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA variant of \u003ccode\u003e\u003ca\u003esepBy\u003c/a\u003e\u003c/code\u003e that throws a parse error if it cannot\n return at least one item.\n\u003c/p\u003e",
          "module": "Data.IterIO.Parse",
          "name": "sepBy1",
          "package": "iterIO",
          "signature": "Iter t m a -\u003e Iter t m b -\u003e Iter t m f",
          "source": "src/Data-IterIO-Parse.html#sepBy1",
          "type": "function"
        },
        "index": {
          "description": "variant of sepBy that throws parse error if it cannot return at least one item",
          "hierarchy": "Data IterIO Parse",
          "module": "Data.IterIO.Parse",
          "name": "sepBy1",
          "normalized": "Iter a b c-\u003eIter a b d-\u003eIter a b e",
          "package": "iterIO",
          "partial": "By",
          "signature": "Iter t m a-\u003eIter t m b-\u003eIter t m f",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Parse.html#v:sepBy1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAccepts items that would be parsed by either \u003ccode\u003e\u003ca\u003esepBy\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eendBy\u003c/a\u003e\u003c/code\u003e.\n Essentially a version of \u003ccode\u003e\u003ca\u003eendBy\u003c/a\u003e\u003c/code\u003e in which the final separator is\n optional.\n\u003c/p\u003e",
          "module": "Data.IterIO.Parse",
          "name": "sepEndBy",
          "package": "iterIO",
          "signature": "Iter t m a -\u003e Iter t m b -\u003e Iter t m f",
          "source": "src/Data-IterIO-Parse.html#sepEndBy",
          "type": "function"
        },
        "index": {
          "description": "Accepts items that would be parsed by either sepBy or endBy Essentially version of endBy in which the final separator is optional",
          "hierarchy": "Data IterIO Parse",
          "module": "Data.IterIO.Parse",
          "name": "sepEndBy",
          "normalized": "Iter a b c-\u003eIter a b d-\u003eIter a b e",
          "package": "iterIO",
          "partial": "End By",
          "signature": "Iter t m a-\u003eIter t m b-\u003eIter t m f",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Parse.html#v:sepEndBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA variant of \u003ccode\u003e\u003ca\u003esepEndBy\u003c/a\u003e\u003c/code\u003e that throws a parse error if it cannot\n return at least one item.\n\u003c/p\u003e",
          "module": "Data.IterIO.Parse",
          "name": "sepEndBy1",
          "package": "iterIO",
          "signature": "Iter t m a -\u003e Iter t m b -\u003e Iter t m f",
          "source": "src/Data-IterIO-Parse.html#sepEndBy1",
          "type": "function"
        },
        "index": {
          "description": "variant of sepEndBy that throws parse error if it cannot return at least one item",
          "hierarchy": "Data IterIO Parse",
          "module": "Data.IterIO.Parse",
          "name": "sepEndBy1",
          "normalized": "Iter a b c-\u003eIter a b d-\u003eIter a b e",
          "package": "iterIO",
          "partial": "End By",
          "signature": "Iter t m a-\u003eIter t m b-\u003eIter t m f",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Parse.html#v:sepEndBy1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDiscard the result of executing an Iteratee once.  Throws an\n error if the Iteratee fails.  (Like \u003ccode\u003eskip x = x \u003e\u003e return ()\u003c/code\u003e.)\n\u003c/p\u003e",
          "module": "Data.IterIO.Parse",
          "name": "skipI",
          "package": "iterIO",
          "signature": "f a -\u003e f ()",
          "source": "src/Data-IterIO-Parse.html#skipI",
          "type": "function"
        },
        "index": {
          "description": "Discard the result of executing an Iteratee once Throws an error if the Iteratee fails Like skip return",
          "hierarchy": "Data IterIO Parse",
          "module": "Data.IterIO.Parse",
          "name": "skipI",
          "normalized": "a b-\u003ea()",
          "package": "iterIO",
          "signature": "f a-\u003ef()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Parse.html#v:skipI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepeatedly run an \u003ccode\u003e\u003ca\u003eIter\u003c/a\u003e\u003c/code\u003e until it fails and discard all the\n results.\n\u003c/p\u003e",
          "module": "Data.IterIO.Parse",
          "name": "skipMany",
          "package": "iterIO",
          "signature": "Iter t m a -\u003e Iter t m ()",
          "source": "src/Data-IterIO-Parse.html#skipMany",
          "type": "function"
        },
        "index": {
          "description": "Repeatedly run an Iter until it fails and discard all the results",
          "hierarchy": "Data IterIO Parse",
          "module": "Data.IterIO.Parse",
          "name": "skipMany",
          "normalized": "Iter a b c-\u003eIter a b()",
          "package": "iterIO",
          "partial": "Many",
          "signature": "Iter t m a-\u003eIter t m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Parse.html#v:skipMany"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA variant of \u003ccode\u003e\u003ca\u003eskipMany\u003c/a\u003e\u003c/code\u003e that throws a parse error if the \u003ccode\u003e\u003ca\u003eIter\u003c/a\u003e\u003c/code\u003e\n does not succeed at least once.\n\u003c/p\u003e",
          "module": "Data.IterIO.Parse",
          "name": "skipMany1",
          "package": "iterIO",
          "signature": "Iter t m a -\u003e Iter t m ()",
          "source": "src/Data-IterIO-Parse.html#skipMany1",
          "type": "function"
        },
        "index": {
          "description": "variant of skipMany that throws parse error if the Iter does not succeed at least once",
          "hierarchy": "Data IterIO Parse",
          "module": "Data.IterIO.Parse",
          "name": "skipMany1",
          "normalized": "Iter a b c-\u003eIter a b()",
          "package": "iterIO",
          "partial": "Many",
          "signature": "Iter t m a-\u003eIter t m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Parse.html#v:skipMany1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eskipWhileI\u003c/a\u003e\u003c/code\u003e, but fails if at least one element does not\n satisfy the predicate.\n\u003c/p\u003e",
          "module": "Data.IterIO.Parse",
          "name": "skipWhile1I",
          "package": "iterIO",
          "signature": "(e -\u003e Bool) -\u003e Iter t m ()",
          "source": "src/Data-IterIO-Parse.html#skipWhile1I",
          "type": "function"
        },
        "index": {
          "description": "Like skipWhileI but fails if at least one element does not satisfy the predicate",
          "hierarchy": "Data IterIO Parse",
          "module": "Data.IterIO.Parse",
          "name": "skipWhile1I",
          "normalized": "(a-\u003eBool)-\u003eIter b c()",
          "package": "iterIO",
          "partial": "While",
          "signature": "(e-\u003eBool)-\u003eIter t m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Parse.html#v:skipWhile1I"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSkip all input elements encountered until an element is found\n that does not match the specified predicate.\n\u003c/p\u003e",
          "module": "Data.IterIO.Parse",
          "name": "skipWhileI",
          "package": "iterIO",
          "signature": "(e -\u003e Bool) -\u003e Iter t m ()",
          "source": "src/Data-IterIO-Parse.html#skipWhileI",
          "type": "function"
        },
        "index": {
          "description": "Skip all input elements encountered until an element is found that does not match the specified predicate",
          "hierarchy": "Data IterIO Parse",
          "module": "Data.IterIO.Parse",
          "name": "skipWhileI",
          "normalized": "(a-\u003eBool)-\u003eIter b c()",
          "package": "iterIO",
          "partial": "While",
          "signature": "(e-\u003eBool)-\u003eIter t m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Parse.html#v:skipWhileI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead input that exactly matches a string.\n\u003c/p\u003e",
          "module": "Data.IterIO.Parse",
          "name": "string",
          "package": "iterIO",
          "signature": "String -\u003e Iter t m t",
          "source": "src/Data-IterIO-Parse.html#string",
          "type": "function"
        },
        "index": {
          "description": "Read input that exactly matches string",
          "hierarchy": "Data IterIO Parse",
          "module": "Data.IterIO.Parse",
          "name": "string",
          "normalized": "String-\u003eIter a b a",
          "package": "iterIO",
          "signature": "String-\u003eIter t m t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Parse.html#v:string"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead input that matches a string up to case.\n\u003c/p\u003e",
          "module": "Data.IterIO.Parse",
          "name": "stringCase",
          "package": "iterIO",
          "signature": "String -\u003e Iter t m t",
          "source": "src/Data-IterIO-Parse.html#stringCase",
          "type": "function"
        },
        "index": {
          "description": "Read input that matches string up to case",
          "hierarchy": "Data IterIO Parse",
          "module": "Data.IterIO.Parse",
          "name": "stringCase",
          "normalized": "String-\u003eIter a b a",
          "package": "iterIO",
          "partial": "Case",
          "signature": "String-\u003eIter t m t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Parse.html#v:stringCase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003ewhileI\u003c/a\u003e\u003c/code\u003e, but fails if at least one element does not satisfy\n the predicate.\n\u003c/p\u003e",
          "module": "Data.IterIO.Parse",
          "name": "while1I",
          "package": "iterIO",
          "signature": "(e -\u003e Bool) -\u003e Iter t m t",
          "source": "src/Data-IterIO-Parse.html#while1I",
          "type": "function"
        },
        "index": {
          "description": "Like whileI but fails if at least one element does not satisfy the predicate",
          "hierarchy": "Data IterIO Parse",
          "module": "Data.IterIO.Parse",
          "name": "while1I",
          "normalized": "(a-\u003eBool)-\u003eIter b c b",
          "package": "iterIO",
          "signature": "(e-\u003eBool)-\u003eIter t m t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Parse.html#v:while1I"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn all input elements up to the first one that does not match\n the specified predicate.\n\u003c/p\u003e",
          "module": "Data.IterIO.Parse",
          "name": "whileI",
          "package": "iterIO",
          "signature": "(e -\u003e Bool) -\u003e Iter t m t",
          "source": "src/Data-IterIO-Parse.html#whileI",
          "type": "function"
        },
        "index": {
          "description": "Return all input elements up to the first one that does not match the specified predicate",
          "hierarchy": "Data IterIO Parse",
          "module": "Data.IterIO.Parse",
          "name": "whileI",
          "normalized": "(a-\u003eBool)-\u003eIter b c b",
          "package": "iterIO",
          "signature": "(e-\u003eBool)-\u003eIter t m t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Parse.html#v:whileI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA variant of \u003ccode\u003e\u003ca\u003ewhileI\u003c/a\u003e\u003c/code\u003e with a maximum number matches.\n\u003c/p\u003e",
          "module": "Data.IterIO.Parse",
          "name": "whileMaxI",
          "package": "iterIO",
          "signature": "Int-\u003e (e -\u003e Bool)-\u003e Iter t m t",
          "type": "function"
        },
        "index": {
          "description": "variant of whileI with maximum number matches",
          "hierarchy": "Data IterIO Parse",
          "module": "Data.IterIO.Parse",
          "name": "whileMaxI",
          "normalized": "Int-\u003e(a-\u003eBool)-\u003eIter b c b",
          "package": "iterIO",
          "partial": "Max",
          "signature": "Int-\u003e(e-\u003eBool)-\u003eIter t m t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Parse.html#v:whileMaxI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA variant of \u003ccode\u003e\u003ca\u003ewhileI\u003c/a\u003e\u003c/code\u003e with a minimum and maximum number matches.\n\u003c/p\u003e",
          "module": "Data.IterIO.Parse",
          "name": "whileMinMaxI",
          "package": "iterIO",
          "signature": "Int-\u003e Int-\u003e (e -\u003e Bool)-\u003e Iter t m t",
          "type": "function"
        },
        "index": {
          "description": "variant of whileI with minimum and maximum number matches",
          "hierarchy": "Data IterIO Parse",
          "module": "Data.IterIO.Parse",
          "name": "whileMinMaxI",
          "normalized": "Int-\u003eInt-\u003e(a-\u003eBool)-\u003eIter b c b",
          "package": "iterIO",
          "partial": "Min Max",
          "signature": "Int-\u003eInt-\u003e(e-\u003eBool)-\u003eIter t m t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Parse.html#v:whileMinMaxI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.IterIO.SSL",
          "name": "SSL",
          "package": "iterIO",
          "source": "src/Data-IterIO-SSL.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data IterIO SSL",
          "module": "Data.IterIO.SSL",
          "name": "SSL",
          "package": "iterIO",
          "partial": "SSL",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-SSL.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eControl request to fetch the \u003ccode\u003eSSL\u003c/code\u003e object associated with an\n enumerator.\n\u003c/p\u003e",
          "module": "Data.IterIO.SSL",
          "name": "SslC",
          "package": "iterIO",
          "source": "src/Data-IterIO-SSL.html#SslC",
          "type": "data"
        },
        "index": {
          "description": "Control request to fetch the SSL object associated with an enumerator",
          "hierarchy": "Data IterIO SSL",
          "module": "Data.IterIO.SSL",
          "name": "SslC",
          "package": "iterIO",
          "partial": "Ssl",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-SSL.html#t:SslC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA wrapper around the type \u003ccode\u003e\u003ca\u003eSSL\u003c/a\u003e\u003c/code\u003e to make it an instance of the\n \u003ccode\u003e\u003ca\u003eTypeable\u003c/a\u003e\u003c/code\u003e class.\n\u003c/p\u003e",
          "module": "Data.IterIO.SSL",
          "name": "SslConnection",
          "package": "iterIO",
          "source": "src/Data-IterIO-SSL.html#SslConnection",
          "type": "newtype"
        },
        "index": {
          "description": "wrapper around the type SSL to make it an instance of the Typeable class",
          "hierarchy": "Data IterIO SSL",
          "module": "Data.IterIO.SSL",
          "name": "SslConnection",
          "package": "iterIO",
          "partial": "Ssl Connection",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-SSL.html#t:SslConnection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.IterIO.SSL",
          "name": "SslC",
          "package": "iterIO",
          "signature": "SslC",
          "source": "src/Data-IterIO-SSL.html#SslC",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data IterIO SSL",
          "module": "Data.IterIO.SSL",
          "name": "SslC",
          "package": "iterIO",
          "partial": "Ssl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-SSL.html#v:SslC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.IterIO.SSL",
          "name": "SslConnection",
          "package": "iterIO",
          "signature": "SslConnection",
          "source": "src/Data-IterIO-SSL.html#SslConnection",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data IterIO SSL",
          "module": "Data.IterIO.SSL",
          "name": "SslConnection",
          "package": "iterIO",
          "partial": "Ssl Connection",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-SSL.html#v:SslConnection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimple OpenSSL \u003ccode\u003e\u003ca\u003eOnum\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.IterIO.SSL",
          "name": "enumSsl",
          "package": "iterIO",
          "signature": "SSL -\u003e Onum ByteString m a",
          "source": "src/Data-IterIO-SSL.html#enumSsl",
          "type": "function"
        },
        "index": {
          "description": "Simple OpenSSL Onum",
          "hierarchy": "Data IterIO SSL",
          "module": "Data.IterIO.SSL",
          "name": "enumSsl",
          "normalized": "SSL-\u003eOnum ByteString a b",
          "package": "iterIO",
          "partial": "Ssl",
          "signature": "SSL-\u003eOnum ByteString m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-SSL.html#v:enumSsl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eQuick and dirty funciton to generate a self signed certificate\n for testing and stick it in a file.  E.g.:\n\u003c/p\u003e\u003cpre\u003e genSelfSigned \"testkey.pem\" \"localhost\"\n\u003c/pre\u003e",
          "module": "Data.IterIO.SSL",
          "name": "genSelfSigned",
          "package": "iterIO",
          "signature": "FilePath-\u003e String-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Quick and dirty funciton to generate self signed certificate for testing and stick it in file E.g genSelfSigned testkey.pem localhost",
          "hierarchy": "Data IterIO SSL",
          "module": "Data.IterIO.SSL",
          "name": "genSelfSigned",
          "normalized": "FilePath-\u003eString-\u003eIO()",
          "package": "iterIO",
          "partial": "Self Signed",
          "signature": "FilePath-\u003eString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-SSL.html#v:genSelfSigned"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTurn a socket into an \u003ccode\u003e\u003ca\u003eIter\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eOnum\u003c/a\u003e\u003c/code\u003e that use OpenSSL to write\n to and read from the socket, respectively.  Does an SSL\n bi-directional shutdown and closes the socket when both a) the enum\n completes and b) the iter has received an EOF chunk.\n\u003c/p\u003e\u003cp\u003eIf the SSL handshake fails, then \u003ccode\u003eiterSSL\u003c/code\u003e closes the socket before\n throwing an exception.\n\u003c/p\u003e\u003cp\u003eThis funciton must only be invoked from within a call to\n \u003ccode\u003ewithOpenSSL\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.IterIO.SSL",
          "name": "iterSSL",
          "package": "iterIO",
          "signature": "SSLContext-\u003e Socket-\u003e Bool-\u003e IO (Iter ByteString m (), Onum ByteString m a)",
          "type": "function"
        },
        "index": {
          "description": "Turn socket into an Iter and Onum that use OpenSSL to write to and read from the socket respectively Does an SSL bi-directional shutdown and closes the socket when both the enum completes and the iter has received an EOF chunk If the SSL handshake fails then iterSSL closes the socket before throwing an exception This funciton must only be invoked from within call to withOpenSSL",
          "hierarchy": "Data IterIO SSL",
          "module": "Data.IterIO.SSL",
          "name": "iterSSL",
          "normalized": "SSLContext-\u003eSocket-\u003eBool-\u003eIO(Iter ByteString a(),Onum ByteString a b)",
          "package": "iterIO",
          "partial": "SSL",
          "signature": "SSLContext-\u003eSocket-\u003eBool-\u003eIO(Iter ByteString m(),Onum ByteString m a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-SSL.html#v:iterSSL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimplest possible SSL context, loads cert and unencrypted private\n key from a single file.\n\u003c/p\u003e",
          "module": "Data.IterIO.SSL",
          "name": "simpleContext",
          "package": "iterIO",
          "signature": "FilePath -\u003e IO SSLContext",
          "source": "src/Data-IterIO-SSL.html#simpleContext",
          "type": "function"
        },
        "index": {
          "description": "Simplest possible SSL context loads cert and unencrypted private key from single file",
          "hierarchy": "Data IterIO SSL",
          "module": "Data.IterIO.SSL",
          "name": "simpleContext",
          "normalized": "FilePath-\u003eIO SSLContext",
          "package": "iterIO",
          "partial": "Context",
          "signature": "FilePath-\u003eIO SSLContext",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-SSL.html#v:simpleContext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimple OpenSSL \u003ccode\u003e\u003ca\u003eIter\u003c/a\u003e\u003c/code\u003e.  Does a uni-directional SSL shutdown when\n it receives a \u003ccode\u003e\u003ca\u003eChunk\u003c/a\u003e\u003c/code\u003e with the EOF bit \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.IterIO.SSL",
          "name": "sslI",
          "package": "iterIO",
          "signature": "SSL -\u003e Iter ByteString m ()",
          "source": "src/Data-IterIO-SSL.html#sslI",
          "type": "function"
        },
        "index": {
          "description": "Simple OpenSSL Iter Does uni-directional SSL shutdown when it receives Chunk with the EOF bit True",
          "hierarchy": "Data IterIO SSL",
          "module": "Data.IterIO.SSL",
          "name": "sslI",
          "normalized": "SSL-\u003eIter ByteString a()",
          "package": "iterIO",
          "signature": "SSL-\u003eIter ByteString m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-SSL.html#v:sslI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.IterIO.SSL",
          "name": "unSslConnection",
          "package": "iterIO",
          "signature": "SSL",
          "source": "src/Data-IterIO-SSL.html#SslConnection",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data IterIO SSL",
          "module": "Data.IterIO.SSL",
          "name": "unSslConnection",
          "package": "iterIO",
          "partial": "Ssl Connection",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-SSL.html#v:unSslConnection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.IterIO.Search",
          "name": "Search",
          "package": "iterIO",
          "source": "src/Data-IterIO-Search.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data IterIO Search",
          "module": "Data.IterIO.Search",
          "name": "Search",
          "package": "iterIO",
          "partial": "Search",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Search.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFeeds input to an Iteratee until some boundary string is found.\n The boundary string is neither consumed nor passed through to the\n target \u003ccode\u003e\u003ca\u003eIter\u003c/a\u003e\u003c/code\u003e.  (Thus, if the input is at end-of-file after\n inumStopString returns, it means the boundary string was never\n encountered.)\n\u003c/p\u003e",
          "module": "Data.IterIO.Search",
          "name": "inumStopString",
          "package": "iterIO",
          "signature": "ByteString -\u003e Inum ByteString ByteString m a",
          "source": "src/Data-IterIO-Search.html#inumStopString",
          "type": "function"
        },
        "index": {
          "description": "Feeds input to an Iteratee until some boundary string is found The boundary string is neither consumed nor passed through to the target Iter Thus if the input is at end-of-file after inumStopString returns it means the boundary string was never encountered",
          "hierarchy": "Data IterIO Search",
          "module": "Data.IterIO.Search",
          "name": "inumStopString",
          "normalized": "ByteString-\u003eInum ByteString ByteString a b",
          "package": "iterIO",
          "partial": "Stop String",
          "signature": "ByteString-\u003eInum ByteString ByteString m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Search.html#v:inumStopString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReads input until it can uniquely determine the longest key in a\n \u003ccode\u003e\u003ca\u003eMap\u003c/a\u003e\u003c/code\u003e that is a prefix of the input.  Consumes the input that\n matches the key, and returns the corresponding value in the\n \u003ccode\u003e\u003ca\u003eMap\u003c/a\u003e\u003c/code\u003e, along with the residual input that follows the key.\n\u003c/p\u003e",
          "module": "Data.IterIO.Search",
          "name": "mapI",
          "package": "iterIO",
          "signature": "Map t a -\u003e Iter t m a",
          "source": "src/Data-IterIO-Search.html#mapI",
          "type": "function"
        },
        "index": {
          "description": "Reads input until it can uniquely determine the longest key in Map that is prefix of the input Consumes the input that matches the key and returns the corresponding value in the Map along with the residual input that follows the key",
          "hierarchy": "Data IterIO Search",
          "module": "Data.IterIO.Search",
          "name": "mapI",
          "normalized": "Map a b-\u003eIter a c b",
          "package": "iterIO",
          "signature": "Map t a-\u003eIter t m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Search.html#v:mapI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003emapLI\u003c/code\u003e is a variant of \u003ccode\u003e\u003ca\u003emapI\u003c/a\u003e\u003c/code\u003e that takes a list of\n \u003ccode\u003e(key, value)\u003c/code\u003e pairs instead of a \u003ccode\u003e\u003ca\u003eMap\u003c/a\u003e\u003c/code\u003e.\n \u003ccode\u003emapLI = \u003ccode\u003e\u003ca\u003emapI\u003c/a\u003e\u003c/code\u003e . \u003ccode\u003e\u003ca\u003efromList\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.IterIO.Search",
          "name": "mapLI",
          "package": "iterIO",
          "signature": "[(t, a)] -\u003e Iter t m a",
          "source": "src/Data-IterIO-Search.html#mapLI",
          "type": "function"
        },
        "index": {
          "description": "mapLI is variant of mapI that takes list of key value pairs instead of Map mapLI mapI fromList",
          "hierarchy": "Data IterIO Search",
          "module": "Data.IterIO.Search",
          "name": "mapLI",
          "normalized": "[(a,b)]-\u003eIter a c b",
          "package": "iterIO",
          "partial": "LI",
          "signature": "[(t,a)]-\u003eIter t m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Search.html#v:mapLI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module contains various helper functions and instances for\n using \u003ccode\u003e\u003ca\u003eIter\u003c/a\u003e\u003c/code\u003es of different \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003es together in the same pipeline.\n For example, as-is the following code is illegal:\n\u003c/p\u003e\u003cpre\u003e\niter1 :: \u003ccode\u003e\u003ca\u003eIter\u003c/a\u003e\u003c/code\u003e String IO Bool\niter1 = ...\n\niter2 :: \u003ccode\u003e\u003ca\u003eIter\u003c/a\u003e\u003c/code\u003e String (\u003ccode\u003e\u003ca\u003eStateT\u003c/a\u003e\u003c/code\u003e MyState IO) ()\niter2 = do ...\n           s \u003c- iter1 -- ILLEGAL: iter1 is in wrong monad\n           ...\n\u003c/pre\u003e\u003cp\u003eYou can't invoke \u003ccode\u003eiter1\u003c/code\u003e from within \u003ccode\u003eiter2\u003c/code\u003e because the \u003ccode\u003e\u003ca\u003eIter\u003c/a\u003e\u003c/code\u003e\n type is wrapped around a different \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e in each case.  However,\n the function \u003ccode\u003e\u003ca\u003eliftI\u003c/a\u003e\u003c/code\u003e exactly solves this problem:\n\u003c/p\u003e\u003cpre\u003e\n           s \u003c- liftI iter1\n\u003c/pre\u003e\u003cp\u003eConversely, you may be in a \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e like \u003ccode\u003e\u003ccode\u003e\u003ca\u003eIter\u003c/a\u003e\u003c/code\u003e String IO\u003c/code\u003e and\n need to invoke a computation that requires some other monad\n functionality, such as a reader.  There are a number of\n iteratee-specific runner functions that help you run other\n \u003ccode\u003e\u003ca\u003eMonadTrans\u003c/a\u003e\u003c/code\u003e transformers inside the \u003ccode\u003e\u003ca\u003eIter\u003c/a\u003e\u003c/code\u003e monad.  These typically\n use the names of the runner functions in the mtl library, but with\n an \u003ccode\u003eI\u003c/code\u003e appended--for instance \u003ccode\u003e\u003ca\u003erunReaderTI\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003erunStateTI\u003c/a\u003e\u003c/code\u003e,\n \u003ccode\u003e\u003ca\u003erunWriterTI\u003c/a\u003e\u003c/code\u003e.  Here's a fuller example of adapting the inner\n \u003ccode\u003e\u003ca\u003eIter\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e.  The example also illustrates that \u003ccode\u003e\u003ccode\u003e\u003ca\u003eIter\u003c/a\u003e\u003c/code\u003e t m\u003c/code\u003e is\n member any mtl classes (such as \u003ccode\u003e\u003ca\u003eMonadReader\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eMonadState\u003c/a\u003e\u003c/code\u003e)\n that \u003ccode\u003em\u003c/code\u003e is.\n\u003c/p\u003e\u003cpre\u003e\niter1 :: Iter String (\u003ccode\u003e\u003ca\u003eReaderT\u003c/a\u003e\u003c/code\u003e MyState IO) Bool\niter1 = do\n  s \u003c- \u003ccode\u003e\u003ca\u003eask\u003c/a\u003e\u003c/code\u003e\n  liftIO $ (\u003ccode\u003e\u003ca\u003eputStrLn\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eshow\u003c/a\u003e\u003c/code\u003e s) \u003e\u003e return True)\n        `\u003ccode\u003e\u003ca\u003ecatch\u003c/a\u003e\u003c/code\u003e` (\u003ccode\u003eSomeException\u003c/code\u003e _) -\u003e return False\n\niter2 :: Iter String (\u003ccode\u003e\u003ca\u003eStateT\u003c/a\u003e\u003c/code\u003e MyState IO) ()\niter2 = do\n  s \u003c- \u003ccode\u003e\u003ca\u003eget\u003c/a\u003e\u003c/code\u003e\n  ok \u003c- \u003ccode\u003e\u003ca\u003eliftI\u003c/a\u003e\u003c/code\u003e $ \u003ccode\u003e\u003ca\u003erunReaderTI\u003c/a\u003e\u003c/code\u003e iter1 s\n  if ok then return () else fail \"iter1 failed\"\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Data.IterIO.Trans",
          "name": "Trans",
          "package": "iterIO",
          "source": "src/Data-IterIO-Trans.html",
          "type": "module"
        },
        "index": {
          "description": "This module contains various helper functions and instances for using Iter of different Monad together in the same pipeline For example as-is the following code is illegal iter1 Iter String IO Bool iter1 iter2 Iter String StateT MyState IO iter2 do iter1 ILLEGAL iter1 is in wrong monad You can invoke iter1 from within iter2 because the Iter type is wrapped around different Monad in each case However the function liftI exactly solves this problem liftI iter1 Conversely you may be in Monad like Iter String IO and need to invoke computation that requires some other monad functionality such as reader There are number of iteratee-specific runner functions that help you run other MonadTrans transformers inside the Iter monad These typically use the names of the runner functions in the mtl library but with an appended--for instance runReaderTI runStateTI runWriterTI Here fuller example of adapting the inner Iter Monad The example also illustrates that Iter is member any mtl classes such as MonadReader and MonadState that is iter1 Iter String ReaderT MyState IO Bool iter1 do ask liftIO putStrLn show return True catch SomeException return False iter2 Iter String StateT MyState IO iter2 do get ok liftI runReaderTI iter1 if ok then return else fail iter1 failed",
          "hierarchy": "Data IterIO Trans",
          "module": "Data.IterIO.Trans",
          "name": "Trans",
          "package": "iterIO",
          "partial": "Trans",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Trans.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eIterStateT\u003c/code\u003e is a variant of the \u003ccode\u003e\u003ca\u003eStateT\u003c/a\u003e\u003c/code\u003e monad transformer\n specifically designed for use inside \u003ccode\u003e\u003ca\u003eIter\u003c/a\u003e\u003c/code\u003es.  The \u003ccode\u003e\u003ca\u003eIterStateT\u003c/a\u003e\u003c/code\u003e\n Monad itself is the same as \u003ccode\u003e\u003ca\u003eStateT\u003c/a\u003e\u003c/code\u003e.  However, the \u003ccode\u003e\u003ca\u003erunIterStateT\u003c/a\u003e\u003c/code\u003e\n function works differently from \u003ccode\u003e\u003ca\u003erunStateT\u003c/a\u003e\u003c/code\u003e--it returns an \u003ccode\u003e\u003ca\u003eIterR\u003c/a\u003e\u003c/code\u003e\n and the result state separately.  The advantage of this approach is\n that you can still recover the state at the point of the excaption\n even after an \u003ccode\u003e\u003ca\u003eIterFail\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003eInumFail\u003c/code\u003e condition.\n\u003c/p\u003e",
          "module": "Data.IterIO.Trans",
          "name": "IterStateT",
          "package": "iterIO",
          "source": "src/Data-IterIO-Trans.html#IterStateT",
          "type": "newtype"
        },
        "index": {
          "description": "IterStateT is variant of the StateT monad transformer specifically designed for use inside Iter The IterStateT Monad itself is the same as StateT However the runIterStateT function works differently from runStateT it returns an IterR and the result state separately The advantage of this approach is that you can still recover the state at the point of the excaption even after an IterFail or InumFail condition",
          "hierarchy": "Data IterIO Trans",
          "module": "Data.IterIO.Trans",
          "name": "IterStateT",
          "package": "iterIO",
          "partial": "Iter State",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Trans.html#t:IterStateT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.IterIO.Trans",
          "name": "IterStateT",
          "package": "iterIO",
          "signature": "IterStateT (s -\u003e m (a, s))",
          "source": "src/Data-IterIO-Trans.html#IterStateT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data IterIO Trans",
          "module": "Data.IterIO.Trans",
          "name": "IterStateT",
          "normalized": "IterStateT(a-\u003eb(c,a))",
          "package": "iterIO",
          "partial": "Iter State",
          "signature": "IterStateT(s-\u003em(a,s))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Trans.html#v:IterStateT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdapt an \u003ccode\u003e\u003ca\u003eIter\u003c/a\u003e\u003c/code\u003e from one monad to another.  This function is the\n lowest-level monad adapter function, upon which all of the other\n adapters are built.  \u003ccode\u003eadaptIter\u003c/code\u003e requires two functions as\n arguments.  One adapts the result to a new type (if required).  The\n second adapts monadic computations from one monad to the other.\n For example, \u003ccode\u003e\u003ca\u003eliftI\u003c/a\u003e\u003c/code\u003e could be implemented as:\n\u003c/p\u003e\u003cpre\u003e\n  liftI :: (\u003ccode\u003e\u003ca\u003eMonadTrans\u003c/a\u003e\u003c/code\u003e t, Monad m, Monad (t m), \u003ccode\u003e\u003ca\u003eChunkData\u003c/a\u003e\u003c/code\u003e s) =\u003e\n           \u003ccode\u003e\u003ca\u003eIter\u003c/a\u003e\u003c/code\u003e s m a -\u003e \u003ccode\u003e\u003ca\u003eIter\u003c/a\u003e\u003c/code\u003e s (t m) a\n  liftI = adaptIter \u003ccode\u003e\u003ca\u003eid\u003c/a\u003e\u003c/code\u003e (\\m -\u003e \u003ccode\u003e\u003ca\u003elift\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003elift\u003c/a\u003e\u003c/code\u003e m) \u003e\u003e= liftI)\n\u003c/pre\u003e\u003cp\u003eHere \u003ccode\u003e\u003ccode\u003e\u003ca\u003elift\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003elift\u003c/a\u003e\u003c/code\u003e m)\u003c/code\u003e executes a computation \u003ccode\u003em\u003c/code\u003e of type \u003ccode\u003em\n (\u003ccode\u003e\u003ca\u003eIter\u003c/a\u003e\u003c/code\u003e s m a)\u003c/code\u003e from within the \u003ccode\u003e\u003ccode\u003e\u003ca\u003eIter\u003c/a\u003e\u003c/code\u003e s (t m)\u003c/code\u003e monad.  The\n result, of type \u003ccode\u003e\u003ccode\u003e\u003ca\u003eIter\u003c/a\u003e\u003c/code\u003e s m a\u003c/code\u003e, can then be fed back into\n \u003ccode\u003eliftI\u003c/code\u003e recursively.\n\u003c/p\u003e\u003cp\u003eNote that in general a computation adapters must invoke the outer\n adapter function recursively.  \u003ccode\u003eadaptIter\u003c/code\u003e is designed this way\n because the result adapter function may need to change.  An example\n is \u003ccode\u003e\u003ca\u003erunStateTI\u003c/a\u003e\u003c/code\u003e, which could be implemented as follows:\n\u003c/p\u003e\u003cpre\u003e runStateTI :: (ChunkData t, Monad m) =\u003e\n               Iter t (StateT s m) a -\u003e s -\u003e Iter t m (a, s)\n runStateTI iter s = adaptIter adaptResult adaptComputation iter\n     where adaptResult a = (a, s)\n           adaptComputation m = do (r', s') \u003c- lift (runStateT m s)\n                                   runStateTI r' s'\n\u003c/pre\u003e\u003cp\u003eHere, after executing \u003ccode\u003e\u003ca\u003erunStateT\u003c/a\u003e\u003c/code\u003e, the state may be modified.\n Thus, \u003ccode\u003eadaptComputation\u003c/code\u003e invokes \u003ccode\u003erunStateTI\u003c/code\u003e recursively with the\n modified state, \u003ccode\u003es'\u003c/code\u003e, to ensure that subsequent \u003ccode\u003e\u003ca\u003eIterM\u003c/a\u003e\u003c/code\u003e\n computations will be run on the latest state, and that eventually\n \u003ccode\u003eadaptResult\u003c/code\u003e will pair the result \u003ccode\u003ea\u003c/code\u003e with the newest state.\n\u003c/p\u003e",
          "module": "Data.IterIO.Trans",
          "name": "adaptIter",
          "package": "iterIO",
          "signature": "(a -\u003e b)-\u003e (m1 (Iter t m1 a) -\u003e Iter t m2 b)-\u003e Iter t m1 a-\u003e Iter t m2 b",
          "type": "function"
        },
        "index": {
          "description": "Adapt an Iter from one monad to another This function is the lowest-level monad adapter function upon which all of the other adapters are built adaptIter requires two functions as arguments One adapts the result to new type if required The second adapts monadic computations from one monad to the other For example liftI could be implemented as liftI MonadTrans Monad Monad ChunkData Iter Iter liftI adaptIter id lift lift liftI Here lift lift executes computation of type Iter from within the Iter monad The result of type Iter can then be fed back into liftI recursively Note that in general computation adapters must invoke the outer adapter function recursively adaptIter is designed this way because the result adapter function may need to change An example is runStateTI which could be implemented as follows runStateTI ChunkData Monad Iter StateT Iter runStateTI iter adaptIter adaptResult adaptComputation iter where adaptResult adaptComputation do lift runStateT runStateTI Here after executing runStateT the state may be modified Thus adaptComputation invokes runStateTI recursively with the modified state to ensure that subsequent IterM computations will be run on the latest state and that eventually adaptResult will pair the result with the newest state",
          "hierarchy": "Data IterIO Trans",
          "module": "Data.IterIO.Trans",
          "name": "adaptIter",
          "normalized": "(a-\u003eb)-\u003e(c(Iter d c a)-\u003eIter d c b)-\u003eIter d c a-\u003eIter d c b",
          "package": "iterIO",
          "partial": "Iter",
          "signature": "(a-\u003eb)-\u003e(m(Iter t m a)-\u003eIter t m b)-\u003eIter t m a-\u003eIter t m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Trans.html#v:adaptIter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimplified adapter function to translate \u003ccode\u003e\u003ca\u003eIter\u003c/a\u003e\u003c/code\u003e computations from\n one monad to another.  This only works on monads \u003ccode\u003em\u003c/code\u003e for which\n running \u003ccode\u003em a\u003c/code\u003e returns a result of type \u003ccode\u003ea\u003c/code\u003e.  For more complex\n scenarios (such as \u003ccode\u003e\u003ca\u003eListT\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eStateT\u003c/a\u003e\u003c/code\u003e), you need to use the more\n general \u003ccode\u003e\u003ca\u003eadaptIter\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eAs an example, the \u003ccode\u003e\u003ca\u003eliftIterIO\u003c/a\u003e\u003c/code\u003e function is implemented as follows:\n\u003c/p\u003e\u003cpre\u003e\n liftIterIO :: (ChunkData t, \u003ccode\u003e\u003ca\u003eMonadIO\u003c/a\u003e\u003c/code\u003e m) =\u003e Iter t IO a -\u003e Iter t m a\n liftIterIO = adaptIterM \u003ccode\u003e\u003ca\u003eliftIO\u003c/a\u003e\u003c/code\u003e\n\u003c/pre\u003e",
          "module": "Data.IterIO.Trans",
          "name": "adaptIterM",
          "package": "iterIO",
          "signature": "(m1 (Iter t m1 a) -\u003e m2 (Iter t m1 a))-\u003e Iter t m1 a-\u003e Iter t m2 a",
          "type": "function"
        },
        "index": {
          "description": "Simplified adapter function to translate Iter computations from one monad to another This only works on monads for which running returns result of type For more complex scenarios such as ListT or StateT you need to use the more general adaptIter As an example the liftIterIO function is implemented as follows liftIterIO ChunkData MonadIO Iter IO Iter liftIterIO adaptIterM liftIO",
          "hierarchy": "Data IterIO Trans",
          "module": "Data.IterIO.Trans",
          "name": "adaptIterM",
          "normalized": "(a(Iter b a c)-\u003ea(Iter b a c))-\u003eIter b a c-\u003eIter b a c",
          "package": "iterIO",
          "partial": "Iter",
          "signature": "(m(Iter t m a)-\u003em(Iter t m a))-\u003eIter t m a-\u003eIter t m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Trans.html#v:adaptIterM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the state in an \u003ccode\u003e\u003ccode\u003e\u003ca\u003eIter\u003c/a\u003e\u003c/code\u003e t (\u003ccode\u003e\u003ca\u003eIterStateT\u003c/a\u003e\u003c/code\u003e s m)\u003c/code\u003e monad.\n Analogous to \u003ccode\u003e\u003ccode\u003e\u003ca\u003eget\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e for a \u003ccode\u003e\u003ccode\u003e\u003ca\u003eStateT\u003c/a\u003e\u003c/code\u003e s m\u003c/code\u003e monad.\n\u003c/p\u003e",
          "module": "Data.IterIO.Trans",
          "name": "iget",
          "package": "iterIO",
          "signature": "Iter t (IterStateT s m) s",
          "source": "src/Data-IterIO-Trans.html#iget",
          "type": "function"
        },
        "index": {
          "description": "Returns the state in an Iter IterStateT monad Analogous to get for StateT monad",
          "hierarchy": "Data IterIO Trans",
          "module": "Data.IterIO.Trans",
          "name": "iget",
          "package": "iterIO",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Trans.html#v:iget"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns a particular field of the \u003ccode\u003e\u003ca\u003eIterStateT\u003c/a\u003e\u003c/code\u003e state, analogous\n to \u003ccode\u003e\u003ccode\u003e\u003ca\u003egets\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e for \u003ccode\u003e\u003ccode\u003e\u003ca\u003eStateT\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.IterIO.Trans",
          "name": "igets",
          "package": "iterIO",
          "signature": "(s -\u003e a) -\u003e Iter t (IterStateT s m) a",
          "source": "src/Data-IterIO-Trans.html#igets",
          "type": "function"
        },
        "index": {
          "description": "Returns particular field of the IterStateT state analogous to gets for StateT",
          "hierarchy": "Data IterIO Trans",
          "module": "Data.IterIO.Trans",
          "name": "igets",
          "normalized": "(a-\u003eb)-\u003eIter c(IterStateT a d)b",
          "package": "iterIO",
          "signature": "(s-\u003ea)-\u003eIter t(IterStateT s m)a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Trans.html#v:igets"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eModifies the \u003ccode\u003e\u003ca\u003eIterStateT\u003c/a\u003e\u003c/code\u003e state.  Analogous to \u003ccode\u003e\u003ccode\u003e\u003ca\u003emodify\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e for\n \u003ccode\u003e\u003ccode\u003e\u003ca\u003eStateT\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.IterIO.Trans",
          "name": "imodify",
          "package": "iterIO",
          "signature": "(s -\u003e s) -\u003e Iter t (IterStateT s m) ()",
          "source": "src/Data-IterIO-Trans.html#imodify",
          "type": "function"
        },
        "index": {
          "description": "Modifies the IterStateT state Analogous to modify for StateT",
          "hierarchy": "Data IterIO Trans",
          "module": "Data.IterIO.Trans",
          "name": "imodify",
          "normalized": "(a-\u003ea)-\u003eIter b(IterStateT a c)()",
          "package": "iterIO",
          "signature": "(s-\u003es)-\u003eIter t(IterStateT s m)()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Trans.html#v:imodify"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSets the \u003ccode\u003e\u003ca\u003eIterStateT\u003c/a\u003e\u003c/code\u003e state.  Analogous to \u003ccode\u003e\u003ccode\u003e\u003ca\u003eput\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e for\n \u003ccode\u003e\u003ccode\u003e\u003ca\u003eStateT\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.IterIO.Trans",
          "name": "iput",
          "package": "iterIO",
          "signature": "s -\u003e Iter t (IterStateT s m) ()",
          "source": "src/Data-IterIO-Trans.html#iput",
          "type": "function"
        },
        "index": {
          "description": "Sets the IterStateT state Analogous to put for StateT",
          "hierarchy": "Data IterIO Trans",
          "module": "Data.IterIO.Trans",
          "name": "iput",
          "normalized": "a-\u003eIter b(IterStateT a c)()",
          "package": "iterIO",
          "signature": "s-\u003eIter t(IterStateT s m)()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Trans.html#v:iput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun an \u003ccode\u003e\u003ccode\u003e\u003ca\u003eIter\u003c/a\u003e\u003c/code\u003e s m\u003c/code\u003e computation from witin the \u003ccode\u003e\u003ccode\u003e\u003ca\u003eIter\u003c/a\u003e\u003c/code\u003e s (t m)\u003c/code\u003e\n monad, where \u003ccode\u003et\u003c/code\u003e is a \u003ccode\u003e\u003ca\u003eMonadTrans\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.IterIO.Trans",
          "name": "liftI",
          "package": "iterIO",
          "signature": "Iter s m a -\u003e Iter s (t m) a",
          "source": "src/Data-IterIO-Trans.html#liftI",
          "type": "function"
        },
        "index": {
          "description": "Run an Iter computation from witin the Iter monad where is MonadTrans",
          "hierarchy": "Data IterIO Trans",
          "module": "Data.IterIO.Trans",
          "name": "liftI",
          "normalized": "Iter a b c-\u003eIter a(d b)c",
          "package": "iterIO",
          "signature": "Iter s m a-\u003eIter s(t m)a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Trans.html#v:liftI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun an \u003ccode\u003e\u003ccode\u003e\u003ca\u003eIter\u003c/a\u003e\u003c/code\u003e t IO\u003c/code\u003e computation from within an \u003ccode\u003e\u003ccode\u003e\u003ca\u003eIter\u003c/a\u003e\u003c/code\u003e t m\u003c/code\u003e\n monad where \u003ccode\u003em\u003c/code\u003e is in class \u003ccode\u003e\u003ca\u003eMonadIO\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.IterIO.Trans",
          "name": "liftIterIO",
          "package": "iterIO",
          "signature": "Iter t IO a -\u003e Iter t m a",
          "source": "src/Data-IterIO-Trans.html#liftIterIO",
          "type": "function"
        },
        "index": {
          "description": "Run an Iter IO computation from within an Iter monad where is in class MonadIO",
          "hierarchy": "Data IterIO Trans",
          "module": "Data.IterIO.Trans",
          "name": "liftIterIO",
          "normalized": "Iter a IO b-\u003eIter a c b",
          "package": "iterIO",
          "partial": "Iter IO",
          "signature": "Iter t IO a-\u003eIter t m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Trans.html#v:liftIterIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTurn a computation of type \u003ccode\u003e\u003ccode\u003e\u003ca\u003eIter\u003c/a\u003e\u003c/code\u003e t (\u003ccode\u003e\u003ca\u003eContT\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eIter\u003c/a\u003e\u003c/code\u003e t m a) m)\n a\u003c/code\u003e into one of type \u003ccode\u003e\u003ccode\u003e\u003ca\u003eIter\u003c/a\u003e\u003c/code\u003e t m a\u003c/code\u003e.  Note the continuation has to\n return type \u003ccode\u003e\u003ccode\u003e\u003ca\u003eIter\u003c/a\u003e\u003c/code\u003e t m a\u003c/code\u003e and not \u003ccode\u003ea\u003c/code\u003e so that runContTI can call\n itself recursively.\n\u003c/p\u003e",
          "module": "Data.IterIO.Trans",
          "name": "runContTI",
          "package": "iterIO",
          "signature": "Iter t (ContT (Iter t m a) m) a -\u003e Iter t m a",
          "source": "src/Data-IterIO-Trans.html#runContTI",
          "type": "function"
        },
        "index": {
          "description": "Turn computation of type Iter ContT Iter into one of type Iter Note the continuation has to return type Iter and not so that runContTI can call itself recursively",
          "hierarchy": "Data IterIO Trans",
          "module": "Data.IterIO.Trans",
          "name": "runContTI",
          "normalized": "Iter a(ContT(Iter a b c)b)c-\u003eIter a b c",
          "package": "iterIO",
          "partial": "Cont TI",
          "signature": "Iter t(ContT(Iter t m a)m)a-\u003eIter t m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Trans.html#v:runContTI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a computation of type \u003ccode\u003e\u003ccode\u003e\u003ca\u003eIter\u003c/a\u003e\u003c/code\u003e t (\u003ccode\u003e\u003ca\u003eErrorT\u003c/a\u003e\u003c/code\u003e e m)\u003c/code\u003e from within\n the \u003ccode\u003e\u003ccode\u003e\u003ca\u003eIter\u003c/a\u003e\u003c/code\u003e t m\u003c/code\u003e monad.  This function is here for completeness,\n but please consider using \u003ccode\u003e\u003ca\u003ethrowI\u003c/a\u003e\u003c/code\u003e instead, since the \u003ccode\u003e\u003ca\u003eIter\u003c/a\u003e\u003c/code\u003e monad\n already has built-in exception handling and it's best to have a\n single, uniform approach to error reporting.\n\u003c/p\u003e",
          "module": "Data.IterIO.Trans",
          "name": "runErrorTI",
          "package": "iterIO",
          "signature": "Iter t (ErrorT e m) a -\u003e Iter t m (Either e a)",
          "source": "src/Data-IterIO-Trans.html#runErrorTI",
          "type": "function"
        },
        "index": {
          "description": "Run computation of type Iter ErrorT from within the Iter monad This function is here for completeness but please consider using throwI instead since the Iter monad already has built-in exception handling and it best to have single uniform approach to error reporting",
          "hierarchy": "Data IterIO Trans",
          "module": "Data.IterIO.Trans",
          "name": "runErrorTI",
          "normalized": "Iter a(ErrorT b c)d-\u003eIter a c(Either b d)",
          "package": "iterIO",
          "partial": "Error TI",
          "signature": "Iter t(ErrorT e m)a-\u003eIter t m(Either e a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Trans.html#v:runErrorTI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRuns an \u003ccode\u003e\u003ccode\u003e\u003ca\u003eIterStateT\u003c/a\u003e\u003c/code\u003e s m\u003c/code\u003e computation on some state \u003ccode\u003es\u003c/code\u003e.\n Returns the result (\u003ccode\u003e\u003ca\u003eIterR\u003c/a\u003e\u003c/code\u003e) of the \u003ccode\u003e\u003ca\u003eIter\u003c/a\u003e\u003c/code\u003e and the state of \u003ccode\u003es\u003c/code\u003e as\n a pair.  Pulls residual input up to the enclosing \u003ccode\u003e\u003ca\u003eIter\u003c/a\u003e\u003c/code\u003e monad (as\n with \u003ccode\u003e\u003ccode\u003epullupResid\u003c/code\u003e\u003c/code\u003e in \u003ca\u003eData.IterIO.Inum\u003c/a\u003e).\n\u003c/p\u003e",
          "module": "Data.IterIO.Trans",
          "name": "runIterStateT",
          "package": "iterIO",
          "signature": "Iter t (IterStateT s m) a -\u003e s -\u003e Iter t m (IterR t m a, s)",
          "source": "src/Data-IterIO-Trans.html#runIterStateT",
          "type": "function"
        },
        "index": {
          "description": "Runs an IterStateT computation on some state Returns the result IterR of the Iter and the state of as pair Pulls residual input up to the enclosing Iter monad as with pullupResid in Data.IterIO.Inum",
          "hierarchy": "Data IterIO Trans",
          "module": "Data.IterIO.Trans",
          "name": "runIterStateT",
          "normalized": "Iter a(IterStateT b c)d-\u003eb-\u003eIter a c(IterR a c d,b)",
          "package": "iterIO",
          "partial": "Iter State",
          "signature": "Iter t(IterStateT s m)a-\u003es-\u003eIter t m(IterR t m a,s)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Trans.html#v:runIterStateT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun an \u003ccode\u003e\u003ccode\u003e\u003ca\u003eIter\u003c/a\u003e\u003c/code\u003e t (\u003ccode\u003e\u003ca\u003eListT\u003c/a\u003e\u003c/code\u003e m)\u003c/code\u003e computation from within the \u003ccode\u003e\u003ccode\u003e\u003ca\u003eIter\u003c/a\u003e\u003c/code\u003e\n t m\u003c/code\u003e monad.\n\u003c/p\u003e",
          "module": "Data.IterIO.Trans",
          "name": "runListTI",
          "package": "iterIO",
          "signature": "Iter t (ListT m) a -\u003e Iter t m [a]",
          "source": "src/Data-IterIO-Trans.html#runListTI",
          "type": "function"
        },
        "index": {
          "description": "Run an Iter ListT computation from within the Iter monad",
          "hierarchy": "Data IterIO Trans",
          "module": "Data.IterIO.Trans",
          "name": "runListTI",
          "normalized": "Iter a(ListT b)c-\u003eIter a b[c]",
          "package": "iterIO",
          "partial": "List TI",
          "signature": "Iter t(ListT m)a-\u003eIter t m[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Trans.html#v:runListTI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun an \u003ccode\u003e\u003ccode\u003e\u003ca\u003eIter\u003c/a\u003e\u003c/code\u003e t (\u003ccode\u003e\u003ca\u003eRWST\u003c/a\u003e\u003c/code\u003e r w s m)\u003c/code\u003e computation from within the\n \u003ccode\u003e\u003ccode\u003e\u003ca\u003eIter\u003c/a\u003e\u003c/code\u003e t m\u003c/code\u003e monad.\n\u003c/p\u003e",
          "module": "Data.IterIO.Trans",
          "name": "runRWSI",
          "package": "iterIO",
          "signature": "Iter t (RWST r w s m) a-\u003e r-\u003e s-\u003e Iter t m (a, s, w)",
          "type": "function"
        },
        "index": {
          "description": "Run an Iter RWST computation from within the Iter monad",
          "hierarchy": "Data IterIO Trans",
          "module": "Data.IterIO.Trans",
          "name": "runRWSI",
          "normalized": "Iter a(RWST b c d e)f-\u003eb-\u003ed-\u003eIter a e(f,d,c)",
          "package": "iterIO",
          "partial": "RWSI",
          "signature": "Iter t(RWST r w s m)a-\u003er-\u003es-\u003eIter t m(a,s,w)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Trans.html#v:runRWSI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun an \u003ccode\u003e\u003ccode\u003e\u003ca\u003eIter\u003c/a\u003e\u003c/code\u003e t (\u003ccode\u003e\u003ca\u003eRWST\u003c/a\u003e\u003c/code\u003e r w s m)\u003c/code\u003e computation from within\n the \u003ccode\u003e\u003ccode\u003e\u003ca\u003eIter\u003c/a\u003e\u003c/code\u003e t m\u003c/code\u003e monad.  Just like \u003ccode\u003e\u003ca\u003erunRWSI\u003c/a\u003e\u003c/code\u003e, execpt this function\n is for \u003cem\u003eLazy\u003c/em\u003e \u003ccode\u003e\u003ca\u003eRWST\u003c/a\u003e\u003c/code\u003e rather than strict \u003ccode\u003e\u003ca\u003eRWST\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.IterIO.Trans",
          "name": "runRWSLI",
          "package": "iterIO",
          "signature": "Iter t (RWST r w s m) a-\u003e r-\u003e s-\u003e Iter t m (a, s, w)",
          "type": "function"
        },
        "index": {
          "description": "Run an Iter RWST computation from within the Iter monad Just like runRWSI execpt this function is for Lazy RWST rather than strict RWST",
          "hierarchy": "Data IterIO Trans",
          "module": "Data.IterIO.Trans",
          "name": "runRWSLI",
          "normalized": "Iter a(RWST b c d e)f-\u003eb-\u003ed-\u003eIter a e(f,d,c)",
          "package": "iterIO",
          "partial": "RWSLI",
          "signature": "Iter t(RWST r w s m)a-\u003er-\u003es-\u003eIter t m(a,s,w)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Trans.html#v:runRWSLI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun an \u003ccode\u003e\u003ccode\u003e\u003ca\u003eIter\u003c/a\u003e\u003c/code\u003e t (\u003ccode\u003e\u003ca\u003eReaderT\u003c/a\u003e\u003c/code\u003e r m)\u003c/code\u003e computation from within the\n \u003ccode\u003e\u003ccode\u003e\u003ca\u003eIter\u003c/a\u003e\u003c/code\u003e t m\u003c/code\u003e monad.\n\u003c/p\u003e",
          "module": "Data.IterIO.Trans",
          "name": "runReaderTI",
          "package": "iterIO",
          "signature": "Iter t (ReaderT r m) a -\u003e r -\u003e Iter t m a",
          "source": "src/Data-IterIO-Trans.html#runReaderTI",
          "type": "function"
        },
        "index": {
          "description": "Run an Iter ReaderT computation from within the Iter monad",
          "hierarchy": "Data IterIO Trans",
          "module": "Data.IterIO.Trans",
          "name": "runReaderTI",
          "normalized": "Iter a(ReaderT b c)d-\u003eb-\u003eIter a c d",
          "package": "iterIO",
          "partial": "Reader TI",
          "signature": "Iter t(ReaderT r m)a-\u003er-\u003eIter t m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Trans.html#v:runReaderTI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun an \u003ccode\u003e\u003ccode\u003e\u003ca\u003eIter\u003c/a\u003e\u003c/code\u003e t (\u003ccode\u003e\u003ca\u003eStateT\u003c/a\u003e\u003c/code\u003e m)\u003c/code\u003e computation from within the\n \u003ccode\u003e\u003ccode\u003e\u003ca\u003eIter\u003c/a\u003e\u003c/code\u003e t m\u003c/code\u003e monad.\n\u003c/p\u003e",
          "module": "Data.IterIO.Trans",
          "name": "runStateTI",
          "package": "iterIO",
          "signature": "Iter t (StateT s m) a -\u003e s -\u003e Iter t m (a, s)",
          "source": "src/Data-IterIO-Trans.html#runStateTI",
          "type": "function"
        },
        "index": {
          "description": "Run an Iter StateT computation from within the Iter monad",
          "hierarchy": "Data IterIO Trans",
          "module": "Data.IterIO.Trans",
          "name": "runStateTI",
          "normalized": "Iter a(StateT b c)d-\u003eb-\u003eIter a c(d,b)",
          "package": "iterIO",
          "partial": "State TI",
          "signature": "Iter t(StateT s m)a-\u003es-\u003eIter t m(a,s)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Trans.html#v:runStateTI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun an \u003ccode\u003e\u003ccode\u003e\u003ca\u003eIter\u003c/a\u003e\u003c/code\u003e t (\u003ccode\u003e\u003ca\u003eStateT\u003c/a\u003e\u003c/code\u003e m)\u003c/code\u003e computation from within the\n \u003ccode\u003e\u003ccode\u003e\u003ca\u003eIter\u003c/a\u003e\u003c/code\u003e t m\u003c/code\u003e monad.  Just like \u003ccode\u003e\u003ca\u003erunStateTI\u003c/a\u003e\u003c/code\u003e, except this function\n works on \u003cem\u003eLazy\u003c/em\u003e \u003ccode\u003e\u003ca\u003eStateT\u003c/a\u003e\u003c/code\u003e rather than strict \u003ccode\u003e\u003ca\u003eStateT\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.IterIO.Trans",
          "name": "runStateTLI",
          "package": "iterIO",
          "signature": "Iter t (StateT s m) a -\u003e s -\u003e Iter t m (a, s)",
          "source": "src/Data-IterIO-Trans.html#runStateTLI",
          "type": "function"
        },
        "index": {
          "description": "Run an Iter StateT computation from within the Iter monad Just like runStateTI except this function works on Lazy StateT rather than strict StateT",
          "hierarchy": "Data IterIO Trans",
          "module": "Data.IterIO.Trans",
          "name": "runStateTLI",
          "normalized": "Iter a(StateT b c)d-\u003eb-\u003eIter a c(d,b)",
          "package": "iterIO",
          "partial": "State TLI",
          "signature": "Iter t(StateT s m)a-\u003es-\u003eIter t m(a,s)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Trans.html#v:runStateTLI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun an \u003ccode\u003e\u003ccode\u003e\u003ca\u003eIter\u003c/a\u003e\u003c/code\u003e t (\u003ccode\u003e\u003ca\u003eWriterT\u003c/a\u003e\u003c/code\u003e w m)\u003c/code\u003e computation from within the\n \u003ccode\u003e\u003ccode\u003e\u003ca\u003eIter\u003c/a\u003e\u003c/code\u003e t m\u003c/code\u003e monad.\n\u003c/p\u003e",
          "module": "Data.IterIO.Trans",
          "name": "runWriterTI",
          "package": "iterIO",
          "signature": "Iter t (WriterT w m) a -\u003e Iter t m (a, w)",
          "source": "src/Data-IterIO-Trans.html#runWriterTI",
          "type": "function"
        },
        "index": {
          "description": "Run an Iter WriterT computation from within the Iter monad",
          "hierarchy": "Data IterIO Trans",
          "module": "Data.IterIO.Trans",
          "name": "runWriterTI",
          "normalized": "Iter a(WriterT b c)d-\u003eIter a c(d,b)",
          "package": "iterIO",
          "partial": "Writer TI",
          "signature": "Iter t(WriterT w m)a-\u003eIter t m(a,w)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Trans.html#v:runWriterTI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun an \u003ccode\u003e\u003ccode\u003e\u003ca\u003eIter\u003c/a\u003e\u003c/code\u003e t (\u003ccode\u003e\u003ca\u003eWriterT\u003c/a\u003e\u003c/code\u003e w m)\u003c/code\u003e computation from within\n the \u003ccode\u003e\u003ccode\u003e\u003ca\u003eIter\u003c/a\u003e\u003c/code\u003e t m\u003c/code\u003e monad.  This is the same as \u003ccode\u003e\u003ca\u003erunWriterT\u003c/a\u003e\u003c/code\u003e but for\n the \u003cem\u003eLazy\u003c/em\u003e \u003ccode\u003e\u003ca\u003eWriterT\u003c/a\u003e\u003c/code\u003e, rather than the strict one.\n\u003c/p\u003e",
          "module": "Data.IterIO.Trans",
          "name": "runWriterTLI",
          "package": "iterIO",
          "signature": "Iter t (WriterT w m) a -\u003e Iter t m (a, w)",
          "source": "src/Data-IterIO-Trans.html#runWriterTLI",
          "type": "function"
        },
        "index": {
          "description": "Run an Iter WriterT computation from within the Iter monad This is the same as runWriterT but for the Lazy WriterT rather than the strict one",
          "hierarchy": "Data IterIO Trans",
          "module": "Data.IterIO.Trans",
          "name": "runWriterTLI",
          "normalized": "Iter a(WriterT b c)d-\u003eIter a c(d,b)",
          "package": "iterIO",
          "partial": "Writer TLI",
          "signature": "Iter t(WriterT w m)a-\u003eIter t m(a,w)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Trans.html#v:runWriterTLI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.IterIO.Zlib",
          "name": "Zlib",
          "package": "iterIO",
          "source": "src/Data-IterIO-Zlib.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data IterIO Zlib",
          "module": "Data.IterIO.Zlib",
          "name": "Zlib",
          "package": "iterIO",
          "partial": "Zlib",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Zlib.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.IterIO.Zlib",
          "name": "ZMethod",
          "package": "iterIO",
          "source": "src/Data-IterIO-ZlibInt.html#ZMethod",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data IterIO Zlib",
          "module": "Data.IterIO.Zlib",
          "name": "ZMethod",
          "package": "iterIO",
          "partial": "ZMethod",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Zlib.html#t:ZMethod"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eState used by \u003ccode\u003e\u003ca\u003einumZState\u003c/a\u003e\u003c/code\u003e, the most generic zlib \u003ccode\u003e\u003ca\u003eInum\u003c/a\u003e\u003c/code\u003e.\n Create the state using \u003ccode\u003e\u003ca\u003edeflateInit2\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003einflateInit2\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.IterIO.Zlib",
          "name": "ZState",
          "package": "iterIO",
          "source": "src/Data-IterIO-Zlib.html#ZState",
          "type": "data"
        },
        "index": {
          "description": "State used by inumZState the most generic zlib Inum Create the state using deflateInit2 or inflateInit2",
          "hierarchy": "Data IterIO Zlib",
          "module": "Data.IterIO.Zlib",
          "name": "ZState",
          "package": "iterIO",
          "partial": "ZState",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Zlib.html#t:ZState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.IterIO.Zlib",
          "name": "ZStrategy",
          "package": "iterIO",
          "source": "src/Data-IterIO-ZlibInt.html#ZStrategy",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data IterIO Zlib",
          "module": "Data.IterIO.Zlib",
          "name": "ZStrategy",
          "package": "iterIO",
          "partial": "ZStrategy",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Zlib.html#t:ZStrategy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.IterIO.Zlib",
          "name": "def_mem_level",
          "package": "iterIO",
          "signature": "CInt",
          "source": "src/Data-IterIO-ZlibInt.html#def_mem_level",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data IterIO Zlib",
          "module": "Data.IterIO.Zlib",
          "name": "def_mem_level",
          "package": "iterIO",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Zlib.html#v:def_mem_level"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a \u003ccode\u003e\u003ca\u003eZState\u003c/a\u003e\u003c/code\u003e for compression.  See the description of\n \u003ccode\u003edeflateInit2\u003c/code\u003e in the zlib.h C header file for a more detailed\n description of the arguments.  Note in particular that the value of\n \u003ccode\u003ewindowBits\u003c/code\u003e determines the encapsulation format of the compressed\n data:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e   8..15 = zlib format\n\u003c/li\u003e\u003cli\u003e  24..31 = gzip format\n\u003c/li\u003e\u003cli\u003e -8..-15 = means raw zlib format with no header\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Data.IterIO.Zlib",
          "name": "deflateInit2",
          "package": "iterIO",
          "signature": "CInt-\u003e ZMethod-\u003e CInt-\u003e CInt-\u003e ZStrategy-\u003e IO ZState",
          "type": "function"
        },
        "index": {
          "description": "Create ZState for compression See the description of deflateInit2 in the zlib.h header file for more detailed description of the arguments Note in particular that the value of windowBits determines the encapsulation format of the compressed data zlib format gzip format means raw zlib format with no header",
          "hierarchy": "Data IterIO Zlib",
          "module": "Data.IterIO.Zlib",
          "name": "deflateInit2",
          "normalized": "CInt-\u003eZMethod-\u003eCInt-\u003eCInt-\u003eZStrategy-\u003eIO ZState",
          "package": "iterIO",
          "partial": "Init",
          "signature": "CInt-\u003eZMethod-\u003eCInt-\u003eCInt-\u003eZStrategy-\u003eIO ZState",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Zlib.html#v:deflateInit2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a \u003ccode\u003eZstate\u003c/code\u003e for uncompression.  See the description of\n \u003ccode\u003einflateInit2\u003c/code\u003e in the zlib.h C header file for a more detailed\n description of the arguments.  Note in particular that the value of\n \u003ccode\u003ewindowBits\u003c/code\u003e determines the encapsulation format of the compressed\n data:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e   8..15 = zlib format\n\u003c/li\u003e\u003cli\u003e  24..31 = gzip format\n\u003c/li\u003e\u003cli\u003e  40..47 = automatically determine zlib/gzip format\n\u003c/li\u003e\u003cli\u003e -8..-15 = means raw zlib format with no header\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Data.IterIO.Zlib",
          "name": "inflateInit2",
          "package": "iterIO",
          "signature": "CInt-\u003e IO ZState",
          "type": "function"
        },
        "index": {
          "description": "Create Zstate for uncompression See the description of inflateInit2 in the zlib.h header file for more detailed description of the arguments Note in particular that the value of windowBits determines the encapsulation format of the compressed data zlib format gzip format automatically determine zlib gzip format means raw zlib format with no header",
          "hierarchy": "Data IterIO Zlib",
          "module": "Data.IterIO.Zlib",
          "name": "inflateInit2",
          "normalized": "CInt-\u003eIO ZState",
          "package": "iterIO",
          "partial": "Init",
          "signature": "CInt-\u003eIO ZState",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Zlib.html#v:inflateInit2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn \u003ccode\u003e\u003ca\u003eInum\u003c/a\u003e\u003c/code\u003e that uncompresses a data in either the zlib or gzip\n format.  Note that this only uncompresses one gzip stream.  Thus,\n if you feed in the concatenation of multiple gzipped files,\n \u003ccode\u003einumGunzip\u003c/code\u003e will stop after the first one.  If this is not what\n you want, then use \u003ccode\u003e\u003ccode\u003e\u003ca\u003einumRepeat\u003c/a\u003e\u003c/code\u003e inumGunzip\u003c/code\u003e to decode repeated\n gzip streams.\n\u003c/p\u003e",
          "module": "Data.IterIO.Zlib",
          "name": "inumGunzip",
          "package": "iterIO",
          "signature": "Inum ByteString ByteString m a",
          "source": "src/Data-IterIO-Zlib.html#inumGunzip",
          "type": "function"
        },
        "index": {
          "description": "An Inum that uncompresses data in either the zlib or gzip format Note that this only uncompresses one gzip stream Thus if you feed in the concatenation of multiple gzipped files inumGunzip will stop after the first one If this is not what you want then use inumRepeat inumGunzip to decode repeated gzip streams",
          "hierarchy": "Data IterIO Zlib",
          "module": "Data.IterIO.Zlib",
          "name": "inumGunzip",
          "package": "iterIO",
          "partial": "Gunzip",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Zlib.html#v:inumGunzip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn \u003ccode\u003e\u003ca\u003eInum\u003c/a\u003e\u003c/code\u003e that compresses in gzip format.\n\u003c/p\u003e",
          "module": "Data.IterIO.Zlib",
          "name": "inumGzip",
          "package": "iterIO",
          "signature": "Inum ByteString ByteString m a",
          "source": "src/Data-IterIO-Zlib.html#inumGzip",
          "type": "function"
        },
        "index": {
          "description": "An Inum that compresses in gzip format",
          "hierarchy": "Data IterIO Zlib",
          "module": "Data.IterIO.Zlib",
          "name": "inumGzip",
          "package": "iterIO",
          "partial": "Gzip",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Zlib.html#v:inumGzip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe most general zlib \u003ccode\u003e\u003ca\u003eInum\u003c/a\u003e\u003c/code\u003e, which can take any \u003ccode\u003e\u003ca\u003eZState\u003c/a\u003e\u003c/code\u003e created\n by \u003ccode\u003e\u003ca\u003edeflateInit2\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003einflateInit2\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.IterIO.Zlib",
          "name": "inumZState",
          "package": "iterIO",
          "signature": "ZState -\u003e Inum ByteString ByteString m a",
          "source": "src/Data-IterIO-Zlib.html#inumZState",
          "type": "function"
        },
        "index": {
          "description": "The most general zlib Inum which can take any ZState created by deflateInit2 or inflateInit2",
          "hierarchy": "Data IterIO Zlib",
          "module": "Data.IterIO.Zlib",
          "name": "inumZState",
          "normalized": "ZState-\u003eInum ByteString ByteString a b",
          "package": "iterIO",
          "partial": "ZState",
          "signature": "ZState-\u003eInum ByteString ByteString m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Zlib.html#v:inumZState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn \u003ccode\u003e\u003ca\u003eInum\u003c/a\u003e\u003c/code\u003e that compresses in zlib format.  To uncompress, use\n \u003ccode\u003e\u003ca\u003einumGunzip\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.IterIO.Zlib",
          "name": "inumZlib",
          "package": "iterIO",
          "signature": "Inum ByteString ByteString m a",
          "source": "src/Data-IterIO-Zlib.html#inumZlib",
          "type": "function"
        },
        "index": {
          "description": "An Inum that compresses in zlib format To uncompress use inumGunzip",
          "hierarchy": "Data IterIO Zlib",
          "module": "Data.IterIO.Zlib",
          "name": "inumZlib",
          "package": "iterIO",
          "partial": "Zlib",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Zlib.html#v:inumZlib"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.IterIO.Zlib",
          "name": "max_mem_level",
          "package": "iterIO",
          "signature": "CInt",
          "source": "src/Data-IterIO-ZlibInt.html#max_mem_level",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data IterIO Zlib",
          "module": "Data.IterIO.Zlib",
          "name": "max_mem_level",
          "package": "iterIO",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Zlib.html#v:max_mem_level"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUse this value for zlib format.  Add 16 for gzip format.  Negate\n for raw zlib format.  When uncompressing, add 32 to determine\n zlib/gzip format automatically.\n\u003c/p\u003e",
          "module": "Data.IterIO.Zlib",
          "name": "max_wbits",
          "package": "iterIO",
          "signature": "CInt",
          "source": "src/Data-IterIO-ZlibInt.html#max_wbits",
          "type": "function"
        },
        "index": {
          "description": "Use this value for zlib format Add for gzip format Negate for raw zlib format When uncompressing add to determine zlib gzip format automatically",
          "hierarchy": "Data IterIO Zlib",
          "module": "Data.IterIO.Zlib",
          "name": "max_wbits",
          "package": "iterIO",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Zlib.html#v:max_wbits"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.IterIO.Zlib",
          "name": "z_DEFAULT_COMPRESSION",
          "package": "iterIO",
          "signature": "CInt",
          "source": "src/Data-IterIO-ZlibInt.html#z_DEFAULT_COMPRESSION",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data IterIO Zlib",
          "module": "Data.IterIO.Zlib",
          "name": "z_DEFAULT_COMPRESSION",
          "package": "iterIO",
          "partial": "DEFAULT COMPRESSION",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Zlib.html#v:z_DEFAULT_COMPRESSION"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.IterIO.Zlib",
          "name": "z_DEFAULT_STRATEGY",
          "package": "iterIO",
          "signature": "ZStrategy",
          "source": "src/Data-IterIO-ZlibInt.html#z_DEFAULT_STRATEGY",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data IterIO Zlib",
          "module": "Data.IterIO.Zlib",
          "name": "z_DEFAULT_STRATEGY",
          "package": "iterIO",
          "partial": "DEFAULT STRATEGY",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Zlib.html#v:z_DEFAULT_STRATEGY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.IterIO.Zlib",
          "name": "z_DEFLATED",
          "package": "iterIO",
          "signature": "ZMethod",
          "source": "src/Data-IterIO-ZlibInt.html#z_DEFLATED",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data IterIO Zlib",
          "module": "Data.IterIO.Zlib",
          "name": "z_DEFLATED",
          "package": "iterIO",
          "partial": "DEFLATED",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Zlib.html#v:z_DEFLATED"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.IterIO.Zlib",
          "name": "z_FILTERED",
          "package": "iterIO",
          "signature": "ZStrategy",
          "source": "src/Data-IterIO-ZlibInt.html#z_FILTERED",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data IterIO Zlib",
          "module": "Data.IterIO.Zlib",
          "name": "z_FILTERED",
          "package": "iterIO",
          "partial": "FILTERED",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Zlib.html#v:z_FILTERED"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.IterIO.Zlib",
          "name": "z_FIXED",
          "package": "iterIO",
          "signature": "ZStrategy",
          "source": "src/Data-IterIO-ZlibInt.html#z_FIXED",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data IterIO Zlib",
          "module": "Data.IterIO.Zlib",
          "name": "z_FIXED",
          "package": "iterIO",
          "partial": "FIXED",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Zlib.html#v:z_FIXED"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.IterIO.Zlib",
          "name": "z_HUFFMAN_ONLY",
          "package": "iterIO",
          "signature": "ZStrategy",
          "source": "src/Data-IterIO-ZlibInt.html#z_HUFFMAN_ONLY",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data IterIO Zlib",
          "module": "Data.IterIO.Zlib",
          "name": "z_HUFFMAN_ONLY",
          "package": "iterIO",
          "partial": "HUFFMAN ONLY",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Zlib.html#v:z_HUFFMAN_ONLY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.IterIO.Zlib",
          "name": "z_RLE",
          "package": "iterIO",
          "signature": "ZStrategy",
          "source": "src/Data-IterIO-ZlibInt.html#z_RLE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data IterIO Zlib",
          "module": "Data.IterIO.Zlib",
          "name": "z_RLE",
          "package": "iterIO",
          "partial": "RLE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Zlib.html#v:z_RLE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.IterIO.Zlib",
          "name": "zlib_version",
          "package": "iterIO",
          "signature": "CString",
          "source": "src/Data-IterIO-ZlibInt.html#zlib_version",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data IterIO Zlib",
          "module": "Data.IterIO.Zlib",
          "name": "zlib_version",
          "package": "iterIO",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO-Zlib.html#v:zlib_version"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis is the main module to import for the IterIO package.  It\nre-exports several other modules and mostly consists of\ndocumentation--first a high-level overview of the iteratee model, then\na more detailed tutorial, finally a discussion of the differences from\nother iteratee packages and acknowledgments.\n\u003c/p\u003e\u003cp\u003eSee the \u003ca\u003eData.IterIO.Iter\u003c/a\u003e, \u003ca\u003eData.IterIO.Inum\u003c/a\u003e, and\n\u003ca\u003eData.IterIO.ListLike\u003c/a\u003e modules for more detailed documentation of data\nstructures and functions.  In addition, \u003ca\u003eData.IterIO.Trans\u003c/a\u003e (also\nre-exported by this module) supplies functions that help you invoke\nmonad transformers from the mtl library from within the \u003ccode\u003e\u003ca\u003eIter\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e\u003cp\u003eSeveral other potentially useful modules in the package are not\nexported by default:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ca\u003eData.IterIO.Parse\u003c/a\u003e includes parsec-like parsing combinators for\n   iteratee input.\n\u003c/li\u003e\u003cli\u003e \u003ca\u003eData.IterIO.Zlib\u003c/a\u003e provides zlib and gzip format compression and\n   decompression.\n\u003c/li\u003e\u003cli\u003e \u003ca\u003eData.IterIO.SSL\u003c/a\u003e provides support for SSL.\n\u003c/li\u003e\u003cli\u003e \u003ca\u003eData.IterIO.Http\u003c/a\u003e provides support for parsing and formatting\n   HTTP, including handling form and file uploads (which can be\n   processed in constant space).  This may be useful in conjunction\n   with \u003ca\u003eData.IterIO.HttpRoute\u003c/a\u003e, which provides simple request routing\n   support for web servers.\n\u003c/li\u003e\u003cli\u003e \u003ca\u003eData.IterIO.Atto\u003c/a\u003e provides support for running attoparsec parsers\n   on iteratee input (see\n   \u003ca\u003ehttp://hackage.haskell.org/package/attoparsec/\u003c/a\u003e).\n\u003c/li\u003e\u003cli\u003e \u003ca\u003eData.IterIO.Extra\u003c/a\u003e provides debugging functions, as well as a\n   loopback iteratee that can be used to test a protocol\n   implementation against itself.\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
          "module": "Data.IterIO",
          "name": "IterIO",
          "package": "iterIO",
          "source": "src/Data-IterIO.html",
          "type": "module"
        },
        "index": {
          "description": "This is the main module to import for the IterIO package It re-exports several other modules and mostly consists of documentation--first high-level overview of the iteratee model then more detailed tutorial finally discussion of the differences from other iteratee packages and acknowledgments See the Data.IterIO.Iter Data.IterIO.Inum and Data.IterIO.ListLike modules for more detailed documentation of data structures and functions In addition Data.IterIO.Trans also re-exported by this module supplies functions that help you invoke monad transformers from the mtl library from within the Iter monad Several other potentially useful modules in the package are not exported by default Data.IterIO.Parse includes parsec-like parsing combinators for iteratee input Data.IterIO.Zlib provides zlib and gzip format compression and decompression Data.IterIO.SSL provides support for SSL Data.IterIO.Http provides support for parsing and formatting HTTP including handling form and file uploads which can be processed in constant space This may be useful in conjunction with Data.IterIO.HttpRoute which provides simple request routing support for web servers Data.IterIO.Atto provides support for running attoparsec parsers on iteratee input see http hackage.haskell.org package attoparsec Data.IterIO.Extra provides debugging functions as well as loopback iteratee that can be used to test protocol implementation against itself",
          "hierarchy": "Data IterIO",
          "module": "Data.IterIO",
          "name": "IterIO",
          "package": "iterIO",
          "partial": "Iter IO",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/iterIO/docs/Data-IterIO.html#"
      }
    }
  ]
]