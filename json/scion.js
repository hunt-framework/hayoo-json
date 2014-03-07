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
        "word": "scion"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scion.Configure",
          "name": "ConfigException",
          "package": "scion",
          "source": "http://hackage.haskell.org/package/scion/docs/src/Scion-Configure.html#ConfigException",
          "type": "data"
        },
        "index": {
          "hierarchy": "Scion Configure",
          "module": "Scion.Configure",
          "name": "ConfigException",
          "package": "scion",
          "partial": "Config Exception",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/scion/docs/Scion-Configure.html#t:ConfigException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Path to .cabal file.  TODO: ATM, we only need the\n directory\nCommand line arguments.\n",
          "module": "Scion.Configure",
          "name": "cabalSetupWithArgs",
          "package": "scion",
          "signature": "FilePath-\u003e [String]-\u003e ScionM Bool",
          "source": "http://hackage.haskell.org/package/scion/docs/src/Scion-Configure.html#cabalSetupWithArgs",
          "type": "function"
        },
        "index": {
          "description": "Path to cabal file TODO ATM we only need the directory Command line arguments",
          "hierarchy": "Scion Configure",
          "module": "Scion.Configure",
          "name": "cabalSetupWithArgs",
          "normalized": "FilePath-\u003e[String]-\u003eScionM Bool",
          "package": "scion",
          "partial": "Setup With Args",
          "signature": "FilePath-\u003e[String]-\u003eScionM Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scion/docs/Scion-Configure.html#v:cabalSetupWithArgs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "The project root.  (Where the .cabal file resides)\ndist dir, i.e., directory where to put generated files.\ncommand line arguments to \u003ca\u003econfigure\u003c/a\u003e. [XXX: currently\n ignored!]\n",
          "module": "Scion.Configure",
          "name": "configureCabalProject",
          "package": "scion",
          "signature": "FilePath-\u003e FilePath-\u003e [String]-\u003e ScionM ()",
          "source": "http://hackage.haskell.org/package/scion/docs/src/Scion-Configure.html#configureCabalProject",
          "type": "function"
        },
        "index": {
          "description": "The project root Where the cabal file resides dist dir i.e directory where to put generated files command line arguments to configure XXX currently ignored",
          "hierarchy": "Scion Configure",
          "module": "Scion.Configure",
          "name": "configureCabalProject",
          "normalized": "FilePath-\u003eFilePath-\u003e[String]-\u003eScionM()",
          "package": "scion",
          "partial": "Cabal Project",
          "signature": "FilePath-\u003eFilePath-\u003e[String]-\u003eScionM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scion/docs/Scion-Configure.html#v:configureCabalProject"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "The project root.  (Where the .cabal file resides)\ndist dir, i.e., directory where to put generated files.\ncommand line arguments to \u003ca\u003econfigure\u003c/a\u003e.\n",
          "module": "Scion.Configure",
          "name": "openOrConfigureCabalProject",
          "package": "scion",
          "signature": "FilePath-\u003e FilePath-\u003e [String]-\u003e ScionM ()",
          "source": "http://hackage.haskell.org/package/scion/docs/src/Scion-Configure.html#openOrConfigureCabalProject",
          "type": "function"
        },
        "index": {
          "description": "The project root Where the cabal file resides dist dir i.e directory where to put generated files command line arguments to configure",
          "hierarchy": "Scion Configure",
          "module": "Scion.Configure",
          "name": "openOrConfigureCabalProject",
          "normalized": "FilePath-\u003eFilePath-\u003e[String]-\u003eScionM()",
          "package": "scion",
          "partial": "Or Configure Cabal Project",
          "signature": "FilePath-\u003eFilePath-\u003e[String]-\u003eScionM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scion/docs/Scion-Configure.html#v:openOrConfigureCabalProject"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scion.Inspect.DefinitionSite",
          "name": "addToDB",
          "package": "scion",
          "signature": "String -\u003e Location -\u003e TyThing -\u003e DefSiteDB -\u003e DefSiteDB",
          "source": "http://hackage.haskell.org/package/scion/docs/src/Scion-Inspect-DefinitionSite.html#addToDB",
          "type": "function"
        },
        "index": {
          "hierarchy": "Scion Inspect DefinitionSite",
          "module": "Scion.Inspect.DefinitionSite",
          "name": "addToDB",
          "normalized": "String-\u003eLocation-\u003eTyThing-\u003eDefSiteDB-\u003eDefSiteDB",
          "package": "scion",
          "partial": "To DB",
          "signature": "String-\u003eLocation-\u003eTyThing-\u003eDefSiteDB-\u003eDefSiteDB",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scion/docs/Scion-Inspect-DefinitionSite.html#v:addToDB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Dump a definition site DB to stdout. (For debugging purposes.)\n",
          "module": "Scion.Inspect.DefinitionSite",
          "name": "dumpDefSiteDB",
          "package": "scion",
          "signature": "DefSiteDB -\u003e String",
          "source": "http://hackage.haskell.org/package/scion/docs/src/Scion-Inspect-DefinitionSite.html#dumpDefSiteDB",
          "type": "function"
        },
        "index": {
          "description": "Dump definition site DB to stdout For debugging purposes",
          "hierarchy": "Scion Inspect DefinitionSite",
          "module": "Scion.Inspect.DefinitionSite",
          "name": "dumpDefSiteDB",
          "normalized": "DefSiteDB-\u003eString",
          "package": "scion",
          "partial": "Def Site DB",
          "signature": "DefSiteDB-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scion/docs/Scion-Inspect-DefinitionSite.html#v:dumpDefSiteDB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Construct a SiteDB from a base directory and a list of \u003ctt\u003e\u003ca\u003eTyThing\u003c/a\u003e\u003c/tt\u003es.\n",
          "module": "Scion.Inspect.DefinitionSite",
          "name": "mkSiteDB",
          "package": "scion",
          "signature": "FilePath -\u003e [TyThing] -\u003e DefSiteDB",
          "source": "http://hackage.haskell.org/package/scion/docs/src/Scion-Inspect-DefinitionSite.html#mkSiteDB",
          "type": "function"
        },
        "index": {
          "description": "Construct SiteDB from base directory and list of TyThing",
          "hierarchy": "Scion Inspect DefinitionSite",
          "module": "Scion.Inspect.DefinitionSite",
          "name": "mkSiteDB",
          "normalized": "FilePath-\u003e[TyThing]-\u003eDefSiteDB",
          "package": "scion",
          "partial": "Site DB",
          "signature": "FilePath-\u003e[TyThing]-\u003eDefSiteDB",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scion/docs/Scion-Inspect-DefinitionSite.html#v:mkSiteDB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Base path (see \u003ctt\u003e\u003ca\u003eghcSpanToLocation\u003c/a\u003e\u003c/tt\u003e)\n",
          "module": "Scion.Inspect.DefinitionSite",
          "name": "moduleGraphDefSiteDB",
          "package": "scion",
          "signature": "FilePath-\u003e ModuleGraph-\u003e ScionM DefSiteDB",
          "source": "http://hackage.haskell.org/package/scion/docs/src/Scion-Inspect-DefinitionSite.html#moduleGraphDefSiteDB",
          "type": "function"
        },
        "index": {
          "description": "Base path see ghcSpanToLocation",
          "hierarchy": "Scion Inspect DefinitionSite",
          "module": "Scion.Inspect.DefinitionSite",
          "name": "moduleGraphDefSiteDB",
          "normalized": "FilePath-\u003eModuleGraph-\u003eScionM DefSiteDB",
          "package": "scion",
          "partial": "Graph Def Site DB",
          "signature": "FilePath-\u003eModuleGraph-\u003eScionM DefSiteDB",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scion/docs/Scion-Inspect-DefinitionSite.html#v:moduleGraphDefSiteDB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Base path (see \u003ctt\u003e\u003ca\u003eghcSpanToLocation\u003c/a\u003e\u003c/tt\u003e) and module.\n",
          "module": "Scion.Inspect.DefinitionSite",
          "name": "moduleSiteDB",
          "package": "scion",
          "signature": "(FilePath, Module)-\u003e ScionM DefSiteDB",
          "source": "http://hackage.haskell.org/package/scion/docs/src/Scion-Inspect-DefinitionSite.html#moduleSiteDB",
          "type": "function"
        },
        "index": {
          "description": "Base path see ghcSpanToLocation and module",
          "hierarchy": "Scion Inspect DefinitionSite",
          "module": "Scion.Inspect.DefinitionSite",
          "name": "moduleSiteDB",
          "normalized": "(FilePath,Module)-\u003eScionM DefSiteDB",
          "package": "scion",
          "partial": "Site DB",
          "signature": "(FilePath,Module)-\u003eScionM DefSiteDB",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scion/docs/Scion-Inspect-DefinitionSite.html#v:moduleSiteDB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scion.Inspect.Find",
          "name": "PosForest",
          "package": "scion",
          "source": "http://hackage.haskell.org/package/scion/docs/src/Scion-Inspect-Find.html#PosForest",
          "type": "type"
        },
        "index": {
          "hierarchy": "Scion Inspect Find",
          "module": "Scion.Inspect.Find",
          "name": "PosForest",
          "package": "scion",
          "partial": "Pos Forest",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/scion/docs/Scion-Inspect-Find.html#t:PosForest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scion.Inspect.Find",
          "name": "PosTree",
          "package": "scion",
          "source": "http://hackage.haskell.org/package/scion/docs/src/Scion-Inspect-Find.html#PosTree",
          "type": "data"
        },
        "index": {
          "hierarchy": "Scion Inspect Find",
          "module": "Scion.Inspect.Find",
          "name": "PosTree",
          "package": "scion",
          "partial": "Pos Tree",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/scion/docs/Scion-Inspect-Find.html#t:PosTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scion.Inspect.Find",
          "name": "SearchResult",
          "package": "scion",
          "source": "http://hackage.haskell.org/package/scion/docs/src/Scion-Inspect-Find.html#SearchResult",
          "type": "data"
        },
        "index": {
          "hierarchy": "Scion Inspect Find",
          "module": "Scion.Inspect.Find",
          "name": "SearchResult",
          "package": "scion",
          "partial": "Search Result",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/scion/docs/Scion-Inspect-Find.html#t:SearchResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scion.Inspect.Find",
          "name": "SearchResults",
          "package": "scion",
          "source": "http://hackage.haskell.org/package/scion/docs/src/Scion-Inspect-Find.html#SearchResults",
          "type": "type"
        },
        "index": {
          "hierarchy": "Scion Inspect Find",
          "module": "Scion.Inspect.Find",
          "name": "SearchResults",
          "package": "scion",
          "partial": "Search Results",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/scion/docs/Scion-Inspect-Find.html#t:SearchResults"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scion.Inspect.Find",
          "name": "deepestLeaf",
          "package": "scion",
          "signature": "PosTree a -\u003e a",
          "source": "http://hackage.haskell.org/package/scion/docs/src/Scion-Inspect-Find.html#deepestLeaf",
          "type": "function"
        },
        "index": {
          "hierarchy": "Scion Inspect Find",
          "module": "Scion.Inspect.Find",
          "name": "deepestLeaf",
          "normalized": "PosTree a-\u003ea",
          "package": "scion",
          "partial": "Leaf",
          "signature": "PosTree a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scion/docs/Scion-Inspect-Find.html#v:deepestLeaf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Lookup all the things in a certain region.\n",
          "module": "Scion.Inspect.Find",
          "name": "findHsThing",
          "package": "scion",
          "signature": "(SrcSpan -\u003e Bool) -\u003e a -\u003e SearchResults id",
          "source": "http://hackage.haskell.org/package/scion/docs/src/Scion-Inspect-Find.html#findHsThing",
          "type": "function"
        },
        "index": {
          "description": "Lookup all the things in certain region",
          "hierarchy": "Scion Inspect Find",
          "module": "Scion.Inspect.Find",
          "name": "findHsThing",
          "normalized": "(SrcSpan-\u003eBool)-\u003ea-\u003eSearchResults b",
          "package": "scion",
          "partial": "Hs Thing",
          "signature": "(SrcSpan-\u003eBool)-\u003ea-\u003eSearchResults id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scion/docs/Scion-Inspect-Find.html#v:findHsThing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scion.Inspect.Find",
          "name": "overlaps",
          "package": "scion",
          "signature": "SrcSpan -\u003e SrcSpan -\u003e Bool",
          "source": "http://hackage.haskell.org/package/scion/docs/src/Scion-Inspect-Find.html#overlaps",
          "type": "function"
        },
        "index": {
          "hierarchy": "Scion Inspect Find",
          "module": "Scion.Inspect.Find",
          "name": "overlaps",
          "normalized": "SrcSpan-\u003eSrcSpan-\u003eBool",
          "package": "scion",
          "signature": "SrcSpan-\u003eSrcSpan-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scion/docs/Scion-Inspect-Find.html#v:overlaps"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Returns the deepest leaf, together with the path to this leaf.  For\n example, for the following tree with root \u003ctt\u003eA\u003c/tt\u003e:\n \u003ctt\u003e\n     A -+- B --- C\n        '- D --- E --- F\n \u003c/tt\u003e\n this function will return:\n \u003ctt\u003e\n    (F, [E, D, A])\n \u003c/tt\u003e\n If \u003ctt\u003eF\u003c/tt\u003e were missing the result is either \u003ctt\u003e(C, [B,A])\u003c/tt\u003e or \u003ctt\u003e(E, [D,A])\u003c/tt\u003e.\n",
          "module": "Scion.Inspect.Find",
          "name": "pathToDeepest",
          "package": "scion",
          "signature": "PosForest a -\u003e Maybe (a, [a])",
          "source": "http://hackage.haskell.org/package/scion/docs/src/Scion-Inspect-Find.html#pathToDeepest",
          "type": "function"
        },
        "index": {
          "description": "Returns the deepest leaf together with the path to this leaf For example for the following tree with root this function will return If were missing the result is either or",
          "hierarchy": "Scion Inspect Find",
          "module": "Scion.Inspect.Find",
          "name": "pathToDeepest",
          "normalized": "PosForest a-\u003eMaybe(a,[a])",
          "package": "scion",
          "partial": "To Deepest",
          "signature": "PosForest a-\u003eMaybe(a,[a])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scion/docs/Scion-Inspect-Find.html#v:pathToDeepest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scion.Inspect.Find",
          "name": "surrounds",
          "package": "scion",
          "signature": "SrcSpan -\u003e SrcSpan -\u003e Bool",
          "source": "http://hackage.haskell.org/package/scion/docs/src/Scion-Inspect-Find.html#surrounds",
          "type": "function"
        },
        "index": {
          "hierarchy": "Scion Inspect Find",
          "module": "Scion.Inspect.Find",
          "name": "surrounds",
          "normalized": "SrcSpan-\u003eSrcSpan-\u003eBool",
          "package": "scion",
          "signature": "SrcSpan-\u003eSrcSpan-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scion/docs/Scion-Inspect-Find.html#v:surrounds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Reduce a top-level type application if possible.  That is, we perform the\n following simplification step:\n \u003ctt\u003e\n     (forall v . t) t'   ==\u003e   t [t'/v]\n \u003c/tt\u003e\n where \u003ctt\u003e[t'/v]\u003c/tt\u003e is the substitution of \u003ctt\u003et'\u003c/tt\u003e for \u003ctt\u003ev\u003c/tt\u003e.\n",
          "module": "Scion.Inspect.TypeOf",
          "name": "reduce_type",
          "package": "scion",
          "signature": "Type -\u003e Type",
          "source": "http://hackage.haskell.org/package/scion/docs/src/Scion-Inspect-TypeOf.html#reduce_type",
          "type": "function"
        },
        "index": {
          "description": "Reduce top-level type application if possible That is we perform the following simplification step forall where is the substitution of for",
          "hierarchy": "Scion Inspect TypeOf",
          "module": "Scion.Inspect.TypeOf",
          "name": "reduce_type",
          "normalized": "Type-\u003eType",
          "package": "scion",
          "signature": "Type-\u003eType",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scion/docs/Scion-Inspect-TypeOf.html#v:reduce_type"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scion.Inspect.TypeOf",
          "name": "subst_type",
          "package": "scion",
          "signature": "TyVar -\u003e Type -\u003e Type -\u003e Type",
          "source": "http://hackage.haskell.org/package/scion/docs/src/Scion-Inspect-TypeOf.html#subst_type",
          "type": "function"
        },
        "index": {
          "hierarchy": "Scion Inspect TypeOf",
          "module": "Scion.Inspect.TypeOf",
          "name": "subst_type",
          "normalized": "TyVar-\u003eType-\u003eType-\u003eType",
          "package": "scion",
          "signature": "TyVar-\u003eType-\u003eType-\u003eType",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scion/docs/Scion-Inspect-TypeOf.html#v:subst_type"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scion.Inspect.TypeOf",
          "name": "typeOf",
          "package": "scion",
          "signature": "(SearchResult Id, [SearchResult Id]) -\u003e Maybe Type",
          "source": "http://hackage.haskell.org/package/scion/docs/src/Scion-Inspect-TypeOf.html#typeOf",
          "type": "function"
        },
        "index": {
          "hierarchy": "Scion Inspect TypeOf",
          "module": "Scion.Inspect.TypeOf",
          "name": "typeOf",
          "normalized": "(SearchResult Id,[SearchResult Id])-\u003eMaybe Type",
          "package": "scion",
          "partial": "Of",
          "signature": "(SearchResult Id,[SearchResult Id])-\u003eMaybe Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scion/docs/Scion-Inspect-TypeOf.html#v:typeOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scion.Inspect",
          "name": "classDecls",
          "package": "scion",
          "signature": "RenamedSource -\u003e [LTyClDecl Name]",
          "source": "http://hackage.haskell.org/package/scion/docs/src/Scion-Inspect.html#classDecls",
          "type": "function"
        },
        "index": {
          "hierarchy": "Scion Inspect",
          "module": "Scion.Inspect",
          "name": "classDecls",
          "normalized": "RenamedSource-\u003e[LTyClDecl Name]",
          "package": "scion",
          "partial": "Decls",
          "signature": "RenamedSource-\u003e[LTyClDecl Name]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scion/docs/Scion-Inspect.html#v:classDecls"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scion.Inspect",
          "name": "familyDecls",
          "package": "scion",
          "signature": "RenamedSource -\u003e [LTyClDecl Name]",
          "source": "http://hackage.haskell.org/package/scion/docs/src/Scion-Inspect.html#familyDecls",
          "type": "function"
        },
        "index": {
          "hierarchy": "Scion Inspect",
          "module": "Scion.Inspect",
          "name": "familyDecls",
          "normalized": "RenamedSource-\u003e[LTyClDecl Name]",
          "package": "scion",
          "partial": "Decls",
          "signature": "RenamedSource-\u003e[LTyClDecl Name]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scion/docs/Scion-Inspect.html#v:familyDecls"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scion.Inspect",
          "name": "prettyResult",
          "package": "scion",
          "signature": "SearchResult id -\u003e SDoc",
          "source": "http://hackage.haskell.org/package/scion/docs/src/Scion-Inspect.html#prettyResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "Scion Inspect",
          "module": "Scion.Inspect",
          "name": "prettyResult",
          "normalized": "SearchResult a-\u003eSDoc",
          "package": "scion",
          "partial": "Result",
          "signature": "SearchResult id-\u003eSDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scion/docs/Scion-Inspect.html#v:prettyResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scion.Inspect",
          "name": "toplevelNames",
          "package": "scion",
          "signature": "m -\u003e [Name]",
          "source": "http://hackage.haskell.org/package/scion/docs/src/Scion-Inspect.html#toplevelNames",
          "type": "function"
        },
        "index": {
          "hierarchy": "Scion Inspect",
          "module": "Scion.Inspect",
          "name": "toplevelNames",
          "normalized": "a-\u003e[Name]",
          "package": "scion",
          "partial": "Names",
          "signature": "m-\u003e[Name]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scion/docs/Scion-Inspect.html#v:toplevelNames"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scion.Inspect",
          "name": "typeDecls",
          "package": "scion",
          "signature": "m -\u003e [LTyClDecl Name]",
          "source": "http://hackage.haskell.org/package/scion/docs/src/Scion-Inspect.html#typeDecls",
          "type": "function"
        },
        "index": {
          "hierarchy": "Scion Inspect",
          "module": "Scion.Inspect",
          "name": "typeDecls",
          "normalized": "a-\u003e[LTyClDecl Name]",
          "package": "scion",
          "partial": "Decls",
          "signature": "m-\u003e[LTyClDecl Name]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scion/docs/Scion-Inspect.html#v:typeDecls"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scion.Inspect",
          "name": "typeOfResult",
          "package": "scion",
          "signature": "SearchResult Id -\u003e Maybe Type",
          "source": "http://hackage.haskell.org/package/scion/docs/src/Scion-Inspect.html#typeOfResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "Scion Inspect",
          "module": "Scion.Inspect",
          "name": "typeOfResult",
          "normalized": "SearchResult Id-\u003eMaybe Type",
          "package": "scion",
          "partial": "Of Result",
          "signature": "SearchResult Id-\u003eMaybe Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scion/docs/Scion-Inspect.html#v:typeOfResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scion.Session",
          "name": "CannotOpenCabalProject",
          "package": "scion",
          "source": "http://hackage.haskell.org/package/scion/docs/src/Scion-Session.html#CannotOpenCabalProject",
          "type": "data"
        },
        "index": {
          "hierarchy": "Scion Session",
          "module": "Scion.Session",
          "name": "CannotOpenCabalProject",
          "package": "scion",
          "partial": "Cannot Open Cabal Project",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/scion/docs/Scion-Session.html#t:CannotOpenCabalProject"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scion.Session",
          "name": "ComponentDoesNotExist",
          "package": "scion",
          "source": "http://hackage.haskell.org/package/scion/docs/src/Scion-Session.html#ComponentDoesNotExist",
          "type": "data"
        },
        "index": {
          "hierarchy": "Scion Session",
          "module": "Scion.Session",
          "name": "ComponentDoesNotExist",
          "package": "scion",
          "partial": "Component Does Not Exist",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/scion/docs/Scion-Session.html#t:ComponentDoesNotExist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scion.Session",
          "name": "NoCurrentCabalProject",
          "package": "scion",
          "source": "http://hackage.haskell.org/package/scion/docs/src/Scion-Session.html#NoCurrentCabalProject",
          "type": "data"
        },
        "index": {
          "hierarchy": "Scion Session",
          "module": "Scion.Session",
          "name": "NoCurrentCabalProject",
          "package": "scion",
          "partial": "No Current Cabal Project",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/scion/docs/Scion-Session.html#t:NoCurrentCabalProject"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParses the list of Strings as command line arguments and sets the\n \u003ctt\u003e\u003ca\u003eDynFlags\u003c/a\u003e\u003c/tt\u003e accordingly.\n\u003c/p\u003e\u003cp\u003eDoes not set the flags if a parse error occurs.  XXX: There's currently\n no way to find out if there was an error from inside the program.\n\u003c/p\u003e",
          "module": "Scion.Session",
          "name": "addCmdLineFlags",
          "package": "scion",
          "signature": "[String] -\u003e ScionM [PackageId]",
          "source": "http://hackage.haskell.org/package/scion/docs/src/Scion-Session.html#addCmdLineFlags",
          "type": "function"
        },
        "index": {
          "description": "Parses the list of Strings as command line arguments and sets the DynFlags accordingly Does not set the flags if parse error occurs XXX There currently no way to find out if there was an error from inside the program",
          "hierarchy": "Scion Session",
          "module": "Scion.Session",
          "name": "addCmdLineFlags",
          "normalized": "[String]-\u003eScionM[PackageId]",
          "package": "scion",
          "partial": "Cmd Line Flags",
          "signature": "[String]-\u003eScionM[PackageId]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scion/docs/Scion-Session.html#v:addCmdLineFlags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eList all components in the current cabal project.\n\u003c/p\u003e\u003cp\u003eThis can be used to present the user a list of possible items to load.\n\u003c/p\u003e\u003cp\u003eThrows:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ctt\u003e\u003ca\u003eNoCurrentCabalProject\u003c/a\u003e\u003c/tt\u003e if there is no current Cabal project.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Scion.Session",
          "name": "availableComponents",
          "package": "scion",
          "signature": "ScionM [Component]",
          "source": "http://hackage.haskell.org/package/scion/docs/src/Scion-Session.html#availableComponents",
          "type": "function"
        },
        "index": {
          "description": "List all components in the current cabal project This can be used to present the user list of possible items to load Throws NoCurrentCabalProject if there is no current Cabal project",
          "hierarchy": "Scion Session",
          "module": "Scion.Session",
          "name": "availableComponents",
          "normalized": "ScionM[Component]",
          "package": "scion",
          "partial": "Components",
          "signature": "ScionM[Component]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scion/docs/Scion-Session.html#v:availableComponents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "First element is \u003ctt\u003eFalse\u003c/tt\u003e \u003ca\u003e=\u003c/a\u003e step 1 above failed.\n",
          "module": "Scion.Session",
          "name": "backgroundTypecheckFile",
          "package": "scion",
          "signature": "FilePath-\u003e ScionM (Either String CompilationResult)",
          "source": "http://hackage.haskell.org/package/scion/docs/src/Scion-Session.html#backgroundTypecheckFile",
          "type": "function"
        },
        "index": {
          "description": "First element is False step above failed",
          "hierarchy": "Scion Session",
          "module": "Scion.Session",
          "name": "backgroundTypecheckFile",
          "normalized": "FilePath-\u003eScionM(Either String CompilationResult)",
          "package": "scion",
          "partial": "Typecheck File",
          "signature": "FilePath-\u003eScionM(Either String CompilationResult)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scion/docs/Scion-Session.html#v:backgroundTypecheckFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "The .cabal file\none of \u003ca\u003edist\u003c/a\u003e \u003ca\u003econfig\u003c/a\u003e \u003ca\u003eall\u003c/a\u003e\n",
          "module": "Scion.Session",
          "name": "cabalConfigurations",
          "package": "scion",
          "signature": "FilePath-\u003e String-\u003e Bool-\u003e ScionM [CabalConfiguration]",
          "source": "http://hackage.haskell.org/package/scion/docs/src/Scion-Session.html#cabalConfigurations",
          "type": "function"
        },
        "index": {
          "description": "The cabal file one of dist config all",
          "hierarchy": "Scion Session",
          "module": "Scion.Session",
          "name": "cabalConfigurations",
          "normalized": "FilePath-\u003eString-\u003eBool-\u003eScionM[CabalConfiguration]",
          "package": "scion",
          "partial": "Configurations",
          "signature": "FilePath-\u003eString-\u003eBool-\u003eScionM[CabalConfiguration]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scion/docs/Scion-Session.html#v:cabalConfigurations"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scion.Session",
          "name": "cabalModuleNameToTarget",
          "package": "scion",
          "signature": "ModuleName -\u003e Target",
          "source": "http://hackage.haskell.org/package/scion/docs/src/Scion-Session.html#cabalModuleNameToTarget",
          "type": "function"
        },
        "index": {
          "hierarchy": "Scion Session",
          "module": "Scion.Session",
          "name": "cabalModuleNameToTarget",
          "normalized": "ModuleName-\u003eTarget",
          "package": "scion",
          "partial": "Module Name To Target",
          "signature": "ModuleName-\u003eTarget",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scion/docs/Scion-Session.html#v:cabalModuleNameToTarget"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "The .cabal file\n",
          "module": "Scion.Session",
          "name": "cabalProjectComponents",
          "package": "scion",
          "signature": "FilePath-\u003e ScionM [Component]",
          "source": "http://hackage.haskell.org/package/scion/docs/src/Scion-Session.html#cabalProjectComponents",
          "type": "function"
        },
        "index": {
          "description": "The cabal file",
          "hierarchy": "Scion Session",
          "module": "Scion.Session",
          "name": "cabalProjectComponents",
          "normalized": "FilePath-\u003eScionM[Component]",
          "package": "scion",
          "partial": "Project Components",
          "signature": "FilePath-\u003eScionM[Component]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scion/docs/Scion-Session.html#v:cabalProjectComponents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scion.Session",
          "name": "cabalProjectRoot",
          "package": "scion",
          "signature": "ScionM FilePath",
          "source": "http://hackage.haskell.org/package/scion/docs/src/Scion-Session.html#cabalProjectRoot",
          "type": "function"
        },
        "index": {
          "hierarchy": "Scion Session",
          "module": "Scion.Session",
          "name": "cabalProjectRoot",
          "package": "scion",
          "partial": "Project Root",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scion/docs/Scion-Session.html#v:cabalProjectRoot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn path to the .cabal file of the current Cabal package.\n\u003c/p\u003e\u003cp\u003eThis is useful to identify the project when communicating with Scion from\n foreign code, because this does not require serialising the local build\n info.\n\u003c/p\u003e\u003cp\u003eThrows:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ctt\u003e\u003ca\u003eNoCurrentCabalProject\u003c/a\u003e\u003c/tt\u003e if there is no current Cabal project or the\n    current project has no .cabal file.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Scion.Session",
          "name": "currentCabalFile",
          "package": "scion",
          "signature": "ScionM FilePath",
          "source": "http://hackage.haskell.org/package/scion/docs/src/Scion-Session.html#currentCabalFile",
          "type": "function"
        },
        "index": {
          "description": "Return path to the cabal file of the current Cabal package This is useful to identify the project when communicating with Scion from foreign code because this does not require serialising the local build info Throws NoCurrentCabalProject if there is no current Cabal project or the current project has no cabal file",
          "hierarchy": "Scion Session",
          "module": "Scion.Session",
          "name": "currentCabalFile",
          "package": "scion",
          "partial": "Cabal File",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scion/docs/Scion-Session.html#v:currentCabalFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the (configured) package description of the current Cabal project.\n\u003c/p\u003e\u003cp\u003eThrows:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ctt\u003e\u003ca\u003eNoCurrentCabalProject\u003c/a\u003e\u003c/tt\u003e if there is no current Cabal project.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Scion.Session",
          "name": "currentCabalPackage",
          "package": "scion",
          "signature": "ScionM PackageDescription",
          "source": "http://hackage.haskell.org/package/scion/docs/src/Scion-Session.html#currentCabalPackage",
          "type": "function"
        },
        "index": {
          "description": "Return the configured package description of the current Cabal project Throws NoCurrentCabalProject if there is no current Cabal project",
          "hierarchy": "Scion Session",
          "module": "Scion.Session",
          "name": "currentCabalPackage",
          "package": "scion",
          "partial": "Cabal Package",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scion/docs/Scion-Session.html#v:currentCabalPackage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scion.Session",
          "name": "filePathToProjectModule",
          "package": "scion",
          "signature": "FilePath -\u003e ScionM (Maybe ModSummary)",
          "source": "http://hackage.haskell.org/package/scion/docs/src/Scion-Session.html#filePathToProjectModule",
          "type": "function"
        },
        "index": {
          "hierarchy": "Scion Session",
          "module": "Scion.Session",
          "name": "filePathToProjectModule",
          "normalized": "FilePath-\u003eScionM(Maybe ModSummary)",
          "package": "scion",
          "partial": "Path To Project Module",
          "signature": "FilePath-\u003eScionM(Maybe ModSummary)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scion/docs/Scion-Session.html#v:filePathToProjectModule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Return the currently active component.\n",
          "module": "Scion.Session",
          "name": "getActiveComponent",
          "package": "scion",
          "signature": "ScionM (Maybe Component)",
          "source": "http://hackage.haskell.org/package/scion/docs/src/Scion-Session.html#getActiveComponent",
          "type": "function"
        },
        "index": {
          "description": "Return the currently active component",
          "hierarchy": "Scion Session",
          "module": "Scion.Session",
          "name": "getActiveComponent",
          "package": "scion",
          "partial": "Active Component",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scion/docs/Scion-Session.html#v:getActiveComponent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the current \u003ctt\u003e\u003ca\u003eLocalBuildInfo\u003c/a\u003e\u003c/tt\u003e.\n\u003c/p\u003e\u003cp\u003eThe \u003ctt\u003e\u003ca\u003eLocalBuildInfo\u003c/a\u003e\u003c/tt\u003e is the result of configuring a Cabal project,\n therefore requires that we have a current Cabal project.\n\u003c/p\u003e\u003cp\u003eThrows:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ctt\u003e\u003ca\u003eNoCurrentCabalProject\u003c/a\u003e\u003c/tt\u003e if there is no current Cabal project.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Scion.Session",
          "name": "getLocalBuildInfo",
          "package": "scion",
          "signature": "ScionM LocalBuildInfo",
          "source": "http://hackage.haskell.org/package/scion/docs/src/Scion-Session.html#getLocalBuildInfo",
          "type": "function"
        },
        "index": {
          "description": "Return the current LocalBuildInfo The LocalBuildInfo is the result of configuring Cabal project therefore requires that we have current Cabal project Throws NoCurrentCabalProject if there is no current Cabal project",
          "hierarchy": "Scion Session",
          "module": "Scion.Session",
          "name": "getLocalBuildInfo",
          "package": "scion",
          "partial": "Local Build Info",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scion/docs/Scion-Session.html#v:getLocalBuildInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scion.Session",
          "name": "initialScionDynFlags",
          "package": "scion",
          "signature": "DynFlags -\u003e DynFlags",
          "source": "http://hackage.haskell.org/package/scion/docs/src/Scion-Session.html#initialScionDynFlags",
          "type": "function"
        },
        "index": {
          "hierarchy": "Scion Session",
          "module": "Scion.Session",
          "name": "initialScionDynFlags",
          "normalized": "DynFlags-\u003eDynFlags",
          "package": "scion",
          "partial": "Scion Dyn Flags",
          "signature": "DynFlags-\u003eDynFlags",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scion/docs/Scion-Session.html#v:initialScionDynFlags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scion.Session",
          "name": "isPartOfProject",
          "package": "scion",
          "signature": "FilePath -\u003e ScionM Bool",
          "source": "http://hackage.haskell.org/package/scion/docs/src/Scion-Session.html#isPartOfProject",
          "type": "function"
        },
        "index": {
          "hierarchy": "Scion Session",
          "module": "Scion.Session",
          "name": "isPartOfProject",
          "normalized": "FilePath-\u003eScionM Bool",
          "package": "scion",
          "partial": "Part Of Project",
          "signature": "FilePath-\u003eScionM Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scion/docs/Scion-Session.html#v:isPartOfProject"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Return whether the filepath refers to a file inside the current project\n   root.  Return \u003ctt\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/tt\u003e if there is no current project.\n",
          "module": "Scion.Session",
          "name": "isRelativeToProjectRoot",
          "package": "scion",
          "signature": "FilePath -\u003e ScionM Bool",
          "source": "http://hackage.haskell.org/package/scion/docs/src/Scion-Session.html#isRelativeToProjectRoot",
          "type": "function"
        },
        "index": {
          "description": "Return whether the filepath refers to file inside the current project root Return False if there is no current project",
          "hierarchy": "Scion Session",
          "module": "Scion.Session",
          "name": "isRelativeToProjectRoot",
          "normalized": "FilePath-\u003eScionM Bool",
          "package": "scion",
          "partial": "Relative To Project Root",
          "signature": "FilePath-\u003eScionM Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scion/docs/Scion-Session.html#v:isRelativeToProjectRoot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Wrapper for GHC.load.\n",
          "module": "Scion.Session",
          "name": "load",
          "package": "scion",
          "signature": "LoadHowMuch -\u003e ScionM CompilationResult",
          "source": "http://hackage.haskell.org/package/scion/docs/src/Scion-Session.html#load",
          "type": "function"
        },
        "index": {
          "description": "Wrapper for GHC.load",
          "hierarchy": "Scion Session",
          "module": "Scion.Session",
          "name": "load",
          "normalized": "LoadHowMuch-\u003eScionM CompilationResult",
          "package": "scion",
          "signature": "LoadHowMuch-\u003eScionM CompilationResult",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scion/docs/Scion-Session.html#v:load"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "The compilation result.\n",
          "module": "Scion.Session",
          "name": "loadComponent",
          "package": "scion",
          "signature": "Component-\u003e ScionM CompilationResult",
          "source": "http://hackage.haskell.org/package/scion/docs/src/Scion-Session.html#loadComponent",
          "type": "function"
        },
        "index": {
          "description": "The compilation result",
          "hierarchy": "Scion Session",
          "module": "Scion.Session",
          "name": "loadComponent",
          "normalized": "Component-\u003eScionM CompilationResult",
          "package": "scion",
          "partial": "Component",
          "signature": "Component-\u003eScionM CompilationResult",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scion/docs/Scion-Session.html#v:loadComponent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the \u003ctt\u003e\u003ca\u003eModSummary\u003c/a\u003e\u003c/tt\u003e that refers to the source file.\n\u003c/p\u003e\u003cp\u003eAssumes that there is exactly one such \u003ctt\u003e\u003ca\u003eModSummary\u003c/a\u003e\u003c/tt\u003e.\n\u003c/p\u003e",
          "module": "Scion.Session",
          "name": "modSummaryForFile",
          "package": "scion",
          "signature": "FilePath -\u003e ModuleGraph -\u003e ModSummary",
          "source": "http://hackage.haskell.org/package/scion/docs/src/Scion-Session.html#modSummaryForFile",
          "type": "function"
        },
        "index": {
          "description": "Return the ModSummary that refers to the source file Assumes that there is exactly one such ModSummary",
          "hierarchy": "Scion Session",
          "module": "Scion.Session",
          "name": "modSummaryForFile",
          "normalized": "FilePath-\u003eModuleGraph-\u003eModSummary",
          "package": "scion",
          "partial": "Summary For File",
          "signature": "FilePath-\u003eModuleGraph-\u003eModSummary",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scion/docs/Scion-Session.html#v:modSummaryForFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scion.Session",
          "name": "noExeError",
          "package": "scion",
          "signature": "String -\u003e ScionM a",
          "source": "http://hackage.haskell.org/package/scion/docs/src/Scion-Session.html#noExeError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Scion Session",
          "module": "Scion.Session",
          "name": "noExeError",
          "normalized": "String-\u003eScionM a",
          "package": "scion",
          "partial": "Exe Error",
          "signature": "String-\u003eScionM a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scion/docs/Scion-Session.html#v:noExeError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scion.Session",
          "name": "noLibError",
          "package": "scion",
          "signature": "ScionM a",
          "source": "http://hackage.haskell.org/package/scion/docs/src/Scion-Session.html#noLibError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Scion Session",
          "module": "Scion.Session",
          "name": "noLibError",
          "package": "scion",
          "partial": "Lib Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scion/docs/Scion-Session.html#v:noLibError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Project root directroy\nProject dist directory (relative)\n",
          "module": "Scion.Session",
          "name": "openCabalProject",
          "package": "scion",
          "signature": "FilePath-\u003e FilePath-\u003e ScionM ()",
          "source": "http://hackage.haskell.org/package/scion/docs/src/Scion-Session.html#openCabalProject",
          "type": "function"
        },
        "index": {
          "description": "Project root directroy Project dist directory relative",
          "hierarchy": "Scion Session",
          "module": "Scion.Session",
          "name": "openCabalProject",
          "normalized": "FilePath-\u003eFilePath-\u003eScionM()",
          "package": "scion",
          "partial": "Cabal Project",
          "signature": "FilePath-\u003eFilePath-\u003eScionM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scion/docs/Scion-Session.html#v:openCabalProject"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Run the steps that Cabal would call before building.\n",
          "module": "Scion.Session",
          "name": "preprocessPackage",
          "package": "scion",
          "signature": "FilePath -\u003e ScionM ()",
          "source": "http://hackage.haskell.org/package/scion/docs/src/Scion-Session.html#preprocessPackage",
          "type": "function"
        },
        "index": {
          "description": "Run the steps that Cabal would call before building",
          "hierarchy": "Scion Session",
          "module": "Scion.Session",
          "name": "preprocessPackage",
          "normalized": "FilePath-\u003eScionM()",
          "package": "scion",
          "partial": "Package",
          "signature": "FilePath-\u003eScionM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scion/docs/Scion-Session.html#v:preprocessPackage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRoot directory of the current Cabal project.\n\u003c/p\u003e\u003cp\u003eThrows:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ctt\u003e\u003ca\u003eNoCurrentCabalProject\u003c/a\u003e\u003c/tt\u003e if there is no current Cabal project.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Scion.Session",
          "name": "projectRootDir",
          "package": "scion",
          "signature": "ScionM FilePath",
          "source": "http://hackage.haskell.org/package/scion/docs/src/Scion-Session.html#projectRootDir",
          "type": "function"
        },
        "index": {
          "description": "Root directory of the current Cabal project Throws NoCurrentCabalProject if there is no current Cabal project",
          "hierarchy": "Scion Session",
          "module": "Scion.Session",
          "name": "projectRootDir",
          "package": "scion",
          "partial": "Root Dir",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scion/docs/Scion-Session.html#v:projectRootDir"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scion.Session",
          "name": "removeMessagesForFile",
          "package": "scion",
          "signature": "AbsFilePath -\u003e CompilationResult -\u003e ScionM CompilationResult",
          "source": "http://hackage.haskell.org/package/scion/docs/src/Scion-Session.html#removeMessagesForFile",
          "type": "function"
        },
        "index": {
          "hierarchy": "Scion Session",
          "module": "Scion.Session",
          "name": "removeMessagesForFile",
          "normalized": "AbsFilePath-\u003eCompilationResult-\u003eScionM CompilationResult",
          "package": "scion",
          "partial": "Messages For File",
          "signature": "AbsFilePath-\u003eCompilationResult-\u003eScionM CompilationResult",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scion/docs/Scion-Session.html#v:removeMessagesForFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReset the state of the session to a defined default state.\n\u003c/p\u003e\u003cp\u003eDue to some bugs in GHC this isn't completely possible.  For example, GHC\n retains instance declarations which can lead to problems when you load a\n new module which defines a different instance.  (You'll get a conflicting\n instance error, which can only be resolved by re-starting GHC.)\n\u003c/p\u003e",
          "module": "Scion.Session",
          "name": "resetSessionState",
          "package": "scion",
          "signature": "ScionM ()",
          "source": "http://hackage.haskell.org/package/scion/docs/src/Scion-Session.html#resetSessionState",
          "type": "function"
        },
        "index": {
          "description": "Reset the state of the session to defined default state Due to some bugs in GHC this isn completely possible For example GHC retains instance declarations which can lead to problems when you load new module which defines different instance You ll get conflicting instance error which can only be resolved by re-starting GHC",
          "hierarchy": "Scion Session",
          "module": "Scion.Session",
          "name": "resetSessionState",
          "normalized": "ScionM()",
          "package": "scion",
          "partial": "Session State",
          "signature": "ScionM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scion/docs/Scion-Session.html#v:resetSessionState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake the specified component the active one.  Sets the DynFlags to\n  those specified for the given component.  Unloads the possible\n\u003c/p\u003e\u003cp\u003eThrows:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ctt\u003e\u003ca\u003eNoCurrentCabalProject\u003c/a\u003e\u003c/tt\u003e if there is no current Cabal project.\n\u003c/li\u003e\u003cli\u003e \u003ctt\u003e\u003ca\u003eComponentDoesNotExist\u003c/a\u003e\u003c/tt\u003e if the current Cabal project does not contain\n    the specified component.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Scion.Session",
          "name": "setActiveComponent",
          "package": "scion",
          "signature": "Component -\u003e ScionM ()",
          "source": "http://hackage.haskell.org/package/scion/docs/src/Scion-Session.html#setActiveComponent",
          "type": "function"
        },
        "index": {
          "description": "Make the specified component the active one Sets the DynFlags to those specified for the given component Unloads the possible Throws NoCurrentCabalProject if there is no current Cabal project ComponentDoesNotExist if the current Cabal project does not contain the specified component",
          "hierarchy": "Scion Session",
          "module": "Scion.Session",
          "name": "setActiveComponent",
          "normalized": "Component-\u003eScionM()",
          "package": "scion",
          "partial": "Active Component",
          "signature": "Component-\u003eScionM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scion/docs/Scion-Session.html#v:setActiveComponent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eList of packages that need to be loaded.  This corresponds to the\n build-depends of the loaded component.\n\u003c/p\u003e\u003cp\u003eTODO: do something with this depending on Scion mode?\n\u003c/p\u003e",
          "module": "Scion.Session",
          "name": "setComponentDynFlags",
          "package": "scion",
          "signature": "Component-\u003e ScionM [PackageId]",
          "source": "http://hackage.haskell.org/package/scion/docs/src/Scion-Session.html#setComponentDynFlags",
          "type": "function"
        },
        "index": {
          "description": "List of packages that need to be loaded This corresponds to the build-depends of the loaded component TODO do something with this depending on Scion mode",
          "hierarchy": "Scion Session",
          "module": "Scion.Session",
          "name": "setComponentDynFlags",
          "normalized": "Component-\u003eScionM[PackageId]",
          "package": "scion",
          "partial": "Component Dyn Flags",
          "signature": "Component-\u003eScionM[PackageId]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scion/docs/Scion-Session.html#v:setComponentDynFlags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the targets for a GHC.load command from the meta data of the\n   current Cabal project.\n\u003c/p\u003e\u003cp\u003eThrows:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ctt\u003e\u003ca\u003eNoCurrentCabalProject\u003c/a\u003e\u003c/tt\u003e if there is no current Cabal project.\n\u003c/li\u003e\u003cli\u003e \u003ctt\u003e\u003ca\u003eComponentDoesNotExist\u003c/a\u003e\u003c/tt\u003e if the current Cabal project does not contain\n    the specified component.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Scion.Session",
          "name": "setComponentTargets",
          "package": "scion",
          "signature": "Component -\u003e ScionM ()",
          "source": "http://hackage.haskell.org/package/scion/docs/src/Scion-Session.html#setComponentTargets",
          "type": "function"
        },
        "index": {
          "description": "Set the targets for GHC.load command from the meta data of the current Cabal project Throws NoCurrentCabalProject if there is no current Cabal project ComponentDoesNotExist if the current Cabal project does not contain the specified component",
          "hierarchy": "Scion Session",
          "module": "Scion.Session",
          "name": "setComponentTargets",
          "normalized": "Component-\u003eScionM()",
          "package": "scion",
          "partial": "Component Targets",
          "signature": "Component-\u003eScionM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scion/docs/Scion-Session.html#v:setComponentTargets"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEnsure that all dependencies of the module are already loaded.\n\u003c/p\u003e\u003cp\u003eSets \u003ctt\u003e\u003ca\u003efocusedModule\u003c/a\u003e\u003c/tt\u003e if it was successful.\n\u003c/p\u003e",
          "module": "Scion.Session",
          "name": "setContextForBGTC",
          "package": "scion",
          "signature": "ModSummary -\u003e ScionM (Maybe ModuleName, CompilationResult)",
          "source": "http://hackage.haskell.org/package/scion/docs/src/Scion-Session.html#setContextForBGTC",
          "type": "function"
        },
        "index": {
          "description": "Ensure that all dependencies of the module are already loaded Sets focusedModule if it was successful",
          "hierarchy": "Scion Session",
          "module": "Scion.Session",
          "name": "setContextForBGTC",
          "normalized": "ModSummary-\u003eScionM(Maybe ModuleName,CompilationResult)",
          "package": "scion",
          "partial": "Context For BGTC",
          "signature": "ModSummary-\u003eScionM(Maybe ModuleName,CompilationResult)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scion/docs/Scion-Session.html#v:setContextForBGTC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Set the verbosity of the GHC API.\n",
          "module": "Scion.Session",
          "name": "setGHCVerbosity",
          "package": "scion",
          "signature": "Int -\u003e ScionM ()",
          "source": "http://hackage.haskell.org/package/scion/docs/src/Scion-Session.html#setGHCVerbosity",
          "type": "function"
        },
        "index": {
          "description": "Set the verbosity of the GHC API",
          "hierarchy": "Scion Session",
          "module": "Scion.Session",
          "name": "setGHCVerbosity",
          "normalized": "Int-\u003eScionM()",
          "package": "scion",
          "partial": "GHCVerbosity",
          "signature": "Int-\u003eScionM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scion/docs/Scion-Session.html#v:setGHCVerbosity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSets the current working directory and notifies GHC about the change.\n\u003c/p\u003e\u003cp\u003eTODO: do we want to adjust certain flags automatically?\n\u003c/p\u003e",
          "module": "Scion.Session",
          "name": "setWorkingDir",
          "package": "scion",
          "signature": "FilePath -\u003e ScionM ()",
          "source": "http://hackage.haskell.org/package/scion/docs/src/Scion-Session.html#setWorkingDir",
          "type": "function"
        },
        "index": {
          "description": "Sets the current working directory and notifies GHC about the change TODO do we want to adjust certain flags automatically",
          "hierarchy": "Scion Session",
          "module": "Scion.Session",
          "name": "setWorkingDir",
          "normalized": "FilePath-\u003eScionM()",
          "package": "scion",
          "partial": "Working Dir",
          "signature": "FilePath-\u003eScionM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scion/docs/Scion-Session.html#v:setWorkingDir"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Unload whatever is currently loaded.\n",
          "module": "Scion.Session",
          "name": "unload",
          "package": "scion",
          "signature": "ScionM ()",
          "source": "http://hackage.haskell.org/package/scion/docs/src/Scion-Session.html#unload",
          "type": "function"
        },
        "index": {
          "description": "Unload whatever is currently loaded",
          "hierarchy": "Scion Session",
          "module": "Scion.Session",
          "name": "unload",
          "normalized": "ScionM()",
          "package": "scion",
          "signature": "ScionM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scion/docs/Scion-Session.html#v:unload"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scion.Types.Notes",
          "name": "AbsFilePath",
          "package": "scion",
          "source": "http://hackage.haskell.org/package/scion/docs/src/Scion-Types-Notes.html#AbsFilePath",
          "type": "data"
        },
        "index": {
          "hierarchy": "Scion Types Notes",
          "module": "Scion.Types.Notes",
          "name": "AbsFilePath",
          "package": "scion",
          "partial": "Abs File Path",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/scion/docs/Scion-Types-Notes.html#t:AbsFilePath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scion.Types.Notes",
          "name": "LocSource",
          "package": "scion",
          "source": "http://hackage.haskell.org/package/scion/docs/src/Scion-Types-Notes.html#LocSource",
          "type": "data"
        },
        "index": {
          "hierarchy": "Scion Types Notes",
          "module": "Scion.Types.Notes",
          "name": "LocSource",
          "package": "scion",
          "partial": "Loc Source",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/scion/docs/Scion-Types-Notes.html#t:LocSource"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scion.Types.Notes",
          "name": "Location",
          "package": "scion",
          "source": "http://hackage.haskell.org/package/scion/docs/src/Scion-Types-Notes.html#Location",
          "type": "data"
        },
        "index": {
          "hierarchy": "Scion Types Notes",
          "module": "Scion.Types.Notes",
          "name": "Location",
          "package": "scion",
          "partial": "Location",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/scion/docs/Scion-Types-Notes.html#t:Location"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scion.Types.Notes",
          "name": "Note",
          "package": "scion",
          "source": "http://hackage.haskell.org/package/scion/docs/src/Scion-Types-Notes.html#Note",
          "type": "data"
        },
        "index": {
          "hierarchy": "Scion Types Notes",
          "module": "Scion.Types.Notes",
          "name": "Note",
          "package": "scion",
          "partial": "Note",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/scion/docs/Scion-Types-Notes.html#t:Note"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scion.Types.Notes",
          "name": "NoteKind",
          "package": "scion",
          "source": "http://hackage.haskell.org/package/scion/docs/src/Scion-Types-Notes.html#NoteKind",
          "type": "data"
        },
        "index": {
          "hierarchy": "Scion Types Notes",
          "module": "Scion.Types.Notes",
          "name": "NoteKind",
          "package": "scion",
          "partial": "Note Kind",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/scion/docs/Scion-Types-Notes.html#t:NoteKind"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scion.Types.Notes",
          "name": "Notes",
          "package": "scion",
          "source": "http://hackage.haskell.org/package/scion/docs/src/Scion-Types-Notes.html#Notes",
          "type": "type"
        },
        "index": {
          "hierarchy": "Scion Types Notes",
          "module": "Scion.Types.Notes",
          "name": "Notes",
          "package": "scion",
          "partial": "Notes",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/scion/docs/Scion-Types-Notes.html#t:Notes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scion.Types.Notes",
          "name": "ghcErrMsgToNote",
          "package": "scion",
          "signature": "FilePath -\u003e ErrMsg -\u003e Note",
          "source": "http://hackage.haskell.org/package/scion/docs/src/Scion-Types-Notes.html#ghcErrMsgToNote",
          "type": "function"
        },
        "index": {
          "hierarchy": "Scion Types Notes",
          "module": "Scion.Types.Notes",
          "name": "ghcErrMsgToNote",
          "normalized": "FilePath-\u003eErrMsg-\u003eNote",
          "package": "scion",
          "partial": "Err Msg To Note",
          "signature": "FilePath-\u003eErrMsg-\u003eNote",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scion/docs/Scion-Types-Notes.html#v:ghcErrMsgToNote"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Base path for normalising paths.\n See \u003ctt\u003e\u003ca\u003emkAbsFilePath\u003c/a\u003e\u003c/tt\u003e.\n",
          "module": "Scion.Types.Notes",
          "name": "ghcMessagesToNotes",
          "package": "scion",
          "signature": "FilePath-\u003e Messages-\u003e Notes",
          "source": "http://hackage.haskell.org/package/scion/docs/src/Scion-Types-Notes.html#ghcMessagesToNotes",
          "type": "function"
        },
        "index": {
          "description": "Base path for normalising paths See mkAbsFilePath",
          "hierarchy": "Scion Types Notes",
          "module": "Scion.Types.Notes",
          "name": "ghcMessagesToNotes",
          "normalized": "FilePath-\u003eMessages-\u003eNotes",
          "package": "scion",
          "partial": "Messages To Notes",
          "signature": "FilePath-\u003eMessages-\u003eNotes",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scion/docs/Scion-Types-Notes.html#v:ghcMessagesToNotes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Base directory\n",
          "module": "Scion.Types.Notes",
          "name": "ghcSpanToLocation",
          "package": "scion",
          "signature": "FilePath-\u003e SrcSpan-\u003e Location",
          "source": "http://hackage.haskell.org/package/scion/docs/src/Scion-Types-Notes.html#ghcSpanToLocation",
          "type": "function"
        },
        "index": {
          "description": "Base directory",
          "hierarchy": "Scion Types Notes",
          "module": "Scion.Types.Notes",
          "name": "ghcSpanToLocation",
          "normalized": "FilePath-\u003eSrcSpan-\u003eLocation",
          "package": "scion",
          "partial": "Span To Location",
          "signature": "FilePath-\u003eSrcSpan-\u003eLocation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scion/docs/Scion-Types-Notes.html#v:ghcSpanToLocation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scion.Types.Notes",
          "name": "ghcWarnMsgToNote",
          "package": "scion",
          "signature": "FilePath -\u003e WarnMsg -\u003e Note",
          "source": "http://hackage.haskell.org/package/scion/docs/src/Scion-Types-Notes.html#ghcWarnMsgToNote",
          "type": "function"
        },
        "index": {
          "hierarchy": "Scion Types Notes",
          "module": "Scion.Types.Notes",
          "name": "ghcWarnMsgToNote",
          "normalized": "FilePath-\u003eWarnMsg-\u003eNote",
          "package": "scion",
          "partial": "Warn Msg To Note",
          "signature": "FilePath-\u003eWarnMsg-\u003eNote",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scion/docs/Scion-Types-Notes.html#v:ghcWarnMsgToNote"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Test whether a location is valid, i.e., not constructed with \u003ctt\u003e\u003ca\u003emkNoLoc\u003c/a\u003e\u003c/tt\u003e.\n",
          "module": "Scion.Types.Notes",
          "name": "isValidLoc",
          "package": "scion",
          "signature": "Location -\u003e Bool",
          "source": "http://hackage.haskell.org/package/scion/docs/src/Scion-Types-Notes.html#isValidLoc",
          "type": "function"
        },
        "index": {
          "description": "Test whether location is valid i.e not constructed with mkNoLoc",
          "hierarchy": "Scion Types Notes",
          "module": "Scion.Types.Notes",
          "name": "isValidLoc",
          "normalized": "Location-\u003eBool",
          "package": "scion",
          "partial": "Valid Loc",
          "signature": "Location-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scion/docs/Scion-Types-Notes.html#v:isValidLoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Return the end column.  Only defined on valid locations.\n",
          "module": "Scion.Types.Notes",
          "name": "locEndCol",
          "package": "scion",
          "signature": "Location -\u003e Int",
          "source": "http://hackage.haskell.org/package/scion/docs/src/Scion-Types-Notes.html#locEndCol",
          "type": "function"
        },
        "index": {
          "description": "Return the end column Only defined on valid locations",
          "hierarchy": "Scion Types Notes",
          "module": "Scion.Types.Notes",
          "name": "locEndCol",
          "normalized": "Location-\u003eInt",
          "package": "scion",
          "partial": "End Col",
          "signature": "Location-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scion/docs/Scion-Types-Notes.html#v:locEndCol"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Return the end line.  Only defined on valid locations.\n",
          "module": "Scion.Types.Notes",
          "name": "locEndLine",
          "package": "scion",
          "signature": "Location -\u003e Int",
          "source": "http://hackage.haskell.org/package/scion/docs/src/Scion-Types-Notes.html#locEndLine",
          "type": "function"
        },
        "index": {
          "description": "Return the end line Only defined on valid locations",
          "hierarchy": "Scion Types Notes",
          "module": "Scion.Types.Notes",
          "name": "locEndLine",
          "normalized": "Location-\u003eInt",
          "package": "scion",
          "partial": "End Line",
          "signature": "Location-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scion/docs/Scion-Types-Notes.html#v:locEndLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scion.Types.Notes",
          "name": "locSource",
          "package": "scion",
          "signature": "Location -\u003e LocSource",
          "source": "http://hackage.haskell.org/package/scion/docs/src/Scion-Types-Notes.html#locSource",
          "type": "function"
        },
        "index": {
          "hierarchy": "Scion Types Notes",
          "module": "Scion.Types.Notes",
          "name": "locSource",
          "normalized": "Location-\u003eLocSource",
          "package": "scion",
          "partial": "Source",
          "signature": "Location-\u003eLocSource",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scion/docs/Scion-Types-Notes.html#v:locSource"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Return the start column.  Only defined on valid locations.\n",
          "module": "Scion.Types.Notes",
          "name": "locStartCol",
          "package": "scion",
          "signature": "Location -\u003e Int",
          "source": "http://hackage.haskell.org/package/scion/docs/src/Scion-Types-Notes.html#locStartCol",
          "type": "function"
        },
        "index": {
          "description": "Return the start column Only defined on valid locations",
          "hierarchy": "Scion Types Notes",
          "module": "Scion.Types.Notes",
          "name": "locStartCol",
          "normalized": "Location-\u003eInt",
          "package": "scion",
          "partial": "Start Col",
          "signature": "Location-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scion/docs/Scion-Types-Notes.html#v:locStartCol"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Return the start line.  Only defined on valid locations.\n",
          "module": "Scion.Types.Notes",
          "name": "locStartLine",
          "package": "scion",
          "signature": "Location -\u003e Int",
          "source": "http://hackage.haskell.org/package/scion/docs/src/Scion-Types-Notes.html#locStartLine",
          "type": "function"
        },
        "index": {
          "description": "Return the start line Only defined on valid locations",
          "hierarchy": "Scion Types Notes",
          "module": "Scion.Types.Notes",
          "name": "locStartLine",
          "normalized": "Location-\u003eInt",
          "package": "scion",
          "partial": "Start Line",
          "signature": "Location-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scion/docs/Scion-Types-Notes.html#v:locStartLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "base directory (must be absolute)\nabsolute or relative \n",
          "module": "Scion.Types.Notes",
          "name": "mkAbsFilePath",
          "package": "scion",
          "signature": "FilePath-\u003e FilePath-\u003e AbsFilePath",
          "source": "http://hackage.haskell.org/package/scion/docs/src/Scion-Types-Notes.html#mkAbsFilePath",
          "type": "function"
        },
        "index": {
          "description": "base directory must be absolute absolute or relative",
          "hierarchy": "Scion Types Notes",
          "module": "Scion.Types.Notes",
          "name": "mkAbsFilePath",
          "normalized": "FilePath-\u003eFilePath-\u003eAbsFilePath",
          "package": "scion",
          "partial": "Abs File Path",
          "signature": "FilePath-\u003eFilePath-\u003eAbsFilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scion/docs/Scion-Types-Notes.html#v:mkAbsFilePath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "start line\nstart column\nend line\nend column\n",
          "module": "Scion.Types.Notes",
          "name": "mkLocation",
          "package": "scion",
          "signature": "LocSource-\u003e Int-\u003e Int-\u003e Int-\u003e Int-\u003e Location",
          "source": "http://hackage.haskell.org/package/scion/docs/src/Scion-Types-Notes.html#mkLocation",
          "type": "function"
        },
        "index": {
          "description": "start line start column end line end column",
          "hierarchy": "Scion Types Notes",
          "module": "Scion.Types.Notes",
          "name": "mkLocation",
          "normalized": "LocSource-\u003eInt-\u003eInt-\u003eInt-\u003eInt-\u003eLocation",
          "package": "scion",
          "partial": "Location",
          "signature": "LocSource-\u003eInt-\u003eInt-\u003eInt-\u003eInt-\u003eLocation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scion/docs/Scion-Types-Notes.html#v:mkLocation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Construct a source location that does not specify a region.  The\n argument can be used to give some hint as to why there is no location\n available.  (E.g., \"File not found\").\n",
          "module": "Scion.Types.Notes",
          "name": "mkNoLoc",
          "package": "scion",
          "signature": "String -\u003e Location",
          "source": "http://hackage.haskell.org/package/scion/docs/src/Scion-Types-Notes.html#mkNoLoc",
          "type": "function"
        },
        "index": {
          "description": "Construct source location that does not specify region The argument can be used to give some hint as to why there is no location available E.g File not found",
          "hierarchy": "Scion Types Notes",
          "module": "Scion.Types.Notes",
          "name": "mkNoLoc",
          "normalized": "String-\u003eLocation",
          "package": "scion",
          "partial": "No Loc",
          "signature": "String-\u003eLocation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scion/docs/Scion-Types-Notes.html#v:mkNoLoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scion.Types.Notes",
          "name": "noLocText",
          "package": "scion",
          "signature": "Location -\u003e String",
          "source": "http://hackage.haskell.org/package/scion/docs/src/Scion-Types-Notes.html#noLocText",
          "type": "function"
        },
        "index": {
          "hierarchy": "Scion Types Notes",
          "module": "Scion.Types.Notes",
          "name": "noLocText",
          "normalized": "Location-\u003eString",
          "package": "scion",
          "partial": "Loc Text",
          "signature": "Location-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scion/docs/Scion-Types-Notes.html#v:noLocText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "source, start line, start column, end line, end column.\n",
          "module": "Scion.Types.Notes",
          "name": "viewLoc",
          "package": "scion",
          "signature": "Location-\u003e (LocSource, Int, Int, Int, Int)",
          "source": "http://hackage.haskell.org/package/scion/docs/src/Scion-Types-Notes.html#viewLoc",
          "type": "function"
        },
        "index": {
          "description": "source start line start column end line end column",
          "hierarchy": "Scion Types Notes",
          "module": "Scion.Types.Notes",
          "name": "viewLoc",
          "normalized": "Location-\u003e(LocSource,Int,Int,Int,Int)",
          "package": "scion",
          "partial": "Loc",
          "signature": "Location-\u003e(LocSource,Int,Int,Int,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scion/docs/Scion-Types-Notes.html#v:viewLoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scion.Types",
          "name": "BgTcCache",
          "package": "scion",
          "source": "http://hackage.haskell.org/package/scion/docs/src/Scion-Types.html#BgTcCache",
          "type": "data"
        },
        "index": {
          "hierarchy": "Scion Types",
          "module": "Scion.Types",
          "name": "BgTcCache",
          "package": "scion",
          "partial": "Bg Tc Cache",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/scion/docs/Scion-Types.html#t:BgTcCache"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scion.Types",
          "name": "CabalConfiguration",
          "package": "scion",
          "source": "http://hackage.haskell.org/package/scion/docs/src/Scion-Types.html#CabalConfiguration",
          "type": "data"
        },
        "index": {
          "hierarchy": "Scion Types",
          "module": "Scion.Types",
          "name": "CabalConfiguration",
          "package": "scion",
          "partial": "Cabal Configuration",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/scion/docs/Scion-Types.html#t:CabalConfiguration"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scion.Types",
          "name": "CompilationResult",
          "package": "scion",
          "source": "http://hackage.haskell.org/package/scion/docs/src/Scion-Types.html#CompilationResult",
          "type": "data"
        },
        "index": {
          "hierarchy": "Scion Types",
          "module": "Scion.Types",
          "name": "CompilationResult",
          "package": "scion",
          "partial": "Compilation Result",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/scion/docs/Scion-Types.html#t:CompilationResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scion.Types",
          "name": "Component",
          "package": "scion",
          "source": "http://hackage.haskell.org/package/scion/docs/src/Scion-Types.html#Component",
          "type": "data"
        },
        "index": {
          "hierarchy": "Scion Types",
          "module": "Scion.Types",
          "name": "Component",
          "package": "scion",
          "partial": "Component",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/scion/docs/Scion-Types.html#t:Component"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scion.Types",
          "name": "DefSiteDB",
          "package": "scion",
          "source": "http://hackage.haskell.org/package/scion/docs/src/Scion-Types.html#DefSiteDB",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Scion Types",
          "module": "Scion.Types",
          "name": "DefSiteDB",
          "package": "scion",
          "partial": "Def Site DB",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/scion/docs/Scion-Types.html#t:DefSiteDB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scion.Types",
          "name": "FileComponentConfiguration",
          "package": "scion",
          "source": "http://hackage.haskell.org/package/scion/docs/src/Scion-Types.html#FileComponentConfiguration",
          "type": "type"
        },
        "index": {
          "hierarchy": "Scion Types",
          "module": "Scion.Types",
          "name": "FileComponentConfiguration",
          "package": "scion",
          "partial": "File Component Configuration",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/scion/docs/Scion-Types.html#t:FileComponentConfiguration"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scion.Types",
          "name": "ScionError",
          "package": "scion",
          "source": "http://hackage.haskell.org/package/scion/docs/src/Scion-Types.html#ScionError",
          "type": "data"
        },
        "index": {
          "hierarchy": "Scion Types",
          "module": "Scion.Types",
          "name": "ScionError",
          "package": "scion",
          "partial": "Scion Error",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/scion/docs/Scion-Types.html#t:ScionError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scion.Types",
          "name": "ScionM",
          "package": "scion",
          "source": "http://hackage.haskell.org/package/scion/docs/src/Scion-Types.html#ScionM",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Scion Types",
          "module": "Scion.Types",
          "name": "ScionM",
          "package": "scion",
          "partial": "Scion",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/scion/docs/Scion-Types.html#t:ScionM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scion.Types",
          "name": "ScionProjectConfig",
          "package": "scion",
          "source": "http://hackage.haskell.org/package/scion/docs/src/Scion-Types.html#ScionProjectConfig",
          "type": "data"
        },
        "index": {
          "hierarchy": "Scion Types",
          "module": "Scion.Types",
          "name": "ScionProjectConfig",
          "package": "scion",
          "partial": "Scion Project Config",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/scion/docs/Scion-Types.html#t:ScionProjectConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scion.Types",
          "name": "SessionState",
          "package": "scion",
          "source": "http://hackage.haskell.org/package/scion/docs/src/Scion-Types.html#SessionState",
          "type": "data"
        },
        "index": {
          "hierarchy": "Scion Types",
          "module": "Scion.Types",
          "name": "SessionState",
          "package": "scion",
          "partial": "Session State",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/scion/docs/Scion-Types.html#t:SessionState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scion.Types",
          "name": "SomeScionException",
          "package": "scion",
          "source": "http://hackage.haskell.org/package/scion/docs/src/Scion-Types.html#SomeScionException",
          "type": "data"
        },
        "index": {
          "hierarchy": "Scion Types",
          "module": "Scion.Types",
          "name": "SomeScionException",
          "package": "scion",
          "partial": "Some Scion Exception",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/scion/docs/Scion-Types.html#t:SomeScionException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scion.Types",
          "name": "Verbosity",
          "package": "scion",
          "source": "http://hackage.haskell.org/package/scion/docs/src/Scion-Types.html#Verbosity",
          "type": "data"
        },
        "index": {
          "hierarchy": "Scion Types",
          "module": "Scion.Types",
          "name": "Verbosity",
          "package": "scion",
          "partial": "Verbosity",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/scion/docs/Scion-Types.html#t:Verbosity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Shorthand for \u003ctt\u003e\u003ca\u003eundefined\u003c/a\u003e\u003c/tt\u003e.\n",
          "module": "Scion.Types",
          "name": "__",
          "package": "scion",
          "signature": "a",
          "source": "http://hackage.haskell.org/package/scion/docs/src/Scion-Types.html#__",
          "type": "function"
        },
        "index": {
          "description": "Shorthand for undefined",
          "hierarchy": "Scion Types",
          "module": "Scion.Types",
          "name": "__",
          "package": "scion",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scion/docs/Scion-Types.html#v:__"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scion.Types",
          "name": "deafening",
          "package": "scion",
          "signature": "Verbosity",
          "source": "http://hackage.haskell.org/package/scion/docs/src/Scion-Types.html#deafening",
          "type": "function"
        },
        "index": {
          "hierarchy": "Scion Types",
          "module": "Scion.Types",
          "name": "deafening",
          "package": "scion",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scion/docs/Scion-Types.html#v:deafening"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Return the list of defined names (the domain) of the \u003ctt\u003e\u003ca\u003eDefSiteDB\u003c/a\u003e\u003c/tt\u003e.\n The result is, in fact, ordered.\n",
          "module": "Scion.Types",
          "name": "definedNames",
          "package": "scion",
          "signature": "DefSiteDB -\u003e [String]",
          "source": "http://hackage.haskell.org/package/scion/docs/src/Scion-Types.html#definedNames",
          "type": "function"
        },
        "index": {
          "description": "Return the list of defined names the domain of the DefSiteDB The result is in fact ordered",
          "hierarchy": "Scion Types",
          "module": "Scion.Types",
          "name": "definedNames",
          "normalized": "DefSiteDB-\u003e[String]",
          "package": "scion",
          "partial": "Names",
          "signature": "DefSiteDB-\u003e[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scion/docs/Scion-Types.html#v:definedNames"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "A fatal error.  Like \u003ctt\u003e\u003ca\u003eerror\u003c/a\u003e\u003c/tt\u003e but suggests submitting a bug report.\n",
          "module": "Scion.Types",
          "name": "dieHard",
          "package": "scion",
          "signature": "String -\u003e a",
          "source": "http://hackage.haskell.org/package/scion/docs/src/Scion-Types.html#dieHard",
          "type": "function"
        },
        "index": {
          "description": "fatal error Like error but suggests submitting bug report",
          "hierarchy": "Scion Types",
          "module": "Scion.Types",
          "name": "dieHard",
          "normalized": "String-\u003ea",
          "package": "scion",
          "partial": "Hard",
          "signature": "String-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scion/docs/Scion-Types.html#v:dieHard"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "The empty \u003ctt\u003e\u003ca\u003eDefSiteDB\u003c/a\u003e\u003c/tt\u003e.\n",
          "module": "Scion.Types",
          "name": "emptyDefSiteDB",
          "package": "scion",
          "signature": "DefSiteDB",
          "source": "http://hackage.haskell.org/package/scion/docs/src/Scion-Types.html#emptyDefSiteDB",
          "type": "function"
        },
        "index": {
          "description": "The empty DefSiteDB",
          "hierarchy": "Scion Types",
          "module": "Scion.Types",
          "name": "emptyDefSiteDB",
          "package": "scion",
          "partial": "Def Site DB",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scion/docs/Scion-Types.html#v:emptyDefSiteDB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scion.Types",
          "name": "emptyScionProjectConfig",
          "package": "scion",
          "signature": "ScionProjectConfig",
          "source": "http://hackage.haskell.org/package/scion/docs/src/Scion-Types.html#emptyScionProjectConfig",
          "type": "function"
        },
        "index": {
          "hierarchy": "Scion Types",
          "module": "Scion.Types",
          "name": "emptyScionProjectConfig",
          "package": "scion",
          "partial": "Scion Project Config",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scion/docs/Scion-Types.html#v:emptyScionProjectConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scion.Types",
          "name": "getSessionState",
          "package": "scion",
          "signature": "ScionM SessionState",
          "source": "http://hackage.haskell.org/package/scion/docs/src/Scion-Types.html#getSessionState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Scion Types",
          "module": "Scion.Types",
          "name": "getSessionState",
          "package": "scion",
          "partial": "Session State",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scion/docs/Scion-Types.html#v:getSessionState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scion.Types",
          "name": "getVerbosity",
          "package": "scion",
          "signature": "ScionM Verbosity",
          "source": "http://hackage.haskell.org/package/scion/docs/src/Scion-Types.html#getVerbosity",
          "type": "function"
        },
        "index": {
          "hierarchy": "Scion Types",
          "module": "Scion.Types",
          "name": "getVerbosity",
          "package": "scion",
          "partial": "Verbosity",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scion/docs/Scion-Types.html#v:getVerbosity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scion.Types",
          "name": "gets",
          "package": "scion",
          "signature": "(SessionState -\u003e a) -\u003e ScionM a",
          "source": "http://hackage.haskell.org/package/scion/docs/src/Scion-Types.html#gets",
          "type": "function"
        },
        "index": {
          "hierarchy": "Scion Types",
          "module": "Scion.Types",
          "name": "gets",
          "normalized": "(SessionState-\u003ea)-\u003eScionM a",
          "package": "scion",
          "signature": "(SessionState-\u003ea)-\u003eScionM a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scion/docs/Scion-Types.html#v:gets"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scion.Types",
          "name": "intToVerbosity",
          "package": "scion",
          "signature": "Int -\u003e Verbosity",
          "source": "http://hackage.haskell.org/package/scion/docs/src/Scion-Types.html#intToVerbosity",
          "type": "function"
        },
        "index": {
          "hierarchy": "Scion Types",
          "module": "Scion.Types",
          "name": "intToVerbosity",
          "normalized": "Int-\u003eVerbosity",
          "package": "scion",
          "partial": "To Verbosity",
          "signature": "Int-\u003eVerbosity",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scion/docs/Scion-Types.html#v:intToVerbosity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scion.Types",
          "name": "liftScionM",
          "package": "scion",
          "signature": "Ghc a -\u003e ScionM a",
          "source": "http://hackage.haskell.org/package/scion/docs/src/Scion-Types.html#liftScionM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Scion Types",
          "module": "Scion.Types",
          "name": "liftScionM",
          "normalized": "Ghc a-\u003eScionM a",
          "package": "scion",
          "partial": "Scion",
          "signature": "Ghc a-\u003eScionM a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scion/docs/Scion-Types.html#v:liftScionM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Returns all the entities that the given name may refer to.\n",
          "module": "Scion.Types",
          "name": "lookupDefSite",
          "package": "scion",
          "signature": "DefSiteDB -\u003e String -\u003e [(Location, TyThing)]",
          "source": "http://hackage.haskell.org/package/scion/docs/src/Scion-Types.html#lookupDefSite",
          "type": "function"
        },
        "index": {
          "description": "Returns all the entities that the given name may refer to",
          "hierarchy": "Scion Types",
          "module": "Scion.Types",
          "name": "lookupDefSite",
          "normalized": "DefSiteDB-\u003eString-\u003e[(Location,TyThing)]",
          "package": "scion",
          "partial": "Def Site",
          "signature": "DefSiteDB-\u003eString-\u003e[(Location,TyThing)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scion/docs/Scion-Types.html#v:lookupDefSite"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scion.Types",
          "name": "message",
          "package": "scion",
          "signature": "Verbosity -\u003e String -\u003e ScionM ()",
          "source": "http://hackage.haskell.org/package/scion/docs/src/Scion-Types.html#message",
          "type": "function"
        },
        "index": {
          "hierarchy": "Scion Types",
          "module": "Scion.Types",
          "name": "message",
          "normalized": "Verbosity-\u003eString-\u003eScionM()",
          "package": "scion",
          "signature": "Verbosity-\u003eString-\u003eScionM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scion/docs/Scion-Types.html#v:message"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scion.Types",
          "name": "mkSessionState",
          "package": "scion",
          "signature": "DynFlags -\u003e IO (IORef SessionState)",
          "source": "http://hackage.haskell.org/package/scion/docs/src/Scion-Types.html#mkSessionState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Scion Types",
          "module": "Scion.Types",
          "name": "mkSessionState",
          "normalized": "DynFlags-\u003eIO(IORef SessionState)",
          "package": "scion",
          "partial": "Session State",
          "signature": "DynFlags-\u003eIO(IORef SessionState)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scion/docs/Scion-Types.html#v:mkSessionState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scion.Types",
          "name": "modifySessionState",
          "package": "scion",
          "signature": "(SessionState -\u003e SessionState) -\u003e ScionM ()",
          "source": "http://hackage.haskell.org/package/scion/docs/src/Scion-Types.html#modifySessionState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Scion Types",
          "module": "Scion.Types",
          "name": "modifySessionState",
          "normalized": "(SessionState-\u003eSessionState)-\u003eScionM()",
          "package": "scion",
          "partial": "Session State",
          "signature": "(SessionState-\u003eSessionState)-\u003eScionM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scion/docs/Scion-Types.html#v:modifySessionState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scion.Types",
          "name": "normal",
          "package": "scion",
          "signature": "Verbosity",
          "source": "http://hackage.haskell.org/package/scion/docs/src/Scion-Types.html#normal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Scion Types",
          "module": "Scion.Types",
          "name": "normal",
          "package": "scion",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scion/docs/Scion-Types.html#v:normal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Reflect a computation in the \u003ctt\u003e\u003ca\u003eScionM\u003c/a\u003e\u003c/tt\u003e monad into the \u003ctt\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/tt\u003e monad.\n",
          "module": "Scion.Types",
          "name": "reflectScionM",
          "package": "scion",
          "signature": "ScionM a -\u003e (IORef SessionState, Session) -\u003e IO a",
          "source": "http://hackage.haskell.org/package/scion/docs/src/Scion-Types.html#reflectScionM",
          "type": "function"
        },
        "index": {
          "description": "Reflect computation in the ScionM monad into the IO monad",
          "hierarchy": "Scion Types",
          "module": "Scion.Types",
          "name": "reflectScionM",
          "normalized": "ScionM a-\u003e(IORef SessionState,Session)-\u003eIO a",
          "package": "scion",
          "partial": "Scion",
          "signature": "ScionM a-\u003e(IORef SessionState,Session)-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scion/docs/Scion-Types.html#v:reflectScionM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Dual to \u003ctt\u003e\u003ca\u003ereflectScionM\u003c/a\u003e\u003c/tt\u003e.  See its documentation.\n",
          "module": "Scion.Types",
          "name": "reifyScionM",
          "package": "scion",
          "signature": "((IORef SessionState, Session) -\u003e IO a) -\u003e ScionM a",
          "source": "http://hackage.haskell.org/package/scion/docs/src/Scion-Types.html#reifyScionM",
          "type": "function"
        },
        "index": {
          "description": "Dual to reflectScionM See its documentation",
          "hierarchy": "Scion Types",
          "module": "Scion.Types",
          "name": "reifyScionM",
          "normalized": "((IORef SessionState,Session)-\u003eIO a)-\u003eScionM a",
          "package": "scion",
          "partial": "Scion",
          "signature": "((IORef SessionState,Session)-\u003eIO a)-\u003eScionM a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scion/docs/Scion-Types.html#v:reifyScionM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scion.Types",
          "name": "scionError",
          "package": "scion",
          "signature": "String -\u003e ScionM a",
          "source": "http://hackage.haskell.org/package/scion/docs/src/Scion-Types.html#scionError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Scion Types",
          "module": "Scion.Types",
          "name": "scionError",
          "normalized": "String-\u003eScionM a",
          "package": "scion",
          "partial": "Error",
          "signature": "String-\u003eScionM a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scion/docs/Scion-Types.html#v:scionError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scion.Types",
          "name": "scionFromException",
          "package": "scion",
          "signature": "SomeException -\u003e Maybe e",
          "source": "http://hackage.haskell.org/package/scion/docs/src/Scion-Types.html#scionFromException",
          "type": "function"
        },
        "index": {
          "hierarchy": "Scion Types",
          "module": "Scion.Types",
          "name": "scionFromException",
          "normalized": "SomeException-\u003eMaybe a",
          "package": "scion",
          "partial": "From Exception",
          "signature": "SomeException-\u003eMaybe e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scion/docs/Scion-Types.html#v:scionFromException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scion.Types",
          "name": "scionToException",
          "package": "scion",
          "signature": "e -\u003e SomeException",
          "source": "http://hackage.haskell.org/package/scion/docs/src/Scion-Types.html#scionToException",
          "type": "function"
        },
        "index": {
          "hierarchy": "Scion Types",
          "module": "Scion.Types",
          "name": "scionToException",
          "normalized": "a-\u003eSomeException",
          "package": "scion",
          "partial": "To Exception",
          "signature": "e-\u003eSomeException",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scion/docs/Scion-Types.html#v:scionToException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scion.Types",
          "name": "setSessionState",
          "package": "scion",
          "signature": "SessionState -\u003e ScionM ()",
          "source": "http://hackage.haskell.org/package/scion/docs/src/Scion-Types.html#setSessionState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Scion Types",
          "module": "Scion.Types",
          "name": "setSessionState",
          "normalized": "SessionState-\u003eScionM()",
          "package": "scion",
          "partial": "Session State",
          "signature": "SessionState-\u003eScionM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scion/docs/Scion-Types.html#v:setSessionState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scion.Types",
          "name": "setVerbosity",
          "package": "scion",
          "signature": "Verbosity -\u003e ScionM ()",
          "source": "http://hackage.haskell.org/package/scion/docs/src/Scion-Types.html#setVerbosity",
          "type": "function"
        },
        "index": {
          "hierarchy": "Scion Types",
          "module": "Scion.Types",
          "name": "setVerbosity",
          "normalized": "Verbosity-\u003eScionM()",
          "package": "scion",
          "partial": "Verbosity",
          "signature": "Verbosity-\u003eScionM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scion/docs/Scion-Types.html#v:setVerbosity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scion.Types",
          "name": "silent",
          "package": "scion",
          "signature": "Verbosity",
          "source": "http://hackage.haskell.org/package/scion/docs/src/Scion-Types.html#silent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Scion Types",
          "module": "Scion.Types",
          "name": "silent",
          "package": "scion",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scion/docs/Scion-Types.html#v:silent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Combine two \u003ctt\u003e\u003ca\u003eDefSiteDB\u003c/a\u003e\u003c/tt\u003es.   XXX: check for duplicates?\n",
          "module": "Scion.Types",
          "name": "unionDefSiteDB",
          "package": "scion",
          "signature": "DefSiteDB -\u003e DefSiteDB -\u003e DefSiteDB",
          "source": "http://hackage.haskell.org/package/scion/docs/src/Scion-Types.html#unionDefSiteDB",
          "type": "function"
        },
        "index": {
          "description": "Combine two DefSiteDB XXX check for duplicates",
          "hierarchy": "Scion Types",
          "module": "Scion.Types",
          "name": "unionDefSiteDB",
          "normalized": "DefSiteDB-\u003eDefSiteDB-\u003eDefSiteDB",
          "package": "scion",
          "partial": "Def Site DB",
          "signature": "DefSiteDB-\u003eDefSiteDB-\u003eDefSiteDB",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scion/docs/Scion-Types.html#v:unionDefSiteDB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scion.Types",
          "name": "verbose",
          "package": "scion",
          "signature": "Verbosity",
          "source": "http://hackage.haskell.org/package/scion/docs/src/Scion-Types.html#verbose",
          "type": "function"
        },
        "index": {
          "hierarchy": "Scion Types",
          "module": "Scion.Types",
          "name": "verbose",
          "package": "scion",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scion/docs/Scion-Types.html#v:verbose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scion.Types",
          "name": "verbosityToInt",
          "package": "scion",
          "signature": "Verbosity -\u003e Int",
          "source": "http://hackage.haskell.org/package/scion/docs/src/Scion-Types.html#verbosityToInt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Scion Types",
          "module": "Scion.Types",
          "name": "verbosityToInt",
          "normalized": "Verbosity-\u003eInt",
          "package": "scion",
          "partial": "To Int",
          "signature": "Verbosity-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scion/docs/Scion-Types.html#v:verbosityToInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scion.Utils",
          "name": "ScionDefaultCabalConfig",
          "package": "scion",
          "source": "http://hackage.haskell.org/package/scion/docs/src/Scion-Utils.html#ScionDefaultCabalConfig",
          "type": "data"
        },
        "index": {
          "hierarchy": "Scion Utils",
          "module": "Scion.Utils",
          "name": "ScionDefaultCabalConfig",
          "package": "scion",
          "partial": "Scion Default Cabal Config",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/scion/docs/Scion-Utils.html#t:ScionDefaultCabalConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scion.Utils",
          "name": "camelCaseMatch",
          "package": "scion",
          "signature": "String -\u003e String -\u003e Bool",
          "source": "http://hackage.haskell.org/package/scion/docs/src/Scion-Utils.html#camelCaseMatch",
          "type": "function"
        },
        "index": {
          "hierarchy": "Scion Utils",
          "module": "Scion.Utils",
          "name": "camelCaseMatch",
          "normalized": "String-\u003eString-\u003eBool",
          "package": "scion",
          "partial": "Case Match",
          "signature": "String-\u003eString-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scion/docs/Scion-Utils.html#v:camelCaseMatch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scion.Utils",
          "name": "expectJust",
          "package": "scion",
          "signature": "String -\u003e Maybe a -\u003e a",
          "source": "http://hackage.haskell.org/package/scion/docs/src/Scion-Utils.html#expectJust",
          "type": "function"
        },
        "index": {
          "hierarchy": "Scion Utils",
          "module": "Scion.Utils",
          "name": "expectJust",
          "normalized": "String-\u003eMaybe a-\u003ea",
          "package": "scion",
          "partial": "Just",
          "signature": "String-\u003eMaybe a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scion/docs/Scion-Utils.html#v:expectJust"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scion.Utils",
          "name": "foldModSummaries",
          "package": "scion",
          "signature": "(a -\u003e ModSummary -\u003e m a) -\u003e a -\u003e m a",
          "source": "http://hackage.haskell.org/package/scion/docs/src/Scion-Utils.html#foldModSummaries",
          "type": "function"
        },
        "index": {
          "hierarchy": "Scion Utils",
          "module": "Scion.Utils",
          "name": "foldModSummaries",
          "normalized": "(a-\u003eModSummary-\u003eb a)-\u003ea-\u003eb a",
          "package": "scion",
          "partial": "Mod Summaries",
          "signature": "(a-\u003eModSummary-\u003em a)-\u003ea-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scion/docs/Scion-Utils.html#v:foldModSummaries"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scion.Utils",
          "name": "ifM",
          "package": "scion",
          "signature": "m Bool -\u003e m a -\u003e m a -\u003e m a",
          "source": "http://hackage.haskell.org/package/scion/docs/src/Scion-Utils.html#ifM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Scion Utils",
          "module": "Scion.Utils",
          "name": "ifM",
          "normalized": "a Bool-\u003ea b-\u003ea b-\u003ea b",
          "package": "scion",
          "signature": "m Bool-\u003em a-\u003em a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scion/docs/Scion-Utils.html#v:ifM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scion.Utils",
          "name": "lookupKey",
          "package": "scion",
          "signature": "JSObject JSValue -\u003e String -\u003e Result a",
          "source": "http://hackage.haskell.org/package/scion/docs/src/Scion-Utils.html#lookupKey",
          "type": "function"
        },
        "index": {
          "hierarchy": "Scion Utils",
          "module": "Scion.Utils",
          "name": "lookupKey",
          "normalized": "JSObject JSValue-\u003eString-\u003eResult a",
          "package": "scion",
          "partial": "Key",
          "signature": "JSObject JSValue-\u003eString-\u003eResult a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scion/docs/Scion-Utils.html#v:lookupKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scion.Utils",
          "name": "makeObject",
          "package": "scion",
          "signature": "[(String, JSValue)] -\u003e JSValue",
          "source": "http://hackage.haskell.org/package/scion/docs/src/Scion-Utils.html#makeObject",
          "type": "function"
        },
        "index": {
          "hierarchy": "Scion Utils",
          "module": "Scion.Utils",
          "name": "makeObject",
          "normalized": "[(String,JSValue)]-\u003eJSValue",
          "package": "scion",
          "partial": "Object",
          "signature": "[(String,JSValue)]-\u003eJSValue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scion/docs/Scion-Utils.html#v:makeObject"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scion.Utils",
          "name": "modulesInDepOrder",
          "package": "scion",
          "signature": "m [ModSummary]",
          "source": "http://hackage.haskell.org/package/scion/docs/src/Scion-Utils.html#modulesInDepOrder",
          "type": "function"
        },
        "index": {
          "hierarchy": "Scion Utils",
          "module": "Scion.Utils",
          "name": "modulesInDepOrder",
          "normalized": "a[ModSummary]",
          "package": "scion",
          "partial": "In Dep Order",
          "signature": "m[ModSummary]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scion/docs/Scion-Utils.html#v:modulesInDepOrder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scion.Utils",
          "name": "parseScionProjectConfig",
          "package": "scion",
          "signature": "FilePath -\u003e ScionM ScionProjectConfig",
          "source": "http://hackage.haskell.org/package/scion/docs/src/Scion-Utils.html#parseScionProjectConfig",
          "type": "function"
        },
        "index": {
          "hierarchy": "Scion Utils",
          "module": "Scion.Utils",
          "name": "parseScionProjectConfig",
          "normalized": "FilePath-\u003eScionM ScionProjectConfig",
          "package": "scion",
          "partial": "Scion Project Config",
          "signature": "FilePath-\u003eScionM ScionProjectConfig",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scion/docs/Scion-Utils.html#v:parseScionProjectConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scion.Utils",
          "name": "projectConfigFileFromDir",
          "package": "scion",
          "signature": "FilePath -\u003e FilePath",
          "source": "http://hackage.haskell.org/package/scion/docs/src/Scion-Utils.html#projectConfigFileFromDir",
          "type": "function"
        },
        "index": {
          "hierarchy": "Scion Utils",
          "module": "Scion.Utils",
          "name": "projectConfigFileFromDir",
          "normalized": "FilePath-\u003eFilePath",
          "package": "scion",
          "partial": "Config File From Dir",
          "signature": "FilePath-\u003eFilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scion/docs/Scion-Utils.html#v:projectConfigFileFromDir"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scion.Utils",
          "name": "projectConfigFromDir",
          "package": "scion",
          "signature": "FilePath -\u003e ScionM ScionProjectConfig",
          "source": "http://hackage.haskell.org/package/scion/docs/src/Scion-Utils.html#projectConfigFromDir",
          "type": "function"
        },
        "index": {
          "hierarchy": "Scion Utils",
          "module": "Scion.Utils",
          "name": "projectConfigFromDir",
          "normalized": "FilePath-\u003eScionM ScionProjectConfig",
          "package": "scion",
          "partial": "Config From Dir",
          "signature": "FilePath-\u003eScionM ScionProjectConfig",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scion/docs/Scion-Utils.html#v:projectConfigFromDir"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scion.Utils",
          "name": "readFileComponentConfig",
          "package": "scion",
          "signature": "JSValue -\u003e Result (String, [String])",
          "source": "http://hackage.haskell.org/package/scion/docs/src/Scion-Utils.html#readFileComponentConfig",
          "type": "function"
        },
        "index": {
          "hierarchy": "Scion Utils",
          "module": "Scion.Utils",
          "name": "readFileComponentConfig",
          "normalized": "JSValue-\u003eResult(String,[String])",
          "package": "scion",
          "partial": "File Component Config",
          "signature": "JSValue-\u003eResult(String,[String])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scion/docs/Scion-Utils.html#v:readFileComponentConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scion.Utils",
          "name": "second",
          "package": "scion",
          "signature": "(a -\u003e b) -\u003e (c, a) -\u003e (c, b)",
          "source": "http://hackage.haskell.org/package/scion/docs/src/Scion-Utils.html#second",
          "type": "function"
        },
        "index": {
          "hierarchy": "Scion Utils",
          "module": "Scion.Utils",
          "name": "second",
          "normalized": "(a-\u003eb)-\u003e(c,a)-\u003e(c,b)",
          "package": "scion",
          "signature": "(a-\u003eb)-\u003e(c,a)-\u003e(c,b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scion/docs/Scion-Utils.html#v:second"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scion.Utils",
          "name": "thingsAroundPoint",
          "package": "scion",
          "signature": "(Int, Int) -\u003e [Located n] -\u003e [Located n]",
          "source": "http://hackage.haskell.org/package/scion/docs/src/Scion-Utils.html#thingsAroundPoint",
          "type": "function"
        },
        "index": {
          "hierarchy": "Scion Utils",
          "module": "Scion.Utils",
          "name": "thingsAroundPoint",
          "normalized": "(Int,Int)-\u003e[Located a]-\u003e[Located a]",
          "package": "scion",
          "partial": "Around Point",
          "signature": "(Int,Int)-\u003e[Located n]-\u003e[Located n]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scion/docs/Scion-Utils.html#v:thingsAroundPoint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scion.Utils",
          "name": "unqualifiedForModule",
          "package": "scion",
          "signature": "m -\u003e ScionM PrintUnqualified",
          "source": "http://hackage.haskell.org/package/scion/docs/src/Scion-Utils.html#unqualifiedForModule",
          "type": "function"
        },
        "index": {
          "hierarchy": "Scion Utils",
          "module": "Scion.Utils",
          "name": "unqualifiedForModule",
          "normalized": "a-\u003eScionM PrintUnqualified",
          "package": "scion",
          "partial": "For Module",
          "signature": "m-\u003eScionM PrintUnqualified",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scion/docs/Scion-Utils.html#v:unqualifiedForModule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scion.Utils",
          "name": "writeSampleConfig",
          "package": "scion",
          "signature": "FilePath -\u003e IO ()",
          "source": "http://hackage.haskell.org/package/scion/docs/src/Scion-Utils.html#writeSampleConfig",
          "type": "function"
        },
        "index": {
          "hierarchy": "Scion Utils",
          "module": "Scion.Utils",
          "name": "writeSampleConfig",
          "normalized": "FilePath-\u003eIO()",
          "package": "scion",
          "partial": "Sample Config",
          "signature": "FilePath-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scion/docs/Scion-Utils.html#v:writeSampleConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scion",
          "name": "ScionM",
          "package": "scion",
          "source": "http://hackage.haskell.org/package/scion/docs/src/Scion-Types.html#ScionM",
          "type": "data"
        },
        "index": {
          "hierarchy": "Scion",
          "module": "Scion",
          "name": "ScionM",
          "package": "scion",
          "partial": "Scion",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/scion/docs/Scion.html#t:ScionM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Run the \u003ctt\u003e\u003ca\u003eScionM\u003c/a\u003e\u003c/tt\u003e monad.\n",
          "module": "Scion",
          "name": "runScion",
          "package": "scion",
          "signature": "ScionM a -\u003e IO a",
          "source": "http://hackage.haskell.org/package/scion/docs/src/Scion.html#runScion",
          "type": "function"
        },
        "index": {
          "description": "Run the ScionM monad",
          "hierarchy": "Scion",
          "module": "Scion",
          "name": "runScion",
          "normalized": "ScionM a-\u003eIO a",
          "package": "scion",
          "partial": "Scion",
          "signature": "ScionM a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scion/docs/Scion.html#v:runScion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun the session with the given static flags.\n\u003c/p\u003e\u003cp\u003eStatic flags cannot be changed during a session and can only be set once\n per \u003cem\u003eprocess\u003c/em\u003e.  That is, any session running in the same process\n (i.e. program) must not attempt to set the static flags again.\n\u003c/p\u003e\u003cp\u003eWhich flags are static flags depends on the version of GHC.\n\u003c/p\u003e",
          "module": "Scion",
          "name": "runScion'",
          "package": "scion",
          "signature": "[String] -\u003e ScionM a -\u003e IO a",
          "source": "http://hackage.haskell.org/package/scion/docs/src/Scion.html#runScion%27",
          "type": "function"
        },
        "index": {
          "description": "Run the session with the given static flags Static flags cannot be changed during session and can only be set once per process That is any session running in the same process i.e program must not attempt to set the static flags again Which flags are static flags depends on the version of GHC",
          "hierarchy": "Scion",
          "module": "Scion",
          "name": "runScion'",
          "normalized": "[String]-\u003eScionM a-\u003eIO a",
          "package": "scion",
          "partial": "Scion'",
          "signature": "[String]-\u003eScionM a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scion/docs/Scion.html#v:runScion'"
      }
    }
  ]
]