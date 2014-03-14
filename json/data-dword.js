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
        "word": "data-dword"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTemplate Haskell utilities for generating double words declarations\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.DoubleWord.TH",
          "name": "TH",
          "package": "data-dword",
          "source": "src/Data-DoubleWord-TH.html",
          "type": "module"
        },
        "index": {
          "description": "Template Haskell utilities for generating double words declarations",
          "hierarchy": "Data DoubleWord TH",
          "module": "Data.DoubleWord.TH",
          "name": "TH",
          "package": "data-dword",
          "partial": "TH",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/data-dword/docs/Data-DoubleWord-TH.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDeclare signed and unsigned binary word types built from\n   the specified low and high halves. The high halves \u003cem\u003emust\u003c/em\u003e have\n   less or equal bit-length than the lover half. For each data type\n   the following instances are declared: \u003ccode\u003e\u003ca\u003eDoubleWord\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eEq\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eOrd\u003c/a\u003e\u003c/code\u003e,\n   \u003ccode\u003e\u003ca\u003eBounded\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eEnum\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eNum\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eReal\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eIntegral\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eRead\u003c/a\u003e\u003c/code\u003e,\n   \u003ccode\u003e\u003ca\u003eHashable\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eIx\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eBits\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eBinaryWord\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.DoubleWord.TH",
          "name": "mkDoubleWord",
          "package": "data-dword",
          "signature": "String-\u003e String-\u003e Strict-\u003e Name-\u003e String-\u003e String-\u003e Strict-\u003e Name-\u003e Strict-\u003e Name-\u003e [Name]-\u003e Q [Dec]",
          "type": "function"
        },
        "index": {
          "description": "Declare signed and unsigned binary word types built from the specified low and high halves The high halves must have less or equal bit-length than the lover half For each data type the following instances are declared DoubleWord Eq Ord Bounded Enum Num Real Integral Show Read Hashable Ix Bits BinaryWord",
          "hierarchy": "Data DoubleWord TH",
          "module": "Data.DoubleWord.TH",
          "name": "mkDoubleWord",
          "normalized": "String-\u003eString-\u003eStrict-\u003eName-\u003eString-\u003eString-\u003eStrict-\u003eName-\u003eStrict-\u003eName-\u003e[Name]-\u003eQ[Dec]",
          "package": "data-dword",
          "partial": "Double Word",
          "signature": "String-\u003eString-\u003eStrict-\u003eName-\u003eString-\u003eString-\u003eStrict-\u003eName-\u003eStrict-\u003eName-\u003e[Name]-\u003eQ[Dec]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-dword/docs/Data-DoubleWord-TH.html#v:mkDoubleWord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003emkUnpackedDoubleWord\u003c/a\u003e\u003c/code\u003e u uh s sh l\u003c/code\u003e is an alias for\n   \u003ccode\u003e\u003ccode\u003e\u003ca\u003emkDoubleWord\u003c/a\u003e\u003c/code\u003e u u \u003ccode\u003e\u003ca\u003eUnpacked\u003c/a\u003e\u003c/code\u003e uh s s \u003ccode\u003e\u003ca\u003eUnpacked\u003c/a\u003e\u003c/code\u003e sh \u003ccode\u003e\u003ca\u003eUnpacked\u003c/a\u003e\u003c/code\u003e l\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.DoubleWord.TH",
          "name": "mkUnpackedDoubleWord",
          "package": "data-dword",
          "signature": "String-\u003e Name-\u003e String-\u003e Name-\u003e Name-\u003e [Name]-\u003e Q [Dec]",
          "type": "function"
        },
        "index": {
          "description": "mkUnpackedDoubleWord uh sh is an alias for mkDoubleWord Unpacked uh Unpacked sh Unpacked",
          "hierarchy": "Data DoubleWord TH",
          "module": "Data.DoubleWord.TH",
          "name": "mkUnpackedDoubleWord",
          "normalized": "String-\u003eName-\u003eString-\u003eName-\u003eName-\u003e[Name]-\u003eQ[Dec]",
          "package": "data-dword",
          "partial": "Unpacked Double Word",
          "signature": "String-\u003eName-\u003eString-\u003eName-\u003eName-\u003e[Name]-\u003eQ[Dec]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-dword/docs/Data-DoubleWord-TH.html#v:mkUnpackedDoubleWord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides strict (low and high halves are unpacked)\n   signed and unsigned binary word data types of sizes 96, 128,\n   160, 192, 224, and 256 bits.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.DoubleWord",
          "name": "DoubleWord",
          "package": "data-dword",
          "source": "src/Data-DoubleWord.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides strict low and high halves are unpacked signed and unsigned binary word data types of sizes and bits",
          "hierarchy": "Data DoubleWord",
          "module": "Data.DoubleWord",
          "name": "DoubleWord",
          "package": "data-dword",
          "partial": "Double Word",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/data-dword/docs/Data-DoubleWord.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtra bit-manipulation functions for binary words of fixed length.\n\u003c/p\u003e",
          "module": "Data.DoubleWord",
          "name": "BinaryWord",
          "package": "data-dword",
          "source": "src/Data-DoubleWord-Base.html#BinaryWord",
          "type": "class"
        },
        "index": {
          "description": "Extra bit-manipulation functions for binary words of fixed length",
          "hierarchy": "Data DoubleWord",
          "module": "Data.DoubleWord",
          "name": "BinaryWord",
          "package": "data-dword",
          "partial": "Binary Word",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/data-dword/docs/Data-DoubleWord.html#t:BinaryWord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefines a particular way to split a binary word in halves.\n\u003c/p\u003e",
          "module": "Data.DoubleWord",
          "name": "DoubleWord",
          "package": "data-dword",
          "source": "src/Data-DoubleWord-Base.html#DoubleWord",
          "type": "class"
        },
        "index": {
          "description": "Defines particular way to split binary word in halves",
          "hierarchy": "Data DoubleWord",
          "module": "Data.DoubleWord",
          "name": "DoubleWord",
          "package": "data-dword",
          "partial": "Double Word",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/data-dword/docs/Data-DoubleWord.html#t:DoubleWord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.DoubleWord",
          "name": "Int128",
          "package": "data-dword",
          "source": "src/Data-DoubleWord.html#Int128",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data DoubleWord",
          "module": "Data.DoubleWord",
          "name": "Int128",
          "package": "data-dword",
          "partial": "Int",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/data-dword/docs/Data-DoubleWord.html#t:Int128"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.DoubleWord",
          "name": "Int160",
          "package": "data-dword",
          "source": "src/Data-DoubleWord.html#Int160",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data DoubleWord",
          "module": "Data.DoubleWord",
          "name": "Int160",
          "package": "data-dword",
          "partial": "Int",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/data-dword/docs/Data-DoubleWord.html#t:Int160"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.DoubleWord",
          "name": "Int192",
          "package": "data-dword",
          "source": "src/Data-DoubleWord.html#Int192",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data DoubleWord",
          "module": "Data.DoubleWord",
          "name": "Int192",
          "package": "data-dword",
          "partial": "Int",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/data-dword/docs/Data-DoubleWord.html#t:Int192"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.DoubleWord",
          "name": "Int224",
          "package": "data-dword",
          "source": "src/Data-DoubleWord.html#Int224",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data DoubleWord",
          "module": "Data.DoubleWord",
          "name": "Int224",
          "package": "data-dword",
          "partial": "Int",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/data-dword/docs/Data-DoubleWord.html#t:Int224"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.DoubleWord",
          "name": "Int256",
          "package": "data-dword",
          "source": "src/Data-DoubleWord.html#Int256",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data DoubleWord",
          "module": "Data.DoubleWord",
          "name": "Int256",
          "package": "data-dword",
          "partial": "Int",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/data-dword/docs/Data-DoubleWord.html#t:Int256"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.DoubleWord",
          "name": "Int96",
          "package": "data-dword",
          "source": "src/Data-DoubleWord.html#Int96",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data DoubleWord",
          "module": "Data.DoubleWord",
          "name": "Int96",
          "package": "data-dword",
          "partial": "Int",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/data-dword/docs/Data-DoubleWord.html#t:Int96"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.DoubleWord",
          "name": "Word128",
          "package": "data-dword",
          "source": "src/Data-DoubleWord.html#Word128",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data DoubleWord",
          "module": "Data.DoubleWord",
          "name": "Word128",
          "package": "data-dword",
          "partial": "Word",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/data-dword/docs/Data-DoubleWord.html#t:Word128"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.DoubleWord",
          "name": "Word160",
          "package": "data-dword",
          "source": "src/Data-DoubleWord.html#Word160",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data DoubleWord",
          "module": "Data.DoubleWord",
          "name": "Word160",
          "package": "data-dword",
          "partial": "Word",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/data-dword/docs/Data-DoubleWord.html#t:Word160"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.DoubleWord",
          "name": "Word192",
          "package": "data-dword",
          "source": "src/Data-DoubleWord.html#Word192",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data DoubleWord",
          "module": "Data.DoubleWord",
          "name": "Word192",
          "package": "data-dword",
          "partial": "Word",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/data-dword/docs/Data-DoubleWord.html#t:Word192"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.DoubleWord",
          "name": "Word224",
          "package": "data-dword",
          "source": "src/Data-DoubleWord.html#Word224",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data DoubleWord",
          "module": "Data.DoubleWord",
          "name": "Word224",
          "package": "data-dword",
          "partial": "Word",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/data-dword/docs/Data-DoubleWord.html#t:Word224"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.DoubleWord",
          "name": "Word256",
          "package": "data-dword",
          "source": "src/Data-DoubleWord.html#Word256",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data DoubleWord",
          "module": "Data.DoubleWord",
          "name": "Word256",
          "package": "data-dword",
          "partial": "Word",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/data-dword/docs/Data-DoubleWord.html#t:Word256"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.DoubleWord",
          "name": "Word96",
          "package": "data-dword",
          "source": "src/Data-DoubleWord.html#Word96",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data DoubleWord",
          "module": "Data.DoubleWord",
          "name": "Word96",
          "package": "data-dword",
          "partial": "Word",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/data-dword/docs/Data-DoubleWord.html#t:Word96"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.DoubleWord",
          "name": "Int128",
          "package": "data-dword",
          "signature": "Int128 !Int64 !Word64",
          "source": "src/Data-DoubleWord.html#Int128",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data DoubleWord",
          "module": "Data.DoubleWord",
          "name": "Int128",
          "package": "data-dword",
          "partial": "Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-dword/docs/Data-DoubleWord.html#v:Int128"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.DoubleWord",
          "name": "Int160",
          "package": "data-dword",
          "signature": "Int160 !Int32 !Word128",
          "source": "src/Data-DoubleWord.html#Int160",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data DoubleWord",
          "module": "Data.DoubleWord",
          "name": "Int160",
          "package": "data-dword",
          "partial": "Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-dword/docs/Data-DoubleWord.html#v:Int160"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.DoubleWord",
          "name": "Int192",
          "package": "data-dword",
          "signature": "Int192 !Int64 !Word128",
          "source": "src/Data-DoubleWord.html#Int192",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data DoubleWord",
          "module": "Data.DoubleWord",
          "name": "Int192",
          "package": "data-dword",
          "partial": "Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-dword/docs/Data-DoubleWord.html#v:Int192"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.DoubleWord",
          "name": "Int224",
          "package": "data-dword",
          "signature": "Int224 !Int96 !Word128",
          "source": "src/Data-DoubleWord.html#Int224",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data DoubleWord",
          "module": "Data.DoubleWord",
          "name": "Int224",
          "package": "data-dword",
          "partial": "Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-dword/docs/Data-DoubleWord.html#v:Int224"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.DoubleWord",
          "name": "Int256",
          "package": "data-dword",
          "signature": "Int256 !Int128 !Word128",
          "source": "src/Data-DoubleWord.html#Int256",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data DoubleWord",
          "module": "Data.DoubleWord",
          "name": "Int256",
          "package": "data-dword",
          "partial": "Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-dword/docs/Data-DoubleWord.html#v:Int256"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.DoubleWord",
          "name": "Int96",
          "package": "data-dword",
          "signature": "Int96 !Int32 !Word64",
          "source": "src/Data-DoubleWord.html#Int96",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data DoubleWord",
          "module": "Data.DoubleWord",
          "name": "Int96",
          "package": "data-dword",
          "partial": "Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-dword/docs/Data-DoubleWord.html#v:Int96"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.DoubleWord",
          "name": "Word128",
          "package": "data-dword",
          "signature": "Word128 !Word64 !Word64",
          "source": "src/Data-DoubleWord.html#Word128",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data DoubleWord",
          "module": "Data.DoubleWord",
          "name": "Word128",
          "package": "data-dword",
          "partial": "Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-dword/docs/Data-DoubleWord.html#v:Word128"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.DoubleWord",
          "name": "Word160",
          "package": "data-dword",
          "signature": "Word160 !Word32 !Word128",
          "source": "src/Data-DoubleWord.html#Word160",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data DoubleWord",
          "module": "Data.DoubleWord",
          "name": "Word160",
          "package": "data-dword",
          "partial": "Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-dword/docs/Data-DoubleWord.html#v:Word160"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.DoubleWord",
          "name": "Word192",
          "package": "data-dword",
          "signature": "Word192 !Word64 !Word128",
          "source": "src/Data-DoubleWord.html#Word192",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data DoubleWord",
          "module": "Data.DoubleWord",
          "name": "Word192",
          "package": "data-dword",
          "partial": "Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-dword/docs/Data-DoubleWord.html#v:Word192"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.DoubleWord",
          "name": "Word224",
          "package": "data-dword",
          "signature": "Word224 !Word96 !Word128",
          "source": "src/Data-DoubleWord.html#Word224",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data DoubleWord",
          "module": "Data.DoubleWord",
          "name": "Word224",
          "package": "data-dword",
          "partial": "Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-dword/docs/Data-DoubleWord.html#v:Word224"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.DoubleWord",
          "name": "Word256",
          "package": "data-dword",
          "signature": "Word256 !Word128 !Word128",
          "source": "src/Data-DoubleWord.html#Word256",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data DoubleWord",
          "module": "Data.DoubleWord",
          "name": "Word256",
          "package": "data-dword",
          "partial": "Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-dword/docs/Data-DoubleWord.html#v:Word256"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.DoubleWord",
          "name": "Word96",
          "package": "data-dword",
          "signature": "Word96 !Word32 !Word64",
          "source": "src/Data-DoubleWord.html#Word96",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data DoubleWord",
          "module": "Data.DoubleWord",
          "name": "Word96",
          "package": "data-dword",
          "partial": "Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-dword/docs/Data-DoubleWord.html#v:Word96"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe word with all bits set to 1\n\u003c/p\u003e",
          "module": "Data.DoubleWord",
          "name": "allOnes",
          "package": "data-dword",
          "signature": "w",
          "source": "src/Data-DoubleWord-Base.html#allOnes",
          "type": "method"
        },
        "index": {
          "description": "The word with all bits set to",
          "hierarchy": "Data DoubleWord",
          "module": "Data.DoubleWord",
          "name": "allOnes",
          "package": "data-dword",
          "partial": "Ones",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/data-dword/docs/Data-DoubleWord.html#v:allOnes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe word with all bits set to 0\n\u003c/p\u003e",
          "module": "Data.DoubleWord",
          "name": "allZeroes",
          "package": "data-dword",
          "signature": "w",
          "source": "src/Data-DoubleWord-Base.html#allZeroes",
          "type": "method"
        },
        "index": {
          "description": "The word with all bits set to",
          "hierarchy": "Data DoubleWord",
          "module": "Data.DoubleWord",
          "name": "allZeroes",
          "package": "data-dword",
          "partial": "Zeroes",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/data-dword/docs/Data-DoubleWord.html#v:allZeroes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtend the low half\n\u003c/p\u003e",
          "module": "Data.DoubleWord",
          "name": "extendLo",
          "package": "data-dword",
          "signature": "LoWord w -\u003e w",
          "source": "src/Data-DoubleWord-Base.html#extendLo",
          "type": "method"
        },
        "index": {
          "description": "Extend the low half",
          "hierarchy": "Data DoubleWord",
          "module": "Data.DoubleWord",
          "name": "extendLo",
          "normalized": "LoWord a-\u003ea",
          "package": "data-dword",
          "partial": "Lo",
          "signature": "LoWord w-\u003ew",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/data-dword/docs/Data-DoubleWord.html#v:extendLo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a word from the low and high halves\n\u003c/p\u003e",
          "module": "Data.DoubleWord",
          "name": "fromHiAndLo",
          "package": "data-dword",
          "signature": "HiWord w -\u003e LoWord w -\u003e w",
          "source": "src/Data-DoubleWord-Base.html#fromHiAndLo",
          "type": "method"
        },
        "index": {
          "description": "Construct word from the low and high halves",
          "hierarchy": "Data DoubleWord",
          "module": "Data.DoubleWord",
          "name": "fromHiAndLo",
          "normalized": "HiWord a-\u003eLoWord a-\u003ea",
          "package": "data-dword",
          "partial": "Hi And Lo",
          "signature": "HiWord w-\u003eLoWord w-\u003ew",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/data-dword/docs/Data-DoubleWord.html#v:fromHiAndLo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe high half of the word\n\u003c/p\u003e",
          "module": "Data.DoubleWord",
          "name": "hiWord",
          "package": "data-dword",
          "signature": "w -\u003e HiWord w",
          "source": "src/Data-DoubleWord-Base.html#hiWord",
          "type": "method"
        },
        "index": {
          "description": "The high half of the word",
          "hierarchy": "Data DoubleWord",
          "module": "Data.DoubleWord",
          "name": "hiWord",
          "normalized": "a-\u003eHiWord a",
          "package": "data-dword",
          "partial": "Word",
          "signature": "w-\u003eHiWord w",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/data-dword/docs/Data-DoubleWord.html#v:hiWord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNumber of leading (from MSB) zero bits\n\u003c/p\u003e",
          "module": "Data.DoubleWord",
          "name": "leadingZeroes",
          "package": "data-dword",
          "signature": "w -\u003e Int",
          "source": "src/Data-DoubleWord-Base.html#leadingZeroes",
          "type": "method"
        },
        "index": {
          "description": "Number of leading from MSB zero bits",
          "hierarchy": "Data DoubleWord",
          "module": "Data.DoubleWord",
          "name": "leadingZeroes",
          "normalized": "a-\u003eInt",
          "package": "data-dword",
          "partial": "Zeroes",
          "signature": "w-\u003eInt",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/data-dword/docs/Data-DoubleWord.html#v:leadingZeroes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe low half of the word\n\u003c/p\u003e",
          "module": "Data.DoubleWord",
          "name": "loWord",
          "package": "data-dword",
          "signature": "w -\u003e LoWord w",
          "source": "src/Data-DoubleWord-Base.html#loWord",
          "type": "method"
        },
        "index": {
          "description": "The low half of the word",
          "hierarchy": "Data DoubleWord",
          "module": "Data.DoubleWord",
          "name": "loWord",
          "normalized": "a-\u003eLoWord a",
          "package": "data-dword",
          "partial": "Word",
          "signature": "w-\u003eLoWord w",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/data-dword/docs/Data-DoubleWord.html#v:loWord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe word with LSB set to 1 and all the other bits set to 0\n\u003c/p\u003e",
          "module": "Data.DoubleWord",
          "name": "lsb",
          "package": "data-dword",
          "signature": "w",
          "source": "src/Data-DoubleWord-Base.html#lsb",
          "type": "method"
        },
        "index": {
          "description": "The word with LSB set to and all the other bits set to",
          "hierarchy": "Data DoubleWord",
          "module": "Data.DoubleWord",
          "name": "lsb",
          "package": "data-dword",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/data-dword/docs/Data-DoubleWord.html#v:lsb"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe word with MSB set to 1 and all the other bits set to 0\n\u003c/p\u003e",
          "module": "Data.DoubleWord",
          "name": "msb",
          "package": "data-dword",
          "signature": "w",
          "source": "src/Data-DoubleWord-Base.html#msb",
          "type": "method"
        },
        "index": {
          "description": "The word with MSB set to and all the other bits set to",
          "hierarchy": "Data DoubleWord",
          "module": "Data.DoubleWord",
          "name": "msb",
          "package": "data-dword",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/data-dword/docs/Data-DoubleWord.html#v:msb"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSign-extend the low half\n\u003c/p\u003e",
          "module": "Data.DoubleWord",
          "name": "signExtendLo",
          "package": "data-dword",
          "signature": "SignedWord (LoWord w) -\u003e w",
          "source": "src/Data-DoubleWord-Base.html#signExtendLo",
          "type": "method"
        },
        "index": {
          "description": "Sign-extend the low half",
          "hierarchy": "Data DoubleWord",
          "module": "Data.DoubleWord",
          "name": "signExtendLo",
          "normalized": "SignedWord(LoWord a)-\u003ea",
          "package": "data-dword",
          "partial": "Extend Lo",
          "signature": "SignedWord(LoWord w)-\u003ew",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/data-dword/docs/Data-DoubleWord.html#v:signExtendLo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert the word to the signed type (identical to \u003ccode\u003e\u003ca\u003efromIntegral\u003c/a\u003e\u003c/code\u003e)\n\u003c/p\u003e",
          "module": "Data.DoubleWord",
          "name": "signedWord",
          "package": "data-dword",
          "signature": "w -\u003e SignedWord w",
          "source": "src/Data-DoubleWord-Base.html#signedWord",
          "type": "method"
        },
        "index": {
          "description": "Convert the word to the signed type identical to fromIntegral",
          "hierarchy": "Data DoubleWord",
          "module": "Data.DoubleWord",
          "name": "signedWord",
          "normalized": "a-\u003eSignedWord a",
          "package": "data-dword",
          "partial": "Word",
          "signature": "w-\u003eSignedWord w",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/data-dword/docs/Data-DoubleWord.html#v:signedWord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTest if the LSB is 1\n\u003c/p\u003e",
          "module": "Data.DoubleWord",
          "name": "testLsb",
          "package": "data-dword",
          "signature": "w -\u003e Bool",
          "source": "src/Data-DoubleWord-Base.html#testLsb",
          "type": "method"
        },
        "index": {
          "description": "Test if the LSB is",
          "hierarchy": "Data DoubleWord",
          "module": "Data.DoubleWord",
          "name": "testLsb",
          "normalized": "a-\u003eBool",
          "package": "data-dword",
          "partial": "Lsb",
          "signature": "w-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/data-dword/docs/Data-DoubleWord.html#v:testLsb"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTest if the MSB is 1\n\u003c/p\u003e",
          "module": "Data.DoubleWord",
          "name": "testMsb",
          "package": "data-dword",
          "signature": "w -\u003e Bool",
          "source": "src/Data-DoubleWord-Base.html#testMsb",
          "type": "method"
        },
        "index": {
          "description": "Test if the MSB is",
          "hierarchy": "Data DoubleWord",
          "module": "Data.DoubleWord",
          "name": "testMsb",
          "normalized": "a-\u003eBool",
          "package": "data-dword",
          "partial": "Msb",
          "signature": "w-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/data-dword/docs/Data-DoubleWord.html#v:testMsb"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNumber or trailing (from LSB) zero bits\n\u003c/p\u003e",
          "module": "Data.DoubleWord",
          "name": "trailingZeroes",
          "package": "data-dword",
          "signature": "w -\u003e Int",
          "source": "src/Data-DoubleWord-Base.html#trailingZeroes",
          "type": "method"
        },
        "index": {
          "description": "Number or trailing from LSB zero bits",
          "hierarchy": "Data DoubleWord",
          "module": "Data.DoubleWord",
          "name": "trailingZeroes",
          "normalized": "a-\u003eInt",
          "package": "data-dword",
          "partial": "Zeroes",
          "signature": "w-\u003eInt",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/data-dword/docs/Data-DoubleWord.html#v:trailingZeroes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert the word to the unsigned type (identical to \u003ccode\u003e\u003ca\u003efromIntegral\u003c/a\u003e\u003c/code\u003e)\n\u003c/p\u003e",
          "module": "Data.DoubleWord",
          "name": "unsignedWord",
          "package": "data-dword",
          "signature": "w -\u003e UnsignedWord w",
          "source": "src/Data-DoubleWord-Base.html#unsignedWord",
          "type": "method"
        },
        "index": {
          "description": "Convert the word to the unsigned type identical to fromIntegral",
          "hierarchy": "Data DoubleWord",
          "module": "Data.DoubleWord",
          "name": "unsignedWord",
          "normalized": "a-\u003eUnsignedWord a",
          "package": "data-dword",
          "partial": "Word",
          "signature": "w-\u003eUnsignedWord w",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/data-dword/docs/Data-DoubleWord.html#v:unsignedWord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnwrapped addition\n\u003c/p\u003e",
          "module": "Data.DoubleWord",
          "name": "unwrappedAdd",
          "package": "data-dword",
          "signature": "w -\u003e w -\u003e (w, UnsignedWord w)",
          "source": "src/Data-DoubleWord-Base.html#unwrappedAdd",
          "type": "method"
        },
        "index": {
          "description": "Unwrapped addition",
          "hierarchy": "Data DoubleWord",
          "module": "Data.DoubleWord",
          "name": "unwrappedAdd",
          "normalized": "a-\u003ea-\u003e(a,UnsignedWord a)",
          "package": "data-dword",
          "partial": "Add",
          "signature": "w-\u003ew-\u003e(w,UnsignedWord w)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/data-dword/docs/Data-DoubleWord.html#v:unwrappedAdd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnwrapped multiplication\n\u003c/p\u003e",
          "module": "Data.DoubleWord",
          "name": "unwrappedMul",
          "package": "data-dword",
          "signature": "w -\u003e w -\u003e (w, UnsignedWord w)",
          "source": "src/Data-DoubleWord-Base.html#unwrappedMul",
          "type": "method"
        },
        "index": {
          "description": "Unwrapped multiplication",
          "hierarchy": "Data DoubleWord",
          "module": "Data.DoubleWord",
          "name": "unwrappedMul",
          "normalized": "a-\u003ea-\u003e(a,UnsignedWord a)",
          "package": "data-dword",
          "partial": "Mul",
          "signature": "w-\u003ew-\u003e(w,UnsignedWord w)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/data-dword/docs/Data-DoubleWord.html#v:unwrappedMul"
      }
    }
  ]
]