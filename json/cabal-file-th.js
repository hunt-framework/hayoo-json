[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cabal-file-th/docs/Distribution-PackageDescription-TH.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eUtility functions for reading cabal file fields through template haskell.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Distribution.PackageDescription.TH",
        "fct-package": "cabal-file-th",
        "fct-signature": "module",
        "fct-source": "src/Distribution-PackageDescription-TH.html",
        "fct-type": "module",
        "title": "TH"
      },
      "index": {
        "description": "Utility functions for reading cabal file fields through template haskell",
        "hierarchy": "Distribution PackageDescription TH",
        "module": "Distribution.PackageDescription.TH",
        "name": "TH",
        "normalized": "",
        "package": "cabal-file-th",
        "partial": "TH",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cabal-file-th/docs/Distribution-PackageDescription-TH.html#t:PackageDescription",
      "description": {
        "fct-descr": "\u003cp\u003eThis data type is the internal representation of the file \u003ccode\u003epkg.cabal\u003c/code\u003e.\n It contains two kinds of information about the package: information\n which is needed for all packages, such as the package name and version, and\n information which is needed for the simple build system only, such as\n the compiler options and library name.\n\u003c/p\u003e",
        "fct-module": "Distribution.PackageDescription.TH",
        "fct-package": "cabal-file-th",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "PackageDescription"
      },
      "index": {
        "description": "This data type is the internal representation of the file pkg.cabal It contains two kinds of information about the package information which is needed for all packages such as the package name and version and information which is needed for the simple build system only such as the compiler options and library name",
        "hierarchy": "Distribution PackageDescription TH",
        "module": "Distribution.PackageDescription.TH",
        "name": "PackageDescription",
        "normalized": "",
        "package": "cabal-file-th",
        "partial": "Package Description",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cabal-file-th/docs/Distribution-PackageDescription-TH.html#t:PackageIdentifier",
      "description": {
        "fct-descr": "\u003cp\u003eThe name and version of a package.\n\u003c/p\u003e",
        "fct-module": "Distribution.PackageDescription.TH",
        "fct-package": "cabal-file-th",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "PackageIdentifier"
      },
      "index": {
        "description": "The name and version of package",
        "hierarchy": "Distribution PackageDescription TH",
        "module": "Distribution.PackageDescription.TH",
        "name": "PackageIdentifier",
        "normalized": "",
        "package": "cabal-file-th",
        "partial": "Package Identifier",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cabal-file-th/docs/Distribution-PackageDescription-TH.html#t:Version",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eVersion\u003c/a\u003e\u003c/code\u003e represents the version of a software entity.  \n\u003c/p\u003e\u003cp\u003eAn instance of \u003ccode\u003e\u003ca\u003eEq\u003c/a\u003e\u003c/code\u003e is provided, which implements exact equality\nmodulo reordering of the tags in the \u003ccode\u003e\u003ca\u003eversionTags\u003c/a\u003e\u003c/code\u003e field.\n\u003c/p\u003e\u003cp\u003eAn instance of \u003ccode\u003e\u003ca\u003eOrd\u003c/a\u003e\u003c/code\u003e is also provided, which gives lexicographic\nordering on the \u003ccode\u003e\u003ca\u003eversionBranch\u003c/a\u003e\u003c/code\u003e fields (i.e. 2.1 \u003e 2.0, 1.2.3 \u003e 1.2.2,\netc.).  This is expected to be sufficient for many uses, but note that\nyou may need to use a more specific ordering for your versioning\nscheme.  For example, some versioning schemes may include pre-releases\nwhich have tags \u003ccode\u003e\"pre1\"\u003c/code\u003e, \u003ccode\u003e\"pre2\"\u003c/code\u003e, and so on, and these would need to\nbe taken into account when determining ordering.  In some cases, date\nordering may be more appropriate, so the application would have to\nlook for \u003ccode\u003edate\u003c/code\u003e tags in the \u003ccode\u003e\u003ca\u003eversionTags\u003c/a\u003e\u003c/code\u003e field and compare those.\nThe bottom line is, don't always assume that \u003ccode\u003e\u003ca\u003ecompare\u003c/a\u003e\u003c/code\u003e and other \u003ccode\u003e\u003ca\u003eOrd\u003c/a\u003e\u003c/code\u003e\noperations are the right thing for every \u003ccode\u003e\u003ca\u003eVersion\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSimilarly, concrete representations of versions may differ.  One\npossible concrete representation is provided (see \u003ccode\u003e\u003ca\u003eshowVersion\u003c/a\u003e\u003c/code\u003e and\n\u003ccode\u003e\u003ca\u003eparseVersion\u003c/a\u003e\u003c/code\u003e), but depending on the application a different concrete\nrepresentation may be more appropriate.\n\u003c/p\u003e",
        "fct-module": "Distribution.PackageDescription.TH",
        "fct-package": "cabal-file-th",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "Version"
      },
      "index": {
        "description": "Version represents the version of software entity An instance of Eq is provided which implements exact equality modulo reordering of the tags in the versionTags field An instance of Ord is also provided which gives lexicographic ordering on the versionBranch fields i.e etc This is expected to be sufficient for many uses but note that you may need to use more specific ordering for your versioning scheme For example some versioning schemes may include pre-releases which have tags pre1 pre2 and so on and these would need to be taken into account when determining ordering In some cases date ordering may be more appropriate so the application would have to look for date tags in the versionTags field and compare those The bottom line is don always assume that compare and other Ord operations are the right thing for every Version Similarly concrete representations of versions may differ One possible concrete representation is provided see showVersion and parseVersion but depending on the application different concrete representation may be more appropriate",
        "hierarchy": "Distribution PackageDescription TH",
        "module": "Distribution.PackageDescription.TH",
        "name": "Version",
        "normalized": "",
        "package": "cabal-file-th",
        "partial": "Version",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cabal-file-th/docs/Distribution-PackageDescription-TH.html#v:PackageDescription",
      "description": {
        "fct-module": "Distribution.PackageDescription.TH",
        "fct-package": "cabal-file-th",
        "fct-signature": "PackageDescription",
        "fct-type": "function",
        "title": "PackageDescription"
      },
      "index": {
        "description": "",
        "hierarchy": "Distribution PackageDescription TH",
        "module": "Distribution.PackageDescription.TH",
        "name": "PackageDescription",
        "normalized": "",
        "package": "cabal-file-th",
        "partial": "Package Description",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cabal-file-th/docs/Distribution-PackageDescription-TH.html#v:PackageIdentifier",
      "description": {
        "fct-module": "Distribution.PackageDescription.TH",
        "fct-package": "cabal-file-th",
        "fct-signature": "PackageIdentifier",
        "fct-type": "function",
        "title": "PackageIdentifier"
      },
      "index": {
        "description": "",
        "hierarchy": "Distribution PackageDescription TH",
        "module": "Distribution.PackageDescription.TH",
        "name": "PackageIdentifier",
        "normalized": "",
        "package": "cabal-file-th",
        "partial": "Package Identifier",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cabal-file-th/docs/Distribution-PackageDescription-TH.html#v:Version",
      "description": {
        "fct-module": "Distribution.PackageDescription.TH",
        "fct-package": "cabal-file-th",
        "fct-signature": "Version",
        "fct-type": "function",
        "title": "Version"
      },
      "index": {
        "description": "",
        "hierarchy": "Distribution PackageDescription TH",
        "module": "Distribution.PackageDescription.TH",
        "name": "Version",
        "normalized": "",
        "package": "cabal-file-th",
        "partial": "Version",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cabal-file-th/docs/Distribution-PackageDescription-TH.html#v:author",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Distribution.PackageDescription.TH",
        "fct-package": "cabal-file-th",
        "fct-signature": "String",
        "fct-type": "function",
        "title": "author"
      },
      "index": {
        "description": "",
        "hierarchy": "Distribution PackageDescription TH",
        "module": "Distribution.PackageDescription.TH",
        "name": "author",
        "normalized": "",
        "package": "cabal-file-th",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cabal-file-th/docs/Distribution-PackageDescription-TH.html#v:benchmarks",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Distribution.PackageDescription.TH",
        "fct-package": "cabal-file-th",
        "fct-signature": "[Benchmark]",
        "fct-type": "function",
        "title": "benchmarks"
      },
      "index": {
        "description": "",
        "hierarchy": "Distribution PackageDescription TH",
        "module": "Distribution.PackageDescription.TH",
        "name": "benchmarks",
        "normalized": "[Benchmark]",
        "package": "cabal-file-th",
        "partial": "",
        "signature": "[Benchmark]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cabal-file-th/docs/Distribution-PackageDescription-TH.html#v:bugReports",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Distribution.PackageDescription.TH",
        "fct-package": "cabal-file-th",
        "fct-signature": "String",
        "fct-type": "function",
        "title": "bugReports"
      },
      "index": {
        "description": "",
        "hierarchy": "Distribution PackageDescription TH",
        "module": "Distribution.PackageDescription.TH",
        "name": "bugReports",
        "normalized": "",
        "package": "cabal-file-th",
        "partial": "Reports",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cabal-file-th/docs/Distribution-PackageDescription-TH.html#v:buildDepends",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Distribution.PackageDescription.TH",
        "fct-package": "cabal-file-th",
        "fct-signature": "[Dependency]",
        "fct-type": "function",
        "title": "buildDepends"
      },
      "index": {
        "description": "",
        "hierarchy": "Distribution PackageDescription TH",
        "module": "Distribution.PackageDescription.TH",
        "name": "buildDepends",
        "normalized": "[Dependency]",
        "package": "cabal-file-th",
        "partial": "Depends",
        "signature": "[Dependency]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cabal-file-th/docs/Distribution-PackageDescription-TH.html#v:buildType",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Distribution.PackageDescription.TH",
        "fct-package": "cabal-file-th",
        "fct-signature": "Maybe BuildType",
        "fct-type": "function",
        "title": "buildType"
      },
      "index": {
        "description": "",
        "hierarchy": "Distribution PackageDescription TH",
        "module": "Distribution.PackageDescription.TH",
        "name": "buildType",
        "normalized": "",
        "package": "cabal-file-th",
        "partial": "Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cabal-file-th/docs/Distribution-PackageDescription-TH.html#v:category",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Distribution.PackageDescription.TH",
        "fct-package": "cabal-file-th",
        "fct-signature": "String",
        "fct-type": "function",
        "title": "category"
      },
      "index": {
        "description": "",
        "hierarchy": "Distribution PackageDescription TH",
        "module": "Distribution.PackageDescription.TH",
        "name": "category",
        "normalized": "",
        "package": "cabal-file-th",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cabal-file-th/docs/Distribution-PackageDescription-TH.html#v:copyright",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Distribution.PackageDescription.TH",
        "fct-package": "cabal-file-th",
        "fct-signature": "String",
        "fct-type": "function",
        "title": "copyright"
      },
      "index": {
        "description": "",
        "hierarchy": "Distribution PackageDescription TH",
        "module": "Distribution.PackageDescription.TH",
        "name": "copyright",
        "normalized": "",
        "package": "cabal-file-th",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cabal-file-th/docs/Distribution-PackageDescription-TH.html#v:customFieldsPD",
      "description": {
        "fct-descr": "\u003cp\u003eCustom fields starting\n with x-, stored in a\n simple assoc-list.\n\u003c/p\u003e",
        "fct-module": "Distribution.PackageDescription.TH",
        "fct-package": "cabal-file-th",
        "fct-signature": "[(String, String)]",
        "fct-type": "function",
        "title": "customFieldsPD"
      },
      "index": {
        "description": "Custom fields starting with stored in simple assoc-list",
        "hierarchy": "Distribution PackageDescription TH",
        "module": "Distribution.PackageDescription.TH",
        "name": "customFieldsPD",
        "normalized": "[(String,String)]",
        "package": "cabal-file-th",
        "partial": "Fields PD",
        "signature": "[(String,String)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cabal-file-th/docs/Distribution-PackageDescription-TH.html#v:dataDir",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Distribution.PackageDescription.TH",
        "fct-package": "cabal-file-th",
        "fct-signature": "FilePath",
        "fct-type": "function",
        "title": "dataDir"
      },
      "index": {
        "description": "",
        "hierarchy": "Distribution PackageDescription TH",
        "module": "Distribution.PackageDescription.TH",
        "name": "dataDir",
        "normalized": "",
        "package": "cabal-file-th",
        "partial": "Dir",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cabal-file-th/docs/Distribution-PackageDescription-TH.html#v:dataFiles",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Distribution.PackageDescription.TH",
        "fct-package": "cabal-file-th",
        "fct-signature": "[FilePath]",
        "fct-type": "function",
        "title": "dataFiles"
      },
      "index": {
        "description": "",
        "hierarchy": "Distribution PackageDescription TH",
        "module": "Distribution.PackageDescription.TH",
        "name": "dataFiles",
        "normalized": "[FilePath]",
        "package": "cabal-file-th",
        "partial": "Files",
        "signature": "[FilePath]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cabal-file-th/docs/Distribution-PackageDescription-TH.html#v:description",
      "description": {
        "fct-descr": "\u003cp\u003eA more verbose description of this package\n\u003c/p\u003e",
        "fct-module": "Distribution.PackageDescription.TH",
        "fct-package": "cabal-file-th",
        "fct-signature": "String",
        "fct-type": "function",
        "title": "description"
      },
      "index": {
        "description": "more verbose description of this package",
        "hierarchy": "Distribution PackageDescription TH",
        "module": "Distribution.PackageDescription.TH",
        "name": "description",
        "normalized": "",
        "package": "cabal-file-th",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cabal-file-th/docs/Distribution-PackageDescription-TH.html#v:executables",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Distribution.PackageDescription.TH",
        "fct-package": "cabal-file-th",
        "fct-signature": "[Executable]",
        "fct-type": "function",
        "title": "executables"
      },
      "index": {
        "description": "",
        "hierarchy": "Distribution PackageDescription TH",
        "module": "Distribution.PackageDescription.TH",
        "name": "executables",
        "normalized": "[Executable]",
        "package": "cabal-file-th",
        "partial": "",
        "signature": "[Executable]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cabal-file-th/docs/Distribution-PackageDescription-TH.html#v:extraSrcFiles",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Distribution.PackageDescription.TH",
        "fct-package": "cabal-file-th",
        "fct-signature": "[FilePath]",
        "fct-type": "function",
        "title": "extraSrcFiles"
      },
      "index": {
        "description": "",
        "hierarchy": "Distribution PackageDescription TH",
        "module": "Distribution.PackageDescription.TH",
        "name": "extraSrcFiles",
        "normalized": "[FilePath]",
        "package": "cabal-file-th",
        "partial": "Src Files",
        "signature": "[FilePath]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cabal-file-th/docs/Distribution-PackageDescription-TH.html#v:extraTmpFiles",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Distribution.PackageDescription.TH",
        "fct-package": "cabal-file-th",
        "fct-signature": "[FilePath]",
        "fct-type": "function",
        "title": "extraTmpFiles"
      },
      "index": {
        "description": "",
        "hierarchy": "Distribution PackageDescription TH",
        "module": "Distribution.PackageDescription.TH",
        "name": "extraTmpFiles",
        "normalized": "[FilePath]",
        "package": "cabal-file-th",
        "partial": "Tmp Files",
        "signature": "[FilePath]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cabal-file-th/docs/Distribution-PackageDescription-TH.html#v:homepage",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Distribution.PackageDescription.TH",
        "fct-package": "cabal-file-th",
        "fct-signature": "String",
        "fct-type": "function",
        "title": "homepage"
      },
      "index": {
        "description": "",
        "hierarchy": "Distribution PackageDescription TH",
        "module": "Distribution.PackageDescription.TH",
        "name": "homepage",
        "normalized": "",
        "package": "cabal-file-th",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cabal-file-th/docs/Distribution-PackageDescription-TH.html#v:library",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Distribution.PackageDescription.TH",
        "fct-package": "cabal-file-th",
        "fct-signature": "Maybe Library",
        "fct-type": "function",
        "title": "library"
      },
      "index": {
        "description": "",
        "hierarchy": "Distribution PackageDescription TH",
        "module": "Distribution.PackageDescription.TH",
        "name": "library",
        "normalized": "",
        "package": "cabal-file-th",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cabal-file-th/docs/Distribution-PackageDescription-TH.html#v:license",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Distribution.PackageDescription.TH",
        "fct-package": "cabal-file-th",
        "fct-signature": "License",
        "fct-type": "function",
        "title": "license"
      },
      "index": {
        "description": "",
        "hierarchy": "Distribution PackageDescription TH",
        "module": "Distribution.PackageDescription.TH",
        "name": "license",
        "normalized": "",
        "package": "cabal-file-th",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cabal-file-th/docs/Distribution-PackageDescription-TH.html#v:licenseFile",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Distribution.PackageDescription.TH",
        "fct-package": "cabal-file-th",
        "fct-signature": "FilePath",
        "fct-type": "function",
        "title": "licenseFile"
      },
      "index": {
        "description": "",
        "hierarchy": "Distribution PackageDescription TH",
        "module": "Distribution.PackageDescription.TH",
        "name": "licenseFile",
        "normalized": "",
        "package": "cabal-file-th",
        "partial": "File",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cabal-file-th/docs/Distribution-PackageDescription-TH.html#v:maintainer",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Distribution.PackageDescription.TH",
        "fct-package": "cabal-file-th",
        "fct-signature": "String",
        "fct-type": "function",
        "title": "maintainer"
      },
      "index": {
        "description": "",
        "hierarchy": "Distribution PackageDescription TH",
        "module": "Distribution.PackageDescription.TH",
        "name": "maintainer",
        "normalized": "",
        "package": "cabal-file-th",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cabal-file-th/docs/Distribution-PackageDescription-TH.html#v:package",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Distribution.PackageDescription.TH",
        "fct-package": "cabal-file-th",
        "fct-signature": "PackageIdentifier",
        "fct-type": "function",
        "title": "package"
      },
      "index": {
        "description": "",
        "hierarchy": "Distribution PackageDescription TH",
        "module": "Distribution.PackageDescription.TH",
        "name": "package",
        "normalized": "",
        "package": "cabal-file-th",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cabal-file-th/docs/Distribution-PackageDescription-TH.html#v:packageVariable",
      "description": {
        "fct-descr": "\u003cp\u003eRenders the package variable specified by the function.\n The cabal file interrogated is the first one that is found \n in the current working directory.\n\u003c/p\u003e",
        "fct-module": "Distribution.PackageDescription.TH",
        "fct-package": "cabal-file-th",
        "fct-signature": "(PackageDescription -\u003e a) -\u003e Q Exp",
        "fct-source": "src/Distribution-PackageDescription-TH.html#packageVariable",
        "fct-type": "function",
        "title": "packageVariable"
      },
      "index": {
        "description": "Renders the package variable specified by the function The cabal file interrogated is the first one that is found in the current working directory",
        "hierarchy": "Distribution PackageDescription TH",
        "module": "Distribution.PackageDescription.TH",
        "name": "packageVariable",
        "normalized": "(PackageDescription-\u003ea)-\u003eQ Exp",
        "package": "cabal-file-th",
        "partial": "Variable",
        "signature": "(PackageDescription-\u003ea)-\u003eQ Exp"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cabal-file-th/docs/Distribution-PackageDescription-TH.html#v:packageVariableFrom",
      "description": {
        "fct-descr": "\u003cp\u003eRenders the package variable specified by the function, from a cabal file\n and the given path.\n\u003c/p\u003e",
        "fct-module": "Distribution.PackageDescription.TH",
        "fct-package": "cabal-file-th",
        "fct-signature": "FilePath -\u003e (PackageDescription -\u003e a) -\u003e Q Exp",
        "fct-source": "src/Distribution-PackageDescription-TH.html#packageVariableFrom",
        "fct-type": "function",
        "title": "packageVariableFrom"
      },
      "index": {
        "description": "Renders the package variable specified by the function from cabal file and the given path",
        "hierarchy": "Distribution PackageDescription TH",
        "module": "Distribution.PackageDescription.TH",
        "name": "packageVariableFrom",
        "normalized": "FilePath-\u003e(PackageDescription-\u003ea)-\u003eQ Exp",
        "package": "cabal-file-th",
        "partial": "Variable From",
        "signature": "FilePath-\u003e(PackageDescription-\u003ea)-\u003eQ Exp"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cabal-file-th/docs/Distribution-PackageDescription-TH.html#v:pkgName",
      "description": {
        "fct-descr": "\u003cp\u003eThe name of this package, eg. foo\n\u003c/p\u003e",
        "fct-module": "Distribution.PackageDescription.TH",
        "fct-package": "cabal-file-th",
        "fct-signature": "PackageName",
        "fct-type": "function",
        "title": "pkgName"
      },
      "index": {
        "description": "The name of this package eg foo",
        "hierarchy": "Distribution PackageDescription TH",
        "module": "Distribution.PackageDescription.TH",
        "name": "pkgName",
        "normalized": "",
        "package": "cabal-file-th",
        "partial": "Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cabal-file-th/docs/Distribution-PackageDescription-TH.html#v:pkgUrl",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Distribution.PackageDescription.TH",
        "fct-package": "cabal-file-th",
        "fct-signature": "String",
        "fct-type": "function",
        "title": "pkgUrl"
      },
      "index": {
        "description": "",
        "hierarchy": "Distribution PackageDescription TH",
        "module": "Distribution.PackageDescription.TH",
        "name": "pkgUrl",
        "normalized": "",
        "package": "cabal-file-th",
        "partial": "Url",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cabal-file-th/docs/Distribution-PackageDescription-TH.html#v:pkgVersion",
      "description": {
        "fct-descr": "\u003cp\u003ethe version of this package, eg 1.2\n\u003c/p\u003e",
        "fct-module": "Distribution.PackageDescription.TH",
        "fct-package": "cabal-file-th",
        "fct-signature": "Version",
        "fct-type": "function",
        "title": "pkgVersion"
      },
      "index": {
        "description": "the version of this package eg",
        "hierarchy": "Distribution PackageDescription TH",
        "module": "Distribution.PackageDescription.TH",
        "name": "pkgVersion",
        "normalized": "",
        "package": "cabal-file-th",
        "partial": "Version",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cabal-file-th/docs/Distribution-PackageDescription-TH.html#v:sourceRepos",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Distribution.PackageDescription.TH",
        "fct-package": "cabal-file-th",
        "fct-signature": "[SourceRepo]",
        "fct-type": "function",
        "title": "sourceRepos"
      },
      "index": {
        "description": "",
        "hierarchy": "Distribution PackageDescription TH",
        "module": "Distribution.PackageDescription.TH",
        "name": "sourceRepos",
        "normalized": "[SourceRepo]",
        "package": "cabal-file-th",
        "partial": "Repos",
        "signature": "[SourceRepo]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cabal-file-th/docs/Distribution-PackageDescription-TH.html#v:specVersionRaw",
      "description": {
        "fct-descr": "\u003cp\u003eThe version of the Cabal spec that this package description uses.\n For historical reasons this is specified with a version range but\n only ranges of the form \u003ccode\u003e\u003e= v\u003c/code\u003e make sense. We are in the process of\n transitioning to specifying just a single version, not a range.\n\u003c/p\u003e",
        "fct-module": "Distribution.PackageDescription.TH",
        "fct-package": "cabal-file-th",
        "fct-signature": "Either Version VersionRange",
        "fct-type": "function",
        "title": "specVersionRaw"
      },
      "index": {
        "description": "The version of the Cabal spec that this package description uses For historical reasons this is specified with version range but only ranges of the form make sense We are in the process of transitioning to specifying just single version not range",
        "hierarchy": "Distribution PackageDescription TH",
        "module": "Distribution.PackageDescription.TH",
        "name": "specVersionRaw",
        "normalized": "",
        "package": "cabal-file-th",
        "partial": "Version Raw",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cabal-file-th/docs/Distribution-PackageDescription-TH.html#v:stability",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Distribution.PackageDescription.TH",
        "fct-package": "cabal-file-th",
        "fct-signature": "String",
        "fct-type": "function",
        "title": "stability"
      },
      "index": {
        "description": "",
        "hierarchy": "Distribution PackageDescription TH",
        "module": "Distribution.PackageDescription.TH",
        "name": "stability",
        "normalized": "",
        "package": "cabal-file-th",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cabal-file-th/docs/Distribution-PackageDescription-TH.html#v:synopsis",
      "description": {
        "fct-descr": "\u003cp\u003eA one-line summary of this package\n\u003c/p\u003e",
        "fct-module": "Distribution.PackageDescription.TH",
        "fct-package": "cabal-file-th",
        "fct-signature": "String",
        "fct-type": "function",
        "title": "synopsis"
      },
      "index": {
        "description": "one-line summary of this package",
        "hierarchy": "Distribution PackageDescription TH",
        "module": "Distribution.PackageDescription.TH",
        "name": "synopsis",
        "normalized": "",
        "package": "cabal-file-th",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cabal-file-th/docs/Distribution-PackageDescription-TH.html#v:testSuites",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Distribution.PackageDescription.TH",
        "fct-package": "cabal-file-th",
        "fct-signature": "[TestSuite]",
        "fct-type": "function",
        "title": "testSuites"
      },
      "index": {
        "description": "",
        "hierarchy": "Distribution PackageDescription TH",
        "module": "Distribution.PackageDescription.TH",
        "name": "testSuites",
        "normalized": "[TestSuite]",
        "package": "cabal-file-th",
        "partial": "Suites",
        "signature": "[TestSuite]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cabal-file-th/docs/Distribution-PackageDescription-TH.html#v:testedWith",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Distribution.PackageDescription.TH",
        "fct-package": "cabal-file-th",
        "fct-signature": "[(CompilerFlavor, VersionRange)]",
        "fct-type": "function",
        "title": "testedWith"
      },
      "index": {
        "description": "",
        "hierarchy": "Distribution PackageDescription TH",
        "module": "Distribution.PackageDescription.TH",
        "name": "testedWith",
        "normalized": "[(CompilerFlavor,VersionRange)]",
        "package": "cabal-file-th",
        "partial": "With",
        "signature": "[(CompilerFlavor,VersionRange)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cabal-file-th/docs/Distribution-PackageDescription-TH.html#v:versionBranch",
      "description": {
        "fct-descr": "\u003cp\u003eThe numeric branch for this version.  This reflects the\n fact that most software versions are tree-structured; there\n is a main trunk which is tagged with versions at various\n points (1,2,3...), and the first branch off the trunk after\n version 3 is 3.1, the second branch off the trunk after\n version 3 is 3.2, and so on.  The tree can be branched\n arbitrarily, just by adding more digits.\n\u003c/p\u003e\u003cp\u003eWe represent the branch as a list of \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e, so\n version 3.2.1 becomes [3,2,1].  Lexicographic ordering\n (i.e. the default instance of \u003ccode\u003e\u003ca\u003eOrd\u003c/a\u003e\u003c/code\u003e for \u003ccode\u003e[Int]\u003c/code\u003e) gives\n the natural ordering of branches.\n\u003c/p\u003e",
        "fct-module": "Distribution.PackageDescription.TH",
        "fct-package": "cabal-file-th",
        "fct-signature": "[Int]",
        "fct-type": "function",
        "title": "versionBranch"
      },
      "index": {
        "description": "The numeric branch for this version This reflects the fact that most software versions are tree-structured there is main trunk which is tagged with versions at various points and the first branch off the trunk after version is the second branch off the trunk after version is and so on The tree can be branched arbitrarily just by adding more digits We represent the branch as list of Int so version becomes Lexicographic ordering i.e the default instance of Ord for Int gives the natural ordering of branches",
        "hierarchy": "Distribution PackageDescription TH",
        "module": "Distribution.PackageDescription.TH",
        "name": "versionBranch",
        "normalized": "[Int]",
        "package": "cabal-file-th",
        "partial": "Branch",
        "signature": "[Int]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cabal-file-th/docs/Distribution-PackageDescription-TH.html#v:versionTags",
      "description": {
        "fct-descr": "\u003cp\u003eA version can be tagged with an arbitrary list of strings.\n The interpretation of the list of tags is entirely dependent\n on the entity that this version applies to.\n\u003c/p\u003e",
        "fct-module": "Distribution.PackageDescription.TH",
        "fct-package": "cabal-file-th",
        "fct-signature": "[String]",
        "fct-type": "function",
        "title": "versionTags"
      },
      "index": {
        "description": "version can be tagged with an arbitrary list of strings The interpretation of the list of tags is entirely dependent on the entity that this version applies to",
        "hierarchy": "Distribution PackageDescription TH",
        "module": "Distribution.PackageDescription.TH",
        "name": "versionTags",
        "normalized": "[String]",
        "package": "cabal-file-th",
        "partial": "Tags",
        "signature": "[String]"
      }
    }
  }
]