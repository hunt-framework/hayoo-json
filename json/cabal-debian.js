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
        "word": "cabal-debian"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Algorithm.Diff.Context",
          "name": "Context",
          "package": "cabal-debian",
          "source": "src/Data-Algorithm-Diff-Context.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Algorithm Diff Context",
          "module": "Data.Algorithm.Diff.Context",
          "name": "Context",
          "package": "cabal-debian",
          "partial": "Context",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Data-Algorithm-Diff-Context.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDo a grouped diff and then turn it into a list of hunks, where\n each hunk is a grouped diff with at most N elements of common\n context around each one.\n\u003c/p\u003e",
          "module": "Data.Algorithm.Diff.Context",
          "name": "contextDiff",
          "package": "cabal-debian",
          "signature": "Int -\u003e [a] -\u003e [a] -\u003e [[Diff [a]]]",
          "source": "src/Data-Algorithm-Diff-Context.html#contextDiff",
          "type": "function"
        },
        "index": {
          "description": "Do grouped diff and then turn it into list of hunks where each hunk is grouped diff with at most elements of common context around each one",
          "hierarchy": "Data Algorithm Diff Context",
          "module": "Data.Algorithm.Diff.Context",
          "name": "contextDiff",
          "normalized": "Int-\u003e[a]-\u003e[a]-\u003e[[Diff[a]]]",
          "package": "cabal-debian",
          "partial": "Diff",
          "signature": "Int-\u003e[a]-\u003e[a]-\u003e[[Diff[a]]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Data-Algorithm-Diff-Context.html#v:contextDiff"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGroup the elements whose adjacent pairs satisfy the predicate.\n Differs from groupBy because the predicate does not have to define\n a total ordering.\n\u003c/p\u003e",
          "module": "Data.Algorithm.Diff.Context",
          "name": "groups",
          "package": "cabal-debian",
          "signature": "(a -\u003e a -\u003e Bool) -\u003e [a] -\u003e [[a]]",
          "source": "src/Data-Algorithm-Diff-Context.html#groups",
          "type": "function"
        },
        "index": {
          "description": "Group the elements whose adjacent pairs satisfy the predicate Differs from groupBy because the predicate does not have to define total ordering",
          "hierarchy": "Data Algorithm Diff Context",
          "module": "Data.Algorithm.Diff.Context",
          "name": "groups",
          "normalized": "(a-\u003ea-\u003eBool)-\u003e[a]-\u003e[[a]]",
          "package": "cabal-debian",
          "signature": "(a-\u003ea-\u003eBool)-\u003e[a]-\u003e[[a]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Data-Algorithm-Diff-Context.html#v:groups"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Algorithm.Diff.Pretty",
          "name": "Pretty",
          "package": "cabal-debian",
          "source": "src/Data-Algorithm-Diff-Pretty.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Algorithm Diff Pretty",
          "module": "Data.Algorithm.Diff.Pretty",
          "name": "Pretty",
          "package": "cabal-debian",
          "partial": "Pretty",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Data-Algorithm-Diff-Pretty.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFormat the output of \u003ccode\u003econtextDiff\u003c/code\u003e to look approximately like the\n output of the unix diff command.\n\u003c/p\u003e",
          "module": "Data.Algorithm.Diff.Pretty",
          "name": "prettyDiff",
          "package": "cabal-debian",
          "signature": "a -\u003e b -\u003e [[Diff [c]]] -\u003e Doc",
          "source": "src/Data-Algorithm-Diff-Pretty.html#prettyDiff",
          "type": "function"
        },
        "index": {
          "description": "Format the output of contextDiff to look approximately like the output of the unix diff command",
          "hierarchy": "Data Algorithm Diff Pretty",
          "module": "Data.Algorithm.Diff.Pretty",
          "name": "prettyDiff",
          "normalized": "a-\u003eb-\u003e[[Diff[c]]]-\u003eDoc",
          "package": "cabal-debian",
          "partial": "Diff",
          "signature": "a-\u003eb-\u003e[[Diff[c]]]-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Data-Algorithm-Diff-Pretty.html#v:prettyDiff"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCompute the debianization of a cabal package.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Debian.Debianize.BuildDependencies",
          "name": "BuildDependencies",
          "package": "cabal-debian",
          "source": "src/Debian-Debianize-BuildDependencies.html",
          "type": "module"
        },
        "index": {
          "description": "Compute the debianization of cabal package",
          "hierarchy": "Debian Debianize BuildDependencies",
          "module": "Debian.Debianize.BuildDependencies",
          "name": "BuildDependencies",
          "package": "cabal-debian",
          "partial": "Build Dependencies",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-BuildDependencies.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Debianize.BuildDependencies",
          "name": "debianBuildDeps",
          "package": "cabal-debian",
          "signature": "PackageDescription -\u003e DebT m Relations",
          "source": "src/Debian-Debianize-BuildDependencies.html#debianBuildDeps",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debian Debianize BuildDependencies",
          "module": "Debian.Debianize.BuildDependencies",
          "name": "debianBuildDeps",
          "normalized": "PackageDescription-\u003eDebT a Relations",
          "package": "cabal-debian",
          "partial": "Build Deps",
          "signature": "PackageDescription-\u003eDebT m Relations",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-BuildDependencies.html#v:debianBuildDeps"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Debianize.BuildDependencies",
          "name": "debianBuildDepsIndep",
          "package": "cabal-debian",
          "signature": "PackageDescription -\u003e DebT m Relations",
          "source": "src/Debian-Debianize-BuildDependencies.html#debianBuildDepsIndep",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debian Debianize BuildDependencies",
          "module": "Debian.Debianize.BuildDependencies",
          "name": "debianBuildDepsIndep",
          "normalized": "PackageDescription-\u003eDebT a Relations",
          "package": "cabal-debian",
          "partial": "Build Deps Indep",
          "signature": "PackageDescription-\u003eDebT m Relations",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-BuildDependencies.html#v:debianBuildDepsIndep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDetermine whether a specific version of a Haskell package is\n bundled with into this particular version of the given compiler.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Debian.Debianize.Bundled",
          "name": "Bundled",
          "package": "cabal-debian",
          "source": "src/Debian-Debianize-Bundled.html",
          "type": "module"
        },
        "index": {
          "description": "Determine whether specific version of Haskell package is bundled with into this particular version of the given compiler",
          "hierarchy": "Debian Debianize Bundled",
          "module": "Debian.Debianize.Bundled",
          "name": "Bundled",
          "package": "cabal-debian",
          "partial": "Bundled",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Bundled.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Debianize.Bundled",
          "name": "ghcBuiltIn",
          "package": "cabal-debian",
          "signature": "CompilerId -\u003e PackageName -\u003e Bool",
          "source": "src/Debian-Debianize-Bundled.html#ghcBuiltIn",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debian Debianize Bundled",
          "module": "Debian.Debianize.Bundled",
          "name": "ghcBuiltIn",
          "normalized": "CompilerId-\u003ePackageName-\u003eBool",
          "package": "cabal-debian",
          "partial": "Built In",
          "signature": "CompilerId-\u003ePackageName-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Bundled.html#v:ghcBuiltIn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Debianize.Changelog",
          "name": "Changelog",
          "package": "cabal-debian",
          "source": "src/Debian-Debianize-Changelog.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Debian Debianize Changelog",
          "module": "Debian.Debianize.Changelog",
          "name": "Changelog",
          "package": "cabal-debian",
          "partial": "Changelog",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Changelog.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFilter out versions newer than the given one.\n\u003c/p\u003e",
          "module": "Debian.Debianize.Changelog",
          "name": "dropFutureEntries",
          "package": "cabal-debian",
          "signature": "DebianVersion -\u003e ChangeLog -\u003e ChangeLog",
          "source": "src/Debian-Debianize-Changelog.html#dropFutureEntries",
          "type": "function"
        },
        "index": {
          "description": "Filter out versions newer than the given one",
          "hierarchy": "Debian Debianize Changelog",
          "module": "Debian.Debianize.Changelog",
          "name": "dropFutureEntries",
          "normalized": "DebianVersion-\u003eChangeLog-\u003eChangeLog",
          "package": "cabal-debian",
          "partial": "Future Entries",
          "signature": "DebianVersion-\u003eChangeLog-\u003eChangeLog",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Changelog.html#v:dropFutureEntries"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a filter to the version numbers of the changelog entries.\n\u003c/p\u003e",
          "module": "Debian.Debianize.Changelog",
          "name": "filterEntries",
          "package": "cabal-debian",
          "signature": "(DebianVersion -\u003e Bool) -\u003e ChangeLog -\u003e ChangeLog",
          "source": "src/Debian-Debianize-Changelog.html#filterEntries",
          "type": "function"
        },
        "index": {
          "description": "Apply filter to the version numbers of the changelog entries",
          "hierarchy": "Debian Debianize Changelog",
          "module": "Debian.Debianize.Changelog",
          "name": "filterEntries",
          "normalized": "(DebianVersion-\u003eBool)-\u003eChangeLog-\u003eChangeLog",
          "package": "cabal-debian",
          "partial": "Entries",
          "signature": "(DebianVersion-\u003eBool)-\u003eChangeLog-\u003eChangeLog",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Changelog.html#v:filterEntries"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind the log entry with the given version.\n\u003c/p\u003e",
          "module": "Debian.Debianize.Changelog",
          "name": "findChangelogEntry",
          "package": "cabal-debian",
          "signature": "DebianVersion -\u003e ChangeLog -\u003e Maybe ChangeLogEntry",
          "source": "src/Debian-Debianize-Changelog.html#findChangelogEntry",
          "type": "function"
        },
        "index": {
          "description": "Find the log entry with the given version",
          "hierarchy": "Debian Debianize Changelog",
          "module": "Debian.Debianize.Changelog",
          "name": "findChangelogEntry",
          "normalized": "DebianVersion-\u003eChangeLog-\u003eMaybe ChangeLogEntry",
          "package": "cabal-debian",
          "partial": "Changelog Entry",
          "signature": "DebianVersion-\u003eChangeLog-\u003eMaybe ChangeLogEntry",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Changelog.html#v:findChangelogEntry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Debianize.Changelog",
          "name": "mergeChangelogEntries",
          "package": "cabal-debian",
          "signature": "ChangeLogEntry -\u003e ChangeLogEntry -\u003e ChangeLogEntry",
          "source": "src/Debian-Debianize-Changelog.html#mergeChangelogEntries",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debian Debianize Changelog",
          "module": "Debian.Debianize.Changelog",
          "name": "mergeChangelogEntries",
          "normalized": "ChangeLogEntry-\u003eChangeLogEntry-\u003eChangeLogEntry",
          "package": "cabal-debian",
          "partial": "Changelog Entries",
          "signature": "ChangeLogEntry-\u003eChangeLogEntry-\u003eChangeLogEntry",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Changelog.html#v:mergeChangelogEntries"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Debianize.DebianName",
          "name": "DebianName",
          "package": "cabal-debian",
          "source": "src/Debian-Debianize-DebianName.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Debian Debianize DebianName",
          "module": "Debian.Debianize.DebianName",
          "name": "DebianName",
          "package": "cabal-debian",
          "partial": "Debian Name",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-DebianName.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBuild the Debian package name for a given package type.\n\u003c/p\u003e",
          "module": "Debian.Debianize.DebianName",
          "name": "debianName",
          "package": "cabal-debian",
          "signature": "PackageType -\u003e DebT m name",
          "source": "src/Debian-Debianize-DebianName.html#debianName",
          "type": "function"
        },
        "index": {
          "description": "Build the Debian package name for given package type",
          "hierarchy": "Debian Debianize DebianName",
          "module": "Debian.Debianize.DebianName",
          "name": "debianName",
          "normalized": "PackageType-\u003eDebT a b",
          "package": "cabal-debian",
          "partial": "Name",
          "signature": "PackageType-\u003eDebT m name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-DebianName.html#v:debianName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap all versions of Cabal package pname to Debian package dname.\n Not really a debian package name, but the name of a cabal package\n that maps to the debian package name we want.  (Should this be a\n SrcPkgName?)\n\u003c/p\u003e",
          "module": "[\"Debian.Debianize.DebianName\",\"Debian.Debianize\"]",
          "name": "mapCabal",
          "package": "cabal-debian",
          "signature": "PackageName -\u003e String -\u003e DebT m ()",
          "source": "src/Debian-Debianize-DebianName.html#mapCabal",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-DebianName.html#v:mapCabal\",\"http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize.html#v:mapCabal\"]"
        },
        "index": {
          "description": "Map all versions of Cabal package pname to Debian package dname Not really debian package name but the name of cabal package that maps to the debian package name we want Should this be SrcPkgName",
          "hierarchy": "Debian Debianize DebianName",
          "module": "Debian.Debianize.DebianName",
          "name": "mapCabal",
          "normalized": "PackageName-\u003eString-\u003eDebT a()",
          "package": "cabal-debian",
          "partial": "Cabal",
          "signature": "PackageName-\u003eString-\u003eDebT m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-DebianName.html#v:mapCabal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBuild a debian package name from a cabal package name and a\n debian package type.  Unfortunately, this does not enforce the\n correspondence between the PackageType value and the name type, so\n it can return nonsense like (SrcPkgName \u003ca\u003elibghc-debian-dev\u003c/a\u003e).\n\u003c/p\u003e",
          "module": "Debian.Debianize.DebianName",
          "name": "mkPkgName",
          "package": "cabal-debian",
          "signature": "PackageName -\u003e PackageType -\u003e name",
          "source": "src/Debian-Debianize-DebianName.html#mkPkgName",
          "type": "function"
        },
        "index": {
          "description": "Build debian package name from cabal package name and debian package type Unfortunately this does not enforce the correspondence between the PackageType value and the name type so it can return nonsense like SrcPkgName libghc-debian-dev",
          "hierarchy": "Debian Debianize DebianName",
          "module": "Debian.Debianize.DebianName",
          "name": "mkPkgName",
          "normalized": "PackageName-\u003ePackageType-\u003ea",
          "package": "cabal-debian",
          "partial": "Pkg Name",
          "signature": "PackageName-\u003ePackageType-\u003ename",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-DebianName.html#v:mkPkgName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Debianize.DebianName",
          "name": "mkPkgName'",
          "package": "cabal-debian",
          "signature": "String -\u003e PackageType -\u003e name",
          "source": "src/Debian-Debianize-DebianName.html#mkPkgName%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debian Debianize DebianName",
          "module": "Debian.Debianize.DebianName",
          "name": "mkPkgName'",
          "normalized": "String-\u003ePackageType-\u003ea",
          "package": "cabal-debian",
          "partial": "Pkg Name'",
          "signature": "String-\u003ePackageType-\u003ename",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-DebianName.html#v:mkPkgName-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap versions less than ver of Cabal Package pname to Debian package ltname\n\u003c/p\u003e",
          "module": "[\"Debian.Debianize.DebianName\",\"Debian.Debianize\"]",
          "name": "splitCabal",
          "package": "cabal-debian",
          "signature": "PackageName -\u003e String -\u003e Version -\u003e DebT m ()",
          "source": "src/Debian-Debianize-DebianName.html#splitCabal",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-DebianName.html#v:splitCabal\",\"http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize.html#v:splitCabal\"]"
        },
        "index": {
          "description": "Map versions less than ver of Cabal Package pname to Debian package ltname",
          "hierarchy": "Debian Debianize DebianName",
          "module": "Debian.Debianize.DebianName",
          "name": "splitCabal",
          "normalized": "PackageName-\u003eString-\u003eVersion-\u003eDebT a()",
          "package": "cabal-debian",
          "partial": "Cabal",
          "signature": "PackageName-\u003eString-\u003eVersion-\u003eDebT m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-DebianName.html#v:splitCabal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Debianize.Details",
          "name": "Details",
          "package": "cabal-debian",
          "source": "src/Debian-Debianize-Details.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Debian Debianize Details",
          "module": "Debian.Debianize.Details",
          "name": "Details",
          "package": "cabal-debian",
          "partial": "Details",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Details.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Debian.Debianize.Details\",\"Debian.Debianize\"]",
          "name": "debianDefaultAtoms",
          "package": "cabal-debian",
          "signature": "DebT m ()",
          "source": "src/Debian-Debianize-Details.html#debianDefaultAtoms",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Details.html#v:debianDefaultAtoms\",\"http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize.html#v:debianDefaultAtoms\"]"
        },
        "index": {
          "hierarchy": "Debian Debianize Details",
          "module": "Debian.Debianize.Details",
          "name": "debianDefaultAtoms",
          "normalized": "DebT a()",
          "package": "cabal-debian",
          "partial": "Default Atoms",
          "signature": "DebT m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Details.html#v:debianDefaultAtoms"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Debian.Debianize.Details\",\"Debian.Debianize\"]",
          "name": "seereasonDefaultAtoms",
          "package": "cabal-debian",
          "signature": "DebT m ()",
          "source": "src/Debian-Debianize-Details.html#seereasonDefaultAtoms",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Details.html#v:seereasonDefaultAtoms\",\"http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize.html#v:seereasonDefaultAtoms\"]"
        },
        "index": {
          "hierarchy": "Debian Debianize Details",
          "module": "Debian.Debianize.Details",
          "name": "seereasonDefaultAtoms",
          "normalized": "DebT a()",
          "package": "cabal-debian",
          "partial": "Default Atoms",
          "signature": "DebT m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Details.html#v:seereasonDefaultAtoms"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eConvert a Debianization into a list of files that can then be\n written out.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Debian.Debianize.Files",
          "name": "Files",
          "package": "cabal-debian",
          "source": "src/Debian-Debianize-Files.html",
          "type": "module"
        },
        "index": {
          "description": "Convert Debianization into list of files that can then be written out",
          "hierarchy": "Debian Debianize Files",
          "module": "Debian.Debianize.Files",
          "name": "Files",
          "package": "cabal-debian",
          "partial": "Files",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Files.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTurn the Debianization into a list of files, making sure the text\n associated with each path is unique.  Assumes that\n finalizeDebianization has already been called.  (Yes, I'm\n considering building one into the other, but it is handy to look at\n the Debianization produced by finalizeDebianization in the unit\n tests.)\n\u003c/p\u003e",
          "module": "Debian.Debianize.Files",
          "name": "debianizationFileMap",
          "package": "cabal-debian",
          "signature": "DebT m (Map FilePath Text)",
          "source": "src/Debian-Debianize-Files.html#debianizationFileMap",
          "type": "function"
        },
        "index": {
          "description": "Turn the Debianization into list of files making sure the text associated with each path is unique Assumes that finalizeDebianization has already been called Yes considering building one into the other but it is handy to look at the Debianization produced by finalizeDebianization in the unit tests",
          "hierarchy": "Debian Debianize Files",
          "module": "Debian.Debianize.Files",
          "name": "debianizationFileMap",
          "package": "cabal-debian",
          "partial": "File Map",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Files.html#v:debianizationFileMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCompute the debianization of a cabal package.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Debian.Debianize.Finalize",
          "name": "Finalize",
          "package": "cabal-debian",
          "source": "src/Debian-Debianize-Finalize.html",
          "type": "module"
        },
        "index": {
          "description": "Compute the debianization of cabal package",
          "hierarchy": "Debian Debianize Finalize",
          "module": "Debian.Debianize.Finalize",
          "name": "Finalize",
          "package": "cabal-debian",
          "partial": "Finalize",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Finalize.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven an Atoms value, get any additional configuration\n information from the environment, read the cabal package\n description and possibly the debian/changelog file, then generate\n and return the new debianization (along with the data directory\n computed from the cabal package description.)\n\u003c/p\u003e",
          "module": "[\"Debian.Debianize.Finalize\",\"Debian.Debianize\"]",
          "name": "debianization",
          "package": "cabal-debian",
          "signature": "Top -\u003e DebT IO () -\u003e DebT IO () -\u003e DebT IO ()",
          "source": "src/Debian-Debianize-Finalize.html#debianization",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Finalize.html#v:debianization\",\"http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize.html#v:debianization\"]"
        },
        "index": {
          "description": "Given an Atoms value get any additional configuration information from the environment read the cabal package description and possibly the debian changelog file then generate and return the new debianization along with the data directory computed from the cabal package description",
          "hierarchy": "Debian Debianize Finalize",
          "module": "Debian.Debianize.Finalize",
          "name": "debianization",
          "normalized": "Top-\u003eDebT IO()-\u003eDebT IO()-\u003eDebT IO()",
          "package": "cabal-debian",
          "signature": "Top-\u003eDebT IO()-\u003eDebT IO()-\u003eDebT IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Finalize.html#v:debianization"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDo some light IO and call finalizeDebianization.\n\u003c/p\u003e",
          "module": "Debian.Debianize.Finalize",
          "name": "finalizeDebianization'",
          "package": "cabal-debian",
          "signature": "DebT m ()",
          "source": "src/Debian-Debianize-Finalize.html#finalizeDebianization%27",
          "type": "function"
        },
        "index": {
          "description": "Do some light IO and call finalizeDebianization",
          "hierarchy": "Debian Debianize Finalize",
          "module": "Debian.Debianize.Finalize",
          "name": "finalizeDebianization'",
          "normalized": "DebT a()",
          "package": "cabal-debian",
          "partial": "Debianization'",
          "signature": "DebT m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Finalize.html#v:finalizeDebianization-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThings that seem like they could be clients of this library, but\n are instead included as part of the library.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Debian.Debianize.Goodies",
          "name": "Goodies",
          "package": "cabal-debian",
          "source": "src/Debian-Debianize-Goodies.html",
          "type": "module"
        },
        "index": {
          "description": "Things that seem like they could be clients of this library but are instead included as part of the library",
          "hierarchy": "Debian Debianize Goodies",
          "module": "Debian.Debianize.Goodies",
          "name": "Goodies",
          "package": "cabal-debian",
          "partial": "Goodies",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Goodies.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Debianize.Goodies",
          "name": "backupAtoms",
          "package": "cabal-debian",
          "signature": "BinPkgName -\u003e String -\u003e Atoms -\u003e Atoms",
          "source": "src/Debian-Debianize-Goodies.html#backupAtoms",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debian Debianize Goodies",
          "module": "Debian.Debianize.Goodies",
          "name": "backupAtoms",
          "normalized": "BinPkgName-\u003eString-\u003eAtoms-\u003eAtoms",
          "package": "cabal-debian",
          "partial": "Atoms",
          "signature": "BinPkgName-\u003eString-\u003eAtoms-\u003eAtoms",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Goodies.html#v:backupAtoms"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Debianize.Goodies",
          "name": "describe",
          "package": "cabal-debian",
          "signature": "BinPkgName -\u003e DebT m Text",
          "source": "src/Debian-Debianize-Goodies.html#describe",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debian Debianize Goodies",
          "module": "Debian.Debianize.Goodies",
          "name": "describe",
          "normalized": "BinPkgName-\u003eDebT a Text",
          "package": "cabal-debian",
          "signature": "BinPkgName-\u003eDebT m Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Goodies.html#v:describe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd a debian binary package to the debianization containing a cabal executable file set up to be a backup script.\n\u003c/p\u003e",
          "module": "[\"Debian.Debianize.Goodies\",\"Debian.Debianize\"]",
          "name": "doBackups",
          "package": "cabal-debian",
          "signature": "BinPkgName -\u003e String -\u003e DebT m ()",
          "source": "src/Debian-Debianize-Goodies.html#doBackups",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Goodies.html#v:doBackups\",\"http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize.html#v:doBackups\"]"
        },
        "index": {
          "description": "Add debian binary package to the debianization containing cabal executable file set up to be backup script",
          "hierarchy": "Debian Debianize Goodies",
          "module": "Debian.Debianize.Goodies",
          "name": "doBackups",
          "normalized": "BinPkgName-\u003eString-\u003eDebT a()",
          "package": "cabal-debian",
          "partial": "Backups",
          "signature": "BinPkgName-\u003eString-\u003eDebT m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Goodies.html#v:doBackups"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd a debian binary package to the debianization containing a cabal executable file.\n\u003c/p\u003e",
          "module": "[\"Debian.Debianize.Goodies\",\"Debian.Debianize\"]",
          "name": "doExecutable",
          "package": "cabal-debian",
          "signature": "BinPkgName -\u003e InstallFile -\u003e DebT m ()",
          "source": "src/Debian-Debianize-Goodies.html#doExecutable",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Goodies.html#v:doExecutable\",\"http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize.html#v:doExecutable\"]"
        },
        "index": {
          "description": "Add debian binary package to the debianization containing cabal executable file",
          "hierarchy": "Debian Debianize Goodies",
          "module": "Debian.Debianize.Goodies",
          "name": "doExecutable",
          "normalized": "BinPkgName-\u003eInstallFile-\u003eDebT a()",
          "package": "cabal-debian",
          "partial": "Executable",
          "signature": "BinPkgName-\u003eInstallFile-\u003eDebT m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Goodies.html#v:doExecutable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd a debian binary package to the debianization containing a cabal executable file set up to be a server.\n\u003c/p\u003e",
          "module": "[\"Debian.Debianize.Goodies\",\"Debian.Debianize\"]",
          "name": "doServer",
          "package": "cabal-debian",
          "signature": "BinPkgName -\u003e Server -\u003e DebT m ()",
          "source": "src/Debian-Debianize-Goodies.html#doServer",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Goodies.html#v:doServer\",\"http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize.html#v:doServer\"]"
        },
        "index": {
          "description": "Add debian binary package to the debianization containing cabal executable file set up to be server",
          "hierarchy": "Debian Debianize Goodies",
          "module": "Debian.Debianize.Goodies",
          "name": "doServer",
          "normalized": "BinPkgName-\u003eServer-\u003eDebT a()",
          "package": "cabal-debian",
          "partial": "Server",
          "signature": "BinPkgName-\u003eServer-\u003eDebT m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Goodies.html#v:doServer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd a debian binary package to the debianization containing a cabal executable file set up to be a web site.\n\u003c/p\u003e",
          "module": "[\"Debian.Debianize.Goodies\",\"Debian.Debianize\"]",
          "name": "doWebsite",
          "package": "cabal-debian",
          "signature": "BinPkgName -\u003e Site -\u003e DebT m ()",
          "source": "src/Debian-Debianize-Goodies.html#doWebsite",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Goodies.html#v:doWebsite\",\"http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize.html#v:doWebsite\"]"
        },
        "index": {
          "description": "Add debian binary package to the debianization containing cabal executable file set up to be web site",
          "hierarchy": "Debian Debianize Goodies",
          "module": "Debian.Debianize.Goodies",
          "name": "doWebsite",
          "normalized": "BinPkgName-\u003eSite-\u003eDebT a()",
          "package": "cabal-debian",
          "partial": "Website",
          "signature": "BinPkgName-\u003eSite-\u003eDebT m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Goodies.html#v:doWebsite"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Debianize.Goodies",
          "name": "execAtoms",
          "package": "cabal-debian",
          "signature": "BinPkgName -\u003e InstallFile -\u003e Atoms -\u003e Atoms",
          "source": "src/Debian-Debianize-Goodies.html#execAtoms",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debian Debianize Goodies",
          "module": "Debian.Debianize.Goodies",
          "name": "execAtoms",
          "normalized": "BinPkgName-\u003eInstallFile-\u003eAtoms-\u003eAtoms",
          "package": "cabal-debian",
          "partial": "Atoms",
          "signature": "BinPkgName-\u003eInstallFile-\u003eAtoms-\u003eAtoms",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Goodies.html#v:execAtoms"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBuild a suitable value for the head of the rules file.\n\u003c/p\u003e",
          "module": "Debian.Debianize.Goodies",
          "name": "makeRulesHead",
          "package": "cabal-debian",
          "signature": "DebT m Text",
          "source": "src/Debian-Debianize-Goodies.html#makeRulesHead",
          "type": "function"
        },
        "index": {
          "description": "Build suitable value for the head of the rules file",
          "hierarchy": "Debian Debianize Goodies",
          "module": "Debian.Debianize.Goodies",
          "name": "makeRulesHead",
          "package": "cabal-debian",
          "partial": "Rules Head",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Goodies.html#v:makeRulesHead"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Debianize.Goodies",
          "name": "oldClckwrksServerFlags",
          "package": "cabal-debian",
          "signature": "Server -\u003e [String]",
          "source": "src/Debian-Debianize-Goodies.html#oldClckwrksServerFlags",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debian Debianize Goodies",
          "module": "Debian.Debianize.Goodies",
          "name": "oldClckwrksServerFlags",
          "normalized": "Server-\u003e[String]",
          "package": "cabal-debian",
          "partial": "Clckwrks Server Flags",
          "signature": "Server-\u003e[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Goodies.html#v:oldClckwrksServerFlags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Debianize.Goodies",
          "name": "oldClckwrksSiteFlags",
          "package": "cabal-debian",
          "signature": "Site -\u003e [String]",
          "source": "src/Debian-Debianize-Goodies.html#oldClckwrksSiteFlags",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debian Debianize Goodies",
          "module": "Debian.Debianize.Goodies",
          "name": "oldClckwrksSiteFlags",
          "normalized": "Site-\u003e[String]",
          "package": "cabal-debian",
          "partial": "Clckwrks Site Flags",
          "signature": "Site-\u003e[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Goodies.html#v:oldClckwrksSiteFlags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Debianize.Goodies",
          "name": "serverAtoms",
          "package": "cabal-debian",
          "signature": "BinPkgName -\u003e Server -\u003e Bool -\u003e Atoms -\u003e Atoms",
          "source": "src/Debian-Debianize-Goodies.html#serverAtoms",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debian Debianize Goodies",
          "module": "Debian.Debianize.Goodies",
          "name": "serverAtoms",
          "normalized": "BinPkgName-\u003eServer-\u003eBool-\u003eAtoms-\u003eAtoms",
          "package": "cabal-debian",
          "partial": "Atoms",
          "signature": "BinPkgName-\u003eServer-\u003eBool-\u003eAtoms-\u003eAtoms",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Goodies.html#v:serverAtoms"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Debianize.Goodies",
          "name": "siteAtoms",
          "package": "cabal-debian",
          "signature": "BinPkgName -\u003e Site -\u003e Atoms -\u003e Atoms",
          "source": "src/Debian-Debianize-Goodies.html#siteAtoms",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debian Debianize Goodies",
          "module": "Debian.Debianize.Goodies",
          "name": "siteAtoms",
          "normalized": "BinPkgName-\u003eSite-\u003eAtoms-\u003eAtoms",
          "package": "cabal-debian",
          "partial": "Atoms",
          "signature": "BinPkgName-\u003eSite-\u003eAtoms-\u003eAtoms",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Goodies.html#v:siteAtoms"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate equals dependencies.  For each pair (A, B), use dpkg-query\n to find out B's version number, version B.  Then write a rule into\n P's .substvar that makes P require that that exact version of A,\n and another that makes P conflict with any older version of A.\n\u003c/p\u003e",
          "module": "[\"Debian.Debianize.Goodies\",\"Debian.Debianize\"]",
          "name": "tightDependencyFixup",
          "package": "cabal-debian",
          "signature": "[(BinPkgName, BinPkgName)] -\u003e BinPkgName -\u003e DebT m ()",
          "source": "src/Debian-Debianize-Goodies.html#tightDependencyFixup",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Goodies.html#v:tightDependencyFixup\",\"http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize.html#v:tightDependencyFixup\"]"
        },
        "index": {
          "description": "Create equals dependencies For each pair use dpkg-query to find out version number version Then write rule into substvar that makes require that that exact version of and another that makes conflict with any older version of",
          "hierarchy": "Debian Debianize Goodies",
          "module": "Debian.Debianize.Goodies",
          "name": "tightDependencyFixup",
          "normalized": "[(BinPkgName,BinPkgName)]-\u003eBinPkgName-\u003eDebT a()",
          "package": "cabal-debian",
          "partial": "Dependency Fixup",
          "signature": "[(BinPkgName,BinPkgName)]-\u003eBinPkgName-\u003eDebT m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Goodies.html#v:tightDependencyFixup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Debianize.Goodies",
          "name": "watchAtom",
          "package": "cabal-debian",
          "signature": "PackageName -\u003e Text",
          "source": "src/Debian-Debianize-Goodies.html#watchAtom",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debian Debianize Goodies",
          "module": "Debian.Debianize.Goodies",
          "name": "watchAtom",
          "normalized": "PackageName-\u003eText",
          "package": "cabal-debian",
          "partial": "Atom",
          "signature": "PackageName-\u003eText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Goodies.html#v:watchAtom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eRead an existing Debianization from a directory file.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Debian.Debianize.Input",
          "name": "Input",
          "package": "cabal-debian",
          "source": "src/Debian-Debianize-Input.html",
          "type": "module"
        },
        "index": {
          "description": "Read an existing Debianization from directory file",
          "hierarchy": "Debian Debianize Input",
          "module": "Debian.Debianize.Input",
          "name": "Input",
          "package": "cabal-debian",
          "partial": "Input",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Input.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute the Cabal data directory for a Linux install from a Cabal\n package description.  This needs to match the path cabal assigns to\n datadir in the dist\u003cem\u003ebuild\u003c/em\u003eautogen/Paths_packagename.hs module, or\n perhaps the path in the cabal_debian_datadir environment variable.\n\u003c/p\u003e",
          "module": "Debian.Debianize.Input",
          "name": "dataDir",
          "package": "cabal-debian",
          "signature": "PackageDescription -\u003e FilePath",
          "source": "src/Debian-Debianize-Input.html#dataDir",
          "type": "function"
        },
        "index": {
          "description": "Compute the Cabal data directory for Linux install from Cabal package description This needs to match the path cabal assigns to datadir in the dist build autogen Paths packagename.hs module or perhaps the path in the cabal debian datadir environment variable",
          "hierarchy": "Debian Debianize Input",
          "module": "Debian.Debianize.Input",
          "name": "dataDir",
          "normalized": "PackageDescription-\u003eFilePath",
          "package": "cabal-debian",
          "partial": "Dir",
          "signature": "PackageDescription-\u003eFilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Input.html#v:dataDir"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Debianize.Input",
          "name": "inputCabalization",
          "package": "cabal-debian",
          "signature": "Top -\u003e DebT m ()",
          "source": "src/Debian-Debianize-Input.html#inputCabalization",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debian Debianize Input",
          "module": "Debian.Debianize.Input",
          "name": "inputCabalization",
          "normalized": "Top-\u003eDebT a()",
          "package": "cabal-debian",
          "partial": "Cabalization",
          "signature": "Top-\u003eDebT m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Input.html#v:inputCabalization"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Debianize.Input",
          "name": "inputCabalization'",
          "package": "cabal-debian",
          "signature": "Top -\u003e Verbosity -\u003e CompilerId -\u003e Set (FlagName, Bool) -\u003e IO (Either [Dependency] PackageDescription)",
          "source": "src/Debian-Debianize-Input.html#inputCabalization%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debian Debianize Input",
          "module": "Debian.Debianize.Input",
          "name": "inputCabalization'",
          "normalized": "Top-\u003eVerbosity-\u003eCompilerId-\u003eSet(FlagName,Bool)-\u003eIO(Either[Dependency]PackageDescription)",
          "package": "cabal-debian",
          "partial": "Cabalization'",
          "signature": "Top-\u003eVerbosity-\u003eCompilerId-\u003eSet(FlagName,Bool)-\u003eIO(Either[Dependency]PackageDescription)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Input.html#v:inputCabalization-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Debian.Debianize.Input\",\"Debian.Debianize\"]",
          "name": "inputChangeLog",
          "package": "cabal-debian",
          "signature": "Top -\u003e DebT m ()",
          "source": "src/Debian-Debianize-Input.html#inputChangeLog",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Input.html#v:inputChangeLog\",\"http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize.html#v:inputChangeLog\"]"
        },
        "index": {
          "hierarchy": "Debian Debianize Input",
          "module": "Debian.Debianize.Input",
          "name": "inputChangeLog",
          "normalized": "Top-\u003eDebT a()",
          "package": "cabal-debian",
          "partial": "Change Log",
          "signature": "Top-\u003eDebT m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Input.html#v:inputChangeLog"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Debianize.Input",
          "name": "inputCompiler",
          "package": "cabal-debian",
          "signature": "Top -\u003e DebT m CompilerId",
          "source": "src/Debian-Debianize-Input.html#inputCompiler",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debian Debianize Input",
          "module": "Debian.Debianize.Input",
          "name": "inputCompiler",
          "normalized": "Top-\u003eDebT a CompilerId",
          "package": "cabal-debian",
          "partial": "Compiler",
          "signature": "Top-\u003eDebT m CompilerId",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Input.html#v:inputCompiler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead the compiler version specified by Cabal, optionally\n changing the version number.\n\u003c/p\u003e",
          "module": "Debian.Debianize.Input",
          "name": "inputCompiler'",
          "package": "cabal-debian",
          "signature": "Top -\u003e Verbosity -\u003e Maybe Version -\u003e IO CompilerId",
          "source": "src/Debian-Debianize-Input.html#inputCompiler%27",
          "type": "function"
        },
        "index": {
          "description": "Read the compiler version specified by Cabal optionally changing the version number",
          "hierarchy": "Debian Debianize Input",
          "module": "Debian.Debianize.Input",
          "name": "inputCompiler'",
          "normalized": "Top-\u003eVerbosity-\u003eMaybe Version-\u003eIO CompilerId",
          "package": "cabal-debian",
          "partial": "Compiler'",
          "signature": "Top-\u003eVerbosity-\u003eMaybe Version-\u003eIO CompilerId",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Input.html#v:inputCompiler-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Debian.Debianize.Input\",\"Debian.Debianize\"]",
          "name": "inputDebianization",
          "package": "cabal-debian",
          "signature": "Top -\u003e DebT IO ()",
          "source": "src/Debian-Debianize-Input.html#inputDebianization",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Input.html#v:inputDebianization\",\"http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize.html#v:inputDebianization\"]"
        },
        "index": {
          "hierarchy": "Debian Debianize Input",
          "module": "Debian.Debianize.Input",
          "name": "inputDebianization",
          "normalized": "Top-\u003eDebT IO()",
          "package": "cabal-debian",
          "partial": "Debianization",
          "signature": "Top-\u003eDebT IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Input.html#v:inputDebianization"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTry to input a file and if successful add it to the debianization.\n\u003c/p\u003e",
          "module": "[\"Debian.Debianize.Input\",\"Debian.Debianize\"]",
          "name": "inputDebianizationFile",
          "package": "cabal-debian",
          "signature": "Top -\u003e FilePath -\u003e DebT IO ()",
          "source": "src/Debian-Debianize-Input.html#inputDebianizationFile",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Input.html#v:inputDebianizationFile\",\"http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize.html#v:inputDebianizationFile\"]"
        },
        "index": {
          "description": "Try to input file and if successful add it to the debianization",
          "hierarchy": "Debian Debianize Input",
          "module": "Debian.Debianize.Input",
          "name": "inputDebianizationFile",
          "normalized": "Top-\u003eFilePath-\u003eDebT IO()",
          "package": "cabal-debian",
          "partial": "Debianization File",
          "signature": "Top-\u003eFilePath-\u003eDebT IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Input.html#v:inputDebianizationFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTry to compute a string for the the debian \u003ca\u003eMaintainer:\u003c/a\u003e field using, in this order\n    1. the maintainer explicitly specified using \u003ca\u003eDebian.Debianize.Monad.maintainer\u003c/a\u003e\n    2. the maintainer field of the cabal package,\n    3. the value returned by getDebianMaintainer, which looks in several environment variables,\n    4. the signature from the latest entry in debian/changelog,\n    5. the Debian Haskell Group, \u003ccode\u003epkg-haskell-maintainers@lists.alioth.debian.org\u003c/code\u003e\n\u003c/p\u003e",
          "module": "[\"Debian.Debianize.Input\",\"Debian.Debianize\"]",
          "name": "inputMaintainer",
          "package": "cabal-debian",
          "signature": "DebT m ()",
          "source": "src/Debian-Debianize-Input.html#inputMaintainer",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Input.html#v:inputMaintainer\",\"http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize.html#v:inputMaintainer\"]"
        },
        "index": {
          "description": "Try to compute string for the the debian Maintainer field using in this order the maintainer explicitly specified using Debian.Debianize.Monad.maintainer the maintainer field of the cabal package the value returned by getDebianMaintainer which looks in several environment variables the signature from the latest entry in debian changelog the Debian Haskell Group pkg-haskell-maintainers@lists.alioth.debian.org",
          "hierarchy": "Debian Debianize Input",
          "module": "Debian.Debianize.Input",
          "name": "inputMaintainer",
          "normalized": "DebT a()",
          "package": "cabal-debian",
          "partial": "Maintainer",
          "signature": "DebT m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Input.html#v:inputMaintainer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA class used while converting Cabal dependencies into Debian\n dependencies.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Debian.Debianize.Interspersed",
          "name": "Interspersed",
          "package": "cabal-debian",
          "source": "src/Debian-Debianize-Interspersed.html",
          "type": "module"
        },
        "index": {
          "description": "class used while converting Cabal dependencies into Debian dependencies",
          "hierarchy": "Debian Debianize Interspersed",
          "module": "Debian.Debianize.Interspersed",
          "name": "Interspersed",
          "package": "cabal-debian",
          "partial": "Interspersed",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Interspersed.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA class of Bs insterspersed with Cs.  It is used when converting\n the cabal dependencies to debian, where the \u003ca\u003earound\u003c/a\u003e type is the\n binary package name and the \u003ca\u003ebetween\u003c/a\u003e type is the version number.\n\u003c/p\u003e\u003cp\u003eMinimum implementation is a method to return the leftmost B, and\n another to return the following (C,B) pairs.  Its unfortunate to\n require lists in the implementation, a fold function would be\n better (though I find implementing such folds to be a pain in the\n you-know-what.)\n\u003c/p\u003e\u003cp\u003eThe class provides implementations of three folds, each of which\n exposes slightly different views of the data.\n\u003c/p\u003e",
          "module": "Debian.Debianize.Interspersed",
          "name": "Interspersed",
          "package": "cabal-debian",
          "source": "src/Debian-Debianize-Interspersed.html#Interspersed",
          "type": "class"
        },
        "index": {
          "description": "class of Bs insterspersed with Cs It is used when converting the cabal dependencies to debian where the around type is the binary package name and the between type is the version number Minimum implementation is method to return the leftmost and another to return the following pairs Its unfortunate to require lists in the implementation fold function would be better though find implementing such folds to be pain in the you-know-what The class provides implementations of three folds each of which exposes slightly different views of the data",
          "hierarchy": "Debian Debianize Interspersed",
          "module": "Debian.Debianize.Interspersed",
          "name": "Interspersed",
          "package": "cabal-debian",
          "partial": "Interspersed",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Interspersed.html#t:Interspersed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Debianize.Interspersed",
          "name": "foldArounds",
          "package": "cabal-debian",
          "signature": "(around -\u003e around -\u003e r -\u003e r) -\u003e r -\u003e t -\u003e r",
          "source": "src/Debian-Debianize-Interspersed.html#foldArounds",
          "type": "method"
        },
        "index": {
          "hierarchy": "Debian Debianize Interspersed",
          "module": "Debian.Debianize.Interspersed",
          "name": "foldArounds",
          "normalized": "(a-\u003ea-\u003eb-\u003eb)-\u003eb-\u003ec-\u003eb",
          "package": "cabal-debian",
          "partial": "Arounds",
          "signature": "(around-\u003earound-\u003er-\u003er)-\u003er-\u003et-\u003er",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Interspersed.html#v:foldArounds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Debianize.Interspersed",
          "name": "foldBetweens",
          "package": "cabal-debian",
          "signature": "(between -\u003e r -\u003e r) -\u003e r -\u003e t -\u003e r",
          "source": "src/Debian-Debianize-Interspersed.html#foldBetweens",
          "type": "method"
        },
        "index": {
          "hierarchy": "Debian Debianize Interspersed",
          "module": "Debian.Debianize.Interspersed",
          "name": "foldBetweens",
          "normalized": "(a-\u003eb-\u003eb)-\u003eb-\u003ec-\u003eb",
          "package": "cabal-debian",
          "partial": "Betweens",
          "signature": "(between-\u003er-\u003er)-\u003er-\u003et-\u003er",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Interspersed.html#v:foldBetweens"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Debianize.Interspersed",
          "name": "foldInverted",
          "package": "cabal-debian",
          "signature": "(Maybe between -\u003e around -\u003e Maybe between -\u003e r -\u003e r) -\u003e r -\u003e t -\u003e r",
          "source": "src/Debian-Debianize-Interspersed.html#foldInverted",
          "type": "method"
        },
        "index": {
          "hierarchy": "Debian Debianize Interspersed",
          "module": "Debian.Debianize.Interspersed",
          "name": "foldInverted",
          "normalized": "(Maybe a-\u003eb-\u003eMaybe a-\u003ec-\u003ec)-\u003ec-\u003ed-\u003ec",
          "package": "cabal-debian",
          "partial": "Inverted",
          "signature": "(Maybe between-\u003earound-\u003eMaybe between-\u003er-\u003er)-\u003er-\u003et-\u003er",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Interspersed.html#v:foldInverted"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Debianize.Interspersed",
          "name": "foldTriples",
          "package": "cabal-debian",
          "signature": "(around -\u003e between -\u003e around -\u003e r -\u003e r) -\u003e r -\u003e t -\u003e r",
          "source": "src/Debian-Debianize-Interspersed.html#foldTriples",
          "type": "method"
        },
        "index": {
          "hierarchy": "Debian Debianize Interspersed",
          "module": "Debian.Debianize.Interspersed",
          "name": "foldTriples",
          "normalized": "(a-\u003eb-\u003ea-\u003ec-\u003ec)-\u003ec-\u003ed-\u003ec",
          "package": "cabal-debian",
          "partial": "Triples",
          "signature": "(around-\u003ebetween-\u003earound-\u003er-\u003er)-\u003er-\u003et-\u003er",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Interspersed.html#v:foldTriples"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Debianize.Interspersed",
          "name": "leftmost",
          "package": "cabal-debian",
          "signature": "t -\u003e around",
          "source": "src/Debian-Debianize-Interspersed.html#leftmost",
          "type": "method"
        },
        "index": {
          "hierarchy": "Debian Debianize Interspersed",
          "module": "Debian.Debianize.Interspersed",
          "name": "leftmost",
          "normalized": "a-\u003eb",
          "package": "cabal-debian",
          "signature": "t-\u003earound",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Interspersed.html#v:leftmost"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Debianize.Interspersed",
          "name": "pairs",
          "package": "cabal-debian",
          "signature": "t -\u003e [(between, around)]",
          "source": "src/Debian-Debianize-Interspersed.html#pairs",
          "type": "method"
        },
        "index": {
          "hierarchy": "Debian Debianize Interspersed",
          "module": "Debian.Debianize.Interspersed",
          "name": "pairs",
          "normalized": "a-\u003e[(b,c)]",
          "package": "cabal-debian",
          "signature": "t-\u003e[(between,around)]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Interspersed.html#v:pairs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Debianize.Monad",
          "name": "Monad",
          "package": "cabal-debian",
          "source": "src/Debian-Debianize-Monad.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Debian Debianize Monad",
          "module": "Debian.Debianize.Monad",
          "name": "Monad",
          "package": "cabal-debian",
          "partial": "Monad",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Monad.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBits and pieces of information about the mapping from cabal package\n names and versions to debian package names and versions.  In essence,\n an \u003ccode\u003e\u003ca\u003eAtoms\u003c/a\u003e\u003c/code\u003e value represents a package's debianization.  The lenses in\n this module are used to get and set the values hidden in this Atoms\n value.  Many of the values should be left alone to be set when the\n debianization is finalized.\n\u003c/p\u003e",
          "module": "Debian.Debianize.Monad",
          "name": "Atoms",
          "package": "cabal-debian",
          "source": "src/Debian-Debianize-Types-Atoms.html#Atoms",
          "type": "data"
        },
        "index": {
          "description": "Bits and pieces of information about the mapping from cabal package names and versions to debian package names and versions In essence an Atoms value represents package debianization The lenses in this module are used to get and set the values hidden in this Atoms value Many of the values should be left alone to be set when the debianization is finalized",
          "hierarchy": "Debian Debianize Monad",
          "module": "Debian.Debianize.Monad",
          "name": "Atoms",
          "package": "cabal-debian",
          "partial": "Atoms",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Monad.html#t:Atoms"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Debianize.Monad",
          "name": "DebM",
          "package": "cabal-debian",
          "source": "src/Debian-Debianize-Monad.html#DebM",
          "type": "type"
        },
        "index": {
          "hierarchy": "Debian Debianize Monad",
          "module": "Debian.Debianize.Monad",
          "name": "DebM",
          "package": "cabal-debian",
          "partial": "Deb",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Monad.html#t:DebM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Debianize.Monad",
          "name": "DebT",
          "package": "cabal-debian",
          "source": "src/Debian-Debianize-Monad.html#DebT",
          "type": "type"
        },
        "index": {
          "hierarchy": "Debian Debianize Monad",
          "module": "Debian.Debianize.Monad",
          "name": "DebT",
          "package": "cabal-debian",
          "partial": "Deb",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Monad.html#t:DebT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Debian.Debianize.Monad\",\"Debian.Debianize\"]",
          "name": "evalDebM",
          "package": "cabal-debian",
          "signature": "DebM a -\u003e Atoms -\u003e a",
          "source": "src/Debian-Debianize-Monad.html#evalDebM",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Monad.html#v:evalDebM\",\"http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize.html#v:evalDebM\"]"
        },
        "index": {
          "hierarchy": "Debian Debianize Monad",
          "module": "Debian.Debianize.Monad",
          "name": "evalDebM",
          "normalized": "DebM a-\u003eAtoms-\u003ea",
          "package": "cabal-debian",
          "partial": "Deb",
          "signature": "DebM a-\u003eAtoms-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Monad.html#v:evalDebM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Debian.Debianize.Monad\",\"Debian.Debianize\"]",
          "name": "evalDebT",
          "package": "cabal-debian",
          "signature": "DebT m a -\u003e Atoms -\u003e m a",
          "source": "src/Debian-Debianize-Monad.html#evalDebT",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Monad.html#v:evalDebT\",\"http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize.html#v:evalDebT\"]"
        },
        "index": {
          "hierarchy": "Debian Debianize Monad",
          "module": "Debian.Debianize.Monad",
          "name": "evalDebT",
          "normalized": "DebT a b-\u003eAtoms-\u003ea b",
          "package": "cabal-debian",
          "partial": "Deb",
          "signature": "DebT m a-\u003eAtoms-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Monad.html#v:evalDebT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Debian.Debianize.Monad\",\"Debian.Debianize\"]",
          "name": "execDebM",
          "package": "cabal-debian",
          "signature": "DebM a -\u003e Atoms -\u003e Atoms",
          "source": "src/Debian-Debianize-Monad.html#execDebM",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Monad.html#v:execDebM\",\"http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize.html#v:execDebM\"]"
        },
        "index": {
          "hierarchy": "Debian Debianize Monad",
          "module": "Debian.Debianize.Monad",
          "name": "execDebM",
          "normalized": "DebM a-\u003eAtoms-\u003eAtoms",
          "package": "cabal-debian",
          "partial": "Deb",
          "signature": "DebM a-\u003eAtoms-\u003eAtoms",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Monad.html#v:execDebM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Debian.Debianize.Monad\",\"Debian.Debianize\"]",
          "name": "execDebT",
          "package": "cabal-debian",
          "signature": "DebT m a -\u003e Atoms -\u003e m Atoms",
          "source": "src/Debian-Debianize-Monad.html#execDebT",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Monad.html#v:execDebT\",\"http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize.html#v:execDebT\"]"
        },
        "index": {
          "hierarchy": "Debian Debianize Monad",
          "module": "Debian.Debianize.Monad",
          "name": "execDebT",
          "normalized": "DebT a b-\u003eAtoms-\u003ea Atoms",
          "package": "cabal-debian",
          "partial": "Deb",
          "signature": "DebT m a-\u003eAtoms-\u003em Atoms",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Monad.html#v:execDebT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Debian.Debianize.Monad\",\"Debian.Debianize\"]",
          "name": "runDebM",
          "package": "cabal-debian",
          "signature": "DebM a -\u003e Atoms -\u003e (a, Atoms)",
          "source": "src/Debian-Debianize-Monad.html#runDebM",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Monad.html#v:runDebM\",\"http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize.html#v:runDebM\"]"
        },
        "index": {
          "hierarchy": "Debian Debianize Monad",
          "module": "Debian.Debianize.Monad",
          "name": "runDebM",
          "normalized": "DebM a-\u003eAtoms-\u003e(a,Atoms)",
          "package": "cabal-debian",
          "partial": "Deb",
          "signature": "DebM a-\u003eAtoms-\u003e(a,Atoms)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Monad.html#v:runDebM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Debian.Debianize.Monad\",\"Debian.Debianize\"]",
          "name": "runDebT",
          "package": "cabal-debian",
          "signature": "DebT m a -\u003e Atoms -\u003e m (a, Atoms)",
          "source": "src/Debian-Debianize-Monad.html#runDebT",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Monad.html#v:runDebT\",\"http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize.html#v:runDebT\"]"
        },
        "index": {
          "hierarchy": "Debian Debianize Monad",
          "module": "Debian.Debianize.Monad",
          "name": "runDebT",
          "normalized": "DebT a b-\u003eAtoms-\u003ea(b,Atoms)",
          "package": "cabal-debian",
          "partial": "Deb",
          "signature": "DebT m a-\u003eAtoms-\u003em(a,Atoms)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Monad.html#v:runDebT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Debianize.Options",
          "name": "Options",
          "package": "cabal-debian",
          "source": "src/Debian-Debianize-Options.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Debian Debianize Options",
          "module": "Debian.Debianize.Options",
          "name": "Options",
          "package": "cabal-debian",
          "partial": "Options",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Options.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Debian.Debianize.Options\",\"Debian.Debianize\"]",
          "name": "compileArgs",
          "package": "cabal-debian",
          "signature": "[String] -\u003e DebT IO ()",
          "source": "src/Debian-Debianize-Options.html#compileArgs",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Options.html#v:compileArgs\",\"http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize.html#v:compileArgs\"]"
        },
        "index": {
          "hierarchy": "Debian Debianize Options",
          "module": "Debian.Debianize.Options",
          "name": "compileArgs",
          "normalized": "[String]-\u003eDebT IO()",
          "package": "cabal-debian",
          "partial": "Args",
          "signature": "[String]-\u003eDebT IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Options.html#v:compileArgs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Debianize.Options",
          "name": "compileCommandlineArgs",
          "package": "cabal-debian",
          "signature": "DebT IO ()",
          "source": "src/Debian-Debianize-Options.html#compileCommandlineArgs",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debian Debianize Options",
          "module": "Debian.Debianize.Options",
          "name": "compileCommandlineArgs",
          "normalized": "DebT IO()",
          "package": "cabal-debian",
          "partial": "Commandline Args",
          "signature": "DebT IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Options.html#v:compileCommandlineArgs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Debianize.Options",
          "name": "compileEnvironmentArgs",
          "package": "cabal-debian",
          "signature": "DebT IO ()",
          "source": "src/Debian-Debianize-Options.html#compileEnvironmentArgs",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debian Debianize Options",
          "module": "Debian.Debianize.Options",
          "name": "compileEnvironmentArgs",
          "normalized": "DebT IO()",
          "package": "cabal-debian",
          "partial": "Environment Args",
          "signature": "DebT IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Options.html#v:compileEnvironmentArgs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOptions that modify other atoms.\n\u003c/p\u003e",
          "module": "Debian.Debianize.Options",
          "name": "options",
          "package": "cabal-debian",
          "signature": "[OptDescr (DebT IO ())]",
          "source": "src/Debian-Debianize-Options.html#options",
          "type": "function"
        },
        "index": {
          "description": "Options that modify other atoms",
          "hierarchy": "Debian Debianize Options",
          "module": "Debian.Debianize.Options",
          "name": "options",
          "normalized": "[OptDescr(DebT IO())]",
          "package": "cabal-debian",
          "signature": "[OptDescr(DebT IO())]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Options.html#v:options"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInsert a value for CABALDEBIAN into the environment that the\n withEnvironment* functions above will find and use.  E.g.\n putEnvironmentFlags [\u003ca\u003e--dry-run\u003c/a\u003e, \u003ca\u003e--validate\u003c/a\u003e] (debianize defaultFlags)\n\u003c/p\u003e",
          "module": "Debian.Debianize.Options",
          "name": "putEnvironmentArgs",
          "package": "cabal-debian",
          "signature": "[String] -\u003e IO ()",
          "source": "src/Debian-Debianize-Options.html#putEnvironmentArgs",
          "type": "function"
        },
        "index": {
          "description": "Insert value for CABALDEBIAN into the environment that the withEnvironment functions above will find and use E.g putEnvironmentFlags dry-run validate debianize defaultFlags",
          "hierarchy": "Debian Debianize Options",
          "module": "Debian.Debianize.Options",
          "name": "putEnvironmentArgs",
          "normalized": "[String]-\u003eIO()",
          "package": "cabal-debian",
          "partial": "Environment Args",
          "signature": "[String]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Options.html#v:putEnvironmentArgs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead a value out of the CABALDEBIAN environment variable which is\n the result of applying show to a [String].\n\u003c/p\u003e",
          "module": "Debian.Debianize.Options",
          "name": "withEnvironmentArgs",
          "package": "cabal-debian",
          "signature": "([String] -\u003e DebT IO a) -\u003e DebT IO a",
          "source": "src/Debian-Debianize-Options.html#withEnvironmentArgs",
          "type": "function"
        },
        "index": {
          "description": "Read value out of the CABALDEBIAN environment variable which is the result of applying show to String",
          "hierarchy": "Debian Debianize Options",
          "module": "Debian.Debianize.Options",
          "name": "withEnvironmentArgs",
          "normalized": "([String]-\u003eDebT IO a)-\u003eDebT IO a",
          "package": "cabal-debian",
          "partial": "Environment Args",
          "signature": "([String]-\u003eDebT IO a)-\u003eDebT IO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Options.html#v:withEnvironmentArgs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eWrappers around the debianization function to perform various\n tasks - output, describe, validate a debianization, run an external\n script to produce a debianization.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Debian.Debianize.Output",
          "name": "Output",
          "package": "cabal-debian",
          "source": "src/Debian-Debianize-Output.html",
          "type": "module"
        },
        "index": {
          "description": "Wrappers around the debianization function to perform various tasks output describe validate debianization run an external script to produce debianization",
          "hierarchy": "Debian Debianize Output",
          "module": "Debian.Debianize.Output",
          "name": "Output",
          "package": "cabal-debian",
          "partial": "Output",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Output.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompare the old and new debianizations, returning a string\n describing the differences.\n\u003c/p\u003e",
          "module": "[\"Debian.Debianize.Output\",\"Debian.Debianize\"]",
          "name": "compareDebianization",
          "package": "cabal-debian",
          "signature": "Atoms -\u003e Atoms -\u003e IO String",
          "source": "src/Debian-Debianize-Output.html#compareDebianization",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Output.html#v:compareDebianization\",\"http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize.html#v:compareDebianization\"]"
        },
        "index": {
          "description": "Compare the old and new debianizations returning string describing the differences",
          "hierarchy": "Debian Debianize Output",
          "module": "Debian.Debianize.Output",
          "name": "compareDebianization",
          "normalized": "Atoms-\u003eAtoms-\u003eIO String",
          "package": "cabal-debian",
          "partial": "Debianization",
          "signature": "Atoms-\u003eAtoms-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Output.html#v:compareDebianization"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn a string describing the debianization - a list of file\n names and their contents in a somewhat human readable format.\n\u003c/p\u003e",
          "module": "[\"Debian.Debianize.Output\",\"Debian.Debianize\"]",
          "name": "describeDebianization",
          "package": "cabal-debian",
          "signature": "DebT m String",
          "source": "src/Debian-Debianize-Output.html#describeDebianization",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Output.html#v:describeDebianization\",\"http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize.html#v:describeDebianization\"]"
        },
        "index": {
          "description": "Return string describing the debianization list of file names and their contents in somewhat human readable format",
          "hierarchy": "Debian Debianize Output",
          "module": "Debian.Debianize.Output",
          "name": "describeDebianization",
          "package": "cabal-debian",
          "partial": "Debianization",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Output.html#v:describeDebianization"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDepending on the options in \u003ccode\u003eatoms\u003c/code\u003e, either validate, describe,\n or write the generated debianization.\n\u003c/p\u003e",
          "module": "[\"Debian.Debianize.Output\",\"Debian.Debianize\"]",
          "name": "doDebianizeAction",
          "package": "cabal-debian",
          "signature": "Top -\u003e DebT IO ()",
          "source": "src/Debian-Debianize-Output.html#doDebianizeAction",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Output.html#v:doDebianizeAction\",\"http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize.html#v:doDebianizeAction\"]"
        },
        "index": {
          "description": "Depending on the options in atoms either validate describe or write the generated debianization",
          "hierarchy": "Debian Debianize Output",
          "module": "Debian.Debianize.Output",
          "name": "doDebianizeAction",
          "normalized": "Top-\u003eDebT IO()",
          "package": "cabal-debian",
          "partial": "Debianize Action",
          "signature": "Top-\u003eDebT IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Output.html#v:doDebianizeAction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun the script in \u003ccode\u003edebian/Debianize.hs\u003c/code\u003e with the given command\n line arguments.  Returns \u003ccode\u003eTrue\u003c/code\u003e if the script exists and succeeds.\n In this case it may be assumed that a debianization was created (or\n updated) in the debian subdirectory of the current directory.  In\n this way we can include a script in a package to produce a\n customized debianization more sophisticated than the one that would\n be produced by the cabal-debian executable.  An example is included\n in the debian subdirectory of this library.\n\u003c/p\u003e",
          "module": "[\"Debian.Debianize.Output\",\"Debian.Debianize\"]",
          "name": "runDebianizeScript",
          "package": "cabal-debian",
          "signature": "[String] -\u003e IO Bool",
          "source": "src/Debian-Debianize-Output.html#runDebianizeScript",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Output.html#v:runDebianizeScript\",\"http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize.html#v:runDebianizeScript\"]"
        },
        "index": {
          "description": "Run the script in debian Debianize.hs with the given command line arguments Returns True if the script exists and succeeds In this case it may be assumed that debianization was created or updated in the debian subdirectory of the current directory In this way we can include script in package to produce customized debianization more sophisticated than the one that would be produced by the cabal-debian executable An example is included in the debian subdirectory of this library",
          "hierarchy": "Debian Debianize Output",
          "module": "Debian.Debianize.Output",
          "name": "runDebianizeScript",
          "normalized": "[String]-\u003eIO Bool",
          "package": "cabal-debian",
          "partial": "Debianize Script",
          "signature": "[String]-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Output.html#v:runDebianizeScript"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake sure the new debianization matches the existing\n debianization in several ways - specifically, version number, and\n the names of the source and binary packages.  Some debian packages\n come with a skeleton debianization that needs to be filled in, this\n can be used to make sure the debianization we produce is usable.\n\u003c/p\u003e",
          "module": "[\"Debian.Debianize.Output\",\"Debian.Debianize\"]",
          "name": "validateDebianization",
          "package": "cabal-debian",
          "signature": "Atoms -\u003e Atoms -\u003e ()",
          "source": "src/Debian-Debianize-Output.html#validateDebianization",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Output.html#v:validateDebianization\",\"http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize.html#v:validateDebianization\"]"
        },
        "index": {
          "description": "Make sure the new debianization matches the existing debianization in several ways specifically version number and the names of the source and binary packages Some debian packages come with skeleton debianization that needs to be filled in this can be used to make sure the debianization we produce is usable",
          "hierarchy": "Debian Debianize Output",
          "module": "Debian.Debianize.Output",
          "name": "validateDebianization",
          "normalized": "Atoms-\u003eAtoms-\u003e()",
          "package": "cabal-debian",
          "partial": "Debianization",
          "signature": "Atoms-\u003eAtoms-\u003e()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Output.html#v:validateDebianization"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite the files of the debianization \u003ccode\u003ed\u003c/code\u003e to the directory \u003ccode\u003etop\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Debian.Debianize.Output\",\"Debian.Debianize\"]",
          "name": "writeDebianization",
          "package": "cabal-debian",
          "signature": "Top -\u003e DebT IO ()",
          "source": "src/Debian-Debianize-Output.html#writeDebianization",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Output.html#v:writeDebianization\",\"http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize.html#v:writeDebianization\"]"
        },
        "index": {
          "description": "Write the files of the debianization to the directory top",
          "hierarchy": "Debian Debianize Output",
          "module": "Debian.Debianize.Output",
          "name": "writeDebianization",
          "normalized": "Top-\u003eDebT IO()",
          "package": "cabal-debian",
          "partial": "Debianization",
          "signature": "Top-\u003eDebT IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Output.html#v:writeDebianization"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFunctions and instances used by but not related to cabal-debian.\n These could conceivably be moved into more general libraries.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Debian.Debianize.Prelude",
          "name": "Prelude",
          "package": "cabal-debian",
          "source": "src/Debian-Debianize-Prelude.html",
          "type": "module"
        },
        "index": {
          "description": "Functions and instances used by but not related to cabal-debian These could conceivably be moved into more general libraries",
          "hierarchy": "Debian Debianize Prelude",
          "module": "Debian.Debianize.Prelude",
          "name": "Prelude",
          "package": "cabal-debian",
          "partial": "Prelude",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Prelude.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Debianize.Prelude",
          "name": "DebMap",
          "package": "cabal-debian",
          "source": "src/Debian-Debianize-Prelude.html#DebMap",
          "type": "type"
        },
        "index": {
          "hierarchy": "Debian Debianize Prelude",
          "module": "Debian.Debianize.Prelude",
          "name": "DebMap",
          "package": "cabal-debian",
          "partial": "Deb Map",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Prelude.html#t:DebMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Debianize.Prelude",
          "name": "Pretty",
          "package": "cabal-debian",
          "type": "class"
        },
        "index": {
          "hierarchy": "Debian Debianize Prelude",
          "module": "Debian.Debianize.Prelude",
          "name": "Pretty",
          "package": "cabal-debian",
          "partial": "Pretty",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Prelude.html#t:Pretty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet a lens value.  (This is a version of Data.Lens.Lazy.~= that returns () instead of b.)\n\u003c/p\u003e",
          "module": "[\"Debian.Debianize.Prelude\",\"Debian.Debianize\"]",
          "name": "(~=)",
          "package": "cabal-debian",
          "signature": "Lens a b -\u003e b -\u003e StateT a m ()",
          "source": "src/Debian-Debianize-Prelude.html#~%3D",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Prelude.html#v:-126--61-\",\"http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize.html#v:-126--61-\"]"
        },
        "index": {
          "description": "Set lens value This is version of Data.Lens.Lazy that returns instead of",
          "hierarchy": "Debian Debianize Prelude",
          "module": "Debian.Debianize.Prelude",
          "name": "(~=) ~=",
          "normalized": "Lens a b-\u003eb-\u003eStateT a c()",
          "package": "cabal-debian",
          "signature": "Lens a b-\u003eb-\u003eStateT a m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Prelude.html#v:-126--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet \u003ccode\u003eb\u003c/code\u003e if it currently isNothing and the argument isJust, that is\n  1. Nothing happens if the argument isNothing\n  2. Nothing happens if the current value isJust\n\u003c/p\u003e",
          "module": "[\"Debian.Debianize.Prelude\",\"Debian.Debianize\"]",
          "name": "(~?=)",
          "package": "cabal-debian",
          "signature": "Lens a (Maybe b) -\u003e Maybe b -\u003e StateT a m ()",
          "source": "src/Debian-Debianize-Prelude.html#~%3F%3D",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Prelude.html#v:-126--63--61-\",\"http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize.html#v:-126--63--61-\"]"
        },
        "index": {
          "description": "Set if it currently isNothing and the argument isJust that is Nothing happens if the argument isNothing Nothing happens if the current value isJust",
          "hierarchy": "Debian Debianize Prelude",
          "module": "Debian.Debianize.Prelude",
          "name": "(~?=) ~?=",
          "normalized": "Lens a(Maybe b)-\u003eMaybe b-\u003eStateT a c()",
          "package": "cabal-debian",
          "signature": "Lens a(Maybe b)-\u003eMaybe b-\u003eStateT a m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Prelude.html#v:-126--63--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Debianize.Prelude",
          "name": "(!)",
          "package": "cabal-debian",
          "signature": "DebMap -\u003e BinPkgName -\u003e DebianVersion",
          "source": "src/Debian-Debianize-Prelude.html#%21",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debian Debianize Prelude",
          "module": "Debian.Debianize.Prelude",
          "name": "(!) !",
          "normalized": "DebMap-\u003eBinPkgName-\u003eDebianVersion",
          "package": "cabal-debian",
          "signature": "DebMap-\u003eBinPkgName-\u003eDebianVersion",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Prelude.html#v:-33-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eModify a value.  (This is a version of Data.Lens.Lazy.%= that returns () instead of a.)\n\u003c/p\u003e",
          "module": "[\"Debian.Debianize.Prelude\",\"Debian.Debianize\"]",
          "name": "(%=)",
          "package": "cabal-debian",
          "signature": "Lens a b -\u003e (b -\u003e b) -\u003e StateT a m ()",
          "source": "src/Debian-Debianize-Prelude.html#%25%3D",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Prelude.html#v:-37--61-\",\"http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize.html#v:-37--61-\"]"
        },
        "index": {
          "description": "Modify value This is version of Data.Lens.Lazy that returns instead of",
          "hierarchy": "Debian Debianize Prelude",
          "module": "Debian.Debianize.Prelude",
          "name": "(%=) %=",
          "normalized": "Lens a b-\u003e(b-\u003eb)-\u003eStateT a c()",
          "package": "cabal-debian",
          "signature": "Lens a b-\u003e(b-\u003eb)-\u003eStateT a m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Prelude.html#v:-37--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInsert an element into a \u003ccode\u003e(Map b (Set c))\u003c/code\u003e\n\u003c/p\u003e",
          "module": "[\"Debian.Debianize.Prelude\",\"Debian.Debianize\"]",
          "name": "(+++=)",
          "package": "cabal-debian",
          "signature": "Lens a (Map b c) -\u003e (b, c) -\u003e StateT a m ()",
          "source": "src/Debian-Debianize-Prelude.html#%2B%2B%2B%3D",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Prelude.html#v:-43--43--43--61-\",\"http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize.html#v:-43--43--43--61-\"]"
        },
        "index": {
          "description": "Insert an element into Map Set",
          "hierarchy": "Debian Debianize Prelude",
          "module": "Debian.Debianize.Prelude",
          "name": "(+++=) +++=",
          "normalized": "Lens a(Map b c)-\u003e(b,c)-\u003eStateT a d()",
          "package": "cabal-debian",
          "signature": "Lens a(Map b c)-\u003e(b,c)-\u003eStateT a m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Prelude.html#v:-43--43--43--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInsert an element into a \u003ccode\u003e(Map b c)\u003c/code\u003e\n\u003c/p\u003e",
          "module": "[\"Debian.Debianize.Prelude\",\"Debian.Debianize\"]",
          "name": "(++=)",
          "package": "cabal-debian",
          "signature": "Lens a (Map b c) -\u003e (b, c) -\u003e StateT a m ()",
          "source": "src/Debian-Debianize-Prelude.html#%2B%2B%3D",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Prelude.html#v:-43--43--61-\",\"http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize.html#v:-43--43--61-\"]"
        },
        "index": {
          "description": "Insert an element into Map",
          "hierarchy": "Debian Debianize Prelude",
          "module": "Debian.Debianize.Prelude",
          "name": "(++=) ++=",
          "normalized": "Lens a(Map b c)-\u003e(b,c)-\u003eStateT a d()",
          "package": "cabal-debian",
          "signature": "Lens a(Map b c)-\u003e(b,c)-\u003eStateT a m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Prelude.html#v:-43--43--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInsert an element into a \u003ccode\u003e(Set b)\u003c/code\u003e\n\u003c/p\u003e",
          "module": "[\"Debian.Debianize.Prelude\",\"Debian.Debianize\"]",
          "name": "(+=)",
          "package": "cabal-debian",
          "signature": "Lens a (Set b) -\u003e b -\u003e StateT a m ()",
          "source": "src/Debian-Debianize-Prelude.html#%2B%3D",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Prelude.html#v:-43--61-\",\"http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize.html#v:-43--61-\"]"
        },
        "index": {
          "description": "Insert an element into Set",
          "hierarchy": "Debian Debianize Prelude",
          "module": "Debian.Debianize.Prelude",
          "name": "(+=) +=",
          "normalized": "Lens a(Set b)-\u003eb-\u003eStateT a c()",
          "package": "cabal-debian",
          "signature": "Lens a(Set b)-\u003eb-\u003eStateT a m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Prelude.html#v:-43--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead and parse the status file for installed debian packages: \u003ccode\u003e\u003cem\u003evar\u003c/em\u003elib\u003cem\u003edpkg\u003c/em\u003estatus\u003c/code\u003e\n\u003c/p\u003e",
          "module": "[\"Debian.Debianize.Prelude\",\"Debian.Debianize\"]",
          "name": "buildDebVersionMap",
          "package": "cabal-debian",
          "signature": "IO DebMap",
          "source": "src/Debian-Debianize-Prelude.html#buildDebVersionMap",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Prelude.html#v:buildDebVersionMap\",\"http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize.html#v:buildDebVersionMap\"]"
        },
        "index": {
          "description": "Read and parse the status file for installed debian packages var lib dpkg status",
          "hierarchy": "Debian Debianize Prelude",
          "module": "Debian.Debianize.Prelude",
          "name": "buildDebVersionMap",
          "package": "cabal-debian",
          "partial": "Deb Version Map",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Prelude.html#v:buildDebVersionMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Debianize.Prelude",
          "name": "cond",
          "package": "cabal-debian",
          "signature": "t -\u003e t -\u003e Bool -\u003e t",
          "source": "src/Debian-Debianize-Prelude.html#cond",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debian Debianize Prelude",
          "module": "Debian.Debianize.Prelude",
          "name": "cond",
          "normalized": "a-\u003ea-\u003eBool-\u003ea",
          "package": "cabal-debian",
          "signature": "t-\u003et-\u003eBool-\u003et",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Prelude.html#v:cond"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Debianize.Prelude",
          "name": "curry3",
          "package": "cabal-debian",
          "signature": "((a, b, c) -\u003e d) -\u003e a -\u003e b -\u003e c -\u003e d",
          "source": "src/Debian-Debianize-Prelude.html#curry3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debian Debianize Prelude",
          "module": "Debian.Debianize.Prelude",
          "name": "curry3",
          "normalized": "((a,b,c)-\u003ed)-\u003ea-\u003eb-\u003ec-\u003ed",
          "package": "cabal-debian",
          "signature": "((a,b,c)-\u003ed)-\u003ea-\u003eb-\u003ec-\u003ed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Prelude.html#v:curry3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a path, return the name of the package that owns it.\n\u003c/p\u003e",
          "module": "[\"Debian.Debianize.Prelude\",\"Debian.Debianize\"]",
          "name": "debOfFile",
          "package": "cabal-debian",
          "signature": "FilePath -\u003e ReaderT (Map FilePath (Set BinPkgName)) IO (Maybe BinPkgName)",
          "source": "src/Debian-Debianize-Prelude.html#debOfFile",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Prelude.html#v:debOfFile\",\"http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize.html#v:debOfFile\"]"
        },
        "index": {
          "description": "Given path return the name of the package that owns it",
          "hierarchy": "Debian Debianize Prelude",
          "module": "Debian.Debianize.Prelude",
          "name": "debOfFile",
          "normalized": "FilePath-\u003eReaderT(Map FilePath(Set BinPkgName))IO(Maybe BinPkgName)",
          "package": "cabal-debian",
          "partial": "Of File",
          "signature": "FilePath-\u003eReaderT(Map FilePath(Set BinPkgName))IO(Maybe BinPkgName)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Prelude.html#v:debOfFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Debianize.Prelude",
          "name": "diffFile",
          "package": "cabal-debian",
          "signature": "FilePath -\u003e Text -\u003e IO (Maybe String)",
          "source": "src/Debian-Debianize-Prelude.html#diffFile",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debian Debianize Prelude",
          "module": "Debian.Debianize.Prelude",
          "name": "diffFile",
          "normalized": "FilePath-\u003eText-\u003eIO(Maybe String)",
          "package": "cabal-debian",
          "partial": "File",
          "signature": "FilePath-\u003eText-\u003eIO(Maybe String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Prelude.html#v:diffFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a map from pathname to the names of the packages that contains that pathname using the\n contents of the debian package info directory \u003ccode\u003e\u003cem\u003evar\u003c/em\u003elib\u003cem\u003edpkg\u003c/em\u003einfo\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Debian.Debianize.Prelude\",\"Debian.Debianize\"]",
          "name": "dpkgFileMap",
          "package": "cabal-debian",
          "signature": "IO (Map FilePath (Set BinPkgName))",
          "source": "src/Debian-Debianize-Prelude.html#dpkgFileMap",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Prelude.html#v:dpkgFileMap\",\"http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize.html#v:dpkgFileMap\"]"
        },
        "index": {
          "description": "Create map from pathname to the names of the packages that contains that pathname using the contents of the debian package info directory var lib dpkg info",
          "hierarchy": "Debian Debianize Prelude",
          "module": "Debian.Debianize.Prelude",
          "name": "dpkgFileMap",
          "package": "cabal-debian",
          "partial": "File Map",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Prelude.html#v:dpkgFileMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Debianize.Prelude",
          "name": "foldEmpty",
          "package": "cabal-debian",
          "signature": "r -\u003e ([a] -\u003e r) -\u003e [a] -\u003e r",
          "source": "src/Debian-Debianize-Prelude.html#foldEmpty",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debian Debianize Prelude",
          "module": "Debian.Debianize.Prelude",
          "name": "foldEmpty",
          "normalized": "a-\u003e([b]-\u003ea)-\u003e[b]-\u003ea",
          "package": "cabal-debian",
          "partial": "Empty",
          "signature": "r-\u003e([a]-\u003er)-\u003e[a]-\u003er",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Prelude.html#v:foldEmpty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Debianize.Prelude",
          "name": "fromEmpty",
          "package": "cabal-debian",
          "signature": "Set a -\u003e Set a -\u003e Set a",
          "source": "src/Debian-Debianize-Prelude.html#fromEmpty",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debian Debianize Prelude",
          "module": "Debian.Debianize.Prelude",
          "name": "fromEmpty",
          "normalized": "Set a-\u003eSet a-\u003eSet a",
          "package": "cabal-debian",
          "partial": "Empty",
          "signature": "Set a-\u003eSet a-\u003eSet a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Prelude.html#v:fromEmpty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Debianize.Prelude",
          "name": "fromSingleton",
          "package": "cabal-debian",
          "signature": "a -\u003e ([a] -\u003e a) -\u003e Set a -\u003e a",
          "source": "src/Debian-Debianize-Prelude.html#fromSingleton",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debian Debianize Prelude",
          "module": "Debian.Debianize.Prelude",
          "name": "fromSingleton",
          "normalized": "a-\u003e([a]-\u003ea)-\u003eSet a-\u003ea",
          "package": "cabal-debian",
          "partial": "Singleton",
          "signature": "a-\u003e([a]-\u003ea)-\u003eSet a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Prelude.html#v:fromSingleton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet directory contents minus dot files.\n\u003c/p\u003e",
          "module": "Debian.Debianize.Prelude",
          "name": "getDirectoryContents'",
          "package": "cabal-debian",
          "signature": "FilePath -\u003e IO [FilePath]",
          "source": "src/Debian-Debianize-Prelude.html#getDirectoryContents%27",
          "type": "function"
        },
        "index": {
          "description": "Get directory contents minus dot files",
          "hierarchy": "Debian Debianize Prelude",
          "module": "Debian.Debianize.Prelude",
          "name": "getDirectoryContents'",
          "normalized": "FilePath-\u003eIO[FilePath]",
          "package": "cabal-debian",
          "partial": "Directory Contents'",
          "signature": "FilePath-\u003eIO[FilePath]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Prelude.html#v:getDirectoryContents-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Debianize.Prelude",
          "name": "indent",
          "package": "cabal-debian",
          "signature": "[Char] -\u003e String -\u003e String",
          "source": "src/Debian-Debianize-Prelude.html#indent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debian Debianize Prelude",
          "module": "Debian.Debianize.Prelude",
          "name": "indent",
          "normalized": "[Char]-\u003eString-\u003eString",
          "package": "cabal-debian",
          "signature": "[Char]-\u003eString-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Prelude.html#v:indent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVersion of \u003ccode\u003e\u003ca\u003eintToVerbosity\u003c/a\u003e\u003c/code\u003e that first\n clamps its argument to the acceptable range (0-3).\n\u003c/p\u003e",
          "module": "Debian.Debianize.Prelude",
          "name": "intToVerbosity'",
          "package": "cabal-debian",
          "signature": "Int -\u003e Verbosity",
          "source": "src/Debian-Debianize-Prelude.html#intToVerbosity%27",
          "type": "function"
        },
        "index": {
          "description": "Version of intToVerbosity that first clamps its argument to the acceptable range",
          "hierarchy": "Debian Debianize Prelude",
          "module": "Debian.Debianize.Prelude",
          "name": "intToVerbosity'",
          "normalized": "Int-\u003eVerbosity",
          "package": "cabal-debian",
          "partial": "To Verbosity'",
          "signature": "Int-\u003eVerbosity",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Prelude.html#v:intToVerbosity-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Debianize.Prelude",
          "name": "listElemLens",
          "package": "cabal-debian",
          "signature": "(a -\u003e Bool) -\u003e Lens [a] (Maybe a)",
          "source": "src/Debian-Debianize-Prelude.html#listElemLens",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debian Debianize Prelude",
          "module": "Debian.Debianize.Prelude",
          "name": "listElemLens",
          "normalized": "(a-\u003eBool)-\u003eLens[a](Maybe a)",
          "package": "cabal-debian",
          "partial": "Elem Lens",
          "signature": "(a-\u003eBool)-\u003eLens[a](Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Prelude.html#v:listElemLens"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf the current value of getL x is Nothing, replace it with f.\n\u003c/p\u003e",
          "module": "Debian.Debianize.Prelude",
          "name": "maybeL",
          "package": "cabal-debian",
          "signature": "Lens a (Maybe b) -\u003e Maybe b -\u003e a -\u003e a",
          "source": "src/Debian-Debianize-Prelude.html#maybeL",
          "type": "function"
        },
        "index": {
          "description": "If the current value of getL is Nothing replace it with",
          "hierarchy": "Debian Debianize Prelude",
          "module": "Debian.Debianize.Prelude",
          "name": "maybeL",
          "normalized": "Lens a(Maybe b)-\u003eMaybe b-\u003ea-\u003ea",
          "package": "cabal-debian",
          "signature": "Lens a(Maybe b)-\u003eMaybe b-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Prelude.html#v:maybeL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Debianize.Prelude",
          "name": "maybeLens",
          "package": "cabal-debian",
          "signature": "a -\u003e Lens a b -\u003e Lens (Maybe a) b",
          "source": "src/Debian-Debianize-Prelude.html#maybeLens",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debian Debianize Prelude",
          "module": "Debian.Debianize.Prelude",
          "name": "maybeLens",
          "normalized": "a-\u003eLens a b-\u003eLens(Maybe a)b",
          "package": "cabal-debian",
          "partial": "Lens",
          "signature": "a-\u003eLens a b-\u003eLens(Maybe a)b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Prelude.html#v:maybeLens"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Debianize.Prelude",
          "name": "maybeRead",
          "package": "cabal-debian",
          "signature": "String -\u003e Maybe a",
          "source": "src/Debian-Debianize-Prelude.html#maybeRead",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debian Debianize Prelude",
          "module": "Debian.Debianize.Prelude",
          "name": "maybeRead",
          "normalized": "String-\u003eMaybe a",
          "package": "cabal-debian",
          "partial": "Read",
          "signature": "String-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Prelude.html#v:maybeRead"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute the new file contents from the old.  If f returns Nothing\n do not write.\n\u003c/p\u003e",
          "module": "Debian.Debianize.Prelude",
          "name": "modifyFile",
          "package": "cabal-debian",
          "signature": "FilePath -\u003e (String -\u003e IO (Maybe String)) -\u003e IO ()",
          "source": "src/Debian-Debianize-Prelude.html#modifyFile",
          "type": "function"
        },
        "index": {
          "description": "Compute the new file contents from the old If returns Nothing do not write",
          "hierarchy": "Debian Debianize Prelude",
          "module": "Debian.Debianize.Prelude",
          "name": "modifyFile",
          "normalized": "FilePath-\u003e(String-\u003eIO(Maybe String))-\u003eIO()",
          "package": "cabal-debian",
          "partial": "File",
          "signature": "FilePath-\u003e(String-\u003eIO(Maybe String))-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Prelude.html#v:modifyFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Debianize.Prelude",
          "name": "modifyM",
          "package": "cabal-debian",
          "signature": "(a -\u003e m a) -\u003e m ()",
          "source": "src/Debian-Debianize-Prelude.html#modifyM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debian Debianize Prelude",
          "module": "Debian.Debianize.Prelude",
          "name": "modifyM",
          "normalized": "(a-\u003eb a)-\u003eb()",
          "package": "cabal-debian",
          "signature": "(a-\u003em a)-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Prelude.html#v:modifyM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Debianize.Prelude",
          "name": "pretty",
          "package": "cabal-debian",
          "signature": "a -\u003e Doc",
          "type": "method"
        },
        "index": {
          "hierarchy": "Debian Debianize Prelude",
          "module": "Debian.Debianize.Prelude",
          "name": "pretty",
          "normalized": "a-\u003eDoc",
          "package": "cabal-debian",
          "signature": "a-\u003eDoc",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Prelude.html#v:pretty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Debianize.Prelude",
          "name": "read'",
          "package": "cabal-debian",
          "signature": "(String -\u003e a) -\u003e String -\u003e a",
          "source": "src/Debian-Debianize-Prelude.html#read%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debian Debianize Prelude",
          "module": "Debian.Debianize.Prelude",
          "name": "read'",
          "normalized": "(String-\u003ea)-\u003eString-\u003ea",
          "package": "cabal-debian",
          "signature": "(String-\u003ea)-\u003eString-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Prelude.html#v:read-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Debianize.Prelude",
          "name": "readFile'",
          "package": "cabal-debian",
          "signature": "FilePath -\u003e IO Text",
          "source": "src/Debian-Debianize-Prelude.html#readFile%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debian Debianize Prelude",
          "module": "Debian.Debianize.Prelude",
          "name": "readFile'",
          "normalized": "FilePath-\u003eIO Text",
          "package": "cabal-debian",
          "partial": "File'",
          "signature": "FilePath-\u003eIO Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Prelude.html#v:readFile-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Debianize.Prelude",
          "name": "readFileMaybe",
          "package": "cabal-debian",
          "signature": "FilePath -\u003e IO (Maybe Text)",
          "source": "src/Debian-Debianize-Prelude.html#readFileMaybe",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debian Debianize Prelude",
          "module": "Debian.Debianize.Prelude",
          "name": "readFileMaybe",
          "normalized": "FilePath-\u003eIO(Maybe Text)",
          "package": "cabal-debian",
          "partial": "File Maybe",
          "signature": "FilePath-\u003eIO(Maybe Text)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Prelude.html#v:readFileMaybe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Debianize.Prelude",
          "name": "removeIfExists",
          "package": "cabal-debian",
          "signature": "FilePath -\u003e IO ()",
          "source": "src/Debian-Debianize-Prelude.html#removeIfExists",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debian Debianize Prelude",
          "module": "Debian.Debianize.Prelude",
          "name": "removeIfExists",
          "normalized": "FilePath-\u003eIO()",
          "package": "cabal-debian",
          "partial": "If Exists",
          "signature": "FilePath-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Prelude.html#v:removeIfExists"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a file which we might still be reading from in\n order to compute the text argument.\n\u003c/p\u003e",
          "module": "Debian.Debianize.Prelude",
          "name": "replaceFile",
          "package": "cabal-debian",
          "signature": "FilePath -\u003e String -\u003e IO ()",
          "source": "src/Debian-Debianize-Prelude.html#replaceFile",
          "type": "function"
        },
        "index": {
          "description": "Write file which we might still be reading from in order to compute the text argument",
          "hierarchy": "Debian Debianize Prelude",
          "module": "Debian.Debianize.Prelude",
          "name": "replaceFile",
          "normalized": "FilePath-\u003eString-\u003eIO()",
          "package": "cabal-debian",
          "partial": "File",
          "signature": "FilePath-\u003eString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Prelude.html#v:replaceFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Debianize.Prelude",
          "name": "setMapMaybe",
          "package": "cabal-debian",
          "signature": "(a -\u003e Maybe b) -\u003e Set a -\u003e Set b",
          "source": "src/Debian-Debianize-Prelude.html#setMapMaybe",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debian Debianize Prelude",
          "module": "Debian.Debianize.Prelude",
          "name": "setMapMaybe",
          "normalized": "(a-\u003eMaybe b)-\u003eSet a-\u003eSet b",
          "package": "cabal-debian",
          "partial": "Map Maybe",
          "signature": "(a-\u003eMaybe b)-\u003eSet a-\u003eSet b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Prelude.html#v:setMapMaybe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Debianize.Prelude",
          "name": "showDeps",
          "package": "cabal-debian",
          "signature": "[[Relation]] -\u003e String",
          "source": "src/Debian-Debianize-Prelude.html#showDeps",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debian Debianize Prelude",
          "module": "Debian.Debianize.Prelude",
          "name": "showDeps",
          "normalized": "[[Relation]]-\u003eString",
          "package": "cabal-debian",
          "partial": "Deps",
          "signature": "[[Relation]]-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Prelude.html#v:showDeps"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Debianize.Prelude",
          "name": "showDeps'",
          "package": "cabal-debian",
          "signature": "[a] -\u003e [[Relation]] -\u003e String",
          "source": "src/Debian-Debianize-Prelude.html#showDeps%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debian Debianize Prelude",
          "module": "Debian.Debianize.Prelude",
          "name": "showDeps'",
          "normalized": "[a]-\u003e[[Relation]]-\u003eString",
          "package": "cabal-debian",
          "partial": "Deps'",
          "signature": "[a]-\u003e[[Relation]]-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Prelude.html#v:showDeps-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Debianize.Prelude",
          "name": "strictReadF",
          "package": "cabal-debian",
          "signature": "(Text -\u003e r) -\u003e FilePath -\u003e IO r",
          "source": "src/Debian-Debianize-Prelude.html#strictReadF",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debian Debianize Prelude",
          "module": "Debian.Debianize.Prelude",
          "name": "strictReadF",
          "normalized": "(Text-\u003ea)-\u003eFilePath-\u003eIO a",
          "package": "cabal-debian",
          "partial": "Read",
          "signature": "(Text-\u003er)-\u003eFilePath-\u003eIO r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Prelude.html#v:strictReadF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Debianize.Prelude",
          "name": "trim",
          "package": "cabal-debian",
          "signature": "String -\u003e String",
          "source": "src/Debian-Debianize-Prelude.html#trim",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debian Debianize Prelude",
          "module": "Debian.Debianize.Prelude",
          "name": "trim",
          "normalized": "String-\u003eString",
          "package": "cabal-debian",
          "signature": "String-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Prelude.html#v:trim"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFrom Darcs.Utils - set the working directory and run an IO operation.\n\u003c/p\u003e",
          "module": "[\"Debian.Debianize.Prelude\",\"Debian.Debianize\"]",
          "name": "withCurrentDirectory",
          "package": "cabal-debian",
          "signature": "FilePath -\u003e IO a -\u003e IO a",
          "source": "src/Debian-Debianize-Prelude.html#withCurrentDirectory",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Prelude.html#v:withCurrentDirectory\",\"http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize.html#v:withCurrentDirectory\"]"
        },
        "index": {
          "description": "From Darcs.Utils set the working directory and run an IO operation",
          "hierarchy": "Debian Debianize Prelude",
          "module": "Debian.Debianize.Prelude",
          "name": "withCurrentDirectory",
          "normalized": "FilePath-\u003eIO a-\u003eIO a",
          "package": "cabal-debian",
          "partial": "Current Directory",
          "signature": "FilePath-\u003eIO a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Prelude.html#v:withCurrentDirectory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Debianize.Prelude",
          "name": "zipMaps",
          "package": "cabal-debian",
          "signature": "(k -\u003e Maybe a -\u003e Maybe b -\u003e Maybe c) -\u003e Map k a -\u003e Map k b -\u003e Map k c",
          "source": "src/Debian-Debianize-Prelude.html#zipMaps",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debian Debianize Prelude",
          "module": "Debian.Debianize.Prelude",
          "name": "zipMaps",
          "normalized": "(a-\u003eMaybe b-\u003eMaybe c-\u003eMaybe d)-\u003eMap a b-\u003eMap a c-\u003eMap a d",
          "package": "cabal-debian",
          "partial": "Maps",
          "signature": "(k-\u003eMaybe a-\u003eMaybe b-\u003eMaybe c)-\u003eMap k a-\u003eMap k b-\u003eMap k c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Prelude.html#v:zipMaps"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSupport for generating Debianization from Cabal data.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Debian.Debianize.SubstVars",
          "name": "SubstVars",
          "package": "cabal-debian",
          "source": "src/Debian-Debianize-SubstVars.html",
          "type": "module"
        },
        "index": {
          "description": "Support for generating Debianization from Cabal data",
          "hierarchy": "Debian Debianize SubstVars",
          "module": "Debian.Debianize.SubstVars",
          "name": "SubstVars",
          "package": "cabal-debian",
          "partial": "Subst Vars",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-SubstVars.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExpand the contents of the .substvars file for a library package.\n Each cabal package corresponds to a directory \u003ca\u003ename\u003c/a\u003e-\u003ca\u003eversion\u003c/a\u003e,\n either in \u003cem\u003eusr\u003c/em\u003elib or in \u003cem\u003eusr\u003c/em\u003elib\u003cem\u003ehaskell-packages\u003c/em\u003eghc/lib.  In\n that directory is a compiler subdirectory such as ghc-6.8.2.  In\n the ghc subdirectory is one or two library files of the form\n libHS\u003ca\u003ename\u003c/a\u003e-\u003ca\u003eversion\u003c/a\u003e.a and libHS\u003ca\u003ename\u003c/a\u003e-\u003ca\u003eversion\u003c/a\u003e_p.a.  We can\n determine the debian package names by running dpkg -S on these\n names, or examining the \u003cem\u003evar\u003c/em\u003elib\u003cem\u003edpkg\u003c/em\u003einfo/*.list files.  From\n these we can determine the source package name, and from that the\n documentation package name.\n\u003c/p\u003e",
          "module": "[\"Debian.Debianize.SubstVars\",\"Debian.Debianize\"]",
          "name": "substvars",
          "package": "cabal-debian",
          "signature": "Top-\u003e DebType-\u003e DebT IO ()",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-SubstVars.html#v:substvars\",\"http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize.html#v:substvars\"]"
        },
        "index": {
          "description": "Expand the contents of the substvars file for library package Each cabal package corresponds to directory name version either in usr lib or in usr lib haskell-packages ghc lib In that directory is compiler subdirectory such as ghc-6.8.2 In the ghc subdirectory is one or two library files of the form libHS name version and libHS name version p.a We can determine the debian package names by running dpkg on these names or examining the var lib dpkg info list files From these we can determine the source package name and from that the documentation package name",
          "hierarchy": "Debian Debianize SubstVars",
          "module": "Debian.Debianize.SubstVars",
          "name": "substvars",
          "normalized": "Top-\u003eDebType-\u003eDebT IO()",
          "package": "cabal-debian",
          "signature": "Top-\u003eDebType-\u003eDebT IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-SubstVars.html#v:substvars"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module holds a long list of lenses that access the Atoms\n record, the record that holds the input data from which the\n debianization is to be constructed.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Debian.Debianize.Types.Atoms",
          "name": "Atoms",
          "package": "cabal-debian",
          "source": "src/Debian-Debianize-Types-Atoms.html",
          "type": "module"
        },
        "index": {
          "description": "This module holds long list of lenses that access the Atoms record the record that holds the input data from which the debianization is to be constructed",
          "hierarchy": "Debian Debianize Types Atoms",
          "module": "Debian.Debianize.Types.Atoms",
          "name": "Atoms",
          "package": "cabal-debian",
          "partial": "Atoms",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-Atoms.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBits and pieces of information about the mapping from cabal package\n names and versions to debian package names and versions.  In essence,\n an \u003ccode\u003e\u003ca\u003eAtoms\u003c/a\u003e\u003c/code\u003e value represents a package's debianization.  The lenses in\n this module are used to get and set the values hidden in this Atoms\n value.  Many of the values should be left alone to be set when the\n debianization is finalized.\n\u003c/p\u003e",
          "module": "Debian.Debianize.Types.Atoms",
          "name": "Atoms",
          "package": "cabal-debian",
          "source": "src/Debian-Debianize-Types-Atoms.html#Atoms",
          "type": "data"
        },
        "index": {
          "description": "Bits and pieces of information about the mapping from cabal package names and versions to debian package names and versions In essence an Atoms value represents package debianization The lenses in this module are used to get and set the values hidden in this Atoms value Many of the values should be left alone to be set when the debianization is finalized",
          "hierarchy": "Debian Debianize Types Atoms",
          "module": "Debian.Debianize.Types.Atoms",
          "name": "Atoms",
          "package": "cabal-debian",
          "partial": "Atoms",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-Atoms.html#t:Atoms"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Debianize.Types.Atoms",
          "name": "DebAction",
          "package": "cabal-debian",
          "source": "src/Debian-Debianize-Types-Atoms.html#DebAction",
          "type": "data"
        },
        "index": {
          "hierarchy": "Debian Debianize Types Atoms",
          "module": "Debian.Debianize.Types.Atoms",
          "name": "DebAction",
          "package": "cabal-debian",
          "partial": "Deb Action",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-Atoms.html#t:DebAction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA redundant data type, too lazy to expunge.\n\u003c/p\u003e",
          "module": "Debian.Debianize.Types.Atoms",
          "name": "DebType",
          "package": "cabal-debian",
          "source": "src/Debian-Debianize-Types-Atoms.html#DebType",
          "type": "data"
        },
        "index": {
          "description": "redundant data type too lazy to expunge",
          "hierarchy": "Debian Debianize Types Atoms",
          "module": "Debian.Debianize.Types.Atoms",
          "name": "DebType",
          "package": "cabal-debian",
          "partial": "Deb Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-Atoms.html#t:DebType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis record supplies information about the task we want done -\n debianization, validataion, help message, etc.\n\u003c/p\u003e",
          "module": "Debian.Debianize.Types.Atoms",
          "name": "Flags",
          "package": "cabal-debian",
          "source": "src/Debian-Debianize-Types-Atoms.html#Flags",
          "type": "data"
        },
        "index": {
          "description": "This record supplies information about the task we want done debianization validataion help message etc",
          "hierarchy": "Debian Debianize Types Atoms",
          "module": "Debian.Debianize.Types.Atoms",
          "name": "Flags",
          "package": "cabal-debian",
          "partial": "Flags",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-Atoms.html#t:Flags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Debianize.Types.Atoms",
          "name": "InstallFile",
          "package": "cabal-debian",
          "source": "src/Debian-Debianize-Types-Atoms.html#InstallFile",
          "type": "data"
        },
        "index": {
          "hierarchy": "Debian Debianize Types Atoms",
          "module": "Debian.Debianize.Types.Atoms",
          "name": "InstallFile",
          "package": "cabal-debian",
          "partial": "Install File",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-Atoms.html#t:InstallFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Debianize.Types.Atoms",
          "name": "PackageInfo",
          "package": "cabal-debian",
          "source": "src/Debian-Debianize-Types-Atoms.html#PackageInfo",
          "type": "data"
        },
        "index": {
          "hierarchy": "Debian Debianize Types Atoms",
          "module": "Debian.Debianize.Types.Atoms",
          "name": "PackageInfo",
          "package": "cabal-debian",
          "partial": "Package Info",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-Atoms.html#t:PackageInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInformation about the server we are packaging.\n\u003c/p\u003e",
          "module": "Debian.Debianize.Types.Atoms",
          "name": "Server",
          "package": "cabal-debian",
          "source": "src/Debian-Debianize-Types-Atoms.html#Server",
          "type": "data"
        },
        "index": {
          "description": "Information about the server we are packaging",
          "hierarchy": "Debian Debianize Types Atoms",
          "module": "Debian.Debianize.Types.Atoms",
          "name": "Server",
          "package": "cabal-debian",
          "partial": "Server",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-Atoms.html#t:Server"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInformation about the web site we are packaging.\n\u003c/p\u003e",
          "module": "Debian.Debianize.Types.Atoms",
          "name": "Site",
          "package": "cabal-debian",
          "source": "src/Debian-Debianize-Types-Atoms.html#Site",
          "type": "data"
        },
        "index": {
          "description": "Information about the web site we are packaging",
          "hierarchy": "Debian Debianize Types Atoms",
          "module": "Debian.Debianize.Types.Atoms",
          "name": "Site",
          "package": "cabal-debian",
          "partial": "Site",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-Atoms.html#t:Site"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Debianize.Types.Atoms",
          "name": "Atoms",
          "package": "cabal-debian",
          "signature": "Atoms",
          "source": "src/Debian-Debianize-Types-Atoms.html#Atoms",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debian Debianize Types Atoms",
          "module": "Debian.Debianize.Types.Atoms",
          "name": "Atoms",
          "package": "cabal-debian",
          "partial": "Atoms",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-Atoms.html#v:Atoms"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Debianize.Types.Atoms",
          "name": "Debianize",
          "package": "cabal-debian",
          "signature": "Debianize",
          "source": "src/Debian-Debianize-Types-Atoms.html#DebAction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debian Debianize Types Atoms",
          "module": "Debian.Debianize.Types.Atoms",
          "name": "Debianize",
          "package": "cabal-debian",
          "partial": "Debianize",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-Atoms.html#v:Debianize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Debianize.Types.Atoms",
          "name": "Dev",
          "package": "cabal-debian",
          "signature": "Dev",
          "source": "src/Debian-Debianize-Types-Atoms.html#DebType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debian Debianize Types Atoms",
          "module": "Debian.Debianize.Types.Atoms",
          "name": "Dev",
          "package": "cabal-debian",
          "partial": "Dev",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-Atoms.html#v:Dev"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Debianize.Types.Atoms",
          "name": "Doc",
          "package": "cabal-debian",
          "signature": "Doc",
          "source": "src/Debian-Debianize-Types-Atoms.html#DebType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debian Debianize Types Atoms",
          "module": "Debian.Debianize.Types.Atoms",
          "name": "Doc",
          "package": "cabal-debian",
          "partial": "Doc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-Atoms.html#v:Doc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Debianize.Types.Atoms",
          "name": "Flags",
          "package": "cabal-debian",
          "signature": "Flags",
          "source": "src/Debian-Debianize-Types-Atoms.html#Flags",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debian Debianize Types Atoms",
          "module": "Debian.Debianize.Types.Atoms",
          "name": "Flags",
          "package": "cabal-debian",
          "partial": "Flags",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-Atoms.html#v:Flags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Debianize.Types.Atoms",
          "name": "InstallFile",
          "package": "cabal-debian",
          "signature": "InstallFile",
          "source": "src/Debian-Debianize-Types-Atoms.html#InstallFile",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debian Debianize Types Atoms",
          "module": "Debian.Debianize.Types.Atoms",
          "name": "InstallFile",
          "package": "cabal-debian",
          "partial": "Install File",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-Atoms.html#v:InstallFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Debianize.Types.Atoms",
          "name": "PackageInfo",
          "package": "cabal-debian",
          "signature": "PackageInfo",
          "source": "src/Debian-Debianize-Types-Atoms.html#PackageInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debian Debianize Types Atoms",
          "module": "Debian.Debianize.Types.Atoms",
          "name": "PackageInfo",
          "package": "cabal-debian",
          "partial": "Package Info",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-Atoms.html#v:PackageInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Debianize.Types.Atoms",
          "name": "Prof",
          "package": "cabal-debian",
          "signature": "Prof",
          "source": "src/Debian-Debianize-Types-Atoms.html#DebType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debian Debianize Types Atoms",
          "module": "Debian.Debianize.Types.Atoms",
          "name": "Prof",
          "package": "cabal-debian",
          "partial": "Prof",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-Atoms.html#v:Prof"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Debianize.Types.Atoms",
          "name": "Server",
          "package": "cabal-debian",
          "signature": "Server",
          "source": "src/Debian-Debianize-Types-Atoms.html#Server",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debian Debianize Types Atoms",
          "module": "Debian.Debianize.Types.Atoms",
          "name": "Server",
          "package": "cabal-debian",
          "partial": "Server",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-Atoms.html#v:Server"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Debianize.Types.Atoms",
          "name": "Site",
          "package": "cabal-debian",
          "signature": "Site",
          "source": "src/Debian-Debianize-Types-Atoms.html#Site",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debian Debianize Types Atoms",
          "module": "Debian.Debianize.Types.Atoms",
          "name": "Site",
          "package": "cabal-debian",
          "partial": "Site",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-Atoms.html#v:Site"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Debianize.Types.Atoms",
          "name": "SubstVar",
          "package": "cabal-debian",
          "signature": "SubstVar DebType",
          "source": "src/Debian-Debianize-Types-Atoms.html#DebAction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debian Debianize Types Atoms",
          "module": "Debian.Debianize.Types.Atoms",
          "name": "SubstVar",
          "package": "cabal-debian",
          "partial": "Subst Var",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-Atoms.html#v:SubstVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Debianize.Types.Atoms",
          "name": "Usage",
          "package": "cabal-debian",
          "signature": "Usage",
          "source": "src/Debian-Debianize-Types-Atoms.html#DebAction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debian Debianize Types Atoms",
          "module": "Debian.Debianize.Types.Atoms",
          "name": "Usage",
          "package": "cabal-debian",
          "partial": "Usage",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-Atoms.html#v:Usage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate an apache configuration file with the given\n (domain, logdir, filetext).  This is called when expanding\n the result of the website lens above.\n\u003c/p\u003e",
          "module": "[\"Debian.Debianize.Types.Atoms\",\"Debian.Debianize.Types\"]",
          "name": "apacheSite",
          "package": "cabal-debian",
          "signature": "Lens Atoms (Map BinPkgName (String, FilePath, Text))",
          "source": "src/Debian-Debianize-Types-Atoms.html#apacheSite",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-Atoms.html#v:apacheSite\",\"http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types.html#v:apacheSite\"]"
        },
        "index": {
          "description": "Create an apache configuration file with the given domain logdir filetext This is called when expanding the result of the website lens above",
          "hierarchy": "Debian Debianize Types Atoms",
          "module": "Debian.Debianize.Types.Atoms",
          "name": "apacheSite",
          "normalized": "Lens Atoms(Map BinPkgName(String,FilePath,Text))",
          "package": "cabal-debian",
          "partial": "Site",
          "signature": "Lens Atoms(Map BinPkgName(String,FilePath,Text))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-Atoms.html#v:apacheSite"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHave Apache configure a site using PACKAGE, DOMAIN, LOGDIR, and APACHECONFIGFILE\n\u003c/p\u003e",
          "module": "Debian.Debianize.Types.Atoms",
          "name": "apacheSite_",
          "package": "cabal-debian",
          "signature": "Map BinPkgName (String, FilePath, Text)",
          "source": "src/Debian-Debianize-Types-Atoms.html#Atoms",
          "type": "function"
        },
        "index": {
          "description": "Have Apache configure site using PACKAGE DOMAIN LOGDIR and APACHECONFIGFILE",
          "hierarchy": "Debian Debianize Types Atoms",
          "module": "Debian.Debianize.Types.Atoms",
          "name": "apacheSite_",
          "normalized": "Map BinPkgName(String,FilePath,Text)",
          "package": "cabal-debian",
          "partial": "Site",
          "signature": "Map BinPkgName(String,FilePath,Text)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-Atoms.html#v:apacheSite_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a package for a timed backup script\n\u003c/p\u003e",
          "module": "[\"Debian.Debianize.Types.Atoms\",\"Debian.Debianize.Types\"]",
          "name": "backups",
          "package": "cabal-debian",
          "signature": "Lens Atoms (Map BinPkgName String)",
          "source": "src/Debian-Debianize-Types-Atoms.html#backups",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-Atoms.html#v:backups\",\"http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types.html#v:backups\"]"
        },
        "index": {
          "description": "Create package for timed backup script",
          "hierarchy": "Debian Debianize Types Atoms",
          "module": "Debian.Debianize.Types.Atoms",
          "name": "backups",
          "package": "cabal-debian",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-Atoms.html#v:backups"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConfigure the executable to do incremental backups\n\u003c/p\u003e",
          "module": "Debian.Debianize.Types.Atoms",
          "name": "backups_",
          "package": "cabal-debian",
          "signature": "Map BinPkgName String",
          "source": "src/Debian-Debianize-Types-Atoms.html#Atoms",
          "type": "function"
        },
        "index": {
          "description": "Configure the executable to do incremental backups",
          "hierarchy": "Debian Debianize Types Atoms",
          "module": "Debian.Debianize.Types.Atoms",
          "name": "backups_",
          "package": "cabal-debian",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-Atoms.html#v:backups_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the Architecture field of a binary package\n\u003c/p\u003e",
          "module": "Debian.Debianize.Types.Atoms",
          "name": "binaryArchitectures_",
          "package": "cabal-debian",
          "signature": "Map BinPkgName PackageArchitectures",
          "source": "src/Debian-Debianize-Types-Atoms.html#Atoms",
          "type": "function"
        },
        "index": {
          "description": "Set the Architecture field of binary package",
          "hierarchy": "Debian Debianize Types Atoms",
          "module": "Debian.Debianize.Types.Atoms",
          "name": "binaryArchitectures_",
          "package": "cabal-debian",
          "partial": "Architectures",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-Atoms.html#v:binaryArchitectures_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the Priority field of a binary package\n\u003c/p\u003e",
          "module": "Debian.Debianize.Types.Atoms",
          "name": "binaryPriorities_",
          "package": "cabal-debian",
          "signature": "Map BinPkgName PackagePriority",
          "source": "src/Debian-Debianize-Types-Atoms.html#Atoms",
          "type": "function"
        },
        "index": {
          "description": "Set the Priority field of binary package",
          "hierarchy": "Debian Debianize Types Atoms",
          "module": "Debian.Debianize.Types.Atoms",
          "name": "binaryPriorities_",
          "package": "cabal-debian",
          "partial": "Priorities",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-Atoms.html#v:binaryPriorities_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the Section field of a binary package\n\u003c/p\u003e",
          "module": "Debian.Debianize.Types.Atoms",
          "name": "binarySections_",
          "package": "cabal-debian",
          "signature": "Map BinPkgName Section",
          "source": "src/Debian-Debianize-Types-Atoms.html#Atoms",
          "type": "function"
        },
        "index": {
          "description": "Set the Section field of binary package",
          "hierarchy": "Debian Debianize Types Atoms",
          "module": "Debian.Debianize.Types.Atoms",
          "name": "binarySections_",
          "package": "cabal-debian",
          "partial": "Sections",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-Atoms.html#v:binarySections_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe build directory.  This can be set by an argument to the \u003ccode\u003eSetup\u003c/code\u003e script.\n When \u003ccode\u003eSetup\u003c/code\u003e is run manually it is just \u003ccode\u003edist\u003c/code\u003e, when it is run by\n \u003ccode\u003edpkg-buildpackage\u003c/code\u003e the compiler name is appended, so it is typically\n \u003ccode\u003edist-ghc\u003c/code\u003e.  Cabal-debian needs the correct value of buildDir to find\n the build results.\n\u003c/p\u003e",
          "module": "[\"Debian.Debianize.Types.Atoms\",\"Debian.Debianize.Types\"]",
          "name": "buildDir",
          "package": "cabal-debian",
          "signature": "Lens Atoms (Set FilePath)",
          "source": "src/Debian-Debianize-Types-Atoms.html#buildDir",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-Atoms.html#v:buildDir\",\"http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types.html#v:buildDir\"]"
        },
        "index": {
          "description": "The build directory This can be set by an argument to the Setup script When Setup is run manually it is just dist when it is run by dpkg-buildpackage the compiler name is appended so it is typically dist-ghc Cabal-debian needs the correct value of buildDir to find the build results",
          "hierarchy": "Debian Debianize Types Atoms",
          "module": "Debian.Debianize.Types.Atoms",
          "name": "buildDir",
          "package": "cabal-debian",
          "partial": "Dir",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-Atoms.html#v:buildDir"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe build directory used by cabal, typically dist/build when\n building manually or dist-ghc/build when building using GHC and\n haskell-devscripts.  This value is used to locate files\n produced by cabal so we can move them into the deb.  Note that\n the --builddir option of runhaskell Setup appends the \u003ca\u003e/build\u003c/a\u003e\n to the value it receives, so, yes, try not to get confused.\n FIXME: make this FilePath or Maybe FilePath\n\u003c/p\u003e",
          "module": "Debian.Debianize.Types.Atoms",
          "name": "buildDir_",
          "package": "cabal-debian",
          "signature": "Set FilePath",
          "source": "src/Debian-Debianize-Types-Atoms.html#Atoms",
          "type": "function"
        },
        "index": {
          "description": "The build directory used by cabal typically dist build when building manually or dist-ghc build when building using GHC and haskell-devscripts This value is used to locate files produced by cabal so we can move them into the deb Note that the builddir option of runhaskell Setup appends the build to the value it receives so yes try not to get confused FIXME make this FilePath or Maybe FilePath",
          "hierarchy": "Debian Debianize Types Atoms",
          "module": "Debian.Debianize.Types.Atoms",
          "name": "buildDir_",
          "package": "cabal-debian",
          "partial": "Dir",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-Atoms.html#v:buildDir_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCabal flag assignments to use when loading the cabal file.\n\u003c/p\u003e",
          "module": "[\"Debian.Debianize.Types.Atoms\",\"Debian.Debianize.Types\"]",
          "name": "cabalFlagAssignments",
          "package": "cabal-debian",
          "signature": "Lens Atoms (Set (FlagName, Bool))",
          "source": "src/Debian-Debianize-Types-Atoms.html#cabalFlagAssignments",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-Atoms.html#v:cabalFlagAssignments\",\"http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types.html#v:cabalFlagAssignments\"]"
        },
        "index": {
          "description": "Cabal flag assignments to use when loading the cabal file",
          "hierarchy": "Debian Debianize Types Atoms",
          "module": "Debian.Debianize.Types.Atoms",
          "name": "cabalFlagAssignments",
          "normalized": "Lens Atoms(Set(FlagName,Bool))",
          "package": "cabal-debian",
          "partial": "Flag Assignments",
          "signature": "Lens Atoms(Set(FlagName,Bool))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-Atoms.html#v:cabalFlagAssignments"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFlags to pass to Cabal function finalizePackageDescription,\n this can be used to control the flags in the cabal file.  It\n can be supplied to the cabal-debian binary using the --flags\n option.\n\u003c/p\u003e",
          "module": "Debian.Debianize.Types.Atoms",
          "name": "cabalFlagAssignments_",
          "package": "cabal-debian",
          "signature": "Set (FlagName, Bool)",
          "source": "src/Debian-Debianize-Types-Atoms.html#Atoms",
          "type": "function"
        },
        "index": {
          "description": "Flags to pass to Cabal function finalizePackageDescription this can be used to control the flags in the cabal file It can be supplied to the cabal-debian binary using the flags option",
          "hierarchy": "Debian Debianize Types Atoms",
          "module": "Debian.Debianize.Types.Atoms",
          "name": "cabalFlagAssignments_",
          "normalized": "Set(FlagName,Bool)",
          "package": "cabal-debian",
          "partial": "Flag Assignments",
          "signature": "Set(FlagName,Bool)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-Atoms.html#v:cabalFlagAssignments_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Debianize.Types.Atoms",
          "name": "cabalName",
          "package": "cabal-debian",
          "signature": "PackageName",
          "source": "src/Debian-Debianize-Types-Atoms.html#PackageInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debian Debianize Types Atoms",
          "module": "Debian.Debianize.Types.Atoms",
          "name": "cabalName",
          "package": "cabal-debian",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-Atoms.html#v:cabalName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe \u003ccode\u003edebian/changelog\u003c/code\u003e file\n\u003c/p\u003e",
          "module": "[\"Debian.Debianize.Types.Atoms\",\"Debian.Debianize.Types\"]",
          "name": "changelog",
          "package": "cabal-debian",
          "signature": "Lens Atoms (Maybe ChangeLog)",
          "source": "src/Debian-Debianize-Types-Atoms.html#changelog",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-Atoms.html#v:changelog\",\"http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types.html#v:changelog\"]"
        },
        "index": {
          "description": "the debian changelog file",
          "hierarchy": "Debian Debianize Types Atoms",
          "module": "Debian.Debianize.Types.Atoms",
          "name": "changelog",
          "package": "cabal-debian",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-Atoms.html#v:changelog"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe changelog, first entry contains the source package name and version\n\u003c/p\u003e",
          "module": "Debian.Debianize.Types.Atoms",
          "name": "changelog_",
          "package": "cabal-debian",
          "signature": "Maybe ChangeLog",
          "source": "src/Debian-Debianize-Types-Atoms.html#Atoms",
          "type": "function"
        },
        "index": {
          "description": "The changelog first entry contains the source package name and version",
          "hierarchy": "Debian Debianize Types Atoms",
          "module": "Debian.Debianize.Types.Atoms",
          "name": "changelog_",
          "package": "cabal-debian",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-Atoms.html#v:changelog_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComment entries for the latest changelog entry (DebLogComments [[Text]])\n\u003c/p\u003e",
          "module": "[\"Debian.Debianize.Types.Atoms\",\"Debian.Debianize.Types\"]",
          "name": "comments",
          "package": "cabal-debian",
          "signature": "Lens Atoms (Maybe [[Text]])",
          "source": "src/Debian-Debianize-Types-Atoms.html#comments",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-Atoms.html#v:comments\",\"http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types.html#v:comments\"]"
        },
        "index": {
          "description": "Comment entries for the latest changelog entry DebLogComments Text",
          "hierarchy": "Debian Debianize Types Atoms",
          "module": "Debian.Debianize.Types.Atoms",
          "name": "comments",
          "normalized": "Lens Atoms(Maybe[[Text]])",
          "package": "cabal-debian",
          "signature": "Lens Atoms(Maybe[[Text]])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-Atoms.html#v:comments"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEach element is a comment to be added to the changelog, where the\n element's text elements are the lines of the comment.\n\u003c/p\u003e",
          "module": "Debian.Debianize.Types.Atoms",
          "name": "comments_",
          "package": "cabal-debian",
          "signature": "Maybe [[Text]]",
          "source": "src/Debian-Debianize-Types-Atoms.html#Atoms",
          "type": "function"
        },
        "index": {
          "description": "Each element is comment to be added to the changelog where the element text elements are the lines of the comment",
          "hierarchy": "Debian Debianize Types Atoms",
          "module": "Debian.Debianize.Types.Atoms",
          "name": "comments_",
          "normalized": "Maybe[[Text]]",
          "package": "cabal-debian",
          "signature": "Maybe[[Text]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-Atoms.html#v:comments_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003edebian/compat\u003c/code\u003e file, contains the minimum compatible version\n of the \u003ccode\u003edebhelper\u003c/code\u003e package.  If not given the version number of the\n installed debhelper package is used.\n\u003c/p\u003e",
          "module": "[\"Debian.Debianize.Types.Atoms\",\"Debian.Debianize.Types\"]",
          "name": "compat",
          "package": "cabal-debian",
          "signature": "Lens Atoms (Maybe Int)",
          "source": "src/Debian-Debianize-Types-Atoms.html#compat",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-Atoms.html#v:compat\",\"http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types.html#v:compat\"]"
        },
        "index": {
          "description": "The debian compat file contains the minimum compatible version of the debhelper package If not given the version number of the installed debhelper package is used",
          "hierarchy": "Debian Debianize Types Atoms",
          "module": "Debian.Debianize.Types.Atoms",
          "name": "compat",
          "package": "cabal-debian",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-Atoms.html#v:compat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe debhelper compatibility level, from debian/compat.\n\u003c/p\u003e",
          "module": "Debian.Debianize.Types.Atoms",
          "name": "compat_",
          "package": "cabal-debian",
          "signature": "Maybe Int",
          "source": "src/Debian-Debianize-Types-Atoms.html#Atoms",
          "type": "function"
        },
        "index": {
          "description": "The debhelper compatibility level from debian compat",
          "hierarchy": "Debian Debianize Types Atoms",
          "module": "Debian.Debianize.Types.Atoms",
          "name": "compat_",
          "package": "cabal-debian",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-Atoms.html#v:compat_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAnother result of loading a .cabal file\n\u003c/p\u003e",
          "module": "[\"Debian.Debianize.Types.Atoms\",\"Debian.Debianize.Types\"]",
          "name": "compiler",
          "package": "cabal-debian",
          "signature": "Lens Atoms (Maybe CompilerId)",
          "source": "src/Debian-Debianize-Types-Atoms.html#compiler",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-Atoms.html#v:compiler\",\"http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types.html#v:compiler\"]"
        },
        "index": {
          "description": "Another result of loading cabal file",
          "hierarchy": "Debian Debianize Types Atoms",
          "module": "Debian.Debianize.Types.Atoms",
          "name": "compiler",
          "package": "cabal-debian",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-Atoms.html#v:compiler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the compiler version, this is used when loading the cabal file to\n\u003c/p\u003e",
          "module": "[\"Debian.Debianize.Types.Atoms\",\"Debian.Debianize.Types\"]",
          "name": "compilerVersion",
          "package": "cabal-debian",
          "signature": "Lens Atoms (Maybe Version)",
          "source": "src/Debian-Debianize-Types-Atoms.html#compilerVersion",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-Atoms.html#v:compilerVersion\",\"http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types.html#v:compilerVersion\"]"
        },
        "index": {
          "description": "Set the compiler version this is used when loading the cabal file to",
          "hierarchy": "Debian Debianize Types Atoms",
          "module": "Debian.Debianize.Types.Atoms",
          "name": "compilerVersion",
          "package": "cabal-debian",
          "partial": "Version",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-Atoms.html#v:compilerVersion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecify the version number of the GHC compiler in the build\n environment.  The default is to assume that version is the same\n as the one in the environment where cabal-debian is running.\n This is used to look up hard coded lists of packages bundled\n with the compiler and their version numbers.  (This could\n certainly be done in a more beautiful way.)\n\u003c/p\u003e",
          "module": "Debian.Debianize.Types.Atoms",
          "name": "compilerVersion_",
          "package": "cabal-debian",
          "signature": "Maybe Version",
          "source": "src/Debian-Debianize-Types-Atoms.html#Atoms",
          "type": "function"
        },
        "index": {
          "description": "Specify the version number of the GHC compiler in the build environment The default is to assume that version is the same as the one in the environment where cabal-debian is running This is used to look up hard coded lists of packages bundled with the compiler and their version numbers This could certainly be done in more beautiful way",
          "hierarchy": "Debian Debianize Types Atoms",
          "module": "Debian.Debianize.Types.Atoms",
          "name": "compilerVersion_",
          "package": "cabal-debian",
          "partial": "Version",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-Atoms.html#v:compilerVersion_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe compiler value from cabal\n\u003c/p\u003e",
          "module": "Debian.Debianize.Types.Atoms",
          "name": "compiler_",
          "package": "cabal-debian",
          "signature": "Maybe CompilerId",
          "source": "src/Debian-Debianize-Types-Atoms.html#Atoms",
          "type": "function"
        },
        "index": {
          "description": "The compiler value from cabal",
          "hierarchy": "Debian Debianize Types Atoms",
          "module": "Debian.Debianize.Types.Atoms",
          "name": "compiler_",
          "package": "cabal-debian",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-Atoms.html#v:compiler_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003edebian/control\u003c/code\u003e file.  Many of the following lenses access parts of the \u003ccode\u003eSourceDebDescription\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Debian.Debianize.Types.Atoms\",\"Debian.Debianize.Types\"]",
          "name": "control",
          "package": "cabal-debian",
          "signature": "Lens Atoms SourceDebDescription",
          "source": "src/Debian-Debianize-Types-Atoms.html#control",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-Atoms.html#v:control\",\"http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types.html#v:control\"]"
        },
        "index": {
          "description": "The debian control file Many of the following lenses access parts of the SourceDebDescription",
          "hierarchy": "Debian Debianize Types Atoms",
          "module": "Debian.Debianize.Types.Atoms",
          "name": "control",
          "package": "cabal-debian",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-Atoms.html#v:control"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe parsed contents of the control file\n\u003c/p\u003e",
          "module": "Debian.Debianize.Types.Atoms",
          "name": "control_",
          "package": "cabal-debian",
          "signature": "SourceDebDescription",
          "source": "src/Debian-Debianize-Types-Atoms.html#Atoms",
          "type": "function"
        },
        "index": {
          "description": "The parsed contents of the control file",
          "hierarchy": "Debian Debianize Types Atoms",
          "module": "Debian.Debianize.Types.Atoms",
          "name": "control_",
          "package": "cabal-debian",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-Atoms.html#v:control_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe copyright information from the cabal file\n\u003c/p\u003e",
          "module": "[\"Debian.Debianize.Types.Atoms\",\"Debian.Debianize.Types\"]",
          "name": "copyright",
          "package": "cabal-debian",
          "signature": "Lens Atoms (Maybe Text)",
          "source": "src/Debian-Debianize-Types-Atoms.html#copyright",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-Atoms.html#v:copyright\",\"http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types.html#v:copyright\"]"
        },
        "index": {
          "description": "The copyright information from the cabal file",
          "hierarchy": "Debian Debianize Types Atoms",
          "module": "Debian.Debianize.Types.Atoms",
          "name": "copyright",
          "package": "cabal-debian",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-Atoms.html#v:copyright"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCopyright information\n\u003c/p\u003e",
          "module": "Debian.Debianize.Types.Atoms",
          "name": "copyright_",
          "package": "cabal-debian",
          "signature": "Maybe Text",
          "source": "src/Debian-Debianize-Types-Atoms.html#Atoms",
          "type": "function"
        },
        "index": {
          "description": "Copyright information",
          "hierarchy": "Debian Debianize Types Atoms",
          "module": "Debian.Debianize.Types.Atoms",
          "name": "copyright_",
          "package": "cabal-debian",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-Atoms.html#v:copyright_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDebianize, SubstVars, or Usage.  I'm no longer sure what SubstVars does, but someone\n may still be using it.\n\u003c/p\u003e",
          "module": "[\"Debian.Debianize.Types.Atoms\",\"Debian.Debianize.Types\"]",
          "name": "debAction",
          "package": "cabal-debian",
          "signature": "Lens Atoms DebAction",
          "source": "src/Debian-Debianize-Types-Atoms.html#debAction",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-Atoms.html#v:debAction\",\"http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types.html#v:debAction\"]"
        },
        "index": {
          "description": "Debianize SubstVars or Usage no longer sure what SubstVars does but someone may still be using it",
          "hierarchy": "Debian Debianize Types Atoms",
          "module": "Debian.Debianize.Types.Atoms",
          "name": "debAction",
          "package": "cabal-debian",
          "partial": "Action",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-Atoms.html#v:debAction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhat to do - Usage, Debianize or Substvar\n\u003c/p\u003e",
          "module": "Debian.Debianize.Types.Atoms",
          "name": "debAction_",
          "package": "cabal-debian",
          "signature": "DebAction",
          "source": "src/Debian-Debianize-Types-Atoms.html#Flags",
          "type": "function"
        },
        "index": {
          "description": "What to do Usage Debianize or Substvar",
          "hierarchy": "Debian Debianize Types Atoms",
          "module": "Debian.Debianize.Types.Atoms",
          "name": "debAction_",
          "package": "cabal-debian",
          "partial": "Action",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-Atoms.html#v:debAction_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExact debian version number, overrides the version generated from the cabal version\n\u003c/p\u003e",
          "module": "[\"Debian.Debianize.Types.Atoms\",\"Debian.Debianize.Types\"]",
          "name": "debVersion",
          "package": "cabal-debian",
          "signature": "Lens Atoms (Maybe DebianVersion)",
          "source": "src/Debian-Debianize-Types-Atoms.html#debVersion",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-Atoms.html#v:debVersion\",\"http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types.html#v:debVersion\"]"
        },
        "index": {
          "description": "Exact debian version number overrides the version generated from the cabal version",
          "hierarchy": "Debian Debianize Types Atoms",
          "module": "Debian.Debianize.Types.Atoms",
          "name": "debVersion",
          "package": "cabal-debian",
          "partial": "Version",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-Atoms.html#v:debVersion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecify the exact debian version of the resulting package,\n including epoch.  One use case is to work around the the\n \u003ca\u003ebuildN\u003c/a\u003e versions that are often uploaded to the debian and\n ubuntu repositories.  Say the latest cabal version of\n transformers is 0.3.0.0, but the debian repository contains\n version 0.3.0.0-1build3, we need to specify\n debVersion=\u003ca\u003e0.3.0.0-1build3\u003c/a\u003e or the version we produce will\n look older than the one already available upstream.\n\u003c/p\u003e",
          "module": "Debian.Debianize.Types.Atoms",
          "name": "debVersion_",
          "package": "cabal-debian",
          "signature": "Maybe DebianVersion",
          "source": "src/Debian-Debianize-Types-Atoms.html#Atoms",
          "type": "function"
        },
        "index": {
          "description": "Specify the exact debian version of the resulting package including epoch One use case is to work around the the buildN versions that are often uploaded to the debian and ubuntu repositories Say the latest cabal version of transformers is but the debian repository contains version build3 we need to specify debVersion build3 or the version we produce will look older than the one already available upstream",
          "hierarchy": "Debian Debianize Types Atoms",
          "module": "Debian.Debianize.Types.Atoms",
          "name": "debVersion_",
          "package": "cabal-debian",
          "partial": "Version",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-Atoms.html#v:debVersion_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap from cabal version number ranges to debian package names.  This is a\n result of the fact that only one version of a debian package can be\n installed at a given time, while multiple versions of a cabal package can.\n\u003c/p\u003e",
          "module": "[\"Debian.Debianize.Types.Atoms\",\"Debian.Debianize.Types\"]",
          "name": "debianNameMap",
          "package": "cabal-debian",
          "signature": "Lens Atoms (Map PackageName VersionSplits)",
          "source": "src/Debian-Debianize-Types-Atoms.html#debianNameMap",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-Atoms.html#v:debianNameMap\",\"http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types.html#v:debianNameMap\"]"
        },
        "index": {
          "description": "Map from cabal version number ranges to debian package names This is result of the fact that only one version of debian package can be installed at given time while multiple versions of cabal package can",
          "hierarchy": "Debian Debianize Types Atoms",
          "module": "Debian.Debianize.Types.Atoms",
          "name": "debianNameMap",
          "package": "cabal-debian",
          "partial": "Name Map",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-Atoms.html#v:debianNameMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMapping from cabal package name and version to debian source\n package name.  This allows different ranges of cabal versions to\n map to different debian source package names.\n\u003c/p\u003e",
          "module": "Debian.Debianize.Types.Atoms",
          "name": "debianNameMap_",
          "package": "cabal-debian",
          "signature": "Map PackageName VersionSplits",
          "source": "src/Debian-Debianize-Types-Atoms.html#Atoms",
          "type": "function"
        },
        "index": {
          "description": "Mapping from cabal package name and version to debian source package name This allows different ranges of cabal versions to map to different debian source package names",
          "hierarchy": "Debian Debianize Types Atoms",
          "module": "Debian.Debianize.Types.Atoms",
          "name": "debianNameMap_",
          "package": "cabal-debian",
          "partial": "Name Map",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-Atoms.html#v:debianNameMap_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Debianize.Types.Atoms",
          "name": "defaultFlags",
          "package": "cabal-debian",
          "signature": "Flags",
          "source": "src/Debian-Debianize-Types-Atoms.html#defaultFlags",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debian Debianize Types Atoms",
          "module": "Debian.Debianize.Types.Atoms",
          "name": "defaultFlags",
          "package": "cabal-debian",
          "partial": "Flags",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-Atoms.html#v:defaultFlags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ewhere to put it, default is usr\u003cem\u003ebin\u003c/em\u003e\u003ca\u003eexecName\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Debian.Debianize.Types.Atoms",
          "name": "destDir",
          "package": "cabal-debian",
          "signature": "Maybe FilePath",
          "source": "src/Debian-Debianize-Types-Atoms.html#InstallFile",
          "type": "function"
        },
        "index": {
          "description": "where to put it default is usr bin execName",
          "hierarchy": "Debian Debianize Types Atoms",
          "module": "Debian.Debianize.Types.Atoms",
          "name": "destDir",
          "package": "cabal-debian",
          "partial": "Dir",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-Atoms.html#v:destDir"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ename to give installed executable\n\u003c/p\u003e",
          "module": "Debian.Debianize.Types.Atoms",
          "name": "destName",
          "package": "cabal-debian",
          "signature": "String",
          "source": "src/Debian-Debianize-Types-Atoms.html#InstallFile",
          "type": "function"
        },
        "index": {
          "description": "name to give installed executable",
          "hierarchy": "Debian Debianize Types Atoms",
          "module": "Debian.Debianize.Types.Atoms",
          "name": "destName",
          "package": "cabal-debian",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-Atoms.html#v:destName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Debianize.Types.Atoms",
          "name": "devDeb",
          "package": "cabal-debian",
          "signature": "Maybe (BinPkgName, DebianVersion)",
          "source": "src/Debian-Debianize-Types-Atoms.html#PackageInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debian Debianize Types Atoms",
          "module": "Debian.Debianize.Types.Atoms",
          "name": "devDeb",
          "normalized": "Maybe(BinPkgName,DebianVersion)",
          "package": "cabal-debian",
          "partial": "Deb",
          "signature": "Maybe(BinPkgName,DebianVersion)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-Atoms.html#v:devDeb"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Debianize.Types.Atoms",
          "name": "docDeb",
          "package": "cabal-debian",
          "signature": "Maybe (BinPkgName, DebianVersion)",
          "source": "src/Debian-Debianize-Types-Atoms.html#PackageInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debian Debianize Types Atoms",
          "module": "Debian.Debianize.Types.Atoms",
          "name": "docDeb",
          "normalized": "Maybe(BinPkgName,DebianVersion)",
          "package": "cabal-debian",
          "partial": "Deb",
          "signature": "Maybe(BinPkgName,DebianVersion)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-Atoms.html#v:docDeb"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe domain name assigned to the server.\n An apache configuration will be generated to\n redirect requests from this domain to hostname:port\n\u003c/p\u003e",
          "module": "Debian.Debianize.Types.Atoms",
          "name": "domain",
          "package": "cabal-debian",
          "signature": "String",
          "source": "src/Debian-Debianize-Types-Atoms.html#Site",
          "type": "function"
        },
        "index": {
          "description": "The domain name assigned to the server An apache configuration will be generated to redirect requests from this domain to hostname port",
          "hierarchy": "Debian Debianize Types Atoms",
          "module": "Debian.Debianize.Types.Atoms",
          "name": "domain",
          "package": "cabal-debian",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-Atoms.html#v:domain"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDon't write anything, just output a description of what would have happened\n\u003c/p\u003e",
          "module": "[\"Debian.Debianize.Types.Atoms\",\"Debian.Debianize.Types\"]",
          "name": "dryRun",
          "package": "cabal-debian",
          "signature": "Lens Atoms Bool",
          "source": "src/Debian-Debianize-Types-Atoms.html#dryRun",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-Atoms.html#v:dryRun\",\"http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types.html#v:dryRun\"]"
        },
        "index": {
          "description": "Don write anything just output description of what would have happened",
          "hierarchy": "Debian Debianize Types Atoms",
          "module": "Debian.Debianize.Types.Atoms",
          "name": "dryRun",
          "package": "cabal-debian",
          "partial": "Run",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-Atoms.html#v:dryRun"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDon't write any files or create any directories, just explain\n what would have been done.\n\u003c/p\u003e",
          "module": "Debian.Debianize.Types.Atoms",
          "name": "dryRun_",
          "package": "cabal-debian",
          "signature": "Bool",
          "source": "src/Debian-Debianize-Types-Atoms.html#Flags",
          "type": "function"
        },
        "index": {
          "description": "Don write any files or create any directories just explain what would have been done",
          "hierarchy": "Debian Debianize Types Atoms",
          "module": "Debian.Debianize.Types.Atoms",
          "name": "dryRun_",
          "package": "cabal-debian",
          "partial": "Run",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-Atoms.html#v:dryRun_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap of Debian epoch numbers assigned to cabal packages.\n\u003c/p\u003e",
          "module": "[\"Debian.Debianize.Types.Atoms\",\"Debian.Debianize.Types\"]",
          "name": "epochMap",
          "package": "cabal-debian",
          "signature": "Lens Atoms (Map PackageName Int)",
          "source": "src/Debian-Debianize-Types-Atoms.html#epochMap",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-Atoms.html#v:epochMap\",\"http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types.html#v:epochMap\"]"
        },
        "index": {
          "description": "Map of Debian epoch numbers assigned to cabal packages",
          "hierarchy": "Debian Debianize Types Atoms",
          "module": "Debian.Debianize.Types.Atoms",
          "name": "epochMap",
          "package": "cabal-debian",
          "partial": "Map",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-Atoms.html#v:epochMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecify epoch numbers for the debian package generated from a\n cabal package.  Example: \u003ccode\u003eEpochMapping (PackageName \u003ca\u003eHTTP\u003c/a\u003e) 1\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Debian.Debianize.Types.Atoms",
          "name": "epochMap_",
          "package": "cabal-debian",
          "signature": "Map PackageName Int",
          "source": "src/Debian-Debianize-Types-Atoms.html#Atoms",
          "type": "function"
        },
        "index": {
          "description": "Specify epoch numbers for the debian package generated from cabal package Example EpochMapping PackageName HTTP",
          "hierarchy": "Debian Debianize Types Atoms",
          "module": "Debian.Debianize.Types.Atoms",
          "name": "epochMap_",
          "package": "cabal-debian",
          "partial": "Map",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-Atoms.html#v:epochMap_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap from cabal Build-Tool names to debian binary package names.\n\u003c/p\u003e",
          "module": "[\"Debian.Debianize.Types.Atoms\",\"Debian.Debianize.Types\"]",
          "name": "execMap",
          "package": "cabal-debian",
          "signature": "Lens Atoms (Map String Relations)",
          "source": "src/Debian-Debianize-Types-Atoms.html#execMap",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-Atoms.html#v:execMap\",\"http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types.html#v:execMap\"]"
        },
        "index": {
          "description": "Map from cabal Build-Tool names to debian binary package names",
          "hierarchy": "Debian Debianize Types Atoms",
          "module": "Debian.Debianize.Types.Atoms",
          "name": "execMap",
          "package": "cabal-debian",
          "partial": "Map",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-Atoms.html#v:execMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap a cabal Build-Tool name to a debian binary package name,\n e.g. \u003ccode\u003eExecMapping \u003ca\u003etrhsx\u003c/a\u003e \u003ca\u003ehaskell-hsx-utils\u003c/a\u003e\u003c/code\u003e adds a build\n dependency on \u003ccode\u003ehaskell-hsx-utils\u003c/code\u003e to any package that has \u003ccode\u003etrhsx\u003c/code\u003e in its\n cabal build-tool list.\n\u003c/p\u003e",
          "module": "Debian.Debianize.Types.Atoms",
          "name": "execMap_",
          "package": "cabal-debian",
          "signature": "Map String Relations",
          "source": "src/Debian-Debianize-Types-Atoms.html#Atoms",
          "type": "function"
        },
        "index": {
          "description": "Map cabal Build-Tool name to debian binary package name e.g ExecMapping trhsx haskell-hsx-utils adds build dependency on haskell-hsx-utils to any package that has trhsx in its cabal build-tool list",
          "hierarchy": "Debian Debianize Types Atoms",
          "module": "Debian.Debianize.Types.Atoms",
          "name": "execMap_",
          "package": "cabal-debian",
          "partial": "Map",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-Atoms.html#v:execMap_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe name of the executable file\n\u003c/p\u003e",
          "module": "Debian.Debianize.Types.Atoms",
          "name": "execName",
          "package": "cabal-debian",
          "signature": "String",
          "source": "src/Debian-Debianize-Types-Atoms.html#InstallFile",
          "type": "function"
        },
        "index": {
          "description": "The name of the executable file",
          "hierarchy": "Debian Debianize Types Atoms",
          "module": "Debian.Debianize.Types.Atoms",
          "name": "execName",
          "package": "cabal-debian",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-Atoms.html#v:execName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a package to hold a cabal executable\n\u003c/p\u003e",
          "module": "[\"Debian.Debianize.Types.Atoms\",\"Debian.Debianize.Types\"]",
          "name": "executable",
          "package": "cabal-debian",
          "signature": "Lens Atoms (Map BinPkgName InstallFile)",
          "source": "src/Debian-Debianize-Types-Atoms.html#executable",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-Atoms.html#v:executable\",\"http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types.html#v:executable\"]"
        },
        "index": {
          "description": "Create package to hold cabal executable",
          "hierarchy": "Debian Debianize Types Atoms",
          "module": "Debian.Debianize.Types.Atoms",
          "name": "executable",
          "package": "cabal-debian",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-Atoms.html#v:executable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a binary package to hold a cabal executable\n\u003c/p\u003e",
          "module": "Debian.Debianize.Types.Atoms",
          "name": "executable_",
          "package": "cabal-debian",
          "signature": "Map BinPkgName InstallFile",
          "source": "src/Debian-Debianize-Types-Atoms.html#Atoms",
          "type": "function"
        },
        "index": {
          "description": "Create binary package to hold cabal executable",
          "hierarchy": "Debian Debianize Types Atoms",
          "module": "Debian.Debianize.Types.Atoms",
          "name": "executable_",
          "package": "cabal-debian",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-Atoms.html#v:executable_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtra install dependencies for the devel library.  Redundant\n with depends, but kept for backwards compatibility.  Also, I\n think maybe this is or was needed because it can be set before\n the exact name of the library package is known.\n\u003c/p\u003e",
          "module": "[\"Debian.Debianize.Types.Atoms\",\"Debian.Debianize.Types\"]",
          "name": "extraDevDeps",
          "package": "cabal-debian",
          "signature": "Lens Atoms Relations",
          "source": "src/Debian-Debianize-Types-Atoms.html#extraDevDeps",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-Atoms.html#v:extraDevDeps\",\"http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types.html#v:extraDevDeps\"]"
        },
        "index": {
          "description": "Extra install dependencies for the devel library Redundant with depends but kept for backwards compatibility Also think maybe this is or was needed because it can be set before the exact name of the library package is known",
          "hierarchy": "Debian Debianize Types Atoms",
          "module": "Debian.Debianize.Types.Atoms",
          "name": "extraDevDeps",
          "package": "cabal-debian",
          "partial": "Dev Deps",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-Atoms.html#v:extraDevDeps"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLimited version of Depends, put a dependency on the dev library package.  The only\n reason to use this is because we don't yet know the name of the dev library package.\n\u003c/p\u003e",
          "module": "Debian.Debianize.Types.Atoms",
          "name": "extraDevDeps_",
          "package": "cabal-debian",
          "signature": "Relations",
          "source": "src/Debian-Debianize-Types-Atoms.html#Atoms",
          "type": "function"
        },
        "index": {
          "description": "Limited version of Depends put dependency on the dev library package The only reason to use this is because we don yet know the name of the dev library package",
          "hierarchy": "Debian Debianize Types Atoms",
          "module": "Debian.Debianize.Types.Atoms",
          "name": "extraDevDeps_",
          "package": "cabal-debian",
          "partial": "Dev Deps",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-Atoms.html#v:extraDevDeps_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap from cabal Extra-Lib names to debian binary package names.\n\u003c/p\u003e",
          "module": "[\"Debian.Debianize.Types.Atoms\",\"Debian.Debianize.Types\"]",
          "name": "extraLibMap",
          "package": "cabal-debian",
          "signature": "Lens Atoms (Map String Relations)",
          "source": "src/Debian-Debianize-Types-Atoms.html#extraLibMap",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-Atoms.html#v:extraLibMap\",\"http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types.html#v:extraLibMap\"]"
        },
        "index": {
          "description": "Map from cabal Extra-Lib names to debian binary package names",
          "hierarchy": "Debian Debianize Types Atoms",
          "module": "Debian.Debianize.Types.Atoms",
          "name": "extraLibMap",
          "package": "cabal-debian",
          "partial": "Lib Map",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-Atoms.html#v:extraLibMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap a cabal Extra-Library name to a debian binary package name,\n e.g. \u003ccode\u003eExtraLibMapping extraLibMap \u003ca\u003ecryptopp\u003c/a\u003e \u003ca\u003elibcrypto-dev\u003c/a\u003e\u003c/code\u003e adds a\n build dependency *and* a regular dependency on \u003ccode\u003elibcrypto-dev\u003c/code\u003e to\n any package that has \u003ccode\u003ecryptopp\u003c/code\u003e in its cabal Extra-Library list.\n\u003c/p\u003e",
          "module": "Debian.Debianize.Types.Atoms",
          "name": "extraLibMap_",
          "package": "cabal-debian",
          "signature": "Map String Relations",
          "source": "src/Debian-Debianize-Types-Atoms.html#Atoms",
          "type": "function"
        },
        "index": {
          "description": "Map cabal Extra-Library name to debian binary package name e.g ExtraLibMapping extraLibMap cryptopp libcrypto-dev adds build dependency and regular dependency on libcrypto-dev to any package that has cryptopp in its cabal Extra-Library list",
          "hierarchy": "Debian Debianize Types Atoms",
          "module": "Debian.Debianize.Types.Atoms",
          "name": "extraLibMap_",
          "package": "cabal-debian",
          "partial": "Lib Map",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-Atoms.html#v:extraLibMap_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a file in the binary deb with the given text.  This is done by\n writing the file into the cabalInstall directory and adding an entry\n to the binary deb's .install file.\n\u003c/p\u003e",
          "module": "[\"Debian.Debianize.Types.Atoms\",\"Debian.Debianize.Types\"]",
          "name": "file",
          "package": "cabal-debian",
          "signature": "Lens Atoms (Map BinPkgName (Set (FilePath, Text)))",
          "source": "src/Debian-Debianize-Types-Atoms.html#file",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-Atoms.html#v:file\",\"http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types.html#v:file\"]"
        },
        "index": {
          "description": "Create file in the binary deb with the given text This is done by writing the file into the cabalInstall directory and adding an entry to the binary deb install file",
          "hierarchy": "Debian Debianize Types Atoms",
          "module": "Debian.Debianize.Types.Atoms",
          "name": "file",
          "normalized": "Lens Atoms(Map BinPkgName(Set(FilePath,Text)))",
          "package": "cabal-debian",
          "signature": "Lens Atoms(Map BinPkgName(Set(FilePath,Text)))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-Atoms.html#v:file"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a file with the given text at the given path\n\u003c/p\u003e",
          "module": "Debian.Debianize.Types.Atoms",
          "name": "file_",
          "package": "cabal-debian",
          "signature": "Map BinPkgName (Set (FilePath, Text))",
          "source": "src/Debian-Debianize-Types-Atoms.html#Atoms",
          "type": "function"
        },
        "index": {
          "description": "Create file with the given text at the given path",
          "hierarchy": "Debian Debianize Types Atoms",
          "module": "Debian.Debianize.Types.Atoms",
          "name": "file_",
          "normalized": "Map BinPkgName(Set(FilePath,Text))",
          "package": "cabal-debian",
          "signature": "Map BinPkgName(Set(FilePath,Text))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-Atoms.html#v:file_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eObsolete record containing verbosity, dryRun, validate, and debAction.\n\u003c/p\u003e",
          "module": "[\"Debian.Debianize.Types.Atoms\",\"Debian.Debianize.Types\"]",
          "name": "flags",
          "package": "cabal-debian",
          "signature": "Lens Atoms Flags",
          "source": "src/Debian-Debianize-Types-Atoms.html#flags",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-Atoms.html#v:flags\",\"http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types.html#v:flags\"]"
        },
        "index": {
          "description": "Obsolete record containing verbosity dryRun validate and debAction",
          "hierarchy": "Debian Debianize Types Atoms",
          "module": "Debian.Debianize.Types.Atoms",
          "name": "flags",
          "package": "cabal-debian",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-Atoms.html#v:flags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInformation regarding mode of operation - verbosity, dry-run, usage, etc\n\u003c/p\u003e",
          "module": "Debian.Debianize.Types.Atoms",
          "name": "flags_",
          "package": "cabal-debian",
          "signature": "Flags",
          "source": "src/Debian-Debianize-Types-Atoms.html#Atoms",
          "type": "function"
        },
        "index": {
          "description": "Information regarding mode of operation verbosity dry-run usage etc",
          "hierarchy": "Debian Debianize Types Atoms",
          "module": "Debian.Debianize.Types.Atoms",
          "name": "flags_",
          "package": "cabal-debian",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-Atoms.html#v:flags_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA comment that will be inserted to\n explain how the file was generated\n\u003c/p\u003e",
          "module": "Debian.Debianize.Types.Atoms",
          "name": "headerMessage",
          "package": "cabal-debian",
          "signature": "String",
          "source": "src/Debian-Debianize-Types-Atoms.html#Server",
          "type": "function"
        },
        "index": {
          "description": "comment that will be inserted to explain how the file was generated",
          "hierarchy": "Debian Debianize Types Atoms",
          "module": "Debian.Debianize.Types.Atoms",
          "name": "headerMessage",
          "package": "cabal-debian",
          "partial": "Message",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-Atoms.html#v:headerMessage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHost on which the server will run\n\u003c/p\u003e",
          "module": "Debian.Debianize.Types.Atoms",
          "name": "hostname",
          "package": "cabal-debian",
          "signature": "String",
          "source": "src/Debian-Debianize-Types-Atoms.html#Server",
          "type": "function"
        },
        "index": {
          "description": "Host on which the server will run",
          "hierarchy": "Debian Debianize Types Atoms",
          "module": "Debian.Debianize.Types.Atoms",
          "name": "hostname",
          "package": "cabal-debian",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-Atoms.html#v:hostname"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInstall files into directories by adding entries to the binary\n deb's debian/foo.install file.\n\u003c/p\u003e",
          "module": "[\"Debian.Debianize.Types.Atoms\",\"Debian.Debianize.Types\"]",
          "name": "install",
          "package": "cabal-debian",
          "signature": "Lens Atoms (Map BinPkgName (Set (FilePath, FilePath)))",
          "source": "src/Debian-Debianize-Types-Atoms.html#install",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-Atoms.html#v:install\",\"http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types.html#v:install\"]"
        },
        "index": {
          "description": "Install files into directories by adding entries to the binary deb debian foo.install file",
          "hierarchy": "Debian Debianize Types Atoms",
          "module": "Debian.Debianize.Types.Atoms",
          "name": "install",
          "normalized": "Lens Atoms(Map BinPkgName(Set(FilePath,FilePath)))",
          "package": "cabal-debian",
          "signature": "Lens Atoms(Map BinPkgName(Set(FilePath,FilePath)))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-Atoms.html#v:install"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInstall a cabal executable into a binary deb.\n FIXME: change signature to BinPkgName -\u003e Lens Atoms (Set (String, FilePath))\n\u003c/p\u003e",
          "module": "[\"Debian.Debianize.Types.Atoms\",\"Debian.Debianize.Types\"]",
          "name": "installCabalExec",
          "package": "cabal-debian",
          "signature": "Lens Atoms (Map BinPkgName (Set (String, FilePath)))",
          "source": "src/Debian-Debianize-Types-Atoms.html#installCabalExec",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-Atoms.html#v:installCabalExec\",\"http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types.html#v:installCabalExec\"]"
        },
        "index": {
          "description": "Install cabal executable into binary deb FIXME change signature to BinPkgName Lens Atoms Set String FilePath",
          "hierarchy": "Debian Debianize Types Atoms",
          "module": "Debian.Debianize.Types.Atoms",
          "name": "installCabalExec",
          "normalized": "Lens Atoms(Map BinPkgName(Set(String,FilePath)))",
          "package": "cabal-debian",
          "partial": "Cabal Exec",
          "signature": "Lens Atoms(Map BinPkgName(Set(String,FilePath)))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-Atoms.html#v:installCabalExec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRename and install a cabal executable\n FIXME: change signature to BinPkgName -\u003e Lens Atoms (Set (String, FilePath))\n\u003c/p\u003e",
          "module": "[\"Debian.Debianize.Types.Atoms\",\"Debian.Debianize.Types\"]",
          "name": "installCabalExecTo",
          "package": "cabal-debian",
          "signature": "Lens Atoms (Map BinPkgName (Set (String, FilePath)))",
          "source": "src/Debian-Debianize-Types-Atoms.html#installCabalExecTo",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-Atoms.html#v:installCabalExecTo\",\"http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types.html#v:installCabalExecTo\"]"
        },
        "index": {
          "description": "Rename and install cabal executable FIXME change signature to BinPkgName Lens Atoms Set String FilePath",
          "hierarchy": "Debian Debianize Types Atoms",
          "module": "Debian.Debianize.Types.Atoms",
          "name": "installCabalExecTo",
          "normalized": "Lens Atoms(Map BinPkgName(Set(String,FilePath)))",
          "package": "cabal-debian",
          "partial": "Cabal Exec To",
          "signature": "Lens Atoms(Map BinPkgName(Set(String,FilePath)))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-Atoms.html#v:installCabalExecTo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInstall a cabal executable into the binary package at an exact location\n\u003c/p\u003e",
          "module": "Debian.Debianize.Types.Atoms",
          "name": "installCabalExecTo_",
          "package": "cabal-debian",
          "signature": "Map BinPkgName (Set (String, FilePath))",
          "source": "src/Debian-Debianize-Types-Atoms.html#Atoms",
          "type": "function"
        },
        "index": {
          "description": "Install cabal executable into the binary package at an exact location",
          "hierarchy": "Debian Debianize Types Atoms",
          "module": "Debian.Debianize.Types.Atoms",
          "name": "installCabalExecTo_",
          "normalized": "Map BinPkgName(Set(String,FilePath))",
          "package": "cabal-debian",
          "partial": "Cabal Exec To",
          "signature": "Map BinPkgName(Set(String,FilePath))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-Atoms.html#v:installCabalExecTo_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInstall a cabal executable into the binary package\n\u003c/p\u003e",
          "module": "Debian.Debianize.Types.Atoms",
          "name": "installCabalExec_",
          "package": "cabal-debian",
          "signature": "Map BinPkgName (Set (String, FilePath))",
          "source": "src/Debian-Debianize-Types-Atoms.html#Atoms",
          "type": "function"
        },
        "index": {
          "description": "Install cabal executable into the binary package",
          "hierarchy": "Debian Debianize Types Atoms",
          "module": "Debian.Debianize.Types.Atoms",
          "name": "installCabalExec_",
          "normalized": "Map BinPkgName(Set(String,FilePath))",
          "package": "cabal-debian",
          "partial": "Cabal Exec",
          "signature": "Map BinPkgName(Set(String,FilePath))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-Atoms.html#v:installCabalExec_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInstall files into the a binary deb's data directory,\n \u003cem\u003eusr\u003c/em\u003eshare/packagename-version.  This expands to either an install\n or an installTo.\n\u003c/p\u003e",
          "module": "[\"Debian.Debianize.Types.Atoms\",\"Debian.Debianize.Types\"]",
          "name": "installData",
          "package": "cabal-debian",
          "signature": "Lens Atoms (Map BinPkgName (Set (FilePath, FilePath)))",
          "source": "src/Debian-Debianize-Types-Atoms.html#installData",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-Atoms.html#v:installData\",\"http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types.html#v:installData\"]"
        },
        "index": {
          "description": "Install files into the binary deb data directory usr share packagename-version This expands to either an install or an installTo",
          "hierarchy": "Debian Debianize Types Atoms",
          "module": "Debian.Debianize.Types.Atoms",
          "name": "installData",
          "normalized": "Lens Atoms(Map BinPkgName(Set(FilePath,FilePath)))",
          "package": "cabal-debian",
          "partial": "Data",
          "signature": "Lens Atoms(Map BinPkgName(Set(FilePath,FilePath)))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-Atoms.html#v:installData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDHInstallTo somewhere relative to DataDir (see above)\n\u003c/p\u003e",
          "module": "Debian.Debianize.Types.Atoms",
          "name": "installData_",
          "package": "cabal-debian",
          "signature": "Map BinPkgName (Set (FilePath, FilePath))",
          "source": "src/Debian-Debianize-Types-Atoms.html#Atoms",
          "type": "function"
        },
        "index": {
          "description": "DHInstallTo somewhere relative to DataDir see above",
          "hierarchy": "Debian Debianize Types Atoms",
          "module": "Debian.Debianize.Types.Atoms",
          "name": "installData_",
          "normalized": "Map BinPkgName(Set(FilePath,FilePath))",
          "package": "cabal-debian",
          "partial": "Data",
          "signature": "Map BinPkgName(Set(FilePath,FilePath))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-Atoms.html#v:installData_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate directories in the package\n FIXME: change signature to BinPkgName -\u003e Lens Atoms (Set FilePath)\n\u003c/p\u003e",
          "module": "[\"Debian.Debianize.Types.Atoms\",\"Debian.Debianize.Types\"]",
          "name": "installDir",
          "package": "cabal-debian",
          "signature": "Lens Atoms (Map BinPkgName (Set FilePath))",
          "source": "src/Debian-Debianize-Types-Atoms.html#installDir",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-Atoms.html#v:installDir\",\"http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types.html#v:installDir\"]"
        },
        "index": {
          "description": "Create directories in the package FIXME change signature to BinPkgName Lens Atoms Set FilePath",
          "hierarchy": "Debian Debianize Types Atoms",
          "module": "Debian.Debianize.Types.Atoms",
          "name": "installDir",
          "package": "cabal-debian",
          "partial": "Dir",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-Atoms.html#v:installDir"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a directory in the binary package\n\u003c/p\u003e",
          "module": "Debian.Debianize.Types.Atoms",
          "name": "installDir_",
          "package": "cabal-debian",
          "signature": "Map BinPkgName (Set FilePath)",
          "source": "src/Debian-Debianize-Types-Atoms.html#Atoms",
          "type": "function"
        },
        "index": {
          "description": "Create directory in the binary package",
          "hierarchy": "Debian Debianize Types Atoms",
          "module": "Debian.Debianize.Types.Atoms",
          "name": "installDir_",
          "package": "cabal-debian",
          "partial": "Dir",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-Atoms.html#v:installDir_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe hint to install the server executable\n\u003c/p\u003e",
          "module": "Debian.Debianize.Types.Atoms",
          "name": "installFile",
          "package": "cabal-debian",
          "signature": "InstallFile",
          "source": "src/Debian-Debianize-Types-Atoms.html#Server",
          "type": "function"
        },
        "index": {
          "description": "The hint to install the server executable",
          "hierarchy": "Debian Debianize Types Atoms",
          "module": "Debian.Debianize.Types.Atoms",
          "name": "installFile",
          "package": "cabal-debian",
          "partial": "File",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-Atoms.html#v:installFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate an \u003cem\u003eetc\u003c/em\u003einit.d file in the package\n FIXME: change signature to BinPkgName -\u003e Lens Atoms Text\n\u003c/p\u003e",
          "module": "[\"Debian.Debianize.Types.Atoms\",\"Debian.Debianize.Types\"]",
          "name": "installInit",
          "package": "cabal-debian",
          "signature": "Lens Atoms (Map BinPkgName Text)",
          "source": "src/Debian-Debianize-Types-Atoms.html#installInit",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-Atoms.html#v:installInit\",\"http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types.html#v:installInit\"]"
        },
        "index": {
          "description": "Create an etc init.d file in the package FIXME change signature to BinPkgName Lens Atoms Text",
          "hierarchy": "Debian Debianize Types Atoms",
          "module": "Debian.Debianize.Types.Atoms",
          "name": "installInit",
          "package": "cabal-debian",
          "partial": "Init",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-Atoms.html#v:installInit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd an init.d file to the binary package\n\u003c/p\u003e",
          "module": "Debian.Debianize.Types.Atoms",
          "name": "installInit_",
          "package": "cabal-debian",
          "signature": "Map BinPkgName Text",
          "source": "src/Debian-Debianize-Types-Atoms.html#Atoms",
          "type": "function"
        },
        "index": {
          "description": "Add an init.d file to the binary package",
          "hierarchy": "Debian Debianize Types Atoms",
          "module": "Debian.Debianize.Types.Atoms",
          "name": "installInit_",
          "package": "cabal-debian",
          "partial": "Init",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-Atoms.html#v:installInit_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRename and install files.  This is done by adding rules to debian/rules.\n\u003c/p\u003e",
          "module": "[\"Debian.Debianize.Types.Atoms\",\"Debian.Debianize.Types\"]",
          "name": "installTo",
          "package": "cabal-debian",
          "signature": "Lens Atoms (Map BinPkgName (Set (FilePath, FilePath)))",
          "source": "src/Debian-Debianize-Types-Atoms.html#installTo",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-Atoms.html#v:installTo\",\"http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types.html#v:installTo\"]"
        },
        "index": {
          "description": "Rename and install files This is done by adding rules to debian rules",
          "hierarchy": "Debian Debianize Types Atoms",
          "module": "Debian.Debianize.Types.Atoms",
          "name": "installTo",
          "normalized": "Lens Atoms(Map BinPkgName(Set(FilePath,FilePath)))",
          "package": "cabal-debian",
          "partial": "To",
          "signature": "Lens Atoms(Map BinPkgName(Set(FilePath,FilePath)))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-Atoms.html#v:installTo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInstall a build file into the binary package at an exact location\n\u003c/p\u003e",
          "module": "Debian.Debianize.Types.Atoms",
          "name": "installTo_",
          "package": "cabal-debian",
          "signature": "Map BinPkgName (Set (FilePath, FilePath))",
          "source": "src/Debian-Debianize-Types-Atoms.html#Atoms",
          "type": "function"
        },
        "index": {
          "description": "Install build file into the binary package at an exact location",
          "hierarchy": "Debian Debianize Types Atoms",
          "module": "Debian.Debianize.Types.Atoms",
          "name": "installTo_",
          "normalized": "Map BinPkgName(Set(FilePath,FilePath))",
          "package": "cabal-debian",
          "partial": "To",
          "signature": "Map BinPkgName(Set(FilePath,FilePath))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-Atoms.html#v:installTo_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInstall a build file into the binary package\n\u003c/p\u003e",
          "module": "Debian.Debianize.Types.Atoms",
          "name": "install_",
          "package": "cabal-debian",
          "signature": "Map BinPkgName (Set (FilePath, FilePath))",
          "source": "src/Debian-Debianize-Types-Atoms.html#Atoms",
          "type": "function"
        },
        "index": {
          "description": "Install build file into the binary package",
          "hierarchy": "Debian Debianize Types Atoms",
          "module": "Debian.Debianize.Types.Atoms",
          "name": "install_",
          "normalized": "Map BinPkgName(Set(FilePath,FilePath))",
          "package": "cabal-debian",
          "signature": "Map BinPkgName(Set(FilePath,FilePath))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-Atoms.html#v:install_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a file in the debianization.  This is used to implement the file lens above.\n FIXME: change signature to BinPkgName -\u003e Lens Atoms (Set (FilePath, Text))\n\u003c/p\u003e",
          "module": "[\"Debian.Debianize.Types.Atoms\",\"Debian.Debianize.Types\"]",
          "name": "intermediateFiles",
          "package": "cabal-debian",
          "signature": "Lens Atoms (Set (FilePath, Text))",
          "source": "src/Debian-Debianize-Types-Atoms.html#intermediateFiles",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-Atoms.html#v:intermediateFiles\",\"http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types.html#v:intermediateFiles\"]"
        },
        "index": {
          "description": "Create file in the debianization This is used to implement the file lens above FIXME change signature to BinPkgName Lens Atoms Set FilePath Text",
          "hierarchy": "Debian Debianize Types Atoms",
          "module": "Debian.Debianize.Types.Atoms",
          "name": "intermediateFiles",
          "normalized": "Lens Atoms(Set(FilePath,Text))",
          "package": "cabal-debian",
          "partial": "Files",
          "signature": "Lens Atoms(Set(FilePath,Text))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-Atoms.html#v:intermediateFiles"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePut this text into a file with the given name in the debianization.\n\u003c/p\u003e",
          "module": "Debian.Debianize.Types.Atoms",
          "name": "intermediateFiles_",
          "package": "cabal-debian",
          "signature": "Set (FilePath, Text)",
          "source": "src/Debian-Debianize-Types-Atoms.html#Atoms",
          "type": "function"
        },
        "index": {
          "description": "Put this text into file with the given name in the debianization",
          "hierarchy": "Debian Debianize Types Atoms",
          "module": "Debian.Debianize.Types.Atoms",
          "name": "intermediateFiles_",
          "normalized": "Set(FilePath,Text)",
          "package": "cabal-debian",
          "partial": "Files",
          "signature": "Set(FilePath,Text)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-Atoms.html#v:intermediateFiles_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe license information from the cabal file\n\u003c/p\u003e",
          "module": "[\"Debian.Debianize.Types.Atoms\",\"Debian.Debianize.Types\"]",
          "name": "license",
          "package": "cabal-debian",
          "signature": "Lens Atoms (Maybe License)",
          "source": "src/Debian-Debianize-Types-Atoms.html#license",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-Atoms.html#v:license\",\"http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types.html#v:license\"]"
        },
        "index": {
          "description": "The license information from the cabal file",
          "hierarchy": "Debian Debianize Types Atoms",
          "module": "Debian.Debianize.Types.Atoms",
          "name": "license",
          "package": "cabal-debian",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-Atoms.html#v:license"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe value in the cabal file's license-file field\n\u003c/p\u003e",
          "module": "[\"Debian.Debianize.Types.Atoms\",\"Debian.Debianize.Types\"]",
          "name": "licenseFile",
          "package": "cabal-debian",
          "signature": "Lens Atoms (Maybe Text)",
          "source": "src/Debian-Debianize-Types-Atoms.html#licenseFile",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-Atoms.html#v:licenseFile\",\"http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types.html#v:licenseFile\"]"
        },
        "index": {
          "description": "The value in the cabal file license-file field",
          "hierarchy": "Debian Debianize Types Atoms",
          "module": "Debian.Debianize.Types.Atoms",
          "name": "licenseFile",
          "package": "cabal-debian",
          "partial": "File",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-Atoms.html#v:licenseFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe contents of the file specified in the cabal license-file: field\n\u003c/p\u003e",
          "module": "Debian.Debianize.Types.Atoms",
          "name": "licenseFile_",
          "package": "cabal-debian",
          "signature": "Maybe Text",
          "source": "src/Debian-Debianize-Types-Atoms.html#Atoms",
          "type": "function"
        },
        "index": {
          "description": "The contents of the file specified in the cabal license-file field",
          "hierarchy": "Debian Debianize Types Atoms",
          "module": "Debian.Debianize.Types.Atoms",
          "name": "licenseFile_",
          "package": "cabal-debian",
          "partial": "File",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-Atoms.html#v:licenseFile_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLicense information Cabal License value\n\u003c/p\u003e",
          "module": "Debian.Debianize.Types.Atoms",
          "name": "license_",
          "package": "cabal-debian",
          "signature": "Maybe License",
          "source": "src/Debian-Debianize-Types-Atoms.html#Atoms",
          "type": "function"
        },
        "index": {
          "description": "License information Cabal License value",
          "hierarchy": "Debian Debianize Types Atoms",
          "module": "Debian.Debianize.Types.Atoms",
          "name": "license_",
          "package": "cabal-debian",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-Atoms.html#v:license_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd entries to a binary deb's debian/foo.links file.\n\u003c/p\u003e",
          "module": "[\"Debian.Debianize.Types.Atoms\",\"Debian.Debianize.Types\"]",
          "name": "link",
          "package": "cabal-debian",
          "signature": "Lens Atoms (Map BinPkgName (Set (FilePath, FilePath)))",
          "source": "src/Debian-Debianize-Types-Atoms.html#link",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-Atoms.html#v:link\",\"http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types.html#v:link\"]"
        },
        "index": {
          "description": "Add entries to binary deb debian foo.links file",
          "hierarchy": "Debian Debianize Types Atoms",
          "module": "Debian.Debianize.Types.Atoms",
          "name": "link",
          "normalized": "Lens Atoms(Map BinPkgName(Set(FilePath,FilePath)))",
          "package": "cabal-debian",
          "signature": "Lens Atoms(Map BinPkgName(Set(FilePath,FilePath)))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-Atoms.html#v:link"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a symbolic link in the binary package\n\u003c/p\u003e",
          "module": "Debian.Debianize.Types.Atoms",
          "name": "link_",
          "package": "cabal-debian",
          "signature": "Map BinPkgName (Set (FilePath, FilePath))",
          "source": "src/Debian-Debianize-Types-Atoms.html#Atoms",
          "type": "function"
        },
        "index": {
          "description": "Create symbolic link in the binary package",
          "hierarchy": "Debian Debianize Types Atoms",
          "module": "Debian.Debianize.Types.Atoms",
          "name": "link_",
          "normalized": "Map BinPkgName(Set(FilePath,FilePath))",
          "package": "cabal-debian",
          "signature": "Map BinPkgName(Set(FilePath,FilePath))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-Atoms.html#v:link_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd a stanza to the binary package's logrotate script.\n\u003c/p\u003e",
          "module": "[\"Debian.Debianize.Types.Atoms\",\"Debian.Debianize.Types\"]",
          "name": "logrotateStanza",
          "package": "cabal-debian",
          "signature": "Lens Atoms (Map BinPkgName (Set Text))",
          "source": "src/Debian-Debianize-Types-Atoms.html#logrotateStanza",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-Atoms.html#v:logrotateStanza\",\"http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types.html#v:logrotateStanza\"]"
        },
        "index": {
          "description": "Add stanza to the binary package logrotate script",
          "hierarchy": "Debian Debianize Types Atoms",
          "module": "Debian.Debianize.Types.Atoms",
          "name": "logrotateStanza",
          "package": "cabal-debian",
          "partial": "Stanza",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-Atoms.html#v:logrotateStanza"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd a stanza of a logrotate file to the binary package\n\u003c/p\u003e",
          "module": "Debian.Debianize.Types.Atoms",
          "name": "logrotateStanza_",
          "package": "cabal-debian",
          "signature": "Map BinPkgName (Set Text)",
          "source": "src/Debian-Debianize-Types-Atoms.html#Atoms",
          "type": "function"
        },
        "index": {
          "description": "Add stanza of logrotate file to the binary package",
          "hierarchy": "Debian Debianize Types Atoms",
          "module": "Debian.Debianize.Types.Atoms",
          "name": "logrotateStanza_",
          "package": "cabal-debian",
          "partial": "Stanza",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-Atoms.html#v:logrotateStanza_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eValue for the maintainer field in the control file.  Note that\n the cabal maintainer field can have multiple addresses, but debian\n only one.  If this is not explicitly set, it is obtained from the\n cabal file, and if it is not there then from the environment.  As a\n last resort, there is a hard coded string in here somewhere.\n\u003c/p\u003e",
          "module": "Debian.Debianize.Types.Atoms",
          "name": "maintainerOld_",
          "package": "cabal-debian",
          "signature": "Maybe NameAddr",
          "source": "src/Debian-Debianize-Types-Atoms.html#Atoms",
          "type": "function"
        },
        "index": {
          "description": "Value for the maintainer field in the control file Note that the cabal maintainer field can have multiple addresses but debian only one If this is not explicitly set it is obtained from the cabal file and if it is not there then from the environment As last resort there is hard coded string in here somewhere",
          "hierarchy": "Debian Debianize Types Atoms",
          "module": "Debian.Debianize.Types.Atoms",
          "name": "maintainerOld_",
          "package": "cabal-debian",
          "partial": "Old",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-Atoms.html#v:maintainerOld_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eList if packages that should be omitted from any\n dependency list - e.g. a profiling package missing due\n to use of noProfilingPackage lens elsewhere.\n\u003c/p\u003e",
          "module": "[\"Debian.Debianize.Types.Atoms\",\"Debian.Debianize.Types\"]",
          "name": "missingDependencies",
          "package": "cabal-debian",
          "signature": "Lens Atoms (Set BinPkgName)",
          "source": "src/Debian-Debianize-Types-Atoms.html#missingDependencies",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-Atoms.html#v:missingDependencies\",\"http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types.html#v:missingDependencies\"]"
        },
        "index": {
          "description": "List if packages that should be omitted from any dependency list e.g profiling package missing due to use of noProfilingPackage lens elsewhere",
          "hierarchy": "Debian Debianize Types Atoms",
          "module": "Debian.Debianize.Types.Atoms",
          "name": "missingDependencies",
          "package": "cabal-debian",
          "partial": "Dependencies",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-Atoms.html#v:missingDependencies"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLets cabal-debian know that a package it might expect to exist\n actually does not, so omit all uses in resulting debianization.\n\u003c/p\u003e",
          "module": "Debian.Debianize.Types.Atoms",
          "name": "missingDependencies_",
          "package": "cabal-debian",
          "signature": "Set BinPkgName",
          "source": "src/Debian-Debianize-Types-Atoms.html#Atoms",
          "type": "function"
        },
        "index": {
          "description": "Lets cabal-debian know that package it might expect to exist actually does not so omit all uses in resulting debianization",
          "hierarchy": "Debian Debianize Types Atoms",
          "module": "Debian.Debianize.Types.Atoms",
          "name": "missingDependencies_",
          "package": "cabal-debian",
          "partial": "Dependencies",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-Atoms.html#v:missingDependencies_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Debianize.Types.Atoms",
          "name": "newAtoms",
          "package": "cabal-debian",
          "signature": "Atoms",
          "source": "src/Debian-Debianize-Types-Atoms.html#newAtoms",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debian Debianize Types Atoms",
          "module": "Debian.Debianize.Types.Atoms",
          "name": "newAtoms",
          "package": "cabal-debian",
          "partial": "Atoms",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-Atoms.html#v:newAtoms"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet this to omit the doc library deb.\n\u003c/p\u003e",
          "module": "[\"Debian.Debianize.Types.Atoms\",\"Debian.Debianize.Types\"]",
          "name": "noDocumentationLibrary",
          "package": "cabal-debian",
          "signature": "Lens Atoms (Set Bool)",
          "source": "src/Debian-Debianize-Types-Atoms.html#noDocumentationLibrary",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-Atoms.html#v:noDocumentationLibrary\",\"http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types.html#v:noDocumentationLibrary\"]"
        },
        "index": {
          "description": "Set this to omit the doc library deb",
          "hierarchy": "Debian Debianize Types Atoms",
          "module": "Debian.Debianize.Types.Atoms",
          "name": "noDocumentationLibrary",
          "package": "cabal-debian",
          "partial": "Documentation Library",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-Atoms.html#v:noDocumentationLibrary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDo not produce a libghc-foo-doc package.  FIXME: make this Bool or Maybe Bool\n\u003c/p\u003e",
          "module": "Debian.Debianize.Types.Atoms",
          "name": "noDocumentationLibrary_",
          "package": "cabal-debian",
          "signature": "Set Bool",
          "source": "src/Debian-Debianize-Types-Atoms.html#Atoms",
          "type": "function"
        },
        "index": {
          "description": "Do not produce libghc-foo-doc package FIXME make this Bool or Maybe Bool",
          "hierarchy": "Debian Debianize Types Atoms",
          "module": "Debian.Debianize.Types.Atoms",
          "name": "noDocumentationLibrary_",
          "package": "cabal-debian",
          "partial": "Documentation Library",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-Atoms.html#v:noDocumentationLibrary_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet this to omit the prof library deb.\n\u003c/p\u003e",
          "module": "[\"Debian.Debianize.Types.Atoms\",\"Debian.Debianize.Types\"]",
          "name": "noProfilingLibrary",
          "package": "cabal-debian",
          "signature": "Lens Atoms (Set Bool)",
          "source": "src/Debian-Debianize-Types-Atoms.html#noProfilingLibrary",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-Atoms.html#v:noProfilingLibrary\",\"http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types.html#v:noProfilingLibrary\"]"
        },
        "index": {
          "description": "Set this to omit the prof library deb",
          "hierarchy": "Debian Debianize Types Atoms",
          "module": "Debian.Debianize.Types.Atoms",
          "name": "noProfilingLibrary",
          "package": "cabal-debian",
          "partial": "Profiling Library",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-Atoms.html#v:noProfilingLibrary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDo not produce a libghc-foo-prof package.  FIXME: make this Bool or Maybe Bool\n\u003c/p\u003e",
          "module": "Debian.Debianize.Types.Atoms",
          "name": "noProfilingLibrary_",
          "package": "cabal-debian",
          "signature": "Set Bool",
          "source": "src/Debian-Debianize-Types-Atoms.html#Atoms",
          "type": "function"
        },
        "index": {
          "description": "Do not produce libghc-foo-prof package FIXME make this Bool or Maybe Bool",
          "hierarchy": "Debian Debianize Types Atoms",
          "module": "Debian.Debianize.Types.Atoms",
          "name": "noProfilingLibrary_",
          "package": "cabal-debian",
          "partial": "Profiling Library",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-Atoms.html#v:noProfilingLibrary_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet this to filter any less-than dependencies out of the generated debian\n dependencies.  (Not sure if this is implemented.)\n\u003c/p\u003e",
          "module": "[\"Debian.Debianize.Types.Atoms\",\"Debian.Debianize.Types\"]",
          "name": "omitLTDeps",
          "package": "cabal-debian",
          "signature": "Lens Atoms (Set Bool)",
          "source": "src/Debian-Debianize-Types-Atoms.html#omitLTDeps",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-Atoms.html#v:omitLTDeps\",\"http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types.html#v:omitLTDeps\"]"
        },
        "index": {
          "description": "Set this to filter any less-than dependencies out of the generated debian dependencies Not sure if this is implemented",
          "hierarchy": "Debian Debianize Types Atoms",
          "module": "Debian.Debianize.Types.Atoms",
          "name": "omitLTDeps",
          "package": "cabal-debian",
          "partial": "LTDeps",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-Atoms.html#v:omitLTDeps"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf present, don't generate the \u003c\u003c dependency when we see a cabal\n equals dependency.  (The implementation of this was somehow lost.)\n FIXME: make this Bool or Maybe Bool\n\u003c/p\u003e",
          "module": "Debian.Debianize.Types.Atoms",
          "name": "omitLTDeps_",
          "package": "cabal-debian",
          "signature": "Set Bool",
          "source": "src/Debian-Debianize-Types-Atoms.html#Atoms",
          "type": "function"
        },
        "index": {
          "description": "If present don generate the dependency when we see cabal equals dependency The implementation of this was somehow lost FIXME make this Bool or Maybe Bool",
          "hierarchy": "Debian Debianize Types Atoms",
          "module": "Debian.Debianize.Types.Atoms",
          "name": "omitLTDeps_",
          "package": "cabal-debian",
          "partial": "LTDeps",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-Atoms.html#v:omitLTDeps_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe result of loading a .cabal file\n\u003c/p\u003e",
          "module": "[\"Debian.Debianize.Types.Atoms\",\"Debian.Debianize.Types\"]",
          "name": "packageDescription",
          "package": "cabal-debian",
          "signature": "Lens Atoms (Maybe PackageDescription)",
          "source": "src/Debian-Debianize-Types-Atoms.html#packageDescription",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-Atoms.html#v:packageDescription\",\"http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types.html#v:packageDescription\"]"
        },
        "index": {
          "description": "The result of loading cabal file",
          "hierarchy": "Debian Debianize Types Atoms",
          "module": "Debian.Debianize.Types.Atoms",
          "name": "packageDescription",
          "package": "cabal-debian",
          "partial": "Description",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-Atoms.html#v:packageDescription"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe result of reading a cabal configuration file.\n\u003c/p\u003e",
          "module": "Debian.Debianize.Types.Atoms",
          "name": "packageDescription_",
          "package": "cabal-debian",
          "signature": "Maybe PackageDescription",
          "source": "src/Debian-Debianize-Types-Atoms.html#Atoms",
          "type": "function"
        },
        "index": {
          "description": "The result of reading cabal configuration file",
          "hierarchy": "Debian Debianize Types Atoms",
          "module": "Debian.Debianize.Types.Atoms",
          "name": "packageDescription_",
          "package": "cabal-debian",
          "partial": "Description",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-Atoms.html#v:packageDescription_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNo longer sure what the purpose of this lens is.\n\u003c/p\u003e",
          "module": "[\"Debian.Debianize.Types.Atoms\",\"Debian.Debianize.Types\"]",
          "name": "packageInfo",
          "package": "cabal-debian",
          "signature": "Lens Atoms (Map PackageName PackageInfo)",
          "source": "src/Debian-Debianize-Types-Atoms.html#packageInfo",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-Atoms.html#v:packageInfo\",\"http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types.html#v:packageInfo\"]"
        },
        "index": {
          "description": "No longer sure what the purpose of this lens is",
          "hierarchy": "Debian Debianize Types Atoms",
          "module": "Debian.Debianize.Types.Atoms",
          "name": "packageInfo",
          "package": "cabal-debian",
          "partial": "Info",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-Atoms.html#v:packageInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSupply some info about a cabal package.\n\u003c/p\u003e",
          "module": "Debian.Debianize.Types.Atoms",
          "name": "packageInfo_",
          "package": "cabal-debian",
          "signature": "Map PackageName PackageInfo",
          "source": "src/Debian-Debianize-Types-Atoms.html#Atoms",
          "type": "function"
        },
        "index": {
          "description": "Supply some info about cabal package",
          "hierarchy": "Debian Debianize Types Atoms",
          "module": "Debian.Debianize.Types.Atoms",
          "name": "packageInfo_",
          "package": "cabal-debian",
          "partial": "Info",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-Atoms.html#v:packageInfo_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePort on which the server will run.\n Obviously, this must assign each and\n every server package to a different\n port.\n\u003c/p\u003e",
          "module": "Debian.Debianize.Types.Atoms",
          "name": "port",
          "package": "cabal-debian",
          "signature": "Int",
          "source": "src/Debian-Debianize-Types-Atoms.html#Server",
          "type": "function"
        },
        "index": {
          "description": "Port on which the server will run Obviously this must assign each and every server package to different port",
          "hierarchy": "Debian Debianize Types Atoms",
          "module": "Debian.Debianize.Types.Atoms",
          "name": "port",
          "package": "cabal-debian",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-Atoms.html#v:port"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap of \u003ccode\u003edebian/postinst\u003c/code\u003e scripts\n\u003c/p\u003e",
          "module": "[\"Debian.Debianize.Types.Atoms\",\"Debian.Debianize.Types\"]",
          "name": "postInst",
          "package": "cabal-debian",
          "signature": "Lens Atoms (Map BinPkgName Text)",
          "source": "src/Debian-Debianize-Types-Atoms.html#postInst",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-Atoms.html#v:postInst\",\"http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types.html#v:postInst\"]"
        },
        "index": {
          "description": "Map of debian postinst scripts",
          "hierarchy": "Debian Debianize Types Atoms",
          "module": "Debian.Debianize.Types.Atoms",
          "name": "postInst",
          "package": "cabal-debian",
          "partial": "Inst",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-Atoms.html#v:postInst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eScript to run after install, should contain \u003ca name=\"DEBHELPER\"/\u003e line before exit 0\n\u003c/p\u003e",
          "module": "Debian.Debianize.Types.Atoms",
          "name": "postInst_",
          "package": "cabal-debian",
          "signature": "Map BinPkgName Text",
          "source": "src/Debian-Debianize-Types-Atoms.html#Atoms",
          "type": "function"
        },
        "index": {
          "description": "Script to run after install should contain line before exit",
          "hierarchy": "Debian Debianize Types Atoms",
          "module": "Debian.Debianize.Types.Atoms",
          "name": "postInst_",
          "package": "cabal-debian",
          "partial": "Inst",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-Atoms.html#v:postInst_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap of \u003ccode\u003edebian/postrm\u003c/code\u003e scripts\n\u003c/p\u003e",
          "module": "[\"Debian.Debianize.Types.Atoms\",\"Debian.Debianize.Types\"]",
          "name": "postRm",
          "package": "cabal-debian",
          "signature": "Lens Atoms (Map BinPkgName Text)",
          "source": "src/Debian-Debianize-Types-Atoms.html#postRm",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-Atoms.html#v:postRm\",\"http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types.html#v:postRm\"]"
        },
        "index": {
          "description": "Map of debian postrm scripts",
          "hierarchy": "Debian Debianize Types Atoms",
          "module": "Debian.Debianize.Types.Atoms",
          "name": "postRm",
          "package": "cabal-debian",
          "partial": "Rm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-Atoms.html#v:postRm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eScript to run after remove, should contain \u003ca name=\"DEBHELPER\"/\u003e line before exit 0\n\u003c/p\u003e",
          "module": "Debian.Debianize.Types.Atoms",
          "name": "postRm_",
          "package": "cabal-debian",
          "signature": "Map BinPkgName Text",
          "source": "src/Debian-Debianize-Types-Atoms.html#Atoms",
          "type": "function"
        },
        "index": {
          "description": "Script to run after remove should contain line before exit",
          "hierarchy": "Debian Debianize Types Atoms",
          "module": "Debian.Debianize.Types.Atoms",
          "name": "postRm_",
          "package": "cabal-debian",
          "partial": "Rm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-Atoms.html#v:postRm_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap of \u003ccode\u003edebian/preinst\u003c/code\u003e scripts\n\u003c/p\u003e",
          "module": "[\"Debian.Debianize.Types.Atoms\",\"Debian.Debianize.Types\"]",
          "name": "preInst",
          "package": "cabal-debian",
          "signature": "Lens Atoms (Map BinPkgName Text)",
          "source": "src/Debian-Debianize-Types-Atoms.html#preInst",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-Atoms.html#v:preInst\",\"http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types.html#v:preInst\"]"
        },
        "index": {
          "description": "Map of debian preinst scripts",
          "hierarchy": "Debian Debianize Types Atoms",
          "module": "Debian.Debianize.Types.Atoms",
          "name": "preInst",
          "package": "cabal-debian",
          "partial": "Inst",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-Atoms.html#v:preInst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eScript to run before install, should contain \u003ca name=\"DEBHELPER\"/\u003e line before exit 0\n\u003c/p\u003e",
          "module": "Debian.Debianize.Types.Atoms",
          "name": "preInst_",
          "package": "cabal-debian",
          "signature": "Map BinPkgName Text",
          "source": "src/Debian-Debianize-Types-Atoms.html#Atoms",
          "type": "function"
        },
        "index": {
          "description": "Script to run before install should contain line before exit",
          "hierarchy": "Debian Debianize Types Atoms",
          "module": "Debian.Debianize.Types.Atoms",
          "name": "preInst_",
          "package": "cabal-debian",
          "partial": "Inst",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-Atoms.html#v:preInst_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap of \u003ccode\u003edebian/prerm\u003c/code\u003e scripts\n\u003c/p\u003e",
          "module": "[\"Debian.Debianize.Types.Atoms\",\"Debian.Debianize.Types\"]",
          "name": "preRm",
          "package": "cabal-debian",
          "signature": "Lens Atoms (Map BinPkgName Text)",
          "source": "src/Debian-Debianize-Types-Atoms.html#preRm",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-Atoms.html#v:preRm\",\"http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types.html#v:preRm\"]"
        },
        "index": {
          "description": "Map of debian prerm scripts",
          "hierarchy": "Debian Debianize Types Atoms",
          "module": "Debian.Debianize.Types.Atoms",
          "name": "preRm",
          "package": "cabal-debian",
          "partial": "Rm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-Atoms.html#v:preRm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eScript to run before remove, should contain \u003ca name=\"DEBHELPER\"/\u003e line before exit 0\n\u003c/p\u003e",
          "module": "Debian.Debianize.Types.Atoms",
          "name": "preRm_",
          "package": "cabal-debian",
          "signature": "Map BinPkgName Text",
          "source": "src/Debian-Debianize-Types-Atoms.html#Atoms",
          "type": "function"
        },
        "index": {
          "description": "Script to run before remove should contain line before exit",
          "hierarchy": "Debian Debianize Types Atoms",
          "module": "Debian.Debianize.Types.Atoms",
          "name": "preRm_",
          "package": "cabal-debian",
          "partial": "Rm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-Atoms.html#v:preRm_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Debianize.Types.Atoms",
          "name": "profDeb",
          "package": "cabal-debian",
          "signature": "Maybe (BinPkgName, DebianVersion)",
          "source": "src/Debian-Debianize-Types-Atoms.html#PackageInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debian Debianize Types Atoms",
          "module": "Debian.Debianize.Types.Atoms",
          "name": "profDeb",
          "normalized": "Maybe(BinPkgName,DebianVersion)",
          "package": "cabal-debian",
          "partial": "Deb",
          "signature": "Maybe(BinPkgName,DebianVersion)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-Atoms.html#v:profDeb"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003estart-stop-daemon --retry argument\n\u003c/p\u003e",
          "module": "Debian.Debianize.Types.Atoms",
          "name": "retry",
          "package": "cabal-debian",
          "signature": "String",
          "source": "src/Debian-Debianize-Types-Atoms.html#Server",
          "type": "function"
        },
        "index": {
          "description": "start-stop-daemon retry argument",
          "hierarchy": "Debian Debianize Types Atoms",
          "module": "Debian.Debianize.Types.Atoms",
          "name": "retry",
          "package": "cabal-debian",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-Atoms.html#v:retry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRevision string used in constructing the debian verison number from the cabal version\n\u003c/p\u003e",
          "module": "[\"Debian.Debianize.Types.Atoms\",\"Debian.Debianize.Types\"]",
          "name": "revision",
          "package": "cabal-debian",
          "signature": "Lens Atoms (Maybe String)",
          "source": "src/Debian-Debianize-Types-Atoms.html#revision",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-Atoms.html#v:revision\",\"http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types.html#v:revision\"]"
        },
        "index": {
          "description": "Revision string used in constructing the debian verison number from the cabal version",
          "hierarchy": "Debian Debianize Types Atoms",
          "module": "Debian.Debianize.Types.Atoms",
          "name": "revision",
          "package": "cabal-debian",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-Atoms.html#v:revision"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecify the revision string to use when converting the\n cabal version to debian.\n\u003c/p\u003e",
          "module": "Debian.Debianize.Types.Atoms",
          "name": "revision_",
          "package": "cabal-debian",
          "signature": "Maybe String",
          "source": "src/Debian-Debianize-Types-Atoms.html#Atoms",
          "type": "function"
        },
        "index": {
          "description": "Specify the revision string to use when converting the cabal version to debian",
          "hierarchy": "Debian Debianize Types Atoms",
          "module": "Debian.Debianize.Types.Atoms",
          "name": "revision_",
          "package": "cabal-debian",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-Atoms.html#v:revision_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdditional fragments of the rules file\n\u003c/p\u003e",
          "module": "[\"Debian.Debianize.Types.Atoms\",\"Debian.Debianize.Types\"]",
          "name": "rulesFragments",
          "package": "cabal-debian",
          "signature": "Lens Atoms (Set Text)",
          "source": "src/Debian-Debianize-Types-Atoms.html#rulesFragments",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-Atoms.html#v:rulesFragments\",\"http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types.html#v:rulesFragments\"]"
        },
        "index": {
          "description": "Additional fragments of the rules file",
          "hierarchy": "Debian Debianize Types Atoms",
          "module": "Debian.Debianize.Types.Atoms",
          "name": "rulesFragments",
          "package": "cabal-debian",
          "partial": "Fragments",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-Atoms.html#v:rulesFragments"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA Fragment of debian/rules\n\u003c/p\u003e",
          "module": "Debian.Debianize.Types.Atoms",
          "name": "rulesFragments_",
          "package": "cabal-debian",
          "signature": "Set Text",
          "source": "src/Debian-Debianize-Types-Atoms.html#Atoms",
          "type": "function"
        },
        "index": {
          "description": "Fragment of debian rules",
          "hierarchy": "Debian Debianize Types Atoms",
          "module": "Debian.Debianize.Types.Atoms",
          "name": "rulesFragments_",
          "package": "cabal-debian",
          "partial": "Fragments",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-Atoms.html#v:rulesFragments_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe beginning of the rules file\n\u003c/p\u003e",
          "module": "[\"Debian.Debianize.Types.Atoms\",\"Debian.Debianize.Types\"]",
          "name": "rulesHead",
          "package": "cabal-debian",
          "signature": "Lens Atoms (Maybe Text)",
          "source": "src/Debian-Debianize-Types-Atoms.html#rulesHead",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-Atoms.html#v:rulesHead\",\"http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types.html#v:rulesHead\"]"
        },
        "index": {
          "description": "The beginning of the rules file",
          "hierarchy": "Debian Debianize Types Atoms",
          "module": "Debian.Debianize.Types.Atoms",
          "name": "rulesHead",
          "package": "cabal-debian",
          "partial": "Head",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-Atoms.html#v:rulesHead"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe header of the debian/rules file.  The remainder is assembled\n from DebRulesFragment values in the atom list.\n\u003c/p\u003e",
          "module": "Debian.Debianize.Types.Atoms",
          "name": "rulesHead_",
          "package": "cabal-debian",
          "signature": "Maybe Text",
          "source": "src/Debian-Debianize-Types-Atoms.html#Atoms",
          "type": "function"
        },
        "index": {
          "description": "The header of the debian rules file The remainder is assembled from DebRulesFragment values in the atom list",
          "hierarchy": "Debian Debianize Types Atoms",
          "module": "Debian.Debianize.Types.Atoms",
          "name": "rulesHead_",
          "package": "cabal-debian",
          "partial": "Head",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-Atoms.html#v:rulesHead_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe hint to install the server job\n\u003c/p\u003e",
          "module": "Debian.Debianize.Types.Atoms",
          "name": "server",
          "package": "cabal-debian",
          "signature": "Server",
          "source": "src/Debian-Debianize-Types-Atoms.html#Site",
          "type": "function"
        },
        "index": {
          "description": "The hint to install the server job",
          "hierarchy": "Debian Debianize Types Atoms",
          "module": "Debian.Debianize.Types.Atoms",
          "name": "server",
          "package": "cabal-debian",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-Atoms.html#v:server"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApache ServerAdmin parameter\n\u003c/p\u003e",
          "module": "Debian.Debianize.Types.Atoms",
          "name": "serverAdmin",
          "package": "cabal-debian",
          "signature": "String",
          "source": "src/Debian-Debianize-Types-Atoms.html#Site",
          "type": "function"
        },
        "index": {
          "description": "Apache ServerAdmin parameter",
          "hierarchy": "Debian Debianize Types Atoms",
          "module": "Debian.Debianize.Types.Atoms",
          "name": "serverAdmin",
          "package": "cabal-debian",
          "partial": "Admin",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-Atoms.html#v:serverAdmin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtra flags to pass to the server via the init script\n\u003c/p\u003e",
          "module": "Debian.Debianize.Types.Atoms",
          "name": "serverFlags",
          "package": "cabal-debian",
          "signature": "[String]",
          "source": "src/Debian-Debianize-Types-Atoms.html#Server",
          "type": "function"
        },
        "index": {
          "description": "Extra flags to pass to the server via the init script",
          "hierarchy": "Debian Debianize Types Atoms",
          "module": "Debian.Debianize.Types.Atoms",
          "name": "serverFlags",
          "normalized": "[String]",
          "package": "cabal-debian",
          "partial": "Flags",
          "signature": "[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-Atoms.html#v:serverFlags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a package for a server\n\u003c/p\u003e",
          "module": "[\"Debian.Debianize.Types.Atoms\",\"Debian.Debianize.Types\"]",
          "name": "serverInfo",
          "package": "cabal-debian",
          "signature": "Lens Atoms (Map BinPkgName Server)",
          "source": "src/Debian-Debianize-Types-Atoms.html#serverInfo",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-Atoms.html#v:serverInfo\",\"http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types.html#v:serverInfo\"]"
        },
        "index": {
          "description": "Create package for server",
          "hierarchy": "Debian Debianize Types Atoms",
          "module": "Debian.Debianize.Types.Atoms",
          "name": "serverInfo",
          "package": "cabal-debian",
          "partial": "Info",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-Atoms.html#v:serverInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike DHExecutable, but configure the executable as a server process\n\u003c/p\u003e",
          "module": "Debian.Debianize.Types.Atoms",
          "name": "serverInfo_",
          "package": "cabal-debian",
          "signature": "Map BinPkgName Server",
          "source": "src/Debian-Debianize-Types-Atoms.html#Atoms",
          "type": "function"
        },
        "index": {
          "description": "Like DHExecutable but configure the executable as server process",
          "hierarchy": "Debian Debianize Types Atoms",
          "module": "Debian.Debianize.Types.Atoms",
          "name": "serverInfo_",
          "package": "cabal-debian",
          "partial": "Info",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-Atoms.html#v:serverInfo_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Debianize.Types.Atoms",
          "name": "showAtoms",
          "package": "cabal-debian",
          "signature": "Atoms -\u003e IO ()",
          "source": "src/Debian-Debianize-Types-Atoms.html#showAtoms",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debian Debianize Types Atoms",
          "module": "Debian.Debianize.Types.Atoms",
          "name": "showAtoms",
          "normalized": "Atoms-\u003eIO()",
          "package": "cabal-debian",
          "partial": "Atoms",
          "signature": "Atoms-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-Atoms.html#v:showAtoms"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the Architecture field of the source package\n\u003c/p\u003e",
          "module": "Debian.Debianize.Types.Atoms",
          "name": "sourceArchitecture_",
          "package": "cabal-debian",
          "signature": "Maybe PackageArchitectures",
          "source": "src/Debian-Debianize-Types-Atoms.html#Atoms",
          "type": "function"
        },
        "index": {
          "description": "Set the Architecture field of the source package",
          "hierarchy": "Debian Debianize Types Atoms",
          "module": "Debian.Debianize.Types.Atoms",
          "name": "sourceArchitecture_",
          "package": "cabal-debian",
          "partial": "Architecture",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-Atoms.html#v:sourceArchitecture_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe architectures supported by this source package - \u003ccode\u003eAny\u003c/code\u003e,\n \u003ccode\u003eAll\u003c/code\u003e, or some list of specific architectures.\n\u003c/p\u003e",
          "module": "[\"Debian.Debianize.Types.Atoms\",\"Debian.Debianize.Types\"]",
          "name": "sourceArchitectures",
          "package": "cabal-debian",
          "signature": "Lens Atoms (Maybe PackageArchitectures)",
          "source": "src/Debian-Debianize-Types-Atoms.html#sourceArchitectures",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-Atoms.html#v:sourceArchitectures\",\"http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types.html#v:sourceArchitectures\"]"
        },
        "index": {
          "description": "The architectures supported by this source package Any All or some list of specific architectures",
          "hierarchy": "Debian Debianize Types Atoms",
          "module": "Debian.Debianize.Types.Atoms",
          "name": "sourceArchitectures",
          "package": "cabal-debian",
          "partial": "Architectures",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-Atoms.html#v:sourceArchitectures"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ewhere to find it, default is dist\u003cem\u003ebuild\u003c/em\u003e\u003ca\u003eexecName\u003c/a\u003e/\n\u003c/p\u003e",
          "module": "Debian.Debianize.Types.Atoms",
          "name": "sourceDir",
          "package": "cabal-debian",
          "signature": "Maybe FilePath",
          "source": "src/Debian-Debianize-Types-Atoms.html#InstallFile",
          "type": "function"
        },
        "index": {
          "description": "where to find it default is dist build execName",
          "hierarchy": "Debian Debianize Types Atoms",
          "module": "Debian.Debianize.Types.Atoms",
          "name": "sourceDir",
          "package": "cabal-debian",
          "partial": "Dir",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-Atoms.html#v:sourceDir"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003edebian/source/format\u003c/code\u003e file.\n\u003c/p\u003e",
          "module": "[\"Debian.Debianize.Types.Atoms\",\"Debian.Debianize.Types\"]",
          "name": "sourceFormat",
          "package": "cabal-debian",
          "signature": "Lens Atoms (Maybe SourceFormat)",
          "source": "src/Debian-Debianize-Types-Atoms.html#sourceFormat",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-Atoms.html#v:sourceFormat\",\"http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types.html#v:sourceFormat\"]"
        },
        "index": {
          "description": "The debian source format file",
          "hierarchy": "Debian Debianize Types Atoms",
          "module": "Debian.Debianize.Types.Atoms",
          "name": "sourceFormat",
          "package": "cabal-debian",
          "partial": "Format",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-Atoms.html#v:sourceFormat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite debian\u003cem\u003esource\u003c/em\u003eformat\n\u003c/p\u003e",
          "module": "Debian.Debianize.Types.Atoms",
          "name": "sourceFormat_",
          "package": "cabal-debian",
          "signature": "Maybe SourceFormat",
          "source": "src/Debian-Debianize-Types-Atoms.html#Atoms",
          "type": "function"
        },
        "index": {
          "description": "Write debian source format",
          "hierarchy": "Debian Debianize Types Atoms",
          "module": "Debian.Debianize.Types.Atoms",
          "name": "sourceFormat_",
          "package": "cabal-debian",
          "partial": "Format",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-Atoms.html#v:sourceFormat_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOverride the debian source package name constructed from the cabal name\n\u003c/p\u003e",
          "module": "[\"Debian.Debianize.Types.Atoms\",\"Debian.Debianize.Types\"]",
          "name": "sourcePackageName",
          "package": "cabal-debian",
          "signature": "Lens Atoms (Maybe SrcPkgName)",
          "source": "src/Debian-Debianize-Types-Atoms.html#sourcePackageName",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-Atoms.html#v:sourcePackageName\",\"http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types.html#v:sourcePackageName\"]"
        },
        "index": {
          "description": "Override the debian source package name constructed from the cabal name",
          "hierarchy": "Debian Debianize Types Atoms",
          "module": "Debian.Debianize.Types.Atoms",
          "name": "sourcePackageName",
          "package": "cabal-debian",
          "partial": "Package Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-Atoms.html#v:sourcePackageName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eName to give to the debian source package.  If not supplied\n the name is constructed from the cabal package name.  Note that\n DebianNameMap could encode this information if we already knew\n the cabal package name, but we can't assume that.\n\u003c/p\u003e",
          "module": "Debian.Debianize.Types.Atoms",
          "name": "sourcePackageName_",
          "package": "cabal-debian",
          "signature": "Maybe SrcPkgName",
          "source": "src/Debian-Debianize-Types-Atoms.html#Atoms",
          "type": "function"
        },
        "index": {
          "description": "Name to give to the debian source package If not supplied the name is constructed from the cabal package name Note that DebianNameMap could encode this information if we already knew the cabal package name but we can assume that",
          "hierarchy": "Debian Debianize Types Atoms",
          "module": "Debian.Debianize.Types.Atoms",
          "name": "sourcePackageName_",
          "package": "cabal-debian",
          "partial": "Package Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-Atoms.html#v:sourcePackageName_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the Priority field of the source package\n\u003c/p\u003e",
          "module": "Debian.Debianize.Types.Atoms",
          "name": "sourcePriority_",
          "package": "cabal-debian",
          "signature": "Maybe PackagePriority",
          "source": "src/Debian-Debianize-Types-Atoms.html#Atoms",
          "type": "function"
        },
        "index": {
          "description": "Set the Priority field of the source package",
          "hierarchy": "Debian Debianize Types Atoms",
          "module": "Debian.Debianize.Types.Atoms",
          "name": "sourcePriority_",
          "package": "cabal-debian",
          "partial": "Priority",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-Atoms.html#v:sourcePriority_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the Section field of the source package\n\u003c/p\u003e",
          "module": "Debian.Debianize.Types.Atoms",
          "name": "sourceSection_",
          "package": "cabal-debian",
          "signature": "Maybe Section",
          "source": "src/Debian-Debianize-Types-Atoms.html#Atoms",
          "type": "function"
        },
        "index": {
          "description": "Set the Section field of the source package",
          "hierarchy": "Debian Debianize Types Atoms",
          "module": "Debian.Debianize.Types.Atoms",
          "name": "sourceSection_",
          "package": "cabal-debian",
          "partial": "Section",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-Atoms.html#v:sourceSection_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOverride the package name used to hold left over data files and executables.\n Usually only one package is specified, but if more then one are they will each\n receive the same list of files.\n\u003c/p\u003e",
          "module": "[\"Debian.Debianize.Types.Atoms\",\"Debian.Debianize.Types\"]",
          "name": "utilsPackageNames",
          "package": "cabal-debian",
          "signature": "Lens Atoms (Set BinPkgName)",
          "source": "src/Debian-Debianize-Types-Atoms.html#utilsPackageNames",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-Atoms.html#v:utilsPackageNames\",\"http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types.html#v:utilsPackageNames\"]"
        },
        "index": {
          "description": "Override the package name used to hold left over data files and executables Usually only one package is specified but if more then one are they will each receive the same list of files",
          "hierarchy": "Debian Debianize Types Atoms",
          "module": "Debian.Debianize.Types.Atoms",
          "name": "utilsPackageNames",
          "package": "cabal-debian",
          "partial": "Package Names",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-Atoms.html#v:utilsPackageNames"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eName of a package that will get left-over data files and executables.\n If there are more than one, each package will get those files.\n\u003c/p\u003e",
          "module": "Debian.Debianize.Types.Atoms",
          "name": "utilsPackageNames_",
          "package": "cabal-debian",
          "signature": "Set BinPkgName",
          "source": "src/Debian-Debianize-Types-Atoms.html#Atoms",
          "type": "function"
        },
        "index": {
          "description": "Name of package that will get left-over data files and executables If there are more than one each package will get those files",
          "hierarchy": "Debian Debianize Types Atoms",
          "module": "Debian.Debianize.Types.Atoms",
          "name": "utilsPackageNames_",
          "package": "cabal-debian",
          "partial": "Package Names",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-Atoms.html#v:utilsPackageNames_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake sure the version number and package names of the supplied\n and generated debianizations match.\n\u003c/p\u003e",
          "module": "[\"Debian.Debianize.Types.Atoms\",\"Debian.Debianize.Types\"]",
          "name": "validate",
          "package": "cabal-debian",
          "signature": "Lens Atoms Bool",
          "source": "src/Debian-Debianize-Types-Atoms.html#validate",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-Atoms.html#v:validate\",\"http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types.html#v:validate\"]"
        },
        "index": {
          "description": "Make sure the version number and package names of the supplied and generated debianizations match",
          "hierarchy": "Debian Debianize Types Atoms",
          "module": "Debian.Debianize.Types.Atoms",
          "name": "validate",
          "package": "cabal-debian",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-Atoms.html#v:validate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFail if the debianization already present doesn't match the\n one we are going to generate closely enough that it is safe to\n debianize during the run of dpkg-buildpackage, when Setup\n configure is run.  Specifically, the version number in the top\n changelog entry must match, and the sets of package names in\n the control file must match.\n\u003c/p\u003e",
          "module": "Debian.Debianize.Types.Atoms",
          "name": "validate_",
          "package": "cabal-debian",
          "signature": "Bool",
          "source": "src/Debian-Debianize-Types-Atoms.html#Flags",
          "type": "function"
        },
        "index": {
          "description": "Fail if the debianization already present doesn match the one we are going to generate closely enough that it is safe to debianize during the run of dpkg-buildpackage when Setup configure is run Specifically the version number in the top changelog entry must match and the sets of package names in the control file must match",
          "hierarchy": "Debian Debianize Types Atoms",
          "module": "Debian.Debianize.Types.Atoms",
          "name": "validate_",
          "package": "cabal-debian",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-Atoms.html#v:validate_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet how much progress messages get generated.\n\u003c/p\u003e",
          "module": "[\"Debian.Debianize.Types.Atoms\",\"Debian.Debianize.Types\"]",
          "name": "verbosity",
          "package": "cabal-debian",
          "signature": "Lens Atoms Int",
          "source": "src/Debian-Debianize-Types-Atoms.html#verbosity",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-Atoms.html#v:verbosity\",\"http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types.html#v:verbosity\"]"
        },
        "index": {
          "description": "Set how much progress messages get generated",
          "hierarchy": "Debian Debianize Types Atoms",
          "module": "Debian.Debianize.Types.Atoms",
          "name": "verbosity",
          "package": "cabal-debian",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-Atoms.html#v:verbosity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun with progress messages at the given level of verboseness.\n\u003c/p\u003e",
          "module": "Debian.Debianize.Types.Atoms",
          "name": "verbosity_",
          "package": "cabal-debian",
          "signature": "Int",
          "source": "src/Debian-Debianize-Types-Atoms.html#Flags",
          "type": "function"
        },
        "index": {
          "description": "Run with progress messages at the given level of verboseness",
          "hierarchy": "Debian Debianize Types Atoms",
          "module": "Debian.Debianize.Types.Atoms",
          "name": "verbosity_",
          "package": "cabal-debian",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-Atoms.html#v:verbosity_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnused\n\u003c/p\u003e",
          "module": "[\"Debian.Debianize.Types.Atoms\",\"Debian.Debianize.Types\"]",
          "name": "warning",
          "package": "cabal-debian",
          "signature": "Lens Atoms (Set Text)",
          "source": "src/Debian-Debianize-Types-Atoms.html#warning",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-Atoms.html#v:warning\",\"http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types.html#v:warning\"]"
        },
        "index": {
          "description": "Unused",
          "hierarchy": "Debian Debianize Types Atoms",
          "module": "Debian.Debianize.Types.Atoms",
          "name": "warning",
          "package": "cabal-debian",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-Atoms.html#v:warning"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA warning to be reported later\n\u003c/p\u003e",
          "module": "Debian.Debianize.Types.Atoms",
          "name": "warning_",
          "package": "cabal-debian",
          "signature": "Set Text",
          "source": "src/Debian-Debianize-Types-Atoms.html#Atoms",
          "type": "function"
        },
        "index": {
          "description": "warning to be reported later",
          "hierarchy": "Debian Debianize Types Atoms",
          "module": "Debian.Debianize.Types.Atoms",
          "name": "warning_",
          "package": "cabal-debian",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-Atoms.html#v:warning_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe \u003ccode\u003edebian/watch\u003c/code\u003e file\n\u003c/p\u003e",
          "module": "[\"Debian.Debianize.Types.Atoms\",\"Debian.Debianize.Types\"]",
          "name": "watch",
          "package": "cabal-debian",
          "signature": "Lens Atoms (Maybe Text)",
          "source": "src/Debian-Debianize-Types-Atoms.html#watch",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-Atoms.html#v:watch\",\"http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types.html#v:watch\"]"
        },
        "index": {
          "description": "the debian watch file",
          "hierarchy": "Debian Debianize Types Atoms",
          "module": "Debian.Debianize.Types.Atoms",
          "name": "watch",
          "package": "cabal-debian",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-Atoms.html#v:watch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite debian/watch\n\u003c/p\u003e",
          "module": "Debian.Debianize.Types.Atoms",
          "name": "watch_",
          "package": "cabal-debian",
          "signature": "Maybe Text",
          "source": "src/Debian-Debianize-Types-Atoms.html#Atoms",
          "type": "function"
        },
        "index": {
          "description": "Write debian watch",
          "hierarchy": "Debian Debianize Types Atoms",
          "module": "Debian.Debianize.Types.Atoms",
          "name": "watch_",
          "package": "cabal-debian",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-Atoms.html#v:watch_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a package for a website\n\u003c/p\u003e",
          "module": "[\"Debian.Debianize.Types.Atoms\",\"Debian.Debianize.Types\"]",
          "name": "website",
          "package": "cabal-debian",
          "signature": "Lens Atoms (Map BinPkgName Site)",
          "source": "src/Debian-Debianize-Types-Atoms.html#website",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-Atoms.html#v:website\",\"http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types.html#v:website\"]"
        },
        "index": {
          "description": "Create package for website",
          "hierarchy": "Debian Debianize Types Atoms",
          "module": "Debian.Debianize.Types.Atoms",
          "name": "website",
          "package": "cabal-debian",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-Atoms.html#v:website"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike DHServer, but configure the server as a web server\n\u003c/p\u003e",
          "module": "Debian.Debianize.Types.Atoms",
          "name": "website_",
          "package": "cabal-debian",
          "signature": "Map BinPkgName Site",
          "source": "src/Debian-Debianize-Types-Atoms.html#Atoms",
          "type": "function"
        },
        "index": {
          "description": "Like DHServer but configure the server as web server",
          "hierarchy": "Debian Debianize Types Atoms",
          "module": "Debian.Debianize.Types.Atoms",
          "name": "website_",
          "package": "cabal-debian",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-Atoms.html#v:website_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Debianize.Types.BinaryDebDescription",
          "name": "BinaryDebDescription",
          "package": "cabal-debian",
          "source": "src/Debian-Debianize-Types-BinaryDebDescription.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Debian Debianize Types BinaryDebDescription",
          "module": "Debian.Debianize.Types.BinaryDebDescription",
          "name": "BinaryDebDescription",
          "package": "cabal-debian",
          "partial": "Binary Deb Description",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-BinaryDebDescription.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis type represents a section of the control file other than the\n first, which in turn represent one of the binary packages or debs\n produced by this debianization.\n\u003c/p\u003e\u003cp\u003eThe different types of binary debs we can produce from a haskell package\n\u003c/p\u003e",
          "module": "Debian.Debianize.Types.BinaryDebDescription",
          "name": "BinaryDebDescription",
          "package": "cabal-debian",
          "source": "src/Debian-Debianize-Types-BinaryDebDescription.html#BinaryDebDescription",
          "type": "data"
        },
        "index": {
          "description": "This type represents section of the control file other than the first which in turn represent one of the binary packages or debs produced by this debianization The different types of binary debs we can produce from haskell package",
          "hierarchy": "Debian Debianize Types BinaryDebDescription",
          "module": "Debian.Debianize.Types.BinaryDebDescription",
          "name": "BinaryDebDescription",
          "package": "cabal-debian",
          "partial": "Binary Deb Description",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-BinaryDebDescription.html#t:BinaryDebDescription"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Debianize.Types.BinaryDebDescription",
          "name": "PackageRelations",
          "package": "cabal-debian",
          "source": "src/Debian-Debianize-Types-BinaryDebDescription.html#PackageRelations",
          "type": "data"
        },
        "index": {
          "hierarchy": "Debian Debianize Types BinaryDebDescription",
          "module": "Debian.Debianize.Types.BinaryDebDescription",
          "name": "PackageRelations",
          "package": "cabal-debian",
          "partial": "Package Relations",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-BinaryDebDescription.html#t:PackageRelations"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePackage interrelationship information.\n\u003c/p\u003e",
          "module": "Debian.Debianize.Types.BinaryDebDescription",
          "name": "PackageType",
          "package": "cabal-debian",
          "source": "src/Debian-Debianize-Types-BinaryDebDescription.html#PackageType",
          "type": "data"
        },
        "index": {
          "description": "Package interrelationship information",
          "hierarchy": "Debian Debianize Types BinaryDebDescription",
          "module": "Debian.Debianize.Types.BinaryDebDescription",
          "name": "PackageType",
          "package": "cabal-debian",
          "partial": "Package Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-BinaryDebDescription.html#t:PackageType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is used to construct the value for\n DEB_CABAL_PACKAGE in the rules file\n\u003c/p\u003e",
          "module": "Debian.Debianize.Types.BinaryDebDescription",
          "name": "Cabal",
          "package": "cabal-debian",
          "signature": "Cabal",
          "source": "src/Debian-Debianize-Types-BinaryDebDescription.html#PackageType",
          "type": "function"
        },
        "index": {
          "description": "This is used to construct the value for DEB CABAL PACKAGE in the rules file",
          "hierarchy": "Debian Debianize Types BinaryDebDescription",
          "module": "Debian.Debianize.Types.BinaryDebDescription",
          "name": "Cabal",
          "package": "cabal-debian",
          "partial": "Cabal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-BinaryDebDescription.html#v:Cabal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe libghc-foo-dev package.\n\u003c/p\u003e",
          "module": "Debian.Debianize.Types.BinaryDebDescription",
          "name": "Development",
          "package": "cabal-debian",
          "signature": "Development",
          "source": "src/Debian-Debianize-Types-BinaryDebDescription.html#PackageType",
          "type": "function"
        },
        "index": {
          "description": "The libghc-foo-dev package",
          "hierarchy": "Debian Debianize Types BinaryDebDescription",
          "module": "Debian.Debianize.Types.BinaryDebDescription",
          "name": "Development",
          "package": "cabal-debian",
          "partial": "Development",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-BinaryDebDescription.html#v:Development"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe libghc-foo-doc package.\n\u003c/p\u003e",
          "module": "Debian.Debianize.Types.BinaryDebDescription",
          "name": "Documentation",
          "package": "cabal-debian",
          "signature": "Documentation",
          "source": "src/Debian-Debianize-Types-BinaryDebDescription.html#PackageType",
          "type": "function"
        },
        "index": {
          "description": "The libghc-foo-doc package",
          "hierarchy": "Debian Debianize Types BinaryDebDescription",
          "module": "Debian.Debianize.Types.BinaryDebDescription",
          "name": "Documentation",
          "package": "cabal-debian",
          "partial": "Documentation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-BinaryDebDescription.html#v:Documentation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA package related to a particular executable, perhaps\n but not necessarily a server.\n\u003c/p\u003e",
          "module": "Debian.Debianize.Types.BinaryDebDescription",
          "name": "Exec",
          "package": "cabal-debian",
          "signature": "Exec",
          "source": "src/Debian-Debianize-Types-BinaryDebDescription.html#PackageType",
          "type": "function"
        },
        "index": {
          "description": "package related to particular executable perhaps but not necessarily server",
          "hierarchy": "Debian Debianize Types BinaryDebDescription",
          "module": "Debian.Debianize.Types.BinaryDebDescription",
          "name": "Exec",
          "package": "cabal-debian",
          "partial": "Exec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-BinaryDebDescription.html#v:Exec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe libghc-foo-prof package.\n\u003c/p\u003e",
          "module": "Debian.Debianize.Types.BinaryDebDescription",
          "name": "Profiling",
          "package": "cabal-debian",
          "signature": "Profiling",
          "source": "src/Debian-Debianize-Types-BinaryDebDescription.html#PackageType",
          "type": "function"
        },
        "index": {
          "description": "The libghc-foo-prof package",
          "hierarchy": "Debian Debianize Types BinaryDebDescription",
          "module": "Debian.Debianize.Types.BinaryDebDescription",
          "name": "Profiling",
          "package": "cabal-debian",
          "partial": "Profiling",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-BinaryDebDescription.html#v:Profiling"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe source package (not a binary deb actually.)\n\u003c/p\u003e",
          "module": "Debian.Debianize.Types.BinaryDebDescription",
          "name": "Source'",
          "package": "cabal-debian",
          "signature": "Source'",
          "source": "src/Debian-Debianize-Types-BinaryDebDescription.html#PackageType",
          "type": "function"
        },
        "index": {
          "description": "The source package not binary deb actually",
          "hierarchy": "Debian Debianize Types BinaryDebDescription",
          "module": "Debian.Debianize.Types.BinaryDebDescription",
          "name": "Source'",
          "package": "cabal-debian",
          "partial": "Source'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-BinaryDebDescription.html#v:Source-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA package that holds the package's data files\n and any executables not assigned to other\n packages.\n\u003c/p\u003e",
          "module": "Debian.Debianize.Types.BinaryDebDescription",
          "name": "Utilities",
          "package": "cabal-debian",
          "signature": "Utilities",
          "source": "src/Debian-Debianize-Types-BinaryDebDescription.html#PackageType",
          "type": "function"
        },
        "index": {
          "description": "package that holds the package data files and any executables not assigned to other packages",
          "hierarchy": "Debian Debianize Types BinaryDebDescription",
          "module": "Debian.Debianize.Types.BinaryDebDescription",
          "name": "Utilities",
          "package": "cabal-debian",
          "partial": "Utilities",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-BinaryDebDescription.html#v:Utilities"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Debianize.Types.BinaryDebDescription",
          "name": "architecture",
          "package": "cabal-debian",
          "signature": "Lens BinaryDebDescription (Maybe PackageArchitectures)",
          "source": "src/Debian-Debianize-Types-BinaryDebDescription.html#architecture",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debian Debianize Types BinaryDebDescription",
          "module": "Debian.Debianize.Types.BinaryDebDescription",
          "name": "architecture",
          "package": "cabal-debian",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-BinaryDebDescription.html#v:architecture"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Debianize.Types.BinaryDebDescription",
          "name": "binaryPriority",
          "package": "cabal-debian",
          "signature": "Lens BinaryDebDescription (Maybe PackagePriority)",
          "source": "src/Debian-Debianize-Types-BinaryDebDescription.html#binaryPriority",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debian Debianize Types BinaryDebDescription",
          "module": "Debian.Debianize.Types.BinaryDebDescription",
          "name": "binaryPriority",
          "package": "cabal-debian",
          "partial": "Priority",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-BinaryDebDescription.html#v:binaryPriority"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Debianize.Types.BinaryDebDescription",
          "name": "binarySection",
          "package": "cabal-debian",
          "signature": "Lens BinaryDebDescription (Maybe Section)",
          "source": "src/Debian-Debianize-Types-BinaryDebDescription.html#binarySection",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debian Debianize Types BinaryDebDescription",
          "module": "Debian.Debianize.Types.BinaryDebDescription",
          "name": "binarySection",
          "package": "cabal-debian",
          "partial": "Section",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-BinaryDebDescription.html#v:binarySection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Debianize.Types.BinaryDebDescription",
          "name": "breaks",
          "package": "cabal-debian",
          "signature": "Lens PackageRelations Relations",
          "source": "src/Debian-Debianize-Types-BinaryDebDescription.html#breaks",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debian Debianize Types BinaryDebDescription",
          "module": "Debian.Debianize.Types.BinaryDebDescription",
          "name": "breaks",
          "package": "cabal-debian",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-BinaryDebDescription.html#v:breaks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Debianize.Types.BinaryDebDescription",
          "name": "builtUsing",
          "package": "cabal-debian",
          "signature": "Lens PackageRelations Relations",
          "source": "src/Debian-Debianize-Types-BinaryDebDescription.html#builtUsing",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debian Debianize Types BinaryDebDescription",
          "module": "Debian.Debianize.Types.BinaryDebDescription",
          "name": "builtUsing",
          "package": "cabal-debian",
          "partial": "Using",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-BinaryDebDescription.html#v:builtUsing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Debianize.Types.BinaryDebDescription",
          "name": "conflicts",
          "package": "cabal-debian",
          "signature": "Lens PackageRelations Relations",
          "source": "src/Debian-Debianize-Types-BinaryDebDescription.html#conflicts",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debian Debianize Types BinaryDebDescription",
          "module": "Debian.Debianize.Types.BinaryDebDescription",
          "name": "conflicts",
          "package": "cabal-debian",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-BinaryDebDescription.html#v:conflicts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Debianize.Types.BinaryDebDescription",
          "name": "depends",
          "package": "cabal-debian",
          "signature": "Lens PackageRelations Relations",
          "source": "src/Debian-Debianize-Types-BinaryDebDescription.html#depends",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debian Debianize Types BinaryDebDescription",
          "module": "Debian.Debianize.Types.BinaryDebDescription",
          "name": "depends",
          "package": "cabal-debian",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-BinaryDebDescription.html#v:depends"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Debianize.Types.BinaryDebDescription",
          "name": "description",
          "package": "cabal-debian",
          "signature": "Lens BinaryDebDescription (Maybe Text)",
          "source": "src/Debian-Debianize-Types-BinaryDebDescription.html#description",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debian Debianize Types BinaryDebDescription",
          "module": "Debian.Debianize.Types.BinaryDebDescription",
          "name": "description",
          "package": "cabal-debian",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-BinaryDebDescription.html#v:description"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Debianize.Types.BinaryDebDescription",
          "name": "essential",
          "package": "cabal-debian",
          "signature": "Lens BinaryDebDescription (Maybe Bool)",
          "source": "src/Debian-Debianize-Types-BinaryDebDescription.html#essential",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debian Debianize Types BinaryDebDescription",
          "module": "Debian.Debianize.Types.BinaryDebDescription",
          "name": "essential",
          "package": "cabal-debian",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-BinaryDebDescription.html#v:essential"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Debianize.Types.BinaryDebDescription",
          "name": "newBinaryDebDescription",
          "package": "cabal-debian",
          "signature": "BinPkgName -\u003e BinaryDebDescription",
          "source": "src/Debian-Debianize-Types-BinaryDebDescription.html#newBinaryDebDescription",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debian Debianize Types BinaryDebDescription",
          "module": "Debian.Debianize.Types.BinaryDebDescription",
          "name": "newBinaryDebDescription",
          "normalized": "BinPkgName-\u003eBinaryDebDescription",
          "package": "cabal-debian",
          "partial": "Binary Deb Description",
          "signature": "BinPkgName-\u003eBinaryDebDescription",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-BinaryDebDescription.html#v:newBinaryDebDescription"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Debianize.Types.BinaryDebDescription",
          "name": "newPackageRelations",
          "package": "cabal-debian",
          "signature": "PackageRelations",
          "source": "src/Debian-Debianize-Types-BinaryDebDescription.html#newPackageRelations",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debian Debianize Types BinaryDebDescription",
          "module": "Debian.Debianize.Types.BinaryDebDescription",
          "name": "newPackageRelations",
          "package": "cabal-debian",
          "partial": "Package Relations",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-BinaryDebDescription.html#v:newPackageRelations"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Debianize.Types.BinaryDebDescription",
          "name": "package",
          "package": "cabal-debian",
          "signature": "Lens BinaryDebDescription BinPkgName",
          "source": "src/Debian-Debianize-Types-BinaryDebDescription.html#package",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debian Debianize Types BinaryDebDescription",
          "module": "Debian.Debianize.Types.BinaryDebDescription",
          "name": "package",
          "package": "cabal-debian",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-BinaryDebDescription.html#v:package"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Debianize.Types.BinaryDebDescription",
          "name": "packageType",
          "package": "cabal-debian",
          "signature": "Lens BinaryDebDescription (Maybe PackageType)",
          "source": "src/Debian-Debianize-Types-BinaryDebDescription.html#packageType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debian Debianize Types BinaryDebDescription",
          "module": "Debian.Debianize.Types.BinaryDebDescription",
          "name": "packageType",
          "package": "cabal-debian",
          "partial": "Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-BinaryDebDescription.html#v:packageType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Debianize.Types.BinaryDebDescription",
          "name": "preDepends",
          "package": "cabal-debian",
          "signature": "Lens PackageRelations Relations",
          "source": "src/Debian-Debianize-Types-BinaryDebDescription.html#preDepends",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debian Debianize Types BinaryDebDescription",
          "module": "Debian.Debianize.Types.BinaryDebDescription",
          "name": "preDepends",
          "package": "cabal-debian",
          "partial": "Depends",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-BinaryDebDescription.html#v:preDepends"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Debianize.Types.BinaryDebDescription",
          "name": "provides",
          "package": "cabal-debian",
          "signature": "Lens PackageRelations Relations",
          "source": "src/Debian-Debianize-Types-BinaryDebDescription.html#provides",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debian Debianize Types BinaryDebDescription",
          "module": "Debian.Debianize.Types.BinaryDebDescription",
          "name": "provides",
          "package": "cabal-debian",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-BinaryDebDescription.html#v:provides"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Debianize.Types.BinaryDebDescription",
          "name": "recommends",
          "package": "cabal-debian",
          "signature": "Lens PackageRelations Relations",
          "source": "src/Debian-Debianize-Types-BinaryDebDescription.html#recommends",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debian Debianize Types BinaryDebDescription",
          "module": "Debian.Debianize.Types.BinaryDebDescription",
          "name": "recommends",
          "package": "cabal-debian",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-BinaryDebDescription.html#v:recommends"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Debianize.Types.BinaryDebDescription",
          "name": "relations",
          "package": "cabal-debian",
          "signature": "Lens BinaryDebDescription PackageRelations",
          "source": "src/Debian-Debianize-Types-BinaryDebDescription.html#relations",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debian Debianize Types BinaryDebDescription",
          "module": "Debian.Debianize.Types.BinaryDebDescription",
          "name": "relations",
          "package": "cabal-debian",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-BinaryDebDescription.html#v:relations"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Debianize.Types.BinaryDebDescription",
          "name": "replaces",
          "package": "cabal-debian",
          "signature": "Lens PackageRelations Relations",
          "source": "src/Debian-Debianize-Types-BinaryDebDescription.html#replaces",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debian Debianize Types BinaryDebDescription",
          "module": "Debian.Debianize.Types.BinaryDebDescription",
          "name": "replaces",
          "package": "cabal-debian",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-BinaryDebDescription.html#v:replaces"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Debianize.Types.BinaryDebDescription",
          "name": "suggests",
          "package": "cabal-debian",
          "signature": "Lens PackageRelations Relations",
          "source": "src/Debian-Debianize-Types-BinaryDebDescription.html#suggests",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debian Debianize Types BinaryDebDescription",
          "module": "Debian.Debianize.Types.BinaryDebDescription",
          "name": "suggests",
          "package": "cabal-debian",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-BinaryDebDescription.html#v:suggests"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Debianize.Types.SourceDebDescription",
          "name": "SourceDebDescription",
          "package": "cabal-debian",
          "source": "src/Debian-Debianize-Types-SourceDebDescription.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Debian Debianize Types SourceDebDescription",
          "module": "Debian.Debianize.Types.SourceDebDescription",
          "name": "SourceDebDescription",
          "package": "cabal-debian",
          "partial": "Source Deb Description",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-SourceDebDescription.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis type represents the debian/control file, which is the core\n of the source package debianization.  It includes the information\n that goes in the first, or source, section, and then a list of the\n succeeding binary package sections.\n\u003c/p\u003e",
          "module": "Debian.Debianize.Types.SourceDebDescription",
          "name": "SourceDebDescription",
          "package": "cabal-debian",
          "source": "src/Debian-Debianize-Types-SourceDebDescription.html#SourceDebDescription",
          "type": "data"
        },
        "index": {
          "description": "This type represents the debian control file which is the core of the source package debianization It includes the information that goes in the first or source section and then list of the succeeding binary package sections",
          "hierarchy": "Debian Debianize Types SourceDebDescription",
          "module": "Debian.Debianize.Types.SourceDebDescription",
          "name": "SourceDebDescription",
          "package": "cabal-debian",
          "partial": "Source Deb Description",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-SourceDebDescription.html#t:SourceDebDescription"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Debianize.Types.SourceDebDescription",
          "name": "VersionControlSpec",
          "package": "cabal-debian",
          "source": "src/Debian-Debianize-Types-SourceDebDescription.html#VersionControlSpec",
          "type": "data"
        },
        "index": {
          "hierarchy": "Debian Debianize Types SourceDebDescription",
          "module": "Debian.Debianize.Types.SourceDebDescription",
          "name": "VersionControlSpec",
          "package": "cabal-debian",
          "partial": "Version Control Spec",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-SourceDebDescription.html#t:VersionControlSpec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUser defined fields.  Parse the line \u003ca\u003eXBS-Comment: I stand\n between the candle and the star.\u003c/a\u003e to get XField (fromList \u003ca\u003eBS\u003c/a\u003e)\n \u003ca\u003eComment\u003c/a\u003e \u003ca\u003e I stand between the candle and the star.\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Debian.Debianize.Types.SourceDebDescription",
          "name": "XField",
          "package": "cabal-debian",
          "source": "src/Debian-Debianize-Types-SourceDebDescription.html#XField",
          "type": "data"
        },
        "index": {
          "description": "User defined fields Parse the line XBS-Comment stand between the candle and the star to get XField fromList BS Comment stand between the candle and the star",
          "hierarchy": "Debian Debianize Types SourceDebDescription",
          "module": "Debian.Debianize.Types.SourceDebDescription",
          "name": "XField",
          "package": "cabal-debian",
          "partial": "XField",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-SourceDebDescription.html#t:XField"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Debianize.Types.SourceDebDescription",
          "name": "XFieldDest",
          "package": "cabal-debian",
          "source": "src/Debian-Debianize-Types-SourceDebDescription.html#XFieldDest",
          "type": "data"
        },
        "index": {
          "hierarchy": "Debian Debianize Types SourceDebDescription",
          "module": "Debian.Debianize.Types.SourceDebDescription",
          "name": "XFieldDest",
          "package": "cabal-debian",
          "partial": "XField Dest",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-SourceDebDescription.html#t:XFieldDest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eField will be copied to the binary packgae control files\n\u003c/p\u003e",
          "module": "Debian.Debianize.Types.SourceDebDescription",
          "name": "B",
          "package": "cabal-debian",
          "signature": "B",
          "source": "src/Debian-Debianize-Types-SourceDebDescription.html#XFieldDest",
          "type": "function"
        },
        "index": {
          "description": "Field will be copied to the binary packgae control files",
          "hierarchy": "Debian Debianize Types SourceDebDescription",
          "module": "Debian.Debianize.Types.SourceDebDescription",
          "name": "B",
          "package": "cabal-debian",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-SourceDebDescription.html#v:B"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eField will be copied to the upload control (.changes) file\n\u003c/p\u003e",
          "module": "Debian.Debianize.Types.SourceDebDescription",
          "name": "C",
          "package": "cabal-debian",
          "signature": "C",
          "source": "src/Debian-Debianize-Types-SourceDebDescription.html#XFieldDest",
          "type": "function"
        },
        "index": {
          "description": "Field will be copied to the upload control changes file",
          "hierarchy": "Debian Debianize Types SourceDebDescription",
          "module": "Debian.Debianize.Types.SourceDebDescription",
          "name": "C",
          "package": "cabal-debian",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-SourceDebDescription.html#v:C"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eField will be copied to the source packgae control files\n\u003c/p\u003e",
          "module": "Debian.Debianize.Types.SourceDebDescription",
          "name": "S",
          "package": "cabal-debian",
          "signature": "S",
          "source": "src/Debian-Debianize-Types-SourceDebDescription.html#XFieldDest",
          "type": "function"
        },
        "index": {
          "description": "Field will be copied to the source packgae control files",
          "hierarchy": "Debian Debianize Types SourceDebDescription",
          "module": "Debian.Debianize.Types.SourceDebDescription",
          "name": "S",
          "package": "cabal-debian",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-SourceDebDescription.html#v:S"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Debianize.Types.SourceDebDescription",
          "name": "VCSArch",
          "package": "cabal-debian",
          "signature": "VCSArch Text",
          "source": "src/Debian-Debianize-Types-SourceDebDescription.html#VersionControlSpec",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debian Debianize Types SourceDebDescription",
          "module": "Debian.Debianize.Types.SourceDebDescription",
          "name": "VCSArch",
          "package": "cabal-debian",
          "partial": "VCSArch",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-SourceDebDescription.html#v:VCSArch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Debianize.Types.SourceDebDescription",
          "name": "VCSBrowser",
          "package": "cabal-debian",
          "signature": "VCSBrowser Text",
          "source": "src/Debian-Debianize-Types-SourceDebDescription.html#VersionControlSpec",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debian Debianize Types SourceDebDescription",
          "module": "Debian.Debianize.Types.SourceDebDescription",
          "name": "VCSBrowser",
          "package": "cabal-debian",
          "partial": "VCSBrowser",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-SourceDebDescription.html#v:VCSBrowser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Debianize.Types.SourceDebDescription",
          "name": "VCSBzr",
          "package": "cabal-debian",
          "signature": "VCSBzr Text",
          "source": "src/Debian-Debianize-Types-SourceDebDescription.html#VersionControlSpec",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debian Debianize Types SourceDebDescription",
          "module": "Debian.Debianize.Types.SourceDebDescription",
          "name": "VCSBzr",
          "package": "cabal-debian",
          "partial": "VCSBzr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-SourceDebDescription.html#v:VCSBzr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Debianize.Types.SourceDebDescription",
          "name": "VCSCvs",
          "package": "cabal-debian",
          "signature": "VCSCvs Text",
          "source": "src/Debian-Debianize-Types-SourceDebDescription.html#VersionControlSpec",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debian Debianize Types SourceDebDescription",
          "module": "Debian.Debianize.Types.SourceDebDescription",
          "name": "VCSCvs",
          "package": "cabal-debian",
          "partial": "VCSCvs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-SourceDebDescription.html#v:VCSCvs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Debianize.Types.SourceDebDescription",
          "name": "VCSDarcs",
          "package": "cabal-debian",
          "signature": "VCSDarcs Text",
          "source": "src/Debian-Debianize-Types-SourceDebDescription.html#VersionControlSpec",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debian Debianize Types SourceDebDescription",
          "module": "Debian.Debianize.Types.SourceDebDescription",
          "name": "VCSDarcs",
          "package": "cabal-debian",
          "partial": "VCSDarcs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-SourceDebDescription.html#v:VCSDarcs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Debianize.Types.SourceDebDescription",
          "name": "VCSGit",
          "package": "cabal-debian",
          "signature": "VCSGit Text",
          "source": "src/Debian-Debianize-Types-SourceDebDescription.html#VersionControlSpec",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debian Debianize Types SourceDebDescription",
          "module": "Debian.Debianize.Types.SourceDebDescription",
          "name": "VCSGit",
          "package": "cabal-debian",
          "partial": "VCSGit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-SourceDebDescription.html#v:VCSGit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Debianize.Types.SourceDebDescription",
          "name": "VCSHg",
          "package": "cabal-debian",
          "signature": "VCSHg Text",
          "source": "src/Debian-Debianize-Types-SourceDebDescription.html#VersionControlSpec",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debian Debianize Types SourceDebDescription",
          "module": "Debian.Debianize.Types.SourceDebDescription",
          "name": "VCSHg",
          "package": "cabal-debian",
          "partial": "VCSHg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-SourceDebDescription.html#v:VCSHg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Debianize.Types.SourceDebDescription",
          "name": "VCSMtn",
          "package": "cabal-debian",
          "signature": "VCSMtn Text",
          "source": "src/Debian-Debianize-Types-SourceDebDescription.html#VersionControlSpec",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debian Debianize Types SourceDebDescription",
          "module": "Debian.Debianize.Types.SourceDebDescription",
          "name": "VCSMtn",
          "package": "cabal-debian",
          "partial": "VCSMtn",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-SourceDebDescription.html#v:VCSMtn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Debianize.Types.SourceDebDescription",
          "name": "VCSSvn",
          "package": "cabal-debian",
          "signature": "VCSSvn Text",
          "source": "src/Debian-Debianize-Types-SourceDebDescription.html#VersionControlSpec",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debian Debianize Types SourceDebDescription",
          "module": "Debian.Debianize.Types.SourceDebDescription",
          "name": "VCSSvn",
          "package": "cabal-debian",
          "partial": "VCSSvn",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-SourceDebDescription.html#v:VCSSvn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Debianize.Types.SourceDebDescription",
          "name": "XField",
          "package": "cabal-debian",
          "signature": "XField (Set XFieldDest) Text Text",
          "source": "src/Debian-Debianize-Types-SourceDebDescription.html#XField",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debian Debianize Types SourceDebDescription",
          "module": "Debian.Debianize.Types.SourceDebDescription",
          "name": "XField",
          "package": "cabal-debian",
          "partial": "XField",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-SourceDebDescription.html#v:XField"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Debianize.Types.SourceDebDescription",
          "name": "binaryPackages",
          "package": "cabal-debian",
          "signature": "Lens SourceDebDescription [BinaryDebDescription]",
          "source": "src/Debian-Debianize-Types-SourceDebDescription.html#binaryPackages",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debian Debianize Types SourceDebDescription",
          "module": "Debian.Debianize.Types.SourceDebDescription",
          "name": "binaryPackages",
          "normalized": "Lens SourceDebDescription[BinaryDebDescription]",
          "package": "cabal-debian",
          "partial": "Packages",
          "signature": "Lens SourceDebDescription[BinaryDebDescription]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-SourceDebDescription.html#v:binaryPackages"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Debianize.Types.SourceDebDescription",
          "name": "buildConflicts",
          "package": "cabal-debian",
          "signature": "Lens SourceDebDescription Relations",
          "source": "src/Debian-Debianize-Types-SourceDebDescription.html#buildConflicts",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debian Debianize Types SourceDebDescription",
          "module": "Debian.Debianize.Types.SourceDebDescription",
          "name": "buildConflicts",
          "package": "cabal-debian",
          "partial": "Conflicts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-SourceDebDescription.html#v:buildConflicts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Debianize.Types.SourceDebDescription",
          "name": "buildConflictsIndep",
          "package": "cabal-debian",
          "signature": "Lens SourceDebDescription Relations",
          "source": "src/Debian-Debianize-Types-SourceDebDescription.html#buildConflictsIndep",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debian Debianize Types SourceDebDescription",
          "module": "Debian.Debianize.Types.SourceDebDescription",
          "name": "buildConflictsIndep",
          "package": "cabal-debian",
          "partial": "Conflicts Indep",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-SourceDebDescription.html#v:buildConflictsIndep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Debianize.Types.SourceDebDescription",
          "name": "buildDepends",
          "package": "cabal-debian",
          "signature": "Lens SourceDebDescription Relations",
          "source": "src/Debian-Debianize-Types-SourceDebDescription.html#buildDepends",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debian Debianize Types SourceDebDescription",
          "module": "Debian.Debianize.Types.SourceDebDescription",
          "name": "buildDepends",
          "package": "cabal-debian",
          "partial": "Depends",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-SourceDebDescription.html#v:buildDepends"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Debianize.Types.SourceDebDescription",
          "name": "buildDependsIndep",
          "package": "cabal-debian",
          "signature": "Lens SourceDebDescription Relations",
          "source": "src/Debian-Debianize-Types-SourceDebDescription.html#buildDependsIndep",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debian Debianize Types SourceDebDescription",
          "module": "Debian.Debianize.Types.SourceDebDescription",
          "name": "buildDependsIndep",
          "package": "cabal-debian",
          "partial": "Depends Indep",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-SourceDebDescription.html#v:buildDependsIndep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Debianize.Types.SourceDebDescription",
          "name": "changedBy",
          "package": "cabal-debian",
          "signature": "Lens SourceDebDescription (Maybe NameAddr)",
          "source": "src/Debian-Debianize-Types-SourceDebDescription.html#changedBy",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debian Debianize Types SourceDebDescription",
          "module": "Debian.Debianize.Types.SourceDebDescription",
          "name": "changedBy",
          "package": "cabal-debian",
          "partial": "By",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-SourceDebDescription.html#v:changedBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Debianize.Types.SourceDebDescription",
          "name": "dmUploadAllowed",
          "package": "cabal-debian",
          "signature": "Lens SourceDebDescription Bool",
          "source": "src/Debian-Debianize-Types-SourceDebDescription.html#dmUploadAllowed",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debian Debianize Types SourceDebDescription",
          "module": "Debian.Debianize.Types.SourceDebDescription",
          "name": "dmUploadAllowed",
          "package": "cabal-debian",
          "partial": "Upload Allowed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-SourceDebDescription.html#v:dmUploadAllowed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Debianize.Types.SourceDebDescription",
          "name": "homepage",
          "package": "cabal-debian",
          "signature": "Lens SourceDebDescription (Maybe Text)",
          "source": "src/Debian-Debianize-Types-SourceDebDescription.html#homepage",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debian Debianize Types SourceDebDescription",
          "module": "Debian.Debianize.Types.SourceDebDescription",
          "name": "homepage",
          "package": "cabal-debian",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-SourceDebDescription.html#v:homepage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Debianize.Types.SourceDebDescription",
          "name": "maintainer",
          "package": "cabal-debian",
          "signature": "Lens SourceDebDescription (Maybe NameAddr)",
          "source": "src/Debian-Debianize-Types-SourceDebDescription.html#maintainer",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debian Debianize Types SourceDebDescription",
          "module": "Debian.Debianize.Types.SourceDebDescription",
          "name": "maintainer",
          "package": "cabal-debian",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-SourceDebDescription.html#v:maintainer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Debianize.Types.SourceDebDescription",
          "name": "newSourceDebDescription",
          "package": "cabal-debian",
          "signature": "SourceDebDescription",
          "source": "src/Debian-Debianize-Types-SourceDebDescription.html#newSourceDebDescription",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debian Debianize Types SourceDebDescription",
          "module": "Debian.Debianize.Types.SourceDebDescription",
          "name": "newSourceDebDescription",
          "package": "cabal-debian",
          "partial": "Source Deb Description",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-SourceDebDescription.html#v:newSourceDebDescription"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Debianize.Types.SourceDebDescription",
          "name": "newSourceDebDescription'",
          "package": "cabal-debian",
          "signature": "SrcPkgName -\u003e NameAddr -\u003e SourceDebDescription",
          "source": "src/Debian-Debianize-Types-SourceDebDescription.html#newSourceDebDescription%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debian Debianize Types SourceDebDescription",
          "module": "Debian.Debianize.Types.SourceDebDescription",
          "name": "newSourceDebDescription'",
          "normalized": "SrcPkgName-\u003eNameAddr-\u003eSourceDebDescription",
          "package": "cabal-debian",
          "partial": "Source Deb Description'",
          "signature": "SrcPkgName-\u003eNameAddr-\u003eSourceDebDescription",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-SourceDebDescription.html#v:newSourceDebDescription-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Debianize.Types.SourceDebDescription",
          "name": "priority",
          "package": "cabal-debian",
          "signature": "Lens SourceDebDescription (Maybe PackagePriority)",
          "source": "src/Debian-Debianize-Types-SourceDebDescription.html#priority",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debian Debianize Types SourceDebDescription",
          "module": "Debian.Debianize.Types.SourceDebDescription",
          "name": "priority",
          "package": "cabal-debian",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-SourceDebDescription.html#v:priority"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Debianize.Types.SourceDebDescription",
          "name": "section",
          "package": "cabal-debian",
          "signature": "Lens SourceDebDescription (Maybe Section)",
          "source": "src/Debian-Debianize-Types-SourceDebDescription.html#section",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debian Debianize Types SourceDebDescription",
          "module": "Debian.Debianize.Types.SourceDebDescription",
          "name": "section",
          "package": "cabal-debian",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-SourceDebDescription.html#v:section"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Debianize.Types.SourceDebDescription",
          "name": "source",
          "package": "cabal-debian",
          "signature": "Lens SourceDebDescription (Maybe SrcPkgName)",
          "source": "src/Debian-Debianize-Types-SourceDebDescription.html#source",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debian Debianize Types SourceDebDescription",
          "module": "Debian.Debianize.Types.SourceDebDescription",
          "name": "source",
          "package": "cabal-debian",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-SourceDebDescription.html#v:source"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Debianize.Types.SourceDebDescription",
          "name": "standardsVersion",
          "package": "cabal-debian",
          "signature": "Lens SourceDebDescription (Maybe StandardsVersion)",
          "source": "src/Debian-Debianize-Types-SourceDebDescription.html#standardsVersion",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debian Debianize Types SourceDebDescription",
          "module": "Debian.Debianize.Types.SourceDebDescription",
          "name": "standardsVersion",
          "package": "cabal-debian",
          "partial": "Version",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-SourceDebDescription.html#v:standardsVersion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Debianize.Types.SourceDebDescription",
          "name": "uploaders",
          "package": "cabal-debian",
          "signature": "Lens SourceDebDescription [NameAddr]",
          "source": "src/Debian-Debianize-Types-SourceDebDescription.html#uploaders",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debian Debianize Types SourceDebDescription",
          "module": "Debian.Debianize.Types.SourceDebDescription",
          "name": "uploaders",
          "normalized": "Lens SourceDebDescription[NameAddr]",
          "package": "cabal-debian",
          "signature": "Lens SourceDebDescription[NameAddr]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-SourceDebDescription.html#v:uploaders"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Debianize.Types.SourceDebDescription",
          "name": "vcsFields",
          "package": "cabal-debian",
          "signature": "Lens SourceDebDescription (Set VersionControlSpec)",
          "source": "src/Debian-Debianize-Types-SourceDebDescription.html#vcsFields",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debian Debianize Types SourceDebDescription",
          "module": "Debian.Debianize.Types.SourceDebDescription",
          "name": "vcsFields",
          "package": "cabal-debian",
          "partial": "Fields",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-SourceDebDescription.html#v:vcsFields"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Debianize.Types.SourceDebDescription",
          "name": "xFields",
          "package": "cabal-debian",
          "signature": "Lens SourceDebDescription (Set XField)",
          "source": "src/Debian-Debianize-Types-SourceDebDescription.html#xFields",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debian Debianize Types SourceDebDescription",
          "module": "Debian.Debianize.Types.SourceDebDescription",
          "name": "xFields",
          "package": "cabal-debian",
          "partial": "Fields",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types-SourceDebDescription.html#v:xFields"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Debianize.Types",
          "name": "Types",
          "package": "cabal-debian",
          "source": "src/Debian-Debianize-Types.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Debian Debianize Types",
          "module": "Debian.Debianize.Types",
          "name": "Types",
          "package": "cabal-debian",
          "partial": "Types",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is a special filepath that represents the top of a directory\n tree.  For a cabal package this directory would contain the .cabal\n file, for a debian package it would contain the debian directory.\n\u003c/p\u003e",
          "module": "Debian.Debianize.Types",
          "name": "Top",
          "package": "cabal-debian",
          "source": "src/Debian-Debianize-Types.html#Top",
          "type": "newtype"
        },
        "index": {
          "description": "This is special filepath that represents the top of directory tree For cabal package this directory would contain the cabal file for debian package it would contain the debian directory",
          "hierarchy": "Debian Debianize Types",
          "module": "Debian.Debianize.Types",
          "name": "Top",
          "package": "cabal-debian",
          "partial": "Top",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types.html#t:Top"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Debianize.Types",
          "name": "Top",
          "package": "cabal-debian",
          "signature": "Top",
          "source": "src/Debian-Debianize-Types.html#Top",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debian Debianize Types",
          "module": "Debian.Debianize.Types",
          "name": "Top",
          "package": "cabal-debian",
          "partial": "Top",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types.html#v:Top"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe architectures supported by a binary package\n\u003c/p\u003e",
          "module": "Debian.Debianize.Types",
          "name": "binaryArchitectures",
          "package": "cabal-debian",
          "signature": "BinPkgName -\u003e Lens Atoms (Maybe PackageArchitectures)",
          "source": "src/Debian-Debianize-Types.html#binaryArchitectures",
          "type": "function"
        },
        "index": {
          "description": "The architectures supported by binary package",
          "hierarchy": "Debian Debianize Types",
          "module": "Debian.Debianize.Types",
          "name": "binaryArchitectures",
          "normalized": "BinPkgName-\u003eLens Atoms(Maybe PackageArchitectures)",
          "package": "cabal-debian",
          "partial": "Architectures",
          "signature": "BinPkgName-\u003eLens Atoms(Maybe PackageArchitectures)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types.html#v:binaryArchitectures"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Debianize.Types",
          "name": "binaryPackages",
          "package": "cabal-debian",
          "signature": "Lens Atoms [BinaryDebDescription]",
          "source": "src/Debian-Debianize-Types.html#binaryPackages",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debian Debianize Types",
          "module": "Debian.Debianize.Types",
          "name": "binaryPackages",
          "normalized": "Lens Atoms[BinaryDebDescription]",
          "package": "cabal-debian",
          "partial": "Packages",
          "signature": "Lens Atoms[BinaryDebDescription]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types.html#v:binaryPackages"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap of the binary package priorities (FIXME: redundant with BinaryDebDescription)\n\u003c/p\u003e",
          "module": "Debian.Debianize.Types",
          "name": "binaryPriority",
          "package": "cabal-debian",
          "signature": "BinPkgName -\u003e Lens Atoms (Maybe PackagePriority)",
          "source": "src/Debian-Debianize-Types.html#binaryPriority",
          "type": "function"
        },
        "index": {
          "description": "Map of the binary package priorities FIXME redundant with BinaryDebDescription",
          "hierarchy": "Debian Debianize Types",
          "module": "Debian.Debianize.Types",
          "name": "binaryPriority",
          "normalized": "BinPkgName-\u003eLens Atoms(Maybe PackagePriority)",
          "package": "cabal-debian",
          "partial": "Priority",
          "signature": "BinPkgName-\u003eLens Atoms(Maybe PackagePriority)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types.html#v:binaryPriority"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap of the binary deb section assignments (FIXME: redundant with BinaryDebDescription)\n\u003c/p\u003e",
          "module": "Debian.Debianize.Types",
          "name": "binarySection",
          "package": "cabal-debian",
          "signature": "BinPkgName -\u003e Lens Atoms (Maybe Section)",
          "source": "src/Debian-Debianize-Types.html#binarySection",
          "type": "function"
        },
        "index": {
          "description": "Map of the binary deb section assignments FIXME redundant with BinaryDebDescription",
          "hierarchy": "Debian Debianize Types",
          "module": "Debian.Debianize.Types",
          "name": "binarySection",
          "normalized": "BinPkgName-\u003eLens Atoms(Maybe Section)",
          "package": "cabal-debian",
          "partial": "Section",
          "signature": "BinPkgName-\u003eLens Atoms(Maybe Section)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types.html#v:binarySection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe Breaks: relations for each binary deb - \u003ca\u003ehttp://www.debian.org/doc/debian-policy/ch-controlfields.html#s5.6.10\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Debian.Debianize.Types",
          "name": "breaks",
          "package": "cabal-debian",
          "signature": "BinPkgName -\u003e Lens Atoms Relations",
          "source": "src/Debian-Debianize-Types.html#breaks",
          "type": "function"
        },
        "index": {
          "description": "The Breaks relations for each binary deb http www.debian.org doc debian-policy ch-controlfields.html s5.6.10",
          "hierarchy": "Debian Debianize Types",
          "module": "Debian.Debianize.Types",
          "name": "breaks",
          "normalized": "BinPkgName-\u003eLens Atoms Relations",
          "package": "cabal-debian",
          "signature": "BinPkgName-\u003eLens Atoms Relations",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types.html#v:breaks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ca\u003ehttp://www.debian.org/doc/debian-policy/ch-relationships.html#s-sourcebinarydeps\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Debian.Debianize.Types",
          "name": "buildConflicts",
          "package": "cabal-debian",
          "signature": "Lens Atoms Relations",
          "source": "src/Debian-Debianize-Types.html#buildConflicts",
          "type": "function"
        },
        "index": {
          "description": "http www.debian.org doc debian-policy ch-relationships.html s-sourcebinarydeps",
          "hierarchy": "Debian Debianize Types",
          "module": "Debian.Debianize.Types",
          "name": "buildConflicts",
          "package": "cabal-debian",
          "partial": "Conflicts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types.html#v:buildConflicts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ca\u003ehttp://www.debian.org/doc/debian-policy/ch-relationships.html#s-sourcebinarydeps\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Debian.Debianize.Types",
          "name": "buildConflictsIndep",
          "package": "cabal-debian",
          "signature": "Lens Atoms Relations",
          "source": "src/Debian-Debianize-Types.html#buildConflictsIndep",
          "type": "function"
        },
        "index": {
          "description": "http www.debian.org doc debian-policy ch-relationships.html s-sourcebinarydeps",
          "hierarchy": "Debian Debianize Types",
          "module": "Debian.Debianize.Types",
          "name": "buildConflictsIndep",
          "package": "cabal-debian",
          "partial": "Conflicts Indep",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types.html#v:buildConflictsIndep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ca\u003ehttp://www.debian.org/doc/debian-policy/ch-relationships.html#s-sourcebinarydeps\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Debian.Debianize.Types",
          "name": "buildDepends",
          "package": "cabal-debian",
          "signature": "Lens Atoms Relations",
          "source": "src/Debian-Debianize-Types.html#buildDepends",
          "type": "function"
        },
        "index": {
          "description": "http www.debian.org doc debian-policy ch-relationships.html s-sourcebinarydeps",
          "hierarchy": "Debian Debianize Types",
          "module": "Debian.Debianize.Types",
          "name": "buildDepends",
          "package": "cabal-debian",
          "partial": "Depends",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types.html#v:buildDepends"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ca\u003ehttp://www.debian.org/doc/debian-policy/ch-relationships.html#s-sourcebinarydeps\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Debian.Debianize.Types",
          "name": "buildDependsIndep",
          "package": "cabal-debian",
          "signature": "Lens Atoms Relations",
          "source": "src/Debian-Debianize-Types.html#buildDependsIndep",
          "type": "function"
        },
        "index": {
          "description": "http www.debian.org doc debian-policy ch-relationships.html s-sourcebinarydeps",
          "hierarchy": "Debian Debianize Types",
          "module": "Debian.Debianize.Types",
          "name": "buildDependsIndep",
          "package": "cabal-debian",
          "partial": "Depends Indep",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types.html#v:buildDependsIndep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTHe Built-Using: relations for each binary deb - \u003ca\u003ehttp://www.debian.org/doc/debian-policy/ch-controlfields.html#s5.6.10\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Debian.Debianize.Types",
          "name": "builtUsing",
          "package": "cabal-debian",
          "signature": "BinPkgName -\u003e Lens Atoms Relations",
          "source": "src/Debian-Debianize-Types.html#builtUsing",
          "type": "function"
        },
        "index": {
          "description": "THe Built-Using relations for each binary deb http www.debian.org doc debian-policy ch-controlfields.html s5.6.10",
          "hierarchy": "Debian Debianize Types",
          "module": "Debian.Debianize.Types",
          "name": "builtUsing",
          "normalized": "BinPkgName-\u003eLens Atoms Relations",
          "package": "cabal-debian",
          "partial": "Using",
          "signature": "BinPkgName-\u003eLens Atoms Relations",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types.html#v:builtUsing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ca\u003ehttp://www.debian.org/doc/debian-policy/ch-controlfields.html#s-f-Changed-By\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Debian.Debianize.Types",
          "name": "changedBy",
          "package": "cabal-debian",
          "signature": "Lens Atoms (Maybe NameAddr)",
          "source": "src/Debian-Debianize-Types.html#changedBy",
          "type": "function"
        },
        "index": {
          "description": "http www.debian.org doc debian-policy ch-controlfields.html s-f-Changed-By",
          "hierarchy": "Debian Debianize Types",
          "module": "Debian.Debianize.Types",
          "name": "changedBy",
          "package": "cabal-debian",
          "partial": "By",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types.html#v:changedBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe Conflicts: relations for each binary deb - \u003ca\u003ehttp://www.debian.org/doc/debian-policy/ch-controlfields.html#s5.6.10\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Debian.Debianize.Types",
          "name": "conflicts",
          "package": "cabal-debian",
          "signature": "BinPkgName -\u003e Lens Atoms Relations",
          "source": "src/Debian-Debianize-Types.html#conflicts",
          "type": "function"
        },
        "index": {
          "description": "The Conflicts relations for each binary deb http www.debian.org doc debian-policy ch-controlfields.html s5.6.10",
          "hierarchy": "Debian Debianize Types",
          "module": "Debian.Debianize.Types",
          "name": "conflicts",
          "normalized": "BinPkgName-\u003eLens Atoms Relations",
          "package": "cabal-debian",
          "signature": "BinPkgName-\u003eLens Atoms Relations",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types.html#v:conflicts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLens into the description field of a BinaryDebDescription.\n\u003c/p\u003e",
          "module": "Debian.Debianize.Types",
          "name": "debianDescription",
          "package": "cabal-debian",
          "signature": "BinPkgName -\u003e Lens Atoms (Maybe Text)",
          "source": "src/Debian-Debianize-Types.html#debianDescription",
          "type": "function"
        },
        "index": {
          "description": "Lens into the description field of BinaryDebDescription",
          "hierarchy": "Debian Debianize Types",
          "module": "Debian.Debianize.Types",
          "name": "debianDescription",
          "normalized": "BinPkgName-\u003eLens Atoms(Maybe Text)",
          "package": "cabal-debian",
          "partial": "Description",
          "signature": "BinPkgName-\u003eLens Atoms(Maybe Text)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types.html#v:debianDescription"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe Depends: relations for each binary deb - \u003ca\u003ehttp://www.debian.org/doc/debian-policy/ch-controlfields.html#s5.6.10\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Debian.Debianize.Types",
          "name": "depends",
          "package": "cabal-debian",
          "signature": "BinPkgName -\u003e Lens Atoms Relations",
          "source": "src/Debian-Debianize-Types.html#depends",
          "type": "function"
        },
        "index": {
          "description": "The Depends relations for each binary deb http www.debian.org doc debian-policy ch-controlfields.html s5.6.10",
          "hierarchy": "Debian Debianize Types",
          "module": "Debian.Debianize.Types",
          "name": "depends",
          "normalized": "BinPkgName-\u003eLens Atoms Relations",
          "package": "cabal-debian",
          "signature": "BinPkgName-\u003eLens Atoms Relations",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types.html#v:depends"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eObsolete - \u003ca\u003ehttp://www.debian.org/doc/debian-policy/ch-controlfields.html#s-f-DM-Upload-Allowed\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Debian.Debianize.Types",
          "name": "dmUploadAllowed",
          "package": "cabal-debian",
          "signature": "Lens Atoms Bool",
          "source": "src/Debian-Debianize-Types.html#dmUploadAllowed",
          "type": "function"
        },
        "index": {
          "description": "Obsolete http www.debian.org doc debian-policy ch-controlfields.html s-f-DM-Upload-Allowed",
          "hierarchy": "Debian Debianize Types",
          "module": "Debian.Debianize.Types",
          "name": "dmUploadAllowed",
          "package": "cabal-debian",
          "partial": "Upload Allowed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types.html#v:dmUploadAllowed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ca\u003ehttp://www.debian.org/doc/debian-policy/ch-controlfields.html#s-f-Essential\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Debian.Debianize.Types",
          "name": "essential",
          "package": "cabal-debian",
          "signature": "BinPkgName -\u003e Lens Atoms (Maybe Bool)",
          "source": "src/Debian-Debianize-Types.html#essential",
          "type": "function"
        },
        "index": {
          "description": "http www.debian.org doc debian-policy ch-controlfields.html s-f-Essential",
          "hierarchy": "Debian Debianize Types",
          "module": "Debian.Debianize.Types",
          "name": "essential",
          "normalized": "BinPkgName-\u003eLens Atoms(Maybe Bool)",
          "package": "cabal-debian",
          "signature": "BinPkgName-\u003eLens Atoms(Maybe Bool)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types.html#v:essential"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ca\u003ehttp://www.debian.org/doc/debian-policy/ch-controlfields.html#s-f-Homepage\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Debian.Debianize.Types",
          "name": "homepage",
          "package": "cabal-debian",
          "signature": "Lens Atoms (Maybe Text)",
          "source": "src/Debian-Debianize-Types.html#homepage",
          "type": "function"
        },
        "index": {
          "description": "http www.debian.org doc debian-policy ch-controlfields.html s-f-Homepage",
          "hierarchy": "Debian Debianize Types",
          "module": "Debian.Debianize.Types",
          "name": "homepage",
          "package": "cabal-debian",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types.html#v:homepage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMaintainer field.  Overrides any value found in the cabal file, or\n in the DEBIANMAINTAINER environment variable.\n \u003ca\u003ehttp://www.debian.org/doc/debian-policy/ch-controlfields.html#s-f-Maintainer\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Debian.Debianize.Types",
          "name": "maintainer",
          "package": "cabal-debian",
          "signature": "Lens Atoms (Maybe NameAddr)",
          "source": "src/Debian-Debianize-Types.html#maintainer",
          "type": "function"
        },
        "index": {
          "description": "Maintainer field Overrides any value found in the cabal file or in the DEBIANMAINTAINER environment variable http www.debian.org doc debian-policy ch-controlfields.html s-f-Maintainer",
          "hierarchy": "Debian Debianize Types",
          "module": "Debian.Debianize.Types",
          "name": "maintainer",
          "package": "cabal-debian",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types.html#v:maintainer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLens onto one of several \u003ccode\u003e\u003ca\u003ePackageType\u003c/a\u003e\u003c/code\u003e values of which we have\n specific knowledge how to package.\n\u003c/p\u003e",
          "module": "Debian.Debianize.Types",
          "name": "packageType",
          "package": "cabal-debian",
          "signature": "BinPkgName -\u003e Lens Atoms (Maybe PackageType)",
          "source": "src/Debian-Debianize-Types.html#packageType",
          "type": "function"
        },
        "index": {
          "description": "Lens onto one of several PackageType values of which we have specific knowledge how to package",
          "hierarchy": "Debian Debianize Types",
          "module": "Debian.Debianize.Types",
          "name": "packageType",
          "normalized": "BinPkgName-\u003eLens Atoms(Maybe PackageType)",
          "package": "cabal-debian",
          "partial": "Type",
          "signature": "BinPkgName-\u003eLens Atoms(Maybe PackageType)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types.html#v:packageType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe Pre-Depends: relations for each binary deb - \u003ca\u003ehttp://www.debian.org/doc/debian-policy/ch-controlfields.html#s5.6.10\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Debian.Debianize.Types",
          "name": "preDepends",
          "package": "cabal-debian",
          "signature": "BinPkgName -\u003e Lens Atoms Relations",
          "source": "src/Debian-Debianize-Types.html#preDepends",
          "type": "function"
        },
        "index": {
          "description": "The Pre-Depends relations for each binary deb http www.debian.org doc debian-policy ch-controlfields.html s5.6.10",
          "hierarchy": "Debian Debianize Types",
          "module": "Debian.Debianize.Types",
          "name": "preDepends",
          "normalized": "BinPkgName-\u003eLens Atoms Relations",
          "package": "cabal-debian",
          "partial": "Depends",
          "signature": "BinPkgName-\u003eLens Atoms Relations",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types.html#v:preDepends"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe Provides: relations for each binary deb - \u003ca\u003ehttp://www.debian.org/doc/debian-policy/ch-controlfields.html#s5.6.10\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Debian.Debianize.Types",
          "name": "provides",
          "package": "cabal-debian",
          "signature": "BinPkgName -\u003e Lens Atoms Relations",
          "source": "src/Debian-Debianize-Types.html#provides",
          "type": "function"
        },
        "index": {
          "description": "The Provides relations for each binary deb http www.debian.org doc debian-policy ch-controlfields.html s5.6.10",
          "hierarchy": "Debian Debianize Types",
          "module": "Debian.Debianize.Types",
          "name": "provides",
          "normalized": "BinPkgName-\u003eLens Atoms Relations",
          "package": "cabal-debian",
          "signature": "BinPkgName-\u003eLens Atoms Relations",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types.html#v:provides"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe Recommends: relations for each binary deb - \u003ca\u003ehttp://www.debian.org/doc/debian-policy/ch-controlfields.html#s5.6.10\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Debian.Debianize.Types",
          "name": "recommends",
          "package": "cabal-debian",
          "signature": "BinPkgName -\u003e Lens Atoms Relations",
          "source": "src/Debian-Debianize-Types.html#recommends",
          "type": "function"
        },
        "index": {
          "description": "The Recommends relations for each binary deb http www.debian.org doc debian-policy ch-controlfields.html s5.6.10",
          "hierarchy": "Debian Debianize Types",
          "module": "Debian.Debianize.Types",
          "name": "recommends",
          "normalized": "BinPkgName-\u003eLens Atoms Relations",
          "package": "cabal-debian",
          "signature": "BinPkgName-\u003eLens Atoms Relations",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types.html#v:recommends"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe Replaces: relations for each binary deb - \u003ca\u003ehttp://www.debian.org/doc/debian-policy/ch-controlfields.html#s5.6.10\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Debian.Debianize.Types",
          "name": "replaces",
          "package": "cabal-debian",
          "signature": "BinPkgName -\u003e Lens Atoms Relations",
          "source": "src/Debian-Debianize-Types.html#replaces",
          "type": "function"
        },
        "index": {
          "description": "The Replaces relations for each binary deb http www.debian.org doc debian-policy ch-controlfields.html s5.6.10",
          "hierarchy": "Debian Debianize Types",
          "module": "Debian.Debianize.Types",
          "name": "replaces",
          "normalized": "BinPkgName-\u003eLens Atoms Relations",
          "package": "cabal-debian",
          "signature": "BinPkgName-\u003eLens Atoms Relations",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types.html#v:replaces"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ca\u003ehttp://www.debian.org/doc/debian-policy/ch-controlfields.html#s-f-Source\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Debian.Debianize.Types",
          "name": "source",
          "package": "cabal-debian",
          "signature": "Lens Atoms (Maybe SrcPkgName)",
          "source": "src/Debian-Debianize-Types.html#source",
          "type": "function"
        },
        "index": {
          "description": "http www.debian.org doc debian-policy ch-controlfields.html s-f-Source",
          "hierarchy": "Debian Debianize Types",
          "module": "Debian.Debianize.Types",
          "name": "source",
          "package": "cabal-debian",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types.html#v:source"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe source package priority - \u003ca\u003ehttp://www.debian.org/doc/debian-policy/ch-controlfields.html#s-f-Priority\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Debian.Debianize.Types",
          "name": "sourcePriority",
          "package": "cabal-debian",
          "signature": "Lens Atoms (Maybe PackagePriority)",
          "source": "src/Debian-Debianize-Types.html#sourcePriority",
          "type": "function"
        },
        "index": {
          "description": "The source package priority http www.debian.org doc debian-policy ch-controlfields.html s-f-Priority",
          "hierarchy": "Debian Debianize Types",
          "module": "Debian.Debianize.Types",
          "name": "sourcePriority",
          "package": "cabal-debian",
          "partial": "Priority",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types.html#v:sourcePriority"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe source package's section assignment - \u003ca\u003ehttp://www.debian.org/doc/debian-policy/ch-controlfields.html#s-f-Section\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Debian.Debianize.Types",
          "name": "sourceSection",
          "package": "cabal-debian",
          "signature": "Lens Atoms (Maybe Section)",
          "source": "src/Debian-Debianize-Types.html#sourceSection",
          "type": "function"
        },
        "index": {
          "description": "The source package section assignment http www.debian.org doc debian-policy ch-controlfields.html s-f-Section",
          "hierarchy": "Debian Debianize Types",
          "module": "Debian.Debianize.Types",
          "name": "sourceSection",
          "package": "cabal-debian",
          "partial": "Section",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types.html#v:sourceSection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Debianize.Types",
          "name": "standardsVersion",
          "package": "cabal-debian",
          "signature": "Lens Atoms (Maybe StandardsVersion)",
          "source": "src/Debian-Debianize-Types.html#standardsVersion",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debian Debianize Types",
          "module": "Debian.Debianize.Types",
          "name": "standardsVersion",
          "package": "cabal-debian",
          "partial": "Version",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types.html#v:standardsVersion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe Suggests: relations for each binary deb - \u003ca\u003ehttp://www.debian.org/doc/debian-policy/ch-controlfields.html#s5.6.10\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Debian.Debianize.Types",
          "name": "suggests",
          "package": "cabal-debian",
          "signature": "BinPkgName -\u003e Lens Atoms Relations",
          "source": "src/Debian-Debianize-Types.html#suggests",
          "type": "function"
        },
        "index": {
          "description": "The Suggests relations for each binary deb http www.debian.org doc debian-policy ch-controlfields.html s5.6.10",
          "hierarchy": "Debian Debianize Types",
          "module": "Debian.Debianize.Types",
          "name": "suggests",
          "normalized": "BinPkgName-\u003eLens Atoms Relations",
          "package": "cabal-debian",
          "signature": "BinPkgName-\u003eLens Atoms Relations",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types.html#v:suggests"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Debianize.Types",
          "name": "unTop",
          "package": "cabal-debian",
          "signature": "FilePath",
          "source": "src/Debian-Debianize-Types.html#Top",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debian Debianize Types",
          "module": "Debian.Debianize.Types",
          "name": "unTop",
          "package": "cabal-debian",
          "partial": "Top",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types.html#v:unTop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ca\u003ehttp://www.debian.org/doc/debian-policy/ch-controlfields.html#s-f-Uploaders\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Debian.Debianize.Types",
          "name": "uploaders",
          "package": "cabal-debian",
          "signature": "Lens Atoms [NameAddr]",
          "source": "src/Debian-Debianize-Types.html#uploaders",
          "type": "function"
        },
        "index": {
          "description": "http www.debian.org doc debian-policy ch-controlfields.html s-f-Uploaders",
          "hierarchy": "Debian Debianize Types",
          "module": "Debian.Debianize.Types",
          "name": "uploaders",
          "normalized": "Lens Atoms[NameAddr]",
          "package": "cabal-debian",
          "signature": "Lens Atoms[NameAddr]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types.html#v:uploaders"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVersion control system field - \u003ca\u003ehttp://www.debian.org/doc/debian-policy/ch-controlfields.html#s-f-VCS-fields\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Debian.Debianize.Types",
          "name": "vcsFields",
          "package": "cabal-debian",
          "signature": "Lens Atoms (Set VersionControlSpec)",
          "source": "src/Debian-Debianize-Types.html#vcsFields",
          "type": "function"
        },
        "index": {
          "description": "Version control system field http www.debian.org doc debian-policy ch-controlfields.html s-f-VCS-fields",
          "hierarchy": "Debian Debianize Types",
          "module": "Debian.Debianize.Types",
          "name": "vcsFields",
          "package": "cabal-debian",
          "partial": "Fields",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types.html#v:vcsFields"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUser defined fields - \u003ca\u003ehttp://www.debian.org/doc/debian-policy/ch-controlfields.html#s5.7\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Debian.Debianize.Types",
          "name": "xFields",
          "package": "cabal-debian",
          "signature": "Lens Atoms (Set XField)",
          "source": "src/Debian-Debianize-Types.html#xFields",
          "type": "function"
        },
        "index": {
          "description": "User defined fields http www.debian.org doc debian-policy ch-controlfields.html s5.7",
          "hierarchy": "Debian Debianize Types",
          "module": "Debian.Debianize.Types",
          "name": "xFields",
          "package": "cabal-debian",
          "partial": "Fields",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-Types.html#v:xFields"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Debianize.VersionSplits",
          "name": "VersionSplits",
          "package": "cabal-debian",
          "source": "src/Debian-Debianize-VersionSplits.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Debian Debianize VersionSplits",
          "module": "Debian.Debianize.VersionSplits",
          "name": "VersionSplits",
          "package": "cabal-debian",
          "partial": "Version Splits",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-VersionSplits.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDescribes a mapping from cabal package name and version to debian\n package names.  For example, versions of the cabal QuickCheck\n package less than 2 are mapped to \u003ca\u003equickcheck1\u003c/a\u003e, while version 2 or\n greater is mapped to \u003ca\u003equickcheck2\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Debian.Debianize.VersionSplits",
          "name": "VersionSplits",
          "package": "cabal-debian",
          "source": "src/Debian-Debianize-VersionSplits.html#VersionSplits",
          "type": "data"
        },
        "index": {
          "description": "Describes mapping from cabal package name and version to debian package names For example versions of the cabal QuickCheck package less than are mapped to quickcheck1 while version or greater is mapped to quickcheck2",
          "hierarchy": "Debian Debianize VersionSplits",
          "module": "Debian.Debianize.VersionSplits",
          "name": "VersionSplits",
          "package": "cabal-debian",
          "partial": "Version Splits",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-VersionSplits.html#t:VersionSplits"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Debianize.VersionSplits",
          "name": "doSplits",
          "package": "cabal-debian",
          "signature": "VersionSplits -\u003e Maybe VersionReq -\u003e String",
          "source": "src/Debian-Debianize-VersionSplits.html#doSplits",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debian Debianize VersionSplits",
          "module": "Debian.Debianize.VersionSplits",
          "name": "doSplits",
          "normalized": "VersionSplits-\u003eMaybe VersionReq-\u003eString",
          "package": "cabal-debian",
          "partial": "Splits",
          "signature": "VersionSplits-\u003eMaybe VersionReq-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-VersionSplits.html#v:doSplits"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSplit the version range and give the older packages a new name.\n\u003c/p\u003e",
          "module": "Debian.Debianize.VersionSplits",
          "name": "insertSplit",
          "package": "cabal-debian",
          "signature": "Version -\u003e String -\u003e VersionSplits -\u003e VersionSplits",
          "source": "src/Debian-Debianize-VersionSplits.html#insertSplit",
          "type": "function"
        },
        "index": {
          "description": "Split the version range and give the older packages new name",
          "hierarchy": "Debian Debianize VersionSplits",
          "module": "Debian.Debianize.VersionSplits",
          "name": "insertSplit",
          "normalized": "Version-\u003eString-\u003eVersionSplits-\u003eVersionSplits",
          "package": "cabal-debian",
          "partial": "Split",
          "signature": "Version-\u003eString-\u003eVersionSplits-\u003eVersionSplits",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-VersionSplits.html#v:insertSplit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThese are the instances of debian names changing that I know\n about.  I know they really shouldn't be hard coded.  Send a patch.\n Note that this inherits the lack of type safety of the mkPkgName\n function.\n\u003c/p\u003e",
          "module": "Debian.Debianize.VersionSplits",
          "name": "knownVersionSplits",
          "package": "cabal-debian",
          "signature": "Map PackageName VersionSplits",
          "source": "src/Debian-Debianize-VersionSplits.html#knownVersionSplits",
          "type": "function"
        },
        "index": {
          "description": "These are the instances of debian names changing that know about know they really shouldn be hard coded Send patch Note that this inherits the lack of type safety of the mkPkgName function",
          "hierarchy": "Debian Debianize VersionSplits",
          "module": "Debian.Debianize.VersionSplits",
          "name": "knownVersionSplits",
          "package": "cabal-debian",
          "partial": "Version Splits",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-VersionSplits.html#v:knownVersionSplits"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Debianize.VersionSplits",
          "name": "makePackage",
          "package": "cabal-debian",
          "signature": "String -\u003e VersionSplits",
          "source": "src/Debian-Debianize-VersionSplits.html#makePackage",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debian Debianize VersionSplits",
          "module": "Debian.Debianize.VersionSplits",
          "name": "makePackage",
          "normalized": "String-\u003eVersionSplits",
          "package": "cabal-debian",
          "partial": "Package",
          "signature": "String-\u003eVersionSplits",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-VersionSplits.html#v:makePackage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Debianize.VersionSplits",
          "name": "packageRangesFromVersionSplits",
          "package": "cabal-debian",
          "signature": "VersionSplits -\u003e [(String, VersionRange)]",
          "source": "src/Debian-Debianize-VersionSplits.html#packageRangesFromVersionSplits",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debian Debianize VersionSplits",
          "module": "Debian.Debianize.VersionSplits",
          "name": "packageRangesFromVersionSplits",
          "normalized": "VersionSplits-\u003e[(String,VersionRange)]",
          "package": "cabal-debian",
          "partial": "Ranges From Version Splits",
          "signature": "VersionSplits-\u003e[(String,VersionRange)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize-VersionSplits.html#v:packageRangesFromVersionSplits"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cdl\u003e\u003cdt\u003e\u003cem\u003eQUICK START:\u003c/em\u003e\u003c/dt\u003e\u003cdd\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003cp\u003eYou can either run the \u003ccode\u003ecabal-debian --debianize\u003c/code\u003e, or\n for more power and flexibility you can put a \u003ccode\u003eDebianize.hs\u003c/code\u003e script in\n the package's \u003ccode\u003edebian\u003c/code\u003e subdirectory.\n \u003ccode\u003e\u003ca\u003eAtoms\u003c/a\u003e\u003c/code\u003e value and pass it to the\n \u003ccode\u003e\u003ca\u003edebianize\u003c/a\u003e\u003c/code\u003e function.  The\n \u003ccode\u003e\u003ca\u003ecallDebianize\u003c/a\u003e\u003c/code\u003e function retrieves extra arguments\n from the \u003ccode\u003eCABALDEBIAN\u003c/code\u003e environment variable and calls\n \u003ccode\u003e\u003ca\u003edebianize\u003c/a\u003e\u003c/code\u003e with the build directory set as it\n would be when the packages is built by \u003ccode\u003edpkg-buildpackage\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eTo see what your debianization would produce, or how it differs\n from the debianization already present:\n\u003c/p\u003e\u003cpre\u003e % cabal-debian --debianize -n\n\u003c/pre\u003e\u003cp\u003eThis is equivalent to the library call\n\u003c/p\u003e\u003cpre\u003e % ghc -e 'Debian.Debianize.callDebianize [\"-n\"]'\n\u003c/pre\u003e\u003cp\u003eTo actually create the debianization and then build the debs,\n\u003c/p\u003e\u003cpre\u003e % ghc -e 'Debian.Debianize.callDebianize []'\n % sudo dpkg-buildpackage\n\u003c/pre\u003e\u003cp\u003eAt this point you may need to modify Cabal.defaultFlags to achieve\n specific packaging goals.  Create a module for this in debian/Debianize.hs:\n\u003c/p\u003e\u003cpre\u003e import Data.Lens.Lazy\n import Data.Map as Map (insertWith)\n import Data.Set as Set (union, singleton)\n import Debian.Relation (BinPkgName(BinPkgName), Relation(Rel))\n import Debian.Debianize (defaultAtoms, depends, debianization, writeDebianization)\n main = debianization \".\" defaultAtoms \u003e\u003e=\n        return . modL depends (insertWith union (BinPkgName \"cabal-debian\") (singleton (Rel (BinPkgName \"debian-policy\") Nothing Nothing))) \u003e\u003e=\n        writeDebianization \".\"\n\u003c/pre\u003e\u003cp\u003eThen to test it,\n\u003c/p\u003e\u003cpre\u003e % CABALDEBIAN='[\"-n\"]' runhaskell debian/Debianize.hs\n\u003c/pre\u003e\u003cp\u003eor equivalently\n\u003c/p\u003e\u003cpre\u003e % ghc -e 'Debian.Debianize.runDebianize [\"-n\"]'\n\u003c/pre\u003e\u003cp\u003eand to run it for real:\n\u003c/p\u003e\u003cpre\u003e % runhaskell debian/Debianize.hs\n\u003c/pre\u003e\u003cdl\u003e\u003cdt\u003e\u003cem\u003eDESIGN OVERVIEW\u003c/em\u003e\u003c/dt\u003e\u003cdd\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003cp\u003eThe three phases of the operation of the system are Input -\u003e Finalization -\u003e Output.\n\u003c/p\u003e\u003cdl\u003e\u003cdt\u003eInput\u003c/dt\u003e\u003cdd\u003e Module \u003ca\u003eDebian.Debianize.Input\u003c/a\u003e - gather inputs using IO\n    operations and customization functions, from the .cabal file, an\n    existing debianization, and so on.  This information results in\n    a value of type \u003ccode\u003eAtoms\u003c/code\u003e.  Modules \u003ccode\u003eTypes\u003c/code\u003e, \u003ccode\u003eLenses\u003c/code\u003e, \u003ccode\u003eInputs\u003c/code\u003e.\n\u003c/dd\u003e\u003cdt\u003eCustomize\u003c/dt\u003e\u003cdd\u003e Make modifications to the input values\n\u003c/dd\u003e\u003cdt\u003eFinalization\u003c/dt\u003e\u003cdd\u003e Module \u003ca\u003eDebian.Debianize.Finalize\u003c/a\u003e - Fill in any\n    information missing from \u003ccode\u003eAtoms\u003c/code\u003e that is required to build the\n    debianization based on the inputs and our policy decisions.\n\u003c/dd\u003e\u003cdt\u003eDebianize\u003c/dt\u003e\u003cdd\u003e Module \u003ca\u003eDebian.Debianize.Files\u003c/a\u003e - Compute the paths\n    and files of the debianization from the Atoms value.\n\u003c/dd\u003e\u003cdt\u003eOutput\u003c/dt\u003e\u003cdd\u003e Module \u003ca\u003eDebian.Debianize.Output\u003c/a\u003e - Perform a variety of\n    output operations on the debianzation - writing or updating the\n    files in a debian directory, comparing two debianizations,\n    validate a debianization (ensure two debianizations match in\n    source and binary package names), or describe a debianization.\n\u003c/dd\u003e\u003c/dl\u003e\u003cp\u003eThere is also a high level function to run a script that runs this\n entire pipeline when it finds from a script found in a\n debian/Debianize.hs file.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Debian.Debianize",
          "name": "Debianize",
          "package": "cabal-debian",
          "source": "src/Debian-Debianize.html",
          "type": "module"
        },
        "index": {
          "description": "QUICK START You can either run the cabal-debian debianize or for more power and flexibility you can put Debianize.hs script in the package debian subdirectory Atoms value and pass it to the debianize function The callDebianize function retrieves extra arguments from the CABALDEBIAN environment variable and calls debianize with the build directory set as it would be when the packages is built by dpkg-buildpackage To see what your debianization would produce or how it differs from the debianization already present cabal-debian debianize This is equivalent to the library call ghc Debian.Debianize.callDebianize To actually create the debianization and then build the debs ghc Debian.Debianize.callDebianize sudo dpkg-buildpackage At this point you may need to modify Cabal.defaultFlags to achieve specific packaging goals Create module for this in debian Debianize.hs import Data.Lens.Lazy import Data.Map as Map insertWith import Data.Set as Set union singleton import Debian.Relation BinPkgName BinPkgName Relation Rel import Debian.Debianize defaultAtoms depends debianization writeDebianization main debianization defaultAtoms return modL depends insertWith union BinPkgName cabal-debian singleton Rel BinPkgName debian-policy Nothing Nothing writeDebianization Then to test it CABALDEBIAN runhaskell debian Debianize.hs or equivalently ghc Debian.Debianize.runDebianize and to run it for real runhaskell debian Debianize.hs DESIGN OVERVIEW The three phases of the operation of the system are Input Finalization Output Input Module Debian.Debianize.Input gather inputs using IO operations and customization functions from the cabal file an existing debianization and so on This information results in value of type Atoms Modules Types Lenses Inputs Customize Make modifications to the input values Finalization Module Debian.Debianize.Finalize Fill in any information missing from Atoms that is required to build the debianization based on the inputs and our policy decisions Debianize Module Debian.Debianize.Files Compute the paths and files of the debianization from the Atoms value Output Module Debian.Debianize.Output Perform variety of output operations on the debianzation writing or updating the files in debian directory comparing two debianizations validate debianization ensure two debianizations match in source and binary package names or describe debianization There is also high level function to run script that runs this entire pipeline when it finds from script found in debian Debianize.hs file",
          "hierarchy": "Debian Debianize",
          "module": "Debian.Debianize",
          "name": "Debianize",
          "package": "cabal-debian",
          "partial": "Debianize",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Debianize",
          "name": "DebM",
          "package": "cabal-debian",
          "source": "src/Debian-Debianize-Monad.html#DebM",
          "type": "type"
        },
        "index": {
          "hierarchy": "Debian Debianize",
          "module": "Debian.Debianize",
          "name": "DebM",
          "package": "cabal-debian",
          "partial": "Deb",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize.html#t:DebM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Debianize",
          "name": "DebT",
          "package": "cabal-debian",
          "source": "src/Debian-Debianize-Monad.html#DebT",
          "type": "type"
        },
        "index": {
          "hierarchy": "Debian Debianize",
          "module": "Debian.Debianize",
          "name": "DebT",
          "package": "cabal-debian",
          "partial": "Deb",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Debianize.html#t:DebT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCode pulled out of cabal-debian that straightforwardly implements\n parts of the Debian policy manual, or other bits of Linux standards.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Debian.Policy",
          "name": "Policy",
          "package": "cabal-debian",
          "source": "src/Debian-Policy.html",
          "type": "module"
        },
        "index": {
          "description": "Code pulled out of cabal-debian that straightforwardly implements parts of the Debian policy manual or other bits of Linux standards",
          "hierarchy": "Debian Policy",
          "module": "Debian.Policy",
          "name": "Policy",
          "package": "cabal-debian",
          "partial": "Policy",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Policy.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Policy",
          "name": "Area",
          "package": "cabal-debian",
          "source": "src/Debian-Policy.html#Area",
          "type": "data"
        },
        "index": {
          "hierarchy": "Debian Policy",
          "module": "Debian.Policy",
          "name": "Area",
          "package": "cabal-debian",
          "partial": "Area",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Policy.html#t:Area"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe architectures for which a binary deb can be built.\n\u003c/p\u003e",
          "module": "Debian.Policy",
          "name": "PackageArchitectures",
          "package": "cabal-debian",
          "source": "src/Debian-Policy.html#PackageArchitectures",
          "type": "data"
        },
        "index": {
          "description": "The architectures for which binary deb can be built",
          "hierarchy": "Debian Policy",
          "module": "Debian.Policy",
          "name": "PackageArchitectures",
          "package": "cabal-debian",
          "partial": "Package Architectures",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Policy.html#t:PackageArchitectures"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Policy",
          "name": "PackagePriority",
          "package": "cabal-debian",
          "source": "src/Debian-Policy.html#PackagePriority",
          "type": "data"
        },
        "index": {
          "hierarchy": "Debian Policy",
          "module": "Debian.Policy",
          "name": "PackagePriority",
          "package": "cabal-debian",
          "partial": "Package Priority",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Policy.html#t:PackagePriority"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Policy",
          "name": "Section",
          "package": "cabal-debian",
          "source": "src/Debian-Policy.html#Section",
          "type": "data"
        },
        "index": {
          "hierarchy": "Debian Policy",
          "module": "Debian.Policy",
          "name": "Section",
          "package": "cabal-debian",
          "partial": "Section",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Policy.html#t:Section"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Policy",
          "name": "SourceFormat",
          "package": "cabal-debian",
          "source": "src/Debian-Policy.html#SourceFormat",
          "type": "data"
        },
        "index": {
          "hierarchy": "Debian Policy",
          "module": "Debian.Policy",
          "name": "SourceFormat",
          "package": "cabal-debian",
          "partial": "Source Format",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Policy.html#t:SourceFormat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Policy",
          "name": "StandardsVersion",
          "package": "cabal-debian",
          "source": "src/Debian-Policy.html#StandardsVersion",
          "type": "data"
        },
        "index": {
          "hierarchy": "Debian Policy",
          "module": "Debian.Policy",
          "name": "StandardsVersion",
          "package": "cabal-debian",
          "partial": "Standards Version",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Policy.html#t:StandardsVersion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe package is architecture independenct\n\u003c/p\u003e",
          "module": "Debian.Policy",
          "name": "All",
          "package": "cabal-debian",
          "signature": "All",
          "source": "src/Debian-Policy.html#PackageArchitectures",
          "type": "function"
        },
        "index": {
          "description": "The package is architecture independenct",
          "hierarchy": "Debian Policy",
          "module": "Debian.Policy",
          "name": "All",
          "package": "cabal-debian",
          "partial": "All",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Policy.html#v:All"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe package can be built for any architecture\n\u003c/p\u003e",
          "module": "Debian.Policy",
          "name": "Any",
          "package": "cabal-debian",
          "signature": "Any",
          "source": "src/Debian-Policy.html#PackageArchitectures",
          "type": "function"
        },
        "index": {
          "description": "The package can be built for any architecture",
          "hierarchy": "Debian Policy",
          "module": "Debian.Policy",
          "name": "Any",
          "package": "cabal-debian",
          "partial": "Any",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Policy.html#v:Any"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Policy",
          "name": "AreaSection",
          "package": "cabal-debian",
          "signature": "AreaSection Area String",
          "source": "src/Debian-Policy.html#Section",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debian Policy",
          "module": "Debian.Policy",
          "name": "AreaSection",
          "package": "cabal-debian",
          "partial": "Area Section",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Policy.html#v:AreaSection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Policy",
          "name": "Contrib",
          "package": "cabal-debian",
          "signature": "Contrib",
          "source": "src/Debian-Policy.html#Area",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debian Policy",
          "module": "Debian.Policy",
          "name": "Contrib",
          "package": "cabal-debian",
          "partial": "Contrib",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Policy.html#v:Contrib"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Policy",
          "name": "Extra",
          "package": "cabal-debian",
          "signature": "Extra",
          "source": "src/Debian-Policy.html#PackagePriority",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debian Policy",
          "module": "Debian.Policy",
          "name": "Extra",
          "package": "cabal-debian",
          "partial": "Extra",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Policy.html#v:Extra"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Policy",
          "name": "Important",
          "package": "cabal-debian",
          "signature": "Important",
          "source": "src/Debian-Policy.html#PackagePriority",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debian Policy",
          "module": "Debian.Policy",
          "name": "Important",
          "package": "cabal-debian",
          "partial": "Important",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Policy.html#v:Important"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Policy",
          "name": "Main",
          "package": "cabal-debian",
          "signature": "Main",
          "source": "src/Debian-Policy.html#Area",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debian Policy",
          "module": "Debian.Policy",
          "name": "Main",
          "package": "cabal-debian",
          "partial": "Main",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Policy.html#v:Main"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Policy",
          "name": "MainSection",
          "package": "cabal-debian",
          "signature": "MainSection String",
          "source": "src/Debian-Policy.html#Section",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debian Policy",
          "module": "Debian.Policy",
          "name": "MainSection",
          "package": "cabal-debian",
          "partial": "Main Section",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Policy.html#v:MainSection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe list of suitable architectures\n\u003c/p\u003e",
          "module": "Debian.Policy",
          "name": "Names",
          "package": "cabal-debian",
          "signature": "Names [String]",
          "source": "src/Debian-Policy.html#PackageArchitectures",
          "type": "function"
        },
        "index": {
          "description": "The list of suitable architectures",
          "hierarchy": "Debian Policy",
          "module": "Debian.Policy",
          "name": "Names",
          "normalized": "Names[String]",
          "package": "cabal-debian",
          "partial": "Names",
          "signature": "Names[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Policy.html#v:Names"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Policy",
          "name": "Native3",
          "package": "cabal-debian",
          "signature": "Native3",
          "source": "src/Debian-Policy.html#SourceFormat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debian Policy",
          "module": "Debian.Policy",
          "name": "Native3",
          "package": "cabal-debian",
          "partial": "Native",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Policy.html#v:Native3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Policy",
          "name": "NonFree",
          "package": "cabal-debian",
          "signature": "NonFree",
          "source": "src/Debian-Policy.html#Area",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debian Policy",
          "module": "Debian.Policy",
          "name": "NonFree",
          "package": "cabal-debian",
          "partial": "Non Free",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Policy.html#v:NonFree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Policy",
          "name": "Optional",
          "package": "cabal-debian",
          "signature": "Optional",
          "source": "src/Debian-Policy.html#PackagePriority",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debian Policy",
          "module": "Debian.Policy",
          "name": "Optional",
          "package": "cabal-debian",
          "partial": "Optional",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Policy.html#v:Optional"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Policy",
          "name": "Quilt3",
          "package": "cabal-debian",
          "signature": "Quilt3",
          "source": "src/Debian-Policy.html#SourceFormat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debian Policy",
          "module": "Debian.Policy",
          "name": "Quilt3",
          "package": "cabal-debian",
          "partial": "Quilt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Policy.html#v:Quilt3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Policy",
          "name": "Required",
          "package": "cabal-debian",
          "signature": "Required",
          "source": "src/Debian-Policy.html#PackagePriority",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debian Policy",
          "module": "Debian.Policy",
          "name": "Required",
          "package": "cabal-debian",
          "partial": "Required",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Policy.html#v:Required"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Policy",
          "name": "Standard",
          "package": "cabal-debian",
          "signature": "Standard",
          "source": "src/Debian-Policy.html#PackagePriority",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debian Policy",
          "module": "Debian.Policy",
          "name": "Standard",
          "package": "cabal-debian",
          "partial": "Standard",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Policy.html#v:Standard"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Policy",
          "name": "StandardsVersion",
          "package": "cabal-debian",
          "signature": "StandardsVersion Int Int Int (Maybe Int)",
          "source": "src/Debian-Policy.html#StandardsVersion",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debian Policy",
          "module": "Debian.Policy",
          "name": "StandardsVersion",
          "package": "cabal-debian",
          "partial": "Standards Version",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Policy.html#v:StandardsVersion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Policy",
          "name": "accessLogBaseName",
          "package": "cabal-debian",
          "signature": "String",
          "source": "src/Debian-Policy.html#accessLogBaseName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debian Policy",
          "module": "Debian.Policy",
          "name": "accessLogBaseName",
          "package": "cabal-debian",
          "partial": "Log Base Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Policy.html#v:accessLogBaseName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Policy",
          "name": "apacheAccessLog",
          "package": "cabal-debian",
          "signature": "BinPkgName -\u003e String",
          "source": "src/Debian-Policy.html#apacheAccessLog",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debian Policy",
          "module": "Debian.Policy",
          "name": "apacheAccessLog",
          "normalized": "BinPkgName-\u003eString",
          "package": "cabal-debian",
          "partial": "Access Log",
          "signature": "BinPkgName-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Policy.html#v:apacheAccessLog"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Policy",
          "name": "apacheErrorLog",
          "package": "cabal-debian",
          "signature": "BinPkgName -\u003e String",
          "source": "src/Debian-Policy.html#apacheErrorLog",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debian Policy",
          "module": "Debian.Policy",
          "name": "apacheErrorLog",
          "normalized": "BinPkgName-\u003eString",
          "package": "cabal-debian",
          "partial": "Error Log",
          "signature": "BinPkgName-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Policy.html#v:apacheErrorLog"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Policy",
          "name": "apacheLogDirectory",
          "package": "cabal-debian",
          "signature": "BinPkgName -\u003e String",
          "source": "src/Debian-Policy.html#apacheLogDirectory",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debian Policy",
          "module": "Debian.Policy",
          "name": "apacheLogDirectory",
          "normalized": "BinPkgName-\u003eString",
          "package": "cabal-debian",
          "partial": "Log Directory",
          "signature": "BinPkgName-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Policy.html#v:apacheLogDirectory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Policy",
          "name": "appLogBaseName",
          "package": "cabal-debian",
          "signature": "String",
          "source": "src/Debian-Policy.html#appLogBaseName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debian Policy",
          "module": "Debian.Policy",
          "name": "appLogBaseName",
          "package": "cabal-debian",
          "partial": "Log Base Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Policy.html#v:appLogBaseName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Policy",
          "name": "databaseDirectory",
          "package": "cabal-debian",
          "signature": "BinPkgName -\u003e String",
          "source": "src/Debian-Policy.html#databaseDirectory",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debian Policy",
          "module": "Debian.Policy",
          "name": "databaseDirectory",
          "normalized": "BinPkgName-\u003eString",
          "package": "cabal-debian",
          "partial": "Directory",
          "signature": "BinPkgName-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Policy.html#v:databaseDirectory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Policy",
          "name": "debianPackageVersion",
          "package": "cabal-debian",
          "signature": "String -\u003e IO (Maybe DebianVersion)",
          "source": "src/Debian-Policy.html#debianPackageVersion",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debian Policy",
          "module": "Debian.Policy",
          "name": "debianPackageVersion",
          "normalized": "String-\u003eIO(Maybe DebianVersion)",
          "package": "cabal-debian",
          "partial": "Package Version",
          "signature": "String-\u003eIO(Maybe DebianVersion)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Policy.html#v:debianPackageVersion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Policy",
          "name": "errorLogBaseName",
          "package": "cabal-debian",
          "signature": "String",
          "source": "src/Debian-Policy.html#errorLogBaseName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debian Policy",
          "module": "Debian.Policy",
          "name": "errorLogBaseName",
          "package": "cabal-debian",
          "partial": "Log Base Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Policy.html#v:errorLogBaseName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe version number of the installed debhelper package is the\n highest acceptable value for compat in a debian/control file.  If\n the package doesn't explicitly set an (acceptable) compat value we\n can use the value returned by this function, assuming debhelper is\n installed.\n\u003c/p\u003e",
          "module": "Debian.Policy",
          "name": "getDebhelperCompatLevel",
          "package": "cabal-debian",
          "signature": "IO (Maybe Int)",
          "source": "src/Debian-Policy.html#getDebhelperCompatLevel",
          "type": "function"
        },
        "index": {
          "description": "The version number of the installed debhelper package is the highest acceptable value for compat in debian control file If the package doesn explicitly set an acceptable compat value we can use the value returned by this function assuming debhelper is installed",
          "hierarchy": "Debian Policy",
          "module": "Debian.Policy",
          "name": "getDebhelperCompatLevel",
          "package": "cabal-debian",
          "partial": "Debhelper Compat Level",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Policy.html#v:getDebhelperCompatLevel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Policy",
          "name": "getDebianMaintainer",
          "package": "cabal-debian",
          "signature": "IO (Maybe NameAddr)",
          "source": "src/Debian-Policy.html#getDebianMaintainer",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debian Policy",
          "module": "Debian.Policy",
          "name": "getDebianMaintainer",
          "package": "cabal-debian",
          "partial": "Debian Maintainer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Policy.html#v:getDebianMaintainer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAssumes debian-policy is installed\n\u003c/p\u003e",
          "module": "Debian.Policy",
          "name": "getDebianStandardsVersion",
          "package": "cabal-debian",
          "signature": "IO (Maybe StandardsVersion)",
          "source": "src/Debian-Policy.html#getDebianStandardsVersion",
          "type": "function"
        },
        "index": {
          "description": "Assumes debian-policy is installed",
          "hierarchy": "Debian Policy",
          "module": "Debian.Policy",
          "name": "getDebianStandardsVersion",
          "package": "cabal-debian",
          "partial": "Debian Standards Version",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Policy.html#v:getDebianStandardsVersion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Policy",
          "name": "haskellMaintainer",
          "package": "cabal-debian",
          "signature": "NameAddr",
          "source": "src/Debian-Policy.html#haskellMaintainer",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debian Policy",
          "module": "Debian.Policy",
          "name": "haskellMaintainer",
          "package": "cabal-debian",
          "partial": "Maintainer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Policy.html#v:haskellMaintainer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a string containing a single NameAddr value.\n\u003c/p\u003e",
          "module": "Debian.Policy",
          "name": "parseMaintainer",
          "package": "cabal-debian",
          "signature": "String -\u003e Either String NameAddr",
          "source": "src/Debian-Policy.html#parseMaintainer",
          "type": "function"
        },
        "index": {
          "description": "Parse string containing single NameAddr value",
          "hierarchy": "Debian Policy",
          "module": "Debian.Policy",
          "name": "parseMaintainer",
          "normalized": "String-\u003eEither String NameAddr",
          "package": "cabal-debian",
          "partial": "Maintainer",
          "signature": "String-\u003eEither String NameAddr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Policy.html#v:parseMaintainer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Policy",
          "name": "parsePackageArchitectures",
          "package": "cabal-debian",
          "signature": "String -\u003e PackageArchitectures",
          "source": "src/Debian-Policy.html#parsePackageArchitectures",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debian Policy",
          "module": "Debian.Policy",
          "name": "parsePackageArchitectures",
          "normalized": "String-\u003ePackageArchitectures",
          "package": "cabal-debian",
          "partial": "Package Architectures",
          "signature": "String-\u003ePackageArchitectures",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Policy.html#v:parsePackageArchitectures"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Policy",
          "name": "parseStandardsVersion",
          "package": "cabal-debian",
          "signature": "String -\u003e StandardsVersion",
          "source": "src/Debian-Policy.html#parseStandardsVersion",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debian Policy",
          "module": "Debian.Policy",
          "name": "parseStandardsVersion",
          "normalized": "String-\u003eStandardsVersion",
          "package": "cabal-debian",
          "partial": "Standards Version",
          "signature": "String-\u003eStandardsVersion",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Policy.html#v:parseStandardsVersion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTurn the uploaders field of a cabal package into a list of\n RFC2822 NameAddr values.\n\u003c/p\u003e",
          "module": "Debian.Policy",
          "name": "parseUploaders",
          "package": "cabal-debian",
          "signature": "String -\u003e Either String [NameAddr]",
          "source": "src/Debian-Policy.html#parseUploaders",
          "type": "function"
        },
        "index": {
          "description": "Turn the uploaders field of cabal package into list of RFC2822 NameAddr values",
          "hierarchy": "Debian Policy",
          "module": "Debian.Policy",
          "name": "parseUploaders",
          "normalized": "String-\u003eEither String[NameAddr]",
          "package": "cabal-debian",
          "partial": "Uploaders",
          "signature": "String-\u003eEither String[NameAddr]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Policy.html#v:parseUploaders"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Policy",
          "name": "readPriority",
          "package": "cabal-debian",
          "signature": "String -\u003e PackagePriority",
          "source": "src/Debian-Policy.html#readPriority",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debian Policy",
          "module": "Debian.Policy",
          "name": "readPriority",
          "normalized": "String-\u003ePackagePriority",
          "package": "cabal-debian",
          "partial": "Priority",
          "signature": "String-\u003ePackagePriority",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Policy.html#v:readPriority"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Policy",
          "name": "readSection",
          "package": "cabal-debian",
          "signature": "String -\u003e Section",
          "source": "src/Debian-Policy.html#readSection",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debian Policy",
          "module": "Debian.Policy",
          "name": "readSection",
          "normalized": "String-\u003eSection",
          "package": "cabal-debian",
          "partial": "Section",
          "signature": "String-\u003eSection",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Policy.html#v:readSection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Policy",
          "name": "readSourceFormat",
          "package": "cabal-debian",
          "signature": "Text -\u003e Either Text SourceFormat",
          "source": "src/Debian-Policy.html#readSourceFormat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debian Policy",
          "module": "Debian.Policy",
          "name": "readSourceFormat",
          "normalized": "Text-\u003eEither Text SourceFormat",
          "package": "cabal-debian",
          "partial": "Source Format",
          "signature": "Text-\u003eEither Text SourceFormat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Policy.html#v:readSourceFormat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Policy",
          "name": "serverAccessLog",
          "package": "cabal-debian",
          "signature": "BinPkgName -\u003e String",
          "source": "src/Debian-Policy.html#serverAccessLog",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debian Policy",
          "module": "Debian.Policy",
          "name": "serverAccessLog",
          "normalized": "BinPkgName-\u003eString",
          "package": "cabal-debian",
          "partial": "Access Log",
          "signature": "BinPkgName-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Policy.html#v:serverAccessLog"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Policy",
          "name": "serverAppLog",
          "package": "cabal-debian",
          "signature": "BinPkgName -\u003e String",
          "source": "src/Debian-Policy.html#serverAppLog",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debian Policy",
          "module": "Debian.Policy",
          "name": "serverAppLog",
          "normalized": "BinPkgName-\u003eString",
          "package": "cabal-debian",
          "partial": "App Log",
          "signature": "BinPkgName-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Policy.html#v:serverAppLog"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debian.Policy",
          "name": "serverLogDirectory",
          "package": "cabal-debian",
          "signature": "BinPkgName -\u003e String",
          "source": "src/Debian-Policy.html#serverLogDirectory",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debian Policy",
          "module": "Debian.Policy",
          "name": "serverLogDirectory",
          "normalized": "BinPkgName-\u003eString",
          "package": "cabal-debian",
          "partial": "Log Directory",
          "signature": "BinPkgName-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Debian-Policy.html#v:serverLogDirectory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Distribution.Version.Invert",
          "name": "Invert",
          "package": "cabal-debian",
          "source": "src/Distribution-Version-Invert.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Distribution Version Invert",
          "module": "Distribution.Version.Invert",
          "name": "Invert",
          "package": "cabal-debian",
          "partial": "Invert",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Distribution-Version-Invert.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Distribution.Version.Invert",
          "name": "invertVersionIntervals",
          "package": "cabal-debian",
          "signature": "[(LowerBound, UpperBound)] -\u003e [(LowerBound, UpperBound)]",
          "source": "src/Distribution-Version-Invert.html#invertVersionIntervals",
          "type": "function"
        },
        "index": {
          "hierarchy": "Distribution Version Invert",
          "module": "Distribution.Version.Invert",
          "name": "invertVersionIntervals",
          "normalized": "[(LowerBound,UpperBound)]-\u003e[(LowerBound,UpperBound)]",
          "package": "cabal-debian",
          "partial": "Version Intervals",
          "signature": "[(LowerBound,UpperBound)]-\u003e[(LowerBound,UpperBound)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Distribution-Version-Invert.html#v:invertVersionIntervals"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis function belongs in Cabal, see http:\u003cem/\u003ehackage.haskell.org\u003cem\u003etrac\u003c/em\u003ehackage\u003cem\u003eticket\u003c/em\u003e935.\n\u003c/p\u003e",
          "module": "Distribution.Version.Invert",
          "name": "invertVersionRange",
          "package": "cabal-debian",
          "signature": "VersionRange -\u003e VersionRange",
          "source": "src/Distribution-Version-Invert.html#invertVersionRange",
          "type": "function"
        },
        "index": {
          "description": "This function belongs in Cabal see http hackage.haskell.org trac hackage ticket",
          "hierarchy": "Distribution Version Invert",
          "module": "Distribution.Version.Invert",
          "name": "invertVersionRange",
          "normalized": "VersionRange-\u003eVersionRange",
          "package": "cabal-debian",
          "partial": "Version Range",
          "signature": "VersionRange-\u003eVersionRange",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-debian/docs/Distribution-Version-Invert.html#v:invertVersionRange"
      }
    }
  ]
]