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
        "word": "cpuid"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides the function \u003ccode\u003e\u003ca\u003ecpuid\u003c/a\u003e\u003c/code\u003e for accessing the cpuid\n instruction on modern IA-32 processors.  Additionally, some convenience\n functions are provided, which perform some of the (really complicated and\n obstruse) decoding.\n\u003c/p\u003e\u003cp\u003eAs an example, you may use the following program to determine some\n characteristics of your machine:\n\u003c/p\u003e\u003cpre\u003e module Main(main) where\n\n import Text.Printf (printf, )\n import System.Cpuid\n\n main :: IO ()\n main = do\n    (a, b, c, d) \u003c- cpuid 0\n    _ \u003c- printf \"Basic CPUID usage: EAX=0: %8x %8x %8x %8x\\n\\n\" a b c d\n    _ \u003c- printf \"Vendor string: %s\\n\\n\" =\u003c\u003c vendorString\n    _ \u003c- printf \"Brand string: %s\\n\\n\" =\u003c\u003c brandString\n    putStrLn \"Cache information:\"\n    putStrLn . unlines .\n       map (\\ v -\u003e \"  \" ++ show v) =\u003c\u003c cacheInfo\n    p \u003c- processorInfo\n    _ \u003c- printf \"Processor info: family: %d, model: %d, stepping: %d, processor type: %d\\n\"\n       (piFamily p) (piModel p) (piStepping p) (piType p)\n    return ()\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "System.Cpuid",
          "name": "Cpuid",
          "package": "cpuid",
          "source": "src/System-Cpuid.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides the function cpuid for accessing the cpuid instruction on modern IA-32 processors Additionally some convenience functions are provided which perform some of the really complicated and obstruse decoding As an example you may use the following program to determine some characteristics of your machine module Main main where import Text.Printf printf import System.Cpuid main IO main do cpuid printf Basic CPUID usage EAX printf Vendor string vendorString printf Brand string brandString putStrLn Cache information putStrLn unlines map show cacheInfo processorInfo printf Processor info family model stepping processor type piFamily piModel piStepping piType return",
          "hierarchy": "System Cpuid",
          "module": "System.Cpuid",
          "name": "Cpuid",
          "package": "cpuid",
          "partial": "Cpuid",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/cpuid/docs/System-Cpuid.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCache associativity.  For some entries, this is not specified in\n the manual.  We report these as \u003ccode\u003e\u003ca\u003eDirectMapped\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Cpuid",
          "name": "Associativity",
          "package": "cpuid",
          "source": "src/System-Cpuid.html#Associativity",
          "type": "data"
        },
        "index": {
          "description": "Cache associativity For some entries this is not specified in the manual We report these as DirectMapped",
          "hierarchy": "System Cpuid",
          "module": "System.Cpuid",
          "name": "Associativity",
          "package": "cpuid",
          "partial": "Associativity",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cpuid/docs/System-Cpuid.html#t:Associativity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBytes per sector in a cache.\n\u003c/p\u003e",
          "module": "System.Cpuid",
          "name": "BytesPerSector",
          "package": "cpuid",
          "source": "src/System-Cpuid.html#BytesPerSector",
          "type": "newtype"
        },
        "index": {
          "description": "Bytes per sector in cache",
          "hierarchy": "System Cpuid",
          "module": "System.Cpuid",
          "name": "BytesPerSector",
          "package": "cpuid",
          "partial": "Bytes Per Sector",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/cpuid/docs/System-Cpuid.html#t:BytesPerSector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInformation for caches and TLBs.\n\u003c/p\u003e",
          "module": "System.Cpuid",
          "name": "CacheInfo",
          "package": "cpuid",
          "source": "src/System-Cpuid.html#CacheInfo",
          "type": "data"
        },
        "index": {
          "description": "Information for caches and TLBs",
          "hierarchy": "System Cpuid",
          "module": "System.Cpuid",
          "name": "CacheInfo",
          "package": "cpuid",
          "partial": "Cache Info",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cpuid/docs/System-Cpuid.html#t:CacheInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCache size. Some entries can have alternative cache sizes,\n therefore the complicated type.\n\u003c/p\u003e",
          "module": "System.Cpuid",
          "name": "CacheSize",
          "package": "cpuid",
          "source": "src/System-Cpuid.html#CacheSize",
          "type": "data"
        },
        "index": {
          "description": "Cache size Some entries can have alternative cache sizes therefore the complicated type",
          "hierarchy": "System Cpuid",
          "module": "System.Cpuid",
          "name": "CacheSize",
          "package": "cpuid",
          "partial": "Cache Size",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cpuid/docs/System-Cpuid.html#t:CacheSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNumber of entries in a TLB.\n\u003c/p\u003e",
          "module": "System.Cpuid",
          "name": "Entries",
          "package": "cpuid",
          "source": "src/System-Cpuid.html#Entries",
          "type": "newtype"
        },
        "index": {
          "description": "Number of entries in TLB",
          "hierarchy": "System Cpuid",
          "module": "System.Cpuid",
          "name": "Entries",
          "package": "cpuid",
          "partial": "Entries",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/cpuid/docs/System-Cpuid.html#t:Entries"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003efeatures as found in page 1, register C\n\u003c/p\u003e",
          "module": "System.Cpuid",
          "name": "Feature1C",
          "package": "cpuid",
          "source": "src/System-Cpuid.html#Feature1C",
          "type": "data"
        },
        "index": {
          "description": "features as found in page register",
          "hierarchy": "System Cpuid",
          "module": "System.Cpuid",
          "name": "Feature1C",
          "package": "cpuid",
          "partial": "Feature",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cpuid/docs/System-Cpuid.html#t:Feature1C"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003efeatures as found in page 1, register D\n\u003c/p\u003e",
          "module": "System.Cpuid",
          "name": "Feature1D",
          "package": "cpuid",
          "source": "src/System-Cpuid.html#Feature1D",
          "type": "data"
        },
        "index": {
          "description": "features as found in page register",
          "hierarchy": "System Cpuid",
          "module": "System.Cpuid",
          "name": "Feature1D",
          "package": "cpuid",
          "partial": "Feature",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cpuid/docs/System-Cpuid.html#t:Feature1D"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Cpuid",
          "name": "FlagSet",
          "package": "cpuid",
          "source": "src/System-Cpuid.html#FlagSet",
          "type": "type"
        },
        "index": {
          "hierarchy": "System Cpuid",
          "module": "System.Cpuid",
          "name": "FlagSet",
          "package": "cpuid",
          "partial": "Flag Set",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/cpuid/docs/System-Cpuid.html#t:FlagSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLine size in a cache.\n\u003c/p\u003e",
          "module": "System.Cpuid",
          "name": "LineSize",
          "package": "cpuid",
          "source": "src/System-Cpuid.html#LineSize",
          "type": "newtype"
        },
        "index": {
          "description": "Line size in cache",
          "hierarchy": "System Cpuid",
          "module": "System.Cpuid",
          "name": "LineSize",
          "package": "cpuid",
          "partial": "Line Size",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/cpuid/docs/System-Cpuid.html#t:LineSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMuOps in a processors trace cache.\n\u003c/p\u003e",
          "module": "System.Cpuid",
          "name": "MuOps",
          "package": "cpuid",
          "source": "src/System-Cpuid.html#MuOps",
          "type": "newtype"
        },
        "index": {
          "description": "MuOps in processors trace cache",
          "hierarchy": "System Cpuid",
          "module": "System.Cpuid",
          "name": "MuOps",
          "package": "cpuid",
          "partial": "Mu Ops",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/cpuid/docs/System-Cpuid.html#t:MuOps"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePage size. Some entries can have alternative page sizes,\n therefore the complicated type.\n\u003c/p\u003e",
          "module": "System.Cpuid",
          "name": "PageSize",
          "package": "cpuid",
          "source": "src/System-Cpuid.html#PageSize",
          "type": "data"
        },
        "index": {
          "description": "Page size Some entries can have alternative page sizes therefore the complicated type",
          "hierarchy": "System Cpuid",
          "module": "System.Cpuid",
          "name": "PageSize",
          "package": "cpuid",
          "partial": "Page Size",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cpuid/docs/System-Cpuid.html#t:PageSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProcessor information.\n\u003c/p\u003e",
          "module": "System.Cpuid",
          "name": "ProcessorInfo",
          "package": "cpuid",
          "source": "src/System-Cpuid.html#ProcessorInfo",
          "type": "data"
        },
        "index": {
          "description": "Processor information",
          "hierarchy": "System Cpuid",
          "module": "System.Cpuid",
          "name": "ProcessorInfo",
          "package": "cpuid",
          "partial": "Processor Info",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cpuid/docs/System-Cpuid.html#t:ProcessorInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAssociativity in a set-associative cache.\n\u003c/p\u003e",
          "module": "System.Cpuid",
          "name": "Ways",
          "package": "cpuid",
          "source": "src/System-Cpuid.html#Ways",
          "type": "newtype"
        },
        "index": {
          "description": "Associativity in set-associative cache",
          "hierarchy": "System Cpuid",
          "module": "System.Cpuid",
          "name": "Ways",
          "package": "cpuid",
          "partial": "Ways",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/cpuid/docs/System-Cpuid.html#t:Ways"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Cpuid",
          "name": "BytesPerSector",
          "package": "cpuid",
          "signature": "BytesPerSector Int",
          "source": "src/System-Cpuid.html#BytesPerSector",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Cpuid",
          "module": "System.Cpuid",
          "name": "BytesPerSector",
          "package": "cpuid",
          "partial": "Bytes Per Sector",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cpuid/docs/System-Cpuid.html#v:BytesPerSector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Cpuid",
          "name": "CacheSize",
          "package": "cpuid",
          "signature": "CacheSize Int",
          "source": "src/System-Cpuid.html#CacheSize",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Cpuid",
          "module": "System.Cpuid",
          "name": "CacheSize",
          "package": "cpuid",
          "partial": "Cache Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cpuid/docs/System-Cpuid.html#v:CacheSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Cpuid",
          "name": "CacheSizeOr",
          "package": "cpuid",
          "signature": "CacheSizeOr CacheSize CacheSize",
          "source": "src/System-Cpuid.html#CacheSize",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Cpuid",
          "module": "System.Cpuid",
          "name": "CacheSizeOr",
          "package": "cpuid",
          "partial": "Cache Size Or",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cpuid/docs/System-Cpuid.html#v:CacheSizeOr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConfiguration of data TLB.\n\u003c/p\u003e",
          "module": "System.Cpuid",
          "name": "DataTLB",
          "package": "cpuid",
          "signature": "DataTLB (Maybe CacheSize) PageSize Associativity Entries",
          "source": "src/System-Cpuid.html#CacheInfo",
          "type": "function"
        },
        "index": {
          "description": "Configuration of data TLB",
          "hierarchy": "System Cpuid",
          "module": "System.Cpuid",
          "name": "DataTLB",
          "package": "cpuid",
          "partial": "Data TLB",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cpuid/docs/System-Cpuid.html#v:DataTLB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Cpuid",
          "name": "DirectMapped",
          "package": "cpuid",
          "signature": "DirectMapped",
          "source": "src/System-Cpuid.html#Associativity",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Cpuid",
          "module": "System.Cpuid",
          "name": "DirectMapped",
          "package": "cpuid",
          "partial": "Direct Mapped",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cpuid/docs/System-Cpuid.html#v:DirectMapped"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Cpuid",
          "name": "Entries",
          "package": "cpuid",
          "signature": "Entries Int",
          "source": "src/System-Cpuid.html#Entries",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Cpuid",
          "module": "System.Cpuid",
          "name": "Entries",
          "package": "cpuid",
          "partial": "Entries",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cpuid/docs/System-Cpuid.html#v:Entries"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFirst-level code cache configuration.\n\u003c/p\u003e",
          "module": "System.Cpuid",
          "name": "FirstLevelDCache",
          "package": "cpuid",
          "signature": "FirstLevelDCache CacheSize Associativity LineSize",
          "source": "src/System-Cpuid.html#CacheInfo",
          "type": "function"
        },
        "index": {
          "description": "First-level code cache configuration",
          "hierarchy": "System Cpuid",
          "module": "System.Cpuid",
          "name": "FirstLevelDCache",
          "package": "cpuid",
          "partial": "First Level DCache",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cpuid/docs/System-Cpuid.html#v:FirstLevelDCache"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFirst-level code cache configuration.\n\u003c/p\u003e",
          "module": "System.Cpuid",
          "name": "FirstLevelICache",
          "package": "cpuid",
          "signature": "FirstLevelICache CacheSize Associativity LineSize",
          "source": "src/System-Cpuid.html#CacheInfo",
          "type": "function"
        },
        "index": {
          "description": "First-level code cache configuration",
          "hierarchy": "System Cpuid",
          "module": "System.Cpuid",
          "name": "FirstLevelICache",
          "package": "cpuid",
          "partial": "First Level ICache",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cpuid/docs/System-Cpuid.html#v:FirstLevelICache"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConfiguration of code TLB.\n\u003c/p\u003e",
          "module": "System.Cpuid",
          "name": "InstructionTLB",
          "package": "cpuid",
          "signature": "InstructionTLB (Maybe CacheSize) PageSize Associativity Entries",
          "source": "src/System-Cpuid.html#CacheInfo",
          "type": "function"
        },
        "index": {
          "description": "Configuration of code TLB",
          "hierarchy": "System Cpuid",
          "module": "System.Cpuid",
          "name": "InstructionTLB",
          "package": "cpuid",
          "partial": "Instruction TLB",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cpuid/docs/System-Cpuid.html#v:InstructionTLB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Cpuid",
          "name": "LineSize",
          "package": "cpuid",
          "signature": "LineSize Int",
          "source": "src/System-Cpuid.html#LineSize",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Cpuid",
          "module": "System.Cpuid",
          "name": "LineSize",
          "package": "cpuid",
          "partial": "Line Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cpuid/docs/System-Cpuid.html#v:LineSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Cpuid",
          "name": "MuOps",
          "package": "cpuid",
          "signature": "MuOps Int",
          "source": "src/System-Cpuid.html#MuOps",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Cpuid",
          "module": "System.Cpuid",
          "name": "MuOps",
          "package": "cpuid",
          "partial": "Mu Ops",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cpuid/docs/System-Cpuid.html#v:MuOps"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNo second level support.\n\u003c/p\u003e",
          "module": "System.Cpuid",
          "name": "NoSecondLevelCache",
          "package": "cpuid",
          "signature": "NoSecondLevelCache",
          "source": "src/System-Cpuid.html#CacheInfo",
          "type": "function"
        },
        "index": {
          "description": "No second level support",
          "hierarchy": "System Cpuid",
          "module": "System.Cpuid",
          "name": "NoSecondLevelCache",
          "package": "cpuid",
          "partial": "No Second Level Cache",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cpuid/docs/System-Cpuid.html#v:NoSecondLevelCache"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInternal use only.\n\u003c/p\u003e",
          "module": "System.Cpuid",
          "name": "NoSecondOrThirdLevelCache",
          "package": "cpuid",
          "signature": "NoSecondOrThirdLevelCache",
          "source": "src/System-Cpuid.html#CacheInfo",
          "type": "function"
        },
        "index": {
          "description": "Internal use only",
          "hierarchy": "System Cpuid",
          "module": "System.Cpuid",
          "name": "NoSecondOrThirdLevelCache",
          "package": "cpuid",
          "partial": "No Second Or Third Level Cache",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cpuid/docs/System-Cpuid.html#v:NoSecondOrThirdLevelCache"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNo third level support.\n\u003c/p\u003e",
          "module": "System.Cpuid",
          "name": "NoThirdLevelCache",
          "package": "cpuid",
          "signature": "NoThirdLevelCache",
          "source": "src/System-Cpuid.html#CacheInfo",
          "type": "function"
        },
        "index": {
          "description": "No third level support",
          "hierarchy": "System Cpuid",
          "module": "System.Cpuid",
          "name": "NoThirdLevelCache",
          "package": "cpuid",
          "partial": "No Third Level Cache",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cpuid/docs/System-Cpuid.html#v:NoThirdLevelCache"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Cpuid",
          "name": "PageSize",
          "package": "cpuid",
          "signature": "PageSize Int",
          "source": "src/System-Cpuid.html#PageSize",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Cpuid",
          "module": "System.Cpuid",
          "name": "PageSize",
          "package": "cpuid",
          "partial": "Page Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cpuid/docs/System-Cpuid.html#v:PageSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Cpuid",
          "name": "PageSizeOr",
          "package": "cpuid",
          "signature": "PageSizeOr PageSize PageSize",
          "source": "src/System-Cpuid.html#PageSize",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Cpuid",
          "module": "System.Cpuid",
          "name": "PageSizeOr",
          "package": "cpuid",
          "partial": "Page Size Or",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cpuid/docs/System-Cpuid.html#v:PageSizeOr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrefetching information.\n\u003c/p\u003e",
          "module": "System.Cpuid",
          "name": "Prefetching",
          "package": "cpuid",
          "signature": "Prefetching Int",
          "source": "src/System-Cpuid.html#CacheInfo",
          "type": "function"
        },
        "index": {
          "description": "Prefetching information",
          "hierarchy": "System Cpuid",
          "module": "System.Cpuid",
          "name": "Prefetching",
          "package": "cpuid",
          "partial": "Prefetching",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cpuid/docs/System-Cpuid.html#v:Prefetching"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Cpuid",
          "name": "ProcessorInfo",
          "package": "cpuid",
          "signature": "ProcessorInfo",
          "source": "src/System-Cpuid.html#ProcessorInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Cpuid",
          "module": "System.Cpuid",
          "name": "ProcessorInfo",
          "package": "cpuid",
          "partial": "Processor Info",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cpuid/docs/System-Cpuid.html#v:ProcessorInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSecond-level cache configuration.\n\u003c/p\u003e",
          "module": "System.Cpuid",
          "name": "SecondLevelCache",
          "package": "cpuid",
          "signature": "SecondLevelCache CacheSize Associativity LineSize (Maybe BytesPerSector)",
          "source": "src/System-Cpuid.html#CacheInfo",
          "type": "function"
        },
        "index": {
          "description": "Second-level cache configuration",
          "hierarchy": "System Cpuid",
          "module": "System.Cpuid",
          "name": "SecondLevelCache",
          "package": "cpuid",
          "partial": "Second Level Cache",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cpuid/docs/System-Cpuid.html#v:SecondLevelCache"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Cpuid",
          "name": "SetAssociative",
          "package": "cpuid",
          "signature": "SetAssociative Ways",
          "source": "src/System-Cpuid.html#Associativity",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Cpuid",
          "module": "System.Cpuid",
          "name": "SetAssociative",
          "package": "cpuid",
          "partial": "Set Associative",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cpuid/docs/System-Cpuid.html#v:SetAssociative"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSecond-level cache configuration.\n\u003c/p\u003e",
          "module": "System.Cpuid",
          "name": "ThirdLevelCache",
          "package": "cpuid",
          "signature": "ThirdLevelCache CacheSize Associativity LineSize (Maybe BytesPerSector)",
          "source": "src/System-Cpuid.html#CacheInfo",
          "type": "function"
        },
        "index": {
          "description": "Second-level cache configuration",
          "hierarchy": "System Cpuid",
          "module": "System.Cpuid",
          "name": "ThirdLevelCache",
          "package": "cpuid",
          "partial": "Third Level Cache",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cpuid/docs/System-Cpuid.html#v:ThirdLevelCache"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTrace cache (1st-level code cache) configuration.\n\u003c/p\u003e",
          "module": "System.Cpuid",
          "name": "TraceCache",
          "package": "cpuid",
          "signature": "TraceCache MuOps Associativity",
          "source": "src/System-Cpuid.html#CacheInfo",
          "type": "function"
        },
        "index": {
          "description": "Trace cache st-level code cache configuration",
          "hierarchy": "System Cpuid",
          "module": "System.Cpuid",
          "name": "TraceCache",
          "package": "cpuid",
          "partial": "Trace Cache",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cpuid/docs/System-Cpuid.html#v:TraceCache"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Cpuid",
          "name": "Ways",
          "package": "cpuid",
          "signature": "Ways Int",
          "source": "src/System-Cpuid.html#Ways",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Cpuid",
          "module": "System.Cpuid",
          "name": "Ways",
          "package": "cpuid",
          "partial": "Ways",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cpuid/docs/System-Cpuid.html#v:Ways"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Cpuid",
          "name": "acpi",
          "package": "cpuid",
          "signature": "Feature1D",
          "source": "src/System-Cpuid.html#acpi",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Cpuid",
          "module": "System.Cpuid",
          "name": "acpi",
          "package": "cpuid",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cpuid/docs/System-Cpuid.html#v:acpi"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Cpuid",
          "name": "aes",
          "package": "cpuid",
          "signature": "Feature1C",
          "source": "src/System-Cpuid.html#aes",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Cpuid",
          "module": "System.Cpuid",
          "name": "aes",
          "package": "cpuid",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cpuid/docs/System-Cpuid.html#v:aes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Cpuid",
          "name": "apic",
          "package": "cpuid",
          "signature": "Feature1D",
          "source": "src/System-Cpuid.html#apic",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Cpuid",
          "module": "System.Cpuid",
          "name": "apic",
          "package": "cpuid",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cpuid/docs/System-Cpuid.html#v:apic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Cpuid",
          "name": "avx",
          "package": "cpuid",
          "signature": "Feature1C",
          "source": "src/System-Cpuid.html#avx",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Cpuid",
          "module": "System.Cpuid",
          "name": "avx",
          "package": "cpuid",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cpuid/docs/System-Cpuid.html#v:avx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecute the \u003ccode\u003ecpuid\u003c/code\u003e instruction and return the brand string\n (processor name and maximum frequency) reported by that\n instruction.\n\u003c/p\u003e",
          "module": "System.Cpuid",
          "name": "brandString",
          "package": "cpuid",
          "signature": "IO String",
          "source": "src/System-Cpuid.html#brandString",
          "type": "function"
        },
        "index": {
          "description": "Execute the cpuid instruction and return the brand string processor name and maximum frequency reported by that instruction",
          "hierarchy": "System Cpuid",
          "module": "System.Cpuid",
          "name": "brandString",
          "package": "cpuid",
          "partial": "String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cpuid/docs/System-Cpuid.html#v:brandString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFetch all available cache information from the processor, using\n the \u003ccode\u003ecpuid\u003c/code\u003e instruction.  The list is not ordered.\n\u003c/p\u003e",
          "module": "System.Cpuid",
          "name": "cacheInfo",
          "package": "cpuid",
          "signature": "IO [CacheInfo]",
          "source": "src/System-Cpuid.html#cacheInfo",
          "type": "function"
        },
        "index": {
          "description": "Fetch all available cache information from the processor using the cpuid instruction The list is not ordered",
          "hierarchy": "System Cpuid",
          "module": "System.Cpuid",
          "name": "cacheInfo",
          "normalized": "IO[CacheInfo]",
          "package": "cpuid",
          "partial": "Info",
          "signature": "IO[CacheInfo]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cpuid/docs/System-Cpuid.html#v:cacheInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Cpuid",
          "name": "clfsh",
          "package": "cpuid",
          "signature": "Feature1D",
          "source": "src/System-Cpuid.html#clfsh",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Cpuid",
          "module": "System.Cpuid",
          "name": "clfsh",
          "package": "cpuid",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cpuid/docs/System-Cpuid.html#v:clfsh"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Cpuid",
          "name": "cmov",
          "package": "cpuid",
          "signature": "Feature1D",
          "source": "src/System-Cpuid.html#cmov",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Cpuid",
          "module": "System.Cpuid",
          "name": "cmov",
          "package": "cpuid",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cpuid/docs/System-Cpuid.html#v:cmov"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Cpuid",
          "name": "cmpxchg16b",
          "package": "cpuid",
          "signature": "Feature1C",
          "source": "src/System-Cpuid.html#cmpxchg16b",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Cpuid",
          "module": "System.Cpuid",
          "name": "cmpxchg16b",
          "package": "cpuid",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cpuid/docs/System-Cpuid.html#v:cmpxchg16b"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Cpuid",
          "name": "cnxtid",
          "package": "cpuid",
          "signature": "Feature1C",
          "source": "src/System-Cpuid.html#cnxtid",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Cpuid",
          "module": "System.Cpuid",
          "name": "cnxtid",
          "package": "cpuid",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cpuid/docs/System-Cpuid.html#v:cnxtid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecute the \u003ccode\u003ecpuid\u003c/code\u003e instructions with the given argument\n in the EAX register.  Return the values of the registers\n EAX, EBX, ECX and EDX in that order.\n\u003c/p\u003e",
          "module": "System.Cpuid",
          "name": "cpuid",
          "package": "cpuid",
          "signature": "Word32 -\u003e IO (Word32, Word32, Word32, Word32)",
          "source": "src/System-Cpuid.html#cpuid",
          "type": "function"
        },
        "index": {
          "description": "Execute the cpuid instructions with the given argument in the EAX register Return the values of the registers EAX EBX ECX and EDX in that order",
          "hierarchy": "System Cpuid",
          "module": "System.Cpuid",
          "name": "cpuid",
          "normalized": "Word-\u003eIO(Word,Word,Word,Word)",
          "package": "cpuid",
          "signature": "Word-\u003eIO(Word,Word,Word,Word)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cpuid/docs/System-Cpuid.html#v:cpuid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Cpuid",
          "name": "cx8",
          "package": "cpuid",
          "signature": "Feature1D",
          "source": "src/System-Cpuid.html#cx8",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Cpuid",
          "module": "System.Cpuid",
          "name": "cx8",
          "package": "cpuid",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cpuid/docs/System-Cpuid.html#v:cx8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Cpuid",
          "name": "dca",
          "package": "cpuid",
          "signature": "Feature1C",
          "source": "src/System-Cpuid.html#dca",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Cpuid",
          "module": "System.Cpuid",
          "name": "dca",
          "package": "cpuid",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cpuid/docs/System-Cpuid.html#v:dca"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Cpuid",
          "name": "de",
          "package": "cpuid",
          "signature": "Feature1D",
          "source": "src/System-Cpuid.html#de",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Cpuid",
          "module": "System.Cpuid",
          "name": "de",
          "package": "cpuid",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cpuid/docs/System-Cpuid.html#v:de"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Cpuid",
          "name": "deadline",
          "package": "cpuid",
          "signature": "Feature1C",
          "source": "src/System-Cpuid.html#deadline",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Cpuid",
          "module": "System.Cpuid",
          "name": "deadline",
          "package": "cpuid",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cpuid/docs/System-Cpuid.html#v:deadline"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Cpuid",
          "name": "ds",
          "package": "cpuid",
          "signature": "Feature1D",
          "source": "src/System-Cpuid.html#ds",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Cpuid",
          "module": "System.Cpuid",
          "name": "ds",
          "package": "cpuid",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cpuid/docs/System-Cpuid.html#v:ds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Cpuid",
          "name": "dscpl",
          "package": "cpuid",
          "signature": "Feature1C",
          "source": "src/System-Cpuid.html#dscpl",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Cpuid",
          "module": "System.Cpuid",
          "name": "dscpl",
          "package": "cpuid",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cpuid/docs/System-Cpuid.html#v:dscpl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Cpuid",
          "name": "dtes64",
          "package": "cpuid",
          "signature": "Feature1C",
          "source": "src/System-Cpuid.html#dtes64",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Cpuid",
          "module": "System.Cpuid",
          "name": "dtes64",
          "package": "cpuid",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cpuid/docs/System-Cpuid.html#v:dtes64"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Cpuid",
          "name": "est",
          "package": "cpuid",
          "signature": "Feature1C",
          "source": "src/System-Cpuid.html#est",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Cpuid",
          "module": "System.Cpuid",
          "name": "est",
          "package": "cpuid",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cpuid/docs/System-Cpuid.html#v:est"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Cpuid",
          "name": "f16c",
          "package": "cpuid",
          "signature": "Feature1C",
          "source": "src/System-Cpuid.html#f16c",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Cpuid",
          "module": "System.Cpuid",
          "name": "f16c",
          "package": "cpuid",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cpuid/docs/System-Cpuid.html#v:f16c"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Cpuid",
          "name": "features",
          "package": "cpuid",
          "signature": "IO (FlagSet Feature1C, FlagSet Feature1D)",
          "source": "src/System-Cpuid.html#features",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Cpuid",
          "module": "System.Cpuid",
          "name": "features",
          "normalized": "IO(FlagSet Feature C,FlagSet Feature D)",
          "package": "cpuid",
          "signature": "IO(FlagSet Feature C,FlagSet Feature D)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cpuid/docs/System-Cpuid.html#v:features"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Cpuid",
          "name": "fma",
          "package": "cpuid",
          "signature": "Feature1C",
          "source": "src/System-Cpuid.html#fma",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Cpuid",
          "module": "System.Cpuid",
          "name": "fma",
          "package": "cpuid",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cpuid/docs/System-Cpuid.html#v:fma"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Cpuid",
          "name": "fpu",
          "package": "cpuid",
          "signature": "Feature1D",
          "source": "src/System-Cpuid.html#fpu",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Cpuid",
          "module": "System.Cpuid",
          "name": "fpu",
          "package": "cpuid",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cpuid/docs/System-Cpuid.html#v:fpu"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Cpuid",
          "name": "fxsr",
          "package": "cpuid",
          "signature": "Feature1D",
          "source": "src/System-Cpuid.html#fxsr",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Cpuid",
          "module": "System.Cpuid",
          "name": "fxsr",
          "package": "cpuid",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cpuid/docs/System-Cpuid.html#v:fxsr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Cpuid",
          "name": "htt",
          "package": "cpuid",
          "signature": "Feature1D",
          "source": "src/System-Cpuid.html#htt",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Cpuid",
          "module": "System.Cpuid",
          "name": "htt",
          "package": "cpuid",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cpuid/docs/System-Cpuid.html#v:htt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Cpuid",
          "name": "hypervisor",
          "package": "cpuid",
          "signature": "Feature1C",
          "source": "src/System-Cpuid.html#hypervisor",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Cpuid",
          "module": "System.Cpuid",
          "name": "hypervisor",
          "package": "cpuid",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cpuid/docs/System-Cpuid.html#v:hypervisor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Cpuid",
          "name": "ia64",
          "package": "cpuid",
          "signature": "Feature1D",
          "source": "src/System-Cpuid.html#ia64",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Cpuid",
          "module": "System.Cpuid",
          "name": "ia64",
          "package": "cpuid",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cpuid/docs/System-Cpuid.html#v:ia64"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Cpuid",
          "name": "mca",
          "package": "cpuid",
          "signature": "Feature1D",
          "source": "src/System-Cpuid.html#mca",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Cpuid",
          "module": "System.Cpuid",
          "name": "mca",
          "package": "cpuid",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cpuid/docs/System-Cpuid.html#v:mca"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Cpuid",
          "name": "mce",
          "package": "cpuid",
          "signature": "Feature1D",
          "source": "src/System-Cpuid.html#mce",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Cpuid",
          "module": "System.Cpuid",
          "name": "mce",
          "package": "cpuid",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cpuid/docs/System-Cpuid.html#v:mce"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Cpuid",
          "name": "mmx",
          "package": "cpuid",
          "signature": "Feature1D",
          "source": "src/System-Cpuid.html#mmx",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Cpuid",
          "module": "System.Cpuid",
          "name": "mmx",
          "package": "cpuid",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cpuid/docs/System-Cpuid.html#v:mmx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Cpuid",
          "name": "monitor",
          "package": "cpuid",
          "signature": "Feature1C",
          "source": "src/System-Cpuid.html#monitor",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Cpuid",
          "module": "System.Cpuid",
          "name": "monitor",
          "package": "cpuid",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cpuid/docs/System-Cpuid.html#v:monitor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Cpuid",
          "name": "movbe",
          "package": "cpuid",
          "signature": "Feature1C",
          "source": "src/System-Cpuid.html#movbe",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Cpuid",
          "module": "System.Cpuid",
          "name": "movbe",
          "package": "cpuid",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cpuid/docs/System-Cpuid.html#v:movbe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Cpuid",
          "name": "msr",
          "package": "cpuid",
          "signature": "Feature1D",
          "source": "src/System-Cpuid.html#msr",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Cpuid",
          "module": "System.Cpuid",
          "name": "msr",
          "package": "cpuid",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cpuid/docs/System-Cpuid.html#v:msr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Cpuid",
          "name": "mtrr",
          "package": "cpuid",
          "signature": "Feature1D",
          "source": "src/System-Cpuid.html#mtrr",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Cpuid",
          "module": "System.Cpuid",
          "name": "mtrr",
          "package": "cpuid",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cpuid/docs/System-Cpuid.html#v:mtrr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Cpuid",
          "name": "osxsave",
          "package": "cpuid",
          "signature": "Feature1C",
          "source": "src/System-Cpuid.html#osxsave",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Cpuid",
          "module": "System.Cpuid",
          "name": "osxsave",
          "package": "cpuid",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cpuid/docs/System-Cpuid.html#v:osxsave"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Cpuid",
          "name": "pae",
          "package": "cpuid",
          "signature": "Feature1D",
          "source": "src/System-Cpuid.html#pae",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Cpuid",
          "module": "System.Cpuid",
          "name": "pae",
          "package": "cpuid",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cpuid/docs/System-Cpuid.html#v:pae"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Cpuid",
          "name": "pat",
          "package": "cpuid",
          "signature": "Feature1D",
          "source": "src/System-Cpuid.html#pat",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Cpuid",
          "module": "System.Cpuid",
          "name": "pat",
          "package": "cpuid",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cpuid/docs/System-Cpuid.html#v:pat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Cpuid",
          "name": "pbe",
          "package": "cpuid",
          "signature": "Feature1D",
          "source": "src/System-Cpuid.html#pbe",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Cpuid",
          "module": "System.Cpuid",
          "name": "pbe",
          "package": "cpuid",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cpuid/docs/System-Cpuid.html#v:pbe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Cpuid",
          "name": "pcid",
          "package": "cpuid",
          "signature": "Feature1C",
          "source": "src/System-Cpuid.html#pcid",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Cpuid",
          "module": "System.Cpuid",
          "name": "pcid",
          "package": "cpuid",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cpuid/docs/System-Cpuid.html#v:pcid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Cpuid",
          "name": "pclmulqdq",
          "package": "cpuid",
          "signature": "Feature1C",
          "source": "src/System-Cpuid.html#pclmulqdq",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Cpuid",
          "module": "System.Cpuid",
          "name": "pclmulqdq",
          "package": "cpuid",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cpuid/docs/System-Cpuid.html#v:pclmulqdq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Cpuid",
          "name": "pdcm",
          "package": "cpuid",
          "signature": "Feature1C",
          "source": "src/System-Cpuid.html#pdcm",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Cpuid",
          "module": "System.Cpuid",
          "name": "pdcm",
          "package": "cpuid",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cpuid/docs/System-Cpuid.html#v:pdcm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Cpuid",
          "name": "pge",
          "package": "cpuid",
          "signature": "Feature1D",
          "source": "src/System-Cpuid.html#pge",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Cpuid",
          "module": "System.Cpuid",
          "name": "pge",
          "package": "cpuid",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cpuid/docs/System-Cpuid.html#v:pge"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProcessor family.\n\u003c/p\u003e",
          "module": "System.Cpuid",
          "name": "piFamily",
          "package": "cpuid",
          "signature": "Int",
          "source": "src/System-Cpuid.html#ProcessorInfo",
          "type": "function"
        },
        "index": {
          "description": "Processor family",
          "hierarchy": "System Cpuid",
          "module": "System.Cpuid",
          "name": "piFamily",
          "package": "cpuid",
          "partial": "Family",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cpuid/docs/System-Cpuid.html#v:piFamily"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProcessor model.\n\u003c/p\u003e",
          "module": "System.Cpuid",
          "name": "piModel",
          "package": "cpuid",
          "signature": "Int",
          "source": "src/System-Cpuid.html#ProcessorInfo",
          "type": "function"
        },
        "index": {
          "description": "Processor model",
          "hierarchy": "System Cpuid",
          "module": "System.Cpuid",
          "name": "piModel",
          "package": "cpuid",
          "partial": "Model",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cpuid/docs/System-Cpuid.html#v:piModel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProcessor stepping.\n\u003c/p\u003e",
          "module": "System.Cpuid",
          "name": "piStepping",
          "package": "cpuid",
          "signature": "Int",
          "source": "src/System-Cpuid.html#ProcessorInfo",
          "type": "function"
        },
        "index": {
          "description": "Processor stepping",
          "hierarchy": "System Cpuid",
          "module": "System.Cpuid",
          "name": "piStepping",
          "package": "cpuid",
          "partial": "Stepping",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cpuid/docs/System-Cpuid.html#v:piStepping"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Cpuid",
          "name": "piType",
          "package": "cpuid",
          "signature": "Int",
          "source": "src/System-Cpuid.html#ProcessorInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Cpuid",
          "module": "System.Cpuid",
          "name": "piType",
          "package": "cpuid",
          "partial": "Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cpuid/docs/System-Cpuid.html#v:piType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Cpuid",
          "name": "popcnt",
          "package": "cpuid",
          "signature": "Feature1C",
          "source": "src/System-Cpuid.html#popcnt",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Cpuid",
          "module": "System.Cpuid",
          "name": "popcnt",
          "package": "cpuid",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cpuid/docs/System-Cpuid.html#v:popcnt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrieve basic processor information from the processor using the\n \u003ccode\u003ecpuid\u003c/code\u003e instruction.\n\u003c/p\u003e",
          "module": "System.Cpuid",
          "name": "processorInfo",
          "package": "cpuid",
          "signature": "IO ProcessorInfo",
          "source": "src/System-Cpuid.html#processorInfo",
          "type": "function"
        },
        "index": {
          "description": "Retrieve basic processor information from the processor using the cpuid instruction",
          "hierarchy": "System Cpuid",
          "module": "System.Cpuid",
          "name": "processorInfo",
          "package": "cpuid",
          "partial": "Info",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cpuid/docs/System-Cpuid.html#v:processorInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Cpuid",
          "name": "pse",
          "package": "cpuid",
          "signature": "Feature1D",
          "source": "src/System-Cpuid.html#pse",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Cpuid",
          "module": "System.Cpuid",
          "name": "pse",
          "package": "cpuid",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cpuid/docs/System-Cpuid.html#v:pse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Cpuid",
          "name": "pse36",
          "package": "cpuid",
          "signature": "Feature1D",
          "source": "src/System-Cpuid.html#pse36",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Cpuid",
          "module": "System.Cpuid",
          "name": "pse36",
          "package": "cpuid",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cpuid/docs/System-Cpuid.html#v:pse36"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Cpuid",
          "name": "psn",
          "package": "cpuid",
          "signature": "Feature1D",
          "source": "src/System-Cpuid.html#psn",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Cpuid",
          "module": "System.Cpuid",
          "name": "psn",
          "package": "cpuid",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cpuid/docs/System-Cpuid.html#v:psn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Cpuid",
          "name": "rdrand",
          "package": "cpuid",
          "signature": "Feature1C",
          "source": "src/System-Cpuid.html#rdrand",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Cpuid",
          "module": "System.Cpuid",
          "name": "rdrand",
          "package": "cpuid",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cpuid/docs/System-Cpuid.html#v:rdrand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Cpuid",
          "name": "sep",
          "package": "cpuid",
          "signature": "Feature1D",
          "source": "src/System-Cpuid.html#sep",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Cpuid",
          "module": "System.Cpuid",
          "name": "sep",
          "package": "cpuid",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cpuid/docs/System-Cpuid.html#v:sep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Cpuid",
          "name": "smx",
          "package": "cpuid",
          "signature": "Feature1C",
          "source": "src/System-Cpuid.html#smx",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Cpuid",
          "module": "System.Cpuid",
          "name": "smx",
          "package": "cpuid",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cpuid/docs/System-Cpuid.html#v:smx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Cpuid",
          "name": "ss",
          "package": "cpuid",
          "signature": "Feature1D",
          "source": "src/System-Cpuid.html#ss",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Cpuid",
          "module": "System.Cpuid",
          "name": "ss",
          "package": "cpuid",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cpuid/docs/System-Cpuid.html#v:ss"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Cpuid",
          "name": "sse",
          "package": "cpuid",
          "signature": "Feature1D",
          "source": "src/System-Cpuid.html#sse",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Cpuid",
          "module": "System.Cpuid",
          "name": "sse",
          "package": "cpuid",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cpuid/docs/System-Cpuid.html#v:sse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Cpuid",
          "name": "sse2",
          "package": "cpuid",
          "signature": "Feature1D",
          "source": "src/System-Cpuid.html#sse2",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Cpuid",
          "module": "System.Cpuid",
          "name": "sse2",
          "package": "cpuid",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cpuid/docs/System-Cpuid.html#v:sse2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Cpuid",
          "name": "sse3",
          "package": "cpuid",
          "signature": "Feature1C",
          "source": "src/System-Cpuid.html#sse3",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Cpuid",
          "module": "System.Cpuid",
          "name": "sse3",
          "package": "cpuid",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cpuid/docs/System-Cpuid.html#v:sse3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Cpuid",
          "name": "sse4_1",
          "package": "cpuid",
          "signature": "Feature1C",
          "source": "src/System-Cpuid.html#sse4_1",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Cpuid",
          "module": "System.Cpuid",
          "name": "sse4_1",
          "package": "cpuid",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cpuid/docs/System-Cpuid.html#v:sse4_1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Cpuid",
          "name": "sse4_2",
          "package": "cpuid",
          "signature": "Feature1C",
          "source": "src/System-Cpuid.html#sse4_2",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Cpuid",
          "module": "System.Cpuid",
          "name": "sse4_2",
          "package": "cpuid",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cpuid/docs/System-Cpuid.html#v:sse4_2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Cpuid",
          "name": "ssse3",
          "package": "cpuid",
          "signature": "Feature1C",
          "source": "src/System-Cpuid.html#ssse3",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Cpuid",
          "module": "System.Cpuid",
          "name": "ssse3",
          "package": "cpuid",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cpuid/docs/System-Cpuid.html#v:ssse3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Cpuid",
          "name": "testFlag",
          "package": "cpuid",
          "signature": "a -\u003e FlagSet a -\u003e Bool",
          "source": "src/System-Cpuid.html#testFlag",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Cpuid",
          "module": "System.Cpuid",
          "name": "testFlag",
          "normalized": "a-\u003eFlagSet a-\u003eBool",
          "package": "cpuid",
          "partial": "Flag",
          "signature": "a-\u003eFlagSet a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cpuid/docs/System-Cpuid.html#v:testFlag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Cpuid",
          "name": "tm",
          "package": "cpuid",
          "signature": "Feature1D",
          "source": "src/System-Cpuid.html#tm",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Cpuid",
          "module": "System.Cpuid",
          "name": "tm",
          "package": "cpuid",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cpuid/docs/System-Cpuid.html#v:tm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Cpuid",
          "name": "tm2",
          "package": "cpuid",
          "signature": "Feature1C",
          "source": "src/System-Cpuid.html#tm2",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Cpuid",
          "module": "System.Cpuid",
          "name": "tm2",
          "package": "cpuid",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cpuid/docs/System-Cpuid.html#v:tm2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Cpuid",
          "name": "tsc",
          "package": "cpuid",
          "signature": "Feature1D",
          "source": "src/System-Cpuid.html#tsc",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Cpuid",
          "module": "System.Cpuid",
          "name": "tsc",
          "package": "cpuid",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cpuid/docs/System-Cpuid.html#v:tsc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecute the \u003ccode\u003ecpuid\u003c/code\u003e instruction and return the vendor\n string reported by that instruction.\n\u003c/p\u003e",
          "module": "System.Cpuid",
          "name": "vendorString",
          "package": "cpuid",
          "signature": "IO String",
          "source": "src/System-Cpuid.html#vendorString",
          "type": "function"
        },
        "index": {
          "description": "Execute the cpuid instruction and return the vendor string reported by that instruction",
          "hierarchy": "System Cpuid",
          "module": "System.Cpuid",
          "name": "vendorString",
          "package": "cpuid",
          "partial": "String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cpuid/docs/System-Cpuid.html#v:vendorString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Cpuid",
          "name": "vme",
          "package": "cpuid",
          "signature": "Feature1D",
          "source": "src/System-Cpuid.html#vme",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Cpuid",
          "module": "System.Cpuid",
          "name": "vme",
          "package": "cpuid",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cpuid/docs/System-Cpuid.html#v:vme"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Cpuid",
          "name": "vmx",
          "package": "cpuid",
          "signature": "Feature1C",
          "source": "src/System-Cpuid.html#vmx",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Cpuid",
          "module": "System.Cpuid",
          "name": "vmx",
          "package": "cpuid",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cpuid/docs/System-Cpuid.html#v:vmx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Cpuid",
          "name": "x2apic",
          "package": "cpuid",
          "signature": "Feature1C",
          "source": "src/System-Cpuid.html#x2apic",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Cpuid",
          "module": "System.Cpuid",
          "name": "x2apic",
          "package": "cpuid",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cpuid/docs/System-Cpuid.html#v:x2apic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Cpuid",
          "name": "xsave",
          "package": "cpuid",
          "signature": "Feature1C",
          "source": "src/System-Cpuid.html#xsave",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Cpuid",
          "module": "System.Cpuid",
          "name": "xsave",
          "package": "cpuid",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cpuid/docs/System-Cpuid.html#v:xsave"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Cpuid",
          "name": "xtpr",
          "package": "cpuid",
          "signature": "Feature1C",
          "source": "src/System-Cpuid.html#xtpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Cpuid",
          "module": "System.Cpuid",
          "name": "xtpr",
          "package": "cpuid",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cpuid/docs/System-Cpuid.html#v:xtpr"
      }
    }
  ]
]