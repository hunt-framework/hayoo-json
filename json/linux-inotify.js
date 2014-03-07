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
        "word": "linux-inotify"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAlthough this module copies portions of inotify's manual page,  it may\n be useful to consult the original in conjunction with this documentation:\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://man7.org/linux/man-pages/man7/inotify.7.html\u003c/a\u003e\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.Linux.Inotify",
          "name": "Inotify",
          "package": "linux-inotify",
          "source": "src/System-Linux-Inotify.html",
          "type": "module"
        },
        "index": {
          "description": "Although this module copies portions of inotify manual page it may be useful to consult the original in conjunction with this documentation http man7.org linux man-pages man7 inotify.7.html",
          "hierarchy": "System Linux Inotify",
          "module": "System.Linux.Inotify",
          "name": "Inotify",
          "package": "linux-inotify",
          "partial": "Inotify",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/linux-inotify/docs/System-Linux-Inotify.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA newtype wrapper for the \u003ccode\u003e\u003ca\u003ecookie\u003c/a\u003e\u003c/code\u003e field of the \u003ccode\u003e\u003ca\u003eEvent\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Linux.Inotify",
          "name": "Cookie",
          "package": "linux-inotify",
          "source": "src/System-Linux-Inotify.html#Cookie",
          "type": "newtype"
        },
        "index": {
          "description": "newtype wrapper for the cookie field of the Event",
          "hierarchy": "System Linux Inotify",
          "module": "System.Linux.Inotify",
          "name": "Cookie",
          "package": "linux-inotify",
          "partial": "Cookie",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/linux-inotify/docs/System-Linux-Inotify.html#t:Cookie"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Linux.Inotify",
          "name": "Event",
          "package": "linux-inotify",
          "source": "src/System-Linux-Inotify.html#Event",
          "type": "data"
        },
        "index": {
          "hierarchy": "System Linux Inotify",
          "module": "System.Linux.Inotify",
          "name": "Event",
          "package": "linux-inotify",
          "partial": "Event",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/linux-inotify/docs/System-Linux-Inotify.html#t:Event"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn empty type used to denote \u003ccode\u003e\u003ca\u003eMask\u003c/a\u003e\u003c/code\u003e values that can be received\n   from the kernel in an inotify event message.\n\u003c/p\u003e",
          "module": "System.Linux.Inotify",
          "name": "EventFlag",
          "package": "linux-inotify",
          "source": "src/System-Linux-Inotify.html#EventFlag",
          "type": "data"
        },
        "index": {
          "description": "An empty type used to denote Mask values that can be received from the kernel in an inotify event message",
          "hierarchy": "System Linux Inotify",
          "module": "System.Linux.Inotify",
          "name": "EventFlag",
          "package": "linux-inotify",
          "partial": "Event Flag",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/linux-inotify/docs/System-Linux-Inotify.html#t:EventFlag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eInotify\u003c/a\u003e\u003c/code\u003e represents an inotify descriptor,  to which watches can be added\n   and events can be read from.   Internally, it also includes a buffer\n   of events that have been delivered to the application from the kernel\n   but haven't been processed.\n\u003c/p\u003e",
          "module": "System.Linux.Inotify",
          "name": "Inotify",
          "package": "linux-inotify",
          "source": "src/System-Linux-Inotify.html#Inotify",
          "type": "data"
        },
        "index": {
          "description": "Inotify represents an inotify descriptor to which watches can be added and events can be read from Internally it also includes buffer of events that have been delivered to the application from the kernel but haven been processed",
          "hierarchy": "System Linux Inotify",
          "module": "System.Linux.Inotify",
          "name": "Inotify",
          "package": "linux-inotify",
          "partial": "Inotify",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/linux-inotify/docs/System-Linux-Inotify.html#t:Inotify"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdditional configuration options for creating an Inotify descriptor.\n\u003c/p\u003e",
          "module": "System.Linux.Inotify",
          "name": "InotifyOptions",
          "package": "linux-inotify",
          "source": "src/System-Linux-Inotify.html#InotifyOptions",
          "type": "newtype"
        },
        "index": {
          "description": "Additional configuration options for creating an Inotify descriptor",
          "hierarchy": "System Linux Inotify",
          "module": "System.Linux.Inotify",
          "name": "InotifyOptions",
          "package": "linux-inotify",
          "partial": "Inotify Options",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/linux-inotify/docs/System-Linux-Inotify.html#t:InotifyOptions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents the mask,  which in inotify terminology is a union\n   of bit flags representing various event types and watch options.\n\u003c/p\u003e\u003cp\u003eThe type parameter is a phantom type that tracks whether\n   a particular flag is used to set up a watch (\u003ccode\u003e\u003ca\u003eWatchFlag\u003c/a\u003e\u003c/code\u003e) or\n   when receiving an event. (\u003ccode\u003e\u003ca\u003eEventFlag\u003c/a\u003e\u003c/code\u003e)   Polymorphic\n   parameters mean that the flag may appear in either context.\n\u003c/p\u003e",
          "module": "System.Linux.Inotify",
          "name": "Mask",
          "package": "linux-inotify",
          "source": "src/System-Linux-Inotify.html#Mask",
          "type": "newtype"
        },
        "index": {
          "description": "Represents the mask which in inotify terminology is union of bit flags representing various event types and watch options The type parameter is phantom type that tracks whether particular flag is used to set up watch WatchFlag or when receiving an event EventFlag Polymorphic parameters mean that the flag may appear in either context",
          "hierarchy": "System Linux Inotify",
          "module": "System.Linux.Inotify",
          "name": "Mask",
          "package": "linux-inotify",
          "partial": "Mask",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/linux-inotify/docs/System-Linux-Inotify.html#t:Mask"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eWatch\u003c/a\u003e\u003c/code\u003e represents a watch descriptor,  which is used to identify\n   events and to cancel the watch.  Every watch descriptor is associated\n   with a particular inotify descriptor and can only be\n   used with that descriptor;  incorrect behavior will otherwise result.\n\u003c/p\u003e",
          "module": "System.Linux.Inotify",
          "name": "Watch",
          "package": "linux-inotify",
          "source": "src/System-Linux-Inotify.html#Watch",
          "type": "newtype"
        },
        "index": {
          "description": "Watch represents watch descriptor which is used to identify events and to cancel the watch Every watch descriptor is associated with particular inotify descriptor and can only be used with that descriptor incorrect behavior will otherwise result",
          "hierarchy": "System Linux Inotify",
          "module": "System.Linux.Inotify",
          "name": "Watch",
          "package": "linux-inotify",
          "partial": "Watch",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/linux-inotify/docs/System-Linux-Inotify.html#t:Watch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn empty type used to denote \u003ccode\u003e\u003ca\u003eMask\u003c/a\u003e\u003c/code\u003e values that can be sent to\n   the kernel when setting up an inotify watch.\n\u003c/p\u003e",
          "module": "System.Linux.Inotify",
          "name": "WatchFlag",
          "package": "linux-inotify",
          "source": "src/System-Linux-Inotify.html#WatchFlag",
          "type": "data"
        },
        "index": {
          "description": "An empty type used to denote Mask values that can be sent to the kernel when setting up an inotify watch",
          "hierarchy": "System Linux Inotify",
          "module": "System.Linux.Inotify",
          "name": "WatchFlag",
          "package": "linux-inotify",
          "partial": "Watch Flag",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/linux-inotify/docs/System-Linux-Inotify.html#t:WatchFlag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Linux.Inotify",
          "name": "Cookie",
          "package": "linux-inotify",
          "signature": "Cookie Word32",
          "source": "src/System-Linux-Inotify.html#Cookie",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Linux Inotify",
          "module": "System.Linux.Inotify",
          "name": "Cookie",
          "package": "linux-inotify",
          "partial": "Cookie",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-inotify/docs/System-Linux-Inotify.html#v:Cookie"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Linux.Inotify",
          "name": "Event",
          "package": "linux-inotify",
          "signature": "Event",
          "source": "src/System-Linux-Inotify.html#Event",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Linux Inotify",
          "module": "System.Linux.Inotify",
          "name": "Event",
          "package": "linux-inotify",
          "partial": "Event",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-inotify/docs/System-Linux-Inotify.html#v:Event"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Linux.Inotify",
          "name": "InotifyOptions",
          "package": "linux-inotify",
          "signature": "InotifyOptions",
          "source": "src/System-Linux-Inotify.html#InotifyOptions",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Linux Inotify",
          "module": "System.Linux.Inotify",
          "name": "InotifyOptions",
          "package": "linux-inotify",
          "partial": "Inotify Options",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-inotify/docs/System-Linux-Inotify.html#v:InotifyOptions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Linux.Inotify",
          "name": "Mask",
          "package": "linux-inotify",
          "signature": "Mask Word32",
          "source": "src/System-Linux-Inotify.html#Mask",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Linux Inotify",
          "module": "System.Linux.Inotify",
          "name": "Mask",
          "package": "linux-inotify",
          "partial": "Mask",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-inotify/docs/System-Linux-Inotify.html#v:Mask"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Linux.Inotify",
          "name": "Watch",
          "package": "linux-inotify",
          "signature": "Watch CInt",
          "source": "src/System-Linux-Inotify.html#Watch",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Linux Inotify",
          "module": "System.Linux.Inotify",
          "name": "Watch",
          "package": "linux-inotify",
          "partial": "Watch",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-inotify/docs/System-Linux-Inotify.html#v:Watch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdds a watch on the inotify descriptor,  returns a watch descriptor.\n   The mask controls which events are delivered to your application,\n   as well as some additional options.  This function is thread safe.\n\u003c/p\u003e",
          "module": "System.Linux.Inotify",
          "name": "addWatch",
          "package": "linux-inotify",
          "signature": "Inotify -\u003e FilePath -\u003e Mask WatchFlag -\u003e IO Watch",
          "source": "src/System-Linux-Inotify.html#addWatch",
          "type": "function"
        },
        "index": {
          "description": "Adds watch on the inotify descriptor returns watch descriptor The mask controls which events are delivered to your application as well as some additional options This function is thread safe",
          "hierarchy": "System Linux Inotify",
          "module": "System.Linux.Inotify",
          "name": "addWatch",
          "normalized": "Inotify-\u003eFilePath-\u003eMask WatchFlag-\u003eIO Watch",
          "package": "linux-inotify",
          "partial": "Watch",
          "signature": "Inotify-\u003eFilePath-\u003eMask WatchFlag-\u003eIO Watch",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-inotify/docs/System-Linux-Inotify.html#v:addWatch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA variant of \u003ccode\u003e\u003ca\u003eaddWatch\u003c/a\u003e\u003c/code\u003e that operates on a \u003ccode\u003e\u003ca\u003eRawFilePath\u003c/a\u003e\u003c/code\u003e, which is\n a file path represented as strict \u003ccode\u003eByteString\u003c/code\u003e.   One weakness of the\n current implementation is that if \u003ccode\u003e\u003ca\u003eaddWatch_\u003c/a\u003e\u003c/code\u003e throws an \u003ccode\u003eIOException\u003c/code\u003e,\n then any unicode paths will be mangled in the error message.\n\u003c/p\u003e",
          "module": "System.Linux.Inotify",
          "name": "addWatch_",
          "package": "linux-inotify",
          "signature": "Inotify -\u003e RawFilePath -\u003e Mask WatchFlag -\u003e IO Watch",
          "source": "src/System-Linux-Inotify.html#addWatch_",
          "type": "function"
        },
        "index": {
          "description": "variant of addWatch that operates on RawFilePath which is file path represented as strict ByteString One weakness of the current implementation is that if addWatch throws an IOException then any unicode paths will be mangled in the error message",
          "hierarchy": "System Linux Inotify",
          "module": "System.Linux.Inotify",
          "name": "addWatch_",
          "normalized": "Inotify-\u003eRawFilePath-\u003eMask WatchFlag-\u003eIO Watch",
          "package": "linux-inotify",
          "partial": "Watch",
          "signature": "Inotify-\u003eRawFilePath-\u003eMask WatchFlag-\u003eIO Watch",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-inotify/docs/System-Linux-Inotify.html#v:addWatch_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe size of the buffer used to receive events from\n   the kernel.   This is an artifact of this binding,\n   not inotify itself.\n\u003c/p\u003e",
          "module": "System.Linux.Inotify",
          "name": "bufferSize",
          "package": "linux-inotify",
          "signature": "Int",
          "source": "src/System-Linux-Inotify.html#InotifyOptions",
          "type": "function"
        },
        "index": {
          "description": "The size of the buffer used to receive events from the kernel This is an artifact of this binding not inotify itself",
          "hierarchy": "System Linux Inotify",
          "module": "System.Linux.Inotify",
          "name": "bufferSize",
          "package": "linux-inotify",
          "partial": "Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-inotify/docs/System-Linux-Inotify.html#v:bufferSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCloses an inotify descriptor,  freeing the resources associated\n with it.  This will also raise an \u003ccode\u003eIOException\u003c/code\u003e in any threads that\n are blocked on  \u003ccode\u003e\u003ca\u003egetEvent\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eAlthough using a descriptor after it is closed is likely to raise\n an exception,  it is not safe to use the descriptor after it is closed.\n However,  it is safe to call \u003ccode\u003e\u003ca\u003eclose\u003c/a\u003e\u003c/code\u003e multiple times;  this binding\n ensures that only one system call will be made.\n\u003c/p\u003e\u003cp\u003eDescriptors will be closed after they are garbage collected, via\n a finalizer,  although it is often preferable to call \u003ccode\u003e\u003ca\u003eclose\u003c/a\u003e\u003c/code\u003e yourself.\n\u003c/p\u003e",
          "module": "System.Linux.Inotify",
          "name": "close",
          "package": "linux-inotify",
          "signature": "Inotify -\u003e IO ()",
          "source": "src/System-Linux-Inotify.html#close",
          "type": "function"
        },
        "index": {
          "description": "Closes an inotify descriptor freeing the resources associated with it This will also raise an IOException in any threads that are blocked on getEvent Although using descriptor after it is closed is likely to raise an exception it is not safe to use the descriptor after it is closed However it is safe to call close multiple times this binding ensures that only one system call will be made Descriptors will be closed after they are garbage collected via finalizer although it is often preferable to call close yourself",
          "hierarchy": "System Linux Inotify",
          "module": "System.Linux.Inotify",
          "name": "close",
          "normalized": "Inotify-\u003eIO()",
          "package": "linux-inotify",
          "signature": "Inotify-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-inotify/docs/System-Linux-Inotify.html#v:close"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA unique integer that connects related events.  Currently this is\n   only used for rename events, and allows the resulting pair of\n   \u003ccode\u003ein_MOVE_FROM\u003c/code\u003e and \u003ccode\u003ein_MOVE_TO\u003c/code\u003e events to be connected by the\n   application.\n\u003c/p\u003e",
          "module": "System.Linux.Inotify",
          "name": "cookie",
          "package": "linux-inotify",
          "signature": "Cookie",
          "source": "src/System-Linux-Inotify.html#Event",
          "type": "function"
        },
        "index": {
          "description": "unique integer that connects related events Currently this is only used for rename events and allows the resulting pair of in MOVE FROM and in MOVE TO events to be connected by the application",
          "hierarchy": "System Linux Inotify",
          "module": "System.Linux.Inotify",
          "name": "cookie",
          "package": "linux-inotify",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-inotify/docs/System-Linux-Inotify.html#v:cookie"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefault configuration options\n\u003c/p\u003e",
          "module": "System.Linux.Inotify",
          "name": "defaultInotifyOptions",
          "package": "linux-inotify",
          "signature": "InotifyOptions",
          "source": "src/System-Linux-Inotify.html#defaultInotifyOptions",
          "type": "function"
        },
        "index": {
          "description": "Default configuration options",
          "hierarchy": "System Linux Inotify",
          "module": "System.Linux.Inotify",
          "name": "defaultInotifyOptions",
          "package": "linux-inotify",
          "partial": "Inotify Options",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-inotify/docs/System-Linux-Inotify.html#v:defaultInotifyOptions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns an inotify event,  blocking until one is available.\n\u003c/p\u003e\u003cp\u003eIt is not safe to call this function from multiple threads at the same\n   time.  Though this could be fixed,  I do not see why it would be useful.\n\u003c/p\u003e",
          "module": "System.Linux.Inotify",
          "name": "getEvent",
          "package": "linux-inotify",
          "signature": "Inotify -\u003e IO Event",
          "source": "src/System-Linux-Inotify.html#getEvent",
          "type": "function"
        },
        "index": {
          "description": "Returns an inotify event blocking until one is available It is not safe to call this function from multiple threads at the same time Though this could be fixed do not see why it would be useful",
          "hierarchy": "System Linux Inotify",
          "module": "System.Linux.Inotify",
          "name": "getEvent",
          "normalized": "Inotify-\u003eIO Event",
          "package": "linux-inotify",
          "partial": "Event",
          "signature": "Inotify-\u003eIO Event",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-inotify/docs/System-Linux-Inotify.html#v:getEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns an inotify event only if one is available in \u003ccode\u003e\u003ca\u003eInotify\u003c/a\u003e\u003c/code\u003es\n   buffer.  This won't ever make a system call.\n\u003c/p\u003e",
          "module": "System.Linux.Inotify",
          "name": "getEventFromBuffer",
          "package": "linux-inotify",
          "signature": "Inotify -\u003e IO (Maybe Event)",
          "source": "src/System-Linux-Inotify.html#getEventFromBuffer",
          "type": "function"
        },
        "index": {
          "description": "Returns an inotify event only if one is available in Inotify buffer This won ever make system call",
          "hierarchy": "System Linux Inotify",
          "module": "System.Linux.Inotify",
          "name": "getEventFromBuffer",
          "normalized": "Inotify-\u003eIO(Maybe Event)",
          "package": "linux-inotify",
          "partial": "Event From Buffer",
          "signature": "Inotify-\u003eIO(Maybe Event)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-inotify/docs/System-Linux-Inotify.html#v:getEventFromBuffer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns an inotify event only if one is immediately available.\n\u003c/p\u003e\u003cp\u003eOne possible downside of the current implementation is that\n   returning \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e necessarily results in a system call.\n\u003c/p\u003e",
          "module": "System.Linux.Inotify",
          "name": "getEventNonBlocking",
          "package": "linux-inotify",
          "signature": "Inotify -\u003e IO (Maybe Event)",
          "source": "src/System-Linux-Inotify.html#getEventNonBlocking",
          "type": "function"
        },
        "index": {
          "description": "Returns an inotify event only if one is immediately available One possible downside of the current implementation is that returning Nothing necessarily results in system call",
          "hierarchy": "System Linux Inotify",
          "module": "System.Linux.Inotify",
          "name": "getEventNonBlocking",
          "normalized": "Inotify-\u003eIO(Maybe Event)",
          "package": "linux-inotify",
          "partial": "Event Non Blocking",
          "signature": "Inotify-\u003eIO(Maybe Event)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-inotify/docs/System-Linux-Inotify.html#v:getEventNonBlocking"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDo the two masks have any bits in common?\n\u003c/p\u003e",
          "module": "System.Linux.Inotify",
          "name": "hasOverlap",
          "package": "linux-inotify",
          "signature": "Mask a -\u003e Mask a -\u003e Bool",
          "source": "src/System-Linux-Inotify.html#hasOverlap",
          "type": "function"
        },
        "index": {
          "description": "Do the two masks have any bits in common",
          "hierarchy": "System Linux Inotify",
          "module": "System.Linux.Inotify",
          "name": "hasOverlap",
          "normalized": "Mask a-\u003eMask a-\u003eBool",
          "package": "linux-inotify",
          "partial": "Overlap",
          "signature": "Mask a-\u003eMask a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-inotify/docs/System-Linux-Inotify.html#v:hasOverlap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFile was accessed.  Includes the files of a watched directory.\n\u003c/p\u003e",
          "module": "System.Linux.Inotify",
          "name": "in_ACCESS",
          "package": "linux-inotify",
          "signature": "Mask a",
          "source": "src/System-Linux-Inotify.html#in_ACCESS",
          "type": "function"
        },
        "index": {
          "description": "File was accessed Includes the files of watched directory",
          "hierarchy": "System Linux Inotify",
          "module": "System.Linux.Inotify",
          "name": "in_ACCESS",
          "package": "linux-inotify",
          "partial": "ACCESS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-inotify/docs/System-Linux-Inotify.html#v:in_ACCESS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA union of all flags above;  this is not a separate flag but a convenience\n   definition.\n\u003c/p\u003e",
          "module": "System.Linux.Inotify",
          "name": "in_ALL_EVENTS",
          "package": "linux-inotify",
          "signature": "Mask a",
          "source": "src/System-Linux-Inotify.html#in_ALL_EVENTS",
          "type": "function"
        },
        "index": {
          "description": "union of all flags above this is not separate flag but convenience definition",
          "hierarchy": "System Linux Inotify",
          "module": "System.Linux.Inotify",
          "name": "in_ALL_EVENTS",
          "package": "linux-inotify",
          "partial": "ALL EVENTS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-inotify/docs/System-Linux-Inotify.html#v:in_ALL_EVENTS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMetadata changed, e.g., permissions,  timestamps, extended  attributes,\n   link  count  (since  Linux 2.6.25), UID, GID, etc.  Includes the files of\n   a watched directory.\n\u003c/p\u003e",
          "module": "System.Linux.Inotify",
          "name": "in_ATTRIB",
          "package": "linux-inotify",
          "signature": "Mask a",
          "source": "src/System-Linux-Inotify.html#in_ATTRIB",
          "type": "function"
        },
        "index": {
          "description": "Metadata changed e.g permissions timestamps extended attributes link count since Linux UID GID etc Includes the files of watched directory",
          "hierarchy": "System Linux Inotify",
          "module": "System.Linux.Inotify",
          "name": "in_ATTRIB",
          "package": "linux-inotify",
          "partial": "ATTRIB",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-inotify/docs/System-Linux-Inotify.html#v:in_ATTRIB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFile was closed.  This is not a separate flag, but a convenience definition\n   such that  \u003ccode\u003e\u003ca\u003ein_CLOSE\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003e==\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003ein_CLOSE_WRITE\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003e\u003c\u003e\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003ein_CLOSE_NOWRITE\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "System.Linux.Inotify",
          "name": "in_CLOSE",
          "package": "linux-inotify",
          "signature": "Mask a",
          "source": "src/System-Linux-Inotify.html#in_CLOSE",
          "type": "function"
        },
        "index": {
          "description": "File was closed This is not separate flag but convenience definition such that in CLOSE in CLOSE WRITE in CLOSE NOWRITE",
          "hierarchy": "System Linux Inotify",
          "module": "System.Linux.Inotify",
          "name": "in_CLOSE",
          "package": "linux-inotify",
          "partial": "CLOSE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-inotify/docs/System-Linux-Inotify.html#v:in_CLOSE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFile not opened for writing was closed.  Includes the files of a watched\n   directory.\n\u003c/p\u003e",
          "module": "System.Linux.Inotify",
          "name": "in_CLOSE_NOWRITE",
          "package": "linux-inotify",
          "signature": "Mask a",
          "source": "src/System-Linux-Inotify.html#in_CLOSE_NOWRITE",
          "type": "function"
        },
        "index": {
          "description": "File not opened for writing was closed Includes the files of watched directory",
          "hierarchy": "System Linux Inotify",
          "module": "System.Linux.Inotify",
          "name": "in_CLOSE_NOWRITE",
          "package": "linux-inotify",
          "partial": "CLOSE NOWRITE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-inotify/docs/System-Linux-Inotify.html#v:in_CLOSE_NOWRITE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFile opened for writing was closed.   Includes the files of a watched\n   directory.\n\u003c/p\u003e",
          "module": "System.Linux.Inotify",
          "name": "in_CLOSE_WRITE",
          "package": "linux-inotify",
          "signature": "Mask a",
          "source": "src/System-Linux-Inotify.html#in_CLOSE_WRITE",
          "type": "function"
        },
        "index": {
          "description": "File opened for writing was closed Includes the files of watched directory",
          "hierarchy": "System Linux Inotify",
          "module": "System.Linux.Inotify",
          "name": "in_CLOSE_WRITE",
          "package": "linux-inotify",
          "partial": "CLOSE WRITE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-inotify/docs/System-Linux-Inotify.html#v:in_CLOSE_WRITE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFile/directory created in watched directory.\n\u003c/p\u003e",
          "module": "System.Linux.Inotify",
          "name": "in_CREATE",
          "package": "linux-inotify",
          "signature": "Mask a",
          "source": "src/System-Linux-Inotify.html#in_CREATE",
          "type": "function"
        },
        "index": {
          "description": "File directory created in watched directory",
          "hierarchy": "System Linux Inotify",
          "module": "System.Linux.Inotify",
          "name": "in_CREATE",
          "package": "linux-inotify",
          "partial": "CREATE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-inotify/docs/System-Linux-Inotify.html#v:in_CREATE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFile/directory  deleted  from  watched  directory.\n\u003c/p\u003e",
          "module": "System.Linux.Inotify",
          "name": "in_DELETE",
          "package": "linux-inotify",
          "signature": "Mask a",
          "source": "src/System-Linux-Inotify.html#in_DELETE",
          "type": "function"
        },
        "index": {
          "description": "File directory deleted from watched directory",
          "hierarchy": "System Linux Inotify",
          "module": "System.Linux.Inotify",
          "name": "in_DELETE",
          "package": "linux-inotify",
          "partial": "DELETE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-inotify/docs/System-Linux-Inotify.html#v:in_DELETE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWatched file/directory was itself deleted.\n\u003c/p\u003e",
          "module": "System.Linux.Inotify",
          "name": "in_DELETE_SELF",
          "package": "linux-inotify",
          "signature": "Mask a",
          "source": "src/System-Linux-Inotify.html#in_DELETE_SELF",
          "type": "function"
        },
        "index": {
          "description": "Watched file directory was itself deleted",
          "hierarchy": "System Linux Inotify",
          "module": "System.Linux.Inotify",
          "name": "in_DELETE_SELF",
          "package": "linux-inotify",
          "partial": "DELETE SELF",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-inotify/docs/System-Linux-Inotify.html#v:in_DELETE_SELF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e(since Linux 2.6.15) Don't  dereference  pathname  if it is a symbolic link.\n\u003c/p\u003e",
          "module": "System.Linux.Inotify",
          "name": "in_DONT_FOLLOW",
          "package": "linux-inotify",
          "signature": "Mask WatchFlag",
          "source": "src/System-Linux-Inotify.html#in_DONT_FOLLOW",
          "type": "function"
        },
        "index": {
          "description": "since Linux Don dereference pathname if it is symbolic link",
          "hierarchy": "System Linux Inotify",
          "module": "System.Linux.Inotify",
          "name": "in_DONT_FOLLOW",
          "package": "linux-inotify",
          "partial": "DONT FOLLOW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-inotify/docs/System-Linux-Inotify.html#v:in_DONT_FOLLOW"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e(since Linux 2.6.36)\n      By default, when watching events on the  children\n      of a directory, events are generated for children\n      even after  they  have  been  unlinked  from  the\n      directory.   This  can result in large numbers of\n      uninteresting events for some applications (e.g.,\n      if watching /tmp, in which many applications create\n      temporary files whose names  are  immediately\n      unlinked).  Specifying IN_EXCL_UNLINK changes the\n      default behavior, so that events are  not  generated\n      for  children after they have been unlinked\n      from the watched directory.\n\u003c/p\u003e",
          "module": "System.Linux.Inotify",
          "name": "in_EXCL_UNLINK",
          "package": "linux-inotify",
          "signature": "Mask WatchFlag",
          "source": "src/System-Linux-Inotify.html#in_EXCL_UNLINK",
          "type": "function"
        },
        "index": {
          "description": "since Linux By default when watching events on the children of directory events are generated for children even after they have been unlinked from the directory This can result in large numbers of uninteresting events for some applications e.g if watching tmp in which many applications create temporary files whose names are immediately unlinked Specifying IN EXCL UNLINK changes the default behavior so that events are not generated for children after they have been unlinked from the watched directory",
          "hierarchy": "System Linux Inotify",
          "module": "System.Linux.Inotify",
          "name": "in_EXCL_UNLINK",
          "package": "linux-inotify",
          "partial": "EXCL UNLINK",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-inotify/docs/System-Linux-Inotify.html#v:in_EXCL_UNLINK"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWatch was removed explicitly (\u003ccode\u003e\u003ca\u003ermWatch\u003c/a\u003e\u003c/code\u003e) or automatically\n   (file was deleted, or file system was unmounted).\n\u003c/p\u003e",
          "module": "System.Linux.Inotify",
          "name": "in_IGNORED",
          "package": "linux-inotify",
          "signature": "Mask EventFlag",
          "source": "src/System-Linux-Inotify.html#in_IGNORED",
          "type": "function"
        },
        "index": {
          "description": "Watch was removed explicitly rmWatch or automatically file was deleted or file system was unmounted",
          "hierarchy": "System Linux Inotify",
          "module": "System.Linux.Inotify",
          "name": "in_IGNORED",
          "package": "linux-inotify",
          "partial": "IGNORED",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-inotify/docs/System-Linux-Inotify.html#v:in_IGNORED"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSubject of this event is a directory.\n\u003c/p\u003e",
          "module": "System.Linux.Inotify",
          "name": "in_ISDIR",
          "package": "linux-inotify",
          "signature": "Mask EventFlag",
          "source": "src/System-Linux-Inotify.html#in_ISDIR",
          "type": "function"
        },
        "index": {
          "description": "Subject of this event is directory",
          "hierarchy": "System Linux Inotify",
          "module": "System.Linux.Inotify",
          "name": "in_ISDIR",
          "package": "linux-inotify",
          "partial": "ISDIR",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-inotify/docs/System-Linux-Inotify.html#v:in_ISDIR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd (OR) events to watch mask for  this  pathname\n   if it already exists (instead of replacing mask).\n\u003c/p\u003e",
          "module": "System.Linux.Inotify",
          "name": "in_MASK_ADD",
          "package": "linux-inotify",
          "signature": "Mask WatchFlag",
          "source": "src/System-Linux-Inotify.html#in_MASK_ADD",
          "type": "function"
        },
        "index": {
          "description": "Add OR events to watch mask for this pathname if it already exists instead of replacing mask",
          "hierarchy": "System Linux Inotify",
          "module": "System.Linux.Inotify",
          "name": "in_MASK_ADD",
          "package": "linux-inotify",
          "partial": "MASK ADD",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-inotify/docs/System-Linux-Inotify.html#v:in_MASK_ADD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFile was modified.  Includes the files of a watched\n   directory.\n\u003c/p\u003e",
          "module": "System.Linux.Inotify",
          "name": "in_MODIFY",
          "package": "linux-inotify",
          "signature": "Mask a",
          "source": "src/System-Linux-Inotify.html#in_MODIFY",
          "type": "function"
        },
        "index": {
          "description": "File was modified Includes the files of watched directory",
          "hierarchy": "System Linux Inotify",
          "module": "System.Linux.Inotify",
          "name": "in_MODIFY",
          "package": "linux-inotify",
          "partial": "MODIFY",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-inotify/docs/System-Linux-Inotify.html#v:in_MODIFY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFile was moved.  This is not a separate flag, but a convenience definition\n   such that  \u003ccode\u003e\u003ca\u003ein_MOVE\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003e==\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003ein_MOVED_FROM\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003e\u003c\u003e\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003ein_MOVED_TO\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Linux.Inotify",
          "name": "in_MOVE",
          "package": "linux-inotify",
          "signature": "Mask a",
          "source": "src/System-Linux-Inotify.html#in_MOVE",
          "type": "function"
        },
        "index": {
          "description": "File was moved This is not separate flag but convenience definition such that in MOVE in MOVED FROM in MOVED TO",
          "hierarchy": "System Linux Inotify",
          "module": "System.Linux.Inotify",
          "name": "in_MOVE",
          "package": "linux-inotify",
          "partial": "MOVE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-inotify/docs/System-Linux-Inotify.html#v:in_MOVE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFile moved out of watched directory. Includes the files of a watched\n   directory.\n\u003c/p\u003e",
          "module": "System.Linux.Inotify",
          "name": "in_MOVED_FROM",
          "package": "linux-inotify",
          "signature": "Mask a",
          "source": "src/System-Linux-Inotify.html#in_MOVED_FROM",
          "type": "function"
        },
        "index": {
          "description": "File moved out of watched directory Includes the files of watched directory",
          "hierarchy": "System Linux Inotify",
          "module": "System.Linux.Inotify",
          "name": "in_MOVED_FROM",
          "package": "linux-inotify",
          "partial": "MOVED FROM",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-inotify/docs/System-Linux-Inotify.html#v:in_MOVED_FROM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFile moved into watched directory. Includes the files of a watched\n   directory.\n\u003c/p\u003e",
          "module": "System.Linux.Inotify",
          "name": "in_MOVED_TO",
          "package": "linux-inotify",
          "signature": "Mask a",
          "source": "src/System-Linux-Inotify.html#in_MOVED_TO",
          "type": "function"
        },
        "index": {
          "description": "File moved into watched directory Includes the files of watched directory",
          "hierarchy": "System Linux Inotify",
          "module": "System.Linux.Inotify",
          "name": "in_MOVED_TO",
          "package": "linux-inotify",
          "partial": "MOVED TO",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-inotify/docs/System-Linux-Inotify.html#v:in_MOVED_TO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWatched file/directory was itself moved.\n\u003c/p\u003e",
          "module": "System.Linux.Inotify",
          "name": "in_MOVE_SELF",
          "package": "linux-inotify",
          "signature": "Mask a",
          "source": "src/System-Linux-Inotify.html#in_MOVE_SELF",
          "type": "function"
        },
        "index": {
          "description": "Watched file directory was itself moved",
          "hierarchy": "System Linux Inotify",
          "module": "System.Linux.Inotify",
          "name": "in_MOVE_SELF",
          "package": "linux-inotify",
          "partial": "MOVE SELF",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-inotify/docs/System-Linux-Inotify.html#v:in_MOVE_SELF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMonitor pathname for one event, then remove from watch list.\n\u003c/p\u003e",
          "module": "System.Linux.Inotify",
          "name": "in_ONESHOT",
          "package": "linux-inotify",
          "signature": "Mask WatchFlag",
          "source": "src/System-Linux-Inotify.html#in_ONESHOT",
          "type": "function"
        },
        "index": {
          "description": "Monitor pathname for one event then remove from watch list",
          "hierarchy": "System Linux Inotify",
          "module": "System.Linux.Inotify",
          "name": "in_ONESHOT",
          "package": "linux-inotify",
          "partial": "ONESHOT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-inotify/docs/System-Linux-Inotify.html#v:in_ONESHOT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e(since Linux 2.6.15) Only watch pathname if it is a directory.\n\u003c/p\u003e",
          "module": "System.Linux.Inotify",
          "name": "in_ONLYDIR",
          "package": "linux-inotify",
          "signature": "Mask WatchFlag",
          "source": "src/System-Linux-Inotify.html#in_ONLYDIR",
          "type": "function"
        },
        "index": {
          "description": "since Linux Only watch pathname if it is directory",
          "hierarchy": "System Linux Inotify",
          "module": "System.Linux.Inotify",
          "name": "in_ONLYDIR",
          "package": "linux-inotify",
          "partial": "ONLYDIR",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-inotify/docs/System-Linux-Inotify.html#v:in_ONLYDIR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFile was opened.  Includes the files of a watched\n   directory.\n\u003c/p\u003e",
          "module": "System.Linux.Inotify",
          "name": "in_OPEN",
          "package": "linux-inotify",
          "signature": "Mask a",
          "source": "src/System-Linux-Inotify.html#in_OPEN",
          "type": "function"
        },
        "index": {
          "description": "File was opened Includes the files of watched directory",
          "hierarchy": "System Linux Inotify",
          "module": "System.Linux.Inotify",
          "name": "in_OPEN",
          "package": "linux-inotify",
          "partial": "OPEN",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-inotify/docs/System-Linux-Inotify.html#v:in_OPEN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvent queue overflowed (wd is -1 for this event).\n\u003c/p\u003e",
          "module": "System.Linux.Inotify",
          "name": "in_Q_OVERFLOW",
          "package": "linux-inotify",
          "signature": "Mask EventFlag",
          "source": "src/System-Linux-Inotify.html#in_Q_OVERFLOW",
          "type": "function"
        },
        "index": {
          "description": "Event queue overflowed wd is for this event",
          "hierarchy": "System Linux Inotify",
          "module": "System.Linux.Inotify",
          "name": "in_Q_OVERFLOW",
          "package": "linux-inotify",
          "partial": "OVERFLOW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-inotify/docs/System-Linux-Inotify.html#v:in_Q_OVERFLOW"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFile system containing watched object was unmounted.\n\u003c/p\u003e",
          "module": "System.Linux.Inotify",
          "name": "in_UNMOUNT",
          "package": "linux-inotify",
          "signature": "Mask EventFlag",
          "source": "src/System-Linux-Inotify.html#in_UNMOUNT",
          "type": "function"
        },
        "index": {
          "description": "File system containing watched object was unmounted",
          "hierarchy": "System Linux Inotify",
          "module": "System.Linux.Inotify",
          "name": "in_UNMOUNT",
          "package": "linux-inotify",
          "partial": "UNMOUNT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-inotify/docs/System-Linux-Inotify.html#v:in_UNMOUNT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates an inotify socket descriptor that watches can be\n   added to and events can be read from.\n\u003c/p\u003e",
          "module": "System.Linux.Inotify",
          "name": "init",
          "package": "linux-inotify",
          "signature": "IO Inotify",
          "source": "src/System-Linux-Inotify.html#init",
          "type": "function"
        },
        "index": {
          "description": "Creates an inotify socket descriptor that watches can be added to and events can be read from",
          "hierarchy": "System Linux Inotify",
          "module": "System.Linux.Inotify",
          "name": "init",
          "package": "linux-inotify",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-inotify/docs/System-Linux-Inotify.html#v:init"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates an inotify socket descriptor with custom configuration options.\n   Calls \u003ccode\u003einotify_init1(IN_NONBLOCK | IN_CLOEXEC)\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Linux.Inotify",
          "name": "initWith",
          "package": "linux-inotify",
          "signature": "InotifyOptions -\u003e IO Inotify",
          "source": "src/System-Linux-Inotify.html#initWith",
          "type": "function"
        },
        "index": {
          "description": "Creates an inotify socket descriptor with custom configuration options Calls inotify init1 IN NONBLOCK IN CLOEXEC",
          "hierarchy": "System Linux Inotify",
          "module": "System.Linux.Inotify",
          "name": "initWith",
          "normalized": "InotifyOptions-\u003eIO Inotify",
          "package": "linux-inotify",
          "partial": "With",
          "signature": "InotifyOptions-\u003eIO Inotify",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-inotify/docs/System-Linux-Inotify.html#v:initWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAre the bits of the first mask a subset of the bits of the second?\n\u003c/p\u003e",
          "module": "System.Linux.Inotify",
          "name": "isSubset",
          "package": "linux-inotify",
          "signature": "Mask a -\u003e Mask a -\u003e Bool",
          "source": "src/System-Linux-Inotify.html#isSubset",
          "type": "function"
        },
        "index": {
          "description": "Are the bits of the first mask subset of the bits of the second",
          "hierarchy": "System Linux Inotify",
          "module": "System.Linux.Inotify",
          "name": "isSubset",
          "normalized": "Mask a-\u003eMask a-\u003eBool",
          "package": "linux-inotify",
          "partial": "Subset",
          "signature": "Mask a-\u003eMask a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-inotify/docs/System-Linux-Inotify.html#v:isSubset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute the intersection (bitwise and) of two masks\n\u003c/p\u003e",
          "module": "System.Linux.Inotify",
          "name": "isect",
          "package": "linux-inotify",
          "signature": "Mask a -\u003e Mask a -\u003e Mask a",
          "source": "src/System-Linux-Inotify.html#isect",
          "type": "function"
        },
        "index": {
          "description": "Compute the intersection bitwise and of two masks",
          "hierarchy": "System Linux Inotify",
          "module": "System.Linux.Inotify",
          "name": "isect",
          "normalized": "Mask a-\u003eMask a-\u003eMask a",
          "package": "linux-inotify",
          "signature": "Mask a-\u003eMask a-\u003eMask a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-inotify/docs/System-Linux-Inotify.html#v:isect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003econtains bits that describe the event that occurred\n\u003c/p\u003e",
          "module": "System.Linux.Inotify",
          "name": "mask",
          "package": "linux-inotify",
          "signature": "(Mask EventFlag)",
          "source": "src/System-Linux-Inotify.html#Event",
          "type": "function"
        },
        "index": {
          "description": "contains bits that describe the event that occurred",
          "hierarchy": "System Linux Inotify",
          "module": "System.Linux.Inotify",
          "name": "mask",
          "package": "linux-inotify",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-inotify/docs/System-Linux-Inotify.html#v:mask"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe name field is only present when an event is returned for a file\n   inside a watched directory; it identifies the file pathname relative\n   to the watched directory.\n\u003c/p\u003e\u003cp\u003eThe proper Haskell interpretation of this seems to be to use\n   \u003ccode\u003e\u003ca\u003egetForeignEncoding\u003c/a\u003e\u003c/code\u003e and then unpack it to a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e\n   or decode it using the text package.\n\u003c/p\u003e",
          "module": "System.Linux.Inotify",
          "name": "name",
          "package": "linux-inotify",
          "signature": "ByteString",
          "source": "src/System-Linux-Inotify.html#Event",
          "type": "function"
        },
        "index": {
          "description": "The name field is only present when an event is returned for file inside watched directory it identifies the file pathname relative to the watched directory The proper Haskell interpretation of this seems to be to use getForeignEncoding and then unpack it to String or decode it using the text package",
          "hierarchy": "System Linux Inotify",
          "module": "System.Linux.Inotify",
          "name": "name",
          "package": "linux-inotify",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-inotify/docs/System-Linux-Inotify.html#v:name"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns an inotify event,  blocking until one is available.\n\u003c/p\u003e\u003cp\u003eAfter this returns an event, the next read from the inotify\n   descriptor will return the same event.  This read will not\n   result in a system call.\n\u003c/p\u003e\u003cp\u003eIt is not safe to call this function from multiple threads at the same\n   time.  Though this could be fixed,  I do not see why it would be useful.\n\u003c/p\u003e",
          "module": "System.Linux.Inotify",
          "name": "peekEvent",
          "package": "linux-inotify",
          "signature": "Inotify -\u003e IO Event",
          "source": "src/System-Linux-Inotify.html#peekEvent",
          "type": "function"
        },
        "index": {
          "description": "Returns an inotify event blocking until one is available After this returns an event the next read from the inotify descriptor will return the same event This read will not result in system call It is not safe to call this function from multiple threads at the same time Though this could be fixed do not see why it would be useful",
          "hierarchy": "System Linux Inotify",
          "module": "System.Linux.Inotify",
          "name": "peekEvent",
          "normalized": "Inotify-\u003eIO Event",
          "package": "linux-inotify",
          "partial": "Event",
          "signature": "Inotify-\u003eIO Event",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-inotify/docs/System-Linux-Inotify.html#v:peekEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns an inotify event only if one is available in \u003ccode\u003e\u003ca\u003eInotify\u003c/a\u003e\u003c/code\u003es\n   buffer.  This won't ever make a system call.\n\u003c/p\u003e\u003cp\u003eIf this returns an event, then the next read from the inotify\n   descriptor will return the same event,  and this read will not\n   result in a system call.\n\u003c/p\u003e",
          "module": "System.Linux.Inotify",
          "name": "peekEventFromBuffer",
          "package": "linux-inotify",
          "signature": "Inotify -\u003e IO (Maybe Event)",
          "source": "src/System-Linux-Inotify.html#peekEventFromBuffer",
          "type": "function"
        },
        "index": {
          "description": "Returns an inotify event only if one is available in Inotify buffer This won ever make system call If this returns an event then the next read from the inotify descriptor will return the same event and this read will not result in system call",
          "hierarchy": "System Linux Inotify",
          "module": "System.Linux.Inotify",
          "name": "peekEventFromBuffer",
          "normalized": "Inotify-\u003eIO(Maybe Event)",
          "package": "linux-inotify",
          "partial": "Event From Buffer",
          "signature": "Inotify-\u003eIO(Maybe Event)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-inotify/docs/System-Linux-Inotify.html#v:peekEventFromBuffer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns an inotify event only if one is immediately available.\n\u003c/p\u003e\u003cp\u003eIf this returns an event, then the next read from the inotify\n   descriptor will return the same event, and this read will\n   not result in a system call.\n\u003c/p\u003e\u003cp\u003eOne possible downside of the current implementation is that\n   returning \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e necessarily results in a system call.\n\u003c/p\u003e",
          "module": "System.Linux.Inotify",
          "name": "peekEventNonBlocking",
          "package": "linux-inotify",
          "signature": "Inotify -\u003e IO (Maybe Event)",
          "source": "src/System-Linux-Inotify.html#peekEventNonBlocking",
          "type": "function"
        },
        "index": {
          "description": "Returns an inotify event only if one is immediately available If this returns an event then the next read from the inotify descriptor will return the same event and this read will not result in system call One possible downside of the current implementation is that returning Nothing necessarily results in system call",
          "hierarchy": "System Linux Inotify",
          "module": "System.Linux.Inotify",
          "name": "peekEventNonBlocking",
          "normalized": "Inotify-\u003eIO(Maybe Event)",
          "package": "linux-inotify",
          "partial": "Event Non Blocking",
          "signature": "Inotify-\u003eIO(Maybe Event)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-inotify/docs/System-Linux-Inotify.html#v:peekEventNonBlocking"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStops watching a path for changes.  This watch descriptor must be\n   associated with the particular inotify port,  otherwise undefined\n   behavior can happen.\n\u003c/p\u003e\u003cp\u003eThis function is thread safe. This binding ignores \u003ccode\u003einotify_rm_watch\u003c/code\u003e's\n   errno when it is \u003ccode\u003eEINVAL\u003c/code\u003e, so it is ok to delete a previously\n   removed or non-existent watch descriptor.\n\u003c/p\u003e\u003cp\u003eHowever long lived applications that set and remove many watches\n   should still endeavor to avoid calling \u003ccode\u003e\u003ca\u003ermWatch\u003c/a\u003e\u003c/code\u003e on removed\n   watch descriptors,  due to possible wrap-around bugs.\n\u003c/p\u003e",
          "module": "System.Linux.Inotify",
          "name": "rmWatch",
          "package": "linux-inotify",
          "signature": "Inotify -\u003e Watch -\u003e IO ()",
          "source": "src/System-Linux-Inotify.html#rmWatch",
          "type": "function"
        },
        "index": {
          "description": "Stops watching path for changes This watch descriptor must be associated with the particular inotify port otherwise undefined behavior can happen This function is thread safe This binding ignores inotify rm watch errno when it is EINVAL so it is ok to delete previously removed or non-existent watch descriptor However long lived applications that set and remove many watches should still endeavor to avoid calling rmWatch on removed watch descriptors due to possible wrap-around bugs",
          "hierarchy": "System Linux Inotify",
          "module": "System.Linux.Inotify",
          "name": "rmWatch",
          "normalized": "Inotify-\u003eWatch-\u003eIO()",
          "package": "linux-inotify",
          "partial": "Watch",
          "signature": "Inotify-\u003eWatch-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-inotify/docs/System-Linux-Inotify.html#v:rmWatch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIdentifies the watch for which this event occurs.  It is one of  the\n   watch descriptors returned by a previous call to \u003ccode\u003e\u003ca\u003eaddWatch\u003c/a\u003e\u003c/code\u003e or\n   \u003ccode\u003e\u003ca\u003eaddWatch_\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Linux.Inotify",
          "name": "wd",
          "package": "linux-inotify",
          "signature": "Watch",
          "source": "src/System-Linux-Inotify.html#Event",
          "type": "function"
        },
        "index": {
          "description": "Identifies the watch for which this event occurs It is one of the watch descriptors returned by previous call to addWatch or addWatch",
          "hierarchy": "System Linux Inotify",
          "module": "System.Linux.Inotify",
          "name": "wd",
          "package": "linux-inotify",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-inotify/docs/System-Linux-Inotify.html#v:wd"
      }
    }
  ]
]