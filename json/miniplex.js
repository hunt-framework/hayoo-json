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
        "word": "miniplex"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAsynchronous message broadcasting.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.Miniplex.Sink",
          "name": "Sink",
          "package": "miniplex",
          "source": "src/System-Miniplex-Sink.html",
          "type": "module"
        },
        "index": {
          "description": "Asynchronous message broadcasting",
          "hierarchy": "System Miniplex Sink",
          "module": "System.Miniplex.Sink",
          "name": "Sink",
          "package": "miniplex",
          "partial": "Sink",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/miniplex/docs/System-Miniplex-Sink.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Miniplex.Sink",
          "name": "Sink",
          "package": "miniplex",
          "source": "src/System-Miniplex-Sink.html#Sink",
          "type": "data"
        },
        "index": {
          "hierarchy": "System Miniplex Sink",
          "module": "System.Miniplex.Sink",
          "name": "Sink",
          "package": "miniplex",
          "partial": "Sink",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/miniplex/docs/System-Miniplex-Sink.html#t:Sink"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003ecreate\u003c/a\u003e\u003c/code\u003e tag\u003c/code\u003e creates a message sink. \u003ccode\u003etag\u003c/code\u003e is used to uniquely\n identify this sink. The set of allowed characters for \u003ccode\u003etag\u003c/code\u003e includes\n letters, digits, \u003ccode\u003e_\u003c/code\u003e, \u003ccode\u003e-\u003c/code\u003e and \u003ccode\u003e+\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e(Implementation detail: This function actually creates a named socket\n in your \u003ccode\u003e~/.miniplex/\u003c/code\u003e.)\n\u003c/p\u003e",
          "module": "System.Miniplex.Sink",
          "name": "create",
          "package": "miniplex",
          "signature": "String -\u003e IO Sink",
          "source": "src/System-Miniplex-Sink.html#create",
          "type": "function"
        },
        "index": {
          "description": "create tag creates message sink tag is used to uniquely identify this sink The set of allowed characters for tag includes letters digits and Implementation detail This function actually creates named socket in your miniplex",
          "hierarchy": "System Miniplex Sink",
          "module": "System.Miniplex.Sink",
          "name": "create",
          "normalized": "String-\u003eIO Sink",
          "package": "miniplex",
          "signature": "String-\u003eIO Sink",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/miniplex/docs/System-Miniplex-Sink.html#v:create"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDeallocates a sink. The destroyed sink must not be used again.\n\u003c/p\u003e\u003cp\u003e(Implementation detail: This function closes and removes the socket from\n the file system. If you forget to call it, you'll leave a stale entry in\n \u003ccode\u003e~/.miniplex/\u003c/code\u003e, which will cause calls to \u003ccode\u003e\u003ca\u003ecreate\u003c/a\u003e\u003c/code\u003e with the same tag to\n fail.)\n\u003c/p\u003e",
          "module": "System.Miniplex.Sink",
          "name": "destroy",
          "package": "miniplex",
          "signature": "Sink -\u003e IO ()",
          "source": "src/System-Miniplex-Sink.html#destroy",
          "type": "function"
        },
        "index": {
          "description": "Deallocates sink The destroyed sink must not be used again Implementation detail This function closes and removes the socket from the file system If you forget to call it you ll leave stale entry in miniplex which will cause calls to create with the same tag to fail",
          "hierarchy": "System Miniplex Sink",
          "module": "System.Miniplex.Sink",
          "name": "destroy",
          "normalized": "Sink-\u003eIO()",
          "package": "miniplex",
          "signature": "Sink-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/miniplex/docs/System-Miniplex-Sink.html#v:destroy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHelper function to simplify resource handling. \u003ccode\u003e\u003ccode\u003e\u003ca\u003ewithSink\u003c/a\u003e\u003c/code\u003e tag body\u003c/code\u003e\n creates a sink, calls \u003ccode\u003ebody\u003c/code\u003e, then destroys the sink, even if \u003ccode\u003ebody\u003c/code\u003e\n throws an exception.\n\u003c/p\u003e",
          "module": "System.Miniplex.Sink",
          "name": "withSink",
          "package": "miniplex",
          "signature": "String -\u003e (Sink -\u003e IO a) -\u003e IO a",
          "source": "src/System-Miniplex-Sink.html#withSink",
          "type": "function"
        },
        "index": {
          "description": "Helper function to simplify resource handling withSink tag body creates sink calls body then destroys the sink even if body throws an exception",
          "hierarchy": "System Miniplex Sink",
          "module": "System.Miniplex.Sink",
          "name": "withSink",
          "normalized": "String-\u003e(Sink-\u003eIO a)-\u003eIO a",
          "package": "miniplex",
          "partial": "Sink",
          "signature": "String-\u003e(Sink-\u003eIO a)-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/miniplex/docs/System-Miniplex-Sink.html#v:withSink"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003ewrite\u003c/a\u003e\u003c/code\u003e si msg\u003c/code\u003e asynchronously writes \u003ccode\u003emsg\u003c/code\u003e to \u003ccode\u003esi\u003c/code\u003e, where it will be\n received by all currently connected readers.\n\u003c/p\u003e",
          "module": "System.Miniplex.Sink",
          "name": "write",
          "package": "miniplex",
          "signature": "Sink -\u003e String -\u003e IO ()",
          "source": "src/System-Miniplex-Sink.html#write",
          "type": "function"
        },
        "index": {
          "description": "write si msg asynchronously writes msg to si where it will be received by all currently connected readers",
          "hierarchy": "System Miniplex Sink",
          "module": "System.Miniplex.Sink",
          "name": "write",
          "normalized": "Sink-\u003eString-\u003eIO()",
          "package": "miniplex",
          "signature": "Sink-\u003eString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/miniplex/docs/System-Miniplex-Sink.html#v:write"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSynchronous message receiving.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.Miniplex.Source",
          "name": "Source",
          "package": "miniplex",
          "source": "src/System-Miniplex-Source.html",
          "type": "module"
        },
        "index": {
          "description": "Synchronous message receiving",
          "hierarchy": "System Miniplex Source",
          "module": "System.Miniplex.Source",
          "name": "Source",
          "package": "miniplex",
          "partial": "Source",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/miniplex/docs/System-Miniplex-Source.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Miniplex.Source",
          "name": "Source",
          "package": "miniplex",
          "source": "src/System-Miniplex-Source.html#Source",
          "type": "data"
        },
        "index": {
          "hierarchy": "System Miniplex Source",
          "module": "System.Miniplex.Source",
          "name": "Source",
          "package": "miniplex",
          "partial": "Source",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/miniplex/docs/System-Miniplex-Source.html#t:Source"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eattach\u003c/a\u003e\u003c/code\u003e tag\u003c/code\u003e returns a message source connected to the sink created by\n a call to \u003ccode\u003e\u003ccode\u003eSystem.Miniplex.Sink.create\u003c/code\u003e tag\u003c/code\u003e. If no such sink exists, an\n exception is thrown.\n\u003c/p\u003e",
          "module": "System.Miniplex.Source",
          "name": "attach",
          "package": "miniplex",
          "signature": "String -\u003e IO Source",
          "source": "src/System-Miniplex-Source.html#attach",
          "type": "function"
        },
        "index": {
          "description": "attach tag returns message source connected to the sink created by call to System.Miniplex.Sink.create tag If no such sink exists an exception is thrown",
          "hierarchy": "System Miniplex Source",
          "module": "System.Miniplex.Source",
          "name": "attach",
          "normalized": "String-\u003eIO Source",
          "package": "miniplex",
          "signature": "String-\u003eIO Source",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/miniplex/docs/System-Miniplex-Source.html#v:attach"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimilar to \u003ccode\u003e\u003ca\u003eattach\u003c/a\u003e\u003c/code\u003e, but if the specified sink doesn't exist, \u003ccode\u003e\u003ca\u003eattachWait\u003c/a\u003e\u003c/code\u003e\n blocks until it becomes available.\n\u003c/p\u003e",
          "module": "System.Miniplex.Source",
          "name": "attachWait",
          "package": "miniplex",
          "signature": "String -\u003e IO Source",
          "source": "src/System-Miniplex-Source.html#attachWait",
          "type": "function"
        },
        "index": {
          "description": "Similar to attach but if the specified sink doesn exist attachWait blocks until it becomes available",
          "hierarchy": "System Miniplex Source",
          "module": "System.Miniplex.Source",
          "name": "attachWait",
          "normalized": "String-\u003eIO Source",
          "package": "miniplex",
          "partial": "Wait",
          "signature": "String-\u003eIO Source",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/miniplex/docs/System-Miniplex-Source.html#v:attachWait"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDisconnects from a message sink. The detached source becomes invalid\n and must not be used again.\n\u003c/p\u003e",
          "module": "System.Miniplex.Source",
          "name": "detach",
          "package": "miniplex",
          "signature": "Source -\u003e IO ()",
          "source": "src/System-Miniplex-Source.html#detach",
          "type": "function"
        },
        "index": {
          "description": "Disconnects from message sink The detached source becomes invalid and must not be used again",
          "hierarchy": "System Miniplex Source",
          "module": "System.Miniplex.Source",
          "name": "detach",
          "normalized": "Source-\u003eIO()",
          "package": "miniplex",
          "signature": "Source-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/miniplex/docs/System-Miniplex-Source.html#v:detach"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns a lazy list of all messages arriving at a source (like\n \u003ccode\u003e\u003ccode\u003eSystem.IO.hGetContents\u003c/code\u003e\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "System.Miniplex.Source",
          "name": "getMsgs",
          "package": "miniplex",
          "signature": "Source -\u003e IO [String]",
          "source": "src/System-Miniplex-Source.html#getMsgs",
          "type": "function"
        },
        "index": {
          "description": "Returns lazy list of all messages arriving at source like System.IO.hGetContents",
          "hierarchy": "System Miniplex Source",
          "module": "System.Miniplex.Source",
          "name": "getMsgs",
          "normalized": "Source-\u003eIO[String]",
          "package": "miniplex",
          "partial": "Msgs",
          "signature": "Source-\u003eIO[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/miniplex/docs/System-Miniplex-Source.html#v:getMsgs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSynchronously reads a message from a source (i.e. it blocks if there is\n currently no message available).\n\u003c/p\u003e",
          "module": "System.Miniplex.Source",
          "name": "read",
          "package": "miniplex",
          "signature": "Source -\u003e IO String",
          "source": "src/System-Miniplex-Source.html#read",
          "type": "function"
        },
        "index": {
          "description": "Synchronously reads message from source i.e it blocks if there is currently no message available",
          "hierarchy": "System Miniplex Source",
          "module": "System.Miniplex.Source",
          "name": "read",
          "normalized": "Source-\u003eIO String",
          "package": "miniplex",
          "signature": "Source-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/miniplex/docs/System-Miniplex-Source.html#v:read"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHelper function to simplify resource handling. \u003ccode\u003e\u003ccode\u003e\u003ca\u003ewithSource\u003c/a\u003e\u003c/code\u003e tag body\u003c/code\u003e\n creates a source, calls \u003ccode\u003ebody\u003c/code\u003e, then disconnects the source, even if\n \u003ccode\u003ebody\u003c/code\u003e throws an exception.\n\u003c/p\u003e",
          "module": "System.Miniplex.Source",
          "name": "withSource",
          "package": "miniplex",
          "signature": "String -\u003e (Source -\u003e IO a) -\u003e IO a",
          "source": "src/System-Miniplex-Source.html#withSource",
          "type": "function"
        },
        "index": {
          "description": "Helper function to simplify resource handling withSource tag body creates source calls body then disconnects the source even if body throws an exception",
          "hierarchy": "System Miniplex Source",
          "module": "System.Miniplex.Source",
          "name": "withSource",
          "normalized": "String-\u003e(Source-\u003eIO a)-\u003eIO a",
          "package": "miniplex",
          "partial": "Source",
          "signature": "String-\u003e(Source-\u003eIO a)-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/miniplex/docs/System-Miniplex-Source.html#v:withSource"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimilar to \u003ccode\u003e\u003ca\u003ewithSource\u003c/a\u003e\u003c/code\u003e, but calls \u003ccode\u003e\u003ca\u003eattachWait\u003c/a\u003e\u003c/code\u003e instead of \u003ccode\u003e\u003ca\u003eattach\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Miniplex.Source",
          "name": "withSourceWait",
          "package": "miniplex",
          "signature": "String -\u003e (Source -\u003e IO a) -\u003e IO a",
          "source": "src/System-Miniplex-Source.html#withSourceWait",
          "type": "function"
        },
        "index": {
          "description": "Similar to withSource but calls attachWait instead of attach",
          "hierarchy": "System Miniplex Source",
          "module": "System.Miniplex.Source",
          "name": "withSourceWait",
          "normalized": "String-\u003e(Source-\u003eIO a)-\u003eIO a",
          "package": "miniplex",
          "partial": "Source Wait",
          "signature": "String-\u003e(Source-\u003eIO a)-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/miniplex/docs/System-Miniplex-Source.html#v:withSourceWait"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSemisynchronous interprocess communication.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.Miniplex",
          "name": "Miniplex",
          "package": "miniplex",
          "source": "src/System-Miniplex.html",
          "type": "module"
        },
        "index": {
          "description": "Semisynchronous interprocess communication",
          "hierarchy": "System Miniplex",
          "module": "System.Miniplex",
          "name": "Miniplex",
          "package": "miniplex",
          "partial": "Miniplex",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/miniplex/docs/System-Miniplex.html#"
      }
    }
  ]
]