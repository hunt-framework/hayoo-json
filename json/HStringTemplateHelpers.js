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
        "word": "HStringTemplateHelpers"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFunctions I found useful for doing webapps with HStringTemplate.\n\u003c/p\u003e\u003cp\u003eMore usage examples can be found by grep -r \"Text.StringTemplate.Helpers\" in happs-tutorial, on hackage. \n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.StringTemplate.Helpers",
          "name": "Helpers",
          "package": "HStringTemplateHelpers",
          "source": "src/Text-StringTemplate-Helpers.html",
          "type": "module"
        },
        "index": {
          "description": "Functions found useful for doing webapps with HStringTemplate More usage examples can be found by grep Text.StringTemplate.Helpers in happs-tutorial on hackage",
          "hierarchy": "Text StringTemplate Helpers",
          "module": "Text.StringTemplate.Helpers",
          "name": "Helpers",
          "package": "HStringTemplateHelpers",
          "partial": "Helpers",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HStringTemplateHelpers/docs/Text-StringTemplate-Helpers.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.StringTemplate.Helpers",
          "name": "STDirGroups",
          "package": "HStringTemplateHelpers",
          "source": "src/Text-StringTemplate-Helpers.html#STDirGroups",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text StringTemplate Helpers",
          "module": "Text.StringTemplate.Helpers",
          "name": "STDirGroups",
          "package": "HStringTemplateHelpers",
          "partial": "STDir Groups",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/HStringTemplateHelpers/docs/Text-StringTemplate-Helpers.html#t:STDirGroups"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.StringTemplate.Helpers",
          "name": "badTmplVarName",
          "package": "HStringTemplateHelpers",
          "signature": "String -\u003e Bool",
          "source": "src/Text-StringTemplate-Helpers.html#badTmplVarName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text StringTemplate Helpers",
          "module": "Text.StringTemplate.Helpers",
          "name": "badTmplVarName",
          "normalized": "String-\u003eBool",
          "package": "HStringTemplateHelpers",
          "partial": "Tmpl Var Name",
          "signature": "String-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HStringTemplateHelpers/docs/Text-StringTemplate-Helpers.html#v:badTmplVarName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003edirectoryGroup helper function for more flexibility, and rewritten to use\n     do notation rather than applicative style that melted my brain.\n\u003c/p\u003e\u003cp\u003eignoreTemplate specifies a filter for templates that should be skipped, eg backup files etc.\n\u003c/p\u003e\u003cp\u003eerrorTemplate specifies a filter which will cause function to fail.\n\u003c/p\u003e\u003cpre\u003e directoryGroupHAppS = directoryGroupNew' ignoret badTmplVarName\n where ignoret f = not . null . filter (=='#') $ f \n\u003c/pre\u003e",
          "module": "Text.StringTemplate.Helpers",
          "name": "directoryGroupNew'",
          "package": "HStringTemplateHelpers",
          "signature": "(FilePath -\u003e Bool) -\u003e (String -\u003e Bool) -\u003e FilePath -\u003e IO (STGroup a)",
          "source": "src/Text-StringTemplate-Helpers.html#directoryGroupNew%27",
          "type": "function"
        },
        "index": {
          "description": "directoryGroup helper function for more flexibility and rewritten to use do notation rather than applicative style that melted my brain ignoreTemplate specifies filter for templates that should be skipped eg backup files etc errorTemplate specifies filter which will cause function to fail directoryGroupHAppS directoryGroupNew ignoret badTmplVarName where ignoret not null filter",
          "hierarchy": "Text StringTemplate Helpers",
          "module": "Text.StringTemplate.Helpers",
          "name": "directoryGroupNew'",
          "normalized": "(FilePath-\u003eBool)-\u003e(String-\u003eBool)-\u003eFilePath-\u003eIO(STGroup a)",
          "package": "HStringTemplateHelpers",
          "partial": "Group New'",
          "signature": "(FilePath-\u003eBool)-\u003e(String-\u003eBool)-\u003eFilePath-\u003eIO(STGroup a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HStringTemplateHelpers/docs/Text-StringTemplate-Helpers.html#v:directoryGroupNew-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStrict directoryGroups, which is the right thing.\n\u003c/p\u003e",
          "module": "Text.StringTemplate.Helpers",
          "name": "directoryGroups",
          "package": "HStringTemplateHelpers",
          "signature": "FilePath -\u003e IO (Map FilePath (STGroup a))",
          "source": "src/Text-StringTemplate-Helpers.html#directoryGroups",
          "type": "function"
        },
        "index": {
          "description": "Strict directoryGroups which is the right thing",
          "hierarchy": "Text StringTemplate Helpers",
          "module": "Text.StringTemplate.Helpers",
          "name": "directoryGroups",
          "normalized": "FilePath-\u003eIO(Map FilePath(STGroup a))",
          "package": "HStringTemplateHelpers",
          "partial": "Groups",
          "signature": "FilePath-\u003eIO(Map FilePath(STGroup a))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HStringTemplateHelpers/docs/Text-StringTemplate-Helpers.html#v:directoryGroups"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHelper function to calculate a map of directory groups from a top-level directory\n\u003c/p\u003e\u003cp\u003eEach directory gives rise to its own groups.\n\u003c/p\u003e\u003cp\u003eGroups are independent; groups from higher in the directory structure do not have access to groups lower.\n\u003c/p\u003e\u003cp\u003eThe top group has key \".\" (mnemonic, current directory), other groups have key names of subdirectories, including the starting ., eg \"./templates/path/to/subdir\"\n\u003c/p\u003e",
          "module": "Text.StringTemplate.Helpers",
          "name": "directoryGroups'",
          "package": "HStringTemplateHelpers",
          "signature": "(FilePath -\u003e IO a) -\u003e FilePath -\u003e IO (Map FilePath a)",
          "source": "src/Text-StringTemplate-Helpers.html#directoryGroups%27",
          "type": "function"
        },
        "index": {
          "description": "Helper function to calculate map of directory groups from top-level directory Each directory gives rise to its own groups Groups are independent groups from higher in the directory structure do not have access to groups lower The top group has key mnemonic current directory other groups have key names of subdirectories including the starting eg templates path to subdir",
          "hierarchy": "Text StringTemplate Helpers",
          "module": "Text.StringTemplate.Helpers",
          "name": "directoryGroups'",
          "normalized": "(FilePath-\u003eIO a)-\u003eFilePath-\u003eIO(Map FilePath a)",
          "package": "HStringTemplateHelpers",
          "partial": "Groups'",
          "signature": "(FilePath-\u003eIO a)-\u003eFilePath-\u003eIO(Map FilePath a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HStringTemplateHelpers/docs/Text-StringTemplate-Helpers.html#v:directoryGroups-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNon-strict. I'm pretty sure this is wrong. Based on default directoryGroup function in HStringTemplate package \n\u003c/p\u003e",
          "module": "Text.StringTemplate.Helpers",
          "name": "directoryGroupsOld",
          "package": "HStringTemplateHelpers",
          "signature": "FilePath -\u003e IO (Map FilePath (STGroup a))",
          "source": "src/Text-StringTemplate-Helpers.html#directoryGroupsOld",
          "type": "function"
        },
        "index": {
          "description": "Non-strict pretty sure this is wrong Based on default directoryGroup function in HStringTemplate package",
          "hierarchy": "Text StringTemplate Helpers",
          "module": "Text.StringTemplate.Helpers",
          "name": "directoryGroupsOld",
          "normalized": "FilePath-\u003eIO(Map FilePath(STGroup a))",
          "package": "HStringTemplateHelpers",
          "partial": "Groups Old",
          "signature": "FilePath-\u003eIO(Map FilePath(STGroup a))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HStringTemplateHelpers/docs/Text-StringTemplate-Helpers.html#v:directoryGroupsOld"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe STGroup can't be shown in a useful way because it's a function type, but you can at least show the directories via Data.Map.keys.\n\u003c/p\u003e",
          "module": "Text.StringTemplate.Helpers",
          "name": "dirgroupKeys",
          "package": "HStringTemplateHelpers",
          "signature": "STDirGroups a -\u003e [FilePath]",
          "source": "src/Text-StringTemplate-Helpers.html#dirgroupKeys",
          "type": "function"
        },
        "index": {
          "description": "The STGroup can be shown in useful way because it function type but you can at least show the directories via Data.Map.keys",
          "hierarchy": "Text StringTemplate Helpers",
          "module": "Text.StringTemplate.Helpers",
          "name": "dirgroupKeys",
          "normalized": "STDirGroups a-\u003e[FilePath]",
          "package": "HStringTemplateHelpers",
          "partial": "Keys",
          "signature": "STDirGroups a-\u003e[FilePath]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HStringTemplateHelpers/docs/Text-StringTemplate-Helpers.html#v:dirgroupKeys"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e example: getTG \"./baselayout\" ts'\n\u003c/pre\u003e",
          "module": "Text.StringTemplate.Helpers",
          "name": "getTemplateGroup",
          "package": "HStringTemplateHelpers",
          "signature": "FilePath -\u003e STDirGroups a -\u003e STGroup a",
          "source": "src/Text-StringTemplate-Helpers.html#getTemplateGroup",
          "type": "function"
        },
        "index": {
          "description": "example getTG baselayout ts",
          "hierarchy": "Text StringTemplate Helpers",
          "module": "Text.StringTemplate.Helpers",
          "name": "getTemplateGroup",
          "normalized": "FilePath-\u003eSTDirGroups a-\u003eSTGroup a",
          "package": "HStringTemplateHelpers",
          "partial": "Template Group",
          "signature": "FilePath-\u003eSTDirGroups a-\u003eSTGroup a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HStringTemplateHelpers/docs/Text-StringTemplate-Helpers.html#v:getTemplateGroup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.StringTemplate.Helpers",
          "name": "lookupDirgroup",
          "package": "HStringTemplateHelpers",
          "signature": "FilePath -\u003e STDirGroups a -\u003e Maybe (STGroup a)",
          "source": "src/Text-StringTemplate-Helpers.html#lookupDirgroup",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text StringTemplate Helpers",
          "module": "Text.StringTemplate.Helpers",
          "name": "lookupDirgroup",
          "normalized": "FilePath-\u003eSTDirGroups a-\u003eMaybe(STGroup a)",
          "package": "HStringTemplateHelpers",
          "partial": "Dirgroup",
          "signature": "FilePath-\u003eSTDirGroups a-\u003eMaybe(STGroup a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HStringTemplateHelpers/docs/Text-StringTemplate-Helpers.html#v:lookupDirgroup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.StringTemplate.Helpers",
          "name": "readTmplDef",
          "package": "HStringTemplateHelpers",
          "signature": "b -\u003e STGroup String -\u003e FilePath -\u003e b",
          "source": "src/Text-StringTemplate-Helpers.html#readTmplDef",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text StringTemplate Helpers",
          "module": "Text.StringTemplate.Helpers",
          "name": "readTmplDef",
          "normalized": "a-\u003eSTGroup String-\u003eFilePath-\u003ea",
          "package": "HStringTemplateHelpers",
          "partial": "Tmpl Def",
          "signature": "b-\u003eSTGroup String-\u003eFilePath-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HStringTemplateHelpers/docs/Text-StringTemplate-Helpers.html#v:readTmplDef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.StringTemplate.Helpers",
          "name": "readTmplM",
          "package": "HStringTemplateHelpers",
          "signature": "STGroup String -\u003e FilePath -\u003e m a",
          "source": "src/Text-StringTemplate-Helpers.html#readTmplM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text StringTemplate Helpers",
          "module": "Text.StringTemplate.Helpers",
          "name": "readTmplM",
          "normalized": "STGroup String-\u003eFilePath-\u003ea b",
          "package": "HStringTemplateHelpers",
          "partial": "Tmpl",
          "signature": "STGroup String-\u003eFilePath-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HStringTemplateHelpers/docs/Text-StringTemplate-Helpers.html#v:readTmplM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.StringTemplate.Helpers",
          "name": "readTmplTuples",
          "package": "HStringTemplateHelpers",
          "signature": "STGroup String -\u003e String -\u003e [(String, String)]",
          "source": "src/Text-StringTemplate-Helpers.html#readTmplTuples",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text StringTemplate Helpers",
          "module": "Text.StringTemplate.Helpers",
          "name": "readTmplTuples",
          "normalized": "STGroup String-\u003eString-\u003e[(String,String)]",
          "package": "HStringTemplateHelpers",
          "partial": "Tmpl Tuples",
          "signature": "STGroup String-\u003eString-\u003e[(String,String)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HStringTemplateHelpers/docs/Text-StringTemplate-Helpers.html#v:readTmplTuples"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e render1 [(\"name\",\"Bill\")] \"Hi, my name is $name$\"\n render1 attribs tmpl = render . setManyAttrib attribs . newSTMP $ tmpl\n\u003c/pre\u003e",
          "module": "Text.StringTemplate.Helpers",
          "name": "render1",
          "package": "HStringTemplateHelpers",
          "signature": "[(String, String)] -\u003e String -\u003e String",
          "source": "src/Text-StringTemplate-Helpers.html#render1",
          "type": "function"
        },
        "index": {
          "description": "render1 name Bill Hi my name is name render1 attribs tmpl render setManyAttrib attribs newSTMP tmpl",
          "hierarchy": "Text StringTemplate Helpers",
          "module": "Text.StringTemplate.Helpers",
          "name": "render1",
          "normalized": "[(String,String)]-\u003eString-\u003eString",
          "package": "HStringTemplateHelpers",
          "signature": "[(String,String)]-\u003eString-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HStringTemplateHelpers/docs/Text-StringTemplate-Helpers.html#v:render1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e example: renderTemplateDirGroup ts' \"./baselayout\" \"base\" \n\u003c/pre\u003e",
          "module": "Text.StringTemplate.Helpers",
          "name": "renderTemplateDirGroup",
          "package": "HStringTemplateHelpers",
          "signature": "STDirGroups String -\u003e FilePath -\u003e String -\u003e [(String, a)] -\u003e String",
          "source": "src/Text-StringTemplate-Helpers.html#renderTemplateDirGroup",
          "type": "function"
        },
        "index": {
          "description": "example renderTemplateDirGroup ts baselayout base",
          "hierarchy": "Text StringTemplate Helpers",
          "module": "Text.StringTemplate.Helpers",
          "name": "renderTemplateDirGroup",
          "normalized": "STDirGroups String-\u003eFilePath-\u003eString-\u003e[(String,a)]-\u003eString",
          "package": "HStringTemplateHelpers",
          "partial": "Template Dir Group",
          "signature": "STDirGroups String-\u003eFilePath-\u003eString-\u003e[(String,a)]-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HStringTemplateHelpers/docs/Text-StringTemplate-Helpers.html#v:renderTemplateDirGroup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChooses a template from an STGroup, or errors if not found.\n\u003c/p\u003e\u003cp\u003eRender that template using attrs.\n\u003c/p\u003e\u003cp\u003eIf a template k/v pair is repeated, it appears twice. (Perhaps a clue to buggy behavior?)\n\u003c/p\u003e\u003cp\u003eRepeated keys could be eliminated by running clean:\n\u003c/p\u003e\u003cpre\u003e clean = nubBy (\\(a1,b1) (a2,b2) -\u003e a1 == a2) . sortBy (\\(a1,b1) (a2,b2) -\u003e a1 `compare` a2)\n\u003c/pre\u003e\u003cp\u003eThe ToSElem type is probably either String or [String]\n\u003c/p\u003e",
          "module": "Text.StringTemplate.Helpers",
          "name": "renderTemplateGroup",
          "package": "HStringTemplateHelpers",
          "signature": "STGroup String -\u003e [(String, a)] -\u003e [Char] -\u003e String",
          "source": "src/Text-StringTemplate-Helpers.html#renderTemplateGroup",
          "type": "function"
        },
        "index": {
          "description": "Chooses template from an STGroup or errors if not found Render that template using attrs If template pair is repeated it appears twice Perhaps clue to buggy behavior Repeated keys could be eliminated by running clean clean nubBy a1 b1 a2 b2 a1 a2 sortBy a1 b1 a2 b2 a1 compare a2 The ToSElem type is probably either String or String",
          "hierarchy": "Text StringTemplate Helpers",
          "module": "Text.StringTemplate.Helpers",
          "name": "renderTemplateGroup",
          "normalized": "STGroup String-\u003e[(String,a)]-\u003e[Char]-\u003eString",
          "package": "HStringTemplateHelpers",
          "partial": "Template Group",
          "signature": "STGroup String-\u003e[(String,a)]-\u003e[Char]-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HStringTemplateHelpers/docs/Text-StringTemplate-Helpers.html#v:renderTemplateGroup"
      }
    }
  ]
]