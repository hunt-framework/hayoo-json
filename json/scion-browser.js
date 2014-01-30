[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scion-browser/docs/Scion-PersistentBrowser-Build.html#",
      "description": {
        "fct-module": "Scion.PersistentBrowser.Build",
        "fct-package": "scion-browser",
        "fct-signature": "module",
        "fct-source": "src/Scion-PersistentBrowser-Build.html",
        "fct-type": "module",
        "title": "Build"
      },
      "index": {
        "description": "",
        "hierarchy": "Scion PersistentBrowser Build",
        "module": "Scion.PersistentBrowser.Build",
        "name": "Build",
        "normalized": "",
        "package": "scion-browser",
        "partial": "Build",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scion-browser/docs/Scion-PersistentBrowser-Build.html#v:createCabalDatabase",
      "description": {
        "fct-descr": "\u003cp\u003eGet the database from a set of Cabal packages.\n\u003c/p\u003e",
        "fct-module": "Scion.PersistentBrowser.Build",
        "fct-package": "scion-browser",
        "fct-signature": "Version -\u003e [PackageIdentifier] -\u003e IO ([Documented Package], [(String, ParseError)])",
        "fct-source": "src/Scion-PersistentBrowser-Build.html#createCabalDatabase",
        "fct-type": "function",
        "title": "createCabalDatabase"
      },
      "index": {
        "description": "Get the database from set of Cabal packages",
        "hierarchy": "Scion PersistentBrowser Build",
        "module": "Scion.PersistentBrowser.Build",
        "name": "createCabalDatabase",
        "normalized": "Version-\u003e[PackageIdentifier]-\u003eIO([Documented Package],[(String,ParseError)])",
        "package": "scion-browser",
        "partial": "Cabal Database",
        "signature": "Version-\u003e[PackageIdentifier]-\u003eIO([Documented Package],[(String,ParseError)])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scion-browser/docs/Scion-PersistentBrowser-Build.html#v:createHackageDatabase",
      "description": {
        "fct-descr": "\u003cp\u003eDownloads the information for the entire Hackage database\n   creating an in-memory database with it.\n   It needs a temporary directory to work on.\n\u003c/p\u003e",
        "fct-module": "Scion.PersistentBrowser.Build",
        "fct-package": "scion-browser",
        "fct-signature": "FilePath -\u003e IO ([Documented Package], [(FilePath, ParseError)])",
        "fct-source": "src/Scion-PersistentBrowser-Build.html#createHackageDatabase",
        "fct-type": "function",
        "title": "createHackageDatabase"
      },
      "index": {
        "description": "Downloads the information for the entire Hackage database creating an in-memory database with it It needs temporary directory to work on",
        "hierarchy": "Scion PersistentBrowser Build",
        "module": "Scion.PersistentBrowser.Build",
        "name": "createHackageDatabase",
        "normalized": "FilePath-\u003eIO([Documented Package],[(FilePath,ParseError)])",
        "package": "scion-browser",
        "partial": "Hackage Database",
        "signature": "FilePath-\u003eIO([Documented Package],[(FilePath,ParseError)])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scion-browser/docs/Scion-PersistentBrowser-Build.html#v:getCabalHoogle",
      "description": {
        "fct-descr": "\u003cp\u003eGet the database from a Cabal package.\n\u003c/p\u003e",
        "fct-module": "Scion.PersistentBrowser.Build",
        "fct-package": "scion-browser",
        "fct-signature": "Version -\u003e PackageIdentifier -\u003e Bool -\u003e FilePath -\u003e IO (Either ParseError (Documented Package))",
        "fct-source": "src/Scion-PersistentBrowser-Build.html#getCabalHoogle",
        "fct-type": "function",
        "title": "getCabalHoogle"
      },
      "index": {
        "description": "Get the database from Cabal package",
        "hierarchy": "Scion PersistentBrowser Build",
        "module": "Scion.PersistentBrowser.Build",
        "name": "getCabalHoogle",
        "normalized": "Version-\u003ePackageIdentifier-\u003eBool-\u003eFilePath-\u003eIO(Either ParseError(Documented Package))",
        "package": "scion-browser",
        "partial": "Cabal Hoogle",
        "signature": "Version-\u003ePackageIdentifier-\u003eBool-\u003eFilePath-\u003eIO(Either ParseError(Documented Package))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scion-browser/docs/Scion-PersistentBrowser-Build.html#v:saveHackageDatabase",
      "description": {
        "fct-descr": "\u003cp\u003eDownloads the information for the entire Hackage database\n   and saves it to the specified location.\n\u003c/p\u003e",
        "fct-module": "Scion.PersistentBrowser.Build",
        "fct-package": "scion-browser",
        "fct-signature": "FilePath -\u003e IO ()",
        "fct-source": "src/Scion-PersistentBrowser-Build.html#saveHackageDatabase",
        "fct-type": "function",
        "title": "saveHackageDatabase"
      },
      "index": {
        "description": "Downloads the information for the entire Hackage database and saves it to the specified location",
        "hierarchy": "Scion PersistentBrowser Build",
        "module": "Scion.PersistentBrowser.Build",
        "name": "saveHackageDatabase",
        "normalized": "FilePath-\u003eIO()",
        "package": "scion-browser",
        "partial": "Hackage Database",
        "signature": "FilePath-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scion-browser/docs/Scion-PersistentBrowser-Build.html#v:updateDatabase",
      "description": {
        "fct-descr": "\u003cp\u003eUpdates a database with changes in the installed package base.\n\u003c/p\u003e",
        "fct-module": "Scion.PersistentBrowser.Build",
        "fct-package": "scion-browser",
        "fct-signature": "FilePath -\u003e [InstalledPackageInfo] -\u003e IO ()",
        "fct-source": "src/Scion-PersistentBrowser-Build.html#updateDatabase",
        "fct-type": "function",
        "title": "updateDatabase"
      },
      "index": {
        "description": "Updates database with changes in the installed package base",
        "hierarchy": "Scion PersistentBrowser Build",
        "module": "Scion.PersistentBrowser.Build",
        "name": "updateDatabase",
        "normalized": "FilePath-\u003e[InstalledPackageInfo]-\u003eIO()",
        "package": "scion-browser",
        "partial": "Database",
        "signature": "FilePath-\u003e[InstalledPackageInfo]-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scion-browser/docs/Scion-PersistentBrowser-Query.html#",
      "description": {
        "fct-module": "Scion.PersistentBrowser.Query",
        "fct-package": "scion-browser",
        "fct-signature": "module",
        "fct-source": "src/Scion-PersistentBrowser-Query.html",
        "fct-type": "module",
        "title": "Query"
      },
      "index": {
        "description": "",
        "hierarchy": "Scion PersistentBrowser Query",
        "module": "Scion.PersistentBrowser.Query",
        "name": "Query",
        "normalized": "",
        "package": "scion-browser",
        "partial": "Query",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scion-browser/docs/Scion-PersistentBrowser-Query.html#t:HasDbModule",
      "description": {
        "fct-descr": "\u003cp\u003eThings that reside on a module.\n\u003c/p\u003e",
        "fct-module": "Scion.PersistentBrowser.Query",
        "fct-package": "scion-browser",
        "fct-signature": "class",
        "fct-source": "src/Scion-PersistentBrowser-Query.html#HasDbModule",
        "fct-type": "class",
        "title": "HasDbModule"
      },
      "index": {
        "description": "Things that reside on module",
        "hierarchy": "Scion PersistentBrowser Query",
        "module": "Scion.PersistentBrowser.Query",
        "name": "HasDbModule",
        "normalized": "",
        "package": "scion-browser",
        "partial": "Has Db Module",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scion-browser/docs/Scion-PersistentBrowser-Query.html#t:HasDbPackage",
      "description": {
        "fct-descr": "\u003cp\u003eThings that reside on a package.\n\u003c/p\u003e",
        "fct-module": "Scion.PersistentBrowser.Query",
        "fct-package": "scion-browser",
        "fct-signature": "class",
        "fct-source": "src/Scion-PersistentBrowser-Query.html#HasDbPackage",
        "fct-type": "class",
        "title": "HasDbPackage"
      },
      "index": {
        "description": "Things that reside on package",
        "hierarchy": "Scion PersistentBrowser Query",
        "module": "Scion.PersistentBrowser.Query",
        "name": "HasDbPackage",
        "normalized": "",
        "package": "scion-browser",
        "partial": "Has Db Package",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scion-browser/docs/Scion-PersistentBrowser-Query.html#v:allPackageIds",
      "description": {
        "fct-descr": "\u003cp\u003eGet the identifiers of all packages in the database.\n\u003c/p\u003e",
        "fct-module": "Scion.PersistentBrowser.Query",
        "fct-package": "scion-browser",
        "fct-signature": "Maybe DbPackageIdentifier -\u003e SQL [DbPackageIdentifier]",
        "fct-source": "src/Scion-PersistentBrowser-Query.html#allPackageIds",
        "fct-type": "function",
        "title": "allPackageIds"
      },
      "index": {
        "description": "Get the identifiers of all packages in the database",
        "hierarchy": "Scion PersistentBrowser Query",
        "module": "Scion.PersistentBrowser.Query",
        "name": "allPackageIds",
        "normalized": "Maybe DbPackageIdentifier-\u003eSQL[DbPackageIdentifier]",
        "package": "scion-browser",
        "partial": "Package Ids",
        "signature": "Maybe DbPackageIdentifier-\u003eSQL[DbPackageIdentifier]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scion-browser/docs/Scion-PersistentBrowser-Query.html#v:allPackages",
      "description": {
        "fct-descr": "\u003cp\u003eGet information of all packages in the database.\n\u003c/p\u003e",
        "fct-module": "Scion.PersistentBrowser.Query",
        "fct-package": "scion-browser",
        "fct-signature": "Maybe DbPackageIdentifier -\u003e SQL [DbPackage]",
        "fct-source": "src/Scion-PersistentBrowser-Query.html#allPackages",
        "fct-type": "function",
        "title": "allPackages"
      },
      "index": {
        "description": "Get information of all packages in the database",
        "hierarchy": "Scion PersistentBrowser Query",
        "module": "Scion.PersistentBrowser.Query",
        "name": "allPackages",
        "normalized": "Maybe DbPackageIdentifier-\u003eSQL[DbPackage]",
        "package": "scion-browser",
        "partial": "Packages",
        "signature": "Maybe DbPackageIdentifier-\u003eSQL[DbPackage]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scion-browser/docs/Scion-PersistentBrowser-Query.html#v:constructorsByName",
      "description": {
        "fct-descr": "\u003cp\u003eGet information about all constructors with that name.\n\u003c/p\u003e",
        "fct-module": "Scion.PersistentBrowser.Query",
        "fct-package": "scion-browser",
        "fct-signature": "String -\u003e SQL [DbConstructor]",
        "fct-source": "src/Scion-PersistentBrowser-Query.html#constructorsByName",
        "fct-type": "function",
        "title": "constructorsByName"
      },
      "index": {
        "description": "Get information about all constructors with that name",
        "hierarchy": "Scion PersistentBrowser Query",
        "module": "Scion.PersistentBrowser.Query",
        "name": "constructorsByName",
        "normalized": "String-\u003eSQL[DbConstructor]",
        "package": "scion-browser",
        "partial": "By Name",
        "signature": "String-\u003eSQL[DbConstructor]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scion-browser/docs/Scion-PersistentBrowser-Query.html#v:createIndexes",
      "description": {
        "fct-module": "Scion.PersistentBrowser.Query",
        "fct-package": "scion-browser",
        "fct-signature": "SQL ()",
        "fct-source": "src/Scion-PersistentBrowser-Query.html#createIndexes",
        "fct-type": "function",
        "title": "createIndexes"
      },
      "index": {
        "description": "",
        "hierarchy": "Scion PersistentBrowser Query",
        "module": "Scion.PersistentBrowser.Query",
        "name": "createIndexes",
        "normalized": "SQL()",
        "package": "scion-browser",
        "partial": "Indexes",
        "signature": "SQL()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scion-browser/docs/Scion-PersistentBrowser-Query.html#v:declAction",
      "description": {
        "fct-module": "Scion.PersistentBrowser.Query",
        "fct-package": "scion-browser",
        "fct-signature": "[PersistValue] -\u003e DbDecl",
        "fct-source": "src/Scion-PersistentBrowser-Query.html#declAction",
        "fct-type": "function",
        "title": "declAction"
      },
      "index": {
        "description": "",
        "hierarchy": "Scion PersistentBrowser Query",
        "module": "Scion.PersistentBrowser.Query",
        "name": "declAction",
        "normalized": "[PersistValue]-\u003eDbDecl",
        "package": "scion-browser",
        "partial": "Action",
        "signature": "[PersistValue]-\u003eDbDecl"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scion-browser/docs/Scion-PersistentBrowser-Query.html#v:declsByName",
      "description": {
        "fct-descr": "\u003cp\u003eGet information about all declaration with that name.\n\u003c/p\u003e",
        "fct-module": "Scion.PersistentBrowser.Query",
        "fct-package": "scion-browser",
        "fct-signature": "String -\u003e Maybe DbPackageIdentifier -\u003e SQL [DbDecl]",
        "fct-source": "src/Scion-PersistentBrowser-Query.html#declsByName",
        "fct-type": "function",
        "title": "declsByName"
      },
      "index": {
        "description": "Get information about all declaration with that name",
        "hierarchy": "Scion PersistentBrowser Query",
        "module": "Scion.PersistentBrowser.Query",
        "name": "declsByName",
        "normalized": "String-\u003eMaybe DbPackageIdentifier-\u003eSQL[DbDecl]",
        "package": "scion-browser",
        "partial": "By Name",
        "signature": "String-\u003eMaybe DbPackageIdentifier-\u003eSQL[DbDecl]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scion-browser/docs/Scion-PersistentBrowser-Query.html#v:fromDbText",
      "description": {
        "fct-descr": "\u003cp\u003eGets information from a text value.\n\u003c/p\u003e",
        "fct-module": "Scion.PersistentBrowser.Query",
        "fct-package": "scion-browser",
        "fct-signature": "PersistValue -\u003e Maybe String",
        "fct-source": "src/Scion-PersistentBrowser-Query.html#fromDbText",
        "fct-type": "function",
        "title": "fromDbText"
      },
      "index": {
        "description": "Gets information from text value",
        "hierarchy": "Scion PersistentBrowser Query",
        "module": "Scion.PersistentBrowser.Query",
        "name": "fromDbText",
        "normalized": "PersistValue-\u003eMaybe String",
        "package": "scion-browser",
        "partial": "Db Text",
        "signature": "PersistValue-\u003eMaybe String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scion-browser/docs/Scion-PersistentBrowser-Query.html#v:getAllDeclInfo",
      "description": {
        "fct-module": "Scion.PersistentBrowser.Query",
        "fct-package": "scion-browser",
        "fct-signature": "(DbDeclId, DbDecl) -\u003e SQL DbCompleteDecl",
        "fct-source": "src/Scion-PersistentBrowser-Query.html#getAllDeclInfo",
        "fct-type": "function",
        "title": "getAllDeclInfo"
      },
      "index": {
        "description": "",
        "hierarchy": "Scion PersistentBrowser Query",
        "module": "Scion.PersistentBrowser.Query",
        "name": "getAllDeclInfo",
        "normalized": "(DbDeclId,DbDecl)-\u003eSQL DbCompleteDecl",
        "package": "scion-browser",
        "partial": "All Decl Info",
        "signature": "(DbDeclId,DbDecl)-\u003eSQL DbCompleteDecl"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scion-browser/docs/Scion-PersistentBrowser-Query.html#v:getDbModule",
      "description": {
        "fct-module": "Scion.PersistentBrowser.Query",
        "fct-package": "scion-browser",
        "fct-signature": "d -\u003e SQL DbModule",
        "fct-source": "src/Scion-PersistentBrowser-Query.html#getDbModule",
        "fct-type": "method",
        "title": "getDbModule"
      },
      "index": {
        "description": "",
        "hierarchy": "Scion PersistentBrowser Query",
        "module": "Scion.PersistentBrowser.Query",
        "name": "getDbModule",
        "normalized": "a-\u003eSQL DbModule",
        "package": "scion-browser",
        "partial": "Db Module",
        "signature": "d-\u003eSQL DbModule"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scion-browser/docs/Scion-PersistentBrowser-Query.html#v:getDbPackage",
      "description": {
        "fct-module": "Scion.PersistentBrowser.Query",
        "fct-package": "scion-browser",
        "fct-signature": "d -\u003e SQL DbPackage",
        "fct-source": "src/Scion-PersistentBrowser-Query.html#getDbPackage",
        "fct-type": "method",
        "title": "getDbPackage"
      },
      "index": {
        "description": "",
        "hierarchy": "Scion PersistentBrowser Query",
        "module": "Scion.PersistentBrowser.Query",
        "name": "getDbPackage",
        "normalized": "a-\u003eSQL DbPackage",
        "package": "scion-browser",
        "partial": "Db Package",
        "signature": "d-\u003eSQL DbPackage"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scion-browser/docs/Scion-PersistentBrowser-Query.html#v:getDeclsFromPrefix",
      "description": {
        "fct-descr": "\u003cp\u003elist declarations matching the given prefix, useful for content assist\n the prefix either matches the declaration itself or any constructor\n\u003c/p\u003e",
        "fct-module": "Scion.PersistentBrowser.Query",
        "fct-package": "scion-browser",
        "fct-signature": "String -\u003e Maybe DbPackageIdentifier -\u003e SQL [(DbPackageIdentifier, DbModule, DbCompleteDecl)]",
        "fct-source": "src/Scion-PersistentBrowser-Query.html#getDeclsFromPrefix",
        "fct-type": "function",
        "title": "getDeclsFromPrefix"
      },
      "index": {
        "description": "list declarations matching the given prefix useful for content assist the prefix either matches the declaration itself or any constructor",
        "hierarchy": "Scion PersistentBrowser Query",
        "module": "Scion.PersistentBrowser.Query",
        "name": "getDeclsFromPrefix",
        "normalized": "String-\u003eMaybe DbPackageIdentifier-\u003eSQL[(DbPackageIdentifier,DbModule,DbCompleteDecl)]",
        "package": "scion-browser",
        "partial": "Decls From Prefix",
        "signature": "String-\u003eMaybe DbPackageIdentifier-\u003eSQL[(DbPackageIdentifier,DbModule,DbCompleteDecl)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scion-browser/docs/Scion-PersistentBrowser-Query.html#v:getDeclsInModule",
      "description": {
        "fct-descr": "\u003cp\u003eGets the declarations inside some module,\n  along with information about which package it lives.\n\u003c/p\u003e",
        "fct-module": "Scion.PersistentBrowser.Query",
        "fct-package": "scion-browser",
        "fct-signature": "String -\u003e Maybe DbPackageIdentifier -\u003e SQL [(DbPackageIdentifier, DbCompleteDecl)]",
        "fct-source": "src/Scion-PersistentBrowser-Query.html#getDeclsInModule",
        "fct-type": "function",
        "title": "getDeclsInModule"
      },
      "index": {
        "description": "Gets the declarations inside some module along with information about which package it lives",
        "hierarchy": "Scion PersistentBrowser Query",
        "module": "Scion.PersistentBrowser.Query",
        "name": "getDeclsInModule",
        "normalized": "String-\u003eMaybe DbPackageIdentifier-\u003eSQL[(DbPackageIdentifier,DbCompleteDecl)]",
        "package": "scion-browser",
        "partial": "Decls In Module",
        "signature": "String-\u003eMaybe DbPackageIdentifier-\u003eSQL[(DbPackageIdentifier,DbCompleteDecl)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scion-browser/docs/Scion-PersistentBrowser-Query.html#v:getModulesWhereDeclarationIs",
      "description": {
        "fct-descr": "\u003cp\u003eGets a list of modules where a declaration may live\n\u003c/p\u003e",
        "fct-module": "Scion.PersistentBrowser.Query",
        "fct-package": "scion-browser",
        "fct-signature": "String -\u003e SQL [(DbModule, String, String)]",
        "fct-source": "src/Scion-PersistentBrowser-Query.html#getModulesWhereDeclarationIs",
        "fct-type": "function",
        "title": "getModulesWhereDeclarationIs"
      },
      "index": {
        "description": "Gets list of modules where declaration may live",
        "hierarchy": "Scion PersistentBrowser Query",
        "module": "Scion.PersistentBrowser.Query",
        "name": "getModulesWhereDeclarationIs",
        "normalized": "String-\u003eSQL[(DbModule,String,String)]",
        "package": "scion-browser",
        "partial": "Modules Where Declaration Is",
        "signature": "String-\u003eSQL[(DbModule,String,String)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scion-browser/docs/Scion-PersistentBrowser-Query.html#v:getPackage",
      "description": {
        "fct-descr": "\u003cp\u003eGet information about a package in the database.\n\u003c/p\u003e",
        "fct-module": "Scion.PersistentBrowser.Query",
        "fct-package": "scion-browser",
        "fct-signature": "DbPackageIdentifier -\u003e SQL (Maybe DbPackage)",
        "fct-source": "src/Scion-PersistentBrowser-Query.html#getPackage",
        "fct-type": "function",
        "title": "getPackage"
      },
      "index": {
        "description": "Get information about package in the database",
        "hierarchy": "Scion PersistentBrowser Query",
        "module": "Scion.PersistentBrowser.Query",
        "name": "getPackage",
        "normalized": "DbPackageIdentifier-\u003eSQL(Maybe DbPackage)",
        "package": "scion-browser",
        "partial": "Package",
        "signature": "DbPackageIdentifier-\u003eSQL(Maybe DbPackage)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scion-browser/docs/Scion-PersistentBrowser-Query.html#v:getSubmodules",
      "description": {
        "fct-module": "Scion.PersistentBrowser.Query",
        "fct-package": "scion-browser",
        "fct-signature": "String -\u003e Maybe DbPackageIdentifier -\u003e SQL [DbModule]",
        "fct-source": "src/Scion-PersistentBrowser-Query.html#getSubmodules",
        "fct-type": "function",
        "title": "getSubmodules"
      },
      "index": {
        "description": "",
        "hierarchy": "Scion PersistentBrowser Query",
        "module": "Scion.PersistentBrowser.Query",
        "name": "getSubmodules",
        "normalized": "String-\u003eMaybe DbPackageIdentifier-\u003eSQL[DbModule]",
        "package": "scion-browser",
        "partial": "Submodules",
        "signature": "String-\u003eMaybe DbPackageIdentifier-\u003eSQL[DbModule]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scion-browser/docs/Scion-PersistentBrowser-Query.html#v:moduleAction",
      "description": {
        "fct-module": "Scion.PersistentBrowser.Query",
        "fct-package": "scion-browser",
        "fct-signature": "[PersistValue] -\u003e DbModule",
        "fct-source": "src/Scion-PersistentBrowser-Query.html#moduleAction",
        "fct-type": "function",
        "title": "moduleAction"
      },
      "index": {
        "description": "",
        "hierarchy": "Scion PersistentBrowser Query",
        "module": "Scion.PersistentBrowser.Query",
        "name": "moduleAction",
        "normalized": "[PersistValue]-\u003eDbModule",
        "package": "scion-browser",
        "partial": "Action",
        "signature": "[PersistValue]-\u003eDbModule"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scion-browser/docs/Scion-PersistentBrowser-Query.html#v:modulesByName",
      "description": {
        "fct-descr": "\u003cp\u003eGet information about all modules with that name.\n\u003c/p\u003e",
        "fct-module": "Scion.PersistentBrowser.Query",
        "fct-package": "scion-browser",
        "fct-signature": "String -\u003e Maybe DbPackageIdentifier -\u003e SQL [DbModule]",
        "fct-source": "src/Scion-PersistentBrowser-Query.html#modulesByName",
        "fct-type": "function",
        "title": "modulesByName"
      },
      "index": {
        "description": "Get information about all modules with that name",
        "hierarchy": "Scion PersistentBrowser Query",
        "module": "Scion.PersistentBrowser.Query",
        "name": "modulesByName",
        "normalized": "String-\u003eMaybe DbPackageIdentifier-\u003eSQL[DbModule]",
        "package": "scion-browser",
        "partial": "By Name",
        "signature": "String-\u003eMaybe DbPackageIdentifier-\u003eSQL[DbModule]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scion-browser/docs/Scion-PersistentBrowser-Query.html#v:packagesByName",
      "description": {
        "fct-descr": "\u003cp\u003eGet information of all versions of the package with that name.\n\u003c/p\u003e",
        "fct-module": "Scion.PersistentBrowser.Query",
        "fct-package": "scion-browser",
        "fct-signature": "String -\u003e Maybe DbPackageIdentifier -\u003e SQL [DbPackage]",
        "fct-source": "src/Scion-PersistentBrowser-Query.html#packagesByName",
        "fct-type": "function",
        "title": "packagesByName"
      },
      "index": {
        "description": "Get information of all versions of the package with that name",
        "hierarchy": "Scion PersistentBrowser Query",
        "module": "Scion.PersistentBrowser.Query",
        "name": "packagesByName",
        "normalized": "String-\u003eMaybe DbPackageIdentifier-\u003eSQL[DbPackage]",
        "package": "scion-browser",
        "partial": "By Name",
        "signature": "String-\u003eMaybe DbPackageIdentifier-\u003eSQL[DbPackage]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scion-browser/docs/Scion-PersistentBrowser-Query.html#v:queryDb",
      "description": {
        "fct-descr": "\u003cp\u003eExecutes a query.\n\u003c/p\u003e",
        "fct-module": "Scion.PersistentBrowser.Query",
        "fct-package": "scion-browser",
        "fct-signature": "String -\u003e [String] -\u003e ([PersistValue] -\u003e a) -\u003e SQL [a]",
        "fct-source": "src/Scion-PersistentBrowser-Query.html#queryDb",
        "fct-type": "function",
        "title": "queryDb"
      },
      "index": {
        "description": "Executes query",
        "hierarchy": "Scion PersistentBrowser Query",
        "module": "Scion.PersistentBrowser.Query",
        "name": "queryDb",
        "normalized": "String-\u003e[String]-\u003e([PersistValue]-\u003ea)-\u003eSQL[a]",
        "package": "scion-browser",
        "partial": "Db",
        "signature": "String-\u003e[String]-\u003e([PersistValue]-\u003ea)-\u003eSQL[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scion-browser/docs/Scion-PersistentBrowser.html#",
      "description": {
        "fct-module": "Scion.PersistentBrowser",
        "fct-package": "scion-browser",
        "fct-signature": "module",
        "fct-source": "src/Scion-PersistentBrowser.html",
        "fct-type": "module",
        "title": "PersistentBrowser"
      },
      "index": {
        "description": "",
        "hierarchy": "Scion PersistentBrowser",
        "module": "Scion.PersistentBrowser",
        "name": "PersistentBrowser",
        "normalized": "",
        "package": "scion-browser",
        "partial": "Persistent Browser",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scion-browser/docs/Scion-PersistentBrowser.html#t:Database",
      "description": {
        "fct-descr": "\u003cp\u003eA Database saves a list of packages. \n\u003c/p\u003e",
        "fct-module": "Scion.PersistentBrowser",
        "fct-package": "scion-browser",
        "fct-signature": "type",
        "fct-source": "src/Scion-PersistentBrowser-Types.html#Database",
        "fct-type": "type",
        "title": "Database"
      },
      "index": {
        "description": "Database saves list of packages",
        "hierarchy": "Scion PersistentBrowser",
        "module": "Scion.PersistentBrowser",
        "name": "Database",
        "normalized": "",
        "package": "scion-browser",
        "partial": "Database",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scion-browser/docs/Scion-PersistentBrowser.html#t:DbCompleteDecl",
      "description": {
        "fct-descr": "\u003cp\u003eComplete information for a declaration.\n  Look at its ToJSON instance to know which one is used in each kind of declaration.\n\u003c/p\u003e",
        "fct-module": "Scion.PersistentBrowser",
        "fct-package": "scion-browser",
        "fct-signature": "data",
        "fct-source": "src/Scion-PersistentBrowser-DbTypes.html#DbCompleteDecl",
        "fct-type": "data",
        "title": "DbCompleteDecl"
      },
      "index": {
        "description": "Complete information for declaration Look at its ToJSON instance to know which one is used in each kind of declaration",
        "hierarchy": "Scion PersistentBrowser",
        "module": "Scion.PersistentBrowser",
        "name": "DbCompleteDecl",
        "normalized": "",
        "package": "scion-browser",
        "partial": "Db Complete Decl",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scion-browser/docs/Scion-PersistentBrowser.html#t:DbConstructor",
      "description": {
        "fct-module": "Scion.PersistentBrowser",
        "fct-package": "scion-browser",
        "fct-signature": "type",
        "fct-source": "src/Scion-PersistentBrowser-DbTypes.html#DbConstructor",
        "fct-type": "type",
        "title": "DbConstructor"
      },
      "index": {
        "description": "",
        "hierarchy": "Scion PersistentBrowser",
        "module": "Scion.PersistentBrowser",
        "name": "DbConstructor",
        "normalized": "",
        "package": "scion-browser",
        "partial": "Db Constructor",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scion-browser/docs/Scion-PersistentBrowser.html#t:DbConstructorGeneric",
      "description": {
        "fct-module": "Scion.PersistentBrowser",
        "fct-package": "scion-browser",
        "fct-signature": "data",
        "fct-source": "src/Scion-PersistentBrowser-DbTypes.html#DbConstructorGeneric",
        "fct-type": "data",
        "title": "DbConstructorGeneric"
      },
      "index": {
        "description": "",
        "hierarchy": "Scion PersistentBrowser",
        "module": "Scion.PersistentBrowser",
        "name": "DbConstructorGeneric",
        "normalized": "",
        "package": "scion-browser",
        "partial": "Db Constructor Generic",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scion-browser/docs/Scion-PersistentBrowser.html#t:DbConstructorId",
      "description": {
        "fct-module": "Scion.PersistentBrowser",
        "fct-package": "scion-browser",
        "fct-signature": "type",
        "fct-source": "src/Scion-PersistentBrowser-DbTypes.html#DbConstructorId",
        "fct-type": "type",
        "title": "DbConstructorId"
      },
      "index": {
        "description": "",
        "hierarchy": "Scion PersistentBrowser",
        "module": "Scion.PersistentBrowser",
        "name": "DbConstructorId",
        "normalized": "",
        "package": "scion-browser",
        "partial": "Db Constructor Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scion-browser/docs/Scion-PersistentBrowser.html#t:DbContext",
      "description": {
        "fct-module": "Scion.PersistentBrowser",
        "fct-package": "scion-browser",
        "fct-signature": "type",
        "fct-source": "src/Scion-PersistentBrowser-DbTypes.html#DbContext",
        "fct-type": "type",
        "title": "DbContext"
      },
      "index": {
        "description": "",
        "hierarchy": "Scion PersistentBrowser",
        "module": "Scion.PersistentBrowser",
        "name": "DbContext",
        "normalized": "",
        "package": "scion-browser",
        "partial": "Db Context",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scion-browser/docs/Scion-PersistentBrowser.html#t:DbContextGeneric",
      "description": {
        "fct-module": "Scion.PersistentBrowser",
        "fct-package": "scion-browser",
        "fct-signature": "data",
        "fct-source": "src/Scion-PersistentBrowser-DbTypes.html#DbContextGeneric",
        "fct-type": "data",
        "title": "DbContextGeneric"
      },
      "index": {
        "description": "",
        "hierarchy": "Scion PersistentBrowser",
        "module": "Scion.PersistentBrowser",
        "name": "DbContextGeneric",
        "normalized": "",
        "package": "scion-browser",
        "partial": "Db Context Generic",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scion-browser/docs/Scion-PersistentBrowser.html#t:DbContextId",
      "description": {
        "fct-module": "Scion.PersistentBrowser",
        "fct-package": "scion-browser",
        "fct-signature": "type",
        "fct-source": "src/Scion-PersistentBrowser-DbTypes.html#DbContextId",
        "fct-type": "type",
        "title": "DbContextId"
      },
      "index": {
        "description": "",
        "hierarchy": "Scion PersistentBrowser",
        "module": "Scion.PersistentBrowser",
        "name": "DbContextId",
        "normalized": "",
        "package": "scion-browser",
        "partial": "Db Context Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scion-browser/docs/Scion-PersistentBrowser.html#t:DbDecl",
      "description": {
        "fct-module": "Scion.PersistentBrowser",
        "fct-package": "scion-browser",
        "fct-signature": "type",
        "fct-source": "src/Scion-PersistentBrowser-DbTypes.html#DbDecl",
        "fct-type": "type",
        "title": "DbDecl"
      },
      "index": {
        "description": "",
        "hierarchy": "Scion PersistentBrowser",
        "module": "Scion.PersistentBrowser",
        "name": "DbDecl",
        "normalized": "",
        "package": "scion-browser",
        "partial": "Db Decl",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scion-browser/docs/Scion-PersistentBrowser.html#t:DbDeclGeneric",
      "description": {
        "fct-module": "Scion.PersistentBrowser",
        "fct-package": "scion-browser",
        "fct-signature": "data",
        "fct-source": "src/Scion-PersistentBrowser-DbTypes.html#DbDeclGeneric",
        "fct-type": "data",
        "title": "DbDeclGeneric"
      },
      "index": {
        "description": "",
        "hierarchy": "Scion PersistentBrowser",
        "module": "Scion.PersistentBrowser",
        "name": "DbDeclGeneric",
        "normalized": "",
        "package": "scion-browser",
        "partial": "Db Decl Generic",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scion-browser/docs/Scion-PersistentBrowser.html#t:DbDeclId",
      "description": {
        "fct-module": "Scion.PersistentBrowser",
        "fct-package": "scion-browser",
        "fct-signature": "type",
        "fct-source": "src/Scion-PersistentBrowser-DbTypes.html#DbDeclId",
        "fct-type": "type",
        "title": "DbDeclId"
      },
      "index": {
        "description": "",
        "hierarchy": "Scion PersistentBrowser",
        "module": "Scion.PersistentBrowser",
        "name": "DbDeclId",
        "normalized": "",
        "package": "scion-browser",
        "partial": "Db Decl Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scion-browser/docs/Scion-PersistentBrowser.html#t:DbDeclType",
      "description": {
        "fct-module": "Scion.PersistentBrowser",
        "fct-package": "scion-browser",
        "fct-signature": "data",
        "fct-source": "src/Scion-PersistentBrowser-Types.html#DbDeclType",
        "fct-type": "data",
        "title": "DbDeclType"
      },
      "index": {
        "description": "",
        "hierarchy": "Scion PersistentBrowser",
        "module": "Scion.PersistentBrowser",
        "name": "DbDeclType",
        "normalized": "",
        "package": "scion-browser",
        "partial": "Db Decl Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scion-browser/docs/Scion-PersistentBrowser.html#t:DbFunDep",
      "description": {
        "fct-module": "Scion.PersistentBrowser",
        "fct-package": "scion-browser",
        "fct-signature": "type",
        "fct-source": "src/Scion-PersistentBrowser-DbTypes.html#DbFunDep",
        "fct-type": "type",
        "title": "DbFunDep"
      },
      "index": {
        "description": "",
        "hierarchy": "Scion PersistentBrowser",
        "module": "Scion.PersistentBrowser",
        "name": "DbFunDep",
        "normalized": "",
        "package": "scion-browser",
        "partial": "Db Fun Dep",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scion-browser/docs/Scion-PersistentBrowser.html#t:DbFunDepGeneric",
      "description": {
        "fct-module": "Scion.PersistentBrowser",
        "fct-package": "scion-browser",
        "fct-signature": "data",
        "fct-source": "src/Scion-PersistentBrowser-DbTypes.html#DbFunDepGeneric",
        "fct-type": "data",
        "title": "DbFunDepGeneric"
      },
      "index": {
        "description": "",
        "hierarchy": "Scion PersistentBrowser",
        "module": "Scion.PersistentBrowser",
        "name": "DbFunDepGeneric",
        "normalized": "",
        "package": "scion-browser",
        "partial": "Db Fun Dep Generic",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scion-browser/docs/Scion-PersistentBrowser.html#t:DbFunDepId",
      "description": {
        "fct-module": "Scion.PersistentBrowser",
        "fct-package": "scion-browser",
        "fct-signature": "type",
        "fct-source": "src/Scion-PersistentBrowser-DbTypes.html#DbFunDepId",
        "fct-type": "type",
        "title": "DbFunDepId"
      },
      "index": {
        "description": "",
        "hierarchy": "Scion PersistentBrowser",
        "module": "Scion.PersistentBrowser",
        "name": "DbFunDepId",
        "normalized": "",
        "package": "scion-browser",
        "partial": "Db Fun Dep Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scion-browser/docs/Scion-PersistentBrowser.html#t:DbModule",
      "description": {
        "fct-module": "Scion.PersistentBrowser",
        "fct-package": "scion-browser",
        "fct-signature": "type",
        "fct-source": "src/Scion-PersistentBrowser-DbTypes.html#DbModule",
        "fct-type": "type",
        "title": "DbModule"
      },
      "index": {
        "description": "",
        "hierarchy": "Scion PersistentBrowser",
        "module": "Scion.PersistentBrowser",
        "name": "DbModule",
        "normalized": "",
        "package": "scion-browser",
        "partial": "Db Module",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scion-browser/docs/Scion-PersistentBrowser.html#t:DbModuleGeneric",
      "description": {
        "fct-module": "Scion.PersistentBrowser",
        "fct-package": "scion-browser",
        "fct-signature": "data",
        "fct-source": "src/Scion-PersistentBrowser-DbTypes.html#DbModuleGeneric",
        "fct-type": "data",
        "title": "DbModuleGeneric"
      },
      "index": {
        "description": "",
        "hierarchy": "Scion PersistentBrowser",
        "module": "Scion.PersistentBrowser",
        "name": "DbModuleGeneric",
        "normalized": "",
        "package": "scion-browser",
        "partial": "Db Module Generic",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scion-browser/docs/Scion-PersistentBrowser.html#t:DbModuleId",
      "description": {
        "fct-module": "Scion.PersistentBrowser",
        "fct-package": "scion-browser",
        "fct-signature": "type",
        "fct-source": "src/Scion-PersistentBrowser-DbTypes.html#DbModuleId",
        "fct-type": "type",
        "title": "DbModuleId"
      },
      "index": {
        "description": "",
        "hierarchy": "Scion PersistentBrowser",
        "module": "Scion.PersistentBrowser",
        "name": "DbModuleId",
        "normalized": "",
        "package": "scion-browser",
        "partial": "Db Module Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scion-browser/docs/Scion-PersistentBrowser.html#t:DbPackage",
      "description": {
        "fct-module": "Scion.PersistentBrowser",
        "fct-package": "scion-browser",
        "fct-signature": "type",
        "fct-source": "src/Scion-PersistentBrowser-DbTypes.html#DbPackage",
        "fct-type": "type",
        "title": "DbPackage"
      },
      "index": {
        "description": "",
        "hierarchy": "Scion PersistentBrowser",
        "module": "Scion.PersistentBrowser",
        "name": "DbPackage",
        "normalized": "",
        "package": "scion-browser",
        "partial": "Db Package",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scion-browser/docs/Scion-PersistentBrowser.html#t:DbPackageGeneric",
      "description": {
        "fct-module": "Scion.PersistentBrowser",
        "fct-package": "scion-browser",
        "fct-signature": "data",
        "fct-source": "src/Scion-PersistentBrowser-DbTypes.html#DbPackageGeneric",
        "fct-type": "data",
        "title": "DbPackageGeneric"
      },
      "index": {
        "description": "",
        "hierarchy": "Scion PersistentBrowser",
        "module": "Scion.PersistentBrowser",
        "name": "DbPackageGeneric",
        "normalized": "",
        "package": "scion-browser",
        "partial": "Db Package Generic",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scion-browser/docs/Scion-PersistentBrowser.html#t:DbPackageId",
      "description": {
        "fct-module": "Scion.PersistentBrowser",
        "fct-package": "scion-browser",
        "fct-signature": "type",
        "fct-source": "src/Scion-PersistentBrowser-DbTypes.html#DbPackageId",
        "fct-type": "type",
        "title": "DbPackageId"
      },
      "index": {
        "description": "",
        "hierarchy": "Scion PersistentBrowser",
        "module": "Scion.PersistentBrowser",
        "name": "DbPackageId",
        "normalized": "",
        "package": "scion-browser",
        "partial": "Db Package Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scion-browser/docs/Scion-PersistentBrowser.html#t:DbPackageIdentifier",
      "description": {
        "fct-descr": "\u003cp\u003eInformation needed to search a package.\n\u003c/p\u003e",
        "fct-module": "Scion.PersistentBrowser",
        "fct-package": "scion-browser",
        "fct-signature": "data",
        "fct-source": "src/Scion-PersistentBrowser-DbTypes.html#DbPackageIdentifier",
        "fct-type": "data",
        "title": "DbPackageIdentifier"
      },
      "index": {
        "description": "Information needed to search package",
        "hierarchy": "Scion PersistentBrowser",
        "module": "Scion.PersistentBrowser",
        "name": "DbPackageIdentifier",
        "normalized": "",
        "package": "scion-browser",
        "partial": "Db Package Identifier",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scion-browser/docs/Scion-PersistentBrowser.html#t:DbTyVar",
      "description": {
        "fct-module": "Scion.PersistentBrowser",
        "fct-package": "scion-browser",
        "fct-signature": "type",
        "fct-source": "src/Scion-PersistentBrowser-DbTypes.html#DbTyVar",
        "fct-type": "type",
        "title": "DbTyVar"
      },
      "index": {
        "description": "",
        "hierarchy": "Scion PersistentBrowser",
        "module": "Scion.PersistentBrowser",
        "name": "DbTyVar",
        "normalized": "",
        "package": "scion-browser",
        "partial": "Db Ty Var",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scion-browser/docs/Scion-PersistentBrowser.html#t:DbTyVarGeneric",
      "description": {
        "fct-module": "Scion.PersistentBrowser",
        "fct-package": "scion-browser",
        "fct-signature": "data",
        "fct-source": "src/Scion-PersistentBrowser-DbTypes.html#DbTyVarGeneric",
        "fct-type": "data",
        "title": "DbTyVarGeneric"
      },
      "index": {
        "description": "",
        "hierarchy": "Scion PersistentBrowser",
        "module": "Scion.PersistentBrowser",
        "name": "DbTyVarGeneric",
        "normalized": "",
        "package": "scion-browser",
        "partial": "Db Ty Var Generic",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scion-browser/docs/Scion-PersistentBrowser.html#t:DbTyVarId",
      "description": {
        "fct-module": "Scion.PersistentBrowser",
        "fct-package": "scion-browser",
        "fct-signature": "type",
        "fct-source": "src/Scion-PersistentBrowser-DbTypes.html#DbTyVarId",
        "fct-type": "type",
        "title": "DbTyVarId"
      },
      "index": {
        "description": "",
        "hierarchy": "Scion PersistentBrowser",
        "module": "Scion.PersistentBrowser",
        "name": "DbTyVarId",
        "normalized": "",
        "package": "scion-browser",
        "partial": "Db Ty Var Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scion-browser/docs/Scion-PersistentBrowser.html#t:Doc",
      "description": {
        "fct-descr": "\u003cp\u003eDocumentation for an item.\n Now it is simply a Text element.\n\u003c/p\u003e",
        "fct-module": "Scion.PersistentBrowser",
        "fct-package": "scion-browser",
        "fct-signature": "data",
        "fct-source": "src/Scion-PersistentBrowser-Types.html#Doc",
        "fct-type": "data",
        "title": "Doc"
      },
      "index": {
        "description": "Documentation for an item Now it is simply Text element",
        "hierarchy": "Scion PersistentBrowser",
        "module": "Scion.PersistentBrowser",
        "name": "Doc",
        "normalized": "",
        "package": "scion-browser",
        "partial": "Doc",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scion-browser/docs/Scion-PersistentBrowser.html#t:DocItem",
      "description": {
        "fct-module": "Scion.PersistentBrowser",
        "fct-package": "scion-browser",
        "fct-signature": "class",
        "fct-source": "src/Scion-PersistentBrowser-Types.html#DocItem",
        "fct-type": "class",
        "title": "DocItem"
      },
      "index": {
        "description": "",
        "hierarchy": "Scion PersistentBrowser",
        "module": "Scion.PersistentBrowser",
        "name": "DocItem",
        "normalized": "",
        "package": "scion-browser",
        "partial": "Doc Item",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scion-browser/docs/Scion-PersistentBrowser.html#t:Documented",
      "description": {
        "fct-descr": "\u003cp\u003eA documented item.\n\u003c/p\u003e",
        "fct-module": "Scion.PersistentBrowser",
        "fct-package": "scion-browser",
        "fct-signature": "type",
        "fct-source": "src/Scion-PersistentBrowser-Types.html#Documented",
        "fct-type": "type",
        "title": "Documented"
      },
      "index": {
        "description": "documented item",
        "hierarchy": "Scion PersistentBrowser",
        "module": "Scion.PersistentBrowser",
        "name": "Documented",
        "normalized": "",
        "package": "scion-browser",
        "partial": "Documented",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scion-browser/docs/Scion-PersistentBrowser.html#t:Named",
      "description": {
        "fct-module": "Scion.PersistentBrowser",
        "fct-package": "scion-browser",
        "fct-signature": "class",
        "fct-source": "src/Scion-PersistentBrowser-Types.html#Named",
        "fct-type": "class",
        "title": "Named"
      },
      "index": {
        "description": "",
        "hierarchy": "Scion PersistentBrowser",
        "module": "Scion.PersistentBrowser",
        "name": "Named",
        "normalized": "",
        "package": "scion-browser",
        "partial": "Named",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scion-browser/docs/Scion-PersistentBrowser.html#t:Package",
      "description": {
        "fct-descr": "\u003cp\u003eA package.\n\u003c/p\u003e",
        "fct-module": "Scion.PersistentBrowser",
        "fct-package": "scion-browser",
        "fct-signature": "data",
        "fct-source": "src/Scion-PersistentBrowser-Types.html#Package",
        "fct-type": "data",
        "title": "Package"
      },
      "index": {
        "description": "package",
        "hierarchy": "Scion PersistentBrowser",
        "module": "Scion.PersistentBrowser",
        "name": "Package",
        "normalized": "",
        "package": "scion-browser",
        "partial": "Package",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scion-browser/docs/Scion-PersistentBrowser.html#t:SQL",
      "description": {
        "fct-module": "Scion.PersistentBrowser",
        "fct-package": "scion-browser",
        "fct-signature": "type",
        "fct-source": "src/Scion-PersistentBrowser-DbTypes.html#SQL",
        "fct-type": "type",
        "title": "SQL"
      },
      "index": {
        "description": "",
        "hierarchy": "Scion PersistentBrowser",
        "module": "Scion.PersistentBrowser",
        "name": "SQL",
        "normalized": "",
        "package": "scion-browser",
        "partial": "SQL",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scion-browser/docs/Scion-PersistentBrowser.html#v:DbClass",
      "description": {
        "fct-module": "Scion.PersistentBrowser",
        "fct-package": "scion-browser",
        "fct-signature": "DbClass",
        "fct-source": "src/Scion-PersistentBrowser-Types.html#DbDeclType",
        "fct-type": "function",
        "title": "DbClass"
      },
      "index": {
        "description": "",
        "hierarchy": "Scion PersistentBrowser",
        "module": "Scion.PersistentBrowser",
        "name": "DbClass",
        "normalized": "",
        "package": "scion-browser",
        "partial": "Db Class",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scion-browser/docs/Scion-PersistentBrowser.html#v:DbCompleteDecl",
      "description": {
        "fct-module": "Scion.PersistentBrowser",
        "fct-package": "scion-browser",
        "fct-signature": "DbCompleteDecl DbDecl [DbContext] [DbTyVar] [DbFunDep] [DbConstructor]",
        "fct-source": "src/Scion-PersistentBrowser-DbTypes.html#DbCompleteDecl",
        "fct-type": "function",
        "title": "DbCompleteDecl"
      },
      "index": {
        "description": "",
        "hierarchy": "Scion PersistentBrowser",
        "module": "Scion.PersistentBrowser",
        "name": "DbCompleteDecl",
        "normalized": "DbCompleteDecl DbDecl[DbContext][DbTyVar][DbFunDep][DbConstructor]",
        "package": "scion-browser",
        "partial": "Db Complete Decl",
        "signature": "DbCompleteDecl DbDecl[DbContext][DbTyVar][DbFunDep][DbConstructor]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scion-browser/docs/Scion-PersistentBrowser.html#v:DbConstructor",
      "description": {
        "fct-module": "Scion.PersistentBrowser",
        "fct-package": "scion-browser",
        "fct-signature": "DbConstructor",
        "fct-source": "src/Scion-PersistentBrowser-DbTypes.html#DbConstructorGeneric",
        "fct-type": "function",
        "title": "DbConstructor"
      },
      "index": {
        "description": "",
        "hierarchy": "Scion PersistentBrowser",
        "module": "Scion.PersistentBrowser",
        "name": "DbConstructor",
        "normalized": "",
        "package": "scion-browser",
        "partial": "Db Constructor",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scion-browser/docs/Scion-PersistentBrowser.html#v:DbContext",
      "description": {
        "fct-module": "Scion.PersistentBrowser",
        "fct-package": "scion-browser",
        "fct-signature": "DbContext",
        "fct-source": "src/Scion-PersistentBrowser-DbTypes.html#DbContextGeneric",
        "fct-type": "function",
        "title": "DbContext"
      },
      "index": {
        "description": "",
        "hierarchy": "Scion PersistentBrowser",
        "module": "Scion.PersistentBrowser",
        "name": "DbContext",
        "normalized": "",
        "package": "scion-browser",
        "partial": "Db Context",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scion-browser/docs/Scion-PersistentBrowser.html#v:DbData",
      "description": {
        "fct-module": "Scion.PersistentBrowser",
        "fct-package": "scion-browser",
        "fct-signature": "DbData",
        "fct-source": "src/Scion-PersistentBrowser-Types.html#DbDeclType",
        "fct-type": "function",
        "title": "DbData"
      },
      "index": {
        "description": "",
        "hierarchy": "Scion PersistentBrowser",
        "module": "Scion.PersistentBrowser",
        "name": "DbData",
        "normalized": "",
        "package": "scion-browser",
        "partial": "Db Data",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scion-browser/docs/Scion-PersistentBrowser.html#v:DbDecl",
      "description": {
        "fct-module": "Scion.PersistentBrowser",
        "fct-package": "scion-browser",
        "fct-signature": "DbDecl",
        "fct-source": "src/Scion-PersistentBrowser-DbTypes.html#DbDeclGeneric",
        "fct-type": "function",
        "title": "DbDecl"
      },
      "index": {
        "description": "",
        "hierarchy": "Scion PersistentBrowser",
        "module": "Scion.PersistentBrowser",
        "name": "DbDecl",
        "normalized": "",
        "package": "scion-browser",
        "partial": "Db Decl",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scion-browser/docs/Scion-PersistentBrowser.html#v:DbFunDep",
      "description": {
        "fct-module": "Scion.PersistentBrowser",
        "fct-package": "scion-browser",
        "fct-signature": "DbFunDep",
        "fct-source": "src/Scion-PersistentBrowser-DbTypes.html#DbFunDepGeneric",
        "fct-type": "function",
        "title": "DbFunDep"
      },
      "index": {
        "description": "",
        "hierarchy": "Scion PersistentBrowser",
        "module": "Scion.PersistentBrowser",
        "name": "DbFunDep",
        "normalized": "",
        "package": "scion-browser",
        "partial": "Db Fun Dep",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scion-browser/docs/Scion-PersistentBrowser.html#v:DbInstance",
      "description": {
        "fct-module": "Scion.PersistentBrowser",
        "fct-package": "scion-browser",
        "fct-signature": "DbInstance",
        "fct-source": "src/Scion-PersistentBrowser-Types.html#DbDeclType",
        "fct-type": "function",
        "title": "DbInstance"
      },
      "index": {
        "description": "",
        "hierarchy": "Scion PersistentBrowser",
        "module": "Scion.PersistentBrowser",
        "name": "DbInstance",
        "normalized": "",
        "package": "scion-browser",
        "partial": "Db Instance",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scion-browser/docs/Scion-PersistentBrowser.html#v:DbModule",
      "description": {
        "fct-module": "Scion.PersistentBrowser",
        "fct-package": "scion-browser",
        "fct-signature": "DbModule",
        "fct-source": "src/Scion-PersistentBrowser-DbTypes.html#DbModuleGeneric",
        "fct-type": "function",
        "title": "DbModule"
      },
      "index": {
        "description": "",
        "hierarchy": "Scion PersistentBrowser",
        "module": "Scion.PersistentBrowser",
        "name": "DbModule",
        "normalized": "",
        "package": "scion-browser",
        "partial": "Db Module",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scion-browser/docs/Scion-PersistentBrowser.html#v:DbNewType",
      "description": {
        "fct-module": "Scion.PersistentBrowser",
        "fct-package": "scion-browser",
        "fct-signature": "DbNewType",
        "fct-source": "src/Scion-PersistentBrowser-Types.html#DbDeclType",
        "fct-type": "function",
        "title": "DbNewType"
      },
      "index": {
        "description": "",
        "hierarchy": "Scion PersistentBrowser",
        "module": "Scion.PersistentBrowser",
        "name": "DbNewType",
        "normalized": "",
        "package": "scion-browser",
        "partial": "Db New Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scion-browser/docs/Scion-PersistentBrowser.html#v:DbPackage",
      "description": {
        "fct-module": "Scion.PersistentBrowser",
        "fct-package": "scion-browser",
        "fct-signature": "DbPackage",
        "fct-source": "src/Scion-PersistentBrowser-DbTypes.html#DbPackageGeneric",
        "fct-type": "function",
        "title": "DbPackage"
      },
      "index": {
        "description": "",
        "hierarchy": "Scion PersistentBrowser",
        "module": "Scion.PersistentBrowser",
        "name": "DbPackage",
        "normalized": "",
        "package": "scion-browser",
        "partial": "Db Package",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scion-browser/docs/Scion-PersistentBrowser.html#v:DbPackageIdentifier",
      "description": {
        "fct-module": "Scion.PersistentBrowser",
        "fct-package": "scion-browser",
        "fct-signature": "DbPackageIdentifier String String",
        "fct-source": "src/Scion-PersistentBrowser-DbTypes.html#DbPackageIdentifier",
        "fct-type": "function",
        "title": "DbPackageIdentifier"
      },
      "index": {
        "description": "",
        "hierarchy": "Scion PersistentBrowser",
        "module": "Scion.PersistentBrowser",
        "name": "DbPackageIdentifier",
        "normalized": "",
        "package": "scion-browser",
        "partial": "Db Package Identifier",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scion-browser/docs/Scion-PersistentBrowser.html#v:DbSignature",
      "description": {
        "fct-module": "Scion.PersistentBrowser",
        "fct-package": "scion-browser",
        "fct-signature": "DbSignature",
        "fct-source": "src/Scion-PersistentBrowser-Types.html#DbDeclType",
        "fct-type": "function",
        "title": "DbSignature"
      },
      "index": {
        "description": "",
        "hierarchy": "Scion PersistentBrowser",
        "module": "Scion.PersistentBrowser",
        "name": "DbSignature",
        "normalized": "",
        "package": "scion-browser",
        "partial": "Db Signature",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scion-browser/docs/Scion-PersistentBrowser.html#v:DbTyVar",
      "description": {
        "fct-module": "Scion.PersistentBrowser",
        "fct-package": "scion-browser",
        "fct-signature": "DbTyVar",
        "fct-source": "src/Scion-PersistentBrowser-DbTypes.html#DbTyVarGeneric",
        "fct-type": "function",
        "title": "DbTyVar"
      },
      "index": {
        "description": "",
        "hierarchy": "Scion PersistentBrowser",
        "module": "Scion.PersistentBrowser",
        "name": "DbTyVar",
        "normalized": "",
        "package": "scion-browser",
        "partial": "Db Ty Var",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scion-browser/docs/Scion-PersistentBrowser.html#v:DbType",
      "description": {
        "fct-module": "Scion.PersistentBrowser",
        "fct-package": "scion-browser",
        "fct-signature": "DbType",
        "fct-source": "src/Scion-PersistentBrowser-Types.html#DbDeclType",
        "fct-type": "function",
        "title": "DbType"
      },
      "index": {
        "description": "",
        "hierarchy": "Scion PersistentBrowser",
        "module": "Scion.PersistentBrowser",
        "name": "DbType",
        "normalized": "",
        "package": "scion-browser",
        "partial": "Db Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scion-browser/docs/Scion-PersistentBrowser.html#v:Doc",
      "description": {
        "fct-module": "Scion.PersistentBrowser",
        "fct-package": "scion-browser",
        "fct-signature": "Doc Text",
        "fct-source": "src/Scion-PersistentBrowser-Types.html#Doc",
        "fct-type": "function",
        "title": "Doc"
      },
      "index": {
        "description": "",
        "hierarchy": "Scion PersistentBrowser",
        "module": "Scion.PersistentBrowser",
        "name": "Doc",
        "normalized": "",
        "package": "scion-browser",
        "partial": "Doc",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scion-browser/docs/Scion-PersistentBrowser.html#v:NoDoc",
      "description": {
        "fct-module": "Scion.PersistentBrowser",
        "fct-package": "scion-browser",
        "fct-signature": "NoDoc",
        "fct-source": "src/Scion-PersistentBrowser-Types.html#Doc",
        "fct-type": "function",
        "title": "NoDoc"
      },
      "index": {
        "description": "",
        "hierarchy": "Scion PersistentBrowser",
        "module": "Scion.PersistentBrowser",
        "name": "NoDoc",
        "normalized": "",
        "package": "scion-browser",
        "partial": "No Doc",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scion-browser/docs/Scion-PersistentBrowser.html#v:Package",
      "description": {
        "fct-module": "Scion.PersistentBrowser",
        "fct-package": "scion-browser",
        "fct-signature": "Package l PackageIdentifier (Map String (Documented Module))",
        "fct-source": "src/Scion-PersistentBrowser-Types.html#Package",
        "fct-type": "function",
        "title": "Package"
      },
      "index": {
        "description": "",
        "hierarchy": "Scion PersistentBrowser",
        "module": "Scion.PersistentBrowser",
        "name": "Package",
        "normalized": "",
        "package": "scion-browser",
        "partial": "Package",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scion-browser/docs/Scion-PersistentBrowser.html#v:dbConstructorDeclId",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Scion.PersistentBrowser",
        "fct-package": "scion-browser",
        "fct-signature": "!(KeyBackend backend (DbDeclGeneric backend))",
        "fct-source": "src/Scion-PersistentBrowser-DbTypes.html#DbConstructorGeneric",
        "fct-type": "function",
        "title": "dbConstructorDeclId"
      },
      "index": {
        "description": "",
        "hierarchy": "Scion PersistentBrowser",
        "module": "Scion.PersistentBrowser",
        "name": "dbConstructorDeclId",
        "normalized": "",
        "package": "scion-browser",
        "partial": "Constructor Decl Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scion-browser/docs/Scion-PersistentBrowser.html#v:dbConstructorName",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Scion.PersistentBrowser",
        "fct-package": "scion-browser",
        "fct-signature": "!String",
        "fct-source": "src/Scion-PersistentBrowser-DbTypes.html#DbConstructorGeneric",
        "fct-type": "function",
        "title": "dbConstructorName"
      },
      "index": {
        "description": "",
        "hierarchy": "Scion PersistentBrowser",
        "module": "Scion.PersistentBrowser",
        "name": "dbConstructorName",
        "normalized": "",
        "package": "scion-browser",
        "partial": "Constructor Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scion-browser/docs/Scion-PersistentBrowser.html#v:dbConstructorSignature",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Scion.PersistentBrowser",
        "fct-package": "scion-browser",
        "fct-signature": "!String",
        "fct-source": "src/Scion-PersistentBrowser-DbTypes.html#DbConstructorGeneric",
        "fct-type": "function",
        "title": "dbConstructorSignature"
      },
      "index": {
        "description": "",
        "hierarchy": "Scion PersistentBrowser",
        "module": "Scion.PersistentBrowser",
        "name": "dbConstructorSignature",
        "normalized": "",
        "package": "scion-browser",
        "partial": "Constructor Signature",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scion-browser/docs/Scion-PersistentBrowser.html#v:dbContextDeclId",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Scion.PersistentBrowser",
        "fct-package": "scion-browser",
        "fct-signature": "!(KeyBackend backend (DbDeclGeneric backend))",
        "fct-source": "src/Scion-PersistentBrowser-DbTypes.html#DbContextGeneric",
        "fct-type": "function",
        "title": "dbContextDeclId"
      },
      "index": {
        "description": "",
        "hierarchy": "Scion PersistentBrowser",
        "module": "Scion.PersistentBrowser",
        "name": "dbContextDeclId",
        "normalized": "",
        "package": "scion-browser",
        "partial": "Context Decl Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scion-browser/docs/Scion-PersistentBrowser.html#v:dbContextShown",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Scion.PersistentBrowser",
        "fct-package": "scion-browser",
        "fct-signature": "!String",
        "fct-source": "src/Scion-PersistentBrowser-DbTypes.html#DbContextGeneric",
        "fct-type": "function",
        "title": "dbContextShown"
      },
      "index": {
        "description": "",
        "hierarchy": "Scion PersistentBrowser",
        "module": "Scion.PersistentBrowser",
        "name": "dbContextShown",
        "normalized": "",
        "package": "scion-browser",
        "partial": "Context Shown",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scion-browser/docs/Scion-PersistentBrowser.html#v:dbDeclDeclType",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Scion.PersistentBrowser",
        "fct-package": "scion-browser",
        "fct-signature": "!DbDeclType",
        "fct-source": "src/Scion-PersistentBrowser-DbTypes.html#DbDeclGeneric",
        "fct-type": "function",
        "title": "dbDeclDeclType"
      },
      "index": {
        "description": "",
        "hierarchy": "Scion PersistentBrowser",
        "module": "Scion.PersistentBrowser",
        "name": "dbDeclDeclType",
        "normalized": "",
        "package": "scion-browser",
        "partial": "Decl Decl Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scion-browser/docs/Scion-PersistentBrowser.html#v:dbDeclDoc",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Scion.PersistentBrowser",
        "fct-package": "scion-browser",
        "fct-signature": "!(Maybe String)",
        "fct-source": "src/Scion-PersistentBrowser-DbTypes.html#DbDeclGeneric",
        "fct-type": "function",
        "title": "dbDeclDoc"
      },
      "index": {
        "description": "",
        "hierarchy": "Scion PersistentBrowser",
        "module": "Scion.PersistentBrowser",
        "name": "dbDeclDoc",
        "normalized": "",
        "package": "scion-browser",
        "partial": "Decl Doc",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scion-browser/docs/Scion-PersistentBrowser.html#v:dbDeclEquals",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Scion.PersistentBrowser",
        "fct-package": "scion-browser",
        "fct-signature": "!(Maybe String)",
        "fct-source": "src/Scion-PersistentBrowser-DbTypes.html#DbDeclGeneric",
        "fct-type": "function",
        "title": "dbDeclEquals"
      },
      "index": {
        "description": "",
        "hierarchy": "Scion PersistentBrowser",
        "module": "Scion.PersistentBrowser",
        "name": "dbDeclEquals",
        "normalized": "",
        "package": "scion-browser",
        "partial": "Decl Equals",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scion-browser/docs/Scion-PersistentBrowser.html#v:dbDeclKind",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Scion.PersistentBrowser",
        "fct-package": "scion-browser",
        "fct-signature": "!(Maybe String)",
        "fct-source": "src/Scion-PersistentBrowser-DbTypes.html#DbDeclGeneric",
        "fct-type": "function",
        "title": "dbDeclKind"
      },
      "index": {
        "description": "",
        "hierarchy": "Scion PersistentBrowser",
        "module": "Scion.PersistentBrowser",
        "name": "dbDeclKind",
        "normalized": "",
        "package": "scion-browser",
        "partial": "Decl Kind",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scion-browser/docs/Scion-PersistentBrowser.html#v:dbDeclModuleId",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Scion.PersistentBrowser",
        "fct-package": "scion-browser",
        "fct-signature": "!(KeyBackend backend (DbModuleGeneric backend))",
        "fct-source": "src/Scion-PersistentBrowser-DbTypes.html#DbDeclGeneric",
        "fct-type": "function",
        "title": "dbDeclModuleId"
      },
      "index": {
        "description": "",
        "hierarchy": "Scion PersistentBrowser",
        "module": "Scion.PersistentBrowser",
        "name": "dbDeclModuleId",
        "normalized": "",
        "package": "scion-browser",
        "partial": "Decl Module Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scion-browser/docs/Scion-PersistentBrowser.html#v:dbDeclName",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Scion.PersistentBrowser",
        "fct-package": "scion-browser",
        "fct-signature": "!String",
        "fct-source": "src/Scion-PersistentBrowser-DbTypes.html#DbDeclGeneric",
        "fct-type": "function",
        "title": "dbDeclName"
      },
      "index": {
        "description": "",
        "hierarchy": "Scion PersistentBrowser",
        "module": "Scion.PersistentBrowser",
        "name": "dbDeclName",
        "normalized": "",
        "package": "scion-browser",
        "partial": "Decl Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scion-browser/docs/Scion-PersistentBrowser.html#v:dbDeclSignature",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Scion.PersistentBrowser",
        "fct-package": "scion-browser",
        "fct-signature": "!(Maybe String)",
        "fct-source": "src/Scion-PersistentBrowser-DbTypes.html#DbDeclGeneric",
        "fct-type": "function",
        "title": "dbDeclSignature"
      },
      "index": {
        "description": "",
        "hierarchy": "Scion PersistentBrowser",
        "module": "Scion.PersistentBrowser",
        "name": "dbDeclSignature",
        "normalized": "",
        "package": "scion-browser",
        "partial": "Decl Signature",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scion-browser/docs/Scion-PersistentBrowser.html#v:dbFunDepDeclId",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Scion.PersistentBrowser",
        "fct-package": "scion-browser",
        "fct-signature": "!(KeyBackend backend (DbDeclGeneric backend))",
        "fct-source": "src/Scion-PersistentBrowser-DbTypes.html#DbFunDepGeneric",
        "fct-type": "function",
        "title": "dbFunDepDeclId"
      },
      "index": {
        "description": "",
        "hierarchy": "Scion PersistentBrowser",
        "module": "Scion.PersistentBrowser",
        "name": "dbFunDepDeclId",
        "normalized": "",
        "package": "scion-browser",
        "partial": "Fun Dep Decl Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scion-browser/docs/Scion-PersistentBrowser.html#v:dbFunDepName",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Scion.PersistentBrowser",
        "fct-package": "scion-browser",
        "fct-signature": "!String",
        "fct-source": "src/Scion-PersistentBrowser-DbTypes.html#DbFunDepGeneric",
        "fct-type": "function",
        "title": "dbFunDepName"
      },
      "index": {
        "description": "",
        "hierarchy": "Scion PersistentBrowser",
        "module": "Scion.PersistentBrowser",
        "name": "dbFunDepName",
        "normalized": "",
        "package": "scion-browser",
        "partial": "Fun Dep Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scion-browser/docs/Scion-PersistentBrowser.html#v:dbModuleDoc",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Scion.PersistentBrowser",
        "fct-package": "scion-browser",
        "fct-signature": "!(Maybe String)",
        "fct-source": "src/Scion-PersistentBrowser-DbTypes.html#DbModuleGeneric",
        "fct-type": "function",
        "title": "dbModuleDoc"
      },
      "index": {
        "description": "",
        "hierarchy": "Scion PersistentBrowser",
        "module": "Scion.PersistentBrowser",
        "name": "dbModuleDoc",
        "normalized": "",
        "package": "scion-browser",
        "partial": "Module Doc",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scion-browser/docs/Scion-PersistentBrowser.html#v:dbModuleName",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Scion.PersistentBrowser",
        "fct-package": "scion-browser",
        "fct-signature": "!String",
        "fct-source": "src/Scion-PersistentBrowser-DbTypes.html#DbModuleGeneric",
        "fct-type": "function",
        "title": "dbModuleName"
      },
      "index": {
        "description": "",
        "hierarchy": "Scion PersistentBrowser",
        "module": "Scion.PersistentBrowser",
        "name": "dbModuleName",
        "normalized": "",
        "package": "scion-browser",
        "partial": "Module Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scion-browser/docs/Scion-PersistentBrowser.html#v:dbModulePackageId",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Scion.PersistentBrowser",
        "fct-package": "scion-browser",
        "fct-signature": "!(KeyBackend backend (DbPackageGeneric backend))",
        "fct-source": "src/Scion-PersistentBrowser-DbTypes.html#DbModuleGeneric",
        "fct-type": "function",
        "title": "dbModulePackageId"
      },
      "index": {
        "description": "",
        "hierarchy": "Scion PersistentBrowser",
        "module": "Scion.PersistentBrowser",
        "name": "dbModulePackageId",
        "normalized": "",
        "package": "scion-browser",
        "partial": "Module Package Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scion-browser/docs/Scion-PersistentBrowser.html#v:dbPackageDoc",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Scion.PersistentBrowser",
        "fct-package": "scion-browser",
        "fct-signature": "!(Maybe String)",
        "fct-source": "src/Scion-PersistentBrowser-DbTypes.html#DbPackageGeneric",
        "fct-type": "function",
        "title": "dbPackageDoc"
      },
      "index": {
        "description": "",
        "hierarchy": "Scion PersistentBrowser",
        "module": "Scion.PersistentBrowser",
        "name": "dbPackageDoc",
        "normalized": "",
        "package": "scion-browser",
        "partial": "Package Doc",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scion-browser/docs/Scion-PersistentBrowser.html#v:dbPackageName",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Scion.PersistentBrowser",
        "fct-package": "scion-browser",
        "fct-signature": "!String",
        "fct-source": "src/Scion-PersistentBrowser-DbTypes.html#DbPackageGeneric",
        "fct-type": "function",
        "title": "dbPackageName"
      },
      "index": {
        "description": "",
        "hierarchy": "Scion PersistentBrowser",
        "module": "Scion.PersistentBrowser",
        "name": "dbPackageName",
        "normalized": "",
        "package": "scion-browser",
        "partial": "Package Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scion-browser/docs/Scion-PersistentBrowser.html#v:dbPackageToIdentifier",
      "description": {
        "fct-module": "Scion.PersistentBrowser",
        "fct-package": "scion-browser",
        "fct-signature": "DbPackage -\u003e DbPackageIdentifier",
        "fct-source": "src/Scion-PersistentBrowser-DbTypes.html#dbPackageToIdentifier",
        "fct-type": "function",
        "title": "dbPackageToIdentifier"
      },
      "index": {
        "description": "",
        "hierarchy": "Scion PersistentBrowser",
        "module": "Scion.PersistentBrowser",
        "name": "dbPackageToIdentifier",
        "normalized": "DbPackage-\u003eDbPackageIdentifier",
        "package": "scion-browser",
        "partial": "Package To Identifier",
        "signature": "DbPackage-\u003eDbPackageIdentifier"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scion-browser/docs/Scion-PersistentBrowser.html#v:dbPackageVersion",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Scion.PersistentBrowser",
        "fct-package": "scion-browser",
        "fct-signature": "!String",
        "fct-source": "src/Scion-PersistentBrowser-DbTypes.html#DbPackageGeneric",
        "fct-type": "function",
        "title": "dbPackageVersion"
      },
      "index": {
        "description": "",
        "hierarchy": "Scion PersistentBrowser",
        "module": "Scion.PersistentBrowser",
        "name": "dbPackageVersion",
        "normalized": "",
        "package": "scion-browser",
        "partial": "Package Version",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scion-browser/docs/Scion-PersistentBrowser.html#v:dbTyVarDeclId",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Scion.PersistentBrowser",
        "fct-package": "scion-browser",
        "fct-signature": "!(KeyBackend backend (DbDeclGeneric backend))",
        "fct-source": "src/Scion-PersistentBrowser-DbTypes.html#DbTyVarGeneric",
        "fct-type": "function",
        "title": "dbTyVarDeclId"
      },
      "index": {
        "description": "",
        "hierarchy": "Scion PersistentBrowser",
        "module": "Scion.PersistentBrowser",
        "name": "dbTyVarDeclId",
        "normalized": "",
        "package": "scion-browser",
        "partial": "Ty Var Decl Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scion-browser/docs/Scion-PersistentBrowser.html#v:dbTyVarName",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Scion.PersistentBrowser",
        "fct-package": "scion-browser",
        "fct-signature": "!String",
        "fct-source": "src/Scion-PersistentBrowser-DbTypes.html#DbTyVarGeneric",
        "fct-type": "function",
        "title": "dbTyVarName"
      },
      "index": {
        "description": "",
        "hierarchy": "Scion PersistentBrowser",
        "module": "Scion.PersistentBrowser",
        "name": "dbTyVarName",
        "normalized": "",
        "package": "scion-browser",
        "partial": "Ty Var Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scion-browser/docs/Scion-PersistentBrowser.html#v:docFromString",
      "description": {
        "fct-module": "Scion.PersistentBrowser",
        "fct-package": "scion-browser",
        "fct-signature": "String -\u003e Doc",
        "fct-source": "src/Scion-PersistentBrowser-Types.html#docFromString",
        "fct-type": "function",
        "title": "docFromString"
      },
      "index": {
        "description": "",
        "hierarchy": "Scion PersistentBrowser",
        "module": "Scion.PersistentBrowser",
        "name": "docFromString",
        "normalized": "String-\u003eDoc",
        "package": "scion-browser",
        "partial": "From String",
        "signature": "String-\u003eDoc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scion-browser/docs/Scion-PersistentBrowser.html#v:getChild",
      "description": {
        "fct-module": "Scion.PersistentBrowser",
        "fct-package": "scion-browser",
        "fct-signature": "parent l -\u003e String -\u003e Maybe (child l)",
        "fct-source": "src/Scion-PersistentBrowser-Types.html#getChild",
        "fct-type": "method",
        "title": "getChild"
      },
      "index": {
        "description": "",
        "hierarchy": "Scion PersistentBrowser",
        "module": "Scion.PersistentBrowser",
        "name": "getChild",
        "normalized": "a b-\u003eString-\u003eMaybe(c b)",
        "package": "scion-browser",
        "partial": "Child",
        "signature": "parent l-\u003eString-\u003eMaybe(child l)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scion-browser/docs/Scion-PersistentBrowser.html#v:getChildren",
      "description": {
        "fct-module": "Scion.PersistentBrowser",
        "fct-package": "scion-browser",
        "fct-signature": "parent l -\u003e [child l]",
        "fct-source": "src/Scion-PersistentBrowser-Types.html#getChildren",
        "fct-type": "method",
        "title": "getChildren"
      },
      "index": {
        "description": "",
        "hierarchy": "Scion PersistentBrowser",
        "module": "Scion.PersistentBrowser",
        "name": "getChildren",
        "normalized": "a b-\u003e[c b]",
        "package": "scion-browser",
        "partial": "Children",
        "signature": "parent l-\u003e[child l]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scion-browser/docs/Scion-PersistentBrowser.html#v:getName",
      "description": {
        "fct-module": "Scion.PersistentBrowser",
        "fct-package": "scion-browser",
        "fct-signature": "e l -\u003e String",
        "fct-source": "src/Scion-PersistentBrowser-Types.html#getName",
        "fct-type": "method",
        "title": "getName"
      },
      "index": {
        "description": "",
        "hierarchy": "Scion PersistentBrowser",
        "module": "Scion.PersistentBrowser",
        "name": "getName",
        "normalized": "a b-\u003eString",
        "package": "scion-browser",
        "partial": "Name",
        "signature": "e l-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scion-browser/docs/Scion-PersistentBrowser.html#v:getNameString",
      "description": {
        "fct-descr": "\u003cp\u003eGets the name inside a Name constructor.\n\u003c/p\u003e",
        "fct-module": "Scion.PersistentBrowser",
        "fct-package": "scion-browser",
        "fct-signature": "Name l -\u003e String",
        "fct-source": "src/Scion-PersistentBrowser-Types.html#getNameString",
        "fct-type": "function",
        "title": "getNameString"
      },
      "index": {
        "description": "Gets the name inside Name constructor",
        "hierarchy": "Scion PersistentBrowser",
        "module": "Scion.PersistentBrowser",
        "name": "getNameString",
        "normalized": "Name a-\u003eString",
        "package": "scion-browser",
        "partial": "Name String",
        "signature": "Name l-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scion-browser/docs/Scion-PersistentBrowser.html#v:getQNameString",
      "description": {
        "fct-descr": "\u003cp\u003eGets the qualified name as a string.\n\u003c/p\u003e",
        "fct-module": "Scion.PersistentBrowser",
        "fct-package": "scion-browser",
        "fct-signature": "QName l -\u003e String",
        "fct-source": "src/Scion-PersistentBrowser-Types.html#getQNameString",
        "fct-type": "function",
        "title": "getQNameString"
      },
      "index": {
        "description": "Gets the qualified name as string",
        "hierarchy": "Scion PersistentBrowser",
        "module": "Scion.PersistentBrowser",
        "name": "getQNameString",
        "normalized": "QName a-\u003eString",
        "package": "scion-browser",
        "partial": "QName String",
        "signature": "QName l-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scion-browser/docs/Scion-PersistentBrowser.html#v:migrateAll",
      "description": {
        "fct-module": "Scion.PersistentBrowser",
        "fct-package": "scion-browser",
        "fct-signature": "Migration (SqlPersistT m)",
        "fct-source": "src/Scion-PersistentBrowser-DbTypes.html#migrateAll",
        "fct-type": "function",
        "title": "migrateAll"
      },
      "index": {
        "description": "",
        "hierarchy": "Scion PersistentBrowser",
        "module": "Scion.PersistentBrowser",
        "name": "migrateAll",
        "normalized": "",
        "package": "scion-browser",
        "partial": "All",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scion-browser/docs/Scion-PersistentBrowser.html#v:runLogging",
      "description": {
        "fct-descr": "\u003cp\u003ewrapper around logging methods, so we can enable logging when we debug\n\u003c/p\u003e",
        "fct-module": "Scion.PersistentBrowser",
        "fct-package": "scion-browser",
        "fct-signature": "LoggingT m a -\u003e m a",
        "fct-source": "src/Scion-PersistentBrowser-DbTypes.html#runLogging",
        "fct-type": "function",
        "title": "runLogging"
      },
      "index": {
        "description": "wrapper around logging methods so we can enable logging when we debug",
        "hierarchy": "Scion PersistentBrowser",
        "module": "Scion.PersistentBrowser",
        "name": "runLogging",
        "normalized": "LoggingT a b-\u003ea b",
        "package": "scion-browser",
        "partial": "Logging",
        "signature": "LoggingT m a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scion-browser/docs/Scion-PersistentHoogle.html#",
      "description": {
        "fct-module": "Scion.PersistentHoogle",
        "fct-package": "scion-browser",
        "fct-signature": "module",
        "fct-source": "src/Scion-PersistentHoogle.html",
        "fct-type": "module",
        "title": "PersistentHoogle"
      },
      "index": {
        "description": "",
        "hierarchy": "Scion PersistentHoogle",
        "module": "Scion.PersistentHoogle",
        "name": "PersistentHoogle",
        "normalized": "",
        "package": "scion-browser",
        "partial": "Persistent Hoogle",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scion-browser/docs/Scion-PersistentHoogle.html#t:HoogleStatus",
      "description": {
        "fct-descr": "\u003cp\u003estatus of hoogle operation\n\u003c/p\u003e",
        "fct-module": "Scion.PersistentHoogle",
        "fct-package": "scion-browser",
        "fct-signature": "data",
        "fct-source": "src/Scion-PersistentHoogle-Types.html#HoogleStatus",
        "fct-type": "data",
        "title": "HoogleStatus"
      },
      "index": {
        "description": "status of hoogle operation",
        "hierarchy": "Scion PersistentHoogle",
        "module": "Scion.PersistentHoogle",
        "name": "HoogleStatus",
        "normalized": "",
        "package": "scion-browser",
        "partial": "Hoogle Status",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scion-browser/docs/Scion-PersistentHoogle.html#t:Query",
      "description": {
        "fct-module": "Scion.PersistentHoogle",
        "fct-package": "scion-browser",
        "fct-signature": "data",
        "fct-source": "src/Scion-PersistentHoogle-Types.html#Query",
        "fct-type": "data",
        "title": "Query"
      },
      "index": {
        "description": "",
        "hierarchy": "Scion PersistentHoogle",
        "module": "Scion.PersistentHoogle",
        "name": "Query",
        "normalized": "",
        "package": "scion-browser",
        "partial": "Query",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scion-browser/docs/Scion-PersistentHoogle.html#t:Result",
      "description": {
        "fct-module": "Scion.PersistentHoogle",
        "fct-package": "scion-browser",
        "fct-signature": "data",
        "fct-source": "src/Scion-PersistentHoogle-Types.html#Result",
        "fct-type": "data",
        "title": "Result"
      },
      "index": {
        "description": "",
        "hierarchy": "Scion PersistentHoogle",
        "module": "Scion.PersistentHoogle",
        "name": "Result",
        "normalized": "",
        "package": "scion-browser",
        "partial": "Result",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scion-browser/docs/Scion-PersistentHoogle.html#t:Results",
      "description": {
        "fct-module": "Scion.PersistentHoogle",
        "fct-package": "scion-browser",
        "fct-signature": "type",
        "fct-source": "src/Scion-PersistentHoogle-Types.html#Results",
        "fct-type": "type",
        "title": "Results"
      },
      "index": {
        "description": "",
        "hierarchy": "Scion PersistentHoogle",
        "module": "Scion.PersistentHoogle",
        "name": "Results",
        "normalized": "",
        "package": "scion-browser",
        "partial": "Results",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scion-browser/docs/Scion-PersistentHoogle.html#v:Error",
      "description": {
        "fct-module": "Scion.PersistentHoogle",
        "fct-package": "scion-browser",
        "fct-signature": "Error",
        "fct-source": "src/Scion-PersistentHoogle-Types.html#HoogleStatus",
        "fct-type": "function",
        "title": "Error"
      },
      "index": {
        "description": "",
        "hierarchy": "Scion PersistentHoogle",
        "module": "Scion.PersistentHoogle",
        "name": "Error",
        "normalized": "",
        "package": "scion-browser",
        "partial": "Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scion-browser/docs/Scion-PersistentHoogle.html#v:Missing",
      "description": {
        "fct-module": "Scion.PersistentHoogle",
        "fct-package": "scion-browser",
        "fct-signature": "Missing",
        "fct-source": "src/Scion-PersistentHoogle-Types.html#HoogleStatus",
        "fct-type": "function",
        "title": "Missing"
      },
      "index": {
        "description": "",
        "hierarchy": "Scion PersistentHoogle",
        "module": "Scion.PersistentHoogle",
        "name": "Missing",
        "normalized": "",
        "package": "scion-browser",
        "partial": "Missing",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scion-browser/docs/Scion-PersistentHoogle.html#v:OK",
      "description": {
        "fct-module": "Scion.PersistentHoogle",
        "fct-package": "scion-browser",
        "fct-signature": "OK",
        "fct-source": "src/Scion-PersistentHoogle-Types.html#HoogleStatus",
        "fct-type": "function",
        "title": "OK"
      },
      "index": {
        "description": "",
        "hierarchy": "Scion PersistentHoogle",
        "module": "Scion.PersistentHoogle",
        "name": "OK",
        "normalized": "",
        "package": "scion-browser",
        "partial": "OK",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scion-browser/docs/Scion-PersistentHoogle.html#v:Query",
      "description": {
        "fct-module": "Scion.PersistentHoogle",
        "fct-package": "scion-browser",
        "fct-signature": "Query String",
        "fct-source": "src/Scion-PersistentHoogle-Types.html#Query",
        "fct-type": "function",
        "title": "Query"
      },
      "index": {
        "description": "",
        "hierarchy": "Scion PersistentHoogle",
        "module": "Scion.PersistentHoogle",
        "name": "Query",
        "normalized": "",
        "package": "scion-browser",
        "partial": "Query",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scion-browser/docs/Scion-PersistentHoogle.html#v:RConstructor",
      "description": {
        "fct-module": "Scion.PersistentHoogle",
        "fct-package": "scion-browser",
        "fct-signature": "RConstructor [(DbPackageIdentifier, String, DbCompleteDecl, DbConstructor)]",
        "fct-source": "src/Scion-PersistentHoogle-Types.html#Result",
        "fct-type": "function",
        "title": "RConstructor"
      },
      "index": {
        "description": "",
        "hierarchy": "Scion PersistentHoogle",
        "module": "Scion.PersistentHoogle",
        "name": "RConstructor",
        "normalized": "RConstructor[(DbPackageIdentifier,String,DbCompleteDecl,DbConstructor)]",
        "package": "scion-browser",
        "partial": "RConstructor",
        "signature": "RConstructor[(DbPackageIdentifier,String,DbCompleteDecl,DbConstructor)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scion-browser/docs/Scion-PersistentHoogle.html#v:RDeclaration",
      "description": {
        "fct-module": "Scion.PersistentHoogle",
        "fct-package": "scion-browser",
        "fct-signature": "RDeclaration [(DbPackageIdentifier, String, DbCompleteDecl)]",
        "fct-source": "src/Scion-PersistentHoogle-Types.html#Result",
        "fct-type": "function",
        "title": "RDeclaration"
      },
      "index": {
        "description": "",
        "hierarchy": "Scion PersistentHoogle",
        "module": "Scion.PersistentHoogle",
        "name": "RDeclaration",
        "normalized": "RDeclaration[(DbPackageIdentifier,String,DbCompleteDecl)]",
        "package": "scion-browser",
        "partial": "RDeclaration",
        "signature": "RDeclaration[(DbPackageIdentifier,String,DbCompleteDecl)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scion-browser/docs/Scion-PersistentHoogle.html#v:RKeyword",
      "description": {
        "fct-module": "Scion.PersistentHoogle",
        "fct-package": "scion-browser",
        "fct-signature": "RKeyword String",
        "fct-source": "src/Scion-PersistentHoogle-Types.html#Result",
        "fct-type": "function",
        "title": "RKeyword"
      },
      "index": {
        "description": "",
        "hierarchy": "Scion PersistentHoogle",
        "module": "Scion.PersistentHoogle",
        "name": "RKeyword",
        "normalized": "",
        "package": "scion-browser",
        "partial": "RKeyword",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scion-browser/docs/Scion-PersistentHoogle.html#v:RModule",
      "description": {
        "fct-module": "Scion.PersistentHoogle",
        "fct-package": "scion-browser",
        "fct-signature": "RModule [(DbPackageIdentifier, DbModule)]",
        "fct-source": "src/Scion-PersistentHoogle-Types.html#Result",
        "fct-type": "function",
        "title": "RModule"
      },
      "index": {
        "description": "",
        "hierarchy": "Scion PersistentHoogle",
        "module": "Scion.PersistentHoogle",
        "name": "RModule",
        "normalized": "RModule[(DbPackageIdentifier,DbModule)]",
        "package": "scion-browser",
        "partial": "RModule",
        "signature": "RModule[(DbPackageIdentifier,DbModule)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scion-browser/docs/Scion-PersistentHoogle.html#v:RPackage",
      "description": {
        "fct-module": "Scion.PersistentHoogle",
        "fct-package": "scion-browser",
        "fct-signature": "RPackage [DbPackage]",
        "fct-source": "src/Scion-PersistentHoogle-Types.html#Result",
        "fct-type": "function",
        "title": "RPackage"
      },
      "index": {
        "description": "",
        "hierarchy": "Scion PersistentHoogle",
        "module": "Scion.PersistentHoogle",
        "name": "RPackage",
        "normalized": "RPackage[DbPackage]",
        "package": "scion-browser",
        "partial": "RPackage",
        "signature": "RPackage[DbPackage]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scion-browser/docs/Scion-PersistentHoogle.html#v:checkDatabase",
      "description": {
        "fct-module": "Scion.PersistentHoogle",
        "fct-package": "scion-browser",
        "fct-signature": "Maybe String -\u003e IO HoogleStatus",
        "fct-source": "src/Scion-PersistentHoogle.html#checkDatabase",
        "fct-type": "function",
        "title": "checkDatabase"
      },
      "index": {
        "description": "",
        "hierarchy": "Scion PersistentHoogle",
        "module": "Scion.PersistentHoogle",
        "name": "checkDatabase",
        "normalized": "Maybe String-\u003eIO HoogleStatus",
        "package": "scion-browser",
        "partial": "Database",
        "signature": "Maybe String-\u003eIO HoogleStatus"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scion-browser/docs/Scion-PersistentHoogle.html#v:downloadData",
      "description": {
        "fct-module": "Scion.PersistentHoogle",
        "fct-package": "scion-browser",
        "fct-signature": "Maybe String -\u003e IO HoogleStatus",
        "fct-source": "src/Scion-PersistentHoogle.html#downloadData",
        "fct-type": "function",
        "title": "downloadData"
      },
      "index": {
        "description": "",
        "hierarchy": "Scion PersistentHoogle",
        "module": "Scion.PersistentHoogle",
        "name": "downloadData",
        "normalized": "Maybe String-\u003eIO HoogleStatus",
        "package": "scion-browser",
        "partial": "Data",
        "signature": "Maybe String-\u003eIO HoogleStatus"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scion-browser/docs/Scion-PersistentHoogle.html#v:query",
      "description": {
        "fct-module": "Scion.PersistentHoogle",
        "fct-package": "scion-browser",
        "fct-signature": "Maybe String -\u003e String -\u003e SQL [Result]",
        "fct-source": "src/Scion-PersistentHoogle.html#query",
        "fct-type": "function",
        "title": "query"
      },
      "index": {
        "description": "",
        "hierarchy": "Scion PersistentHoogle",
        "module": "Scion.PersistentHoogle",
        "name": "query",
        "normalized": "Maybe String-\u003eString-\u003eSQL[Result]",
        "package": "scion-browser",
        "partial": "",
        "signature": "Maybe String-\u003eString-\u003eSQL[Result]"
      }
    }
  }
]