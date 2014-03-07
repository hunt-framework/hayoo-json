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
        "word": "epass"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides a wrapping mechanism for file handles (e.g. sockets)\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Concurrent.Mailbox.Wrapper",
          "name": "Wrapper",
          "package": "epass",
          "source": "src/Control-Concurrent-Mailbox-Wrapper.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides wrapping mechanism for file handles e.g sockets",
          "hierarchy": "Control Concurrent Mailbox Wrapper",
          "module": "Control.Concurrent.Mailbox.Wrapper",
          "name": "Wrapper",
          "package": "epass",
          "partial": "Wrapper",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/epass/docs/Control-Concurrent-Mailbox-Wrapper.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFunction to be called in case of error. \u003ccode\u003e\u003ca\u003eWrapBox\u003c/a\u003e\u003c/code\u003e is the mailbox the error\n     occured on.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Mailbox.Wrapper",
          "name": "ErrorHandler",
          "package": "epass",
          "source": "src/Control-Concurrent-Mailbox-Wrapper.html#ErrorHandler",
          "type": "type"
        },
        "index": {
          "description": "Function to be called in case of error WrapBox is the mailbox the error occured on",
          "hierarchy": "Control Concurrent Mailbox Wrapper",
          "module": "Control.Concurrent.Mailbox.Wrapper",
          "name": "ErrorHandler",
          "package": "epass",
          "partial": "Error Handler",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/epass/docs/Control-Concurrent-Mailbox-Wrapper.html#t:ErrorHandler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrapper around \u003ccode\u003e\u003ca\u003eMailbox\u003c/a\u003e\u003c/code\u003e. For now the only \u003ccode\u003e\u003ca\u003eMailboxClass\u003c/a\u003e\u003c/code\u003e instance allowed\n     for wrapping.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Mailbox.Wrapper",
          "name": "WrapBox",
          "package": "epass",
          "source": "src/Control-Concurrent-Mailbox-Wrapper.html#WrapBox",
          "type": "data"
        },
        "index": {
          "description": "Wrapper around Mailbox For now the only MailboxClass instance allowed for wrapping",
          "hierarchy": "Control Concurrent Mailbox Wrapper",
          "module": "Control.Concurrent.Mailbox.Wrapper",
          "name": "WrapBox",
          "package": "epass",
          "partial": "Wrap Box",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/epass/docs/Control-Concurrent-Mailbox-Wrapper.html#t:WrapBox"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMessages send over wrapped handles must be instance of this class.\n\u003c/p\u003e\u003cp\u003eYou only need to implement either \u003ccode\u003e\u003ca\u003efromString\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003efromStringReadS\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Mailbox.Wrapper",
          "name": "Wrappable",
          "package": "epass",
          "source": "src/Control-Concurrent-Mailbox-Wrapper.html#Wrappable",
          "type": "class"
        },
        "index": {
          "description": "Messages send over wrapped handles must be instance of this class You only need to implement either fromString or fromStringReadS",
          "hierarchy": "Control Concurrent Mailbox Wrapper",
          "module": "Control.Concurrent.Mailbox.Wrapper",
          "name": "Wrappable",
          "package": "epass",
          "partial": "Wrappable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/epass/docs/Control-Concurrent-Mailbox-Wrapper.html#t:Wrappable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e to the represented message.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Mailbox.Wrapper",
          "name": "fromString",
          "package": "epass",
          "signature": "fromString",
          "source": "src/Control-Concurrent-Mailbox-Wrapper.html#fromString",
          "type": "method"
        },
        "index": {
          "description": "Convert String to the represented message",
          "hierarchy": "Control Concurrent Mailbox Wrapper",
          "module": "Control.Concurrent.Mailbox.Wrapper",
          "name": "fromString",
          "package": "epass",
          "partial": "String",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/epass/docs/Control-Concurrent-Mailbox-Wrapper.html#v:fromString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003efromString\u003c/a\u003e\u003c/code\u003e but using \u003ccode\u003e\u003ca\u003eReadS\u003c/a\u003e\u003c/code\u003e type.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Mailbox.Wrapper",
          "name": "fromStringReadS",
          "package": "epass",
          "signature": "ReadS m",
          "source": "src/Control-Concurrent-Mailbox-Wrapper.html#fromStringReadS",
          "type": "method"
        },
        "index": {
          "description": "Same as fromString but using ReadS type",
          "hierarchy": "Control Concurrent Mailbox Wrapper",
          "module": "Control.Concurrent.Mailbox.Wrapper",
          "name": "fromStringReadS",
          "package": "epass",
          "partial": "String Read",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/epass/docs/Control-Concurrent-Mailbox-Wrapper.html#v:fromStringReadS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a message to a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Concurrent.Mailbox.Wrapper",
          "name": "toString",
          "package": "epass",
          "signature": "toString",
          "source": "src/Control-Concurrent-Mailbox-Wrapper.html#toString",
          "type": "method"
        },
        "index": {
          "description": "Convert message to String",
          "hierarchy": "Control Concurrent Mailbox Wrapper",
          "module": "Control.Concurrent.Mailbox.Wrapper",
          "name": "toString",
          "package": "epass",
          "partial": "String",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/epass/docs/Control-Concurrent-Mailbox-Wrapper.html#v:toString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrap the given \u003ccode\u003e\u003ca\u003eHandle\u003c/a\u003e\u003c/code\u003e for reading. The returned \u003ccode\u003e\u003ca\u003eWrapBox\u003c/a\u003e\u003c/code\u003e can be used\n     to receive messages from the \u003ccode\u003e\u003ca\u003eHandle\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNotice: The \u003ccode\u003e\u003ca\u003eErrorHandler\u003c/a\u003e\u003c/code\u003e will be given the returned \u003ccode\u003e\u003ca\u003eWrapBox\u003c/a\u003e\u003c/code\u003e. Writing to\n     may not be what you want to do. Instead you might first call\n     \u003ccode\u003e\u003ca\u003ewrapWriteHandle\u003c/a\u003e\u003c/code\u003e and then use its \u003ccode\u003e\u003ca\u003eWrapBox\u003c/a\u003e\u003c/code\u003e in \u003ccode\u003e\u003ca\u003ewrapReadHandle\u003c/a\u003e\u003c/code\u003es\n     \u003ccode\u003e\u003ca\u003eErrorHandler\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Mailbox.Wrapper",
          "name": "wrapReadHandle",
          "package": "epass",
          "signature": "Handle-\u003e ErrorHandler m-\u003e IO (WrapBox m)",
          "type": "function"
        },
        "index": {
          "description": "Wrap the given Handle for reading The returned WrapBox can be used to receive messages from the Handle Notice The ErrorHandler will be given the returned WrapBox Writing to may not be what you want to do Instead you might first call wrapWriteHandle and then use its WrapBox in wrapReadHandle ErrorHandler",
          "hierarchy": "Control Concurrent Mailbox Wrapper",
          "module": "Control.Concurrent.Mailbox.Wrapper",
          "name": "wrapReadHandle",
          "normalized": "Handle-\u003eErrorHandler a-\u003eIO(WrapBox a)",
          "package": "epass",
          "partial": "Read Handle",
          "signature": "Handle-\u003eErrorHandler m-\u003eIO(WrapBox m)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/epass/docs/Control-Concurrent-Mailbox-Wrapper.html#v:wrapReadHandle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003ewrapReadHandle\u003c/a\u003e\u003c/code\u003e but use an existing \u003ccode\u003e\u003ca\u003eMailbox\u003c/a\u003e\u003c/code\u003e for wrapping.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Mailbox.Wrapper",
          "name": "wrapReadHandleWithMailbox",
          "package": "epass",
          "signature": "Handle-\u003e Mailbox m-\u003e ErrorHandler m-\u003e IO (WrapBox m)",
          "type": "function"
        },
        "index": {
          "description": "Same as wrapReadHandle but use an existing Mailbox for wrapping",
          "hierarchy": "Control Concurrent Mailbox Wrapper",
          "module": "Control.Concurrent.Mailbox.Wrapper",
          "name": "wrapReadHandleWithMailbox",
          "normalized": "Handle-\u003eMailbox a-\u003eErrorHandler a-\u003eIO(WrapBox a)",
          "package": "epass",
          "partial": "Read Handle With Mailbox",
          "signature": "Handle-\u003eMailbox m-\u003eErrorHandler m-\u003eIO(WrapBox m)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/epass/docs/Control-Concurrent-Mailbox-Wrapper.html#v:wrapReadHandleWithMailbox"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrap the given \u003ccode\u003e\u003ca\u003eHandle\u003c/a\u003e\u003c/code\u003e for writing. The returned \u003ccode\u003e\u003ca\u003eWrapBox\u003c/a\u003e\u003c/code\u003e can be used to\n     send messages through the \u003ccode\u003e\u003ca\u003eHandle\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Mailbox.Wrapper",
          "name": "wrapWriteHandle",
          "package": "epass",
          "signature": "Handle-\u003e ErrorHandler m-\u003e IO (WrapBox m)",
          "type": "function"
        },
        "index": {
          "description": "Wrap the given Handle for writing The returned WrapBox can be used to send messages through the Handle",
          "hierarchy": "Control Concurrent Mailbox Wrapper",
          "module": "Control.Concurrent.Mailbox.Wrapper",
          "name": "wrapWriteHandle",
          "normalized": "Handle-\u003eErrorHandler a-\u003eIO(WrapBox a)",
          "package": "epass",
          "partial": "Write Handle",
          "signature": "Handle-\u003eErrorHandler m-\u003eIO(WrapBox m)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/epass/docs/Control-Concurrent-Mailbox-Wrapper.html#v:wrapWriteHandle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003ewrapWriteHandle\u003c/a\u003e\u003c/code\u003e but use an existing \u003ccode\u003e\u003ca\u003eMailbox\u003c/a\u003e\u003c/code\u003e for wrapping.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Mailbox.Wrapper",
          "name": "wrapWriteHandleWithMailbox",
          "package": "epass",
          "signature": "Handle-\u003e Mailbox m-\u003e ErrorHandler m-\u003e IO (WrapBox m)",
          "type": "function"
        },
        "index": {
          "description": "Same as wrapWriteHandle but use an existing Mailbox for wrapping",
          "hierarchy": "Control Concurrent Mailbox Wrapper",
          "module": "Control.Concurrent.Mailbox.Wrapper",
          "name": "wrapWriteHandleWithMailbox",
          "normalized": "Handle-\u003eMailbox a-\u003eErrorHandler a-\u003eIO(WrapBox a)",
          "package": "epass",
          "partial": "Write Handle With Mailbox",
          "signature": "Handle-\u003eMailbox m-\u003eErrorHandler m-\u003eIO(WrapBox m)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/epass/docs/Control-Concurrent-Mailbox-Wrapper.html#v:wrapWriteHandleWithMailbox"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides Erlang like functionality for message passing.\n\u003c/p\u003e\u003cp\u003eInstead of mailboxes attached to each process you have to create the needed\n     mailboxes yourself. This means that messages cannot be send to processes\n     or threads directly, but only to mailboxes. On the other hand multiple\n     threads may share a mailbox and one thread may have multiple mailboxes.\n\u003c/p\u003e\u003cp\u003eFor a simple example on how to receive messages have a look at the\n     \u003ccode\u003e\u003ca\u003eMsgHandler\u003c/a\u003e\u003c/code\u003e type.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Concurrent.Mailbox",
          "name": "Mailbox",
          "package": "epass",
          "source": "src/Control-Concurrent-Mailbox.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides Erlang like functionality for message passing Instead of mailboxes attached to each process you have to create the needed mailboxes yourself This means that messages cannot be send to processes or threads directly but only to mailboxes On the other hand multiple threads may share mailbox and one thread may have multiple mailboxes For simple example on how to receive messages have look at the MsgHandler type",
          "hierarchy": "Control Concurrent Mailbox",
          "module": "Control.Concurrent.Mailbox",
          "name": "Mailbox",
          "package": "epass",
          "partial": "Mailbox",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/epass/docs/Control-Concurrent-Mailbox.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe action to perfom in case of successful matching.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Mailbox",
          "name": "Handler",
          "package": "epass",
          "source": "src/Control-Concurrent-Mailbox.html#Handler",
          "type": "data"
        },
        "index": {
          "description": "The action to perfom in case of successful matching",
          "hierarchy": "Control Concurrent Mailbox",
          "module": "Control.Concurrent.Mailbox",
          "name": "Handler",
          "package": "epass",
          "partial": "Handler",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/epass/docs/Control-Concurrent-Mailbox.html#t:Handler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003eChan\u003c/code\u003e based mailbox.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Mailbox",
          "name": "Mailbox",
          "package": "epass",
          "source": "src/Control-Concurrent-Mailbox.html#Mailbox",
          "type": "data"
        },
        "index": {
          "description": "Chan based mailbox",
          "hierarchy": "Control Concurrent Mailbox",
          "module": "Control.Concurrent.Mailbox",
          "name": "Mailbox",
          "package": "epass",
          "partial": "Mailbox",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/epass/docs/Control-Concurrent-Mailbox.html#t:Mailbox"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAny instance of \u003ccode\u003e\u003ca\u003eMailboxClass\u003c/a\u003e\u003c/code\u003e may be used as a mailbox for message\n     passing. \u003ccode\u003eb\u003c/code\u003e is the mailbox type and m is the message type.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Mailbox",
          "name": "MailboxClass",
          "package": "epass",
          "source": "src/Control-Concurrent-Mailbox.html#MailboxClass",
          "type": "class"
        },
        "index": {
          "description": "Any instance of MailboxClass may be used as mailbox for message passing is the mailbox type and is the message type",
          "hierarchy": "Control Concurrent Mailbox",
          "module": "Control.Concurrent.Mailbox",
          "name": "MailboxClass",
          "package": "epass",
          "partial": "Mailbox Class",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/epass/docs/Control-Concurrent-Mailbox.html#t:MailboxClass"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA function that matches a given message and returns the corresponding\n     handler.\n\u003c/p\u003e\u003cp\u003eIn case of an pattern matching error \u003ccode\u003e\u003ca\u003ereceive\u003c/a\u003e\u003c/code\u003e will continue matching\n     the next \u003ccode\u003e\u003ca\u003eMsgHandler\u003c/a\u003e\u003c/code\u003e / message.\n\u003c/p\u003e\u003cp\u003eFor example you may write somthing like this:\n\u003c/p\u003e\u003cpre\u003e receive mbox\n     [ \\ True  -\u003e handler $ return 1\n     , \\ False -\u003e handler $ return 2\n     ]\n\u003c/pre\u003e",
          "module": "Control.Concurrent.Mailbox",
          "name": "MsgHandler",
          "package": "epass",
          "source": "src/Control-Concurrent-Mailbox.html#MsgHandler",
          "type": "type"
        },
        "index": {
          "description": "function that matches given message and returns the corresponding handler In case of an pattern matching error receive will continue matching the next MsgHandler message For example you may write somthing like this receive mbox True handler return False handler return",
          "hierarchy": "Control Concurrent Mailbox",
          "module": "Control.Concurrent.Mailbox",
          "name": "MsgHandler",
          "package": "epass",
          "partial": "Msg Handler",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/epass/docs/Control-Concurrent-Mailbox.html#t:MsgHandler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCombine to lists of message handlers into one list. The results of the\n     message handler will be wrapped in \u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Mailbox",
          "name": "(\u003c|\u003e)",
          "package": "epass",
          "signature": "[MsgHandler m a]-\u003e [MsgHandler m b]-\u003e [MsgHandler m (Either a b)]",
          "type": "function"
        },
        "index": {
          "description": "Combine to lists of message handlers into one list The results of the message handler will be wrapped in Either",
          "hierarchy": "Control Concurrent Mailbox",
          "module": "Control.Concurrent.Mailbox",
          "name": "(\u003c|\u003e) \u003c|\u003e",
          "normalized": "[MsgHandler a b]-\u003e[MsgHandler a c]-\u003e[MsgHandler a(Either b c)]",
          "package": "epass",
          "signature": "[MsgHandler m a]-\u003e[MsgHandler m b]-\u003e[MsgHandler m(Either a b)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/epass/docs/Control-Concurrent-Mailbox.html#v:-60--124--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn alias for \u003ccode\u003e\u003ca\u003esend\u003c/a\u003e\u003c/code\u003e in the flavor of Erlang's \u003ccode\u003e!\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Mailbox",
          "name": "(\u003c!)",
          "package": "epass",
          "signature": "b m -\u003e m -\u003e IO ()",
          "source": "src/Control-Concurrent-Mailbox.html#%3C%21",
          "type": "function"
        },
        "index": {
          "description": "An alias for send in the flavor of Erlang",
          "hierarchy": "Control Concurrent Mailbox",
          "module": "Control.Concurrent.Mailbox",
          "name": "(\u003c!) \u003c!",
          "normalized": "a b-\u003eb-\u003eIO()",
          "package": "epass",
          "signature": "b m-\u003em-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/epass/docs/Control-Concurrent-Mailbox.html#v:-60--33-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a function to the result of an message handler.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Mailbox",
          "name": "(.\u003e)",
          "package": "epass",
          "signature": "MsgHandler m a-\u003e (a -\u003e b)-\u003e MsgHandler m b",
          "type": "function"
        },
        "index": {
          "description": "Apply function to the result of an message handler",
          "hierarchy": "Control Concurrent Mailbox",
          "module": "Control.Concurrent.Mailbox",
          "name": "(.\u003e) .\u003e",
          "normalized": "MsgHandler a b-\u003e(b-\u003ec)-\u003eMsgHandler a c",
          "package": "epass",
          "signature": "MsgHandler m a-\u003e(a-\u003eb)-\u003eMsgHandler m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/epass/docs/Control-Concurrent-Mailbox.html#v:.-62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCall this function to cleanup before exit or when the mailbox is no\n         longer needed.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Mailbox",
          "name": "close",
          "package": "epass",
          "signature": "b m -\u003e IO ()",
          "source": "src/Control-Concurrent-Mailbox.html#close",
          "type": "method"
        },
        "index": {
          "description": "Call this function to cleanup before exit or when the mailbox is no longer needed",
          "hierarchy": "Control Concurrent Mailbox",
          "module": "Control.Concurrent.Mailbox",
          "name": "close",
          "normalized": "a b-\u003eIO()",
          "package": "epass",
          "signature": "b m-\u003eIO()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/epass/docs/Control-Concurrent-Mailbox.html#v:close"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet a message from the mailbox (with \u003ccode\u003e\u003ca\u003eMailbox\u003c/a\u003e\u003c/code\u003e it is the first one).\n\u003c/p\u003e",
          "module": "Control.Concurrent.Mailbox",
          "name": "getMessage",
          "package": "epass",
          "signature": "getMessage",
          "source": "src/Control-Concurrent-Mailbox.html#getMessage",
          "type": "method"
        },
        "index": {
          "description": "Get message from the mailbox with Mailbox it is the first one",
          "hierarchy": "Control Concurrent Mailbox",
          "module": "Control.Concurrent.Mailbox",
          "name": "getMessage",
          "package": "epass",
          "partial": "Message",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/epass/docs/Control-Concurrent-Mailbox.html#v:getMessage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate a handler from an \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e action.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Mailbox",
          "name": "handler",
          "package": "epass",
          "signature": "IO a -\u003e Handler a",
          "source": "src/Control-Concurrent-Mailbox.html#handler",
          "type": "function"
        },
        "index": {
          "description": "Generate handler from an IO action",
          "hierarchy": "Control Concurrent Mailbox",
          "module": "Control.Concurrent.Mailbox",
          "name": "handler",
          "normalized": "IO a-\u003eHandler a",
          "package": "epass",
          "signature": "IO a-\u003eHandler a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/epass/docs/Control-Concurrent-Mailbox.html#v:handler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChecks wether the mailbox is empty.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Mailbox",
          "name": "isEmpty",
          "package": "epass",
          "signature": "isEmpty",
          "source": "src/Control-Concurrent-Mailbox.html#isEmpty",
          "type": "method"
        },
        "index": {
          "description": "Checks wether the mailbox is empty",
          "hierarchy": "Control Concurrent Mailbox",
          "module": "Control.Concurrent.Mailbox",
          "name": "isEmpty",
          "package": "epass",
          "partial": "Empty",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/epass/docs/Control-Concurrent-Mailbox.html#v:isEmpty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a new mailbox.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Mailbox",
          "name": "newMailbox",
          "package": "epass",
          "signature": "IO (Mailbox m)",
          "source": "src/Control-Concurrent-Mailbox.html#newMailbox",
          "type": "function"
        },
        "index": {
          "description": "Creates new mailbox",
          "hierarchy": "Control Concurrent Mailbox",
          "module": "Control.Concurrent.Mailbox",
          "name": "newMailbox",
          "package": "epass",
          "partial": "Mailbox",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/epass/docs/Control-Concurrent-Mailbox.html#v:newMailbox"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd a new message to the mailbox (with \u003ccode\u003e\u003ca\u003eMailbox\u003c/a\u003e\u003c/code\u003e it will be placed at\n         the end of the mailbox).\n\u003c/p\u003e",
          "module": "Control.Concurrent.Mailbox",
          "name": "putMessage",
          "package": "epass",
          "signature": "putMessage",
          "source": "src/Control-Concurrent-Mailbox.html#putMessage",
          "type": "method"
        },
        "index": {
          "description": "Add new message to the mailbox with Mailbox it will be placed at the end of the mailbox",
          "hierarchy": "Control Concurrent Mailbox",
          "module": "Control.Concurrent.Mailbox",
          "name": "putMessage",
          "package": "epass",
          "partial": "Message",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/epass/docs/Control-Concurrent-Mailbox.html#v:putMessage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReceive messages in the flavour of Erlang's \u003ccode\u003ereceive\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eFor each message in the mailbox all message handlers are matched until a\n     matching message is found. It will be removed from the mailbox and the\n     matching message handler's action will be performed.\n\u003c/p\u003e\u003cp\u003eIf no message matches any of the message handler, \u003ccode\u003e\u003ca\u003ereceive\u003c/a\u003e\u003c/code\u003e will block and\n     check new incoming messages until a match is found.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Mailbox",
          "name": "receive",
          "package": "epass",
          "signature": "b m-\u003e [MsgHandler m a]-\u003e IO a",
          "type": "function"
        },
        "index": {
          "description": "Receive messages in the flavour of Erlang receive For each message in the mailbox all message handlers are matched until matching message is found It will be removed from the mailbox and the matching message handler action will be performed If no message matches any of the message handler receive will block and check new incoming messages until match is found",
          "hierarchy": "Control Concurrent Mailbox",
          "module": "Control.Concurrent.Mailbox",
          "name": "receive",
          "normalized": "a b-\u003e[MsgHandler b c]-\u003eIO c",
          "package": "epass",
          "signature": "b m-\u003e[MsgHandler m a]-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/epass/docs/Control-Concurrent-Mailbox.html#v:receive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003ereceive\u003c/a\u003e\u003c/code\u003e, but doesn't block. If no match was found, the default\n     handler is executed.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Mailbox",
          "name": "receiveNonBlocking",
          "package": "epass",
          "signature": "b m-\u003e [MsgHandler m a]-\u003e IO a-\u003e IO a",
          "type": "function"
        },
        "index": {
          "description": "Like receive but doesn block If no match was found the default handler is executed",
          "hierarchy": "Control Concurrent Mailbox",
          "module": "Control.Concurrent.Mailbox",
          "name": "receiveNonBlocking",
          "normalized": "a b-\u003e[MsgHandler b c]-\u003eIO c-\u003eIO c",
          "package": "epass",
          "partial": "Non Blocking",
          "signature": "b m-\u003e[MsgHandler m a]-\u003eIO a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/epass/docs/Control-Concurrent-Mailbox.html#v:receiveNonBlocking"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003ereceive\u003c/a\u003e\u003c/code\u003e, but times out after a given time. In case of timeout the\n     timeout handler is executed.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Mailbox",
          "name": "receiveTimeout",
          "package": "epass",
          "signature": "b m-\u003e Int-\u003e [MsgHandler m a]-\u003e IO a-\u003e IO a",
          "type": "function"
        },
        "index": {
          "description": "Like receive but times out after given time In case of timeout the timeout handler is executed",
          "hierarchy": "Control Concurrent Mailbox",
          "module": "Control.Concurrent.Mailbox",
          "name": "receiveTimeout",
          "normalized": "a b-\u003eInt-\u003e[MsgHandler b c]-\u003eIO c-\u003eIO c",
          "package": "epass",
          "partial": "Timeout",
          "signature": "b m-\u003eInt-\u003e[MsgHandler m a]-\u003eIO a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/epass/docs/Control-Concurrent-Mailbox.html#v:receiveTimeout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSend the given message to the given mailbox.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Mailbox",
          "name": "send",
          "package": "epass",
          "signature": "b m-\u003e m-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Send the given message to the given mailbox",
          "hierarchy": "Control Concurrent Mailbox",
          "module": "Control.Concurrent.Mailbox",
          "name": "send",
          "normalized": "a b-\u003eb-\u003eIO()",
          "package": "epass",
          "signature": "b m-\u003em-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/epass/docs/Control-Concurrent-Mailbox.html#v:send"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePut a message back to the mailbox (with \u003ccode\u003e\u003ca\u003eMailbox\u003c/a\u003e\u003c/code\u003e it will be placed\n         at the beginning of the mailbox).\n\u003c/p\u003e",
          "module": "Control.Concurrent.Mailbox",
          "name": "unGetMessage",
          "package": "epass",
          "signature": "unGetMessage",
          "source": "src/Control-Concurrent-Mailbox.html#unGetMessage",
          "type": "method"
        },
        "index": {
          "description": "Put message back to the mailbox with Mailbox it will be placed at the beginning of the mailbox",
          "hierarchy": "Control Concurrent Mailbox",
          "module": "Control.Concurrent.Mailbox",
          "name": "unGetMessage",
          "package": "epass",
          "partial": "Get Message",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/epass/docs/Control-Concurrent-Mailbox.html#v:unGetMessage"
      }
    }
  ]
]