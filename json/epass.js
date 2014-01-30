[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/epass/docs/Control-Concurrent-Mailbox-Wrapper.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides a wrapping mechanism for file handles (e.g. sockets)\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Concurrent.Mailbox.Wrapper",
        "fct-package": "epass",
        "fct-signature": "module",
        "fct-source": "src/Control-Concurrent-Mailbox-Wrapper.html",
        "fct-type": "module",
        "title": "Wrapper"
      },
      "index": {
        "description": "This module provides wrapping mechanism for file handles e.g sockets",
        "hierarchy": "Control Concurrent Mailbox Wrapper",
        "module": "Control.Concurrent.Mailbox.Wrapper",
        "name": "Wrapper",
        "normalized": "",
        "package": "epass",
        "partial": "Wrapper",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/epass/docs/Control-Concurrent-Mailbox-Wrapper.html#t:ErrorHandler",
      "description": {
        "fct-descr": "\u003cp\u003eFunction to be called in case of error. \u003ccode\u003e\u003ca\u003eWrapBox\u003c/a\u003e\u003c/code\u003e is the mailbox the error\n     occured on.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Mailbox.Wrapper",
        "fct-package": "epass",
        "fct-signature": "type",
        "fct-source": "src/Control-Concurrent-Mailbox-Wrapper.html#ErrorHandler",
        "fct-type": "type",
        "title": "ErrorHandler"
      },
      "index": {
        "description": "Function to be called in case of error WrapBox is the mailbox the error occured on",
        "hierarchy": "Control Concurrent Mailbox Wrapper",
        "module": "Control.Concurrent.Mailbox.Wrapper",
        "name": "ErrorHandler",
        "normalized": "",
        "package": "epass",
        "partial": "Error Handler",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/epass/docs/Control-Concurrent-Mailbox-Wrapper.html#t:WrapBox",
      "description": {
        "fct-descr": "\u003cp\u003eWrapper around \u003ccode\u003e\u003ca\u003eMailbox\u003c/a\u003e\u003c/code\u003e. For now the only \u003ccode\u003e\u003ca\u003eMailboxClass\u003c/a\u003e\u003c/code\u003e instance allowed\n     for wrapping.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Mailbox.Wrapper",
        "fct-package": "epass",
        "fct-signature": "data",
        "fct-source": "src/Control-Concurrent-Mailbox-Wrapper.html#WrapBox",
        "fct-type": "data",
        "title": "WrapBox"
      },
      "index": {
        "description": "Wrapper around Mailbox For now the only MailboxClass instance allowed for wrapping",
        "hierarchy": "Control Concurrent Mailbox Wrapper",
        "module": "Control.Concurrent.Mailbox.Wrapper",
        "name": "WrapBox",
        "normalized": "",
        "package": "epass",
        "partial": "Wrap Box",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/epass/docs/Control-Concurrent-Mailbox-Wrapper.html#t:Wrappable",
      "description": {
        "fct-descr": "\u003cp\u003eMessages send over wrapped handles must be instance of this class.\n\u003c/p\u003e\u003cp\u003eYou only need to implement either \u003ccode\u003e\u003ca\u003efromString\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003efromStringReadS\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Mailbox.Wrapper",
        "fct-package": "epass",
        "fct-signature": "class",
        "fct-source": "src/Control-Concurrent-Mailbox-Wrapper.html#Wrappable",
        "fct-type": "class",
        "title": "Wrappable"
      },
      "index": {
        "description": "Messages send over wrapped handles must be instance of this class You only need to implement either fromString or fromStringReadS",
        "hierarchy": "Control Concurrent Mailbox Wrapper",
        "module": "Control.Concurrent.Mailbox.Wrapper",
        "name": "Wrappable",
        "normalized": "",
        "package": "epass",
        "partial": "Wrappable",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/epass/docs/Control-Concurrent-Mailbox-Wrapper.html#v:fromString",
      "description": {
        "fct-descr": "\u003cp\u003eConvert a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e to the represented message.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Mailbox.Wrapper",
        "fct-package": "epass",
        "fct-signature": "fromString",
        "fct-source": "src/Control-Concurrent-Mailbox-Wrapper.html#fromString",
        "fct-type": "method",
        "title": "fromString"
      },
      "index": {
        "description": "Convert String to the represented message",
        "hierarchy": "Control Concurrent Mailbox Wrapper",
        "module": "Control.Concurrent.Mailbox.Wrapper",
        "name": "fromString",
        "normalized": "",
        "package": "epass",
        "partial": "String",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/epass/docs/Control-Concurrent-Mailbox-Wrapper.html#v:fromStringReadS",
      "description": {
        "fct-descr": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003efromString\u003c/a\u003e\u003c/code\u003e but using \u003ccode\u003e\u003ca\u003eReadS\u003c/a\u003e\u003c/code\u003e type.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Mailbox.Wrapper",
        "fct-package": "epass",
        "fct-signature": "ReadS m",
        "fct-source": "src/Control-Concurrent-Mailbox-Wrapper.html#fromStringReadS",
        "fct-type": "method",
        "title": "fromStringReadS"
      },
      "index": {
        "description": "Same as fromString but using ReadS type",
        "hierarchy": "Control Concurrent Mailbox Wrapper",
        "module": "Control.Concurrent.Mailbox.Wrapper",
        "name": "fromStringReadS",
        "normalized": "",
        "package": "epass",
        "partial": "String Read",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/epass/docs/Control-Concurrent-Mailbox-Wrapper.html#v:toString",
      "description": {
        "fct-descr": "\u003cp\u003eConvert a message to a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Mailbox.Wrapper",
        "fct-package": "epass",
        "fct-signature": "toString",
        "fct-source": "src/Control-Concurrent-Mailbox-Wrapper.html#toString",
        "fct-type": "method",
        "title": "toString"
      },
      "index": {
        "description": "Convert message to String",
        "hierarchy": "Control Concurrent Mailbox Wrapper",
        "module": "Control.Concurrent.Mailbox.Wrapper",
        "name": "toString",
        "normalized": "",
        "package": "epass",
        "partial": "String",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/epass/docs/Control-Concurrent-Mailbox-Wrapper.html#v:wrapReadHandle",
      "description": {
        "fct-descr": "\u003cp\u003eWrap the given \u003ccode\u003e\u003ca\u003eHandle\u003c/a\u003e\u003c/code\u003e for reading. The returned \u003ccode\u003e\u003ca\u003eWrapBox\u003c/a\u003e\u003c/code\u003e can be used\n     to receive messages from the \u003ccode\u003e\u003ca\u003eHandle\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNotice: The \u003ccode\u003e\u003ca\u003eErrorHandler\u003c/a\u003e\u003c/code\u003e will be given the returned \u003ccode\u003e\u003ca\u003eWrapBox\u003c/a\u003e\u003c/code\u003e. Writing to\n     may not be what you want to do. Instead you might first call\n     \u003ccode\u003e\u003ca\u003ewrapWriteHandle\u003c/a\u003e\u003c/code\u003e and then use its \u003ccode\u003e\u003ca\u003eWrapBox\u003c/a\u003e\u003c/code\u003e in \u003ccode\u003e\u003ca\u003ewrapReadHandle\u003c/a\u003e\u003c/code\u003es\n     \u003ccode\u003e\u003ca\u003eErrorHandler\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Mailbox.Wrapper",
        "fct-package": "epass",
        "fct-signature": "Handle-\u003e ErrorHandler m-\u003e IO (WrapBox m)",
        "fct-type": "function",
        "title": "wrapReadHandle"
      },
      "index": {
        "description": "Wrap the given Handle for reading The returned WrapBox can be used to receive messages from the Handle Notice The ErrorHandler will be given the returned WrapBox Writing to may not be what you want to do Instead you might first call wrapWriteHandle and then use its WrapBox in wrapReadHandle ErrorHandler",
        "hierarchy": "Control Concurrent Mailbox Wrapper",
        "module": "Control.Concurrent.Mailbox.Wrapper",
        "name": "wrapReadHandle",
        "normalized": "Handle-\u003eErrorHandler a-\u003eIO(WrapBox a)",
        "package": "epass",
        "partial": "Read Handle",
        "signature": "Handle-\u003eErrorHandler m-\u003eIO(WrapBox m)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/epass/docs/Control-Concurrent-Mailbox-Wrapper.html#v:wrapReadHandleWithMailbox",
      "description": {
        "fct-descr": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003ewrapReadHandle\u003c/a\u003e\u003c/code\u003e but use an existing \u003ccode\u003e\u003ca\u003eMailbox\u003c/a\u003e\u003c/code\u003e for wrapping.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Mailbox.Wrapper",
        "fct-package": "epass",
        "fct-signature": "Handle-\u003e Mailbox m-\u003e ErrorHandler m-\u003e IO (WrapBox m)",
        "fct-type": "function",
        "title": "wrapReadHandleWithMailbox"
      },
      "index": {
        "description": "Same as wrapReadHandle but use an existing Mailbox for wrapping",
        "hierarchy": "Control Concurrent Mailbox Wrapper",
        "module": "Control.Concurrent.Mailbox.Wrapper",
        "name": "wrapReadHandleWithMailbox",
        "normalized": "Handle-\u003eMailbox a-\u003eErrorHandler a-\u003eIO(WrapBox a)",
        "package": "epass",
        "partial": "Read Handle With Mailbox",
        "signature": "Handle-\u003eMailbox m-\u003eErrorHandler m-\u003eIO(WrapBox m)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/epass/docs/Control-Concurrent-Mailbox-Wrapper.html#v:wrapWriteHandle",
      "description": {
        "fct-descr": "\u003cp\u003eWrap the given \u003ccode\u003e\u003ca\u003eHandle\u003c/a\u003e\u003c/code\u003e for writing. The returned \u003ccode\u003e\u003ca\u003eWrapBox\u003c/a\u003e\u003c/code\u003e can be used to\n     send messages through the \u003ccode\u003e\u003ca\u003eHandle\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Mailbox.Wrapper",
        "fct-package": "epass",
        "fct-signature": "Handle-\u003e ErrorHandler m-\u003e IO (WrapBox m)",
        "fct-type": "function",
        "title": "wrapWriteHandle"
      },
      "index": {
        "description": "Wrap the given Handle for writing The returned WrapBox can be used to send messages through the Handle",
        "hierarchy": "Control Concurrent Mailbox Wrapper",
        "module": "Control.Concurrent.Mailbox.Wrapper",
        "name": "wrapWriteHandle",
        "normalized": "Handle-\u003eErrorHandler a-\u003eIO(WrapBox a)",
        "package": "epass",
        "partial": "Write Handle",
        "signature": "Handle-\u003eErrorHandler m-\u003eIO(WrapBox m)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/epass/docs/Control-Concurrent-Mailbox-Wrapper.html#v:wrapWriteHandleWithMailbox",
      "description": {
        "fct-descr": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003ewrapWriteHandle\u003c/a\u003e\u003c/code\u003e but use an existing \u003ccode\u003e\u003ca\u003eMailbox\u003c/a\u003e\u003c/code\u003e for wrapping.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Mailbox.Wrapper",
        "fct-package": "epass",
        "fct-signature": "Handle-\u003e Mailbox m-\u003e ErrorHandler m-\u003e IO (WrapBox m)",
        "fct-type": "function",
        "title": "wrapWriteHandleWithMailbox"
      },
      "index": {
        "description": "Same as wrapWriteHandle but use an existing Mailbox for wrapping",
        "hierarchy": "Control Concurrent Mailbox Wrapper",
        "module": "Control.Concurrent.Mailbox.Wrapper",
        "name": "wrapWriteHandleWithMailbox",
        "normalized": "Handle-\u003eMailbox a-\u003eErrorHandler a-\u003eIO(WrapBox a)",
        "package": "epass",
        "partial": "Write Handle With Mailbox",
        "signature": "Handle-\u003eMailbox m-\u003eErrorHandler m-\u003eIO(WrapBox m)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/epass/docs/Control-Concurrent-Mailbox.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides Erlang like functionality for message passing.\n\u003c/p\u003e\u003cp\u003eInstead of mailboxes attached to each process you have to create the needed\n     mailboxes yourself. This means that messages cannot be send to processes\n     or threads directly, but only to mailboxes. On the other hand multiple\n     threads may share a mailbox and one thread may have multiple mailboxes.\n\u003c/p\u003e\u003cp\u003eFor a simple example on how to receive messages have a look at the\n     \u003ccode\u003e\u003ca\u003eMsgHandler\u003c/a\u003e\u003c/code\u003e type.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Concurrent.Mailbox",
        "fct-package": "epass",
        "fct-signature": "module",
        "fct-source": "src/Control-Concurrent-Mailbox.html",
        "fct-type": "module",
        "title": "Mailbox"
      },
      "index": {
        "description": "This module provides Erlang like functionality for message passing Instead of mailboxes attached to each process you have to create the needed mailboxes yourself This means that messages cannot be send to processes or threads directly but only to mailboxes On the other hand multiple threads may share mailbox and one thread may have multiple mailboxes For simple example on how to receive messages have look at the MsgHandler type",
        "hierarchy": "Control Concurrent Mailbox",
        "module": "Control.Concurrent.Mailbox",
        "name": "Mailbox",
        "normalized": "",
        "package": "epass",
        "partial": "Mailbox",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/epass/docs/Control-Concurrent-Mailbox.html#t:Handler",
      "description": {
        "fct-descr": "\u003cp\u003eThe action to perfom in case of successful matching.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Mailbox",
        "fct-package": "epass",
        "fct-signature": "data",
        "fct-source": "src/Control-Concurrent-Mailbox.html#Handler",
        "fct-type": "data",
        "title": "Handler"
      },
      "index": {
        "description": "The action to perfom in case of successful matching",
        "hierarchy": "Control Concurrent Mailbox",
        "module": "Control.Concurrent.Mailbox",
        "name": "Handler",
        "normalized": "",
        "package": "epass",
        "partial": "Handler",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/epass/docs/Control-Concurrent-Mailbox.html#t:Mailbox",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003eChan\u003c/code\u003e based mailbox.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Mailbox",
        "fct-package": "epass",
        "fct-signature": "data",
        "fct-source": "src/Control-Concurrent-Mailbox.html#Mailbox",
        "fct-type": "data",
        "title": "Mailbox"
      },
      "index": {
        "description": "Chan based mailbox",
        "hierarchy": "Control Concurrent Mailbox",
        "module": "Control.Concurrent.Mailbox",
        "name": "Mailbox",
        "normalized": "",
        "package": "epass",
        "partial": "Mailbox",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/epass/docs/Control-Concurrent-Mailbox.html#t:MailboxClass",
      "description": {
        "fct-descr": "\u003cp\u003eAny instance of \u003ccode\u003e\u003ca\u003eMailboxClass\u003c/a\u003e\u003c/code\u003e may be used as a mailbox for message\n     passing. \u003ccode\u003eb\u003c/code\u003e is the mailbox type and m is the message type.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Mailbox",
        "fct-package": "epass",
        "fct-signature": "class",
        "fct-source": "src/Control-Concurrent-Mailbox.html#MailboxClass",
        "fct-type": "class",
        "title": "MailboxClass"
      },
      "index": {
        "description": "Any instance of MailboxClass may be used as mailbox for message passing is the mailbox type and is the message type",
        "hierarchy": "Control Concurrent Mailbox",
        "module": "Control.Concurrent.Mailbox",
        "name": "MailboxClass",
        "normalized": "",
        "package": "epass",
        "partial": "Mailbox Class",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/epass/docs/Control-Concurrent-Mailbox.html#t:MsgHandler",
      "description": {
        "fct-descr": "\u003cp\u003eA function that matches a given message and returns the corresponding\n     handler.\n\u003c/p\u003e\u003cp\u003eIn case of an pattern matching error \u003ccode\u003e\u003ca\u003ereceive\u003c/a\u003e\u003c/code\u003e will continue matching\n     the next \u003ccode\u003e\u003ca\u003eMsgHandler\u003c/a\u003e\u003c/code\u003e / message.\n\u003c/p\u003e\u003cp\u003eFor example you may write somthing like this:\n\u003c/p\u003e\u003cpre\u003e receive mbox\n     [ \\ True  -\u003e handler $ return 1\n     , \\ False -\u003e handler $ return 2\n     ]\n\u003c/pre\u003e",
        "fct-module": "Control.Concurrent.Mailbox",
        "fct-package": "epass",
        "fct-signature": "type",
        "fct-source": "src/Control-Concurrent-Mailbox.html#MsgHandler",
        "fct-type": "type",
        "title": "MsgHandler"
      },
      "index": {
        "description": "function that matches given message and returns the corresponding handler In case of an pattern matching error receive will continue matching the next MsgHandler message For example you may write somthing like this receive mbox True handler return False handler return",
        "hierarchy": "Control Concurrent Mailbox",
        "module": "Control.Concurrent.Mailbox",
        "name": "MsgHandler",
        "normalized": "",
        "package": "epass",
        "partial": "Msg Handler",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/epass/docs/Control-Concurrent-Mailbox.html#v:-60--124--62-",
      "description": {
        "fct-descr": "\u003cp\u003eCombine to lists of message handlers into one list. The results of the\n     message handler will be wrapped in \u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Mailbox",
        "fct-package": "epass",
        "fct-signature": "[MsgHandler m a]-\u003e [MsgHandler m b]-\u003e [MsgHandler m (Either a b)]",
        "fct-type": "function",
        "title": "(\u003c|\u003e)"
      },
      "index": {
        "description": "Combine to lists of message handlers into one list The results of the message handler will be wrapped in Either",
        "hierarchy": "Control Concurrent Mailbox",
        "module": "Control.Concurrent.Mailbox",
        "name": "(\u003c|\u003e) \u003c|\u003e",
        "normalized": "[MsgHandler a b]-\u003e[MsgHandler a c]-\u003e[MsgHandler a(Either b c)]",
        "package": "epass",
        "partial": "",
        "signature": "[MsgHandler m a]-\u003e[MsgHandler m b]-\u003e[MsgHandler m(Either a b)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/epass/docs/Control-Concurrent-Mailbox.html#v:-60--33-",
      "description": {
        "fct-descr": "\u003cp\u003eAn alias for \u003ccode\u003e\u003ca\u003esend\u003c/a\u003e\u003c/code\u003e in the flavor of Erlang's \u003ccode\u003e!\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Mailbox",
        "fct-package": "epass",
        "fct-signature": "b m -\u003e m -\u003e IO ()",
        "fct-source": "src/Control-Concurrent-Mailbox.html#%3C%21",
        "fct-type": "function",
        "title": "(\u003c!)"
      },
      "index": {
        "description": "An alias for send in the flavor of Erlang",
        "hierarchy": "Control Concurrent Mailbox",
        "module": "Control.Concurrent.Mailbox",
        "name": "(\u003c!) \u003c!",
        "normalized": "a b-\u003eb-\u003eIO()",
        "package": "epass",
        "partial": "",
        "signature": "b m-\u003em-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/epass/docs/Control-Concurrent-Mailbox.html#v:.-62-",
      "description": {
        "fct-descr": "\u003cp\u003eApply a function to the result of an message handler.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Mailbox",
        "fct-package": "epass",
        "fct-signature": "MsgHandler m a-\u003e (a -\u003e b)-\u003e MsgHandler m b",
        "fct-type": "function",
        "title": "(.\u003e)"
      },
      "index": {
        "description": "Apply function to the result of an message handler",
        "hierarchy": "Control Concurrent Mailbox",
        "module": "Control.Concurrent.Mailbox",
        "name": "(.\u003e) .\u003e",
        "normalized": "MsgHandler a b-\u003e(b-\u003ec)-\u003eMsgHandler a c",
        "package": "epass",
        "partial": "",
        "signature": "MsgHandler m a-\u003e(a-\u003eb)-\u003eMsgHandler m b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/epass/docs/Control-Concurrent-Mailbox.html#v:close",
      "description": {
        "fct-descr": "\u003cp\u003eCall this function to cleanup before exit or when the mailbox is no\n         longer needed.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Mailbox",
        "fct-package": "epass",
        "fct-signature": "b m -\u003e IO ()",
        "fct-source": "src/Control-Concurrent-Mailbox.html#close",
        "fct-type": "method",
        "title": "close"
      },
      "index": {
        "description": "Call this function to cleanup before exit or when the mailbox is no longer needed",
        "hierarchy": "Control Concurrent Mailbox",
        "module": "Control.Concurrent.Mailbox",
        "name": "close",
        "normalized": "a b-\u003eIO()",
        "package": "epass",
        "partial": "",
        "signature": "b m-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/epass/docs/Control-Concurrent-Mailbox.html#v:getMessage",
      "description": {
        "fct-descr": "\u003cp\u003eGet a message from the mailbox (with \u003ccode\u003e\u003ca\u003eMailbox\u003c/a\u003e\u003c/code\u003e it is the first one).\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Mailbox",
        "fct-package": "epass",
        "fct-signature": "getMessage",
        "fct-source": "src/Control-Concurrent-Mailbox.html#getMessage",
        "fct-type": "method",
        "title": "getMessage"
      },
      "index": {
        "description": "Get message from the mailbox with Mailbox it is the first one",
        "hierarchy": "Control Concurrent Mailbox",
        "module": "Control.Concurrent.Mailbox",
        "name": "getMessage",
        "normalized": "",
        "package": "epass",
        "partial": "Message",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/epass/docs/Control-Concurrent-Mailbox.html#v:handler",
      "description": {
        "fct-descr": "\u003cp\u003eGenerate a handler from an \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e action.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Mailbox",
        "fct-package": "epass",
        "fct-signature": "IO a -\u003e Handler a",
        "fct-source": "src/Control-Concurrent-Mailbox.html#handler",
        "fct-type": "function",
        "title": "handler"
      },
      "index": {
        "description": "Generate handler from an IO action",
        "hierarchy": "Control Concurrent Mailbox",
        "module": "Control.Concurrent.Mailbox",
        "name": "handler",
        "normalized": "IO a-\u003eHandler a",
        "package": "epass",
        "partial": "",
        "signature": "IO a-\u003eHandler a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/epass/docs/Control-Concurrent-Mailbox.html#v:isEmpty",
      "description": {
        "fct-descr": "\u003cp\u003eChecks wether the mailbox is empty.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Mailbox",
        "fct-package": "epass",
        "fct-signature": "isEmpty",
        "fct-source": "src/Control-Concurrent-Mailbox.html#isEmpty",
        "fct-type": "method",
        "title": "isEmpty"
      },
      "index": {
        "description": "Checks wether the mailbox is empty",
        "hierarchy": "Control Concurrent Mailbox",
        "module": "Control.Concurrent.Mailbox",
        "name": "isEmpty",
        "normalized": "",
        "package": "epass",
        "partial": "Empty",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/epass/docs/Control-Concurrent-Mailbox.html#v:newMailbox",
      "description": {
        "fct-descr": "\u003cp\u003eCreates a new mailbox.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Mailbox",
        "fct-package": "epass",
        "fct-signature": "IO (Mailbox m)",
        "fct-source": "src/Control-Concurrent-Mailbox.html#newMailbox",
        "fct-type": "function",
        "title": "newMailbox"
      },
      "index": {
        "description": "Creates new mailbox",
        "hierarchy": "Control Concurrent Mailbox",
        "module": "Control.Concurrent.Mailbox",
        "name": "newMailbox",
        "normalized": "",
        "package": "epass",
        "partial": "Mailbox",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/epass/docs/Control-Concurrent-Mailbox.html#v:putMessage",
      "description": {
        "fct-descr": "\u003cp\u003eAdd a new message to the mailbox (with \u003ccode\u003e\u003ca\u003eMailbox\u003c/a\u003e\u003c/code\u003e it will be placed at\n         the end of the mailbox).\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Mailbox",
        "fct-package": "epass",
        "fct-signature": "putMessage",
        "fct-source": "src/Control-Concurrent-Mailbox.html#putMessage",
        "fct-type": "method",
        "title": "putMessage"
      },
      "index": {
        "description": "Add new message to the mailbox with Mailbox it will be placed at the end of the mailbox",
        "hierarchy": "Control Concurrent Mailbox",
        "module": "Control.Concurrent.Mailbox",
        "name": "putMessage",
        "normalized": "",
        "package": "epass",
        "partial": "Message",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/epass/docs/Control-Concurrent-Mailbox.html#v:receive",
      "description": {
        "fct-descr": "\u003cp\u003eReceive messages in the flavour of Erlang's \u003ccode\u003ereceive\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eFor each message in the mailbox all message handlers are matched until a\n     matching message is found. It will be removed from the mailbox and the\n     matching message handler's action will be performed.\n\u003c/p\u003e\u003cp\u003eIf no message matches any of the message handler, \u003ccode\u003e\u003ca\u003ereceive\u003c/a\u003e\u003c/code\u003e will block and\n     check new incoming messages until a match is found.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Mailbox",
        "fct-package": "epass",
        "fct-signature": "b m-\u003e [MsgHandler m a]-\u003e IO a",
        "fct-type": "function",
        "title": "receive"
      },
      "index": {
        "description": "Receive messages in the flavour of Erlang receive For each message in the mailbox all message handlers are matched until matching message is found It will be removed from the mailbox and the matching message handler action will be performed If no message matches any of the message handler receive will block and check new incoming messages until match is found",
        "hierarchy": "Control Concurrent Mailbox",
        "module": "Control.Concurrent.Mailbox",
        "name": "receive",
        "normalized": "a b-\u003e[MsgHandler b c]-\u003eIO c",
        "package": "epass",
        "partial": "",
        "signature": "b m-\u003e[MsgHandler m a]-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/epass/docs/Control-Concurrent-Mailbox.html#v:receiveNonBlocking",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003ereceive\u003c/a\u003e\u003c/code\u003e, but doesn't block. If no match was found, the default\n     handler is executed.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Mailbox",
        "fct-package": "epass",
        "fct-signature": "b m-\u003e [MsgHandler m a]-\u003e IO a-\u003e IO a",
        "fct-type": "function",
        "title": "receiveNonBlocking"
      },
      "index": {
        "description": "Like receive but doesn block If no match was found the default handler is executed",
        "hierarchy": "Control Concurrent Mailbox",
        "module": "Control.Concurrent.Mailbox",
        "name": "receiveNonBlocking",
        "normalized": "a b-\u003e[MsgHandler b c]-\u003eIO c-\u003eIO c",
        "package": "epass",
        "partial": "Non Blocking",
        "signature": "b m-\u003e[MsgHandler m a]-\u003eIO a-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/epass/docs/Control-Concurrent-Mailbox.html#v:receiveTimeout",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003ereceive\u003c/a\u003e\u003c/code\u003e, but times out after a given time. In case of timeout the\n     timeout handler is executed.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Mailbox",
        "fct-package": "epass",
        "fct-signature": "b m-\u003e Int-\u003e [MsgHandler m a]-\u003e IO a-\u003e IO a",
        "fct-type": "function",
        "title": "receiveTimeout"
      },
      "index": {
        "description": "Like receive but times out after given time In case of timeout the timeout handler is executed",
        "hierarchy": "Control Concurrent Mailbox",
        "module": "Control.Concurrent.Mailbox",
        "name": "receiveTimeout",
        "normalized": "a b-\u003eInt-\u003e[MsgHandler b c]-\u003eIO c-\u003eIO c",
        "package": "epass",
        "partial": "Timeout",
        "signature": "b m-\u003eInt-\u003e[MsgHandler m a]-\u003eIO a-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/epass/docs/Control-Concurrent-Mailbox.html#v:send",
      "description": {
        "fct-descr": "\u003cp\u003eSend the given message to the given mailbox.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Mailbox",
        "fct-package": "epass",
        "fct-signature": "b m-\u003e m-\u003e IO ()",
        "fct-type": "function",
        "title": "send"
      },
      "index": {
        "description": "Send the given message to the given mailbox",
        "hierarchy": "Control Concurrent Mailbox",
        "module": "Control.Concurrent.Mailbox",
        "name": "send",
        "normalized": "a b-\u003eb-\u003eIO()",
        "package": "epass",
        "partial": "",
        "signature": "b m-\u003em-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/epass/docs/Control-Concurrent-Mailbox.html#v:unGetMessage",
      "description": {
        "fct-descr": "\u003cp\u003ePut a message back to the mailbox (with \u003ccode\u003e\u003ca\u003eMailbox\u003c/a\u003e\u003c/code\u003e it will be placed\n         at the beginning of the mailbox).\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Mailbox",
        "fct-package": "epass",
        "fct-signature": "unGetMessage",
        "fct-source": "src/Control-Concurrent-Mailbox.html#unGetMessage",
        "fct-type": "method",
        "title": "unGetMessage"
      },
      "index": {
        "description": "Put message back to the mailbox with Mailbox it will be placed at the beginning of the mailbox",
        "hierarchy": "Control Concurrent Mailbox",
        "module": "Control.Concurrent.Mailbox",
        "name": "unGetMessage",
        "normalized": "",
        "package": "epass",
        "partial": "Get Message",
        "signature": ""
      }
    }
  }
]