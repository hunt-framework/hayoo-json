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
        "word": "ddc-code"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module is responsible for finding out where the runtime system\n   and base library code is installed.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "DDC.Code.Config",
          "name": "Config",
          "package": "ddc-code",
          "source": "src/DDC-Code-Config.html",
          "type": "module"
        },
        "index": {
          "description": "This module is responsible for finding out where the runtime system and base library code is installed",
          "hierarchy": "DDC Code Config",
          "module": "DDC.Code.Config",
          "name": "Config",
          "package": "ddc-code",
          "partial": "Config",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ddc-code/docs/DDC-Code-Config.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DDC.Code.Config",
          "name": "locateBaseLibrary",
          "package": "ddc-code",
          "signature": "IO FilePath",
          "source": "src/DDC-Code-Config.html#locateBaseLibrary",
          "type": "function"
        },
        "index": {
          "hierarchy": "DDC Code Config",
          "module": "DDC.Code.Config",
          "name": "locateBaseLibrary",
          "package": "ddc-code",
          "partial": "Base Library",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-code/docs/DDC-Code-Config.html#v:locateBaseLibrary"
      }
    }
  ]
]