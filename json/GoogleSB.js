[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GoogleSB/docs/GoogleSB.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides support for Google Safe Browsing API (\u003ca\u003ehttp://code.google.com/apis/safebrowsing/\u003c/a\u003e).\n   To use this module you need to obtain access key from project's page.\n\u003c/p\u003e\u003cp\u003eTypical use of this module will look like:\n\u003c/p\u003e\u003cpre\u003e  Right mhsh \u003c- updateHash your_key makeEmptyMalwareHash\n  checkURL mhsh \"http://kaishi2009.com/\"\n  checkURL mhsh ...\n\u003c/pre\u003e\u003cp\u003eIt's better to save hashes between runs to avoid of full updates every time.  So at the end of program it's better to store hash on disk with following code:\n\u003c/p\u003e\u003cpre\u003e  saveHash \"malware.dat\" mhsh\n\u003c/pre\u003e\u003cp\u003eAnd during startup, load it from file, if it exists on disk:\n\u003c/p\u003e\u003cpre\u003e  Right mhsh \u003c- load Hash \"malware.dat\"\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "GoogleSB",
        "fct-package": "GoogleSB",
        "fct-signature": "module",
        "fct-source": "src/GoogleSB.html",
        "fct-type": "module",
        "title": "GoogleSB"
      },
      "index": {
        "description": "This module provides support for Google Safe Browsing API http code.google.com apis safebrowsing To use this module you need to obtain access key from project page Typical use of this module will look like Right mhsh updateHash your key makeEmptyMalwareHash checkURL mhsh http kaishi2009.com checkURL mhsh It better to save hashes between runs to avoid of full updates every time So at the end of program it better to store hash on disk with following code saveHash malware.dat mhsh And during startup load it from file if it exists on disk Right mhsh load Hash malware.dat",
        "hierarchy": "GoogleSB",
        "module": "GoogleSB",
        "name": "GoogleSB",
        "normalized": "",
        "package": "GoogleSB",
        "partial": "Google SB",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GoogleSB/docs/GoogleSB.html#t:Hash",
      "description": {
        "fct-descr": "\u003cp\u003eData structure to store data about Hash. It contains information about version, name\n    of hash, and actual Hash data \n\u003c/p\u003e",
        "fct-module": "GoogleSB",
        "fct-package": "GoogleSB",
        "fct-signature": "data",
        "fct-source": "src/GoogleSB.html#Hash",
        "fct-type": "data",
        "title": "Hash"
      },
      "index": {
        "description": "Data structure to store data about Hash It contains information about version name of hash and actual Hash data",
        "hierarchy": "GoogleSB",
        "module": "GoogleSB",
        "name": "Hash",
        "normalized": "",
        "package": "GoogleSB",
        "partial": "Hash",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GoogleSB/docs/GoogleSB.html#v:checkURL",
      "description": {
        "fct-descr": "\u003cp\u003ePerforms checking of presence of given URL (second argument of function) in the Hash (first argument). \n\u003c/p\u003e",
        "fct-module": "GoogleSB",
        "fct-package": "GoogleSB",
        "fct-signature": "Hash-\u003e String-\u003e Bool",
        "fct-type": "function",
        "title": "checkURL"
      },
      "index": {
        "description": "Performs checking of presence of given URL second argument of function in the Hash first argument",
        "hierarchy": "GoogleSB",
        "module": "GoogleSB",
        "name": "checkURL",
        "normalized": "Hash-\u003eString-\u003eBool",
        "package": "GoogleSB",
        "partial": "URL",
        "signature": "Hash-\u003eString-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GoogleSB/docs/GoogleSB.html#v:loadHash",
      "description": {
        "fct-descr": "\u003cp\u003eLoads Hash from given file \n\u003c/p\u003e",
        "fct-module": "GoogleSB",
        "fct-package": "GoogleSB",
        "fct-signature": "FilePath-\u003e IO (Either String Hash)",
        "fct-type": "function",
        "title": "loadHash"
      },
      "index": {
        "description": "Loads Hash from given file",
        "hierarchy": "GoogleSB",
        "module": "GoogleSB",
        "name": "loadHash",
        "normalized": "FilePath-\u003eIO(Either String Hash)",
        "package": "GoogleSB",
        "partial": "Hash",
        "signature": "FilePath-\u003eIO(Either String Hash)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GoogleSB/docs/GoogleSB.html#v:makeEmptyBlackHash",
      "description": {
        "fct-descr": "\u003cp\u003eCreates empty \u003ccode\u003eblack\u003c/code\u003e Hash object\n\u003c/p\u003e",
        "fct-module": "GoogleSB",
        "fct-package": "GoogleSB",
        "fct-signature": "Hash",
        "fct-source": "src/GoogleSB.html#makeEmptyBlackHash",
        "fct-type": "function",
        "title": "makeEmptyBlackHash"
      },
      "index": {
        "description": "Creates empty black Hash object",
        "hierarchy": "GoogleSB",
        "module": "GoogleSB",
        "name": "makeEmptyBlackHash",
        "normalized": "",
        "package": "GoogleSB",
        "partial": "Empty Black Hash",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GoogleSB/docs/GoogleSB.html#v:makeEmptyMalwareHash",
      "description": {
        "fct-descr": "\u003cp\u003eCreates empty \u003ccode\u003emalware\u003c/code\u003e Hash object\n\u003c/p\u003e",
        "fct-module": "GoogleSB",
        "fct-package": "GoogleSB",
        "fct-signature": "Hash",
        "fct-source": "src/GoogleSB.html#makeEmptyMalwareHash",
        "fct-type": "function",
        "title": "makeEmptyMalwareHash"
      },
      "index": {
        "description": "Creates empty malware Hash object",
        "hierarchy": "GoogleSB",
        "module": "GoogleSB",
        "name": "makeEmptyMalwareHash",
        "normalized": "",
        "package": "GoogleSB",
        "partial": "Empty Malware Hash",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GoogleSB/docs/GoogleSB.html#v:saveHash",
      "description": {
        "fct-descr": "\u003cp\u003eSaves Hash into given file\n\u003c/p\u003e",
        "fct-module": "GoogleSB",
        "fct-package": "GoogleSB",
        "fct-signature": "FilePath-\u003e Hash-\u003e IO ()",
        "fct-type": "function",
        "title": "saveHash"
      },
      "index": {
        "description": "Saves Hash into given file",
        "hierarchy": "GoogleSB",
        "module": "GoogleSB",
        "name": "saveHash",
        "normalized": "FilePath-\u003eHash-\u003eIO()",
        "package": "GoogleSB",
        "partial": "Hash",
        "signature": "FilePath-\u003eHash-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GoogleSB/docs/GoogleSB.html#v:updateHash",
      "description": {
        "fct-descr": "\u003cp\u003ePerforms update of Hash from server.  For first update, you need to provide hash\n created by \u003ccode\u003e\u003ca\u003emakeEmptyBlackHash\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003emakeEmptyMalwareHash\u003c/a\u003e\u003c/code\u003e.  And for later updates, you\n will use existing hashes to get only updates to hashes, not the full database. \n\u003c/p\u003e",
        "fct-module": "GoogleSB",
        "fct-package": "GoogleSB",
        "fct-signature": "String-\u003e Hash-\u003e IO (Either String Hash)",
        "fct-type": "function",
        "title": "updateHash"
      },
      "index": {
        "description": "Performs update of Hash from server For first update you need to provide hash created by makeEmptyBlackHash or makeEmptyMalwareHash And for later updates you will use existing hashes to get only updates to hashes not the full database",
        "hierarchy": "GoogleSB",
        "module": "GoogleSB",
        "name": "updateHash",
        "normalized": "String-\u003eHash-\u003eIO(Either String Hash)",
        "package": "GoogleSB",
        "partial": "Hash",
        "signature": "String-\u003eHash-\u003eIO(Either String Hash)"
      }
    }
  }
]