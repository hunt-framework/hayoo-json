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
        "word": "debian-binary"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides functions to do an action and undo it after a function\n passed as paramaeter is executed.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.Debian.Binary.Utils.Temp",
          "name": "Temp",
          "package": "debian-binary",
          "source": "src/System-Debian-Binary-Utils-Temp.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides functions to do an action and undo it after function passed as paramaeter is executed",
          "hierarchy": "System Debian Binary Utils Temp",
          "module": "System.Debian.Binary.Utils.Temp",
          "name": "Temp",
          "package": "debian-binary",
          "partial": "Temp",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/debian-binary/docs/System-Debian-Binary-Utils-Temp.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChanges the current directory to \u003ccode\u003edirectory\u003c/code\u003e, executes \u003ccode\u003eaction\u003c/code\u003e, and then\n changes the current directory to the original one.\n\u003c/p\u003e",
          "module": "System.Debian.Binary.Utils.Temp",
          "name": "cdTemp",
          "package": "debian-binary",
          "signature": "FilePath-\u003e IO result-\u003e IO result",
          "type": "function"
        },
        "index": {
          "description": "Changes the current directory to directory executes action and then changes the current directory to the original one",
          "hierarchy": "System Debian Binary Utils Temp",
          "module": "System.Debian.Binary.Utils.Temp",
          "name": "cdTemp",
          "normalized": "FilePath-\u003eIO a-\u003eIO a",
          "package": "debian-binary",
          "partial": "Temp",
          "signature": "FilePath-\u003eIO result-\u003eIO result",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/debian-binary/docs/System-Debian-Binary-Utils-Temp.html#v:cdTemp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtracts a gziped \u003ccode\u003efile\u003c/code\u003e, executes \u003ccode\u003eaction\u003c/code\u003e and compact it again.\n\u003c/p\u003e",
          "module": "System.Debian.Binary.Utils.Temp",
          "name": "gzipTemp",
          "package": "debian-binary",
          "signature": "FilePath-\u003e IO result-\u003e IO result",
          "type": "function"
        },
        "index": {
          "description": "Extracts gziped file executes action and compact it again",
          "hierarchy": "System Debian Binary Utils Temp",
          "module": "System.Debian.Binary.Utils.Temp",
          "name": "gzipTemp",
          "normalized": "FilePath-\u003eIO a-\u003eIO a",
          "package": "debian-binary",
          "partial": "Temp",
          "signature": "FilePath-\u003eIO result-\u003eIO result",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/debian-binary/docs/System-Debian-Binary-Utils-Temp.html#v:gzipTemp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUtility function that runs \u003ccode\u003e\u003ca\u003emkdirTemp\u003c/a\u003e\u003c/code\u003e inside a \u003ccode\u003e\u003ca\u003ecdTemp\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Debian.Binary.Utils.Temp",
          "name": "mkdirCdTemp",
          "package": "debian-binary",
          "signature": "FilePath -\u003e IO a -\u003e IO a",
          "source": "src/System-Debian-Binary-Utils-Temp.html#mkdirCdTemp",
          "type": "function"
        },
        "index": {
          "description": "Utility function that runs mkdirTemp inside cdTemp",
          "hierarchy": "System Debian Binary Utils Temp",
          "module": "System.Debian.Binary.Utils.Temp",
          "name": "mkdirCdTemp",
          "normalized": "FilePath-\u003eIO a-\u003eIO a",
          "package": "debian-binary",
          "partial": "Cd Temp",
          "signature": "FilePath-\u003eIO a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/debian-binary/docs/System-Debian-Binary-Utils-Temp.html#v:mkdirCdTemp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a \u003ccode\u003edirectory\u003c/code\u003e, executes \u003ccode\u003eaction\u003c/code\u003e, then removes it and all its\n contents.\n\u003c/p\u003e",
          "module": "System.Debian.Binary.Utils.Temp",
          "name": "mkdirTemp",
          "package": "debian-binary",
          "signature": "FilePath-\u003e IO result-\u003e IO result",
          "type": "function"
        },
        "index": {
          "description": "Creates directory executes action then removes it and all its contents",
          "hierarchy": "System Debian Binary Utils Temp",
          "module": "System.Debian.Binary.Utils.Temp",
          "name": "mkdirTemp",
          "normalized": "FilePath-\u003eIO a-\u003eIO a",
          "package": "debian-binary",
          "partial": "Temp",
          "signature": "FilePath-\u003eIO result-\u003eIO result",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/debian-binary/docs/System-Debian-Binary-Utils-Temp.html#v:mkdirTemp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides utility functions to work with Debian binary packages.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.Debian.Binary.Utils",
          "name": "Utils",
          "package": "debian-binary",
          "source": "src/System-Debian-Binary-Utils.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides utility functions to work with Debian binary packages",
          "hierarchy": "System Debian Binary Utils",
          "module": "System.Debian.Binary.Utils",
          "name": "Utils",
          "package": "debian-binary",
          "partial": "Utils",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/debian-binary/docs/System-Debian-Binary-Utils.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead a \u003ccode\u003efile\u003c/code\u003e strictly.\n\u003c/p\u003e",
          "module": "System.Debian.Binary.Utils",
          "name": "strictReadFile",
          "package": "debian-binary",
          "signature": "FilePath-\u003e IO String",
          "type": "function"
        },
        "index": {
          "description": "Read file strictly",
          "hierarchy": "System Debian Binary Utils",
          "module": "System.Debian.Binary.Utils",
          "name": "strictReadFile",
          "normalized": "FilePath-\u003eIO String",
          "package": "debian-binary",
          "partial": "Read File",
          "signature": "FilePath-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/debian-binary/docs/System-Debian-Binary-Utils.html#v:strictReadFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides functions to work with Debian binary packages.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.Debian.Binary",
          "name": "Binary",
          "package": "debian-binary",
          "source": "src/System-Debian-Binary.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides functions to work with Debian binary packages",
          "hierarchy": "System Debian Binary",
          "module": "System.Debian.Binary",
          "name": "Binary",
          "package": "debian-binary",
          "partial": "Binary",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/debian-binary/docs/System-Debian-Binary.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract the package name of a debian \u003ccode\u003efilename\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Debian.Binary",
          "name": "packageName",
          "package": "debian-binary",
          "signature": "FilePath-\u003e String",
          "type": "function"
        },
        "index": {
          "description": "Extract the package name of debian filename",
          "hierarchy": "System Debian Binary",
          "module": "System.Debian.Binary",
          "name": "packageName",
          "normalized": "FilePath-\u003eString",
          "package": "debian-binary",
          "partial": "Name",
          "signature": "FilePath-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/debian-binary/docs/System-Debian-Binary.html#v:packageName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtracts \u003ccode\u003epackage\u003c/code\u003e in \u003ccode\u003e/tmp/debian-binary\u003c/code\u003e, runs \u003ccode\u003eaction\u003c/code\u003e and repacks\n \u003ccode\u003epackage\u003c/code\u003e in \u003ccode\u003e/tmp/package\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Debian.Binary",
          "name": "updatePackage",
          "package": "debian-binary",
          "signature": "FilePath-\u003e IO ()-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Extracts package in tmp debian-binary runs action and repacks package in tmp package",
          "hierarchy": "System Debian Binary",
          "module": "System.Debian.Binary",
          "name": "updatePackage",
          "normalized": "FilePath-\u003eIO()-\u003eIO()",
          "package": "debian-binary",
          "partial": "Package",
          "signature": "FilePath-\u003eIO()-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/debian-binary/docs/System-Debian-Binary.html#v:updatePackage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtracts \u003ccode\u003epackage\u003c/code\u003e in \u003ccode\u003e/tmp/debian-binary\u003c/code\u003e and runs \u003ccode\u003eaction\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Debian.Binary",
          "name": "withPackage",
          "package": "debian-binary",
          "signature": "FilePath-\u003e IO ()-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Extracts package in tmp debian-binary and runs action",
          "hierarchy": "System Debian Binary",
          "module": "System.Debian.Binary",
          "name": "withPackage",
          "normalized": "FilePath-\u003eIO()-\u003eIO()",
          "package": "debian-binary",
          "partial": "Package",
          "signature": "FilePath-\u003eIO()-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/debian-binary/docs/System-Debian-Binary.html#v:withPackage"
      }
    }
  ]
]