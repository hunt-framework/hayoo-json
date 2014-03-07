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
        "word": "scion-browser"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scion.PersistentBrowser.Build",
          "name": "Build",
          "package": "scion-browser",
          "source": "src/Scion-PersistentBrowser-Build.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Scion PersistentBrowser Build",
          "module": "Scion.PersistentBrowser.Build",
          "name": "Build",
          "package": "scion-browser",
          "partial": "Build",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/scion-browser/docs/Scion-PersistentBrowser-Build.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the database from a set of Cabal packages.\n\u003c/p\u003e",
          "module": "Scion.PersistentBrowser.Build",
          "name": "createCabalDatabase",
          "package": "scion-browser",
          "signature": "Version -\u003e [PackageIdentifier] -\u003e IO ([Documented Package], [(String, ParseError)])",
          "source": "src/Scion-PersistentBrowser-Build.html#createCabalDatabase",
          "type": "function"
        },
        "index": {
          "description": "Get the database from set of Cabal packages",
          "hierarchy": "Scion PersistentBrowser Build",
          "module": "Scion.PersistentBrowser.Build",
          "name": "createCabalDatabase",
          "normalized": "Version-\u003e[PackageIdentifier]-\u003eIO([Documented Package],[(String,ParseError)])",
          "package": "scion-browser",
          "partial": "Cabal Database",
          "signature": "Version-\u003e[PackageIdentifier]-\u003eIO([Documented Package],[(String,ParseError)])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scion-browser/docs/Scion-PersistentBrowser-Build.html#v:createCabalDatabase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDownloads the information for the entire Hackage database\n   creating an in-memory database with it.\n   It needs a temporary directory to work on.\n\u003c/p\u003e",
          "module": "Scion.PersistentBrowser.Build",
          "name": "createHackageDatabase",
          "package": "scion-browser",
          "signature": "FilePath -\u003e IO ([Documented Package], [(FilePath, ParseError)])",
          "source": "src/Scion-PersistentBrowser-Build.html#createHackageDatabase",
          "type": "function"
        },
        "index": {
          "description": "Downloads the information for the entire Hackage database creating an in-memory database with it It needs temporary directory to work on",
          "hierarchy": "Scion PersistentBrowser Build",
          "module": "Scion.PersistentBrowser.Build",
          "name": "createHackageDatabase",
          "normalized": "FilePath-\u003eIO([Documented Package],[(FilePath,ParseError)])",
          "package": "scion-browser",
          "partial": "Hackage Database",
          "signature": "FilePath-\u003eIO([Documented Package],[(FilePath,ParseError)])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scion-browser/docs/Scion-PersistentBrowser-Build.html#v:createHackageDatabase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the database from a Cabal package.\n\u003c/p\u003e",
          "module": "Scion.PersistentBrowser.Build",
          "name": "getCabalHoogle",
          "package": "scion-browser",
          "signature": "Version -\u003e PackageIdentifier -\u003e Bool -\u003e FilePath -\u003e IO (Either ParseError (Documented Package))",
          "source": "src/Scion-PersistentBrowser-Build.html#getCabalHoogle",
          "type": "function"
        },
        "index": {
          "description": "Get the database from Cabal package",
          "hierarchy": "Scion PersistentBrowser Build",
          "module": "Scion.PersistentBrowser.Build",
          "name": "getCabalHoogle",
          "normalized": "Version-\u003ePackageIdentifier-\u003eBool-\u003eFilePath-\u003eIO(Either ParseError(Documented Package))",
          "package": "scion-browser",
          "partial": "Cabal Hoogle",
          "signature": "Version-\u003ePackageIdentifier-\u003eBool-\u003eFilePath-\u003eIO(Either ParseError(Documented Package))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scion-browser/docs/Scion-PersistentBrowser-Build.html#v:getCabalHoogle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDownloads the information for the entire Hackage database\n   and saves it to the specified location.\n\u003c/p\u003e",
          "module": "Scion.PersistentBrowser.Build",
          "name": "saveHackageDatabase",
          "package": "scion-browser",
          "signature": "FilePath -\u003e IO ()",
          "source": "src/Scion-PersistentBrowser-Build.html#saveHackageDatabase",
          "type": "function"
        },
        "index": {
          "description": "Downloads the information for the entire Hackage database and saves it to the specified location",
          "hierarchy": "Scion PersistentBrowser Build",
          "module": "Scion.PersistentBrowser.Build",
          "name": "saveHackageDatabase",
          "normalized": "FilePath-\u003eIO()",
          "package": "scion-browser",
          "partial": "Hackage Database",
          "signature": "FilePath-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scion-browser/docs/Scion-PersistentBrowser-Build.html#v:saveHackageDatabase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUpdates a database with changes in the installed package base.\n\u003c/p\u003e",
          "module": "Scion.PersistentBrowser.Build",
          "name": "updateDatabase",
          "package": "scion-browser",
          "signature": "FilePath -\u003e [InstalledPackageInfo] -\u003e IO ()",
          "source": "src/Scion-PersistentBrowser-Build.html#updateDatabase",
          "type": "function"
        },
        "index": {
          "description": "Updates database with changes in the installed package base",
          "hierarchy": "Scion PersistentBrowser Build",
          "module": "Scion.PersistentBrowser.Build",
          "name": "updateDatabase",
          "normalized": "FilePath-\u003e[InstalledPackageInfo]-\u003eIO()",
          "package": "scion-browser",
          "partial": "Database",
          "signature": "FilePath-\u003e[InstalledPackageInfo]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scion-browser/docs/Scion-PersistentBrowser-Build.html#v:updateDatabase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scion.PersistentBrowser.Query",
          "name": "Query",
          "package": "scion-browser",
          "source": "src/Scion-PersistentBrowser-Query.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Scion PersistentBrowser Query",
          "module": "Scion.PersistentBrowser.Query",
          "name": "Query",
          "package": "scion-browser",
          "partial": "Query",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/scion-browser/docs/Scion-PersistentBrowser-Query.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThings that reside on a module.\n\u003c/p\u003e",
          "module": "Scion.PersistentBrowser.Query",
          "name": "HasDbModule",
          "package": "scion-browser",
          "source": "src/Scion-PersistentBrowser-Query.html#HasDbModule",
          "type": "class"
        },
        "index": {
          "description": "Things that reside on module",
          "hierarchy": "Scion PersistentBrowser Query",
          "module": "Scion.PersistentBrowser.Query",
          "name": "HasDbModule",
          "package": "scion-browser",
          "partial": "Has Db Module",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/scion-browser/docs/Scion-PersistentBrowser-Query.html#t:HasDbModule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThings that reside on a package.\n\u003c/p\u003e",
          "module": "Scion.PersistentBrowser.Query",
          "name": "HasDbPackage",
          "package": "scion-browser",
          "source": "src/Scion-PersistentBrowser-Query.html#HasDbPackage",
          "type": "class"
        },
        "index": {
          "description": "Things that reside on package",
          "hierarchy": "Scion PersistentBrowser Query",
          "module": "Scion.PersistentBrowser.Query",
          "name": "HasDbPackage",
          "package": "scion-browser",
          "partial": "Has Db Package",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/scion-browser/docs/Scion-PersistentBrowser-Query.html#t:HasDbPackage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the identifiers of all packages in the database.\n\u003c/p\u003e",
          "module": "Scion.PersistentBrowser.Query",
          "name": "allPackageIds",
          "package": "scion-browser",
          "signature": "Maybe DbPackageIdentifier -\u003e SQL [DbPackageIdentifier]",
          "source": "src/Scion-PersistentBrowser-Query.html#allPackageIds",
          "type": "function"
        },
        "index": {
          "description": "Get the identifiers of all packages in the database",
          "hierarchy": "Scion PersistentBrowser Query",
          "module": "Scion.PersistentBrowser.Query",
          "name": "allPackageIds",
          "normalized": "Maybe DbPackageIdentifier-\u003eSQL[DbPackageIdentifier]",
          "package": "scion-browser",
          "partial": "Package Ids",
          "signature": "Maybe DbPackageIdentifier-\u003eSQL[DbPackageIdentifier]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scion-browser/docs/Scion-PersistentBrowser-Query.html#v:allPackageIds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet information of all packages in the database.\n\u003c/p\u003e",
          "module": "Scion.PersistentBrowser.Query",
          "name": "allPackages",
          "package": "scion-browser",
          "signature": "Maybe DbPackageIdentifier -\u003e SQL [DbPackage]",
          "source": "src/Scion-PersistentBrowser-Query.html#allPackages",
          "type": "function"
        },
        "index": {
          "description": "Get information of all packages in the database",
          "hierarchy": "Scion PersistentBrowser Query",
          "module": "Scion.PersistentBrowser.Query",
          "name": "allPackages",
          "normalized": "Maybe DbPackageIdentifier-\u003eSQL[DbPackage]",
          "package": "scion-browser",
          "partial": "Packages",
          "signature": "Maybe DbPackageIdentifier-\u003eSQL[DbPackage]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scion-browser/docs/Scion-PersistentBrowser-Query.html#v:allPackages"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet information about all constructors with that name.\n\u003c/p\u003e",
          "module": "Scion.PersistentBrowser.Query",
          "name": "constructorsByName",
          "package": "scion-browser",
          "signature": "String -\u003e SQL [DbConstructor]",
          "source": "src/Scion-PersistentBrowser-Query.html#constructorsByName",
          "type": "function"
        },
        "index": {
          "description": "Get information about all constructors with that name",
          "hierarchy": "Scion PersistentBrowser Query",
          "module": "Scion.PersistentBrowser.Query",
          "name": "constructorsByName",
          "normalized": "String-\u003eSQL[DbConstructor]",
          "package": "scion-browser",
          "partial": "By Name",
          "signature": "String-\u003eSQL[DbConstructor]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scion-browser/docs/Scion-PersistentBrowser-Query.html#v:constructorsByName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scion.PersistentBrowser.Query",
          "name": "createIndexes",
          "package": "scion-browser",
          "signature": "SQL ()",
          "source": "src/Scion-PersistentBrowser-Query.html#createIndexes",
          "type": "function"
        },
        "index": {
          "hierarchy": "Scion PersistentBrowser Query",
          "module": "Scion.PersistentBrowser.Query",
          "name": "createIndexes",
          "normalized": "SQL()",
          "package": "scion-browser",
          "partial": "Indexes",
          "signature": "SQL()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scion-browser/docs/Scion-PersistentBrowser-Query.html#v:createIndexes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scion.PersistentBrowser.Query",
          "name": "declAction",
          "package": "scion-browser",
          "signature": "[PersistValue] -\u003e DbDecl",
          "source": "src/Scion-PersistentBrowser-Query.html#declAction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Scion PersistentBrowser Query",
          "module": "Scion.PersistentBrowser.Query",
          "name": "declAction",
          "normalized": "[PersistValue]-\u003eDbDecl",
          "package": "scion-browser",
          "partial": "Action",
          "signature": "[PersistValue]-\u003eDbDecl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scion-browser/docs/Scion-PersistentBrowser-Query.html#v:declAction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet information about all declaration with that name.\n\u003c/p\u003e",
          "module": "Scion.PersistentBrowser.Query",
          "name": "declsByName",
          "package": "scion-browser",
          "signature": "String -\u003e Maybe DbPackageIdentifier -\u003e SQL [DbDecl]",
          "source": "src/Scion-PersistentBrowser-Query.html#declsByName",
          "type": "function"
        },
        "index": {
          "description": "Get information about all declaration with that name",
          "hierarchy": "Scion PersistentBrowser Query",
          "module": "Scion.PersistentBrowser.Query",
          "name": "declsByName",
          "normalized": "String-\u003eMaybe DbPackageIdentifier-\u003eSQL[DbDecl]",
          "package": "scion-browser",
          "partial": "By Name",
          "signature": "String-\u003eMaybe DbPackageIdentifier-\u003eSQL[DbDecl]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scion-browser/docs/Scion-PersistentBrowser-Query.html#v:declsByName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGets information from a text value.\n\u003c/p\u003e",
          "module": "Scion.PersistentBrowser.Query",
          "name": "fromDbText",
          "package": "scion-browser",
          "signature": "PersistValue -\u003e Maybe String",
          "source": "src/Scion-PersistentBrowser-Query.html#fromDbText",
          "type": "function"
        },
        "index": {
          "description": "Gets information from text value",
          "hierarchy": "Scion PersistentBrowser Query",
          "module": "Scion.PersistentBrowser.Query",
          "name": "fromDbText",
          "normalized": "PersistValue-\u003eMaybe String",
          "package": "scion-browser",
          "partial": "Db Text",
          "signature": "PersistValue-\u003eMaybe String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scion-browser/docs/Scion-PersistentBrowser-Query.html#v:fromDbText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scion.PersistentBrowser.Query",
          "name": "getAllDeclInfo",
          "package": "scion-browser",
          "signature": "(DbDeclId, DbDecl) -\u003e SQL DbCompleteDecl",
          "source": "src/Scion-PersistentBrowser-Query.html#getAllDeclInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Scion PersistentBrowser Query",
          "module": "Scion.PersistentBrowser.Query",
          "name": "getAllDeclInfo",
          "normalized": "(DbDeclId,DbDecl)-\u003eSQL DbCompleteDecl",
          "package": "scion-browser",
          "partial": "All Decl Info",
          "signature": "(DbDeclId,DbDecl)-\u003eSQL DbCompleteDecl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scion-browser/docs/Scion-PersistentBrowser-Query.html#v:getAllDeclInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scion.PersistentBrowser.Query",
          "name": "getDbModule",
          "package": "scion-browser",
          "signature": "d -\u003e SQL DbModule",
          "source": "src/Scion-PersistentBrowser-Query.html#getDbModule",
          "type": "method"
        },
        "index": {
          "hierarchy": "Scion PersistentBrowser Query",
          "module": "Scion.PersistentBrowser.Query",
          "name": "getDbModule",
          "normalized": "a-\u003eSQL DbModule",
          "package": "scion-browser",
          "partial": "Db Module",
          "signature": "d-\u003eSQL DbModule",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/scion-browser/docs/Scion-PersistentBrowser-Query.html#v:getDbModule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scion.PersistentBrowser.Query",
          "name": "getDbPackage",
          "package": "scion-browser",
          "signature": "d -\u003e SQL DbPackage",
          "source": "src/Scion-PersistentBrowser-Query.html#getDbPackage",
          "type": "method"
        },
        "index": {
          "hierarchy": "Scion PersistentBrowser Query",
          "module": "Scion.PersistentBrowser.Query",
          "name": "getDbPackage",
          "normalized": "a-\u003eSQL DbPackage",
          "package": "scion-browser",
          "partial": "Db Package",
          "signature": "d-\u003eSQL DbPackage",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/scion-browser/docs/Scion-PersistentBrowser-Query.html#v:getDbPackage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003elist declarations matching the given prefix, useful for content assist\n the prefix either matches the declaration itself or any constructor\n\u003c/p\u003e",
          "module": "Scion.PersistentBrowser.Query",
          "name": "getDeclsFromPrefix",
          "package": "scion-browser",
          "signature": "String -\u003e Maybe DbPackageIdentifier -\u003e SQL [(DbPackageIdentifier, DbModule, DbCompleteDecl)]",
          "source": "src/Scion-PersistentBrowser-Query.html#getDeclsFromPrefix",
          "type": "function"
        },
        "index": {
          "description": "list declarations matching the given prefix useful for content assist the prefix either matches the declaration itself or any constructor",
          "hierarchy": "Scion PersistentBrowser Query",
          "module": "Scion.PersistentBrowser.Query",
          "name": "getDeclsFromPrefix",
          "normalized": "String-\u003eMaybe DbPackageIdentifier-\u003eSQL[(DbPackageIdentifier,DbModule,DbCompleteDecl)]",
          "package": "scion-browser",
          "partial": "Decls From Prefix",
          "signature": "String-\u003eMaybe DbPackageIdentifier-\u003eSQL[(DbPackageIdentifier,DbModule,DbCompleteDecl)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scion-browser/docs/Scion-PersistentBrowser-Query.html#v:getDeclsFromPrefix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGets the declarations inside some module,\n  along with information about which package it lives.\n\u003c/p\u003e",
          "module": "Scion.PersistentBrowser.Query",
          "name": "getDeclsInModule",
          "package": "scion-browser",
          "signature": "String -\u003e Maybe DbPackageIdentifier -\u003e SQL [(DbPackageIdentifier, DbCompleteDecl)]",
          "source": "src/Scion-PersistentBrowser-Query.html#getDeclsInModule",
          "type": "function"
        },
        "index": {
          "description": "Gets the declarations inside some module along with information about which package it lives",
          "hierarchy": "Scion PersistentBrowser Query",
          "module": "Scion.PersistentBrowser.Query",
          "name": "getDeclsInModule",
          "normalized": "String-\u003eMaybe DbPackageIdentifier-\u003eSQL[(DbPackageIdentifier,DbCompleteDecl)]",
          "package": "scion-browser",
          "partial": "Decls In Module",
          "signature": "String-\u003eMaybe DbPackageIdentifier-\u003eSQL[(DbPackageIdentifier,DbCompleteDecl)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scion-browser/docs/Scion-PersistentBrowser-Query.html#v:getDeclsInModule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGets a list of modules where a declaration may live\n\u003c/p\u003e",
          "module": "Scion.PersistentBrowser.Query",
          "name": "getModulesWhereDeclarationIs",
          "package": "scion-browser",
          "signature": "String -\u003e SQL [(DbModule, String, String)]",
          "source": "src/Scion-PersistentBrowser-Query.html#getModulesWhereDeclarationIs",
          "type": "function"
        },
        "index": {
          "description": "Gets list of modules where declaration may live",
          "hierarchy": "Scion PersistentBrowser Query",
          "module": "Scion.PersistentBrowser.Query",
          "name": "getModulesWhereDeclarationIs",
          "normalized": "String-\u003eSQL[(DbModule,String,String)]",
          "package": "scion-browser",
          "partial": "Modules Where Declaration Is",
          "signature": "String-\u003eSQL[(DbModule,String,String)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scion-browser/docs/Scion-PersistentBrowser-Query.html#v:getModulesWhereDeclarationIs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet information about a package in the database.\n\u003c/p\u003e",
          "module": "Scion.PersistentBrowser.Query",
          "name": "getPackage",
          "package": "scion-browser",
          "signature": "DbPackageIdentifier -\u003e SQL (Maybe DbPackage)",
          "source": "src/Scion-PersistentBrowser-Query.html#getPackage",
          "type": "function"
        },
        "index": {
          "description": "Get information about package in the database",
          "hierarchy": "Scion PersistentBrowser Query",
          "module": "Scion.PersistentBrowser.Query",
          "name": "getPackage",
          "normalized": "DbPackageIdentifier-\u003eSQL(Maybe DbPackage)",
          "package": "scion-browser",
          "partial": "Package",
          "signature": "DbPackageIdentifier-\u003eSQL(Maybe DbPackage)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scion-browser/docs/Scion-PersistentBrowser-Query.html#v:getPackage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scion.PersistentBrowser.Query",
          "name": "getSubmodules",
          "package": "scion-browser",
          "signature": "String -\u003e Maybe DbPackageIdentifier -\u003e SQL [DbModule]",
          "source": "src/Scion-PersistentBrowser-Query.html#getSubmodules",
          "type": "function"
        },
        "index": {
          "hierarchy": "Scion PersistentBrowser Query",
          "module": "Scion.PersistentBrowser.Query",
          "name": "getSubmodules",
          "normalized": "String-\u003eMaybe DbPackageIdentifier-\u003eSQL[DbModule]",
          "package": "scion-browser",
          "partial": "Submodules",
          "signature": "String-\u003eMaybe DbPackageIdentifier-\u003eSQL[DbModule]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scion-browser/docs/Scion-PersistentBrowser-Query.html#v:getSubmodules"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scion.PersistentBrowser.Query",
          "name": "moduleAction",
          "package": "scion-browser",
          "signature": "[PersistValue] -\u003e DbModule",
          "source": "src/Scion-PersistentBrowser-Query.html#moduleAction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Scion PersistentBrowser Query",
          "module": "Scion.PersistentBrowser.Query",
          "name": "moduleAction",
          "normalized": "[PersistValue]-\u003eDbModule",
          "package": "scion-browser",
          "partial": "Action",
          "signature": "[PersistValue]-\u003eDbModule",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scion-browser/docs/Scion-PersistentBrowser-Query.html#v:moduleAction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet information about all modules with that name.\n\u003c/p\u003e",
          "module": "Scion.PersistentBrowser.Query",
          "name": "modulesByName",
          "package": "scion-browser",
          "signature": "String -\u003e Maybe DbPackageIdentifier -\u003e SQL [DbModule]",
          "source": "src/Scion-PersistentBrowser-Query.html#modulesByName",
          "type": "function"
        },
        "index": {
          "description": "Get information about all modules with that name",
          "hierarchy": "Scion PersistentBrowser Query",
          "module": "Scion.PersistentBrowser.Query",
          "name": "modulesByName",
          "normalized": "String-\u003eMaybe DbPackageIdentifier-\u003eSQL[DbModule]",
          "package": "scion-browser",
          "partial": "By Name",
          "signature": "String-\u003eMaybe DbPackageIdentifier-\u003eSQL[DbModule]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scion-browser/docs/Scion-PersistentBrowser-Query.html#v:modulesByName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet information of all versions of the package with that name.\n\u003c/p\u003e",
          "module": "Scion.PersistentBrowser.Query",
          "name": "packagesByName",
          "package": "scion-browser",
          "signature": "String -\u003e Maybe DbPackageIdentifier -\u003e SQL [DbPackage]",
          "source": "src/Scion-PersistentBrowser-Query.html#packagesByName",
          "type": "function"
        },
        "index": {
          "description": "Get information of all versions of the package with that name",
          "hierarchy": "Scion PersistentBrowser Query",
          "module": "Scion.PersistentBrowser.Query",
          "name": "packagesByName",
          "normalized": "String-\u003eMaybe DbPackageIdentifier-\u003eSQL[DbPackage]",
          "package": "scion-browser",
          "partial": "By Name",
          "signature": "String-\u003eMaybe DbPackageIdentifier-\u003eSQL[DbPackage]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scion-browser/docs/Scion-PersistentBrowser-Query.html#v:packagesByName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecutes a query.\n\u003c/p\u003e",
          "module": "Scion.PersistentBrowser.Query",
          "name": "queryDb",
          "package": "scion-browser",
          "signature": "String -\u003e [String] -\u003e ([PersistValue] -\u003e a) -\u003e SQL [a]",
          "source": "src/Scion-PersistentBrowser-Query.html#queryDb",
          "type": "function"
        },
        "index": {
          "description": "Executes query",
          "hierarchy": "Scion PersistentBrowser Query",
          "module": "Scion.PersistentBrowser.Query",
          "name": "queryDb",
          "normalized": "String-\u003e[String]-\u003e([PersistValue]-\u003ea)-\u003eSQL[a]",
          "package": "scion-browser",
          "partial": "Db",
          "signature": "String-\u003e[String]-\u003e([PersistValue]-\u003ea)-\u003eSQL[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scion-browser/docs/Scion-PersistentBrowser-Query.html#v:queryDb"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scion.PersistentBrowser",
          "name": "PersistentBrowser",
          "package": "scion-browser",
          "source": "src/Scion-PersistentBrowser.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Scion PersistentBrowser",
          "module": "Scion.PersistentBrowser",
          "name": "PersistentBrowser",
          "package": "scion-browser",
          "partial": "Persistent Browser",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/scion-browser/docs/Scion-PersistentBrowser.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA Database saves a list of packages. \n\u003c/p\u003e",
          "module": "Scion.PersistentBrowser",
          "name": "Database",
          "package": "scion-browser",
          "source": "src/Scion-PersistentBrowser-Types.html#Database",
          "type": "type"
        },
        "index": {
          "description": "Database saves list of packages",
          "hierarchy": "Scion PersistentBrowser",
          "module": "Scion.PersistentBrowser",
          "name": "Database",
          "package": "scion-browser",
          "partial": "Database",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/scion-browser/docs/Scion-PersistentBrowser.html#t:Database"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComplete information for a declaration.\n  Look at its ToJSON instance to know which one is used in each kind of declaration.\n\u003c/p\u003e",
          "module": "Scion.PersistentBrowser",
          "name": "DbCompleteDecl",
          "package": "scion-browser",
          "source": "src/Scion-PersistentBrowser-DbTypes.html#DbCompleteDecl",
          "type": "data"
        },
        "index": {
          "description": "Complete information for declaration Look at its ToJSON instance to know which one is used in each kind of declaration",
          "hierarchy": "Scion PersistentBrowser",
          "module": "Scion.PersistentBrowser",
          "name": "DbCompleteDecl",
          "package": "scion-browser",
          "partial": "Db Complete Decl",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/scion-browser/docs/Scion-PersistentBrowser.html#t:DbCompleteDecl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scion.PersistentBrowser",
          "name": "DbConstructor",
          "package": "scion-browser",
          "source": "src/Scion-PersistentBrowser-DbTypes.html#DbConstructor",
          "type": "type"
        },
        "index": {
          "hierarchy": "Scion PersistentBrowser",
          "module": "Scion.PersistentBrowser",
          "name": "DbConstructor",
          "package": "scion-browser",
          "partial": "Db Constructor",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/scion-browser/docs/Scion-PersistentBrowser.html#t:DbConstructor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scion.PersistentBrowser",
          "name": "DbConstructorGeneric",
          "package": "scion-browser",
          "source": "src/Scion-PersistentBrowser-DbTypes.html#DbConstructorGeneric",
          "type": "data"
        },
        "index": {
          "hierarchy": "Scion PersistentBrowser",
          "module": "Scion.PersistentBrowser",
          "name": "DbConstructorGeneric",
          "package": "scion-browser",
          "partial": "Db Constructor Generic",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/scion-browser/docs/Scion-PersistentBrowser.html#t:DbConstructorGeneric"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scion.PersistentBrowser",
          "name": "DbConstructorId",
          "package": "scion-browser",
          "source": "src/Scion-PersistentBrowser-DbTypes.html#DbConstructorId",
          "type": "type"
        },
        "index": {
          "hierarchy": "Scion PersistentBrowser",
          "module": "Scion.PersistentBrowser",
          "name": "DbConstructorId",
          "package": "scion-browser",
          "partial": "Db Constructor Id",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/scion-browser/docs/Scion-PersistentBrowser.html#t:DbConstructorId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scion.PersistentBrowser",
          "name": "DbContext",
          "package": "scion-browser",
          "source": "src/Scion-PersistentBrowser-DbTypes.html#DbContext",
          "type": "type"
        },
        "index": {
          "hierarchy": "Scion PersistentBrowser",
          "module": "Scion.PersistentBrowser",
          "name": "DbContext",
          "package": "scion-browser",
          "partial": "Db Context",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/scion-browser/docs/Scion-PersistentBrowser.html#t:DbContext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scion.PersistentBrowser",
          "name": "DbContextGeneric",
          "package": "scion-browser",
          "source": "src/Scion-PersistentBrowser-DbTypes.html#DbContextGeneric",
          "type": "data"
        },
        "index": {
          "hierarchy": "Scion PersistentBrowser",
          "module": "Scion.PersistentBrowser",
          "name": "DbContextGeneric",
          "package": "scion-browser",
          "partial": "Db Context Generic",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/scion-browser/docs/Scion-PersistentBrowser.html#t:DbContextGeneric"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scion.PersistentBrowser",
          "name": "DbContextId",
          "package": "scion-browser",
          "source": "src/Scion-PersistentBrowser-DbTypes.html#DbContextId",
          "type": "type"
        },
        "index": {
          "hierarchy": "Scion PersistentBrowser",
          "module": "Scion.PersistentBrowser",
          "name": "DbContextId",
          "package": "scion-browser",
          "partial": "Db Context Id",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/scion-browser/docs/Scion-PersistentBrowser.html#t:DbContextId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scion.PersistentBrowser",
          "name": "DbDecl",
          "package": "scion-browser",
          "source": "src/Scion-PersistentBrowser-DbTypes.html#DbDecl",
          "type": "type"
        },
        "index": {
          "hierarchy": "Scion PersistentBrowser",
          "module": "Scion.PersistentBrowser",
          "name": "DbDecl",
          "package": "scion-browser",
          "partial": "Db Decl",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/scion-browser/docs/Scion-PersistentBrowser.html#t:DbDecl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scion.PersistentBrowser",
          "name": "DbDeclGeneric",
          "package": "scion-browser",
          "source": "src/Scion-PersistentBrowser-DbTypes.html#DbDeclGeneric",
          "type": "data"
        },
        "index": {
          "hierarchy": "Scion PersistentBrowser",
          "module": "Scion.PersistentBrowser",
          "name": "DbDeclGeneric",
          "package": "scion-browser",
          "partial": "Db Decl Generic",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/scion-browser/docs/Scion-PersistentBrowser.html#t:DbDeclGeneric"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scion.PersistentBrowser",
          "name": "DbDeclId",
          "package": "scion-browser",
          "source": "src/Scion-PersistentBrowser-DbTypes.html#DbDeclId",
          "type": "type"
        },
        "index": {
          "hierarchy": "Scion PersistentBrowser",
          "module": "Scion.PersistentBrowser",
          "name": "DbDeclId",
          "package": "scion-browser",
          "partial": "Db Decl Id",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/scion-browser/docs/Scion-PersistentBrowser.html#t:DbDeclId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scion.PersistentBrowser",
          "name": "DbDeclType",
          "package": "scion-browser",
          "source": "src/Scion-PersistentBrowser-Types.html#DbDeclType",
          "type": "data"
        },
        "index": {
          "hierarchy": "Scion PersistentBrowser",
          "module": "Scion.PersistentBrowser",
          "name": "DbDeclType",
          "package": "scion-browser",
          "partial": "Db Decl Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/scion-browser/docs/Scion-PersistentBrowser.html#t:DbDeclType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scion.PersistentBrowser",
          "name": "DbFunDep",
          "package": "scion-browser",
          "source": "src/Scion-PersistentBrowser-DbTypes.html#DbFunDep",
          "type": "type"
        },
        "index": {
          "hierarchy": "Scion PersistentBrowser",
          "module": "Scion.PersistentBrowser",
          "name": "DbFunDep",
          "package": "scion-browser",
          "partial": "Db Fun Dep",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/scion-browser/docs/Scion-PersistentBrowser.html#t:DbFunDep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scion.PersistentBrowser",
          "name": "DbFunDepGeneric",
          "package": "scion-browser",
          "source": "src/Scion-PersistentBrowser-DbTypes.html#DbFunDepGeneric",
          "type": "data"
        },
        "index": {
          "hierarchy": "Scion PersistentBrowser",
          "module": "Scion.PersistentBrowser",
          "name": "DbFunDepGeneric",
          "package": "scion-browser",
          "partial": "Db Fun Dep Generic",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/scion-browser/docs/Scion-PersistentBrowser.html#t:DbFunDepGeneric"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scion.PersistentBrowser",
          "name": "DbFunDepId",
          "package": "scion-browser",
          "source": "src/Scion-PersistentBrowser-DbTypes.html#DbFunDepId",
          "type": "type"
        },
        "index": {
          "hierarchy": "Scion PersistentBrowser",
          "module": "Scion.PersistentBrowser",
          "name": "DbFunDepId",
          "package": "scion-browser",
          "partial": "Db Fun Dep Id",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/scion-browser/docs/Scion-PersistentBrowser.html#t:DbFunDepId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scion.PersistentBrowser",
          "name": "DbModule",
          "package": "scion-browser",
          "source": "src/Scion-PersistentBrowser-DbTypes.html#DbModule",
          "type": "type"
        },
        "index": {
          "hierarchy": "Scion PersistentBrowser",
          "module": "Scion.PersistentBrowser",
          "name": "DbModule",
          "package": "scion-browser",
          "partial": "Db Module",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/scion-browser/docs/Scion-PersistentBrowser.html#t:DbModule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scion.PersistentBrowser",
          "name": "DbModuleGeneric",
          "package": "scion-browser",
          "source": "src/Scion-PersistentBrowser-DbTypes.html#DbModuleGeneric",
          "type": "data"
        },
        "index": {
          "hierarchy": "Scion PersistentBrowser",
          "module": "Scion.PersistentBrowser",
          "name": "DbModuleGeneric",
          "package": "scion-browser",
          "partial": "Db Module Generic",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/scion-browser/docs/Scion-PersistentBrowser.html#t:DbModuleGeneric"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scion.PersistentBrowser",
          "name": "DbModuleId",
          "package": "scion-browser",
          "source": "src/Scion-PersistentBrowser-DbTypes.html#DbModuleId",
          "type": "type"
        },
        "index": {
          "hierarchy": "Scion PersistentBrowser",
          "module": "Scion.PersistentBrowser",
          "name": "DbModuleId",
          "package": "scion-browser",
          "partial": "Db Module Id",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/scion-browser/docs/Scion-PersistentBrowser.html#t:DbModuleId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scion.PersistentBrowser",
          "name": "DbPackage",
          "package": "scion-browser",
          "source": "src/Scion-PersistentBrowser-DbTypes.html#DbPackage",
          "type": "type"
        },
        "index": {
          "hierarchy": "Scion PersistentBrowser",
          "module": "Scion.PersistentBrowser",
          "name": "DbPackage",
          "package": "scion-browser",
          "partial": "Db Package",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/scion-browser/docs/Scion-PersistentBrowser.html#t:DbPackage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scion.PersistentBrowser",
          "name": "DbPackageGeneric",
          "package": "scion-browser",
          "source": "src/Scion-PersistentBrowser-DbTypes.html#DbPackageGeneric",
          "type": "data"
        },
        "index": {
          "hierarchy": "Scion PersistentBrowser",
          "module": "Scion.PersistentBrowser",
          "name": "DbPackageGeneric",
          "package": "scion-browser",
          "partial": "Db Package Generic",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/scion-browser/docs/Scion-PersistentBrowser.html#t:DbPackageGeneric"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scion.PersistentBrowser",
          "name": "DbPackageId",
          "package": "scion-browser",
          "source": "src/Scion-PersistentBrowser-DbTypes.html#DbPackageId",
          "type": "type"
        },
        "index": {
          "hierarchy": "Scion PersistentBrowser",
          "module": "Scion.PersistentBrowser",
          "name": "DbPackageId",
          "package": "scion-browser",
          "partial": "Db Package Id",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/scion-browser/docs/Scion-PersistentBrowser.html#t:DbPackageId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInformation needed to search a package.\n\u003c/p\u003e",
          "module": "Scion.PersistentBrowser",
          "name": "DbPackageIdentifier",
          "package": "scion-browser",
          "source": "src/Scion-PersistentBrowser-DbTypes.html#DbPackageIdentifier",
          "type": "data"
        },
        "index": {
          "description": "Information needed to search package",
          "hierarchy": "Scion PersistentBrowser",
          "module": "Scion.PersistentBrowser",
          "name": "DbPackageIdentifier",
          "package": "scion-browser",
          "partial": "Db Package Identifier",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/scion-browser/docs/Scion-PersistentBrowser.html#t:DbPackageIdentifier"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scion.PersistentBrowser",
          "name": "DbTyVar",
          "package": "scion-browser",
          "source": "src/Scion-PersistentBrowser-DbTypes.html#DbTyVar",
          "type": "type"
        },
        "index": {
          "hierarchy": "Scion PersistentBrowser",
          "module": "Scion.PersistentBrowser",
          "name": "DbTyVar",
          "package": "scion-browser",
          "partial": "Db Ty Var",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/scion-browser/docs/Scion-PersistentBrowser.html#t:DbTyVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scion.PersistentBrowser",
          "name": "DbTyVarGeneric",
          "package": "scion-browser",
          "source": "src/Scion-PersistentBrowser-DbTypes.html#DbTyVarGeneric",
          "type": "data"
        },
        "index": {
          "hierarchy": "Scion PersistentBrowser",
          "module": "Scion.PersistentBrowser",
          "name": "DbTyVarGeneric",
          "package": "scion-browser",
          "partial": "Db Ty Var Generic",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/scion-browser/docs/Scion-PersistentBrowser.html#t:DbTyVarGeneric"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scion.PersistentBrowser",
          "name": "DbTyVarId",
          "package": "scion-browser",
          "source": "src/Scion-PersistentBrowser-DbTypes.html#DbTyVarId",
          "type": "type"
        },
        "index": {
          "hierarchy": "Scion PersistentBrowser",
          "module": "Scion.PersistentBrowser",
          "name": "DbTyVarId",
          "package": "scion-browser",
          "partial": "Db Ty Var Id",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/scion-browser/docs/Scion-PersistentBrowser.html#t:DbTyVarId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDocumentation for an item.\n Now it is simply a Text element.\n\u003c/p\u003e",
          "module": "Scion.PersistentBrowser",
          "name": "Doc",
          "package": "scion-browser",
          "source": "src/Scion-PersistentBrowser-Types.html#Doc",
          "type": "data"
        },
        "index": {
          "description": "Documentation for an item Now it is simply Text element",
          "hierarchy": "Scion PersistentBrowser",
          "module": "Scion.PersistentBrowser",
          "name": "Doc",
          "package": "scion-browser",
          "partial": "Doc",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/scion-browser/docs/Scion-PersistentBrowser.html#t:Doc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scion.PersistentBrowser",
          "name": "DocItem",
          "package": "scion-browser",
          "source": "src/Scion-PersistentBrowser-Types.html#DocItem",
          "type": "class"
        },
        "index": {
          "hierarchy": "Scion PersistentBrowser",
          "module": "Scion.PersistentBrowser",
          "name": "DocItem",
          "package": "scion-browser",
          "partial": "Doc Item",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/scion-browser/docs/Scion-PersistentBrowser.html#t:DocItem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA documented item.\n\u003c/p\u003e",
          "module": "Scion.PersistentBrowser",
          "name": "Documented",
          "package": "scion-browser",
          "source": "src/Scion-PersistentBrowser-Types.html#Documented",
          "type": "type"
        },
        "index": {
          "description": "documented item",
          "hierarchy": "Scion PersistentBrowser",
          "module": "Scion.PersistentBrowser",
          "name": "Documented",
          "package": "scion-browser",
          "partial": "Documented",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/scion-browser/docs/Scion-PersistentBrowser.html#t:Documented"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scion.PersistentBrowser",
          "name": "Named",
          "package": "scion-browser",
          "source": "src/Scion-PersistentBrowser-Types.html#Named",
          "type": "class"
        },
        "index": {
          "hierarchy": "Scion PersistentBrowser",
          "module": "Scion.PersistentBrowser",
          "name": "Named",
          "package": "scion-browser",
          "partial": "Named",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/scion-browser/docs/Scion-PersistentBrowser.html#t:Named"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA package.\n\u003c/p\u003e",
          "module": "Scion.PersistentBrowser",
          "name": "Package",
          "package": "scion-browser",
          "source": "src/Scion-PersistentBrowser-Types.html#Package",
          "type": "data"
        },
        "index": {
          "description": "package",
          "hierarchy": "Scion PersistentBrowser",
          "module": "Scion.PersistentBrowser",
          "name": "Package",
          "package": "scion-browser",
          "partial": "Package",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/scion-browser/docs/Scion-PersistentBrowser.html#t:Package"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scion.PersistentBrowser",
          "name": "SQL",
          "package": "scion-browser",
          "source": "src/Scion-PersistentBrowser-DbTypes.html#SQL",
          "type": "type"
        },
        "index": {
          "hierarchy": "Scion PersistentBrowser",
          "module": "Scion.PersistentBrowser",
          "name": "SQL",
          "package": "scion-browser",
          "partial": "SQL",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/scion-browser/docs/Scion-PersistentBrowser.html#t:SQL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scion.PersistentBrowser",
          "name": "DbClass",
          "package": "scion-browser",
          "signature": "DbClass",
          "source": "src/Scion-PersistentBrowser-Types.html#DbDeclType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Scion PersistentBrowser",
          "module": "Scion.PersistentBrowser",
          "name": "DbClass",
          "package": "scion-browser",
          "partial": "Db Class",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scion-browser/docs/Scion-PersistentBrowser.html#v:DbClass"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scion.PersistentBrowser",
          "name": "DbCompleteDecl",
          "package": "scion-browser",
          "signature": "DbCompleteDecl DbDecl [DbContext] [DbTyVar] [DbFunDep] [DbConstructor]",
          "source": "src/Scion-PersistentBrowser-DbTypes.html#DbCompleteDecl",
          "type": "function"
        },
        "index": {
          "hierarchy": "Scion PersistentBrowser",
          "module": "Scion.PersistentBrowser",
          "name": "DbCompleteDecl",
          "normalized": "DbCompleteDecl DbDecl[DbContext][DbTyVar][DbFunDep][DbConstructor]",
          "package": "scion-browser",
          "partial": "Db Complete Decl",
          "signature": "DbCompleteDecl DbDecl[DbContext][DbTyVar][DbFunDep][DbConstructor]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scion-browser/docs/Scion-PersistentBrowser.html#v:DbCompleteDecl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scion.PersistentBrowser",
          "name": "DbConstructor",
          "package": "scion-browser",
          "signature": "DbConstructor",
          "source": "src/Scion-PersistentBrowser-DbTypes.html#DbConstructorGeneric",
          "type": "function"
        },
        "index": {
          "hierarchy": "Scion PersistentBrowser",
          "module": "Scion.PersistentBrowser",
          "name": "DbConstructor",
          "package": "scion-browser",
          "partial": "Db Constructor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scion-browser/docs/Scion-PersistentBrowser.html#v:DbConstructor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scion.PersistentBrowser",
          "name": "DbContext",
          "package": "scion-browser",
          "signature": "DbContext",
          "source": "src/Scion-PersistentBrowser-DbTypes.html#DbContextGeneric",
          "type": "function"
        },
        "index": {
          "hierarchy": "Scion PersistentBrowser",
          "module": "Scion.PersistentBrowser",
          "name": "DbContext",
          "package": "scion-browser",
          "partial": "Db Context",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scion-browser/docs/Scion-PersistentBrowser.html#v:DbContext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scion.PersistentBrowser",
          "name": "DbData",
          "package": "scion-browser",
          "signature": "DbData",
          "source": "src/Scion-PersistentBrowser-Types.html#DbDeclType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Scion PersistentBrowser",
          "module": "Scion.PersistentBrowser",
          "name": "DbData",
          "package": "scion-browser",
          "partial": "Db Data",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scion-browser/docs/Scion-PersistentBrowser.html#v:DbData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scion.PersistentBrowser",
          "name": "DbDecl",
          "package": "scion-browser",
          "signature": "DbDecl",
          "source": "src/Scion-PersistentBrowser-DbTypes.html#DbDeclGeneric",
          "type": "function"
        },
        "index": {
          "hierarchy": "Scion PersistentBrowser",
          "module": "Scion.PersistentBrowser",
          "name": "DbDecl",
          "package": "scion-browser",
          "partial": "Db Decl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scion-browser/docs/Scion-PersistentBrowser.html#v:DbDecl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scion.PersistentBrowser",
          "name": "DbFunDep",
          "package": "scion-browser",
          "signature": "DbFunDep",
          "source": "src/Scion-PersistentBrowser-DbTypes.html#DbFunDepGeneric",
          "type": "function"
        },
        "index": {
          "hierarchy": "Scion PersistentBrowser",
          "module": "Scion.PersistentBrowser",
          "name": "DbFunDep",
          "package": "scion-browser",
          "partial": "Db Fun Dep",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scion-browser/docs/Scion-PersistentBrowser.html#v:DbFunDep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scion.PersistentBrowser",
          "name": "DbInstance",
          "package": "scion-browser",
          "signature": "DbInstance",
          "source": "src/Scion-PersistentBrowser-Types.html#DbDeclType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Scion PersistentBrowser",
          "module": "Scion.PersistentBrowser",
          "name": "DbInstance",
          "package": "scion-browser",
          "partial": "Db Instance",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scion-browser/docs/Scion-PersistentBrowser.html#v:DbInstance"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scion.PersistentBrowser",
          "name": "DbModule",
          "package": "scion-browser",
          "signature": "DbModule",
          "source": "src/Scion-PersistentBrowser-DbTypes.html#DbModuleGeneric",
          "type": "function"
        },
        "index": {
          "hierarchy": "Scion PersistentBrowser",
          "module": "Scion.PersistentBrowser",
          "name": "DbModule",
          "package": "scion-browser",
          "partial": "Db Module",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scion-browser/docs/Scion-PersistentBrowser.html#v:DbModule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scion.PersistentBrowser",
          "name": "DbNewType",
          "package": "scion-browser",
          "signature": "DbNewType",
          "source": "src/Scion-PersistentBrowser-Types.html#DbDeclType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Scion PersistentBrowser",
          "module": "Scion.PersistentBrowser",
          "name": "DbNewType",
          "package": "scion-browser",
          "partial": "Db New Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scion-browser/docs/Scion-PersistentBrowser.html#v:DbNewType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scion.PersistentBrowser",
          "name": "DbPackage",
          "package": "scion-browser",
          "signature": "DbPackage",
          "source": "src/Scion-PersistentBrowser-DbTypes.html#DbPackageGeneric",
          "type": "function"
        },
        "index": {
          "hierarchy": "Scion PersistentBrowser",
          "module": "Scion.PersistentBrowser",
          "name": "DbPackage",
          "package": "scion-browser",
          "partial": "Db Package",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scion-browser/docs/Scion-PersistentBrowser.html#v:DbPackage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scion.PersistentBrowser",
          "name": "DbPackageIdentifier",
          "package": "scion-browser",
          "signature": "DbPackageIdentifier String String",
          "source": "src/Scion-PersistentBrowser-DbTypes.html#DbPackageIdentifier",
          "type": "function"
        },
        "index": {
          "hierarchy": "Scion PersistentBrowser",
          "module": "Scion.PersistentBrowser",
          "name": "DbPackageIdentifier",
          "package": "scion-browser",
          "partial": "Db Package Identifier",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scion-browser/docs/Scion-PersistentBrowser.html#v:DbPackageIdentifier"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scion.PersistentBrowser",
          "name": "DbSignature",
          "package": "scion-browser",
          "signature": "DbSignature",
          "source": "src/Scion-PersistentBrowser-Types.html#DbDeclType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Scion PersistentBrowser",
          "module": "Scion.PersistentBrowser",
          "name": "DbSignature",
          "package": "scion-browser",
          "partial": "Db Signature",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scion-browser/docs/Scion-PersistentBrowser.html#v:DbSignature"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scion.PersistentBrowser",
          "name": "DbTyVar",
          "package": "scion-browser",
          "signature": "DbTyVar",
          "source": "src/Scion-PersistentBrowser-DbTypes.html#DbTyVarGeneric",
          "type": "function"
        },
        "index": {
          "hierarchy": "Scion PersistentBrowser",
          "module": "Scion.PersistentBrowser",
          "name": "DbTyVar",
          "package": "scion-browser",
          "partial": "Db Ty Var",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scion-browser/docs/Scion-PersistentBrowser.html#v:DbTyVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scion.PersistentBrowser",
          "name": "DbType",
          "package": "scion-browser",
          "signature": "DbType",
          "source": "src/Scion-PersistentBrowser-Types.html#DbDeclType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Scion PersistentBrowser",
          "module": "Scion.PersistentBrowser",
          "name": "DbType",
          "package": "scion-browser",
          "partial": "Db Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scion-browser/docs/Scion-PersistentBrowser.html#v:DbType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scion.PersistentBrowser",
          "name": "Doc",
          "package": "scion-browser",
          "signature": "Doc Text",
          "source": "src/Scion-PersistentBrowser-Types.html#Doc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Scion PersistentBrowser",
          "module": "Scion.PersistentBrowser",
          "name": "Doc",
          "package": "scion-browser",
          "partial": "Doc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scion-browser/docs/Scion-PersistentBrowser.html#v:Doc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scion.PersistentBrowser",
          "name": "NoDoc",
          "package": "scion-browser",
          "signature": "NoDoc",
          "source": "src/Scion-PersistentBrowser-Types.html#Doc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Scion PersistentBrowser",
          "module": "Scion.PersistentBrowser",
          "name": "NoDoc",
          "package": "scion-browser",
          "partial": "No Doc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scion-browser/docs/Scion-PersistentBrowser.html#v:NoDoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scion.PersistentBrowser",
          "name": "Package",
          "package": "scion-browser",
          "signature": "Package l PackageIdentifier (Map String (Documented Module))",
          "source": "src/Scion-PersistentBrowser-Types.html#Package",
          "type": "function"
        },
        "index": {
          "hierarchy": "Scion PersistentBrowser",
          "module": "Scion.PersistentBrowser",
          "name": "Package",
          "package": "scion-browser",
          "partial": "Package",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scion-browser/docs/Scion-PersistentBrowser.html#v:Package"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scion.PersistentBrowser",
          "name": "dbConstructorDeclId",
          "package": "scion-browser",
          "signature": "(KeyBackend backend (DbDeclGeneric backend))",
          "source": "src/Scion-PersistentBrowser-DbTypes.html#DbConstructorGeneric",
          "type": "function"
        },
        "index": {
          "hierarchy": "Scion PersistentBrowser",
          "module": "Scion.PersistentBrowser",
          "name": "dbConstructorDeclId",
          "package": "scion-browser",
          "partial": "Constructor Decl Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scion-browser/docs/Scion-PersistentBrowser.html#v:dbConstructorDeclId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scion.PersistentBrowser",
          "name": "dbConstructorName",
          "package": "scion-browser",
          "signature": "String",
          "source": "src/Scion-PersistentBrowser-DbTypes.html#DbConstructorGeneric",
          "type": "function"
        },
        "index": {
          "hierarchy": "Scion PersistentBrowser",
          "module": "Scion.PersistentBrowser",
          "name": "dbConstructorName",
          "package": "scion-browser",
          "partial": "Constructor Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scion-browser/docs/Scion-PersistentBrowser.html#v:dbConstructorName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scion.PersistentBrowser",
          "name": "dbConstructorSignature",
          "package": "scion-browser",
          "signature": "String",
          "source": "src/Scion-PersistentBrowser-DbTypes.html#DbConstructorGeneric",
          "type": "function"
        },
        "index": {
          "hierarchy": "Scion PersistentBrowser",
          "module": "Scion.PersistentBrowser",
          "name": "dbConstructorSignature",
          "package": "scion-browser",
          "partial": "Constructor Signature",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scion-browser/docs/Scion-PersistentBrowser.html#v:dbConstructorSignature"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scion.PersistentBrowser",
          "name": "dbContextDeclId",
          "package": "scion-browser",
          "signature": "(KeyBackend backend (DbDeclGeneric backend))",
          "source": "src/Scion-PersistentBrowser-DbTypes.html#DbContextGeneric",
          "type": "function"
        },
        "index": {
          "hierarchy": "Scion PersistentBrowser",
          "module": "Scion.PersistentBrowser",
          "name": "dbContextDeclId",
          "package": "scion-browser",
          "partial": "Context Decl Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scion-browser/docs/Scion-PersistentBrowser.html#v:dbContextDeclId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scion.PersistentBrowser",
          "name": "dbContextShown",
          "package": "scion-browser",
          "signature": "String",
          "source": "src/Scion-PersistentBrowser-DbTypes.html#DbContextGeneric",
          "type": "function"
        },
        "index": {
          "hierarchy": "Scion PersistentBrowser",
          "module": "Scion.PersistentBrowser",
          "name": "dbContextShown",
          "package": "scion-browser",
          "partial": "Context Shown",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scion-browser/docs/Scion-PersistentBrowser.html#v:dbContextShown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scion.PersistentBrowser",
          "name": "dbDeclDeclType",
          "package": "scion-browser",
          "signature": "DbDeclType",
          "source": "src/Scion-PersistentBrowser-DbTypes.html#DbDeclGeneric",
          "type": "function"
        },
        "index": {
          "hierarchy": "Scion PersistentBrowser",
          "module": "Scion.PersistentBrowser",
          "name": "dbDeclDeclType",
          "package": "scion-browser",
          "partial": "Decl Decl Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scion-browser/docs/Scion-PersistentBrowser.html#v:dbDeclDeclType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scion.PersistentBrowser",
          "name": "dbDeclDoc",
          "package": "scion-browser",
          "signature": "(Maybe String)",
          "source": "src/Scion-PersistentBrowser-DbTypes.html#DbDeclGeneric",
          "type": "function"
        },
        "index": {
          "hierarchy": "Scion PersistentBrowser",
          "module": "Scion.PersistentBrowser",
          "name": "dbDeclDoc",
          "package": "scion-browser",
          "partial": "Decl Doc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scion-browser/docs/Scion-PersistentBrowser.html#v:dbDeclDoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scion.PersistentBrowser",
          "name": "dbDeclEquals",
          "package": "scion-browser",
          "signature": "(Maybe String)",
          "source": "src/Scion-PersistentBrowser-DbTypes.html#DbDeclGeneric",
          "type": "function"
        },
        "index": {
          "hierarchy": "Scion PersistentBrowser",
          "module": "Scion.PersistentBrowser",
          "name": "dbDeclEquals",
          "package": "scion-browser",
          "partial": "Decl Equals",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scion-browser/docs/Scion-PersistentBrowser.html#v:dbDeclEquals"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scion.PersistentBrowser",
          "name": "dbDeclKind",
          "package": "scion-browser",
          "signature": "(Maybe String)",
          "source": "src/Scion-PersistentBrowser-DbTypes.html#DbDeclGeneric",
          "type": "function"
        },
        "index": {
          "hierarchy": "Scion PersistentBrowser",
          "module": "Scion.PersistentBrowser",
          "name": "dbDeclKind",
          "package": "scion-browser",
          "partial": "Decl Kind",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scion-browser/docs/Scion-PersistentBrowser.html#v:dbDeclKind"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scion.PersistentBrowser",
          "name": "dbDeclModuleId",
          "package": "scion-browser",
          "signature": "(KeyBackend backend (DbModuleGeneric backend))",
          "source": "src/Scion-PersistentBrowser-DbTypes.html#DbDeclGeneric",
          "type": "function"
        },
        "index": {
          "hierarchy": "Scion PersistentBrowser",
          "module": "Scion.PersistentBrowser",
          "name": "dbDeclModuleId",
          "package": "scion-browser",
          "partial": "Decl Module Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scion-browser/docs/Scion-PersistentBrowser.html#v:dbDeclModuleId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scion.PersistentBrowser",
          "name": "dbDeclName",
          "package": "scion-browser",
          "signature": "String",
          "source": "src/Scion-PersistentBrowser-DbTypes.html#DbDeclGeneric",
          "type": "function"
        },
        "index": {
          "hierarchy": "Scion PersistentBrowser",
          "module": "Scion.PersistentBrowser",
          "name": "dbDeclName",
          "package": "scion-browser",
          "partial": "Decl Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scion-browser/docs/Scion-PersistentBrowser.html#v:dbDeclName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scion.PersistentBrowser",
          "name": "dbDeclSignature",
          "package": "scion-browser",
          "signature": "(Maybe String)",
          "source": "src/Scion-PersistentBrowser-DbTypes.html#DbDeclGeneric",
          "type": "function"
        },
        "index": {
          "hierarchy": "Scion PersistentBrowser",
          "module": "Scion.PersistentBrowser",
          "name": "dbDeclSignature",
          "package": "scion-browser",
          "partial": "Decl Signature",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scion-browser/docs/Scion-PersistentBrowser.html#v:dbDeclSignature"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scion.PersistentBrowser",
          "name": "dbFunDepDeclId",
          "package": "scion-browser",
          "signature": "(KeyBackend backend (DbDeclGeneric backend))",
          "source": "src/Scion-PersistentBrowser-DbTypes.html#DbFunDepGeneric",
          "type": "function"
        },
        "index": {
          "hierarchy": "Scion PersistentBrowser",
          "module": "Scion.PersistentBrowser",
          "name": "dbFunDepDeclId",
          "package": "scion-browser",
          "partial": "Fun Dep Decl Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scion-browser/docs/Scion-PersistentBrowser.html#v:dbFunDepDeclId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scion.PersistentBrowser",
          "name": "dbFunDepName",
          "package": "scion-browser",
          "signature": "String",
          "source": "src/Scion-PersistentBrowser-DbTypes.html#DbFunDepGeneric",
          "type": "function"
        },
        "index": {
          "hierarchy": "Scion PersistentBrowser",
          "module": "Scion.PersistentBrowser",
          "name": "dbFunDepName",
          "package": "scion-browser",
          "partial": "Fun Dep Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scion-browser/docs/Scion-PersistentBrowser.html#v:dbFunDepName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scion.PersistentBrowser",
          "name": "dbModuleDoc",
          "package": "scion-browser",
          "signature": "(Maybe String)",
          "source": "src/Scion-PersistentBrowser-DbTypes.html#DbModuleGeneric",
          "type": "function"
        },
        "index": {
          "hierarchy": "Scion PersistentBrowser",
          "module": "Scion.PersistentBrowser",
          "name": "dbModuleDoc",
          "package": "scion-browser",
          "partial": "Module Doc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scion-browser/docs/Scion-PersistentBrowser.html#v:dbModuleDoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scion.PersistentBrowser",
          "name": "dbModuleName",
          "package": "scion-browser",
          "signature": "String",
          "source": "src/Scion-PersistentBrowser-DbTypes.html#DbModuleGeneric",
          "type": "function"
        },
        "index": {
          "hierarchy": "Scion PersistentBrowser",
          "module": "Scion.PersistentBrowser",
          "name": "dbModuleName",
          "package": "scion-browser",
          "partial": "Module Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scion-browser/docs/Scion-PersistentBrowser.html#v:dbModuleName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scion.PersistentBrowser",
          "name": "dbModulePackageId",
          "package": "scion-browser",
          "signature": "(KeyBackend backend (DbPackageGeneric backend))",
          "source": "src/Scion-PersistentBrowser-DbTypes.html#DbModuleGeneric",
          "type": "function"
        },
        "index": {
          "hierarchy": "Scion PersistentBrowser",
          "module": "Scion.PersistentBrowser",
          "name": "dbModulePackageId",
          "package": "scion-browser",
          "partial": "Module Package Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scion-browser/docs/Scion-PersistentBrowser.html#v:dbModulePackageId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scion.PersistentBrowser",
          "name": "dbPackageDoc",
          "package": "scion-browser",
          "signature": "(Maybe String)",
          "source": "src/Scion-PersistentBrowser-DbTypes.html#DbPackageGeneric",
          "type": "function"
        },
        "index": {
          "hierarchy": "Scion PersistentBrowser",
          "module": "Scion.PersistentBrowser",
          "name": "dbPackageDoc",
          "package": "scion-browser",
          "partial": "Package Doc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scion-browser/docs/Scion-PersistentBrowser.html#v:dbPackageDoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scion.PersistentBrowser",
          "name": "dbPackageName",
          "package": "scion-browser",
          "signature": "String",
          "source": "src/Scion-PersistentBrowser-DbTypes.html#DbPackageGeneric",
          "type": "function"
        },
        "index": {
          "hierarchy": "Scion PersistentBrowser",
          "module": "Scion.PersistentBrowser",
          "name": "dbPackageName",
          "package": "scion-browser",
          "partial": "Package Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scion-browser/docs/Scion-PersistentBrowser.html#v:dbPackageName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scion.PersistentBrowser",
          "name": "dbPackageToIdentifier",
          "package": "scion-browser",
          "signature": "DbPackage -\u003e DbPackageIdentifier",
          "source": "src/Scion-PersistentBrowser-DbTypes.html#dbPackageToIdentifier",
          "type": "function"
        },
        "index": {
          "hierarchy": "Scion PersistentBrowser",
          "module": "Scion.PersistentBrowser",
          "name": "dbPackageToIdentifier",
          "normalized": "DbPackage-\u003eDbPackageIdentifier",
          "package": "scion-browser",
          "partial": "Package To Identifier",
          "signature": "DbPackage-\u003eDbPackageIdentifier",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scion-browser/docs/Scion-PersistentBrowser.html#v:dbPackageToIdentifier"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scion.PersistentBrowser",
          "name": "dbPackageVersion",
          "package": "scion-browser",
          "signature": "String",
          "source": "src/Scion-PersistentBrowser-DbTypes.html#DbPackageGeneric",
          "type": "function"
        },
        "index": {
          "hierarchy": "Scion PersistentBrowser",
          "module": "Scion.PersistentBrowser",
          "name": "dbPackageVersion",
          "package": "scion-browser",
          "partial": "Package Version",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scion-browser/docs/Scion-PersistentBrowser.html#v:dbPackageVersion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scion.PersistentBrowser",
          "name": "dbTyVarDeclId",
          "package": "scion-browser",
          "signature": "(KeyBackend backend (DbDeclGeneric backend))",
          "source": "src/Scion-PersistentBrowser-DbTypes.html#DbTyVarGeneric",
          "type": "function"
        },
        "index": {
          "hierarchy": "Scion PersistentBrowser",
          "module": "Scion.PersistentBrowser",
          "name": "dbTyVarDeclId",
          "package": "scion-browser",
          "partial": "Ty Var Decl Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scion-browser/docs/Scion-PersistentBrowser.html#v:dbTyVarDeclId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scion.PersistentBrowser",
          "name": "dbTyVarName",
          "package": "scion-browser",
          "signature": "String",
          "source": "src/Scion-PersistentBrowser-DbTypes.html#DbTyVarGeneric",
          "type": "function"
        },
        "index": {
          "hierarchy": "Scion PersistentBrowser",
          "module": "Scion.PersistentBrowser",
          "name": "dbTyVarName",
          "package": "scion-browser",
          "partial": "Ty Var Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scion-browser/docs/Scion-PersistentBrowser.html#v:dbTyVarName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scion.PersistentBrowser",
          "name": "docFromString",
          "package": "scion-browser",
          "signature": "String -\u003e Doc",
          "source": "src/Scion-PersistentBrowser-Types.html#docFromString",
          "type": "function"
        },
        "index": {
          "hierarchy": "Scion PersistentBrowser",
          "module": "Scion.PersistentBrowser",
          "name": "docFromString",
          "normalized": "String-\u003eDoc",
          "package": "scion-browser",
          "partial": "From String",
          "signature": "String-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scion-browser/docs/Scion-PersistentBrowser.html#v:docFromString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scion.PersistentBrowser",
          "name": "getChild",
          "package": "scion-browser",
          "signature": "parent l -\u003e String -\u003e Maybe (child l)",
          "source": "src/Scion-PersistentBrowser-Types.html#getChild",
          "type": "method"
        },
        "index": {
          "hierarchy": "Scion PersistentBrowser",
          "module": "Scion.PersistentBrowser",
          "name": "getChild",
          "normalized": "a b-\u003eString-\u003eMaybe(c b)",
          "package": "scion-browser",
          "partial": "Child",
          "signature": "parent l-\u003eString-\u003eMaybe(child l)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/scion-browser/docs/Scion-PersistentBrowser.html#v:getChild"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scion.PersistentBrowser",
          "name": "getChildren",
          "package": "scion-browser",
          "signature": "parent l -\u003e [child l]",
          "source": "src/Scion-PersistentBrowser-Types.html#getChildren",
          "type": "method"
        },
        "index": {
          "hierarchy": "Scion PersistentBrowser",
          "module": "Scion.PersistentBrowser",
          "name": "getChildren",
          "normalized": "a b-\u003e[c b]",
          "package": "scion-browser",
          "partial": "Children",
          "signature": "parent l-\u003e[child l]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/scion-browser/docs/Scion-PersistentBrowser.html#v:getChildren"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scion.PersistentBrowser",
          "name": "getName",
          "package": "scion-browser",
          "signature": "e l -\u003e String",
          "source": "src/Scion-PersistentBrowser-Types.html#getName",
          "type": "method"
        },
        "index": {
          "hierarchy": "Scion PersistentBrowser",
          "module": "Scion.PersistentBrowser",
          "name": "getName",
          "normalized": "a b-\u003eString",
          "package": "scion-browser",
          "partial": "Name",
          "signature": "e l-\u003eString",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/scion-browser/docs/Scion-PersistentBrowser.html#v:getName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGets the name inside a Name constructor.\n\u003c/p\u003e",
          "module": "Scion.PersistentBrowser",
          "name": "getNameString",
          "package": "scion-browser",
          "signature": "Name l -\u003e String",
          "source": "src/Scion-PersistentBrowser-Types.html#getNameString",
          "type": "function"
        },
        "index": {
          "description": "Gets the name inside Name constructor",
          "hierarchy": "Scion PersistentBrowser",
          "module": "Scion.PersistentBrowser",
          "name": "getNameString",
          "normalized": "Name a-\u003eString",
          "package": "scion-browser",
          "partial": "Name String",
          "signature": "Name l-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scion-browser/docs/Scion-PersistentBrowser.html#v:getNameString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGets the qualified name as a string.\n\u003c/p\u003e",
          "module": "Scion.PersistentBrowser",
          "name": "getQNameString",
          "package": "scion-browser",
          "signature": "QName l -\u003e String",
          "source": "src/Scion-PersistentBrowser-Types.html#getQNameString",
          "type": "function"
        },
        "index": {
          "description": "Gets the qualified name as string",
          "hierarchy": "Scion PersistentBrowser",
          "module": "Scion.PersistentBrowser",
          "name": "getQNameString",
          "normalized": "QName a-\u003eString",
          "package": "scion-browser",
          "partial": "QName String",
          "signature": "QName l-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scion-browser/docs/Scion-PersistentBrowser.html#v:getQNameString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scion.PersistentBrowser",
          "name": "migrateAll",
          "package": "scion-browser",
          "signature": "Migration (SqlPersistT m)",
          "source": "src/Scion-PersistentBrowser-DbTypes.html#migrateAll",
          "type": "function"
        },
        "index": {
          "hierarchy": "Scion PersistentBrowser",
          "module": "Scion.PersistentBrowser",
          "name": "migrateAll",
          "package": "scion-browser",
          "partial": "All",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scion-browser/docs/Scion-PersistentBrowser.html#v:migrateAll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ewrapper around logging methods, so we can enable logging when we debug\n\u003c/p\u003e",
          "module": "Scion.PersistentBrowser",
          "name": "runLogging",
          "package": "scion-browser",
          "signature": "LoggingT m a -\u003e m a",
          "source": "src/Scion-PersistentBrowser-DbTypes.html#runLogging",
          "type": "function"
        },
        "index": {
          "description": "wrapper around logging methods so we can enable logging when we debug",
          "hierarchy": "Scion PersistentBrowser",
          "module": "Scion.PersistentBrowser",
          "name": "runLogging",
          "normalized": "LoggingT a b-\u003ea b",
          "package": "scion-browser",
          "partial": "Logging",
          "signature": "LoggingT m a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scion-browser/docs/Scion-PersistentBrowser.html#v:runLogging"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scion.PersistentHoogle",
          "name": "PersistentHoogle",
          "package": "scion-browser",
          "source": "src/Scion-PersistentHoogle.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Scion PersistentHoogle",
          "module": "Scion.PersistentHoogle",
          "name": "PersistentHoogle",
          "package": "scion-browser",
          "partial": "Persistent Hoogle",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/scion-browser/docs/Scion-PersistentHoogle.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003estatus of hoogle operation\n\u003c/p\u003e",
          "module": "Scion.PersistentHoogle",
          "name": "HoogleStatus",
          "package": "scion-browser",
          "source": "src/Scion-PersistentHoogle-Types.html#HoogleStatus",
          "type": "data"
        },
        "index": {
          "description": "status of hoogle operation",
          "hierarchy": "Scion PersistentHoogle",
          "module": "Scion.PersistentHoogle",
          "name": "HoogleStatus",
          "package": "scion-browser",
          "partial": "Hoogle Status",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/scion-browser/docs/Scion-PersistentHoogle.html#t:HoogleStatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scion.PersistentHoogle",
          "name": "Query",
          "package": "scion-browser",
          "source": "src/Scion-PersistentHoogle-Types.html#Query",
          "type": "data"
        },
        "index": {
          "hierarchy": "Scion PersistentHoogle",
          "module": "Scion.PersistentHoogle",
          "name": "Query",
          "package": "scion-browser",
          "partial": "Query",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/scion-browser/docs/Scion-PersistentHoogle.html#t:Query"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scion.PersistentHoogle",
          "name": "Result",
          "package": "scion-browser",
          "source": "src/Scion-PersistentHoogle-Types.html#Result",
          "type": "data"
        },
        "index": {
          "hierarchy": "Scion PersistentHoogle",
          "module": "Scion.PersistentHoogle",
          "name": "Result",
          "package": "scion-browser",
          "partial": "Result",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/scion-browser/docs/Scion-PersistentHoogle.html#t:Result"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scion.PersistentHoogle",
          "name": "Results",
          "package": "scion-browser",
          "source": "src/Scion-PersistentHoogle-Types.html#Results",
          "type": "type"
        },
        "index": {
          "hierarchy": "Scion PersistentHoogle",
          "module": "Scion.PersistentHoogle",
          "name": "Results",
          "package": "scion-browser",
          "partial": "Results",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/scion-browser/docs/Scion-PersistentHoogle.html#t:Results"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scion.PersistentHoogle",
          "name": "Error",
          "package": "scion-browser",
          "signature": "Error",
          "source": "src/Scion-PersistentHoogle-Types.html#HoogleStatus",
          "type": "function"
        },
        "index": {
          "hierarchy": "Scion PersistentHoogle",
          "module": "Scion.PersistentHoogle",
          "name": "Error",
          "package": "scion-browser",
          "partial": "Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scion-browser/docs/Scion-PersistentHoogle.html#v:Error"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scion.PersistentHoogle",
          "name": "Missing",
          "package": "scion-browser",
          "signature": "Missing",
          "source": "src/Scion-PersistentHoogle-Types.html#HoogleStatus",
          "type": "function"
        },
        "index": {
          "hierarchy": "Scion PersistentHoogle",
          "module": "Scion.PersistentHoogle",
          "name": "Missing",
          "package": "scion-browser",
          "partial": "Missing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scion-browser/docs/Scion-PersistentHoogle.html#v:Missing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scion.PersistentHoogle",
          "name": "OK",
          "package": "scion-browser",
          "signature": "OK",
          "source": "src/Scion-PersistentHoogle-Types.html#HoogleStatus",
          "type": "function"
        },
        "index": {
          "hierarchy": "Scion PersistentHoogle",
          "module": "Scion.PersistentHoogle",
          "name": "OK",
          "package": "scion-browser",
          "partial": "OK",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scion-browser/docs/Scion-PersistentHoogle.html#v:OK"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scion.PersistentHoogle",
          "name": "Query",
          "package": "scion-browser",
          "signature": "Query String",
          "source": "src/Scion-PersistentHoogle-Types.html#Query",
          "type": "function"
        },
        "index": {
          "hierarchy": "Scion PersistentHoogle",
          "module": "Scion.PersistentHoogle",
          "name": "Query",
          "package": "scion-browser",
          "partial": "Query",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scion-browser/docs/Scion-PersistentHoogle.html#v:Query"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scion.PersistentHoogle",
          "name": "RConstructor",
          "package": "scion-browser",
          "signature": "RConstructor [(DbPackageIdentifier, String, DbCompleteDecl, DbConstructor)]",
          "source": "src/Scion-PersistentHoogle-Types.html#Result",
          "type": "function"
        },
        "index": {
          "hierarchy": "Scion PersistentHoogle",
          "module": "Scion.PersistentHoogle",
          "name": "RConstructor",
          "normalized": "RConstructor[(DbPackageIdentifier,String,DbCompleteDecl,DbConstructor)]",
          "package": "scion-browser",
          "partial": "RConstructor",
          "signature": "RConstructor[(DbPackageIdentifier,String,DbCompleteDecl,DbConstructor)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scion-browser/docs/Scion-PersistentHoogle.html#v:RConstructor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scion.PersistentHoogle",
          "name": "RDeclaration",
          "package": "scion-browser",
          "signature": "RDeclaration [(DbPackageIdentifier, String, DbCompleteDecl)]",
          "source": "src/Scion-PersistentHoogle-Types.html#Result",
          "type": "function"
        },
        "index": {
          "hierarchy": "Scion PersistentHoogle",
          "module": "Scion.PersistentHoogle",
          "name": "RDeclaration",
          "normalized": "RDeclaration[(DbPackageIdentifier,String,DbCompleteDecl)]",
          "package": "scion-browser",
          "partial": "RDeclaration",
          "signature": "RDeclaration[(DbPackageIdentifier,String,DbCompleteDecl)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scion-browser/docs/Scion-PersistentHoogle.html#v:RDeclaration"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scion.PersistentHoogle",
          "name": "RKeyword",
          "package": "scion-browser",
          "signature": "RKeyword String",
          "source": "src/Scion-PersistentHoogle-Types.html#Result",
          "type": "function"
        },
        "index": {
          "hierarchy": "Scion PersistentHoogle",
          "module": "Scion.PersistentHoogle",
          "name": "RKeyword",
          "package": "scion-browser",
          "partial": "RKeyword",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scion-browser/docs/Scion-PersistentHoogle.html#v:RKeyword"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scion.PersistentHoogle",
          "name": "RModule",
          "package": "scion-browser",
          "signature": "RModule [(DbPackageIdentifier, DbModule)]",
          "source": "src/Scion-PersistentHoogle-Types.html#Result",
          "type": "function"
        },
        "index": {
          "hierarchy": "Scion PersistentHoogle",
          "module": "Scion.PersistentHoogle",
          "name": "RModule",
          "normalized": "RModule[(DbPackageIdentifier,DbModule)]",
          "package": "scion-browser",
          "partial": "RModule",
          "signature": "RModule[(DbPackageIdentifier,DbModule)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scion-browser/docs/Scion-PersistentHoogle.html#v:RModule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scion.PersistentHoogle",
          "name": "RPackage",
          "package": "scion-browser",
          "signature": "RPackage [DbPackage]",
          "source": "src/Scion-PersistentHoogle-Types.html#Result",
          "type": "function"
        },
        "index": {
          "hierarchy": "Scion PersistentHoogle",
          "module": "Scion.PersistentHoogle",
          "name": "RPackage",
          "normalized": "RPackage[DbPackage]",
          "package": "scion-browser",
          "partial": "RPackage",
          "signature": "RPackage[DbPackage]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scion-browser/docs/Scion-PersistentHoogle.html#v:RPackage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scion.PersistentHoogle",
          "name": "checkDatabase",
          "package": "scion-browser",
          "signature": "Maybe String -\u003e IO HoogleStatus",
          "source": "src/Scion-PersistentHoogle.html#checkDatabase",
          "type": "function"
        },
        "index": {
          "hierarchy": "Scion PersistentHoogle",
          "module": "Scion.PersistentHoogle",
          "name": "checkDatabase",
          "normalized": "Maybe String-\u003eIO HoogleStatus",
          "package": "scion-browser",
          "partial": "Database",
          "signature": "Maybe String-\u003eIO HoogleStatus",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scion-browser/docs/Scion-PersistentHoogle.html#v:checkDatabase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scion.PersistentHoogle",
          "name": "downloadData",
          "package": "scion-browser",
          "signature": "Maybe String -\u003e IO HoogleStatus",
          "source": "src/Scion-PersistentHoogle.html#downloadData",
          "type": "function"
        },
        "index": {
          "hierarchy": "Scion PersistentHoogle",
          "module": "Scion.PersistentHoogle",
          "name": "downloadData",
          "normalized": "Maybe String-\u003eIO HoogleStatus",
          "package": "scion-browser",
          "partial": "Data",
          "signature": "Maybe String-\u003eIO HoogleStatus",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scion-browser/docs/Scion-PersistentHoogle.html#v:downloadData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scion.PersistentHoogle",
          "name": "query",
          "package": "scion-browser",
          "signature": "Maybe String -\u003e String -\u003e SQL [Result]",
          "source": "src/Scion-PersistentHoogle.html#query",
          "type": "function"
        },
        "index": {
          "hierarchy": "Scion PersistentHoogle",
          "module": "Scion.PersistentHoogle",
          "name": "query",
          "normalized": "Maybe String-\u003eString-\u003eSQL[Result]",
          "package": "scion-browser",
          "signature": "Maybe String-\u003eString-\u003eSQL[Result]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scion-browser/docs/Scion-PersistentHoogle.html#v:query"
      }
    }
  ]
]