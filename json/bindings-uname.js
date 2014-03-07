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
        "word": "bindings-uname"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bindings.Uname",
          "name": "Uname",
          "package": "bindings-uname",
          "source": "src/Bindings-Uname.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Bindings Uname",
          "module": "Bindings.Uname",
          "name": "Uname",
          "package": "bindings-uname",
          "partial": "Uname",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/bindings-uname/docs/Bindings-Uname.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bindings.Uname",
          "name": "Utsname",
          "package": "bindings-uname",
          "source": "src/Bindings-Uname.html#Utsname",
          "type": "data"
        },
        "index": {
          "hierarchy": "Bindings Uname",
          "module": "Bindings.Uname",
          "name": "Utsname",
          "package": "bindings-uname",
          "partial": "Utsname",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/bindings-uname/docs/Bindings-Uname.html#t:Utsname"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bindings.Uname",
          "name": "machine",
          "package": "bindings-uname",
          "signature": "Ptr Utsname -\u003e CString",
          "source": "src/Bindings-Uname.html#machine",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bindings Uname",
          "module": "Bindings.Uname",
          "name": "machine",
          "normalized": "Ptr Utsname-\u003eCString",
          "package": "bindings-uname",
          "signature": "Ptr Utsname-\u003eCString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bindings-uname/docs/Bindings-Uname.html#v:machine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bindings.Uname",
          "name": "nodename",
          "package": "bindings-uname",
          "signature": "Ptr Utsname -\u003e CString",
          "source": "src/Bindings-Uname.html#nodename",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bindings Uname",
          "module": "Bindings.Uname",
          "name": "nodename",
          "normalized": "Ptr Utsname-\u003eCString",
          "package": "bindings-uname",
          "signature": "Ptr Utsname-\u003eCString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bindings-uname/docs/Bindings-Uname.html#v:nodename"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bindings.Uname",
          "name": "release",
          "package": "bindings-uname",
          "signature": "Ptr Utsname -\u003e CString",
          "source": "src/Bindings-Uname.html#release",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bindings Uname",
          "module": "Bindings.Uname",
          "name": "release",
          "normalized": "Ptr Utsname-\u003eCString",
          "package": "bindings-uname",
          "signature": "Ptr Utsname-\u003eCString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bindings-uname/docs/Bindings-Uname.html#v:release"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bindings.Uname",
          "name": "sysname",
          "package": "bindings-uname",
          "signature": "Ptr Utsname -\u003e CString",
          "source": "src/Bindings-Uname.html#sysname",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bindings Uname",
          "module": "Bindings.Uname",
          "name": "sysname",
          "normalized": "Ptr Utsname-\u003eCString",
          "package": "bindings-uname",
          "signature": "Ptr Utsname-\u003eCString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bindings-uname/docs/Bindings-Uname.html#v:sysname"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003euname\u003c/a\u003e\u003c/code\u003e name\u003c/code\u003e stores nul-terminated strings of information\n   identifying the current system info to the structure referenced\n   by name.\n\u003c/p\u003e\u003cpre\u003e import Foreign.C\n import Foreign.Marshal\n\n sysName :: IO String\n sysName = alloca $ \\ ptr -\u003e\n           do throwErrnoIfMinus1_ \"uname\" $ uname ptr\n              peekCString $ sysname ptr\n\u003c/pre\u003e",
          "module": "Bindings.Uname",
          "name": "uname",
          "package": "bindings-uname",
          "signature": "Ptr Utsname -\u003e IO CInt",
          "source": "src/Bindings-Uname.html#uname",
          "type": "function"
        },
        "index": {
          "description": "uname name stores nul-terminated strings of information identifying the current system info to the structure referenced by name import Foreign.C import Foreign.Marshal sysName IO String sysName alloca ptr do throwErrnoIfMinus1 uname uname ptr peekCString sysname ptr",
          "hierarchy": "Bindings Uname",
          "module": "Bindings.Uname",
          "name": "uname",
          "normalized": "Ptr Utsname-\u003eIO CInt",
          "package": "bindings-uname",
          "signature": "Ptr Utsname-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bindings-uname/docs/Bindings-Uname.html#v:uname"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bindings.Uname",
          "name": "version",
          "package": "bindings-uname",
          "signature": "Ptr Utsname -\u003e CString",
          "source": "src/Bindings-Uname.html#version",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bindings Uname",
          "module": "Bindings.Uname",
          "name": "version",
          "normalized": "Ptr Utsname-\u003eCString",
          "package": "bindings-uname",
          "signature": "Ptr Utsname-\u003eCString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bindings-uname/docs/Bindings-Uname.html#v:version"
      }
    }
  ]
]