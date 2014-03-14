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
        "word": "precis"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Precis.Cabal.CabalPackage",
          "name": "CabalPackage",
          "package": "precis",
          "source": "src/Precis-Cabal-CabalPackage.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Precis Cabal CabalPackage",
          "module": "Precis.Cabal.CabalPackage",
          "name": "CabalPackage",
          "package": "precis",
          "partial": "Cabal Package",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-Cabal-CabalPackage.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Precis.Cabal.CabalPackage",
          "name": "extractPrecis",
          "package": "precis",
          "signature": "FilePath -\u003e IO (Either CabalFileError CabalPrecis)",
          "source": "src/Precis-Cabal-CabalPackage.html#extractPrecis",
          "type": "function"
        },
        "index": {
          "hierarchy": "Precis Cabal CabalPackage",
          "module": "Precis.Cabal.CabalPackage",
          "name": "extractPrecis",
          "normalized": "FilePath-\u003eIO(Either CabalFileError CabalPrecis)",
          "package": "precis",
          "partial": "Precis",
          "signature": "FilePath-\u003eIO(Either CabalFileError CabalPrecis)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-Cabal-CabalPackage.html#v:extractPrecis"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFile extensions that Precis can handle:\n\u003c/p\u003e\u003cpre\u003e [\"hs\", \"lhs\"]\n\u003c/pre\u003e",
          "module": "Precis.Cabal.CabalPackage",
          "name": "known_extensions",
          "package": "precis",
          "signature": "[FileExtension]",
          "source": "src/Precis-Cabal-CabalPackage.html#known_extensions",
          "type": "function"
        },
        "index": {
          "description": "File extensions that Precis can handle hs lhs",
          "hierarchy": "Precis Cabal CabalPackage",
          "module": "Precis.Cabal.CabalPackage",
          "name": "known_extensions",
          "normalized": "[FileExtension]",
          "package": "precis",
          "signature": "[FileExtension]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-Cabal-CabalPackage.html#v:known_extensions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDatatype for working with \u003cem\u003ePackages\u003c/em\u003e ...\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Precis.Cabal.Datatypes",
          "name": "Datatypes",
          "package": "precis",
          "source": "src/Precis-Cabal-Datatypes.html",
          "type": "module"
        },
        "index": {
          "description": "Datatype for working with Packages",
          "hierarchy": "Precis Cabal Datatypes",
          "module": "Precis.Cabal.Datatypes",
          "name": "Datatypes",
          "package": "precis",
          "partial": "Datatypes",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-Cabal-Datatypes.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Precis.Cabal.Datatypes",
          "name": "CabalFileError",
          "package": "precis",
          "source": "src/Precis-Cabal-Datatypes.html#CabalFileError",
          "type": "data"
        },
        "index": {
          "hierarchy": "Precis Cabal Datatypes",
          "module": "Precis.Cabal.Datatypes",
          "name": "CabalFileError",
          "package": "precis",
          "partial": "Cabal File Error",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-Cabal-Datatypes.html#t:CabalFileError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Precis.Cabal.Datatypes",
          "name": "HsSourceFile",
          "package": "precis",
          "source": "src/Precis-Cabal-Datatypes.html#HsSourceFile",
          "type": "data"
        },
        "index": {
          "hierarchy": "Precis Cabal Datatypes",
          "module": "Precis.Cabal.Datatypes",
          "name": "HsSourceFile",
          "package": "precis",
          "partial": "Hs Source File",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-Cabal-Datatypes.html#t:HsSourceFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Precis.Cabal.Datatypes",
          "name": "Package",
          "package": "precis",
          "source": "src/Precis-Cabal-Datatypes.html#Package",
          "type": "data"
        },
        "index": {
          "hierarchy": "Precis Cabal Datatypes",
          "module": "Precis.Cabal.Datatypes",
          "name": "Package",
          "package": "precis",
          "partial": "Package",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-Cabal-Datatypes.html#t:Package"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn unresolved module couldn't be found in the listed source\n directories.\n\u003c/p\u003e",
          "module": "Precis.Cabal.Datatypes",
          "name": "UnresolvedModule",
          "package": "precis",
          "source": "src/Precis-Cabal-Datatypes.html#UnresolvedModule",
          "type": "newtype"
        },
        "index": {
          "description": "An unresolved module couldn be found in the listed source directories",
          "hierarchy": "Precis Cabal Datatypes",
          "module": "Precis.Cabal.Datatypes",
          "name": "UnresolvedModule",
          "package": "precis",
          "partial": "Unresolved Module",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-Cabal-Datatypes.html#t:UnresolvedModule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Precis.Cabal.Datatypes",
          "name": "ERR_CABAL_FILE_MISSING",
          "package": "precis",
          "signature": "ERR_CABAL_FILE_MISSING FilePath",
          "source": "src/Precis-Cabal-Datatypes.html#CabalFileError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Precis Cabal Datatypes",
          "module": "Precis.Cabal.Datatypes",
          "name": "ERR_CABAL_FILE_MISSING",
          "package": "precis",
          "partial": "ERR CABAL FILE MISSING",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-Cabal-Datatypes.html#v:ERR_CABAL_FILE_MISSING"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Precis.Cabal.Datatypes",
          "name": "ERR_CABAL_FILE_PARSE",
          "package": "precis",
          "signature": "ERR_CABAL_FILE_PARSE String",
          "source": "src/Precis-Cabal-Datatypes.html#CabalFileError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Precis Cabal Datatypes",
          "module": "Precis.Cabal.Datatypes",
          "name": "ERR_CABAL_FILE_PARSE",
          "package": "precis",
          "partial": "ERR CABAL FILE PARSE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-Cabal-Datatypes.html#v:ERR_CABAL_FILE_PARSE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Precis.Cabal.Datatypes",
          "name": "HsSourceFile",
          "package": "precis",
          "signature": "HsSourceFile",
          "source": "src/Precis-Cabal-Datatypes.html#HsSourceFile",
          "type": "function"
        },
        "index": {
          "hierarchy": "Precis Cabal Datatypes",
          "module": "Precis.Cabal.Datatypes",
          "name": "HsSourceFile",
          "package": "precis",
          "partial": "Hs Source File",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-Cabal-Datatypes.html#v:HsSourceFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Precis.Cabal.Datatypes",
          "name": "Package",
          "package": "precis",
          "signature": "Package",
          "source": "src/Precis-Cabal-Datatypes.html#Package",
          "type": "function"
        },
        "index": {
          "hierarchy": "Precis Cabal Datatypes",
          "module": "Precis.Cabal.Datatypes",
          "name": "Package",
          "package": "precis",
          "partial": "Package",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-Cabal-Datatypes.html#v:Package"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Precis.Cabal.Datatypes",
          "name": "UnresolvedModule",
          "package": "precis",
          "signature": "UnresolvedModule",
          "source": "src/Precis-Cabal-Datatypes.html#UnresolvedModule",
          "type": "function"
        },
        "index": {
          "hierarchy": "Precis Cabal Datatypes",
          "module": "Precis.Cabal.Datatypes",
          "name": "UnresolvedModule",
          "package": "precis",
          "partial": "Unresolved Module",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-Cabal-Datatypes.html#v:UnresolvedModule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Precis.Cabal.Datatypes",
          "name": "cabalFileErrorMsg",
          "package": "precis",
          "signature": "CabalFileError -\u003e String",
          "source": "src/Precis-Cabal-Datatypes.html#cabalFileErrorMsg",
          "type": "function"
        },
        "index": {
          "hierarchy": "Precis Cabal Datatypes",
          "module": "Precis.Cabal.Datatypes",
          "name": "cabalFileErrorMsg",
          "normalized": "CabalFileError-\u003eString",
          "package": "precis",
          "partial": "File Error Msg",
          "signature": "CabalFileError-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-Cabal-Datatypes.html#v:cabalFileErrorMsg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Precis.Cabal.Datatypes",
          "name": "exposed_modules",
          "package": "precis",
          "signature": "[HsSourceFile]",
          "source": "src/Precis-Cabal-Datatypes.html#Package",
          "type": "function"
        },
        "index": {
          "hierarchy": "Precis Cabal Datatypes",
          "module": "Precis.Cabal.Datatypes",
          "name": "exposed_modules",
          "normalized": "[HsSourceFile]",
          "package": "precis",
          "signature": "[HsSourceFile]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-Cabal-Datatypes.html#v:exposed_modules"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Precis.Cabal.Datatypes",
          "name": "full_path_to",
          "package": "precis",
          "signature": "FilePath",
          "source": "src/Precis-Cabal-Datatypes.html#HsSourceFile",
          "type": "function"
        },
        "index": {
          "hierarchy": "Precis Cabal Datatypes",
          "module": "Precis.Cabal.Datatypes",
          "name": "full_path_to",
          "package": "precis",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-Cabal-Datatypes.html#v:full_path_to"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Precis.Cabal.Datatypes",
          "name": "hsSourceFile",
          "package": "precis",
          "signature": "ModName -\u003e FilePath -\u003e HsSourceFile",
          "source": "src/Precis-Cabal-Datatypes.html#hsSourceFile",
          "type": "function"
        },
        "index": {
          "hierarchy": "Precis Cabal Datatypes",
          "module": "Precis.Cabal.Datatypes",
          "name": "hsSourceFile",
          "normalized": "ModName-\u003eFilePath-\u003eHsSourceFile",
          "package": "precis",
          "partial": "Source File",
          "signature": "ModName-\u003eFilePath-\u003eHsSourceFile",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-Cabal-Datatypes.html#v:hsSourceFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Precis.Cabal.Datatypes",
          "name": "internal_modules",
          "package": "precis",
          "signature": "[HsSourceFile]",
          "source": "src/Precis-Cabal-Datatypes.html#Package",
          "type": "function"
        },
        "index": {
          "hierarchy": "Precis Cabal Datatypes",
          "module": "Precis.Cabal.Datatypes",
          "name": "internal_modules",
          "normalized": "[HsSourceFile]",
          "package": "precis",
          "signature": "[HsSourceFile]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-Cabal-Datatypes.html#v:internal_modules"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Precis.Cabal.Datatypes",
          "name": "module_name",
          "package": "precis",
          "signature": "ModName",
          "source": "src/Precis-Cabal-Datatypes.html#HsSourceFile",
          "type": "function"
        },
        "index": {
          "hierarchy": "Precis Cabal Datatypes",
          "module": "Precis.Cabal.Datatypes",
          "name": "module_name",
          "package": "precis",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-Cabal-Datatypes.html#v:module_name"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Precis.Cabal.Datatypes",
          "name": "package_name",
          "package": "precis",
          "signature": "String",
          "source": "src/Precis-Cabal-Datatypes.html#Package",
          "type": "function"
        },
        "index": {
          "hierarchy": "Precis Cabal Datatypes",
          "module": "Precis.Cabal.Datatypes",
          "name": "package_name",
          "package": "precis",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-Cabal-Datatypes.html#v:package_name"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Precis.Cabal.Datatypes",
          "name": "package_version",
          "package": "precis",
          "signature": "String",
          "source": "src/Precis-Cabal-Datatypes.html#Package",
          "type": "function"
        },
        "index": {
          "hierarchy": "Precis Cabal Datatypes",
          "module": "Precis.Cabal.Datatypes",
          "name": "package_version",
          "package": "precis",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-Cabal-Datatypes.html#v:package_version"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Precis.Cabal.Datatypes",
          "name": "unresolved_modules",
          "package": "precis",
          "signature": "[UnresolvedModule]",
          "source": "src/Precis-Cabal-Datatypes.html#Package",
          "type": "function"
        },
        "index": {
          "hierarchy": "Precis Cabal Datatypes",
          "module": "Precis.Cabal.Datatypes",
          "name": "unresolved_modules",
          "normalized": "[UnresolvedModule]",
          "package": "precis",
          "signature": "[UnresolvedModule]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-Cabal-Datatypes.html#v:unresolved_modules"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Precis.Cabal.Datatypes",
          "name": "unresolved_name",
          "package": "precis",
          "signature": "ModName",
          "source": "src/Precis-Cabal-Datatypes.html#UnresolvedModule",
          "type": "function"
        },
        "index": {
          "hierarchy": "Precis Cabal Datatypes",
          "module": "Precis.Cabal.Datatypes",
          "name": "unresolved_name",
          "package": "precis",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-Cabal-Datatypes.html#v:unresolved_name"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDatatype for working with Cabal files...\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Precis.Cabal.InterimDatatypes",
          "name": "InterimDatatypes",
          "package": "precis",
          "source": "src/Precis-Cabal-InterimDatatypes.html",
          "type": "module"
        },
        "index": {
          "description": "Datatype for working with Cabal files",
          "hierarchy": "Precis Cabal InterimDatatypes",
          "module": "Precis.Cabal.InterimDatatypes",
          "name": "InterimDatatypes",
          "package": "precis",
          "partial": "Interim Datatypes",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-Cabal-InterimDatatypes.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Precis.Cabal.InterimDatatypes",
          "name": "CabalExe",
          "package": "precis",
          "source": "src/Precis-Cabal-InterimDatatypes.html#CabalExe",
          "type": "data"
        },
        "index": {
          "hierarchy": "Precis Cabal InterimDatatypes",
          "module": "Precis.Cabal.InterimDatatypes",
          "name": "CabalExe",
          "package": "precis",
          "partial": "Cabal Exe",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-Cabal-InterimDatatypes.html#t:CabalExe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eCabalFilePath\u003c/a\u003e\u003c/code\u003e is both the full, normalized path to the \n cabal file and the directory parts to the file.\n\u003c/p\u003e\u003cp\u003eThis is an opaque type - construct with \u003ccode\u003e\u003ca\u003ecabalFilePath\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Precis.Cabal.InterimDatatypes",
          "name": "CabalFilePath",
          "package": "precis",
          "source": "src/Precis-Cabal-InterimDatatypes.html#CabalFilePath",
          "type": "data"
        },
        "index": {
          "description": "CabalFilePath is both the full normalized path to the cabal file and the directory parts to the file This is an opaque type construct with cabalFilePath",
          "hierarchy": "Precis Cabal InterimDatatypes",
          "module": "Precis.Cabal.InterimDatatypes",
          "name": "CabalFilePath",
          "package": "precis",
          "partial": "Cabal File Path",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-Cabal-InterimDatatypes.html#t:CabalFilePath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Precis.Cabal.InterimDatatypes",
          "name": "CabalLibrary",
          "package": "precis",
          "source": "src/Precis-Cabal-InterimDatatypes.html#CabalLibrary",
          "type": "data"
        },
        "index": {
          "hierarchy": "Precis Cabal InterimDatatypes",
          "module": "Precis.Cabal.InterimDatatypes",
          "name": "CabalLibrary",
          "package": "precis",
          "partial": "Cabal Library",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-Cabal-InterimDatatypes.html#t:CabalLibrary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Precis.Cabal.InterimDatatypes",
          "name": "CabalPrecis",
          "package": "precis",
          "source": "src/Precis-Cabal-InterimDatatypes.html#CabalPrecis",
          "type": "data"
        },
        "index": {
          "hierarchy": "Precis Cabal InterimDatatypes",
          "module": "Precis.Cabal.InterimDatatypes",
          "name": "CabalPrecis",
          "package": "precis",
          "partial": "Cabal Precis",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-Cabal-InterimDatatypes.html#t:CabalPrecis"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Precis.Cabal.InterimDatatypes",
          "name": "CabalSourceDir",
          "package": "precis",
          "source": "src/Precis-Cabal-InterimDatatypes.html#CabalSourceDir",
          "type": "data"
        },
        "index": {
          "hierarchy": "Precis Cabal InterimDatatypes",
          "module": "Precis.Cabal.InterimDatatypes",
          "name": "CabalSourceDir",
          "package": "precis",
          "partial": "Cabal Source Dir",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-Cabal-InterimDatatypes.html#t:CabalSourceDir"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Precis.Cabal.InterimDatatypes",
          "name": "ExeMainPath",
          "package": "precis",
          "source": "src/Precis-Cabal-InterimDatatypes.html#ExeMainPath",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Precis Cabal InterimDatatypes",
          "module": "Precis.Cabal.InterimDatatypes",
          "name": "ExeMainPath",
          "package": "precis",
          "partial": "Exe Main Path",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-Cabal-InterimDatatypes.html#t:ExeMainPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Precis.Cabal.InterimDatatypes",
          "name": "FileExtension",
          "package": "precis",
          "source": "src/Precis-Cabal-InterimDatatypes.html#FileExtension",
          "type": "type"
        },
        "index": {
          "hierarchy": "Precis Cabal InterimDatatypes",
          "module": "Precis.Cabal.InterimDatatypes",
          "name": "FileExtension",
          "package": "precis",
          "partial": "File Extension",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-Cabal-InterimDatatypes.html#t:FileExtension"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Precis.Cabal.InterimDatatypes",
          "name": "ModName",
          "package": "precis",
          "source": "src/Precis-Cabal-InterimDatatypes.html#ModName",
          "type": "data"
        },
        "index": {
          "hierarchy": "Precis Cabal InterimDatatypes",
          "module": "Precis.Cabal.InterimDatatypes",
          "name": "ModName",
          "package": "precis",
          "partial": "Mod Name",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-Cabal-InterimDatatypes.html#t:ModName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Precis.Cabal.InterimDatatypes",
          "name": "ModuleDesc",
          "package": "precis",
          "source": "src/Precis-Cabal-InterimDatatypes.html#ModuleDesc",
          "type": "data"
        },
        "index": {
          "hierarchy": "Precis Cabal InterimDatatypes",
          "module": "Precis.Cabal.InterimDatatypes",
          "name": "ModuleDesc",
          "package": "precis",
          "partial": "Module Desc",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-Cabal-InterimDatatypes.html#t:ModuleDesc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Precis.Cabal.InterimDatatypes",
          "name": "CabalExe",
          "package": "precis",
          "signature": "CabalExe",
          "source": "src/Precis-Cabal-InterimDatatypes.html#CabalExe",
          "type": "function"
        },
        "index": {
          "hierarchy": "Precis Cabal InterimDatatypes",
          "module": "Precis.Cabal.InterimDatatypes",
          "name": "CabalExe",
          "package": "precis",
          "partial": "Cabal Exe",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-Cabal-InterimDatatypes.html#v:CabalExe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Precis.Cabal.InterimDatatypes",
          "name": "CabalLibrary",
          "package": "precis",
          "signature": "CabalLibrary",
          "source": "src/Precis-Cabal-InterimDatatypes.html#CabalLibrary",
          "type": "function"
        },
        "index": {
          "hierarchy": "Precis Cabal InterimDatatypes",
          "module": "Precis.Cabal.InterimDatatypes",
          "name": "CabalLibrary",
          "package": "precis",
          "partial": "Cabal Library",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-Cabal-InterimDatatypes.html#v:CabalLibrary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Precis.Cabal.InterimDatatypes",
          "name": "CabalPrecis",
          "package": "precis",
          "signature": "CabalPrecis",
          "source": "src/Precis-Cabal-InterimDatatypes.html#CabalPrecis",
          "type": "function"
        },
        "index": {
          "hierarchy": "Precis Cabal InterimDatatypes",
          "module": "Precis.Cabal.InterimDatatypes",
          "name": "CabalPrecis",
          "package": "precis",
          "partial": "Cabal Precis",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-Cabal-InterimDatatypes.html#v:CabalPrecis"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Precis.Cabal.InterimDatatypes",
          "name": "ExeMainPath",
          "package": "precis",
          "signature": "ExeMainPath",
          "source": "src/Precis-Cabal-InterimDatatypes.html#ExeMainPath",
          "type": "function"
        },
        "index": {
          "hierarchy": "Precis Cabal InterimDatatypes",
          "module": "Precis.Cabal.InterimDatatypes",
          "name": "ExeMainPath",
          "package": "precis",
          "partial": "Exe Main Path",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-Cabal-InterimDatatypes.html#v:ExeMainPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstructor for \u003ccode\u003e\u003ca\u003eCabalFilePath\u003c/a\u003e\u003c/code\u003e - the input FilePath is \n normalized before constructing the data type.\n\u003c/p\u003e",
          "module": "Precis.Cabal.InterimDatatypes",
          "name": "cabalFilePath",
          "package": "precis",
          "signature": "FilePath -\u003e CabalFilePath",
          "source": "src/Precis-Cabal-InterimDatatypes.html#cabalFilePath",
          "type": "function"
        },
        "index": {
          "description": "Constructor for CabalFilePath the input FilePath is normalized before constructing the data type",
          "hierarchy": "Precis Cabal InterimDatatypes",
          "module": "Precis.Cabal.InterimDatatypes",
          "name": "cabalFilePath",
          "normalized": "FilePath-\u003eCabalFilePath",
          "package": "precis",
          "partial": "File Path",
          "signature": "FilePath-\u003eCabalFilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-Cabal-InterimDatatypes.html#v:cabalFilePath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Precis.Cabal.InterimDatatypes",
          "name": "cabalSourceDir",
          "package": "precis",
          "signature": "FilePath -\u003e CabalSourceDir",
          "source": "src/Precis-Cabal-InterimDatatypes.html#cabalSourceDir",
          "type": "function"
        },
        "index": {
          "hierarchy": "Precis Cabal InterimDatatypes",
          "module": "Precis.Cabal.InterimDatatypes",
          "name": "cabalSourceDir",
          "normalized": "FilePath-\u003eCabalSourceDir",
          "package": "precis",
          "partial": "Source Dir",
          "signature": "FilePath-\u003eCabalSourceDir",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-Cabal-InterimDatatypes.html#v:cabalSourceDir"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Precis.Cabal.InterimDatatypes",
          "name": "cond_exes",
          "package": "precis",
          "signature": "[CabalExe]",
          "source": "src/Precis-Cabal-InterimDatatypes.html#CabalPrecis",
          "type": "function"
        },
        "index": {
          "hierarchy": "Precis Cabal InterimDatatypes",
          "module": "Precis.Cabal.InterimDatatypes",
          "name": "cond_exes",
          "normalized": "[CabalExe]",
          "package": "precis",
          "signature": "[CabalExe]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-Cabal-InterimDatatypes.html#v:cond_exes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Precis.Cabal.InterimDatatypes",
          "name": "cond_libraries",
          "package": "precis",
          "signature": "[CabalLibrary]",
          "source": "src/Precis-Cabal-InterimDatatypes.html#CabalPrecis",
          "type": "function"
        },
        "index": {
          "hierarchy": "Precis Cabal InterimDatatypes",
          "module": "Precis.Cabal.InterimDatatypes",
          "name": "cond_libraries",
          "normalized": "[CabalLibrary]",
          "package": "precis",
          "signature": "[CabalLibrary]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-Cabal-InterimDatatypes.html#v:cond_libraries"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Precis.Cabal.InterimDatatypes",
          "name": "directoriesToCabalFile",
          "package": "precis",
          "signature": "CabalFilePath -\u003e [FilePath]",
          "source": "src/Precis-Cabal-InterimDatatypes.html#directoriesToCabalFile",
          "type": "function"
        },
        "index": {
          "hierarchy": "Precis Cabal InterimDatatypes",
          "module": "Precis.Cabal.InterimDatatypes",
          "name": "directoriesToCabalFile",
          "normalized": "CabalFilePath-\u003e[FilePath]",
          "package": "precis",
          "partial": "To Cabal File",
          "signature": "CabalFilePath-\u003e[FilePath]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-Cabal-InterimDatatypes.html#v:directoriesToCabalFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Precis.Cabal.InterimDatatypes",
          "name": "directoriesToSource",
          "package": "precis",
          "signature": "CabalSourceDir -\u003e [FilePath]",
          "source": "src/Precis-Cabal-InterimDatatypes.html#directoriesToSource",
          "type": "function"
        },
        "index": {
          "hierarchy": "Precis Cabal InterimDatatypes",
          "module": "Precis.Cabal.InterimDatatypes",
          "name": "directoriesToSource",
          "normalized": "CabalSourceDir-\u003e[FilePath]",
          "package": "precis",
          "partial": "To Source",
          "signature": "CabalSourceDir-\u003e[FilePath]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-Cabal-InterimDatatypes.html#v:directoriesToSource"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Precis.Cabal.InterimDatatypes",
          "name": "exe_main_module",
          "package": "precis",
          "signature": "ExeMainPath",
          "source": "src/Precis-Cabal-InterimDatatypes.html#CabalExe",
          "type": "function"
        },
        "index": {
          "hierarchy": "Precis Cabal InterimDatatypes",
          "module": "Precis.Cabal.InterimDatatypes",
          "name": "exe_main_module",
          "package": "precis",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-Cabal-InterimDatatypes.html#v:exe_main_module"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Precis.Cabal.InterimDatatypes",
          "name": "exe_other_modules",
          "package": "precis",
          "signature": "[ModuleDesc]",
          "source": "src/Precis-Cabal-InterimDatatypes.html#CabalExe",
          "type": "function"
        },
        "index": {
          "hierarchy": "Precis Cabal InterimDatatypes",
          "module": "Precis.Cabal.InterimDatatypes",
          "name": "exe_other_modules",
          "normalized": "[ModuleDesc]",
          "package": "precis",
          "signature": "[ModuleDesc]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-Cabal-InterimDatatypes.html#v:exe_other_modules"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Precis.Cabal.InterimDatatypes",
          "name": "exe_src_dirs",
          "package": "precis",
          "signature": "[CabalSourceDir]",
          "source": "src/Precis-Cabal-InterimDatatypes.html#CabalExe",
          "type": "function"
        },
        "index": {
          "hierarchy": "Precis Cabal InterimDatatypes",
          "module": "Precis.Cabal.InterimDatatypes",
          "name": "exe_src_dirs",
          "normalized": "[CabalSourceDir]",
          "package": "precis",
          "signature": "[CabalSourceDir]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-Cabal-InterimDatatypes.html#v:exe_src_dirs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Precis.Cabal.InterimDatatypes\",\"Precis.Cabal\"]",
          "name": "getModName",
          "package": "precis",
          "signature": "ModName -\u003e String",
          "source": "src/Precis-Cabal-InterimDatatypes.html#getModName",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/precis/docs/Precis-Cabal-InterimDatatypes.html#v:getModName\",\"http://hackage.haskell.org/package/precis/docs/Precis-Cabal.html#v:getModName\"]"
        },
        "index": {
          "hierarchy": "Precis Cabal InterimDatatypes",
          "module": "Precis.Cabal.InterimDatatypes",
          "name": "getModName",
          "normalized": "ModName-\u003eString",
          "package": "precis",
          "partial": "Mod Name",
          "signature": "ModName-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-Cabal-InterimDatatypes.html#v:getModName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Precis.Cabal.InterimDatatypes",
          "name": "library_src_dirs",
          "package": "precis",
          "signature": "[CabalSourceDir]",
          "source": "src/Precis-Cabal-InterimDatatypes.html#CabalLibrary",
          "type": "function"
        },
        "index": {
          "hierarchy": "Precis Cabal InterimDatatypes",
          "module": "Precis.Cabal.InterimDatatypes",
          "name": "library_src_dirs",
          "normalized": "[CabalSourceDir]",
          "package": "precis",
          "signature": "[CabalSourceDir]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-Cabal-InterimDatatypes.html#v:library_src_dirs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Precis.Cabal.InterimDatatypes",
          "name": "modName",
          "package": "precis",
          "signature": "ModuleName -\u003e ModName",
          "source": "src/Precis-Cabal-InterimDatatypes.html#modName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Precis Cabal InterimDatatypes",
          "module": "Precis.Cabal.InterimDatatypes",
          "name": "modName",
          "normalized": "ModuleName-\u003eModName",
          "package": "precis",
          "partial": "Name",
          "signature": "ModuleName-\u003eModName",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-Cabal-InterimDatatypes.html#v:modName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Precis.Cabal.InterimDatatypes",
          "name": "moduleDesc",
          "package": "precis",
          "signature": "ModuleName -\u003e ModuleDesc",
          "source": "src/Precis-Cabal-InterimDatatypes.html#moduleDesc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Precis Cabal InterimDatatypes",
          "module": "Precis.Cabal.InterimDatatypes",
          "name": "moduleDesc",
          "normalized": "ModuleName-\u003eModuleDesc",
          "package": "precis",
          "partial": "Desc",
          "signature": "ModuleName-\u003eModuleDesc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-Cabal-InterimDatatypes.html#v:moduleDesc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Precis.Cabal.InterimDatatypes",
          "name": "moduleDescName",
          "package": "precis",
          "signature": "ModuleDesc -\u003e ModName",
          "source": "src/Precis-Cabal-InterimDatatypes.html#moduleDescName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Precis Cabal InterimDatatypes",
          "module": "Precis.Cabal.InterimDatatypes",
          "name": "moduleDescName",
          "normalized": "ModuleDesc-\u003eModName",
          "package": "precis",
          "partial": "Desc Name",
          "signature": "ModuleDesc-\u003eModName",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-Cabal-InterimDatatypes.html#v:moduleDescName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Precis.Cabal.InterimDatatypes",
          "name": "moduleDirectories",
          "package": "precis",
          "signature": "ModuleDesc -\u003e [FilePath]",
          "source": "src/Precis-Cabal-InterimDatatypes.html#moduleDirectories",
          "type": "function"
        },
        "index": {
          "hierarchy": "Precis Cabal InterimDatatypes",
          "module": "Precis.Cabal.InterimDatatypes",
          "name": "moduleDirectories",
          "normalized": "ModuleDesc-\u003e[FilePath]",
          "package": "precis",
          "partial": "Directories",
          "signature": "ModuleDesc-\u003e[FilePath]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-Cabal-InterimDatatypes.html#v:moduleDirectories"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Precis.Cabal.InterimDatatypes",
          "name": "pathToCabalFile",
          "package": "precis",
          "signature": "CabalFilePath -\u003e FilePath",
          "source": "src/Precis-Cabal-InterimDatatypes.html#pathToCabalFile",
          "type": "function"
        },
        "index": {
          "hierarchy": "Precis Cabal InterimDatatypes",
          "module": "Precis.Cabal.InterimDatatypes",
          "name": "pathToCabalFile",
          "normalized": "CabalFilePath-\u003eFilePath",
          "package": "precis",
          "partial": "To Cabal File",
          "signature": "CabalFilePath-\u003eFilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-Cabal-InterimDatatypes.html#v:pathToCabalFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Precis.Cabal.InterimDatatypes",
          "name": "path_to_cabal_file",
          "package": "precis",
          "signature": "CabalFilePath",
          "source": "src/Precis-Cabal-InterimDatatypes.html#CabalPrecis",
          "type": "function"
        },
        "index": {
          "hierarchy": "Precis Cabal InterimDatatypes",
          "module": "Precis.Cabal.InterimDatatypes",
          "name": "path_to_cabal_file",
          "package": "precis",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-Cabal-InterimDatatypes.html#v:path_to_cabal_file"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Precis.Cabal.InterimDatatypes",
          "name": "pkg_name",
          "package": "precis",
          "signature": "String",
          "source": "src/Precis-Cabal-InterimDatatypes.html#CabalPrecis",
          "type": "function"
        },
        "index": {
          "hierarchy": "Precis Cabal InterimDatatypes",
          "module": "Precis.Cabal.InterimDatatypes",
          "name": "pkg_name",
          "package": "precis",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-Cabal-InterimDatatypes.html#v:pkg_name"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Precis.Cabal.InterimDatatypes",
          "name": "pkg_version",
          "package": "precis",
          "signature": "String",
          "source": "src/Precis-Cabal-InterimDatatypes.html#CabalPrecis",
          "type": "function"
        },
        "index": {
          "hierarchy": "Precis Cabal InterimDatatypes",
          "module": "Precis.Cabal.InterimDatatypes",
          "name": "pkg_version",
          "package": "precis",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-Cabal-InterimDatatypes.html#v:pkg_version"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Precis.Cabal.InterimDatatypes",
          "name": "private_modules",
          "package": "precis",
          "signature": "[ModuleDesc]",
          "source": "src/Precis-Cabal-InterimDatatypes.html#CabalLibrary",
          "type": "function"
        },
        "index": {
          "hierarchy": "Precis Cabal InterimDatatypes",
          "module": "Precis.Cabal.InterimDatatypes",
          "name": "private_modules",
          "normalized": "[ModuleDesc]",
          "package": "precis",
          "signature": "[ModuleDesc]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-Cabal-InterimDatatypes.html#v:private_modules"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Precis.Cabal.InterimDatatypes",
          "name": "public_modules",
          "package": "precis",
          "signature": "[ModuleDesc]",
          "source": "src/Precis-Cabal-InterimDatatypes.html#CabalLibrary",
          "type": "function"
        },
        "index": {
          "hierarchy": "Precis Cabal InterimDatatypes",
          "module": "Precis.Cabal.InterimDatatypes",
          "name": "public_modules",
          "normalized": "[ModuleDesc]",
          "package": "precis",
          "signature": "[ModuleDesc]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-Cabal-InterimDatatypes.html#v:public_modules"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Precis.Cabal.InterimDatatypes",
          "name": "relPathToExeMain",
          "package": "precis",
          "signature": "FilePath",
          "source": "src/Precis-Cabal-InterimDatatypes.html#ExeMainPath",
          "type": "function"
        },
        "index": {
          "hierarchy": "Precis Cabal InterimDatatypes",
          "module": "Precis.Cabal.InterimDatatypes",
          "name": "relPathToExeMain",
          "package": "precis",
          "partial": "Path To Exe Main",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-Cabal-InterimDatatypes.html#v:relPathToExeMain"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA Monad transofrmer (over IO) for revolving module names \n to FilePaths.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Precis.Cabal.ResolveM",
          "name": "ResolveM",
          "package": "precis",
          "source": "src/Precis-Cabal-ResolveM.html",
          "type": "module"
        },
        "index": {
          "description": "Monad transofrmer over IO for revolving module names to FilePaths",
          "hierarchy": "Precis Cabal ResolveM",
          "module": "Precis.Cabal.ResolveM",
          "name": "ResolveM",
          "package": "precis",
          "partial": "Resolve",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-Cabal-ResolveM.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Precis.Cabal.ResolveM",
          "name": "ResolveM",
          "package": "precis",
          "source": "src/Precis-Cabal-ResolveM.html#ResolveM",
          "type": "data"
        },
        "index": {
          "hierarchy": "Precis Cabal ResolveM",
          "module": "Precis.Cabal.ResolveM",
          "name": "ResolveM",
          "package": "precis",
          "partial": "Resolve",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-Cabal-ResolveM.html#t:ResolveM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Precis.Cabal.ResolveM",
          "name": "getEIU",
          "package": "precis",
          "signature": "RSt -\u003e ([HsSourceFile], [HsSourceFile], [UnresolvedModule])",
          "source": "src/Precis-Cabal-ResolveM.html#getEIU",
          "type": "function"
        },
        "index": {
          "hierarchy": "Precis Cabal ResolveM",
          "module": "Precis.Cabal.ResolveM",
          "name": "getEIU",
          "normalized": "RSt-\u003e([HsSourceFile],[HsSourceFile],[UnresolvedModule])",
          "package": "precis",
          "partial": "EIU",
          "signature": "RSt-\u003e([HsSourceFile],[HsSourceFile],[UnresolvedModule])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-Cabal-ResolveM.html#v:getEIU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Precis.Cabal.ResolveM",
          "name": "getFilePathLoc",
          "package": "precis",
          "signature": "[CabalSourceDir] -\u003e ModuleDesc -\u003e ResolveM (Maybe FilePath)",
          "source": "src/Precis-Cabal-ResolveM.html#getFilePathLoc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Precis Cabal ResolveM",
          "module": "Precis.Cabal.ResolveM",
          "name": "getFilePathLoc",
          "normalized": "[CabalSourceDir]-\u003eModuleDesc-\u003eResolveM(Maybe FilePath)",
          "package": "precis",
          "partial": "File Path Loc",
          "signature": "[CabalSourceDir]-\u003eModuleDesc-\u003eResolveM(Maybe FilePath)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-Cabal-ResolveM.html#v:getFilePathLoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Precis.Cabal.ResolveM",
          "name": "resolvePrecis",
          "package": "precis",
          "signature": "CabalPrecis -\u003e [FileExtension] -\u003e IO ([HsSourceFile], [HsSourceFile], [UnresolvedModule])",
          "source": "src/Precis-Cabal-ResolveM.html#resolvePrecis",
          "type": "function"
        },
        "index": {
          "hierarchy": "Precis Cabal ResolveM",
          "module": "Precis.Cabal.ResolveM",
          "name": "resolvePrecis",
          "normalized": "CabalPrecis-\u003e[FileExtension]-\u003eIO([HsSourceFile],[HsSourceFile],[UnresolvedModule])",
          "package": "precis",
          "partial": "Precis",
          "signature": "CabalPrecis-\u003e[FileExtension]-\u003eIO([HsSourceFile],[HsSourceFile],[UnresolvedModule])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-Cabal-ResolveM.html#v:resolvePrecis"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Precis.Cabal.ResolveM",
          "name": "runResolve",
          "package": "precis",
          "signature": "CabalFilePath -\u003e [FileExtension] -\u003e ResolveM a -\u003e IO (a, RSt)",
          "source": "src/Precis-Cabal-ResolveM.html#runResolve",
          "type": "function"
        },
        "index": {
          "hierarchy": "Precis Cabal ResolveM",
          "module": "Precis.Cabal.ResolveM",
          "name": "runResolve",
          "normalized": "CabalFilePath-\u003e[FileExtension]-\u003eResolveM a-\u003eIO(a,RSt)",
          "package": "precis",
          "partial": "Resolve",
          "signature": "CabalFilePath-\u003e[FileExtension]-\u003eResolveM a-\u003eIO(a,RSt)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-Cabal-ResolveM.html#v:runResolve"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eImport module for Cabal libs\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Precis.Cabal",
          "name": "Cabal",
          "package": "precis",
          "source": "src/Precis-Cabal.html",
          "type": "module"
        },
        "index": {
          "description": "Import module for Cabal libs",
          "hierarchy": "Precis Cabal",
          "module": "Precis.Cabal",
          "name": "Cabal",
          "package": "precis",
          "partial": "Cabal",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-Cabal.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Precis.Cabal",
          "name": "ModName",
          "package": "precis",
          "source": "src/Precis-Cabal-InterimDatatypes.html#ModName",
          "type": "data"
        },
        "index": {
          "hierarchy": "Precis Cabal",
          "module": "Precis.Cabal",
          "name": "ModName",
          "package": "precis",
          "partial": "Mod Name",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-Cabal.html#t:ModName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Precis.Cabal",
          "name": "extractPackageInfo",
          "package": "precis",
          "signature": "FilePath -\u003e IO (Either CabalFileError Package)",
          "source": "src/Precis-Cabal.html#extractPackageInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Precis Cabal",
          "module": "Precis.Cabal",
          "name": "extractPackageInfo",
          "normalized": "FilePath-\u003eIO(Either CabalFileError Package)",
          "package": "precis",
          "partial": "Package Info",
          "signature": "FilePath-\u003eIO(Either CabalFileError Package)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-Cabal.html#v:extractPackageInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTwo Diff types (3 state and 4 state)\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Precis.Diff",
          "name": "Diff",
          "package": "precis",
          "source": "src/Precis-Diff.html",
          "type": "module"
        },
        "index": {
          "description": "Two Diff types state and state",
          "hierarchy": "Precis Diff",
          "module": "Precis.Diff",
          "name": "Diff",
          "package": "precis",
          "partial": "Diff",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-Diff.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Precis.Diff",
          "name": "Edit3",
          "package": "precis",
          "source": "src/Precis-Diff.html#Edit3",
          "type": "data"
        },
        "index": {
          "hierarchy": "Precis Diff",
          "module": "Precis.Diff",
          "name": "Edit3",
          "package": "precis",
          "partial": "Edit",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-Diff.html#t:Edit3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Precis.Diff",
          "name": "Edit4",
          "package": "precis",
          "source": "src/Precis-Diff.html#Edit4",
          "type": "data"
        },
        "index": {
          "hierarchy": "Precis Diff",
          "module": "Precis.Diff",
          "name": "Edit4",
          "package": "precis",
          "partial": "Edit",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-Diff.html#t:Edit4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Precis.Diff",
          "name": "ADD",
          "package": "precis",
          "signature": "ADD a",
          "source": "src/Precis-Diff.html#Edit4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Precis Diff",
          "module": "Precis.Diff",
          "name": "ADD",
          "package": "precis",
          "partial": "ADD",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-Diff.html#v:ADD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Precis.Diff",
          "name": "Add",
          "package": "precis",
          "signature": "Add a",
          "source": "src/Precis-Diff.html#Edit3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Precis Diff",
          "module": "Precis.Diff",
          "name": "Add",
          "package": "precis",
          "partial": "Add",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-Diff.html#v:Add"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Precis.Diff",
          "name": "DEL",
          "package": "precis",
          "signature": "DEL a",
          "source": "src/Precis-Diff.html#Edit4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Precis Diff",
          "module": "Precis.Diff",
          "name": "DEL",
          "package": "precis",
          "partial": "DEL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-Diff.html#v:DEL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Precis.Diff",
          "name": "DIF",
          "package": "precis",
          "signature": "DIF a a",
          "source": "src/Precis-Diff.html#Edit4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Precis Diff",
          "module": "Precis.Diff",
          "name": "DIF",
          "package": "precis",
          "partial": "DIF",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-Diff.html#v:DIF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Precis.Diff",
          "name": "Del",
          "package": "precis",
          "signature": "Del a",
          "source": "src/Precis-Diff.html#Edit3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Precis Diff",
          "module": "Precis.Diff",
          "name": "Del",
          "package": "precis",
          "partial": "Del",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-Diff.html#v:Del"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Precis.Diff",
          "name": "EQU",
          "package": "precis",
          "signature": "EQU a",
          "source": "src/Precis-Diff.html#Edit4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Precis Diff",
          "module": "Precis.Diff",
          "name": "EQU",
          "package": "precis",
          "partial": "EQU",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-Diff.html#v:EQU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Precis.Diff",
          "name": "Equ",
          "package": "precis",
          "signature": "Equ a",
          "source": "src/Precis-Diff.html#Edit3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Precis Diff",
          "module": "Precis.Diff",
          "name": "Equ",
          "package": "precis",
          "partial": "Equ",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-Diff.html#v:Equ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Precis.Diff",
          "name": "addedConflictRemoved",
          "package": "precis",
          "signature": "[Edit4 a] -\u003e ([a], [(a, a)], [a])",
          "source": "src/Precis-Diff.html#addedConflictRemoved",
          "type": "function"
        },
        "index": {
          "hierarchy": "Precis Diff",
          "module": "Precis.Diff",
          "name": "addedConflictRemoved",
          "normalized": "[Edit a]-\u003e([a],[(a,a)],[a])",
          "package": "precis",
          "partial": "Conflict Removed",
          "signature": "[Edit a]-\u003e([a],[(a,a)],[a])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-Diff.html#v:addedConflictRemoved"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Precis.Diff",
          "name": "addedRemoved",
          "package": "precis",
          "signature": "[Edit4 a] -\u003e ([a], [a])",
          "source": "src/Precis-Diff.html#addedRemoved",
          "type": "function"
        },
        "index": {
          "hierarchy": "Precis Diff",
          "module": "Precis.Diff",
          "name": "addedRemoved",
          "normalized": "[Edit a]-\u003e([a],[a])",
          "package": "precis",
          "partial": "Removed",
          "signature": "[Edit a]-\u003e([a],[a])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-Diff.html#v:addedRemoved"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Precis.Diff",
          "name": "conflictRemoved",
          "package": "precis",
          "signature": "[Edit4 a] -\u003e ([(a, a)], [a])",
          "source": "src/Precis-Diff.html#conflictRemoved",
          "type": "function"
        },
        "index": {
          "hierarchy": "Precis Diff",
          "module": "Precis.Diff",
          "name": "conflictRemoved",
          "normalized": "[Edit a]-\u003e([(a,a)],[a])",
          "package": "precis",
          "partial": "Removed",
          "signature": "[Edit a]-\u003e([(a,a)],[a])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-Diff.html#v:conflictRemoved"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Precis.Diff",
          "name": "diff3",
          "package": "precis",
          "signature": "(a -\u003e a -\u003e Bool) -\u003e [a] -\u003e [a] -\u003e [Edit3 a]",
          "source": "src/Precis-Diff.html#diff3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Precis Diff",
          "module": "Precis.Diff",
          "name": "diff3",
          "normalized": "(a-\u003ea-\u003eBool)-\u003e[a]-\u003e[a]-\u003e[Edit a]",
          "package": "precis",
          "signature": "(a-\u003ea-\u003eBool)-\u003e[a]-\u003e[a]-\u003e[Edit a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-Diff.html#v:diff3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Precis.Diff",
          "name": "diff4",
          "package": "precis",
          "signature": "(a -\u003e a -\u003e Bool) -\u003e (a -\u003e a -\u003e Bool) -\u003e [a] -\u003e [a] -\u003e [Edit4 a]",
          "source": "src/Precis-Diff.html#diff4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Precis Diff",
          "module": "Precis.Diff",
          "name": "diff4",
          "normalized": "(a-\u003ea-\u003eBool)-\u003e(a-\u003ea-\u003eBool)-\u003e[a]-\u003e[a]-\u003e[Edit a]",
          "package": "precis",
          "signature": "(a-\u003ea-\u003eBool)-\u003e(a-\u003ea-\u003eBool)-\u003e[a]-\u003e[a]-\u003e[Edit a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-Diff.html#v:diff4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Precis.HsSrc.Datatypes",
          "name": "Datatypes",
          "package": "precis",
          "source": "src/Precis-HsSrc-Datatypes.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Precis HsSrc Datatypes",
          "module": "Precis.HsSrc.Datatypes",
          "name": "Datatypes",
          "package": "precis",
          "partial": "Datatypes",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-HsSrc-Datatypes.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Precis.HsSrc.Datatypes",
          "name": "DatatypeDecl",
          "package": "precis",
          "source": "src/Precis-HsSrc-Datatypes.html#DatatypeDecl",
          "type": "data"
        },
        "index": {
          "hierarchy": "Precis HsSrc Datatypes",
          "module": "Precis.HsSrc.Datatypes",
          "name": "DatatypeDecl",
          "package": "precis",
          "partial": "Datatype Decl",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-HsSrc-Datatypes.html#t:DatatypeDecl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Precis.HsSrc.Datatypes",
          "name": "ExportItem",
          "package": "precis",
          "source": "src/Precis-HsSrc-Datatypes.html#ExportItem",
          "type": "data"
        },
        "index": {
          "hierarchy": "Precis HsSrc Datatypes",
          "module": "Precis.HsSrc.Datatypes",
          "name": "ExportItem",
          "package": "precis",
          "partial": "Export Item",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-HsSrc-Datatypes.html#t:ExportItem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Precis.HsSrc.Datatypes",
          "name": "InstanceDecl",
          "package": "precis",
          "source": "src/Precis-HsSrc-Datatypes.html#InstanceDecl",
          "type": "data"
        },
        "index": {
          "hierarchy": "Precis HsSrc Datatypes",
          "module": "Precis.HsSrc.Datatypes",
          "name": "InstanceDecl",
          "package": "precis",
          "partial": "Instance Decl",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-HsSrc-Datatypes.html#t:InstanceDecl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Precis.HsSrc.Datatypes",
          "name": "MacroExpandedSrcFile",
          "package": "precis",
          "source": "src/Precis-HsSrc-Datatypes.html#MacroExpandedSrcFile",
          "type": "data"
        },
        "index": {
          "hierarchy": "Precis HsSrc Datatypes",
          "module": "Precis.HsSrc.Datatypes",
          "name": "MacroExpandedSrcFile",
          "package": "precis",
          "partial": "Macro Expanded Src File",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-HsSrc-Datatypes.html#t:MacroExpandedSrcFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eModule file names are derived from the cabal file.\n So the name is tracked if it is missing...\n\u003c/p\u003e",
          "module": "Precis.HsSrc.Datatypes",
          "name": "ModuleParseError",
          "package": "precis",
          "source": "src/Precis-HsSrc-Datatypes.html#ModuleParseError",
          "type": "data"
        },
        "index": {
          "description": "Module file names are derived from the cabal file So the name is tracked if it is missing",
          "hierarchy": "Precis HsSrc Datatypes",
          "module": "Precis.HsSrc.Datatypes",
          "name": "ModuleParseError",
          "package": "precis",
          "partial": "Module Parse Error",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-HsSrc-Datatypes.html#t:ModuleParseError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Precis.HsSrc.Datatypes",
          "name": "StrName",
          "package": "precis",
          "source": "src/Precis-HsSrc-Datatypes.html#StrName",
          "type": "type"
        },
        "index": {
          "hierarchy": "Precis HsSrc Datatypes",
          "module": "Precis.HsSrc.Datatypes",
          "name": "StrName",
          "package": "precis",
          "partial": "Str Name",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-HsSrc-Datatypes.html#t:StrName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Precis.HsSrc.Datatypes",
          "name": "TextRep",
          "package": "precis",
          "source": "src/Precis-HsSrc-Datatypes.html#TextRep",
          "type": "type"
        },
        "index": {
          "hierarchy": "Precis HsSrc Datatypes",
          "module": "Precis.HsSrc.Datatypes",
          "name": "TextRep",
          "package": "precis",
          "partial": "Text Rep",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-HsSrc-Datatypes.html#t:TextRep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Precis.HsSrc.Datatypes",
          "name": "TypeSigDecl",
          "package": "precis",
          "source": "src/Precis-HsSrc-Datatypes.html#TypeSigDecl",
          "type": "data"
        },
        "index": {
          "hierarchy": "Precis HsSrc Datatypes",
          "module": "Precis.HsSrc.Datatypes",
          "name": "TypeSigDecl",
          "package": "precis",
          "partial": "Type Sig Decl",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-HsSrc-Datatypes.html#t:TypeSigDecl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Precis.HsSrc.Datatypes",
          "name": "DataOrClass",
          "package": "precis",
          "signature": "DataOrClass StrName TextRep",
          "source": "src/Precis-HsSrc-Datatypes.html#ExportItem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Precis HsSrc Datatypes",
          "module": "Precis.HsSrc.Datatypes",
          "name": "DataOrClass",
          "package": "precis",
          "partial": "Data Or Class",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-HsSrc-Datatypes.html#v:DataOrClass"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Precis.HsSrc.Datatypes",
          "name": "DatatypeDecl",
          "package": "precis",
          "signature": "DatatypeDecl",
          "source": "src/Precis-HsSrc-Datatypes.html#DatatypeDecl",
          "type": "function"
        },
        "index": {
          "hierarchy": "Precis HsSrc Datatypes",
          "module": "Precis.HsSrc.Datatypes",
          "name": "DatatypeDecl",
          "package": "precis",
          "partial": "Datatype Decl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-HsSrc-Datatypes.html#v:DatatypeDecl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Precis.HsSrc.Datatypes",
          "name": "ERR_MODULE_FILE_MISSING",
          "package": "precis",
          "signature": "ERR_MODULE_FILE_MISSING String",
          "source": "src/Precis-HsSrc-Datatypes.html#ModuleParseError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Precis HsSrc Datatypes",
          "module": "Precis.HsSrc.Datatypes",
          "name": "ERR_MODULE_FILE_MISSING",
          "package": "precis",
          "partial": "ERR MODULE FILE MISSING",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-HsSrc-Datatypes.html#v:ERR_MODULE_FILE_MISSING"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Precis.HsSrc.Datatypes",
          "name": "ERR_MODULE_FILE_PARSE",
          "package": "precis",
          "signature": "ERR_MODULE_FILE_PARSE String",
          "source": "src/Precis-HsSrc-Datatypes.html#ModuleParseError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Precis HsSrc Datatypes",
          "module": "Precis.HsSrc.Datatypes",
          "name": "ERR_MODULE_FILE_PARSE",
          "package": "precis",
          "partial": "ERR MODULE FILE PARSE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-HsSrc-Datatypes.html#v:ERR_MODULE_FILE_PARSE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Precis.HsSrc.Datatypes",
          "name": "InstanceDecl",
          "package": "precis",
          "signature": "InstanceDecl",
          "source": "src/Precis-HsSrc-Datatypes.html#InstanceDecl",
          "type": "function"
        },
        "index": {
          "hierarchy": "Precis HsSrc Datatypes",
          "module": "Precis.HsSrc.Datatypes",
          "name": "InstanceDecl",
          "package": "precis",
          "partial": "Instance Decl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-HsSrc-Datatypes.html#v:InstanceDecl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Precis.HsSrc.Datatypes",
          "name": "MacroExpandedSrcFile",
          "package": "precis",
          "signature": "MacroExpandedSrcFile",
          "source": "src/Precis-HsSrc-Datatypes.html#MacroExpandedSrcFile",
          "type": "function"
        },
        "index": {
          "hierarchy": "Precis HsSrc Datatypes",
          "module": "Precis.HsSrc.Datatypes",
          "name": "MacroExpandedSrcFile",
          "package": "precis",
          "partial": "Macro Expanded Src File",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-HsSrc-Datatypes.html#v:MacroExpandedSrcFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Precis.HsSrc.Datatypes",
          "name": "ModuleExport",
          "package": "precis",
          "signature": "ModuleExport StrName",
          "source": "src/Precis-HsSrc-Datatypes.html#ExportItem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Precis HsSrc Datatypes",
          "module": "Precis.HsSrc.Datatypes",
          "name": "ModuleExport",
          "package": "precis",
          "partial": "Module Export",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-HsSrc-Datatypes.html#v:ModuleExport"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Precis.HsSrc.Datatypes",
          "name": "TypeSigDecl",
          "package": "precis",
          "signature": "TypeSigDecl",
          "source": "src/Precis-HsSrc-Datatypes.html#TypeSigDecl",
          "type": "function"
        },
        "index": {
          "hierarchy": "Precis HsSrc Datatypes",
          "module": "Precis.HsSrc.Datatypes",
          "name": "TypeSigDecl",
          "package": "precis",
          "partial": "Type Sig Decl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-HsSrc-Datatypes.html#v:TypeSigDecl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Precis.HsSrc.Datatypes",
          "name": "Variable",
          "package": "precis",
          "signature": "Variable StrName",
          "source": "src/Precis-HsSrc-Datatypes.html#ExportItem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Precis HsSrc Datatypes",
          "module": "Precis.HsSrc.Datatypes",
          "name": "Variable",
          "package": "precis",
          "partial": "Variable",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-HsSrc-Datatypes.html#v:Variable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Precis.HsSrc.Datatypes",
          "name": "class_name",
          "package": "precis",
          "signature": "StrName",
          "source": "src/Precis-HsSrc-Datatypes.html#InstanceDecl",
          "type": "function"
        },
        "index": {
          "hierarchy": "Precis HsSrc Datatypes",
          "module": "Precis.HsSrc.Datatypes",
          "name": "class_name",
          "package": "precis",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-HsSrc-Datatypes.html#v:class_name"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Precis.HsSrc.Datatypes",
          "name": "datatypeDeclName",
          "package": "precis",
          "signature": "DatatypeDecl -\u003e StrName",
          "source": "src/Precis-HsSrc-Datatypes.html#datatypeDeclName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Precis HsSrc Datatypes",
          "module": "Precis.HsSrc.Datatypes",
          "name": "datatypeDeclName",
          "normalized": "DatatypeDecl-\u003eStrName",
          "package": "precis",
          "partial": "Decl Name",
          "signature": "DatatypeDecl-\u003eStrName",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-HsSrc-Datatypes.html#v:datatypeDeclName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Precis.HsSrc.Datatypes",
          "name": "datatype_name",
          "package": "precis",
          "signature": "StrName",
          "source": "src/Precis-HsSrc-Datatypes.html#DatatypeDecl",
          "type": "function"
        },
        "index": {
          "hierarchy": "Precis HsSrc Datatypes",
          "module": "Precis.HsSrc.Datatypes",
          "name": "datatype_name",
          "package": "precis",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-HsSrc-Datatypes.html#v:datatype_name"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Precis.HsSrc.Datatypes",
          "name": "datatype_rep",
          "package": "precis",
          "signature": "TextRep",
          "source": "src/Precis-HsSrc-Datatypes.html#DatatypeDecl",
          "type": "function"
        },
        "index": {
          "hierarchy": "Precis HsSrc Datatypes",
          "module": "Precis.HsSrc.Datatypes",
          "name": "datatype_rep",
          "package": "precis",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-HsSrc-Datatypes.html#v:datatype_rep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Precis.HsSrc.Datatypes",
          "name": "expanded_source",
          "package": "precis",
          "signature": "String",
          "source": "src/Precis-HsSrc-Datatypes.html#MacroExpandedSrcFile",
          "type": "function"
        },
        "index": {
          "hierarchy": "Precis HsSrc Datatypes",
          "module": "Precis.HsSrc.Datatypes",
          "name": "expanded_source",
          "package": "precis",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-HsSrc-Datatypes.html#v:expanded_source"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Precis.HsSrc.Datatypes",
          "name": "exportItemName",
          "package": "precis",
          "signature": "ExportItem -\u003e StrName",
          "source": "src/Precis-HsSrc-Datatypes.html#exportItemName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Precis HsSrc Datatypes",
          "module": "Precis.HsSrc.Datatypes",
          "name": "exportItemName",
          "normalized": "ExportItem-\u003eStrName",
          "package": "precis",
          "partial": "Item Name",
          "signature": "ExportItem-\u003eStrName",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-HsSrc-Datatypes.html#v:exportItemName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Precis.HsSrc.Datatypes",
          "name": "full_rep",
          "package": "precis",
          "signature": "TextRep",
          "source": "src/Precis-HsSrc-Datatypes.html#InstanceDecl",
          "type": "function"
        },
        "index": {
          "hierarchy": "Precis HsSrc Datatypes",
          "module": "Precis.HsSrc.Datatypes",
          "name": "full_rep",
          "package": "precis",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-HsSrc-Datatypes.html#v:full_rep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Precis.HsSrc.Datatypes",
          "name": "instanceDeclName",
          "package": "precis",
          "signature": "InstanceDecl -\u003e StrName",
          "source": "src/Precis-HsSrc-Datatypes.html#instanceDeclName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Precis HsSrc Datatypes",
          "module": "Precis.HsSrc.Datatypes",
          "name": "instanceDeclName",
          "normalized": "InstanceDecl-\u003eStrName",
          "package": "precis",
          "partial": "Decl Name",
          "signature": "InstanceDecl-\u003eStrName",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-HsSrc-Datatypes.html#v:instanceDeclName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Precis.HsSrc.Datatypes",
          "name": "moduleParseErrorMsg",
          "package": "precis",
          "signature": "ModuleParseError -\u003e String",
          "source": "src/Precis-HsSrc-Datatypes.html#moduleParseErrorMsg",
          "type": "function"
        },
        "index": {
          "hierarchy": "Precis HsSrc Datatypes",
          "module": "Precis.HsSrc.Datatypes",
          "name": "moduleParseErrorMsg",
          "normalized": "ModuleParseError-\u003eString",
          "package": "precis",
          "partial": "Parse Error Msg",
          "signature": "ModuleParseError-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-HsSrc-Datatypes.html#v:moduleParseErrorMsg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Precis.HsSrc.Datatypes",
          "name": "source_file_name",
          "package": "precis",
          "signature": "String",
          "source": "src/Precis-HsSrc-Datatypes.html#MacroExpandedSrcFile",
          "type": "function"
        },
        "index": {
          "hierarchy": "Precis HsSrc Datatypes",
          "module": "Precis.HsSrc.Datatypes",
          "name": "source_file_name",
          "package": "precis",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-HsSrc-Datatypes.html#v:source_file_name"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Precis.HsSrc.Datatypes",
          "name": "typeSigDeclName",
          "package": "precis",
          "signature": "TypeSigDecl -\u003e StrName",
          "source": "src/Precis-HsSrc-Datatypes.html#typeSigDeclName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Precis HsSrc Datatypes",
          "module": "Precis.HsSrc.Datatypes",
          "name": "typeSigDeclName",
          "normalized": "TypeSigDecl-\u003eStrName",
          "package": "precis",
          "partial": "Sig Decl Name",
          "signature": "TypeSigDecl-\u003eStrName",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-HsSrc-Datatypes.html#v:typeSigDeclName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Precis.HsSrc.Datatypes",
          "name": "type_decl_name",
          "package": "precis",
          "signature": "StrName",
          "source": "src/Precis-HsSrc-Datatypes.html#TypeSigDecl",
          "type": "function"
        },
        "index": {
          "hierarchy": "Precis HsSrc Datatypes",
          "module": "Precis.HsSrc.Datatypes",
          "name": "type_decl_name",
          "package": "precis",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-HsSrc-Datatypes.html#v:type_decl_name"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Precis.HsSrc.Datatypes",
          "name": "type_rep",
          "package": "precis",
          "signature": "TextRep",
          "source": "src/Precis-HsSrc-Datatypes.html#InstanceDecl",
          "type": "function"
        },
        "index": {
          "hierarchy": "Precis HsSrc Datatypes",
          "module": "Precis.HsSrc.Datatypes",
          "name": "type_rep",
          "package": "precis",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-HsSrc-Datatypes.html#v:type_rep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Precis.HsSrc.Datatypes",
          "name": "type_signature",
          "package": "precis",
          "signature": "TextRep",
          "source": "src/Precis-HsSrc-Datatypes.html#TypeSigDecl",
          "type": "function"
        },
        "index": {
          "hierarchy": "Precis HsSrc Datatypes",
          "module": "Precis.HsSrc.Datatypes",
          "name": "type_signature",
          "package": "precis",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-HsSrc-Datatypes.html#v:type_signature"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Precis.HsSrc.Utils",
          "name": "Utils",
          "package": "precis",
          "source": "src/Precis-HsSrc-Utils.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Precis HsSrc Utils",
          "module": "Precis.HsSrc.Utils",
          "name": "Utils",
          "package": "precis",
          "partial": "Utils",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-HsSrc-Utils.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Precis.HsSrc.Utils",
          "name": "extractCName",
          "package": "precis",
          "signature": "CName -\u003e String",
          "source": "src/Precis-HsSrc-Utils.html#extractCName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Precis HsSrc Utils",
          "module": "Precis.HsSrc.Utils",
          "name": "extractCName",
          "normalized": "CName-\u003eString",
          "package": "precis",
          "partial": "CName",
          "signature": "CName-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-HsSrc-Utils.html#v:extractCName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Precis.HsSrc.Utils",
          "name": "extractModuleName",
          "package": "precis",
          "signature": "ModuleName -\u003e String",
          "source": "src/Precis-HsSrc-Utils.html#extractModuleName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Precis HsSrc Utils",
          "module": "Precis.HsSrc.Utils",
          "name": "extractModuleName",
          "normalized": "ModuleName-\u003eString",
          "package": "precis",
          "partial": "Module Name",
          "signature": "ModuleName-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-HsSrc-Utils.html#v:extractModuleName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Precis.HsSrc.Utils",
          "name": "extractName",
          "package": "precis",
          "signature": "Name -\u003e String",
          "source": "src/Precis-HsSrc-Utils.html#extractName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Precis HsSrc Utils",
          "module": "Precis.HsSrc.Utils",
          "name": "extractName",
          "normalized": "Name-\u003eString",
          "package": "precis",
          "partial": "Name",
          "signature": "Name-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-HsSrc-Utils.html#v:extractName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Precis.HsSrc.Utils",
          "name": "extractQName",
          "package": "precis",
          "signature": "QName -\u003e String",
          "source": "src/Precis-HsSrc-Utils.html#extractQName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Precis HsSrc Utils",
          "module": "Precis.HsSrc.Utils",
          "name": "extractQName",
          "normalized": "QName-\u003eString",
          "package": "precis",
          "partial": "QName",
          "signature": "QName-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-HsSrc-Utils.html#v:extractQName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Precis.HsSrc.Utils",
          "name": "extractSpecialCon",
          "package": "precis",
          "signature": "SpecialCon -\u003e String",
          "source": "src/Precis-HsSrc-Utils.html#extractSpecialCon",
          "type": "function"
        },
        "index": {
          "hierarchy": "Precis HsSrc Utils",
          "module": "Precis.HsSrc.Utils",
          "name": "extractSpecialCon",
          "normalized": "SpecialCon-\u003eString",
          "package": "precis",
          "partial": "Special Con",
          "signature": "SpecialCon-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-HsSrc-Utils.html#v:extractSpecialCon"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Precis.HsSrc.Utils",
          "name": "getModuleName",
          "package": "precis",
          "signature": "Module -\u003e ModuleName",
          "source": "src/Precis-HsSrc-Utils.html#getModuleName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Precis HsSrc Utils",
          "module": "Precis.HsSrc.Utils",
          "name": "getModuleName",
          "normalized": "Module-\u003eModuleName",
          "package": "precis",
          "partial": "Module Name",
          "signature": "Module-\u003eModuleName",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-HsSrc-Utils.html#v:getModuleName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Precis.HsSrc.Utils",
          "name": "hsppList",
          "package": "precis",
          "signature": "[a] -\u003e String",
          "source": "src/Precis-HsSrc-Utils.html#hsppList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Precis HsSrc Utils",
          "module": "Precis.HsSrc.Utils",
          "name": "hsppList",
          "normalized": "[a]-\u003eString",
          "package": "precis",
          "partial": "List",
          "signature": "[a]-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-HsSrc-Utils.html#v:hsppList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Precis.HsSrc.Utils",
          "name": "namedDecls",
          "package": "precis",
          "signature": "Decl -\u003e [(StrName, TextRep)]",
          "source": "src/Precis-HsSrc-Utils.html#namedDecls",
          "type": "function"
        },
        "index": {
          "hierarchy": "Precis HsSrc Utils",
          "module": "Precis.HsSrc.Utils",
          "name": "namedDecls",
          "normalized": "Decl-\u003e[(StrName,TextRep)]",
          "package": "precis",
          "partial": "Decls",
          "signature": "Decl-\u003e[(StrName,TextRep)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-HsSrc-Utils.html#v:namedDecls"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Precis.HsSrc.Utils",
          "name": "parseModuleWithExts",
          "package": "precis",
          "signature": "[Extension] -\u003e FilePath -\u003e String -\u003e ParseResult Module",
          "source": "src/Precis-HsSrc-Utils.html#parseModuleWithExts",
          "type": "function"
        },
        "index": {
          "hierarchy": "Precis HsSrc Utils",
          "module": "Precis.HsSrc.Utils",
          "name": "parseModuleWithExts",
          "normalized": "[Extension]-\u003eFilePath-\u003eString-\u003eParseResult Module",
          "package": "precis",
          "partial": "Module With Exts",
          "signature": "[Extension]-\u003eFilePath-\u003eString-\u003eParseResult Module",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-HsSrc-Utils.html#v:parseModuleWithExts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Precis.HsSrc.Utils",
          "name": "readModule",
          "package": "precis",
          "signature": "MacroExpandedSrcFile -\u003e Either ModuleParseError Module",
          "source": "src/Precis-HsSrc-Utils.html#readModule",
          "type": "function"
        },
        "index": {
          "hierarchy": "Precis HsSrc Utils",
          "module": "Precis.HsSrc.Utils",
          "name": "readModule",
          "normalized": "MacroExpandedSrcFile-\u003eEither ModuleParseError Module",
          "package": "precis",
          "partial": "Module",
          "signature": "MacroExpandedSrcFile-\u003eEither ModuleParseError Module",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-HsSrc-Utils.html#v:readModule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCreating a report in HTML...\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Precis.HtmlReport",
          "name": "HtmlReport",
          "package": "precis",
          "source": "src/Precis-HtmlReport.html",
          "type": "module"
        },
        "index": {
          "description": "Creating report in HTML",
          "hierarchy": "Precis HtmlReport",
          "module": "Precis.HtmlReport",
          "name": "HtmlReport",
          "package": "precis",
          "partial": "Html Report",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-HtmlReport.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Precis.HtmlReport",
          "name": "makeFullReport",
          "package": "precis",
          "signature": "ModuleParseFunction -\u003e Package -\u003e Package -\u003e IO (Html, TextSummary)",
          "source": "src/Precis-HtmlReport.html#makeFullReport",
          "type": "function"
        },
        "index": {
          "hierarchy": "Precis HtmlReport",
          "module": "Precis.HtmlReport",
          "name": "makeFullReport",
          "normalized": "ModuleParseFunction-\u003ePackage-\u003ePackage-\u003eIO(Html,TextSummary)",
          "package": "precis",
          "partial": "Full Report",
          "signature": "ModuleParseFunction-\u003ePackage-\u003ePackage-\u003eIO(Html,TextSummary)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-HtmlReport.html#v:makeFullReport"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Precis.HtmlReport",
          "name": "makeShortReport",
          "package": "precis",
          "signature": "ModuleParseFunction -\u003e Package -\u003e Package -\u003e IO TextSummary",
          "source": "src/Precis-HtmlReport.html#makeShortReport",
          "type": "function"
        },
        "index": {
          "hierarchy": "Precis HtmlReport",
          "module": "Precis.HtmlReport",
          "name": "makeShortReport",
          "normalized": "ModuleParseFunction-\u003ePackage-\u003ePackage-\u003eIO TextSummary",
          "package": "precis",
          "partial": "Short Report",
          "signature": "ModuleParseFunction-\u003ePackage-\u003ePackage-\u003eIO TextSummary",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-HtmlReport.html#v:makeShortReport"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Precis.ModuleProperties",
          "name": "ModuleProperties",
          "package": "precis",
          "source": "src/Precis-ModuleProperties.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Precis ModuleProperties",
          "module": "Precis.ModuleProperties",
          "name": "ModuleProperties",
          "package": "precis",
          "partial": "Module Properties",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-ModuleProperties.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Precis.ModuleProperties",
          "name": "diffDataDecls",
          "package": "precis",
          "signature": "Module -\u003e Module -\u003e [Edit4 DatatypeDecl]",
          "source": "src/Precis-ModuleProperties.html#diffDataDecls",
          "type": "function"
        },
        "index": {
          "hierarchy": "Precis ModuleProperties",
          "module": "Precis.ModuleProperties",
          "name": "diffDataDecls",
          "normalized": "Module-\u003eModule-\u003e[Edit DatatypeDecl]",
          "package": "precis",
          "partial": "Data Decls",
          "signature": "Module-\u003eModule-\u003e[Edit DatatypeDecl]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-ModuleProperties.html#v:diffDataDecls"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Precis.ModuleProperties",
          "name": "diffExports",
          "package": "precis",
          "signature": "Module -\u003e Module -\u003e [Edit4 ExportItem]",
          "source": "src/Precis-ModuleProperties.html#diffExports",
          "type": "function"
        },
        "index": {
          "hierarchy": "Precis ModuleProperties",
          "module": "Precis.ModuleProperties",
          "name": "diffExports",
          "normalized": "Module-\u003eModule-\u003e[Edit ExportItem]",
          "package": "precis",
          "partial": "Exports",
          "signature": "Module-\u003eModule-\u003e[Edit ExportItem]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-ModuleProperties.html#v:diffExports"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Precis.ModuleProperties",
          "name": "diffExposedModules",
          "package": "precis",
          "signature": "Package -\u003e Package -\u003e [Edit3 ModName]",
          "source": "src/Precis-ModuleProperties.html#diffExposedModules",
          "type": "function"
        },
        "index": {
          "hierarchy": "Precis ModuleProperties",
          "module": "Precis.ModuleProperties",
          "name": "diffExposedModules",
          "normalized": "Package-\u003ePackage-\u003e[Edit ModName]",
          "package": "precis",
          "partial": "Exposed Modules",
          "signature": "Package-\u003ePackage-\u003e[Edit ModName]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-ModuleProperties.html#v:diffExposedModules"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Precis.ModuleProperties",
          "name": "diffExposedSrcFiles",
          "package": "precis",
          "signature": "[HsSourceFile] -\u003e [HsSourceFile] -\u003e [Edit4 HsSourceFile]",
          "source": "src/Precis-ModuleProperties.html#diffExposedSrcFiles",
          "type": "function"
        },
        "index": {
          "hierarchy": "Precis ModuleProperties",
          "module": "Precis.ModuleProperties",
          "name": "diffExposedSrcFiles",
          "normalized": "[HsSourceFile]-\u003e[HsSourceFile]-\u003e[Edit HsSourceFile]",
          "package": "precis",
          "partial": "Exposed Src Files",
          "signature": "[HsSourceFile]-\u003e[HsSourceFile]-\u003e[Edit HsSourceFile]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-ModuleProperties.html#v:diffExposedSrcFiles"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Precis.ModuleProperties",
          "name": "diffInstances",
          "package": "precis",
          "signature": "Module -\u003e Module -\u003e [Edit4 InstanceDecl]",
          "source": "src/Precis-ModuleProperties.html#diffInstances",
          "type": "function"
        },
        "index": {
          "hierarchy": "Precis ModuleProperties",
          "module": "Precis.ModuleProperties",
          "name": "diffInstances",
          "normalized": "Module-\u003eModule-\u003e[Edit InstanceDecl]",
          "package": "precis",
          "partial": "Instances",
          "signature": "Module-\u003eModule-\u003e[Edit InstanceDecl]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-ModuleProperties.html#v:diffInstances"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Precis.ModuleProperties",
          "name": "diffInternalModules",
          "package": "precis",
          "signature": "Package -\u003e Package -\u003e [Edit3 ModName]",
          "source": "src/Precis-ModuleProperties.html#diffInternalModules",
          "type": "function"
        },
        "index": {
          "hierarchy": "Precis ModuleProperties",
          "module": "Precis.ModuleProperties",
          "name": "diffInternalModules",
          "normalized": "Package-\u003ePackage-\u003e[Edit ModName]",
          "package": "precis",
          "partial": "Internal Modules",
          "signature": "Package-\u003ePackage-\u003e[Edit ModName]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-ModuleProperties.html#v:diffInternalModules"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Precis.ModuleProperties",
          "name": "diffTypeSigs",
          "package": "precis",
          "signature": "Module -\u003e Module -\u003e [Edit4 TypeSigDecl]",
          "source": "src/Precis-ModuleProperties.html#diffTypeSigs",
          "type": "function"
        },
        "index": {
          "hierarchy": "Precis ModuleProperties",
          "module": "Precis.ModuleProperties",
          "name": "diffTypeSigs",
          "normalized": "Module-\u003eModule-\u003e[Edit TypeSigDecl]",
          "package": "precis",
          "partial": "Type Sigs",
          "signature": "Module-\u003eModule-\u003e[Edit TypeSigDecl]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-ModuleProperties.html#v:diffTypeSigs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eLogging monad for collecting report fragments\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Precis.ReportMonad",
          "name": "ReportMonad",
          "package": "precis",
          "source": "src/Precis-ReportMonad.html",
          "type": "module"
        },
        "index": {
          "description": "Logging monad for collecting report fragments",
          "hierarchy": "Precis ReportMonad",
          "module": "Precis.ReportMonad",
          "name": "ReportMonad",
          "package": "precis",
          "partial": "Report Monad",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-ReportMonad.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Precis.ReportMonad",
          "name": "CMP",
          "package": "precis",
          "source": "src/Precis-ReportMonad.html#CMP",
          "type": "data"
        },
        "index": {
          "hierarchy": "Precis ReportMonad",
          "module": "Precis.ReportMonad",
          "name": "CMP",
          "package": "precis",
          "partial": "CMP",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-ReportMonad.html#t:CMP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Precis.ReportMonad",
          "name": "ChangeStats",
          "package": "precis",
          "source": "src/Precis-ReportMonad.html#ChangeStats",
          "type": "data"
        },
        "index": {
          "hierarchy": "Precis ReportMonad",
          "module": "Precis.ReportMonad",
          "name": "ChangeStats",
          "package": "precis",
          "partial": "Change Stats",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-ReportMonad.html#t:ChangeStats"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Precis.ReportMonad",
          "name": "Log",
          "package": "precis",
          "source": "src/Precis-ReportMonad.html#Log",
          "type": "type"
        },
        "index": {
          "hierarchy": "Precis ReportMonad",
          "module": "Precis.ReportMonad",
          "name": "Log",
          "package": "precis",
          "partial": "Log",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-ReportMonad.html#t:Log"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Precis.ReportMonad",
          "name": "ModuleParseFunction",
          "package": "precis",
          "source": "src/Precis-ReportMonad.html#ModuleParseFunction",
          "type": "type"
        },
        "index": {
          "hierarchy": "Precis ReportMonad",
          "module": "Precis.ReportMonad",
          "name": "ModuleParseFunction",
          "package": "precis",
          "partial": "Module Parse Function",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-ReportMonad.html#t:ModuleParseFunction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Precis.ReportMonad",
          "name": "ReportLevel",
          "package": "precis",
          "source": "src/Precis-ReportMonad.html#ReportLevel",
          "type": "data"
        },
        "index": {
          "hierarchy": "Precis ReportMonad",
          "module": "Precis.ReportMonad",
          "name": "ReportLevel",
          "package": "precis",
          "partial": "Report Level",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-ReportMonad.html#t:ReportLevel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Precis.ReportMonad",
          "name": "ReportM",
          "package": "precis",
          "source": "src/Precis-ReportMonad.html#ReportM",
          "type": "data"
        },
        "index": {
          "hierarchy": "Precis ReportMonad",
          "module": "Precis.ReportMonad",
          "name": "ReportM",
          "package": "precis",
          "partial": "Report",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-ReportMonad.html#t:ReportM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Precis.ReportMonad",
          "name": "ChangeStats",
          "package": "precis",
          "signature": "ChangeStats",
          "source": "src/Precis-ReportMonad.html#ChangeStats",
          "type": "function"
        },
        "index": {
          "hierarchy": "Precis ReportMonad",
          "module": "Precis.ReportMonad",
          "name": "ChangeStats",
          "package": "precis",
          "partial": "Change Stats",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-ReportMonad.html#v:ChangeStats"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Precis.ReportMonad",
          "name": "JUST_MSG",
          "package": "precis",
          "signature": "JUST_MSG",
          "source": "src/Precis-ReportMonad.html#ReportLevel",
          "type": "function"
        },
        "index": {
          "hierarchy": "Precis ReportMonad",
          "module": "Precis.ReportMonad",
          "name": "JUST_MSG",
          "package": "precis",
          "partial": "JUST MSG",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-ReportMonad.html#v:JUST_MSG"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Precis.ReportMonad",
          "name": "MSG_AND_HTML",
          "package": "precis",
          "signature": "MSG_AND_HTML",
          "source": "src/Precis-ReportMonad.html#ReportLevel",
          "type": "function"
        },
        "index": {
          "hierarchy": "Precis ReportMonad",
          "module": "Precis.ReportMonad",
          "name": "MSG_AND_HTML",
          "package": "precis",
          "partial": "MSG AND HTML",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-ReportMonad.html#v:MSG_AND_HTML"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Precis.ReportMonad",
          "name": "NEW",
          "package": "precis",
          "signature": "NEW a",
          "source": "src/Precis-ReportMonad.html#CMP",
          "type": "function"
        },
        "index": {
          "hierarchy": "Precis ReportMonad",
          "module": "Precis.ReportMonad",
          "name": "NEW",
          "package": "precis",
          "partial": "NEW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-ReportMonad.html#v:NEW"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Precis.ReportMonad",
          "name": "OLD",
          "package": "precis",
          "signature": "OLD a",
          "source": "src/Precis-ReportMonad.html#CMP",
          "type": "function"
        },
        "index": {
          "hierarchy": "Precis ReportMonad",
          "module": "Precis.ReportMonad",
          "name": "OLD",
          "package": "precis",
          "partial": "OLD",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-ReportMonad.html#v:OLD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Precis.ReportMonad",
          "name": "askParseFun",
          "package": "precis",
          "signature": "ReportM ModuleParseFunction",
          "source": "src/Precis-ReportMonad.html#askParseFun",
          "type": "function"
        },
        "index": {
          "hierarchy": "Precis ReportMonad",
          "module": "Precis.ReportMonad",
          "name": "askParseFun",
          "package": "precis",
          "partial": "Parse Fun",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-ReportMonad.html#v:askParseFun"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Precis.ReportMonad",
          "name": "changed_datatypes",
          "package": "precis",
          "signature": "Int",
          "source": "src/Precis-ReportMonad.html#ChangeStats",
          "type": "function"
        },
        "index": {
          "hierarchy": "Precis ReportMonad",
          "module": "Precis.ReportMonad",
          "name": "changed_datatypes",
          "package": "precis",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-ReportMonad.html#v:changed_datatypes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Precis.ReportMonad",
          "name": "changed_exports",
          "package": "precis",
          "signature": "Int",
          "source": "src/Precis-ReportMonad.html#ChangeStats",
          "type": "function"
        },
        "index": {
          "hierarchy": "Precis ReportMonad",
          "module": "Precis.ReportMonad",
          "name": "changed_exports",
          "package": "precis",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-ReportMonad.html#v:changed_exports"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Precis.ReportMonad",
          "name": "changed_instances",
          "package": "precis",
          "signature": "Int",
          "source": "src/Precis-ReportMonad.html#ChangeStats",
          "type": "function"
        },
        "index": {
          "hierarchy": "Precis ReportMonad",
          "module": "Precis.ReportMonad",
          "name": "changed_instances",
          "package": "precis",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-ReportMonad.html#v:changed_instances"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Precis.ReportMonad",
          "name": "changed_typesigs",
          "package": "precis",
          "signature": "Int",
          "source": "src/Precis-ReportMonad.html#ChangeStats",
          "type": "function"
        },
        "index": {
          "hierarchy": "Precis ReportMonad",
          "module": "Precis.ReportMonad",
          "name": "changed_typesigs",
          "package": "precis",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-ReportMonad.html#v:changed_typesigs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Precis.ReportMonad",
          "name": "execReportM",
          "package": "precis",
          "signature": "ModuleParseFunction -\u003e ReportLevel -\u003e ReportM a -\u003e IO Log",
          "source": "src/Precis-ReportMonad.html#execReportM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Precis ReportMonad",
          "module": "Precis.ReportMonad",
          "name": "execReportM",
          "normalized": "ModuleParseFunction-\u003eReportLevel-\u003eReportM a-\u003eIO Log",
          "package": "precis",
          "partial": "Report",
          "signature": "ModuleParseFunction-\u003eReportLevel-\u003eReportM a-\u003eIO Log",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-ReportMonad.html#v:execReportM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Precis.ReportMonad",
          "name": "incrChangedDatatypes",
          "package": "precis",
          "signature": "ReportM ()",
          "source": "src/Precis-ReportMonad.html#incrChangedDatatypes",
          "type": "function"
        },
        "index": {
          "hierarchy": "Precis ReportMonad",
          "module": "Precis.ReportMonad",
          "name": "incrChangedDatatypes",
          "normalized": "ReportM()",
          "package": "precis",
          "partial": "Changed Datatypes",
          "signature": "ReportM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-ReportMonad.html#v:incrChangedDatatypes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Precis.ReportMonad",
          "name": "incrChangedExports",
          "package": "precis",
          "signature": "ReportM ()",
          "source": "src/Precis-ReportMonad.html#incrChangedExports",
          "type": "function"
        },
        "index": {
          "hierarchy": "Precis ReportMonad",
          "module": "Precis.ReportMonad",
          "name": "incrChangedExports",
          "normalized": "ReportM()",
          "package": "precis",
          "partial": "Changed Exports",
          "signature": "ReportM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-ReportMonad.html#v:incrChangedExports"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Precis.ReportMonad",
          "name": "incrChangedInstances",
          "package": "precis",
          "signature": "ReportM ()",
          "source": "src/Precis-ReportMonad.html#incrChangedInstances",
          "type": "function"
        },
        "index": {
          "hierarchy": "Precis ReportMonad",
          "module": "Precis.ReportMonad",
          "name": "incrChangedInstances",
          "normalized": "ReportM()",
          "package": "precis",
          "partial": "Changed Instances",
          "signature": "ReportM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-ReportMonad.html#v:incrChangedInstances"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Precis.ReportMonad",
          "name": "incrChangedTypeSigs",
          "package": "precis",
          "signature": "ReportM ()",
          "source": "src/Precis-ReportMonad.html#incrChangedTypeSigs",
          "type": "function"
        },
        "index": {
          "hierarchy": "Precis ReportMonad",
          "module": "Precis.ReportMonad",
          "name": "incrChangedTypeSigs",
          "normalized": "ReportM()",
          "package": "precis",
          "partial": "Changed Type Sigs",
          "signature": "ReportM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-ReportMonad.html#v:incrChangedTypeSigs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Precis.ReportMonad",
          "name": "incrRemovedDatatypes",
          "package": "precis",
          "signature": "ReportM ()",
          "source": "src/Precis-ReportMonad.html#incrRemovedDatatypes",
          "type": "function"
        },
        "index": {
          "hierarchy": "Precis ReportMonad",
          "module": "Precis.ReportMonad",
          "name": "incrRemovedDatatypes",
          "normalized": "ReportM()",
          "package": "precis",
          "partial": "Removed Datatypes",
          "signature": "ReportM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-ReportMonad.html#v:incrRemovedDatatypes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Precis.ReportMonad",
          "name": "incrRemovedExports",
          "package": "precis",
          "signature": "ReportM ()",
          "source": "src/Precis-ReportMonad.html#incrRemovedExports",
          "type": "function"
        },
        "index": {
          "hierarchy": "Precis ReportMonad",
          "module": "Precis.ReportMonad",
          "name": "incrRemovedExports",
          "normalized": "ReportM()",
          "package": "precis",
          "partial": "Removed Exports",
          "signature": "ReportM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-ReportMonad.html#v:incrRemovedExports"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Precis.ReportMonad",
          "name": "incrRemovedInstances",
          "package": "precis",
          "signature": "ReportM ()",
          "source": "src/Precis-ReportMonad.html#incrRemovedInstances",
          "type": "function"
        },
        "index": {
          "hierarchy": "Precis ReportMonad",
          "module": "Precis.ReportMonad",
          "name": "incrRemovedInstances",
          "normalized": "ReportM()",
          "package": "precis",
          "partial": "Removed Instances",
          "signature": "ReportM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-ReportMonad.html#v:incrRemovedInstances"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Precis.ReportMonad",
          "name": "incrRemovedModules",
          "package": "precis",
          "signature": "ReportM ()",
          "source": "src/Precis-ReportMonad.html#incrRemovedModules",
          "type": "function"
        },
        "index": {
          "hierarchy": "Precis ReportMonad",
          "module": "Precis.ReportMonad",
          "name": "incrRemovedModules",
          "normalized": "ReportM()",
          "package": "precis",
          "partial": "Removed Modules",
          "signature": "ReportM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-ReportMonad.html#v:incrRemovedModules"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Precis.ReportMonad",
          "name": "incrRemovedTypeSigs",
          "package": "precis",
          "signature": "ReportM ()",
          "source": "src/Precis-ReportMonad.html#incrRemovedTypeSigs",
          "type": "function"
        },
        "index": {
          "hierarchy": "Precis ReportMonad",
          "module": "Precis.ReportMonad",
          "name": "incrRemovedTypeSigs",
          "normalized": "ReportM()",
          "package": "precis",
          "partial": "Removed Type Sigs",
          "signature": "ReportM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-ReportMonad.html#v:incrRemovedTypeSigs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Precis.ReportMonad",
          "name": "liftIO",
          "package": "precis",
          "signature": "IO a -\u003e ReportM a",
          "source": "src/Precis-ReportMonad.html#liftIO",
          "type": "function"
        },
        "index": {
          "hierarchy": "Precis ReportMonad",
          "module": "Precis.ReportMonad",
          "name": "liftIO",
          "normalized": "IO a-\u003eReportM a",
          "package": "precis",
          "partial": "IO",
          "signature": "IO a-\u003eReportM a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-ReportMonad.html#v:liftIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Precis.ReportMonad",
          "name": "removed_datatypes",
          "package": "precis",
          "signature": "Int",
          "source": "src/Precis-ReportMonad.html#ChangeStats",
          "type": "function"
        },
        "index": {
          "hierarchy": "Precis ReportMonad",
          "module": "Precis.ReportMonad",
          "name": "removed_datatypes",
          "package": "precis",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-ReportMonad.html#v:removed_datatypes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Precis.ReportMonad",
          "name": "removed_exports",
          "package": "precis",
          "signature": "Int",
          "source": "src/Precis-ReportMonad.html#ChangeStats",
          "type": "function"
        },
        "index": {
          "hierarchy": "Precis ReportMonad",
          "module": "Precis.ReportMonad",
          "name": "removed_exports",
          "package": "precis",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-ReportMonad.html#v:removed_exports"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Precis.ReportMonad",
          "name": "removed_instances",
          "package": "precis",
          "signature": "Int",
          "source": "src/Precis-ReportMonad.html#ChangeStats",
          "type": "function"
        },
        "index": {
          "hierarchy": "Precis ReportMonad",
          "module": "Precis.ReportMonad",
          "name": "removed_instances",
          "package": "precis",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-ReportMonad.html#v:removed_instances"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Precis.ReportMonad",
          "name": "removed_mods",
          "package": "precis",
          "signature": "Int",
          "source": "src/Precis-ReportMonad.html#ChangeStats",
          "type": "function"
        },
        "index": {
          "hierarchy": "Precis ReportMonad",
          "module": "Precis.ReportMonad",
          "name": "removed_mods",
          "package": "precis",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-ReportMonad.html#v:removed_mods"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Precis.ReportMonad",
          "name": "removed_typesigs",
          "package": "precis",
          "signature": "Int",
          "source": "src/Precis-ReportMonad.html#ChangeStats",
          "type": "function"
        },
        "index": {
          "hierarchy": "Precis ReportMonad",
          "module": "Precis.ReportMonad",
          "name": "removed_typesigs",
          "package": "precis",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-ReportMonad.html#v:removed_typesigs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Precis.ReportMonad",
          "name": "runReportM",
          "package": "precis",
          "signature": "ModuleParseFunction -\u003e ReportLevel -\u003e ReportM a -\u003e IO (a, Log)",
          "source": "src/Precis-ReportMonad.html#runReportM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Precis ReportMonad",
          "module": "Precis.ReportMonad",
          "name": "runReportM",
          "normalized": "ModuleParseFunction-\u003eReportLevel-\u003eReportM a-\u003eIO(a,Log)",
          "package": "precis",
          "partial": "Report",
          "signature": "ModuleParseFunction-\u003eReportLevel-\u003eReportM a-\u003eIO(a,Log)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-ReportMonad.html#v:runReportM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Precis.ReportMonad",
          "name": "tellHtml",
          "package": "precis",
          "signature": "Html -\u003e ReportM ()",
          "source": "src/Precis-ReportMonad.html#tellHtml",
          "type": "function"
        },
        "index": {
          "hierarchy": "Precis ReportMonad",
          "module": "Precis.ReportMonad",
          "name": "tellHtml",
          "normalized": "Html-\u003eReportM()",
          "package": "precis",
          "partial": "Html",
          "signature": "Html-\u003eReportM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-ReportMonad.html#v:tellHtml"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Precis.ReportMonad",
          "name": "tellParseFail",
          "package": "precis",
          "signature": "CMP StrName -\u003e ReportM ()",
          "source": "src/Precis-ReportMonad.html#tellParseFail",
          "type": "function"
        },
        "index": {
          "hierarchy": "Precis ReportMonad",
          "module": "Precis.ReportMonad",
          "name": "tellParseFail",
          "normalized": "CMP StrName-\u003eReportM()",
          "package": "precis",
          "partial": "Parse Fail",
          "signature": "CMP StrName-\u003eReportM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-ReportMonad.html#v:tellParseFail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Precis.ReportMonad",
          "name": "tellUnresolved",
          "package": "precis",
          "signature": "CMP StrName -\u003e ReportM ()",
          "source": "src/Precis-ReportMonad.html#tellUnresolved",
          "type": "function"
        },
        "index": {
          "hierarchy": "Precis ReportMonad",
          "module": "Precis.ReportMonad",
          "name": "tellUnresolved",
          "normalized": "CMP StrName-\u003eReportM()",
          "package": "precis",
          "partial": "Unresolved",
          "signature": "CMP StrName-\u003eReportM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-ReportMonad.html#v:tellUnresolved"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Precis.ReportMonad",
          "name": "unparseable_mods",
          "package": "precis",
          "signature": "[CMP StrName]",
          "source": "src/Precis-ReportMonad.html#ChangeStats",
          "type": "function"
        },
        "index": {
          "hierarchy": "Precis ReportMonad",
          "module": "Precis.ReportMonad",
          "name": "unparseable_mods",
          "normalized": "[CMP StrName]",
          "package": "precis",
          "signature": "[CMP StrName]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-ReportMonad.html#v:unparseable_mods"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Precis.ReportMonad",
          "name": "unresolved_mods",
          "package": "precis",
          "signature": "[CMP StrName]",
          "source": "src/Precis-ReportMonad.html#ChangeStats",
          "type": "function"
        },
        "index": {
          "hierarchy": "Precis ReportMonad",
          "module": "Precis.ReportMonad",
          "name": "unresolved_mods",
          "normalized": "[CMP StrName]",
          "package": "precis",
          "signature": "[CMP StrName]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-ReportMonad.html#v:unresolved_mods"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCreating a report in HTML...\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Precis.StyleSheet",
          "name": "StyleSheet",
          "package": "precis",
          "source": "src/Precis-StyleSheet.html",
          "type": "module"
        },
        "index": {
          "description": "Creating report in HTML",
          "hierarchy": "Precis StyleSheet",
          "module": "Precis.StyleSheet",
          "name": "StyleSheet",
          "package": "precis",
          "partial": "Style Sheet",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-StyleSheet.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Precis.StyleSheet",
          "name": "inline_stylesheet",
          "package": "precis",
          "signature": "Html",
          "source": "src/Precis-StyleSheet.html#inline_stylesheet",
          "type": "function"
        },
        "index": {
          "hierarchy": "Precis StyleSheet",
          "module": "Precis.StyleSheet",
          "name": "inline_stylesheet",
          "package": "precis",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-StyleSheet.html#v:inline_stylesheet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ePrint ChangeStats to the console.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Precis.TextOutput",
          "name": "TextOutput",
          "package": "precis",
          "source": "src/Precis-TextOutput.html",
          "type": "module"
        },
        "index": {
          "description": "Print ChangeStats to the console",
          "hierarchy": "Precis TextOutput",
          "module": "Precis.TextOutput",
          "name": "TextOutput",
          "package": "precis",
          "partial": "Text Output",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-TextOutput.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Precis.TextOutput",
          "name": "comparingMsg",
          "package": "precis",
          "signature": "Package -\u003e Package -\u003e ShowS",
          "source": "src/Precis-TextOutput.html#comparingMsg",
          "type": "function"
        },
        "index": {
          "hierarchy": "Precis TextOutput",
          "module": "Precis.TextOutput",
          "name": "comparingMsg",
          "normalized": "Package-\u003ePackage-\u003eShowS",
          "package": "precis",
          "partial": "Msg",
          "signature": "Package-\u003ePackage-\u003eShowS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-TextOutput.html#v:comparingMsg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Precis.TextOutput",
          "name": "showChangeStats",
          "package": "precis",
          "signature": "ChangeStats -\u003e ShowS",
          "source": "src/Precis-TextOutput.html#showChangeStats",
          "type": "function"
        },
        "index": {
          "hierarchy": "Precis TextOutput",
          "module": "Precis.TextOutput",
          "name": "showChangeStats",
          "normalized": "ChangeStats-\u003eShowS",
          "package": "precis",
          "partial": "Change Stats",
          "signature": "ChangeStats-\u003eShowS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-TextOutput.html#v:showChangeStats"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eUtils\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Precis.Utils.Common",
          "name": "Common",
          "package": "precis",
          "source": "src/Precis-Utils-Common.html",
          "type": "module"
        },
        "index": {
          "description": "Utils",
          "hierarchy": "Precis Utils Common",
          "module": "Precis.Utils.Common",
          "name": "Common",
          "package": "precis",
          "partial": "Common",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-Utils-Common.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Precis.Utils.Common",
          "name": "H",
          "package": "precis",
          "source": "src/Precis-Utils-Common.html#H",
          "type": "type"
        },
        "index": {
          "hierarchy": "Precis Utils Common",
          "module": "Precis.Utils.Common",
          "name": "H",
          "package": "precis",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-Utils-Common.html#t:H"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Precis.Utils.Common",
          "name": "appendH",
          "package": "precis",
          "signature": "H a -\u003e H a -\u003e H a",
          "source": "src/Precis-Utils-Common.html#appendH",
          "type": "function"
        },
        "index": {
          "hierarchy": "Precis Utils Common",
          "module": "Precis.Utils.Common",
          "name": "appendH",
          "normalized": "H a-\u003eH a-\u003eH a",
          "package": "precis",
          "signature": "H a-\u003eH a-\u003eH a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-Utils-Common.html#v:appendH"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Precis.Utils.Common",
          "name": "concatH",
          "package": "precis",
          "signature": "[H a] -\u003e H a",
          "source": "src/Precis-Utils-Common.html#concatH",
          "type": "function"
        },
        "index": {
          "hierarchy": "Precis Utils Common",
          "module": "Precis.Utils.Common",
          "name": "concatH",
          "normalized": "[H a]-\u003eH a",
          "package": "precis",
          "signature": "[H a]-\u003eH a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-Utils-Common.html#v:concatH"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Precis.Utils.Common",
          "name": "consH",
          "package": "precis",
          "signature": "a -\u003e H a -\u003e H a",
          "source": "src/Precis-Utils-Common.html#consH",
          "type": "function"
        },
        "index": {
          "hierarchy": "Precis Utils Common",
          "module": "Precis.Utils.Common",
          "name": "consH",
          "normalized": "a-\u003eH a-\u003eH a",
          "package": "precis",
          "signature": "a-\u003eH a-\u003eH a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-Utils-Common.html#v:consH"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Precis.Utils.Common",
          "name": "emptyH",
          "package": "precis",
          "signature": "H a",
          "source": "src/Precis-Utils-Common.html#emptyH",
          "type": "function"
        },
        "index": {
          "hierarchy": "Precis Utils Common",
          "module": "Precis.Utils.Common",
          "name": "emptyH",
          "package": "precis",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-Utils-Common.html#v:emptyH"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Precis.Utils.Common",
          "name": "fromListH",
          "package": "precis",
          "signature": "[a] -\u003e H a",
          "source": "src/Precis-Utils-Common.html#fromListH",
          "type": "function"
        },
        "index": {
          "hierarchy": "Precis Utils Common",
          "module": "Precis.Utils.Common",
          "name": "fromListH",
          "normalized": "[a]-\u003eH a",
          "package": "precis",
          "partial": "List",
          "signature": "[a]-\u003eH a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-Utils-Common.html#v:fromListH"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Precis.Utils.Common",
          "name": "mapLeft",
          "package": "precis",
          "signature": "(a -\u003e s) -\u003e Either a b -\u003e Either s b",
          "source": "src/Precis-Utils-Common.html#mapLeft",
          "type": "function"
        },
        "index": {
          "hierarchy": "Precis Utils Common",
          "module": "Precis.Utils.Common",
          "name": "mapLeft",
          "normalized": "(a-\u003eb)-\u003eEither a c-\u003eEither b c",
          "package": "precis",
          "partial": "Left",
          "signature": "(a-\u003es)-\u003eEither a b-\u003eEither s b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-Utils-Common.html#v:mapLeft"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Precis.Utils.Common",
          "name": "mapRight",
          "package": "precis",
          "signature": "(b -\u003e t) -\u003e Either a b -\u003e Either a t",
          "source": "src/Precis-Utils-Common.html#mapRight",
          "type": "function"
        },
        "index": {
          "hierarchy": "Precis Utils Common",
          "module": "Precis.Utils.Common",
          "name": "mapRight",
          "normalized": "(a-\u003eb)-\u003eEither c a-\u003eEither c b",
          "package": "precis",
          "partial": "Right",
          "signature": "(b-\u003et)-\u003eEither a b-\u003eEither a t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-Utils-Common.html#v:mapRight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Precis.Utils.Common",
          "name": "onSuccessM",
          "package": "precis",
          "signature": "m (Either a b) -\u003e (b -\u003e m c) -\u003e m (Either a c)",
          "source": "src/Precis-Utils-Common.html#onSuccessM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Precis Utils Common",
          "module": "Precis.Utils.Common",
          "name": "onSuccessM",
          "normalized": "a(Either b c)-\u003e(c-\u003ea d)-\u003ea(Either b d)",
          "package": "precis",
          "partial": "Success",
          "signature": "m(Either a b)-\u003e(b-\u003em c)-\u003em(Either a c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-Utils-Common.html#v:onSuccessM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Precis.Utils.Common",
          "name": "pstar",
          "package": "precis",
          "signature": "(a -\u003e r -\u003e ans) -\u003e (r -\u003e a) -\u003e r -\u003e ans",
          "source": "src/Precis-Utils-Common.html#pstar",
          "type": "function"
        },
        "index": {
          "hierarchy": "Precis Utils Common",
          "module": "Precis.Utils.Common",
          "name": "pstar",
          "normalized": "(a-\u003eb-\u003ec)-\u003e(b-\u003ea)-\u003eb-\u003ec",
          "package": "precis",
          "signature": "(a-\u003er-\u003eans)-\u003e(r-\u003ea)-\u003er-\u003eans",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-Utils-Common.html#v:pstar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Precis.Utils.Common",
          "name": "pstar2",
          "package": "precis",
          "signature": "(a -\u003e b -\u003e r -\u003e ans) -\u003e (r -\u003e a) -\u003e (r -\u003e b) -\u003e r -\u003e ans",
          "source": "src/Precis-Utils-Common.html#pstar2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Precis Utils Common",
          "module": "Precis.Utils.Common",
          "name": "pstar2",
          "normalized": "(a-\u003eb-\u003ec-\u003ed)-\u003e(c-\u003ea)-\u003e(c-\u003eb)-\u003ec-\u003ed",
          "package": "precis",
          "signature": "(a-\u003eb-\u003er-\u003eans)-\u003e(r-\u003ea)-\u003e(r-\u003eb)-\u003er-\u003eans",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-Utils-Common.html#v:pstar2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Precis.Utils.Common",
          "name": "snocH",
          "package": "precis",
          "signature": "H a -\u003e a -\u003e H a",
          "source": "src/Precis-Utils-Common.html#snocH",
          "type": "function"
        },
        "index": {
          "hierarchy": "Precis Utils Common",
          "module": "Precis.Utils.Common",
          "name": "snocH",
          "normalized": "H a-\u003ea-\u003eH a",
          "package": "precis",
          "signature": "H a-\u003ea-\u003eH a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-Utils-Common.html#v:snocH"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Precis.Utils.Common",
          "name": "star",
          "package": "precis",
          "signature": "(r -\u003e a) -\u003e (a -\u003e r -\u003e ans) -\u003e r -\u003e ans",
          "source": "src/Precis-Utils-Common.html#star",
          "type": "function"
        },
        "index": {
          "hierarchy": "Precis Utils Common",
          "module": "Precis.Utils.Common",
          "name": "star",
          "normalized": "(a-\u003eb)-\u003e(b-\u003ea-\u003ec)-\u003ea-\u003ec",
          "package": "precis",
          "signature": "(r-\u003ea)-\u003e(a-\u003er-\u003eans)-\u003er-\u003eans",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-Utils-Common.html#v:star"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Precis.Utils.Common",
          "name": "star2",
          "package": "precis",
          "signature": "(r -\u003e a) -\u003e (r -\u003e b) -\u003e (a -\u003e b -\u003e r -\u003e ans) -\u003e r -\u003e ans",
          "source": "src/Precis-Utils-Common.html#star2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Precis Utils Common",
          "module": "Precis.Utils.Common",
          "name": "star2",
          "normalized": "(a-\u003eb)-\u003e(a-\u003ec)-\u003e(b-\u003ec-\u003ea-\u003ed)-\u003ea-\u003ed",
          "package": "precis",
          "signature": "(r-\u003ea)-\u003e(r-\u003eb)-\u003e(a-\u003eb-\u003er-\u003eans)-\u003er-\u003eans",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-Utils-Common.html#v:star2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Precis.Utils.Common",
          "name": "toListH",
          "package": "precis",
          "signature": "H a -\u003e [a]",
          "source": "src/Precis-Utils-Common.html#toListH",
          "type": "function"
        },
        "index": {
          "hierarchy": "Precis Utils Common",
          "module": "Precis.Utils.Common",
          "name": "toListH",
          "normalized": "H a-\u003e[a]",
          "package": "precis",
          "partial": "List",
          "signature": "H a-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-Utils-Common.html#v:toListH"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Precis.Utils.Common",
          "name": "unlist",
          "package": "precis",
          "signature": "[String] -\u003e String",
          "source": "src/Precis-Utils-Common.html#unlist",
          "type": "function"
        },
        "index": {
          "hierarchy": "Precis Utils Common",
          "module": "Precis.Utils.Common",
          "name": "unlist",
          "normalized": "[String]-\u003eString",
          "package": "precis",
          "signature": "[String]-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-Utils-Common.html#v:unlist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTraverse a list as per \u003ccode\u003e\u003ca\u003emap\u003c/a\u003e\u003c/code\u003e applying the supplied function \n to each element, *but* pruduce a Hughes list as output.\n\u003c/p\u003e",
          "module": "Precis.Utils.Common",
          "name": "veloH",
          "package": "precis",
          "signature": "(a -\u003e b) -\u003e [a] -\u003e H b",
          "source": "src/Precis-Utils-Common.html#veloH",
          "type": "function"
        },
        "index": {
          "description": "Traverse list as per map applying the supplied function to each element but pruduce Hughes list as output",
          "hierarchy": "Precis Utils Common",
          "module": "Precis.Utils.Common",
          "name": "veloH",
          "normalized": "(a-\u003eb)-\u003e[a]-\u003eH b",
          "package": "precis",
          "signature": "(a-\u003eb)-\u003e[a]-\u003eH b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-Utils-Common.html#v:veloH"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Precis.Utils.Common",
          "name": "wrapH",
          "package": "precis",
          "signature": "a -\u003e H a",
          "source": "src/Precis-Utils-Common.html#wrapH",
          "type": "function"
        },
        "index": {
          "hierarchy": "Precis Utils Common",
          "module": "Precis.Utils.Common",
          "name": "wrapH",
          "normalized": "a-\u003eH a",
          "package": "precis",
          "signature": "a-\u003eH a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-Utils-Common.html#v:wrapH"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eALL NAMES PROVISIONAL...\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Precis.Utils.ControlOperators",
          "name": "ControlOperators",
          "package": "precis",
          "source": "src/Precis-Utils-ControlOperators.html",
          "type": "module"
        },
        "index": {
          "description": "ALL NAMES PROVISIONAL",
          "hierarchy": "Precis Utils ControlOperators",
          "module": "Precis.Utils.ControlOperators",
          "name": "ControlOperators",
          "package": "precis",
          "partial": "Control Operators",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-Utils-ControlOperators.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Precis.Utils.ControlOperators",
          "name": "elaborate",
          "package": "precis",
          "signature": "e -\u003e Maybe a -\u003e Either e a",
          "source": "src/Precis-Utils-ControlOperators.html#elaborate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Precis Utils ControlOperators",
          "module": "Precis.Utils.ControlOperators",
          "name": "elaborate",
          "normalized": "a-\u003eMaybe b-\u003eEither a b",
          "package": "precis",
          "signature": "e-\u003eMaybe a-\u003eEither e a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-Utils-ControlOperators.html#v:elaborate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply the function to the list\n\u003c/p\u003e",
          "module": "Precis.Utils.ControlOperators",
          "name": "firstSuccess",
          "package": "precis",
          "signature": "(a -\u003e m (Maybe b)) -\u003e [a] -\u003e m (Maybe b)",
          "source": "src/Precis-Utils-ControlOperators.html#firstSuccess",
          "type": "function"
        },
        "index": {
          "description": "Apply the function to the list",
          "hierarchy": "Precis Utils ControlOperators",
          "module": "Precis.Utils.ControlOperators",
          "name": "firstSuccess",
          "normalized": "(a-\u003eb(Maybe c))-\u003e[a]-\u003eb(Maybe c)",
          "package": "precis",
          "partial": "Success",
          "signature": "(a-\u003em(Maybe b))-\u003e[a]-\u003em(Maybe b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-Utils-ControlOperators.html#v:firstSuccess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Precis.Utils.ControlOperators",
          "name": "suppress",
          "package": "precis",
          "signature": "Either e a -\u003e Maybe a",
          "source": "src/Precis-Utils-ControlOperators.html#suppress",
          "type": "function"
        },
        "index": {
          "hierarchy": "Precis Utils ControlOperators",
          "module": "Precis.Utils.ControlOperators",
          "name": "suppress",
          "normalized": "Either a b-\u003eMaybe b",
          "package": "precis",
          "signature": "Either e a-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-Utils-ControlOperators.html#v:suppress"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Precis.Utils.ControlOperators",
          "name": "valid",
          "package": "precis",
          "signature": "(a -\u003e m Bool) -\u003e a -\u003e m (Maybe a)",
          "source": "src/Precis-Utils-ControlOperators.html#valid",
          "type": "function"
        },
        "index": {
          "hierarchy": "Precis Utils ControlOperators",
          "module": "Precis.Utils.ControlOperators",
          "name": "valid",
          "normalized": "(a-\u003eb Bool)-\u003ea-\u003eb(Maybe a)",
          "package": "precis",
          "signature": "(a-\u003em Bool)-\u003ea-\u003em(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-Utils-ControlOperators.html#v:valid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Precis.Utils.ControlOperators",
          "name": "validE",
          "package": "precis",
          "signature": "ex -\u003e (a -\u003e m Bool) -\u003e a -\u003e m (Either ex a)",
          "source": "src/Precis-Utils-ControlOperators.html#validE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Precis Utils ControlOperators",
          "module": "Precis.Utils.ControlOperators",
          "name": "validE",
          "normalized": "a-\u003e(b-\u003ec Bool)-\u003eb-\u003ec(Either a b)",
          "package": "precis",
          "signature": "ex-\u003e(a-\u003em Bool)-\u003ea-\u003em(Either ex a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-Utils-ControlOperators.html#v:validE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ePretty print combinators for ShowS\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Precis.Utils.PPShowS",
          "name": "PPShowS",
          "package": "precis",
          "source": "src/Precis-Utils-PPShowS.html",
          "type": "module"
        },
        "index": {
          "description": "Pretty print combinators for ShowS",
          "hierarchy": "Precis Utils PPShowS",
          "module": "Precis.Utils.PPShowS",
          "name": "PPShowS",
          "package": "precis",
          "partial": "PPShow",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-Utils-PPShowS.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Precis.Utils.PPShowS",
          "name": "(\u003c+\u003e)",
          "package": "precis",
          "signature": "ShowS -\u003e ShowS -\u003e ShowS",
          "source": "src/Precis-Utils-PPShowS.html#%3C%2B%3E",
          "type": "function"
        },
        "index": {
          "hierarchy": "Precis Utils PPShowS",
          "module": "Precis.Utils.PPShowS",
          "name": "(\u003c+\u003e) \u003c+\u003e",
          "normalized": "ShowS-\u003eShowS-\u003eShowS",
          "package": "precis",
          "signature": "ShowS-\u003eShowS-\u003eShowS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-Utils-PPShowS.html#v:-60--43--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Precis.Utils.PPShowS",
          "name": "(\u003c\u003e)",
          "package": "precis",
          "signature": "ShowS -\u003e ShowS -\u003e ShowS",
          "source": "src/Precis-Utils-PPShowS.html#%3C%3E",
          "type": "function"
        },
        "index": {
          "hierarchy": "Precis Utils PPShowS",
          "module": "Precis.Utils.PPShowS",
          "name": "(\u003c\u003e) \u003c\u003e",
          "normalized": "ShowS-\u003eShowS-\u003eShowS",
          "package": "precis",
          "signature": "ShowS-\u003eShowS-\u003eShowS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-Utils-PPShowS.html#v:-60--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Precis.Utils.PPShowS",
          "name": "angles",
          "package": "precis",
          "signature": "ShowS -\u003e ShowS",
          "source": "src/Precis-Utils-PPShowS.html#angles",
          "type": "function"
        },
        "index": {
          "hierarchy": "Precis Utils PPShowS",
          "module": "Precis.Utils.PPShowS",
          "name": "angles",
          "normalized": "ShowS-\u003eShowS",
          "package": "precis",
          "signature": "ShowS-\u003eShowS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-Utils-PPShowS.html#v:angles"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Precis.Utils.PPShowS",
          "name": "backslash",
          "package": "precis",
          "signature": "ShowS",
          "source": "src/Precis-Utils-PPShowS.html#backslash",
          "type": "function"
        },
        "index": {
          "hierarchy": "Precis Utils PPShowS",
          "module": "Precis.Utils.PPShowS",
          "name": "backslash",
          "package": "precis",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-Utils-PPShowS.html#v:backslash"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Precis.Utils.PPShowS",
          "name": "bar",
          "package": "precis",
          "signature": "ShowS",
          "source": "src/Precis-Utils-PPShowS.html#bar",
          "type": "function"
        },
        "index": {
          "hierarchy": "Precis Utils PPShowS",
          "module": "Precis.Utils.PPShowS",
          "name": "bar",
          "package": "precis",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-Utils-PPShowS.html#v:bar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Precis.Utils.PPShowS",
          "name": "braces",
          "package": "precis",
          "signature": "ShowS -\u003e ShowS",
          "source": "src/Precis-Utils-PPShowS.html#braces",
          "type": "function"
        },
        "index": {
          "hierarchy": "Precis Utils PPShowS",
          "module": "Precis.Utils.PPShowS",
          "name": "braces",
          "normalized": "ShowS-\u003eShowS",
          "package": "precis",
          "signature": "ShowS-\u003eShowS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-Utils-PPShowS.html#v:braces"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Precis.Utils.PPShowS",
          "name": "brackets",
          "package": "precis",
          "signature": "ShowS -\u003e ShowS",
          "source": "src/Precis-Utils-PPShowS.html#brackets",
          "type": "function"
        },
        "index": {
          "hierarchy": "Precis Utils PPShowS",
          "module": "Precis.Utils.PPShowS",
          "name": "brackets",
          "normalized": "ShowS-\u003eShowS",
          "package": "precis",
          "signature": "ShowS-\u003eShowS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-Utils-PPShowS.html#v:brackets"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Precis.Utils.PPShowS",
          "name": "char",
          "package": "precis",
          "signature": "Char -\u003e ShowS",
          "source": "src/Precis-Utils-PPShowS.html#char",
          "type": "function"
        },
        "index": {
          "hierarchy": "Precis Utils PPShowS",
          "module": "Precis.Utils.PPShowS",
          "name": "char",
          "normalized": "Char-\u003eShowS",
          "package": "precis",
          "signature": "Char-\u003eShowS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-Utils-PPShowS.html#v:char"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Precis.Utils.PPShowS",
          "name": "colon",
          "package": "precis",
          "signature": "ShowS",
          "source": "src/Precis-Utils-PPShowS.html#colon",
          "type": "function"
        },
        "index": {
          "hierarchy": "Precis Utils PPShowS",
          "module": "Precis.Utils.PPShowS",
          "name": "colon",
          "package": "precis",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-Utils-PPShowS.html#v:colon"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Precis.Utils.PPShowS",
          "name": "comma",
          "package": "precis",
          "signature": "ShowS",
          "source": "src/Precis-Utils-PPShowS.html#comma",
          "type": "function"
        },
        "index": {
          "hierarchy": "Precis Utils PPShowS",
          "module": "Precis.Utils.PPShowS",
          "name": "comma",
          "package": "precis",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-Utils-PPShowS.html#v:comma"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Precis.Utils.PPShowS",
          "name": "dblquote",
          "package": "precis",
          "signature": "ShowS",
          "source": "src/Precis-Utils-PPShowS.html#dblquote",
          "type": "function"
        },
        "index": {
          "hierarchy": "Precis Utils PPShowS",
          "module": "Precis.Utils.PPShowS",
          "name": "dblquote",
          "package": "precis",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-Utils-PPShowS.html#v:dblquote"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Precis.Utils.PPShowS",
          "name": "dot",
          "package": "precis",
          "signature": "ShowS",
          "source": "src/Precis-Utils-PPShowS.html#dot",
          "type": "function"
        },
        "index": {
          "hierarchy": "Precis Utils PPShowS",
          "module": "Precis.Utils.PPShowS",
          "name": "dot",
          "package": "precis",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-Utils-PPShowS.html#v:dot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Precis.Utils.PPShowS",
          "name": "dquotes",
          "package": "precis",
          "signature": "ShowS -\u003e ShowS",
          "source": "src/Precis-Utils-PPShowS.html#dquotes",
          "type": "function"
        },
        "index": {
          "hierarchy": "Precis Utils PPShowS",
          "module": "Precis.Utils.PPShowS",
          "name": "dquotes",
          "normalized": "ShowS-\u003eShowS",
          "package": "precis",
          "signature": "ShowS-\u003eShowS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-Utils-PPShowS.html#v:dquotes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Precis.Utils.PPShowS",
          "name": "empty",
          "package": "precis",
          "signature": "ShowS",
          "source": "src/Precis-Utils-PPShowS.html#empty",
          "type": "function"
        },
        "index": {
          "hierarchy": "Precis Utils PPShowS",
          "module": "Precis.Utils.PPShowS",
          "name": "empty",
          "package": "precis",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-Utils-PPShowS.html#v:empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Precis.Utils.PPShowS",
          "name": "encloseSep",
          "package": "precis",
          "signature": "ShowS -\u003e ShowS -\u003e ShowS -\u003e [ShowS] -\u003e ShowS",
          "source": "src/Precis-Utils-PPShowS.html#encloseSep",
          "type": "function"
        },
        "index": {
          "hierarchy": "Precis Utils PPShowS",
          "module": "Precis.Utils.PPShowS",
          "name": "encloseSep",
          "normalized": "ShowS-\u003eShowS-\u003eShowS-\u003e[ShowS]-\u003eShowS",
          "package": "precis",
          "partial": "Sep",
          "signature": "ShowS-\u003eShowS-\u003eShowS-\u003e[ShowS]-\u003eShowS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-Utils-PPShowS.html#v:encloseSep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Precis.Utils.PPShowS",
          "name": "equal",
          "package": "precis",
          "signature": "ShowS",
          "source": "src/Precis-Utils-PPShowS.html#equal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Precis Utils PPShowS",
          "module": "Precis.Utils.PPShowS",
          "name": "equal",
          "package": "precis",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-Utils-PPShowS.html#v:equal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Precis.Utils.PPShowS",
          "name": "hcat",
          "package": "precis",
          "signature": "[ShowS] -\u003e ShowS",
          "source": "src/Precis-Utils-PPShowS.html#hcat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Precis Utils PPShowS",
          "module": "Precis.Utils.PPShowS",
          "name": "hcat",
          "normalized": "[ShowS]-\u003eShowS",
          "package": "precis",
          "signature": "[ShowS]-\u003eShowS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-Utils-PPShowS.html#v:hcat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Precis.Utils.PPShowS",
          "name": "hsep",
          "package": "precis",
          "signature": "[ShowS] -\u003e ShowS",
          "source": "src/Precis-Utils-PPShowS.html#hsep",
          "type": "function"
        },
        "index": {
          "hierarchy": "Precis Utils PPShowS",
          "module": "Precis.Utils.PPShowS",
          "name": "hsep",
          "normalized": "[ShowS]-\u003eShowS",
          "package": "precis",
          "signature": "[ShowS]-\u003eShowS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-Utils-PPShowS.html#v:hsep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Precis.Utils.PPShowS",
          "name": "int",
          "package": "precis",
          "signature": "Int -\u003e ShowS",
          "source": "src/Precis-Utils-PPShowS.html#int",
          "type": "function"
        },
        "index": {
          "hierarchy": "Precis Utils PPShowS",
          "module": "Precis.Utils.PPShowS",
          "name": "int",
          "normalized": "Int-\u003eShowS",
          "package": "precis",
          "signature": "Int-\u003eShowS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-Utils-PPShowS.html#v:int"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Precis.Utils.PPShowS",
          "name": "langle",
          "package": "precis",
          "signature": "ShowS",
          "source": "src/Precis-Utils-PPShowS.html#langle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Precis Utils PPShowS",
          "module": "Precis.Utils.PPShowS",
          "name": "langle",
          "package": "precis",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-Utils-PPShowS.html#v:langle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Precis.Utils.PPShowS",
          "name": "lbrace",
          "package": "precis",
          "signature": "ShowS",
          "source": "src/Precis-Utils-PPShowS.html#lbrace",
          "type": "function"
        },
        "index": {
          "hierarchy": "Precis Utils PPShowS",
          "module": "Precis.Utils.PPShowS",
          "name": "lbrace",
          "package": "precis",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-Utils-PPShowS.html#v:lbrace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Precis.Utils.PPShowS",
          "name": "lbracket",
          "package": "precis",
          "signature": "ShowS",
          "source": "src/Precis-Utils-PPShowS.html#lbracket",
          "type": "function"
        },
        "index": {
          "hierarchy": "Precis Utils PPShowS",
          "module": "Precis.Utils.PPShowS",
          "name": "lbracket",
          "package": "precis",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-Utils-PPShowS.html#v:lbracket"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Precis.Utils.PPShowS",
          "name": "line",
          "package": "precis",
          "signature": "ShowS -\u003e ShowS -\u003e ShowS",
          "source": "src/Precis-Utils-PPShowS.html#line",
          "type": "function"
        },
        "index": {
          "hierarchy": "Precis Utils PPShowS",
          "module": "Precis.Utils.PPShowS",
          "name": "line",
          "normalized": "ShowS-\u003eShowS-\u003eShowS",
          "package": "precis",
          "signature": "ShowS-\u003eShowS-\u003eShowS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-Utils-PPShowS.html#v:line"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Precis.Utils.PPShowS",
          "name": "list",
          "package": "precis",
          "signature": "[ShowS] -\u003e ShowS",
          "source": "src/Precis-Utils-PPShowS.html#list",
          "type": "function"
        },
        "index": {
          "hierarchy": "Precis Utils PPShowS",
          "module": "Precis.Utils.PPShowS",
          "name": "list",
          "normalized": "[ShowS]-\u003eShowS",
          "package": "precis",
          "signature": "[ShowS]-\u003eShowS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-Utils-PPShowS.html#v:list"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Precis.Utils.PPShowS",
          "name": "lparen",
          "package": "precis",
          "signature": "ShowS",
          "source": "src/Precis-Utils-PPShowS.html#lparen",
          "type": "function"
        },
        "index": {
          "hierarchy": "Precis Utils PPShowS",
          "module": "Precis.Utils.PPShowS",
          "name": "lparen",
          "package": "precis",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-Utils-PPShowS.html#v:lparen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Precis.Utils.PPShowS",
          "name": "newline",
          "package": "precis",
          "signature": "ShowS",
          "source": "src/Precis-Utils-PPShowS.html#newline",
          "type": "function"
        },
        "index": {
          "hierarchy": "Precis Utils PPShowS",
          "module": "Precis.Utils.PPShowS",
          "name": "newline",
          "package": "precis",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-Utils-PPShowS.html#v:newline"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNote - this function evaluates the second arg and uses (++) \n via \u003ccode\u003e\u003ca\u003eshowString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Precis.Utils.PPShowS",
          "name": "nextLine",
          "package": "precis",
          "signature": "ShowS -\u003e ShowS -\u003e ShowS",
          "source": "src/Precis-Utils-PPShowS.html#nextLine",
          "type": "function"
        },
        "index": {
          "description": "Note this function evaluates the second arg and uses via showString",
          "hierarchy": "Precis Utils PPShowS",
          "module": "Precis.Utils.PPShowS",
          "name": "nextLine",
          "normalized": "ShowS-\u003eShowS-\u003eShowS",
          "package": "precis",
          "partial": "Line",
          "signature": "ShowS-\u003eShowS-\u003eShowS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-Utils-PPShowS.html#v:nextLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Precis.Utils.PPShowS",
          "name": "parens",
          "package": "precis",
          "signature": "ShowS -\u003e ShowS",
          "source": "src/Precis-Utils-PPShowS.html#parens",
          "type": "function"
        },
        "index": {
          "hierarchy": "Precis Utils PPShowS",
          "module": "Precis.Utils.PPShowS",
          "name": "parens",
          "normalized": "ShowS-\u003eShowS",
          "package": "precis",
          "signature": "ShowS-\u003eShowS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-Utils-PPShowS.html#v:parens"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Precis.Utils.PPShowS",
          "name": "prefixLines",
          "package": "precis",
          "signature": "ShowS -\u003e String -\u003e ShowS",
          "source": "src/Precis-Utils-PPShowS.html#prefixLines",
          "type": "function"
        },
        "index": {
          "hierarchy": "Precis Utils PPShowS",
          "module": "Precis.Utils.PPShowS",
          "name": "prefixLines",
          "normalized": "ShowS-\u003eString-\u003eShowS",
          "package": "precis",
          "partial": "Lines",
          "signature": "ShowS-\u003eString-\u003eShowS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-Utils-PPShowS.html#v:prefixLines"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Precis.Utils.PPShowS",
          "name": "punctuate",
          "package": "precis",
          "signature": "ShowS -\u003e [ShowS] -\u003e [ShowS]",
          "source": "src/Precis-Utils-PPShowS.html#punctuate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Precis Utils PPShowS",
          "module": "Precis.Utils.PPShowS",
          "name": "punctuate",
          "normalized": "ShowS-\u003e[ShowS]-\u003e[ShowS]",
          "package": "precis",
          "signature": "ShowS-\u003e[ShowS]-\u003e[ShowS]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-Utils-PPShowS.html#v:punctuate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Precis.Utils.PPShowS",
          "name": "putShowS",
          "package": "precis",
          "signature": "ShowS -\u003e IO ()",
          "source": "src/Precis-Utils-PPShowS.html#putShowS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Precis Utils PPShowS",
          "module": "Precis.Utils.PPShowS",
          "name": "putShowS",
          "normalized": "ShowS-\u003eIO()",
          "package": "precis",
          "partial": "Show",
          "signature": "ShowS-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-Utils-PPShowS.html#v:putShowS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Precis.Utils.PPShowS",
          "name": "putShowSLine",
          "package": "precis",
          "signature": "ShowS -\u003e IO ()",
          "source": "src/Precis-Utils-PPShowS.html#putShowSLine",
          "type": "function"
        },
        "index": {
          "hierarchy": "Precis Utils PPShowS",
          "module": "Precis.Utils.PPShowS",
          "name": "putShowSLine",
          "normalized": "ShowS-\u003eIO()",
          "package": "precis",
          "partial": "Show SLine",
          "signature": "ShowS-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-Utils-PPShowS.html#v:putShowSLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Precis.Utils.PPShowS",
          "name": "rangle",
          "package": "precis",
          "signature": "ShowS",
          "source": "src/Precis-Utils-PPShowS.html#rangle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Precis Utils PPShowS",
          "module": "Precis.Utils.PPShowS",
          "name": "rangle",
          "package": "precis",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-Utils-PPShowS.html#v:rangle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Precis.Utils.PPShowS",
          "name": "rbrace",
          "package": "precis",
          "signature": "ShowS",
          "source": "src/Precis-Utils-PPShowS.html#rbrace",
          "type": "function"
        },
        "index": {
          "hierarchy": "Precis Utils PPShowS",
          "module": "Precis.Utils.PPShowS",
          "name": "rbrace",
          "package": "precis",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-Utils-PPShowS.html#v:rbrace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Precis.Utils.PPShowS",
          "name": "rbracket",
          "package": "precis",
          "signature": "ShowS",
          "source": "src/Precis-Utils-PPShowS.html#rbracket",
          "type": "function"
        },
        "index": {
          "hierarchy": "Precis Utils PPShowS",
          "module": "Precis.Utils.PPShowS",
          "name": "rbracket",
          "package": "precis",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-Utils-PPShowS.html#v:rbracket"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Precis.Utils.PPShowS",
          "name": "repeatChar",
          "package": "precis",
          "signature": "Int -\u003e Char -\u003e ShowS",
          "source": "src/Precis-Utils-PPShowS.html#repeatChar",
          "type": "function"
        },
        "index": {
          "hierarchy": "Precis Utils PPShowS",
          "module": "Precis.Utils.PPShowS",
          "name": "repeatChar",
          "normalized": "Int-\u003eChar-\u003eShowS",
          "package": "precis",
          "partial": "Char",
          "signature": "Int-\u003eChar-\u003eShowS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-Utils-PPShowS.html#v:repeatChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Precis.Utils.PPShowS",
          "name": "rparen",
          "package": "precis",
          "signature": "ShowS",
          "source": "src/Precis-Utils-PPShowS.html#rparen",
          "type": "function"
        },
        "index": {
          "hierarchy": "Precis Utils PPShowS",
          "module": "Precis.Utils.PPShowS",
          "name": "rparen",
          "package": "precis",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-Utils-PPShowS.html#v:rparen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Precis.Utils.PPShowS",
          "name": "semi",
          "package": "precis",
          "signature": "ShowS",
          "source": "src/Precis-Utils-PPShowS.html#semi",
          "type": "function"
        },
        "index": {
          "hierarchy": "Precis Utils PPShowS",
          "module": "Precis.Utils.PPShowS",
          "name": "semi",
          "package": "precis",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-Utils-PPShowS.html#v:semi"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Precis.Utils.PPShowS",
          "name": "semiBrace",
          "package": "precis",
          "signature": "[ShowS] -\u003e ShowS",
          "source": "src/Precis-Utils-PPShowS.html#semiBrace",
          "type": "function"
        },
        "index": {
          "hierarchy": "Precis Utils PPShowS",
          "module": "Precis.Utils.PPShowS",
          "name": "semiBrace",
          "normalized": "[ShowS]-\u003eShowS",
          "package": "precis",
          "partial": "Brace",
          "signature": "[ShowS]-\u003eShowS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-Utils-PPShowS.html#v:semiBrace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Precis.Utils.PPShowS",
          "name": "sep",
          "package": "precis",
          "signature": "ShowS -\u003e ShowS -\u003e ShowS",
          "source": "src/Precis-Utils-PPShowS.html#sep",
          "type": "function"
        },
        "index": {
          "hierarchy": "Precis Utils PPShowS",
          "module": "Precis.Utils.PPShowS",
          "name": "sep",
          "normalized": "ShowS-\u003eShowS-\u003eShowS",
          "package": "precis",
          "signature": "ShowS-\u003eShowS-\u003eShowS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-Utils-PPShowS.html#v:sep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Precis.Utils.PPShowS",
          "name": "sglquote",
          "package": "precis",
          "signature": "ShowS",
          "source": "src/Precis-Utils-PPShowS.html#sglquote",
          "type": "function"
        },
        "index": {
          "hierarchy": "Precis Utils PPShowS",
          "module": "Precis.Utils.PPShowS",
          "name": "sglquote",
          "package": "precis",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-Utils-PPShowS.html#v:sglquote"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Precis.Utils.PPShowS",
          "name": "space",
          "package": "precis",
          "signature": "ShowS",
          "source": "src/Precis-Utils-PPShowS.html#space",
          "type": "function"
        },
        "index": {
          "hierarchy": "Precis Utils PPShowS",
          "module": "Precis.Utils.PPShowS",
          "name": "space",
          "package": "precis",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-Utils-PPShowS.html#v:space"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Precis.Utils.PPShowS",
          "name": "squotes",
          "package": "precis",
          "signature": "ShowS -\u003e ShowS",
          "source": "src/Precis-Utils-PPShowS.html#squotes",
          "type": "function"
        },
        "index": {
          "hierarchy": "Precis Utils PPShowS",
          "module": "Precis.Utils.PPShowS",
          "name": "squotes",
          "normalized": "ShowS-\u003eShowS",
          "package": "precis",
          "signature": "ShowS-\u003eShowS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-Utils-PPShowS.html#v:squotes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Precis.Utils.PPShowS",
          "name": "text",
          "package": "precis",
          "signature": "String -\u003e ShowS",
          "source": "src/Precis-Utils-PPShowS.html#text",
          "type": "function"
        },
        "index": {
          "hierarchy": "Precis Utils PPShowS",
          "module": "Precis.Utils.PPShowS",
          "name": "text",
          "normalized": "String-\u003eShowS",
          "package": "precis",
          "signature": "String-\u003eShowS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-Utils-PPShowS.html#v:text"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Precis.Utils.PPShowS",
          "name": "toString",
          "package": "precis",
          "signature": "ShowS -\u003e String",
          "source": "src/Precis-Utils-PPShowS.html#toString",
          "type": "function"
        },
        "index": {
          "hierarchy": "Precis Utils PPShowS",
          "module": "Precis.Utils.PPShowS",
          "name": "toString",
          "normalized": "ShowS-\u003eString",
          "package": "precis",
          "partial": "String",
          "signature": "ShowS-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-Utils-PPShowS.html#v:toString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Precis.Utils.PPShowS",
          "name": "tupled",
          "package": "precis",
          "signature": "[ShowS] -\u003e ShowS",
          "source": "src/Precis-Utils-PPShowS.html#tupled",
          "type": "function"
        },
        "index": {
          "hierarchy": "Precis Utils PPShowS",
          "module": "Precis.Utils.PPShowS",
          "name": "tupled",
          "normalized": "[ShowS]-\u003eShowS",
          "package": "precis",
          "signature": "[ShowS]-\u003eShowS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-Utils-PPShowS.html#v:tupled"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Precis.Utils.PPShowS",
          "name": "vsep",
          "package": "precis",
          "signature": "[ShowS] -\u003e ShowS",
          "source": "src/Precis-Utils-PPShowS.html#vsep",
          "type": "function"
        },
        "index": {
          "hierarchy": "Precis Utils PPShowS",
          "module": "Precis.Utils.PPShowS",
          "name": "vsep",
          "normalized": "[ShowS]-\u003eShowS",
          "package": "precis",
          "signature": "[ShowS]-\u003eShowS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-Utils-PPShowS.html#v:vsep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Precis.VersionNumber",
          "name": "VersionNumber",
          "package": "precis",
          "source": "src/Precis-VersionNumber.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Precis VersionNumber",
          "module": "Precis.VersionNumber",
          "name": "VersionNumber",
          "package": "precis",
          "partial": "Version Number",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-VersionNumber.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVersion number\n\u003c/p\u003e",
          "module": "Precis.VersionNumber",
          "name": "precis_version_number",
          "package": "precis",
          "signature": "String",
          "source": "src/Precis-VersionNumber.html#precis_version_number",
          "type": "function"
        },
        "index": {
          "description": "Version number",
          "hierarchy": "Precis VersionNumber",
          "module": "Precis.VersionNumber",
          "name": "precis_version_number",
          "package": "precis",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/precis/docs/Precis-VersionNumber.html#v:precis_version_number"
      }
    }
  ]
]