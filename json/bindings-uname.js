[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bindings-uname/docs/Bindings-Uname.html#",
      "description": {
        "fct-module": "Bindings.Uname",
        "fct-package": "bindings-uname",
        "fct-signature": "module",
        "fct-source": "src/Bindings-Uname.html",
        "fct-type": "module",
        "title": "Uname"
      },
      "index": {
        "description": "",
        "hierarchy": "Bindings Uname",
        "module": "Bindings.Uname",
        "name": "Uname",
        "normalized": "",
        "package": "bindings-uname",
        "partial": "Uname",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bindings-uname/docs/Bindings-Uname.html#t:Utsname",
      "description": {
        "fct-module": "Bindings.Uname",
        "fct-package": "bindings-uname",
        "fct-signature": "data",
        "fct-source": "src/Bindings-Uname.html#Utsname",
        "fct-type": "data",
        "title": "Utsname"
      },
      "index": {
        "description": "",
        "hierarchy": "Bindings Uname",
        "module": "Bindings.Uname",
        "name": "Utsname",
        "normalized": "",
        "package": "bindings-uname",
        "partial": "Utsname",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bindings-uname/docs/Bindings-Uname.html#v:machine",
      "description": {
        "fct-module": "Bindings.Uname",
        "fct-package": "bindings-uname",
        "fct-signature": "Ptr Utsname -\u003e CString",
        "fct-source": "src/Bindings-Uname.html#machine",
        "fct-type": "function",
        "title": "machine"
      },
      "index": {
        "description": "",
        "hierarchy": "Bindings Uname",
        "module": "Bindings.Uname",
        "name": "machine",
        "normalized": "Ptr Utsname-\u003eCString",
        "package": "bindings-uname",
        "partial": "",
        "signature": "Ptr Utsname-\u003eCString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bindings-uname/docs/Bindings-Uname.html#v:nodename",
      "description": {
        "fct-module": "Bindings.Uname",
        "fct-package": "bindings-uname",
        "fct-signature": "Ptr Utsname -\u003e CString",
        "fct-source": "src/Bindings-Uname.html#nodename",
        "fct-type": "function",
        "title": "nodename"
      },
      "index": {
        "description": "",
        "hierarchy": "Bindings Uname",
        "module": "Bindings.Uname",
        "name": "nodename",
        "normalized": "Ptr Utsname-\u003eCString",
        "package": "bindings-uname",
        "partial": "",
        "signature": "Ptr Utsname-\u003eCString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bindings-uname/docs/Bindings-Uname.html#v:release",
      "description": {
        "fct-module": "Bindings.Uname",
        "fct-package": "bindings-uname",
        "fct-signature": "Ptr Utsname -\u003e CString",
        "fct-source": "src/Bindings-Uname.html#release",
        "fct-type": "function",
        "title": "release"
      },
      "index": {
        "description": "",
        "hierarchy": "Bindings Uname",
        "module": "Bindings.Uname",
        "name": "release",
        "normalized": "Ptr Utsname-\u003eCString",
        "package": "bindings-uname",
        "partial": "",
        "signature": "Ptr Utsname-\u003eCString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bindings-uname/docs/Bindings-Uname.html#v:sysname",
      "description": {
        "fct-module": "Bindings.Uname",
        "fct-package": "bindings-uname",
        "fct-signature": "Ptr Utsname -\u003e CString",
        "fct-source": "src/Bindings-Uname.html#sysname",
        "fct-type": "function",
        "title": "sysname"
      },
      "index": {
        "description": "",
        "hierarchy": "Bindings Uname",
        "module": "Bindings.Uname",
        "name": "sysname",
        "normalized": "Ptr Utsname-\u003eCString",
        "package": "bindings-uname",
        "partial": "",
        "signature": "Ptr Utsname-\u003eCString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bindings-uname/docs/Bindings-Uname.html#v:uname",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003euname\u003c/a\u003e\u003c/code\u003e name\u003c/code\u003e stores nul-terminated strings of information\n   identifying the current system info to the structure referenced\n   by name.\n\u003c/p\u003e\u003cpre\u003e import Foreign.C\n import Foreign.Marshal\n\n sysName :: IO String\n sysName = alloca $ \\ ptr -\u003e\n           do throwErrnoIfMinus1_ \"uname\" $ uname ptr\n              peekCString $ sysname ptr\n\u003c/pre\u003e",
        "fct-module": "Bindings.Uname",
        "fct-package": "bindings-uname",
        "fct-signature": "Ptr Utsname -\u003e IO CInt",
        "fct-source": "src/Bindings-Uname.html#uname",
        "fct-type": "function",
        "title": "uname"
      },
      "index": {
        "description": "uname name stores nul-terminated strings of information identifying the current system info to the structure referenced by name import Foreign.C import Foreign.Marshal sysName IO String sysName alloca ptr do throwErrnoIfMinus1 uname uname ptr peekCString sysname ptr",
        "hierarchy": "Bindings Uname",
        "module": "Bindings.Uname",
        "name": "uname",
        "normalized": "Ptr Utsname-\u003eIO CInt",
        "package": "bindings-uname",
        "partial": "",
        "signature": "Ptr Utsname-\u003eIO CInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bindings-uname/docs/Bindings-Uname.html#v:version",
      "description": {
        "fct-module": "Bindings.Uname",
        "fct-package": "bindings-uname",
        "fct-signature": "Ptr Utsname -\u003e CString",
        "fct-source": "src/Bindings-Uname.html#version",
        "fct-type": "function",
        "title": "version"
      },
      "index": {
        "description": "",
        "hierarchy": "Bindings Uname",
        "module": "Bindings.Uname",
        "name": "version",
        "normalized": "Ptr Utsname-\u003eCString",
        "package": "bindings-uname",
        "partial": "",
        "signature": "Ptr Utsname-\u003eCString"
      }
    }
  }
]