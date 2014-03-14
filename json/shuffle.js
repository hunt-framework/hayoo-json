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
        "word": "shuffle"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Distribution.Simple.Shuffle",
          "name": "Shuffle",
          "package": "shuffle",
          "source": "src/Distribution-Simple-Shuffle.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Distribution Simple Shuffle",
          "module": "Distribution.Simple.Shuffle",
          "name": "Shuffle",
          "package": "shuffle",
          "partial": "Shuffle",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/shuffle/docs/Distribution-Simple-Shuffle.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd shuffle to a set of existing userhooks. To use shuffle together\n with UUAGC, define a Setup.hs as follows:\n\u003c/p\u003e\u003cpre\u003e import Distribution.Simple (defaultMainWithHooks)\n import Distribution.Simple.Shuffle (shuffleHooks)\n import Distribution.Simple.UUAGC (uuagcLibUserHook)\n import UU.UUAGC (uuagc)\n\n main :: IO ()\n main = defaultMainWithHooks (shuffleHooks (uuagcLibUserHook uuagc))\n\u003c/pre\u003e\u003cp\u003eFor .chs files, the shuffle settings can be configured in the\n .cabal file as follows:\n\u003c/p\u003e\u003cpre\u003e   x-shuffle-hs:        --gen-reqm=1 --preamble=no --lhs2tex=no --variant-order=\"1\"\n\u003c/pre\u003e\u003cp\u003eFor the .cag files, the shuffle and AG options can be specified as:\n\u003c/p\u003e\u003cpre\u003e   x-shuffle-ag:        --gen-reqm=1 --preamble=no --lhs2tex=no --variant-order=\"1\"\n   x-shuffle-ag-d:      data, rename\n   x-shuffle-ag-s:      catas, semfuns, signatures, pretty, rename\n   x-shuffle-ag-sd:     data, catas, semfuns, signatures, pretty, rename, module\n   x-shuffle-ag-d-dep:  Data/DataFile.cag\n                        Another.cag\n   x-shuffle-ag-s-dep:  Main.cag\n                        Data/Imports.cag\n                        Another.cag\n\u003c/pre\u003e",
          "module": "Distribution.Simple.Shuffle",
          "name": "shuffleHooks",
          "package": "shuffle",
          "signature": "UserHooks -\u003e UserHooks",
          "source": "src/Distribution-Simple-Shuffle.html#shuffleHooks",
          "type": "function"
        },
        "index": {
          "description": "Add shuffle to set of existing userhooks To use shuffle together with UUAGC define Setup.hs as follows import Distribution.Simple defaultMainWithHooks import Distribution.Simple.Shuffle shuffleHooks import Distribution.Simple.UUAGC uuagcLibUserHook import UU.UUAGC uuagc main IO main defaultMainWithHooks shuffleHooks uuagcLibUserHook uuagc For chs files the shuffle settings can be configured in the cabal file as follows x-shuffle-hs gen-reqm preamble no lhs2tex no variant-order For the cag files the shuffle and AG options can be specified as x-shuffle-ag gen-reqm preamble no lhs2tex no variant-order x-shuffle-ag-d data rename x-shuffle-ag-s catas semfuns signatures pretty rename x-shuffle-ag-sd data catas semfuns signatures pretty rename module x-shuffle-ag-d-dep Data DataFile.cag Another.cag x-shuffle-ag-s-dep Main.cag Data Imports.cag Another.cag",
          "hierarchy": "Distribution Simple Shuffle",
          "module": "Distribution.Simple.Shuffle",
          "name": "shuffleHooks",
          "normalized": "UserHooks-\u003eUserHooks",
          "package": "shuffle",
          "partial": "Hooks",
          "signature": "UserHooks-\u003eUserHooks",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shuffle/docs/Distribution-Simple-Shuffle.html#v:shuffleHooks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UHC.Shuffle",
          "name": "Shuffle",
          "package": "shuffle",
          "source": "src/UHC-Shuffle.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "UHC Shuffle",
          "module": "UHC.Shuffle",
          "name": "Shuffle",
          "package": "shuffle",
          "partial": "Shuffle",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/shuffle/docs/UHC-Shuffle.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UHC.Shuffle",
          "name": "FPathWithAlias",
          "package": "shuffle",
          "source": "src/UHC-Shuffle.html#FPathWithAlias",
          "type": "type"
        },
        "index": {
          "hierarchy": "UHC Shuffle",
          "module": "UHC.Shuffle",
          "name": "FPathWithAlias",
          "package": "shuffle",
          "partial": "FPath With Alias",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/shuffle/docs/UHC-Shuffle.html#t:FPathWithAlias"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UHC.Shuffle",
          "name": "Opts",
          "package": "shuffle",
          "source": "src/UHC-Shuffle-Common.html#Opts",
          "type": "data"
        },
        "index": {
          "hierarchy": "UHC Shuffle",
          "module": "UHC.Shuffle",
          "name": "Opts",
          "package": "shuffle",
          "partial": "Opts",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/shuffle/docs/UHC-Shuffle.html#t:Opts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UHC.Shuffle",
          "name": "defaultOpts",
          "package": "shuffle",
          "signature": "Opts",
          "source": "src/UHC-Shuffle-Common.html#defaultOpts",
          "type": "function"
        },
        "index": {
          "hierarchy": "UHC Shuffle",
          "module": "UHC.Shuffle",
          "name": "defaultOpts",
          "package": "shuffle",
          "partial": "Opts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shuffle/docs/UHC-Shuffle.html#v:defaultOpts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UHC.Shuffle",
          "name": "getDeps",
          "package": "shuffle",
          "signature": "Opts -\u003e String -\u003e IO [String]",
          "source": "src/UHC-Shuffle.html#getDeps",
          "type": "function"
        },
        "index": {
          "hierarchy": "UHC Shuffle",
          "module": "UHC.Shuffle",
          "name": "getDeps",
          "normalized": "Opts-\u003eString-\u003eIO[String]",
          "package": "shuffle",
          "partial": "Deps",
          "signature": "Opts-\u003eString-\u003eIO[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shuffle/docs/UHC-Shuffle.html#v:getDeps"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UHC.Shuffle",
          "name": "parseOpts",
          "package": "shuffle",
          "signature": "[String] -\u003e (Opts, FPath, [FPathWithAlias], [String])",
          "source": "src/UHC-Shuffle.html#parseOpts",
          "type": "function"
        },
        "index": {
          "hierarchy": "UHC Shuffle",
          "module": "UHC.Shuffle",
          "name": "parseOpts",
          "normalized": "[String]-\u003e(Opts,FPath,[FPathWithAlias],[String])",
          "package": "shuffle",
          "partial": "Opts",
          "signature": "[String]-\u003e(Opts,FPath,[FPathWithAlias],[String])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shuffle/docs/UHC-Shuffle.html#v:parseOpts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UHC.Shuffle",
          "name": "shuffleCompile",
          "package": "shuffle",
          "signature": "Handle -\u003e Opts -\u003e FPath -\u003e [FPathWithAlias] -\u003e IO Bool",
          "source": "src/UHC-Shuffle.html#shuffleCompile",
          "type": "function"
        },
        "index": {
          "hierarchy": "UHC Shuffle",
          "module": "UHC.Shuffle",
          "name": "shuffleCompile",
          "normalized": "Handle-\u003eOpts-\u003eFPath-\u003e[FPathWithAlias]-\u003eIO Bool",
          "package": "shuffle",
          "partial": "Compile",
          "signature": "Handle-\u003eOpts-\u003eFPath-\u003e[FPathWithAlias]-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shuffle/docs/UHC-Shuffle.html#v:shuffleCompile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UHC.Shuffle",
          "name": "shuffleMain",
          "package": "shuffle",
          "signature": "IO ()",
          "source": "src/UHC-Shuffle.html#shuffleMain",
          "type": "function"
        },
        "index": {
          "hierarchy": "UHC Shuffle",
          "module": "UHC.Shuffle",
          "name": "shuffleMain",
          "normalized": "IO()",
          "package": "shuffle",
          "partial": "Main",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shuffle/docs/UHC-Shuffle.html#v:shuffleMain"
      }
    }
  ]
]