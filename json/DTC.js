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
        "word": "DTC"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eClass definition from a data declaration.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Language.Haskell.DTC.Class",
          "name": "Class",
          "package": "DTC",
          "source": "src/Language-Haskell-DTC-Class.html",
          "type": "module"
        },
        "index": {
          "description": "Class definition from data declaration",
          "hierarchy": "Language Haskell DTC Class",
          "module": "Language.Haskell.DTC.Class",
          "name": "Class",
          "package": "DTC",
          "partial": "Class",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/DTC/docs/Language-Haskell-DTC-Class.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTransform a data declaration to a class definition.\n Equivalent to \u003ccode\u003edataToClassWith \"t\"\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Language.Haskell.DTC.Class",
          "name": "dataToClass",
          "package": "DTC",
          "signature": "Decl -\u003e Decl",
          "source": "src/Language-Haskell-DTC-Class.html#dataToClass",
          "type": "function"
        },
        "index": {
          "description": "Transform data declaration to class definition Equivalent to dataToClassWith",
          "hierarchy": "Language Haskell DTC Class",
          "module": "Language.Haskell.DTC.Class",
          "name": "dataToClass",
          "normalized": "Decl-\u003eDecl",
          "package": "DTC",
          "partial": "To Class",
          "signature": "Decl-\u003eDecl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DTC/docs/Language-Haskell-DTC-Class.html#v:dataToClass"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTransform a data declaration to a class definition.\n The \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e argument will be the name of the type variable of the class definition.\n\u003c/p\u003e",
          "module": "Language.Haskell.DTC.Class",
          "name": "dataToClassWith",
          "package": "DTC",
          "signature": "String -\u003e Decl -\u003e Decl",
          "source": "src/Language-Haskell-DTC-Class.html#dataToClassWith",
          "type": "function"
        },
        "index": {
          "description": "Transform data declaration to class definition The String argument will be the name of the type variable of the class definition",
          "hierarchy": "Language Haskell DTC Class",
          "module": "Language.Haskell.DTC.Class",
          "name": "dataToClassWith",
          "normalized": "String-\u003eDecl-\u003eDecl",
          "package": "DTC",
          "partial": "To Class With",
          "signature": "String-\u003eDecl-\u003eDecl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DTC/docs/Language-Haskell-DTC-Class.html#v:dataToClassWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.DTC.DataInfo",
          "name": "DataInfo",
          "package": "DTC",
          "source": "src/Language-Haskell-DTC-DataInfo.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Language Haskell DTC DataInfo",
          "module": "Language.Haskell.DTC.DataInfo",
          "name": "DataInfo",
          "package": "DTC",
          "partial": "Data Info",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/DTC/docs/Language-Haskell-DTC-DataInfo.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInformation about names in a data declaration.\n\u003c/p\u003e",
          "module": "Language.Haskell.DTC.DataInfo",
          "name": "DataInfo",
          "package": "DTC",
          "source": "src/Language-Haskell-DTC-DataInfo.html#DataInfo",
          "type": "data"
        },
        "index": {
          "description": "Information about names in data declaration",
          "hierarchy": "Language Haskell DTC DataInfo",
          "module": "Language.Haskell.DTC.DataInfo",
          "name": "DataInfo",
          "package": "DTC",
          "partial": "Data Info",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/DTC/docs/Language-Haskell-DTC-DataInfo.html#t:DataInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.DTC.DataInfo",
          "name": "DataInfo",
          "package": "DTC",
          "signature": "DataInfo",
          "source": "src/Language-Haskell-DTC-DataInfo.html#DataInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell DTC DataInfo",
          "module": "Language.Haskell.DTC.DataInfo",
          "name": "DataInfo",
          "package": "DTC",
          "partial": "Data Info",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DTC/docs/Language-Haskell-DTC-DataInfo.html#v:DataInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOrdinary constructor names, and their number of arguments.\n\u003c/p\u003e",
          "module": "Language.Haskell.DTC.DataInfo",
          "name": "consList",
          "package": "DTC",
          "signature": "[(Name, Int)]",
          "source": "src/Language-Haskell-DTC-DataInfo.html#DataInfo",
          "type": "function"
        },
        "index": {
          "description": "Ordinary constructor names and their number of arguments",
          "hierarchy": "Language Haskell DTC DataInfo",
          "module": "Language.Haskell.DTC.DataInfo",
          "name": "consList",
          "normalized": "[(Name,Int)]",
          "package": "DTC",
          "partial": "List",
          "signature": "[(Name,Int)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DTC/docs/Language-Haskell-DTC-DataInfo.html#v:consList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract a \u003ccode\u003e\u003ca\u003eDataInfo\u003c/a\u003e\u003c/code\u003e from a declaration. Returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the argument is not a data declaration.\n\u003c/p\u003e",
          "module": "Language.Haskell.DTC.DataInfo",
          "name": "dataInfo",
          "package": "DTC",
          "signature": "Decl -\u003e Maybe DataInfo",
          "source": "src/Language-Haskell-DTC-DataInfo.html#dataInfo",
          "type": "function"
        },
        "index": {
          "description": "Extract DataInfo from declaration Returns Nothing if the argument is not data declaration",
          "hierarchy": "Language Haskell DTC DataInfo",
          "module": "Language.Haskell.DTC.DataInfo",
          "name": "dataInfo",
          "normalized": "Decl-\u003eMaybe DataInfo",
          "package": "DTC",
          "partial": "Info",
          "signature": "Decl-\u003eMaybe DataInfo",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DTC/docs/Language-Haskell-DTC-DataInfo.html#v:dataInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe data type name.\n\u003c/p\u003e",
          "module": "Language.Haskell.DTC.DataInfo",
          "name": "dataName",
          "package": "DTC",
          "signature": "Name",
          "source": "src/Language-Haskell-DTC-DataInfo.html#DataInfo",
          "type": "function"
        },
        "index": {
          "description": "The data type name",
          "hierarchy": "Language Haskell DTC DataInfo",
          "module": "Language.Haskell.DTC.DataInfo",
          "name": "dataName",
          "package": "DTC",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DTC/docs/Language-Haskell-DTC-DataInfo.html#v:dataName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract \u003ccode\u003e\u003ca\u003eDataInfo\u003c/a\u003e\u003c/code\u003e from all data declarations in a module.\n\u003c/p\u003e",
          "module": "Language.Haskell.DTC.DataInfo",
          "name": "moduleDataInfo",
          "package": "DTC",
          "signature": "Module -\u003e [DataInfo]",
          "source": "src/Language-Haskell-DTC-DataInfo.html#moduleDataInfo",
          "type": "function"
        },
        "index": {
          "description": "Extract DataInfo from all data declarations in module",
          "hierarchy": "Language Haskell DTC DataInfo",
          "module": "Language.Haskell.DTC.DataInfo",
          "name": "moduleDataInfo",
          "normalized": "Module-\u003e[DataInfo]",
          "package": "DTC",
          "partial": "Data Info",
          "signature": "Module-\u003e[DataInfo]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DTC/docs/Language-Haskell-DTC-DataInfo.html#v:moduleDataInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRecord constructor names and their field names.\n\u003c/p\u003e",
          "module": "Language.Haskell.DTC.DataInfo",
          "name": "rconsList",
          "package": "DTC",
          "signature": "[(Name, [Name])]",
          "source": "src/Language-Haskell-DTC-DataInfo.html#DataInfo",
          "type": "function"
        },
        "index": {
          "description": "Record constructor names and their field names",
          "hierarchy": "Language Haskell DTC DataInfo",
          "module": "Language.Haskell.DTC.DataInfo",
          "name": "rconsList",
          "normalized": "[(Name,[Name])]",
          "package": "DTC",
          "partial": "List",
          "signature": "[(Name,[Name])]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DTC/docs/Language-Haskell-DTC-DataInfo.html#v:rconsList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSome useful functions.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Language.Haskell.DTC.Mod",
          "name": "Mod",
          "package": "DTC",
          "source": "src/Language-Haskell-DTC-Mod.html",
          "type": "module"
        },
        "index": {
          "description": "Some useful functions",
          "hierarchy": "Language Haskell DTC Mod",
          "module": "Language.Haskell.DTC.Mod",
          "name": "Mod",
          "package": "DTC",
          "partial": "Mod",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/DTC/docs/Language-Haskell-DTC-Mod.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLift a function over \u003ccode\u003e[\u003c/code\u003e\u003ccode\u003eHsDecl\u003c/code\u003e\u003ccode\u003e]\u003c/code\u003e to a function over \u003ccode\u003eHsModule\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Language.Haskell.DTC.Mod",
          "name": "modifyHsDecls",
          "package": "DTC",
          "signature": "([Decl] -\u003e [Decl]) -\u003e Module -\u003e Module",
          "source": "src/Language-Haskell-DTC-Mod.html#modifyHsDecls",
          "type": "function"
        },
        "index": {
          "description": "Lift function over HsDecl to function over HsModule",
          "hierarchy": "Language Haskell DTC Mod",
          "module": "Language.Haskell.DTC.Mod",
          "name": "modifyHsDecls",
          "normalized": "([Decl]-\u003e[Decl])-\u003eModule-\u003eModule",
          "package": "DTC",
          "partial": "Hs Decls",
          "signature": "([Decl]-\u003e[Decl])-\u003eModule-\u003eModule",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DTC/docs/Language-Haskell-DTC-Mod.html#v:modifyHsDecls"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLift a function over \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e to a function over \u003ccode\u003eHsName\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Language.Haskell.DTC.Mod",
          "name": "modifyHsName",
          "package": "DTC",
          "signature": "(String -\u003e String) -\u003e Name -\u003e Name",
          "source": "src/Language-Haskell-DTC-Mod.html#modifyHsName",
          "type": "function"
        },
        "index": {
          "description": "Lift function over String to function over HsName",
          "hierarchy": "Language Haskell DTC Mod",
          "module": "Language.Haskell.DTC.Mod",
          "name": "modifyHsName",
          "normalized": "(String-\u003eString)-\u003eName-\u003eName",
          "package": "DTC",
          "partial": "Hs Name",
          "signature": "(String-\u003eString)-\u003eName-\u003eName",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DTC/docs/Language-Haskell-DTC-Mod.html#v:modifyHsName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract the \u003ccode\u003e\u003ca\u003eName\u003c/a\u003e\u003c/code\u003e of a \u003ccode\u003e\u003ca\u003eTyVarBind\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Language.Haskell.DTC.Mod",
          "name": "tyVarName",
          "package": "DTC",
          "signature": "TyVarBind -\u003e Name",
          "source": "src/Language-Haskell-DTC-Mod.html#tyVarName",
          "type": "function"
        },
        "index": {
          "description": "Extract the Name of TyVarBind",
          "hierarchy": "Language Haskell DTC Mod",
          "module": "Language.Haskell.DTC.Mod",
          "name": "tyVarName",
          "normalized": "TyVarBind-\u003eName",
          "package": "DTC",
          "partial": "Var Name",
          "signature": "TyVarBind-\u003eName",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DTC/docs/Language-Haskell-DTC-Mod.html#v:tyVarName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSkip a bang in a type.\n\u003c/p\u003e",
          "module": "Language.Haskell.DTC.Mod",
          "name": "unBangType",
          "package": "DTC",
          "signature": "BangType -\u003e Type",
          "source": "src/Language-Haskell-DTC-Mod.html#unBangType",
          "type": "function"
        },
        "index": {
          "description": "Skip bang in type",
          "hierarchy": "Language Haskell DTC Mod",
          "module": "Language.Haskell.DTC.Mod",
          "name": "unBangType",
          "normalized": "BangType-\u003eType",
          "package": "DTC",
          "partial": "Bang Type",
          "signature": "BangType-\u003eType",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DTC/docs/Language-Haskell-DTC-Mod.html#v:unBangType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAll you need to parse a module.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Language.Haskell.DTC.Parser",
          "name": "Parser",
          "package": "DTC",
          "source": "src/Language-Haskell-DTC-Parser.html",
          "type": "module"
        },
        "index": {
          "description": "All you need to parse module",
          "hierarchy": "Language Haskell DTC Parser",
          "module": "Language.Haskell.DTC.Parser",
          "name": "Parser",
          "package": "DTC",
          "partial": "Parser",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/DTC/docs/Language-Haskell-DTC-Parser.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA complete Haskell source module.\n\u003c/p\u003e",
          "module": "Language.Haskell.DTC.Parser",
          "name": "Module",
          "package": "DTC",
          "type": "data"
        },
        "index": {
          "description": "complete Haskell source module",
          "hierarchy": "Language Haskell DTC Parser",
          "module": "Language.Haskell.DTC.Parser",
          "name": "Module",
          "package": "DTC",
          "partial": "Module",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/DTC/docs/Language-Haskell-DTC-Parser.html#t:Module"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStatic parameters governing a parse.\n   Note that the various parse functions in \u003ca\u003eLanguage.Haskell.Exts.Parser\u003c/a\u003e\n   never look at LANGUAGE pragmas, regardless of\n   what the \u003ccode\u003eignoreLanguagePragmas\u003c/code\u003e flag is set to.\n   Only the various \u003ccode\u003eparseFile\u003c/code\u003e functions in \u003ca\u003eLanguage.Haskell.Exts\u003c/a\u003e will\n   act on it, when set to \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Language.Haskell.DTC.Parser",
          "name": "ParseMode",
          "package": "DTC",
          "type": "data"
        },
        "index": {
          "description": "Static parameters governing parse Note that the various parse functions in Language.Haskell.Exts.Parser never look at LANGUAGE pragmas regardless of what the ignoreLanguagePragmas flag is set to Only the various parseFile functions in Language.Haskell.Exts will act on it when set to False",
          "hierarchy": "Language Haskell DTC Parser",
          "module": "Language.Haskell.DTC.Parser",
          "name": "ParseMode",
          "package": "DTC",
          "partial": "Parse Mode",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/DTC/docs/Language-Haskell-DTC-Parser.html#t:ParseMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe result of a parse.\n\u003c/p\u003e",
          "module": "Language.Haskell.DTC.Parser",
          "name": "ParseResult",
          "package": "DTC",
          "type": "data"
        },
        "index": {
          "description": "The result of parse",
          "hierarchy": "Language Haskell DTC Parser",
          "module": "Language.Haskell.DTC.Parser",
          "name": "ParseResult",
          "package": "DTC",
          "partial": "Parse Result",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/DTC/docs/Language-Haskell-DTC-Parser.html#t:ParseResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe parse failed at the specified\n source location, with an error message.\n\u003c/p\u003e",
          "module": "Language.Haskell.DTC.Parser",
          "name": "ParseFailed",
          "package": "DTC",
          "signature": "ParseFailed SrcLoc String",
          "type": "function"
        },
        "index": {
          "description": "The parse failed at the specified source location with an error message",
          "hierarchy": "Language Haskell DTC Parser",
          "module": "Language.Haskell.DTC.Parser",
          "name": "ParseFailed",
          "package": "DTC",
          "partial": "Parse Failed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DTC/docs/Language-Haskell-DTC-Parser.html#v:ParseFailed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.DTC.Parser",
          "name": "ParseMode",
          "package": "DTC",
          "signature": "ParseMode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell DTC Parser",
          "module": "Language.Haskell.DTC.Parser",
          "name": "ParseMode",
          "package": "DTC",
          "partial": "Parse Mode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DTC/docs/Language-Haskell-DTC-Parser.html#v:ParseMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe parse succeeded, yielding a value.\n\u003c/p\u003e",
          "module": "Language.Haskell.DTC.Parser",
          "name": "ParseOk",
          "package": "DTC",
          "signature": "ParseOk a",
          "type": "function"
        },
        "index": {
          "description": "The parse succeeded yielding value",
          "hierarchy": "Language Haskell DTC Parser",
          "module": "Language.Haskell.DTC.Parser",
          "name": "ParseOk",
          "package": "DTC",
          "partial": "Parse Ok",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DTC/docs/Language-Haskell-DTC-Parser.html#v:ParseOk"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefault parameters for a parse.\n   The default is an unknown filename,\n   no extensions (i.e. Haskell 98),\n   don't ignore LANGUAGE pragmas, do ignore LINE pragmas,\n   and be aware of fixities from the \u003ccode\u003ePrelude\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Language.Haskell.DTC.Parser",
          "name": "defaultParseMode",
          "package": "DTC",
          "signature": "ParseMode",
          "type": "function"
        },
        "index": {
          "description": "Default parameters for parse The default is an unknown filename no extensions i.e Haskell don ignore LANGUAGE pragmas do ignore LINE pragmas and be aware of fixities from the Prelude",
          "hierarchy": "Language Haskell DTC Parser",
          "module": "Language.Haskell.DTC.Parser",
          "name": "defaultParseMode",
          "package": "DTC",
          "partial": "Parse Mode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DTC/docs/Language-Haskell-DTC-Parser.html#v:defaultParseMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003elist of extensions enabled for parsing\n\u003c/p\u003e",
          "module": "Language.Haskell.DTC.Parser",
          "name": "extensions",
          "package": "DTC",
          "signature": "[Extension]",
          "type": "function"
        },
        "index": {
          "description": "list of extensions enabled for parsing",
          "hierarchy": "Language Haskell DTC Parser",
          "module": "Language.Haskell.DTC.Parser",
          "name": "extensions",
          "normalized": "[Extension]",
          "package": "DTC",
          "signature": "[Extension]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DTC/docs/Language-Haskell-DTC-Parser.html#v:extensions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003elist of fixities to be aware of\n\u003c/p\u003e",
          "module": "Language.Haskell.DTC.Parser",
          "name": "fixities",
          "package": "DTC",
          "signature": "Maybe [Fixity]",
          "type": "function"
        },
        "index": {
          "description": "list of fixities to be aware of",
          "hierarchy": "Language Haskell DTC Parser",
          "module": "Language.Haskell.DTC.Parser",
          "name": "fixities",
          "normalized": "Maybe[Fixity]",
          "package": "DTC",
          "signature": "Maybe[Fixity]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DTC/docs/Language-Haskell-DTC-Parser.html#v:fixities"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eif \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e, the parser won't care about further extensions\n   in LANGUAGE pragmas in source files\n\u003c/p\u003e",
          "module": "Language.Haskell.DTC.Parser",
          "name": "ignoreLanguagePragmas",
          "package": "DTC",
          "signature": "Bool",
          "type": "function"
        },
        "index": {
          "description": "if True the parser won care about further extensions in LANGUAGE pragmas in source files",
          "hierarchy": "Language Haskell DTC Parser",
          "module": "Language.Haskell.DTC.Parser",
          "name": "ignoreLanguagePragmas",
          "package": "DTC",
          "partial": "Language Pragmas",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DTC/docs/Language-Haskell-DTC-Parser.html#v:ignoreLanguagePragmas"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eif \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e, the parser won't read line position information\n   from LINE pragmas in source files\n\u003c/p\u003e",
          "module": "Language.Haskell.DTC.Parser",
          "name": "ignoreLinePragmas",
          "package": "DTC",
          "signature": "Bool",
          "type": "function"
        },
        "index": {
          "description": "if True the parser won read line position information from LINE pragmas in source files",
          "hierarchy": "Language Haskell DTC Parser",
          "module": "Language.Haskell.DTC.Parser",
          "name": "ignoreLinePragmas",
          "package": "DTC",
          "partial": "Line Pragmas",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DTC/docs/Language-Haskell-DTC-Parser.html#v:ignoreLinePragmas"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eoriginal name of the file being parsed\n\u003c/p\u003e",
          "module": "Language.Haskell.DTC.Parser",
          "name": "parseFilename",
          "package": "DTC",
          "signature": "String",
          "type": "function"
        },
        "index": {
          "description": "original name of the file being parsed",
          "hierarchy": "Language Haskell DTC Parser",
          "module": "Language.Haskell.DTC.Parser",
          "name": "parseFilename",
          "package": "DTC",
          "partial": "Filename",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DTC/docs/Language-Haskell-DTC-Parser.html#v:parseFilename"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse of a string, which should contain a complete Haskell module.\n\u003c/p\u003e",
          "module": "Language.Haskell.DTC.Parser",
          "name": "parseModule",
          "package": "DTC",
          "signature": "String -\u003e ParseResult Module",
          "type": "function"
        },
        "index": {
          "description": "Parse of string which should contain complete Haskell module",
          "hierarchy": "Language Haskell DTC Parser",
          "module": "Language.Haskell.DTC.Parser",
          "name": "parseModule",
          "normalized": "String-\u003eParseResult Module",
          "package": "DTC",
          "partial": "Module",
          "signature": "String-\u003eParseResult Module",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DTC/docs/Language-Haskell-DTC-Parser.html#v:parseModule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse of a string containing a complete Haskell module, using an explicit mode.\n\u003c/p\u003e",
          "module": "Language.Haskell.DTC.Parser",
          "name": "parseModuleWithMode",
          "package": "DTC",
          "signature": "ParseMode -\u003e String -\u003e ParseResult Module",
          "type": "function"
        },
        "index": {
          "description": "Parse of string containing complete Haskell module using an explicit mode",
          "hierarchy": "Language Haskell DTC Parser",
          "module": "Language.Haskell.DTC.Parser",
          "name": "parseModuleWithMode",
          "normalized": "ParseMode-\u003eString-\u003eParseResult Module",
          "package": "DTC",
          "partial": "Module With Mode",
          "signature": "ParseMode-\u003eString-\u003eParseResult Module",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DTC/docs/Language-Haskell-DTC-Parser.html#v:parseModuleWithMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a module from a source code file. It throws an error if parsing fails.\n\u003c/p\u003e",
          "module": "Language.Haskell.DTC.Parser",
          "name": "parseModuleWithSrc",
          "package": "DTC",
          "signature": "FilePath -\u003e ParseMode -\u003e IO Module",
          "source": "src/Language-Haskell-DTC-Parser.html#parseModuleWithSrc",
          "type": "function"
        },
        "index": {
          "description": "Parse module from source code file It throws an error if parsing fails",
          "hierarchy": "Language Haskell DTC Parser",
          "module": "Language.Haskell.DTC.Parser",
          "name": "parseModuleWithSrc",
          "normalized": "FilePath-\u003eParseMode-\u003eIO Module",
          "package": "DTC",
          "partial": "Module With Src",
          "signature": "FilePath-\u003eParseMode-\u003eIO Module",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DTC/docs/Language-Haskell-DTC-Parser.html#v:parseModuleWithSrc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eMain module of \u003ccode\u003eDTC\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Language.Haskell.DTC",
          "name": "DTC",
          "package": "DTC",
          "source": "src/Language-Haskell-DTC.html",
          "type": "module"
        },
        "index": {
          "description": "Main module of DTC",
          "hierarchy": "Language Haskell DTC",
          "module": "Language.Haskell.DTC",
          "name": "DTC",
          "package": "DTC",
          "partial": "DTC",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/DTC/docs/Language-Haskell-DTC.html#"
      }
    }
  ]
]