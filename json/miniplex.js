[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/miniplex/docs/System-Miniplex-Sink.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAsynchronous message broadcasting.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "System.Miniplex.Sink",
        "fct-package": "miniplex",
        "fct-signature": "module",
        "fct-source": "src/System-Miniplex-Sink.html",
        "fct-type": "module",
        "title": "Sink"
      },
      "index": {
        "description": "Asynchronous message broadcasting",
        "hierarchy": "System Miniplex Sink",
        "module": "System.Miniplex.Sink",
        "name": "Sink",
        "normalized": "",
        "package": "miniplex",
        "partial": "Sink",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/miniplex/docs/System-Miniplex-Sink.html#t:Sink",
      "description": {
        "fct-module": "System.Miniplex.Sink",
        "fct-package": "miniplex",
        "fct-signature": "data",
        "fct-source": "src/System-Miniplex-Sink.html#Sink",
        "fct-type": "data",
        "title": "Sink"
      },
      "index": {
        "description": "",
        "hierarchy": "System Miniplex Sink",
        "module": "System.Miniplex.Sink",
        "name": "Sink",
        "normalized": "",
        "package": "miniplex",
        "partial": "Sink",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/miniplex/docs/System-Miniplex-Sink.html#v:create",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003ecreate\u003c/a\u003e\u003c/code\u003e tag\u003c/code\u003e creates a message sink. \u003ccode\u003etag\u003c/code\u003e is used to uniquely\n identify this sink. The set of allowed characters for \u003ccode\u003etag\u003c/code\u003e includes\n letters, digits, \u003ccode\u003e_\u003c/code\u003e, \u003ccode\u003e-\u003c/code\u003e and \u003ccode\u003e+\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e(Implementation detail: This function actually creates a named socket\n in your \u003ccode\u003e~/.miniplex/\u003c/code\u003e.)\n\u003c/p\u003e",
        "fct-module": "System.Miniplex.Sink",
        "fct-package": "miniplex",
        "fct-signature": "String -\u003e IO Sink",
        "fct-source": "src/System-Miniplex-Sink.html#create",
        "fct-type": "function",
        "title": "create"
      },
      "index": {
        "description": "create tag creates message sink tag is used to uniquely identify this sink The set of allowed characters for tag includes letters digits and Implementation detail This function actually creates named socket in your miniplex",
        "hierarchy": "System Miniplex Sink",
        "module": "System.Miniplex.Sink",
        "name": "create",
        "normalized": "String-\u003eIO Sink",
        "package": "miniplex",
        "partial": "",
        "signature": "String-\u003eIO Sink"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/miniplex/docs/System-Miniplex-Sink.html#v:destroy",
      "description": {
        "fct-descr": "\u003cp\u003eDeallocates a sink. The destroyed sink must not be used again.\n\u003c/p\u003e\u003cp\u003e(Implementation detail: This function closes and removes the socket from\n the file system. If you forget to call it, you'll leave a stale entry in\n \u003ccode\u003e~/.miniplex/\u003c/code\u003e, which will cause calls to \u003ccode\u003e\u003ca\u003ecreate\u003c/a\u003e\u003c/code\u003e with the same tag to\n fail.)\n\u003c/p\u003e",
        "fct-module": "System.Miniplex.Sink",
        "fct-package": "miniplex",
        "fct-signature": "Sink -\u003e IO ()",
        "fct-source": "src/System-Miniplex-Sink.html#destroy",
        "fct-type": "function",
        "title": "destroy"
      },
      "index": {
        "description": "Deallocates sink The destroyed sink must not be used again Implementation detail This function closes and removes the socket from the file system If you forget to call it you ll leave stale entry in miniplex which will cause calls to create with the same tag to fail",
        "hierarchy": "System Miniplex Sink",
        "module": "System.Miniplex.Sink",
        "name": "destroy",
        "normalized": "Sink-\u003eIO()",
        "package": "miniplex",
        "partial": "",
        "signature": "Sink-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/miniplex/docs/System-Miniplex-Sink.html#v:withSink",
      "description": {
        "fct-descr": "\u003cp\u003eHelper function to simplify resource handling. \u003ccode\u003e\u003ccode\u003e\u003ca\u003ewithSink\u003c/a\u003e\u003c/code\u003e tag body\u003c/code\u003e\n creates a sink, calls \u003ccode\u003ebody\u003c/code\u003e, then destroys the sink, even if \u003ccode\u003ebody\u003c/code\u003e\n throws an exception.\n\u003c/p\u003e",
        "fct-module": "System.Miniplex.Sink",
        "fct-package": "miniplex",
        "fct-signature": "String -\u003e (Sink -\u003e IO a) -\u003e IO a",
        "fct-source": "src/System-Miniplex-Sink.html#withSink",
        "fct-type": "function",
        "title": "withSink"
      },
      "index": {
        "description": "Helper function to simplify resource handling withSink tag body creates sink calls body then destroys the sink even if body throws an exception",
        "hierarchy": "System Miniplex Sink",
        "module": "System.Miniplex.Sink",
        "name": "withSink",
        "normalized": "String-\u003e(Sink-\u003eIO a)-\u003eIO a",
        "package": "miniplex",
        "partial": "Sink",
        "signature": "String-\u003e(Sink-\u003eIO a)-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/miniplex/docs/System-Miniplex-Sink.html#v:write",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003ewrite\u003c/a\u003e\u003c/code\u003e si msg\u003c/code\u003e asynchronously writes \u003ccode\u003emsg\u003c/code\u003e to \u003ccode\u003esi\u003c/code\u003e, where it will be\n received by all currently connected readers.\n\u003c/p\u003e",
        "fct-module": "System.Miniplex.Sink",
        "fct-package": "miniplex",
        "fct-signature": "Sink -\u003e String -\u003e IO ()",
        "fct-source": "src/System-Miniplex-Sink.html#write",
        "fct-type": "function",
        "title": "write"
      },
      "index": {
        "description": "write si msg asynchronously writes msg to si where it will be received by all currently connected readers",
        "hierarchy": "System Miniplex Sink",
        "module": "System.Miniplex.Sink",
        "name": "write",
        "normalized": "Sink-\u003eString-\u003eIO()",
        "package": "miniplex",
        "partial": "",
        "signature": "Sink-\u003eString-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/miniplex/docs/System-Miniplex-Source.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSynchronous message receiving.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "System.Miniplex.Source",
        "fct-package": "miniplex",
        "fct-signature": "module",
        "fct-source": "src/System-Miniplex-Source.html",
        "fct-type": "module",
        "title": "Source"
      },
      "index": {
        "description": "Synchronous message receiving",
        "hierarchy": "System Miniplex Source",
        "module": "System.Miniplex.Source",
        "name": "Source",
        "normalized": "",
        "package": "miniplex",
        "partial": "Source",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/miniplex/docs/System-Miniplex-Source.html#t:Source",
      "description": {
        "fct-module": "System.Miniplex.Source",
        "fct-package": "miniplex",
        "fct-signature": "data",
        "fct-source": "src/System-Miniplex-Source.html#Source",
        "fct-type": "data",
        "title": "Source"
      },
      "index": {
        "description": "",
        "hierarchy": "System Miniplex Source",
        "module": "System.Miniplex.Source",
        "name": "Source",
        "normalized": "",
        "package": "miniplex",
        "partial": "Source",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/miniplex/docs/System-Miniplex-Source.html#v:attach",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eattach\u003c/a\u003e\u003c/code\u003e tag\u003c/code\u003e returns a message source connected to the sink created by\n a call to \u003ccode\u003e\u003ccode\u003eSystem.Miniplex.Sink.create\u003c/code\u003e tag\u003c/code\u003e. If no such sink exists, an\n exception is thrown.\n\u003c/p\u003e",
        "fct-module": "System.Miniplex.Source",
        "fct-package": "miniplex",
        "fct-signature": "String -\u003e IO Source",
        "fct-source": "src/System-Miniplex-Source.html#attach",
        "fct-type": "function",
        "title": "attach"
      },
      "index": {
        "description": "attach tag returns message source connected to the sink created by call to System.Miniplex.Sink.create tag If no such sink exists an exception is thrown",
        "hierarchy": "System Miniplex Source",
        "module": "System.Miniplex.Source",
        "name": "attach",
        "normalized": "String-\u003eIO Source",
        "package": "miniplex",
        "partial": "",
        "signature": "String-\u003eIO Source"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/miniplex/docs/System-Miniplex-Source.html#v:attachWait",
      "description": {
        "fct-descr": "\u003cp\u003eSimilar to \u003ccode\u003e\u003ca\u003eattach\u003c/a\u003e\u003c/code\u003e, but if the specified sink doesn't exist, \u003ccode\u003e\u003ca\u003eattachWait\u003c/a\u003e\u003c/code\u003e\n blocks until it becomes available.\n\u003c/p\u003e",
        "fct-module": "System.Miniplex.Source",
        "fct-package": "miniplex",
        "fct-signature": "String -\u003e IO Source",
        "fct-source": "src/System-Miniplex-Source.html#attachWait",
        "fct-type": "function",
        "title": "attachWait"
      },
      "index": {
        "description": "Similar to attach but if the specified sink doesn exist attachWait blocks until it becomes available",
        "hierarchy": "System Miniplex Source",
        "module": "System.Miniplex.Source",
        "name": "attachWait",
        "normalized": "String-\u003eIO Source",
        "package": "miniplex",
        "partial": "Wait",
        "signature": "String-\u003eIO Source"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/miniplex/docs/System-Miniplex-Source.html#v:detach",
      "description": {
        "fct-descr": "\u003cp\u003eDisconnects from a message sink. The detached source becomes invalid\n and must not be used again.\n\u003c/p\u003e",
        "fct-module": "System.Miniplex.Source",
        "fct-package": "miniplex",
        "fct-signature": "Source -\u003e IO ()",
        "fct-source": "src/System-Miniplex-Source.html#detach",
        "fct-type": "function",
        "title": "detach"
      },
      "index": {
        "description": "Disconnects from message sink The detached source becomes invalid and must not be used again",
        "hierarchy": "System Miniplex Source",
        "module": "System.Miniplex.Source",
        "name": "detach",
        "normalized": "Source-\u003eIO()",
        "package": "miniplex",
        "partial": "",
        "signature": "Source-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/miniplex/docs/System-Miniplex-Source.html#v:getMsgs",
      "description": {
        "fct-descr": "\u003cp\u003eReturns a lazy list of all messages arriving at a source (like\n \u003ccode\u003e\u003ccode\u003eSystem.IO.hGetContents\u003c/code\u003e\u003c/code\u003e).\n\u003c/p\u003e",
        "fct-module": "System.Miniplex.Source",
        "fct-package": "miniplex",
        "fct-signature": "Source -\u003e IO [String]",
        "fct-source": "src/System-Miniplex-Source.html#getMsgs",
        "fct-type": "function",
        "title": "getMsgs"
      },
      "index": {
        "description": "Returns lazy list of all messages arriving at source like System.IO.hGetContents",
        "hierarchy": "System Miniplex Source",
        "module": "System.Miniplex.Source",
        "name": "getMsgs",
        "normalized": "Source-\u003eIO[String]",
        "package": "miniplex",
        "partial": "Msgs",
        "signature": "Source-\u003eIO[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/miniplex/docs/System-Miniplex-Source.html#v:read",
      "description": {
        "fct-descr": "\u003cp\u003eSynchronously reads a message from a source (i.e. it blocks if there is\n currently no message available).\n\u003c/p\u003e",
        "fct-module": "System.Miniplex.Source",
        "fct-package": "miniplex",
        "fct-signature": "Source -\u003e IO String",
        "fct-source": "src/System-Miniplex-Source.html#read",
        "fct-type": "function",
        "title": "read"
      },
      "index": {
        "description": "Synchronously reads message from source i.e it blocks if there is currently no message available",
        "hierarchy": "System Miniplex Source",
        "module": "System.Miniplex.Source",
        "name": "read",
        "normalized": "Source-\u003eIO String",
        "package": "miniplex",
        "partial": "",
        "signature": "Source-\u003eIO String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/miniplex/docs/System-Miniplex-Source.html#v:withSource",
      "description": {
        "fct-descr": "\u003cp\u003eHelper function to simplify resource handling. \u003ccode\u003e\u003ccode\u003e\u003ca\u003ewithSource\u003c/a\u003e\u003c/code\u003e tag body\u003c/code\u003e\n creates a source, calls \u003ccode\u003ebody\u003c/code\u003e, then disconnects the source, even if\n \u003ccode\u003ebody\u003c/code\u003e throws an exception.\n\u003c/p\u003e",
        "fct-module": "System.Miniplex.Source",
        "fct-package": "miniplex",
        "fct-signature": "String -\u003e (Source -\u003e IO a) -\u003e IO a",
        "fct-source": "src/System-Miniplex-Source.html#withSource",
        "fct-type": "function",
        "title": "withSource"
      },
      "index": {
        "description": "Helper function to simplify resource handling withSource tag body creates source calls body then disconnects the source even if body throws an exception",
        "hierarchy": "System Miniplex Source",
        "module": "System.Miniplex.Source",
        "name": "withSource",
        "normalized": "String-\u003e(Source-\u003eIO a)-\u003eIO a",
        "package": "miniplex",
        "partial": "Source",
        "signature": "String-\u003e(Source-\u003eIO a)-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/miniplex/docs/System-Miniplex-Source.html#v:withSourceWait",
      "description": {
        "fct-descr": "\u003cp\u003eSimilar to \u003ccode\u003e\u003ca\u003ewithSource\u003c/a\u003e\u003c/code\u003e, but calls \u003ccode\u003e\u003ca\u003eattachWait\u003c/a\u003e\u003c/code\u003e instead of \u003ccode\u003e\u003ca\u003eattach\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.Miniplex.Source",
        "fct-package": "miniplex",
        "fct-signature": "String -\u003e (Source -\u003e IO a) -\u003e IO a",
        "fct-source": "src/System-Miniplex-Source.html#withSourceWait",
        "fct-type": "function",
        "title": "withSourceWait"
      },
      "index": {
        "description": "Similar to withSource but calls attachWait instead of attach",
        "hierarchy": "System Miniplex Source",
        "module": "System.Miniplex.Source",
        "name": "withSourceWait",
        "normalized": "String-\u003e(Source-\u003eIO a)-\u003eIO a",
        "package": "miniplex",
        "partial": "Source Wait",
        "signature": "String-\u003e(Source-\u003eIO a)-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/miniplex/docs/System-Miniplex.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSemisynchronous interprocess communication.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "System.Miniplex",
        "fct-package": "miniplex",
        "fct-signature": "module",
        "fct-source": "src/System-Miniplex.html",
        "fct-type": "module",
        "title": "Miniplex"
      },
      "index": {
        "description": "Semisynchronous interprocess communication",
        "hierarchy": "System Miniplex",
        "module": "System.Miniplex",
        "name": "Miniplex",
        "normalized": "",
        "package": "miniplex",
        "partial": "Miniplex",
        "signature": ""
      }
    }
  }
]