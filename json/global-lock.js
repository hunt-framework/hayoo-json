[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/global-lock/docs/System-GlobalLock-Internal.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eInternals of global locking.\n\u003c/p\u003e\u003cp\u003eUse with caution!\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "System.GlobalLock.Internal",
        "fct-package": "global-lock",
        "fct-signature": "module",
        "fct-source": "src/System-GlobalLock-Internal.html",
        "fct-type": "module",
        "title": "Internal"
      },
      "index": {
        "description": "Internals of global locking Use with caution",
        "hierarchy": "System GlobalLock Internal",
        "module": "System.GlobalLock.Internal",
        "name": "Internal",
        "normalized": "",
        "package": "global-lock",
        "partial": "Internal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/global-lock/docs/System-GlobalLock-Internal.html#v:get",
      "description": {
        "fct-descr": "\u003cp\u003eGet the single \u003ccode\u003e\u003ccode\u003e\u003ca\u003eMVar\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e used for global locking.\n\u003c/p\u003e",
        "fct-module": "System.GlobalLock.Internal",
        "fct-package": "global-lock",
        "fct-signature": "IO (MVar ())",
        "fct-source": "src/System-GlobalLock-Internal.html#get",
        "fct-type": "function",
        "title": "get"
      },
      "index": {
        "description": "Get the single MVar used for global locking",
        "hierarchy": "System GlobalLock Internal",
        "module": "System.GlobalLock.Internal",
        "name": "get",
        "normalized": "IO(MVar())",
        "package": "global-lock",
        "partial": "",
        "signature": "IO(MVar())"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/global-lock/docs/System-GlobalLock.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eProvides a single global lock for \u003ccode\u003e\u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e actions.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "System.GlobalLock",
        "fct-package": "global-lock",
        "fct-signature": "module",
        "fct-source": "src/System-GlobalLock.html",
        "fct-type": "module",
        "title": "GlobalLock"
      },
      "index": {
        "description": "Provides single global lock for IO actions",
        "hierarchy": "System GlobalLock",
        "module": "System.GlobalLock",
        "name": "GlobalLock",
        "normalized": "",
        "package": "global-lock",
        "partial": "Global Lock",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/global-lock/docs/System-GlobalLock.html#v:lock",
      "description": {
        "fct-descr": "\u003cp\u003eTake the global lock for the duration of an \u003ccode\u003e\u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e action.\n\u003c/p\u003e\u003cp\u003eTwo actions executed via \u003ccode\u003e\u003ccode\u003e\u003ca\u003elock\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e will never run simultaneously.\n\u003c/p\u003e",
        "fct-module": "System.GlobalLock",
        "fct-package": "global-lock",
        "fct-signature": "IO a -\u003e IO a",
        "fct-source": "src/System-GlobalLock.html#lock",
        "fct-type": "function",
        "title": "lock"
      },
      "index": {
        "description": "Take the global lock for the duration of an IO action Two actions executed via lock will never run simultaneously",
        "hierarchy": "System GlobalLock",
        "module": "System.GlobalLock",
        "name": "lock",
        "normalized": "IO a-\u003eIO a",
        "package": "global-lock",
        "partial": "",
        "signature": "IO a-\u003eIO a"
      }
    }
  }
]