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
        "word": "DisTract"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DisTract.Bug.Comment",
          "name": "3AaddComment",
          "package": "DisTract",
          "signature": "Config -\u003e Bug -\u003e Maybe (String, String) -\u003e IO Bug",
          "source": "http://hackage.haskell.org/package/DisTract/docs/src/DisTract-Bug-Comment.html#addComment",
          "type": "function"
        },
        "index": {
          "hierarchy": "DisTract Bug Comment",
          "module": "DisTract.Bug.Comment",
          "name": "3AaddComment",
          "normalized": "Config-\u003eBug-\u003eMaybe(String,String)-\u003eIO Bug",
          "package": "DisTract",
          "partial": "Aadd Comment",
          "signature": "Config-\u003eBug-\u003eMaybe(String,String)-\u003eIO Bug",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DisTract/docs/DisTract-Bug-Comment.html#v:3AaddComment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DisTract.Bug.Comment",
          "name": "3AcommentsDir",
          "package": "DisTract",
          "signature": "FilePath",
          "source": "http://hackage.haskell.org/package/DisTract/docs/src/DisTract-Bug-Comment.html#commentsDir",
          "type": "function"
        },
        "index": {
          "hierarchy": "DisTract Bug Comment",
          "module": "DisTract.Bug.Comment",
          "name": "3AcommentsDir",
          "package": "DisTract",
          "partial": "Acomments Dir",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DisTract/docs/DisTract-Bug-Comment.html#v:3AcommentsDir"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DisTract.Bug.Comment",
          "name": "3AloadComments",
          "package": "DisTract",
          "signature": "Config -\u003e BugId -\u003e IO Comment",
          "source": "http://hackage.haskell.org/package/DisTract/docs/src/DisTract-Bug-Comment.html#loadComments",
          "type": "function"
        },
        "index": {
          "hierarchy": "DisTract Bug Comment",
          "module": "DisTract.Bug.Comment",
          "name": "3AloadComments",
          "normalized": "Config-\u003eBugId-\u003eIO Comment",
          "package": "DisTract",
          "partial": "Aload Comments",
          "signature": "Config-\u003eBugId-\u003eIO Comment",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DisTract/docs/DisTract-Bug-Comment.html#v:3AloadComments"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DisTract.Bug.Comment",
          "name": "3AwriteComment",
          "package": "DisTract",
          "signature": "Config -\u003e BugId -\u003e String -\u003e Maybe String -\u003e IO Comment",
          "source": "http://hackage.haskell.org/package/DisTract/docs/src/DisTract-Bug-Comment.html#writeComment",
          "type": "function"
        },
        "index": {
          "hierarchy": "DisTract Bug Comment",
          "module": "DisTract.Bug.Comment",
          "name": "3AwriteComment",
          "normalized": "Config-\u003eBugId-\u003eString-\u003eMaybe String-\u003eIO Comment",
          "package": "DisTract",
          "partial": "Awrite Comment",
          "signature": "Config-\u003eBugId-\u003eString-\u003eMaybe String-\u003eIO Comment",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DisTract/docs/DisTract-Bug-Comment.html#v:3AwriteComment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DisTract.Bug.Field",
          "name": "3AfieldsDir",
          "package": "DisTract",
          "signature": "FilePath",
          "source": "http://hackage.haskell.org/package/DisTract/docs/src/DisTract-Bug-Field.html#fieldsDir",
          "type": "function"
        },
        "index": {
          "hierarchy": "DisTract Bug Field",
          "module": "DisTract.Bug.Field",
          "name": "3AfieldsDir",
          "package": "DisTract",
          "partial": "Afields Dir",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DisTract/docs/DisTract-Bug-Field.html#v:3AfieldsDir"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DisTract.Bug.Field",
          "name": "3AloadFieldDfns",
          "package": "DisTract",
          "signature": "Config -\u003e IO (Map String Field)",
          "source": "http://hackage.haskell.org/package/DisTract/docs/src/DisTract-Bug-Field.html#loadFieldDfns",
          "type": "function"
        },
        "index": {
          "hierarchy": "DisTract Bug Field",
          "module": "DisTract.Bug.Field",
          "name": "3AloadFieldDfns",
          "normalized": "Config-\u003eIO(Map String Field)",
          "package": "DisTract",
          "partial": "Aload Field Dfns",
          "signature": "Config-\u003eIO(Map String Field)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DisTract/docs/DisTract-Bug-Field.html#v:3AloadFieldDfns"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DisTract.Bug.Field",
          "name": "3AloadFields",
          "package": "DisTract",
          "signature": "Config -\u003e BugId -\u003e IO FieldValues",
          "source": "http://hackage.haskell.org/package/DisTract/docs/src/DisTract-Bug-Field.html#loadFields",
          "type": "function"
        },
        "index": {
          "hierarchy": "DisTract Bug Field",
          "module": "DisTract.Bug.Field",
          "name": "3AloadFields",
          "normalized": "Config-\u003eBugId-\u003eIO FieldValues",
          "package": "DisTract",
          "partial": "Aload Fields",
          "signature": "Config-\u003eBugId-\u003eIO FieldValues",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DisTract/docs/DisTract-Bug-Field.html#v:3AloadFields"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DisTract.Bug.Field",
          "name": "3AupdateFields",
          "package": "DisTract",
          "signature": "Config -\u003e Bug -\u003e Map String Value -\u003e IO (Bug, [FieldValue])",
          "source": "http://hackage.haskell.org/package/DisTract/docs/src/DisTract-Bug-Field.html#updateFields",
          "type": "function"
        },
        "index": {
          "hierarchy": "DisTract Bug Field",
          "module": "DisTract.Bug.Field",
          "name": "3AupdateFields",
          "normalized": "Config-\u003eBug-\u003eMap String Value-\u003eIO(Bug,[FieldValue])",
          "package": "DisTract",
          "partial": "Aupdate Fields",
          "signature": "Config-\u003eBug-\u003eMap String Value-\u003eIO(Bug,[FieldValue])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DisTract/docs/DisTract-Bug-Field.html#v:3AupdateFields"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DisTract.Bug.Field",
          "name": "3AwriteFields",
          "package": "DisTract",
          "signature": "Config -\u003e BugId -\u003e Map String Value -\u003e IO FieldValues",
          "source": "http://hackage.haskell.org/package/DisTract/docs/src/DisTract-Bug-Field.html#writeFields",
          "type": "function"
        },
        "index": {
          "hierarchy": "DisTract Bug Field",
          "module": "DisTract.Bug.Field",
          "name": "3AwriteFields",
          "normalized": "Config-\u003eBugId-\u003eMap String Value-\u003eIO FieldValues",
          "package": "DisTract",
          "partial": "Awrite Fields",
          "signature": "Config-\u003eBugId-\u003eMap String Value-\u003eIO FieldValues",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DisTract/docs/DisTract-Bug-Field.html#v:3AwriteFields"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DisTract.Bug.PseudoField",
          "name": "3AloadPseudoFields",
          "package": "DisTract",
          "signature": "Config -\u003e Bug -\u003e IO Bug",
          "source": "http://hackage.haskell.org/package/DisTract/docs/src/DisTract-Bug-PseudoField.html#loadPseudoFields",
          "type": "function"
        },
        "index": {
          "hierarchy": "DisTract Bug PseudoField",
          "module": "DisTract.Bug.PseudoField",
          "name": "3AloadPseudoFields",
          "normalized": "Config-\u003eBug-\u003eIO Bug",
          "package": "DisTract",
          "partial": "Aload Pseudo Fields",
          "signature": "Config-\u003eBug-\u003eIO Bug",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DisTract/docs/DisTract-Bug-PseudoField.html#v:3AloadPseudoFields"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DisTract.Bug.PseudoField",
          "name": "3ApseudoFieldDfn",
          "package": "DisTract",
          "signature": "PseudoField -\u003e Field",
          "source": "http://hackage.haskell.org/package/DisTract/docs/src/DisTract-Bug-PseudoField.html#pseudoFieldDfn",
          "type": "function"
        },
        "index": {
          "hierarchy": "DisTract Bug PseudoField",
          "module": "DisTract.Bug.PseudoField",
          "name": "3ApseudoFieldDfn",
          "normalized": "PseudoField-\u003eField",
          "package": "DisTract",
          "partial": "Apseudo Field Dfn",
          "signature": "PseudoField-\u003eField",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DisTract/docs/DisTract-Bug-PseudoField.html#v:3ApseudoFieldDfn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DisTract.Bug",
          "name": "3AloadBug",
          "package": "DisTract",
          "signature": "Config -\u003e BugId -\u003e IO (Maybe Bug)",
          "source": "http://hackage.haskell.org/package/DisTract/docs/src/DisTract-Bug.html#loadBug",
          "type": "function"
        },
        "index": {
          "hierarchy": "DisTract Bug",
          "module": "DisTract.Bug",
          "name": "3AloadBug",
          "normalized": "Config-\u003eBugId-\u003eIO(Maybe Bug)",
          "package": "DisTract",
          "partial": "Aload Bug",
          "signature": "Config-\u003eBugId-\u003eIO(Maybe Bug)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DisTract/docs/DisTract-Bug.html#v:3AloadBug"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DisTract.Bug",
          "name": "3AmakeNewBug",
          "package": "DisTract",
          "signature": "Config -\u003e String -\u003e Map String Value -\u003e IO Bug",
          "source": "http://hackage.haskell.org/package/DisTract/docs/src/DisTract-Bug.html#makeNewBug",
          "type": "function"
        },
        "index": {
          "hierarchy": "DisTract Bug",
          "module": "DisTract.Bug",
          "name": "3AmakeNewBug",
          "normalized": "Config-\u003eString-\u003eMap String Value-\u003eIO Bug",
          "package": "DisTract",
          "partial": "Amake New Bug",
          "signature": "Config-\u003eString-\u003eMap String Value-\u003eIO Bug",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DisTract/docs/DisTract-Bug.html#v:3AmakeNewBug"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DisTract.Bug",
          "name": "3AupdateBug",
          "package": "DisTract",
          "signature": "Config -\u003e BugId -\u003e Maybe (String, String) -\u003e Map String Value -\u003e IO (Maybe Bug)",
          "source": "http://hackage.haskell.org/package/DisTract/docs/src/DisTract-Bug.html#updateBug",
          "type": "function"
        },
        "index": {
          "hierarchy": "DisTract Bug",
          "module": "DisTract.Bug",
          "name": "3AupdateBug",
          "normalized": "Config-\u003eBugId-\u003eMaybe(String,String)-\u003eMap String Value-\u003eIO(Maybe Bug)",
          "package": "DisTract",
          "partial": "Aupdate Bug",
          "signature": "Config-\u003eBugId-\u003eMaybe(String,String)-\u003eMap String Value-\u003eIO(Maybe Bug)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DisTract/docs/DisTract-Bug.html#v:3AupdateBug"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DisTract.BugFileInputLoader",
          "name": "3AparseForBugUpdate",
          "package": "DisTract",
          "signature": "FilePath -\u003e IO (Maybe (BugId, Maybe (String, String), Map String Value))",
          "source": "http://hackage.haskell.org/package/DisTract/docs/src/DisTract-BugFileInputLoader.html#parseForBugUpdate",
          "type": "function"
        },
        "index": {
          "hierarchy": "DisTract BugFileInputLoader",
          "module": "DisTract.BugFileInputLoader",
          "name": "3AparseForBugUpdate",
          "normalized": "FilePath-\u003eIO(Maybe(BugId,Maybe(String,String),Map String Value))",
          "package": "DisTract",
          "partial": "Aparse For Bug Update",
          "signature": "FilePath-\u003eIO(Maybe(BugId,Maybe(String,String),Map String Value))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DisTract/docs/DisTract-BugFileInputLoader.html#v:3AparseForBugUpdate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DisTract.BugFileInputLoader",
          "name": "3AparseForNewBug",
          "package": "DisTract",
          "signature": "FilePath -\u003e IO (Maybe (String, Map String Value))",
          "source": "http://hackage.haskell.org/package/DisTract/docs/src/DisTract-BugFileInputLoader.html#parseForNewBug",
          "type": "function"
        },
        "index": {
          "hierarchy": "DisTract BugFileInputLoader",
          "module": "DisTract.BugFileInputLoader",
          "name": "3AparseForNewBug",
          "normalized": "FilePath-\u003eIO(Maybe(String,Map String Value))",
          "package": "DisTract",
          "partial": "Aparse For New Bug",
          "signature": "FilePath-\u003eIO(Maybe(String,Map String Value))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DisTract/docs/DisTract-BugFileInputLoader.html#v:3AparseForNewBug"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DisTract.Config.Parser",
          "name": "3AfindUserInPrefsBranch",
          "package": "DisTract",
          "signature": "String -\u003e String",
          "source": "http://hackage.haskell.org/package/DisTract/docs/src/DisTract-Config-Parser.html#findUserInPrefsBranch",
          "type": "function"
        },
        "index": {
          "hierarchy": "DisTract Config Parser",
          "module": "DisTract.Config.Parser",
          "name": "3AfindUserInPrefsBranch",
          "normalized": "String-\u003eString",
          "package": "DisTract",
          "partial": "Afind User In Prefs Branch",
          "signature": "String-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DisTract/docs/DisTract-Config-Parser.html#v:3AfindUserInPrefsBranch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DisTract.Config.Parser",
          "name": "3AparseConfig",
          "package": "DisTract",
          "signature": "String -\u003e Map String String",
          "source": "http://hackage.haskell.org/package/DisTract/docs/src/DisTract-Config-Parser.html#parseConfig",
          "type": "function"
        },
        "index": {
          "hierarchy": "DisTract Config Parser",
          "module": "DisTract.Config.Parser",
          "name": "3AparseConfig",
          "normalized": "String-\u003eMap String String",
          "package": "DisTract",
          "partial": "Aparse Config",
          "signature": "String-\u003eMap String String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DisTract/docs/DisTract-Config-Parser.html#v:3AparseConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DisTract.Config",
          "name": "3AbuildConfig",
          "package": "DisTract",
          "signature": "IO Config",
          "source": "http://hackage.haskell.org/package/DisTract/docs/src/DisTract-Config.html#buildConfig",
          "type": "function"
        },
        "index": {
          "hierarchy": "DisTract Config",
          "module": "DisTract.Config",
          "name": "3AbuildConfig",
          "package": "DisTract",
          "partial": "Abuild Config",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DisTract/docs/DisTract-Config.html#v:3AbuildConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DisTract.Config",
          "name": "3AbuildConfigFromArgs",
          "package": "DisTract",
          "signature": "[String] -\u003e IO Config",
          "source": "http://hackage.haskell.org/package/DisTract/docs/src/DisTract-Config.html#buildConfigFromArgs",
          "type": "function"
        },
        "index": {
          "hierarchy": "DisTract Config",
          "module": "DisTract.Config",
          "name": "3AbuildConfigFromArgs",
          "normalized": "[String]-\u003eIO Config",
          "package": "DisTract",
          "partial": "Abuild Config From Args",
          "signature": "[String]-\u003eIO Config",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DisTract/docs/DisTract-Config.html#v:3AbuildConfigFromArgs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DisTract.Config",
          "name": "3AdefaultConfig",
          "package": "DisTract",
          "signature": "FilePath -\u003e [String] -\u003e IO Config",
          "source": "http://hackage.haskell.org/package/DisTract/docs/src/DisTract-Config.html#defaultConfig",
          "type": "function"
        },
        "index": {
          "hierarchy": "DisTract Config",
          "module": "DisTract.Config",
          "name": "3AdefaultConfig",
          "normalized": "FilePath-\u003e[String]-\u003eIO Config",
          "package": "DisTract",
          "partial": "Adefault Config",
          "signature": "FilePath-\u003e[String]-\u003eIO Config",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DisTract/docs/DisTract-Config.html#v:3AdefaultConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DisTract.Config",
          "name": "3Apackage_name",
          "package": "DisTract",
          "signature": "String",
          "source": "http://hackage.haskell.org/package/DisTract/docs/src/DisTract-Config.html#package_name",
          "type": "function"
        },
        "index": {
          "hierarchy": "DisTract Config",
          "module": "DisTract.Config",
          "name": "3Apackage_name",
          "package": "DisTract",
          "partial": "Apackage",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DisTract/docs/DisTract-Config.html#v:3Apackage_name"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DisTract.Config",
          "name": "3Apackage_version",
          "package": "DisTract",
          "signature": "String",
          "source": "http://hackage.haskell.org/package/DisTract/docs/src/DisTract-Config.html#package_version",
          "type": "function"
        },
        "index": {
          "hierarchy": "DisTract Config",
          "module": "DisTract.Config",
          "name": "3Apackage_version",
          "package": "DisTract",
          "partial": "Apackage",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DisTract/docs/DisTract-Config.html#v:3Apackage_version"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DisTract.HTML.BugList",
          "name": "3AformatBugList",
          "package": "DisTract",
          "signature": "Config -\u003e IO ()",
          "source": "http://hackage.haskell.org/package/DisTract/docs/src/DisTract-HTML-BugList.html#formatBugList",
          "type": "function"
        },
        "index": {
          "hierarchy": "DisTract HTML BugList",
          "module": "DisTract.HTML.BugList",
          "name": "3AformatBugList",
          "normalized": "Config-\u003eIO()",
          "package": "DisTract",
          "partial": "Aformat Bug List",
          "signature": "Config-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DisTract/docs/DisTract-HTML-BugList.html#v:3AformatBugList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DisTract.HTML.BugNew",
          "name": "3AformatNew",
          "package": "DisTract",
          "signature": "Config -\u003e IO ()",
          "source": "http://hackage.haskell.org/package/DisTract/docs/src/DisTract-HTML-BugNew.html#formatNew",
          "type": "function"
        },
        "index": {
          "hierarchy": "DisTract HTML BugNew",
          "module": "DisTract.HTML.BugNew",
          "name": "3AformatNew",
          "normalized": "Config-\u003eIO()",
          "package": "DisTract",
          "partial": "Aformat New",
          "signature": "Config-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DisTract/docs/DisTract-HTML-BugNew.html#v:3AformatNew"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DisTract.HTML.BugNew",
          "name": "3AnewToHTML",
          "package": "DisTract",
          "signature": "Config -\u003e IO String",
          "source": "http://hackage.haskell.org/package/DisTract/docs/src/DisTract-HTML-BugNew.html#newToHTML",
          "type": "function"
        },
        "index": {
          "hierarchy": "DisTract HTML BugNew",
          "module": "DisTract.HTML.BugNew",
          "name": "3AnewToHTML",
          "normalized": "Config-\u003eIO String",
          "package": "DisTract",
          "partial": "Anew To HTML",
          "signature": "Config-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DisTract/docs/DisTract-HTML-BugNew.html#v:3AnewToHTML"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DisTract.HTML.BugView",
          "name": "3AbugToHTML",
          "package": "DisTract",
          "signature": "Config -\u003e Bug -\u003e IO String",
          "source": "http://hackage.haskell.org/package/DisTract/docs/src/DisTract-HTML-BugView.html#bugToHTML",
          "type": "function"
        },
        "index": {
          "hierarchy": "DisTract HTML BugView",
          "module": "DisTract.HTML.BugView",
          "name": "3AbugToHTML",
          "normalized": "Config-\u003eBug-\u003eIO String",
          "package": "DisTract",
          "partial": "Abug To HTML",
          "signature": "Config-\u003eBug-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DisTract/docs/DisTract-HTML-BugView.html#v:3AbugToHTML"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DisTract.HTML.BugView",
          "name": "3AformatBug",
          "package": "DisTract",
          "signature": "Config -\u003e Maybe Bug -\u003e IO ()",
          "source": "http://hackage.haskell.org/package/DisTract/docs/src/DisTract-HTML-BugView.html#formatBug",
          "type": "function"
        },
        "index": {
          "hierarchy": "DisTract HTML BugView",
          "module": "DisTract.HTML.BugView",
          "name": "3AformatBug",
          "normalized": "Config-\u003eMaybe Bug-\u003eIO()",
          "package": "DisTract",
          "partial": "Aformat Bug",
          "signature": "Config-\u003eMaybe Bug-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DisTract/docs/DisTract-HTML-BugView.html#v:3AformatBug"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DisTract.HTML.BugView",
          "name": "3AformatBugId",
          "package": "DisTract",
          "signature": "Config -\u003e BugId -\u003e IO ()",
          "source": "http://hackage.haskell.org/package/DisTract/docs/src/DisTract-HTML-BugView.html#formatBugId",
          "type": "function"
        },
        "index": {
          "hierarchy": "DisTract HTML BugView",
          "module": "DisTract.HTML.BugView",
          "name": "3AformatBugId",
          "normalized": "Config-\u003eBugId-\u003eIO()",
          "package": "DisTract",
          "partial": "Aformat Bug Id",
          "signature": "Config-\u003eBugId-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DisTract/docs/DisTract-HTML-BugView.html#v:3AformatBugId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DisTract.HTML.Fields",
          "name": "3AtoFormInput",
          "package": "DisTract",
          "signature": "FieldValue -\u003e String",
          "source": "http://hackage.haskell.org/package/DisTract/docs/src/DisTract-HTML-Fields.html#toFormInput",
          "type": "function"
        },
        "index": {
          "hierarchy": "DisTract HTML Fields",
          "module": "DisTract.HTML.Fields",
          "name": "3AtoFormInput",
          "normalized": "FieldValue-\u003eString",
          "package": "DisTract",
          "partial": "Ato Form Input",
          "signature": "FieldValue-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DisTract/docs/DisTract-HTML-Fields.html#v:3AtoFormInput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DisTract.HTML.Fields",
          "name": "3AtoSummary",
          "package": "DisTract",
          "signature": "FieldValue -\u003e String",
          "source": "http://hackage.haskell.org/package/DisTract/docs/src/DisTract-HTML-Fields.html#toSummary",
          "type": "function"
        },
        "index": {
          "hierarchy": "DisTract HTML Fields",
          "module": "DisTract.HTML.Fields",
          "name": "3AtoSummary",
          "normalized": "FieldValue-\u003eString",
          "package": "DisTract",
          "partial": "Ato Summary",
          "signature": "FieldValue-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DisTract/docs/DisTract-HTML-Fields.html#v:3AtoSummary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DisTract.IOUtils",
          "name": "3AloadAll",
          "package": "DisTract",
          "signature": "Config -\u003e IO [Maybe Bug]",
          "source": "http://hackage.haskell.org/package/DisTract/docs/src/DisTract-IOUtils.html#loadAll",
          "type": "function"
        },
        "index": {
          "hierarchy": "DisTract IOUtils",
          "module": "DisTract.IOUtils",
          "name": "3AloadAll",
          "normalized": "Config-\u003eIO[Maybe Bug]",
          "package": "DisTract",
          "partial": "Aload All",
          "signature": "Config-\u003eIO[Maybe Bug]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DisTract/docs/DisTract-IOUtils.html#v:3AloadAll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DisTract.IOUtils",
          "name": "3AloadAndUpdateAll",
          "package": "DisTract",
          "signature": "Config -\u003e IO [Maybe Bug]",
          "source": "http://hackage.haskell.org/package/DisTract/docs/src/DisTract-IOUtils.html#loadAndUpdateAll",
          "type": "function"
        },
        "index": {
          "hierarchy": "DisTract IOUtils",
          "module": "DisTract.IOUtils",
          "name": "3AloadAndUpdateAll",
          "normalized": "Config-\u003eIO[Maybe Bug]",
          "package": "DisTract",
          "partial": "Aload And Update All",
          "signature": "Config-\u003eIO[Maybe Bug]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DisTract/docs/DisTract-IOUtils.html#v:3AloadAndUpdateAll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DisTract.IOUtils",
          "name": "3AupdateAndLoadBug",
          "package": "DisTract",
          "signature": "Config -\u003e BugId -\u003e IO (Maybe Bug)",
          "source": "http://hackage.haskell.org/package/DisTract/docs/src/DisTract-IOUtils.html#updateAndLoadBug",
          "type": "function"
        },
        "index": {
          "hierarchy": "DisTract IOUtils",
          "module": "DisTract.IOUtils",
          "name": "3AupdateAndLoadBug",
          "normalized": "Config-\u003eBugId-\u003eIO(Maybe Bug)",
          "package": "DisTract",
          "partial": "Aupdate And Load Bug",
          "signature": "Config-\u003eBugId-\u003eIO(Maybe Bug)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DisTract/docs/DisTract-IOUtils.html#v:3AupdateAndLoadBug"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DisTract.JSONUtils",
          "name": "3AlookupJsonString",
          "package": "DisTract",
          "signature": "Map String Value -\u003e String -\u003e String",
          "source": "http://hackage.haskell.org/package/DisTract/docs/src/DisTract-JSONUtils.html#lookupJsonString",
          "type": "function"
        },
        "index": {
          "hierarchy": "DisTract JSONUtils",
          "module": "DisTract.JSONUtils",
          "name": "3AlookupJsonString",
          "normalized": "Map String Value-\u003eString-\u003eString",
          "package": "DisTract",
          "partial": "Alookup Json String",
          "signature": "Map String Value-\u003eString-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DisTract/docs/DisTract-JSONUtils.html#v:3AlookupJsonString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DisTract.Layout",
          "name": "3Abin",
          "package": "DisTract",
          "signature": "FilePath",
          "source": "http://hackage.haskell.org/package/DisTract/docs/src/DisTract-Layout.html#bin",
          "type": "function"
        },
        "index": {
          "hierarchy": "DisTract Layout",
          "module": "DisTract.Layout",
          "name": "3Abin",
          "package": "DisTract",
          "partial": "Abin",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DisTract/docs/DisTract-Layout.html#v:3Abin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DisTract.Layout",
          "name": "3AbinDir",
          "package": "DisTract",
          "signature": "FilePath -\u003e FilePath",
          "source": "http://hackage.haskell.org/package/DisTract/docs/src/DisTract-Layout.html#binDir",
          "type": "function"
        },
        "index": {
          "hierarchy": "DisTract Layout",
          "module": "DisTract.Layout",
          "name": "3AbinDir",
          "normalized": "FilePath-\u003eFilePath",
          "package": "DisTract",
          "partial": "Abin Dir",
          "signature": "FilePath-\u003eFilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DisTract/docs/DisTract-Layout.html#v:3AbinDir"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DisTract.Layout",
          "name": "3AbugIdToPath",
          "package": "DisTract",
          "signature": "Config -\u003e BugId -\u003e String",
          "source": "http://hackage.haskell.org/package/DisTract/docs/src/DisTract-Layout.html#bugIdToPath",
          "type": "function"
        },
        "index": {
          "hierarchy": "DisTract Layout",
          "module": "DisTract.Layout",
          "name": "3AbugIdToPath",
          "normalized": "Config-\u003eBugId-\u003eString",
          "package": "DisTract",
          "partial": "Abug Id To Path",
          "signature": "Config-\u003eBugId-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DisTract/docs/DisTract-Layout.html#v:3AbugIdToPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DisTract.Layout",
          "name": "3Abugs",
          "package": "DisTract",
          "signature": "FilePath",
          "source": "http://hackage.haskell.org/package/DisTract/docs/src/DisTract-Layout.html#bugs",
          "type": "function"
        },
        "index": {
          "hierarchy": "DisTract Layout",
          "module": "DisTract.Layout",
          "name": "3Abugs",
          "package": "DisTract",
          "partial": "Abugs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DisTract/docs/DisTract-Layout.html#v:3Abugs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DisTract.Layout",
          "name": "3AbugsDir",
          "package": "DisTract",
          "signature": "FilePath -\u003e FilePath",
          "source": "http://hackage.haskell.org/package/DisTract/docs/src/DisTract-Layout.html#bugsDir",
          "type": "function"
        },
        "index": {
          "hierarchy": "DisTract Layout",
          "module": "DisTract.Layout",
          "name": "3AbugsDir",
          "normalized": "FilePath-\u003eFilePath",
          "package": "DisTract",
          "partial": "Abugs Dir",
          "signature": "FilePath-\u003eFilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DisTract/docs/DisTract-Layout.html#v:3AbugsDir"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DisTract.Layout",
          "name": "3Ahtml",
          "package": "DisTract",
          "signature": "FilePath",
          "source": "http://hackage.haskell.org/package/DisTract/docs/src/DisTract-Layout.html#html",
          "type": "function"
        },
        "index": {
          "hierarchy": "DisTract Layout",
          "module": "DisTract.Layout",
          "name": "3Ahtml",
          "package": "DisTract",
          "partial": "Ahtml",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DisTract/docs/DisTract-Layout.html#v:3Ahtml"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DisTract.Layout",
          "name": "3AhtmlDir",
          "package": "DisTract",
          "signature": "FilePath -\u003e FilePath",
          "source": "http://hackage.haskell.org/package/DisTract/docs/src/DisTract-Layout.html#htmlDir",
          "type": "function"
        },
        "index": {
          "hierarchy": "DisTract Layout",
          "module": "DisTract.Layout",
          "name": "3AhtmlDir",
          "normalized": "FilePath-\u003eFilePath",
          "package": "DisTract",
          "partial": "Ahtml Dir",
          "signature": "FilePath-\u003eFilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DisTract/docs/DisTract-Layout.html#v:3AhtmlDir"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DisTract.Layout",
          "name": "3Aprefs",
          "package": "DisTract",
          "signature": "FilePath",
          "source": "http://hackage.haskell.org/package/DisTract/docs/src/DisTract-Layout.html#prefs",
          "type": "function"
        },
        "index": {
          "hierarchy": "DisTract Layout",
          "module": "DisTract.Layout",
          "name": "3Aprefs",
          "package": "DisTract",
          "partial": "Aprefs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DisTract/docs/DisTract-Layout.html#v:3Aprefs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DisTract.Layout",
          "name": "3AprefsDir",
          "package": "DisTract",
          "signature": "FilePath -\u003e FilePath",
          "source": "http://hackage.haskell.org/package/DisTract/docs/src/DisTract-Layout.html#prefsDir",
          "type": "function"
        },
        "index": {
          "hierarchy": "DisTract Layout",
          "module": "DisTract.Layout",
          "name": "3AprefsDir",
          "normalized": "FilePath-\u003eFilePath",
          "package": "DisTract",
          "partial": "Aprefs Dir",
          "signature": "FilePath-\u003eFilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DisTract/docs/DisTract-Layout.html#v:3AprefsDir"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DisTract.Monotone.Interaction",
          "name": "3AmtnAdd",
          "package": "DisTract",
          "signature": "Config -\u003e FilePath -\u003e [FilePath] -\u003e IO ()",
          "source": "http://hackage.haskell.org/package/DisTract/docs/src/DisTract-Monotone-Interaction.html#mtnAdd",
          "type": "function"
        },
        "index": {
          "hierarchy": "DisTract Monotone Interaction",
          "module": "DisTract.Monotone.Interaction",
          "name": "3AmtnAdd",
          "normalized": "Config-\u003eFilePath-\u003e[FilePath]-\u003eIO()",
          "package": "DisTract",
          "partial": "Amtn Add",
          "signature": "Config-\u003eFilePath-\u003e[FilePath]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DisTract/docs/DisTract-Monotone-Interaction.html#v:3AmtnAdd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DisTract.Monotone.Interaction",
          "name": "3AmtnAddUnknownFiles",
          "package": "DisTract",
          "signature": "Config -\u003e FilePath -\u003e IO ()",
          "source": "http://hackage.haskell.org/package/DisTract/docs/src/DisTract-Monotone-Interaction.html#mtnAddUnknownFiles",
          "type": "function"
        },
        "index": {
          "hierarchy": "DisTract Monotone Interaction",
          "module": "DisTract.Monotone.Interaction",
          "name": "3AmtnAddUnknownFiles",
          "normalized": "Config-\u003eFilePath-\u003eIO()",
          "package": "DisTract",
          "partial": "Amtn Add Unknown Files",
          "signature": "Config-\u003eFilePath-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DisTract/docs/DisTract-Monotone-Interaction.html#v:3AmtnAddUnknownFiles"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DisTract.Monotone.Interaction",
          "name": "3AmtnCheckOutBranch",
          "package": "DisTract",
          "signature": "Config -\u003e FilePath -\u003e String -\u003e FilePath -\u003e IO ()",
          "source": "http://hackage.haskell.org/package/DisTract/docs/src/DisTract-Monotone-Interaction.html#mtnCheckOutBranch",
          "type": "function"
        },
        "index": {
          "hierarchy": "DisTract Monotone Interaction",
          "module": "DisTract.Monotone.Interaction",
          "name": "3AmtnCheckOutBranch",
          "normalized": "Config-\u003eFilePath-\u003eString-\u003eFilePath-\u003eIO()",
          "package": "DisTract",
          "partial": "Amtn Check Out Branch",
          "signature": "Config-\u003eFilePath-\u003eString-\u003eFilePath-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DisTract/docs/DisTract-Monotone-Interaction.html#v:3AmtnCheckOutBranch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DisTract.Monotone.Interaction",
          "name": "3AmtnCommit",
          "package": "DisTract",
          "signature": "Config -\u003e FilePath -\u003e String -\u003e [FilePath] -\u003e IO (Maybe Hash)",
          "source": "http://hackage.haskell.org/package/DisTract/docs/src/DisTract-Monotone-Interaction.html#mtnCommit",
          "type": "function"
        },
        "index": {
          "hierarchy": "DisTract Monotone Interaction",
          "module": "DisTract.Monotone.Interaction",
          "name": "3AmtnCommit",
          "normalized": "Config-\u003eFilePath-\u003eString-\u003e[FilePath]-\u003eIO(Maybe Hash)",
          "package": "DisTract",
          "partial": "Amtn Commit",
          "signature": "Config-\u003eFilePath-\u003eString-\u003e[FilePath]-\u003eIO(Maybe Hash)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DisTract/docs/DisTract-Monotone-Interaction.html#v:3AmtnCommit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DisTract.Monotone.Interaction",
          "name": "3AmtnDoesBranchExist",
          "package": "DisTract",
          "signature": "Config -\u003e String -\u003e IO Bool",
          "source": "http://hackage.haskell.org/package/DisTract/docs/src/DisTract-Monotone-Interaction.html#mtnDoesBranchExist",
          "type": "function"
        },
        "index": {
          "hierarchy": "DisTract Monotone Interaction",
          "module": "DisTract.Monotone.Interaction",
          "name": "3AmtnDoesBranchExist",
          "normalized": "Config-\u003eString-\u003eIO Bool",
          "package": "DisTract",
          "partial": "Amtn Does Branch Exist",
          "signature": "Config-\u003eString-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DisTract/docs/DisTract-Monotone-Interaction.html#v:3AmtnDoesBranchExist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DisTract.Monotone.Interaction",
          "name": "3AmtnFindCurrentBranch",
          "package": "DisTract",
          "signature": "Config -\u003e FilePath -\u003e IO String",
          "source": "http://hackage.haskell.org/package/DisTract/docs/src/DisTract-Monotone-Interaction.html#mtnFindCurrentBranch",
          "type": "function"
        },
        "index": {
          "hierarchy": "DisTract Monotone Interaction",
          "module": "DisTract.Monotone.Interaction",
          "name": "3AmtnFindCurrentBranch",
          "normalized": "Config-\u003eFilePath-\u003eIO String",
          "package": "DisTract",
          "partial": "Amtn Find Current Branch",
          "signature": "Config-\u003eFilePath-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DisTract/docs/DisTract-Monotone-Interaction.html#v:3AmtnFindCurrentBranch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DisTract.Monotone.Interaction",
          "name": "3AmtnFindVersion",
          "package": "DisTract",
          "signature": "Config -\u003e IO SupportedVersion",
          "source": "http://hackage.haskell.org/package/DisTract/docs/src/DisTract-Monotone-Interaction.html#mtnFindVersion",
          "type": "function"
        },
        "index": {
          "hierarchy": "DisTract Monotone Interaction",
          "module": "DisTract.Monotone.Interaction",
          "name": "3AmtnFindVersion",
          "normalized": "Config-\u003eIO SupportedVersion",
          "package": "DisTract",
          "partial": "Amtn Find Version",
          "signature": "Config-\u003eIO SupportedVersion",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DisTract/docs/DisTract-Monotone-Interaction.html#v:3AmtnFindVersion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DisTract.Monotone.Interaction",
          "name": "3AmtnGetBranches",
          "package": "DisTract",
          "signature": "Config -\u003e IO [String]",
          "source": "http://hackage.haskell.org/package/DisTract/docs/src/DisTract-Monotone-Interaction.html#mtnGetBranches",
          "type": "function"
        },
        "index": {
          "hierarchy": "DisTract Monotone Interaction",
          "module": "DisTract.Monotone.Interaction",
          "name": "3AmtnGetBranches",
          "normalized": "Config-\u003eIO[String]",
          "package": "DisTract",
          "partial": "Amtn Get Branches",
          "signature": "Config-\u003eIO[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DisTract/docs/DisTract-Monotone-Interaction.html#v:3AmtnGetBranches"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DisTract.Monotone.Interaction",
          "name": "3AmtnGetRevision",
          "package": "DisTract",
          "signature": "Config -\u003e Hash -\u003e IO Revision",
          "source": "http://hackage.haskell.org/package/DisTract/docs/src/DisTract-Monotone-Interaction.html#mtnGetRevision",
          "type": "function"
        },
        "index": {
          "hierarchy": "DisTract Monotone Interaction",
          "module": "DisTract.Monotone.Interaction",
          "name": "3AmtnGetRevision",
          "normalized": "Config-\u003eHash-\u003eIO Revision",
          "package": "DisTract",
          "partial": "Amtn Get Revision",
          "signature": "Config-\u003eHash-\u003eIO Revision",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DisTract/docs/DisTract-Monotone-Interaction.html#v:3AmtnGetRevision"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DisTract.Monotone.Interaction",
          "name": "3AmtnHeads",
          "package": "DisTract",
          "signature": "Config -\u003e FilePath -\u003e IO [Hash]",
          "source": "http://hackage.haskell.org/package/DisTract/docs/src/DisTract-Monotone-Interaction.html#mtnHeads",
          "type": "function"
        },
        "index": {
          "hierarchy": "DisTract Monotone Interaction",
          "module": "DisTract.Monotone.Interaction",
          "name": "3AmtnHeads",
          "normalized": "Config-\u003eFilePath-\u003eIO[Hash]",
          "package": "DisTract",
          "partial": "Amtn Heads",
          "signature": "Config-\u003eFilePath-\u003eIO[Hash]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DisTract/docs/DisTract-Monotone-Interaction.html#v:3AmtnHeads"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DisTract.Monotone.Interaction",
          "name": "3AmtnInitDB",
          "package": "DisTract",
          "signature": "Config -\u003e IO ()",
          "source": "http://hackage.haskell.org/package/DisTract/docs/src/DisTract-Monotone-Interaction.html#mtnInitDB",
          "type": "function"
        },
        "index": {
          "hierarchy": "DisTract Monotone Interaction",
          "module": "DisTract.Monotone.Interaction",
          "name": "3AmtnInitDB",
          "normalized": "Config-\u003eIO()",
          "package": "DisTract",
          "partial": "Amtn Init DB",
          "signature": "Config-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DisTract/docs/DisTract-Monotone-Interaction.html#v:3AmtnInitDB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DisTract.Monotone.Interaction",
          "name": "3AmtnLogBrief",
          "package": "DisTract",
          "signature": "Config -\u003e FilePath -\u003e [String] -\u003e FilePath -\u003e IO [LogBrief]",
          "source": "http://hackage.haskell.org/package/DisTract/docs/src/DisTract-Monotone-Interaction.html#mtnLogBrief",
          "type": "function"
        },
        "index": {
          "hierarchy": "DisTract Monotone Interaction",
          "module": "DisTract.Monotone.Interaction",
          "name": "3AmtnLogBrief",
          "normalized": "Config-\u003eFilePath-\u003e[String]-\u003eFilePath-\u003eIO[LogBrief]",
          "package": "DisTract",
          "partial": "Amtn Log Brief",
          "signature": "Config-\u003eFilePath-\u003e[String]-\u003eFilePath-\u003eIO[LogBrief]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DisTract/docs/DisTract-Monotone-Interaction.html#v:3AmtnLogBrief"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DisTract.Monotone.Interaction",
          "name": "3AmtnLsKeys",
          "package": "DisTract",
          "signature": "Config -\u003e IO ([Key], [Key])",
          "source": "http://hackage.haskell.org/package/DisTract/docs/src/DisTract-Monotone-Interaction.html#mtnLsKeys",
          "type": "function"
        },
        "index": {
          "hierarchy": "DisTract Monotone Interaction",
          "module": "DisTract.Monotone.Interaction",
          "name": "3AmtnLsKeys",
          "normalized": "Config-\u003eIO([Key],[Key])",
          "package": "DisTract",
          "partial": "Amtn Ls Keys",
          "signature": "Config-\u003eIO([Key],[Key])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DisTract/docs/DisTract-Monotone-Interaction.html#v:3AmtnLsKeys"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DisTract.Monotone.Interaction",
          "name": "3AmtnSetupBranch",
          "package": "DisTract",
          "signature": "Config -\u003e String -\u003e FilePath -\u003e IO ()",
          "source": "http://hackage.haskell.org/package/DisTract/docs/src/DisTract-Monotone-Interaction.html#mtnSetupBranch",
          "type": "function"
        },
        "index": {
          "hierarchy": "DisTract Monotone Interaction",
          "module": "DisTract.Monotone.Interaction",
          "name": "3AmtnSetupBranch",
          "normalized": "Config-\u003eString-\u003eFilePath-\u003eIO()",
          "package": "DisTract",
          "partial": "Amtn Setup Branch",
          "signature": "Config-\u003eString-\u003eFilePath-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DisTract/docs/DisTract-Monotone-Interaction.html#v:3AmtnSetupBranch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DisTract.Monotone.Interaction",
          "name": "3AmtnUpdate",
          "package": "DisTract",
          "signature": "Config -\u003e FilePath -\u003e Maybe Hash -\u003e IO ()",
          "source": "http://hackage.haskell.org/package/DisTract/docs/src/DisTract-Monotone-Interaction.html#mtnUpdate",
          "type": "function"
        },
        "index": {
          "hierarchy": "DisTract Monotone Interaction",
          "module": "DisTract.Monotone.Interaction",
          "name": "3AmtnUpdate",
          "normalized": "Config-\u003eFilePath-\u003eMaybe Hash-\u003eIO()",
          "package": "DisTract",
          "partial": "Amtn Update",
          "signature": "Config-\u003eFilePath-\u003eMaybe Hash-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DisTract/docs/DisTract-Monotone-Interaction.html#v:3AmtnUpdate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DisTract.Monotone.Parser",
          "name": "3AfindCerts",
          "package": "DisTract",
          "signature": "String -\u003e [Cert]",
          "source": "http://hackage.haskell.org/package/DisTract/docs/src/DisTract-Monotone-Parser.html#findCerts",
          "type": "function"
        },
        "index": {
          "hierarchy": "DisTract Monotone Parser",
          "module": "DisTract.Monotone.Parser",
          "name": "3AfindCerts",
          "normalized": "String-\u003e[Cert]",
          "package": "DisTract",
          "partial": "Afind Certs",
          "signature": "String-\u003e[Cert]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DisTract/docs/DisTract-Monotone-Parser.html#v:3AfindCerts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DisTract.Monotone.Parser",
          "name": "3AfindHash",
          "package": "DisTract",
          "signature": "String -\u003e Hash",
          "source": "http://hackage.haskell.org/package/DisTract/docs/src/DisTract-Monotone-Parser.html#findHash",
          "type": "function"
        },
        "index": {
          "hierarchy": "DisTract Monotone Parser",
          "module": "DisTract.Monotone.Parser",
          "name": "3AfindHash",
          "normalized": "String-\u003eHash",
          "package": "DisTract",
          "partial": "Afind Hash",
          "signature": "String-\u003eHash",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DisTract/docs/DisTract-Monotone-Parser.html#v:3AfindHash"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DisTract.Monotone.Parser",
          "name": "3AfindHashInCommitMessage",
          "package": "DisTract",
          "signature": "String -\u003e (Maybe Hash)",
          "source": "http://hackage.haskell.org/package/DisTract/docs/src/DisTract-Monotone-Parser.html#findHashInCommitMessage",
          "type": "function"
        },
        "index": {
          "hierarchy": "DisTract Monotone Parser",
          "module": "DisTract.Monotone.Parser",
          "name": "3AfindHashInCommitMessage",
          "normalized": "String-\u003e(Maybe Hash)",
          "package": "DisTract",
          "partial": "Afind Hash In Commit Message",
          "signature": "String-\u003e(Maybe Hash)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DisTract/docs/DisTract-Monotone-Parser.html#v:3AfindHashInCommitMessage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DisTract.Monotone.Parser",
          "name": "3AfindHashes",
          "package": "DisTract",
          "signature": "String -\u003e [Hash]",
          "source": "http://hackage.haskell.org/package/DisTract/docs/src/DisTract-Monotone-Parser.html#findHashes",
          "type": "function"
        },
        "index": {
          "hierarchy": "DisTract Monotone Parser",
          "module": "DisTract.Monotone.Parser",
          "name": "3AfindHashes",
          "normalized": "String-\u003e[Hash]",
          "package": "DisTract",
          "partial": "Afind Hashes",
          "signature": "String-\u003e[Hash]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DisTract/docs/DisTract-Monotone-Parser.html#v:3AfindHashes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DisTract.Monotone.Parser",
          "name": "3AfindKeys",
          "package": "DisTract",
          "signature": "String -\u003e ([Key], [Key])",
          "source": "http://hackage.haskell.org/package/DisTract/docs/src/DisTract-Monotone-Parser.html#findKeys",
          "type": "function"
        },
        "index": {
          "hierarchy": "DisTract Monotone Parser",
          "module": "DisTract.Monotone.Parser",
          "name": "3AfindKeys",
          "normalized": "String-\u003e([Key],[Key])",
          "package": "DisTract",
          "partial": "Afind Keys",
          "signature": "String-\u003e([Key],[Key])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DisTract/docs/DisTract-Monotone-Parser.html#v:3AfindKeys"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DisTract.Monotone.Parser",
          "name": "3AfindLogBriefs",
          "package": "DisTract",
          "signature": "String -\u003e [LogBrief]",
          "source": "http://hackage.haskell.org/package/DisTract/docs/src/DisTract-Monotone-Parser.html#findLogBriefs",
          "type": "function"
        },
        "index": {
          "hierarchy": "DisTract Monotone Parser",
          "module": "DisTract.Monotone.Parser",
          "name": "3AfindLogBriefs",
          "normalized": "String-\u003e[LogBrief]",
          "package": "DisTract",
          "partial": "Afind Log Briefs",
          "signature": "String-\u003e[LogBrief]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DisTract/docs/DisTract-Monotone-Parser.html#v:3AfindLogBriefs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DisTract.Monotone.Parser",
          "name": "3AfindVersionHash",
          "package": "DisTract",
          "signature": "String -\u003e Hash",
          "source": "http://hackage.haskell.org/package/DisTract/docs/src/DisTract-Monotone-Parser.html#findVersionHash",
          "type": "function"
        },
        "index": {
          "hierarchy": "DisTract Monotone Parser",
          "module": "DisTract.Monotone.Parser",
          "name": "3AfindVersionHash",
          "normalized": "String-\u003eHash",
          "package": "DisTract",
          "partial": "Afind Version Hash",
          "signature": "String-\u003eHash",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DisTract/docs/DisTract-Monotone-Parser.html#v:3AfindVersionHash"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DisTract.Monotone.Parser",
          "name": "3AhandleParseError",
          "package": "DisTract",
          "signature": "Either ParseError a -\u003e a",
          "source": "http://hackage.haskell.org/package/DisTract/docs/src/DisTract-Monotone-Parser.html#handleParseError",
          "type": "function"
        },
        "index": {
          "hierarchy": "DisTract Monotone Parser",
          "module": "DisTract.Monotone.Parser",
          "name": "3AhandleParseError",
          "normalized": "Either ParseError a-\u003ea",
          "package": "DisTract",
          "partial": "Ahandle Parse Error",
          "signature": "Either ParseError a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DisTract/docs/DisTract-Monotone-Parser.html#v:3AhandleParseError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DisTract.Monotone.Types",
          "name": "3ACert",
          "package": "DisTract",
          "source": "http://hackage.haskell.org/package/DisTract/docs/src/DisTract-Monotone-Types.html#Cert",
          "type": "data"
        },
        "index": {
          "hierarchy": "DisTract Monotone Types",
          "module": "DisTract.Monotone.Types",
          "name": "3ACert",
          "package": "DisTract",
          "partial": "ACert",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/DisTract/docs/DisTract-Monotone-Types.html#t:3ACert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DisTract.Monotone.Types",
          "name": "3AHash",
          "package": "DisTract",
          "source": "http://hackage.haskell.org/package/DisTract/docs/src/DisTract-Monotone-Types.html#Hash",
          "type": "data"
        },
        "index": {
          "hierarchy": "DisTract Monotone Types",
          "module": "DisTract.Monotone.Types",
          "name": "3AHash",
          "package": "DisTract",
          "partial": "AHash",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/DisTract/docs/DisTract-Monotone-Types.html#t:3AHash"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DisTract.Monotone.Types",
          "name": "3AKey",
          "package": "DisTract",
          "source": "http://hackage.haskell.org/package/DisTract/docs/src/DisTract-Monotone-Types.html#Key",
          "type": "data"
        },
        "index": {
          "hierarchy": "DisTract Monotone Types",
          "module": "DisTract.Monotone.Types",
          "name": "3AKey",
          "package": "DisTract",
          "partial": "AKey",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/DisTract/docs/DisTract-Monotone-Types.html#t:3AKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DisTract.Monotone.Types",
          "name": "3ALogBrief",
          "package": "DisTract",
          "source": "http://hackage.haskell.org/package/DisTract/docs/src/DisTract-Monotone-Types.html#LogBrief",
          "type": "data"
        },
        "index": {
          "hierarchy": "DisTract Monotone Types",
          "module": "DisTract.Monotone.Types",
          "name": "3ALogBrief",
          "package": "DisTract",
          "partial": "ALog Brief",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/DisTract/docs/DisTract-Monotone-Types.html#t:3ALogBrief"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DisTract.Monotone.Types",
          "name": "3ARevision",
          "package": "DisTract",
          "source": "http://hackage.haskell.org/package/DisTract/docs/src/DisTract-Monotone-Types.html#Revision",
          "type": "data"
        },
        "index": {
          "hierarchy": "DisTract Monotone Types",
          "module": "DisTract.Monotone.Types",
          "name": "3ARevision",
          "package": "DisTract",
          "partial": "ARevision",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/DisTract/docs/DisTract-Monotone-Types.html#t:3ARevision"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DisTract.Monotone.Types",
          "name": "3ASignature",
          "package": "DisTract",
          "source": "http://hackage.haskell.org/package/DisTract/docs/src/DisTract-Monotone-Types.html#Signature",
          "type": "data"
        },
        "index": {
          "hierarchy": "DisTract Monotone Types",
          "module": "DisTract.Monotone.Types",
          "name": "3ASignature",
          "package": "DisTract",
          "partial": "ASignature",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/DisTract/docs/DisTract-Monotone-Types.html#t:3ASignature"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DisTract.Monotone.Types",
          "name": "3ATrust",
          "package": "DisTract",
          "source": "http://hackage.haskell.org/package/DisTract/docs/src/DisTract-Monotone-Types.html#Trust",
          "type": "data"
        },
        "index": {
          "hierarchy": "DisTract Monotone Types",
          "module": "DisTract.Monotone.Types",
          "name": "3ATrust",
          "package": "DisTract",
          "partial": "ATrust",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/DisTract/docs/DisTract-Monotone-Types.html#t:3ATrust"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DisTract.Parsers",
          "name": "3AfindBugId",
          "package": "DisTract",
          "signature": "String -\u003e Either ParseError BugId",
          "source": "http://hackage.haskell.org/package/DisTract/docs/src/DisTract-Parsers.html#findBugId",
          "type": "function"
        },
        "index": {
          "hierarchy": "DisTract Parsers",
          "module": "DisTract.Parsers",
          "name": "3AfindBugId",
          "normalized": "String-\u003eEither ParseError BugId",
          "package": "DisTract",
          "partial": "Afind Bug Id",
          "signature": "String-\u003eEither ParseError BugId",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DisTract/docs/DisTract-Parsers.html#v:3AfindBugId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DisTract.Types",
          "name": "3ABug",
          "package": "DisTract",
          "source": "http://hackage.haskell.org/package/DisTract/docs/src/DisTract-Types.html#Bug",
          "type": "data"
        },
        "index": {
          "hierarchy": "DisTract Types",
          "module": "DisTract.Types",
          "name": "3ABug",
          "package": "DisTract",
          "partial": "ABug",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/DisTract/docs/DisTract-Types.html#t:3ABug"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DisTract.Types",
          "name": "3ABugId",
          "package": "DisTract",
          "source": "http://hackage.haskell.org/package/DisTract/docs/src/DisTract-Types.html#BugId",
          "type": "data"
        },
        "index": {
          "hierarchy": "DisTract Types",
          "module": "DisTract.Types",
          "name": "3ABugId",
          "package": "DisTract",
          "partial": "ABug Id",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/DisTract/docs/DisTract-Types.html#t:3ABugId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DisTract.Types",
          "name": "3AComment",
          "package": "DisTract",
          "source": "http://hackage.haskell.org/package/DisTract/docs/src/DisTract-Types.html#Comment",
          "type": "data"
        },
        "index": {
          "hierarchy": "DisTract Types",
          "module": "DisTract.Types",
          "name": "3AComment",
          "package": "DisTract",
          "partial": "AComment",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/DisTract/docs/DisTract-Types.html#t:3AComment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DisTract.Types",
          "name": "3AConfig",
          "package": "DisTract",
          "source": "http://hackage.haskell.org/package/DisTract/docs/src/DisTract-Types.html#Config",
          "type": "data"
        },
        "index": {
          "hierarchy": "DisTract Types",
          "module": "DisTract.Types",
          "name": "3AConfig",
          "package": "DisTract",
          "partial": "AConfig",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/DisTract/docs/DisTract-Types.html#t:3AConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DisTract.Types",
          "name": "3AField",
          "package": "DisTract",
          "source": "http://hackage.haskell.org/package/DisTract/docs/src/DisTract-Types.html#Field",
          "type": "data"
        },
        "index": {
          "hierarchy": "DisTract Types",
          "module": "DisTract.Types",
          "name": "3AField",
          "package": "DisTract",
          "partial": "AField",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/DisTract/docs/DisTract-Types.html#t:3AField"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DisTract.Types",
          "name": "3AFieldDfns",
          "package": "DisTract",
          "source": "http://hackage.haskell.org/package/DisTract/docs/src/DisTract-Types.html#FieldDfns",
          "type": "type"
        },
        "index": {
          "hierarchy": "DisTract Types",
          "module": "DisTract.Types",
          "name": "3AFieldDfns",
          "package": "DisTract",
          "partial": "AField Dfns",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/DisTract/docs/DisTract-Types.html#t:3AFieldDfns"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DisTract.Types",
          "name": "3AFieldType",
          "package": "DisTract",
          "source": "http://hackage.haskell.org/package/DisTract/docs/src/DisTract-Types.html#FieldType",
          "type": "data"
        },
        "index": {
          "hierarchy": "DisTract Types",
          "module": "DisTract.Types",
          "name": "3AFieldType",
          "package": "DisTract",
          "partial": "AField Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/DisTract/docs/DisTract-Types.html#t:3AFieldType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DisTract.Types",
          "name": "3AFieldValue",
          "package": "DisTract",
          "source": "http://hackage.haskell.org/package/DisTract/docs/src/DisTract-Types.html#FieldValue",
          "type": "data"
        },
        "index": {
          "hierarchy": "DisTract Types",
          "module": "DisTract.Types",
          "name": "3AFieldValue",
          "package": "DisTract",
          "partial": "AField Value",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/DisTract/docs/DisTract-Types.html#t:3AFieldValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DisTract.Types",
          "name": "3AFieldValues",
          "package": "DisTract",
          "source": "http://hackage.haskell.org/package/DisTract/docs/src/DisTract-Types.html#FieldValues",
          "type": "type"
        },
        "index": {
          "hierarchy": "DisTract Types",
          "module": "DisTract.Types",
          "name": "3AFieldValues",
          "package": "DisTract",
          "partial": "AField Values",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/DisTract/docs/DisTract-Types.html#t:3AFieldValues"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DisTract.Types",
          "name": "3ALog",
          "package": "DisTract",
          "source": "http://hackage.haskell.org/package/DisTract/docs/src/DisTract-Types.html#Log",
          "type": "data"
        },
        "index": {
          "hierarchy": "DisTract Types",
          "module": "DisTract.Types",
          "name": "3ALog",
          "package": "DisTract",
          "partial": "ALog",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/DisTract/docs/DisTract-Types.html#t:3ALog"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DisTract.Types",
          "name": "3ASupportedVersion",
          "package": "DisTract",
          "source": "http://hackage.haskell.org/package/DisTract/docs/src/DisTract-Types.html#SupportedVersion",
          "type": "data"
        },
        "index": {
          "hierarchy": "DisTract Types",
          "module": "DisTract.Types",
          "name": "3ASupportedVersion",
          "package": "DisTract",
          "partial": "ASupported Version",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/DisTract/docs/DisTract-Types.html#t:3ASupportedVersion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DisTract.Types",
          "name": "3AValidator",
          "package": "DisTract",
          "source": "http://hackage.haskell.org/package/DisTract/docs/src/DisTract-Types.html#Validator",
          "type": "type"
        },
        "index": {
          "hierarchy": "DisTract Types",
          "module": "DisTract.Types",
          "name": "3AValidator",
          "package": "DisTract",
          "partial": "AValidator",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/DisTract/docs/DisTract-Types.html#t:3AValidator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DisTract.Types",
          "name": "3ALogger",
          "package": "DisTract",
          "source": "http://hackage.haskell.org/package/DisTract/docs/src/DisTract-Types.html#Logger",
          "type": "class"
        },
        "index": {
          "hierarchy": "DisTract Types",
          "module": "DisTract.Types",
          "name": "3ALogger",
          "package": "DisTract",
          "partial": "ALogger",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/DisTract/docs/DisTract-Types.html#v:3ALogger"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DisTract.Types",
          "name": "3AisPseudoField",
          "package": "DisTract",
          "signature": "Field -\u003e Bool",
          "source": "http://hackage.haskell.org/package/DisTract/docs/src/DisTract-Types.html#isPseudoField",
          "type": "function"
        },
        "index": {
          "hierarchy": "DisTract Types",
          "module": "DisTract.Types",
          "name": "3AisPseudoField",
          "normalized": "Field-\u003eBool",
          "package": "DisTract",
          "partial": "Ais Pseudo Field",
          "signature": "Field-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DisTract/docs/DisTract-Types.html#v:3AisPseudoField"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DisTract.Types",
          "name": "3AisPseudoFieldValue",
          "package": "DisTract",
          "signature": "FieldValue -\u003e Bool",
          "source": "http://hackage.haskell.org/package/DisTract/docs/src/DisTract-Types.html#isPseudoFieldValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "DisTract Types",
          "module": "DisTract.Types",
          "name": "3AisPseudoFieldValue",
          "normalized": "FieldValue-\u003eBool",
          "package": "DisTract",
          "partial": "Ais Pseudo Field Value",
          "signature": "FieldValue-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DisTract/docs/DisTract-Types.html#v:3AisPseudoFieldValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DisTract.Types",
          "name": "3AlogStr",
          "package": "DisTract",
          "signature": "a -\u003e String -\u003e IO ()",
          "source": "http://hackage.haskell.org/package/DisTract/docs/src/DisTract-Types.html#logStr",
          "type": "function"
        },
        "index": {
          "hierarchy": "DisTract Types",
          "module": "DisTract.Types",
          "name": "3AlogStr",
          "normalized": "a-\u003eString-\u003eIO()",
          "package": "DisTract",
          "partial": "Alog Str",
          "signature": "a-\u003eString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DisTract/docs/DisTract-Types.html#v:3AlogStr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DisTract.Types",
          "name": "3AlogWithPrefix",
          "package": "DisTract",
          "signature": "a -\u003e String -\u003e String -\u003e IO ()",
          "source": "http://hackage.haskell.org/package/DisTract/docs/src/DisTract-Types.html#logWithPrefix",
          "type": "function"
        },
        "index": {
          "hierarchy": "DisTract Types",
          "module": "DisTract.Types",
          "name": "3AlogWithPrefix",
          "normalized": "a-\u003eString-\u003eString-\u003eIO()",
          "package": "DisTract",
          "partial": "Alog With Prefix",
          "signature": "a-\u003eString-\u003eString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DisTract/docs/DisTract-Types.html#v:3AlogWithPrefix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DisTract.Utils",
          "name": "3AbugIdDateFormat",
          "package": "DisTract",
          "signature": "String",
          "source": "http://hackage.haskell.org/package/DisTract/docs/src/DisTract-Utils.html#bugIdDateFormat",
          "type": "function"
        },
        "index": {
          "hierarchy": "DisTract Utils",
          "module": "DisTract.Utils",
          "name": "3AbugIdDateFormat",
          "package": "DisTract",
          "partial": "Abug Id Date Format",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DisTract/docs/DisTract-Utils.html#v:3AbugIdDateFormat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DisTract.Utils",
          "name": "3AbugIdDateFormatLength",
          "package": "DisTract",
          "signature": "Int",
          "source": "http://hackage.haskell.org/package/DisTract/docs/src/DisTract-Utils.html#bugIdDateFormatLength",
          "type": "function"
        },
        "index": {
          "hierarchy": "DisTract Utils",
          "module": "DisTract.Utils",
          "name": "3AbugIdDateFormatLength",
          "package": "DisTract",
          "partial": "Abug Id Date Format Length",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DisTract/docs/DisTract-Utils.html#v:3AbugIdDateFormatLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DisTract.Utils",
          "name": "3AbugIdTimeFormatter",
          "package": "DisTract",
          "signature": "UTCTime -\u003e String",
          "source": "http://hackage.haskell.org/package/DisTract/docs/src/DisTract-Utils.html#bugIdTimeFormatter",
          "type": "function"
        },
        "index": {
          "hierarchy": "DisTract Utils",
          "module": "DisTract.Utils",
          "name": "3AbugIdTimeFormatter",
          "normalized": "UTCTime-\u003eString",
          "package": "DisTract",
          "partial": "Abug Id Time Formatter",
          "signature": "UTCTime-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DisTract/docs/DisTract-Utils.html#v:3AbugIdTimeFormatter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DisTract.Utils",
          "name": "3AformatTimeHuman",
          "package": "DisTract",
          "signature": "t -\u003e IO String",
          "source": "http://hackage.haskell.org/package/DisTract/docs/src/DisTract-Utils.html#formatTimeHuman",
          "type": "function"
        },
        "index": {
          "hierarchy": "DisTract Utils",
          "module": "DisTract.Utils",
          "name": "3AformatTimeHuman",
          "normalized": "a-\u003eIO String",
          "package": "DisTract",
          "partial": "Aformat Time Human",
          "signature": "t-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DisTract/docs/DisTract-Utils.html#v:3AformatTimeHuman"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DisTract.Utils",
          "name": "3AhumanTimeFormat",
          "package": "DisTract",
          "signature": "String",
          "source": "http://hackage.haskell.org/package/DisTract/docs/src/DisTract-Utils.html#humanTimeFormat",
          "type": "function"
        },
        "index": {
          "hierarchy": "DisTract Utils",
          "module": "DisTract.Utils",
          "name": "3AhumanTimeFormat",
          "package": "DisTract",
          "partial": "Ahuman Time Format",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DisTract/docs/DisTract-Utils.html#v:3AhumanTimeFormat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DisTract.Utils",
          "name": "3AintersperseEvery",
          "package": "DisTract",
          "signature": "Int -\u003e a -\u003e [a] -\u003e [a]",
          "source": "http://hackage.haskell.org/package/DisTract/docs/src/DisTract-Utils.html#intersperseEvery",
          "type": "function"
        },
        "index": {
          "hierarchy": "DisTract Utils",
          "module": "DisTract.Utils",
          "name": "3AintersperseEvery",
          "normalized": "Int-\u003ea-\u003e[a]-\u003e[a]",
          "package": "DisTract",
          "partial": "Aintersperse Every",
          "signature": "Int-\u003ea-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DisTract/docs/DisTract-Utils.html#v:3AintersperseEvery"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DisTract.Utils",
          "name": "3AmonotoneDateFormat",
          "package": "DisTract",
          "signature": "String",
          "source": "http://hackage.haskell.org/package/DisTract/docs/src/DisTract-Utils.html#monotoneDateFormat",
          "type": "function"
        },
        "index": {
          "hierarchy": "DisTract Utils",
          "module": "DisTract.Utils",
          "name": "3AmonotoneDateFormat",
          "package": "DisTract",
          "partial": "Amonotone Date Format",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DisTract/docs/DisTract-Utils.html#v:3AmonotoneDateFormat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DisTract.Utils",
          "name": "3AmonotoneDateFormatLength",
          "package": "DisTract",
          "signature": "Int",
          "source": "http://hackage.haskell.org/package/DisTract/docs/src/DisTract-Utils.html#monotoneDateFormatLength",
          "type": "function"
        },
        "index": {
          "hierarchy": "DisTract Utils",
          "module": "DisTract.Utils",
          "name": "3AmonotoneDateFormatLength",
          "package": "DisTract",
          "partial": "Amonotone Date Format Length",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DisTract/docs/DisTract-Utils.html#v:3AmonotoneDateFormatLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DisTract.Utils",
          "name": "3AreadFileStrict",
          "package": "DisTract",
          "signature": "FilePath -\u003e IO String",
          "source": "http://hackage.haskell.org/package/DisTract/docs/src/DisTract-Utils.html#readFileStrict",
          "type": "function"
        },
        "index": {
          "hierarchy": "DisTract Utils",
          "module": "DisTract.Utils",
          "name": "3AreadFileStrict",
          "normalized": "FilePath-\u003eIO String",
          "package": "DisTract",
          "partial": "Aread File Strict",
          "signature": "FilePath-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DisTract/docs/DisTract-Utils.html#v:3AreadFileStrict"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DisTract.Utils",
          "name": "3AwriteFileStrict",
          "package": "DisTract",
          "signature": "FilePath -\u003e String -\u003e IO ()",
          "source": "http://hackage.haskell.org/package/DisTract/docs/src/DisTract-Utils.html#writeFileStrict",
          "type": "function"
        },
        "index": {
          "hierarchy": "DisTract Utils",
          "module": "DisTract.Utils",
          "name": "3AwriteFileStrict",
          "normalized": "FilePath-\u003eString-\u003eIO()",
          "package": "DisTract",
          "partial": "Awrite File Strict",
          "signature": "FilePath-\u003eString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DisTract/docs/DisTract-Utils.html#v:3AwriteFileStrict"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DisTract.Version",
          "name": "3AgetNameVersionFromCabal",
          "package": "DisTract",
          "signature": "FilePath -\u003e Q [Dec]",
          "source": "http://hackage.haskell.org/package/DisTract/docs/src/DisTract-Version.html#getNameVersionFromCabal",
          "type": "function"
        },
        "index": {
          "hierarchy": "DisTract Version",
          "module": "DisTract.Version",
          "name": "3AgetNameVersionFromCabal",
          "normalized": "FilePath-\u003eQ[Dec]",
          "package": "DisTract",
          "partial": "Aget Name Version From Cabal",
          "signature": "FilePath-\u003eQ[Dec]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DisTract/docs/DisTract-Version.html#v:3AgetNameVersionFromCabal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "JSON",
          "name": "3AValue",
          "package": "DisTract",
          "source": "http://hackage.haskell.org/package/DisTract/docs/src/JSON.html#Value",
          "type": "data"
        },
        "index": {
          "hierarchy": "JSON",
          "module": "JSON",
          "name": "3AValue",
          "package": "DisTract",
          "partial": "AValue",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/DisTract/docs/JSON.html#t:3AValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "JSON",
          "name": "3Ajson",
          "package": "DisTract",
          "signature": "Parser Value",
          "source": "http://hackage.haskell.org/package/DisTract/docs/src/JSON.html#json",
          "type": "function"
        },
        "index": {
          "hierarchy": "JSON",
          "module": "JSON",
          "name": "3Ajson",
          "package": "DisTract",
          "partial": "Ajson",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DisTract/docs/JSON.html#v:3Ajson"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "JSON",
          "name": "3Aparse",
          "package": "DisTract",
          "signature": "String -\u003e Maybe Value",
          "source": "http://hackage.haskell.org/package/DisTract/docs/src/JSON.html#parse",
          "type": "function"
        },
        "index": {
          "hierarchy": "JSON",
          "module": "JSON",
          "name": "3Aparse",
          "normalized": "String-\u003eMaybe Value",
          "package": "DisTract",
          "partial": "Aparse",
          "signature": "String-\u003eMaybe Value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DisTract/docs/JSON.html#v:3Aparse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "JSON",
          "name": "3Astringify",
          "package": "DisTract",
          "signature": "Value -\u003e String",
          "source": "http://hackage.haskell.org/package/DisTract/docs/src/JSON.html#stringify",
          "type": "function"
        },
        "index": {
          "hierarchy": "JSON",
          "module": "JSON",
          "name": "3Astringify",
          "normalized": "Value-\u003eString",
          "package": "DisTract",
          "partial": "Astringify",
          "signature": "Value-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DisTract/docs/JSON.html#v:3Astringify"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "JSON",
          "name": "3Astringify'",
          "package": "DisTract",
          "signature": "(Char -\u003e Bool) -\u003e Value -\u003e String",
          "source": "http://hackage.haskell.org/package/DisTract/docs/src/JSON.html#stringify%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "JSON",
          "module": "JSON",
          "name": "3Astringify'",
          "normalized": "(Char-\u003eBool)-\u003eValue-\u003eString",
          "package": "DisTract",
          "partial": "Astringify'",
          "signature": "(Char-\u003eBool)-\u003eValue-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DisTract/docs/JSON.html#v:3Astringify'"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "JSON",
          "name": "3AtoDoc",
          "package": "DisTract",
          "signature": "Value -\u003e Doc",
          "source": "http://hackage.haskell.org/package/DisTract/docs/src/JSON.html#toDoc",
          "type": "function"
        },
        "index": {
          "hierarchy": "JSON",
          "module": "JSON",
          "name": "3AtoDoc",
          "normalized": "Value-\u003eDoc",
          "package": "DisTract",
          "partial": "Ato Doc",
          "signature": "Value-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DisTract/docs/JSON.html#v:3AtoDoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "JSON",
          "name": "3AtoDoc'",
          "package": "DisTract",
          "signature": "(Char -\u003e Bool) -\u003e Value -\u003e Doc",
          "source": "http://hackage.haskell.org/package/DisTract/docs/src/JSON.html#toDoc%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "JSON",
          "module": "JSON",
          "name": "3AtoDoc'",
          "normalized": "(Char-\u003eBool)-\u003eValue-\u003eDoc",
          "package": "DisTract",
          "partial": "Ato Doc'",
          "signature": "(Char-\u003eBool)-\u003eValue-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DisTract/docs/JSON.html#v:3AtoDoc'"
      }
    }
  ]
]