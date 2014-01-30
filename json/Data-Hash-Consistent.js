[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Data-Hash-Consistent/docs/Data-Hash-Consistent.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eData.Hash.Consistent\n\u003c/p\u003e\u003cp\u003eA consistent hash is a technique to manage the fair distribution of cacheable\nentities among hosts. Each host identifier has its crc32 hash calculated\nand stored in a Vector along with its canonical host name. The host identifier\nmay be differentiated from its canonical host name by a multiplying factor,\nin our case a simple integer appeneded to the hostname to provide it with\na number of entries in the consistent hash, all evenly distributed. \n\u003c/p\u003e\u003cp\u003eThis technique is explained in these links:\n\u003c/p\u003e\u003cp\u003ehttp:\u003cem/\u003een.wikipedia.org\u003cem\u003ewiki\u003c/em\u003eConsistent_hashing\n\u003c/p\u003e\u003cp\u003ehttp:\u003cem/\u003ewww.tomkleinpeter.com\u003cem\u003e2008\u003c/em\u003e03\u003cem\u003e17\u003c/em\u003eprogrammers-toolbox-part-3-consistent-hashing/\n\u003c/p\u003e\u003cp\u003eHere is a small program illustrating its use:\n\u003c/p\u003e\u003cpre\u003e\n\nmodule Main where\n  import qualified Data.Hash.Consistent as CH\n\nmain = do\n    let hosts  = [\u003ca\u003ehi.example.net\u003c/a\u003e,\u003ca\u003ebar.example.net\u003c/a\u003e,\u003ca\u003efoo.example.net\u003c/a\u003e] :: [CH.Host]\n    let n = 2 :: Int\n    let ch = CH.new\n    print $ show $ ch\n    ch \u003c- return $ CH.add hosts n ch\n    print $ show $ ch  \n    let fh = [head hosts] :: [CH.Host]\n    let hh_fh = CH.hashHosts fh n\n    print hh_fh\n    ch \u003c- return $ CH.del fh n ch\n    print $ show $ ch  \n    let i = 770931073\n    let tgt = CH.targetHost i ch \n    print tgt\n    return ()\n\u003c/pre\u003e\u003cp\u003eLicense info:\n\u003c/p\u003e\u003cp\u003eThe license is a simple BSD3-style license available here:\nhttps:\u003cem/\u003ewww.b7j0c.org\u003cem\u003estuff\u003c/em\u003elicense.txt\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Hash.Consistent",
        "fct-package": "Data-Hash-Consistent",
        "fct-signature": "module",
        "fct-source": "src/Data-Hash-Consistent.html",
        "fct-type": "module",
        "title": "Consistent"
      },
      "index": {
        "description": "Data.Hash.Consistent consistent hash is technique to manage the fair distribution of cacheable entities among hosts Each host identifier has its crc32 hash calculated and stored in Vector along with its canonical host name The host identifier may be differentiated from its canonical host name by multiplying factor in our case simple integer appeneded to the hostname to provide it with number of entries in the consistent hash all evenly distributed This technique is explained in these links http en.wikipedia.org wiki Consistent hashing http www.tomkleinpeter.com programmers-toolbox-part-3-consistent-hashing Here is small program illustrating its use module Main where import qualified Data.Hash.Consistent as CH main do let hosts hi.example.net bar.example.net foo.example.net CH.Host let Int let ch CH.new print show ch ch return CH.add hosts ch print show ch let fh head hosts CH.Host let hh fh CH.hashHosts fh print hh fh ch return CH.del fh ch print show ch let let tgt CH.targetHost ch print tgt return License info The license is simple BSD3-style license available here https www.b7j0c.org stuff license.txt",
        "hierarchy": "Data Hash Consistent",
        "module": "Data.Hash.Consistent",
        "name": "Consistent",
        "normalized": "",
        "package": "Data-Hash-Consistent",
        "partial": "Consistent",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Data-Hash-Consistent/docs/Data-Hash-Consistent.html#t:ConsistentHash",
      "description": {
        "fct-module": "Data.Hash.Consistent",
        "fct-package": "Data-Hash-Consistent",
        "fct-signature": "type",
        "fct-source": "src/Data-Hash-Consistent.html#ConsistentHash",
        "fct-type": "type",
        "title": "ConsistentHash"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Hash Consistent",
        "module": "Data.Hash.Consistent",
        "name": "ConsistentHash",
        "normalized": "",
        "package": "Data-Hash-Consistent",
        "partial": "Consistent Hash",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Data-Hash-Consistent/docs/Data-Hash-Consistent.html#t:Hash",
      "description": {
        "fct-module": "Data.Hash.Consistent",
        "fct-package": "Data-Hash-Consistent",
        "fct-signature": "type",
        "fct-source": "src/Data-Hash-Consistent.html#Hash",
        "fct-type": "type",
        "title": "Hash"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Hash Consistent",
        "module": "Data.Hash.Consistent",
        "name": "Hash",
        "normalized": "",
        "package": "Data-Hash-Consistent",
        "partial": "Hash",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Data-Hash-Consistent/docs/Data-Hash-Consistent.html#t:HashHost",
      "description": {
        "fct-module": "Data.Hash.Consistent",
        "fct-package": "Data-Hash-Consistent",
        "fct-signature": "type",
        "fct-source": "src/Data-Hash-Consistent.html#HashHost",
        "fct-type": "type",
        "title": "HashHost"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Hash Consistent",
        "module": "Data.Hash.Consistent",
        "name": "HashHost",
        "normalized": "",
        "package": "Data-Hash-Consistent",
        "partial": "Hash Host",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Data-Hash-Consistent/docs/Data-Hash-Consistent.html#t:Host",
      "description": {
        "fct-module": "Data.Hash.Consistent",
        "fct-package": "Data-Hash-Consistent",
        "fct-signature": "type",
        "fct-source": "src/Data-Hash-Consistent.html#Host",
        "fct-type": "type",
        "title": "Host"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Hash Consistent",
        "module": "Data.Hash.Consistent",
        "name": "Host",
        "normalized": "",
        "package": "Data-Hash-Consistent",
        "partial": "Host",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Data-Hash-Consistent/docs/Data-Hash-Consistent.html#v:add",
      "description": {
        "fct-module": "Data.Hash.Consistent",
        "fct-package": "Data-Hash-Consistent",
        "fct-signature": "[Host] -\u003e Int -\u003e ConsistentHash -\u003e ConsistentHash",
        "fct-source": "src/Data-Hash-Consistent.html#add",
        "fct-type": "function",
        "title": "add"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Hash Consistent",
        "module": "Data.Hash.Consistent",
        "name": "add",
        "normalized": "[Host]-\u003eInt-\u003eConsistentHash-\u003eConsistentHash",
        "package": "Data-Hash-Consistent",
        "partial": "",
        "signature": "[Host]-\u003eInt-\u003eConsistentHash-\u003eConsistentHash"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Data-Hash-Consistent/docs/Data-Hash-Consistent.html#v:del",
      "description": {
        "fct-module": "Data.Hash.Consistent",
        "fct-package": "Data-Hash-Consistent",
        "fct-signature": "[Host] -\u003e Int -\u003e ConsistentHash -\u003e ConsistentHash",
        "fct-source": "src/Data-Hash-Consistent.html#del",
        "fct-type": "function",
        "title": "del"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Hash Consistent",
        "module": "Data.Hash.Consistent",
        "name": "del",
        "normalized": "[Host]-\u003eInt-\u003eConsistentHash-\u003eConsistentHash",
        "package": "Data-Hash-Consistent",
        "partial": "",
        "signature": "[Host]-\u003eInt-\u003eConsistentHash-\u003eConsistentHash"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Data-Hash-Consistent/docs/Data-Hash-Consistent.html#v:hashHosts",
      "description": {
        "fct-module": "Data.Hash.Consistent",
        "fct-package": "Data-Hash-Consistent",
        "fct-signature": "[Host] -\u003e Int -\u003e ConsistentHash",
        "fct-source": "src/Data-Hash-Consistent.html#hashHosts",
        "fct-type": "function",
        "title": "hashHosts"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Hash Consistent",
        "module": "Data.Hash.Consistent",
        "name": "hashHosts",
        "normalized": "[Host]-\u003eInt-\u003eConsistentHash",
        "package": "Data-Hash-Consistent",
        "partial": "Hosts",
        "signature": "[Host]-\u003eInt-\u003eConsistentHash"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Data-Hash-Consistent/docs/Data-Hash-Consistent.html#v:new",
      "description": {
        "fct-module": "Data.Hash.Consistent",
        "fct-package": "Data-Hash-Consistent",
        "fct-signature": "ConsistentHash",
        "fct-source": "src/Data-Hash-Consistent.html#new",
        "fct-type": "function",
        "title": "new"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Hash Consistent",
        "module": "Data.Hash.Consistent",
        "name": "new",
        "normalized": "",
        "package": "Data-Hash-Consistent",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Data-Hash-Consistent/docs/Data-Hash-Consistent.html#v:search",
      "description": {
        "fct-module": "Data.Hash.Consistent",
        "fct-package": "Data-Hash-Consistent",
        "fct-signature": "Hash -\u003e ConsistentHash -\u003e Int",
        "fct-source": "src/Data-Hash-Consistent.html#search",
        "fct-type": "function",
        "title": "search"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Hash Consistent",
        "module": "Data.Hash.Consistent",
        "name": "search",
        "normalized": "Hash-\u003eConsistentHash-\u003eInt",
        "package": "Data-Hash-Consistent",
        "partial": "",
        "signature": "Hash-\u003eConsistentHash-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Data-Hash-Consistent/docs/Data-Hash-Consistent.html#v:targetHost",
      "description": {
        "fct-module": "Data.Hash.Consistent",
        "fct-package": "Data-Hash-Consistent",
        "fct-signature": "Hash -\u003e ConsistentHash -\u003e HashHost",
        "fct-source": "src/Data-Hash-Consistent.html#targetHost",
        "fct-type": "function",
        "title": "targetHost"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Hash Consistent",
        "module": "Data.Hash.Consistent",
        "name": "targetHost",
        "normalized": "Hash-\u003eConsistentHash-\u003eHashHost",
        "package": "Data-Hash-Consistent",
        "partial": "Host",
        "signature": "Hash-\u003eConsistentHash-\u003eHashHost"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Data-Hash-Consistent/docs/Data-Hash-Consistent.html#v:textCrc32",
      "description": {
        "fct-module": "Data.Hash.Consistent",
        "fct-package": "Data-Hash-Consistent",
        "fct-signature": "String -\u003e Hash",
        "fct-source": "src/Data-Hash-Consistent.html#textCrc32",
        "fct-type": "function",
        "title": "textCrc32"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Hash Consistent",
        "module": "Data.Hash.Consistent",
        "name": "textCrc32",
        "normalized": "String-\u003eHash",
        "package": "Data-Hash-Consistent",
        "partial": "Crc",
        "signature": "String-\u003eHash"
      }
    }
  }
]