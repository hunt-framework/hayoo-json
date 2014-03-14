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
        "word": "hlibev"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e\u003ccode\u003eNetwork.Libev\u003c/code\u003e is a low-level binding to the libev library\n (\u003ca\u003ehttp://libev.schmorp.de/\u003c/a\u003e). The \u003ccode\u003elibev\u003c/code\u003e documentation is available here:\n \u003ca\u003ehttp://pod.tst.eu/http://cvs.schmorp.de/libev/ev.pod\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.Libev",
          "name": "Libev",
          "package": "hlibev",
          "source": "src/Network-Libev.html",
          "type": "module"
        },
        "index": {
          "description": "Network.Libev is low-level binding to the libev library http libev.schmorp.de The libev documentation is available here http pod.tst.eu http cvs.schmorp.de libev ev.pod",
          "hierarchy": "Network Libev",
          "module": "Network.Libev",
          "name": "Libev",
          "package": "hlibev",
          "partial": "Libev",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hlibev/docs/Network-Libev.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn \u003ccode\u003e\u003ca\u003eAsyncCallback\u003c/a\u003e\u003c/code\u003e is called when you wakeup an event loop with\n \u003ccode\u003eev_async_send\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Network.Libev",
          "name": "AsyncCallback",
          "package": "hlibev",
          "source": "src/Network-Libev.html#AsyncCallback",
          "type": "type"
        },
        "index": {
          "description": "An AsyncCallback is called when you wakeup an event loop with ev async send",
          "hierarchy": "Network Libev",
          "module": "Network.Libev",
          "name": "AsyncCallback",
          "package": "hlibev",
          "partial": "Async Callback",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hlibev/docs/Network-Libev.html#t:AsyncCallback"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Libev",
          "name": "CEvBackendFlagType",
          "package": "hlibev",
          "source": "src/Network-Libev.html#CEvBackendFlagType",
          "type": "type"
        },
        "index": {
          "hierarchy": "Network Libev",
          "module": "Network.Libev",
          "name": "CEvBackendFlagType",
          "package": "hlibev",
          "partial": "CEv Backend Flag Type",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hlibev/docs/Network-Libev.html#t:CEvBackendFlagType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Libev",
          "name": "CEvFlagType",
          "package": "hlibev",
          "source": "src/Network-Libev.html#CEvFlagType",
          "type": "type"
        },
        "index": {
          "hierarchy": "Network Libev",
          "module": "Network.Libev",
          "name": "CEvFlagType",
          "package": "hlibev",
          "partial": "CEv Flag Type",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hlibev/docs/Network-Libev.html#t:CEvFlagType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Libev",
          "name": "CEvLoopFlagType",
          "package": "hlibev",
          "source": "src/Network-Libev.html#CEvLoopFlagType",
          "type": "type"
        },
        "index": {
          "hierarchy": "Network Libev",
          "module": "Network.Libev",
          "name": "CEvLoopFlagType",
          "package": "hlibev",
          "partial": "CEv Loop Flag Type",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hlibev/docs/Network-Libev.html#t:CEvLoopFlagType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Libev",
          "name": "CEvUnloopFlagType",
          "package": "hlibev",
          "source": "src/Network-Libev.html#CEvUnloopFlagType",
          "type": "type"
        },
        "index": {
          "hierarchy": "Network Libev",
          "module": "Network.Libev",
          "name": "CEvUnloopFlagType",
          "package": "hlibev",
          "partial": "CEv Unloop Flag Type",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hlibev/docs/Network-Libev.html#t:CEvUnloopFlagType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eCEventType\u003c/a\u003e\u003c/code\u003e is a bitfield used to flag whether a file descriptor is\n readable, writable, or both. Valid values are \u003ccode\u003e\u003ca\u003eev_read\u003c/a\u003e\u003c/code\u003e and\n \u003ccode\u003e\u003ca\u003eev_write\u003c/a\u003e\u003c/code\u003e. TODO: deprecate and replace by a datatype\n\u003c/p\u003e",
          "module": "Network.Libev",
          "name": "CEventType",
          "package": "hlibev",
          "source": "src/Network-Libev.html#CEventType",
          "type": "type"
        },
        "index": {
          "description": "CEventType is bitfield used to flag whether file descriptor is readable writable or both Valid values are ev read and ev write TODO deprecate and replace by datatype",
          "hierarchy": "Network Libev",
          "module": "Network.Libev",
          "name": "CEventType",
          "package": "hlibev",
          "partial": "CEvent Type",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hlibev/docs/Network-Libev.html#t:CEventType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Libev",
          "name": "EvAsyncPtr",
          "package": "hlibev",
          "source": "src/Network-Libev.html#EvAsyncPtr",
          "type": "type"
        },
        "index": {
          "hierarchy": "Network Libev",
          "module": "Network.Libev",
          "name": "EvAsyncPtr",
          "package": "hlibev",
          "partial": "Ev Async Ptr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hlibev/docs/Network-Libev.html#t:EvAsyncPtr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Libev",
          "name": "EvIoPtr",
          "package": "hlibev",
          "source": "src/Network-Libev.html#EvIoPtr",
          "type": "type"
        },
        "index": {
          "hierarchy": "Network Libev",
          "module": "Network.Libev",
          "name": "EvIoPtr",
          "package": "hlibev",
          "partial": "Ev Io Ptr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hlibev/docs/Network-Libev.html#t:EvIoPtr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Libev",
          "name": "EvLoopPtr",
          "package": "hlibev",
          "source": "src/Network-Libev.html#EvLoopPtr",
          "type": "type"
        },
        "index": {
          "hierarchy": "Network Libev",
          "module": "Network.Libev",
          "name": "EvLoopPtr",
          "package": "hlibev",
          "partial": "Ev Loop Ptr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hlibev/docs/Network-Libev.html#t:EvLoopPtr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Libev",
          "name": "EvTimer",
          "package": "hlibev",
          "source": "src/Network-Libev.html#EvTimer",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network Libev",
          "module": "Network.Libev",
          "name": "EvTimer",
          "package": "hlibev",
          "partial": "Ev Timer",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hlibev/docs/Network-Libev.html#t:EvTimer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Libev",
          "name": "EvTimerPtr",
          "package": "hlibev",
          "source": "src/Network-Libev.html#EvTimerPtr",
          "type": "type"
        },
        "index": {
          "hierarchy": "Network Libev",
          "module": "Network.Libev",
          "name": "EvTimerPtr",
          "package": "hlibev",
          "partial": "Ev Timer Ptr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hlibev/docs/Network-Libev.html#t:EvTimerPtr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLibev timestamp values are C doubles containing the (floating) number of\n seconds since Jan 1, 1970.\n\u003c/p\u003e",
          "module": "Network.Libev",
          "name": "EvTimestamp",
          "package": "hlibev",
          "source": "src/Network-Libev.html#EvTimestamp",
          "type": "type"
        },
        "index": {
          "description": "Libev timestamp values are doubles containing the floating number of seconds since Jan",
          "hierarchy": "Network Libev",
          "module": "Network.Libev",
          "name": "EvTimestamp",
          "package": "hlibev",
          "partial": "Ev Timestamp",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hlibev/docs/Network-Libev.html#t:EvTimestamp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn \u003ccode\u003e\u003ca\u003eIoCallback\u003c/a\u003e\u003c/code\u003e is called when a file descriptor becomes readable or\n writable. It takes a pointer to an \u003ccode\u003eev_loop\u003c/code\u003e structure, a pointer to an\n \u003ccode\u003eev_io\u003c/code\u003e structure, and an event mask.\n\u003c/p\u003e",
          "module": "Network.Libev",
          "name": "IoCallback",
          "package": "hlibev",
          "source": "src/Network-Libev.html#IoCallback",
          "type": "type"
        },
        "index": {
          "description": "An IoCallback is called when file descriptor becomes readable or writable It takes pointer to an ev loop structure pointer to an ev io structure and an event mask",
          "hierarchy": "Network Libev",
          "module": "Network.Libev",
          "name": "IoCallback",
          "package": "hlibev",
          "partial": "Io Callback",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hlibev/docs/Network-Libev.html#t:IoCallback"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eMutexCallback\u003c/a\u003e\u003c/code\u003e is called by \u003ccode\u003eev_set_loop_release_cb\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Network.Libev",
          "name": "MutexCallback",
          "package": "hlibev",
          "source": "src/Network-Libev.html#MutexCallback",
          "type": "type"
        },
        "index": {
          "description": "MutexCallback is called by ev set loop release cb",
          "hierarchy": "Network Libev",
          "module": "Network.Libev",
          "name": "MutexCallback",
          "package": "hlibev",
          "partial": "Mutex Callback",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hlibev/docs/Network-Libev.html#t:MutexCallback"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eTimerCallback\u003c/a\u003e\u003c/code\u003e is called when a timer expires. It takes a pointer to an\n \u003ccode\u003eev_loop\u003c/code\u003e structure, a pointer to an \u003ccode\u003eev_timer\u003c/code\u003e structure, and an (unused?)\n event mask.\n\u003c/p\u003e",
          "module": "Network.Libev",
          "name": "TimerCallback",
          "package": "hlibev",
          "source": "src/Network-Libev.html#TimerCallback",
          "type": "type"
        },
        "index": {
          "description": "TimerCallback is called when timer expires It takes pointer to an ev loop structure pointer to an ev timer structure and an unused event mask",
          "hierarchy": "Network Libev",
          "module": "Network.Libev",
          "name": "TimerCallback",
          "package": "hlibev",
          "partial": "Timer Callback",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hlibev/docs/Network-Libev.html#t:TimerCallback"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalls \u003ccode\u003eaccept()\u003c/code\u003e and sets the socket non-blocking.\n\u003c/p\u003e",
          "module": "Network.Libev",
          "name": "c_accept",
          "package": "hlibev",
          "signature": "CInt -\u003e IO CInt",
          "source": "src/Network-Libev.html#c_accept",
          "type": "function"
        },
        "index": {
          "description": "Calls accept and sets the socket non-blocking",
          "hierarchy": "Network Libev",
          "module": "Network.Libev",
          "name": "c_accept",
          "normalized": "CInt-\u003eIO CInt",
          "package": "hlibev",
          "signature": "CInt-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hlibev/docs/Network-Libev.html#v:c_accept"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Libev",
          "name": "c_close",
          "package": "hlibev",
          "signature": "CInt -\u003e IO CInt",
          "source": "src/Network-Libev.html#c_close",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Libev",
          "module": "Network.Libev",
          "name": "c_close",
          "normalized": "CInt-\u003eIO CInt",
          "package": "hlibev",
          "signature": "CInt-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hlibev/docs/Network-Libev.html#v:c_close"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Libev",
          "name": "c_read",
          "package": "hlibev",
          "signature": "CInt -\u003e CString -\u003e CSize -\u003e IO CSize",
          "source": "src/Network-Libev.html#c_read",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Libev",
          "module": "Network.Libev",
          "name": "c_read",
          "normalized": "CInt-\u003eCString-\u003eCSize-\u003eIO CSize",
          "package": "hlibev",
          "signature": "CInt-\u003eCString-\u003eCSize-\u003eIO CSize",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hlibev/docs/Network-Libev.html#v:c_read"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Libev",
          "name": "c_setnonblocking",
          "package": "hlibev",
          "signature": "CInt -\u003e IO ()",
          "source": "src/Network-Libev.html#c_setnonblocking",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Libev",
          "module": "Network.Libev",
          "name": "c_setnonblocking",
          "normalized": "CInt-\u003eIO()",
          "package": "hlibev",
          "signature": "CInt-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hlibev/docs/Network-Libev.html#v:c_setnonblocking"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Libev",
          "name": "c_write",
          "package": "hlibev",
          "signature": "CInt -\u003e CString -\u003e CSize -\u003e IO CSize",
          "source": "src/Network-Libev.html#c_write",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Libev",
          "module": "Network.Libev",
          "name": "c_write",
          "normalized": "CInt-\u003eCString-\u003eCSize-\u003eIO CSize",
          "package": "hlibev",
          "signature": "CInt-\u003eCString-\u003eCSize-\u003eIO CSize",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hlibev/docs/Network-Libev.html#v:c_write"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Libev",
          "name": "evAsyncInit",
          "package": "hlibev",
          "signature": "EvAsyncPtr -\u003e FunPtr AsyncCallback -\u003e IO ()",
          "source": "src/Network-Libev.html#evAsyncInit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Libev",
          "module": "Network.Libev",
          "name": "evAsyncInit",
          "normalized": "EvAsyncPtr-\u003eFunPtr AsyncCallback-\u003eIO()",
          "package": "hlibev",
          "partial": "Async Init",
          "signature": "EvAsyncPtr-\u003eFunPtr AsyncCallback-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hlibev/docs/Network-Libev.html#v:evAsyncInit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Libev",
          "name": "evAsyncSend",
          "package": "hlibev",
          "signature": "EvLoopPtr -\u003e EvAsyncPtr -\u003e IO ()",
          "source": "src/Network-Libev.html#evAsyncSend",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Libev",
          "module": "Network.Libev",
          "name": "evAsyncSend",
          "normalized": "EvLoopPtr-\u003eEvAsyncPtr-\u003eIO()",
          "package": "hlibev",
          "partial": "Async Send",
          "signature": "EvLoopPtr-\u003eEvAsyncPtr-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hlibev/docs/Network-Libev.html#v:evAsyncSend"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Libev",
          "name": "evAsyncStart",
          "package": "hlibev",
          "signature": "EvLoopPtr -\u003e EvAsyncPtr -\u003e IO ()",
          "source": "src/Network-Libev.html#evAsyncStart",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Libev",
          "module": "Network.Libev",
          "name": "evAsyncStart",
          "normalized": "EvLoopPtr-\u003eEvAsyncPtr-\u003eIO()",
          "package": "hlibev",
          "partial": "Async Start",
          "signature": "EvLoopPtr-\u003eEvAsyncPtr-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hlibev/docs/Network-Libev.html#v:evAsyncStart"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Libev",
          "name": "evAsyncStop",
          "package": "hlibev",
          "signature": "EvLoopPtr -\u003e EvAsyncPtr -\u003e IO ()",
          "source": "src/Network-Libev.html#evAsyncStop",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Libev",
          "module": "Network.Libev",
          "name": "evAsyncStop",
          "normalized": "EvLoopPtr-\u003eEvAsyncPtr-\u003eIO()",
          "package": "hlibev",
          "partial": "Async Stop",
          "signature": "EvLoopPtr-\u003eEvAsyncPtr-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hlibev/docs/Network-Libev.html#v:evAsyncStop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Libev",
          "name": "evDefaultLoop",
          "package": "hlibev",
          "signature": "CInt -\u003e IO EvLoopPtr",
          "source": "src/Network-Libev.html#evDefaultLoop",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Libev",
          "module": "Network.Libev",
          "name": "evDefaultLoop",
          "normalized": "CInt-\u003eIO EvLoopPtr",
          "package": "hlibev",
          "partial": "Default Loop",
          "signature": "CInt-\u003eIO EvLoopPtr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hlibev/docs/Network-Libev.html#v:evDefaultLoop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Libev",
          "name": "evIoInit",
          "package": "hlibev",
          "signature": "EvIoPtr -\u003e FunPtr IoCallback -\u003e CInt -\u003e CEventType -\u003e IO ()",
          "source": "src/Network-Libev.html#evIoInit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Libev",
          "module": "Network.Libev",
          "name": "evIoInit",
          "normalized": "EvIoPtr-\u003eFunPtr IoCallback-\u003eCInt-\u003eCEventType-\u003eIO()",
          "package": "hlibev",
          "partial": "Io Init",
          "signature": "EvIoPtr-\u003eFunPtr IoCallback-\u003eCInt-\u003eCEventType-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hlibev/docs/Network-Libev.html#v:evIoInit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Libev",
          "name": "evIoStart",
          "package": "hlibev",
          "signature": "EvLoopPtr -\u003e EvIoPtr -\u003e IO ()",
          "source": "src/Network-Libev.html#evIoStart",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Libev",
          "module": "Network.Libev",
          "name": "evIoStart",
          "normalized": "EvLoopPtr-\u003eEvIoPtr-\u003eIO()",
          "package": "hlibev",
          "partial": "Io Start",
          "signature": "EvLoopPtr-\u003eEvIoPtr-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hlibev/docs/Network-Libev.html#v:evIoStart"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Libev",
          "name": "evIoStop",
          "package": "hlibev",
          "signature": "EvLoopPtr -\u003e EvIoPtr -\u003e IO ()",
          "source": "src/Network-Libev.html#evIoStop",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Libev",
          "module": "Network.Libev",
          "name": "evIoStop",
          "normalized": "EvLoopPtr-\u003eEvIoPtr-\u003eIO()",
          "package": "hlibev",
          "partial": "Io Stop",
          "signature": "EvLoopPtr-\u003eEvIoPtr-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hlibev/docs/Network-Libev.html#v:evIoStop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Libev",
          "name": "evLoop",
          "package": "hlibev",
          "signature": "EvLoopPtr -\u003e CInt -\u003e IO ()",
          "source": "src/Network-Libev.html#evLoop",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Libev",
          "module": "Network.Libev",
          "name": "evLoop",
          "normalized": "EvLoopPtr-\u003eCInt-\u003eIO()",
          "package": "hlibev",
          "partial": "Loop",
          "signature": "EvLoopPtr-\u003eCInt-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hlibev/docs/Network-Libev.html#v:evLoop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Libev",
          "name": "evLoopDestroy",
          "package": "hlibev",
          "signature": "EvLoopPtr -\u003e IO ()",
          "source": "src/Network-Libev.html#evLoopDestroy",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Libev",
          "module": "Network.Libev",
          "name": "evLoopDestroy",
          "normalized": "EvLoopPtr-\u003eIO()",
          "package": "hlibev",
          "partial": "Loop Destroy",
          "signature": "EvLoopPtr-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hlibev/docs/Network-Libev.html#v:evLoopDestroy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Libev",
          "name": "evLoopNew",
          "package": "hlibev",
          "signature": "CUInt -\u003e IO EvLoopPtr",
          "source": "src/Network-Libev.html#evLoopNew",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Libev",
          "module": "Network.Libev",
          "name": "evLoopNew",
          "normalized": "CUInt-\u003eIO EvLoopPtr",
          "package": "hlibev",
          "partial": "Loop New",
          "signature": "CUInt-\u003eIO EvLoopPtr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hlibev/docs/Network-Libev.html#v:evLoopNew"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFetch a the cached copy of the current time from a loop.\n\u003c/p\u003e",
          "module": "Network.Libev",
          "name": "evNow",
          "package": "hlibev",
          "signature": "EvLoopPtr -\u003e IO EvTimestamp",
          "source": "src/Network-Libev.html#evNow",
          "type": "function"
        },
        "index": {
          "description": "Fetch the cached copy of the current time from loop",
          "hierarchy": "Network Libev",
          "module": "Network.Libev",
          "name": "evNow",
          "normalized": "EvLoopPtr-\u003eIO EvTimestamp",
          "package": "hlibev",
          "partial": "Now",
          "signature": "EvLoopPtr-\u003eIO EvTimestamp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hlibev/docs/Network-Libev.html#v:evNow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the default set of \u003ccode\u003e\u003ca\u003eCEvFlagType\u003c/a\u003e\u003c/code\u003e flags\n\u003c/p\u003e",
          "module": "Network.Libev",
          "name": "evRecommendedBackends",
          "package": "hlibev",
          "signature": "IO CEvFlagType",
          "source": "src/Network-Libev.html#evRecommendedBackends",
          "type": "function"
        },
        "index": {
          "description": "Returns the default set of CEvFlagType flags",
          "hierarchy": "Network Libev",
          "module": "Network.Libev",
          "name": "evRecommendedBackends",
          "package": "hlibev",
          "partial": "Recommended Backends",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hlibev/docs/Network-Libev.html#v:evRecommendedBackends"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFetches the current time from the operating system. Usually \u003ccode\u003e\u003ca\u003eevNow\u003c/a\u003e\u003c/code\u003e is\n preferred since it avoids a context switch by returning a cached value.\n\u003c/p\u003e",
          "module": "Network.Libev",
          "name": "evTime",
          "package": "hlibev",
          "signature": "IO EvTimestamp",
          "source": "src/Network-Libev.html#evTime",
          "type": "function"
        },
        "index": {
          "description": "Fetches the current time from the operating system Usually evNow is preferred since it avoids context switch by returning cached value",
          "hierarchy": "Network Libev",
          "module": "Network.Libev",
          "name": "evTime",
          "package": "hlibev",
          "partial": "Time",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hlibev/docs/Network-Libev.html#v:evTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Libev",
          "name": "evTimerAgain",
          "package": "hlibev",
          "signature": "EvLoopPtr -\u003e EvTimerPtr -\u003e IO ()",
          "source": "src/Network-Libev.html#evTimerAgain",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Libev",
          "module": "Network.Libev",
          "name": "evTimerAgain",
          "normalized": "EvLoopPtr-\u003eEvTimerPtr-\u003eIO()",
          "package": "hlibev",
          "partial": "Timer Again",
          "signature": "EvLoopPtr-\u003eEvTimerPtr-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hlibev/docs/Network-Libev.html#v:evTimerAgain"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Libev",
          "name": "evTimerInit",
          "package": "hlibev",
          "signature": "EvTimerPtr -\u003e FunPtr TimerCallback -\u003e EvTimestamp -\u003e EvTimestamp -\u003e IO ()",
          "source": "src/Network-Libev.html#evTimerInit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Libev",
          "module": "Network.Libev",
          "name": "evTimerInit",
          "normalized": "EvTimerPtr-\u003eFunPtr TimerCallback-\u003eEvTimestamp-\u003eEvTimestamp-\u003eIO()",
          "package": "hlibev",
          "partial": "Timer Init",
          "signature": "EvTimerPtr-\u003eFunPtr TimerCallback-\u003eEvTimestamp-\u003eEvTimestamp-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hlibev/docs/Network-Libev.html#v:evTimerInit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Libev",
          "name": "evTimerRemaining",
          "package": "hlibev",
          "signature": "EvLoopPtr -\u003e EvTimerPtr -\u003e IO EvTimestamp",
          "source": "src/Network-Libev.html#evTimerRemaining",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Libev",
          "module": "Network.Libev",
          "name": "evTimerRemaining",
          "normalized": "EvLoopPtr-\u003eEvTimerPtr-\u003eIO EvTimestamp",
          "package": "hlibev",
          "partial": "Timer Remaining",
          "signature": "EvLoopPtr-\u003eEvTimerPtr-\u003eIO EvTimestamp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hlibev/docs/Network-Libev.html#v:evTimerRemaining"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Libev",
          "name": "evTimerSetRepeat",
          "package": "hlibev",
          "signature": "EvTimerPtr -\u003e Double -\u003e IO ()",
          "source": "src/Network-Libev.html#evTimerSetRepeat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Libev",
          "module": "Network.Libev",
          "name": "evTimerSetRepeat",
          "normalized": "EvTimerPtr-\u003eDouble-\u003eIO()",
          "package": "hlibev",
          "partial": "Timer Set Repeat",
          "signature": "EvTimerPtr-\u003eDouble-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hlibev/docs/Network-Libev.html#v:evTimerSetRepeat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Libev",
          "name": "evTimerStart",
          "package": "hlibev",
          "signature": "EvLoopPtr -\u003e EvTimerPtr -\u003e IO ()",
          "source": "src/Network-Libev.html#evTimerStart",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Libev",
          "module": "Network.Libev",
          "name": "evTimerStart",
          "normalized": "EvLoopPtr-\u003eEvTimerPtr-\u003eIO()",
          "package": "hlibev",
          "partial": "Timer Start",
          "signature": "EvLoopPtr-\u003eEvTimerPtr-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hlibev/docs/Network-Libev.html#v:evTimerStart"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Libev",
          "name": "evTimerStop",
          "package": "hlibev",
          "signature": "EvLoopPtr -\u003e EvTimerPtr -\u003e IO ()",
          "source": "src/Network-Libev.html#evTimerStop",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Libev",
          "module": "Network.Libev",
          "name": "evTimerStop",
          "normalized": "EvLoopPtr-\u003eEvTimerPtr-\u003eIO()",
          "package": "hlibev",
          "partial": "Timer Stop",
          "signature": "EvLoopPtr-\u003eEvTimerPtr-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hlibev/docs/Network-Libev.html#v:evTimerStop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Libev",
          "name": "evUnloop",
          "package": "hlibev",
          "signature": "EvLoopPtr -\u003e CInt -\u003e IO ()",
          "source": "src/Network-Libev.html#evUnloop",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Libev",
          "module": "Network.Libev",
          "name": "evUnloop",
          "normalized": "EvLoopPtr-\u003eCInt-\u003eIO()",
          "package": "hlibev",
          "partial": "Unloop",
          "signature": "EvLoopPtr-\u003eCInt-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hlibev/docs/Network-Libev.html#v:evUnloop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Libev",
          "name": "ev__iofdset",
          "package": "hlibev",
          "signature": "CEventType",
          "source": "src/Network-Libev.html#ev__iofdset",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Libev",
          "module": "Network.Libev",
          "name": "ev__iofdset",
          "package": "hlibev",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hlibev/docs/Network-Libev.html#v:ev__iofdset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Libev",
          "name": "ev_async",
          "package": "hlibev",
          "signature": "CEventType",
          "source": "src/Network-Libev.html#ev_async",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Libev",
          "module": "Network.Libev",
          "name": "ev_async",
          "package": "hlibev",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hlibev/docs/Network-Libev.html#v:ev_async"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Libev",
          "name": "ev_check",
          "package": "hlibev",
          "signature": "CEventType",
          "source": "src/Network-Libev.html#ev_check",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Libev",
          "module": "Network.Libev",
          "name": "ev_check",
          "package": "hlibev",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hlibev/docs/Network-Libev.html#v:ev_check"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Libev",
          "name": "ev_child",
          "package": "hlibev",
          "signature": "CEventType",
          "source": "src/Network-Libev.html#ev_child",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Libev",
          "module": "Network.Libev",
          "name": "ev_child",
          "package": "hlibev",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hlibev/docs/Network-Libev.html#v:ev_child"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Libev",
          "name": "ev_custom",
          "package": "hlibev",
          "signature": "CEventType",
          "source": "src/Network-Libev.html#ev_custom",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Libev",
          "module": "Network.Libev",
          "name": "ev_custom",
          "package": "hlibev",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hlibev/docs/Network-Libev.html#v:ev_custom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Libev",
          "name": "ev_embed",
          "package": "hlibev",
          "signature": "CEventType",
          "source": "src/Network-Libev.html#ev_embed",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Libev",
          "module": "Network.Libev",
          "name": "ev_embed",
          "package": "hlibev",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hlibev/docs/Network-Libev.html#v:ev_embed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Libev",
          "name": "ev_error",
          "package": "hlibev",
          "signature": "CEventType",
          "source": "src/Network-Libev.html#ev_error",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Libev",
          "module": "Network.Libev",
          "name": "ev_error",
          "package": "hlibev",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hlibev/docs/Network-Libev.html#v:ev_error"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Libev",
          "name": "ev_fork",
          "package": "hlibev",
          "signature": "CEventType",
          "source": "src/Network-Libev.html#ev_fork",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Libev",
          "module": "Network.Libev",
          "name": "ev_fork",
          "package": "hlibev",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hlibev/docs/Network-Libev.html#v:ev_fork"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eCEvFlagType\u003c/a\u003e\u003c/code\u003e is a bitfield used to pass flags into\n \u003ccode\u003e\u003ca\u003eevDefaultLoop\u003c/a\u003e\u003c/code\u003e. Values (\u003ccode\u003e\u003ca\u003eevflag_auto\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eevflag_noenv\u003c/a\u003e\u003c/code\u003e, etc.) are combined\n with bitwise or. TODO: replace with a newtype with a monoid instance\n\u003c/p\u003e",
          "module": "Network.Libev",
          "name": "ev_idle",
          "package": "hlibev",
          "signature": "CEventType",
          "source": "src/Network-Libev.html#ev_idle",
          "type": "function"
        },
        "index": {
          "description": "CEvFlagType is bitfield used to pass flags into evDefaultLoop Values evflag auto evflag noenv etc are combined with bitwise or TODO replace with newtype with monoid instance",
          "hierarchy": "Network Libev",
          "module": "Network.Libev",
          "name": "ev_idle",
          "package": "hlibev",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hlibev/docs/Network-Libev.html#v:ev_idle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Libev",
          "name": "ev_io",
          "package": "hlibev",
          "signature": "CEventType",
          "source": "src/Network-Libev.html#ev_io",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Libev",
          "module": "Network.Libev",
          "name": "ev_io",
          "package": "hlibev",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hlibev/docs/Network-Libev.html#v:ev_io"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Libev",
          "name": "ev_none",
          "package": "hlibev",
          "signature": "CEventType",
          "source": "src/Network-Libev.html#ev_none",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Libev",
          "module": "Network.Libev",
          "name": "ev_none",
          "package": "hlibev",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hlibev/docs/Network-Libev.html#v:ev_none"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Libev",
          "name": "ev_periodic",
          "package": "hlibev",
          "signature": "CEventType",
          "source": "src/Network-Libev.html#ev_periodic",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Libev",
          "module": "Network.Libev",
          "name": "ev_periodic",
          "package": "hlibev",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hlibev/docs/Network-Libev.html#v:ev_periodic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Libev",
          "name": "ev_prepare",
          "package": "hlibev",
          "signature": "CEventType",
          "source": "src/Network-Libev.html#ev_prepare",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Libev",
          "module": "Network.Libev",
          "name": "ev_prepare",
          "package": "hlibev",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hlibev/docs/Network-Libev.html#v:ev_prepare"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Libev",
          "name": "ev_read",
          "package": "hlibev",
          "signature": "CEventType",
          "source": "src/Network-Libev.html#ev_read",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Libev",
          "module": "Network.Libev",
          "name": "ev_read",
          "package": "hlibev",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hlibev/docs/Network-Libev.html#v:ev_read"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Libev",
          "name": "ev_signal",
          "package": "hlibev",
          "signature": "CEventType",
          "source": "src/Network-Libev.html#ev_signal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Libev",
          "module": "Network.Libev",
          "name": "ev_signal",
          "package": "hlibev",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hlibev/docs/Network-Libev.html#v:ev_signal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Libev",
          "name": "ev_stat",
          "package": "hlibev",
          "signature": "CEventType",
          "source": "src/Network-Libev.html#ev_stat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Libev",
          "module": "Network.Libev",
          "name": "ev_stat",
          "package": "hlibev",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hlibev/docs/Network-Libev.html#v:ev_stat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Libev",
          "name": "ev_timeout",
          "package": "hlibev",
          "signature": "CEventType",
          "source": "src/Network-Libev.html#ev_timeout",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Libev",
          "module": "Network.Libev",
          "name": "ev_timeout",
          "package": "hlibev",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hlibev/docs/Network-Libev.html#v:ev_timeout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Libev",
          "name": "ev_timer",
          "package": "hlibev",
          "signature": "CEventType",
          "source": "src/Network-Libev.html#ev_timer",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Libev",
          "module": "Network.Libev",
          "name": "ev_timer",
          "package": "hlibev",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hlibev/docs/Network-Libev.html#v:ev_timer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eeventmask, revents, events...\n\u003c/p\u003e",
          "module": "Network.Libev",
          "name": "ev_undef",
          "package": "hlibev",
          "signature": "CEventType",
          "source": "src/Network-Libev.html#ev_undef",
          "type": "function"
        },
        "index": {
          "description": "eventmask revents events",
          "hierarchy": "Network Libev",
          "module": "Network.Libev",
          "name": "ev_undef",
          "package": "hlibev",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hlibev/docs/Network-Libev.html#v:ev_undef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Libev",
          "name": "ev_write",
          "package": "hlibev",
          "signature": "CEventType",
          "source": "src/Network-Libev.html#ev_write",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Libev",
          "module": "Network.Libev",
          "name": "ev_write",
          "package": "hlibev",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hlibev/docs/Network-Libev.html#v:ev_write"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Libev",
          "name": "evbackend_all",
          "package": "hlibev",
          "signature": "CEvBackendFlagType",
          "source": "src/Network-Libev.html#evbackend_all",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Libev",
          "module": "Network.Libev",
          "name": "evbackend_all",
          "package": "hlibev",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hlibev/docs/Network-Libev.html#v:evbackend_all"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Libev",
          "name": "evbackend_devpoll",
          "package": "hlibev",
          "signature": "CEvBackendFlagType",
          "source": "src/Network-Libev.html#evbackend_devpoll",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Libev",
          "module": "Network.Libev",
          "name": "evbackend_devpoll",
          "package": "hlibev",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hlibev/docs/Network-Libev.html#v:evbackend_devpoll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Libev",
          "name": "evbackend_epoll",
          "package": "hlibev",
          "signature": "CEvBackendFlagType",
          "source": "src/Network-Libev.html#evbackend_epoll",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Libev",
          "module": "Network.Libev",
          "name": "evbackend_epoll",
          "package": "hlibev",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hlibev/docs/Network-Libev.html#v:evbackend_epoll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Libev",
          "name": "evbackend_kqueue",
          "package": "hlibev",
          "signature": "CEvBackendFlagType",
          "source": "src/Network-Libev.html#evbackend_kqueue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Libev",
          "module": "Network.Libev",
          "name": "evbackend_kqueue",
          "package": "hlibev",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hlibev/docs/Network-Libev.html#v:evbackend_kqueue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Libev",
          "name": "evbackend_poll",
          "package": "hlibev",
          "signature": "CEvBackendFlagType",
          "source": "src/Network-Libev.html#evbackend_poll",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Libev",
          "module": "Network.Libev",
          "name": "evbackend_poll",
          "package": "hlibev",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hlibev/docs/Network-Libev.html#v:evbackend_poll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Libev",
          "name": "evbackend_port",
          "package": "hlibev",
          "signature": "CEvBackendFlagType",
          "source": "src/Network-Libev.html#evbackend_port",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Libev",
          "module": "Network.Libev",
          "name": "evbackend_port",
          "package": "hlibev",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hlibev/docs/Network-Libev.html#v:evbackend_port"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Libev",
          "name": "evbackend_select",
          "package": "hlibev",
          "signature": "CEvBackendFlagType",
          "source": "src/Network-Libev.html#evbackend_select",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Libev",
          "module": "Network.Libev",
          "name": "evbackend_select",
          "package": "hlibev",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hlibev/docs/Network-Libev.html#v:evbackend_select"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Libev",
          "name": "evflag_auto",
          "package": "hlibev",
          "signature": "CEvFlagType",
          "source": "src/Network-Libev.html#evflag_auto",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Libev",
          "module": "Network.Libev",
          "name": "evflag_auto",
          "package": "hlibev",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hlibev/docs/Network-Libev.html#v:evflag_auto"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Libev",
          "name": "evflag_forkcheck",
          "package": "hlibev",
          "signature": "CEvFlagType",
          "source": "src/Network-Libev.html#evflag_forkcheck",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Libev",
          "module": "Network.Libev",
          "name": "evflag_forkcheck",
          "package": "hlibev",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hlibev/docs/Network-Libev.html#v:evflag_forkcheck"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Libev",
          "name": "evflag_noenv",
          "package": "hlibev",
          "signature": "CEvFlagType",
          "source": "src/Network-Libev.html#evflag_noenv",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Libev",
          "module": "Network.Libev",
          "name": "evflag_noenv",
          "package": "hlibev",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hlibev/docs/Network-Libev.html#v:evflag_noenv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Libev",
          "name": "evflag_noinotify",
          "package": "hlibev",
          "signature": "CEvFlagType",
          "source": "src/Network-Libev.html#evflag_noinotify",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Libev",
          "module": "Network.Libev",
          "name": "evflag_noinotify",
          "package": "hlibev",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hlibev/docs/Network-Libev.html#v:evflag_noinotify"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Libev",
          "name": "evflag_nosigfd",
          "package": "hlibev",
          "signature": "CEvFlagType",
          "source": "src/Network-Libev.html#evflag_nosigfd",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Libev",
          "module": "Network.Libev",
          "name": "evflag_nosigfd",
          "package": "hlibev",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hlibev/docs/Network-Libev.html#v:evflag_nosigfd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Libev",
          "name": "evflag_signalfd",
          "package": "hlibev",
          "signature": "CEvFlagType",
          "source": "src/Network-Libev.html#evflag_signalfd",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Libev",
          "module": "Network.Libev",
          "name": "evflag_signalfd",
          "package": "hlibev",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hlibev/docs/Network-Libev.html#v:evflag_signalfd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Libev",
          "name": "evloop_nonblock",
          "package": "hlibev",
          "signature": "CEvLoopFlagType",
          "source": "src/Network-Libev.html#evloop_nonblock",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Libev",
          "module": "Network.Libev",
          "name": "evloop_nonblock",
          "package": "hlibev",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hlibev/docs/Network-Libev.html#v:evloop_nonblock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Libev",
          "name": "evloop_oneshot",
          "package": "hlibev",
          "signature": "CEvLoopFlagType",
          "source": "src/Network-Libev.html#evloop_oneshot",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Libev",
          "module": "Network.Libev",
          "name": "evloop_oneshot",
          "package": "hlibev",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hlibev/docs/Network-Libev.html#v:evloop_oneshot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Libev",
          "name": "evunloop_all",
          "package": "hlibev",
          "signature": "CEvUnloopFlagType",
          "source": "src/Network-Libev.html#evunloop_all",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Libev",
          "module": "Network.Libev",
          "name": "evunloop_all",
          "package": "hlibev",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hlibev/docs/Network-Libev.html#v:evunloop_all"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Libev",
          "name": "evunloop_cancel",
          "package": "hlibev",
          "signature": "CEvUnloopFlagType",
          "source": "src/Network-Libev.html#evunloop_cancel",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Libev",
          "module": "Network.Libev",
          "name": "evunloop_cancel",
          "package": "hlibev",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hlibev/docs/Network-Libev.html#v:evunloop_cancel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Libev",
          "name": "evunloop_one",
          "package": "hlibev",
          "signature": "CEvUnloopFlagType",
          "source": "src/Network-Libev.html#evunloop_one",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Libev",
          "module": "Network.Libev",
          "name": "evunloop_one",
          "package": "hlibev",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hlibev/docs/Network-Libev.html#v:evunloop_one"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Libev",
          "name": "freeAsyncCallback",
          "package": "hlibev",
          "signature": "FunPtr AsyncCallback -\u003e IO ()",
          "source": "src/Network-Libev.html#freeAsyncCallback",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Libev",
          "module": "Network.Libev",
          "name": "freeAsyncCallback",
          "normalized": "FunPtr AsyncCallback-\u003eIO()",
          "package": "hlibev",
          "partial": "Async Callback",
          "signature": "FunPtr AsyncCallback-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hlibev/docs/Network-Libev.html#v:freeAsyncCallback"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003efree() an \u003ccode\u003eEvAsync\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Network.Libev",
          "name": "freeEvAsync",
          "package": "hlibev",
          "signature": "EvAsyncPtr -\u003e IO ()",
          "source": "src/Network-Libev.html#freeEvAsync",
          "type": "function"
        },
        "index": {
          "description": "free an EvAsync",
          "hierarchy": "Network Libev",
          "module": "Network.Libev",
          "name": "freeEvAsync",
          "normalized": "EvAsyncPtr-\u003eIO()",
          "package": "hlibev",
          "partial": "Ev Async",
          "signature": "EvAsyncPtr-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hlibev/docs/Network-Libev.html#v:freeEvAsync"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003efree() an \u003ccode\u003e\u003ca\u003eEvIoPtr\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Network.Libev",
          "name": "freeEvIo",
          "package": "hlibev",
          "signature": "EvIoPtr -\u003e IO ()",
          "source": "src/Network-Libev.html#freeEvIo",
          "type": "function"
        },
        "index": {
          "description": "free an EvIoPtr",
          "hierarchy": "Network Libev",
          "module": "Network.Libev",
          "name": "freeEvIo",
          "normalized": "EvIoPtr-\u003eIO()",
          "package": "hlibev",
          "partial": "Ev Io",
          "signature": "EvIoPtr-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hlibev/docs/Network-Libev.html#v:freeEvIo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003efree() an \u003ccode\u003e\u003ca\u003eEvTimer\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Network.Libev",
          "name": "freeEvTimer",
          "package": "hlibev",
          "signature": "EvTimerPtr -\u003e IO ()",
          "source": "src/Network-Libev.html#freeEvTimer",
          "type": "function"
        },
        "index": {
          "description": "free an EvTimer",
          "hierarchy": "Network Libev",
          "module": "Network.Libev",
          "name": "freeEvTimer",
          "normalized": "EvTimerPtr-\u003eIO()",
          "package": "hlibev",
          "partial": "Ev Timer",
          "signature": "EvTimerPtr-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hlibev/docs/Network-Libev.html#v:freeEvTimer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Libev",
          "name": "freeIoCallback",
          "package": "hlibev",
          "signature": "FunPtr IoCallback -\u003e IO ()",
          "source": "src/Network-Libev.html#freeIoCallback",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Libev",
          "module": "Network.Libev",
          "name": "freeIoCallback",
          "normalized": "FunPtr IoCallback-\u003eIO()",
          "package": "hlibev",
          "partial": "Io Callback",
          "signature": "FunPtr IoCallback-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hlibev/docs/Network-Libev.html#v:freeIoCallback"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Libev",
          "name": "freeMutexCallback",
          "package": "hlibev",
          "signature": "FunPtr MutexCallback -\u003e IO ()",
          "source": "src/Network-Libev.html#freeMutexCallback",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Libev",
          "module": "Network.Libev",
          "name": "freeMutexCallback",
          "normalized": "FunPtr MutexCallback-\u003eIO()",
          "package": "hlibev",
          "partial": "Mutex Callback",
          "signature": "FunPtr MutexCallback-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hlibev/docs/Network-Libev.html#v:freeMutexCallback"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Libev",
          "name": "freeTimerCallback",
          "package": "hlibev",
          "signature": "FunPtr TimerCallback -\u003e IO ()",
          "source": "src/Network-Libev.html#freeTimerCallback",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Libev",
          "module": "Network.Libev",
          "name": "freeTimerCallback",
          "normalized": "FunPtr TimerCallback-\u003eIO()",
          "package": "hlibev",
          "partial": "Timer Callback",
          "signature": "FunPtr TimerCallback-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hlibev/docs/Network-Libev.html#v:freeTimerCallback"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrap up an \u003ccode\u003e\u003ca\u003eAsyncCallback\u003c/a\u003e\u003c/code\u003e so it can be delivered into C-land. This\n resource is not garbage-collected, you are responsible for freeing it with\n \u003ccode\u003e\u003ca\u003efreeAsyncCallback\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.Libev",
          "name": "mkAsyncCallback",
          "package": "hlibev",
          "signature": "AsyncCallback -\u003e IO (FunPtr AsyncCallback)",
          "source": "src/Network-Libev.html#mkAsyncCallback",
          "type": "function"
        },
        "index": {
          "description": "Wrap up an AsyncCallback so it can be delivered into C-land This resource is not garbage-collected you are responsible for freeing it with freeAsyncCallback",
          "hierarchy": "Network Libev",
          "module": "Network.Libev",
          "name": "mkAsyncCallback",
          "normalized": "AsyncCallback-\u003eIO(FunPtr AsyncCallback)",
          "package": "hlibev",
          "partial": "Async Callback",
          "signature": "AsyncCallback-\u003eIO(FunPtr AsyncCallback)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hlibev/docs/Network-Libev.html#v:mkAsyncCallback"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMakes a new \u003ccode\u003eev_async\u003c/code\u003e struct using \u003ccode\u003e\u003ca\u003emalloc\u003c/a\u003e\u003c/code\u003e. You are responsible for\n freeing it with \u003ccode\u003e\u003ca\u003efreeEvAsync\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.Libev",
          "name": "mkEvAsync",
          "package": "hlibev",
          "signature": "IO EvAsyncPtr",
          "source": "src/Network-Libev.html#mkEvAsync",
          "type": "function"
        },
        "index": {
          "description": "Makes new ev async struct using malloc You are responsible for freeing it with freeEvAsync",
          "hierarchy": "Network Libev",
          "module": "Network.Libev",
          "name": "mkEvAsync",
          "package": "hlibev",
          "partial": "Ev Async",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hlibev/docs/Network-Libev.html#v:mkEvAsync"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMakes a new \u003ccode\u003eev_io\u003c/code\u003e struct using \u003ccode\u003e\u003ca\u003emalloc\u003c/a\u003e\u003c/code\u003e. You are responsible for freeing\n it with \u003ccode\u003e\u003ca\u003efreeEvIo\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.Libev",
          "name": "mkEvIo",
          "package": "hlibev",
          "signature": "IO EvIoPtr",
          "source": "src/Network-Libev.html#mkEvIo",
          "type": "function"
        },
        "index": {
          "description": "Makes new ev io struct using malloc You are responsible for freeing it with freeEvIo",
          "hierarchy": "Network Libev",
          "module": "Network.Libev",
          "name": "mkEvIo",
          "package": "hlibev",
          "partial": "Ev Io",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hlibev/docs/Network-Libev.html#v:mkEvIo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMakes a new \u003ccode\u003eev_timer\u003c/code\u003e struct using \u003ccode\u003e\u003ca\u003emalloc\u003c/a\u003e\u003c/code\u003e. You are responsible for freeing\n it with \u003ccode\u003e\u003ca\u003efreeEvTimer\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.Libev",
          "name": "mkEvTimer",
          "package": "hlibev",
          "signature": "IO EvTimerPtr",
          "source": "src/Network-Libev.html#mkEvTimer",
          "type": "function"
        },
        "index": {
          "description": "Makes new ev timer struct using malloc You are responsible for freeing it with freeEvTimer",
          "hierarchy": "Network Libev",
          "module": "Network.Libev",
          "name": "mkEvTimer",
          "package": "hlibev",
          "partial": "Ev Timer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hlibev/docs/Network-Libev.html#v:mkEvTimer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrap up an \u003ccode\u003e\u003ca\u003eIoCallback\u003c/a\u003e\u003c/code\u003e so it can be delivered into C-land. This resource\n is not garbage-collected, you are responsible for freeing it with\n \u003ccode\u003e\u003ca\u003efreeIoCallback\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.Libev",
          "name": "mkIoCallback",
          "package": "hlibev",
          "signature": "IoCallback -\u003e IO (FunPtr IoCallback)",
          "source": "src/Network-Libev.html#mkIoCallback",
          "type": "function"
        },
        "index": {
          "description": "Wrap up an IoCallback so it can be delivered into C-land This resource is not garbage-collected you are responsible for freeing it with freeIoCallback",
          "hierarchy": "Network Libev",
          "module": "Network.Libev",
          "name": "mkIoCallback",
          "normalized": "IoCallback-\u003eIO(FunPtr IoCallback)",
          "package": "hlibev",
          "partial": "Io Callback",
          "signature": "IoCallback-\u003eIO(FunPtr IoCallback)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hlibev/docs/Network-Libev.html#v:mkIoCallback"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrap up a \u003ccode\u003e\u003ca\u003eTimerCallback\u003c/a\u003e\u003c/code\u003e so it can be delivered into C-land. This\n resource is not garbage-collected, you are responsible for freeing it with\n \u003ccode\u003e\u003ca\u003efreeTimerCallback\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.Libev",
          "name": "mkTimerCallback",
          "package": "hlibev",
          "signature": "TimerCallback -\u003e IO (FunPtr TimerCallback)",
          "source": "src/Network-Libev.html#mkTimerCallback",
          "type": "function"
        },
        "index": {
          "description": "Wrap up TimerCallback so it can be delivered into C-land This resource is not garbage-collected you are responsible for freeing it with freeTimerCallback",
          "hierarchy": "Network Libev",
          "module": "Network.Libev",
          "name": "mkTimerCallback",
          "normalized": "TimerCallback-\u003eIO(FunPtr TimerCallback)",
          "package": "hlibev",
          "partial": "Timer Callback",
          "signature": "TimerCallback-\u003eIO(FunPtr TimerCallback)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hlibev/docs/Network-Libev.html#v:mkTimerCallback"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet up the given loop for mutex locking from haskell-land -- if you want\n to touch the loop from other Haskell threads, you'll need to do this. The\n two FunPtr objects returned need to be explicitly freed with\n \u003ccode\u003e\u003ca\u003efreeMutexCallback\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eIMPORTANT: if you want multithreaded access to an \u003ccode\u003e\u003ca\u003eEvLoopPtr\u003c/a\u003e\u003c/code\u003e, you'll have\n to acquire the \u003ccode\u003e\u003ca\u003eMVar\u003c/a\u003e\u003c/code\u003e returned here (using \u003ccode\u003e\u003ca\u003ewithMVar\u003c/a\u003e\u003c/code\u003e) whenever you call any\n of the \u003ccode\u003eev\u003c/code\u003e functions. Very bad C-land crash/bang/boom could otherwise\n result.\n\u003c/p\u003e\u003cp\u003eALSO IMPORTANT: any changes you make to an \u003ccode\u003e\u003ca\u003eEvLoopPtr\u003c/a\u003e\u003c/code\u003e from another thread\n while the event loop thread is blocked inside \u003ccode\u003eev_loop()\u003c/code\u003e will NOT take\n effect until the the event loop thread unblocks. You'll need to set up an\n \u003ccode\u003eev_async\u003c/code\u003e watcher in order to wake up the event loop thread.\n\u003c/p\u003e",
          "module": "Network.Libev",
          "name": "setupLockingForLoop",
          "package": "hlibev",
          "signature": "EvLoopPtr -\u003e IO (FunPtr MutexCallback, FunPtr MutexCallback, MVar ())",
          "source": "src/Network-Libev.html#setupLockingForLoop",
          "type": "function"
        },
        "index": {
          "description": "Set up the given loop for mutex locking from haskell-land if you want to touch the loop from other Haskell threads you ll need to do this The two FunPtr objects returned need to be explicitly freed with freeMutexCallback IMPORTANT if you want multithreaded access to an EvLoopPtr you ll have to acquire the MVar returned here using withMVar whenever you call any of the ev functions Very bad C-land crash bang boom could otherwise result ALSO IMPORTANT any changes you make to an EvLoopPtr from another thread while the event loop thread is blocked inside ev loop will NOT take effect until the the event loop thread unblocks You ll need to set up an ev async watcher in order to wake up the event loop thread",
          "hierarchy": "Network Libev",
          "module": "Network.Libev",
          "name": "setupLockingForLoop",
          "normalized": "EvLoopPtr-\u003eIO(FunPtr MutexCallback,FunPtr MutexCallback,MVar())",
          "package": "hlibev",
          "partial": "Locking For Loop",
          "signature": "EvLoopPtr-\u003eIO(FunPtr MutexCallback,FunPtr MutexCallback,MVar())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hlibev/docs/Network-Libev.html#v:setupLockingForLoop"
      }
    }
  ]
]