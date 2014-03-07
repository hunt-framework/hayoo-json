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
        "word": "archlinux"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Distribution.ArchLinux.CabalTranslation",
          "name": "CabalTranslation",
          "package": "archlinux",
          "source": "src/Distribution-ArchLinux-CabalTranslation.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Distribution ArchLinux CabalTranslation",
          "module": "Distribution.ArchLinux.CabalTranslation",
          "name": "CabalTranslation",
          "package": "archlinux",
          "partial": "Cabal Translation",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/archlinux/docs/Distribution-ArchLinux-CabalTranslation.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTranslate a generic cabal file into a PKGBUILD (using default\n   values for pkgname and pkgrel).\n\u003c/p\u003e",
          "module": "Distribution.ArchLinux.CabalTranslation",
          "name": "cabal2pkg",
          "package": "archlinux",
          "signature": "PackageDescription -\u003e SystemProvides -\u003e (AnnotatedPkgBuild, Maybe String)",
          "source": "src/Distribution-ArchLinux-CabalTranslation.html#cabal2pkg",
          "type": "function"
        },
        "index": {
          "description": "Translate generic cabal file into PKGBUILD using default values for pkgname and pkgrel",
          "hierarchy": "Distribution ArchLinux CabalTranslation",
          "module": "Distribution.ArchLinux.CabalTranslation",
          "name": "cabal2pkg",
          "normalized": "PackageDescription-\u003eSystemProvides-\u003e(AnnotatedPkgBuild,Maybe String)",
          "package": "archlinux",
          "signature": "PackageDescription-\u003eSystemProvides-\u003e(AnnotatedPkgBuild,Maybe String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/archlinux/docs/Distribution-ArchLinux-CabalTranslation.html#v:cabal2pkg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTranslate a generic cabal file into a PKGBUILD, using the specified\n   ArchLinux package name and package release.\n\u003c/p\u003e",
          "module": "Distribution.ArchLinux.CabalTranslation",
          "name": "cabal2pkg'",
          "package": "archlinux",
          "signature": "PackageDescription -\u003e String -\u003e Int -\u003e SystemProvides -\u003e (AnnotatedPkgBuild, Maybe String)",
          "source": "src/Distribution-ArchLinux-CabalTranslation.html#cabal2pkg%27",
          "type": "function"
        },
        "index": {
          "description": "Translate generic cabal file into PKGBUILD using the specified ArchLinux package name and package release",
          "hierarchy": "Distribution ArchLinux CabalTranslation",
          "module": "Distribution.ArchLinux.CabalTranslation",
          "name": "cabal2pkg'",
          "normalized": "PackageDescription-\u003eString-\u003eInt-\u003eSystemProvides-\u003e(AnnotatedPkgBuild,Maybe String)",
          "package": "archlinux",
          "signature": "PackageDescription-\u003eString-\u003eInt-\u003eSystemProvides-\u003e(AnnotatedPkgBuild,Maybe String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/archlinux/docs/Distribution-ArchLinux-CabalTranslation.html#v:cabal2pkg-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Distribution.ArchLinux.CabalTranslation",
          "name": "install_hook_name",
          "package": "archlinux",
          "signature": "String -\u003e String",
          "source": "src/Distribution-ArchLinux-CabalTranslation.html#install_hook_name",
          "type": "function"
        },
        "index": {
          "hierarchy": "Distribution ArchLinux CabalTranslation",
          "module": "Distribution.ArchLinux.CabalTranslation",
          "name": "install_hook_name",
          "normalized": "String-\u003eString",
          "package": "archlinux",
          "signature": "String-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/archlinux/docs/Distribution-ArchLinux-CabalTranslation.html#v:install_hook_name"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLook for problems in the PKGBUILD\n\u003c/p\u003e",
          "module": "Distribution.ArchLinux.CabalTranslation",
          "name": "oldCabal2Arch",
          "package": "archlinux",
          "signature": "AnnotatedPkgBuild -\u003e Bool",
          "source": "src/Distribution-ArchLinux-CabalTranslation.html#oldCabal2Arch",
          "type": "function"
        },
        "index": {
          "description": "Look for problems in the PKGBUILD",
          "hierarchy": "Distribution ArchLinux CabalTranslation",
          "module": "Distribution.ArchLinux.CabalTranslation",
          "name": "oldCabal2Arch",
          "normalized": "AnnotatedPkgBuild-\u003eBool",
          "package": "archlinux",
          "partial": "Cabal Arch",
          "signature": "AnnotatedPkgBuild-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/archlinux/docs/Distribution-ArchLinux-CabalTranslation.html#v:oldCabal2Arch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConfigure package for system\n\u003c/p\u003e",
          "module": "Distribution.ArchLinux.CabalTranslation",
          "name": "preprocessCabal",
          "package": "archlinux",
          "signature": "GenericPackageDescription -\u003e SystemProvides -\u003e Maybe PackageDescription",
          "source": "src/Distribution-ArchLinux-CabalTranslation.html#preprocessCabal",
          "type": "function"
        },
        "index": {
          "description": "Configure package for system",
          "hierarchy": "Distribution ArchLinux CabalTranslation",
          "module": "Distribution.ArchLinux.CabalTranslation",
          "name": "preprocessCabal",
          "normalized": "GenericPackageDescription-\u003eSystemProvides-\u003eMaybe PackageDescription",
          "package": "archlinux",
          "partial": "Cabal",
          "signature": "GenericPackageDescription-\u003eSystemProvides-\u003eMaybe PackageDescription",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/archlinux/docs/Distribution-ArchLinux-CabalTranslation.html#v:preprocessCabal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Distribution.ArchLinux.HackageTranslation",
          "name": "HackageTranslation",
          "package": "archlinux",
          "source": "src/Distribution-ArchLinux-HackageTranslation.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Distribution ArchLinux HackageTranslation",
          "module": "Distribution.ArchLinux.HackageTranslation",
          "name": "HackageTranslation",
          "package": "archlinux",
          "partial": "Hackage Translation",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/archlinux/docs/Distribution-ArchLinux-HackageTranslation.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the latest versions\n\u003c/p\u003e",
          "module": "Distribution.ArchLinux.HackageTranslation",
          "name": "getLatestVersions",
          "package": "archlinux",
          "signature": "[GenericPackageDescription] -\u003e Map PackageName Version",
          "source": "src/Distribution-ArchLinux-HackageTranslation.html#getLatestVersions",
          "type": "function"
        },
        "index": {
          "description": "Returns the latest versions",
          "hierarchy": "Distribution ArchLinux HackageTranslation",
          "module": "Distribution.ArchLinux.HackageTranslation",
          "name": "getLatestVersions",
          "normalized": "[GenericPackageDescription]-\u003eMap PackageName Version",
          "package": "archlinux",
          "partial": "Latest Versions",
          "signature": "[GenericPackageDescription]-\u003eMap PackageName Version",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/archlinux/docs/Distribution-ArchLinux-HackageTranslation.html#v:getLatestVersions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck for inconsistencies in version requirements\n returns a list of pairs (package, conflicting dep).\n\u003c/p\u003e",
          "module": "Distribution.ArchLinux.HackageTranslation",
          "name": "getVersionConflicts",
          "package": "archlinux",
          "signature": "[GenericPackageDescription] -\u003e SystemProvides -\u003e [(PackageDescription, Dependency)]",
          "source": "src/Distribution-ArchLinux-HackageTranslation.html#getVersionConflicts",
          "type": "function"
        },
        "index": {
          "description": "Check for inconsistencies in version requirements returns list of pairs package conflicting dep",
          "hierarchy": "Distribution ArchLinux HackageTranslation",
          "module": "Distribution.ArchLinux.HackageTranslation",
          "name": "getVersionConflicts",
          "normalized": "[GenericPackageDescription]-\u003eSystemProvides-\u003e[(PackageDescription,Dependency)]",
          "package": "archlinux",
          "partial": "Version Conflicts",
          "signature": "[GenericPackageDescription]-\u003eSystemProvides-\u003e[(PackageDescription,Dependency)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/archlinux/docs/Distribution-ArchLinux-HackageTranslation.html#v:getVersionConflicts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Distribution.ArchLinux.PkgBuild",
          "name": "PkgBuild",
          "package": "archlinux",
          "source": "src/Distribution-ArchLinux-PkgBuild.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Distribution ArchLinux PkgBuild",
          "module": "Distribution.ArchLinux.PkgBuild",
          "name": "PkgBuild",
          "package": "archlinux",
          "partial": "Pkg Build",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/archlinux/docs/Distribution-ArchLinux-PkgBuild.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA PKGBUILD data structure with additional metadata\n\u003c/p\u003e",
          "module": "Distribution.ArchLinux.PkgBuild",
          "name": "AnnotatedPkgBuild",
          "package": "archlinux",
          "source": "src/Distribution-ArchLinux-PkgBuild.html#AnnotatedPkgBuild",
          "type": "data"
        },
        "index": {
          "description": "PKGBUILD data structure with additional metadata",
          "hierarchy": "Distribution ArchLinux PkgBuild",
          "module": "Distribution.ArchLinux.PkgBuild",
          "name": "AnnotatedPkgBuild",
          "package": "archlinux",
          "partial": "Annotated Pkg Build",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/archlinux/docs/Distribution-ArchLinux-PkgBuild.html#t:AnnotatedPkgBuild"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Distribution.ArchLinux.PkgBuild",
          "name": "ArchDep",
          "package": "archlinux",
          "source": "src/Distribution-ArchLinux-PkgBuild.html#ArchDep",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Distribution ArchLinux PkgBuild",
          "module": "Distribution.ArchLinux.PkgBuild",
          "name": "ArchDep",
          "package": "archlinux",
          "partial": "Arch Dep",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/archlinux/docs/Distribution-ArchLinux-PkgBuild.html#t:ArchDep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Distribution.ArchLinux.PkgBuild",
          "name": "ArchList",
          "package": "archlinux",
          "source": "src/Distribution-ArchLinux-PkgBuild.html#ArchList",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Distribution ArchLinux PkgBuild",
          "module": "Distribution.ArchLinux.PkgBuild",
          "name": "ArchList",
          "package": "archlinux",
          "partial": "Arch List",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/archlinux/docs/Distribution-ArchLinux-PkgBuild.html#t:ArchList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA data type to represent PKGBUILD files\n\u003c/p\u003e",
          "module": "Distribution.ArchLinux.PkgBuild",
          "name": "PkgBuild",
          "package": "archlinux",
          "source": "src/Distribution-ArchLinux-PkgBuild.html#PkgBuild",
          "type": "data"
        },
        "index": {
          "description": "data type to represent PKGBUILD files",
          "hierarchy": "Distribution ArchLinux PkgBuild",
          "module": "Distribution.ArchLinux.PkgBuild",
          "name": "PkgBuild",
          "package": "archlinux",
          "partial": "Pkg Build",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/archlinux/docs/Distribution-ArchLinux-PkgBuild.html#t:PkgBuild"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003econtents of pkgbuild file\n\u003c/p\u003e",
          "module": "Distribution.ArchLinux.PkgBuild",
          "name": "AnnotatedPkgBuild",
          "package": "archlinux",
          "signature": "AnnotatedPkgBuild",
          "source": "src/Distribution-ArchLinux-PkgBuild.html#AnnotatedPkgBuild",
          "type": "function"
        },
        "index": {
          "description": "contents of pkgbuild file",
          "hierarchy": "Distribution ArchLinux PkgBuild",
          "module": "Distribution.ArchLinux.PkgBuild",
          "name": "AnnotatedPkgBuild",
          "package": "archlinux",
          "partial": "Annotated Pkg Build",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/archlinux/docs/Distribution-ArchLinux-PkgBuild.html#v:AnnotatedPkgBuild"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Distribution.ArchLinux.PkgBuild",
          "name": "ArchDep",
          "package": "archlinux",
          "signature": "ArchDep Dependency",
          "source": "src/Distribution-ArchLinux-PkgBuild.html#ArchDep",
          "type": "function"
        },
        "index": {
          "hierarchy": "Distribution ArchLinux PkgBuild",
          "module": "Distribution.ArchLinux.PkgBuild",
          "name": "ArchDep",
          "package": "archlinux",
          "partial": "Arch Dep",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/archlinux/docs/Distribution-ArchLinux-PkgBuild.html#v:ArchDep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Distribution.ArchLinux.PkgBuild",
          "name": "ArchList",
          "package": "archlinux",
          "signature": "ArchList [a]",
          "source": "src/Distribution-ArchLinux-PkgBuild.html#ArchList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Distribution ArchLinux PkgBuild",
          "module": "Distribution.ArchLinux.PkgBuild",
          "name": "ArchList",
          "normalized": "ArchList[a]",
          "package": "archlinux",
          "partial": "Arch List",
          "signature": "ArchList[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/archlinux/docs/Distribution-ArchLinux-PkgBuild.html#v:ArchList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Distribution.ArchLinux.PkgBuild",
          "name": "PkgBuild",
          "package": "archlinux",
          "signature": "PkgBuild",
          "source": "src/Distribution-ArchLinux-PkgBuild.html#PkgBuild",
          "type": "function"
        },
        "index": {
          "hierarchy": "Distribution ArchLinux PkgBuild",
          "module": "Distribution.ArchLinux.PkgBuild",
          "name": "PkgBuild",
          "package": "archlinux",
          "partial": "Pkg Build",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/archlinux/docs/Distribution-ArchLinux-PkgBuild.html#v:PkgBuild"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefines on which architectures the given package is\n available (e.g. arch=(i686 x86_64)).\n\u003c/p\u003e",
          "module": "Distribution.ArchLinux.PkgBuild",
          "name": "arch_arch",
          "package": "archlinux",
          "signature": "ArchList ArchArch",
          "source": "src/Distribution-ArchLinux-PkgBuild.html#PkgBuild",
          "type": "function"
        },
        "index": {
          "description": "Defines on which architectures the given package is available e.g arch i686 x86",
          "hierarchy": "Distribution ArchLinux PkgBuild",
          "module": "Distribution.ArchLinux.PkgBuild",
          "name": "arch_arch",
          "package": "archlinux",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/archlinux/docs/Distribution-ArchLinux-PkgBuild.html#v:arch_arch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe build hook\n\u003c/p\u003e",
          "module": "Distribution.ArchLinux.PkgBuild",
          "name": "arch_build",
          "package": "archlinux",
          "signature": "[String]",
          "source": "src/Distribution-ArchLinux-PkgBuild.html#PkgBuild",
          "type": "function"
        },
        "index": {
          "description": "The build hook",
          "hierarchy": "Distribution ArchLinux PkgBuild",
          "module": "Distribution.ArchLinux.PkgBuild",
          "name": "arch_build",
          "normalized": "[String]",
          "package": "archlinux",
          "signature": "[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/archlinux/docs/Distribution-ArchLinux-PkgBuild.html#v:arch_build"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn array of packages that this package depends on to run. Packages\n in this list should be surrounded with single quotes and contain at\n least the package name. Entries can also include a version\n requirement of the form name\u003ca/\u003eversion, where \u003ca/\u003e is one of five\n comparisons: \u003e= (greater than or equal to), \u003c= (less than or equal\n to), = (equal to), \u003e (greater than), or \u003c (less than).\n\u003c/p\u003e",
          "module": "Distribution.ArchLinux.PkgBuild",
          "name": "arch_depends",
          "package": "archlinux",
          "signature": "ArchList ArchDep",
          "source": "src/Distribution-ArchLinux-PkgBuild.html#PkgBuild",
          "type": "function"
        },
        "index": {
          "description": "An array of packages that this package depends on to run Packages in this list should be surrounded with single quotes and contain at least the package name Entries can also include version requirement of the form name version where is one of five comparisons greater than or equal to less than or equal to equal to greater than or less than",
          "hierarchy": "Distribution ArchLinux PkgBuild",
          "module": "Distribution.ArchLinux.PkgBuild",
          "name": "arch_depends",
          "package": "archlinux",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/archlinux/docs/Distribution-ArchLinux-PkgBuild.html#v:arch_depends"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecifies a special install script that is to be included in the package. This\n file should reside in the same directory as the PKGBUILD, and will be copied\n into the package by makepkg. It does not need to be included in the source\n array (e.g.  install=pkgname.install).\n\u003c/p\u003e",
          "module": "Distribution.ArchLinux.PkgBuild",
          "name": "arch_install",
          "package": "archlinux",
          "signature": "Maybe String",
          "source": "src/Distribution-ArchLinux-PkgBuild.html#PkgBuild",
          "type": "function"
        },
        "index": {
          "description": "Specifies special install script that is to be included in the package This file should reside in the same directory as the PKGBUILD and will be copied into the package by makepkg It does not need to be included in the source array e.g install pkgname.install",
          "hierarchy": "Distribution ArchLinux PkgBuild",
          "module": "Distribution.ArchLinux.PkgBuild",
          "name": "arch_install",
          "package": "archlinux",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/archlinux/docs/Distribution-ArchLinux-PkgBuild.html#v:arch_install"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis field specifies the license(s) that apply to the package.\n Commonly-used licenses are found in \u003cem\u003eusr\u003c/em\u003eshare\u003cem\u003elicenses\u003c/em\u003ecommon. If\n you see the packages license there, simply reference it in the\n license field (e.g.  license=(GPL)). If the package provides a\n license not found in \u003cem\u003eusr\u003c/em\u003eshare\u003cem\u003elicenses\u003c/em\u003ecommon, then you should\n include the license in the package itself and set\n license=(custom) or license=(custom:LicenseName). The license\n should be placed in $pkgdir\u003cem\u003eusr\u003c/em\u003eshare\u003cem\u003elicenses\u003c/em\u003e$pkgname when\n building the package. If multiple licenses are applicable for a\n package, list all of them: license=(GPL FDL).\n\u003c/p\u003e",
          "module": "Distribution.ArchLinux.PkgBuild",
          "name": "arch_license",
          "package": "archlinux",
          "signature": "ArchList License",
          "source": "src/Distribution-ArchLinux-PkgBuild.html#PkgBuild",
          "type": "function"
        },
        "index": {
          "description": "This field specifies the license that apply to the package Commonly-used licenses are found in usr share licenses common If you see the packages license there simply reference it in the license field e.g license GPL If the package provides license not found in usr share licenses common then you should include the license in the package itself and set license custom or license custom LicenseName The license should be placed in pkgdir usr share licenses pkgname when building the package If multiple licenses are applicable for package list all of them license GPL FDL",
          "hierarchy": "Distribution ArchLinux PkgBuild",
          "module": "Distribution.ArchLinux.PkgBuild",
          "name": "arch_license",
          "package": "archlinux",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/archlinux/docs/Distribution-ArchLinux-PkgBuild.html#v:arch_license"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn array of packages that this package depends on to build, but are\n not needed at runtime. Packages in this list follow the same format\n as depends.\n\u003c/p\u003e",
          "module": "Distribution.ArchLinux.PkgBuild",
          "name": "arch_makedepends",
          "package": "archlinux",
          "signature": "ArchList ArchDep",
          "source": "src/Distribution-ArchLinux-PkgBuild.html#PkgBuild",
          "type": "function"
        },
        "index": {
          "description": "An array of packages that this package depends on to build but are not needed at runtime Packages in this list follow the same format as depends",
          "hierarchy": "Distribution ArchLinux PkgBuild",
          "module": "Distribution.ArchLinux.PkgBuild",
          "name": "arch_makedepends",
          "package": "archlinux",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/archlinux/docs/Distribution-ArchLinux-PkgBuild.html#v:arch_makedepends"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis array contains an MD5 hash for every source file specified in\n the source array (in the same order). makepkg will use this to\n verify source file integrity during subsequent builds. To easily\n generate md5sums, run makepkg -g \u003e\u003e PKGBUILD. If desired, move\n the md5sums line to an appropriate location.  NOTE: makepkg\n supports multiple integrity algorithms and their corresponding\n arrays (i.e. sha1sums for the SHA1 algorithm); however, official\n packages use only md5sums for the time being.\n\u003c/p\u003e",
          "module": "Distribution.ArchLinux.PkgBuild",
          "name": "arch_md5sum",
          "package": "archlinux",
          "signature": "ArchList String",
          "source": "src/Distribution-ArchLinux-PkgBuild.html#PkgBuild",
          "type": "function"
        },
        "index": {
          "description": "This array contains an MD5 hash for every source file specified in the source array in the same order makepkg will use this to verify source file integrity during subsequent builds To easily generate md5sums run makepkg PKGBUILD If desired move the md5sums line to an appropriate location NOTE makepkg supports multiple integrity algorithms and their corresponding arrays i.e sha1sums for the SHA1 algorithm however official packages use only md5sums for the time being",
          "hierarchy": "Distribution ArchLinux PkgBuild",
          "module": "Distribution.ArchLinux.PkgBuild",
          "name": "arch_md5sum",
          "package": "archlinux",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/archlinux/docs/Distribution-ArchLinux-PkgBuild.html#v:arch_md5sum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis array allows you to override some of makepkgs default behavior when\n building packages. To set an option, just include the option name in the\n options array. To reverse the default behavior, place an ! at the front of\n the option. Only specify the options you specifically want to override, the\n rest will be taken from makepkg.conf(5).  NOTE: force is a special option only\n used in a PKGBUILD(5), do not use it unless you know what you are doing.\n\u003c/p\u003e",
          "module": "Distribution.ArchLinux.PkgBuild",
          "name": "arch_options",
          "package": "archlinux",
          "signature": "ArchList ArchOptions",
          "source": "src/Distribution-ArchLinux-PkgBuild.html#PkgBuild",
          "type": "function"
        },
        "index": {
          "description": "This array allows you to override some of makepkgs default behavior when building packages To set an option just include the option name in the options array To reverse the default behavior place an at the front of the option Only specify the options you specifically want to override the rest will be taken from makepkg.conf NOTE force is special option only used in PKGBUILD do not use it unless you know what you are doing",
          "hierarchy": "Distribution ArchLinux PkgBuild",
          "module": "Distribution.ArchLinux.PkgBuild",
          "name": "arch_options",
          "package": "archlinux",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/archlinux/docs/Distribution-ArchLinux-PkgBuild.html#v:arch_options"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe packaging hook\n\u003c/p\u003e",
          "module": "Distribution.ArchLinux.PkgBuild",
          "name": "arch_package",
          "package": "archlinux",
          "signature": "[String]",
          "source": "src/Distribution-ArchLinux-PkgBuild.html#PkgBuild",
          "type": "function"
        },
        "index": {
          "description": "The packaging hook",
          "hierarchy": "Distribution ArchLinux PkgBuild",
          "module": "Distribution.ArchLinux.PkgBuild",
          "name": "arch_package",
          "normalized": "[String]",
          "package": "archlinux",
          "signature": "[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/archlinux/docs/Distribution-ArchLinux-PkgBuild.html#v:arch_package"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis should be a brief description of the package and its\n functionality. Try to keep the description to one line of text.\n\u003c/p\u003e",
          "module": "Distribution.ArchLinux.PkgBuild",
          "name": "arch_pkgdesc",
          "package": "archlinux",
          "signature": "String",
          "source": "src/Distribution-ArchLinux-PkgBuild.html#PkgBuild",
          "type": "function"
        },
        "index": {
          "description": "This should be brief description of the package and its functionality Try to keep the description to one line of text",
          "hierarchy": "Distribution ArchLinux PkgBuild",
          "module": "Distribution.ArchLinux.PkgBuild",
          "name": "arch_pkgdesc",
          "package": "archlinux",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/archlinux/docs/Distribution-ArchLinux-PkgBuild.html#v:arch_pkgdesc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe name of the package. This has be a unix-friendly name\n as it will be used in the package filename.\n\u003c/p\u003e",
          "module": "Distribution.ArchLinux.PkgBuild",
          "name": "arch_pkgname",
          "package": "archlinux",
          "signature": "String",
          "source": "src/Distribution-ArchLinux-PkgBuild.html#PkgBuild",
          "type": "function"
        },
        "index": {
          "description": "The name of the package This has be unix-friendly name as it will be used in the package filename",
          "hierarchy": "Distribution ArchLinux PkgBuild",
          "module": "Distribution.ArchLinux.PkgBuild",
          "name": "arch_pkgname",
          "package": "archlinux",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/archlinux/docs/Distribution-ArchLinux-PkgBuild.html#v:arch_pkgname"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is the release number specific to the Arch Linux\n release. This allows package maintainers to make updates to\n the packages configure flags, for example. A pkgrel of 1\n is typically used for each upstream software release and is\n incremented for intermediate PKGBUILD updates.\n\u003c/p\u003e",
          "module": "Distribution.ArchLinux.PkgBuild",
          "name": "arch_pkgrel",
          "package": "archlinux",
          "signature": "Int",
          "source": "src/Distribution-ArchLinux-PkgBuild.html#PkgBuild",
          "type": "function"
        },
        "index": {
          "description": "This is the release number specific to the Arch Linux release This allows package maintainers to make updates to the packages configure flags for example pkgrel of is typically used for each upstream software release and is incremented for intermediate PKGBUILD updates",
          "hierarchy": "Distribution ArchLinux PkgBuild",
          "module": "Distribution.ArchLinux.PkgBuild",
          "name": "arch_pkgrel",
          "package": "archlinux",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/archlinux/docs/Distribution-ArchLinux-PkgBuild.html#v:arch_pkgrel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe version of the software as released from the authorii\n  (e.g. 2.7.1).\n\u003c/p\u003e",
          "module": "Distribution.ArchLinux.PkgBuild",
          "name": "arch_pkgver",
          "package": "archlinux",
          "signature": "Version",
          "source": "src/Distribution-ArchLinux-PkgBuild.html#PkgBuild",
          "type": "function"
        },
        "index": {
          "description": "The version of the software as released from the authorii e.g",
          "hierarchy": "Distribution ArchLinux PkgBuild",
          "module": "Distribution.ArchLinux.PkgBuild",
          "name": "arch_pkgver",
          "package": "archlinux",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/archlinux/docs/Distribution-ArchLinux-PkgBuild.html#v:arch_pkgver"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn array of source files required to build the package. Source\n files must either reside in the same directory as the PKGBUILD\n file, or be a fully-qualified URL that makepkg will use to download\n the file. In order to make the PKGBUILD as useful as possible, use\n the $pkgname and $pkgver variables if possible when specifying the\n download location. Any files that are compressed will automatically\n be extracted, unless found in the noextract array listed below.\n\u003c/p\u003e",
          "module": "Distribution.ArchLinux.PkgBuild",
          "name": "arch_source",
          "package": "archlinux",
          "signature": "ArchList String",
          "source": "src/Distribution-ArchLinux-PkgBuild.html#PkgBuild",
          "type": "function"
        },
        "index": {
          "description": "An array of source files required to build the package Source files must either reside in the same directory as the PKGBUILD file or be fully-qualified URL that makepkg will use to download the file In order to make the PKGBUILD as useful as possible use the pkgname and pkgver variables if possible when specifying the download location Any files that are compressed will automatically be extracted unless found in the noextract array listed below",
          "hierarchy": "Distribution ArchLinux PkgBuild",
          "module": "Distribution.ArchLinux.PkgBuild",
          "name": "arch_source",
          "package": "archlinux",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/archlinux/docs/Distribution-ArchLinux-PkgBuild.html#v:arch_source"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis field contains a URL that is associated with the software\n being packaged. This is typically the projects website.\n\u003c/p\u003e",
          "module": "Distribution.ArchLinux.PkgBuild",
          "name": "arch_url",
          "package": "archlinux",
          "signature": "String",
          "source": "src/Distribution-ArchLinux-PkgBuild.html#PkgBuild",
          "type": "function"
        },
        "index": {
          "description": "This field contains URL that is associated with the software being packaged This is typically the projects website",
          "hierarchy": "Distribution ArchLinux PkgBuild",
          "module": "Distribution.ArchLinux.PkgBuild",
          "name": "arch_url",
          "package": "archlinux",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/archlinux/docs/Distribution-ArchLinux-PkgBuild.html#v:arch_url"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Distribution.ArchLinux.PkgBuild",
          "name": "decodePackage",
          "package": "archlinux",
          "signature": "String -\u003e ResultP AnnotatedPkgBuild",
          "source": "src/Distribution-ArchLinux-PkgBuild.html#decodePackage",
          "type": "function"
        },
        "index": {
          "hierarchy": "Distribution ArchLinux PkgBuild",
          "module": "Distribution.ArchLinux.PkgBuild",
          "name": "decodePackage",
          "normalized": "String-\u003eResultP AnnotatedPkgBuild",
          "package": "archlinux",
          "partial": "Package",
          "signature": "String-\u003eResultP AnnotatedPkgBuild",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/archlinux/docs/Distribution-ArchLinux-PkgBuild.html#v:decodePackage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEmpty state structure\n\u003c/p\u003e",
          "module": "Distribution.ArchLinux.PkgBuild",
          "name": "emptyPkg",
          "package": "archlinux",
          "signature": "AnnotatedPkgBuild",
          "source": "src/Distribution-ArchLinux-PkgBuild.html#emptyPkg",
          "type": "function"
        },
        "index": {
          "description": "Empty state structure",
          "hierarchy": "Distribution ArchLinux PkgBuild",
          "module": "Distribution.ArchLinux.PkgBuild",
          "name": "emptyPkg",
          "package": "archlinux",
          "partial": "Pkg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/archlinux/docs/Distribution-ArchLinux-PkgBuild.html#v:emptyPkg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn empty PKGBUILD\n\u003c/p\u003e",
          "module": "Distribution.ArchLinux.PkgBuild",
          "name": "emptyPkgBuild",
          "package": "archlinux",
          "signature": "PkgBuild",
          "source": "src/Distribution-ArchLinux-PkgBuild.html#emptyPkgBuild",
          "type": "function"
        },
        "index": {
          "description": "An empty PKGBUILD",
          "hierarchy": "Distribution ArchLinux PkgBuild",
          "module": "Distribution.ArchLinux.PkgBuild",
          "name": "emptyPkgBuild",
          "package": "archlinux",
          "partial": "Pkg Build",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/archlinux/docs/Distribution-ArchLinux-PkgBuild.html#v:emptyPkgBuild"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003epackage name on Hackage\n\u003c/p\u003e",
          "module": "Distribution.ArchLinux.PkgBuild",
          "name": "hkgName",
          "package": "archlinux",
          "signature": "String",
          "source": "src/Distribution-ArchLinux-PkgBuild.html#AnnotatedPkgBuild",
          "type": "function"
        },
        "index": {
          "description": "package name on Hackage",
          "hierarchy": "Distribution ArchLinux PkgBuild",
          "module": "Distribution.ArchLinux.PkgBuild",
          "name": "hkgName",
          "package": "archlinux",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/archlinux/docs/Distribution-ArchLinux-PkgBuild.html#v:hkgName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Distribution.ArchLinux.PkgBuild",
          "name": "pkg2doc",
          "package": "archlinux",
          "signature": "String -\u003e AnnotatedPkgBuild -\u003e Doc",
          "source": "src/Distribution-ArchLinux-PkgBuild.html#pkg2doc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Distribution ArchLinux PkgBuild",
          "module": "Distribution.ArchLinux.PkgBuild",
          "name": "pkg2doc",
          "normalized": "String-\u003eAnnotatedPkgBuild-\u003eDoc",
          "package": "archlinux",
          "signature": "String-\u003eAnnotatedPkgBuild-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/archlinux/docs/Distribution-ArchLinux-PkgBuild.html#v:pkg2doc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Distribution.ArchLinux.PkgBuild",
          "name": "pkgBody",
          "package": "archlinux",
          "signature": "PkgBuild",
          "source": "src/Distribution-ArchLinux-PkgBuild.html#AnnotatedPkgBuild",
          "type": "function"
        },
        "index": {
          "hierarchy": "Distribution ArchLinux PkgBuild",
          "module": "Distribution.ArchLinux.PkgBuild",
          "name": "pkgBody",
          "package": "archlinux",
          "partial": "Body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/archlinux/docs/Distribution-ArchLinux-PkgBuild.html#v:pkgBody"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eversion of cabal2arch used, if any\n\u003c/p\u003e",
          "module": "Distribution.ArchLinux.PkgBuild",
          "name": "pkgBuiltWith",
          "package": "archlinux",
          "signature": "Maybe Version",
          "source": "src/Distribution-ArchLinux-PkgBuild.html#AnnotatedPkgBuild",
          "type": "function"
        },
        "index": {
          "description": "version of cabal2arch used if any",
          "hierarchy": "Distribution ArchLinux PkgBuild",
          "module": "Distribution.ArchLinux.PkgBuild",
          "name": "pkgBuiltWith",
          "package": "archlinux",
          "partial": "Built With",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/archlinux/docs/Distribution-ArchLinux-PkgBuild.html#v:pkgBuiltWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eheader strings\n\u003c/p\u003e",
          "module": "Distribution.ArchLinux.PkgBuild",
          "name": "pkgHeader",
          "package": "archlinux",
          "signature": "String",
          "source": "src/Distribution-ArchLinux-PkgBuild.html#AnnotatedPkgBuild",
          "type": "function"
        },
        "index": {
          "description": "header strings",
          "hierarchy": "Distribution ArchLinux PkgBuild",
          "module": "Distribution.ArchLinux.PkgBuild",
          "name": "pkgHeader",
          "package": "archlinux",
          "partial": "Header",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/archlinux/docs/Distribution-ArchLinux-PkgBuild.html#v:pkgHeader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract just the package name from ArchDep\n\u003c/p\u003e",
          "module": "Distribution.ArchLinux.PkgBuild",
          "name": "pkgnameFromArchDep",
          "package": "archlinux",
          "signature": "ArchDep -\u003e String",
          "source": "src/Distribution-ArchLinux-PkgBuild.html#pkgnameFromArchDep",
          "type": "function"
        },
        "index": {
          "description": "Extract just the package name from ArchDep",
          "hierarchy": "Distribution ArchLinux PkgBuild",
          "module": "Distribution.ArchLinux.PkgBuild",
          "name": "pkgnameFromArchDep",
          "normalized": "ArchDep-\u003eString",
          "package": "archlinux",
          "partial": "From Arch Dep",
          "signature": "ArchDep-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/archlinux/docs/Distribution-ArchLinux-PkgBuild.html#v:pkgnameFromArchDep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module makes a database out a directory ${repo}\n containing subdirs ${repo}/${package} corresponding to packages.\n It can output rebuild lists in reverse dependency order.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Distribution.ArchLinux.SrcRepo",
          "name": "SrcRepo",
          "package": "archlinux",
          "source": "src/Distribution-ArchLinux-SrcRepo.html",
          "type": "module"
        },
        "index": {
          "description": "This module makes database out directory repo containing subdirs repo package corresponding to packages It can output rebuild lists in reverse dependency order",
          "hierarchy": "Distribution ArchLinux SrcRepo",
          "module": "Distribution.ArchLinux.SrcRepo",
          "name": "SrcRepo",
          "package": "archlinux",
          "partial": "Src Repo",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/archlinux/docs/Distribution-ArchLinux-SrcRepo.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eData type for source repositories\n\u003c/p\u003e",
          "module": "Distribution.ArchLinux.SrcRepo",
          "name": "SrcRepo",
          "package": "archlinux",
          "source": "src/Distribution-ArchLinux-SrcRepo.html#SrcRepo",
          "type": "data"
        },
        "index": {
          "description": "Data type for source repositories",
          "hierarchy": "Distribution ArchLinux SrcRepo",
          "module": "Distribution.ArchLinux.SrcRepo",
          "name": "SrcRepo",
          "package": "archlinux",
          "partial": "Src Repo",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/archlinux/docs/Distribution-ArchLinux-SrcRepo.html#t:SrcRepo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Distribution.ArchLinux.SrcRepo",
          "name": "SrcRepo",
          "package": "archlinux",
          "signature": "SrcRepo",
          "source": "src/Distribution-ArchLinux-SrcRepo.html#SrcRepo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Distribution ArchLinux SrcRepo",
          "module": "Distribution.ArchLinux.SrcRepo",
          "name": "SrcRepo",
          "package": "archlinux",
          "partial": "Src Repo",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/archlinux/docs/Distribution-ArchLinux-SrcRepo.html#v:SrcRepo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Distribution.ArchLinux.SrcRepo",
          "name": "archProvidedPkgs",
          "package": "archlinux",
          "signature": "[String]",
          "source": "src/Distribution-ArchLinux-SrcRepo.html#archProvidedPkgs",
          "type": "function"
        },
        "index": {
          "hierarchy": "Distribution ArchLinux SrcRepo",
          "module": "Distribution.ArchLinux.SrcRepo",
          "name": "archProvidedPkgs",
          "normalized": "[String]",
          "package": "archlinux",
          "partial": "Provided Pkgs",
          "signature": "[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/archlinux/docs/Distribution-ArchLinux-SrcRepo.html#v:archProvidedPkgs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDumps a topologically sorted list of packages\n starting with an optionally given key\n\u003c/p\u003e",
          "module": "Distribution.ArchLinux.SrcRepo",
          "name": "dumpContentsTopo",
          "package": "archlinux",
          "signature": "SrcRepo -\u003e [String]",
          "source": "src/Distribution-ArchLinux-SrcRepo.html#dumpContentsTopo",
          "type": "function"
        },
        "index": {
          "description": "Dumps topologically sorted list of packages starting with an optionally given key",
          "hierarchy": "Distribution ArchLinux SrcRepo",
          "module": "Distribution.ArchLinux.SrcRepo",
          "name": "dumpContentsTopo",
          "normalized": "SrcRepo-\u003e[String]",
          "package": "archlinux",
          "partial": "Contents Topo",
          "signature": "SrcRepo-\u003e[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/archlinux/docs/Distribution-ArchLinux-SrcRepo.html#v:dumpContentsTopo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOutput the recursive dependencies of a package in topological order\n\u003c/p\u003e",
          "module": "Distribution.ArchLinux.SrcRepo",
          "name": "getDependencies",
          "package": "archlinux",
          "signature": "String -\u003e SrcRepo -\u003e [String]",
          "source": "src/Distribution-ArchLinux-SrcRepo.html#getDependencies",
          "type": "function"
        },
        "index": {
          "description": "Output the recursive dependencies of package in topological order",
          "hierarchy": "Distribution ArchLinux SrcRepo",
          "module": "Distribution.ArchLinux.SrcRepo",
          "name": "getDependencies",
          "normalized": "String-\u003eSrcRepo-\u003e[String]",
          "package": "archlinux",
          "partial": "Dependencies",
          "signature": "String-\u003eSrcRepo-\u003e[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/archlinux/docs/Distribution-ArchLinux-SrcRepo.html#v:getDependencies"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract the subrepository of recursive dependencies of a package\n\u003c/p\u003e",
          "module": "Distribution.ArchLinux.SrcRepo",
          "name": "getDependencyRepo",
          "package": "archlinux",
          "signature": "String -\u003e SrcRepo -\u003e SrcRepo",
          "source": "src/Distribution-ArchLinux-SrcRepo.html#getDependencyRepo",
          "type": "function"
        },
        "index": {
          "description": "Extract the subrepository of recursive dependencies of package",
          "hierarchy": "Distribution ArchLinux SrcRepo",
          "module": "Distribution.ArchLinux.SrcRepo",
          "name": "getDependencyRepo",
          "normalized": "String-\u003eSrcRepo-\u003eSrcRepo",
          "package": "archlinux",
          "partial": "Dependency Repo",
          "signature": "String-\u003eSrcRepo-\u003eSrcRepo",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/archlinux/docs/Distribution-ArchLinux-SrcRepo.html#v:getDependencyRepo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReads a directory into a package\n\u003c/p\u003e",
          "module": "Distribution.ArchLinux.SrcRepo",
          "name": "getPkgFromDir",
          "package": "archlinux",
          "signature": "FilePath -\u003e IO PkgBuild",
          "source": "src/Distribution-ArchLinux-SrcRepo.html#getPkgFromDir",
          "type": "function"
        },
        "index": {
          "description": "Reads directory into package",
          "hierarchy": "Distribution ArchLinux SrcRepo",
          "module": "Distribution.ArchLinux.SrcRepo",
          "name": "getPkgFromDir",
          "normalized": "FilePath-\u003eIO PkgBuild",
          "package": "archlinux",
          "partial": "Pkg From Dir",
          "signature": "FilePath-\u003eIO PkgBuild",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/archlinux/docs/Distribution-ArchLinux-SrcRepo.html#v:getPkgFromDir"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReads a specified path into a SrcRepo structure\n\u003c/p\u003e",
          "module": "Distribution.ArchLinux.SrcRepo",
          "name": "getRepoFromDir",
          "package": "archlinux",
          "signature": "FilePath -\u003e IO (Maybe SrcRepo)",
          "source": "src/Distribution-ArchLinux-SrcRepo.html#getRepoFromDir",
          "type": "function"
        },
        "index": {
          "description": "Reads specified path into SrcRepo structure",
          "hierarchy": "Distribution ArchLinux SrcRepo",
          "module": "Distribution.ArchLinux.SrcRepo",
          "name": "getRepoFromDir",
          "normalized": "FilePath-\u003eIO(Maybe SrcRepo)",
          "package": "archlinux",
          "partial": "Repo From Dir",
          "signature": "FilePath-\u003eIO(Maybe SrcRepo)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/archlinux/docs/Distribution-ArchLinux-SrcRepo.html#v:getRepoFromDir"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOutput reverse dependencies of a list of packages in topological order\n\u003c/p\u003e",
          "module": "Distribution.ArchLinux.SrcRepo",
          "name": "getReverseDependencies",
          "package": "archlinux",
          "signature": "[String] -\u003e SrcRepo -\u003e [String]",
          "source": "src/Distribution-ArchLinux-SrcRepo.html#getReverseDependencies",
          "type": "function"
        },
        "index": {
          "description": "Output reverse dependencies of list of packages in topological order",
          "hierarchy": "Distribution ArchLinux SrcRepo",
          "module": "Distribution.ArchLinux.SrcRepo",
          "name": "getReverseDependencies",
          "normalized": "[String]-\u003eSrcRepo-\u003e[String]",
          "package": "archlinux",
          "partial": "Reverse Dependencies",
          "signature": "[String]-\u003eSrcRepo-\u003e[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/archlinux/docs/Distribution-ArchLinux-SrcRepo.html#v:getReverseDependencies"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract reverse dependencies of a list of packages\n\u003c/p\u003e",
          "module": "Distribution.ArchLinux.SrcRepo",
          "name": "getReverseDependencyRepo",
          "package": "archlinux",
          "signature": "[String] -\u003e SrcRepo -\u003e SrcRepo",
          "source": "src/Distribution-ArchLinux-SrcRepo.html#getReverseDependencyRepo",
          "type": "function"
        },
        "index": {
          "description": "Extract reverse dependencies of list of packages",
          "hierarchy": "Distribution ArchLinux SrcRepo",
          "module": "Distribution.ArchLinux.SrcRepo",
          "name": "getReverseDependencyRepo",
          "normalized": "[String]-\u003eSrcRepo-\u003eSrcRepo",
          "package": "archlinux",
          "partial": "Reverse Dependency Repo",
          "signature": "[String]-\u003eSrcRepo-\u003eSrcRepo",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/archlinux/docs/Distribution-ArchLinux-SrcRepo.html#v:getReverseDependencyRepo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Distribution.ArchLinux.SrcRepo",
          "name": "insertpkg",
          "package": "archlinux",
          "signature": "Map String PkgBuild -\u003e FilePath -\u003e IO (Map String PkgBuild)",
          "source": "src/Distribution-ArchLinux-SrcRepo.html#insertpkg",
          "type": "function"
        },
        "index": {
          "hierarchy": "Distribution ArchLinux SrcRepo",
          "module": "Distribution.ArchLinux.SrcRepo",
          "name": "insertpkg",
          "normalized": "Map String PkgBuild-\u003eFilePath-\u003eIO(Map String PkgBuild)",
          "package": "archlinux",
          "signature": "Map String PkgBuild-\u003eFilePath-\u003eIO(Map String PkgBuild)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/archlinux/docs/Distribution-ArchLinux-SrcRepo.html#v:insertpkg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind version inconsistencies in a repository\n\u003c/p\u003e",
          "module": "Distribution.ArchLinux.SrcRepo",
          "name": "isConflicting",
          "package": "archlinux",
          "signature": "SrcRepo -\u003e Bool",
          "source": "src/Distribution-ArchLinux-SrcRepo.html#isConflicting",
          "type": "function"
        },
        "index": {
          "description": "Find version inconsistencies in repository",
          "hierarchy": "Distribution ArchLinux SrcRepo",
          "module": "Distribution.ArchLinux.SrcRepo",
          "name": "isConflicting",
          "normalized": "SrcRepo-\u003eBool",
          "package": "archlinux",
          "partial": "Conflicting",
          "signature": "SrcRepo-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/archlinux/docs/Distribution-ArchLinux-SrcRepo.html#v:isConflicting"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck package dependencies against the repo\n\u003c/p\u003e",
          "module": "Distribution.ArchLinux.SrcRepo",
          "name": "isConflictingWith",
          "package": "archlinux",
          "signature": "PkgBuild -\u003e SrcRepo -\u003e Bool",
          "source": "src/Distribution-ArchLinux-SrcRepo.html#isConflictingWith",
          "type": "function"
        },
        "index": {
          "description": "Check package dependencies against the repo",
          "hierarchy": "Distribution ArchLinux SrcRepo",
          "module": "Distribution.ArchLinux.SrcRepo",
          "name": "isConflictingWith",
          "normalized": "PkgBuild-\u003eSrcRepo-\u003eBool",
          "package": "archlinux",
          "partial": "Conflicting With",
          "signature": "PkgBuild-\u003eSrcRepo-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/archlinux/docs/Distribution-ArchLinux-SrcRepo.html#v:isConflictingWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHelper function\n\u003c/p\u003e",
          "module": "Distribution.ArchLinux.SrcRepo",
          "name": "isExternalDep",
          "package": "archlinux",
          "signature": "String -\u003e SrcRepo -\u003e Bool",
          "source": "src/Distribution-ArchLinux-SrcRepo.html#isExternalDep",
          "type": "function"
        },
        "index": {
          "description": "Helper function",
          "hierarchy": "Distribution ArchLinux SrcRepo",
          "module": "Distribution.ArchLinux.SrcRepo",
          "name": "isExternalDep",
          "normalized": "String-\u003eSrcRepo-\u003eBool",
          "package": "archlinux",
          "partial": "External Dep",
          "signature": "String-\u003eSrcRepo-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/archlinux/docs/Distribution-ArchLinux-SrcRepo.html#v:isExternalDep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003echeck for existence of the right version is the repository\n (return Nothing if package not found)\n\u003c/p\u003e",
          "module": "Distribution.ArchLinux.SrcRepo",
          "name": "isSatisfiedBy",
          "package": "archlinux",
          "signature": "ArchDep -\u003e SrcRepo -\u003e Maybe Bool",
          "source": "src/Distribution-ArchLinux-SrcRepo.html#isSatisfiedBy",
          "type": "function"
        },
        "index": {
          "description": "check for existence of the right version is the repository return Nothing if package not found",
          "hierarchy": "Distribution ArchLinux SrcRepo",
          "module": "Distribution.ArchLinux.SrcRepo",
          "name": "isSatisfiedBy",
          "normalized": "ArchDep-\u003eSrcRepo-\u003eMaybe Bool",
          "package": "archlinux",
          "partial": "Satisfied By",
          "signature": "ArchDep-\u003eSrcRepo-\u003eMaybe Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/archlinux/docs/Distribution-ArchLinux-SrcRepo.html#v:isSatisfiedBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Distribution.ArchLinux.SrcRepo",
          "name": "listVersionConflicts",
          "package": "archlinux",
          "signature": "SrcRepo -\u003e [String]",
          "source": "src/Distribution-ArchLinux-SrcRepo.html#listVersionConflicts",
          "type": "function"
        },
        "index": {
          "hierarchy": "Distribution ArchLinux SrcRepo",
          "module": "Distribution.ArchLinux.SrcRepo",
          "name": "listVersionConflicts",
          "normalized": "SrcRepo-\u003e[String]",
          "package": "archlinux",
          "partial": "Version Conflicts",
          "signature": "SrcRepo-\u003e[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/archlinux/docs/Distribution-ArchLinux-SrcRepo.html#v:listVersionConflicts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Distribution.ArchLinux.SrcRepo",
          "name": "repo_contents",
          "package": "archlinux",
          "signature": "Map String PkgBuild",
          "source": "src/Distribution-ArchLinux-SrcRepo.html#SrcRepo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Distribution ArchLinux SrcRepo",
          "module": "Distribution.ArchLinux.SrcRepo",
          "name": "repo_contents",
          "package": "archlinux",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/archlinux/docs/Distribution-ArchLinux-SrcRepo.html#v:repo_contents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe path to the repository\n\u003c/p\u003e",
          "module": "Distribution.ArchLinux.SrcRepo",
          "name": "repo_path",
          "package": "archlinux",
          "signature": "FilePath",
          "source": "src/Distribution-ArchLinux-SrcRepo.html#SrcRepo",
          "type": "function"
        },
        "index": {
          "description": "The path to the repository",
          "hierarchy": "Distribution ArchLinux SrcRepo",
          "module": "Distribution.ArchLinux.SrcRepo",
          "name": "repo_path",
          "package": "archlinux",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/archlinux/docs/Distribution-ArchLinux-SrcRepo.html#v:repo_path"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEnumerate all build-time dependencies for a package\n\u003c/p\u003e",
          "module": "Distribution.ArchLinux.SrcRepo",
          "name": "strDepends",
          "package": "archlinux",
          "signature": "PkgBuild -\u003e [String]",
          "source": "src/Distribution-ArchLinux-SrcRepo.html#strDepends",
          "type": "function"
        },
        "index": {
          "description": "Enumerate all build-time dependencies for package",
          "hierarchy": "Distribution ArchLinux SrcRepo",
          "module": "Distribution.ArchLinux.SrcRepo",
          "name": "strDepends",
          "normalized": "PkgBuild-\u003e[String]",
          "package": "archlinux",
          "partial": "Depends",
          "signature": "PkgBuild-\u003e[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/archlinux/docs/Distribution-ArchLinux-SrcRepo.html#v:strDepends"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Distribution.ArchLinux.SrcRepo",
          "name": "trueDepends",
          "package": "archlinux",
          "signature": "PkgBuild -\u003e SrcRepo -\u003e [String]",
          "source": "src/Distribution-ArchLinux-SrcRepo.html#trueDepends",
          "type": "function"
        },
        "index": {
          "hierarchy": "Distribution ArchLinux SrcRepo",
          "module": "Distribution.ArchLinux.SrcRepo",
          "name": "trueDepends",
          "normalized": "PkgBuild-\u003eSrcRepo-\u003e[String]",
          "package": "archlinux",
          "partial": "Depends",
          "signature": "PkgBuild-\u003eSrcRepo-\u003e[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/archlinux/docs/Distribution-ArchLinux-SrcRepo.html#v:trueDepends"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Distribution.ArchLinux.SystemProvides",
          "name": "SystemProvides",
          "package": "archlinux",
          "source": "src/Distribution-ArchLinux-SystemProvides.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Distribution ArchLinux SystemProvides",
          "module": "Distribution.ArchLinux.SystemProvides",
          "name": "SystemProvides",
          "package": "archlinux",
          "partial": "System Provides",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/archlinux/docs/Distribution-ArchLinux-SystemProvides.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Distribution.ArchLinux.SystemProvides",
          "name": "SystemProvides",
          "package": "archlinux",
          "source": "src/Distribution-ArchLinux-SystemProvides.html#SystemProvides",
          "type": "data"
        },
        "index": {
          "hierarchy": "Distribution ArchLinux SystemProvides",
          "module": "Distribution.ArchLinux.SystemProvides",
          "name": "SystemProvides",
          "package": "archlinux",
          "partial": "System Provides",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/archlinux/docs/Distribution-ArchLinux-SystemProvides.html#t:SystemProvides"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Distribution.ArchLinux.SystemProvides",
          "name": "SystemProvides",
          "package": "archlinux",
          "signature": "SystemProvides",
          "source": "src/Distribution-ArchLinux-SystemProvides.html#SystemProvides",
          "type": "function"
        },
        "index": {
          "hierarchy": "Distribution ArchLinux SystemProvides",
          "module": "Distribution.ArchLinux.SystemProvides",
          "name": "SystemProvides",
          "package": "archlinux",
          "partial": "System Provides",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/archlinux/docs/Distribution-ArchLinux-SystemProvides.html#v:SystemProvides"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA list of Dependencies which are automatically satified\n when GHC is installed.\n\u003c/p\u003e",
          "module": "Distribution.ArchLinux.SystemProvides",
          "name": "corePackages",
          "package": "archlinux",
          "signature": "[Dependency]",
          "source": "src/Distribution-ArchLinux-SystemProvides.html#SystemProvides",
          "type": "function"
        },
        "index": {
          "description": "list of Dependencies which are automatically satified when GHC is installed",
          "hierarchy": "Distribution ArchLinux SystemProvides",
          "module": "Distribution.ArchLinux.SystemProvides",
          "name": "corePackages",
          "normalized": "[Dependency]",
          "package": "archlinux",
          "partial": "Packages",
          "signature": "[Dependency]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/archlinux/docs/Distribution-ArchLinux-SystemProvides.html#v:corePackages"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Distribution.ArchLinux.SystemProvides",
          "name": "emptySystemProvides",
          "package": "archlinux",
          "signature": "SystemProvides",
          "source": "src/Distribution-ArchLinux-SystemProvides.html#emptySystemProvides",
          "type": "function"
        },
        "index": {
          "hierarchy": "Distribution ArchLinux SystemProvides",
          "module": "Distribution.ArchLinux.SystemProvides",
          "name": "emptySystemProvides",
          "package": "archlinux",
          "partial": "System Provides",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/archlinux/docs/Distribution-ArchLinux-SystemProvides.html#v:emptySystemProvides"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Distribution.ArchLinux.SystemProvides",
          "name": "parseSystemProvides",
          "package": "archlinux",
          "signature": "String -\u003e String -\u003e String -\u003e SystemProvides",
          "source": "src/Distribution-ArchLinux-SystemProvides.html#parseSystemProvides",
          "type": "function"
        },
        "index": {
          "hierarchy": "Distribution ArchLinux SystemProvides",
          "module": "Distribution.ArchLinux.SystemProvides",
          "name": "parseSystemProvides",
          "normalized": "String-\u003eString-\u003eString-\u003eSystemProvides",
          "package": "archlinux",
          "partial": "System Provides",
          "signature": "String-\u003eString-\u003eString-\u003eSystemProvides",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/archlinux/docs/Distribution-ArchLinux-SystemProvides.html#v:parseSystemProvides"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA list of packages to preferably use (e.g. Haskell Platform)\n\u003c/p\u003e",
          "module": "Distribution.ArchLinux.SystemProvides",
          "name": "platformPackages",
          "package": "archlinux",
          "signature": "[Dependency]",
          "source": "src/Distribution-ArchLinux-SystemProvides.html#SystemProvides",
          "type": "function"
        },
        "index": {
          "description": "list of packages to preferably use e.g Haskell Platform",
          "hierarchy": "Distribution ArchLinux SystemProvides",
          "module": "Distribution.ArchLinux.SystemProvides",
          "name": "platformPackages",
          "normalized": "[Dependency]",
          "package": "archlinux",
          "partial": "Packages",
          "signature": "[Dependency]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/archlinux/docs/Distribution-ArchLinux-SystemProvides.html#v:platformPackages"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA hash-map where keys are library names and values are\n names of the corresponding ArchLinux package.\n\u003c/p\u003e",
          "module": "Distribution.ArchLinux.SystemProvides",
          "name": "translationTable",
          "package": "archlinux",
          "signature": "Map String String",
          "source": "src/Distribution-ArchLinux-SystemProvides.html#SystemProvides",
          "type": "function"
        },
        "index": {
          "description": "hash-map where keys are library names and values are names of the corresponding ArchLinux package",
          "hierarchy": "Distribution ArchLinux SystemProvides",
          "module": "Distribution.ArchLinux.SystemProvides",
          "name": "translationTable",
          "package": "archlinux",
          "partial": "Table",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/archlinux/docs/Distribution-ArchLinux-SystemProvides.html#v:translationTable"
      }
    }
  ]
]