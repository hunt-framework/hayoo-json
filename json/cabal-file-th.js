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
        "word": "cabal-file-th"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eUtility functions for reading cabal file fields through template haskell.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Distribution.PackageDescription.TH",
          "name": "TH",
          "package": "cabal-file-th",
          "source": "src/Distribution-PackageDescription-TH.html",
          "type": "module"
        },
        "index": {
          "description": "Utility functions for reading cabal file fields through template haskell",
          "hierarchy": "Distribution PackageDescription TH",
          "module": "Distribution.PackageDescription.TH",
          "name": "TH",
          "package": "cabal-file-th",
          "partial": "TH",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/cabal-file-th/docs/Distribution-PackageDescription-TH.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis data type is the internal representation of the file \u003ccode\u003epkg.cabal\u003c/code\u003e.\n It contains two kinds of information about the package: information\n which is needed for all packages, such as the package name and version, and\n information which is needed for the simple build system only, such as\n the compiler options and library name.\n\u003c/p\u003e",
          "module": "Distribution.PackageDescription.TH",
          "name": "PackageDescription",
          "package": "cabal-file-th",
          "type": "data"
        },
        "index": {
          "description": "This data type is the internal representation of the file pkg.cabal It contains two kinds of information about the package information which is needed for all packages such as the package name and version and information which is needed for the simple build system only such as the compiler options and library name",
          "hierarchy": "Distribution PackageDescription TH",
          "module": "Distribution.PackageDescription.TH",
          "name": "PackageDescription",
          "package": "cabal-file-th",
          "partial": "Package Description",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cabal-file-th/docs/Distribution-PackageDescription-TH.html#t:PackageDescription"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe name and version of a package.\n\u003c/p\u003e",
          "module": "Distribution.PackageDescription.TH",
          "name": "PackageIdentifier",
          "package": "cabal-file-th",
          "type": "data"
        },
        "index": {
          "description": "The name and version of package",
          "hierarchy": "Distribution PackageDescription TH",
          "module": "Distribution.PackageDescription.TH",
          "name": "PackageIdentifier",
          "package": "cabal-file-th",
          "partial": "Package Identifier",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cabal-file-th/docs/Distribution-PackageDescription-TH.html#t:PackageIdentifier"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eVersion\u003c/a\u003e\u003c/code\u003e represents the version of a software entity.  \n\u003c/p\u003e\u003cp\u003eAn instance of \u003ccode\u003e\u003ca\u003eEq\u003c/a\u003e\u003c/code\u003e is provided, which implements exact equality\nmodulo reordering of the tags in the \u003ccode\u003e\u003ca\u003eversionTags\u003c/a\u003e\u003c/code\u003e field.\n\u003c/p\u003e\u003cp\u003eAn instance of \u003ccode\u003e\u003ca\u003eOrd\u003c/a\u003e\u003c/code\u003e is also provided, which gives lexicographic\nordering on the \u003ccode\u003e\u003ca\u003eversionBranch\u003c/a\u003e\u003c/code\u003e fields (i.e. 2.1 \u003e 2.0, 1.2.3 \u003e 1.2.2,\netc.).  This is expected to be sufficient for many uses, but note that\nyou may need to use a more specific ordering for your versioning\nscheme.  For example, some versioning schemes may include pre-releases\nwhich have tags \u003ccode\u003e\"pre1\"\u003c/code\u003e, \u003ccode\u003e\"pre2\"\u003c/code\u003e, and so on, and these would need to\nbe taken into account when determining ordering.  In some cases, date\nordering may be more appropriate, so the application would have to\nlook for \u003ccode\u003edate\u003c/code\u003e tags in the \u003ccode\u003e\u003ca\u003eversionTags\u003c/a\u003e\u003c/code\u003e field and compare those.\nThe bottom line is, don't always assume that \u003ccode\u003e\u003ca\u003ecompare\u003c/a\u003e\u003c/code\u003e and other \u003ccode\u003e\u003ca\u003eOrd\u003c/a\u003e\u003c/code\u003e\noperations are the right thing for every \u003ccode\u003e\u003ca\u003eVersion\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSimilarly, concrete representations of versions may differ.  One\npossible concrete representation is provided (see \u003ccode\u003e\u003ca\u003eshowVersion\u003c/a\u003e\u003c/code\u003e and\n\u003ccode\u003e\u003ca\u003eparseVersion\u003c/a\u003e\u003c/code\u003e), but depending on the application a different concrete\nrepresentation may be more appropriate.\n\u003c/p\u003e",
          "module": "Distribution.PackageDescription.TH",
          "name": "Version",
          "package": "cabal-file-th",
          "type": "data"
        },
        "index": {
          "description": "Version represents the version of software entity An instance of Eq is provided which implements exact equality modulo reordering of the tags in the versionTags field An instance of Ord is also provided which gives lexicographic ordering on the versionBranch fields i.e etc This is expected to be sufficient for many uses but note that you may need to use more specific ordering for your versioning scheme For example some versioning schemes may include pre-releases which have tags pre1 pre2 and so on and these would need to be taken into account when determining ordering In some cases date ordering may be more appropriate so the application would have to look for date tags in the versionTags field and compare those The bottom line is don always assume that compare and other Ord operations are the right thing for every Version Similarly concrete representations of versions may differ One possible concrete representation is provided see showVersion and parseVersion but depending on the application different concrete representation may be more appropriate",
          "hierarchy": "Distribution PackageDescription TH",
          "module": "Distribution.PackageDescription.TH",
          "name": "Version",
          "package": "cabal-file-th",
          "partial": "Version",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cabal-file-th/docs/Distribution-PackageDescription-TH.html#t:Version"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Distribution.PackageDescription.TH",
          "name": "PackageDescription",
          "package": "cabal-file-th",
          "signature": "PackageDescription",
          "type": "function"
        },
        "index": {
          "hierarchy": "Distribution PackageDescription TH",
          "module": "Distribution.PackageDescription.TH",
          "name": "PackageDescription",
          "package": "cabal-file-th",
          "partial": "Package Description",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-file-th/docs/Distribution-PackageDescription-TH.html#v:PackageDescription"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Distribution.PackageDescription.TH",
          "name": "PackageIdentifier",
          "package": "cabal-file-th",
          "signature": "PackageIdentifier",
          "type": "function"
        },
        "index": {
          "hierarchy": "Distribution PackageDescription TH",
          "module": "Distribution.PackageDescription.TH",
          "name": "PackageIdentifier",
          "package": "cabal-file-th",
          "partial": "Package Identifier",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-file-th/docs/Distribution-PackageDescription-TH.html#v:PackageIdentifier"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Distribution.PackageDescription.TH",
          "name": "Version",
          "package": "cabal-file-th",
          "signature": "Version",
          "type": "function"
        },
        "index": {
          "hierarchy": "Distribution PackageDescription TH",
          "module": "Distribution.PackageDescription.TH",
          "name": "Version",
          "package": "cabal-file-th",
          "partial": "Version",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-file-th/docs/Distribution-PackageDescription-TH.html#v:Version"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Distribution.PackageDescription.TH",
          "name": "author",
          "package": "cabal-file-th",
          "signature": "String",
          "type": "function"
        },
        "index": {
          "hierarchy": "Distribution PackageDescription TH",
          "module": "Distribution.PackageDescription.TH",
          "name": "author",
          "package": "cabal-file-th",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-file-th/docs/Distribution-PackageDescription-TH.html#v:author"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Distribution.PackageDescription.TH",
          "name": "benchmarks",
          "package": "cabal-file-th",
          "signature": "[Benchmark]",
          "type": "function"
        },
        "index": {
          "hierarchy": "Distribution PackageDescription TH",
          "module": "Distribution.PackageDescription.TH",
          "name": "benchmarks",
          "normalized": "[Benchmark]",
          "package": "cabal-file-th",
          "signature": "[Benchmark]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-file-th/docs/Distribution-PackageDescription-TH.html#v:benchmarks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Distribution.PackageDescription.TH",
          "name": "bugReports",
          "package": "cabal-file-th",
          "signature": "String",
          "type": "function"
        },
        "index": {
          "hierarchy": "Distribution PackageDescription TH",
          "module": "Distribution.PackageDescription.TH",
          "name": "bugReports",
          "package": "cabal-file-th",
          "partial": "Reports",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-file-th/docs/Distribution-PackageDescription-TH.html#v:bugReports"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Distribution.PackageDescription.TH",
          "name": "buildDepends",
          "package": "cabal-file-th",
          "signature": "[Dependency]",
          "type": "function"
        },
        "index": {
          "hierarchy": "Distribution PackageDescription TH",
          "module": "Distribution.PackageDescription.TH",
          "name": "buildDepends",
          "normalized": "[Dependency]",
          "package": "cabal-file-th",
          "partial": "Depends",
          "signature": "[Dependency]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-file-th/docs/Distribution-PackageDescription-TH.html#v:buildDepends"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Distribution.PackageDescription.TH",
          "name": "buildType",
          "package": "cabal-file-th",
          "signature": "Maybe BuildType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Distribution PackageDescription TH",
          "module": "Distribution.PackageDescription.TH",
          "name": "buildType",
          "package": "cabal-file-th",
          "partial": "Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-file-th/docs/Distribution-PackageDescription-TH.html#v:buildType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Distribution.PackageDescription.TH",
          "name": "category",
          "package": "cabal-file-th",
          "signature": "String",
          "type": "function"
        },
        "index": {
          "hierarchy": "Distribution PackageDescription TH",
          "module": "Distribution.PackageDescription.TH",
          "name": "category",
          "package": "cabal-file-th",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-file-th/docs/Distribution-PackageDescription-TH.html#v:category"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Distribution.PackageDescription.TH",
          "name": "copyright",
          "package": "cabal-file-th",
          "signature": "String",
          "type": "function"
        },
        "index": {
          "hierarchy": "Distribution PackageDescription TH",
          "module": "Distribution.PackageDescription.TH",
          "name": "copyright",
          "package": "cabal-file-th",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-file-th/docs/Distribution-PackageDescription-TH.html#v:copyright"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCustom fields starting\n with x-, stored in a\n simple assoc-list.\n\u003c/p\u003e",
          "module": "Distribution.PackageDescription.TH",
          "name": "customFieldsPD",
          "package": "cabal-file-th",
          "signature": "[(String, String)]",
          "type": "function"
        },
        "index": {
          "description": "Custom fields starting with stored in simple assoc-list",
          "hierarchy": "Distribution PackageDescription TH",
          "module": "Distribution.PackageDescription.TH",
          "name": "customFieldsPD",
          "normalized": "[(String,String)]",
          "package": "cabal-file-th",
          "partial": "Fields PD",
          "signature": "[(String,String)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-file-th/docs/Distribution-PackageDescription-TH.html#v:customFieldsPD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Distribution.PackageDescription.TH",
          "name": "dataDir",
          "package": "cabal-file-th",
          "signature": "FilePath",
          "type": "function"
        },
        "index": {
          "hierarchy": "Distribution PackageDescription TH",
          "module": "Distribution.PackageDescription.TH",
          "name": "dataDir",
          "package": "cabal-file-th",
          "partial": "Dir",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-file-th/docs/Distribution-PackageDescription-TH.html#v:dataDir"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Distribution.PackageDescription.TH",
          "name": "dataFiles",
          "package": "cabal-file-th",
          "signature": "[FilePath]",
          "type": "function"
        },
        "index": {
          "hierarchy": "Distribution PackageDescription TH",
          "module": "Distribution.PackageDescription.TH",
          "name": "dataFiles",
          "normalized": "[FilePath]",
          "package": "cabal-file-th",
          "partial": "Files",
          "signature": "[FilePath]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-file-th/docs/Distribution-PackageDescription-TH.html#v:dataFiles"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA more verbose description of this package\n\u003c/p\u003e",
          "module": "Distribution.PackageDescription.TH",
          "name": "description",
          "package": "cabal-file-th",
          "signature": "String",
          "type": "function"
        },
        "index": {
          "description": "more verbose description of this package",
          "hierarchy": "Distribution PackageDescription TH",
          "module": "Distribution.PackageDescription.TH",
          "name": "description",
          "package": "cabal-file-th",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-file-th/docs/Distribution-PackageDescription-TH.html#v:description"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Distribution.PackageDescription.TH",
          "name": "executables",
          "package": "cabal-file-th",
          "signature": "[Executable]",
          "type": "function"
        },
        "index": {
          "hierarchy": "Distribution PackageDescription TH",
          "module": "Distribution.PackageDescription.TH",
          "name": "executables",
          "normalized": "[Executable]",
          "package": "cabal-file-th",
          "signature": "[Executable]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-file-th/docs/Distribution-PackageDescription-TH.html#v:executables"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Distribution.PackageDescription.TH",
          "name": "extraSrcFiles",
          "package": "cabal-file-th",
          "signature": "[FilePath]",
          "type": "function"
        },
        "index": {
          "hierarchy": "Distribution PackageDescription TH",
          "module": "Distribution.PackageDescription.TH",
          "name": "extraSrcFiles",
          "normalized": "[FilePath]",
          "package": "cabal-file-th",
          "partial": "Src Files",
          "signature": "[FilePath]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-file-th/docs/Distribution-PackageDescription-TH.html#v:extraSrcFiles"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Distribution.PackageDescription.TH",
          "name": "extraTmpFiles",
          "package": "cabal-file-th",
          "signature": "[FilePath]",
          "type": "function"
        },
        "index": {
          "hierarchy": "Distribution PackageDescription TH",
          "module": "Distribution.PackageDescription.TH",
          "name": "extraTmpFiles",
          "normalized": "[FilePath]",
          "package": "cabal-file-th",
          "partial": "Tmp Files",
          "signature": "[FilePath]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-file-th/docs/Distribution-PackageDescription-TH.html#v:extraTmpFiles"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Distribution.PackageDescription.TH",
          "name": "homepage",
          "package": "cabal-file-th",
          "signature": "String",
          "type": "function"
        },
        "index": {
          "hierarchy": "Distribution PackageDescription TH",
          "module": "Distribution.PackageDescription.TH",
          "name": "homepage",
          "package": "cabal-file-th",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-file-th/docs/Distribution-PackageDescription-TH.html#v:homepage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Distribution.PackageDescription.TH",
          "name": "library",
          "package": "cabal-file-th",
          "signature": "Maybe Library",
          "type": "function"
        },
        "index": {
          "hierarchy": "Distribution PackageDescription TH",
          "module": "Distribution.PackageDescription.TH",
          "name": "library",
          "package": "cabal-file-th",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-file-th/docs/Distribution-PackageDescription-TH.html#v:library"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Distribution.PackageDescription.TH",
          "name": "license",
          "package": "cabal-file-th",
          "signature": "License",
          "type": "function"
        },
        "index": {
          "hierarchy": "Distribution PackageDescription TH",
          "module": "Distribution.PackageDescription.TH",
          "name": "license",
          "package": "cabal-file-th",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-file-th/docs/Distribution-PackageDescription-TH.html#v:license"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Distribution.PackageDescription.TH",
          "name": "licenseFile",
          "package": "cabal-file-th",
          "signature": "FilePath",
          "type": "function"
        },
        "index": {
          "hierarchy": "Distribution PackageDescription TH",
          "module": "Distribution.PackageDescription.TH",
          "name": "licenseFile",
          "package": "cabal-file-th",
          "partial": "File",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-file-th/docs/Distribution-PackageDescription-TH.html#v:licenseFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Distribution.PackageDescription.TH",
          "name": "maintainer",
          "package": "cabal-file-th",
          "signature": "String",
          "type": "function"
        },
        "index": {
          "hierarchy": "Distribution PackageDescription TH",
          "module": "Distribution.PackageDescription.TH",
          "name": "maintainer",
          "package": "cabal-file-th",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-file-th/docs/Distribution-PackageDescription-TH.html#v:maintainer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Distribution.PackageDescription.TH",
          "name": "package",
          "package": "cabal-file-th",
          "signature": "PackageIdentifier",
          "type": "function"
        },
        "index": {
          "hierarchy": "Distribution PackageDescription TH",
          "module": "Distribution.PackageDescription.TH",
          "name": "package",
          "package": "cabal-file-th",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-file-th/docs/Distribution-PackageDescription-TH.html#v:package"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRenders the package variable specified by the function.\n The cabal file interrogated is the first one that is found \n in the current working directory.\n\u003c/p\u003e",
          "module": "Distribution.PackageDescription.TH",
          "name": "packageVariable",
          "package": "cabal-file-th",
          "signature": "(PackageDescription -\u003e a) -\u003e Q Exp",
          "source": "src/Distribution-PackageDescription-TH.html#packageVariable",
          "type": "function"
        },
        "index": {
          "description": "Renders the package variable specified by the function The cabal file interrogated is the first one that is found in the current working directory",
          "hierarchy": "Distribution PackageDescription TH",
          "module": "Distribution.PackageDescription.TH",
          "name": "packageVariable",
          "normalized": "(PackageDescription-\u003ea)-\u003eQ Exp",
          "package": "cabal-file-th",
          "partial": "Variable",
          "signature": "(PackageDescription-\u003ea)-\u003eQ Exp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-file-th/docs/Distribution-PackageDescription-TH.html#v:packageVariable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRenders the package variable specified by the function, from a cabal file\n and the given path.\n\u003c/p\u003e",
          "module": "Distribution.PackageDescription.TH",
          "name": "packageVariableFrom",
          "package": "cabal-file-th",
          "signature": "FilePath -\u003e (PackageDescription -\u003e a) -\u003e Q Exp",
          "source": "src/Distribution-PackageDescription-TH.html#packageVariableFrom",
          "type": "function"
        },
        "index": {
          "description": "Renders the package variable specified by the function from cabal file and the given path",
          "hierarchy": "Distribution PackageDescription TH",
          "module": "Distribution.PackageDescription.TH",
          "name": "packageVariableFrom",
          "normalized": "FilePath-\u003e(PackageDescription-\u003ea)-\u003eQ Exp",
          "package": "cabal-file-th",
          "partial": "Variable From",
          "signature": "FilePath-\u003e(PackageDescription-\u003ea)-\u003eQ Exp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-file-th/docs/Distribution-PackageDescription-TH.html#v:packageVariableFrom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe name of this package, eg. foo\n\u003c/p\u003e",
          "module": "Distribution.PackageDescription.TH",
          "name": "pkgName",
          "package": "cabal-file-th",
          "signature": "PackageName",
          "type": "function"
        },
        "index": {
          "description": "The name of this package eg foo",
          "hierarchy": "Distribution PackageDescription TH",
          "module": "Distribution.PackageDescription.TH",
          "name": "pkgName",
          "package": "cabal-file-th",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-file-th/docs/Distribution-PackageDescription-TH.html#v:pkgName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Distribution.PackageDescription.TH",
          "name": "pkgUrl",
          "package": "cabal-file-th",
          "signature": "String",
          "type": "function"
        },
        "index": {
          "hierarchy": "Distribution PackageDescription TH",
          "module": "Distribution.PackageDescription.TH",
          "name": "pkgUrl",
          "package": "cabal-file-th",
          "partial": "Url",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-file-th/docs/Distribution-PackageDescription-TH.html#v:pkgUrl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe version of this package, eg 1.2\n\u003c/p\u003e",
          "module": "Distribution.PackageDescription.TH",
          "name": "pkgVersion",
          "package": "cabal-file-th",
          "signature": "Version",
          "type": "function"
        },
        "index": {
          "description": "the version of this package eg",
          "hierarchy": "Distribution PackageDescription TH",
          "module": "Distribution.PackageDescription.TH",
          "name": "pkgVersion",
          "package": "cabal-file-th",
          "partial": "Version",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-file-th/docs/Distribution-PackageDescription-TH.html#v:pkgVersion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Distribution.PackageDescription.TH",
          "name": "sourceRepos",
          "package": "cabal-file-th",
          "signature": "[SourceRepo]",
          "type": "function"
        },
        "index": {
          "hierarchy": "Distribution PackageDescription TH",
          "module": "Distribution.PackageDescription.TH",
          "name": "sourceRepos",
          "normalized": "[SourceRepo]",
          "package": "cabal-file-th",
          "partial": "Repos",
          "signature": "[SourceRepo]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-file-th/docs/Distribution-PackageDescription-TH.html#v:sourceRepos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe version of the Cabal spec that this package description uses.\n For historical reasons this is specified with a version range but\n only ranges of the form \u003ccode\u003e\u003e= v\u003c/code\u003e make sense. We are in the process of\n transitioning to specifying just a single version, not a range.\n\u003c/p\u003e",
          "module": "Distribution.PackageDescription.TH",
          "name": "specVersionRaw",
          "package": "cabal-file-th",
          "signature": "Either Version VersionRange",
          "type": "function"
        },
        "index": {
          "description": "The version of the Cabal spec that this package description uses For historical reasons this is specified with version range but only ranges of the form make sense We are in the process of transitioning to specifying just single version not range",
          "hierarchy": "Distribution PackageDescription TH",
          "module": "Distribution.PackageDescription.TH",
          "name": "specVersionRaw",
          "package": "cabal-file-th",
          "partial": "Version Raw",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-file-th/docs/Distribution-PackageDescription-TH.html#v:specVersionRaw"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Distribution.PackageDescription.TH",
          "name": "stability",
          "package": "cabal-file-th",
          "signature": "String",
          "type": "function"
        },
        "index": {
          "hierarchy": "Distribution PackageDescription TH",
          "module": "Distribution.PackageDescription.TH",
          "name": "stability",
          "package": "cabal-file-th",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-file-th/docs/Distribution-PackageDescription-TH.html#v:stability"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA one-line summary of this package\n\u003c/p\u003e",
          "module": "Distribution.PackageDescription.TH",
          "name": "synopsis",
          "package": "cabal-file-th",
          "signature": "String",
          "type": "function"
        },
        "index": {
          "description": "one-line summary of this package",
          "hierarchy": "Distribution PackageDescription TH",
          "module": "Distribution.PackageDescription.TH",
          "name": "synopsis",
          "package": "cabal-file-th",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-file-th/docs/Distribution-PackageDescription-TH.html#v:synopsis"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Distribution.PackageDescription.TH",
          "name": "testSuites",
          "package": "cabal-file-th",
          "signature": "[TestSuite]",
          "type": "function"
        },
        "index": {
          "hierarchy": "Distribution PackageDescription TH",
          "module": "Distribution.PackageDescription.TH",
          "name": "testSuites",
          "normalized": "[TestSuite]",
          "package": "cabal-file-th",
          "partial": "Suites",
          "signature": "[TestSuite]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-file-th/docs/Distribution-PackageDescription-TH.html#v:testSuites"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Distribution.PackageDescription.TH",
          "name": "testedWith",
          "package": "cabal-file-th",
          "signature": "[(CompilerFlavor, VersionRange)]",
          "type": "function"
        },
        "index": {
          "hierarchy": "Distribution PackageDescription TH",
          "module": "Distribution.PackageDescription.TH",
          "name": "testedWith",
          "normalized": "[(CompilerFlavor,VersionRange)]",
          "package": "cabal-file-th",
          "partial": "With",
          "signature": "[(CompilerFlavor,VersionRange)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-file-th/docs/Distribution-PackageDescription-TH.html#v:testedWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe numeric branch for this version.  This reflects the\n fact that most software versions are tree-structured; there\n is a main trunk which is tagged with versions at various\n points (1,2,3...), and the first branch off the trunk after\n version 3 is 3.1, the second branch off the trunk after\n version 3 is 3.2, and so on.  The tree can be branched\n arbitrarily, just by adding more digits.\n\u003c/p\u003e\u003cp\u003eWe represent the branch as a list of \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e, so\n version 3.2.1 becomes [3,2,1].  Lexicographic ordering\n (i.e. the default instance of \u003ccode\u003e\u003ca\u003eOrd\u003c/a\u003e\u003c/code\u003e for \u003ccode\u003e[Int]\u003c/code\u003e) gives\n the natural ordering of branches.\n\u003c/p\u003e",
          "module": "Distribution.PackageDescription.TH",
          "name": "versionBranch",
          "package": "cabal-file-th",
          "signature": "[Int]",
          "type": "function"
        },
        "index": {
          "description": "The numeric branch for this version This reflects the fact that most software versions are tree-structured there is main trunk which is tagged with versions at various points and the first branch off the trunk after version is the second branch off the trunk after version is and so on The tree can be branched arbitrarily just by adding more digits We represent the branch as list of Int so version becomes Lexicographic ordering i.e the default instance of Ord for Int gives the natural ordering of branches",
          "hierarchy": "Distribution PackageDescription TH",
          "module": "Distribution.PackageDescription.TH",
          "name": "versionBranch",
          "normalized": "[Int]",
          "package": "cabal-file-th",
          "partial": "Branch",
          "signature": "[Int]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-file-th/docs/Distribution-PackageDescription-TH.html#v:versionBranch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA version can be tagged with an arbitrary list of strings.\n The interpretation of the list of tags is entirely dependent\n on the entity that this version applies to.\n\u003c/p\u003e",
          "module": "Distribution.PackageDescription.TH",
          "name": "versionTags",
          "package": "cabal-file-th",
          "signature": "[String]",
          "type": "function"
        },
        "index": {
          "description": "version can be tagged with an arbitrary list of strings The interpretation of the list of tags is entirely dependent on the entity that this version applies to",
          "hierarchy": "Distribution PackageDescription TH",
          "module": "Distribution.PackageDescription.TH",
          "name": "versionTags",
          "normalized": "[String]",
          "package": "cabal-file-th",
          "partial": "Tags",
          "signature": "[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-file-th/docs/Distribution-PackageDescription-TH.html#v:versionTags"
      }
    }
  ]
]