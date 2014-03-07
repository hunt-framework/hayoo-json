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
        "word": "filesystem-conduit"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Conduit.Filesystem",
          "name": "Filesystem",
          "package": "filesystem-conduit",
          "source": "src/Data-Conduit-Filesystem.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Conduit Filesystem",
          "module": "Data.Conduit.Filesystem",
          "name": "Filesystem",
          "package": "filesystem-conduit",
          "partial": "Filesystem",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/filesystem-conduit/docs/Data-Conduit-Filesystem.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003esinkFile\u003c/a\u003e\u003c/code\u003e, but uses system-filepath's \u003ccode\u003eFilePath\u003c/code\u003e type.\n\u003c/p\u003e",
          "module": "Data.Conduit.Filesystem",
          "name": "sinkFile",
          "package": "filesystem-conduit",
          "signature": "FilePath -\u003e Consumer ByteString m ()",
          "source": "src/Data-Conduit-Filesystem.html#sinkFile",
          "type": "function"
        },
        "index": {
          "description": "Same as sinkFile but uses system-filepath FilePath type",
          "hierarchy": "Data Conduit Filesystem",
          "module": "Data.Conduit.Filesystem",
          "name": "sinkFile",
          "normalized": "FilePath-\u003eConsumer ByteString a()",
          "package": "filesystem-conduit",
          "partial": "File",
          "signature": "FilePath-\u003eConsumer ByteString m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/filesystem-conduit/docs/Data-Conduit-Filesystem.html#v:sinkFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003esourceFile\u003c/a\u003e\u003c/code\u003e, but uses system-filepath's \u003ccode\u003eFilePath\u003c/code\u003e type.\n\u003c/p\u003e",
          "module": "Data.Conduit.Filesystem",
          "name": "sourceFile",
          "package": "filesystem-conduit",
          "signature": "FilePath -\u003e Producer m ByteString",
          "source": "src/Data-Conduit-Filesystem.html#sourceFile",
          "type": "function"
        },
        "index": {
          "description": "Same as sourceFile but uses system-filepath FilePath type",
          "hierarchy": "Data Conduit Filesystem",
          "module": "Data.Conduit.Filesystem",
          "name": "sourceFile",
          "normalized": "FilePath-\u003eProducer a ByteString",
          "package": "filesystem-conduit",
          "partial": "File",
          "signature": "FilePath-\u003eProducer m ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/filesystem-conduit/docs/Data-Conduit-Filesystem.html#v:sourceFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStarting at some root directory, traverse the filesystem and enumerate\n every file (or symlink to a file) found.\n\u003c/p\u003e\u003cp\u003eNote: the option of whether to follow symlinks is currently only checked\n on POSIX platforms, as the \u003ccode\u003eWin32\u003c/code\u003e package does not support querying\n symlink status. On Windows, symlinks will always be followed.\n\u003c/p\u003e",
          "module": "Data.Conduit.Filesystem",
          "name": "traverse",
          "package": "filesystem-conduit",
          "signature": "Bool-\u003e FilePath-\u003e Producer m FilePath",
          "type": "function"
        },
        "index": {
          "description": "Starting at some root directory traverse the filesystem and enumerate every file or symlink to file found Note the option of whether to follow symlinks is currently only checked on POSIX platforms as the Win32 package does not support querying symlink status On Windows symlinks will always be followed",
          "hierarchy": "Data Conduit Filesystem",
          "module": "Data.Conduit.Filesystem",
          "name": "traverse",
          "normalized": "Bool-\u003eFilePath-\u003eProducer a FilePath",
          "package": "filesystem-conduit",
          "signature": "Bool-\u003eFilePath-\u003eProducer m FilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/filesystem-conduit/docs/Data-Conduit-Filesystem.html#v:traverse"
      }
    }
  ]
]