[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/splice/docs/Network-Socket-Splice.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis library implements most efficient socket to socket data transfer loops\n  for proxy servers on each operating system.\n\u003c/p\u003e\u003cp\u003eOn GNU/Linux, it uses and exposes the zero-copy \u003ccode\u003esplice()\u003c/code\u003e system call:\n  \u003ca\u003ehttp://kerneltrap.org/node/6505\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eOn all other operating systems, it currently falls back to a portable Haskell\n  implementation &#8211; which allocates a single memory buffer in user address space,\n  then enters an inner loop that uses \u003ccode\u003e\u003ca\u003ehGetBufSome\u003c/a\u003e\u003c/code\u003e and\n  \u003ccode\u003e\u003ca\u003ehPutBuf\u003c/a\u003e\u003c/code\u003e. This avoids lots of tiny allocations as would otherwise\n  be caused by \u003ccode\u003e\u003ca\u003erecv\u003c/a\u003e\u003c/code\u003e and\n  \u003ccode\u003e\u003ca\u003esendAll\u003c/a\u003e\u003c/code\u003e from the \u003ccode\u003ebytestring\u003c/code\u003e package.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Network.Socket.Splice",
        "fct-package": "splice",
        "fct-signature": "module",
        "fct-source": "src/Network-Socket-Splice.html",
        "fct-type": "module",
        "title": "Splice"
      },
      "index": {
        "description": "This library implements most efficient socket to socket data transfer loops for proxy servers on each operating system On GNU Linux it uses and exposes the zero-copy splice system call http kerneltrap.org node On all other operating systems it currently falls back to portable Haskell implementation which allocates single memory buffer in user address space then enters an inner loop that uses hGetBufSome and hPutBuf This avoids lots of tiny allocations as would otherwise be caused by recv and sendAll from the bytestring package",
        "hierarchy": "Network Socket Splice",
        "module": "Network.Socket.Splice",
        "name": "Splice",
        "normalized": "",
        "package": "splice",
        "partial": "Splice",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/splice/docs/Network-Socket-Splice.html#t:ChunkSize",
      "description": {
        "fct-descr": "\u003cp\u003eThe numeric type to recommend chunk sizes for moving data between sockets\n   used by both zero-copy and portable implementations of \u003ccode\u003e\u003ca\u003esplice\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Network.Socket.Splice",
        "fct-package": "splice",
        "fct-signature": "type",
        "fct-source": "src/Network-Socket-Splice-Internal.html#ChunkSize",
        "fct-type": "type",
        "title": "ChunkSize"
      },
      "index": {
        "description": "The numeric type to recommend chunk sizes for moving data between sockets used by both zero-copy and portable implementations of splice",
        "hierarchy": "Network Socket Splice",
        "module": "Network.Socket.Splice",
        "name": "ChunkSize",
        "normalized": "",
        "package": "splice",
        "partial": "Chunk Size",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/splice/docs/Network-Socket-Splice.html#v:hSplice",
      "description": {
        "fct-descr": "\u003cp\u003eThe portable Haskell loop.\n\u003c/p\u003e\u003col\u003e\u003cli\u003e allocates a \u003cem\u003esingle\u003c/em\u003e memory buffer in user address space\n\u003c/li\u003e\u003cli\u003e uses it until the loop terminates by exception\n\u003c/li\u003e\u003cli\u003e frees the buffer and returns\n\u003c/li\u003e\u003c/ol\u003e\u003cdl\u003e\u003cdt\u003eNotes\u003c/dt\u003e\u003cdd\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003cul\u003e\u003cli\u003e the socket handles are required to be in \u003ccode\u003e\u003ca\u003eNoBuffering\u003c/a\u003e\u003c/code\u003e mode.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Network.Socket.Splice",
        "fct-package": "splice",
        "fct-signature": "Int -\u003e Handle -\u003e Handle -\u003e IO ()",
        "fct-source": "src/Network-Socket-Splice-Internal.html#hSplice",
        "fct-type": "function",
        "title": "hSplice"
      },
      "index": {
        "description": "The portable Haskell loop allocates single memory buffer in user address space uses it until the loop terminates by exception frees the buffer and returns Notes the socket handles are required to be in NoBuffering mode",
        "hierarchy": "Network Socket Splice",
        "module": "Network.Socket.Splice",
        "name": "hSplice",
        "normalized": "Int-\u003eHandle-\u003eHandle-\u003eIO()",
        "package": "splice",
        "partial": "Splice",
        "signature": "Int-\u003eHandle-\u003eHandle-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/splice/docs/Network-Socket-Splice.html#v:splice",
      "description": {
        "fct-descr": "\u003cp\u003ePipes data from one socket to another in an \u003cem\u003einfinite loop\u003c/em\u003e.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003esplice\u003c/a\u003e\u003c/code\u003e currently has two implementations:\n\u003c/p\u003e\u003cdl\u003e\u003cdt\u003eon GNU/Linux using \u003ccode\u003efdSplice\u003c/code\u003e &#8773;\u003c/dt\u003e\u003cdd\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003cpre\u003e splice len (sIn, _       ) (sOut, _        ) = ... fdSplice ...\n\u003c/pre\u003e\u003cdl\u003e\u003cdt\u003eon all other operating systems using \u003ccode\u003e\u003ca\u003ehSplice\u003c/a\u003e\u003c/code\u003e &#8773;\u003c/dt\u003e\u003cdd\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003cpre\u003e splice len (_  , Just hIn) (_   , Just hOut) = ... hSplice  ...\n\u003c/pre\u003e\u003cdl\u003e\u003cdt\u003eNotes\u003c/dt\u003e\u003cdd\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003efdSplice\u003c/code\u003e and \u003ccode\u003efdSplice\u003c/code\u003e implementation of \u003ccode\u003e\u003ca\u003esplice\u003c/a\u003e\u003c/code\u003e are only available\n        on GNU/Linux.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003ehSplice\u003c/a\u003e\u003c/code\u003e is always available and the \u003ccode\u003e\u003ca\u003ehSplice\u003c/a\u003e\u003c/code\u003e implementation of\n       \u003ccode\u003e\u003ca\u003esplice\u003c/a\u003e\u003c/code\u003e can be forced on GNU/Linux by defining the \u003ccode\u003eportable\u003c/code\u003e flag at\n       compile time.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003ehSplice\u003c/a\u003e\u003c/code\u003e implementation requires handles in \u003ccode\u003e\u003ca\u003eNoBuffering\u003c/a\u003e\u003c/code\u003e mode.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003esplice\u003c/a\u003e\u003c/code\u003e is a terminal loop on two sockets and once entered its sockets\n        and handles cannot be interleaved by other IO operations.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Network.Socket.Splice",
        "fct-package": "splice",
        "fct-signature": "ChunkSize-\u003e (Socket, Maybe Handle)-\u003e (Socket, Maybe Handle)-\u003e IO ()",
        "fct-type": "function",
        "title": "splice"
      },
      "index": {
        "description": "Pipes data from one socket to another in an infinite loop splice currently has two implementations on GNU Linux using fdSplice splice len sIn sOut fdSplice on all other operating systems using hSplice splice len Just hIn Just hOut hSplice Notes fdSplice and fdSplice implementation of splice are only available on GNU Linux hSplice is always available and the hSplice implementation of splice can be forced on GNU Linux by defining the portable flag at compile time hSplice implementation requires handles in NoBuffering mode splice is terminal loop on two sockets and once entered its sockets and handles cannot be interleaved by other IO operations",
        "hierarchy": "Network Socket Splice",
        "module": "Network.Socket.Splice",
        "name": "splice",
        "normalized": "ChunkSize-\u003e(Socket,Maybe Handle)-\u003e(Socket,Maybe Handle)-\u003eIO()",
        "package": "splice",
        "partial": "",
        "signature": "ChunkSize-\u003e(Socket,Maybe Handle)-\u003e(Socket,Maybe Handle)-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/splice/docs/Network-Socket-Splice.html#v:tryWith",
      "description": {
        "fct-descr": "\u003cp\u003eSimilar to \u003ccode\u003e\u003ca\u003etry\u003c/a\u003e\u003c/code\u003e but used when an obvious exception\n   is expected and can be handled easily. Unlike \u003ccode\u003e\u003ca\u003efinally\u003c/a\u003e\u003c/code\u003e exceptions are\n   \u003cem\u003eNOT\u003c/em\u003e rethrown once handled.\n\u003c/p\u003e",
        "fct-module": "Network.Socket.Splice",
        "fct-package": "splice",
        "fct-signature": "(SomeException -\u003e IO a)-\u003e IO a-\u003e IO a",
        "fct-type": "function",
        "title": "tryWith"
      },
      "index": {
        "description": "Similar to try but used when an obvious exception is expected and can be handled easily Unlike finally exceptions are NOT rethrown once handled",
        "hierarchy": "Network Socket Splice",
        "module": "Network.Socket.Splice",
        "name": "tryWith",
        "normalized": "(SomeException-\u003eIO a)-\u003eIO a-\u003eIO a",
        "package": "splice",
        "partial": "With",
        "signature": "(SomeException-\u003eIO a)-\u003eIO a-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/splice/docs/Network-Socket-Splice.html#v:try_",
      "description": {
        "fct-descr": "\u003cp\u003eSimilar to \u003ccode\u003e\u003ca\u003etry\u003c/a\u003e\u003c/code\u003e but used when an obvious exception\n   is expected which can be safely ignored.\n\u003c/p\u003e",
        "fct-module": "Network.Socket.Splice",
        "fct-package": "splice",
        "fct-signature": "IO ()-\u003e IO ()",
        "fct-type": "function",
        "title": "try_"
      },
      "index": {
        "description": "Similar to try but used when an obvious exception is expected which can be safely ignored",
        "hierarchy": "Network Socket Splice",
        "module": "Network.Socket.Splice",
        "name": "try_",
        "normalized": "IO()-\u003eIO()",
        "package": "splice",
        "partial": "",
        "signature": "IO()-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/splice/docs/Network-Socket-Splice.html#v:zeroCopy",
      "description": {
        "fct-descr": "\u003cp\u003eIndicates whether \u003ccode\u003e\u003ca\u003esplice\u003c/a\u003e\u003c/code\u003e uses zero-copy system calls or the portable user\n   space Haskell implementation.\n\u003c/p\u003e",
        "fct-module": "Network.Socket.Splice",
        "fct-package": "splice",
        "fct-signature": "Bool",
        "fct-type": "function",
        "title": "zeroCopy"
      },
      "index": {
        "description": "Indicates whether splice uses zero-copy system calls or the portable user space Haskell implementation",
        "hierarchy": "Network Socket Splice",
        "module": "Network.Socket.Splice",
        "name": "zeroCopy",
        "normalized": "",
        "package": "splice",
        "partial": "Copy",
        "signature": ""
      }
    }
  }
]