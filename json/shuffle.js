[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shuffle/docs/Distribution-Simple-Shuffle.html#",
      "description": {
        "fct-module": "Distribution.Simple.Shuffle",
        "fct-package": "shuffle",
        "fct-signature": "module",
        "fct-source": "src/Distribution-Simple-Shuffle.html",
        "fct-type": "module",
        "title": "Shuffle"
      },
      "index": {
        "description": "",
        "hierarchy": "Distribution Simple Shuffle",
        "module": "Distribution.Simple.Shuffle",
        "name": "Shuffle",
        "normalized": "",
        "package": "shuffle",
        "partial": "Shuffle",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shuffle/docs/Distribution-Simple-Shuffle.html#v:shuffleHooks",
      "description": {
        "fct-descr": "\u003cp\u003eAdd shuffle to a set of existing userhooks. To use shuffle together\n with UUAGC, define a Setup.hs as follows:\n\u003c/p\u003e\u003cpre\u003e import Distribution.Simple (defaultMainWithHooks)\n import Distribution.Simple.Shuffle (shuffleHooks)\n import Distribution.Simple.UUAGC (uuagcLibUserHook)\n import UU.UUAGC (uuagc)\n\n main :: IO ()\n main = defaultMainWithHooks (shuffleHooks (uuagcLibUserHook uuagc))\n\u003c/pre\u003e\u003cp\u003eFor .chs files, the shuffle settings can be configured in the\n .cabal file as follows:\n\u003c/p\u003e\u003cpre\u003e   x-shuffle-hs:        --gen-reqm=1 --preamble=no --lhs2tex=no --variant-order=\"1\"\n\u003c/pre\u003e\u003cp\u003eFor the .cag files, the shuffle and AG options can be specified as:\n\u003c/p\u003e\u003cpre\u003e   x-shuffle-ag:        --gen-reqm=1 --preamble=no --lhs2tex=no --variant-order=\"1\"\n   x-shuffle-ag-d:      data, rename\n   x-shuffle-ag-s:      catas, semfuns, signatures, pretty, rename\n   x-shuffle-ag-sd:     data, catas, semfuns, signatures, pretty, rename, module\n   x-shuffle-ag-d-dep:  Data/DataFile.cag\n                        Another.cag\n   x-shuffle-ag-s-dep:  Main.cag\n                        Data/Imports.cag\n                        Another.cag\n\u003c/pre\u003e",
        "fct-module": "Distribution.Simple.Shuffle",
        "fct-package": "shuffle",
        "fct-signature": "UserHooks -\u003e UserHooks",
        "fct-source": "src/Distribution-Simple-Shuffle.html#shuffleHooks",
        "fct-type": "function",
        "title": "shuffleHooks"
      },
      "index": {
        "description": "Add shuffle to set of existing userhooks To use shuffle together with UUAGC define Setup.hs as follows import Distribution.Simple defaultMainWithHooks import Distribution.Simple.Shuffle shuffleHooks import Distribution.Simple.UUAGC uuagcLibUserHook import UU.UUAGC uuagc main IO main defaultMainWithHooks shuffleHooks uuagcLibUserHook uuagc For chs files the shuffle settings can be configured in the cabal file as follows x-shuffle-hs gen-reqm preamble no lhs2tex no variant-order For the cag files the shuffle and AG options can be specified as x-shuffle-ag gen-reqm preamble no lhs2tex no variant-order x-shuffle-ag-d data rename x-shuffle-ag-s catas semfuns signatures pretty rename x-shuffle-ag-sd data catas semfuns signatures pretty rename module x-shuffle-ag-d-dep Data DataFile.cag Another.cag x-shuffle-ag-s-dep Main.cag Data Imports.cag Another.cag",
        "hierarchy": "Distribution Simple Shuffle",
        "module": "Distribution.Simple.Shuffle",
        "name": "shuffleHooks",
        "normalized": "UserHooks-\u003eUserHooks",
        "package": "shuffle",
        "partial": "Hooks",
        "signature": "UserHooks-\u003eUserHooks"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shuffle/docs/UHC-Shuffle.html#",
      "description": {
        "fct-module": "UHC.Shuffle",
        "fct-package": "shuffle",
        "fct-signature": "module",
        "fct-source": "src/UHC-Shuffle.html",
        "fct-type": "module",
        "title": "Shuffle"
      },
      "index": {
        "description": "",
        "hierarchy": "UHC Shuffle",
        "module": "UHC.Shuffle",
        "name": "Shuffle",
        "normalized": "",
        "package": "shuffle",
        "partial": "Shuffle",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shuffle/docs/UHC-Shuffle.html#t:FPathWithAlias",
      "description": {
        "fct-module": "UHC.Shuffle",
        "fct-package": "shuffle",
        "fct-signature": "type",
        "fct-source": "src/UHC-Shuffle.html#FPathWithAlias",
        "fct-type": "type",
        "title": "FPathWithAlias"
      },
      "index": {
        "description": "",
        "hierarchy": "UHC Shuffle",
        "module": "UHC.Shuffle",
        "name": "FPathWithAlias",
        "normalized": "",
        "package": "shuffle",
        "partial": "FPath With Alias",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shuffle/docs/UHC-Shuffle.html#t:Opts",
      "description": {
        "fct-module": "UHC.Shuffle",
        "fct-package": "shuffle",
        "fct-signature": "data",
        "fct-source": "src/UHC-Shuffle-Common.html#Opts",
        "fct-type": "data",
        "title": "Opts"
      },
      "index": {
        "description": "",
        "hierarchy": "UHC Shuffle",
        "module": "UHC.Shuffle",
        "name": "Opts",
        "normalized": "",
        "package": "shuffle",
        "partial": "Opts",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shuffle/docs/UHC-Shuffle.html#v:defaultOpts",
      "description": {
        "fct-module": "UHC.Shuffle",
        "fct-package": "shuffle",
        "fct-signature": "Opts",
        "fct-source": "src/UHC-Shuffle-Common.html#defaultOpts",
        "fct-type": "function",
        "title": "defaultOpts"
      },
      "index": {
        "description": "",
        "hierarchy": "UHC Shuffle",
        "module": "UHC.Shuffle",
        "name": "defaultOpts",
        "normalized": "",
        "package": "shuffle",
        "partial": "Opts",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shuffle/docs/UHC-Shuffle.html#v:getDeps",
      "description": {
        "fct-module": "UHC.Shuffle",
        "fct-package": "shuffle",
        "fct-signature": "Opts -\u003e String -\u003e IO [String]",
        "fct-source": "src/UHC-Shuffle.html#getDeps",
        "fct-type": "function",
        "title": "getDeps"
      },
      "index": {
        "description": "",
        "hierarchy": "UHC Shuffle",
        "module": "UHC.Shuffle",
        "name": "getDeps",
        "normalized": "Opts-\u003eString-\u003eIO[String]",
        "package": "shuffle",
        "partial": "Deps",
        "signature": "Opts-\u003eString-\u003eIO[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shuffle/docs/UHC-Shuffle.html#v:parseOpts",
      "description": {
        "fct-module": "UHC.Shuffle",
        "fct-package": "shuffle",
        "fct-signature": "[String] -\u003e (Opts, FPath, [FPathWithAlias], [String])",
        "fct-source": "src/UHC-Shuffle.html#parseOpts",
        "fct-type": "function",
        "title": "parseOpts"
      },
      "index": {
        "description": "",
        "hierarchy": "UHC Shuffle",
        "module": "UHC.Shuffle",
        "name": "parseOpts",
        "normalized": "[String]-\u003e(Opts,FPath,[FPathWithAlias],[String])",
        "package": "shuffle",
        "partial": "Opts",
        "signature": "[String]-\u003e(Opts,FPath,[FPathWithAlias],[String])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shuffle/docs/UHC-Shuffle.html#v:shuffleCompile",
      "description": {
        "fct-module": "UHC.Shuffle",
        "fct-package": "shuffle",
        "fct-signature": "Handle -\u003e Opts -\u003e FPath -\u003e [FPathWithAlias] -\u003e IO Bool",
        "fct-source": "src/UHC-Shuffle.html#shuffleCompile",
        "fct-type": "function",
        "title": "shuffleCompile"
      },
      "index": {
        "description": "",
        "hierarchy": "UHC Shuffle",
        "module": "UHC.Shuffle",
        "name": "shuffleCompile",
        "normalized": "Handle-\u003eOpts-\u003eFPath-\u003e[FPathWithAlias]-\u003eIO Bool",
        "package": "shuffle",
        "partial": "Compile",
        "signature": "Handle-\u003eOpts-\u003eFPath-\u003e[FPathWithAlias]-\u003eIO Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shuffle/docs/UHC-Shuffle.html#v:shuffleMain",
      "description": {
        "fct-module": "UHC.Shuffle",
        "fct-package": "shuffle",
        "fct-signature": "IO ()",
        "fct-source": "src/UHC-Shuffle.html#shuffleMain",
        "fct-type": "function",
        "title": "shuffleMain"
      },
      "index": {
        "description": "",
        "hierarchy": "UHC Shuffle",
        "module": "UHC.Shuffle",
        "name": "shuffleMain",
        "normalized": "IO()",
        "package": "shuffle",
        "partial": "Main",
        "signature": "IO()"
      }
    }
  }
]