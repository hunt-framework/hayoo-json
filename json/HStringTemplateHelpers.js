[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HStringTemplateHelpers/docs/Text-StringTemplate-Helpers.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFunctions I found useful for doing webapps with HStringTemplate.\n\u003c/p\u003e\u003cp\u003eMore usage examples can be found by grep -r \"Text.StringTemplate.Helpers\" in happs-tutorial, on hackage. \n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Text.StringTemplate.Helpers",
        "fct-package": "HStringTemplateHelpers",
        "fct-signature": "module",
        "fct-source": "src/Text-StringTemplate-Helpers.html",
        "fct-type": "module",
        "title": "Helpers"
      },
      "index": {
        "description": "Functions found useful for doing webapps with HStringTemplate More usage examples can be found by grep Text.StringTemplate.Helpers in happs-tutorial on hackage",
        "hierarchy": "Text StringTemplate Helpers",
        "module": "Text.StringTemplate.Helpers",
        "name": "Helpers",
        "normalized": "",
        "package": "HStringTemplateHelpers",
        "partial": "Helpers",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HStringTemplateHelpers/docs/Text-StringTemplate-Helpers.html#t:STDirGroups",
      "description": {
        "fct-module": "Text.StringTemplate.Helpers",
        "fct-package": "HStringTemplateHelpers",
        "fct-signature": "type",
        "fct-source": "src/Text-StringTemplate-Helpers.html#STDirGroups",
        "fct-type": "type",
        "title": "STDirGroups"
      },
      "index": {
        "description": "",
        "hierarchy": "Text StringTemplate Helpers",
        "module": "Text.StringTemplate.Helpers",
        "name": "STDirGroups",
        "normalized": "",
        "package": "HStringTemplateHelpers",
        "partial": "STDir Groups",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HStringTemplateHelpers/docs/Text-StringTemplate-Helpers.html#v:badTmplVarName",
      "description": {
        "fct-module": "Text.StringTemplate.Helpers",
        "fct-package": "HStringTemplateHelpers",
        "fct-signature": "String -\u003e Bool",
        "fct-source": "src/Text-StringTemplate-Helpers.html#badTmplVarName",
        "fct-type": "function",
        "title": "badTmplVarName"
      },
      "index": {
        "description": "",
        "hierarchy": "Text StringTemplate Helpers",
        "module": "Text.StringTemplate.Helpers",
        "name": "badTmplVarName",
        "normalized": "String-\u003eBool",
        "package": "HStringTemplateHelpers",
        "partial": "Tmpl Var Name",
        "signature": "String-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HStringTemplateHelpers/docs/Text-StringTemplate-Helpers.html#v:directoryGroupNew-39-",
      "description": {
        "fct-descr": "\u003cp\u003edirectoryGroup helper function for more flexibility, and rewritten to use\n     do notation rather than applicative style that melted my brain.\n\u003c/p\u003e\u003cp\u003eignoreTemplate specifies a filter for templates that should be skipped, eg backup files etc.\n\u003c/p\u003e\u003cp\u003eerrorTemplate specifies a filter which will cause function to fail.\n\u003c/p\u003e\u003cpre\u003e directoryGroupHAppS = directoryGroupNew' ignoret badTmplVarName\n where ignoret f = not . null . filter (=='#') $ f \n\u003c/pre\u003e",
        "fct-module": "Text.StringTemplate.Helpers",
        "fct-package": "HStringTemplateHelpers",
        "fct-signature": "(FilePath -\u003e Bool) -\u003e (String -\u003e Bool) -\u003e FilePath -\u003e IO (STGroup a)",
        "fct-source": "src/Text-StringTemplate-Helpers.html#directoryGroupNew%27",
        "fct-type": "function",
        "title": "directoryGroupNew'"
      },
      "index": {
        "description": "directoryGroup helper function for more flexibility and rewritten to use do notation rather than applicative style that melted my brain ignoreTemplate specifies filter for templates that should be skipped eg backup files etc errorTemplate specifies filter which will cause function to fail directoryGroupHAppS directoryGroupNew ignoret badTmplVarName where ignoret not null filter",
        "hierarchy": "Text StringTemplate Helpers",
        "module": "Text.StringTemplate.Helpers",
        "name": "directoryGroupNew'",
        "normalized": "(FilePath-\u003eBool)-\u003e(String-\u003eBool)-\u003eFilePath-\u003eIO(STGroup a)",
        "package": "HStringTemplateHelpers",
        "partial": "Group New'",
        "signature": "(FilePath-\u003eBool)-\u003e(String-\u003eBool)-\u003eFilePath-\u003eIO(STGroup a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HStringTemplateHelpers/docs/Text-StringTemplate-Helpers.html#v:directoryGroups",
      "description": {
        "fct-descr": "\u003cp\u003eStrict directoryGroups, which is the right thing.\n\u003c/p\u003e",
        "fct-module": "Text.StringTemplate.Helpers",
        "fct-package": "HStringTemplateHelpers",
        "fct-signature": "FilePath -\u003e IO (Map FilePath (STGroup a))",
        "fct-source": "src/Text-StringTemplate-Helpers.html#directoryGroups",
        "fct-type": "function",
        "title": "directoryGroups"
      },
      "index": {
        "description": "Strict directoryGroups which is the right thing",
        "hierarchy": "Text StringTemplate Helpers",
        "module": "Text.StringTemplate.Helpers",
        "name": "directoryGroups",
        "normalized": "FilePath-\u003eIO(Map FilePath(STGroup a))",
        "package": "HStringTemplateHelpers",
        "partial": "Groups",
        "signature": "FilePath-\u003eIO(Map FilePath(STGroup a))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HStringTemplateHelpers/docs/Text-StringTemplate-Helpers.html#v:directoryGroups-39-",
      "description": {
        "fct-descr": "\u003cp\u003eHelper function to calculate a map of directory groups from a top-level directory\n\u003c/p\u003e\u003cp\u003eEach directory gives rise to its own groups.\n\u003c/p\u003e\u003cp\u003eGroups are independent; groups from higher in the directory structure do not have access to groups lower.\n\u003c/p\u003e\u003cp\u003eThe top group has key \".\" (mnemonic, current directory), other groups have key names of subdirectories, including the starting ., eg \"./templates/path/to/subdir\"\n\u003c/p\u003e",
        "fct-module": "Text.StringTemplate.Helpers",
        "fct-package": "HStringTemplateHelpers",
        "fct-signature": "(FilePath -\u003e IO a) -\u003e FilePath -\u003e IO (Map FilePath a)",
        "fct-source": "src/Text-StringTemplate-Helpers.html#directoryGroups%27",
        "fct-type": "function",
        "title": "directoryGroups'"
      },
      "index": {
        "description": "Helper function to calculate map of directory groups from top-level directory Each directory gives rise to its own groups Groups are independent groups from higher in the directory structure do not have access to groups lower The top group has key mnemonic current directory other groups have key names of subdirectories including the starting eg templates path to subdir",
        "hierarchy": "Text StringTemplate Helpers",
        "module": "Text.StringTemplate.Helpers",
        "name": "directoryGroups'",
        "normalized": "(FilePath-\u003eIO a)-\u003eFilePath-\u003eIO(Map FilePath a)",
        "package": "HStringTemplateHelpers",
        "partial": "Groups'",
        "signature": "(FilePath-\u003eIO a)-\u003eFilePath-\u003eIO(Map FilePath a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HStringTemplateHelpers/docs/Text-StringTemplate-Helpers.html#v:directoryGroupsOld",
      "description": {
        "fct-descr": "\u003cp\u003eNon-strict. I'm pretty sure this is wrong. Based on default directoryGroup function in HStringTemplate package \n\u003c/p\u003e",
        "fct-module": "Text.StringTemplate.Helpers",
        "fct-package": "HStringTemplateHelpers",
        "fct-signature": "FilePath -\u003e IO (Map FilePath (STGroup a))",
        "fct-source": "src/Text-StringTemplate-Helpers.html#directoryGroupsOld",
        "fct-type": "function",
        "title": "directoryGroupsOld"
      },
      "index": {
        "description": "Non-strict pretty sure this is wrong Based on default directoryGroup function in HStringTemplate package",
        "hierarchy": "Text StringTemplate Helpers",
        "module": "Text.StringTemplate.Helpers",
        "name": "directoryGroupsOld",
        "normalized": "FilePath-\u003eIO(Map FilePath(STGroup a))",
        "package": "HStringTemplateHelpers",
        "partial": "Groups Old",
        "signature": "FilePath-\u003eIO(Map FilePath(STGroup a))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HStringTemplateHelpers/docs/Text-StringTemplate-Helpers.html#v:dirgroupKeys",
      "description": {
        "fct-descr": "\u003cp\u003eThe STGroup can't be shown in a useful way because it's a function type, but you can at least show the directories via Data.Map.keys.\n\u003c/p\u003e",
        "fct-module": "Text.StringTemplate.Helpers",
        "fct-package": "HStringTemplateHelpers",
        "fct-signature": "STDirGroups a -\u003e [FilePath]",
        "fct-source": "src/Text-StringTemplate-Helpers.html#dirgroupKeys",
        "fct-type": "function",
        "title": "dirgroupKeys"
      },
      "index": {
        "description": "The STGroup can be shown in useful way because it function type but you can at least show the directories via Data.Map.keys",
        "hierarchy": "Text StringTemplate Helpers",
        "module": "Text.StringTemplate.Helpers",
        "name": "dirgroupKeys",
        "normalized": "STDirGroups a-\u003e[FilePath]",
        "package": "HStringTemplateHelpers",
        "partial": "Keys",
        "signature": "STDirGroups a-\u003e[FilePath]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HStringTemplateHelpers/docs/Text-StringTemplate-Helpers.html#v:getTemplateGroup",
      "description": {
        "fct-descr": "\u003cpre\u003e example: getTG \"./baselayout\" ts'\n\u003c/pre\u003e",
        "fct-module": "Text.StringTemplate.Helpers",
        "fct-package": "HStringTemplateHelpers",
        "fct-signature": "FilePath -\u003e STDirGroups a -\u003e STGroup a",
        "fct-source": "src/Text-StringTemplate-Helpers.html#getTemplateGroup",
        "fct-type": "function",
        "title": "getTemplateGroup"
      },
      "index": {
        "description": "example getTG baselayout ts",
        "hierarchy": "Text StringTemplate Helpers",
        "module": "Text.StringTemplate.Helpers",
        "name": "getTemplateGroup",
        "normalized": "FilePath-\u003eSTDirGroups a-\u003eSTGroup a",
        "package": "HStringTemplateHelpers",
        "partial": "Template Group",
        "signature": "FilePath-\u003eSTDirGroups a-\u003eSTGroup a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HStringTemplateHelpers/docs/Text-StringTemplate-Helpers.html#v:lookupDirgroup",
      "description": {
        "fct-module": "Text.StringTemplate.Helpers",
        "fct-package": "HStringTemplateHelpers",
        "fct-signature": "FilePath -\u003e STDirGroups a -\u003e Maybe (STGroup a)",
        "fct-source": "src/Text-StringTemplate-Helpers.html#lookupDirgroup",
        "fct-type": "function",
        "title": "lookupDirgroup"
      },
      "index": {
        "description": "",
        "hierarchy": "Text StringTemplate Helpers",
        "module": "Text.StringTemplate.Helpers",
        "name": "lookupDirgroup",
        "normalized": "FilePath-\u003eSTDirGroups a-\u003eMaybe(STGroup a)",
        "package": "HStringTemplateHelpers",
        "partial": "Dirgroup",
        "signature": "FilePath-\u003eSTDirGroups a-\u003eMaybe(STGroup a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HStringTemplateHelpers/docs/Text-StringTemplate-Helpers.html#v:readTmplDef",
      "description": {
        "fct-module": "Text.StringTemplate.Helpers",
        "fct-package": "HStringTemplateHelpers",
        "fct-signature": "b -\u003e STGroup String -\u003e FilePath -\u003e b",
        "fct-source": "src/Text-StringTemplate-Helpers.html#readTmplDef",
        "fct-type": "function",
        "title": "readTmplDef"
      },
      "index": {
        "description": "",
        "hierarchy": "Text StringTemplate Helpers",
        "module": "Text.StringTemplate.Helpers",
        "name": "readTmplDef",
        "normalized": "a-\u003eSTGroup String-\u003eFilePath-\u003ea",
        "package": "HStringTemplateHelpers",
        "partial": "Tmpl Def",
        "signature": "b-\u003eSTGroup String-\u003eFilePath-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HStringTemplateHelpers/docs/Text-StringTemplate-Helpers.html#v:readTmplM",
      "description": {
        "fct-module": "Text.StringTemplate.Helpers",
        "fct-package": "HStringTemplateHelpers",
        "fct-signature": "STGroup String -\u003e FilePath -\u003e m a",
        "fct-source": "src/Text-StringTemplate-Helpers.html#readTmplM",
        "fct-type": "function",
        "title": "readTmplM"
      },
      "index": {
        "description": "",
        "hierarchy": "Text StringTemplate Helpers",
        "module": "Text.StringTemplate.Helpers",
        "name": "readTmplM",
        "normalized": "STGroup String-\u003eFilePath-\u003ea b",
        "package": "HStringTemplateHelpers",
        "partial": "Tmpl",
        "signature": "STGroup String-\u003eFilePath-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HStringTemplateHelpers/docs/Text-StringTemplate-Helpers.html#v:readTmplTuples",
      "description": {
        "fct-module": "Text.StringTemplate.Helpers",
        "fct-package": "HStringTemplateHelpers",
        "fct-signature": "STGroup String -\u003e String -\u003e [(String, String)]",
        "fct-source": "src/Text-StringTemplate-Helpers.html#readTmplTuples",
        "fct-type": "function",
        "title": "readTmplTuples"
      },
      "index": {
        "description": "",
        "hierarchy": "Text StringTemplate Helpers",
        "module": "Text.StringTemplate.Helpers",
        "name": "readTmplTuples",
        "normalized": "STGroup String-\u003eString-\u003e[(String,String)]",
        "package": "HStringTemplateHelpers",
        "partial": "Tmpl Tuples",
        "signature": "STGroup String-\u003eString-\u003e[(String,String)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HStringTemplateHelpers/docs/Text-StringTemplate-Helpers.html#v:render1",
      "description": {
        "fct-descr": "\u003cpre\u003e render1 [(\"name\",\"Bill\")] \"Hi, my name is $name$\"\n render1 attribs tmpl = render . setManyAttrib attribs . newSTMP $ tmpl\n\u003c/pre\u003e",
        "fct-module": "Text.StringTemplate.Helpers",
        "fct-package": "HStringTemplateHelpers",
        "fct-signature": "[(String, String)] -\u003e String -\u003e String",
        "fct-source": "src/Text-StringTemplate-Helpers.html#render1",
        "fct-type": "function",
        "title": "render1"
      },
      "index": {
        "description": "render1 name Bill Hi my name is name render1 attribs tmpl render setManyAttrib attribs newSTMP tmpl",
        "hierarchy": "Text StringTemplate Helpers",
        "module": "Text.StringTemplate.Helpers",
        "name": "render1",
        "normalized": "[(String,String)]-\u003eString-\u003eString",
        "package": "HStringTemplateHelpers",
        "partial": "",
        "signature": "[(String,String)]-\u003eString-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HStringTemplateHelpers/docs/Text-StringTemplate-Helpers.html#v:renderTemplateDirGroup",
      "description": {
        "fct-descr": "\u003cpre\u003e example: renderTemplateDirGroup ts' \"./baselayout\" \"base\" \n\u003c/pre\u003e",
        "fct-module": "Text.StringTemplate.Helpers",
        "fct-package": "HStringTemplateHelpers",
        "fct-signature": "STDirGroups String -\u003e FilePath -\u003e String -\u003e [(String, a)] -\u003e String",
        "fct-source": "src/Text-StringTemplate-Helpers.html#renderTemplateDirGroup",
        "fct-type": "function",
        "title": "renderTemplateDirGroup"
      },
      "index": {
        "description": "example renderTemplateDirGroup ts baselayout base",
        "hierarchy": "Text StringTemplate Helpers",
        "module": "Text.StringTemplate.Helpers",
        "name": "renderTemplateDirGroup",
        "normalized": "STDirGroups String-\u003eFilePath-\u003eString-\u003e[(String,a)]-\u003eString",
        "package": "HStringTemplateHelpers",
        "partial": "Template Dir Group",
        "signature": "STDirGroups String-\u003eFilePath-\u003eString-\u003e[(String,a)]-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HStringTemplateHelpers/docs/Text-StringTemplate-Helpers.html#v:renderTemplateGroup",
      "description": {
        "fct-descr": "\u003cp\u003eChooses a template from an STGroup, or errors if not found.\n\u003c/p\u003e\u003cp\u003eRender that template using attrs.\n\u003c/p\u003e\u003cp\u003eIf a template k/v pair is repeated, it appears twice. (Perhaps a clue to buggy behavior?)\n\u003c/p\u003e\u003cp\u003eRepeated keys could be eliminated by running clean:\n\u003c/p\u003e\u003cpre\u003e clean = nubBy (\\(a1,b1) (a2,b2) -\u003e a1 == a2) . sortBy (\\(a1,b1) (a2,b2) -\u003e a1 `compare` a2)\n\u003c/pre\u003e\u003cp\u003eThe ToSElem type is probably either String or [String]\n\u003c/p\u003e",
        "fct-module": "Text.StringTemplate.Helpers",
        "fct-package": "HStringTemplateHelpers",
        "fct-signature": "STGroup String -\u003e [(String, a)] -\u003e [Char] -\u003e String",
        "fct-source": "src/Text-StringTemplate-Helpers.html#renderTemplateGroup",
        "fct-type": "function",
        "title": "renderTemplateGroup"
      },
      "index": {
        "description": "Chooses template from an STGroup or errors if not found Render that template using attrs If template pair is repeated it appears twice Perhaps clue to buggy behavior Repeated keys could be eliminated by running clean clean nubBy a1 b1 a2 b2 a1 a2 sortBy a1 b1 a2 b2 a1 compare a2 The ToSElem type is probably either String or String",
        "hierarchy": "Text StringTemplate Helpers",
        "module": "Text.StringTemplate.Helpers",
        "name": "renderTemplateGroup",
        "normalized": "STGroup String-\u003e[(String,a)]-\u003e[Char]-\u003eString",
        "package": "HStringTemplateHelpers",
        "partial": "Template Group",
        "signature": "STGroup String-\u003e[(String,a)]-\u003e[Char]-\u003eString"
      }
    }
  }
]