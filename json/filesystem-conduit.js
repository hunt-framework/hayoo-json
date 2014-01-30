[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/filesystem-conduit/docs/Data-Conduit-Filesystem.html#",
      "description": {
        "fct-module": "Data.Conduit.Filesystem",
        "fct-package": "filesystem-conduit",
        "fct-signature": "module",
        "fct-source": "src/Data-Conduit-Filesystem.html",
        "fct-type": "module",
        "title": "Filesystem"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Conduit Filesystem",
        "module": "Data.Conduit.Filesystem",
        "name": "Filesystem",
        "normalized": "",
        "package": "filesystem-conduit",
        "partial": "Filesystem",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/filesystem-conduit/docs/Data-Conduit-Filesystem.html#v:sinkFile",
      "description": {
        "fct-descr": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003esinkFile\u003c/a\u003e\u003c/code\u003e, but uses system-filepath's \u003ccode\u003eFilePath\u003c/code\u003e type.\n\u003c/p\u003e",
        "fct-module": "Data.Conduit.Filesystem",
        "fct-package": "filesystem-conduit",
        "fct-signature": "FilePath -\u003e Consumer ByteString m ()",
        "fct-source": "src/Data-Conduit-Filesystem.html#sinkFile",
        "fct-type": "function",
        "title": "sinkFile"
      },
      "index": {
        "description": "Same as sinkFile but uses system-filepath FilePath type",
        "hierarchy": "Data Conduit Filesystem",
        "module": "Data.Conduit.Filesystem",
        "name": "sinkFile",
        "normalized": "FilePath-\u003eConsumer ByteString a()",
        "package": "filesystem-conduit",
        "partial": "File",
        "signature": "FilePath-\u003eConsumer ByteString m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/filesystem-conduit/docs/Data-Conduit-Filesystem.html#v:sourceFile",
      "description": {
        "fct-descr": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003esourceFile\u003c/a\u003e\u003c/code\u003e, but uses system-filepath's \u003ccode\u003eFilePath\u003c/code\u003e type.\n\u003c/p\u003e",
        "fct-module": "Data.Conduit.Filesystem",
        "fct-package": "filesystem-conduit",
        "fct-signature": "FilePath -\u003e Producer m ByteString",
        "fct-source": "src/Data-Conduit-Filesystem.html#sourceFile",
        "fct-type": "function",
        "title": "sourceFile"
      },
      "index": {
        "description": "Same as sourceFile but uses system-filepath FilePath type",
        "hierarchy": "Data Conduit Filesystem",
        "module": "Data.Conduit.Filesystem",
        "name": "sourceFile",
        "normalized": "FilePath-\u003eProducer a ByteString",
        "package": "filesystem-conduit",
        "partial": "File",
        "signature": "FilePath-\u003eProducer m ByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/filesystem-conduit/docs/Data-Conduit-Filesystem.html#v:traverse",
      "description": {
        "fct-descr": "\u003cp\u003eStarting at some root directory, traverse the filesystem and enumerate\n every file (or symlink to a file) found.\n\u003c/p\u003e\u003cp\u003eNote: the option of whether to follow symlinks is currently only checked\n on POSIX platforms, as the \u003ccode\u003eWin32\u003c/code\u003e package does not support querying\n symlink status. On Windows, symlinks will always be followed.\n\u003c/p\u003e",
        "fct-module": "Data.Conduit.Filesystem",
        "fct-package": "filesystem-conduit",
        "fct-signature": "Bool-\u003e FilePath-\u003e Producer m FilePath",
        "fct-type": "function",
        "title": "traverse"
      },
      "index": {
        "description": "Starting at some root directory traverse the filesystem and enumerate every file or symlink to file found Note the option of whether to follow symlinks is currently only checked on POSIX platforms as the Win32 package does not support querying symlink status On Windows symlinks will always be followed",
        "hierarchy": "Data Conduit Filesystem",
        "module": "Data.Conduit.Filesystem",
        "name": "traverse",
        "normalized": "Bool-\u003eFilePath-\u003eProducer a FilePath",
        "package": "filesystem-conduit",
        "partial": "",
        "signature": "Bool-\u003eFilePath-\u003eProducer m FilePath"
      }
    }
  }
]