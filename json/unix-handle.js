[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unix-handle/docs/System-Posix-Handle.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides versions of functions from\n \u003ca\u003eSystem.Posix.Files\u003c/a\u003e that operate on \u003ccode\u003e\u003ca\u003eHandle\u003c/a\u003e\u003c/code\u003e instead of \u003ccode\u003e\u003ca\u003eFilePath\u003c/a\u003e\u003c/code\u003e\n or \u003ccode\u003e\u003ca\u003eFd\u003c/a\u003e\u003c/code\u003e.  This is useful to prevent race conditions that may arise\n from looking up the same path twice.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "System.Posix.Handle",
        "fct-package": "unix-handle",
        "fct-signature": "module",
        "fct-source": "src/System-Posix-Handle.html",
        "fct-type": "module",
        "title": "Handle"
      },
      "index": {
        "description": "This module provides versions of functions from System.Posix.Files that operate on Handle instead of FilePath or Fd This is useful to prevent race conditions that may arise from looking up the same path twice",
        "hierarchy": "System Posix Handle",
        "module": "System.Posix.Handle",
        "name": "Handle",
        "normalized": "",
        "package": "unix-handle",
        "partial": "Handle",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unix-handle/docs/System-Posix-Handle.html#v:hGetPathVar",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003ehGetPathVar var h\u003c/code\u003e acts like \u003ccode\u003e\u003ca\u003egetPathVar\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003egetFdPathVar\u003c/a\u003e\u003c/code\u003e on a\n \u003ccode\u003e\u003ca\u003eHandle\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNote: calls \u003ccode\u003efpathconf\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.Posix.Handle",
        "fct-package": "unix-handle",
        "fct-signature": "PathVar -\u003e Handle -\u003e IO Limit",
        "fct-source": "src/System-Posix-Handle.html#hGetPathVar",
        "fct-type": "function",
        "title": "hGetPathVar"
      },
      "index": {
        "description": "hGetPathVar var acts like getPathVar or getFdPathVar on Handle Note calls fpathconf",
        "hierarchy": "System Posix Handle",
        "module": "System.Posix.Handle",
        "name": "hGetPathVar",
        "normalized": "PathVar-\u003eHandle-\u003eIO Limit",
        "package": "unix-handle",
        "partial": "Get Path Var",
        "signature": "PathVar-\u003eHandle-\u003eIO Limit"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unix-handle/docs/System-Posix-Handle.html#v:hGetStatus",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003ehGetStatus h\u003c/code\u003e acts like \u003ccode\u003e\u003ca\u003egetFileStatus\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003egetFdStatus\u003c/a\u003e\u003c/code\u003e on a\n \u003ccode\u003e\u003ca\u003eHandle\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNote: calls \u003ccode\u003efstat\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.Posix.Handle",
        "fct-package": "unix-handle",
        "fct-signature": "Handle -\u003e IO FileStatus",
        "fct-source": "src/System-Posix-Handle.html#hGetStatus",
        "fct-type": "function",
        "title": "hGetStatus"
      },
      "index": {
        "description": "hGetStatus acts like getFileStatus or getFdStatus on Handle Note calls fstat",
        "hierarchy": "System Posix Handle",
        "module": "System.Posix.Handle",
        "name": "hGetStatus",
        "normalized": "Handle-\u003eIO FileStatus",
        "package": "unix-handle",
        "partial": "Get Status",
        "signature": "Handle-\u003eIO FileStatus"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unix-handle/docs/System-Posix-Handle.html#v:hSetMode",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003ehSetMode h mode\u003c/code\u003e acts like \u003ccode\u003e\u003ca\u003esetFileMode\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003esetFdMode\u003c/a\u003e\u003c/code\u003e on a\n \u003ccode\u003e\u003ca\u003eHandle\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNote: calls \u003ccode\u003efchmod\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.Posix.Handle",
        "fct-package": "unix-handle",
        "fct-signature": "Handle -\u003e FileMode -\u003e IO ()",
        "fct-source": "src/System-Posix-Handle.html#hSetMode",
        "fct-type": "function",
        "title": "hSetMode"
      },
      "index": {
        "description": "hSetMode mode acts like setFileMode or setFdMode on Handle Note calls fchmod",
        "hierarchy": "System Posix Handle",
        "module": "System.Posix.Handle",
        "name": "hSetMode",
        "normalized": "Handle-\u003eFileMode-\u003eIO()",
        "package": "unix-handle",
        "partial": "Set Mode",
        "signature": "Handle-\u003eFileMode-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unix-handle/docs/System-Posix-Handle.html#v:hSetOwnerAndGroup",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003ehSetOwnerAndGroup h uid gid\u003c/code\u003e acts like \u003ccode\u003e\u003ca\u003esetOwnerAndGroup\u003c/a\u003e\u003c/code\u003e or\n \u003ccode\u003e\u003ca\u003esetFdOwnerAndGroup\u003c/a\u003e\u003c/code\u003e on a \u003ccode\u003e\u003ca\u003eHandle\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNote: calls \u003ccode\u003efchown\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.Posix.Handle",
        "fct-package": "unix-handle",
        "fct-signature": "Handle -\u003e UserID -\u003e GroupID -\u003e IO ()",
        "fct-source": "src/System-Posix-Handle.html#hSetOwnerAndGroup",
        "fct-type": "function",
        "title": "hSetOwnerAndGroup"
      },
      "index": {
        "description": "hSetOwnerAndGroup uid gid acts like setOwnerAndGroup or setFdOwnerAndGroup on Handle Note calls fchown",
        "hierarchy": "System Posix Handle",
        "module": "System.Posix.Handle",
        "name": "hSetOwnerAndGroup",
        "normalized": "Handle-\u003eUserID-\u003eGroupID-\u003eIO()",
        "package": "unix-handle",
        "partial": "Set Owner And Group",
        "signature": "Handle-\u003eUserID-\u003eGroupID-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unix-handle/docs/System-Posix-Handle.html#v:hSetSize",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003ehSetSize h size\u003c/code\u003e acts like \u003ccode\u003e\u003ca\u003esetFileSize\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003esetFdSize\u003c/a\u003e\u003c/code\u003e on a\n \u003ccode\u003e\u003ca\u003eHandle\u003c/a\u003e\u003c/code\u003e.  It is equivalent to \u003ccode\u003e\u003ca\u003ehSetFileSize\u003c/a\u003e\u003c/code\u003e but is provided here\n for completeness.\n\u003c/p\u003e",
        "fct-module": "System.Posix.Handle",
        "fct-package": "unix-handle",
        "fct-signature": "Handle -\u003e FileOffset -\u003e IO ()",
        "fct-source": "src/System-Posix-Handle.html#hSetSize",
        "fct-type": "function",
        "title": "hSetSize"
      },
      "index": {
        "description": "hSetSize size acts like setFileSize or setFdSize on Handle It is equivalent to hSetFileSize but is provided here for completeness",
        "hierarchy": "System Posix Handle",
        "module": "System.Posix.Handle",
        "name": "hSetSize",
        "normalized": "Handle-\u003eFileOffset-\u003eIO()",
        "package": "unix-handle",
        "partial": "Set Size",
        "signature": "Handle-\u003eFileOffset-\u003eIO()"
      }
    }
  }
]