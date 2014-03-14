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
        "word": "archlinux-web"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSupport for querying the AUR database.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Distribution.ArchLinux.AUR",
          "name": "AUR",
          "package": "archlinux-web",
          "source": "src/Distribution-ArchLinux-AUR.html",
          "type": "module"
        },
        "index": {
          "description": "Support for querying the AUR database",
          "hierarchy": "Distribution ArchLinux AUR",
          "module": "Distribution.ArchLinux.AUR",
          "name": "AUR",
          "package": "archlinux-web",
          "partial": "AUR",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/archlinux-web/docs/Distribution-ArchLinux-AUR.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType for AUR RPC responses.\n\u003c/p\u003e",
          "module": "Distribution.ArchLinux.AUR",
          "name": "AURInfo",
          "package": "archlinux-web",
          "source": "src/Distribution-ArchLinux-AUR.html#AURInfo",
          "type": "data"
        },
        "index": {
          "description": "Type for AUR RPC responses",
          "hierarchy": "Distribution ArchLinux AUR",
          "module": "Distribution.ArchLinux.AUR",
          "name": "AURInfo",
          "package": "archlinux-web",
          "partial": "AURInfo",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/archlinux-web/docs/Distribution-ArchLinux-AUR.html#t:AURInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Distribution.ArchLinux.AUR",
          "name": "AURInfo",
          "package": "archlinux-web",
          "signature": "AURInfo",
          "source": "src/Distribution-ArchLinux-AUR.html#AURInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Distribution ArchLinux AUR",
          "module": "Distribution.ArchLinux.AUR",
          "name": "AURInfo",
          "package": "archlinux-web",
          "partial": "AURInfo",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/archlinux-web/docs/Distribution-ArchLinux-AUR.html#v:AURInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eQuery AUR for information on a package \n\u003c/p\u003e\u003cpre\u003e $ info \"xmonad\"\n\n Right (AURInfo { packageID       = 10593\n              , packageName     = \"xmonad\"\n              , packageVersion  = Right (Version {versionBranch = [0,8,1] , versionTags = []},\"1.2\")i\n              , packageCategory = 17\n              , packageDesc     = \"A lightweight X11 tiled window manager written in Haskell\"\n              , packageLocation = 3\n              , packageURL      = \"http://xmonad.org/\"\n              , packagePath     = \"/packages/xmonad/xmonad.tar.gz\"\n              , packageLicense = \"custom:BSD3\"\n              , packageVotes = 260\n              , packageOutOfDate = False })\n\u003c/pre\u003e",
          "module": "Distribution.ArchLinux.AUR",
          "name": "info",
          "package": "archlinux-web",
          "signature": "String -\u003e IO (Either String AURInfo)",
          "source": "src/Distribution-ArchLinux-AUR.html#info",
          "type": "function"
        },
        "index": {
          "description": "Query AUR for information on package info xmonad Right AURInfo packageID packageName xmonad packageVersion Right Version versionBranch versionTags packageCategory packageDesc lightweight X11 tiled window manager written in Haskell packageLocation packageURL http xmonad.org packagePath packages xmonad xmonad.tar.gz packageLicense custom BSD3 packageVotes packageOutOfDate False",
          "hierarchy": "Distribution ArchLinux AUR",
          "module": "Distribution.ArchLinux.AUR",
          "name": "info",
          "normalized": "String-\u003eIO(Either String AURInfo)",
          "package": "archlinux-web",
          "signature": "String-\u003eIO(Either String AURInfo)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/archlinux-web/docs/Distribution-ArchLinux-AUR.html#v:info"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSearch AUR for packages owned by maintainer. Returns a list of info results.\n\u003c/p\u003e",
          "module": "Distribution.ArchLinux.AUR",
          "name": "maintainer",
          "package": "archlinux-web",
          "signature": "String -\u003e IO [AURInfo]",
          "source": "src/Distribution-ArchLinux-AUR.html#maintainer",
          "type": "function"
        },
        "index": {
          "description": "Search AUR for packages owned by maintainer Returns list of info results",
          "hierarchy": "Distribution ArchLinux AUR",
          "module": "Distribution.ArchLinux.AUR",
          "name": "maintainer",
          "normalized": "String-\u003eIO[AURInfo]",
          "package": "archlinux-web",
          "signature": "String-\u003eIO[AURInfo]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/archlinux-web/docs/Distribution-ArchLinux-AUR.html#v:maintainer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the parsed PKGBUILD\n pkgbuild :: String -\u003e IO (Either String [String]) -- (Either String PkgBuild)\n\u003c/p\u003e",
          "module": "Distribution.ArchLinux.AUR",
          "name": "package",
          "package": "archlinux-web",
          "signature": "String -\u003e IO (Either String AURInfo, Either String AnnotatedPkgBuild)",
          "source": "src/Distribution-ArchLinux-AUR.html#package",
          "type": "function"
        },
        "index": {
          "description": "Return the parsed PKGBUILD pkgbuild String IO Either String String Either String PkgBuild",
          "hierarchy": "Distribution ArchLinux AUR",
          "module": "Distribution.ArchLinux.AUR",
          "name": "package",
          "normalized": "String-\u003eIO(Either String AURInfo,Either String AnnotatedPkgBuild)",
          "package": "archlinux-web",
          "signature": "String-\u003eIO(Either String AURInfo,Either String AnnotatedPkgBuild)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/archlinux-web/docs/Distribution-ArchLinux-AUR.html#v:package"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003enumeric category of the package (e.g. 17 == System)\n\u003c/p\u003e",
          "module": "Distribution.ArchLinux.AUR",
          "name": "packageCategory",
          "package": "archlinux-web",
          "signature": "Integer",
          "source": "src/Distribution-ArchLinux-AUR.html#AURInfo",
          "type": "function"
        },
        "index": {
          "description": "numeric category of the package e.g System",
          "hierarchy": "Distribution ArchLinux AUR",
          "module": "Distribution.ArchLinux.AUR",
          "name": "packageCategory",
          "package": "archlinux-web",
          "partial": "Category",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/archlinux-web/docs/Distribution-ArchLinux-AUR.html#v:packageCategory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003epackage synopsis\n\u003c/p\u003e",
          "module": "Distribution.ArchLinux.AUR",
          "name": "packageDesc",
          "package": "archlinux-web",
          "signature": "String",
          "source": "src/Distribution-ArchLinux-AUR.html#AURInfo",
          "type": "function"
        },
        "index": {
          "description": "package synopsis",
          "hierarchy": "Distribution ArchLinux AUR",
          "module": "Distribution.ArchLinux.AUR",
          "name": "packageDesc",
          "package": "archlinux-web",
          "partial": "Desc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/archlinux-web/docs/Distribution-ArchLinux-AUR.html#v:packageDesc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eunique ID of the package on AUR\n\u003c/p\u003e",
          "module": "Distribution.ArchLinux.AUR",
          "name": "packageID",
          "package": "archlinux-web",
          "signature": "Integer",
          "source": "src/Distribution-ArchLinux-AUR.html#AURInfo",
          "type": "function"
        },
        "index": {
          "description": "unique ID of the package on AUR",
          "hierarchy": "Distribution ArchLinux AUR",
          "module": "Distribution.ArchLinux.AUR",
          "name": "packageID",
          "package": "archlinux-web",
          "partial": "ID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/archlinux-web/docs/Distribution-ArchLinux-AUR.html#v:packageID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003etype of license\n\u003c/p\u003e",
          "module": "Distribution.ArchLinux.AUR",
          "name": "packageLicense",
          "package": "archlinux-web",
          "signature": "String",
          "source": "src/Distribution-ArchLinux-AUR.html#AURInfo",
          "type": "function"
        },
        "index": {
          "description": "type of license",
          "hierarchy": "Distribution ArchLinux AUR",
          "module": "Distribution.ArchLinux.AUR",
          "name": "packageLicense",
          "package": "archlinux-web",
          "partial": "License",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/archlinux-web/docs/Distribution-ArchLinux-AUR.html#v:packageLicense"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ewhich repository is it stored in (community, AUR etc)\n\u003c/p\u003e",
          "module": "Distribution.ArchLinux.AUR",
          "name": "packageLocation",
          "package": "archlinux-web",
          "signature": "Integer",
          "source": "src/Distribution-ArchLinux-AUR.html#AURInfo",
          "type": "function"
        },
        "index": {
          "description": "which repository is it stored in community AUR etc",
          "hierarchy": "Distribution ArchLinux AUR",
          "module": "Distribution.ArchLinux.AUR",
          "name": "packageLocation",
          "package": "archlinux-web",
          "partial": "Location",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/archlinux-web/docs/Distribution-ArchLinux-AUR.html#v:packageLocation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003estring name of package\n\u003c/p\u003e",
          "module": "Distribution.ArchLinux.AUR",
          "name": "packageName",
          "package": "archlinux-web",
          "signature": "String",
          "source": "src/Distribution-ArchLinux-AUR.html#AURInfo",
          "type": "function"
        },
        "index": {
          "description": "string name of package",
          "hierarchy": "Distribution ArchLinux AUR",
          "module": "Distribution.ArchLinux.AUR",
          "name": "packageName",
          "package": "archlinux-web",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/archlinux-web/docs/Distribution-ArchLinux-AUR.html#v:packageName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eis the package flagged as out of date\n\u003c/p\u003e",
          "module": "Distribution.ArchLinux.AUR",
          "name": "packageOutOfDate",
          "package": "archlinux-web",
          "signature": "Bool",
          "source": "src/Distribution-ArchLinux-AUR.html#AURInfo",
          "type": "function"
        },
        "index": {
          "description": "is the package flagged as out of date",
          "hierarchy": "Distribution ArchLinux AUR",
          "module": "Distribution.ArchLinux.AUR",
          "name": "packageOutOfDate",
          "package": "archlinux-web",
          "partial": "Out Of Date",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/archlinux-web/docs/Distribution-ArchLinux-AUR.html#v:packageOutOfDate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eurl path to package source.\n\u003c/p\u003e",
          "module": "Distribution.ArchLinux.AUR",
          "name": "packagePath",
          "package": "archlinux-web",
          "signature": "FilePath",
          "source": "src/Distribution-ArchLinux-AUR.html#AURInfo",
          "type": "function"
        },
        "index": {
          "description": "url path to package source",
          "hierarchy": "Distribution ArchLinux AUR",
          "module": "Distribution.ArchLinux.AUR",
          "name": "packagePath",
          "package": "archlinux-web",
          "partial": "Path",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/archlinux-web/docs/Distribution-ArchLinux-AUR.html#v:packagePath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eurl (sanity check: should be hackage url mostly)\n\u003c/p\u003e",
          "module": "Distribution.ArchLinux.AUR",
          "name": "packageURL",
          "package": "archlinux-web",
          "signature": "String",
          "source": "src/Distribution-ArchLinux-AUR.html#AURInfo",
          "type": "function"
        },
        "index": {
          "description": "url sanity check should be hackage url mostly",
          "hierarchy": "Distribution ArchLinux AUR",
          "module": "Distribution.ArchLinux.AUR",
          "name": "packageURL",
          "package": "archlinux-web",
          "partial": "URL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/archlinux-web/docs/Distribution-ArchLinux-AUR.html#v:packageURL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eurl of AUR package\n\u003c/p\u003e",
          "module": "Distribution.ArchLinux.AUR",
          "name": "packageURLinAUR",
          "package": "archlinux-web",
          "signature": "String",
          "source": "src/Distribution-ArchLinux-AUR.html#AURInfo",
          "type": "function"
        },
        "index": {
          "description": "url of AUR package",
          "hierarchy": "Distribution ArchLinux AUR",
          "module": "Distribution.ArchLinux.AUR",
          "name": "packageURLinAUR",
          "package": "archlinux-web",
          "partial": "URLin AUR",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/archlinux-web/docs/Distribution-ArchLinux-AUR.html#v:packageURLinAUR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eeither the AUR version (version,rev)  or a string\n\u003c/p\u003e",
          "module": "Distribution.ArchLinux.AUR",
          "name": "packageVersion",
          "package": "archlinux-web",
          "signature": "Either String (Version, String)",
          "source": "src/Distribution-ArchLinux-AUR.html#AURInfo",
          "type": "function"
        },
        "index": {
          "description": "either the AUR version version rev or string",
          "hierarchy": "Distribution ArchLinux AUR",
          "module": "Distribution.ArchLinux.AUR",
          "name": "packageVersion",
          "normalized": "Either String(Version,String)",
          "package": "archlinux-web",
          "partial": "Version",
          "signature": "Either String(Version,String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/archlinux-web/docs/Distribution-ArchLinux-AUR.html#v:packageVersion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003evotes on package\n\u003c/p\u003e",
          "module": "Distribution.ArchLinux.AUR",
          "name": "packageVotes",
          "package": "archlinux-web",
          "signature": "Integer",
          "source": "src/Distribution-ArchLinux-AUR.html#AURInfo",
          "type": "function"
        },
        "index": {
          "description": "votes on package",
          "hierarchy": "Distribution ArchLinux AUR",
          "module": "Distribution.ArchLinux.AUR",
          "name": "packageVotes",
          "package": "archlinux-web",
          "partial": "Votes",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/archlinux-web/docs/Distribution-ArchLinux-AUR.html#v:packageVotes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSearch AUR for packages matching pattern. Returns a list of info results.\n\u003c/p\u003e",
          "module": "Distribution.ArchLinux.AUR",
          "name": "search",
          "package": "archlinux-web",
          "signature": "String -\u003e IO [AURInfo]",
          "source": "src/Distribution-ArchLinux-AUR.html#search",
          "type": "function"
        },
        "index": {
          "description": "Search AUR for packages matching pattern Returns list of info results",
          "hierarchy": "Distribution ArchLinux AUR",
          "module": "Distribution.ArchLinux.AUR",
          "name": "search",
          "normalized": "String-\u003eIO[AURInfo]",
          "package": "archlinux-web",
          "signature": "String-\u003eIO[AURInfo]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/archlinux-web/docs/Distribution-ArchLinux-AUR.html#v:search"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eConstruct reports about a set of packages in AUR\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Distribution.ArchLinux.Report",
          "name": "Report",
          "package": "archlinux-web",
          "source": "src/Distribution-ArchLinux-Report.html",
          "type": "module"
        },
        "index": {
          "description": "Construct reports about set of packages in AUR",
          "hierarchy": "Distribution ArchLinux Report",
          "module": "Distribution.ArchLinux.Report",
          "name": "Report",
          "package": "archlinux-web",
          "partial": "Report",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/archlinux-web/docs/Distribution-ArchLinux-Report.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLoad a table of packag names associated with their latest versions\n\u003c/p\u003e",
          "module": "Distribution.ArchLinux.Report",
          "name": "loadPackageIndex",
          "package": "archlinux-web",
          "signature": "IO (Map String Version)",
          "source": "src/Distribution-ArchLinux-Report.html#loadPackageIndex",
          "type": "function"
        },
        "index": {
          "description": "Load table of packag names associated with their latest versions",
          "hierarchy": "Distribution ArchLinux Report",
          "module": "Distribution.ArchLinux.Report",
          "name": "loadPackageIndex",
          "package": "archlinux-web",
          "partial": "Package Index",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/archlinux-web/docs/Distribution-ArchLinux-Report.html#v:loadPackageIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTake as input a list of package names, return an html page\n with interesting facts about the state of the packages.\n\u003c/p\u003e",
          "module": "Distribution.ArchLinux.Report",
          "name": "report",
          "package": "archlinux-web",
          "signature": "[String] -\u003e IO String",
          "source": "src/Distribution-ArchLinux-Report.html#report",
          "type": "function"
        },
        "index": {
          "description": "Take as input list of package names return an html page with interesting facts about the state of the packages",
          "hierarchy": "Distribution ArchLinux Report",
          "module": "Distribution.ArchLinux.Report",
          "name": "report",
          "normalized": "[String]-\u003eIO String",
          "package": "archlinux-web",
          "signature": "[String]-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/archlinux-web/docs/Distribution-ArchLinux-Report.html#v:report"
      }
    }
  ]
]