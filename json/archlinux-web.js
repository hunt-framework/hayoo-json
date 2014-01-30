[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/archlinux-web/docs/Distribution-ArchLinux-AUR.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSupport for querying the AUR database.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Distribution.ArchLinux.AUR",
        "fct-package": "archlinux-web",
        "fct-signature": "module",
        "fct-source": "src/Distribution-ArchLinux-AUR.html",
        "fct-type": "module",
        "title": "AUR"
      },
      "index": {
        "description": "Support for querying the AUR database",
        "hierarchy": "Distribution ArchLinux AUR",
        "module": "Distribution.ArchLinux.AUR",
        "name": "AUR",
        "normalized": "",
        "package": "archlinux-web",
        "partial": "AUR",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/archlinux-web/docs/Distribution-ArchLinux-AUR.html#t:AURInfo",
      "description": {
        "fct-descr": "\u003cp\u003eType for AUR RPC responses.\n\u003c/p\u003e",
        "fct-module": "Distribution.ArchLinux.AUR",
        "fct-package": "archlinux-web",
        "fct-signature": "data",
        "fct-source": "src/Distribution-ArchLinux-AUR.html#AURInfo",
        "fct-type": "data",
        "title": "AURInfo"
      },
      "index": {
        "description": "Type for AUR RPC responses",
        "hierarchy": "Distribution ArchLinux AUR",
        "module": "Distribution.ArchLinux.AUR",
        "name": "AURInfo",
        "normalized": "",
        "package": "archlinux-web",
        "partial": "AURInfo",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/archlinux-web/docs/Distribution-ArchLinux-AUR.html#v:AURInfo",
      "description": {
        "fct-module": "Distribution.ArchLinux.AUR",
        "fct-package": "archlinux-web",
        "fct-signature": "AURInfo",
        "fct-source": "src/Distribution-ArchLinux-AUR.html#AURInfo",
        "fct-type": "function",
        "title": "AURInfo"
      },
      "index": {
        "description": "",
        "hierarchy": "Distribution ArchLinux AUR",
        "module": "Distribution.ArchLinux.AUR",
        "name": "AURInfo",
        "normalized": "",
        "package": "archlinux-web",
        "partial": "AURInfo",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/archlinux-web/docs/Distribution-ArchLinux-AUR.html#v:info",
      "description": {
        "fct-descr": "\u003cp\u003eQuery AUR for information on a package \n\u003c/p\u003e\u003cpre\u003e $ info \"xmonad\"\n\n Right (AURInfo { packageID       = 10593\n              , packageName     = \"xmonad\"\n              , packageVersion  = Right (Version {versionBranch = [0,8,1] , versionTags = []},\"1.2\")i\n              , packageCategory = 17\n              , packageDesc     = \"A lightweight X11 tiled window manager written in Haskell\"\n              , packageLocation = 3\n              , packageURL      = \"http://xmonad.org/\"\n              , packagePath     = \"/packages/xmonad/xmonad.tar.gz\"\n              , packageLicense = \"custom:BSD3\"\n              , packageVotes = 260\n              , packageOutOfDate = False })\n\u003c/pre\u003e",
        "fct-module": "Distribution.ArchLinux.AUR",
        "fct-package": "archlinux-web",
        "fct-signature": "String -\u003e IO (Either String AURInfo)",
        "fct-source": "src/Distribution-ArchLinux-AUR.html#info",
        "fct-type": "function",
        "title": "info"
      },
      "index": {
        "description": "Query AUR for information on package info xmonad Right AURInfo packageID packageName xmonad packageVersion Right Version versionBranch versionTags packageCategory packageDesc lightweight X11 tiled window manager written in Haskell packageLocation packageURL http xmonad.org packagePath packages xmonad xmonad.tar.gz packageLicense custom BSD3 packageVotes packageOutOfDate False",
        "hierarchy": "Distribution ArchLinux AUR",
        "module": "Distribution.ArchLinux.AUR",
        "name": "info",
        "normalized": "String-\u003eIO(Either String AURInfo)",
        "package": "archlinux-web",
        "partial": "",
        "signature": "String-\u003eIO(Either String AURInfo)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/archlinux-web/docs/Distribution-ArchLinux-AUR.html#v:maintainer",
      "description": {
        "fct-descr": "\u003cp\u003eSearch AUR for packages owned by maintainer. Returns a list of info results.\n\u003c/p\u003e",
        "fct-module": "Distribution.ArchLinux.AUR",
        "fct-package": "archlinux-web",
        "fct-signature": "String -\u003e IO [AURInfo]",
        "fct-source": "src/Distribution-ArchLinux-AUR.html#maintainer",
        "fct-type": "function",
        "title": "maintainer"
      },
      "index": {
        "description": "Search AUR for packages owned by maintainer Returns list of info results",
        "hierarchy": "Distribution ArchLinux AUR",
        "module": "Distribution.ArchLinux.AUR",
        "name": "maintainer",
        "normalized": "String-\u003eIO[AURInfo]",
        "package": "archlinux-web",
        "partial": "",
        "signature": "String-\u003eIO[AURInfo]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/archlinux-web/docs/Distribution-ArchLinux-AUR.html#v:package",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the parsed PKGBUILD\n pkgbuild :: String -\u003e IO (Either String [String]) -- (Either String PkgBuild)\n\u003c/p\u003e",
        "fct-module": "Distribution.ArchLinux.AUR",
        "fct-package": "archlinux-web",
        "fct-signature": "String -\u003e IO (Either String AURInfo, Either String AnnotatedPkgBuild)",
        "fct-source": "src/Distribution-ArchLinux-AUR.html#package",
        "fct-type": "function",
        "title": "package"
      },
      "index": {
        "description": "Return the parsed PKGBUILD pkgbuild String IO Either String String Either String PkgBuild",
        "hierarchy": "Distribution ArchLinux AUR",
        "module": "Distribution.ArchLinux.AUR",
        "name": "package",
        "normalized": "String-\u003eIO(Either String AURInfo,Either String AnnotatedPkgBuild)",
        "package": "archlinux-web",
        "partial": "",
        "signature": "String-\u003eIO(Either String AURInfo,Either String AnnotatedPkgBuild)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/archlinux-web/docs/Distribution-ArchLinux-AUR.html#v:packageCategory",
      "description": {
        "fct-descr": "\u003cp\u003enumeric category of the package (e.g. 17 == System)\n\u003c/p\u003e",
        "fct-module": "Distribution.ArchLinux.AUR",
        "fct-package": "archlinux-web",
        "fct-signature": "Integer",
        "fct-source": "src/Distribution-ArchLinux-AUR.html#AURInfo",
        "fct-type": "function",
        "title": "packageCategory"
      },
      "index": {
        "description": "numeric category of the package e.g System",
        "hierarchy": "Distribution ArchLinux AUR",
        "module": "Distribution.ArchLinux.AUR",
        "name": "packageCategory",
        "normalized": "",
        "package": "archlinux-web",
        "partial": "Category",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/archlinux-web/docs/Distribution-ArchLinux-AUR.html#v:packageDesc",
      "description": {
        "fct-descr": "\u003cp\u003epackage synopsis\n\u003c/p\u003e",
        "fct-module": "Distribution.ArchLinux.AUR",
        "fct-package": "archlinux-web",
        "fct-signature": "String",
        "fct-source": "src/Distribution-ArchLinux-AUR.html#AURInfo",
        "fct-type": "function",
        "title": "packageDesc"
      },
      "index": {
        "description": "package synopsis",
        "hierarchy": "Distribution ArchLinux AUR",
        "module": "Distribution.ArchLinux.AUR",
        "name": "packageDesc",
        "normalized": "",
        "package": "archlinux-web",
        "partial": "Desc",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/archlinux-web/docs/Distribution-ArchLinux-AUR.html#v:packageID",
      "description": {
        "fct-descr": "\u003cp\u003eunique ID of the package on AUR\n\u003c/p\u003e",
        "fct-module": "Distribution.ArchLinux.AUR",
        "fct-package": "archlinux-web",
        "fct-signature": "Integer",
        "fct-source": "src/Distribution-ArchLinux-AUR.html#AURInfo",
        "fct-type": "function",
        "title": "packageID"
      },
      "index": {
        "description": "unique ID of the package on AUR",
        "hierarchy": "Distribution ArchLinux AUR",
        "module": "Distribution.ArchLinux.AUR",
        "name": "packageID",
        "normalized": "",
        "package": "archlinux-web",
        "partial": "ID",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/archlinux-web/docs/Distribution-ArchLinux-AUR.html#v:packageLicense",
      "description": {
        "fct-descr": "\u003cp\u003etype of license\n\u003c/p\u003e",
        "fct-module": "Distribution.ArchLinux.AUR",
        "fct-package": "archlinux-web",
        "fct-signature": "String",
        "fct-source": "src/Distribution-ArchLinux-AUR.html#AURInfo",
        "fct-type": "function",
        "title": "packageLicense"
      },
      "index": {
        "description": "type of license",
        "hierarchy": "Distribution ArchLinux AUR",
        "module": "Distribution.ArchLinux.AUR",
        "name": "packageLicense",
        "normalized": "",
        "package": "archlinux-web",
        "partial": "License",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/archlinux-web/docs/Distribution-ArchLinux-AUR.html#v:packageLocation",
      "description": {
        "fct-descr": "\u003cp\u003ewhich repository is it stored in (community, AUR etc)\n\u003c/p\u003e",
        "fct-module": "Distribution.ArchLinux.AUR",
        "fct-package": "archlinux-web",
        "fct-signature": "Integer",
        "fct-source": "src/Distribution-ArchLinux-AUR.html#AURInfo",
        "fct-type": "function",
        "title": "packageLocation"
      },
      "index": {
        "description": "which repository is it stored in community AUR etc",
        "hierarchy": "Distribution ArchLinux AUR",
        "module": "Distribution.ArchLinux.AUR",
        "name": "packageLocation",
        "normalized": "",
        "package": "archlinux-web",
        "partial": "Location",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/archlinux-web/docs/Distribution-ArchLinux-AUR.html#v:packageName",
      "description": {
        "fct-descr": "\u003cp\u003estring name of package\n\u003c/p\u003e",
        "fct-module": "Distribution.ArchLinux.AUR",
        "fct-package": "archlinux-web",
        "fct-signature": "String",
        "fct-source": "src/Distribution-ArchLinux-AUR.html#AURInfo",
        "fct-type": "function",
        "title": "packageName"
      },
      "index": {
        "description": "string name of package",
        "hierarchy": "Distribution ArchLinux AUR",
        "module": "Distribution.ArchLinux.AUR",
        "name": "packageName",
        "normalized": "",
        "package": "archlinux-web",
        "partial": "Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/archlinux-web/docs/Distribution-ArchLinux-AUR.html#v:packageOutOfDate",
      "description": {
        "fct-descr": "\u003cp\u003eis the package flagged as out of date\n\u003c/p\u003e",
        "fct-module": "Distribution.ArchLinux.AUR",
        "fct-package": "archlinux-web",
        "fct-signature": "Bool",
        "fct-source": "src/Distribution-ArchLinux-AUR.html#AURInfo",
        "fct-type": "function",
        "title": "packageOutOfDate"
      },
      "index": {
        "description": "is the package flagged as out of date",
        "hierarchy": "Distribution ArchLinux AUR",
        "module": "Distribution.ArchLinux.AUR",
        "name": "packageOutOfDate",
        "normalized": "",
        "package": "archlinux-web",
        "partial": "Out Of Date",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/archlinux-web/docs/Distribution-ArchLinux-AUR.html#v:packagePath",
      "description": {
        "fct-descr": "\u003cp\u003eurl path to package source.\n\u003c/p\u003e",
        "fct-module": "Distribution.ArchLinux.AUR",
        "fct-package": "archlinux-web",
        "fct-signature": "FilePath",
        "fct-source": "src/Distribution-ArchLinux-AUR.html#AURInfo",
        "fct-type": "function",
        "title": "packagePath"
      },
      "index": {
        "description": "url path to package source",
        "hierarchy": "Distribution ArchLinux AUR",
        "module": "Distribution.ArchLinux.AUR",
        "name": "packagePath",
        "normalized": "",
        "package": "archlinux-web",
        "partial": "Path",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/archlinux-web/docs/Distribution-ArchLinux-AUR.html#v:packageURL",
      "description": {
        "fct-descr": "\u003cp\u003eurl (sanity check: should be hackage url mostly)\n\u003c/p\u003e",
        "fct-module": "Distribution.ArchLinux.AUR",
        "fct-package": "archlinux-web",
        "fct-signature": "String",
        "fct-source": "src/Distribution-ArchLinux-AUR.html#AURInfo",
        "fct-type": "function",
        "title": "packageURL"
      },
      "index": {
        "description": "url sanity check should be hackage url mostly",
        "hierarchy": "Distribution ArchLinux AUR",
        "module": "Distribution.ArchLinux.AUR",
        "name": "packageURL",
        "normalized": "",
        "package": "archlinux-web",
        "partial": "URL",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/archlinux-web/docs/Distribution-ArchLinux-AUR.html#v:packageURLinAUR",
      "description": {
        "fct-descr": "\u003cp\u003eurl of AUR package\n\u003c/p\u003e",
        "fct-module": "Distribution.ArchLinux.AUR",
        "fct-package": "archlinux-web",
        "fct-signature": "String",
        "fct-source": "src/Distribution-ArchLinux-AUR.html#AURInfo",
        "fct-type": "function",
        "title": "packageURLinAUR"
      },
      "index": {
        "description": "url of AUR package",
        "hierarchy": "Distribution ArchLinux AUR",
        "module": "Distribution.ArchLinux.AUR",
        "name": "packageURLinAUR",
        "normalized": "",
        "package": "archlinux-web",
        "partial": "URLin AUR",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/archlinux-web/docs/Distribution-ArchLinux-AUR.html#v:packageVersion",
      "description": {
        "fct-descr": "\u003cp\u003eeither the AUR version (version,rev)  or a string\n\u003c/p\u003e",
        "fct-module": "Distribution.ArchLinux.AUR",
        "fct-package": "archlinux-web",
        "fct-signature": "Either String (Version, String)",
        "fct-source": "src/Distribution-ArchLinux-AUR.html#AURInfo",
        "fct-type": "function",
        "title": "packageVersion"
      },
      "index": {
        "description": "either the AUR version version rev or string",
        "hierarchy": "Distribution ArchLinux AUR",
        "module": "Distribution.ArchLinux.AUR",
        "name": "packageVersion",
        "normalized": "Either String(Version,String)",
        "package": "archlinux-web",
        "partial": "Version",
        "signature": "Either String(Version,String)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/archlinux-web/docs/Distribution-ArchLinux-AUR.html#v:packageVotes",
      "description": {
        "fct-descr": "\u003cp\u003evotes on package\n\u003c/p\u003e",
        "fct-module": "Distribution.ArchLinux.AUR",
        "fct-package": "archlinux-web",
        "fct-signature": "Integer",
        "fct-source": "src/Distribution-ArchLinux-AUR.html#AURInfo",
        "fct-type": "function",
        "title": "packageVotes"
      },
      "index": {
        "description": "votes on package",
        "hierarchy": "Distribution ArchLinux AUR",
        "module": "Distribution.ArchLinux.AUR",
        "name": "packageVotes",
        "normalized": "",
        "package": "archlinux-web",
        "partial": "Votes",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/archlinux-web/docs/Distribution-ArchLinux-AUR.html#v:search",
      "description": {
        "fct-descr": "\u003cp\u003eSearch AUR for packages matching pattern. Returns a list of info results.\n\u003c/p\u003e",
        "fct-module": "Distribution.ArchLinux.AUR",
        "fct-package": "archlinux-web",
        "fct-signature": "String -\u003e IO [AURInfo]",
        "fct-source": "src/Distribution-ArchLinux-AUR.html#search",
        "fct-type": "function",
        "title": "search"
      },
      "index": {
        "description": "Search AUR for packages matching pattern Returns list of info results",
        "hierarchy": "Distribution ArchLinux AUR",
        "module": "Distribution.ArchLinux.AUR",
        "name": "search",
        "normalized": "String-\u003eIO[AURInfo]",
        "package": "archlinux-web",
        "partial": "",
        "signature": "String-\u003eIO[AURInfo]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/archlinux-web/docs/Distribution-ArchLinux-Report.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eConstruct reports about a set of packages in AUR\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Distribution.ArchLinux.Report",
        "fct-package": "archlinux-web",
        "fct-signature": "module",
        "fct-source": "src/Distribution-ArchLinux-Report.html",
        "fct-type": "module",
        "title": "Report"
      },
      "index": {
        "description": "Construct reports about set of packages in AUR",
        "hierarchy": "Distribution ArchLinux Report",
        "module": "Distribution.ArchLinux.Report",
        "name": "Report",
        "normalized": "",
        "package": "archlinux-web",
        "partial": "Report",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/archlinux-web/docs/Distribution-ArchLinux-Report.html#v:loadPackageIndex",
      "description": {
        "fct-descr": "\u003cp\u003eLoad a table of packag names associated with their latest versions\n\u003c/p\u003e",
        "fct-module": "Distribution.ArchLinux.Report",
        "fct-package": "archlinux-web",
        "fct-signature": "IO (Map String Version)",
        "fct-source": "src/Distribution-ArchLinux-Report.html#loadPackageIndex",
        "fct-type": "function",
        "title": "loadPackageIndex"
      },
      "index": {
        "description": "Load table of packag names associated with their latest versions",
        "hierarchy": "Distribution ArchLinux Report",
        "module": "Distribution.ArchLinux.Report",
        "name": "loadPackageIndex",
        "normalized": "",
        "package": "archlinux-web",
        "partial": "Package Index",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/archlinux-web/docs/Distribution-ArchLinux-Report.html#v:report",
      "description": {
        "fct-descr": "\u003cp\u003eTake as input a list of package names, return an html page\n with interesting facts about the state of the packages.\n\u003c/p\u003e",
        "fct-module": "Distribution.ArchLinux.Report",
        "fct-package": "archlinux-web",
        "fct-signature": "[String] -\u003e IO String",
        "fct-source": "src/Distribution-ArchLinux-Report.html#report",
        "fct-type": "function",
        "title": "report"
      },
      "index": {
        "description": "Take as input list of package names return an html page with interesting facts about the state of the packages",
        "hierarchy": "Distribution ArchLinux Report",
        "module": "Distribution.ArchLinux.Report",
        "name": "report",
        "normalized": "[String]-\u003eIO String",
        "package": "archlinux-web",
        "partial": "",
        "signature": "[String]-\u003eIO String"
      }
    }
  }
]