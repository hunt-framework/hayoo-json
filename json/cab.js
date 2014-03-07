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
        "word": "cab"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Distribution.Cab.PkgDB",
          "name": "PkgDB",
          "package": "cab",
          "source": "src/Distribution-Cab-PkgDB.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Distribution Cab PkgDB",
          "module": "Distribution.Cab.PkgDB",
          "name": "PkgDB",
          "package": "cab",
          "partial": "Pkg DB",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/cab/docs/Distribution-Cab-PkgDB.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Distribution.Cab.PkgDB",
          "name": "PkgDB",
          "package": "cab",
          "source": "src/Distribution-Cab-PkgDB.html#PkgDB",
          "type": "type"
        },
        "index": {
          "hierarchy": "Distribution Cab PkgDB",
          "module": "Distribution.Cab.PkgDB",
          "name": "PkgDB",
          "package": "cab",
          "partial": "Pkg DB",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/cab/docs/Distribution-Cab-PkgDB.html#t:PkgDB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Distribution.Cab.PkgDB",
          "name": "PkgInfo",
          "package": "cab",
          "source": "src/Distribution-Cab-PkgDB.html#PkgInfo",
          "type": "type"
        },
        "index": {
          "hierarchy": "Distribution Cab PkgDB",
          "module": "Distribution.Cab.PkgDB",
          "name": "PkgInfo",
          "package": "cab",
          "partial": "Pkg Info",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/cab/docs/Distribution-Cab-PkgDB.html#t:PkgInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Distribution.Cab.PkgDB",
          "name": "fullNameOfPkgInfo",
          "package": "cab",
          "signature": "PkgInfo -\u003e String",
          "source": "src/Distribution-Cab-PkgDB.html#fullNameOfPkgInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Distribution Cab PkgDB",
          "module": "Distribution.Cab.PkgDB",
          "name": "fullNameOfPkgInfo",
          "normalized": "PkgInfo-\u003eString",
          "package": "cab",
          "partial": "Name Of Pkg Info",
          "signature": "PkgInfo-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cab/docs/Distribution-Cab-PkgDB.html#v:fullNameOfPkgInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eObtaining \u003ccode\u003e\u003ca\u003ePkgDB\u003c/a\u003e\u003c/code\u003e for global\n\u003c/p\u003e",
          "module": "Distribution.Cab.PkgDB",
          "name": "getGlobalPkgDB",
          "package": "cab",
          "signature": "IO PkgDB",
          "source": "src/Distribution-Cab-PkgDB.html#getGlobalPkgDB",
          "type": "function"
        },
        "index": {
          "description": "Obtaining PkgDB for global",
          "hierarchy": "Distribution Cab PkgDB",
          "module": "Distribution.Cab.PkgDB",
          "name": "getGlobalPkgDB",
          "package": "cab",
          "partial": "Global Pkg DB",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cab/docs/Distribution-Cab-PkgDB.html#v:getGlobalPkgDB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eObtaining \u003ccode\u003e\u003ca\u003ePkgDB\u003c/a\u003e\u003c/code\u003e for global and user\n\u003c/p\u003e\u003cpre\u003e getSandbox \u003e\u003e= getPkgDB\n\u003c/pre\u003e",
          "module": "Distribution.Cab.PkgDB",
          "name": "getPkgDB",
          "package": "cab",
          "signature": "Maybe FilePath -\u003e IO PkgDB",
          "source": "src/Distribution-Cab-PkgDB.html#getPkgDB",
          "type": "function"
        },
        "index": {
          "description": "Obtaining PkgDB for global and user getSandbox getPkgDB",
          "hierarchy": "Distribution Cab PkgDB",
          "module": "Distribution.Cab.PkgDB",
          "name": "getPkgDB",
          "normalized": "Maybe FilePath-\u003eIO PkgDB",
          "package": "cab",
          "partial": "Pkg DB",
          "signature": "Maybe FilePath-\u003eIO PkgDB",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cab/docs/Distribution-Cab-PkgDB.html#v:getPkgDB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eObtaining \u003ccode\u003e\u003ca\u003ePkgDB\u003c/a\u003e\u003c/code\u003e for user\n\u003c/p\u003e",
          "module": "Distribution.Cab.PkgDB",
          "name": "getUserPkgDB",
          "package": "cab",
          "signature": "Maybe FilePath -\u003e IO PkgDB",
          "source": "src/Distribution-Cab-PkgDB.html#getUserPkgDB",
          "type": "function"
        },
        "index": {
          "description": "Obtaining PkgDB for user",
          "hierarchy": "Distribution Cab PkgDB",
          "module": "Distribution.Cab.PkgDB",
          "name": "getUserPkgDB",
          "normalized": "Maybe FilePath-\u003eIO PkgDB",
          "package": "cab",
          "partial": "User Pkg DB",
          "signature": "Maybe FilePath-\u003eIO PkgDB",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cab/docs/Distribution-Cab-PkgDB.html#v:getUserPkgDB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e pkgdb \u003c- getGlobalPkgDB\n lookupByName \"base\" pkgdb\n\u003c/pre\u003e",
          "module": "Distribution.Cab.PkgDB",
          "name": "lookupByName",
          "package": "cab",
          "signature": "PkgName -\u003e PkgDB -\u003e [PkgInfo]",
          "source": "src/Distribution-Cab-PkgDB.html#lookupByName",
          "type": "function"
        },
        "index": {
          "description": "pkgdb getGlobalPkgDB lookupByName base pkgdb",
          "hierarchy": "Distribution Cab PkgDB",
          "module": "Distribution.Cab.PkgDB",
          "name": "lookupByName",
          "normalized": "PkgName-\u003ePkgDB-\u003e[PkgInfo]",
          "package": "cab",
          "partial": "By Name",
          "signature": "PkgName-\u003ePkgDB-\u003e[PkgInfo]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cab/docs/Distribution-Cab-PkgDB.html#v:lookupByName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e pkgdb \u003c- getGlobalPkgDB\n lookupByVersion \"base\" \"4.6.0.1\" pkgdb\n\u003c/pre\u003e",
          "module": "Distribution.Cab.PkgDB",
          "name": "lookupByVersion",
          "package": "cab",
          "signature": "PkgName -\u003e String -\u003e PkgDB -\u003e [PkgInfo]",
          "source": "src/Distribution-Cab-PkgDB.html#lookupByVersion",
          "type": "function"
        },
        "index": {
          "description": "pkgdb getGlobalPkgDB lookupByVersion base pkgdb",
          "hierarchy": "Distribution Cab PkgDB",
          "module": "Distribution.Cab.PkgDB",
          "name": "lookupByVersion",
          "normalized": "PkgName-\u003eString-\u003ePkgDB-\u003e[PkgInfo]",
          "package": "cab",
          "partial": "By Version",
          "signature": "PkgName-\u003eString-\u003ePkgDB-\u003e[PkgInfo]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cab/docs/Distribution-Cab-PkgDB.html#v:lookupByVersion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Distribution.Cab.PkgDB",
          "name": "nameOfPkgInfo",
          "package": "cab",
          "signature": "PkgInfo -\u003e PkgName",
          "source": "src/Distribution-Cab-PkgDB.html#nameOfPkgInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Distribution Cab PkgDB",
          "module": "Distribution.Cab.PkgDB",
          "name": "nameOfPkgInfo",
          "normalized": "PkgInfo-\u003ePkgName",
          "package": "cab",
          "partial": "Of Pkg Info",
          "signature": "PkgInfo-\u003ePkgName",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cab/docs/Distribution-Cab-PkgDB.html#v:nameOfPkgInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Distribution.Cab.PkgDB",
          "name": "pairNameOfPkgInfo",
          "package": "cab",
          "signature": "PkgInfo -\u003e (PkgName, String)",
          "source": "src/Distribution-Cab-PkgDB.html#pairNameOfPkgInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Distribution Cab PkgDB",
          "module": "Distribution.Cab.PkgDB",
          "name": "pairNameOfPkgInfo",
          "normalized": "PkgInfo-\u003e(PkgName,String)",
          "package": "cab",
          "partial": "Name Of Pkg Info",
          "signature": "PkgInfo-\u003e(PkgName,String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cab/docs/Distribution-Cab-PkgDB.html#v:pairNameOfPkgInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Distribution.Cab.PkgDB",
          "name": "toPkgInfos",
          "package": "cab",
          "signature": "PkgDB -\u003e [PkgInfo]",
          "source": "src/Distribution-Cab-PkgDB.html#toPkgInfos",
          "type": "function"
        },
        "index": {
          "hierarchy": "Distribution Cab PkgDB",
          "module": "Distribution.Cab.PkgDB",
          "name": "toPkgInfos",
          "normalized": "PkgDB-\u003e[PkgInfo]",
          "package": "cab",
          "partial": "Pkg Infos",
          "signature": "PkgDB-\u003e[PkgInfo]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cab/docs/Distribution-Cab-PkgDB.html#v:toPkgInfos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Distribution.Cab.PkgDB",
          "name": "topSortedPkgs",
          "package": "cab",
          "signature": "PkgInfo -\u003e PkgDB -\u003e [PkgInfo]",
          "source": "src/Distribution-Cab-PkgDB.html#topSortedPkgs",
          "type": "function"
        },
        "index": {
          "hierarchy": "Distribution Cab PkgDB",
          "module": "Distribution.Cab.PkgDB",
          "name": "topSortedPkgs",
          "normalized": "PkgInfo-\u003ePkgDB-\u003e[PkgInfo]",
          "package": "cab",
          "partial": "Sorted Pkgs",
          "signature": "PkgInfo-\u003ePkgDB-\u003e[PkgInfo]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cab/docs/Distribution-Cab-PkgDB.html#v:topSortedPkgs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Distribution.Cab.PkgDB",
          "name": "verOfPkgInfo",
          "package": "cab",
          "signature": "PkgInfo -\u003e Ver",
          "source": "src/Distribution-Cab-PkgDB.html#verOfPkgInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Distribution Cab PkgDB",
          "module": "Distribution.Cab.PkgDB",
          "name": "verOfPkgInfo",
          "normalized": "PkgInfo-\u003eVer",
          "package": "cab",
          "partial": "Of Pkg Info",
          "signature": "PkgInfo-\u003eVer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cab/docs/Distribution-Cab-PkgDB.html#v:verOfPkgInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Distribution.Cab.Printer",
          "name": "Printer",
          "package": "cab",
          "source": "src/Distribution-Cab-Printer.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Distribution Cab Printer",
          "module": "Distribution.Cab.Printer",
          "name": "Printer",
          "package": "cab",
          "partial": "Printer",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/cab/docs/Distribution-Cab-Printer.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Distribution.Cab.Printer",
          "name": "extraInfo",
          "package": "cab",
          "signature": "Bool -\u003e PkgInfo -\u003e IO ()",
          "source": "src/Distribution-Cab-Printer.html#extraInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Distribution Cab Printer",
          "module": "Distribution.Cab.Printer",
          "name": "extraInfo",
          "normalized": "Bool-\u003ePkgInfo-\u003eIO()",
          "package": "cab",
          "partial": "Info",
          "signature": "Bool-\u003ePkgInfo-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cab/docs/Distribution-Cab-Printer.html#v:extraInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Distribution.Cab.Printer",
          "name": "printDeps",
          "package": "cab",
          "signature": "Bool -\u003e Bool -\u003e PkgDB -\u003e Int -\u003e PkgInfo -\u003e IO ()",
          "source": "src/Distribution-Cab-Printer.html#printDeps",
          "type": "function"
        },
        "index": {
          "hierarchy": "Distribution Cab Printer",
          "module": "Distribution.Cab.Printer",
          "name": "printDeps",
          "normalized": "Bool-\u003eBool-\u003ePkgDB-\u003eInt-\u003ePkgInfo-\u003eIO()",
          "package": "cab",
          "partial": "Deps",
          "signature": "Bool-\u003eBool-\u003ePkgDB-\u003eInt-\u003ePkgInfo-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cab/docs/Distribution-Cab-Printer.html#v:printDeps"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Distribution.Cab.Printer",
          "name": "printRevDeps",
          "package": "cab",
          "signature": "Bool -\u003e Bool -\u003e PkgDB -\u003e Int -\u003e PkgInfo -\u003e IO ()",
          "source": "src/Distribution-Cab-Printer.html#printRevDeps",
          "type": "function"
        },
        "index": {
          "hierarchy": "Distribution Cab Printer",
          "module": "Distribution.Cab.Printer",
          "name": "printRevDeps",
          "normalized": "Bool-\u003eBool-\u003ePkgDB-\u003eInt-\u003ePkgInfo-\u003eIO()",
          "package": "cab",
          "partial": "Rev Deps",
          "signature": "Bool-\u003eBool-\u003ePkgDB-\u003eInt-\u003ePkgInfo-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cab/docs/Distribution-Cab-Printer.html#v:printRevDeps"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Distribution.Cab.Sandbox",
          "name": "Sandbox",
          "package": "cab",
          "source": "src/Distribution-Cab-Sandbox.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Distribution Cab Sandbox",
          "module": "Distribution.Cab.Sandbox",
          "name": "Sandbox",
          "package": "cab",
          "partial": "Sandbox",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/cab/docs/Distribution-Cab-Sandbox.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind a sandbox config file by tracing ancestor directories,\n   parse it and return the package db path\n\u003c/p\u003e",
          "module": "Distribution.Cab.Sandbox",
          "name": "getSandbox",
          "package": "cab",
          "signature": "IO (Maybe FilePath)",
          "source": "src/Distribution-Cab-Sandbox.html#getSandbox",
          "type": "function"
        },
        "index": {
          "description": "Find sandbox config file by tracing ancestor directories parse it and return the package db path",
          "hierarchy": "Distribution Cab Sandbox",
          "module": "Distribution.Cab.Sandbox",
          "name": "getSandbox",
          "package": "cab",
          "partial": "Sandbox",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cab/docs/Distribution-Cab-Sandbox.html#v:getSandbox"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate GHC options for package db according to GHC version.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003egetSandboxOpts Nothing\n\u003c/code\u003e\u003c/strong\u003e\"\"\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003egetSandboxOpts (Just \"/path/.cabal-sandbox/i386-osx-ghc-7.6.3-packages.conf.d\")\n\u003c/code\u003e\u003c/strong\u003e\"-package-db /path/.cabal-sandbox/i386-osx-ghc-7.6.3-packages.conf.d\"\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003egetSandboxOpts (Just \"/path/.cabal-sandbox/i386-osx-ghc-7.4.1-packages.conf.d\")\n\u003c/code\u003e\u003c/strong\u003e\"-package-conf /path/.cabal-sandbox/i386-osx-ghc-7.4.1-packages.conf.d\"\n\u003c/pre\u003e",
          "module": "Distribution.Cab.Sandbox",
          "name": "getSandboxOpts",
          "package": "cab",
          "signature": "Maybe FilePath -\u003e String",
          "source": "src/Distribution-Cab-Sandbox.html#getSandboxOpts",
          "type": "function"
        },
        "index": {
          "description": "Generate GHC options for package db according to GHC version getSandboxOpts Nothing getSandboxOpts Just path cabal-sandbox i386-osx-ghc-7.6.3-packages.conf.d package-db path cabal-sandbox i386-osx-ghc-7.6.3-packages.conf.d getSandboxOpts Just path cabal-sandbox i386-osx-ghc-7.4.1-packages.conf.d package-conf path cabal-sandbox i386-osx-ghc-7.4.1-packages.conf.d",
          "hierarchy": "Distribution Cab Sandbox",
          "module": "Distribution.Cab.Sandbox",
          "name": "getSandboxOpts",
          "normalized": "Maybe FilePath-\u003eString",
          "package": "cab",
          "partial": "Sandbox Opts",
          "signature": "Maybe FilePath-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cab/docs/Distribution-Cab-Sandbox.html#v:getSandboxOpts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Distribution.Cab.Sandbox",
          "name": "getSandboxOpts2",
          "package": "cab",
          "signature": "Maybe FilePath -\u003e String",
          "source": "src/Distribution-Cab-Sandbox.html#getSandboxOpts2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Distribution Cab Sandbox",
          "module": "Distribution.Cab.Sandbox",
          "name": "getSandboxOpts2",
          "normalized": "Maybe FilePath-\u003eString",
          "package": "cab",
          "partial": "Sandbox Opts",
          "signature": "Maybe FilePath-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cab/docs/Distribution-Cab-Sandbox.html#v:getSandboxOpts2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Distribution.Cab.VerDB",
          "name": "VerDB",
          "package": "cab",
          "source": "src/Distribution-Cab-VerDB.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Distribution Cab VerDB",
          "module": "Distribution.Cab.VerDB",
          "name": "VerDB",
          "package": "cab",
          "partial": "Ver DB",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/cab/docs/Distribution-Cab-VerDB.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Distribution.Cab.VerDB",
          "name": "HowToObtain",
          "package": "cab",
          "source": "src/Distribution-Cab-VerDB.html#HowToObtain",
          "type": "data"
        },
        "index": {
          "hierarchy": "Distribution Cab VerDB",
          "module": "Distribution.Cab.VerDB",
          "name": "HowToObtain",
          "package": "cab",
          "partial": "How To Obtain",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cab/docs/Distribution-Cab-VerDB.html#t:HowToObtain"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Distribution.Cab.VerDB",
          "name": "PkgName",
          "package": "cab",
          "source": "src/Distribution-Cab-VerDB.html#PkgName",
          "type": "type"
        },
        "index": {
          "hierarchy": "Distribution Cab VerDB",
          "module": "Distribution.Cab.VerDB",
          "name": "PkgName",
          "package": "cab",
          "partial": "Pkg Name",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/cab/docs/Distribution-Cab-VerDB.html#t:PkgName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Distribution.Cab.VerDB",
          "name": "VerDB",
          "package": "cab",
          "source": "src/Distribution-Cab-VerDB.html#VerDB",
          "type": "data"
        },
        "index": {
          "hierarchy": "Distribution Cab VerDB",
          "module": "Distribution.Cab.VerDB",
          "name": "VerDB",
          "package": "cab",
          "partial": "Ver DB",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cab/docs/Distribution-Cab-VerDB.html#t:VerDB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Distribution.Cab.VerDB",
          "name": "AllRegistered",
          "package": "cab",
          "signature": "AllRegistered",
          "source": "src/Distribution-Cab-VerDB.html#HowToObtain",
          "type": "function"
        },
        "index": {
          "hierarchy": "Distribution Cab VerDB",
          "module": "Distribution.Cab.VerDB",
          "name": "AllRegistered",
          "package": "cab",
          "partial": "All Registered",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cab/docs/Distribution-Cab-VerDB.html#v:AllRegistered"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Distribution.Cab.VerDB",
          "name": "InstalledOnly",
          "package": "cab",
          "signature": "InstalledOnly",
          "source": "src/Distribution-Cab-VerDB.html#HowToObtain",
          "type": "function"
        },
        "index": {
          "hierarchy": "Distribution Cab VerDB",
          "module": "Distribution.Cab.VerDB",
          "name": "InstalledOnly",
          "package": "cab",
          "partial": "Installed Only",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cab/docs/Distribution-Cab-VerDB.html#v:InstalledOnly"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Distribution.Cab.VerDB",
          "name": "getVerDB",
          "package": "cab",
          "signature": "HowToObtain -\u003e IO VerDB",
          "source": "src/Distribution-Cab-VerDB.html#getVerDB",
          "type": "function"
        },
        "index": {
          "hierarchy": "Distribution Cab VerDB",
          "module": "Distribution.Cab.VerDB",
          "name": "getVerDB",
          "normalized": "HowToObtain-\u003eIO VerDB",
          "package": "cab",
          "partial": "Ver DB",
          "signature": "HowToObtain-\u003eIO VerDB",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cab/docs/Distribution-Cab-VerDB.html#v:getVerDB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverting \u003ccode\u003e\u003ca\u003eVerDB\u003c/a\u003e\u003c/code\u003e to alist.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003edb \u003c- getVerDB InstalledOnly\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eelem \"base\" . map fst . toList $ db\n\u003c/code\u003e\u003c/strong\u003eTrue\n\u003c/pre\u003e",
          "module": "Distribution.Cab.VerDB",
          "name": "toList",
          "package": "cab",
          "signature": "VerDB -\u003e [(PkgName, Ver)]",
          "source": "src/Distribution-Cab-VerDB.html#toList",
          "type": "function"
        },
        "index": {
          "description": "Converting VerDB to alist db getVerDB InstalledOnly elem base map fst toList db True",
          "hierarchy": "Distribution Cab VerDB",
          "module": "Distribution.Cab.VerDB",
          "name": "toList",
          "normalized": "VerDB-\u003e[(PkgName,Ver)]",
          "package": "cab",
          "partial": "List",
          "signature": "VerDB-\u003e[(PkgName,Ver)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cab/docs/Distribution-Cab-VerDB.html#v:toList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverting \u003ccode\u003e\u003ca\u003eVerDB\u003c/a\u003e\u003c/code\u003e to \u003ccode\u003e\u003ca\u003eMap\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Distribution.Cab.VerDB",
          "name": "toMap",
          "package": "cab",
          "signature": "VerDB -\u003e Map PkgName Ver",
          "source": "src/Distribution-Cab-VerDB.html#toMap",
          "type": "function"
        },
        "index": {
          "description": "Converting VerDB to Map",
          "hierarchy": "Distribution Cab VerDB",
          "module": "Distribution.Cab.VerDB",
          "name": "toMap",
          "normalized": "VerDB-\u003eMap PkgName Ver",
          "package": "cab",
          "partial": "Map",
          "signature": "VerDB-\u003eMap PkgName Ver",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cab/docs/Distribution-Cab-VerDB.html#v:toMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Distribution.Cab.Version",
          "name": "Version",
          "package": "cab",
          "source": "src/Distribution-Cab-Version.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Distribution Cab Version",
          "module": "Distribution.Cab.Version",
          "name": "Version",
          "package": "cab",
          "partial": "Version",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/cab/docs/Distribution-Cab-Version.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePackage version.\n\u003c/p\u003e",
          "module": "Distribution.Cab.Version",
          "name": "Ver",
          "package": "cab",
          "source": "src/Distribution-Cab-Version.html#Ver",
          "type": "data"
        },
        "index": {
          "description": "Package version",
          "hierarchy": "Distribution Cab Version",
          "module": "Distribution.Cab.Version",
          "name": "Ver",
          "package": "cab",
          "partial": "Ver",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cab/docs/Distribution-Cab-Version.html#t:Ver"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreating \u003ccode\u003e\u003ca\u003eVer\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003etoVer [1,2,3]\n\u003c/code\u003e\u003c/strong\u003eVer [1,2,3]\n\u003c/pre\u003e",
          "module": "Distribution.Cab.Version",
          "name": "toVer",
          "package": "cab",
          "signature": "[Int] -\u003e Ver",
          "source": "src/Distribution-Cab-Version.html#toVer",
          "type": "function"
        },
        "index": {
          "description": "Creating Ver toVer Ver",
          "hierarchy": "Distribution Cab Version",
          "module": "Distribution.Cab.Version",
          "name": "toVer",
          "normalized": "[Int]-\u003eVer",
          "package": "cab",
          "partial": "Ver",
          "signature": "[Int]-\u003eVer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cab/docs/Distribution-Cab-Version.html#v:toVer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFrom \u003ccode\u003e\u003ca\u003eVersion\u003c/a\u003e\u003c/code\u003e to \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003everToString $ toVer [1,2,3]\n\u003c/code\u003e\u003c/strong\u003e\"1.2.3\"\n\u003c/pre\u003e",
          "module": "Distribution.Cab.Version",
          "name": "verToString",
          "package": "cab",
          "signature": "Ver -\u003e String",
          "source": "src/Distribution-Cab-Version.html#verToString",
          "type": "function"
        },
        "index": {
          "description": "From Version to String verToString toVer",
          "hierarchy": "Distribution Cab Version",
          "module": "Distribution.Cab.Version",
          "name": "verToString",
          "normalized": "Ver-\u003eString",
          "package": "cab",
          "partial": "To String",
          "signature": "Ver-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cab/docs/Distribution-Cab-Version.html#v:verToString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFrom \u003ccode\u003e\u003ca\u003eVersion\u003c/a\u003e\u003c/code\u003e in Cabal to \u003ccode\u003e\u003ca\u003eVer\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eversion $ Version [1,2,3] []\n\u003c/code\u003e\u003c/strong\u003eVer [1,2,3]\n\u003c/pre\u003e",
          "module": "Distribution.Cab.Version",
          "name": "version",
          "package": "cab",
          "signature": "Version -\u003e Ver",
          "source": "src/Distribution-Cab-Version.html#version",
          "type": "function"
        },
        "index": {
          "description": "From Version in Cabal to Ver version Version Ver",
          "hierarchy": "Distribution Cab Version",
          "module": "Distribution.Cab.Version",
          "name": "version",
          "normalized": "Version-\u003eVer",
          "package": "cab",
          "signature": "Version-\u003eVer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cab/docs/Distribution-Cab-Version.html#v:version"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFrom \u003ccode\u003e\u003ca\u003eVersion\u003c/a\u003e\u003c/code\u003e in Cabal to \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eversionToString $ Version [1,2,3] []\n\u003c/code\u003e\u003c/strong\u003e\"1.2.3\"\n\u003c/pre\u003e",
          "module": "Distribution.Cab.Version",
          "name": "versionToString",
          "package": "cab",
          "signature": "Version -\u003e String",
          "source": "src/Distribution-Cab-Version.html#versionToString",
          "type": "function"
        },
        "index": {
          "description": "From Version in Cabal to String versionToString Version",
          "hierarchy": "Distribution Cab Version",
          "module": "Distribution.Cab.Version",
          "name": "versionToString",
          "normalized": "Version-\u003eString",
          "package": "cab",
          "partial": "To String",
          "signature": "Version-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cab/docs/Distribution-Cab-Version.html#v:versionToString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Distribution.Cab",
          "name": "Cab",
          "package": "cab",
          "source": "src/Distribution-Cab.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Distribution Cab",
          "module": "Distribution.Cab",
          "name": "Cab",
          "package": "cab",
          "partial": "Cab",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/cab/docs/Distribution-Cab.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Distribution.Cab",
          "name": "FunctionCommand",
          "package": "cab",
          "source": "src/Distribution-Cab-Commands.html#FunctionCommand",
          "type": "type"
        },
        "index": {
          "hierarchy": "Distribution Cab",
          "module": "Distribution.Cab",
          "name": "FunctionCommand",
          "package": "cab",
          "partial": "Function Command",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/cab/docs/Distribution-Cab.html#t:FunctionCommand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Distribution.Cab",
          "name": "Option",
          "package": "cab",
          "source": "src/Distribution-Cab-Commands.html#Option",
          "type": "data"
        },
        "index": {
          "hierarchy": "Distribution Cab",
          "module": "Distribution.Cab",
          "name": "Option",
          "package": "cab",
          "partial": "Option",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cab/docs/Distribution-Cab.html#t:Option"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Distribution.Cab",
          "name": "OptAll",
          "package": "cab",
          "signature": "OptAll",
          "source": "src/Distribution-Cab-Commands.html#Option",
          "type": "function"
        },
        "index": {
          "hierarchy": "Distribution Cab",
          "module": "Distribution.Cab",
          "name": "OptAll",
          "package": "cab",
          "partial": "Opt All",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cab/docs/Distribution-Cab.html#v:OptAll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Distribution.Cab",
          "name": "OptBench",
          "package": "cab",
          "signature": "OptBench",
          "source": "src/Distribution-Cab-Commands.html#Option",
          "type": "function"
        },
        "index": {
          "hierarchy": "Distribution Cab",
          "module": "Distribution.Cab",
          "name": "OptBench",
          "package": "cab",
          "partial": "Opt Bench",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cab/docs/Distribution-Cab.html#v:OptBench"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Distribution.Cab",
          "name": "OptDepsOnly",
          "package": "cab",
          "signature": "OptDepsOnly",
          "source": "src/Distribution-Cab-Commands.html#Option",
          "type": "function"
        },
        "index": {
          "hierarchy": "Distribution Cab",
          "module": "Distribution.Cab",
          "name": "OptDepsOnly",
          "package": "cab",
          "partial": "Opt Deps Only",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cab/docs/Distribution-Cab.html#v:OptDepsOnly"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Distribution.Cab",
          "name": "OptExecProfile",
          "package": "cab",
          "signature": "OptExecProfile",
          "source": "src/Distribution-Cab-Commands.html#Option",
          "type": "function"
        },
        "index": {
          "hierarchy": "Distribution Cab",
          "module": "Distribution.Cab",
          "name": "OptExecProfile",
          "package": "cab",
          "partial": "Opt Exec Profile",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cab/docs/Distribution-Cab.html#v:OptExecProfile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Distribution.Cab",
          "name": "OptFlag",
          "package": "cab",
          "signature": "OptFlag String",
          "source": "src/Distribution-Cab-Commands.html#Option",
          "type": "function"
        },
        "index": {
          "hierarchy": "Distribution Cab",
          "module": "Distribution.Cab",
          "name": "OptFlag",
          "package": "cab",
          "partial": "Opt Flag",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cab/docs/Distribution-Cab.html#v:OptFlag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Distribution.Cab",
          "name": "OptHelp",
          "package": "cab",
          "signature": "OptHelp",
          "source": "src/Distribution-Cab-Commands.html#Option",
          "type": "function"
        },
        "index": {
          "hierarchy": "Distribution Cab",
          "module": "Distribution.Cab",
          "name": "OptHelp",
          "package": "cab",
          "partial": "Opt Help",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cab/docs/Distribution-Cab.html#v:OptHelp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Distribution.Cab",
          "name": "OptImport",
          "package": "cab",
          "signature": "OptImport String",
          "source": "src/Distribution-Cab-Commands.html#Option",
          "type": "function"
        },
        "index": {
          "hierarchy": "Distribution Cab",
          "module": "Distribution.Cab",
          "name": "OptImport",
          "package": "cab",
          "partial": "Opt Import",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cab/docs/Distribution-Cab.html#v:OptImport"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Distribution.Cab",
          "name": "OptInfo",
          "package": "cab",
          "signature": "OptInfo",
          "source": "src/Distribution-Cab-Commands.html#Option",
          "type": "function"
        },
        "index": {
          "hierarchy": "Distribution Cab",
          "module": "Distribution.Cab",
          "name": "OptInfo",
          "package": "cab",
          "partial": "Opt Info",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cab/docs/Distribution-Cab.html#v:OptInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Distribution.Cab",
          "name": "OptJobs",
          "package": "cab",
          "signature": "OptJobs String",
          "source": "src/Distribution-Cab-Commands.html#Option",
          "type": "function"
        },
        "index": {
          "hierarchy": "Distribution Cab",
          "module": "Distribution.Cab",
          "name": "OptJobs",
          "package": "cab",
          "partial": "Opt Jobs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cab/docs/Distribution-Cab.html#v:OptJobs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Distribution.Cab",
          "name": "OptLibProfile",
          "package": "cab",
          "signature": "OptLibProfile",
          "source": "src/Distribution-Cab-Commands.html#Option",
          "type": "function"
        },
        "index": {
          "hierarchy": "Distribution Cab",
          "module": "Distribution.Cab",
          "name": "OptLibProfile",
          "package": "cab",
          "partial": "Opt Lib Profile",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cab/docs/Distribution-Cab.html#v:OptLibProfile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Distribution.Cab",
          "name": "OptNoharm",
          "package": "cab",
          "signature": "OptNoharm",
          "source": "src/Distribution-Cab-Commands.html#Option",
          "type": "function"
        },
        "index": {
          "hierarchy": "Distribution Cab",
          "module": "Distribution.Cab",
          "name": "OptNoharm",
          "package": "cab",
          "partial": "Opt Noharm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cab/docs/Distribution-Cab.html#v:OptNoharm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Distribution.Cab",
          "name": "OptRecursive",
          "package": "cab",
          "signature": "OptRecursive",
          "source": "src/Distribution-Cab-Commands.html#Option",
          "type": "function"
        },
        "index": {
          "hierarchy": "Distribution Cab",
          "module": "Distribution.Cab",
          "name": "OptRecursive",
          "package": "cab",
          "partial": "Opt Recursive",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cab/docs/Distribution-Cab.html#v:OptRecursive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Distribution.Cab",
          "name": "OptStatic",
          "package": "cab",
          "signature": "OptStatic",
          "source": "src/Distribution-Cab-Commands.html#Option",
          "type": "function"
        },
        "index": {
          "hierarchy": "Distribution Cab",
          "module": "Distribution.Cab",
          "name": "OptStatic",
          "package": "cab",
          "partial": "Opt Static",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cab/docs/Distribution-Cab.html#v:OptStatic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Distribution.Cab",
          "name": "OptTest",
          "package": "cab",
          "signature": "OptTest",
          "source": "src/Distribution-Cab-Commands.html#Option",
          "type": "function"
        },
        "index": {
          "hierarchy": "Distribution Cab",
          "module": "Distribution.Cab",
          "name": "OptTest",
          "package": "cab",
          "partial": "Opt Test",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cab/docs/Distribution-Cab.html#v:OptTest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Distribution.Cab",
          "name": "add",
          "package": "cab",
          "signature": "FunctionCommand",
          "source": "src/Distribution-Cab-Commands.html#add",
          "type": "function"
        },
        "index": {
          "hierarchy": "Distribution Cab",
          "module": "Distribution.Cab",
          "name": "add",
          "package": "cab",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cab/docs/Distribution-Cab.html#v:add"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Distribution.Cab",
          "name": "check",
          "package": "cab",
          "signature": "FunctionCommand",
          "source": "src/Distribution-Cab-Commands.html#check",
          "type": "function"
        },
        "index": {
          "hierarchy": "Distribution Cab",
          "module": "Distribution.Cab",
          "name": "check",
          "package": "cab",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cab/docs/Distribution-Cab.html#v:check"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Distribution.Cab",
          "name": "deps",
          "package": "cab",
          "signature": "FunctionCommand",
          "source": "src/Distribution-Cab-Commands.html#deps",
          "type": "function"
        },
        "index": {
          "hierarchy": "Distribution Cab",
          "module": "Distribution.Cab",
          "name": "deps",
          "package": "cab",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cab/docs/Distribution-Cab.html#v:deps"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Distribution.Cab",
          "name": "genpaths",
          "package": "cab",
          "signature": "FunctionCommand",
          "source": "src/Distribution-Cab-Commands.html#genpaths",
          "type": "function"
        },
        "index": {
          "hierarchy": "Distribution Cab",
          "module": "Distribution.Cab",
          "name": "genpaths",
          "package": "cab",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cab/docs/Distribution-Cab.html#v:genpaths"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Distribution.Cab",
          "name": "ghci",
          "package": "cab",
          "signature": "FunctionCommand",
          "source": "src/Distribution-Cab-Commands.html#ghci",
          "type": "function"
        },
        "index": {
          "hierarchy": "Distribution Cab",
          "module": "Distribution.Cab",
          "name": "ghci",
          "package": "cab",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cab/docs/Distribution-Cab.html#v:ghci"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Distribution.Cab",
          "name": "initSandbox",
          "package": "cab",
          "signature": "FunctionCommand",
          "source": "src/Distribution-Cab-Commands.html#initSandbox",
          "type": "function"
        },
        "index": {
          "hierarchy": "Distribution Cab",
          "module": "Distribution.Cab",
          "name": "initSandbox",
          "package": "cab",
          "partial": "Sandbox",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cab/docs/Distribution-Cab.html#v:initSandbox"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Distribution.Cab",
          "name": "installed",
          "package": "cab",
          "signature": "FunctionCommand",
          "source": "src/Distribution-Cab-Commands.html#installed",
          "type": "function"
        },
        "index": {
          "hierarchy": "Distribution Cab",
          "module": "Distribution.Cab",
          "name": "installed",
          "package": "cab",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cab/docs/Distribution-Cab.html#v:installed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Distribution.Cab",
          "name": "outdated",
          "package": "cab",
          "signature": "FunctionCommand",
          "source": "src/Distribution-Cab-Commands.html#outdated",
          "type": "function"
        },
        "index": {
          "hierarchy": "Distribution Cab",
          "module": "Distribution.Cab",
          "name": "outdated",
          "package": "cab",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cab/docs/Distribution-Cab.html#v:outdated"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Distribution.Cab",
          "name": "revdeps",
          "package": "cab",
          "signature": "FunctionCommand",
          "source": "src/Distribution-Cab-Commands.html#revdeps",
          "type": "function"
        },
        "index": {
          "hierarchy": "Distribution Cab",
          "module": "Distribution.Cab",
          "name": "revdeps",
          "package": "cab",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cab/docs/Distribution-Cab.html#v:revdeps"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Distribution.Cab",
          "name": "search",
          "package": "cab",
          "signature": "FunctionCommand",
          "source": "src/Distribution-Cab-Commands.html#search",
          "type": "function"
        },
        "index": {
          "hierarchy": "Distribution Cab",
          "module": "Distribution.Cab",
          "name": "search",
          "package": "cab",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cab/docs/Distribution-Cab.html#v:search"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Distribution.Cab",
          "name": "uninstall",
          "package": "cab",
          "signature": "FunctionCommand",
          "source": "src/Distribution-Cab-Commands.html#uninstall",
          "type": "function"
        },
        "index": {
          "hierarchy": "Distribution Cab",
          "module": "Distribution.Cab",
          "name": "uninstall",
          "package": "cab",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cab/docs/Distribution-Cab.html#v:uninstall"
      }
    }
  ]
]