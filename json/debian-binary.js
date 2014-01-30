[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/debian-binary/docs/System-Debian-Binary-Utils-Temp.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides functions to do an action and undo it after a function\n passed as paramaeter is executed.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "System.Debian.Binary.Utils.Temp",
        "fct-package": "debian-binary",
        "fct-signature": "module",
        "fct-source": "src/System-Debian-Binary-Utils-Temp.html",
        "fct-type": "module",
        "title": "Temp"
      },
      "index": {
        "description": "This module provides functions to do an action and undo it after function passed as paramaeter is executed",
        "hierarchy": "System Debian Binary Utils Temp",
        "module": "System.Debian.Binary.Utils.Temp",
        "name": "Temp",
        "normalized": "",
        "package": "debian-binary",
        "partial": "Temp",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/debian-binary/docs/System-Debian-Binary-Utils-Temp.html#v:cdTemp",
      "description": {
        "fct-descr": "\u003cp\u003eChanges the current directory to \u003ccode\u003edirectory\u003c/code\u003e, executes \u003ccode\u003eaction\u003c/code\u003e, and then\n changes the current directory to the original one.\n\u003c/p\u003e",
        "fct-module": "System.Debian.Binary.Utils.Temp",
        "fct-package": "debian-binary",
        "fct-signature": "FilePath-\u003e IO result-\u003e IO result",
        "fct-type": "function",
        "title": "cdTemp"
      },
      "index": {
        "description": "Changes the current directory to directory executes action and then changes the current directory to the original one",
        "hierarchy": "System Debian Binary Utils Temp",
        "module": "System.Debian.Binary.Utils.Temp",
        "name": "cdTemp",
        "normalized": "FilePath-\u003eIO a-\u003eIO a",
        "package": "debian-binary",
        "partial": "Temp",
        "signature": "FilePath-\u003eIO result-\u003eIO result"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/debian-binary/docs/System-Debian-Binary-Utils-Temp.html#v:gzipTemp",
      "description": {
        "fct-descr": "\u003cp\u003eExtracts a gziped \u003ccode\u003efile\u003c/code\u003e, executes \u003ccode\u003eaction\u003c/code\u003e and compact it again.\n\u003c/p\u003e",
        "fct-module": "System.Debian.Binary.Utils.Temp",
        "fct-package": "debian-binary",
        "fct-signature": "FilePath-\u003e IO result-\u003e IO result",
        "fct-type": "function",
        "title": "gzipTemp"
      },
      "index": {
        "description": "Extracts gziped file executes action and compact it again",
        "hierarchy": "System Debian Binary Utils Temp",
        "module": "System.Debian.Binary.Utils.Temp",
        "name": "gzipTemp",
        "normalized": "FilePath-\u003eIO a-\u003eIO a",
        "package": "debian-binary",
        "partial": "Temp",
        "signature": "FilePath-\u003eIO result-\u003eIO result"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/debian-binary/docs/System-Debian-Binary-Utils-Temp.html#v:mkdirCdTemp",
      "description": {
        "fct-descr": "\u003cp\u003eUtility function that runs \u003ccode\u003e\u003ca\u003emkdirTemp\u003c/a\u003e\u003c/code\u003e inside a \u003ccode\u003e\u003ca\u003ecdTemp\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.Debian.Binary.Utils.Temp",
        "fct-package": "debian-binary",
        "fct-signature": "FilePath -\u003e IO a -\u003e IO a",
        "fct-source": "src/System-Debian-Binary-Utils-Temp.html#mkdirCdTemp",
        "fct-type": "function",
        "title": "mkdirCdTemp"
      },
      "index": {
        "description": "Utility function that runs mkdirTemp inside cdTemp",
        "hierarchy": "System Debian Binary Utils Temp",
        "module": "System.Debian.Binary.Utils.Temp",
        "name": "mkdirCdTemp",
        "normalized": "FilePath-\u003eIO a-\u003eIO a",
        "package": "debian-binary",
        "partial": "Cd Temp",
        "signature": "FilePath-\u003eIO a-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/debian-binary/docs/System-Debian-Binary-Utils-Temp.html#v:mkdirTemp",
      "description": {
        "fct-descr": "\u003cp\u003eCreates a \u003ccode\u003edirectory\u003c/code\u003e, executes \u003ccode\u003eaction\u003c/code\u003e, then removes it and all its\n contents.\n\u003c/p\u003e",
        "fct-module": "System.Debian.Binary.Utils.Temp",
        "fct-package": "debian-binary",
        "fct-signature": "FilePath-\u003e IO result-\u003e IO result",
        "fct-type": "function",
        "title": "mkdirTemp"
      },
      "index": {
        "description": "Creates directory executes action then removes it and all its contents",
        "hierarchy": "System Debian Binary Utils Temp",
        "module": "System.Debian.Binary.Utils.Temp",
        "name": "mkdirTemp",
        "normalized": "FilePath-\u003eIO a-\u003eIO a",
        "package": "debian-binary",
        "partial": "Temp",
        "signature": "FilePath-\u003eIO result-\u003eIO result"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/debian-binary/docs/System-Debian-Binary-Utils.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides utility functions to work with Debian binary packages.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "System.Debian.Binary.Utils",
        "fct-package": "debian-binary",
        "fct-signature": "module",
        "fct-source": "src/System-Debian-Binary-Utils.html",
        "fct-type": "module",
        "title": "Utils"
      },
      "index": {
        "description": "This module provides utility functions to work with Debian binary packages",
        "hierarchy": "System Debian Binary Utils",
        "module": "System.Debian.Binary.Utils",
        "name": "Utils",
        "normalized": "",
        "package": "debian-binary",
        "partial": "Utils",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/debian-binary/docs/System-Debian-Binary-Utils.html#v:strictReadFile",
      "description": {
        "fct-descr": "\u003cp\u003eRead a \u003ccode\u003efile\u003c/code\u003e strictly.\n\u003c/p\u003e",
        "fct-module": "System.Debian.Binary.Utils",
        "fct-package": "debian-binary",
        "fct-signature": "FilePath-\u003e IO String",
        "fct-type": "function",
        "title": "strictReadFile"
      },
      "index": {
        "description": "Read file strictly",
        "hierarchy": "System Debian Binary Utils",
        "module": "System.Debian.Binary.Utils",
        "name": "strictReadFile",
        "normalized": "FilePath-\u003eIO String",
        "package": "debian-binary",
        "partial": "Read File",
        "signature": "FilePath-\u003eIO String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/debian-binary/docs/System-Debian-Binary.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides functions to work with Debian binary packages.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "System.Debian.Binary",
        "fct-package": "debian-binary",
        "fct-signature": "module",
        "fct-source": "src/System-Debian-Binary.html",
        "fct-type": "module",
        "title": "Binary"
      },
      "index": {
        "description": "This module provides functions to work with Debian binary packages",
        "hierarchy": "System Debian Binary",
        "module": "System.Debian.Binary",
        "name": "Binary",
        "normalized": "",
        "package": "debian-binary",
        "partial": "Binary",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/debian-binary/docs/System-Debian-Binary.html#v:packageName",
      "description": {
        "fct-descr": "\u003cp\u003eExtract the package name of a debian \u003ccode\u003efilename\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.Debian.Binary",
        "fct-package": "debian-binary",
        "fct-signature": "FilePath-\u003e String",
        "fct-type": "function",
        "title": "packageName"
      },
      "index": {
        "description": "Extract the package name of debian filename",
        "hierarchy": "System Debian Binary",
        "module": "System.Debian.Binary",
        "name": "packageName",
        "normalized": "FilePath-\u003eString",
        "package": "debian-binary",
        "partial": "Name",
        "signature": "FilePath-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/debian-binary/docs/System-Debian-Binary.html#v:updatePackage",
      "description": {
        "fct-descr": "\u003cp\u003eExtracts \u003ccode\u003epackage\u003c/code\u003e in \u003ccode\u003e/tmp/debian-binary\u003c/code\u003e, runs \u003ccode\u003eaction\u003c/code\u003e and repacks\n \u003ccode\u003epackage\u003c/code\u003e in \u003ccode\u003e/tmp/package\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.Debian.Binary",
        "fct-package": "debian-binary",
        "fct-signature": "FilePath-\u003e IO ()-\u003e IO ()",
        "fct-type": "function",
        "title": "updatePackage"
      },
      "index": {
        "description": "Extracts package in tmp debian-binary runs action and repacks package in tmp package",
        "hierarchy": "System Debian Binary",
        "module": "System.Debian.Binary",
        "name": "updatePackage",
        "normalized": "FilePath-\u003eIO()-\u003eIO()",
        "package": "debian-binary",
        "partial": "Package",
        "signature": "FilePath-\u003eIO()-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/debian-binary/docs/System-Debian-Binary.html#v:withPackage",
      "description": {
        "fct-descr": "\u003cp\u003eExtracts \u003ccode\u003epackage\u003c/code\u003e in \u003ccode\u003e/tmp/debian-binary\u003c/code\u003e and runs \u003ccode\u003eaction\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.Debian.Binary",
        "fct-package": "debian-binary",
        "fct-signature": "FilePath-\u003e IO ()-\u003e IO ()",
        "fct-type": "function",
        "title": "withPackage"
      },
      "index": {
        "description": "Extracts package in tmp debian-binary and runs action",
        "hierarchy": "System Debian Binary",
        "module": "System.Debian.Binary",
        "name": "withPackage",
        "normalized": "FilePath-\u003eIO()-\u003eIO()",
        "package": "debian-binary",
        "partial": "Package",
        "signature": "FilePath-\u003eIO()-\u003eIO()"
      }
    }
  }
]