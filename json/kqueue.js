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
        "word": "kqueue"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module contains higher-level abstraction for monitoring file\n system changes, built on top of the bindings from \u003ca\u003eSystem.KQueue\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.KQueue.HighLevel",
          "name": "HighLevel",
          "package": "kqueue",
          "source": "src/System-KQueue-HighLevel.html",
          "type": "module"
        },
        "index": {
          "description": "This module contains higher-level abstraction for monitoring file system changes built on top of the bindings from System.KQueue",
          "hierarchy": "System KQueue HighLevel",
          "module": "System.KQueue.HighLevel",
          "name": "HighLevel",
          "package": "kqueue",
          "partial": "High Level",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/kqueue/docs/System-KQueue-HighLevel.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type of file change that occurred.\n\u003c/p\u003e",
          "module": "System.KQueue.HighLevel",
          "name": "EventType",
          "package": "kqueue",
          "source": "src/System-KQueue-HighLevel.html#EventType",
          "type": "data"
        },
        "index": {
          "description": "The type of file change that occurred",
          "hierarchy": "System KQueue HighLevel",
          "module": "System.KQueue.HighLevel",
          "name": "EventType",
          "package": "kqueue",
          "partial": "Event Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/kqueue/docs/System-KQueue-HighLevel.html#t:EventType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn identifier for the watcher of a file. Allows you to stop\n watching it later.\n\u003c/p\u003e",
          "module": "System.KQueue.HighLevel",
          "name": "Watcher",
          "package": "kqueue",
          "source": "src/System-KQueue-HighLevel.html#Watcher",
          "type": "data"
        },
        "index": {
          "description": "An identifier for the watcher of file Allows you to stop watching it later",
          "hierarchy": "System KQueue HighLevel",
          "module": "System.KQueue.HighLevel",
          "name": "Watcher",
          "package": "kqueue",
          "partial": "Watcher",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/kqueue/docs/System-KQueue-HighLevel.html#t:Watcher"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.KQueue.HighLevel",
          "name": "Changed",
          "package": "kqueue",
          "signature": "Changed",
          "source": "src/System-KQueue-HighLevel.html#EventType",
          "type": "function"
        },
        "index": {
          "hierarchy": "System KQueue HighLevel",
          "module": "System.KQueue.HighLevel",
          "name": "Changed",
          "package": "kqueue",
          "partial": "Changed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/kqueue/docs/System-KQueue-HighLevel.html#v:Changed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.KQueue.HighLevel",
          "name": "Created",
          "package": "kqueue",
          "signature": "Created",
          "source": "src/System-KQueue-HighLevel.html#EventType",
          "type": "function"
        },
        "index": {
          "hierarchy": "System KQueue HighLevel",
          "module": "System.KQueue.HighLevel",
          "name": "Created",
          "package": "kqueue",
          "partial": "Created",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/kqueue/docs/System-KQueue-HighLevel.html#v:Created"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.KQueue.HighLevel",
          "name": "Deleted",
          "package": "kqueue",
          "signature": "Deleted",
          "source": "src/System-KQueue-HighLevel.html#EventType",
          "type": "function"
        },
        "index": {
          "hierarchy": "System KQueue HighLevel",
          "module": "System.KQueue.HighLevel",
          "name": "Deleted",
          "package": "kqueue",
          "partial": "Deleted",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/kqueue/docs/System-KQueue-HighLevel.html#v:Deleted"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStop a watcher from watching.\n\u003c/p\u003e",
          "module": "System.KQueue.HighLevel",
          "name": "stopWatching",
          "package": "kqueue",
          "signature": "Watcher -\u003e IO ()",
          "source": "src/System-KQueue-HighLevel.html#stopWatching",
          "type": "function"
        },
        "index": {
          "description": "Stop watcher from watching",
          "hierarchy": "System KQueue HighLevel",
          "module": "System.KQueue.HighLevel",
          "name": "stopWatching",
          "normalized": "Watcher-\u003eIO()",
          "package": "kqueue",
          "partial": "Watching",
          "signature": "Watcher-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/kqueue/docs/System-KQueue-HighLevel.html#v:stopWatching"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWatch a file for changes. The file doesn't have to exist, but the\n directory it is in, does. Returns immediately. You can stop\n watching by passing the \u003ccode\u003e\u003ca\u003eWatcher\u003c/a\u003e\u003c/code\u003e to \u003ccode\u003e\u003ca\u003estopWatching\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.KQueue.HighLevel",
          "name": "watchFile",
          "package": "kqueue",
          "signature": "FilePath -\u003e (EventType -\u003e IO ()) -\u003e IO Watcher",
          "source": "src/System-KQueue-HighLevel.html#watchFile",
          "type": "function"
        },
        "index": {
          "description": "Watch file for changes The file doesn have to exist but the directory it is in does Returns immediately You can stop watching by passing the Watcher to stopWatching",
          "hierarchy": "System KQueue HighLevel",
          "module": "System.KQueue.HighLevel",
          "name": "watchFile",
          "normalized": "FilePath-\u003e(EventType-\u003eIO())-\u003eIO Watcher",
          "package": "kqueue",
          "partial": "File",
          "signature": "FilePath-\u003e(EventType-\u003eIO())-\u003eIO Watcher",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/kqueue/docs/System-KQueue-HighLevel.html#v:watchFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module contains a low-level binding to the kqueue interface.\n It stays close to the C API, changing the types to more native\n Haskell types, but not significantly changing it.\n See the kqueue man page or the examples in \u003ccode\u003eexamples/\u003c/code\u003e for usage\n information.\n For a higher-level binding, see \u003ca\u003eSystem.KQueue.HighLevel\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.KQueue",
          "name": "KQueue",
          "package": "kqueue",
          "source": "src/System-KQueue.html",
          "type": "module"
        },
        "index": {
          "description": "This module contains low-level binding to the kqueue interface It stays close to the API changing the types to more native Haskell types but not significantly changing it See the kqueue man page or the examples in examples for usage information For higher-level binding see System.KQueue.HighLevel",
          "hierarchy": "System KQueue",
          "module": "System.KQueue",
          "name": "KQueue",
          "package": "kqueue",
          "partial": "KQueue",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/kqueue/docs/System-KQueue.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe filter specific flags.\n\u003c/p\u003e",
          "module": "System.KQueue",
          "name": "FFlag",
          "package": "kqueue",
          "source": "src/System-KQueue.html#FFlag",
          "type": "data"
        },
        "index": {
          "description": "The filter specific flags",
          "hierarchy": "System KQueue",
          "module": "System.KQueue",
          "name": "FFlag",
          "package": "kqueue",
          "partial": "FFlag",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/kqueue/docs/System-KQueue.html#t:FFlag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe types of kernel events.\n\u003c/p\u003e",
          "module": "System.KQueue",
          "name": "Filter",
          "package": "kqueue",
          "source": "src/System-KQueue.html#Filter",
          "type": "data"
        },
        "index": {
          "description": "The types of kernel events",
          "hierarchy": "System KQueue",
          "module": "System.KQueue",
          "name": "Filter",
          "package": "kqueue",
          "partial": "Filter",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/kqueue/docs/System-KQueue.html#t:Filter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe actions to perform on the event.\n\u003c/p\u003e",
          "module": "System.KQueue",
          "name": "Flag",
          "package": "kqueue",
          "source": "src/System-KQueue.html#Flag",
          "type": "data"
        },
        "index": {
          "description": "The actions to perform on the event",
          "hierarchy": "System KQueue",
          "module": "System.KQueue",
          "name": "Flag",
          "package": "kqueue",
          "partial": "Flag",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/kqueue/docs/System-KQueue.html#t:Flag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA kernel event.\n\u003c/p\u003e",
          "module": "System.KQueue",
          "name": "KEvent",
          "package": "kqueue",
          "source": "src/System-KQueue.html#KEvent",
          "type": "data"
        },
        "index": {
          "description": "kernel event",
          "hierarchy": "System KQueue",
          "module": "System.KQueue",
          "name": "KEvent",
          "package": "kqueue",
          "partial": "KEvent",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/kqueue/docs/System-KQueue.html#t:KEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA kernel event queue.\n\u003c/p\u003e",
          "module": "System.KQueue",
          "name": "KQueue",
          "package": "kqueue",
          "source": "src/System-KQueue.html#KQueue",
          "type": "data"
        },
        "index": {
          "description": "kernel event queue",
          "hierarchy": "System KQueue",
          "module": "System.KQueue",
          "name": "KQueue",
          "package": "kqueue",
          "partial": "KQueue",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/kqueue/docs/System-KQueue.html#t:KQueue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.KQueue",
          "name": "KQueueException",
          "package": "kqueue",
          "source": "src/System-KQueue.html#KQueueException",
          "type": "data"
        },
        "index": {
          "hierarchy": "System KQueue",
          "module": "System.KQueue",
          "name": "KQueueException",
          "package": "kqueue",
          "partial": "KQueue Exception",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/kqueue/docs/System-KQueue.html#t:KQueueException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.KQueue",
          "name": "EvAdd",
          "package": "kqueue",
          "signature": "EvAdd",
          "source": "src/System-KQueue.html#Flag",
          "type": "function"
        },
        "index": {
          "hierarchy": "System KQueue",
          "module": "System.KQueue",
          "name": "EvAdd",
          "package": "kqueue",
          "partial": "Ev Add",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/kqueue/docs/System-KQueue.html#v:EvAdd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.KQueue",
          "name": "EvClear",
          "package": "kqueue",
          "signature": "EvClear",
          "source": "src/System-KQueue.html#Flag",
          "type": "function"
        },
        "index": {
          "hierarchy": "System KQueue",
          "module": "System.KQueue",
          "name": "EvClear",
          "package": "kqueue",
          "partial": "Ev Clear",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/kqueue/docs/System-KQueue.html#v:EvClear"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.KQueue",
          "name": "EvDelete",
          "package": "kqueue",
          "signature": "EvDelete",
          "source": "src/System-KQueue.html#Flag",
          "type": "function"
        },
        "index": {
          "hierarchy": "System KQueue",
          "module": "System.KQueue",
          "name": "EvDelete",
          "package": "kqueue",
          "partial": "Ev Delete",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/kqueue/docs/System-KQueue.html#v:EvDelete"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.KQueue",
          "name": "EvDisable",
          "package": "kqueue",
          "signature": "EvDisable",
          "source": "src/System-KQueue.html#Flag",
          "type": "function"
        },
        "index": {
          "hierarchy": "System KQueue",
          "module": "System.KQueue",
          "name": "EvDisable",
          "package": "kqueue",
          "partial": "Ev Disable",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/kqueue/docs/System-KQueue.html#v:EvDisable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.KQueue",
          "name": "EvEnable",
          "package": "kqueue",
          "signature": "EvEnable",
          "source": "src/System-KQueue.html#Flag",
          "type": "function"
        },
        "index": {
          "hierarchy": "System KQueue",
          "module": "System.KQueue",
          "name": "EvEnable",
          "package": "kqueue",
          "partial": "Ev Enable",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/kqueue/docs/System-KQueue.html#v:EvEnable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.KQueue",
          "name": "EvEof",
          "package": "kqueue",
          "signature": "EvEof",
          "source": "src/System-KQueue.html#Flag",
          "type": "function"
        },
        "index": {
          "hierarchy": "System KQueue",
          "module": "System.KQueue",
          "name": "EvEof",
          "package": "kqueue",
          "partial": "Ev Eof",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/kqueue/docs/System-KQueue.html#v:EvEof"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.KQueue",
          "name": "EvError",
          "package": "kqueue",
          "signature": "EvError",
          "source": "src/System-KQueue.html#Flag",
          "type": "function"
        },
        "index": {
          "hierarchy": "System KQueue",
          "module": "System.KQueue",
          "name": "EvError",
          "package": "kqueue",
          "partial": "Ev Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/kqueue/docs/System-KQueue.html#v:EvError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.KQueue",
          "name": "EvOneshot",
          "package": "kqueue",
          "signature": "EvOneshot",
          "source": "src/System-KQueue.html#Flag",
          "type": "function"
        },
        "index": {
          "hierarchy": "System KQueue",
          "module": "System.KQueue",
          "name": "EvOneshot",
          "package": "kqueue",
          "partial": "Ev Oneshot",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/kqueue/docs/System-KQueue.html#v:EvOneshot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.KQueue",
          "name": "EvReceipt",
          "package": "kqueue",
          "signature": "EvReceipt",
          "source": "src/System-KQueue.html#Flag",
          "type": "function"
        },
        "index": {
          "hierarchy": "System KQueue",
          "module": "System.KQueue",
          "name": "EvReceipt",
          "package": "kqueue",
          "partial": "Ev Receipt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/kqueue/docs/System-KQueue.html#v:EvReceipt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.KQueue",
          "name": "EvfiltAio",
          "package": "kqueue",
          "signature": "EvfiltAio",
          "source": "src/System-KQueue.html#Filter",
          "type": "function"
        },
        "index": {
          "hierarchy": "System KQueue",
          "module": "System.KQueue",
          "name": "EvfiltAio",
          "package": "kqueue",
          "partial": "Evfilt Aio",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/kqueue/docs/System-KQueue.html#v:EvfiltAio"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.KQueue",
          "name": "EvfiltProc",
          "package": "kqueue",
          "signature": "EvfiltProc",
          "source": "src/System-KQueue.html#Filter",
          "type": "function"
        },
        "index": {
          "hierarchy": "System KQueue",
          "module": "System.KQueue",
          "name": "EvfiltProc",
          "package": "kqueue",
          "partial": "Evfilt Proc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/kqueue/docs/System-KQueue.html#v:EvfiltProc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.KQueue",
          "name": "EvfiltRead",
          "package": "kqueue",
          "signature": "EvfiltRead",
          "source": "src/System-KQueue.html#Filter",
          "type": "function"
        },
        "index": {
          "hierarchy": "System KQueue",
          "module": "System.KQueue",
          "name": "EvfiltRead",
          "package": "kqueue",
          "partial": "Evfilt Read",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/kqueue/docs/System-KQueue.html#v:EvfiltRead"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.KQueue",
          "name": "EvfiltSignal",
          "package": "kqueue",
          "signature": "EvfiltSignal",
          "source": "src/System-KQueue.html#Filter",
          "type": "function"
        },
        "index": {
          "hierarchy": "System KQueue",
          "module": "System.KQueue",
          "name": "EvfiltSignal",
          "package": "kqueue",
          "partial": "Evfilt Signal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/kqueue/docs/System-KQueue.html#v:EvfiltSignal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.KQueue",
          "name": "EvfiltTimer",
          "package": "kqueue",
          "signature": "EvfiltTimer",
          "source": "src/System-KQueue.html#Filter",
          "type": "function"
        },
        "index": {
          "hierarchy": "System KQueue",
          "module": "System.KQueue",
          "name": "EvfiltTimer",
          "package": "kqueue",
          "partial": "Evfilt Timer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/kqueue/docs/System-KQueue.html#v:EvfiltTimer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.KQueue",
          "name": "EvfiltVnode",
          "package": "kqueue",
          "signature": "EvfiltVnode",
          "source": "src/System-KQueue.html#Filter",
          "type": "function"
        },
        "index": {
          "hierarchy": "System KQueue",
          "module": "System.KQueue",
          "name": "EvfiltVnode",
          "package": "kqueue",
          "partial": "Evfilt Vnode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/kqueue/docs/System-KQueue.html#v:EvfiltVnode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.KQueue",
          "name": "EvfiltWrite",
          "package": "kqueue",
          "signature": "EvfiltWrite",
          "source": "src/System-KQueue.html#Filter",
          "type": "function"
        },
        "index": {
          "hierarchy": "System KQueue",
          "module": "System.KQueue",
          "name": "EvfiltWrite",
          "package": "kqueue",
          "partial": "Evfilt Write",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/kqueue/docs/System-KQueue.html#v:EvfiltWrite"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.KQueue",
          "name": "KEvent",
          "package": "kqueue",
          "signature": "KEvent",
          "source": "src/System-KQueue.html#KEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "System KQueue",
          "module": "System.KQueue",
          "name": "KEvent",
          "package": "kqueue",
          "partial": "KEvent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/kqueue/docs/System-KQueue.html#v:KEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.KQueue",
          "name": "NoteAttrib",
          "package": "kqueue",
          "signature": "NoteAttrib",
          "source": "src/System-KQueue.html#FFlag",
          "type": "function"
        },
        "index": {
          "hierarchy": "System KQueue",
          "module": "System.KQueue",
          "name": "NoteAttrib",
          "package": "kqueue",
          "partial": "Note Attrib",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/kqueue/docs/System-KQueue.html#v:NoteAttrib"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.KQueue",
          "name": "NoteDelete",
          "package": "kqueue",
          "signature": "NoteDelete",
          "source": "src/System-KQueue.html#FFlag",
          "type": "function"
        },
        "index": {
          "hierarchy": "System KQueue",
          "module": "System.KQueue",
          "name": "NoteDelete",
          "package": "kqueue",
          "partial": "Note Delete",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/kqueue/docs/System-KQueue.html#v:NoteDelete"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.KQueue",
          "name": "NoteExec",
          "package": "kqueue",
          "signature": "NoteExec",
          "source": "src/System-KQueue.html#FFlag",
          "type": "function"
        },
        "index": {
          "hierarchy": "System KQueue",
          "module": "System.KQueue",
          "name": "NoteExec",
          "package": "kqueue",
          "partial": "Note Exec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/kqueue/docs/System-KQueue.html#v:NoteExec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.KQueue",
          "name": "NoteExit",
          "package": "kqueue",
          "signature": "NoteExit",
          "source": "src/System-KQueue.html#FFlag",
          "type": "function"
        },
        "index": {
          "hierarchy": "System KQueue",
          "module": "System.KQueue",
          "name": "NoteExit",
          "package": "kqueue",
          "partial": "Note Exit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/kqueue/docs/System-KQueue.html#v:NoteExit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.KQueue",
          "name": "NoteExtend",
          "package": "kqueue",
          "signature": "NoteExtend",
          "source": "src/System-KQueue.html#FFlag",
          "type": "function"
        },
        "index": {
          "hierarchy": "System KQueue",
          "module": "System.KQueue",
          "name": "NoteExtend",
          "package": "kqueue",
          "partial": "Note Extend",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/kqueue/docs/System-KQueue.html#v:NoteExtend"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.KQueue",
          "name": "NoteFork",
          "package": "kqueue",
          "signature": "NoteFork",
          "source": "src/System-KQueue.html#FFlag",
          "type": "function"
        },
        "index": {
          "hierarchy": "System KQueue",
          "module": "System.KQueue",
          "name": "NoteFork",
          "package": "kqueue",
          "partial": "Note Fork",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/kqueue/docs/System-KQueue.html#v:NoteFork"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.KQueue",
          "name": "NoteLink",
          "package": "kqueue",
          "signature": "NoteLink",
          "source": "src/System-KQueue.html#FFlag",
          "type": "function"
        },
        "index": {
          "hierarchy": "System KQueue",
          "module": "System.KQueue",
          "name": "NoteLink",
          "package": "kqueue",
          "partial": "Note Link",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/kqueue/docs/System-KQueue.html#v:NoteLink"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.KQueue",
          "name": "NoteReap",
          "package": "kqueue",
          "signature": "NoteReap",
          "source": "src/System-KQueue.html#FFlag",
          "type": "function"
        },
        "index": {
          "hierarchy": "System KQueue",
          "module": "System.KQueue",
          "name": "NoteReap",
          "package": "kqueue",
          "partial": "Note Reap",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/kqueue/docs/System-KQueue.html#v:NoteReap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.KQueue",
          "name": "NoteRename",
          "package": "kqueue",
          "signature": "NoteRename",
          "source": "src/System-KQueue.html#FFlag",
          "type": "function"
        },
        "index": {
          "hierarchy": "System KQueue",
          "module": "System.KQueue",
          "name": "NoteRename",
          "package": "kqueue",
          "partial": "Note Rename",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/kqueue/docs/System-KQueue.html#v:NoteRename"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.KQueue",
          "name": "NoteRevoke",
          "package": "kqueue",
          "signature": "NoteRevoke",
          "source": "src/System-KQueue.html#FFlag",
          "type": "function"
        },
        "index": {
          "hierarchy": "System KQueue",
          "module": "System.KQueue",
          "name": "NoteRevoke",
          "package": "kqueue",
          "partial": "Note Revoke",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/kqueue/docs/System-KQueue.html#v:NoteRevoke"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.KQueue",
          "name": "NoteSignal",
          "package": "kqueue",
          "signature": "NoteSignal",
          "source": "src/System-KQueue.html#FFlag",
          "type": "function"
        },
        "index": {
          "hierarchy": "System KQueue",
          "module": "System.KQueue",
          "name": "NoteSignal",
          "package": "kqueue",
          "partial": "Note Signal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/kqueue/docs/System-KQueue.html#v:NoteSignal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.KQueue",
          "name": "NoteWrite",
          "package": "kqueue",
          "signature": "NoteWrite",
          "source": "src/System-KQueue.html#FFlag",
          "type": "function"
        },
        "index": {
          "hierarchy": "System KQueue",
          "module": "System.KQueue",
          "name": "NoteWrite",
          "package": "kqueue",
          "partial": "Note Write",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/kqueue/docs/System-KQueue.html#v:NoteWrite"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFilter-specific data value.\n\u003c/p\u003e",
          "module": "System.KQueue",
          "name": "data_",
          "package": "kqueue",
          "signature": "CLong",
          "source": "src/System-KQueue.html#KEvent",
          "type": "function"
        },
        "index": {
          "description": "Filter-specific data value",
          "hierarchy": "System KQueue",
          "module": "System.KQueue",
          "name": "data_",
          "package": "kqueue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/kqueue/docs/System-KQueue.html#v:data_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe kernel filter (type of event).\n\u003c/p\u003e",
          "module": "System.KQueue",
          "name": "evfilter",
          "package": "kqueue",
          "signature": "Filter",
          "source": "src/System-KQueue.html#KEvent",
          "type": "function"
        },
        "index": {
          "description": "The kernel filter type of event",
          "hierarchy": "System KQueue",
          "module": "System.KQueue",
          "name": "evfilter",
          "package": "kqueue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/kqueue/docs/System-KQueue.html#v:evfilter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFilter-specific flags.\n\u003c/p\u003e",
          "module": "System.KQueue",
          "name": "fflags",
          "package": "kqueue",
          "signature": "[FFlag]",
          "source": "src/System-KQueue.html#KEvent",
          "type": "function"
        },
        "index": {
          "description": "Filter-specific flags",
          "hierarchy": "System KQueue",
          "module": "System.KQueue",
          "name": "fflags",
          "normalized": "[FFlag]",
          "package": "kqueue",
          "signature": "[FFlag]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/kqueue/docs/System-KQueue.html#v:fflags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eActions to perform on the event.\n\u003c/p\u003e",
          "module": "System.KQueue",
          "name": "flags",
          "package": "kqueue",
          "signature": "[Flag]",
          "source": "src/System-KQueue.html#KEvent",
          "type": "function"
        },
        "index": {
          "description": "Actions to perform on the event",
          "hierarchy": "System KQueue",
          "module": "System.KQueue",
          "name": "flags",
          "normalized": "[Flag]",
          "package": "kqueue",
          "signature": "[Flag]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/kqueue/docs/System-KQueue.html#v:flags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe identifier for the event, often a file descriptor.\n\u003c/p\u003e",
          "module": "System.KQueue",
          "name": "ident",
          "package": "kqueue",
          "signature": "CULong",
          "source": "src/System-KQueue.html#KEvent",
          "type": "function"
        },
        "index": {
          "description": "The identifier for the event often file descriptor",
          "hierarchy": "System KQueue",
          "module": "System.KQueue",
          "name": "ident",
          "package": "kqueue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/kqueue/docs/System-KQueue.html#v:ident"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd events to monitor, or retrieve events from the kqueue. If an\n error occurs, will throw a \u003ccode\u003e\u003ca\u003eKQueueException\u003c/a\u003e\u003c/code\u003e if there is no room in\n the returned event list. Otherwise, will set \u003ccode\u003e\u003ca\u003eEvError\u003c/a\u003e\u003c/code\u003e on the event\n and add it to the returned event list.\n\u003c/p\u003e",
          "module": "System.KQueue",
          "name": "kevent",
          "package": "kqueue",
          "signature": "KQueue-\u003e [KEvent]-\u003e Int-\u003e Maybe NominalDiffTime-\u003e IO [KEvent]",
          "type": "function"
        },
        "index": {
          "description": "Add events to monitor or retrieve events from the kqueue If an error occurs will throw KQueueException if there is no room in the returned event list Otherwise will set EvError on the event and add it to the returned event list",
          "hierarchy": "System KQueue",
          "module": "System.KQueue",
          "name": "kevent",
          "normalized": "KQueue-\u003e[KEvent]-\u003eInt-\u003eMaybe NominalDiffTime-\u003eIO[KEvent]",
          "package": "kqueue",
          "signature": "KQueue-\u003e[KEvent]-\u003eInt-\u003eMaybe NominalDiffTime-\u003eIO[KEvent]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/kqueue/docs/System-KQueue.html#v:kevent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new KQueue.\n\u003c/p\u003e",
          "module": "System.KQueue",
          "name": "kqueue",
          "package": "kqueue",
          "signature": "IO KQueue",
          "source": "src/System-KQueue.html#kqueue",
          "type": "function"
        },
        "index": {
          "description": "Create new KQueue",
          "hierarchy": "System KQueue",
          "module": "System.KQueue",
          "name": "kqueue",
          "package": "kqueue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/kqueue/docs/System-KQueue.html#v:kqueue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUser-defined data, passed through unchanged.\n\u003c/p\u003e",
          "module": "System.KQueue",
          "name": "udata",
          "package": "kqueue",
          "signature": "Ptr ()",
          "source": "src/System-KQueue.html#KEvent",
          "type": "function"
        },
        "index": {
          "description": "User-defined data passed through unchanged",
          "hierarchy": "System KQueue",
          "module": "System.KQueue",
          "name": "udata",
          "normalized": "Ptr()",
          "package": "kqueue",
          "signature": "Ptr()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/kqueue/docs/System-KQueue.html#v:udata"
      }
    }
  ]
]