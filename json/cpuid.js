[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cpuid/docs/System-Cpuid.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides the function \u003ccode\u003e\u003ca\u003ecpuid\u003c/a\u003e\u003c/code\u003e for accessing the cpuid\n instruction on modern IA-32 processors.  Additionally, some convenience\n functions are provided, which perform some of the (really complicated and\n obstruse) decoding.\n\u003c/p\u003e\u003cp\u003eAs an example, you may use the following program to determine some\n characteristics of your machine:\n\u003c/p\u003e\u003cpre\u003e module Main(main) where\n\n import Text.Printf (printf, )\n import System.Cpuid\n\n main :: IO ()\n main = do\n    (a, b, c, d) \u003c- cpuid 0\n    _ \u003c- printf \"Basic CPUID usage: EAX=0: %8x %8x %8x %8x\\n\\n\" a b c d\n    _ \u003c- printf \"Vendor string: %s\\n\\n\" =\u003c\u003c vendorString\n    _ \u003c- printf \"Brand string: %s\\n\\n\" =\u003c\u003c brandString\n    putStrLn \"Cache information:\"\n    putStrLn . unlines .\n       map (\\ v -\u003e \"  \" ++ show v) =\u003c\u003c cacheInfo\n    p \u003c- processorInfo\n    _ \u003c- printf \"Processor info: family: %d, model: %d, stepping: %d, processor type: %d\\n\"\n       (piFamily p) (piModel p) (piStepping p) (piType p)\n    return ()\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "System.Cpuid",
        "fct-package": "cpuid",
        "fct-signature": "module",
        "fct-source": "src/System-Cpuid.html",
        "fct-type": "module",
        "title": "Cpuid"
      },
      "index": {
        "description": "This module provides the function cpuid for accessing the cpuid instruction on modern IA-32 processors Additionally some convenience functions are provided which perform some of the really complicated and obstruse decoding As an example you may use the following program to determine some characteristics of your machine module Main main where import Text.Printf printf import System.Cpuid main IO main do cpuid printf Basic CPUID usage EAX printf Vendor string vendorString printf Brand string brandString putStrLn Cache information putStrLn unlines map show cacheInfo processorInfo printf Processor info family model stepping processor type piFamily piModel piStepping piType return",
        "hierarchy": "System Cpuid",
        "module": "System.Cpuid",
        "name": "Cpuid",
        "normalized": "",
        "package": "cpuid",
        "partial": "Cpuid",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cpuid/docs/System-Cpuid.html#t:Associativity",
      "description": {
        "fct-descr": "\u003cp\u003eCache associativity.  For some entries, this is not specified in\n the manual.  We report these as \u003ccode\u003e\u003ca\u003eDirectMapped\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.Cpuid",
        "fct-package": "cpuid",
        "fct-signature": "data",
        "fct-source": "src/System-Cpuid.html#Associativity",
        "fct-type": "data",
        "title": "Associativity"
      },
      "index": {
        "description": "Cache associativity For some entries this is not specified in the manual We report these as DirectMapped",
        "hierarchy": "System Cpuid",
        "module": "System.Cpuid",
        "name": "Associativity",
        "normalized": "",
        "package": "cpuid",
        "partial": "Associativity",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cpuid/docs/System-Cpuid.html#t:BytesPerSector",
      "description": {
        "fct-descr": "\u003cp\u003eBytes per sector in a cache.\n\u003c/p\u003e",
        "fct-module": "System.Cpuid",
        "fct-package": "cpuid",
        "fct-signature": "newtype",
        "fct-source": "src/System-Cpuid.html#BytesPerSector",
        "fct-type": "newtype",
        "title": "BytesPerSector"
      },
      "index": {
        "description": "Bytes per sector in cache",
        "hierarchy": "System Cpuid",
        "module": "System.Cpuid",
        "name": "BytesPerSector",
        "normalized": "",
        "package": "cpuid",
        "partial": "Bytes Per Sector",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cpuid/docs/System-Cpuid.html#t:CacheInfo",
      "description": {
        "fct-descr": "\u003cp\u003eInformation for caches and TLBs.\n\u003c/p\u003e",
        "fct-module": "System.Cpuid",
        "fct-package": "cpuid",
        "fct-signature": "data",
        "fct-source": "src/System-Cpuid.html#CacheInfo",
        "fct-type": "data",
        "title": "CacheInfo"
      },
      "index": {
        "description": "Information for caches and TLBs",
        "hierarchy": "System Cpuid",
        "module": "System.Cpuid",
        "name": "CacheInfo",
        "normalized": "",
        "package": "cpuid",
        "partial": "Cache Info",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cpuid/docs/System-Cpuid.html#t:CacheSize",
      "description": {
        "fct-descr": "\u003cp\u003eCache size. Some entries can have alternative cache sizes,\n therefore the complicated type.\n\u003c/p\u003e",
        "fct-module": "System.Cpuid",
        "fct-package": "cpuid",
        "fct-signature": "data",
        "fct-source": "src/System-Cpuid.html#CacheSize",
        "fct-type": "data",
        "title": "CacheSize"
      },
      "index": {
        "description": "Cache size Some entries can have alternative cache sizes therefore the complicated type",
        "hierarchy": "System Cpuid",
        "module": "System.Cpuid",
        "name": "CacheSize",
        "normalized": "",
        "package": "cpuid",
        "partial": "Cache Size",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cpuid/docs/System-Cpuid.html#t:Entries",
      "description": {
        "fct-descr": "\u003cp\u003eNumber of entries in a TLB.\n\u003c/p\u003e",
        "fct-module": "System.Cpuid",
        "fct-package": "cpuid",
        "fct-signature": "newtype",
        "fct-source": "src/System-Cpuid.html#Entries",
        "fct-type": "newtype",
        "title": "Entries"
      },
      "index": {
        "description": "Number of entries in TLB",
        "hierarchy": "System Cpuid",
        "module": "System.Cpuid",
        "name": "Entries",
        "normalized": "",
        "package": "cpuid",
        "partial": "Entries",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cpuid/docs/System-Cpuid.html#t:Feature1C",
      "description": {
        "fct-descr": "\u003cp\u003efeatures as found in page 1, register C\n\u003c/p\u003e",
        "fct-module": "System.Cpuid",
        "fct-package": "cpuid",
        "fct-signature": "data",
        "fct-source": "src/System-Cpuid.html#Feature1C",
        "fct-type": "data",
        "title": "Feature1C"
      },
      "index": {
        "description": "features as found in page register",
        "hierarchy": "System Cpuid",
        "module": "System.Cpuid",
        "name": "Feature1C",
        "normalized": "",
        "package": "cpuid",
        "partial": "Feature",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cpuid/docs/System-Cpuid.html#t:Feature1D",
      "description": {
        "fct-descr": "\u003cp\u003efeatures as found in page 1, register D\n\u003c/p\u003e",
        "fct-module": "System.Cpuid",
        "fct-package": "cpuid",
        "fct-signature": "data",
        "fct-source": "src/System-Cpuid.html#Feature1D",
        "fct-type": "data",
        "title": "Feature1D"
      },
      "index": {
        "description": "features as found in page register",
        "hierarchy": "System Cpuid",
        "module": "System.Cpuid",
        "name": "Feature1D",
        "normalized": "",
        "package": "cpuid",
        "partial": "Feature",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cpuid/docs/System-Cpuid.html#t:FlagSet",
      "description": {
        "fct-module": "System.Cpuid",
        "fct-package": "cpuid",
        "fct-signature": "type",
        "fct-source": "src/System-Cpuid.html#FlagSet",
        "fct-type": "type",
        "title": "FlagSet"
      },
      "index": {
        "description": "",
        "hierarchy": "System Cpuid",
        "module": "System.Cpuid",
        "name": "FlagSet",
        "normalized": "",
        "package": "cpuid",
        "partial": "Flag Set",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cpuid/docs/System-Cpuid.html#t:LineSize",
      "description": {
        "fct-descr": "\u003cp\u003eLine size in a cache.\n\u003c/p\u003e",
        "fct-module": "System.Cpuid",
        "fct-package": "cpuid",
        "fct-signature": "newtype",
        "fct-source": "src/System-Cpuid.html#LineSize",
        "fct-type": "newtype",
        "title": "LineSize"
      },
      "index": {
        "description": "Line size in cache",
        "hierarchy": "System Cpuid",
        "module": "System.Cpuid",
        "name": "LineSize",
        "normalized": "",
        "package": "cpuid",
        "partial": "Line Size",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cpuid/docs/System-Cpuid.html#t:MuOps",
      "description": {
        "fct-descr": "\u003cp\u003eMuOps in a processors trace cache.\n\u003c/p\u003e",
        "fct-module": "System.Cpuid",
        "fct-package": "cpuid",
        "fct-signature": "newtype",
        "fct-source": "src/System-Cpuid.html#MuOps",
        "fct-type": "newtype",
        "title": "MuOps"
      },
      "index": {
        "description": "MuOps in processors trace cache",
        "hierarchy": "System Cpuid",
        "module": "System.Cpuid",
        "name": "MuOps",
        "normalized": "",
        "package": "cpuid",
        "partial": "Mu Ops",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cpuid/docs/System-Cpuid.html#t:PageSize",
      "description": {
        "fct-descr": "\u003cp\u003ePage size. Some entries can have alternative page sizes,\n therefore the complicated type.\n\u003c/p\u003e",
        "fct-module": "System.Cpuid",
        "fct-package": "cpuid",
        "fct-signature": "data",
        "fct-source": "src/System-Cpuid.html#PageSize",
        "fct-type": "data",
        "title": "PageSize"
      },
      "index": {
        "description": "Page size Some entries can have alternative page sizes therefore the complicated type",
        "hierarchy": "System Cpuid",
        "module": "System.Cpuid",
        "name": "PageSize",
        "normalized": "",
        "package": "cpuid",
        "partial": "Page Size",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cpuid/docs/System-Cpuid.html#t:ProcessorInfo",
      "description": {
        "fct-descr": "\u003cp\u003eProcessor information.\n\u003c/p\u003e",
        "fct-module": "System.Cpuid",
        "fct-package": "cpuid",
        "fct-signature": "data",
        "fct-source": "src/System-Cpuid.html#ProcessorInfo",
        "fct-type": "data",
        "title": "ProcessorInfo"
      },
      "index": {
        "description": "Processor information",
        "hierarchy": "System Cpuid",
        "module": "System.Cpuid",
        "name": "ProcessorInfo",
        "normalized": "",
        "package": "cpuid",
        "partial": "Processor Info",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cpuid/docs/System-Cpuid.html#t:Ways",
      "description": {
        "fct-descr": "\u003cp\u003eAssociativity in a set-associative cache.\n\u003c/p\u003e",
        "fct-module": "System.Cpuid",
        "fct-package": "cpuid",
        "fct-signature": "newtype",
        "fct-source": "src/System-Cpuid.html#Ways",
        "fct-type": "newtype",
        "title": "Ways"
      },
      "index": {
        "description": "Associativity in set-associative cache",
        "hierarchy": "System Cpuid",
        "module": "System.Cpuid",
        "name": "Ways",
        "normalized": "",
        "package": "cpuid",
        "partial": "Ways",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cpuid/docs/System-Cpuid.html#v:BytesPerSector",
      "description": {
        "fct-module": "System.Cpuid",
        "fct-package": "cpuid",
        "fct-signature": "BytesPerSector Int",
        "fct-source": "src/System-Cpuid.html#BytesPerSector",
        "fct-type": "function",
        "title": "BytesPerSector"
      },
      "index": {
        "description": "",
        "hierarchy": "System Cpuid",
        "module": "System.Cpuid",
        "name": "BytesPerSector",
        "normalized": "",
        "package": "cpuid",
        "partial": "Bytes Per Sector",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cpuid/docs/System-Cpuid.html#v:CacheSize",
      "description": {
        "fct-module": "System.Cpuid",
        "fct-package": "cpuid",
        "fct-signature": "CacheSize Int",
        "fct-source": "src/System-Cpuid.html#CacheSize",
        "fct-type": "function",
        "title": "CacheSize"
      },
      "index": {
        "description": "",
        "hierarchy": "System Cpuid",
        "module": "System.Cpuid",
        "name": "CacheSize",
        "normalized": "",
        "package": "cpuid",
        "partial": "Cache Size",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cpuid/docs/System-Cpuid.html#v:CacheSizeOr",
      "description": {
        "fct-module": "System.Cpuid",
        "fct-package": "cpuid",
        "fct-signature": "CacheSizeOr CacheSize CacheSize",
        "fct-source": "src/System-Cpuid.html#CacheSize",
        "fct-type": "function",
        "title": "CacheSizeOr"
      },
      "index": {
        "description": "",
        "hierarchy": "System Cpuid",
        "module": "System.Cpuid",
        "name": "CacheSizeOr",
        "normalized": "",
        "package": "cpuid",
        "partial": "Cache Size Or",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cpuid/docs/System-Cpuid.html#v:DataTLB",
      "description": {
        "fct-descr": "\u003cp\u003eConfiguration of data TLB.\n\u003c/p\u003e",
        "fct-module": "System.Cpuid",
        "fct-package": "cpuid",
        "fct-signature": "DataTLB (Maybe CacheSize) PageSize Associativity Entries",
        "fct-source": "src/System-Cpuid.html#CacheInfo",
        "fct-type": "function",
        "title": "DataTLB"
      },
      "index": {
        "description": "Configuration of data TLB",
        "hierarchy": "System Cpuid",
        "module": "System.Cpuid",
        "name": "DataTLB",
        "normalized": "",
        "package": "cpuid",
        "partial": "Data TLB",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cpuid/docs/System-Cpuid.html#v:DirectMapped",
      "description": {
        "fct-module": "System.Cpuid",
        "fct-package": "cpuid",
        "fct-signature": "DirectMapped",
        "fct-source": "src/System-Cpuid.html#Associativity",
        "fct-type": "function",
        "title": "DirectMapped"
      },
      "index": {
        "description": "",
        "hierarchy": "System Cpuid",
        "module": "System.Cpuid",
        "name": "DirectMapped",
        "normalized": "",
        "package": "cpuid",
        "partial": "Direct Mapped",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cpuid/docs/System-Cpuid.html#v:Entries",
      "description": {
        "fct-module": "System.Cpuid",
        "fct-package": "cpuid",
        "fct-signature": "Entries Int",
        "fct-source": "src/System-Cpuid.html#Entries",
        "fct-type": "function",
        "title": "Entries"
      },
      "index": {
        "description": "",
        "hierarchy": "System Cpuid",
        "module": "System.Cpuid",
        "name": "Entries",
        "normalized": "",
        "package": "cpuid",
        "partial": "Entries",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cpuid/docs/System-Cpuid.html#v:FirstLevelDCache",
      "description": {
        "fct-descr": "\u003cp\u003eFirst-level code cache configuration.\n\u003c/p\u003e",
        "fct-module": "System.Cpuid",
        "fct-package": "cpuid",
        "fct-signature": "FirstLevelDCache CacheSize Associativity LineSize",
        "fct-source": "src/System-Cpuid.html#CacheInfo",
        "fct-type": "function",
        "title": "FirstLevelDCache"
      },
      "index": {
        "description": "First-level code cache configuration",
        "hierarchy": "System Cpuid",
        "module": "System.Cpuid",
        "name": "FirstLevelDCache",
        "normalized": "",
        "package": "cpuid",
        "partial": "First Level DCache",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cpuid/docs/System-Cpuid.html#v:FirstLevelICache",
      "description": {
        "fct-descr": "\u003cp\u003eFirst-level code cache configuration.\n\u003c/p\u003e",
        "fct-module": "System.Cpuid",
        "fct-package": "cpuid",
        "fct-signature": "FirstLevelICache CacheSize Associativity LineSize",
        "fct-source": "src/System-Cpuid.html#CacheInfo",
        "fct-type": "function",
        "title": "FirstLevelICache"
      },
      "index": {
        "description": "First-level code cache configuration",
        "hierarchy": "System Cpuid",
        "module": "System.Cpuid",
        "name": "FirstLevelICache",
        "normalized": "",
        "package": "cpuid",
        "partial": "First Level ICache",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cpuid/docs/System-Cpuid.html#v:InstructionTLB",
      "description": {
        "fct-descr": "\u003cp\u003eConfiguration of code TLB.\n\u003c/p\u003e",
        "fct-module": "System.Cpuid",
        "fct-package": "cpuid",
        "fct-signature": "InstructionTLB (Maybe CacheSize) PageSize Associativity Entries",
        "fct-source": "src/System-Cpuid.html#CacheInfo",
        "fct-type": "function",
        "title": "InstructionTLB"
      },
      "index": {
        "description": "Configuration of code TLB",
        "hierarchy": "System Cpuid",
        "module": "System.Cpuid",
        "name": "InstructionTLB",
        "normalized": "",
        "package": "cpuid",
        "partial": "Instruction TLB",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cpuid/docs/System-Cpuid.html#v:LineSize",
      "description": {
        "fct-module": "System.Cpuid",
        "fct-package": "cpuid",
        "fct-signature": "LineSize Int",
        "fct-source": "src/System-Cpuid.html#LineSize",
        "fct-type": "function",
        "title": "LineSize"
      },
      "index": {
        "description": "",
        "hierarchy": "System Cpuid",
        "module": "System.Cpuid",
        "name": "LineSize",
        "normalized": "",
        "package": "cpuid",
        "partial": "Line Size",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cpuid/docs/System-Cpuid.html#v:MuOps",
      "description": {
        "fct-module": "System.Cpuid",
        "fct-package": "cpuid",
        "fct-signature": "MuOps Int",
        "fct-source": "src/System-Cpuid.html#MuOps",
        "fct-type": "function",
        "title": "MuOps"
      },
      "index": {
        "description": "",
        "hierarchy": "System Cpuid",
        "module": "System.Cpuid",
        "name": "MuOps",
        "normalized": "",
        "package": "cpuid",
        "partial": "Mu Ops",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cpuid/docs/System-Cpuid.html#v:NoSecondLevelCache",
      "description": {
        "fct-descr": "\u003cp\u003eNo second level support.\n\u003c/p\u003e",
        "fct-module": "System.Cpuid",
        "fct-package": "cpuid",
        "fct-signature": "NoSecondLevelCache",
        "fct-source": "src/System-Cpuid.html#CacheInfo",
        "fct-type": "function",
        "title": "NoSecondLevelCache"
      },
      "index": {
        "description": "No second level support",
        "hierarchy": "System Cpuid",
        "module": "System.Cpuid",
        "name": "NoSecondLevelCache",
        "normalized": "",
        "package": "cpuid",
        "partial": "No Second Level Cache",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cpuid/docs/System-Cpuid.html#v:NoSecondOrThirdLevelCache",
      "description": {
        "fct-descr": "\u003cp\u003eInternal use only.\n\u003c/p\u003e",
        "fct-module": "System.Cpuid",
        "fct-package": "cpuid",
        "fct-signature": "NoSecondOrThirdLevelCache",
        "fct-source": "src/System-Cpuid.html#CacheInfo",
        "fct-type": "function",
        "title": "NoSecondOrThirdLevelCache"
      },
      "index": {
        "description": "Internal use only",
        "hierarchy": "System Cpuid",
        "module": "System.Cpuid",
        "name": "NoSecondOrThirdLevelCache",
        "normalized": "",
        "package": "cpuid",
        "partial": "No Second Or Third Level Cache",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cpuid/docs/System-Cpuid.html#v:NoThirdLevelCache",
      "description": {
        "fct-descr": "\u003cp\u003eNo third level support.\n\u003c/p\u003e",
        "fct-module": "System.Cpuid",
        "fct-package": "cpuid",
        "fct-signature": "NoThirdLevelCache",
        "fct-source": "src/System-Cpuid.html#CacheInfo",
        "fct-type": "function",
        "title": "NoThirdLevelCache"
      },
      "index": {
        "description": "No third level support",
        "hierarchy": "System Cpuid",
        "module": "System.Cpuid",
        "name": "NoThirdLevelCache",
        "normalized": "",
        "package": "cpuid",
        "partial": "No Third Level Cache",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cpuid/docs/System-Cpuid.html#v:PageSize",
      "description": {
        "fct-module": "System.Cpuid",
        "fct-package": "cpuid",
        "fct-signature": "PageSize Int",
        "fct-source": "src/System-Cpuid.html#PageSize",
        "fct-type": "function",
        "title": "PageSize"
      },
      "index": {
        "description": "",
        "hierarchy": "System Cpuid",
        "module": "System.Cpuid",
        "name": "PageSize",
        "normalized": "",
        "package": "cpuid",
        "partial": "Page Size",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cpuid/docs/System-Cpuid.html#v:PageSizeOr",
      "description": {
        "fct-module": "System.Cpuid",
        "fct-package": "cpuid",
        "fct-signature": "PageSizeOr PageSize PageSize",
        "fct-source": "src/System-Cpuid.html#PageSize",
        "fct-type": "function",
        "title": "PageSizeOr"
      },
      "index": {
        "description": "",
        "hierarchy": "System Cpuid",
        "module": "System.Cpuid",
        "name": "PageSizeOr",
        "normalized": "",
        "package": "cpuid",
        "partial": "Page Size Or",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cpuid/docs/System-Cpuid.html#v:Prefetching",
      "description": {
        "fct-descr": "\u003cp\u003ePrefetching information.\n\u003c/p\u003e",
        "fct-module": "System.Cpuid",
        "fct-package": "cpuid",
        "fct-signature": "Prefetching Int",
        "fct-source": "src/System-Cpuid.html#CacheInfo",
        "fct-type": "function",
        "title": "Prefetching"
      },
      "index": {
        "description": "Prefetching information",
        "hierarchy": "System Cpuid",
        "module": "System.Cpuid",
        "name": "Prefetching",
        "normalized": "",
        "package": "cpuid",
        "partial": "Prefetching",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cpuid/docs/System-Cpuid.html#v:ProcessorInfo",
      "description": {
        "fct-module": "System.Cpuid",
        "fct-package": "cpuid",
        "fct-signature": "ProcessorInfo",
        "fct-source": "src/System-Cpuid.html#ProcessorInfo",
        "fct-type": "function",
        "title": "ProcessorInfo"
      },
      "index": {
        "description": "",
        "hierarchy": "System Cpuid",
        "module": "System.Cpuid",
        "name": "ProcessorInfo",
        "normalized": "",
        "package": "cpuid",
        "partial": "Processor Info",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cpuid/docs/System-Cpuid.html#v:SecondLevelCache",
      "description": {
        "fct-descr": "\u003cp\u003eSecond-level cache configuration.\n\u003c/p\u003e",
        "fct-module": "System.Cpuid",
        "fct-package": "cpuid",
        "fct-signature": "SecondLevelCache CacheSize Associativity LineSize (Maybe BytesPerSector)",
        "fct-source": "src/System-Cpuid.html#CacheInfo",
        "fct-type": "function",
        "title": "SecondLevelCache"
      },
      "index": {
        "description": "Second-level cache configuration",
        "hierarchy": "System Cpuid",
        "module": "System.Cpuid",
        "name": "SecondLevelCache",
        "normalized": "",
        "package": "cpuid",
        "partial": "Second Level Cache",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cpuid/docs/System-Cpuid.html#v:SetAssociative",
      "description": {
        "fct-module": "System.Cpuid",
        "fct-package": "cpuid",
        "fct-signature": "SetAssociative Ways",
        "fct-source": "src/System-Cpuid.html#Associativity",
        "fct-type": "function",
        "title": "SetAssociative"
      },
      "index": {
        "description": "",
        "hierarchy": "System Cpuid",
        "module": "System.Cpuid",
        "name": "SetAssociative",
        "normalized": "",
        "package": "cpuid",
        "partial": "Set Associative",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cpuid/docs/System-Cpuid.html#v:ThirdLevelCache",
      "description": {
        "fct-descr": "\u003cp\u003eSecond-level cache configuration.\n\u003c/p\u003e",
        "fct-module": "System.Cpuid",
        "fct-package": "cpuid",
        "fct-signature": "ThirdLevelCache CacheSize Associativity LineSize (Maybe BytesPerSector)",
        "fct-source": "src/System-Cpuid.html#CacheInfo",
        "fct-type": "function",
        "title": "ThirdLevelCache"
      },
      "index": {
        "description": "Second-level cache configuration",
        "hierarchy": "System Cpuid",
        "module": "System.Cpuid",
        "name": "ThirdLevelCache",
        "normalized": "",
        "package": "cpuid",
        "partial": "Third Level Cache",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cpuid/docs/System-Cpuid.html#v:TraceCache",
      "description": {
        "fct-descr": "\u003cp\u003eTrace cache (1st-level code cache) configuration.\n\u003c/p\u003e",
        "fct-module": "System.Cpuid",
        "fct-package": "cpuid",
        "fct-signature": "TraceCache MuOps Associativity",
        "fct-source": "src/System-Cpuid.html#CacheInfo",
        "fct-type": "function",
        "title": "TraceCache"
      },
      "index": {
        "description": "Trace cache st-level code cache configuration",
        "hierarchy": "System Cpuid",
        "module": "System.Cpuid",
        "name": "TraceCache",
        "normalized": "",
        "package": "cpuid",
        "partial": "Trace Cache",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cpuid/docs/System-Cpuid.html#v:Ways",
      "description": {
        "fct-module": "System.Cpuid",
        "fct-package": "cpuid",
        "fct-signature": "Ways Int",
        "fct-source": "src/System-Cpuid.html#Ways",
        "fct-type": "function",
        "title": "Ways"
      },
      "index": {
        "description": "",
        "hierarchy": "System Cpuid",
        "module": "System.Cpuid",
        "name": "Ways",
        "normalized": "",
        "package": "cpuid",
        "partial": "Ways",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cpuid/docs/System-Cpuid.html#v:acpi",
      "description": {
        "fct-module": "System.Cpuid",
        "fct-package": "cpuid",
        "fct-signature": "Feature1D",
        "fct-source": "src/System-Cpuid.html#acpi",
        "fct-type": "function",
        "title": "acpi"
      },
      "index": {
        "description": "",
        "hierarchy": "System Cpuid",
        "module": "System.Cpuid",
        "name": "acpi",
        "normalized": "",
        "package": "cpuid",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cpuid/docs/System-Cpuid.html#v:aes",
      "description": {
        "fct-module": "System.Cpuid",
        "fct-package": "cpuid",
        "fct-signature": "Feature1C",
        "fct-source": "src/System-Cpuid.html#aes",
        "fct-type": "function",
        "title": "aes"
      },
      "index": {
        "description": "",
        "hierarchy": "System Cpuid",
        "module": "System.Cpuid",
        "name": "aes",
        "normalized": "",
        "package": "cpuid",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cpuid/docs/System-Cpuid.html#v:apic",
      "description": {
        "fct-module": "System.Cpuid",
        "fct-package": "cpuid",
        "fct-signature": "Feature1D",
        "fct-source": "src/System-Cpuid.html#apic",
        "fct-type": "function",
        "title": "apic"
      },
      "index": {
        "description": "",
        "hierarchy": "System Cpuid",
        "module": "System.Cpuid",
        "name": "apic",
        "normalized": "",
        "package": "cpuid",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cpuid/docs/System-Cpuid.html#v:avx",
      "description": {
        "fct-module": "System.Cpuid",
        "fct-package": "cpuid",
        "fct-signature": "Feature1C",
        "fct-source": "src/System-Cpuid.html#avx",
        "fct-type": "function",
        "title": "avx"
      },
      "index": {
        "description": "",
        "hierarchy": "System Cpuid",
        "module": "System.Cpuid",
        "name": "avx",
        "normalized": "",
        "package": "cpuid",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cpuid/docs/System-Cpuid.html#v:brandString",
      "description": {
        "fct-descr": "\u003cp\u003eExecute the \u003ccode\u003ecpuid\u003c/code\u003e instruction and return the brand string\n (processor name and maximum frequency) reported by that\n instruction.\n\u003c/p\u003e",
        "fct-module": "System.Cpuid",
        "fct-package": "cpuid",
        "fct-signature": "IO String",
        "fct-source": "src/System-Cpuid.html#brandString",
        "fct-type": "function",
        "title": "brandString"
      },
      "index": {
        "description": "Execute the cpuid instruction and return the brand string processor name and maximum frequency reported by that instruction",
        "hierarchy": "System Cpuid",
        "module": "System.Cpuid",
        "name": "brandString",
        "normalized": "",
        "package": "cpuid",
        "partial": "String",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cpuid/docs/System-Cpuid.html#v:cacheInfo",
      "description": {
        "fct-descr": "\u003cp\u003eFetch all available cache information from the processor, using\n the \u003ccode\u003ecpuid\u003c/code\u003e instruction.  The list is not ordered.\n\u003c/p\u003e",
        "fct-module": "System.Cpuid",
        "fct-package": "cpuid",
        "fct-signature": "IO [CacheInfo]",
        "fct-source": "src/System-Cpuid.html#cacheInfo",
        "fct-type": "function",
        "title": "cacheInfo"
      },
      "index": {
        "description": "Fetch all available cache information from the processor using the cpuid instruction The list is not ordered",
        "hierarchy": "System Cpuid",
        "module": "System.Cpuid",
        "name": "cacheInfo",
        "normalized": "IO[CacheInfo]",
        "package": "cpuid",
        "partial": "Info",
        "signature": "IO[CacheInfo]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cpuid/docs/System-Cpuid.html#v:clfsh",
      "description": {
        "fct-module": "System.Cpuid",
        "fct-package": "cpuid",
        "fct-signature": "Feature1D",
        "fct-source": "src/System-Cpuid.html#clfsh",
        "fct-type": "function",
        "title": "clfsh"
      },
      "index": {
        "description": "",
        "hierarchy": "System Cpuid",
        "module": "System.Cpuid",
        "name": "clfsh",
        "normalized": "",
        "package": "cpuid",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cpuid/docs/System-Cpuid.html#v:cmov",
      "description": {
        "fct-module": "System.Cpuid",
        "fct-package": "cpuid",
        "fct-signature": "Feature1D",
        "fct-source": "src/System-Cpuid.html#cmov",
        "fct-type": "function",
        "title": "cmov"
      },
      "index": {
        "description": "",
        "hierarchy": "System Cpuid",
        "module": "System.Cpuid",
        "name": "cmov",
        "normalized": "",
        "package": "cpuid",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cpuid/docs/System-Cpuid.html#v:cmpxchg16b",
      "description": {
        "fct-module": "System.Cpuid",
        "fct-package": "cpuid",
        "fct-signature": "Feature1C",
        "fct-source": "src/System-Cpuid.html#cmpxchg16b",
        "fct-type": "function",
        "title": "cmpxchg16b"
      },
      "index": {
        "description": "",
        "hierarchy": "System Cpuid",
        "module": "System.Cpuid",
        "name": "cmpxchg16b",
        "normalized": "",
        "package": "cpuid",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cpuid/docs/System-Cpuid.html#v:cnxtid",
      "description": {
        "fct-module": "System.Cpuid",
        "fct-package": "cpuid",
        "fct-signature": "Feature1C",
        "fct-source": "src/System-Cpuid.html#cnxtid",
        "fct-type": "function",
        "title": "cnxtid"
      },
      "index": {
        "description": "",
        "hierarchy": "System Cpuid",
        "module": "System.Cpuid",
        "name": "cnxtid",
        "normalized": "",
        "package": "cpuid",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cpuid/docs/System-Cpuid.html#v:cpuid",
      "description": {
        "fct-descr": "\u003cp\u003eExecute the \u003ccode\u003ecpuid\u003c/code\u003e instructions with the given argument\n in the EAX register.  Return the values of the registers\n EAX, EBX, ECX and EDX in that order.\n\u003c/p\u003e",
        "fct-module": "System.Cpuid",
        "fct-package": "cpuid",
        "fct-signature": "Word32 -\u003e IO (Word32, Word32, Word32, Word32)",
        "fct-source": "src/System-Cpuid.html#cpuid",
        "fct-type": "function",
        "title": "cpuid"
      },
      "index": {
        "description": "Execute the cpuid instructions with the given argument in the EAX register Return the values of the registers EAX EBX ECX and EDX in that order",
        "hierarchy": "System Cpuid",
        "module": "System.Cpuid",
        "name": "cpuid",
        "normalized": "Word-\u003eIO(Word,Word,Word,Word)",
        "package": "cpuid",
        "partial": "",
        "signature": "Word-\u003eIO(Word,Word,Word,Word)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cpuid/docs/System-Cpuid.html#v:cx8",
      "description": {
        "fct-module": "System.Cpuid",
        "fct-package": "cpuid",
        "fct-signature": "Feature1D",
        "fct-source": "src/System-Cpuid.html#cx8",
        "fct-type": "function",
        "title": "cx8"
      },
      "index": {
        "description": "",
        "hierarchy": "System Cpuid",
        "module": "System.Cpuid",
        "name": "cx8",
        "normalized": "",
        "package": "cpuid",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cpuid/docs/System-Cpuid.html#v:dca",
      "description": {
        "fct-module": "System.Cpuid",
        "fct-package": "cpuid",
        "fct-signature": "Feature1C",
        "fct-source": "src/System-Cpuid.html#dca",
        "fct-type": "function",
        "title": "dca"
      },
      "index": {
        "description": "",
        "hierarchy": "System Cpuid",
        "module": "System.Cpuid",
        "name": "dca",
        "normalized": "",
        "package": "cpuid",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cpuid/docs/System-Cpuid.html#v:de",
      "description": {
        "fct-module": "System.Cpuid",
        "fct-package": "cpuid",
        "fct-signature": "Feature1D",
        "fct-source": "src/System-Cpuid.html#de",
        "fct-type": "function",
        "title": "de"
      },
      "index": {
        "description": "",
        "hierarchy": "System Cpuid",
        "module": "System.Cpuid",
        "name": "de",
        "normalized": "",
        "package": "cpuid",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cpuid/docs/System-Cpuid.html#v:deadline",
      "description": {
        "fct-module": "System.Cpuid",
        "fct-package": "cpuid",
        "fct-signature": "Feature1C",
        "fct-source": "src/System-Cpuid.html#deadline",
        "fct-type": "function",
        "title": "deadline"
      },
      "index": {
        "description": "",
        "hierarchy": "System Cpuid",
        "module": "System.Cpuid",
        "name": "deadline",
        "normalized": "",
        "package": "cpuid",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cpuid/docs/System-Cpuid.html#v:ds",
      "description": {
        "fct-module": "System.Cpuid",
        "fct-package": "cpuid",
        "fct-signature": "Feature1D",
        "fct-source": "src/System-Cpuid.html#ds",
        "fct-type": "function",
        "title": "ds"
      },
      "index": {
        "description": "",
        "hierarchy": "System Cpuid",
        "module": "System.Cpuid",
        "name": "ds",
        "normalized": "",
        "package": "cpuid",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cpuid/docs/System-Cpuid.html#v:dscpl",
      "description": {
        "fct-module": "System.Cpuid",
        "fct-package": "cpuid",
        "fct-signature": "Feature1C",
        "fct-source": "src/System-Cpuid.html#dscpl",
        "fct-type": "function",
        "title": "dscpl"
      },
      "index": {
        "description": "",
        "hierarchy": "System Cpuid",
        "module": "System.Cpuid",
        "name": "dscpl",
        "normalized": "",
        "package": "cpuid",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cpuid/docs/System-Cpuid.html#v:dtes64",
      "description": {
        "fct-module": "System.Cpuid",
        "fct-package": "cpuid",
        "fct-signature": "Feature1C",
        "fct-source": "src/System-Cpuid.html#dtes64",
        "fct-type": "function",
        "title": "dtes64"
      },
      "index": {
        "description": "",
        "hierarchy": "System Cpuid",
        "module": "System.Cpuid",
        "name": "dtes64",
        "normalized": "",
        "package": "cpuid",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cpuid/docs/System-Cpuid.html#v:est",
      "description": {
        "fct-module": "System.Cpuid",
        "fct-package": "cpuid",
        "fct-signature": "Feature1C",
        "fct-source": "src/System-Cpuid.html#est",
        "fct-type": "function",
        "title": "est"
      },
      "index": {
        "description": "",
        "hierarchy": "System Cpuid",
        "module": "System.Cpuid",
        "name": "est",
        "normalized": "",
        "package": "cpuid",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cpuid/docs/System-Cpuid.html#v:f16c",
      "description": {
        "fct-module": "System.Cpuid",
        "fct-package": "cpuid",
        "fct-signature": "Feature1C",
        "fct-source": "src/System-Cpuid.html#f16c",
        "fct-type": "function",
        "title": "f16c"
      },
      "index": {
        "description": "",
        "hierarchy": "System Cpuid",
        "module": "System.Cpuid",
        "name": "f16c",
        "normalized": "",
        "package": "cpuid",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cpuid/docs/System-Cpuid.html#v:features",
      "description": {
        "fct-module": "System.Cpuid",
        "fct-package": "cpuid",
        "fct-signature": "IO (FlagSet Feature1C, FlagSet Feature1D)",
        "fct-source": "src/System-Cpuid.html#features",
        "fct-type": "function",
        "title": "features"
      },
      "index": {
        "description": "",
        "hierarchy": "System Cpuid",
        "module": "System.Cpuid",
        "name": "features",
        "normalized": "IO(FlagSet Feature C,FlagSet Feature D)",
        "package": "cpuid",
        "partial": "",
        "signature": "IO(FlagSet Feature C,FlagSet Feature D)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cpuid/docs/System-Cpuid.html#v:fma",
      "description": {
        "fct-module": "System.Cpuid",
        "fct-package": "cpuid",
        "fct-signature": "Feature1C",
        "fct-source": "src/System-Cpuid.html#fma",
        "fct-type": "function",
        "title": "fma"
      },
      "index": {
        "description": "",
        "hierarchy": "System Cpuid",
        "module": "System.Cpuid",
        "name": "fma",
        "normalized": "",
        "package": "cpuid",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cpuid/docs/System-Cpuid.html#v:fpu",
      "description": {
        "fct-module": "System.Cpuid",
        "fct-package": "cpuid",
        "fct-signature": "Feature1D",
        "fct-source": "src/System-Cpuid.html#fpu",
        "fct-type": "function",
        "title": "fpu"
      },
      "index": {
        "description": "",
        "hierarchy": "System Cpuid",
        "module": "System.Cpuid",
        "name": "fpu",
        "normalized": "",
        "package": "cpuid",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cpuid/docs/System-Cpuid.html#v:fxsr",
      "description": {
        "fct-module": "System.Cpuid",
        "fct-package": "cpuid",
        "fct-signature": "Feature1D",
        "fct-source": "src/System-Cpuid.html#fxsr",
        "fct-type": "function",
        "title": "fxsr"
      },
      "index": {
        "description": "",
        "hierarchy": "System Cpuid",
        "module": "System.Cpuid",
        "name": "fxsr",
        "normalized": "",
        "package": "cpuid",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cpuid/docs/System-Cpuid.html#v:htt",
      "description": {
        "fct-module": "System.Cpuid",
        "fct-package": "cpuid",
        "fct-signature": "Feature1D",
        "fct-source": "src/System-Cpuid.html#htt",
        "fct-type": "function",
        "title": "htt"
      },
      "index": {
        "description": "",
        "hierarchy": "System Cpuid",
        "module": "System.Cpuid",
        "name": "htt",
        "normalized": "",
        "package": "cpuid",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cpuid/docs/System-Cpuid.html#v:hypervisor",
      "description": {
        "fct-module": "System.Cpuid",
        "fct-package": "cpuid",
        "fct-signature": "Feature1C",
        "fct-source": "src/System-Cpuid.html#hypervisor",
        "fct-type": "function",
        "title": "hypervisor"
      },
      "index": {
        "description": "",
        "hierarchy": "System Cpuid",
        "module": "System.Cpuid",
        "name": "hypervisor",
        "normalized": "",
        "package": "cpuid",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cpuid/docs/System-Cpuid.html#v:ia64",
      "description": {
        "fct-module": "System.Cpuid",
        "fct-package": "cpuid",
        "fct-signature": "Feature1D",
        "fct-source": "src/System-Cpuid.html#ia64",
        "fct-type": "function",
        "title": "ia64"
      },
      "index": {
        "description": "",
        "hierarchy": "System Cpuid",
        "module": "System.Cpuid",
        "name": "ia64",
        "normalized": "",
        "package": "cpuid",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cpuid/docs/System-Cpuid.html#v:mca",
      "description": {
        "fct-module": "System.Cpuid",
        "fct-package": "cpuid",
        "fct-signature": "Feature1D",
        "fct-source": "src/System-Cpuid.html#mca",
        "fct-type": "function",
        "title": "mca"
      },
      "index": {
        "description": "",
        "hierarchy": "System Cpuid",
        "module": "System.Cpuid",
        "name": "mca",
        "normalized": "",
        "package": "cpuid",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cpuid/docs/System-Cpuid.html#v:mce",
      "description": {
        "fct-module": "System.Cpuid",
        "fct-package": "cpuid",
        "fct-signature": "Feature1D",
        "fct-source": "src/System-Cpuid.html#mce",
        "fct-type": "function",
        "title": "mce"
      },
      "index": {
        "description": "",
        "hierarchy": "System Cpuid",
        "module": "System.Cpuid",
        "name": "mce",
        "normalized": "",
        "package": "cpuid",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cpuid/docs/System-Cpuid.html#v:mmx",
      "description": {
        "fct-module": "System.Cpuid",
        "fct-package": "cpuid",
        "fct-signature": "Feature1D",
        "fct-source": "src/System-Cpuid.html#mmx",
        "fct-type": "function",
        "title": "mmx"
      },
      "index": {
        "description": "",
        "hierarchy": "System Cpuid",
        "module": "System.Cpuid",
        "name": "mmx",
        "normalized": "",
        "package": "cpuid",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cpuid/docs/System-Cpuid.html#v:monitor",
      "description": {
        "fct-module": "System.Cpuid",
        "fct-package": "cpuid",
        "fct-signature": "Feature1C",
        "fct-source": "src/System-Cpuid.html#monitor",
        "fct-type": "function",
        "title": "monitor"
      },
      "index": {
        "description": "",
        "hierarchy": "System Cpuid",
        "module": "System.Cpuid",
        "name": "monitor",
        "normalized": "",
        "package": "cpuid",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cpuid/docs/System-Cpuid.html#v:movbe",
      "description": {
        "fct-module": "System.Cpuid",
        "fct-package": "cpuid",
        "fct-signature": "Feature1C",
        "fct-source": "src/System-Cpuid.html#movbe",
        "fct-type": "function",
        "title": "movbe"
      },
      "index": {
        "description": "",
        "hierarchy": "System Cpuid",
        "module": "System.Cpuid",
        "name": "movbe",
        "normalized": "",
        "package": "cpuid",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cpuid/docs/System-Cpuid.html#v:msr",
      "description": {
        "fct-module": "System.Cpuid",
        "fct-package": "cpuid",
        "fct-signature": "Feature1D",
        "fct-source": "src/System-Cpuid.html#msr",
        "fct-type": "function",
        "title": "msr"
      },
      "index": {
        "description": "",
        "hierarchy": "System Cpuid",
        "module": "System.Cpuid",
        "name": "msr",
        "normalized": "",
        "package": "cpuid",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cpuid/docs/System-Cpuid.html#v:mtrr",
      "description": {
        "fct-module": "System.Cpuid",
        "fct-package": "cpuid",
        "fct-signature": "Feature1D",
        "fct-source": "src/System-Cpuid.html#mtrr",
        "fct-type": "function",
        "title": "mtrr"
      },
      "index": {
        "description": "",
        "hierarchy": "System Cpuid",
        "module": "System.Cpuid",
        "name": "mtrr",
        "normalized": "",
        "package": "cpuid",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cpuid/docs/System-Cpuid.html#v:osxsave",
      "description": {
        "fct-module": "System.Cpuid",
        "fct-package": "cpuid",
        "fct-signature": "Feature1C",
        "fct-source": "src/System-Cpuid.html#osxsave",
        "fct-type": "function",
        "title": "osxsave"
      },
      "index": {
        "description": "",
        "hierarchy": "System Cpuid",
        "module": "System.Cpuid",
        "name": "osxsave",
        "normalized": "",
        "package": "cpuid",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cpuid/docs/System-Cpuid.html#v:pae",
      "description": {
        "fct-module": "System.Cpuid",
        "fct-package": "cpuid",
        "fct-signature": "Feature1D",
        "fct-source": "src/System-Cpuid.html#pae",
        "fct-type": "function",
        "title": "pae"
      },
      "index": {
        "description": "",
        "hierarchy": "System Cpuid",
        "module": "System.Cpuid",
        "name": "pae",
        "normalized": "",
        "package": "cpuid",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cpuid/docs/System-Cpuid.html#v:pat",
      "description": {
        "fct-module": "System.Cpuid",
        "fct-package": "cpuid",
        "fct-signature": "Feature1D",
        "fct-source": "src/System-Cpuid.html#pat",
        "fct-type": "function",
        "title": "pat"
      },
      "index": {
        "description": "",
        "hierarchy": "System Cpuid",
        "module": "System.Cpuid",
        "name": "pat",
        "normalized": "",
        "package": "cpuid",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cpuid/docs/System-Cpuid.html#v:pbe",
      "description": {
        "fct-module": "System.Cpuid",
        "fct-package": "cpuid",
        "fct-signature": "Feature1D",
        "fct-source": "src/System-Cpuid.html#pbe",
        "fct-type": "function",
        "title": "pbe"
      },
      "index": {
        "description": "",
        "hierarchy": "System Cpuid",
        "module": "System.Cpuid",
        "name": "pbe",
        "normalized": "",
        "package": "cpuid",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cpuid/docs/System-Cpuid.html#v:pcid",
      "description": {
        "fct-module": "System.Cpuid",
        "fct-package": "cpuid",
        "fct-signature": "Feature1C",
        "fct-source": "src/System-Cpuid.html#pcid",
        "fct-type": "function",
        "title": "pcid"
      },
      "index": {
        "description": "",
        "hierarchy": "System Cpuid",
        "module": "System.Cpuid",
        "name": "pcid",
        "normalized": "",
        "package": "cpuid",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cpuid/docs/System-Cpuid.html#v:pclmulqdq",
      "description": {
        "fct-module": "System.Cpuid",
        "fct-package": "cpuid",
        "fct-signature": "Feature1C",
        "fct-source": "src/System-Cpuid.html#pclmulqdq",
        "fct-type": "function",
        "title": "pclmulqdq"
      },
      "index": {
        "description": "",
        "hierarchy": "System Cpuid",
        "module": "System.Cpuid",
        "name": "pclmulqdq",
        "normalized": "",
        "package": "cpuid",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cpuid/docs/System-Cpuid.html#v:pdcm",
      "description": {
        "fct-module": "System.Cpuid",
        "fct-package": "cpuid",
        "fct-signature": "Feature1C",
        "fct-source": "src/System-Cpuid.html#pdcm",
        "fct-type": "function",
        "title": "pdcm"
      },
      "index": {
        "description": "",
        "hierarchy": "System Cpuid",
        "module": "System.Cpuid",
        "name": "pdcm",
        "normalized": "",
        "package": "cpuid",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cpuid/docs/System-Cpuid.html#v:pge",
      "description": {
        "fct-module": "System.Cpuid",
        "fct-package": "cpuid",
        "fct-signature": "Feature1D",
        "fct-source": "src/System-Cpuid.html#pge",
        "fct-type": "function",
        "title": "pge"
      },
      "index": {
        "description": "",
        "hierarchy": "System Cpuid",
        "module": "System.Cpuid",
        "name": "pge",
        "normalized": "",
        "package": "cpuid",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cpuid/docs/System-Cpuid.html#v:piFamily",
      "description": {
        "fct-descr": "\u003cp\u003eProcessor family.\n\u003c/p\u003e",
        "fct-module": "System.Cpuid",
        "fct-package": "cpuid",
        "fct-signature": "Int",
        "fct-source": "src/System-Cpuid.html#ProcessorInfo",
        "fct-type": "function",
        "title": "piFamily"
      },
      "index": {
        "description": "Processor family",
        "hierarchy": "System Cpuid",
        "module": "System.Cpuid",
        "name": "piFamily",
        "normalized": "",
        "package": "cpuid",
        "partial": "Family",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cpuid/docs/System-Cpuid.html#v:piModel",
      "description": {
        "fct-descr": "\u003cp\u003eProcessor model.\n\u003c/p\u003e",
        "fct-module": "System.Cpuid",
        "fct-package": "cpuid",
        "fct-signature": "Int",
        "fct-source": "src/System-Cpuid.html#ProcessorInfo",
        "fct-type": "function",
        "title": "piModel"
      },
      "index": {
        "description": "Processor model",
        "hierarchy": "System Cpuid",
        "module": "System.Cpuid",
        "name": "piModel",
        "normalized": "",
        "package": "cpuid",
        "partial": "Model",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cpuid/docs/System-Cpuid.html#v:piStepping",
      "description": {
        "fct-descr": "\u003cp\u003eProcessor stepping.\n\u003c/p\u003e",
        "fct-module": "System.Cpuid",
        "fct-package": "cpuid",
        "fct-signature": "Int",
        "fct-source": "src/System-Cpuid.html#ProcessorInfo",
        "fct-type": "function",
        "title": "piStepping"
      },
      "index": {
        "description": "Processor stepping",
        "hierarchy": "System Cpuid",
        "module": "System.Cpuid",
        "name": "piStepping",
        "normalized": "",
        "package": "cpuid",
        "partial": "Stepping",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cpuid/docs/System-Cpuid.html#v:piType",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "System.Cpuid",
        "fct-package": "cpuid",
        "fct-signature": "Int",
        "fct-source": "src/System-Cpuid.html#ProcessorInfo",
        "fct-type": "function",
        "title": "piType"
      },
      "index": {
        "description": "",
        "hierarchy": "System Cpuid",
        "module": "System.Cpuid",
        "name": "piType",
        "normalized": "",
        "package": "cpuid",
        "partial": "Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cpuid/docs/System-Cpuid.html#v:popcnt",
      "description": {
        "fct-module": "System.Cpuid",
        "fct-package": "cpuid",
        "fct-signature": "Feature1C",
        "fct-source": "src/System-Cpuid.html#popcnt",
        "fct-type": "function",
        "title": "popcnt"
      },
      "index": {
        "description": "",
        "hierarchy": "System Cpuid",
        "module": "System.Cpuid",
        "name": "popcnt",
        "normalized": "",
        "package": "cpuid",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cpuid/docs/System-Cpuid.html#v:processorInfo",
      "description": {
        "fct-descr": "\u003cp\u003eRetrieve basic processor information from the processor using the\n \u003ccode\u003ecpuid\u003c/code\u003e instruction.\n\u003c/p\u003e",
        "fct-module": "System.Cpuid",
        "fct-package": "cpuid",
        "fct-signature": "IO ProcessorInfo",
        "fct-source": "src/System-Cpuid.html#processorInfo",
        "fct-type": "function",
        "title": "processorInfo"
      },
      "index": {
        "description": "Retrieve basic processor information from the processor using the cpuid instruction",
        "hierarchy": "System Cpuid",
        "module": "System.Cpuid",
        "name": "processorInfo",
        "normalized": "",
        "package": "cpuid",
        "partial": "Info",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cpuid/docs/System-Cpuid.html#v:pse",
      "description": {
        "fct-module": "System.Cpuid",
        "fct-package": "cpuid",
        "fct-signature": "Feature1D",
        "fct-source": "src/System-Cpuid.html#pse",
        "fct-type": "function",
        "title": "pse"
      },
      "index": {
        "description": "",
        "hierarchy": "System Cpuid",
        "module": "System.Cpuid",
        "name": "pse",
        "normalized": "",
        "package": "cpuid",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cpuid/docs/System-Cpuid.html#v:pse36",
      "description": {
        "fct-module": "System.Cpuid",
        "fct-package": "cpuid",
        "fct-signature": "Feature1D",
        "fct-source": "src/System-Cpuid.html#pse36",
        "fct-type": "function",
        "title": "pse36"
      },
      "index": {
        "description": "",
        "hierarchy": "System Cpuid",
        "module": "System.Cpuid",
        "name": "pse36",
        "normalized": "",
        "package": "cpuid",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cpuid/docs/System-Cpuid.html#v:psn",
      "description": {
        "fct-module": "System.Cpuid",
        "fct-package": "cpuid",
        "fct-signature": "Feature1D",
        "fct-source": "src/System-Cpuid.html#psn",
        "fct-type": "function",
        "title": "psn"
      },
      "index": {
        "description": "",
        "hierarchy": "System Cpuid",
        "module": "System.Cpuid",
        "name": "psn",
        "normalized": "",
        "package": "cpuid",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cpuid/docs/System-Cpuid.html#v:rdrand",
      "description": {
        "fct-module": "System.Cpuid",
        "fct-package": "cpuid",
        "fct-signature": "Feature1C",
        "fct-source": "src/System-Cpuid.html#rdrand",
        "fct-type": "function",
        "title": "rdrand"
      },
      "index": {
        "description": "",
        "hierarchy": "System Cpuid",
        "module": "System.Cpuid",
        "name": "rdrand",
        "normalized": "",
        "package": "cpuid",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cpuid/docs/System-Cpuid.html#v:sep",
      "description": {
        "fct-module": "System.Cpuid",
        "fct-package": "cpuid",
        "fct-signature": "Feature1D",
        "fct-source": "src/System-Cpuid.html#sep",
        "fct-type": "function",
        "title": "sep"
      },
      "index": {
        "description": "",
        "hierarchy": "System Cpuid",
        "module": "System.Cpuid",
        "name": "sep",
        "normalized": "",
        "package": "cpuid",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cpuid/docs/System-Cpuid.html#v:smx",
      "description": {
        "fct-module": "System.Cpuid",
        "fct-package": "cpuid",
        "fct-signature": "Feature1C",
        "fct-source": "src/System-Cpuid.html#smx",
        "fct-type": "function",
        "title": "smx"
      },
      "index": {
        "description": "",
        "hierarchy": "System Cpuid",
        "module": "System.Cpuid",
        "name": "smx",
        "normalized": "",
        "package": "cpuid",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cpuid/docs/System-Cpuid.html#v:ss",
      "description": {
        "fct-module": "System.Cpuid",
        "fct-package": "cpuid",
        "fct-signature": "Feature1D",
        "fct-source": "src/System-Cpuid.html#ss",
        "fct-type": "function",
        "title": "ss"
      },
      "index": {
        "description": "",
        "hierarchy": "System Cpuid",
        "module": "System.Cpuid",
        "name": "ss",
        "normalized": "",
        "package": "cpuid",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cpuid/docs/System-Cpuid.html#v:sse",
      "description": {
        "fct-module": "System.Cpuid",
        "fct-package": "cpuid",
        "fct-signature": "Feature1D",
        "fct-source": "src/System-Cpuid.html#sse",
        "fct-type": "function",
        "title": "sse"
      },
      "index": {
        "description": "",
        "hierarchy": "System Cpuid",
        "module": "System.Cpuid",
        "name": "sse",
        "normalized": "",
        "package": "cpuid",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cpuid/docs/System-Cpuid.html#v:sse2",
      "description": {
        "fct-module": "System.Cpuid",
        "fct-package": "cpuid",
        "fct-signature": "Feature1D",
        "fct-source": "src/System-Cpuid.html#sse2",
        "fct-type": "function",
        "title": "sse2"
      },
      "index": {
        "description": "",
        "hierarchy": "System Cpuid",
        "module": "System.Cpuid",
        "name": "sse2",
        "normalized": "",
        "package": "cpuid",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cpuid/docs/System-Cpuid.html#v:sse3",
      "description": {
        "fct-module": "System.Cpuid",
        "fct-package": "cpuid",
        "fct-signature": "Feature1C",
        "fct-source": "src/System-Cpuid.html#sse3",
        "fct-type": "function",
        "title": "sse3"
      },
      "index": {
        "description": "",
        "hierarchy": "System Cpuid",
        "module": "System.Cpuid",
        "name": "sse3",
        "normalized": "",
        "package": "cpuid",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cpuid/docs/System-Cpuid.html#v:sse4_1",
      "description": {
        "fct-module": "System.Cpuid",
        "fct-package": "cpuid",
        "fct-signature": "Feature1C",
        "fct-source": "src/System-Cpuid.html#sse4_1",
        "fct-type": "function",
        "title": "sse4_1"
      },
      "index": {
        "description": "",
        "hierarchy": "System Cpuid",
        "module": "System.Cpuid",
        "name": "sse4_1",
        "normalized": "",
        "package": "cpuid",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cpuid/docs/System-Cpuid.html#v:sse4_2",
      "description": {
        "fct-module": "System.Cpuid",
        "fct-package": "cpuid",
        "fct-signature": "Feature1C",
        "fct-source": "src/System-Cpuid.html#sse4_2",
        "fct-type": "function",
        "title": "sse4_2"
      },
      "index": {
        "description": "",
        "hierarchy": "System Cpuid",
        "module": "System.Cpuid",
        "name": "sse4_2",
        "normalized": "",
        "package": "cpuid",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cpuid/docs/System-Cpuid.html#v:ssse3",
      "description": {
        "fct-module": "System.Cpuid",
        "fct-package": "cpuid",
        "fct-signature": "Feature1C",
        "fct-source": "src/System-Cpuid.html#ssse3",
        "fct-type": "function",
        "title": "ssse3"
      },
      "index": {
        "description": "",
        "hierarchy": "System Cpuid",
        "module": "System.Cpuid",
        "name": "ssse3",
        "normalized": "",
        "package": "cpuid",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cpuid/docs/System-Cpuid.html#v:testFlag",
      "description": {
        "fct-module": "System.Cpuid",
        "fct-package": "cpuid",
        "fct-signature": "a -\u003e FlagSet a -\u003e Bool",
        "fct-source": "src/System-Cpuid.html#testFlag",
        "fct-type": "function",
        "title": "testFlag"
      },
      "index": {
        "description": "",
        "hierarchy": "System Cpuid",
        "module": "System.Cpuid",
        "name": "testFlag",
        "normalized": "a-\u003eFlagSet a-\u003eBool",
        "package": "cpuid",
        "partial": "Flag",
        "signature": "a-\u003eFlagSet a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cpuid/docs/System-Cpuid.html#v:tm",
      "description": {
        "fct-module": "System.Cpuid",
        "fct-package": "cpuid",
        "fct-signature": "Feature1D",
        "fct-source": "src/System-Cpuid.html#tm",
        "fct-type": "function",
        "title": "tm"
      },
      "index": {
        "description": "",
        "hierarchy": "System Cpuid",
        "module": "System.Cpuid",
        "name": "tm",
        "normalized": "",
        "package": "cpuid",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cpuid/docs/System-Cpuid.html#v:tm2",
      "description": {
        "fct-module": "System.Cpuid",
        "fct-package": "cpuid",
        "fct-signature": "Feature1C",
        "fct-source": "src/System-Cpuid.html#tm2",
        "fct-type": "function",
        "title": "tm2"
      },
      "index": {
        "description": "",
        "hierarchy": "System Cpuid",
        "module": "System.Cpuid",
        "name": "tm2",
        "normalized": "",
        "package": "cpuid",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cpuid/docs/System-Cpuid.html#v:tsc",
      "description": {
        "fct-module": "System.Cpuid",
        "fct-package": "cpuid",
        "fct-signature": "Feature1D",
        "fct-source": "src/System-Cpuid.html#tsc",
        "fct-type": "function",
        "title": "tsc"
      },
      "index": {
        "description": "",
        "hierarchy": "System Cpuid",
        "module": "System.Cpuid",
        "name": "tsc",
        "normalized": "",
        "package": "cpuid",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cpuid/docs/System-Cpuid.html#v:vendorString",
      "description": {
        "fct-descr": "\u003cp\u003eExecute the \u003ccode\u003ecpuid\u003c/code\u003e instruction and return the vendor\n string reported by that instruction.\n\u003c/p\u003e",
        "fct-module": "System.Cpuid",
        "fct-package": "cpuid",
        "fct-signature": "IO String",
        "fct-source": "src/System-Cpuid.html#vendorString",
        "fct-type": "function",
        "title": "vendorString"
      },
      "index": {
        "description": "Execute the cpuid instruction and return the vendor string reported by that instruction",
        "hierarchy": "System Cpuid",
        "module": "System.Cpuid",
        "name": "vendorString",
        "normalized": "",
        "package": "cpuid",
        "partial": "String",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cpuid/docs/System-Cpuid.html#v:vme",
      "description": {
        "fct-module": "System.Cpuid",
        "fct-package": "cpuid",
        "fct-signature": "Feature1D",
        "fct-source": "src/System-Cpuid.html#vme",
        "fct-type": "function",
        "title": "vme"
      },
      "index": {
        "description": "",
        "hierarchy": "System Cpuid",
        "module": "System.Cpuid",
        "name": "vme",
        "normalized": "",
        "package": "cpuid",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cpuid/docs/System-Cpuid.html#v:vmx",
      "description": {
        "fct-module": "System.Cpuid",
        "fct-package": "cpuid",
        "fct-signature": "Feature1C",
        "fct-source": "src/System-Cpuid.html#vmx",
        "fct-type": "function",
        "title": "vmx"
      },
      "index": {
        "description": "",
        "hierarchy": "System Cpuid",
        "module": "System.Cpuid",
        "name": "vmx",
        "normalized": "",
        "package": "cpuid",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cpuid/docs/System-Cpuid.html#v:x2apic",
      "description": {
        "fct-module": "System.Cpuid",
        "fct-package": "cpuid",
        "fct-signature": "Feature1C",
        "fct-source": "src/System-Cpuid.html#x2apic",
        "fct-type": "function",
        "title": "x2apic"
      },
      "index": {
        "description": "",
        "hierarchy": "System Cpuid",
        "module": "System.Cpuid",
        "name": "x2apic",
        "normalized": "",
        "package": "cpuid",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cpuid/docs/System-Cpuid.html#v:xsave",
      "description": {
        "fct-module": "System.Cpuid",
        "fct-package": "cpuid",
        "fct-signature": "Feature1C",
        "fct-source": "src/System-Cpuid.html#xsave",
        "fct-type": "function",
        "title": "xsave"
      },
      "index": {
        "description": "",
        "hierarchy": "System Cpuid",
        "module": "System.Cpuid",
        "name": "xsave",
        "normalized": "",
        "package": "cpuid",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cpuid/docs/System-Cpuid.html#v:xtpr",
      "description": {
        "fct-module": "System.Cpuid",
        "fct-package": "cpuid",
        "fct-signature": "Feature1C",
        "fct-source": "src/System-Cpuid.html#xtpr",
        "fct-type": "function",
        "title": "xtpr"
      },
      "index": {
        "description": "",
        "hierarchy": "System Cpuid",
        "module": "System.Cpuid",
        "name": "xtpr",
        "normalized": "",
        "package": "cpuid",
        "partial": "",
        "signature": ""
      }
    }
  }
]