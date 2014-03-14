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
        "word": "GoogleSB"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides support for Google Safe Browsing API (\u003ca\u003ehttp://code.google.com/apis/safebrowsing/\u003c/a\u003e).\n   To use this module you need to obtain access key from project's page.\n\u003c/p\u003e\u003cp\u003eTypical use of this module will look like:\n\u003c/p\u003e\u003cpre\u003e  Right mhsh \u003c- updateHash your_key makeEmptyMalwareHash\n  checkURL mhsh \"http://kaishi2009.com/\"\n  checkURL mhsh ...\n\u003c/pre\u003e\u003cp\u003eIt's better to save hashes between runs to avoid of full updates every time.  So at the end of program it's better to store hash on disk with following code:\n\u003c/p\u003e\u003cpre\u003e  saveHash \"malware.dat\" mhsh\n\u003c/pre\u003e\u003cp\u003eAnd during startup, load it from file, if it exists on disk:\n\u003c/p\u003e\u003cpre\u003e  Right mhsh \u003c- load Hash \"malware.dat\"\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "GoogleSB",
          "name": "GoogleSB",
          "package": "GoogleSB",
          "source": "src/GoogleSB.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides support for Google Safe Browsing API http code.google.com apis safebrowsing To use this module you need to obtain access key from project page Typical use of this module will look like Right mhsh updateHash your key makeEmptyMalwareHash checkURL mhsh http kaishi2009.com checkURL mhsh It better to save hashes between runs to avoid of full updates every time So at the end of program it better to store hash on disk with following code saveHash malware.dat mhsh And during startup load it from file if it exists on disk Right mhsh load Hash malware.dat",
          "hierarchy": "GoogleSB",
          "module": "GoogleSB",
          "name": "GoogleSB",
          "package": "GoogleSB",
          "partial": "Google SB",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/GoogleSB/docs/GoogleSB.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eData structure to store data about Hash. It contains information about version, name\n    of hash, and actual Hash data \n\u003c/p\u003e",
          "module": "GoogleSB",
          "name": "Hash",
          "package": "GoogleSB",
          "source": "src/GoogleSB.html#Hash",
          "type": "data"
        },
        "index": {
          "description": "Data structure to store data about Hash It contains information about version name of hash and actual Hash data",
          "hierarchy": "GoogleSB",
          "module": "GoogleSB",
          "name": "Hash",
          "package": "GoogleSB",
          "partial": "Hash",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/GoogleSB/docs/GoogleSB.html#t:Hash"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePerforms checking of presence of given URL (second argument of function) in the Hash (first argument). \n\u003c/p\u003e",
          "module": "GoogleSB",
          "name": "checkURL",
          "package": "GoogleSB",
          "signature": "Hash-\u003e String-\u003e Bool",
          "type": "function"
        },
        "index": {
          "description": "Performs checking of presence of given URL second argument of function in the Hash first argument",
          "hierarchy": "GoogleSB",
          "module": "GoogleSB",
          "name": "checkURL",
          "normalized": "Hash-\u003eString-\u003eBool",
          "package": "GoogleSB",
          "partial": "URL",
          "signature": "Hash-\u003eString-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GoogleSB/docs/GoogleSB.html#v:checkURL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLoads Hash from given file \n\u003c/p\u003e",
          "module": "GoogleSB",
          "name": "loadHash",
          "package": "GoogleSB",
          "signature": "FilePath-\u003e IO (Either String Hash)",
          "type": "function"
        },
        "index": {
          "description": "Loads Hash from given file",
          "hierarchy": "GoogleSB",
          "module": "GoogleSB",
          "name": "loadHash",
          "normalized": "FilePath-\u003eIO(Either String Hash)",
          "package": "GoogleSB",
          "partial": "Hash",
          "signature": "FilePath-\u003eIO(Either String Hash)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GoogleSB/docs/GoogleSB.html#v:loadHash"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates empty \u003ccode\u003eblack\u003c/code\u003e Hash object\n\u003c/p\u003e",
          "module": "GoogleSB",
          "name": "makeEmptyBlackHash",
          "package": "GoogleSB",
          "signature": "Hash",
          "source": "src/GoogleSB.html#makeEmptyBlackHash",
          "type": "function"
        },
        "index": {
          "description": "Creates empty black Hash object",
          "hierarchy": "GoogleSB",
          "module": "GoogleSB",
          "name": "makeEmptyBlackHash",
          "package": "GoogleSB",
          "partial": "Empty Black Hash",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GoogleSB/docs/GoogleSB.html#v:makeEmptyBlackHash"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates empty \u003ccode\u003emalware\u003c/code\u003e Hash object\n\u003c/p\u003e",
          "module": "GoogleSB",
          "name": "makeEmptyMalwareHash",
          "package": "GoogleSB",
          "signature": "Hash",
          "source": "src/GoogleSB.html#makeEmptyMalwareHash",
          "type": "function"
        },
        "index": {
          "description": "Creates empty malware Hash object",
          "hierarchy": "GoogleSB",
          "module": "GoogleSB",
          "name": "makeEmptyMalwareHash",
          "package": "GoogleSB",
          "partial": "Empty Malware Hash",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GoogleSB/docs/GoogleSB.html#v:makeEmptyMalwareHash"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSaves Hash into given file\n\u003c/p\u003e",
          "module": "GoogleSB",
          "name": "saveHash",
          "package": "GoogleSB",
          "signature": "FilePath-\u003e Hash-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Saves Hash into given file",
          "hierarchy": "GoogleSB",
          "module": "GoogleSB",
          "name": "saveHash",
          "normalized": "FilePath-\u003eHash-\u003eIO()",
          "package": "GoogleSB",
          "partial": "Hash",
          "signature": "FilePath-\u003eHash-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GoogleSB/docs/GoogleSB.html#v:saveHash"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePerforms update of Hash from server.  For first update, you need to provide hash\n created by \u003ccode\u003e\u003ca\u003emakeEmptyBlackHash\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003emakeEmptyMalwareHash\u003c/a\u003e\u003c/code\u003e.  And for later updates, you\n will use existing hashes to get only updates to hashes, not the full database. \n\u003c/p\u003e",
          "module": "GoogleSB",
          "name": "updateHash",
          "package": "GoogleSB",
          "signature": "String-\u003e Hash-\u003e IO (Either String Hash)",
          "type": "function"
        },
        "index": {
          "description": "Performs update of Hash from server For first update you need to provide hash created by makeEmptyBlackHash or makeEmptyMalwareHash And for later updates you will use existing hashes to get only updates to hashes not the full database",
          "hierarchy": "GoogleSB",
          "module": "GoogleSB",
          "name": "updateHash",
          "normalized": "String-\u003eHash-\u003eIO(Either String Hash)",
          "package": "GoogleSB",
          "partial": "Hash",
          "signature": "String-\u003eHash-\u003eIO(Either String Hash)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GoogleSB/docs/GoogleSB.html#v:updateHash"
      }
    }
  ]
]