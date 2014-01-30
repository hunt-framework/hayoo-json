[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-eventsource/docs/Yesod-EventSource.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module contains everything that you need to support\n server-sent events in Yesod applications.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Yesod.EventSource",
        "fct-package": "yesod-eventsource",
        "fct-signature": "module",
        "fct-source": "src/Yesod-EventSource.html",
        "fct-type": "module",
        "title": "EventSource"
      },
      "index": {
        "description": "This module contains everything that you need to support server-sent events in Yesod applications",
        "hierarchy": "Yesod EventSource",
        "module": "Yesod.EventSource",
        "name": "EventSource",
        "normalized": "",
        "package": "yesod-eventsource",
        "partial": "Event Source",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-eventsource/docs/Yesod-EventSource.html#t:EventSourcePolyfill",
      "description": {
        "fct-descr": "\u003cp\u003eWhich \u003ccode\u003eEventSource\u003c/code\u003e polyfill was detected (if any).\n\u003c/p\u003e",
        "fct-module": "Yesod.EventSource",
        "fct-package": "yesod-eventsource",
        "fct-signature": "data",
        "fct-source": "src/Yesod-EventSource.html#EventSourcePolyfill",
        "fct-type": "data",
        "title": "EventSourcePolyfill"
      },
      "index": {
        "description": "Which EventSource polyfill was detected if any",
        "hierarchy": "Yesod EventSource",
        "module": "Yesod.EventSource",
        "name": "EventSourcePolyfill",
        "normalized": "",
        "package": "yesod-eventsource",
        "partial": "Event Source Polyfill",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-eventsource/docs/Yesod-EventSource.html#v:NoESPolyfill",
      "description": {
        "fct-descr": "\u003cp\u003eWe didn't detect any \u003ccode\u003eEventSource\u003c/code\u003e polyfill that we know.\n\u003c/p\u003e",
        "fct-module": "Yesod.EventSource",
        "fct-package": "yesod-eventsource",
        "fct-signature": "NoESPolyfill",
        "fct-source": "src/Yesod-EventSource.html#EventSourcePolyfill",
        "fct-type": "function",
        "title": "NoESPolyfill"
      },
      "index": {
        "description": "We didn detect any EventSource polyfill that we know",
        "hierarchy": "Yesod EventSource",
        "module": "Yesod.EventSource",
        "name": "NoESPolyfill",
        "normalized": "",
        "package": "yesod-eventsource",
        "partial": "No ESPolyfill",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-eventsource/docs/Yesod-EventSource.html#v:Remy-39-sESPolyfill",
      "description": {
        "fct-descr": "\u003cp\u003eSee\n \u003ca\u003ehttps://github.com/remy/polyfills/blob/master/EventSource.js\u003c/a\u003e.\n In order to support Remy's polyfill, your server needs to\n explicitly close the connection from time to\n time--browsers such as IE7 will not show any event until\n the connection is closed.\n\u003c/p\u003e",
        "fct-module": "Yesod.EventSource",
        "fct-package": "yesod-eventsource",
        "fct-signature": "Remy'sESPolyfill",
        "fct-source": "src/Yesod-EventSource.html#EventSourcePolyfill",
        "fct-type": "function",
        "title": "Remy'sESPolyfill"
      },
      "index": {
        "description": "See https github.com remy polyfills blob master EventSource.js In order to support Remy polyfill your server needs to explicitly close the connection from time to time--browsers such as IE7 will not show any event until the connection is closed",
        "hierarchy": "Yesod EventSource",
        "module": "Yesod.EventSource",
        "name": "Remy'sESPolyfill",
        "normalized": "",
        "package": "yesod-eventsource",
        "partial": "Remy's ESPolyfill",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-eventsource/docs/Yesod-EventSource.html#v:ioToRepEventSource",
      "description": {
        "fct-descr": "\u003cp\u003eReturn a Server-Sent Event stream given an \u003ccode\u003eIO\u003c/code\u003e action that\n is repeatedly called.  A state is threaded for the action so\n that it may avoid using \u003ccode\u003eIORefs\u003c/code\u003e.  The \u003ccode\u003eIO\u003c/code\u003e action may sleep\n or block while waiting for more data.  The HTTP socket is\n flushed after every list of simultaneous events.  The\n connection is closed as soon as an \u003ccode\u003e\u003ca\u003eCloseEvent\u003c/a\u003e\u003c/code\u003e is\n outputted, after which no other events are sent to the client.\n\u003c/p\u003e",
        "fct-module": "Yesod.EventSource",
        "fct-package": "yesod-eventsource",
        "fct-signature": "s -\u003e (EventSourcePolyfill -\u003e s -\u003e IO ([ServerEvent], s)) -\u003e HandlerT site IO TypedContent",
        "fct-source": "src/Yesod-EventSource.html#ioToRepEventSource",
        "fct-type": "function",
        "title": "ioToRepEventSource"
      },
      "index": {
        "description": "Return Server-Sent Event stream given an IO action that is repeatedly called state is threaded for the action so that it may avoid using IORefs The IO action may sleep or block while waiting for more data The HTTP socket is flushed after every list of simultaneous events The connection is closed as soon as an CloseEvent is outputted after which no other events are sent to the client",
        "hierarchy": "Yesod EventSource",
        "module": "Yesod.EventSource",
        "name": "ioToRepEventSource",
        "normalized": "a-\u003e(EventSourcePolyfill-\u003ea-\u003eIO([ServerEvent],a))-\u003eHandlerT b IO TypedContent",
        "package": "yesod-eventsource",
        "partial": "To Rep Event Source",
        "signature": "s-\u003e(EventSourcePolyfill-\u003es-\u003eIO([ServerEvent],s))-\u003eHandlerT site IO TypedContent"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-eventsource/docs/Yesod-EventSource.html#v:pollingEventSource",
      "description": {
        "fct-descr": "\u003cp\u003eReturn a Server-Sent Event stream given a \u003ccode\u003e\u003ca\u003eHandlerT\u003c/a\u003e\u003c/code\u003e action\n that is repeatedly called.  A state is threaded for the action\n so that it may avoid using \u003ccode\u003eIORefs\u003c/code\u003e.  The \u003ccode\u003eHandlerT\u003c/code\u003e action\n may sleep or block while waiting for more data.  The HTTP\n socket is flushed after every list of simultaneous events.\n The connection is closed as soon as an \u003ccode\u003e\u003ca\u003eCloseEvent\u003c/a\u003e\u003c/code\u003e is\n outputted, after which no other events are sent to the client.\n\u003c/p\u003e",
        "fct-module": "Yesod.EventSource",
        "fct-package": "yesod-eventsource",
        "fct-signature": "s -\u003e (EventSourcePolyfill -\u003e s -\u003e HandlerT site IO ([ServerEvent], s)) -\u003e HandlerT site IO TypedContent",
        "fct-source": "src/Yesod-EventSource.html#pollingEventSource",
        "fct-type": "function",
        "title": "pollingEventSource"
      },
      "index": {
        "description": "Return Server-Sent Event stream given HandlerT action that is repeatedly called state is threaded for the action so that it may avoid using IORefs The HandlerT action may sleep or block while waiting for more data The HTTP socket is flushed after every list of simultaneous events The connection is closed as soon as an CloseEvent is outputted after which no other events are sent to the client",
        "hierarchy": "Yesod EventSource",
        "module": "Yesod.EventSource",
        "name": "pollingEventSource",
        "normalized": "a-\u003e(EventSourcePolyfill-\u003ea-\u003eHandlerT b IO([ServerEvent],a))-\u003eHandlerT b IO TypedContent",
        "package": "yesod-eventsource",
        "partial": "Event Source",
        "signature": "s-\u003e(EventSourcePolyfill-\u003es-\u003eHandlerT site IO([ServerEvent],s))-\u003eHandlerT site IO TypedContent"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-eventsource/docs/Yesod-EventSource.html#v:repEventSource",
      "description": {
        "fct-descr": "\u003cp\u003eReturns a Server-Sent Event stream from a \u003ccode\u003e\u003ca\u003eSource\u003c/a\u003e\u003c/code\u003e of\n \u003ccode\u003e\u003ca\u003eServerEvent\u003c/a\u003e\u003c/code\u003e\u003ccode\u003es\u003c/code\u003e.  The HTTP socket is flushed after every\n event.  The connection is closed either when the \u003ccode\u003e\u003ca\u003eSource\u003c/a\u003e\u003c/code\u003e\n finishes outputting data or a \u003ccode\u003e\u003ca\u003eCloseEvent\u003c/a\u003e\u003c/code\u003e is outputted,\n whichever comes first.\n\u003c/p\u003e",
        "fct-module": "Yesod.EventSource",
        "fct-package": "yesod-eventsource",
        "fct-signature": "(EventSourcePolyfill -\u003e Source (HandlerT site IO) ServerEvent) -\u003e HandlerT site IO TypedContent",
        "fct-source": "src/Yesod-EventSource.html#repEventSource",
        "fct-type": "function",
        "title": "repEventSource"
      },
      "index": {
        "description": "Returns Server-Sent Event stream from Source of ServerEvent The HTTP socket is flushed after every event The connection is closed either when the Source finishes outputting data or CloseEvent is outputted whichever comes first",
        "hierarchy": "Yesod EventSource",
        "module": "Yesod.EventSource",
        "name": "repEventSource",
        "normalized": "(EventSourcePolyfill-\u003eSource(HandlerT a IO)ServerEvent)-\u003eHandlerT a IO TypedContent",
        "package": "yesod-eventsource",
        "partial": "Event Source",
        "signature": "(EventSourcePolyfill-\u003eSource(HandlerT site IO)ServerEvent)-\u003eHandlerT site IO TypedContent"
      }
    }
  }
]