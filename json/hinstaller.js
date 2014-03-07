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
        "word": "hinstaller"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module allows you to include any file into a module during\n   compilation. You can then write out the file at run time.\n\u003c/p\u003e\u003cp\u003eExpected use is via the Template Haskell splicing syntax. E.g.\n\u003c/p\u003e\u003cpre\u003e\n   $(installBinariesFunc \"installMyFiles\"\n     [(\"FileOne\", \"/foo/bar/fileOne.txt\"),\n      (\"FileTwo\", \"/foo/bar/fileTwo.txt\"),\n      (\"Three\",   \"/foo/baz/thirdFile.qux\")\n     ])\n\u003c/pre\u003e\u003cp\u003eThis will cause an enumeration ADT to be defined as:\n\u003c/p\u003e\u003cpre\u003e\n   data Installer_installMyFiles =\n            Installer_installMyFiles_FileOne\n          | Installer_installMyFiles_FileTwo\n          | Installer_installMyFiles_Three\n\u003c/pre\u003e\u003cp\u003ewith instances for Enum, Eq, Ord and Show. The install for Show\n    will return the \u003ccode\u003efst\u003c/code\u003e element of the tuple in the list passed to\n    \u003ccode\u003e\u003ca\u003einstallBinariesFunc\u003c/a\u003e\u003c/code\u003e. A function called \u003ccode\u003einstallMyFiles\u003c/code\u003e will\n    also be defined of type\n    \u003ccode\u003eInstaller_installMyFiles -\u003e FilePath -\u003e IO ()\u003c/code\u003e. Calling this\n    will cause the file content to be written out to the filepath.\n    If the filepath provided is a directory, then the file will be\n    created within that directory with the same name as the leaf of\n    the path in the \u003ccode\u003esnd\u003c/code\u003e elem of the tuples passed to\n    \u003ccode\u003e\u003ca\u003einstallBinariesFunc\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNote that the files written out are not set executable so you\n    must correct file permissions yourself.\n\u003c/p\u003e\u003cp\u003eThe module works by, at compile time, reading in the files\n    specified and converting them to C files with a header. These\n    files will be stored in a directory called \u003ccode\u003ehinstaller-tmp\u003c/code\u003e under\n    the same leaf name as the original. Then, the module calls a C\n    compiler by invoking the process \u003ccode\u003ecc\u003c/code\u003e which must exist. Finally,\n    the names of the files must be passed to the linker. With GHC, use\n    \u003ccode\u003e-optl hinstaller-tmp/\u003cem\u003efile\u003c/em\u003e.o\u003c/code\u003e where \u003cem\u003efile\u003c/em\u003e is the name of the\n    file you're including. Repeat for each file.\n\u003c/p\u003e\u003cp\u003eIn order to clean up this \u003ccode\u003ehinstaller-tmp\u003c/code\u003e directory, the module\n    exports a function \u003ccode\u003e\u003ca\u003ecabalCleanHInstallerDir\u003c/a\u003e\u003c/code\u003e. To use this, modify\n    your \u003ccode\u003eSetup.hs\u003c/code\u003e along the lines of the following:\n\u003c/p\u003e\u003cpre\u003e  #!/usr/bin/env runghc\n\n  import Distribution.Simple\n  import System.Installer\n\n  main = defaultMainWithHooks myHooks\n\n  myHooks :: UserHooks\n  myHooks = defaultUserHooks { postBuild = cabalCleanHInstallerDir }\n\u003c/pre\u003e\u003cp\u003eThen, once the build is complete, the directory will be cleaned up.\n    With Cabal, use the \u003ccode\u003eld-options\u003c/code\u003e field to pass in the names of\n    compiled C files: \u003ccode\u003eld-options: hinstaller-tmp/\u003cem\u003efile\u003c/em\u003e.o\u003c/code\u003e\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.Installer",
          "name": "Installer",
          "package": "hinstaller",
          "source": "src/System-Installer.html",
          "type": "module"
        },
        "index": {
          "description": "This module allows you to include any file into module during compilation You can then write out the file at run time Expected use is via the Template Haskell splicing syntax E.g installBinariesFunc installMyFiles FileOne foo bar fileOne.txt FileTwo foo bar fileTwo.txt Three foo baz thirdFile.qux This will cause an enumeration ADT to be defined as data Installer installMyFiles Installer installMyFiles FileOne Installer installMyFiles FileTwo Installer installMyFiles Three with instances for Enum Eq Ord and Show The install for Show will return the fst element of the tuple in the list passed to installBinariesFunc function called installMyFiles will also be defined of type Installer installMyFiles FilePath IO Calling this will cause the file content to be written out to the filepath If the filepath provided is directory then the file will be created within that directory with the same name as the leaf of the path in the snd elem of the tuples passed to installBinariesFunc Note that the files written out are not set executable so you must correct file permissions yourself The module works by at compile time reading in the files specified and converting them to files with header These files will be stored in directory called hinstaller-tmp under the same leaf name as the original Then the module calls compiler by invoking the process cc which must exist Finally the names of the files must be passed to the linker With GHC use optl hinstaller-tmp file where file is the name of the file you re including Repeat for each file In order to clean up this hinstaller-tmp directory the module exports function cabalCleanHInstallerDir To use this modify your Setup.hs along the lines of the following usr bin env runghc import Distribution.Simple import System.Installer main defaultMainWithHooks myHooks myHooks UserHooks myHooks defaultUserHooks postBuild cabalCleanHInstallerDir Then once the build is complete the directory will be cleaned up With Cabal use the ld-options field to pass in the names of compiled files ld-options hinstaller-tmp file",
          "hierarchy": "System Installer",
          "module": "System.Installer",
          "name": "Installer",
          "package": "hinstaller",
          "partial": "Installer",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hinstaller/docs/System-Installer.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Installer",
          "name": "cabalCleanHInstallerDir",
          "package": "hinstaller",
          "signature": "Args -\u003e BuildFlags -\u003e PackageDescription -\u003e LocalBuildInfo -\u003e IO ExitCode",
          "source": "src/System-Installer-Foreign.html#cabalCleanHInstallerDir",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Installer",
          "module": "System.Installer",
          "name": "cabalCleanHInstallerDir",
          "normalized": "Args-\u003eBuildFlags-\u003ePackageDescription-\u003eLocalBuildInfo-\u003eIO ExitCode",
          "package": "hinstaller",
          "partial": "Clean HInstaller Dir",
          "signature": "Args-\u003eBuildFlags-\u003ePackageDescription-\u003eLocalBuildInfo-\u003eIO ExitCode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hinstaller/docs/System-Installer.html#v:cabalCleanHInstallerDir"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Installer",
          "name": "installBinariesFunc",
          "package": "hinstaller",
          "signature": "String -\u003e [(String, FilePath)] -\u003e Q [Dec]",
          "source": "src/System-Installer.html#installBinariesFunc",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Installer",
          "module": "System.Installer",
          "name": "installBinariesFunc",
          "normalized": "String-\u003e[(String,FilePath)]-\u003eQ[Dec]",
          "package": "hinstaller",
          "partial": "Binaries Func",
          "signature": "String-\u003e[(String,FilePath)]-\u003eQ[Dec]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hinstaller/docs/System-Installer.html#v:installBinariesFunc"
      }
    }
  ]
]