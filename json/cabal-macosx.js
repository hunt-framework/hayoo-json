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
        "word": "cabal-macosx"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCabal support for creating Mac OSX application bundles.\n\u003c/p\u003e\u003cp\u003eGUI applications on Mac OSX should be run as application \u003cem\u003ebundles\u003c/em\u003e;\nthese wrap an executable in a particular directory structure which can\nalso carry resources such as icons, program metadata, images, other\nbinaries, and copies of shared libraries.\n\u003c/p\u003e\u003cp\u003eThis module provides a Cabal post-build hook for creating such\napplication bundles, and controlling their contents.\n\u003c/p\u003e\u003cp\u003eFor more information about OSX application bundles, look for the\n\u003cem\u003eBundle Programming Guide\u003c/em\u003e on the \u003cem\u003eApple Developer Connection\u003c/em\u003e\nwebsite, \u003ca\u003ehttp://developer.apple.com/\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Distribution.MacOSX",
          "name": "MacOSX",
          "package": "cabal-macosx",
          "source": "src/Distribution-MacOSX.html",
          "type": "module"
        },
        "index": {
          "description": "Cabal support for creating Mac OSX application bundles GUI applications on Mac OSX should be run as application bundles these wrap an executable in particular directory structure which can also carry resources such as icons program metadata images other binaries and copies of shared libraries This module provides Cabal post-build hook for creating such application bundles and controlling their contents For more information about OSX application bundles look for the Bundle Programming Guide on the Apple Developer Connection website http developer.apple.com",
          "hierarchy": "Distribution MacOSX",
          "module": "Distribution.MacOSX",
          "name": "MacOSX",
          "package": "cabal-macosx",
          "partial": "Mac OSX",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/cabal-macosx/docs/Distribution-MacOSX.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApplication bundles may carry their own copies of shared\n libraries, which enables distribution of applications which 'just\n work, out of the box' in the absence of static linking.  For\n example, a wxHaskell app can include the wx library (and \u003cem\u003eits\u003c/em\u003e\n dependencies, recursively), meaning end users do not need to\n install wxWidgets in order to use the app.\n\u003c/p\u003e\u003cp\u003eThis data type controls this process: if dependency chasing is\n activated, then the app's executable and any \u003ccode\u003e\u003ca\u003eotherBins\u003c/a\u003e\u003c/code\u003e are\n examined for their dependencies, recursively (usually with some\n exceptions - see below), the dependencies are copied into the app\n bundle, and any references to each library are updated to point to\n the copy.\n\u003c/p\u003e\u003cp\u003e(The process is transparent to the programmer, i.e. requires no\n modification to code.  In case anyone is interested: \u003ccode\u003eotool\u003c/code\u003e is\n used to discover a binary's library dependencies; each library is\n copied to a relative sub-directory of \u003ccode\u003eContents/Frameworks/\u003c/code\u003e in\n the app bundle (e.g. \u003ccode\u003e/usr/lib/libFoo.a\u003c/code\u003e becomes\n \u003ccode\u003eContents/Frameworks/usr/lib/libFoo.a\u003c/code\u003e); finally,\n \u003ccode\u003einstall_name_tool\u003c/code\u003e is used to update dependency references to\n point to the new version.)\n\u003c/p\u003e",
          "module": "Distribution.MacOSX",
          "name": "ChaseDeps",
          "package": "cabal-macosx",
          "source": "src/Distribution-MacOSX-Common.html#ChaseDeps",
          "type": "data"
        },
        "index": {
          "description": "Application bundles may carry their own copies of shared libraries which enables distribution of applications which just work out of the box in the absence of static linking For example wxHaskell app can include the wx library and its dependencies recursively meaning end users do not need to install wxWidgets in order to use the app This data type controls this process if dependency chasing is activated then the app executable and any otherBins are examined for their dependencies recursively usually with some exceptions see below the dependencies are copied into the app bundle and any references to each library are updated to point to the copy The process is transparent to the programmer i.e requires no modification to code In case anyone is interested otool is used to discover binary library dependencies each library is copied to relative sub-directory of Contents Frameworks in the app bundle e.g usr lib libFoo.a becomes Contents Frameworks usr lib libFoo.a finally install name tool is used to update dependency references to point to the new version",
          "hierarchy": "Distribution MacOSX",
          "module": "Distribution.MacOSX",
          "name": "ChaseDeps",
          "package": "cabal-macosx",
          "partial": "Chase Deps",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cabal-macosx/docs/Distribution-MacOSX.html#t:ChaseDeps"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA list of exclusions to dependency chasing.  Any library whose\n path contains any exclusion string \u003cem\u003eas a substring\u003c/em\u003e will be\n excluded when chasing dependencies.\n\u003c/p\u003e",
          "module": "Distribution.MacOSX",
          "name": "Exclusions",
          "package": "cabal-macosx",
          "source": "src/Distribution-MacOSX-Common.html#Exclusions",
          "type": "type"
        },
        "index": {
          "description": "list of exclusions to dependency chasing Any library whose path contains any exclusion string as substring will be excluded when chasing dependencies",
          "hierarchy": "Distribution MacOSX",
          "module": "Distribution.MacOSX",
          "name": "Exclusions",
          "package": "cabal-macosx",
          "partial": "Exclusions",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/cabal-macosx/docs/Distribution-MacOSX.html#t:Exclusions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMac OSX application information.\n\u003c/p\u003e",
          "module": "Distribution.MacOSX",
          "name": "MacApp",
          "package": "cabal-macosx",
          "source": "src/Distribution-MacOSX-Common.html#MacApp",
          "type": "data"
        },
        "index": {
          "description": "Mac OSX application information",
          "hierarchy": "Distribution MacOSX",
          "module": "Distribution.MacOSX",
          "name": "MacApp",
          "package": "cabal-macosx",
          "partial": "Mac App",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cabal-macosx/docs/Distribution-MacOSX.html#t:MacApp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInclude any libraries which the executable and \u003ccode\u003e\u003ca\u003eotherBins\u003c/a\u003e\u003c/code\u003e\n depend on, excluding a user-defined set.  If you specify an\n empty exclusion list, then \u003cem\u003eall\u003c/em\u003e dependencies will be included,\n recursively, including various OSX Frameworks; \u003cem\u003ethis\u003c/em\u003e\n \u003cem\u003eprobably\u003c/em\u003e \u003cem\u003eisn't\u003c/em\u003e \u003cem\u003eever\u003c/em\u003e \u003cem\u003esensible\u003c/em\u003e.  The intended use,\n rather, is to allow extension of the default list, which can be\n accessed via \u003ccode\u003e\u003ca\u003edefaultExclusions\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Distribution.MacOSX",
          "name": "ChaseWith",
          "package": "cabal-macosx",
          "signature": "ChaseWith Exclusions",
          "source": "src/Distribution-MacOSX-Common.html#ChaseDeps",
          "type": "function"
        },
        "index": {
          "description": "Include any libraries which the executable and otherBins depend on excluding user-defined set If you specify an empty exclusion list then all dependencies will be included recursively including various OSX Frameworks this probably isn ever sensible The intended use rather is to allow extension of the default list which can be accessed via defaultExclusions",
          "hierarchy": "Distribution MacOSX",
          "module": "Distribution.MacOSX",
          "name": "ChaseWith",
          "package": "cabal-macosx",
          "partial": "Chase With",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-macosx/docs/Distribution-MacOSX.html#v:ChaseWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInclude any libraries which the executable and \u003ccode\u003e\u003ca\u003eotherBins\u003c/a\u003e\u003c/code\u003e\n depend on, excluding a default set which we would expect to be\n present on any machine running the same version of OSX on which\n the executable was built.  (n.b.: Creation of application\n bundles which work transparently across different versions of\n OSX is currently beyond the scope of this package.)\n\u003c/p\u003e",
          "module": "Distribution.MacOSX",
          "name": "ChaseWithDefaults",
          "package": "cabal-macosx",
          "signature": "ChaseWithDefaults",
          "source": "src/Distribution-MacOSX-Common.html#ChaseDeps",
          "type": "function"
        },
        "index": {
          "description": "Include any libraries which the executable and otherBins depend on excluding default set which we would expect to be present on any machine running the same version of OSX on which the executable was built n.b Creation of application bundles which work transparently across different versions of OSX is currently beyond the scope of this package",
          "hierarchy": "Distribution MacOSX",
          "module": "Distribution.MacOSX",
          "name": "ChaseWithDefaults",
          "package": "cabal-macosx",
          "partial": "Chase With Defaults",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-macosx/docs/Distribution-MacOSX.html#v:ChaseWithDefaults"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDo not include any dependencies - a sensible default if not\n distributing your app.\n\u003c/p\u003e",
          "module": "Distribution.MacOSX",
          "name": "DoNotChase",
          "package": "cabal-macosx",
          "signature": "DoNotChase",
          "source": "src/Distribution-MacOSX-Common.html#ChaseDeps",
          "type": "function"
        },
        "index": {
          "description": "Do not include any dependencies sensible default if not distributing your app",
          "hierarchy": "Distribution MacOSX",
          "module": "Distribution.MacOSX",
          "name": "DoNotChase",
          "package": "cabal-macosx",
          "partial": "Do Not Chase",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-macosx/docs/Distribution-MacOSX.html#v:DoNotChase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Distribution.MacOSX",
          "name": "MacApp",
          "package": "cabal-macosx",
          "signature": "MacApp",
          "source": "src/Distribution-MacOSX-Common.html#MacApp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Distribution MacOSX",
          "module": "Distribution.MacOSX",
          "name": "MacApp",
          "package": "cabal-macosx",
          "partial": "Mac App",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-macosx/docs/Distribution-MacOSX.html#v:MacApp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePost-build hook for OS X application bundles.  Does nothing if\n called on another O/S.\n\u003c/p\u003e",
          "module": "Distribution.MacOSX",
          "name": "appBundleBuildHook",
          "package": "cabal-macosx",
          "signature": "[MacApp]-\u003e Args-\u003e BuildFlags-\u003e PackageDescription-\u003e LocalBuildInfo-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Post-build hook for OS application bundles Does nothing if called on another",
          "hierarchy": "Distribution MacOSX",
          "module": "Distribution.MacOSX",
          "name": "appBundleBuildHook",
          "normalized": "[MacApp]-\u003eArgs-\u003eBuildFlags-\u003ePackageDescription-\u003eLocalBuildInfo-\u003eIO()",
          "package": "cabal-macosx",
          "partial": "Bundle Build Hook",
          "signature": "[MacApp]-\u003eArgs-\u003eBuildFlags-\u003ePackageDescription-\u003eLocalBuildInfo-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-macosx/docs/Distribution-MacOSX.html#v:appBundleBuildHook"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePost-install hook for OS X application bundles.  Copies the\n application bundle (assuming you are also using the appBundleBuildHook)\n to \u003ccode\u003e$prefix/Applications\u003c/code\u003e\n Does nothing if called on another O/S.\n\u003c/p\u003e",
          "module": "Distribution.MacOSX",
          "name": "appBundleInstallHook",
          "package": "cabal-macosx",
          "signature": "[MacApp]-\u003e Args-\u003e InstallFlags-\u003e PackageDescription-\u003e LocalBuildInfo-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Post-install hook for OS application bundles Copies the application bundle assuming you are also using the appBundleBuildHook to prefix Applications Does nothing if called on another",
          "hierarchy": "Distribution MacOSX",
          "module": "Distribution.MacOSX",
          "name": "appBundleInstallHook",
          "normalized": "[MacApp]-\u003eArgs-\u003eInstallFlags-\u003ePackageDescription-\u003eLocalBuildInfo-\u003eIO()",
          "package": "cabal-macosx",
          "partial": "Bundle Install Hook",
          "signature": "[MacApp]-\u003eArgs-\u003eInstallFlags-\u003ePackageDescription-\u003eLocalBuildInfo-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-macosx/docs/Distribution-MacOSX.html#v:appBundleInstallHook"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eControls inclusion of library dependencies for executable and\n \u003ccode\u003e\u003ca\u003eotherBins\u003c/a\u003e\u003c/code\u003e; see below.\n\u003c/p\u003e",
          "module": "Distribution.MacOSX",
          "name": "appDeps",
          "package": "cabal-macosx",
          "signature": "ChaseDeps",
          "source": "src/Distribution-MacOSX-Common.html#MacApp",
          "type": "function"
        },
        "index": {
          "description": "Controls inclusion of library dependencies for executable and otherBins see below",
          "hierarchy": "Distribution MacOSX",
          "module": "Distribution.MacOSX",
          "name": "appDeps",
          "package": "cabal-macosx",
          "partial": "Deps",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-macosx/docs/Distribution-MacOSX.html#v:appDeps"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePath to icon file, to be copied to \u003ccode\u003eContents/Resources/\u003c/code\u003e in\n the app bundle.  If omitted, no icon will be used.\n\u003c/p\u003e",
          "module": "Distribution.MacOSX",
          "name": "appIcon",
          "package": "cabal-macosx",
          "signature": "Maybe FilePath",
          "source": "src/Distribution-MacOSX-Common.html#MacApp",
          "type": "function"
        },
        "index": {
          "description": "Path to icon file to be copied to Contents Resources in the app bundle If omitted no icon will be used",
          "hierarchy": "Distribution MacOSX",
          "module": "Distribution.MacOSX",
          "name": "appIcon",
          "package": "cabal-macosx",
          "partial": "Icon",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-macosx/docs/Distribution-MacOSX.html#v:appIcon"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApplication name.  This should be the name of the executable\n produced by Cabal's build stage.  The app bundle produced will be\n \u003ccode\u003edist/build/\u003cem\u003eappName\u003c/em\u003e.app\u003c/code\u003e, and the executable \u003cem\u003eappName\u003c/em\u003e will\n be copied to \u003ccode\u003eContents/MacOSX/\u003c/code\u003e in the bundle.\n\u003c/p\u003e",
          "module": "Distribution.MacOSX",
          "name": "appName",
          "package": "cabal-macosx",
          "signature": "String",
          "source": "src/Distribution-MacOSX-Common.html#MacApp",
          "type": "function"
        },
        "index": {
          "description": "Application name This should be the name of the executable produced by Cabal build stage The app bundle produced will be dist build appName app and the executable appName will be copied to Contents MacOSX in the bundle",
          "hierarchy": "Distribution MacOSX",
          "module": "Distribution.MacOSX",
          "name": "appName",
          "package": "cabal-macosx",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-macosx/docs/Distribution-MacOSX.html#v:appName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePath to \u003cem\u003eplist\u003c/em\u003e file ('property-list' of application metadata),\n to be copied to \u003ccode\u003eContents/Info.plist\u003c/code\u003e in the app bundle.  If\n omitted, and if \u003ccode\u003e\u003ca\u003eappIcon\u003c/a\u003e\u003c/code\u003e is specified, a basic default plist\n will be used.\n\u003c/p\u003e",
          "module": "Distribution.MacOSX",
          "name": "appPlist",
          "package": "cabal-macosx",
          "signature": "Maybe FilePath",
          "source": "src/Distribution-MacOSX-Common.html#MacApp",
          "type": "function"
        },
        "index": {
          "description": "Path to plist file property-list of application metadata to be copied to Contents Info.plist in the app bundle If omitted and if appIcon is specified basic default plist will be used",
          "hierarchy": "Distribution MacOSX",
          "module": "Distribution.MacOSX",
          "name": "appPlist",
          "package": "cabal-macosx",
          "partial": "Plist",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-macosx/docs/Distribution-MacOSX.html#v:appPlist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefault list of exclusions; excludes OSX standard frameworks,\n libgcc, etc. - basically things which we would expect to be present\n on any functioning OSX installation.\n\u003c/p\u003e",
          "module": "Distribution.MacOSX",
          "name": "defaultExclusions",
          "package": "cabal-macosx",
          "signature": "Exclusions",
          "source": "src/Distribution-MacOSX-Common.html#defaultExclusions",
          "type": "function"
        },
        "index": {
          "description": "Default list of exclusions excludes OSX standard frameworks libgcc etc basically things which we would expect to be present on any functioning OSX installation",
          "hierarchy": "Distribution MacOSX",
          "module": "Distribution.MacOSX",
          "name": "defaultExclusions",
          "package": "cabal-macosx",
          "partial": "Exclusions",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-macosx/docs/Distribution-MacOSX.html#v:defaultExclusions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a \u003ccode\u003e\u003ca\u003eMacApp\u003c/a\u003e\u003c/code\u003e in context, make an application bundle in the\n build area. (for internal use only)\n\u003c/p\u003e",
          "module": "Distribution.MacOSX",
          "name": "makeAppBundle",
          "package": "cabal-macosx",
          "signature": "AppBuildInfo -\u003e IO ()",
          "source": "src/Distribution-MacOSX.html#makeAppBundle",
          "type": "function"
        },
        "index": {
          "description": "Given MacApp in context make an application bundle in the build area for internal use only",
          "hierarchy": "Distribution MacOSX",
          "module": "Distribution.MacOSX",
          "name": "makeAppBundle",
          "normalized": "AppBuildInfo-\u003eIO()",
          "package": "cabal-macosx",
          "partial": "App Bundle",
          "signature": "AppBuildInfo-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-macosx/docs/Distribution-MacOSX.html#v:makeAppBundle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOther binaries to bundle in the application, e.g.  other\n executables from your project, or third-party programs.  Each\n will be copied to a relative sub-directory of\n \u003ccode\u003eContents/Resources/\u003c/code\u003e in the bundle.  For example,\n \u003ccode\u003e/usr/bin/ftp\u003c/code\u003e would be copied to\n \u003ccode\u003eContents/Resources/usr/bin/ftp\u003c/code\u003e in the app.\n\u003c/p\u003e\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eresources\u003c/a\u003e\u003c/code\u003e, bundled binaries may be referred to from your\n program relative to your executable's path (which may be\n computed, e.g., using Audrey Tang's FindBin package).\n\u003c/p\u003e",
          "module": "Distribution.MacOSX",
          "name": "otherBins",
          "package": "cabal-macosx",
          "signature": "[FilePath]",
          "source": "src/Distribution-MacOSX-Common.html#MacApp",
          "type": "function"
        },
        "index": {
          "description": "Other binaries to bundle in the application e.g other executables from your project or third-party programs Each will be copied to relative sub-directory of Contents Resources in the bundle For example usr bin ftp would be copied to Contents Resources usr bin ftp in the app Like resources bundled binaries may be referred to from your program relative to your executable path which may be computed e.g using Audrey Tang FindBin package",
          "hierarchy": "Distribution MacOSX",
          "module": "Distribution.MacOSX",
          "name": "otherBins",
          "normalized": "[FilePath]",
          "package": "cabal-macosx",
          "partial": "Bins",
          "signature": "[FilePath]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-macosx/docs/Distribution-MacOSX.html#v:otherBins"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOther resources to bundle in the application, e.g. image files,\n etc.  Each will be copied to \u003ccode\u003eContents/Resources/\u003c/code\u003e, with the\n proviso that if the resource path begins with \u003ccode\u003eresources/\u003c/code\u003e, it\n will go to a \u003cem\u003erelative\u003c/em\u003e subdirectory of \u003ccode\u003eContents/Resources/\u003c/code\u003e.\n For example, \u003ccode\u003eimages/splash.png\u003c/code\u003e will be copied to\n \u003ccode\u003eContents/Resources/splash.png\u003c/code\u003e, whereas\n \u003ccode\u003eresources/images/splash.png\u003c/code\u003e will be copied to\n \u003ccode\u003eContents/Resources/resources/images/splash.png\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eBundled resources may be referred to from your program relative\n to your executable's path (which may be computed, e.g., using\n Audrey Tang's FindBin package).\n\u003c/p\u003e",
          "module": "Distribution.MacOSX",
          "name": "resources",
          "package": "cabal-macosx",
          "signature": "[FilePath]",
          "source": "src/Distribution-MacOSX-Common.html#MacApp",
          "type": "function"
        },
        "index": {
          "description": "Other resources to bundle in the application e.g image files etc Each will be copied to Contents Resources with the proviso that if the resource path begins with resources it will go to relative subdirectory of Contents Resources For example images splash.png will be copied to Contents Resources splash.png whereas resources images splash.png will be copied to Contents Resources resources images splash.png Bundled resources may be referred to from your program relative to your executable path which may be computed e.g using Audrey Tang FindBin package",
          "hierarchy": "Distribution MacOSX",
          "module": "Distribution.MacOSX",
          "name": "resources",
          "normalized": "[FilePath]",
          "package": "cabal-macosx",
          "signature": "[FilePath]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cabal-macosx/docs/Distribution-MacOSX.html#v:resources"
      }
    }
  ]
]