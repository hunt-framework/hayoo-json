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
        "word": "global-lock"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eInternals of global locking.\n\u003c/p\u003e\u003cp\u003eUse with caution!\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.GlobalLock.Internal",
          "name": "Internal",
          "package": "global-lock",
          "source": "src/System-GlobalLock-Internal.html",
          "type": "module"
        },
        "index": {
          "description": "Internals of global locking Use with caution",
          "hierarchy": "System GlobalLock Internal",
          "module": "System.GlobalLock.Internal",
          "name": "Internal",
          "package": "global-lock",
          "partial": "Internal",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/global-lock/docs/System-GlobalLock-Internal.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the single \u003ccode\u003e\u003ccode\u003e\u003ca\u003eMVar\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e used for global locking.\n\u003c/p\u003e",
          "module": "System.GlobalLock.Internal",
          "name": "get",
          "package": "global-lock",
          "signature": "IO (MVar ())",
          "source": "src/System-GlobalLock-Internal.html#get",
          "type": "function"
        },
        "index": {
          "description": "Get the single MVar used for global locking",
          "hierarchy": "System GlobalLock Internal",
          "module": "System.GlobalLock.Internal",
          "name": "get",
          "normalized": "IO(MVar())",
          "package": "global-lock",
          "signature": "IO(MVar())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/global-lock/docs/System-GlobalLock-Internal.html#v:get"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eProvides a single global lock for \u003ccode\u003e\u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e actions.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.GlobalLock",
          "name": "GlobalLock",
          "package": "global-lock",
          "source": "src/System-GlobalLock.html",
          "type": "module"
        },
        "index": {
          "description": "Provides single global lock for IO actions",
          "hierarchy": "System GlobalLock",
          "module": "System.GlobalLock",
          "name": "GlobalLock",
          "package": "global-lock",
          "partial": "Global Lock",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/global-lock/docs/System-GlobalLock.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTake the global lock for the duration of an \u003ccode\u003e\u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e action.\n\u003c/p\u003e\u003cp\u003eTwo actions executed via \u003ccode\u003e\u003ccode\u003e\u003ca\u003elock\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e will never run simultaneously.\n\u003c/p\u003e",
          "module": "System.GlobalLock",
          "name": "lock",
          "package": "global-lock",
          "signature": "IO a -\u003e IO a",
          "source": "src/System-GlobalLock.html#lock",
          "type": "function"
        },
        "index": {
          "description": "Take the global lock for the duration of an IO action Two actions executed via lock will never run simultaneously",
          "hierarchy": "System GlobalLock",
          "module": "System.GlobalLock",
          "name": "lock",
          "normalized": "IO a-\u003eIO a",
          "package": "global-lock",
          "signature": "IO a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/global-lock/docs/System-GlobalLock.html#v:lock"
      }
    }
  ]
]