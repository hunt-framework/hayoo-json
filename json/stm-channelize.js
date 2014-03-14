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
        "word": "stm-channelize"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eWrap a network connection such that sending and receiving can be done via\n STM transactions.\n\u003c/p\u003e\u003cp\u003eSee \u003ccode\u003e\u003ca\u003econnectHandle\u003c/a\u003e\u003c/code\u003e for basic usage.  See the \u003ccode\u003eexamples\u003c/code\u003e directory of this\n package for full examples.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Concurrent.STM.Channelize",
          "name": "Channelize",
          "package": "stm-channelize",
          "source": "src/Control-Concurrent-STM-Channelize.html",
          "type": "module"
        },
        "index": {
          "description": "Wrap network connection such that sending and receiving can be done via STM transactions See connectHandle for basic usage See the examples directory of this package for full examples",
          "hierarchy": "Control Concurrent STM Channelize",
          "module": "Control.Concurrent.STM.Channelize",
          "name": "Channelize",
          "package": "stm-channelize",
          "partial": "Channelize",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/stm-channelize/docs/Control-Concurrent-STM-Channelize.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCallbacks telling \u003ccode\u003e\u003ca\u003echannelize\u003c/a\u003e\u003c/code\u003e how to use a duplex connection.\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.Channelize",
          "name": "ChannelizeConfig",
          "package": "stm-channelize",
          "source": "src/Control-Concurrent-STM-Channelize.html#ChannelizeConfig",
          "type": "data"
        },
        "index": {
          "description": "Callbacks telling channelize how to use duplex connection",
          "hierarchy": "Control Concurrent STM Channelize",
          "module": "Control.Concurrent.STM.Channelize",
          "name": "ChannelizeConfig",
          "package": "stm-channelize",
          "partial": "Channelize Config",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/stm-channelize/docs/Control-Concurrent-STM-Channelize.html#t:ChannelizeConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.STM.Channelize",
          "name": "ChannelizeException",
          "package": "stm-channelize",
          "source": "src/Control-Concurrent-STM-Channelize.html#ChannelizeException",
          "type": "data"
        },
        "index": {
          "hierarchy": "Control Concurrent STM Channelize",
          "module": "Control.Concurrent.STM.Channelize",
          "name": "ChannelizeException",
          "package": "stm-channelize",
          "partial": "Channelize Exception",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/stm-channelize/docs/Control-Concurrent-STM-Channelize.html#t:ChannelizeException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn abstract object that supports sending and receiving messages in STM.\n\u003c/p\u003e\u003cp\u003eInternally, it is a pair of \u003ccode\u003e\u003ca\u003eTChan\u003c/a\u003e\u003c/code\u003es, with additional flags to check for I/O\n errors on \u003ccode\u003e\u003ca\u003erecv\u003c/a\u003e\u003c/code\u003e, and to avoid filling the send queue with messages that\n will never be sent.\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.Channelize",
          "name": "TDuplex",
          "package": "stm-channelize",
          "source": "src/Control-Concurrent-STM-Channelize.html#TDuplex",
          "type": "data"
        },
        "index": {
          "description": "An abstract object that supports sending and receiving messages in STM Internally it is pair of TChan with additional flags to check for errors on recv and to avoid filling the send queue with messages that will never be sent",
          "hierarchy": "Control Concurrent STM Channelize",
          "module": "Control.Concurrent.STM.Channelize",
          "name": "TDuplex",
          "package": "stm-channelize",
          "partial": "TDuplex",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/stm-channelize/docs/Control-Concurrent-STM-Channelize.html#t:TDuplex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.STM.Channelize",
          "name": "ChannelizeClosedRecv",
          "package": "stm-channelize",
          "signature": "ChannelizeClosedRecv",
          "source": "src/Control-Concurrent-STM-Channelize.html#ChannelizeException",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent STM Channelize",
          "module": "Control.Concurrent.STM.Channelize",
          "name": "ChannelizeClosedRecv",
          "package": "stm-channelize",
          "partial": "Channelize Closed Recv",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-channelize/docs/Control-Concurrent-STM-Channelize.html#v:ChannelizeClosedRecv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.STM.Channelize",
          "name": "ChannelizeClosedSend",
          "package": "stm-channelize",
          "signature": "ChannelizeClosedSend",
          "source": "src/Control-Concurrent-STM-Channelize.html#ChannelizeException",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent STM Channelize",
          "module": "Control.Concurrent.STM.Channelize",
          "name": "ChannelizeClosedSend",
          "package": "stm-channelize",
          "partial": "Channelize Closed Send",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-channelize/docs/Control-Concurrent-STM-Channelize.html#v:ChannelizeClosedSend"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.STM.Channelize",
          "name": "ChannelizeConfig",
          "package": "stm-channelize",
          "signature": "ChannelizeConfig",
          "source": "src/Control-Concurrent-STM-Channelize.html#ChannelizeConfig",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent STM Channelize",
          "module": "Control.Concurrent.STM.Channelize",
          "name": "ChannelizeConfig",
          "package": "stm-channelize",
          "partial": "Channelize Config",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-channelize/docs/Control-Concurrent-STM-Channelize.html#v:ChannelizeConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOpen a connection, and manage it so it can be used as a \u003ccode\u003e\u003ca\u003eTDuplex\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis works by spawning two threads, one which receives messages and another\n which sends messages.  If the \u003ccode\u003e\u003ca\u003erecvMsg\u003c/a\u003e\u003c/code\u003e callback throws an exception, it\n will be forwarded to the next \u003ccode\u003e\u003ca\u003erecv\u003c/a\u003e\u003c/code\u003e call (once the receive queue is empty).\n\u003c/p\u003e\u003cp\u003eWhen the inner computation completes (or throws an exception), the send\n queue is flushed and the connection is closed.\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.Channelize",
          "name": "channelize",
          "package": "stm-channelize",
          "signature": "IO (ChannelizeConfig msg_in msg_out)-\u003e (TDuplex msg_in msg_out -\u003e IO a)-\u003e IO a",
          "type": "function"
        },
        "index": {
          "description": "Open connection and manage it so it can be used as TDuplex This works by spawning two threads one which receives messages and another which sends messages If the recvMsg callback throws an exception it will be forwarded to the next recv call once the receive queue is empty When the inner computation completes or throws an exception the send queue is flushed and the connection is closed",
          "hierarchy": "Control Concurrent STM Channelize",
          "module": "Control.Concurrent.STM.Channelize",
          "name": "channelize",
          "normalized": "IO(ChannelizeConfig a b)-\u003e(TDuplex a b-\u003eIO c)-\u003eIO c",
          "package": "stm-channelize",
          "signature": "IO(ChannelizeConfig msg_in msg_out)-\u003e(TDuplex msg_in msg_out-\u003eIO a)-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-channelize/docs/Control-Concurrent-STM-Channelize.html#v:channelize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCallback for closing the connection.  Called when \u003ccode\u003e\u003ca\u003echannelize\u003c/a\u003e\u003c/code\u003e\n completes.\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.Channelize",
          "name": "connClose",
          "package": "stm-channelize",
          "signature": "IO ()",
          "source": "src/Control-Concurrent-STM-Channelize.html#ChannelizeConfig",
          "type": "function"
        },
        "index": {
          "description": "Callback for closing the connection Called when channelize completes",
          "hierarchy": "Control Concurrent STM Channelize",
          "module": "Control.Concurrent.STM.Channelize",
          "name": "connClose",
          "normalized": "IO()",
          "package": "stm-channelize",
          "partial": "Close",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-channelize/docs/Control-Concurrent-STM-Channelize.html#v:connClose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrap a duplex \u003ccode\u003e\u003ca\u003eHandle\u003c/a\u003e\u003c/code\u003e in a \u003ccode\u003e\u003ca\u003eChannelizeConfig\u003c/a\u003e\u003c/code\u003e.  Each message corresponds\n to a line.\n\u003c/p\u003e\u003cp\u003eExample (client):\n\u003c/p\u003e\u003cpre\u003elet connect = connectTo \"localhost\" (PortNumber 1234) \u003e\u003e= connectHandle\n in channelize connect $ \\duplex -\u003e do\n        ...\n\u003c/pre\u003e\u003cp\u003eExample (Telnet server):\n\u003c/p\u003e\u003cpre\u003e(handle, host, port) \u003c- accept sock\nputStrLn $ \"Accepted connection from \" ++ host ++ \":\" ++ show port\n\n-- Swallow carriage returns sent by telnet clients\nhSetNewlineMode handle universalNewlineMode\n\nforkIO $ channelize (connectHandle handle) $ \\duplex -\u003e do\n    ...\n\u003c/pre\u003e",
          "module": "Control.Concurrent.STM.Channelize",
          "name": "connectHandle",
          "package": "stm-channelize",
          "signature": "Handle -\u003e IO (ChannelizeConfig String String)",
          "source": "src/Control-Concurrent-STM-Channelize.html#connectHandle",
          "type": "function"
        },
        "index": {
          "description": "Wrap duplex Handle in ChannelizeConfig Each message corresponds to line Example client let connect connectTo localhost PortNumber connectHandle in channelize connect duplex do Example Telnet server handle host port accept sock putStrLn Accepted connection from host show port Swallow carriage returns sent by telnet clients hSetNewlineMode handle universalNewlineMode forkIO channelize connectHandle handle duplex do",
          "hierarchy": "Control Concurrent STM Channelize",
          "module": "Control.Concurrent.STM.Channelize",
          "name": "connectHandle",
          "normalized": "Handle-\u003eIO(ChannelizeConfig String String)",
          "package": "stm-channelize",
          "partial": "Handle",
          "signature": "Handle-\u003eIO(ChannelizeConfig String String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-channelize/docs/Control-Concurrent-STM-Channelize.html#v:connectHandle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTreat \u003ccode\u003e\u003ca\u003estdin\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003estdout\u003c/a\u003e\u003c/code\u003e as a \"connection\", where each message\n corresponds to a line.\n\u003c/p\u003e\u003cp\u003eThis sets the buffering mode of \u003ccode\u003e\u003ca\u003estdin\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003estdout\u003c/a\u003e\u003c/code\u003e to \u003ccode\u003e\u003ca\u003eLineBuffering\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.Channelize",
          "name": "connectStdio",
          "package": "stm-channelize",
          "signature": "IO (ChannelizeConfig String String)",
          "source": "src/Control-Concurrent-STM-Channelize.html#connectStdio",
          "type": "function"
        },
        "index": {
          "description": "Treat stdin and stdout as connection where each message corresponds to line This sets the buffering mode of stdin and stdout to LineBuffering",
          "hierarchy": "Control Concurrent STM Channelize",
          "module": "Control.Concurrent.STM.Channelize",
          "name": "connectStdio",
          "package": "stm-channelize",
          "partial": "Stdio",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-channelize/docs/Control-Concurrent-STM-Channelize.html#v:connectStdio"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePerform a read action on a \u003ccode\u003e\u003ca\u003eHandle\u003c/a\u003e\u003c/code\u003e.  Try to ensure that it can be\n interrupted by an asynchronous exception.\n\u003c/p\u003e\u003cp\u003eOn Windows with -threaded, a thread reading a \u003ccode\u003e\u003ca\u003eHandle\u003c/a\u003e\u003c/code\u003e cannot be interrupted\n by an asynchronous exception.  The exception will not be delivered until the\n receive operation completes or fails.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003ehGetInterruptible\u003c/a\u003e\u003c/code\u003e works around this problem (when present) by calling\n \u003ccode\u003e\u003ca\u003ehWaitForInput\u003c/a\u003e\u003c/code\u003e over and over with a delay of one second.\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.Channelize",
          "name": "hGetInterruptible",
          "package": "stm-channelize",
          "signature": "(Handle -\u003e IO a) -\u003e Handle -\u003e IO a",
          "source": "src/Control-Concurrent-STM-Channelize.html#hGetInterruptible",
          "type": "function"
        },
        "index": {
          "description": "Perform read action on Handle Try to ensure that it can be interrupted by an asynchronous exception On Windows with threaded thread reading Handle cannot be interrupted by an asynchronous exception The exception will not be delivered until the receive operation completes or fails hGetInterruptible works around this problem when present by calling hWaitForInput over and over with delay of one second",
          "hierarchy": "Control Concurrent STM Channelize",
          "module": "Control.Concurrent.STM.Channelize",
          "name": "hGetInterruptible",
          "normalized": "(Handle-\u003eIO a)-\u003eHandle-\u003eIO a",
          "package": "stm-channelize",
          "partial": "Get Interruptible",
          "signature": "(Handle-\u003eIO a)-\u003eHandle-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-channelize/docs/Control-Concurrent-STM-Channelize.html#v:hGetInterruptible"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead a message from the receive queue.  \u003ccode\u003e\u003ca\u003eretry\u003c/a\u003e\u003c/code\u003e if no message is available yet.\n\u003c/p\u003e\u003cp\u003eThis will throw an exception if the reading thread encountered an error, or if\nthe connection is closed.\n\u003c/p\u003e\u003cp\u003eRemember that STM transactions have no effect until they commit.  Thus, to send\na message and wait for a response, you will need to use two separate\ntransactions:\n\u003c/p\u003e\u003cpre\u003e\n\u003ccode\u003e\u003ca\u003eatomically\u003c/a\u003e\u003c/code\u003e $ \u003ccode\u003e\u003ca\u003esend\u003c/a\u003e\u003c/code\u003e duplex \"What is your name?\"\nname \u003c- \u003ccode\u003e\u003ca\u003eatomically\u003c/a\u003e\u003c/code\u003e $ \u003ccode\u003e\u003ca\u003erecv\u003c/a\u003e\u003c/code\u003e duplex\n\u003c/pre\u003e",
          "module": "Control.Concurrent.STM.Channelize",
          "name": "recv",
          "package": "stm-channelize",
          "signature": "TDuplex msg_in msg_out -\u003e STM msg_in",
          "source": "src/Control-Concurrent-STM-Channelize.html#recv",
          "type": "function"
        },
        "index": {
          "description": "Read message from the receive queue retry if no message is available yet This will throw an exception if the reading thread encountered an error or if the connection is closed Remember that STM transactions have no effect until they commit Thus to send message and wait for response you will need to use two separate transactions atomically send duplex What is your name name atomically recv duplex",
          "hierarchy": "Control Concurrent STM Channelize",
          "module": "Control.Concurrent.STM.Channelize",
          "name": "recv",
          "normalized": "TDuplex a b-\u003eSTM a",
          "package": "stm-channelize",
          "signature": "TDuplex msg_in msg_out-\u003eSTM msg_in",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-channelize/docs/Control-Concurrent-STM-Channelize.html#v:recv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.STM.Channelize",
          "name": "recvMsg",
          "package": "stm-channelize",
          "signature": "IO msg_in",
          "source": "src/Control-Concurrent-STM-Channelize.html#ChannelizeConfig",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent STM Channelize",
          "module": "Control.Concurrent.STM.Channelize",
          "name": "recvMsg",
          "package": "stm-channelize",
          "partial": "Msg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-channelize/docs/Control-Concurrent-STM-Channelize.html#v:recvMsg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a message to the send queue.\n\u003c/p\u003e\u003cp\u003eIf an error occurred while sending a previous message, or if the connection\n is closed, \u003ccode\u003e\u003ca\u003esend\u003c/a\u003e\u003c/code\u003e silently ignores the message and returns.  Rationale:\n suppose you have threads for clients A and B.  A sends a message to B.  If\n \u003ccode\u003e\u003ca\u003esend\u003c/a\u003e\u003c/code\u003e were to throw an exception on failure, you might inadvertently\n disconnect A because of a failure that is B's fault.\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.Channelize",
          "name": "send",
          "package": "stm-channelize",
          "signature": "TDuplex msg_in msg_out -\u003e msg_out -\u003e STM ()",
          "source": "src/Control-Concurrent-STM-Channelize.html#send",
          "type": "function"
        },
        "index": {
          "description": "Write message to the send queue If an error occurred while sending previous message or if the connection is closed send silently ignores the message and returns Rationale suppose you have threads for clients and sends message to If send were to throw an exception on failure you might inadvertently disconnect because of failure that is fault",
          "hierarchy": "Control Concurrent STM Channelize",
          "module": "Control.Concurrent.STM.Channelize",
          "name": "send",
          "normalized": "TDuplex a b-\u003eb-\u003eSTM()",
          "package": "stm-channelize",
          "signature": "TDuplex msg_in msg_out-\u003emsg_out-\u003eSTM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-channelize/docs/Control-Concurrent-STM-Channelize.html#v:send"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAction to call before closing the connection, but only if none\n of the send calls failed.  This is called from the same thread\n as \u003ccode\u003e\u003ca\u003esendMsg\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.Channelize",
          "name": "sendBye",
          "package": "stm-channelize",
          "signature": "IO ()",
          "source": "src/Control-Concurrent-STM-Channelize.html#ChannelizeConfig",
          "type": "function"
        },
        "index": {
          "description": "Action to call before closing the connection but only if none of the send calls failed This is called from the same thread as sendMsg",
          "hierarchy": "Control Concurrent STM Channelize",
          "module": "Control.Concurrent.STM.Channelize",
          "name": "sendBye",
          "normalized": "IO()",
          "package": "stm-channelize",
          "partial": "Bye",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-channelize/docs/Control-Concurrent-STM-Channelize.html#v:sendBye"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003esend\u003c/a\u003e\u003c/code\u003e, but throw an exception if the message was discarded (either\n because \u003ccode\u003e\u003ca\u003esendMsg\u003c/a\u003e\u003c/code\u003e failed on a previous message, or because the connection\n has been closed).\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.Channelize",
          "name": "sendE",
          "package": "stm-channelize",
          "signature": "TDuplex msg_in msg_out -\u003e msg_out -\u003e STM ()",
          "source": "src/Control-Concurrent-STM-Channelize.html#sendE",
          "type": "function"
        },
        "index": {
          "description": "Like send but throw an exception if the message was discarded either because sendMsg failed on previous message or because the connection has been closed",
          "hierarchy": "Control Concurrent STM Channelize",
          "module": "Control.Concurrent.STM.Channelize",
          "name": "sendE",
          "normalized": "TDuplex a b-\u003eb-\u003eSTM()",
          "package": "stm-channelize",
          "signature": "TDuplex msg_in msg_out-\u003emsg_out-\u003eSTM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-channelize/docs/Control-Concurrent-STM-Channelize.html#v:sendE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCallbacks for sending and receiving messages.  All calls of\n \u003ccode\u003e\u003ca\u003erecvMsg\u003c/a\u003e\u003c/code\u003e will be in one thread, and all calls of \u003ccode\u003e\u003ca\u003esendMsg\u003c/a\u003e\u003c/code\u003e will\n be in another thread.  If \u003ccode\u003e\u003ca\u003erecvMsg\u003c/a\u003e\u003c/code\u003e throws an exception, it will\n not be called again.  If \u003ccode\u003e\u003ca\u003esendMsg\u003c/a\u003e\u003c/code\u003e throws an exception, it will\n not be called again, nor will \u003ccode\u003e\u003ca\u003esendBye\u003c/a\u003e\u003c/code\u003e be called.\n\u003c/p\u003e\u003cp\u003eThis means it is safe to use an \u003ccode\u003e\u003ca\u003eIORef\u003c/a\u003e\u003c/code\u003e to pass state from one\n \u003ccode\u003e\u003ca\u003erecvMsg\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003esendMsg\u003c/a\u003e\u003c/code\u003e call to the next.  However, to share\n state between \u003ccode\u003e\u003ca\u003erecvMsg\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003esendMsg\u003c/a\u003e\u003c/code\u003e, you will need to use\n thread synchronization (e.g. \u003ccode\u003e\u003ca\u003eMVar\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eSTM\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.Channelize",
          "name": "sendMsg",
          "package": "stm-channelize",
          "signature": "msg_out -\u003e IO ()",
          "source": "src/Control-Concurrent-STM-Channelize.html#ChannelizeConfig",
          "type": "function"
        },
        "index": {
          "description": "Callbacks for sending and receiving messages All calls of recvMsg will be in one thread and all calls of sendMsg will be in another thread If recvMsg throws an exception it will not be called again If sendMsg throws an exception it will not be called again nor will sendBye be called This means it is safe to use an IORef to pass state from one recvMsg or sendMsg call to the next However to share state between recvMsg and sendMsg you will need to use thread synchronization e.g MVar STM",
          "hierarchy": "Control Concurrent STM Channelize",
          "module": "Control.Concurrent.STM.Channelize",
          "name": "sendMsg",
          "normalized": "a-\u003eIO()",
          "package": "stm-channelize",
          "partial": "Msg",
          "signature": "msg_out-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-channelize/docs/Control-Concurrent-STM-Channelize.html#v:sendMsg"
      }
    }
  ]
]