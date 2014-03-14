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
        "word": "hsfacter"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Facter",
          "name": "Facter",
          "package": "hsfacter",
          "source": "src/Facter.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Facter",
          "module": "Facter",
          "name": "Facter",
          "package": "hsfacter",
          "partial": "Facter",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hsfacter/docs/Facter.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Facter",
          "name": "allFacts",
          "package": "hsfacter",
          "signature": "Text -\u003e IO (Map Text ResolvedValue)",
          "source": "src/Facter.html#allFacts",
          "type": "function"
        },
        "index": {
          "hierarchy": "Facter",
          "module": "Facter",
          "name": "allFacts",
          "normalized": "Text-\u003eIO(Map Text ResolvedValue)",
          "package": "hsfacter",
          "partial": "Facts",
          "signature": "Text-\u003eIO(Map Text ResolvedValue)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsfacter/docs/Facter.html#v:allFacts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Facter",
          "name": "factMountPoints",
          "package": "hsfacter",
          "signature": "IO [(String, String)]",
          "source": "src/Facter.html#factMountPoints",
          "type": "function"
        },
        "index": {
          "hierarchy": "Facter",
          "module": "Facter",
          "name": "factMountPoints",
          "normalized": "IO[(String,String)]",
          "package": "hsfacter",
          "partial": "Mount Points",
          "signature": "IO[(String,String)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsfacter/docs/Facter.html#v:factMountPoints"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Facter",
          "name": "factNET",
          "package": "hsfacter",
          "signature": "IO [(String, String)]",
          "source": "src/Facter.html#factNET",
          "type": "function"
        },
        "index": {
          "hierarchy": "Facter",
          "module": "Facter",
          "name": "factNET",
          "normalized": "IO[(String,String)]",
          "package": "hsfacter",
          "partial": "NET",
          "signature": "IO[(String,String)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsfacter/docs/Facter.html#v:factNET"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Facter",
          "name": "factOS",
          "package": "hsfacter",
          "signature": "IO [(String, String)]",
          "source": "src/Facter.html#factOS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Facter",
          "module": "Facter",
          "name": "factOS",
          "normalized": "IO[(String,String)]",
          "package": "hsfacter",
          "partial": "OS",
          "signature": "IO[(String,String)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsfacter/docs/Facter.html#v:factOS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Facter",
          "name": "factRAM",
          "package": "hsfacter",
          "signature": "IO [(String, String)]",
          "source": "src/Facter.html#factRAM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Facter",
          "module": "Facter",
          "name": "factRAM",
          "normalized": "IO[(String,String)]",
          "package": "hsfacter",
          "partial": "RAM",
          "signature": "IO[(String,String)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsfacter/docs/Facter.html#v:factRAM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Facter",
          "name": "getOrder",
          "package": "hsfacter",
          "signature": "String -\u003e Int",
          "source": "src/Facter.html#getOrder",
          "type": "function"
        },
        "index": {
          "hierarchy": "Facter",
          "module": "Facter",
          "name": "getOrder",
          "normalized": "String-\u003eInt",
          "package": "hsfacter",
          "partial": "Order",
          "signature": "String-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsfacter/docs/Facter.html#v:getOrder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Facter",
          "name": "getPrefix",
          "package": "hsfacter",
          "signature": "Int -\u003e String",
          "source": "src/Facter.html#getPrefix",
          "type": "function"
        },
        "index": {
          "hierarchy": "Facter",
          "module": "Facter",
          "name": "getPrefix",
          "normalized": "Int-\u003eString",
          "package": "hsfacter",
          "partial": "Prefix",
          "signature": "Int-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsfacter/docs/Facter.html#v:getPrefix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Facter",
          "name": "normalizeUnit",
          "package": "hsfacter",
          "signature": "(Double, Int) -\u003e Double -\u003e (Double, Int)",
          "source": "src/Facter.html#normalizeUnit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Facter",
          "module": "Facter",
          "name": "normalizeUnit",
          "normalized": "(Double,Int)-\u003eDouble-\u003e(Double,Int)",
          "package": "hsfacter",
          "partial": "Unit",
          "signature": "(Double,Int)-\u003eDouble-\u003e(Double,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsfacter/docs/Facter.html#v:normalizeUnit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Facter",
          "name": "puppetDBFacts",
          "package": "hsfacter",
          "signature": "String -\u003e String -\u003e IO (Map Text ResolvedValue)",
          "source": "src/Facter.html#puppetDBFacts",
          "type": "function"
        },
        "index": {
          "hierarchy": "Facter",
          "module": "Facter",
          "name": "puppetDBFacts",
          "normalized": "String-\u003eString-\u003eIO(Map Text ResolvedValue)",
          "package": "hsfacter",
          "partial": "DBFacts",
          "signature": "String-\u003eString-\u003eIO(Map Text ResolvedValue)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsfacter/docs/Facter.html#v:puppetDBFacts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Facter",
          "name": "storagedesc",
          "package": "hsfacter",
          "signature": "(String, String) -\u003e String",
          "source": "src/Facter.html#storagedesc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Facter",
          "module": "Facter",
          "name": "storagedesc",
          "normalized": "(String,String)-\u003eString",
          "package": "hsfacter",
          "signature": "(String,String)-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsfacter/docs/Facter.html#v:storagedesc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Facter",
          "name": "storageunits",
          "package": "hsfacter",
          "signature": "[(String, Int)]",
          "source": "src/Facter.html#storageunits",
          "type": "function"
        },
        "index": {
          "hierarchy": "Facter",
          "module": "Facter",
          "name": "storageunits",
          "normalized": "[(String,Int)]",
          "package": "hsfacter",
          "signature": "[(String,Int)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsfacter/docs/Facter.html#v:storageunits"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Facter",
          "name": "version",
          "package": "hsfacter",
          "signature": "IO [(String, String)]",
          "source": "src/Facter.html#version",
          "type": "function"
        },
        "index": {
          "hierarchy": "Facter",
          "module": "Facter",
          "name": "version",
          "normalized": "IO[(String,String)]",
          "package": "hsfacter",
          "signature": "IO[(String,String)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsfacter/docs/Facter.html#v:version"
      }
    }
  ]
]