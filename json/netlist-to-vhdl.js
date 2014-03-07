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
        "word": "netlist-to-vhdl"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTranslates a Netlist AST (\u003ccode\u003eLanguage.Netlist.AST\u003c/code\u003e) to VHDL.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Language.Netlist.GenVHDL",
          "name": "GenVHDL",
          "package": "netlist-to-vhdl",
          "source": "src/Language-Netlist-GenVHDL.html",
          "type": "module"
        },
        "index": {
          "description": "Translates Netlist AST Language.Netlist.AST to VHDL",
          "hierarchy": "Language Netlist GenVHDL",
          "module": "Language.Netlist.GenVHDL",
          "name": "GenVHDL",
          "package": "netlist-to-vhdl",
          "partial": "Gen VHDL",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/netlist-to-vhdl/docs/Language-Netlist-GenVHDL.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate a \u003ccode\u003e\u003ca\u003eModule\u003c/a\u003e\u003c/code\u003e as a VHDL file . The [\u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e] argument\n is the list of extra modules to import, typically [\"work.all\"].\n\u003c/p\u003e",
          "module": "Language.Netlist.GenVHDL",
          "name": "genVHDL",
          "package": "netlist-to-vhdl",
          "signature": "Module -\u003e [String] -\u003e String",
          "source": "src/Language-Netlist-GenVHDL.html#genVHDL",
          "type": "function"
        },
        "index": {
          "description": "Generate Module as VHDL file The String argument is the list of extra modules to import typically work.all",
          "hierarchy": "Language Netlist GenVHDL",
          "module": "Language.Netlist.GenVHDL",
          "name": "genVHDL",
          "normalized": "Module-\u003e[String]-\u003eString",
          "package": "netlist-to-vhdl",
          "partial": "VHDL",
          "signature": "Module-\u003e[String]-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netlist-to-vhdl/docs/Language-Netlist-GenVHDL.html#v:genVHDL"
      }
    }
  ]
]