[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/filesystem-enumerator/docs/Filesystem-Enumerator.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eEnumerator-based API for manipulating the filesystem.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Filesystem.Enumerator",
        "fct-package": "filesystem-enumerator",
        "fct-signature": "module",
        "fct-source": "src/Filesystem-Enumerator.html",
        "fct-type": "module",
        "title": "Enumerator"
      },
      "index": {
        "description": "Enumerator-based API for manipulating the filesystem",
        "hierarchy": "Filesystem Enumerator",
        "module": "Filesystem.Enumerator",
        "name": "Enumerator",
        "normalized": "",
        "package": "filesystem-enumerator",
        "partial": "Enumerator",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/filesystem-enumerator/docs/Filesystem-Enumerator.html#v:enumDirectory",
      "description": {
        "fct-descr": "\u003cp\u003eEnumerate entries in a directory. Entries are returned with their full\n path. Entries are read from the directory handle as needed, so this is safe\n to use with very large directories.\n\u003c/p\u003e",
        "fct-module": "Filesystem.Enumerator",
        "fct-package": "filesystem-enumerator",
        "fct-signature": "FilePath -\u003e Enumerator FilePath IO a",
        "fct-source": "src/Filesystem-Enumerator.html#enumDirectory",
        "fct-type": "function",
        "title": "enumDirectory"
      },
      "index": {
        "description": "Enumerate entries in directory Entries are returned with their full path Entries are read from the directory handle as needed so this is safe to use with very large directories",
        "hierarchy": "Filesystem Enumerator",
        "module": "Filesystem.Enumerator",
        "name": "enumDirectory",
        "normalized": "FilePath-\u003eEnumerator FilePath IO a",
        "package": "filesystem-enumerator",
        "partial": "Directory",
        "signature": "FilePath-\u003eEnumerator FilePath IO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/filesystem-enumerator/docs/Filesystem-Enumerator.html#v:traverse",
      "description": {
        "fct-descr": "\u003cp\u003eStarting at some root directory, traverse the filesystem and enumerate\n every file (or symlink to a file) found.\n\u003c/p\u003e\u003cp\u003eNote: the option of whether to follow symlinks is currently only checked\n on POSIX platforms, as the \u003ccode\u003eWin32\u003c/code\u003e package does not support querying\n symlink status. On Windows, symlinks will always be followed.\n\u003c/p\u003e",
        "fct-module": "Filesystem.Enumerator",
        "fct-package": "filesystem-enumerator",
        "fct-signature": "Bool-\u003e FilePath-\u003e Enumerator FilePath m a",
        "fct-type": "function",
        "title": "traverse"
      },
      "index": {
        "description": "Starting at some root directory traverse the filesystem and enumerate every file or symlink to file found Note the option of whether to follow symlinks is currently only checked on POSIX platforms as the Win32 package does not support querying symlink status On Windows symlinks will always be followed",
        "hierarchy": "Filesystem Enumerator",
        "module": "Filesystem.Enumerator",
        "name": "traverse",
        "normalized": "Bool-\u003eFilePath-\u003eEnumerator FilePath a b",
        "package": "filesystem-enumerator",
        "partial": "",
        "signature": "Bool-\u003eFilePath-\u003eEnumerator FilePath m a"
      }
    }
  }
]