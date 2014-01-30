[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-dword/docs/Data-DoubleWord-TH.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTemplate Haskell utilities for generating double words declarations\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.DoubleWord.TH",
        "fct-package": "data-dword",
        "fct-signature": "module",
        "fct-source": "src/Data-DoubleWord-TH.html",
        "fct-type": "module",
        "title": "TH"
      },
      "index": {
        "description": "Template Haskell utilities for generating double words declarations",
        "hierarchy": "Data DoubleWord TH",
        "module": "Data.DoubleWord.TH",
        "name": "TH",
        "normalized": "",
        "package": "data-dword",
        "partial": "TH",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-dword/docs/Data-DoubleWord-TH.html#v:mkDoubleWord",
      "description": {
        "fct-descr": "\u003cp\u003eDeclare signed and unsigned binary word types built from\n   the specified low and high halves. The high halves \u003cem\u003emust\u003c/em\u003e have\n   less or equal bit-length than the lover half. For each data type\n   the following instances are declared: \u003ccode\u003e\u003ca\u003eDoubleWord\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eEq\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eOrd\u003c/a\u003e\u003c/code\u003e,\n   \u003ccode\u003e\u003ca\u003eBounded\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eEnum\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eNum\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eReal\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eIntegral\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eRead\u003c/a\u003e\u003c/code\u003e,\n   \u003ccode\u003e\u003ca\u003eHashable\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eIx\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eBits\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eBinaryWord\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.DoubleWord.TH",
        "fct-package": "data-dword",
        "fct-signature": "String-\u003e String-\u003e Strict-\u003e Name-\u003e String-\u003e String-\u003e Strict-\u003e Name-\u003e Strict-\u003e Name-\u003e [Name]-\u003e Q [Dec]",
        "fct-type": "function",
        "title": "mkDoubleWord"
      },
      "index": {
        "description": "Declare signed and unsigned binary word types built from the specified low and high halves The high halves must have less or equal bit-length than the lover half For each data type the following instances are declared DoubleWord Eq Ord Bounded Enum Num Real Integral Show Read Hashable Ix Bits BinaryWord",
        "hierarchy": "Data DoubleWord TH",
        "module": "Data.DoubleWord.TH",
        "name": "mkDoubleWord",
        "normalized": "String-\u003eString-\u003eStrict-\u003eName-\u003eString-\u003eString-\u003eStrict-\u003eName-\u003eStrict-\u003eName-\u003e[Name]-\u003eQ[Dec]",
        "package": "data-dword",
        "partial": "Double Word",
        "signature": "String-\u003eString-\u003eStrict-\u003eName-\u003eString-\u003eString-\u003eStrict-\u003eName-\u003eStrict-\u003eName-\u003e[Name]-\u003eQ[Dec]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-dword/docs/Data-DoubleWord-TH.html#v:mkUnpackedDoubleWord",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003emkUnpackedDoubleWord\u003c/a\u003e\u003c/code\u003e u uh s sh l\u003c/code\u003e is an alias for\n   \u003ccode\u003e\u003ccode\u003e\u003ca\u003emkDoubleWord\u003c/a\u003e\u003c/code\u003e u u \u003ccode\u003e\u003ca\u003eUnpacked\u003c/a\u003e\u003c/code\u003e uh s s \u003ccode\u003e\u003ca\u003eUnpacked\u003c/a\u003e\u003c/code\u003e sh \u003ccode\u003e\u003ca\u003eUnpacked\u003c/a\u003e\u003c/code\u003e l\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.DoubleWord.TH",
        "fct-package": "data-dword",
        "fct-signature": "String-\u003e Name-\u003e String-\u003e Name-\u003e Name-\u003e [Name]-\u003e Q [Dec]",
        "fct-type": "function",
        "title": "mkUnpackedDoubleWord"
      },
      "index": {
        "description": "mkUnpackedDoubleWord uh sh is an alias for mkDoubleWord Unpacked uh Unpacked sh Unpacked",
        "hierarchy": "Data DoubleWord TH",
        "module": "Data.DoubleWord.TH",
        "name": "mkUnpackedDoubleWord",
        "normalized": "String-\u003eName-\u003eString-\u003eName-\u003eName-\u003e[Name]-\u003eQ[Dec]",
        "package": "data-dword",
        "partial": "Unpacked Double Word",
        "signature": "String-\u003eName-\u003eString-\u003eName-\u003eName-\u003e[Name]-\u003eQ[Dec]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-dword/docs/Data-DoubleWord.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides strict (low and high halves are unpacked)\n   signed and unsigned binary word data types of sizes 96, 128,\n   160, 192, 224, and 256 bits.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.DoubleWord",
        "fct-package": "data-dword",
        "fct-signature": "module",
        "fct-source": "src/Data-DoubleWord.html",
        "fct-type": "module",
        "title": "DoubleWord"
      },
      "index": {
        "description": "This module provides strict low and high halves are unpacked signed and unsigned binary word data types of sizes and bits",
        "hierarchy": "Data DoubleWord",
        "module": "Data.DoubleWord",
        "name": "DoubleWord",
        "normalized": "",
        "package": "data-dword",
        "partial": "Double Word",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-dword/docs/Data-DoubleWord.html#t:BinaryWord",
      "description": {
        "fct-descr": "\u003cp\u003eExtra bit-manipulation functions for binary words of fixed length.\n\u003c/p\u003e",
        "fct-module": "Data.DoubleWord",
        "fct-package": "data-dword",
        "fct-signature": "class",
        "fct-source": "src/Data-DoubleWord-Base.html#BinaryWord",
        "fct-type": "class",
        "title": "BinaryWord"
      },
      "index": {
        "description": "Extra bit-manipulation functions for binary words of fixed length",
        "hierarchy": "Data DoubleWord",
        "module": "Data.DoubleWord",
        "name": "BinaryWord",
        "normalized": "",
        "package": "data-dword",
        "partial": "Binary Word",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-dword/docs/Data-DoubleWord.html#t:DoubleWord",
      "description": {
        "fct-descr": "\u003cp\u003eDefines a particular way to split a binary word in halves.\n\u003c/p\u003e",
        "fct-module": "Data.DoubleWord",
        "fct-package": "data-dword",
        "fct-signature": "class",
        "fct-source": "src/Data-DoubleWord-Base.html#DoubleWord",
        "fct-type": "class",
        "title": "DoubleWord"
      },
      "index": {
        "description": "Defines particular way to split binary word in halves",
        "hierarchy": "Data DoubleWord",
        "module": "Data.DoubleWord",
        "name": "DoubleWord",
        "normalized": "",
        "package": "data-dword",
        "partial": "Double Word",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-dword/docs/Data-DoubleWord.html#t:Int128",
      "description": {
        "fct-module": "Data.DoubleWord",
        "fct-package": "data-dword",
        "fct-signature": "data",
        "fct-source": "src/Data-DoubleWord.html#Int128",
        "fct-type": "data",
        "title": "Int128"
      },
      "index": {
        "description": "",
        "hierarchy": "Data DoubleWord",
        "module": "Data.DoubleWord",
        "name": "Int128",
        "normalized": "",
        "package": "data-dword",
        "partial": "Int",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-dword/docs/Data-DoubleWord.html#t:Int160",
      "description": {
        "fct-module": "Data.DoubleWord",
        "fct-package": "data-dword",
        "fct-signature": "data",
        "fct-source": "src/Data-DoubleWord.html#Int160",
        "fct-type": "data",
        "title": "Int160"
      },
      "index": {
        "description": "",
        "hierarchy": "Data DoubleWord",
        "module": "Data.DoubleWord",
        "name": "Int160",
        "normalized": "",
        "package": "data-dword",
        "partial": "Int",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-dword/docs/Data-DoubleWord.html#t:Int192",
      "description": {
        "fct-module": "Data.DoubleWord",
        "fct-package": "data-dword",
        "fct-signature": "data",
        "fct-source": "src/Data-DoubleWord.html#Int192",
        "fct-type": "data",
        "title": "Int192"
      },
      "index": {
        "description": "",
        "hierarchy": "Data DoubleWord",
        "module": "Data.DoubleWord",
        "name": "Int192",
        "normalized": "",
        "package": "data-dword",
        "partial": "Int",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-dword/docs/Data-DoubleWord.html#t:Int224",
      "description": {
        "fct-module": "Data.DoubleWord",
        "fct-package": "data-dword",
        "fct-signature": "data",
        "fct-source": "src/Data-DoubleWord.html#Int224",
        "fct-type": "data",
        "title": "Int224"
      },
      "index": {
        "description": "",
        "hierarchy": "Data DoubleWord",
        "module": "Data.DoubleWord",
        "name": "Int224",
        "normalized": "",
        "package": "data-dword",
        "partial": "Int",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-dword/docs/Data-DoubleWord.html#t:Int256",
      "description": {
        "fct-module": "Data.DoubleWord",
        "fct-package": "data-dword",
        "fct-signature": "data",
        "fct-source": "src/Data-DoubleWord.html#Int256",
        "fct-type": "data",
        "title": "Int256"
      },
      "index": {
        "description": "",
        "hierarchy": "Data DoubleWord",
        "module": "Data.DoubleWord",
        "name": "Int256",
        "normalized": "",
        "package": "data-dword",
        "partial": "Int",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-dword/docs/Data-DoubleWord.html#t:Int96",
      "description": {
        "fct-module": "Data.DoubleWord",
        "fct-package": "data-dword",
        "fct-signature": "data",
        "fct-source": "src/Data-DoubleWord.html#Int96",
        "fct-type": "data",
        "title": "Int96"
      },
      "index": {
        "description": "",
        "hierarchy": "Data DoubleWord",
        "module": "Data.DoubleWord",
        "name": "Int96",
        "normalized": "",
        "package": "data-dword",
        "partial": "Int",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-dword/docs/Data-DoubleWord.html#t:Word128",
      "description": {
        "fct-module": "Data.DoubleWord",
        "fct-package": "data-dword",
        "fct-signature": "data",
        "fct-source": "src/Data-DoubleWord.html#Word128",
        "fct-type": "data",
        "title": "Word128"
      },
      "index": {
        "description": "",
        "hierarchy": "Data DoubleWord",
        "module": "Data.DoubleWord",
        "name": "Word128",
        "normalized": "",
        "package": "data-dword",
        "partial": "Word",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-dword/docs/Data-DoubleWord.html#t:Word160",
      "description": {
        "fct-module": "Data.DoubleWord",
        "fct-package": "data-dword",
        "fct-signature": "data",
        "fct-source": "src/Data-DoubleWord.html#Word160",
        "fct-type": "data",
        "title": "Word160"
      },
      "index": {
        "description": "",
        "hierarchy": "Data DoubleWord",
        "module": "Data.DoubleWord",
        "name": "Word160",
        "normalized": "",
        "package": "data-dword",
        "partial": "Word",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-dword/docs/Data-DoubleWord.html#t:Word192",
      "description": {
        "fct-module": "Data.DoubleWord",
        "fct-package": "data-dword",
        "fct-signature": "data",
        "fct-source": "src/Data-DoubleWord.html#Word192",
        "fct-type": "data",
        "title": "Word192"
      },
      "index": {
        "description": "",
        "hierarchy": "Data DoubleWord",
        "module": "Data.DoubleWord",
        "name": "Word192",
        "normalized": "",
        "package": "data-dword",
        "partial": "Word",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-dword/docs/Data-DoubleWord.html#t:Word224",
      "description": {
        "fct-module": "Data.DoubleWord",
        "fct-package": "data-dword",
        "fct-signature": "data",
        "fct-source": "src/Data-DoubleWord.html#Word224",
        "fct-type": "data",
        "title": "Word224"
      },
      "index": {
        "description": "",
        "hierarchy": "Data DoubleWord",
        "module": "Data.DoubleWord",
        "name": "Word224",
        "normalized": "",
        "package": "data-dword",
        "partial": "Word",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-dword/docs/Data-DoubleWord.html#t:Word256",
      "description": {
        "fct-module": "Data.DoubleWord",
        "fct-package": "data-dword",
        "fct-signature": "data",
        "fct-source": "src/Data-DoubleWord.html#Word256",
        "fct-type": "data",
        "title": "Word256"
      },
      "index": {
        "description": "",
        "hierarchy": "Data DoubleWord",
        "module": "Data.DoubleWord",
        "name": "Word256",
        "normalized": "",
        "package": "data-dword",
        "partial": "Word",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-dword/docs/Data-DoubleWord.html#t:Word96",
      "description": {
        "fct-module": "Data.DoubleWord",
        "fct-package": "data-dword",
        "fct-signature": "data",
        "fct-source": "src/Data-DoubleWord.html#Word96",
        "fct-type": "data",
        "title": "Word96"
      },
      "index": {
        "description": "",
        "hierarchy": "Data DoubleWord",
        "module": "Data.DoubleWord",
        "name": "Word96",
        "normalized": "",
        "package": "data-dword",
        "partial": "Word",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-dword/docs/Data-DoubleWord.html#v:Int128",
      "description": {
        "fct-module": "Data.DoubleWord",
        "fct-package": "data-dword",
        "fct-signature": "Int128 !Int64 !Word64",
        "fct-source": "src/Data-DoubleWord.html#Int128",
        "fct-type": "function",
        "title": "Int128"
      },
      "index": {
        "description": "",
        "hierarchy": "Data DoubleWord",
        "module": "Data.DoubleWord",
        "name": "Int128",
        "normalized": "",
        "package": "data-dword",
        "partial": "Int",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-dword/docs/Data-DoubleWord.html#v:Int160",
      "description": {
        "fct-module": "Data.DoubleWord",
        "fct-package": "data-dword",
        "fct-signature": "Int160 !Int32 !Word128",
        "fct-source": "src/Data-DoubleWord.html#Int160",
        "fct-type": "function",
        "title": "Int160"
      },
      "index": {
        "description": "",
        "hierarchy": "Data DoubleWord",
        "module": "Data.DoubleWord",
        "name": "Int160",
        "normalized": "",
        "package": "data-dword",
        "partial": "Int",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-dword/docs/Data-DoubleWord.html#v:Int192",
      "description": {
        "fct-module": "Data.DoubleWord",
        "fct-package": "data-dword",
        "fct-signature": "Int192 !Int64 !Word128",
        "fct-source": "src/Data-DoubleWord.html#Int192",
        "fct-type": "function",
        "title": "Int192"
      },
      "index": {
        "description": "",
        "hierarchy": "Data DoubleWord",
        "module": "Data.DoubleWord",
        "name": "Int192",
        "normalized": "",
        "package": "data-dword",
        "partial": "Int",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-dword/docs/Data-DoubleWord.html#v:Int224",
      "description": {
        "fct-module": "Data.DoubleWord",
        "fct-package": "data-dword",
        "fct-signature": "Int224 !Int96 !Word128",
        "fct-source": "src/Data-DoubleWord.html#Int224",
        "fct-type": "function",
        "title": "Int224"
      },
      "index": {
        "description": "",
        "hierarchy": "Data DoubleWord",
        "module": "Data.DoubleWord",
        "name": "Int224",
        "normalized": "",
        "package": "data-dword",
        "partial": "Int",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-dword/docs/Data-DoubleWord.html#v:Int256",
      "description": {
        "fct-module": "Data.DoubleWord",
        "fct-package": "data-dword",
        "fct-signature": "Int256 !Int128 !Word128",
        "fct-source": "src/Data-DoubleWord.html#Int256",
        "fct-type": "function",
        "title": "Int256"
      },
      "index": {
        "description": "",
        "hierarchy": "Data DoubleWord",
        "module": "Data.DoubleWord",
        "name": "Int256",
        "normalized": "",
        "package": "data-dword",
        "partial": "Int",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-dword/docs/Data-DoubleWord.html#v:Int96",
      "description": {
        "fct-module": "Data.DoubleWord",
        "fct-package": "data-dword",
        "fct-signature": "Int96 !Int32 !Word64",
        "fct-source": "src/Data-DoubleWord.html#Int96",
        "fct-type": "function",
        "title": "Int96"
      },
      "index": {
        "description": "",
        "hierarchy": "Data DoubleWord",
        "module": "Data.DoubleWord",
        "name": "Int96",
        "normalized": "",
        "package": "data-dword",
        "partial": "Int",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-dword/docs/Data-DoubleWord.html#v:Word128",
      "description": {
        "fct-module": "Data.DoubleWord",
        "fct-package": "data-dword",
        "fct-signature": "Word128 !Word64 !Word64",
        "fct-source": "src/Data-DoubleWord.html#Word128",
        "fct-type": "function",
        "title": "Word128"
      },
      "index": {
        "description": "",
        "hierarchy": "Data DoubleWord",
        "module": "Data.DoubleWord",
        "name": "Word128",
        "normalized": "",
        "package": "data-dword",
        "partial": "Word",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-dword/docs/Data-DoubleWord.html#v:Word160",
      "description": {
        "fct-module": "Data.DoubleWord",
        "fct-package": "data-dword",
        "fct-signature": "Word160 !Word32 !Word128",
        "fct-source": "src/Data-DoubleWord.html#Word160",
        "fct-type": "function",
        "title": "Word160"
      },
      "index": {
        "description": "",
        "hierarchy": "Data DoubleWord",
        "module": "Data.DoubleWord",
        "name": "Word160",
        "normalized": "",
        "package": "data-dword",
        "partial": "Word",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-dword/docs/Data-DoubleWord.html#v:Word192",
      "description": {
        "fct-module": "Data.DoubleWord",
        "fct-package": "data-dword",
        "fct-signature": "Word192 !Word64 !Word128",
        "fct-source": "src/Data-DoubleWord.html#Word192",
        "fct-type": "function",
        "title": "Word192"
      },
      "index": {
        "description": "",
        "hierarchy": "Data DoubleWord",
        "module": "Data.DoubleWord",
        "name": "Word192",
        "normalized": "",
        "package": "data-dword",
        "partial": "Word",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-dword/docs/Data-DoubleWord.html#v:Word224",
      "description": {
        "fct-module": "Data.DoubleWord",
        "fct-package": "data-dword",
        "fct-signature": "Word224 !Word96 !Word128",
        "fct-source": "src/Data-DoubleWord.html#Word224",
        "fct-type": "function",
        "title": "Word224"
      },
      "index": {
        "description": "",
        "hierarchy": "Data DoubleWord",
        "module": "Data.DoubleWord",
        "name": "Word224",
        "normalized": "",
        "package": "data-dword",
        "partial": "Word",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-dword/docs/Data-DoubleWord.html#v:Word256",
      "description": {
        "fct-module": "Data.DoubleWord",
        "fct-package": "data-dword",
        "fct-signature": "Word256 !Word128 !Word128",
        "fct-source": "src/Data-DoubleWord.html#Word256",
        "fct-type": "function",
        "title": "Word256"
      },
      "index": {
        "description": "",
        "hierarchy": "Data DoubleWord",
        "module": "Data.DoubleWord",
        "name": "Word256",
        "normalized": "",
        "package": "data-dword",
        "partial": "Word",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-dword/docs/Data-DoubleWord.html#v:Word96",
      "description": {
        "fct-module": "Data.DoubleWord",
        "fct-package": "data-dword",
        "fct-signature": "Word96 !Word32 !Word64",
        "fct-source": "src/Data-DoubleWord.html#Word96",
        "fct-type": "function",
        "title": "Word96"
      },
      "index": {
        "description": "",
        "hierarchy": "Data DoubleWord",
        "module": "Data.DoubleWord",
        "name": "Word96",
        "normalized": "",
        "package": "data-dword",
        "partial": "Word",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-dword/docs/Data-DoubleWord.html#v:allOnes",
      "description": {
        "fct-descr": "\u003cp\u003eThe word with all bits set to 1\n\u003c/p\u003e",
        "fct-module": "Data.DoubleWord",
        "fct-package": "data-dword",
        "fct-signature": "w",
        "fct-source": "src/Data-DoubleWord-Base.html#allOnes",
        "fct-type": "method",
        "title": "allOnes"
      },
      "index": {
        "description": "The word with all bits set to",
        "hierarchy": "Data DoubleWord",
        "module": "Data.DoubleWord",
        "name": "allOnes",
        "normalized": "",
        "package": "data-dword",
        "partial": "Ones",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-dword/docs/Data-DoubleWord.html#v:allZeroes",
      "description": {
        "fct-descr": "\u003cp\u003eThe word with all bits set to 0\n\u003c/p\u003e",
        "fct-module": "Data.DoubleWord",
        "fct-package": "data-dword",
        "fct-signature": "w",
        "fct-source": "src/Data-DoubleWord-Base.html#allZeroes",
        "fct-type": "method",
        "title": "allZeroes"
      },
      "index": {
        "description": "The word with all bits set to",
        "hierarchy": "Data DoubleWord",
        "module": "Data.DoubleWord",
        "name": "allZeroes",
        "normalized": "",
        "package": "data-dword",
        "partial": "Zeroes",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-dword/docs/Data-DoubleWord.html#v:extendLo",
      "description": {
        "fct-descr": "\u003cp\u003eExtend the low half\n\u003c/p\u003e",
        "fct-module": "Data.DoubleWord",
        "fct-package": "data-dword",
        "fct-signature": "LoWord w -\u003e w",
        "fct-source": "src/Data-DoubleWord-Base.html#extendLo",
        "fct-type": "method",
        "title": "extendLo"
      },
      "index": {
        "description": "Extend the low half",
        "hierarchy": "Data DoubleWord",
        "module": "Data.DoubleWord",
        "name": "extendLo",
        "normalized": "LoWord a-\u003ea",
        "package": "data-dword",
        "partial": "Lo",
        "signature": "LoWord w-\u003ew"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-dword/docs/Data-DoubleWord.html#v:fromHiAndLo",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct a word from the low and high halves\n\u003c/p\u003e",
        "fct-module": "Data.DoubleWord",
        "fct-package": "data-dword",
        "fct-signature": "HiWord w -\u003e LoWord w -\u003e w",
        "fct-source": "src/Data-DoubleWord-Base.html#fromHiAndLo",
        "fct-type": "method",
        "title": "fromHiAndLo"
      },
      "index": {
        "description": "Construct word from the low and high halves",
        "hierarchy": "Data DoubleWord",
        "module": "Data.DoubleWord",
        "name": "fromHiAndLo",
        "normalized": "HiWord a-\u003eLoWord a-\u003ea",
        "package": "data-dword",
        "partial": "Hi And Lo",
        "signature": "HiWord w-\u003eLoWord w-\u003ew"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-dword/docs/Data-DoubleWord.html#v:hiWord",
      "description": {
        "fct-descr": "\u003cp\u003eThe high half of the word\n\u003c/p\u003e",
        "fct-module": "Data.DoubleWord",
        "fct-package": "data-dword",
        "fct-signature": "w -\u003e HiWord w",
        "fct-source": "src/Data-DoubleWord-Base.html#hiWord",
        "fct-type": "method",
        "title": "hiWord"
      },
      "index": {
        "description": "The high half of the word",
        "hierarchy": "Data DoubleWord",
        "module": "Data.DoubleWord",
        "name": "hiWord",
        "normalized": "a-\u003eHiWord a",
        "package": "data-dword",
        "partial": "Word",
        "signature": "w-\u003eHiWord w"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-dword/docs/Data-DoubleWord.html#v:leadingZeroes",
      "description": {
        "fct-descr": "\u003cp\u003eNumber of leading (from MSB) zero bits\n\u003c/p\u003e",
        "fct-module": "Data.DoubleWord",
        "fct-package": "data-dword",
        "fct-signature": "w -\u003e Int",
        "fct-source": "src/Data-DoubleWord-Base.html#leadingZeroes",
        "fct-type": "method",
        "title": "leadingZeroes"
      },
      "index": {
        "description": "Number of leading from MSB zero bits",
        "hierarchy": "Data DoubleWord",
        "module": "Data.DoubleWord",
        "name": "leadingZeroes",
        "normalized": "a-\u003eInt",
        "package": "data-dword",
        "partial": "Zeroes",
        "signature": "w-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-dword/docs/Data-DoubleWord.html#v:loWord",
      "description": {
        "fct-descr": "\u003cp\u003eThe low half of the word\n\u003c/p\u003e",
        "fct-module": "Data.DoubleWord",
        "fct-package": "data-dword",
        "fct-signature": "w -\u003e LoWord w",
        "fct-source": "src/Data-DoubleWord-Base.html#loWord",
        "fct-type": "method",
        "title": "loWord"
      },
      "index": {
        "description": "The low half of the word",
        "hierarchy": "Data DoubleWord",
        "module": "Data.DoubleWord",
        "name": "loWord",
        "normalized": "a-\u003eLoWord a",
        "package": "data-dword",
        "partial": "Word",
        "signature": "w-\u003eLoWord w"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-dword/docs/Data-DoubleWord.html#v:lsb",
      "description": {
        "fct-descr": "\u003cp\u003eThe word with LSB set to 1 and all the other bits set to 0\n\u003c/p\u003e",
        "fct-module": "Data.DoubleWord",
        "fct-package": "data-dword",
        "fct-signature": "w",
        "fct-source": "src/Data-DoubleWord-Base.html#lsb",
        "fct-type": "method",
        "title": "lsb"
      },
      "index": {
        "description": "The word with LSB set to and all the other bits set to",
        "hierarchy": "Data DoubleWord",
        "module": "Data.DoubleWord",
        "name": "lsb",
        "normalized": "",
        "package": "data-dword",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-dword/docs/Data-DoubleWord.html#v:msb",
      "description": {
        "fct-descr": "\u003cp\u003eThe word with MSB set to 1 and all the other bits set to 0\n\u003c/p\u003e",
        "fct-module": "Data.DoubleWord",
        "fct-package": "data-dword",
        "fct-signature": "w",
        "fct-source": "src/Data-DoubleWord-Base.html#msb",
        "fct-type": "method",
        "title": "msb"
      },
      "index": {
        "description": "The word with MSB set to and all the other bits set to",
        "hierarchy": "Data DoubleWord",
        "module": "Data.DoubleWord",
        "name": "msb",
        "normalized": "",
        "package": "data-dword",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-dword/docs/Data-DoubleWord.html#v:signExtendLo",
      "description": {
        "fct-descr": "\u003cp\u003eSign-extend the low half\n\u003c/p\u003e",
        "fct-module": "Data.DoubleWord",
        "fct-package": "data-dword",
        "fct-signature": "SignedWord (LoWord w) -\u003e w",
        "fct-source": "src/Data-DoubleWord-Base.html#signExtendLo",
        "fct-type": "method",
        "title": "signExtendLo"
      },
      "index": {
        "description": "Sign-extend the low half",
        "hierarchy": "Data DoubleWord",
        "module": "Data.DoubleWord",
        "name": "signExtendLo",
        "normalized": "SignedWord(LoWord a)-\u003ea",
        "package": "data-dword",
        "partial": "Extend Lo",
        "signature": "SignedWord(LoWord w)-\u003ew"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-dword/docs/Data-DoubleWord.html#v:signedWord",
      "description": {
        "fct-descr": "\u003cp\u003eConvert the word to the signed type (identical to \u003ccode\u003e\u003ca\u003efromIntegral\u003c/a\u003e\u003c/code\u003e)\n\u003c/p\u003e",
        "fct-module": "Data.DoubleWord",
        "fct-package": "data-dword",
        "fct-signature": "w -\u003e SignedWord w",
        "fct-source": "src/Data-DoubleWord-Base.html#signedWord",
        "fct-type": "method",
        "title": "signedWord"
      },
      "index": {
        "description": "Convert the word to the signed type identical to fromIntegral",
        "hierarchy": "Data DoubleWord",
        "module": "Data.DoubleWord",
        "name": "signedWord",
        "normalized": "a-\u003eSignedWord a",
        "package": "data-dword",
        "partial": "Word",
        "signature": "w-\u003eSignedWord w"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-dword/docs/Data-DoubleWord.html#v:testLsb",
      "description": {
        "fct-descr": "\u003cp\u003eTest if the LSB is 1\n\u003c/p\u003e",
        "fct-module": "Data.DoubleWord",
        "fct-package": "data-dword",
        "fct-signature": "w -\u003e Bool",
        "fct-source": "src/Data-DoubleWord-Base.html#testLsb",
        "fct-type": "method",
        "title": "testLsb"
      },
      "index": {
        "description": "Test if the LSB is",
        "hierarchy": "Data DoubleWord",
        "module": "Data.DoubleWord",
        "name": "testLsb",
        "normalized": "a-\u003eBool",
        "package": "data-dword",
        "partial": "Lsb",
        "signature": "w-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-dword/docs/Data-DoubleWord.html#v:testMsb",
      "description": {
        "fct-descr": "\u003cp\u003eTest if the MSB is 1\n\u003c/p\u003e",
        "fct-module": "Data.DoubleWord",
        "fct-package": "data-dword",
        "fct-signature": "w -\u003e Bool",
        "fct-source": "src/Data-DoubleWord-Base.html#testMsb",
        "fct-type": "method",
        "title": "testMsb"
      },
      "index": {
        "description": "Test if the MSB is",
        "hierarchy": "Data DoubleWord",
        "module": "Data.DoubleWord",
        "name": "testMsb",
        "normalized": "a-\u003eBool",
        "package": "data-dword",
        "partial": "Msb",
        "signature": "w-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-dword/docs/Data-DoubleWord.html#v:trailingZeroes",
      "description": {
        "fct-descr": "\u003cp\u003eNumber or trailing (from LSB) zero bits\n\u003c/p\u003e",
        "fct-module": "Data.DoubleWord",
        "fct-package": "data-dword",
        "fct-signature": "w -\u003e Int",
        "fct-source": "src/Data-DoubleWord-Base.html#trailingZeroes",
        "fct-type": "method",
        "title": "trailingZeroes"
      },
      "index": {
        "description": "Number or trailing from LSB zero bits",
        "hierarchy": "Data DoubleWord",
        "module": "Data.DoubleWord",
        "name": "trailingZeroes",
        "normalized": "a-\u003eInt",
        "package": "data-dword",
        "partial": "Zeroes",
        "signature": "w-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-dword/docs/Data-DoubleWord.html#v:unsignedWord",
      "description": {
        "fct-descr": "\u003cp\u003eConvert the word to the unsigned type (identical to \u003ccode\u003e\u003ca\u003efromIntegral\u003c/a\u003e\u003c/code\u003e)\n\u003c/p\u003e",
        "fct-module": "Data.DoubleWord",
        "fct-package": "data-dword",
        "fct-signature": "w -\u003e UnsignedWord w",
        "fct-source": "src/Data-DoubleWord-Base.html#unsignedWord",
        "fct-type": "method",
        "title": "unsignedWord"
      },
      "index": {
        "description": "Convert the word to the unsigned type identical to fromIntegral",
        "hierarchy": "Data DoubleWord",
        "module": "Data.DoubleWord",
        "name": "unsignedWord",
        "normalized": "a-\u003eUnsignedWord a",
        "package": "data-dword",
        "partial": "Word",
        "signature": "w-\u003eUnsignedWord w"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-dword/docs/Data-DoubleWord.html#v:unwrappedAdd",
      "description": {
        "fct-descr": "\u003cp\u003eUnwrapped addition\n\u003c/p\u003e",
        "fct-module": "Data.DoubleWord",
        "fct-package": "data-dword",
        "fct-signature": "w -\u003e w -\u003e (w, UnsignedWord w)",
        "fct-source": "src/Data-DoubleWord-Base.html#unwrappedAdd",
        "fct-type": "method",
        "title": "unwrappedAdd"
      },
      "index": {
        "description": "Unwrapped addition",
        "hierarchy": "Data DoubleWord",
        "module": "Data.DoubleWord",
        "name": "unwrappedAdd",
        "normalized": "a-\u003ea-\u003e(a,UnsignedWord a)",
        "package": "data-dword",
        "partial": "Add",
        "signature": "w-\u003ew-\u003e(w,UnsignedWord w)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-dword/docs/Data-DoubleWord.html#v:unwrappedMul",
      "description": {
        "fct-descr": "\u003cp\u003eUnwrapped multiplication\n\u003c/p\u003e",
        "fct-module": "Data.DoubleWord",
        "fct-package": "data-dword",
        "fct-signature": "w -\u003e w -\u003e (w, UnsignedWord w)",
        "fct-source": "src/Data-DoubleWord-Base.html#unwrappedMul",
        "fct-type": "method",
        "title": "unwrappedMul"
      },
      "index": {
        "description": "Unwrapped multiplication",
        "hierarchy": "Data DoubleWord",
        "module": "Data.DoubleWord",
        "name": "unwrappedMul",
        "normalized": "a-\u003ea-\u003e(a,UnsignedWord a)",
        "package": "data-dword",
        "partial": "Mul",
        "signature": "w-\u003ew-\u003e(w,UnsignedWord w)"
      }
    }
  }
]