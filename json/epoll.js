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
        "word": "epoll"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eLow level interface to Linux' epoll, a high performance polling mechanism\n which handles high numbers of file descriptors efficiently. See man epoll(7)\n for details.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.Linux.Epoll.Base",
          "name": "Base",
          "package": "epoll",
          "source": "src/System-Linux-Epoll-Base.html",
          "type": "module"
        },
        "index": {
          "description": "Low level interface to Linux epoll high performance polling mechanism which handles high numbers of file descriptors efficiently See man epoll for details",
          "hierarchy": "System Linux Epoll Base",
          "module": "System.Linux.Epoll.Base",
          "name": "Base",
          "package": "epoll",
          "partial": "Base",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/epoll/docs/System-Linux-Epoll-Base.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvent descriptor. Will be returned from \u003ccode\u003e\u003ca\u003eadd\u003c/a\u003e\u003c/code\u003e and must be passed to\n \u003ccode\u003e\u003ca\u003edelete\u003c/a\u003e\u003c/code\u003e exactly once.\n\u003c/p\u003e",
          "module": "System.Linux.Epoll.Base",
          "name": "Descriptor",
          "package": "epoll",
          "source": "src/System-Linux-Epoll-Base.html#Descriptor",
          "type": "data"
        },
        "index": {
          "description": "Event descriptor Will be returned from add and must be passed to delete exactly once",
          "hierarchy": "System Linux Epoll Base",
          "module": "System.Linux.Epoll.Base",
          "name": "Descriptor",
          "package": "epoll",
          "partial": "Descriptor",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/epoll/docs/System-Linux-Epoll-Base.html#t:Descriptor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAbstract epoll device. Holds internal data. Returned from \u003ccode\u003e\u003ca\u003ecreate\u003c/a\u003e\u003c/code\u003e and used\n in almost every other API function. Must be closed explicitely with \u003ccode\u003e\u003ca\u003eclose\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Linux.Epoll.Base",
          "name": "Device",
          "package": "epoll",
          "source": "src/System-Linux-Epoll-Base.html#Device",
          "type": "data"
        },
        "index": {
          "description": "Abstract epoll device Holds internal data Returned from create and used in almost every other API function Must be closed explicitely with close",
          "hierarchy": "System Linux Epoll Base",
          "module": "System.Linux.Epoll.Base",
          "name": "Device",
          "package": "epoll",
          "partial": "Device",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/epoll/docs/System-Linux-Epoll-Base.html#t:Device"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnsigned type used for timeout specifications.\n\u003c/p\u003e",
          "module": "System.Linux.Epoll.Base",
          "name": "Duration",
          "package": "epoll",
          "source": "src/System-Linux-Epoll-Base.html#Duration",
          "type": "data"
        },
        "index": {
          "description": "Unsigned type used for timeout specifications",
          "hierarchy": "System Linux Epoll Base",
          "module": "System.Linux.Epoll.Base",
          "name": "Duration",
          "package": "epoll",
          "partial": "Duration",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/epoll/docs/System-Linux-Epoll-Base.html#t:Duration"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA single event ocurrence.\n\u003c/p\u003e",
          "module": "System.Linux.Epoll.Base",
          "name": "Event",
          "package": "epoll",
          "source": "src/System-Linux-Epoll-Base.html#Event",
          "type": "data"
        },
        "index": {
          "description": "single event ocurrence",
          "hierarchy": "System Linux Epoll Base",
          "module": "System.Linux.Epoll.Base",
          "name": "Event",
          "package": "epoll",
          "partial": "Event",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/epoll/docs/System-Linux-Epoll-Base.html#t:Event"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEventType corresponds to epoll's event type defines, e.g. EPOLLIN,\n EPOLLOUT, EPOLLET, etc.\n\u003c/p\u003e",
          "module": "System.Linux.Epoll.Base",
          "name": "EventType",
          "package": "epoll",
          "source": "src/System-Linux-Epoll-Base.html#EventType",
          "type": "data"
        },
        "index": {
          "description": "EventType corresponds to epoll event type defines e.g EPOLLIN EPOLLOUT EPOLLET etc",
          "hierarchy": "System Linux Epoll Base",
          "module": "System.Linux.Epoll.Base",
          "name": "EventType",
          "package": "epoll",
          "partial": "Event Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/epoll/docs/System-Linux-Epoll-Base.html#t:EventType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnsigned type used for length specifications.\n\u003c/p\u003e",
          "module": "System.Linux.Epoll.Base",
          "name": "Size",
          "package": "epoll",
          "source": "src/System-Linux-Epoll-Base.html#Size",
          "type": "data"
        },
        "index": {
          "description": "Unsigned type used for length specifications",
          "hierarchy": "System Linux Epoll Base",
          "module": "System.Linux.Epoll.Base",
          "name": "Size",
          "package": "epoll",
          "partial": "Size",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/epoll/docs/System-Linux-Epoll-Base.html#t:Size"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatch operator. Useful to test whether an \u003ccode\u003e\u003ca\u003eEventType\u003c/a\u003e\u003c/code\u003e returned from\n \u003ccode\u003e\u003ca\u003ewait\u003c/a\u003e\u003c/code\u003e contains one of the defined event types because EventTypes returned by\n wait might be the bitwise OR of several EventTypes.\n\u003c/p\u003e",
          "module": "System.Linux.Epoll.Base",
          "name": "(=~)",
          "package": "epoll",
          "signature": "EventType -\u003e EventType -\u003e Bool",
          "source": "src/System-Linux-Epoll-Base.html#%3D~",
          "type": "function"
        },
        "index": {
          "description": "Match operator Useful to test whether an EventType returned from wait contains one of the defined event types because EventTypes returned by wait might be the bitwise OR of several EventTypes",
          "hierarchy": "System Linux Epoll Base",
          "module": "System.Linux.Epoll.Base",
          "name": "(=~) =~",
          "normalized": "EventType-\u003eEventType-\u003eBool",
          "package": "epoll",
          "signature": "EventType-\u003eEventType-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/epoll/docs/System-Linux-Epoll-Base.html#v:-61--126-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdds a filedescriptor to the epoll watch set using the specified\n EventTypes. User data might be passed in as well which will be returned on\n event occurence as part of the \u003ccode\u003e\u003ca\u003eEvent\u003c/a\u003e\u003c/code\u003e type. Returns an event descriptor\n which must be deleted from the watch set with \u003ccode\u003e\u003ca\u003edelete\u003c/a\u003e\u003c/code\u003e and passed to\n \u003ccode\u003e\u003ca\u003efreeDesc\u003c/a\u003e\u003c/code\u003e exactly once.\n\u003c/p\u003e",
          "module": "System.Linux.Epoll.Base",
          "name": "add",
          "package": "epoll",
          "signature": "Device -\u003e a -\u003e [EventType] -\u003e Fd -\u003e IO (Descriptor a)",
          "source": "src/System-Linux-Epoll-Base.html#add",
          "type": "function"
        },
        "index": {
          "description": "Adds filedescriptor to the epoll watch set using the specified EventTypes User data might be passed in as well which will be returned on event occurence as part of the Event type Returns an event descriptor which must be deleted from the watch set with delete and passed to freeDesc exactly once",
          "hierarchy": "System Linux Epoll Base",
          "module": "System.Linux.Epoll.Base",
          "name": "add",
          "normalized": "Device-\u003ea-\u003e[EventType]-\u003eFd-\u003eIO(Descriptor a)",
          "package": "epoll",
          "signature": "Device-\u003ea-\u003e[EventType]-\u003eFd-\u003eIO(Descriptor a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/epoll/docs/System-Linux-Epoll-Base.html#v:add"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCloses epoll device.\n\u003c/p\u003e",
          "module": "System.Linux.Epoll.Base",
          "name": "close",
          "package": "epoll",
          "signature": "Device -\u003e IO ()",
          "source": "src/System-Linux-Epoll-Base.html#close",
          "type": "function"
        },
        "index": {
          "description": "Closes epoll device",
          "hierarchy": "System Linux Epoll Base",
          "module": "System.Linux.Epoll.Base",
          "name": "close",
          "normalized": "Device-\u003eIO()",
          "package": "epoll",
          "signature": "Device-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/epoll/docs/System-Linux-Epoll-Base.html#v:close"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBitwise OR of the list of \u003ccode\u003e\u003ca\u003eEventType\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
          "module": "System.Linux.Epoll.Base",
          "name": "combineEvents",
          "package": "epoll",
          "signature": "[EventType] -\u003e EventType",
          "source": "src/System-Linux-Epoll-Base.html#combineEvents",
          "type": "function"
        },
        "index": {
          "description": "Bitwise OR of the list of EventType",
          "hierarchy": "System Linux Epoll Base",
          "module": "System.Linux.Epoll.Base",
          "name": "combineEvents",
          "normalized": "[EventType]-\u003eEventType",
          "package": "epoll",
          "partial": "Events",
          "signature": "[EventType]-\u003eEventType",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/epoll/docs/System-Linux-Epoll-Base.html#v:combineEvents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates an epoll device. Must be closed with \u003ccode\u003e\u003ca\u003eclose\u003c/a\u003e\u003c/code\u003e.\n The parameter \u003ccode\u003e\u003ca\u003eSize\u003c/a\u003e\u003c/code\u003e specifies the number of events that can be reported by a\n single call to \u003ccode\u003e\u003ca\u003ewait\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Linux.Epoll.Base",
          "name": "create",
          "package": "epoll",
          "signature": "Size -\u003e IO Device",
          "source": "src/System-Linux-Epoll-Base.html#create",
          "type": "function"
        },
        "index": {
          "description": "Creates an epoll device Must be closed with close The parameter Size specifies the number of events that can be reported by single call to wait",
          "hierarchy": "System Linux Epoll Base",
          "module": "System.Linux.Epoll.Base",
          "name": "create",
          "normalized": "Size-\u003eIO Device",
          "package": "epoll",
          "signature": "Size-\u003eIO Device",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/epoll/docs/System-Linux-Epoll-Base.html#v:create"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemoves the event descriptor from the epoll watch set.\n and frees descriptor which must not be used afterwards.\n\u003c/p\u003e",
          "module": "System.Linux.Epoll.Base",
          "name": "delete",
          "package": "epoll",
          "signature": "Device -\u003e Descriptor a -\u003e IO ()",
          "source": "src/System-Linux-Epoll-Base.html#delete",
          "type": "function"
        },
        "index": {
          "description": "Removes the event descriptor from the epoll watch set and frees descriptor which must not be used afterwards",
          "hierarchy": "System Linux Epoll Base",
          "module": "System.Linux.Epoll.Base",
          "name": "delete",
          "normalized": "Device-\u003eDescriptor a-\u003eIO()",
          "package": "epoll",
          "signature": "Device-\u003eDescriptor a-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/epoll/docs/System-Linux-Epoll-Base.html#v:delete"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Linux.Epoll.Base",
          "name": "edgeTriggeredEvent",
          "package": "epoll",
          "signature": "EventType",
          "source": "src/System-Linux-Epoll-Base.html#edgeTriggeredEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Linux Epoll Base",
          "module": "System.Linux.Epoll.Base",
          "name": "edgeTriggeredEvent",
          "package": "epoll",
          "partial": "Triggered Event",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/epoll/docs/System-Linux-Epoll-Base.html#v:edgeTriggeredEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Linux.Epoll.Base",
          "name": "errorEvent",
          "package": "epoll",
          "signature": "EventType",
          "source": "src/System-Linux-Epoll-Base.html#errorEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Linux Epoll Base",
          "module": "System.Linux.Epoll.Base",
          "name": "errorEvent",
          "package": "epoll",
          "partial": "Event",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/epoll/docs/System-Linux-Epoll-Base.html#v:errorEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFrees the resources associated with this descriptor.\n Must be called exactly once.\n\u003c/p\u003e",
          "module": "System.Linux.Epoll.Base",
          "name": "freeDesc",
          "package": "epoll",
          "signature": "Descriptor a -\u003e IO ()",
          "source": "src/System-Linux-Epoll-Base.html#freeDesc",
          "type": "function"
        },
        "index": {
          "description": "Frees the resources associated with this descriptor Must be called exactly once",
          "hierarchy": "System Linux Epoll Base",
          "module": "System.Linux.Epoll.Base",
          "name": "freeDesc",
          "normalized": "Descriptor a-\u003eIO()",
          "package": "epoll",
          "partial": "Desc",
          "signature": "Descriptor a-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/epoll/docs/System-Linux-Epoll-Base.html#v:freeDesc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Linux.Epoll.Base",
          "name": "hangupEvent",
          "package": "epoll",
          "signature": "EventType",
          "source": "src/System-Linux-Epoll-Base.html#hangupEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Linux Epoll Base",
          "module": "System.Linux.Epoll.Base",
          "name": "hangupEvent",
          "package": "epoll",
          "partial": "Event",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/epoll/docs/System-Linux-Epoll-Base.html#v:hangupEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Linux.Epoll.Base",
          "name": "inEvent",
          "package": "epoll",
          "signature": "EventType",
          "source": "src/System-Linux-Epoll-Base.html#inEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Linux Epoll Base",
          "module": "System.Linux.Epoll.Base",
          "name": "inEvent",
          "package": "epoll",
          "partial": "Event",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/epoll/docs/System-Linux-Epoll-Base.html#v:inEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eModified the event types of the event descriptor.\n\u003c/p\u003e",
          "module": "System.Linux.Epoll.Base",
          "name": "modify",
          "package": "epoll",
          "signature": "Device -\u003e [EventType] -\u003e Descriptor a -\u003e IO ()",
          "source": "src/System-Linux-Epoll-Base.html#modify",
          "type": "function"
        },
        "index": {
          "description": "Modified the event types of the event descriptor",
          "hierarchy": "System Linux Epoll Base",
          "module": "System.Linux.Epoll.Base",
          "name": "modify",
          "normalized": "Device-\u003e[EventType]-\u003eDescriptor a-\u003eIO()",
          "package": "epoll",
          "signature": "Device-\u003e[EventType]-\u003eDescriptor a-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/epoll/docs/System-Linux-Epoll-Base.html#v:modify"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Linux.Epoll.Base",
          "name": "oneShotEvent",
          "package": "epoll",
          "signature": "EventType",
          "source": "src/System-Linux-Epoll-Base.html#oneShotEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Linux Epoll Base",
          "module": "System.Linux.Epoll.Base",
          "name": "oneShotEvent",
          "package": "epoll",
          "partial": "Shot Event",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/epoll/docs/System-Linux-Epoll-Base.html#v:oneShotEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Linux.Epoll.Base",
          "name": "outEvent",
          "package": "epoll",
          "signature": "EventType",
          "source": "src/System-Linux-Epoll-Base.html#outEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Linux Epoll Base",
          "module": "System.Linux.Epoll.Base",
          "name": "outEvent",
          "package": "epoll",
          "partial": "Event",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/epoll/docs/System-Linux-Epoll-Base.html#v:outEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Linux.Epoll.Base",
          "name": "peerCloseEvent",
          "package": "epoll",
          "signature": "EventType",
          "source": "src/System-Linux-Epoll-Base.html#peerCloseEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Linux Epoll Base",
          "module": "System.Linux.Epoll.Base",
          "name": "peerCloseEvent",
          "package": "epoll",
          "partial": "Close Event",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/epoll/docs/System-Linux-Epoll-Base.html#v:peerCloseEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Linux.Epoll.Base",
          "name": "toDuration",
          "package": "epoll",
          "signature": "Int -\u003e Maybe Duration",
          "source": "src/System-Linux-Epoll-Base.html#toDuration",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Linux Epoll Base",
          "module": "System.Linux.Epoll.Base",
          "name": "toDuration",
          "normalized": "Int-\u003eMaybe Duration",
          "package": "epoll",
          "partial": "Duration",
          "signature": "Int-\u003eMaybe Duration",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/epoll/docs/System-Linux-Epoll-Base.html#v:toDuration"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Linux.Epoll.Base",
          "name": "toSize",
          "package": "epoll",
          "signature": "Int -\u003e Maybe Size",
          "source": "src/System-Linux-Epoll-Base.html#toSize",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Linux Epoll Base",
          "module": "System.Linux.Epoll.Base",
          "name": "toSize",
          "normalized": "Int-\u003eMaybe Size",
          "package": "epoll",
          "partial": "Size",
          "signature": "Int-\u003eMaybe Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/epoll/docs/System-Linux-Epoll-Base.html#v:toSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Linux.Epoll.Base",
          "name": "urgentEvent",
          "package": "epoll",
          "signature": "EventType",
          "source": "src/System-Linux-Epoll-Base.html#urgentEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Linux Epoll Base",
          "module": "System.Linux.Epoll.Base",
          "name": "urgentEvent",
          "package": "epoll",
          "partial": "Event",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/epoll/docs/System-Linux-Epoll-Base.html#v:urgentEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWaits for the specified duration on all event descriptors. Returns the\n list of events that occured.\n\u003c/p\u003e",
          "module": "System.Linux.Epoll.Base",
          "name": "wait",
          "package": "epoll",
          "signature": "Duration -\u003e Device -\u003e IO [Event a]",
          "source": "src/System-Linux-Epoll-Base.html#wait",
          "type": "function"
        },
        "index": {
          "description": "Waits for the specified duration on all event descriptors Returns the list of events that occured",
          "hierarchy": "System Linux Epoll Base",
          "module": "System.Linux.Epoll.Base",
          "name": "wait",
          "normalized": "Duration-\u003eDevice-\u003eIO[Event a]",
          "package": "epoll",
          "signature": "Duration-\u003eDevice-\u003eIO[Event a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/epoll/docs/System-Linux-Epoll-Base.html#v:wait"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eBuffer layer above epoll. Implemented using \u003ccode\u003e\u003ca\u003eEventLoop\u003c/a\u003e\u003c/code\u003es.\n The general usage is that first an instance of \u003ccode\u003e\u003ca\u003eRuntime\u003c/a\u003e\u003c/code\u003e is obtained, then\n one creates as many buffers as needed. Once done with a buffer, it has \n to be closed and finally the runtime should be shutdown, which kills \n the event loop, e.g.\n\u003c/p\u003e\u003cpre\u003e\n do r \u003c- createRuntime (fromJust . toSize $ 4096)\n    withIBuffer r stdInput $ \\b -\u003e\n        readBuffer b \u003e\u003e= mapM_ print . take 10 . lines\n    shutdownRuntime r\n\u003c/pre\u003e\u003cp\u003ePlease note that one has to close all buffers before calling shutdown on\n the runtime.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.Linux.Epoll.Buffer",
          "name": "Buffer",
          "package": "epoll",
          "source": "src/System-Linux-Epoll-Buffer.html",
          "type": "module"
        },
        "index": {
          "description": "Buffer layer above epoll Implemented using EventLoop The general usage is that first an instance of Runtime is obtained then one creates as many buffers as needed Once done with buffer it has to be closed and finally the runtime should be shutdown which kills the event loop e.g do createRuntime fromJust toSize withIBuffer stdInput readBuffer mapM print take lines shutdownRuntime Please note that one has to close all buffers before calling shutdown on the runtime",
          "hierarchy": "System Linux Epoll Buffer",
          "module": "System.Linux.Epoll.Buffer",
          "name": "Buffer",
          "package": "epoll",
          "partial": "Buffer",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/epoll/docs/System-Linux-Epoll-Buffer.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBuffer Element type class.\n Any instance of this class can be used as a buffer element.\n\u003c/p\u003e",
          "module": "System.Linux.Epoll.Buffer",
          "name": "BufElem",
          "package": "epoll",
          "source": "src/System-Linux-Epoll-Buffer.html#BufElem",
          "type": "class"
        },
        "index": {
          "description": "Buffer Element type class Any instance of this class can be used as buffer element",
          "hierarchy": "System Linux Epoll Buffer",
          "module": "System.Linux.Epoll.Buffer",
          "name": "BufElem",
          "package": "epoll",
          "partial": "Buf Elem",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/epoll/docs/System-Linux-Epoll-Buffer.html#t:BufElem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBuffer for reading after \u003ccode\u003e\u003ca\u003einEvent\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Linux.Epoll.Buffer",
          "name": "IBuffer",
          "package": "epoll",
          "source": "src/System-Linux-Epoll-Buffer.html#IBuffer",
          "type": "data"
        },
        "index": {
          "description": "Buffer for reading after inEvent",
          "hierarchy": "System Linux Epoll Buffer",
          "module": "System.Linux.Epoll.Buffer",
          "name": "IBuffer",
          "package": "epoll",
          "partial": "IBuffer",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/epoll/docs/System-Linux-Epoll-Buffer.html#t:IBuffer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBuffer for writing after \u003ccode\u003e\u003ca\u003eoutEvent\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Linux.Epoll.Buffer",
          "name": "OBuffer",
          "package": "epoll",
          "source": "src/System-Linux-Epoll-Buffer.html#OBuffer",
          "type": "data"
        },
        "index": {
          "description": "Buffer for writing after outEvent",
          "hierarchy": "System Linux Epoll Buffer",
          "module": "System.Linux.Epoll.Buffer",
          "name": "OBuffer",
          "package": "epoll",
          "partial": "OBuffer",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/epoll/docs/System-Linux-Epoll-Buffer.html#t:OBuffer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAbstract data type for buffer runtime support.\n\u003c/p\u003e",
          "module": "System.Linux.Epoll.Buffer",
          "name": "Runtime",
          "package": "epoll",
          "source": "src/System-Linux-Epoll-Buffer.html#Runtime",
          "type": "data"
        },
        "index": {
          "description": "Abstract data type for buffer runtime support",
          "hierarchy": "System Linux Epoll Buffer",
          "module": "System.Linux.Epoll.Buffer",
          "name": "Runtime",
          "package": "epoll",
          "partial": "Runtime",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/epoll/docs/System-Linux-Epoll-Buffer.html#t:Runtime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConcatenates multiple elements.\n\u003c/p\u003e",
          "module": "System.Linux.Epoll.Buffer",
          "name": "beConcat",
          "package": "epoll",
          "signature": "[a] -\u003e a",
          "source": "src/System-Linux-Epoll-Buffer.html#beConcat",
          "type": "method"
        },
        "index": {
          "description": "Concatenates multiple elements",
          "hierarchy": "System Linux Epoll Buffer",
          "module": "System.Linux.Epoll.Buffer",
          "name": "beConcat",
          "normalized": "[a]-\u003ea",
          "package": "epoll",
          "partial": "Concat",
          "signature": "[a]-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/epoll/docs/System-Linux-Epoll-Buffer.html#v:beConcat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns element minus integer.\n\u003c/p\u003e",
          "module": "System.Linux.Epoll.Buffer",
          "name": "beDrop",
          "package": "epoll",
          "signature": "Int -\u003e a -\u003e a",
          "source": "src/System-Linux-Epoll-Buffer.html#beDrop",
          "type": "method"
        },
        "index": {
          "description": "Returns element minus integer",
          "hierarchy": "System Linux Epoll Buffer",
          "module": "System.Linux.Epoll.Buffer",
          "name": "beDrop",
          "normalized": "Int-\u003ea-\u003ea",
          "package": "epoll",
          "partial": "Drop",
          "signature": "Int-\u003ea-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/epoll/docs/System-Linux-Epoll-Buffer.html#v:beDrop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe length of one element.\n\u003c/p\u003e",
          "module": "System.Linux.Epoll.Buffer",
          "name": "beLength",
          "package": "epoll",
          "signature": "a -\u003e Int",
          "source": "src/System-Linux-Epoll-Buffer.html#beLength",
          "type": "method"
        },
        "index": {
          "description": "The length of one element",
          "hierarchy": "System Linux Epoll Buffer",
          "module": "System.Linux.Epoll.Buffer",
          "name": "beLength",
          "normalized": "a-\u003eInt",
          "package": "epoll",
          "partial": "Length",
          "signature": "a-\u003eInt",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/epoll/docs/System-Linux-Epoll-Buffer.html#v:beLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReads element of given length, returns element and actual length.\n\u003c/p\u003e",
          "module": "System.Linux.Epoll.Buffer",
          "name": "beRead",
          "package": "epoll",
          "signature": "Fd -\u003e Int -\u003e IO (a, Int)",
          "source": "src/System-Linux-Epoll-Buffer.html#beRead",
          "type": "method"
        },
        "index": {
          "description": "Reads element of given length returns element and actual length",
          "hierarchy": "System Linux Epoll Buffer",
          "module": "System.Linux.Epoll.Buffer",
          "name": "beRead",
          "normalized": "Fd-\u003eInt-\u003eIO(a,Int)",
          "package": "epoll",
          "partial": "Read",
          "signature": "Fd-\u003eInt-\u003eIO(a,Int)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/epoll/docs/System-Linux-Epoll-Buffer.html#v:beRead"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrites element to \u003ccode\u003e\u003ca\u003eFd\u003c/a\u003e\u003c/code\u003e, returns written length.\n\u003c/p\u003e",
          "module": "System.Linux.Epoll.Buffer",
          "name": "beWrite",
          "package": "epoll",
          "signature": "Fd -\u003e a -\u003e IO Int",
          "source": "src/System-Linux-Epoll-Buffer.html#beWrite",
          "type": "method"
        },
        "index": {
          "description": "Writes element to Fd returns written length",
          "hierarchy": "System Linux Epoll Buffer",
          "module": "System.Linux.Epoll.Buffer",
          "name": "beWrite",
          "normalized": "Fd-\u003ea-\u003eIO Int",
          "package": "epoll",
          "partial": "Write",
          "signature": "Fd-\u003ea-\u003eIO Int",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/epoll/docs/System-Linux-Epoll-Buffer.html#v:beWrite"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eZero element, e.g. empty string.\n\u003c/p\u003e",
          "module": "System.Linux.Epoll.Buffer",
          "name": "beZero",
          "package": "epoll",
          "signature": "a",
          "source": "src/System-Linux-Epoll-Buffer.html#beZero",
          "type": "method"
        },
        "index": {
          "description": "Zero element e.g empty string",
          "hierarchy": "System Linux Epoll Buffer",
          "module": "System.Linux.Epoll.Buffer",
          "name": "beZero",
          "package": "epoll",
          "partial": "Zero",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/epoll/docs/System-Linux-Epoll-Buffer.html#v:beZero"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClose an IBuffer. Must not be called after \u003ccode\u003e\u003ca\u003eshutdownRuntime\u003c/a\u003e\u003c/code\u003e has been\n invoked.\n\u003c/p\u003e",
          "module": "System.Linux.Epoll.Buffer",
          "name": "closeIBuffer",
          "package": "epoll",
          "signature": "Runtime -\u003e IBuffer a -\u003e IO ()",
          "source": "src/System-Linux-Epoll-Buffer.html#closeIBuffer",
          "type": "function"
        },
        "index": {
          "description": "Close an IBuffer Must not be called after shutdownRuntime has been invoked",
          "hierarchy": "System Linux Epoll Buffer",
          "module": "System.Linux.Epoll.Buffer",
          "name": "closeIBuffer",
          "normalized": "Runtime-\u003eIBuffer a-\u003eIO()",
          "package": "epoll",
          "partial": "IBuffer",
          "signature": "Runtime-\u003eIBuffer a-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/epoll/docs/System-Linux-Epoll-Buffer.html#v:closeIBuffer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClose an OBuffer. Must not be called after \u003ccode\u003e\u003ca\u003eshutdownRuntime\u003c/a\u003e\u003c/code\u003e has been\n invoked.\n\u003c/p\u003e",
          "module": "System.Linux.Epoll.Buffer",
          "name": "closeOBuffer",
          "package": "epoll",
          "signature": "Runtime -\u003e OBuffer a -\u003e IO ()",
          "source": "src/System-Linux-Epoll-Buffer.html#closeOBuffer",
          "type": "function"
        },
        "index": {
          "description": "Close an OBuffer Must not be called after shutdownRuntime has been invoked",
          "hierarchy": "System Linux Epoll Buffer",
          "module": "System.Linux.Epoll.Buffer",
          "name": "closeOBuffer",
          "normalized": "Runtime-\u003eOBuffer a-\u003eIO()",
          "package": "epoll",
          "partial": "OBuffer",
          "signature": "Runtime-\u003eOBuffer a-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/epoll/docs/System-Linux-Epoll-Buffer.html#v:closeOBuffer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate buffer for \u003ccode\u003e\u003ca\u003einEvent\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
          "module": "System.Linux.Epoll.Buffer",
          "name": "createIBuffer",
          "package": "epoll",
          "signature": "Runtime -\u003e Fd -\u003e IO (IBuffer a)",
          "source": "src/System-Linux-Epoll-Buffer.html#createIBuffer",
          "type": "function"
        },
        "index": {
          "description": "Create buffer for inEvent",
          "hierarchy": "System Linux Epoll Buffer",
          "module": "System.Linux.Epoll.Buffer",
          "name": "createIBuffer",
          "normalized": "Runtime-\u003eFd-\u003eIO(IBuffer a)",
          "package": "epoll",
          "partial": "IBuffer",
          "signature": "Runtime-\u003eFd-\u003eIO(IBuffer a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/epoll/docs/System-Linux-Epoll-Buffer.html#v:createIBuffer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate Buffer for \u003ccode\u003e\u003ca\u003eoutEvent\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
          "module": "System.Linux.Epoll.Buffer",
          "name": "createOBuffer",
          "package": "epoll",
          "signature": "Runtime -\u003e Fd -\u003e IO (OBuffer a)",
          "source": "src/System-Linux-Epoll-Buffer.html#createOBuffer",
          "type": "function"
        },
        "index": {
          "description": "Create Buffer for outEvent",
          "hierarchy": "System Linux Epoll Buffer",
          "module": "System.Linux.Epoll.Buffer",
          "name": "createOBuffer",
          "normalized": "Runtime-\u003eFd-\u003eIO(OBuffer a)",
          "package": "epoll",
          "partial": "OBuffer",
          "signature": "Runtime-\u003eFd-\u003eIO(OBuffer a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/epoll/docs/System-Linux-Epoll-Buffer.html#v:createOBuffer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a runtime instance where size denotes the epoll\n device size (cf. \u003ccode\u003e\u003ca\u003ecreate\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "System.Linux.Epoll.Buffer",
          "name": "createRuntime",
          "package": "epoll",
          "signature": "Size -\u003e IO Runtime",
          "source": "src/System-Linux-Epoll-Buffer.html#createRuntime",
          "type": "function"
        },
        "index": {
          "description": "Creates runtime instance where size denotes the epoll device size cf create",
          "hierarchy": "System Linux Epoll Buffer",
          "module": "System.Linux.Epoll.Buffer",
          "name": "createRuntime",
          "normalized": "Size-\u003eIO Runtime",
          "package": "epoll",
          "partial": "Runtime",
          "signature": "Size-\u003eIO Runtime",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/epoll/docs/System-Linux-Epoll-Buffer.html#v:createRuntime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBlocks until buffer is emptied.\n\u003c/p\u003e",
          "module": "System.Linux.Epoll.Buffer",
          "name": "flushBuffer",
          "package": "epoll",
          "signature": "OBuffer a -\u003e IO ()",
          "source": "src/System-Linux-Epoll-Buffer.html#flushBuffer",
          "type": "function"
        },
        "index": {
          "description": "Blocks until buffer is emptied",
          "hierarchy": "System Linux Epoll Buffer",
          "module": "System.Linux.Epoll.Buffer",
          "name": "flushBuffer",
          "normalized": "OBuffer a-\u003eIO()",
          "package": "epoll",
          "partial": "Buffer",
          "signature": "OBuffer a-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/epoll/docs/System-Linux-Epoll-Buffer.html#v:flushBuffer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNon-Blocking read. Returns one chunk if available.\n\u003c/p\u003e",
          "module": "System.Linux.Epoll.Buffer",
          "name": "readAvail",
          "package": "epoll",
          "signature": "IBuffer a -\u003e IO (Maybe a)",
          "source": "src/System-Linux-Epoll-Buffer.html#readAvail",
          "type": "function"
        },
        "index": {
          "description": "Non-Blocking read Returns one chunk if available",
          "hierarchy": "System Linux Epoll Buffer",
          "module": "System.Linux.Epoll.Buffer",
          "name": "readAvail",
          "normalized": "IBuffer a-\u003eIO(Maybe a)",
          "package": "epoll",
          "partial": "Avail",
          "signature": "IBuffer a-\u003eIO(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/epoll/docs/System-Linux-Epoll-Buffer.html#v:readAvail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBlocking read. Lazily returns all available contents from \u003ccode\u003e\u003ca\u003eIBuffer\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Linux.Epoll.Buffer",
          "name": "readBuffer",
          "package": "epoll",
          "signature": "IBuffer a -\u003e IO a",
          "source": "src/System-Linux-Epoll-Buffer.html#readBuffer",
          "type": "function"
        },
        "index": {
          "description": "Blocking read Lazily returns all available contents from IBuffer",
          "hierarchy": "System Linux Epoll Buffer",
          "module": "System.Linux.Epoll.Buffer",
          "name": "readBuffer",
          "normalized": "IBuffer a-\u003eIO a",
          "package": "epoll",
          "partial": "Buffer",
          "signature": "IBuffer a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/epoll/docs/System-Linux-Epoll-Buffer.html#v:readBuffer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBlocking read. Returns one chunk from \u003ccode\u003e\u003ca\u003eIBuffer\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Linux.Epoll.Buffer",
          "name": "readChunk",
          "package": "epoll",
          "signature": "IBuffer a -\u003e IO a",
          "source": "src/System-Linux-Epoll-Buffer.html#readChunk",
          "type": "function"
        },
        "index": {
          "description": "Blocking read Returns one chunk from IBuffer",
          "hierarchy": "System Linux Epoll Buffer",
          "module": "System.Linux.Epoll.Buffer",
          "name": "readChunk",
          "normalized": "IBuffer a-\u003eIO a",
          "package": "epoll",
          "partial": "Chunk",
          "signature": "IBuffer a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/epoll/docs/System-Linux-Epoll-Buffer.html#v:readChunk"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStops event processing and closes this runtime (and the \n underlying epoll device).\n\u003c/p\u003e",
          "module": "System.Linux.Epoll.Buffer",
          "name": "shutdownRuntime",
          "package": "epoll",
          "signature": "Runtime -\u003e IO ()",
          "source": "src/System-Linux-Epoll-Buffer.html#shutdownRuntime",
          "type": "function"
        },
        "index": {
          "description": "Stops event processing and closes this runtime and the underlying epoll device",
          "hierarchy": "System Linux Epoll Buffer",
          "module": "System.Linux.Epoll.Buffer",
          "name": "shutdownRuntime",
          "normalized": "Runtime-\u003eIO()",
          "package": "epoll",
          "partial": "Runtime",
          "signature": "Runtime-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/epoll/docs/System-Linux-Epoll-Buffer.html#v:shutdownRuntime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eException safe wrapper which creates an IBuffer, passes it to the provided\n function and closes it afterwards.\n\u003c/p\u003e",
          "module": "System.Linux.Epoll.Buffer",
          "name": "withIBuffer",
          "package": "epoll",
          "signature": "Runtime -\u003e Fd -\u003e (IBuffer a -\u003e IO b) -\u003e IO b",
          "source": "src/System-Linux-Epoll-Buffer.html#withIBuffer",
          "type": "function"
        },
        "index": {
          "description": "Exception safe wrapper which creates an IBuffer passes it to the provided function and closes it afterwards",
          "hierarchy": "System Linux Epoll Buffer",
          "module": "System.Linux.Epoll.Buffer",
          "name": "withIBuffer",
          "normalized": "Runtime-\u003eFd-\u003e(IBuffer a-\u003eIO b)-\u003eIO b",
          "package": "epoll",
          "partial": "IBuffer",
          "signature": "Runtime-\u003eFd-\u003e(IBuffer a-\u003eIO b)-\u003eIO b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/epoll/docs/System-Linux-Epoll-Buffer.html#v:withIBuffer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eException safe wrapper which creates an OBuffer, passes it to the provided\n function and flushes and closes it afterwards.\n\u003c/p\u003e",
          "module": "System.Linux.Epoll.Buffer",
          "name": "withOBuffer",
          "package": "epoll",
          "signature": "Runtime -\u003e Fd -\u003e (OBuffer a -\u003e IO b) -\u003e IO b",
          "source": "src/System-Linux-Epoll-Buffer.html#withOBuffer",
          "type": "function"
        },
        "index": {
          "description": "Exception safe wrapper which creates an OBuffer passes it to the provided function and flushes and closes it afterwards",
          "hierarchy": "System Linux Epoll Buffer",
          "module": "System.Linux.Epoll.Buffer",
          "name": "withOBuffer",
          "normalized": "Runtime-\u003eFd-\u003e(OBuffer a-\u003eIO b)-\u003eIO b",
          "package": "epoll",
          "partial": "OBuffer",
          "signature": "Runtime-\u003eFd-\u003e(OBuffer a-\u003eIO b)-\u003eIO b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/epoll/docs/System-Linux-Epoll-Buffer.html#v:withOBuffer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNon-Blocking write. Writes value to buffer which will asynchronously be\n written to file descriptor.\n\u003c/p\u003e",
          "module": "System.Linux.Epoll.Buffer",
          "name": "writeBuffer",
          "package": "epoll",
          "signature": "OBuffer a -\u003e a -\u003e IO ()",
          "source": "src/System-Linux-Epoll-Buffer.html#writeBuffer",
          "type": "function"
        },
        "index": {
          "description": "Non-Blocking write Writes value to buffer which will asynchronously be written to file descriptor",
          "hierarchy": "System Linux Epoll Buffer",
          "module": "System.Linux.Epoll.Buffer",
          "name": "writeBuffer",
          "normalized": "OBuffer a-\u003ea-\u003eIO()",
          "package": "epoll",
          "partial": "Buffer",
          "signature": "OBuffer a-\u003ea-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/epoll/docs/System-Linux-Epoll-Buffer.html#v:writeBuffer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eEventLoop's can be used to get notified when certain events occur on a file\n descriptor. One can add callback functions for any \u003ccode\u003e\u003ca\u003eEventType\u003c/a\u003e\u003c/code\u003e combination.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.Linux.Epoll.EventLoop",
          "name": "EventLoop",
          "package": "epoll",
          "source": "src/System-Linux-Epoll-EventLoop.html",
          "type": "module"
        },
        "index": {
          "description": "EventLoop can be used to get notified when certain events occur on file descriptor One can add callback functions for any EventType combination",
          "hierarchy": "System Linux Epoll EventLoop",
          "module": "System.Linux.Epoll.EventLoop",
          "name": "EventLoop",
          "package": "epoll",
          "partial": "Event Loop",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/epoll/docs/System-Linux-Epoll-EventLoop.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAbstract data type holding bookeeping info.\n\u003c/p\u003e",
          "module": "System.Linux.Epoll.EventLoop",
          "name": "Callback",
          "package": "epoll",
          "source": "src/System-Linux-Epoll-EventLoop.html#Callback",
          "type": "data"
        },
        "index": {
          "description": "Abstract data type holding bookeeping info",
          "hierarchy": "System Linux Epoll EventLoop",
          "module": "System.Linux.Epoll.EventLoop",
          "name": "Callback",
          "package": "epoll",
          "partial": "Callback",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/epoll/docs/System-Linux-Epoll-EventLoop.html#t:Callback"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCallback function type\n\u003c/p\u003e",
          "module": "System.Linux.Epoll.EventLoop",
          "name": "CallbackFn",
          "package": "epoll",
          "source": "src/System-Linux-Epoll-EventLoop.html#CallbackFn",
          "type": "type"
        },
        "index": {
          "description": "Callback function type",
          "hierarchy": "System Linux Epoll EventLoop",
          "module": "System.Linux.Epoll.EventLoop",
          "name": "CallbackFn",
          "package": "epoll",
          "partial": "Callback Fn",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/epoll/docs/System-Linux-Epoll-EventLoop.html#t:CallbackFn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Linux.Epoll.EventLoop",
          "name": "Data",
          "package": "epoll",
          "source": "src/System-Linux-Epoll-EventLoop.html#Data",
          "type": "data"
        },
        "index": {
          "hierarchy": "System Linux Epoll EventLoop",
          "module": "System.Linux.Epoll.EventLoop",
          "name": "Data",
          "package": "epoll",
          "partial": "Data",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/epoll/docs/System-Linux-Epoll-EventLoop.html#t:Data"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAbstract data type.\n\u003c/p\u003e",
          "module": "System.Linux.Epoll.EventLoop",
          "name": "EventLoop",
          "package": "epoll",
          "source": "src/System-Linux-Epoll-EventLoop.html#EventLoop",
          "type": "data"
        },
        "index": {
          "description": "Abstract data type",
          "hierarchy": "System Linux Epoll EventLoop",
          "module": "System.Linux.Epoll.EventLoop",
          "name": "EventLoop",
          "package": "epoll",
          "partial": "Event Loop",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/epoll/docs/System-Linux-Epoll-EventLoop.html#t:EventLoop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Linux.Epoll.EventLoop",
          "name": "EventMap",
          "package": "epoll",
          "source": "src/System-Linux-Epoll-EventLoop.html#EventMap",
          "type": "type"
        },
        "index": {
          "hierarchy": "System Linux Epoll EventLoop",
          "module": "System.Linux.Epoll.EventLoop",
          "name": "EventMap",
          "package": "epoll",
          "partial": "Event Map",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/epoll/docs/System-Linux-Epoll-EventLoop.html#t:EventMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdds a callback for the given file descriptor to this event loop. The event\n map specifies for each event type which function to call. event types might\n be combined using \u003ccode\u003e\u003ca\u003ecombineEvents\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Linux.Epoll.EventLoop",
          "name": "addCallback",
          "package": "epoll",
          "signature": "EventLoop -\u003e Fd -\u003e EventMap -\u003e IO Callback",
          "source": "src/System-Linux-Epoll-EventLoop.html#addCallback",
          "type": "function"
        },
        "index": {
          "description": "Adds callback for the given file descriptor to this event loop The event map specifies for each event type which function to call event types might be combined using combineEvents",
          "hierarchy": "System Linux Epoll EventLoop",
          "module": "System.Linux.Epoll.EventLoop",
          "name": "addCallback",
          "normalized": "EventLoop-\u003eFd-\u003eEventMap-\u003eIO Callback",
          "package": "epoll",
          "partial": "Callback",
          "signature": "EventLoop-\u003eFd-\u003eEventMap-\u003eIO Callback",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/epoll/docs/System-Linux-Epoll-EventLoop.html#v:addCallback"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA combination of \u003ccode\u003e\u003ca\u003epeerCloseEvent\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eerrorEvent\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ehangupEvent\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Linux.Epoll.EventLoop",
          "name": "closeEvents",
          "package": "epoll",
          "signature": "EventType",
          "source": "src/System-Linux-Epoll-EventLoop.html#closeEvents",
          "type": "function"
        },
        "index": {
          "description": "combination of peerCloseEvent errorEvent hangupEvent",
          "hierarchy": "System Linux Epoll EventLoop",
          "module": "System.Linux.Epoll.EventLoop",
          "name": "closeEvents",
          "package": "epoll",
          "partial": "Events",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/epoll/docs/System-Linux-Epoll-EventLoop.html#v:closeEvents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate one event loop which handles up to \u003ccode\u003e\u003ca\u003eSize\u003c/a\u003e\u003c/code\u003e events per call to epoll's\n \u003ccode\u003e\u003ca\u003ewait\u003c/a\u003e\u003c/code\u003e. An event loop runs until \u003ccode\u003e\u003ca\u003estopEventLoop\u003c/a\u003e\u003c/code\u003e is invoked, calling \u003ccode\u003e\u003ca\u003ewait\u003c/a\u003e\u003c/code\u003e\n with a max timeout of 500ms before it waits again.\n\u003c/p\u003e",
          "module": "System.Linux.Epoll.EventLoop",
          "name": "createEventLoop",
          "package": "epoll",
          "signature": "Size -\u003e IO EventLoop",
          "source": "src/System-Linux-Epoll-EventLoop.html#createEventLoop",
          "type": "function"
        },
        "index": {
          "description": "Create one event loop which handles up to Size events per call to epoll wait An event loop runs until stopEventLoop is invoked calling wait with max timeout of ms before it waits again",
          "hierarchy": "System Linux Epoll EventLoop",
          "module": "System.Linux.Epoll.EventLoop",
          "name": "createEventLoop",
          "normalized": "Size-\u003eIO EventLoop",
          "package": "epoll",
          "partial": "Event Loop",
          "signature": "Size-\u003eIO EventLoop",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/epoll/docs/System-Linux-Epoll-EventLoop.html#v:createEventLoop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIn case you use \u003ccode\u003e\u003ca\u003eoneShotEvent\u003c/a\u003e\u003c/code\u003e you can re-enable a callback after the event\n occured. Otherwise no further events will be reported. Cf. epoll(7) for\n details.\n\u003c/p\u003e",
          "module": "System.Linux.Epoll.EventLoop",
          "name": "reEnableCallback",
          "package": "epoll",
          "signature": "Device -\u003e Data -\u003e Descriptor Data -\u003e IO ()",
          "source": "src/System-Linux-Epoll-EventLoop.html#reEnableCallback",
          "type": "function"
        },
        "index": {
          "description": "In case you use oneShotEvent you can re-enable callback after the event occured Otherwise no further events will be reported Cf epoll for details",
          "hierarchy": "System Linux Epoll EventLoop",
          "module": "System.Linux.Epoll.EventLoop",
          "name": "reEnableCallback",
          "normalized": "Device-\u003eData-\u003eDescriptor Data-\u003eIO()",
          "package": "epoll",
          "partial": "Enable Callback",
          "signature": "Device-\u003eData-\u003eDescriptor Data-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/epoll/docs/System-Linux-Epoll-EventLoop.html#v:reEnableCallback"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemoves the callback obtained from \u003ccode\u003e\u003ca\u003eaddCallback\u003c/a\u003e\u003c/code\u003e from this event loop. Note\n that you must not call \u003ccode\u003e\u003ca\u003estopEventLoop\u003c/a\u003e\u003c/code\u003e before invoking this function.\n\u003c/p\u003e",
          "module": "System.Linux.Epoll.EventLoop",
          "name": "removeCallback",
          "package": "epoll",
          "signature": "EventLoop -\u003e Callback -\u003e IO ()",
          "source": "src/System-Linux-Epoll-EventLoop.html#removeCallback",
          "type": "function"
        },
        "index": {
          "description": "Removes the callback obtained from addCallback from this event loop Note that you must not call stopEventLoop before invoking this function",
          "hierarchy": "System Linux Epoll EventLoop",
          "module": "System.Linux.Epoll.EventLoop",
          "name": "removeCallback",
          "normalized": "EventLoop-\u003eCallback-\u003eIO()",
          "package": "epoll",
          "partial": "Callback",
          "signature": "EventLoop-\u003eCallback-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/epoll/docs/System-Linux-Epoll-EventLoop.html#v:removeCallback"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTerminates the event loop and cleans resources. Note that one can only\n remove callbacks from an eventloop while it is running, so make sure you call\n this function after all \u003ccode\u003e\u003ca\u003eremoveCallback\u003c/a\u003e\u003c/code\u003e calls.\n\u003c/p\u003e",
          "module": "System.Linux.Epoll.EventLoop",
          "name": "stopEventLoop",
          "package": "epoll",
          "signature": "EventLoop -\u003e IO ()",
          "source": "src/System-Linux-Epoll-EventLoop.html#stopEventLoop",
          "type": "function"
        },
        "index": {
          "description": "Terminates the event loop and cleans resources Note that one can only remove callbacks from an eventloop while it is running so make sure you call this function after all removeCallback calls",
          "hierarchy": "System Linux Epoll EventLoop",
          "module": "System.Linux.Epoll.EventLoop",
          "name": "stopEventLoop",
          "normalized": "EventLoop-\u003eIO()",
          "package": "epoll",
          "partial": "Event Loop",
          "signature": "EventLoop-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/epoll/docs/System-Linux-Epoll-EventLoop.html#v:stopEventLoop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eRe-exports all the public interfaces of \u003ccode\u003eBase\u003c/code\u003e,\n \u003ccode\u003eBuffer\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eEventLoop\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.Linux.Epoll",
          "name": "Epoll",
          "package": "epoll",
          "source": "src/System-Linux-Epoll.html",
          "type": "module"
        },
        "index": {
          "description": "Re-exports all the public interfaces of Base Buffer and EventLoop",
          "hierarchy": "System Linux Epoll",
          "module": "System.Linux.Epoll",
          "name": "Epoll",
          "package": "epoll",
          "partial": "Epoll",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/epoll/docs/System-Linux-Epoll.html#"
      }
    }
  ]
]