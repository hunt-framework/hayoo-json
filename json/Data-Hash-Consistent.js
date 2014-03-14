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
        "word": "Data-Hash-Consistent"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eData.Hash.Consistent\n\u003c/p\u003e\u003cp\u003eA consistent hash is a technique to manage the fair distribution of cacheable\nentities among hosts. Each host identifier has its crc32 hash calculated\nand stored in a Vector along with its canonical host name. The host identifier\nmay be differentiated from its canonical host name by a multiplying factor,\nin our case a simple integer appeneded to the hostname to provide it with\na number of entries in the consistent hash, all evenly distributed. \n\u003c/p\u003e\u003cp\u003eThis technique is explained in these links:\n\u003c/p\u003e\u003cp\u003ehttp:\u003cem/\u003een.wikipedia.org\u003cem\u003ewiki\u003c/em\u003eConsistent_hashing\n\u003c/p\u003e\u003cp\u003ehttp:\u003cem/\u003ewww.tomkleinpeter.com\u003cem\u003e2008\u003c/em\u003e03\u003cem\u003e17\u003c/em\u003eprogrammers-toolbox-part-3-consistent-hashing/\n\u003c/p\u003e\u003cp\u003eHere is a small program illustrating its use:\n\u003c/p\u003e\u003cpre\u003e\n\nmodule Main where\n  import qualified Data.Hash.Consistent as CH\n\nmain = do\n    let hosts  = [\u003ca\u003ehi.example.net\u003c/a\u003e,\u003ca\u003ebar.example.net\u003c/a\u003e,\u003ca\u003efoo.example.net\u003c/a\u003e] :: [CH.Host]\n    let n = 2 :: Int\n    let ch = CH.new\n    print $ show $ ch\n    ch \u003c- return $ CH.add hosts n ch\n    print $ show $ ch  \n    let fh = [head hosts] :: [CH.Host]\n    let hh_fh = CH.hashHosts fh n\n    print hh_fh\n    ch \u003c- return $ CH.del fh n ch\n    print $ show $ ch  \n    let i = 770931073\n    let tgt = CH.targetHost i ch \n    print tgt\n    return ()\n\u003c/pre\u003e\u003cp\u003eLicense info:\n\u003c/p\u003e\u003cp\u003eThe license is a simple BSD3-style license available here:\nhttps:\u003cem/\u003ewww.b7j0c.org\u003cem\u003estuff\u003c/em\u003elicense.txt\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Hash.Consistent",
          "name": "Consistent",
          "package": "Data-Hash-Consistent",
          "source": "src/Data-Hash-Consistent.html",
          "type": "module"
        },
        "index": {
          "description": "Data.Hash.Consistent consistent hash is technique to manage the fair distribution of cacheable entities among hosts Each host identifier has its crc32 hash calculated and stored in Vector along with its canonical host name The host identifier may be differentiated from its canonical host name by multiplying factor in our case simple integer appeneded to the hostname to provide it with number of entries in the consistent hash all evenly distributed This technique is explained in these links http en.wikipedia.org wiki Consistent hashing http www.tomkleinpeter.com programmers-toolbox-part-3-consistent-hashing Here is small program illustrating its use module Main where import qualified Data.Hash.Consistent as CH main do let hosts hi.example.net bar.example.net foo.example.net CH.Host let Int let ch CH.new print show ch ch return CH.add hosts ch print show ch let fh head hosts CH.Host let hh fh CH.hashHosts fh print hh fh ch return CH.del fh ch print show ch let let tgt CH.targetHost ch print tgt return License info The license is simple BSD3-style license available here https www.b7j0c.org stuff license.txt",
          "hierarchy": "Data Hash Consistent",
          "module": "Data.Hash.Consistent",
          "name": "Consistent",
          "package": "Data-Hash-Consistent",
          "partial": "Consistent",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Data-Hash-Consistent/docs/Data-Hash-Consistent.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Hash.Consistent",
          "name": "ConsistentHash",
          "package": "Data-Hash-Consistent",
          "source": "src/Data-Hash-Consistent.html#ConsistentHash",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Hash Consistent",
          "module": "Data.Hash.Consistent",
          "name": "ConsistentHash",
          "package": "Data-Hash-Consistent",
          "partial": "Consistent Hash",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Data-Hash-Consistent/docs/Data-Hash-Consistent.html#t:ConsistentHash"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Hash.Consistent",
          "name": "Hash",
          "package": "Data-Hash-Consistent",
          "source": "src/Data-Hash-Consistent.html#Hash",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Hash Consistent",
          "module": "Data.Hash.Consistent",
          "name": "Hash",
          "package": "Data-Hash-Consistent",
          "partial": "Hash",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Data-Hash-Consistent/docs/Data-Hash-Consistent.html#t:Hash"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Hash.Consistent",
          "name": "HashHost",
          "package": "Data-Hash-Consistent",
          "source": "src/Data-Hash-Consistent.html#HashHost",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Hash Consistent",
          "module": "Data.Hash.Consistent",
          "name": "HashHost",
          "package": "Data-Hash-Consistent",
          "partial": "Hash Host",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Data-Hash-Consistent/docs/Data-Hash-Consistent.html#t:HashHost"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Hash.Consistent",
          "name": "Host",
          "package": "Data-Hash-Consistent",
          "source": "src/Data-Hash-Consistent.html#Host",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Hash Consistent",
          "module": "Data.Hash.Consistent",
          "name": "Host",
          "package": "Data-Hash-Consistent",
          "partial": "Host",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Data-Hash-Consistent/docs/Data-Hash-Consistent.html#t:Host"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Hash.Consistent",
          "name": "add",
          "package": "Data-Hash-Consistent",
          "signature": "[Host] -\u003e Int -\u003e ConsistentHash -\u003e ConsistentHash",
          "source": "src/Data-Hash-Consistent.html#add",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Hash Consistent",
          "module": "Data.Hash.Consistent",
          "name": "add",
          "normalized": "[Host]-\u003eInt-\u003eConsistentHash-\u003eConsistentHash",
          "package": "Data-Hash-Consistent",
          "signature": "[Host]-\u003eInt-\u003eConsistentHash-\u003eConsistentHash",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Data-Hash-Consistent/docs/Data-Hash-Consistent.html#v:add"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Hash.Consistent",
          "name": "del",
          "package": "Data-Hash-Consistent",
          "signature": "[Host] -\u003e Int -\u003e ConsistentHash -\u003e ConsistentHash",
          "source": "src/Data-Hash-Consistent.html#del",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Hash Consistent",
          "module": "Data.Hash.Consistent",
          "name": "del",
          "normalized": "[Host]-\u003eInt-\u003eConsistentHash-\u003eConsistentHash",
          "package": "Data-Hash-Consistent",
          "signature": "[Host]-\u003eInt-\u003eConsistentHash-\u003eConsistentHash",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Data-Hash-Consistent/docs/Data-Hash-Consistent.html#v:del"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Hash.Consistent",
          "name": "hashHosts",
          "package": "Data-Hash-Consistent",
          "signature": "[Host] -\u003e Int -\u003e ConsistentHash",
          "source": "src/Data-Hash-Consistent.html#hashHosts",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Hash Consistent",
          "module": "Data.Hash.Consistent",
          "name": "hashHosts",
          "normalized": "[Host]-\u003eInt-\u003eConsistentHash",
          "package": "Data-Hash-Consistent",
          "partial": "Hosts",
          "signature": "[Host]-\u003eInt-\u003eConsistentHash",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Data-Hash-Consistent/docs/Data-Hash-Consistent.html#v:hashHosts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Hash.Consistent",
          "name": "new",
          "package": "Data-Hash-Consistent",
          "signature": "ConsistentHash",
          "source": "src/Data-Hash-Consistent.html#new",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Hash Consistent",
          "module": "Data.Hash.Consistent",
          "name": "new",
          "package": "Data-Hash-Consistent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Data-Hash-Consistent/docs/Data-Hash-Consistent.html#v:new"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Hash.Consistent",
          "name": "search",
          "package": "Data-Hash-Consistent",
          "signature": "Hash -\u003e ConsistentHash -\u003e Int",
          "source": "src/Data-Hash-Consistent.html#search",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Hash Consistent",
          "module": "Data.Hash.Consistent",
          "name": "search",
          "normalized": "Hash-\u003eConsistentHash-\u003eInt",
          "package": "Data-Hash-Consistent",
          "signature": "Hash-\u003eConsistentHash-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Data-Hash-Consistent/docs/Data-Hash-Consistent.html#v:search"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Hash.Consistent",
          "name": "targetHost",
          "package": "Data-Hash-Consistent",
          "signature": "Hash -\u003e ConsistentHash -\u003e HashHost",
          "source": "src/Data-Hash-Consistent.html#targetHost",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Hash Consistent",
          "module": "Data.Hash.Consistent",
          "name": "targetHost",
          "normalized": "Hash-\u003eConsistentHash-\u003eHashHost",
          "package": "Data-Hash-Consistent",
          "partial": "Host",
          "signature": "Hash-\u003eConsistentHash-\u003eHashHost",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Data-Hash-Consistent/docs/Data-Hash-Consistent.html#v:targetHost"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Hash.Consistent",
          "name": "textCrc32",
          "package": "Data-Hash-Consistent",
          "signature": "String -\u003e Hash",
          "source": "src/Data-Hash-Consistent.html#textCrc32",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Hash Consistent",
          "module": "Data.Hash.Consistent",
          "name": "textCrc32",
          "normalized": "String-\u003eHash",
          "package": "Data-Hash-Consistent",
          "partial": "Crc",
          "signature": "String-\u003eHash",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Data-Hash-Consistent/docs/Data-Hash-Consistent.html#v:textCrc32"
      }
    }
  ]
]