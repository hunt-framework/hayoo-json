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
        "word": "universal-binary"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eData.UniversalBinary is a module for parsing an OS X universal binary\n into a list of its member objects.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.UniversalBinary",
          "name": "UniversalBinary",
          "package": "universal-binary",
          "source": "src/Data-UniversalBinary.html",
          "type": "module"
        },
        "index": {
          "description": "Data.UniversalBinary is module for parsing an OS universal binary into list of its member objects",
          "hierarchy": "Data UniversalBinary",
          "module": "Data.UniversalBinary",
          "name": "UniversalBinary",
          "package": "universal-binary",
          "partial": "Universal Binary",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/universal-binary/docs/Data-UniversalBinary.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA member of the universal binary. Usually a Mach-O object for a given architecture.\n\u003c/p\u003e",
          "module": "Data.UniversalBinary",
          "name": "Object",
          "package": "universal-binary",
          "source": "src/Data-UniversalBinary.html#Object",
          "type": "data"
        },
        "index": {
          "description": "member of the universal binary Usually Mach-O object for given architecture",
          "hierarchy": "Data UniversalBinary",
          "module": "Data.UniversalBinary",
          "name": "Object",
          "package": "universal-binary",
          "partial": "Object",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/universal-binary/docs/Data-UniversalBinary.html#t:Object"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.UniversalBinary",
          "name": "Object",
          "package": "universal-binary",
          "signature": "Object",
          "source": "src/Data-UniversalBinary.html#Object",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data UniversalBinary",
          "module": "Data.UniversalBinary",
          "name": "Object",
          "package": "universal-binary",
          "partial": "Object",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/universal-binary/docs/Data-UniversalBinary.html#v:Object"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRequired file alignment of object.\n\u003c/p\u003e",
          "module": "Data.UniversalBinary",
          "name": "align",
          "package": "universal-binary",
          "signature": "Int",
          "source": "src/Data-UniversalBinary.html#Object",
          "type": "function"
        },
        "index": {
          "description": "Required file alignment of object",
          "hierarchy": "Data UniversalBinary",
          "module": "Data.UniversalBinary",
          "name": "align",
          "package": "universal-binary",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/universal-binary/docs/Data-UniversalBinary.html#v:align"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCPU subtype from \u003cem\u003eusr\u003c/em\u003einclude\u003cem\u003emach\u003c/em\u003emachine.h.\n\u003c/p\u003e",
          "module": "Data.UniversalBinary",
          "name": "cpusubtype",
          "package": "universal-binary",
          "signature": "Int",
          "source": "src/Data-UniversalBinary.html#Object",
          "type": "function"
        },
        "index": {
          "description": "CPU subtype from usr include mach machine.h",
          "hierarchy": "Data UniversalBinary",
          "module": "Data.UniversalBinary",
          "name": "cpusubtype",
          "package": "universal-binary",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/universal-binary/docs/Data-UniversalBinary.html#v:cpusubtype"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCPU type from \u003cem\u003eusr\u003c/em\u003einclude\u003cem\u003emach\u003c/em\u003emachine.h.\n\u003c/p\u003e",
          "module": "Data.UniversalBinary",
          "name": "cputype",
          "package": "universal-binary",
          "signature": "Int",
          "source": "src/Data-UniversalBinary.html#Object",
          "type": "function"
        },
        "index": {
          "description": "CPU type from usr include mach machine.h",
          "hierarchy": "Data UniversalBinary",
          "module": "Data.UniversalBinary",
          "name": "cputype",
          "package": "universal-binary",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/universal-binary/docs/Data-UniversalBinary.html#v:cputype"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eByte string for object data.\n\u003c/p\u003e",
          "module": "Data.UniversalBinary",
          "name": "object",
          "package": "universal-binary",
          "signature": "ByteString",
          "source": "src/Data-UniversalBinary.html#Object",
          "type": "function"
        },
        "index": {
          "description": "Byte string for object data",
          "hierarchy": "Data UniversalBinary",
          "module": "Data.UniversalBinary",
          "name": "object",
          "package": "universal-binary",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/universal-binary/docs/Data-UniversalBinary.html#v:object"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a universal binary ByteString into a list of contained objects. An\n error is thrown for unexpected data.\n\u003c/p\u003e",
          "module": "Data.UniversalBinary",
          "name": "parseUniversalBinary",
          "package": "universal-binary",
          "signature": "ByteString -\u003e [Object]",
          "source": "src/Data-UniversalBinary.html#parseUniversalBinary",
          "type": "function"
        },
        "index": {
          "description": "Parse universal binary ByteString into list of contained objects An error is thrown for unexpected data",
          "hierarchy": "Data UniversalBinary",
          "module": "Data.UniversalBinary",
          "name": "parseUniversalBinary",
          "normalized": "ByteString-\u003e[Object]",
          "package": "universal-binary",
          "partial": "Universal Binary",
          "signature": "ByteString-\u003e[Object]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/universal-binary/docs/Data-UniversalBinary.html#v:parseUniversalBinary"
      }
    }
  ]
]