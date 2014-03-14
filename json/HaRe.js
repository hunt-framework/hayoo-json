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
        "word": "HaRe"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Case",
          "name": "Case",
          "package": "HaRe",
          "source": "src/Language-Haskell-Refact-Case.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Case",
          "module": "Language.Haskell.Refact.Case",
          "name": "Case",
          "package": "HaRe",
          "partial": "Case",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Case.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert an if expression to a case expression\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Case",
          "name": "ifToCase",
          "package": "HaRe",
          "signature": "RefactSettings -\u003e Cradle -\u003e FilePath -\u003e SimpPos -\u003e SimpPos -\u003e IO [FilePath]",
          "source": "src/Language-Haskell-Refact-Case.html#ifToCase",
          "type": "function"
        },
        "index": {
          "description": "Convert an if expression to case expression",
          "hierarchy": "Language Haskell Refact Case",
          "module": "Language.Haskell.Refact.Case",
          "name": "ifToCase",
          "normalized": "RefactSettings-\u003eCradle-\u003eFilePath-\u003eSimpPos-\u003eSimpPos-\u003eIO[FilePath]",
          "package": "HaRe",
          "partial": "To Case",
          "signature": "RefactSettings-\u003eCradle-\u003eFilePath-\u003eSimpPos-\u003eSimpPos-\u003eIO[FilePath]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Case.html#v:ifToCase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.DupDef",
          "name": "DupDef",
          "package": "HaRe",
          "source": "src/Language-Haskell-Refact-DupDef.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Language Haskell Refact DupDef",
          "module": "Language.Haskell.Refact.DupDef",
          "name": "DupDef",
          "package": "HaRe",
          "partial": "Dup Def",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-DupDef.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis refactoring duplicates a definition (function binding or\n simple pattern binding) at the same level with a new name provided by\n the user. The new name should not cause name clash/capture.\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.DupDef",
          "name": "duplicateDef",
          "package": "HaRe",
          "signature": "RefactSettings -\u003e Cradle -\u003e FilePath -\u003e String -\u003e SimpPos -\u003e IO [FilePath]",
          "source": "src/Language-Haskell-Refact-DupDef.html#duplicateDef",
          "type": "function"
        },
        "index": {
          "description": "This refactoring duplicates definition function binding or simple pattern binding at the same level with new name provided by the user The new name should not cause name clash capture",
          "hierarchy": "Language Haskell Refact DupDef",
          "module": "Language.Haskell.Refact.DupDef",
          "name": "duplicateDef",
          "normalized": "RefactSettings-\u003eCradle-\u003eFilePath-\u003eString-\u003eSimpPos-\u003eIO[FilePath]",
          "package": "HaRe",
          "partial": "Def",
          "signature": "RefactSettings-\u003eCradle-\u003eFilePath-\u003eString-\u003eSimpPos-\u003eIO[FilePath]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-DupDef.html#v:duplicateDef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.MoveDef",
          "name": "MoveDef",
          "package": "HaRe",
          "source": "src/Language-Haskell-Refact-MoveDef.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Language Haskell Refact MoveDef",
          "module": "Language.Haskell.Refact.MoveDef",
          "name": "MoveDef",
          "package": "HaRe",
          "partial": "Move Def",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-MoveDef.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMove a definition one level down\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.MoveDef",
          "name": "demote",
          "package": "HaRe",
          "signature": "RefactSettings -\u003e Cradle -\u003e FilePath -\u003e SimpPos -\u003e IO [FilePath]",
          "source": "src/Language-Haskell-Refact-MoveDef.html#demote",
          "type": "function"
        },
        "index": {
          "description": "Move definition one level down",
          "hierarchy": "Language Haskell Refact MoveDef",
          "module": "Language.Haskell.Refact.MoveDef",
          "name": "demote",
          "normalized": "RefactSettings-\u003eCradle-\u003eFilePath-\u003eSimpPos-\u003eIO[FilePath]",
          "package": "HaRe",
          "signature": "RefactSettings-\u003eCradle-\u003eFilePath-\u003eSimpPos-\u003eIO[FilePath]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-MoveDef.html#v:demote"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMove a definition one level up from where it is now\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.MoveDef",
          "name": "liftOneLevel",
          "package": "HaRe",
          "signature": "RefactSettings -\u003e Cradle -\u003e FilePath -\u003e SimpPos -\u003e IO [FilePath]",
          "source": "src/Language-Haskell-Refact-MoveDef.html#liftOneLevel",
          "type": "function"
        },
        "index": {
          "description": "Move definition one level up from where it is now",
          "hierarchy": "Language Haskell Refact MoveDef",
          "module": "Language.Haskell.Refact.MoveDef",
          "name": "liftOneLevel",
          "normalized": "RefactSettings-\u003eCradle-\u003eFilePath-\u003eSimpPos-\u003eIO[FilePath]",
          "package": "HaRe",
          "partial": "One Level",
          "signature": "RefactSettings-\u003eCradle-\u003eFilePath-\u003eSimpPos-\u003eIO[FilePath]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-MoveDef.html#v:liftOneLevel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLift a definition to the top level\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.MoveDef",
          "name": "liftToTopLevel",
          "package": "HaRe",
          "signature": "RefactSettings -\u003e Cradle -\u003e FilePath -\u003e SimpPos -\u003e IO [FilePath]",
          "source": "src/Language-Haskell-Refact-MoveDef.html#liftToTopLevel",
          "type": "function"
        },
        "index": {
          "description": "Lift definition to the top level",
          "hierarchy": "Language Haskell Refact MoveDef",
          "module": "Language.Haskell.Refact.MoveDef",
          "name": "liftToTopLevel",
          "normalized": "RefactSettings-\u003eCradle-\u003eFilePath-\u003eSimpPos-\u003eIO[FilePath]",
          "package": "HaRe",
          "partial": "To Top Level",
          "signature": "RefactSettings-\u003eCradle-\u003eFilePath-\u003eSimpPos-\u003eIO[FilePath]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-MoveDef.html#v:liftToTopLevel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Renaming",
          "name": "Renaming",
          "package": "HaRe",
          "source": "src/Language-Haskell-Refact-Renaming.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Renaming",
          "module": "Language.Haskell.Refact.Renaming",
          "name": "Renaming",
          "package": "HaRe",
          "partial": "Renaming",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Renaming.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRename the given identifier.\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Renaming",
          "name": "rename",
          "package": "HaRe",
          "signature": "RefactSettings -\u003e Cradle -\u003e FilePath -\u003e String -\u003e SimpPos -\u003e IO [FilePath]",
          "source": "src/Language-Haskell-Refact-Renaming.html#rename",
          "type": "function"
        },
        "index": {
          "description": "Rename the given identifier",
          "hierarchy": "Language Haskell Refact Renaming",
          "module": "Language.Haskell.Refact.Renaming",
          "name": "rename",
          "normalized": "RefactSettings-\u003eCradle-\u003eFilePath-\u003eString-\u003eSimpPos-\u003eIO[FilePath]",
          "package": "HaRe",
          "signature": "RefactSettings-\u003eCradle-\u003eFilePath-\u003eString-\u003eSimpPos-\u003eIO[FilePath]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Renaming.html#v:rename"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.SwapArgs",
          "name": "SwapArgs",
          "package": "HaRe",
          "source": "src/Language-Haskell-Refact-SwapArgs.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Language Haskell Refact SwapArgs",
          "module": "Language.Haskell.Refact.SwapArgs",
          "name": "SwapArgs",
          "package": "HaRe",
          "partial": "Swap Args",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-SwapArgs.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.SwapArgs",
          "name": "swapArgs",
          "package": "HaRe",
          "signature": "RefactSettings -\u003e Cradle -\u003e [String] -\u003e IO [FilePath]",
          "source": "src/Language-Haskell-Refact-SwapArgs.html#swapArgs",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Refact SwapArgs",
          "module": "Language.Haskell.Refact.SwapArgs",
          "name": "swapArgs",
          "normalized": "RefactSettings-\u003eCradle-\u003e[String]-\u003eIO[FilePath]",
          "package": "HaRe",
          "partial": "Args",
          "signature": "RefactSettings-\u003eCradle-\u003e[String]-\u003eIO[FilePath]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-SwapArgs.html#v:swapArgs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.DualTree",
          "name": "DualTree",
          "package": "HaRe",
          "source": "src/Language-Haskell-Refact-Utils-DualTree.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils DualTree",
          "module": "Language.Haskell.Refact.Utils.DualTree",
          "name": "DualTree",
          "package": "HaRe",
          "partial": "Dual Tree",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-DualTree.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.DualTree",
          "name": "Line",
          "package": "HaRe",
          "source": "src/Language-Haskell-Refact-Utils-DualTree.html#Line",
          "type": "data"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils DualTree",
          "module": "Language.Haskell.Refact.Utils.DualTree",
          "name": "Line",
          "package": "HaRe",
          "partial": "Line",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-DualTree.html#t:Line"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.DualTree",
          "name": "Source",
          "package": "HaRe",
          "source": "src/Language-Haskell-Refact-Utils-DualTree.html#Source",
          "type": "data"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils DualTree",
          "module": "Language.Haskell.Refact.Utils.DualTree",
          "name": "Source",
          "package": "HaRe",
          "partial": "Source",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-DualTree.html#t:Source"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe main data structure for this module\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils.DualTree",
          "name": "SourceTree",
          "package": "HaRe",
          "source": "src/Language-Haskell-Refact-Utils-DualTree.html#SourceTree",
          "type": "type"
        },
        "index": {
          "description": "The main data structure for this module",
          "hierarchy": "Language Haskell Refact Utils DualTree",
          "module": "Language.Haskell.Refact.Utils.DualTree",
          "name": "SourceTree",
          "package": "HaRe",
          "partial": "Source Tree",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-DualTree.html#t:SourceTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.DualTree",
          "name": "Line",
          "package": "HaRe",
          "signature": "Line Row Col RowOffset Source LineOpt [PosToken]",
          "source": "src/Language-Haskell-Refact-Utils-DualTree.html#Line",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils DualTree",
          "module": "Language.Haskell.Refact.Utils.DualTree",
          "name": "Line",
          "normalized": "Line Row Col RowOffset Source LineOpt[PosToken]",
          "package": "HaRe",
          "partial": "Line",
          "signature": "Line Row Col RowOffset Source LineOpt[PosToken]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-DualTree.html#v:Line"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.DualTree",
          "name": "SAdded",
          "package": "HaRe",
          "signature": "SAdded",
          "source": "src/Language-Haskell-Refact-Utils-DualTree.html#Source",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils DualTree",
          "module": "Language.Haskell.Refact.Utils.DualTree",
          "name": "SAdded",
          "package": "HaRe",
          "partial": "SAdded",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-DualTree.html#v:SAdded"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.DualTree",
          "name": "SOriginal",
          "package": "HaRe",
          "signature": "SOriginal",
          "source": "src/Language-Haskell-Refact-Utils-DualTree.html#Source",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils DualTree",
          "module": "Language.Haskell.Refact.Utils.DualTree",
          "name": "SOriginal",
          "package": "HaRe",
          "partial": "SOriginal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-DualTree.html#v:SOriginal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.DualTree",
          "name": "SWasAdded",
          "package": "HaRe",
          "signature": "SWasAdded",
          "source": "src/Language-Haskell-Refact-Utils-DualTree.html#Source",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils DualTree",
          "module": "Language.Haskell.Refact.Utils.DualTree",
          "name": "SWasAdded",
          "package": "HaRe",
          "partial": "SWas Added",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-DualTree.html#v:SWasAdded"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.DualTree",
          "name": "layoutTreeToSourceTree",
          "package": "HaRe",
          "signature": "LayoutTree -\u003e SourceTree",
          "source": "src/Language-Haskell-Refact-Utils-DualTree.html#layoutTreeToSourceTree",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils DualTree",
          "module": "Language.Haskell.Refact.Utils.DualTree",
          "name": "layoutTreeToSourceTree",
          "normalized": "LayoutTree-\u003eSourceTree",
          "package": "HaRe",
          "partial": "Tree To Source Tree",
          "signature": "LayoutTree-\u003eSourceTree",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-DualTree.html#v:layoutTreeToSourceTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.DualTree",
          "name": "renderLines",
          "package": "HaRe",
          "signature": "[Line] -\u003e String",
          "source": "src/Language-Haskell-Refact-Utils-DualTree.html#renderLines",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils DualTree",
          "module": "Language.Haskell.Refact.Utils.DualTree",
          "name": "renderLines",
          "normalized": "[Line]-\u003eString",
          "package": "HaRe",
          "partial": "Lines",
          "signature": "[Line]-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-DualTree.html#v:renderLines"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.DualTree",
          "name": "renderLinesFromLayoutTree",
          "package": "HaRe",
          "signature": "LayoutTree -\u003e String",
          "source": "src/Language-Haskell-Refact-Utils-DualTree.html#renderLinesFromLayoutTree",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils DualTree",
          "module": "Language.Haskell.Refact.Utils.DualTree",
          "name": "renderLinesFromLayoutTree",
          "normalized": "LayoutTree-\u003eString",
          "package": "HaRe",
          "partial": "Lines From Layout Tree",
          "signature": "LayoutTree-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-DualTree.html#v:renderLinesFromLayoutTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.DualTree",
          "name": "renderSourceTree",
          "package": "HaRe",
          "signature": "SourceTree -\u003e String",
          "source": "src/Language-Haskell-Refact-Utils-DualTree.html#renderSourceTree",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils DualTree",
          "module": "Language.Haskell.Refact.Utils.DualTree",
          "name": "renderSourceTree",
          "normalized": "SourceTree-\u003eString",
          "package": "HaRe",
          "partial": "Source Tree",
          "signature": "SourceTree-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-DualTree.html#v:renderSourceTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.DualTree",
          "name": "retrieveLines",
          "package": "HaRe",
          "signature": "SourceTree -\u003e [Line]",
          "source": "src/Language-Haskell-Refact-Utils-DualTree.html#retrieveLines",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils DualTree",
          "module": "Language.Haskell.Refact.Utils.DualTree",
          "name": "retrieveLines",
          "normalized": "SourceTree-\u003e[Line]",
          "package": "HaRe",
          "partial": "Lines",
          "signature": "SourceTree-\u003e[Line]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-DualTree.html#v:retrieveLines"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.DualTree",
          "name": "retrieveLinesFromLayoutTree",
          "package": "HaRe",
          "signature": "LayoutTree -\u003e [Line]",
          "source": "src/Language-Haskell-Refact-Utils-DualTree.html#retrieveLinesFromLayoutTree",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils DualTree",
          "module": "Language.Haskell.Refact.Utils.DualTree",
          "name": "retrieveLinesFromLayoutTree",
          "normalized": "LayoutTree-\u003e[Line]",
          "package": "HaRe",
          "partial": "Lines From Layout Tree",
          "signature": "LayoutTree-\u003e[Line]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-DualTree.html#v:retrieveLinesFromLayoutTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eProvide workarounds for bugs detected in GHC, until they are\n fixed in a later version\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Language.Haskell.Refact.Utils.GhcBugWorkArounds",
          "name": "GhcBugWorkArounds",
          "package": "HaRe",
          "source": "src/Language-Haskell-Refact-Utils-GhcBugWorkArounds.html",
          "type": "module"
        },
        "index": {
          "description": "Provide workarounds for bugs detected in GHC until they are fixed in later version",
          "hierarchy": "Language Haskell Refact Utils GhcBugWorkArounds",
          "module": "Language.Haskell.Refact.Utils.GhcBugWorkArounds",
          "name": "GhcBugWorkArounds",
          "package": "HaRe",
          "partial": "Ghc Bug Work Arounds",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-GhcBugWorkArounds.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.GhcBugWorkArounds",
          "name": "bypassGHCBug7351",
          "package": "HaRe",
          "signature": "[PosToken] -\u003e [PosToken]",
          "source": "src/Language-Haskell-Refact-Utils-GhcBugWorkArounds.html#bypassGHCBug7351",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils GhcBugWorkArounds",
          "module": "Language.Haskell.Refact.Utils.GhcBugWorkArounds",
          "name": "bypassGHCBug7351",
          "normalized": "[PosToken]-\u003e[PosToken]",
          "package": "HaRe",
          "partial": "GHCBug",
          "signature": "[PosToken]-\u003e[PosToken]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-GhcBugWorkArounds.html#v:bypassGHCBug7351"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReplacement for original \u003ccode\u003egetRichTokenStream\u003c/code\u003e which will return\n the tokens for a file processed by CPP.\n See bug \u003ca\u003ehttp://ghc.haskell.org/trac/ghc/ticket/8265\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils.GhcBugWorkArounds",
          "name": "getRichTokenStreamWA",
          "package": "HaRe",
          "signature": "Module -\u003e m [(Located Token, String)]",
          "source": "src/Language-Haskell-Refact-Utils-GhcBugWorkArounds.html#getRichTokenStreamWA",
          "type": "function"
        },
        "index": {
          "description": "Replacement for original getRichTokenStream which will return the tokens for file processed by CPP See bug http ghc.haskell.org trac ghc ticket",
          "hierarchy": "Language Haskell Refact Utils GhcBugWorkArounds",
          "module": "Language.Haskell.Refact.Utils.GhcBugWorkArounds",
          "name": "getRichTokenStreamWA",
          "normalized": "Module-\u003ea[(Located Token,String)]",
          "package": "HaRe",
          "partial": "Rich Token Stream WA",
          "signature": "Module-\u003em[(Located Token,String)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-GhcBugWorkArounds.html#v:getRichTokenStreamWA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.GhcModuleGraph",
          "name": "GhcModuleGraph",
          "package": "HaRe",
          "source": "src/Language-Haskell-Refact-Utils-GhcModuleGraph.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils GhcModuleGraph",
          "module": "Language.Haskell.Refact.Utils.GhcModuleGraph",
          "name": "GhcModuleGraph",
          "package": "HaRe",
          "partial": "Ghc Module Graph",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-GhcModuleGraph.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.GhcModuleGraph",
          "name": "getModulesAsGraph",
          "package": "HaRe",
          "signature": "Bool -\u003e [ModSummary] -\u003e Maybe ModuleName -\u003e Graph SummaryNode",
          "source": "src/Language-Haskell-Refact-Utils-GhcModuleGraph.html#getModulesAsGraph",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils GhcModuleGraph",
          "module": "Language.Haskell.Refact.Utils.GhcModuleGraph",
          "name": "getModulesAsGraph",
          "normalized": "Bool-\u003e[ModSummary]-\u003eMaybe ModuleName-\u003eGraph SummaryNode",
          "package": "HaRe",
          "partial": "Modules As Graph",
          "signature": "Bool-\u003e[ModSummary]-\u003eMaybe ModuleName-\u003eGraph SummaryNode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-GhcModuleGraph.html#v:getModulesAsGraph"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.GhcModuleGraph",
          "name": "summaryNodeSummary",
          "package": "HaRe",
          "signature": "SummaryNode -\u003e ModSummary",
          "source": "src/Language-Haskell-Refact-Utils-GhcModuleGraph.html#summaryNodeSummary",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils GhcModuleGraph",
          "module": "Language.Haskell.Refact.Utils.GhcModuleGraph",
          "name": "summaryNodeSummary",
          "normalized": "SummaryNode-\u003eModSummary",
          "package": "HaRe",
          "partial": "Node Summary",
          "signature": "SummaryNode-\u003eModSummary",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-GhcModuleGraph.html#v:summaryNodeSummary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module contains routines used to perform generic traversals of\nthe GHC AST, avoiding the traps resulting from certain fields being\npopulated with values defined to trigger an error if ever evaluated.\n\u003c/p\u003e\u003cp\u003eThis is a useful feature for tracking down bugs in GHC, but makes use\nof the GHC library problematic.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Language.Haskell.Refact.Utils.GhcUtils",
          "name": "GhcUtils",
          "package": "HaRe",
          "source": "src/Language-Haskell-Refact-Utils-GhcUtils.html",
          "type": "module"
        },
        "index": {
          "description": "This module contains routines used to perform generic traversals of the GHC AST avoiding the traps resulting from certain fields being populated with values defined to trigger an error if ever evaluated This is useful feature for tracking down bugs in GHC but makes use of the GHC library problematic",
          "hierarchy": "Language Haskell Refact Utils GhcUtils",
          "module": "Language.Haskell.Refact.Utils.GhcUtils",
          "name": "GhcUtils",
          "package": "HaRe",
          "partial": "Ghc Utils",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-GhcUtils.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.GhcUtils",
          "name": "allTUGhc",
          "package": "HaRe",
          "signature": "(a -\u003e a -\u003e a) -\u003e a -\u003e TU a m -\u003e TU a m",
          "source": "src/Language-Haskell-Refact-Utils-GhcUtils.html#allTUGhc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils GhcUtils",
          "module": "Language.Haskell.Refact.Utils.GhcUtils",
          "name": "allTUGhc",
          "normalized": "(a-\u003ea-\u003ea)-\u003ea-\u003eTU a b-\u003eTU a b",
          "package": "HaRe",
          "partial": "TUGhc",
          "signature": "(a-\u003ea-\u003ea)-\u003ea-\u003eTU a m-\u003eTU a m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-GhcUtils.html#v:allTUGhc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.GhcUtils",
          "name": "allTUGhc'",
          "package": "HaRe",
          "signature": "TU a m -\u003e TU a m",
          "source": "src/Language-Haskell-Refact-Utils-GhcUtils.html#allTUGhc%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils GhcUtils",
          "module": "Language.Haskell.Refact.Utils.GhcUtils",
          "name": "allTUGhc'",
          "normalized": "TU a b-\u003eTU a b",
          "package": "HaRe",
          "partial": "TUGhc'",
          "signature": "TU a m-\u003eTU a m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-GhcUtils.html#v:allTUGhc-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.GhcUtils",
          "name": "checkItemRenamer",
          "package": "HaRe",
          "signature": "a -\u003e Bool",
          "source": "src/Language-Haskell-Refact-Utils-GhcUtils.html#checkItemRenamer",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils GhcUtils",
          "module": "Language.Haskell.Refact.Utils.GhcUtils",
          "name": "checkItemRenamer",
          "normalized": "a-\u003eBool",
          "package": "HaRe",
          "partial": "Item Renamer",
          "signature": "a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-GhcUtils.html#v:checkItemRenamer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.GhcUtils",
          "name": "checkItemRenamer'",
          "package": "HaRe",
          "signature": "TU () m",
          "source": "src/Language-Haskell-Refact-Utils-GhcUtils.html#checkItemRenamer%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils GhcUtils",
          "module": "Language.Haskell.Refact.Utils.GhcUtils",
          "name": "checkItemRenamer'",
          "normalized": "TU()a",
          "package": "HaRe",
          "partial": "Item Renamer'",
          "signature": "TU()m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-GhcUtils.html#v:checkItemRenamer-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.GhcUtils",
          "name": "checkItemStage'",
          "package": "HaRe",
          "signature": "Stage -\u003e TU () m",
          "source": "src/Language-Haskell-Refact-Utils-GhcUtils.html#checkItemStage%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils GhcUtils",
          "module": "Language.Haskell.Refact.Utils.GhcUtils",
          "name": "checkItemStage'",
          "normalized": "Stage-\u003eTU()a",
          "package": "HaRe",
          "partial": "Item Stage'",
          "signature": "Stage-\u003eTU()m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-GhcUtils.html#v:checkItemStage-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.GhcUtils",
          "name": "checkZipperStaged",
          "package": "HaRe",
          "signature": "Stage -\u003e Zipper a -\u003e Bool",
          "source": "src/Language-Haskell-Refact-Utils-GhcUtils.html#checkZipperStaged",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils GhcUtils",
          "module": "Language.Haskell.Refact.Utils.GhcUtils",
          "name": "checkZipperStaged",
          "normalized": "Stage-\u003eZipper a-\u003eBool",
          "package": "HaRe",
          "partial": "Zipper Staged",
          "signature": "Stage-\u003eZipper a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-GhcUtils.html#v:checkZipperStaged"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.GhcUtils",
          "name": "everythingButStaged",
          "package": "HaRe",
          "signature": "Stage -\u003e (r -\u003e r -\u003e r) -\u003e r -\u003e GenericQ (r, Bool) -\u003e GenericQ r",
          "source": "src/Language-Haskell-Refact-Utils-GhcUtils.html#everythingButStaged",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils GhcUtils",
          "module": "Language.Haskell.Refact.Utils.GhcUtils",
          "name": "everythingButStaged",
          "normalized": "Stage-\u003e(a-\u003ea-\u003ea)-\u003ea-\u003eGenericQ(a,Bool)-\u003eGenericQ a",
          "package": "HaRe",
          "partial": "But Staged",
          "signature": "Stage-\u003e(r-\u003er-\u003er)-\u003er-\u003eGenericQ(r,Bool)-\u003eGenericQ r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-GhcUtils.html#v:everythingButStaged"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStaged variation of SYB.everything\n The stage must be provided to avoid trying to modify elements which\n may not be present at all stages of AST processing.\n Note: Top-down order\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils.GhcUtils",
          "name": "everythingStaged",
          "package": "HaRe",
          "signature": "Stage -\u003e (r -\u003e r -\u003e r) -\u003e r -\u003e GenericQ r -\u003e GenericQ r",
          "source": "src/Language-Haskell-Refact-Utils-GhcUtils.html#everythingStaged",
          "type": "function"
        },
        "index": {
          "description": "Staged variation of SYB.everything The stage must be provided to avoid trying to modify elements which may not be present at all stages of AST processing Note Top-down order",
          "hierarchy": "Language Haskell Refact Utils GhcUtils",
          "module": "Language.Haskell.Refact.Utils.GhcUtils",
          "name": "everythingStaged",
          "normalized": "Stage-\u003e(a-\u003ea-\u003ea)-\u003ea-\u003eGenericQ a-\u003eGenericQ a",
          "package": "HaRe",
          "partial": "Staged",
          "signature": "Stage-\u003e(r-\u003er-\u003er)-\u003er-\u003eGenericQ r-\u003eGenericQ r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-GhcUtils.html#v:everythingStaged"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMonadic variation on everywhere\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils.GhcUtils",
          "name": "everywhereMStaged",
          "package": "HaRe",
          "signature": "Stage -\u003e GenericM m -\u003e GenericM m",
          "source": "src/Language-Haskell-Refact-Utils-GhcUtils.html#everywhereMStaged",
          "type": "function"
        },
        "index": {
          "description": "Monadic variation on everywhere",
          "hierarchy": "Language Haskell Refact Utils GhcUtils",
          "module": "Language.Haskell.Refact.Utils.GhcUtils",
          "name": "everywhereMStaged",
          "normalized": "Stage-\u003eGenericM a-\u003eGenericM a",
          "package": "HaRe",
          "partial": "MStaged",
          "signature": "Stage-\u003eGenericM m-\u003eGenericM m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-GhcUtils.html#v:everywhereMStaged"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMonadic variation on everywhere'\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils.GhcUtils",
          "name": "everywhereMStaged'",
          "package": "HaRe",
          "signature": "Stage -\u003e GenericM m -\u003e GenericM m",
          "source": "src/Language-Haskell-Refact-Utils-GhcUtils.html#everywhereMStaged%27",
          "type": "function"
        },
        "index": {
          "description": "Monadic variation on everywhere",
          "hierarchy": "Language Haskell Refact Utils GhcUtils",
          "module": "Language.Haskell.Refact.Utils.GhcUtils",
          "name": "everywhereMStaged'",
          "normalized": "Stage-\u003eGenericM a-\u003eGenericM a",
          "package": "HaRe",
          "partial": "MStaged'",
          "signature": "Stage-\u003eGenericM m-\u003eGenericM m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-GhcUtils.html#v:everywhereMStaged-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBottom-up transformation\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils.GhcUtils",
          "name": "everywhereStaged",
          "package": "HaRe",
          "signature": "a -\u003e a",
          "source": "src/Language-Haskell-Refact-Utils-GhcUtils.html#everywhereStaged",
          "type": "function"
        },
        "index": {
          "description": "Bottom-up transformation",
          "hierarchy": "Language Haskell Refact Utils GhcUtils",
          "module": "Language.Haskell.Refact.Utils.GhcUtils",
          "name": "everywhereStaged",
          "normalized": "a-\u003ea",
          "package": "HaRe",
          "partial": "Staged",
          "signature": "a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-GhcUtils.html#v:everywhereStaged"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTop-down version of everywhereStaged\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils.GhcUtils",
          "name": "everywhereStaged'",
          "package": "HaRe",
          "signature": "a -\u003e a",
          "source": "src/Language-Haskell-Refact-Utils-GhcUtils.html#everywhereStaged%27",
          "type": "function"
        },
        "index": {
          "description": "Top-down version of everywhereStaged",
          "hierarchy": "Language Haskell Refact Utils GhcUtils",
          "module": "Language.Haskell.Refact.Utils.GhcUtils",
          "name": "everywhereStaged'",
          "normalized": "a-\u003ea",
          "package": "HaRe",
          "partial": "Staged'",
          "signature": "a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-GhcUtils.html#v:everywhereStaged-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUp the zipper until a predicate holds, and then return the zipper\n hole\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils.GhcUtils",
          "name": "findAbove",
          "package": "HaRe",
          "signature": "(a -\u003e Bool) -\u003e Zipper a -\u003e Maybe a",
          "source": "src/Language-Haskell-Refact-Utils-GhcUtils.html#findAbove",
          "type": "function"
        },
        "index": {
          "description": "Up the zipper until predicate holds and then return the zipper hole",
          "hierarchy": "Language Haskell Refact Utils GhcUtils",
          "module": "Language.Haskell.Refact.Utils.GhcUtils",
          "name": "findAbove",
          "normalized": "(a-\u003eBool)-\u003eZipper a-\u003eMaybe a",
          "package": "HaRe",
          "partial": "Above",
          "signature": "(a-\u003eBool)-\u003eZipper a-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-GhcUtils.html#v:findAbove"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFull type-unifying traversal in top-down order.\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils.GhcUtils",
          "name": "full_tdTUGhc",
          "package": "HaRe",
          "signature": "TU a m -\u003e TU a m",
          "source": "src/Language-Haskell-Refact-Utils-GhcUtils.html#full_tdTUGhc",
          "type": "function"
        },
        "index": {
          "description": "Full type-unifying traversal in top-down order",
          "hierarchy": "Language Haskell Refact Utils GhcUtils",
          "module": "Language.Haskell.Refact.Utils.GhcUtils",
          "name": "full_tdTUGhc",
          "normalized": "TU a b-\u003eTU a b",
          "package": "HaRe",
          "partial": "TUGhc",
          "signature": "TU a m-\u003eTU a m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-GhcUtils.html#v:full_tdTUGhc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStaged variation of SYB.listify\n The stage must be provided to avoid trying to modify elements which\n may not be present at all stages of AST processing.\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils.GhcUtils",
          "name": "listifyStaged",
          "package": "HaRe",
          "signature": "Stage -\u003e (a1 -\u003e Bool) -\u003e a -\u003e [a1]",
          "source": "src/Language-Haskell-Refact-Utils-GhcUtils.html#listifyStaged",
          "type": "function"
        },
        "index": {
          "description": "Staged variation of SYB.listify The stage must be provided to avoid trying to modify elements which may not be present at all stages of AST processing",
          "hierarchy": "Language Haskell Refact Utils GhcUtils",
          "module": "Language.Haskell.Refact.Utils.GhcUtils",
          "name": "listifyStaged",
          "normalized": "Stage-\u003e(a-\u003eBool)-\u003ea-\u003e[a]",
          "package": "HaRe",
          "partial": "Staged",
          "signature": "Stage-\u003e(a-\u003eBool)-\u003ea-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-GhcUtils.html#v:listifyStaged"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBottom-up type-preserving traversal that performs its argument\n   strategy at most once.\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils.GhcUtils",
          "name": "once_buTPGhc",
          "package": "HaRe",
          "signature": "TP m -\u003e TP m",
          "source": "src/Language-Haskell-Refact-Utils-GhcUtils.html#once_buTPGhc",
          "type": "function"
        },
        "index": {
          "description": "Bottom-up type-preserving traversal that performs its argument strategy at most once",
          "hierarchy": "Language Haskell Refact Utils GhcUtils",
          "module": "Language.Haskell.Refact.Utils.GhcUtils",
          "name": "once_buTPGhc",
          "normalized": "TP a-\u003eTP a",
          "package": "HaRe",
          "partial": "TPGhc",
          "signature": "TP m-\u003eTP m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-GhcUtils.html#v:once_buTPGhc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTop-down type-preserving traversal that performs its argument\n   strategy at most once.\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils.GhcUtils",
          "name": "once_tdTPGhc",
          "package": "HaRe",
          "signature": "TP m -\u003e TP m",
          "source": "src/Language-Haskell-Refact-Utils-GhcUtils.html#once_tdTPGhc",
          "type": "function"
        },
        "index": {
          "description": "Top-down type-preserving traversal that performs its argument strategy at most once",
          "hierarchy": "Language Haskell Refact Utils GhcUtils",
          "module": "Language.Haskell.Refact.Utils.GhcUtils",
          "name": "once_tdTPGhc",
          "normalized": "TP a-\u003eTP a",
          "package": "HaRe",
          "partial": "TPGhc",
          "signature": "TP m-\u003eTP m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-GhcUtils.html#v:once_tdTPGhc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.GhcUtils",
          "name": "oneTPGhc",
          "package": "HaRe",
          "signature": "TP m -\u003e TP m",
          "source": "src/Language-Haskell-Refact-Utils-GhcUtils.html#oneTPGhc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils GhcUtils",
          "module": "Language.Haskell.Refact.Utils.GhcUtils",
          "name": "oneTPGhc",
          "normalized": "TP a-\u003eTP a",
          "package": "HaRe",
          "partial": "TPGhc",
          "signature": "TP m-\u003eTP m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-GhcUtils.html#v:oneTPGhc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLook up a subterm by means of a maybe-typed filter\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils.GhcUtils",
          "name": "somethingStaged",
          "package": "HaRe",
          "signature": "Stage -\u003e Maybe u -\u003e GenericQ (Maybe u) -\u003e GenericQ (Maybe u)",
          "source": "src/Language-Haskell-Refact-Utils-GhcUtils.html#somethingStaged",
          "type": "function"
        },
        "index": {
          "description": "Look up subterm by means of maybe-typed filter",
          "hierarchy": "Language Haskell Refact Utils GhcUtils",
          "module": "Language.Haskell.Refact.Utils.GhcUtils",
          "name": "somethingStaged",
          "normalized": "Stage-\u003eMaybe a-\u003eGenericQ(Maybe a)-\u003eGenericQ(Maybe a)",
          "package": "HaRe",
          "partial": "Staged",
          "signature": "Stage-\u003eMaybe u-\u003eGenericQ(Maybe u)-\u003eGenericQ(Maybe u)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-GhcUtils.html#v:somethingStaged"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a monadic transformation at least somewhere\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils.GhcUtils",
          "name": "somewhereMStaged",
          "package": "HaRe",
          "signature": "Stage -\u003e GenericM m -\u003e GenericM m",
          "source": "src/Language-Haskell-Refact-Utils-GhcUtils.html#somewhereMStaged",
          "type": "function"
        },
        "index": {
          "description": "Apply monadic transformation at least somewhere",
          "hierarchy": "Language Haskell Refact Utils GhcUtils",
          "module": "Language.Haskell.Refact.Utils.GhcUtils",
          "name": "somewhereMStaged",
          "normalized": "Stage-\u003eGenericM a-\u003eGenericM a",
          "package": "HaRe",
          "partial": "MStaged",
          "signature": "Stage-\u003eGenericM m-\u003eGenericM m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-GhcUtils.html#v:somewhereMStaged"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a monadic transformation at least somewhere, in bottom up order\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils.GhcUtils",
          "name": "somewhereMStagedBu",
          "package": "HaRe",
          "signature": "Stage -\u003e GenericM m -\u003e GenericM m",
          "source": "src/Language-Haskell-Refact-Utils-GhcUtils.html#somewhereMStagedBu",
          "type": "function"
        },
        "index": {
          "description": "Apply monadic transformation at least somewhere in bottom up order",
          "hierarchy": "Language Haskell Refact Utils GhcUtils",
          "module": "Language.Haskell.Refact.Utils.GhcUtils",
          "name": "somewhereMStagedBu",
          "normalized": "Stage-\u003eGenericM a-\u003eGenericM a",
          "package": "HaRe",
          "partial": "MStaged Bu",
          "signature": "Stage-\u003eGenericM m-\u003eGenericM m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-GhcUtils.html#v:somewhereMStagedBu"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTop-down type-unifying traversal that is cut of below nodes\n   where the argument strategy succeeds.\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils.GhcUtils",
          "name": "stop_tdTUGhc",
          "package": "HaRe",
          "signature": "TU a m -\u003e TU a m",
          "source": "src/Language-Haskell-Refact-Utils-GhcUtils.html#stop_tdTUGhc",
          "type": "function"
        },
        "index": {
          "description": "Top-down type-unifying traversal that is cut of below nodes where the argument strategy succeeds",
          "hierarchy": "Language Haskell Refact Utils GhcUtils",
          "module": "Language.Haskell.Refact.Utils.GhcUtils",
          "name": "stop_tdTUGhc",
          "normalized": "TU a b-\u003eTU a b",
          "package": "HaRe",
          "partial": "TUGhc",
          "signature": "TU a m-\u003eTU a m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-GhcUtils.html#v:stop_tdTUGhc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTransform a zipper opened with a given generic query\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils.GhcUtils",
          "name": "transZ",
          "package": "HaRe",
          "signature": "Stage -\u003e GenericQ Bool -\u003e (Stage -\u003e Zipper a -\u003e Zipper a) -\u003e Zipper a -\u003e Zipper a",
          "source": "src/Language-Haskell-Refact-Utils-GhcUtils.html#transZ",
          "type": "function"
        },
        "index": {
          "description": "Transform zipper opened with given generic query",
          "hierarchy": "Language Haskell Refact Utils GhcUtils",
          "module": "Language.Haskell.Refact.Utils.GhcUtils",
          "name": "transZ",
          "normalized": "Stage-\u003eGenericQ Bool-\u003e(Stage-\u003eZipper a-\u003eZipper a)-\u003eZipper a-\u003eZipper a",
          "package": "HaRe",
          "signature": "Stage-\u003eGenericQ Bool-\u003e(Stage-\u003eZipper a-\u003eZipper a)-\u003eZipper a-\u003eZipper a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-GhcUtils.html#v:transZ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMonadic transform of a zipper opened with a given generic query\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils.GhcUtils",
          "name": "transZM",
          "package": "HaRe",
          "signature": "Stage -\u003e GenericQ Bool -\u003e (Stage -\u003e Zipper a -\u003e m (Zipper a)) -\u003e Zipper a -\u003e m (Zipper a)",
          "source": "src/Language-Haskell-Refact-Utils-GhcUtils.html#transZM",
          "type": "function"
        },
        "index": {
          "description": "Monadic transform of zipper opened with given generic query",
          "hierarchy": "Language Haskell Refact Utils GhcUtils",
          "module": "Language.Haskell.Refact.Utils.GhcUtils",
          "name": "transZM",
          "normalized": "Stage-\u003eGenericQ Bool-\u003e(Stage-\u003eZipper a-\u003eb(Zipper a))-\u003eZipper a-\u003eb(Zipper a)",
          "package": "HaRe",
          "partial": "ZM",
          "signature": "Stage-\u003eGenericQ Bool-\u003e(Stage-\u003eZipper a-\u003em(Zipper a))-\u003eZipper a-\u003em(Zipper a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-GhcUtils.html#v:transZM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClimb the tree until a predicate holds\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils.GhcUtils",
          "name": "upUntil",
          "package": "HaRe",
          "signature": "GenericQ Bool -\u003e Zipper a -\u003e Maybe (Zipper a)",
          "source": "src/Language-Haskell-Refact-Utils-GhcUtils.html#upUntil",
          "type": "function"
        },
        "index": {
          "description": "Climb the tree until predicate holds",
          "hierarchy": "Language Haskell Refact Utils GhcUtils",
          "module": "Language.Haskell.Refact.Utils.GhcUtils",
          "name": "upUntil",
          "normalized": "GenericQ Bool-\u003eZipper a-\u003eMaybe(Zipper a)",
          "package": "HaRe",
          "partial": "Until",
          "signature": "GenericQ Bool-\u003eZipper a-\u003eMaybe(Zipper a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-GhcUtils.html#v:upUntil"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a generic transformation everywhere in a bottom-up manner.\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils.GhcUtils",
          "name": "zeverywhereStaged",
          "package": "HaRe",
          "signature": "Stage -\u003e GenericT -\u003e Zipper a -\u003e Zipper a",
          "source": "src/Language-Haskell-Refact-Utils-GhcUtils.html#zeverywhereStaged",
          "type": "function"
        },
        "index": {
          "description": "Apply generic transformation everywhere in bottom-up manner",
          "hierarchy": "Language Haskell Refact Utils GhcUtils",
          "module": "Language.Haskell.Refact.Utils.GhcUtils",
          "name": "zeverywhereStaged",
          "normalized": "Stage-\u003eGenericT-\u003eZipper a-\u003eZipper a",
          "package": "HaRe",
          "partial": "Staged",
          "signature": "Stage-\u003eGenericT-\u003eZipper a-\u003eZipper a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-GhcUtils.html#v:zeverywhereStaged"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOpen a zipper to the point where the Geneneric query passes.\n returns the original zipper if the query does not pass (check this)\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils.GhcUtils",
          "name": "zopenStaged",
          "package": "HaRe",
          "signature": "Stage -\u003e GenericQ Bool -\u003e Zipper a -\u003e [Zipper a]",
          "source": "src/Language-Haskell-Refact-Utils-GhcUtils.html#zopenStaged",
          "type": "function"
        },
        "index": {
          "description": "Open zipper to the point where the Geneneric query passes returns the original zipper if the query does not pass check this",
          "hierarchy": "Language Haskell Refact Utils GhcUtils",
          "module": "Language.Haskell.Refact.Utils.GhcUtils",
          "name": "zopenStaged",
          "normalized": "Stage-\u003eGenericQ Bool-\u003eZipper a-\u003e[Zipper a]",
          "package": "HaRe",
          "partial": "Staged",
          "signature": "Stage-\u003eGenericQ Bool-\u003eZipper a-\u003e[Zipper a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-GhcUtils.html#v:zopenStaged"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOpen a zipper to the point where the Generic query passes,\n returning the zipper and a value from the specific part of the\n GenericQ that matched. This allows the components of the query to\n return a specific transformation routine, to apply to the returned zipper\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils.GhcUtils",
          "name": "zopenStaged'",
          "package": "HaRe",
          "signature": "Stage -\u003e GenericQ (Maybe b) -\u003e Zipper a -\u003e [(Zipper a, b)]",
          "source": "src/Language-Haskell-Refact-Utils-GhcUtils.html#zopenStaged%27",
          "type": "function"
        },
        "index": {
          "description": "Open zipper to the point where the Generic query passes returning the zipper and value from the specific part of the GenericQ that matched This allows the components of the query to return specific transformation routine to apply to the returned zipper",
          "hierarchy": "Language Haskell Refact Utils GhcUtils",
          "module": "Language.Haskell.Refact.Utils.GhcUtils",
          "name": "zopenStaged'",
          "normalized": "Stage-\u003eGenericQ(Maybe a)-\u003eZipper b-\u003e[(Zipper b,a)]",
          "package": "HaRe",
          "partial": "Staged'",
          "signature": "Stage-\u003eGenericQ(Maybe b)-\u003eZipper a-\u003e[(Zipper a,b)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-GhcUtils.html#v:zopenStaged-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a generic monadic transformation once at the topmost\n leftmost successful location, avoiding holes in the GHC structures\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils.GhcUtils",
          "name": "zsomewhereStaged",
          "package": "HaRe",
          "signature": "Stage -\u003e GenericM m -\u003e Zipper a -\u003e m (Zipper a)",
          "source": "src/Language-Haskell-Refact-Utils-GhcUtils.html#zsomewhereStaged",
          "type": "function"
        },
        "index": {
          "description": "Apply generic monadic transformation once at the topmost leftmost successful location avoiding holes in the GHC structures",
          "hierarchy": "Language Haskell Refact Utils GhcUtils",
          "module": "Language.Haskell.Refact.Utils.GhcUtils",
          "name": "zsomewhereStaged",
          "normalized": "Stage-\u003eGenericM a-\u003eZipper b-\u003ea(Zipper b)",
          "package": "HaRe",
          "partial": "Staged",
          "signature": "Stage-\u003eGenericM m-\u003eZipper a-\u003em(Zipper a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-GhcUtils.html#v:zsomewhereStaged"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOpen a zipper to the point where the Generic query passes,\n and apply the transformation returned from the specific part of the\n GenericQ that matched.\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils.GhcUtils",
          "name": "ztransformStagedM",
          "package": "HaRe",
          "signature": "Stage -\u003e GenericQ (Maybe (Stage -\u003e Zipper a -\u003e m (Zipper a))) -\u003e Zipper a -\u003e m (Zipper a)",
          "source": "src/Language-Haskell-Refact-Utils-GhcUtils.html#ztransformStagedM",
          "type": "function"
        },
        "index": {
          "description": "Open zipper to the point where the Generic query passes and apply the transformation returned from the specific part of the GenericQ that matched",
          "hierarchy": "Language Haskell Refact Utils GhcUtils",
          "module": "Language.Haskell.Refact.Utils.GhcUtils",
          "name": "ztransformStagedM",
          "normalized": "Stage-\u003eGenericQ(Maybe(Stage-\u003eZipper a-\u003eb(Zipper a)))-\u003eZipper a-\u003eb(Zipper a)",
          "package": "HaRe",
          "partial": "Staged",
          "signature": "Stage-\u003eGenericQ(Maybe(Stage-\u003eZipper a-\u003em(Zipper a)))-\u003eZipper a-\u003em(Zipper a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-GhcUtils.html#v:ztransformStagedM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module contains all the code that depends on a specific\n version of GHC, and should be the only one requiring CPP\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Language.Haskell.Refact.Utils.GhcVersionSpecific",
          "name": "GhcVersionSpecific",
          "package": "HaRe",
          "source": "src/Language-Haskell-Refact-Utils-GhcVersionSpecific.html",
          "type": "module"
        },
        "index": {
          "description": "This module contains all the code that depends on specific version of GHC and should be the only one requiring CPP",
          "hierarchy": "Language Haskell Refact Utils GhcVersionSpecific",
          "module": "Language.Haskell.Refact.Utils.GhcVersionSpecific",
          "name": "GhcVersionSpecific",
          "package": "HaRe",
          "partial": "Ghc Version Specific",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-GhcVersionSpecific.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.GhcVersionSpecific",
          "name": "getDataConstructors",
          "package": "HaRe",
          "signature": "LHsDecl n -\u003e [LConDecl n]",
          "source": "src/Language-Haskell-Refact-Utils-GhcVersionSpecific.html#getDataConstructors",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils GhcVersionSpecific",
          "module": "Language.Haskell.Refact.Utils.GhcVersionSpecific",
          "name": "getDataConstructors",
          "normalized": "LHsDecl a-\u003e[LConDecl a]",
          "package": "HaRe",
          "partial": "Data Constructors",
          "signature": "LHsDecl n-\u003e[LConDecl n]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-GhcVersionSpecific.html#v:getDataConstructors"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Language.Haskell.Refact.Utils.GhcVersionSpecific\",\"Language.Haskell.Refact.Utils.LocUtils\"]",
          "name": "lexStringToRichTokens",
          "package": "HaRe",
          "signature": "RealSrcLoc -\u003e String -\u003e IO [PosToken]",
          "source": "src/Language-Haskell-Refact-Utils-GhcVersionSpecific.html#lexStringToRichTokens",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-GhcVersionSpecific.html#v:lexStringToRichTokens\",\"http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-LocUtils.html#v:lexStringToRichTokens\"]"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils GhcVersionSpecific",
          "module": "Language.Haskell.Refact.Utils.GhcVersionSpecific",
          "name": "lexStringToRichTokens",
          "normalized": "RealSrcLoc-\u003eString-\u003eIO[PosToken]",
          "package": "HaRe",
          "partial": "String To Rich Tokens",
          "signature": "RealSrcLoc-\u003eString-\u003eIO[PosToken]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-GhcVersionSpecific.html#v:lexStringToRichTokens"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Language.Haskell.Refact.Utils.GhcVersionSpecific\",\"Language.Haskell.Refact.Utils.LocUtils\",\"Language.Haskell.Refact.Utils.TypeUtils\"]",
          "name": "prettyprint",
          "package": "HaRe",
          "signature": "a -\u003e String",
          "source": "src/Language-Haskell-Refact-Utils-GhcVersionSpecific.html#prettyprint",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-GhcVersionSpecific.html#v:prettyprint\",\"http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-LocUtils.html#v:prettyprint\",\"http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TypeUtils.html#v:prettyprint\"]"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils GhcVersionSpecific",
          "module": "Language.Haskell.Refact.Utils.GhcVersionSpecific",
          "name": "prettyprint",
          "normalized": "a-\u003eString",
          "package": "HaRe",
          "signature": "a-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-GhcVersionSpecific.html#v:prettyprint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Language.Haskell.Refact.Utils.GhcVersionSpecific\",\"Language.Haskell.Refact.Utils.TypeUtils\"]",
          "name": "prettyprint2",
          "package": "HaRe",
          "signature": "a -\u003e String",
          "source": "src/Language-Haskell-Refact-Utils-GhcVersionSpecific.html#prettyprint2",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-GhcVersionSpecific.html#v:prettyprint2\",\"http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TypeUtils.html#v:prettyprint2\"]"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils GhcVersionSpecific",
          "module": "Language.Haskell.Refact.Utils.GhcVersionSpecific",
          "name": "prettyprint2",
          "normalized": "a-\u003eString",
          "package": "HaRe",
          "signature": "a-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-GhcVersionSpecific.html#v:prettyprint2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.GhcVersionSpecific",
          "name": "setGhcContext",
          "package": "HaRe",
          "signature": "ModSummary -\u003e m ()",
          "source": "src/Language-Haskell-Refact-Utils-GhcVersionSpecific.html#setGhcContext",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils GhcVersionSpecific",
          "module": "Language.Haskell.Refact.Utils.GhcVersionSpecific",
          "name": "setGhcContext",
          "normalized": "ModSummary-\u003ea()",
          "package": "HaRe",
          "partial": "Ghc Context",
          "signature": "ModSummary-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-GhcVersionSpecific.html#v:setGhcContext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShow a GHC API structure\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils.GhcVersionSpecific",
          "name": "showGhc",
          "package": "HaRe",
          "signature": "a -\u003e String",
          "source": "src/Language-Haskell-Refact-Utils-GhcVersionSpecific.html#showGhc",
          "type": "function"
        },
        "index": {
          "description": "Show GHC API structure",
          "hierarchy": "Language Haskell Refact Utils GhcVersionSpecific",
          "module": "Language.Haskell.Refact.Utils.GhcVersionSpecific",
          "name": "showGhc",
          "normalized": "a-\u003eString",
          "package": "HaRe",
          "partial": "Ghc",
          "signature": "a-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-GhcVersionSpecific.html#v:showGhc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.Layout",
          "name": "Layout",
          "package": "HaRe",
          "source": "src/Language-Haskell-Refact-Utils-Layout.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils Layout",
          "module": "Language.Haskell.Refact.Utils.Layout",
          "name": "Layout",
          "package": "HaRe",
          "partial": "Layout",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-Layout.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.Layout",
          "name": "addEndOffsets",
          "package": "HaRe",
          "signature": "LayoutTree -\u003e [PosToken] -\u003e LayoutTree",
          "source": "src/Language-Haskell-Refact-Utils-Layout.html#addEndOffsets",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils Layout",
          "module": "Language.Haskell.Refact.Utils.Layout",
          "name": "addEndOffsets",
          "normalized": "LayoutTree-\u003e[PosToken]-\u003eLayoutTree",
          "package": "HaRe",
          "partial": "End Offsets",
          "signature": "LayoutTree-\u003e[PosToken]-\u003eLayoutTree",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-Layout.html#v:addEndOffsets"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.Layout",
          "name": "allocTokens",
          "package": "HaRe",
          "signature": "ParsedSource -\u003e [PosToken] -\u003e LayoutTree",
          "source": "src/Language-Haskell-Refact-Utils-Layout.html#allocTokens",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils Layout",
          "module": "Language.Haskell.Refact.Utils.Layout",
          "name": "allocTokens",
          "normalized": "ParsedSource-\u003e[PosToken]-\u003eLayoutTree",
          "package": "HaRe",
          "partial": "Tokens",
          "signature": "ParsedSource-\u003e[PosToken]-\u003eLayoutTree",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-Layout.html#v:allocTokens"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.Layout",
          "name": "getLoc",
          "package": "HaRe",
          "signature": "LayoutTree -\u003e ForestSpan",
          "source": "src/Language-Haskell-Refact-Utils-Layout.html#getLoc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils Layout",
          "module": "Language.Haskell.Refact.Utils.Layout",
          "name": "getLoc",
          "normalized": "LayoutTree-\u003eForestSpan",
          "package": "HaRe",
          "partial": "Loc",
          "signature": "LayoutTree-\u003eForestSpan",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-Layout.html#v:getLoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.Layout",
          "name": "initTokenLayout",
          "package": "HaRe",
          "signature": "ParsedSource -\u003e [PosToken] -\u003e LayoutTree",
          "source": "src/Language-Haskell-Refact-Utils-Layout.html#initTokenLayout",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils Layout",
          "module": "Language.Haskell.Refact.Utils.Layout",
          "name": "initTokenLayout",
          "normalized": "ParsedSource-\u003e[PosToken]-\u003eLayoutTree",
          "package": "HaRe",
          "partial": "Token Layout",
          "signature": "ParsedSource-\u003e[PosToken]-\u003eLayoutTree",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-Layout.html#v:initTokenLayout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.Layout",
          "name": "nullTokenLayout",
          "package": "HaRe",
          "signature": "TokenLayout",
          "source": "src/Language-Haskell-Refact-Utils-Layout.html#nullTokenLayout",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils Layout",
          "module": "Language.Haskell.Refact.Utils.Layout",
          "name": "nullTokenLayout",
          "package": "HaRe",
          "partial": "Token Layout",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-Layout.html#v:nullTokenLayout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.Layout",
          "name": "retrieveTokens",
          "package": "HaRe",
          "signature": "LayoutTree -\u003e [PosToken]",
          "source": "src/Language-Haskell-Refact-Utils-Layout.html#retrieveTokens",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils Layout",
          "module": "Language.Haskell.Refact.Utils.Layout",
          "name": "retrieveTokens",
          "normalized": "LayoutTree-\u003e[PosToken]",
          "package": "HaRe",
          "partial": "Tokens",
          "signature": "LayoutTree-\u003e[PosToken]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-Layout.html#v:retrieveTokens"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.LayoutTypes",
          "name": "LayoutTypes",
          "package": "HaRe",
          "source": "src/Language-Haskell-Refact-Utils-LayoutTypes.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils LayoutTypes",
          "module": "Language.Haskell.Refact.Utils.LayoutTypes",
          "name": "LayoutTypes",
          "package": "HaRe",
          "partial": "Layout Types",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-LayoutTypes.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.LayoutTypes",
          "name": "Label",
          "package": "HaRe",
          "source": "src/Language-Haskell-Refact-Utils-LayoutTypes.html#Label",
          "type": "data"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils LayoutTypes",
          "module": "Language.Haskell.Refact.Utils.LayoutTypes",
          "name": "Label",
          "package": "HaRe",
          "partial": "Label",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-LayoutTypes.html#t:Label"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.LayoutTypes",
          "name": "LayoutTree",
          "package": "HaRe",
          "source": "src/Language-Haskell-Refact-Utils-LayoutTypes.html#LayoutTree",
          "type": "type"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils LayoutTypes",
          "module": "Language.Haskell.Refact.Utils.LayoutTypes",
          "name": "LayoutTree",
          "package": "HaRe",
          "partial": "Layout Tree",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-LayoutTypes.html#t:LayoutTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.LayoutTypes",
          "name": "TokenLayout",
          "package": "HaRe",
          "source": "src/Language-Haskell-Refact-Utils-LayoutTypes.html#TokenLayout",
          "type": "data"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils LayoutTypes",
          "module": "Language.Haskell.Refact.Utils.LayoutTypes",
          "name": "TokenLayout",
          "package": "HaRe",
          "partial": "Token Layout",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-LayoutTypes.html#t:TokenLayout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.LayoutTypes",
          "name": "Label",
          "package": "HaRe",
          "signature": "Label SrcSpan Layout [PosToken]",
          "source": "src/Language-Haskell-Refact-Utils-LayoutTypes.html#Label",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils LayoutTypes",
          "module": "Language.Haskell.Refact.Utils.LayoutTypes",
          "name": "Label",
          "normalized": "Label SrcSpan Layout[PosToken]",
          "package": "HaRe",
          "partial": "Label",
          "signature": "Label SrcSpan Layout[PosToken]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-LayoutTypes.html#v:Label"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.LayoutTypes",
          "name": "TL",
          "package": "HaRe",
          "signature": "TL (Tree Entry)",
          "source": "src/Language-Haskell-Refact-Utils-LayoutTypes.html#TokenLayout",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils LayoutTypes",
          "module": "Language.Haskell.Refact.Utils.LayoutTypes",
          "name": "TL",
          "package": "HaRe",
          "partial": "TL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-LayoutTypes.html#v:TL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.LayoutUtils",
          "name": "LayoutUtils",
          "package": "HaRe",
          "source": "src/Language-Haskell-Refact-Utils-LayoutUtils.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils LayoutUtils",
          "module": "Language.Haskell.Refact.Utils.LayoutUtils",
          "name": "LayoutUtils",
          "package": "HaRe",
          "partial": "Layout Utils",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-LayoutUtils.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.LayoutUtils",
          "name": "showLTOne",
          "package": "HaRe",
          "signature": "LayoutTree -\u003e String",
          "source": "src/Language-Haskell-Refact-Utils-LayoutUtils.html#showLTOne",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils LayoutUtils",
          "module": "Language.Haskell.Refact.Utils.LayoutUtils",
          "name": "showLTOne",
          "normalized": "LayoutTree-\u003eString",
          "package": "HaRe",
          "partial": "LTOne",
          "signature": "LayoutTree-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-LayoutUtils.html#v:showLTOne"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.LocUtils",
          "name": "LocUtils",
          "package": "HaRe",
          "source": "src/Language-Haskell-Refact-Utils-LocUtils.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils LocUtils",
          "module": "Language.Haskell.Refact.Utils.LocUtils",
          "name": "LocUtils",
          "package": "HaRe",
          "partial": "Loc Utils",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-LocUtils.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.LocUtils",
          "name": "SimpPos",
          "package": "HaRe",
          "source": "src/Language-Haskell-Refact-Utils-TypeSyn.html#SimpPos",
          "type": "type"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils LocUtils",
          "module": "Language.Haskell.Refact.Utils.LocUtils",
          "name": "SimpPos",
          "package": "HaRe",
          "partial": "Simp Pos",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-LocUtils.html#t:SimpPos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.LocUtils",
          "name": "addLocInfo",
          "package": "HaRe",
          "signature": "(LHsBind Name, [PosToken]) -\u003e RefactGhc (LHsBind Name, [PosToken])",
          "source": "src/Language-Haskell-Refact-Utils-LocUtils.html#addLocInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils LocUtils",
          "module": "Language.Haskell.Refact.Utils.LocUtils",
          "name": "addLocInfo",
          "normalized": "(LHsBind Name,[PosToken])-\u003eRefactGhc(LHsBind Name,[PosToken])",
          "package": "HaRe",
          "partial": "Loc Info",
          "signature": "(LHsBind Name,[PosToken])-\u003eRefactGhc(LHsBind Name,[PosToken])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-LocUtils.html#v:addLocInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd a constant line and column offset to a span of tokens\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils.LocUtils",
          "name": "addOffsetToToks",
          "package": "HaRe",
          "signature": "SimpPos -\u003e [PosToken] -\u003e [PosToken]",
          "source": "src/Language-Haskell-Refact-Utils-LocUtils.html#addOffsetToToks",
          "type": "function"
        },
        "index": {
          "description": "Add constant line and column offset to span of tokens",
          "hierarchy": "Language Haskell Refact Utils LocUtils",
          "module": "Language.Haskell.Refact.Utils.LocUtils",
          "name": "addOffsetToToks",
          "normalized": "SimpPos-\u003e[PosToken]-\u003e[PosToken]",
          "package": "HaRe",
          "partial": "Offset To Toks",
          "signature": "SimpPos-\u003e[PosToken]-\u003e[PosToken]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-LocUtils.html#v:addOffsetToToks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a string into a set of Haskell tokens. It has default\n position and offset, since it will be stitched into place in TokenUtils\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils.LocUtils",
          "name": "basicTokenise",
          "package": "HaRe",
          "signature": "String -\u003e IO [PosToken]",
          "source": "src/Language-Haskell-Refact-Utils-LocUtils.html#basicTokenise",
          "type": "function"
        },
        "index": {
          "description": "Convert string into set of Haskell tokens It has default position and offset since it will be stitched into place in TokenUtils",
          "hierarchy": "Language Haskell Refact Utils LocUtils",
          "module": "Language.Haskell.Refact.Utils.LocUtils",
          "name": "basicTokenise",
          "normalized": "String-\u003eIO[PosToken]",
          "package": "HaRe",
          "partial": "Tokenise",
          "signature": "String-\u003eIO[PosToken]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-LocUtils.html#v:basicTokenise"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemove the following extra empty lines.\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils.LocUtils",
          "name": "compressEndNewLns",
          "package": "HaRe",
          "signature": "[PosToken] -\u003e [PosToken]",
          "source": "src/Language-Haskell-Refact-Utils-LocUtils.html#compressEndNewLns",
          "type": "function"
        },
        "index": {
          "description": "Remove the following extra empty lines",
          "hierarchy": "Language Haskell Refact Utils LocUtils",
          "module": "Language.Haskell.Refact.Utils.LocUtils",
          "name": "compressEndNewLns",
          "normalized": "[PosToken]-\u003e[PosToken]",
          "package": "HaRe",
          "partial": "End New Lns",
          "signature": "[PosToken]-\u003e[PosToken]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-LocUtils.html#v:compressEndNewLns"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemove the extra preceding  empty lines.\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils.LocUtils",
          "name": "compressPreNewLns",
          "package": "HaRe",
          "signature": "[PosToken] -\u003e [PosToken]",
          "source": "src/Language-Haskell-Refact-Utils-LocUtils.html#compressPreNewLns",
          "type": "function"
        },
        "index": {
          "description": "Remove the extra preceding empty lines",
          "hierarchy": "Language Haskell Refact Utils LocUtils",
          "module": "Language.Haskell.Refact.Utils.LocUtils",
          "name": "compressPreNewLns",
          "normalized": "[PosToken]-\u003e[PosToken]",
          "package": "HaRe",
          "partial": "Pre New Lns",
          "signature": "[PosToken]-\u003e[PosToken]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-LocUtils.html#v:compressPreNewLns"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDelete a sequence of tokens specified by the start position and\n end position from the token stream, then adjust the remaining token\n stream to preserve layout\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils.LocUtils",
          "name": "deleteToks",
          "package": "HaRe",
          "signature": "[PosToken] -\u003e SimpPos -\u003e SimpPos -\u003e [PosToken]",
          "source": "src/Language-Haskell-Refact-Utils-LocUtils.html#deleteToks",
          "type": "function"
        },
        "index": {
          "description": "Delete sequence of tokens specified by the start position and end position from the token stream then adjust the remaining token stream to preserve layout",
          "hierarchy": "Language Haskell Refact Utils LocUtils",
          "module": "Language.Haskell.Refact.Utils.LocUtils",
          "name": "deleteToks",
          "normalized": "[PosToken]-\u003eSimpPos-\u003eSimpPos-\u003e[PosToken]",
          "package": "HaRe",
          "partial": "Toks",
          "signature": "[PosToken]-\u003eSimpPos-\u003eSimpPos-\u003e[PosToken]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-LocUtils.html#v:deleteToks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSplit a set of comment tokens into the ones that belong with the startLine\n and those that belong with the endLine\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils.LocUtils",
          "name": "divideComments",
          "package": "HaRe",
          "signature": "Int -\u003e Int -\u003e [PosToken] -\u003e ([PosToken], [PosToken])",
          "source": "src/Language-Haskell-Refact-Utils-LocUtils.html#divideComments",
          "type": "function"
        },
        "index": {
          "description": "Split set of comment tokens into the ones that belong with the startLine and those that belong with the endLine",
          "hierarchy": "Language Haskell Refact Utils LocUtils",
          "module": "Language.Haskell.Refact.Utils.LocUtils",
          "name": "divideComments",
          "normalized": "Int-\u003eInt-\u003e[PosToken]-\u003e([PosToken],[PosToken])",
          "package": "HaRe",
          "partial": "Comments",
          "signature": "Int-\u003eInt-\u003e[PosToken]-\u003e([PosToken],[PosToken])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-LocUtils.html#v:divideComments"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eremove at most n white space tokens from the beginning of ts\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils.LocUtils",
          "name": "doRmWhites",
          "package": "HaRe",
          "signature": "Int -\u003e [PosToken] -\u003e [PosToken]",
          "source": "src/Language-Haskell-Refact-Utils-LocUtils.html#doRmWhites",
          "type": "function"
        },
        "index": {
          "description": "remove at most white space tokens from the beginning of ts",
          "hierarchy": "Language Haskell Refact Utils LocUtils",
          "module": "Language.Haskell.Refact.Utils.LocUtils",
          "name": "doRmWhites",
          "normalized": "Int-\u003e[PosToken]-\u003e[PosToken]",
          "package": "HaRe",
          "partial": "Rm Whites",
          "signature": "Int-\u003e[PosToken]-\u003e[PosToken]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-LocUtils.html#v:doRmWhites"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet around lack of instance Eq when simply testing for empty list\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils.LocUtils",
          "name": "emptyList",
          "package": "HaRe",
          "signature": "[t] -\u003e Bool",
          "source": "src/Language-Haskell-Refact-Utils-LocUtils.html#emptyList",
          "type": "function"
        },
        "index": {
          "description": "Get around lack of instance Eq when simply testing for empty list",
          "hierarchy": "Language Haskell Refact Utils LocUtils",
          "module": "Language.Haskell.Refact.Utils.LocUtils",
          "name": "emptyList",
          "normalized": "[a]-\u003eBool",
          "package": "HaRe",
          "partial": "List",
          "signature": "[t]-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-LocUtils.html#v:emptyList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns True if the token ends with '\\n'\n ++AZ++: is this meaningful?\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils.LocUtils",
          "name": "endsWithNewLn",
          "package": "HaRe",
          "signature": "PosToken -\u003e Bool",
          "source": "src/Language-Haskell-Refact-Utils-LocUtils.html#endsWithNewLn",
          "type": "function"
        },
        "index": {
          "description": "Returns True if the token ends with AZ is this meaningful",
          "hierarchy": "Language Haskell Refact Utils LocUtils",
          "module": "Language.Haskell.Refact.Utils.LocUtils",
          "name": "endsWithNewLn",
          "normalized": "PosToken-\u003eBool",
          "package": "HaRe",
          "partial": "With New Ln",
          "signature": "PosToken-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-LocUtils.html#v:endsWithNewLn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtend the given position backwards to the front of the file while\n the supplied condition holds\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils.LocUtils",
          "name": "extendBackwards",
          "package": "HaRe",
          "signature": "[PosToken] -\u003e (SimpPos, SimpPos) -\u003e (PosToken -\u003e Bool) -\u003e (SimpPos, SimpPos)",
          "source": "src/Language-Haskell-Refact-Utils-LocUtils.html#extendBackwards",
          "type": "function"
        },
        "index": {
          "description": "Extend the given position backwards to the front of the file while the supplied condition holds",
          "hierarchy": "Language Haskell Refact Utils LocUtils",
          "module": "Language.Haskell.Refact.Utils.LocUtils",
          "name": "extendBackwards",
          "normalized": "[PosToken]-\u003e(SimpPos,SimpPos)-\u003e(PosToken-\u003eBool)-\u003e(SimpPos,SimpPos)",
          "package": "HaRe",
          "partial": "Backwards",
          "signature": "[PosToken]-\u003e(SimpPos,SimpPos)-\u003e(PosToken-\u003eBool)-\u003e(SimpPos,SimpPos)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-LocUtils.html#v:extendBackwards"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtend the given position forwards to the end of the file while\n the supplied condition holds\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils.LocUtils",
          "name": "extendForwards",
          "package": "HaRe",
          "signature": "[PosToken] -\u003e (SimpPos, SimpPos) -\u003e (PosToken -\u003e Bool) -\u003e (SimpPos, SimpPos)",
          "source": "src/Language-Haskell-Refact-Utils-LocUtils.html#extendForwards",
          "type": "function"
        },
        "index": {
          "description": "Extend the given position forwards to the end of the file while the supplied condition holds",
          "hierarchy": "Language Haskell Refact Utils LocUtils",
          "module": "Language.Haskell.Refact.Utils.LocUtils",
          "name": "extendForwards",
          "normalized": "[PosToken]-\u003e(SimpPos,SimpPos)-\u003e(PosToken-\u003eBool)-\u003e(SimpPos,SimpPos)",
          "package": "HaRe",
          "partial": "Forwards",
          "signature": "[PosToken]-\u003e(SimpPos,SimpPos)-\u003e(PosToken-\u003eBool)-\u003e(SimpPos,SimpPos)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-LocUtils.html#v:extendForwards"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Language.Haskell.Refact.Utils.LocUtils\",\"Language.Haskell.Refact.Utils.TokenUtils\"]",
          "name": "fileNameFromTok",
          "package": "HaRe",
          "signature": "PosToken -\u003e FastString",
          "source": "src/Language-Haskell-Refact-Utils-LocUtils.html#fileNameFromTok",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-LocUtils.html#v:fileNameFromTok\",\"http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TokenUtils.html#v:fileNameFromTok\"]"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils LocUtils",
          "module": "Language.Haskell.Refact.Utils.LocUtils",
          "name": "fileNameFromTok",
          "normalized": "PosToken-\u003eFastString",
          "package": "HaRe",
          "partial": "Name From Tok",
          "signature": "PosToken-\u003eFastString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-LocUtils.html#v:fileNameFromTok"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet all the source locations in a given syntax fragment\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils.LocUtils",
          "name": "getAllSrcLocs",
          "package": "HaRe",
          "signature": "t -\u003e [(SimpPos, SimpPos)]",
          "source": "src/Language-Haskell-Refact-Utils-LocUtils.html#getAllSrcLocs",
          "type": "function"
        },
        "index": {
          "description": "Get all the source locations in given syntax fragment",
          "hierarchy": "Language Haskell Refact Utils LocUtils",
          "module": "Language.Haskell.Refact.Utils.LocUtils",
          "name": "getAllSrcLocs",
          "normalized": "a-\u003e[(SimpPos,SimpPos)]",
          "package": "HaRe",
          "partial": "All Src Locs",
          "signature": "t-\u003e[(SimpPos,SimpPos)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-LocUtils.html#v:getAllSrcLocs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.LocUtils",
          "name": "getBiggestStartEndLoc",
          "package": "HaRe",
          "signature": "t -\u003e (SimpPos, SimpPos)",
          "source": "src/Language-Haskell-Refact-Utils-LocUtils.html#getBiggestStartEndLoc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils LocUtils",
          "module": "Language.Haskell.Refact.Utils.LocUtils",
          "name": "getBiggestStartEndLoc",
          "normalized": "a-\u003e(SimpPos,SimpPos)",
          "package": "HaRe",
          "partial": "Biggest Start End Loc",
          "signature": "t-\u003e(SimpPos,SimpPos)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-LocUtils.html#v:getBiggestStartEndLoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.LocUtils",
          "name": "getGhcLoc",
          "package": "HaRe",
          "signature": "SrcSpan -\u003e (Int, Int)",
          "source": "src/Language-Haskell-Refact-Utils-LocUtils.html#getGhcLoc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils LocUtils",
          "module": "Language.Haskell.Refact.Utils.LocUtils",
          "name": "getGhcLoc",
          "normalized": "SrcSpan-\u003e(Int,Int)",
          "package": "HaRe",
          "partial": "Ghc Loc",
          "signature": "SrcSpan-\u003e(Int,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-LocUtils.html#v:getGhcLoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.LocUtils",
          "name": "getGhcLocEnd",
          "package": "HaRe",
          "signature": "SrcSpan -\u003e (Int, Int)",
          "source": "src/Language-Haskell-Refact-Utils-LocUtils.html#getGhcLocEnd",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils LocUtils",
          "module": "Language.Haskell.Refact.Utils.LocUtils",
          "name": "getGhcLocEnd",
          "normalized": "SrcSpan-\u003e(Int,Int)",
          "package": "HaRe",
          "partial": "Ghc Loc End",
          "signature": "SrcSpan-\u003e(Int,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-LocUtils.html#v:getGhcLocEnd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the indent of the line before, taking into account in-line\n 'where', 'let', 'in' and 'do' tokens\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils.LocUtils",
          "name": "getIndentOffset",
          "package": "HaRe",
          "signature": "[PosToken] -\u003e SimpPos -\u003e Int",
          "source": "src/Language-Haskell-Refact-Utils-LocUtils.html#getIndentOffset",
          "type": "function"
        },
        "index": {
          "description": "Get the indent of the line before taking into account in-line where let in and do tokens",
          "hierarchy": "Language Haskell Refact Utils LocUtils",
          "module": "Language.Haskell.Refact.Utils.LocUtils",
          "name": "getIndentOffset",
          "normalized": "[PosToken]-\u003eSimpPos-\u003eInt",
          "package": "HaRe",
          "partial": "Indent Offset",
          "signature": "[PosToken]-\u003eSimpPos-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-LocUtils.html#v:getIndentOffset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the start of the line before the pos,\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils.LocUtils",
          "name": "getLineOffset",
          "package": "HaRe",
          "signature": "[PosToken] -\u003e SimpPos -\u003e Int",
          "source": "src/Language-Haskell-Refact-Utils-LocUtils.html#getLineOffset",
          "type": "function"
        },
        "index": {
          "description": "Get the start of the line before the pos",
          "hierarchy": "Language Haskell Refact Utils LocUtils",
          "module": "Language.Haskell.Refact.Utils.LocUtils",
          "name": "getLineOffset",
          "normalized": "[PosToken]-\u003eSimpPos-\u003eInt",
          "package": "HaRe",
          "partial": "Line Offset",
          "signature": "[PosToken]-\u003eSimpPos-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-LocUtils.html#v:getLineOffset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.LocUtils",
          "name": "getLocatedEnd",
          "package": "HaRe",
          "signature": "GenLocated SrcSpan t -\u003e (Int, Int)",
          "source": "src/Language-Haskell-Refact-Utils-LocUtils.html#getLocatedEnd",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils LocUtils",
          "module": "Language.Haskell.Refact.Utils.LocUtils",
          "name": "getLocatedEnd",
          "normalized": "GenLocated SrcSpan a-\u003e(Int,Int)",
          "package": "HaRe",
          "partial": "Located End",
          "signature": "GenLocated SrcSpan t-\u003e(Int,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-LocUtils.html#v:getLocatedEnd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.LocUtils",
          "name": "getLocatedStart",
          "package": "HaRe",
          "signature": "GenLocated SrcSpan t -\u003e (Int, Int)",
          "source": "src/Language-Haskell-Refact-Utils-LocUtils.html#getLocatedStart",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils LocUtils",
          "module": "Language.Haskell.Refact.Utils.LocUtils",
          "name": "getLocatedStart",
          "normalized": "GenLocated SrcSpan a-\u003e(Int,Int)",
          "package": "HaRe",
          "partial": "Located Start",
          "signature": "GenLocated SrcSpan t-\u003e(Int,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-LocUtils.html#v:getLocatedStart"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the first SrcSpan found, in top down traversal\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils.LocUtils",
          "name": "getSrcSpan",
          "package": "HaRe",
          "signature": "t -\u003e Maybe SrcSpan",
          "source": "src/Language-Haskell-Refact-Utils-LocUtils.html#getSrcSpan",
          "type": "function"
        },
        "index": {
          "description": "Get the first SrcSpan found in top down traversal",
          "hierarchy": "Language Haskell Refact Utils LocUtils",
          "module": "Language.Haskell.Refact.Utils.LocUtils",
          "name": "getSrcSpan",
          "normalized": "a-\u003eMaybe SrcSpan",
          "package": "HaRe",
          "partial": "Src Span",
          "signature": "t-\u003eMaybe SrcSpan",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-LocUtils.html#v:getSrcSpan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.LocUtils",
          "name": "getStartEndLoc",
          "package": "HaRe",
          "signature": "t -\u003e (SimpPos, SimpPos)",
          "source": "src/Language-Haskell-Refact-Utils-LocUtils.html#getStartEndLoc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils LocUtils",
          "module": "Language.Haskell.Refact.Utils.LocUtils",
          "name": "getStartEndLoc",
          "normalized": "a-\u003e(SimpPos,SimpPos)",
          "package": "HaRe",
          "partial": "Start End Loc",
          "signature": "t-\u003e(SimpPos,SimpPos)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-LocUtils.html#v:getStartEndLoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eget a token stream specified by the start and end position.\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils.LocUtils",
          "name": "getToks",
          "package": "HaRe",
          "signature": "(SimpPos, SimpPos) -\u003e [PosToken] -\u003e [PosToken]",
          "source": "src/Language-Haskell-Refact-Utils-LocUtils.html#getToks",
          "type": "function"
        },
        "index": {
          "description": "get token stream specified by the start and end position",
          "hierarchy": "Language Haskell Refact Utils LocUtils",
          "module": "Language.Haskell.Refact.Utils.LocUtils",
          "name": "getToks",
          "normalized": "(SimpPos,SimpPos)-\u003e[PosToken]-\u003e[PosToken]",
          "package": "HaRe",
          "partial": "Toks",
          "signature": "(SimpPos,SimpPos)-\u003e[PosToken]-\u003e[PosToken]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-LocUtils.html#v:getToks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.LocUtils",
          "name": "groupTokensByLine",
          "package": "HaRe",
          "signature": "[PosToken] -\u003e [[PosToken]]",
          "source": "src/Language-Haskell-Refact-Utils-LocUtils.html#groupTokensByLine",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils LocUtils",
          "module": "Language.Haskell.Refact.Utils.LocUtils",
          "name": "groupTokensByLine",
          "normalized": "[PosToken]-\u003e[[PosToken]]",
          "package": "HaRe",
          "partial": "Tokens By Line",
          "signature": "[PosToken]-\u003e[[PosToken]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-LocUtils.html#v:groupTokensByLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.LocUtils",
          "name": "hasNewLn",
          "package": "HaRe",
          "signature": "PosToken -\u003e Bool",
          "source": "src/Language-Haskell-Refact-Utils-LocUtils.html#hasNewLn",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils LocUtils",
          "module": "Language.Haskell.Refact.Utils.LocUtils",
          "name": "hasNewLn",
          "normalized": "PosToken-\u003eBool",
          "package": "HaRe",
          "partial": "New Ln",
          "signature": "PosToken-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-LocUtils.html#v:hasNewLn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.LocUtils",
          "name": "increaseSrcSpan",
          "package": "HaRe",
          "signature": "SimpPos -\u003e PosToken -\u003e PosToken",
          "source": "src/Language-Haskell-Refact-Utils-LocUtils.html#increaseSrcSpan",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils LocUtils",
          "module": "Language.Haskell.Refact.Utils.LocUtils",
          "name": "increaseSrcSpan",
          "normalized": "SimpPos-\u003ePosToken-\u003ePosToken",
          "package": "HaRe",
          "partial": "Src Span",
          "signature": "SimpPos-\u003ePosToken-\u003ePosToken",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-LocUtils.html#v:increaseSrcSpan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.LocUtils",
          "name": "isBar",
          "package": "HaRe",
          "signature": "PosToken -\u003e Bool",
          "source": "src/Language-Haskell-Refact-Utils-LocUtils.html#isBar",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils LocUtils",
          "module": "Language.Haskell.Refact.Utils.LocUtils",
          "name": "isBar",
          "normalized": "PosToken-\u003eBool",
          "package": "HaRe",
          "partial": "Bar",
          "signature": "PosToken-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-LocUtils.html#v:isBar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.LocUtils",
          "name": "isCloseSquareBracket",
          "package": "HaRe",
          "signature": "PosToken -\u003e Bool",
          "source": "src/Language-Haskell-Refact-Utils-LocUtils.html#isCloseSquareBracket",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils LocUtils",
          "module": "Language.Haskell.Refact.Utils.LocUtils",
          "name": "isCloseSquareBracket",
          "normalized": "PosToken-\u003eBool",
          "package": "HaRe",
          "partial": "Close Square Bracket",
          "signature": "PosToken-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-LocUtils.html#v:isCloseSquareBracket"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.LocUtils",
          "name": "isComma",
          "package": "HaRe",
          "signature": "PosToken -\u003e Bool",
          "source": "src/Language-Haskell-Refact-Utils-LocUtils.html#isComma",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils LocUtils",
          "module": "Language.Haskell.Refact.Utils.LocUtils",
          "name": "isComma",
          "normalized": "PosToken-\u003eBool",
          "package": "HaRe",
          "partial": "Comma",
          "signature": "PosToken-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-LocUtils.html#v:isComma"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.LocUtils",
          "name": "isComment",
          "package": "HaRe",
          "signature": "PosToken -\u003e Bool",
          "source": "src/Language-Haskell-Refact-Utils-LocUtils.html#isComment",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils LocUtils",
          "module": "Language.Haskell.Refact.Utils.LocUtils",
          "name": "isComment",
          "normalized": "PosToken-\u003eBool",
          "package": "HaRe",
          "partial": "Comment",
          "signature": "PosToken-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-LocUtils.html#v:isComment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.LocUtils",
          "name": "isDo",
          "package": "HaRe",
          "signature": "PosToken -\u003e Bool",
          "source": "src/Language-Haskell-Refact-Utils-LocUtils.html#isDo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils LocUtils",
          "module": "Language.Haskell.Refact.Utils.LocUtils",
          "name": "isDo",
          "normalized": "PosToken-\u003eBool",
          "package": "HaRe",
          "partial": "Do",
          "signature": "PosToken-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-LocUtils.html#v:isDo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.LocUtils",
          "name": "isDoubleColon",
          "package": "HaRe",
          "signature": "PosToken -\u003e Bool",
          "source": "src/Language-Haskell-Refact-Utils-LocUtils.html#isDoubleColon",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils LocUtils",
          "module": "Language.Haskell.Refact.Utils.LocUtils",
          "name": "isDoubleColon",
          "normalized": "PosToken-\u003eBool",
          "package": "HaRe",
          "partial": "Double Colon",
          "signature": "PosToken-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-LocUtils.html#v:isDoubleColon"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.LocUtils",
          "name": "isElse",
          "package": "HaRe",
          "signature": "PosToken -\u003e Bool",
          "source": "src/Language-Haskell-Refact-Utils-LocUtils.html#isElse",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils LocUtils",
          "module": "Language.Haskell.Refact.Utils.LocUtils",
          "name": "isElse",
          "normalized": "PosToken-\u003eBool",
          "package": "HaRe",
          "partial": "Else",
          "signature": "PosToken-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-LocUtils.html#v:isElse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.LocUtils",
          "name": "isEmpty",
          "package": "HaRe",
          "signature": "PosToken -\u003e Bool",
          "source": "src/Language-Haskell-Refact-Utils-LocUtils.html#isEmpty",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils LocUtils",
          "module": "Language.Haskell.Refact.Utils.LocUtils",
          "name": "isEmpty",
          "normalized": "PosToken-\u003eBool",
          "package": "HaRe",
          "partial": "Empty",
          "signature": "PosToken-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-LocUtils.html#v:isEmpty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.LocUtils",
          "name": "isIgnored",
          "package": "HaRe",
          "signature": "PosToken -\u003e Bool",
          "source": "src/Language-Haskell-Refact-Utils-LocUtils.html#isIgnored",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils LocUtils",
          "module": "Language.Haskell.Refact.Utils.LocUtils",
          "name": "isIgnored",
          "normalized": "PosToken-\u003eBool",
          "package": "HaRe",
          "partial": "Ignored",
          "signature": "PosToken-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-LocUtils.html#v:isIgnored"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTokens that are ignored when determining the first non-comment\n token in a span\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils.LocUtils",
          "name": "isIgnoredNonComment",
          "package": "HaRe",
          "signature": "PosToken -\u003e Bool",
          "source": "src/Language-Haskell-Refact-Utils-LocUtils.html#isIgnoredNonComment",
          "type": "function"
        },
        "index": {
          "description": "Tokens that are ignored when determining the first non-comment token in span",
          "hierarchy": "Language Haskell Refact Utils LocUtils",
          "module": "Language.Haskell.Refact.Utils.LocUtils",
          "name": "isIgnoredNonComment",
          "normalized": "PosToken-\u003eBool",
          "package": "HaRe",
          "partial": "Ignored Non Comment",
          "signature": "PosToken-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-LocUtils.html#v:isIgnoredNonComment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.LocUtils",
          "name": "isIn",
          "package": "HaRe",
          "signature": "PosToken -\u003e Bool",
          "source": "src/Language-Haskell-Refact-Utils-LocUtils.html#isIn",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils LocUtils",
          "module": "Language.Haskell.Refact.Utils.LocUtils",
          "name": "isIn",
          "normalized": "PosToken-\u003eBool",
          "package": "HaRe",
          "partial": "In",
          "signature": "PosToken-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-LocUtils.html#v:isIn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.LocUtils",
          "name": "isLet",
          "package": "HaRe",
          "signature": "PosToken -\u003e Bool",
          "source": "src/Language-Haskell-Refact-Utils-LocUtils.html#isLet",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils LocUtils",
          "module": "Language.Haskell.Refact.Utils.LocUtils",
          "name": "isLet",
          "normalized": "PosToken-\u003eBool",
          "package": "HaRe",
          "partial": "Let",
          "signature": "PosToken-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-LocUtils.html#v:isLet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDoes a token have the file mark in it\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils.LocUtils",
          "name": "isMarked",
          "package": "HaRe",
          "signature": "PosToken -\u003e Bool",
          "source": "src/Language-Haskell-Refact-Utils-LocUtils.html#isMarked",
          "type": "function"
        },
        "index": {
          "description": "Does token have the file mark in it",
          "hierarchy": "Language Haskell Refact Utils LocUtils",
          "module": "Language.Haskell.Refact.Utils.LocUtils",
          "name": "isMarked",
          "normalized": "PosToken-\u003eBool",
          "package": "HaRe",
          "partial": "Marked",
          "signature": "PosToken-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-LocUtils.html#v:isMarked"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.LocUtils",
          "name": "isMultiLineComment",
          "package": "HaRe",
          "signature": "PosToken -\u003e Bool",
          "source": "src/Language-Haskell-Refact-Utils-LocUtils.html#isMultiLineComment",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils LocUtils",
          "module": "Language.Haskell.Refact.Utils.LocUtils",
          "name": "isMultiLineComment",
          "normalized": "PosToken-\u003eBool",
          "package": "HaRe",
          "partial": "Multi Line Comment",
          "signature": "PosToken-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-LocUtils.html#v:isMultiLineComment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.LocUtils",
          "name": "isOf",
          "package": "HaRe",
          "signature": "PosToken -\u003e Bool",
          "source": "src/Language-Haskell-Refact-Utils-LocUtils.html#isOf",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils LocUtils",
          "module": "Language.Haskell.Refact.Utils.LocUtils",
          "name": "isOf",
          "normalized": "PosToken-\u003eBool",
          "package": "HaRe",
          "partial": "Of",
          "signature": "PosToken-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-LocUtils.html#v:isOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.LocUtils",
          "name": "isOpenSquareBracket",
          "package": "HaRe",
          "signature": "PosToken -\u003e Bool",
          "source": "src/Language-Haskell-Refact-Utils-LocUtils.html#isOpenSquareBracket",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils LocUtils",
          "module": "Language.Haskell.Refact.Utils.LocUtils",
          "name": "isOpenSquareBracket",
          "normalized": "PosToken-\u003eBool",
          "package": "HaRe",
          "partial": "Open Square Bracket",
          "signature": "PosToken-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-LocUtils.html#v:isOpenSquareBracket"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.LocUtils",
          "name": "isThen",
          "package": "HaRe",
          "signature": "PosToken -\u003e Bool",
          "source": "src/Language-Haskell-Refact-Utils-LocUtils.html#isThen",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils LocUtils",
          "module": "Language.Haskell.Refact.Utils.LocUtils",
          "name": "isThen",
          "normalized": "PosToken-\u003eBool",
          "package": "HaRe",
          "partial": "Then",
          "signature": "PosToken-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-LocUtils.html#v:isThen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.LocUtils",
          "name": "isWhere",
          "package": "HaRe",
          "signature": "PosToken -\u003e Bool",
          "source": "src/Language-Haskell-Refact-Utils-LocUtils.html#isWhere",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils LocUtils",
          "module": "Language.Haskell.Refact.Utils.LocUtils",
          "name": "isWhere",
          "normalized": "PosToken-\u003eBool",
          "package": "HaRe",
          "partial": "Where",
          "signature": "PosToken-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-LocUtils.html#v:isWhere"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.LocUtils",
          "name": "isWhereOrLet",
          "package": "HaRe",
          "signature": "PosToken -\u003e Bool",
          "source": "src/Language-Haskell-Refact-Utils-LocUtils.html#isWhereOrLet",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils LocUtils",
          "module": "Language.Haskell.Refact.Utils.LocUtils",
          "name": "isWhereOrLet",
          "normalized": "PosToken-\u003eBool",
          "package": "HaRe",
          "partial": "Where Or Let",
          "signature": "PosToken-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-LocUtils.html#v:isWhereOrLet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.LocUtils",
          "name": "isWhite",
          "package": "HaRe",
          "signature": "PosToken -\u003e Bool",
          "source": "src/Language-Haskell-Refact-Utils-LocUtils.html#isWhite",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils LocUtils",
          "module": "Language.Haskell.Refact.Utils.LocUtils",
          "name": "isWhite",
          "normalized": "PosToken-\u003eBool",
          "package": "HaRe",
          "partial": "White",
          "signature": "PosToken-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-LocUtils.html#v:isWhite"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.LocUtils",
          "name": "isWhiteSpace",
          "package": "HaRe",
          "signature": "PosToken -\u003e Bool",
          "source": "src/Language-Haskell-Refact-Utils-LocUtils.html#isWhiteSpace",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils LocUtils",
          "module": "Language.Haskell.Refact.Utils.LocUtils",
          "name": "isWhiteSpace",
          "normalized": "PosToken-\u003eBool",
          "package": "HaRe",
          "partial": "White Space",
          "signature": "PosToken-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-LocUtils.html#v:isWhiteSpace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.LocUtils",
          "name": "isWhiteSpaceOrIgnored",
          "package": "HaRe",
          "signature": "PosToken -\u003e Bool",
          "source": "src/Language-Haskell-Refact-Utils-LocUtils.html#isWhiteSpaceOrIgnored",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils LocUtils",
          "module": "Language.Haskell.Refact.Utils.LocUtils",
          "name": "isWhiteSpaceOrIgnored",
          "normalized": "PosToken-\u003eBool",
          "package": "HaRe",
          "partial": "White Space Or Ignored",
          "signature": "PosToken-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-LocUtils.html#v:isWhiteSpaceOrIgnored"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a token stream covering multi-lines, calculate the length of the last line\n AZ: should be the last token start col, plus length of token.\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils.LocUtils",
          "name": "lengthOfLastLine",
          "package": "HaRe",
          "signature": "[PosToken] -\u003e Int",
          "source": "src/Language-Haskell-Refact-Utils-LocUtils.html#lengthOfLastLine",
          "type": "function"
        },
        "index": {
          "description": "Given token stream covering multi-lines calculate the length of the last line AZ should be the last token start col plus length of token",
          "hierarchy": "Language Haskell Refact Utils LocUtils",
          "module": "Language.Haskell.Refact.Utils.LocUtils",
          "name": "lengthOfLastLine",
          "normalized": "[PosToken]-\u003eInt",
          "package": "HaRe",
          "partial": "Of Last Line",
          "signature": "[PosToken]-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-LocUtils.html#v:lengthOfLastLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMark a token so that it can be use to trigger layout checking\n later when the toks are retrieved\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils.LocUtils",
          "name": "markToken",
          "package": "HaRe",
          "signature": "PosToken -\u003e PosToken",
          "source": "src/Language-Haskell-Refact-Utils-LocUtils.html#markToken",
          "type": "function"
        },
        "index": {
          "description": "Mark token so that it can be use to trigger layout checking later when the toks are retrieved",
          "hierarchy": "Language Haskell Refact Utils LocUtils",
          "module": "Language.Haskell.Refact.Utils.LocUtils",
          "name": "markToken",
          "normalized": "PosToken-\u003ePosToken",
          "package": "HaRe",
          "partial": "Token",
          "signature": "PosToken-\u003ePosToken",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-LocUtils.html#v:markToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTransfer the location information from the first param to the second\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils.LocUtils",
          "name": "matchTokenPos",
          "package": "HaRe",
          "signature": "PosToken -\u003e PosToken -\u003e PosToken",
          "source": "src/Language-Haskell-Refact-Utils-LocUtils.html#matchTokenPos",
          "type": "function"
        },
        "index": {
          "description": "Transfer the location information from the first param to the second",
          "hierarchy": "Language Haskell Refact Utils LocUtils",
          "module": "Language.Haskell.Refact.Utils.LocUtils",
          "name": "matchTokenPos",
          "normalized": "PosToken-\u003ePosToken-\u003ePosToken",
          "package": "HaRe",
          "partial": "Token Pos",
          "signature": "PosToken-\u003ePosToken-\u003ePosToken",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-LocUtils.html#v:matchTokenPos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompose a new token using the given arguments.\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils.LocUtils",
          "name": "mkToken",
          "package": "HaRe",
          "signature": "Token -\u003e SimpPos -\u003e String -\u003e PosToken",
          "source": "src/Language-Haskell-Refact-Utils-LocUtils.html#mkToken",
          "type": "function"
        },
        "index": {
          "description": "Compose new token using the given arguments",
          "hierarchy": "Language Haskell Refact Utils LocUtils",
          "module": "Language.Haskell.Refact.Utils.LocUtils",
          "name": "mkToken",
          "normalized": "Token-\u003eSimpPos-\u003eString-\u003ePosToken",
          "package": "HaRe",
          "partial": "Token",
          "signature": "Token-\u003eSimpPos-\u003eString-\u003ePosToken",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-LocUtils.html#v:mkToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.LocUtils",
          "name": "mkZeroToken",
          "package": "HaRe",
          "signature": "PosToken",
          "source": "src/Language-Haskell-Refact-Utils-LocUtils.html#mkZeroToken",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils LocUtils",
          "module": "Language.Haskell.Refact.Utils.LocUtils",
          "name": "mkZeroToken",
          "package": "HaRe",
          "partial": "Zero Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-LocUtils.html#v:mkZeroToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.LocUtils",
          "name": "modified",
          "package": "HaRe",
          "signature": "Bool",
          "source": "src/Language-Haskell-Refact-Utils-LocUtils.html#modified",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils LocUtils",
          "module": "Language.Haskell.Refact.Utils.LocUtils",
          "name": "modified",
          "package": "HaRe",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-LocUtils.html#v:modified"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esort out line numbering so that they are always monotonically\n increasing.\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils.LocUtils",
          "name": "monotonicLineToks",
          "package": "HaRe",
          "signature": "[PosToken] -\u003e [PosToken]",
          "source": "src/Language-Haskell-Refact-Utils-LocUtils.html#monotonicLineToks",
          "type": "function"
        },
        "index": {
          "description": "sort out line numbering so that they are always monotonically increasing",
          "hierarchy": "Language Haskell Refact Utils LocUtils",
          "module": "Language.Haskell.Refact.Utils.LocUtils",
          "name": "monotonicLineToks",
          "normalized": "[PosToken]-\u003e[PosToken]",
          "package": "HaRe",
          "partial": "Line Toks",
          "signature": "[PosToken]-\u003e[PosToken]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-LocUtils.html#v:monotonicLineToks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.LocUtils",
          "name": "newLinesToken",
          "package": "HaRe",
          "signature": "Int -\u003e PosToken -\u003e PosToken",
          "source": "src/Language-Haskell-Refact-Utils-LocUtils.html#newLinesToken",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils LocUtils",
          "module": "Language.Haskell.Refact.Utils.LocUtils",
          "name": "newLinesToken",
          "normalized": "Int-\u003ePosToken-\u003ePosToken",
          "package": "HaRe",
          "partial": "Lines Token",
          "signature": "Int-\u003ePosToken-\u003ePosToken",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-LocUtils.html#v:newLinesToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.LocUtils",
          "name": "newLnToken",
          "package": "HaRe",
          "signature": "PosToken -\u003e PosToken",
          "source": "src/Language-Haskell-Refact-Utils-LocUtils.html#newLnToken",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils LocUtils",
          "module": "Language.Haskell.Refact.Utils.LocUtils",
          "name": "newLnToken",
          "normalized": "PosToken-\u003ePosToken",
          "package": "HaRe",
          "partial": "Ln Token",
          "signature": "PosToken-\u003ePosToken",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-LocUtils.html#v:newLnToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.LocUtils",
          "name": "nonEmptyList",
          "package": "HaRe",
          "signature": "[t] -\u003e Bool",
          "source": "src/Language-Haskell-Refact-Utils-LocUtils.html#nonEmptyList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils LocUtils",
          "module": "Language.Haskell.Refact.Utils.LocUtils",
          "name": "nonEmptyList",
          "normalized": "[a]-\u003eBool",
          "package": "HaRe",
          "partial": "Empty List",
          "signature": "[t]-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-LocUtils.html#v:nonEmptyList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.LocUtils",
          "name": "notWhite",
          "package": "HaRe",
          "signature": "PosToken -\u003e Bool",
          "source": "src/Language-Haskell-Refact-Utils-LocUtils.html#notWhite",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils LocUtils",
          "module": "Language.Haskell.Refact.Utils.LocUtils",
          "name": "notWhite",
          "normalized": "PosToken-\u003eBool",
          "package": "HaRe",
          "partial": "White",
          "signature": "PosToken-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-LocUtils.html#v:notWhite"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.LocUtils",
          "name": "notWhiteSpace",
          "package": "HaRe",
          "signature": "PosToken -\u003e Bool",
          "source": "src/Language-Haskell-Refact-Utils-LocUtils.html#notWhiteSpace",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils LocUtils",
          "module": "Language.Haskell.Refact.Utils.LocUtils",
          "name": "notWhiteSpace",
          "normalized": "PosToken-\u003eBool",
          "package": "HaRe",
          "partial": "White Space",
          "signature": "PosToken-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-LocUtils.html#v:notWhiteSpace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.LocUtils",
          "name": "nullSrcSpan",
          "package": "HaRe",
          "signature": "SrcSpan",
          "source": "src/Language-Haskell-Refact-Utils-LocUtils.html#nullSrcSpan",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils LocUtils",
          "module": "Language.Haskell.Refact.Utils.LocUtils",
          "name": "nullSrcSpan",
          "package": "HaRe",
          "partial": "Src Span",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-LocUtils.html#v:nullSrcSpan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.LocUtils",
          "name": "prettyprintPatList",
          "package": "HaRe",
          "signature": "(t -\u003e String) -\u003e Bool -\u003e [t] -\u003e String",
          "source": "src/Language-Haskell-Refact-Utils-LocUtils.html#prettyprintPatList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils LocUtils",
          "module": "Language.Haskell.Refact.Utils.LocUtils",
          "name": "prettyprintPatList",
          "normalized": "(a-\u003eString)-\u003eBool-\u003e[a]-\u003eString",
          "package": "HaRe",
          "partial": "Pat List",
          "signature": "(t-\u003eString)-\u003eBool-\u003e[t]-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-LocUtils.html#v:prettyprintPatList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdjust token stream to cater for changes in token length due to\n token renaming\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils.LocUtils",
          "name": "reSequenceToks",
          "package": "HaRe",
          "signature": "[PosToken] -\u003e [PosToken]",
          "source": "src/Language-Haskell-Refact-Utils-LocUtils.html#reSequenceToks",
          "type": "function"
        },
        "index": {
          "description": "Adjust token stream to cater for changes in token length due to token renaming",
          "hierarchy": "Language Haskell Refact Utils LocUtils",
          "module": "Language.Haskell.Refact.Utils.LocUtils",
          "name": "reSequenceToks",
          "normalized": "[PosToken]-\u003e[PosToken]",
          "package": "HaRe",
          "partial": "Sequence Toks",
          "signature": "[PosToken]-\u003e[PosToken]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-LocUtils.html#v:reSequenceToks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.LocUtils",
          "name": "realSrcLocEndTok",
          "package": "HaRe",
          "signature": "PosToken -\u003e RealSrcLoc",
          "source": "src/Language-Haskell-Refact-Utils-LocUtils.html#realSrcLocEndTok",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils LocUtils",
          "module": "Language.Haskell.Refact.Utils.LocUtils",
          "name": "realSrcLocEndTok",
          "normalized": "PosToken-\u003eRealSrcLoc",
          "package": "HaRe",
          "partial": "Src Loc End Tok",
          "signature": "PosToken-\u003eRealSrcLoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-LocUtils.html#v:realSrcLocEndTok"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.LocUtils",
          "name": "realSrcLocFromTok",
          "package": "HaRe",
          "signature": "PosToken -\u003e RealSrcLoc",
          "source": "src/Language-Haskell-Refact-Utils-LocUtils.html#realSrcLocFromTok",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils LocUtils",
          "module": "Language.Haskell.Refact.Utils.LocUtils",
          "name": "realSrcLocFromTok",
          "normalized": "PosToken-\u003eRealSrcLoc",
          "package": "HaRe",
          "partial": "Src Loc From Tok",
          "signature": "PosToken-\u003eRealSrcLoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-LocUtils.html#v:realSrcLocFromTok"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReplace a single token in the token stream by a new token, without\n adjusting the layout.\n Note1: does not re-align, else other later replacements may fail.\n Note2: must keep original end col, to know what the inter-token gap\n        was when re-aligning\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils.LocUtils",
          "name": "replaceTokNoReAlign",
          "package": "HaRe",
          "signature": "[PosToken] -\u003e SimpPos -\u003e PosToken -\u003e [PosToken]",
          "source": "src/Language-Haskell-Refact-Utils-LocUtils.html#replaceTokNoReAlign",
          "type": "function"
        },
        "index": {
          "description": "Replace single token in the token stream by new token without adjusting the layout Note1 does not re-align else other later replacements may fail Note2 must keep original end col to know what the inter-token gap was when re-aligning",
          "hierarchy": "Language Haskell Refact Utils LocUtils",
          "module": "Language.Haskell.Refact.Utils.LocUtils",
          "name": "replaceTokNoReAlign",
          "normalized": "[PosToken]-\u003eSimpPos-\u003ePosToken-\u003e[PosToken]",
          "package": "HaRe",
          "partial": "Tok No Re Align",
          "signature": "[PosToken]-\u003eSimpPos-\u003ePosToken-\u003e[PosToken]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-LocUtils.html#v:replaceTokNoReAlign"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.LocUtils",
          "name": "showToks",
          "package": "HaRe",
          "signature": "[PosToken] -\u003e String",
          "source": "src/Language-Haskell-Refact-Utils-LocUtils.html#showToks",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils LocUtils",
          "module": "Language.Haskell.Refact.Utils.LocUtils",
          "name": "showToks",
          "normalized": "[PosToken]-\u003eString",
          "package": "HaRe",
          "partial": "Toks",
          "signature": "[PosToken]-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-LocUtils.html#v:showToks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.LocUtils",
          "name": "simpPos0",
          "package": "HaRe",
          "signature": "(Int, Int)",
          "source": "src/Language-Haskell-Refact-Utils-LocUtils.html#simpPos0",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils LocUtils",
          "module": "Language.Haskell.Refact.Utils.LocUtils",
          "name": "simpPos0",
          "normalized": "(Int,Int)",
          "package": "HaRe",
          "partial": "Pos",
          "signature": "(Int,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-LocUtils.html#v:simpPos0"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.LocUtils",
          "name": "splitOnNewLn",
          "package": "HaRe",
          "signature": "[PosToken] -\u003e ([PosToken], [PosToken])",
          "source": "src/Language-Haskell-Refact-Utils-LocUtils.html#splitOnNewLn",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils LocUtils",
          "module": "Language.Haskell.Refact.Utils.LocUtils",
          "name": "splitOnNewLn",
          "normalized": "[PosToken]-\u003e([PosToken],[PosToken])",
          "package": "HaRe",
          "partial": "On New Ln",
          "signature": "[PosToken]-\u003e([PosToken],[PosToken])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-LocUtils.html#v:splitOnNewLn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSplit the token stream into three parts: the tokens before the\n startPos, the tokens between startPos and endPos, and the tokens\n after endPos.\n Note: The startPos and endPos refer to the startPos of a token only.\n       So a single token will have the same startPos and endPos\n    NO^^^^\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils.LocUtils",
          "name": "splitToks",
          "package": "HaRe",
          "signature": "(SimpPos, SimpPos) -\u003e [PosToken] -\u003e ([PosToken], [PosToken], [PosToken])",
          "source": "src/Language-Haskell-Refact-Utils-LocUtils.html#splitToks",
          "type": "function"
        },
        "index": {
          "description": "Split the token stream into three parts the tokens before the startPos the tokens between startPos and endPos and the tokens after endPos Note The startPos and endPos refer to the startPos of token only So single token will have the same startPos and endPos NO",
          "hierarchy": "Language Haskell Refact Utils LocUtils",
          "module": "Language.Haskell.Refact.Utils.LocUtils",
          "name": "splitToks",
          "normalized": "(SimpPos,SimpPos)-\u003e[PosToken]-\u003e([PosToken],[PosToken],[PosToken])",
          "package": "HaRe",
          "partial": "Toks",
          "signature": "(SimpPos,SimpPos)-\u003e[PosToken]-\u003e([PosToken],[PosToken],[PosToken])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-LocUtils.html#v:splitToks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eget all the source locations (use locations) in an AST phrase t\n according the the occurrence order of identifiers.\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils.LocUtils",
          "name": "srcLocs",
          "package": "HaRe",
          "signature": "t -\u003e [SimpPos]",
          "source": "src/Language-Haskell-Refact-Utils-LocUtils.html#srcLocs",
          "type": "function"
        },
        "index": {
          "description": "get all the source locations use locations in an AST phrase according the the occurrence order of identifiers",
          "hierarchy": "Language Haskell Refact Utils LocUtils",
          "module": "Language.Haskell.Refact.Utils.LocUtils",
          "name": "srcLocs",
          "normalized": "a-\u003e[SimpPos]",
          "package": "HaRe",
          "partial": "Locs",
          "signature": "t-\u003e[SimpPos]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-LocUtils.html#v:srcLocs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.LocUtils",
          "name": "startEndLocGhc",
          "package": "HaRe",
          "signature": "Located b -\u003e (SimpPos, SimpPos)",
          "source": "src/Language-Haskell-Refact-Utils-LocUtils.html#startEndLocGhc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils LocUtils",
          "module": "Language.Haskell.Refact.Utils.LocUtils",
          "name": "startEndLocGhc",
          "normalized": "Located a-\u003e(SimpPos,SimpPos)",
          "package": "HaRe",
          "partial": "End Loc Ghc",
          "signature": "Located b-\u003e(SimpPos,SimpPos)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-LocUtils.html#v:startEndLocGhc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the start&end location of t in the token stream, then extend\n the start and end location to cover the preceding and following\n comments.\n\u003c/p\u003e\u003cp\u003eIn this routine, 'then','else','do' and 'in' are treated as comments.\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils.LocUtils",
          "name": "startEndLocIncComments",
          "package": "HaRe",
          "signature": "[PosToken] -\u003e t -\u003e (SimpPos, SimpPos)",
          "source": "src/Language-Haskell-Refact-Utils-LocUtils.html#startEndLocIncComments",
          "type": "function"
        },
        "index": {
          "description": "Get the start end location of in the token stream then extend the start and end location to cover the preceding and following comments In this routine then else do and in are treated as comments",
          "hierarchy": "Language Haskell Refact Utils LocUtils",
          "module": "Language.Haskell.Refact.Utils.LocUtils",
          "name": "startEndLocIncComments",
          "normalized": "[PosToken]-\u003ea-\u003e(SimpPos,SimpPos)",
          "package": "HaRe",
          "partial": "End Loc Inc Comments",
          "signature": "[PosToken]-\u003et-\u003e(SimpPos,SimpPos)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-LocUtils.html#v:startEndLocIncComments"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.LocUtils",
          "name": "startEndLocIncComments'",
          "package": "HaRe",
          "signature": "[PosToken] -\u003e (SimpPos, SimpPos) -\u003e (SimpPos, SimpPos)",
          "source": "src/Language-Haskell-Refact-Utils-LocUtils.html#startEndLocIncComments%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils LocUtils",
          "module": "Language.Haskell.Refact.Utils.LocUtils",
          "name": "startEndLocIncComments'",
          "normalized": "[PosToken]-\u003e(SimpPos,SimpPos)-\u003e(SimpPos,SimpPos)",
          "package": "HaRe",
          "partial": "End Loc Inc Comments'",
          "signature": "[PosToken]-\u003e(SimpPos,SimpPos)-\u003e(SimpPos,SimpPos)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-LocUtils.html#v:startEndLocIncComments-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the start&end location of syntax phrase t, then extend the end\n location to cover the comment/white spaces or new line which starts\n in the same line as the end location\n TODO: deprecate this in favour of startEndLocIncComments\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils.LocUtils",
          "name": "startEndLocIncFowComment",
          "package": "HaRe",
          "signature": "[PosToken] -\u003e t -\u003e (SimpPos, SimpPos)",
          "source": "src/Language-Haskell-Refact-Utils-LocUtils.html#startEndLocIncFowComment",
          "type": "function"
        },
        "index": {
          "description": "Get the start end location of syntax phrase then extend the end location to cover the comment white spaces or new line which starts in the same line as the end location TODO deprecate this in favour of startEndLocIncComments",
          "hierarchy": "Language Haskell Refact Utils LocUtils",
          "module": "Language.Haskell.Refact.Utils.LocUtils",
          "name": "startEndLocIncFowComment",
          "normalized": "[PosToken]-\u003ea-\u003e(SimpPos,SimpPos)",
          "package": "HaRe",
          "partial": "End Loc Inc Fow Comment",
          "signature": "[PosToken]-\u003et-\u003e(SimpPos,SimpPos)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-LocUtils.html#v:startEndLocIncFowComment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns True if the token starts with `\\n`.\n ++AZ++: is this meaningful?\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils.LocUtils",
          "name": "startsWithNewLn",
          "package": "HaRe",
          "signature": "PosToken -\u003e Bool",
          "source": "src/Language-Haskell-Refact-Utils-LocUtils.html#startsWithNewLn",
          "type": "function"
        },
        "index": {
          "description": "Returns True if the token starts with AZ is this meaningful",
          "hierarchy": "Language Haskell Refact Utils LocUtils",
          "module": "Language.Haskell.Refact.Utils.LocUtils",
          "name": "startsWithNewLn",
          "normalized": "PosToken-\u003eBool",
          "package": "HaRe",
          "partial": "With New Ln",
          "signature": "PosToken-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-LocUtils.html#v:startsWithNewLn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.LocUtils",
          "name": "tokenCol",
          "package": "HaRe",
          "signature": "PosToken -\u003e Int",
          "source": "src/Language-Haskell-Refact-Utils-LocUtils.html#tokenCol",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils LocUtils",
          "module": "Language.Haskell.Refact.Utils.LocUtils",
          "name": "tokenCol",
          "normalized": "PosToken-\u003eInt",
          "package": "HaRe",
          "partial": "Col",
          "signature": "PosToken-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-LocUtils.html#v:tokenCol"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.LocUtils",
          "name": "tokenColEnd",
          "package": "HaRe",
          "signature": "PosToken -\u003e Int",
          "source": "src/Language-Haskell-Refact-Utils-LocUtils.html#tokenColEnd",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils LocUtils",
          "module": "Language.Haskell.Refact.Utils.LocUtils",
          "name": "tokenColEnd",
          "normalized": "PosToken-\u003eInt",
          "package": "HaRe",
          "partial": "Col End",
          "signature": "PosToken-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-LocUtils.html#v:tokenColEnd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.LocUtils",
          "name": "tokenCon",
          "package": "HaRe",
          "signature": "PosToken -\u003e String",
          "source": "src/Language-Haskell-Refact-Utils-LocUtils.html#tokenCon",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils LocUtils",
          "module": "Language.Haskell.Refact.Utils.LocUtils",
          "name": "tokenCon",
          "normalized": "PosToken-\u003eString",
          "package": "HaRe",
          "partial": "Con",
          "signature": "PosToken-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-LocUtils.html#v:tokenCon"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.LocUtils",
          "name": "tokenLen",
          "package": "HaRe",
          "signature": "PosToken -\u003e Int",
          "source": "src/Language-Haskell-Refact-Utils-LocUtils.html#tokenLen",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils LocUtils",
          "module": "Language.Haskell.Refact.Utils.LocUtils",
          "name": "tokenLen",
          "normalized": "PosToken-\u003eInt",
          "package": "HaRe",
          "partial": "Len",
          "signature": "PosToken-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-LocUtils.html#v:tokenLen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.LocUtils",
          "name": "tokenPos",
          "package": "HaRe",
          "signature": "(GenLocated SrcSpan t1, t) -\u003e SimpPos",
          "source": "src/Language-Haskell-Refact-Utils-LocUtils.html#tokenPos",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils LocUtils",
          "module": "Language.Haskell.Refact.Utils.LocUtils",
          "name": "tokenPos",
          "normalized": "(GenLocated SrcSpan a,a)-\u003eSimpPos",
          "package": "HaRe",
          "partial": "Pos",
          "signature": "(GenLocated SrcSpan t,t)-\u003eSimpPos",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-LocUtils.html#v:tokenPos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.LocUtils",
          "name": "tokenPosEnd",
          "package": "HaRe",
          "signature": "(GenLocated SrcSpan t1, t) -\u003e SimpPos",
          "source": "src/Language-Haskell-Refact-Utils-LocUtils.html#tokenPosEnd",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils LocUtils",
          "module": "Language.Haskell.Refact.Utils.LocUtils",
          "name": "tokenPosEnd",
          "normalized": "(GenLocated SrcSpan a,a)-\u003eSimpPos",
          "package": "HaRe",
          "partial": "Pos End",
          "signature": "(GenLocated SrcSpan t,t)-\u003eSimpPos",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-LocUtils.html#v:tokenPosEnd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.LocUtils",
          "name": "tokenRow",
          "package": "HaRe",
          "signature": "PosToken -\u003e Int",
          "source": "src/Language-Haskell-Refact-Utils-LocUtils.html#tokenRow",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils LocUtils",
          "module": "Language.Haskell.Refact.Utils.LocUtils",
          "name": "tokenRow",
          "normalized": "PosToken-\u003eInt",
          "package": "HaRe",
          "partial": "Row",
          "signature": "PosToken-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-LocUtils.html#v:tokenRow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.LocUtils",
          "name": "tokenSrcSpan",
          "package": "HaRe",
          "signature": "(Located t1, t) -\u003e SrcSpan",
          "source": "src/Language-Haskell-Refact-Utils-LocUtils.html#tokenSrcSpan",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils LocUtils",
          "module": "Language.Haskell.Refact.Utils.LocUtils",
          "name": "tokenSrcSpan",
          "normalized": "(Located a,a)-\u003eSrcSpan",
          "package": "HaRe",
          "partial": "Src Span",
          "signature": "(Located t,t)-\u003eSrcSpan",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-LocUtils.html#v:tokenSrcSpan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a string into a set of Haskell tokens, following the\n given position, with each line indented by a given column offset if\n required\n TODO: replace 'colOffset withFirstLineIndent' with a Maybe Int ++AZ++\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils.LocUtils",
          "name": "tokenise",
          "package": "HaRe",
          "signature": "RealSrcLoc -\u003e Int -\u003e Bool -\u003e String -\u003e IO [PosToken]",
          "source": "src/Language-Haskell-Refact-Utils-LocUtils.html#tokenise",
          "type": "function"
        },
        "index": {
          "description": "Convert string into set of Haskell tokens following the given position with each line indented by given column offset if required TODO replace colOffset withFirstLineIndent with Maybe Int AZ",
          "hierarchy": "Language Haskell Refact Utils LocUtils",
          "module": "Language.Haskell.Refact.Utils.LocUtils",
          "name": "tokenise",
          "normalized": "RealSrcLoc-\u003eInt-\u003eBool-\u003eString-\u003eIO[PosToken]",
          "package": "HaRe",
          "signature": "RealSrcLoc-\u003eInt-\u003eBool-\u003eString-\u003eIO[PosToken]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-LocUtils.html#v:tokenise"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.LocUtils",
          "name": "toksOnSameLine",
          "package": "HaRe",
          "signature": "PosToken -\u003e PosToken -\u003e Bool",
          "source": "src/Language-Haskell-Refact-Utils-LocUtils.html#toksOnSameLine",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils LocUtils",
          "module": "Language.Haskell.Refact.Utils.LocUtils",
          "name": "toksOnSameLine",
          "normalized": "PosToken-\u003ePosToken-\u003eBool",
          "package": "HaRe",
          "partial": "On Same Line",
          "signature": "PosToken-\u003ePosToken-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-LocUtils.html#v:toksOnSameLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.LocUtils",
          "name": "unmodified",
          "package": "HaRe",
          "signature": "Bool",
          "source": "src/Language-Haskell-Refact-Utils-LocUtils.html#unmodified",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils LocUtils",
          "module": "Language.Haskell.Refact.Utils.LocUtils",
          "name": "unmodified",
          "package": "HaRe",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-LocUtils.html#v:unmodified"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.LocUtils",
          "name": "whiteSpaceTokens",
          "package": "HaRe",
          "signature": "(Int, Int) -\u003e Int -\u003e [PosToken]",
          "source": "src/Language-Haskell-Refact-Utils-LocUtils.html#whiteSpaceTokens",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils LocUtils",
          "module": "Language.Haskell.Refact.Utils.LocUtils",
          "name": "whiteSpaceTokens",
          "normalized": "(Int,Int)-\u003eInt-\u003e[PosToken]",
          "package": "HaRe",
          "partial": "Space Tokens",
          "signature": "(Int,Int)-\u003eInt-\u003e[PosToken]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-LocUtils.html#v:whiteSpaceTokens"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.Monad",
          "name": "Monad",
          "package": "HaRe",
          "source": "src/Language-Haskell-Refact-Utils-Monad.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils Monad",
          "module": "Language.Haskell.Refact.Utils.Monad",
          "name": "Monad",
          "package": "HaRe",
          "partial": "Monad",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-Monad.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eResult of parsing a Haskell source file. It is simply the\n TypeCheckedModule produced by GHC.\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils.Monad",
          "name": "ParseResult",
          "package": "HaRe",
          "source": "src/Language-Haskell-Refact-Utils-Monad.html#ParseResult",
          "type": "type"
        },
        "index": {
          "description": "Result of parsing Haskell source file It is simply the TypeCheckedModule produced by GHC",
          "hierarchy": "Language Haskell Refact Utils Monad",
          "module": "Language.Haskell.Refact.Utils.Monad",
          "name": "ParseResult",
          "package": "HaRe",
          "partial": "Parse Result",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-Monad.html#t:ParseResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.Monad",
          "name": "RefactFlags",
          "package": "HaRe",
          "source": "src/Language-Haskell-Refact-Utils-Monad.html#RefactFlags",
          "type": "data"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils Monad",
          "module": "Language.Haskell.Refact.Utils.Monad",
          "name": "RefactFlags",
          "package": "HaRe",
          "partial": "Refact Flags",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-Monad.html#t:RefactFlags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.Monad",
          "name": "RefactGhc",
          "package": "HaRe",
          "source": "src/Language-Haskell-Refact-Utils-Monad.html#RefactGhc",
          "type": "type"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils Monad",
          "module": "Language.Haskell.Refact.Utils.Monad",
          "name": "RefactGhc",
          "package": "HaRe",
          "partial": "Refact Ghc",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-Monad.html#t:RefactGhc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.Monad",
          "name": "RefactModule",
          "package": "HaRe",
          "source": "src/Language-Haskell-Refact-Utils-Monad.html#RefactModule",
          "type": "data"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils Monad",
          "module": "Language.Haskell.Refact.Utils.Monad",
          "name": "RefactModule",
          "package": "HaRe",
          "partial": "Refact Module",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-Monad.html#t:RefactModule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.Monad",
          "name": "RefactSettings",
          "package": "HaRe",
          "source": "src/Language-Haskell-Refact-Utils-Monad.html#RefactSettings",
          "type": "data"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils Monad",
          "module": "Language.Haskell.Refact.Utils.Monad",
          "name": "RefactSettings",
          "package": "HaRe",
          "partial": "Refact Settings",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-Monad.html#t:RefactSettings"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.Monad",
          "name": "RefactStashId",
          "package": "HaRe",
          "source": "src/Language-Haskell-Refact-Utils-Monad.html#RefactStashId",
          "type": "data"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils Monad",
          "module": "Language.Haskell.Refact.Utils.Monad",
          "name": "RefactStashId",
          "package": "HaRe",
          "partial": "Refact Stash Id",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-Monad.html#t:RefactStashId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eState for refactoring a single file. Holds/hides the token\n stream, which gets updated transparently at key points.\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils.Monad",
          "name": "RefactState",
          "package": "HaRe",
          "source": "src/Language-Haskell-Refact-Utils-Monad.html#RefactState",
          "type": "data"
        },
        "index": {
          "description": "State for refactoring single file Holds hides the token stream which gets updated transparently at key points",
          "hierarchy": "Language Haskell Refact Utils Monad",
          "module": "Language.Haskell.Refact.Utils.Monad",
          "name": "RefactState",
          "package": "HaRe",
          "partial": "Refact State",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-Monad.html#t:RefactState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProvide some temporary storage while the refactoring is taking\n place\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils.Monad",
          "name": "StateStorage",
          "package": "HaRe",
          "source": "src/Language-Haskell-Refact-Utils-Monad.html#StateStorage",
          "type": "data"
        },
        "index": {
          "description": "Provide some temporary storage while the refactoring is taking place",
          "hierarchy": "Language Haskell Refact Utils Monad",
          "module": "Language.Haskell.Refact.Utils.Monad",
          "name": "StateStorage",
          "package": "HaRe",
          "partial": "State Storage",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-Monad.html#t:StateStorage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.Monad",
          "name": "TargetModule",
          "package": "HaRe",
          "source": "src/Language-Haskell-Refact-Utils-Monad.html#TargetModule",
          "type": "type"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils Monad",
          "module": "Language.Haskell.Refact.Utils.Monad",
          "name": "TargetModule",
          "package": "HaRe",
          "partial": "Target Module",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-Monad.html#t:TargetModule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.Monad",
          "name": "VerboseLevel",
          "package": "HaRe",
          "source": "src/Language-Haskell-Refact-Utils-Monad.html#VerboseLevel",
          "type": "data"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils Monad",
          "module": "Language.Haskell.Refact.Utils.Monad",
          "name": "VerboseLevel",
          "package": "HaRe",
          "partial": "Verbose Level",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-Monad.html#t:VerboseLevel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.Monad",
          "name": "Debug",
          "package": "HaRe",
          "signature": "Debug",
          "source": "src/Language-Haskell-Refact-Utils-Monad.html#VerboseLevel",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils Monad",
          "module": "Language.Haskell.Refact.Utils.Monad",
          "name": "Debug",
          "package": "HaRe",
          "partial": "Debug",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-Monad.html#v:Debug"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.Monad",
          "name": "Normal",
          "package": "HaRe",
          "signature": "Normal",
          "source": "src/Language-Haskell-Refact-Utils-Monad.html#VerboseLevel",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils Monad",
          "module": "Language.Haskell.Refact.Utils.Monad",
          "name": "Normal",
          "package": "HaRe",
          "partial": "Normal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-Monad.html#v:Normal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.Monad",
          "name": "Off",
          "package": "HaRe",
          "signature": "Off",
          "source": "src/Language-Haskell-Refact-Utils-Monad.html#VerboseLevel",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils Monad",
          "module": "Language.Haskell.Refact.Utils.Monad",
          "name": "Off",
          "package": "HaRe",
          "partial": "Off",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-Monad.html#v:Off"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.Monad",
          "name": "RefFlags",
          "package": "HaRe",
          "signature": "RefFlags",
          "source": "src/Language-Haskell-Refact-Utils-Monad.html#RefactFlags",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils Monad",
          "module": "Language.Haskell.Refact.Utils.Monad",
          "name": "RefFlags",
          "package": "HaRe",
          "partial": "Ref Flags",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-Monad.html#v:RefFlags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.Monad",
          "name": "RefMod",
          "package": "HaRe",
          "signature": "RefMod",
          "source": "src/Language-Haskell-Refact-Utils-Monad.html#RefactModule",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils Monad",
          "module": "Language.Haskell.Refact.Utils.Monad",
          "name": "RefMod",
          "package": "HaRe",
          "partial": "Ref Mod",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-Monad.html#v:RefMod"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.Monad",
          "name": "RefSet",
          "package": "HaRe",
          "signature": "RefSet",
          "source": "src/Language-Haskell-Refact-Utils-Monad.html#RefactSettings",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils Monad",
          "module": "Language.Haskell.Refact.Utils.Monad",
          "name": "RefSet",
          "package": "HaRe",
          "partial": "Ref Set",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-Monad.html#v:RefSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.Monad",
          "name": "RefSt",
          "package": "HaRe",
          "signature": "RefSt",
          "source": "src/Language-Haskell-Refact-Utils-Monad.html#RefactState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils Monad",
          "module": "Language.Haskell.Refact.Utils.Monad",
          "name": "RefSt",
          "package": "HaRe",
          "partial": "Ref St",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-Monad.html#v:RefSt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.Monad",
          "name": "Stash",
          "package": "HaRe",
          "signature": "Stash !String",
          "source": "src/Language-Haskell-Refact-Utils-Monad.html#RefactStashId",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils Monad",
          "module": "Language.Haskell.Refact.Utils.Monad",
          "name": "Stash",
          "package": "HaRe",
          "partial": "Stash",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-Monad.html#v:Stash"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.Monad",
          "name": "StorageBind",
          "package": "HaRe",
          "signature": "StorageBind (LHsBind Name)",
          "source": "src/Language-Haskell-Refact-Utils-Monad.html#StateStorage",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils Monad",
          "module": "Language.Haskell.Refact.Utils.Monad",
          "name": "StorageBind",
          "package": "HaRe",
          "partial": "Storage Bind",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-Monad.html#v:StorageBind"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.Monad",
          "name": "StorageNone",
          "package": "HaRe",
          "signature": "StorageNone",
          "source": "src/Language-Haskell-Refact-Utils-Monad.html#StateStorage",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils Monad",
          "module": "Language.Haskell.Refact.Utils.Monad",
          "name": "StorageNone",
          "package": "HaRe",
          "partial": "Storage None",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-Monad.html#v:StorageNone"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.Monad",
          "name": "StorageSig",
          "package": "HaRe",
          "signature": "StorageSig (LSig Name)",
          "source": "src/Language-Haskell-Refact-Utils-Monad.html#StateStorage",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils Monad",
          "module": "Language.Haskell.Refact.Utils.Monad",
          "name": "StorageSig",
          "package": "HaRe",
          "partial": "Storage Sig",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-Monad.html#v:StorageSig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.Monad",
          "name": "canonicalizeGraph",
          "package": "HaRe",
          "signature": "[ModSummary] -\u003e IO [(Maybe FilePath, ModSummary)]",
          "source": "src/Language-Haskell-Refact-Utils-Monad.html#canonicalizeGraph",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils Monad",
          "module": "Language.Haskell.Refact.Utils.Monad",
          "name": "canonicalizeGraph",
          "normalized": "[ModSummary]-\u003eIO[(Maybe FilePath,ModSummary)]",
          "package": "HaRe",
          "partial": "Graph",
          "signature": "[ModSummary]-\u003eIO[(Maybe FilePath,ModSummary)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-Monad.html#v:canonicalizeGraph"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.Monad",
          "name": "defaultSettings",
          "package": "HaRe",
          "signature": "RefactSettings",
          "source": "src/Language-Haskell-Refact-Utils-Monad.html#defaultSettings",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils Monad",
          "module": "Language.Haskell.Refact.Utils.Monad",
          "name": "defaultSettings",
          "package": "HaRe",
          "partial": "Settings",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-Monad.html#v:defaultSettings"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake sure the given file is the currently loaded target, and load\n it if not. Assumes that all the module graphs had been generated\n before, so these are not updated.\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils.Monad",
          "name": "ensureTargetLoaded",
          "package": "HaRe",
          "signature": "TargetModule -\u003e RefactGhc ModSummary",
          "source": "src/Language-Haskell-Refact-Utils-Monad.html#ensureTargetLoaded",
          "type": "function"
        },
        "index": {
          "description": "Make sure the given file is the currently loaded target and load it if not Assumes that all the module graphs had been generated before so these are not updated",
          "hierarchy": "Language Haskell Refact Utils Monad",
          "module": "Language.Haskell.Refact.Utils.Monad",
          "name": "ensureTargetLoaded",
          "normalized": "TargetModule-\u003eRefactGhc ModSummary",
          "package": "HaRe",
          "partial": "Target Loaded",
          "signature": "TargetModule-\u003eRefactGhc ModSummary",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-Monad.html#v:ensureTargetLoaded"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.Monad",
          "name": "getRefacSettings",
          "package": "HaRe",
          "signature": "RefactGhc RefactSettings",
          "source": "src/Language-Haskell-Refact-Utils-Monad.html#getRefacSettings",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils Monad",
          "module": "Language.Haskell.Refact.Utils.Monad",
          "name": "getRefacSettings",
          "package": "HaRe",
          "partial": "Refac Settings",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-Monad.html#v:getRefacSettings"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInitialise the GHC session, when starting a refactoring.\n   This should never be called directly.\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils.Monad",
          "name": "initGhcSession",
          "package": "HaRe",
          "signature": "Cradle -\u003e [FilePath] -\u003e RefactGhc ()",
          "source": "src/Language-Haskell-Refact-Utils-Monad.html#initGhcSession",
          "type": "function"
        },
        "index": {
          "description": "Initialise the GHC session when starting refactoring This should never be called directly",
          "hierarchy": "Language Haskell Refact Utils Monad",
          "module": "Language.Haskell.Refact.Utils.Monad",
          "name": "initGhcSession",
          "normalized": "Cradle-\u003e[FilePath]-\u003eRefactGhc()",
          "package": "HaRe",
          "partial": "Ghc Session",
          "signature": "Cradle-\u003e[FilePath]-\u003eRefactGhc()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-Monad.html#v:initGhcSession"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLoad a module graph into the GHC session, starting from main\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils.Monad",
          "name": "loadModuleGraphGhc",
          "package": "HaRe",
          "signature": "Maybe [FilePath] -\u003e RefactGhc ()",
          "source": "src/Language-Haskell-Refact-Utils-Monad.html#loadModuleGraphGhc",
          "type": "function"
        },
        "index": {
          "description": "Load module graph into the GHC session starting from main",
          "hierarchy": "Language Haskell Refact Utils Monad",
          "module": "Language.Haskell.Refact.Utils.Monad",
          "name": "loadModuleGraphGhc",
          "normalized": "Maybe[FilePath]-\u003eRefactGhc()",
          "package": "HaRe",
          "partial": "Module Graph Ghc",
          "signature": "Maybe[FilePath]-\u003eRefactGhc()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-Monad.html#v:loadModuleGraphGhc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.Monad",
          "name": "logSettings",
          "package": "HaRe",
          "signature": "RefactSettings",
          "source": "src/Language-Haskell-Refact-Utils-Monad.html#logSettings",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils Monad",
          "module": "Language.Haskell.Refact.Utils.Monad",
          "name": "logSettings",
          "package": "HaRe",
          "partial": "Settings",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-Monad.html#v:logSettings"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.Monad",
          "name": "logm",
          "package": "HaRe",
          "signature": "String -\u003e RefactGhc ()",
          "source": "src/Language-Haskell-Refact-Utils-Monad.html#logm",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils Monad",
          "module": "Language.Haskell.Refact.Utils.Monad",
          "name": "logm",
          "normalized": "String-\u003eRefactGhc()",
          "package": "HaRe",
          "signature": "String-\u003eRefactGhc()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-Monad.html#v:logm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.Monad",
          "name": "rsCurrentTarget",
          "package": "HaRe",
          "signature": "Maybe [FilePath]",
          "source": "src/Language-Haskell-Refact-Utils-Monad.html#RefactState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils Monad",
          "module": "Language.Haskell.Refact.Utils.Monad",
          "name": "rsCurrentTarget",
          "normalized": "Maybe[FilePath]",
          "package": "HaRe",
          "partial": "Current Target",
          "signature": "Maybe[FilePath]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-Monad.html#v:rsCurrentTarget"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCurrent traversal has already made a change\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils.Monad",
          "name": "rsDone",
          "package": "HaRe",
          "signature": "Bool",
          "source": "src/Language-Haskell-Refact-Utils-Monad.html#RefactFlags",
          "type": "function"
        },
        "index": {
          "description": "Current traversal has already made change",
          "hierarchy": "Language Haskell Refact Utils Monad",
          "module": "Language.Haskell.Refact.Utils.Monad",
          "name": "rsDone",
          "package": "HaRe",
          "partial": "Done",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-Monad.html#v:rsDone"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFlags for controlling generic traversals\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils.Monad",
          "name": "rsFlags",
          "package": "HaRe",
          "signature": "RefactFlags",
          "source": "src/Language-Haskell-Refact-Utils-Monad.html#RefactState",
          "type": "function"
        },
        "index": {
          "description": "Flags for controlling generic traversals",
          "hierarchy": "Language Haskell Refact Utils Monad",
          "module": "Language.Haskell.Refact.Utils.Monad",
          "name": "rsFlags",
          "package": "HaRe",
          "partial": "Flags",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-Monad.html#v:rsFlags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.Monad",
          "name": "rsGraph",
          "package": "HaRe",
          "signature": "[TargetGraph]",
          "source": "src/Language-Haskell-Refact-Utils-Monad.html#RefactState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils Monad",
          "module": "Language.Haskell.Refact.Utils.Monad",
          "name": "rsGraph",
          "normalized": "[TargetGraph]",
          "package": "HaRe",
          "partial": "Graph",
          "signature": "[TargetGraph]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-Monad.html#v:rsGraph"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe current module being refactored\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils.Monad",
          "name": "rsModule",
          "package": "HaRe",
          "signature": "(Maybe RefactModule)",
          "source": "src/Language-Haskell-Refact-Utils-Monad.html#RefactState",
          "type": "function"
        },
        "index": {
          "description": "The current module being refactored",
          "hierarchy": "Language Haskell Refact Utils Monad",
          "module": "Language.Haskell.Refact.Utils.Monad",
          "name": "rsModule",
          "package": "HaRe",
          "partial": "Module",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-Monad.html#v:rsModule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.Monad",
          "name": "rsModuleGraph",
          "package": "HaRe",
          "signature": "[([FilePath], ModuleGraph)]",
          "source": "src/Language-Haskell-Refact-Utils-Monad.html#RefactState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils Monad",
          "module": "Language.Haskell.Refact.Utils.Monad",
          "name": "rsModuleGraph",
          "normalized": "[([FilePath],ModuleGraph)]",
          "package": "HaRe",
          "partial": "Module Graph",
          "signature": "[([FilePath],ModuleGraph)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-Monad.html#v:rsModuleGraph"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOriginal Token stream for the current module\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils.Monad",
          "name": "rsOrigTokenStream",
          "package": "HaRe",
          "signature": "[PosToken]",
          "source": "src/Language-Haskell-Refact-Utils-Monad.html#RefactModule",
          "type": "function"
        },
        "index": {
          "description": "Original Token stream for the current module",
          "hierarchy": "Language Haskell Refact Utils Monad",
          "module": "Language.Haskell.Refact.Utils.Monad",
          "name": "rsOrigTokenStream",
          "normalized": "[PosToken]",
          "package": "HaRe",
          "partial": "Orig Token Stream",
          "signature": "[PosToken]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-Monad.html#v:rsOrigTokenStream"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSession level settings\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils.Monad",
          "name": "rsSettings",
          "package": "HaRe",
          "signature": "RefactSettings",
          "source": "src/Language-Haskell-Refact-Utils-Monad.html#RefactState",
          "type": "function"
        },
        "index": {
          "description": "Session level settings",
          "hierarchy": "Language Haskell Refact Utils Monad",
          "module": "Language.Haskell.Refact.Utils.Monad",
          "name": "rsSettings",
          "package": "HaRe",
          "partial": "Settings",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-Monad.html#v:rsSettings"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTemporary storage of values\n while refactoring takes place\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils.Monad",
          "name": "rsStorage",
          "package": "HaRe",
          "signature": "StateStorage",
          "source": "src/Language-Haskell-Refact-Utils-Monad.html#RefactState",
          "type": "function"
        },
        "index": {
          "description": "Temporary storage of values while refactoring takes place",
          "hierarchy": "Language Haskell Refact Utils Monad",
          "module": "Language.Haskell.Refact.Utils.Monad",
          "name": "rsStorage",
          "package": "HaRe",
          "partial": "Storage",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-Monad.html#v:rsStorage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecurrent module has updated the token stream\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils.Monad",
          "name": "rsStreamModified",
          "package": "HaRe",
          "signature": "Bool",
          "source": "src/Language-Haskell-Refact-Utils-Monad.html#RefactModule",
          "type": "function"
        },
        "index": {
          "description": "current module has updated the token stream",
          "hierarchy": "Language Haskell Refact Utils Monad",
          "module": "Language.Haskell.Refact.Utils.Monad",
          "name": "rsStreamModified",
          "package": "HaRe",
          "partial": "Stream Modified",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-Monad.html#v:rsStreamModified"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eToken stream for the current module, maybe modified, in SrcSpan tree form\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils.Monad",
          "name": "rsTokenCache",
          "package": "HaRe",
          "signature": "TokenCache",
          "source": "src/Language-Haskell-Refact-Utils-Monad.html#RefactModule",
          "type": "function"
        },
        "index": {
          "description": "Token stream for the current module maybe modified in SrcSpan tree form",
          "hierarchy": "Language Haskell Refact Utils Monad",
          "module": "Language.Haskell.Refact.Utils.Monad",
          "name": "rsTokenCache",
          "package": "HaRe",
          "partial": "Token Cache",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-Monad.html#v:rsTokenCache"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.Monad",
          "name": "rsTypecheckedMod",
          "package": "HaRe",
          "signature": "TypecheckedModule",
          "source": "src/Language-Haskell-Refact-Utils-Monad.html#RefactModule",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils Monad",
          "module": "Language.Haskell.Refact.Utils.Monad",
          "name": "rsTypecheckedMod",
          "package": "HaRe",
          "partial": "Typechecked Mod",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-Monad.html#v:rsTypecheckedMod"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCurrent Unique creator value, incremented every time it is used\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils.Monad",
          "name": "rsUniqState",
          "package": "HaRe",
          "signature": "Int",
          "source": "src/Language-Haskell-Refact-Utils-Monad.html#RefactState",
          "type": "function"
        },
        "index": {
          "description": "Current Unique creator value incremented every time it is used",
          "hierarchy": "Language Haskell Refact Utils Monad",
          "module": "Language.Haskell.Refact.Utils.Monad",
          "name": "rsUniqState",
          "package": "HaRe",
          "partial": "Uniq State",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-Monad.html#v:rsUniqState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.Monad",
          "name": "rsetCheckTokenUtilsInvariant",
          "package": "HaRe",
          "signature": "Bool",
          "source": "src/Language-Haskell-Refact-Utils-Monad.html#RefactSettings",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils Monad",
          "module": "Language.Haskell.Refact.Utils.Monad",
          "name": "rsetCheckTokenUtilsInvariant",
          "package": "HaRe",
          "partial": "Check Token Utils Invariant",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-Monad.html#v:rsetCheckTokenUtilsInvariant"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.Monad",
          "name": "rsetEnabledTargets",
          "package": "HaRe",
          "signature": "(Bool, Bool, Bool, Bool)",
          "source": "src/Language-Haskell-Refact-Utils-Monad.html#RefactSettings",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils Monad",
          "module": "Language.Haskell.Refact.Utils.Monad",
          "name": "rsetEnabledTargets",
          "normalized": "(Bool,Bool,Bool,Bool)",
          "package": "HaRe",
          "partial": "Enabled Targets",
          "signature": "(Bool,Bool,Bool,Bool)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-Monad.html#v:rsetEnabledTargets"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.Monad",
          "name": "rsetExpandSplice",
          "package": "HaRe",
          "signature": "Bool",
          "source": "src/Language-Haskell-Refact-Utils-Monad.html#RefactSettings",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils Monad",
          "module": "Language.Haskell.Refact.Utils.Monad",
          "name": "rsetExpandSplice",
          "package": "HaRe",
          "partial": "Expand Splice",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-Monad.html#v:rsetExpandSplice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.Monad",
          "name": "rsetGhcOpts",
          "package": "HaRe",
          "signature": "[String]",
          "source": "src/Language-Haskell-Refact-Utils-Monad.html#RefactSettings",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils Monad",
          "module": "Language.Haskell.Refact.Utils.Monad",
          "name": "rsetGhcOpts",
          "normalized": "[String]",
          "package": "HaRe",
          "partial": "Ghc Opts",
          "signature": "[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-Monad.html#v:rsetGhcOpts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.Monad",
          "name": "rsetImportPaths",
          "package": "HaRe",
          "signature": "[FilePath]",
          "source": "src/Language-Haskell-Refact-Utils-Monad.html#RefactSettings",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils Monad",
          "module": "Language.Haskell.Refact.Utils.Monad",
          "name": "rsetImportPaths",
          "normalized": "[FilePath]",
          "package": "HaRe",
          "partial": "Import Paths",
          "signature": "[FilePath]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-Monad.html#v:rsetImportPaths"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.Monad",
          "name": "rsetLineSeparator",
          "package": "HaRe",
          "signature": "LineSeparator",
          "source": "src/Language-Haskell-Refact-Utils-Monad.html#RefactSettings",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils Monad",
          "module": "Language.Haskell.Refact.Utils.Monad",
          "name": "rsetLineSeparator",
          "package": "HaRe",
          "partial": "Line Separator",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-Monad.html#v:rsetLineSeparator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.Monad",
          "name": "rsetMainFile",
          "package": "HaRe",
          "signature": "Maybe [FilePath]",
          "source": "src/Language-Haskell-Refact-Utils-Monad.html#RefactSettings",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils Monad",
          "module": "Language.Haskell.Refact.Utils.Monad",
          "name": "rsetMainFile",
          "normalized": "Maybe[FilePath]",
          "package": "HaRe",
          "partial": "Main File",
          "signature": "Maybe[FilePath]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-Monad.html#v:rsetMainFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.Monad",
          "name": "rsetVerboseLevel",
          "package": "HaRe",
          "signature": "VerboseLevel",
          "source": "src/Language-Haskell-Refact-Utils-Monad.html#RefactSettings",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils Monad",
          "module": "Language.Haskell.Refact.Utils.Monad",
          "name": "rsetVerboseLevel",
          "package": "HaRe",
          "partial": "Verbose Level",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-Monad.html#v:rsetVerboseLevel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.Monad",
          "name": "runRefactGhc",
          "package": "HaRe",
          "signature": "RefactGhc a -\u003e RefactState -\u003e IO (a, RefactState)",
          "source": "src/Language-Haskell-Refact-Utils-Monad.html#runRefactGhc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils Monad",
          "module": "Language.Haskell.Refact.Utils.Monad",
          "name": "runRefactGhc",
          "normalized": "RefactGhc a-\u003eRefactState-\u003eIO(a,RefactState)",
          "package": "HaRe",
          "partial": "Refact Ghc",
          "signature": "RefactGhc a-\u003eRefactState-\u003eIO(a,RefactState)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-Monad.html#v:runRefactGhc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.MonadFunctions",
          "name": "MonadFunctions",
          "package": "HaRe",
          "source": "src/Language-Haskell-Refact-Utils-MonadFunctions.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils MonadFunctions",
          "module": "Language.Haskell.Refact.Utils.MonadFunctions",
          "name": "MonadFunctions",
          "package": "HaRe",
          "partial": "Monad Functions",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-MonadFunctions.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.MonadFunctions",
          "name": "clearParsedModule",
          "package": "HaRe",
          "signature": "RefactGhc ()",
          "source": "src/Language-Haskell-Refact-Utils-MonadFunctions.html#clearParsedModule",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils MonadFunctions",
          "module": "Language.Haskell.Refact.Utils.MonadFunctions",
          "name": "clearParsedModule",
          "normalized": "RefactGhc()",
          "package": "HaRe",
          "partial": "Parsed Module",
          "signature": "RefactGhc()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-MonadFunctions.html#v:clearParsedModule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.MonadFunctions",
          "name": "clearRefactDone",
          "package": "HaRe",
          "signature": "RefactGhc ()",
          "source": "src/Language-Haskell-Refact-Utils-MonadFunctions.html#clearRefactDone",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils MonadFunctions",
          "module": "Language.Haskell.Refact.Utils.MonadFunctions",
          "name": "clearRefactDone",
          "normalized": "RefactGhc()",
          "package": "HaRe",
          "partial": "Refact Done",
          "signature": "RefactGhc()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-MonadFunctions.html#v:clearRefactDone"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrint the Token Tree for debug purposes\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils.MonadFunctions",
          "name": "drawTokenTree",
          "package": "HaRe",
          "signature": "String -\u003e RefactGhc ()",
          "source": "src/Language-Haskell-Refact-Utils-MonadFunctions.html#drawTokenTree",
          "type": "function"
        },
        "index": {
          "description": "Print the Token Tree for debug purposes",
          "hierarchy": "Language Haskell Refact Utils MonadFunctions",
          "module": "Language.Haskell.Refact.Utils.MonadFunctions",
          "name": "drawTokenTree",
          "normalized": "String-\u003eRefactGhc()",
          "package": "HaRe",
          "partial": "Token Tree",
          "signature": "String-\u003eRefactGhc()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-MonadFunctions.html#v:drawTokenTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrint detailed Token Tree for debug purposes\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils.MonadFunctions",
          "name": "drawTokenTreeDetailed",
          "package": "HaRe",
          "signature": "String -\u003e RefactGhc ()",
          "source": "src/Language-Haskell-Refact-Utils-MonadFunctions.html#drawTokenTreeDetailed",
          "type": "function"
        },
        "index": {
          "description": "Print detailed Token Tree for debug purposes",
          "hierarchy": "Language Haskell Refact Utils MonadFunctions",
          "module": "Language.Haskell.Refact.Utils.MonadFunctions",
          "name": "drawTokenTreeDetailed",
          "normalized": "String-\u003eRefactGhc()",
          "package": "HaRe",
          "partial": "Token Tree Detailed",
          "signature": "String-\u003eRefactGhc()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-MonadFunctions.html#v:drawTokenTreeDetailed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003efetch the final tokens in Ppr format\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils.MonadFunctions",
          "name": "fetchLinesFinal",
          "package": "HaRe",
          "signature": "RefactGhc [Line]",
          "source": "src/Language-Haskell-Refact-Utils-MonadFunctions.html#fetchLinesFinal",
          "type": "function"
        },
        "index": {
          "description": "fetch the final tokens in Ppr format",
          "hierarchy": "Language Haskell Refact Utils MonadFunctions",
          "module": "Language.Haskell.Refact.Utils.MonadFunctions",
          "name": "fetchLinesFinal",
          "normalized": "RefactGhc[Line]",
          "package": "HaRe",
          "partial": "Lines Final",
          "signature": "RefactGhc[Line]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-MonadFunctions.html#v:fetchLinesFinal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003efetch the pristine token stream\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils.MonadFunctions",
          "name": "fetchOrigToks",
          "package": "HaRe",
          "signature": "RefactGhc [PosToken]",
          "source": "src/Language-Haskell-Refact-Utils-MonadFunctions.html#fetchOrigToks",
          "type": "function"
        },
        "index": {
          "description": "fetch the pristine token stream",
          "hierarchy": "Language Haskell Refact Utils MonadFunctions",
          "module": "Language.Haskell.Refact.Utils.MonadFunctions",
          "name": "fetchOrigToks",
          "normalized": "RefactGhc[PosToken]",
          "package": "HaRe",
          "partial": "Orig Toks",
          "signature": "RefactGhc[PosToken]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-MonadFunctions.html#v:fetchOrigToks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003efetch the possibly modified tokens. Deprecated\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils.MonadFunctions",
          "name": "fetchToks",
          "package": "HaRe",
          "signature": "RefactGhc [PosToken]",
          "source": "src/Language-Haskell-Refact-Utils-MonadFunctions.html#fetchToks",
          "type": "function"
        },
        "index": {
          "description": "fetch the possibly modified tokens Deprecated",
          "hierarchy": "Language Haskell Refact Utils MonadFunctions",
          "module": "Language.Haskell.Refact.Utils.MonadFunctions",
          "name": "fetchToks",
          "normalized": "RefactGhc[PosToken]",
          "package": "HaRe",
          "partial": "Toks",
          "signature": "RefactGhc[PosToken]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-MonadFunctions.html#v:fetchToks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003efetch the final tokens\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils.MonadFunctions",
          "name": "fetchToksFinal",
          "package": "HaRe",
          "signature": "RefactGhc [PosToken]",
          "source": "src/Language-Haskell-Refact-Utils-MonadFunctions.html#fetchToksFinal",
          "type": "function"
        },
        "index": {
          "description": "fetch the final tokens",
          "hierarchy": "Language Haskell Refact Utils MonadFunctions",
          "module": "Language.Haskell.Refact.Utils.MonadFunctions",
          "name": "fetchToksFinal",
          "normalized": "RefactGhc[PosToken]",
          "package": "HaRe",
          "partial": "Toks Final",
          "signature": "RefactGhc[PosToken]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-MonadFunctions.html#v:fetchToksFinal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.MonadFunctions",
          "name": "getRefactDone",
          "package": "HaRe",
          "signature": "RefactGhc Bool",
          "source": "src/Language-Haskell-Refact-Utils-MonadFunctions.html#getRefactDone",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils MonadFunctions",
          "module": "Language.Haskell.Refact.Utils.MonadFunctions",
          "name": "getRefactDone",
          "package": "HaRe",
          "partial": "Refact Done",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-MonadFunctions.html#v:getRefactDone"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.MonadFunctions",
          "name": "getRefactFileName",
          "package": "HaRe",
          "signature": "RefactGhc (Maybe FilePath)",
          "source": "src/Language-Haskell-Refact-Utils-MonadFunctions.html#getRefactFileName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils MonadFunctions",
          "module": "Language.Haskell.Refact.Utils.MonadFunctions",
          "name": "getRefactFileName",
          "package": "HaRe",
          "partial": "Refact File Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-MonadFunctions.html#v:getRefactFileName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.MonadFunctions",
          "name": "getRefactInscopes",
          "package": "HaRe",
          "signature": "RefactGhc InScopes",
          "source": "src/Language-Haskell-Refact-Utils-MonadFunctions.html#getRefactInscopes",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils MonadFunctions",
          "module": "Language.Haskell.Refact.Utils.MonadFunctions",
          "name": "getRefactInscopes",
          "package": "HaRe",
          "partial": "Refact Inscopes",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-MonadFunctions.html#v:getRefactInscopes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.MonadFunctions",
          "name": "getRefactParsed",
          "package": "HaRe",
          "signature": "RefactGhc ParsedSource",
          "source": "src/Language-Haskell-Refact-Utils-MonadFunctions.html#getRefactParsed",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils MonadFunctions",
          "module": "Language.Haskell.Refact.Utils.MonadFunctions",
          "name": "getRefactParsed",
          "package": "HaRe",
          "partial": "Refact Parsed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-MonadFunctions.html#v:getRefactParsed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.MonadFunctions",
          "name": "getRefactRenamed",
          "package": "HaRe",
          "signature": "RefactGhc RenamedSource",
          "source": "src/Language-Haskell-Refact-Utils-MonadFunctions.html#getRefactRenamed",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils MonadFunctions",
          "module": "Language.Haskell.Refact.Utils.MonadFunctions",
          "name": "getRefactRenamed",
          "package": "HaRe",
          "partial": "Refact Renamed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-MonadFunctions.html#v:getRefactRenamed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.MonadFunctions",
          "name": "getRefactStreamModified",
          "package": "HaRe",
          "signature": "RefactGhc Bool",
          "source": "src/Language-Haskell-Refact-Utils-MonadFunctions.html#getRefactStreamModified",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils MonadFunctions",
          "module": "Language.Haskell.Refact.Utils.MonadFunctions",
          "name": "getRefactStreamModified",
          "package": "HaRe",
          "partial": "Refact Stream Modified",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-MonadFunctions.html#v:getRefactStreamModified"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.MonadFunctions",
          "name": "getStateStorage",
          "package": "HaRe",
          "signature": "RefactGhc StateStorage",
          "source": "src/Language-Haskell-Refact-Utils-MonadFunctions.html#getStateStorage",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils MonadFunctions",
          "module": "Language.Haskell.Refact.Utils.MonadFunctions",
          "name": "getStateStorage",
          "package": "HaRe",
          "partial": "State Storage",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-MonadFunctions.html#v:getStateStorage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the Token Tree for debug purposes\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils.MonadFunctions",
          "name": "getTokenTree",
          "package": "HaRe",
          "signature": "RefactGhc (Tree Entry)",
          "source": "src/Language-Haskell-Refact-Utils-MonadFunctions.html#getTokenTree",
          "type": "function"
        },
        "index": {
          "description": "Get the Token Tree for debug purposes",
          "hierarchy": "Language Haskell Refact Utils MonadFunctions",
          "module": "Language.Haskell.Refact.Utils.MonadFunctions",
          "name": "getTokenTree",
          "package": "HaRe",
          "partial": "Token Tree",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-MonadFunctions.html#v:getTokenTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the current tokens preceding a given GHC.SrcSpan.\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils.MonadFunctions",
          "name": "getToksBeforeSpan",
          "package": "HaRe",
          "signature": "SrcSpan -\u003e RefactGhc ReversedToks",
          "source": "src/Language-Haskell-Refact-Utils-MonadFunctions.html#getToksBeforeSpan",
          "type": "function"
        },
        "index": {
          "description": "Get the current tokens preceding given GHC.SrcSpan",
          "hierarchy": "Language Haskell Refact Utils MonadFunctions",
          "module": "Language.Haskell.Refact.Utils.MonadFunctions",
          "name": "getToksBeforeSpan",
          "normalized": "SrcSpan-\u003eRefactGhc ReversedToks",
          "package": "HaRe",
          "partial": "Toks Before Span",
          "signature": "SrcSpan-\u003eRefactGhc ReversedToks",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-MonadFunctions.html#v:getToksBeforeSpan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the current tokens for a given GHC.SrcSpan.\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils.MonadFunctions",
          "name": "getToksForSpan",
          "package": "HaRe",
          "signature": "SrcSpan -\u003e RefactGhc [PosToken]",
          "source": "src/Language-Haskell-Refact-Utils-MonadFunctions.html#getToksForSpan",
          "type": "function"
        },
        "index": {
          "description": "Get the current tokens for given GHC.SrcSpan",
          "hierarchy": "Language Haskell Refact Utils MonadFunctions",
          "module": "Language.Haskell.Refact.Utils.MonadFunctions",
          "name": "getToksForSpan",
          "normalized": "SrcSpan-\u003eRefactGhc[PosToken]",
          "package": "HaRe",
          "partial": "Toks For Span",
          "signature": "SrcSpan-\u003eRefactGhc[PosToken]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-MonadFunctions.html#v:getToksForSpan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the current tokens for a given GHC.SrcSpan, without checking\n the invariant.\n TODO: this should not be necessary\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils.MonadFunctions",
          "name": "getToksForSpanNoInv",
          "package": "HaRe",
          "signature": "SrcSpan -\u003e RefactGhc [PosToken]",
          "source": "src/Language-Haskell-Refact-Utils-MonadFunctions.html#getToksForSpanNoInv",
          "type": "function"
        },
        "index": {
          "description": "Get the current tokens for given GHC.SrcSpan without checking the invariant TODO this should not be necessary",
          "hierarchy": "Language Haskell Refact Utils MonadFunctions",
          "module": "Language.Haskell.Refact.Utils.MonadFunctions",
          "name": "getToksForSpanNoInv",
          "normalized": "SrcSpan-\u003eRefactGhc[PosToken]",
          "package": "HaRe",
          "partial": "Toks For Span No Inv",
          "signature": "SrcSpan-\u003eRefactGhc[PosToken]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-MonadFunctions.html#v:getToksForSpanNoInv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the current tokens for a given GHC.SrcSpan, leaving out any\n leading 'then', 'else', 'of', 'do' or 'in' tokens\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils.MonadFunctions",
          "name": "getToksForSpanWithIntros",
          "package": "HaRe",
          "signature": "SrcSpan -\u003e RefactGhc [PosToken]",
          "source": "src/Language-Haskell-Refact-Utils-MonadFunctions.html#getToksForSpanWithIntros",
          "type": "function"
        },
        "index": {
          "description": "Get the current tokens for given GHC.SrcSpan leaving out any leading then else of do or in tokens",
          "hierarchy": "Language Haskell Refact Utils MonadFunctions",
          "module": "Language.Haskell.Refact.Utils.MonadFunctions",
          "name": "getToksForSpanWithIntros",
          "normalized": "SrcSpan-\u003eRefactGhc[PosToken]",
          "package": "HaRe",
          "partial": "Toks For Span With Intros",
          "signature": "SrcSpan-\u003eRefactGhc[PosToken]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-MonadFunctions.html#v:getToksForSpanWithIntros"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.MonadFunctions",
          "name": "getTypecheckedModule",
          "package": "HaRe",
          "signature": "RefactGhc TypecheckedModule",
          "source": "src/Language-Haskell-Refact-Utils-MonadFunctions.html#getTypecheckedModule",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils MonadFunctions",
          "module": "Language.Haskell.Refact.Utils.MonadFunctions",
          "name": "getTypecheckedModule",
          "package": "HaRe",
          "partial": "Typechecked Module",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-MonadFunctions.html#v:getTypecheckedModule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIndent an AST fragment and its associated tokens by a set amount\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils.MonadFunctions",
          "name": "indentDeclAndToks",
          "package": "HaRe",
          "signature": "Located t -\u003e Int -\u003e RefactGhc (Located t)",
          "source": "src/Language-Haskell-Refact-Utils-MonadFunctions.html#indentDeclAndToks",
          "type": "function"
        },
        "index": {
          "description": "Indent an AST fragment and its associated tokens by set amount",
          "hierarchy": "Language Haskell Refact Utils MonadFunctions",
          "module": "Language.Haskell.Refact.Utils.MonadFunctions",
          "name": "indentDeclAndToks",
          "normalized": "Located a-\u003eInt-\u003eRefactGhc(Located a)",
          "package": "HaRe",
          "partial": "Decl And Toks",
          "signature": "Located t-\u003eInt-\u003eRefactGhc(Located t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-MonadFunctions.html#v:indentDeclAndToks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.MonadFunctions",
          "name": "initRefactModule",
          "package": "HaRe",
          "signature": "TypecheckedModule -\u003e [PosToken] -\u003e Maybe RefactModule",
          "source": "src/Language-Haskell-Refact-Utils-MonadFunctions.html#initRefactModule",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils MonadFunctions",
          "module": "Language.Haskell.Refact.Utils.MonadFunctions",
          "name": "initRefactModule",
          "normalized": "TypecheckedModule-\u003e[PosToken]-\u003eMaybe RefactModule",
          "package": "HaRe",
          "partial": "Refact Module",
          "signature": "TypecheckedModule-\u003e[PosToken]-\u003eMaybe RefactModule",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-MonadFunctions.html#v:initRefactModule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd tokens after a designated GHC.SrcSpan, and update the AST\n fragment to reflect it\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils.MonadFunctions",
          "name": "putDeclToksAfterSpan",
          "package": "HaRe",
          "signature": "SrcSpan -\u003e Located t -\u003e Positioning -\u003e [PosToken] -\u003e RefactGhc (Located t)",
          "source": "src/Language-Haskell-Refact-Utils-MonadFunctions.html#putDeclToksAfterSpan",
          "type": "function"
        },
        "index": {
          "description": "Add tokens after designated GHC.SrcSpan and update the AST fragment to reflect it",
          "hierarchy": "Language Haskell Refact Utils MonadFunctions",
          "module": "Language.Haskell.Refact.Utils.MonadFunctions",
          "name": "putDeclToksAfterSpan",
          "normalized": "SrcSpan-\u003eLocated a-\u003ePositioning-\u003e[PosToken]-\u003eRefactGhc(Located a)",
          "package": "HaRe",
          "partial": "Decl Toks After Span",
          "signature": "SrcSpan-\u003eLocated t-\u003ePositioning-\u003e[PosToken]-\u003eRefactGhc(Located t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-MonadFunctions.html#v:putDeclToksAfterSpan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.MonadFunctions",
          "name": "putParsedModule",
          "package": "HaRe",
          "signature": "TypecheckedModule -\u003e [PosToken] -\u003e RefactGhc ()",
          "source": "src/Language-Haskell-Refact-Utils-MonadFunctions.html#putParsedModule",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils MonadFunctions",
          "module": "Language.Haskell.Refact.Utils.MonadFunctions",
          "name": "putParsedModule",
          "normalized": "TypecheckedModule-\u003e[PosToken]-\u003eRefactGhc()",
          "package": "HaRe",
          "partial": "Parsed Module",
          "signature": "TypecheckedModule-\u003e[PosToken]-\u003eRefactGhc()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-MonadFunctions.html#v:putParsedModule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.MonadFunctions",
          "name": "putRefactRenamed",
          "package": "HaRe",
          "signature": "RenamedSource -\u003e RefactGhc ()",
          "source": "src/Language-Haskell-Refact-Utils-MonadFunctions.html#putRefactRenamed",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils MonadFunctions",
          "module": "Language.Haskell.Refact.Utils.MonadFunctions",
          "name": "putRefactRenamed",
          "normalized": "RenamedSource-\u003eRefactGhc()",
          "package": "HaRe",
          "partial": "Refact Renamed",
          "signature": "RenamedSource-\u003eRefactGhc()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-MonadFunctions.html#v:putRefactRenamed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd tokens after a designated position\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils.MonadFunctions",
          "name": "putToksAfterPos",
          "package": "HaRe",
          "signature": "(SimpPos, SimpPos) -\u003e Positioning -\u003e [PosToken] -\u003e RefactGhc SrcSpan",
          "source": "src/Language-Haskell-Refact-Utils-MonadFunctions.html#putToksAfterPos",
          "type": "function"
        },
        "index": {
          "description": "Add tokens after designated position",
          "hierarchy": "Language Haskell Refact Utils MonadFunctions",
          "module": "Language.Haskell.Refact.Utils.MonadFunctions",
          "name": "putToksAfterPos",
          "normalized": "(SimpPos,SimpPos)-\u003ePositioning-\u003e[PosToken]-\u003eRefactGhc SrcSpan",
          "package": "HaRe",
          "partial": "Toks After Pos",
          "signature": "(SimpPos,SimpPos)-\u003ePositioning-\u003e[PosToken]-\u003eRefactGhc SrcSpan",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-MonadFunctions.html#v:putToksAfterPos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd tokens after a designated GHC.SrcSpan\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils.MonadFunctions",
          "name": "putToksAfterSpan",
          "package": "HaRe",
          "signature": "SrcSpan -\u003e Positioning -\u003e [PosToken] -\u003e RefactGhc SrcSpan",
          "source": "src/Language-Haskell-Refact-Utils-MonadFunctions.html#putToksAfterSpan",
          "type": "function"
        },
        "index": {
          "description": "Add tokens after designated GHC.SrcSpan",
          "hierarchy": "Language Haskell Refact Utils MonadFunctions",
          "module": "Language.Haskell.Refact.Utils.MonadFunctions",
          "name": "putToksAfterSpan",
          "normalized": "SrcSpan-\u003ePositioning-\u003e[PosToken]-\u003eRefactGhc SrcSpan",
          "package": "HaRe",
          "partial": "Toks After Span",
          "signature": "SrcSpan-\u003ePositioning-\u003e[PosToken]-\u003eRefactGhc SrcSpan",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-MonadFunctions.html#v:putToksAfterSpan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReplace the tokens for a given GHC.SrcSpan, return GHC.SrcSpan\n they are placed in\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils.MonadFunctions",
          "name": "putToksForPos",
          "package": "HaRe",
          "signature": "(SimpPos, SimpPos) -\u003e [PosToken] -\u003e RefactGhc SrcSpan",
          "source": "src/Language-Haskell-Refact-Utils-MonadFunctions.html#putToksForPos",
          "type": "function"
        },
        "index": {
          "description": "Replace the tokens for given GHC.SrcSpan return GHC.SrcSpan they are placed in",
          "hierarchy": "Language Haskell Refact Utils MonadFunctions",
          "module": "Language.Haskell.Refact.Utils.MonadFunctions",
          "name": "putToksForPos",
          "normalized": "(SimpPos,SimpPos)-\u003e[PosToken]-\u003eRefactGhc SrcSpan",
          "package": "HaRe",
          "partial": "Toks For Pos",
          "signature": "(SimpPos,SimpPos)-\u003e[PosToken]-\u003eRefactGhc SrcSpan",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-MonadFunctions.html#v:putToksForPos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReplace the tokens for a given GHC.SrcSpan, return new GHC.SrcSpan\n delimiting new tokens\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils.MonadFunctions",
          "name": "putToksForSpan",
          "package": "HaRe",
          "signature": "SrcSpan -\u003e [PosToken] -\u003e RefactGhc SrcSpan",
          "source": "src/Language-Haskell-Refact-Utils-MonadFunctions.html#putToksForSpan",
          "type": "function"
        },
        "index": {
          "description": "Replace the tokens for given GHC.SrcSpan return new GHC.SrcSpan delimiting new tokens",
          "hierarchy": "Language Haskell Refact Utils MonadFunctions",
          "module": "Language.Haskell.Refact.Utils.MonadFunctions",
          "name": "putToksForSpan",
          "normalized": "SrcSpan-\u003e[PosToken]-\u003eRefactGhc SrcSpan",
          "package": "HaRe",
          "partial": "Toks For Span",
          "signature": "SrcSpan-\u003e[PosToken]-\u003eRefactGhc SrcSpan",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-MonadFunctions.html#v:putToksForSpan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemove a GHC.SrcSpan and its associated tokens\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils.MonadFunctions",
          "name": "removeToksForPos",
          "package": "HaRe",
          "signature": "(SimpPos, SimpPos) -\u003e RefactGhc ()",
          "source": "src/Language-Haskell-Refact-Utils-MonadFunctions.html#removeToksForPos",
          "type": "function"
        },
        "index": {
          "description": "Remove GHC.SrcSpan and its associated tokens",
          "hierarchy": "Language Haskell Refact Utils MonadFunctions",
          "module": "Language.Haskell.Refact.Utils.MonadFunctions",
          "name": "removeToksForPos",
          "normalized": "(SimpPos,SimpPos)-\u003eRefactGhc()",
          "package": "HaRe",
          "partial": "Toks For Pos",
          "signature": "(SimpPos,SimpPos)-\u003eRefactGhc()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-MonadFunctions.html#v:removeToksForPos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemove a GHC.SrcSpan and its associated tokens\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils.MonadFunctions",
          "name": "removeToksForSpan",
          "package": "HaRe",
          "signature": "SrcSpan -\u003e RefactGhc ()",
          "source": "src/Language-Haskell-Refact-Utils-MonadFunctions.html#removeToksForSpan",
          "type": "function"
        },
        "index": {
          "description": "Remove GHC.SrcSpan and its associated tokens",
          "hierarchy": "Language Haskell Refact Utils MonadFunctions",
          "module": "Language.Haskell.Refact.Utils.MonadFunctions",
          "name": "removeToksForSpan",
          "normalized": "SrcSpan-\u003eRefactGhc()",
          "package": "HaRe",
          "partial": "Toks For Span",
          "signature": "SrcSpan-\u003eRefactGhc()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-MonadFunctions.html#v:removeToksForSpan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReplace a token occurring in a given GHC.SrcSpan\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils.MonadFunctions",
          "name": "replaceToken",
          "package": "HaRe",
          "signature": "SrcSpan -\u003e PosToken -\u003e RefactGhc ()",
          "source": "src/Language-Haskell-Refact-Utils-MonadFunctions.html#replaceToken",
          "type": "function"
        },
        "index": {
          "description": "Replace token occurring in given GHC.SrcSpan",
          "hierarchy": "Language Haskell Refact Utils MonadFunctions",
          "module": "Language.Haskell.Refact.Utils.MonadFunctions",
          "name": "replaceToken",
          "normalized": "SrcSpan-\u003ePosToken-\u003eRefactGhc()",
          "package": "HaRe",
          "partial": "Token",
          "signature": "SrcSpan-\u003ePosToken-\u003eRefactGhc()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-MonadFunctions.html#v:replaceToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.MonadFunctions",
          "name": "setRefactDone",
          "package": "HaRe",
          "signature": "RefactGhc ()",
          "source": "src/Language-Haskell-Refact-Utils-MonadFunctions.html#setRefactDone",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils MonadFunctions",
          "module": "Language.Haskell.Refact.Utils.MonadFunctions",
          "name": "setRefactDone",
          "normalized": "RefactGhc()",
          "package": "HaRe",
          "partial": "Refact Done",
          "signature": "RefactGhc()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-MonadFunctions.html#v:setRefactDone"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.MonadFunctions",
          "name": "setStateStorage",
          "package": "HaRe",
          "signature": "StateStorage -\u003e RefactGhc ()",
          "source": "src/Language-Haskell-Refact-Utils-MonadFunctions.html#setStateStorage",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils MonadFunctions",
          "module": "Language.Haskell.Refact.Utils.MonadFunctions",
          "name": "setStateStorage",
          "normalized": "StateStorage-\u003eRefactGhc()",
          "package": "HaRe",
          "partial": "State Storage",
          "signature": "StateStorage-\u003eRefactGhc()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-MonadFunctions.html#v:setStateStorage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.MonadFunctions",
          "name": "showLinesDebug",
          "package": "HaRe",
          "signature": "String -\u003e RefactGhc ()",
          "source": "src/Language-Haskell-Refact-Utils-MonadFunctions.html#showLinesDebug",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils MonadFunctions",
          "module": "Language.Haskell.Refact.Utils.MonadFunctions",
          "name": "showLinesDebug",
          "normalized": "String-\u003eRefactGhc()",
          "package": "HaRe",
          "partial": "Lines Debug",
          "signature": "String-\u003eRefactGhc()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-MonadFunctions.html#v:showLinesDebug"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.MonadFunctions",
          "name": "syncDeclToLatestStash",
          "package": "HaRe",
          "signature": "Located t -\u003e RefactGhc (Located t)",
          "source": "src/Language-Haskell-Refact-Utils-MonadFunctions.html#syncDeclToLatestStash",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils MonadFunctions",
          "module": "Language.Haskell.Refact.Utils.MonadFunctions",
          "name": "syncDeclToLatestStash",
          "normalized": "Located a-\u003eRefactGhc(Located a)",
          "package": "HaRe",
          "partial": "Decl To Latest Stash",
          "signature": "Located t-\u003eRefactGhc(Located t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-MonadFunctions.html#v:syncDeclToLatestStash"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.MonadFunctions",
          "name": "updateToks",
          "package": "HaRe",
          "signature": "Located t-\u003e Located t-\u003e (Located t -\u003e [Char])-\u003e Bool-\u003e RefactGhc ()",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils MonadFunctions",
          "module": "Language.Haskell.Refact.Utils.MonadFunctions",
          "name": "updateToks",
          "normalized": "Located a-\u003eLocated a-\u003e(Located a-\u003e[Char])-\u003eBool-\u003eRefactGhc()",
          "package": "HaRe",
          "partial": "Toks",
          "signature": "Located t-\u003eLocated t-\u003e(Located t-\u003e[Char])-\u003eBool-\u003eRefactGhc()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-MonadFunctions.html#v:updateToks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.MonadFunctions",
          "name": "updateToksWithPos",
          "package": "HaRe",
          "signature": "(SimpPos, SimpPos)-\u003e t-\u003e (t -\u003e [Char])-\u003e Bool-\u003e RefactGhc ()",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils MonadFunctions",
          "module": "Language.Haskell.Refact.Utils.MonadFunctions",
          "name": "updateToksWithPos",
          "normalized": "(SimpPos,SimpPos)-\u003ea-\u003e(a-\u003e[Char])-\u003eBool-\u003eRefactGhc()",
          "package": "HaRe",
          "partial": "Toks With Pos",
          "signature": "(SimpPos,SimpPos)-\u003et-\u003e(t-\u003e[Char])-\u003eBool-\u003eRefactGhc()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-MonadFunctions.html#v:updateToksWithPos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module contains utilities that operate on the GHC RenamedSource\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Language.Haskell.Refact.Utils.RenamedSourceUtils",
          "name": "RenamedSourceUtils",
          "package": "HaRe",
          "source": "src/Language-Haskell-Refact-Utils-RenamedSourceUtils.html",
          "type": "module"
        },
        "index": {
          "description": "This module contains utilities that operate on the GHC RenamedSource",
          "hierarchy": "Language Haskell Refact Utils RenamedSourceUtils",
          "module": "Language.Haskell.Refact.Utils.RenamedSourceUtils",
          "name": "RenamedSourceUtils",
          "package": "HaRe",
          "partial": "Renamed Source Utils",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-RenamedSourceUtils.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.RenamedSourceUtils",
          "name": "getFreeVariables",
          "package": "HaRe",
          "signature": "t -\u003e [NameSet]",
          "source": "src/Language-Haskell-Refact-Utils-RenamedSourceUtils.html#getFreeVariables",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils RenamedSourceUtils",
          "module": "Language.Haskell.Refact.Utils.RenamedSourceUtils",
          "name": "getFreeVariables",
          "normalized": "a-\u003e[NameSet]",
          "package": "HaRe",
          "partial": "Free Variables",
          "signature": "t-\u003e[NameSet]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-RenamedSourceUtils.html#v:getFreeVariables"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module contains an API to manage a token stream.\n\u003c/p\u003e\u003cp\u003eThis API is used internally by MonadFunctions and the other utility\n modules, it should probably never be used directly in a refactoring.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Language.Haskell.Refact.Utils.TokenUtils",
          "name": "TokenUtils",
          "package": "HaRe",
          "source": "src/Language-Haskell-Refact-Utils-TokenUtils.html",
          "type": "module"
        },
        "index": {
          "description": "This module contains an API to manage token stream This API is used internally by MonadFunctions and the other utility modules it should probably never be used directly in refactoring",
          "hierarchy": "Language Haskell Refact Utils TokenUtils",
          "module": "Language.Haskell.Refact.Utils.TokenUtils",
          "name": "TokenUtils",
          "package": "HaRe",
          "partial": "Token Utils",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TokenUtils.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHow new SrcSpans should be inserted in the Token tree, relative to\n the prior span\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils.TokenUtils",
          "name": "Positioning",
          "package": "HaRe",
          "source": "src/Language-Haskell-Refact-Utils-TokenUtils.html#Positioning",
          "type": "data"
        },
        "index": {
          "description": "How new SrcSpans should be inserted in the Token tree relative to the prior span",
          "hierarchy": "Language Haskell Refact Utils TokenUtils",
          "module": "Language.Haskell.Refact.Utils.TokenUtils",
          "name": "Positioning",
          "package": "HaRe",
          "partial": "Positioning",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TokenUtils.html#t:Positioning"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eKeep track of when tokens are reversed, to avoid confusion\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils.TokenUtils",
          "name": "ReversedToks",
          "package": "HaRe",
          "source": "src/Language-Haskell-Refact-Utils-TokenUtils.html#ReversedToks",
          "type": "data"
        },
        "index": {
          "description": "Keep track of when tokens are reversed to avoid confusion",
          "hierarchy": "Language Haskell Refact Utils TokenUtils",
          "module": "Language.Haskell.Refact.Utils.TokenUtils",
          "name": "ReversedToks",
          "package": "HaRe",
          "partial": "Reversed Toks",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TokenUtils.html#t:ReversedToks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLine offset and\n absolute Col. Mainly\n for forcing start at\n left margin, number\n of lines to add at\n the end\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils.TokenUtils",
          "name": "PlaceAbsCol",
          "package": "HaRe",
          "signature": "PlaceAbsCol !Int !Int !Int",
          "source": "src/Language-Haskell-Refact-Utils-TokenUtils.html#Positioning",
          "type": "function"
        },
        "index": {
          "description": "Line offset and absolute Col Mainly for forcing start at left margin number of lines to add at the end",
          "hierarchy": "Language Haskell Refact Utils TokenUtils",
          "module": "Language.Haskell.Refact.Utils.TokenUtils",
          "name": "PlaceAbsCol",
          "package": "HaRe",
          "partial": "Place Abs Col",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TokenUtils.html#v:PlaceAbsCol"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStart at the specified\n line and col\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils.TokenUtils",
          "name": "PlaceAbsolute",
          "package": "HaRe",
          "signature": "PlaceAbsolute !Int !Int",
          "source": "src/Language-Haskell-Refact-Utils-TokenUtils.html#Positioning",
          "type": "function"
        },
        "index": {
          "description": "Start at the specified line and col",
          "hierarchy": "Language Haskell Refact Utils TokenUtils",
          "module": "Language.Haskell.Refact.Utils.TokenUtils",
          "name": "PlaceAbsolute",
          "package": "HaRe",
          "partial": "Place Absolute",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TokenUtils.html#v:PlaceAbsolute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOnly a single space between the\n end of the prior span and the new one\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils.TokenUtils",
          "name": "PlaceAdjacent",
          "package": "HaRe",
          "signature": "PlaceAdjacent",
          "source": "src/Language-Haskell-Refact-Utils-TokenUtils.html#Positioning",
          "type": "function"
        },
        "index": {
          "description": "Only single space between the end of the prior span and the new one",
          "hierarchy": "Language Haskell Refact Utils TokenUtils",
          "module": "Language.Haskell.Refact.Utils.TokenUtils",
          "name": "PlaceAdjacent",
          "package": "HaRe",
          "partial": "Place Adjacent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TokenUtils.html#v:PlaceAdjacent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLine and Col offset for\n start, num lines to add at the end\n relative to the indent level of the prior line\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils.TokenUtils",
          "name": "PlaceIndent",
          "package": "HaRe",
          "signature": "PlaceIndent !Int !Int !Int",
          "source": "src/Language-Haskell-Refact-Utils-TokenUtils.html#Positioning",
          "type": "function"
        },
        "index": {
          "description": "Line and Col offset for start num lines to add at the end relative to the indent level of the prior line",
          "hierarchy": "Language Haskell Refact Utils TokenUtils",
          "module": "Language.Haskell.Refact.Utils.TokenUtils",
          "name": "PlaceIndent",
          "package": "HaRe",
          "partial": "Place Indent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TokenUtils.html#v:PlaceIndent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLine and Col offset for\n start, num lines to add at the end\n relative to the indent level of the prior span\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils.TokenUtils",
          "name": "PlaceOffset",
          "package": "HaRe",
          "signature": "PlaceOffset !Int !Int !Int",
          "source": "src/Language-Haskell-Refact-Utils-TokenUtils.html#Positioning",
          "type": "function"
        },
        "index": {
          "description": "Line and Col offset for start num lines to add at the end relative to the indent level of the prior span",
          "hierarchy": "Language Haskell Refact Utils TokenUtils",
          "module": "Language.Haskell.Refact.Utils.TokenUtils",
          "name": "PlaceOffset",
          "package": "HaRe",
          "partial": "Place Offset",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TokenUtils.html#v:PlaceOffset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.TokenUtils",
          "name": "RT",
          "package": "HaRe",
          "signature": "RT [PosToken]",
          "source": "src/Language-Haskell-Refact-Utils-TokenUtils.html#ReversedToks",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils TokenUtils",
          "module": "Language.Haskell.Refact.Utils.TokenUtils",
          "name": "RT",
          "normalized": "RT[PosToken]",
          "package": "HaRe",
          "partial": "RT",
          "signature": "RT[PosToken]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TokenUtils.html#v:RT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd new tokens belonging to an AST fragment after a given SrcSpan,\n and re-sync the AST fragment to match the new location\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils.TokenUtils",
          "name": "addDeclToksAfterSrcSpan",
          "package": "HaRe",
          "signature": "Tree Entry-\u003e SrcSpan-\u003e Positioning-\u003e [PosToken]-\u003e Located t-\u003e (Tree Entry, SrcSpan, Located t)",
          "type": "function"
        },
        "index": {
          "description": "Add new tokens belonging to an AST fragment after given SrcSpan and re-sync the AST fragment to match the new location",
          "hierarchy": "Language Haskell Refact Utils TokenUtils",
          "module": "Language.Haskell.Refact.Utils.TokenUtils",
          "name": "addDeclToksAfterSrcSpan",
          "normalized": "Tree Entry-\u003eSrcSpan-\u003ePositioning-\u003e[PosToken]-\u003eLocated a-\u003e(Tree Entry,SrcSpan,Located a)",
          "package": "HaRe",
          "partial": "Decl Toks After Src Span",
          "signature": "Tree Entry-\u003eSrcSpan-\u003ePositioning-\u003e[PosToken]-\u003eLocated t-\u003e(Tree Entry,SrcSpan,Located t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TokenUtils.html#v:addDeclToksAfterSrcSpan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd a new SrcSpan and Tokens after a given one in the token stream\n and forest. This will be given a unique SrcSpan in return, which\n specifically indexes into the forest.\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils.TokenUtils",
          "name": "addNewSrcSpanAndToksAfter",
          "package": "HaRe",
          "signature": "Tree Entry-\u003e SrcSpan-\u003e SrcSpan-\u003e Positioning-\u003e [PosToken]-\u003e (Tree Entry, SrcSpan)",
          "type": "function"
        },
        "index": {
          "description": "Add new SrcSpan and Tokens after given one in the token stream and forest This will be given unique SrcSpan in return which specifically indexes into the forest",
          "hierarchy": "Language Haskell Refact Utils TokenUtils",
          "module": "Language.Haskell.Refact.Utils.TokenUtils",
          "name": "addNewSrcSpanAndToksAfter",
          "normalized": "Tree Entry-\u003eSrcSpan-\u003eSrcSpan-\u003ePositioning-\u003e[PosToken]-\u003e(Tree Entry,SrcSpan)",
          "package": "HaRe",
          "partial": "New Src Span And Toks After",
          "signature": "Tree Entry-\u003eSrcSpan-\u003eSrcSpan-\u003ePositioning-\u003e[PosToken]-\u003e(Tree Entry,SrcSpan)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TokenUtils.html#v:addNewSrcSpanAndToksAfter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd new tokens after the given SrcSpan, constructing a new SrcSpan\n in the process\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils.TokenUtils",
          "name": "addToksAfterSrcSpan",
          "package": "HaRe",
          "signature": "Tree Entry-\u003e SrcSpan-\u003e Positioning-\u003e [PosToken]-\u003e (Tree Entry, SrcSpan)",
          "type": "function"
        },
        "index": {
          "description": "Add new tokens after the given SrcSpan constructing new SrcSpan in the process",
          "hierarchy": "Language Haskell Refact Utils TokenUtils",
          "module": "Language.Haskell.Refact.Utils.TokenUtils",
          "name": "addToksAfterSrcSpan",
          "normalized": "Tree Entry-\u003eSrcSpan-\u003ePositioning-\u003e[PosToken]-\u003e(Tree Entry,SrcSpan)",
          "package": "HaRe",
          "partial": "Toks After Src Span",
          "signature": "Tree Entry-\u003eSrcSpan-\u003ePositioning-\u003e[PosToken]-\u003e(Tree Entry,SrcSpan)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TokenUtils.html#v:addToksAfterSrcSpan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.TokenUtils",
          "name": "adjustLinesForDeleted",
          "package": "HaRe",
          "signature": "Tree Entry -\u003e Tree Entry",
          "source": "src/Language-Haskell-Refact-Utils-TokenUtils.html#adjustLinesForDeleted",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils TokenUtils",
          "module": "Language.Haskell.Refact.Utils.TokenUtils",
          "name": "adjustLinesForDeleted",
          "normalized": "Tree Entry-\u003eTree Entry",
          "package": "HaRe",
          "partial": "Lines For Deleted",
          "signature": "Tree Entry-\u003eTree Entry",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TokenUtils.html#v:adjustLinesForDeleted"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFor a span about to be deleted, calculate the gap between the end\n of the span being deleted and the start of the next one, at a token\n level.\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils.TokenUtils",
          "name": "calcEndGap",
          "package": "HaRe",
          "signature": "Tree Entry -\u003e ForestSpan -\u003e SimpPos",
          "source": "src/Language-Haskell-Refact-Utils-TokenUtils.html#calcEndGap",
          "type": "function"
        },
        "index": {
          "description": "For span about to be deleted calculate the gap between the end of the span being deleted and the start of the next one at token level",
          "hierarchy": "Language Haskell Refact Utils TokenUtils",
          "module": "Language.Haskell.Refact.Utils.TokenUtils",
          "name": "calcEndGap",
          "normalized": "Tree Entry-\u003eForestSpan-\u003eSimpPos",
          "package": "HaRe",
          "partial": "End Gap",
          "signature": "Tree Entry-\u003eForestSpan-\u003eSimpPos",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TokenUtils.html#v:calcEndGap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eForestSpan version of GHC combineSrcSpans\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils.TokenUtils",
          "name": "combineSpans",
          "package": "HaRe",
          "signature": "ForestSpan -\u003e ForestSpan -\u003e ForestSpan",
          "source": "src/Language-Haskell-Refact-Utils-TokenUtils.html#combineSpans",
          "type": "function"
        },
        "index": {
          "description": "ForestSpan version of GHC combineSrcSpans",
          "hierarchy": "Language Haskell Refact Utils TokenUtils",
          "module": "Language.Haskell.Refact.Utils.TokenUtils",
          "name": "combineSpans",
          "normalized": "ForestSpan-\u003eForestSpan-\u003eForestSpan",
          "package": "HaRe",
          "partial": "Spans",
          "signature": "ForestSpan-\u003eForestSpan-\u003eForestSpan",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TokenUtils.html#v:combineSpans"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTrue if the end of the second param lies in the span of the first\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils.TokenUtils",
          "name": "containsEnd",
          "package": "HaRe",
          "signature": "ForestSpan -\u003e ForestSpan -\u003e Bool",
          "source": "src/Language-Haskell-Refact-Utils-TokenUtils.html#containsEnd",
          "type": "function"
        },
        "index": {
          "description": "True if the end of the second param lies in the span of the first",
          "hierarchy": "Language Haskell Refact Utils TokenUtils",
          "module": "Language.Haskell.Refact.Utils.TokenUtils",
          "name": "containsEnd",
          "normalized": "ForestSpan-\u003eForestSpan-\u003eBool",
          "package": "HaRe",
          "partial": "End",
          "signature": "ForestSpan-\u003eForestSpan-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TokenUtils.html#v:containsEnd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTrue if the start of the second param lies before the first, and\n ends after or on the second\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils.TokenUtils",
          "name": "containsMiddle",
          "package": "HaRe",
          "signature": "ForestSpan -\u003e ForestSpan -\u003e Bool",
          "source": "src/Language-Haskell-Refact-Utils-TokenUtils.html#containsMiddle",
          "type": "function"
        },
        "index": {
          "description": "True if the start of the second param lies before the first and ends after or on the second",
          "hierarchy": "Language Haskell Refact Utils TokenUtils",
          "module": "Language.Haskell.Refact.Utils.TokenUtils",
          "name": "containsMiddle",
          "normalized": "ForestSpan-\u003eForestSpan-\u003eBool",
          "package": "HaRe",
          "partial": "Middle",
          "signature": "ForestSpan-\u003eForestSpan-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TokenUtils.html#v:containsMiddle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTrue if the start of the second param lies in the span of the first\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils.TokenUtils",
          "name": "containsStart",
          "package": "HaRe",
          "signature": "ForestSpan -\u003e ForestSpan -\u003e Bool",
          "source": "src/Language-Haskell-Refact-Utils-TokenUtils.html#containsStart",
          "type": "function"
        },
        "index": {
          "description": "True if the start of the second param lies in the span of the first",
          "hierarchy": "Language Haskell Refact Utils TokenUtils",
          "module": "Language.Haskell.Refact.Utils.TokenUtils",
          "name": "containsStart",
          "normalized": "ForestSpan-\u003eForestSpan-\u003eBool",
          "package": "HaRe",
          "partial": "Start",
          "signature": "ForestSpan-\u003eForestSpan-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TokenUtils.html#v:containsStart"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProcess the leaf nodes of a tree to remove all deleted spans\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils.TokenUtils",
          "name": "deleteGapsToks",
          "package": "HaRe",
          "signature": "[Entry] -\u003e [PosToken]",
          "source": "src/Language-Haskell-Refact-Utils-TokenUtils.html#deleteGapsToks",
          "type": "function"
        },
        "index": {
          "description": "Process the leaf nodes of tree to remove all deleted spans",
          "hierarchy": "Language Haskell Refact Utils TokenUtils",
          "module": "Language.Haskell.Refact.Utils.TokenUtils",
          "name": "deleteGapsToks",
          "normalized": "[Entry]-\u003e[PosToken]",
          "package": "HaRe",
          "partial": "Gaps Toks",
          "signature": "[Entry]-\u003e[PosToken]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TokenUtils.html#v:deleteGapsToks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.TokenUtils",
          "name": "doSplitTree",
          "package": "HaRe",
          "signature": "Tree Entry -\u003e ForestSpan -\u003e ([Tree Entry], [Tree Entry], [Tree Entry])",
          "source": "src/Language-Haskell-Refact-Utils-TokenUtils.html#doSplitTree",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils TokenUtils",
          "module": "Language.Haskell.Refact.Utils.TokenUtils",
          "name": "doSplitTree",
          "normalized": "Tree Entry-\u003eForestSpan-\u003e([Tree Entry],[Tree Entry],[Tree Entry])",
          "package": "HaRe",
          "partial": "Split Tree",
          "signature": "Tree Entry-\u003eForestSpan-\u003e([Tree Entry],[Tree Entry],[Tree Entry])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TokenUtils.html#v:doSplitTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.TokenUtils",
          "name": "drawEntry",
          "package": "HaRe",
          "signature": "Tree Entry -\u003e [String]",
          "source": "src/Language-Haskell-Refact-Utils-TokenUtils.html#drawEntry",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils TokenUtils",
          "module": "Language.Haskell.Refact.Utils.TokenUtils",
          "name": "drawEntry",
          "normalized": "Tree Entry-\u003e[String]",
          "package": "HaRe",
          "partial": "Entry",
          "signature": "Tree Entry-\u003e[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TokenUtils.html#v:drawEntry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNeat 2-dimensional drawing of a forest.\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils.TokenUtils",
          "name": "drawForestEntry",
          "package": "HaRe",
          "signature": "Forest Entry -\u003e String",
          "source": "src/Language-Haskell-Refact-Utils-TokenUtils.html#drawForestEntry",
          "type": "function"
        },
        "index": {
          "description": "Neat dimensional drawing of forest",
          "hierarchy": "Language Haskell Refact Utils TokenUtils",
          "module": "Language.Haskell.Refact.Utils.TokenUtils",
          "name": "drawForestEntry",
          "normalized": "Forest Entry-\u003eString",
          "package": "HaRe",
          "partial": "Forest Entry",
          "signature": "Forest Entry-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TokenUtils.html#v:drawForestEntry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCall drawTreeEntry on the entire token cache\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils.TokenUtils",
          "name": "drawTokenCache",
          "package": "HaRe",
          "signature": "TokenCache -\u003e String",
          "source": "src/Language-Haskell-Refact-Utils-TokenUtils.html#drawTokenCache",
          "type": "function"
        },
        "index": {
          "description": "Call drawTreeEntry on the entire token cache",
          "hierarchy": "Language Haskell Refact Utils TokenUtils",
          "module": "Language.Haskell.Refact.Utils.TokenUtils",
          "name": "drawTokenCache",
          "normalized": "TokenCache-\u003eString",
          "package": "HaRe",
          "partial": "Token Cache",
          "signature": "TokenCache-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TokenUtils.html#v:drawTokenCache"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCall drawTreeEntry on the entire token cache\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils.TokenUtils",
          "name": "drawTokenCacheDetailed",
          "package": "HaRe",
          "signature": "TokenCache -\u003e String",
          "source": "src/Language-Haskell-Refact-Utils-TokenUtils.html#drawTokenCacheDetailed",
          "type": "function"
        },
        "index": {
          "description": "Call drawTreeEntry on the entire token cache",
          "hierarchy": "Language Haskell Refact Utils TokenUtils",
          "module": "Language.Haskell.Refact.Utils.TokenUtils",
          "name": "drawTokenCacheDetailed",
          "normalized": "TokenCache-\u003eString",
          "package": "HaRe",
          "partial": "Token Cache Detailed",
          "signature": "TokenCache-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TokenUtils.html#v:drawTokenCacheDetailed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.TokenUtils",
          "name": "drawTreeCompact",
          "package": "HaRe",
          "signature": "Tree Entry -\u003e String",
          "source": "src/Language-Haskell-Refact-Utils-TokenUtils.html#drawTreeCompact",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils TokenUtils",
          "module": "Language.Haskell.Refact.Utils.TokenUtils",
          "name": "drawTreeCompact",
          "normalized": "Tree Entry-\u003eString",
          "package": "HaRe",
          "partial": "Tree Compact",
          "signature": "Tree Entry-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TokenUtils.html#v:drawTreeCompact"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNeat 2-dimensional drawing of a tree.\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils.TokenUtils",
          "name": "drawTreeEntry",
          "package": "HaRe",
          "signature": "Tree Entry -\u003e String",
          "source": "src/Language-Haskell-Refact-Utils-TokenUtils.html#drawTreeEntry",
          "type": "function"
        },
        "index": {
          "description": "Neat dimensional drawing of tree",
          "hierarchy": "Language Haskell Refact Utils TokenUtils",
          "module": "Language.Haskell.Refact.Utils.TokenUtils",
          "name": "drawTreeEntry",
          "normalized": "Tree Entry-\u003eString",
          "package": "HaRe",
          "partial": "Tree Entry",
          "signature": "Tree Entry-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TokenUtils.html#v:drawTreeEntry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.TokenUtils",
          "name": "forestLineToGhcLine",
          "package": "HaRe",
          "signature": "ForestLine -\u003e Int",
          "source": "src/Language-Haskell-Refact-Utils-TokenUtils.html#forestLineToGhcLine",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils TokenUtils",
          "module": "Language.Haskell.Refact.Utils.TokenUtils",
          "name": "forestLineToGhcLine",
          "normalized": "ForestLine-\u003eInt",
          "package": "HaRe",
          "partial": "Line To Ghc Line",
          "signature": "ForestLine-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TokenUtils.html#v:forestLineToGhcLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChecks if the version is zero\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils.TokenUtils",
          "name": "forestPosVersionNotSet",
          "package": "HaRe",
          "signature": "ForestPos -\u003e Bool",
          "source": "src/Language-Haskell-Refact-Utils-TokenUtils.html#forestPosVersionNotSet",
          "type": "function"
        },
        "index": {
          "description": "Checks if the version is zero",
          "hierarchy": "Language Haskell Refact Utils TokenUtils",
          "module": "Language.Haskell.Refact.Utils.TokenUtils",
          "name": "forestPosVersionNotSet",
          "normalized": "ForestPos-\u003eBool",
          "package": "HaRe",
          "partial": "Pos Version Not Set",
          "signature": "ForestPos-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TokenUtils.html#v:forestPosVersionNotSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChecks if the version is non-zero\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils.TokenUtils",
          "name": "forestPosVersionSet",
          "package": "HaRe",
          "signature": "ForestPos -\u003e Bool",
          "source": "src/Language-Haskell-Refact-Utils-TokenUtils.html#forestPosVersionSet",
          "type": "function"
        },
        "index": {
          "description": "Checks if the version is non-zero",
          "hierarchy": "Language Haskell Refact Utils TokenUtils",
          "module": "Language.Haskell.Refact.Utils.TokenUtils",
          "name": "forestPosVersionSet",
          "normalized": "ForestPos-\u003eBool",
          "package": "HaRe",
          "partial": "Pos Version Set",
          "signature": "ForestPos-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TokenUtils.html#v:forestPosVersionSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.TokenUtils",
          "name": "forestSpanFromEntry",
          "package": "HaRe",
          "signature": "Entry -\u003e ForestSpan",
          "source": "src/Language-Haskell-Refact-Utils-TokenUtils.html#forestSpanFromEntry",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils TokenUtils",
          "module": "Language.Haskell.Refact.Utils.TokenUtils",
          "name": "forestSpanFromEntry",
          "normalized": "Entry-\u003eForestSpan",
          "package": "HaRe",
          "partial": "Span From Entry",
          "signature": "Entry-\u003eForestSpan",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TokenUtils.html#v:forestSpanFromEntry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.TokenUtils",
          "name": "forestSpanLenChanged",
          "package": "HaRe",
          "signature": "ForestSpan -\u003e Bool",
          "source": "src/Language-Haskell-Refact-Utils-TokenUtils.html#forestSpanLenChanged",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils TokenUtils",
          "module": "Language.Haskell.Refact.Utils.TokenUtils",
          "name": "forestSpanLenChanged",
          "normalized": "ForestSpan-\u003eBool",
          "package": "HaRe",
          "partial": "Span Len Changed",
          "signature": "ForestSpan-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TokenUtils.html#v:forestSpanLenChanged"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStrip out the version markers\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils.TokenUtils",
          "name": "forestSpanToGhcPos",
          "package": "HaRe",
          "signature": "ForestSpan -\u003e (SimpPos, SimpPos)",
          "source": "src/Language-Haskell-Refact-Utils-TokenUtils.html#forestSpanToGhcPos",
          "type": "function"
        },
        "index": {
          "description": "Strip out the version markers",
          "hierarchy": "Language Haskell Refact Utils TokenUtils",
          "module": "Language.Haskell.Refact.Utils.TokenUtils",
          "name": "forestSpanToGhcPos",
          "normalized": "ForestSpan-\u003e(SimpPos,SimpPos)",
          "package": "HaRe",
          "partial": "Span To Ghc Pos",
          "signature": "ForestSpan-\u003e(SimpPos,SimpPos)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TokenUtils.html#v:forestSpanToGhcPos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStrip out the version markers\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils.TokenUtils",
          "name": "forestSpanToSimpPos",
          "package": "HaRe",
          "signature": "ForestSpan -\u003e (SimpPos, SimpPos)",
          "source": "src/Language-Haskell-Refact-Utils-TokenUtils.html#forestSpanToSimpPos",
          "type": "function"
        },
        "index": {
          "description": "Strip out the version markers",
          "hierarchy": "Language Haskell Refact Utils TokenUtils",
          "module": "Language.Haskell.Refact.Utils.TokenUtils",
          "name": "forestSpanToSimpPos",
          "normalized": "ForestSpan-\u003e(SimpPos,SimpPos)",
          "package": "HaRe",
          "partial": "Span To Simp Pos",
          "signature": "ForestSpan-\u003e(SimpPos,SimpPos)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TokenUtils.html#v:forestSpanToSimpPos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.TokenUtils",
          "name": "forestSpanToSrcSpan",
          "package": "HaRe",
          "signature": "ForestSpan -\u003e SrcSpan",
          "source": "src/Language-Haskell-Refact-Utils-TokenUtils.html#forestSpanToSrcSpan",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils TokenUtils",
          "module": "Language.Haskell.Refact.Utils.TokenUtils",
          "name": "forestSpanToSrcSpan",
          "normalized": "ForestSpan-\u003eSrcSpan",
          "package": "HaRe",
          "partial": "Span To Src Span",
          "signature": "ForestSpan-\u003eSrcSpan",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TokenUtils.html#v:forestSpanToSrcSpan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChecks if the version is zero in both positions\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils.TokenUtils",
          "name": "forestSpanVersionNotSet",
          "package": "HaRe",
          "signature": "ForestSpan -\u003e Bool",
          "source": "src/Language-Haskell-Refact-Utils-TokenUtils.html#forestSpanVersionNotSet",
          "type": "function"
        },
        "index": {
          "description": "Checks if the version is zero in both positions",
          "hierarchy": "Language Haskell Refact Utils TokenUtils",
          "module": "Language.Haskell.Refact.Utils.TokenUtils",
          "name": "forestSpanVersionNotSet",
          "normalized": "ForestSpan-\u003eBool",
          "package": "HaRe",
          "partial": "Span Version Not Set",
          "signature": "ForestSpan-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TokenUtils.html#v:forestSpanVersionNotSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChecks if the version is non-zero in either position\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils.TokenUtils",
          "name": "forestSpanVersionSet",
          "package": "HaRe",
          "signature": "ForestSpan -\u003e Bool",
          "source": "src/Language-Haskell-Refact-Utils-TokenUtils.html#forestSpanVersionSet",
          "type": "function"
        },
        "index": {
          "description": "Checks if the version is non-zero in either position",
          "hierarchy": "Language Haskell Refact Utils TokenUtils",
          "module": "Language.Haskell.Refact.Utils.TokenUtils",
          "name": "forestSpanVersionSet",
          "normalized": "ForestSpan-\u003eBool",
          "package": "HaRe",
          "partial": "Span Version Set",
          "signature": "ForestSpan-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TokenUtils.html#v:forestSpanVersionSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGets the version numbers\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils.TokenUtils",
          "name": "forestSpanVersions",
          "package": "HaRe",
          "signature": "ForestSpan -\u003e (Int, Int)",
          "source": "src/Language-Haskell-Refact-Utils-TokenUtils.html#forestSpanVersions",
          "type": "function"
        },
        "index": {
          "description": "Gets the version numbers",
          "hierarchy": "Language Haskell Refact Utils TokenUtils",
          "module": "Language.Haskell.Refact.Utils.TokenUtils",
          "name": "forestSpanVersions",
          "normalized": "ForestSpan-\u003e(Int,Int)",
          "package": "HaRe",
          "partial": "Span Versions",
          "signature": "ForestSpan-\u003e(Int,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TokenUtils.html#v:forestSpanVersions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.TokenUtils",
          "name": "fs",
          "package": "HaRe",
          "signature": "ForestSpan -\u003e SrcSpan",
          "source": "src/Language-Haskell-Refact-Utils-TokenUtils.html#fs",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils TokenUtils",
          "module": "Language.Haskell.Refact.Utils.TokenUtils",
          "name": "fs",
          "normalized": "ForestSpan-\u003eSrcSpan",
          "package": "HaRe",
          "signature": "ForestSpan-\u003eSrcSpan",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TokenUtils.html#v:fs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrieve a path to the tree containing a ForestSpan from the forest,\n inserting it if not already present\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils.TokenUtils",
          "name": "getSrcSpanFor",
          "package": "HaRe",
          "signature": "Tree Entry -\u003e ForestSpan -\u003e (Tree Entry, Tree Entry)",
          "source": "src/Language-Haskell-Refact-Utils-TokenUtils.html#getSrcSpanFor",
          "type": "function"
        },
        "index": {
          "description": "Retrieve path to the tree containing ForestSpan from the forest inserting it if not already present",
          "hierarchy": "Language Haskell Refact Utils TokenUtils",
          "module": "Language.Haskell.Refact.Utils.TokenUtils",
          "name": "getSrcSpanFor",
          "normalized": "Tree Entry-\u003eForestSpan-\u003e(Tree Entry,Tree Entry)",
          "package": "HaRe",
          "partial": "Src Span For",
          "signature": "Tree Entry-\u003eForestSpan-\u003e(Tree Entry,Tree Entry)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TokenUtils.html#v:getSrcSpanFor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrieve a path to the tree containing a ForestSpan from the forest,\n inserting it if not already present.\n In the case where there is a nested series of spans as in an\n \u003ccode\u003e\u003ca\u003eAbove\u003c/a\u003e\u003c/code\u003e layout, return the deepest one\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils.TokenUtils",
          "name": "getSrcSpanForDeep",
          "package": "HaRe",
          "signature": "Tree Entry -\u003e ForestSpan -\u003e (Tree Entry, Tree Entry)",
          "source": "src/Language-Haskell-Refact-Utils-TokenUtils.html#getSrcSpanForDeep",
          "type": "function"
        },
        "index": {
          "description": "Retrieve path to the tree containing ForestSpan from the forest inserting it if not already present In the case where there is nested series of spans as in an Above layout return the deepest one",
          "hierarchy": "Language Haskell Refact Utils TokenUtils",
          "module": "Language.Haskell.Refact.Utils.TokenUtils",
          "name": "getSrcSpanForDeep",
          "normalized": "Tree Entry-\u003eForestSpan-\u003e(Tree Entry,Tree Entry)",
          "package": "HaRe",
          "partial": "Src Span For Deep",
          "signature": "Tree Entry-\u003eForestSpan-\u003e(Tree Entry,Tree Entry)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TokenUtils.html#v:getSrcSpanForDeep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the tokens preceding a given \u003ccode\u003eSrcSpan\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils.TokenUtils",
          "name": "getTokensBefore",
          "package": "HaRe",
          "signature": "Tree Entry -\u003e SrcSpan -\u003e (Tree Entry, ReversedToks)",
          "source": "src/Language-Haskell-Refact-Utils-TokenUtils.html#getTokensBefore",
          "type": "function"
        },
        "index": {
          "description": "Get the tokens preceding given SrcSpan",
          "hierarchy": "Language Haskell Refact Utils TokenUtils",
          "module": "Language.Haskell.Refact.Utils.TokenUtils",
          "name": "getTokensBefore",
          "normalized": "Tree Entry-\u003eSrcSpan-\u003e(Tree Entry,ReversedToks)",
          "package": "HaRe",
          "partial": "Tokens Before",
          "signature": "Tree Entry-\u003eSrcSpan-\u003e(Tree Entry,ReversedToks)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TokenUtils.html#v:getTokensBefore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the (possible cached) tokens for a given source span, and\n cache their being fetched.\n NOTE: The SrcSpan may be one introduced by HaRe, rather than GHC.\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils.TokenUtils",
          "name": "getTokensFor",
          "package": "HaRe",
          "signature": "Bool -\u003e Tree Entry -\u003e SrcSpan -\u003e (Tree Entry, [PosToken])",
          "source": "src/Language-Haskell-Refact-Utils-TokenUtils.html#getTokensFor",
          "type": "function"
        },
        "index": {
          "description": "Get the possible cached tokens for given source span and cache their being fetched NOTE The SrcSpan may be one introduced by HaRe rather than GHC",
          "hierarchy": "Language Haskell Refact Utils TokenUtils",
          "module": "Language.Haskell.Refact.Utils.TokenUtils",
          "name": "getTokensFor",
          "normalized": "Bool-\u003eTree Entry-\u003eSrcSpan-\u003e(Tree Entry,[PosToken])",
          "package": "HaRe",
          "partial": "Tokens For",
          "signature": "Bool-\u003eTree Entry-\u003eSrcSpan-\u003e(Tree Entry,[PosToken])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TokenUtils.html#v:getTokensFor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the (possible cached) tokens for a given source span, and\n cache their being fetched.\n NOTE: The SrcSpan may be one introduced by HaRe, rather than GHC.\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils.TokenUtils",
          "name": "getTokensForNoIntros",
          "package": "HaRe",
          "signature": "Bool -\u003e Tree Entry -\u003e SrcSpan -\u003e (Tree Entry, [PosToken])",
          "source": "src/Language-Haskell-Refact-Utils-TokenUtils.html#getTokensForNoIntros",
          "type": "function"
        },
        "index": {
          "description": "Get the possible cached tokens for given source span and cache their being fetched NOTE The SrcSpan may be one introduced by HaRe rather than GHC",
          "hierarchy": "Language Haskell Refact Utils TokenUtils",
          "module": "Language.Haskell.Refact.Utils.TokenUtils",
          "name": "getTokensForNoIntros",
          "normalized": "Bool-\u003eTree Entry-\u003eSrcSpan-\u003e(Tree Entry,[PosToken])",
          "package": "HaRe",
          "partial": "Tokens For No Intros",
          "signature": "Bool-\u003eTree Entry-\u003eSrcSpan-\u003e(Tree Entry,[PosToken])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TokenUtils.html#v:getTokensForNoIntros"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.TokenUtils",
          "name": "getTreeFromCache",
          "package": "HaRe",
          "signature": "SrcSpan -\u003e TokenCache -\u003e Tree Entry",
          "source": "src/Language-Haskell-Refact-Utils-TokenUtils.html#getTreeFromCache",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils TokenUtils",
          "module": "Language.Haskell.Refact.Utils.TokenUtils",
          "name": "getTreeFromCache",
          "normalized": "SrcSpan-\u003eTokenCache-\u003eTree Entry",
          "package": "HaRe",
          "partial": "Tree From Cache",
          "signature": "SrcSpan-\u003eTokenCache-\u003eTree Entry",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TokenUtils.html#v:getTreeFromCache"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.TokenUtils",
          "name": "getTreeSpansAsList",
          "package": "HaRe",
          "signature": "Tree Entry -\u003e [(Int, ForestSpan)]",
          "source": "src/Language-Haskell-Refact-Utils-TokenUtils.html#getTreeSpansAsList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils TokenUtils",
          "module": "Language.Haskell.Refact.Utils.TokenUtils",
          "name": "getTreeSpansAsList",
          "normalized": "Tree Entry-\u003e[(Int,ForestSpan)]",
          "package": "HaRe",
          "partial": "Tree Spans As List",
          "signature": "Tree Entry-\u003e[(Int,ForestSpan)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TokenUtils.html#v:getTreeSpansAsList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract an encoded ForestLine from a GHC line\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils.TokenUtils",
          "name": "ghcLineToForestLine",
          "package": "HaRe",
          "signature": "Int -\u003e ForestLine",
          "source": "src/Language-Haskell-Refact-Utils-TokenUtils.html#ghcLineToForestLine",
          "type": "function"
        },
        "index": {
          "description": "Extract an encoded ForestLine from GHC line",
          "hierarchy": "Language Haskell Refact Utils TokenUtils",
          "module": "Language.Haskell.Refact.Utils.TokenUtils",
          "name": "ghcLineToForestLine",
          "normalized": "Int-\u003eForestLine",
          "package": "HaRe",
          "partial": "Line To Forest Line",
          "signature": "Int-\u003eForestLine",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TokenUtils.html#v:ghcLineToForestLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.TokenUtils",
          "name": "ghcSpanStartEnd",
          "package": "HaRe",
          "signature": "SrcSpan -\u003e ((Int, Int), (Int, Int))",
          "source": "src/Language-Haskell-Refact-Utils-TokenUtils.html#ghcSpanStartEnd",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils TokenUtils",
          "module": "Language.Haskell.Refact.Utils.TokenUtils",
          "name": "ghcSpanStartEnd",
          "normalized": "SrcSpan-\u003e((Int,Int),(Int,Int))",
          "package": "HaRe",
          "partial": "Span Start End",
          "signature": "SrcSpan-\u003e((Int,Int),(Int,Int))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TokenUtils.html#v:ghcSpanStartEnd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eindent the tree and tokens by the given offset, and sync the AST\n to the tree too.\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils.TokenUtils",
          "name": "indentDeclToks",
          "package": "HaRe",
          "signature": "Located t-\u003e Tree Entry-\u003e Int-\u003e (Located t, Tree Entry)",
          "type": "function"
        },
        "index": {
          "description": "indent the tree and tokens by the given offset and sync the AST to the tree too",
          "hierarchy": "Language Haskell Refact Utils TokenUtils",
          "module": "Language.Haskell.Refact.Utils.TokenUtils",
          "name": "indentDeclToks",
          "normalized": "Located a-\u003eTree Entry-\u003eInt-\u003e(Located a,Tree Entry)",
          "package": "HaRe",
          "partial": "Decl Toks",
          "signature": "Located t-\u003eTree Entry-\u003eInt-\u003e(Located t,Tree Entry)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TokenUtils.html#v:indentDeclToks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.TokenUtils",
          "name": "initTokenCache",
          "package": "HaRe",
          "signature": "[PosToken] -\u003e TokenCache",
          "source": "src/Language-Haskell-Refact-Utils-TokenUtils.html#initTokenCache",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils TokenUtils",
          "module": "Language.Haskell.Refact.Utils.TokenUtils",
          "name": "initTokenCache",
          "normalized": "[PosToken]-\u003eTokenCache",
          "package": "HaRe",
          "partial": "Token Cache",
          "signature": "[PosToken]-\u003eTokenCache",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TokenUtils.html#v:initTokenCache"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.TokenUtils",
          "name": "initTokenCacheLayout",
          "package": "HaRe",
          "signature": "Tree Entry -\u003e TokenCache",
          "source": "src/Language-Haskell-Refact-Utils-TokenUtils.html#initTokenCacheLayout",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils TokenUtils",
          "module": "Language.Haskell.Refact.Utils.TokenUtils",
          "name": "initTokenCacheLayout",
          "normalized": "Tree Entry-\u003eTokenCache",
          "package": "HaRe",
          "partial": "Token Cache Layout",
          "signature": "Tree Entry-\u003eTokenCache",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TokenUtils.html#v:initTokenCacheLayout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReplace any ForestLine flags already in a SrcSpan with the given ones\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils.TokenUtils",
          "name": "insertForestLineInSrcSpan",
          "package": "HaRe",
          "signature": "ForestLine -\u003e SrcSpan -\u003e SrcSpan",
          "source": "src/Language-Haskell-Refact-Utils-TokenUtils.html#insertForestLineInSrcSpan",
          "type": "function"
        },
        "index": {
          "description": "Replace any ForestLine flags already in SrcSpan with the given ones",
          "hierarchy": "Language Haskell Refact Utils TokenUtils",
          "module": "Language.Haskell.Refact.Utils.TokenUtils",
          "name": "insertForestLineInSrcSpan",
          "normalized": "ForestLine-\u003eSrcSpan-\u003eSrcSpan",
          "package": "HaRe",
          "partial": "Forest Line In Src Span",
          "signature": "ForestLine-\u003eSrcSpan-\u003eSrcSpan",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TokenUtils.html#v:insertForestLineInSrcSpan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.TokenUtils",
          "name": "insertLenChangedInSrcSpan",
          "package": "HaRe",
          "signature": "Bool -\u003e Bool -\u003e SrcSpan -\u003e SrcSpan",
          "source": "src/Language-Haskell-Refact-Utils-TokenUtils.html#insertLenChangedInSrcSpan",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils TokenUtils",
          "module": "Language.Haskell.Refact.Utils.TokenUtils",
          "name": "insertLenChangedInSrcSpan",
          "normalized": "Bool-\u003eBool-\u003eSrcSpan-\u003eSrcSpan",
          "package": "HaRe",
          "partial": "Len Changed In Src Span",
          "signature": "Bool-\u003eBool-\u003eSrcSpan-\u003eSrcSpan",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TokenUtils.html#v:insertLenChangedInSrcSpan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInsert a new node after the designated one in the tree\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils.TokenUtils",
          "name": "insertNodeAfter",
          "package": "HaRe",
          "signature": "Tree Entry -\u003e Tree Entry -\u003e Tree Entry -\u003e Tree Entry",
          "source": "src/Language-Haskell-Refact-Utils-TokenUtils.html#insertNodeAfter",
          "type": "function"
        },
        "index": {
          "description": "Insert new node after the designated one in the tree",
          "hierarchy": "Language Haskell Refact Utils TokenUtils",
          "module": "Language.Haskell.Refact.Utils.TokenUtils",
          "name": "insertNodeAfter",
          "normalized": "Tree Entry-\u003eTree Entry-\u003eTree Entry-\u003eTree Entry",
          "package": "HaRe",
          "partial": "Node After",
          "signature": "Tree Entry-\u003eTree Entry-\u003eTree Entry-\u003eTree Entry",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TokenUtils.html#v:insertNodeAfter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInsert a ForestSpan into the forest, if it is not there already.\n Assumes the forest was populated with the tokens containing the\n ForestSpan already\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils.TokenUtils",
          "name": "insertSrcSpan",
          "package": "HaRe",
          "signature": "Tree Entry -\u003e ForestSpan -\u003e Tree Entry",
          "source": "src/Language-Haskell-Refact-Utils-TokenUtils.html#insertSrcSpan",
          "type": "function"
        },
        "index": {
          "description": "Insert ForestSpan into the forest if it is not there already Assumes the forest was populated with the tokens containing the ForestSpan already",
          "hierarchy": "Language Haskell Refact Utils TokenUtils",
          "module": "Language.Haskell.Refact.Utils.TokenUtils",
          "name": "insertSrcSpan",
          "normalized": "Tree Entry-\u003eForestSpan-\u003eTree Entry",
          "package": "HaRe",
          "partial": "Src Span",
          "signature": "Tree Entry-\u003eForestSpan-\u003eTree Entry",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TokenUtils.html#v:insertSrcSpan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.TokenUtils",
          "name": "insertVersionsInSrcSpan",
          "package": "HaRe",
          "signature": "Int -\u003e Int -\u003e SrcSpan -\u003e SrcSpan",
          "source": "src/Language-Haskell-Refact-Utils-TokenUtils.html#insertVersionsInSrcSpan",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils TokenUtils",
          "module": "Language.Haskell.Refact.Utils.TokenUtils",
          "name": "insertVersionsInSrcSpan",
          "normalized": "Int-\u003eInt-\u003eSrcSpan-\u003eSrcSpan",
          "package": "HaRe",
          "partial": "Versions In Src Span",
          "signature": "Int-\u003eInt-\u003eSrcSpan-\u003eSrcSpan",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TokenUtils.html#v:insertVersionsInSrcSpan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck the invariant for the token cache. Returns list of any errors found.\n Invariants:\n   1. For each tree, either the rootLabel has a SrcSpan only, or the subForest /= [].\n   2a. The trees making up the subForest of a given node fully include the parent SrcSpan.\n        i.e. the leaves contain all the tokens for a given SrcSpan.\n   2b. The subForest is in SrcSpan order\n   3. A given SrcSpan can only appear (or be included) in a single tree of the forest.\n   4. The parent link for all sub-trees does exist, and actually points to the parent. \n   5. There are no nullSpan entries in the tree\n NOTE: the tokens may extend before or after the SrcSpan, due to comments only\n NOTE2: this will have to be revisited when edits to the tokens are made\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils.TokenUtils",
          "name": "invariant",
          "package": "HaRe",
          "signature": "Tree Entry -\u003e [String]",
          "source": "src/Language-Haskell-Refact-Utils-TokenUtils.html#invariant",
          "type": "function"
        },
        "index": {
          "description": "Check the invariant for the token cache Returns list of any errors found Invariants For each tree either the rootLabel has SrcSpan only or the subForest The trees making up the subForest of given node fully include the parent SrcSpan i.e the leaves contain all the tokens for given SrcSpan The subForest is in SrcSpan order given SrcSpan can only appear or be included in single tree of the forest The parent link for all sub-trees does exist and actually points to the parent There are no nullSpan entries in the tree NOTE the tokens may extend before or after the SrcSpan due to comments only NOTE2 this will have to be revisited when edits to the tokens are made",
          "hierarchy": "Language Haskell Refact Utils TokenUtils",
          "module": "Language.Haskell.Refact.Utils.TokenUtils",
          "name": "invariant",
          "normalized": "Tree Entry-\u003e[String]",
          "package": "HaRe",
          "signature": "Tree Entry-\u003e[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TokenUtils.html#v:invariant"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUtility function to either return True or throw an error to report the problem\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils.TokenUtils",
          "name": "invariantOk",
          "package": "HaRe",
          "signature": "Tree Entry -\u003e Bool",
          "source": "src/Language-Haskell-Refact-Utils-TokenUtils.html#invariantOk",
          "type": "function"
        },
        "index": {
          "description": "Utility function to either return True or throw an error to report the problem",
          "hierarchy": "Language Haskell Refact Utils TokenUtils",
          "module": "Language.Haskell.Refact.Utils.TokenUtils",
          "name": "invariantOk",
          "normalized": "Tree Entry-\u003eBool",
          "package": "HaRe",
          "partial": "Ok",
          "signature": "Tree Entry-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TokenUtils.html#v:invariantOk"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.TokenUtils",
          "name": "limitPrevToks",
          "package": "HaRe",
          "signature": "ReversedToks -\u003e SrcSpan -\u003e ReversedToks",
          "source": "src/Language-Haskell-Refact-Utils-TokenUtils.html#limitPrevToks",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils TokenUtils",
          "module": "Language.Haskell.Refact.Utils.TokenUtils",
          "name": "limitPrevToks",
          "normalized": "ReversedToks-\u003eSrcSpan-\u003eReversedToks",
          "package": "HaRe",
          "partial": "Prev Toks",
          "signature": "ReversedToks-\u003eSrcSpan-\u003eReversedToks",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TokenUtils.html#v:limitPrevToks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake a tree representing a particular set of tokens\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils.TokenUtils",
          "name": "mkTreeFromSpanTokens",
          "package": "HaRe",
          "signature": "ForestSpan -\u003e [PosToken] -\u003e Tree Entry",
          "source": "src/Language-Haskell-Refact-Utils-TokenUtils.html#mkTreeFromSpanTokens",
          "type": "function"
        },
        "index": {
          "description": "Make tree representing particular set of tokens",
          "hierarchy": "Language Haskell Refact Utils TokenUtils",
          "module": "Language.Haskell.Refact.Utils.TokenUtils",
          "name": "mkTreeFromSpanTokens",
          "normalized": "ForestSpan-\u003e[PosToken]-\u003eTree Entry",
          "package": "HaRe",
          "partial": "Tree From Span Tokens",
          "signature": "ForestSpan-\u003e[PosToken]-\u003eTree Entry",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TokenUtils.html#v:mkTreeFromSpanTokens"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake a tree representing a particular set of tokens\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils.TokenUtils",
          "name": "mkTreeFromTokens",
          "package": "HaRe",
          "signature": "[PosToken] -\u003e Tree Entry",
          "source": "src/Language-Haskell-Refact-Utils-TokenUtils.html#mkTreeFromTokens",
          "type": "function"
        },
        "index": {
          "description": "Make tree representing particular set of tokens",
          "hierarchy": "Language Haskell Refact Utils TokenUtils",
          "module": "Language.Haskell.Refact.Utils.TokenUtils",
          "name": "mkTreeFromTokens",
          "normalized": "[PosToken]-\u003eTree Entry",
          "package": "HaRe",
          "partial": "Tree From Tokens",
          "signature": "[PosToken]-\u003eTree Entry",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TokenUtils.html#v:mkTreeFromTokens"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract the start and end position of a span, without any leading\n or trailing comments\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils.TokenUtils",
          "name": "nonCommentSpan",
          "package": "HaRe",
          "signature": "[PosToken] -\u003e (SimpPos, SimpPos)",
          "source": "src/Language-Haskell-Refact-Utils-TokenUtils.html#nonCommentSpan",
          "type": "function"
        },
        "index": {
          "description": "Extract the start and end position of span without any leading or trailing comments",
          "hierarchy": "Language Haskell Refact Utils TokenUtils",
          "module": "Language.Haskell.Refact.Utils.TokenUtils",
          "name": "nonCommentSpan",
          "normalized": "[PosToken]-\u003e(SimpPos,SimpPos)",
          "package": "HaRe",
          "partial": "Comment Span",
          "signature": "[PosToken]-\u003e(SimpPos,SimpPos)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TokenUtils.html#v:nonCommentSpan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.TokenUtils",
          "name": "nullPos",
          "package": "HaRe",
          "signature": "ForestPos",
          "source": "src/Language-Haskell-Refact-Utils-TokenUtils.html#nullPos",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils TokenUtils",
          "module": "Language.Haskell.Refact.Utils.TokenUtils",
          "name": "nullPos",
          "package": "HaRe",
          "partial": "Pos",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TokenUtils.html#v:nullPos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.TokenUtils",
          "name": "nullSpan",
          "package": "HaRe",
          "signature": "ForestSpan",
          "source": "src/Language-Haskell-Refact-Utils-TokenUtils.html#nullSpan",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils TokenUtils",
          "module": "Language.Haskell.Refact.Utils.TokenUtils",
          "name": "nullSpan",
          "package": "HaRe",
          "partial": "Span",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TokenUtils.html#v:nullSpan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOpen a zipper so that its focus is the given node\n  NOTE: the node must already be in the tree\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils.TokenUtils",
          "name": "openZipperToNode",
          "package": "HaRe",
          "signature": "Tree Entry -\u003e TreePos Full Entry -\u003e TreePos Full Entry",
          "source": "src/Language-Haskell-Refact-Utils-TokenUtils.html#openZipperToNode",
          "type": "function"
        },
        "index": {
          "description": "Open zipper so that its focus is the given node NOTE the node must already be in the tree",
          "hierarchy": "Language Haskell Refact Utils TokenUtils",
          "module": "Language.Haskell.Refact.Utils.TokenUtils",
          "name": "openZipperToNode",
          "normalized": "Tree Entry-\u003eTreePos Full Entry-\u003eTreePos Full Entry",
          "package": "HaRe",
          "partial": "Zipper To Node",
          "signature": "Tree Entry-\u003eTreePos Full Entry-\u003eTreePos Full Entry",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TokenUtils.html#v:openZipperToNode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOpen a zipper so that its focus is the given node\n  NOTE: the node must already be in the tree\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils.TokenUtils",
          "name": "openZipperToNodeDeep",
          "package": "HaRe",
          "signature": "Tree Entry -\u003e TreePos Full Entry -\u003e TreePos Full Entry",
          "source": "src/Language-Haskell-Refact-Utils-TokenUtils.html#openZipperToNodeDeep",
          "type": "function"
        },
        "index": {
          "description": "Open zipper so that its focus is the given node NOTE the node must already be in the tree",
          "hierarchy": "Language Haskell Refact Utils TokenUtils",
          "module": "Language.Haskell.Refact.Utils.TokenUtils",
          "name": "openZipperToNodeDeep",
          "normalized": "Tree Entry-\u003eTreePos Full Entry-\u003eTreePos Full Entry",
          "package": "HaRe",
          "partial": "Zipper To Node Deep",
          "signature": "Tree Entry-\u003eTreePos Full Entry-\u003eTreePos Full Entry",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TokenUtils.html#v:openZipperToNodeDeep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOpen a zipper so that its focus has the given SrcSpan in its\n subtree, or the location where the SrcSpan should go, if it is not\n in the tree\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils.TokenUtils",
          "name": "openZipperToSpan",
          "package": "HaRe",
          "signature": "ForestSpan -\u003e TreePos Full Entry -\u003e TreePos Full Entry",
          "source": "src/Language-Haskell-Refact-Utils-TokenUtils.html#openZipperToSpan",
          "type": "function"
        },
        "index": {
          "description": "Open zipper so that its focus has the given SrcSpan in its subtree or the location where the SrcSpan should go if it is not in the tree",
          "hierarchy": "Language Haskell Refact Utils TokenUtils",
          "module": "Language.Haskell.Refact.Utils.TokenUtils",
          "name": "openZipperToSpan",
          "normalized": "ForestSpan-\u003eTreePos Full Entry-\u003eTreePos Full Entry",
          "package": "HaRe",
          "partial": "Zipper To Span",
          "signature": "ForestSpan-\u003eTreePos Full Entry-\u003eTreePos Full Entry",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TokenUtils.html#v:openZipperToSpan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOpen a zipper to a SrcSpan that has been added in the tree, and\n thus does not necessarily fall in the logical hierarchy of the tree\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils.TokenUtils",
          "name": "openZipperToSpanAdded",
          "package": "HaRe",
          "signature": "ForestSpan -\u003e TreePos Full Entry -\u003e TreePos Full Entry",
          "source": "src/Language-Haskell-Refact-Utils-TokenUtils.html#openZipperToSpanAdded",
          "type": "function"
        },
        "index": {
          "description": "Open zipper to SrcSpan that has been added in the tree and thus does not necessarily fall in the logical hierarchy of the tree",
          "hierarchy": "Language Haskell Refact Utils TokenUtils",
          "module": "Language.Haskell.Refact.Utils.TokenUtils",
          "name": "openZipperToSpanAdded",
          "normalized": "ForestSpan-\u003eTreePos Full Entry-\u003eTreePos Full Entry",
          "package": "HaRe",
          "partial": "Zipper To Span Added",
          "signature": "ForestSpan-\u003eTreePos Full Entry-\u003eTreePos Full Entry",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TokenUtils.html#v:openZipperToSpanAdded"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOpen a zipper so that its focus has the given SrcSpan in its\n subtree, or the location where the SrcSpan should go, if it is not\n in the tree.\n In the case of an \u003ccode\u003e\u003ca\u003eAbove\u003c/a\u003e\u003c/code\u003e layout with the same SrcSpan below,\n return that instead\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils.TokenUtils",
          "name": "openZipperToSpanDeep",
          "package": "HaRe",
          "signature": "ForestSpan -\u003e TreePos Full Entry -\u003e TreePos Full Entry",
          "source": "src/Language-Haskell-Refact-Utils-TokenUtils.html#openZipperToSpanDeep",
          "type": "function"
        },
        "index": {
          "description": "Open zipper so that its focus has the given SrcSpan in its subtree or the location where the SrcSpan should go if it is not in the tree In the case of an Above layout with the same SrcSpan below return that instead",
          "hierarchy": "Language Haskell Refact Utils TokenUtils",
          "module": "Language.Haskell.Refact.Utils.TokenUtils",
          "name": "openZipperToSpanDeep",
          "normalized": "ForestSpan-\u003eTreePos Full Entry-\u003eTreePos Full Entry",
          "package": "HaRe",
          "partial": "Zipper To Span Deep",
          "signature": "ForestSpan-\u003eTreePos Full Entry-\u003eTreePos Full Entry",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TokenUtils.html#v:openZipperToSpanDeep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOpen a zipper so that its focus has the given SrcSpan in its\n subtree, or the location where the SrcSpan should go, if it is not\n in the tree\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils.TokenUtils",
          "name": "openZipperToSpanOrig",
          "package": "HaRe",
          "signature": "ForestSpan -\u003e TreePos Full Entry -\u003e TreePos Full Entry",
          "source": "src/Language-Haskell-Refact-Utils-TokenUtils.html#openZipperToSpanOrig",
          "type": "function"
        },
        "index": {
          "description": "Open zipper so that its focus has the given SrcSpan in its subtree or the location where the SrcSpan should go if it is not in the tree",
          "hierarchy": "Language Haskell Refact Utils TokenUtils",
          "module": "Language.Haskell.Refact.Utils.TokenUtils",
          "name": "openZipperToSpanOrig",
          "normalized": "ForestSpan-\u003eTreePos Full Entry-\u003eTreePos Full Entry",
          "package": "HaRe",
          "partial": "Zipper To Span Orig",
          "signature": "ForestSpan-\u003eTreePos Full Entry-\u003eTreePos Full Entry",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TokenUtils.html#v:openZipperToSpanOrig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.TokenUtils",
          "name": "placeToksForSpan",
          "package": "HaRe",
          "signature": "Tree Entry -\u003e SrcSpan -\u003e Tree Entry -\u003e Positioning -\u003e [PosToken] -\u003e [PosToken]",
          "source": "src/Language-Haskell-Refact-Utils-TokenUtils.html#placeToksForSpan",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils TokenUtils",
          "module": "Language.Haskell.Refact.Utils.TokenUtils",
          "name": "placeToksForSpan",
          "normalized": "Tree Entry-\u003eSrcSpan-\u003eTree Entry-\u003ePositioning-\u003e[PosToken]-\u003e[PosToken]",
          "package": "HaRe",
          "partial": "Toks For Span",
          "signature": "Tree Entry-\u003eSrcSpan-\u003eTree Entry-\u003ePositioning-\u003e[PosToken]-\u003e[PosToken]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TokenUtils.html#v:placeToksForSpan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a simple (start,end) position to a SrcSpan belonging to\n the file in the tree\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils.TokenUtils",
          "name": "posToSrcSpan",
          "package": "HaRe",
          "signature": "Tree Entry -\u003e (SimpPos, SimpPos) -\u003e SrcSpan",
          "source": "src/Language-Haskell-Refact-Utils-TokenUtils.html#posToSrcSpan",
          "type": "function"
        },
        "index": {
          "description": "Convert simple start end position to SrcSpan belonging to the file in the tree",
          "hierarchy": "Language Haskell Refact Utils TokenUtils",
          "module": "Language.Haskell.Refact.Utils.TokenUtils",
          "name": "posToSrcSpan",
          "normalized": "Tree Entry-\u003e(SimpPos,SimpPos)-\u003eSrcSpan",
          "package": "HaRe",
          "partial": "To Src Span",
          "signature": "Tree Entry-\u003e(SimpPos,SimpPos)-\u003eSrcSpan",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TokenUtils.html#v:posToSrcSpan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a simple (start,end) position to a SrcSpan belonging to\n the file in the given token\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils.TokenUtils",
          "name": "posToSrcSpanTok",
          "package": "HaRe",
          "signature": "PosToken -\u003e (SimpPos, SimpPos) -\u003e SrcSpan",
          "source": "src/Language-Haskell-Refact-Utils-TokenUtils.html#posToSrcSpanTok",
          "type": "function"
        },
        "index": {
          "description": "Convert simple start end position to SrcSpan belonging to the file in the given token",
          "hierarchy": "Language Haskell Refact Utils TokenUtils",
          "module": "Language.Haskell.Refact.Utils.TokenUtils",
          "name": "posToSrcSpanTok",
          "normalized": "PosToken-\u003e(SimpPos,SimpPos)-\u003eSrcSpan",
          "package": "HaRe",
          "partial": "To Src Span Tok",
          "signature": "PosToken-\u003e(SimpPos,SimpPos)-\u003eSrcSpan",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TokenUtils.html#v:posToSrcSpanTok"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.TokenUtils",
          "name": "putToksInCache",
          "package": "HaRe",
          "signature": "TokenCache -\u003e SrcSpan -\u003e [PosToken] -\u003e (TokenCache, SrcSpan)",
          "source": "src/Language-Haskell-Refact-Utils-TokenUtils.html#putToksInCache",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils TokenUtils",
          "module": "Language.Haskell.Refact.Utils.TokenUtils",
          "name": "putToksInCache",
          "normalized": "TokenCache-\u003eSrcSpan-\u003e[PosToken]-\u003e(TokenCache,SrcSpan)",
          "package": "HaRe",
          "partial": "Toks In Cache",
          "signature": "TokenCache-\u003eSrcSpan-\u003e[PosToken]-\u003e(TokenCache,SrcSpan)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TokenUtils.html#v:putToksInCache"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.TokenUtils",
          "name": "reAlignMarked",
          "package": "HaRe",
          "signature": "[PosToken] -\u003e [PosToken]",
          "source": "src/Language-Haskell-Refact-Utils-TokenUtils.html#reAlignMarked",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils TokenUtils",
          "module": "Language.Haskell.Refact.Utils.TokenUtils",
          "name": "reAlignMarked",
          "normalized": "[PosToken]-\u003e[PosToken]",
          "package": "HaRe",
          "partial": "Align Marked",
          "signature": "[PosToken]-\u003e[PosToken]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TokenUtils.html#v:reAlignMarked"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSome tokens are marked if they belong to identifiers which have\n been renamed. When the renaming takes place, no layout adjustment\n is done. This function adjusts the spacing for the rest of the line\n to match as far as possible the original spacing, except for the\n name change.\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils.TokenUtils",
          "name": "reAlignOneLine",
          "package": "HaRe",
          "signature": "[PosToken] -\u003e [PosToken]",
          "source": "src/Language-Haskell-Refact-Utils-TokenUtils.html#reAlignOneLine",
          "type": "function"
        },
        "index": {
          "description": "Some tokens are marked if they belong to identifiers which have been renamed When the renaming takes place no layout adjustment is done This function adjusts the spacing for the rest of the line to match as far as possible the original spacing except for the name change",
          "hierarchy": "Language Haskell Refact Utils TokenUtils",
          "module": "Language.Haskell.Refact.Utils.TokenUtils",
          "name": "reAlignOneLine",
          "normalized": "[PosToken]-\u003e[PosToken]",
          "package": "HaRe",
          "partial": "Align One Line",
          "signature": "[PosToken]-\u003e[PosToken]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TokenUtils.html#v:reAlignOneLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.TokenUtils",
          "name": "reAlignToks",
          "package": "HaRe",
          "signature": "[PosToken] -\u003e [PosToken]",
          "source": "src/Language-Haskell-Refact-Utils-TokenUtils.html#reAlignToks",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils TokenUtils",
          "module": "Language.Haskell.Refact.Utils.TokenUtils",
          "name": "reAlignToks",
          "normalized": "[PosToken]-\u003e[PosToken]",
          "package": "HaRe",
          "partial": "Align Toks",
          "signature": "[PosToken]-\u003e[PosToken]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TokenUtils.html#v:reAlignToks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.TokenUtils",
          "name": "reIndentToks",
          "package": "HaRe",
          "signature": "Positioning -\u003e [PosToken] -\u003e [PosToken] -\u003e [PosToken]",
          "source": "src/Language-Haskell-Refact-Utils-TokenUtils.html#reIndentToks",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils TokenUtils",
          "module": "Language.Haskell.Refact.Utils.TokenUtils",
          "name": "reIndentToks",
          "normalized": "Positioning-\u003e[PosToken]-\u003e[PosToken]-\u003e[PosToken]",
          "package": "HaRe",
          "partial": "Indent Toks",
          "signature": "Positioning-\u003e[PosToken]-\u003e[PosToken]-\u003e[PosToken]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TokenUtils.html#v:reIndentToks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemoves a ForestSpan and its tokens from the forest.\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils.TokenUtils",
          "name": "removeSrcSpan",
          "package": "HaRe",
          "signature": "Tree Entry-\u003e ForestSpan-\u003e (Tree Entry, Tree Entry)",
          "type": "function"
        },
        "index": {
          "description": "Removes ForestSpan and its tokens from the forest",
          "hierarchy": "Language Haskell Refact Utils TokenUtils",
          "module": "Language.Haskell.Refact.Utils.TokenUtils",
          "name": "removeSrcSpan",
          "normalized": "Tree Entry-\u003eForestSpan-\u003e(Tree Entry,Tree Entry)",
          "package": "HaRe",
          "partial": "Src Span",
          "signature": "Tree Entry-\u003eForestSpan-\u003e(Tree Entry,Tree Entry)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TokenUtils.html#v:removeSrcSpan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.TokenUtils",
          "name": "removeToksFromCache",
          "package": "HaRe",
          "signature": "TokenCache -\u003e SrcSpan -\u003e TokenCache",
          "source": "src/Language-Haskell-Refact-Utils-TokenUtils.html#removeToksFromCache",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils TokenUtils",
          "module": "Language.Haskell.Refact.Utils.TokenUtils",
          "name": "removeToksFromCache",
          "normalized": "TokenCache-\u003eSrcSpan-\u003eTokenCache",
          "package": "HaRe",
          "partial": "Toks From Cache",
          "signature": "TokenCache-\u003eSrcSpan-\u003eTokenCache",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TokenUtils.html#v:removeToksFromCache"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReplace a single token in a token tree, without changing the\n structure of the tree\n NOTE: the GHC.SrcSpan may have been used to select the appropriate\n forest in the first place, and is required to select the correct\n span in the tree, due to the ForestLine annotations that may be present\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils.TokenUtils",
          "name": "replaceTokenForSrcSpan",
          "package": "HaRe",
          "signature": "Tree Entry -\u003e SrcSpan -\u003e PosToken -\u003e Tree Entry",
          "source": "src/Language-Haskell-Refact-Utils-TokenUtils.html#replaceTokenForSrcSpan",
          "type": "function"
        },
        "index": {
          "description": "Replace single token in token tree without changing the structure of the tree NOTE the GHC.SrcSpan may have been used to select the appropriate forest in the first place and is required to select the correct span in the tree due to the ForestLine annotations that may be present",
          "hierarchy": "Language Haskell Refact Utils TokenUtils",
          "module": "Language.Haskell.Refact.Utils.TokenUtils",
          "name": "replaceTokenForSrcSpan",
          "normalized": "Tree Entry-\u003eSrcSpan-\u003ePosToken-\u003eTree Entry",
          "package": "HaRe",
          "partial": "Token For Src Span",
          "signature": "Tree Entry-\u003eSrcSpan-\u003ePosToken-\u003eTree Entry",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TokenUtils.html#v:replaceTokenForSrcSpan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.TokenUtils",
          "name": "replaceTokenInCache",
          "package": "HaRe",
          "signature": "TokenCache -\u003e SrcSpan -\u003e PosToken -\u003e TokenCache",
          "source": "src/Language-Haskell-Refact-Utils-TokenUtils.html#replaceTokenInCache",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils TokenUtils",
          "module": "Language.Haskell.Refact.Utils.TokenUtils",
          "name": "replaceTokenInCache",
          "normalized": "TokenCache-\u003eSrcSpan-\u003ePosToken-\u003eTokenCache",
          "package": "HaRe",
          "partial": "Token In Cache",
          "signature": "TokenCache-\u003eSrcSpan-\u003ePosToken-\u003eTokenCache",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TokenUtils.html#v:replaceTokenInCache"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.TokenUtils",
          "name": "replaceTreeInCache",
          "package": "HaRe",
          "signature": "SrcSpan -\u003e Tree Entry -\u003e TokenCache -\u003e TokenCache",
          "source": "src/Language-Haskell-Refact-Utils-TokenUtils.html#replaceTreeInCache",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils TokenUtils",
          "module": "Language.Haskell.Refact.Utils.TokenUtils",
          "name": "replaceTreeInCache",
          "normalized": "SrcSpan-\u003eTree Entry-\u003eTokenCache-\u003eTokenCache",
          "package": "HaRe",
          "partial": "Tree In Cache",
          "signature": "SrcSpan-\u003eTree Entry-\u003eTokenCache-\u003eTokenCache",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TokenUtils.html#v:replaceTreeInCache"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStarting from a point in the zipper, retrieve all tokens backwards\n until the line changes for a non-comment/non-empty token or\n beginning of file.\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils.TokenUtils",
          "name": "retrievePrevLineToks",
          "package": "HaRe",
          "signature": "TreePos Full Entry -\u003e ReversedToks",
          "source": "src/Language-Haskell-Refact-Utils-TokenUtils.html#retrievePrevLineToks",
          "type": "function"
        },
        "index": {
          "description": "Starting from point in the zipper retrieve all tokens backwards until the line changes for non-comment non-empty token or beginning of file",
          "hierarchy": "Language Haskell Refact Utils TokenUtils",
          "module": "Language.Haskell.Refact.Utils.TokenUtils",
          "name": "retrievePrevLineToks",
          "normalized": "TreePos Full Entry-\u003eReversedToks",
          "package": "HaRe",
          "partial": "Prev Line Toks",
          "signature": "TreePos Full Entry-\u003eReversedToks",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TokenUtils.html#v:retrievePrevLineToks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.TokenUtils",
          "name": "retrieveTokens'",
          "package": "HaRe",
          "signature": "Tree Entry -\u003e [Entry]",
          "source": "src/Language-Haskell-Refact-Utils-TokenUtils.html#retrieveTokens%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils TokenUtils",
          "module": "Language.Haskell.Refact.Utils.TokenUtils",
          "name": "retrieveTokens'",
          "normalized": "Tree Entry-\u003e[Entry]",
          "package": "HaRe",
          "partial": "Tokens'",
          "signature": "Tree Entry-\u003e[Entry]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TokenUtils.html#v:retrieveTokens-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrieve all the tokens at the leaves of the tree, in order.\n Marked tokens are re-aligned, and gaps are closed.\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils.TokenUtils",
          "name": "retrieveTokensFinal",
          "package": "HaRe",
          "signature": "Tree Entry -\u003e [PosToken]",
          "source": "src/Language-Haskell-Refact-Utils-TokenUtils.html#retrieveTokensFinal",
          "type": "function"
        },
        "index": {
          "description": "Retrieve all the tokens at the leaves of the tree in order Marked tokens are re-aligned and gaps are closed",
          "hierarchy": "Language Haskell Refact Utils TokenUtils",
          "module": "Language.Haskell.Refact.Utils.TokenUtils",
          "name": "retrieveTokensFinal",
          "normalized": "Tree Entry-\u003e[PosToken]",
          "package": "HaRe",
          "partial": "Tokens Final",
          "signature": "Tree Entry-\u003e[PosToken]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TokenUtils.html#v:retrieveTokensFinal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrieve all the tokens at the leaves of the tree, in order. No\n adjustments are made to address gaps or re-alignment of the tokens\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils.TokenUtils",
          "name": "retrieveTokensInterim",
          "package": "HaRe",
          "signature": "Tree Entry -\u003e [PosToken]",
          "source": "src/Language-Haskell-Refact-Utils-TokenUtils.html#retrieveTokensInterim",
          "type": "function"
        },
        "index": {
          "description": "Retrieve all the tokens at the leaves of the tree in order No adjustments are made to address gaps or re-alignment of the tokens",
          "hierarchy": "Language Haskell Refact Utils TokenUtils",
          "module": "Language.Haskell.Refact.Utils.TokenUtils",
          "name": "retrieveTokensInterim",
          "normalized": "Tree Entry-\u003e[PosToken]",
          "package": "HaRe",
          "partial": "Tokens Interim",
          "signature": "Tree Entry-\u003e[PosToken]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TokenUtils.html#v:retrieveTokensInterim"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.TokenUtils",
          "name": "reverseToks",
          "package": "HaRe",
          "signature": "[PosToken] -\u003e ReversedToks",
          "source": "src/Language-Haskell-Refact-Utils-TokenUtils.html#reverseToks",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils TokenUtils",
          "module": "Language.Haskell.Refact.Utils.TokenUtils",
          "name": "reverseToks",
          "normalized": "[PosToken]-\u003eReversedToks",
          "package": "HaRe",
          "partial": "Toks",
          "signature": "[PosToken]-\u003eReversedToks",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TokenUtils.html#v:reverseToks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.TokenUtils",
          "name": "reversedToks",
          "package": "HaRe",
          "signature": "ReversedToks -\u003e [PosToken]",
          "source": "src/Language-Haskell-Refact-Utils-TokenUtils.html#reversedToks",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils TokenUtils",
          "module": "Language.Haskell.Refact.Utils.TokenUtils",
          "name": "reversedToks",
          "normalized": "ReversedToks-\u003e[PosToken]",
          "package": "HaRe",
          "partial": "Toks",
          "signature": "ReversedToks-\u003e[PosToken]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TokenUtils.html#v:reversedToks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.TokenUtils",
          "name": "sf",
          "package": "HaRe",
          "signature": "SrcSpan -\u003e ForestSpan",
          "source": "src/Language-Haskell-Refact-Utils-TokenUtils.html#sf",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils TokenUtils",
          "module": "Language.Haskell.Refact.Utils.TokenUtils",
          "name": "sf",
          "normalized": "SrcSpan-\u003eForestSpan",
          "package": "HaRe",
          "signature": "SrcSpan-\u003eForestSpan",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TokenUtils.html#v:sf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.TokenUtils",
          "name": "showForest",
          "package": "HaRe",
          "signature": "[Tree Entry] -\u003e [String]",
          "source": "src/Language-Haskell-Refact-Utils-TokenUtils.html#showForest",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils TokenUtils",
          "module": "Language.Haskell.Refact.Utils.TokenUtils",
          "name": "showForest",
          "normalized": "[Tree Entry]-\u003e[String]",
          "package": "HaRe",
          "partial": "Forest",
          "signature": "[Tree Entry]-\u003e[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TokenUtils.html#v:showForest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.TokenUtils",
          "name": "showForestSpan",
          "package": "HaRe",
          "signature": "ForestSpan -\u003e String",
          "source": "src/Language-Haskell-Refact-Utils-TokenUtils.html#showForestSpan",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils TokenUtils",
          "module": "Language.Haskell.Refact.Utils.TokenUtils",
          "name": "showForestSpan",
          "normalized": "ForestSpan-\u003eString",
          "package": "HaRe",
          "partial": "Forest Span",
          "signature": "ForestSpan-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TokenUtils.html#v:showForestSpan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.TokenUtils",
          "name": "showSrcSpan",
          "package": "HaRe",
          "signature": "SrcSpan -\u003e String",
          "source": "src/Language-Haskell-Refact-Utils-TokenUtils.html#showSrcSpan",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils TokenUtils",
          "module": "Language.Haskell.Refact.Utils.TokenUtils",
          "name": "showSrcSpan",
          "normalized": "SrcSpan-\u003eString",
          "package": "HaRe",
          "partial": "Src Span",
          "signature": "SrcSpan-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TokenUtils.html#v:showSrcSpan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.TokenUtils",
          "name": "showSrcSpanF",
          "package": "HaRe",
          "signature": "SrcSpan -\u003e String",
          "source": "src/Language-Haskell-Refact-Utils-TokenUtils.html#showSrcSpanF",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils TokenUtils",
          "module": "Language.Haskell.Refact.Utils.TokenUtils",
          "name": "showSrcSpanF",
          "normalized": "SrcSpan-\u003eString",
          "package": "HaRe",
          "partial": "Src Span",
          "signature": "SrcSpan-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TokenUtils.html#v:showSrcSpanF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.TokenUtils",
          "name": "showTree",
          "package": "HaRe",
          "signature": "Tree Entry -\u003e String",
          "source": "src/Language-Haskell-Refact-Utils-TokenUtils.html#showTree",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils TokenUtils",
          "module": "Language.Haskell.Refact.Utils.TokenUtils",
          "name": "showTree",
          "normalized": "Tree Entry-\u003eString",
          "package": "HaRe",
          "partial": "Tree",
          "signature": "Tree Entry-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TokenUtils.html#v:showTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.TokenUtils",
          "name": "simpPosToForestSpan",
          "package": "HaRe",
          "signature": "(SimpPos, SimpPos) -\u003e ForestSpan",
          "source": "src/Language-Haskell-Refact-Utils-TokenUtils.html#simpPosToForestSpan",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils TokenUtils",
          "module": "Language.Haskell.Refact.Utils.TokenUtils",
          "name": "simpPosToForestSpan",
          "normalized": "(SimpPos,SimpPos)-\u003eForestSpan",
          "package": "HaRe",
          "partial": "Pos To Forest Span",
          "signature": "(SimpPos,SimpPos)-\u003eForestSpan",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TokenUtils.html#v:simpPosToForestSpan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDoes the first span contain the second? Takes cognisance of the\n various flags a ForestSpan can have.\n NOTE: This function relies on the Eq instance for ForestLine\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils.TokenUtils",
          "name": "spanContains",
          "package": "HaRe",
          "signature": "ForestSpan -\u003e ForestSpan -\u003e Bool",
          "source": "src/Language-Haskell-Refact-Utils-TokenUtils.html#spanContains",
          "type": "function"
        },
        "index": {
          "description": "Does the first span contain the second Takes cognisance of the various flags ForestSpan can have NOTE This function relies on the Eq instance for ForestLine",
          "hierarchy": "Language Haskell Refact Utils TokenUtils",
          "module": "Language.Haskell.Refact.Utils.TokenUtils",
          "name": "spanContains",
          "normalized": "ForestSpan-\u003eForestSpan-\u003eBool",
          "package": "HaRe",
          "partial": "Contains",
          "signature": "ForestSpan-\u003eForestSpan-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TokenUtils.html#v:spanContains"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the start and end position of a SrcSpan\n spanStartEnd :: GHC.SrcSpan -\u003e (SimpPos,SimpPos)\n spanStartEnd sspan = (getGhcLoc sspan,getGhcLocEnd sspan)\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils.TokenUtils",
          "name": "spanStartEnd",
          "package": "HaRe",
          "signature": "SrcSpan -\u003e ForestSpan",
          "source": "src/Language-Haskell-Refact-Utils-TokenUtils.html#spanStartEnd",
          "type": "function"
        },
        "index": {
          "description": "Get the start and end position of SrcSpan spanStartEnd GHC.SrcSpan SimpPos SimpPos spanStartEnd sspan getGhcLoc sspan getGhcLocEnd sspan",
          "hierarchy": "Language Haskell Refact Utils TokenUtils",
          "module": "Language.Haskell.Refact.Utils.TokenUtils",
          "name": "spanStartEnd",
          "normalized": "SrcSpan-\u003eForestSpan",
          "package": "HaRe",
          "partial": "Start End",
          "signature": "SrcSpan-\u003eForestSpan",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TokenUtils.html#v:spanStartEnd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSplit a forest of trees into a (begin,middle,end) according to a\n ForestSpan, such that no tokens are included in begin or end belonging\n to the ForestSpan, and all of middle has some part of the ForestSpan\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils.TokenUtils",
          "name": "splitForestOnSpan",
          "package": "HaRe",
          "signature": "Forest Entry -\u003e ForestSpan -\u003e ([Tree Entry], [Tree Entry], [Tree Entry])",
          "source": "src/Language-Haskell-Refact-Utils-TokenUtils.html#splitForestOnSpan",
          "type": "function"
        },
        "index": {
          "description": "Split forest of trees into begin middle end according to ForestSpan such that no tokens are included in begin or end belonging to the ForestSpan and all of middle has some part of the ForestSpan",
          "hierarchy": "Language Haskell Refact Utils TokenUtils",
          "module": "Language.Haskell.Refact.Utils.TokenUtils",
          "name": "splitForestOnSpan",
          "normalized": "Forest Entry-\u003eForestSpan-\u003e([Tree Entry],[Tree Entry],[Tree Entry])",
          "package": "HaRe",
          "partial": "Forest On Span",
          "signature": "Forest Entry-\u003eForestSpan-\u003e([Tree Entry],[Tree Entry],[Tree Entry])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TokenUtils.html#v:splitForestOnSpan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.TokenUtils",
          "name": "splitSubToks",
          "package": "HaRe",
          "signature": "Tree Entry -\u003e (ForestPos, ForestPos) -\u003e ([Tree Entry], [Tree Entry], [Tree Entry])",
          "source": "src/Language-Haskell-Refact-Utils-TokenUtils.html#splitSubToks",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils TokenUtils",
          "module": "Language.Haskell.Refact.Utils.TokenUtils",
          "name": "splitSubToks",
          "normalized": "Tree Entry-\u003e(ForestPos,ForestPos)-\u003e([Tree Entry],[Tree Entry],[Tree Entry])",
          "package": "HaRe",
          "partial": "Sub Toks",
          "signature": "Tree Entry-\u003e(ForestPos,ForestPos)-\u003e([Tree Entry],[Tree Entry],[Tree Entry])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TokenUtils.html#v:splitSubToks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSplit a given tree into a possibly empty part that lies before the\n srcspan, the part that is wholly included in the srcspan and the\n part the lies outside of it at the end.\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils.TokenUtils",
          "name": "splitSubtree",
          "package": "HaRe",
          "signature": "Tree Entry -\u003e ForestSpan -\u003e ([Tree Entry], [Tree Entry], [Tree Entry])",
          "source": "src/Language-Haskell-Refact-Utils-TokenUtils.html#splitSubtree",
          "type": "function"
        },
        "index": {
          "description": "Split given tree into possibly empty part that lies before the srcspan the part that is wholly included in the srcspan and the part the lies outside of it at the end",
          "hierarchy": "Language Haskell Refact Utils TokenUtils",
          "module": "Language.Haskell.Refact.Utils.TokenUtils",
          "name": "splitSubtree",
          "normalized": "Tree Entry-\u003eForestSpan-\u003e([Tree Entry],[Tree Entry],[Tree Entry])",
          "package": "HaRe",
          "partial": "Subtree",
          "signature": "Tree Entry-\u003eForestSpan-\u003e([Tree Entry],[Tree Entry],[Tree Entry])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TokenUtils.html#v:splitSubtree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.TokenUtils",
          "name": "srcPosToSimpPos",
          "package": "HaRe",
          "signature": "(Int, Int) -\u003e (Int, Int)",
          "source": "src/Language-Haskell-Refact-Utils-TokenUtils.html#srcPosToSimpPos",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils TokenUtils",
          "module": "Language.Haskell.Refact.Utils.TokenUtils",
          "name": "srcPosToSimpPos",
          "normalized": "(Int,Int)-\u003e(Int,Int)",
          "package": "HaRe",
          "partial": "Pos To Simp Pos",
          "signature": "(Int,Int)-\u003e(Int,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TokenUtils.html#v:srcPosToSimpPos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.TokenUtils",
          "name": "srcSpanToForestSpan",
          "package": "HaRe",
          "signature": "SrcSpan -\u003e ForestSpan",
          "source": "src/Language-Haskell-Refact-Utils-TokenUtils.html#srcSpanToForestSpan",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils TokenUtils",
          "module": "Language.Haskell.Refact.Utils.TokenUtils",
          "name": "srcSpanToForestSpan",
          "normalized": "SrcSpan-\u003eForestSpan",
          "package": "HaRe",
          "partial": "Span To Forest Span",
          "signature": "SrcSpan-\u003eForestSpan",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TokenUtils.html#v:srcSpanToForestSpan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.TokenUtils",
          "name": "stripForestLines",
          "package": "HaRe",
          "signature": "[PosToken] -\u003e [PosToken]",
          "source": "src/Language-Haskell-Refact-Utils-TokenUtils.html#stripForestLines",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils TokenUtils",
          "module": "Language.Haskell.Refact.Utils.TokenUtils",
          "name": "stripForestLines",
          "normalized": "[PosToken]-\u003e[PosToken]",
          "package": "HaRe",
          "partial": "Forest Lines",
          "signature": "[PosToken]-\u003e[PosToken]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TokenUtils.html#v:stripForestLines"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSynchronise a located AST fragment to use a newly created SrcSpan\n in the token tree.\n TODO: Should this indent the tokens as well?\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils.TokenUtils",
          "name": "syncAST",
          "package": "HaRe",
          "signature": "Located t-\u003e SrcSpan-\u003e Tree Entry-\u003e (Located t, Tree Entry)",
          "type": "function"
        },
        "index": {
          "description": "Synchronise located AST fragment to use newly created SrcSpan in the token tree TODO Should this indent the tokens as well",
          "hierarchy": "Language Haskell Refact Utils TokenUtils",
          "module": "Language.Haskell.Refact.Utils.TokenUtils",
          "name": "syncAST",
          "normalized": "Located a-\u003eSrcSpan-\u003eTree Entry-\u003e(Located a,Tree Entry)",
          "package": "HaRe",
          "partial": "AST",
          "signature": "Located t-\u003eSrcSpan-\u003eTree Entry-\u003e(Located t,Tree Entry)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TokenUtils.html#v:syncAST"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAssuming most recent operation has stashed the old tokens, sync\n the given AST to the most recent stash entry\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils.TokenUtils",
          "name": "syncAstToLatestCache",
          "package": "HaRe",
          "signature": "TokenCache -\u003e Located t -\u003e Located t",
          "source": "src/Language-Haskell-Refact-Utils-TokenUtils.html#syncAstToLatestCache",
          "type": "function"
        },
        "index": {
          "description": "Assuming most recent operation has stashed the old tokens sync the given AST to the most recent stash entry",
          "hierarchy": "Language Haskell Refact Utils TokenUtils",
          "module": "Language.Haskell.Refact.Utils.TokenUtils",
          "name": "syncAstToLatestCache",
          "normalized": "TokenCache-\u003eLocated a-\u003eLocated a",
          "package": "HaRe",
          "partial": "Ast To Latest Cache",
          "signature": "TokenCache-\u003eLocated t-\u003eLocated t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TokenUtils.html#v:syncAstToLatestCache"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.TokenUtils",
          "name": "treeIdFromForestSpan",
          "package": "HaRe",
          "signature": "ForestSpan -\u003e TreeId",
          "source": "src/Language-Haskell-Refact-Utils-TokenUtils.html#treeIdFromForestSpan",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils TokenUtils",
          "module": "Language.Haskell.Refact.Utils.TokenUtils",
          "name": "treeIdFromForestSpan",
          "normalized": "ForestSpan-\u003eTreeId",
          "package": "HaRe",
          "partial": "Id From Forest Span",
          "signature": "ForestSpan-\u003eTreeId",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TokenUtils.html#v:treeIdFromForestSpan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the start and end position of a Tree\n treeStartEnd :: Tree Entry -\u003e (SimpPos,SimpPos)\n treeStartEnd (Node (Entry sspan _) _) = (getGhcLoc sspan,getGhcLocEnd sspan)\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils.TokenUtils",
          "name": "treeStartEnd",
          "package": "HaRe",
          "signature": "Tree Entry -\u003e ForestSpan",
          "source": "src/Language-Haskell-Refact-Utils-TokenUtils.html#treeStartEnd",
          "type": "function"
        },
        "index": {
          "description": "Get the start and end position of Tree treeStartEnd Tree Entry SimpPos SimpPos treeStartEnd Node Entry sspan getGhcLoc sspan getGhcLocEnd sspan",
          "hierarchy": "Language Haskell Refact Utils TokenUtils",
          "module": "Language.Haskell.Refact.Utils.TokenUtils",
          "name": "treeStartEnd",
          "normalized": "Tree Entry-\u003eForestSpan",
          "package": "HaRe",
          "partial": "Start End",
          "signature": "Tree Entry-\u003eForestSpan",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TokenUtils.html#v:treeStartEnd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.TokenUtils",
          "name": "unReverseToks",
          "package": "HaRe",
          "signature": "ReversedToks -\u003e [PosToken]",
          "source": "src/Language-Haskell-Refact-Utils-TokenUtils.html#unReverseToks",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils TokenUtils",
          "module": "Language.Haskell.Refact.Utils.TokenUtils",
          "name": "unReverseToks",
          "normalized": "ReversedToks-\u003e[PosToken]",
          "package": "HaRe",
          "partial": "Reverse Toks",
          "signature": "ReversedToks-\u003e[PosToken]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TokenUtils.html#v:unReverseToks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReplace the tokens for a given SrcSpan with new ones. The SrcSpan\n will be inserted into the tree if it is not already there.\n If the SrcSpan changes size, replace the SrcSpan with a new one\n (marked), and return it, as well as the old one\n TODO: What about trailing comments? Preserve or replace?\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils.TokenUtils",
          "name": "updateTokensForSrcSpan",
          "package": "HaRe",
          "signature": "Tree Entry -\u003e SrcSpan -\u003e [PosToken] -\u003e (Tree Entry, SrcSpan, Tree Entry)",
          "source": "src/Language-Haskell-Refact-Utils-TokenUtils.html#updateTokensForSrcSpan",
          "type": "function"
        },
        "index": {
          "description": "Replace the tokens for given SrcSpan with new ones The SrcSpan will be inserted into the tree if it is not already there If the SrcSpan changes size replace the SrcSpan with new one marked and return it as well as the old one TODO What about trailing comments Preserve or replace",
          "hierarchy": "Language Haskell Refact Utils TokenUtils",
          "module": "Language.Haskell.Refact.Utils.TokenUtils",
          "name": "updateTokensForSrcSpan",
          "normalized": "Tree Entry-\u003eSrcSpan-\u003e[PosToken]-\u003e(Tree Entry,SrcSpan,Tree Entry)",
          "package": "HaRe",
          "partial": "Tokens For Src Span",
          "signature": "Tree Entry-\u003eSrcSpan-\u003e[PosToken]-\u003e(Tree Entry,SrcSpan,Tree Entry)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TokenUtils.html#v:updateTokensForSrcSpan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module contains types shared between TokenUtils and Monad, and\n exists to break import cycles\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Language.Haskell.Refact.Utils.TokenUtilsTypes",
          "name": "TokenUtilsTypes",
          "package": "HaRe",
          "source": "src/Language-Haskell-Refact-Utils-TokenUtilsTypes.html",
          "type": "module"
        },
        "index": {
          "description": "This module contains types shared between TokenUtils and Monad and exists to break import cycles",
          "hierarchy": "Language Haskell Refact Utils TokenUtilsTypes",
          "module": "Language.Haskell.Refact.Utils.TokenUtilsTypes",
          "name": "TokenUtilsTypes",
          "package": "HaRe",
          "partial": "Token Utils Types",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TokenUtilsTypes.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.TokenUtilsTypes",
          "name": "Col",
          "package": "HaRe",
          "source": "src/Language-Haskell-Refact-Utils-TokenUtilsTypes.html#Col",
          "type": "type"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils TokenUtilsTypes",
          "module": "Language.Haskell.Refact.Utils.TokenUtilsTypes",
          "name": "Col",
          "package": "HaRe",
          "partial": "Col",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TokenUtilsTypes.html#t:Col"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.TokenUtilsTypes",
          "name": "ColOffset",
          "package": "HaRe",
          "source": "src/Language-Haskell-Refact-Utils-TokenUtilsTypes.html#ColOffset",
          "type": "type"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils TokenUtilsTypes",
          "module": "Language.Haskell.Refact.Utils.TokenUtilsTypes",
          "name": "ColOffset",
          "package": "HaRe",
          "partial": "Col Offset",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TokenUtilsTypes.html#t:ColOffset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.TokenUtilsTypes",
          "name": "EndOffset",
          "package": "HaRe",
          "source": "src/Language-Haskell-Refact-Utils-TokenUtilsTypes.html#EndOffset",
          "type": "data"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils TokenUtilsTypes",
          "module": "Language.Haskell.Refact.Utils.TokenUtilsTypes",
          "name": "EndOffset",
          "package": "HaRe",
          "partial": "End Offset",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TokenUtilsTypes.html#t:EndOffset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn entry in the data structure for a particular srcspan.\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils.TokenUtilsTypes",
          "name": "Entry",
          "package": "HaRe",
          "source": "src/Language-Haskell-Refact-Utils-TokenUtilsTypes.html#Entry",
          "type": "data"
        },
        "index": {
          "description": "An entry in the data structure for particular srcspan",
          "hierarchy": "Language Haskell Refact Utils TokenUtilsTypes",
          "module": "Language.Haskell.Refact.Utils.TokenUtilsTypes",
          "name": "Entry",
          "package": "HaRe",
          "partial": "Entry",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TokenUtilsTypes.html#t:Entry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.TokenUtilsTypes",
          "name": "ForestLine",
          "package": "HaRe",
          "source": "src/Language-Haskell-Refact-Utils-TokenUtilsTypes.html#ForestLine",
          "type": "data"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils TokenUtilsTypes",
          "module": "Language.Haskell.Refact.Utils.TokenUtilsTypes",
          "name": "ForestLine",
          "package": "HaRe",
          "partial": "Forest Line",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TokenUtilsTypes.html#t:ForestLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.TokenUtilsTypes",
          "name": "ForestPos",
          "package": "HaRe",
          "source": "src/Language-Haskell-Refact-Utils-TokenUtilsTypes.html#ForestPos",
          "type": "type"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils TokenUtilsTypes",
          "module": "Language.Haskell.Refact.Utils.TokenUtilsTypes",
          "name": "ForestPos",
          "package": "HaRe",
          "partial": "Forest Pos",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TokenUtilsTypes.html#t:ForestPos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatch a SrcSpan, using a ForestLine as the marker\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils.TokenUtilsTypes",
          "name": "ForestSpan",
          "package": "HaRe",
          "source": "src/Language-Haskell-Refact-Utils-TokenUtilsTypes.html#ForestSpan",
          "type": "type"
        },
        "index": {
          "description": "Match SrcSpan using ForestLine as the marker",
          "hierarchy": "Language Haskell Refact Utils TokenUtilsTypes",
          "module": "Language.Haskell.Refact.Utils.TokenUtilsTypes",
          "name": "ForestSpan",
          "package": "HaRe",
          "partial": "Forest Span",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TokenUtilsTypes.html#t:ForestSpan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.TokenUtilsTypes",
          "name": "Layout",
          "package": "HaRe",
          "source": "src/Language-Haskell-Refact-Utils-TokenUtilsTypes.html#Layout",
          "type": "data"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils TokenUtilsTypes",
          "module": "Language.Haskell.Refact.Utils.TokenUtilsTypes",
          "name": "Layout",
          "package": "HaRe",
          "partial": "Layout",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TokenUtilsTypes.html#t:Layout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA data structure to make the ppr process visible\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils.TokenUtilsTypes",
          "name": "Ppr",
          "package": "HaRe",
          "source": "src/Language-Haskell-Refact-Utils-TokenUtilsTypes.html#Ppr",
          "type": "data"
        },
        "index": {
          "description": "data structure to make the ppr process visible",
          "hierarchy": "Language Haskell Refact Utils TokenUtilsTypes",
          "module": "Language.Haskell.Refact.Utils.TokenUtilsTypes",
          "name": "Ppr",
          "package": "HaRe",
          "partial": "Ppr",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TokenUtilsTypes.html#t:Ppr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.TokenUtilsTypes",
          "name": "PprOrigin",
          "package": "HaRe",
          "source": "src/Language-Haskell-Refact-Utils-TokenUtilsTypes.html#PprOrigin",
          "type": "data"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils TokenUtilsTypes",
          "module": "Language.Haskell.Refact.Utils.TokenUtilsTypes",
          "name": "PprOrigin",
          "package": "HaRe",
          "partial": "Ppr Origin",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TokenUtilsTypes.html#t:PprOrigin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.TokenUtilsTypes",
          "name": "Row",
          "package": "HaRe",
          "source": "src/Language-Haskell-Refact-Utils-TokenUtilsTypes.html#Row",
          "type": "type"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils TokenUtilsTypes",
          "module": "Language.Haskell.Refact.Utils.TokenUtilsTypes",
          "name": "Row",
          "package": "HaRe",
          "partial": "Row",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TokenUtilsTypes.html#t:Row"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.TokenUtilsTypes",
          "name": "RowOffset",
          "package": "HaRe",
          "source": "src/Language-Haskell-Refact-Utils-TokenUtilsTypes.html#RowOffset",
          "type": "type"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils TokenUtilsTypes",
          "module": "Language.Haskell.Refact.Utils.TokenUtilsTypes",
          "name": "RowOffset",
          "package": "HaRe",
          "partial": "Row Offset",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TokenUtilsTypes.html#t:RowOffset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.TokenUtilsTypes",
          "name": "TokenCache",
          "package": "HaRe",
          "source": "src/Language-Haskell-Refact-Utils-TokenUtilsTypes.html#TokenCache",
          "type": "data"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils TokenUtilsTypes",
          "module": "Language.Haskell.Refact.Utils.TokenUtilsTypes",
          "name": "TokenCache",
          "package": "HaRe",
          "partial": "Token Cache",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TokenUtilsTypes.html#t:TokenCache"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.TokenUtilsTypes",
          "name": "TreeId",
          "package": "HaRe",
          "source": "src/Language-Haskell-Refact-Utils-TokenUtilsTypes.html#TreeId",
          "type": "data"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils TokenUtilsTypes",
          "module": "Language.Haskell.Refact.Utils.TokenUtilsTypes",
          "name": "TreeId",
          "package": "HaRe",
          "partial": "Tree Id",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TokenUtilsTypes.html#t:TreeId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInitial offset from token before the\n stacked list of items, the (r,c) of the first\n non-comment token, the (r,c) of the end of the last non-comment\n token in the stacked list to be able to calculate the\n (RowOffset,ColOffset) between the last token and the\n start of the next item.\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils.TokenUtilsTypes",
          "name": "Above",
          "package": "HaRe",
          "signature": "Above EndOffset (Row, Col) (Row, Col) EndOffset",
          "source": "src/Language-Haskell-Refact-Utils-TokenUtilsTypes.html#Layout",
          "type": "function"
        },
        "index": {
          "description": "Initial offset from token before the stacked list of items the of the first non-comment token the of the end of the last non-comment token in the stacked list to be able to calculate the RowOffset ColOffset between the last token and the start of the next item",
          "hierarchy": "Language Haskell Refact Utils TokenUtilsTypes",
          "module": "Language.Haskell.Refact.Utils.TokenUtilsTypes",
          "name": "Above",
          "normalized": "Above EndOffset(Row,Col)(Row,Col)EndOffset",
          "package": "HaRe",
          "partial": "Above",
          "signature": "Above EndOffset(Row,Col)(Row,Col)EndOffset",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TokenUtilsTypes.html#v:Above"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdded tokens\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils.TokenUtilsTypes",
          "name": "Added",
          "package": "HaRe",
          "signature": "Added",
          "source": "src/Language-Haskell-Refact-Utils-TokenUtilsTypes.html#PprOrigin",
          "type": "function"
        },
        "index": {
          "description": "Added tokens",
          "hierarchy": "Language Haskell Refact Utils TokenUtilsTypes",
          "module": "Language.Haskell.Refact.Utils.TokenUtilsTypes",
          "name": "Added",
          "package": "HaRe",
          "partial": "Added",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TokenUtilsTypes.html#v:Added"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe gap between this span end and\n  the start of the next in the\n  fringe of the tree.\n             deriving (Show)\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils.TokenUtilsTypes",
          "name": "Deleted",
          "package": "HaRe",
          "signature": "Deleted !ForestSpan RowOffset SimpPos",
          "source": "src/Language-Haskell-Refact-Utils-TokenUtilsTypes.html#Entry",
          "type": "function"
        },
        "index": {
          "description": "The gap between this span end and the start of the next in the fringe of the tree deriving Show",
          "hierarchy": "Language Haskell Refact Utils TokenUtilsTypes",
          "module": "Language.Haskell.Refact.Utils.TokenUtilsTypes",
          "name": "Deleted",
          "package": "HaRe",
          "partial": "Deleted",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TokenUtilsTypes.html#v:Deleted"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe tokens for the SrcSpan if\n  subtree is empty\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils.TokenUtilsTypes",
          "name": "Entry",
          "package": "HaRe",
          "signature": "Entry !ForestSpan !Layout ![PosToken]",
          "source": "src/Language-Haskell-Refact-Utils-TokenUtilsTypes.html#Entry",
          "type": "function"
        },
        "index": {
          "description": "The tokens for the SrcSpan if subtree is empty",
          "hierarchy": "Language Haskell Refact Utils TokenUtilsTypes",
          "module": "Language.Haskell.Refact.Utils.TokenUtilsTypes",
          "name": "Entry",
          "normalized": "Entry ForestSpan Layout[PosToken]",
          "package": "HaRe",
          "partial": "Entry",
          "signature": "Entry ForestSpan Layout[PosToken]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TokenUtilsTypes.html#v:Entry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.TokenUtilsTypes",
          "name": "ForestLine",
          "package": "HaRe",
          "signature": "ForestLine",
          "source": "src/Language-Haskell-Refact-Utils-TokenUtilsTypes.html#ForestLine",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils TokenUtilsTypes",
          "module": "Language.Haskell.Refact.Utils.TokenUtilsTypes",
          "name": "ForestLine",
          "package": "HaRe",
          "partial": "Forest Line",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TokenUtilsTypes.html#v:ForestLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.TokenUtilsTypes",
          "name": "FromAlignCol",
          "package": "HaRe",
          "signature": "FromAlignCol (RowOffset, ColOffset)",
          "source": "src/Language-Haskell-Refact-Utils-TokenUtilsTypes.html#EndOffset",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils TokenUtilsTypes",
          "module": "Language.Haskell.Refact.Utils.TokenUtilsTypes",
          "name": "FromAlignCol",
          "normalized": "FromAlignCol(RowOffset,ColOffset)",
          "package": "HaRe",
          "partial": "From Align Col",
          "signature": "FromAlignCol(RowOffset,ColOffset)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TokenUtilsTypes.html#v:FromAlignCol"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.TokenUtilsTypes",
          "name": "NoChange",
          "package": "HaRe",
          "signature": "NoChange",
          "source": "src/Language-Haskell-Refact-Utils-TokenUtilsTypes.html#Layout",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils TokenUtilsTypes",
          "module": "Language.Haskell.Refact.Utils.TokenUtilsTypes",
          "name": "NoChange",
          "package": "HaRe",
          "partial": "No Change",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TokenUtilsTypes.html#v:NoChange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.TokenUtilsTypes",
          "name": "None",
          "package": "HaRe",
          "signature": "None",
          "source": "src/Language-Haskell-Refact-Utils-TokenUtilsTypes.html#EndOffset",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils TokenUtilsTypes",
          "module": "Language.Haskell.Refact.Utils.TokenUtilsTypes",
          "name": "None",
          "package": "HaRe",
          "partial": "None",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TokenUtilsTypes.html#v:None"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOriginal tokens\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils.TokenUtilsTypes",
          "name": "Original",
          "package": "HaRe",
          "signature": "Original",
          "source": "src/Language-Haskell-Refact-Utils-TokenUtilsTypes.html#PprOrigin",
          "type": "function"
        },
        "index": {
          "description": "Original tokens",
          "hierarchy": "Language Haskell Refact Utils TokenUtilsTypes",
          "module": "Language.Haskell.Refact.Utils.TokenUtilsTypes",
          "name": "Original",
          "package": "HaRe",
          "partial": "Original",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TokenUtilsTypes.html#v:Original"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOffset of start of embedded parts, coords of last token,\n offset to start of next part, relative to the column of\n the start\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils.TokenUtilsTypes",
          "name": "PprAbove",
          "package": "HaRe",
          "signature": "PprAbove EndOffset (Row, Col) EndOffset [Ppr]",
          "source": "src/Language-Haskell-Refact-Utils-TokenUtilsTypes.html#Ppr",
          "type": "function"
        },
        "index": {
          "description": "Offset of start of embedded parts coords of last token offset to start of next part relative to the column of the start",
          "hierarchy": "Language Haskell Refact Utils TokenUtilsTypes",
          "module": "Language.Haskell.Refact.Utils.TokenUtilsTypes",
          "name": "PprAbove",
          "normalized": "PprAbove EndOffset(Row,Col)EndOffset[Ppr]",
          "package": "HaRe",
          "partial": "Ppr Above",
          "signature": "PprAbove EndOffset(Row,Col)EndOffset[Ppr]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TokenUtilsTypes.html#v:PprAbove"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMarks lines that have been deleted together with the\n original gap before, how many lines were originally\n included, and gap after.\n And a note field for debugging\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils.TokenUtilsTypes",
          "name": "PprDeleted",
          "package": "HaRe",
          "signature": "PprDeleted Row Col RowOffset RowOffset RowOffset",
          "source": "src/Language-Haskell-Refact-Utils-TokenUtilsTypes.html#Ppr",
          "type": "function"
        },
        "index": {
          "description": "Marks lines that have been deleted together with the original gap before how many lines were originally included and gap after And note field for debugging",
          "hierarchy": "Language Haskell Refact Utils TokenUtilsTypes",
          "module": "Language.Haskell.Refact.Utils.TokenUtilsTypes",
          "name": "PprDeleted",
          "package": "HaRe",
          "partial": "Ppr Deleted",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TokenUtilsTypes.html#v:PprDeleted"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOriginal row and col of the tokens making up the string\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils.TokenUtilsTypes",
          "name": "PprText",
          "package": "HaRe",
          "signature": "PprText Row Col PprOrigin String",
          "source": "src/Language-Haskell-Refact-Utils-TokenUtilsTypes.html#Ppr",
          "type": "function"
        },
        "index": {
          "description": "Original row and col of the tokens making up the string",
          "hierarchy": "Language Haskell Refact Utils TokenUtilsTypes",
          "module": "Language.Haskell.Refact.Utils.TokenUtilsTypes",
          "name": "PprText",
          "package": "HaRe",
          "partial": "Ppr Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TokenUtilsTypes.html#v:PprText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.TokenUtilsTypes",
          "name": "SameLine",
          "package": "HaRe",
          "signature": "SameLine ColOffset",
          "source": "src/Language-Haskell-Refact-Utils-TokenUtilsTypes.html#EndOffset",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils TokenUtilsTypes",
          "module": "Language.Haskell.Refact.Utils.TokenUtilsTypes",
          "name": "SameLine",
          "package": "HaRe",
          "partial": "Same Line",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TokenUtilsTypes.html#v:SameLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.TokenUtilsTypes",
          "name": "TId",
          "package": "HaRe",
          "signature": "TId !Int",
          "source": "src/Language-Haskell-Refact-Utils-TokenUtilsTypes.html#TreeId",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils TokenUtilsTypes",
          "module": "Language.Haskell.Refact.Utils.TokenUtilsTypes",
          "name": "TId",
          "package": "HaRe",
          "partial": "TId",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TokenUtilsTypes.html#v:TId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.TokenUtilsTypes",
          "name": "TK",
          "package": "HaRe",
          "signature": "TK",
          "source": "src/Language-Haskell-Refact-Utils-TokenUtilsTypes.html#TokenCache",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils TokenUtilsTypes",
          "module": "Language.Haskell.Refact.Utils.TokenUtilsTypes",
          "name": "TK",
          "package": "HaRe",
          "partial": "TK",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TokenUtilsTypes.html#v:TK"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.TokenUtilsTypes",
          "name": "flInsertVersion",
          "package": "HaRe",
          "signature": "Int",
          "source": "src/Language-Haskell-Refact-Utils-TokenUtilsTypes.html#ForestLine",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils TokenUtilsTypes",
          "module": "Language.Haskell.Refact.Utils.TokenUtilsTypes",
          "name": "flInsertVersion",
          "package": "HaRe",
          "partial": "Insert Version",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TokenUtilsTypes.html#v:flInsertVersion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.TokenUtilsTypes",
          "name": "flLine",
          "package": "HaRe",
          "signature": "Int",
          "source": "src/Language-Haskell-Refact-Utils-TokenUtilsTypes.html#ForestLine",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils TokenUtilsTypes",
          "module": "Language.Haskell.Refact.Utils.TokenUtilsTypes",
          "name": "flLine",
          "package": "HaRe",
          "partial": "Line",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TokenUtilsTypes.html#v:flLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe length of the\n span may have\n changed due to\n updated tokens.\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils.TokenUtilsTypes",
          "name": "flSpanLengthChanged",
          "package": "HaRe",
          "signature": "Bool",
          "source": "src/Language-Haskell-Refact-Utils-TokenUtilsTypes.html#ForestLine",
          "type": "function"
        },
        "index": {
          "description": "The length of the span may have changed due to updated tokens",
          "hierarchy": "Language Haskell Refact Utils TokenUtilsTypes",
          "module": "Language.Haskell.Refact.Utils.TokenUtilsTypes",
          "name": "flSpanLengthChanged",
          "package": "HaRe",
          "partial": "Span Length Changed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TokenUtilsTypes.html#v:flSpanLengthChanged"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.TokenUtilsTypes",
          "name": "flTreeSelector",
          "package": "HaRe",
          "signature": "Int",
          "source": "src/Language-Haskell-Refact-Utils-TokenUtilsTypes.html#ForestLine",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils TokenUtilsTypes",
          "module": "Language.Haskell.Refact.Utils.TokenUtilsTypes",
          "name": "flTreeSelector",
          "package": "HaRe",
          "partial": "Tree Selector",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TokenUtilsTypes.html#v:flTreeSelector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIdentifies the tree carrying the main tokens, not any work in\n progress or deleted ones\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils.TokenUtilsTypes",
          "name": "mainTid",
          "package": "HaRe",
          "signature": "TreeId",
          "source": "src/Language-Haskell-Refact-Utils-TokenUtilsTypes.html#mainTid",
          "type": "function"
        },
        "index": {
          "description": "Identifies the tree carrying the main tokens not any work in progress or deleted ones",
          "hierarchy": "Language Haskell Refact Utils TokenUtilsTypes",
          "module": "Language.Haskell.Refact.Utils.TokenUtilsTypes",
          "name": "mainTid",
          "package": "HaRe",
          "partial": "Tid",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TokenUtilsTypes.html#v:mainTid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.TokenUtilsTypes",
          "name": "tkCache",
          "package": "HaRe",
          "signature": "(Map TreeId (Tree Entry))",
          "source": "src/Language-Haskell-Refact-Utils-TokenUtilsTypes.html#TokenCache",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils TokenUtilsTypes",
          "module": "Language.Haskell.Refact.Utils.TokenUtilsTypes",
          "name": "tkCache",
          "package": "HaRe",
          "partial": "Cache",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TokenUtilsTypes.html#v:tkCache"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.TokenUtilsTypes",
          "name": "tkLastTreeId",
          "package": "HaRe",
          "signature": "TreeId",
          "source": "src/Language-Haskell-Refact-Utils-TokenUtilsTypes.html#TokenCache",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils TokenUtilsTypes",
          "module": "Language.Haskell.Refact.Utils.TokenUtilsTypes",
          "name": "tkLastTreeId",
          "package": "HaRe",
          "partial": "Last Tree Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TokenUtilsTypes.html#v:tkLastTreeId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis is a legacy module from the pre-GHC HaRe, and will disappear\n eventually.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Language.Haskell.Refact.Utils.TypeSyn",
          "name": "TypeSyn",
          "package": "HaRe",
          "source": "src/Language-Haskell-Refact-Utils-TypeSyn.html",
          "type": "module"
        },
        "index": {
          "description": "This is legacy module from the pre-GHC HaRe and will disappear eventually",
          "hierarchy": "Language Haskell Refact Utils TypeSyn",
          "module": "Language.Haskell.Refact.Utils.TypeSyn",
          "name": "TypeSyn",
          "package": "HaRe",
          "partial": "Type Syn",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TypeSyn.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.TypeSyn",
          "name": "Export",
          "package": "HaRe",
          "source": "src/Language-Haskell-Refact-Utils-TypeSyn.html#Export",
          "type": "type"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils TypeSyn",
          "module": "Language.Haskell.Refact.Utils.TypeSyn",
          "name": "Export",
          "package": "HaRe",
          "partial": "Export",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TypeSyn.html#t:Export"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.TypeSyn",
          "name": "HsDeclP",
          "package": "HaRe",
          "source": "src/Language-Haskell-Refact-Utils-TypeSyn.html#HsDeclP",
          "type": "type"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils TypeSyn",
          "module": "Language.Haskell.Refact.Utils.TypeSyn",
          "name": "HsDeclP",
          "package": "HaRe",
          "partial": "Hs Decl",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TypeSyn.html#t:HsDeclP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.TypeSyn",
          "name": "HsDeclsP",
          "package": "HaRe",
          "source": "src/Language-Haskell-Refact-Utils-TypeSyn.html#HsDeclsP",
          "type": "type"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils TypeSyn",
          "module": "Language.Haskell.Refact.Utils.TypeSyn",
          "name": "HsDeclsP",
          "package": "HaRe",
          "partial": "Hs Decls",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TypeSyn.html#t:HsDeclsP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.TypeSyn",
          "name": "HsExpP",
          "package": "HaRe",
          "source": "src/Language-Haskell-Refact-Utils-TypeSyn.html#HsExpP",
          "type": "type"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils TypeSyn",
          "module": "Language.Haskell.Refact.Utils.TypeSyn",
          "name": "HsExpP",
          "package": "HaRe",
          "partial": "Hs Exp",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TypeSyn.html#t:HsExpP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.TypeSyn",
          "name": "HsModuleP",
          "package": "HaRe",
          "source": "src/Language-Haskell-Refact-Utils-TypeSyn.html#HsModuleP",
          "type": "type"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils TypeSyn",
          "module": "Language.Haskell.Refact.Utils.TypeSyn",
          "name": "HsModuleP",
          "package": "HaRe",
          "partial": "Hs Module",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TypeSyn.html#t:HsModuleP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHsName is a name as it is found in the source\n This seems to be quite a close correlation\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils.TypeSyn",
          "name": "HsName",
          "package": "HaRe",
          "source": "src/Language-Haskell-Refact-Utils-TypeSyn.html#HsName",
          "type": "type"
        },
        "index": {
          "description": "HsName is name as it is found in the source This seems to be quite close correlation",
          "hierarchy": "Language Haskell Refact Utils TypeSyn",
          "module": "Language.Haskell.Refact.Utils.TypeSyn",
          "name": "HsName",
          "package": "HaRe",
          "partial": "Hs Name",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TypeSyn.html#t:HsName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.TypeSyn",
          "name": "HsPatP",
          "package": "HaRe",
          "source": "src/Language-Haskell-Refact-Utils-TypeSyn.html#HsPatP",
          "type": "type"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils TypeSyn",
          "module": "Language.Haskell.Refact.Utils.TypeSyn",
          "name": "HsPatP",
          "package": "HaRe",
          "partial": "Hs Pat",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TypeSyn.html#t:HsPatP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.TypeSyn",
          "name": "InScopes",
          "package": "HaRe",
          "source": "src/Language-Haskell-Refact-Utils-TypeSyn.html#InScopes",
          "type": "type"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils TypeSyn",
          "module": "Language.Haskell.Refact.Utils.TypeSyn",
          "name": "InScopes",
          "package": "HaRe",
          "partial": "In Scopes",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TypeSyn.html#t:InScopes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe PN is the name as it occurs to the parser, and\n corresponds with the GHC.RdrName\n type PN     = GHC.RdrName\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils.TypeSyn",
          "name": "PName",
          "package": "HaRe",
          "source": "src/Language-Haskell-Refact-Utils-TypeSyn.html#PName",
          "type": "newtype"
        },
        "index": {
          "description": "The PN is the name as it occurs to the parser and corresponds with the GHC.RdrName type PN GHC.RdrName",
          "hierarchy": "Language Haskell Refact Utils TypeSyn",
          "module": "Language.Haskell.Refact.Utils.TypeSyn",
          "name": "PName",
          "package": "HaRe",
          "partial": "PName",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TypeSyn.html#t:PName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.TypeSyn",
          "name": "PosToken",
          "package": "HaRe",
          "source": "src/Language-Haskell-Refact-Utils-TypeSyn.html#PosToken",
          "type": "type"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils TypeSyn",
          "module": "Language.Haskell.Refact.Utils.TypeSyn",
          "name": "PosToken",
          "package": "HaRe",
          "partial": "Pos Token",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TypeSyn.html#t:PosToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.TypeSyn",
          "name": "SimpPos",
          "package": "HaRe",
          "source": "src/Language-Haskell-Refact-Utils-TypeSyn.html#SimpPos",
          "type": "type"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils TypeSyn",
          "module": "Language.Haskell.Refact.Utils.TypeSyn",
          "name": "SimpPos",
          "package": "HaRe",
          "partial": "Simp Pos",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TypeSyn.html#t:SimpPos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.TypeSyn",
          "name": "PN",
          "package": "HaRe",
          "signature": "PN HsName",
          "source": "src/Language-Haskell-Refact-Utils-TypeSyn.html#PName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils TypeSyn",
          "module": "Language.Haskell.Refact.Utils.TypeSyn",
          "name": "PN",
          "package": "HaRe",
          "partial": "PN",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TypeSyn.html#v:PN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.TypeSyn",
          "name": "gfromJust",
          "package": "HaRe",
          "signature": "[Char] -\u003e Maybe a -\u003e a",
          "source": "src/Language-Haskell-Refact-Utils-TypeSyn.html#gfromJust",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils TypeSyn",
          "module": "Language.Haskell.Refact.Utils.TypeSyn",
          "name": "gfromJust",
          "normalized": "[Char]-\u003eMaybe a-\u003ea",
          "package": "HaRe",
          "partial": "Just",
          "signature": "[Char]-\u003eMaybe a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TypeSyn.html#v:gfromJust"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.TypeSyn",
          "name": "ghead",
          "package": "HaRe",
          "signature": "String -\u003e [a] -\u003e a",
          "source": "src/Language-Haskell-Refact-Utils-TypeSyn.html#ghead",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils TypeSyn",
          "module": "Language.Haskell.Refact.Utils.TypeSyn",
          "name": "ghead",
          "normalized": "String-\u003e[a]-\u003ea",
          "package": "HaRe",
          "signature": "String-\u003e[a]-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TypeSyn.html#v:ghead"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.TypeSyn",
          "name": "glast",
          "package": "HaRe",
          "signature": "String -\u003e [a] -\u003e a",
          "source": "src/Language-Haskell-Refact-Utils-TypeSyn.html#glast",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils TypeSyn",
          "module": "Language.Haskell.Refact.Utils.TypeSyn",
          "name": "glast",
          "normalized": "String-\u003e[a]-\u003ea",
          "package": "HaRe",
          "signature": "String-\u003e[a]-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TypeSyn.html#v:glast"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.TypeSyn",
          "name": "gtail",
          "package": "HaRe",
          "signature": "String -\u003e [a] -\u003e [a]",
          "source": "src/Language-Haskell-Refact-Utils-TypeSyn.html#gtail",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils TypeSyn",
          "module": "Language.Haskell.Refact.Utils.TypeSyn",
          "name": "gtail",
          "normalized": "String-\u003e[a]-\u003e[a]",
          "package": "HaRe",
          "signature": "String-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TypeSyn.html#v:gtail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module contains a collection of program analysis and\n transformation functions (the API) that work over the Type\n Decorated AST. Most of the functions defined in the module are\n taken directly from the API, but in some cases are modified to work\n with the type decorated AST.\n\u003c/p\u003e\u003cp\u003eIn particular some new functions have been added to make type\n decorated AST traversals easier.\n\u003c/p\u003e\u003cp\u003eIn HaRe, in order to preserve the comments and layout of refactored\n programs, a refactoring modifies not only the AST but also the\n token stream, and the program source after the refactoring is\n extracted from the token stream rather than the AST, for the\n comments and layout information is kept in the token steam instead\n of the AST. As a consequence, a program transformation function\n from this API modifies both the AST and the token stream (unless\n explicitly stated). So when you build your own program\n transformations, try to use the API to do the transformation, as\n this can liberate you from caring about the token stream.\n\u003c/p\u003e\u003cp\u003eThis type decorated API is still in development. Any suggestions\n and comments are very much welcome.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Language.Haskell.Refact.Utils.TypeUtils",
          "name": "TypeUtils",
          "package": "HaRe",
          "source": "src/Language-Haskell-Refact-Utils-TypeUtils.html",
          "type": "module"
        },
        "index": {
          "description": "This module contains collection of program analysis and transformation functions the API that work over the Type Decorated AST Most of the functions defined in the module are taken directly from the API but in some cases are modified to work with the type decorated AST In particular some new functions have been added to make type decorated AST traversals easier In HaRe in order to preserve the comments and layout of refactored programs refactoring modifies not only the AST but also the token stream and the program source after the refactoring is extracted from the token stream rather than the AST for the comments and layout information is kept in the token steam instead of the AST As consequence program transformation function from this API modifies both the AST and the token stream unless explicitly stated So when you build your own program transformations try to use the API to do the transformation as this can liberate you from caring about the token stream This type decorated API is still in development Any suggestions and comments are very much welcome",
          "hierarchy": "Language Haskell Refact Utils TypeUtils",
          "module": "Language.Haskell.Refact.Utils.TypeUtils",
          "name": "TypeUtils",
          "package": "HaRe",
          "partial": "Type Utils",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TypeUtils.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.TypeUtils",
          "name": "HsValBinds",
          "package": "HaRe",
          "source": "src/Language-Haskell-Refact-Utils-TypeUtils.html#HsValBinds",
          "type": "class"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils TypeUtils",
          "module": "Language.Haskell.Refact.Utils.TypeUtils",
          "name": "HsValBinds",
          "package": "HaRe",
          "partial": "Hs Val Binds",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TypeUtils.html#t:HsValBinds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.TypeUtils",
          "name": "UsedByRhs",
          "package": "HaRe",
          "source": "src/Language-Haskell-Refact-Utils-TypeUtils.html#UsedByRhs",
          "type": "class"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils TypeUtils",
          "module": "Language.Haskell.Refact.Utils.TypeUtils",
          "name": "UsedByRhs",
          "package": "HaRe",
          "partial": "Used By Rhs",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TypeUtils.html#t:UsedByRhs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.TypeUtils",
          "name": "addActualParamsToRhs",
          "package": "HaRe",
          "signature": "Bool -\u003e Name -\u003e [Name] -\u003e t -\u003e RefactGhc t",
          "source": "src/Language-Haskell-Refact-Utils-TypeUtils.html#addActualParamsToRhs",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils TypeUtils",
          "module": "Language.Haskell.Refact.Utils.TypeUtils",
          "name": "addActualParamsToRhs",
          "normalized": "Bool-\u003eName-\u003e[Name]-\u003ea-\u003eRefactGhc a",
          "package": "HaRe",
          "partial": "Actual Params To Rhs",
          "signature": "Bool-\u003eName-\u003e[Name]-\u003et-\u003eRefactGhc t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TypeUtils.html#v:addActualParamsToRhs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdding a declaration to the declaration list of the given syntax\n phrase. If the second argument is Nothing, then the declaration\n will be added to the beginning of the declaration list, but after\n the data type declarations is there is any.\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils.TypeUtils",
          "name": "addDecl",
          "package": "HaRe",
          "signature": "t-\u003e Maybe Name-\u003e (LHsBind Name, [LSig Name], Maybe [PosToken])-\u003e Bool-\u003e RefactGhc t",
          "type": "function"
        },
        "index": {
          "description": "Adding declaration to the declaration list of the given syntax phrase If the second argument is Nothing then the declaration will be added to the beginning of the declaration list but after the data type declarations is there is any",
          "hierarchy": "Language Haskell Refact Utils TypeUtils",
          "module": "Language.Haskell.Refact.Utils.TypeUtils",
          "name": "addDecl",
          "normalized": "a-\u003eMaybe Name-\u003e(LHsBind Name,[LSig Name],Maybe[PosToken])-\u003eBool-\u003eRefactGhc a",
          "package": "HaRe",
          "partial": "Decl",
          "signature": "t-\u003eMaybe Name-\u003e(LHsBind Name,[LSig Name],Maybe[PosToken])-\u003eBool-\u003eRefactGhc t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TypeUtils.html#v:addDecl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eadd items to the hiding list of an import declaration which\n imports the specified module.\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils.TypeUtils",
          "name": "addHiding",
          "package": "HaRe",
          "signature": "ModuleName-\u003e RenamedSource-\u003e [Name]-\u003e RefactGhc RenamedSource",
          "type": "function"
        },
        "index": {
          "description": "add items to the hiding list of an import declaration which imports the specified module",
          "hierarchy": "Language Haskell Refact Utils TypeUtils",
          "module": "Language.Haskell.Refact.Utils.TypeUtils",
          "name": "addHiding",
          "normalized": "ModuleName-\u003eRenamedSource-\u003e[Name]-\u003eRefactGhc RenamedSource",
          "package": "HaRe",
          "partial": "Hiding",
          "signature": "ModuleName-\u003eRenamedSource-\u003e[Name]-\u003eRefactGhc RenamedSource",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TypeUtils.html#v:addHiding"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd identifiers to the export list of a module. If the second argument is like: Just p, then do the adding only if p occurs\n in the export list, and the new identifiers are added right after p in the export list. Otherwise the new identifiers are add\n to the beginning of the export list. In the case that the export list is emport, then if the third argument is True, then create\n an explict export list to contain only the new identifiers, otherwise do nothing.\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils.TypeUtils",
          "name": "addImportDecl",
          "package": "HaRe",
          "signature": "RenamedSource-\u003e ModuleName-\u003e Maybe FastString-\u003e Bool-\u003e Bool-\u003e Bool-\u003e Maybe String-\u003e Bool-\u003e [Name]-\u003e RefactGhc RenamedSource",
          "type": "function"
        },
        "index": {
          "description": "Add identifiers to the export list of module If the second argument is like Just then do the adding only if occurs in the export list and the new identifiers are added right after in the export list Otherwise the new identifiers are add to the beginning of the export list In the case that the export list is emport then if the third argument is True then create an explict export list to contain only the new identifiers otherwise do nothing",
          "hierarchy": "Language Haskell Refact Utils TypeUtils",
          "module": "Language.Haskell.Refact.Utils.TypeUtils",
          "name": "addImportDecl",
          "normalized": "RenamedSource-\u003eModuleName-\u003eMaybe FastString-\u003eBool-\u003eBool-\u003eBool-\u003eMaybe String-\u003eBool-\u003e[Name]-\u003eRefactGhc RenamedSource",
          "package": "HaRe",
          "partial": "Import Decl",
          "signature": "RenamedSource-\u003eModuleName-\u003eMaybe FastString-\u003eBool-\u003eBool-\u003eBool-\u003eMaybe String-\u003eBool-\u003e[Name]-\u003eRefactGhc RenamedSource",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TypeUtils.html#v:addImportDecl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd identifiers (given by the third argument) to the explicit entity list in the declaration importing the\n   specified module name. This function does nothing if the import declaration does not have an explicit entity list. \n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils.TypeUtils",
          "name": "addItemsToImport",
          "package": "HaRe",
          "signature": "ModuleName-\u003e RenamedSource-\u003e [Name]-\u003e RefactGhc RenamedSource",
          "type": "function"
        },
        "index": {
          "description": "Add identifiers given by the third argument to the explicit entity list in the declaration importing the specified module name This function does nothing if the import declaration does not have an explicit entity list",
          "hierarchy": "Language Haskell Refact Utils TypeUtils",
          "module": "Language.Haskell.Refact.Utils.TypeUtils",
          "name": "addItemsToImport",
          "normalized": "ModuleName-\u003eRenamedSource-\u003e[Name]-\u003eRefactGhc RenamedSource",
          "package": "HaRe",
          "partial": "Items To Import",
          "signature": "ModuleName-\u003eRenamedSource-\u003e[Name]-\u003eRefactGhc RenamedSource",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TypeUtils.html#v:addItemsToImport"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.TypeUtils",
          "name": "addParamsToDecls",
          "package": "HaRe",
          "signature": "[LHsBind Name]-\u003e Name-\u003e [Name]-\u003e Bool-\u003e RefactGhc [LHsBind Name]",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils TypeUtils",
          "module": "Language.Haskell.Refact.Utils.TypeUtils",
          "name": "addParamsToDecls",
          "normalized": "[LHsBind Name]-\u003eName-\u003e[Name]-\u003eBool-\u003eRefactGhc[LHsBind Name]",
          "package": "HaRe",
          "partial": "Params To Decls",
          "signature": "[LHsBind Name]-\u003eName-\u003e[Name]-\u003eBool-\u003eRefactGhc[LHsBind Name]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TypeUtils.html#v:addParamsToDecls"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind all Located Names in the given Syntax phrase.\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils.TypeUtils",
          "name": "allNames",
          "package": "HaRe",
          "signature": "t-\u003e [Located Name]",
          "type": "function"
        },
        "index": {
          "description": "Find all Located Names in the given Syntax phrase",
          "hierarchy": "Language Haskell Refact Utils TypeUtils",
          "module": "Language.Haskell.Refact.Utils.TypeUtils",
          "name": "allNames",
          "normalized": "a-\u003e[Located Name]",
          "package": "HaRe",
          "partial": "Names",
          "signature": "t-\u003e[Located Name]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TypeUtils.html#v:allNames"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck whether the specified identifier is declared in the given syntax phrase t,\n if so, rename the identifier by creating a new name automatically. If the Bool parameter \n is True, the token stream will be modified, otherwise only the AST is modified. \n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils.TypeUtils",
          "name": "autoRenameLocalVar",
          "package": "HaRe",
          "signature": "Bool-\u003e Name-\u003e t-\u003e RefactGhc t",
          "type": "function"
        },
        "index": {
          "description": "Check whether the specified identifier is declared in the given syntax phrase if so rename the identifier by creating new name automatically If the Bool parameter is True the token stream will be modified otherwise only the AST is modified",
          "hierarchy": "Language Haskell Refact Utils TypeUtils",
          "module": "Language.Haskell.Refact.Utils.TypeUtils",
          "name": "autoRenameLocalVar",
          "normalized": "Bool-\u003eName-\u003ea-\u003eRefactGhc a",
          "package": "HaRe",
          "partial": "Rename Local Var",
          "signature": "Bool-\u003eName-\u003et-\u003eRefactGhc t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TypeUtils.html#v:autoRenameLocalVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck if the proposed new name will conflict with an existing export\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils.TypeUtils",
          "name": "causeNameClashInExports",
          "package": "HaRe",
          "signature": "Name-\u003e Name-\u003e ModuleName-\u003e RenamedSource-\u003e Bool",
          "type": "function"
        },
        "index": {
          "description": "Check if the proposed new name will conflict with an existing export",
          "hierarchy": "Language Haskell Refact Utils TypeUtils",
          "module": "Language.Haskell.Refact.Utils.TypeUtils",
          "name": "causeNameClashInExports",
          "normalized": "Name-\u003eName-\u003eModuleName-\u003eRenamedSource-\u003eBool",
          "package": "HaRe",
          "partial": "Name Clash In Exports",
          "signature": "Name-\u003eName-\u003eModuleName-\u003eRenamedSource-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TypeUtils.html#v:causeNameClashInExports"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefault expression.\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils.TypeUtils",
          "name": "defaultExp",
          "package": "HaRe",
          "signature": "HsExpP",
          "source": "src/Language-Haskell-Refact-Utils-TypeUtils.html#defaultExp",
          "type": "function"
        },
        "index": {
          "description": "Default expression",
          "hierarchy": "Language Haskell Refact Utils TypeUtils",
          "module": "Language.Haskell.Refact.Utils.TypeUtils",
          "name": "defaultExp",
          "package": "HaRe",
          "partial": "Exp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TypeUtils.html#v:defaultExp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.TypeUtils",
          "name": "defaultName",
          "package": "HaRe",
          "signature": "Name",
          "source": "src/Language-Haskell-Refact-Utils-TypeUtils.html#defaultName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils TypeUtils",
          "module": "Language.Haskell.Refact.Utils.TypeUtils",
          "name": "defaultName",
          "package": "HaRe",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TypeUtils.html#v:defaultName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.TypeUtils",
          "name": "defaultPN",
          "package": "HaRe",
          "signature": "PName",
          "source": "src/Language-Haskell-Refact-Utils-TypeUtils.html#defaultPN",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils TypeUtils",
          "module": "Language.Haskell.Refact.Utils.TypeUtils",
          "name": "defaultPN",
          "package": "HaRe",
          "partial": "PN",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TypeUtils.html#v:defaultPN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the identifier's defining location.\n defineLoc::PNT-\u003eSrcLoc\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils.TypeUtils",
          "name": "defineLoc",
          "package": "HaRe",
          "signature": "Located Name -\u003e SrcLoc",
          "source": "src/Language-Haskell-Refact-Utils-TypeUtils.html#defineLoc",
          "type": "function"
        },
        "index": {
          "description": "Return the identifier defining location defineLoc PNT SrcLoc",
          "hierarchy": "Language Haskell Refact Utils TypeUtils",
          "module": "Language.Haskell.Refact.Utils.TypeUtils",
          "name": "defineLoc",
          "normalized": "Located Name-\u003eSrcLoc",
          "package": "HaRe",
          "partial": "Loc",
          "signature": "Located Name-\u003eSrcLoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TypeUtils.html#v:defineLoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the list of identifiers (in PName format) defined by a function/pattern binding.\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils.TypeUtils",
          "name": "definedPNs",
          "package": "HaRe",
          "signature": "LHsBind Name -\u003e [Name]",
          "source": "src/Language-Haskell-Refact-Utils-TypeUtils.html#definedPNs",
          "type": "function"
        },
        "index": {
          "description": "Return the list of identifiers in PName format defined by function pattern binding",
          "hierarchy": "Language Haskell Refact Utils TypeUtils",
          "module": "Language.Haskell.Refact.Utils.TypeUtils",
          "name": "definedPNs",
          "normalized": "LHsBind Name-\u003e[Name]",
          "package": "HaRe",
          "partial": "PNs",
          "signature": "LHsBind Name-\u003e[Name]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TypeUtils.html#v:definedPNs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn True if the function/pattern binding defines the\n specified identifier.\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils.TypeUtils",
          "name": "defines",
          "package": "HaRe",
          "signature": "Name -\u003e LHsBind Name -\u003e Bool",
          "source": "src/Language-Haskell-Refact-Utils-TypeUtils.html#defines",
          "type": "function"
        },
        "index": {
          "description": "Return True if the function pattern binding defines the specified identifier",
          "hierarchy": "Language Haskell Refact Utils TypeUtils",
          "module": "Language.Haskell.Refact.Utils.TypeUtils",
          "name": "defines",
          "normalized": "Name-\u003eLHsBind Name-\u003eBool",
          "package": "HaRe",
          "signature": "Name-\u003eLHsBind Name-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TypeUtils.html#v:defines"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.TypeUtils",
          "name": "definesP",
          "package": "HaRe",
          "signature": "PName -\u003e HsDeclP -\u003e Bool",
          "source": "src/Language-Haskell-Refact-Utils-TypeUtils.html#definesP",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils TypeUtils",
          "module": "Language.Haskell.Refact.Utils.TypeUtils",
          "name": "definesP",
          "normalized": "PName-\u003eHsDeclP-\u003eBool",
          "package": "HaRe",
          "signature": "PName-\u003eHsDeclP-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TypeUtils.html#v:definesP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn True if the declaration defines the type signature of the\n specified identifier.\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils.TypeUtils",
          "name": "definesTypeSig",
          "package": "HaRe",
          "signature": "Name -\u003e LSig Name -\u003e Bool",
          "source": "src/Language-Haskell-Refact-Utils-TypeUtils.html#definesTypeSig",
          "type": "function"
        },
        "index": {
          "description": "Return True if the declaration defines the type signature of the specified identifier",
          "hierarchy": "Language Haskell Refact Utils TypeUtils",
          "module": "Language.Haskell.Refact.Utils.TypeUtils",
          "name": "definesTypeSig",
          "normalized": "Name-\u003eLSig Name-\u003eBool",
          "package": "HaRe",
          "partial": "Type Sig",
          "signature": "Name-\u003eLSig Name-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TypeUtils.html#v:definesTypeSig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind those declarations(function/pattern binding) which define\n the specified GHC.Names. incTypeSig indicates whether the\n corresponding type signature will be included.\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils.TypeUtils",
          "name": "definingDeclsNames",
          "package": "HaRe",
          "signature": "[Name]-\u003e [LHsBind Name]-\u003e Bool-\u003e Bool-\u003e [LHsBind Name]",
          "type": "function"
        },
        "index": {
          "description": "Find those declarations function pattern binding which define the specified GHC.Names incTypeSig indicates whether the corresponding type signature will be included",
          "hierarchy": "Language Haskell Refact Utils TypeUtils",
          "module": "Language.Haskell.Refact.Utils.TypeUtils",
          "name": "definingDeclsNames",
          "normalized": "[Name]-\u003e[LHsBind Name]-\u003eBool-\u003eBool-\u003e[LHsBind Name]",
          "package": "HaRe",
          "partial": "Decls Names",
          "signature": "[Name]-\u003e[LHsBind Name]-\u003eBool-\u003eBool-\u003e[LHsBind Name]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TypeUtils.html#v:definingDeclsNames"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind those declarations(function/pattern binding) which define\n the specified GHC.Names. incTypeSig indicates whether the\n corresponding type signature will be included.\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils.TypeUtils",
          "name": "definingDeclsNames'",
          "package": "HaRe",
          "signature": "[Name]-\u003e t-\u003e [LHsBind Name]",
          "type": "function"
        },
        "index": {
          "description": "Find those declarations function pattern binding which define the specified GHC.Names incTypeSig indicates whether the corresponding type signature will be included",
          "hierarchy": "Language Haskell Refact Utils TypeUtils",
          "module": "Language.Haskell.Refact.Utils.TypeUtils",
          "name": "definingDeclsNames'",
          "normalized": "[Name]-\u003ea-\u003e[LHsBind Name]",
          "package": "HaRe",
          "partial": "Decls Names'",
          "signature": "[Name]-\u003et-\u003e[LHsBind Name]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TypeUtils.html#v:definingDeclsNames-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind those type signatures for the specified GHC.Names.\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils.TypeUtils",
          "name": "definingSigsNames",
          "package": "HaRe",
          "signature": "[Name]-\u003e t-\u003e [LSig Name]",
          "type": "function"
        },
        "index": {
          "description": "Find those type signatures for the specified GHC.Names",
          "hierarchy": "Language Haskell Refact Utils TypeUtils",
          "module": "Language.Haskell.Refact.Utils.TypeUtils",
          "name": "definingSigsNames",
          "normalized": "[Name]-\u003ea-\u003e[LSig Name]",
          "package": "HaRe",
          "partial": "Sigs Names",
          "signature": "[Name]-\u003et-\u003e[LSig Name]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TypeUtils.html#v:definingSigsNames"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemove those specified items from the entity list in the import declaration.\n\u003c/p\u003e\u003cp\u003eRemove the specified entities from the module's exports. The entities can be specified in either of two formats:\n i.e. either specify the module names and identifier names to be removed, so just given the exact AST for these entities.\n\u003c/p\u003e\u003cp\u003eDuplicate a function/pattern binding declaration under a new name\n right after the original one. Also updates the token stream.\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils.TypeUtils",
          "name": "duplicateDecl",
          "package": "HaRe",
          "signature": "[LHsBind Name]-\u003e t-\u003e Name-\u003e Name-\u003e RefactGhc [LHsBind Name]",
          "type": "function"
        },
        "index": {
          "description": "Remove those specified items from the entity list in the import declaration Remove the specified entities from the module exports The entities can be specified in either of two formats i.e either specify the module names and identifier names to be removed so just given the exact AST for these entities Duplicate function pattern binding declaration under new name right after the original one Also updates the token stream",
          "hierarchy": "Language Haskell Refact Utils TypeUtils",
          "module": "Language.Haskell.Refact.Utils.TypeUtils",
          "name": "duplicateDecl",
          "normalized": "[LHsBind Name]-\u003ea-\u003eName-\u003eName-\u003eRefactGhc[LHsBind Name]",
          "package": "HaRe",
          "partial": "Decl",
          "signature": "[LHsBind Name]-\u003et-\u003eName-\u003eName-\u003eRefactGhc[LHsBind Name]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TypeUtils.html#v:duplicateDecl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf an expression consists of only one identifier then return this\n identifier in the GHC.Name format, otherwise return the default Name\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils.TypeUtils",
          "name": "expToName",
          "package": "HaRe",
          "signature": "Located (HsExpr Name) -\u003e Name",
          "source": "src/Language-Haskell-Refact-Utils-TypeUtils.html#expToName",
          "type": "function"
        },
        "index": {
          "description": "If an expression consists of only one identifier then return this identifier in the GHC.Name format otherwise return the default Name",
          "hierarchy": "Language Haskell Refact Utils TypeUtils",
          "module": "Language.Haskell.Refact.Utils.TypeUtils",
          "name": "expToName",
          "normalized": "Located(HsExpr Name)-\u003eName",
          "package": "HaRe",
          "partial": "To Name",
          "signature": "Located(HsExpr Name)-\u003eName",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TypeUtils.html#v:expToName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind all occurrences with location of the given name\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils.TypeUtils",
          "name": "findAllNameOccurences",
          "package": "HaRe",
          "signature": "Name -\u003e t -\u003e [Located Name]",
          "source": "src/Language-Haskell-Refact-Utils-TypeUtils.html#findAllNameOccurences",
          "type": "function"
        },
        "index": {
          "description": "Find all occurrences with location of the given name",
          "hierarchy": "Language Haskell Refact Utils TypeUtils",
          "module": "Language.Haskell.Refact.Utils.TypeUtils",
          "name": "findAllNameOccurences",
          "normalized": "Name-\u003ea-\u003e[Located Name]",
          "package": "HaRe",
          "partial": "All Name Occurences",
          "signature": "Name-\u003et-\u003e[Located Name]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TypeUtils.html#v:findAllNameOccurences"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns True is a syntax phrase, say a, is part of another\n syntax phrase, say b.\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils.TypeUtils",
          "name": "findEntity",
          "package": "HaRe",
          "signature": "a -\u003e b -\u003e Bool",
          "source": "src/Language-Haskell-Refact-Utils-TypeUtils.html#findEntity",
          "type": "function"
        },
        "index": {
          "description": "Returns True is syntax phrase say is part of another syntax phrase say",
          "hierarchy": "Language Haskell Refact Utils TypeUtils",
          "module": "Language.Haskell.Refact.Utils.TypeUtils",
          "name": "findEntity",
          "normalized": "a-\u003eb-\u003eBool",
          "package": "HaRe",
          "partial": "Entity",
          "signature": "a-\u003eb-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TypeUtils.html#v:findEntity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.TypeUtils",
          "name": "findEntity'",
          "package": "HaRe",
          "signature": "a -\u003e b -\u003e Maybe (SimpPos, SimpPos)",
          "source": "src/Language-Haskell-Refact-Utils-TypeUtils.html#findEntity%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils TypeUtils",
          "module": "Language.Haskell.Refact.Utils.TypeUtils",
          "name": "findEntity'",
          "normalized": "a-\u003eb-\u003eMaybe(SimpPos,SimpPos)",
          "package": "HaRe",
          "partial": "Entity'",
          "signature": "a-\u003eb-\u003eMaybe(SimpPos,SimpPos)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TypeUtils.html#v:findEntity-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn True if the identifier occurs in the given syntax phrase.\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils.TypeUtils",
          "name": "findPN",
          "package": "HaRe",
          "signature": "Name -\u003e t -\u003e Bool",
          "source": "src/Language-Haskell-Refact-Utils-TypeUtils.html#findPN",
          "type": "function"
        },
        "index": {
          "description": "Return True if the identifier occurs in the given syntax phrase",
          "hierarchy": "Language Haskell Refact Utils TypeUtils",
          "module": "Language.Haskell.Refact.Utils.TypeUtils",
          "name": "findPN",
          "normalized": "Name-\u003ea-\u003eBool",
          "package": "HaRe",
          "partial": "PN",
          "signature": "Name-\u003et-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TypeUtils.html#v:findPN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn True if the identifier occurs in the given syntax phrase.\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils.TypeUtils",
          "name": "findPNT",
          "package": "HaRe",
          "signature": "Located Name -\u003e t -\u003e Bool",
          "source": "src/Language-Haskell-Refact-Utils-TypeUtils.html#findPNT",
          "type": "function"
        },
        "index": {
          "description": "Return True if the identifier occurs in the given syntax phrase",
          "hierarchy": "Language Haskell Refact Utils TypeUtils",
          "module": "Language.Haskell.Refact.Utils.TypeUtils",
          "name": "findPNT",
          "normalized": "Located Name-\u003ea-\u003eBool",
          "package": "HaRe",
          "partial": "PNT",
          "signature": "Located Name-\u003et-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TypeUtils.html#v:findPNT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn True if any of the specified PNames ocuur in the given syntax phrase.\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils.TypeUtils",
          "name": "findPNs",
          "package": "HaRe",
          "signature": "[Name] -\u003e t -\u003e Bool",
          "source": "src/Language-Haskell-Refact-Utils-TypeUtils.html#findPNs",
          "type": "function"
        },
        "index": {
          "description": "Return True if any of the specified PNames ocuur in the given syntax phrase",
          "hierarchy": "Language Haskell Refact Utils TypeUtils",
          "module": "Language.Haskell.Refact.Utils.TypeUtils",
          "name": "findPNs",
          "normalized": "[Name]-\u003ea-\u003eBool",
          "package": "HaRe",
          "partial": "PNs",
          "signature": "[Name]-\u003et-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TypeUtils.html#v:findPNs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.TypeUtils",
          "name": "getDeclAndToks",
          "package": "HaRe",
          "signature": "Name -\u003e Bool -\u003e [PosToken] -\u003e t -\u003e ([LHsBind Name], [PosToken])",
          "source": "src/Language-Haskell-Refact-Utils-TypeUtils.html#getDeclAndToks",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils TypeUtils",
          "module": "Language.Haskell.Refact.Utils.TypeUtils",
          "name": "getDeclAndToks",
          "normalized": "Name-\u003eBool-\u003e[PosToken]-\u003ea-\u003e([LHsBind Name],[PosToken])",
          "package": "HaRe",
          "partial": "Decl And Toks",
          "signature": "Name-\u003eBool-\u003e[PosToken]-\u003et-\u003e([LHsBind Name],[PosToken])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TypeUtils.html#v:getDeclAndToks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.TypeUtils",
          "name": "getDeclaredVars",
          "package": "HaRe",
          "signature": "[LHsBind Name] -\u003e [Name]",
          "source": "src/Language-Haskell-Refact-Utils-TypeUtils.html#getDeclaredVars",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils TypeUtils",
          "module": "Language.Haskell.Refact.Utils.TypeUtils",
          "name": "getDeclaredVars",
          "normalized": "[LHsBind Name]-\u003e[Name]",
          "package": "HaRe",
          "partial": "Declared Vars",
          "signature": "[LHsBind Name]-\u003e[Name]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TypeUtils.html#v:getDeclaredVars"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.TypeUtils",
          "name": "getFreeVars",
          "package": "HaRe",
          "signature": "[LHsBind Name] -\u003e [Name]",
          "source": "src/Language-Haskell-Refact-Utils-TypeUtils.html#getFreeVars",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils TypeUtils",
          "module": "Language.Haskell.Refact.Utils.TypeUtils",
          "name": "getFreeVars",
          "normalized": "[LHsBind Name]-\u003e[Name]",
          "package": "HaRe",
          "partial": "Free Vars",
          "signature": "[LHsBind Name]-\u003e[Name]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TypeUtils.html#v:getFreeVars"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExperiment with GHC fvs stuff\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils.TypeUtils",
          "name": "getFvs",
          "package": "HaRe",
          "signature": "[LHsBind Name] -\u003e [([Name], NameSet)]",
          "source": "src/Language-Haskell-Refact-Utils-TypeUtils.html#getFvs",
          "type": "function"
        },
        "index": {
          "description": "Experiment with GHC fvs stuff",
          "hierarchy": "Language Haskell Refact Utils TypeUtils",
          "module": "Language.Haskell.Refact.Utils.TypeUtils",
          "name": "getFvs",
          "normalized": "[LHsBind Name]-\u003e[([Name],NameSet)]",
          "package": "HaRe",
          "partial": "Fvs",
          "signature": "[LHsBind Name]-\u003e[([Name],NameSet)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TypeUtils.html#v:getFvs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.TypeUtils",
          "name": "getModule",
          "package": "HaRe",
          "signature": "RefactGhc Module",
          "source": "src/Language-Haskell-Refact-Utils-TypeUtils.html#getModule",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils TypeUtils",
          "module": "Language.Haskell.Refact.Utils.TypeUtils",
          "name": "getModule",
          "package": "HaRe",
          "partial": "Module",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TypeUtils.html#v:getModule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind the identifier with the given name. This looks through the\n given syntax phrase for the first GHC.Name which matches. Because\n it is Renamed source, the GHC.Name will include its defining\n location. Returns Nothing if the name is not found.\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils.TypeUtils",
          "name": "getName",
          "package": "HaRe",
          "signature": "String-\u003e t-\u003e Maybe Name",
          "type": "function"
        },
        "index": {
          "description": "Find the identifier with the given name This looks through the given syntax phrase for the first GHC.Name which matches Because it is Renamed source the GHC.Name will include its defining location Returns Nothing if the name is not found",
          "hierarchy": "Language Haskell Refact Utils TypeUtils",
          "module": "Language.Haskell.Refact.Utils.TypeUtils",
          "name": "getName",
          "normalized": "String-\u003ea-\u003eMaybe Name",
          "package": "HaRe",
          "partial": "Name",
          "signature": "String-\u003et-\u003eMaybe Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TypeUtils.html#v:getName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the signature and tokens for a declaration\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils.TypeUtils",
          "name": "getSigAndToks",
          "package": "HaRe",
          "signature": "Name -\u003e t -\u003e [PosToken] -\u003e Maybe (LSig Name, [PosToken])",
          "source": "src/Language-Haskell-Refact-Utils-TypeUtils.html#getSigAndToks",
          "type": "function"
        },
        "index": {
          "description": "Get the signature and tokens for declaration",
          "hierarchy": "Language Haskell Refact Utils TypeUtils",
          "module": "Language.Haskell.Refact.Utils.TypeUtils",
          "name": "getSigAndToks",
          "normalized": "Name-\u003ea-\u003e[PosToken]-\u003eMaybe(LSig Name,[PosToken])",
          "package": "HaRe",
          "partial": "Sig And Toks",
          "signature": "Name-\u003et-\u003e[PosToken]-\u003eMaybe(LSig Name,[PosToken])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TypeUtils.html#v:getSigAndToks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.TypeUtils",
          "name": "getToksForDecl",
          "package": "HaRe",
          "signature": "t -\u003e [PosToken] -\u003e [PosToken]",
          "source": "src/Language-Haskell-Refact-Utils-TypeUtils.html#getToksForDecl",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils TypeUtils",
          "module": "Language.Haskell.Refact.Utils.TypeUtils",
          "name": "getToksForDecl",
          "normalized": "a-\u003e[PosToken]-\u003e[PosToken]",
          "package": "HaRe",
          "partial": "Toks For Decl",
          "signature": "t-\u003e[PosToken]-\u003e[PosToken]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TypeUtils.html#v:getToksForDecl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.TypeUtils",
          "name": "ghcToPN",
          "package": "HaRe",
          "signature": "RdrName -\u003e PName",
          "source": "src/Language-Haskell-Refact-Utils-TypeUtils.html#ghcToPN",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils TypeUtils",
          "module": "Language.Haskell.Refact.Utils.TypeUtils",
          "name": "ghcToPN",
          "normalized": "RdrName-\u003ePName",
          "package": "HaRe",
          "partial": "To PN",
          "signature": "RdrName-\u003ePName",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TypeUtils.html#v:ghcToPN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.TypeUtils",
          "name": "hsBinds",
          "package": "HaRe",
          "signature": "t -\u003e [LHsBind Name]",
          "source": "src/Language-Haskell-Refact-Utils-TypeUtils.html#hsBinds",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils TypeUtils",
          "module": "Language.Haskell.Refact.Utils.TypeUtils",
          "name": "hsBinds",
          "normalized": "a-\u003e[LHsBind Name]",
          "package": "HaRe",
          "partial": "Binds",
          "signature": "t-\u003e[LHsBind Name]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TypeUtils.html#v:hsBinds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe same as \u003ccode\u003e\u003ca\u003ehsFDsFromInside\u003c/a\u003e\u003c/code\u003e except that the returned variables\n are in the String format\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils.TypeUtils",
          "name": "hsFDNamesFromInside",
          "package": "HaRe",
          "signature": "t -\u003e RefactGhc ([String], [String])",
          "source": "src/Language-Haskell-Refact-Utils-TypeUtils.html#hsFDNamesFromInside",
          "type": "function"
        },
        "index": {
          "description": "The same as hsFDsFromInside except that the returned variables are in the String format",
          "hierarchy": "Language Haskell Refact Utils TypeUtils",
          "module": "Language.Haskell.Refact.Utils.TypeUtils",
          "name": "hsFDNamesFromInside",
          "normalized": "a-\u003eRefactGhc([String],[String])",
          "package": "HaRe",
          "partial": "FDNames From Inside",
          "signature": "t-\u003eRefactGhc([String],[String])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TypeUtils.html#v:hsFDNamesFromInside"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ehsFDsFromInside\u003c/a\u003e\u003c/code\u003e is different from \u003ccode\u003e\u003ca\u003ehsFreeAndDeclaredPNs\u003c/a\u003e\u003c/code\u003e in\n that: given an syntax phrase t, \u003ccode\u003e\u003ca\u003ehsFDsFromInside\u003c/a\u003e\u003c/code\u003e returns not only\n the declared variables that are visible from outside of t, but also\n those declared variables that are visible to the main expression\n inside t.\n NOTE: Expects to be given RenamedSource\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils.TypeUtils",
          "name": "hsFDsFromInside",
          "package": "HaRe",
          "signature": "t -\u003e ([Name], [Name])",
          "source": "src/Language-Haskell-Refact-Utils-TypeUtils.html#hsFDsFromInside",
          "type": "function"
        },
        "index": {
          "description": "hsFDsFromInside is different from hsFreeAndDeclaredPNs in that given an syntax phrase hsFDsFromInside returns not only the declared variables that are visible from outside of but also those declared variables that are visible to the main expression inside NOTE Expects to be given RenamedSource",
          "hierarchy": "Language Haskell Refact Utils TypeUtils",
          "module": "Language.Haskell.Refact.Utils.TypeUtils",
          "name": "hsFDsFromInside",
          "normalized": "a-\u003e([Name],[Name])",
          "package": "HaRe",
          "partial": "FDs From Inside",
          "signature": "t-\u003e([Name],[Name])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TypeUtils.html#v:hsFDsFromInside"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe same as \u003ccode\u003e\u003ca\u003ehsFreeAndDeclaredPNs\u003c/a\u003e\u003c/code\u003e except that the returned\n variables are in the String format.\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils.TypeUtils",
          "name": "hsFreeAndDeclaredNames",
          "package": "HaRe",
          "signature": "t -\u003e ([String], [String])",
          "source": "src/Language-Haskell-Refact-Utils-TypeUtils.html#hsFreeAndDeclaredNames",
          "type": "function"
        },
        "index": {
          "description": "The same as hsFreeAndDeclaredPNs except that the returned variables are in the String format",
          "hierarchy": "Language Haskell Refact Utils TypeUtils",
          "module": "Language.Haskell.Refact.Utils.TypeUtils",
          "name": "hsFreeAndDeclaredNames",
          "normalized": "a-\u003e([String],[String])",
          "package": "HaRe",
          "partial": "Free And Declared Names",
          "signature": "t-\u003e([String],[String])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TypeUtils.html#v:hsFreeAndDeclaredNames"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCollect the free and declared variables (in the GHC.Name format)\n in a given syntax phrase t. In the result, the first list contains\n the free variables, and the second list contains the declared\n variables.\n Expects RenamedSource\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils.TypeUtils",
          "name": "hsFreeAndDeclaredPNs",
          "package": "HaRe",
          "signature": "t -\u003e ([Name], [Name])",
          "source": "src/Language-Haskell-Refact-Utils-TypeUtils.html#hsFreeAndDeclaredPNs",
          "type": "function"
        },
        "index": {
          "description": "Collect the free and declared variables in the GHC.Name format in given syntax phrase In the result the first list contains the free variables and the second list contains the declared variables Expects RenamedSource",
          "hierarchy": "Language Haskell Refact Utils TypeUtils",
          "module": "Language.Haskell.Refact.Utils.TypeUtils",
          "name": "hsFreeAndDeclaredPNs",
          "normalized": "a-\u003e([Name],[Name])",
          "package": "HaRe",
          "partial": "Free And Declared PNs",
          "signature": "t-\u003e([Name],[Name])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TypeUtils.html#v:hsFreeAndDeclaredPNs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCollect the identifiers (in PName format) in a given syntax phrase.\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils.TypeUtils",
          "name": "hsPNs",
          "package": "HaRe",
          "signature": "t -\u003e [PName]",
          "source": "src/Language-Haskell-Refact-Utils-TypeUtils.html#hsPNs",
          "type": "function"
        },
        "index": {
          "description": "Collect the identifiers in PName format in given syntax phrase",
          "hierarchy": "Language Haskell Refact Utils TypeUtils",
          "module": "Language.Haskell.Refact.Utils.TypeUtils",
          "name": "hsPNs",
          "normalized": "a-\u003e[PName]",
          "package": "HaRe",
          "partial": "PNs",
          "signature": "t-\u003e[PName]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TypeUtils.html#v:hsPNs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the binds that are directly enclosed in the\n given syntax phrase.\n hsValBinds :: t -\u003e [GHC.LHsBind GHC.Name]\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils.TypeUtils",
          "name": "hsValBinds",
          "package": "HaRe",
          "signature": "t -\u003e HsValBinds Name",
          "source": "src/Language-Haskell-Refact-Utils-TypeUtils.html#hsValBinds",
          "type": "method"
        },
        "index": {
          "description": "Return the binds that are directly enclosed in the given syntax phrase hsValBinds GHC.LHsBind GHC.Name",
          "hierarchy": "Language Haskell Refact Utils TypeUtils",
          "module": "Language.Haskell.Refact.Utils.TypeUtils",
          "name": "hsValBinds",
          "normalized": "a-\u003eHsValBinds Name",
          "package": "HaRe",
          "partial": "Val Binds",
          "signature": "t-\u003eHsValBinds Name",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TypeUtils.html#v:hsValBinds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003ehsVisiblePNs\u003c/a\u003e\u003c/code\u003e except that the returned identifiers are\n in String format.\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils.TypeUtils",
          "name": "hsVisibleNames",
          "package": "HaRe",
          "signature": "t1 -\u003e t2 -\u003e [String]",
          "source": "src/Language-Haskell-Refact-Utils-TypeUtils.html#hsVisibleNames",
          "type": "function"
        },
        "index": {
          "description": "Same as hsVisiblePNs except that the returned identifiers are in String format",
          "hierarchy": "Language Haskell Refact Utils TypeUtils",
          "module": "Language.Haskell.Refact.Utils.TypeUtils",
          "name": "hsVisibleNames",
          "normalized": "a-\u003ea-\u003e[String]",
          "package": "HaRe",
          "partial": "Visible Names",
          "signature": "t-\u003et-\u003e[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TypeUtils.html#v:hsVisibleNames"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven syntax phrases e and t, if e occurs in t, then return those\n variables which are declared in t and accessible to e, otherwise\n return [].\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils.TypeUtils",
          "name": "hsVisiblePNs",
          "package": "HaRe",
          "signature": "e -\u003e t -\u003e [Name]",
          "source": "src/Language-Haskell-Refact-Utils-TypeUtils.html#hsVisiblePNs",
          "type": "function"
        },
        "index": {
          "description": "Given syntax phrases and if occurs in then return those variables which are declared in and accessible to otherwise return",
          "hierarchy": "Language Haskell Refact Utils TypeUtils",
          "module": "Language.Haskell.Refact.Utils.TypeUtils",
          "name": "hsVisiblePNs",
          "normalized": "a-\u003eb-\u003e[Name]",
          "package": "HaRe",
          "partial": "Visible PNs",
          "signature": "e-\u003et-\u003e[Name]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TypeUtils.html#v:hsVisiblePNs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProcess the inscope relation returned from the parsing and module\n analysis pass, and return a list of four-element tuples. Each tuple\n contains an identifier name, the identifier's namespace info, the\n identifier's defining module name and its qualifier name.\n\u003c/p\u003e\u003cp\u003eThe same identifier may have multiple entries in the result because\n it may have different qualifiers. This makes it easier to decide\n whether the identifier can be used unqualifiedly by just checking\n whether there is an entry for it with the qualifier field being\n Nothing.\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils.TypeUtils",
          "name": "inScopeInfo",
          "package": "HaRe",
          "signature": "InScopes-\u003e [(String, NameSpace, ModuleName, Maybe ModuleName)]",
          "type": "function"
        },
        "index": {
          "description": "Process the inscope relation returned from the parsing and module analysis pass and return list of four-element tuples Each tuple contains an identifier name the identifier namespace info the identifier defining module name and its qualifier name The same identifier may have multiple entries in the result because it may have different qualifiers This makes it easier to decide whether the identifier can be used unqualifiedly by just checking whether there is an entry for it with the qualifier field being Nothing",
          "hierarchy": "Language Haskell Refact Utils TypeUtils",
          "module": "Language.Haskell.Refact.Utils.TypeUtils",
          "name": "inScopeInfo",
          "normalized": "InScopes-\u003e[(String,NameSpace,ModuleName,Maybe ModuleName)]",
          "package": "HaRe",
          "partial": "Scope Info",
          "signature": "InScopes-\u003e[(String,NameSpace,ModuleName,Maybe ModuleName)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TypeUtils.html#v:inScopeInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.TypeUtils",
          "name": "inScopeNames",
          "package": "HaRe",
          "signature": "String-\u003e RefactGhc [Name]",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils TypeUtils",
          "module": "Language.Haskell.Refact.Utils.TypeUtils",
          "name": "inScopeNames",
          "normalized": "String-\u003eRefactGhc[Name]",
          "package": "HaRe",
          "partial": "Scope Names",
          "signature": "String-\u003eRefactGhc[Name]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TypeUtils.html#v:inScopeNames"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTrue if the name is a field name\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils.TypeUtils",
          "name": "isClassName",
          "package": "HaRe",
          "signature": "Name -\u003e Bool",
          "source": "src/Language-Haskell-Refact-Utils-TypeUtils.html#isClassName",
          "type": "function"
        },
        "index": {
          "description": "True if the name is field name",
          "hierarchy": "Language Haskell Refact Utils TypeUtils",
          "module": "Language.Haskell.Refact.Utils.TypeUtils",
          "name": "isClassName",
          "normalized": "Name-\u003eBool",
          "package": "HaRe",
          "partial": "Class Name",
          "signature": "Name-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TypeUtils.html#v:isClassName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn True if a declaration is a pattern binding but not a simple one.\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils.TypeUtils",
          "name": "isComplexPatBind",
          "package": "HaRe",
          "signature": "LHsBind Name -\u003e Bool",
          "source": "src/Language-Haskell-Refact-Utils-TypeUtils.html#isComplexPatBind",
          "type": "function"
        },
        "index": {
          "description": "Return True if declaration is pattern binding but not simple one",
          "hierarchy": "Language Haskell Refact Utils TypeUtils",
          "module": "Language.Haskell.Refact.Utils.TypeUtils",
          "name": "isComplexPatBind",
          "normalized": "LHsBind Name-\u003eBool",
          "package": "HaRe",
          "partial": "Complex Pat Bind",
          "signature": "LHsBind Name-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TypeUtils.html#v:isComplexPatBind"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn True if a string is a lexically valid constructor name.\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils.TypeUtils",
          "name": "isConId",
          "package": "HaRe",
          "signature": "String -\u003e Bool",
          "source": "src/Language-Haskell-Refact-Utils-TypeUtils.html#isConId",
          "type": "function"
        },
        "index": {
          "description": "Return True if string is lexically valid constructor name",
          "hierarchy": "Language Haskell Refact Utils TypeUtils",
          "module": "Language.Haskell.Refact.Utils.TypeUtils",
          "name": "isConId",
          "normalized": "String-\u003eBool",
          "package": "HaRe",
          "partial": "Con Id",
          "signature": "String-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TypeUtils.html#v:isConId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.TypeUtils",
          "name": "isDeclaredIn",
          "package": "HaRe",
          "signature": "Name -\u003e t -\u003e Bool",
          "source": "src/Language-Haskell-Refact-Utils-TypeUtils.html#isDeclaredIn",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils TypeUtils",
          "module": "Language.Haskell.Refact.Utils.TypeUtils",
          "name": "isDeclaredIn",
          "normalized": "Name-\u003ea-\u003eBool",
          "package": "HaRe",
          "partial": "Declared In",
          "signature": "Name-\u003et-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TypeUtils.html#v:isDeclaredIn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn True if an identifier is explicitly exported by the module.\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils.TypeUtils",
          "name": "isExplicitlyExported",
          "package": "HaRe",
          "signature": "Name-\u003e RenamedSource-\u003e Bool",
          "type": "function"
        },
        "index": {
          "description": "Return True if an identifier is explicitly exported by the module",
          "hierarchy": "Language Haskell Refact Utils TypeUtils",
          "module": "Language.Haskell.Refact.Utils.TypeUtils",
          "name": "isExplicitlyExported",
          "normalized": "Name-\u003eRenamedSource-\u003eBool",
          "package": "HaRe",
          "partial": "Explicitly Exported",
          "signature": "Name-\u003eRenamedSource-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TypeUtils.html#v:isExplicitlyExported"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn True if an identifier is exported by the module currently\n being refactored.\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils.TypeUtils",
          "name": "isExported",
          "package": "HaRe",
          "signature": "Name -\u003e RefactGhc Bool",
          "source": "src/Language-Haskell-Refact-Utils-TypeUtils.html#isExported",
          "type": "function"
        },
        "index": {
          "description": "Return True if an identifier is exported by the module currently being refactored",
          "hierarchy": "Language Haskell Refact Utils TypeUtils",
          "module": "Language.Haskell.Refact.Utils.TypeUtils",
          "name": "isExported",
          "normalized": "Name-\u003eRefactGhc Bool",
          "package": "HaRe",
          "partial": "Exported",
          "signature": "Name-\u003eRefactGhc Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TypeUtils.html#v:isExported"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTrue if the name is a field name\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils.TypeUtils",
          "name": "isFieldName",
          "package": "HaRe",
          "signature": "Name -\u003e Bool",
          "source": "src/Language-Haskell-Refact-Utils-TypeUtils.html#isFieldName",
          "type": "function"
        },
        "index": {
          "description": "True if the name is field name",
          "hierarchy": "Language Haskell Refact Utils TypeUtils",
          "module": "Language.Haskell.Refact.Utils.TypeUtils",
          "name": "isFieldName",
          "normalized": "Name-\u003eBool",
          "package": "HaRe",
          "partial": "Field Name",
          "signature": "Name-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TypeUtils.html#v:isFieldName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn True if a declaration is a function definition.\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils.TypeUtils",
          "name": "isFunBindP",
          "package": "HaRe",
          "signature": "HsDeclP -\u003e Bool",
          "source": "src/Language-Haskell-Refact-Utils-TypeUtils.html#isFunBindP",
          "type": "function"
        },
        "index": {
          "description": "Return True if declaration is function definition",
          "hierarchy": "Language Haskell Refact Utils TypeUtils",
          "module": "Language.Haskell.Refact.Utils.TypeUtils",
          "name": "isFunBindP",
          "normalized": "HsDeclP-\u003eBool",
          "package": "HaRe",
          "partial": "Fun Bind",
          "signature": "HsDeclP-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TypeUtils.html#v:isFunBindP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.TypeUtils",
          "name": "isFunBindR",
          "package": "HaRe",
          "signature": "LHsBind t -\u003e Bool",
          "source": "src/Language-Haskell-Refact-Utils-TypeUtils.html#isFunBindR",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils TypeUtils",
          "module": "Language.Haskell.Refact.Utils.TypeUtils",
          "name": "isFunBindR",
          "normalized": "LHsBind a-\u003eBool",
          "package": "HaRe",
          "partial": "Fun Bind",
          "signature": "LHsBind t-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TypeUtils.html#v:isFunBindR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn True if a declaration is a function/pattern definition.\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils.TypeUtils",
          "name": "isFunOrPatBindP",
          "package": "HaRe",
          "signature": "HsDeclP -\u003e Bool",
          "source": "src/Language-Haskell-Refact-Utils-TypeUtils.html#isFunOrPatBindP",
          "type": "function"
        },
        "index": {
          "description": "Return True if declaration is function pattern definition",
          "hierarchy": "Language Haskell Refact Utils TypeUtils",
          "module": "Language.Haskell.Refact.Utils.TypeUtils",
          "name": "isFunOrPatBindP",
          "normalized": "HsDeclP-\u003eBool",
          "package": "HaRe",
          "partial": "Fun Or Pat Bind",
          "signature": "HsDeclP-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TypeUtils.html#v:isFunOrPatBindP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn True if a declaration is a function/pattern definition.\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils.TypeUtils",
          "name": "isFunOrPatBindR",
          "package": "HaRe",
          "signature": "LHsBind t -\u003e Bool",
          "source": "src/Language-Haskell-Refact-Utils-TypeUtils.html#isFunOrPatBindR",
          "type": "function"
        },
        "index": {
          "description": "Return True if declaration is function pattern definition",
          "hierarchy": "Language Haskell Refact Utils TypeUtils",
          "module": "Language.Haskell.Refact.Utils.TypeUtils",
          "name": "isFunOrPatBindR",
          "normalized": "LHsBind a-\u003eBool",
          "package": "HaRe",
          "partial": "Fun Or Pat Bind",
          "signature": "LHsBind t-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TypeUtils.html#v:isFunOrPatBindR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn True if a PName is a function/pattern name defined in t.\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils.TypeUtils",
          "name": "isFunOrPatName",
          "package": "HaRe",
          "signature": "Name -\u003e t -\u003e Bool",
          "source": "src/Language-Haskell-Refact-Utils-TypeUtils.html#isFunOrPatName",
          "type": "function"
        },
        "index": {
          "description": "Return True if PName is function pattern name defined in",
          "hierarchy": "Language Haskell Refact Utils TypeUtils",
          "module": "Language.Haskell.Refact.Utils.TypeUtils",
          "name": "isFunOrPatName",
          "normalized": "Name-\u003ea-\u003eBool",
          "package": "HaRe",
          "partial": "Fun Or Pat Name",
          "signature": "Name-\u003et-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TypeUtils.html#v:isFunOrPatName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn True if the identifier is inscope and can be used without\n a qualifier.\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils.TypeUtils",
          "name": "isInScopeAndUnqualified",
          "package": "HaRe",
          "signature": "String-\u003e InScopes-\u003e Bool",
          "type": "function"
        },
        "index": {
          "description": "Return True if the identifier is inscope and can be used without qualifier",
          "hierarchy": "Language Haskell Refact Utils TypeUtils",
          "module": "Language.Haskell.Refact.Utils.TypeUtils",
          "name": "isInScopeAndUnqualified",
          "normalized": "String-\u003eInScopes-\u003eBool",
          "package": "HaRe",
          "partial": "In Scope And Unqualified",
          "signature": "String-\u003eInScopes-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TypeUtils.html#v:isInScopeAndUnqualified"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn True if the identifier is inscope and can be used without\n a qualifier. The identifier name string may have a qualifier\n already\n NOTE: may require qualification based on name clash with an\n existing identifier.\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils.TypeUtils",
          "name": "isInScopeAndUnqualifiedGhc",
          "package": "HaRe",
          "signature": "String-\u003e Maybe Name-\u003e RefactGhc Bool",
          "type": "function"
        },
        "index": {
          "description": "Return True if the identifier is inscope and can be used without qualifier The identifier name string may have qualifier already NOTE may require qualification based on name clash with an existing identifier",
          "hierarchy": "Language Haskell Refact Utils TypeUtils",
          "module": "Language.Haskell.Refact.Utils.TypeUtils",
          "name": "isInScopeAndUnqualifiedGhc",
          "normalized": "String-\u003eMaybe Name-\u003eRefactGhc Bool",
          "package": "HaRe",
          "partial": "In Scope And Unqualified Ghc",
          "signature": "String-\u003eMaybe Name-\u003eRefactGhc Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TypeUtils.html#v:isInScopeAndUnqualifiedGhc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTrue if the name is a class instance\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils.TypeUtils",
          "name": "isInstanceName",
          "package": "HaRe",
          "signature": "Name -\u003e Bool",
          "source": "src/Language-Haskell-Refact-Utils-TypeUtils.html#isInstanceName",
          "type": "function"
        },
        "index": {
          "description": "True if the name is class instance",
          "hierarchy": "Language Haskell Refact Utils TypeUtils",
          "module": "Language.Haskell.Refact.Utils.TypeUtils",
          "name": "isInstanceName",
          "normalized": "Name-\u003eBool",
          "package": "HaRe",
          "partial": "Instance Name",
          "signature": "Name-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TypeUtils.html#v:isInstanceName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn True if a PName is a local PName.\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils.TypeUtils",
          "name": "isLocalPN",
          "package": "HaRe",
          "signature": "Name -\u003e Bool",
          "source": "src/Language-Haskell-Refact-Utils-TypeUtils.html#isLocalPN",
          "type": "function"
        },
        "index": {
          "description": "Return True if PName is local PName",
          "hierarchy": "Language Haskell Refact Utils TypeUtils",
          "module": "Language.Haskell.Refact.Utils.TypeUtils",
          "name": "isLocalPN",
          "normalized": "Name-\u003eBool",
          "package": "HaRe",
          "partial": "Local PN",
          "signature": "Name-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TypeUtils.html#v:isLocalPN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.TypeUtils",
          "name": "isMainModule",
          "package": "HaRe",
          "signature": "Module -\u003e Bool",
          "source": "src/Language-Haskell-Refact-Utils-TypeUtils.html#isMainModule",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils TypeUtils",
          "module": "Language.Haskell.Refact.Utils.TypeUtils",
          "name": "isMainModule",
          "normalized": "Module-\u003eBool",
          "package": "HaRe",
          "partial": "Main Module",
          "signature": "Module-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TypeUtils.html#v:isMainModule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn True if a string is a lexically valid operator name.\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils.TypeUtils",
          "name": "isOperator",
          "package": "HaRe",
          "signature": "String -\u003e Bool",
          "source": "src/Language-Haskell-Refact-Utils-TypeUtils.html#isOperator",
          "type": "function"
        },
        "index": {
          "description": "Return True if string is lexically valid operator name",
          "hierarchy": "Language Haskell Refact Utils TypeUtils",
          "module": "Language.Haskell.Refact.Utils.TypeUtils",
          "name": "isOperator",
          "normalized": "String-\u003eBool",
          "package": "HaRe",
          "partial": "Operator",
          "signature": "String-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TypeUtils.html#v:isOperator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns True if a declaration is a pattern binding.\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils.TypeUtils",
          "name": "isPatBindP",
          "package": "HaRe",
          "signature": "HsDeclP -\u003e Bool",
          "source": "src/Language-Haskell-Refact-Utils-TypeUtils.html#isPatBindP",
          "type": "function"
        },
        "index": {
          "description": "Returns True if declaration is pattern binding",
          "hierarchy": "Language Haskell Refact Utils TypeUtils",
          "module": "Language.Haskell.Refact.Utils.TypeUtils",
          "name": "isPatBindP",
          "normalized": "HsDeclP-\u003eBool",
          "package": "HaRe",
          "partial": "Pat Bind",
          "signature": "HsDeclP-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TypeUtils.html#v:isPatBindP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.TypeUtils",
          "name": "isPatBindR",
          "package": "HaRe",
          "signature": "LHsBind t -\u003e Bool",
          "source": "src/Language-Haskell-Refact-Utils-TypeUtils.html#isPatBindR",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils TypeUtils",
          "module": "Language.Haskell.Refact.Utils.TypeUtils",
          "name": "isPatBindR",
          "normalized": "LHsBind a-\u003eBool",
          "package": "HaRe",
          "partial": "Pat Bind",
          "signature": "LHsBind t-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TypeUtils.html#v:isPatBindR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn True if a PName is a qualified PName.\n  AZ:NOTE: this tests the use instance, the underlying name may be qualified.\n           e.g. used name is zip, GHC.List.zip\n     NOTE2: not sure if this gives a meaningful result for a GHC.Name\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils.TypeUtils",
          "name": "isQualifiedPN",
          "package": "HaRe",
          "signature": "Name -\u003e RefactGhc Bool",
          "source": "src/Language-Haskell-Refact-Utils-TypeUtils.html#isQualifiedPN",
          "type": "function"
        },
        "index": {
          "description": "Return True if PName is qualified PName AZ NOTE this tests the use instance the underlying name may be qualified e.g used name is zip GHC.List.zip NOTE2 not sure if this gives meaningful result for GHC.Name",
          "hierarchy": "Language Haskell Refact Utils TypeUtils",
          "module": "Language.Haskell.Refact.Utils.TypeUtils",
          "name": "isQualifiedPN",
          "normalized": "Name-\u003eRefactGhc Bool",
          "package": "HaRe",
          "partial": "Qualified PN",
          "signature": "Name-\u003eRefactGhc Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TypeUtils.html#v:isQualifiedPN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn True if a declaration is a pattern binding which only\n defines a variable value.\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils.TypeUtils",
          "name": "isSimplePatBind",
          "package": "HaRe",
          "signature": "LHsBind t -\u003e Bool",
          "source": "src/Language-Haskell-Refact-Utils-TypeUtils.html#isSimplePatBind",
          "type": "function"
        },
        "index": {
          "description": "Return True if declaration is pattern binding which only defines variable value",
          "hierarchy": "Language Haskell Refact Utils TypeUtils",
          "module": "Language.Haskell.Refact.Utils.TypeUtils",
          "name": "isSimplePatBind",
          "normalized": "LHsBind a-\u003eBool",
          "package": "HaRe",
          "partial": "Simple Pat Bind",
          "signature": "LHsBind t-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TypeUtils.html#v:isSimplePatBind"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn True if a PName is a toplevel PName.\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils.TypeUtils",
          "name": "isTopLevelPN",
          "package": "HaRe",
          "signature": "Name -\u003e RefactGhc Bool",
          "source": "src/Language-Haskell-Refact-Utils-TypeUtils.html#isTopLevelPN",
          "type": "function"
        },
        "index": {
          "description": "Return True if PName is toplevel PName",
          "hierarchy": "Language Haskell Refact Utils TypeUtils",
          "module": "Language.Haskell.Refact.Utils.TypeUtils",
          "name": "isTopLevelPN",
          "normalized": "Name-\u003eRefactGhc Bool",
          "package": "HaRe",
          "partial": "Top Level PN",
          "signature": "Name-\u003eRefactGhc Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TypeUtils.html#v:isTopLevelPN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn True if a declaration is a type signature declaration.\n isTypeSig ::HsDeclP-\u003eBool\n isTypeSig (TiDecorate.Dec (HsTypeSig loc is c tp))=True\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils.TypeUtils",
          "name": "isTypeSig",
          "package": "HaRe",
          "signature": "Located (Sig a) -\u003e Bool",
          "source": "src/Language-Haskell-Refact-Utils-TypeUtils.html#isTypeSig",
          "type": "function"
        },
        "index": {
          "description": "Return True if declaration is type signature declaration isTypeSig HsDeclP Bool isTypeSig TiDecorate.Dec HsTypeSig loc is tp True",
          "hierarchy": "Language Haskell Refact Utils TypeUtils",
          "module": "Language.Haskell.Refact.Utils.TypeUtils",
          "name": "isTypeSig",
          "normalized": "Located(Sig a)-\u003eBool",
          "package": "HaRe",
          "partial": "Type Sig",
          "signature": "Located(Sig a)-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TypeUtils.html#v:isTypeSig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn True if the identifier is used in the RHS if a\n function/pattern binding.\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils.TypeUtils",
          "name": "isUsedInRhs",
          "package": "HaRe",
          "signature": "Located Name -\u003e t -\u003e Bool",
          "source": "src/Language-Haskell-Refact-Utils-TypeUtils.html#isUsedInRhs",
          "type": "function"
        },
        "index": {
          "description": "Return True if the identifier is used in the RHS if function pattern binding",
          "hierarchy": "Language Haskell Refact Utils TypeUtils",
          "module": "Language.Haskell.Refact.Utils.TypeUtils",
          "name": "isUsedInRhs",
          "normalized": "Located Name-\u003ea-\u003eBool",
          "package": "HaRe",
          "partial": "Used In Rhs",
          "signature": "Located Name-\u003et-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TypeUtils.html#v:isUsedInRhs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn True if a string is a lexically  valid variable name.\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils.TypeUtils",
          "name": "isVarId",
          "package": "HaRe",
          "signature": "String -\u003e Bool",
          "source": "src/Language-Haskell-Refact-Utils-TypeUtils.html#isVarId",
          "type": "function"
        },
        "index": {
          "description": "Return True if string is lexically valid variable name",
          "hierarchy": "Language Haskell Refact Utils TypeUtils",
          "module": "Language.Haskell.Refact.Utils.TypeUtils",
          "name": "isVarId",
          "normalized": "String-\u003eBool",
          "package": "HaRe",
          "partial": "Var Id",
          "signature": "String-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TypeUtils.html#v:isVarId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.TypeUtils",
          "name": "lghcToPN",
          "package": "HaRe",
          "signature": "Located RdrName -\u003e PName",
          "source": "src/Language-Haskell-Refact-Utils-TypeUtils.html#lghcToPN",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils TypeUtils",
          "module": "Language.Haskell.Refact.Utils.TypeUtils",
          "name": "lghcToPN",
          "normalized": "Located RdrName-\u003ePName",
          "package": "HaRe",
          "partial": "To PN",
          "signature": "Located RdrName-\u003ePName",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TypeUtils.html#v:lghcToPN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven the syntax phrase, find the largest-leftmost expression\n contained in the region specified by the start and end position, if\n found.\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils.TypeUtils",
          "name": "locToExp",
          "package": "HaRe",
          "signature": "SimpPos-\u003e SimpPos-\u003e t-\u003e Maybe (Located (HsExpr n))",
          "type": "function"
        },
        "index": {
          "description": "Given the syntax phrase find the largest-leftmost expression contained in the region specified by the start and end position if found",
          "hierarchy": "Language Haskell Refact Utils TypeUtils",
          "module": "Language.Haskell.Refact.Utils.TypeUtils",
          "name": "locToExp",
          "normalized": "SimpPos-\u003eSimpPos-\u003ea-\u003eMaybe(Located(HsExpr b))",
          "package": "HaRe",
          "partial": "To Exp",
          "signature": "SimpPos-\u003eSimpPos-\u003et-\u003eMaybe(Located(HsExpr n))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TypeUtils.html#v:locToExp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind the identifier(in GHC.Name format) whose start position is\n (row,col) in the file specified by the fileName, and returns\n \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if such an identifier does not exist.\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils.TypeUtils",
          "name": "locToName",
          "package": "HaRe",
          "signature": "SimpPos-\u003e t-\u003e Maybe (Located Name)",
          "type": "function"
        },
        "index": {
          "description": "Find the identifier in GHC.Name format whose start position is row col in the file specified by the fileName and returns Nothing if such an identifier does not exist",
          "hierarchy": "Language Haskell Refact Utils TypeUtils",
          "module": "Language.Haskell.Refact.Utils.TypeUtils",
          "name": "locToName",
          "normalized": "SimpPos-\u003ea-\u003eMaybe(Located Name)",
          "package": "HaRe",
          "partial": "To Name",
          "signature": "SimpPos-\u003et-\u003eMaybe(Located Name)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TypeUtils.html#v:locToName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind the identifier(in GHC.RdrName format) whose start position is\n (row,col) in the file specified by the fileName, and returns\n \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if such an identifier does not exist.\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils.TypeUtils",
          "name": "locToRdrName",
          "package": "HaRe",
          "signature": "SimpPos-\u003e t-\u003e Maybe (Located RdrName)",
          "type": "function"
        },
        "index": {
          "description": "Find the identifier in GHC.RdrName format whose start position is row col in the file specified by the fileName and returns Nothing if such an identifier does not exist",
          "hierarchy": "Language Haskell Refact Utils TypeUtils",
          "module": "Language.Haskell.Refact.Utils.TypeUtils",
          "name": "locToRdrName",
          "normalized": "SimpPos-\u003ea-\u003eMaybe(Located RdrName)",
          "package": "HaRe",
          "partial": "To Rdr Name",
          "signature": "SimpPos-\u003et-\u003eMaybe(Located RdrName)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TypeUtils.html#v:locToRdrName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake a new GHC.Name, using the Unique Int sequence stored in the\n RefactState.\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils.TypeUtils",
          "name": "mkNewGhcName",
          "package": "HaRe",
          "signature": "Maybe Module -\u003e String -\u003e RefactGhc Name",
          "source": "src/Language-Haskell-Refact-Utils-TypeUtils.html#mkNewGhcName",
          "type": "function"
        },
        "index": {
          "description": "Make new GHC.Name using the Unique Int sequence stored in the RefactState",
          "hierarchy": "Language Haskell Refact Utils TypeUtils",
          "module": "Language.Haskell.Refact.Utils.TypeUtils",
          "name": "mkNewGhcName",
          "normalized": "Maybe Module-\u003eString-\u003eRefactGhc Name",
          "package": "HaRe",
          "partial": "New Ghc Name",
          "signature": "Maybe Module-\u003eString-\u003eRefactGhc Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TypeUtils.html#v:mkNewGhcName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new name base on the old name. Suppose the old name is \u003ccode\u003ef\u003c/code\u003e, then\n  the new name would be like \u003ccode\u003ef_i\u003c/code\u003e where \u003ccode\u003ei\u003c/code\u003e is an integer.\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils.TypeUtils",
          "name": "mkNewName",
          "package": "HaRe",
          "signature": "String-\u003e [String]-\u003e Int-\u003e String",
          "type": "function"
        },
        "index": {
          "description": "Create new name base on the old name Suppose the old name is then the new name would be like where is an integer",
          "hierarchy": "Language Haskell Refact Utils TypeUtils",
          "module": "Language.Haskell.Refact.Utils.TypeUtils",
          "name": "mkNewName",
          "normalized": "String-\u003e[String]-\u003eInt-\u003eString",
          "package": "HaRe",
          "partial": "New Name",
          "signature": "String-\u003e[String]-\u003eInt-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TypeUtils.html#v:mkNewName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.TypeUtils",
          "name": "mkNewToplevelName",
          "package": "HaRe",
          "signature": "Module -\u003e String -\u003e SrcSpan -\u003e RefactGhc Name",
          "source": "src/Language-Haskell-Refact-Utils-TypeUtils.html#mkNewToplevelName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils TypeUtils",
          "module": "Language.Haskell.Refact.Utils.TypeUtils",
          "name": "mkNewToplevelName",
          "normalized": "Module-\u003eString-\u003eSrcSpan-\u003eRefactGhc Name",
          "package": "HaRe",
          "partial": "New Toplevel Name",
          "signature": "Module-\u003eString-\u003eSrcSpan-\u003eRefactGhc Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TypeUtils.html#v:mkNewToplevelName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.TypeUtils",
          "name": "mkRdrName",
          "package": "HaRe",
          "signature": "String -\u003e RdrName",
          "source": "src/Language-Haskell-Refact-Utils-TypeUtils.html#mkRdrName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils TypeUtils",
          "module": "Language.Haskell.Refact.Utils.TypeUtils",
          "name": "mkRdrName",
          "normalized": "String-\u003eRdrName",
          "package": "HaRe",
          "partial": "Rdr Name",
          "signature": "String-\u003eRdrName",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TypeUtils.html#v:mkRdrName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn True if the current module is exported either by default\n or by specifying the module name in the export.\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils.TypeUtils",
          "name": "modIsExported",
          "package": "HaRe",
          "signature": "ModuleName-\u003e RenamedSource-\u003e Bool",
          "type": "function"
        },
        "index": {
          "description": "Return True if the current module is exported either by default or by specifying the module name in the export",
          "hierarchy": "Language Haskell Refact Utils TypeUtils",
          "module": "Language.Haskell.Refact.Utils.TypeUtils",
          "name": "modIsExported",
          "normalized": "ModuleName-\u003eRenamedSource-\u003eBool",
          "package": "HaRe",
          "partial": "Is Exported",
          "signature": "ModuleName-\u003eRenamedSource-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TypeUtils.html#v:modIsExported"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.TypeUtils",
          "name": "nameToString",
          "package": "HaRe",
          "signature": "Name -\u003e String",
          "source": "src/Language-Haskell-Refact-Utils-TypeUtils.html#nameToString",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils TypeUtils",
          "module": "Language.Haskell.Refact.Utils.TypeUtils",
          "name": "nameToString",
          "normalized": "Name-\u003eString",
          "package": "HaRe",
          "partial": "To String",
          "signature": "Name-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TypeUtils.html#v:nameToString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new name token. If \u003ccode\u003euseQual\u003c/code\u003e then use the qualified\n name, if it exists.\n The end position is not changed, so the eventual realignment can\n know what the difference in length in the token is\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils.TypeUtils",
          "name": "newNameTok",
          "package": "HaRe",
          "signature": "Bool -\u003e SrcSpan -\u003e Name -\u003e PosToken",
          "source": "src/Language-Haskell-Refact-Utils-TypeUtils.html#newNameTok",
          "type": "function"
        },
        "index": {
          "description": "Create new name token If useQual then use the qualified name if it exists The end position is not changed so the eventual realignment can know what the difference in length in the token is",
          "hierarchy": "Language Haskell Refact Utils TypeUtils",
          "module": "Language.Haskell.Refact.Utils.TypeUtils",
          "name": "newNameTok",
          "normalized": "Bool-\u003eSrcSpan-\u003eName-\u003ePosToken",
          "package": "HaRe",
          "partial": "Name Tok",
          "signature": "Bool-\u003eSrcSpan-\u003eName-\u003ePosToken",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TypeUtils.html#v:newNameTok"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompose a pattern from a pName.\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils.TypeUtils",
          "name": "pNtoPat",
          "package": "HaRe",
          "signature": "Name -\u003e Pat Name",
          "source": "src/Language-Haskell-Refact-Utils-TypeUtils.html#pNtoPat",
          "type": "function"
        },
        "index": {
          "description": "Compose pattern from pName",
          "hierarchy": "Language Haskell Refact Utils TypeUtils",
          "module": "Language.Haskell.Refact.Utils.TypeUtils",
          "name": "pNtoPat",
          "normalized": "Name-\u003ePat Name",
          "package": "HaRe",
          "partial": "Nto Pat",
          "signature": "Name-\u003ePat Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TypeUtils.html#v:pNtoPat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf a pattern consists of only one identifier then return this\n identifier, otherwise return Nothing\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils.TypeUtils",
          "name": "patToPNT",
          "package": "HaRe",
          "signature": "LPat Name -\u003e Maybe Name",
          "source": "src/Language-Haskell-Refact-Utils-TypeUtils.html#patToPNT",
          "type": "function"
        },
        "index": {
          "description": "If pattern consists of only one identifier then return this identifier otherwise return Nothing",
          "hierarchy": "Language Haskell Refact Utils TypeUtils",
          "module": "Language.Haskell.Refact.Utils.TypeUtils",
          "name": "patToPNT",
          "normalized": "LPat Name-\u003eMaybe Name",
          "package": "HaRe",
          "partial": "To PNT",
          "signature": "LPat Name-\u003eMaybe Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TypeUtils.html#v:patToPNT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReplace all occurences of a top level GHC.Name with a qualified version.\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils.TypeUtils",
          "name": "qualifyToplevelName",
          "package": "HaRe",
          "signature": "Name -\u003e RefactGhc ()",
          "source": "src/Language-Haskell-Refact-Utils-TypeUtils.html#qualifyToplevelName",
          "type": "function"
        },
        "index": {
          "description": "Replace all occurences of top level GHC.Name with qualified version",
          "hierarchy": "Language Haskell Refact Utils TypeUtils",
          "module": "Language.Haskell.Refact.Utils.TypeUtils",
          "name": "qualifyToplevelName",
          "normalized": "Name-\u003eRefactGhc()",
          "package": "HaRe",
          "partial": "Toplevel Name",
          "signature": "Name-\u003eRefactGhc()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TypeUtils.html#v:qualifyToplevelName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemove at most \u003ccode\u003eoffset\u003c/code\u003e whitespaces from each line in the tokens\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils.TypeUtils",
          "name": "removeOffset",
          "package": "HaRe",
          "signature": "Int -\u003e [PosToken] -\u003e [PosToken]",
          "source": "src/Language-Haskell-Refact-Utils-TypeUtils.html#removeOffset",
          "type": "function"
        },
        "index": {
          "description": "Remove at most offset whitespaces from each line in the tokens",
          "hierarchy": "Language Haskell Refact Utils TypeUtils",
          "module": "Language.Haskell.Refact.Utils.TypeUtils",
          "name": "removeOffset",
          "normalized": "Int-\u003e[PosToken]-\u003e[PosToken]",
          "package": "HaRe",
          "partial": "Offset",
          "signature": "Int-\u003e[PosToken]-\u003e[PosToken]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TypeUtils.html#v:removeOffset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNormalise a set of tokens to start at the offset of the first one\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils.TypeUtils",
          "name": "removeToksOffset",
          "package": "HaRe",
          "signature": "[PosToken] -\u003e [PosToken]",
          "source": "src/Language-Haskell-Refact-Utils-TypeUtils.html#removeToksOffset",
          "type": "function"
        },
        "index": {
          "description": "Normalise set of tokens to start at the offset of the first one",
          "hierarchy": "Language Haskell Refact Utils TypeUtils",
          "module": "Language.Haskell.Refact.Utils.TypeUtils",
          "name": "removeToksOffset",
          "normalized": "[PosToken]-\u003e[PosToken]",
          "package": "HaRe",
          "partial": "Toks Offset",
          "signature": "[PosToken]-\u003e[PosToken]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TypeUtils.html#v:removeToksOffset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRename each occurrences of the identifier in the given syntax\n phrase with the new name. If the Bool parameter is True, then\n modify both the AST and the token stream, otherwise only modify the\n AST.\n TODO: the syntax phrase is required to be GHC.Located, not sure how\n to specify this without breaking the everywhereMStaged call\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils.TypeUtils",
          "name": "renamePN",
          "package": "HaRe",
          "signature": "Name-\u003e Name-\u003e Bool-\u003e Bool-\u003e t-\u003e RefactGhc t",
          "type": "function"
        },
        "index": {
          "description": "Rename each occurrences of the identifier in the given syntax phrase with the new name If the Bool parameter is True then modify both the AST and the token stream otherwise only modify the AST TODO the syntax phrase is required to be GHC.Located not sure how to specify this without breaking the everywhereMStaged call",
          "hierarchy": "Language Haskell Refact Utils TypeUtils",
          "module": "Language.Haskell.Refact.Utils.TypeUtils",
          "name": "renamePN",
          "normalized": "Name-\u003eName-\u003eBool-\u003eBool-\u003ea-\u003eRefactGhc a",
          "package": "HaRe",
          "partial": "PN",
          "signature": "Name-\u003eName-\u003eBool-\u003eBool-\u003et-\u003eRefactGhc t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TypeUtils.html#v:renamePN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.TypeUtils",
          "name": "replaceBinds",
          "package": "HaRe",
          "signature": "t -\u003e [LHsBind Name] -\u003e t",
          "source": "src/Language-Haskell-Refact-Utils-TypeUtils.html#replaceBinds",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils TypeUtils",
          "module": "Language.Haskell.Refact.Utils.TypeUtils",
          "name": "replaceBinds",
          "normalized": "a-\u003e[LHsBind Name]-\u003ea",
          "package": "HaRe",
          "partial": "Binds",
          "signature": "t-\u003e[LHsBind Name]-\u003et",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TypeUtils.html#v:replaceBinds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReplace the directly enclosed bind list by the given\n  bind list. Note: This function does not modify the\n  token stream.\n replaceBinds :: t -\u003e [GHC.LHsBind GHC.Name] -\u003e t\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils.TypeUtils",
          "name": "replaceValBinds",
          "package": "HaRe",
          "signature": "t -\u003e HsValBinds Name -\u003e t",
          "source": "src/Language-Haskell-Refact-Utils-TypeUtils.html#replaceValBinds",
          "type": "method"
        },
        "index": {
          "description": "Replace the directly enclosed bind list by the given bind list Note This function does not modify the token stream replaceBinds GHC.LHsBind GHC.Name",
          "hierarchy": "Language Haskell Refact Utils TypeUtils",
          "module": "Language.Haskell.Refact.Utils.TypeUtils",
          "name": "replaceValBinds",
          "normalized": "a-\u003eHsValBinds Name-\u003ea",
          "package": "HaRe",
          "partial": "Val Binds",
          "signature": "t-\u003eHsValBinds Name-\u003et",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TypeUtils.html#v:replaceValBinds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemove the declaration (and the type signature is the second\n parameter is True) that defines the given identifier from the\n declaration list.\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils.TypeUtils",
          "name": "rmDecl",
          "package": "HaRe",
          "signature": "Name-\u003e Bool-\u003e t-\u003e RefactGhc (t, LHsBind Name, Maybe (LSig Name))",
          "type": "function"
        },
        "index": {
          "description": "Remove the declaration and the type signature is the second parameter is True that defines the given identifier from the declaration list",
          "hierarchy": "Language Haskell Refact Utils TypeUtils",
          "module": "Language.Haskell.Refact.Utils.TypeUtils",
          "name": "rmDecl",
          "normalized": "Name-\u003eBool-\u003ea-\u003eRefactGhc(a,LHsBind Name,Maybe(LSig Name))",
          "package": "HaRe",
          "partial": "Decl",
          "signature": "Name-\u003eBool-\u003et-\u003eRefactGhc(t,LHsBind Name,Maybe(LSig Name))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TypeUtils.html#v:rmDecl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemove the qualifier from the given identifiers in the given syntax phrase.\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils.TypeUtils",
          "name": "rmQualifier",
          "package": "HaRe",
          "signature": "[Name]-\u003e t-\u003e RefactGhc t",
          "type": "function"
        },
        "index": {
          "description": "Remove the qualifier from the given identifiers in the given syntax phrase",
          "hierarchy": "Language Haskell Refact Utils TypeUtils",
          "module": "Language.Haskell.Refact.Utils.TypeUtils",
          "name": "rmQualifier",
          "normalized": "[Name]-\u003ea-\u003eRefactGhc a",
          "package": "HaRe",
          "partial": "Qualifier",
          "signature": "[Name]-\u003et-\u003eRefactGhc t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TypeUtils.html#v:rmQualifier"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemove the type signature that defines the given identifier's\n type from the declaration list.\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils.TypeUtils",
          "name": "rmTypeSig",
          "package": "HaRe",
          "signature": "Name-\u003e t-\u003e RefactGhc (t, Maybe (LSig Name))",
          "type": "function"
        },
        "index": {
          "description": "Remove the type signature that defines the given identifier type from the declaration list",
          "hierarchy": "Language Haskell Refact Utils TypeUtils",
          "module": "Language.Haskell.Refact.Utils.TypeUtils",
          "name": "rmTypeSig",
          "normalized": "Name-\u003ea-\u003eRefactGhc(a,Maybe(LSig Name))",
          "package": "HaRe",
          "partial": "Type Sig",
          "signature": "Name-\u003et-\u003eRefactGhc(t,Maybe(LSig Name))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TypeUtils.html#v:rmTypeSig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemove multiple type signatures\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils.TypeUtils",
          "name": "rmTypeSigs",
          "package": "HaRe",
          "signature": "[Name]-\u003e t-\u003e RefactGhc (t, [LSig Name])",
          "type": "function"
        },
        "index": {
          "description": "Remove multiple type signatures",
          "hierarchy": "Language Haskell Refact Utils TypeUtils",
          "module": "Language.Haskell.Refact.Utils.TypeUtils",
          "name": "rmTypeSigs",
          "normalized": "[Name]-\u003ea-\u003eRefactGhc(a,[LSig Name])",
          "package": "HaRe",
          "partial": "Type Sigs",
          "signature": "[Name]-\u003et-\u003eRefactGhc(t,[LSig Name])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TypeUtils.html#v:rmTypeSigs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils.TypeUtils",
          "name": "sameBind",
          "package": "HaRe",
          "signature": "LHsBind Name -\u003e LHsBind Name -\u003e Bool",
          "source": "src/Language-Haskell-Refact-Utils-TypeUtils.html#sameBind",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils TypeUtils",
          "module": "Language.Haskell.Refact.Utils.TypeUtils",
          "name": "sameBind",
          "normalized": "LHsBind Name-\u003eLHsBind Name-\u003eBool",
          "package": "HaRe",
          "partial": "Bind",
          "signature": "LHsBind Name-\u003eLHsBind Name-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TypeUtils.html#v:sameBind"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn True if syntax phrases t1 and t2 refer to the same one.\n\u003c/p\u003e",
          "module": "[\"Language.Haskell.Refact.Utils.TypeUtils\",\"Language.Haskell.Refact.Utils\"]",
          "name": "sameOccurrence",
          "package": "HaRe",
          "signature": "Located t -\u003e Located t -\u003e Bool",
          "source": "src/Language-Haskell-Refact-Utils-TypeUtils.html#sameOccurrence",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TypeUtils.html#v:sameOccurrence\",\"http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils.html#v:sameOccurrence\"]"
        },
        "index": {
          "description": "Return True if syntax phrases t1 and t2 refer to the same one",
          "hierarchy": "Language Haskell Refact Utils TypeUtils",
          "module": "Language.Haskell.Refact.Utils.TypeUtils",
          "name": "sameOccurrence",
          "normalized": "Located a-\u003eLocated a-\u003eBool",
          "package": "HaRe",
          "partial": "Occurrence",
          "signature": "Located t-\u003eLocated t-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TypeUtils.html#v:sameOccurrence"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShow a list of entities, the parameter f is a function that\n specifies how to format an entity.\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils.TypeUtils",
          "name": "showEntities",
          "package": "HaRe",
          "signature": "(t -\u003e String) -\u003e [t] -\u003e String",
          "source": "src/Language-Haskell-Refact-Utils-TypeUtils.html#showEntities",
          "type": "function"
        },
        "index": {
          "description": "Show list of entities the parameter is function that specifies how to format an entity",
          "hierarchy": "Language Haskell Refact Utils TypeUtils",
          "module": "Language.Haskell.Refact.Utils.TypeUtils",
          "name": "showEntities",
          "normalized": "(a-\u003eString)-\u003e[a]-\u003eString",
          "package": "HaRe",
          "partial": "Entities",
          "signature": "(t-\u003eString)-\u003e[t]-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TypeUtils.html#v:showEntities"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShow a PName in a format like: \u003ccode\u003epn\u003c/code\u003e(at row:r, col: c).\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils.TypeUtils",
          "name": "showPNwithLoc",
          "package": "HaRe",
          "signature": "Located Name -\u003e String",
          "source": "src/Language-Haskell-Refact-Utils-TypeUtils.html#showPNwithLoc",
          "type": "function"
        },
        "index": {
          "description": "Show PName in format like pn at row col",
          "hierarchy": "Language Haskell Refact Utils TypeUtils",
          "module": "Language.Haskell.Refact.Utils.TypeUtils",
          "name": "showPNwithLoc",
          "normalized": "Located Name-\u003eString",
          "package": "HaRe",
          "partial": "PNwith Loc",
          "signature": "Located Name-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TypeUtils.html#v:showPNwithLoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTake a list of strings and return a list with the longest prefix\n of spaces removed\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils.TypeUtils",
          "name": "stripLeadingSpaces",
          "package": "HaRe",
          "signature": "[String] -\u003e [String]",
          "source": "src/Language-Haskell-Refact-Utils-TypeUtils.html#stripLeadingSpaces",
          "type": "function"
        },
        "index": {
          "description": "Take list of strings and return list with the longest prefix of spaces removed",
          "hierarchy": "Language Haskell Refact Utils TypeUtils",
          "module": "Language.Haskell.Refact.Utils.TypeUtils",
          "name": "stripLeadingSpaces",
          "normalized": "[String]-\u003e[String]",
          "package": "HaRe",
          "partial": "Leading Spaces",
          "signature": "[String]-\u003e[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TypeUtils.html#v:stripLeadingSpaces"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the identifier's source location.\n useLoc::PNT-\u003eSrcLoc\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils.TypeUtils",
          "name": "useLoc",
          "package": "HaRe",
          "signature": "Located Name -\u003e SrcLoc",
          "source": "src/Language-Haskell-Refact-Utils-TypeUtils.html#useLoc",
          "type": "function"
        },
        "index": {
          "description": "Return the identifier source location useLoc PNT SrcLoc",
          "hierarchy": "Language Haskell Refact Utils TypeUtils",
          "module": "Language.Haskell.Refact.Utils.TypeUtils",
          "name": "useLoc",
          "normalized": "Located Name-\u003eSrcLoc",
          "package": "HaRe",
          "partial": "Loc",
          "signature": "Located Name-\u003eSrcLoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TypeUtils.html#v:useLoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn True if any of the GHC.Name's appear in the given\n syntax element\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils.TypeUtils",
          "name": "usedByRhs",
          "package": "HaRe",
          "signature": "t -\u003e [Name] -\u003e Bool",
          "source": "src/Language-Haskell-Refact-Utils-TypeUtils.html#usedByRhs",
          "type": "method"
        },
        "index": {
          "description": "Return True if any of the GHC.Name appear in the given syntax element",
          "hierarchy": "Language Haskell Refact Utils TypeUtils",
          "module": "Language.Haskell.Refact.Utils.TypeUtils",
          "name": "usedByRhs",
          "normalized": "a-\u003e[Name]-\u003eBool",
          "package": "HaRe",
          "partial": "By Rhs",
          "signature": "t-\u003e[Name]-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TypeUtils.html#v:usedByRhs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn True if the identifier is unqualifiedly used in the given\n syntax phrase.\n usedWithoutQualR :: GHC.Name -\u003e GHC.ParsedSource -\u003e Bool\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils.TypeUtils",
          "name": "usedWithoutQualR",
          "package": "HaRe",
          "signature": "Name -\u003e t -\u003e Bool",
          "source": "src/Language-Haskell-Refact-Utils-TypeUtils.html#usedWithoutQualR",
          "type": "function"
        },
        "index": {
          "description": "Return True if the identifier is unqualifiedly used in the given syntax phrase usedWithoutQualR GHC.Name GHC.ParsedSource Bool",
          "hierarchy": "Language Haskell Refact Utils TypeUtils",
          "module": "Language.Haskell.Refact.Utils.TypeUtils",
          "name": "usedWithoutQualR",
          "normalized": "Name-\u003ea-\u003eBool",
          "package": "HaRe",
          "partial": "Without Qual",
          "signature": "Name-\u003et-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils-TypeUtils.html#v:usedWithoutQualR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils",
          "name": "Utils",
          "package": "HaRe",
          "source": "src/Language-Haskell-Refact-Utils.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils",
          "module": "Language.Haskell.Refact.Utils",
          "name": "Utils",
          "package": "HaRe",
          "partial": "Utils",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe result of a refactoring is the file, a flag as to whether it\n was modified, the updated token stream, and the updated AST\n type ApplyRefacResult = ((FilePath, Bool), ([Ppr],[PosToken], GHC.RenamedSource))\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils",
          "name": "ApplyRefacResult",
          "package": "HaRe",
          "source": "src/Language-Haskell-Refact-Utils.html#ApplyRefacResult",
          "type": "type"
        },
        "index": {
          "description": "The result of refactoring is the file flag as to whether it was modified the updated token stream and the updated AST type ApplyRefacResult FilePath Bool Ppr PosToken GHC.RenamedSource",
          "hierarchy": "Language Haskell Refact Utils",
          "module": "Language.Haskell.Refact.Utils",
          "name": "ApplyRefacResult",
          "package": "HaRe",
          "partial": "Apply Refac Result",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils.html#t:ApplyRefacResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils",
          "name": "RefacSource",
          "package": "HaRe",
          "source": "src/Language-Haskell-Refact-Utils.html#RefacSource",
          "type": "data"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils",
          "module": "Language.Haskell.Refact.Utils",
          "name": "RefacSource",
          "package": "HaRe",
          "partial": "Refac Source",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils.html#t:RefacSource"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils",
          "name": "RSAlreadyLoaded",
          "package": "HaRe",
          "signature": "RSAlreadyLoaded",
          "source": "src/Language-Haskell-Refact-Utils.html#RefacSource",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils",
          "module": "Language.Haskell.Refact.Utils",
          "name": "RSAlreadyLoaded",
          "package": "HaRe",
          "partial": "RSAlready Loaded",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils.html#v:RSAlreadyLoaded"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils",
          "name": "RSFile",
          "package": "HaRe",
          "signature": "RSFile FilePath",
          "source": "src/Language-Haskell-Refact-Utils.html#RefacSource",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils",
          "module": "Language.Haskell.Refact.Utils",
          "name": "RSFile",
          "package": "HaRe",
          "partial": "RSFile",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils.html#v:RSFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils",
          "name": "RSMod",
          "package": "HaRe",
          "signature": "RSMod ModSummary",
          "source": "src/Language-Haskell-Refact-Utils.html#RefacSource",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils",
          "module": "Language.Haskell.Refact.Utils",
          "name": "RSMod",
          "package": "HaRe",
          "partial": "RSMod",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils.html#v:RSMod"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIn the existing GHC session, put the requested TypeCheckedModule\n into the RefactGhc Monad, after ensuring that its originating\n target is the currently loaded one\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils",
          "name": "activateModule",
          "package": "HaRe",
          "signature": "TargetModule -\u003e RefactGhc ModSummary",
          "source": "src/Language-Haskell-Refact-Utils.html#activateModule",
          "type": "function"
        },
        "index": {
          "description": "In the existing GHC session put the requested TypeCheckedModule into the RefactGhc Monad after ensuring that its originating target is the currently loaded one",
          "hierarchy": "Language Haskell Refact Utils",
          "module": "Language.Haskell.Refact.Utils",
          "name": "activateModule",
          "normalized": "TargetModule-\u003eRefactGhc ModSummary",
          "package": "HaRe",
          "partial": "Module",
          "signature": "TargetModule-\u003eRefactGhc ModSummary",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils.html#v:activateModule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a refactoring (or part of a refactoring) to a single module\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils",
          "name": "applyRefac",
          "package": "HaRe",
          "signature": "RefactGhc a-\u003e RefacSource-\u003e RefactGhc (ApplyRefacResult, a)",
          "type": "function"
        },
        "index": {
          "description": "Apply refactoring or part of refactoring to single module",
          "hierarchy": "Language Haskell Refact Utils",
          "module": "Language.Haskell.Refact.Utils",
          "name": "applyRefac",
          "normalized": "RefactGhc a-\u003eRefacSource-\u003eRefactGhc(ApplyRefacResult,a)",
          "package": "HaRe",
          "partial": "Refac",
          "signature": "RefactGhc a-\u003eRefacSource-\u003eRefactGhc(ApplyRefacResult,a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils.html#v:applyRefac"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the client modules and file names. The client modules of\n module, say m, are those modules which directly or indirectly\n import module m.\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils",
          "name": "clientModsAndFiles",
          "package": "HaRe",
          "signature": "ModuleName -\u003e RefactGhc [([FilePath], ModSummary)]",
          "source": "src/Language-Haskell-Refact-Utils.html#clientModsAndFiles",
          "type": "function"
        },
        "index": {
          "description": "Return the client modules and file names The client modules of module say are those modules which directly or indirectly import module",
          "hierarchy": "Language Haskell Refact Utils",
          "module": "Language.Haskell.Refact.Utils",
          "name": "clientModsAndFiles",
          "normalized": "ModuleName-\u003eRefactGhc[([FilePath],ModSummary)]",
          "package": "HaRe",
          "partial": "Mods And Files",
          "signature": "ModuleName-\u003eRefactGhc[([FilePath],ModSummary)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils.html#v:clientModsAndFiles"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Refact.Utils",
          "name": "fileNameFromModSummary",
          "package": "HaRe",
          "signature": "ModSummary -\u003e FilePath",
          "source": "src/Language-Haskell-Refact-Utils.html#fileNameFromModSummary",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Refact Utils",
          "module": "Language.Haskell.Refact.Utils",
          "name": "fileNameFromModSummary",
          "normalized": "ModSummary-\u003eFilePath",
          "package": "HaRe",
          "partial": "Name From Mod Summary",
          "signature": "ModSummary-\u003eFilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils.html#v:fileNameFromModSummary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFrom file name to module name.\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils",
          "name": "fileNameToModName",
          "package": "HaRe",
          "signature": "FilePath -\u003e RefactGhc ModuleName",
          "source": "src/Language-Haskell-Refact-Utils.html#fileNameToModName",
          "type": "function"
        },
        "index": {
          "description": "From file name to module name",
          "hierarchy": "Language Haskell Refact Utils",
          "module": "Language.Haskell.Refact.Utils",
          "name": "fileNameToModName",
          "normalized": "FilePath-\u003eRefactGhc ModuleName",
          "package": "HaRe",
          "partial": "Name To Mod Name",
          "signature": "FilePath-\u003eRefactGhc ModuleName",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils.html#v:fileNameToModName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIn the existing GHC session, put the requested TypeCheckedModule\n into the RefactGhc monad\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils",
          "name": "getModuleDetails",
          "package": "HaRe",
          "signature": "ModSummary -\u003e RefactGhc ()",
          "source": "src/Language-Haskell-Refact-Utils.html#getModuleDetails",
          "type": "function"
        },
        "index": {
          "description": "In the existing GHC session put the requested TypeCheckedModule into the RefactGhc monad",
          "hierarchy": "Language Haskell Refact Utils",
          "module": "Language.Haskell.Refact.Utils",
          "name": "getModuleDetails",
          "normalized": "ModSummary-\u003eRefactGhc()",
          "package": "HaRe",
          "partial": "Module Details",
          "signature": "ModSummary-\u003eRefactGhc()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils.html#v:getModuleDetails"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOnce the module graph has been loaded, load the given module into\n the RefactGhc monad\n TODO: relax the equality test, if the file is loaded via cabal it\n may have a full filesystem path.\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils",
          "name": "getModuleGhc",
          "package": "HaRe",
          "signature": "FilePath -\u003e RefactGhc ()",
          "source": "src/Language-Haskell-Refact-Utils.html#getModuleGhc",
          "type": "function"
        },
        "index": {
          "description": "Once the module graph has been loaded load the given module into the RefactGhc monad TODO relax the equality test if the file is loaded via cabal it may have full filesystem path",
          "hierarchy": "Language Haskell Refact Utils",
          "module": "Language.Haskell.Refact.Utils",
          "name": "getModuleGhc",
          "normalized": "FilePath-\u003eRefactGhc()",
          "package": "HaRe",
          "partial": "Module Ghc",
          "signature": "FilePath-\u003eRefactGhc()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils.html#v:getModuleGhc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract the module name from the parsed source, if there is one\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils",
          "name": "getModuleName",
          "package": "HaRe",
          "signature": "ParsedSource -\u003e Maybe (ModuleName, String)",
          "source": "src/Language-Haskell-Refact-Utils.html#getModuleName",
          "type": "function"
        },
        "index": {
          "description": "Extract the module name from the parsed source if there is one",
          "hierarchy": "Language Haskell Refact Utils",
          "module": "Language.Haskell.Refact.Utils",
          "name": "getModuleName",
          "normalized": "ParsedSource-\u003eMaybe(ModuleName,String)",
          "package": "HaRe",
          "partial": "Module Name",
          "signature": "ParsedSource-\u003eMaybe(ModuleName,String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils.html#v:getModuleName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a single source file into a GHC session\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils",
          "name": "parseSourceFileGhc",
          "package": "HaRe",
          "signature": "FilePath -\u003e RefactGhc ()",
          "source": "src/Language-Haskell-Refact-Utils.html#parseSourceFileGhc",
          "type": "function"
        },
        "index": {
          "description": "Parse single source file into GHC session",
          "hierarchy": "Language Haskell Refact Utils",
          "module": "Language.Haskell.Refact.Utils",
          "name": "parseSourceFileGhc",
          "normalized": "FilePath-\u003eRefactGhc()",
          "package": "HaRe",
          "partial": "Source File Ghc",
          "signature": "FilePath-\u003eRefactGhc()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils.html#v:parseSourceFileGhc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns True if any of the results has its modified flag set\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils",
          "name": "refactDone",
          "package": "HaRe",
          "signature": "[ApplyRefacResult] -\u003e Bool",
          "source": "src/Language-Haskell-Refact-Utils.html#refactDone",
          "type": "function"
        },
        "index": {
          "description": "Returns True if any of the results has its modified flag set",
          "hierarchy": "Language Haskell Refact Utils",
          "module": "Language.Haskell.Refact.Utils",
          "name": "refactDone",
          "normalized": "[ApplyRefacResult]-\u003eBool",
          "package": "HaRe",
          "partial": "Done",
          "signature": "[ApplyRefacResult]-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils.html#v:refactDone"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eManage a whole refactor session. Initialise the monad, load the\n whole project if required, and then apply the individual\n refactorings, and write out the resulting files.\n\u003c/p\u003e\u003cp\u003eIt is intended that this forms the umbrella function, in which\n applyRefac is called\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils",
          "name": "runRefacSession",
          "package": "HaRe",
          "signature": "RefactSettings-\u003e Cradle-\u003e RefactGhc [ApplyRefacResult]-\u003e IO [FilePath]",
          "type": "function"
        },
        "index": {
          "description": "Manage whole refactor session Initialise the monad load the whole project if required and then apply the individual refactorings and write out the resulting files It is intended that this forms the umbrella function in which applyRefac is called",
          "hierarchy": "Language Haskell Refact Utils",
          "module": "Language.Haskell.Refact.Utils",
          "name": "runRefacSession",
          "normalized": "RefactSettings-\u003eCradle-\u003eRefactGhc[ApplyRefacResult]-\u003eIO[FilePath]",
          "package": "HaRe",
          "partial": "Refac Session",
          "signature": "RefactSettings-\u003eCradle-\u003eRefactGhc[ApplyRefacResult]-\u003eIO[FilePath]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils.html#v:runRefacSession"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the server module and file names. The server modules of\n module, say m, are those modules which are directly or indirectly\n imported by module m. This can only be called in a live GHC session\n TODO: make sure this works with multiple targets. Is that needed? No?\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils",
          "name": "serverModsAndFiles",
          "package": "HaRe",
          "signature": "ModuleName -\u003e m [ModSummary]",
          "source": "src/Language-Haskell-Refact-Utils.html#serverModsAndFiles",
          "type": "function"
        },
        "index": {
          "description": "Return the server module and file names The server modules of module say are those modules which are directly or indirectly imported by module This can only be called in live GHC session TODO make sure this works with multiple targets Is that needed No",
          "hierarchy": "Language Haskell Refact Utils",
          "module": "Language.Haskell.Refact.Utils",
          "name": "serverModsAndFiles",
          "normalized": "ModuleName-\u003ea[ModSummary]",
          "package": "HaRe",
          "partial": "Mods And Files",
          "signature": "ModuleName-\u003em[ModSummary]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils.html#v:serverModsAndFiles"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUpdate the occurrence of one syntax phrase in a given scope by\n another syntax phrase of the same type\n\u003c/p\u003e",
          "module": "Language.Haskell.Refact.Utils",
          "name": "update",
          "package": "HaRe",
          "signature": "t-\u003e t-\u003e t1-\u003e RefactGhc t1",
          "type": "function"
        },
        "index": {
          "description": "Update the occurrence of one syntax phrase in given scope by another syntax phrase of the same type",
          "hierarchy": "Language Haskell Refact Utils",
          "module": "Language.Haskell.Refact.Utils",
          "name": "update",
          "normalized": "a-\u003ea-\u003ea-\u003eRefactGhc a",
          "package": "HaRe",
          "signature": "t-\u003et-\u003et-\u003eRefactGhc t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Language-Haskell-Refact-Utils.html#v:update"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Paths_HaRe",
          "name": "Paths_HaRe",
          "package": "HaRe",
          "source": "src/Paths_HaRe.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Paths_HaRe",
          "module": "Paths_HaRe",
          "name": "Paths_HaRe",
          "package": "HaRe",
          "partial": "Paths Ha Re",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Paths_HaRe.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Paths_HaRe",
          "name": "getBinDir",
          "package": "HaRe",
          "signature": "IO FilePath",
          "source": "src/Paths_HaRe.html#getBinDir",
          "type": "function"
        },
        "index": {
          "hierarchy": "Paths_HaRe",
          "module": "Paths_HaRe",
          "name": "getBinDir",
          "package": "HaRe",
          "partial": "Bin Dir",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Paths_HaRe.html#v:getBinDir"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Paths_HaRe",
          "name": "getDataDir",
          "package": "HaRe",
          "signature": "IO FilePath",
          "source": "src/Paths_HaRe.html#getDataDir",
          "type": "function"
        },
        "index": {
          "hierarchy": "Paths_HaRe",
          "module": "Paths_HaRe",
          "name": "getDataDir",
          "package": "HaRe",
          "partial": "Data Dir",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Paths_HaRe.html#v:getDataDir"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Paths_HaRe",
          "name": "getDataFileName",
          "package": "HaRe",
          "signature": "FilePath -\u003e IO FilePath",
          "source": "src/Paths_HaRe.html#getDataFileName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Paths_HaRe",
          "module": "Paths_HaRe",
          "name": "getDataFileName",
          "normalized": "FilePath-\u003eIO FilePath",
          "package": "HaRe",
          "partial": "Data File Name",
          "signature": "FilePath-\u003eIO FilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Paths_HaRe.html#v:getDataFileName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Paths_HaRe",
          "name": "getLibDir",
          "package": "HaRe",
          "signature": "IO FilePath",
          "source": "src/Paths_HaRe.html#getLibDir",
          "type": "function"
        },
        "index": {
          "hierarchy": "Paths_HaRe",
          "module": "Paths_HaRe",
          "name": "getLibDir",
          "package": "HaRe",
          "partial": "Lib Dir",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Paths_HaRe.html#v:getLibDir"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Paths_HaRe",
          "name": "getLibexecDir",
          "package": "HaRe",
          "signature": "IO FilePath",
          "source": "src/Paths_HaRe.html#getLibexecDir",
          "type": "function"
        },
        "index": {
          "hierarchy": "Paths_HaRe",
          "module": "Paths_HaRe",
          "name": "getLibexecDir",
          "package": "HaRe",
          "partial": "Libexec Dir",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Paths_HaRe.html#v:getLibexecDir"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Paths_HaRe",
          "name": "getSysconfDir",
          "package": "HaRe",
          "signature": "IO FilePath",
          "source": "src/Paths_HaRe.html#getSysconfDir",
          "type": "function"
        },
        "index": {
          "hierarchy": "Paths_HaRe",
          "module": "Paths_HaRe",
          "name": "getSysconfDir",
          "package": "HaRe",
          "partial": "Sysconf Dir",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Paths_HaRe.html#v:getSysconfDir"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Paths_HaRe",
          "name": "version",
          "package": "HaRe",
          "signature": "Version",
          "source": "src/Paths_HaRe.html#version",
          "type": "function"
        },
        "index": {
          "hierarchy": "Paths_HaRe",
          "module": "Paths_HaRe",
          "name": "version",
          "package": "HaRe",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaRe/docs/Paths_HaRe.html#v:version"
      }
    }
  ]
]