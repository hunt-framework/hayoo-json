[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hackage-db/docs/Distribution-Hackage-DB.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides simple access to the Hackage database by means\n   of \u003ccode\u003e\u003ca\u003eMap\u003c/a\u003e\u003c/code\u003e. Note that once the database has been parsed, it can be\n   accessed quickly, but the inital cost of reading \u003ccode\u003e00-index.tar\u003c/code\u003e is\n   fairly high.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Distribution.Hackage.DB",
        "fct-package": "hackage-db",
        "fct-signature": "module",
        "fct-source": "src/Distribution-Hackage-DB.html",
        "fct-type": "module",
        "title": "DB"
      },
      "index": {
        "description": "This module provides simple access to the Hackage database by means of Map Note that once the database has been parsed it can be accessed quickly but the inital cost of reading index.tar is fairly high",
        "hierarchy": "Distribution Hackage DB",
        "module": "Distribution.Hackage.DB",
        "name": "DB",
        "normalized": "",
        "package": "hackage-db",
        "partial": "DB",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hackage-db/docs/Distribution-Hackage-DB.html#t:Hackage",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eMap\u003c/a\u003e\u003c/code\u003e representation of the Hackage database. For sake of\n simplicity, we use \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e rather than \u003ccode\u003e\u003ca\u003ePackageName\u003c/a\u003e\u003c/code\u003e to represent\n the name of a package.\n\u003c/p\u003e",
        "fct-module": "Distribution.Hackage.DB",
        "fct-package": "hackage-db",
        "fct-signature": "type",
        "fct-source": "src/Distribution-Hackage-DB.html#Hackage",
        "fct-type": "type",
        "title": "Hackage"
      },
      "index": {
        "description": "Map representation of the Hackage database For sake of simplicity we use String rather than PackageName to represent the name of package",
        "hierarchy": "Distribution Hackage DB",
        "module": "Distribution.Hackage.DB",
        "name": "Hackage",
        "normalized": "",
        "package": "hackage-db",
        "partial": "Hackage",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hackage-db/docs/Distribution-Hackage-DB.html#v:parseHackage",
      "description": {
        "fct-descr": "\u003cp\u003eParse the contents of Hackage's \u003ccode\u003e00-index.tar\u003c/code\u003e into a \u003ccode\u003e\u003ca\u003eHackage\u003c/a\u003e\u003c/code\u003e map.\n\u003c/p\u003e",
        "fct-module": "Distribution.Hackage.DB",
        "fct-package": "hackage-db",
        "fct-signature": "ByteString -\u003e Hackage",
        "fct-source": "src/Distribution-Hackage-DB.html#parseHackage",
        "fct-type": "function",
        "title": "parseHackage"
      },
      "index": {
        "description": "Parse the contents of Hackage index.tar into Hackage map",
        "hierarchy": "Distribution Hackage DB",
        "module": "Distribution.Hackage.DB",
        "name": "parseHackage",
        "normalized": "ByteString-\u003eHackage",
        "package": "hackage-db",
        "partial": "Hackage",
        "signature": "ByteString-\u003eHackage"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hackage-db/docs/Distribution-Hackage-DB.html#v:readHackage",
      "description": {
        "fct-descr": "\u003cp\u003eRead the Hackage database from\n \u003ccode\u003e$HOME/\u003c/code\u003e\u003cem\u003e\u003cpackage database path\u003e\u003c/em\u003e\u003ccode\u003e/hackage.haskell.org/00-index.tar\u003c/code\u003e and\n return a \u003ccode\u003e\u003ca\u003eMap\u003c/a\u003e\u003c/code\u003e that provides fast access to its contents. That \u003ccode\u003etar\u003c/code\u003e\n file is typically created by running the command \u003ccode\u003e\"cabal update\"\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Distribution.Hackage.DB",
        "fct-package": "hackage-db",
        "fct-signature": "IO Hackage",
        "fct-source": "src/Distribution-Hackage-DB.html#readHackage",
        "fct-type": "function",
        "title": "readHackage"
      },
      "index": {
        "description": "Read the Hackage database from HOME package database path hackage.haskell.org index.tar and return Map that provides fast access to its contents That tar file is typically created by running the command cabal update",
        "hierarchy": "Distribution Hackage DB",
        "module": "Distribution.Hackage.DB",
        "name": "readHackage",
        "normalized": "",
        "package": "hackage-db",
        "partial": "Hackage",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hackage-db/docs/Distribution-Hackage-DB.html#v:readHackage-39-",
      "description": {
        "fct-descr": "\u003cp\u003eRead the Hackage database from the given \u003ccode\u003e\u003ca\u003eFilePath\u003c/a\u003e\u003c/code\u003e and return a\n \u003ccode\u003e\u003ca\u003eHackage\u003c/a\u003e\u003c/code\u003e map that provides fast access to its contents.\n\u003c/p\u003e",
        "fct-module": "Distribution.Hackage.DB",
        "fct-package": "hackage-db",
        "fct-signature": "FilePath -\u003e IO Hackage",
        "fct-source": "src/Distribution-Hackage-DB.html#readHackage%27",
        "fct-type": "function",
        "title": "readHackage'"
      },
      "index": {
        "description": "Read the Hackage database from the given FilePath and return Hackage map that provides fast access to its contents",
        "hierarchy": "Distribution Hackage DB",
        "module": "Distribution.Hackage.DB",
        "name": "readHackage'",
        "normalized": "FilePath-\u003eIO Hackage",
        "package": "hackage-db",
        "partial": "Hackage'",
        "signature": "FilePath-\u003eIO Hackage"
      }
    }
  }
]